(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="172",Ym=0,jf=1,Zm=2,H0=1,V0=2,Oi=3,Ms=0,ln=1,Ct=2,Yi=0,Wo=1,Qt=2,Kf=3,Jf=4,$m=5,Bs=100,jm=101,Km=102,Jm=103,Qm=104,tg=200,eg=201,ng=202,ig=203,Tu=204,Eu=205,sg=206,og=207,rg=208,ag=209,cg=210,lg=211,ug=212,hg=213,fg=214,Au=0,Ru=1,Cu=2,sr=3,Pu=4,Iu=5,Lu=6,Du=7,W0=0,dg=1,pg=2,xs=0,mg=1,gg=2,xg=3,X0=4,vg=5,Mg=6,_g=7,q0=300,or=301,rr=302,Uu=303,Nu=304,ol=306,ar=1e3,ks=1001,zu=1002,Xn=1003,yg=1004,ya=1005,Ei=1006,ml=1007,Hs=1008,Qi=1009,Y0=1010,Z0=1011,sa=1012,mf=1013,Js=1014,Ai=1015,Zi=1016,gf=1017,xf=1018,cr=1020,$0=35902,j0=1021,K0=1022,di=1023,J0=1024,Q0=1025,Xo=1026,lr=1027,vf=1028,Mf=1029,tp=1030,_f=1031,yf=1033,dc=33776,pc=33777,mc=33778,gc=33779,Fu=35840,Ou=35841,Bu=35842,Gu=35843,ku=36196,Hu=37492,Vu=37496,Wu=37808,Xu=37809,qu=37810,Yu=37811,Zu=37812,$u=37813,ju=37814,Ku=37815,Ju=37816,Qu=37817,th=37818,eh=37819,nh=37820,ih=37821,xc=36492,sh=36494,oh=36495,ep=36283,rh=36284,ah=36285,ch=36286,wg=3200,Sg=3201,np=0,bg=1,fs="",Cn="srgb",ur="srgb-linear",Uc="linear",Me="srgb",ro=7680,Qf=519,Tg=512,Eg=513,Ag=514,ip=515,Rg=516,Cg=517,Pg=518,Ig=519,lh=35044,we=35048,td="300 es",Vi=2e3,Nc=2001;class xr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=Math.PI/180,uh=180/Math.PI;function $i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Lg(i,t){return(i%t+t)%t}function xl(i,t,e){return(1-e)*i+e*t}function Ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,o,r,a,u,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,u,c)}set(t,e,n,s,o,r,a,u,c){const l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=o,l[5]=u,l[6]=n,l[7]=r,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],u=n[6],c=n[1],l=n[4],h=n[7],f=n[2],p=n[5],m=n[8],x=s[0],d=s[3],g=s[6],S=s[1],_=s[4],y=s[7],A=s[2],E=s[5],b=s[8];return o[0]=r*x+a*S+u*A,o[3]=r*d+a*_+u*E,o[6]=r*g+a*y+u*b,o[1]=c*x+l*S+h*A,o[4]=c*d+l*_+h*E,o[7]=c*g+l*y+h*b,o[2]=f*x+p*S+m*A,o[5]=f*d+p*_+m*E,o[8]=f*g+p*y+m*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],u=t[6],c=t[7],l=t[8];return e*r*l-e*a*c-n*o*l+n*a*u+s*o*c-s*r*u}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],u=t[6],c=t[7],l=t[8],h=l*r-a*c,f=a*u-l*o,p=c*o-r*u,m=e*h+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=h*x,t[1]=(s*c-l*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(l*e-s*u)*x,t[5]=(s*o-a*e)*x,t[6]=p*x,t[7]=(n*u-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const u=Math.cos(o),c=Math.sin(o);return this.set(n*u,n*c,-n*(u*r+c*a)+r+t,-s*c,s*u,-s*(-c*r+u*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vl.makeScale(t,e)),this}rotate(t){return this.premultiply(vl.makeRotation(-t)),this}translate(t,e){return this.premultiply(vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vl=new qt;function sp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dg(){const i=zc("canvas");return i.style.display="block",i}const ed={};function Io(i){i in ed||(ed[i]=!0,console.warn(i))}function Ug(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Ng(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const nd=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fg(){const i={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Me&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Me&&(s.r=qo(s.r),s.g=qo(s.g),s.b=qo(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?Uc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ur]:{primaries:t,whitePoint:n,transfer:Uc,toXYZ:nd,fromXYZ:id,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:nd,fromXYZ:id,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}const ue=Fg();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ao;class Og{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ao===void 0&&(ao=zc("canvas")),ao.width=t.width,ao.height=t.height;const n=ao.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ao}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ji(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ji(e[n]/255)*255):e[n]=ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bg=0;class op{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ml(s[r].image)):o.push(Ml(s[r]))}else o=Ml(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Og.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gg=0;class un extends xr{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=ks,s=ks,o=Ei,r=Hs,a=di,u=Qi,c=un.DEFAULT_ANISOTROPY,l=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=$i(),this.name="",this.source=new op(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==q0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ar:t.x=t.x-Math.floor(t.x);break;case ks:t.x=t.x<0?0:1;break;case zu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ar:t.y=t.y-Math.floor(t.y);break;case ks:t.y=t.y<0?0:1;break;case zu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=q0;un.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,n=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const u=t.elements,c=u[0],l=u[4],h=u[8],f=u[1],p=u[5],m=u[9],x=u[2],d=u[6],g=u[10];if(Math.abs(l-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-d)<.01){if(Math.abs(l+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+d)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(p+1)/2,A=(g+1)/2,E=(l+f)/4,b=(h+x)/4,T=(m+d)/4;return _>y&&_>A?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=E/n,o=b/n):y>A?y<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(y),n=E/s,o=T/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=b/o,s=T/o),this.set(n,s,o,e),this}let S=Math.sqrt((d-m)*(d-m)+(h-x)*(h-x)+(f-l)*(f-l));return Math.abs(S)<.001&&(S=1),this.x=(d-m)/S,this.y=(h-x)/S,this.z=(f-l)/S,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kg extends xr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new op(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends kg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rp extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hg extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let u=n[s+0],c=n[s+1],l=n[s+2],h=n[s+3];const f=o[r+0],p=o[r+1],m=o[r+2],x=o[r+3];if(a===0){t[e+0]=u,t[e+1]=c,t[e+2]=l,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(h!==x||u!==f||c!==p||l!==m){let d=1-a;const g=u*f+c*p+l*m+h*x,S=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,g*S);d=Math.sin(d*E)/A,a=Math.sin(a*E)/A}const y=a*S;if(u=u*d+f*y,c=c*d+p*y,l=l*d+m*y,h=h*d+x*y,d===1-a){const A=1/Math.sqrt(u*u+c*c+l*l+h*h);u*=A,c*=A,l*=A,h*=A}}t[e]=u,t[e+1]=c,t[e+2]=l,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],u=n[s+1],c=n[s+2],l=n[s+3],h=o[r],f=o[r+1],p=o[r+2],m=o[r+3];return t[e]=a*m+l*h+u*p-c*f,t[e+1]=u*m+l*f+c*h-a*p,t[e+2]=c*m+l*p+a*f-u*h,t[e+3]=l*m-a*h-u*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,u=Math.sin,c=a(n/2),l=a(s/2),h=a(o/2),f=u(n/2),p=u(s/2),m=u(o/2);switch(r){case"XYZ":this._x=f*l*h+c*p*m,this._y=c*p*h-f*l*m,this._z=c*l*m+f*p*h,this._w=c*l*h-f*p*m;break;case"YXZ":this._x=f*l*h+c*p*m,this._y=c*p*h-f*l*m,this._z=c*l*m-f*p*h,this._w=c*l*h+f*p*m;break;case"ZXY":this._x=f*l*h-c*p*m,this._y=c*p*h+f*l*m,this._z=c*l*m+f*p*h,this._w=c*l*h-f*p*m;break;case"ZYX":this._x=f*l*h-c*p*m,this._y=c*p*h+f*l*m,this._z=c*l*m-f*p*h,this._w=c*l*h+f*p*m;break;case"YZX":this._x=f*l*h+c*p*m,this._y=c*p*h+f*l*m,this._z=c*l*m-f*p*h,this._w=c*l*h-f*p*m;break;case"XZY":this._x=f*l*h-c*p*m,this._y=c*p*h-f*l*m,this._z=c*l*m+f*p*h,this._w=c*l*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],u=e[9],c=e[2],l=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-u)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(l-u)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(u+l)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(u+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,u=e._y,c=e._z,l=e._w;return this._x=n*l+r*a+s*c-o*u,this._y=s*l+r*u+o*a-n*c,this._z=o*l+r*c+n*u-s*a,this._w=r*l-n*a-s*u-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(u),l=Math.atan2(c,a),h=Math.sin((1-e)*l)/c,f=Math.sin(e*l)/c;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,u=t.w,c=2*(r*s-a*n),l=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+u*c+r*h-a*l,this.y=n+u*l+a*c-o*h,this.z=s+u*h+o*l-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,u=e.z;return this.x=s*u-o*a,this.y=o*r-n*u,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _l=new F,sd=new vs;class no{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,li):li.fromBufferAttribute(o,r),li.applyMatrix4(t.matrixWorld),this.expandByPoint(li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(t.matrixWorld),this.union(wa)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,li),li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Sa.subVectors(this.max,Sr),co.subVectors(t.a,Sr),lo.subVectors(t.b,Sr),uo.subVectors(t.c,Sr),es.subVectors(lo,co),ns.subVectors(uo,lo),Ss.subVectors(co,uo);let e=[0,-es.z,es.y,0,-ns.z,ns.y,0,-Ss.z,Ss.y,es.z,0,-es.x,ns.z,0,-ns.x,Ss.z,0,-Ss.x,-es.y,es.x,0,-ns.y,ns.x,0,-Ss.y,Ss.x,0];return!yl(e,co,lo,uo,Sa)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,co,lo,uo,Sa))?!1:(ba.crossVectors(es,ns),e=[ba.x,ba.y,ba.z],yl(e,co,lo,uo,Sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Di=[new F,new F,new F,new F,new F,new F,new F,new F],li=new F,wa=new no,co=new F,lo=new F,uo=new F,es=new F,ns=new F,Ss=new F,Sr=new F,Sa=new F,ba=new F,bs=new F;function yl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){bs.fromArray(i,o);const a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),u=t.dot(bs),c=e.dot(bs),l=n.dot(bs);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>a)return!1}return!0}const Vg=new no,br=new F,wl=new F;class io{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(wl)),this.expandByPoint(br.copy(t.center).sub(wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new F,Sl=new F,Ta=new F,is=new F,bl=new F,Ea=new F,Tl=new F;class wf{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sl.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),is.copy(this.origin).sub(Sl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ta),a=is.dot(this.direction),u=-is.dot(Ta),c=is.lengthSq(),l=Math.abs(1-r*r);let h,f,p,m;if(l>0)if(h=r*u-a,f=r*a-u,m=o*l,h>=0)if(f>=-m)if(f<=m){const x=1/l;h*=x,f*=x,p=h*(h+r*f+2*a)+f*(r*h+f+2*u)+c}else f=o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*u)+c;else f=-o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*u)+c;else f<=-m?(h=Math.max(0,-(-r*o+a)),f=h>0?-o:Math.min(Math.max(-o,-u),o),p=-h*h+f*(f+2*u)+c):f<=m?(h=0,f=Math.min(Math.max(-o,-u),o),p=f*(f+2*u)+c):(h=Math.max(0,-(r*o+a)),f=h>0?o:Math.min(Math.max(-o,-u),o),p=-h*h+f*(f+2*u)+c);else f=r>0?-o:o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Sl).addScaledVector(Ta,f),p}intersectSphere(t,e){Ui.subVectors(t.center,this.origin);const n=Ui.dot(this.direction),s=Ui.dot(Ui)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,u=n+r;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,u;const c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),l>=0?(o=(t.min.y-f.y)*l,r=(t.max.y-f.y)*l):(o=(t.max.y-f.y)*l,r=(t.min.y-f.y)*l),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-f.z)*h,u=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,u=(t.min.z-f.z)*h),n>u||a>s)||((a>n||n!==n)&&(n=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,s,o){bl.subVectors(e,t),Ea.subVectors(n,t),Tl.crossVectors(bl,Ea);let r=this.direction.dot(Tl),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;is.subVectors(this.origin,t);const u=a*this.direction.dot(Ea.crossVectors(is,Ea));if(u<0)return null;const c=a*this.direction.dot(bl.cross(is));if(c<0||u+c>r)return null;const l=-a*is.dot(Tl);return l<0?null:this.at(l/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,o,r,a,u,c,l,h,f,p,m,x,d){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,u,c,l,h,f,p,m,x,d)}set(t,e,n,s,o,r,a,u,c,l,h,f,p,m,x,d){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=u,g[2]=c,g[6]=l,g[10]=h,g[14]=f,g[3]=p,g[7]=m,g[11]=x,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ho.setFromMatrixColumn(t,0).length(),o=1/ho.setFromMatrixColumn(t,1).length(),r=1/ho.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),u=Math.cos(s),c=Math.sin(s),l=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const f=r*l,p=r*h,m=a*l,x=a*h;e[0]=u*l,e[4]=-u*h,e[8]=c,e[1]=p+m*c,e[5]=f-x*c,e[9]=-a*u,e[2]=x-f*c,e[6]=m+p*c,e[10]=r*u}else if(t.order==="YXZ"){const f=u*l,p=u*h,m=c*l,x=c*h;e[0]=f+x*a,e[4]=m*a-p,e[8]=r*c,e[1]=r*h,e[5]=r*l,e[9]=-a,e[2]=p*a-m,e[6]=x+f*a,e[10]=r*u}else if(t.order==="ZXY"){const f=u*l,p=u*h,m=c*l,x=c*h;e[0]=f-x*a,e[4]=-r*h,e[8]=m+p*a,e[1]=p+m*a,e[5]=r*l,e[9]=x-f*a,e[2]=-r*c,e[6]=a,e[10]=r*u}else if(t.order==="ZYX"){const f=r*l,p=r*h,m=a*l,x=a*h;e[0]=u*l,e[4]=m*c-p,e[8]=f*c+x,e[1]=u*h,e[5]=x*c+f,e[9]=p*c-m,e[2]=-c,e[6]=a*u,e[10]=r*u}else if(t.order==="YZX"){const f=r*u,p=r*c,m=a*u,x=a*c;e[0]=u*l,e[4]=x-f*h,e[8]=m*h+p,e[1]=h,e[5]=r*l,e[9]=-a*l,e[2]=-c*l,e[6]=p*h+m,e[10]=f-x*h}else if(t.order==="XZY"){const f=r*u,p=r*c,m=a*u,x=a*c;e[0]=u*l,e[4]=-h,e[8]=c*l,e[1]=f*h+x,e[5]=r*l,e[9]=p*h-m,e[2]=m*h-p,e[6]=a*l,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wg,t,Xg)}lookAt(t,e,n){const s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ss.crossVectors(n,Fn),ss.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ss.crossVectors(n,Fn)),ss.normalize(),Aa.crossVectors(Fn,ss),s[0]=ss.x,s[4]=Aa.x,s[8]=Fn.x,s[1]=ss.y,s[5]=Aa.y,s[9]=Fn.y,s[2]=ss.z,s[6]=Aa.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],u=n[8],c=n[12],l=n[1],h=n[5],f=n[9],p=n[13],m=n[2],x=n[6],d=n[10],g=n[14],S=n[3],_=n[7],y=n[11],A=n[15],E=s[0],b=s[4],T=s[8],M=s[12],w=s[1],R=s[5],L=s[9],D=s[13],z=s[2],H=s[6],k=s[10],O=s[14],G=s[3],et=s[7],ct=s[11],ft=s[15];return o[0]=r*E+a*w+u*z+c*G,o[4]=r*b+a*R+u*H+c*et,o[8]=r*T+a*L+u*k+c*ct,o[12]=r*M+a*D+u*O+c*ft,o[1]=l*E+h*w+f*z+p*G,o[5]=l*b+h*R+f*H+p*et,o[9]=l*T+h*L+f*k+p*ct,o[13]=l*M+h*D+f*O+p*ft,o[2]=m*E+x*w+d*z+g*G,o[6]=m*b+x*R+d*H+g*et,o[10]=m*T+x*L+d*k+g*ct,o[14]=m*M+x*D+d*O+g*ft,o[3]=S*E+_*w+y*z+A*G,o[7]=S*b+_*R+y*H+A*et,o[11]=S*T+_*L+y*k+A*ct,o[15]=S*M+_*D+y*O+A*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],u=t[9],c=t[13],l=t[2],h=t[6],f=t[10],p=t[14],m=t[3],x=t[7],d=t[11],g=t[15];return m*(+o*u*h-s*c*h-o*a*f+n*c*f+s*a*p-n*u*p)+x*(+e*u*p-e*c*f+o*r*f-s*r*p+s*c*l-o*u*l)+d*(+e*c*h-e*a*p-o*r*h+n*r*p+o*a*l-n*c*l)+g*(-s*a*l-e*u*h+e*a*f+s*r*h-n*r*f+n*u*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],u=t[6],c=t[7],l=t[8],h=t[9],f=t[10],p=t[11],m=t[12],x=t[13],d=t[14],g=t[15],S=h*d*c-x*f*c+x*u*p-a*d*p-h*u*g+a*f*g,_=m*f*c-l*d*c-m*u*p+r*d*p+l*u*g-r*f*g,y=l*x*c-m*h*c+m*a*p-r*x*p-l*a*g+r*h*g,A=m*h*u-l*x*u-m*a*f+r*x*f+l*a*d-r*h*d,E=e*S+n*_+s*y+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=S*b,t[1]=(x*f*o-h*d*o-x*s*p+n*d*p+h*s*g-n*f*g)*b,t[2]=(a*d*o-x*u*o+x*s*c-n*d*c-a*s*g+n*u*g)*b,t[3]=(h*u*o-a*f*o-h*s*c+n*f*c+a*s*p-n*u*p)*b,t[4]=_*b,t[5]=(l*d*o-m*f*o+m*s*p-e*d*p-l*s*g+e*f*g)*b,t[6]=(m*u*o-r*d*o-m*s*c+e*d*c+r*s*g-e*u*g)*b,t[7]=(r*f*o-l*u*o+l*s*c-e*f*c-r*s*p+e*u*p)*b,t[8]=y*b,t[9]=(m*h*o-l*x*o-m*n*p+e*x*p+l*n*g-e*h*g)*b,t[10]=(r*x*o-m*a*o+m*n*c-e*x*c-r*n*g+e*a*g)*b,t[11]=(l*a*o-r*h*o-l*n*c+e*h*c+r*n*p-e*a*p)*b,t[12]=A*b,t[13]=(l*x*s-m*h*s+m*n*f-e*x*f-l*n*d+e*h*d)*b,t[14]=(m*a*s-r*x*s-m*n*u+e*x*u+r*n*d-e*a*d)*b,t[15]=(r*h*s-l*a*s+l*n*u-e*h*u-r*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,u=t.z,c=o*r,l=o*a;return this.set(c*r+n,c*a-s*u,c*u+s*a,0,c*a+s*u,l*a+n,l*u-s*r,0,c*u-s*a,l*u+s*r,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,u=e._w,c=o+o,l=r+r,h=a+a,f=o*c,p=o*l,m=o*h,x=r*l,d=r*h,g=a*h,S=u*c,_=u*l,y=u*h,A=n.x,E=n.y,b=n.z;return s[0]=(1-(x+g))*A,s[1]=(p+y)*A,s[2]=(m-_)*A,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(f+g))*E,s[6]=(d+S)*E,s[7]=0,s[8]=(m+_)*b,s[9]=(d-S)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=ho.set(s[0],s[1],s[2]).length();const r=ho.set(s[4],s[5],s[6]).length(),a=ho.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ui.copy(this);const c=1/o,l=1/r,h=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=l,ui.elements[5]*=l,ui.elements[6]*=l,ui.elements[8]*=h,ui.elements[9]*=h,ui.elements[10]*=h,e.setFromRotationMatrix(ui),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Vi){const u=this.elements,c=2*o/(e-t),l=2*o/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,m;if(a===Vi)p=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Nc)p=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=l,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=m,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Vi){const u=this.elements,c=1/(e-t),l=1/(n-s),h=1/(r-o),f=(e+t)*c,p=(n+s)*l;let m,x;if(a===Vi)m=(r+o)*h,x=-2*h;else if(a===Nc)m=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-f,u[1]=0,u[5]=2*l,u[9]=0,u[13]=-p,u[2]=0,u[6]=0,u[10]=x,u[14]=-m,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ho=new F,ui=new me,Wg=new F(0,0,0),Xg=new F(1,1,1),ss=new F,Aa=new F,Fn=new F,od=new me,rd=new vs;class Ci{constructor(t=0,e=0,n=0,s=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],u=s[1],c=s[5],l=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return od.makeRotationFromQuaternion(t),this.setFromRotationMatrix(od,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rd.setFromEuler(this),this.setFromQuaternion(rd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qg=0;const ad=new F,fo=new vs,Ni=new me,Ra=new F,Tr=new F,Yg=new F,Zg=new vs,cd=new F(1,0,0),ld=new F(0,1,0),ud=new F(0,0,1),hd={type:"added"},$g={type:"removed"},po={type:"childadded",child:null},El={type:"childremoved",child:null};class he extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new F,e=new Ci,n=new vs,s=new F(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new qt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.multiply(fo),this}rotateOnWorldAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.premultiply(fo),this}rotateX(t){return this.rotateOnAxis(cd,t)}rotateY(t){return this.rotateOnAxis(ld,t)}rotateZ(t){return this.rotateOnAxis(ud,t)}translateOnAxis(t,e){return ad.copy(t).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cd,t)}translateY(t){return this.translateOnAxis(ld,t)}translateZ(t){return this.translateOnAxis(ud,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ra.copy(t):Ra.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Tr,Ra,this.up):Ni.lookAt(Ra,Tr,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),fo.setFromRotationMatrix(Ni),this.quaternion.premultiply(fo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hd),po.child=t,this.dispatchEvent(po),po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($g),El.child=t,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hd),po.child=t,this.dispatchEvent(po),po.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Yg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Zg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){const h=u[c];o(t.shapes,h)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(o(t.materials,this.material[u]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];s.animations.push(o(t.animations,u))}}if(e){const a=r(t.geometries),u=r(t.materials),c=r(t.textures),l=r(t.images),h=r(t.shapes),f=r(t.skeletons),p=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const u=[];for(const c in a){const l=a[c];delete l.metadata,u.push(l)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}he.DEFAULT_UP=new F(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new F,zi=new F,Al=new F,Fi=new F,mo=new F,go=new F,fd=new F,Rl=new F,Cl=new F,Pl=new F,Il=new ye,Ll=new ye,Dl=new ye;class si{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hi.subVectors(t,e),s.cross(hi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){hi.subVectors(s,e),zi.subVectors(n,e),Al.subVectors(t,e);const r=hi.dot(hi),a=hi.dot(zi),u=hi.dot(Al),c=zi.dot(zi),l=zi.dot(Al),h=r*c-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,p=(c*u-a*l)*f,m=(r*l-a*u)*f;return o.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,s,o,r,a,u){return this.getBarycoord(t,e,n,s,Fi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Fi.x),u.addScaledVector(r,Fi.y),u.addScaledVector(a,Fi.z),u)}static getInterpolatedAttribute(t,e,n,s,o,r){return Il.setScalar(0),Ll.setScalar(0),Dl.setScalar(0),Il.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,n),Dl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Il,o.x),r.addScaledVector(Ll,o.y),r.addScaledVector(Dl,o.z),r}static isFrontFacing(t,e,n,s){return hi.subVectors(n,e),zi.subVectors(t,e),hi.cross(zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),hi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return si.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return si.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;mo.subVectors(s,n),go.subVectors(o,n),Rl.subVectors(t,n);const u=mo.dot(Rl),c=go.dot(Rl);if(u<=0&&c<=0)return e.copy(n);Cl.subVectors(t,s);const l=mo.dot(Cl),h=go.dot(Cl);if(l>=0&&h<=l)return e.copy(s);const f=u*h-l*c;if(f<=0&&u>=0&&l<=0)return r=u/(u-l),e.copy(n).addScaledVector(mo,r);Pl.subVectors(t,o);const p=mo.dot(Pl),m=go.dot(Pl);if(m>=0&&p<=m)return e.copy(o);const x=p*c-u*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(go,a);const d=l*m-p*h;if(d<=0&&h-l>=0&&p-m>=0)return fd.subVectors(o,s),a=(h-l)/(h-l+(p-m)),e.copy(s).addScaledVector(fd,a);const g=1/(d+x+f);return r=x*g,a=f*g,e.copy(n).addScaledVector(mo,r).addScaledVector(go,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function Ul(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=Lg(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Ul(r,o,t+1/3),this.g=Ul(r,o,t),this.b=Ul(r,o,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=Cn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){const n=cp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=qo(t.r),this.g=qo(t.g),this.b=qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return ue.fromWorkingColorSpace(sn.copy(this),t),Math.round(Jt(sn.r*255,0,255))*65536+Math.round(Jt(sn.g*255,0,255))*256+Math.round(Jt(sn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,s=sn.g,o=sn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let u,c;const l=(a+r)/2;if(a===r)u=0,c=0;else{const h=r-a;switch(c=l<=.5?h/(r+a):h/(2-r-a),r){case n:u=(s-o)/h+(s<o?6:0);break;case s:u=(o-n)/h+2;break;case o:u=(n-s)/h+4;break}u/=6}return t.h=u,t.s=c,t.l=l,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Cn){ue.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,s=sn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(Ca);const n=xl(os.h,Ca.h,e),s=xl(os.s,Ca.s,e),o=xl(os.l,Ca.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new ot;ot.NAMES=cp;let jg=0;class _s extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Wo,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tu,this.blendDst=Eu,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(n.blending=this.blending),this.side!==Ms&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tu&&(n.blendSrc=this.blendSrc),this.blendDst!==Eu&&(n.blendDst=this.blendDst),this.blendEquation!==Bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const u=o[a];delete u.metadata,r.push(u)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Y extends _s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=W0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new F,Pa=new pt;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pa.fromBufferAttribute(this,e),Pa.applyMatrix3(t),this.setXY(e,Pa.x,Pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),o=_e(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lh&&(t.usage=this.usage),t}}class lp extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class up extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kg=0;const Kn=new me,Nl=new he,xo=new F,On=new no,Er=new no,Ze=new F;class Ee extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sp(t)?up:lp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new qt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];On.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(On.min,Er.min),On.expandByPoint(Ze),Ze.addVectors(On.max,Er.max),On.expandByPoint(Ze)):(On.expandByPoint(Er.min),On.expandByPoint(Er.max))}On.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ze.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],u=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Ze.fromBufferAttribute(a,c),u&&(xo.fromBufferAttribute(t,c),Ze.add(xo)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],u=[];for(let T=0;T<n.count;T++)a[T]=new F,u[T]=new F;const c=new F,l=new F,h=new F,f=new pt,p=new pt,m=new pt,x=new F,d=new F;function g(T,M,w){c.fromBufferAttribute(n,T),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,w),f.fromBufferAttribute(o,T),p.fromBufferAttribute(o,M),m.fromBufferAttribute(o,w),l.sub(c),h.sub(c),p.sub(f),m.sub(f);const R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(x.copy(l).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(R),d.copy(h).multiplyScalar(p.x).addScaledVector(l,-m.x).multiplyScalar(R),a[T].add(x),a[M].add(x),a[w].add(x),u[T].add(d),u[M].add(d),u[w].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let T=0,M=S.length;T<M;++T){const w=S[T],R=w.start,L=w.count;for(let D=R,z=R+L;D<z;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const _=new F,y=new F,A=new F,E=new F;function b(T){A.fromBufferAttribute(s,T),E.copy(A);const M=a[T];_.copy(M),_.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(E,M);const R=y.dot(u[T])<0?-1:1;r.setXYZW(T,_.x,_.y,_.z,R)}for(let T=0,M=S.length;T<M;++T){const w=S[T],R=w.start,L=w.count;for(let D=R,z=R+L;D<z;D+=3)b(t.getX(D+0)),b(t.getX(D+1)),b(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new F,o=new F,r=new F,a=new F,u=new F,c=new F,l=new F,h=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){const m=t.getX(f+0),x=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,d),l.subVectors(r,o),h.subVectors(s,o),l.cross(h),a.fromBufferAttribute(n,m),u.fromBufferAttribute(n,x),c.fromBufferAttribute(n,d),a.add(l),u.add(l),c.add(l),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,u.x,u.y,u.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),l.subVectors(r,o),h.subVectors(s,o),l.cross(h),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,u){const c=a.array,l=a.itemSize,h=a.normalized,f=new c.constructor(u.length*l);let p=0,m=0;for(let x=0,d=u.length;x<d;x++){a.isInterleavedBufferAttribute?p=u[x]*a.data.stride+a.offset:p=u[x]*l;for(let g=0;g<l;g++)f[m++]=c[p++]}return new Oe(f,l,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,s=this.attributes;for(const a in s){const u=s[a],c=t(u,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const u=[],c=o[a];for(let l=0,h=c.length;l<h;l++){const f=c[l],p=t(f,n);u.push(p)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,u=r.length;a<u;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(t[c]=u[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const c=n[u];t.data.attributes[u]=c.toJSON(t.data)}const s={};let o=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],l=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];l.push(p.toJSON(t.data))}l.length>0&&(s[u]=l,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const l=s[c];this.setAttribute(c,l.clone(e))}const o=t.morphAttributes;for(const c in o){const l=[],h=o[c];for(let f=0,p=h.length;f<p;f++)l.push(h[f].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,l=r.length;c<l;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dd=new me,Ts=new wf,Ia=new io,pd=new F,La=new F,Da=new F,Ua=new F,zl=new F,Na=new F,md=new F,za=new F;class C extends he{constructor(t=new Ee,e=new Y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Na.set(0,0,0);for(let u=0,c=o.length;u<c;u++){const l=a[u],h=o[u];l!==0&&(zl.fromBufferAttribute(h,t),r?Na.addScaledVector(zl,l):Na.addScaledVector(zl.sub(e),l))}e.add(Na)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(o),Ts.copy(t.ray).recast(t.near),!(Ia.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Ia,pd)===null||Ts.origin.distanceToSquared(pd)>(t.far-t.near)**2))&&(dd.copy(o).invert(),Ts.copy(t.ray).applyMatrix4(dd),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,u=o.attributes.position,c=o.attributes.uv,l=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const d=f[m],g=r[d.materialIndex],S=Math.max(d.start,p.start),_=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let y=S,A=_;y<A;y+=3){const E=a.getX(y),b=a.getX(y+1),T=a.getX(y+2);s=Fa(this,g,t,n,c,l,h,E,b,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let d=m,g=x;d<g;d+=3){const S=a.getX(d),_=a.getX(d+1),y=a.getX(d+2);s=Fa(this,r,t,n,c,l,h,S,_,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const d=f[m],g=r[d.materialIndex],S=Math.max(d.start,p.start),_=Math.min(u.count,Math.min(d.start+d.count,p.start+p.count));for(let y=S,A=_;y<A;y+=3){const E=y,b=y+1,T=y+2;s=Fa(this,g,t,n,c,l,h,E,b,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(u.count,p.start+p.count);for(let d=m,g=x;d<g;d+=3){const S=d,_=d+1,y=d+2;s=Fa(this,r,t,n,c,l,h,S,_,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function Jg(i,t,e,n,s,o,r,a){let u;if(t.side===ln?u=n.intersectTriangle(r,o,s,!0,a):u=n.intersectTriangle(s,o,r,t.side===Ms,a),u===null)return null;za.copy(a),za.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(za);return c<e.near||c>e.far?null:{distance:c,point:za.clone(),object:i}}function Fa(i,t,e,n,s,o,r,a,u,c){i.getVertexPosition(a,La),i.getVertexPosition(u,Da),i.getVertexPosition(c,Ua);const l=Jg(i,t,e,n,La,Da,Ua,md);if(l){const h=new F;si.getBarycoord(md,La,Da,Ua,h),s&&(l.uv=si.getInterpolatedAttribute(s,a,u,c,h,new pt)),o&&(l.uv1=si.getInterpolatedAttribute(o,a,u,c,h,new pt)),r&&(l.normal=si.getInterpolatedAttribute(r,a,u,c,h,new F),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a,b:u,c,normal:new F,materialIndex:0};si.getNormal(La,Da,Ua,f.normal),l.face=f,l.barycoord=h}return l}class da extends Ee{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const u=[],c=[],l=[],h=[];let f=0,p=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(u),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(h,2));function m(x,d,g,S,_,y,A,E,b,T,M){const w=y/b,R=A/T,L=y/2,D=A/2,z=E/2,H=b+1,k=T+1;let O=0,G=0;const et=new F;for(let ct=0;ct<k;ct++){const ft=ct*R-D;for(let Pt=0;Pt<H;Pt++){const Wt=Pt*w-L;et[x]=Wt*S,et[d]=ft*_,et[g]=z,c.push(et.x,et.y,et.z),et[x]=0,et[d]=0,et[g]=E>0?1:-1,l.push(et.x,et.y,et.z),h.push(Pt/b),h.push(1-ct/T),O+=1}}for(let ct=0;ct<T;ct++)for(let ft=0;ft<b;ft++){const Pt=f+ft+H*ct,Wt=f+ft+H*(ct+1),tt=f+(ft+1)+H*(ct+1),ut=f+(ft+1)+H*ct;u.push(Pt,Wt,ut),u.push(Wt,tt,ut),G+=6}a.addGroup(p,G,M),p+=G,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){const t={};for(let e=0;e<i.length;e++){const n=hr(i[e]);for(const s in n)t[s]=n[s]}return t}function Qg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Fc={clone:hr,merge:pn};var tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends _s{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=Qg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fp extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new F,gd=new pt,xd=new pt;class Gn extends fp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=uh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return uh*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,gd,xd),e.subVectors(xd,gd)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const u=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/u,e-=r.offsetY*n/c,s*=r.width/u,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vo=-90,Mo=1;class nx extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gn(vo,Mo,t,e);s.layers=this.layers,this.add(s);const o=new Gn(vo,Mo,t,e);o.layers=this.layers,this.add(o);const r=new Gn(vo,Mo,t,e);r.layers=this.layers,this.add(r);const a=new Gn(vo,Mo,t,e);a.layers=this.layers,this.add(a);const u=new Gn(vo,Mo,t,e);u.layers=this.layers,this.add(u);const c=new Gn(vo,Mo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,u]=e;for(const c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Nc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,u,c,l]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,u),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(h,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class dp extends un{constructor(t,e,n,s,o,r,a,u,c,l){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,n,s,o,r,a,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ix extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ei}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new da(5,5,5),o=new Dn({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Yi});o.uniforms.tEquirect.value=e;const r=new C(s,o),a=e.minFilter;return e.minFilter===Hs&&(e.minFilter=Ei),new nx(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class Sf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new Sf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sx extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ox{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lh,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new F;class Oc{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),o=_e(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Oc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pp extends _s{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _o;const Ar=new F,yo=new F,wo=new F,So=new pt,Rr=new pt,mp=new me,Oa=new F,Cr=new F,Ba=new F,vd=new pt,Fl=new pt,Md=new pt;class rx extends he{constructor(t=new pp){if(super(),this.isSprite=!0,this.type="Sprite",_o===void 0){_o=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ox(e,5);_o.setIndex([0,1,2,0,2,3]),_o.setAttribute("position",new Oc(n,3,0,!1)),_o.setAttribute("uv",new Oc(n,2,3,!1))}this.geometry=_o,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yo.setFromMatrixScale(this.matrixWorld),mp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yo.multiplyScalar(-wo.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Ga(Oa.set(-.5,-.5,0),wo,r,yo,s,o),Ga(Cr.set(.5,-.5,0),wo,r,yo,s,o),Ga(Ba.set(.5,.5,0),wo,r,yo,s,o),vd.set(0,0),Fl.set(1,0),Md.set(1,1);let a=t.ray.intersectTriangle(Oa,Cr,Ba,!1,Ar);if(a===null&&(Ga(Cr.set(-.5,.5,0),wo,r,yo,s,o),Fl.set(0,1),a=t.ray.intersectTriangle(Oa,Ba,Cr,!1,Ar),a===null))return;const u=t.ray.origin.distanceTo(Ar);u<t.near||u>t.far||e.push({distance:u,point:Ar.clone(),uv:si.getInterpolation(Ar,Oa,Cr,Ba,vd,Fl,Md,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ga(i,t,e,n,s,o){So.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Rr.x=o*So.x-s*So.y,Rr.y=s*So.x+o*So.y):Rr.copy(So),i.copy(t),i.x+=Rr.x,i.y+=Rr.y,i.applyMatrix4(mp)}class ax extends un{constructor(t=null,e=1,n=1,s,o,r,a,u,c=Xn,l=Xn,h,f){super(null,r,a,u,c,l,s,o,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bo=new me,_d=new me,ka=[],yd=new no,cx=new me,Pr=new C,Ir=new io;class oi extends C{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new no),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bo),yd.copy(t.boundingBox).applyMatrix4(bo),this.boundingBox.union(yd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new io),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bo),Ir.copy(t.boundingSphere).applyMatrix4(bo),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),t.ray.intersectsSphere(Ir)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,bo),_d.multiplyMatrices(n,bo),Pr.matrixWorld=_d,Pr.raycast(t,ka);for(let r=0,a=ka.length;r<a;r++){const u=ka[r];u.instanceId=o,u.object=this,e.push(u)}ka.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ax(new Float32Array(s*this.count),s,this.count,vf,Ai));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,u=s*t;o[u]=a,o.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Ol=new F,lx=new F,ux=new qt;class Is{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ol.subVectors(n,e).cross(lx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ux.getNormalMatrix(t),s=this.coplanarPoint(Ol).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new io,Ha=new F;class bf{constructor(t=new Is,e=new Is,n=new Is,s=new Is,o=new Is,r=new Is){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],u=s[3],c=s[4],l=s[5],h=s[6],f=s[7],p=s[8],m=s[9],x=s[10],d=s[11],g=s[12],S=s[13],_=s[14],y=s[15];if(n[0].setComponents(u-o,f-c,d-p,y-g).normalize(),n[1].setComponents(u+o,f+c,d+p,y+g).normalize(),n[2].setComponents(u+r,f+l,d+m,y+S).normalize(),n[3].setComponents(u-r,f-l,d-m,y-S).normalize(),n[4].setComponents(u-a,f-h,d-x,y-_).normalize(),e===Vi)n[5].setComponents(u+a,f+h,d+x,y+_).normalize();else if(e===Nc)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ha.x=s.normal.x>0?t.max.x:t.min.x,Ha.y=s.normal.y>0?t.max.y:t.min.y,Ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tf extends _s{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Bc=new F,Gc=new F,wd=new me,Lr=new wf,Va=new io,Bl=new F,Sd=new F;class gp extends he{constructor(t=new Ee,e=new Tf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Bc.fromBufferAttribute(e,s-1),Gc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Bc.distanceTo(Gc);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(s),Va.radius+=o,t.ray.intersectsSphere(Va)===!1)return;wd.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(wd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=this.isLineSegments?2:1,l=n.index,f=n.attributes.position;if(l!==null){const p=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let x=p,d=m-1;x<d;x+=c){const g=l.getX(x),S=l.getX(x+1),_=Wa(this,t,Lr,u,g,S);_&&e.push(_)}if(this.isLineLoop){const x=l.getX(m-1),d=l.getX(p),g=Wa(this,t,Lr,u,x,d);g&&e.push(g)}}else{const p=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let x=p,d=m-1;x<d;x+=c){const g=Wa(this,t,Lr,u,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=Wa(this,t,Lr,u,m-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Wa(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Bc.fromBufferAttribute(r,s),Gc.fromBufferAttribute(r,o),e.distanceSqToSegment(Bc,Gc,Bl,Sd)>n)return;Bl.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Bl);if(!(u<t.near||u>t.far))return{distance:u,point:Sd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const bd=new F,Td=new F;class hx extends gp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)bd.fromBufferAttribute(e,s),Td.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bd.distanceTo(Td);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ef extends _s{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ed=new me,hh=new wf,Xa=new io,qa=new F;class xp extends he{constructor(t=new Ee,e=new Ef){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=o,t.ray.intersectsSphere(Xa)===!1)return;Ed.copy(s).invert(),hh.copy(t.ray).applyMatrix4(Ed);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let m=f,x=p;m<x;m++){const d=c.getX(m);qa.fromBufferAttribute(h,d),Ad(qa,d,u,s,t,e,this)}}else{const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let m=f,x=p;m<x;m++)qa.fromBufferAttribute(h,m),Ad(qa,m,u,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ad(i,t,e,n,s,o,r){const a=hh.distanceSqToPoint(i);if(a<e){const u=new F;hh.closestPointToPoint(i,u),u.applyMatrix4(n);const c=s.ray.origin.distanceTo(u);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class te extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}class pa extends un{constructor(t,e,n,s,o,r,a,u,c){super(t,e,n,s,o,r,a,u,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vp extends un{constructor(t,e,n,s,o,r,a,u,c,l=Xo){if(l!==Xo&&l!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Xo&&(n=Js),n===void 0&&l===lr&&(n=cr),super(null,s,o,r,a,u,l,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xn,this.minFilter=u!==void 0?u:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,u=o-1,c;for(;a<=u;)if(s=Math.floor(a+(u-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)u=s-1;else{u=s;break}if(s=u,n[s]===r)return s/(o-1);const l=n[s],f=n[s+1]-l,p=(r-l)/f;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),u=e||(r.isVector2?new pt:new F);return u.copy(a).sub(r).normalize(),u}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,s=[],o=[],r=[],a=new F,u=new me;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new F)}o[0]=new F,r[0]=new F;let c=Number.MAX_VALUE;const l=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);l<=c&&(c=l,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Jt(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(u.makeRotationAxis(a,m))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(Jt(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let m=1;m<=t;m++)o[m].applyMatrix4(u.makeRotationAxis(s[m],p*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Af extends Ii{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=u}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let u=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=u-this.aX,p=c-this.aY;u=f*l-p*h+this.aX,c=f*h+p*l+this.aY}return n.set(u,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class fx extends Af{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Rf(){let i=0,t=0,e=0,n=0;function s(o,r,a,u){i=o,t=a,e=-3*o+3*r-2*a-u,n=2*o-2*r+a+u}return{initCatmullRom:function(o,r,a,u,c){s(r,a,c*(a-o),c*(u-r))},initNonuniformCatmullRom:function(o,r,a,u,c,l,h){let f=(r-o)/c-(a-o)/(c+l)+(a-r)/l,p=(a-r)/l-(u-r)/(l+h)+(u-a)/h;f*=l,p*=l,s(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Ya=new F,Gl=new Rf,kl=new Rf,Hl=new Rf;class so extends Ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),u=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:u===0&&a===o-1&&(a=o-2,u=1);let c,l;this.closed||a>0?c=s[(a-1)%o]:(Ya.subVectors(s[0],s[1]).add(s[0]),c=Ya);const h=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?l=s[(a+2)%o]:(Ya.subVectors(s[o-1],s[o-2]).add(s[o-1]),l=Ya),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(l),p);x<1e-4&&(x=1),m<1e-4&&(m=x),d<1e-4&&(d=x),Gl.initNonuniformCatmullRom(c.x,h.x,f.x,l.x,m,x,d),kl.initNonuniformCatmullRom(c.y,h.y,f.y,l.y,m,x,d),Hl.initNonuniformCatmullRom(c.z,h.z,f.z,l.z,m,x,d)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(c.x,h.x,f.x,l.x,this.tension),kl.initCatmullRom(c.y,h.y,f.y,l.y,this.tension),Hl.initCatmullRom(c.z,h.z,f.z,l.z,this.tension));return n.set(Gl.calc(u),kl.calc(u),Hl.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rd(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,u=i*a;return(2*e-2*n+o+r)*u+(-3*e+3*n-2*o-r)*a+o*i+e}function dx(i,t){const e=1-i;return e*e*t}function px(i,t){return 2*(1-i)*i*t}function mx(i,t){return i*i*t}function $r(i,t,e,n){return dx(i,t)+px(i,e)+mx(i,n)}function gx(i,t){const e=1-i;return e*e*e*t}function xx(i,t){const e=1-i;return 3*e*e*i*t}function vx(i,t){return 3*(1-i)*i*i*t}function Mx(i,t){return i*i*i*t}function jr(i,t,e,n,s){return gx(i,t)+xx(i,e)+vx(i,n)+Mx(i,s)}class Mp extends Ii{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(jr(t,s.x,o.x,r.x,a.x),jr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _x extends Ii{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(jr(t,s.x,o.x,r.x,a.x),jr(t,s.y,o.y,r.y,a.y),jr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _p extends Ii{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends Ii{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yp extends Ii{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set($r(t,s.x,o.x,r.x),$r(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wp extends Ii{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set($r(t,s.x,o.x,r.x),$r(t,s.y,o.y,r.y),$r(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sp extends Ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,u=s[r===0?r:r-1],c=s[r],l=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(Rd(a,u.x,c.x,l.x,h.x),Rd(a,u.y,c.y,l.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var fh=Object.freeze({__proto__:null,ArcCurve:fx,CatmullRomCurve3:so,CubicBezierCurve:Mp,CubicBezierCurve3:_x,EllipseCurve:Af,LineCurve:_p,LineCurve3:Cf,QuadraticBezierCurve:yp,QuadraticBezierCurve3:wp,SplineCurve:Sp});class yx extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],u=a.getLength(),c=u===0?0:1-r/u;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,u=r.getPoints(a);for(let c=0;c<u.length;c++){const l=u[c];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new fh[s.type]().fromJSON(s))}return this}}class kc extends yx{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _p(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new yp(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Mp(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+a,e+u,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,u){const c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+c,e+l,n,s,o,r,a,u),this}absellipse(t,e,n,s,o,r,a,u){const c=new Af(t,e,n,s,o,r,a,u);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ge extends Ee{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],u=[],c=new F,l=new pt;r.push(0,0,0),a.push(0,0,1),u.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),a.push(0,0,1),l.x=(r[f]/t+1)/2,l.y=(r[f+1]/t+1)/2,u.push(l.x,l.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gt extends Ee{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:u};const c=this;s=Math.floor(s),o=Math.floor(o);const l=[],h=[],f=[],p=[];let m=0;const x=[],d=n/2;let g=0;S(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(l),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(p,2));function S(){const y=new F,A=new F;let E=0;const b=(e-t)/n;for(let T=0;T<=o;T++){const M=[],w=T/o,R=w*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,z=D*u+a,H=Math.sin(z),k=Math.cos(z);A.x=R*H,A.y=-w*n+d,A.z=R*k,h.push(A.x,A.y,A.z),y.set(H,b,k).normalize(),f.push(y.x,y.y,y.z),p.push(D,1-w),M.push(m++)}x.push(M)}for(let T=0;T<s;T++)for(let M=0;M<o;M++){const w=x[M][T],R=x[M+1][T],L=x[M+1][T+1],D=x[M][T+1];(t>0||M!==0)&&(l.push(w,R,D),E+=3),(e>0||M!==o-1)&&(l.push(R,L,D),E+=3)}c.addGroup(g,E,0),g+=E}function _(y){const A=m,E=new pt,b=new F;let T=0;const M=y===!0?t:e,w=y===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,d*w,0),f.push(0,w,0),p.push(.5,.5),m++;const R=m;for(let L=0;L<=s;L++){const z=L/s*u+a,H=Math.cos(z),k=Math.sin(z);b.x=M*k,b.y=d*w,b.z=M*H,h.push(b.x,b.y,b.z),f.push(0,w,0),E.x=H*.5+.5,E.y=k*.5*w+.5,p.push(E.x,E.y),m++}for(let L=0;L<s;L++){const D=A+L,z=R+L;y===!0?l.push(z,z+1,D):l.push(z+1,z,D),T+=3}c.addGroup(g,T,y===!0?1:2),g+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pn extends gt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ma extends Ee{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),l(),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(o.slice(),3)),this.setAttribute("uv",new Vt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const _=new F,y=new F,A=new F;for(let E=0;E<e.length;E+=3)p(e[E+0],_),p(e[E+1],y),p(e[E+2],A),u(_,y,A,S)}function u(S,_,y,A){const E=A+1,b=[];for(let T=0;T<=E;T++){b[T]=[];const M=S.clone().lerp(y,T/E),w=_.clone().lerp(y,T/E),R=E-T;for(let L=0;L<=R;L++)L===0&&T===E?b[T][L]=M:b[T][L]=M.clone().lerp(w,L/R)}for(let T=0;T<E;T++)for(let M=0;M<2*(E-T)-1;M++){const w=Math.floor(M/2);M%2===0?(f(b[T][w+1]),f(b[T+1][w]),f(b[T][w])):(f(b[T][w+1]),f(b[T+1][w+1]),f(b[T+1][w]))}}function c(S){const _=new F;for(let y=0;y<o.length;y+=3)_.x=o[y+0],_.y=o[y+1],_.z=o[y+2],_.normalize().multiplyScalar(S),o[y+0]=_.x,o[y+1]=_.y,o[y+2]=_.z}function l(){const S=new F;for(let _=0;_<o.length;_+=3){S.x=o[_+0],S.y=o[_+1],S.z=o[_+2];const y=d(S)/2/Math.PI+.5,A=g(S)/Math.PI+.5;r.push(y,1-A)}m(),h()}function h(){for(let S=0;S<r.length;S+=6){const _=r[S+0],y=r[S+2],A=r[S+4],E=Math.max(_,y,A),b=Math.min(_,y,A);E>.9&&b<.1&&(_<.2&&(r[S+0]+=1),y<.2&&(r[S+2]+=1),A<.2&&(r[S+4]+=1))}}function f(S){o.push(S.x,S.y,S.z)}function p(S,_){const y=S*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function m(){const S=new F,_=new F,y=new F,A=new F,E=new pt,b=new pt,T=new pt;for(let M=0,w=0;M<o.length;M+=9,w+=6){S.set(o[M+0],o[M+1],o[M+2]),_.set(o[M+3],o[M+4],o[M+5]),y.set(o[M+6],o[M+7],o[M+8]),E.set(r[w+0],r[w+1]),b.set(r[w+2],r[w+3]),T.set(r[w+4],r[w+5]),A.copy(S).add(_).add(y).divideScalar(3);const R=d(A);x(E,w+0,S,R),x(b,w+2,_,R),x(T,w+4,y,R)}}function x(S,_,y,A){A<0&&S.x===1&&(r[_]=S.x-1),y.x===0&&y.z===0&&(r[_]=A/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.vertices,t.indices,t.radius,t.details)}}class Pf extends ma{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pf(t.radius,t.detail)}}class Hc extends kc{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new kc().fromJSON(s))}return this}}const wx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=bp(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,u,c,l,h,f,p;if(n&&(o=Ax(i,t,o,e)),i.length>80*e){a=c=i[0],u=l=i[1];for(let m=e;m<s;m+=e)h=i[m],f=i[m+1],h<a&&(a=h),f<u&&(u=f),h>c&&(c=h),f>l&&(l=f);p=Math.max(c-a,l-u),p=p!==0?32767/p:0}return oa(o,r,e,a,u,p,0),r}};function bp(i,t,e,n,s){let o,r;if(s===Ox(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Cd(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Cd(o,i[o],i[o+1],r);return r&&rl(r,r.next)&&(aa(r),r=r.next),r}function Qs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(rl(e,e.next)||Ue(e.prev,e,e.next)===0)){if(aa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function oa(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Lx(i,n,s,o);let a=i,u,c;for(;i.prev!==i.next;){if(u=i.prev,c=i.next,o?bx(i,n,s,o):Sx(i)){t.push(u.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),aa(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Tx(Qs(i),t,e),oa(i,t,e,n,s,o,2)):r===2&&Ex(i,t,e,n,s,o):oa(Qs(i),t,e,n,s,o,1);break}}}function Sx(i){const t=i.prev,e=i,n=i.next;if(Ue(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,u=e.y,c=n.y,l=s<o?s<r?s:r:o<r?o:r,h=a<u?a<c?a:c:u<c?u:c,f=s>o?s>r?s:r:o>r?o:r,p=a>u?a>c?a:c:u>c?u:c;let m=n.next;for(;m!==t;){if(m.x>=l&&m.x<=f&&m.y>=h&&m.y<=p&&zo(s,a,o,u,r,c,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function bx(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ue(s,o,r)>=0)return!1;const a=s.x,u=o.x,c=r.x,l=s.y,h=o.y,f=r.y,p=a<u?a<c?a:c:u<c?u:c,m=l<h?l<f?l:f:h<f?h:f,x=a>u?a>c?a:c:u>c?u:c,d=l>h?l>f?l:f:h>f?h:f,g=dh(p,m,t,e,n),S=dh(x,d,t,e,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=g&&y&&y.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=d&&_!==s&&_!==r&&zo(a,l,u,h,c,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=m&&y.y<=d&&y!==s&&y!==r&&zo(a,l,u,h,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=d&&_!==s&&_!==r&&zo(a,l,u,h,c,f,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=S;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=d&&y!==s&&y!==r&&zo(a,l,u,h,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Tx(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!rl(s,o)&&Tp(s,n,n.next,o)&&ra(s,o)&&ra(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),aa(n),aa(n.next),n=i=o),n=n.next}while(n!==i);return Qs(n)}function Ex(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Nx(r,a)){let u=Ep(r,a);r=Qs(r,r.next),u=Qs(u,u.next),oa(r,t,e,n,s,o,0),oa(u,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Ax(i,t,e,n){const s=[];let o,r,a,u,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,u=o<r-1?t[o+1]*n:i.length,c=bp(i,a,u,n,!1),c===c.next&&(c.steiner=!0),s.push(Ux(c));for(s.sort(Rx),o=0;o<s.length;o++)e=Cx(s[o],e);return e}function Rx(i,t){return i.x-t.x}function Cx(i,t){const e=Px(i,t);if(!e)return t;const n=Ep(e,i);return Qs(n,n.next),Qs(e,e.next)}function Px(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,u=s.x,c=s.y;let l=1/0,h;e=s;do o>=e.x&&e.x>=u&&o!==e.x&&zo(r<c?o:n,r,u,c,r<c?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),ra(e,i)&&(h<l||h===l&&(e.x>s.x||e.x===s.x&&Ix(s,e)))&&(s=e,l=h)),e=e.next;while(e!==a);return s}function Ix(i,t){return Ue(i.prev,i,t.prev)<0&&Ue(t.next,i,i.next)<0}function Lx(i,t,e,n){let s=i;do s.z===0&&(s.z=dh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dx(s)}function Dx(i){let t,e,n,s,o,r,a,u,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(u=c;a>0||u>0&&n;)a!==0&&(u===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,u--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function dh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ux(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zo(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Nx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zx(i,t)&&(ra(i,t)&&ra(t,i)&&Fx(i,t)&&(Ue(i.prev,i,t.prev)||Ue(i,t.prev,t))||rl(i,t)&&Ue(i.prev,i,i.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function rl(i,t){return i.x===t.x&&i.y===t.y}function Tp(i,t,e,n){const s=$a(Ue(i,t,e)),o=$a(Ue(i,t,n)),r=$a(Ue(e,n,i)),a=$a(Ue(e,n,t));return!!(s!==o&&r!==a||s===0&&Za(i,e,t)||o===0&&Za(i,n,t)||r===0&&Za(e,i,n)||a===0&&Za(e,t,n))}function Za(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $a(i){return i>0?1:i<0?-1:0}function zx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Tp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ra(i,t){return Ue(i.prev,i,i.next)<0?Ue(i,t,i.next)>=0&&Ue(i,i.prev,t)>=0:Ue(i,t,i.prev)<0||Ue(i,i.next,t)<0}function Fx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ep(i,t){const e=new ph(i.i,i.x,i.y),n=new ph(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Cd(i,t,e,n){const s=new ph(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function aa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ph(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ox(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Kr{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Kr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Pd(t),Id(n,t);let r=t.length;e.forEach(Pd);for(let u=0;u<e.length;u++)s.push(r),r+=e[u].length,Id(n,e[u]);const a=wx.triangulate(n,s);for(let u=0;u<a.length;u+=3)o.push(a.slice(u,u+3));return o}}function Pd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Id(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class fr extends ma{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fr(t.radius,t.detail)}}class If extends ma{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new If(t.radius,t.detail)}}class se extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),u=Math.floor(s),c=a+1,l=u+1,h=t/a,f=e/u,p=[],m=[],x=[],d=[];for(let g=0;g<l;g++){const S=g*f-r;for(let _=0;_<c;_++){const y=_*h-o;m.push(y,-S,0),x.push(0,0,1),d.push(_/a),d.push(1-g/u)}}for(let g=0;g<u;g++)for(let S=0;S<a;S++){const _=S+c*g,y=S+c*(g+1),A=S+1+c*(g+1),E=S+1+c*g;p.push(_,y,E),p.push(y,A,E)}this.setIndex(p),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.widthSegments,t.heightSegments)}}class dr extends Ee{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],u=[],c=[],l=[];let h=t;const f=(e-t)/s,p=new F,m=new pt;for(let x=0;x<=s;x++){for(let d=0;d<=n;d++){const g=o+d/n*r;p.x=h*Math.cos(g),p.y=h*Math.sin(g),u.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,l.push(m.x,m.y)}h+=f}for(let x=0;x<s;x++){const d=x*(n+1);for(let g=0;g<n;g++){const S=g+d,_=S,y=S+n+1,A=S+n+2,E=S+1;a.push(_,y,E),a.push(y,A,E)}}this.setIndex(a),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ca extends Ee{constructor(t=new Hc([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,u=0;if(Array.isArray(t)===!1)c(t);else for(let l=0;l<t.length;l++)c(t[l]),this.addGroup(a,u,l),a+=u,u=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(r,2));function c(l){const h=s.length/3,f=l.extractPoints(e);let p=f.shape;const m=f.holes;Kr.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,g=m.length;d<g;d++){const S=m[d];Kr.isClockWise(S)===!0&&(m[d]=S.reverse())}const x=Kr.triangulateShape(p,m);for(let d=0,g=m.length;d<g;d++){const S=m[d];p=p.concat(S)}for(let d=0,g=p.length;d<g;d++){const S=p[d];s.push(S.x,S.y,0),o.push(0,0,1),r.push(S.x,S.y)}for(let d=0,g=x.length;d<g;d++){const S=x[d],_=S[0]+h,y=S[1]+h,A=S[2]+h;n.push(_,y,A),u+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Bx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new ca(n,t.curveSegments)}}function Bx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Z extends Ee{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const u=Math.min(r+a,Math.PI);let c=0;const l=[],h=new F,f=new F,p=[],m=[],x=[],d=[];for(let g=0;g<=n;g++){const S=[],_=g/n;let y=0;g===0&&r===0?y=.5/e:g===n&&u===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(s+E*o)*Math.sin(r+_*a),h.y=t*Math.cos(r+_*a),h.z=t*Math.sin(s+E*o)*Math.sin(r+_*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),d.push(E+y,1-_),S.push(c++)}l.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){const _=l[g][S+1],y=l[g][S],A=l[g+1][S],E=l[g+1][S+1];(g!==0||r>0)&&p.push(_,y,E),(g!==n-1||u<Math.PI)&&p.push(y,A,E)}this.setIndex(p),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Z(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pe extends Ee{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],u=[],c=[],l=new F,h=new F,f=new F;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const x=m/s*o,d=p/n*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(x),h.y=(t+e*Math.cos(d))*Math.sin(x),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),f.subVectors(h,l).normalize(),u.push(f.x,f.y,f.z),c.push(m/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const x=(s+1)*p+m-1,d=(s+1)*(p-1)+m-1,g=(s+1)*(p-1)+m,S=(s+1)*p+m;r.push(x,d,S),r.push(d,g,S)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cn extends Ee{constructor(t=new wp(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new F,u=new F,c=new pt;let l=new F;const h=[],f=[],p=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(p,2));function x(){for(let _=0;_<e;_++)d(_);d(o===!1?e:0),S(),g()}function d(_){l=t.getPointAt(_/e,l);const y=r.normals[_],A=r.binormals[_];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,T=Math.sin(b),M=-Math.cos(b);u.x=M*y.x+T*A.x,u.y=M*y.y+T*A.y,u.z=M*y.z+T*A.z,u.normalize(),f.push(u.x,u.y,u.z),a.x=l.x+n*u.x,a.y=l.y+n*u.y,a.z=l.z+n*u.z,h.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){const A=(s+1)*(_-1)+(y-1),E=(s+1)*_+(y-1),b=(s+1)*_+y,T=(s+1)*(_-1)+y;m.push(A,E,T),m.push(E,b,T)}}function S(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)c.x=_/e,c.y=y/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new cn(new fh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class q extends _s{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=np,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gx extends _s{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kx extends _s{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lf extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hx extends Lf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vl=new me,Ld=new F,Dd=new F;class Ap{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ld.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ld),Dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dd),e.updateMatrixWorld(),Vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ud=new me,Dr=new F,Wl=new F;class Vx extends Ap{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dr),Wl.copy(n.position),Wl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Wl),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ud)}}class vr extends Lf{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Df extends fp{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,u=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=l*this.view.offsetY,u=a-l*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Wx extends Ap{constructor(){super(new Df(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class al extends Lf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new Wx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xx extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Nd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nd(){return performance.now()}function zd(i,t,e,n){const s=qx(n);switch(e){case j0:return i*t;case J0:return i*t;case Q0:return i*t*2;case vf:return i*t/s.components*s.byteLength;case Mf:return i*t/s.components*s.byteLength;case tp:return i*t*2/s.components*s.byteLength;case _f:return i*t*2/s.components*s.byteLength;case K0:return i*t*3/s.components*s.byteLength;case di:return i*t*4/s.components*s.byteLength;case yf:return i*t*4/s.components*s.byteLength;case dc:case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mc:case gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ou:case Gu:return Math.max(i,16)*Math.max(t,8)/4;case Fu:case Bu:return Math.max(i,8)*Math.max(t,8)/2;case ku:case Hu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $u:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ju:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ku:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ju:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case eh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ih:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xc:case sh:case oh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ep:case rh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ah:case ch:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qx(i){switch(i){case Qi:case Y0:return{byteLength:1,components:1};case sa:case Z0:case Zi:return{byteLength:2,components:1};case gf:case xf:return{byteLength:2,components:4};case Js:case mf:case Ai:return{byteLength:4,components:1};case $0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cp(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Yx(i){const t=new WeakMap;function e(a,u){const c=a.array,l=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,c,l),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,u,c){const l=u.array,h=u.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,l);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){const m=h[f],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){const x=h[p];i.bufferSubData(c,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=t.get(a);u&&(i.deleteBuffer(u.buffer),t.delete(a))}function r(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,u));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,u),c.version=a.version}}return{get:s,remove:o,update:r}}var Zx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$x=`#ifdef USE_ALPHAHASH
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
#endif`,jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tv=`#ifdef USE_AOMAP
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
#endif`,ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nv=`#ifdef USE_BATCHING
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
#endif`,iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ov=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,av=`#ifdef USE_IRIDESCENCE
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
#endif`,cv=`#ifdef USE_BUMPMAP
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xv=`#define PI 3.141592653589793
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
} // validated`,vv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mv=`vec3 transformedNormal = objectNormal;
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
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nv=`#ifdef USE_GRADIENTMAP
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
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bv=`uniform bool receiveShadow;
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
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xv=`PhysicalMaterial material;
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
#endif`,qv=`struct PhysicalMaterial {
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
}`,Yv=`
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
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iM=`#if defined( USE_POINTS_UV )
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
#endif`,sM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
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
#endif`,uM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gM=`#ifdef USE_NORMALMAP
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
#endif`,xM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LM=`float getShadowMask() {
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
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UM=`#ifdef USE_SKINNING
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
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
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
#endif`,FM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#ifdef USE_TRANSMISSION
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
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZM=`uniform sampler2D t2D;
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
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
}`,t_=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,n_=`#define DISTANCE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
}`,c_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
}`,u_=`#define LAMBERT
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
}`,h_=`#define MATCAP
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
}`,f_=`#define MATCAP
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
}`,d_=`#define NORMAL
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
}`,p_=`#define NORMAL
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
}`,m_=`#define PHONG
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
}`,g_=`#define PHONG
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
}`,x_=`#define STANDARD
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
}`,v_=`#define STANDARD
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
}`,M_=`#define TOON
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
}`,__=`#define TOON
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
}`,y_=`uniform float size;
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
}`,w_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,b_=`uniform vec3 color;
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
}`,T_=`uniform float rotation;
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
}`,E_=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Zx,alphahash_pars_fragment:$x,alphamap_fragment:jx,alphamap_pars_fragment:Kx,alphatest_fragment:Jx,alphatest_pars_fragment:Qx,aomap_fragment:tv,aomap_pars_fragment:ev,batching_pars_vertex:nv,batching_vertex:iv,begin_vertex:sv,beginnormal_vertex:ov,bsdfs:rv,iridescence_fragment:av,bumpmap_pars_fragment:cv,clipping_planes_fragment:lv,clipping_planes_pars_fragment:uv,clipping_planes_pars_vertex:hv,clipping_planes_vertex:fv,color_fragment:dv,color_pars_fragment:pv,color_pars_vertex:mv,color_vertex:gv,common:xv,cube_uv_reflection_fragment:vv,defaultnormal_vertex:Mv,displacementmap_pars_vertex:_v,displacementmap_vertex:yv,emissivemap_fragment:wv,emissivemap_pars_fragment:Sv,colorspace_fragment:bv,colorspace_pars_fragment:Tv,envmap_fragment:Ev,envmap_common_pars_fragment:Av,envmap_pars_fragment:Rv,envmap_pars_vertex:Cv,envmap_physical_pars_fragment:Gv,envmap_vertex:Pv,fog_vertex:Iv,fog_pars_vertex:Lv,fog_fragment:Dv,fog_pars_fragment:Uv,gradientmap_pars_fragment:Nv,lightmap_pars_fragment:zv,lights_lambert_fragment:Fv,lights_lambert_pars_fragment:Ov,lights_pars_begin:Bv,lights_toon_fragment:kv,lights_toon_pars_fragment:Hv,lights_phong_fragment:Vv,lights_phong_pars_fragment:Wv,lights_physical_fragment:Xv,lights_physical_pars_fragment:qv,lights_fragment_begin:Yv,lights_fragment_maps:Zv,lights_fragment_end:$v,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:Kv,logdepthbuf_pars_vertex:Jv,logdepthbuf_vertex:Qv,map_fragment:tM,map_pars_fragment:eM,map_particle_fragment:nM,map_particle_pars_fragment:iM,metalnessmap_fragment:sM,metalnessmap_pars_fragment:oM,morphinstance_vertex:rM,morphcolor_vertex:aM,morphnormal_vertex:cM,morphtarget_pars_vertex:lM,morphtarget_vertex:uM,normal_fragment_begin:hM,normal_fragment_maps:fM,normal_pars_fragment:dM,normal_pars_vertex:pM,normal_vertex:mM,normalmap_pars_fragment:gM,clearcoat_normal_fragment_begin:xM,clearcoat_normal_fragment_maps:vM,clearcoat_pars_fragment:MM,iridescence_pars_fragment:_M,opaque_fragment:yM,packing:wM,premultiplied_alpha_fragment:SM,project_vertex:bM,dithering_fragment:TM,dithering_pars_fragment:EM,roughnessmap_fragment:AM,roughnessmap_pars_fragment:RM,shadowmap_pars_fragment:CM,shadowmap_pars_vertex:PM,shadowmap_vertex:IM,shadowmask_pars_fragment:LM,skinbase_vertex:DM,skinning_pars_vertex:UM,skinning_vertex:NM,skinnormal_vertex:zM,specularmap_fragment:FM,specularmap_pars_fragment:OM,tonemapping_fragment:BM,tonemapping_pars_fragment:GM,transmission_fragment:kM,transmission_pars_fragment:HM,uv_pars_fragment:VM,uv_pars_vertex:WM,uv_vertex:XM,worldpos_vertex:qM,background_vert:YM,background_frag:ZM,backgroundCube_vert:$M,backgroundCube_frag:jM,cube_vert:KM,cube_frag:JM,depth_vert:QM,depth_frag:t_,distanceRGBA_vert:e_,distanceRGBA_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:o_,linedashed_frag:r_,meshbasic_vert:a_,meshbasic_frag:c_,meshlambert_vert:l_,meshlambert_frag:u_,meshmatcap_vert:h_,meshmatcap_frag:f_,meshnormal_vert:d_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:x_,meshphysical_frag:v_,meshtoon_vert:M_,meshtoon_frag:__,points_vert:y_,points_frag:w_,shadow_vert:S_,shadow_frag:b_,sprite_vert:T_,sprite_frag:E_},xt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},wi={basic:{uniforms:pn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:pn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:pn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:pn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:pn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:pn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:pn([xt.points,xt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:pn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:pn([xt.common,xt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:pn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:pn([xt.sprite,xt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:pn([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:pn([xt.lights,xt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};wi.physical={uniforms:pn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ja={r:0,b:0,g:0},As=new Ci,A_=new me;function R_(i,t,e,n,s,o,r){const a=new ot(0);let u=o===!0?0:1,c,l,h=null,f=0,p=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function x(_){let y=!1;const A=m(_);A===null?g(a,u):A&&A.isColor&&(g(A,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(_,y){const A=m(y);A&&(A.isCubeTexture||A.mapping===ol)?(l===void 0&&(l=new C(new da(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:hr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),As.copy(y.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),l.material.uniforms.envMap.value=A,l.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(As)),l.material.toneMapped=ue.getTransfer(A.colorSpace)!==Me,(h!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new C(new se(2,2),new Dn({name:"BackgroundMaterial",uniforms:hr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ue.getTransfer(A.colorSpace)!==Me,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,y){_.getRGB(ja,hp(i)),n.buffers.color.setClear(ja.r,ja.g,ja.b,y,r)}function S(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),u=y,g(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(_){u=_,g(a,u)},render:x,addToRenderList:d,dispose:S}}function C_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(w,R,L,D,z){let H=!1;const k=h(D,L,R);o!==k&&(o=k,c(o.object)),H=p(w,D,L,z),H&&m(w,D,L,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,y(w,R,L,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function u(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function l(w){return i.deleteVertexArray(w)}function h(w,R,L){const D=L.wireframe===!0;let z=n[w.id];z===void 0&&(z={},n[w.id]=z);let H=z[R.id];H===void 0&&(H={},z[R.id]=H);let k=H[D];return k===void 0&&(k=f(u()),H[D]=k),k}function f(w){const R=[],L=[],D=[];for(let z=0;z<e;z++)R[z]=0,L[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:D,object:w,attributes:{},index:null}}function p(w,R,L,D){const z=o.attributes,H=R.attributes;let k=0;const O=L.getAttributes();for(const G in O)if(O[G].location>=0){const ct=z[G];let ft=H[G];if(ft===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),ct===void 0||ct.attribute!==ft||ft&&ct.data!==ft.data)return!0;k++}return o.attributesNum!==k||o.index!==D}function m(w,R,L,D){const z={},H=R.attributes;let k=0;const O=L.getAttributes();for(const G in O)if(O[G].location>=0){let ct=H[G];ct===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor));const ft={};ft.attribute=ct,ct&&ct.data&&(ft.data=ct.data),z[G]=ft,k++}o.attributes=z,o.attributesNum=k,o.index=D}function x(){const w=o.newAttributes;for(let R=0,L=w.length;R<L;R++)w[R]=0}function d(w){g(w,0)}function g(w,R){const L=o.newAttributes,D=o.enabledAttributes,z=o.attributeDivisors;L[w]=1,D[w]===0&&(i.enableVertexAttribArray(w),D[w]=1),z[w]!==R&&(i.vertexAttribDivisor(w,R),z[w]=R)}function S(){const w=o.newAttributes,R=o.enabledAttributes;for(let L=0,D=R.length;L<D;L++)R[L]!==w[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function _(w,R,L,D,z,H,k){k===!0?i.vertexAttribIPointer(w,R,L,z,H):i.vertexAttribPointer(w,R,L,D,z,H)}function y(w,R,L,D){x();const z=D.attributes,H=L.getAttributes(),k=R.defaultAttributeValues;for(const O in H){const G=H[O];if(G.location>=0){let et=z[O];if(et===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(et=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(et=w.instanceColor)),et!==void 0){const ct=et.normalized,ft=et.itemSize,Pt=t.get(et);if(Pt===void 0)continue;const Wt=Pt.buffer,tt=Pt.type,ut=Pt.bytesPerElement,yt=tt===i.INT||tt===i.UNSIGNED_INT||et.gpuType===mf;if(et.isInterleavedBufferAttribute){const mt=et.data,It=mt.stride,Nt=et.offset;if(mt.isInstancedInterleavedBuffer){for(let $t=0;$t<G.locationSize;$t++)g(G.location+$t,mt.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $t=0;$t<G.locationSize;$t++)d(G.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let $t=0;$t<G.locationSize;$t++)_(G.location+$t,ft/G.locationSize,tt,ct,It*ut,(Nt+ft/G.locationSize*$t)*ut,yt)}else{if(et.isInstancedBufferAttribute){for(let mt=0;mt<G.locationSize;mt++)g(G.location+mt,et.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let mt=0;mt<G.locationSize;mt++)d(G.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let mt=0;mt<G.locationSize;mt++)_(G.location+mt,ft/G.locationSize,tt,ct,ft*ut,ft/G.locationSize*mt*ut,yt)}}else if(k!==void 0){const ct=k[O];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(G.location,ct);break;case 3:i.vertexAttrib3fv(G.location,ct);break;case 4:i.vertexAttrib4fv(G.location,ct);break;default:i.vertexAttrib1fv(G.location,ct)}}}}S()}function A(){T();for(const w in n){const R=n[w];for(const L in R){const D=R[L];for(const z in D)l(D[z].object),delete D[z];delete R[L]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const R=n[w.id];for(const L in R){const D=R[L];for(const z in D)l(D[z].object),delete D[z];delete R[L]}delete n[w.id]}function b(w){for(const R in n){const L=n[R];if(L[w.id]===void 0)continue;const D=L[w.id];for(const z in D)l(D[z].object),delete D[z];delete L[w.id]}}function T(){M(),r=!0,o!==s&&(o=s,c(o.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:d,disableUnusedAttributes:S}}function P_(i,t,e){let n;function s(c){n=c}function o(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function r(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let p=0;for(let m=0;m<h;m++)p+=l[m];e.update(p,n,1)}function u(c,l,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)r(c[m],l[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,l,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=l[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function I_(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==di&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const T=b===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Qi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ai&&!T)}function u(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const l=u(c);l!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:d,maxAttributes:g,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function L_(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Is,a=new qt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){o=!0,l(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){e=l(h,f,0)},this.setState=function(h,f,p){const m=h.clippingPlanes,x=h.clipIntersection,d=h.clipShadows,g=i.get(h);if(!s||m===null||m.length===0||o&&!d)o?l(null):c();else{const S=o?0:n,_=S*4;let y=g.clippingState||null;u.value=y,y=l(m,f,_,p);for(let A=0;A!==_;++A)y[A]=e[A];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(h,f,p,m){const x=h!==null?h.length:0;let d=null;if(x!==0){if(d=u.value,m!==!0||d===null){const g=p+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let _=0,y=p;_!==x;++_,y+=4)r.copy(h[_]).applyMatrix4(S,a),r.normal.toArray(d,y),d[y+3]=r.constant}u.value=d,u.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}function D_(i){let t=new WeakMap;function e(r,a){return a===Uu?r.mapping=or:a===Nu&&(r.mapping=rr),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Uu||a===Nu)if(t.has(r)){const u=t.get(r).texture;return e(u,r.mapping)}else{const u=r.image;if(u&&u.height>0){const c=new ix(u.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Fo=4,Fd=[.125,.215,.35,.446,.526,.582],Gs=20,Xl=new Df,Od=new ot;let ql=null,Yl=0,Zl=0,$l=!1;const Ls=(1+Math.sqrt(5))/2,To=1/Ls,Bd=[new F(-Ls,To,0),new F(Ls,To,0),new F(-To,0,Ls),new F(To,0,Ls),new F(0,Ls,-To),new F(0,Ls,To),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Gd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ql,Yl,Zl),this._renderer.xr.enabled=$l,t.scissorTest=!1,Ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Zi,format:di,colorSpace:ur,depthBuffer:!1},s=kd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U_(o)),this._blurMaterial=N_(o,t,e)}return s}_compileMaterial(t){const e=new C(this._lodPlanes[0],t);this._renderer.compile(e,Xl)}_sceneToCubeUV(t,e,n,s){const a=new Gn(90,1,e,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,f=l.toneMapping;l.getClearColor(Od),l.toneMapping=xs,l.autoClear=!1;const p=new Y({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),m=new C(new da,p);let x=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,x=!0):(p.color.copy(Od),x=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,u[g],0),a.lookAt(c[g],0,0)):S===1?(a.up.set(0,0,u[g]),a.lookAt(0,c[g],0)):(a.up.set(0,u[g],0),a.lookAt(0,0,c[g]));const _=this._cubeSize;Ka(s,S*_,g>2?_:0,_,_),l.setRenderTarget(s),x&&l.render(m,a),l.render(t,a)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=f,l.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===or||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hd());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new C(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const u=this._cubeSize;Ka(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(r,Xl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Bd[(s-o-1)%Bd.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const u=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,h=new C(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Gs-1),x=o/m,d=isFinite(o)?1+Math.floor(l*x):Gs;d>Gs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Gs}`);const g=[];let S=0;for(let b=0;b<Gs;++b){const T=b/x,M=Math.exp(-T*T/2);g.push(M),b===0?S+=M:b<d&&(S+=2*M)}for(let b=0;b<g.length;b++)g[b]=g[b]/S;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const y=this._sizeLods[s],A=3*y*(s>_-Fo?s-_+Fo:0),E=4*(this._cubeSize-y);Ka(e,A,E,3*y,2*y),u.setRenderTarget(e),u.render(h,Xl)}}function U_(i){const t=[],e=[],n=[];let s=i;const o=i-Fo+1+Fd.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let u=1/a;r>i-Fo?u=Fd[r-i+Fo-1]:r===0&&(u=0),n.push(u);const c=1/(a-2),l=-c,h=1+c,f=[l,l,h,l,h,h,l,l,h,h,l,h],p=6,m=6,x=3,d=2,g=1,S=new Float32Array(x*m*p),_=new Float32Array(d*m*p),y=new Float32Array(g*m*p);for(let E=0;E<p;E++){const b=E%3*2/3-1,T=E>2?0:-1,M=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];S.set(M,x*m*E),_.set(f,d*m*E);const w=[E,E,E,E,E,E];y.set(w,g*m*E)}const A=new Ee;A.setAttribute("position",new Oe(S,x)),A.setAttribute("uv",new Oe(_,d)),A.setAttribute("faceIndex",new Oe(y,g)),t.push(A),s>Fo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kd(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function N_(i,t,e){const n=new Float32Array(Gs),s=new F(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uf(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Hd(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Vd(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Uf(){return`

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
	`}function z_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const u=a.mapping,c=u===Uu||u===Nu,l=u===or||u===rr;if(c||l){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Gd(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||l&&p&&s(p)?(e===null&&(e=new Gd(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let u=0;const c=6;for(let l=0;l<c;l++)a[l]!==void 0&&u++;return u===c}function o(a){const u=a.target;u.removeEventListener("dispose",o);const c=t.get(u);c!==void 0&&(t.delete(u),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function F_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Io("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function O_(i,t,e,n){const s={},o=new WeakMap;function r(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",r),delete s[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function u(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,m=h.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let _=0,y=S.length;_<y;_+=3){const A=S[_+0],E=S[_+1],b=S[_+2];f.push(A,E,E,b,b,A)}}else if(m!==void 0){const S=m.array;x=m.version;for(let _=0,y=S.length/3-1;_<y;_+=3){const A=_+0,E=_+1,b=_+2;f.push(A,E,E,b,b,A)}}else return;const d=new(sp(f)?up:lp)(f,1);d.version=x;const g=o.get(h);g&&t.remove(g),o.set(h,d)}function l(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:u,getWireframeAttribute:l}}function B_(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function u(f,p){i.drawElements(n,p,o,f*r),e.update(p,n,1)}function c(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,o,f*r,m),e.update(p,n,m))}function l(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,f,0,m);let d=0;for(let g=0;g<m;g++)d+=p[g];e.update(d,n,1)}function h(f,p,m,x){if(m===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f.length;g++)c(f[g]/r,p[g],x[g]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,o,f,0,x,0,m);let g=0;for(let S=0;S<m;S++)g+=p[S]*x[S];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function G_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function k_(i,t,e){const n=new WeakMap,s=new ye;function o(r,a,u){const c=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var p=w;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),x===!0&&(y=2),d===!0&&(y=3);let A=a.attributes.position.count*y,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*E*4*h),T=new rp(b,A,E,h);T.type=Ai,T.needsUpdate=!0;const M=y*4;for(let R=0;R<h;R++){const L=g[R],D=S[R],z=_[R],H=A*E*4*R;for(let k=0;k<L.count;k++){const O=k*M;m===!0&&(s.fromBufferAttribute(L,k),b[H+O+0]=s.x,b[H+O+1]=s.y,b[H+O+2]=s.z,b[H+O+3]=0),x===!0&&(s.fromBufferAttribute(D,k),b[H+O+4]=s.x,b[H+O+5]=s.y,b[H+O+6]=s.z,b[H+O+7]=0),d===!0&&(s.fromBufferAttribute(z,k),b[H+O+8]=s.x,b[H+O+9]=s.y,b[H+O+10]=s.z,b[H+O+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:T,size:new pt(A,E)},n.set(a,f),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let d=0;d<c.length;d++)m+=c[d];const x=a.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",c)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function H_(i,t,e,n){let s=new WeakMap;function o(u){const c=n.render.frame,l=u.geometry,h=t.get(u,l);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),s.get(u)!==c&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const f=u.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function r(){s=new WeakMap}function a(u){const c=u.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}const Pp=new un,Wd=new vp(1,1),Ip=new rp,Lp=new Hg,Dp=new dp,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),$d=new Float32Array(4);function Mr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Xd[s];if(o===void 0&&(o=new Float32Array(s),Xd[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cl(i,t){let e=qd[t];e===void 0&&(e=new Int32Array(t),qd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function V_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Y_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;$d.set(n),i.uniformMatrix2fv(this.addr,!1,$d),Ye(e,n)}}function Z_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Zd.set(n),i.uniformMatrix3fv(this.addr,!1,Zd),Ye(e,n)}}function $_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Yd.set(n),i.uniformMatrix4fv(this.addr,!1,Yd),Ye(e,n)}}function j_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function K_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Q_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function ty(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ey(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function ny(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function iy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function sy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Wd.compareFunction=ip,o=Wd):o=Pp,e.setTexture2D(t||o,s)}function oy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lp,s)}function ry(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dp,s)}function ay(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ip,s)}function cy(i){switch(i){case 5126:return V_;case 35664:return W_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return Z_;case 35676:return $_;case 5124:case 35670:return j_;case 35667:case 35671:return K_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return ty;case 36294:return ey;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return ay}}function ly(i,t){i.uniform1fv(this.addr,t)}function uy(i,t){const e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function hy(i,t){const e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function fy(i,t){const e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function dy(i,t){const e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function py(i,t){const e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function my(i,t){const e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gy(i,t){i.uniform1iv(this.addr,t)}function xy(i,t){i.uniform2iv(this.addr,t)}function vy(i,t){i.uniform3iv(this.addr,t)}function My(i,t){i.uniform4iv(this.addr,t)}function _y(i,t){i.uniform1uiv(this.addr,t)}function yy(i,t){i.uniform2uiv(this.addr,t)}function wy(i,t){i.uniform3uiv(this.addr,t)}function Sy(i,t){i.uniform4uiv(this.addr,t)}function by(i,t,e){const n=this.cache,s=t.length,o=cl(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Pp,o[r])}function Ty(i,t,e){const n=this.cache,s=t.length,o=cl(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Lp,o[r])}function Ey(i,t,e){const n=this.cache,s=t.length,o=cl(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Dp,o[r])}function Ay(i,t,e){const n=this.cache,s=t.length,o=cl(e,s);qe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ip,o[r])}function Ry(i){switch(i){case 5126:return ly;case 35664:return uy;case 35665:return hy;case 35666:return fy;case 35674:return dy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return xy;case 35668:case 35672:return vy;case 35669:case 35673:return My;case 5125:return _y;case 36294:return yy;case 36295:return wy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ay}}class Cy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cy(e.type)}}class Py{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ry(e.type)}}class Iy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const jl=/(\w+)(\])?(\[|\.)?/g;function jd(i,t){i.seq.push(t),i.map[t.id]=t}function Ly(i,t,e){const n=i.name,s=n.length;for(jl.lastIndex=0;;){const o=jl.exec(n),r=jl.lastIndex;let a=o[1];const u=o[2]==="]",c=o[3];if(u&&(a=a|0),c===void 0||c==="["&&r+2===s){jd(e,c===void 0?new Cy(a,i,t):new Py(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Iy(a),jd(e,h)),e=h}}}class vc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Ly(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],u=n[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Kd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dy=37297;let Uy=0;function Ny(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Jd=new qt;function zy(i){ue._getMatrix(Jd,ue.workingColorSpace,i);const t=`mat3( ${Jd.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Uc:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ny(i.getShaderSource(t),r)}else return s}function Fy(i,t){const e=zy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Oy(i,t){let e;switch(t){case mg:e="Linear";break;case gg:e="Reinhard";break;case xg:e="Cineon";break;case X0:e="ACESFilmic";break;case Mg:e="AgX";break;case _g:e="Neutral";break;case vg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ja=new F;function By(){ue.getLuminanceCoefficients(Ja);const i=Ja.x.toFixed(4),t=Ja.y.toFixed(4),e=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function ky(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Gr(i){return i!==""}function t0(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function e0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(Vy,Xy)}const Wy=new Map;function Xy(i,t){let e=Zt[t];if(e===void 0){const n=Wy.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mh(e)}const qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(i){return i.replace(qy,Yy)}function Yy(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function i0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Zy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===H0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===V0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function $y(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case rr:t="ENVMAP_TYPE_CUBE";break;case ol:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function Ky(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case W0:t="ENVMAP_BLENDING_MULTIPLY";break;case dg:t="ENVMAP_BLENDING_MIX";break;case pg:t="ENVMAP_BLENDING_ADD";break}return t}function Jy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qy(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const u=Zy(e),c=$y(e),l=jy(e),h=Ky(e),f=Jy(e),p=Gy(e),m=ky(o),x=s.createProgram();let d,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gr).join(`
`),d.length>0&&(d+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gr).join(`
`),g.length>0&&(g+=`
`)):(d=[i0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),g=[i0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xs?"#define TONE_MAPPING":"",e.toneMapping!==xs?Zt.tonemapping_pars_fragment:"",e.toneMapping!==xs?Oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Fy("linearToOutputTexel",e.outputColorSpace),By(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),r=mh(r),r=t0(r,e),r=e0(r,e),a=mh(a),a=t0(a,e),a=e0(a,e),r=n0(r),a=n0(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",e.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=S+d+r,y=S+g+a,A=Kd(s,s.VERTEX_SHADER,_),E=Kd(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(A).trim(),z=s.getShaderInfoLog(E).trim();let H=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const O=Qd(s,A,"vertex"),G=Qd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+O+`
`+G)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||z==="")&&(k=!1);k&&(R.diagnostics={runnable:H,programLog:L,vertexShader:{log:D,prefix:d},fragmentShader:{log:z,prefix:g}})}s.deleteShader(A),s.deleteShader(E),T=new vc(s,x),M=Hy(s,x)}let T;this.getUniforms=function(){return T===void 0&&b(this),T};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,Dy)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let t1=0;class e1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new n1(t),e.set(t,n)),n}}class n1{constructor(t){this.id=t1++,this.code=t,this.usedTimes=0}}function i1(i,t,e,n,s,o,r){const a=new ap,u=new e1,c=new Set,l=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,w,R,L,D){const z=L.fog,H=D.geometry,k=M.isMeshStandardMaterial?L.environment:null,O=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),G=O&&O.mapping===ol?O.image.height:null,et=m[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=ct!==void 0?ct.length:0;let Pt=0;H.morphAttributes.position!==void 0&&(Pt=1),H.morphAttributes.normal!==void 0&&(Pt=2),H.morphAttributes.color!==void 0&&(Pt=3);let Wt,tt,ut,yt;if(et){const ge=wi[et];Wt=ge.vertexShader,tt=ge.fragmentShader}else Wt=M.vertexShader,tt=M.fragmentShader,u.update(M),ut=u.getVertexShaderID(M),yt=u.getFragmentShaderID(M);const mt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Nt=D.isInstancedMesh===!0,$t=D.isBatchedMesh===!0,Le=!!M.map,oe=!!M.matcap,Be=!!O,B=!!M.aoMap,Zn=!!M.lightMap,ee=!!M.bumpMap,ne=!!M.normalMap,Ut=!!M.displacementMap,Ae=!!M.emissiveMap,Dt=!!M.metalnessMap,N=!!M.roughnessMap,P=M.anisotropy>0,$=M.clearcoat>0,rt=M.dispersion>0,lt=M.iridescence>0,it=M.sheen>0,Lt=M.transmission>0,_t=P&&!!M.anisotropyMap,Tt=$&&!!M.clearcoatMap,re=$&&!!M.clearcoatNormalMap,dt=$&&!!M.clearcoatRoughnessMap,Et=lt&&!!M.iridescenceMap,Ot=lt&&!!M.iridescenceThicknessMap,Gt=it&&!!M.sheenColorMap,At=it&&!!M.sheenRoughnessMap,ie=!!M.specularMap,Yt=!!M.specularColorMap,Se=!!M.specularIntensityMap,V=Lt&&!!M.transmissionMap,vt=Lt&&!!M.thicknessMap,Q=!!M.gradientMap,at=!!M.alphaMap,St=M.alphaTest>0,wt=!!M.alphaHash,Xt=!!M.extensions;let Ne=xs;M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const en={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Wt,fragmentShader:tt,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:$t,batchingColor:$t&&D._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&D.instanceColor!==null,instancingMorph:Nt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:ur,alphaToCoverage:!!M.alphaToCoverage,map:Le,matcap:oe,envMap:Be,envMapMode:Be&&O.mapping,envMapCubeUVHeight:G,aoMap:B,lightMap:Zn,bumpMap:ee,normalMap:ne,displacementMap:f&&Ut,emissiveMap:Ae,normalMapObjectSpace:ne&&M.normalMapType===bg,normalMapTangentSpace:ne&&M.normalMapType===np,metalnessMap:Dt,roughnessMap:N,anisotropy:P,anisotropyMap:_t,clearcoat:$,clearcoatMap:Tt,clearcoatNormalMap:re,clearcoatRoughnessMap:dt,dispersion:rt,iridescence:lt,iridescenceMap:Et,iridescenceThicknessMap:Ot,sheen:it,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:ie,specularColorMap:Yt,specularIntensityMap:Se,transmission:Lt,transmissionMap:V,thicknessMap:vt,gradientMap:Q,opaque:M.transparent===!1&&M.blending===Wo&&M.alphaToCoverage===!1,alphaMap:at,alphaTest:St,alphaHash:wt,combine:M.combine,mapUv:Le&&x(M.map.channel),aoMapUv:B&&x(M.aoMap.channel),lightMapUv:Zn&&x(M.lightMap.channel),bumpMapUv:ee&&x(M.bumpMap.channel),normalMapUv:ne&&x(M.normalMap.channel),displacementMapUv:Ut&&x(M.displacementMap.channel),emissiveMapUv:Ae&&x(M.emissiveMap.channel),metalnessMapUv:Dt&&x(M.metalnessMap.channel),roughnessMapUv:N&&x(M.roughnessMap.channel),anisotropyMapUv:_t&&x(M.anisotropyMap.channel),clearcoatMapUv:Tt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(M.sheenRoughnessMap.channel),specularMapUv:ie&&x(M.specularMap.channel),specularColorMapUv:Yt&&x(M.specularColorMap.channel),specularIntensityMapUv:Se&&x(M.specularIntensityMap.channel),transmissionMapUv:V&&x(M.transmissionMap.channel),thicknessMapUv:vt&&x(M.thicknessMap.channel),alphaMapUv:at&&x(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ne||P),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Le||at),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:It,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Pt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Le&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===Me,decodeVideoTextureEmissive:Ae&&M.emissiveMap.isVideoTexture===!0&&ue.getTransfer(M.emissiveMap.colorSpace)===Me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ct,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&M.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return en.vertexUv1s=c.has(1),en.vertexUv2s=c.has(2),en.vertexUv3s=c.has(3),c.clear(),en}function g(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)w.push(R),w.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(S(w,M),_(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function S(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const w=m[M.type];let R;if(w){const L=wi[w];R=Fc.clone(L.uniforms)}else R=M.uniforms;return R}function A(M,w){let R;for(let L=0,D=l.length;L<D;L++){const z=l[L];if(z.cacheKey===w){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Qy(i,w,M,o),l.push(R)),R}function E(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function b(M){u.remove(M)}function T(){u.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:l,dispose:T}}function s1(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,u){i.get(r)[a]=u}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function o1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function s0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function o0(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,f,p,m,x,d){let g=i[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:x,group:d},i[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=p,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=x,g.group=d),t++,g}function a(h,f,p,m,x,d){const g=r(h,f,p,m,x,d);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):e.push(g)}function u(h,f,p,m,x,d){const g=r(h,f,p,m,x,d);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):e.unshift(g)}function c(h,f){e.length>1&&e.sort(h||o1),n.length>1&&n.sort(f||s0),s.length>1&&s.sort(f||s0)}function l(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:u,finish:l,sort:c}}function r1(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new o0,i.set(n,[r])):s>=o.length?(r=new o0,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function a1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new ot};break;case"SpotLight":e={position:new F,direction:new F,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function c1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let l1=0;function u1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h1(i){const t=new a1,e=c1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,o=new me,r=new me;function a(c){let l=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,x=0,d=0,g=0,S=0,_=0,y=0,A=0,E=0,b=0;c.sort(u1);for(let M=0,w=c.length;M<w;M++){const R=c[M],L=R.color,D=R.intensity,z=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)l+=L.r*D,h+=L.g*D,f+=L.b*D;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],D);b++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,G=e.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(L).multiplyScalar(D),k.distance=z,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const O=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,O.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=O.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=H,y++}x++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(L).multiplyScalar(D),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[d]=k,d++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const O=R.shadow,G=e.get(R);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=R.shadow.matrix,_++}n.point[m]=k,m++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(D),k.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[g]=k,g++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=h,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==p||T.pointLength!==m||T.spotLength!==x||T.rectAreaLength!==d||T.hemiLength!==g||T.numDirectionalShadows!==S||T.numPointShadows!==_||T.numSpotShadows!==y||T.numSpotMaps!==A||T.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=d,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,T.directionalLength=p,T.pointLength=m,T.spotLength=x,T.rectAreaLength=d,T.hemiLength=g,T.numDirectionalShadows=S,T.numPointShadows=_,T.numSpotShadows=y,T.numSpotMaps=A,T.numLightProbes=b,n.version=l1++)}function u(c,l){let h=0,f=0,p=0,m=0,x=0;const d=l.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const _=c[g];if(_.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),h++}else if(_.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),p++}else if(_.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),r.identity(),o.copy(_.matrixWorld),o.premultiply(d),r.extractRotation(o),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),m++}else if(_.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(d),f++}else if(_.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(d),x++}}}return{setup:a,setupView:u,state:n}}function r0(i){const t=new h1(i),e=[],n=[];function s(l){c.camera=l,e.length=0,n.length=0}function o(l){e.push(l)}function r(l){n.push(l)}function a(){t.setup(e)}function u(l){t.setupView(e,l)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:u,pushLight:o,pushShadow:r}}function f1(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new r0(i),t.set(s,[a])):o>=r.length?(a=new r0(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`;function m1(i,t,e){let n=new bf;const s=new pt,o=new pt,r=new ye,a=new Gx({depthPacking:Sg}),u=new kx,c={},l=e.maxTextureSize,h={[Ms]:ln,[ln]:Ms,[Ct]:Ct},f=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:d1,fragmentShader:p1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ee;m.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new C(m,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=H0;let g=this.type;this.render=function(E,b,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Yi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=g!==Oi&&this.type===Oi,z=g===Oi&&this.type!==Oi;for(let H=0,k=E.length;H<k;H++){const O=E[H],G=O.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const et=G.getFrameExtents();if(s.multiply(et),o.copy(G.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(o.x=Math.floor(l/et.x),s.x=o.x*et.x,G.mapSize.x=o.x),s.y>l&&(o.y=Math.floor(l/et.y),s.y=o.y*et.y,G.mapSize.y=o.y)),G.map===null||D===!0||z===!0){const ft=this.type!==Oi?{minFilter:Xn,magFilter:Xn}:{};G.map!==null&&G.map.dispose(),G.map=new pi(s.x,s.y,ft),G.map.texture.name=O.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ct=G.getViewportCount();for(let ft=0;ft<ct;ft++){const Pt=G.getViewport(ft);r.set(o.x*Pt.x,o.y*Pt.y,o.x*Pt.z,o.y*Pt.w),L.viewport(r),G.updateMatrices(O,ft),n=G.getFrustum(),y(b,T,G.camera,O,this.type)}G.isPointLightShadow!==!0&&this.type===Oi&&S(G,T),G.needsUpdate=!1}g=this.type,d.needsUpdate=!1,i.setRenderTarget(M,w,R)};function S(E,b){const T=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,T,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,T,p,x,null)}function _(E,b,T,M){let w=null;const R=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)w=R;else if(w=T.isPointLight===!0?u:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=w.uuid,D=b.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let H=z[D];H===void 0&&(H=w.clone(),z[D]=H,b.addEventListener("dispose",A)),w=H}if(w.visible=b.visible,w.wireframe=b.wireframe,M===Oi?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:h[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,T.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const L=i.properties.get(w);L.light=T}return w}function y(E,b,T,M,w){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Oi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const D=t.update(E),z=E.material;if(Array.isArray(z)){const H=D.groups;for(let k=0,O=H.length;k<O;k++){const G=H[k],et=z[G.materialIndex];if(et&&et.visible){const ct=_(E,et,M,w);E.onBeforeShadow(i,E,b,T,D,ct,G),i.renderBufferDirect(T,null,D,ct,E,G),E.onAfterShadow(i,E,b,T,D,ct,G)}}}else if(z.visible){const H=_(E,z,M,w);E.onBeforeShadow(i,E,b,T,D,H,null),i.renderBufferDirect(T,null,D,H,E,null),E.onAfterShadow(i,E,b,T,D,H,null)}}const L=E.children;for(let D=0,z=L.length;D<z;D++)y(L[D],b,T,M,w)}function A(E){E.target.removeEventListener("dispose",A);for(const T in c){const M=c[T],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const g1={[Au]:Ru,[Cu]:Lu,[Pu]:Du,[sr]:Iu,[Ru]:Au,[Lu]:Cu,[Du]:Pu,[Iu]:sr};function x1(i,t){function e(){let V=!1;const vt=new ye;let Q=null;const at=new ye(0,0,0,0);return{setMask:function(St){Q!==St&&!V&&(i.colorMask(St,St,St,St),Q=St)},setLocked:function(St){V=St},setClear:function(St,wt,Xt,Ne,en){en===!0&&(St*=Ne,wt*=Ne,Xt*=Ne),vt.set(St,wt,Xt,Ne),at.equals(vt)===!1&&(i.clearColor(St,wt,Xt,Ne),at.copy(vt))},reset:function(){V=!1,Q=null,at.set(-1,0,0,0)}}}function n(){let V=!1,vt=!1,Q=null,at=null,St=null;return{setReversed:function(wt){if(vt!==wt){const Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const Ne=St;St=null,this.setClear(Ne)}vt=wt},getReversed:function(){return vt},setTest:function(wt){wt?mt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(wt){Q!==wt&&!V&&(i.depthMask(wt),Q=wt)},setFunc:function(wt){if(vt&&(wt=g1[wt]),at!==wt){switch(wt){case Au:i.depthFunc(i.NEVER);break;case Ru:i.depthFunc(i.ALWAYS);break;case Cu:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Pu:i.depthFunc(i.EQUAL);break;case Iu:i.depthFunc(i.GEQUAL);break;case Lu:i.depthFunc(i.GREATER);break;case Du:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=wt}},setLocked:function(wt){V=wt},setClear:function(wt){St!==wt&&(vt&&(wt=1-wt),i.clearDepth(wt),St=wt)},reset:function(){V=!1,Q=null,at=null,St=null,vt=!1}}}function s(){let V=!1,vt=null,Q=null,at=null,St=null,wt=null,Xt=null,Ne=null,en=null;return{setTest:function(ge){V||(ge?mt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ge){vt!==ge&&!V&&(i.stencilMask(ge),vt=ge)},setFunc:function(ge,ai,Li){(Q!==ge||at!==ai||St!==Li)&&(i.stencilFunc(ge,ai,Li),Q=ge,at=ai,St=Li)},setOp:function(ge,ai,Li){(wt!==ge||Xt!==ai||Ne!==Li)&&(i.stencilOp(ge,ai,Li),wt=ge,Xt=ai,Ne=Li)},setLocked:function(ge){V=ge},setClear:function(ge){en!==ge&&(i.clearStencil(ge),en=ge)},reset:function(){V=!1,vt=null,Q=null,at=null,St=null,wt=null,Xt=null,Ne=null,en=null}}}const o=new e,r=new n,a=new s,u=new WeakMap,c=new WeakMap;let l={},h={},f=new WeakMap,p=[],m=null,x=!1,d=null,g=null,S=null,_=null,y=null,A=null,E=null,b=new ot(0,0,0),T=0,M=!1,w=null,R=null,L=null,D=null,z=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=O>=1):G.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=O>=2);let et=null,ct={};const ft=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Wt=new ye().fromArray(ft),tt=new ye().fromArray(Pt);function ut(V,vt,Q,at){const St=new Uint8Array(4),wt=i.createTexture();i.bindTexture(V,wt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<Q;Xt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(vt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return wt}const yt={};yt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),r.setFunc(sr),ee(!1),ne(jf),mt(i.CULL_FACE),B(Yi);function mt(V){l[V]!==!0&&(i.enable(V),l[V]=!0)}function It(V){l[V]!==!1&&(i.disable(V),l[V]=!1)}function Nt(V,vt){return h[V]!==vt?(i.bindFramebuffer(V,vt),h[V]=vt,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function $t(V,vt){let Q=p,at=!1;if(V){Q=f.get(vt),Q===void 0&&(Q=[],f.set(vt,Q));const St=V.textures;if(Q.length!==St.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Xt=St.length;wt<Xt;wt++)Q[wt]=i.COLOR_ATTACHMENT0+wt;Q.length=St.length,at=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,at=!0);at&&i.drawBuffers(Q)}function Le(V){return m!==V?(i.useProgram(V),m=V,!0):!1}const oe={[Bs]:i.FUNC_ADD,[jm]:i.FUNC_SUBTRACT,[Km]:i.FUNC_REVERSE_SUBTRACT};oe[Jm]=i.MIN,oe[Qm]=i.MAX;const Be={[tg]:i.ZERO,[eg]:i.ONE,[ng]:i.SRC_COLOR,[Tu]:i.SRC_ALPHA,[cg]:i.SRC_ALPHA_SATURATE,[rg]:i.DST_COLOR,[sg]:i.DST_ALPHA,[ig]:i.ONE_MINUS_SRC_COLOR,[Eu]:i.ONE_MINUS_SRC_ALPHA,[ag]:i.ONE_MINUS_DST_COLOR,[og]:i.ONE_MINUS_DST_ALPHA,[lg]:i.CONSTANT_COLOR,[ug]:i.ONE_MINUS_CONSTANT_COLOR,[hg]:i.CONSTANT_ALPHA,[fg]:i.ONE_MINUS_CONSTANT_ALPHA};function B(V,vt,Q,at,St,wt,Xt,Ne,en,ge){if(V===Yi){x===!0&&(It(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),V!==$m){if(V!==d||ge!==M){if((g!==Bs||y!==Bs)&&(i.blendEquation(i.FUNC_ADD),g=Bs,y=Bs),ge)switch(V){case Wo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFunc(i.ONE,i.ONE);break;case Kf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Wo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}S=null,_=null,A=null,E=null,b.set(0,0,0),T=0,d=V,M=ge}return}St=St||vt,wt=wt||Q,Xt=Xt||at,(vt!==g||St!==y)&&(i.blendEquationSeparate(oe[vt],oe[St]),g=vt,y=St),(Q!==S||at!==_||wt!==A||Xt!==E)&&(i.blendFuncSeparate(Be[Q],Be[at],Be[wt],Be[Xt]),S=Q,_=at,A=wt,E=Xt),(Ne.equals(b)===!1||en!==T)&&(i.blendColor(Ne.r,Ne.g,Ne.b,en),b.copy(Ne),T=en),d=V,M=!1}function Zn(V,vt){V.side===Ct?It(i.CULL_FACE):mt(i.CULL_FACE);let Q=V.side===ln;vt&&(Q=!Q),ee(Q),V.blending===Wo&&V.transparent===!1?B(Yi):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),o.setMask(V.colorWrite);const at=V.stencilWrite;a.setTest(at),at&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ae(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){w!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),w=V)}function ne(V){V!==Ym?(mt(i.CULL_FACE),V!==R&&(V===jf?i.cullFace(i.BACK):V===Zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),R=V}function Ut(V){V!==L&&(k&&i.lineWidth(V),L=V)}function Ae(V,vt,Q){V?(mt(i.POLYGON_OFFSET_FILL),(D!==vt||z!==Q)&&(i.polygonOffset(vt,Q),D=vt,z=Q)):It(i.POLYGON_OFFSET_FILL)}function Dt(V){V?mt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function N(V){V===void 0&&(V=i.TEXTURE0+H-1),et!==V&&(i.activeTexture(V),et=V)}function P(V,vt,Q){Q===void 0&&(et===null?Q=i.TEXTURE0+H-1:Q=et);let at=ct[Q];at===void 0&&(at={type:void 0,texture:void 0},ct[Q]=at),(at.type!==V||at.texture!==vt)&&(et!==Q&&(i.activeTexture(Q),et=Q),i.bindTexture(V,vt||yt[V]),at.type=V,at.texture=vt)}function $(){const V=ct[et];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(V){Wt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Wt.copy(V))}function At(V){tt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),tt.copy(V))}function ie(V,vt){let Q=c.get(vt);Q===void 0&&(Q=new WeakMap,c.set(vt,Q));let at=Q.get(V);at===void 0&&(at=i.getUniformBlockIndex(vt,V.name),Q.set(V,at))}function Yt(V,vt){const at=c.get(vt).get(V);u.get(vt)!==at&&(i.uniformBlockBinding(vt,at,V.__bindingPointIndex),u.set(vt,at))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},et=null,ct={},h={},f=new WeakMap,p=[],m=null,x=!1,d=null,g=null,S=null,_=null,y=null,A=null,E=null,b=new ot(0,0,0),T=0,M=!1,w=null,R=null,L=null,D=null,z=null,Wt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:mt,disable:It,bindFramebuffer:Nt,drawBuffers:$t,useProgram:Le,setBlending:B,setMaterial:Zn,setFlipSided:ee,setCullFace:ne,setLineWidth:Ut,setPolygonOffset:Ae,setScissorTest:Dt,activeTexture:N,bindTexture:P,unbindTexture:$,compressedTexImage2D:rt,compressedTexImage3D:lt,texImage2D:Et,texImage3D:Ot,updateUBOMapping:ie,uniformBlockBinding:Yt,texStorage2D:re,texStorage3D:dt,texSubImage2D:it,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Gt,viewport:At,reset:Se}}function v1(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,l=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,P){return p?new OffscreenCanvas(N,P):zc("canvas")}function x(N,P,$){let rt=1;const lt=Dt(N);if((lt.width>$||lt.height>$)&&(rt=$/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const it=Math.floor(rt*lt.width),Lt=Math.floor(rt*lt.height);h===void 0&&(h=m(it,Lt));const _t=P?m(it,Lt):h;return _t.width=it,_t.height=Lt,_t.getContext("2d").drawImage(N,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+Lt+")."),_t}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),N;return N}function d(N){return N.generateMipmaps}function g(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,P,$,rt,lt=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let it=P;if(P===i.RED&&($===i.FLOAT&&(it=i.R32F),$===i.HALF_FLOAT&&(it=i.R16F),$===i.UNSIGNED_BYTE&&(it=i.R8)),P===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(it=i.R8UI),$===i.UNSIGNED_SHORT&&(it=i.R16UI),$===i.UNSIGNED_INT&&(it=i.R32UI),$===i.BYTE&&(it=i.R8I),$===i.SHORT&&(it=i.R16I),$===i.INT&&(it=i.R32I)),P===i.RG&&($===i.FLOAT&&(it=i.RG32F),$===i.HALF_FLOAT&&(it=i.RG16F),$===i.UNSIGNED_BYTE&&(it=i.RG8)),P===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(it=i.RG8UI),$===i.UNSIGNED_SHORT&&(it=i.RG16UI),$===i.UNSIGNED_INT&&(it=i.RG32UI),$===i.BYTE&&(it=i.RG8I),$===i.SHORT&&(it=i.RG16I),$===i.INT&&(it=i.RG32I)),P===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(it=i.RGB8UI),$===i.UNSIGNED_SHORT&&(it=i.RGB16UI),$===i.UNSIGNED_INT&&(it=i.RGB32UI),$===i.BYTE&&(it=i.RGB8I),$===i.SHORT&&(it=i.RGB16I),$===i.INT&&(it=i.RGB32I)),P===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),$===i.UNSIGNED_INT&&(it=i.RGBA32UI),$===i.BYTE&&(it=i.RGBA8I),$===i.SHORT&&(it=i.RGBA16I),$===i.INT&&(it=i.RGBA32I)),P===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),P===i.RGBA){const Lt=lt?Uc:ue.getTransfer(rt);$===i.FLOAT&&(it=i.RGBA32F),$===i.HALF_FLOAT&&(it=i.RGBA16F),$===i.UNSIGNED_BYTE&&(it=Lt===Me?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(N,P){let $;return N?P===null||P===Js||P===cr?$=i.DEPTH24_STENCIL8:P===Ai?$=i.DEPTH32F_STENCIL8:P===sa&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Js||P===cr?$=i.DEPTH_COMPONENT24:P===Ai?$=i.DEPTH_COMPONENT32F:P===sa&&($=i.DEPTH_COMPONENT16),$}function A(N,P){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Xn&&N.minFilter!==Ei?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function E(N){const P=N.target;P.removeEventListener("dispose",E),T(P),P.isVideoTexture&&l.delete(P)}function b(N){const P=N.target;P.removeEventListener("dispose",b),w(P)}function T(N){const P=n.get(N);if(P.__webglInit===void 0)return;const $=N.source,rt=f.get($);if(rt){const lt=rt[P.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&M(N),Object.keys(rt).length===0&&f.delete($)}n.remove(N)}function M(N){const P=n.get(N);i.deleteTexture(P.__webglTexture);const $=N.source,rt=f.get($);delete rt[P.__cacheKey],r.memory.textures--}function w(N){const P=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(P.__webglFramebuffer[rt]))for(let lt=0;lt<P.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(P.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(P.__webglFramebuffer[rt]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[rt])}else{if(Array.isArray(P.__webglFramebuffer))for(let rt=0;rt<P.__webglFramebuffer.length;rt++)i.deleteFramebuffer(P.__webglFramebuffer[rt]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let rt=0;rt<P.__webglColorRenderbuffer.length;rt++)P.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[rt]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const $=N.textures;for(let rt=0,lt=$.length;rt<lt;rt++){const it=n.get($[rt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),r.memory.textures--),n.remove($[rt])}n.remove(N)}let R=0;function L(){R=0}function D(){const N=R;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),R+=1,N}function z(N){const P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function H(N,P){const $=n.get(N);if(N.isVideoTexture&&Ut(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){const rt=N.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt($,N,P);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+P)}function k(N,P){const $=n.get(N);if(N.version>0&&$.__version!==N.version){tt($,N,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+P)}function O(N,P){const $=n.get(N);if(N.version>0&&$.__version!==N.version){tt($,N,P);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+P)}function G(N,P){const $=n.get(N);if(N.version>0&&$.__version!==N.version){ut($,N,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+P)}const et={[ar]:i.REPEAT,[ks]:i.CLAMP_TO_EDGE,[zu]:i.MIRRORED_REPEAT},ct={[Xn]:i.NEAREST,[yg]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[Ei]:i.LINEAR,[ml]:i.LINEAR_MIPMAP_NEAREST,[Hs]:i.LINEAR_MIPMAP_LINEAR},ft={[Tg]:i.NEVER,[Ig]:i.ALWAYS,[Eg]:i.LESS,[ip]:i.LEQUAL,[Ag]:i.EQUAL,[Pg]:i.GEQUAL,[Rg]:i.GREATER,[Cg]:i.NOTEQUAL};function Pt(N,P){if(P.type===Ai&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Ei||P.magFilter===ml||P.magFilter===ya||P.magFilter===Hs||P.minFilter===Ei||P.minFilter===ml||P.minFilter===ya||P.minFilter===Hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,et[P.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,et[P.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,et[P.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ct[P.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ct[P.minFilter]),P.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ft[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Xn||P.minFilter!==ya&&P.minFilter!==Hs||P.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Wt(N,P){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",E));const rt=P.source;let lt=f.get(rt);lt===void 0&&(lt={},f.set(rt,lt));const it=z(P);if(it!==N.__cacheKey){lt[it]===void 0&&(lt[it]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,$=!0),lt[it].usedTimes++;const Lt=lt[N.__cacheKey];Lt!==void 0&&(lt[N.__cacheKey].usedTimes--,Lt.usedTimes===0&&M(P)),N.__cacheKey=it,N.__webglTexture=lt[it].texture}return $}function tt(N,P,$){let rt=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(rt=i.TEXTURE_3D);const lt=Wt(N,P),it=P.source;e.bindTexture(rt,N.__webglTexture,i.TEXTURE0+$);const Lt=n.get(it);if(it.version!==Lt.__version||lt===!0){e.activeTexture(i.TEXTURE0+$);const _t=ue.getPrimaries(ue.workingColorSpace),Tt=P.colorSpace===fs?null:ue.getPrimaries(P.colorSpace),re=P.colorSpace===fs||_t===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let dt=x(P.image,!1,s.maxTextureSize);dt=Ae(P,dt);const Et=o.convert(P.format,P.colorSpace),Ot=o.convert(P.type);let Gt=_(P.internalFormat,Et,Ot,P.colorSpace,P.isVideoTexture);Pt(rt,P);let At;const ie=P.mipmaps,Yt=P.isVideoTexture!==!0,Se=Lt.__version===void 0||lt===!0,V=it.dataReady,vt=A(P,dt);if(P.isDepthTexture)Gt=y(P.format===lr,P.type),Se&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Ot,null));else if(P.isDataTexture)if(ie.length>0){Yt&&Se&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let Q=0,at=ie.length;Q<at;Q++)At=ie[Q],Yt?V&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,Et,Ot,At.data):e.texImage2D(i.TEXTURE_2D,Q,Gt,At.width,At.height,0,Et,Ot,At.data);P.generateMipmaps=!1}else Yt?(Se&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Et,Ot,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Ot,dt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Yt&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,ie[0].width,ie[0].height,dt.depth);for(let Q=0,at=ie.length;Q<at;Q++)if(At=ie[Q],P.format!==di)if(Et!==null)if(Yt){if(V)if(P.layerUpdates.size>0){const St=zd(At.width,At.height,P.format,P.type);for(const wt of P.layerUpdates){const Xt=At.data.subarray(wt*St/At.data.BYTES_PER_ELEMENT,(wt+1)*St/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,wt,At.width,At.height,1,Et,Xt)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,dt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Gt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,dt.depth,Et,Ot,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Gt,At.width,At.height,dt.depth,0,Et,Ot,At.data)}else{Yt&&Se&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,ie[0].width,ie[0].height);for(let Q=0,at=ie.length;Q<at;Q++)At=ie[Q],P.format!==di?Et!==null?Yt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?V&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,Et,Ot,At.data):e.texImage2D(i.TEXTURE_2D,Q,Gt,At.width,At.height,0,Et,Ot,At.data)}else if(P.isDataArrayTexture)if(Yt){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,dt.width,dt.height,dt.depth),V)if(P.layerUpdates.size>0){const Q=zd(dt.width,dt.height,P.format,P.type);for(const at of P.layerUpdates){const St=dt.data.subarray(at*Q/dt.data.BYTES_PER_ELEMENT,(at+1)*Q/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,dt.width,dt.height,1,Et,Ot,St)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Et,Ot,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,Et,Ot,dt.data);else if(P.isData3DTexture)Yt?(Se&&e.texStorage3D(i.TEXTURE_3D,vt,Gt,dt.width,dt.height,dt.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Et,Ot,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,Et,Ot,dt.data);else if(P.isFramebufferTexture){if(Se)if(Yt)e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height);else{let Q=dt.width,at=dt.height;for(let St=0;St<vt;St++)e.texImage2D(i.TEXTURE_2D,St,Gt,Q,at,0,Et,Ot,null),Q>>=1,at>>=1}}else if(ie.length>0){if(Yt&&Se){const Q=Dt(ie[0]);e.texStorage2D(i.TEXTURE_2D,vt,Gt,Q.width,Q.height)}for(let Q=0,at=ie.length;Q<at;Q++)At=ie[Q],Yt?V&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Et,Ot,At):e.texImage2D(i.TEXTURE_2D,Q,Gt,Et,Ot,At);P.generateMipmaps=!1}else if(Yt){if(Se){const Q=Dt(dt);e.texStorage2D(i.TEXTURE_2D,vt,Gt,Q.width,Q.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ot,dt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Et,Ot,dt);d(P)&&g(rt),Lt.__version=it.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function ut(N,P,$){if(P.image.length!==6)return;const rt=Wt(N,P),lt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+$);const it=n.get(lt);if(lt.version!==it.__version||rt===!0){e.activeTexture(i.TEXTURE0+$);const Lt=ue.getPrimaries(ue.workingColorSpace),_t=P.colorSpace===fs?null:ue.getPrimaries(P.colorSpace),Tt=P.colorSpace===fs||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const re=P.isCompressedTexture||P.image[0].isCompressedTexture,dt=P.image[0]&&P.image[0].isDataTexture,Et=[];for(let at=0;at<6;at++)!re&&!dt?Et[at]=x(P.image[at],!0,s.maxCubemapSize):Et[at]=dt?P.image[at].image:P.image[at],Et[at]=Ae(P,Et[at]);const Ot=Et[0],Gt=o.convert(P.format,P.colorSpace),At=o.convert(P.type),ie=_(P.internalFormat,Gt,At,P.colorSpace),Yt=P.isVideoTexture!==!0,Se=it.__version===void 0||rt===!0,V=lt.dataReady;let vt=A(P,Ot);Pt(i.TEXTURE_CUBE_MAP,P);let Q;if(re){Yt&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,Ot.width,Ot.height);for(let at=0;at<6;at++){Q=Et[at].mipmaps;for(let St=0;St<Q.length;St++){const wt=Q[St];P.format!==di?Gt!==null?Yt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Gt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,0,0,wt.width,wt.height,Gt,At,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St,ie,wt.width,wt.height,0,Gt,At,wt.data)}}}else{if(Q=P.mipmaps,Yt&&Se){Q.length>0&&vt++;const at=Dt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,ie,at.width,at.height)}for(let at=0;at<6;at++)if(dt){Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Et[at].width,Et[at].height,Gt,At,Et[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Et[at].width,Et[at].height,0,Gt,At,Et[at].data);for(let St=0;St<Q.length;St++){const Xt=Q[St].image[at].image;Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,Xt.width,Xt.height,Gt,At,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,Xt.width,Xt.height,0,Gt,At,Xt.data)}}else{Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Gt,At,Et[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ie,Gt,At,Et[at]);for(let St=0;St<Q.length;St++){const wt=Q[St];Yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,0,0,Gt,At,wt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,St+1,ie,Gt,At,wt.image[at])}}}d(P)&&g(i.TEXTURE_CUBE_MAP),it.__version=lt.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function yt(N,P,$,rt,lt,it){const Lt=o.convert($.format,$.colorSpace),_t=o.convert($.type),Tt=_($.internalFormat,Lt,_t,$.colorSpace),re=n.get(P),dt=n.get($);if(dt.__renderTarget=P,!re.__hasExternalTextures){const Et=Math.max(1,P.width>>it),Ot=Math.max(1,P.height>>it);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,Tt,Et,Ot,P.depth,0,Lt,_t,null):e.texImage2D(lt,it,Tt,Et,Ot,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),ne(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,0,ee(P)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,dt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(N,P,$){if(i.bindRenderbuffer(i.RENDERBUFFER,N),P.depthBuffer){const rt=P.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,it=y(P.stencilBuffer,lt),Lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ee(P);ne(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,it,P.width,P.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,it,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,it,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,N)}else{const rt=P.textures;for(let lt=0;lt<rt.length;lt++){const it=rt[lt],Lt=o.convert(it.format,it.colorSpace),_t=o.convert(it.type),Tt=_(it.internalFormat,Lt,_t,it.colorSpace),re=ee(P);$&&ne(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Tt,P.width,P.height):ne(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Tt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(N,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(P.depthTexture);rt.__renderTarget=P,(!rt.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),H(P.depthTexture,0);const lt=rt.__webglTexture,it=ee(P);if(P.depthTexture.format===Xo)ne(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(P.depthTexture.format===lr)ne(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function Nt(N){const P=n.get(N),$=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){const rt=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),rt){const lt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),P.__depthDisposeCallback=lt}P.__boundDepthTexture=rt}if(N.depthTexture&&!P.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");It(P.__webglFramebuffer,N)}else if($){P.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[rt]),P.__webglDepthbuffer[rt]===void 0)P.__webglDepthbuffer[rt]=i.createRenderbuffer(),mt(P.__webglDepthbuffer[rt],N,!1);else{const lt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=P.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),mt(P.__webglDepthbuffer,N,!1);else{const rt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(N,P,$){const rt=n.get(N);P!==void 0&&yt(rt.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Nt(N)}function Le(N){const P=N.texture,$=n.get(N),rt=n.get(P);N.addEventListener("dispose",b);const lt=N.textures,it=N.isWebGLCubeRenderTarget===!0,Lt=lt.length>1;if(Lt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=P.version,r.memory.textures++),it){$.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0){$.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<P.mipmaps.length;Tt++)$.__webglFramebuffer[_t][Tt]=i.createFramebuffer()}else $.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){$.__webglFramebuffer=[];for(let _t=0;_t<P.mipmaps.length;_t++)$.__webglFramebuffer[_t]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,Tt=lt.length;_t<Tt;_t++){const re=n.get(lt[_t]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),r.memory.textures++)}if(N.samples>0&&ne(N)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let _t=0;_t<lt.length;_t++){const Tt=lt[_t];$.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[_t]);const re=o.convert(Tt.format,Tt.colorSpace),dt=o.convert(Tt.type),Et=_(Tt.internalFormat,re,dt,Tt.colorSpace,N.isXRRenderTarget===!0),Ot=ee(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Et,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,$.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),mt($.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,P);for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)yt($.__webglFramebuffer[_t][Tt],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else yt($.__webglFramebuffer[_t],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);d(P)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,Tt=lt.length;_t<Tt;_t++){const re=lt[_t],dt=n.get(re);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Pt(i.TEXTURE_2D,re),yt($.__webglFramebuffer,N,re,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),d(re)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_t=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),Pt(_t,P),P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)yt($.__webglFramebuffer[Tt],N,P,i.COLOR_ATTACHMENT0,_t,Tt);else yt($.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0,_t,0);d(P)&&g(_t),e.unbindTexture()}N.depthBuffer&&Nt(N)}function oe(N){const P=N.textures;for(let $=0,rt=P.length;$<rt;$++){const lt=P[$];if(d(lt)){const it=S(N),Lt=n.get(lt).__webglTexture;e.bindTexture(it,Lt),g(it),e.unbindTexture()}}}const Be=[],B=[];function Zn(N){if(N.samples>0){if(ne(N)===!1){const P=N.textures,$=N.width,rt=N.height;let lt=i.COLOR_BUFFER_BIT;const it=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(N),_t=P.length>1;if(_t)for(let Tt=0;Tt<P.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<P.length;Tt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const re=n.get(P[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,$,rt,0,0,$,rt,lt,i.NEAREST),u===!0&&(Be.length=0,B.length=0,Be.push(i.COLOR_ATTACHMENT0+Tt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Be.push(it),B.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<P.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const re=n.get(P[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const P=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function ee(N){return Math.min(s.maxSamples,N.samples)}function ne(N){const P=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ut(N){const P=r.render.frame;l.get(N)!==P&&(l.set(N,P),N.update())}function Ae(N,P){const $=N.colorSpace,rt=N.format,lt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==ur&&$!==fs&&(ue.getTransfer($)===Me?(rt!==di||lt!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),P}function Dt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=$t,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Zn,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ne}function M1(i,t){function e(n,s=fs){let o;const r=ue.getTransfer(s);if(n===Qi)return i.UNSIGNED_BYTE;if(n===gf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Y0)return i.BYTE;if(n===Z0)return i.SHORT;if(n===sa)return i.UNSIGNED_SHORT;if(n===mf)return i.INT;if(n===Js)return i.UNSIGNED_INT;if(n===Ai)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===j0)return i.ALPHA;if(n===K0)return i.RGB;if(n===di)return i.RGBA;if(n===J0)return i.LUMINANCE;if(n===Q0)return i.LUMINANCE_ALPHA;if(n===Xo)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===vf)return i.RED;if(n===Mf)return i.RED_INTEGER;if(n===tp)return i.RG;if(n===_f)return i.RG_INTEGER;if(n===yf)return i.RGBA_INTEGER;if(n===dc||n===pc||n===mc||n===gc)if(r===Me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===dc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===dc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fu||n===Ou||n===Bu||n===Gu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Fu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ou)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ku||n===Hu||n===Vu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ku||n===Hu)return r===Me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Vu)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===$u||n===ju||n===Ku||n===Ju||n===Qu||n===th||n===eh||n===nh||n===ih)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Wu)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xu)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qu)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yu)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zu)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$u)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ju)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ku)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ju)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qu)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===th)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nh)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ih)return r===Me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xc||n===sh||n===oh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===xc)return r===Me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ep||n===rh||n===ah||n===ch)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===xc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===rh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ah)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ch)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const _1={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,u=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const d=e.getJointPose(x,n),g=this._getHandJoint(c,x);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}const l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=l.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_1)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class S1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new un,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:y1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new C(new se(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b1 extends xr{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",u=1,c=null,l=null,h=null,f=null,p=null,m=null;const x=new S1,d=e.getContextAttributes();let g=null,S=null;const _=[],y=[],A=new pt;let E=null;const b=new Gn;b.viewport=new ye;const T=new Gn;T.viewport=new ye;const M=[b,T],w=new Xx;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ut=_[tt];return ut===void 0&&(ut=new Kl,_[tt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(tt){let ut=_[tt];return ut===void 0&&(ut=new Kl,_[tt]=ut),ut.getGripSpace()},this.getHand=function(tt){let ut=_[tt];return ut===void 0&&(ut=new Kl,_[tt]=ut),ut.getHandSpace()};function D(tt){const ut=y.indexOf(tt.inputSource);if(ut===-1)return;const yt=_[ut];yt!==void 0&&(yt.update(tt.inputSource,tt.frame,c||r),yt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",H);for(let tt=0;tt<_.length;tt++){const ut=y[tt];ut!==null&&(y[tt]=null,_[tt].disconnect(ut))}R=null,L=null,x.reset(),t.setRenderTarget(g),p=null,f=null,h=null,s=null,S=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let yt=null,mt=null,It=null;d.depth&&(It=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=d.stencil?lr:Xo,mt=d.stencil?cr:Js);const Nt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:o};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new pi(f.textureWidth,f.textureHeight,{format:di,type:Qi,depthTexture:new vp(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new pi(p.framebufferWidth,p.framebufferHeight,{format:di,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}S.isXRRenderTarget=!0,this.setFoveation(u),c=null,r=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(tt){for(let ut=0;ut<tt.removed.length;ut++){const yt=tt.removed[ut],mt=y.indexOf(yt);mt>=0&&(y[mt]=null,_[mt].disconnect(yt))}for(let ut=0;ut<tt.added.length;ut++){const yt=tt.added[ut];let mt=y.indexOf(yt);if(mt===-1){for(let Nt=0;Nt<_.length;Nt++)if(Nt>=y.length){y.push(yt),mt=Nt;break}else if(y[Nt]===null){y[Nt]=yt,mt=Nt;break}if(mt===-1)break}const It=_[mt];It&&It.connect(yt)}}const k=new F,O=new F;function G(tt,ut,yt){k.setFromMatrixPosition(ut.matrixWorld),O.setFromMatrixPosition(yt.matrixWorld);const mt=k.distanceTo(O),It=ut.projectionMatrix.elements,Nt=yt.projectionMatrix.elements,$t=It[14]/(It[10]-1),Le=It[14]/(It[10]+1),oe=(It[9]+1)/It[5],Be=(It[9]-1)/It[5],B=(It[8]-1)/It[0],Zn=(Nt[8]+1)/Nt[0],ee=$t*B,ne=$t*Zn,Ut=mt/(-B+Zn),Ae=Ut*-B;if(ut.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ae),tt.translateZ(Ut),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),It[10]===-1)tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Dt=$t+Ut,N=Le+Ut,P=ee-Ae,$=ne+(mt-Ae),rt=oe*Le/N*Dt,lt=Be*Le/N*Dt;tt.projectionMatrix.makePerspective(P,$,rt,lt,Dt,N),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function et(tt,ut){ut===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ut.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let ut=tt.near,yt=tt.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),w.near=T.near=b.near=ut,w.far=T.far=b.far=yt,(R!==w.near||L!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,L=w.far),b.layers.mask=tt.layers.mask|2,T.layers.mask=tt.layers.mask|4,w.layers.mask=b.layers.mask|T.layers.mask;const mt=tt.parent,It=w.cameras;et(w,mt);for(let Nt=0;Nt<It.length;Nt++)et(It[Nt],mt);It.length===2?G(w,b,T):w.projectionMatrix.copy(b.projectionMatrix),ct(tt,w,mt)};function ct(tt,ut,yt){yt===null?tt.matrix.copy(ut.matrixWorld):(tt.matrix.copy(yt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ut.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=uh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return u},this.setFoveation=function(tt){u=tt,f!==null&&(f.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)};let ft=null;function Pt(tt,ut){if(l=ut.getViewerPose(c||r),m=ut,l!==null){const yt=l.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let mt=!1;yt.length!==w.cameras.length&&(w.cameras.length=0,mt=!0);for(let Nt=0;Nt<yt.length;Nt++){const $t=yt[Nt];let Le=null;if(p!==null)Le=p.getViewport($t);else{const Be=h.getViewSubImage(f,$t);Le=Be.viewport,Nt===0&&(t.setRenderTargetTextures(S,Be.colorTexture,f.ignoreDepthValues?void 0:Be.depthStencilTexture),t.setRenderTarget(S))}let oe=M[Nt];oe===void 0&&(oe=new Gn,oe.layers.enable(Nt),oe.viewport=new ye,M[Nt]=oe),oe.matrix.fromArray($t.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray($t.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Le.x,Le.y,Le.width,Le.height),Nt===0&&(w.matrix.copy(oe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),mt===!0&&w.cameras.push(oe)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Nt=h.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let yt=0;yt<_.length;yt++){const mt=y[yt],It=_[yt];mt!==null&&It!==void 0&&It.update(mt,ut,c||r)}ft&&ft(tt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),m=null}const Wt=new Cp;Wt.setAnimationLoop(Pt),this.setAnimationLoop=function(tt){ft=tt},this.dispose=function(){}}}const Rs=new Ci,T1=new me;function E1(i,t){function e(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function n(d,g){g.color.getRGB(d.fogColor.value,hp(i)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function s(d,g,S,_,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(d,g):g.isMeshToonMaterial?(o(d,g),h(d,g)):g.isMeshPhongMaterial?(o(d,g),l(d,g)):g.isMeshStandardMaterial?(o(d,g),f(d,g),g.isMeshPhysicalMaterial&&p(d,g,y)):g.isMeshMatcapMaterial?(o(d,g),m(d,g)):g.isMeshDepthMaterial?o(d,g):g.isMeshDistanceMaterial?(o(d,g),x(d,g)):g.isMeshNormalMaterial?o(d,g):g.isLineBasicMaterial?(r(d,g),g.isLineDashedMaterial&&a(d,g)):g.isPointsMaterial?u(d,g,S,_):g.isSpriteMaterial?c(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,e(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===ln&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,e(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===ln&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,e(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,e(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);const S=t.get(g),_=S.envMap,y=S.envMapRotation;_&&(d.envMap.value=_,Rs.copy(y),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),d.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(Rs)),d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap&&(d.lightMap.value=g.lightMap,d.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,d.lightMapTransform)),g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,d.aoMapTransform))}function r(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform))}function a(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function u(d,g,S,_){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*S,d.scale.value=_*.5,g.map&&(d.map.value=g.map,e(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function c(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function l(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function h(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function f(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,d.roughnessMapTransform)),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function p(d,g,S){d.ior.value=g.ior,g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ln&&d.clearcoatNormalScale.value.negate())),g.dispersion>0&&(d.dispersion.value=g.dispersion),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function x(d,g){const S=t.get(g).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A1(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,_){const y=_.program;n.uniformBlockBinding(S,y)}function c(S,_){let y=s[S.id];y===void 0&&(m(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",d));const A=_.program;n.updateUBOMapping(S,A);const E=t.render.frame;o[S.id]!==E&&(f(S),o[S.id]=E)}function l(S){const _=h();S.__bindingPointIndex=_;const y=i.createBuffer(),A=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const _=s[S.id],y=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,b=y.length;E<b;E++){const T=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,w=T.length;M<w;M++){const R=T[M];if(p(R,E,M,A)===!0){const L=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let H=0;H<D.length;H++){const k=D[H],O=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,L+z,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,_,y,A){const E=S.value,b=_+"_"+y;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const T=A[b];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return A[b]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function m(S){const _=S.uniforms;let y=0;const A=16;for(let b=0,T=_.length;b<T;b++){const M=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,R=M.length;w<R;w++){const L=M[w],D=Array.isArray(L.value)?L.value:[L.value];for(let z=0,H=D.length;z<H;z++){const k=D[z],O=x(k),G=y%A,et=G%O.boundary,ct=G+et;y+=et,ct!==0&&A-ct<O.storage&&(y+=A-ct),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=O.storage}}}const E=y%A;return E>0&&(y+=A-E),S.__size=y,S.__cache={},this}function x(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function d(S){const _=S.target;_.removeEventListener("dispose",d);const y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:u,update:c,dispose:g}}class R1{constructor(t={}){const{canvas:e=Dg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const m=new Uint32Array(4),x=new Int32Array(4);let d=null,g=null;const S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=xs,this.toneMappingExposure=1;const y=this;let A=!1,E=0,b=0,T=null,M=-1,w=null;const R=new ye,L=new ye;let D=null;const z=new ot(0);let H=0,k=e.width,O=e.height,G=1,et=null,ct=null;const ft=new ye(0,0,k,O),Pt=new ye(0,0,k,O);let Wt=!1;const tt=new bf;let ut=!1,yt=!1;this.transmissionResolutionScale=1;const mt=new me,It=new me,Nt=new F,$t=new ye,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Be(){return T===null?G:1}let B=n;function Zn(I,W){return e.getContext(I,W)}try{const I={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pf}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),B===null){const W="webgl2";if(B=Zn(W,I),B===null)throw Zn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ee,ne,Ut,Ae,Dt,N,P,$,rt,lt,it,Lt,_t,Tt,re,dt,Et,Ot,Gt,At,ie,Yt,Se,V;function vt(){ee=new F_(B),ee.init(),Yt=new M1(B,ee),ne=new I_(B,ee,t,Yt),Ut=new x1(B,ee),ne.reverseDepthBuffer&&f&&Ut.buffers.depth.setReversed(!0),Ae=new G_(B),Dt=new s1,N=new v1(B,ee,Ut,Dt,ne,Yt,Ae),P=new D_(y),$=new z_(y),rt=new Yx(B),Se=new C_(B,rt),lt=new O_(B,rt,Ae,Se),it=new H_(B,lt,rt,Ae),Gt=new k_(B,ne,N),dt=new L_(Dt),Lt=new i1(y,P,$,ee,ne,Se,dt),_t=new E1(y,Dt),Tt=new r1,re=new f1(ee),Ot=new R_(y,P,$,Ut,it,p,u),Et=new m1(y,it,ne),V=new A1(B,Ae,ne,Ut),At=new P_(B,ee,Ae),ie=new B_(B,ee,Ae),Ae.programs=Lt.programs,y.capabilities=ne,y.extensions=ee,y.properties=Dt,y.renderLists=Tt,y.shadowMap=Et,y.state=Ut,y.info=Ae}vt();const Q=new b1(y,B);this.xr=Q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=ee.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ee.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(k,O,!1))},this.getSize=function(I){return I.set(k,O)},this.setSize=function(I,W,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=I,O=W,e.width=Math.floor(I*G),e.height=Math.floor(W*G),K===!0&&(e.style.width=I+"px",e.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(k*G,O*G).floor()},this.setDrawingBufferSize=function(I,W,K){k=I,O=W,G=K,e.width=Math.floor(I*K),e.height=Math.floor(W*K),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(ft)},this.setViewport=function(I,W,K,J){I.isVector4?ft.set(I.x,I.y,I.z,I.w):ft.set(I,W,K,J),Ut.viewport(R.copy(ft).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(Pt)},this.setScissor=function(I,W,K,J){I.isVector4?Pt.set(I.x,I.y,I.z,I.w):Pt.set(I,W,K,J),Ut.scissor(L.copy(Pt).multiplyScalar(G).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(I){Ut.setScissorTest(Wt=I)},this.setOpaqueSort=function(I){et=I},this.setTransparentSort=function(I){ct=I},this.getClearColor=function(I){return I.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(I=!0,W=!0,K=!0){let J=0;if(I){let X=!1;if(T!==null){const ht=T.texture.format;X=ht===yf||ht===_f||ht===Mf}if(X){const ht=T.texture.type,Mt=ht===Qi||ht===Js||ht===sa||ht===cr||ht===gf||ht===xf,bt=Ot.getClearColor(),Rt=Ot.getClearAlpha(),kt=bt.r,Ht=bt.g,zt=bt.b;Mt?(m[0]=kt,m[1]=Ht,m[2]=zt,m[3]=Rt,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=kt,x[1]=Ht,x[2]=zt,x[3]=Rt,B.clearBufferiv(B.COLOR,0,x))}else J|=B.COLOR_BUFFER_BIT}W&&(J|=B.DEPTH_BUFFER_BIT),K&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Ot.dispose(),Tt.dispose(),re.dispose(),Dt.dispose(),P.dispose(),$.dispose(),it.dispose(),Se.dispose(),V.dispose(),Lt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Vf),Q.removeEventListener("sessionend",Wf),ys.stop()};function at(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=Ae.autoReset,W=Et.enabled,K=Et.autoUpdate,J=Et.needsUpdate,X=Et.type;vt(),Ae.autoReset=I,Et.enabled=W,Et.autoUpdate=K,Et.needsUpdate=J,Et.type=X}function wt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Xt(I){const W=I.target;W.removeEventListener("dispose",Xt),Ne(W)}function Ne(I){en(I),Dt.remove(I)}function en(I){const W=Dt.get(I).programs;W!==void 0&&(W.forEach(function(K){Lt.releaseProgram(K)}),I.isShaderMaterial&&Lt.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,K,J,X,ht){W===null&&(W=Le);const Mt=X.isMesh&&X.matrixWorld.determinant()<0,bt=km(I,W,K,J,X);Ut.setMaterial(J,Mt);let Rt=K.index,kt=1;if(J.wireframe===!0){if(Rt=lt.getWireframeAttribute(K),Rt===void 0)return;kt=2}const Ht=K.drawRange,zt=K.attributes.position;let ae=Ht.start*kt,fe=(Ht.start+Ht.count)*kt;ht!==null&&(ae=Math.max(ae,ht.start*kt),fe=Math.min(fe,(ht.start+ht.count)*kt)),Rt!==null?(ae=Math.max(ae,0),fe=Math.min(fe,Rt.count)):zt!=null&&(ae=Math.max(ae,0),fe=Math.min(fe,zt.count));const Ve=fe-ae;if(Ve<0||Ve===1/0)return;Se.setup(X,J,bt,K,Rt);let ze,le=At;if(Rt!==null&&(ze=rt.get(Rt),le=ie,le.setIndex(ze)),X.isMesh)J.wireframe===!0?(Ut.setLineWidth(J.wireframeLinewidth*Be()),le.setMode(B.LINES)):le.setMode(B.TRIANGLES);else if(X.isLine){let Ft=J.linewidth;Ft===void 0&&(Ft=1),Ut.setLineWidth(Ft*Be()),X.isLineSegments?le.setMode(B.LINES):X.isLineLoop?le.setMode(B.LINE_LOOP):le.setMode(B.LINE_STRIP)}else X.isPoints?le.setMode(B.POINTS):X.isSprite&&le.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)le.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))le.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ft=X._multiDrawStarts,Ke=X._multiDrawCounts,de=X._multiDrawCount,ci=Rt?rt.get(Rt).bytesPerElement:1,oo=Dt.get(J).currentProgram.getUniforms();for(let zn=0;zn<de;zn++)oo.setValue(B,"_gl_DrawID",zn),le.render(Ft[zn]/ci,Ke[zn])}else if(X.isInstancedMesh)le.renderInstances(ae,Ve,X.count);else if(K.isInstancedBufferGeometry){const Ft=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ke=Math.min(K.instanceCount,Ft);le.renderInstances(ae,Ve,Ke)}else le.render(ae,Ve)};function ge(I,W,K){I.transparent===!0&&I.side===Ct&&I.forceSinglePass===!1?(I.side=ln,I.needsUpdate=!0,_a(I,W,K),I.side=Ms,I.needsUpdate=!0,_a(I,W,K),I.side=Ct):_a(I,W,K)}this.compile=function(I,W,K=null){K===null&&(K=I),g=re.get(K),g.init(W),_.push(g),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),I!==K&&I.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const J=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ht=X.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const bt=ht[Mt];ge(bt,K,X),J.add(bt)}else ge(ht,K,X),J.add(ht)}),_.pop(),g=null,J},this.compileAsync=function(I,W,K=null){const J=this.compile(I,W,K);return new Promise(X=>{function ht(){if(J.forEach(function(Mt){Dt.get(Mt).currentProgram.isReady()&&J.delete(Mt)}),J.size===0){X(I);return}setTimeout(ht,10)}ee.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ai=null;function Li(I){ai&&ai(I)}function Vf(){ys.stop()}function Wf(){ys.start()}const ys=new Cp;ys.setAnimationLoop(Li),typeof self<"u"&&ys.setContext(self),this.setAnimationLoop=function(I){ai=I,Q.setAnimationLoop(I),I===null?ys.stop():ys.start()},Q.addEventListener("sessionstart",Vf),Q.addEventListener("sessionend",Wf),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(W),W=Q.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,W,T),g=re.get(I,_.length),g.init(W),_.push(g),It.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),tt.setFromProjectionMatrix(It),yt=this.localClippingEnabled,ut=dt.init(this.clippingPlanes,yt),d=Tt.get(I,S.length),d.init(),S.push(d),Q.enabled===!0&&Q.isPresenting===!0){const ht=y.xr.getDepthSensingMesh();ht!==null&&dl(ht,W,-1/0,y.sortObjects)}dl(I,W,0,y.sortObjects),d.finish(),y.sortObjects===!0&&d.sort(et,ct),oe=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,oe&&Ot.addToRenderList(d,I),this.info.render.frame++,ut===!0&&dt.beginShadows();const K=g.state.shadowsArray;Et.render(K,I,W),ut===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=d.opaque,X=d.transmissive;if(g.setupLights(),W.isArrayCamera){const ht=W.cameras;if(X.length>0)for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];qf(J,X,I,Rt)}oe&&Ot.render(I);for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];Xf(d,I,Rt,Rt.viewport)}}else X.length>0&&qf(J,X,I,W),oe&&Ot.render(I),Xf(d,I,W);T!==null&&b===0&&(N.updateMultisampleRenderTarget(T),N.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(y,I,W),Se.resetDefaultState(),M=-1,w=null,_.pop(),_.length>0?(g=_[_.length-1],ut===!0&&dt.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?d=S[S.length-1]:d=null};function dl(I,W,K,J){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)K=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||tt.intersectsSprite(I)){J&&$t.setFromMatrixPosition(I.matrixWorld).applyMatrix4(It);const Mt=it.update(I),bt=I.material;bt.visible&&d.push(I,Mt,bt,K,$t.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||tt.intersectsObject(I))){const Mt=it.update(I),bt=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),$t.copy(I.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),$t.copy(Mt.boundingSphere.center)),$t.applyMatrix4(I.matrixWorld).applyMatrix4(It)),Array.isArray(bt)){const Rt=Mt.groups;for(let kt=0,Ht=Rt.length;kt<Ht;kt++){const zt=Rt[kt],ae=bt[zt.materialIndex];ae&&ae.visible&&d.push(I,Mt,ae,K,$t.z,zt)}}else bt.visible&&d.push(I,Mt,bt,K,$t.z,null)}}const ht=I.children;for(let Mt=0,bt=ht.length;Mt<bt;Mt++)dl(ht[Mt],W,K,J)}function Xf(I,W,K,J){const X=I.opaque,ht=I.transmissive,Mt=I.transparent;g.setupLightsView(K),ut===!0&&dt.setGlobalState(y.clippingPlanes,K),J&&Ut.viewport(R.copy(J)),X.length>0&&Ma(X,W,K),ht.length>0&&Ma(ht,W,K),Mt.length>0&&Ma(Mt,W,K),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function qf(I,W,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new pi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Zi:Qi,minFilter:Hs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const ht=g.state.transmissionRenderTarget[J.id],Mt=J.viewport||R;ht.setSize(Mt.z*y.transmissionResolutionScale,Mt.w*y.transmissionResolutionScale);const bt=y.getRenderTarget();y.setRenderTarget(ht),y.getClearColor(z),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),oe&&Ot.render(K);const Rt=y.toneMapping;y.toneMapping=xs;const kt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),ut===!0&&dt.setGlobalState(y.clippingPlanes,J),Ma(I,K,J),N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let zt=0,ae=W.length;zt<ae;zt++){const fe=W[zt],Ve=fe.object,ze=fe.geometry,le=fe.material,Ft=fe.group;if(le.side===Ct&&Ve.layers.test(J.layers)){const Ke=le.side;le.side=ln,le.needsUpdate=!0,Yf(Ve,K,J,ze,le,Ft),le.side=Ke,le.needsUpdate=!0,Ht=!0}}Ht===!0&&(N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht))}y.setRenderTarget(bt),y.setClearColor(z,H),kt!==void 0&&(J.viewport=kt),y.toneMapping=Rt}function Ma(I,W,K){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ht=I.length;X<ht;X++){const Mt=I[X],bt=Mt.object,Rt=Mt.geometry,kt=J===null?Mt.material:J,Ht=Mt.group;bt.layers.test(K.layers)&&Yf(bt,W,K,Rt,kt,Ht)}}function Yf(I,W,K,J,X,ht){I.onBeforeRender(y,W,K,J,X,ht),I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(y,W,K,J,I,ht),X.transparent===!0&&X.side===Ct&&X.forceSinglePass===!1?(X.side=ln,X.needsUpdate=!0,y.renderBufferDirect(K,W,J,X,I,ht),X.side=Ms,X.needsUpdate=!0,y.renderBufferDirect(K,W,J,X,I,ht),X.side=Ct):y.renderBufferDirect(K,W,J,X,I,ht),I.onAfterRender(y,W,K,J,X,ht)}function _a(I,W,K){W.isScene!==!0&&(W=Le);const J=Dt.get(I),X=g.state.lights,ht=g.state.shadowsArray,Mt=X.state.version,bt=Lt.getParameters(I,X.state,ht,W,K),Rt=Lt.getProgramCacheKey(bt);let kt=J.programs;J.environment=I.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(I.isMeshStandardMaterial?$:P).get(I.envMap||J.environment),J.envMapRotation=J.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,kt===void 0&&(I.addEventListener("dispose",Xt),kt=new Map,J.programs=kt);let Ht=kt.get(Rt);if(Ht!==void 0){if(J.currentProgram===Ht&&J.lightsStateVersion===Mt)return $f(I,bt),Ht}else bt.uniforms=Lt.getUniforms(I),I.onBeforeCompile(bt,y),Ht=Lt.acquireProgram(bt,Rt),kt.set(Rt,Ht),J.uniforms=bt.uniforms;const zt=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(zt.clippingPlanes=dt.uniform),$f(I,bt),J.needsLights=Vm(I),J.lightsStateVersion=Mt,J.needsLights&&(zt.ambientLightColor.value=X.state.ambient,zt.lightProbe.value=X.state.probe,zt.directionalLights.value=X.state.directional,zt.directionalLightShadows.value=X.state.directionalShadow,zt.spotLights.value=X.state.spot,zt.spotLightShadows.value=X.state.spotShadow,zt.rectAreaLights.value=X.state.rectArea,zt.ltc_1.value=X.state.rectAreaLTC1,zt.ltc_2.value=X.state.rectAreaLTC2,zt.pointLights.value=X.state.point,zt.pointLightShadows.value=X.state.pointShadow,zt.hemisphereLights.value=X.state.hemi,zt.directionalShadowMap.value=X.state.directionalShadowMap,zt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,zt.spotShadowMap.value=X.state.spotShadowMap,zt.spotLightMatrix.value=X.state.spotLightMatrix,zt.spotLightMap.value=X.state.spotLightMap,zt.pointShadowMap.value=X.state.pointShadowMap,zt.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Ht,J.uniformsList=null,Ht}function Zf(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=vc.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function $f(I,W){const K=Dt.get(I);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function km(I,W,K,J,X){W.isScene!==!0&&(W=Le),N.resetTextureUnits();const ht=W.fog,Mt=J.isMeshStandardMaterial?W.environment:null,bt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ur,Rt=(J.isMeshStandardMaterial?$:P).get(J.envMap||Mt),kt=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),zt=!!K.morphAttributes.position,ae=!!K.morphAttributes.normal,fe=!!K.morphAttributes.color;let Ve=xs;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ve=y.toneMapping);const ze=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,le=ze!==void 0?ze.length:0,Ft=Dt.get(J),Ke=g.state.lights;if(ut===!0&&(yt===!0||I!==w)){const fn=I===w&&J.id===M;dt.setState(J,I,fn)}let de=!1;J.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ke.state.version||Ft.outputColorSpace!==bt||X.isBatchedMesh&&Ft.batching===!1||!X.isBatchedMesh&&Ft.batching===!0||X.isBatchedMesh&&Ft.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ft.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ft.instancing===!1||!X.isInstancedMesh&&Ft.instancing===!0||X.isSkinnedMesh&&Ft.skinning===!1||!X.isSkinnedMesh&&Ft.skinning===!0||X.isInstancedMesh&&Ft.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ft.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ft.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ft.instancingMorph===!1&&X.morphTexture!==null||Ft.envMap!==Rt||J.fog===!0&&Ft.fog!==ht||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==dt.numPlanes||Ft.numIntersection!==dt.numIntersection)||Ft.vertexAlphas!==kt||Ft.vertexTangents!==Ht||Ft.morphTargets!==zt||Ft.morphNormals!==ae||Ft.morphColors!==fe||Ft.toneMapping!==Ve||Ft.morphTargetsCount!==le)&&(de=!0):(de=!0,Ft.__version=J.version);let ci=Ft.currentProgram;de===!0&&(ci=_a(J,W,X));let oo=!1,zn=!1,wr=!1;const Ie=ci.getUniforms(),$n=Ft.uniforms;if(Ut.useProgram(ci.program)&&(oo=!0,zn=!0,wr=!0),J.id!==M&&(M=J.id,zn=!0),oo||w!==I){Ut.buffers.depth.getReversed()?(mt.copy(I.projectionMatrix),Ng(mt),zg(mt),Ie.setValue(B,"projectionMatrix",mt)):Ie.setValue(B,"projectionMatrix",I.projectionMatrix),Ie.setValue(B,"viewMatrix",I.matrixWorldInverse);const In=Ie.map.cameraPosition;In!==void 0&&In.setValue(B,Nt.setFromMatrixPosition(I.matrixWorld)),ne.logarithmicDepthBuffer&&Ie.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ie.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),w!==I&&(w=I,zn=!0,wr=!0)}if(X.isSkinnedMesh){Ie.setOptional(B,X,"bindMatrix"),Ie.setOptional(B,X,"bindMatrixInverse");const fn=X.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ie.setValue(B,"boneTexture",fn.boneTexture,N))}X.isBatchedMesh&&(Ie.setOptional(B,X,"batchingTexture"),Ie.setValue(B,"batchingTexture",X._matricesTexture,N),Ie.setOptional(B,X,"batchingIdTexture"),Ie.setValue(B,"batchingIdTexture",X._indirectTexture,N),Ie.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Ie.setValue(B,"batchingColorTexture",X._colorsTexture,N));const jn=K.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Gt.update(X,K,ci),(zn||Ft.receiveShadow!==X.receiveShadow)&&(Ft.receiveShadow=X.receiveShadow,Ie.setValue(B,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&($n.envMap.value=Rt,$n.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&($n.envMapIntensity.value=W.environmentIntensity),zn&&(Ie.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&Hm($n,wr),ht&&J.fog===!0&&_t.refreshFogUniforms($n,ht),_t.refreshMaterialUniforms($n,J,G,O,g.state.transmissionRenderTarget[I.id]),vc.upload(B,Zf(Ft),$n,N)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(vc.upload(B,Zf(Ft),$n,N),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ie.setValue(B,"center",X.center),Ie.setValue(B,"modelViewMatrix",X.modelViewMatrix),Ie.setValue(B,"normalMatrix",X.normalMatrix),Ie.setValue(B,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const fn=J.uniformsGroups;for(let In=0,pl=fn.length;In<pl;In++){const ws=fn[In];V.update(ws,ci),V.bind(ws,ci)}}return ci}function Hm(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function Vm(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,W,K){Dt.get(I.texture).__webglTexture=W,Dt.get(I.depthTexture).__webglTexture=K;const J=Dt.get(I);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){const K=Dt.get(I);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};const Wm=B.createFramebuffer();this.setRenderTarget=function(I,W=0,K=0){T=I,E=W,b=K;let J=!0,X=null,ht=!1,Mt=!1;if(I){const Rt=Dt.get(I);if(Rt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(Rt.__webglFramebuffer===void 0)N.setupRenderTarget(I);else if(Rt.__hasExternalTextures)N.rebindTextures(I,Dt.get(I.texture).__webglTexture,Dt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const zt=I.depthTexture;if(Rt.__boundDepthTexture!==zt){if(zt!==null&&Dt.has(zt)&&(I.width!==zt.image.width||I.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(I)}}const kt=I.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Mt=!0);const Ht=Dt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ht[W])?X=Ht[W][K]:X=Ht[W],ht=!0):I.samples>0&&N.useMultisampledRTT(I)===!1?X=Dt.get(I).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[K]:X=Ht,R.copy(I.viewport),L.copy(I.scissor),D=I.scissorTest}else R.copy(ft).multiplyScalar(G).floor(),L.copy(Pt).multiplyScalar(G).floor(),D=Wt;if(K!==0&&(X=Wm),Ut.bindFramebuffer(B.FRAMEBUFFER,X)&&J&&Ut.drawBuffers(I,X),Ut.viewport(R),Ut.scissor(L),Ut.setScissorTest(D),ht){const Rt=Dt.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Rt.__webglTexture,K)}else if(Mt){const Rt=Dt.get(I.texture),kt=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.__webglTexture,K,kt)}else if(I!==null&&K!==0){const Rt=Dt.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rt.__webglTexture,K)}M=-1},this.readRenderTargetPixels=function(I,W,K,J,X,ht,Mt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Dt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){Ut.bindFramebuffer(B.FRAMEBUFFER,bt);try{const Rt=I.texture,kt=Rt.format,Ht=Rt.type;if(!ne.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-J&&K>=0&&K<=I.height-X&&B.readPixels(W,K,J,X,Yt.convert(kt),Yt.convert(Ht),ht)}finally{const Rt=T!==null?Dt.get(T).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(I,W,K,J,X,ht,Mt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Dt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){const Rt=I.texture,kt=Rt.format,Ht=Rt.type;if(!ne.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-J&&K>=0&&K<=I.height-X){Ut.bindFramebuffer(B.FRAMEBUFFER,bt);const zt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,zt),B.bufferData(B.PIXEL_PACK_BUFFER,ht.byteLength,B.STREAM_READ),B.readPixels(W,K,J,X,Yt.convert(kt),Yt.convert(Ht),0);const ae=T!==null?Dt.get(T).__webglFramebuffer:null;Ut.bindFramebuffer(B.FRAMEBUFFER,ae);const fe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ug(B,fe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,zt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ht),B.deleteBuffer(zt),B.deleteSync(fe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,W=null,K=0){I.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);const J=Math.pow(2,-K),X=Math.floor(I.image.width*J),ht=Math.floor(I.image.height*J),Mt=W!==null?W.x:0,bt=W!==null?W.y:0;N.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Mt,bt,X,ht),Ut.unbindTexture()};const Xm=B.createFramebuffer(),qm=B.createFramebuffer();this.copyTextureToTexture=function(I,W,K=null,J=null,X=0,ht=null){I.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1],W=arguments[2],ht=arguments[3]||0,K=null),ht===null&&(X!==0?(Io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=X,X=0):ht=0);let Mt,bt,Rt,kt,Ht,zt,ae,fe,Ve;const ze=I.isCompressedTexture?I.mipmaps[ht]:I.image;if(K!==null)Mt=K.max.x-K.min.x,bt=K.max.y-K.min.y,Rt=K.isBox3?K.max.z-K.min.z:1,kt=K.min.x,Ht=K.min.y,zt=K.isBox3?K.min.z:0;else{const jn=Math.pow(2,-X);Mt=Math.floor(ze.width*jn),bt=Math.floor(ze.height*jn),I.isDataArrayTexture?Rt=ze.depth:I.isData3DTexture?Rt=Math.floor(ze.depth*jn):Rt=1,kt=0,Ht=0,zt=0}J!==null?(ae=J.x,fe=J.y,Ve=J.z):(ae=0,fe=0,Ve=0);const le=Yt.convert(W.format),Ft=Yt.convert(W.type);let Ke;W.isData3DTexture?(N.setTexture3D(W,0),Ke=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),Ke=B.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),Ke=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const de=B.getParameter(B.UNPACK_ROW_LENGTH),ci=B.getParameter(B.UNPACK_IMAGE_HEIGHT),oo=B.getParameter(B.UNPACK_SKIP_PIXELS),zn=B.getParameter(B.UNPACK_SKIP_ROWS),wr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ze.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ze.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,kt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ht),B.pixelStorei(B.UNPACK_SKIP_IMAGES,zt);const Ie=I.isDataArrayTexture||I.isData3DTexture,$n=W.isDataArrayTexture||W.isData3DTexture;if(I.isDepthTexture){const jn=Dt.get(I),fn=Dt.get(W),In=Dt.get(jn.__renderTarget),pl=Dt.get(fn.__renderTarget);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,In.__webglFramebuffer),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,pl.__webglFramebuffer);for(let ws=0;ws<Rt;ws++)Ie&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(I).__webglTexture,X,zt+ws),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.get(W).__webglTexture,ht,Ve+ws)),B.blitFramebuffer(kt,Ht,Mt,bt,ae,fe,Mt,bt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||I.isRenderTargetTexture||Dt.has(I)){const jn=Dt.get(I),fn=Dt.get(W);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,Xm),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,qm);for(let In=0;In<Rt;In++)Ie?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jn.__webglTexture,X,zt+In):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,jn.__webglTexture,X),$n?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,ht,Ve+In):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,ht),X!==0?B.blitFramebuffer(kt,Ht,Mt,bt,ae,fe,Mt,bt,B.COLOR_BUFFER_BIT,B.NEAREST):$n?B.copyTexSubImage3D(Ke,ht,ae,fe,Ve+In,kt,Ht,Mt,bt):B.copyTexSubImage2D(Ke,ht,ae,fe,kt,Ht,Mt,bt);Ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else $n?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(Ke,ht,ae,fe,Ve,Mt,bt,Rt,le,Ft,ze.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ke,ht,ae,fe,Ve,Mt,bt,Rt,le,ze.data):B.texSubImage3D(Ke,ht,ae,fe,Ve,Mt,bt,Rt,le,Ft,ze):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ht,ae,fe,Mt,bt,le,Ft,ze.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ht,ae,fe,ze.width,ze.height,le,ze.data):B.texSubImage2D(B.TEXTURE_2D,ht,ae,fe,Mt,bt,le,Ft,ze);B.pixelStorei(B.UNPACK_ROW_LENGTH,de),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ci),B.pixelStorei(B.UNPACK_SKIP_PIXELS,oo),B.pixelStorei(B.UNPACK_SKIP_ROWS,zn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,wr),ht===0&&W.generateMipmaps&&B.generateMipmap(Ke),Ut.unbindTexture()},this.copyTextureToTexture3D=function(I,W,K=null,J=null,X=0){return I.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,I=arguments[2],W=arguments[3],X=arguments[4]||0),Io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,W,K,J,X)},this.initRenderTarget=function(I){Dt.get(I).__webglFramebuffer===void 0&&N.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),Ut.unbindTexture()},this.resetState=function(){E=0,b=0,T=null,Ut.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const C1=15,P1=6,I1=1.8,Vc=8,a0=.85,c0=.98,Wc=.003,Kt=90,ll=1.7,l0=500,L1=250,D1=18,U1=35,N1=40,z1=12,F1=35,O1=1200,B1=160,G1=140,k1=40,H1=60,Up=6,V1=25,W1=8,X1=40,q1=50,Y1=10,Z1=30,$1=30,j1=24,K1=45,J1=24,Q1=36,tw=36,ew=45,nw=25,Ki=280,gh=2.5,iw=6,u0=1.5,Lo=5,h0=2.5,Eo=12,Ce=30,xh=30,vh=.35,f0=5,sw=10,ow=5,rw=8,aw=2.2,U={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116,spiralStem:1716288,spiralFrond:2271880,spiralGlow:4521932,spiralTip:8978414,corpseSpathe:5574946,corpseColumn:8921668,corpseGlow:13382485,corpseLeaf:1717016,orbBushLeaf:2245666,orbBushOrb:16746700,orbBushGlow:16755421,orbBushStem:1718312,lanternStem:2769954,lanternPod:16768358,lanternGlow:16772744,lanternHaze:16763972,veilSupport:3816e3,veilMoss:4508808,veilGlow:6750122,veilEdge:8978380,groundGlowColors:[3407837,4521898,13400063,4500206,8978380]},tn=new R1({antialias:!0,powerPreference:"default"});tn.setSize(window.innerWidth,window.innerHeight);tn.setPixelRatio(Math.min(window.devicePixelRatio,1.5));tn.shadowMap.enabled=!0;tn.shadowMap.type=V0;tn.toneMapping=X0;tn.toneMappingExposure=2.8;tn.outputColorSpace=Cn;document.body.appendChild(tn.domElement);const yn=new Gn(65,window.innerWidth/window.innerHeight,.1,300),Np=new Rp,nt=new sx;nt.background=new ot(U.skyDeep);nt.fog=new Sf(U.fog,.01);window.addEventListener("resize",()=>{yn.aspect=window.innerWidth/window.innerHeight,yn.updateProjectionMatrix(),tn.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||Np.getDelta()});const zp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ga{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cw=new Df(-1,1,1,-1,0,1);class lw extends Ee{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const uw=new lw;class Fp{constructor(t){this._mesh=new C(uw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class hw extends ga{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Dn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Fc.clone(t.uniforms),this.material=new Dn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Fp(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class d0 extends ga{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class fw extends ga{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class dw{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new pi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hw(zp),this.copyPass.material.blending=Yi,this.clock=new Rp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),u.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}d0!==void 0&&(r instanceof d0?n=!0:r instanceof fw&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pw extends ga{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const mw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class pr extends ga{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new pi(o,r,{type:Zi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new pi(o,r,{type:Zi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new pi(o,r,{type:Zi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=mw;this.highPassUniforms=Fc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const u=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(u[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const l=zp;this.copyUniforms=Fc.clone(l.uniforms),this.blendMaterial=new Dn({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:Qt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new Y,this.fsQuad=new Fp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let u=0;u<this.nMips;u++)this.fsQuad.material=this.separableBlurMaterials[u],this.separableBlurMaterials[u].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[u].uniforms.direction.value=pr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[u]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[u].uniforms.colorTexture.value=this.renderTargetsHorizontal[u].texture,this.separableBlurMaterials[u].uniforms.direction.value=pr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[u]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[u];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Dn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Dn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}pr.BlurDirectionX=new pt(1,0);pr.BlurDirectionY=new pt(0,1);let $s=null,Nf=!0;try{const i=new pw(nt,yn),t=new pr(new pt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);$s=new dw(tn),$s.addPass(i),$s.addPass(t)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),Nf=!1}window.addEventListener("resize",()=>{Nf&&$s&&$s.setSize(window.innerWidth,window.innerHeight)});function p0(){Nf&&$s?$s.render():tn.render(nt,yn)}const ti=new Hx(U.ambient,U.ground,.65);nt.add(ti);const ri=new al(U.moon,.85);ri.position.set(30,60,-20);ri.castShadow=!0;ri.shadow.camera.left=-90;ri.shadow.camera.right=90;ri.shadow.camera.top=90;ri.shadow.camera.bottom=-90;ri.shadow.camera.near=1;ri.shadow.camera.far=250;ri.shadow.mapSize.set(1024,1024);ri.shadow.bias=-.001;nt.add(ri);const zf=new al(2241365,.3);zf.position.set(-40,45,25);nt.add(zf);const Op=new al(3359829,.4);Op.position.set(-25,15,30);nt.add(Op);const Bp=new vr(3368516,.7,100);Bp.position.set(0,.5,0);nt.add(Bp);const Gp=new al(4478327,.4);Gp.position.set(-10,25,40);nt.add(Gp);const Vs=new vr(6719624,.6,20);nt.add(Vs);const Ds=[];function gw(){for(let i=0;i<ow;i++){const t=new vr(U.crystal,0,16);nt.add(t),Ds.push(t)}}const kr=new vr(U.orbGold,0,15);nt.add(kr);const ke={};let la=0,js=0,ul=!1,kp=!1,Ff=0,Of=0,Bf=!1,hl=!1,_r=!1,Xc=null,to=null,Mh=0,_h=0,yh=null;function xw(i){yh=i}function vw(i){kp=i}function Mw(i){hl=i}function xa(){!kp&&yh&&yh()}window.addEventListener("keydown",i=>{ke[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),xa()});window.addEventListener("keyup",i=>{ke[i.code]=!1});window.addEventListener("blur",()=>{for(const i in ke)ke[i]=!1;ul=!1});tn.domElement.addEventListener("mousedown",()=>{ul=!0,xa()});window.addEventListener("mouseup",()=>{ul=!1});window.addEventListener("mousemove",i=>{ul&&(la-=i.movementX*Wc,js-=i.movementY*Wc,js=Math.max(-1,Math.min(1,js)))});const _w="ontouchstart"in window||navigator.maxTouchPoints>0,va=document.getElementById("joy-zone"),qc=document.getElementById("joy-knob"),Gf=document.getElementById("btn-jump");_w&&(va.style.display="block",Gf.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function Hp(i,t){const e=va.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),Ff=n/r,Of=s/r,qc.style.left=40+n+"px",qc.style.top=40+s+"px"}va.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),xa();const t=i.changedTouches[0];Xc=t.identifier,Bf=!0,Hp(t.clientX,t.clientY)},{passive:!1});va.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Xc&&Hp(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});va.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Xc&&(Xc=null,Bf=!1,Ff=0,Of=0,qc.style.left="40px",qc.style.top="40px")},{passive:!1});Gf.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),xa(),hl=!0},{passive:!1});Gf.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),hl=!1},{passive:!1});tn.domElement.addEventListener("touchstart",i=>{i.preventDefault(),xa();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&to===null&&(to=e.identifier,Mh=e.clientX,_h=e.clientY)}},{passive:!1});tn.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===to&&(la-=(e.clientX-Mh)*Wc,js-=(e.clientY-_h)*Wc,js=Math.max(-1,Math.min(1,js)),Mh=e.clientX,_h=e.clientY)}},{passive:!1});tn.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===to&&(to=null)},{passive:!1});tn.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===to&&(to=null)},{passive:!1});function yw(){let i=0,t=0;ke.KeyW&&(t-=1),ke.KeyS&&(t+=1),ke.KeyA&&(i-=1),ke.KeyD&&(i+=1),Bf&&(i+=Ff,t+=Of);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=P1*(ke.ShiftLeft||ke.ShiftRight||_r?I1:1),s=Math.sin(la),o=Math.cos(la);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const Nn={mushCap:new Z(.5,8,5),mushStem:new gt(.06,.1,.6,5),mushDot:new Z(.06,4,3),crystal:new gt(0,.35,1.8,6),crystalSm:new gt(0,.18,.9,5),fly:new Z(.06,4,3),spore:new Z(.04,3,3),dandSeed:new Z(.025,3,3),bubble:new Z(.15,8,6),starMote:new Z(.03,3,3),dustMote:new Z(.035,3,3)};let Jr=42;function v(){return Jr=Jr*16807%2147483647,(Jr&2147483647)/2147483647}function Vp(){return Jr}function wh(i){Jr=i}function Oo(i,t){let e=i*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Bo(i){return i*i*(3-2*i)}function fl(i,t){const e=Math.floor(i),n=Math.floor(t),s=Bo(i-e),o=Bo(t-n),r=Oo(e,n),a=Oo(e+1,n),u=Oo(e,n+1),c=Oo(e+1,n+1);return r+(a-r)*s+(u-r)*o+(r-a-u+c)*s*o}function Ws(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=fl(i*o,t*o)*s,s*=.5,o*=2;return n}function m0(i,t,e){let n=0,s=1,o=1,r=1;for(let a=0;a<e;a++){let u=Math.abs(fl(i*o,t*o)-.5)*2;u=1-u,u=u*u,u*=r,r=Math.min(1,u*1.5),n+=u*s,s*=.45,o*=2.1}return n}function ww(i,t){const e=Math.floor(i),n=Math.floor(t);let s=999;for(let o=-1;o<=1;o++)for(let r=-1;r<=1;r++){const a=e+o+Oo(e+o,n+r)*.8+.1,u=n+r+Oo(n+r+7,e+o+3)*.8+.1,c=Math.sqrt((i-a)*(i-a)+(t-u)*(t-u));c<s&&(s=c)}return s}function Sw(i,t){let e=0;const n=.028,s=i*.82+t*.57,o=-i*.57+t*.82,r=m0(s*n+400,o*n+500,4);e+=r*3.5;const a=.018,u=i*.34+t*.94,c=-i*.94+t*.34,l=m0(u*a-200,c*a+150,3);e+=l*2;const h=.045,f=ww(i*h+70,t*h+90),p=Math.max(0,1-f*1.6),m=p*p*(3-2*p),x=2+Ws(i*.01+600,t*.01+700,2)*4;e+=m*x;const d=Ws(i*.08+800,t*.08+900,3),g=d*d*4;e+=g;const S=Ws(i*.025-300,t*.025-400,3),_=5,y=Math.floor(S*_)/_,A=(S*.3+y*.7)*3;e+=A;const E=.04,b=i*.5+t*.87,T=-i*.87+t*.5,M=Math.abs(fl(b*E+150,T*E+250)-.5)*2,w=M*M;return e-=(1-w)*1.5,e}const Sh=[];function bh(i,t,e){Sh.push({x:i,z:t,r:e})}function Bt(i,t){const e=Math.sqrt(i*i+t*t),n=1-Bo(Math.max(0,(e-Kt*.7)/(Kt*.3))),s=Bo(Math.min(1,e/10)),o=.012,r=Ws(i*o+200,t*o+300,3),a=Bo(Math.max(0,Math.min(1,(r-.15)*2))),u=.035,c=Ws(i*u,t*u,4),l=Ws(i*u*2.7+50,t*u*2.7+50,3),h=fl(i*.15,t*.15),p=Ws(i*u*.6-100,t*u*.6-100,3)*1.5,m=c*5*a,x=l*1.5*a,d=h*.2;let g=p+m+x+d;const S=Sw(i,t),_=.3+a*.7;g+=S*_,g*=n*s;for(let y=0;y<Sh.length;y++){const A=Sh[y],E=i-A.x,b=t-A.z,T=Math.sqrt(E*E+b*b);if(T<A.r*2.5){const M=Bo(Math.max(0,(T-A.r*.5)/(A.r*2)));g*=M}}return g}const ms={uTime:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uTransform:{value:0}};function bw(i,t,e){ms.uTime.value=i,ms.uPlayerX.value=t,ms.uPlayerZ.value=e}function Tw(i){ms.uTransform.value=i}function Ew(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#223822",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(50,45,25,0.38)",n:16,r:130},{col:"rgba(35,55,30,0.35)",n:14,r:120},{col:"rgba(55,40,22,0.35)",n:14,r:115},{col:"rgba(45,55,28,0.32)",n:12,r:110},{col:"rgba(60,48,25,0.32)",n:12,r:105},{col:"rgba(30,50,32,0.30)",n:10,r:100},{col:"rgba(65,50,28,0.28)",n:10,r:100},{col:"rgba(40,60,35,0.26)",n:10,r:95},{col:"rgba(70,45,22,0.24)",n:8,r:90},{col:"rgba(45,35,18,0.22)",n:8,r:85}];for(const l of s)for(let h=0;h<l.n;h++){const f=n()*2048,p=n()*2048,m=l.r*(.5+n()*.8),x=e.createRadialGradient(f,p,0,f,p,m);x.addColorStop(0,l.col),x.addColorStop(.6,l.col.replace(/[\d.]+\)$/,parseFloat(l.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let d=-1;d<=1;d++)for(let g=-1;g<=1;g++)e.beginPath(),e.arc(f+d*2048,p+g*2048,m,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(45,40,22,0.24)","rgba(38,55,30,0.20)","rgba(50,38,18,0.22)","rgba(35,48,25,0.18)","rgba(55,42,20,0.20)","rgba(30,52,32,0.16)"]},{n:200,r:10,colors:["rgba(45,40,20,0.14)","rgba(35,50,28,0.12)","rgba(50,38,18,0.12)","rgba(30,48,28,0.10)","rgba(48,42,18,0.12)","rgba(28,45,30,0.08)"]},{n:500,r:4,colors:["rgba(42,38,18,0.10)","rgba(35,48,25,0.08)","rgba(48,36,16,0.08)","rgba(30,45,28,0.06)","rgba(45,40,16,0.08)","rgba(25,42,28,0.05)"]}];for(const l of o)for(let h=0;h<l.n;h++){e.fillStyle=l.colors[Math.floor(n()*l.colors.length)];const f=n()*2048,p=n()*2048;e.beginPath(),e.arc(f,p,l.r+n()*l.r*.6,0,6.28),e.fill()}const r=["rgba(50,180,90,0.10)","rgba(40,160,100,0.08)","rgba(65,145,170,0.07)","rgba(80,200,130,0.09)","rgba(55,155,135,0.08)"];for(let l=0;l<45;l++){let h=n()*2048,f=n()*2048;const p=r[Math.floor(n()*r.length)];e.strokeStyle=p,e.lineWidth=1.5+n()*2.5,e.beginPath(),e.moveTo(h,f);let m=n()*6.28;const x=14+Math.floor(n()*20);for(let d=0;d<x;d++)m+=Math.sin(d*.6)*.5+(n()-.5)*.4,h+=Math.cos(m)*(6+n()*10),f+=Math.sin(m)*(6+n()*10),e.lineTo(h,f);if(e.stroke(),n()<.7){const d=6+n()*10,g=e.createRadialGradient(h,f,0,h,f,d);g.addColorStop(0,p.replace(/[\d.]+\)$/,"0.18)")),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(h,f,d,0,6.28),e.fill()}if(n()<.5&&l<30){let d=h,g=f,S=m+(n()-.5)*1.5;e.strokeStyle=p.replace(/[\d.]+\)$/,parseFloat(p.match(/[\d.]+\)$/)[0])*.6+")"),e.lineWidth=1+n()*1.5,e.beginPath(),e.moveTo(d,g);for(let _=0;_<6;_++)S+=(n()-.5)*.6,d+=Math.cos(S)*(4+n()*8),g+=Math.sin(S)*(4+n()*8),e.lineTo(d,g);e.stroke()}}for(let l=0;l<20;l++){const h=n()*2048,f=n()*2048,p=20+n()*60,x=n()<.7?`rgba(50,${140+Math.floor(n()*60)},${60+Math.floor(n()*40)},${.06+n()*.06})`:`rgba(${100+Math.floor(n()*60)},${80+Math.floor(n()*40)},40,${.05+n()*.04})`;e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(h,f,p,0,6.28),e.stroke(),n()<.4&&(e.lineWidth=.8+n()*1.5,e.beginPath(),e.arc(h,f,p*(.6+n()*.2),0,6.28),e.stroke());for(let d=-1;d<=1;d++)for(let g=-1;g<=1;g++)d===0&&g===0||(e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(h+d*2048,f+g*2048,p,0,6.28),e.stroke())}e.lineWidth=1.2;for(let l=0;l<30;l++){e.strokeStyle=`rgba(15,25,12,${.2+n()*.15})`;let h=n()*2048,f=n()*2048,p=n()*6.28;e.beginPath(),e.moveTo(h,f);for(let m=0;m<10;m++)p+=Math.sin(m*.7)*.5+(n()-.5)*.35,h+=Math.cos(p)*(8+n()*14),f+=Math.sin(p)*(8+n()*14),e.lineTo(h,f);e.stroke()}const a=["rgba(55,40,18,0.28)","rgba(50,50,22,0.25)","rgba(35,55,25,0.22)","rgba(60,45,20,0.25)","rgba(45,52,22,0.22)","rgba(65,48,22,0.22)","rgba(40,55,28,0.20)","rgba(55,42,16,0.20)","rgba(70,50,22,0.22)","rgba(48,38,15,0.20)","rgba(30,50,28,0.18)","rgba(60,55,25,0.16)"];for(let l=0;l<3500;l++){e.fillStyle=a[Math.floor(n()*a.length)];const h=n()*2048,f=n()*2048,p=.8+n()*2.5;e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}for(let l=0;l<50;l++){const h=n()*2048,f=n()*2048,p=15+n()*35,m=e.createRadialGradient(h,f,0,h,f,p),x=n();x<.25?(m.addColorStop(0,"rgba(35,60,35,0.18)"),m.addColorStop(1,"rgba(20,35,20,0)")):x<.5?(m.addColorStop(0,"rgba(55,42,20,0.18)"),m.addColorStop(1,"rgba(30,22,10,0)")):x<.7?(m.addColorStop(0,"rgba(45,55,28,0.16)"),m.addColorStop(1,"rgba(25,30,15,0)")):x<.85?(m.addColorStop(0,"rgba(60,45,22,0.15)"),m.addColorStop(1,"rgba(32,24,12,0)")):(m.addColorStop(0,"rgba(38,65,40,0.14)"),m.addColorStop(1,"rgba(22,38,22,0)")),e.fillStyle=m,e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}for(let l=0;l<300;l++){const h=n()*2048,f=n()*2048,p=1.5+n()*3,m=Math.floor(30+n()*40);e.fillStyle=`rgba(${m+5},${m},${m-8},0.25)`,e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}e.lineWidth=.7;for(let l=0;l<60;l++){const h=n()*2048,f=n()*2048,p=4+n()*16,m=n()*6.28;e.strokeStyle=`rgba(18,28,12,${.15+n()*.1})`,e.beginPath(),e.moveTo(h,f),e.lineTo(h+Math.cos(m)*p,f+Math.sin(m)*p),e.stroke()}const u=["rgba(60,190,100,0.10)","rgba(50,175,130,0.08)","rgba(80,160,180,0.07)","rgba(100,90,170,0.06)","rgba(160,130,60,0.05)","rgba(50,160,150,0.07)"];for(let l=0;l<400;l++){const h=n()*2048,f=n()*2048,p=u[Math.floor(n()*u.length)];if(e.fillStyle=p,e.beginPath(),e.arc(h,f,1+n()*2.5,0,6.28),e.fill(),n()<.4){const m=5+n()*6,x=e.createRadialGradient(h,f,0,h,f,m);x.addColorStop(0,p),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x,e.beginPath(),e.arc(h,f,m,0,6.28),e.fill()}}for(let l=0;l<150;l++){const h=n()*2048,f=n()*2048;e.fillStyle=`rgba(90,150,110,${.04+n()*.04})`,e.beginPath(),e.arc(h,f,.5+n()*1.5,0,6.28),e.fill()}const c=new pa(t);return c.wrapS=c.wrapT=ar,c.repeat.set(8,8),c.colorSpace=Cn,c}function Qa(i,t){let e=i*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function Th(i){return i*i*(3-2*i)}function Wp(i,t){const e=Math.floor(i),n=Math.floor(t),s=Th(i-e),o=Th(t-n),r=Qa(e,n),a=Qa(e+1,n),u=Qa(e,n+1),c=Qa(e+1,n+1);return r+(a-r)*s+(u-r)*o+(r-a-u+c)*s*o}function Jl(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=Wp(i*o,t*o)*s,s*=.5,o*=2;return n}function Aw(){const i=Ew(),t=Kt*3,e=200,n=new se(t,t,e,e),s=n.attributes.position,o=[[.65,.6,.38],[.5,.7,.42],[.72,.58,.35],[.55,.68,.4],[.6,.55,.32],[.45,.65,.45],[.68,.62,.36],[.48,.72,.48],[.75,.55,.32],[.55,.6,.38]],r=s.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const h=s.getX(l),f=s.getY(l);Math.sqrt(h*h+f*f)<Kt*1.4?s.setZ(l,Bt(h,-f)):s.setZ(l,0);const m=h,x=-f,d=Jl(m*.025+100,x*.025+200,3),g=Jl(m*.06+300,x*.06+400,2),S=Wp(m*.15+500,x*.15+600),_=Jl(m*.04-150,x*.04-250,3),y=Math.floor(d*o.length*.999),A=Math.floor(_*o.length*.999),E=o[y],b=o[A],T=Th(g),M=.82+S*.25,w=(E[0]*(1-T)+b[0]*T)*M,R=(E[1]*(1-T)+b[1]*T)*M,L=(E[2]*(1-T)+b[2]*T)*M,z=1+Bt(m,x)*.06;a[l*3]=w*z,a[l*3+1]=R*z,a[l*3+2]=L*z}n.setAttribute("color",new Oe(a,3)),n.computeVertexNormals();const u=new q({map:i,vertexColors:!0,roughness:.75,metalness:0,emissive:1388056,emissiveIntensity:.25});u.onBeforeCompile=l=>{l.uniforms.uTime=ms.uTime,l.uniforms.uPlayerX=ms.uPlayerX,l.uniforms.uPlayerZ=ms.uPlayerZ,l.uniforms.uTransform=ms.uTransform,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
      uniform float uPlayerX;
      uniform float uPlayerZ;
      varying vec3 vWorldPos;
      varying float vPlayerDist2;
      `),l.vertexShader=l.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
      vec4 gWorldPos = modelMatrix * vec4(transformed, 1.0);
      vWorldPos = gWorldPos.xyz;
      float gpdx = gWorldPos.x - uPlayerX;
      float gpdz = gWorldPos.z - uPlayerZ;
      vPlayerDist2 = gpdx * gpdx + gpdz * gpdz;
      `),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
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
      `),l.fragmentShader=l.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float tF = uTransform; // 0 = forest, 1 = purple finale
      vec2 wp = vWorldPos.xz;

      // --- Mycelium vein glow (noise contour lines) ---
      float vn1 = gFbm(wp * 0.25 + 30.0);
      float vn2 = gFbm(wp * 0.15 + 80.0);
      float vein1 = smoothstep(0.47, 0.50, vn1) * smoothstep(0.53, 0.50, vn1);
      float vein2 = smoothstep(0.45, 0.49, vn2) * smoothstep(0.55, 0.49, vn2);
      float veins = max(vein1, vein2 * 0.7);
      float veinPulse = 0.7 + 0.3 * sin(uTime * 0.4 + vn1 * 8.0);
      // Forest: muted green veins | Finale: bright white-cyan veins
      vec3 veinColForest = vec3(0.08, 0.30, 0.16) * 0.4;
      vec3 veinColFinale = vec3(0.70, 0.85, 0.95) * 0.8;
      totalEmissiveRadiance += veins * mix(veinColForest, veinColFinale, tF) * veinPulse;

      // --- Organic ring patterns (growth rings from noise) ---
      float ringN = gNoise(wp * 0.06 + 10.0);
      float ring = sin(ringN * 25.0) * 0.5 + 0.5;
      ring = smoothstep(0.88, 1.0, ring) * mix(0.25, 0.45, tF);
      // Forest: muted green | Finale: pink-magenta
      vec3 ringColForest = vec3(0.06, 0.20, 0.10);
      vec3 ringColFinale = vec3(0.50, 0.15, 0.40);
      totalEmissiveRadiance += ring * mix(ringColForest, ringColFinale, tF);

      // --- Scattered fairy ring glows ---
      vec2 cell = floor(wp * 0.07);
      vec2 cellCenter = (cell + 0.5 + (vec2(gHash(cell), gHash(cell + 100.0)) - 0.5) * 0.6) / 0.07;
      float rd = length(wp - cellCenter);
      float ringR = 3.0 + gHash(cell + 200.0) * 4.0;
      float fRing = smoothstep(0.4, 0.0, abs(rd - ringR)) * step(0.75, gHash(cell + 300.0));
      // Forest: soft green | Finale: bright purple
      vec3 fRingColForest = vec3(0.07, 0.22, 0.12) * 0.5;
      vec3 fRingColFinale = vec3(0.40, 0.12, 0.55) * 0.8;
      totalEmissiveRadiance += fRing * mix(fRingColForest, fRingColFinale, tF);

      // --- Fine noise for per-pixel detail ---
      float fineN = gNoise(wp * 1.5) * 0.05;
      vec3 fineForest = vec3(0.04, 0.10, 0.05);
      vec3 fineFinale = vec3(0.12, 0.04, 0.15);
      totalEmissiveRadiance += fineN * mix(fineForest, fineFinale, tF);

      // --- Player proximity ground glow (8m radius) ---
      if (vPlayerDist2 < 64.0) {
        float pDist = sqrt(vPlayerDist2);
        float pGlow = (1.0 - pDist / 8.0);
        pGlow = pGlow * pGlow * pGlow;
        // Forest: green glow | Finale: pink-white glow
        vec3 pGlowForest = vec3(0.10, 0.32, 0.18) * 0.5;
        vec3 pGlowFinale = vec3(0.50, 0.25, 0.55) * 0.7;
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
        totalEmissiveRadiance += fVeins * vec3(0.80, 0.90, 1.00) * fvPulse * tF * 0.6;
        // Additional pink shimmer spots
        float shimmer = gNoise(wp * 0.8 + uTime * 0.05) * gNoise(wp * 0.4 + 20.0);
        shimmer = smoothstep(0.15, 0.25, shimmer) * 0.3;
        totalEmissiveRadiance += shimmer * vec3(0.45, 0.10, 0.50) * tF;
      }
      `)};const c=new C(n,u);return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,nt.add(c),c}const Yo=new te;let Yc=null;const Us=120;let g0=null,Mc=null,Eh=null,Ah=null,Zo=null;const $o=[],Rw=3;let Ql=0;function ds(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function ps(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,ds(o,r)),a.addColorStop(.25,ds(o,r*.55)),a.addColorStop(.55,ds(o,r*.15)),a.addColorStop(.85,ds(o,r*.03)),a.addColorStop(1,ds(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function tu(i,t,e,n,s,o,r,a){ps(i,t,e,n,s,o,r),t-n<0&&ps(i,t+a,e,n,s,o,r),t+n>a&&ps(i,t-a,e,n,s,o,r)}function Cw(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const h of r){tu(n,h.x*2048,h.y*1024,h.rx*2048,h.ry*1024,h.col,h.a,2048);for(let f=0;f<4;f++){const p=(h.x+(s()-.5)*h.rx)*2048,m=(h.y+(s()-.5)*h.ry)*1024,x=h.rx*2048*(.2+s()*.35),d=h.ry*1024*(.2+s()*.4);tu(n,p,m,x,d,h.col,h.a*(.4+s()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let h=0;h<30;h++){const f=s()*2048,p=s()*1024*.55,m=40+s()*180,x=25+s()*100;tu(n,f,p,m,x,a[Math.floor(s()*a.length)],.025+s()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const u=.26;for(let h=0;h<50;h++){const f=h/50,p=f*2048,m=(u+Math.sin(f*Math.PI)*.06+(s()-.5)*.02)*1024,x=2048*.05+s()*2048*.035,d=1024*.04*(.4+s()*.6);ps(n,p,m,x,d,4478310,.025+s()*.015)}for(let h=0;h<25;h++){const f=.2+s()*.6,p=f*2048,m=(u+Math.sin(f*Math.PI)*.04)*1024;ps(n,p,m,2048*.03+s()*2048*.02,1024*.02+s()*1024*.01,6719658,.015+s()*.012)}for(let h=0;h<10;h++){const f=.35+s()*.3,p=f*2048,m=(u+Math.sin(f*Math.PI)*.02)*1024;ps(n,p,m,2048*.02,1024*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let h=0;h<12;h++){const f=.1+s()*.8,p=f*2048,m=(u+Math.sin(f*Math.PI)*.04+(s()-.5)*.02)*1024,x=20+s()*60,d=8+s()*20;ps(n,p,m,x,d,132104,.15+s()*.1)}const c=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let h=0;h<5e3;h++){const f=s()*2048,p=s()*1024*.65,m=.3+s()*.7,x=.1+s()*.5;n.fillStyle=`rgba(${c[Math.floor(s()*c.length)]},${x})`,n.beginPath(),n.arc(f,p,m,0,6.28),n.fill()}for(let h=0;h<3e3;h++){const f=s(),p=f*2048,x=(u+Math.sin(f*Math.PI)*.06)*1024+(s()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const d=.2+s()*.6,g=.2+s()*.7;n.fillStyle=`rgba(${c[Math.floor(s()*c.length)]},${g})`,n.beginPath(),n.arc(p,x,d,0,6.28),n.fill()}for(let h=0;h<60;h++){const f=s()*2048,p=s()*1024*.58,m=1.2+s()*1.8,x=6+s()*14,d=s();let g;d<.45?g="255,255,255":d<.65?g="210,225,255":d<.8?g="255,230,200":d<.92?g="190,210,255":g="255,200,180";const S=n.createRadialGradient(f,p,0,f,p,x);S.addColorStop(0,`rgba(${g},0.5)`),S.addColorStop(.1,`rgba(${g},0.18)`),S.addColorStop(.35,`rgba(${g},0.04)`),S.addColorStop(1,`rgba(${g},0)`),n.fillStyle=S,n.beginPath(),n.arc(f,p,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${g},0.12)`,n.lineWidth=.5;const _=x*.8;n.beginPath(),n.moveTo(f-_,p),n.lineTo(f+_,p),n.moveTo(f,p-_),n.lineTo(f,p+_),n.stroke(),n.fillStyle=`rgba(${g},1)`,n.beginPath(),n.arc(f,p,m,0,6.28),n.fill()}for(let h=0;h<8;h++){const f=s()*2048,p=1024*.08+s()*1024*.42,m=50+s()*90;ps(n,f,p,m,m*.7,3359846,.03);for(let x=0;x<100;x++){const d=s()*6.28,g=s()*s()*m,S=f+Math.cos(d)*g,_=p+Math.sin(d)*g*.65;if(S<0||S>2048||_<0||_>1024)continue;const y=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(S,_,y,0,6.28),n.fill()}}for(let h=0;h<15;h++){const f=r[Math.floor(s()*r.length)],p=(f.x+(s()-.5)*f.rx*.5)*2048,m=(f.y+(s()-.5)*f.ry*.5)*1024,x=3+s()*8,d=n.createRadialGradient(p,m,0,p,m,x*3);d.addColorStop(0,ds(f.col,.2)),d.addColorStop(.3,ds(f.col,.06)),d.addColorStop(1,ds(f.col,0)),n.fillStyle=d,n.beginPath(),n.arc(p,m,x*3,0,6.28),n.fill()}const l=new pa(e);return l.colorSpace=Cn,l}function Pw(){const i=Vp(),t=Cw(),e=.03,n=new Z(Ki,64,32,0,Math.PI*2,e,Math.PI*.55);Yc=new Y({map:t,side:ln,fog:!1,transparent:!1});const s=new C(n,Yc);Yo.add(s);const o=Ki*Math.sin(e)*1.05,r=new Ge(o,32),a=new Y({color:198160,side:ln,fog:!1}),u=new C(r,a);u.position.y=Ki*Math.cos(e),u.rotation.x=Math.PI/2,Yo.add(u),Iw(),Lw(),nt.add(Yo),wh(i)}function Iw(){const i=new Float32Array(Us*3),t=new Float32Array(Us*3);Mc=new Float32Array(Us),Eh=new Float32Array(Us),Ah=new Float32Array(Us);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,s=Ki*.97;for(let a=0;a<Us;a++){const u=n()*Math.PI*2,c=n()*Math.PI*.48,l=s*Math.cos(u)*Math.sin(c),h=s*Math.cos(c),f=s*Math.sin(u)*Math.sin(c);i[a*3]=l,i[a*3+1]=h,i[a*3+2]=f;const p=e[Math.floor(n()*e.length)];t[a*3]=p[0],t[a*3+1]=p[1],t[a*3+2]=p[2],Mc[a]=2+n()*4,Eh[a]=n()*Math.PI*2,Ah[a]=.5+n()*2.5}const o=new Ee;o.setAttribute("position",new Vt(i,3)),o.setAttribute("color",new Vt(t,3)),Zo=new Vt(Mc.slice(),1),Zo.setUsage(we),o.setAttribute("size",Zo);const r=new Ef({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:Qt,depthWrite:!1});g0=new xp(o,r),Yo.add(g0)}function Lw(){const i=new Y({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Qt,depthWrite:!1});for(let t=0;t<Rw;t++){const e=new C(new gt(.15,0,12,4),i.clone());e.visible=!1,Yo.add(e),$o.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function Dw(){let i=null;for(let a=0;a<$o.length;a++)if(!$o[a].active){i=$o[a];break}if(!i)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,s=Ki*.85;i.sx=s*Math.cos(e)*Math.sin(n),i.sy=s*Math.cos(n),i.sz=s*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;i.dx=Math.cos(o)*r,i.dy=-r*(.5+t()*.5),i.dz=Math.sin(o)*r,i.life=.5+t()*.8,i.maxLife=i.life,i.active=!0,i.mesh.visible=!0}function Xp(i,t){if(Yo.rotation.y=t*.003,Zo){const e=Zo.array;for(let n=0;n<Us;n++){const s=Mc[n],o=Math.sin(t*Ah[n]+Eh[n]);e[n]=s*(.65+o*.35)}Zo.needsUpdate=!0}Ql-=i,Ql<=0&&(Ql=4+Math.random()*12,Dw());for(let e=0;e<$o.length;e++){const n=$o[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife;n.sx+=n.dx*i,n.sy+=n.dy*i,n.sz+=n.dz*i,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=s*.7,n.mesh.scale.setScalar(.6+s*.4)}}function Uw(i){if(Yc){const t=Math.max(.15,i);Yc.color.setRGB(t,t,t)}}const Nw=6,tc=64,Rh=[];let Xs=null;const Ur=[new ot(1734485),new ot(2787447),new ot(5601126),new ot(6706568),new ot(8930406),new ot(3368533)];function zw(){Xs=new te,Xs.visible=!1;for(let i=0;i<Nw;i++){const t=1.2+i*.2+Math.sin(i*1.7)*.15,e=Ki*t,n=.1+i*.012+Math.sin(i*2.3)*.02,s=Ki*n,o=new se(e,s,tc,3),r=o.attributes.position.array,a=4,u=(tc+1)*a,c=Math.PI*(.45+i*.08+Math.sin(i*.9)*.05),l=-c/2,h=(.25+i*.04+Math.sin(i*1.3)*.02)*Math.PI,f=i*.18-.45;for(let d=0;d<u;d++){const g=Math.floor(d/a),S=d%a,_=g/tc,y=l+_*c+f,E=(S/(a-1)-.5)*.05,b=h+E,T=Ki*.92;r[d*3]=Math.sin(y)*Math.sin(b)*T,r[d*3+1]=Math.cos(b)*T,r[d*3+2]=Math.cos(y)*Math.sin(b)*T}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(we),o.computeVertexNormals();const p=new Float32Array(u*3);o.setAttribute("color",new Oe(p,3)),o.attributes.color.setUsage(we);const m=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Ct,blending:Qt,depthWrite:!1,fog:!1}),x=new C(o,m);Xs.add(x),Rh.push({mesh:x,mat:m,geo:o,colorArr:p,posArr:r,vertCount:u,rows:a,segments:tc,phase:i*1.7+Math.sin(i*.8)*.5,speed:.15+i*.05+Math.sin(i*2.1)*.03,colorShift:i*1.1,elevation:h,arcStart:l,arcSpan:c,azimuthOffset:f})}nt.add(Xs)}let Ao=0;function Fw(i,t,e,n,s){if(!Xs)return;const o=s==="HEAVY_RAIN"||s==="LUMINOUS_STORM"||s==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>Ao?.2:.4;if(Ao+=(r-Ao)*a*i,Ao<.005){Xs.visible=!1;return}Xs.visible=!0;const u=Ki*.92;for(let c=0;c<Rh.length;c++){const l=Rh[c],h=l.colorArr,f=l.posArr,p=l.segments,m=l.rows;l.mat.opacity=Ao*(.5+c*.05);for(let x=0;x<=p;x++){const d=x/p,g=Math.sin(d*6+t*l.speed+l.phase)*.5+.5,S=Math.sin(d*3-t*l.speed*.4+l.phase*1.3)*.5+.5,_=Math.sin(d*1.5+t*.07)*.5+.5,y=Math.sin(d*1.2+t*.05+l.phase*.7)*.5+.5,A=(g*.3+S*.25+_*.2+y*.25)*Ao,E=(d*3+t*.08+l.colorShift)%Ur.length,b=Math.floor(E),T=E-b,M=Ur[b%Ur.length],w=Ur[(b+1)%Ur.length],R=(M.r+(w.r-M.r)*T)*A,L=(M.g+(w.g-M.g)*T)*A,D=(M.b+(w.b-M.b)*T)*A,z=u*.025,H=Math.sin(d*5+t*.3+l.phase)*z+Math.sin(d*2.5-t*.15+l.phase*.6)*z*.5;for(let k=0;k<m;k++){const O=x*m+k,G=k/(m-1);let et;G<.33?et=G*1.2:G>.67?et=(1-G)*1.5:et=.7+Math.sin(G*Math.PI)*.3,h[O*3]=R*et,h[O*3+1]=L*et,h[O*3+2]=D*et,l.arcStart+d*l.arcSpan+l.azimuthOffset;const ct=(G-.5)*.05,ft=l.elevation+ct,Pt=H*(.3+G*.7);f[O*3+1]=Math.cos(ft)*u+Pt}}l.geo.attributes.color.needsUpdate=!0,l.geo.attributes.position.needsUpdate=!0}}const j={pos:new F(0,ll,0),vel:new F,onGround:!0};let eu=0,nu=0,qp=0,iu=65,x0=65,Nr=0,v0=!0,su=0,mr=0,Ch=null,Ph=null,Ih=null,M0=1;function Ow(i,t,e){Ch=i,Ph=t,Ih=e}let Lh=[],Dh=[],Uh=null;function Bw(i,t){Lh=i,Dh=t}function Gw(i){Uh=i}function kw(i){const t=yw(),e=ke.ShiftLeft||ke.ShiftRight||_r;j.vel.x=t.x,j.vel.z=t.z,j.vel.y-=C1*i,(ke.Space||hl)&&j.onGround&&(j.vel.y=Vc,j.onGround=!1,Mw(!1),Ph&&Ph()),j.onGround||(su=j.vel.y),j.pos.x+=j.vel.x*i,j.pos.y+=j.vel.y*i,j.pos.z+=j.vel.z*i;const n=Bt(j.pos.x,j.pos.z)+ll;if(j.pos.y<=n){if(j.pos.y=n,j.vel.y=0,!v0&&su<-3){const l=Math.min(Math.abs(su)/Vc,1);Nr=l*.15,Uh&&Uh(j.pos.x,j.pos.z,Math.floor(3+l*5)),Ih&&Ih(l)}j.onGround=!0}v0=j.onGround,j.onGround?(j.vel.x*=a0,j.vel.z*=a0):(j.vel.x*=c0,j.vel.z*=c0);const s=.4;for(let l=0;l<Lh.length;l++){const h=Lh[l],f=j.pos.x-h.x,p=j.pos.z-h.z,m=f*f+p*p,x=.6+s;if(m<x*x&&m>.001){const d=1/Math.sqrt(m);j.pos.x=h.x+f*d*x,j.pos.z=h.z+p*d*x}}for(let l=0;l<Dh.length;l++){const h=Dh[l],f=j.pos.x-h.x,p=j.pos.z-h.z,m=f*f+p*p,x=h.colR+s;if(m<x*x&&m>.001){const d=1/Math.sqrt(m);j.pos.x=h.x+f*d*x,j.pos.z=h.z+p*d*x}}if(Math.sqrt(j.pos.x*j.pos.x+j.pos.z*j.pos.z)>Kt){const l=Math.atan2(j.pos.z,j.pos.x);j.pos.x=Math.cos(l)*Kt,j.pos.z=Math.sin(l)*Kt}Vs.position.copy(j.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&j.onGround;a?mr=0:mr+=i,nu+=((a?e?.06:.035:0)-nu)*i*6,a&&(eu+=i*(e?12:8));const c=Math.sin(eu)*nu;if(a&&Ch){const l=Math.sin(eu)>=0?1:-1;M0>0&&l<0&&Ch(e),M0=l}x0=e&&a?78:65,iu+=(x0-iu)*i*4,yn.fov=iu,yn.updateProjectionMatrix(),Nr*=Math.pow(.04,i),Nr<.001&&(Nr=0),qp=c-Nr}function ec(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,u=new Ee;let c=0;for(let l=0;l<i.length;++l){const h=i[l];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;u.addGroup(c,p,l),c+=p}}if(e){let l=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let m=0;m<p.count;++m)h.push(p.getX(m)+l);l+=i[f].attributes.position.count}u.setIndex(h)}for(const l in o){const h=_0(o[l]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;u.setAttribute(l,h)}for(const l in r){const h=r[l][0].length;if(h===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[l]=[];for(let f=0;f<h;++f){const p=[];for(let x=0;x<r[l].length;++x)p.push(r[l][x][f]);const m=_0(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;u.morphAttributes[l].push(m)}}return u}function _0(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const l=i[c];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=l.count*e}const r=new t(o),a=new Oe(r,e,n);let u=0;for(let c=0;c<i.length;++c){const l=i[c];if(l.isInterleavedBufferAttribute){const h=u/e;for(let f=0,p=l.count;f<p;f++)for(let m=0;m<e;m++){const x=l.getComponent(f,m);a.setComponent(f+h,m,x)}}else r.set(l.array,u);u+=l.count*e}return s!==void 0&&(a.gpuType=s),a}function y0(i,t,e){return i+(t-i)*e}let Ro=null;function Hw(){if(Ro)return Ro;const i=256,t=512,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#5a4030"),s.addColorStop(.3,"#4d3528"),s.addColorStop(.7,"#3a2a1e"),s.addColorStop(1,"#2e2015"),n.fillStyle=s,n.fillRect(0,0,i,t);for(let o=0;o<28;o++){const r=o/28*i+Math.sin(o*3.7)*6,a=2+Math.sin(o*2.1)*1.5,u=Math.sin(o*1.3+.5)*.5+.5,c=Math.floor(50+u*30),l=Math.floor(30+u*20),h=Math.floor(15+u*12);n.strokeStyle=`rgba(${c},${l},${h},0.4)`,n.lineWidth=a,n.beginPath();let f=0;for(n.moveTo(r,f);f<t;){f+=8+Math.random()*12;const p=Math.sin(f*.03+o)*3;n.lineTo(r+p,f)}n.stroke()}for(let o=0;o<18;o++){const r=o/18*i+Math.sin(o*5.3)*8;n.strokeStyle="rgba(20,12,6,0.35)",n.lineWidth=.8+Math.random()*1.2,n.beginPath();let a=Math.random()*40;for(n.moveTo(r,a);a<t;)a+=5+Math.random()*10,n.lineTo(r+Math.sin(a*.05+o*2)*4,a);n.stroke()}for(let o=0;o<30;o++){const r=o/30*t+Math.random()*10;n.strokeStyle=`rgba(${30+Math.random()*20},${18+Math.random()*12},${8+Math.random()*8},0.15)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,r);for(let a=0;a<i;a+=10)n.lineTo(a,r+Math.sin(a*.04+o)*2);n.stroke()}for(let o=0;o<5;o++){const r=Math.random()*i,a=50+Math.random()*(t-100),u=4+Math.random()*6,c=3+Math.random()*5,l=n.createRadialGradient(r,a,0,r,a,u);l.addColorStop(0,"rgba(15,8,4,0.5)"),l.addColorStop(.5,"rgba(30,18,10,0.3)"),l.addColorStop(1,"rgba(40,25,14,0)"),n.fillStyle=l,n.beginPath(),n.ellipse(r,a,u,c,0,0,Math.PI*2),n.fill()}for(let o=0;o<8;o++){const r=Math.random()*i;n.strokeStyle="rgba(34,136,85,0.08)",n.lineWidth=.5+Math.random()*.8,n.beginPath();let a=Math.random()*t*.3;n.moveTo(r,a);const u=30+Math.random()*80;for(;a<a+u&&a<t;)a+=4+Math.random()*6,n.lineTo(r+Math.sin(a*.08+o*2)*2,a);n.stroke()}return Ro=new pa(e),Ro.wrapS=ar,Ro.wrapT=ar,Ro}const ua=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];let nc=null;function Vw(){if(nc)return nc;const i=64,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,i,i),nc=new pa(t),nc}function Ww(i,t){const e=new pp({map:Vw(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:Qt}),n=new rx(e),s=i*.55;return n.scale.set(s*2.2,s*1.6,1),n.position.y=t+i*.6,n.visible=!1,nt.add(n),n}function Xw(i){const t=new te,e=6+v()*10,n=.2+v()*.3,s=n*1.8,o=new C(new gt(n*.4,s,e,8));o.material=new q({color:5914672}),o.position.y=e/2,o.userData._cat="trunk",t.add(o);const r=2+Math.floor(v()*3);for(let _=0;_<r;_++){const y=_/r*6.28+v()*.5,A=e*.4+v()*e*.4,E=new C(new gt(.008,.015,A,3));E.material=new q({color:2263125}),E.position.set(Math.cos(y)*n*.74,e*.15+A/2,Math.sin(y)*n*.74),E.userData._cat="detail",t.add(E)}const a=new F(0,1,0),u=4+Math.floor(v()*4);for(let _=0;_<u;_++){const y=_/u*6.28+v()*.4,A=1.2+v()*2.5,E=s*(.3+v()*.2),b=.03+v()*.03,T=-.1-v()*.15,M=Math.cos(y)*Math.cos(T),w=Math.sin(T),R=Math.sin(y)*Math.cos(T),L=new F(M,w,R).normalize(),D=new gt(b,E,A,5);D.translate(0,A/2,0);const z=new C(D,new q({color:4864040}));z.position.set(Math.cos(y)*s*.6,.05,Math.sin(y)*s*.6);const H=new vs().setFromUnitVectors(a,L);if(z.quaternion.copy(H),z.userData._cat="trunk",t.add(z),v()<.6){const k=.4+v()*.3,O=y+(v()-.5)*1.2,G=.5+v()*1,et=new F(Math.cos(O)*Math.cos(-.1),Math.sin(-.1),Math.sin(O)*Math.cos(-.1)).normalize(),ct=new gt(.02,E*.3,G,4);ct.translate(0,G/2,0);const ft=new C(ct,new q({color:4864040})),Pt=new F(Math.cos(y)*s*.6+M*A*k,.05+w*A*k,Math.sin(y)*s*.6+R*A*k);ft.position.copy(Pt);const Wt=new vs().setFromUnitVectors(a,et);ft.quaternion.copy(Wt),ft.userData._cat="trunk",t.add(ft)}else v(),v()}const c=ua[i%ua.length],l=new q({color:5914672}),h=new q({color:4863269}),f=new F(0,1,0);function p(_,y,A,E,b,T){const M=new gt(b,E,A,5);M.translate(0,A/2,0);const w=new C(M,T);w.position.copy(_);const R=y.clone().normalize(),L=new vs().setFromUnitVectors(f,R);w.quaternion.copy(L),w.userData._cat="trunk",t.add(w)}function m(_,y,A,E){const b=3+Math.floor(v()*4),T=E*.45;for(let w=0;w<b;w++){const R=E*(.12+v()*.18),L=new C(new fr(R,1)),D=v()<.3;L.material=new q({color:D?c.core:c.leaf}),L.position.set(_+(v()-.5)*T*2,y+(v()-.3)*T*1.4,A+(v()-.5)*T*2),L.scale.set(.7+v()*.8,.5+v()*.9,.7+v()*.8),L.userData._cat="canopy",t.add(L)}const M=new C(new fr(E*.5,1));M.material=new q({color:c.glow}),M.position.set(_,y,A),M.scale.set(1+v()*.3,.7+v()*.4,1+v()*.3),M.userData._cat="glow",t.add(M)}const x=2+Math.floor(v()*2);for(let _=0;_<x;_++){const y=e*(.3+v()*.25),A=_/x*Math.PI*2+v()*1,E=.35+v()*.45,b=1+v()*1.8,T=n*.4,M=n*.08,w=Math.cos(A)*Math.cos(E),R=Math.sin(E),L=Math.sin(A)*Math.cos(E),D=new F(w,R,L),z=new F(Math.cos(A)*n*.95,y,Math.sin(A)*n*.95);if(p(z,D,b,T,M,l),v()<.4){const H=.4+v()*.8,k=new C(new gt(.008,.003,H,3));k.material=new q({color:2773040});const O=.4+v()*.4;k.position.set(z.x+w*b*O,z.y+R*b*O-H/2,z.z+L*b*O),k.userData._cat="detail",t.add(k)}else v(),v()}const d=5+Math.floor(v()*4);for(let _=0;_<d;_++){const y=e*(.55+v()*.37),A=_/d*Math.PI*2+v()*.5,E=.6+v()*.55,b=1.5+v()*3,T=n*.35,M=.03+v()*.02,w=Math.cos(A)*Math.cos(E),R=Math.sin(E),L=Math.sin(A)*Math.cos(E),D=new F(w,R,L),z=new F(Math.cos(A)*n*.95,y,Math.sin(A)*n*.95);p(z,D,b,T,M,l);const H=z.x+w*b,k=z.y+R*b,O=z.z+L*b,G=.8+v()*1.5;m(H,k,O,G);const et=1+Math.floor(v()*3);for(let ct=0;ct<et;ct++){const ft=.35+v()*.35,Pt=new F(z.x+w*b*ft,z.y+R*b*ft,z.z+L*b*ft),Wt=A+(v()-.5)*1.8,tt=.45+v()*.55,ut=.6+v()*1.4,yt=new F(Math.cos(Wt)*Math.cos(tt),Math.sin(tt),Math.sin(Wt)*Math.cos(tt));p(Pt,yt,ut,.04,.012,h);const mt=Pt.x+yt.x*ut,It=Pt.y+yt.y*ut,Nt=Pt.z+yt.z*ut,$t=.5+v()*.8;m(mt,It,Nt,$t)}if(v()<.3){const ct=.3+v()*.7,ft=new C(new gt(.008,.003,ct,3));ft.material=new q({color:2773040});const Pt=.5+v()*.3;ft.position.set(z.x+w*b*Pt,z.y+R*b*Pt-ct/2,z.z+L*b*Pt),ft.userData._cat="detail",t.add(ft)}else v(),v()}const g=Math.floor(v()*3);for(let _=0;_<g;_++){const y=1+v()*e*.4,A=v()*6.28,E=.08+v()*.08,b=new C(new Z(E,5,3));b.material=new q({color:5911840}),b.scale.set(1.5,.3,1),b.position.set(Math.cos(A)*n*.8,y,Math.sin(A)*n*.8),b.rotation.y=-A,b.userData._cat="detail",t.add(b)}const S=new C(new Z(2.5+v()*1.5,8,6));return S.material=new q({color:new ot(U.leaf)}),S.position.y=e*.85,S.userData._cat="glow",t.add(S),t.userData.treeH=e,t}function qw(i,t){const e=Vp();wh(7919+t*1013+i*3571);const n=Xw(i),s=n.userData.treeH;wh(e),n.updateMatrixWorld(!0);const o=[],r=[],a=[],u=[],c=new ot;for(let m=0;m<n.children.length;m++){const x=n.children[m];if(!x.isMesh)continue;let d=x.geometry.clone();if(x.updateMatrix(),d.applyMatrix4(x.matrix),d.index){const A=d.toNonIndexed();d.dispose(),d=A}const g=x.userData._cat||"trunk";g==="trunk"?c.set(16777215):c.copy(x.material.color);const _=d.attributes.position.count,y=new Float32Array(_*3);for(let A=0;A<_;A++)y[A*3]=c.r,y[A*3+1]=c.g,y[A*3+2]=c.b;if(d.setAttribute("color",new Oe(y,3)),g==="trunk"){if(!d.attributes.uv){const A=new Float32Array(_*2);d.setAttribute("uv",new Oe(A,2))}}else d.attributes.uv&&d.deleteAttribute("uv");g==="trunk"?o.push(d):g==="canopy"?r.push(d):g==="glow"?a.push(d):g==="detail"&&u.push(d),x.material.dispose()}const l=o.length>0?ec(o):null,h=r.length>0?ec(r):null,f=a.length>0?ec(a):null,p=u.length>0?ec(u):null;for(const m of o)m.dispose();for(const m of r)m.dispose();for(const m of a)m.dispose();for(const m of u)m.dispose();return{trunkGeo:l,canopyGeo:h,glowGeo:f,detailGeo:p,treeH:s,palIdx:i}}const Re=new he;function Yw(i){const t=[];for(let e=0;e<i;e++){const n=e%ua.length,s=Math.floor(e/ua.length);t.push(qw(n,s))}return t}function Zw(i,t,e){const n=[];for(let s=0;s<i.length;s++){const o=i[s],r=ua[o.palIdx],a=Hw(),u=new q({vertexColors:!0,map:a,roughness:.85,emissive:1708040,emissiveIntensity:.3}),c=o.trunkGeo?new oi(o.trunkGeo,u,e):null;c&&(c.instanceMatrix.setUsage(we),c.count=0,nt.add(c));const l=new q({vertexColors:!0,roughness:.5,emissive:r.glow,emissiveIntensity:.45,transparent:!0,opacity:.4,depthWrite:!1}),h=o.canopyGeo?new oi(o.canopyGeo,l,e):null;h&&(h.instanceMatrix.setUsage(we),h.count=0,nt.add(h));const f=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.08,transparent:!0,opacity:.07,depthWrite:!1}),p=o.glowGeo?new oi(o.glowGeo,f,e):null;p&&(p.instanceMatrix.setUsage(we),p.count=0,nt.add(p));const m=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.2}),x=o.detailGeo?new oi(o.detailGeo,m,e):null;x&&(x.instanceMatrix.setUsage(we),x.count=0,nt.add(x)),n.push({trunk:c,canopy:h,glow:p,detail:x,trunkMat:u,canopyMat:l,glowMat:f,detailMat:m,instances:[],treeH:o.treeH})}for(let s=0;s<t.length;s++){const o=s%i.length,r=t[s],a=r.yRot,u=r.scale;Re.position.set(r.x,r.y,r.z),Re.rotation.set(0,a,0),Re.scale.setScalar(u),Re.updateMatrix();const c=n[o].instances.length;n[o].trunk&&n[o].trunk.setMatrixAt(c,Re.matrix),n[o].canopy&&n[o].canopy.setMatrixAt(c,Re.matrix),n[o].glow&&n[o].glow.setMatrixAt(c,Re.matrix),n[o].detail&&n[o].detail.setMatrixAt(c,Re.matrix),n[o].instances.push({x:r.x,z:r.z,y:r.y,yRot:a,scale:u,treeH:r.treeH||n[o].treeH,posIdx:s})}for(let s=0;s<n.length;s++){const o=n[s].instances.length;n[s].trunk&&(n[s].trunk.count=o),n[s].canopy&&(n[s].canopy.count=o),n[s].glow&&(n[s].glow.count=o),n[s].detail&&(n[s].detail.count=0)}return n}function $w(i,t,e,n,s,o,r,a,u){for(let c=0;c<i.length;c++){const l=i[c];let h=0,f=0,p=0,m=0;for(let x=0;x<l.instances.length;x++){const d=l.instances[x],g=d.x-e,S=d.z-s,_=d.y+(d.treeH||10)*.4-n,y=g*g+_*_+S*S,A=d.posIdx,E=t[A];if(y>13225){E&&(E.visible=!1);continue}if(y>11025){if(E){const b=Math.sqrt(y);E.visible=!0,E.material.opacity=y0(.65,0,(b-105)/10)}continue}if(y>5625){E&&(E.visible=!0,E.material.opacity=.65);continue}if(y>3969){const T=(Math.sqrt(y)-63)/12;E&&(E.visible=!0,E.material.opacity=y0(0,.65,T)),Re.position.set(d.x,d.y,d.z),Re.rotation.set(0,d.yRot,0),Re.scale.setScalar(d.scale),Re.updateMatrix(),l.trunk&&l.trunk.setMatrixAt(h++,Re.matrix),l.canopy&&l.canopy.setMatrixAt(f++,Re.matrix),l.glow&&l.glow.setMatrixAt(p++,Re.matrix);continue}if(E&&(E.visible=!1),Re.position.set(d.x,d.y,d.z),Re.scale.setScalar(d.scale),y<400){const b=d.x*.1+d.z*.13;Re.rotation.set(Math.sin(o*.25+b+1)*.003*r+u*.15,d.yRot,Math.sin(o*.3+b)*.004*r+a*.15),Re.updateMatrix(),l.detail&&l.detail.setMatrixAt(m++,Re.matrix)}else Re.rotation.set(0,d.yRot,0),Re.updateMatrix();l.trunk&&l.trunk.setMatrixAt(h++,Re.matrix),l.canopy&&l.canopy.setMatrixAt(f++,Re.matrix),l.glow&&l.glow.setMatrixAt(p++,Re.matrix)}l.trunk&&(l.trunk.count=h,l.trunk.instanceMatrix.needsUpdate=!0),l.canopy&&(l.canopy.count=f,l.canopy.instanceMatrix.needsUpdate=!0),l.glow&&(l.glow.count=p,l.glow.instanceMatrix.needsUpdate=!0),l.detail&&(l.detail.count=m,l.detail.instanceMatrix.needsUpdate=!0)}}function jw(i,t){const e=new te,n=.4+v()*1.2,s=v()*6.28,o=.8+v()*1.5,r=.5+v()*.8,a=new C(Nn.mushStem,new q({color:U.mushStem,roughness:.7,emissive:U.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const u=new q({color:U.mushStem,emissive:U.mushGlow,emissiveIntensity:.15,roughness:.6}),c=new C(new Pe(.09,.012,4,8),u);c.position.y=.42,c.rotation.x=Math.PI/2,e.add(c);const l=new q({color:U.mushCap,emissive:U.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),h=new C(Nn.mushCap,l);h.scale.set(1,.5,1),h.position.y=.55,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const f=new q({color:6693546,emissive:U.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Ct});for(let w=0;w<8;w++){const R=w/8*6.28,L=new C(new se(.35,.08),f);L.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),L.rotation.y=-R,L.rotation.x=.1,e.add(L)}for(let w=0;w<4;w++){const R=new Y({color:16777215,transparent:!0,opacity:.9}),L=new C(Nn.mushDot,R),D=v()*6.28,z=.15+v()*.25;L.position.set(Math.cos(D)*z,.6+v()*.1,Math.sin(D)*z),e.add(L)}const p=new q({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),m=2+Math.floor(v()*2);for(let w=0;w<m;w++){const R=new C(new Z(.015+v()*.015,4,3),p),L=v()*6.28,D=.1+v()*.2;R.position.set(Math.cos(L)*D,.63+v()*.08,Math.sin(L)*D),e.add(R)}const x=new q({color:4465322,emissive:U.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let w=0;w<4;w++){const R=v()*6.28,L=.15+v()*.25,D=new C(new gt(.004,.002,L,3),x);D.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),D.rotation.z=1.3*(R<3.14?1:-1),D.rotation.y=R,e.add(D)}const d=new q({color:U.mushCap,emissive:U.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),g=new C(new Pe(.38,.01,4,12),d);g.position.y=.49,g.rotation.x=Math.PI/2,e.add(g);const S=new q({color:U.mushStem,emissive:U.mushGlow,emissiveIntensity:.08,roughness:.7}),_=new C(new Z(.08,5,3),S);_.scale.set(1,.5,1),_.position.y=.04,e.add(_);const y=new q({color:1708040,roughness:.95});for(let w=0;w<3;w++){const R=v()*6.28,L=.1+v()*.12,D=new C(new Z(.008+v()*.008,3,3),y);D.position.set(Math.cos(R)*L,.005,Math.sin(R)*L),e.add(D)}const A=new Y({color:U.mushGlow,transparent:!0,opacity:.2});for(let w=0;w<4;w++){const R=new C(new Z(.006,3,3),A);R.position.set((v()-.5)*.2,.35+v()*.1,(v()-.5)*.2),e.add(R)}const E=new q({color:11167453,emissive:U.mushGlow,emissiveIntensity:r*.3,roughness:.5}),b=3+Math.floor(v()*3);for(let w=0;w<b;w++){const R=v()*6.28,L=v()*.25,D=new C(new Z(.015+v()*.015,3,3),E);D.position.set(Math.cos(R)*L,.58+v()*.06,Math.sin(R)*L),e.add(D)}const T=new q({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Ct}),M=new C(new Ge(.18,8),T);return M.rotation.x=-Math.PI/2,M.position.y=.005,e.add(M),e.scale.setScalar(n),e.position.set(i,0,t),nt.add(e),{group:e,capMat:l,phase:s,speed:o,base:r,x:i,z:t}}function Kw(i,t){const e=new te,n=v()*6.28,s=new q({color:U.crystal,emissive:U.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new C(Nn.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let _=0;_<3;_++){const y=new C(Nn.crystalSm,s),A=_/3*6.28+v()*.5;y.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),y.rotation.z=(v()-.5)*.8,y.castShadow=!0,e.add(y)}const r=new q({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(v()*3);for(let _=0;_<a;_++){const y=v()*6.28,A=.2+v()*.5,E=.08+v()*.12,b=new C(new Z(E,4,3),r);b.scale.set(1+v()*.5,.5+v()*.4,1+v()*.5),b.position.set(Math.cos(y)*A,E*.3,Math.sin(y)*A),b.rotation.set(v(),v(),v()),e.add(b)}const u=new Y({color:U.crystalCore,transparent:!0,opacity:.5});for(let _=0;_<3;_++){const y=.4+v()*.8,A=new C(new gt(.008,.008,y,3),u);A.position.set((v()-.5)*.15,.5+v()*.7,(v()-.5)*.15),A.rotation.set((v()-.5)*.8,(v()-.5)*.5,(v()-.5)*.8),e.add(A)}const c=new Y({color:11206638,transparent:!0,opacity:.6});for(let _=0;_<5;_++){const y=new C(new Z(.012,3,3),c);y.position.set((v()-.5)*1,.3+v()*1.5,(v()-.5)*1),e.add(y)}const l=new q({color:U.crystal,emissive:U.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let _=0;_<4;_++){const y=v()*6.28,A=.3+v()*.3,E=new C(new gt(0,.015,.12+v()*.1,3),l);E.position.set(Math.cos(y)*A,.06+v()*.1,Math.sin(y)*A),E.rotation.z=(v()-.5)*.6,e.add(E)}const h=new q({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Ct});for(let _=0;_<2;_++){const y=v()*6.28,A=.2+v()*.3,E=new C(new Ge(.04+v()*.03,5),h);E.rotation.x=-Math.PI/2+v()*.4,E.position.set(Math.cos(y)*A,.05,Math.sin(y)*A),e.add(E)}const f=new Y({color:U.crystalCore,transparent:!0,opacity:.2});for(let _=0;_<2;_++){const y=new C(new gt(.003,.003,.6+v()*.4,3),f);y.position.set((v()-.5)*.3,.7+v()*.5,(v()-.5)*.3),y.rotation.set((v()-.5)*1,v(),(v()-.5)*1),e.add(y)}const p=new q({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let _=0;_<4;_++){const y=new C(new Z(.02+v()*.02,3,3),p);y.position.set((v()-.5)*.15,.4+v()*.6,(v()-.5)*.15),e.add(y)}const m=new Y({color:11206638,transparent:!0,opacity:.06}),x=new C(new Pe(.35,.02,4,10),m);x.position.y=.6,x.rotation.x=Math.PI/2+v()*.3,e.add(x);const d=new Y({color:U.crystal,transparent:!0,opacity:.06,side:Ct}),g=new C(new Ge(.8,8),d);g.rotation.x=-Math.PI/2,g.position.y=.01,e.add(g),e.position.set(i,0,t),nt.add(e);const S=new vr(U.crystal,.5,8);return S.position.set(i,1.2,t),nt.add(S),{group:e,mat:s,phase:n,x:i,z:t,light:S}}const ii={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0}};function Jw(i,t,e,n,s,o){ii.uTime.value=i,ii.uWindAmp.value=t,ii.uWindLeanX.value=e,ii.uWindLeanZ.value=n,ii.uPlayerX.value=s,ii.uPlayerZ.value=o}function Qw(i,t,e,n,s){const o=new Ee,r=[],a=[],u=[],c=n||20,l=new ot(s?s[0]:663568),h=new ot(s?s[1]:1388056),f=new ot(s?s[2]:2777141),p=new ot(s?s[3]:4517461),m=new ot(s?s[4]:7864268),x=new ot(s?s[5]:14548838),d=new ot,g=Bt(i,t);for(let M=0;M<c;M++){const w=v()*6.28,R=v()*e,L=Math.cos(w)*R,D=Math.sin(w)*R,z=Bt(i+L,t+D)-g,H=.25+v()*.65,k=.03+v()*.05,O=(v()-.5)*.2,G=(v()-.5)*.2,et=(v()-.5)*.12,ct=v()<.5?l:h,ft=v(),Pt=ft<.4?p:ft<.7?m:x,Wt=H*.35,tt=H*.7,ut=O*.3,yt=O*.7,mt=G*.3,It=G*.7;r.push(L-k,z+.01,D),r.push(L+k,z+.01,D),r.push(L+ut-k*.9,z+Wt,D+mt),u.push(0,0,.35),a.push(ct.r,ct.g,ct.b,ct.r,ct.g,ct.b),d.copy(ct).lerp(f,.4),a.push(d.r,d.g,d.b),r.push(L+k,z+.01,D),r.push(L+ut+k*.9,z+Wt,D+mt),r.push(L+ut-k*.9,z+Wt,D+mt),u.push(0,.35,.35),a.push(ct.r,ct.g,ct.b),d.copy(ct).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b);const Nt=k*.65;r.push(L+ut-k*.9,z+Wt,D+mt),r.push(L+ut+k*.9,z+Wt,D+mt),r.push(L+yt-Nt,z+tt,D+It+et),u.push(.35,.35,.7),d.copy(ct).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b),d.copy(f).lerp(Pt,.3),a.push(d.r,d.g,d.b),r.push(L+ut+k*.9,z+Wt,D+mt),r.push(L+yt+Nt,z+tt,D+It+et),r.push(L+yt-Nt,z+tt,D+It+et),u.push(.35,.7,.7),d.copy(ct).lerp(f,.4),a.push(d.r,d.g,d.b),d.copy(f).lerp(Pt,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),r.push(L+yt-Nt,z+tt,D+It+et),r.push(L+yt+Nt,z+tt,D+It+et),r.push(L+O+et*2,z+H,D+G+et*1.5),u.push(.7,.7,1),d.copy(f).lerp(Pt,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),a.push(Pt.r,Pt.g,Pt.b)}const S=new ot(s?s[6]:1725736),_=new ot(s?s[7]:3385941),y=Math.floor(c*.3);for(let M=0;M<y;M++){const w=v()*6.28,R=v()*e*.9,L=Math.cos(w)*R,D=Math.sin(w)*R,z=Bt(i+L,t+D)-g,H=.02+v()*.03;r.push(L-H,z+.01,D),r.push(L+H,z+.01,D),r.push(L,z+.03+v()*.02,D+H),u.push(0,0,.05),a.push(S.r,S.g,S.b),a.push(S.r,S.g,S.b),a.push(_.r,_.g,_.b)}o.setAttribute("position",new Vt(r,3)),o.setAttribute("color",new Vt(a,3)),o.setAttribute("bladeHeight",new Vt(u,1)),o.computeVertexNormals();const A=new q({vertexColors:!0,roughness:.7,side:Ct,emissive:s?s[8]:4521830,emissiveIntensity:.15}),E=i,b=t;A.onBeforeCompile=M=>{M.uniforms.uTime=ii.uTime,M.uniforms.uWindAmp=ii.uWindAmp,M.uniforms.uWindLeanX=ii.uWindLeanX,M.uniforms.uWindLeanZ=ii.uWindLeanZ,M.uniforms.uPlayerX=ii.uPlayerX,M.uniforms.uPlayerZ=ii.uPlayerZ,M.uniforms.uPatchX={value:E},M.uniforms.uPatchZ={value:b},M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
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
      `),M.vertexShader=M.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
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
      `),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
      varying float vGlow;
      `),M.fragmentShader=M.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance *= (1.0 + vGlow * 10.0);
      `)};const T=new C(o,A);return T.position.set(i,0,t),nt.add(T),{mesh:T,geo:o,cx:i,cz:t}}function tS(i,t){const e=new te,n=new q({color:U.fern,emissive:U.fernGlow,emissiveIntensity:.08,roughness:.7,side:Ct}),s=3+Math.floor(v()*2),o=.5+v()*.7,r=new q({color:1708552,roughness:.95}),a=new C(new Z(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let g=0;g<3;g++){const S=v()*6.28,_=new C(new gt(.003,.002,.08,3),r);_.position.set(Math.cos(S)*.06,.01,Math.sin(S)*.06),_.rotation.z=(S<3.14?1:-1)*1.2,_.rotation.y=S,e.add(_)}for(let g=0;g<s;g++){const S=g/s*6.28+v()*.3,_=new C(new gt(.004,.006,.55,3),new q({color:1721632,roughness:.8}));_.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),_.rotation.y=-S,_.rotation.x=-.6-v()*.4,e.add(_);const y=new C(new se(.12,.6,1,3),n);y.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),y.rotation.y=-S,y.rotation.x=-.6-v()*.4,e.add(y);for(let E=0;E<6;E++){const b=new C(new se(.07,.06,1,1),n),T=.06+E*.08,M=E%2===0?1:-1;b.position.set(Math.cos(S)*(.15+.06),T,Math.sin(S)*(.15+.06*M)),b.rotation.y=-S,b.rotation.x=-.8,b.rotation.z=M*.5,e.add(b)}const A=new q({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const b=new C(new Z(.008,3,3),A),T=.12+E*.12;b.position.set(Math.cos(S)*(.15+.02),T-.01,Math.sin(S)*(.15+.02)),e.add(b)}}const u=new q({color:U.fernGlow,emissive:U.fernGlow,emissiveIntensity:.3}),c=new C(new Z(.04,4,3),u);c.position.y=.35,e.add(c);const l=new C(new gt(.006,.003,.06,3),u);l.position.set(.02,.37,0),l.rotation.z=-.8,e.add(l);const h=new q({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let g=0;g<3;g++){const S=v()*6.28,_=v()*.2,y=new C(new Z(.006+v()*.005,3,3),h);y.position.set(Math.cos(S)*_,.12+v()*.2,Math.sin(S)*_),e.add(y)}const f=new q({color:3811856,roughness:.9,side:Ct,transparent:!0,opacity:.6}),p=new C(new se(.1,.4,1,2),f),m=v()*6.28;p.position.set(Math.cos(m)*.12,.05,Math.sin(m)*.12),p.rotation.x=-1.3,p.rotation.y=m,e.add(p);const x=new Y({color:2768928,transparent:!0,opacity:.3});for(let g=0;g<4;g++){const S=new C(new gt(.001,.001,.015,3),x);S.position.set((v()-.5)*.08,.08+v()*.15,(v()-.5)*.08),S.rotation.z=(v()-.5)*1.5,e.add(S)}const d=new q({color:1708552,roughness:.95});for(let g=0;g<3;g++){const S=new C(new Z(.006,3,3),d);S.position.set((v()-.5)*.1,.005,(v()-.5)*.1),e.add(S)}return e.scale.setScalar(o),e.position.set(i,0,t),nt.add(e),{group:e,phase:v()*6.28}}function eS(i,t){const e=new te,n=.25+v()*.4,s=new q({color:U.flowerStem,roughness:.8}),o=new C(new gt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let T=0;T<2;T++){const M=new C(new Pn(.004,.012,3),s);M.position.set(.012,n*.25+T*n*.25,0),M.rotation.z=-1.2,e.add(M)}const r=new q({color:U.fern,roughness:.7,side:Ct}),a=new C(new se(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const u=new C(new se(.05,.035),r);u.position.set(-.025,n*.5,.01),u.rotation.z=.6,e.add(u);const c=new q({color:1728560,roughness:.7,side:Ct});for(let T=0;T<5;T++){const M=T/5*6.28+.3,w=new C(new se(.025,.02),c);w.position.set(Math.cos(M)*.025,n-.005,Math.sin(M)*.025),w.rotation.x=-1.2,w.rotation.y=-M,e.add(w)}const l=new q({color:U.flower,emissive:U.flowerGlow,emissiveIntensity:.4+v()*.4,transparent:!0,opacity:.85,side:Ct});for(let T=0;T<6;T++){const M=T/6*6.28,w=new C(new se(.05,.04),l);w.position.set(Math.cos(M)*.03,n+.01,Math.sin(M)*.03),w.rotation.x=-.8,w.rotation.y=-M,e.add(w)}const h=new q({color:16777215,emissive:U.flowerGlow,emissiveIntensity:1.2}),f=new C(new Z(.02,4,3),h);f.position.y=n+.02,e.add(f);const p=new Y({color:16777130,transparent:!0,opacity:.7}),m=new Y({color:16772676});for(let T=0;T<3;T++){const M=T/3*6.28+.5,w=new C(new gt(.002,.002,.025,3),p);w.position.set(Math.cos(M)*.012,n+.03,Math.sin(M)*.012),e.add(w);const R=new C(new Z(.005,3,3),m);R.position.set(Math.cos(M)*.012,n+.045,Math.sin(M)*.012),e.add(R)}const x=new Y({color:16777164,transparent:!0,opacity:.3});for(let T=0;T<2;T++){const M=new C(new Z(.006,3,3),x);M.position.set((v()-.5)*.04,n+.06+v()*.04,(v()-.5)*.04),e.add(M)}const d=new q({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),g=new C(new Z(.006,3,3),d);g.position.set(.005,n+.005,.005),e.add(g);const S=new Y({color:15662984}),_=new C(new gt(.002,.002,.03,3),S);_.position.y=n+.035,e.add(_);const y=new C(new Z(.005,3,3),S);y.position.y=n+.055,e.add(y);const A=new q({color:1725728,roughness:.7}),E=new C(new gt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const b=new Y({color:16777215,transparent:!0,opacity:.35});for(let T=0;T<4;T++){const M=T/4*6.28+.3,w=new C(new Z(.004,3,3),b);w.position.set(Math.cos(M)*.045,n+.005,Math.sin(M)*.045),e.add(w)}return e.position.set(i,0,t),nt.add(e),{group:e,petalMat:l,phase:v()*6.28,baseH:n}}function nS(i,t){const e=new te,n=new q({color:U.reed,emissive:U.reedTip,emissiveIntensity:.05,roughness:.7}),s=new q({color:U.reedTip,emissive:U.reedTip,emissiveIntensity:.15}),o=new q({color:1709328,roughness:.95}),r=new C(new Z(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(v()*4),u=new q({color:U.reed,roughness:.7,side:Ct});for(let p=0;p<a;p++){const m=.6+v()*1,x=(v()-.5)*.2,d=(v()-.5)*.2,g=new C(new gt(.008,.015,m,4),n);g.position.set(x,m/2,d),e.add(g);const S=2+Math.floor(v()*2),_=new q({color:2771488,roughness:.7});for(let E=0;E<S;E++){const b=m*.2+E*m*.25,T=new C(new Pe(.012,.004,4,6),_);T.position.set(x,b,d),T.rotation.x=Math.PI/2,e.add(T)}if(v()<.7){const E=.1+v()*.15,b=v()*6.28,T=new C(new se(.02,E),u);T.position.set(x+Math.cos(b)*.02,m*.4,d+Math.sin(b)*.02),T.rotation.y=-b,T.rotation.x=-.5-v()*.4,e.add(T)}const y=new C(new Z(.025,4,3),s);y.scale.set(.8,1.5,.8),y.position.set(x,m+.02,d),e.add(y);const A=new Y({color:U.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const b=E/3*6.28+v()*.5,T=new C(new gt(.002,.001,.04,3),A);T.position.set(x+Math.cos(b)*.015,m+.05,d+Math.sin(b)*.015),T.rotation.z=(v()-.5)*.4,e.add(T)}}e.position.set(i,0,t),nt.add(e);const c=new q({color:4864536,roughness:.9,side:Ct,transparent:!0,opacity:.5});for(let p=0;p<2;p++){v()*6.28;const m=(v()-.5)*.15,x=new C(new se(.025,.02),c);x.position.set(m,.2+p*.25,(v()-.5)*.1),x.rotation.set(v()*.5,v(),v()*.5),e.add(x)}const l=new Y({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const m=new C(new Z(.005,3,3),l);m.position.set((v()-.5)*.15,.8+v()*.6,(v()-.5)*.15),e.add(m)}const h=new q({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new C(new Pe(.1,.008,4,8),h);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:v()*6.28,swayAmp:.03+v()*.04}}let wn=null;const jo=[],mn=new he,Zc=new ot,Yp=new ot(U.dandSeed);function iS(i){const t=new Y({color:16777215,transparent:!0,opacity:1});wn=new oi(Nn.dandSeed,t,i),wn.instanceMatrix.setUsage(we),wn.instanceColor=new Pi(new Float32Array(i*3),3),wn.instanceColor.setUsage(we),mn.scale.setScalar(0),mn.updateMatrix();for(let e=0;e<i;e++)wn.setMatrixAt(e,mn.matrix),Zc.copy(Yp),wn.setColorAt(e,Zc),jo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});wn.count=i,wn.frustumCulled=!1,nt.add(wn)}function Zp(i,t,e){let n=null;for(let o=0;o<jo.length;o++)if(!jo[o].active){n=jo[o];break}if(!n)return;n.x=i+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const s=Math.random()*6.28;n.vx=Math.cos(s)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(s)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let $p=0,jp=0,Kp=0;function sS(i,t,e){$p=i,jp=t,Kp=e}function oS(i,t){let e=!1;for(let n=0;n<jo.length;n++){const s=jo[n];if(!s.active){mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(n,mn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(n,mn.matrix);continue}s.drift+=(Math.random()-.5)*1.5*i,s.vx+=Math.sin(s.drift)*.3*i,s.vz+=Math.cos(s.drift)*.2*i,s.vx+=$p*.5*i,s.vz+=jp*.5*i,s.vy+=(.15+Kp*.1-s.vy)*i*.5,s.vx*=.998,s.vy*=.998,s.vz*=.998,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const r=s.life/s.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;mn.position.set(s.x,s.y,s.z),mn.scale.setScalar(a),mn.updateMatrix(),wn.setMatrixAt(n,mn.matrix),Zc.copy(Yp).multiplyScalar(r),wn.setColorAt(n,Zc),e=!0}wn.instanceMatrix.needsUpdate=!0,e&&(wn.instanceColor.needsUpdate=!0)}function rS(i,t){const e=new te,n=.35+v()*.45,s=new q({color:2777128,roughness:.7,side:Ct}),o=3+Math.floor(v()*2);for(let _=0;_<o;_++){const y=_/o*6.28+v()*.3,A=new C(new se(.08,.035),s);A.position.set(Math.cos(y)*.05,.02,Math.sin(y)*.05),A.rotation.x=-1.4,A.rotation.y=-y,e.add(A)}const r=new q({color:U.dandStem,roughness:.8}),a=new C(new gt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const u=new Y({color:14540236,transparent:!0,opacity:.3});for(let _=0;_<4;_++){const y=n*.2+_*n*.18,A=new C(new gt(.002,.001,.02,3),u);A.position.set(.01,y,0),A.rotation.z=-.8,e.add(A)}const c=new q({color:U.fern,roughness:.7,side:Ct}),l=new C(new se(.07,.03),c);l.position.set(.03,n*.15,0),l.rotation.z=-.4,e.add(l);const h=new q({color:U.dandHead,emissive:U.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new C(new Z(.07,6,5),h);f.position.y=n+.05,e.add(f);const p=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),m=new C(new Z(.012,4,3),p);m.position.set(.04,n+.07,.03),e.add(m);const x=new Y({color:U.dandSeed,transparent:!0,opacity:.7});for(let _=0;_<8;_++){const y=_/8*6.28+v()*.2,A=new C(new Pn(.015,.05,3),x);A.position.set(Math.cos(y)*.06,n+.05+v()*.04,Math.sin(y)*.06),A.rotation.x=(v()-.5)*.6,A.rotation.z=(v()-.5)*.6,e.add(A);const E=new Y({color:16777215,transparent:!0,opacity:.3}),b=new C(new gt(.001,.001,.03,3),E);b.position.set(Math.cos(y)*.08,n+.08,Math.sin(y)*.08),b.rotation.set((v()-.5)*.5,0,(v()-.5)*.5),e.add(b);const T=new Y({color:15658717,transparent:!0,opacity:.15});for(let M=0;M<2;M++){const w=y+(M-.5)*.5,R=new C(new gt(8e-4,8e-4,.025,3),T);R.position.set(Math.cos(w)*.075,n+.09,Math.sin(w)*.075),R.rotation.set((v()-.5)*.8,0,(v()-.5)*.8),e.add(R)}}const d=new q({color:3811856,roughness:.9});for(let _=0;_<4;_++){const y=_/4*6.28+v()*.5,A=new C(new Z(.005,3,3),d);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(y)*.04,n+.04,Math.sin(y)*.04),e.add(A)}const g=new Y({color:1716240,transparent:!0,opacity:.15});for(let _=0;_<3;_++){const y=_/3*6.28,A=new C(new gt(.001,.001,n*.7,3),g);A.position.set(Math.cos(y)*.01,n*.35,Math.sin(y)*.01),e.add(A)}const S=new Y({color:13426107,transparent:!0,opacity:.2});for(let _=0;_<5;_++){const y=n*.1+v()*n*.7,A=v()*6.28,E=new C(new gt(8e-4,8e-4,.012,3),S);E.position.set(Math.cos(A)*.012,y,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(i,0,t),nt.add(e),{group:e,headMat:h,x:i,z:t,h:n,dispersed:!1,phase:v()*6.28,seedCount:8,regrowTimer:0}}function aS(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let u=0;u<8;u++)Zp(o.x,o.h+.05,o.z);for(let u=2;u<o.group.children.length;u++)o.group.children[u].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function cS(i,t){const e=new te,n=1+v()*.8,s=.25+v()*.15,o=new q({color:U.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new C(new gt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:U.thornSpike,roughness:.6}),u=4+Math.floor(v()*3);for(let y=0;y<u;y++){const A=n*.15+y/u*n*.6,E=y/u*6.28+v()*1,b=new C(new Pn(.015,.08+v()*.04,3),a);b.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),b.rotation.z=(E<3.14?1.3:-1.3)+v()*.2,b.rotation.y=E,e.add(b)}const c=new q({color:U.thornOrb,emissive:U.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),l=new C(new Z(s,12,10),c);l.position.y=n+s*.5,e.add(l);const h=new q({color:16777164,emissive:U.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new C(new Z(s*.35,8,6),h);f.position.y=n+s*.5,e.add(f);const p=new Y({color:U.thornOrbGlow,transparent:!0,opacity:.06,blending:Qt,depthWrite:!1}),m=new C(new Z(s*2,8,6),p);m.position.y=n+s*.5,e.add(m);const x=new q({color:U.thornSpike,emissive:U.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),d=6+Math.floor(v()*3);for(let y=0;y<d;y++){const A=y/d*6.28+v()*.3,E=(v()-.5)*1.2,b=.3+v()*.3,T=new C(new Pn(.018,b,4),x);T.position.set(Math.cos(A)*s*.8,n+s*.5+Math.sin(E)*s*.5,Math.sin(A)*s*.8),T.rotation.z=-E+(A<3.14?1.4:-1.4),T.rotation.y=A,e.add(T)}const g=new q({color:U.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Ct}),S=4+Math.floor(v()*2);for(let y=0;y<S;y++){const A=y/S*6.28+v()*.3,E=.2+v()*.15,b=new C(new se(E,E*1.5),g);b.position.set(Math.cos(A)*(s+.05),n+s*.3-v()*.1,Math.sin(A)*(s+.05)),b.rotation.y=-A,b.rotation.x=-.4-v()*.3,e.add(b)}const _=new q({color:1718296,emissive:662026,emissiveIntensity:.05,side:Ct});for(let y=0;y<2;y++){const A=v()*6.28,E=new C(new se(.15,.25),_);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(i,0,t),nt.add(e),{group:e,orbMat:c,hazeMat:p,phase:v()*6.28,x:i,z:t}}function lS(i,t){const e=new te,n=2+Math.floor(v()*2),s=new q({color:1710128,roughness:.85,emissive:U.helixStem,emissiveIntensity:.1}),o=new C(new Z(.18,8,6),s);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let c=0;c<n;c++){const l=1.5+v()*1,h=.15+v()*.15,f=1.5+v()*1.5,p=v()*6.28,m=[],x=16;for(let L=0;L<=x;L++){const D=L/x,z=p+D*f*6.28,H=h*(.3+D*.7);m.push(new F(Math.cos(z)*H,D*l,Math.sin(z)*H))}const d=new so(m),g=new q({color:U.helixStem,emissive:U.helixNode,emissiveIntensity:.12,roughness:.7}),S=new C(new cn(d,20,.025+v()*.01,5,!1),g);e.add(S);const _=.1+v()*.08,A=v()<.5?new If(_,0):new Pf(_,0),E=new q({color:U.helixPod,emissive:U.helixPodGlow,emissiveIntensity:.5+v()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),b=new C(A,E),T=d.getPoint(1);b.position.copy(T),b.rotation.set(v()*3,v()*3,v()*3),e.add(b),r.push(E);const M=new C(new Z(_*2.5,6,4),new Y({color:U.helixPodGlow,transparent:!0,opacity:.05,blending:Qt,depthWrite:!1}));M.position.copy(T),e.add(M);const w=1+Math.floor(v()*2);for(let L=0;L<w;L++){const D=.3+v()*.5,z=d.getPoint(D),H=new q({color:U.helixRing,emissive:U.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),k=new C(new Pe(.1+v()*.08,.008,6,12),H);k.position.copy(z),k.rotation.set(v()*3,v()*3,v()*3),e.add(k)}const R=2+Math.floor(v()*2);for(let L=0;L<R;L++){const D=.2+L/R*.6,z=d.getPoint(D),H=new q({color:U.helixNode,emissive:U.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),k=new C(new Z(.025+v()*.015,5,4),H);k.position.copy(z),e.add(k)}}const a=new q({color:U.helixStem,emissive:U.helixNode,emissiveIntensity:.06,roughness:.8}),u=2+Math.floor(v()*2);for(let c=0;c<u;c++){const l=c/u*6.28+v()*.5,h=.3+v()*.4,f=new C(new gt(.006,.015,h,3),a);f.position.set(Math.cos(l)*.12,h*.3,Math.sin(l)*.12),f.rotation.z=(l<3.14?.8:-.8)+v()*.3,f.rotation.y=l,e.add(f)}return e.position.set(i,0,t),nt.add(e),{group:e,podMats:r,phase:v()*6.28}}function uS(i,t){const e=new te,n=.25+v()*.1,s=new q({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const p=f/3*6.28+v()*.5,m=new C(new gt(.01,.035,.25+v()*.15,4),s);m.position.set(Math.cos(p)*n*.6,.06,Math.sin(p)*n*.6),m.rotation.z=p<3.14?1:-1,m.rotation.y=p,e.add(m)}const o=new q({color:U.snapBody,emissive:U.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new C(new Z(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new q({color:1730116,emissive:U.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),u=new C(new Pe(n*.45,.02,6,12),a);u.position.y=n*1.7,u.rotation.x=Math.PI/2,e.add(u);const c=5+Math.floor(v()*3),l=[],h=[];for(let f=0;f<c;f++){const p=f/c*6.28+v()*.3,m=v()*6.28,x=3+Math.floor(v()*2),d=.2+v()*.1,g=[],S=new he;S.position.set(Math.cos(p)*n*.6,n*1.4,Math.sin(p)*n*.6),S.rotation.y=p,e.add(S);let _=S;for(let b=0;b<x;b++){const T=b/x,M=.02*(1-T*.6),w=new q({color:U.snapFrond,emissive:U.snapBodyGlow,emissiveIntensity:.08+T*.15,roughness:.6}),R=new C(new gt(M*.7,M,d,4),w);R.position.y=b===0?0:d,R.geometry.translate(0,d/2,0),_.add(R),g.push(R),_=R}const y=new q({color:U.snapTip,emissive:U.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new C(new Z(.025+v()*.015,5,4),y);A.position.y=d,_.add(A),h.push(y);const E=new C(new Z(.06,4,3),new Y({color:U.snapTipGlow,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}));A.add(E),l.push({segments:g,baseAngle:p,phaseOffset:m,segLen:d})}return e.position.set(i,0,t),nt.add(e),{group:e,body:r,bodyMat:o,tipMats:h,fronds:l,phase:v()*6.28,x:i,z:t}}function hS(i,t,e,n,s){for(let o=0;o<i.length;o++){const r=i[o],a=s?s(r.x,r.z,n):n,u=Math.sin(e*1.5+r.phase)*.08;r.body.scale.set(1+u,.85+u*.5,1+u),r.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+r.phase)*.15)*a;for(let c=0;c<r.fronds.length;c++){const l=r.fronds[c],h=1.2+c%3*.3;for(let f=0;f<l.segments.length;f++){const p=l.segments[f],m=.15+f*.12,x=Math.sin(e*h+l.phaseOffset+f*.5)*m,d=Math.cos(e*h*.7+l.phaseOffset+f*.3)*m*.6;p.rotation.z=x,p.rotation.x=d}}for(let c=0;c<r.tipMats.length;c++){const l=Math.sin(e*2.5+r.phase+c*1.2)*.5+.5;r.tipMats[c].emissiveIntensity=(.4+l*.4)*a}}}function fS(i,t){const e=new te,n=1.2+v()*.8,s=3+Math.floor(v()*3),o=new q({color:U.spiralStem,roughness:.7,emissive:U.spiralFrond,emissiveIntensity:.06}),r=new C(new gt(.02,.05,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:1721392,emissive:662032,emissiveIntensity:.05,side:Ct});for(let l=0;l<3;l++){const h=v()*6.28,f=new C(new se(.12,.2),a);f.position.set(Math.cos(h)*.1,n*.12,Math.sin(h)*.1),f.rotation.y=-h,f.rotation.x=-.7,e.add(f)}const u=[];for(let l=0;l<s;l++){const h=l/s*6.28+v()*.4,f=n*(.5+v()*.35),p=.15+v()*.15,m=1+v()*1.5,x=[],d=14;for(let M=0;M<=d;M++){const w=M/d,R=h+w*m*6.28,L=p*(.2+w*.8);x.push(new F(Math.cos(R)*L,n*.25+w*f,Math.sin(R)*L))}const g=new so(x),S=new q({color:U.spiralFrond,emissive:U.spiralGlow,emissiveIntensity:.12,roughness:.5}),_=new C(new cn(g,16,.012+v()*.006,4,!1),S);e.add(_);const y=3+Math.floor(v()*2);for(let M=0;M<y;M++){const w=.2+M/y*.6,R=g.getPoint(w),L=new C(new se(.04,.06),new q({color:U.spiralFrond,emissive:U.spiralGlow,emissiveIntensity:.08,side:Ct}));L.position.copy(R),L.rotation.set(v()*1.5,v()*3,v()*1.5),e.add(L)}const A=g.getPoint(1),E=new q({color:U.spiralTip,emissive:U.spiralGlow,emissiveIntensity:.6,transparent:!0,opacity:.7}),b=new C(new Z(.025+v()*.015,5,4),E);b.position.copy(A),e.add(b),u.push(E);const T=new C(new Z(.07,4,3),new Y({color:U.spiralGlow,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}));T.position.copy(A),e.add(T)}const c=new q({color:1714224,roughness:.85,emissive:660752,emissiveIntensity:.04});for(let l=0;l<3;l++){const h=l/3*6.28+v()*.5,f=new C(new gt(.006,.018,.15+v()*.1,3),c);f.position.set(Math.cos(h)*.06,.04,Math.sin(h)*.06),f.rotation.z=h<3.14?.8:-.8,f.rotation.y=h,e.add(f)}return e.position.set(i,0,t),nt.add(e),{group:e,tipMats:u,phase:v()*6.28,x:i,z:t}}function dS(i,t){const e=new te,n=1.5+v()*1,s=n*.7,o=.4+v()*.2,r=new q({color:U.corpseLeaf,roughness:.75,emissive:662026,emissiveIntensity:.05}),a=new C(new gt(.06,.1,n*.5,6),r);a.position.y=n*.25,e.add(a);const u=new q({color:U.corpseSpathe,emissive:2230800,emissiveIntensity:.08,transparent:!0,opacity:.85,roughness:.5,side:Ct}),c=new Pn(o,n*.5,8,1,!0),l=new C(c,u);l.position.y=n*.55,l.scale.set(1,1,1),e.add(l);const h=new q({color:U.corpseSpathe,emissive:U.corpseGlow,emissiveIntensity:.1,roughness:.4}),f=new C(new Pe(o*.95,.02,6,12),h);f.position.y=n*.8,f.rotation.x=Math.PI/2,e.add(f);const p=new q({color:U.corpseColumn,emissive:U.corpseGlow,emissiveIntensity:.5,transparent:!0,opacity:.8,roughness:.3}),m=new C(new gt(.03,.06,s,6),p);m.position.y=n*.4+s*.5,e.add(m);const x=new Y({color:U.corpseGlow,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}),d=new C(new Z(o*1.2,6,4),x);d.position.y=n*.65,e.add(d);for(let M=0;M<5;M++){const w=v()*6.28,R=n*.45+v()*s*.6,L=new C(new Z(.01,3,3),new q({color:U.corpseGlow,emissive:U.corpseGlow,emissiveIntensity:.3}));L.position.set(Math.cos(w)*.05,R,Math.sin(w)*.05),e.add(L)}const g=new Y({color:1118481,transparent:!0,opacity:.7}),S=[],_=3+Math.floor(v()*3),y=n*.7;for(let M=0;M<_;M++){const w=new C(new Z(.008,3,3),g);w.position.set(0,y,0),e.add(w),S.push(w)}const A=new q({color:U.corpseLeaf,emissive:662024,emissiveIntensity:.04,side:Ct}),E=2+Math.floor(v()*2);for(let M=0;M<E;M++){const w=M/E*6.28+v()*.5,R=new C(new se(.25+v()*.1,.35+v()*.1),A);R.position.set(Math.cos(w)*.18,n*.15,Math.sin(w)*.18),R.rotation.y=-w,R.rotation.x=-.6-v()*.3,e.add(R)}const b=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),T=new C(new Z(.15,6,4),b);return T.scale.set(1.5,.4,1.5),T.position.y=.03,e.add(T),e.position.set(i,0,t),nt.add(e),{group:e,columnMat:p,hazeMat:x,flies:S,spadixY:y,phase:v()*6.28,x:i,z:t}}function pS(i,t){const e=new te,n=.3+v()*.15,s=.3+v()*.2,o=new q({color:U.orbBushLeaf,roughness:.8,emissive:662026,emissiveIntensity:.06}),r=5+Math.floor(v()*4);for(let f=0;f<r;f++){const p=v()*6.28,m=v()*n*.6,x=.1+v()*.08,d=new C(new Z(x,5,4),o);d.scale.set(1.2,.6,1.2),d.position.set(Math.cos(p)*m,s*.4+v()*s*.3,Math.sin(p)*m),e.add(d)}const a=new q({color:U.orbBushStem,emissive:662026,emissiveIntensity:.04,side:Ct});for(let f=0;f<6;f++){const p=v()*6.28,m=n*.5+v()*n*.3,x=new C(new se(.06,.08),a);x.position.set(Math.cos(p)*m,s*.3+v()*.15,Math.sin(p)*m),x.rotation.set(v()*.5,-p,v()*.3),e.add(x)}const u=[],c=6+Math.floor(v()*5),l=new q({color:U.orbBushStem,roughness:.7,emissive:U.orbBushGlow,emissiveIntensity:.05});for(let f=0;f<c;f++){const p=v()*6.28,m=v()*n*.7,x=s+.15+v()*.3,d=.02+v()*.015,g=x-s*.3,S=new C(new gt(.003,.005,g,3),l);S.position.set(Math.cos(p)*m,s*.3+g/2,Math.sin(p)*m),S.rotation.z=(v()-.5)*.3,S.rotation.x=(v()-.5)*.3,e.add(S);const _=new q({color:U.orbBushOrb,emissive:U.orbBushGlow,emissiveIntensity:.5+v()*.3,transparent:!0,opacity:.7,roughness:.2}),y=new C(new Z(d,5,4),_);y.position.set(Math.cos(p)*m+(v()-.5)*.03,x,Math.sin(p)*m+(v()-.5)*.03),e.add(y),u.push(_);const A=new C(new Z(d*2.5,4,3),new Y({color:U.orbBushGlow,transparent:!0,opacity:.03,blending:Qt,depthWrite:!1}));A.position.copy(y.position),e.add(A)}const h=new q({color:1712152,roughness:.9});for(let f=0;f<3;f++){const p=v()*6.28,m=n+v()*.1,x=new C(new Z(.015,3,3),h);x.position.set(Math.cos(p)*m,.01,Math.sin(p)*m),x.scale.set(1,.4,1),e.add(x)}return e.position.set(i,0,t),nt.add(e),{group:e,orbMats:u,phase:v()*6.28,x:i,z:t}}function mS(i,t){const e=new te,n=2+Math.floor(v()*3),s=[],o=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),r=new C(new Z(.1,5,4),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=new q({color:U.lanternStem,emissive:662024,emissiveIntensity:.04,side:Ct});for(let u=0;u<2;u++){const c=v()*6.28,l=new C(new se(.1,.18),a);l.position.set(Math.cos(c)*.08,.08,Math.sin(c)*.08),l.rotation.y=-c,l.rotation.x=-.6,e.add(l)}for(let u=0;u<n;u++){const c=u/n*6.28+v()*.5,l=.8+v()*.8,h=.3+v()*.4,f=[],p=10;for(let w=0;w<=p;w++){const R=w/p,L=h*Math.sin(R*Math.PI*.7),D=R<.7?R/.7*l:l-(R-.7)/.3*l*.25;f.push(new F(Math.cos(c)*L,D,Math.sin(c)*L))}const m=new so(f),x=new q({color:U.lanternStem,roughness:.7,emissive:U.lanternHaze,emissiveIntensity:.06}),d=new C(new cn(m,12,.008+v()*.004,4,!1),x);e.add(d);const g=m.getPoint(1),S=.06+v()*.04,_=new q({color:U.lanternPod,emissive:U.lanternGlow,emissiveIntensity:.5+v()*.3,transparent:!0,opacity:.5,roughness:.2,metalness:.1}),y=new C(new Z(S,8,6),_);y.position.copy(g),y.position.y-=S*.3,e.add(y),s.push(_);const A=new q({color:16777164,emissive:U.lanternGlow,emissiveIntensity:1,transparent:!0,opacity:.5,roughness:0}),E=new C(new Z(S*.4,5,4),A);E.position.copy(y.position),e.add(E);const b=new C(new Z(S*2.5,5,4),new Y({color:U.lanternHaze,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}));b.position.copy(y.position),e.add(b);const T=new q({color:U.lanternStem,roughness:.6}),M=new C(new Pn(S*.5,S*.4,5),T);M.position.copy(g),M.rotation.x=Math.PI,e.add(M)}return e.position.set(i,0,t),nt.add(e),{group:e,podMats:s,phase:v()*6.28,x:i,z:t}}function gS(i,t){const e=new te,n=1+Math.floor(v()*2),s=[];for(let a=0;a<n;a++){const u=(a-(n-1)*.5)*.3,c=1+v()*.8,l=new q({color:U.veilSupport,roughness:.85,emissive:657928,emissiveIntensity:.03}),h=new C(new gt(.015,.03,c,4),l);h.position.set(u,c/2,0),e.add(h);const f=.2+v()*.15,p=new C(new gt(.008,.012,f,3),l);p.position.set(u,c*.9,0),p.rotation.z=Math.PI/2,e.add(p);const m=3+Math.floor(v()*3);for(let d=0;d<m;d++){const g=.08+v()*.06,S=c*(.3+v()*.4),_=(d-(m-1)*.5)*(f/m),y=new q({color:U.veilMoss,emissive:U.veilGlow,emissiveIntensity:.12+v()*.08,transparent:!0,opacity:.25+v()*.15,roughness:.6,side:Ct}),A=new C(new se(g,S),y);A.position.set(u+_,c*.9-S*.5,(v()-.5)*.05),A.rotation.y=(v()-.5)*.4,e.add(A),s.push(A);const E=2+Math.floor(v()*2),b=new Y({color:U.veilEdge,transparent:!0,opacity:.4});for(let T=0;T<E;T++){const M=new C(new Z(.006,3,3),b);M.position.set(u+_+(v()-.5)*g*.8,c*.9-S+v()*S*.15,(v()-.5)*.04),e.add(M)}}const x=new q({color:U.veilMoss,emissive:U.veilGlow,emissiveIntensity:.08,transparent:!0,opacity:.3});for(let d=0;d<3;d++){const g=c*(.2+v()*.5),S=v()*6.28,_=new C(new Z(.015+v()*.01,4,3),x);_.scale.set(1.5,.5,1),_.position.set(u+Math.cos(S)*.025,g,Math.sin(S)*.025),e.add(_)}}const o=new q({color:2767400,roughness:.9,emissive:U.veilGlow,emissiveIntensity:.03}),r=new C(new Z(.12,5,4),o);return r.scale.set(1.5,.3,1.5),r.position.y=.02,e.add(r),e.position.set(i,0,t),nt.add(e),{group:e,veilMats:s,phase:v()*6.28,x:i,z:t}}function xS(i,t,e){const n=new te,s=new q({color:U.jellyBell,emissive:U.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Ct}),o=new C(new Z(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new q({color:U.jellyBell,emissive:U.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new C(new Pe(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const u=new C(new Z(.2,6,4),new Y({color:U.jellyGlow,transparent:!0,opacity:.7}));u.position.y=-.05,n.add(u);const c=new Y({color:12312063,transparent:!0,opacity:.3});for(let S=-1;S<=1;S+=2){const _=new C(new Z(.06,4,3),c);_.scale.set(.6,1.5,.6),_.position.set(S*.08,-.03,0),n.add(_)}const l=new Y({color:15663103,transparent:!0,opacity:.7});for(let S=0;S<5;S++){const _=v()*6.28,y=v()*.8,A=new C(new Z(.02,3,3),l);A.position.set(Math.cos(_)*y*.35,.1-y*.15,Math.sin(_)*y*.35),n.add(A)}const h=new q({color:U.jellyTent,emissive:U.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new Y({color:U.jellyGlow,transparent:!0,opacity:.6});for(let S=0;S<6;S++){const _=S/6*6.28,y=.4+v()*.6,A=new C(new gt(.015,.008,y,3),h);A.position.set(Math.cos(_)*.25,-y/2-.05,Math.sin(_)*.25),n.add(A);const E=new C(new Z(.012,3,3),f);E.position.set(Math.cos(_)*.25,-y-.06,Math.sin(_)*.25),n.add(E)}const p=new Y({color:U.jellyGlow,transparent:!0,opacity:.12});for(let S=0;S<8;S++){const _=S/8*6.28,y=new C(new gt(.002,.002,.4,3),p);y.position.set(Math.cos(_)*.2,.05,Math.sin(_)*.2),y.rotation.z=Math.PI/2-.3,y.rotation.y=-_,n.add(y)}const m=new q({color:U.jellyBell,emissive:U.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let S=0;S<10;S++){const _=S/10*6.28,y=new C(new Z(.02,3,3),m);y.scale.set(1,.5,.8),y.position.set(Math.cos(_)*.46,-.04,Math.sin(_)*.46),n.add(y)}const x=new q({color:U.jellyTent,emissive:U.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),d=new C(new gt(.02,.01,.35,4),x);d.position.y=-.2,n.add(d);const g=new Y({color:14548991,transparent:!0,opacity:.4});for(let S=0;S<3;S++){const _=S/3*6.28,y=new C(new Z(.008,3,3),g);y.position.set(Math.cos(_)*.25,-.55-v()*.3,Math.sin(_)*.25),n.add(y)}return n.position.set(i,t,e),nt.add(n),{group:n,bellMat:s,phase:v()*6.28,driftAng:v()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+v()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function vS(i,t){const e=new te,n=new q({color:U.puffBody,emissive:U.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new C(new Z(.3,8,6),n);s.position.y=.35,e.add(s);const o=new q({color:16773344,emissive:U.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new C(new Z(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new C(new Z(.22,7,5),n);a.position.y=.65,e.add(a);const u=[];for(let M=-1;M<=1;M+=2){const w=new C(new Pn(.06,.15,4),n);w.position.set(M*.13,.85,0),w.rotation.z=M*.3,e.add(w),u.push({mesh:w,side:M,baseRotZ:M*.3});const R=new C(new Pn(.03,.08,4),new q({color:U.puffCheek,emissive:U.puffCheek,emissiveIntensity:.2}));R.position.set(M*.13,.84,.01),R.rotation.z=M*.3,e.add(R),u.push({mesh:R,side:M,baseRotZ:M*.3})}const c=new Y({color:U.puffEye}),l=[];for(let M=-1;M<=1;M+=2){const w=new C(new Z(.035,4,4),c);w.position.set(M*.09,.68,.18),e.add(w),l.push(w);const R=new Y({color:16777215}),L=new C(new Z(.012,3,3),R);L.position.set(M*.09+M*.015,.695,.2),e.add(L),l.push(L)}const h=new Y({color:4469555}),f=new C(new Z(.015,3,3),h);f.position.set(0,.63,.22),e.add(f);const p=new q({color:U.puffCheek,emissive:U.puffCheek,emissiveIntensity:.3});for(let M=-1;M<=1;M+=2){const w=new C(new Z(.04,4,3),p);w.position.set(M*.15,.61,.15),e.add(w)}const m=new Y({color:15654348,transparent:!0,opacity:.5});for(let M=-1;M<=1;M+=2)for(let w=0;w<2;w++){const R=new C(new gt(.002,.002,.06,3),m);R.position.set(M*.12,.62-w*.03,.2),R.rotation.z=M*.7+w*M*.2,R.rotation.x=-.1,e.add(R)}for(let M=-1;M<=1;M+=2){const w=new C(new Z(.07,4,3),n);w.position.set(M*.12,.07,.05),w.scale.set(1,.5,1.3),e.add(w);const R=new q({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let L=0;L<3;L++){const D=L/3*6.28,z=new C(new Z(.012,3,3),R);z.position.set(M*.12+Math.cos(D)*.03,.03,.05+Math.sin(D)*.03),e.add(z)}}const x=new q({color:16777215,emissive:U.puffGlow,emissiveIntensity:.4,roughness:.9}),d=new C(new Z(.06,5,4),x);d.position.set(0,.38,-.28),e.add(d);const g=new q({color:U.puffBody,emissive:U.puffGlow,emissiveIntensity:.2,roughness:1});for(let M=0;M<6;M++){const w=v()*6.28,R=v()*1.2,L=new C(new Z(.01,3,3),g);L.position.set(Math.cos(w)*.28,.25+R*.2,Math.sin(w)*.28),e.add(L)}const S=new Y({color:U.puffBody});for(let M=-1;M<=1;M+=2){const w=new C(new gt(.003,.003,.04,3),S);w.position.set(M*.09,.72,.17),w.rotation.z=M*.3,e.add(w)}const _=new Y({color:5583684,transparent:!0,opacity:.5}),y=new C(new gt(.002,.002,.03,3),_);y.position.set(0,.59,.22),y.rotation.z=Math.PI/2,e.add(y);const A=new Y({color:16777215,transparent:!0,opacity:.6}),E=[];for(let M=0;M<3;M++){const w=new C(new Z(.01,3,3),A.clone());w.position.set(0,.5,0),e.add(w),E.push({mesh:w,mat:w.material,phase:v()*6.28,orbitR:.28+v()*.1})}const b=new Y({color:U.puffGlow,transparent:!0,opacity:.15,side:Ct});for(let M=0;M<4;M++){const w=v()*6.28,R=(v()-.5)*.4,L=new C(new Ge(.02+v()*.012,5),b);L.position.set(Math.cos(w)*.27,.35+R*.15,Math.sin(w)*.27),L.lookAt(0,.35,0),e.add(L)}let T=null;if(v()<.4){T=new q({color:U.flower,emissive:U.flowerGlow,emissiveIntensity:.3});for(let w=0;w<3;w++){const R=w/3*6.28,L=new C(new Pn(.015,.03,3),T);L.position.set(Math.cos(R)*.035,.88,Math.sin(R)*.035),L.rotation.z=-Math.cos(R)*.5,L.rotation.x=Math.sin(R)*.5,e.add(L)}const M=new C(new Z(.01,3,3),new q({color:16772676,emissive:16768290,emissiveIntensity:.4}));M.position.set(0,.89,0),e.add(M)}return e.position.set(i,0,t),nt.add(e),{group:e,ears:u,eyes:l,tail:d,sparkles:E,crownMat:T,phase:v()*6.28,wanderAng:v()*6.28,speed:.6+v()*.8,hopTimer:0,hopPhase:v()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:v()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:i,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function MS(i,t){const e=new te,n=new q({color:U.deerBody,emissive:U.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),s=new C(new Z(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new q({color:13431039,emissive:U.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new C(new Z(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new te;a.position.set(0,1.15,.3);const u=new C(new gt(.08,.12,.4,5),n);u.position.set(0,.1,.08),u.rotation.x=-.4,a.add(u);const c=new C(new Z(.14,6,5),n);c.position.set(0,.22,.2),a.add(c);const l=new C(new Z(.07,4,3),n);l.scale.set(1,.7,1.4),l.position.set(0,.17,.35),a.add(l);const h=new Y({color:2245717}),f=new C(new Z(.02,3,3),h);f.position.set(0,.17,.43),a.add(f);const p=new Y({color:U.deerEye});for(let O=-1;O<=1;O+=2){const G=new C(new Z(.025,4,3),p);G.position.set(O*.09,.25,.28),a.add(G);const et=new C(new Z(.008,3,3),new Y({color:16777215}));et.position.set(O*.085,.26,.29),a.add(et);const ct=new Y({color:U.deerBody,transparent:!0,opacity:.5}),ft=new C(new gt(.002,.002,.03,3),ct);ft.position.set(O*.1,.27,.28),ft.rotation.z=O*.6,a.add(ft)}for(let O=-1;O<=1;O+=2){const G=new C(new Pn(.04,.14,4),n);G.position.set(O*.1,.37,.15),G.rotation.z=O*.4,a.add(G)}const m=new q({color:U.deerAntler,emissive:U.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let O=-1;O<=1;O+=2){const G=new C(new gt(.015,.02,.25,3),m);G.position.set(O*.08,.42,.12),G.rotation.z=O*.5,a.add(G);const et=new C(new gt(.01,.015,.15,3),m);et.position.set(O*.15,.55,.1),et.rotation.z=O*.8,a.add(et);const ct=new C(new gt(.008,.012,.1,3),m);ct.position.set(O*.11,.5,.16),ct.rotation.z=O*.3,ct.rotation.x=-.5,a.add(ct);const ft=new C(new Z(.012,3,3),new Y({color:U.deerGlow,transparent:!0,opacity:.8}));ft.position.set(O*.18,.61,.09),a.add(ft)}const x=new q({color:U.deerBody,emissive:U.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),d=new C(new gt(.01,.02,.1,3),x);d.position.set(0,.11,.28),d.rotation.x=.3,a.add(d);const g=new Y({color:1122850});for(let O=-1;O<=1;O+=2){const G=new C(new Z(.006,3,3),g);G.position.set(O*.02,.16,.42),a.add(G)}e.add(a);const S=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],_=new q({color:6715272,emissive:U.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),y=[];for(let O=0;O<4;O++){const G=S[O],et=new te;et.position.set(G.x,.65,G.z);const ct=new C(new gt(.025,.035,.35,4),n);ct.position.y=-.175,et.add(ct);const ft=new te;ft.position.set(0,-.35,0);const Pt=new C(new gt(.02,.03,.3,4),n);Pt.position.y=-.15,ft.add(Pt);const Wt=new C(new gt(.04,.032,.04,4),_);Wt.position.y=-.3,ft.add(Wt);const tt=new q({color:14544639,emissive:U.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),ut=new C(new Z(.025,3,3),tt);ut.scale.set(1.3,.5,1.3),ut.position.y=-.25,ft.add(ut),et.add(ft),e.add(et),y.push({upper:et,lower:ft,isFront:O<2,side:G.x<0?-1:1})}const A=new te;A.position.set(0,1.1,-.55);const E=new C(new Pn(.05,.15,4),new q({color:16777215,emissive:U.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const b=new Y({color:13434862,transparent:!0,opacity:.3});for(let O=0;O<4;O++){const G=new C(new Z(.02,3,3),b);G.position.set((v()-.5)*.25,.8+v()*.3,(v()-.5)*.4),e.add(G)}const T=new Y({color:U.deerBody,transparent:!0,opacity:.15});for(let O=0;O<3;O++){const G=new C(new gt(.002,.002,.2,3),T);G.position.set(.3,.85-O*.06,0),G.rotation.z=Math.PI/2+.3,e.add(G)}const M=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let O=0;O<3;O++){const G=new C(new Z(.008,3,3),M);G.position.set((v()-.5)*.3,.9+v()*.3,(v()-.5)*.35),e.add(G)}const w=new q({color:14544639,emissive:U.deerGlow,emissiveIntensity:.4,transparent:!0,opacity:.3,side:Ct}),R=[];for(let O=0;O<5;O++){const G=new C(new se(.05,.08+v()*.04),w);G.position.set(0,.1+O*.055,.04-O*.015),G.rotation.x=-.2+v()*.15,G.rotation.z=(v()-.5)*.25,a.add(G),R.push(G)}const L=new Y({color:U.deerGlow,transparent:!0,opacity:.5}),D=[];for(let O=-1;O<=1;O+=2){const G=new C(new Z(.012,3,3),L.clone());G.position.set(O*.1,.47,.11),a.add(G),D.push(G);const et=new C(new Z(.01,3,3),L.clone());et.position.set(O*.14,.53,.12),a.add(et),D.push(et)}const z=new Y({color:U.deerGlow,transparent:!0,opacity:.08,blending:Qt,depthWrite:!1}),H=[];for(let O=0;O<3;O++){const G=new C(new Z(.06-O*.012,4,3),z.clone());G.position.set(0,.8,-.6-O*.35),nt.add(G),H.push({mesh:G,mat:G.material,prevX:i,prevY:0,prevZ:t})}const k=new Y({color:U.deerGlow,transparent:!0,opacity:.2,side:Ct});for(let O=0;O<3;O++){v()*6.28;const G=new C(new Ge(.03+v()*.015,5),k);G.position.set((O===1?-1:1)*.32,.8+v()*.25,(v()-.5)*.3),G.rotation.y=(O===1?-1:1)*Math.PI/2,e.add(G)}return e.position.set(i,0,t),nt.add(e),{group:e,mat:n,manePlanes:R,branchOrbs:D,trailSpheres:H,phase:v()*6.28,wanderAng:v()*6.28,speed:.6+v()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:y,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:i,_lastTZ:t}}function _S(i,t,e){const n=new te,s=new q({color:U.mothBody,emissive:U.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new C(new gt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new q({color:U.mothBody,emissive:U.mothGlow,emissiveIntensity:.5,roughness:.6});for(let d=0;d<3;d++){const g=new C(new Pe(.045,.006,4,8),r);g.position.z=-.05+d*.06,g.rotation.x=0,n.add(g)}const a=new C(new Z(.05,5,4),s);a.position.z=.18,n.add(a);const u=new q({color:1122867,roughness:.2,metalness:.4});for(let d=-1;d<=1;d+=2){const g=new C(new Z(.018,4,3),u);g.position.set(d*.03,.01,.21),n.add(g)}for(let d=-1;d<=1;d+=2){const g=new C(new gt(.005,.005,.15,3),s);g.position.set(d*.03,.03,.22),g.rotation.x=-.6,g.rotation.z=d*.4,n.add(g);const S=new Y({color:U.mothGlow,transparent:!0,opacity:.7}),_=new C(new Z(.015,3,3),S);_.scale.set(2,.5,1),_.position.set(d*.05,.12,.28),n.add(_)}const c=new q({color:U.mothWing,emissive:U.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Ct,roughness:.4});n._wingPivots=[];for(let d=-1;d<=1;d+=2){const g=new te;g.position.set(d*.04,0,.02);const S=new C(new Z(.2,6,4),c);S.scale.set(1.8,.08,1.2),S.position.set(d*.18,0,.02),g.add(S);const _=new C(new Z(.12,5,3),c);_.scale.set(1.5,.06,1),_.position.set(d*.12,0,-.1),g.add(_);const y=new q({color:U.mothWing,emissive:U.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Ct}),A=new C(new se(.03,.12),y);A.position.set(d*.1,0,-.18),A.rotation.y=d*.2,g.add(A);const E=new Y({color:U.mothSpot,transparent:!0,opacity:.9}),b=new C(new Z(.03,4,3),E);b.position.set(d*.2,.02,.03),g.add(b);const T=new C(new Z(.018,3,3),E);T.position.set(d*.1,.02,-.08),g.add(T);const M=new Y({color:U.mothGlow,transparent:!0,opacity:.25});for(let w=0;w<2;w++){const R=new C(new gt(.002,.002,.2,3),M);R.position.set(d*.15,.01,-.02+w*.06),R.rotation.z=Math.PI/2+d*(.15+w*.15),g.add(R)}n.add(g),n._wingPivots.push({pivot:g,side:d})}const l=new Y({color:U.mothGlow,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new C(new Z(.008,3,3),l);g.position.set((v()-.5)*.04,0,-.15-d*.05),n.add(g)}const h=new Y({color:4473907,transparent:!0,opacity:.5}),f=new C(new Pe(.015,.003,4,8,Math.PI*1.5),h);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const p=new q({color:U.mothBody,emissive:U.mothGlow,emissiveIntensity:.4,roughness:1});for(let d=0;d<5;d++){const g=v()*6.28,S=new C(new Z(.008,3,3),p);S.position.set(Math.cos(g)*.04,Math.sin(g)*.04,v()*.15-.05),n.add(S)}const m=new Y({color:U.mothBody,transparent:!0,opacity:.4});for(let d=-1;d<=1;d+=2)for(let g=0;g<3;g++){const S=new C(new gt(.002,.002,.06,3),m);S.position.set(d*.04,-.03,-.05+g*.06),S.rotation.z=d*.8,S.rotation.x=-.3,n.add(S)}const x=new Y({color:U.mothGlow,transparent:!0,opacity:.35});for(let d=-1;d<=1;d+=2)for(let g=0;g<5;g++){const S=g/5*Math.PI-Math.PI/2,_=new C(new Z(.006,3,3),x);_.position.set(d*(.3+Math.cos(S)*.05),Math.sin(S)*.02,.02+g*.04),n.add(_)}return n.position.set(i,t,e),nt.add(n),{group:n,wingMat:c,phase:v()*6.28,orbitAng:v()*6.28,orbitR:2+v()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+v()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function yS(i,t,e){const n=new te,s=new Y({color:U.wispCore}),o=new C(new Z(.08,6,4),s);n.add(o);const r=new Y({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new C(new fr(.06,0),r);n.add(a);const u=new Y({color:U.wispGlow,transparent:!0,opacity:.5}),c=new C(new Z(.18,6,4),u);n.add(c);const l=new Y({color:U.wispGlow,transparent:!0,opacity:.25}),h=new C(new Pe(.22,.008,4,12),l);h.rotation.x=Math.PI/2,n.add(h);const f=new Y({color:U.wispTrail,transparent:!0,opacity:.15}),p=new C(new Z(.35,5,4),f);n.add(p);const m=new Y({color:16777215,transparent:!0,opacity:.8}),x=new C(new Z(.02,3,3),m);x.position.set(.15,0,0),n.add(x);const d=[];for(let b=0;b<3;b++){const T=new Y({color:U.wispCore,transparent:!0,opacity:.35}),M=new C(new Z(.01,3,3),T);M.position.set((v()-.5)*.1,-.1-b*.08,(v()-.5)*.1),n.add(M),d.push(M)}const g=new Y({color:U.wispGlow,transparent:!0,opacity:.18}),S=[];for(let b=0;b<3;b++){const T=b/3*6.28+v()*.5,M=.15+v()*.1,w=new C(new gt(.003,.001,M,3),g);w.position.set(Math.cos(T)*.1,v()*.08,Math.sin(T)*.1),w.rotation.z=Math.PI/3*(T<3.14?1:-1),w.rotation.y=T,n.add(w),S.push({mesh:w,baseAng:T})}const _=new Y({color:U.wispGlow,transparent:!0,opacity:.12}),y=new C(new Pe(.26,.005,4,10),_);y.rotation.x=1.2,y.rotation.z=.8,n.add(y);const A=new Y({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<4;b++){const T=v()*6.28,M=v()*.8,w=new C(new Z(.006,3,3),A);w.position.set(Math.cos(T)*.06,Math.sin(M)*.06,Math.sin(T)*.06),n.add(w)}const E=new Y({color:U.wispCore,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const T=new C(new Z(.004,3,3),E);T.position.set(.03+v()*.04,-.05-b*.04,v()*.04),n.add(T)}return n.scale.setScalar(.5),n.position.set(i,t,e),nt.add(n),{group:n,glowMat:u,hazeMat:f,embers:d,tendrils:S,plasmaMat:g,facet:a,halo:h,halo2:y,phase:v()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function wS(i,t){const e=new te,n=gh,s=8+Math.floor(v()*5),o=new q({color:U.fairyMush,emissive:U.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new q({color:U.mushStem,roughness:.7,emissive:U.fairyGlow,emissiveIntensity:.05});for(let A=0;A<s;A++){const E=A/s*6.28+v()*.15,b=n+v()*.3-.15,T=.15+v()*.2,M=new C(Nn.mushStem,r);M.scale.setScalar(T),M.position.set(Math.cos(E)*b,T*.3,Math.sin(E)*b),e.add(M);const w=new C(Nn.mushCap,o);w.scale.set(T,T*.4,T),w.position.set(Math.cos(E)*b,T*.55,Math.sin(E)*b),e.add(w);const R=new Y({color:16777215,transparent:!0,opacity:.7}),L=new C(new Z(T*.08,3,3),R);L.position.set(Math.cos(E)*b,T*.6,Math.sin(E)*b),e.add(L)}const a=new q({color:8934792,emissive:U.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=v()*6.28,b=n+v()*.6-.3,T=.06+v()*.06,M=new C(Nn.mushCap,a);M.scale.set(T,T*.5,T),M.position.set(Math.cos(E)*b,T*.35,Math.sin(E)*b),e.add(M)}const u=new q({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=v()*6.28,b=v()*n*.8,T=new C(new Z(.08+v()*.08,4,3),u);T.scale.set(1.5,.2,1.5),T.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(T)}const c=new q({color:4478310,emissive:U.fairyGlow,emissiveIntensity:.05,roughness:.85}),l=new C(new Z(.12,5,3),c);l.scale.set(1.2,.3,1),l.position.y=.03,e.add(l);const h=new Y({color:U.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let A=0;A<8;A++){const E=new C(new Z(.012,3,3),h),b=(v()-.5)*n*.8,T=(v()-.5)*n*.8;E.position.set(b,.05+v()*.3,T),e.add(E),f.push({mesh:E,baseX:b,baseZ:T,drift:v()*6.28,speed:.2+v()*.3})}const p=new Y({color:U.fairyRing,transparent:!0,opacity:0,side:Ct}),m=new C(new dr(.3,n-.3,16),p);m.rotation.x=-Math.PI/2,m.position.y=.02,e.add(m);const x=new Y({color:U.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=v()*6.28,b=E+.5+v()*1.5,T=n*.6+v()*n*.4,M=new C(new gt(.002,.002,T,3),x);M.position.set(Math.cos((E+b)/2)*n*.4,.005,Math.sin((E+b)/2)*n*.4),M.rotation.x=Math.PI/2,M.rotation.z=E,e.add(M)}const d=new q({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=v()*6.28,b=v()*n*.7,T=new C(new Z(.03,4,3),d);T.scale.set(1.3,.3,1.3),T.position.set(Math.cos(E)*b,.008,Math.sin(E)*b),e.add(T)}const g=new q({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new C(new Ge(.02+v()*.02,4),g);E.position.set((v()-.5)*.08,.06,(v()-.5)*.06),E.rotation.x=-Math.PI/2+v()*.4,e.add(E)}const S=[];for(let A=0;A<5;A++){const E=v()*6.28,b=v()*n*.9,T=new Y({color:8978346,transparent:!0,opacity:.25}),M=new C(new Z(.005,3,3),T);M.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(M),S.push(M)}const _=new Y({color:657926,transparent:!0,opacity:.15,side:Ct}),y=new C(new dr(n*.5,n*.85,12),_);return y.rotation.x=-Math.PI/2,y.position.y=.008,e.add(y),e.position.set(i,0,t),nt.add(e),{group:e,mushMat:o,discMat:p,sporeMat:h,spores:f,glowWorms:S,x:i,z:t,ringR:n,phase:v()*6.28,glowIntensity:0,active:!1}}function SS(i,t,e){const n=new te,s=new q({color:U.bubbleIris,emissive:U.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new C(Nn.bubble,s);n.add(o);const r=new Y({color:15650047,transparent:!0,opacity:.1}),a=new C(new Pe(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=v()*3,n.add(a);const u=new C(new Pe(.11,.003,4,10),r);u.rotation.x=-.8,u.rotation.z=1.2,n.add(u);const c=new Y({color:U.bubbleShine,transparent:!0,opacity:.5}),l=new C(new Z(.04,4,3),c);l.position.set(.05,.07,.08),n.add(l);const h=new Y({color:15658751,transparent:!0,opacity:.2}),f=new C(new Z(.025,3,3),h);f.position.set(-.06,-.04,-.06),n.add(f);const p=new Y({color:16755438,transparent:!0,opacity:.12}),m=new C(new Z(.06,4,3),p);m.position.set(.02,-.02,.01),n.add(m);const x=new Y({color:16772863,transparent:!0,opacity:.08}),d=new C(new Z(.12,5,4),x);n.add(d);const g=[16764125,13426175,14548940];for(let T=0;T<3;T++){const M=new Y({color:g[T],transparent:!0,opacity:.06}),w=new C(new Pe(.14-T*.02,.002,4,8),M);w.position.y=-.04+T*.04,w.rotation.x=Math.PI/2,n.add(w)}const S=new Y({color:16777215,transparent:!0,opacity:.6});for(let T=0;T<3;T++){const M=v()*6.28,w=v()*Math.PI-Math.PI/2,R=new C(new Z(.003,3,3),S);R.position.set(Math.cos(M)*Math.cos(w)*.14,Math.sin(w)*.14,Math.sin(M)*Math.cos(w)*.14),n.add(R)}const _=new Y({color:11189196,transparent:!0,opacity:.1}),y=new C(new Z(.015,3,3),_);y.position.set((v()-.5)*.04,(v()-.5)*.04,(v()-.5)*.04),n.add(y);const A=new Y({color:U.bubbleIris,transparent:!0,opacity:.15}),E=new C(new Z(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const b=.6+v()*.8;return n.scale.setScalar(b),n.position.set(i,t,e),nt.add(n),{group:n,shellMat:s,phase:v()*6.28,driftAng:v()*6.28,driftSpeed:.3+v()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+v()*.4,popped:!1,popTimer:0,sc:b}}function bS(i,t){const e=new te,n=1.5+v()*1,s=new q({color:329746,roughness:.9}),o=new C(new Ge(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new q({color:U.pondWater,emissive:U.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new C(new Ge(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const u=new q({color:3816002,roughness:.85}),c=5+Math.floor(v()*4);for(let D=0;D<c;D++){const z=D/c*6.28+v()*.3,H=n+v()*.2-.1,k=.06+v()*.08,O=new C(new Z(k,4,3),u);O.scale.set(1+v()*.5,.4+v()*.3,1+v()*.5),O.position.set(Math.cos(z)*H,k*.2,Math.sin(z)*H),O.rotation.set(v(),v(),v()),e.add(O)}const l=new q({color:1725728,roughness:.7,side:Ct});for(let D=0;D<3;D++){const z=v()*6.28,H=n*.85+v()*.2;for(let k=0;k<3;k++){const O=new C(new se(.015,.15+v()*.1),l);O.position.set(Math.cos(z)*H+(v()-.5)*.05,.08,Math.sin(z)*H+(v()-.5)*.05),O.rotation.y=v()*3,O.rotation.x=-.2,e.add(O)}}const h=new Y({color:11197934,transparent:!0,opacity:.08}),f=[];for(let D=0;D<3;D++){const z=new C(new Pe(1,.004,4,20),h.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),f.push({mesh:z,phase:D/3})}const p=new q({color:U.lilyPad,roughness:.6,side:Ct}),m=4+Math.floor(v()*2),x=[];for(let D=0;D<m;D++){const z=v()*6.28,H=v()*n*.6,k=.15+v()*.15,O=new C(new Ge(k,8),p);O.rotation.x=-Math.PI/2,O.position.set(Math.cos(z)*H,.05,Math.sin(z)*H),e.add(O);const G=new Y({color:1724448,transparent:!0,opacity:.3}),et=new C(new gt(.002,.002,k*1.5,3),G);et.position.set(Math.cos(z)*H,.052,Math.sin(z)*H),et.rotation.x=Math.PI/2,et.rotation.z=v()*3,e.add(et),x.push({mesh:O,phase:v()*6.28})}const d=new q({color:U.lilyFlower,emissive:U.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Ct}),g=.08;for(let D=0;D<6;D++){const z=D/6*6.28,H=new C(new se(.06,.05),d);H.position.set(x[0].mesh.position.x+Math.cos(z)*.05,g,x[0].mesh.position.z+Math.sin(z)*.05),H.rotation.x=-1,H.rotation.y=-z,e.add(H)}const S=new q({color:16777130,emissive:U.lilyGlow,emissiveIntensity:.8}),_=new C(new Z(.025,4,3),S);if(_.position.set(x[0].mesh.position.x,g+.02,x[0].mesh.position.z),e.add(_),x.length>2){const D=new q({color:U.lilyFlower,emissive:U.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new C(new Z(.03,5,4),D);z.scale.set(.8,1.2,.8),z.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(z)}const y=new q({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const z=v()*6.28,H=v()*n*.7,k=new C(new Z(.02+v()*.025,4,3),y);k.scale.set(1+v()*.5,.4,1+v()*.5),k.position.set(Math.cos(z)*H,.015,Math.sin(z)*H),e.add(k)}const A=new Y({color:2761752,transparent:!0,opacity:.12,side:Ct});for(let D=0;D<3;D++){const z=v()*6.28,H=v()*n*.5,k=new C(new Ge(.08+v()*.06,5),A);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(z)*H,.012,Math.sin(z)*H),e.add(k)}const E=new q({color:1122837,roughness:.7,transparent:!0,opacity:.4}),b=[];for(let D=0;D<2;D++){const z=v()*6.28,H=v()*n*.4,k=new C(new Z(.012,4,3),E);k.scale.set(.8,.5,1.3),k.position.set(Math.cos(z)*H,.04,Math.sin(z)*H),e.add(k);const O=new C(new gt(.002,.001,.025,3),E);O.position.set(Math.cos(z)*H-Math.cos(z)*.02,.04,Math.sin(z)*H-Math.sin(z)*.02),O.rotation.z=Math.PI/2,O.rotation.y=z,e.add(O),b.push({body:k,tail:O,ang:z,orbR:.15+v()*n*.35,speed:.3+v()*.4})}const T=new Y({color:2250016,transparent:!0,opacity:.1,side:Ct});for(let D=0;D<3;D++){const z=v()*6.28,H=n*.7+v()*n*.25,k=new C(new Ge(.06+v()*.04,5),T);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(z)*H,.032,Math.sin(z)*H),e.add(k)}const M=new Y({color:13426158,transparent:!0,opacity:.06}),w=new C(new Pe(n-.05,.01,4,16),M);w.rotation.x=Math.PI/2,w.position.y=.035,e.add(w);const R=new q({color:4861976,roughness:.8,side:Ct,transparent:!0,opacity:.6}),L=new C(new Ge(.03,5),R);return L.rotation.x=-Math.PI/2,L.position.set((v()-.5)*n*.5,.04,(v()-.5)*n*.5),e.add(L),e.position.set(i,0,t),nt.add(e),{group:e,waterMat:r,flMat:d,pads:x,ripples:f,tadpoles:b,x:i,z:t,phase:v()*6.28,pondR:n}}function TS(i,t){const e=new te,n=new Y({color:U.orbGold}),s=new C(new Z(.2,10,8),n);e.add(s);const o=new Y({color:16777215}),r=new C(new Z(.06,6,4),o);e.add(r);const a=new Y({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),u=new C(new fr(.15,0),a);e.add(u);const c=new Y({color:U.orbGlow,transparent:!0,opacity:.5}),l=new C(new Z(.35,8,6),c);e.add(l);const h=new Y({color:U.orbGlow,transparent:!0,opacity:.3});for(let b=0;b<8;b++){const T=b/8*6.28,M=new C(new Pn(.02,.25,3),h);M.position.set(Math.cos(T)*.3,Math.sin(T*2)*.05,Math.sin(T)*.3),M.rotation.z=-T+Math.PI/2,M.rotation.y=T,e.add(M)}const f=new Y({color:U.orbInner,transparent:!0,opacity:.15}),p=new C(new Z(.6,8,5),f);e.add(p);for(let b=0;b<6;b++){const T=new C(new Z(.03,4,3),new Y({color:16777215})),M=b/6*6.28;T.position.set(Math.cos(M)*.4,Math.sin(M*2)*.1,Math.sin(M)*.4),e.add(T)}const m=new Y({color:U.orbGold,transparent:!0,opacity:.7});for(let b=0;b<4;b++){const T=b/4*6.28+.4,M=new C(new Z(.015,3,3),m);M.position.set(Math.cos(T)*.5,0,Math.sin(T)*.5),e.add(M)}const x=new Y({color:16768426,transparent:!0,opacity:.12});for(let b=0;b<3;b++){const T=new C(new Pe(.28,.003,4,12),x);T.rotation.set(b*1.05,b*.7,0),e.add(T)}const d=new Y({color:U.orbGlow,transparent:!0,opacity:.08}),g=new C(new Pe(.4,.004,4,16),d);g.rotation.x=Math.PI/2,e.add(g);const S=new Y({color:16772812,transparent:!0,opacity:.15}),_=new C(new Pe(.25,.012,4,10),S);_.rotation.x=Math.PI/2,e.add(_);const y=new Y({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<6;b++){const T=v()*6.28,M=v()*Math.PI-Math.PI/2,w=new C(new Z(.008,3,3),y);w.position.set(Math.cos(T)*Math.cos(M)*.2,Math.sin(M)*.2,Math.sin(T)*Math.cos(M)*.2),e.add(w)}const A=new Y({color:U.orbGlow,transparent:!0,opacity:.1,side:Ct}),E=new C(new Ge(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),nt.add(e),{group:e,coreMat:n,glowMat:c,hazeMat:f,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:v()*6.28,laserLine:null,laserMat:null}}function ES(i,t){const e=new te,n=new q({color:U.rockBase,roughness:.85,metalness:.05}),s=new q({color:U.rockLight,roughness:.8,metalness:.05}),o=new q({color:U.rockMoss,emissive:U.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+v()*.5,a=new C(new Z(r,8,6),v()<.6?n:s),u=.4+v()*.4;a.scale.set(1+v()*.6,u,1+v()*.6),a.position.y=r*u*.35,a.rotation.set(v()*.5,v()*3,v()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=1+Math.floor(v()*3);for(let E=0;E<c;E++){const b=v()*6.28,T=r*.6+v()*r*.5,M=r*.3+v()*r*.4,w=new C(new Z(M,5,4),v()<.5?n:s),R=.3+v()*.4;w.scale.set(1+v()*.5,R,1+v()*.5),w.position.set(Math.cos(b)*T,M*R*.3,Math.sin(b)*T),w.rotation.set(v()*.8,v()*3,v()*.5),e.add(w)}const l=2+Math.floor(v()*3);for(let E=0;E<l;E++){const b=v()*6.28,T=v()*r*.6,M=r*.15+v()*r*.2,w=new C(new Z(M,4,3),o);w.scale.set(1.5,.2,1.5),w.position.set(Math.cos(b)*T,r*.35+v()*.05,Math.sin(b)*T),e.add(w)}const h=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const b=new q({color:h[Math.floor(v()*h.length)],roughness:.9,transparent:!0,opacity:.5}),T=v()*6.28,M=new C(new Z(r*.06+v()*r*.08,3,3),b);M.scale.set(2,.15,2),M.position.set(Math.cos(T)*r*.5,r*.25+v()*.1,Math.sin(T)*r*.5),e.add(M)}const f=new Y({color:1381656,transparent:!0,opacity:.35}),p=2+Math.floor(v()*3);for(let E=0;E<p;E++){const b=v()*6.28,T=r*.3+v()*r*.4,M=new C(new gt(.003,.001,T,3),f),w=r*.3+v()*r*.2;M.position.set(Math.cos(b)*w,r*.2+v()*r*.15,Math.sin(b)*w),M.rotation.set(v()*.5,b,Math.PI/2+v()*.4),e.add(M)}const m=new Y({color:660752,transparent:!0,opacity:.2,side:Ct}),x=1+Math.floor(v()*2);for(let E=0;E<x;E++){const b=v()*6.28,T=r*.3+v()*r*.3,M=new C(new se(.02+v()*.015,T),m);M.position.set(Math.cos(b)*r*.45,r*.15,Math.sin(b)*r*.45),M.rotation.y=-b,e.add(M)}const d=[],g=new Y({color:8965375,transparent:!0,opacity:.4});if(v()<.5){const E=2+Math.floor(v()*3);for(let b=0;b<E;b++){const T=v()*6.28,M=r*.25+v()*r*.25,w=new C(new Z(.006,3,3),g);w.position.set(Math.cos(T)*M,r*.15+v()*r*.2,Math.sin(T)*M),e.add(w),d.push(w)}}const S=new Y({color:657926,transparent:!0,opacity:.12,side:Ct}),_=new C(new dr(r*.5,r*1,8),S);_.rotation.x=-Math.PI/2,_.position.y=.005,e.add(_);const y=new q({color:3816e3,roughness:.9}),A=4+Math.floor(v()*3);for(let E=0;E<A;E++){const b=v()*6.28,T=r*.5+v()*r*.6,M=.03+v()*.05,w=new C(new Z(M,3,3),y);w.scale.set(1+v()*.5,.4,1+v()*.5),w.position.set(Math.cos(b)*T,M*.15,Math.sin(b)*T),e.add(w)}if(v()<.6){const E=new q({color:3385941,emissive:U.grassTip,emissiveIntensity:.05,roughness:.7,side:Ct});for(let b=0;b<3;b++){const T=v()*6.28,M=new C(new se(.015,.08+v()*.06),E);M.position.set(Math.cos(T)*r*.3,r*.3,Math.sin(T)*r*.3),M.rotation.y=v()*3,M.rotation.x=-.2-v()*.3,e.add(M)}}return e.position.set(i,0,t),nt.add(e),{group:e,x:i,z:t,colR:r*.8,sparkles:d,sparkleMat:g}}let Jp=null,Qp=null,tm=null,em=null,Nh=[];function AS(){return Jp}function RS(){return Qp}function CS(){return tm}function PS(){return em}function IS(){return Nh}function LS(){const i=new te,t=new q({color:U.obeliskBlack,roughness:.2,metalness:.8,emissive:U.obeliskPink,emissiveIntensity:0});Qp=t;const e=new C(new gt(1.2,1.8,Ce,4),t);e.position.y=Ce/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new Y({color:3351108,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const M=T/4*6.28+Math.PI/4,w=new C(new gt(.03,.04,Ce*.9,3),n);w.position.set(Math.cos(M)*1.55,Ce*.45,Math.sin(M)*1.55),i.add(w)}const s=new Y({color:U.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const M=T/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const L=6+R*4,D=new C(new gt(.015,.015,.8,3),s);D.position.set(Math.cos(M)*1.6,L,Math.sin(M)*1.6),D.rotation.z=Math.PI/2,D.rotation.y=-M,D.visible=!1,i.add(D)}const w=new C(new gt(.012,.012,2.5,3),s);w.position.set(Math.cos(M)*1.6,12,Math.sin(M)*1.6),w.visible=!1,i.add(w)}const o=new q({color:U.obeliskBlack,roughness:.1,metalness:.9,emissive:U.obeliskPink,emissiveIntensity:0});tm=o;const r=new C(new Pn(1.3,3,4),o);r.position.y=Ce+1.5,r.rotation.y=Math.PI/4,i.add(r);const a=new Y({color:U.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const M=T/4*6.28+Math.PI/4,w=new C(new gt(.02,.02,3.2,3),a);w.position.set(Math.cos(M)*.8,Ce+1.5,Math.sin(M)*.8),w.rotation.z=.35*(M<3.14?1:-1),w.rotation.y=-M,w.visible=!1,i.add(w)}for(let T=0;T<5;T++){const M=new C(new Pe(1.85-T*.02,.04,6,4),new Y({color:2236979}));M.position.y=4+T*5,M.rotation.x=Math.PI/2,i.add(M)}const u=new q({color:1118488,roughness:.3,metalness:.7}),c=new C(new gt(2.2,2.5,.6,4),u);c.position.y=.3,c.rotation.y=Math.PI/4,i.add(c);const l=new C(new gt(2.8,3,.4,4),u);l.position.y=.05,l.rotation.y=Math.PI/4,i.add(l);const h=new Y({color:U.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<8;T++){const M=T/8*6.28,w=new C(new Z(.06,4,3),h);w.position.set(Math.cos(M)*2.5,Ce*.7+T*.5,Math.sin(M)*2.5),w.visible=!1,i.add(w)}const f=new Y({color:1710626,transparent:!0,opacity:.08});for(let T=0;T<6;T++){const M=v()*6.28,w=2+v()*Ce*.7,R=new C(new gt(.008,.008,.5+v()*.5,3),f);R.position.set(Math.cos(M)*1.6,w,Math.sin(M)*1.6),R.rotation.z=(v()-.5)*.8,R.rotation.y=-M,i.add(R)}const p=new q({color:921108,roughness:.5,metalness:.4});for(let T=0;T<12;T++){const M=v()*6.28,w=3+v()*2,R=.15+v()*.25,L=new C(new Z(R,4,3),p);L.scale.set(1+v()*.5,.3+v()*.3,1+v()*.5),L.position.set(Math.cos(M)*w,R*.15,Math.sin(M)*w),L.rotation.set(v(),v(),v()),i.add(L)}const m=new Y({color:U.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const M=T/4*6.28+Math.PI/4;for(let w=0;w<5;w++){const R=5+w*3.5+v()*.5,L=(v()-.5)*.4,D=new C(new Z(.04,4,3),m);D.position.set(Math.cos(M)*1.58+Math.cos(M+1.57)*L,R,Math.sin(M)*1.58+Math.sin(M+1.57)*L),D.visible=!1,i.add(D)}}const x=new Y({color:U.obeliskPink,transparent:!0,opacity:.8,blending:Qt,depthWrite:!1}),d=new C(new Z(.5,12,8),x);d.position.y=Ce+3,i.add(d);const g=new Y({color:U.obeliskPink,transparent:!0,opacity:.2,blending:Qt,depthWrite:!1}),S=new C(new Z(.9,8,6),g);S.position.y=Ce+3,i.add(S),em={mesh:d,haze:S,mat:x,hazeMat:g},Nh=[];const _=[.8,1.1,1.4,1.8],y=[11158783,10040302,12277247,8921821];for(let T=0;T<4;T++){const M=new Y({color:y[T],transparent:!0,opacity:.4,blending:Qt,depthWrite:!1,side:Ct}),w=new C(new Pe(_[T],.02,6,24),M);w.position.y=Ce+3,w.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),i.add(w),Nh.push({mesh:w,mat:M,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new Y({color:0,transparent:!0,opacity:.15,side:Ct}),E=new C(new Ge(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,i.add(E),i.position.set(0,-Ce,0),nt.add(i),Jp=i;const b=new vr(8939212,0,30);i.add(b),b.position.set(0,Ce+1,0)}let nm=null,im=null;function DS(){return nm}function US(){return im}function NS(){const i=new q({color:U.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});im=i;const t=new Hc;t.absarc(0,0,6,0,6.28,!1);const e=new kc;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new ca(t,24),s=new C(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,nt.add(s),nm=s;const o=new Y({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const m=p/12*6.28+v()*.3,x=3.5+v()*2,d=new C(new Z(.04+v()*.04,4,3),o);d.scale.set(1.2,.4,1.2),d.position.set(Math.cos(m)*x,.02,Math.sin(m)*x),d.visible=!1,nt.add(d)}const r=new Y({color:13426158,transparent:!0,opacity:0,side:Ct});for(let p=0;p<6;p++){const m=p/6*6.28+v()*.5,x=new C(new Ge(.12+v()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(m)*3.3,.06,Math.sin(m)*3.3),x.visible=!1,nt.add(x)}const a=new Y({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const m=p/8*6.28,x=4+v()*1.5,d=new C(new gt(.003,.003,.4,3),a);d.position.set(Math.cos(m)*x,.055,Math.sin(m)*x),d.rotation.x=Math.PI/2,d.rotation.z=m+Math.PI/2,d.visible=!1,nt.add(d)}const u=new Y({color:264208,transparent:!0,opacity:0,side:Ct}),c=new Hc;c.absarc(0,0,5.2,0,6.28,!1);const l=new kc;l.absarc(0,0,3.8,0,6.28,!0),c.holes.push(l);const h=new ca(c,16),f=new C(h,u);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,nt.add(f)}const ha=[];function w0(i,t,e,n,s){const o=[],r=[],a=[];for(let c=0;c<e;c++){const l=i[c],h=i[c+1],f=h.x-l.x;h.y-l.y;const p=h.z-l.z,m=Math.sqrt(f*f+p*p)||1,x=-p/m,d=f/m,g=(c+.5)/e,S=.7+Math.sin(g*Math.PI)*.5,_=t*S/2,y=[l.x+x*_,l.y,l.z+d*_],A=[l.x-x*_,l.y,l.z-d*_],E=[h.x+x*_,h.y,h.z+d*_],b=[h.x-x*_,h.y,h.z-d*_];o.push(...y,...E,...A,...A,...E,...b);const T=c/e,M=(c+1)/e;if(a.push(T,0,M,0,T,1,T,1,M,0,M,1),s){const L=.85+Math.sin(g*Math.PI*3)*.15,D=1.2*L,z=.6*L;r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*z,s.g*z,s.b*z),r.push(s.r*z,s.g*z,s.b*z),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*z,s.g*z,s.b*z)}}const u=new Ee;return u.setAttribute("position",new Vt(o,3)),u.setAttribute("uv",new Vt(a,2)),r&&u.setAttribute("color",new Vt(r,3)),u.computeVertexNormals(),u}function zS(){for(let u=0;u<6;u++){const c=U.rainbow[u],l=u/6*6.28,h=6+u*.8,f=Ce+6+u*2.5,p=1-u*.05,m=[],x=32;for(let H=0;H<=x;H++){const k=H/x,O=l+k*Math.PI,G=Math.cos(O)*h,et=Math.sin(O)*h,ct=Math.sin(k*Math.PI)*f;m.push(new F(G,ct,et))}const d=new ot(c),g=w0(m,p,x,!0,d),S=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Ct,depthWrite:!1,blending:Qt}),_=new C(g,S);_.visible=!1,nt.add(_);const y=new so(m),A=new Y({color:16777215,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),E=new cn(y,x,.03,4,!1),b=new C(E,A);b.visible=!1,nt.add(b);const T=[],M=new Y({color:16777215,transparent:!0,opacity:0,blending:Qt,depthWrite:!1});for(let H=0;H<8;H++){const k=new C(new Z(.06,4,3),M.clone());k.visible=!1,nt.add(k),T.push({mesh:k,mat:k.material,phase:H/8,speed:.15+Math.random()*.1})}const w=new Y({color:c,transparent:!0,opacity:0,side:Ct,blending:Qt}),R=m[0],L=m[m.length-1],D=new C(new Ge(1.2,8),w);D.rotation.x=-Math.PI/2,D.position.set(R.x,.03,R.z),D.visible=!1,nt.add(D);const z=new C(new Ge(1.2,8),w.clone());z.rotation.x=-Math.PI/2,z.position.set(L.x,.03,L.z),z.visible=!1,nt.add(z),ha.push({mesh:_,mat:S,coreLine:b,coreMat:A,curve:y,sparkles:T,pools:[D,z],poolMat:w,targetOpacity:0})}const i=[],t=10,e=Ce+14,n=32;for(let u=0;u<=n;u++){const c=u/n,l=c*Math.PI;i.push(new F(Math.cos(l)*t,Math.sin(c*Math.PI)*e,Math.sin(l)*t))}const s=new ot(15654399),o=w0(i,1.5,n,!0,s),r=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Ct,depthWrite:!1,blending:Qt}),a=new C(o,r);a.visible=!1,nt.add(a),ha.push({mesh:a,mat:r,targetOpacity:0})}function FS(i){for(let t=0;t<ha.length;t++){const e=ha[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const s=e.sparkles[n];s.phase+=s.speed*.016,s.phase>1&&(s.phase-=1);const o=e.curve.getPoint(s.phase);s.mesh.position.copy(o),s.mesh.visible=e.mesh.visible;const r=Math.sin(i*8+n*2.1)*.5+.5;s.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let Sn=null;const vi=[],gn=new he,Qr=new ot;function OS(i){const t=new Y({color:16777215,transparent:!0,opacity:1});Sn=new oi(Nn.fly,t,i),Sn.instanceMatrix.setUsage(we),Sn.instanceColor=new Pi(new Float32Array(i*3),3),Sn.instanceColor.setUsage(we),gn.scale.setScalar(0),gn.updateMatrix();for(let e=0;e<i;e++){Sn.setMatrixAt(e,gn.matrix);const n=e%3===0?U.fireflyB:U.firefly;Qr.setHex(n),Sn.setColorAt(e,Qr),vi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}Sn.count=i,Sn.frustumCulled=!1,nt.add(Sn)}function _c(i,t,e,n){let s=null;for(let o=0;o<vi.length;o++)if(!vi[o].active){s=vi[o];break}if(!s){let o=1/0;for(let r=0;r<vi.length;r++)vi[r].life<o&&(o=vi[r].life,s=vi[r])}s.x=i,s.y=t+.5+Math.random()*3,s.z=e,s.vx=(Math.random()-.5)*2,s.vy=Math.random()-.5,s.vz=(Math.random()-.5)*2,s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function sm(i,t){let e=0,n=!1;for(let s=0;s<vi.length;s++){const o=vi[s];if(!o.active){gn.position.set(0,-100,0),gn.scale.setScalar(0),gn.updateMatrix(),Sn.setMatrixAt(s,gn.matrix);continue}if(o.life-=i,o.life<=0){o.active=!1,gn.position.set(0,-100,0),gn.scale.setScalar(0),gn.updateMatrix(),Sn.setMatrixAt(s,gn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*i,o.vx+=Math.cos(o.wander)*1.5*i,o.vz+=Math.sin(o.wander)*1.5*i,o.vy+=Math.sin(t*2+o.phase)*i,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=Bt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*i);const a=Math.sin(t*3+o.phase)*.5+.5,c=o.life/o.max*(.4+a*.6),l=.6+a*.6;gn.position.set(o.x,o.y,o.z),gn.scale.setScalar(l),gn.updateMatrix(),Sn.setMatrixAt(s,gn.matrix),Qr.setHex(o.colorHex),Qr.multiplyScalar(c),Sn.setColorAt(s,Qr),n=!0}return Sn.instanceMatrix.needsUpdate=!0,n&&(Sn.instanceColor.needsUpdate=!0),e}let bn=null;const Mi=[],xn=new he,$c=new ot,BS=new ot(U.spore);function GS(i){const t=new Y({color:16777215,transparent:!0,opacity:1});bn=new oi(Nn.spore,t,i),bn.instanceMatrix.setUsage(we),bn.instanceColor=new Pi(new Float32Array(i*3),3),bn.instanceColor.setUsage(we),xn.scale.setScalar(0),xn.updateMatrix();for(let e=0;e<i;e++)bn.setMatrixAt(e,xn.matrix),$c.setHex(U.spore),bn.setColorAt(e,$c),Mi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});bn.count=i,bn.frustumCulled=!1,nt.add(bn)}function kS(i,t,e){let n=null;for(let s=0;s<Mi.length;s++)if(!Mi[s].active){n=Mi[s];break}if(!n){let s=1/0;for(let o=0;o<Mi.length;o++)Mi[o].life<s&&(s=Mi[o].life,n=Mi[o])}n.x=i,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let om=0,rm=0;function HS(i,t){om=i,rm=t}function VS(i){let t=0,e=!1;for(let n=0;n<Mi.length;n++){const s=Mi[n];if(!s.active){xn.position.set(0,-100,0),xn.scale.setScalar(0),xn.updateMatrix(),bn.setMatrixAt(n,xn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,xn.position.set(0,-100,0),xn.scale.setScalar(0),xn.updateMatrix(),bn.setMatrixAt(n,xn.matrix);continue}t++,s.vy+=.3*i,s.vx+=om*.3*i,s.vz+=rm*.3*i,s.vx*=.997,s.vy*=.997,s.vz*=.997,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const o=s.life/s.max*.7;xn.position.set(s.x,s.y,s.z),xn.scale.setScalar(1),xn.updateMatrix(),bn.setMatrixAt(n,xn.matrix),$c.copy(BS).multiplyScalar(o),bn.setColorAt(n,$c),e=!0}return bn.instanceMatrix.needsUpdate=!0,e&&(bn.instanceColor.needsUpdate=!0),t}let Tn=null;const Ko=[];let ou=0;const vn=new he,jc=new ot,am=new ot(U.starMote);function WS(i){const t=new Y({color:16777215,transparent:!0,opacity:1});Tn=new oi(Nn.starMote,t,i),Tn.instanceMatrix.setUsage(we),Tn.instanceColor=new Pi(new Float32Array(i*3),3),Tn.instanceColor.setUsage(we),vn.scale.setScalar(0),vn.updateMatrix();for(let e=0;e<i;e++)Tn.setMatrixAt(e,vn.matrix),jc.copy(am),Tn.setColorAt(e,jc),Ko.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});Tn.count=i,Tn.frustumCulled=!1,nt.add(Tn)}function XS(i){let t=null;for(let e=0;e<Ko.length;e++)if(!Ko[e].active){t=Ko[e];break}t&&(t.x=i.x+(Math.random()-.5)*60,t.z=i.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function cm(i,t,e){ou+=i,ou>.15&&(ou=0,XS(e));let n=!1;for(let s=0;s<Ko.length;s++){const o=Ko[s];if(!o.active){vn.position.set(0,-100,0),vn.scale.setScalar(0),vn.updateMatrix(),Tn.setMatrixAt(s,vn.matrix);continue}if(o.life-=i,o.life<=0||o.y<.5){o.active=!1,vn.position.set(0,-100,0),vn.scale.setScalar(0),vn.updateMatrix(),Tn.setMatrixAt(s,vn.matrix);continue}o.y+=o.vy*i,o.drift+=(Math.random()-.5)*.5*i,o.x+=Math.sin(o.drift)*.1*i,o.z+=Math.cos(o.drift)*.08*i;const r=o.life/o.max,a=Math.sin(t*4+s)*.3+.7,u=r*a*.7,c=.5+a*.5;vn.position.set(o.x,o.y,o.z),vn.scale.setScalar(c),vn.updateMatrix(),Tn.setMatrixAt(s,vn.matrix),jc.copy(am).multiplyScalar(u),Tn.setColorAt(s,jc),n=!0}Tn.instanceMatrix.needsUpdate=!0,n&&(Tn.instanceColor.needsUpdate=!0)}let En=null;const Jo=[],Mn=new he,Kc=new ot,lm=new ot(8956535);function qS(i){const t=new Y({color:16777215,transparent:!0,opacity:1});En=new oi(Nn.dustMote,t,i),En.instanceMatrix.setUsage(we),En.instanceColor=new Pi(new Float32Array(i*3),3),En.instanceColor.setUsage(we),Mn.scale.setScalar(0),Mn.updateMatrix();for(let e=0;e<i;e++)En.setMatrixAt(e,Mn.matrix),Kc.copy(lm),En.setColorAt(e,Kc),Jo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});En.count=i,En.frustumCulled=!1,nt.add(En)}function S0(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<Jo.length;a++)if(!Jo[a].active){s=Jo[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.x=i+Math.cos(o)*.2,s.y=Bt(i,t)+.1,s.z=t+Math.sin(o)*.2,s.vx=Math.cos(o)*r,s.vy=.5+Math.random()*1.5,s.vz=Math.sin(o)*r,s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function YS(i){let t=!1;for(let e=0;e<Jo.length;e++){const n=Jo[e];if(!n.active){Mn.position.set(0,-100,0),Mn.scale.setScalar(0),Mn.updateMatrix(),En.setMatrixAt(e,Mn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,Mn.position.set(0,-100,0),Mn.scale.setScalar(0),Mn.updateMatrix(),En.setMatrixAt(e,Mn.matrix);continue}n.vy-=3*i,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=Bt(n.x,n.z)+.05;n.y<s&&(n.y=s,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;Mn.position.set(n.x,n.y,n.z),Mn.scale.setScalar(1),Mn.updateMatrix(),En.setMatrixAt(e,Mn.matrix),Kc.copy(lm).multiplyScalar(o),En.setColorAt(e,Kc),t=!0}En.instanceMatrix.needsUpdate=!0,t&&(En.instanceColor.needsUpdate=!0)}let An=null;const Qo=[],_n=new he,Jc=new ot,um=new ot(U.bubblePop),ZS=new Z(.02,3,3);function $S(i){const t=new Y({color:16777215,transparent:!0,opacity:1});An=new oi(ZS,t,i),An.instanceMatrix.setUsage(we),An.instanceColor=new Pi(new Float32Array(i*3),3),An.instanceColor.setUsage(we),_n.scale.setScalar(0),_n.updateMatrix();for(let e=0;e<i;e++)An.setMatrixAt(e,_n.matrix),Jc.copy(um),An.setColorAt(e,Jc),Qo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});An.count=i,An.frustumCulled=!1,nt.add(An)}function jS(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let c=0;c<Qo.length;c++)if(!Qo[c].active){o=Qo[c];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,u=1+Math.random()*2;o.x=i,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*u,o.vy=Math.cos(a)*u,o.vz=Math.sin(r)*Math.sin(a)*u,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function KS(i){let t=!1;for(let e=0;e<Qo.length;e++){const n=Qo[e];if(!n.active){_n.position.set(0,-100,0),_n.scale.setScalar(0),_n.updateMatrix(),An.setMatrixAt(e,_n.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,_n.position.set(0,-100,0),_n.scale.setScalar(0),_n.updateMatrix(),An.setMatrixAt(e,_n.matrix);continue}n.vy-=2*i,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=n.life/n.max*.8;_n.position.set(n.x,n.y,n.z),_n.scale.setScalar(1),_n.updateMatrix(),An.setMatrixAt(e,_n.matrix),Jc.copy(um).multiplyScalar(s),An.setColorAt(e,Jc),t=!0}An.instanceMatrix.needsUpdate=!0,t&&(An.instanceColor.needsUpdate=!0)}let Rn=null;const tr=[],rn=new he,Qc=new ot,hm=[new ot(U.leafGlow),new ot(3394662),new ot(2271880),new ot(5636044),new ot(4513262)];let fm=0,dm=0;function JS(i,t,e){fm=i,dm=t}function QS(i){const t=new se(.12,.08),e=new Y({color:16777215,transparent:!0,opacity:1,side:Ct,depthWrite:!1,blending:Qt});Rn=new oi(t,e,i),Rn.instanceMatrix.setUsage(we),Rn.instanceColor=new Pi(new Float32Array(i*3),3),Rn.instanceColor.setUsage(we),rn.scale.setScalar(0),rn.updateMatrix();for(let n=0;n<i;n++)Rn.setMatrixAt(n,rn.matrix),Qc.setHex(0),Rn.setColorAt(n,Qc),tr.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});Rn.count=i,Rn.frustumCulled=!1,nt.add(Rn)}function t2(i,t,e){let n=null;for(let o=0;o<tr.length;o++)if(!tr[o].active){n=tr[o];break}if(!n)return;n.x=i+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const s=Math.random()*6.28;n.vx=Math.cos(s)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(s)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*hm.length)}function e2(i,t){let e=!1;for(let n=0;n<tr.length;n++){const s=tr[n];if(!s.active){rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),Rn.setMatrixAt(n,rn.matrix);continue}if(s.life-=i,s.life<=0||s.y<-.5){s.active=!1,rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),Rn.setMatrixAt(n,rn.matrix);continue}s.vx+=fm*.4*i,s.vz+=dm*.4*i,s.vx+=Math.sin(t*3+n*1.7)*.5*i,s.vz+=Math.cos(t*2.5+n*2.1)*.3*i,s.vy-=.3*i,s.vx*=.995,s.vy=Math.max(s.vy,-.8),s.vz*=.995,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.rx+=s.rvx*i,s.ry+=s.rvy*i,s.rz+=s.rvz*i;const o=s.life/s.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;rn.position.set(s.x,s.y,s.z),rn.rotation.set(s.rx,s.ry,s.rz),rn.scale.setScalar(a),rn.updateMatrix(),Rn.setMatrixAt(n,rn.matrix),Qc.copy(hm[s.colorIdx]).multiplyScalar(r),Rn.setColorAt(n,Qc),e=!0}Rn.instanceMatrix.needsUpdate=!0,e&&(Rn.instanceColor.needsUpdate=!0)}const ic=40,zh=8;let an=null;const _i=[],Hn=new he,gs=new ot,pm=new ot(4513194);let b0=0,T0=0,kf=!1;function n2(){const i=new Hc;return i.moveTo(0,-.18),i.quadraticCurveTo(.1,-.17,.11,-.06),i.lineTo(.1,-.02),i.lineTo(.13,.12),i.quadraticCurveTo(.125,.14,.11,.12),i.lineTo(.08,0),i.quadraticCurveTo(.05,-.02,.03,0),i.lineTo(.03,.05),i.lineTo(.02,.22),i.quadraticCurveTo(0,.245,-.02,.22),i.lineTo(-.03,.05),i.lineTo(-.03,0),i.quadraticCurveTo(-.05,-.02,-.08,0),i.lineTo(-.11,.12),i.quadraticCurveTo(-.125,.14,-.13,.12),i.lineTo(-.1,-.02),i.lineTo(-.11,-.06),i.quadraticCurveTo(-.1,-.17,0,-.18),new ca(i)}function i2(){const i=n2(),t=new Y({color:16777215,transparent:!0,opacity:1,blending:Qt,depthWrite:!1,side:Ct});an=new oi(i,t,ic),an.instanceMatrix.setUsage(we),an.instanceColor=new Pi(new Float32Array(ic*3),3),an.instanceColor.setUsage(we),Hn.position.set(0,-100,0),Hn.scale.setScalar(0),Hn.updateMatrix();for(let e=0;e<ic;e++)an.setMatrixAt(e,Hn.matrix),gs.setScalar(0),an.setColorAt(e,gs),_i.push({active:!1,life:0,maxLife:zh,x:0,z:0});an.count=ic,an.frustumCulled=!1,nt.add(an),kf=!0}function s2(i,t,e,n){if(!kf)return;const s=i-b0,o=t-T0;if(s*s+o*o<(n?.25:.64))return;b0=i,T0=t;let u=null,c=-1;for(let d=0;d<_i.length;d++)if(!_i[d].active){u=_i[d],c=d;break}if(!u){let d=1/0;for(let g=0;g<_i.length;g++)_i[g].life<d&&(d=_i[g].life,u=_i[g],c=g)}const l=Bt(i,t);u.active=!0,u.life=zh,u.maxLife=zh,u.x=i,u.z=t;const h=c%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*h,p=Math.cos(e+Math.PI/2)*.12*h,m=n?1.15:1;Hn.position.set(i+f,l+.04,t+p),Hn.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Hn.scale.set(m,m,m),Hn.updateMatrix(),an.setMatrixAt(c,Hn.matrix);const x=n?1.2:.85;gs.copy(pm).multiplyScalar(x),an.setColorAt(c,gs)}function o2(i,t){if(!kf)return;const e=1+(t||0)*1.5;let n=!1;for(let s=0;s<_i.length;s++){const o=_i[s];if(!o.active)continue;if(o.life-=i*e,o.life<=0){o.active=!1,Hn.position.set(0,-100,0),Hn.scale.setScalar(0),Hn.updateMatrix(),an.setMatrixAt(s,Hn.matrix),gs.setScalar(0),an.setColorAt(s,gs),n=!0;continue}const r=o.life/o.maxLife,a=r*r;gs.copy(pm).multiplyScalar(a*.85),an.setColorAt(s,gs),n=!0}an.instanceMatrix.needsUpdate=!0,n&&(an.instanceColor.needsUpdate=!0)}const Vn=[],ki=[];let E0=Ce+2,us=1;function A0(i){us=i}function r2(){for(let i=0;i<Vn.length;i++){const t=Vn[i];nt.remove(t.upTube),t.upTube.geometry.dispose(),t.mat.dispose(),nt.remove(t.upGlow),t.upGlow.geometry.dispose(),t.glowMat.dispose(),nt.remove(t.bendTube),t.bendTube.geometry.dispose(),t.bendMat.dispose(),nt.remove(t.bendGlow),t.bendGlow.geometry.dispose(),t.bendGlowMat.dispose()}Vn.length=0;for(let i=0;i<ki.length;i++){const t=ki[i];nt.remove(t.tube),t.tube.geometry.dispose(),t.mat.dispose(),nt.remove(t.glow),t.glow.geometry.dispose(),t.glowMat.dispose()}ki.length=0}function mm(i,t,e,n){const s=[];for(let r=0;r<=12;r++){const a=r/12,u=i*(1-a*a),c=t*(1-a*a),l=e+(n-e)*a;s.push(new F(u,l,c))}return{curve:new so(s),pts:s}}function a2(i,t,e,n){const s=n||Ce+2,o=e+15,r=new Cf(new F(i,e,t),new F(i,o,t)),a=new Y({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),u=new C(new cn(r,1,.06,6,!1),a);nt.add(u);const c=new Y({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),l=new C(new cn(r,1,.2,6,!1),c);nt.add(l);const{curve:h}=mm(i,t,o,s),f=new Y({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),p=new C(new cn(h,16,.05,6,!1),f);nt.add(p);const m=new Y({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),x=new C(new cn(h,16,.18,6,!1),m);nt.add(x);const d={upTube:u,upGlow:l,bendTube:p,bendGlow:x,mat:a,glowMat:c,bendMat:f,bendGlowMat:m,fromX:i,fromZ:t,floatY:e,skyY:o,tipY:s,animPhase:0,animTimer:0};Vn.push(d);for(let g=0;g<Vn.length-1;g++){const S=Vn[g],_=(d.skyY+S.skyY)/2,y=[];for(let w=0;w<=8;w++){const R=w/8,L=d.fromX*(1-R)+S.fromX*R,D=d.fromZ*(1-R)+S.fromZ*R,z=_+Math.sin(R*Math.PI)*3;y.push(new F(L,z,D))}const A=new so(y),E=new Y({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),b=new C(new cn(A,10,.03,4,!1),E);nt.add(b);const T=new Y({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),M=new C(new cn(A,10,.1,4,!1),T);nt.add(M),ki.push({tube:b,glow:M,mat:E,glowMat:T,opacity:0})}return d}function c2(i){for(let t=0;t<Vn.length;t++){const e=Vn[t];e.tipY=i;const{curve:n}=mm(e.fromX,e.fromZ,e.skyY,i);nt.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new cn(n,16,.05,6,!1),nt.add(e.bendTube),nt.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new cn(n,16,.18,6,!1),nt.add(e.bendGlow)}}function l2(i,t,e){const n=e||Ce+2;Math.abs(n-E0)>.1&&Vn.length>0&&(c2(n),E0=n);for(let s=0;s<Vn.length;s++){const o=Vn[s];if(o.animTimer+=i,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+s*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let s=0;s<ki.length;s++){const o=ki[s];o.opacity=Math.min(o.opacity+i*.5,.3);const r=Math.sin(t*2+s*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(us<1){for(let s=0;s<Vn.length;s++){const o=Vn[s];o.mat.opacity*=us,o.glowMat.opacity*=us,o.bendMat.opacity*=us,o.bendGlowMat.opacity*=us}for(let s=0;s<ki.length;s++)ki[s].mat.opacity*=us,ki[s].glowMat.opacity*=us}}const u2=new ot(U.orbGold),h2=new ot(16777215);let Co=0,Qe="SEEK",hs=-Ce,on=0,Hr=[],Jn=null,Ns=null,zs=null,ve=null,Fs=[],Bi=null,Fh=null,Qn=[],Vr=null,gm=null,xm=null,Oh=null,Bh=null,Gh=null,kh=null,yc=null,Hh=null,Vh=[],Wh=[],Xh=[],qh=[],Do=[],Yh=[],Uo=null,R0=0,Je=0,gi=[],Go=null,C0=!1,P0=!1;const ko=200;let ni=null;const Hf=[];let vm=!1;function f2(){if(ni)return;const i=new Ee,t=new Float32Array(ko*3),e=new Float32Array(ko*3),n=new Float32Array(ko);i.setAttribute("position",new Oe(t,3)),i.setAttribute("color",new Oe(e,3)),i.setAttribute("size",new Oe(n,1)),i.attributes.position.setUsage(we),i.attributes.color.setUsage(we),i.attributes.size.setUsage(we);const s=new Ef({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:Qt,depthWrite:!1,sizeAttenuation:!0});ni=new xp(i,s),ni.visible=!1,nt.add(ni);const o=new ot(U.obeliskPink),r=new ot(11158783);for(let a=0;a<ko;a++){const u=Math.random()<.7?o:r;e[a*3]=u.r*(.8+Math.random()*.4),e[a*3+1]=u.g*(.8+Math.random()*.4),e[a*3+2]=u.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,Hf.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}function d2(i,t,e){vm=!0,ni.visible=!0;for(let n=0;n<ko;n++){const s=Hf[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.5+Math.random()*2,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=5+Math.random()*6,s.active=!0}}function p2(i,t){if(!ni||!ni.visible)return;const e=ni.geometry.attributes.position.array,n=ni.geometry.attributes.size.array;let s=!1;for(let o=0;o<ko;o++){const r=Hf[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(s=!0,r.life-=i,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*i,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*i,r.vz+=Math.cos(t*2.5+o*1.1)*.2*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,u=Math.min(r.life/2,1);n[o]=(.15+a*.2)*u}ni.geometry.attributes.position.needsUpdate=!0,ni.geometry.attributes.size.needsUpdate=!0,s||(ni.visible=!1)}function m2(i){Hr=i.orbs,Jn=i.obeliskGroup,Ns=i.obeliskMat,zs=i.obeliskGlowMat,ve=i.pinnacleOrb,Fs=i.pinnacleRings||[],Bi=i.moatMesh,Fh=i.moatMat,Qn=i.rainbowArcs,Vr=i.player,gm=i.makeLaser,xm=i.orbHudEl,Vh=i.deers||[],Wh=i.puffs||[],Xh=i.jellies||[],qh=i.moths||[],Do=i.trees||[],Yh=i.treeMeshes||[],Uo=i.groundMesh||null,Oh=i.playOrbCollect||null,Bh=i.playOrbWarble||null,Gh=i.playLaserZap||null,kh=i.playLaserHum||null,yc=i.stopLaserHums||null,Hh=i.notifyOrbCollected||null,f2()}function g2(i,t){let e=null,n=1/0;for(let u=0;u<Hr.length;u++){const c=Hr[u];if(c.found)continue;const l=c.x-Vr.pos.x,h=c.z-Vr.pos.z,f=l*l+h*h;f<n&&(n=f,e=c)}if(e&&n<Eo*Eo){const u=Math.sin(t*2+e.phase)*.5+.5;kr.position.set(e.x,1,e.z),kr.intensity=1+u*2,kr.distance=Eo}else kr.intensity=0;for(let u=0;u<Hr.length;u++){const c=Hr[u];if(!(c.found&&!c.flyUp&&!c._flashing)){if(!c.found){const l=Math.sin(t*1.5+c.phase)*.5+.5;c.group.position.y=c.flyY+Math.sin(t*.8+c.phase)*.3,c.glowMat.opacity=.3+l*.4,c.hazeMat.opacity=.08+l*.12;const h=c.x-Vr.pos.x,f=c.z-Vr.pos.z,p=h*h+f*f,m=Eo*Eo;if(p<m){const x=1-Math.sqrt(p)/Eo,d=x*x;c.glowMat.opacity=Math.min(.3+l*.4+d*.5,1),c.hazeMat.opacity=Math.min(.08+l*.12+d*.25,.6),c.coreMat.color.copy(h2).lerp(u2,1-d);const g=1+d*.3;c.group.scale.setScalar(g)}else c.group.scale.setScalar(1);for(let x=3;x<c.group.children.length;x++){const d=c.group.children[x],g=(x-3)/6*6.28+t*1.5;d.position.x=Math.cos(g)*.4,d.position.z=Math.sin(g)*.4,d.position.y=Math.sin(g*2+t)*.1}if(p<h0*h0){c.found=!0,c._flashing=!0,c._flashTimer=0,c.flyY=c.group.position.y,Co++;const x=xm||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+Co+" / "+Lo),Qe==="SEEK"&&(Qe="RISING"),Oh&&Oh(),Hh&&Hh(u)}}if(c._flashing){c._flashTimer+=i;const l=Math.min(c._flashTimer/1.5,1),h=l<.3?l/.3:1-(l-.3)/.7;c.glowMat.opacity=.5+h*.5,c.hazeMat.opacity=.3+h*.5,c.group.scale.setScalar(1+h*.6),c.group.position.x=c.x+Math.sin(t*30)*h*.05,c.group.position.z=c.z+Math.cos(t*25)*h*.05,c._flashTimer>1.5&&(c._flashing=!1,c.flyUp=!0,c.group.position.x=c.x,c.group.position.z=c.z,Bh&&Bh())}if(c.flyUp){const l=Ce+5;c.flyY+=(l-c.flyY)*i*.8,c.group.position.y=c.flyY;const h=Math.min((c.flyY-1)/(l-1),1);if(c.group.scale.setScalar(1-h*.6),c.glowMat.opacity=.8-h*.5,c.flyY>l-1&&!c.laserLine){c.flyUp=!1,c.group.visible=!1;const f=ru();c.laserLine=gm(c.x,c.z,0,f),Gh&&Gh(),kh&&kh(c.x,c.z)}}}}const s=Ce/Lo,o=-Ce+Co*s;if(hs<o-.01?(hs+=8*i,hs>o&&(hs=o),Jn&&(Jn.position.y=hs,Jn.position.x=Math.sin(t*25)*.04,Jn.position.z=Math.cos(t*30)*.03)):Jn&&(Jn.position.x*=.9,Jn.position.z*=.9),Co>=Lo&&hs>=-.01&&Qe==="RISING"&&(Qe="COMPLETE",on=0),Jn){Jn.rotation.y+=i*.03;const u=Jn.children[Jn.children.length-1];if(u&&u.isLight){const c=Math.max(0,Math.min(1,(hs+Ce)/Ce));u.intensity=c*1.5*(.8+Math.sin(t*1.5)*.2)}}if(ve&&ve.mesh.visible){const u=Math.sin(t*2)*.5+.5;ve.mat.opacity=.6+u*.3,ve.hazeMat.opacity=.15+u*.12;const c=Co/Lo;ve.mat.opacity*=.3+c*.7,ve.hazeMat.opacity*=.2+c*.8}for(let u=0;u<Fs.length;u++){const c=Fs[u];if(!c.mesh.visible)continue;c.mesh.rotation.x+=c.rx*i,c.mesh.rotation.y+=c.ry*i,c.mesh.rotation.z+=c.rz*i;const l=Co/Lo;c.mat.opacity=(.15+l*.35)*(.8+Math.sin(t*1.5+u)*.2)}const a=ru();if(l2(i,t,a),Qe==="COMPLETE"&&on>3?A0(Math.max(0,1-(on-3)/4)):(Qe==="FINALE"||Qe==="TRANSFORM")&&(A0(0),yc&&(yc(),yc=null)),p2(i,t),Qe==="COMPLETE"){on+=i;const u=Math.min(on/3,1);if(Ns&&(Ns.emissiveIntensity=u*1.5),zs&&(zs.emissiveIntensity=u*2.5),ve&&ve.mesh.visible&&on>1&&on<3){const c=Math.min((on-1)/1.5,1);ve.mat.opacity=.9+c*.1,ve.hazeMat.opacity=.5+c*.5,ve.mesh.scale.setScalar(1+c*.5),ve.haze.scale.setScalar(1+c*1);for(let l=0;l<Fs.length;l++){const h=Fs[l];h.mesh.rotation.x+=h.rx*i*(1+c*4),h.mesh.rotation.y+=h.ry*i*(1+c*4),h.mesh.rotation.z+=h.rz*i*(1+c*4)}}if(ve&&ve.mesh.visible&&on>=3&&!vm){const c=new F;ve.mesh.getWorldPosition(c),d2(c.x,c.y,c.z),ve.mesh.visible=!1,ve.haze.visible=!1;for(let l=0;l<Fs.length;l++)Fs[l].mesh.visible=!1}if(on>3&&Fh){const c=Math.min((on-3)/4,1);Fh.opacity=c*.6,Bi&&(Bi.visible||(Bi.visible=!0),Bi.position.y=.05+Math.sin(t*3)*.02*c)}if(on>4)for(let c=0;c<Qn.length;c++){const l=c*.3,h=Math.min(Math.max((on-4-l)/2,0),1);h>0&&!Qn[c].mesh.visible&&(Qn[c].mesh.visible=!0),Qn[c].mat.opacity=h*.55,Qn[c].mesh.rotation.y+=i*.1*(c+1)*.3}if(on>3){const c=Math.min((on-3)/6,1)*2;for(let l=0;l<Vh.length;l++){const h=Vh[l],f=h.group,p=-f.position.x,m=-f.position.z,x=Math.sqrt(p*p+m*m);x>8?(h.wanderAng=Math.atan2(-f.position.x,-f.position.z),h.state="walk",h.speed=1.5*c,f.position.x+=p/x*h.speed*i,f.position.z+=m/x*h.speed*i,f.rotation.y=h.wanderAng):h.state="pause"}for(let l=0;l<Wh.length;l++){const h=Wh[l],f=h.group,p=-f.position.x,m=-f.position.z,x=Math.sqrt(p*p+m*m);x>8&&(h.wanderAng=Math.atan2(-f.position.x,-f.position.z),h.state="hop",h.hopTimer=h.hopTimer%1.2,f.position.x+=p/x*1.5*c*i,f.position.z+=m/x*1.5*c*i)}for(let l=0;l<Xh.length;l++){const h=Xh[l],f=h.group;f.position.x+=(0-f.position.x)*i*.15*c,f.position.z+=(0-f.position.z)*i*.15*c}for(let l=0;l<qh.length;l++){const h=qh[l];h.centerX+=(0-h.centerX)*i*.2*c,h.centerZ+=(0-h.centerZ)*i*.2*c,h.orbitR=Math.max(h.orbitR-i*.3*c,2)}}on>12&&(Qe="FINALE",console.log("✦ Quest → FINALE"))}if(Qe==="FINALE"){R0+=i,Ns&&(Ns.emissiveIntensity=1.5+Math.sin(t*.5)*.3),zs&&(zs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Bi&&(Bi.position.y=.05+Math.sin(t*3)*.02);for(let u=0;u<Qn.length;u++)Qn[u].mesh.rotation.y+=i*.1*(u+1)*.3,Qn[u].mat.opacity=.45+Math.sin(t+u)*.1;R0>30&&(Qe="TRANSFORM",Je=0,x2(),console.log("✦ Quest → TRANSFORM (trees="+Do.length+")"))}if(Qe==="TRANSFORM"){Je+=i,Ns&&(Ns.emissiveIntensity=1.5+Math.sin(t*.5)*.3),zs&&(zs.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Bi&&(Bi.position.y=.05+Math.sin(t*3)*.02);for(let h=0;h<Qn.length;h++)Qn[h].mesh.rotation.y+=i*.1*(h+1)*.3,Qn[h].mat.opacity=.45+Math.sin(t+h)*.1;if(Je<3&&gi.length<Do.length){const h=Math.min(Math.floor(Je/3*Do.length),Do.length);for(;gi.length<h;){const f=gi.length,p=Do[f],m=ru(),x=new Cf(new F(0,m,0),new F(p.x,0,p.z)),d=new Y({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),g=new C(new cn(x,8,.06,4,!1),d);nt.add(g);const S=new Y({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),_=new C(new cn(x,8,.18,4,!1),S);nt.add(_),gi.push({tube:g,glow:_,mat:d,glowMat:S,timer:0})}}const u=Je>=13?Math.min((Je-13)/30,1):0,c=u*u*(3-2*u);for(let h=0;h<gi.length;h++){const f=gi[h];f.timer+=i;const p=Math.min(f.timer/.5,1)*(1-c),m=1-c,x=Math.sin(t*3+h*.5)*.5*m+.5;f.mat.opacity=p*(.6+x*.4),f.glowMat.opacity=p*(.2+x*.15)}if(u>=1&&gi.length>0){for(let h=0;h<gi.length;h++){const f=gi[h];nt.remove(f.tube),f.tube.geometry.dispose(),f.mat.dispose(),nt.remove(f.glow),f.glow.geometry.dispose(),f.glowMat.dispose()}gi.length=0}Je>=13&&!P0&&(r2(),P0=!0);let l=0;if(Je>=3&&Je<6?l=(Je-3)/3:Je>=6&&Je<10?(l=1,C0||(v2(),C0=!0,console.log("✦ Trees + ground transformed"))):Je>=10&&Je<13&&(l=1-(Je-10)/3),Go&&(Go.style.opacity=l),Je>=13&&ve&&!ve.mesh.visible&&(ve.mesh.visible=!0,ve.haze.visible=!0,ve.mesh.scale.setScalar(1.2),ve.haze.scale.setScalar(1.8)),Je>=13&&ve&&ve.mesh.visible){const h=Math.sin(t*1.5)*.5+.5;ve.mat.opacity=.85+h*.15,ve.hazeMat.opacity=.3+h*.2}}}function ru(){return hs+Ce+3}function x2(){Go||(Go=document.createElement("div"),Go.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(Go))}function v2(){const i=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}];for(let t=0;t<Yh.length;t++){const e=Yh[t],n=i[t%i.length];e.trunkMat&&(e.trunkMat.color.set(667712),e.trunkMat.emissive.set(534584),e.trunkMat.emissiveIntensity=.1),e.canopyMat&&(e.canopyMat.color.set(n.core),e.canopyMat.emissive.set(n.glow),e.canopyMat.emissiveIntensity=.9),e.glowMat&&(e.glowMat.color.set(n.glow),e.glowMat.emissive.set(n.glow),e.glowMat.emissiveIntensity=.15),e.detailMat&&(e.detailMat.color.set(n.color),e.detailMat.emissive.set(n.glow),e.detailMat.emissiveIntensity=.3)}if(Tw(1),Uo&&Uo.material){Uo.material.emissive.set(2754629),Uo.material.emissiveIntensity=.4;const t=Uo.geometry.attributes.color;if(t){const e=t.array;for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],r=e[n+2];e[n]=s*.45+r*.25+o*.1,e[n+1]=o*.1,e[n+2]=r*.6+o*.45+s*.1}t.needsUpdate=!0}}}const M2=600;let sc=.25,xe=1,I0=.85,He="NIGHT",Wr=null,Xr=null,Zh=null,qr=null,wc=null;const L0=[{label:"DUSK",sky:new ot(923685),fog:new ot(791584),fogDensity:.009,moonInt:.6,moonCol:new ot(14527112),moonElev:15,ambSky:new ot(4469589),ambGnd:new ot(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new ot(330264),fog:new ot(528408),fogDensity:.01,moonInt:1,moonCol:new ot(12307694),moonElev:55,ambSky:new ot(3359846),ambGnd:new ot(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new ot(198160),fog:new ot(397332),fogDensity:.012,moonInt:.55,moonCol:new ot(8952251),moonElev:75,ambSky:new ot(1712708),ambGnd:new ot(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new ot(1187888),fog:new ot(923688),fogDensity:.011,moonInt:.5,moonCol:new ot(13417386),moonElev:20,ambSky:new ot(3354197),ambGnd:new ot(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],as=new ot,D0=new ot;function _2(i){Wr=i.scene,Xr=i.moon,Zh=i.moon2,qr=i.hemiLight,wc=i.playerLight}function y2(i){if(!Wr)return;sc=(sc+i/M2)%1;const t=sc*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=L0[e],a=L0[n];He=o<.5?r.label:a.label;const u=(c,l)=>c+(l-c)*o;if(as.copy(r.sky).lerp(a.sky,o),Wr.background.copy(as),as.copy(r.fog).lerp(a.fog,o),Wr.fog.color.copy(as),Wr.fog.density=u(r.fogDensity,a.fogDensity),Xr){as.copy(r.moonCol).lerp(a.moonCol,o),Xr.color.copy(as),Xr.intensity=u(r.moonInt,a.moonInt);const c=sc*Math.PI*2,l=u(r.moonElev,a.moonElev)*Math.PI/180,h=60;Xr.position.set(Math.cos(c)*Math.cos(l)*h,Math.sin(l)*h,Math.sin(c)*Math.cos(l)*h)}if(Zh){const c=u(r.moonInt,a.moonInt)/.85;Zh.intensity=.3*c}qr&&(as.copy(r.ambSky).lerp(a.ambSky,o),D0.copy(r.ambGnd).lerp(a.ambGnd,o),qr.color.copy(as),qr.groundColor.copy(D0),qr.intensity=u(r.ambInt,a.ambInt)),wc&&(wc.distance=u(r.plRange,a.plRange),wc.intensity=u(r.plInt,a.plInt)),I0=u(r.stars,a.stars),Uw(I0),xe=u(r.bio,a.bio)}let qs=0,Ho=0,Ji=0,er="CLEAR",ts=!1,Si=0;const Sc={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},w2={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let No="CLEAR",Po=null,bc=0,oc=0,au=0,rc=!1,ac=0,cu=Math.random()*Math.PI*2,lu=0,uu=0;const $h=[],S2=8;let U0=!1,hu=0,cc=1,Tc=0,lc=0,fu=0;function b2(){const i=w2[No],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function T2(){if(U0)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new pa(i),s=new se(40,14);for(let o=0;o<S2;o++){const r=new Y({map:n,color:5596791,transparent:!0,opacity:0,side:Ct,depthWrite:!1}),a=new C(s,r);a.visible=!1,nt.add(a),$h.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}U0=!0}function E2(){T2();const i=Sc.CLEAR.duration;bc=i[0]+Math.random()*(i[1]-i[0])}function A2(i,t,e){if(rc)if(oc-=i,oc<=0){No=Po,Po=null,rc=!1;const o=Sc[No].duration;bc=o[0]+Math.random()*(o[1]-o[0]),ac=0}else ac=1-oc/au;else bc-=i,bc<=0&&(Po=b2(),rc=!0,au=30+Math.random()*60,oc=au,ac=0);const n=Sc[No];if(rc&&Po){const o=Sc[Po],r=.5-.5*Math.cos(ac*Math.PI),a=(u,c)=>u+(c-u)*r;cc=a(n.fogMult,o.fogMult),Tc=a(n.rainRate,o.rainRate),lc=a(n.skyDarken,o.skyDarken),fu=a(n.mistCount,o.mistCount),Ji=a(n.windBase,o.windBase),er=r<.5?No:Po}else cc=n.fogMult,Tc=n.rainRate,lc=n.skyDarken,fu=n.mistCount,Ji=n.windBase,er=No;ts=er==="LUMINOUS_STORM",cu+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,lu-=i,lu<=0&&(lu=2+Math.random()*6,uu=Math.random()*.8),uu*=Math.pow(.3,i);const s=Ji+uu;if(qs=Math.cos(cu)*s,Ho=Math.sin(cu)*s,nt.fog.density*=cc,lc>.001){const o=nt.background,r=1-lc;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(fu);for(let r=0;r<$h.length;r++){const a=$h[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const u=10+Math.sin(t*.3+a.wobble)*8,c=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(c)*u,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(c)*u),a.mesh.rotation.y=c+Math.PI/2,a.drift+=qs*i*.02;const l=.03+cc*.012;a.mat.opacity+=(l-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return ts&&(hu-=i,hu<=0&&(hu=1+Math.random()*4,Si=1)),Si*=Math.pow(.02,i),Si<.01&&(Si=0),Tc}function ta(){return Tc}const mi=300,zr=new Float32Array(mi),Fr=new Float32Array(mi),Or=new Float32Array(mi),du=new Float32Array(mi),pu=new Float32Array(mi),mu=new Float32Array(mi),Os=new Float32Array(mi),kn=new Float32Array(mi*6);let Ys=null,jh=null;function R2(){const i=new Ee;i.setAttribute("position",new Oe(kn,3)),jh=new Tf({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Ys=new hx(i,jh),Ys.frustumCulled=!1,Ys.visible=!1,nt.add(Ys);for(let t=0;t<mi;t++)Os[t]=0,Mm(t)}function Mm(i){const t=i*6;kn[t]=0,kn[t+1]=-100,kn[t+2]=0,kn[t+3]=0,kn[t+4]=-100,kn[t+5]=0}function C2(i,t,e,n,s){if(!Ys)return;const o=e>.01;if(Ys.visible=o,!o)return;jh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let u=0;u<r;u++){let c=-1;for(let f=0;f<mi;f++)if(Os[f]<=0){c=f;break}if(c===-1)break;const l=Math.random()*Math.PI*2,h=Math.random()*30;zr[c]=t.x+Math.cos(l)*h,Fr[c]=12+Math.random()*10,Or[c]=t.z+Math.sin(l)*h,du[c]=n*2+(Math.random()-.5)*.3,pu[c]=-12-Math.random()*8,mu[c]=s*2+(Math.random()-.5)*.3,Os[c]=2+Math.random()*1.5}const a=.06;for(let u=0;u<mi;u++){if(Os[u]<=0)continue;if(Os[u]-=i,Os[u]<=0||Fr[u]<Bt(zr[u],Or[u])+.1){Os[u]=0,Mm(u);continue}zr[u]+=du[u]*i,Fr[u]+=pu[u]*i,Or[u]+=mu[u]*i;const c=u*6;kn[c]=zr[u],kn[c+1]=Fr[u],kn[c+2]=Or[u],kn[c+3]=zr[u]+du[u]*a,kn[c+4]=Fr[u]+pu[u]*a,kn[c+5]=Or[u]+mu[u]*a}Ys.geometry.attributes.position.needsUpdate=!0}let pe=null,qn=null,yr=null;const N0=[0,2,4,7,9],P2=261.63,Kh=[0,-3,5,4],I2=16;let Ec=0,Ks=0,Ac=0,Rc=2,Cc=10,Pc=5,Ic=0,Yr=[],Zr=[],_m=!1;function L2(i,t,e){pe=i,yr=e,qn=pe.createGain(),qn.gain.value=.6,qn.connect(t),Ec=0,Ks=Kh[0],Ac=0,Ic=0,Rc=2,Cc=8,Pc=5,Yr=[],Zr=[],_m=!0}function nr(i,t){const e=N0.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e,o=N0[s];return P2*Math.pow(2,n+o/12)}function D2(i){if(!pe||!qn)return;const t=pe.currentTime;for(let a=0;a<Zr.length;a++)Zr[a].gain.linearRampToValueAtTime(.001,t+4);for(let a=0;a<Yr.length;a++)Yr[a].stop(t+4.5);Yr=[],Zr=[];const e=[nr(i,-2),nr(i+2,-2),nr(i,-1)],n=pe.createGain();n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.06,t+4);const s=pe.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=pe.createOscillator();o.type="sine",o.frequency.value=.05;const r=pe.createGain();r.gain.value=50,o.connect(r).connect(s.frequency),o.start(t),o.stop(t+35);for(let a=0;a<e.length;a++){const u=pe.createOscillator();u.type=a===0?"triangle":"sine",u.frequency.value=e[a]*(1+(Math.random()*.004-.002)),u.connect(s),u.start(t),u.stop(t+35),Yr.push(u)}s.connect(n),yr(n,qn,.8),Zr.push(n)}function U2(i,t,e){if(!pe||!qn)return;const n=.15,s=pe.currentTime+(t||0),o=pe.createOscillator();o.type="sine";const r=pe.createGain();r.gain.setValueAtTime(0,s),r.gain.linearRampToValueAtTime(n,s+.02),r.gain.exponentialRampToValueAtTime(n*.3,s+.5),r.gain.exponentialRampToValueAtTime(.001,s+3),o.connect(r),yr(r,qn,.6),o.start(s),o.stop(s+3.5)}function N2(i,t,e){if(!pe||!qn)return;const n=pe.currentTime+0,s=t||6,o=nr(i,1),r=pe.createOscillator();r.type="triangle";const a=pe.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.08,n+1.5),a.gain.setValueAtTime(.08,n+s-1.5),a.gain.linearRampToValueAtTime(.001,n+s);const u=pe.createBiquadFilter();u.type="lowpass",u.frequency.value=o*1.5;const c=pe.createOscillator();c.frequency.value=4;const l=pe.createGain();l.gain.value=o*.01,c.connect(l).connect(r.frequency),r.connect(u).connect(a),yr(a,qn,.9),c.start(n),r.start(n),c.stop(n+s+.1),r.stop(n+s+.1)}function z2(i,t){if(!pe||!qn)return;const e=pe.currentTime+(t||0),n=nr(i,2),s=pe.createOscillator(),o=pe.createOscillator();s.type="sine",o.type="sine",s.frequency.value=n,o.frequency.value=n*1.005;const r=pe.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.04,e+.01),r.gain.exponentialRampToValueAtTime(.001,e+4),s.connect(r),o.connect(r),yr(r,qn,.8),s.start(e),o.start(e),s.stop(e+4.5),o.stop(e+4.5)}function F2(i){if(!pe||!qn)return;const t=pe.currentTime,e=nr(i,-3),n=pe.createOscillator();n.type="sine",n.frequency.value=e;const s=pe.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(.15,t+.5),s.gain.exponentialRampToValueAtTime(.001,t+3),n.connect(s),yr(s,qn,.3),n.start(t),n.stop(t+3.5)}function O2(){const i=3+Math.floor(Math.random()*3);let t=Ks+(Math.random()<.5?0:2);for(let e=0;e<i;e++)U2(t,e*.3),t+=Math.random()<.7?1:2;return 4+Math.random()*6}function B2(){const i=6+Math.random()*4,t=[0,1,2,4],e=Ks+t[Math.floor(Math.random()*t.length)];return N2(e,i),i+8+Math.random()*10}function G2(){const i=1+Math.floor(Math.random()*3);for(let t=0;t<i;t++){const e=Ks+Math.floor(Math.random()*5);z2(e,t*.5+Math.random()*.2)}return 8+Math.random()*12}function k2(i,t,e,n){!_m||!pe||(Ac-=i,Ac<=0&&(Ks=Kh[Ec],D2(Ks),Ec=(Ec+1)%Kh.length,Ac=I2),Ic-=i,Ic<=0&&(F2(Ks),Ic=8),Rc-=i,Rc<=0&&(Rc=O2()),Cc-=i,Cc<=0&&(Cc=B2()),Pc-=i,Pc<=0&&(Pc=G2()))}let st=null,Te=null,Jh=null,hn=!1,Yn=!1,tl=null,gu=null,ea=null,H2=null,ym=null,V2=null,W2=null,wm=null,X2=null,Sm=null,bm=null,q2=null,Tm=null,Em=null,xu=0,Y2=null,Am=null,Z2=null;const Hi={jelly:0,puff:0,deer:0,moth:0};function vu(i,t){const e=st.sampleRate*t,n=st.createBuffer(1,e,st.sampleRate),s=n.getChannelData(0);if(i==="white")for(let r=0;r<e;r++)s[r]=Math.random()*2-1;else if(i==="brown"){let r=0;for(let a=0;a<e;a++){const u=Math.random()*2-1;s[a]=(r+.02*u)/1.02,r=s[a],s[a]*=1.8}}const o=Math.min(Math.floor(st.sampleRate*.5),e>>2);for(let r=0;r<o;r++){const a=r/o,u=e-o+r;s[u]=s[u]*(1-a)+s[r]*a}return n}function Br(i,t,e,n){const s=st.createBufferSource();s.buffer=i,s.loop=!0;const o=st.createGain();o.gain.value=t;const r=st.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=st.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,s.connect(a).connect(r).connect(o).connect(Te),s.start(),{node:s,gain:o,filter:r}}function $2(){const i=st.createDelay(1);i.delayTime.value=.55;const t=st.createDelay(1);t.delayTime.value=.79;const e=st.createGain();e.gain.value=.35;const n=st.createGain();n.gain.value=.28;const s=st.createBiquadFilter();s.type="lowpass",s.frequency.value=2200;const o=st.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;const r=st.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=st.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const u=st.createGain();u.gain.value=.5,i.connect(s).connect(r).connect(e).connect(i),t.connect(o).connect(a).connect(n).connect(t),i.connect(u),t.connect(u),u.connect(Te);const c=st.createGain();c.gain.value=1,c.connect(i),c.connect(t),Jh=c}function Wi(i,t,e){if(i.connect(t),Jh&&e>0){const n=st.createGain();n.gain.value=e,i.connect(n).connect(Jh)}}function j2(){const i=()=>{if(!hn){try{st=new(window.AudioContext||window.webkitAudioContext),Te=st.createGain(),Te.gain.value=.42,Te.connect(st.destination),tl=vu("brown",16),gu=vu("brown",11),ea=vu("white",9),$2();const t=Br(tl,.05,200,50);H2=t.node,ym=t.gain,V2=t.filter;const e=Br(gu,.03,350,80);W2=e.node,wm=e.gain;const n=Br(ea,0,400,60);X2=n.node,Sm=n.gain,bm=n.filter;const s=Br(ea,0,2e3,80);q2=s.node,Tm=s.gain,Em=s.filter;const o=Br(gu,0,600,60);Y2=o.node,Am=o.gain,Z2=o.filter,hn=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",i),document.removeEventListener("keydown",i),document.removeEventListener("touchstart",i)}};document.addEventListener("click",i),document.addEventListener("keydown",i),document.addEventListener("touchstart",i)}function K2(i,t,e,n,s,o,r,a){if(!hn||Yn)return;const u=st.currentTime,c=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;ym.gain.linearRampToValueAtTime(c,u+.1),wm.gain.linearRampToValueAtTime(c*.6,u+.1);const l=Math.min(t*.12,.18),h=200+t*600;Sm.gain.linearRampToValueAtTime(l,u+.1),bm.frequency.linearRampToValueAtTime(h,u+.1);const f=e*.15,p=1200+e*2e3;Tm.gain.linearRampToValueAtTime(f,u+.1),Em.frequency.linearRampToValueAtTime(p,u+.1),s>.5&&xu<=0&&(J2(),xu=2+Math.random()*3),xu-=i;let m=1/0;if(r&&a)for(let g=0;g<a.length;g++){const S=a[g].x-r.x,_=a[g].z-r.z,y=S*S+_*_;y<m&&(m=y)}const d=(m<225?1-Math.sqrt(m)/15:0)*.08;Am.gain.linearRampToValueAtTime(d,u+.1),Hi.jelly-=i,Hi.puff-=i,Hi.deer-=i,Hi.moth-=i}function J2(){if(!st)return;const i=st.currentTime,t=st.createOscillator(),e=st.createGain(),n=st.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.8+Math.random()*.5),t.connect(n).connect(e).connect(Te),t.start(),t.stop(i+1.5);const s=st.createBufferSource();s.buffer=tl;const o=st.createGain(),r=st.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=st.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,i),o.gain.exponentialRampToValueAtTime(.001,i+1.2),s.connect(a).connect(r).connect(o).connect(Te),s.start(),s.stop(i+1.5)}function eo(i,t,e){if(!hn||Yn||Hi[i]>0)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,u=Math.max(-1,Math.min(1,n/Math.max(r,1))),c=st.createStereoPanner();c.pan.value=u;const l=st.currentTime;switch(i){case"jelly":{const h=360+Math.random()*60,f=st.createOscillator(),p=st.createOscillator();f.type="sine",p.type="sine",f.frequency.setValueAtTime(h,l),p.frequency.setValueAtTime(h+3,l),f.frequency.linearRampToValueAtTime(h-40,l+1.2),p.frequency.linearRampToValueAtTime(h-37,l+1.2);const m=st.createOscillator(),x=st.createGain();m.frequency.value=4,x.gain.value=5,m.connect(x),x.connect(f.frequency),x.connect(p.frequency);const d=st.createGain();d.gain.setValueAtTime(0,l),d.gain.linearRampToValueAtTime(a,l+.15),d.gain.setValueAtTime(a,l+.6),d.gain.exponentialRampToValueAtTime(.001,l+1.4),f.connect(d),p.connect(d),d.connect(c),Wi(c,Te,.4),m.start(l),f.start(l),p.start(l),m.stop(l+1.5),f.stop(l+1.5),p.stop(l+1.5),Hi.jelly=4+Math.random()*5;break}case"puff":{const h=500+Math.random()*100,f=[h,h*1.2,h*1.5];for(let p=0;p<f.length;p++){const m=st.createOscillator();m.type="sine",m.frequency.value=f[p];const x=st.createGain(),d=l+p*.07;x.gain.setValueAtTime(0,d),x.gain.linearRampToValueAtTime(a*.5,d+.02),x.gain.exponentialRampToValueAtTime(.001,d+.15),m.connect(x).connect(c),m.start(d),m.stop(d+.18)}Wi(c,Te,.3),Hi.puff=8+Math.random()*10;break}case"deer":{const h=100+Math.random()*30,f=st.createOscillator(),p=st.createOscillator();f.type="triangle",p.type="triangle",f.frequency.setValueAtTime(h,l),p.frequency.setValueAtTime(h+2,l),f.frequency.linearRampToValueAtTime(h-15,l+.5),p.frequency.linearRampToValueAtTime(h-13,l+.5);const m=st.createBiquadFilter();m.type="lowpass",m.frequency.value=250,m.Q.value=.5;const x=st.createGain();x.gain.setValueAtTime(0,l),x.gain.linearRampToValueAtTime(a*.7,l+.12),x.gain.setValueAtTime(a*.7,l+.3),x.gain.exponentialRampToValueAtTime(.001,l+.6),f.connect(m),p.connect(m),m.connect(x).connect(c),Wi(c,Te,.3),f.start(l),p.start(l),f.stop(l+.7),p.stop(l+.7),Hi.deer=5+Math.random()*6;break}case"moth":{const h=st.createOscillator();h.type="sine",h.frequency.setValueAtTime(200+Math.random()*80,l);const f=st.createOscillator(),p=st.createGain();f.frequency.value=8+Math.random()*4,p.gain.value=12,f.connect(p).connect(h.frequency);const m=st.createGain();m.gain.setValueAtTime(0,l),m.gain.linearRampToValueAtTime(a*.2,l+.05),m.gain.exponentialRampToValueAtTime(.001,l+.25),h.connect(m).connect(c),Wi(c,Te,.2),f.start(l),h.start(l),f.stop(l+.3),h.stop(l+.3),Hi.moth=4+Math.random()*5;break}}}let el=0;function Q2(i,t){if(!hn||Yn||el>0)return;const e=st.currentTime;if(t){const n=st.createBufferSource();n.buffer=ea;const s=st.createGain(),o=st.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(s).connect(Te),n.start(),n.stop(e+.15)}else{const n=st.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const s=st.createGain();s.gain.setValueAtTime(.03,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(s).connect(Te),n.start(),n.stop(e+.1)}el=i?.22:.35}function tb(){if(!hn||Yn)return;const i=st.currentTime,t=st.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(300,i+.1);const e=st.createGain();e.gain.setValueAtTime(.03,i),e.gain.exponentialRampToValueAtTime(.001,i+.15),t.connect(e).connect(Te),t.start(),t.stop(i+.2)}function eb(i){if(!hn||Yn)return;const t=st.currentTime,e=st.createBufferSource();e.buffer=tl;const n=st.createGain(),s=st.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=st.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(i*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(s).connect(n).connect(Te),e.start(),e.stop(t+.25)}function nb(i){el>0&&(el-=i)}function ib(i,t){if(!hn||Yn)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>400)return;const o=Math.max(0,1-Math.sqrt(s)/20)*.06,r=st.currentTime,a=st.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const u=st.createGain();u.gain.setValueAtTime(o,r),u.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(u).connect(Te),a.start(),a.stop(r+.15)}function sb(){if(!hn||Yn)return;const i=st.currentTime,t=[440,554,659,880];for(let e=0;e<t.length;e++){const n=st.createOscillator();n.type="sine",n.frequency.setValueAtTime(t[e],i+e*.12);const s=st.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+e*.12+.05),s.gain.exponentialRampToValueAtTime(.001,i+e*.12+.7),n.connect(s),Wi(s,Te,.5),n.start(i+e*.12),n.stop(i+e*.12+.8)}}function ob(){if(!hn||Yn)return;const i=st.currentTime,t=st.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(1200,i+3);const e=st.createOscillator(),n=st.createGain();e.frequency.setValueAtTime(6,i),e.frequency.linearRampToValueAtTime(12,i+3),n.gain.value=20,e.connect(n).connect(t.frequency);const s=st.createOscillator();s.type="sine",s.frequency.setValueAtTime(600,i),s.frequency.exponentialRampToValueAtTime(2400,i+3);const o=st.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.04,i+.2),o.gain.setValueAtTime(.04,i+2),o.gain.exponentialRampToValueAtTime(.001,i+3.5),t.connect(o),s.connect(o),Wi(o,Te,.6),e.start(i),t.start(i),s.start(i),e.stop(i+4),t.stop(i+4),s.stop(i+4)}function rb(){if(!hn||Yn)return;const i=st.currentTime,t=st.createBufferSource();t.buffer=ea;const e=st.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.3),e.Q.value=2;const n=st.createGain();n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.3),t.connect(e).connect(n).connect(Te);const s=st.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(2e3,i),s.frequency.exponentialRampToValueAtTime(100,i+.15);const o=st.createBiquadFilter();o.type="lowpass",o.frequency.value=4e3;const r=st.createGain();r.gain.setValueAtTime(.06,i),r.gain.exponentialRampToValueAtTime(.001,i+.2),s.connect(o).connect(r),Wi(r,Te,.3);const a=st.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,i+.15),a.frequency.linearRampToValueAtTime(55,i+2);const u=st.createBiquadFilter();u.type="bandpass",u.frequency.value=180,u.Q.value=3;const c=st.createGain();c.gain.setValueAtTime(0,i),c.gain.linearRampToValueAtTime(.03,i+.2),c.gain.exponentialRampToValueAtTime(.001,i+2),a.connect(u).connect(c).connect(Te),t.start(i),t.stop(i+.4),s.start(i),s.stop(i+.25),a.start(i+.1),a.stop(i+2.2)}const ir=[];function ab(i,t){if(!hn||Yn)return;const e=st.currentTime,n=st.createOscillator();n.type="sawtooth",n.frequency.value=55+Math.random()*10;const s=st.createOscillator(),o=st.createGain();s.type="square",s.frequency.value=120+Math.random()*60,o.gain.value=15,s.connect(o).connect(n.frequency);const r=st.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=3;const a=st.createGain();a.gain.value=0;const u=st.createStereoPanner();n.connect(r).connect(a).connect(u).connect(Te),s.start(e),n.start(e),ir.push({osc:n,mod:s,gain:a,panner:u,filter:r,x:i,z:t})}function cb(i){if(!hn||!st)return;const t=st.currentTime;for(let e=0;e<ir.length;e++){const n=ir[e],s=n.x-i.x,o=n.z-i.z,r=s*s+o*o,a=Math.sqrt(r),u=r<625?Math.max(0,1-a/25)*.04:0;n.gain.gain.linearRampToValueAtTime(u,t+.1);const c=Math.max(-1,Math.min(1,s/Math.max(a,1)));n.panner.pan.linearRampToValueAtTime(c,t+.1),n.filter.frequency.value=180+Math.sin(t*.5+e)*40}}function lb(){if(!st)return;const i=st.currentTime;for(let t=0;t<ir.length;t++){const e=ir[t];e.gain.gain.linearRampToValueAtTime(0,i+.5),e.osc.stop(i+.6),e.mod.stop(i+.6)}ir.length=0}function ub(){if(!hn||Yn)return;const i=st.currentTime,t=st.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(900,i+.15);const e=st.createGain();e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(e),Wi(e,Te,.4),t.start(),t.stop(i+.6)}let Rm=null,Cm=null,Pm=null,Mu=0,z0=0,uc=0,_u=0,F0=1,Qh=!1;function hb(){if(Qh||!st)return;Qh=!0;const i=st.createGain();i.gain.value=0;const t=st.createOscillator();t.type="sine",t.frequency.value=160;const e=st.createOscillator();e.type="sine",e.frequency.value=190;const n=st.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(i),e.connect(n),i.connect(Te),t.start(),e.start(),Rm=t,Cm=e,Pm=i}function fb(i){if(!st||i<.001)return;const t=st.currentTime,e=1800+Math.random()*800,n=st.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const s=st.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.5,t+.01),s.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(s).connect(Te),n.start(t),n.stop(t+.12)}function db(i,t,e,n,s,o){if(!hn||Yn||(hb(),!Qh))return;const r=st.currentTime,a=s==="DEEP_NIGHT"||s==="NIGHT"?1:s==="DUSK"?.5:.3;F0=s==="DUSK"||s==="NIGHT"?1:s==="DEEP_NIGHT"?.6:.3;const u=Math.max(.15,1-o*.7);let c=1/0;if(t&&e)for(let x=0;x<e.length;x++){const d=e[x].x-t.x,g=e[x].z-t.z,S=d*d+g*g;S<c&&(c=S)}const l=c<400?1-Math.sqrt(c)/20:0;z0+=i*2;const h=.7+.3*Math.sin(z0*Math.PI*2),f=l*.025*a*u*h;if(Pm.gain.linearRampToValueAtTime(f,r+.15),Mu+=i,Mu>3+Math.random()*4){Mu=0;const x=150+Math.random()*40;Rm.frequency.linearRampToValueAtTime(x,r+.5),Cm.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let p=1/0;if(t&&n)for(let x=0;x<n.length;x++){const d=n[x].cx-t.x,g=n[x].cz-t.z,S=d*d+g*g;S<p&&(p=S)}const m=p<144?1-Math.sqrt(p)/12:0;if(_u=m*.02*F0*u,_u>.001){if(uc-=i,uc<=0){fb(_u);const x=1.5+(1-m)*1.5;uc=x+Math.random()*x}}else uc=0}let nl=!1;function pb(){nl||!st||(nl=!0,L2(st,Te,Wi))}function mb(i,t,e,n){!hn||Yn||(nl||pb(),nl&&k2(i))}function gb(i,t,e,n,s){const o=e.x-i.x,r=e.z-i.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let c=Math.atan2(r,o)-t;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;return Math.abs(c)<s*.5}function xb(i,t,e,n){const s=t.x-i.x,o=t.z-i.z,r=n?e*1.8:e;return s*s+o*o<r*r}function Im(i,t,e){let n=0,s=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],u=i.x-a.x,c=i.z-a.z,l=u*u+c*c;if(l>.01&&l<e*e){const h=Math.sqrt(l);n+=u/h/h,s+=c/h/h,o++}}return o>0&&(n/=o,s/=o),{x:n,z:s}}function Lm(i,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let s=0;s<t.length;s++)e+=t[s].x,n+=t[s].z;return e/=t.length,n/=t.length,{x:e-i.x,z:n-i.z}}function vb(i,t){const e=Math.sqrt(i.x*i.x+i.z*i.z),n=Kt-t;if(e<n)return{x:0,z:0};const s=(e-n)/t,o=Math.min(s*2,3);return{x:-i.x/e*o,z:-i.z/e*o}}function Mb(i,t,e,n,s){let o=0,r=0;const a=Math.cos(t)*n,u=Math.sin(t)*n,c=i.x+a,l=i.z+u;for(let h=0;h<e.length;h++){const f=e[h],p=c-f.x,m=l-f.z,x=p*p+m*m,d=(f.colR||s)+1;if(x<d*d&&x>.01){const g=Math.sqrt(x),S=(d-g)/d*2;o+=p/g*S,r+=m/g*S}}return{x:o,z:r}}let na=null;const Xi=[],_b=1-vh;function yb(i){na=i,Xi.length=0;for(let t=0;t<na.length;t++)Xi.push({active:!1,elapsed:0,radius:0})}function wb(i){i>=0&&i<Xi.length&&(Xi[i].active=!0,Xi[i].elapsed=0,Xi[i].radius=0)}function Sb(i){for(let t=0;t<Xi.length;t++){const e=Xi[t];e.active&&(e.elapsed+=i,e.radius=e.elapsed*sw,e.radius>=xh&&(e.active=!1,e.radius=xh))}}function be(i,t,e){if(!na)return e;let n=vh;for(let s=0;s<na.length;s++){const o=na[s];if(!o.found)continue;const r=i-o.x,a=t-o.z,u=r*r+a*a,c=Xi[s],l=c.active?c.radius:xh,h=l*l,f=l+f0,p=f*f;if(u<=h)return e;if(u<p){const x=(Math.sqrt(u)-l)/f0,d=vh+_b*(.5+.5*Math.cos(x*Math.PI));d>n&&(n=d)}}return e*n}const Gi={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},bb={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let qi=null,Lc=0,O0="";function Tb(){qi=document.createElement("div"),qi.id="discovery-text",qi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(qi)}function Cs(i){Gi[i]||(Gi[i]=!0,O0=bb[i],Lc=3,qi&&(qi.textContent=O0,qi.style.opacity="1"))}function Eb(i,t,e,n,s,o,r,a){const u=i.x,c=i.z;if(!Gi.deer)for(let l=0;l<t.length;l++){const h=t[l].group.position.x-u,f=t[l].group.position.z-c;if(h*h+f*f<144){Cs("deer");break}}if(!Gi.puffling)for(let l=0;l<e.length;l++){const h=e[l].group.position.x-u,f=e[l].group.position.z-c;if(h*h+f*f<64){Cs("puffling");break}}if(!Gi.jelly)for(let l=0;l<n.length;l++){const h=n[l].group.position.x-u,f=n[l].group.position.z-c;if(h*h+f*f<100){Cs("jelly");break}}if(!Gi.moth)for(let l=0;l<s.length;l++){const h=s[l].group.position.x-u,f=s[l].group.position.z-c;if(h*h+f*f<64){Cs("moth");break}}if(!Gi.fairyRing)for(let l=0;l<o.length;l++){const h=o[l].x-u,f=o[l].z-c;if(h*h+f*f<16){Cs("fairyRing");break}}if(!Gi.pond)for(let l=0;l<r.length;l++){const h=r[l].x-u,f=r[l].z-c;if(h*h+f*f<25){Cs("pond");break}}!Gi.crystalChain&&a>=3&&Cs("crystalChain")}function Ab(i){Lc>0&&(Lc-=i,Lc<=.6&&qi&&(qi.style.opacity="0"))}let tf=null,yu=60;const Rb={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},Cb={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function Pb(){tf=document.getElementById("hud")}function Ib(i,t){if(!tf)return;yu=yu*.95+1/Math.max(i,.001)*.05;const e=Qe==="SEEK"?"Seek the orbs...":Qe==="RISING"?"The obelisk stirs...":Qe==="COMPLETE"?"Convergence!":"Luminaries",n=Rb[He]||"Night",s=Cb[er]||"Clear";tf.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(yu)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let il=null;function Lb(){il=document.getElementById("orb-hud")}function Db(){return il}function Ub(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),il&&(il.style.display="block")}const jt=[];let Vo=[];const Dc=[],Un=[],ce=[],fi=[],Bn=[],je=[],gr=[],Dm=[],fa=[],Ri=[],ef=[],Zs=[],sl=[],ia=[],Wn=[],bi=[],Fe=[],Ln=[],nf=[],sf=[],Um=[],of=[],rf=[],af=[],cf=[],lf=[],uf=[],cs=[];let B0=0,G0=0,ls=.35;const xi=new ot,hc=new ot(6719624);let wu=0,ei=null,yi=0;const hf=15,ff=[];let k0=!1;function Nb(){if(k0)return;k0=!0;const i=new Tf({color:U.crystal,transparent:!0,opacity:0,blending:Qt,depthWrite:!1});for(let t=0;t<hf;t++){const e=new Ee,n=new Float32Array(6);e.setAttribute("position",new Oe(n,3)),e.attributes.position.setUsage(we);const s=new gp(e,i.clone());s.visible=!1,nt.add(s),ff.push({line:s,geo:e,opacity:0,active:!1})}}let Ps=null;function zb(){if(Ps)return Ps;const i=new dr(.9,1,48),t=new Y({color:U.echoBloom,transparent:!0,opacity:.5,side:Ct,depthWrite:!1,blending:Qt});return Ps=new C(i,t),Ps.rotation.x=-Math.PI/2,Ps.visible=!1,nt.add(Ps),Ps}const De=[];function Xe(i,t){for(let e=0;e<De.length;e++){const n=De[e].x-i,s=De[e].z-t;if(n*n+s*s<De[e].r2)return!0}return!1}function Fb(){const i=25+Math.floor(v()*15),t=[];for(let l=0;l<i;l++){const h=v()*6.28,f=8+v()*(Kt-15);t.push({x:Math.cos(h)*f,z:Math.sin(h)*f,r:6+v()*18,density:.5+v()*.5})}const e=5+Math.floor(v()*4),n=[];for(let l=0;l<e;l++){const h=v()*6.28,f=12+v()*(Kt*.65);n.push({x:Math.cos(h)*f,z:Math.sin(h)*f,r2:(10+v()*15)**2})}for(let l=0;l<l0;l++){let h,f,p=!1;for(let m=0;m<25;m++){if(v()<.2){const d=v()*6.28,g=5+v()*(Kt-10);h=Math.cos(d)*g,f=Math.sin(d)*g}else{const d=Math.floor(v()*i),g=t[d],S=g.r*(v()+v())*.5*g.density,_=v()*6.28;h=g.x+Math.cos(_)*S,f=g.z+Math.sin(_)*S}if(h*h+f*f>(Kt-5)*(Kt-5))continue;let x=!1;for(let d=0;d<n.length;d++){const g=n[d].x-h,S=n[d].z-f;if(g*g+S*S<n[d].r2){x=!0;break}}if(!x){p=!0;for(let d=0;d<jt.length;d++){const g=jt[d].x-h,S=jt[d].z-f;if(g*g+S*S<6.25){p=!1;break}}if(p)break}}if(p){const m=6+v()*10;v();const x=Bt(h,f),d=v()*Math.PI*2,g=.8+v()*.4,S=Ww(m,x);S.position.x=h,S.position.z=f,Dc.push(S),jt.push({x:h,z:f,y:x,treeH:m,yRot:d,scale:g}),De.push({x:h,z:f,r2:4})}}const s=Yw(10),o=Math.ceil(l0/10)+10;Vo=Zw(s,jt,o);for(let l=0;l<W1;l++){let h,f,p=!1;for(let m=0;m<20;m++){const x=v()*6.28,d=10+v()*(Kt*.6);if(h=Math.cos(x)*d,f=Math.sin(x)*d,p=!Xe(h,f),p)break}if(p){bh(h,f,4);const m=wS(h,f);m.group.position.y=Bt(h,f),Wn.push(m),De.push({x:h,z:f,r2:64})}}for(let l=0;l<Y1;l++){let h,f,p=!1;for(let m=0;m<20;m++){const x=v()*6.28,d=8+v()*(Kt*.6);if(h=Math.cos(x)*d,f=Math.sin(x)*d,p=!Xe(h,f),p)break}if(p){bh(h,f,3);const m=bS(h,f);m.group.position.y=Bt(h,f),Fe.push(m),De.push({x:h,z:f,r2:49})}}const r=new Float32Array(jt.length);let a=0;for(let l=0;l<jt.length;l++){let h=0;for(let f=0;f<jt.length;f++){if(l===f)continue;const p=jt[l].x-jt[f].x,m=jt[l].z-jt[f].z;p*p+m*m<144&&h++}r[l]=Math.max(h,.2),a+=r[l]}function u(l,h){let f=0;for(let p=0;p<jt.length;p++){const m=l-jt[p].x,x=h-jt[p].z;m*m+x*x<100&&f++}return f}for(let l=0;l<L1;l++){let h=v()*a,f=0;for(let _=0;_<r.length;_++)if(h-=r[_],h<=0){f=_;break}const p=jt[f],m=v()*6.28,x=1+v()*4,d=p.x+Math.cos(m)*x,g=p.z+Math.sin(m)*x;if(Xe(d,g))continue;const S=jw(d,g);S.group.position.y=Bt(d,g),Un.push(S),De.push({x:d,z:g,r2:1})}for(let l=0;l<D1;l++){const h=v()*6.28,f=8+v()*Kt*.6,p=Math.cos(h)*f,m=Math.sin(h)*f;if(Xe(p,m))continue;const x=Kw(p,m);x.group.position.y=Bt(p,m),ce.push(x),De.push({x:p,z:m,r2:4})}for(let l=0;l<U1;l++){const h=v()*6.28,f=10+v()*Kt*.5,p=Math.cos(h)*f,m=Math.sin(h)*f;fi.push(xS(p,Bt(p,m)+3+v()*5,m))}for(let l=0;l<N1;l++){const h=Un[Math.floor(v()*Un.length)],f=v()*6.28,p=1+v()*5,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Xe(m,x))continue;const d=vS(m,x);d.group.position.y=Bt(m,x),d._baseY=Bt(m,x),Bn.push(d)}for(let l=0;l<z1;l++){const h=v()*6.28,f=12+v()*Kt*.5,p=Math.cos(h)*f,m=Math.sin(h)*f;if(Xe(p,m))continue;const x=MS(p,m),d=Bt(p,m);x.group.position.y=d,x._baseY=d,je.push(x)}for(let l=0;l<F1;l++){const h=jt[Math.floor(v()*jt.length)];gr.push(_S(h.x,Bt(h.x,h.z)+2+v()*4,h.z))}const c=[null,U.grassPurple,U.grassBlue,U.grassTeal];for(let l=0;l<O1;l++){const h=v()*6.28,f=2+v()*(Kt*.9),p=Math.cos(h)*f,m=Math.sin(h)*f,x=c[Math.floor(v()*c.length)],d=2+v()*2.5,g=25+Math.floor(v()*20);if(Xe(p,m))continue;const S=Qw(p,m,d,g,x);S.mesh.position.y=Bt(p,m),Dm.push(S),De.push({x:p,z:m,r2:d*d})}for(let l=0;l<H1;l++){let h,f,p=!1;for(let m=0;m<10;m++){const x=v()*6.28,d=3+v()*(Kt*.85);if(h=Math.cos(x)*d,f=Math.sin(x)*d,p=!Xe(h,f),p)break}if(p){const m=ES(h,f);m.group.position.y=Bt(h,f)-.08,Zs.push(m),De.push({x:h,z:f,r2:2.25})}}for(let l=0;l<B1;l++){const h=jt[Math.floor(v()*jt.length)],f=v()*6.28,p=1+v()*5,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Xe(m,x))continue;const d=tS(m,x);d.group.position.y=Bt(m,x),fa.push(d),De.push({x:m,z:x,r2:1})}for(let l=0;l<G1;l++){const h=v()*6.28,f=3+v()*(Kt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Xe(p,m)||u(p,m)>1&&v()<.8)continue;const x=eS(p,m);x.group.position.y=Bt(p,m),Ri.push(x),De.push({x:p,z:m,r2:1})}for(let l=0;l<k1;l++){const h=v()*6.28,f=4+v()*(Kt*.8),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Xe(p,m)||u(p,m)>1&&v()<.8)continue;const x=nS(p,m);x.group.position.y=Bt(p,m),ef.push(x),De.push({x:p,z:m,r2:1})}for(let l=0;l<Lo;l++){let h,f,p=!1;for(let m=0;m<30;m++){const x=v()*6.28,d=20+v()*(Kt*.6);h=Math.cos(x)*d,f=Math.sin(x)*d,p=!0;for(let g=0;g<Ln.length;g++){const S=Ln[g].x-h,_=Ln[g].z-f;if(S*S+_*_<225){p=!1;break}}if(p)break}if(p){const m=TS(h,f);m.group.position.y=Bt(h,f)+1,m.flyY=Bt(h,f)+1,Ln.push(m)}}for(let l=0;l<Up;l++){const h=v()*6.28,f=2+v()*3,p=Math.cos(h)*f,m=Math.sin(h)*f;sl.push(yS(p,Bt(p,m)+1+v()*.5,m))}for(let l=0;l<V1;l++){const h=v()*6.28,f=4+v()*(Kt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Xe(p,m)||u(p,m)>1&&v()<.8)continue;const x=rS(p,m);x.group.position.y=Bt(p,m),ia.push(x),De.push({x:p,z:m,r2:1})}for(let l=0;l<X1;l++){const h=v()*6.28,f=5+v()*Kt*.6,p=Math.cos(h)*f,m=Math.sin(h)*f;bi.push(SS(p,Bt(p,m)+.5+v()*5,m))}for(let l=0;l<Z1;l++){const h=v()*6.28,f=5+v()*(Kt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Xe(p,m))continue;const x=cS(p,m);x.group.position.y=Bt(p,m),nf.push(x),De.push({x:p,z:m,r2:2.25})}for(let l=0;l<$1;l++){const h=jt[Math.floor(v()*jt.length)],f=v()*6.28,p=2+v()*4,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Xe(m,x))continue;const d=lS(m,x);d.group.position.y=Bt(m,x),sf.push(d),De.push({x:m,z:x,r2:1})}for(let l=0;l<j1;l++){const h=v()*6.28,f=6+v()*(Kt*.65),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Xe(p,m))continue;const x=uS(p,m);x.group.position.y=Bt(p,m),Um.push(x),De.push({x:p,z:m,r2:2.25})}for(let l=0;l<K1;l++){const h=jt[Math.floor(v()*jt.length)],f=v()*6.28,p=2+v()*5,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Xe(m,x))continue;const d=fS(m,x);d.group.position.y=Bt(m,x),of.push(d),De.push({x:m,z:x,r2:1.5})}for(let l=0;l<J1;l++){const h=v()*6.28,f=8+v()*(Kt*.6),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Xe(p,m))continue;const x=dS(p,m);x.group.position.y=Bt(p,m),rf.push(x),De.push({x:p,z:m,r2:3})}for(let l=0;l<Q1;l++){const h=v()*6.28,f=5+v()*(Kt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Xe(p,m))continue;const x=pS(p,m);x.group.position.y=Bt(p,m),af.push(x),De.push({x:p,z:m,r2:1.5})}for(let l=0;l<tw;l++){const h=jt[Math.floor(v()*jt.length)],f=v()*6.28,p=2+v()*4,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Xe(m,x))continue;const d=mS(m,x);d.group.position.y=Bt(m,x),cf.push(d),De.push({x:m,z:x,r2:1.5})}for(let l=0;l<ew;l++){const h=Zs.length>0?Zs[Math.floor(v()*Zs.length)]:{x:0,z:0},f=v()*6.28,p=1+v()*3,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Xe(m,x))continue;const d=gS(m,x);d.group.position.y=Bt(m,x),lf.push(d),De.push({x:m,z:x,r2:1})}for(let l=0;l<nw;l++){const h=v()*6.28,f=5+v()*(Kt*.8),p=Math.cos(h)*f,m=Math.sin(h)*f,x=1.5+v()*3.5,d=U.groundGlowColors[Math.floor(v()*U.groundGlowColors.length)],g=.03+v()*.05,S=new Y({color:d,transparent:!0,opacity:g,blending:Qt,depthWrite:!1,side:Ct}),_=new C(new Ge(x,10),S);_.rotation.x=-Math.PI/2,_.position.set(p,Bt(p,m)+.02,m),nt.add(_),uf.push({mesh:_,mat:S,phase:v()*6.28,baseOpacity:g,speed:.3+v()*.3,x:p,z:m})}for(let l=0;l<jt.length;l++){const h=jt[l],f=Bt(h.x,h.z);h.y=f,Dc[l]&&(Dc[l].position.y=f+(h.treeH||10)*.6)}if(Vo.length>0){const l=new he;for(let h=0;h<Vo.length;h++){const f=Vo[h];for(let p=0;p<f.instances.length;p++){const m=f.instances[p],x=jt[m.posIdx];m.y=x.y,l.position.set(x.x,x.y,x.z),l.rotation.set(0,x.yRot,0),l.scale.setScalar(x.scale),l.updateMatrix(),f.trunk&&f.trunk.setMatrixAt(p,l.matrix),f.canopy&&f.canopy.setMatrixAt(p,l.matrix),f.glow&&f.glow.setMatrixAt(p,l.matrix),f.detail&&f.detail.setMatrixAt(p,l.matrix)}f.trunk&&(f.trunk.instanceMatrix.needsUpdate=!0),f.canopy&&(f.canopy.instanceMatrix.needsUpdate=!0),f.glow&&(f.glow.instanceMatrix.needsUpdate=!0),f.detail&&(f.detail.instanceMatrix.needsUpdate=!0)}}}function Nm(i,t){const e=1+Ji*1.5,n=qs*.03,s=Ho*.03,o=j.pos.x,r=j.pos.y,a=j.pos.z;$w(Vo,Dc,o,r,a,t,e,n,s),Jw(t,e,n,s,o,a),bw(t,o,a);for(let u=0;u<fa.length;u++){const c=fa[u],l=c.group.position.x-o,h=c.group.position.y-r,f=c.group.position.z-a,p=l*l+h*h+f*f;if(p>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(p>900)&&(c.group.rotation.z=Math.sin(t*.8+c.phase)*.03*e+n,c.group.rotation.x=Math.sin(t*.6+c.phase+1)*.02*e+s)}for(let u=0;u<Ri.length;u++){const c=Ri[u],l=c.group.position.x-o,h=c.group.position.y-r,f=c.group.position.z-a,p=l*l+h*h+f*f;if(p>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),p>900)continue;const m=Math.sin(t*1+c.phase)*.5+.5;c.petalMat.emissiveIntensity=(.3+m*.5)*be(c.group.position.x,c.group.position.z,xe),c.group.rotation.z=Math.sin(t*.9+c.phase)*.04*e+n*.5}for(let u=0;u<ef.length;u++){const c=ef[u],l=c.group.position.x-o,h=c.group.position.y-r,f=c.group.position.z-a,p=l*l+h*h+f*f;if(p>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(p>900)&&(c.group.rotation.z=Math.sin(t*1.1+c.phase)*c.swayAmp*e+n,c.group.rotation.x=Math.sin(t*.8+c.phase+2)*c.swayAmp*.5*e+s)}for(let u=0;u<nf.length;u++){const c=nf[u],l=Math.sin(t*1.2+c.phase)*.5+.5,h=be(c.group.position.x,c.group.position.z,xe);c.orbMat.emissiveIntensity=(.5+l*.5)*h,c.hazeMat.opacity=(.04+l*.04)*h,c.group.rotation.z=Math.sin(t*.5+c.phase)*.02*e+n*.3,c.group.rotation.x=Math.sin(t*.4+c.phase+1)*.015*e+s*.3}for(let u=0;u<sf.length;u++){const c=sf[u];for(let l=0;l<c.podMats.length;l++){const h=Math.sin(t*1.5+c.phase+l*1.8)*.5+.5;c.podMats[l].emissiveIntensity=(.3+h*.5)*be(c.group.position.x,c.group.position.z,xe)}c.group.rotation.z=Math.sin(t*.35+c.phase)*.01*e+n*.2}hS(Um,i,t,xe,be);for(let u=0;u<of.length;u++){const c=of[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){for(let p=0;p<c.tipMats.length;p++){const m=Math.sin(t*1.8+c.phase+p*1.5)*.5+.5;c.tipMats[p].emissiveIntensity=(.3+m*.5)*be(c.x,c.z,xe)}c.group.rotation.z=Math.sin(t*.4+c.phase)*.015*e+n*.2,c.group.rotation.x=Math.sin(t*.35+c.phase+1)*.01*e+s*.2}}for(let u=0;u<rf.length;u++){const c=rf[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){const p=be(c.x,c.z,xe);c.columnMat.emissiveIntensity=(.3+Math.sin(t*1+c.phase)*.25)*p,c.hazeMat.opacity=(.03+Math.sin(t*.8+c.phase)*.02)*p;for(let m=0;m<c.flies.length;m++){const x=t*(2+m*.5)+m*2.1,d=.2+Math.sin(t*.7+m)*.08,g=.1+Math.sin(t*1.3+m*1.7)*.15;c.flies[m].position.set(Math.cos(x)*d,c.spadixY+g,Math.sin(x)*d)}c.group.rotation.z=Math.sin(t*.3+c.phase)*.01*e+n*.15}}for(let u=0;u<af.length;u++){const c=af[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){for(let p=0;p<c.orbMats.length;p++){const m=Math.sin(t*2+c.phase+p*1.3)*.5+.5;c.orbMats[p].emissiveIntensity=(.3+m*.5)*be(c.x,c.z,xe)}c.group.rotation.z=Math.sin(t*.45+c.phase)*.012*e+n*.2,c.group.rotation.x=Math.sin(t*.4+c.phase+1)*.008*e+s*.2}}for(let u=0;u<cf.length;u++){const c=cf[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){for(let p=0;p<c.podMats.length;p++){const m=Math.sin(t*1.5+c.phase+p*1.8)*.5+.5;c.podMats[p].emissiveIntensity=(.3+m*.4)*be(c.x,c.z,xe)}c.group.rotation.z=Math.sin(t*.6+c.phase)*.02*e+n*.25,c.group.rotation.x=Math.sin(t*.5+c.phase+1)*.015*e+s*.25}}for(let u=0;u<lf.length;u++){const c=lf[u],l=c.x-o,h=c.z-a,f=l*l+h*h;if(f>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),f<900){for(let p=0;p<c.veilMats.length;p++)c.veilMats[p].rotation.z=Math.sin(t*.8+c.phase+p*.7)*.06*e;c.group.rotation.z=Math.sin(t*.35+c.phase)*.01*e+n*.15}}for(let u=0;u<uf.length;u++){const c=uf[u],l=c.x-o,h=c.z-a;if(l*l+h*h>3600){c.mesh.visible=!1;continue}c.mesh.visible=!0;const f=Math.sin(t*c.speed+c.phase)*.3+.7;c.mat.opacity=c.baseOpacity*f*be(c.x,c.z,xe)}}function zm(i,t){for(let n=0;n<fi.length;n++){const s=fi[n],o=s.group,r=o.position.x,a=o.position.z;s._syncPhase===void 0&&(s._syncPhase=s.phase);let u=0,c=0;for(let l=0;l<fi.length;l++){if(l===n)continue;const h=fi[l],f=h.group.position.x-r,p=h.group.position.z-a;f*f+p*p<225&&(u+=h._syncPhase||h.phase,c++)}if(c>0){const l=u/c;s._syncPhase+=(l-s._syncPhase)*i*.4}}const e=He==="DEEP_NIGHT"?2:He==="DAWN"?-1.5:0;for(let n=0;n<fi.length;n++){const s=fi[n].group,o=s.position.x-j.pos.x,r=s.position.z-j.pos.z,a=s.position.y-j.pos.y;if(o*o+a*a+r*r>3025){s.visible=!1;continue}s.visible=!0;const u=fi[n],c=u.group,l=c.position.x,h=c.position.z,f=u.floatY+e;if(u._stT-=i,u._stT<=0)if(ts)u._state="display",u._stT=10+Math.random()*15;else{const S=Math.random();S<.5?(u._state="drift",u._stT=20+Math.random()*30):S<.75?(u._state="pulse",u._stT=8+Math.random()*12):(u._state="migrate",u._migrateAng=Math.random()*6.28,u._stT=15+Math.random()*20)}switch(ts&&u._state!=="display"&&(u._state="display",u._stT=10,eo("jelly",{x:l,z:h},j.pos)),u._state){case"drift":{u.driftAng+=i*.15;const S=8+Math.sin(t*.1+u.phase)*4,_=u.homeX+Math.cos(u.driftAng)*S,y=u.homeZ+Math.sin(u.driftAng)*S;c.position.x+=(_-l)*i*.3,c.position.z+=(y-h)*i*.3,c.position.y=f+Math.sin(t*u.wobble+u.phase)*1.5;break}case"pulse":{u.driftAng+=i*.08,c.position.x+=Math.cos(u.driftAng)*i*.3,c.position.z+=Math.sin(u.driftAng)*i*.3,c.position.y=f+Math.sin(t*u.wobble+u.phase)*1,u._pulseSync=Math.sin(t*2+u._syncPhase)*.5+.5;break}case"migrate":{c.position.x+=Math.cos(u._migrateAng)*i*1,c.position.z+=Math.sin(u._migrateAng)*i*1,c.position.y=f+Math.sin(t*u.wobble+u.phase)*.8,c.position.x*c.position.x+c.position.z*c.position.z>Kt*.8*(Kt*.8)&&(u._migrateAng+=Math.PI);break}case"display":{u.driftAng+=i*.4,c.position.x+=Math.cos(u.driftAng)*i*.8,c.position.z+=Math.sin(u.driftAng)*i*.8,c.position.y=f+Math.sin(t*2+u.phase)*2,u._syncPhase+=(0-u._syncPhase)*i*2;break}}const p=Bt(c.position.x,c.position.z);c.position.y<p+3&&(c.position.y=p+3),u._state==="pulse"&&Math.random()<.003&&eo("jelly",{x:l,z:h},j.pos);const m=u._syncPhase||u.phase,x=Math.sin(t*1.2+m)*.5+.5;let d=1,g=0;if(u._state==="pulse")d=1+u._pulseSync*1.5,g=u._pulseSync*.15;else if(u._state==="display"){const S=Math.sin(t*4)*.5+.5;d=1.5+S*1.2,g=.15+S*.1}else u._state==="drift"&&(d=1+x*.3);u.bellMat.emissiveIntensity=(.4+x*.8)*be(c.position.x,c.position.z,xe)*d,u.bellMat.opacity=.35+x*.25+g,c.rotation.y+=i*.2;for(let S=2;S<c.children.length;S++)c.children[S].rotation.x=Math.sin(t*2+S+m)*.15,c.children[S].rotation.z=Math.sin(t*1.5+S*.7+m)*.1}}function Fm(i,t){const e=ke.ShiftLeft||ke.ShiftRight||_r,n=He==="DAWN"?.6:He==="NIGHT"?1.3:1,s=He==="DAWN"?2:He==="NIGHT"?.6:1;for(let o=0;o<Bn.length;o++){const r=Bn[o],a=r.group,u=a.position.x,c=a.position.z,l=u-j.pos.x,h=c-j.pos.z,f=l*l+h*h;if(f>1600){a.visible=!1;continue}if(a.visible=!0,r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const b=e?3.5:2;let T=f<b*b;if(!T)for(let M=0;M<je.length;M++){if(je[M].state!=="flee")continue;const w=je[M].group.position.x-u,R=je[M].group.position.z-c;if(w*w+R*R<25){T=!0;break}}T&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(l,h),r.hopTimer=0,eo("puff",{x:u,z:c},j.pos))}if(ts&&r.state!=="startled"&&r.state!=="huddle"){let b=1/0,T=-1;for(let M=0;M<Bn.length;M++){if(M===o)continue;const w=Bn[M].group.position.x-u,R=Bn[M].group.position.z-c,L=w*w+R*R;L<b&&(b=L,T=M)}T>=0&&b>1&&(r.state="huddle",r._huddleTarget=T)}mr>8&&f<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const p=u-r._lastTX,m=c-r._lastTZ;p*p+m*m>.25&&(r._baseY=Bt(u,c),r._lastTX=u,r._lastTZ=c);const x={x:u,z:c},d=[];for(let b=0;b<Bn.length;b++){if(b===o)continue;const T=Bn[b].group.position.x,M=Bn[b].group.position.z;(T-u)*(T-u)+(M-c)*(M-c)<100&&d.push({x:T,z:M})}const g=Im(x,d,1.5),S=d.length>0?Lm(x,d):{x:0,z:0},_=g.x*2+S.x*.3,y=g.z*2+S.z*.3,A=Math.sqrt(_*_+y*y);switch(r.state){case"idle":{if(r.idleTimer-=i,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*i*.3,A>.1&&d.length>1&&(a.position.x+=S.x*.05*i,a.position.z+=S.z*.05*i),Math.random()<2e-4&&eo("puff",{x:u,z:c},j.pos),r.idleTimer<=0){const b=A>.2?Math.atan2(_,y):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+b*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=i;const T=r.hopTimer/1.2;if(T>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*s,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(T*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*i;const M=1-Math.sin(T*Math.PI)*.15,w=1+Math.sin(T*Math.PI)*.2;a.scale.set(M,w,M),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=i,r.hopTimer+=i*1.5;const b=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(b*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*i+g.x*.5*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*i+g.z*.5*i,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=i,f>225||mr<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(j.pos.x-u,j.pos.z-c),f>9){r.hopTimer+=i;const b=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(b*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*i}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!ts){r.state="idle",r.idleTimer=2;break}const b=Bn[r._huddleTarget];if(b){const T=b.group.position.x-u,M=b.group.position.z-c,w=Math.sqrt(T*T+M*M);w>.5&&(a.position.x+=T/w*r.speed*.5*i,a.position.z+=M/w*r.speed*.5*i)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=i,r._blinkTimer<=0)if(r._blinkState===0){for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let b=0;b<r.ears.length;b++){const T=r.ears[b];T.mesh.rotation.z=T.baseRotZ+Math.sin(t*3.5+T.side*1.2+r.phase)*.08}if(r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,r.sparkles)for(let b=0;b<r.sparkles.length;b++){const T=r.sparkles[b],M=t*(2+b*.7)+T.phase;T.mesh.position.set(Math.cos(M)*T.orbitR,.5+Math.sin(M*1.3)*.1,Math.sin(M)*T.orbitR),T.mat.opacity=(.3+Math.sin(t*4+T.phase)*.3)*be(a.position.x,a.position.z,xe)}r.crownMat&&(r.crownMat.emissiveIntensity=(.2+Math.sin(t*2+r.phase)*.15)*be(a.position.x,a.position.z,xe)),a.position.x*a.position.x+a.position.z*a.position.z>Kt*.85*(Kt*.85)&&(r.wanderAng+=Math.PI)}}function Om(i,t){const e=ke.ShiftLeft||ke.ShiftRight||_r;for(let n=0;n<je.length;n++){const s=je[n],o=s.group,r=o.position.x,a=o.position.z,u=r-j.pos.x,c=a-j.pos.z,l=u*u+c*c;if(l>3600){o.visible=!1;continue}o.visible=!0;const h=Math.atan2(u,c),f=e?18:12,p=f*f,m=e?10:rw,x=m*m,d=r-s._lastTX,g=a-s._lastTZ;d*d+g*g>.25&&(s._baseY=Bt(r,a),s._lastTX=r,s._lastTZ=a);const S=s._baseY;if(s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"){const R={x:r,z:a},L={x:j.pos.x,z:j.pos.z};l<x||xb(R,L,m,e)?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0,eo("deer",R,j.pos)):(l<p||gb(R,s.wanderAng,L,f,Math.PI*.5))&&(s.state="alert",s._stT=1+Math.random()*1.5,eo("deer",R,j.pos))}if(s.state!=="flee")for(let R=0;R<je.length;R++){if(R===n||je[R].state!=="flee")continue;const L=je[R].group.position.x-r,D=je[R].group.position.z-a;if(L*L+D*D<400){s.state="flee",s.wanderAng=je[R].wanderAng+(Math.random()-.5)*.4,s.fleeTimer=2+Math.random()*1.5,s._zigTimer=0;break}}const _=[];for(let R=0;R<je.length;R++){if(R===n)continue;const L=je[R].group.position.x,D=je[R].group.position.z;(L-r)*(L-r)+(D-a)*(D-a)<400&&_.push({x:L,z:D})}const y=Im({x:r,z:a},_,3),A=_.length>0?Lm({x:r,z:a},_):{x:0,z:0};(s.state==="alert"||s.state==="watching")&&(s.headLook+=(h-s.wanderAng)*.3*i);let E=s.speed,b=!1;switch(s.state){case"walk":{if(b=!0,s.walkTimer-=i,s.walkTimer<=0){const L=Math.random(),D=He==="DUSK"?.55:.4,z=He==="DEEP_NIGHT"?.25:.1;if(L<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(L<D)s.state="graze",s._stT=He==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(L<D+.1&&Fe.length>0){s.state="drink",s._stT=8;let H=1/0;for(let k=0;k<Fe.length;k++){const O=Fe[k].x-r,G=Fe[k].z-a,et=O*O+G*G;et<H&&(H=et,s._drinkTgt=Fe[k])}}else L<D+.1+z?(s.state="rest",s._stT=He==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const L=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(L-s.wanderAng)*i*.5}if(_.length>0){const L=Math.atan2(A.x*.15+y.x*.8,A.z*.15+y.z*.8);s.wanderAng+=(L-s.wanderAng)*i*.3}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const R=s._drinkTgt.x-r,L=s._drinkTgt.z-a;Math.sqrt(R*R+L*L)>2?(s.wanderAng=Math.atan2(R,L),b=!0,E=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(S-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,l<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(l<f*1.2*(f*1.2)?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,b=!0,E=s.speed*.3,s.wanderAng=h,l<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):(l>f*1.5*(f*1.5)||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{b=!0,E=s.speed*aw,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=h+s._zigDir*.3;const R=Mb({x:r,z:a},s.wanderAng,jt,3,1.5);R.x*R.x+R.z*R.z>.01&&(s.wanderAng+=Math.atan2(R.z,R.x)*.3);const L=vb({x:r,z:a},8);(L.x!==0||L.z!==0)&&(s.wanderAng=Math.atan2(L.z,L.x)),(s.fleeTimer<=0||l>f*2*(f*2))&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(b&&(o.position.x+=Math.sin(s.wanderAng)*E*i,o.position.z+=Math.cos(s.wanderAng)*E*i,s.legCycle+=i*E*3),o.position.x*o.position.x+o.position.z*o.position.z>Kt*.9*(Kt*.9)&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"){const R=S-o.position.y;Math.abs(R)>.01?o.position.y+=Math.sign(R)*Math.min(Math.abs(R),i*2):o.position.y=S}if(o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const R=h-s.wanderAng;s.headLook+=(R*.5-s.headLook)*i*3}const M=s.headBob||0;s.neckPivot.rotation.x+=(M-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,b&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let R=0;R<s.legPivots.length;R++){const L=s.legPivots[R];if(b){const D=L.isFront?0:Math.PI,z=L.side>0?Math.PI:0,H=Math.sin(s.legCycle+D+z)*.4*(E/s.speed);L.upper.rotation.x=H,L.lower.rotation.x=Math.max(0,-H*.6)}else s.state==="rest"&&o.position.y<-.1?(L.upper.rotation.x+=(.8-L.upper.rotation.x)*i*2,L.lower.rotation.x+=(1-L.lower.rotation.x)*i*2):(L.upper.rotation.x*=.9,L.lower.rotation.x*=.9)}s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9;const w=be(r,a,xe);if(s.mat.emissiveIntensity=(.3+Math.sin(t*.8+s.phase)*.2)*w,s.headLook*=.98,s.manePlanes)for(let R=0;R<s.manePlanes.length;R++)s.manePlanes[R].rotation.z=Math.sin(t*3+R*1.2+s.phase)*.15;if(s.branchOrbs)for(let R=0;R<s.branchOrbs.length;R++)s.branchOrbs[R].material.opacity=(.3+Math.sin(t*2.5+s.phase+R*1.5)*.3)*w;if(s.trailSpheres){const R=s.state==="walk"||s.state==="flee";for(let L=0;L<s.trailSpheres.length;L++){const D=s.trailSpheres[L],z=.03+L*.02;D.prevX+=(r-D.prevX)*z,D.prevY+=(o.position.y+.8-D.prevY)*z,D.prevZ+=(a-D.prevZ)*z,D.mesh.position.set(D.prevX,D.prevY+Math.sin(t*2+L*1.5)*.04,D.prevZ),D.mat.opacity=R?(.12-L*.03)*w:.02*w}}}}function Bm(i,t){for(let e=0;e<gr.length;e++){const n=gr[e],s=n.group,o=s.position.x,r=s.position.z,a=o-j.pos.x,u=r-j.pos.z;if(a*a+u*u>2025){s.visible=!1;continue}if(s.visible=!0,n._state==="patrol"){if(Math.random()<.002){let g=1/0,S=null;for(let _=0;_<ce.length;_++){const y=ce[_].x-o,A=ce[_].z-r,E=y*y+A*A;E<900&&E<g&&(g=E,S=ce[_])}for(let _=0;_<Wn.length;_++){if(Wn[_].glowIntensity<.3)continue;const y=Wn[_].x-o,A=Wn[_].z-r,E=y*y+A*A;E<900&&E<g&&(g=E,S=Wn[_])}S&&(n._state="attracted",n._attractTarget=S,n._stT=6+Math.random()*8,eo("moth",{x:o,z:r},j.pos))}const d=He==="DAWN"?.005:He==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let g=1/0,S=null;for(let _=0;_<jt.length;_++){const y=jt[_].x-o,A=jt[_].z-r,E=y*y+A*A;E<400&&E<g&&(g=E,S=jt[_])}S&&(n._state="rest",n._restTree=S,n._stT=He==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const c=He==="DEEP_NIGHT"?1.6:He==="DAWN"?.5:1,l=He==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=i*.4*c;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*l,g=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*l;s.position.x+=(d-o)*i*1.5,s.position.z+=(g-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const d=n._attractTarget,g=Math.max(.5,n._stT*.4),S=d.x+Math.cos(n.orbitAng)*g,_=d.z+Math.sin(n.orbitAng)*g;s.position.x+=(S-o)*i*2,s.position.z+=(_-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const d=n._restTree,g=d.x+.5-o,S=d.z+.5-r,_=Math.sqrt(g*g+S*S);_>.3&&(s.position.x+=g/_*i*2,s.position.z+=S/_*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(g,S);break}}const h=Bt(s.position.x,s.position.z);s.position.y<h+1.5&&(s.position.y=h+1.5);const f=n._state==="rest"?.05:.4,p=Math.sin(t*n.flapSpeed+n.phase)*f;for(let d=0;d<s._wingPivots.length;d++){const g=s._wingPivots[d];g.pivot.rotation.z=p*g.side}const m=Math.sin(t*1.5+n.phase)*.5+.5,x=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+m*.6+x)*be(s.position.x,s.position.z,xe),n.wingMat.opacity=.45+m*.25}}function Ob(i,t){const e=ke.ShiftLeft||ke.ShiftRight||_r;let n=null;if(mr>5&&(Qe==="SEEK"||Qe==="RISING")){let s=1/0;for(let o=0;o<Ln.length;o++){if(Ln[o].found)continue;const r=Ln[o].x-j.pos.x,a=Ln[o].z-j.pos.z,u=r*r+a*a;u<s&&(s=u,n=Ln[o])}}for(let s=0;s<sl.length;s++){const o=sl[s],r=t*.5+o.phase+s/Up*6.28,a=e?4+s*2:1.5+s*.8,u=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=j.pos.x+Math.cos(r)*a,o.targetY=j.pos.y-ll+u,o.targetZ=j.pos.z+Math.sin(r)*a,s===0&&n){const m=Math.min((mr-5)/3,.6);o.targetX+=(n.x-j.pos.x)*m,o.targetZ+=(n.z-j.pos.z)*m,o.targetY+=.5}const c=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*c*i,o.velY+=(o.targetY-o.group.position.y)*c*i,o.velZ+=(o.targetZ-o.group.position.z)*c*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const l=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+l*.4,o.hazeMat.opacity=.08+l*.12;const h=t*(2.5+s*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(h)*f,Math.sin(h*1.5)*.08,Math.sin(h)*f);for(let m=0;m<o.tendrils.length;m++){const x=o.tendrils[m],d=Math.sin(t*3+m*2.1+o.phase)*.3,g=.08+Math.sin(t*2+m*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+d)*g,x.mesh.position.z=Math.sin(x.baseAng+d)*g,x.mesh.rotation.y=x.baseAng+d,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+m)*.2}for(let m=0;m<o.embers.length;m++){const x=(m+1)*.08;o.embers[m].position.y=-.06-x+Math.sin(t*4+m*1.4+o.phase)*.03,o.embers[m].position.x=Math.sin(t*2.5+m*2+o.phase)*.06,o.embers[m].material.opacity=.2+Math.sin(t*5+m*1.7)*.15}o.facet.rotation.y+=i*1.5,o.facet.rotation.x+=i*.7,o.halo.rotation.z+=i*.3,o.halo2.rotation.y+=i*.2}}function Bb(i,t){for(let e=0;e<Wn.length;e++){const n=Wn[e],s=n.x-j.pos.x,o=n.z-j.pos.z,a=s*s+o*o<(gh+.5)*(gh+.5),u=a?1:0;n.glowIntensity+=(u-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*be(n.x,n.z,xe),a&&j.vel.y>0&&j.vel.y<=Vc+.5&&(j.vel.y=Vc+iw,n.glowIntensity=1.5,ub());const c=.08+n.glowIntensity*.25;n.sporeMat.opacity=c;for(let l=0;l<n.spores.length;l++){const h=n.spores[l];h.drift+=i*.3,h.mesh.position.y+=h.speed*i*(.5+n.glowIntensity),h.mesh.position.x=h.baseX+Math.sin(t*.8+h.drift)*.15,h.mesh.position.z=h.baseZ+Math.cos(t*.6+h.drift)*.12,h.mesh.position.y>.8&&(h.mesh.position.y=.03),h.mesh.scale.setScalar(.6+Math.sin(t*2+l)*.4)}for(let l=0;l<n.glowWorms.length;l++){const h=Math.sin(t*1.5+l*1.3+n.phase)*.5+.5;n.glowWorms[l].material.opacity=.1+h*.4+n.glowIntensity*.3}}}function Gb(i,t){for(let e=0;e<bi.length;e++){const n=bi[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const l=v()*6.28,h=8+v()*Kt*.5;n.homeX=Math.cos(l)*h,n.homeZ=Math.sin(l)*h,n.floatY=.5+v()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-j.pos.x,u=n.group.position.y-j.pos.y,c=n.group.position.z-j.pos.z;a*a+u*u+c*c<u0*u0*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,jS(n.group.position.x,n.group.position.y,n.group.position.z,6),ib(n.group.position,j.pos))}}function kb(i,t){const e=ta();for(let n=0;n<Fe.length;n++){const s=Fe[n],o=.015+e*.01;for(let f=0;f<s.pads.length;f++)s.pads[f].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+s.pads[f].phase)*o;const r=e*.08,a=be(s.x,s.z,xe);s.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+s.phase)*.1)*a;const u=Math.sin(t*1.2+s.phase)*.5+.5;s.flMat.emissiveIntensity=(.3+u*.5)*a;const c=.25+e*.2,l=.12+e*.08;for(let f=0;f<s.ripples.length;f++){const p=s.ripples[f],m=(t*c+p.phase)%1,x=.2+m*s.pondR*.8;p.mesh.scale.setScalar(x),p.mesh.material.opacity=(1-m)*l}const h=1+e*.5;for(let f=0;f<s.tadpoles.length;f++){const p=s.tadpoles[f];p.ang+=p.speed*h*i;const m=Math.cos(p.ang)*p.orbR,x=Math.sin(p.ang)*p.orbR;p.body.position.x=m,p.body.position.z=x,p.body.rotation.y=p.ang+Math.PI/2;const d=.02;p.tail.position.x=m-Math.cos(p.ang)*d,p.tail.position.z=x-Math.sin(p.ang)*d,p.tail.rotation.y=p.ang,p.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+f*3)*.4}}}function Hb(i,t){if(wu-=i,wu<=0){wu=.5;for(let o=0;o<ce.length;o++){const r=ce[o],a=r.x-j.pos.x,u=r.z-j.pos.z;if(a*a+u*u<36){ei={x:r.x,z:r.z},yi=0;break}}}const e=zb();if(!ei){e.visible=!1;return}if(yi+=i*12,yi>30){ei=null,yi=0,e.visible=!1;return}e.visible=!0,e.position.set(ei.x,.15,ei.z),e.scale.setScalar(yi),e.material.opacity=(1-yi/30)*.45;const n=yi,s=4;for(let o=0;o<Un.length;o++){const r=Un[o],a=r.x-ei.x,u=r.z-ei.z,c=Math.sqrt(a*a+u*u);if(Math.abs(c-n)<s){const l=1-Math.abs(c-n)/s;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+l*2)*be(r.x,r.z,xe))}}for(let o=0;o<Ri.length;o++){const r=Ri[o],a=r.group.position.x-ei.x,u=r.group.position.z-ei.z,c=Math.sqrt(a*a+u*u);if(Math.abs(c-n)<s){const l=1-Math.abs(c-n)/s;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+l*1.5)*be(r.group.position.x,r.group.position.z,xe))}}}function Vb(i,t){const e=j.pos.x;j.pos.y;const n=j.pos.z,s=ta(),o=ts?.6:s>.3?s*.4:0;for(let c=0;c<Ri.length;c++){const l=Ri[c],h=l.group.position.x,f=l.group.position.z,p=h-e,m=f-n,d=p*p+m*m<16?1:0;l._react=l._react||0,l._react+=(d-l._react)*i*(d>0?4:1.5);const g=(1+l._react*.15)*(1-o*.12),S=(1+l._react*.05)*(1-o*.15);l.group.scale.set(g,S,g),l.petalMat.emissiveIntensity+=l._react*.6*be(h,f,xe)*(1-o*.4)}for(let c=0;c<Un.length;c++){const l=Un[c],h=l.x-e,f=l.z-n,m=h*h+f*f<4?1:0;l._touch=l._touch||0,l._touch+=(m-l._touch)*i*(m>0?6:1.5);const x=s*.4;l.capMat.emissiveIntensity+=(l._touch*1.5+x)*be(l.x,l.z,xe);const d=1+l._touch*.08;l.group.scale.set(d,1+l._touch*.04,d)}for(let c=0;c<fa.length;c++){const l=fa[c],h=l.group.position.x,f=l.group.position.z,p=h-e,m=f-n,d=p*p+m*m<2.25?.65:1;l._curl=l._curl===void 0?1:l._curl,l._curl+=(d-l._curl)*i*(d<1?4:1.5),l.group.scale.set(1+(1-l._curl)*.3,l._curl,1+(1-l._curl)*.3)}Nb();const r=er==="FOG_BANK"?.5:1;let a=0,u=0;for(let c=0;c<ce.length;c++){const l=ce[c],h=l.x-e,f=l.z-n;if(h*h+f*f<36)for(let p=0;p<ce.length;p++){if(c===p)continue;const m=ce[p],x=l.x-m.x,d=l.z-m.z,g=x*x+d*d;if(g<400){a++;const S=(1-Math.sqrt(g)/20)*.8*r;if(m.mat.emissiveIntensity+=S*be(m.x,m.z,xe),u<hf){const _=ff[u],y=_.geo.attributes.position.array,A=1,E=1;y[0]=l.x,y[1]=A,y[2]=l.z,y[3]=m.x,y[4]=E,y[5]=m.z,_.geo.attributes.position.needsUpdate=!0,_.geo.computeBoundingSphere(),_.active=!0;const b=Math.sin(t*3+c*1.5+p*.7)*.3+.5;_.opacity=S*b*be(l.x,l.z,xe),_.line.material.opacity=_.opacity,_.line.visible=!0,u++}}}}for(let c=u;c<hf;c++){const l=ff[c];l.line.visible&&(l.opacity*=.85,l.line.material.opacity=l.opacity,l.opacity<.01&&(l.line.visible=!1))}return a}let fc="EXPLORE",Su=0,bu=0;function Wb(i,t){Sb(i);let e=!1;for(let x=0;x<ce.length;x++){const d=ce[x].x-j.pos.x,g=ce[x].z-j.pos.z;if(d*d+g*g<64){e=!0;break}}fc=e?"NEAR_CRYSTAL":"EXPLORE",Su+=i;const n=ta(),s=Math.max(.2,1-n*.8),o=(fc==="NEAR_CRYSTAL"?.08:.25)/s,r=Math.floor((fc==="NEAR_CRYSTAL"?120:100)*s);if(Su>o&&(Su=0,sm(0,t)<r))if(fc==="NEAR_CRYSTAL")for(let d=0;d<ce.length;d++){const g=ce[d].x-j.pos.x,S=ce[d].z-j.pos.z;g*g+S*S<100&&_c(ce[d].x,Bt(ce[d].x,ce[d].z)+1,ce[d].z,3+Math.random()*4)}else if(Math.random()<.3&&Ri.length>0){const d=Ri[Math.floor(Math.random()*Ri.length)];if(d._react>.3){const g=d.group.position.x,S=d.group.position.z;_c(g+(Math.random()-.5)*2,Bt(g,S)+.5,S+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,g=5+Math.random()*25,S=j.pos.x+Math.cos(d)*g,_=j.pos.z+Math.sin(d)*g;_c(S,Bt(S,_),_,6+Math.random()*10)}if(bu+=i,bu>.2){bu=0;for(let x=0;x<Un.length;x++){const d=Un[x],g=d.x-j.pos.x,S=d.z-j.pos.z;g*g+S*S<200&&Math.random()<.15&&kS(d.x,.6*d.group.scale.x,d.z)}}for(let x=0;x<Un.length;x++){const d=Un[x],g=d.x-j.pos.x,S=(d.group.position.y||0)-j.pos.y,_=d.z-j.pos.z;if(g*g+S*S+_*_>2500){d.group.visible&&(d.group.visible=!1);continue}d.group.visible||(d.group.visible=!0);const A=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+A*.8)*be(d.x,d.z,xe)}for(let x=0;x<ce.length;x++){const d=ce[x],g=Math.sin(t*.6+d.phase)*.5+.5,S=be(d.x,d.z,xe);d.mat.emissiveIntensity=(1+g*1.5)*S,d.group.children[0].rotation.y+=i*.15,d.light&&(d.light.intensity=(.3+g*.4)*S)}if(!cs.length)for(let x=0;x<ce.length;x++)cs.push({idx:x,dist:0});const a=j.pos.x-B0,u=j.pos.z-G0;if(a*a+u*u>1){B0=j.pos.x,G0=j.pos.z;for(let x=0;x<ce.length;x++){const d=ce[x],g=d.x-j.pos.x,S=d.z-j.pos.z;cs[x].idx=x,cs[x].dist=g*g+S*S}cs.sort((x,d)=>x.dist-d.dist)}for(let x=0;x<Ds.length;x++)if(x<cs.length&&cs[x].dist<2500){const d=ce[cs[x].idx],g=Math.sin(t*.6+d.phase)*.5+.5;Ds[x].position.set(d.x,1.5,d.z),Ds[x].intensity=(1.5+g*2)*be(d.x,d.z,xe),Ds[x].distance=16,Ds[x].color.setHex(U.crystal)}else Ds[x].intensity=0;if(Ji>.8&&Math.random()<.005)for(let x=0;x<ia.length;x++){const d=ia[x];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let g=0;g<8;g++)Zp(d.x,d.h+.05,d.z);for(let g=2;g<d.group.children.length;g++)d.group.children[g].visible=!1;d.regrowTimer=15+Math.random()*10}}const c=Ji>.3?(Ji-.3)*.02:0,l=ts?.03:0;if(Math.random()<c+l)for(let x=0;x<jt.length;x++){const d=jt[x],g=d.x-j.pos.x,S=d.z-j.pos.z;if(g*g+S*S<900&&Math.random()<.15){const _=(d.treeH||10)*.7+(d.y||0);t2(d.x,_,d.z);break}}zm(i,t),Fm(i,t),Om(i,t),Bm(i,t),Xp(i,t),Nm(i,t);const h=j.pos.x,f=j.pos.y,p=j.pos.z;for(let x=0;x<Zs.length;x++){const d=Zs[x],g=d.x||d.group.position.x,S=d.z||d.group.position.z,_=g-h,y=(d.group.position.y||0)-f,A=S-p,E=_*_+y*y+A*A;if(E>2500){d.group.visible&&(d.group.visible=!1);continue}if(d.group.visible||(d.group.visible=!0),!d.sparkles||E>400)continue;let b=0;for(let D=0;D<ce.length;D++){const z=ce[D].x-g,H=ce[D].z-S,k=z*z+H*H;k<100&&(b=Math.max(b,(1-Math.sqrt(k)/10)*.6))}const T=g-j.pos.x,M=S-j.pos.z,w=T*T+M*M,R=w<25?(1-Math.sqrt(w)/5)*.3:0;let L=0;if(ei&&yi>0){const D=g-ei.x,z=S-ei.z,H=Math.sqrt(D*D+z*z);Math.abs(H-yi)<3&&(L=(1-Math.abs(H-yi)/3)*.8)}for(let D=0;D<d.sparkles.length;D++){const z=Math.sin(t*4+x*2.3+D*1.7)*.35;d.sparkles[D].material.opacity=.15+z+b+R+L}d.mossMat&&R>0&&(d.mossMat.emissiveIntensity=.05+R*.4*Math.sin(t*2+x)*.5+.5)}Ob(i,t),aS(ia,i,t,j.pos),Bb(i,t),Gb(i,t),kb(i,t),cm(i,t,j.pos),oS(i,t),e2(i,t),YS(i),KS(i),Hb(i);const m=Vb(i,t);if(g2(i,t),FS(t),j.onGround&&j.vel.x*j.vel.x+j.vel.z*j.vel.z>.5){const d=Math.atan2(j.vel.x,j.vel.z),g=ke.ShiftLeft||ke.ShiftRight||_r;s2(j.pos.x,j.pos.z,d,g)}o2(i,ta()),db(i,j.pos,Fe,Dm,He,ta()),nb(i),Eb(j.pos,je,Bn,fi,gr,Wn,Fe,m),Ab(i)}let $e=0,df=!1;function Xb(){df||(df=!0,vw(!0),Ub())}function Gm(){requestAnimationFrame(Gm);const i=Math.min(Np.getDelta(),.1);$e+=i,y2(i);const t=A2(i,$e,j.pos);C2(i,j.pos,t,qs,Ho),Fw(i,$e,He,xe,er);const e=be(j.pos.x,j.pos.z,1),n=e>ls?1.5:.8;ls+=(e-ls)*Math.min(n*i,1);const s=1-ls;tn.toneMappingExposure=1.5+1.3*ls,nt.fog.density*=1+.5*s;const o=nt.fog.color.r*.299+nt.fog.color.g*.587+nt.fog.color.b*.114;xi.setRGB(o,o,o),nt.fog.color.lerp(xi,s*.7);const r=ti.color.r*.299+ti.color.g*.587+ti.color.b*.114;xi.setRGB(r,r,r),ti.color.lerp(xi,s*.7);const a=ti.groundColor.r*.299+ti.groundColor.g*.587+ti.groundColor.b*.114;xi.setRGB(a,a,a),ti.groundColor.lerp(xi,s*.7);const u=nt.background.r*.299+nt.background.g*.587+nt.background.b*.114;xi.setRGB(u,u,u),nt.background.lerp(xi,s*.5),ti.intensity*=.6+.4*ls,Vs.intensity*=.4+.6*ls,Vs.distance*=.6+.4*ls,Vs.color.copy(hc);const c=hc.r*.299+hc.g*.587+hc.b*.114;xi.setRGB(c,c,c),Vs.color.lerp(xi,s*.5),Si>0&&(ti.intensity+=Si*.8,nt.background.r=Math.min(nt.background.r+Si*.08,.25),nt.background.g=Math.min(nt.background.g+Si*.08,.25),nt.background.b=Math.min(nt.background.b+Si*.12,.35)),K2(i,Ji,t,ts,Si,He,j.pos,Fe),cb(j.pos),Math.sqrt(j.vel.x*j.vel.x+j.vel.z*j.vel.z);let l=!1;for(let h=0;h<Fe.length;h++){const f=Fe[h].x-j.pos.x,p=Fe[h].z-j.pos.z;if(f*f+p*p<225){l=!0;break}}if(!l)for(let h=0;h<Wn.length;h++){const f=Wn[h].x-j.pos.x,p=Wn[h].z-j.pos.z;if(f*f+p*p<144){l=!0;break}}if(mb(i),HS(qs,Ho),sS(qs,Ho,Ji),JS(qs,Ho),!df){yn.position.set(0,ll,0),yn.rotation.order="YXZ",yn.rotation.y+=i*.08,yn.rotation.x=0;for(let h=0;h<Un.length;h++){const f=Un[h],p=Math.sin($e*f.speed+f.phase)*.5+.5;f.capMat.emissiveIntensity=f.base*(.5+p*.8)*xe}for(let h=0;h<ce.length;h++){const f=ce[h];f.mat.emissiveIntensity=(1+Math.sin($e*.6+f.phase)*.5*1.5+.75)*xe}zm(i,$e),Fm(i,$e),Om(i,$e),Bm(i,$e),Xp(i,$e),Nm(i,$e),cm(i,$e,j.pos);for(let h=0;h<bi.length;h++)bi[h].popped||(bi[h].group.position.y=bi[h].floatY+Math.sin($e*.6+bi[h].phase)*bi[h].bobAmp);for(let h=0;h<Fe.length;h++)for(let f=0;f<Fe[h].pads.length;f++)Fe[h].pads[f].mesh.position.y=.05+Math.sin($e*.8+Fe[h].pads[f].phase)*.015;for(let h=0;h<Ln.length;h++){const f=Ln[h],p=Math.sin($e*1.5+f.phase)*.5+.5;f.group.position.y=f.flyY+Math.sin($e*.8+f.phase)*.3,f.glowMat.opacity=.3+p*.4}p0();return}kw(i),Wb(i,$e),sm(i,$e),VS(i),yn.position.copy(j.pos),yn.position.y+=qp,yn.rotation.order="YXZ",yn.rotation.y=la,yn.rotation.x=js,Ib(i,j.pos),p0()}try{bh(0,0,5),Pw(),_2({scene:nt,moon:ri,moon2:zf,hemiLight:ti,playerLight:Vs}),Fb();const i=Aw();Bw(jt,Zs),Gw(S0),Ow(t=>{let e=!1;for(let n=0;n<Fe.length;n++){const s=Fe[n].x-j.pos.x,o=Fe[n].z-j.pos.z;if(s*s+o*o<16){e=!0;break}}Q2(t,e),Math.random()<.4&&S0(j.pos.x,j.pos.z,1)},()=>tb(),t=>eb(t)),E2(),R2(),OS(150),GS(60),gw(),WS(q1),qS(20),iS(40),$S(30),QS(50),i2(),zw(),LS(),NS(),zS(),j2(),Tb(),Pb(),Lb(),yb(Ln),m2({orbs:Ln,obeliskGroup:AS(),obeliskMat:RS(),obeliskGlowMat:CS(),pinnacleOrb:PS(),pinnacleRings:IS(),moatMesh:DS(),moatMat:US(),rainbowArcs:ha,player:j,makeLaser:a2,orbHudEl:Db(),deers:je,puffs:Bn,jellies:fi,moths:gr,trees:jt,treeMeshes:Vo,groundMesh:i,playOrbCollect:sb,playOrbWarble:ob,playLaserZap:rb,playLaserHum:ab,stopLaserHums:lb,notifyOrbCollected:wb}),xw(Xb);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*Kt*.7,s=Math.cos(e)*n,o=Math.sin(e)*n;_c(s,Bt(s,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+jt.length+" mush="+Un.length+" crystals="+ce.length+" orbs="+Ln.length+" creatures="+(fi.length+Bn.length+je.length+gr.length)+" wisps="+sl.length+" dandelions="+ia.length+" fairyRings="+Wn.length+" bubbles="+bi.length+" ponds="+Fe.length+" scene="+nt.children.length),Gm()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
