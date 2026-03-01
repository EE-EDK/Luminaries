(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const af="172",Vm=0,qf=1,Wm=2,N0=1,z0=2,Ni=3,ps=0,on=1,Ct=2,ki=0,Oo=1,Qt=2,Yf=3,Zf=4,Xm=5,Ns=100,qm=101,Ym=102,Zm=103,$m=104,jm=200,Jm=201,Km=202,Qm=203,vu=204,_u=205,tg=206,eg=207,ng=208,ig=209,sg=210,og=211,rg=212,ag=213,cg=214,yu=0,wu=1,Su=2,Jo=3,bu=4,Tu=5,Eu=6,Au=7,F0=0,lg=1,ug=2,fs=0,hg=1,fg=2,dg=3,O0=4,pg=5,mg=6,gg=7,B0=300,Ko=301,Qo=302,Ru=303,Cu=304,Kc=306,tr=1e3,Fs=1001,Pu=1002,Hn=1003,xg=1004,da=1005,wi=1006,cl=1007,Os=1008,Yi=1009,G0=1010,k0=1011,$r=1012,cf=1013,Xs=1014,Si=1015,Hi=1016,lf=1017,uf=1018,er=1020,H0=35902,V0=1021,W0=1022,ui=1023,X0=1024,q0=1025,Bo=1026,nr=1027,hf=1028,ff=1029,Y0=1030,df=1031,pf=1033,ac=33776,cc=33777,lc=33778,uc=33779,Iu=35840,Lu=35841,Du=35842,Uu=35843,Nu=36196,zu=37492,Fu=37496,Ou=37808,Bu=37809,Gu=37810,ku=37811,Hu=37812,Vu=37813,Wu=37814,Xu=37815,qu=37816,Yu=37817,Zu=37818,$u=37819,ju=37820,Ju=37821,hc=36492,Ku=36494,Qu=36495,Z0=36283,th=36284,eh=36285,nh=36286,Mg=3200,vg=3201,$0=0,_g=1,cs="",En="srgb",ir="srgb-linear",Ac="linear",xe="srgb",Qs=7680,$f=519,yg=512,wg=513,Sg=514,j0=515,bg=516,Tg=517,Eg=518,Ag=519,ih=35044,_e=35048,jf="300 es",Bi=2e3,Rc=2001;class fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ll=Math.PI/180,sh=180/Math.PI;function Vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Rg(i,t){return(i%t+t)%t}function ul(i,t,e){return(1-e)*i+e*t}function _i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,o,r,a,u,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,u,c)}set(t,e,n,s,o,r,a,u,c){const l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=o,l[5]=u,l[6]=n,l[7]=r,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],u=n[6],c=n[1],l=n[4],h=n[7],f=n[2],p=n[5],m=n[8],x=s[0],d=s[3],g=s[6],S=s[1],_=s[4],w=s[7],A=s[2],E=s[5],T=s[8];return o[0]=r*x+a*S+u*A,o[3]=r*d+a*_+u*E,o[6]=r*g+a*w+u*T,o[1]=c*x+l*S+h*A,o[4]=c*d+l*_+h*E,o[7]=c*g+l*w+h*T,o[2]=f*x+p*S+m*A,o[5]=f*d+p*_+m*E,o[8]=f*g+p*w+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],u=t[6],c=t[7],l=t[8];return e*r*l-e*a*c-n*o*l+n*a*u+s*o*c-s*r*u}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],u=t[6],c=t[7],l=t[8],h=l*r-a*c,f=a*u-l*o,p=c*o-r*u,m=e*h+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=h*x,t[1]=(s*c-l*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(l*e-s*u)*x,t[5]=(s*o-a*e)*x,t[6]=p*x,t[7]=(n*u-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const u=Math.cos(o),c=Math.sin(o);return this.set(n*u,n*c,-n*(u*r+c*a)+r+t,-s*c,s*u,-s*(-c*r+u*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hl.makeScale(t,e)),this}rotate(t){return this.premultiply(hl.makeRotation(-t)),this}translate(t,e){return this.premultiply(hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new qt;function J0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cg(){const i=Cc("canvas");return i.style.display="block",i}const Jf={};function To(i){i in Jf||(Jf[i]=!0,console.warn(i))}function Pg(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Ig(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kf=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qf=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dg(){const i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===xe&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===xe&&(s.r=Go(s.r),s.g=Go(s.g),s.b=Go(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cs?Ac:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:t,whitePoint:n,transfer:Ac,toXYZ:Kf,fromXYZ:Qf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Kf,fromXYZ:Qf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}const he=Dg();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let to;class Ug{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{to===void 0&&(to=Cc("canvas")),to.width=t.width,to.height=t.height;const n=to.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=to}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Wi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ng=0;class K0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(fl(s[r].image)):o.push(fl(s[r]))}else o=fl(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function fl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ug.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zg=0;class rn extends fr{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=Fs,s=Fs,o=wi,r=Os,a=ui,u=Yi,c=rn.DEFAULT_ANISOTROPY,l=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Vi(),this.name="",this.source=new K0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==B0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case Fs:t.x=t.x<0?0:1;break;case Pu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case Fs:t.y=t.y<0?0:1;break;case Pu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=B0;rn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const u=t.elements,c=u[0],l=u[4],h=u[8],f=u[1],p=u[5],m=u[9],x=u[2],d=u[6],g=u[10];if(Math.abs(l-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-d)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+d)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,w=(p+1)/2,A=(g+1)/2,E=(l+f)/4,T=(h+x)/4,b=(m+d)/4;return _>w&&_>A?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=E/n,o=T/n):w>A?w<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),n=E/s,o=b/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=T/o,s=b/o),this.set(n,s,o,e),this}let S=Math.sqrt((d-m)*(d-m)+(h-x)*(h-x)+(f-l)*(f-l));return Math.abs(S)<.001&&(S=1),this.x=(d-m)/S,this.y=(h-x)/S,this.z=(f-l)/S,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fg extends fr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new K0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Fg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Q0 extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Og extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let u=n[s+0],c=n[s+1],l=n[s+2],h=n[s+3];const f=o[r+0],p=o[r+1],m=o[r+2],x=o[r+3];if(a===0){t[e+0]=u,t[e+1]=c,t[e+2]=l,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(h!==x||u!==f||c!==p||l!==m){let d=1-a;const g=u*f+c*p+l*m+h*x,S=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,g*S);d=Math.sin(d*E)/A,a=Math.sin(a*E)/A}const w=a*S;if(u=u*d+f*w,c=c*d+p*w,l=l*d+m*w,h=h*d+x*w,d===1-a){const A=1/Math.sqrt(u*u+c*c+l*l+h*h);u*=A,c*=A,l*=A,h*=A}}t[e]=u,t[e+1]=c,t[e+2]=l,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],u=n[s+1],c=n[s+2],l=n[s+3],h=o[r],f=o[r+1],p=o[r+2],m=o[r+3];return t[e]=a*m+l*h+u*p-c*f,t[e+1]=u*m+l*f+c*h-a*p,t[e+2]=c*m+l*p+a*f-u*h,t[e+3]=l*m-a*h-u*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,u=Math.sin,c=a(n/2),l=a(s/2),h=a(o/2),f=u(n/2),p=u(s/2),m=u(o/2);switch(r){case"XYZ":this._x=f*l*h+c*p*m,this._y=c*p*h-f*l*m,this._z=c*l*m+f*p*h,this._w=c*l*h-f*p*m;break;case"YXZ":this._x=f*l*h+c*p*m,this._y=c*p*h-f*l*m,this._z=c*l*m-f*p*h,this._w=c*l*h+f*p*m;break;case"ZXY":this._x=f*l*h-c*p*m,this._y=c*p*h+f*l*m,this._z=c*l*m+f*p*h,this._w=c*l*h-f*p*m;break;case"ZYX":this._x=f*l*h-c*p*m,this._y=c*p*h+f*l*m,this._z=c*l*m-f*p*h,this._w=c*l*h+f*p*m;break;case"YZX":this._x=f*l*h+c*p*m,this._y=c*p*h+f*l*m,this._z=c*l*m-f*p*h,this._w=c*l*h-f*p*m;break;case"XZY":this._x=f*l*h-c*p*m,this._y=c*p*h-f*l*m,this._z=c*l*m+f*p*h,this._w=c*l*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],u=e[9],c=e[2],l=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-u)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(l-u)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(u+l)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(u+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,u=e._y,c=e._z,l=e._w;return this._x=n*l+r*a+s*c-o*u,this._y=s*l+r*u+o*a-n*c,this._z=o*l+r*c+n*u-s*a,this._w=r*l-n*a-s*u-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(u),l=Math.atan2(c,a),h=Math.sin((1-e)*l)/c,f=Math.sin(e*l)/c;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(td.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(td.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,u=t.w,c=2*(r*s-a*n),l=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+u*c+r*h-a*l,this.y=n+u*l+a*c-o*h,this.z=s+u*h+o*l-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,u=e.z;return this.x=s*u-o*a,this.y=o*r-n*u,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new z,td=new ds;class $s{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ri):ri.fromBufferAttribute(o,r),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),ma.subVectors(this.max,xr),eo.subVectors(t.a,xr),no.subVectors(t.b,xr),io.subVectors(t.c,xr),$i.subVectors(no,eo),ji.subVectors(io,no),Ms.subVectors(eo,io);let e=[0,-$i.z,$i.y,0,-ji.z,ji.y,0,-Ms.z,Ms.y,$i.z,0,-$i.x,ji.z,0,-ji.x,Ms.z,0,-Ms.x,-$i.y,$i.x,0,-ji.y,ji.x,0,-Ms.y,Ms.x,0];return!pl(e,eo,no,io,ma)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,eo,no,io,ma))?!1:(ga.crossVectors($i,ji),e=[ga.x,ga.y,ga.z],pl(e,eo,no,io,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ci=[new z,new z,new z,new z,new z,new z,new z,new z],ri=new z,pa=new $s,eo=new z,no=new z,io=new z,$i=new z,ji=new z,Ms=new z,xr=new z,ma=new z,ga=new z,vs=new z;function pl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){vs.fromArray(i,o);const a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),u=t.dot(vs),c=e.dot(vs),l=n.dot(vs);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>a)return!1}return!0}const Bg=new $s,Mr=new z,ml=new z;class js{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);const e=Mr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(ml)),this.expandByPoint(Mr.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new z,gl=new z,xa=new z,Ji=new z,xl=new z,Ma=new z,Ml=new z;class mf{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gl.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(gl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(xa),a=Ji.dot(this.direction),u=-Ji.dot(xa),c=Ji.lengthSq(),l=Math.abs(1-r*r);let h,f,p,m;if(l>0)if(h=r*u-a,f=r*a-u,m=o*l,h>=0)if(f>=-m)if(f<=m){const x=1/l;h*=x,f*=x,p=h*(h+r*f+2*a)+f*(r*h+f+2*u)+c}else f=o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*u)+c;else f=-o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*u)+c;else f<=-m?(h=Math.max(0,-(-r*o+a)),f=h>0?-o:Math.min(Math.max(-o,-u),o),p=-h*h+f*(f+2*u)+c):f<=m?(h=0,f=Math.min(Math.max(-o,-u),o),p=f*(f+2*u)+c):(h=Math.max(0,-(r*o+a)),f=h>0?o:Math.min(Math.max(-o,-u),o),p=-h*h+f*(f+2*u)+c);else f=r>0?-o:o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gl).addScaledVector(xa,f),p}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const n=Pi.dot(this.direction),s=Pi.dot(Pi)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,u=n+r;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,u;const c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),l>=0?(o=(t.min.y-f.y)*l,r=(t.max.y-f.y)*l):(o=(t.max.y-f.y)*l,r=(t.min.y-f.y)*l),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-f.z)*h,u=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,u=(t.min.z-f.z)*h),n>u||a>s)||((a>n||n!==n)&&(n=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,s,o){xl.subVectors(e,t),Ma.subVectors(n,t),Ml.crossVectors(xl,Ma);let r=this.direction.dot(Ml),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ji.subVectors(this.origin,t);const u=a*this.direction.dot(Ma.crossVectors(Ji,Ma));if(u<0)return null;const c=a*this.direction.dot(xl.cross(Ji));if(c<0||u+c>r)return null;const l=-a*Ji.dot(Ml);return l<0?null:this.at(l/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,o,r,a,u,c,l,h,f,p,m,x,d){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,u,c,l,h,f,p,m,x,d)}set(t,e,n,s,o,r,a,u,c,l,h,f,p,m,x,d){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=u,g[2]=c,g[6]=l,g[10]=h,g[14]=f,g[3]=p,g[7]=m,g[11]=x,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/so.setFromMatrixColumn(t,0).length(),o=1/so.setFromMatrixColumn(t,1).length(),r=1/so.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),u=Math.cos(s),c=Math.sin(s),l=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const f=r*l,p=r*h,m=a*l,x=a*h;e[0]=u*l,e[4]=-u*h,e[8]=c,e[1]=p+m*c,e[5]=f-x*c,e[9]=-a*u,e[2]=x-f*c,e[6]=m+p*c,e[10]=r*u}else if(t.order==="YXZ"){const f=u*l,p=u*h,m=c*l,x=c*h;e[0]=f+x*a,e[4]=m*a-p,e[8]=r*c,e[1]=r*h,e[5]=r*l,e[9]=-a,e[2]=p*a-m,e[6]=x+f*a,e[10]=r*u}else if(t.order==="ZXY"){const f=u*l,p=u*h,m=c*l,x=c*h;e[0]=f-x*a,e[4]=-r*h,e[8]=m+p*a,e[1]=p+m*a,e[5]=r*l,e[9]=x-f*a,e[2]=-r*c,e[6]=a,e[10]=r*u}else if(t.order==="ZYX"){const f=r*l,p=r*h,m=a*l,x=a*h;e[0]=u*l,e[4]=m*c-p,e[8]=f*c+x,e[1]=u*h,e[5]=x*c+f,e[9]=p*c-m,e[2]=-c,e[6]=a*u,e[10]=r*u}else if(t.order==="YZX"){const f=r*u,p=r*c,m=a*u,x=a*c;e[0]=u*l,e[4]=x-f*h,e[8]=m*h+p,e[1]=h,e[5]=r*l,e[9]=-a*l,e[2]=-c*l,e[6]=p*h+m,e[10]=f-x*h}else if(t.order==="XZY"){const f=r*u,p=r*c,m=a*u,x=a*c;e[0]=u*l,e[4]=-h,e[8]=c*l,e[1]=f*h+x,e[5]=r*l,e[9]=p*h-m,e[2]=m*h-p,e[6]=a*l,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gg,t,kg)}lookAt(t,e,n){const s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Ki.crossVectors(n,Un),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Ki.crossVectors(n,Un)),Ki.normalize(),va.crossVectors(Un,Ki),s[0]=Ki.x,s[4]=va.x,s[8]=Un.x,s[1]=Ki.y,s[5]=va.y,s[9]=Un.y,s[2]=Ki.z,s[6]=va.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],u=n[8],c=n[12],l=n[1],h=n[5],f=n[9],p=n[13],m=n[2],x=n[6],d=n[10],g=n[14],S=n[3],_=n[7],w=n[11],A=n[15],E=s[0],T=s[4],b=s[8],y=s[12],v=s[1],R=s[5],L=s[9],D=s[13],F=s[2],V=s[6],k=s[10],O=s[14],B=s[3],it=s[7],ut=s[11],ft=s[15];return o[0]=r*E+a*v+u*F+c*B,o[4]=r*T+a*R+u*V+c*it,o[8]=r*b+a*L+u*k+c*ut,o[12]=r*y+a*D+u*O+c*ft,o[1]=l*E+h*v+f*F+p*B,o[5]=l*T+h*R+f*V+p*it,o[9]=l*b+h*L+f*k+p*ut,o[13]=l*y+h*D+f*O+p*ft,o[2]=m*E+x*v+d*F+g*B,o[6]=m*T+x*R+d*V+g*it,o[10]=m*b+x*L+d*k+g*ut,o[14]=m*y+x*D+d*O+g*ft,o[3]=S*E+_*v+w*F+A*B,o[7]=S*T+_*R+w*V+A*it,o[11]=S*b+_*L+w*k+A*ut,o[15]=S*y+_*D+w*O+A*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],u=t[9],c=t[13],l=t[2],h=t[6],f=t[10],p=t[14],m=t[3],x=t[7],d=t[11],g=t[15];return m*(+o*u*h-s*c*h-o*a*f+n*c*f+s*a*p-n*u*p)+x*(+e*u*p-e*c*f+o*r*f-s*r*p+s*c*l-o*u*l)+d*(+e*c*h-e*a*p-o*r*h+n*r*p+o*a*l-n*c*l)+g*(-s*a*l-e*u*h+e*a*f+s*r*h-n*r*f+n*u*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],u=t[6],c=t[7],l=t[8],h=t[9],f=t[10],p=t[11],m=t[12],x=t[13],d=t[14],g=t[15],S=h*d*c-x*f*c+x*u*p-a*d*p-h*u*g+a*f*g,_=m*f*c-l*d*c-m*u*p+r*d*p+l*u*g-r*f*g,w=l*x*c-m*h*c+m*a*p-r*x*p-l*a*g+r*h*g,A=m*h*u-l*x*u-m*a*f+r*x*f+l*a*d-r*h*d,E=e*S+n*_+s*w+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=S*T,t[1]=(x*f*o-h*d*o-x*s*p+n*d*p+h*s*g-n*f*g)*T,t[2]=(a*d*o-x*u*o+x*s*c-n*d*c-a*s*g+n*u*g)*T,t[3]=(h*u*o-a*f*o-h*s*c+n*f*c+a*s*p-n*u*p)*T,t[4]=_*T,t[5]=(l*d*o-m*f*o+m*s*p-e*d*p-l*s*g+e*f*g)*T,t[6]=(m*u*o-r*d*o-m*s*c+e*d*c+r*s*g-e*u*g)*T,t[7]=(r*f*o-l*u*o+l*s*c-e*f*c-r*s*p+e*u*p)*T,t[8]=w*T,t[9]=(m*h*o-l*x*o-m*n*p+e*x*p+l*n*g-e*h*g)*T,t[10]=(r*x*o-m*a*o+m*n*c-e*x*c-r*n*g+e*a*g)*T,t[11]=(l*a*o-r*h*o-l*n*c+e*h*c+r*n*p-e*a*p)*T,t[12]=A*T,t[13]=(l*x*s-m*h*s+m*n*f-e*x*f-l*n*d+e*h*d)*T,t[14]=(m*a*s-r*x*s-m*n*u+e*x*u+r*n*d-e*a*d)*T,t[15]=(r*h*s-l*a*s+l*n*u-e*h*u-r*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,u=t.z,c=o*r,l=o*a;return this.set(c*r+n,c*a-s*u,c*u+s*a,0,c*a+s*u,l*a+n,l*u-s*r,0,c*u-s*a,l*u+s*r,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,u=e._w,c=o+o,l=r+r,h=a+a,f=o*c,p=o*l,m=o*h,x=r*l,d=r*h,g=a*h,S=u*c,_=u*l,w=u*h,A=n.x,E=n.y,T=n.z;return s[0]=(1-(x+g))*A,s[1]=(p+w)*A,s[2]=(m-_)*A,s[3]=0,s[4]=(p-w)*E,s[5]=(1-(f+g))*E,s[6]=(d+S)*E,s[7]=0,s[8]=(m+_)*T,s[9]=(d-S)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=so.set(s[0],s[1],s[2]).length();const r=so.set(s[4],s[5],s[6]).length(),a=so.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ai.copy(this);const c=1/o,l=1/r,h=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=l,ai.elements[5]*=l,ai.elements[6]*=l,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,e.setFromRotationMatrix(ai),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Bi){const u=this.elements,c=2*o/(e-t),l=2*o/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,m;if(a===Bi)p=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Rc)p=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=l,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=m,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Bi){const u=this.elements,c=1/(e-t),l=1/(n-s),h=1/(r-o),f=(e+t)*c,p=(n+s)*l;let m,x;if(a===Bi)m=(r+o)*h,x=-2*h;else if(a===Rc)m=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-f,u[1]=0,u[5]=2*l,u[9]=0,u[13]=-p,u[2]=0,u[6]=0,u[10]=x,u[14]=-m,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const so=new z,ai=new me,Gg=new z(0,0,0),kg=new z(1,1,1),Ki=new z,va=new z,Un=new z,ed=new me,nd=new ds;class Ti{constructor(t=0,e=0,n=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],u=s[1],c=s[5],l=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ed,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nd.setFromEuler(this),this.setFromQuaternion(nd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hg=0;const id=new z,oo=new ds,Ii=new me,_a=new z,vr=new z,Vg=new z,Wg=new ds,sd=new z(1,0,0),od=new z(0,1,0),rd=new z(0,0,1),ad={type:"added"},Xg={type:"removed"},ro={type:"childadded",child:null},vl={type:"childremoved",child:null};class fe extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new z,e=new Ti,n=new ds,s=new z(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new qt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.multiply(oo),this}rotateOnWorldAxis(t,e){return oo.setFromAxisAngle(t,e),this.quaternion.premultiply(oo),this}rotateX(t){return this.rotateOnAxis(sd,t)}rotateY(t){return this.rotateOnAxis(od,t)}rotateZ(t){return this.rotateOnAxis(rd,t)}translateOnAxis(t,e){return id.copy(t).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sd,t)}translateY(t){return this.translateOnAxis(od,t)}translateZ(t){return this.translateOnAxis(rd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_a.copy(t):_a.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(vr,_a,this.up):Ii.lookAt(_a,vr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),oo.setFromRotationMatrix(Ii),this.quaternion.premultiply(oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ad),ro.child=t,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xg),vl.child=t,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ad),ro.child=t,this.dispatchEvent(ro),ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,Vg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const h=u[c];o(t.shapes,h)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(o(t.materials,this.material[u]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];s.animations.push(o(t.animations,u))}}if(e){const a=r(t.geometries),u=r(t.materials),c=r(t.textures),l=r(t.images),h=r(t.shapes),f=r(t.skeletons),p=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const u=[];for(const c in a){const l=a[c];delete l.metadata,u.push(l)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new z(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new z,Li=new z,_l=new z,Di=new z,ao=new z,co=new z,cd=new z,yl=new z,wl=new z,Sl=new z,bl=new ve,Tl=new ve,El=new ve;class ei{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ci.subVectors(t,e),s.cross(ci);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){ci.subVectors(s,e),Li.subVectors(n,e),_l.subVectors(t,e);const r=ci.dot(ci),a=ci.dot(Li),u=ci.dot(_l),c=Li.dot(Li),l=Li.dot(_l),h=r*c-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,p=(c*u-a*l)*f,m=(r*l-a*u)*f;return o.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,o,r,a,u){return this.getBarycoord(t,e,n,s,Di)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Di.x),u.addScaledVector(r,Di.y),u.addScaledVector(a,Di.z),u)}static getInterpolatedAttribute(t,e,n,s,o,r){return bl.setScalar(0),Tl.setScalar(0),El.setScalar(0),bl.fromBufferAttribute(t,e),Tl.fromBufferAttribute(t,n),El.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(bl,o.x),r.addScaledVector(Tl,o.y),r.addScaledVector(El,o.z),r}static isFrontFacing(t,e,n,s){return ci.subVectors(n,e),Li.subVectors(t,e),ci.cross(Li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ci.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return ei.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;ao.subVectors(s,n),co.subVectors(o,n),yl.subVectors(t,n);const u=ao.dot(yl),c=co.dot(yl);if(u<=0&&c<=0)return e.copy(n);wl.subVectors(t,s);const l=ao.dot(wl),h=co.dot(wl);if(l>=0&&h<=l)return e.copy(s);const f=u*h-l*c;if(f<=0&&u>=0&&l<=0)return r=u/(u-l),e.copy(n).addScaledVector(ao,r);Sl.subVectors(t,o);const p=ao.dot(Sl),m=co.dot(Sl);if(m>=0&&p<=m)return e.copy(o);const x=p*c-u*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(co,a);const d=l*m-p*h;if(d<=0&&h-l>=0&&p-m>=0)return cd.subVectors(o,s),a=(h-l)/(h-l+(p-m)),e.copy(s).addScaledVector(cd,a);const g=1/(d+x+f);return r=x*g,a=f*g,e.copy(n).addScaledVector(ao,r).addScaledVector(co,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function Al(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Rg(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Al(r,o,t+1/3),this.g=Al(r,o,t),this.b=Al(r,o,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=En){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=ep[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return he.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Kt(Qe.r*255,0,255))*65536+Math.round(Kt(Qe.g*255,0,255))*256+Math.round(Kt(Qe.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(Qe.copy(this),e);const n=Qe.r,s=Qe.g,o=Qe.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let u,c;const l=(a+r)/2;if(a===r)u=0,c=0;else{const h=r-a;switch(c=l<=.5?h/(r+a):h/(2-r-a),r){case n:u=(s-o)/h+(s<o?6:0);break;case s:u=(o-n)/h+2;break;case o:u=(n-s)/h+4;break}u/=6}return t.h=u,t.s=c,t.l=l,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=En){he.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,s=Qe.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(ya);const n=ul(Qi.h,ya.h,e),s=ul(Qi.s,ya.s,e),o=ul(Qi.l,ya.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new rt;rt.NAMES=ep;let qg=0;class ms extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Oo,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=_u,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(n.blending=this.blending),this.side!==ps&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vu&&(n.blendSrc=this.blendSrc),this.blendDst!==_u&&(n.blendDst=this.blendDst),this.blendEquation!==Ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$f&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const u=o[a];delete u.metadata,r.push(u)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Z extends ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new z,wa=new pt;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ih,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wa.fromBufferAttribute(this,e),wa.applyMatrix3(t),this.setXY(e,wa.x,wa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),o=Me(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ih&&(t.usage=this.usage),t}}class np extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ip extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yg=0;const Zn=new me,Rl=new fe,lo=new z,Nn=new $s,_r=new $s,Xe=new z;class Se extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(J0(t)?ip:np)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new qt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,n){return Zn.makeTranslation(t,e,n),this.applyMatrix4(Zn),this}scale(t,e,n){return Zn.makeScale(t,e,n),this.applyMatrix4(Zn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Nn.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Nn.min,_r.min),Nn.expandByPoint(Xe),Xe.addVectors(Nn.max,_r.max),Nn.expandByPoint(Xe)):(Nn.expandByPoint(_r.min),Nn.expandByPoint(_r.max))}Nn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Xe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],u=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Xe.fromBufferAttribute(a,c),u&&(lo.fromBufferAttribute(t,c),Xe.add(lo)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],u=[];for(let b=0;b<n.count;b++)a[b]=new z,u[b]=new z;const c=new z,l=new z,h=new z,f=new pt,p=new pt,m=new pt,x=new z,d=new z;function g(b,y,v){c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),f.fromBufferAttribute(o,b),p.fromBufferAttribute(o,y),m.fromBufferAttribute(o,v),l.sub(c),h.sub(c),p.sub(f),m.sub(f);const R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(x.copy(l).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(R),d.copy(h).multiplyScalar(p.x).addScaledVector(l,-m.x).multiplyScalar(R),a[b].add(x),a[y].add(x),a[v].add(x),u[b].add(d),u[y].add(d),u[v].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let b=0,y=S.length;b<y;++b){const v=S[b],R=v.start,L=v.count;for(let D=R,F=R+L;D<F;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const _=new z,w=new z,A=new z,E=new z;function T(b){A.fromBufferAttribute(s,b),E.copy(A);const y=a[b];_.copy(y),_.sub(A.multiplyScalar(A.dot(y))).normalize(),w.crossVectors(E,y);const R=w.dot(u[b])<0?-1:1;r.setXYZW(b,_.x,_.y,_.z,R)}for(let b=0,y=S.length;b<y;++b){const v=S[b],R=v.start,L=v.count;for(let D=R,F=R+L;D<F;D+=3)T(t.getX(D+0)),T(t.getX(D+1)),T(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new z,o=new z,r=new z,a=new z,u=new z,c=new z,l=new z,h=new z;if(t)for(let f=0,p=t.count;f<p;f+=3){const m=t.getX(f+0),x=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,d),l.subVectors(r,o),h.subVectors(s,o),l.cross(h),a.fromBufferAttribute(n,m),u.fromBufferAttribute(n,x),c.fromBufferAttribute(n,d),a.add(l),u.add(l),c.add(l),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,u.x,u.y,u.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),l.subVectors(r,o),h.subVectors(s,o),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,u){const c=a.array,l=a.itemSize,h=a.normalized,f=new c.constructor(u.length*l);let p=0,m=0;for(let x=0,d=u.length;x<d;x++){a.isInterleavedBufferAttribute?p=u[x]*a.data.stride+a.offset:p=u[x]*l;for(let g=0;g<l;g++)f[m++]=c[p++]}return new ze(f,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const u=s[a],c=t(u,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const u=[],c=o[a];for(let l=0,h=c.length;l<h;l++){const f=c[l],p=t(f,n);u.push(p)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,u=r.length;a<u;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(t[c]=u[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const c=n[u];t.data.attributes[u]=c.toJSON(t.data)}const s={};let o=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];l.push(p.toJSON(t.data))}l.length>0&&(s[u]=l,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const l=s[c];this.setAttribute(c,l.clone(e))}const o=t.morphAttributes;for(const c in o){const l=[],h=o[c];for(let f=0,p=h.length;f<p;f++)l.push(h[f].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,l=r.length;c<l;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ld=new me,_s=new mf,Sa=new js,ud=new z,ba=new z,Ta=new z,Ea=new z,Cl=new z,Aa=new z,hd=new z,Ra=new z;class C extends fe{constructor(t=new Se,e=new Z){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Aa.set(0,0,0);for(let u=0,c=o.length;u<c;u++){const l=a[u],h=o[u];l!==0&&(Cl.fromBufferAttribute(h,t),r?Aa.addScaledVector(Cl,l):Aa.addScaledVector(Cl.sub(e),l))}e.add(Aa)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(o),_s.copy(t.ray).recast(t.near),!(Sa.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Sa,ud)===null||_s.origin.distanceToSquared(ud)>(t.far-t.near)**2))&&(ld.copy(o).invert(),_s.copy(t.ray).applyMatrix4(ld),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,u=o.attributes.position,c=o.attributes.uv,l=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const d=f[m],g=r[d.materialIndex],S=Math.max(d.start,p.start),_=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let w=S,A=_;w<A;w+=3){const E=a.getX(w),T=a.getX(w+1),b=a.getX(w+2);s=Ca(this,g,t,n,c,l,h,E,T,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let d=m,g=x;d<g;d+=3){const S=a.getX(d),_=a.getX(d+1),w=a.getX(d+2);s=Ca(this,r,t,n,c,l,h,S,_,w),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const d=f[m],g=r[d.materialIndex],S=Math.max(d.start,p.start),_=Math.min(u.count,Math.min(d.start+d.count,p.start+p.count));for(let w=S,A=_;w<A;w+=3){const E=w,T=w+1,b=w+2;s=Ca(this,g,t,n,c,l,h,E,T,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(u.count,p.start+p.count);for(let d=m,g=x;d<g;d+=3){const S=d,_=d+1,w=d+2;s=Ca(this,r,t,n,c,l,h,S,_,w),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function Zg(i,t,e,n,s,o,r,a){let u;if(t.side===on?u=n.intersectTriangle(r,o,s,!0,a):u=n.intersectTriangle(s,o,r,t.side===ps,a),u===null)return null;Ra.copy(a),Ra.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:i}}function Ca(i,t,e,n,s,o,r,a,u,c){i.getVertexPosition(a,ba),i.getVertexPosition(u,Ta),i.getVertexPosition(c,Ea);const l=Zg(i,t,e,n,ba,Ta,Ea,hd);if(l){const h=new z;ei.getBarycoord(hd,ba,Ta,Ea,h),s&&(l.uv=ei.getInterpolatedAttribute(s,a,u,c,h,new pt)),o&&(l.uv1=ei.getInterpolatedAttribute(o,a,u,c,h,new pt)),r&&(l.normal=ei.getInterpolatedAttribute(r,a,u,c,h,new z),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:u,c,normal:new z,materialIndex:0};ei.getNormal(ba,Ta,Ea,f.normal),l.face=f,l.barycoord=h}return l}class oa extends Se{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const u=[],c=[],l=[],h=[];let f=0,p=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(u),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(h,2));function m(x,d,g,S,_,w,A,E,T,b,y){const v=w/T,R=A/b,L=w/2,D=A/2,F=E/2,V=T+1,k=b+1;let O=0,B=0;const it=new z;for(let ut=0;ut<k;ut++){const ft=ut*R-D;for(let Pt=0;Pt<V;Pt++){const Wt=Pt*v-L;it[x]=Wt*S,it[d]=ft*_,it[g]=F,c.push(it.x,it.y,it.z),it[x]=0,it[d]=0,it[g]=E>0?1:-1,l.push(it.x,it.y,it.z),h.push(Pt/T),h.push(1-ut/b),O+=1}}for(let ut=0;ut<b;ut++)for(let ft=0;ft<T;ft++){const Pt=f+ft+V*ut,Wt=f+ft+V*(ut+1),et=f+(ft+1)+V*(ut+1),lt=f+(ft+1)+V*ut;u.push(Pt,Wt,lt),u.push(Wt,et,lt),B+=6}a.addGroup(p,B,y),p+=B,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function hn(i){const t={};for(let e=0;e<i.length;e++){const n=sr(i[e]);for(const s in n)t[s]=n[s]}return t}function $g(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Pc={clone:sr,merge:hn};var jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=$g(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class op extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new z,fd=new pt,dd=new pt;class Fn extends op{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sh*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,fd,dd),e.subVectors(dd,fd)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ll*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const u=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/u,e-=r.offsetY*n/c,s*=r.width/u,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const uo=-90,ho=1;class Kg extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fn(uo,ho,t,e);s.layers=this.layers,this.add(s);const o=new Fn(uo,ho,t,e);o.layers=this.layers,this.add(o);const r=new Fn(uo,ho,t,e);r.layers=this.layers,this.add(r);const a=new Fn(uo,ho,t,e);a.layers=this.layers,this.add(a);const u=new Fn(uo,ho,t,e);u.layers=this.layers,this.add(u);const c=new Fn(uo,ho,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,u]=e;for(const c of e)this.remove(c);if(t===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Rc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,u,c,l]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,u),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(h,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class rp extends rn{constructor(t,e,n,s,o,r,a,u,c,l){t=t!==void 0?t:[],e=e!==void 0?e:Ko,super(t,e,n,s,o,r,a,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qg extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oa(5,5,5),o=new Cn({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ki});o.uniforms.tEquirect.value=e;const r=new C(s,o),a=e.minFilter;return e.minFilter===Os&&(e.minFilter=wi),new Kg(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class gf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(t),this.density=e}clone(){return new gf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tx extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ex{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new z;class Ic{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),o=Me(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ic(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ap extends ms{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fo;const yr=new z,po=new z,mo=new z,go=new pt,wr=new pt,cp=new me,Pa=new z,Sr=new z,Ia=new z,pd=new pt,Pl=new pt,md=new pt;class nx extends fe{constructor(t=new ap){if(super(),this.isSprite=!0,this.type="Sprite",fo===void 0){fo=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ex(e,5);fo.setIndex([0,1,2,0,2,3]),fo.setAttribute("position",new Ic(n,3,0,!1)),fo.setAttribute("uv",new Ic(n,2,3,!1))}this.geometry=fo,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),po.setFromMatrixScale(this.matrixWorld),cp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&po.multiplyScalar(-mo.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;La(Pa.set(-.5,-.5,0),mo,r,po,s,o),La(Sr.set(.5,-.5,0),mo,r,po,s,o),La(Ia.set(.5,.5,0),mo,r,po,s,o),pd.set(0,0),Pl.set(1,0),md.set(1,1);let a=t.ray.intersectTriangle(Pa,Sr,Ia,!1,yr);if(a===null&&(La(Sr.set(-.5,.5,0),mo,r,po,s,o),Pl.set(0,1),a=t.ray.intersectTriangle(Pa,Ia,Sr,!1,yr),a===null))return;const u=t.ray.origin.distanceTo(yr);u<t.near||u>t.far||e.push({distance:u,point:yr.clone(),uv:ei.getInterpolation(yr,Pa,Sr,Ia,pd,Pl,md,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function La(i,t,e,n,s,o){go.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(wr.x=o*go.x-s*go.y,wr.y=s*go.x+o*go.y):wr.copy(go),i.copy(t),i.x+=wr.x,i.y+=wr.y,i.applyMatrix4(cp)}class ix extends rn{constructor(t=null,e=1,n=1,s,o,r,a,u,c=Hn,l=Hn,h,f){super(null,r,a,u,c,l,s,o,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xo=new me,gd=new me,Da=[],xd=new $s,sx=new me,br=new C,Tr=new js;class ni extends C{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $s),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xo),xd.copy(t.boundingBox).applyMatrix4(xo),this.boundingBox.union(xd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xo),Tr.copy(t.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),t.ray.intersectsSphere(Tr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,xo),gd.multiplyMatrices(n,xo),br.matrixWorld=gd,br.raycast(t,Da);for(let r=0,a=Da.length;r<a;r++){const u=Da[r];u.instanceId=o,u.object=this,e.push(u)}Da.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ix(new Float32Array(s*this.count),s,this.count,hf,Si));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,u=s*t;o[u]=a,o.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Il=new z,ox=new z,rx=new qt;class As{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Il.subVectors(n,e).cross(ox.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Il),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rx.getNormalMatrix(t),s=this.coplanarPoint(Il).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new js,Ua=new z;class xf{constructor(t=new As,e=new As,n=new As,s=new As,o=new As,r=new As){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bi){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],u=s[3],c=s[4],l=s[5],h=s[6],f=s[7],p=s[8],m=s[9],x=s[10],d=s[11],g=s[12],S=s[13],_=s[14],w=s[15];if(n[0].setComponents(u-o,f-c,d-p,w-g).normalize(),n[1].setComponents(u+o,f+c,d+p,w+g).normalize(),n[2].setComponents(u+r,f+l,d+m,w+S).normalize(),n[3].setComponents(u-r,f-l,d-m,w-S).normalize(),n[4].setComponents(u-a,f-h,d-x,w-_).normalize(),e===Bi)n[5].setComponents(u+a,f+h,d+x,w+_).normalize();else if(e===Rc)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ua.x=s.normal.x>0?t.max.x:t.min.x,Ua.y=s.normal.y>0?t.max.y:t.min.y,Ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mf extends ms{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lc=new z,Dc=new z,Md=new me,Er=new mf,Na=new js,Ll=new z,vd=new z;class lp extends fe{constructor(t=new Se,e=new Mf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Lc.fromBufferAttribute(e,s-1),Dc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lc.distanceTo(Dc);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=o,t.ray.intersectsSphere(Na)===!1)return;Md.copy(s).invert(),Er.copy(t.ray).applyMatrix4(Md);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){const p=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let x=p,d=m-1;x<d;x+=c){const g=l.getX(x),S=l.getX(x+1),_=za(this,t,Er,u,g,S);_&&e.push(_)}if(this.isLineLoop){const x=l.getX(m-1),d=l.getX(p),g=za(this,t,Er,u,x,d);g&&e.push(g)}}else{const p=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let x=p,d=m-1;x<d;x+=c){const g=za(this,t,Er,u,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=za(this,t,Er,u,m-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function za(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Lc.fromBufferAttribute(r,s),Dc.fromBufferAttribute(r,o),e.distanceSqToSegment(Lc,Dc,Ll,vd)>n)return;Ll.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Ll);if(!(u<t.near||u>t.far))return{distance:u,point:vd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const _d=new z,yd=new z;class ax extends lp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)_d.fromBufferAttribute(e,s),yd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_d.distanceTo(yd);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vf extends ms{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wd=new me,oh=new mf,Fa=new js,Oa=new z;class up extends fe{constructor(t=new Se,e=new vf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=o,t.ray.intersectsSphere(Fa)===!1)return;wd.copy(s).invert(),oh.copy(t.ray).applyMatrix4(wd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let m=f,x=p;m<x;m++){const d=c.getX(m);Oa.fromBufferAttribute(h,d),Sd(Oa,d,u,s,t,e,this)}}else{const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let m=f,x=p;m<x;m++)Oa.fromBufferAttribute(h,m),Sd(Oa,m,u,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Sd(i,t,e,n,s,o,r){const a=oh.distanceSqToPoint(i);if(a<e){const u=new z;oh.closestPointToPoint(i,u),u.applyMatrix4(n);const c=s.ray.origin.distanceTo(u);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class te extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ra extends rn{constructor(t,e,n,s,o,r,a,u,c){super(t,e,n,s,o,r,a,u,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hp extends rn{constructor(t,e,n,s,o,r,a,u,c,l=Bo){if(l!==Bo&&l!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Bo&&(n=Xs),n===void 0&&l===nr&&(n=er),super(null,s,o,r,a,u,l,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Hn,this.minFilter=u!==void 0?u:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,u=o-1,c;for(;a<=u;)if(s=Math.floor(a+(u-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)u=s-1;else{u=s;break}if(s=u,n[s]===r)return s/(o-1);const l=n[s],f=n[s+1]-l,p=(r-l)/f;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),u=e||(r.isVector2?new pt:new z);return u.copy(a).sub(r).normalize(),u}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,s=[],o=[],r=[],a=new z,u=new me;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new z)}o[0]=new z,r[0]=new z;let c=Number.MAX_VALUE;const l=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);l<=c&&(c=l,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Kt(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(u.makeRotationAxis(a,m))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(Kt(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let m=1;m<=t;m++)o[m].applyMatrix4(u.makeRotationAxis(s[m],p*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class _f extends Ai{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=u}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let u=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=u-this.aX,p=c-this.aY;u=f*l-p*h+this.aX,c=f*h+p*l+this.aY}return n.set(u,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cx extends _f{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function yf(){let i=0,t=0,e=0,n=0;function s(o,r,a,u){i=o,t=a,e=-3*o+3*r-2*a-u,n=2*o-2*r+a+u}return{initCatmullRom:function(o,r,a,u,c){s(r,a,c*(a-o),c*(u-r))},initNonuniformCatmullRom:function(o,r,a,u,c,l,h){let f=(r-o)/c-(a-o)/(c+l)+(a-r)/l,p=(a-r)/l-(u-r)/(l+h)+(u-a)/h;f*=l,p*=l,s(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Ba=new z,Dl=new yf,Ul=new yf,Nl=new yf;class Js extends Ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),u=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:u===0&&a===o-1&&(a=o-2,u=1);let c,l;this.closed||a>0?c=s[(a-1)%o]:(Ba.subVectors(s[0],s[1]).add(s[0]),c=Ba);const h=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?l=s[(a+2)%o]:(Ba.subVectors(s[o-1],s[o-2]).add(s[o-1]),l=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(l),p);x<1e-4&&(x=1),m<1e-4&&(m=x),d<1e-4&&(d=x),Dl.initNonuniformCatmullRom(c.x,h.x,f.x,l.x,m,x,d),Ul.initNonuniformCatmullRom(c.y,h.y,f.y,l.y,m,x,d),Nl.initNonuniformCatmullRom(c.z,h.z,f.z,l.z,m,x,d)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,h.x,f.x,l.x,this.tension),Ul.initCatmullRom(c.y,h.y,f.y,l.y,this.tension),Nl.initCatmullRom(c.z,h.z,f.z,l.z,this.tension));return n.set(Dl.calc(u),Ul.calc(u),Nl.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bd(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,u=i*a;return(2*e-2*n+o+r)*u+(-3*e+3*n-2*o-r)*a+o*i+e}function lx(i,t){const e=1-i;return e*e*t}function ux(i,t){return 2*(1-i)*i*t}function hx(i,t){return i*i*t}function kr(i,t,e,n){return lx(i,t)+ux(i,e)+hx(i,n)}function fx(i,t){const e=1-i;return e*e*e*t}function dx(i,t){const e=1-i;return 3*e*e*i*t}function px(i,t){return 3*(1-i)*i*i*t}function mx(i,t){return i*i*i*t}function Hr(i,t,e,n,s){return fx(i,t)+dx(i,e)+px(i,n)+mx(i,s)}class fp extends Ai{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Hr(t,s.x,o.x,r.x,a.x),Hr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gx extends Ai{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Hr(t,s.x,o.x,r.x,a.x),Hr(t,s.y,o.y,r.y,a.y),Hr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dp extends Ai{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends Ai{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pp extends Ai{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(kr(t,s.x,o.x,r.x),kr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mp extends Ai{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(kr(t,s.x,o.x,r.x),kr(t,s.y,o.y,r.y),kr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gp extends Ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,u=s[r===0?r:r-1],c=s[r],l=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(bd(a,u.x,c.x,l.x,h.x),bd(a,u.y,c.y,l.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var rh=Object.freeze({__proto__:null,ArcCurve:cx,CatmullRomCurve3:Js,CubicBezierCurve:fp,CubicBezierCurve3:gx,EllipseCurve:_f,LineCurve:dp,LineCurve3:wf,QuadraticBezierCurve:pp,QuadraticBezierCurve3:mp,SplineCurve:gp});class xx extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],u=a.getLength(),c=u===0?0:1-r/u;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,u=r.getPoints(a);for(let c=0;c<u.length;c++){const l=u[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new rh[s.type]().fromJSON(s))}return this}}class Uc extends xx{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new dp(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new pp(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new fp(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+a,e+u,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,u){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,s,o,r,a,u),this}absellipse(t,e,n,s,o,r,a,u){const c=new _f(t,e,n,s,o,r,a,u);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Oe extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],u=[],c=new z,l=new pt;r.push(0,0,0),a.push(0,0,1),u.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),a.push(0,0,1),l.x=(r[f]/t+1)/2,l.y=(r[f+1]/t+1)/2,u.push(l.x,l.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gt extends Se{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:u};const c=this;s=Math.floor(s),o=Math.floor(o);const l=[],h=[],f=[],p=[];let m=0;const x=[],d=n/2;let g=0;S(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(l),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(p,2));function S(){const w=new z,A=new z;let E=0;const T=(e-t)/n;for(let b=0;b<=o;b++){const y=[],v=b/o,R=v*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,F=D*u+a,V=Math.sin(F),k=Math.cos(F);A.x=R*V,A.y=-v*n+d,A.z=R*k,h.push(A.x,A.y,A.z),w.set(V,T,k).normalize(),f.push(w.x,w.y,w.z),p.push(D,1-v),y.push(m++)}x.push(y)}for(let b=0;b<s;b++)for(let y=0;y<o;y++){const v=x[y][b],R=x[y+1][b],L=x[y+1][b+1],D=x[y][b+1];(t>0||y!==0)&&(l.push(v,R,D),E+=3),(e>0||y!==o-1)&&(l.push(R,L,D),E+=3)}c.addGroup(g,E,0),g+=E}function _(w){const A=m,E=new pt,T=new z;let b=0;const y=w===!0?t:e,v=w===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,d*v,0),f.push(0,v,0),p.push(.5,.5),m++;const R=m;for(let L=0;L<=s;L++){const F=L/s*u+a,V=Math.cos(F),k=Math.sin(F);T.x=y*k,T.y=d*v,T.z=y*V,h.push(T.x,T.y,T.z),f.push(0,v,0),E.x=V*.5+.5,E.y=k*.5*v+.5,p.push(E.x,E.y),m++}for(let L=0;L<s;L++){const D=A+L,F=R+L;w===!0?l.push(F,F+1,D):l.push(F+1,F,D),b+=3}c.addGroup(g,b,w===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class An extends gt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new An(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class aa extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),l(),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(o.slice(),3)),this.setAttribute("uv",new Vt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const _=new z,w=new z,A=new z;for(let E=0;E<e.length;E+=3)p(e[E+0],_),p(e[E+1],w),p(e[E+2],A),u(_,w,A,S)}function u(S,_,w,A){const E=A+1,T=[];for(let b=0;b<=E;b++){T[b]=[];const y=S.clone().lerp(w,b/E),v=_.clone().lerp(w,b/E),R=E-b;for(let L=0;L<=R;L++)L===0&&b===E?T[b][L]=y:T[b][L]=y.clone().lerp(v,L/R)}for(let b=0;b<E;b++)for(let y=0;y<2*(E-b)-1;y++){const v=Math.floor(y/2);y%2===0?(f(T[b][v+1]),f(T[b+1][v]),f(T[b][v])):(f(T[b][v+1]),f(T[b+1][v+1]),f(T[b+1][v]))}}function c(S){const _=new z;for(let w=0;w<o.length;w+=3)_.x=o[w+0],_.y=o[w+1],_.z=o[w+2],_.normalize().multiplyScalar(S),o[w+0]=_.x,o[w+1]=_.y,o[w+2]=_.z}function l(){const S=new z;for(let _=0;_<o.length;_+=3){S.x=o[_+0],S.y=o[_+1],S.z=o[_+2];const w=d(S)/2/Math.PI+.5,A=g(S)/Math.PI+.5;r.push(w,1-A)}m(),h()}function h(){for(let S=0;S<r.length;S+=6){const _=r[S+0],w=r[S+2],A=r[S+4],E=Math.max(_,w,A),T=Math.min(_,w,A);E>.9&&T<.1&&(_<.2&&(r[S+0]+=1),w<.2&&(r[S+2]+=1),A<.2&&(r[S+4]+=1))}}function f(S){o.push(S.x,S.y,S.z)}function p(S,_){const w=S*3;_.x=t[w+0],_.y=t[w+1],_.z=t[w+2]}function m(){const S=new z,_=new z,w=new z,A=new z,E=new pt,T=new pt,b=new pt;for(let y=0,v=0;y<o.length;y+=9,v+=6){S.set(o[y+0],o[y+1],o[y+2]),_.set(o[y+3],o[y+4],o[y+5]),w.set(o[y+6],o[y+7],o[y+8]),E.set(r[v+0],r[v+1]),T.set(r[v+2],r[v+3]),b.set(r[v+4],r[v+5]),A.copy(S).add(_).add(w).divideScalar(3);const R=d(A);x(E,v+0,S,R),x(T,v+2,_,R),x(b,v+4,w,R)}}function x(S,_,w,A){A<0&&S.x===1&&(r[_]=S.x-1),w.x===0&&w.z===0&&(r[_]=A/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.vertices,t.indices,t.radius,t.details)}}class Sf extends aa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sf(t.radius,t.detail)}}class Nc extends Uc{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Uc().fromJSON(s))}return this}}const Mx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=xp(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,u,c,l,h,f,p;if(n&&(o=Sx(i,t,o,e)),i.length>80*e){a=c=i[0],u=l=i[1];for(let m=e;m<s;m+=e)h=i[m],f=i[m+1],h<a&&(a=h),f<u&&(u=f),h>c&&(c=h),f>l&&(l=f);p=Math.max(c-a,l-u),p=p!==0?32767/p:0}return jr(o,r,e,a,u,p,0),r}};function xp(i,t,e,n,s){let o,r;if(s===Ux(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Td(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Td(o,i[o],i[o+1],r);return r&&Qc(r,r.next)&&(Kr(r),r=r.next),r}function qs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qc(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Kr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Rx(i,n,s,o);let a=i,u,c;for(;i.prev!==i.next;){if(u=i.prev,c=i.next,o?_x(i,n,s,o):vx(i)){t.push(u.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Kr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=yx(qs(i),t,e),jr(i,t,e,n,s,o,2)):r===2&&wx(i,t,e,n,s,o):jr(qs(i),t,e,n,s,o,1);break}}}function vx(i){const t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,u=e.y,c=n.y,l=s<o?s<r?s:r:o<r?o:r,h=a<u?a<c?a:c:u<c?u:c,f=s>o?s>r?s:r:o>r?o:r,p=a>u?a>c?a:c:u>c?u:c;let m=n.next;for(;m!==t;){if(m.x>=l&&m.x<=f&&m.y>=h&&m.y<=p&&Io(s,a,o,u,r,c,m.x,m.y)&&Ie(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _x(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ie(s,o,r)>=0)return!1;const a=s.x,u=o.x,c=r.x,l=s.y,h=o.y,f=r.y,p=a<u?a<c?a:c:u<c?u:c,m=l<h?l<f?l:f:h<f?h:f,x=a>u?a>c?a:c:u>c?u:c,d=l>h?l>f?l:f:h>f?h:f,g=ah(p,m,t,e,n),S=ah(x,d,t,e,n);let _=i.prevZ,w=i.nextZ;for(;_&&_.z>=g&&w&&w.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=d&&_!==s&&_!==r&&Io(a,l,u,h,c,f,_.x,_.y)&&Ie(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=p&&w.x<=x&&w.y>=m&&w.y<=d&&w!==s&&w!==r&&Io(a,l,u,h,c,f,w.x,w.y)&&Ie(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=d&&_!==s&&_!==r&&Io(a,l,u,h,c,f,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=S;){if(w.x>=p&&w.x<=x&&w.y>=m&&w.y<=d&&w!==s&&w!==r&&Io(a,l,u,h,c,f,w.x,w.y)&&Ie(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function yx(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Qc(s,o)&&Mp(s,n,n.next,o)&&Jr(s,o)&&Jr(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Kr(n),Kr(n.next),n=i=o),n=n.next}while(n!==i);return qs(n)}function wx(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Ix(r,a)){let u=vp(r,a);r=qs(r,r.next),u=qs(u,u.next),jr(r,t,e,n,s,o,0),jr(u,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Sx(i,t,e,n){const s=[];let o,r,a,u,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,u=o<r-1?t[o+1]*n:i.length,c=xp(i,a,u,n,!1),c===c.next&&(c.steiner=!0),s.push(Px(c));for(s.sort(bx),o=0;o<s.length;o++)e=Tx(s[o],e);return e}function bx(i,t){return i.x-t.x}function Tx(i,t){const e=Ex(i,t);if(!e)return t;const n=vp(e,i);return qs(n,n.next),qs(e,e.next)}function Ex(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,u=s.x,c=s.y;let l=1/0,h;e=s;do o>=e.x&&e.x>=u&&o!==e.x&&Io(r<c?o:n,r,u,c,r<c?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),Jr(e,i)&&(h<l||h===l&&(e.x>s.x||e.x===s.x&&Ax(s,e)))&&(s=e,l=h)),e=e.next;while(e!==a);return s}function Ax(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function Rx(i,t,e,n){let s=i;do s.z===0&&(s.z=ah(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cx(s)}function Cx(i){let t,e,n,s,o,r,a,u,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(u=c;a>0||u>0&&n;)a!==0&&(u===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,u--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function ah(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Px(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Io(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Ix(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lx(i,t)&&(Jr(i,t)&&Jr(t,i)&&Dx(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||Qc(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qc(i,t){return i.x===t.x&&i.y===t.y}function Mp(i,t,e,n){const s=ka(Ie(i,t,e)),o=ka(Ie(i,t,n)),r=ka(Ie(e,n,i)),a=ka(Ie(e,n,t));return!!(s!==o&&r!==a||s===0&&Ga(i,e,t)||o===0&&Ga(i,n,t)||r===0&&Ga(e,i,n)||a===0&&Ga(e,t,n))}function Ga(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ka(i){return i>0?1:i<0?-1:0}function Lx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Jr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Dx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vp(i,t){const e=new ch(i.i,i.x,i.y),n=new ch(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Td(i,t,e,n){const s=new ch(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ch(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ux(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Vr{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Vr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Ed(t),Ad(n,t);let r=t.length;e.forEach(Ed);for(let u=0;u<e.length;u++)s.push(r),r+=e[u].length,Ad(n,e[u]);const a=Mx.triangulate(n,s);for(let u=0;u<a.length;u+=3)o.push(a.slice(u,u+3));return o}}function Ed(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ad(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class or extends aa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new or(t.radius,t.detail)}}class bf extends aa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bf(t.radius,t.detail)}}class oe extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),u=Math.floor(s),c=a+1,l=u+1,h=t/a,f=e/u,p=[],m=[],x=[],d=[];for(let g=0;g<l;g++){const S=g*f-r;for(let _=0;_<c;_++){const w=_*h-o;m.push(w,-S,0),x.push(0,0,1),d.push(_/a),d.push(1-g/u)}}for(let g=0;g<u;g++)for(let S=0;S<a;S++){const _=S+c*g,w=S+c*(g+1),A=S+1+c*(g+1),E=S+1+c*g;p.push(_,w,E),p.push(w,A,E)}this.setIndex(p),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.widthSegments,t.heightSegments)}}class rr extends Se{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],u=[],c=[],l=[];let h=t;const f=(e-t)/s,p=new z,m=new pt;for(let x=0;x<=s;x++){for(let d=0;d<=n;d++){const g=o+d/n*r;p.x=h*Math.cos(g),p.y=h*Math.sin(g),u.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,l.push(m.x,m.y)}h+=f}for(let x=0;x<s;x++){const d=x*(n+1);for(let g=0;g<n;g++){const S=g+d,_=S,w=S+n+1,A=S+n+2,E=S+1;a.push(_,w,E),a.push(w,A,E)}}this.setIndex(a),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Qr extends Se{constructor(t=new Nc([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,u=0;if(Array.isArray(t)===!1)c(t);else for(let l=0;l<t.length;l++)c(t[l]),this.addGroup(a,u,l),a+=u,u=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(r,2));function c(l){const h=s.length/3,f=l.extractPoints(e);let p=f.shape;const m=f.holes;Vr.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,g=m.length;d<g;d++){const S=m[d];Vr.isClockWise(S)===!0&&(m[d]=S.reverse())}const x=Vr.triangulateShape(p,m);for(let d=0,g=m.length;d<g;d++){const S=m[d];p=p.concat(S)}for(let d=0,g=p.length;d<g;d++){const S=p[d];s.push(S.x,S.y,0),o.push(0,0,1),r.push(S.x,S.y)}for(let d=0,g=x.length;d<g;d++){const S=x[d],_=S[0]+h,w=S[1]+h,A=S[2]+h;n.push(_,w,A),u+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Nx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new Qr(n,t.curveSegments)}}function Nx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class $ extends Se{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const u=Math.min(r+a,Math.PI);let c=0;const l=[],h=new z,f=new z,p=[],m=[],x=[],d=[];for(let g=0;g<=n;g++){const S=[],_=g/n;let w=0;g===0&&r===0?w=.5/e:g===n&&u===Math.PI&&(w=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(s+E*o)*Math.sin(r+_*a),h.y=t*Math.cos(r+_*a),h.z=t*Math.sin(s+E*o)*Math.sin(r+_*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),d.push(E+w,1-_),S.push(c++)}l.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){const _=l[g][S+1],w=l[g][S],A=l[g+1][S],E=l[g+1][S+1];(g!==0||r>0)&&p.push(_,w,E),(g!==n-1||u<Math.PI)&&p.push(w,A,E)}this.setIndex(p),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ae extends Se{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],u=[],c=[],l=new z,h=new z,f=new z;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const x=m/s*o,d=p/n*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(x),h.y=(t+e*Math.cos(d))*Math.sin(x),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),f.subVectors(h,l).normalize(),u.push(f.x,f.y,f.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const x=(s+1)*p+m-1,d=(s+1)*(p-1)+m-1,g=(s+1)*(p-1)+m,S=(s+1)*p+m;r.push(x,d,S),r.push(d,g,S)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class sn extends Se{constructor(t=new mp(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new z,u=new z,c=new pt;let l=new z;const h=[],f=[],p=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(p,2));function x(){for(let _=0;_<e;_++)d(_);d(o===!1?e:0),S(),g()}function d(_){l=t.getPointAt(_/e,l);const w=r.normals[_],A=r.binormals[_];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,b=Math.sin(T),y=-Math.cos(T);u.x=y*w.x+b*A.x,u.y=y*w.y+b*A.y,u.z=y*w.z+b*A.z,u.normalize(),f.push(u.x,u.y,u.z),a.x=l.x+n*u.x,a.y=l.y+n*u.y,a.z=l.z+n*u.z,h.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let w=1;w<=s;w++){const A=(s+1)*(_-1)+(w-1),E=(s+1)*_+(w-1),T=(s+1)*_+w,b=(s+1)*(_-1)+w;m.push(A,E,b),m.push(E,T,b)}}function S(){for(let _=0;_<=e;_++)for(let w=0;w<=s;w++)c.x=_/e,c.y=w/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new sn(new rh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class q extends ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$0,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zx extends ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fx extends ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Tf extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ox extends Tf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zl=new me,Rd=new z,Cd=new z;class _p{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rd),Cd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cd),e.updateMatrixWorld(),zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pd=new me,Ar=new z,Fl=new z;class Bx extends _p{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ar.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ar),Fl.copy(n.position),Fl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fl),n.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd)}}class dr extends Tf{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ef extends op{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,u=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=l*this.view.offsetY,u=a-l*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gx extends _p{constructor(){super(new Ef(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tl extends Tf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Gx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kx extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class yp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Id();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Id(){return performance.now()}function Ld(i,t,e,n){const s=Hx(n);switch(e){case V0:return i*t;case X0:return i*t;case q0:return i*t*2;case hf:return i*t/s.components*s.byteLength;case ff:return i*t/s.components*s.byteLength;case Y0:return i*t*2/s.components*s.byteLength;case df:return i*t*2/s.components*s.byteLength;case W0:return i*t*3/s.components*s.byteLength;case ui:return i*t*4/s.components*s.byteLength;case pf:return i*t*4/s.components*s.byteLength;case ac:case cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lu:case Uu:return Math.max(i,16)*Math.max(t,8)/4;case Iu:case Du:return Math.max(i,8)*Math.max(t,8)/2;case Nu:case zu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ou:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ku:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $u:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ju:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ju:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hc:case Ku:case Qu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Z0:case th:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eh:case nh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hx(i){switch(i){case Yi:case G0:return{byteLength:1,components:1};case $r:case k0:case Hi:return{byteLength:2,components:1};case lf:case uf:return{byteLength:2,components:4};case Xs:case cf:case Si:return{byteLength:4,components:1};case H0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=af);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wp(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Vx(i){const t=new WeakMap;function e(a,u){const c=a.array,l=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,c,l),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,u,c){const l=u.array,h=u.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,l);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){const m=h[f],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){const x=h[p];i.bufferSubData(c,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=t.get(a);u&&(i.deleteBuffer(u.buffer),t.delete(a))}function r(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,u));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,u),c.version=a.version}}return{get:s,remove:o,update:r}}var Wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xx=`#ifdef USE_ALPHAHASH
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
#endif`,qx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jx=`#ifdef USE_AOMAP
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
#endif`,Jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kx=`#ifdef USE_BATCHING
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
#endif`,Qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iM=`#ifdef USE_IRIDESCENCE
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
#endif`,sM=`#ifdef USE_BUMPMAP
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
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dM=`#define PI 3.141592653589793
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
} // validated`,pM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mM=`vec3 transformedNormal = objectNormal;
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
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",yM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IM=`#ifdef USE_GRADIENTMAP
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
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kM=`PhysicalMaterial material;
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
#endif`,HM=`struct PhysicalMaterial {
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
}`,VM=`
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QM=`#if defined( USE_POINTS_UV )
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
#endif`,tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
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
#endif`,rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fv=`#ifdef USE_NORMALMAP
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
#endif`,dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rv=`float getShadowMask() {
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
}`,Cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pv=`#ifdef USE_SKINNING
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
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fv=`#ifdef USE_TRANSMISSION
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
#endif`,Ov=`#ifdef USE_TRANSMISSION
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
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`#include <common>
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
}`,jv=`#if DEPTH_PACKING == 3200
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
}`,Jv=`#define DISTANCE
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
}`,Kv=`#define DISTANCE
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 diffuse;
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
}`,o_=`#define LAMBERT
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
}`,r_=`#define LAMBERT
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
}`,a_=`#define MATCAP
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
}`,c_=`#define MATCAP
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
}`,l_=`#define NORMAL
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
}`,u_=`#define NORMAL
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
}`,h_=`#define PHONG
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
}`,f_=`#define PHONG
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
}`,d_=`#define STANDARD
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
}`,p_=`#define STANDARD
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
}`,m_=`#define TOON
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
}`,g_=`#define TOON
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
}`,x_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,v_=`#include <common>
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
}`,__=`uniform vec3 color;
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
}`,y_=`uniform float rotation;
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
}`,w_=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Wx,alphahash_pars_fragment:Xx,alphamap_fragment:qx,alphamap_pars_fragment:Yx,alphatest_fragment:Zx,alphatest_pars_fragment:$x,aomap_fragment:jx,aomap_pars_fragment:Jx,batching_pars_vertex:Kx,batching_vertex:Qx,begin_vertex:tM,beginnormal_vertex:eM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:sM,clipping_planes_fragment:oM,clipping_planes_pars_fragment:rM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:cM,color_fragment:lM,color_pars_fragment:uM,color_pars_vertex:hM,color_vertex:fM,common:dM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:xM,emissivemap_fragment:MM,emissivemap_pars_fragment:vM,colorspace_fragment:_M,colorspace_pars_fragment:yM,envmap_fragment:wM,envmap_common_pars_fragment:SM,envmap_pars_fragment:bM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:zM,envmap_vertex:EM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:CM,fog_pars_fragment:PM,gradientmap_pars_fragment:IM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:UM,lights_pars_begin:NM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:BM,lights_phong_pars_fragment:GM,lights_physical_fragment:kM,lights_physical_pars_fragment:HM,lights_fragment_begin:VM,lights_fragment_maps:WM,lights_fragment_end:XM,logdepthbuf_fragment:qM,logdepthbuf_pars_fragment:YM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:$M,map_fragment:jM,map_pars_fragment:JM,map_particle_fragment:KM,map_particle_pars_fragment:QM,metalnessmap_fragment:tv,metalnessmap_pars_fragment:ev,morphinstance_vertex:nv,morphcolor_vertex:iv,morphnormal_vertex:sv,morphtarget_pars_vertex:ov,morphtarget_vertex:rv,normal_fragment_begin:av,normal_fragment_maps:cv,normal_pars_fragment:lv,normal_pars_vertex:uv,normal_vertex:hv,normalmap_pars_fragment:fv,clearcoat_normal_fragment_begin:dv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:xv,packing:Mv,premultiplied_alpha_fragment:vv,project_vertex:_v,dithering_fragment:yv,dithering_pars_fragment:wv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:bv,shadowmap_pars_fragment:Tv,shadowmap_pars_vertex:Ev,shadowmap_vertex:Av,shadowmask_pars_fragment:Rv,skinbase_vertex:Cv,skinning_pars_vertex:Pv,skinning_vertex:Iv,skinnormal_vertex:Lv,specularmap_fragment:Dv,specularmap_pars_fragment:Uv,tonemapping_fragment:Nv,tonemapping_pars_fragment:zv,transmission_fragment:Fv,transmission_pars_fragment:Ov,uv_pars_fragment:Bv,uv_pars_vertex:Gv,uv_vertex:kv,worldpos_vertex:Hv,background_vert:Vv,background_frag:Wv,backgroundCube_vert:Xv,backgroundCube_frag:qv,cube_vert:Yv,cube_frag:Zv,depth_vert:$v,depth_frag:jv,distanceRGBA_vert:Jv,distanceRGBA_frag:Kv,equirect_vert:Qv,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:o_,meshlambert_frag:r_,meshmatcap_vert:a_,meshmatcap_frag:c_,meshnormal_vert:l_,meshnormal_frag:u_,meshphong_vert:h_,meshphong_frag:f_,meshphysical_vert:d_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:x_,points_frag:M_,shadow_vert:v_,shadow_frag:__,sprite_vert:y_,sprite_frag:w_},xt={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},xi={basic:{uniforms:hn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:hn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new rt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:hn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:hn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:hn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new rt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:hn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:hn([xt.points,xt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:hn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:hn([xt.common,xt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:hn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:hn([xt.sprite,xt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:hn([xt.common,xt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:hn([xt.lights,xt.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};xi.physical={uniforms:hn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Ha={r:0,b:0,g:0},ws=new Ti,S_=new me;function b_(i,t,e,n,s,o,r){const a=new rt(0);let u=o===!0?0:1,c,l,h=null,f=0,p=null;function m(_){let w=_.isScene===!0?_.background:null;return w&&w.isTexture&&(w=(_.backgroundBlurriness>0?e:t).get(w)),w}function x(_){let w=!1;const A=m(_);A===null?g(a,u):A&&A.isColor&&(g(A,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(_,w){const A=m(w);A&&(A.isCubeTexture||A.mapping===Kc)?(l===void 0&&(l=new C(new oa(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:sr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),ws.copy(w.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),l.material.uniforms.envMap.value=A,l.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(ws)),l.material.toneMapped=he.getTransfer(A.colorSpace)!==xe,(h!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new C(new oe(2,2),new Cn({name:"BackgroundMaterial",uniforms:sr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=he.getTransfer(A.colorSpace)!==xe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,w){_.getRGB(Ha,sp(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,w,r)}function S(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),u=w,g(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(_){u=_,g(a,u)},render:x,addToRenderList:d,dispose:S}}function T_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(v,R,L,D,F){let V=!1;const k=h(D,L,R);o!==k&&(o=k,c(o.object)),V=p(v,D,L,F),V&&m(v,D,L,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,w(v,R,L,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function u(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function l(v){return i.deleteVertexArray(v)}function h(v,R,L){const D=L.wireframe===!0;let F=n[v.id];F===void 0&&(F={},n[v.id]=F);let V=F[R.id];V===void 0&&(V={},F[R.id]=V);let k=V[D];return k===void 0&&(k=f(u()),V[D]=k),k}function f(v){const R=[],L=[],D=[];for(let F=0;F<e;F++)R[F]=0,L[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:D,object:v,attributes:{},index:null}}function p(v,R,L,D){const F=o.attributes,V=R.attributes;let k=0;const O=L.getAttributes();for(const B in O)if(O[B].location>=0){const ut=F[B];let ft=V[B];if(ft===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;k++}return o.attributesNum!==k||o.index!==D}function m(v,R,L,D){const F={},V=R.attributes;let k=0;const O=L.getAttributes();for(const B in O)if(O[B].location>=0){let ut=V[B];ut===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),F[B]=ft,k++}o.attributes=F,o.attributesNum=k,o.index=D}function x(){const v=o.newAttributes;for(let R=0,L=v.length;R<L;R++)v[R]=0}function d(v){g(v,0)}function g(v,R){const L=o.newAttributes,D=o.enabledAttributes,F=o.attributeDivisors;L[v]=1,D[v]===0&&(i.enableVertexAttribArray(v),D[v]=1),F[v]!==R&&(i.vertexAttribDivisor(v,R),F[v]=R)}function S(){const v=o.newAttributes,R=o.enabledAttributes;for(let L=0,D=R.length;L<D;L++)R[L]!==v[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function _(v,R,L,D,F,V,k){k===!0?i.vertexAttribIPointer(v,R,L,F,V):i.vertexAttribPointer(v,R,L,D,F,V)}function w(v,R,L,D){x();const F=D.attributes,V=L.getAttributes(),k=R.defaultAttributeValues;for(const O in V){const B=V[O];if(B.location>=0){let it=F[O];if(it===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const ut=it.normalized,ft=it.itemSize,Pt=t.get(it);if(Pt===void 0)continue;const Wt=Pt.buffer,et=Pt.type,lt=Pt.bytesPerElement,yt=et===i.INT||et===i.UNSIGNED_INT||it.gpuType===cf;if(it.isInterleavedBufferAttribute){const mt=it.data,zt=mt.stride,Ot=it.offset;if(mt.isInstancedInterleavedBuffer){for(let $t=0;$t<B.locationSize;$t++)g(B.location+$t,mt.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $t=0;$t<B.locationSize;$t++)d(B.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let $t=0;$t<B.locationSize;$t++)_(B.location+$t,ft/B.locationSize,et,ut,zt*lt,(Ot+ft/B.locationSize*$t)*lt,yt)}else{if(it.isInstancedBufferAttribute){for(let mt=0;mt<B.locationSize;mt++)g(B.location+mt,it.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let mt=0;mt<B.locationSize;mt++)d(B.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let mt=0;mt<B.locationSize;mt++)_(B.location+mt,ft/B.locationSize,et,ut,ft*lt,ft/B.locationSize*mt*lt,yt)}}else if(k!==void 0){const ut=k[O];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(B.location,ut);break;case 3:i.vertexAttrib3fv(B.location,ut);break;case 4:i.vertexAttrib4fv(B.location,ut);break;default:i.vertexAttrib1fv(B.location,ut)}}}}S()}function A(){b();for(const v in n){const R=n[v];for(const L in R){const D=R[L];for(const F in D)l(D[F].object),delete D[F];delete R[L]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const L in R){const D=R[L];for(const F in D)l(D[F].object),delete D[F];delete R[L]}delete n[v.id]}function T(v){for(const R in n){const L=n[R];if(L[v.id]===void 0)continue;const D=L[v.id];for(const F in D)l(D[F].object),delete D[F];delete L[v.id]}}function b(){y(),r=!0,o!==s&&(o=s,c(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:d,disableUnusedAttributes:S}}function E_(i,t,e){let n;function s(c){n=c}function o(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function r(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let p=0;for(let m=0;m<h;m++)p+=l[m];e.update(p,n,1)}function u(c,l,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)r(c[m],l[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,l,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=l[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function A_(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==ui&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Yi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Si&&!b)}function u(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const l=u(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:d,maxAttributes:g,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:A,maxSamples:E}}function R_(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new As,a=new qt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){o=!0,l(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){e=l(h,f,0)},this.setState=function(h,f,p){const m=h.clippingPlanes,x=h.clipIntersection,d=h.clipShadows,g=i.get(h);if(!s||m===null||m.length===0||o&&!d)o?l(null):c();else{const S=o?0:n,_=S*4;let w=g.clippingState||null;u.value=w,w=l(m,f,_,p);for(let A=0;A!==_;++A)w[A]=e[A];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(h,f,p,m){const x=h!==null?h.length:0;let d=null;if(x!==0){if(d=u.value,m!==!0||d===null){const g=p+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let _=0,w=p;_!==x;++_,w+=4)r.copy(h[_]).applyMatrix4(S,a),r.normal.toArray(d,w),d[w+3]=r.constant}u.value=d,u.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}function C_(i){let t=new WeakMap;function e(r,a){return a===Ru?r.mapping=Ko:a===Cu&&(r.mapping=Qo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ru||a===Cu)if(t.has(r)){const u=t.get(r).texture;return e(u,r.mapping)}else{const u=r.image;if(u&&u.height>0){const c=new Qg(u.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Lo=4,Dd=[.125,.215,.35,.446,.526,.582],zs=20,Ol=new Ef,Ud=new rt;let Bl=null,Gl=0,kl=0,Hl=!1;const Rs=(1+Math.sqrt(5))/2,Mo=1/Rs,Nd=[new z(-Rs,Mo,0),new z(Rs,Mo,0),new z(-Mo,0,Rs),new z(Mo,0,Rs),new z(0,Rs,-Mo),new z(0,Rs,Mo),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class zd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Bl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,Gl,kl),this._renderer.xr.enabled=Hl,t.scissorTest=!1,Va(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ko||t.mapping===Qo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Hi,format:ui,colorSpace:ir,depthBuffer:!1},s=Fd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(o)),this._blurMaterial=I_(o,t,e)}return s}_compileMaterial(t){const e=new C(this._lodPlanes[0],t);this._renderer.compile(e,Ol)}_sceneToCubeUV(t,e,n,s){const a=new Fn(90,1,e,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,f=l.toneMapping;l.getClearColor(Ud),l.toneMapping=fs,l.autoClear=!1;const p=new Z({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new C(new oa,p);let x=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,x=!0):(p.color.copy(Ud),x=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,u[g],0),a.lookAt(c[g],0,0)):S===1?(a.up.set(0,0,u[g]),a.lookAt(0,c[g],0)):(a.up.set(0,u[g],0),a.lookAt(0,0,c[g]));const _=this._cubeSize;Va(s,S*_,g>2?_:0,_,_),l.setRenderTarget(s),x&&l.render(m,a),l.render(t,a)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=f,l.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ko||t.mapping===Qo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new C(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const u=this._cubeSize;Va(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(r,Ol)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Nd[(s-o-1)%Nd.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const u=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new C(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*zs-1),x=o/m,d=isFinite(o)?1+Math.floor(l*x):zs;d>zs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${zs}`);const g=[];let S=0;for(let T=0;T<zs;++T){const b=T/x,y=Math.exp(-b*b/2);g.push(y),T===0?S+=y:T<d&&(S+=2*y)}for(let T=0;T<g.length;T++)g[T]=g[T]/S;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const w=this._sizeLods[s],A=3*w*(s>_-Lo?s-_+Lo:0),E=4*(this._cubeSize-w);Va(e,A,E,3*w,2*w),u.setRenderTarget(e),u.render(h,Ol)}}function P_(i){const t=[],e=[],n=[];let s=i;const o=i-Lo+1+Dd.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let u=1/a;r>i-Lo?u=Dd[r-i+Lo-1]:r===0&&(u=0),n.push(u);const c=1/(a-2),l=-c,h=1+c,f=[l,l,h,l,h,h,l,l,h,h,l,h],p=6,m=6,x=3,d=2,g=1,S=new Float32Array(x*m*p),_=new Float32Array(d*m*p),w=new Float32Array(g*m*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,b=E>2?0:-1,y=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(y,x*m*E),_.set(f,d*m*E);const v=[E,E,E,E,E,E];w.set(v,g*m*E)}const A=new Se;A.setAttribute("position",new ze(S,x)),A.setAttribute("uv",new ze(_,d)),A.setAttribute("faceIndex",new ze(w,g)),t.push(A),s>Lo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fd(i,t,e){const n=new hi(i,t,e);return n.texture.mapping=Kc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function I_(i,t,e){const n=new Float32Array(zs),s=new z(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Af(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Od(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Bd(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Af(){return`

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
	`}function L_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const u=a.mapping,c=u===Ru||u===Cu,l=u===Ko||u===Qo;if(c||l){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new zd(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||l&&p&&s(p)?(e===null&&(e=new zd(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let u=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&u++;return u===c}function o(a){const u=a.target;u.removeEventListener("dispose",o);const c=t.get(u);c!==void 0&&(t.delete(u),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function D_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&To("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U_(i,t,e,n){const s={},o=new WeakMap;function r(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",r),delete s[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function u(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,m=h.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let _=0,w=S.length;_<w;_+=3){const A=S[_+0],E=S[_+1],T=S[_+2];f.push(A,E,E,T,T,A)}}else if(m!==void 0){const S=m.array;x=m.version;for(let _=0,w=S.length/3-1;_<w;_+=3){const A=_+0,E=_+1,T=_+2;f.push(A,E,E,T,T,A)}}else return;const d=new(J0(f)?ip:np)(f,1);d.version=x;const g=o.get(h);g&&t.remove(g),o.set(h,d)}function l(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:u,getWireframeAttribute:l}}function N_(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function u(f,p){i.drawElements(n,p,o,f*r),e.update(p,n,1)}function c(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,o,f*r,m),e.update(p,n,m))}function l(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,f,0,m);let d=0;for(let g=0;g<m;g++)d+=p[g];e.update(d,n,1)}function h(f,p,m,x){if(m===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f.length;g++)c(f[g]/r,p[g],x[g]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,o,f,0,x,0,m);let g=0;for(let S=0;S<m;S++)g+=p[S]*x[S];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function z_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function F_(i,t,e){const n=new WeakMap,s=new ve;function o(r,a,u){const c=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let v=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let w=0;m===!0&&(w=1),x===!0&&(w=2),d===!0&&(w=3);let A=a.attributes.position.count*w,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*E*4*h),b=new Q0(T,A,E,h);b.type=Si,b.needsUpdate=!0;const y=w*4;for(let R=0;R<h;R++){const L=g[R],D=S[R],F=_[R],V=A*E*4*R;for(let k=0;k<L.count;k++){const O=k*y;m===!0&&(s.fromBufferAttribute(L,k),T[V+O+0]=s.x,T[V+O+1]=s.y,T[V+O+2]=s.z,T[V+O+3]=0),x===!0&&(s.fromBufferAttribute(D,k),T[V+O+4]=s.x,T[V+O+5]=s.y,T[V+O+6]=s.z,T[V+O+7]=0),d===!0&&(s.fromBufferAttribute(F,k),T[V+O+8]=s.x,T[V+O+9]=s.y,T[V+O+10]=s.z,T[V+O+11]=F.itemSize===4?s.w:1)}}f={count:h,texture:b,size:new pt(A,E)},n.set(a,f),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let d=0;d<c.length;d++)m+=c[d];const x=a.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",c)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function O_(i,t,e,n){let s=new WeakMap;function o(u){const c=n.render.frame,l=u.geometry,h=t.get(u,l);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),s.get(u)!==c&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const f=u.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function r(){s=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}const Sp=new rn,Gd=new hp(1,1),bp=new Q0,Tp=new Og,Ep=new rp,kd=[],Hd=[],Vd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=kd[s];if(o===void 0&&(o=new Float32Array(s),kd[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function el(i,t){let e=Hd[t];e===void 0&&(e=new Int32Array(t),Hd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function B_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function k_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function V_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),We(e,n)}}function W_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),We(e,n)}}function X_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,n))return;Vd.set(n),i.uniformMatrix4fv(this.addr,!1,Vd),We(e,n)}}function q_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function Z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function j_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function K_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function Q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function ty(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Gd.compareFunction=j0,o=Gd):o=Sp,e.setTexture2D(t||o,s)}function ey(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tp,s)}function ny(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ep,s)}function iy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bp,s)}function sy(i){switch(i){case 5126:return B_;case 35664:return G_;case 35665:return k_;case 35666:return H_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return $_;case 5125:return j_;case 36294:return J_;case 36295:return K_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function oy(i,t){i.uniform1fv(this.addr,t)}function ry(i,t){const e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function ay(i,t){const e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function cy(i,t){const e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function ly(i,t){const e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function uy(i,t){const e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hy(i,t){const e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fy(i,t){i.uniform1iv(this.addr,t)}function dy(i,t){i.uniform2iv(this.addr,t)}function py(i,t){i.uniform3iv(this.addr,t)}function my(i,t){i.uniform4iv(this.addr,t)}function gy(i,t){i.uniform1uiv(this.addr,t)}function xy(i,t){i.uniform2uiv(this.addr,t)}function My(i,t){i.uniform3uiv(this.addr,t)}function vy(i,t){i.uniform4uiv(this.addr,t)}function _y(i,t,e){const n=this.cache,s=t.length,o=el(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Sp,o[r])}function yy(i,t,e){const n=this.cache,s=t.length,o=el(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Tp,o[r])}function wy(i,t,e){const n=this.cache,s=t.length,o=el(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ep,o[r])}function Sy(i,t,e){const n=this.cache,s=t.length,o=el(e,s);Ve(n,o)||(i.uniform1iv(this.addr,o),We(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||bp,o[r])}function by(i){switch(i){case 5126:return oy;case 35664:return ry;case 35665:return ay;case 35666:return cy;case 35674:return ly;case 35675:return uy;case 35676:return hy;case 5124:case 35670:return fy;case 35667:case 35671:return dy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return xy;case 36295:return My;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Sy}}class Ty{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sy(e.type)}}class Ey{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=by(e.type)}}class Ay{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Vl=/(\w+)(\])?(\[|\.)?/g;function qd(i,t){i.seq.push(t),i.map[t.id]=t}function Ry(i,t,e){const n=i.name,s=n.length;for(Vl.lastIndex=0;;){const o=Vl.exec(n),r=Vl.lastIndex;let a=o[1];const u=o[2]==="]",c=o[3];if(u&&(a=a|0),c===void 0||c==="["&&r+2===s){qd(e,c===void 0?new Ty(a,i,t):new Ey(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Ay(a),qd(e,h)),e=h}}}class fc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Ry(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],u=n[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Yd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Cy=37297;let Py=0;function Iy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Zd=new qt;function Ly(i){he._getMatrix(Zd,he.workingColorSpace,i);const t=`mat3( ${Zd.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Ac:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $d(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Iy(i.getShaderSource(t),r)}else return s}function Dy(i,t){const e=Ly(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Uy(i,t){let e;switch(t){case hg:e="Linear";break;case fg:e="Reinhard";break;case dg:e="Cineon";break;case O0:e="ACESFilmic";break;case mg:e="AgX";break;case gg:e="Neutral";break;case pg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wa=new z;function Ny(){he.getLuminanceCoefficients(Wa);const i=Wa.x.toFixed(4),t=Wa.y.toFixed(4),e=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Fy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Oy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ur(i){return i!==""}function jd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const By=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(i){return i.replace(By,ky)}const Gy=new Map;function ky(i,t){let e=Zt[t];if(e===void 0){const n=Gy.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lh(e)}const Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(i){return i.replace(Hy,Vy)}function Vy(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Qd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Wy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===N0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===z0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function Xy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ko:case Qo:t="ENVMAP_TYPE_CUBE";break;case Kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qo:t="ENVMAP_MODE_REFRACTION";break}return t}function Yy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case F0:t="ENVMAP_BLENDING_MULTIPLY";break;case lg:t="ENVMAP_BLENDING_MIX";break;case ug:t="ENVMAP_BLENDING_ADD";break}return t}function Zy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $y(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const u=Wy(e),c=Xy(e),l=qy(e),h=Yy(e),f=Zy(e),p=zy(e),m=Fy(o),x=s.createProgram();let d,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ur).join(`
`),d.length>0&&(d+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ur).join(`
`),g.length>0&&(g+=`
`)):(d=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),g=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fs?"#define TONE_MAPPING":"",e.toneMapping!==fs?Zt.tonemapping_pars_fragment:"",e.toneMapping!==fs?Uy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Dy("linearToOutputTexel",e.outputColorSpace),Ny(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),r=lh(r),r=jd(r,e),r=Jd(r,e),a=lh(a),a=jd(a,e),a=Jd(a,e),r=Kd(r),a=Kd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",e.glslVersion===jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=S+d+r,w=S+g+a,A=Yd(s,s.VERTEX_SHADER,_),E=Yd(s,s.FRAGMENT_SHADER,w);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(A).trim(),F=s.getShaderInfoLog(E).trim();let V=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const O=$d(s,A,"vertex"),B=$d(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+O+`
`+B)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||F==="")&&(k=!1);k&&(R.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:d},fragmentShader:{log:F,prefix:g}})}s.deleteShader(A),s.deleteShader(E),b=new fc(s,x),y=Oy(s,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Cy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Py++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let jy=0;class Jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ky(t),e.set(t,n)),n}}class Ky{constructor(t){this.id=jy++,this.code=t,this.usedTimes=0}}function Qy(i,t,e,n,s,o,r){const a=new tp,u=new Jy,c=new Set,l=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,v,R,L,D){const F=L.fog,V=D.geometry,k=y.isMeshStandardMaterial?L.environment:null,O=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),B=O&&O.mapping===Kc?O.image.height:null,it=m[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=ut!==void 0?ut.length:0;let Pt=0;V.morphAttributes.position!==void 0&&(Pt=1),V.morphAttributes.normal!==void 0&&(Pt=2),V.morphAttributes.color!==void 0&&(Pt=3);let Wt,et,lt,yt;if(it){const ge=xi[it];Wt=ge.vertexShader,et=ge.fragmentShader}else Wt=y.vertexShader,et=y.fragmentShader,u.update(y),lt=u.getVertexShaderID(y),yt=u.getFragmentShaderID(y);const mt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Ot=D.isInstancedMesh===!0,$t=D.isBatchedMesh===!0,Ce=!!y.map,re=!!y.matcap,Fe=!!O,G=!!y.aoMap,Xn=!!y.lightMap,ne=!!y.bumpMap,ie=!!y.normalMap,Dt=!!y.displacementMap,be=!!y.emissiveMap,Lt=!!y.metalnessMap,N=!!y.roughnessMap,P=y.anisotropy>0,j=y.clearcoat>0,st=y.dispersion>0,at=y.iridescence>0,nt=y.sheen>0,It=y.transmission>0,_t=P&&!!y.anisotropyMap,Tt=j&&!!y.clearcoatMap,ae=j&&!!y.clearcoatNormalMap,dt=j&&!!y.clearcoatRoughnessMap,Et=at&&!!y.iridescenceMap,Ft=at&&!!y.iridescenceThicknessMap,Gt=nt&&!!y.sheenColorMap,At=nt&&!!y.sheenRoughnessMap,se=!!y.specularMap,Yt=!!y.specularColorMap,ye=!!y.specularIntensityMap,H=It&&!!y.transmissionMap,Mt=It&&!!y.thicknessMap,tt=!!y.gradientMap,ot=!!y.alphaMap,St=y.alphaTest>0,wt=!!y.alphaHash,Xt=!!y.extensions;let Le=fs;y.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Le=i.toneMapping);const Je={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Wt,fragmentShader:et,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:$t,batchingColor:$t&&D._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&D.instanceColor!==null,instancingMorph:Ot&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ir,alphaToCoverage:!!y.alphaToCoverage,map:Ce,matcap:re,envMap:Fe,envMapMode:Fe&&O.mapping,envMapCubeUVHeight:B,aoMap:G,lightMap:Xn,bumpMap:ne,normalMap:ie,displacementMap:f&&Dt,emissiveMap:be,normalMapObjectSpace:ie&&y.normalMapType===_g,normalMapTangentSpace:ie&&y.normalMapType===$0,metalnessMap:Lt,roughnessMap:N,anisotropy:P,anisotropyMap:_t,clearcoat:j,clearcoatMap:Tt,clearcoatNormalMap:ae,clearcoatRoughnessMap:dt,dispersion:st,iridescence:at,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:nt,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:se,specularColorMap:Yt,specularIntensityMap:ye,transmission:It,transmissionMap:H,thicknessMap:Mt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===Oo&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:St,alphaHash:wt,combine:y.combine,mapUv:Ce&&x(y.map.channel),aoMapUv:G&&x(y.aoMap.channel),lightMapUv:Xn&&x(y.lightMap.channel),bumpMapUv:ne&&x(y.bumpMap.channel),normalMapUv:ie&&x(y.normalMap.channel),displacementMapUv:Dt&&x(y.displacementMap.channel),emissiveMapUv:be&&x(y.emissiveMap.channel),metalnessMapUv:Lt&&x(y.metalnessMap.channel),roughnessMapUv:N&&x(y.roughnessMap.channel),anisotropyMapUv:_t&&x(y.anisotropyMap.channel),clearcoatMapUv:Tt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(y.sheenRoughnessMap.channel),specularMapUv:se&&x(y.specularMap.channel),specularColorMapUv:Yt&&x(y.specularColorMap.channel),specularIntensityMapUv:ye&&x(y.specularIntensityMap.channel),transmissionMapUv:H&&x(y.transmissionMap.channel),thicknessMapUv:Mt&&x(y.thicknessMap.channel),alphaMapUv:ot&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ie||P),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Ce||ot),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Pt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===xe,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ct,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&y.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function g(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)v.push(R),v.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(S(v,y),_(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function S(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function _(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function w(y){const v=m[y.type];let R;if(v){const L=xi[v];R=Pc.clone(L.uniforms)}else R=y.uniforms;return R}function A(y,v){let R;for(let L=0,D=l.length;L<D;L++){const F=l[L];if(F.cacheKey===v){R=F,++R.usedTimes;break}}return R===void 0&&(R=new $y(i,v,y,o),l.push(R)),R}function E(y){if(--y.usedTimes===0){const v=l.indexOf(y);l[v]=l[l.length-1],l.pop(),y.destroy()}}function T(y){u.remove(y)}function b(){u.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:w,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:b}}function t1(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,u){i.get(r)[a]=u}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function e1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function t0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function e0(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,f,p,m,x,d){let g=i[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:x,group:d},i[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=p,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=x,g.group=d),t++,g}function a(h,f,p,m,x,d){const g=r(h,f,p,m,x,d);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):e.push(g)}function u(h,f,p,m,x,d){const g=r(h,f,p,m,x,d);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):e.unshift(g)}function c(h,f){e.length>1&&e.sort(h||e1),n.length>1&&n.sort(f||t0),s.length>1&&s.sort(f||t0)}function l(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:u,finish:l,sort:c}}function n1(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new e0,i.set(n,[r])):s>=o.length?(r=new e0,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function i1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new rt};break;case"SpotLight":e={position:new z,direction:new z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function s1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let o1=0;function r1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function a1(i){const t=new i1,e=s1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,o=new me,r=new me;function a(c){let l=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,m=0,x=0,d=0,g=0,S=0,_=0,w=0,A=0,E=0,T=0;c.sort(r1);for(let y=0,v=c.length;y<v;y++){const R=c[y],L=R.color,D=R.intensity,F=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)l+=L.r*D,h+=L.g*D,f+=L.b*D;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],D);T++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,B=e.get(R);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(L).multiplyScalar(D),k.distance=F,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const O=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,O.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=O.matrix,R.castShadow){const B=e.get(R);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=V,w++}x++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(L).multiplyScalar(D),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[d]=k,d++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const O=R.shadow,B=e.get(R);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,B.shadowCameraNear=O.camera.near,B.shadowCameraFar=O.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=R.shadow.matrix,_++}n.point[m]=k,m++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(D),k.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[g]=k,g++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==p||b.pointLength!==m||b.spotLength!==x||b.rectAreaLength!==d||b.hemiLength!==g||b.numDirectionalShadows!==S||b.numPointShadows!==_||b.numSpotShadows!==w||b.numSpotMaps!==A||b.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=d,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=w+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=p,b.pointLength=m,b.spotLength=x,b.rectAreaLength=d,b.hemiLength=g,b.numDirectionalShadows=S,b.numPointShadows=_,b.numSpotShadows=w,b.numSpotMaps=A,b.numLightProbes=T,n.version=o1++)}function u(c,l){let h=0,f=0,p=0,m=0,x=0;const d=l.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const _=c[g];if(_.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(_.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),p++}else if(_.isRectAreaLight){const w=n.rectArea[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),r.identity(),o.copy(_.matrixWorld),o.premultiply(d),r.extractRotation(o),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),m++}else if(_.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),f++}else if(_.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(d),x++}}}return{setup:a,setupView:u,state:n}}function n0(i){const t=new a1(i),e=[],n=[];function s(l){c.camera=l,e.length=0,n.length=0}function o(l){e.push(l)}function r(l){n.push(l)}function a(){t.setup(e)}function u(l){t.setupView(e,l)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:u,pushLight:o,pushShadow:r}}function c1(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new n0(i),t.set(s,[a])):o>=r.length?(a=new n0(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const l1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`;function h1(i,t,e){let n=new xf;const s=new pt,o=new pt,r=new ve,a=new zx({depthPacking:vg}),u=new Fx,c={},l=e.maxTextureSize,h={[ps]:on,[on]:ps,[Ct]:Ct},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:l1,fragmentShader:u1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Se;m.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new C(m,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let g=this.type;this.render=function(E,T,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ki),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=g!==Ni&&this.type===Ni,F=g===Ni&&this.type!==Ni;for(let V=0,k=E.length;V<k;V++){const O=E[V],B=O.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const it=B.getFrameExtents();if(s.multiply(it),o.copy(B.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(o.x=Math.floor(l/it.x),s.x=o.x*it.x,B.mapSize.x=o.x),s.y>l&&(o.y=Math.floor(l/it.y),s.y=o.y*it.y,B.mapSize.y=o.y)),B.map===null||D===!0||F===!0){const ft=this.type!==Ni?{minFilter:Hn,magFilter:Hn}:{};B.map!==null&&B.map.dispose(),B.map=new hi(s.x,s.y,ft),B.map.texture.name=O.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ut=B.getViewportCount();for(let ft=0;ft<ut;ft++){const Pt=B.getViewport(ft);r.set(o.x*Pt.x,o.y*Pt.y,o.x*Pt.z,o.y*Pt.w),L.viewport(r),B.updateMatrices(O,ft),n=B.getFrustum(),w(T,b,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Ni&&S(B,b),B.needsUpdate=!1}g=this.type,d.needsUpdate=!1,i.setRenderTarget(y,v,R)};function S(E,T){const b=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,b,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,b,p,x,null)}function _(E,T,b,y){let v=null;const R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)v=R;else if(v=b.isPointLight===!0?u:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=v.uuid,D=T.uuid;let F=c[L];F===void 0&&(F={},c[L]=F);let V=F[D];V===void 0&&(V=v.clone(),F[D]=V,T.addEventListener("dispose",A)),v=V}if(v.visible=T.visible,v.wireframe=T.wireframe,y===Ni?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=i.properties.get(v);L.light=b}return v}function w(E,T,b,y,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ni)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const D=t.update(E),F=E.material;if(Array.isArray(F)){const V=D.groups;for(let k=0,O=V.length;k<O;k++){const B=V[k],it=F[B.materialIndex];if(it&&it.visible){const ut=_(E,it,y,v);E.onBeforeShadow(i,E,T,b,D,ut,B),i.renderBufferDirect(b,null,D,ut,E,B),E.onAfterShadow(i,E,T,b,D,ut,B)}}}else if(F.visible){const V=_(E,F,y,v);E.onBeforeShadow(i,E,T,b,D,V,null),i.renderBufferDirect(b,null,D,V,E,null),E.onAfterShadow(i,E,T,b,D,V,null)}}const L=E.children;for(let D=0,F=L.length;D<F;D++)w(L[D],T,b,y,v)}function A(E){E.target.removeEventListener("dispose",A);for(const b in c){const y=c[b],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const f1={[yu]:wu,[Su]:Eu,[bu]:Au,[Jo]:Tu,[wu]:yu,[Eu]:Su,[Au]:bu,[Tu]:Jo};function d1(i,t){function e(){let H=!1;const Mt=new ve;let tt=null;const ot=new ve(0,0,0,0);return{setMask:function(St){tt!==St&&!H&&(i.colorMask(St,St,St,St),tt=St)},setLocked:function(St){H=St},setClear:function(St,wt,Xt,Le,Je){Je===!0&&(St*=Le,wt*=Le,Xt*=Le),Mt.set(St,wt,Xt,Le),ot.equals(Mt)===!1&&(i.clearColor(St,wt,Xt,Le),ot.copy(Mt))},reset:function(){H=!1,tt=null,ot.set(-1,0,0,0)}}}function n(){let H=!1,Mt=!1,tt=null,ot=null,St=null;return{setReversed:function(wt){if(Mt!==wt){const Xt=t.get("EXT_clip_control");Mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const Le=St;St=null,this.setClear(Le)}Mt=wt},getReversed:function(){return Mt},setTest:function(wt){wt?mt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(wt){tt!==wt&&!H&&(i.depthMask(wt),tt=wt)},setFunc:function(wt){if(Mt&&(wt=f1[wt]),ot!==wt){switch(wt){case yu:i.depthFunc(i.NEVER);break;case wu:i.depthFunc(i.ALWAYS);break;case Su:i.depthFunc(i.LESS);break;case Jo:i.depthFunc(i.LEQUAL);break;case bu:i.depthFunc(i.EQUAL);break;case Tu:i.depthFunc(i.GEQUAL);break;case Eu:i.depthFunc(i.GREATER);break;case Au:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=wt}},setLocked:function(wt){H=wt},setClear:function(wt){St!==wt&&(Mt&&(wt=1-wt),i.clearDepth(wt),St=wt)},reset:function(){H=!1,tt=null,ot=null,St=null,Mt=!1}}}function s(){let H=!1,Mt=null,tt=null,ot=null,St=null,wt=null,Xt=null,Le=null,Je=null;return{setTest:function(ge){H||(ge?mt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ge){Mt!==ge&&!H&&(i.stencilMask(ge),Mt=ge)},setFunc:function(ge,si,Ri){(tt!==ge||ot!==si||St!==Ri)&&(i.stencilFunc(ge,si,Ri),tt=ge,ot=si,St=Ri)},setOp:function(ge,si,Ri){(wt!==ge||Xt!==si||Le!==Ri)&&(i.stencilOp(ge,si,Ri),wt=ge,Xt=si,Le=Ri)},setLocked:function(ge){H=ge},setClear:function(ge){Je!==ge&&(i.clearStencil(ge),Je=ge)},reset:function(){H=!1,Mt=null,tt=null,ot=null,St=null,wt=null,Xt=null,Le=null,Je=null}}}const o=new e,r=new n,a=new s,u=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,p=[],m=null,x=!1,d=null,g=null,S=null,_=null,w=null,A=null,E=null,T=new rt(0,0,0),b=0,y=!1,v=null,R=null,L=null,D=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=O>=2);let it=null,ut={};const ft=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Wt=new ve().fromArray(ft),et=new ve().fromArray(Pt);function lt(H,Mt,tt,ot){const St=new Uint8Array(4),wt=i.createTexture();i.bindTexture(H,wt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<tt;Xt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(Mt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return wt}const yt={};yt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),r.setFunc(Jo),ne(!1),ie(qf),mt(i.CULL_FACE),G(ki);function mt(H){l[H]!==!0&&(i.enable(H),l[H]=!0)}function zt(H){l[H]!==!1&&(i.disable(H),l[H]=!1)}function Ot(H,Mt){return h[H]!==Mt?(i.bindFramebuffer(H,Mt),h[H]=Mt,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function $t(H,Mt){let tt=p,ot=!1;if(H){tt=f.get(Mt),tt===void 0&&(tt=[],f.set(Mt,tt));const St=H.textures;if(tt.length!==St.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Xt=St.length;wt<Xt;wt++)tt[wt]=i.COLOR_ATTACHMENT0+wt;tt.length=St.length,ot=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ot=!0);ot&&i.drawBuffers(tt)}function Ce(H){return m!==H?(i.useProgram(H),m=H,!0):!1}const re={[Ns]:i.FUNC_ADD,[qm]:i.FUNC_SUBTRACT,[Ym]:i.FUNC_REVERSE_SUBTRACT};re[Zm]=i.MIN,re[$m]=i.MAX;const Fe={[jm]:i.ZERO,[Jm]:i.ONE,[Km]:i.SRC_COLOR,[vu]:i.SRC_ALPHA,[sg]:i.SRC_ALPHA_SATURATE,[ng]:i.DST_COLOR,[tg]:i.DST_ALPHA,[Qm]:i.ONE_MINUS_SRC_COLOR,[_u]:i.ONE_MINUS_SRC_ALPHA,[ig]:i.ONE_MINUS_DST_COLOR,[eg]:i.ONE_MINUS_DST_ALPHA,[og]:i.CONSTANT_COLOR,[rg]:i.ONE_MINUS_CONSTANT_COLOR,[ag]:i.CONSTANT_ALPHA,[cg]:i.ONE_MINUS_CONSTANT_ALPHA};function G(H,Mt,tt,ot,St,wt,Xt,Le,Je,ge){if(H===ki){x===!0&&(zt(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),H!==Xm){if(H!==d||ge!==y){if((g!==Ns||w!==Ns)&&(i.blendEquation(i.FUNC_ADD),g=Ns,w=Ns),ge)switch(H){case Oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFunc(i.ONE,i.ONE);break;case Yf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}S=null,_=null,A=null,E=null,T.set(0,0,0),b=0,d=H,y=ge}return}St=St||Mt,wt=wt||tt,Xt=Xt||ot,(Mt!==g||St!==w)&&(i.blendEquationSeparate(re[Mt],re[St]),g=Mt,w=St),(tt!==S||ot!==_||wt!==A||Xt!==E)&&(i.blendFuncSeparate(Fe[tt],Fe[ot],Fe[wt],Fe[Xt]),S=tt,_=ot,A=wt,E=Xt),(Le.equals(T)===!1||Je!==b)&&(i.blendColor(Le.r,Le.g,Le.b,Je),T.copy(Le),b=Je),d=H,y=!1}function Xn(H,Mt){H.side===Ct?zt(i.CULL_FACE):mt(i.CULL_FACE);let tt=H.side===on;Mt&&(tt=!tt),ne(tt),H.blending===Oo&&H.transparent===!1?G(ki):G(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),o.setMask(H.colorWrite);const ot=H.stencilWrite;a.setTest(ot),ot&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),be(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(H){v!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),v=H)}function ie(H){H!==Vm?(mt(i.CULL_FACE),H!==R&&(H===qf?i.cullFace(i.BACK):H===Wm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),R=H}function Dt(H){H!==L&&(k&&i.lineWidth(H),L=H)}function be(H,Mt,tt){H?(mt(i.POLYGON_OFFSET_FILL),(D!==Mt||F!==tt)&&(i.polygonOffset(Mt,tt),D=Mt,F=tt)):zt(i.POLYGON_OFFSET_FILL)}function Lt(H){H?mt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function N(H){H===void 0&&(H=i.TEXTURE0+V-1),it!==H&&(i.activeTexture(H),it=H)}function P(H,Mt,tt){tt===void 0&&(it===null?tt=i.TEXTURE0+V-1:tt=it);let ot=ut[tt];ot===void 0&&(ot={type:void 0,texture:void 0},ut[tt]=ot),(ot.type!==H||ot.texture!==Mt)&&(it!==tt&&(i.activeTexture(tt),it=tt),i.bindTexture(H,Mt||yt[H]),ot.type=H,ot.texture=Mt)}function j(){const H=ut[it];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(H){Wt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Wt.copy(H))}function At(H){et.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),et.copy(H))}function se(H,Mt){let tt=c.get(Mt);tt===void 0&&(tt=new WeakMap,c.set(Mt,tt));let ot=tt.get(H);ot===void 0&&(ot=i.getUniformBlockIndex(Mt,H.name),tt.set(H,ot))}function Yt(H,Mt){const ot=c.get(Mt).get(H);u.get(Mt)!==ot&&(i.uniformBlockBinding(Mt,ot,H.__bindingPointIndex),u.set(Mt,ot))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},it=null,ut={},h={},f=new WeakMap,p=[],m=null,x=!1,d=null,g=null,S=null,_=null,w=null,A=null,E=null,T=new rt(0,0,0),b=0,y=!1,v=null,R=null,L=null,D=null,F=null,Wt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:mt,disable:zt,bindFramebuffer:Ot,drawBuffers:$t,useProgram:Ce,setBlending:G,setMaterial:Xn,setFlipSided:ne,setCullFace:ie,setLineWidth:Dt,setPolygonOffset:be,setScissorTest:Lt,activeTexture:N,bindTexture:P,unbindTexture:j,compressedTexImage2D:st,compressedTexImage3D:at,texImage2D:Et,texImage3D:Ft,updateUBOMapping:se,uniformBlockBinding:Yt,texStorage2D:ae,texStorage3D:dt,texSubImage2D:nt,texSubImage3D:It,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Gt,viewport:At,reset:ye}}function p1(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,l=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,P){return p?new OffscreenCanvas(N,P):Cc("canvas")}function x(N,P,j){let st=1;const at=Lt(N);if((at.width>j||at.height>j)&&(st=j/Math.max(at.width,at.height)),st<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const nt=Math.floor(st*at.width),It=Math.floor(st*at.height);h===void 0&&(h=m(nt,It));const _t=P?m(nt,It):h;return _t.width=nt,_t.height=It,_t.getContext("2d").drawImage(N,0,0,nt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+nt+"x"+It+")."),_t}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),N;return N}function d(N){return N.generateMipmaps}function g(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,P,j,st,at=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let nt=P;if(P===i.RED&&(j===i.FLOAT&&(nt=i.R32F),j===i.HALF_FLOAT&&(nt=i.R16F),j===i.UNSIGNED_BYTE&&(nt=i.R8)),P===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(nt=i.R8UI),j===i.UNSIGNED_SHORT&&(nt=i.R16UI),j===i.UNSIGNED_INT&&(nt=i.R32UI),j===i.BYTE&&(nt=i.R8I),j===i.SHORT&&(nt=i.R16I),j===i.INT&&(nt=i.R32I)),P===i.RG&&(j===i.FLOAT&&(nt=i.RG32F),j===i.HALF_FLOAT&&(nt=i.RG16F),j===i.UNSIGNED_BYTE&&(nt=i.RG8)),P===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(nt=i.RG8UI),j===i.UNSIGNED_SHORT&&(nt=i.RG16UI),j===i.UNSIGNED_INT&&(nt=i.RG32UI),j===i.BYTE&&(nt=i.RG8I),j===i.SHORT&&(nt=i.RG16I),j===i.INT&&(nt=i.RG32I)),P===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),j===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),j===i.UNSIGNED_INT&&(nt=i.RGB32UI),j===i.BYTE&&(nt=i.RGB8I),j===i.SHORT&&(nt=i.RGB16I),j===i.INT&&(nt=i.RGB32I)),P===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),j===i.UNSIGNED_INT&&(nt=i.RGBA32UI),j===i.BYTE&&(nt=i.RGBA8I),j===i.SHORT&&(nt=i.RGBA16I),j===i.INT&&(nt=i.RGBA32I)),P===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),P===i.RGBA){const It=at?Ac:he.getTransfer(st);j===i.FLOAT&&(nt=i.RGBA32F),j===i.HALF_FLOAT&&(nt=i.RGBA16F),j===i.UNSIGNED_BYTE&&(nt=It===xe?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function w(N,P){let j;return N?P===null||P===Xs||P===er?j=i.DEPTH24_STENCIL8:P===Si?j=i.DEPTH32F_STENCIL8:P===$r&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Xs||P===er?j=i.DEPTH_COMPONENT24:P===Si?j=i.DEPTH_COMPONENT32F:P===$r&&(j=i.DEPTH_COMPONENT16),j}function A(N,P){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Hn&&N.minFilter!==wi?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function E(N){const P=N.target;P.removeEventListener("dispose",E),b(P),P.isVideoTexture&&l.delete(P)}function T(N){const P=N.target;P.removeEventListener("dispose",T),v(P)}function b(N){const P=n.get(N);if(P.__webglInit===void 0)return;const j=N.source,st=f.get(j);if(st){const at=st[P.__cacheKey];at.usedTimes--,at.usedTimes===0&&y(N),Object.keys(st).length===0&&f.delete(j)}n.remove(N)}function y(N){const P=n.get(N);i.deleteTexture(P.__webglTexture);const j=N.source,st=f.get(j);delete st[P.__cacheKey],r.memory.textures--}function v(N){const P=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(P.__webglFramebuffer[st]))for(let at=0;at<P.__webglFramebuffer[st].length;at++)i.deleteFramebuffer(P.__webglFramebuffer[st][at]);else i.deleteFramebuffer(P.__webglFramebuffer[st]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[st])}else{if(Array.isArray(P.__webglFramebuffer))for(let st=0;st<P.__webglFramebuffer.length;st++)i.deleteFramebuffer(P.__webglFramebuffer[st]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let st=0;st<P.__webglColorRenderbuffer.length;st++)P.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[st]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const j=N.textures;for(let st=0,at=j.length;st<at;st++){const nt=n.get(j[st]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),r.memory.textures--),n.remove(j[st])}n.remove(N)}let R=0;function L(){R=0}function D(){const N=R;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),R+=1,N}function F(N){const P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function V(N,P){const j=n.get(N);if(N.isVideoTexture&&Dt(N),N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){const st=N.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,N,P);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+P)}function k(N,P){const j=n.get(N);if(N.version>0&&j.__version!==N.version){et(j,N,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+P)}function O(N,P){const j=n.get(N);if(N.version>0&&j.__version!==N.version){et(j,N,P);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+P)}function B(N,P){const j=n.get(N);if(N.version>0&&j.__version!==N.version){lt(j,N,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+P)}const it={[tr]:i.REPEAT,[Fs]:i.CLAMP_TO_EDGE,[Pu]:i.MIRRORED_REPEAT},ut={[Hn]:i.NEAREST,[xg]:i.NEAREST_MIPMAP_NEAREST,[da]:i.NEAREST_MIPMAP_LINEAR,[wi]:i.LINEAR,[cl]:i.LINEAR_MIPMAP_NEAREST,[Os]:i.LINEAR_MIPMAP_LINEAR},ft={[yg]:i.NEVER,[Ag]:i.ALWAYS,[wg]:i.LESS,[j0]:i.LEQUAL,[Sg]:i.EQUAL,[Eg]:i.GEQUAL,[bg]:i.GREATER,[Tg]:i.NOTEQUAL};function Pt(N,P){if(P.type===Si&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===wi||P.magFilter===cl||P.magFilter===da||P.magFilter===Os||P.minFilter===wi||P.minFilter===cl||P.minFilter===da||P.minFilter===Os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,it[P.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,it[P.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,it[P.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ut[P.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ut[P.minFilter]),P.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ft[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Hn||P.minFilter!==da&&P.minFilter!==Os||P.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Wt(N,P){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",E));const st=P.source;let at=f.get(st);at===void 0&&(at={},f.set(st,at));const nt=F(P);if(nt!==N.__cacheKey){at[nt]===void 0&&(at[nt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,j=!0),at[nt].usedTimes++;const It=at[N.__cacheKey];It!==void 0&&(at[N.__cacheKey].usedTimes--,It.usedTimes===0&&y(P)),N.__cacheKey=nt,N.__webglTexture=at[nt].texture}return j}function et(N,P,j){let st=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(st=i.TEXTURE_3D);const at=Wt(N,P),nt=P.source;e.bindTexture(st,N.__webglTexture,i.TEXTURE0+j);const It=n.get(nt);if(nt.version!==It.__version||at===!0){e.activeTexture(i.TEXTURE0+j);const _t=he.getPrimaries(he.workingColorSpace),Tt=P.colorSpace===cs?null:he.getPrimaries(P.colorSpace),ae=P.colorSpace===cs||_t===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let dt=x(P.image,!1,s.maxTextureSize);dt=be(P,dt);const Et=o.convert(P.format,P.colorSpace),Ft=o.convert(P.type);let Gt=_(P.internalFormat,Et,Ft,P.colorSpace,P.isVideoTexture);Pt(st,P);let At;const se=P.mipmaps,Yt=P.isVideoTexture!==!0,ye=It.__version===void 0||at===!0,H=nt.dataReady,Mt=A(P,dt);if(P.isDepthTexture)Gt=w(P.format===nr,P.type),ye&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Ft,null));else if(P.isDataTexture)if(se.length>0){Yt&&ye&&e.texStorage2D(i.TEXTURE_2D,Mt,Gt,se[0].width,se[0].height);for(let tt=0,ot=se.length;tt<ot;tt++)At=se[tt],Yt?H&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Ft,At.data):e.texImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,Et,Ft,At.data);P.generateMipmaps=!1}else Yt?(ye&&e.texStorage2D(i.TEXTURE_2D,Mt,Gt,dt.width,dt.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Et,Ft,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Ft,dt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Yt&&ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Gt,se[0].width,se[0].height,dt.depth);for(let tt=0,ot=se.length;tt<ot;tt++)if(At=se[tt],P.format!==ui)if(Et!==null)if(Yt){if(H)if(P.layerUpdates.size>0){const St=Ld(At.width,At.height,P.format,P.type);for(const wt of P.layerUpdates){const Xt=At.data.subarray(wt*St/At.data.BYTES_PER_ELEMENT,(wt+1)*St/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,wt,At.width,At.height,1,Et,Xt)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,dt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Gt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,dt.depth,Et,Ft,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Gt,At.width,At.height,dt.depth,0,Et,Ft,At.data)}else{Yt&&ye&&e.texStorage2D(i.TEXTURE_2D,Mt,Gt,se[0].width,se[0].height);for(let tt=0,ot=se.length;tt<ot;tt++)At=se[tt],P.format!==ui?Et!==null?Yt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?H&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Ft,At.data):e.texImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,Et,Ft,At.data)}else if(P.isDataArrayTexture)if(Yt){if(ye&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Gt,dt.width,dt.height,dt.depth),H)if(P.layerUpdates.size>0){const tt=Ld(dt.width,dt.height,P.format,P.type);for(const ot of P.layerUpdates){const St=dt.data.subarray(ot*tt/dt.data.BYTES_PER_ELEMENT,(ot+1)*tt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,dt.width,dt.height,1,Et,Ft,St)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Et,Ft,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,Et,Ft,dt.data);else if(P.isData3DTexture)Yt?(ye&&e.texStorage3D(i.TEXTURE_3D,Mt,Gt,dt.width,dt.height,dt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Et,Ft,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,Et,Ft,dt.data);else if(P.isFramebufferTexture){if(ye)if(Yt)e.texStorage2D(i.TEXTURE_2D,Mt,Gt,dt.width,dt.height);else{let tt=dt.width,ot=dt.height;for(let St=0;St<Mt;St++)e.texImage2D(i.TEXTURE_2D,St,Gt,tt,ot,0,Et,Ft,null),tt>>=1,ot>>=1}}else if(se.length>0){if(Yt&&ye){const tt=Lt(se[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Gt,tt.width,tt.height)}for(let tt=0,ot=se.length;tt<ot;tt++)At=se[tt],Yt?H&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Et,Ft,At):e.texImage2D(i.TEXTURE_2D,tt,Gt,Et,Ft,At);P.generateMipmaps=!1}else if(Yt){if(ye){const tt=Lt(dt);e.texStorage2D(i.TEXTURE_2D,Mt,Gt,tt.width,tt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ft,dt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Et,Ft,dt);d(P)&&g(st),It.__version=nt.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function lt(N,P,j){if(P.image.length!==6)return;const st=Wt(N,P),at=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+j);const nt=n.get(at);if(at.version!==nt.__version||st===!0){e.activeTexture(i.TEXTURE0+j);const It=he.getPrimaries(he.workingColorSpace),_t=P.colorSpace===cs?null:he.getPrimaries(P.colorSpace),Tt=P.colorSpace===cs||It===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const ae=P.isCompressedTexture||P.image[0].isCompressedTexture,dt=P.image[0]&&P.image[0].isDataTexture,Et=[];for(let ot=0;ot<6;ot++)!ae&&!dt?Et[ot]=x(P.image[ot],!0,s.maxCubemapSize):Et[ot]=dt?P.image[ot].image:P.image[ot],Et[ot]=be(P,Et[ot]);const Ft=Et[0],Gt=o.convert(P.format,P.colorSpace),At=o.convert(P.type),se=_(P.internalFormat,Gt,At,P.colorSpace),Yt=P.isVideoTexture!==!0,ye=nt.__version===void 0||st===!0,H=at.dataReady;let Mt=A(P,Ft);Pt(i.TEXTURE_CUBE_MAP,P);let tt;if(ae){Yt&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,se,Ft.width,Ft.height);for(let ot=0;ot<6;ot++){tt=Et[ot].mipmaps;for(let St=0;St<tt.length;St++){const wt=tt[St];P.format!==ui?Gt!==null?Yt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,wt.width,wt.height,Gt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,se,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,wt.width,wt.height,Gt,At,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,se,wt.width,wt.height,0,Gt,At,wt.data)}}}else{if(tt=P.mipmaps,Yt&&ye){tt.length>0&&Mt++;const ot=Lt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,se,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(dt){Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Et[ot].width,Et[ot].height,Gt,At,Et[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,se,Et[ot].width,Et[ot].height,0,Gt,At,Et[ot].data);for(let St=0;St<tt.length;St++){const Xt=tt[St].image[ot].image;Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Xt.width,Xt.height,Gt,At,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,se,Xt.width,Xt.height,0,Gt,At,Xt.data)}}else{Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Gt,At,Et[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,se,Gt,At,Et[ot]);for(let St=0;St<tt.length;St++){const wt=tt[St];Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Gt,At,wt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,se,Gt,At,wt.image[ot])}}}d(P)&&g(i.TEXTURE_CUBE_MAP),nt.__version=at.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function yt(N,P,j,st,at,nt){const It=o.convert(j.format,j.colorSpace),_t=o.convert(j.type),Tt=_(j.internalFormat,It,_t,j.colorSpace),ae=n.get(P),dt=n.get(j);if(dt.__renderTarget=P,!ae.__hasExternalTextures){const Et=Math.max(1,P.width>>nt),Ft=Math.max(1,P.height>>nt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,nt,Tt,Et,Ft,P.depth,0,It,_t,null):e.texImage2D(at,nt,Tt,Et,Ft,0,It,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),ie(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,at,dt.__webglTexture,0,ne(P)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,at,dt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(N,P,j){if(i.bindRenderbuffer(i.RENDERBUFFER,N),P.depthBuffer){const st=P.depthTexture,at=st&&st.isDepthTexture?st.type:null,nt=w(P.stencilBuffer,at),It=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ne(P);ie(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,nt,P.width,P.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,nt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,nt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,N)}else{const st=P.textures;for(let at=0;at<st.length;at++){const nt=st[at],It=o.convert(nt.format,nt.colorSpace),_t=o.convert(nt.type),Tt=_(nt.internalFormat,It,_t,nt.colorSpace),ae=ne(P);j&&ie(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Tt,P.width,P.height):ie(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Tt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(N,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(P.depthTexture);st.__renderTarget=P,(!st.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),V(P.depthTexture,0);const at=st.__webglTexture,nt=ne(P);if(P.depthTexture.format===Bo)ie(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(P.depthTexture.format===nr)ie(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Ot(N){const P=n.get(N),j=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){const st=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),st){const at=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,st.removeEventListener("dispose",at)};st.addEventListener("dispose",at),P.__depthDisposeCallback=at}P.__boundDepthTexture=st}if(N.depthTexture&&!P.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");zt(P.__webglFramebuffer,N)}else if(j){P.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[st]),P.__webglDepthbuffer[st]===void 0)P.__webglDepthbuffer[st]=i.createRenderbuffer(),mt(P.__webglDepthbuffer[st],N,!1);else{const at=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=P.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),mt(P.__webglDepthbuffer,N,!1);else{const st=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(N,P,j){const st=n.get(N);P!==void 0&&yt(st.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Ot(N)}function Ce(N){const P=N.texture,j=n.get(N),st=n.get(P);N.addEventListener("dispose",T);const at=N.textures,nt=N.isWebGLCubeRenderTarget===!0,It=at.length>1;if(It||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=P.version,r.memory.textures++),nt){j.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0){j.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<P.mipmaps.length;Tt++)j.__webglFramebuffer[_t][Tt]=i.createFramebuffer()}else j.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){j.__webglFramebuffer=[];for(let _t=0;_t<P.mipmaps.length;_t++)j.__webglFramebuffer[_t]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(It)for(let _t=0,Tt=at.length;_t<Tt;_t++){const ae=n.get(at[_t]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),r.memory.textures++)}if(N.samples>0&&ie(N)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let _t=0;_t<at.length;_t++){const Tt=at[_t];j.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[_t]);const ae=o.convert(Tt.format,Tt.colorSpace),dt=o.convert(Tt.type),Et=_(Tt.internalFormat,ae,dt,Tt.colorSpace,N.isXRRenderTarget===!0),Ft=ne(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,j.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(j.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,P);for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)yt(j.__webglFramebuffer[_t][Tt],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else yt(j.__webglFramebuffer[_t],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);d(P)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let _t=0,Tt=at.length;_t<Tt;_t++){const ae=at[_t],dt=n.get(ae);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Pt(i.TEXTURE_2D,ae),yt(j.__webglFramebuffer,N,ae,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),d(ae)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_t=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),Pt(_t,P),P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)yt(j.__webglFramebuffer[Tt],N,P,i.COLOR_ATTACHMENT0,_t,Tt);else yt(j.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0,_t,0);d(P)&&g(_t),e.unbindTexture()}N.depthBuffer&&Ot(N)}function re(N){const P=N.textures;for(let j=0,st=P.length;j<st;j++){const at=P[j];if(d(at)){const nt=S(N),It=n.get(at).__webglTexture;e.bindTexture(nt,It),g(nt),e.unbindTexture()}}}const Fe=[],G=[];function Xn(N){if(N.samples>0){if(ie(N)===!1){const P=N.textures,j=N.width,st=N.height;let at=i.COLOR_BUFFER_BIT;const nt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(N),_t=P.length>1;if(_t)for(let Tt=0;Tt<P.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Tt=0;Tt<P.length;Tt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);const ae=n.get(P[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,j,st,0,0,j,st,at,i.NEAREST),u===!0&&(Fe.length=0,G.length=0,Fe.push(i.COLOR_ATTACHMENT0+Tt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Fe.push(nt),G.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<P.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);const ae=n.get(P[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,ae,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const P=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function ne(N){return Math.min(s.maxSamples,N.samples)}function ie(N){const P=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Dt(N){const P=r.render.frame;l.get(N)!==P&&(l.set(N,P),N.update())}function be(N,P){const j=N.colorSpace,st=N.format,at=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==ir&&j!==cs&&(he.getTransfer(j)===xe?(st!==ui||at!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),P}function Lt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=B,this.rebindTextures=$t,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Xn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ie}function m1(i,t){function e(n,s=cs){let o;const r=he.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===lf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===H0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===G0)return i.BYTE;if(n===k0)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===cf)return i.INT;if(n===Xs)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Hi)return i.HALF_FLOAT;if(n===V0)return i.ALPHA;if(n===W0)return i.RGB;if(n===ui)return i.RGBA;if(n===X0)return i.LUMINANCE;if(n===q0)return i.LUMINANCE_ALPHA;if(n===Bo)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===hf)return i.RED;if(n===ff)return i.RED_INTEGER;if(n===Y0)return i.RG;if(n===df)return i.RG_INTEGER;if(n===pf)return i.RGBA_INTEGER;if(n===ac||n===cc||n===lc||n===uc)if(r===xe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ac)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ac)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Iu||n===Lu||n===Du||n===Uu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Iu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Du)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nu||n===zu||n===Fu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Nu||n===zu)return r===xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Fu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ou||n===Bu||n===Gu||n===ku||n===Hu||n===Vu||n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===$u||n===ju||n===Ju)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ou)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ku)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zu)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$u)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ju)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ju)return r===xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hc||n===Ku||n===Qu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===hc)return r===xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ku)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Z0||n===th||n===eh||n===nh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===hc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===th)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const g1={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,u=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const d=e.getJointPose(x,n),g=this._getHandJoint(c,x);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}const l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=l.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
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

}`;class v1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new rn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:x1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new C(new oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _1 extends fr{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",u=1,c=null,l=null,h=null,f=null,p=null,m=null;const x=new v1,d=e.getContextAttributes();let g=null,S=null;const _=[],w=[],A=new pt;let E=null;const T=new Fn;T.viewport=new ve;const b=new Fn;b.viewport=new ve;const y=[T,b],v=new kx;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let lt=_[et];return lt===void 0&&(lt=new Wl,_[et]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(et){let lt=_[et];return lt===void 0&&(lt=new Wl,_[et]=lt),lt.getGripSpace()},this.getHand=function(et){let lt=_[et];return lt===void 0&&(lt=new Wl,_[et]=lt),lt.getHandSpace()};function D(et){const lt=w.indexOf(et.inputSource);if(lt===-1)return;const yt=_[lt];yt!==void 0&&(yt.update(et.inputSource,et.frame,c||r),yt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",V);for(let et=0;et<_.length;et++){const lt=w[et];lt!==null&&(w[et]=null,_[et].disconnect(lt))}R=null,L=null,x.reset(),t.setRenderTarget(g),p=null,f=null,h=null,s=null,S=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",V),d.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let yt=null,mt=null,zt=null;d.depth&&(zt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=d.stencil?nr:Bo,mt=d.stencil?er:Xs);const Ot={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new hi(f.textureWidth,f.textureHeight,{format:ui,type:Yi,depthTexture:new hp(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new hi(p.framebufferWidth,p.framebufferHeight,{format:ui,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}S.isXRRenderTarget=!0,this.setFoveation(u),c=null,r=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(et){for(let lt=0;lt<et.removed.length;lt++){const yt=et.removed[lt],mt=w.indexOf(yt);mt>=0&&(w[mt]=null,_[mt].disconnect(yt))}for(let lt=0;lt<et.added.length;lt++){const yt=et.added[lt];let mt=w.indexOf(yt);if(mt===-1){for(let Ot=0;Ot<_.length;Ot++)if(Ot>=w.length){w.push(yt),mt=Ot;break}else if(w[Ot]===null){w[Ot]=yt,mt=Ot;break}if(mt===-1)break}const zt=_[mt];zt&&zt.connect(yt)}}const k=new z,O=new z;function B(et,lt,yt){k.setFromMatrixPosition(lt.matrixWorld),O.setFromMatrixPosition(yt.matrixWorld);const mt=k.distanceTo(O),zt=lt.projectionMatrix.elements,Ot=yt.projectionMatrix.elements,$t=zt[14]/(zt[10]-1),Ce=zt[14]/(zt[10]+1),re=(zt[9]+1)/zt[5],Fe=(zt[9]-1)/zt[5],G=(zt[8]-1)/zt[0],Xn=(Ot[8]+1)/Ot[0],ne=$t*G,ie=$t*Xn,Dt=mt/(-G+Xn),be=Dt*-G;if(lt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(be),et.translateZ(Dt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),zt[10]===-1)et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Lt=$t+Dt,N=Ce+Dt,P=ne-be,j=ie+(mt-be),st=re*Ce/N*Lt,at=Fe*Ce/N*Lt;et.projectionMatrix.makePerspective(P,j,st,at,Lt,N),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function it(et,lt){lt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(lt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let lt=et.near,yt=et.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),v.near=b.near=T.near=lt,v.far=b.far=T.far=yt,(R!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,L=v.far),T.layers.mask=et.layers.mask|2,b.layers.mask=et.layers.mask|4,v.layers.mask=T.layers.mask|b.layers.mask;const mt=et.parent,zt=v.cameras;it(v,mt);for(let Ot=0;Ot<zt.length;Ot++)it(zt[Ot],mt);zt.length===2?B(v,T,b):v.projectionMatrix.copy(T.projectionMatrix),ut(et,v,mt)};function ut(et,lt,yt){yt===null?et.matrix.copy(lt.matrixWorld):(et.matrix.copy(yt.matrixWorld),et.matrix.invert(),et.matrix.multiply(lt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=sh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return u},this.setFoveation=function(et){u=et,f!==null&&(f.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ft=null;function Pt(et,lt){if(l=lt.getViewerPose(c||r),m=lt,l!==null){const yt=l.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let mt=!1;yt.length!==v.cameras.length&&(v.cameras.length=0,mt=!0);for(let Ot=0;Ot<yt.length;Ot++){const $t=yt[Ot];let Ce=null;if(p!==null)Ce=p.getViewport($t);else{const Fe=h.getViewSubImage(f,$t);Ce=Fe.viewport,Ot===0&&(t.setRenderTargetTextures(S,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),t.setRenderTarget(S))}let re=y[Ot];re===void 0&&(re=new Fn,re.layers.enable(Ot),re.viewport=new ve,y[Ot]=re),re.matrix.fromArray($t.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray($t.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Ot===0&&(v.matrix.copy(re.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),mt===!0&&v.cameras.push(re)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ot=h.getDepthInformation(yt[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,s.renderState)}}for(let yt=0;yt<_.length;yt++){const mt=w[yt],zt=_[yt];mt!==null&&zt!==void 0&&zt.update(mt,lt,c||r)}ft&&ft(et,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}const Wt=new wp;Wt.setAnimationLoop(Pt),this.setAnimationLoop=function(et){ft=et},this.dispose=function(){}}}const Ss=new Ti,y1=new me;function w1(i,t){function e(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function n(d,g){g.color.getRGB(d.fogColor.value,sp(i)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function s(d,g,S,_,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(d,g):g.isMeshToonMaterial?(o(d,g),h(d,g)):g.isMeshPhongMaterial?(o(d,g),l(d,g)):g.isMeshStandardMaterial?(o(d,g),f(d,g),g.isMeshPhysicalMaterial&&p(d,g,w)):g.isMeshMatcapMaterial?(o(d,g),m(d,g)):g.isMeshDepthMaterial?o(d,g):g.isMeshDistanceMaterial?(o(d,g),x(d,g)):g.isMeshNormalMaterial?o(d,g):g.isLineBasicMaterial?(r(d,g),g.isLineDashedMaterial&&a(d,g)):g.isPointsMaterial?u(d,g,S,_):g.isSpriteMaterial?c(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,e(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===on&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,e(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===on&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,e(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,e(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);const S=t.get(g),_=S.envMap,w=S.envMapRotation;_&&(d.envMap.value=_,Ss.copy(w),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),d.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(Ss)),d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap&&(d.lightMap.value=g.lightMap,d.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,d.lightMapTransform)),g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,d.aoMapTransform))}function r(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform))}function a(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function u(d,g,S,_){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*S,d.scale.value=_*.5,g.map&&(d.map.value=g.map,e(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function c(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function l(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function h(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function f(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,d.roughnessMapTransform)),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function p(d,g,S){d.ior.value=g.ior,g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&d.clearcoatNormalScale.value.negate())),g.dispersion>0&&(d.dispersion.value=g.dispersion),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function x(d,g){const S=t.get(g).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S1(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,_){const w=_.program;n.uniformBlockBinding(S,w)}function c(S,_){let w=s[S.id];w===void 0&&(m(S),w=l(S),s[S.id]=w,S.addEventListener("dispose",d));const A=_.program;n.updateUBOMapping(S,A);const E=t.render.frame;o[S.id]!==E&&(f(S),o[S.id]=E)}function l(S){const _=h();S.__bindingPointIndex=_;const w=i.createBuffer(),A=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function h(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const _=s[S.id],w=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,T=w.length;E<T;E++){const b=Array.isArray(w[E])?w[E]:[w[E]];for(let y=0,v=b.length;y<v;y++){const R=b[y];if(p(R,E,y,A)===!0){const L=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let V=0;V<D.length;V++){const k=D[V],O=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,L+F,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,_,w,A){const E=S.value,T=_+"_"+w;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const b=A[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return A[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function m(S){const _=S.uniforms;let w=0;const A=16;for(let T=0,b=_.length;T<b;T++){const y=Array.isArray(_[T])?_[T]:[_[T]];for(let v=0,R=y.length;v<R;v++){const L=y[v],D=Array.isArray(L.value)?L.value:[L.value];for(let F=0,V=D.length;F<V;F++){const k=D[F],O=x(k),B=w%A,it=B%O.boundary,ut=B+it;w+=it,ut!==0&&A-ut<O.storage&&(w+=A-ut),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=O.storage}}}const E=w%A;return E>0&&(w+=A-E),S.__size=w,S.__cache={},this}function x(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function d(S){const _=S.target;_.removeEventListener("dispose",d);const w=r.indexOf(_.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:u,update:c,dispose:g}}class b1{constructor(t={}){const{canvas:e=Cg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const m=new Uint32Array(4),x=new Int32Array(4);let d=null,g=null;const S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=fs,this.toneMappingExposure=1;const w=this;let A=!1,E=0,T=0,b=null,y=-1,v=null;const R=new ve,L=new ve;let D=null;const F=new rt(0);let V=0,k=e.width,O=e.height,B=1,it=null,ut=null;const ft=new ve(0,0,k,O),Pt=new ve(0,0,k,O);let Wt=!1;const et=new xf;let lt=!1,yt=!1;this.transmissionResolutionScale=1;const mt=new me,zt=new me,Ot=new z,$t=new ve,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Fe(){return b===null?B:1}let G=n;function Xn(I,W){return e.getContext(I,W)}try{const I={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${af}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),G===null){const W="webgl2";if(G=Xn(W,I),G===null)throw Xn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ne,ie,Dt,be,Lt,N,P,j,st,at,nt,It,_t,Tt,ae,dt,Et,Ft,Gt,At,se,Yt,ye,H;function Mt(){ne=new D_(G),ne.init(),Yt=new m1(G,ne),ie=new A_(G,ne,t,Yt),Dt=new d1(G,ne),ie.reverseDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),be=new z_(G),Lt=new t1,N=new p1(G,ne,Dt,Lt,ie,Yt,be),P=new C_(w),j=new L_(w),st=new Vx(G),ye=new T_(G,st),at=new U_(G,st,be,ye),nt=new O_(G,at,st,be),Gt=new F_(G,ie,N),dt=new R_(Lt),It=new Qy(w,P,j,ne,ie,ye,dt),_t=new w1(w,Lt),Tt=new n1,ae=new c1(ne),Ft=new b_(w,P,j,Dt,nt,p,u),Et=new h1(w,nt,ie),H=new S1(G,be,ie,Dt),At=new E_(G,ne,be),se=new N_(G,ne,be),be.programs=It.programs,w.capabilities=ie,w.extensions=ne,w.properties=Lt,w.renderLists=Tt,w.shadowMap=Et,w.state=Dt,w.info=be}Mt();const tt=new _1(w,G);this.xr=tt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const I=ne.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ne.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(I){I!==void 0&&(B=I,this.setSize(k,O,!1))},this.getSize=function(I){return I.set(k,O)},this.setSize=function(I,W,K=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=I,O=W,e.width=Math.floor(I*B),e.height=Math.floor(W*B),K===!0&&(e.style.width=I+"px",e.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(k*B,O*B).floor()},this.setDrawingBufferSize=function(I,W,K){k=I,O=W,B=K,e.width=Math.floor(I*K),e.height=Math.floor(W*K),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(ft)},this.setViewport=function(I,W,K,Q){I.isVector4?ft.set(I.x,I.y,I.z,I.w):ft.set(I,W,K,Q),Dt.viewport(R.copy(ft).multiplyScalar(B).round())},this.getScissor=function(I){return I.copy(Pt)},this.setScissor=function(I,W,K,Q){I.isVector4?Pt.set(I.x,I.y,I.z,I.w):Pt.set(I,W,K,Q),Dt.scissor(L.copy(Pt).multiplyScalar(B).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(I){Dt.setScissorTest(Wt=I)},this.setOpaqueSort=function(I){it=I},this.setTransparentSort=function(I){ut=I},this.getClearColor=function(I){return I.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(I=!0,W=!0,K=!0){let Q=0;if(I){let X=!1;if(b!==null){const ht=b.texture.format;X=ht===pf||ht===df||ht===ff}if(X){const ht=b.texture.type,vt=ht===Yi||ht===Xs||ht===$r||ht===er||ht===lf||ht===uf,bt=Ft.getClearColor(),Rt=Ft.getClearAlpha(),kt=bt.r,Ht=bt.g,Ut=bt.b;vt?(m[0]=kt,m[1]=Ht,m[2]=Ut,m[3]=Rt,G.clearBufferuiv(G.COLOR,0,m)):(x[0]=kt,x[1]=Ht,x[2]=Ut,x[3]=Rt,G.clearBufferiv(G.COLOR,0,x))}else Q|=G.COLOR_BUFFER_BIT}W&&(Q|=G.DEPTH_BUFFER_BIT),K&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Ft.dispose(),Tt.dispose(),ae.dispose(),Lt.dispose(),P.dispose(),j.dispose(),nt.dispose(),ye.dispose(),H.dispose(),It.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Bf),tt.removeEventListener("sessionend",Gf),gs.stop()};function ot(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=be.autoReset,W=Et.enabled,K=Et.autoUpdate,Q=Et.needsUpdate,X=Et.type;Mt(),be.autoReset=I,Et.enabled=W,Et.autoUpdate=K,Et.needsUpdate=Q,Et.type=X}function wt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Xt(I){const W=I.target;W.removeEventListener("dispose",Xt),Le(W)}function Le(I){Je(I),Lt.remove(I)}function Je(I){const W=Lt.get(I).programs;W!==void 0&&(W.forEach(function(K){It.releaseProgram(K)}),I.isShaderMaterial&&It.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,K,Q,X,ht){W===null&&(W=Ce);const vt=X.isMesh&&X.matrixWorld.determinant()<0,bt=Fm(I,W,K,Q,X);Dt.setMaterial(Q,vt);let Rt=K.index,kt=1;if(Q.wireframe===!0){if(Rt=at.getWireframeAttribute(K),Rt===void 0)return;kt=2}const Ht=K.drawRange,Ut=K.attributes.position;let ce=Ht.start*kt,de=(Ht.start+Ht.count)*kt;ht!==null&&(ce=Math.max(ce,ht.start*kt),de=Math.min(de,(ht.start+ht.count)*kt)),Rt!==null?(ce=Math.max(ce,0),de=Math.min(de,Rt.count)):Ut!=null&&(ce=Math.max(ce,0),de=Math.min(de,Ut.count));const Ge=de-ce;if(Ge<0||Ge===1/0)return;ye.setup(X,Q,bt,K,Rt);let De,ue=At;if(Rt!==null&&(De=st.get(Rt),ue=se,ue.setIndex(De)),X.isMesh)Q.wireframe===!0?(Dt.setLineWidth(Q.wireframeLinewidth*Fe()),ue.setMode(G.LINES)):ue.setMode(G.TRIANGLES);else if(X.isLine){let Nt=Q.linewidth;Nt===void 0&&(Nt=1),Dt.setLineWidth(Nt*Fe()),X.isLineSegments?ue.setMode(G.LINES):X.isLineLoop?ue.setMode(G.LINE_LOOP):ue.setMode(G.LINE_STRIP)}else X.isPoints?ue.setMode(G.POINTS):X.isSprite&&ue.setMode(G.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ue.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ue.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Nt=X._multiDrawStarts,$e=X._multiDrawCounts,pe=X._multiDrawCount,oi=Rt?st.get(Rt).bytesPerElement:1,Ks=Lt.get(Q).currentProgram.getUniforms();for(let Dn=0;Dn<pe;Dn++)Ks.setValue(G,"_gl_DrawID",Dn),ue.render(Nt[Dn]/oi,$e[Dn])}else if(X.isInstancedMesh)ue.renderInstances(ce,Ge,X.count);else if(K.isInstancedBufferGeometry){const Nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,$e=Math.min(K.instanceCount,Nt);ue.renderInstances(ce,Ge,$e)}else ue.render(ce,Ge)};function ge(I,W,K){I.transparent===!0&&I.side===Ct&&I.forceSinglePass===!1?(I.side=on,I.needsUpdate=!0,fa(I,W,K),I.side=ps,I.needsUpdate=!0,fa(I,W,K),I.side=Ct):fa(I,W,K)}this.compile=function(I,W,K=null){K===null&&(K=I),g=ae.get(K),g.init(W),_.push(g),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),I!==K&&I.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const Q=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ht=X.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){const bt=ht[vt];ge(bt,K,X),Q.add(bt)}else ge(ht,K,X),Q.add(ht)}),_.pop(),g=null,Q},this.compileAsync=function(I,W,K=null){const Q=this.compile(I,W,K);return new Promise(X=>{function ht(){if(Q.forEach(function(vt){Lt.get(vt).currentProgram.isReady()&&Q.delete(vt)}),Q.size===0){X(I);return}setTimeout(ht,10)}ne.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let si=null;function Ri(I){si&&si(I)}function Bf(){gs.stop()}function Gf(){gs.start()}const gs=new wp;gs.setAnimationLoop(Ri),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(I){si=I,tt.setAnimationLoop(I),I===null?gs.stop():gs.start()},tt.addEventListener("sessionstart",Bf),tt.addEventListener("sessionend",Gf),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,W,b),g=ae.get(I,_.length),g.init(W),_.push(g),zt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),et.setFromProjectionMatrix(zt),yt=this.localClippingEnabled,lt=dt.init(this.clippingPlanes,yt),d=Tt.get(I,S.length),d.init(),S.push(d),tt.enabled===!0&&tt.isPresenting===!0){const ht=w.xr.getDepthSensingMesh();ht!==null&&rl(ht,W,-1/0,w.sortObjects)}rl(I,W,0,w.sortObjects),d.finish(),w.sortObjects===!0&&d.sort(it,ut),re=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,re&&Ft.addToRenderList(d,I),this.info.render.frame++,lt===!0&&dt.beginShadows();const K=g.state.shadowsArray;Et.render(K,I,W),lt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=d.opaque,X=d.transmissive;if(g.setupLights(),W.isArrayCamera){const ht=W.cameras;if(X.length>0)for(let vt=0,bt=ht.length;vt<bt;vt++){const Rt=ht[vt];Hf(Q,X,I,Rt)}re&&Ft.render(I);for(let vt=0,bt=ht.length;vt<bt;vt++){const Rt=ht[vt];kf(d,I,Rt,Rt.viewport)}}else X.length>0&&Hf(Q,X,I,W),re&&Ft.render(I),kf(d,I,W);b!==null&&T===0&&(N.updateMultisampleRenderTarget(b),N.updateRenderTargetMipmap(b)),I.isScene===!0&&I.onAfterRender(w,I,W),ye.resetDefaultState(),y=-1,v=null,_.pop(),_.length>0?(g=_[_.length-1],lt===!0&&dt.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?d=S[S.length-1]:d=null};function rl(I,W,K,Q){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)K=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||et.intersectsSprite(I)){Q&&$t.setFromMatrixPosition(I.matrixWorld).applyMatrix4(zt);const vt=nt.update(I),bt=I.material;bt.visible&&d.push(I,vt,bt,K,$t.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||et.intersectsObject(I))){const vt=nt.update(I),bt=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),$t.copy(I.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),$t.copy(vt.boundingSphere.center)),$t.applyMatrix4(I.matrixWorld).applyMatrix4(zt)),Array.isArray(bt)){const Rt=vt.groups;for(let kt=0,Ht=Rt.length;kt<Ht;kt++){const Ut=Rt[kt],ce=bt[Ut.materialIndex];ce&&ce.visible&&d.push(I,vt,ce,K,$t.z,Ut)}}else bt.visible&&d.push(I,vt,bt,K,$t.z,null)}}const ht=I.children;for(let vt=0,bt=ht.length;vt<bt;vt++)rl(ht[vt],W,K,Q)}function kf(I,W,K,Q){const X=I.opaque,ht=I.transmissive,vt=I.transparent;g.setupLightsView(K),lt===!0&&dt.setGlobalState(w.clippingPlanes,K),Q&&Dt.viewport(R.copy(Q)),X.length>0&&ha(X,W,K),ht.length>0&&ha(ht,W,K),vt.length>0&&ha(vt,W,K),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Hf(I,W,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new hi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Hi:Yi,minFilter:Os,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ht=g.state.transmissionRenderTarget[Q.id],vt=Q.viewport||R;ht.setSize(vt.z*w.transmissionResolutionScale,vt.w*w.transmissionResolutionScale);const bt=w.getRenderTarget();w.setRenderTarget(ht),w.getClearColor(F),V=w.getClearAlpha(),V<1&&w.setClearColor(16777215,.5),w.clear(),re&&Ft.render(K);const Rt=w.toneMapping;w.toneMapping=fs;const kt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),lt===!0&&dt.setGlobalState(w.clippingPlanes,Q),ha(I,K,Q),N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ut=0,ce=W.length;Ut<ce;Ut++){const de=W[Ut],Ge=de.object,De=de.geometry,ue=de.material,Nt=de.group;if(ue.side===Ct&&Ge.layers.test(Q.layers)){const $e=ue.side;ue.side=on,ue.needsUpdate=!0,Vf(Ge,K,Q,De,ue,Nt),ue.side=$e,ue.needsUpdate=!0,Ht=!0}}Ht===!0&&(N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht))}w.setRenderTarget(bt),w.setClearColor(F,V),kt!==void 0&&(Q.viewport=kt),w.toneMapping=Rt}function ha(I,W,K){const Q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ht=I.length;X<ht;X++){const vt=I[X],bt=vt.object,Rt=vt.geometry,kt=Q===null?vt.material:Q,Ht=vt.group;bt.layers.test(K.layers)&&Vf(bt,W,K,Rt,kt,Ht)}}function Vf(I,W,K,Q,X,ht){I.onBeforeRender(w,W,K,Q,X,ht),I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(w,W,K,Q,I,ht),X.transparent===!0&&X.side===Ct&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,w.renderBufferDirect(K,W,Q,X,I,ht),X.side=ps,X.needsUpdate=!0,w.renderBufferDirect(K,W,Q,X,I,ht),X.side=Ct):w.renderBufferDirect(K,W,Q,X,I,ht),I.onAfterRender(w,W,K,Q,X,ht)}function fa(I,W,K){W.isScene!==!0&&(W=Ce);const Q=Lt.get(I),X=g.state.lights,ht=g.state.shadowsArray,vt=X.state.version,bt=It.getParameters(I,X.state,ht,W,K),Rt=It.getProgramCacheKey(bt);let kt=Q.programs;Q.environment=I.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(I.isMeshStandardMaterial?j:P).get(I.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,kt===void 0&&(I.addEventListener("dispose",Xt),kt=new Map,Q.programs=kt);let Ht=kt.get(Rt);if(Ht!==void 0){if(Q.currentProgram===Ht&&Q.lightsStateVersion===vt)return Xf(I,bt),Ht}else bt.uniforms=It.getUniforms(I),I.onBeforeCompile(bt,w),Ht=It.acquireProgram(bt,Rt),kt.set(Rt,Ht),Q.uniforms=bt.uniforms;const Ut=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ut.clippingPlanes=dt.uniform),Xf(I,bt),Q.needsLights=Bm(I),Q.lightsStateVersion=vt,Q.needsLights&&(Ut.ambientLightColor.value=X.state.ambient,Ut.lightProbe.value=X.state.probe,Ut.directionalLights.value=X.state.directional,Ut.directionalLightShadows.value=X.state.directionalShadow,Ut.spotLights.value=X.state.spot,Ut.spotLightShadows.value=X.state.spotShadow,Ut.rectAreaLights.value=X.state.rectArea,Ut.ltc_1.value=X.state.rectAreaLTC1,Ut.ltc_2.value=X.state.rectAreaLTC2,Ut.pointLights.value=X.state.point,Ut.pointLightShadows.value=X.state.pointShadow,Ut.hemisphereLights.value=X.state.hemi,Ut.directionalShadowMap.value=X.state.directionalShadowMap,Ut.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ut.spotShadowMap.value=X.state.spotShadowMap,Ut.spotLightMatrix.value=X.state.spotLightMatrix,Ut.spotLightMap.value=X.state.spotLightMap,Ut.pointShadowMap.value=X.state.pointShadowMap,Ut.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Ht,Q.uniformsList=null,Ht}function Wf(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=fc.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function Xf(I,W){const K=Lt.get(I);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Fm(I,W,K,Q,X){W.isScene!==!0&&(W=Ce),N.resetTextureUnits();const ht=W.fog,vt=Q.isMeshStandardMaterial?W.environment:null,bt=b===null?w.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ir,Rt=(Q.isMeshStandardMaterial?j:P).get(Q.envMap||vt),kt=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ut=!!K.morphAttributes.position,ce=!!K.morphAttributes.normal,de=!!K.morphAttributes.color;let Ge=fs;Q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ge=w.toneMapping);const De=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ue=De!==void 0?De.length:0,Nt=Lt.get(Q),$e=g.state.lights;if(lt===!0&&(yt===!0||I!==v)){const ln=I===v&&Q.id===y;dt.setState(Q,I,ln)}let pe=!1;Q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==$e.state.version||Nt.outputColorSpace!==bt||X.isBatchedMesh&&Nt.batching===!1||!X.isBatchedMesh&&Nt.batching===!0||X.isBatchedMesh&&Nt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Nt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Nt.instancing===!1||!X.isInstancedMesh&&Nt.instancing===!0||X.isSkinnedMesh&&Nt.skinning===!1||!X.isSkinnedMesh&&Nt.skinning===!0||X.isInstancedMesh&&Nt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Nt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Nt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Nt.instancingMorph===!1&&X.morphTexture!==null||Nt.envMap!==Rt||Q.fog===!0&&Nt.fog!==ht||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==dt.numPlanes||Nt.numIntersection!==dt.numIntersection)||Nt.vertexAlphas!==kt||Nt.vertexTangents!==Ht||Nt.morphTargets!==Ut||Nt.morphNormals!==ce||Nt.morphColors!==de||Nt.toneMapping!==Ge||Nt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,Nt.__version=Q.version);let oi=Nt.currentProgram;pe===!0&&(oi=fa(Q,W,X));let Ks=!1,Dn=!1,gr=!1;const Re=oi.getUniforms(),qn=Nt.uniforms;if(Dt.useProgram(oi.program)&&(Ks=!0,Dn=!0,gr=!0),Q.id!==y&&(y=Q.id,Dn=!0),Ks||v!==I){Dt.buffers.depth.getReversed()?(mt.copy(I.projectionMatrix),Ig(mt),Lg(mt),Re.setValue(G,"projectionMatrix",mt)):Re.setValue(G,"projectionMatrix",I.projectionMatrix),Re.setValue(G,"viewMatrix",I.matrixWorldInverse);const Rn=Re.map.cameraPosition;Rn!==void 0&&Rn.setValue(G,Ot.setFromMatrixPosition(I.matrixWorld)),ie.logarithmicDepthBuffer&&Re.setValue(G,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Re.setValue(G,"isOrthographic",I.isOrthographicCamera===!0),v!==I&&(v=I,Dn=!0,gr=!0)}if(X.isSkinnedMesh){Re.setOptional(G,X,"bindMatrix"),Re.setOptional(G,X,"bindMatrixInverse");const ln=X.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Re.setValue(G,"boneTexture",ln.boneTexture,N))}X.isBatchedMesh&&(Re.setOptional(G,X,"batchingTexture"),Re.setValue(G,"batchingTexture",X._matricesTexture,N),Re.setOptional(G,X,"batchingIdTexture"),Re.setValue(G,"batchingIdTexture",X._indirectTexture,N),Re.setOptional(G,X,"batchingColorTexture"),X._colorsTexture!==null&&Re.setValue(G,"batchingColorTexture",X._colorsTexture,N));const Yn=K.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&Gt.update(X,K,oi),(Dn||Nt.receiveShadow!==X.receiveShadow)&&(Nt.receiveShadow=X.receiveShadow,Re.setValue(G,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(qn.envMap.value=Rt,qn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(qn.envMapIntensity.value=W.environmentIntensity),Dn&&(Re.setValue(G,"toneMappingExposure",w.toneMappingExposure),Nt.needsLights&&Om(qn,gr),ht&&Q.fog===!0&&_t.refreshFogUniforms(qn,ht),_t.refreshMaterialUniforms(qn,Q,B,O,g.state.transmissionRenderTarget[I.id]),fc.upload(G,Wf(Nt),qn,N)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(fc.upload(G,Wf(Nt),qn,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Re.setValue(G,"center",X.center),Re.setValue(G,"modelViewMatrix",X.modelViewMatrix),Re.setValue(G,"normalMatrix",X.normalMatrix),Re.setValue(G,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ln=Q.uniformsGroups;for(let Rn=0,al=ln.length;Rn<al;Rn++){const xs=ln[Rn];H.update(xs,oi),H.bind(xs,oi)}}return oi}function Om(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function Bm(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(I,W,K){Lt.get(I.texture).__webglTexture=W,Lt.get(I.depthTexture).__webglTexture=K;const Q=Lt.get(I);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){const K=Lt.get(I);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};const Gm=G.createFramebuffer();this.setRenderTarget=function(I,W=0,K=0){b=I,E=W,T=K;let Q=!0,X=null,ht=!1,vt=!1;if(I){const Rt=Lt.get(I);if(Rt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(G.FRAMEBUFFER,null),Q=!1;else if(Rt.__webglFramebuffer===void 0)N.setupRenderTarget(I);else if(Rt.__hasExternalTextures)N.rebindTextures(I,Lt.get(I.texture).__webglTexture,Lt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ut=I.depthTexture;if(Rt.__boundDepthTexture!==Ut){if(Ut!==null&&Lt.has(Ut)&&(I.width!==Ut.image.width||I.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(I)}}const kt=I.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(vt=!0);const Ht=Lt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ht[W])?X=Ht[W][K]:X=Ht[W],ht=!0):I.samples>0&&N.useMultisampledRTT(I)===!1?X=Lt.get(I).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[K]:X=Ht,R.copy(I.viewport),L.copy(I.scissor),D=I.scissorTest}else R.copy(ft).multiplyScalar(B).floor(),L.copy(Pt).multiplyScalar(B).floor(),D=Wt;if(K!==0&&(X=Gm),Dt.bindFramebuffer(G.FRAMEBUFFER,X)&&Q&&Dt.drawBuffers(I,X),Dt.viewport(R),Dt.scissor(L),Dt.setScissorTest(D),ht){const Rt=Lt.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Rt.__webglTexture,K)}else if(vt){const Rt=Lt.get(I.texture),kt=W;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Rt.__webglTexture,K,kt)}else if(I!==null&&K!==0){const Rt=Lt.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Rt.__webglTexture,K)}y=-1},this.readRenderTargetPixels=function(I,W,K,Q,X,ht,vt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){Dt.bindFramebuffer(G.FRAMEBUFFER,bt);try{const Rt=I.texture,kt=Rt.format,Ht=Rt.type;if(!ie.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-Q&&K>=0&&K<=I.height-X&&G.readPixels(W,K,Q,X,Yt.convert(kt),Yt.convert(Ht),ht)}finally{const Rt=b!==null?Lt.get(b).__webglFramebuffer:null;Dt.bindFramebuffer(G.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(I,W,K,Q,X,ht,vt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){const Rt=I.texture,kt=Rt.format,Ht=Rt.type;if(!ie.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-Q&&K>=0&&K<=I.height-X){Dt.bindFramebuffer(G.FRAMEBUFFER,bt);const Ut=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ut),G.bufferData(G.PIXEL_PACK_BUFFER,ht.byteLength,G.STREAM_READ),G.readPixels(W,K,Q,X,Yt.convert(kt),Yt.convert(Ht),0);const ce=b!==null?Lt.get(b).__webglFramebuffer:null;Dt.bindFramebuffer(G.FRAMEBUFFER,ce);const de=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Pg(G,de,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ut),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ht),G.deleteBuffer(Ut),G.deleteSync(de),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,W=null,K=0){I.isTexture!==!0&&(To("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);const Q=Math.pow(2,-K),X=Math.floor(I.image.width*Q),ht=Math.floor(I.image.height*Q),vt=W!==null?W.x:0,bt=W!==null?W.y:0;N.setTexture2D(I,0),G.copyTexSubImage2D(G.TEXTURE_2D,K,0,0,vt,bt,X,ht),Dt.unbindTexture()};const km=G.createFramebuffer(),Hm=G.createFramebuffer();this.copyTextureToTexture=function(I,W,K=null,Q=null,X=0,ht=null){I.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,I=arguments[1],W=arguments[2],ht=arguments[3]||0,K=null),ht===null&&(X!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=X,X=0):ht=0);let vt,bt,Rt,kt,Ht,Ut,ce,de,Ge;const De=I.isCompressedTexture?I.mipmaps[ht]:I.image;if(K!==null)vt=K.max.x-K.min.x,bt=K.max.y-K.min.y,Rt=K.isBox3?K.max.z-K.min.z:1,kt=K.min.x,Ht=K.min.y,Ut=K.isBox3?K.min.z:0;else{const Yn=Math.pow(2,-X);vt=Math.floor(De.width*Yn),bt=Math.floor(De.height*Yn),I.isDataArrayTexture?Rt=De.depth:I.isData3DTexture?Rt=Math.floor(De.depth*Yn):Rt=1,kt=0,Ht=0,Ut=0}Q!==null?(ce=Q.x,de=Q.y,Ge=Q.z):(ce=0,de=0,Ge=0);const ue=Yt.convert(W.format),Nt=Yt.convert(W.type);let $e;W.isData3DTexture?(N.setTexture3D(W,0),$e=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),$e=G.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),$e=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const pe=G.getParameter(G.UNPACK_ROW_LENGTH),oi=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ks=G.getParameter(G.UNPACK_SKIP_PIXELS),Dn=G.getParameter(G.UNPACK_SKIP_ROWS),gr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,De.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,De.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ht),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ut);const Re=I.isDataArrayTexture||I.isData3DTexture,qn=W.isDataArrayTexture||W.isData3DTexture;if(I.isDepthTexture){const Yn=Lt.get(I),ln=Lt.get(W),Rn=Lt.get(Yn.__renderTarget),al=Lt.get(ln.__renderTarget);Dt.bindFramebuffer(G.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,al.__webglFramebuffer);for(let xs=0;xs<Rt;xs++)Re&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.get(I).__webglTexture,X,Ut+xs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.get(W).__webglTexture,ht,Ge+xs)),G.blitFramebuffer(kt,Ht,vt,bt,ce,de,vt,bt,G.DEPTH_BUFFER_BIT,G.NEAREST);Dt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(X!==0||I.isRenderTargetTexture||Lt.has(I)){const Yn=Lt.get(I),ln=Lt.get(W);Dt.bindFramebuffer(G.READ_FRAMEBUFFER,km),Dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Hm);for(let Rn=0;Rn<Rt;Rn++)Re?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yn.__webglTexture,X,Ut+Rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Yn.__webglTexture,X),qn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ln.__webglTexture,ht,Ge+Rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ln.__webglTexture,ht),X!==0?G.blitFramebuffer(kt,Ht,vt,bt,ce,de,vt,bt,G.COLOR_BUFFER_BIT,G.NEAREST):qn?G.copyTexSubImage3D($e,ht,ce,de,Ge+Rn,kt,Ht,vt,bt):G.copyTexSubImage2D($e,ht,ce,de,kt,Ht,vt,bt);Dt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else qn?I.isDataTexture||I.isData3DTexture?G.texSubImage3D($e,ht,ce,de,Ge,vt,bt,Rt,ue,Nt,De.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D($e,ht,ce,de,Ge,vt,bt,Rt,ue,De.data):G.texSubImage3D($e,ht,ce,de,Ge,vt,bt,Rt,ue,Nt,De):I.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ht,ce,de,vt,bt,ue,Nt,De.data):I.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ht,ce,de,De.width,De.height,ue,De.data):G.texSubImage2D(G.TEXTURE_2D,ht,ce,de,vt,bt,ue,Nt,De);G.pixelStorei(G.UNPACK_ROW_LENGTH,pe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,oi),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ks),G.pixelStorei(G.UNPACK_SKIP_ROWS,Dn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,gr),ht===0&&W.generateMipmaps&&G.generateMipmap($e),Dt.unbindTexture()},this.copyTextureToTexture3D=function(I,W,K=null,Q=null,X=0){return I.isTexture!==!0&&(To("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Q=arguments[1]||null,I=arguments[2],W=arguments[3],X=arguments[4]||0),To('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,W,K,Q,X)},this.initRenderTarget=function(I){Lt.get(I).__webglFramebuffer===void 0&&N.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),Dt.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,Dt.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const T1=15,E1=6,A1=1.8,zc=8,i0=.85,s0=.98,Fc=.003,Jt=90,nl=1.7,o0=500,R1=250,C1=18,P1=35,I1=40,L1=12,D1=35,U1=1200,N1=160,z1=140,F1=40,O1=60,Ap=6,B1=25,G1=8,k1=40,H1=50,V1=10,W1=30,X1=30,q1=24,Y1=45,Z1=24,$1=36,j1=36,J1=45,K1=25,Xi=280,uh=2.5,Q1=6,r0=1.5,Eo=5,a0=2.5,vo=12,Ee=30,tw=5,ew=8,nw=2.2,U={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116,spiralStem:1716288,spiralFrond:2271880,spiralGlow:4521932,spiralTip:8978414,corpseSpathe:5574946,corpseColumn:8921668,corpseGlow:13382485,corpseLeaf:1717016,orbBushLeaf:2245666,orbBushOrb:16746700,orbBushGlow:16755421,orbBushStem:1718312,lanternStem:2769954,lanternPod:16768358,lanternGlow:16772744,lanternHaze:16763972,veilSupport:3816e3,veilMoss:4508808,veilGlow:6750122,veilEdge:8978380,groundGlowColors:[3407837,4521898,13400063,4500206,8978380]},cn=new b1({antialias:!0,powerPreference:"default"});cn.setSize(window.innerWidth,window.innerHeight);cn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));cn.shadowMap.enabled=!0;cn.shadowMap.type=z0;cn.toneMapping=O0;cn.toneMappingExposure=2.8;cn.outputColorSpace=En;document.body.appendChild(cn.domElement);const Mn=new Fn(65,window.innerWidth/window.innerHeight,.1,300),Rp=new yp,ct=new tx;ct.background=new rt(U.skyDeep);ct.fog=new gf(U.fog,.01);window.addEventListener("resize",()=>{Mn.aspect=window.innerWidth/window.innerHeight,Mn.updateProjectionMatrix(),cn.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||Rp.getDelta()});const Cp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ca{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iw=new Ef(-1,1,1,-1,0,1);class sw extends Se{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const ow=new sw;class Pp{constructor(t){this._mesh=new C(ow,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,iw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class rw extends ca{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Cn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pc.clone(t.uniforms),this.material=new Cn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Pp(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class c0 extends ca{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class aw extends ca{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class cw{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new hi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rw(Cp),this.copyPass.material.blending=ki,this.clock=new yp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),u.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}c0!==void 0&&(r instanceof c0?n=!0:r instanceof aw&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class lw extends ca{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const uw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ar extends ca{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new hi(o,r,{type:Hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new hi(o,r,{type:Hi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new hi(o,r,{type:Hi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=uw;this.highPassUniforms=Pc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const u=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(u[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const l=Cp;this.copyUniforms=Pc.clone(l.uniforms),this.blendMaterial=new Cn({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:Qt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new Z,this.fsQuad=new Pp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let u=0;u<this.nMips;u++)this.fsQuad.material=this.separableBlurMaterials[u],this.separableBlurMaterials[u].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[u].uniforms.direction.value=ar.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[u]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[u].uniforms.colorTexture.value=this.renderTargetsHorizontal[u].texture,this.separableBlurMaterials[u].uniforms.direction.value=ar.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[u]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[u];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Cn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Cn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ar.BlurDirectionX=new pt(1,0);ar.BlurDirectionY=new pt(0,1);let Vs=null,Rf=!0;try{const i=new lw(ct,Mn),t=new ar(new pt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);Vs=new cw(cn),Vs.addPass(i),Vs.addPass(t)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),Rf=!1}window.addEventListener("resize",()=>{Rf&&Vs&&Vs.setSize(window.innerWidth,window.innerHeight)});function l0(){Rf&&Vs?Vs.render():cn.render(ct,Mn)}const Cf=new Ox(U.ambient,U.ground,.65);ct.add(Cf);const ii=new tl(U.moon,.85);ii.position.set(30,60,-20);ii.castShadow=!0;ii.shadow.camera.left=-90;ii.shadow.camera.right=90;ii.shadow.camera.top=90;ii.shadow.camera.bottom=-90;ii.shadow.camera.near=1;ii.shadow.camera.far=250;ii.shadow.mapSize.set(1024,1024);ii.shadow.bias=-.001;ct.add(ii);const Pf=new tl(2241365,.3);Pf.position.set(-40,45,25);ct.add(Pf);const Ip=new tl(3359829,.4);Ip.position.set(-25,15,30);ct.add(Ip);const Lp=new dr(3368516,.7,100);Lp.position.set(0,.5,0);ct.add(Lp);const Dp=new tl(4478327,.4);Dp.position.set(-10,25,40);ct.add(Dp);const If=new dr(6719624,.6,20);ct.add(If);const Cs=[];function hw(){for(let i=0;i<tw;i++){const t=new dr(U.crystal,0,16);ct.add(t),Cs.push(t)}}const Nr=new dr(U.orbGold,0,15);ct.add(Nr);const Be={};let ta=0,Ws=0,il=!1,Up=!1,Lf=0,Df=0,Uf=!1,sl=!1,mr=!1,Oc=null,Ys=null,hh=0,fh=0,dh=null;function fw(i){dh=i}function dw(i){Up=i}function pw(i){sl=i}function la(){!Up&&dh&&dh()}window.addEventListener("keydown",i=>{Be[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),la()});window.addEventListener("keyup",i=>{Be[i.code]=!1});window.addEventListener("blur",()=>{for(const i in Be)Be[i]=!1;il=!1});cn.domElement.addEventListener("mousedown",()=>{il=!0,la()});window.addEventListener("mouseup",()=>{il=!1});window.addEventListener("mousemove",i=>{il&&(ta-=i.movementX*Fc,Ws-=i.movementY*Fc,Ws=Math.max(-1,Math.min(1,Ws)))});const mw="ontouchstart"in window||navigator.maxTouchPoints>0,ua=document.getElementById("joy-zone"),Bc=document.getElementById("joy-knob"),Nf=document.getElementById("btn-jump");mw&&(ua.style.display="block",Nf.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function Np(i,t){const e=ua.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),Lf=n/r,Df=s/r,Bc.style.left=40+n+"px",Bc.style.top=40+s+"px"}ua.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),la();const t=i.changedTouches[0];Oc=t.identifier,Uf=!0,Np(t.clientX,t.clientY)},{passive:!1});ua.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Oc&&Np(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});ua.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Oc&&(Oc=null,Uf=!1,Lf=0,Df=0,Bc.style.left="40px",Bc.style.top="40px")},{passive:!1});Nf.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),la(),sl=!0},{passive:!1});Nf.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),sl=!1},{passive:!1});cn.domElement.addEventListener("touchstart",i=>{i.preventDefault(),la();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&Ys===null&&(Ys=e.identifier,hh=e.clientX,fh=e.clientY)}},{passive:!1});cn.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===Ys&&(ta-=(e.clientX-hh)*Fc,Ws-=(e.clientY-fh)*Fc,Ws=Math.max(-1,Math.min(1,Ws)),hh=e.clientX,fh=e.clientY)}},{passive:!1});cn.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ys&&(Ys=null)},{passive:!1});cn.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Ys&&(Ys=null)},{passive:!1});function gw(){let i=0,t=0;Be.KeyW&&(t-=1),Be.KeyS&&(t+=1),Be.KeyA&&(i-=1),Be.KeyD&&(i+=1),Uf&&(i+=Lf,t+=Df);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=E1*(Be.ShiftLeft||Be.ShiftRight||mr?A1:1),s=Math.sin(ta),o=Math.cos(ta);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const Ln={mushCap:new $(.5,8,5),mushStem:new gt(.06,.1,.6,5),mushDot:new $(.06,4,3),crystal:new gt(0,.35,1.8,6),crystalSm:new gt(0,.18,.9,5),fly:new $(.06,4,3),spore:new $(.04,3,3),dandSeed:new $(.025,3,3),bubble:new $(.15,8,6),starMote:new $(.03,3,3),dustMote:new $(.035,3,3)};let Wr=42;function M(){return Wr=Wr*16807%2147483647,(Wr&2147483647)/2147483647}function zp(){return Wr}function ph(i){Wr=i}function Xa(i,t){let e=i*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Do(i){return i*i*(3-2*i)}function Fp(i,t){const e=Math.floor(i),n=Math.floor(t),s=Do(i-e),o=Do(t-n),r=Xa(e,n),a=Xa(e+1,n),u=Xa(e,n+1),c=Xa(e+1,n+1);return r+(a-r)*s+(u-r)*o+(r-a-u+c)*s*o}function qa(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=Fp(i*o,t*o)*s,s*=.5,o*=2;return n}const mh=[];function gh(i,t,e){mh.push({x:i,z:t,r:e})}function Bt(i,t){const e=Math.sqrt(i*i+t*t),n=1-Do(Math.max(0,(e-Jt*.7)/(Jt*.3))),s=Do(Math.min(1,e/10)),o=.012,r=qa(i*o+200,t*o+300,3),a=Do(Math.max(0,Math.min(1,(r-.15)*2))),u=.035,c=qa(i*u,t*u,4),l=qa(i*u*2.7+50,t*u*2.7+50,3),h=Fp(i*.15,t*.15),p=qa(i*u*.6-100,t*u*.6-100,3)*1.5,m=c*5*a,x=l*1.5*a,d=h*.2;let g=p+m+x+d;g*=n*s;for(let S=0;S<mh.length;S++){const _=mh[S],w=i-_.x,A=t-_.z,E=Math.sqrt(w*w+A*A);if(E<_.r*2.5){const T=Do(Math.max(0,(E-_.r*.5)/(_.r*2)));g*=T}}return g}function xw(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#22301e",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(50,40,22,0.35)",n:14,r:120},{col:"rgba(60,50,25,0.30)",n:14,r:110},{col:"rgba(35,55,30,0.22)",n:10,r:100},{col:"rgba(55,35,18,0.28)",n:12,r:105},{col:"rgba(40,32,18,0.28)",n:10,r:90},{col:"rgba(80,55,25,0.28)",n:12,r:100},{col:"rgba(70,35,20,0.25)",n:10,r:95},{col:"rgba(85,70,35,0.22)",n:10,r:90},{col:"rgba(45,30,15,0.25)",n:8,r:85},{col:"rgba(65,50,30,0.20)",n:8,r:80}];for(const l of s)for(let h=0;h<l.n;h++){const f=n()*2048,p=n()*2048,m=l.r*(.5+n()*.8),x=e.createRadialGradient(f,p,0,f,p,m);x.addColorStop(0,l.col),x.addColorStop(.6,l.col.replace(/[\d.]+\)$/,parseFloat(l.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let d=-1;d<=1;d++)for(let g=-1;g<=1;g++)e.beginPath(),e.arc(f+d*2048,p+g*2048,m,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(45,35,18,0.22)","rgba(55,40,20,0.2)","rgba(28,22,12,0.22)","rgba(35,28,15,0.18)","rgba(55,35,15,0.2)","rgba(25,40,22,0.15)"]},{n:200,r:10,colors:["rgba(45,35,18,0.14)","rgba(55,42,22,0.12)","rgba(35,28,14,0.12)","rgba(38,28,14,0.1)","rgba(52,38,18,0.12)","rgba(25,38,22,0.08)"]},{n:500,r:4,colors:["rgba(40,30,15,0.1)","rgba(50,38,18,0.08)","rgba(30,25,12,0.08)","rgba(32,25,10,0.06)","rgba(45,32,12,0.08)","rgba(22,35,20,0.05)"]}];for(const l of o)for(let h=0;h<l.n;h++){e.fillStyle=l.colors[Math.floor(n()*l.colors.length)];const f=n()*2048,p=n()*2048;e.beginPath(),e.arc(f,p,l.r+n()*l.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let l=0;l<25;l++){let h=n()*2048,f=n()*2048;const p=r[Math.floor(n()*r.length)];e.strokeStyle=p,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(h,f);let m=n()*6.28;const x=12+Math.floor(n()*16);for(let d=0;d<x;d++)m+=Math.sin(d*.6)*.5+(n()-.5)*.4,h+=Math.cos(m)*(6+n()*10),f+=Math.sin(m)*(6+n()*10),e.lineTo(h,f);if(e.stroke(),n()<.6){const d=e.createRadialGradient(h,f,0,h,f,6+n()*8);d.addColorStop(0,p.replace("0.0","0.1")),d.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=d,e.beginPath(),e.arc(h,f,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let l=0;l<30;l++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let h=n()*2048,f=n()*2048,p=n()*6.28;e.beginPath(),e.moveTo(h,f);for(let m=0;m<10;m++)p+=Math.sin(m*.7)*.5+(n()-.5)*.35,h+=Math.cos(p)*(8+n()*14),f+=Math.sin(p)*(8+n()*14),e.lineTo(h,f);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)","rgba(75,50,20,0.28)","rgba(85,60,30,0.22)","rgba(45,25,10,0.25)","rgba(90,75,45,0.18)"];for(let l=0;l<3500;l++){e.fillStyle=a[Math.floor(n()*a.length)];const h=n()*2048,f=n()*2048,p=.8+n()*2.5;e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}for(let l=0;l<40;l++){const h=n()*2048,f=n()*2048,p=15+n()*35,m=e.createRadialGradient(h,f,0,h,f,p),x=n();x<.2?(m.addColorStop(0,"rgba(40,70,40,0.16)"),m.addColorStop(1,"rgba(22,40,22,0)")):x<.4?(m.addColorStop(0,"rgba(65,48,22,0.18)"),m.addColorStop(1,"rgba(35,25,12,0)")):x<.6?(m.addColorStop(0,"rgba(75,55,25,0.16)"),m.addColorStop(1,"rgba(45,30,12,0)")):x<.8?(m.addColorStop(0,"rgba(55,40,20,0.16)"),m.addColorStop(1,"rgba(30,22,10,0)")):(m.addColorStop(0,"rgba(65,35,20,0.14)"),m.addColorStop(1,"rgba(35,18,10,0)")),e.fillStyle=m,e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}for(let l=0;l<400;l++){const h=n()*2048,f=n()*2048,p=1.5+n()*3.5,m=Math.floor(28+n()*42);e.fillStyle=`rgba(${m},${m-4},${m-10},0.3)`,e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}e.lineWidth=.7;for(let l=0;l<80;l++){const h=n()*2048,f=n()*2048,p=4+n()*18,m=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(h,f),e.lineTo(h+Math.cos(m)*p,f+Math.sin(m)*p),e.stroke()}const u=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let l=0;l<300;l++){const h=n()*2048,f=n()*2048,p=u[Math.floor(n()*u.length)];if(e.fillStyle=p,e.beginPath(),e.arc(h,f,1+n()*2,0,6.28),e.fill(),n()<.3){const m=e.createRadialGradient(h,f,0,h,f,4+n()*5);m.addColorStop(0,p),m.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=m,e.beginPath(),e.arc(h,f,4+n()*5,0,6.28),e.fill()}}for(let l=0;l<150;l++){const h=n()*2048,f=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(h,f,.5+n()*1.2,0,6.28),e.fill()}const c=new ra(t);return c.wrapS=c.wrapT=tr,c.repeat.set(8,8),c.colorSpace=En,c}function Ya(i,t){let e=i*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function xh(i){return i*i*(3-2*i)}function Op(i,t){const e=Math.floor(i),n=Math.floor(t),s=xh(i-e),o=xh(t-n),r=Ya(e,n),a=Ya(e+1,n),u=Ya(e,n+1),c=Ya(e+1,n+1);return r+(a-r)*s+(u-r)*o+(r-a-u+c)*s*o}function Xl(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=Op(i*o,t*o)*s,s*=.5,o*=2;return n}function Mw(){const i=xw(),t=Jt*3,e=200,n=new oe(t,t,e,e),s=n.attributes.position,o=[[.7,.65,.4],[.85,.6,.35],[.5,.75,.5],[.9,.55,.35],[.8,.75,.45],[.6,.5,.3],[.45,.7,.55],[.75,.5,.3],[.55,.8,.55],[.65,.55,.35]],r=s.count,a=new Float32Array(r*3);for(let c=0;c<r;c++){const l=s.getX(c),h=s.getY(c);Math.sqrt(l*l+h*h)<Jt*1.4?s.setZ(c,Bt(l,-h)):s.setZ(c,0);const p=l,m=-h,x=Xl(p*.025+100,m*.025+200,3),d=Xl(p*.06+300,m*.06+400,2),g=Op(p*.15+500,m*.15+600),S=Xl(p*.04-150,m*.04-250,3),_=Math.floor(x*o.length*.999),w=Math.floor(S*o.length*.999),A=o[_],E=o[w],T=xh(d),b=.85+g*.3,y=(A[0]*(1-T)+E[0]*T)*b,v=(A[1]*(1-T)+E[1]*T)*b,R=(A[2]*(1-T)+E[2]*T)*b,D=1+Bt(p,m)*.06;a[c*3]=y*D,a[c*3+1]=v*D,a[c*3+2]=R*D}n.setAttribute("color",new ze(a,3)),n.computeVertexNormals();const u=new C(n,new q({map:i,vertexColors:!0,roughness:.75,metalness:0,emissive:1512464,emissiveIntensity:.28}));return u.rotation.x=-Math.PI/2,u.receiveShadow=!0,ct.add(u),u}const ko=new te;let Gc=null;const Ps=120;let u0=null,dc=null,Mh=null,vh=null,Ho=null;const Vo=[],vw=3;let ql=0;function ls(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function us(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,ls(o,r)),a.addColorStop(.25,ls(o,r*.55)),a.addColorStop(.55,ls(o,r*.15)),a.addColorStop(.85,ls(o,r*.03)),a.addColorStop(1,ls(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function Yl(i,t,e,n,s,o,r,a){us(i,t,e,n,s,o,r),t-n<0&&us(i,t+a,e,n,s,o,r),t+n>a&&us(i,t-a,e,n,s,o,r)}function _w(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const h of r){Yl(n,h.x*2048,h.y*1024,h.rx*2048,h.ry*1024,h.col,h.a,2048);for(let f=0;f<4;f++){const p=(h.x+(s()-.5)*h.rx)*2048,m=(h.y+(s()-.5)*h.ry)*1024,x=h.rx*2048*(.2+s()*.35),d=h.ry*1024*(.2+s()*.4);Yl(n,p,m,x,d,h.col,h.a*(.4+s()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let h=0;h<30;h++){const f=s()*2048,p=s()*1024*.55,m=40+s()*180,x=25+s()*100;Yl(n,f,p,m,x,a[Math.floor(s()*a.length)],.025+s()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const u=.26;for(let h=0;h<50;h++){const f=h/50,p=f*2048,m=(u+Math.sin(f*Math.PI)*.06+(s()-.5)*.02)*1024,x=2048*.05+s()*2048*.035,d=1024*.04*(.4+s()*.6);us(n,p,m,x,d,4478310,.025+s()*.015)}for(let h=0;h<25;h++){const f=.2+s()*.6,p=f*2048,m=(u+Math.sin(f*Math.PI)*.04)*1024;us(n,p,m,2048*.03+s()*2048*.02,1024*.02+s()*1024*.01,6719658,.015+s()*.012)}for(let h=0;h<10;h++){const f=.35+s()*.3,p=f*2048,m=(u+Math.sin(f*Math.PI)*.02)*1024;us(n,p,m,2048*.02,1024*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let h=0;h<12;h++){const f=.1+s()*.8,p=f*2048,m=(u+Math.sin(f*Math.PI)*.04+(s()-.5)*.02)*1024,x=20+s()*60,d=8+s()*20;us(n,p,m,x,d,132104,.15+s()*.1)}const c=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let h=0;h<5e3;h++){const f=s()*2048,p=s()*1024*.65,m=.3+s()*.7,x=.1+s()*.5;n.fillStyle=`rgba(${c[Math.floor(s()*c.length)]},${x})`,n.beginPath(),n.arc(f,p,m,0,6.28),n.fill()}for(let h=0;h<3e3;h++){const f=s(),p=f*2048,x=(u+Math.sin(f*Math.PI)*.06)*1024+(s()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const d=.2+s()*.6,g=.2+s()*.7;n.fillStyle=`rgba(${c[Math.floor(s()*c.length)]},${g})`,n.beginPath(),n.arc(p,x,d,0,6.28),n.fill()}for(let h=0;h<60;h++){const f=s()*2048,p=s()*1024*.58,m=1.2+s()*1.8,x=6+s()*14,d=s();let g;d<.45?g="255,255,255":d<.65?g="210,225,255":d<.8?g="255,230,200":d<.92?g="190,210,255":g="255,200,180";const S=n.createRadialGradient(f,p,0,f,p,x);S.addColorStop(0,`rgba(${g},0.5)`),S.addColorStop(.1,`rgba(${g},0.18)`),S.addColorStop(.35,`rgba(${g},0.04)`),S.addColorStop(1,`rgba(${g},0)`),n.fillStyle=S,n.beginPath(),n.arc(f,p,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${g},0.12)`,n.lineWidth=.5;const _=x*.8;n.beginPath(),n.moveTo(f-_,p),n.lineTo(f+_,p),n.moveTo(f,p-_),n.lineTo(f,p+_),n.stroke(),n.fillStyle=`rgba(${g},1)`,n.beginPath(),n.arc(f,p,m,0,6.28),n.fill()}for(let h=0;h<8;h++){const f=s()*2048,p=1024*.08+s()*1024*.42,m=50+s()*90;us(n,f,p,m,m*.7,3359846,.03);for(let x=0;x<100;x++){const d=s()*6.28,g=s()*s()*m,S=f+Math.cos(d)*g,_=p+Math.sin(d)*g*.65;if(S<0||S>2048||_<0||_>1024)continue;const w=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(S,_,w,0,6.28),n.fill()}}for(let h=0;h<15;h++){const f=r[Math.floor(s()*r.length)],p=(f.x+(s()-.5)*f.rx*.5)*2048,m=(f.y+(s()-.5)*f.ry*.5)*1024,x=3+s()*8,d=n.createRadialGradient(p,m,0,p,m,x*3);d.addColorStop(0,ls(f.col,.2)),d.addColorStop(.3,ls(f.col,.06)),d.addColorStop(1,ls(f.col,0)),n.fillStyle=d,n.beginPath(),n.arc(p,m,x*3,0,6.28),n.fill()}const l=new ra(e);return l.colorSpace=En,l}function yw(){const i=zp(),t=_w(),e=.03,n=new $(Xi,64,32,0,Math.PI*2,e,Math.PI*.55);Gc=new Z({map:t,side:on,fog:!1,transparent:!1});const s=new C(n,Gc);ko.add(s);const o=Xi*Math.sin(e)*1.05,r=new Oe(o,32),a=new Z({color:198160,side:on,fog:!1}),u=new C(r,a);u.position.y=Xi*Math.cos(e),u.rotation.x=Math.PI/2,ko.add(u),ww(),Sw(),ct.add(ko),ph(i)}function ww(){const i=new Float32Array(Ps*3),t=new Float32Array(Ps*3);dc=new Float32Array(Ps),Mh=new Float32Array(Ps),vh=new Float32Array(Ps);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,s=Xi*.97;for(let a=0;a<Ps;a++){const u=n()*Math.PI*2,c=n()*Math.PI*.48,l=s*Math.cos(u)*Math.sin(c),h=s*Math.cos(c),f=s*Math.sin(u)*Math.sin(c);i[a*3]=l,i[a*3+1]=h,i[a*3+2]=f;const p=e[Math.floor(n()*e.length)];t[a*3]=p[0],t[a*3+1]=p[1],t[a*3+2]=p[2],dc[a]=2+n()*4,Mh[a]=n()*Math.PI*2,vh[a]=.5+n()*2.5}const o=new Se;o.setAttribute("position",new Vt(i,3)),o.setAttribute("color",new Vt(t,3)),Ho=new Vt(dc.slice(),1),Ho.setUsage(_e),o.setAttribute("size",Ho);const r=new vf({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:Qt,depthWrite:!1});u0=new up(o,r),ko.add(u0)}function Sw(){const i=new Z({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Qt,depthWrite:!1});for(let t=0;t<vw;t++){const e=new C(new gt(.15,0,12,4),i.clone());e.visible=!1,ko.add(e),Vo.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function bw(){let i=null;for(let a=0;a<Vo.length;a++)if(!Vo[a].active){i=Vo[a];break}if(!i)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,s=Xi*.85;i.sx=s*Math.cos(e)*Math.sin(n),i.sy=s*Math.cos(n),i.sz=s*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;i.dx=Math.cos(o)*r,i.dy=-r*(.5+t()*.5),i.dz=Math.sin(o)*r,i.life=.5+t()*.8,i.maxLife=i.life,i.active=!0,i.mesh.visible=!0}function Bp(i,t){if(ko.rotation.y=t*.003,Ho){const e=Ho.array;for(let n=0;n<Ps;n++){const s=dc[n],o=Math.sin(t*vh[n]+Mh[n]);e[n]=s*(.65+o*.35)}Ho.needsUpdate=!0}ql-=i,ql<=0&&(ql=4+Math.random()*12,bw());for(let e=0;e<Vo.length;e++){const n=Vo[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife;n.sx+=n.dx*i,n.sy+=n.dy*i,n.sz+=n.dz*i,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=s*.7,n.mesh.scale.setScalar(.6+s*.4)}}function Tw(i){if(Gc){const t=Math.max(.15,i);Gc.color.setRGB(t,t,t)}}const Ew=6,Za=64,_h=[];let Bs=null;const Rr=[new rt(1734485),new rt(2787447),new rt(5601126),new rt(6706568),new rt(8930406),new rt(3368533)];function Aw(){Bs=new te,Bs.visible=!1;for(let i=0;i<Ew;i++){const t=1.2+i*.2+Math.sin(i*1.7)*.15,e=Xi*t,n=.1+i*.012+Math.sin(i*2.3)*.02,s=Xi*n,o=new oe(e,s,Za,3),r=o.attributes.position.array,a=4,u=(Za+1)*a,c=Math.PI*(.45+i*.08+Math.sin(i*.9)*.05),l=-c/2,h=(.25+i*.04+Math.sin(i*1.3)*.02)*Math.PI,f=i*.18-.45;for(let d=0;d<u;d++){const g=Math.floor(d/a),S=d%a,_=g/Za,w=l+_*c+f,E=(S/(a-1)-.5)*.05,T=h+E,b=Xi*.92;r[d*3]=Math.sin(w)*Math.sin(T)*b,r[d*3+1]=Math.cos(T)*b,r[d*3+2]=Math.cos(w)*Math.sin(T)*b}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(_e),o.computeVertexNormals();const p=new Float32Array(u*3);o.setAttribute("color",new ze(p,3)),o.attributes.color.setUsage(_e);const m=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Ct,blending:Qt,depthWrite:!1,fog:!1}),x=new C(o,m);Bs.add(x),_h.push({mesh:x,mat:m,geo:o,colorArr:p,posArr:r,vertCount:u,rows:a,segments:Za,phase:i*1.7+Math.sin(i*.8)*.5,speed:.15+i*.05+Math.sin(i*2.1)*.03,colorShift:i*1.1,elevation:h,arcStart:l,arcSpan:c,azimuthOffset:f})}ct.add(Bs)}let _o=0;function Rw(i,t,e,n,s){if(!Bs)return;const o=s==="HEAVY_RAIN"||s==="LUMINOUS_STORM"||s==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>_o?.2:.4;if(_o+=(r-_o)*a*i,_o<.005){Bs.visible=!1;return}Bs.visible=!0;const u=Xi*.92;for(let c=0;c<_h.length;c++){const l=_h[c],h=l.colorArr,f=l.posArr,p=l.segments,m=l.rows;l.mat.opacity=_o*(.5+c*.05);for(let x=0;x<=p;x++){const d=x/p,g=Math.sin(d*6+t*l.speed+l.phase)*.5+.5,S=Math.sin(d*3-t*l.speed*.4+l.phase*1.3)*.5+.5,_=Math.sin(d*1.5+t*.07)*.5+.5,w=Math.sin(d*1.2+t*.05+l.phase*.7)*.5+.5,A=(g*.3+S*.25+_*.2+w*.25)*_o,E=(d*3+t*.08+l.colorShift)%Rr.length,T=Math.floor(E),b=E-T,y=Rr[T%Rr.length],v=Rr[(T+1)%Rr.length],R=(y.r+(v.r-y.r)*b)*A,L=(y.g+(v.g-y.g)*b)*A,D=(y.b+(v.b-y.b)*b)*A,F=u*.025,V=Math.sin(d*5+t*.3+l.phase)*F+Math.sin(d*2.5-t*.15+l.phase*.6)*F*.5;for(let k=0;k<m;k++){const O=x*m+k,B=k/(m-1);let it;B<.33?it=B*1.2:B>.67?it=(1-B)*1.5:it=.7+Math.sin(B*Math.PI)*.3,h[O*3]=R*it,h[O*3+1]=L*it,h[O*3+2]=D*it,l.arcStart+d*l.arcSpan+l.azimuthOffset;const ut=(B-.5)*.05,ft=l.elevation+ut,Pt=V*(.3+B*.7);f[O*3+1]=Math.cos(ft)*u+Pt}}l.geo.attributes.color.needsUpdate=!0,l.geo.attributes.position.needsUpdate=!0}}const J={pos:new z(0,nl,0),vel:new z,onGround:!0};let Zl=0,$l=0,Gp=0,jl=65,h0=65,Cr=0,f0=!0,Jl=0,cr=0,yh=null,wh=null,Sh=null,d0=1;function Cw(i,t,e){yh=i,wh=t,Sh=e}let bh=[],Th=[],Eh=null;function Pw(i,t){bh=i,Th=t}function Iw(i){Eh=i}function Lw(i){const t=gw(),e=Be.ShiftLeft||Be.ShiftRight||mr;J.vel.x=t.x,J.vel.z=t.z,J.vel.y-=T1*i,(Be.Space||sl)&&J.onGround&&(J.vel.y=zc,J.onGround=!1,pw(!1),wh&&wh()),J.onGround||(Jl=J.vel.y),J.pos.x+=J.vel.x*i,J.pos.y+=J.vel.y*i,J.pos.z+=J.vel.z*i;const n=Bt(J.pos.x,J.pos.z)+nl;if(J.pos.y<=n){if(J.pos.y=n,J.vel.y=0,!f0&&Jl<-3){const l=Math.min(Math.abs(Jl)/zc,1);Cr=l*.15,Eh&&Eh(J.pos.x,J.pos.z,Math.floor(3+l*5)),Sh&&Sh(l)}J.onGround=!0}f0=J.onGround,J.onGround?(J.vel.x*=i0,J.vel.z*=i0):(J.vel.x*=s0,J.vel.z*=s0);const s=.4;for(let l=0;l<bh.length;l++){const h=bh[l],f=J.pos.x-h.x,p=J.pos.z-h.z,m=f*f+p*p,x=.6+s;if(m<x*x&&m>.001){const d=1/Math.sqrt(m);J.pos.x=h.x+f*d*x,J.pos.z=h.z+p*d*x}}for(let l=0;l<Th.length;l++){const h=Th[l],f=J.pos.x-h.x,p=J.pos.z-h.z,m=f*f+p*p,x=h.colR+s;if(m<x*x&&m>.001){const d=1/Math.sqrt(m);J.pos.x=h.x+f*d*x,J.pos.z=h.z+p*d*x}}if(Math.sqrt(J.pos.x*J.pos.x+J.pos.z*J.pos.z)>Jt){const l=Math.atan2(J.pos.z,J.pos.x);J.pos.x=Math.cos(l)*Jt,J.pos.z=Math.sin(l)*Jt}If.position.copy(J.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&J.onGround;a?cr=0:cr+=i,$l+=((a?e?.06:.035:0)-$l)*i*6,a&&(Zl+=i*(e?12:8));const c=Math.sin(Zl)*$l;if(a&&yh){const l=Math.sin(Zl)>=0?1:-1;d0>0&&l<0&&yh(e),d0=l}h0=e&&a?78:65,jl+=(h0-jl)*i*4,Mn.fov=jl,Mn.updateProjectionMatrix(),Cr*=Math.pow(.04,i),Cr<.001&&(Cr=0),Gp=c-Cr}function $a(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,u=new Se;let c=0;for(let l=0;l<i.length;++l){const h=i[l];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;u.addGroup(c,p,l),c+=p}}if(e){let l=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let m=0;m<p.count;++m)h.push(p.getX(m)+l);l+=i[f].attributes.position.count}u.setIndex(h)}for(const l in o){const h=p0(o[l]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;u.setAttribute(l,h)}for(const l in r){const h=r[l][0].length;if(h===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[l]=[];for(let f=0;f<h;++f){const p=[];for(let x=0;x<r[l].length;++x)p.push(r[l][x][f]);const m=p0(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;u.morphAttributes[l].push(m)}}return u}function p0(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const l=i[c];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=l.count*e}const r=new t(o),a=new ze(r,e,n);let u=0;for(let c=0;c<i.length;++c){const l=i[c];if(l.isInterleavedBufferAttribute){const h=u/e;for(let f=0,p=l.count;f<p;f++)for(let m=0;m<e;m++){const x=l.getComponent(f,m);a.setComponent(f+h,m,x)}}else r.set(l.array,u);u+=l.count*e}return s!==void 0&&(a.gpuType=s),a}function m0(i,t,e){return i+(t-i)*e}let yo=null;function Dw(){if(yo)return yo;const i=256,t=512,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#5a4030"),s.addColorStop(.3,"#4d3528"),s.addColorStop(.7,"#3a2a1e"),s.addColorStop(1,"#2e2015"),n.fillStyle=s,n.fillRect(0,0,i,t);for(let o=0;o<28;o++){const r=o/28*i+Math.sin(o*3.7)*6,a=2+Math.sin(o*2.1)*1.5,u=Math.sin(o*1.3+.5)*.5+.5,c=Math.floor(50+u*30),l=Math.floor(30+u*20),h=Math.floor(15+u*12);n.strokeStyle=`rgba(${c},${l},${h},0.4)`,n.lineWidth=a,n.beginPath();let f=0;for(n.moveTo(r,f);f<t;){f+=8+Math.random()*12;const p=Math.sin(f*.03+o)*3;n.lineTo(r+p,f)}n.stroke()}for(let o=0;o<18;o++){const r=o/18*i+Math.sin(o*5.3)*8;n.strokeStyle="rgba(20,12,6,0.35)",n.lineWidth=.8+Math.random()*1.2,n.beginPath();let a=Math.random()*40;for(n.moveTo(r,a);a<t;)a+=5+Math.random()*10,n.lineTo(r+Math.sin(a*.05+o*2)*4,a);n.stroke()}for(let o=0;o<30;o++){const r=o/30*t+Math.random()*10;n.strokeStyle=`rgba(${30+Math.random()*20},${18+Math.random()*12},${8+Math.random()*8},0.15)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,r);for(let a=0;a<i;a+=10)n.lineTo(a,r+Math.sin(a*.04+o)*2);n.stroke()}for(let o=0;o<5;o++){const r=Math.random()*i,a=50+Math.random()*(t-100),u=4+Math.random()*6,c=3+Math.random()*5,l=n.createRadialGradient(r,a,0,r,a,u);l.addColorStop(0,"rgba(15,8,4,0.5)"),l.addColorStop(.5,"rgba(30,18,10,0.3)"),l.addColorStop(1,"rgba(40,25,14,0)"),n.fillStyle=l,n.beginPath(),n.ellipse(r,a,u,c,0,0,Math.PI*2),n.fill()}for(let o=0;o<8;o++){const r=Math.random()*i;n.strokeStyle="rgba(34,136,85,0.08)",n.lineWidth=.5+Math.random()*.8,n.beginPath();let a=Math.random()*t*.3;n.moveTo(r,a);const u=30+Math.random()*80;for(;a<a+u&&a<t;)a+=4+Math.random()*6,n.lineTo(r+Math.sin(a*.08+o*2)*2,a);n.stroke()}return yo=new ra(e),yo.wrapS=tr,yo.wrapT=tr,yo}const ea=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];let ja=null;function Uw(){if(ja)return ja;const i=64,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,i,i),ja=new ra(t),ja}function Nw(i,t){const e=new ap({map:Uw(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:Qt}),n=new nx(e),s=i*.55;return n.scale.set(s*2.2,s*1.6,1),n.position.y=t+i*.6,n.visible=!1,ct.add(n),n}function zw(i){const t=new te,e=6+M()*10,n=.2+M()*.3,s=n*1.8,o=new C(new gt(n*.4,s,e,8));o.material=new q({color:5914672}),o.position.y=e/2,o.userData._cat="trunk",t.add(o);const r=2+Math.floor(M()*3);for(let _=0;_<r;_++){const w=_/r*6.28+M()*.5,A=e*.4+M()*e*.4,E=new C(new gt(.008,.015,A,3));E.material=new q({color:2263125}),E.position.set(Math.cos(w)*n*.74,e*.15+A/2,Math.sin(w)*n*.74),E.userData._cat="detail",t.add(E)}const a=new z(0,1,0),u=4+Math.floor(M()*4);for(let _=0;_<u;_++){const w=_/u*6.28+M()*.4,A=1.2+M()*2.5,E=s*(.3+M()*.2),T=.03+M()*.03,b=-.1-M()*.15,y=Math.cos(w)*Math.cos(b),v=Math.sin(b),R=Math.sin(w)*Math.cos(b),L=new z(y,v,R).normalize(),D=new gt(T,E,A,5);D.translate(0,A/2,0);const F=new C(D,new q({color:4864040}));F.position.set(Math.cos(w)*s*.6,.05,Math.sin(w)*s*.6);const V=new ds().setFromUnitVectors(a,L);if(F.quaternion.copy(V),F.userData._cat="trunk",t.add(F),M()<.6){const k=.4+M()*.3,O=w+(M()-.5)*1.2,B=.5+M()*1,it=new z(Math.cos(O)*Math.cos(-.1),Math.sin(-.1),Math.sin(O)*Math.cos(-.1)).normalize(),ut=new gt(.02,E*.3,B,4);ut.translate(0,B/2,0);const ft=new C(ut,new q({color:4864040})),Pt=new z(Math.cos(w)*s*.6+y*A*k,.05+v*A*k,Math.sin(w)*s*.6+R*A*k);ft.position.copy(Pt);const Wt=new ds().setFromUnitVectors(a,it);ft.quaternion.copy(Wt),ft.userData._cat="trunk",t.add(ft)}else M(),M()}const c=ea[i%ea.length],l=new q({color:5914672}),h=new q({color:4863269}),f=new z(0,1,0);function p(_,w,A,E,T,b){const y=new gt(T,E,A,5);y.translate(0,A/2,0);const v=new C(y,b);v.position.copy(_);const R=w.clone().normalize(),L=new ds().setFromUnitVectors(f,R);v.quaternion.copy(L),v.userData._cat="trunk",t.add(v)}function m(_,w,A,E){const T=3+Math.floor(M()*4),b=E*.45;for(let v=0;v<T;v++){const R=E*(.12+M()*.18),L=new C(new or(R,1)),D=M()<.3;L.material=new q({color:D?c.core:c.leaf}),L.position.set(_+(M()-.5)*b*2,w+(M()-.3)*b*1.4,A+(M()-.5)*b*2),L.scale.set(.7+M()*.8,.5+M()*.9,.7+M()*.8),L.userData._cat="canopy",t.add(L)}const y=new C(new or(E*.5,1));y.material=new q({color:c.glow}),y.position.set(_,w,A),y.scale.set(1+M()*.3,.7+M()*.4,1+M()*.3),y.userData._cat="glow",t.add(y)}const x=2+Math.floor(M()*2);for(let _=0;_<x;_++){const w=e*(.3+M()*.25),A=_/x*Math.PI*2+M()*1,E=.35+M()*.45,T=1+M()*1.8,b=n*.4,y=n*.08,v=Math.cos(A)*Math.cos(E),R=Math.sin(E),L=Math.sin(A)*Math.cos(E),D=new z(v,R,L),F=new z(Math.cos(A)*n*.95,w,Math.sin(A)*n*.95);if(p(F,D,T,b,y,l),M()<.4){const V=.4+M()*.8,k=new C(new gt(.008,.003,V,3));k.material=new q({color:2773040});const O=.4+M()*.4;k.position.set(F.x+v*T*O,F.y+R*T*O-V/2,F.z+L*T*O),k.userData._cat="detail",t.add(k)}else M(),M()}const d=5+Math.floor(M()*4);for(let _=0;_<d;_++){const w=e*(.55+M()*.37),A=_/d*Math.PI*2+M()*.5,E=.6+M()*.55,T=1.5+M()*3,b=n*.35,y=.03+M()*.02,v=Math.cos(A)*Math.cos(E),R=Math.sin(E),L=Math.sin(A)*Math.cos(E),D=new z(v,R,L),F=new z(Math.cos(A)*n*.95,w,Math.sin(A)*n*.95);p(F,D,T,b,y,l);const V=F.x+v*T,k=F.y+R*T,O=F.z+L*T,B=.8+M()*1.5;m(V,k,O,B);const it=1+Math.floor(M()*3);for(let ut=0;ut<it;ut++){const ft=.35+M()*.35,Pt=new z(F.x+v*T*ft,F.y+R*T*ft,F.z+L*T*ft),Wt=A+(M()-.5)*1.8,et=.45+M()*.55,lt=.6+M()*1.4,yt=new z(Math.cos(Wt)*Math.cos(et),Math.sin(et),Math.sin(Wt)*Math.cos(et));p(Pt,yt,lt,.04,.012,h);const mt=Pt.x+yt.x*lt,zt=Pt.y+yt.y*lt,Ot=Pt.z+yt.z*lt,$t=.5+M()*.8;m(mt,zt,Ot,$t)}if(M()<.3){const ut=.3+M()*.7,ft=new C(new gt(.008,.003,ut,3));ft.material=new q({color:2773040});const Pt=.5+M()*.3;ft.position.set(F.x+v*T*Pt,F.y+R*T*Pt-ut/2,F.z+L*T*Pt),ft.userData._cat="detail",t.add(ft)}else M(),M()}const g=Math.floor(M()*3);for(let _=0;_<g;_++){const w=1+M()*e*.4,A=M()*6.28,E=.08+M()*.08,T=new C(new $(E,5,3));T.material=new q({color:5911840}),T.scale.set(1.5,.3,1),T.position.set(Math.cos(A)*n*.8,w,Math.sin(A)*n*.8),T.rotation.y=-A,T.userData._cat="detail",t.add(T)}const S=new C(new $(2.5+M()*1.5,8,6));return S.material=new q({color:new rt(U.leaf)}),S.position.y=e*.85,S.userData._cat="glow",t.add(S),t.userData.treeH=e,t}function Fw(i,t){const e=zp();ph(7919+t*1013+i*3571);const n=zw(i),s=n.userData.treeH;ph(e),n.updateMatrixWorld(!0);const o=[],r=[],a=[],u=[],c=new rt;for(let m=0;m<n.children.length;m++){const x=n.children[m];if(!x.isMesh)continue;let d=x.geometry.clone();if(x.updateMatrix(),d.applyMatrix4(x.matrix),d.index){const A=d.toNonIndexed();d.dispose(),d=A}const g=x.userData._cat||"trunk";g==="trunk"?c.set(16777215):c.copy(x.material.color);const _=d.attributes.position.count,w=new Float32Array(_*3);for(let A=0;A<_;A++)w[A*3]=c.r,w[A*3+1]=c.g,w[A*3+2]=c.b;if(d.setAttribute("color",new ze(w,3)),g==="trunk"){if(!d.attributes.uv){const A=new Float32Array(_*2);d.setAttribute("uv",new ze(A,2))}}else d.attributes.uv&&d.deleteAttribute("uv");g==="trunk"?o.push(d):g==="canopy"?r.push(d):g==="glow"?a.push(d):g==="detail"&&u.push(d),x.material.dispose()}const l=o.length>0?$a(o):null,h=r.length>0?$a(r):null,f=a.length>0?$a(a):null,p=u.length>0?$a(u):null;for(const m of o)m.dispose();for(const m of r)m.dispose();for(const m of a)m.dispose();for(const m of u)m.dispose();return{trunkGeo:l,canopyGeo:h,glowGeo:f,detailGeo:p,treeH:s,palIdx:i}}const Te=new fe;function Ow(i){const t=[];for(let e=0;e<i;e++){const n=e%ea.length,s=Math.floor(e/ea.length);t.push(Fw(n,s))}return t}function Bw(i,t,e){const n=[];for(let s=0;s<i.length;s++){const o=i[s],r=ea[o.palIdx],a=Dw(),u=new q({vertexColors:!0,map:a,roughness:.85,emissive:1708040,emissiveIntensity:.3}),c=o.trunkGeo?new ni(o.trunkGeo,u,e):null;c&&(c.instanceMatrix.setUsage(_e),c.count=0,ct.add(c));const l=new q({vertexColors:!0,roughness:.5,emissive:r.glow,emissiveIntensity:.45,transparent:!0,opacity:.4,depthWrite:!1}),h=o.canopyGeo?new ni(o.canopyGeo,l,e):null;h&&(h.instanceMatrix.setUsage(_e),h.count=0,ct.add(h));const f=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.08,transparent:!0,opacity:.07,depthWrite:!1}),p=o.glowGeo?new ni(o.glowGeo,f,e):null;p&&(p.instanceMatrix.setUsage(_e),p.count=0,ct.add(p));const m=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.2}),x=o.detailGeo?new ni(o.detailGeo,m,e):null;x&&(x.instanceMatrix.setUsage(_e),x.count=0,ct.add(x)),n.push({trunk:c,canopy:h,glow:p,detail:x,trunkMat:u,canopyMat:l,glowMat:f,detailMat:m,instances:[],treeH:o.treeH})}for(let s=0;s<t.length;s++){const o=s%i.length,r=t[s],a=r.yRot,u=r.scale;Te.position.set(r.x,r.y,r.z),Te.rotation.set(0,a,0),Te.scale.setScalar(u),Te.updateMatrix();const c=n[o].instances.length;n[o].trunk&&n[o].trunk.setMatrixAt(c,Te.matrix),n[o].canopy&&n[o].canopy.setMatrixAt(c,Te.matrix),n[o].glow&&n[o].glow.setMatrixAt(c,Te.matrix),n[o].detail&&n[o].detail.setMatrixAt(c,Te.matrix),n[o].instances.push({x:r.x,z:r.z,y:r.y,yRot:a,scale:u,treeH:r.treeH||n[o].treeH,posIdx:s})}for(let s=0;s<n.length;s++){const o=n[s].instances.length;n[s].trunk&&(n[s].trunk.count=o),n[s].canopy&&(n[s].canopy.count=o),n[s].glow&&(n[s].glow.count=o),n[s].detail&&(n[s].detail.count=0)}return n}function Gw(i,t,e,n,s,o,r,a,u){for(let c=0;c<i.length;c++){const l=i[c];let h=0,f=0,p=0,m=0;for(let x=0;x<l.instances.length;x++){const d=l.instances[x],g=d.x-e,S=d.z-s,_=d.y+(d.treeH||10)*.4-n,w=g*g+_*_+S*S,A=d.posIdx,E=t[A];if(w>13225){E&&(E.visible=!1);continue}if(w>11025){if(E){const T=Math.sqrt(w);E.visible=!0,E.material.opacity=m0(.65,0,(T-105)/10)}continue}if(w>5625){E&&(E.visible=!0,E.material.opacity=.65);continue}if(w>3969){const b=(Math.sqrt(w)-63)/12;E&&(E.visible=!0,E.material.opacity=m0(0,.65,b)),Te.position.set(d.x,d.y,d.z),Te.rotation.set(0,d.yRot,0),Te.scale.setScalar(d.scale),Te.updateMatrix(),l.trunk&&l.trunk.setMatrixAt(h++,Te.matrix),l.canopy&&l.canopy.setMatrixAt(f++,Te.matrix),l.glow&&l.glow.setMatrixAt(p++,Te.matrix);continue}if(E&&(E.visible=!1),Te.position.set(d.x,d.y,d.z),Te.scale.setScalar(d.scale),w<400){const T=d.x*.1+d.z*.13;Te.rotation.set(Math.sin(o*.25+T+1)*.003*r+u*.15,d.yRot,Math.sin(o*.3+T)*.004*r+a*.15),Te.updateMatrix(),l.detail&&l.detail.setMatrixAt(m++,Te.matrix)}else Te.rotation.set(0,d.yRot,0),Te.updateMatrix();l.trunk&&l.trunk.setMatrixAt(h++,Te.matrix),l.canopy&&l.canopy.setMatrixAt(f++,Te.matrix),l.glow&&l.glow.setMatrixAt(p++,Te.matrix)}l.trunk&&(l.trunk.count=h,l.trunk.instanceMatrix.needsUpdate=!0),l.canopy&&(l.canopy.count=f,l.canopy.instanceMatrix.needsUpdate=!0),l.glow&&(l.glow.count=p,l.glow.instanceMatrix.needsUpdate=!0),l.detail&&(l.detail.count=m,l.detail.instanceMatrix.needsUpdate=!0)}}function kw(i,t){const e=new te,n=.4+M()*1.2,s=M()*6.28,o=.8+M()*1.5,r=.5+M()*.8,a=new C(Ln.mushStem,new q({color:U.mushStem,roughness:.7,emissive:U.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const u=new q({color:U.mushStem,emissive:U.mushGlow,emissiveIntensity:.15,roughness:.6}),c=new C(new Ae(.09,.012,4,8),u);c.position.y=.42,c.rotation.x=Math.PI/2,e.add(c);const l=new q({color:U.mushCap,emissive:U.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),h=new C(Ln.mushCap,l);h.scale.set(1,.5,1),h.position.y=.55,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const f=new q({color:6693546,emissive:U.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Ct});for(let v=0;v<8;v++){const R=v/8*6.28,L=new C(new oe(.35,.08),f);L.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),L.rotation.y=-R,L.rotation.x=.1,e.add(L)}for(let v=0;v<4;v++){const R=new Z({color:16777215,transparent:!0,opacity:.9}),L=new C(Ln.mushDot,R),D=M()*6.28,F=.15+M()*.25;L.position.set(Math.cos(D)*F,.6+M()*.1,Math.sin(D)*F),e.add(L)}const p=new q({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),m=2+Math.floor(M()*2);for(let v=0;v<m;v++){const R=new C(new $(.015+M()*.015,4,3),p),L=M()*6.28,D=.1+M()*.2;R.position.set(Math.cos(L)*D,.63+M()*.08,Math.sin(L)*D),e.add(R)}const x=new q({color:4465322,emissive:U.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let v=0;v<4;v++){const R=M()*6.28,L=.15+M()*.25,D=new C(new gt(.004,.002,L,3),x);D.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),D.rotation.z=1.3*(R<3.14?1:-1),D.rotation.y=R,e.add(D)}const d=new q({color:U.mushCap,emissive:U.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),g=new C(new Ae(.38,.01,4,12),d);g.position.y=.49,g.rotation.x=Math.PI/2,e.add(g);const S=new q({color:U.mushStem,emissive:U.mushGlow,emissiveIntensity:.08,roughness:.7}),_=new C(new $(.08,5,3),S);_.scale.set(1,.5,1),_.position.y=.04,e.add(_);const w=new q({color:1708040,roughness:.95});for(let v=0;v<3;v++){const R=M()*6.28,L=.1+M()*.12,D=new C(new $(.008+M()*.008,3,3),w);D.position.set(Math.cos(R)*L,.005,Math.sin(R)*L),e.add(D)}const A=new Z({color:U.mushGlow,transparent:!0,opacity:.2});for(let v=0;v<4;v++){const R=new C(new $(.006,3,3),A);R.position.set((M()-.5)*.2,.35+M()*.1,(M()-.5)*.2),e.add(R)}const E=new q({color:11167453,emissive:U.mushGlow,emissiveIntensity:r*.3,roughness:.5}),T=3+Math.floor(M()*3);for(let v=0;v<T;v++){const R=M()*6.28,L=M()*.25,D=new C(new $(.015+M()*.015,3,3),E);D.position.set(Math.cos(R)*L,.58+M()*.06,Math.sin(R)*L),e.add(D)}const b=new q({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Ct}),y=new C(new Oe(.18,8),b);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(i,0,t),ct.add(e),{group:e,capMat:l,phase:s,speed:o,base:r,x:i,z:t}}function Hw(i,t){const e=new te,n=M()*6.28,s=new q({color:U.crystal,emissive:U.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new C(Ln.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let _=0;_<3;_++){const w=new C(Ln.crystalSm,s),A=_/3*6.28+M()*.5;w.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),w.rotation.z=(M()-.5)*.8,w.castShadow=!0,e.add(w)}const r=new q({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(M()*3);for(let _=0;_<a;_++){const w=M()*6.28,A=.2+M()*.5,E=.08+M()*.12,T=new C(new $(E,4,3),r);T.scale.set(1+M()*.5,.5+M()*.4,1+M()*.5),T.position.set(Math.cos(w)*A,E*.3,Math.sin(w)*A),T.rotation.set(M(),M(),M()),e.add(T)}const u=new Z({color:U.crystalCore,transparent:!0,opacity:.5});for(let _=0;_<3;_++){const w=.4+M()*.8,A=new C(new gt(.008,.008,w,3),u);A.position.set((M()-.5)*.15,.5+M()*.7,(M()-.5)*.15),A.rotation.set((M()-.5)*.8,(M()-.5)*.5,(M()-.5)*.8),e.add(A)}const c=new Z({color:11206638,transparent:!0,opacity:.6});for(let _=0;_<5;_++){const w=new C(new $(.012,3,3),c);w.position.set((M()-.5)*1,.3+M()*1.5,(M()-.5)*1),e.add(w)}const l=new q({color:U.crystal,emissive:U.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let _=0;_<4;_++){const w=M()*6.28,A=.3+M()*.3,E=new C(new gt(0,.015,.12+M()*.1,3),l);E.position.set(Math.cos(w)*A,.06+M()*.1,Math.sin(w)*A),E.rotation.z=(M()-.5)*.6,e.add(E)}const h=new q({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Ct});for(let _=0;_<2;_++){const w=M()*6.28,A=.2+M()*.3,E=new C(new Oe(.04+M()*.03,5),h);E.rotation.x=-Math.PI/2+M()*.4,E.position.set(Math.cos(w)*A,.05,Math.sin(w)*A),e.add(E)}const f=new Z({color:U.crystalCore,transparent:!0,opacity:.2});for(let _=0;_<2;_++){const w=new C(new gt(.003,.003,.6+M()*.4,3),f);w.position.set((M()-.5)*.3,.7+M()*.5,(M()-.5)*.3),w.rotation.set((M()-.5)*1,M(),(M()-.5)*1),e.add(w)}const p=new q({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let _=0;_<4;_++){const w=new C(new $(.02+M()*.02,3,3),p);w.position.set((M()-.5)*.15,.4+M()*.6,(M()-.5)*.15),e.add(w)}const m=new Z({color:11206638,transparent:!0,opacity:.06}),x=new C(new Ae(.35,.02,4,10),m);x.position.y=.6,x.rotation.x=Math.PI/2+M()*.3,e.add(x);const d=new Z({color:U.crystal,transparent:!0,opacity:.06,side:Ct}),g=new C(new Oe(.8,8),d);g.rotation.x=-Math.PI/2,g.position.y=.01,e.add(g),e.position.set(i,0,t),ct.add(e);const S=new dr(U.crystal,.5,8);return S.position.set(i,1.2,t),ct.add(S),{group:e,mat:s,phase:n,x:i,z:t,light:S}}const ti={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0}};function Vw(i,t,e,n,s,o){ti.uTime.value=i,ti.uWindAmp.value=t,ti.uWindLeanX.value=e,ti.uWindLeanZ.value=n,ti.uPlayerX.value=s,ti.uPlayerZ.value=o}function Ww(i,t,e,n,s){const o=new Se,r=[],a=[],u=[],c=n||20,l=new rt(s?s[0]:663568),h=new rt(s?s[1]:1388056),f=new rt(s?s[2]:2777141),p=new rt(s?s[3]:4517461),m=new rt(s?s[4]:7864268),x=new rt(s?s[5]:14548838),d=new rt;for(let b=0;b<c;b++){const y=M()*6.28,v=M()*e,R=Math.cos(y)*v,L=Math.sin(y)*v,D=.25+M()*.65,F=.03+M()*.05,V=(M()-.5)*.2,k=(M()-.5)*.2,O=(M()-.5)*.12,B=M()<.5?l:h,it=M(),ut=it<.4?p:it<.7?m:x,ft=D*.35,Pt=D*.7,Wt=V*.3,et=V*.7,lt=k*.3,yt=k*.7;r.push(R-F,.01,L),r.push(R+F,.01,L),r.push(R+Wt-F*.9,ft,L+lt),u.push(0,0,.35),a.push(B.r,B.g,B.b,B.r,B.g,B.b),d.copy(B).lerp(f,.4),a.push(d.r,d.g,d.b),r.push(R+F,.01,L),r.push(R+Wt+F*.9,ft,L+lt),r.push(R+Wt-F*.9,ft,L+lt),u.push(0,.35,.35),a.push(B.r,B.g,B.b),d.copy(B).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b);const mt=F*.65;r.push(R+Wt-F*.9,ft,L+lt),r.push(R+Wt+F*.9,ft,L+lt),r.push(R+et-mt,Pt,L+yt+O),u.push(.35,.35,.7),d.copy(B).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b),d.copy(f).lerp(ut,.3),a.push(d.r,d.g,d.b),r.push(R+Wt+F*.9,ft,L+lt),r.push(R+et+mt,Pt,L+yt+O),r.push(R+et-mt,Pt,L+yt+O),u.push(.35,.7,.7),d.copy(B).lerp(f,.4),a.push(d.r,d.g,d.b),d.copy(f).lerp(ut,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),r.push(R+et-mt,Pt,L+yt+O),r.push(R+et+mt,Pt,L+yt+O),r.push(R+V+O*2,D,L+k+O*1.5),u.push(.7,.7,1),d.copy(f).lerp(ut,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),a.push(ut.r,ut.g,ut.b)}const g=new rt(s?s[6]:1725736),S=new rt(s?s[7]:3385941),_=Math.floor(c*.3);for(let b=0;b<_;b++){const y=M()*6.28,v=M()*e*.9,R=Math.cos(y)*v,L=Math.sin(y)*v,D=.02+M()*.03;r.push(R-D,.01,L),r.push(R+D,.01,L),r.push(R,.03+M()*.02,L+D),u.push(0,0,.05),a.push(g.r,g.g,g.b),a.push(g.r,g.g,g.b),a.push(S.r,S.g,S.b)}o.setAttribute("position",new Vt(r,3)),o.setAttribute("color",new Vt(a,3)),o.setAttribute("bladeHeight",new Vt(u,1)),o.computeVertexNormals();const w=new q({vertexColors:!0,roughness:.7,side:Ct,emissive:s?s[8]:4521830,emissiveIntensity:.08}),A=i,E=t;w.onBeforeCompile=b=>{b.uniforms.uTime=ti.uTime,b.uniforms.uWindAmp=ti.uWindAmp,b.uniforms.uWindLeanX=ti.uWindLeanX,b.uniforms.uWindLeanZ=ti.uWindLeanZ,b.uniforms.uPlayerX=ti.uPlayerX,b.uniforms.uPlayerZ=ti.uPlayerZ,b.uniforms.uPatchX={value:A},b.uniforms.uPatchZ={value:E},b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
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

        // Proximity glow (5m radius, quadratic falloff)
        vGlow = pd2 < 25.0 ? (1.0 - sqrt(pd2) / 5.0) * hFrac : 0.0;
        vGlow *= vGlow;
      } else {
        vGlow = 0.0;
      }
      `),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
      varying float vGlow;
      `),b.fragmentShader=b.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance *= (1.0 + vGlow * 4.0);
      `)};const T=new C(o,w);return T.position.set(i,0,t),ct.add(T),{mesh:T,geo:o,cx:i,cz:t}}function Xw(i,t){const e=new te,n=new q({color:U.fern,emissive:U.fernGlow,emissiveIntensity:.08,roughness:.7,side:Ct}),s=3+Math.floor(M()*2),o=.5+M()*.7,r=new q({color:1708552,roughness:.95}),a=new C(new $(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let g=0;g<3;g++){const S=M()*6.28,_=new C(new gt(.003,.002,.08,3),r);_.position.set(Math.cos(S)*.06,.01,Math.sin(S)*.06),_.rotation.z=(S<3.14?1:-1)*1.2,_.rotation.y=S,e.add(_)}for(let g=0;g<s;g++){const S=g/s*6.28+M()*.3,_=new C(new gt(.004,.006,.55,3),new q({color:1721632,roughness:.8}));_.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),_.rotation.y=-S,_.rotation.x=-.6-M()*.4,e.add(_);const w=new C(new oe(.12,.6,1,3),n);w.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),w.rotation.y=-S,w.rotation.x=-.6-M()*.4,e.add(w);for(let E=0;E<6;E++){const T=new C(new oe(.07,.06,1,1),n),b=.06+E*.08,y=E%2===0?1:-1;T.position.set(Math.cos(S)*(.15+.06),b,Math.sin(S)*(.15+.06*y)),T.rotation.y=-S,T.rotation.x=-.8,T.rotation.z=y*.5,e.add(T)}const A=new q({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=new C(new $(.008,3,3),A),b=.12+E*.12;T.position.set(Math.cos(S)*(.15+.02),b-.01,Math.sin(S)*(.15+.02)),e.add(T)}}const u=new q({color:U.fernGlow,emissive:U.fernGlow,emissiveIntensity:.3}),c=new C(new $(.04,4,3),u);c.position.y=.35,e.add(c);const l=new C(new gt(.006,.003,.06,3),u);l.position.set(.02,.37,0),l.rotation.z=-.8,e.add(l);const h=new q({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let g=0;g<3;g++){const S=M()*6.28,_=M()*.2,w=new C(new $(.006+M()*.005,3,3),h);w.position.set(Math.cos(S)*_,.12+M()*.2,Math.sin(S)*_),e.add(w)}const f=new q({color:3811856,roughness:.9,side:Ct,transparent:!0,opacity:.6}),p=new C(new oe(.1,.4,1,2),f),m=M()*6.28;p.position.set(Math.cos(m)*.12,.05,Math.sin(m)*.12),p.rotation.x=-1.3,p.rotation.y=m,e.add(p);const x=new Z({color:2768928,transparent:!0,opacity:.3});for(let g=0;g<4;g++){const S=new C(new gt(.001,.001,.015,3),x);S.position.set((M()-.5)*.08,.08+M()*.15,(M()-.5)*.08),S.rotation.z=(M()-.5)*1.5,e.add(S)}const d=new q({color:1708552,roughness:.95});for(let g=0;g<3;g++){const S=new C(new $(.006,3,3),d);S.position.set((M()-.5)*.1,.005,(M()-.5)*.1),e.add(S)}return e.scale.setScalar(o),e.position.set(i,0,t),ct.add(e),{group:e,phase:M()*6.28}}function qw(i,t){const e=new te,n=.25+M()*.4,s=new q({color:U.flowerStem,roughness:.8}),o=new C(new gt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let b=0;b<2;b++){const y=new C(new An(.004,.012,3),s);y.position.set(.012,n*.25+b*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new q({color:U.fern,roughness:.7,side:Ct}),a=new C(new oe(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const u=new C(new oe(.05,.035),r);u.position.set(-.025,n*.5,.01),u.rotation.z=.6,e.add(u);const c=new q({color:1728560,roughness:.7,side:Ct});for(let b=0;b<5;b++){const y=b/5*6.28+.3,v=new C(new oe(.025,.02),c);v.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),v.rotation.x=-1.2,v.rotation.y=-y,e.add(v)}const l=new q({color:U.flower,emissive:U.flowerGlow,emissiveIntensity:.4+M()*.4,transparent:!0,opacity:.85,side:Ct});for(let b=0;b<6;b++){const y=b/6*6.28,v=new C(new oe(.05,.04),l);v.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),v.rotation.x=-.8,v.rotation.y=-y,e.add(v)}const h=new q({color:16777215,emissive:U.flowerGlow,emissiveIntensity:1.2}),f=new C(new $(.02,4,3),h);f.position.y=n+.02,e.add(f);const p=new Z({color:16777130,transparent:!0,opacity:.7}),m=new Z({color:16772676});for(let b=0;b<3;b++){const y=b/3*6.28+.5,v=new C(new gt(.002,.002,.025,3),p);v.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(v);const R=new C(new $(.005,3,3),m);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const x=new Z({color:16777164,transparent:!0,opacity:.3});for(let b=0;b<2;b++){const y=new C(new $(.006,3,3),x);y.position.set((M()-.5)*.04,n+.06+M()*.04,(M()-.5)*.04),e.add(y)}const d=new q({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),g=new C(new $(.006,3,3),d);g.position.set(.005,n+.005,.005),e.add(g);const S=new Z({color:15662984}),_=new C(new gt(.002,.002,.03,3),S);_.position.y=n+.035,e.add(_);const w=new C(new $(.005,3,3),S);w.position.y=n+.055,e.add(w);const A=new q({color:1725728,roughness:.7}),E=new C(new gt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const T=new Z({color:16777215,transparent:!0,opacity:.35});for(let b=0;b<4;b++){const y=b/4*6.28+.3,v=new C(new $(.004,3,3),T);v.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(v)}return e.position.set(i,0,t),ct.add(e),{group:e,petalMat:l,phase:M()*6.28,baseH:n}}function Yw(i,t){const e=new te,n=new q({color:U.reed,emissive:U.reedTip,emissiveIntensity:.05,roughness:.7}),s=new q({color:U.reedTip,emissive:U.reedTip,emissiveIntensity:.15}),o=new q({color:1709328,roughness:.95}),r=new C(new $(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(M()*4),u=new q({color:U.reed,roughness:.7,side:Ct});for(let p=0;p<a;p++){const m=.6+M()*1,x=(M()-.5)*.2,d=(M()-.5)*.2,g=new C(new gt(.008,.015,m,4),n);g.position.set(x,m/2,d),e.add(g);const S=2+Math.floor(M()*2),_=new q({color:2771488,roughness:.7});for(let E=0;E<S;E++){const T=m*.2+E*m*.25,b=new C(new Ae(.012,.004,4,6),_);b.position.set(x,T,d),b.rotation.x=Math.PI/2,e.add(b)}if(M()<.7){const E=.1+M()*.15,T=M()*6.28,b=new C(new oe(.02,E),u);b.position.set(x+Math.cos(T)*.02,m*.4,d+Math.sin(T)*.02),b.rotation.y=-T,b.rotation.x=-.5-M()*.4,e.add(b)}const w=new C(new $(.025,4,3),s);w.scale.set(.8,1.5,.8),w.position.set(x,m+.02,d),e.add(w);const A=new Z({color:U.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const T=E/3*6.28+M()*.5,b=new C(new gt(.002,.001,.04,3),A);b.position.set(x+Math.cos(T)*.015,m+.05,d+Math.sin(T)*.015),b.rotation.z=(M()-.5)*.4,e.add(b)}}e.position.set(i,0,t),ct.add(e);const c=new q({color:4864536,roughness:.9,side:Ct,transparent:!0,opacity:.5});for(let p=0;p<2;p++){M()*6.28;const m=(M()-.5)*.15,x=new C(new oe(.025,.02),c);x.position.set(m,.2+p*.25,(M()-.5)*.1),x.rotation.set(M()*.5,M(),M()*.5),e.add(x)}const l=new Z({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const m=new C(new $(.005,3,3),l);m.position.set((M()-.5)*.15,.8+M()*.6,(M()-.5)*.15),e.add(m)}const h=new q({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new C(new Ae(.1,.008,4,8),h);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:M()*6.28,swayAmp:.03+M()*.04}}let vn=null;const Wo=[],fn=new fe,kc=new rt,kp=new rt(U.dandSeed);function Zw(i){const t=new Z({color:16777215,transparent:!0,opacity:1});vn=new ni(Ln.dandSeed,t,i),vn.instanceMatrix.setUsage(_e),vn.instanceColor=new Ei(new Float32Array(i*3),3),vn.instanceColor.setUsage(_e),fn.scale.setScalar(0),fn.updateMatrix();for(let e=0;e<i;e++)vn.setMatrixAt(e,fn.matrix),kc.copy(kp),vn.setColorAt(e,kc),Wo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});vn.count=i,vn.frustumCulled=!1,ct.add(vn)}function Hp(i,t,e){let n=null;for(let o=0;o<Wo.length;o++)if(!Wo[o].active){n=Wo[o];break}if(!n)return;n.x=i+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const s=Math.random()*6.28;n.vx=Math.cos(s)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(s)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let Vp=0,Wp=0,Xp=0;function $w(i,t,e){Vp=i,Wp=t,Xp=e}function jw(i,t){let e=!1;for(let n=0;n<Wo.length;n++){const s=Wo[n];if(!s.active){fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),vn.setMatrixAt(n,fn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,fn.position.set(0,-100,0),fn.scale.setScalar(0),fn.updateMatrix(),vn.setMatrixAt(n,fn.matrix);continue}s.drift+=(Math.random()-.5)*1.5*i,s.vx+=Math.sin(s.drift)*.3*i,s.vz+=Math.cos(s.drift)*.2*i,s.vx+=Vp*.5*i,s.vz+=Wp*.5*i,s.vy+=(.15+Xp*.1-s.vy)*i*.5,s.vx*=.998,s.vy*=.998,s.vz*=.998,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const r=s.life/s.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;fn.position.set(s.x,s.y,s.z),fn.scale.setScalar(a),fn.updateMatrix(),vn.setMatrixAt(n,fn.matrix),kc.copy(kp).multiplyScalar(r),vn.setColorAt(n,kc),e=!0}vn.instanceMatrix.needsUpdate=!0,e&&(vn.instanceColor.needsUpdate=!0)}function Jw(i,t){const e=new te,n=.35+M()*.45,s=new q({color:2777128,roughness:.7,side:Ct}),o=3+Math.floor(M()*2);for(let _=0;_<o;_++){const w=_/o*6.28+M()*.3,A=new C(new oe(.08,.035),s);A.position.set(Math.cos(w)*.05,.02,Math.sin(w)*.05),A.rotation.x=-1.4,A.rotation.y=-w,e.add(A)}const r=new q({color:U.dandStem,roughness:.8}),a=new C(new gt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const u=new Z({color:14540236,transparent:!0,opacity:.3});for(let _=0;_<4;_++){const w=n*.2+_*n*.18,A=new C(new gt(.002,.001,.02,3),u);A.position.set(.01,w,0),A.rotation.z=-.8,e.add(A)}const c=new q({color:U.fern,roughness:.7,side:Ct}),l=new C(new oe(.07,.03),c);l.position.set(.03,n*.15,0),l.rotation.z=-.4,e.add(l);const h=new q({color:U.dandHead,emissive:U.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new C(new $(.07,6,5),h);f.position.y=n+.05,e.add(f);const p=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),m=new C(new $(.012,4,3),p);m.position.set(.04,n+.07,.03),e.add(m);const x=new Z({color:U.dandSeed,transparent:!0,opacity:.7});for(let _=0;_<8;_++){const w=_/8*6.28+M()*.2,A=new C(new An(.015,.05,3),x);A.position.set(Math.cos(w)*.06,n+.05+M()*.04,Math.sin(w)*.06),A.rotation.x=(M()-.5)*.6,A.rotation.z=(M()-.5)*.6,e.add(A);const E=new Z({color:16777215,transparent:!0,opacity:.3}),T=new C(new gt(.001,.001,.03,3),E);T.position.set(Math.cos(w)*.08,n+.08,Math.sin(w)*.08),T.rotation.set((M()-.5)*.5,0,(M()-.5)*.5),e.add(T);const b=new Z({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const v=w+(y-.5)*.5,R=new C(new gt(8e-4,8e-4,.025,3),b);R.position.set(Math.cos(v)*.075,n+.09,Math.sin(v)*.075),R.rotation.set((M()-.5)*.8,0,(M()-.5)*.8),e.add(R)}}const d=new q({color:3811856,roughness:.9});for(let _=0;_<4;_++){const w=_/4*6.28+M()*.5,A=new C(new $(.005,3,3),d);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(w)*.04,n+.04,Math.sin(w)*.04),e.add(A)}const g=new Z({color:1716240,transparent:!0,opacity:.15});for(let _=0;_<3;_++){const w=_/3*6.28,A=new C(new gt(.001,.001,n*.7,3),g);A.position.set(Math.cos(w)*.01,n*.35,Math.sin(w)*.01),e.add(A)}const S=new Z({color:13426107,transparent:!0,opacity:.2});for(let _=0;_<5;_++){const w=n*.1+M()*n*.7,A=M()*6.28,E=new C(new gt(8e-4,8e-4,.012,3),S);E.position.set(Math.cos(A)*.012,w,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(i,0,t),ct.add(e),{group:e,headMat:h,x:i,z:t,h:n,dispersed:!1,phase:M()*6.28,seedCount:8,regrowTimer:0}}function Kw(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let u=0;u<8;u++)Hp(o.x,o.h+.05,o.z);for(let u=2;u<o.group.children.length;u++)o.group.children[u].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function Qw(i,t){const e=new te,n=1+M()*.8,s=.25+M()*.15,o=new q({color:U.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new C(new gt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:U.thornSpike,roughness:.6}),u=4+Math.floor(M()*3);for(let w=0;w<u;w++){const A=n*.15+w/u*n*.6,E=w/u*6.28+M()*1,T=new C(new An(.015,.08+M()*.04,3),a);T.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),T.rotation.z=(E<3.14?1.3:-1.3)+M()*.2,T.rotation.y=E,e.add(T)}const c=new q({color:U.thornOrb,emissive:U.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),l=new C(new $(s,12,10),c);l.position.y=n+s*.5,e.add(l);const h=new q({color:16777164,emissive:U.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new C(new $(s*.35,8,6),h);f.position.y=n+s*.5,e.add(f);const p=new Z({color:U.thornOrbGlow,transparent:!0,opacity:.06,blending:Qt,depthWrite:!1}),m=new C(new $(s*2,8,6),p);m.position.y=n+s*.5,e.add(m);const x=new q({color:U.thornSpike,emissive:U.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),d=6+Math.floor(M()*3);for(let w=0;w<d;w++){const A=w/d*6.28+M()*.3,E=(M()-.5)*1.2,T=.3+M()*.3,b=new C(new An(.018,T,4),x);b.position.set(Math.cos(A)*s*.8,n+s*.5+Math.sin(E)*s*.5,Math.sin(A)*s*.8),b.rotation.z=-E+(A<3.14?1.4:-1.4),b.rotation.y=A,e.add(b)}const g=new q({color:U.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Ct}),S=4+Math.floor(M()*2);for(let w=0;w<S;w++){const A=w/S*6.28+M()*.3,E=.2+M()*.15,T=new C(new oe(E,E*1.5),g);T.position.set(Math.cos(A)*(s+.05),n+s*.3-M()*.1,Math.sin(A)*(s+.05)),T.rotation.y=-A,T.rotation.x=-.4-M()*.3,e.add(T)}const _=new q({color:1718296,emissive:662026,emissiveIntensity:.05,side:Ct});for(let w=0;w<2;w++){const A=M()*6.28,E=new C(new oe(.15,.25),_);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(i,0,t),ct.add(e),{group:e,orbMat:c,hazeMat:p,phase:M()*6.28,x:i,z:t}}function tS(i,t){const e=new te,n=2+Math.floor(M()*2),s=new q({color:1710128,roughness:.85,emissive:U.helixStem,emissiveIntensity:.1}),o=new C(new $(.18,8,6),s);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let c=0;c<n;c++){const l=1.5+M()*1,h=.15+M()*.15,f=1.5+M()*1.5,p=M()*6.28,m=[],x=16;for(let L=0;L<=x;L++){const D=L/x,F=p+D*f*6.28,V=h*(.3+D*.7);m.push(new z(Math.cos(F)*V,D*l,Math.sin(F)*V))}const d=new Js(m),g=new q({color:U.helixStem,emissive:U.helixNode,emissiveIntensity:.12,roughness:.7}),S=new C(new sn(d,20,.025+M()*.01,5,!1),g);e.add(S);const _=.1+M()*.08,A=M()<.5?new bf(_,0):new Sf(_,0),E=new q({color:U.helixPod,emissive:U.helixPodGlow,emissiveIntensity:.5+M()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),T=new C(A,E),b=d.getPoint(1);T.position.copy(b),T.rotation.set(M()*3,M()*3,M()*3),e.add(T),r.push(E);const y=new C(new $(_*2.5,6,4),new Z({color:U.helixPodGlow,transparent:!0,opacity:.05,blending:Qt,depthWrite:!1}));y.position.copy(b),e.add(y);const v=1+Math.floor(M()*2);for(let L=0;L<v;L++){const D=.3+M()*.5,F=d.getPoint(D),V=new q({color:U.helixRing,emissive:U.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),k=new C(new Ae(.1+M()*.08,.008,6,12),V);k.position.copy(F),k.rotation.set(M()*3,M()*3,M()*3),e.add(k)}const R=2+Math.floor(M()*2);for(let L=0;L<R;L++){const D=.2+L/R*.6,F=d.getPoint(D),V=new q({color:U.helixNode,emissive:U.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),k=new C(new $(.025+M()*.015,5,4),V);k.position.copy(F),e.add(k)}}const a=new q({color:U.helixStem,emissive:U.helixNode,emissiveIntensity:.06,roughness:.8}),u=2+Math.floor(M()*2);for(let c=0;c<u;c++){const l=c/u*6.28+M()*.5,h=.3+M()*.4,f=new C(new gt(.006,.015,h,3),a);f.position.set(Math.cos(l)*.12,h*.3,Math.sin(l)*.12),f.rotation.z=(l<3.14?.8:-.8)+M()*.3,f.rotation.y=l,e.add(f)}return e.position.set(i,0,t),ct.add(e),{group:e,podMats:r,phase:M()*6.28}}function eS(i,t){const e=new te,n=.25+M()*.1,s=new q({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const p=f/3*6.28+M()*.5,m=new C(new gt(.01,.035,.25+M()*.15,4),s);m.position.set(Math.cos(p)*n*.6,.06,Math.sin(p)*n*.6),m.rotation.z=p<3.14?1:-1,m.rotation.y=p,e.add(m)}const o=new q({color:U.snapBody,emissive:U.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new C(new $(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new q({color:1730116,emissive:U.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),u=new C(new Ae(n*.45,.02,6,12),a);u.position.y=n*1.7,u.rotation.x=Math.PI/2,e.add(u);const c=5+Math.floor(M()*3),l=[],h=[];for(let f=0;f<c;f++){const p=f/c*6.28+M()*.3,m=M()*6.28,x=3+Math.floor(M()*2),d=.2+M()*.1,g=[],S=new fe;S.position.set(Math.cos(p)*n*.6,n*1.4,Math.sin(p)*n*.6),S.rotation.y=p,e.add(S);let _=S;for(let T=0;T<x;T++){const b=T/x,y=.02*(1-b*.6),v=new q({color:U.snapFrond,emissive:U.snapBodyGlow,emissiveIntensity:.08+b*.15,roughness:.6}),R=new C(new gt(y*.7,y,d,4),v);R.position.y=T===0?0:d,R.geometry.translate(0,d/2,0),_.add(R),g.push(R),_=R}const w=new q({color:U.snapTip,emissive:U.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new C(new $(.025+M()*.015,5,4),w);A.position.y=d,_.add(A),h.push(w);const E=new C(new $(.06,4,3),new Z({color:U.snapTipGlow,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}));A.add(E),l.push({segments:g,baseAngle:p,phaseOffset:m,segLen:d})}return e.position.set(i,0,t),ct.add(e),{group:e,body:r,bodyMat:o,tipMats:h,fronds:l,phase:M()*6.28,x:i,z:t}}function nS(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const u=o.fronds[a],c=1.2+a%3*.3;for(let l=0;l<u.segments.length;l++){const h=u.segments[l],f=.15+l*.12,p=Math.sin(e*c+u.phaseOffset+l*.5)*f,m=Math.cos(e*c*.7+u.phaseOffset+l*.3)*f*.6;h.rotation.z=p,h.rotation.x=m}}for(let a=0;a<o.tipMats.length;a++){const u=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+u*.4)*n}}}function iS(i,t){const e=new te,n=1.2+M()*.8,s=3+Math.floor(M()*3),o=new q({color:U.spiralStem,roughness:.7,emissive:U.spiralFrond,emissiveIntensity:.06}),r=new C(new gt(.02,.05,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:1721392,emissive:662032,emissiveIntensity:.05,side:Ct});for(let l=0;l<3;l++){const h=M()*6.28,f=new C(new oe(.12,.2),a);f.position.set(Math.cos(h)*.1,n*.12,Math.sin(h)*.1),f.rotation.y=-h,f.rotation.x=-.7,e.add(f)}const u=[];for(let l=0;l<s;l++){const h=l/s*6.28+M()*.4,f=n*(.5+M()*.35),p=.15+M()*.15,m=1+M()*1.5,x=[],d=14;for(let y=0;y<=d;y++){const v=y/d,R=h+v*m*6.28,L=p*(.2+v*.8);x.push(new z(Math.cos(R)*L,n*.25+v*f,Math.sin(R)*L))}const g=new Js(x),S=new q({color:U.spiralFrond,emissive:U.spiralGlow,emissiveIntensity:.12,roughness:.5}),_=new C(new sn(g,16,.012+M()*.006,4,!1),S);e.add(_);const w=3+Math.floor(M()*2);for(let y=0;y<w;y++){const v=.2+y/w*.6,R=g.getPoint(v),L=new C(new oe(.04,.06),new q({color:U.spiralFrond,emissive:U.spiralGlow,emissiveIntensity:.08,side:Ct}));L.position.copy(R),L.rotation.set(M()*1.5,M()*3,M()*1.5),e.add(L)}const A=g.getPoint(1),E=new q({color:U.spiralTip,emissive:U.spiralGlow,emissiveIntensity:.6,transparent:!0,opacity:.7}),T=new C(new $(.025+M()*.015,5,4),E);T.position.copy(A),e.add(T),u.push(E);const b=new C(new $(.07,4,3),new Z({color:U.spiralGlow,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}));b.position.copy(A),e.add(b)}const c=new q({color:1714224,roughness:.85,emissive:660752,emissiveIntensity:.04});for(let l=0;l<3;l++){const h=l/3*6.28+M()*.5,f=new C(new gt(.006,.018,.15+M()*.1,3),c);f.position.set(Math.cos(h)*.06,.04,Math.sin(h)*.06),f.rotation.z=h<3.14?.8:-.8,f.rotation.y=h,e.add(f)}return e.position.set(i,0,t),ct.add(e),{group:e,tipMats:u,phase:M()*6.28,x:i,z:t}}function sS(i,t){const e=new te,n=1.5+M()*1,s=n*.7,o=.4+M()*.2,r=new q({color:U.corpseLeaf,roughness:.75,emissive:662026,emissiveIntensity:.05}),a=new C(new gt(.06,.1,n*.5,6),r);a.position.y=n*.25,e.add(a);const u=new q({color:U.corpseSpathe,emissive:2230800,emissiveIntensity:.08,transparent:!0,opacity:.85,roughness:.5,side:Ct}),c=new An(o,n*.5,8,1,!0),l=new C(c,u);l.position.y=n*.55,l.scale.set(1,1,1),e.add(l);const h=new q({color:U.corpseSpathe,emissive:U.corpseGlow,emissiveIntensity:.1,roughness:.4}),f=new C(new Ae(o*.95,.02,6,12),h);f.position.y=n*.8,f.rotation.x=Math.PI/2,e.add(f);const p=new q({color:U.corpseColumn,emissive:U.corpseGlow,emissiveIntensity:.5,transparent:!0,opacity:.8,roughness:.3}),m=new C(new gt(.03,.06,s,6),p);m.position.y=n*.4+s*.5,e.add(m);const x=new Z({color:U.corpseGlow,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}),d=new C(new $(o*1.2,6,4),x);d.position.y=n*.65,e.add(d);for(let y=0;y<5;y++){const v=M()*6.28,R=n*.45+M()*s*.6,L=new C(new $(.01,3,3),new q({color:U.corpseGlow,emissive:U.corpseGlow,emissiveIntensity:.3}));L.position.set(Math.cos(v)*.05,R,Math.sin(v)*.05),e.add(L)}const g=new Z({color:1118481,transparent:!0,opacity:.7}),S=[],_=3+Math.floor(M()*3),w=n*.7;for(let y=0;y<_;y++){const v=new C(new $(.008,3,3),g);v.position.set(0,w,0),e.add(v),S.push(v)}const A=new q({color:U.corpseLeaf,emissive:662024,emissiveIntensity:.04,side:Ct}),E=2+Math.floor(M()*2);for(let y=0;y<E;y++){const v=y/E*6.28+M()*.5,R=new C(new oe(.25+M()*.1,.35+M()*.1),A);R.position.set(Math.cos(v)*.18,n*.15,Math.sin(v)*.18),R.rotation.y=-v,R.rotation.x=-.6-M()*.3,e.add(R)}const T=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),b=new C(new $(.15,6,4),T);return b.scale.set(1.5,.4,1.5),b.position.y=.03,e.add(b),e.position.set(i,0,t),ct.add(e),{group:e,columnMat:p,hazeMat:x,flies:S,spadixY:w,phase:M()*6.28,x:i,z:t}}function oS(i,t){const e=new te,n=.3+M()*.15,s=.3+M()*.2,o=new q({color:U.orbBushLeaf,roughness:.8,emissive:662026,emissiveIntensity:.06}),r=5+Math.floor(M()*4);for(let f=0;f<r;f++){const p=M()*6.28,m=M()*n*.6,x=.1+M()*.08,d=new C(new $(x,5,4),o);d.scale.set(1.2,.6,1.2),d.position.set(Math.cos(p)*m,s*.4+M()*s*.3,Math.sin(p)*m),e.add(d)}const a=new q({color:U.orbBushStem,emissive:662026,emissiveIntensity:.04,side:Ct});for(let f=0;f<6;f++){const p=M()*6.28,m=n*.5+M()*n*.3,x=new C(new oe(.06,.08),a);x.position.set(Math.cos(p)*m,s*.3+M()*.15,Math.sin(p)*m),x.rotation.set(M()*.5,-p,M()*.3),e.add(x)}const u=[],c=6+Math.floor(M()*5),l=new q({color:U.orbBushStem,roughness:.7,emissive:U.orbBushGlow,emissiveIntensity:.05});for(let f=0;f<c;f++){const p=M()*6.28,m=M()*n*.7,x=s+.15+M()*.3,d=.02+M()*.015,g=x-s*.3,S=new C(new gt(.003,.005,g,3),l);S.position.set(Math.cos(p)*m,s*.3+g/2,Math.sin(p)*m),S.rotation.z=(M()-.5)*.3,S.rotation.x=(M()-.5)*.3,e.add(S);const _=new q({color:U.orbBushOrb,emissive:U.orbBushGlow,emissiveIntensity:.5+M()*.3,transparent:!0,opacity:.7,roughness:.2}),w=new C(new $(d,5,4),_);w.position.set(Math.cos(p)*m+(M()-.5)*.03,x,Math.sin(p)*m+(M()-.5)*.03),e.add(w),u.push(_);const A=new C(new $(d*2.5,4,3),new Z({color:U.orbBushGlow,transparent:!0,opacity:.03,blending:Qt,depthWrite:!1}));A.position.copy(w.position),e.add(A)}const h=new q({color:1712152,roughness:.9});for(let f=0;f<3;f++){const p=M()*6.28,m=n+M()*.1,x=new C(new $(.015,3,3),h);x.position.set(Math.cos(p)*m,.01,Math.sin(p)*m),x.scale.set(1,.4,1),e.add(x)}return e.position.set(i,0,t),ct.add(e),{group:e,orbMats:u,phase:M()*6.28,x:i,z:t}}function rS(i,t){const e=new te,n=2+Math.floor(M()*3),s=[],o=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),r=new C(new $(.1,5,4),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=new q({color:U.lanternStem,emissive:662024,emissiveIntensity:.04,side:Ct});for(let u=0;u<2;u++){const c=M()*6.28,l=new C(new oe(.1,.18),a);l.position.set(Math.cos(c)*.08,.08,Math.sin(c)*.08),l.rotation.y=-c,l.rotation.x=-.6,e.add(l)}for(let u=0;u<n;u++){const c=u/n*6.28+M()*.5,l=.8+M()*.8,h=.3+M()*.4,f=[],p=10;for(let v=0;v<=p;v++){const R=v/p,L=h*Math.sin(R*Math.PI*.7),D=R<.7?R/.7*l:l-(R-.7)/.3*l*.25;f.push(new z(Math.cos(c)*L,D,Math.sin(c)*L))}const m=new Js(f),x=new q({color:U.lanternStem,roughness:.7,emissive:U.lanternHaze,emissiveIntensity:.06}),d=new C(new sn(m,12,.008+M()*.004,4,!1),x);e.add(d);const g=m.getPoint(1),S=.06+M()*.04,_=new q({color:U.lanternPod,emissive:U.lanternGlow,emissiveIntensity:.5+M()*.3,transparent:!0,opacity:.5,roughness:.2,metalness:.1}),w=new C(new $(S,8,6),_);w.position.copy(g),w.position.y-=S*.3,e.add(w),s.push(_);const A=new q({color:16777164,emissive:U.lanternGlow,emissiveIntensity:1,transparent:!0,opacity:.5,roughness:0}),E=new C(new $(S*.4,5,4),A);E.position.copy(w.position),e.add(E);const T=new C(new $(S*2.5,5,4),new Z({color:U.lanternHaze,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}));T.position.copy(w.position),e.add(T);const b=new q({color:U.lanternStem,roughness:.6}),y=new C(new An(S*.5,S*.4,5),b);y.position.copy(g),y.rotation.x=Math.PI,e.add(y)}return e.position.set(i,0,t),ct.add(e),{group:e,podMats:s,phase:M()*6.28,x:i,z:t}}function aS(i,t){const e=new te,n=1+Math.floor(M()*2),s=[];for(let a=0;a<n;a++){const u=(a-(n-1)*.5)*.3,c=1+M()*.8,l=new q({color:U.veilSupport,roughness:.85,emissive:657928,emissiveIntensity:.03}),h=new C(new gt(.015,.03,c,4),l);h.position.set(u,c/2,0),e.add(h);const f=.2+M()*.15,p=new C(new gt(.008,.012,f,3),l);p.position.set(u,c*.9,0),p.rotation.z=Math.PI/2,e.add(p);const m=3+Math.floor(M()*3);for(let d=0;d<m;d++){const g=.08+M()*.06,S=c*(.3+M()*.4),_=(d-(m-1)*.5)*(f/m),w=new q({color:U.veilMoss,emissive:U.veilGlow,emissiveIntensity:.12+M()*.08,transparent:!0,opacity:.25+M()*.15,roughness:.6,side:Ct}),A=new C(new oe(g,S),w);A.position.set(u+_,c*.9-S*.5,(M()-.5)*.05),A.rotation.y=(M()-.5)*.4,e.add(A),s.push(A);const E=2+Math.floor(M()*2),T=new Z({color:U.veilEdge,transparent:!0,opacity:.4});for(let b=0;b<E;b++){const y=new C(new $(.006,3,3),T);y.position.set(u+_+(M()-.5)*g*.8,c*.9-S+M()*S*.15,(M()-.5)*.04),e.add(y)}}const x=new q({color:U.veilMoss,emissive:U.veilGlow,emissiveIntensity:.08,transparent:!0,opacity:.3});for(let d=0;d<3;d++){const g=c*(.2+M()*.5),S=M()*6.28,_=new C(new $(.015+M()*.01,4,3),x);_.scale.set(1.5,.5,1),_.position.set(u+Math.cos(S)*.025,g,Math.sin(S)*.025),e.add(_)}}const o=new q({color:2767400,roughness:.9,emissive:U.veilGlow,emissiveIntensity:.03}),r=new C(new $(.12,5,4),o);return r.scale.set(1.5,.3,1.5),r.position.y=.02,e.add(r),e.position.set(i,0,t),ct.add(e),{group:e,veilMats:s,phase:M()*6.28,x:i,z:t}}function cS(i,t,e){const n=new te,s=new q({color:U.jellyBell,emissive:U.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Ct}),o=new C(new $(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new q({color:U.jellyBell,emissive:U.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new C(new Ae(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const u=new C(new $(.2,6,4),new Z({color:U.jellyGlow,transparent:!0,opacity:.7}));u.position.y=-.05,n.add(u);const c=new Z({color:12312063,transparent:!0,opacity:.3});for(let S=-1;S<=1;S+=2){const _=new C(new $(.06,4,3),c);_.scale.set(.6,1.5,.6),_.position.set(S*.08,-.03,0),n.add(_)}const l=new Z({color:15663103,transparent:!0,opacity:.7});for(let S=0;S<5;S++){const _=M()*6.28,w=M()*.8,A=new C(new $(.02,3,3),l);A.position.set(Math.cos(_)*w*.35,.1-w*.15,Math.sin(_)*w*.35),n.add(A)}const h=new q({color:U.jellyTent,emissive:U.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new Z({color:U.jellyGlow,transparent:!0,opacity:.6});for(let S=0;S<6;S++){const _=S/6*6.28,w=.4+M()*.6,A=new C(new gt(.015,.008,w,3),h);A.position.set(Math.cos(_)*.25,-w/2-.05,Math.sin(_)*.25),n.add(A);const E=new C(new $(.012,3,3),f);E.position.set(Math.cos(_)*.25,-w-.06,Math.sin(_)*.25),n.add(E)}const p=new Z({color:U.jellyGlow,transparent:!0,opacity:.12});for(let S=0;S<8;S++){const _=S/8*6.28,w=new C(new gt(.002,.002,.4,3),p);w.position.set(Math.cos(_)*.2,.05,Math.sin(_)*.2),w.rotation.z=Math.PI/2-.3,w.rotation.y=-_,n.add(w)}const m=new q({color:U.jellyBell,emissive:U.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let S=0;S<10;S++){const _=S/10*6.28,w=new C(new $(.02,3,3),m);w.scale.set(1,.5,.8),w.position.set(Math.cos(_)*.46,-.04,Math.sin(_)*.46),n.add(w)}const x=new q({color:U.jellyTent,emissive:U.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),d=new C(new gt(.02,.01,.35,4),x);d.position.y=-.2,n.add(d);const g=new Z({color:14548991,transparent:!0,opacity:.4});for(let S=0;S<3;S++){const _=S/3*6.28,w=new C(new $(.008,3,3),g);w.position.set(Math.cos(_)*.25,-.55-M()*.3,Math.sin(_)*.25),n.add(w)}return n.position.set(i,t,e),ct.add(n),{group:n,bellMat:s,phase:M()*6.28,driftAng:M()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+M()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function lS(i,t){const e=new te,n=new q({color:U.puffBody,emissive:U.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new C(new $(.3,8,6),n);s.position.y=.35,e.add(s);const o=new q({color:16773344,emissive:U.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new C(new $(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new C(new $(.22,7,5),n);a.position.y=.65,e.add(a);const u=[];for(let y=-1;y<=1;y+=2){const v=new C(new An(.06,.15,4),n);v.position.set(y*.13,.85,0),v.rotation.z=y*.3,e.add(v),u.push({mesh:v,side:y,baseRotZ:y*.3});const R=new C(new An(.03,.08,4),new q({color:U.puffCheek,emissive:U.puffCheek,emissiveIntensity:.2}));R.position.set(y*.13,.84,.01),R.rotation.z=y*.3,e.add(R),u.push({mesh:R,side:y,baseRotZ:y*.3})}const c=new Z({color:U.puffEye}),l=[];for(let y=-1;y<=1;y+=2){const v=new C(new $(.035,4,4),c);v.position.set(y*.09,.68,.18),e.add(v),l.push(v);const R=new Z({color:16777215}),L=new C(new $(.012,3,3),R);L.position.set(y*.09+y*.015,.695,.2),e.add(L),l.push(L)}const h=new Z({color:4469555}),f=new C(new $(.015,3,3),h);f.position.set(0,.63,.22),e.add(f);const p=new q({color:U.puffCheek,emissive:U.puffCheek,emissiveIntensity:.3});for(let y=-1;y<=1;y+=2){const v=new C(new $(.04,4,3),p);v.position.set(y*.15,.61,.15),e.add(v)}const m=new Z({color:15654348,transparent:!0,opacity:.5});for(let y=-1;y<=1;y+=2)for(let v=0;v<2;v++){const R=new C(new gt(.002,.002,.06,3),m);R.position.set(y*.12,.62-v*.03,.2),R.rotation.z=y*.7+v*y*.2,R.rotation.x=-.1,e.add(R)}for(let y=-1;y<=1;y+=2){const v=new C(new $(.07,4,3),n);v.position.set(y*.12,.07,.05),v.scale.set(1,.5,1.3),e.add(v);const R=new q({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let L=0;L<3;L++){const D=L/3*6.28,F=new C(new $(.012,3,3),R);F.position.set(y*.12+Math.cos(D)*.03,.03,.05+Math.sin(D)*.03),e.add(F)}}const x=new q({color:16777215,emissive:U.puffGlow,emissiveIntensity:.4,roughness:.9}),d=new C(new $(.06,5,4),x);d.position.set(0,.38,-.28),e.add(d);const g=new q({color:U.puffBody,emissive:U.puffGlow,emissiveIntensity:.2,roughness:1});for(let y=0;y<6;y++){const v=M()*6.28,R=M()*1.2,L=new C(new $(.01,3,3),g);L.position.set(Math.cos(v)*.28,.25+R*.2,Math.sin(v)*.28),e.add(L)}const S=new Z({color:U.puffBody});for(let y=-1;y<=1;y+=2){const v=new C(new gt(.003,.003,.04,3),S);v.position.set(y*.09,.72,.17),v.rotation.z=y*.3,e.add(v)}const _=new Z({color:5583684,transparent:!0,opacity:.5}),w=new C(new gt(.002,.002,.03,3),_);w.position.set(0,.59,.22),w.rotation.z=Math.PI/2,e.add(w);const A=new Z({color:16777215,transparent:!0,opacity:.6}),E=[];for(let y=0;y<3;y++){const v=new C(new $(.01,3,3),A.clone());v.position.set(0,.5,0),e.add(v),E.push({mesh:v,mat:v.material,phase:M()*6.28,orbitR:.28+M()*.1})}const T=new Z({color:U.puffGlow,transparent:!0,opacity:.15,side:Ct});for(let y=0;y<4;y++){const v=M()*6.28,R=(M()-.5)*.4,L=new C(new Oe(.02+M()*.012,5),T);L.position.set(Math.cos(v)*.27,.35+R*.15,Math.sin(v)*.27),L.lookAt(0,.35,0),e.add(L)}let b=null;if(M()<.4){b=new q({color:U.flower,emissive:U.flowerGlow,emissiveIntensity:.3});for(let v=0;v<3;v++){const R=v/3*6.28,L=new C(new An(.015,.03,3),b);L.position.set(Math.cos(R)*.035,.88,Math.sin(R)*.035),L.rotation.z=-Math.cos(R)*.5,L.rotation.x=Math.sin(R)*.5,e.add(L)}const y=new C(new $(.01,3,3),new q({color:16772676,emissive:16768290,emissiveIntensity:.4}));y.position.set(0,.89,0),e.add(y)}return e.position.set(i,0,t),ct.add(e),{group:e,ears:u,eyes:l,tail:d,sparkles:E,crownMat:b,phase:M()*6.28,wanderAng:M()*6.28,speed:.6+M()*.8,hopTimer:0,hopPhase:M()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:M()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:i,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function uS(i,t){const e=new te,n=new q({color:U.deerBody,emissive:U.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),s=new C(new $(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new q({color:13431039,emissive:U.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new C(new $(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new te;a.position.set(0,1.15,.3);const u=new C(new gt(.08,.12,.4,5),n);u.position.set(0,.1,.08),u.rotation.x=-.4,a.add(u);const c=new C(new $(.14,6,5),n);c.position.set(0,.22,.2),a.add(c);const l=new C(new $(.07,4,3),n);l.scale.set(1,.7,1.4),l.position.set(0,.17,.35),a.add(l);const h=new Z({color:2245717}),f=new C(new $(.02,3,3),h);f.position.set(0,.17,.43),a.add(f);const p=new Z({color:U.deerEye});for(let O=-1;O<=1;O+=2){const B=new C(new $(.025,4,3),p);B.position.set(O*.09,.25,.28),a.add(B);const it=new C(new $(.008,3,3),new Z({color:16777215}));it.position.set(O*.085,.26,.29),a.add(it);const ut=new Z({color:U.deerBody,transparent:!0,opacity:.5}),ft=new C(new gt(.002,.002,.03,3),ut);ft.position.set(O*.1,.27,.28),ft.rotation.z=O*.6,a.add(ft)}for(let O=-1;O<=1;O+=2){const B=new C(new An(.04,.14,4),n);B.position.set(O*.1,.37,.15),B.rotation.z=O*.4,a.add(B)}const m=new q({color:U.deerAntler,emissive:U.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let O=-1;O<=1;O+=2){const B=new C(new gt(.015,.02,.25,3),m);B.position.set(O*.08,.42,.12),B.rotation.z=O*.5,a.add(B);const it=new C(new gt(.01,.015,.15,3),m);it.position.set(O*.15,.55,.1),it.rotation.z=O*.8,a.add(it);const ut=new C(new gt(.008,.012,.1,3),m);ut.position.set(O*.11,.5,.16),ut.rotation.z=O*.3,ut.rotation.x=-.5,a.add(ut);const ft=new C(new $(.012,3,3),new Z({color:U.deerGlow,transparent:!0,opacity:.8}));ft.position.set(O*.18,.61,.09),a.add(ft)}const x=new q({color:U.deerBody,emissive:U.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),d=new C(new gt(.01,.02,.1,3),x);d.position.set(0,.11,.28),d.rotation.x=.3,a.add(d);const g=new Z({color:1122850});for(let O=-1;O<=1;O+=2){const B=new C(new $(.006,3,3),g);B.position.set(O*.02,.16,.42),a.add(B)}e.add(a);const S=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],_=new q({color:6715272,emissive:U.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),w=[];for(let O=0;O<4;O++){const B=S[O],it=new te;it.position.set(B.x,.65,B.z);const ut=new C(new gt(.025,.035,.35,4),n);ut.position.y=-.175,it.add(ut);const ft=new te;ft.position.set(0,-.35,0);const Pt=new C(new gt(.02,.03,.3,4),n);Pt.position.y=-.15,ft.add(Pt);const Wt=new C(new gt(.04,.032,.04,4),_);Wt.position.y=-.3,ft.add(Wt);const et=new q({color:14544639,emissive:U.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),lt=new C(new $(.025,3,3),et);lt.scale.set(1.3,.5,1.3),lt.position.y=-.25,ft.add(lt),it.add(ft),e.add(it),w.push({upper:it,lower:ft,isFront:O<2,side:B.x<0?-1:1})}const A=new te;A.position.set(0,1.1,-.55);const E=new C(new An(.05,.15,4),new q({color:16777215,emissive:U.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const T=new Z({color:13434862,transparent:!0,opacity:.3});for(let O=0;O<4;O++){const B=new C(new $(.02,3,3),T);B.position.set((M()-.5)*.25,.8+M()*.3,(M()-.5)*.4),e.add(B)}const b=new Z({color:U.deerBody,transparent:!0,opacity:.15});for(let O=0;O<3;O++){const B=new C(new gt(.002,.002,.2,3),b);B.position.set(.3,.85-O*.06,0),B.rotation.z=Math.PI/2+.3,e.add(B)}const y=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let O=0;O<3;O++){const B=new C(new $(.008,3,3),y);B.position.set((M()-.5)*.3,.9+M()*.3,(M()-.5)*.35),e.add(B)}const v=new q({color:14544639,emissive:U.deerGlow,emissiveIntensity:.4,transparent:!0,opacity:.3,side:Ct}),R=[];for(let O=0;O<5;O++){const B=new C(new oe(.05,.08+M()*.04),v);B.position.set(0,.1+O*.055,.04-O*.015),B.rotation.x=-.2+M()*.15,B.rotation.z=(M()-.5)*.25,a.add(B),R.push(B)}const L=new Z({color:U.deerGlow,transparent:!0,opacity:.5}),D=[];for(let O=-1;O<=1;O+=2){const B=new C(new $(.012,3,3),L.clone());B.position.set(O*.1,.47,.11),a.add(B),D.push(B);const it=new C(new $(.01,3,3),L.clone());it.position.set(O*.14,.53,.12),a.add(it),D.push(it)}const F=new Z({color:U.deerGlow,transparent:!0,opacity:.08,blending:Qt,depthWrite:!1}),V=[];for(let O=0;O<3;O++){const B=new C(new $(.06-O*.012,4,3),F.clone());B.position.set(0,.8,-.6-O*.35),ct.add(B),V.push({mesh:B,mat:B.material,prevX:i,prevY:0,prevZ:t})}const k=new Z({color:U.deerGlow,transparent:!0,opacity:.2,side:Ct});for(let O=0;O<3;O++){M()*6.28;const B=new C(new Oe(.03+M()*.015,5),k);B.position.set((O===1?-1:1)*.32,.8+M()*.25,(M()-.5)*.3),B.rotation.y=(O===1?-1:1)*Math.PI/2,e.add(B)}return e.position.set(i,0,t),ct.add(e),{group:e,mat:n,manePlanes:R,branchOrbs:D,trailSpheres:V,phase:M()*6.28,wanderAng:M()*6.28,speed:.6+M()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:w,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:i,_lastTZ:t}}function hS(i,t,e){const n=new te,s=new q({color:U.mothBody,emissive:U.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new C(new gt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new q({color:U.mothBody,emissive:U.mothGlow,emissiveIntensity:.5,roughness:.6});for(let d=0;d<3;d++){const g=new C(new Ae(.045,.006,4,8),r);g.position.z=-.05+d*.06,g.rotation.x=0,n.add(g)}const a=new C(new $(.05,5,4),s);a.position.z=.18,n.add(a);const u=new q({color:1122867,roughness:.2,metalness:.4});for(let d=-1;d<=1;d+=2){const g=new C(new $(.018,4,3),u);g.position.set(d*.03,.01,.21),n.add(g)}for(let d=-1;d<=1;d+=2){const g=new C(new gt(.005,.005,.15,3),s);g.position.set(d*.03,.03,.22),g.rotation.x=-.6,g.rotation.z=d*.4,n.add(g);const S=new Z({color:U.mothGlow,transparent:!0,opacity:.7}),_=new C(new $(.015,3,3),S);_.scale.set(2,.5,1),_.position.set(d*.05,.12,.28),n.add(_)}const c=new q({color:U.mothWing,emissive:U.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Ct,roughness:.4});n._wingPivots=[];for(let d=-1;d<=1;d+=2){const g=new te;g.position.set(d*.04,0,.02);const S=new C(new $(.2,6,4),c);S.scale.set(1.8,.08,1.2),S.position.set(d*.18,0,.02),g.add(S);const _=new C(new $(.12,5,3),c);_.scale.set(1.5,.06,1),_.position.set(d*.12,0,-.1),g.add(_);const w=new q({color:U.mothWing,emissive:U.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Ct}),A=new C(new oe(.03,.12),w);A.position.set(d*.1,0,-.18),A.rotation.y=d*.2,g.add(A);const E=new Z({color:U.mothSpot,transparent:!0,opacity:.9}),T=new C(new $(.03,4,3),E);T.position.set(d*.2,.02,.03),g.add(T);const b=new C(new $(.018,3,3),E);b.position.set(d*.1,.02,-.08),g.add(b);const y=new Z({color:U.mothGlow,transparent:!0,opacity:.25});for(let v=0;v<2;v++){const R=new C(new gt(.002,.002,.2,3),y);R.position.set(d*.15,.01,-.02+v*.06),R.rotation.z=Math.PI/2+d*(.15+v*.15),g.add(R)}n.add(g),n._wingPivots.push({pivot:g,side:d})}const l=new Z({color:U.mothGlow,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new C(new $(.008,3,3),l);g.position.set((M()-.5)*.04,0,-.15-d*.05),n.add(g)}const h=new Z({color:4473907,transparent:!0,opacity:.5}),f=new C(new Ae(.015,.003,4,8,Math.PI*1.5),h);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const p=new q({color:U.mothBody,emissive:U.mothGlow,emissiveIntensity:.4,roughness:1});for(let d=0;d<5;d++){const g=M()*6.28,S=new C(new $(.008,3,3),p);S.position.set(Math.cos(g)*.04,Math.sin(g)*.04,M()*.15-.05),n.add(S)}const m=new Z({color:U.mothBody,transparent:!0,opacity:.4});for(let d=-1;d<=1;d+=2)for(let g=0;g<3;g++){const S=new C(new gt(.002,.002,.06,3),m);S.position.set(d*.04,-.03,-.05+g*.06),S.rotation.z=d*.8,S.rotation.x=-.3,n.add(S)}const x=new Z({color:U.mothGlow,transparent:!0,opacity:.35});for(let d=-1;d<=1;d+=2)for(let g=0;g<5;g++){const S=g/5*Math.PI-Math.PI/2,_=new C(new $(.006,3,3),x);_.position.set(d*(.3+Math.cos(S)*.05),Math.sin(S)*.02,.02+g*.04),n.add(_)}return n.position.set(i,t,e),ct.add(n),{group:n,wingMat:c,phase:M()*6.28,orbitAng:M()*6.28,orbitR:2+M()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+M()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function fS(i,t,e){const n=new te,s=new Z({color:U.wispCore}),o=new C(new $(.08,6,4),s);n.add(o);const r=new Z({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new C(new or(.06,0),r);n.add(a);const u=new Z({color:U.wispGlow,transparent:!0,opacity:.5}),c=new C(new $(.18,6,4),u);n.add(c);const l=new Z({color:U.wispGlow,transparent:!0,opacity:.25}),h=new C(new Ae(.22,.008,4,12),l);h.rotation.x=Math.PI/2,n.add(h);const f=new Z({color:U.wispTrail,transparent:!0,opacity:.15}),p=new C(new $(.35,5,4),f);n.add(p);const m=new Z({color:16777215,transparent:!0,opacity:.8}),x=new C(new $(.02,3,3),m);x.position.set(.15,0,0),n.add(x);const d=[];for(let T=0;T<3;T++){const b=new Z({color:U.wispCore,transparent:!0,opacity:.35}),y=new C(new $(.01,3,3),b);y.position.set((M()-.5)*.1,-.1-T*.08,(M()-.5)*.1),n.add(y),d.push(y)}const g=new Z({color:U.wispGlow,transparent:!0,opacity:.18}),S=[];for(let T=0;T<3;T++){const b=T/3*6.28+M()*.5,y=.15+M()*.1,v=new C(new gt(.003,.001,y,3),g);v.position.set(Math.cos(b)*.1,M()*.08,Math.sin(b)*.1),v.rotation.z=Math.PI/3*(b<3.14?1:-1),v.rotation.y=b,n.add(v),S.push({mesh:v,baseAng:b})}const _=new Z({color:U.wispGlow,transparent:!0,opacity:.12}),w=new C(new Ae(.26,.005,4,10),_);w.rotation.x=1.2,w.rotation.z=.8,n.add(w);const A=new Z({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<4;T++){const b=M()*6.28,y=M()*.8,v=new C(new $(.006,3,3),A);v.position.set(Math.cos(b)*.06,Math.sin(y)*.06,Math.sin(b)*.06),n.add(v)}const E=new Z({color:U.wispCore,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const b=new C(new $(.004,3,3),E);b.position.set(.03+M()*.04,-.05-T*.04,M()*.04),n.add(b)}return n.scale.setScalar(.5),n.position.set(i,t,e),ct.add(n),{group:n,glowMat:u,hazeMat:f,embers:d,tendrils:S,plasmaMat:g,facet:a,halo:h,halo2:w,phase:M()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function dS(i,t){const e=new te,n=uh,s=8+Math.floor(M()*5),o=new q({color:U.fairyMush,emissive:U.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new q({color:U.mushStem,roughness:.7,emissive:U.fairyGlow,emissiveIntensity:.05});for(let A=0;A<s;A++){const E=A/s*6.28+M()*.15,T=n+M()*.3-.15,b=.15+M()*.2,y=new C(Ln.mushStem,r);y.scale.setScalar(b),y.position.set(Math.cos(E)*T,b*.3,Math.sin(E)*T),e.add(y);const v=new C(Ln.mushCap,o);v.scale.set(b,b*.4,b),v.position.set(Math.cos(E)*T,b*.55,Math.sin(E)*T),e.add(v);const R=new Z({color:16777215,transparent:!0,opacity:.7}),L=new C(new $(b*.08,3,3),R);L.position.set(Math.cos(E)*T,b*.6,Math.sin(E)*T),e.add(L)}const a=new q({color:8934792,emissive:U.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=M()*6.28,T=n+M()*.6-.3,b=.06+M()*.06,y=new C(Ln.mushCap,a);y.scale.set(b,b*.5,b),y.position.set(Math.cos(E)*T,b*.35,Math.sin(E)*T),e.add(y)}const u=new q({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=M()*6.28,T=M()*n*.8,b=new C(new $(.08+M()*.08,4,3),u);b.scale.set(1.5,.2,1.5),b.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(b)}const c=new q({color:4478310,emissive:U.fairyGlow,emissiveIntensity:.05,roughness:.85}),l=new C(new $(.12,5,3),c);l.scale.set(1.2,.3,1),l.position.y=.03,e.add(l);const h=new Z({color:U.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let A=0;A<8;A++){const E=new C(new $(.012,3,3),h),T=(M()-.5)*n*.8,b=(M()-.5)*n*.8;E.position.set(T,.05+M()*.3,b),e.add(E),f.push({mesh:E,baseX:T,baseZ:b,drift:M()*6.28,speed:.2+M()*.3})}const p=new Z({color:U.fairyRing,transparent:!0,opacity:0,side:Ct}),m=new C(new rr(.3,n-.3,16),p);m.rotation.x=-Math.PI/2,m.position.y=.02,e.add(m);const x=new Z({color:U.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=M()*6.28,T=E+.5+M()*1.5,b=n*.6+M()*n*.4,y=new C(new gt(.002,.002,b,3),x);y.position.set(Math.cos((E+T)/2)*n*.4,.005,Math.sin((E+T)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const d=new q({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=M()*6.28,T=M()*n*.7,b=new C(new $(.03,4,3),d);b.scale.set(1.3,.3,1.3),b.position.set(Math.cos(E)*T,.008,Math.sin(E)*T),e.add(b)}const g=new q({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new C(new Oe(.02+M()*.02,4),g);E.position.set((M()-.5)*.08,.06,(M()-.5)*.06),E.rotation.x=-Math.PI/2+M()*.4,e.add(E)}const S=[];for(let A=0;A<5;A++){const E=M()*6.28,T=M()*n*.9,b=new Z({color:8978346,transparent:!0,opacity:.25}),y=new C(new $(.005,3,3),b);y.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(y),S.push(y)}const _=new Z({color:657926,transparent:!0,opacity:.15,side:Ct}),w=new C(new rr(n*.5,n*.85,12),_);return w.rotation.x=-Math.PI/2,w.position.y=.008,e.add(w),e.position.set(i,0,t),ct.add(e),{group:e,mushMat:o,discMat:p,sporeMat:h,spores:f,glowWorms:S,x:i,z:t,ringR:n,phase:M()*6.28,glowIntensity:0,active:!1}}function pS(i,t,e){const n=new te,s=new q({color:U.bubbleIris,emissive:U.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new C(Ln.bubble,s);n.add(o);const r=new Z({color:15650047,transparent:!0,opacity:.1}),a=new C(new Ae(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=M()*3,n.add(a);const u=new C(new Ae(.11,.003,4,10),r);u.rotation.x=-.8,u.rotation.z=1.2,n.add(u);const c=new Z({color:U.bubbleShine,transparent:!0,opacity:.5}),l=new C(new $(.04,4,3),c);l.position.set(.05,.07,.08),n.add(l);const h=new Z({color:15658751,transparent:!0,opacity:.2}),f=new C(new $(.025,3,3),h);f.position.set(-.06,-.04,-.06),n.add(f);const p=new Z({color:16755438,transparent:!0,opacity:.12}),m=new C(new $(.06,4,3),p);m.position.set(.02,-.02,.01),n.add(m);const x=new Z({color:16772863,transparent:!0,opacity:.08}),d=new C(new $(.12,5,4),x);n.add(d);const g=[16764125,13426175,14548940];for(let b=0;b<3;b++){const y=new Z({color:g[b],transparent:!0,opacity:.06}),v=new C(new Ae(.14-b*.02,.002,4,8),y);v.position.y=-.04+b*.04,v.rotation.x=Math.PI/2,n.add(v)}const S=new Z({color:16777215,transparent:!0,opacity:.6});for(let b=0;b<3;b++){const y=M()*6.28,v=M()*Math.PI-Math.PI/2,R=new C(new $(.003,3,3),S);R.position.set(Math.cos(y)*Math.cos(v)*.14,Math.sin(v)*.14,Math.sin(y)*Math.cos(v)*.14),n.add(R)}const _=new Z({color:11189196,transparent:!0,opacity:.1}),w=new C(new $(.015,3,3),_);w.position.set((M()-.5)*.04,(M()-.5)*.04,(M()-.5)*.04),n.add(w);const A=new Z({color:U.bubbleIris,transparent:!0,opacity:.15}),E=new C(new $(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const T=.6+M()*.8;return n.scale.setScalar(T),n.position.set(i,t,e),ct.add(n),{group:n,shellMat:s,phase:M()*6.28,driftAng:M()*6.28,driftSpeed:.3+M()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+M()*.4,popped:!1,popTimer:0,sc:T}}function mS(i,t){const e=new te,n=1.5+M()*1,s=new q({color:329746,roughness:.9}),o=new C(new Oe(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new q({color:U.pondWater,emissive:U.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new C(new Oe(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const u=new q({color:3816002,roughness:.85}),c=5+Math.floor(M()*4);for(let D=0;D<c;D++){const F=D/c*6.28+M()*.3,V=n+M()*.2-.1,k=.06+M()*.08,O=new C(new $(k,4,3),u);O.scale.set(1+M()*.5,.4+M()*.3,1+M()*.5),O.position.set(Math.cos(F)*V,k*.2,Math.sin(F)*V),O.rotation.set(M(),M(),M()),e.add(O)}const l=new q({color:1725728,roughness:.7,side:Ct});for(let D=0;D<3;D++){const F=M()*6.28,V=n*.85+M()*.2;for(let k=0;k<3;k++){const O=new C(new oe(.015,.15+M()*.1),l);O.position.set(Math.cos(F)*V+(M()-.5)*.05,.08,Math.sin(F)*V+(M()-.5)*.05),O.rotation.y=M()*3,O.rotation.x=-.2,e.add(O)}}const h=new Z({color:11197934,transparent:!0,opacity:.08}),f=[];for(let D=0;D<3;D++){const F=new C(new Ae(1,.004,4,20),h.clone());F.rotation.x=Math.PI/2,F.position.y=.036,e.add(F),f.push({mesh:F,phase:D/3})}const p=new q({color:U.lilyPad,roughness:.6,side:Ct}),m=4+Math.floor(M()*2),x=[];for(let D=0;D<m;D++){const F=M()*6.28,V=M()*n*.6,k=.15+M()*.15,O=new C(new Oe(k,8),p);O.rotation.x=-Math.PI/2,O.position.set(Math.cos(F)*V,.05,Math.sin(F)*V),e.add(O);const B=new Z({color:1724448,transparent:!0,opacity:.3}),it=new C(new gt(.002,.002,k*1.5,3),B);it.position.set(Math.cos(F)*V,.052,Math.sin(F)*V),it.rotation.x=Math.PI/2,it.rotation.z=M()*3,e.add(it),x.push({mesh:O,phase:M()*6.28})}const d=new q({color:U.lilyFlower,emissive:U.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Ct}),g=.08;for(let D=0;D<6;D++){const F=D/6*6.28,V=new C(new oe(.06,.05),d);V.position.set(x[0].mesh.position.x+Math.cos(F)*.05,g,x[0].mesh.position.z+Math.sin(F)*.05),V.rotation.x=-1,V.rotation.y=-F,e.add(V)}const S=new q({color:16777130,emissive:U.lilyGlow,emissiveIntensity:.8}),_=new C(new $(.025,4,3),S);if(_.position.set(x[0].mesh.position.x,g+.02,x[0].mesh.position.z),e.add(_),x.length>2){const D=new q({color:U.lilyFlower,emissive:U.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),F=new C(new $(.03,5,4),D);F.scale.set(.8,1.2,.8),F.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(F)}const w=new q({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const F=M()*6.28,V=M()*n*.7,k=new C(new $(.02+M()*.025,4,3),w);k.scale.set(1+M()*.5,.4,1+M()*.5),k.position.set(Math.cos(F)*V,.015,Math.sin(F)*V),e.add(k)}const A=new Z({color:2761752,transparent:!0,opacity:.12,side:Ct});for(let D=0;D<3;D++){const F=M()*6.28,V=M()*n*.5,k=new C(new Oe(.08+M()*.06,5),A);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(F)*V,.012,Math.sin(F)*V),e.add(k)}const E=new q({color:1122837,roughness:.7,transparent:!0,opacity:.4}),T=[];for(let D=0;D<2;D++){const F=M()*6.28,V=M()*n*.4,k=new C(new $(.012,4,3),E);k.scale.set(.8,.5,1.3),k.position.set(Math.cos(F)*V,.04,Math.sin(F)*V),e.add(k);const O=new C(new gt(.002,.001,.025,3),E);O.position.set(Math.cos(F)*V-Math.cos(F)*.02,.04,Math.sin(F)*V-Math.sin(F)*.02),O.rotation.z=Math.PI/2,O.rotation.y=F,e.add(O),T.push({body:k,tail:O,ang:F,orbR:.15+M()*n*.35,speed:.3+M()*.4})}const b=new Z({color:2250016,transparent:!0,opacity:.1,side:Ct});for(let D=0;D<3;D++){const F=M()*6.28,V=n*.7+M()*n*.25,k=new C(new Oe(.06+M()*.04,5),b);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(F)*V,.032,Math.sin(F)*V),e.add(k)}const y=new Z({color:13426158,transparent:!0,opacity:.06}),v=new C(new Ae(n-.05,.01,4,16),y);v.rotation.x=Math.PI/2,v.position.y=.035,e.add(v);const R=new q({color:4861976,roughness:.8,side:Ct,transparent:!0,opacity:.6}),L=new C(new Oe(.03,5),R);return L.rotation.x=-Math.PI/2,L.position.set((M()-.5)*n*.5,.04,(M()-.5)*n*.5),e.add(L),e.position.set(i,0,t),ct.add(e),{group:e,waterMat:r,flMat:d,pads:x,ripples:f,tadpoles:T,x:i,z:t,phase:M()*6.28,pondR:n}}function gS(i,t){const e=new te,n=new Z({color:U.orbGold}),s=new C(new $(.2,10,8),n);e.add(s);const o=new Z({color:16777215}),r=new C(new $(.06,6,4),o);e.add(r);const a=new Z({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),u=new C(new or(.15,0),a);e.add(u);const c=new Z({color:U.orbGlow,transparent:!0,opacity:.5}),l=new C(new $(.35,8,6),c);e.add(l);const h=new Z({color:U.orbGlow,transparent:!0,opacity:.3});for(let T=0;T<8;T++){const b=T/8*6.28,y=new C(new An(.02,.25,3),h);y.position.set(Math.cos(b)*.3,Math.sin(b*2)*.05,Math.sin(b)*.3),y.rotation.z=-b+Math.PI/2,y.rotation.y=b,e.add(y)}const f=new Z({color:U.orbInner,transparent:!0,opacity:.15}),p=new C(new $(.6,8,5),f);e.add(p);for(let T=0;T<6;T++){const b=new C(new $(.03,4,3),new Z({color:16777215})),y=T/6*6.28;b.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(b)}const m=new Z({color:U.orbGold,transparent:!0,opacity:.7});for(let T=0;T<4;T++){const b=T/4*6.28+.4,y=new C(new $(.015,3,3),m);y.position.set(Math.cos(b)*.5,0,Math.sin(b)*.5),e.add(y)}const x=new Z({color:16768426,transparent:!0,opacity:.12});for(let T=0;T<3;T++){const b=new C(new Ae(.28,.003,4,12),x);b.rotation.set(T*1.05,T*.7,0),e.add(b)}const d=new Z({color:U.orbGlow,transparent:!0,opacity:.08}),g=new C(new Ae(.4,.004,4,16),d);g.rotation.x=Math.PI/2,e.add(g);const S=new Z({color:16772812,transparent:!0,opacity:.15}),_=new C(new Ae(.25,.012,4,10),S);_.rotation.x=Math.PI/2,e.add(_);const w=new Z({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<6;T++){const b=M()*6.28,y=M()*Math.PI-Math.PI/2,v=new C(new $(.008,3,3),w);v.position.set(Math.cos(b)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(b)*Math.cos(y)*.2),e.add(v)}const A=new Z({color:U.orbGlow,transparent:!0,opacity:.1,side:Ct}),E=new C(new Oe(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),ct.add(e),{group:e,coreMat:n,glowMat:c,hazeMat:f,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:M()*6.28,laserLine:null,laserMat:null}}function xS(i,t){const e=new te,n=new q({color:U.rockBase,roughness:.85,metalness:.05}),s=new q({color:U.rockLight,roughness:.8,metalness:.05}),o=new q({color:U.rockMoss,emissive:U.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+M()*.5,a=new C(new $(r,8,6),M()<.6?n:s),u=.4+M()*.4;a.scale.set(1+M()*.6,u,1+M()*.6),a.position.y=r*u*.35,a.rotation.set(M()*.5,M()*3,M()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=1+Math.floor(M()*3);for(let E=0;E<c;E++){const T=M()*6.28,b=r*.6+M()*r*.5,y=r*.3+M()*r*.4,v=new C(new $(y,5,4),M()<.5?n:s),R=.3+M()*.4;v.scale.set(1+M()*.5,R,1+M()*.5),v.position.set(Math.cos(T)*b,y*R*.3,Math.sin(T)*b),v.rotation.set(M()*.8,M()*3,M()*.5),e.add(v)}const l=2+Math.floor(M()*3);for(let E=0;E<l;E++){const T=M()*6.28,b=M()*r*.6,y=r*.15+M()*r*.2,v=new C(new $(y,4,3),o);v.scale.set(1.5,.2,1.5),v.position.set(Math.cos(T)*b,r*.35+M()*.05,Math.sin(T)*b),e.add(v)}const h=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const T=new q({color:h[Math.floor(M()*h.length)],roughness:.9,transparent:!0,opacity:.5}),b=M()*6.28,y=new C(new $(r*.06+M()*r*.08,3,3),T);y.scale.set(2,.15,2),y.position.set(Math.cos(b)*r*.5,r*.25+M()*.1,Math.sin(b)*r*.5),e.add(y)}const f=new Z({color:1381656,transparent:!0,opacity:.35}),p=2+Math.floor(M()*3);for(let E=0;E<p;E++){const T=M()*6.28,b=r*.3+M()*r*.4,y=new C(new gt(.003,.001,b,3),f),v=r*.3+M()*r*.2;y.position.set(Math.cos(T)*v,r*.2+M()*r*.15,Math.sin(T)*v),y.rotation.set(M()*.5,T,Math.PI/2+M()*.4),e.add(y)}const m=new Z({color:660752,transparent:!0,opacity:.2,side:Ct}),x=1+Math.floor(M()*2);for(let E=0;E<x;E++){const T=M()*6.28,b=r*.3+M()*r*.3,y=new C(new oe(.02+M()*.015,b),m);y.position.set(Math.cos(T)*r*.45,r*.15,Math.sin(T)*r*.45),y.rotation.y=-T,e.add(y)}const d=[],g=new Z({color:8965375,transparent:!0,opacity:.4});if(M()<.5){const E=2+Math.floor(M()*3);for(let T=0;T<E;T++){const b=M()*6.28,y=r*.25+M()*r*.25,v=new C(new $(.006,3,3),g);v.position.set(Math.cos(b)*y,r*.15+M()*r*.2,Math.sin(b)*y),e.add(v),d.push(v)}}const S=new Z({color:657926,transparent:!0,opacity:.12,side:Ct}),_=new C(new rr(r*.5,r*1,8),S);_.rotation.x=-Math.PI/2,_.position.y=.005,e.add(_);const w=new q({color:3816e3,roughness:.9}),A=4+Math.floor(M()*3);for(let E=0;E<A;E++){const T=M()*6.28,b=r*.5+M()*r*.6,y=.03+M()*.05,v=new C(new $(y,3,3),w);v.scale.set(1+M()*.5,.4,1+M()*.5),v.position.set(Math.cos(T)*b,y*.15,Math.sin(T)*b),e.add(v)}if(M()<.6){const E=new q({color:3385941,emissive:U.grassTip,emissiveIntensity:.05,roughness:.7,side:Ct});for(let T=0;T<3;T++){const b=M()*6.28,y=new C(new oe(.015,.08+M()*.06),E);y.position.set(Math.cos(b)*r*.3,r*.3,Math.sin(b)*r*.3),y.rotation.y=M()*3,y.rotation.x=-.2-M()*.3,e.add(y)}}return e.position.set(i,0,t),ct.add(e),{group:e,x:i,z:t,colR:r*.8,sparkles:d,sparkleMat:g}}let qp=null,Yp=null,Zp=null,$p=null,Ah=[];function MS(){return qp}function vS(){return Yp}function _S(){return Zp}function yS(){return $p}function wS(){return Ah}function SS(){const i=new te,t=new q({color:U.obeliskBlack,roughness:.2,metalness:.8,emissive:U.obeliskPink,emissiveIntensity:0});Yp=t;const e=new C(new gt(1.2,1.8,Ee,4),t);e.position.y=Ee/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new Z({color:3351108,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,v=new C(new gt(.03,.04,Ee*.9,3),n);v.position.set(Math.cos(y)*1.55,Ee*.45,Math.sin(y)*1.55),i.add(v)}const s=new Z({color:U.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const L=6+R*4,D=new C(new gt(.015,.015,.8,3),s);D.position.set(Math.cos(y)*1.6,L,Math.sin(y)*1.6),D.rotation.z=Math.PI/2,D.rotation.y=-y,D.visible=!1,i.add(D)}const v=new C(new gt(.012,.012,2.5,3),s);v.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),v.visible=!1,i.add(v)}const o=new q({color:U.obeliskBlack,roughness:.1,metalness:.9,emissive:U.obeliskPink,emissiveIntensity:0});Zp=o;const r=new C(new An(1.3,3,4),o);r.position.y=Ee+1.5,r.rotation.y=Math.PI/4,i.add(r);const a=new Z({color:U.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,v=new C(new gt(.02,.02,3.2,3),a);v.position.set(Math.cos(y)*.8,Ee+1.5,Math.sin(y)*.8),v.rotation.z=.35*(y<3.14?1:-1),v.rotation.y=-y,v.visible=!1,i.add(v)}for(let b=0;b<5;b++){const y=new C(new Ae(1.85-b*.02,.04,6,4),new Z({color:2236979}));y.position.y=4+b*5,y.rotation.x=Math.PI/2,i.add(y)}const u=new q({color:1118488,roughness:.3,metalness:.7}),c=new C(new gt(2.2,2.5,.6,4),u);c.position.y=.3,c.rotation.y=Math.PI/4,i.add(c);const l=new C(new gt(2.8,3,.4,4),u);l.position.y=.05,l.rotation.y=Math.PI/4,i.add(l);const h=new Z({color:U.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<8;b++){const y=b/8*6.28,v=new C(new $(.06,4,3),h);v.position.set(Math.cos(y)*2.5,Ee*.7+b*.5,Math.sin(y)*2.5),v.visible=!1,i.add(v)}const f=new Z({color:1710626,transparent:!0,opacity:.08});for(let b=0;b<6;b++){const y=M()*6.28,v=2+M()*Ee*.7,R=new C(new gt(.008,.008,.5+M()*.5,3),f);R.position.set(Math.cos(y)*1.6,v,Math.sin(y)*1.6),R.rotation.z=(M()-.5)*.8,R.rotation.y=-y,i.add(R)}const p=new q({color:921108,roughness:.5,metalness:.4});for(let b=0;b<12;b++){const y=M()*6.28,v=3+M()*2,R=.15+M()*.25,L=new C(new $(R,4,3),p);L.scale.set(1+M()*.5,.3+M()*.3,1+M()*.5),L.position.set(Math.cos(y)*v,R*.15,Math.sin(y)*v),L.rotation.set(M(),M(),M()),i.add(L)}const m=new Z({color:U.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let v=0;v<5;v++){const R=5+v*3.5+M()*.5,L=(M()-.5)*.4,D=new C(new $(.04,4,3),m);D.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*L,R,Math.sin(y)*1.58+Math.sin(y+1.57)*L),D.visible=!1,i.add(D)}}const x=new Z({color:U.obeliskPink,transparent:!0,opacity:.8,blending:Qt,depthWrite:!1}),d=new C(new $(.5,12,8),x);d.position.y=Ee+3,i.add(d);const g=new Z({color:U.obeliskPink,transparent:!0,opacity:.2,blending:Qt,depthWrite:!1}),S=new C(new $(.9,8,6),g);S.position.y=Ee+3,i.add(S),$p={mesh:d,haze:S,mat:x,hazeMat:g},Ah=[];const _=[.8,1.1,1.4,1.8],w=[11158783,10040302,12277247,8921821];for(let b=0;b<4;b++){const y=new Z({color:w[b],transparent:!0,opacity:.4,blending:Qt,depthWrite:!1,side:Ct}),v=new C(new Ae(_[b],.02,6,24),y);v.position.y=Ee+3,v.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),i.add(v),Ah.push({mesh:v,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new Z({color:0,transparent:!0,opacity:.15,side:Ct}),E=new C(new Oe(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,i.add(E),i.position.set(0,-Ee,0),ct.add(i),qp=i;const T=new dr(8939212,0,30);i.add(T),T.position.set(0,Ee+1,0)}let jp=null,Jp=null;function bS(){return jp}function TS(){return Jp}function ES(){const i=new q({color:U.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});Jp=i;const t=new Nc;t.absarc(0,0,6,0,6.28,!1);const e=new Uc;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Qr(t,24),s=new C(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,ct.add(s),jp=s;const o=new Z({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const m=p/12*6.28+M()*.3,x=3.5+M()*2,d=new C(new $(.04+M()*.04,4,3),o);d.scale.set(1.2,.4,1.2),d.position.set(Math.cos(m)*x,.02,Math.sin(m)*x),d.visible=!1,ct.add(d)}const r=new Z({color:13426158,transparent:!0,opacity:0,side:Ct});for(let p=0;p<6;p++){const m=p/6*6.28+M()*.5,x=new C(new Oe(.12+M()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(m)*3.3,.06,Math.sin(m)*3.3),x.visible=!1,ct.add(x)}const a=new Z({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const m=p/8*6.28,x=4+M()*1.5,d=new C(new gt(.003,.003,.4,3),a);d.position.set(Math.cos(m)*x,.055,Math.sin(m)*x),d.rotation.x=Math.PI/2,d.rotation.z=m+Math.PI/2,d.visible=!1,ct.add(d)}const u=new Z({color:264208,transparent:!0,opacity:0,side:Ct}),c=new Nc;c.absarc(0,0,5.2,0,6.28,!1);const l=new Uc;l.absarc(0,0,3.8,0,6.28,!0),c.holes.push(l);const h=new Qr(c,16),f=new C(h,u);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,ct.add(f)}const na=[];function g0(i,t,e,n,s){const o=[],r=[],a=[];for(let c=0;c<e;c++){const l=i[c],h=i[c+1],f=h.x-l.x;h.y-l.y;const p=h.z-l.z,m=Math.sqrt(f*f+p*p)||1,x=-p/m,d=f/m,g=(c+.5)/e,S=.7+Math.sin(g*Math.PI)*.5,_=t*S/2,w=[l.x+x*_,l.y,l.z+d*_],A=[l.x-x*_,l.y,l.z-d*_],E=[h.x+x*_,h.y,h.z+d*_],T=[h.x-x*_,h.y,h.z-d*_];o.push(...w,...E,...A,...A,...E,...T);const b=c/e,y=(c+1)/e;if(a.push(b,0,y,0,b,1,b,1,y,0,y,1),s){const L=.85+Math.sin(g*Math.PI*3)*.15,D=1.2*L,F=.6*L;r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*F,s.g*F,s.b*F),r.push(s.r*F,s.g*F,s.b*F),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*F,s.g*F,s.b*F)}}const u=new Se;return u.setAttribute("position",new Vt(o,3)),u.setAttribute("uv",new Vt(a,2)),r&&u.setAttribute("color",new Vt(r,3)),u.computeVertexNormals(),u}function AS(){for(let u=0;u<6;u++){const c=U.rainbow[u],l=u/6*6.28,h=6+u*.8,f=Ee+6+u*2.5,p=1-u*.05,m=[],x=32;for(let V=0;V<=x;V++){const k=V/x,O=l+k*Math.PI,B=Math.cos(O)*h,it=Math.sin(O)*h,ut=Math.sin(k*Math.PI)*f;m.push(new z(B,ut,it))}const d=new rt(c),g=g0(m,p,x,!0,d),S=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Ct,depthWrite:!1,blending:Qt}),_=new C(g,S);_.visible=!1,ct.add(_);const w=new Js(m),A=new Z({color:16777215,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),E=new sn(w,x,.03,4,!1),T=new C(E,A);T.visible=!1,ct.add(T);const b=[],y=new Z({color:16777215,transparent:!0,opacity:0,blending:Qt,depthWrite:!1});for(let V=0;V<8;V++){const k=new C(new $(.06,4,3),y.clone());k.visible=!1,ct.add(k),b.push({mesh:k,mat:k.material,phase:V/8,speed:.15+Math.random()*.1})}const v=new Z({color:c,transparent:!0,opacity:0,side:Ct,blending:Qt}),R=m[0],L=m[m.length-1],D=new C(new Oe(1.2,8),v);D.rotation.x=-Math.PI/2,D.position.set(R.x,.03,R.z),D.visible=!1,ct.add(D);const F=new C(new Oe(1.2,8),v.clone());F.rotation.x=-Math.PI/2,F.position.set(L.x,.03,L.z),F.visible=!1,ct.add(F),na.push({mesh:_,mat:S,coreLine:T,coreMat:A,curve:w,sparkles:b,pools:[D,F],poolMat:v,targetOpacity:0})}const i=[],t=10,e=Ee+14,n=32;for(let u=0;u<=n;u++){const c=u/n,l=c*Math.PI;i.push(new z(Math.cos(l)*t,Math.sin(c*Math.PI)*e,Math.sin(l)*t))}const s=new rt(15654399),o=g0(i,1.5,n,!0,s),r=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Ct,depthWrite:!1,blending:Qt}),a=new C(o,r);a.visible=!1,ct.add(a),na.push({mesh:a,mat:r,targetOpacity:0})}function RS(i){for(let t=0;t<na.length;t++){const e=na[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const s=e.sparkles[n];s.phase+=s.speed*.016,s.phase>1&&(s.phase-=1);const o=e.curve.getPoint(s.phase);s.mesh.position.copy(o),s.mesh.visible=e.mesh.visible;const r=Math.sin(i*8+n*2.1)*.5+.5;s.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let _n=null;const di=[],dn=new fe,Xr=new rt;function CS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});_n=new ni(Ln.fly,t,i),_n.instanceMatrix.setUsage(_e),_n.instanceColor=new Ei(new Float32Array(i*3),3),_n.instanceColor.setUsage(_e),dn.scale.setScalar(0),dn.updateMatrix();for(let e=0;e<i;e++){_n.setMatrixAt(e,dn.matrix);const n=e%3===0?U.fireflyB:U.firefly;Xr.setHex(n),_n.setColorAt(e,Xr),di.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}_n.count=i,_n.frustumCulled=!1,ct.add(_n)}function pc(i,t,e,n){let s=null;for(let o=0;o<di.length;o++)if(!di[o].active){s=di[o];break}if(!s){let o=1/0;for(let r=0;r<di.length;r++)di[r].life<o&&(o=di[r].life,s=di[r])}s.x=i,s.y=t+.5+Math.random()*3,s.z=e,s.vx=(Math.random()-.5)*2,s.vy=Math.random()-.5,s.vz=(Math.random()-.5)*2,s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function Kp(i,t){let e=0,n=!1;for(let s=0;s<di.length;s++){const o=di[s];if(!o.active){dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(s,dn.matrix);continue}if(o.life-=i,o.life<=0){o.active=!1,dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(s,dn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*i,o.vx+=Math.cos(o.wander)*1.5*i,o.vz+=Math.sin(o.wander)*1.5*i,o.vy+=Math.sin(t*2+o.phase)*i,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=Bt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*i);const a=Math.sin(t*3+o.phase)*.5+.5,c=o.life/o.max*(.4+a*.6),l=.6+a*.6;dn.position.set(o.x,o.y,o.z),dn.scale.setScalar(l),dn.updateMatrix(),_n.setMatrixAt(s,dn.matrix),Xr.setHex(o.colorHex),Xr.multiplyScalar(c),_n.setColorAt(s,Xr),n=!0}return _n.instanceMatrix.needsUpdate=!0,n&&(_n.instanceColor.needsUpdate=!0),e}let yn=null;const pi=[],pn=new fe,Hc=new rt,PS=new rt(U.spore);function IS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});yn=new ni(Ln.spore,t,i),yn.instanceMatrix.setUsage(_e),yn.instanceColor=new Ei(new Float32Array(i*3),3),yn.instanceColor.setUsage(_e),pn.scale.setScalar(0),pn.updateMatrix();for(let e=0;e<i;e++)yn.setMatrixAt(e,pn.matrix),Hc.setHex(U.spore),yn.setColorAt(e,Hc),pi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});yn.count=i,yn.frustumCulled=!1,ct.add(yn)}function LS(i,t,e){let n=null;for(let s=0;s<pi.length;s++)if(!pi[s].active){n=pi[s];break}if(!n){let s=1/0;for(let o=0;o<pi.length;o++)pi[o].life<s&&(s=pi[o].life,n=pi[o])}n.x=i,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let Qp=0,tm=0;function DS(i,t){Qp=i,tm=t}function US(i){let t=0,e=!1;for(let n=0;n<pi.length;n++){const s=pi[n];if(!s.active){pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(n,pn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(n,pn.matrix);continue}t++,s.vy+=.3*i,s.vx+=Qp*.3*i,s.vz+=tm*.3*i,s.vx*=.997,s.vy*=.997,s.vz*=.997,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const o=s.life/s.max*.7;pn.position.set(s.x,s.y,s.z),pn.scale.setScalar(1),pn.updateMatrix(),yn.setMatrixAt(n,pn.matrix),Hc.copy(PS).multiplyScalar(o),yn.setColorAt(n,Hc),e=!0}return yn.instanceMatrix.needsUpdate=!0,e&&(yn.instanceColor.needsUpdate=!0),t}let wn=null;const Xo=[];let Kl=0;const mn=new fe,Vc=new rt,em=new rt(U.starMote);function NS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});wn=new ni(Ln.starMote,t,i),wn.instanceMatrix.setUsage(_e),wn.instanceColor=new Ei(new Float32Array(i*3),3),wn.instanceColor.setUsage(_e),mn.scale.setScalar(0),mn.updateMatrix();for(let e=0;e<i;e++)wn.setMatrixAt(e,mn.matrix),Vc.copy(em),wn.setColorAt(e,Vc),Xo.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});wn.count=i,wn.frustumCulled=!1,ct.add(wn)}function zS(i){let t=null;for(let e=0;e<Xo.length;e++)if(!Xo[e].active){t=Xo[e];break}t&&(t.x=i.x+(Math.random()-.5)*60,t.z=i.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function nm(i,t,e){Kl+=i,Kl>.15&&(Kl=0,zS(e));let n=!1;for(let s=0;s<Xo.length;s++){const o=Xo[s];if(!o.active){mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(s,mn.matrix);continue}if(o.life-=i,o.life<=0||o.y<.5){o.active=!1,mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(s,mn.matrix);continue}o.y+=o.vy*i,o.drift+=(Math.random()-.5)*.5*i,o.x+=Math.sin(o.drift)*.1*i,o.z+=Math.cos(o.drift)*.08*i;const r=o.life/o.max,a=Math.sin(t*4+s)*.3+.7,u=r*a*.7,c=.5+a*.5;mn.position.set(o.x,o.y,o.z),mn.scale.setScalar(c),mn.updateMatrix(),wn.setMatrixAt(s,mn.matrix),Vc.copy(em).multiplyScalar(u),wn.setColorAt(s,Vc),n=!0}wn.instanceMatrix.needsUpdate=!0,n&&(wn.instanceColor.needsUpdate=!0)}let Sn=null;const qo=[],gn=new fe,Wc=new rt,im=new rt(8956535);function FS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});Sn=new ni(Ln.dustMote,t,i),Sn.instanceMatrix.setUsage(_e),Sn.instanceColor=new Ei(new Float32Array(i*3),3),Sn.instanceColor.setUsage(_e),gn.scale.setScalar(0),gn.updateMatrix();for(let e=0;e<i;e++)Sn.setMatrixAt(e,gn.matrix),Wc.copy(im),Sn.setColorAt(e,Wc),qo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Sn.count=i,Sn.frustumCulled=!1,ct.add(Sn)}function x0(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<qo.length;a++)if(!qo[a].active){s=qo[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.x=i+Math.cos(o)*.2,s.y=Bt(i,t)+.1,s.z=t+Math.sin(o)*.2,s.vx=Math.cos(o)*r,s.vy=.5+Math.random()*1.5,s.vz=Math.sin(o)*r,s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function OS(i){let t=!1;for(let e=0;e<qo.length;e++){const n=qo[e];if(!n.active){gn.position.set(0,-100,0),gn.scale.setScalar(0),gn.updateMatrix(),Sn.setMatrixAt(e,gn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,gn.position.set(0,-100,0),gn.scale.setScalar(0),gn.updateMatrix(),Sn.setMatrixAt(e,gn.matrix);continue}n.vy-=3*i,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=Bt(n.x,n.z)+.05;n.y<s&&(n.y=s,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;gn.position.set(n.x,n.y,n.z),gn.scale.setScalar(1),gn.updateMatrix(),Sn.setMatrixAt(e,gn.matrix),Wc.copy(im).multiplyScalar(o),Sn.setColorAt(e,Wc),t=!0}Sn.instanceMatrix.needsUpdate=!0,t&&(Sn.instanceColor.needsUpdate=!0)}let bn=null;const Yo=[],xn=new fe,Xc=new rt,sm=new rt(U.bubblePop),BS=new $(.02,3,3);function GS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});bn=new ni(BS,t,i),bn.instanceMatrix.setUsage(_e),bn.instanceColor=new Ei(new Float32Array(i*3),3),bn.instanceColor.setUsage(_e),xn.scale.setScalar(0),xn.updateMatrix();for(let e=0;e<i;e++)bn.setMatrixAt(e,xn.matrix),Xc.copy(sm),bn.setColorAt(e,Xc),Yo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});bn.count=i,bn.frustumCulled=!1,ct.add(bn)}function kS(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let c=0;c<Yo.length;c++)if(!Yo[c].active){o=Yo[c];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,u=1+Math.random()*2;o.x=i,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*u,o.vy=Math.cos(a)*u,o.vz=Math.sin(r)*Math.sin(a)*u,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function HS(i){let t=!1;for(let e=0;e<Yo.length;e++){const n=Yo[e];if(!n.active){xn.position.set(0,-100,0),xn.scale.setScalar(0),xn.updateMatrix(),bn.setMatrixAt(e,xn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,xn.position.set(0,-100,0),xn.scale.setScalar(0),xn.updateMatrix(),bn.setMatrixAt(e,xn.matrix);continue}n.vy-=2*i,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=n.life/n.max*.8;xn.position.set(n.x,n.y,n.z),xn.scale.setScalar(1),xn.updateMatrix(),bn.setMatrixAt(e,xn.matrix),Xc.copy(sm).multiplyScalar(s),bn.setColorAt(e,Xc),t=!0}bn.instanceMatrix.needsUpdate=!0,t&&(bn.instanceColor.needsUpdate=!0)}let Tn=null;const Zo=[],en=new fe,qc=new rt,om=[new rt(U.leafGlow),new rt(3394662),new rt(2271880),new rt(5636044),new rt(4513262)];let rm=0,am=0;function VS(i,t,e){rm=i,am=t}function WS(i){const t=new oe(.12,.08),e=new Z({color:16777215,transparent:!0,opacity:1,side:Ct,depthWrite:!1,blending:Qt});Tn=new ni(t,e,i),Tn.instanceMatrix.setUsage(_e),Tn.instanceColor=new Ei(new Float32Array(i*3),3),Tn.instanceColor.setUsage(_e),en.scale.setScalar(0),en.updateMatrix();for(let n=0;n<i;n++)Tn.setMatrixAt(n,en.matrix),qc.setHex(0),Tn.setColorAt(n,qc),Zo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});Tn.count=i,Tn.frustumCulled=!1,ct.add(Tn)}function XS(i,t,e){let n=null;for(let o=0;o<Zo.length;o++)if(!Zo[o].active){n=Zo[o];break}if(!n)return;n.x=i+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const s=Math.random()*6.28;n.vx=Math.cos(s)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(s)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*om.length)}function qS(i,t){let e=!1;for(let n=0;n<Zo.length;n++){const s=Zo[n];if(!s.active){en.position.set(0,-100,0),en.scale.setScalar(0),en.updateMatrix(),Tn.setMatrixAt(n,en.matrix);continue}if(s.life-=i,s.life<=0||s.y<-.5){s.active=!1,en.position.set(0,-100,0),en.scale.setScalar(0),en.updateMatrix(),Tn.setMatrixAt(n,en.matrix);continue}s.vx+=rm*.4*i,s.vz+=am*.4*i,s.vx+=Math.sin(t*3+n*1.7)*.5*i,s.vz+=Math.cos(t*2.5+n*2.1)*.3*i,s.vy-=.3*i,s.vx*=.995,s.vy=Math.max(s.vy,-.8),s.vz*=.995,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.rx+=s.rvx*i,s.ry+=s.rvy*i,s.rz+=s.rvz*i;const o=s.life/s.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;en.position.set(s.x,s.y,s.z),en.rotation.set(s.rx,s.ry,s.rz),en.scale.setScalar(a),en.updateMatrix(),Tn.setMatrixAt(n,en.matrix),qc.copy(om[s.colorIdx]).multiplyScalar(r),Tn.setColorAt(n,qc),e=!0}Tn.instanceMatrix.needsUpdate=!0,e&&(Tn.instanceColor.needsUpdate=!0)}const Ja=40,Rh=8;let nn=null;const mi=[],Bn=new fe,hs=new rt,cm=new rt(4513194);let M0=0,v0=0,zf=!1;function YS(){const i=new Nc;return i.moveTo(0,-.18),i.quadraticCurveTo(.1,-.17,.11,-.06),i.lineTo(.1,-.02),i.lineTo(.13,.12),i.quadraticCurveTo(.125,.14,.11,.12),i.lineTo(.08,0),i.quadraticCurveTo(.05,-.02,.03,0),i.lineTo(.03,.05),i.lineTo(.02,.22),i.quadraticCurveTo(0,.245,-.02,.22),i.lineTo(-.03,.05),i.lineTo(-.03,0),i.quadraticCurveTo(-.05,-.02,-.08,0),i.lineTo(-.11,.12),i.quadraticCurveTo(-.125,.14,-.13,.12),i.lineTo(-.1,-.02),i.lineTo(-.11,-.06),i.quadraticCurveTo(-.1,-.17,0,-.18),new Qr(i)}function ZS(){const i=YS(),t=new Z({color:16777215,transparent:!0,opacity:1,blending:Qt,depthWrite:!1,side:Ct});nn=new ni(i,t,Ja),nn.instanceMatrix.setUsage(_e),nn.instanceColor=new Ei(new Float32Array(Ja*3),3),nn.instanceColor.setUsage(_e),Bn.position.set(0,-100,0),Bn.scale.setScalar(0),Bn.updateMatrix();for(let e=0;e<Ja;e++)nn.setMatrixAt(e,Bn.matrix),hs.setScalar(0),nn.setColorAt(e,hs),mi.push({active:!1,life:0,maxLife:Rh,x:0,z:0});nn.count=Ja,nn.frustumCulled=!1,ct.add(nn),zf=!0}function $S(i,t,e,n){if(!zf)return;const s=i-M0,o=t-v0;if(s*s+o*o<(n?.25:.64))return;M0=i,v0=t;let u=null,c=-1;for(let d=0;d<mi.length;d++)if(!mi[d].active){u=mi[d],c=d;break}if(!u){let d=1/0;for(let g=0;g<mi.length;g++)mi[g].life<d&&(d=mi[g].life,u=mi[g],c=g)}const l=Bt(i,t);u.active=!0,u.life=Rh,u.maxLife=Rh,u.x=i,u.z=t;const h=c%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*h,p=Math.cos(e+Math.PI/2)*.12*h,m=n?1.15:1;Bn.position.set(i+f,l+.015,t+p),Bn.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Bn.scale.set(m,m,m),Bn.updateMatrix(),nn.setMatrixAt(c,Bn.matrix);const x=n?.9:.6;hs.copy(cm).multiplyScalar(x),nn.setColorAt(c,hs)}function jS(i,t){if(!zf)return;const e=1+(t||0)*1.5;let n=!1;for(let s=0;s<mi.length;s++){const o=mi[s];if(!o.active)continue;if(o.life-=i*e,o.life<=0){o.active=!1,Bn.position.set(0,-100,0),Bn.scale.setScalar(0),Bn.updateMatrix(),nn.setMatrixAt(s,Bn.matrix),hs.setScalar(0),nn.setColorAt(s,hs),n=!0;continue}const r=o.life/o.maxLife,a=r*r;hs.copy(cm).multiplyScalar(a*.6),nn.setColorAt(s,hs),n=!0}nn.instanceMatrix.needsUpdate=!0,n&&(nn.instanceColor.needsUpdate=!0)}const yi=[],Ao=[];let _0=Ee+2,rs=1;function y0(i){rs=i}function lm(i,t,e,n){const s=[];for(let r=0;r<=12;r++){const a=r/12,u=i*(1-a*a),c=t*(1-a*a),l=e+(n-e)*a;s.push(new z(u,l,c))}return{curve:new Js(s),pts:s}}function JS(i,t,e,n){const s=n||Ee+2,o=e+15,r=new wf(new z(i,e,t),new z(i,o,t)),a=new Z({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),u=new C(new sn(r,1,.06,6,!1),a);ct.add(u);const c=new Z({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),l=new C(new sn(r,1,.2,6,!1),c);ct.add(l);const{curve:h}=lm(i,t,o,s),f=new Z({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),p=new C(new sn(h,16,.05,6,!1),f);ct.add(p);const m=new Z({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),x=new C(new sn(h,16,.18,6,!1),m);ct.add(x);const d={upTube:u,upGlow:l,bendTube:p,bendGlow:x,mat:a,glowMat:c,bendMat:f,bendGlowMat:m,fromX:i,fromZ:t,floatY:e,skyY:o,tipY:s,animPhase:0,animTimer:0};yi.push(d);for(let g=0;g<yi.length-1;g++){const S=yi[g],_=(d.skyY+S.skyY)/2,w=[];for(let v=0;v<=8;v++){const R=v/8,L=d.fromX*(1-R)+S.fromX*R,D=d.fromZ*(1-R)+S.fromZ*R,F=_+Math.sin(R*Math.PI)*3;w.push(new z(L,F,D))}const A=new Js(w),E=new Z({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),T=new C(new sn(A,10,.03,4,!1),E);ct.add(T);const b=new Z({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),y=new C(new sn(A,10,.1,4,!1),b);ct.add(y),Ao.push({tube:T,glow:y,mat:E,glowMat:b,opacity:0})}return d}function KS(i){for(let t=0;t<yi.length;t++){const e=yi[t];e.tipY=i;const{curve:n}=lm(e.fromX,e.fromZ,e.skyY,i);ct.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new sn(n,16,.05,6,!1),ct.add(e.bendTube),ct.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new sn(n,16,.18,6,!1),ct.add(e.bendGlow)}}function QS(i,t,e){const n=e||Ee+2;Math.abs(n-_0)>.1&&yi.length>0&&(KS(n),_0=n);for(let s=0;s<yi.length;s++){const o=yi[s];if(o.animTimer+=i,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+s*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let s=0;s<Ao.length;s++){const o=Ao[s];o.opacity=Math.min(o.opacity+i*.5,.3);const r=Math.sin(t*2+s*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(rs<1){for(let s=0;s<yi.length;s++){const o=yi[s];o.mat.opacity*=rs,o.glowMat.opacity*=rs,o.bendMat.opacity*=rs,o.bendGlowMat.opacity*=rs}for(let s=0;s<Ao.length;s++)Ao[s].mat.opacity*=rs,Ao[s].glowMat.opacity*=rs}}const t2=new rt(U.orbGold),e2=new rt(16777215);let wo=0,je="SEEK",as=-Ee,tn=0,zr=[],jn=null,Is=null,Ls=null,Ye=null,Ds=[],zi=null,Ch=null,Jn=[],Fr=null,um=null,hm=null,Ph=null,Ih=null,Lh=null,Dh=null,mc=null,Uh=[],Nh=[],zh=[],Fh=[],Ro=[],Oh=[],Co=null,w0=0,$n=0,So=[],Uo=null,S0=!1;const No=200;let Qn=null;const Ff=[];let fm=!1;function n2(){if(Qn)return;const i=new Se,t=new Float32Array(No*3),e=new Float32Array(No*3),n=new Float32Array(No);i.setAttribute("position",new ze(t,3)),i.setAttribute("color",new ze(e,3)),i.setAttribute("size",new ze(n,1)),i.attributes.position.setUsage(_e),i.attributes.color.setUsage(_e),i.attributes.size.setUsage(_e);const s=new vf({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:Qt,depthWrite:!1,sizeAttenuation:!0});Qn=new up(i,s),Qn.visible=!1,ct.add(Qn);const o=new rt(U.obeliskPink),r=new rt(11158783);for(let a=0;a<No;a++){const u=Math.random()<.7?o:r;e[a*3]=u.r*(.8+Math.random()*.4),e[a*3+1]=u.g*(.8+Math.random()*.4),e[a*3+2]=u.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,Ff.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}function i2(i,t,e){fm=!0,Qn.visible=!0;for(let n=0;n<No;n++){const s=Ff[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.5+Math.random()*2,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=5+Math.random()*6,s.active=!0}}function s2(i,t){if(!Qn||!Qn.visible)return;const e=Qn.geometry.attributes.position.array,n=Qn.geometry.attributes.size.array;let s=!1;for(let o=0;o<No;o++){const r=Ff[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(s=!0,r.life-=i,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*i,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*i,r.vz+=Math.cos(t*2.5+o*1.1)*.2*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,u=Math.min(r.life/2,1);n[o]=(.15+a*.2)*u}Qn.geometry.attributes.position.needsUpdate=!0,Qn.geometry.attributes.size.needsUpdate=!0,s||(Qn.visible=!1)}function o2(i){zr=i.orbs,jn=i.obeliskGroup,Is=i.obeliskMat,Ls=i.obeliskGlowMat,Ye=i.pinnacleOrb,Ds=i.pinnacleRings||[],zi=i.moatMesh,Ch=i.moatMat,Jn=i.rainbowArcs,Fr=i.player,um=i.makeLaser,hm=i.orbHudEl,Uh=i.deers||[],Nh=i.puffs||[],zh=i.jellies||[],Fh=i.moths||[],Ro=i.trees||[],Oh=i.treeMeshes||[],Co=i.groundMesh||null,Ph=i.playOrbCollect||null,Ih=i.playOrbWarble||null,Lh=i.playLaserZap||null,Dh=i.playLaserHum||null,mc=i.stopLaserHums||null,n2()}function r2(i,t){let e=null,n=1/0;for(let u=0;u<zr.length;u++){const c=zr[u];if(c.found)continue;const l=c.x-Fr.pos.x,h=c.z-Fr.pos.z,f=l*l+h*h;f<n&&(n=f,e=c)}if(e&&n<vo*vo){const u=Math.sin(t*2+e.phase)*.5+.5;Nr.position.set(e.x,1,e.z),Nr.intensity=1+u*2,Nr.distance=vo}else Nr.intensity=0;for(let u=0;u<zr.length;u++){const c=zr[u];if(!(c.found&&!c.flyUp&&!c._flashing)){if(!c.found){const l=Math.sin(t*1.5+c.phase)*.5+.5;c.group.position.y=c.flyY+Math.sin(t*.8+c.phase)*.3,c.glowMat.opacity=.3+l*.4,c.hazeMat.opacity=.08+l*.12;const h=c.x-Fr.pos.x,f=c.z-Fr.pos.z,p=h*h+f*f,m=vo*vo;if(p<m){const x=1-Math.sqrt(p)/vo,d=x*x;c.glowMat.opacity=Math.min(.3+l*.4+d*.5,1),c.hazeMat.opacity=Math.min(.08+l*.12+d*.25,.6),c.coreMat.color.copy(e2).lerp(t2,1-d);const g=1+d*.3;c.group.scale.setScalar(g)}else c.group.scale.setScalar(1);for(let x=3;x<c.group.children.length;x++){const d=c.group.children[x],g=(x-3)/6*6.28+t*1.5;d.position.x=Math.cos(g)*.4,d.position.z=Math.sin(g)*.4,d.position.y=Math.sin(g*2+t)*.1}if(p<a0*a0){c.found=!0,c._flashing=!0,c._flashTimer=0,c.flyY=c.group.position.y,wo++;const x=hm||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+wo+" / "+Eo),je==="SEEK"&&(je="RISING"),Ph&&Ph()}}if(c._flashing){c._flashTimer+=i;const l=Math.min(c._flashTimer/1.5,1),h=l<.3?l/.3:1-(l-.3)/.7;c.glowMat.opacity=.5+h*.5,c.hazeMat.opacity=.3+h*.5,c.group.scale.setScalar(1+h*.6),c.group.position.x=c.x+Math.sin(t*30)*h*.05,c.group.position.z=c.z+Math.cos(t*25)*h*.05,c._flashTimer>1.5&&(c._flashing=!1,c.flyUp=!0,c.group.position.x=c.x,c.group.position.z=c.z,Ih&&Ih())}if(c.flyUp){const l=Ee+5;c.flyY+=(l-c.flyY)*i*.8,c.group.position.y=c.flyY;const h=Math.min((c.flyY-1)/(l-1),1);if(c.group.scale.setScalar(1-h*.6),c.glowMat.opacity=.8-h*.5,c.flyY>l-1&&!c.laserLine){c.flyUp=!1,c.group.visible=!1;const f=Ql();c.laserLine=um(c.x,c.z,0,f),Lh&&Lh(),Dh&&Dh(c.x,c.z)}}}}const s=Ee/Eo,o=-Ee+wo*s;if(as<o-.01?(as+=8*i,as>o&&(as=o),jn&&(jn.position.y=as,jn.position.x=Math.sin(t*25)*.04,jn.position.z=Math.cos(t*30)*.03)):jn&&(jn.position.x*=.9,jn.position.z*=.9),wo>=Eo&&as>=-.01&&je==="RISING"&&(je="COMPLETE",tn=0),jn){jn.rotation.y+=i*.03;const u=jn.children[jn.children.length-1];if(u&&u.isLight){const c=Math.max(0,Math.min(1,(as+Ee)/Ee));u.intensity=c*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Ye&&Ye.mesh.visible){const u=Math.sin(t*2)*.5+.5;Ye.mat.opacity=.6+u*.3,Ye.hazeMat.opacity=.15+u*.12;const c=wo/Eo;Ye.mat.opacity*=.3+c*.7,Ye.hazeMat.opacity*=.2+c*.8}for(let u=0;u<Ds.length;u++){const c=Ds[u];if(!c.mesh.visible)continue;c.mesh.rotation.x+=c.rx*i,c.mesh.rotation.y+=c.ry*i,c.mesh.rotation.z+=c.rz*i;const l=wo/Eo;c.mat.opacity=(.15+l*.35)*(.8+Math.sin(t*1.5+u)*.2)}const a=Ql();if(QS(i,t,a),je==="COMPLETE"&&tn>3?y0(Math.max(0,1-(tn-3)/4)):(je==="FINALE"||je==="TRANSFORM")&&(y0(0),mc&&(mc(),mc=null)),s2(i,t),je==="COMPLETE"){tn+=i;const u=Math.min(tn/3,1);if(Is&&(Is.emissiveIntensity=u*1.5),Ls&&(Ls.emissiveIntensity=u*2.5),Ye&&Ye.mesh.visible&&tn>1&&tn<3){const c=Math.min((tn-1)/1.5,1);Ye.mat.opacity=.9+c*.1,Ye.hazeMat.opacity=.5+c*.5,Ye.mesh.scale.setScalar(1+c*.5),Ye.haze.scale.setScalar(1+c*1);for(let l=0;l<Ds.length;l++){const h=Ds[l];h.mesh.rotation.x+=h.rx*i*(1+c*4),h.mesh.rotation.y+=h.ry*i*(1+c*4),h.mesh.rotation.z+=h.rz*i*(1+c*4)}}if(Ye&&Ye.mesh.visible&&tn>=3&&!fm){const c=new z;Ye.mesh.getWorldPosition(c),i2(c.x,c.y,c.z),Ye.mesh.visible=!1,Ye.haze.visible=!1;for(let l=0;l<Ds.length;l++)Ds[l].mesh.visible=!1}if(tn>3&&Ch){const c=Math.min((tn-3)/4,1);Ch.opacity=c*.6,zi&&(zi.visible||(zi.visible=!0),zi.position.y=.05+Math.sin(t*3)*.02*c)}if(tn>4)for(let c=0;c<Jn.length;c++){const l=c*.3,h=Math.min(Math.max((tn-4-l)/2,0),1);h>0&&!Jn[c].mesh.visible&&(Jn[c].mesh.visible=!0),Jn[c].mat.opacity=h*.55,Jn[c].mesh.rotation.y+=i*.1*(c+1)*.3}if(tn>3){const c=Math.min((tn-3)/6,1)*2;for(let l=0;l<Uh.length;l++){const h=Uh[l],f=h.group,p=-f.position.x,m=-f.position.z,x=Math.sqrt(p*p+m*m);x>8?(h.wanderAng=Math.atan2(-f.position.x,-f.position.z),h.state="walk",h.speed=1.5*c,f.position.x+=p/x*h.speed*i,f.position.z+=m/x*h.speed*i,f.rotation.y=h.wanderAng):h.state="pause"}for(let l=0;l<Nh.length;l++){const h=Nh[l],f=h.group,p=-f.position.x,m=-f.position.z,x=Math.sqrt(p*p+m*m);x>8&&(h.wanderAng=Math.atan2(-f.position.x,-f.position.z),h.state="hop",h.hopTimer=h.hopTimer%1.2,f.position.x+=p/x*1.5*c*i,f.position.z+=m/x*1.5*c*i)}for(let l=0;l<zh.length;l++){const h=zh[l],f=h.group;f.position.x+=(0-f.position.x)*i*.15*c,f.position.z+=(0-f.position.z)*i*.15*c}for(let l=0;l<Fh.length;l++){const h=Fh[l];h.centerX+=(0-h.centerX)*i*.2*c,h.centerZ+=(0-h.centerZ)*i*.2*c,h.orbitR=Math.max(h.orbitR-i*.3*c,2)}}tn>12&&(je="FINALE",console.log("✦ Quest → FINALE"))}if(je==="FINALE"){w0+=i,Is&&(Is.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Ls&&(Ls.emissiveIntensity=2.5+Math.sin(t*.7)*.5),zi&&(zi.position.y=.05+Math.sin(t*3)*.02);for(let u=0;u<Jn.length;u++)Jn[u].mesh.rotation.y+=i*.1*(u+1)*.3,Jn[u].mat.opacity=.45+Math.sin(t+u)*.1;w0>30&&(je="TRANSFORM",$n=0,a2(),console.log("✦ Quest → TRANSFORM (trees="+Ro.length+")"))}if(je==="TRANSFORM"){$n+=i,Is&&(Is.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Ls&&(Ls.emissiveIntensity=2.5+Math.sin(t*.7)*.5),zi&&(zi.position.y=.05+Math.sin(t*3)*.02);for(let c=0;c<Jn.length;c++)Jn[c].mesh.rotation.y+=i*.1*(c+1)*.3,Jn[c].mat.opacity=.45+Math.sin(t+c)*.1;if($n<3&&So.length<Ro.length){const c=Math.min(Math.floor($n/3*Ro.length),Ro.length);for(;So.length<c;){const l=So.length,h=Ro[l],f=Ql(),p=new wf(new z(0,f,0),new z(h.x,0,h.z)),m=new Z({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),x=new C(new sn(p,8,.06,4,!1),m);ct.add(x);const d=new Z({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),g=new C(new sn(p,8,.18,4,!1),d);ct.add(g),So.push({tube:x,glow:g,mat:m,glowMat:d,timer:0})}}for(let c=0;c<So.length;c++){const l=So[c];l.timer+=i;const h=Math.min(l.timer/.5,1),f=Math.sin(t*3+c*.5)*.5+.5;l.mat.opacity=h*(.6+f*.4),l.glowMat.opacity=h*(.2+f*.15)}let u=0;$n>=3&&$n<6?u=($n-3)/3:$n>=6&&$n<10?(u=1,S0||(c2(),S0=!0,console.log("✦ Trees + ground transformed"))):$n>=10&&$n<13&&(u=1-($n-10)/3),Uo&&(Uo.style.opacity=u)}}function Ql(){return as+Ee+3}function a2(){Uo||(Uo=document.createElement("div"),Uo.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(Uo))}function c2(){const i=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}];for(let t=0;t<Oh.length;t++){const e=Oh[t],n=i[t%i.length];e.trunkMat&&(e.trunkMat.color.set(667712),e.trunkMat.emissive.set(534584),e.trunkMat.emissiveIntensity=.1),e.canopyMat&&(e.canopyMat.color.set(n.core),e.canopyMat.emissive.set(n.glow),e.canopyMat.emissiveIntensity=.9),e.glowMat&&(e.glowMat.color.set(n.glow),e.glowMat.emissive.set(n.glow),e.glowMat.emissiveIntensity=.15),e.detailMat&&(e.detailMat.color.set(n.color),e.detailMat.emissive.set(n.glow),e.detailMat.emissiveIntensity=.3)}if(Co&&Co.material){Co.material.emissive.set(2099264),Co.material.emissiveIntensity=.3;const t=Co.geometry.attributes.color;if(t){const e=t.array;for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],r=e[n+2];e[n]=s*.5+r*.3,e[n+1]=o*.15,e[n+2]=r*.7+o*.4}t.needsUpdate=!0}}}const l2=600;let Ka=.25,ee=1,b0=.85,Ne="NIGHT",Or=null,Br=null,Bh=null,Gr=null,gc=null;const T0=[{label:"DUSK",sky:new rt(923685),fog:new rt(791584),fogDensity:.009,moonInt:.6,moonCol:new rt(14527112),moonElev:15,ambSky:new rt(4469589),ambGnd:new rt(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new rt(330264),fog:new rt(528408),fogDensity:.01,moonInt:1,moonCol:new rt(12307694),moonElev:55,ambSky:new rt(3359846),ambGnd:new rt(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new rt(198160),fog:new rt(397332),fogDensity:.012,moonInt:.55,moonCol:new rt(8952251),moonElev:75,ambSky:new rt(1712708),ambGnd:new rt(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new rt(1187888),fog:new rt(923688),fogDensity:.011,moonInt:.5,moonCol:new rt(13417386),moonElev:20,ambSky:new rt(3354197),ambGnd:new rt(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],es=new rt,E0=new rt;function u2(i){Or=i.scene,Br=i.moon,Bh=i.moon2,Gr=i.hemiLight,gc=i.playerLight}function h2(i){if(!Or)return;Ka=(Ka+i/l2)%1;const t=Ka*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=T0[e],a=T0[n];Ne=o<.5?r.label:a.label;const u=(c,l)=>c+(l-c)*o;if(es.copy(r.sky).lerp(a.sky,o),Or.background.copy(es),es.copy(r.fog).lerp(a.fog,o),Or.fog.color.copy(es),Or.fog.density=u(r.fogDensity,a.fogDensity),Br){es.copy(r.moonCol).lerp(a.moonCol,o),Br.color.copy(es),Br.intensity=u(r.moonInt,a.moonInt);const c=Ka*Math.PI*2,l=u(r.moonElev,a.moonElev)*Math.PI/180,h=60;Br.position.set(Math.cos(c)*Math.cos(l)*h,Math.sin(l)*h,Math.sin(c)*Math.cos(l)*h)}if(Bh){const c=u(r.moonInt,a.moonInt)/.85;Bh.intensity=.3*c}Gr&&(es.copy(r.ambSky).lerp(a.ambSky,o),E0.copy(r.ambGnd).lerp(a.ambGnd,o),Gr.color.copy(es),Gr.groundColor.copy(E0),Gr.intensity=u(r.ambInt,a.ambInt)),gc&&(gc.distance=u(r.plRange,a.plRange),gc.intensity=u(r.plInt,a.plInt)),b0=u(r.stars,a.stars),Tw(b0),ee=u(r.bio,a.bio)}let Gs=0,zo=0,qi=0,$o="CLEAR",Zi=!1,Mi=0;const xc={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},f2={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let Po="CLEAR",bo=null,Mc=0,Qa=0,tu=0,tc=!1,ec=0,eu=Math.random()*Math.PI*2,nu=0,iu=0;const Gh=[],d2=8;let A0=!1,su=0,nc=1,vc=0,ic=0,ou=0;function p2(){const i=f2[Po],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function m2(){if(A0)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new ra(i),s=new oe(40,14);for(let o=0;o<d2;o++){const r=new Z({map:n,color:5596791,transparent:!0,opacity:0,side:Ct,depthWrite:!1}),a=new C(s,r);a.visible=!1,ct.add(a),Gh.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}A0=!0}function g2(){m2();const i=xc.CLEAR.duration;Mc=i[0]+Math.random()*(i[1]-i[0])}function x2(i,t,e){if(tc)if(Qa-=i,Qa<=0){Po=bo,bo=null,tc=!1;const o=xc[Po].duration;Mc=o[0]+Math.random()*(o[1]-o[0]),ec=0}else ec=1-Qa/tu;else Mc-=i,Mc<=0&&(bo=p2(),tc=!0,tu=30+Math.random()*60,Qa=tu,ec=0);const n=xc[Po];if(tc&&bo){const o=xc[bo],r=.5-.5*Math.cos(ec*Math.PI),a=(u,c)=>u+(c-u)*r;nc=a(n.fogMult,o.fogMult),vc=a(n.rainRate,o.rainRate),ic=a(n.skyDarken,o.skyDarken),ou=a(n.mistCount,o.mistCount),qi=a(n.windBase,o.windBase),$o=r<.5?Po:bo}else nc=n.fogMult,vc=n.rainRate,ic=n.skyDarken,ou=n.mistCount,qi=n.windBase,$o=Po;Zi=$o==="LUMINOUS_STORM",eu+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,nu-=i,nu<=0&&(nu=2+Math.random()*6,iu=Math.random()*.8),iu*=Math.pow(.3,i);const s=qi+iu;if(Gs=Math.cos(eu)*s,zo=Math.sin(eu)*s,ct.fog.density*=nc,ic>.001){const o=ct.background,r=1-ic;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(ou);for(let r=0;r<Gh.length;r++){const a=Gh[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const u=10+Math.sin(t*.3+a.wobble)*8,c=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(c)*u,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(c)*u),a.mesh.rotation.y=c+Math.PI/2,a.drift+=Gs*i*.02;const l=.03+nc*.012;a.mat.opacity+=(l-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Zi&&(su-=i,su<=0&&(su=1+Math.random()*4,Mi=1)),Mi*=Math.pow(.02,i),Mi<.01&&(Mi=0),vc}function qr(){return vc}const fi=300,Pr=new Float32Array(fi),Ir=new Float32Array(fi),Lr=new Float32Array(fi),ru=new Float32Array(fi),au=new Float32Array(fi),cu=new Float32Array(fi),Us=new Float32Array(fi),On=new Float32Array(fi*6);let ks=null,kh=null;function M2(){const i=new Se;i.setAttribute("position",new ze(On,3)),kh=new Mf({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),ks=new ax(i,kh),ks.frustumCulled=!1,ks.visible=!1,ct.add(ks);for(let t=0;t<fi;t++)Us[t]=0,dm(t)}function dm(i){const t=i*6;On[t]=0,On[t+1]=-100,On[t+2]=0,On[t+3]=0,On[t+4]=-100,On[t+5]=0}function v2(i,t,e,n,s){if(!ks)return;const o=e>.01;if(ks.visible=o,!o)return;kh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let u=0;u<r;u++){let c=-1;for(let f=0;f<fi;f++)if(Us[f]<=0){c=f;break}if(c===-1)break;const l=Math.random()*Math.PI*2,h=Math.random()*30;Pr[c]=t.x+Math.cos(l)*h,Ir[c]=12+Math.random()*10,Lr[c]=t.z+Math.sin(l)*h,ru[c]=n*2+(Math.random()-.5)*.3,au[c]=-12-Math.random()*8,cu[c]=s*2+(Math.random()-.5)*.3,Us[c]=2+Math.random()*1.5}const a=.06;for(let u=0;u<fi;u++){if(Us[u]<=0)continue;if(Us[u]-=i,Us[u]<=0||Ir[u]<Bt(Pr[u],Lr[u])+.1){Us[u]=0,dm(u);continue}Pr[u]+=ru[u]*i,Ir[u]+=au[u]*i,Lr[u]+=cu[u]*i;const c=u*6;On[c]=Pr[u],On[c+1]=Ir[u],On[c+2]=Lr[u],On[c+3]=Pr[u]+ru[u]*a,On[c+4]=Ir[u]+au[u]*a,On[c+5]=Lr[u]+cu[u]*a}ks.geometry.attributes.position.needsUpdate=!0}let Y=null,we=null,Hh=null,an=!1,Wn=!1,Yc=null,lu=null,Yr=null,_2=null,pm=null,y2=null,w2=null,mm=null,S2=null,gm=null,xm=null,b2=null,Mm=null,vm=null,uu=0,T2=null,_m=null,E2=null;const Oi={jelly:0,puff:0,deer:0,moth:0};function hu(i,t){const e=Y.sampleRate*t,n=Y.createBuffer(1,e,Y.sampleRate),s=n.getChannelData(0);if(i==="white")for(let r=0;r<e;r++)s[r]=Math.random()*2-1;else if(i==="brown"){let r=0;for(let a=0;a<e;a++){const u=Math.random()*2-1;s[a]=(r+.02*u)/1.02,r=s[a],s[a]*=1.8}}const o=Math.min(Math.floor(Y.sampleRate*.5),e>>2);for(let r=0;r<o;r++){const a=r/o,u=e-o+r;s[u]=s[u]*(1-a)+s[r]*a}return n}function Dr(i,t,e,n){const s=Y.createBufferSource();s.buffer=i,s.loop=!0;const o=Y.createGain();o.gain.value=t;const r=Y.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=Y.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,s.connect(a).connect(r).connect(o).connect(we),s.start(),{node:s,gain:o,filter:r}}function A2(){const i=Y.createDelay(1);i.delayTime.value=.55;const t=Y.createDelay(1);t.delayTime.value=.79;const e=Y.createGain();e.gain.value=.35;const n=Y.createGain();n.gain.value=.28;const s=Y.createBiquadFilter();s.type="lowpass",s.frequency.value=2200;const o=Y.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;const r=Y.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=Y.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const u=Y.createGain();u.gain.value=.5,i.connect(s).connect(r).connect(e).connect(i),t.connect(o).connect(a).connect(n).connect(t),i.connect(u),t.connect(u),u.connect(we);const c=Y.createGain();c.gain.value=1,c.connect(i),c.connect(t),Hh=c}function Pn(i,t,e){if(i.connect(t),Hh&&e>0){const n=Y.createGain();n.gain.value=e,i.connect(n).connect(Hh)}}function R2(){const i=()=>{if(!an){try{Y=new(window.AudioContext||window.webkitAudioContext),we=Y.createGain(),we.gain.value=.42,we.connect(Y.destination),Yc=hu("brown",16),lu=hu("brown",11),Yr=hu("white",9),A2();const t=Dr(Yc,.05,200,50);_2=t.node,pm=t.gain,y2=t.filter;const e=Dr(lu,.03,350,80);w2=e.node,mm=e.gain;const n=Dr(Yr,0,400,60);S2=n.node,gm=n.gain,xm=n.filter;const s=Dr(Yr,0,2e3,80);b2=s.node,Mm=s.gain,vm=s.filter;const o=Dr(lu,0,600,60);T2=o.node,_m=o.gain,E2=o.filter,an=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",i),document.removeEventListener("keydown",i),document.removeEventListener("touchstart",i)}};document.addEventListener("click",i),document.addEventListener("keydown",i),document.addEventListener("touchstart",i)}function C2(i,t,e,n,s,o,r,a){if(!an||Wn)return;const u=Y.currentTime,c=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;pm.gain.linearRampToValueAtTime(c,u+.1),mm.gain.linearRampToValueAtTime(c*.6,u+.1);const l=Math.min(t*.12,.18),h=200+t*600;gm.gain.linearRampToValueAtTime(l,u+.1),xm.frequency.linearRampToValueAtTime(h,u+.1);const f=e*.15,p=1200+e*2e3;Mm.gain.linearRampToValueAtTime(f,u+.1),vm.frequency.linearRampToValueAtTime(p,u+.1),s>.5&&uu<=0&&(P2(),uu=2+Math.random()*3),uu-=i;let m=1/0;if(r&&a)for(let g=0;g<a.length;g++){const S=a[g].x-r.x,_=a[g].z-r.z,w=S*S+_*_;w<m&&(m=w)}const d=(m<225?1-Math.sqrt(m)/15:0)*.08;_m.gain.linearRampToValueAtTime(d,u+.1),Oi.jelly-=i,Oi.puff-=i,Oi.deer-=i,Oi.moth-=i}function P2(){if(!Y)return;const i=Y.currentTime,t=Y.createOscillator(),e=Y.createGain(),n=Y.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.8+Math.random()*.5),t.connect(n).connect(e).connect(we),t.start(),t.stop(i+1.5);const s=Y.createBufferSource();s.buffer=Yc;const o=Y.createGain(),r=Y.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=Y.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,i),o.gain.exponentialRampToValueAtTime(.001,i+1.2),s.connect(a).connect(r).connect(o).connect(we),s.start(),s.stop(i+1.5)}function Zs(i,t,e){if(!an||Wn||Oi[i]>0)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,u=Math.max(-1,Math.min(1,n/Math.max(r,1))),c=Y.createStereoPanner();c.pan.value=u;const l=Y.currentTime;switch(i){case"jelly":{const h=360+Math.random()*60,f=Y.createOscillator(),p=Y.createOscillator();f.type="sine",p.type="sine",f.frequency.setValueAtTime(h,l),p.frequency.setValueAtTime(h+3,l),f.frequency.linearRampToValueAtTime(h-40,l+1.2),p.frequency.linearRampToValueAtTime(h-37,l+1.2);const m=Y.createOscillator(),x=Y.createGain();m.frequency.value=4,x.gain.value=5,m.connect(x),x.connect(f.frequency),x.connect(p.frequency);const d=Y.createGain();d.gain.setValueAtTime(0,l),d.gain.linearRampToValueAtTime(a,l+.15),d.gain.setValueAtTime(a,l+.6),d.gain.exponentialRampToValueAtTime(.001,l+1.4),f.connect(d),p.connect(d),d.connect(c),Pn(c,we,.4),m.start(l),f.start(l),p.start(l),m.stop(l+1.5),f.stop(l+1.5),p.stop(l+1.5),Oi.jelly=4+Math.random()*5;break}case"puff":{const h=500+Math.random()*100,f=[h,h*1.2,h*1.5];for(let p=0;p<f.length;p++){const m=Y.createOscillator();m.type="sine",m.frequency.value=f[p];const x=Y.createGain(),d=l+p*.07;x.gain.setValueAtTime(0,d),x.gain.linearRampToValueAtTime(a*.5,d+.02),x.gain.exponentialRampToValueAtTime(.001,d+.15),m.connect(x).connect(c),m.start(d),m.stop(d+.18)}Pn(c,we,.3),Oi.puff=8+Math.random()*10;break}case"deer":{const h=100+Math.random()*30,f=Y.createOscillator(),p=Y.createOscillator();f.type="triangle",p.type="triangle",f.frequency.setValueAtTime(h,l),p.frequency.setValueAtTime(h+2,l),f.frequency.linearRampToValueAtTime(h-15,l+.5),p.frequency.linearRampToValueAtTime(h-13,l+.5);const m=Y.createBiquadFilter();m.type="lowpass",m.frequency.value=250,m.Q.value=.5;const x=Y.createGain();x.gain.setValueAtTime(0,l),x.gain.linearRampToValueAtTime(a*.7,l+.12),x.gain.setValueAtTime(a*.7,l+.3),x.gain.exponentialRampToValueAtTime(.001,l+.6),f.connect(m),p.connect(m),m.connect(x).connect(c),Pn(c,we,.3),f.start(l),p.start(l),f.stop(l+.7),p.stop(l+.7),Oi.deer=5+Math.random()*6;break}case"moth":{const h=Y.createOscillator();h.type="sine",h.frequency.setValueAtTime(200+Math.random()*80,l);const f=Y.createOscillator(),p=Y.createGain();f.frequency.value=8+Math.random()*4,p.gain.value=12,f.connect(p).connect(h.frequency);const m=Y.createGain();m.gain.setValueAtTime(0,l),m.gain.linearRampToValueAtTime(a*.2,l+.05),m.gain.exponentialRampToValueAtTime(.001,l+.25),h.connect(m).connect(c),Pn(c,we,.2),f.start(l),h.start(l),f.stop(l+.3),h.stop(l+.3),Oi.moth=4+Math.random()*5;break}}}let Zc=0;function I2(i,t){if(!an||Wn||Zc>0)return;const e=Y.currentTime;if(t){const n=Y.createBufferSource();n.buffer=Yr;const s=Y.createGain(),o=Y.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(s).connect(we),n.start(),n.stop(e+.15)}else{const n=Y.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const s=Y.createGain();s.gain.setValueAtTime(.03,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(s).connect(we),n.start(),n.stop(e+.1)}Zc=i?.22:.35}function L2(){if(!an||Wn)return;const i=Y.currentTime,t=Y.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(300,i+.1);const e=Y.createGain();e.gain.setValueAtTime(.03,i),e.gain.exponentialRampToValueAtTime(.001,i+.15),t.connect(e).connect(we),t.start(),t.stop(i+.2)}function D2(i){if(!an||Wn)return;const t=Y.currentTime,e=Y.createBufferSource();e.buffer=Yc;const n=Y.createGain(),s=Y.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=Y.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(i*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(s).connect(n).connect(we),e.start(),e.stop(t+.25)}function U2(i){Zc>0&&(Zc-=i)}function N2(i,t){if(!an||Wn)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>400)return;const o=Math.max(0,1-Math.sqrt(s)/20)*.06,r=Y.currentTime,a=Y.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const u=Y.createGain();u.gain.setValueAtTime(o,r),u.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(u).connect(we),a.start(),a.stop(r+.15)}function z2(){if(!an||Wn)return;const i=Y.currentTime,t=[440,554,659,880];for(let e=0;e<t.length;e++){const n=Y.createOscillator();n.type="sine",n.frequency.setValueAtTime(t[e],i+e*.12);const s=Y.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+e*.12+.05),s.gain.exponentialRampToValueAtTime(.001,i+e*.12+.7),n.connect(s),Pn(s,we,.5),n.start(i+e*.12),n.stop(i+e*.12+.8)}}function F2(){if(!an||Wn)return;const i=Y.currentTime,t=Y.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(1200,i+3);const e=Y.createOscillator(),n=Y.createGain();e.frequency.setValueAtTime(6,i),e.frequency.linearRampToValueAtTime(12,i+3),n.gain.value=20,e.connect(n).connect(t.frequency);const s=Y.createOscillator();s.type="sine",s.frequency.setValueAtTime(600,i),s.frequency.exponentialRampToValueAtTime(2400,i+3);const o=Y.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.04,i+.2),o.gain.setValueAtTime(.04,i+2),o.gain.exponentialRampToValueAtTime(.001,i+3.5),t.connect(o),s.connect(o),Pn(o,we,.6),e.start(i),t.start(i),s.start(i),e.stop(i+4),t.stop(i+4),s.stop(i+4)}function O2(){if(!an||Wn)return;const i=Y.currentTime,t=Y.createBufferSource();t.buffer=Yr;const e=Y.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.3),e.Q.value=2;const n=Y.createGain();n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.3),t.connect(e).connect(n).connect(we);const s=Y.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(2e3,i),s.frequency.exponentialRampToValueAtTime(100,i+.15);const o=Y.createBiquadFilter();o.type="lowpass",o.frequency.value=4e3;const r=Y.createGain();r.gain.setValueAtTime(.06,i),r.gain.exponentialRampToValueAtTime(.001,i+.2),s.connect(o).connect(r),Pn(r,we,.3);const a=Y.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,i+.15),a.frequency.linearRampToValueAtTime(55,i+2);const u=Y.createBiquadFilter();u.type="bandpass",u.frequency.value=180,u.Q.value=3;const c=Y.createGain();c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.03,i+.2),c.gain.exponentialRampToValueAtTime(.001,i+2),a.connect(u).connect(c).connect(we),t.start(i),t.stop(i+.4),s.start(i),s.stop(i+.25),a.start(i+.1),a.stop(i+2.2)}const jo=[];function B2(i,t){if(!an||Wn)return;const e=Y.currentTime,n=Y.createOscillator();n.type="sawtooth",n.frequency.value=55+Math.random()*10;const s=Y.createOscillator(),o=Y.createGain();s.type="square",s.frequency.value=120+Math.random()*60,o.gain.value=15,s.connect(o).connect(n.frequency);const r=Y.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=3;const a=Y.createGain();a.gain.value=0;const u=Y.createStereoPanner();n.connect(r).connect(a).connect(u).connect(we),s.start(e),n.start(e),jo.push({osc:n,mod:s,gain:a,panner:u,filter:r,x:i,z:t})}function G2(i){if(!an||!Y)return;const t=Y.currentTime;for(let e=0;e<jo.length;e++){const n=jo[e],s=n.x-i.x,o=n.z-i.z,r=s*s+o*o,a=Math.sqrt(r),u=r<625?Math.max(0,1-a/25)*.04:0;n.gain.gain.linearRampToValueAtTime(u,t+.1);const c=Math.max(-1,Math.min(1,s/Math.max(a,1)));n.panner.pan.linearRampToValueAtTime(c,t+.1),n.filter.frequency.value=180+Math.sin(t*.5+e)*40}}function k2(){if(!Y)return;const i=Y.currentTime;for(let t=0;t<jo.length;t++){const e=jo[t];e.gain.gain.linearRampToValueAtTime(0,i+.5),e.osc.stop(i+.6),e.mod.stop(i+.6)}jo.length=0}function H2(){if(!an||Wn)return;const i=Y.currentTime,t=Y.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(900,i+.15);const e=Y.createGain();e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(e),Pn(e,we,.4),t.start(),t.stop(i+.6)}let ym=null,wm=null,Sm=null,fu=0,R0=0,sc=0,du=0,C0=1,Vh=!1;function V2(){if(Vh||!Y)return;Vh=!0;const i=Y.createGain();i.gain.value=0;const t=Y.createOscillator();t.type="sine",t.frequency.value=160;const e=Y.createOscillator();e.type="sine",e.frequency.value=190;const n=Y.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(i),e.connect(n),i.connect(we),t.start(),e.start(),ym=t,wm=e,Sm=i}function W2(i){if(!Y||i<.001)return;const t=Y.currentTime,e=1800+Math.random()*800,n=Y.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const s=Y.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.5,t+.01),s.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(s).connect(we),n.start(t),n.stop(t+.12)}function X2(i,t,e,n,s,o){if(!an||Wn||(V2(),!Vh))return;const r=Y.currentTime,a=s==="DEEP_NIGHT"||s==="NIGHT"?1:s==="DUSK"?.5:.3;C0=s==="DUSK"||s==="NIGHT"?1:s==="DEEP_NIGHT"?.6:.3;const u=Math.max(.15,1-o*.7);let c=1/0;if(t&&e)for(let x=0;x<e.length;x++){const d=e[x].x-t.x,g=e[x].z-t.z,S=d*d+g*g;S<c&&(c=S)}const l=c<400?1-Math.sqrt(c)/20:0;R0+=i*2;const h=.7+.3*Math.sin(R0*Math.PI*2),f=l*.025*a*u*h;if(Sm.gain.linearRampToValueAtTime(f,r+.15),fu+=i,fu>3+Math.random()*4){fu=0;const x=150+Math.random()*40;ym.frequency.linearRampToValueAtTime(x,r+.5),wm.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let p=1/0;if(t&&n)for(let x=0;x<n.length;x++){const d=n[x].cx-t.x,g=n[x].cz-t.z,S=d*d+g*g;S<p&&(p=S)}const m=p<144?1-Math.sqrt(p)/12:0;if(du=m*.02*C0*u,du>.001){if(sc-=i,sc<=0){W2(du);const x=1.5+(1-m)*1.5;sc=x+Math.random()*x}}else sc=0}const bm=[0,2,4,7,9],q2=[0,2,3,5,7,9,10],Y2=220;let lr=!1,Vn=null,_c=0,yc=0,wc=0,Wh=bm,ia=0,oc=0,P0=0,$c="",ns=null,is=null,bs=null,Ui=null,ss=null,pu=null,ol=0;function Z2(){lr||!Y||(lr=!0,Vn=Y.createGain(),Vn.gain.value=.018,Vn.connect(we),_c=1.5,yc=3,wc=0,J2())}function ur(i,t){const e=Wh.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e,o=Wh[s];return Y2*Math.pow(2,n+o/12)}function $2(){if(!Y||!Vn)return;const i=Y.currentTime,t=Math.random()<.6?0:Math.random()<.5?4:3,e=ur(t,-1);ol=t,bs&&(bs.gain.linearRampToValueAtTime(.001,i+3),ns&&ns.stop(i+3.2),is&&is.stop(i+3.2),ss&&ss.stop(i+3.2)),ns=Y.createOscillator(),is=Y.createOscillator(),ns.type="sine",is.type="sine",ns.frequency.value=e,is.frequency.value=e*1.002,bs=Y.createGain(),bs.gain.setValueAtTime(0,i),bs.gain.linearRampToValueAtTime(.15,i+4),Ui=Y.createBiquadFilter(),Ui.type="lowpass",Ui.frequency.value=550,Ui.Q.value=.5,ss=Y.createOscillator(),pu=Y.createGain(),ss.type="sine",ss.frequency.value=.04+Math.random()*.04,pu.gain.value=60,ss.connect(pu).connect(Ui.frequency);const n=Y.createOscillator();n.type="sine",n.frequency.value=e*1.5;const s=Y.createGain();s.gain.value=.08,n.connect(s).connect(Ui),ns.connect(Ui),is.connect(Ui),Ui.connect(bs),Pn(bs,Vn,.7),ns.start(i+.5),is.start(i+.5),n.start(i+1),ss.start(i),ns.stop(i+35),is.stop(i+35),n.stop(i+35),ss.stop(i+35)}function Of(i,t,e){if(!Y)return;const n=Y.currentTime+(e||0),s=Y.createOscillator();s.type="triangle",s.frequency.value=i;const o=Y.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(t,n+.04),o.gain.exponentialRampToValueAtTime(t*.5,n+.5),o.gain.exponentialRampToValueAtTime(.001,n+4);const r=Y.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(i*3,n),r.frequency.exponentialRampToValueAtTime(i*1.2,n+2.5),r.Q.value=.7,s.connect(r).connect(o),Pn(o,Vn,.75),s.start(n),s.stop(n+5)}function j2(i,t,e,n){if(!Y)return;const s=Y.currentTime+(n||0),o=e||3,r=Y.createOscillator();r.type="sine",r.frequency.value=i;const a=Math.min(o,5),u=Y.createBuffer(1,Y.sampleRate*a,Y.sampleRate),c=u.getChannelData(0);for(let d=0;d<c.length;d++)c[d]=(Math.random()*2-1)*.03;const l=Y.createBufferSource();l.buffer=u;const h=Y.createBiquadFilter();h.type="bandpass",h.frequency.value=i*2,h.Q.value=2;const f=Y.createGain();f.gain.setValueAtTime(0,s),f.gain.linearRampToValueAtTime(t*.12,s+.5),f.gain.linearRampToValueAtTime(0,s+o),l.connect(h).connect(f).connect(Vn);const p=Y.createGain();p.gain.setValueAtTime(0,s),p.gain.linearRampToValueAtTime(t,s+.5),p.gain.setValueAtTime(t,s+Math.max(o-1,.6)),p.gain.exponentialRampToValueAtTime(.001,s+o);const m=Y.createOscillator(),x=Y.createGain();m.frequency.value=3+Math.random()*1.5,x.gain.value=i*.008,m.connect(x).connect(r.frequency),r.connect(p),Pn(p,Vn,.7),m.start(s),r.start(s),l.start(s),m.stop(s+o+.1),r.stop(s+o+.1),l.stop(s+o+.1)}function Tm(i,t,e){if(!Y)return;const n=Y.currentTime+(e||0),s=Y.createOscillator(),o=Y.createOscillator();s.type="triangle",o.type="triangle",s.frequency.value=i,o.frequency.value=i*1.003;const r=Y.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t,n+.04),r.gain.exponentialRampToValueAtTime(t*.3,n+1),r.gain.exponentialRampToValueAtTime(.001,n+5);const a=Y.createBiquadFilter();a.type="peaking",a.frequency.value=i*.5,a.Q.value=1.5,a.gain.value=3,s.connect(a).connect(r),o.connect(a),Pn(r,Vn,.65),s.start(n),o.start(n),s.stop(n+6),o.stop(n+6)}let Sc=0,bc=0,Xh=0,qh=[];function J2(){Xh=2.2+Math.random()*.6,Sc=2,bc=0,qh=[.4,.15,.3,.12]}function K2(i){if(!Y||!Vn)return;const t=Y.currentTime,e=ur(ol,1),n=Y.createOscillator();n.type="triangle",n.frequency.value=e;const s=Y.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.25,t+.04),s.gain.exponentialRampToValueAtTime(i*.06,t+.4),s.gain.exponentialRampToValueAtTime(.001,t+1.6);const o=Y.createBiquadFilter();o.type="highpass",o.frequency.value=300,o.Q.value=.5;const r=Y.createBiquadFilter();if(r.type="lowpass",r.frequency.value=e*2.5,r.Q.value=.5,n.connect(o).connect(r).connect(s),Pn(s,Vn,.75),n.start(t),n.stop(t+2),i>.3){const a=Y.createOscillator();a.type="sine",a.frequency.value=e*2;const u=Y.createGain();u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(i*.06,t+.02),u.gain.exponentialRampToValueAtTime(.001,t+1),a.connect(u).connect(s),a.start(t),a.stop(t+1.2)}}function Q2(i,t,e){if(!Y)return;const n=Y.currentTime+(e||0),s=Y.createOscillator();s.type="sine",s.frequency.value=i;const o=Y.createOscillator();o.type="sine",o.frequency.value=i*2.01;const r=Y.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t*.25,n+.03),r.gain.exponentialRampToValueAtTime(t*.08,n+.8),r.gain.exponentialRampToValueAtTime(.001,n+5);const a=Y.createGain();a.gain.value=.12,s.connect(r),o.connect(a).connect(r),Pn(r,Vn,.85),s.start(n),o.start(n),s.stop(n+5.5),o.stop(n+5.5)}function tb(i,t,e){if(!Y)return;const n=[0,2,4,2],s=.24+Math.random()*.16;for(let o=0;o<n.length;o++){const r=ur(i+n[o],ia);Of(r,t*(o===0?1:.7),(e||0)+o*s)}}function Em(i){const t=Math.random();let e;return t<.25?e=i+1:t<.5?e=i-1:t<.65?e=i+2:t<.8?e=i-2:t<.9?e=0:e=ol,Math.max(-3,Math.min(10,e))}function eb(){if(!Y||!lr)return 2;const i=3+Math.floor(Math.random()*5),t=1+Math.random()*1.2,e=Math.random()<.4;let n;const s=Math.random();s<.4?n="harp":s<.7?n="flute":n="lute",n===$c&&Math.random()<.7&&(n=["harp","flute","lute"][Math.floor(Math.random()*3)]),$c=n;let o=P0+(Math.random()<.7?0:Math.random()<.5?1:-1);o=Math.max(-2,Math.min(8,o));const r=.5+Math.random()*.4;let a=0;for(let u=0;u<i;u++){const c=e?t*(u%2===0?1:.6):t;a=u===0?0:a+c+(Math.random()-.5)*.08;const l=ur(o,ia);if(n==="harp"&&Math.random()<.2&&u>0)tb(o,r*.7,a);else if(n==="harp")Of(l,r,a);else if(n==="flute"){const h=c*1.5+.5;j2(l,r*.9,h,a)}else Tm(l,r*.7,a);u>=i-2&&Math.random()<.5?o=o>0?o-1:o+1:o=Em(o)}return P0=o,a+1.5}function nb(){if(!Y||!lr)return 3;const i=1+Math.floor(Math.random()*3),t=$c==="harp"?Math.random()<.5?"lute":"shimmer":$c==="lute"?Math.random()<.5?"harp":"shimmer":Math.random()<.5?"lute":"shimmer",e=2+Math.random()*3,n=.3+Math.random()*.3;let s=ol;for(let o=0;o<i;o++){const r=o*e,a=ur(s,ia-1);t==="lute"?Tm(a,n*.6,r):t==="harp"?Of(a,n,r):Q2(ur(s,ia+1),n*.5,r),s=Em(s)}return i*e+2}function ib(i,t,e,n){if(!an||Wn||(lr||Z2(),!lr))return;const s=Y.currentTime;Wh=t==="DEEP_NIGHT"||t==="NIGHT"?q2:bm,ia=t==="DAY"?1:0;const o=t==="DEEP_NIGHT"?.016:t==="NIGHT"?.02:t==="DAWN"?.024:t==="DAY"?.013:.02,r=n?1.35:1;if(Vn.gain.linearRampToValueAtTime(o*r,s+2),oc=Math.min(1,(e||0)/5),wc-=i,wc<=0&&($2(),wc=18+Math.random()*12),_c-=i,_c<=0){const a=eb(),u=oc>.3?3:6,c=oc>.3?6:10;_c=a+u+Math.random()*c}if(yc-=i,yc<=0){const a=nb(),u=oc>.3?6:12;yc=a+u+Math.random()*8}if(Sc-=i,Sc<=0){const a=qh[bc%qh.length],u=Xh*(.95+Math.random()*.1);K2(a),bc++,Sc=u,bc%16===0&&(Xh=2.2+Math.random()*.6)}}function sb(i,t,e,n,s){const o=e.x-i.x,r=e.z-i.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let c=Math.atan2(r,o)-t;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;return Math.abs(c)<s*.5}function ob(i,t,e,n){const s=t.x-i.x,o=t.z-i.z,r=n?e*1.8:e;return s*s+o*o<r*r}function Am(i,t,e){let n=0,s=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],u=i.x-a.x,c=i.z-a.z,l=u*u+c*c;if(l>.01&&l<e*e){const h=Math.sqrt(l);n+=u/h/h,s+=c/h/h,o++}}return o>0&&(n/=o,s/=o),{x:n,z:s}}function Rm(i,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let s=0;s<t.length;s++)e+=t[s].x,n+=t[s].z;return e/=t.length,n/=t.length,{x:e-i.x,z:n-i.z}}function rb(i,t){const e=Math.sqrt(i.x*i.x+i.z*i.z),n=Jt-t;if(e<n)return{x:0,z:0};const s=(e-n)/t,o=Math.min(s*2,3);return{x:-i.x/e*o,z:-i.z/e*o}}function ab(i,t,e,n,s){let o=0,r=0;const a=Math.cos(t)*n,u=Math.sin(t)*n,c=i.x+a,l=i.z+u;for(let h=0;h<e.length;h++){const f=e[h],p=c-f.x,m=l-f.z,x=p*p+m*m,d=(f.colR||s)+1;if(x<d*d&&x>.01){const g=Math.sqrt(x),S=(d-g)/d*2;o+=p/g*S,r+=m/g*S}}return{x:o,z:r}}const Fi={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},cb={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Gi=null,Tc=0,I0="";function lb(){Gi=document.createElement("div"),Gi.id="discovery-text",Gi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Gi)}function Ts(i){Fi[i]||(Fi[i]=!0,I0=cb[i],Tc=3,Gi&&(Gi.textContent=I0,Gi.style.opacity="1"))}function ub(i,t,e,n,s,o,r,a){const u=i.x,c=i.z;if(!Fi.deer)for(let l=0;l<t.length;l++){const h=t[l].group.position.x-u,f=t[l].group.position.z-c;if(h*h+f*f<144){Ts("deer");break}}if(!Fi.puffling)for(let l=0;l<e.length;l++){const h=e[l].group.position.x-u,f=e[l].group.position.z-c;if(h*h+f*f<64){Ts("puffling");break}}if(!Fi.jelly)for(let l=0;l<n.length;l++){const h=n[l].group.position.x-u,f=n[l].group.position.z-c;if(h*h+f*f<100){Ts("jelly");break}}if(!Fi.moth)for(let l=0;l<s.length;l++){const h=s[l].group.position.x-u,f=s[l].group.position.z-c;if(h*h+f*f<64){Ts("moth");break}}if(!Fi.fairyRing)for(let l=0;l<o.length;l++){const h=o[l].x-u,f=o[l].z-c;if(h*h+f*f<16){Ts("fairyRing");break}}if(!Fi.pond)for(let l=0;l<r.length;l++){const h=r[l].x-u,f=r[l].z-c;if(h*h+f*f<25){Ts("pond");break}}!Fi.crystalChain&&a>=3&&Ts("crystalChain")}function hb(i){Tc>0&&(Tc-=i,Tc<=.6&&Gi&&(Gi.style.opacity="0"))}let Yh=null,mu=60;const fb={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},db={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function pb(){Yh=document.getElementById("hud")}function mb(i,t){if(!Yh)return;mu=mu*.95+1/Math.max(i,.001)*.05;const e=je==="SEEK"?"Seek the orbs...":je==="RISING"?"The obelisk stirs...":je==="COMPLETE"?"Convergence!":"Luminaries",n=fb[Ne]||"Night",s=db[$o]||"Clear";Yh.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(mu)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let jc=null;function gb(){jc=document.getElementById("orb-hud")}function xb(){return jc}function Mb(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),jc&&(jc.style.display="block")}const jt=[];let Fo=[];const Ec=[],In=[],le=[],li=[],zn=[],Ze=[],hr=[],Cm=[],sa=[],bi=[],Zh=[],Hs=[],Jc=[],Zr=[],Gn=[],vi=[],Ue=[],kn=[],$h=[],jh=[],Pm=[],Jh=[],Kh=[],Qh=[],tf=[],ef=[],nf=[],os=[];let L0=0,D0=0,gu=0,Kn=null,gi=0;const sf=15,of=[];let U0=!1;function vb(){if(U0)return;U0=!0;const i=new Mf({color:U.crystal,transparent:!0,opacity:0,blending:Qt,depthWrite:!1});for(let t=0;t<sf;t++){const e=new Se,n=new Float32Array(6);e.setAttribute("position",new ze(n,3)),e.attributes.position.setUsage(_e);const s=new lp(e,i.clone());s.visible=!1,ct.add(s),of.push({line:s,geo:e,opacity:0,active:!1})}}let Es=null;function _b(){if(Es)return Es;const i=new rr(.9,1,48),t=new Z({color:U.echoBloom,transparent:!0,opacity:.5,side:Ct,depthWrite:!1,blending:Qt});return Es=new C(i,t),Es.rotation.x=-Math.PI/2,Es.visible=!1,ct.add(Es),Es}const Pe=[];function He(i,t){for(let e=0;e<Pe.length;e++){const n=Pe[e].x-i,s=Pe[e].z-t;if(n*n+s*s<Pe[e].r2)return!0}return!1}function yb(){const i=25+Math.floor(M()*15),t=[];for(let l=0;l<i;l++){const h=M()*6.28,f=8+M()*(Jt-15);t.push({x:Math.cos(h)*f,z:Math.sin(h)*f,r:6+M()*18,density:.5+M()*.5})}const e=5+Math.floor(M()*4),n=[];for(let l=0;l<e;l++){const h=M()*6.28,f=12+M()*(Jt*.65);n.push({x:Math.cos(h)*f,z:Math.sin(h)*f,r2:(10+M()*15)**2})}for(let l=0;l<o0;l++){let h,f,p=!1;for(let m=0;m<25;m++){if(M()<.2){const d=M()*6.28,g=5+M()*(Jt-10);h=Math.cos(d)*g,f=Math.sin(d)*g}else{const d=Math.floor(M()*i),g=t[d],S=g.r*(M()+M())*.5*g.density,_=M()*6.28;h=g.x+Math.cos(_)*S,f=g.z+Math.sin(_)*S}if(h*h+f*f>(Jt-5)*(Jt-5))continue;let x=!1;for(let d=0;d<n.length;d++){const g=n[d].x-h,S=n[d].z-f;if(g*g+S*S<n[d].r2){x=!0;break}}if(!x){p=!0;for(let d=0;d<jt.length;d++){const g=jt[d].x-h,S=jt[d].z-f;if(g*g+S*S<6.25){p=!1;break}}if(p)break}}if(p){const m=6+M()*10;M();const x=Bt(h,f),d=M()*Math.PI*2,g=.8+M()*.4,S=Nw(m,x);S.position.x=h,S.position.z=f,Ec.push(S),jt.push({x:h,z:f,y:x,treeH:m,yRot:d,scale:g}),Pe.push({x:h,z:f,r2:4})}}const s=Ow(10),o=Math.ceil(o0/10)+10;Fo=Bw(s,jt,o);for(let l=0;l<G1;l++){let h,f,p=!1;for(let m=0;m<20;m++){const x=M()*6.28,d=10+M()*(Jt*.6);if(h=Math.cos(x)*d,f=Math.sin(x)*d,p=!He(h,f),p)break}if(p){gh(h,f,4);const m=dS(h,f);m.group.position.y=Bt(h,f),Gn.push(m),Pe.push({x:h,z:f,r2:64})}}for(let l=0;l<V1;l++){let h,f,p=!1;for(let m=0;m<20;m++){const x=M()*6.28,d=8+M()*(Jt*.6);if(h=Math.cos(x)*d,f=Math.sin(x)*d,p=!He(h,f),p)break}if(p){gh(h,f,3);const m=mS(h,f);m.group.position.y=Bt(h,f),Ue.push(m),Pe.push({x:h,z:f,r2:49})}}const r=new Float32Array(jt.length);let a=0;for(let l=0;l<jt.length;l++){let h=0;for(let f=0;f<jt.length;f++){if(l===f)continue;const p=jt[l].x-jt[f].x,m=jt[l].z-jt[f].z;p*p+m*m<144&&h++}r[l]=Math.max(h,.2),a+=r[l]}function u(l,h){let f=0;for(let p=0;p<jt.length;p++){const m=l-jt[p].x,x=h-jt[p].z;m*m+x*x<100&&f++}return f}for(let l=0;l<R1;l++){let h=M()*a,f=0;for(let _=0;_<r.length;_++)if(h-=r[_],h<=0){f=_;break}const p=jt[f],m=M()*6.28,x=1+M()*4,d=p.x+Math.cos(m)*x,g=p.z+Math.sin(m)*x;if(He(d,g))continue;const S=kw(d,g);S.group.position.y=Bt(d,g),In.push(S),Pe.push({x:d,z:g,r2:1})}for(let l=0;l<C1;l++){const h=M()*6.28,f=8+M()*Jt*.6,p=Math.cos(h)*f,m=Math.sin(h)*f;if(He(p,m))continue;const x=Hw(p,m);x.group.position.y=Bt(p,m),le.push(x),Pe.push({x:p,z:m,r2:4})}for(let l=0;l<P1;l++){const h=M()*6.28,f=10+M()*Jt*.5,p=Math.cos(h)*f,m=Math.sin(h)*f;li.push(cS(p,Bt(p,m)+3+M()*5,m))}for(let l=0;l<I1;l++){const h=In[Math.floor(M()*In.length)],f=M()*6.28,p=1+M()*5,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(He(m,x))continue;const d=lS(m,x);d.group.position.y=Bt(m,x),d._baseY=Bt(m,x),zn.push(d)}for(let l=0;l<L1;l++){const h=M()*6.28,f=12+M()*Jt*.5,p=Math.cos(h)*f,m=Math.sin(h)*f;if(He(p,m))continue;const x=uS(p,m),d=Bt(p,m);x.group.position.y=d,x._baseY=d,Ze.push(x)}for(let l=0;l<D1;l++){const h=jt[Math.floor(M()*jt.length)];hr.push(hS(h.x,Bt(h.x,h.z)+2+M()*4,h.z))}const c=[null,U.grassPurple,U.grassBlue,U.grassTeal];for(let l=0;l<U1;l++){const h=M()*6.28,f=2+M()*(Jt*.9),p=Math.cos(h)*f,m=Math.sin(h)*f,x=c[Math.floor(M()*c.length)],d=2+M()*2.5,g=25+Math.floor(M()*20);if(He(p,m))continue;const S=Ww(p,m,d,g,x);S.mesh.position.y=Bt(p,m),Cm.push(S),Pe.push({x:p,z:m,r2:d*d})}for(let l=0;l<O1;l++){let h,f,p=!1;for(let m=0;m<10;m++){const x=M()*6.28,d=3+M()*(Jt*.85);if(h=Math.cos(x)*d,f=Math.sin(x)*d,p=!He(h,f),p)break}if(p){const m=xS(h,f);m.group.position.y=Bt(h,f)-.08,Hs.push(m),Pe.push({x:h,z:f,r2:2.25})}}for(let l=0;l<N1;l++){const h=jt[Math.floor(M()*jt.length)],f=M()*6.28,p=1+M()*5,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(He(m,x))continue;const d=Xw(m,x);d.group.position.y=Bt(m,x),sa.push(d),Pe.push({x:m,z:x,r2:1})}for(let l=0;l<z1;l++){const h=M()*6.28,f=3+M()*(Jt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(He(p,m)||u(p,m)>1&&M()<.8)continue;const x=qw(p,m);x.group.position.y=Bt(p,m),bi.push(x),Pe.push({x:p,z:m,r2:1})}for(let l=0;l<F1;l++){const h=M()*6.28,f=4+M()*(Jt*.8),p=Math.cos(h)*f,m=Math.sin(h)*f;if(He(p,m)||u(p,m)>1&&M()<.8)continue;const x=Yw(p,m);x.group.position.y=Bt(p,m),Zh.push(x),Pe.push({x:p,z:m,r2:1})}for(let l=0;l<Eo;l++){let h,f,p=!1;for(let m=0;m<30;m++){const x=M()*6.28,d=20+M()*(Jt*.6);h=Math.cos(x)*d,f=Math.sin(x)*d,p=!0;for(let g=0;g<kn.length;g++){const S=kn[g].x-h,_=kn[g].z-f;if(S*S+_*_<225){p=!1;break}}if(p)break}if(p){const m=gS(h,f);m.group.position.y=Bt(h,f)+1,m.flyY=Bt(h,f)+1,kn.push(m)}}for(let l=0;l<Ap;l++){const h=M()*6.28,f=2+M()*3,p=Math.cos(h)*f,m=Math.sin(h)*f;Jc.push(fS(p,Bt(p,m)+1+M()*.5,m))}for(let l=0;l<B1;l++){const h=M()*6.28,f=4+M()*(Jt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(He(p,m)||u(p,m)>1&&M()<.8)continue;const x=Jw(p,m);x.group.position.y=Bt(p,m),Zr.push(x),Pe.push({x:p,z:m,r2:1})}for(let l=0;l<k1;l++){const h=M()*6.28,f=5+M()*Jt*.6,p=Math.cos(h)*f,m=Math.sin(h)*f;vi.push(pS(p,Bt(p,m)+.5+M()*5,m))}for(let l=0;l<W1;l++){const h=M()*6.28,f=5+M()*(Jt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(He(p,m))continue;const x=Qw(p,m);x.group.position.y=Bt(p,m),$h.push(x),Pe.push({x:p,z:m,r2:2.25})}for(let l=0;l<X1;l++){const h=jt[Math.floor(M()*jt.length)],f=M()*6.28,p=2+M()*4,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(He(m,x))continue;const d=tS(m,x);d.group.position.y=Bt(m,x),jh.push(d),Pe.push({x:m,z:x,r2:1})}for(let l=0;l<q1;l++){const h=M()*6.28,f=6+M()*(Jt*.65),p=Math.cos(h)*f,m=Math.sin(h)*f;if(He(p,m))continue;const x=eS(p,m);x.group.position.y=Bt(p,m),Pm.push(x),Pe.push({x:p,z:m,r2:2.25})}for(let l=0;l<Y1;l++){const h=jt[Math.floor(M()*jt.length)],f=M()*6.28,p=2+M()*5,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(He(m,x))continue;const d=iS(m,x);d.group.position.y=Bt(m,x),Jh.push(d),Pe.push({x:m,z:x,r2:1.5})}for(let l=0;l<Z1;l++){const h=M()*6.28,f=8+M()*(Jt*.6),p=Math.cos(h)*f,m=Math.sin(h)*f;if(He(p,m))continue;const x=sS(p,m);x.group.position.y=Bt(p,m),Kh.push(x),Pe.push({x:p,z:m,r2:3})}for(let l=0;l<$1;l++){const h=M()*6.28,f=5+M()*(Jt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(He(p,m))continue;const x=oS(p,m);x.group.position.y=Bt(p,m),Qh.push(x),Pe.push({x:p,z:m,r2:1.5})}for(let l=0;l<j1;l++){const h=jt[Math.floor(M()*jt.length)],f=M()*6.28,p=2+M()*4,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(He(m,x))continue;const d=rS(m,x);d.group.position.y=Bt(m,x),tf.push(d),Pe.push({x:m,z:x,r2:1.5})}for(let l=0;l<J1;l++){const h=Hs.length>0?Hs[Math.floor(M()*Hs.length)]:{x:0,z:0},f=M()*6.28,p=1+M()*3,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(He(m,x))continue;const d=aS(m,x);d.group.position.y=Bt(m,x),ef.push(d),Pe.push({x:m,z:x,r2:1})}for(let l=0;l<K1;l++){const h=M()*6.28,f=5+M()*(Jt*.8),p=Math.cos(h)*f,m=Math.sin(h)*f,x=1.5+M()*3.5,d=U.groundGlowColors[Math.floor(M()*U.groundGlowColors.length)],g=.03+M()*.05,S=new Z({color:d,transparent:!0,opacity:g,blending:Qt,depthWrite:!1,side:Ct}),_=new C(new Oe(x,10),S);_.rotation.x=-Math.PI/2,_.position.set(p,Bt(p,m)+.02,m),ct.add(_),nf.push({mesh:_,mat:S,phase:M()*6.28,baseOpacity:g,speed:.3+M()*.3,x:p,z:m})}for(let l=0;l<jt.length;l++){const h=jt[l],f=Bt(h.x,h.z);h.y=f,Ec[l]&&(Ec[l].position.y=f+(h.treeH||10)*.6)}if(Fo.length>0){const l=new fe;for(let h=0;h<Fo.length;h++){const f=Fo[h];for(let p=0;p<f.instances.length;p++){const m=f.instances[p],x=jt[m.posIdx];m.y=x.y,l.position.set(x.x,x.y,x.z),l.rotation.set(0,x.yRot,0),l.scale.setScalar(x.scale),l.updateMatrix(),f.trunk&&f.trunk.setMatrixAt(p,l.matrix),f.canopy&&f.canopy.setMatrixAt(p,l.matrix),f.glow&&f.glow.setMatrixAt(p,l.matrix),f.detail&&f.detail.setMatrixAt(p,l.matrix)}f.trunk&&(f.trunk.instanceMatrix.needsUpdate=!0),f.canopy&&(f.canopy.instanceMatrix.needsUpdate=!0),f.glow&&(f.glow.instanceMatrix.needsUpdate=!0),f.detail&&(f.detail.instanceMatrix.needsUpdate=!0)}}}function Im(i,t){const e=1+qi*1.5,n=Gs*.03,s=zo*.03,o=J.pos.x,r=J.pos.y,a=J.pos.z;Gw(Fo,Ec,o,r,a,t,e,n,s),Vw(t,e,n,s,o,a);for(let u=0;u<sa.length;u++){const c=sa[u],l=c.group.position.x-o,h=c.group.position.y-r,f=c.group.position.z-a,p=l*l+h*h+f*f;if(p>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(p>900)&&(c.group.rotation.z=Math.sin(t*.8+c.phase)*.03*e+n,c.group.rotation.x=Math.sin(t*.6+c.phase+1)*.02*e+s)}for(let u=0;u<bi.length;u++){const c=bi[u],l=c.group.position.x-o,h=c.group.position.y-r,f=c.group.position.z-a,p=l*l+h*h+f*f;if(p>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),p>900)continue;const m=Math.sin(t*1+c.phase)*.5+.5;c.petalMat.emissiveIntensity=(.3+m*.5)*ee,c.group.rotation.z=Math.sin(t*.9+c.phase)*.04*e+n*.5}for(let u=0;u<Zh.length;u++){const c=Zh[u],l=c.group.position.x-o,h=c.group.position.y-r,f=c.group.position.z-a,p=l*l+h*h+f*f;if(p>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(p>900)&&(c.group.rotation.z=Math.sin(t*1.1+c.phase)*c.swayAmp*e+n,c.group.rotation.x=Math.sin(t*.8+c.phase+2)*c.swayAmp*.5*e+s)}for(let u=0;u<$h.length;u++){const c=$h[u],l=Math.sin(t*1.2+c.phase)*.5+.5;c.orbMat.emissiveIntensity=(.5+l*.5)*ee,c.hazeMat.opacity=(.04+l*.04)*ee,c.group.rotation.z=Math.sin(t*.5+c.phase)*.02*e+n*.3,c.group.rotation.x=Math.sin(t*.4+c.phase+1)*.015*e+s*.3}for(let u=0;u<jh.length;u++){const c=jh[u];for(let l=0;l<c.podMats.length;l++){const h=Math.sin(t*1.5+c.phase+l*1.8)*.5+.5;c.podMats[l].emissiveIntensity=(.3+h*.5)*ee}c.group.rotation.z=Math.sin(t*.35+c.phase)*.01*e+n*.2}nS(Pm,i,t,ee);for(let u=0;u<Jh.length;u++){const c=Jh[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){for(let p=0;p<c.tipMats.length;p++){const m=Math.sin(t*1.8+c.phase+p*1.5)*.5+.5;c.tipMats[p].emissiveIntensity=(.3+m*.5)*ee}c.group.rotation.z=Math.sin(t*.4+c.phase)*.015*e+n*.2,c.group.rotation.x=Math.sin(t*.35+c.phase+1)*.01*e+s*.2}}for(let u=0;u<Kh.length;u++){const c=Kh[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){c.columnMat.emissiveIntensity=(.3+Math.sin(t*1+c.phase)*.25)*ee,c.hazeMat.opacity=(.03+Math.sin(t*.8+c.phase)*.02)*ee;for(let p=0;p<c.flies.length;p++){const m=t*(2+p*.5)+p*2.1,x=.2+Math.sin(t*.7+p)*.08,d=.1+Math.sin(t*1.3+p*1.7)*.15;c.flies[p].position.set(Math.cos(m)*x,c.spadixY+d,Math.sin(m)*x)}c.group.rotation.z=Math.sin(t*.3+c.phase)*.01*e+n*.15}}for(let u=0;u<Qh.length;u++){const c=Qh[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){for(let p=0;p<c.orbMats.length;p++){const m=Math.sin(t*2+c.phase+p*1.3)*.5+.5;c.orbMats[p].emissiveIntensity=(.3+m*.5)*ee}c.group.rotation.z=Math.sin(t*.45+c.phase)*.012*e+n*.2,c.group.rotation.x=Math.sin(t*.4+c.phase+1)*.008*e+s*.2}}for(let u=0;u<tf.length;u++){const c=tf[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){for(let p=0;p<c.podMats.length;p++){const m=Math.sin(t*1.5+c.phase+p*1.8)*.5+.5;c.podMats[p].emissiveIntensity=(.3+m*.4)*ee}c.group.rotation.z=Math.sin(t*.6+c.phase)*.02*e+n*.25,c.group.rotation.x=Math.sin(t*.5+c.phase+1)*.015*e+s*.25}}for(let u=0;u<ef.length;u++){const c=ef[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){for(let p=0;p<c.veilMats.length;p++)c.veilMats[p].rotation.z=Math.sin(t*.8+c.phase+p*.7)*.06*e;c.group.rotation.z=Math.sin(t*.35+c.phase)*.01*e+n*.15}}for(let u=0;u<nf.length;u++){const c=nf[u],l=c.x-o,h=c.z-a;if(l*l+h*h>3600){c.mesh.visible=!1;continue}c.mesh.visible=!0;const f=Math.sin(t*c.speed+c.phase)*.3+.7;c.mat.opacity=c.baseOpacity*f*ee}}function Lm(i,t){for(let n=0;n<li.length;n++){const s=li[n],o=s.group,r=o.position.x,a=o.position.z;s._syncPhase===void 0&&(s._syncPhase=s.phase);let u=0,c=0;for(let l=0;l<li.length;l++){if(l===n)continue;const h=li[l],f=h.group.position.x-r,p=h.group.position.z-a;f*f+p*p<225&&(u+=h._syncPhase||h.phase,c++)}if(c>0){const l=u/c;s._syncPhase+=(l-s._syncPhase)*i*.4}}const e=Ne==="DEEP_NIGHT"?2:Ne==="DAWN"?-1.5:0;for(let n=0;n<li.length;n++){const s=li[n].group,o=s.position.x-J.pos.x,r=s.position.z-J.pos.z,a=s.position.y-J.pos.y;if(o*o+a*a+r*r>3025){s.visible=!1;continue}s.visible=!0;const u=li[n],c=u.group,l=c.position.x,h=c.position.z,f=u.floatY+e;if(u._stT-=i,u._stT<=0)if(Zi)u._state="display",u._stT=10+Math.random()*15;else{const S=Math.random();S<.5?(u._state="drift",u._stT=20+Math.random()*30):S<.75?(u._state="pulse",u._stT=8+Math.random()*12):(u._state="migrate",u._migrateAng=Math.random()*6.28,u._stT=15+Math.random()*20)}switch(Zi&&u._state!=="display"&&(u._state="display",u._stT=10,Zs("jelly",{x:l,z:h},J.pos)),u._state){case"drift":{u.driftAng+=i*.15;const S=8+Math.sin(t*.1+u.phase)*4,_=u.homeX+Math.cos(u.driftAng)*S,w=u.homeZ+Math.sin(u.driftAng)*S;c.position.x+=(_-l)*i*.3,c.position.z+=(w-h)*i*.3,c.position.y=f+Math.sin(t*u.wobble+u.phase)*1.5;break}case"pulse":{u.driftAng+=i*.08,c.position.x+=Math.cos(u.driftAng)*i*.3,c.position.z+=Math.sin(u.driftAng)*i*.3,c.position.y=f+Math.sin(t*u.wobble+u.phase)*1,u._pulseSync=Math.sin(t*2+u._syncPhase)*.5+.5;break}case"migrate":{c.position.x+=Math.cos(u._migrateAng)*i*1,c.position.z+=Math.sin(u._migrateAng)*i*1,c.position.y=f+Math.sin(t*u.wobble+u.phase)*.8,c.position.x*c.position.x+c.position.z*c.position.z>Jt*.8*(Jt*.8)&&(u._migrateAng+=Math.PI);break}case"display":{u.driftAng+=i*.4,c.position.x+=Math.cos(u.driftAng)*i*.8,c.position.z+=Math.sin(u.driftAng)*i*.8,c.position.y=f+Math.sin(t*2+u.phase)*2,u._syncPhase+=(0-u._syncPhase)*i*2;break}}const p=Bt(c.position.x,c.position.z);c.position.y<p+3&&(c.position.y=p+3),u._state==="pulse"&&Math.random()<.003&&Zs("jelly",{x:l,z:h},J.pos);const m=u._syncPhase||u.phase,x=Math.sin(t*1.2+m)*.5+.5;let d=1,g=0;if(u._state==="pulse")d=1+u._pulseSync*1.5,g=u._pulseSync*.15;else if(u._state==="display"){const S=Math.sin(t*4)*.5+.5;d=1.5+S*1.2,g=.15+S*.1}else u._state==="drift"&&(d=1+x*.3);u.bellMat.emissiveIntensity=(.4+x*.8)*ee*d,u.bellMat.opacity=.35+x*.25+g,c.rotation.y+=i*.2;for(let S=2;S<c.children.length;S++)c.children[S].rotation.x=Math.sin(t*2+S+m)*.15,c.children[S].rotation.z=Math.sin(t*1.5+S*.7+m)*.1}}function Dm(i,t){const e=Be.ShiftLeft||Be.ShiftRight||mr,n=Ne==="DAWN"?.6:Ne==="NIGHT"?1.3:1,s=Ne==="DAWN"?2:Ne==="NIGHT"?.6:1;for(let o=0;o<zn.length;o++){const r=zn[o],a=r.group,u=a.position.x,c=a.position.z,l=u-J.pos.x,h=c-J.pos.z,f=l*l+h*h;if(f>1600){a.visible=!1;continue}if(a.visible=!0,r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const T=e?3.5:2;let b=f<T*T;if(!b)for(let y=0;y<Ze.length;y++){if(Ze[y].state!=="flee")continue;const v=Ze[y].group.position.x-u,R=Ze[y].group.position.z-c;if(v*v+R*R<25){b=!0;break}}b&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(l,h),r.hopTimer=0,Zs("puff",{x:u,z:c},J.pos))}if(Zi&&r.state!=="startled"&&r.state!=="huddle"){let T=1/0,b=-1;for(let y=0;y<zn.length;y++){if(y===o)continue;const v=zn[y].group.position.x-u,R=zn[y].group.position.z-c,L=v*v+R*R;L<T&&(T=L,b=y)}b>=0&&T>1&&(r.state="huddle",r._huddleTarget=b)}cr>8&&f<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const p=u-r._lastTX,m=c-r._lastTZ;p*p+m*m>.25&&(r._baseY=Bt(u,c),r._lastTX=u,r._lastTZ=c);const x={x:u,z:c},d=[];for(let T=0;T<zn.length;T++){if(T===o)continue;const b=zn[T].group.position.x,y=zn[T].group.position.z;(b-u)*(b-u)+(y-c)*(y-c)<100&&d.push({x:b,z:y})}const g=Am(x,d,1.5),S=d.length>0?Rm(x,d):{x:0,z:0},_=g.x*2+S.x*.3,w=g.z*2+S.z*.3,A=Math.sqrt(_*_+w*w);switch(r.state){case"idle":{if(r.idleTimer-=i,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*i*.3,A>.1&&d.length>1&&(a.position.x+=S.x*.05*i,a.position.z+=S.z*.05*i),Math.random()<2e-4&&Zs("puff",{x:u,z:c},J.pos),r.idleTimer<=0){const T=A>.2?Math.atan2(_,w):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+T*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=i;const b=r.hopTimer/1.2;if(b>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*s,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(b*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*i;const y=1-Math.sin(b*Math.PI)*.15,v=1+Math.sin(b*Math.PI)*.2;a.scale.set(y,v,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=i,r.hopTimer+=i*1.5;const T=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(T*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*i+g.x*.5*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*i+g.z*.5*i,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=i,f>225||cr<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(J.pos.x-u,J.pos.z-c),f>9){r.hopTimer+=i;const T=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(T*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*i}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Zi){r.state="idle",r.idleTimer=2;break}const T=zn[r._huddleTarget];if(T){const b=T.group.position.x-u,y=T.group.position.z-c,v=Math.sqrt(b*b+y*y);v>.5&&(a.position.x+=b/v*r.speed*.5*i,a.position.z+=y/v*r.speed*.5*i)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=i,r._blinkTimer<=0)if(r._blinkState===0){for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let T=0;T<r.ears.length;T++){const b=r.ears[T];b.mesh.rotation.z=b.baseRotZ+Math.sin(t*3.5+b.side*1.2+r.phase)*.08}if(r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,r.sparkles)for(let T=0;T<r.sparkles.length;T++){const b=r.sparkles[T],y=t*(2+T*.7)+b.phase;b.mesh.position.set(Math.cos(y)*b.orbitR,.5+Math.sin(y*1.3)*.1,Math.sin(y)*b.orbitR),b.mat.opacity=(.3+Math.sin(t*4+b.phase)*.3)*ee}r.crownMat&&(r.crownMat.emissiveIntensity=(.2+Math.sin(t*2+r.phase)*.15)*ee),a.position.x*a.position.x+a.position.z*a.position.z>Jt*.85*(Jt*.85)&&(r.wanderAng+=Math.PI)}}function Um(i,t){const e=Be.ShiftLeft||Be.ShiftRight||mr;for(let n=0;n<Ze.length;n++){const s=Ze[n],o=s.group,r=o.position.x,a=o.position.z,u=r-J.pos.x,c=a-J.pos.z,l=u*u+c*c;if(l>3600){o.visible=!1;continue}o.visible=!0;const h=Math.atan2(u,c),f=e?18:12,p=f*f,m=e?10:ew,x=m*m,d=r-s._lastTX,g=a-s._lastTZ;d*d+g*g>.25&&(s._baseY=Bt(r,a),s._lastTX=r,s._lastTZ=a);const S=s._baseY;if(s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"){const v={x:r,z:a},R={x:J.pos.x,z:J.pos.z};l<x||ob(v,R,m,e)?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0,Zs("deer",v,J.pos)):(l<p||sb(v,s.wanderAng,R,f,Math.PI*.5))&&(s.state="alert",s._stT=1+Math.random()*1.5,Zs("deer",v,J.pos))}if(s.state!=="flee")for(let v=0;v<Ze.length;v++){if(v===n||Ze[v].state!=="flee")continue;const R=Ze[v].group.position.x-r,L=Ze[v].group.position.z-a;if(R*R+L*L<400){s.state="flee",s.wanderAng=Ze[v].wanderAng+(Math.random()-.5)*.4,s.fleeTimer=2+Math.random()*1.5,s._zigTimer=0;break}}const _=[];for(let v=0;v<Ze.length;v++){if(v===n)continue;const R=Ze[v].group.position.x,L=Ze[v].group.position.z;(R-r)*(R-r)+(L-a)*(L-a)<400&&_.push({x:R,z:L})}const w=Am({x:r,z:a},_,3),A=_.length>0?Rm({x:r,z:a},_):{x:0,z:0};(s.state==="alert"||s.state==="watching")&&(s.headLook+=(h-s.wanderAng)*.3*i);let E=s.speed,T=!1;switch(s.state){case"walk":{if(T=!0,s.walkTimer-=i,s.walkTimer<=0){const R=Math.random(),L=Ne==="DUSK"?.55:.4,D=Ne==="DEEP_NIGHT"?.25:.1;if(R<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(R<L)s.state="graze",s._stT=Ne==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<L+.1&&Ue.length>0){s.state="drink",s._stT=8;let F=1/0;for(let V=0;V<Ue.length;V++){const k=Ue[V].x-r,O=Ue[V].z-a,B=k*k+O*O;B<F&&(F=B,s._drinkTgt=Ue[V])}}else R<L+.1+D?(s.state="rest",s._stT=Ne==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const R=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(R-s.wanderAng)*i*.5}if(_.length>0){const R=Math.atan2(A.x*.15+w.x*.8,A.z*.15+w.z*.8);s.wanderAng+=(R-s.wanderAng)*i*.3}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const v=s._drinkTgt.x-r,R=s._drinkTgt.z-a;Math.sqrt(v*v+R*R)>2?(s.wanderAng=Math.atan2(v,R),T=!0,E=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(S-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,l<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(l<f*1.2*(f*1.2)?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,T=!0,E=s.speed*.3,s.wanderAng=h,l<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):(l>f*1.5*(f*1.5)||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{T=!0,E=s.speed*nw,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=h+s._zigDir*.3;const v=ab({x:r,z:a},s.wanderAng,jt,3,1.5);v.x*v.x+v.z*v.z>.01&&(s.wanderAng+=Math.atan2(v.z,v.x)*.3);const R=rb({x:r,z:a},8);(R.x!==0||R.z!==0)&&(s.wanderAng=Math.atan2(R.z,R.x)),(s.fleeTimer<=0||l>f*2*(f*2))&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(T&&(o.position.x+=Math.sin(s.wanderAng)*E*i,o.position.z+=Math.cos(s.wanderAng)*E*i,s.legCycle+=i*E*3),o.position.x*o.position.x+o.position.z*o.position.z>Jt*.9*(Jt*.9)&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"){const v=S-o.position.y;Math.abs(v)>.01?o.position.y+=Math.sign(v)*Math.min(Math.abs(v),i*2):o.position.y=S}if(o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const v=h-s.wanderAng;s.headLook+=(v*.5-s.headLook)*i*3}const y=s.headBob||0;s.neckPivot.rotation.x+=(y-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,T&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let v=0;v<s.legPivots.length;v++){const R=s.legPivots[v];if(T){const L=R.isFront?0:Math.PI,D=R.side>0?Math.PI:0,F=Math.sin(s.legCycle+L+D)*.4*(E/s.speed);R.upper.rotation.x=F,R.lower.rotation.x=Math.max(0,-F*.6)}else s.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*i*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*i*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}if(s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9,s.mat.emissiveIntensity=(.3+Math.sin(t*.8+s.phase)*.2)*ee,s.headLook*=.98,s.manePlanes)for(let v=0;v<s.manePlanes.length;v++)s.manePlanes[v].rotation.z=Math.sin(t*3+v*1.2+s.phase)*.15;if(s.branchOrbs)for(let v=0;v<s.branchOrbs.length;v++)s.branchOrbs[v].material.opacity=(.3+Math.sin(t*2.5+s.phase+v*1.5)*.3)*ee;if(s.trailSpheres){const v=s.state==="walk"||s.state==="flee";for(let R=0;R<s.trailSpheres.length;R++){const L=s.trailSpheres[R],D=.03+R*.02;L.prevX+=(r-L.prevX)*D,L.prevY+=(o.position.y+.8-L.prevY)*D,L.prevZ+=(a-L.prevZ)*D,L.mesh.position.set(L.prevX,L.prevY+Math.sin(t*2+R*1.5)*.04,L.prevZ),L.mat.opacity=v?(.12-R*.03)*ee:.02*ee}}}}function Nm(i,t){for(let e=0;e<hr.length;e++){const n=hr[e],s=n.group,o=s.position.x,r=s.position.z,a=o-J.pos.x,u=r-J.pos.z;if(a*a+u*u>2025){s.visible=!1;continue}if(s.visible=!0,n._state==="patrol"){if(Math.random()<.002){let g=1/0,S=null;for(let _=0;_<le.length;_++){const w=le[_].x-o,A=le[_].z-r,E=w*w+A*A;E<900&&E<g&&(g=E,S=le[_])}for(let _=0;_<Gn.length;_++){if(Gn[_].glowIntensity<.3)continue;const w=Gn[_].x-o,A=Gn[_].z-r,E=w*w+A*A;E<900&&E<g&&(g=E,S=Gn[_])}S&&(n._state="attracted",n._attractTarget=S,n._stT=6+Math.random()*8,Zs("moth",{x:o,z:r},J.pos))}const d=Ne==="DAWN"?.005:Ne==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let g=1/0,S=null;for(let _=0;_<jt.length;_++){const w=jt[_].x-o,A=jt[_].z-r,E=w*w+A*A;E<400&&E<g&&(g=E,S=jt[_])}S&&(n._state="rest",n._restTree=S,n._stT=Ne==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const c=Ne==="DEEP_NIGHT"?1.6:Ne==="DAWN"?.5:1,l=Ne==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=i*.4*c;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*l,g=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*l;s.position.x+=(d-o)*i*1.5,s.position.z+=(g-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const d=n._attractTarget,g=Math.max(.5,n._stT*.4),S=d.x+Math.cos(n.orbitAng)*g,_=d.z+Math.sin(n.orbitAng)*g;s.position.x+=(S-o)*i*2,s.position.z+=(_-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const d=n._restTree,g=d.x+.5-o,S=d.z+.5-r,_=Math.sqrt(g*g+S*S);_>.3&&(s.position.x+=g/_*i*2,s.position.z+=S/_*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(g,S);break}}const h=Bt(s.position.x,s.position.z);s.position.y<h+1.5&&(s.position.y=h+1.5);const f=n._state==="rest"?.05:.4,p=Math.sin(t*n.flapSpeed+n.phase)*f;for(let d=0;d<s._wingPivots.length;d++){const g=s._wingPivots[d];g.pivot.rotation.z=p*g.side}const m=Math.sin(t*1.5+n.phase)*.5+.5,x=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+m*.6+x)*ee,n.wingMat.opacity=.45+m*.25}}function wb(i,t){const e=Be.ShiftLeft||Be.ShiftRight||mr;let n=null;if(cr>5&&(je==="SEEK"||je==="RISING")){let s=1/0;for(let o=0;o<kn.length;o++){if(kn[o].found)continue;const r=kn[o].x-J.pos.x,a=kn[o].z-J.pos.z,u=r*r+a*a;u<s&&(s=u,n=kn[o])}}for(let s=0;s<Jc.length;s++){const o=Jc[s],r=t*.5+o.phase+s/Ap*6.28,a=e?4+s*2:1.5+s*.8,u=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=J.pos.x+Math.cos(r)*a,o.targetY=J.pos.y-nl+u,o.targetZ=J.pos.z+Math.sin(r)*a,s===0&&n){const m=Math.min((cr-5)/3,.6);o.targetX+=(n.x-J.pos.x)*m,o.targetZ+=(n.z-J.pos.z)*m,o.targetY+=.5}const c=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*c*i,o.velY+=(o.targetY-o.group.position.y)*c*i,o.velZ+=(o.targetZ-o.group.position.z)*c*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const l=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+l*.4,o.hazeMat.opacity=.08+l*.12;const h=t*(2.5+s*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(h)*f,Math.sin(h*1.5)*.08,Math.sin(h)*f);for(let m=0;m<o.tendrils.length;m++){const x=o.tendrils[m],d=Math.sin(t*3+m*2.1+o.phase)*.3,g=.08+Math.sin(t*2+m*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+d)*g,x.mesh.position.z=Math.sin(x.baseAng+d)*g,x.mesh.rotation.y=x.baseAng+d,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+m)*.2}for(let m=0;m<o.embers.length;m++){const x=(m+1)*.08;o.embers[m].position.y=-.06-x+Math.sin(t*4+m*1.4+o.phase)*.03,o.embers[m].position.x=Math.sin(t*2.5+m*2+o.phase)*.06,o.embers[m].material.opacity=.2+Math.sin(t*5+m*1.7)*.15}o.facet.rotation.y+=i*1.5,o.facet.rotation.x+=i*.7,o.halo.rotation.z+=i*.3,o.halo2.rotation.y+=i*.2}}function Sb(i,t){for(let e=0;e<Gn.length;e++){const n=Gn[e],s=n.x-J.pos.x,o=n.z-J.pos.z,a=s*s+o*o<(uh+.5)*(uh+.5),u=a?1:0;n.glowIntensity+=(u-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*ee,a&&J.vel.y>0&&J.vel.y<=zc+.5&&(J.vel.y=zc+Q1,n.glowIntensity=1.5,H2());const c=.08+n.glowIntensity*.25;n.sporeMat.opacity=c;for(let l=0;l<n.spores.length;l++){const h=n.spores[l];h.drift+=i*.3,h.mesh.position.y+=h.speed*i*(.5+n.glowIntensity),h.mesh.position.x=h.baseX+Math.sin(t*.8+h.drift)*.15,h.mesh.position.z=h.baseZ+Math.cos(t*.6+h.drift)*.12,h.mesh.position.y>.8&&(h.mesh.position.y=.03),h.mesh.scale.setScalar(.6+Math.sin(t*2+l)*.4)}for(let l=0;l<n.glowWorms.length;l++){const h=Math.sin(t*1.5+l*1.3+n.phase)*.5+.5;n.glowWorms[l].material.opacity=.1+h*.4+n.glowIntensity*.3}}}function bb(i,t){for(let e=0;e<vi.length;e++){const n=vi[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const l=M()*6.28,h=8+M()*Jt*.5;n.homeX=Math.cos(l)*h,n.homeZ=Math.sin(l)*h,n.floatY=.5+M()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-J.pos.x,u=n.group.position.y-J.pos.y,c=n.group.position.z-J.pos.z;a*a+u*u+c*c<r0*r0*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,kS(n.group.position.x,n.group.position.y,n.group.position.z,6),N2(n.group.position,J.pos))}}function Tb(i,t){const e=qr();for(let n=0;n<Ue.length;n++){const s=Ue[n],o=.015+e*.01;for(let h=0;h<s.pads.length;h++)s.pads[h].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+s.pads[h].phase)*o;const r=e*.08;s.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+s.phase)*.1)*ee;const a=Math.sin(t*1.2+s.phase)*.5+.5;s.flMat.emissiveIntensity=(.3+a*.5)*ee;const u=.25+e*.2,c=.12+e*.08;for(let h=0;h<s.ripples.length;h++){const f=s.ripples[h],p=(t*u+f.phase)%1,m=.2+p*s.pondR*.8;f.mesh.scale.setScalar(m),f.mesh.material.opacity=(1-p)*c}const l=1+e*.5;for(let h=0;h<s.tadpoles.length;h++){const f=s.tadpoles[h];f.ang+=f.speed*l*i;const p=Math.cos(f.ang)*f.orbR,m=Math.sin(f.ang)*f.orbR;f.body.position.x=p,f.body.position.z=m,f.body.rotation.y=f.ang+Math.PI/2;const x=.02;f.tail.position.x=p-Math.cos(f.ang)*x,f.tail.position.z=m-Math.sin(f.ang)*x,f.tail.rotation.y=f.ang,f.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+h*3)*.4}}}function Eb(i,t){if(gu-=i,gu<=0){gu=.5;for(let o=0;o<le.length;o++){const r=le[o],a=r.x-J.pos.x,u=r.z-J.pos.z;if(a*a+u*u<36){Kn={x:r.x,z:r.z},gi=0;break}}}const e=_b();if(!Kn){e.visible=!1;return}if(gi+=i*12,gi>30){Kn=null,gi=0,e.visible=!1;return}e.visible=!0,e.position.set(Kn.x,.15,Kn.z),e.scale.setScalar(gi),e.material.opacity=(1-gi/30)*.45;const n=gi,s=4;for(let o=0;o<In.length;o++){const r=In[o],a=r.x-Kn.x,u=r.z-Kn.z,c=Math.sqrt(a*a+u*u);if(Math.abs(c-n)<s){const l=1-Math.abs(c-n)/s;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+l*2)*ee)}}for(let o=0;o<bi.length;o++){const r=bi[o],a=r.group.position.x-Kn.x,u=r.group.position.z-Kn.z,c=Math.sqrt(a*a+u*u);if(Math.abs(c-n)<s){const l=1-Math.abs(c-n)/s;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+l*1.5)*ee)}}}function Ab(i,t){const e=J.pos.x;J.pos.y;const n=J.pos.z,s=qr(),o=Zi?.6:s>.3?s*.4:0;for(let c=0;c<bi.length;c++){const l=bi[c],h=l.group.position.x,f=l.group.position.z,p=h-e,m=f-n,d=p*p+m*m<16?1:0;l._react=l._react||0,l._react+=(d-l._react)*i*(d>0?4:1.5);const g=(1+l._react*.15)*(1-o*.12),S=(1+l._react*.05)*(1-o*.15);l.group.scale.set(g,S,g),l.petalMat.emissiveIntensity+=l._react*.6*ee*(1-o*.4)}for(let c=0;c<In.length;c++){const l=In[c],h=l.x-e,f=l.z-n,m=h*h+f*f<4?1:0;l._touch=l._touch||0,l._touch+=(m-l._touch)*i*(m>0?6:1.5);const x=s*.4;l.capMat.emissiveIntensity+=(l._touch*1.5+x)*ee;const d=1+l._touch*.08;l.group.scale.set(d,1+l._touch*.04,d)}for(let c=0;c<sa.length;c++){const l=sa[c],h=l.group.position.x,f=l.group.position.z,p=h-e,m=f-n,d=p*p+m*m<2.25?.65:1;l._curl=l._curl===void 0?1:l._curl,l._curl+=(d-l._curl)*i*(d<1?4:1.5),l.group.scale.set(1+(1-l._curl)*.3,l._curl,1+(1-l._curl)*.3)}vb();const r=$o==="FOG_BANK"?.5:1;let a=0,u=0;for(let c=0;c<le.length;c++){const l=le[c],h=l.x-e,f=l.z-n;if(h*h+f*f<36)for(let p=0;p<le.length;p++){if(c===p)continue;const m=le[p],x=l.x-m.x,d=l.z-m.z,g=x*x+d*d;if(g<400){a++;const S=(1-Math.sqrt(g)/20)*.8*r;if(m.mat.emissiveIntensity+=S*ee,u<sf){const _=of[u],w=_.geo.attributes.position.array,A=1,E=1;w[0]=l.x,w[1]=A,w[2]=l.z,w[3]=m.x,w[4]=E,w[5]=m.z,_.geo.attributes.position.needsUpdate=!0,_.geo.computeBoundingSphere(),_.active=!0;const T=Math.sin(t*3+c*1.5+p*.7)*.3+.5;_.opacity=S*T*ee,_.line.material.opacity=_.opacity,_.line.visible=!0,u++}}}}for(let c=u;c<sf;c++){const l=of[c];l.line.visible&&(l.opacity*=.85,l.line.material.opacity=l.opacity,l.opacity<.01&&(l.line.visible=!1))}return a}let rc="EXPLORE",xu=0,Mu=0;function Rb(i,t){let e=!1;for(let x=0;x<le.length;x++){const d=le[x].x-J.pos.x,g=le[x].z-J.pos.z;if(d*d+g*g<64){e=!0;break}}rc=e?"NEAR_CRYSTAL":"EXPLORE",xu+=i;const n=qr(),s=Math.max(.2,1-n*.8),o=(rc==="NEAR_CRYSTAL"?.08:.25)/s,r=Math.floor((rc==="NEAR_CRYSTAL"?120:100)*s);if(xu>o&&(xu=0,Kp(0,t)<r))if(rc==="NEAR_CRYSTAL")for(let d=0;d<le.length;d++){const g=le[d].x-J.pos.x,S=le[d].z-J.pos.z;g*g+S*S<100&&pc(le[d].x,Bt(le[d].x,le[d].z)+1,le[d].z,3+Math.random()*4)}else if(Math.random()<.3&&bi.length>0){const d=bi[Math.floor(Math.random()*bi.length)];if(d._react>.3){const g=d.group.position.x,S=d.group.position.z;pc(g+(Math.random()-.5)*2,Bt(g,S)+.5,S+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,g=5+Math.random()*25,S=J.pos.x+Math.cos(d)*g,_=J.pos.z+Math.sin(d)*g;pc(S,Bt(S,_),_,6+Math.random()*10)}if(Mu+=i,Mu>.2){Mu=0;for(let x=0;x<In.length;x++){const d=In[x],g=d.x-J.pos.x,S=d.z-J.pos.z;g*g+S*S<200&&Math.random()<.15&&LS(d.x,.6*d.group.scale.x,d.z)}}for(let x=0;x<In.length;x++){const d=In[x],g=d.x-J.pos.x,S=(d.group.position.y||0)-J.pos.y,_=d.z-J.pos.z;if(g*g+S*S+_*_>2500){d.group.visible&&(d.group.visible=!1);continue}d.group.visible||(d.group.visible=!0);const A=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+A*.8)*ee}for(let x=0;x<le.length;x++){const d=le[x],g=Math.sin(t*.6+d.phase)*.5+.5;d.mat.emissiveIntensity=(1+g*1.5)*ee,d.group.children[0].rotation.y+=i*.15,d.light&&(d.light.intensity=(.3+g*.4)*ee)}if(!os.length)for(let x=0;x<le.length;x++)os.push({idx:x,dist:0});const a=J.pos.x-L0,u=J.pos.z-D0;if(a*a+u*u>1){L0=J.pos.x,D0=J.pos.z;for(let x=0;x<le.length;x++){const d=le[x],g=d.x-J.pos.x,S=d.z-J.pos.z;os[x].idx=x,os[x].dist=g*g+S*S}os.sort((x,d)=>x.dist-d.dist)}for(let x=0;x<Cs.length;x++)if(x<os.length&&os[x].dist<2500){const d=le[os[x].idx],g=Math.sin(t*.6+d.phase)*.5+.5;Cs[x].position.set(d.x,1.5,d.z),Cs[x].intensity=(1.5+g*2)*ee,Cs[x].distance=16,Cs[x].color.setHex(U.crystal)}else Cs[x].intensity=0;if(qi>.8&&Math.random()<.005)for(let x=0;x<Zr.length;x++){const d=Zr[x];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let g=0;g<8;g++)Hp(d.x,d.h+.05,d.z);for(let g=2;g<d.group.children.length;g++)d.group.children[g].visible=!1;d.regrowTimer=15+Math.random()*10}}const c=qi>.3?(qi-.3)*.02:0,l=Zi?.03:0;if(Math.random()<c+l)for(let x=0;x<jt.length;x++){const d=jt[x],g=d.x-J.pos.x,S=d.z-J.pos.z;if(g*g+S*S<900&&Math.random()<.15){const _=(d.treeH||10)*.7+(d.y||0);XS(d.x,_,d.z);break}}Lm(i,t),Dm(i,t),Um(i,t),Nm(i,t),Bp(i,t),Im(i,t);const h=J.pos.x,f=J.pos.y,p=J.pos.z;for(let x=0;x<Hs.length;x++){const d=Hs[x],g=d.x||d.group.position.x,S=d.z||d.group.position.z,_=g-h,w=(d.group.position.y||0)-f,A=S-p,E=_*_+w*w+A*A;if(E>2500){d.group.visible&&(d.group.visible=!1);continue}if(d.group.visible||(d.group.visible=!0),!d.sparkles||E>400)continue;let T=0;for(let D=0;D<le.length;D++){const F=le[D].x-g,V=le[D].z-S,k=F*F+V*V;k<100&&(T=Math.max(T,(1-Math.sqrt(k)/10)*.6))}const b=g-J.pos.x,y=S-J.pos.z,v=b*b+y*y,R=v<25?(1-Math.sqrt(v)/5)*.3:0;let L=0;if(Kn&&gi>0){const D=g-Kn.x,F=S-Kn.z,V=Math.sqrt(D*D+F*F);Math.abs(V-gi)<3&&(L=(1-Math.abs(V-gi)/3)*.8)}for(let D=0;D<d.sparkles.length;D++){const F=Math.sin(t*4+x*2.3+D*1.7)*.35;d.sparkles[D].material.opacity=.15+F+T+R+L}d.mossMat&&R>0&&(d.mossMat.emissiveIntensity=.05+R*.4*Math.sin(t*2+x)*.5+.5)}wb(i,t),Kw(Zr,i,t,J.pos),Sb(i,t),bb(i,t),Tb(i,t),nm(i,t,J.pos),jw(i,t),qS(i,t),OS(i),HS(i),Eb(i);const m=Ab(i,t);if(r2(i,t),RS(t),J.onGround&&J.vel.x*J.vel.x+J.vel.z*J.vel.z>.5){const d=Math.atan2(J.vel.x,J.vel.z),g=Be.ShiftLeft||Be.ShiftRight||mr;$S(J.pos.x,J.pos.z,d,g)}jS(i,qr()),X2(i,J.pos,Ue,Cm,Ne,qr()),U2(i),ub(J.pos,Ze,zn,li,hr,Gn,Ue,m),hb(i)}let qe=0,rf=!1;function Cb(){rf||(rf=!0,dw(!0),Mb())}function zm(){requestAnimationFrame(zm);const i=Math.min(Rp.getDelta(),.1);qe+=i,h2(i);const t=x2(i,qe,J.pos);v2(i,J.pos,t,Gs,zo),Rw(i,qe,Ne,ee,$o),Mi>0&&(Cf.intensity+=Mi*.8,ct.background.r=Math.min(ct.background.r+Mi*.08,.25),ct.background.g=Math.min(ct.background.g+Mi*.08,.25),ct.background.b=Math.min(ct.background.b+Mi*.12,.35)),C2(i,qi,t,Zi,Mi,Ne,J.pos,Ue),G2(J.pos);const e=Math.sqrt(J.vel.x*J.vel.x+J.vel.z*J.vel.z);let n=!1;for(let s=0;s<Ue.length;s++){const o=Ue[s].x-J.pos.x,r=Ue[s].z-J.pos.z;if(o*o+r*r<225){n=!0;break}}if(!n)for(let s=0;s<Gn.length;s++){const o=Gn[s].x-J.pos.x,r=Gn[s].z-J.pos.z;if(o*o+r*r<144){n=!0;break}}if(ib(i,Ne,e,n),DS(Gs,zo),$w(Gs,zo,qi),VS(Gs,zo),!rf){Mn.position.set(0,nl,0),Mn.rotation.order="YXZ",Mn.rotation.y+=i*.08,Mn.rotation.x=0;for(let s=0;s<In.length;s++){const o=In[s],r=Math.sin(qe*o.speed+o.phase)*.5+.5;o.capMat.emissiveIntensity=o.base*(.5+r*.8)*ee}for(let s=0;s<le.length;s++){const o=le[s];o.mat.emissiveIntensity=(1+Math.sin(qe*.6+o.phase)*.5*1.5+.75)*ee}Lm(i,qe),Dm(i,qe),Um(i,qe),Nm(i,qe),Bp(i,qe),Im(i,qe),nm(i,qe,J.pos);for(let s=0;s<vi.length;s++)vi[s].popped||(vi[s].group.position.y=vi[s].floatY+Math.sin(qe*.6+vi[s].phase)*vi[s].bobAmp);for(let s=0;s<Ue.length;s++)for(let o=0;o<Ue[s].pads.length;o++)Ue[s].pads[o].mesh.position.y=.05+Math.sin(qe*.8+Ue[s].pads[o].phase)*.015;for(let s=0;s<kn.length;s++){const o=kn[s],r=Math.sin(qe*1.5+o.phase)*.5+.5;o.group.position.y=o.flyY+Math.sin(qe*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4}l0();return}Lw(i),Rb(i,qe),Kp(i,qe),US(i),Mn.position.copy(J.pos),Mn.position.y+=Gp,Mn.rotation.order="YXZ",Mn.rotation.y=ta,Mn.rotation.x=Ws,mb(i,J.pos),l0()}try{gh(0,0,5),yw(),u2({scene:ct,moon:ii,moon2:Pf,hemiLight:Cf,playerLight:If}),yb();const i=Mw();Pw(jt,Hs),Iw(x0),Cw(t=>{let e=!1;for(let n=0;n<Ue.length;n++){const s=Ue[n].x-J.pos.x,o=Ue[n].z-J.pos.z;if(s*s+o*o<16){e=!0;break}}I2(t,e),Math.random()<.4&&x0(J.pos.x,J.pos.z,1)},()=>L2(),t=>D2(t)),g2(),M2(),CS(150),IS(60),hw(),NS(H1),FS(20),Zw(40),GS(30),WS(50),ZS(),Aw(),SS(),ES(),AS(),R2(),lb(),pb(),gb(),o2({orbs:kn,obeliskGroup:MS(),obeliskMat:vS(),obeliskGlowMat:_S(),pinnacleOrb:yS(),pinnacleRings:wS(),moatMesh:bS(),moatMat:TS(),rainbowArcs:na,player:J,makeLaser:JS,orbHudEl:xb(),deers:Ze,puffs:zn,jellies:li,moths:hr,trees:jt,treeMeshes:Fo,groundMesh:i,playOrbCollect:z2,playOrbWarble:F2,playLaserZap:O2,playLaserHum:B2,stopLaserHums:k2}),fw(Cb);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*Jt*.7,s=Math.cos(e)*n,o=Math.sin(e)*n;pc(s,Bt(s,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+jt.length+" mush="+In.length+" crystals="+le.length+" orbs="+kn.length+" creatures="+(li.length+zn.length+Ze.length+hr.length)+" wisps="+Jc.length+" dandelions="+Zr.length+" fairyRings="+Gn.length+" bubbles="+vi.length+" ponds="+Ue.length+" scene="+ct.children.length),zm()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
