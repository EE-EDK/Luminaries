(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="172",P0=0,Gu=1,I0=2,Rd=1,Cd=2,Ai=3,es=0,yn=1,Dt=2,Di=0,vo=1,he=2,Hu=3,Vu=4,L0=5,ws=100,D0=101,U0=102,N0=103,z0=104,F0=200,O0=201,B0=202,k0=203,Il=204,Ll=205,G0=206,H0=207,V0=208,W0=209,X0=210,q0=211,Y0=212,Z0=213,$0=214,Dl=0,Ul=1,Nl=2,Co=3,zl=4,Fl=5,Ol=6,Bl=7,Pd=0,j0=1,K0=2,ts=0,J0=1,Q0=2,tm=3,Id=4,em=5,nm=6,im=7,Ld=300,Po=301,Io=302,kl=303,Gl=304,dc=306,Ha=1e3,bs=1001,Hl=1002,zn=1003,sm=1004,Gr=1005,pi=1006,wc=1007,Ts=1008,Fi=1009,Dd=1010,Ud=1011,Sr=1012,iu=1013,Ds=1014,mi=1015,Ui=1016,su=1017,ou=1018,Lo=1020,Nd=35902,zd=1021,Fd=1022,ei=1023,Od=1024,Bd=1025,_o=1026,Do=1027,ru=1028,au=1029,kd=1030,cu=1031,lu=1033,Ra=33776,Ca=33777,Pa=33778,Ia=33779,Vl=35840,Wl=35841,Xl=35842,ql=35843,Yl=36196,Zl=37492,$l=37496,jl=37808,Kl=37809,Jl=37810,Ql=37811,th=37812,eh=37813,nh=37814,ih=37815,sh=37816,oh=37817,rh=37818,ah=37819,ch=37820,lh=37821,La=36492,hh=36494,uh=36495,Gd=36283,fh=36284,dh=36285,ph=36286,om=3200,rm=3201,Hd=0,am=1,$i="",Mn="srgb",Uo="srgb-linear",Va="linear",de="srgb",Gs=7680,Wu=519,cm=512,lm=513,hm=514,Vd=515,um=516,fm=517,dm=518,pm=519,Xu=35044,Ae=35048,qu="300 es",Ii=2e3,Wa=2001;class ko{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sc=Math.PI/180,mh=180/Math.PI;function Go(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function mm(s,t){return(s%t+t)%t}function bc(s,t,e){return(1-e)*s+e*t}function qo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,o,r,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],p=i[3],g=i[6],T=i[1],M=i[4],_=i[7],A=i[2],E=i[5],b=i[8];return o[0]=r*x+a*T+c*A,o[3]=r*p+a*M+c*E,o[6]=r*g+a*_+c*b,o[1]=l*x+h*T+u*A,o[4]=l*p+h*M+u*E,o[7]=l*g+h*_+u*b,o[2]=f*x+d*T+m*A,o[5]=f*p+d*M+m*E,o[8]=f*g+d*_+m*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,d=l*o-r*c,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*r)*x,t[3]=f*x,t[4]=(h*e-i*c)*x,t[5]=(i*o-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new Wt;function Wd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gm(){const s=Xa("canvas");return s.style.display="block",s}const Yu={};function ao(s){s in Yu||(Yu[s]=!0,console.warn(s))}function xm(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function vm(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _m(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zu=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mm(){const s={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===de&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(i.r=Mo(i.r),i.g=Mo(i.g),i.b=Mo(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$i?Va:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Uo]:{primaries:t,whitePoint:n,transfer:Va,toXYZ:Zu,fromXYZ:$u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Zu,fromXYZ:$u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),s}const oe=Mm();function Ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hs;class ym{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=Xa("canvas")),Hs.width=t.width,Hs.height=t.height;const n=Hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Ni(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wm=0;class Xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Go(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Ec(i[r].image)):o.push(Ec(i[r]))}else o=Ec(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ec(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ym.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sm=0;class tn extends ko{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=bs,i=bs,o=pi,r=Ts,a=ei,c=Fi,l=tn.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Go(),this.name="",this.source=new Xd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ld)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ha:t.x=t.x-Math.floor(t.x);break;case bs:t.x=t.x<0?0:1;break;case Hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ha:t.y=t.y-Math.floor(t.y);break;case bs:t.y=t.y<0?0:1;break;case Hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ld;tn.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],p=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,_=(d+1)/2,A=(g+1)/2,E=(h+f)/4,b=(u+x)/4,S=(m+p)/4;return M>_&&M>A?M<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(M),i=E/n,o=b/n):_>A?_<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(_),n=E/i,o=S/i):A<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),n=b/o,i=S/o),this.set(n,i,o,e),this}let T=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-m)/T,this.y=(u-x)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bm extends ko{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Xd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends bm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qd extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tm extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=zn,this.minFilter=zn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=o[r+0],d=o[r+1],m=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==m){let p=1-a;const g=c*f+l*d+h*m+u*x,T=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const A=Math.sqrt(M),E=Math.atan2(A,g*T);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}const _=a*T;if(c=c*p+f*_,l=l*p+d*_,h=h*p+m*_,u=u*p+x*_,p===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=o[r],f=o[r+1],d=o[r+2],m=o[r+3];return t[e]=a*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-a*d,t[e+2]=l*m+h*d+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(o/2),f=c(n/2),d=c(i/2),m=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(o-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(r-i)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ju.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=i+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ac.copy(this).projectOnVector(t),this.sub(Ac)}reflect(t){return this.sub(Ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ac=new N,ju=new Lr;class Fs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Kn):Kn.fromBufferAttribute(o,r),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Vr.subVectors(this.max,Yo),Vs.subVectors(t.a,Yo),Ws.subVectors(t.b,Yo),Xs.subVectors(t.c,Yo),Bi.subVectors(Ws,Vs),ki.subVectors(Xs,Ws),rs.subVectors(Vs,Xs);let e=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-rs.z,rs.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,rs.z,0,-rs.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-rs.y,rs.x,0];return!Rc(e,Vs,Ws,Xs,Vr)||(e=[1,0,0,0,1,0,0,0,1],!Rc(e,Vs,Ws,Xs,Vr))?!1:(Wr.crossVectors(Bi,ki),e=[Wr.x,Wr.y,Wr.z],Rc(e,Vs,Ws,Xs,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new N,new N,new N,new N,new N,new N,new N,new N],Kn=new N,Hr=new Fs,Vs=new N,Ws=new N,Xs=new N,Bi=new N,ki=new N,rs=new N,Yo=new N,Vr=new N,Wr=new N,as=new N;function Rc(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){as.fromArray(s,o);const a=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),c=t.dot(as),l=e.dot(as),h=n.dot(as);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Em=new Fs,Zo=new N,Cc=new N;class Os{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Em.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const e=Zo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Zo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(Cc)),this.expandByPoint(Zo.copy(t.center).sub(Cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new N,Pc=new N,Xr=new N,Gi=new N,Ic=new N,qr=new N,Lc=new N;class hu{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pc.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(Pc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Xr),a=Gi.dot(this.direction),c=-Gi.dot(Xr),l=Gi.lengthSq(),h=Math.abs(1-r*r);let u,f,d,m;if(h>0)if(u=r*c-a,f=r*a-c,m=o*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-o,-c),o),d=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),d=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pc).addScaledVector(Xr,f),d}intersectSphere(t,e){Si.subVectors(t.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,i,o){Ic.subVectors(e,t),qr.subVectors(n,t),Lc.crossVectors(Ic,qr);let r=this.direction.dot(Lc),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Gi.subVectors(this.origin,t);const c=a*this.direction.dot(qr.crossVectors(Gi,qr));if(c<0)return null;const l=a*this.direction.dot(Ic.cross(Gi));if(l<0||c+l>r)return null;const h=-a*Gi.dot(Lc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,o,r,a,c,l,h,u,f,d,m,x,p){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,u,f,d,m,x,p)}set(t,e,n,i,o,r,a,c,l,h,u,f,d,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=o,g[5]=r,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/qs.setFromMatrixColumn(t,0).length(),o=1/qs.setFromMatrixColumn(t,1).length(),r=1/qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=m+d*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,m=l*h,x=l*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,m=l*h,x=l*u;e[0]=f-x*a,e[4]=-r*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=r*h,e[9]=x-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,d=r*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,d=r*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=r*c,d=r*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=r*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Am,t,Rm)}lookAt(t,e,n){const i=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Hi.crossVectors(n,Cn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Hi.crossVectors(n,Cn)),Hi.normalize(),Yr.crossVectors(Cn,Hi),i[0]=Hi.x,i[4]=Yr.x,i[8]=Cn.x,i[1]=Hi.y,i[5]=Yr.y,i[9]=Cn.y,i[2]=Hi.z,i[6]=Yr.z,i[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],T=n[3],M=n[7],_=n[11],A=n[15],E=i[0],b=i[4],S=i[8],y=i[12],v=i[1],R=i[5],U=i[9],D=i[13],z=i[2],V=i[6],G=i[10],Z=i[14],W=i[3],rt=i[7],ft=i[11],wt=i[15];return o[0]=r*E+a*v+c*z+l*W,o[4]=r*b+a*R+c*V+l*rt,o[8]=r*S+a*U+c*G+l*ft,o[12]=r*y+a*D+c*Z+l*wt,o[1]=h*E+u*v+f*z+d*W,o[5]=h*b+u*R+f*V+d*rt,o[9]=h*S+u*U+f*G+d*ft,o[13]=h*y+u*D+f*Z+d*wt,o[2]=m*E+x*v+p*z+g*W,o[6]=m*b+x*R+p*V+g*rt,o[10]=m*S+x*U+p*G+g*ft,o[14]=m*y+x*D+p*Z+g*wt,o[3]=T*E+M*v+_*z+A*W,o[7]=T*b+M*R+_*V+A*rt,o[11]=T*S+M*U+_*G+A*ft,o[15]=T*y+M*D+_*Z+A*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+o*c*u-i*l*u-o*a*f+n*l*f+i*a*d-n*c*d)+x*(+e*c*d-e*l*f+o*r*f-i*r*d+i*l*h-o*c*h)+p*(+e*l*u-e*a*d-o*r*u+n*r*d+o*a*h-n*l*h)+g*(-i*a*h-e*c*u+e*a*f+i*r*u-n*r*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],T=u*p*l-x*f*l+x*c*d-a*p*d-u*c*g+a*f*g,M=m*f*l-h*p*l-m*c*d+r*p*d+h*c*g-r*f*g,_=h*x*l-m*u*l+m*a*d-r*x*d-h*a*g+r*u*g,A=m*u*c-h*x*c-m*a*f+r*x*f+h*a*p-r*u*p,E=e*T+n*M+i*_+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=T*b,t[1]=(x*f*o-u*p*o-x*i*d+n*p*d+u*i*g-n*f*g)*b,t[2]=(a*p*o-x*c*o+x*i*l-n*p*l-a*i*g+n*c*g)*b,t[3]=(u*c*o-a*f*o-u*i*l+n*f*l+a*i*d-n*c*d)*b,t[4]=M*b,t[5]=(h*p*o-m*f*o+m*i*d-e*p*d-h*i*g+e*f*g)*b,t[6]=(m*c*o-r*p*o-m*i*l+e*p*l+r*i*g-e*c*g)*b,t[7]=(r*f*o-h*c*o+h*i*l-e*f*l-r*i*d+e*c*d)*b,t[8]=_*b,t[9]=(m*u*o-h*x*o-m*n*d+e*x*d+h*n*g-e*u*g)*b,t[10]=(r*x*o-m*a*o+m*n*l-e*x*l-r*n*g+e*a*g)*b,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*d-e*a*d)*b,t[12]=A*b,t[13]=(h*x*i-m*u*i+m*n*f-e*x*f-h*n*p+e*u*p)*b,t[14]=(m*a*i-r*x*i-m*n*c+e*x*c+r*n*p-e*a*p)*b,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,d=o*h,m=o*u,x=r*h,p=r*u,g=a*u,T=c*l,M=c*h,_=c*u,A=n.x,E=n.y,b=n.z;return i[0]=(1-(x+g))*A,i[1]=(d+_)*A,i[2]=(m-M)*A,i[3]=0,i[4]=(d-_)*E,i[5]=(1-(f+g))*E,i[6]=(p+T)*E,i[7]=0,i[8]=(m+M)*b,i[9]=(p-T)*b,i[10]=(1-(f+x))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=qs.set(i[0],i[1],i[2]).length();const r=qs.set(i[4],i[5],i[6]).length(),a=qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Jn.copy(this);const l=1/o,h=1/r,u=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Ii){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(a===Ii)d=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Wa)d=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Ii){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(r-o),f=(e+t)*l,d=(n+i)*h;let m,x;if(a===Ii)m=(r+o)*u,x=-2*u;else if(a===Wa)m=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qs=new N,Jn=new fe,Am=new N(0,0,0),Rm=new N(1,1,1),Hi=new N,Yr=new N,Cn=new N,Ku=new fe,Ju=new Lr;class xi{constructor(t=0,e=0,n=0,i=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cm=0;const Qu=new N,Ys=new Lr,bi=new fe,Zr=new N,$o=new N,Pm=new N,Im=new Lr,tf=new N(1,0,0),ef=new N(0,1,0),nf=new N(0,0,1),sf={type:"added"},Lm={type:"removed"},Zs={type:"childadded",child:null},Dc={type:"childremoved",child:null};class me extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new N,e=new xi,n=new Lr,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Wt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(tf,t)}rotateY(t){return this.rotateOnAxis(ef,t)}rotateZ(t){return this.rotateOnAxis(nf,t)}translateOnAxis(t,e){return Qu.copy(t).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tf,t)}translateY(t){return this.translateOnAxis(ef,t)}translateZ(t){return this.translateOnAxis(nf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zr.copy(t):Zr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt($o,Zr,this.up):bi.lookAt(Zr,$o,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Ys.setFromRotationMatrix(bi),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sf),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lm),Dc.child=t,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sf),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,Pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,Im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new N(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new N,Ti=new N,Uc=new N,Ei=new N,$s=new N,js=new N,of=new N,Nc=new N,zc=new N,Fc=new N,Oc=new pe,Bc=new pe,kc=new pe;class ti{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Qn.subVectors(t,e),i.cross(Qn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Qn.subVectors(i,e),Ti.subVectors(n,e),Uc.subVectors(t,e);const r=Qn.dot(Qn),a=Qn.dot(Ti),c=Qn.dot(Uc),l=Ti.dot(Ti),h=Ti.dot(Uc),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,m=(r*h-a*c)*f;return o.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ei.x),c.addScaledVector(r,Ei.y),c.addScaledVector(a,Ei.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return Oc.setScalar(0),Bc.setScalar(0),kc.setScalar(0),Oc.fromBufferAttribute(t,e),Bc.fromBufferAttribute(t,n),kc.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Oc,o.x),r.addScaledVector(Bc,o.y),r.addScaledVector(kc,o.z),r}static isFrontFacing(t,e,n,i){return Qn.subVectors(n,e),Ti.subVectors(t,e),Qn.cross(Ti).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Qn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ti.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return ti.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;$s.subVectors(i,n),js.subVectors(o,n),Nc.subVectors(t,n);const c=$s.dot(Nc),l=js.dot(Nc);if(c<=0&&l<=0)return e.copy(n);zc.subVectors(t,i);const h=$s.dot(zc),u=js.dot(zc);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector($s,r);Fc.subVectors(t,o);const d=$s.dot(Fc),m=js.dot(Fc);if(m>=0&&d<=m)return e.copy(o);const x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(js,a);const p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return of.subVectors(o,i),a=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(of,a);const g=1/(p+x+f);return r=x*g,a=f*g,e.copy(n).addScaledVector($s,r).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Gc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class st{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=mm(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Gc(r,o,t+1/3),this.g=Gc(r,o,t),this.b=Gc(r,o,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=Mn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=Zd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return oe.fromWorkingColorSpace(je.copy(this),t),Math.round($t(je.r*255,0,255))*65536+Math.round($t(je.g*255,0,255))*256+Math.round($t(je.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(je.copy(this),e);const n=je.r,i=je.g,o=je.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Mn){oe.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,i=je.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL($r);const n=bc(Vi.h,$r.h,e),i=bc(Vi.s,$r.s,e),o=bc(Vi.l,$r.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new st;st.NAMES=Zd;let Dm=0;class Bs extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=vo,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Ll,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Il&&(n.blendSrc=this.blendSrc),this.blendDst!==Ll&&(n.blendDst=this.blendDst),this.blendEquation!==ws&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Y extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new N,jr=new pt;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xu,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),i=Sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),i=Sn(i,this.array),o=Sn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xu&&(t.usage=this.usage),t}}class $d extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jd extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Um=0;const kn=new fe,Hc=new me,Ks=new N,Pn=new Fs,jo=new Fs,Be=new N;class be extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wd(t)?jd:$d)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return Hc.lookAt(t),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ht(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(Pn.min,jo.min),Pn.expandByPoint(Be),Be.addVectors(Pn.max,jo.max),Pn.expandByPoint(Be)):(Pn.expandByPoint(jo.min),Pn.expandByPoint(jo.max))}Pn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Be.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Ks.fromBufferAttribute(t,l),Be.add(Ks)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new N,c[S]=new N;const l=new N,h=new N,u=new N,f=new pt,d=new pt,m=new pt,x=new N,p=new N;function g(S,y,v){l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),f.fromBufferAttribute(o,S),d.fromBufferAttribute(o,y),m.fromBufferAttribute(o,v),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(R),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(R),a[S].add(x),a[y].add(x),a[v].add(x),c[S].add(p),c[y].add(p),c[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let S=0,y=T.length;S<y;++S){const v=T[S],R=v.start,U=v.count;for(let D=R,z=R+U;D<z;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const M=new N,_=new N,A=new N,E=new N;function b(S){A.fromBufferAttribute(i,S),E.copy(A);const y=a[S];M.copy(y),M.sub(A.multiplyScalar(A.dot(y))).normalize(),_.crossVectors(E,y);const R=_.dot(c[S])<0?-1:1;r.setXYZW(S,M.x,M.y,M.z,R)}for(let S=0,y=T.length;S<y;++S){const v=T[S],R=v.start,U=v.count;for(let D=R,z=R+U;D<z;D+=3)b(t.getX(D+0)),b(t.getX(D+1)),b(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,o=new N,r=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,p),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let g=0;g<h;g++)f[m++]=l[d++]}return new We(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rf=new fe,cs=new hu,Kr=new Os,af=new N,Jr=new N,Qr=new N,ta=new N,Vc=new N,ea=new N,cf=new N,na=new N;class I extends me{constructor(t=new be,e=new Y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){ea.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Vc.fromBufferAttribute(u,t),r?ea.addScaledVector(Vc,h):ea.addScaledVector(Vc.sub(e),h))}e.add(ea)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(o),cs.copy(t.ray).recast(t.near),!(Kr.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Kr,af)===null||cs.origin.distanceToSquared(af)>(t.far-t.near)**2))&&(rf.copy(o).invert(),cs.copy(t.ray).applyMatrix4(rf),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=r[p.materialIndex],T=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=T,A=M;_<A;_+=3){const E=a.getX(_),b=a.getX(_+1),S=a.getX(_+2);i=ia(this,g,t,n,l,h,u,E,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const T=a.getX(p),M=a.getX(p+1),_=a.getX(p+2);i=ia(this,r,t,n,l,h,u,T,M,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=r[p.materialIndex],T=Math.max(p.start,d.start),M=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let _=T,A=M;_<A;_+=3){const E=_,b=_+1,S=_+2;i=ia(this,g,t,n,l,h,u,E,b,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const T=p,M=p+1,_=p+2;i=ia(this,r,t,n,l,h,u,T,M,_),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Nm(s,t,e,n,i,o,r,a){let c;if(t.side===yn?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===es,a),c===null)return null;na.copy(a),na.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(na);return l<e.near||l>e.far?null:{distance:l,point:na.clone(),object:s}}function ia(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,Jr),s.getVertexPosition(c,Qr),s.getVertexPosition(l,ta);const h=Nm(s,t,e,n,Jr,Qr,ta,cf);if(h){const u=new N;ti.getBarycoord(cf,Jr,Qr,ta,u),i&&(h.uv=ti.getInterpolatedAttribute(i,a,c,l,u,new pt)),o&&(h.uv1=ti.getInterpolatedAttribute(o,a,c,l,u,new pt)),r&&(h.normal=ti.getInterpolatedAttribute(r,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};ti.getNormal(Jr,Qr,ta,f.normal),h.face=f,h.barycoord=u}return h}class Dr extends be{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,o,4),m("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(u,2));function m(x,p,g,T,M,_,A,E,b,S,y){const v=_/b,R=A/S,U=_/2,D=A/2,z=E/2,V=b+1,G=S+1;let Z=0,W=0;const rt=new N;for(let ft=0;ft<G;ft++){const wt=ft*R-D;for(let Ft=0;Ft<V;Ft++){const jt=Ft*v-U;rt[x]=jt*T,rt[p]=wt*M,rt[g]=z,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[p]=0,rt[g]=E>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ft/b),u.push(1-ft/S),Z+=1}}for(let ft=0;ft<S;ft++)for(let wt=0;wt<b;wt++){const Ft=f+wt+V*ft,jt=f+wt+V*(ft+1),tt=f+(wt+1)+V*(ft+1),ct=f+(wt+1)+V*ft;c.push(Ft,jt,ct),c.push(jt,tt,ct),W+=6}a.addGroup(d,W,y),d+=W,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function No(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function on(s){const t={};for(let e=0;e<s.length;e++){const n=No(s[e]);for(const i in n)t[i]=n[i]}return t}function zm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Kd(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const qa={clone:No,merge:on};var Fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fm,this.fragmentShader=Om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=No(t.uniforms),this.uniformsGroups=zm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jd extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new N,lf=new pt,hf=new pt;class Ln extends Jd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mh*2*Math.atan(Math.tan(Sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,lf,hf),e.subVectors(hf,lf)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Js=-90,Qs=1;class Bm extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ln(Js,Qs,t,e);i.layers=this.layers,this.add(i);const o=new Ln(Js,Qs,t,e);o.layers=this.layers,this.add(o);const r=new Ln(Js,Qs,t,e);r.layers=this.layers,this.add(r);const a=new Ln(Js,Qs,t,e);a.layers=this.layers,this.add(a);const c=new Ln(Js,Qs,t,e);c.layers=this.layers,this.add(c);const l=new Ln(Js,Qs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Qd extends tn{constructor(t,e,n,i,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Po,super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class km extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Qd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Dr(5,5,5),o=new Tn({name:"CubemapFromEquirect",uniforms:No(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Di});o.uniforms.tEquirect.value=e;const r=new I(i,o),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=pi),new Bm(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class uu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(t),this.density=e}clone(){return new uu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gm extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Hm extends tn{constructor(t=null,e=1,n=1,i,o,r,a,c,l=zn,h=zn,u,f){super(null,r,a,c,l,h,i,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi extends We{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const to=new fe,uf=new fe,sa=[],ff=new Fs,Vm=new fe,Ko=new I,Jo=new Os;class ns extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,to),ff.copy(t.boundingBox).applyMatrix4(to),this.boundingBox.union(ff)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,to),Jo.copy(t.boundingSphere).applyMatrix4(to),this.boundingSphere.union(Jo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(n),t.ray.intersectsSphere(Jo)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,to),uf.multiplyMatrices(n,to),Ko.matrixWorld=uf,Ko.raycast(t,sa);for(let r=0,a=sa.length;r<a;r++){const c=sa[r];c.instanceId=o,c.object=this,e.push(c)}sa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hm(new Float32Array(i*this.count),i,this.count,ru,mi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Wc=new N,Wm=new N,Xm=new Wt;class ps{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Wc.subVectors(n,e).cross(Wm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xm.getNormalMatrix(t),i=this.coplanarPoint(Wc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Os,oa=new N;class fu{constructor(t=new ps,e=new ps,n=new ps,i=new ps,o=new ps,r=new ps){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ii){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],x=i[10],p=i[11],g=i[12],T=i[13],M=i[14],_=i[15];if(n[0].setComponents(c-o,f-l,p-d,_-g).normalize(),n[1].setComponents(c+o,f+l,p+d,_+g).normalize(),n[2].setComponents(c+r,f+h,p+m,_+T).normalize(),n[3].setComponents(c-r,f-h,p-m,_-T).normalize(),n[4].setComponents(c-a,f-u,p-x,_-M).normalize(),e===Ii)n[5].setComponents(c+a,f+u,p+x,_+M).normalize();else if(e===Wa)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(oa.x=i.normal.x>0?t.max.x:t.min.x,oa.y=i.normal.y>0?t.max.y:t.min.y,oa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class du extends Bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ya=new N,Za=new N,df=new fe,Qo=new hu,ra=new Os,Xc=new N,pf=new N;class tp extends me{constructor(t=new be,e=new du){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Ya.fromBufferAttribute(e,i-1),Za.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ya.distanceTo(Za);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=o,t.ray.intersectsSphere(ra)===!1)return;df.copy(i).invert(),Qo.copy(t.ray).applyMatrix4(df);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let x=d,p=m-1;x<p;x+=l){const g=h.getX(x),T=h.getX(x+1),M=aa(this,t,Qo,c,g,T);M&&e.push(M)}if(this.isLineLoop){const x=h.getX(m-1),p=h.getX(d),g=aa(this,t,Qo,c,x,p);g&&e.push(g)}}else{const d=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let x=d,p=m-1;x<p;x+=l){const g=aa(this,t,Qo,c,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=aa(this,t,Qo,c,m-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function aa(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(Ya.fromBufferAttribute(r,i),Za.fromBufferAttribute(r,o),e.distanceSqToSegment(Ya,Za,Xc,pf)>n)return;Xc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Xc);if(!(c<t.near||c>t.far))return{distance:c,point:pf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const mf=new N,gf=new N;class qm extends tp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)mf.fromBufferAttribute(e,i),gf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mf.distanceTo(gf);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pu extends Bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xf=new fe,gh=new hu,ca=new Os,la=new N;class ep extends me{constructor(t=new be,e=new pu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=o,t.ray.intersectsSphere(ca)===!1)return;xf.copy(i).invert(),gh.copy(t.ray).applyMatrix4(xf);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let m=f,x=d;m<x;m++){const p=l.getX(m);la.fromBufferAttribute(u,p),vf(la,p,c,i,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let m=f,x=d;m<x;m++)la.fromBufferAttribute(u,m),vf(la,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function vf(s,t,e,n,i,o,r){const a=gh.distanceSqToPoint(s);if(a<e){const c=new N;gh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class re extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}class mu extends tn{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class np extends tn{constructor(t,e,n,i,o,r,a,c,l,h=_o){if(h!==_o&&h!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_o&&(n=Ds),n===void 0&&h===Do&&(n=Lo),super(null,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:zn,this.minFilter=c!==void 0?c:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new pt:new N);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],r=[],a=new N,c=new fe;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new N)}o[0]=new N,r[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos($t(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,m))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos($t(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let m=1;m<=t;m++)o[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),r[m].crossVectors(i[m],o[m])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gu extends Mi{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ym extends gu{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function xu(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,d*=h,i(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const ha=new N,qc=new xu,Yc=new xu,Zc=new xu;class Ur extends Mi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(ha.subVectors(i[0],i[1]).add(i[0]),l=ha);const u=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(ha.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=ha),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),qc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,p),Yc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,p),Zc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(qc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Yc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Zc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(qc.calc(c),Yc.calc(c),Zc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _f(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function Zm(s,t){const e=1-s;return e*e*t}function $m(s,t){return 2*(1-s)*s*t}function jm(s,t){return s*s*t}function mr(s,t,e,n){return Zm(s,t)+$m(s,e)+jm(s,n)}function Km(s,t){const e=1-s;return e*e*e*t}function Jm(s,t){const e=1-s;return 3*e*e*s*t}function Qm(s,t){return 3*(1-s)*s*s*t}function tg(s,t){return s*s*s*t}function gr(s,t,e,n,i){return Km(s,t)+Jm(s,e)+Qm(s,n)+tg(s,i)}class ip extends Mi{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(gr(t,i.x,o.x,r.x,a.x),gr(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eg extends Mi{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(gr(t,i.x,o.x,r.x,a.x),gr(t,i.y,o.y,r.y,a.y),gr(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sp extends Mi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends Mi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class op extends Mi{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(mr(t,i.x,o.x,r.x),mr(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rp extends Mi{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(mr(t,i.x,o.x,r.x),mr(t,i.y,o.y,r.y),mr(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ap extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(_f(a,c.x,l.x,h.x,u.x),_f(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var xh=Object.freeze({__proto__:null,ArcCurve:Ym,CatmullRomCurve3:Ur,CubicBezierCurve:ip,CubicBezierCurve3:eg,EllipseCurve:gu,LineCurve:sp,LineCurve3:vu,QuadraticBezierCurve:op,QuadraticBezierCurve3:rp,SplineCurve:ap});class ng extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new xh[i.type]().fromJSON(i))}return this}}class $a extends ng{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new sp(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new op(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new ip(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ap(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new gu(t,e,n,i,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ye extends be{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new N,h=new pt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mt extends be{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],f=[],d=[];let m=0;const x=[],p=n/2;let g=0;T(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(d,2));function T(){const _=new N,A=new N;let E=0;const b=(e-t)/n;for(let S=0;S<=o;S++){const y=[],v=S/o,R=v*(e-t)+t;for(let U=0;U<=i;U++){const D=U/i,z=D*c+a,V=Math.sin(z),G=Math.cos(z);A.x=R*V,A.y=-v*n+p,A.z=R*G,u.push(A.x,A.y,A.z),_.set(V,b,G).normalize(),f.push(_.x,_.y,_.z),d.push(D,1-v),y.push(m++)}x.push(y)}for(let S=0;S<i;S++)for(let y=0;y<o;y++){const v=x[y][S],R=x[y+1][S],U=x[y+1][S+1],D=x[y][S+1];(t>0||y!==0)&&(h.push(v,R,D),E+=3),(e>0||y!==o-1)&&(h.push(R,U,D),E+=3)}l.addGroup(g,E,0),g+=E}function M(_){const A=m,E=new pt,b=new N;let S=0;const y=_===!0?t:e,v=_===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),m++;const R=m;for(let U=0;U<=i;U++){const z=U/i*c+a,V=Math.cos(z),G=Math.sin(z);b.x=y*G,b.y=p*v,b.z=y*V,u.push(b.x,b.y,b.z),f.push(0,v,0),E.x=V*.5+.5,E.y=G*.5*v+.5,d.push(E.x,E.y),m++}for(let U=0;U<i;U++){const D=A+U,z=R+U;_===!0?h.push(z,z+1,D):h.push(z+1,z,D),S+=3}l.addGroup(g,S,_===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yn extends Mt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Yn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nr extends be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),h(),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(o.slice(),3)),this.setAttribute("uv",new Ht(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const M=new N,_=new N,A=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],M),d(e[E+1],_),d(e[E+2],A),c(M,_,A,T)}function c(T,M,_,A){const E=A+1,b=[];for(let S=0;S<=E;S++){b[S]=[];const y=T.clone().lerp(_,S/E),v=M.clone().lerp(_,S/E),R=E-S;for(let U=0;U<=R;U++)U===0&&S===E?b[S][U]=y:b[S][U]=y.clone().lerp(v,U/R)}for(let S=0;S<E;S++)for(let y=0;y<2*(E-S)-1;y++){const v=Math.floor(y/2);y%2===0?(f(b[S][v+1]),f(b[S+1][v]),f(b[S][v])):(f(b[S][v+1]),f(b[S+1][v+1]),f(b[S+1][v]))}}function l(T){const M=new N;for(let _=0;_<o.length;_+=3)M.x=o[_+0],M.y=o[_+1],M.z=o[_+2],M.normalize().multiplyScalar(T),o[_+0]=M.x,o[_+1]=M.y,o[_+2]=M.z}function h(){const T=new N;for(let M=0;M<o.length;M+=3){T.x=o[M+0],T.y=o[M+1],T.z=o[M+2];const _=p(T)/2/Math.PI+.5,A=g(T)/Math.PI+.5;r.push(_,1-A)}m(),u()}function u(){for(let T=0;T<r.length;T+=6){const M=r[T+0],_=r[T+2],A=r[T+4],E=Math.max(M,_,A),b=Math.min(M,_,A);E>.9&&b<.1&&(M<.2&&(r[T+0]+=1),_<.2&&(r[T+2]+=1),A<.2&&(r[T+4]+=1))}}function f(T){o.push(T.x,T.y,T.z)}function d(T,M){const _=T*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function m(){const T=new N,M=new N,_=new N,A=new N,E=new pt,b=new pt,S=new pt;for(let y=0,v=0;y<o.length;y+=9,v+=6){T.set(o[y+0],o[y+1],o[y+2]),M.set(o[y+3],o[y+4],o[y+5]),_.set(o[y+6],o[y+7],o[y+8]),E.set(r[v+0],r[v+1]),b.set(r[v+2],r[v+3]),S.set(r[v+4],r[v+5]),A.copy(T).add(M).add(_).divideScalar(3);const R=p(A);x(E,v+0,T,R),x(b,v+2,M,R),x(S,v+4,_,R)}}function x(T,M,_,A){A<0&&T.x===1&&(r[M]=T.x-1),_.x===0&&_.z===0&&(r[M]=A/2/Math.PI+.5)}function p(T){return Math.atan2(T.z,-T.x)}function g(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.vertices,t.indices,t.radius,t.details)}}class _u extends Nr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _u(t.radius,t.detail)}}class ja extends $a{constructor(t){super(t),this.uuid=Go(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new $a().fromJSON(i))}return this}}const ig={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=cp(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,f,d;if(n&&(o=cg(s,t,o,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)u=s[m],f=s[m+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return br(o,r,e,a,c,d,0),r}};function cp(s,t,e,n,i){let o,r;if(i===_g(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Mf(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Mf(o,s[o],s[o+1],r);return r&&pc(r,r.next)&&(Er(r),r=r.next),r}function Us(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(pc(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(s,t,e,n,i,o,r){if(!s)return;!r&&o&&dg(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?og(s,n,i,o):sg(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Er(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=rg(Us(s),t,e),br(s,t,e,n,i,o,2)):r===2&&ag(s,t,e,n,i,o):br(Us(s),t,e,n,i,o,1);break}}}function sg(s){const t=s.prev,e=s,n=s.next;if(Ee(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=i<o?i<r?i:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,f=i>o?i>r?i:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&fo(i,a,o,c,r,l,m.x,m.y)&&Ee(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function og(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Ee(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,h=i.y,u=o.y,f=r.y,d=a<c?a<l?a:l:c<l?c:l,m=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,g=vh(d,m,t,e,n),T=vh(x,p,t,e,n);let M=s.prevZ,_=s.nextZ;for(;M&&M.z>=g&&_&&_.z<=T;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==i&&M!==r&&fo(a,h,c,u,l,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=d&&_.x<=x&&_.y>=m&&_.y<=p&&_!==i&&_!==r&&fo(a,h,c,u,l,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=p&&M!==i&&M!==r&&fo(a,h,c,u,l,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=T;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=p&&_!==i&&_!==r&&fo(a,h,c,u,l,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function rg(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!pc(i,o)&&lp(i,n,n.next,o)&&Tr(i,o)&&Tr(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Er(n),Er(n.next),n=s=o),n=n.next}while(n!==s);return Us(n)}function ag(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&gg(r,a)){let c=hp(r,a);r=Us(r,r.next),c=Us(c,c.next),br(r,t,e,n,i,o,0),br(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function cg(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=cp(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(mg(l));for(i.sort(lg),o=0;o<i.length;o++)e=hg(i[o],e);return e}function lg(s,t){return s.x-t.x}function hg(s,t){const e=ug(s,t);if(!e)return t;const n=hp(e,s);return Us(n,n.next),Us(e,e.next)}function ug(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&fo(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Tr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&fg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function fg(s,t){return Ee(s.prev,s,t.prev)<0&&Ee(t.next,s,s.next)<0}function dg(s,t,e,n){let i=s;do i.z===0&&(i.z=vh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,pg(i)}function pg(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function vh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function mg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function fo(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function gg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!xg(s,t)&&(Tr(s,t)&&Tr(t,s)&&vg(s,t)&&(Ee(s.prev,s,t.prev)||Ee(s,t.prev,t))||pc(s,t)&&Ee(s.prev,s,s.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function pc(s,t){return s.x===t.x&&s.y===t.y}function lp(s,t,e,n){const i=fa(Ee(s,t,e)),o=fa(Ee(s,t,n)),r=fa(Ee(e,n,s)),a=fa(Ee(e,n,t));return!!(i!==o&&r!==a||i===0&&ua(s,e,t)||o===0&&ua(s,n,t)||r===0&&ua(e,s,n)||a===0&&ua(e,t,n))}function ua(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function fa(s){return s>0?1:s<0?-1:0}function xg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&lp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Tr(s,t){return Ee(s.prev,s,s.next)<0?Ee(s,t,s.next)>=0&&Ee(s,s.prev,t)>=0:Ee(s,t,s.prev)<0||Ee(s,s.next,t)<0}function vg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function hp(s,t){const e=new _h(s.i,s.x,s.y),n=new _h(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Mf(s,t,e,n){const i=new _h(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Er(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _h(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _g(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class xr{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return xr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];yf(t),wf(n,t);let r=t.length;e.forEach(yf);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,wf(n,e[c]);const a=ig.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function yf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function wf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Cs extends Nr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cs(t.radius,t.detail)}}class Mu extends Nr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mu(t.radius,t.detail)}}class ge extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const T=g*f-r;for(let M=0;M<l;M++){const _=M*u-o;m.push(_,-T,0),x.push(0,0,1),p.push(M/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let T=0;T<a;T++){const M=T+l*g,_=T+l*(g+1),A=T+1+l*(g+1),E=T+1+l*g;d.push(M,_,E),d.push(_,A,E)}this.setIndex(d),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.width,t.height,t.widthSegments,t.heightSegments)}}class zo extends be{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,d=new N,m=new pt;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){const g=o+p/n*r;d.x=u*Math.cos(g),d.y=u*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<i;x++){const p=x*(n+1);for(let g=0;g<n;g++){const T=g+p,M=T,_=T+n+1,A=T+n+2,E=T+1;a.push(M,_,E),a.push(_,A,E)}}this.setIndex(a),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ar extends be{constructor(t=new ja([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ht(i,3)),this.setAttribute("normal",new Ht(o,3)),this.setAttribute("uv",new Ht(r,2));function l(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const m=f.holes;xr.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){const T=m[p];xr.isClockWise(T)===!0&&(m[p]=T.reverse())}const x=xr.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){const T=m[p];d=d.concat(T)}for(let p=0,g=d.length;p<g;p++){const T=d[p];i.push(T.x,T.y,0),o.push(0,0,1),r.push(T.x,T.y)}for(let p=0,g=x.length;p<g;p++){const T=x[p],M=T[0]+u,_=T[1]+u,A=T[2]+u;n.push(M,_,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Mg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new Ar(n,t.curveSegments)}}function Mg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class j extends be{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new N,f=new N,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const T=[],M=g/n;let _=0;g===0&&r===0?_=.5/e:g===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(i+E*o)*Math.sin(r+M*a),u.y=t*Math.cos(r+M*a),u.z=t*Math.sin(i+E*o)*Math.sin(r+M*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(E+_,1-M),T.push(l++)}h.push(T)}for(let g=0;g<n;g++)for(let T=0;T<e;T++){const M=h[g][T+1],_=h[g][T],A=h[g+1][T],E=h[g+1][T+1];(g!==0||r>0)&&d.push(M,_,E),(g!==n-1||c<Math.PI)&&d.push(_,A,E)}this.setIndex(d),this.setAttribute("position",new Ht(m,3)),this.setAttribute("normal",new Ht(x,3)),this.setAttribute("uv",new Ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new j(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Se extends be{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const x=m/i*o,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const x=(i+1)*d+m-1,p=(i+1)*(d-1)+m-1,g=(i+1)*(d-1)+m,T=(i+1)*d+m;r.push(x,p,T),r.push(p,g,T)}this.setIndex(r),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class bn extends be{constructor(t=new rp(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,c=new N,l=new pt;let h=new N;const u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(d,2));function x(){for(let M=0;M<e;M++)p(M);p(o===!1?e:0),T(),g()}function p(M){h=t.getPointAt(M/e,h);const _=r.normals[M],A=r.binormals[M];for(let E=0;E<=i;E++){const b=E/i*Math.PI*2,S=Math.sin(b),y=-Math.cos(b);c.x=y*_.x+S*A.x,c.y=y*_.y+S*A.y,c.z=y*_.z+S*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let _=1;_<=i;_++){const A=(i+1)*(M-1)+(_-1),E=(i+1)*M+(_-1),b=(i+1)*M+_,S=(i+1)*(M-1)+_;m.push(A,E,S),m.push(E,b,S)}}function T(){for(let M=0;M<=e;M++)for(let _=0;_<=i;_++)l.x=M/e,l.y=_/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new bn(new xh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class K extends Bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yg extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wg extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yu extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sg extends yu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $c=new fe,Sf=new N,bf=new N;class up{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fu,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sf),bf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bf),e.updateMatrixWorld(),$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tf=new fe,tr=new N,jc=new N;class bg extends up{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),jc.copy(n.position),jc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jc),n.updateMatrixWorld(),i.makeTranslation(-tr.x,-tr.y,-tr.z),Tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tf)}}class Ho extends yu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wu extends Jd{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tg extends up{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mc extends yu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Eg extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ef();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ef(){return performance.now()}function Af(s,t,e,n){const i=Ag(n);switch(e){case zd:return s*t;case Od:return s*t;case Bd:return s*t*2;case ru:return s*t/i.components*i.byteLength;case au:return s*t/i.components*i.byteLength;case kd:return s*t*2/i.components*i.byteLength;case cu:return s*t*2/i.components*i.byteLength;case Fd:return s*t*3/i.components*i.byteLength;case ei:return s*t*4/i.components*i.byteLength;case lu:return s*t*4/i.components*i.byteLength;case Ra:case Ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pa:case Ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wl:case ql:return Math.max(s,16)*Math.max(t,8)/4;case Vl:case Xl:return Math.max(s,8)*Math.max(t,8)/2;case Yl:case Zl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case th:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case eh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case nh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ih:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sh:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case oh:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case rh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ah:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ch:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case lh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case La:case hh:case uh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Gd:case fh:return Math.ceil(s/4)*Math.ceil(t/4)*8;case dh:case ph:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(s){switch(s){case Fi:case Dd:return{byteLength:1,components:1};case Sr:case Ud:case Ui:return{byteLength:2,components:1};case su:case ou:return{byteLength:2,components:4};case Ds:case iu:case mi:return{byteLength:4,components:1};case Nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dp(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Rg(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
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
#endif`,Ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ng=`#ifdef USE_AOMAP
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
#endif`,zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hg=`#ifdef USE_IRIDESCENCE
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
#endif`,Vg=`#ifdef USE_BUMPMAP
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jg=`#define PI 3.141592653589793
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
} // validated`,Qg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ax=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
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
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Ax=`struct PhysicalMaterial {
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
}`,Rx=`
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ix=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ox=`#if defined( USE_POINTS_UV )
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
#endif`,Bx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
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
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dv=`float getShadowMask() {
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
}`,pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mv=`#ifdef USE_SKINNING
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
#endif`,gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cv=`uniform sampler2D t2D;
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,Nv=`#if DEPTH_PACKING == 3200
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
}`,zv=`#define DISTANCE
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
}`,Fv=`#define DISTANCE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`uniform float scale;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Hv=`#include <common>
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Wv=`#define LAMBERT
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define MATCAP
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
}`,Yv=`#define MATCAP
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
}`,Zv=`#define NORMAL
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
}`,$v=`#define NORMAL
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
}`,jv=`#define PHONG
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
}`,Kv=`#define PHONG
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
}`,Jv=`#define STANDARD
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
}`,Qv=`#define STANDARD
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
}`,t_=`#define TOON
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
}`,e_=`#define TOON
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
}`,n_=`uniform float size;
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
}`,i_=`uniform vec3 diffuse;
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
}`,s_=`#include <common>
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
}`,o_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,a_=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Cg,alphahash_pars_fragment:Pg,alphamap_fragment:Ig,alphamap_pars_fragment:Lg,alphatest_fragment:Dg,alphatest_pars_fragment:Ug,aomap_fragment:Ng,aomap_pars_fragment:zg,batching_pars_vertex:Fg,batching_vertex:Og,begin_vertex:Bg,beginnormal_vertex:kg,bsdfs:Gg,iridescence_fragment:Hg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Wg,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Yg,color_fragment:Zg,color_pars_fragment:$g,color_pars_vertex:jg,color_vertex:Kg,common:Jg,cube_uv_reflection_fragment:Qg,defaultnormal_vertex:tx,displacementmap_pars_vertex:ex,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:sx,colorspace_fragment:ox,colorspace_pars_fragment:rx,envmap_fragment:ax,envmap_common_pars_fragment:cx,envmap_pars_fragment:lx,envmap_pars_vertex:hx,envmap_physical_pars_fragment:yx,envmap_vertex:ux,fog_vertex:fx,fog_pars_vertex:dx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:xx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:_x,lights_pars_begin:Mx,lights_toon_fragment:wx,lights_toon_pars_fragment:Sx,lights_phong_fragment:bx,lights_phong_pars_fragment:Tx,lights_physical_fragment:Ex,lights_physical_pars_fragment:Ax,lights_fragment_begin:Rx,lights_fragment_maps:Cx,lights_fragment_end:Px,logdepthbuf_fragment:Ix,logdepthbuf_pars_fragment:Lx,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Ux,map_fragment:Nx,map_pars_fragment:zx,map_particle_fragment:Fx,map_particle_pars_fragment:Ox,metalnessmap_fragment:Bx,metalnessmap_pars_fragment:kx,morphinstance_vertex:Gx,morphcolor_vertex:Hx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:qx,normal_fragment_maps:Yx,normal_pars_fragment:Zx,normal_pars_vertex:$x,normal_vertex:jx,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:Qx,clearcoat_pars_fragment:tv,iridescence_pars_fragment:ev,opaque_fragment:nv,packing:iv,premultiplied_alpha_fragment:sv,project_vertex:ov,dithering_fragment:rv,dithering_pars_fragment:av,roughnessmap_fragment:cv,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:uv,shadowmap_vertex:fv,shadowmask_pars_fragment:dv,skinbase_vertex:pv,skinning_pars_vertex:mv,skinning_vertex:gv,skinnormal_vertex:xv,specularmap_fragment:vv,specularmap_pars_fragment:_v,tonemapping_fragment:Mv,tonemapping_pars_fragment:yv,transmission_fragment:wv,transmission_pars_fragment:Sv,uv_pars_fragment:bv,uv_pars_vertex:Tv,uv_vertex:Ev,worldpos_vertex:Av,background_vert:Rv,background_frag:Cv,backgroundCube_vert:Pv,backgroundCube_frag:Iv,cube_vert:Lv,cube_frag:Dv,depth_vert:Uv,depth_frag:Nv,distanceRGBA_vert:zv,distanceRGBA_frag:Fv,equirect_vert:Ov,equirect_frag:Bv,linedashed_vert:kv,linedashed_frag:Gv,meshbasic_vert:Hv,meshbasic_frag:Vv,meshlambert_vert:Wv,meshlambert_frag:Xv,meshmatcap_vert:qv,meshmatcap_frag:Yv,meshnormal_vert:Zv,meshnormal_frag:$v,meshphong_vert:jv,meshphong_frag:Kv,meshphysical_vert:Jv,meshphysical_frag:Qv,meshtoon_vert:t_,meshtoon_frag:e_,points_vert:n_,points_frag:i_,shadow_vert:s_,shadow_frag:o_,sprite_vert:r_,sprite_frag:a_},mt={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},ci={basic:{uniforms:on([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:on([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new st(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:on([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:on([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:on([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new st(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:on([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:on([mt.points,mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:on([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:on([mt.common,mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:on([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:on([mt.sprite,mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:on([mt.common,mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:on([mt.lights,mt.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};ci.physical={uniforms:on([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const da={r:0,b:0,g:0},hs=new xi,c_=new fe;function l_(s,t,e,n,i,o,r){const a=new st(0);let c=o===!0?0:1,l,h,u=null,f=0,d=null;function m(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1;const A=m(M);A===null?g(a,c):A&&A.isColor&&(g(A,1),_=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,_){const A=m(_);A&&(A.isCubeTexture||A.mapping===dc)?(h===void 0&&(h=new I(new Dr(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:No(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hs.copy(_.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(hs)),h.material.toneMapped=oe.getTransfer(A.colorSpace)!==de,(u!==A||f!==A.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new I(new ge(2,2),new Tn({name:"BackgroundMaterial",uniforms:No(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=oe.getTransfer(A.colorSpace)!==de,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,_){M.getRGB(da,Kd(s)),n.buffers.color.setClear(da.r,da.g,da.b,_,r)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,g(a,c)},render:x,addToRenderList:p,dispose:T}}function h_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let o=i,r=!1;function a(v,R,U,D,z){let V=!1;const G=u(D,U,R);o!==G&&(o=G,l(o.object)),V=d(v,D,U,z),V&&m(v,D,U,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,_(v,R,U,D),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,R,U){const D=U.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let V=z[R.id];V===void 0&&(V={},z[R.id]=V);let G=V[D];return G===void 0&&(G=f(c()),V[D]=G),G}function f(v){const R=[],U=[],D=[];for(let z=0;z<e;z++)R[z]=0,U[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:D,object:v,attributes:{},index:null}}function d(v,R,U,D){const z=o.attributes,V=R.attributes;let G=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){const ft=z[W];let wt=V[W];if(wt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(wt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(wt=v.instanceColor)),ft===void 0||ft.attribute!==wt||wt&&ft.data!==wt.data)return!0;G++}return o.attributesNum!==G||o.index!==D}function m(v,R,U,D){const z={},V=R.attributes;let G=0;const Z=U.getAttributes();for(const W in Z)if(Z[W].location>=0){let ft=V[W];ft===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor));const wt={};wt.attribute=ft,ft&&ft.data&&(wt.data=ft.data),z[W]=wt,G++}o.attributes=z,o.attributesNum=G,o.index=D}function x(){const v=o.newAttributes;for(let R=0,U=v.length;R<U;R++)v[R]=0}function p(v){g(v,0)}function g(v,R){const U=o.newAttributes,D=o.enabledAttributes,z=o.attributeDivisors;U[v]=1,D[v]===0&&(s.enableVertexAttribArray(v),D[v]=1),z[v]!==R&&(s.vertexAttribDivisor(v,R),z[v]=R)}function T(){const v=o.newAttributes,R=o.enabledAttributes;for(let U=0,D=R.length;U<D;U++)R[U]!==v[U]&&(s.disableVertexAttribArray(U),R[U]=0)}function M(v,R,U,D,z,V,G){G===!0?s.vertexAttribIPointer(v,R,U,z,V):s.vertexAttribPointer(v,R,U,D,z,V)}function _(v,R,U,D){x();const z=D.attributes,V=U.getAttributes(),G=R.defaultAttributeValues;for(const Z in V){const W=V[Z];if(W.location>=0){let rt=z[Z];if(rt===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const ft=rt.normalized,wt=rt.itemSize,Ft=t.get(rt);if(Ft===void 0)continue;const jt=Ft.buffer,tt=Ft.type,ct=Ft.bytesPerElement,St=tt===s.INT||tt===s.UNSIGNED_INT||rt.gpuType===iu;if(rt.isInterleavedBufferAttribute){const dt=rt.data,zt=dt.stride,kt=rt.offset;if(dt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<W.locationSize;Yt++)g(W.location+Yt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Yt=0;Yt<W.locationSize;Yt++)p(W.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Yt=0;Yt<W.locationSize;Yt++)M(W.location+Yt,wt/W.locationSize,tt,ft,zt*ct,(kt+wt/W.locationSize*Yt)*ct,St)}else{if(rt.isInstancedBufferAttribute){for(let dt=0;dt<W.locationSize;dt++)g(W.location+dt,rt.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let dt=0;dt<W.locationSize;dt++)p(W.location+dt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let dt=0;dt<W.locationSize;dt++)M(W.location+dt,wt/W.locationSize,tt,ft,wt*ct,wt/W.locationSize*dt*ct,St)}}else if(G!==void 0){const ft=G[Z];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(W.location,ft);break;case 3:s.vertexAttrib3fv(W.location,ft);break;case 4:s.vertexAttrib4fv(W.location,ft);break;default:s.vertexAttrib1fv(W.location,ft)}}}}T()}function A(){S();for(const v in n){const R=n[v];for(const U in R){const D=R[U];for(const z in D)h(D[z].object),delete D[z];delete R[U]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const U in R){const D=R[U];for(const z in D)h(D[z].object),delete D[z];delete R[U]}delete n[v.id]}function b(v){for(const R in n){const U=n[R];if(U[v.id]===void 0)continue;const D=U[v.id];for(const z in D)h(D[z].object),delete D[z];delete U[v.id]}}function S(){y(),r=!0,o!==i&&(o=i,l(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function u_(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)r(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function f_(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(b){return!(b!==ei&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const S=b===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Fi&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==mi&&!S)}function c(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:E}}function d_(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new ps,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||o&&!p)o?h(null):l();else{const T=o?0:n,M=T*4;let _=g.clippingState||null;c.value=_,_=h(m,f,M,d);for(let A=0;A!==M;++A)_[A]=e[A];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=c.value,m!==!0||p===null){const g=d+x*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,_=d;M!==x;++M,_+=4)r.copy(u[M]).applyMatrix4(T,a),r.normal.toArray(p,_),p[_+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function p_(s){let t=new WeakMap;function e(r,a){return a===kl?r.mapping=Po:a===Gl&&(r.mapping=Io),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===kl||a===Gl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new km(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const po=4,Rf=[.125,.215,.35,.446,.526,.582],Ss=20,Kc=new wu,Cf=new st;let Jc=null,Qc=0,tl=0,el=!1;const ms=(1+Math.sqrt(5))/2,eo=1/ms,Pf=[new N(-ms,eo,0),new N(ms,eo,0),new N(-eo,0,ms),new N(eo,0,ms),new N(0,ms,-eo),new N(0,ms,eo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class If{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jc,Qc,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Po||t.mapping===Io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:Ui,format:ei,colorSpace:Uo,depthBuffer:!1},i=Lf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(o)),this._blurMaterial=g_(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,Kc)}_sceneToCubeUV(t,e,n,i){const a=new Ln(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Cf),h.toneMapping=ts,h.autoClear=!1;const d=new Y({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new I(new Dr,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(Cf),x=!0);for(let g=0;g<6;g++){const T=g%3;T===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):T===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const M=this._cubeSize;pa(i,T*M,g>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Po||t.mapping===Io;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;pa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Kc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Pf[(i-o-1)%Pf.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Ss-1),x=o/m,p=isFinite(o)?1+Math.floor(h*x):Ss;p>Ss&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ss}`);const g=[];let T=0;for(let b=0;b<Ss;++b){const S=b/x,y=Math.exp(-S*S/2);g.push(y),b===0?T+=y:b<p&&(T+=2*y)}for(let b=0;b<g.length;b++)g[b]=g[b]/T;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-n;const _=this._sizeLods[i],A=3*_*(i>M-po?i-M+po:0),E=4*(this._cubeSize-_);pa(e,A,E,3*_,2*_),c.setRenderTarget(e),c.render(u,Kc)}}function m_(s){const t=[],e=[],n=[];let i=s;const o=s-po+1+Rf.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-po?c=Rf[r-s+po-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,p=2,g=1,T=new Float32Array(x*m*d),M=new Float32Array(p*m*d),_=new Float32Array(g*m*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,S=E>2?0:-1,y=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];T.set(y,x*m*E),M.set(f,p*m*E);const v=[E,E,E,E,E,E];_.set(v,g*m*E)}const A=new be;A.setAttribute("position",new We(T,x)),A.setAttribute("uv",new We(M,p)),A.setAttribute("faceIndex",new We(_,g)),t.push(A),i>po&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lf(s,t,e){const n=new ni(s,t,e);return n.texture.mapping=dc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function g_(s,t,e){const n=new Float32Array(Ss),i=new N(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Df(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Uf(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Su(){return`

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
	`}function x_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===kl||c===Gl,h=c===Po||c===Io;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new If(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new If(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function v_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function __(s,t,e,n){const i={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",r),delete i[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(d!==null){const T=d.array;x=d.version;for(let M=0,_=T.length;M<_;M+=3){const A=T[M+0],E=T[M+1],b=T[M+2];f.push(A,E,E,b,b,A)}}else if(m!==void 0){const T=m.array;x=m.version;for(let M=0,_=T.length/3-1;M<_;M+=3){const A=M+0,E=M+1,b=M+2;f.push(A,E,E,b,b,A)}}else return;const p=new(Wd(f)?jd:$d)(f,1);p.version=x;const g=o.get(u);g&&t.remove(g),o.set(u,p)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function M_(s,t,e){let n;function i(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,d){s.drawElements(n,d,o,f*r),e.update(d,n,1)}function l(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,o,f*r,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function u(f,d,m,x){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)l(f[g]/r,d[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,x,0,m);let g=0;for(let T=0;T<m;T++)g+=d[T]*x[T];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function y_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function w_(s,t,e){const n=new WeakMap,i=new pe;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),x===!0&&(_=2),p===!0&&(_=3);let A=a.attributes.position.count*_,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*E*4*u),S=new qd(b,A,E,u);S.type=mi,S.needsUpdate=!0;const y=_*4;for(let R=0;R<u;R++){const U=g[R],D=T[R],z=M[R],V=A*E*4*R;for(let G=0;G<U.count;G++){const Z=G*y;m===!0&&(i.fromBufferAttribute(U,G),b[V+Z+0]=i.x,b[V+Z+1]=i.y,b[V+Z+2]=i.z,b[V+Z+3]=0),x===!0&&(i.fromBufferAttribute(D,G),b[V+Z+4]=i.x,b[V+Z+5]=i.y,b[V+Z+6]=i.z,b[V+Z+7]=0),p===!0&&(i.fromBufferAttribute(z,G),b[V+Z+8]=i.x,b[V+Z+9]=i.y,b[V+Z+10]=i.z,b[V+Z+11]=z.itemSize===4?i.w:1)}}f={count:u,texture:S,size:new pt(A,E)},n.set(a,f),a.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let m=0;for(let p=0;p<l.length;p++)m+=l[p];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function S_(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const pp=new tn,Nf=new np(1,1),mp=new qd,gp=new Tm,xp=new Qd,zf=[],Ff=[],Of=new Float32Array(16),Bf=new Float32Array(9),kf=new Float32Array(4);function Vo(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=zf[i];if(o===void 0&&(o=new Float32Array(i),zf[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function gc(s,t){let e=Ff[t];e===void 0&&(e=new Int32Array(t),Ff[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function b_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function T_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function E_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function A_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function R_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;kf.set(n),s.uniformMatrix2fv(this.addr,!1,kf),Oe(e,n)}}function C_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Bf.set(n),s.uniformMatrix3fv(this.addr,!1,Bf),Oe(e,n)}}function P_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Of.set(n),s.uniformMatrix4fv(this.addr,!1,Of),Oe(e,n)}}function I_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function L_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function D_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function U_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function N_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function z_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function F_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function O_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function B_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Nf.compareFunction=Vd,o=Nf):o=pp,e.setTexture2D(t||o,i)}function k_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gp,i)}function G_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||xp,i)}function H_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mp,i)}function V_(s){switch(s){case 5126:return b_;case 35664:return T_;case 35665:return E_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return L_;case 35668:case 35672:return D_;case 35669:case 35673:return U_;case 5125:return N_;case 36294:return z_;case 36295:return F_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return H_}}function W_(s,t){s.uniform1fv(this.addr,t)}function X_(s,t){const e=Vo(t,this.size,2);s.uniform2fv(this.addr,e)}function q_(s,t){const e=Vo(t,this.size,3);s.uniform3fv(this.addr,e)}function Y_(s,t){const e=Vo(t,this.size,4);s.uniform4fv(this.addr,e)}function Z_(s,t){const e=Vo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function $_(s,t){const e=Vo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function j_(s,t){const e=Vo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function K_(s,t){s.uniform1iv(this.addr,t)}function J_(s,t){s.uniform2iv(this.addr,t)}function Q_(s,t){s.uniform3iv(this.addr,t)}function tM(s,t){s.uniform4iv(this.addr,t)}function eM(s,t){s.uniform1uiv(this.addr,t)}function nM(s,t){s.uniform2uiv(this.addr,t)}function iM(s,t){s.uniform3uiv(this.addr,t)}function sM(s,t){s.uniform4uiv(this.addr,t)}function oM(s,t,e){const n=this.cache,i=t.length,o=gc(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||pp,o[r])}function rM(s,t,e){const n=this.cache,i=t.length,o=gc(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||gp,o[r])}function aM(s,t,e){const n=this.cache,i=t.length,o=gc(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||xp,o[r])}function cM(s,t,e){const n=this.cache,i=t.length,o=gc(e,i);Fe(n,o)||(s.uniform1iv(this.addr,o),Oe(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||mp,o[r])}function lM(s){switch(s){case 5126:return W_;case 35664:return X_;case 35665:return q_;case 35666:return Y_;case 35674:return Z_;case 35675:return $_;case 35676:return j_;case 5124:case 35670:return K_;case 35667:case 35671:return J_;case 35668:case 35672:return Q_;case 35669:case 35673:return tM;case 5125:return eM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return cM}}class hM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=V_(e.type)}}class uM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lM(e.type)}}class fM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function Gf(s,t){s.seq.push(t),s.map[t.id]=t}function dM(s,t,e){const n=s.name,i=n.length;for(nl.lastIndex=0;;){const o=nl.exec(n),r=nl.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Gf(e,l===void 0?new hM(a,s,t):new uM(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new fM(a),Gf(e,u)),e=u}}}class Da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);dM(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Hf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const pM=37297;let mM=0;function gM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Vf=new Wt;function xM(s){oe._getMatrix(Vf,oe.workingColorSpace,s);const t=`mat3( ${Vf.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case Va:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Wf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+gM(s.getShaderSource(t),r)}else return i}function vM(s,t){const e=xM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _M(s,t){let e;switch(t){case J0:e="Linear";break;case Q0:e="Reinhard";break;case tm:e="Cineon";break;case Id:e="ACESFilmic";break;case nm:e="AgX";break;case im:e="Neutral";break;case em:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ma=new N;function MM(){oe.getLuminanceCoefficients(ma);const s=ma.x.toFixed(4),t=ma.y.toFixed(4),e=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function wM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function SM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function ar(s){return s!==""}function Xf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(s){return s.replace(bM,EM)}const TM=new Map;function EM(s,t){let e=qt[t];if(e===void 0){const n=TM.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mh(e)}const AM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yf(s){return s.replace(AM,RM)}function RM(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Zf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function CM(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function PM(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Po:case Io:t="ENVMAP_TYPE_CUBE";break;case dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function IM(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Io:t="ENVMAP_MODE_REFRACTION";break}return t}function LM(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pd:t="ENVMAP_BLENDING_MULTIPLY";break;case j0:t="ENVMAP_BLENDING_MIX";break;case K0:t="ENVMAP_BLENDING_ADD";break}return t}function DM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function UM(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=CM(e),l=PM(e),h=IM(e),u=LM(e),f=DM(e),d=yM(e),m=wM(o),x=i.createProgram();let p,g,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ar).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ar).join(`
`),g.length>0&&(g+=`
`)):(p=[Zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),g=[Zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ts?"#define TONE_MAPPING":"",e.toneMapping!==ts?qt.tonemapping_pars_fragment:"",e.toneMapping!==ts?_M("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,vM("linearToOutputTexel",e.outputColorSpace),MM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ar).join(`
`)),r=Mh(r),r=Xf(r,e),r=qf(r,e),a=Mh(a),a=Xf(a,e),a=qf(a,e),r=Yf(r),a=Yf(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=T+p+r,_=T+g+a,A=Hf(i,i.VERTEX_SHADER,M),E=Hf(i,i.FRAGMENT_SHADER,_);i.attachShader(x,A),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function b(R){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x).trim(),D=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(E).trim();let V=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,E);else{const Z=Wf(i,A,"vertex"),W=Wf(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Z+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||z==="")&&(G=!1);G&&(R.diagnostics={runnable:V,programLog:U,vertexShader:{log:D,prefix:p},fragmentShader:{log:z,prefix:g}})}i.deleteShader(A),i.deleteShader(E),S=new Da(i,x),y=SM(i,x)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,pM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mM++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let NM=0;class zM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new FM(t),e.set(t,n)),n}}class FM{constructor(t){this.id=NM++,this.code=t,this.usedTimes=0}}function OM(s,t,e,n,i,o,r){const a=new Yd,c=new zM,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,v,R,U,D){const z=U.fog,V=D.geometry,G=y.isMeshStandardMaterial?U.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),W=Z&&Z.mapping===dc?Z.image.height:null,rt=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ft=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,wt=ft!==void 0?ft.length:0;let Ft=0;V.morphAttributes.position!==void 0&&(Ft=1),V.morphAttributes.normal!==void 0&&(Ft=2),V.morphAttributes.color!==void 0&&(Ft=3);let jt,tt,ct,St;if(rt){const ue=ci[rt];jt=ue.vertexShader,tt=ue.fragmentShader}else jt=y.vertexShader,tt=y.fragmentShader,c.update(y),ct=c.getVertexShaderID(y),St=c.getFragmentShaderID(y);const dt=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),kt=D.isInstancedMesh===!0,Yt=D.isBatchedMesh===!0,Te=!!y.map,te=!!y.matcap,Pe=!!Z,O=!!y.aoMap,Fn=!!y.lightMap,Kt=!!y.bumpMap,Jt=!!y.normalMap,It=!!y.displacementMap,ve=!!y.emissiveMap,Pt=!!y.metalnessMap,L=!!y.roughnessMap,C=y.anisotropy>0,X=y.clearcoat>0,nt=y.dispersion>0,ot=y.iridescence>0,et=y.sheen>0,Ct=y.transmission>0,vt=C&&!!y.anisotropyMap,Tt=X&&!!y.clearcoatMap,ee=X&&!!y.clearcoatNormalMap,lt=X&&!!y.clearcoatRoughnessMap,Et=ot&&!!y.iridescenceMap,Nt=ot&&!!y.iridescenceThicknessMap,Ot=et&&!!y.sheenColorMap,At=et&&!!y.sheenRoughnessMap,Qt=!!y.specularMap,Xt=!!y.specularColorMap,xe=!!y.specularIntensityMap,B=Ct&&!!y.transmissionMap,gt=Ct&&!!y.thicknessMap,Q=!!y.gradientMap,it=!!y.alphaMap,yt=y.alphaTest>0,_t=!!y.alphaHash,Vt=!!y.extensions;let Re=ts;y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Re=s.toneMapping);const Ze={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:tt,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Yt,batchingColor:Yt&&D._colorsTexture!==null,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Uo,alphaToCoverage:!!y.alphaToCoverage,map:Te,matcap:te,envMap:Pe,envMapMode:Pe&&Z.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Fn,bumpMap:Kt,normalMap:Jt,displacementMap:f&&It,emissiveMap:ve,normalMapObjectSpace:Jt&&y.normalMapType===am,normalMapTangentSpace:Jt&&y.normalMapType===Hd,metalnessMap:Pt,roughnessMap:L,anisotropy:C,anisotropyMap:vt,clearcoat:X,clearcoatMap:Tt,clearcoatNormalMap:ee,clearcoatRoughnessMap:lt,dispersion:nt,iridescence:ot,iridescenceMap:Et,iridescenceThicknessMap:Nt,sheen:et,sheenColorMap:Ot,sheenRoughnessMap:At,specularMap:Qt,specularColorMap:Xt,specularIntensityMap:xe,transmission:Ct,transmissionMap:B,thicknessMap:gt,gradientMap:Q,opaque:y.transparent===!1&&y.blending===vo&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:yt,alphaHash:_t,combine:y.combine,mapUv:Te&&x(y.map.channel),aoMapUv:O&&x(y.aoMap.channel),lightMapUv:Fn&&x(y.lightMap.channel),bumpMapUv:Kt&&x(y.bumpMap.channel),normalMapUv:Jt&&x(y.normalMap.channel),displacementMapUv:It&&x(y.displacementMap.channel),emissiveMapUv:ve&&x(y.emissiveMap.channel),metalnessMapUv:Pt&&x(y.metalnessMap.channel),roughnessMapUv:L&&x(y.roughnessMap.channel),anisotropyMapUv:vt&&x(y.anisotropyMap.channel),clearcoatMapUv:Tt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(y.sheenRoughnessMap.channel),specularMapUv:Qt&&x(y.specularMap.channel),specularColorMapUv:Xt&&x(y.specularColorMap.channel),specularIntensityMapUv:xe&&x(y.specularIntensityMap.channel),transmissionMapUv:B&&x(y.transmissionMap.channel),thicknessMapUv:gt&&x(y.thicknessMap.channel),alphaMapUv:it&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Jt||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Te||it),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dt,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function g(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)v.push(R),v.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(T(v,y),M(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function T(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function M(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const v=m[y.type];let R;if(v){const U=ci[v];R=qa.clone(U.uniforms)}else R=y.uniforms;return R}function A(y,v){let R;for(let U=0,D=h.length;U<D;U++){const z=h[U];if(z.cacheKey===v){R=z,++R.usedTimes;break}}return R===void 0&&(R=new UM(s,v,y,o),h.push(R)),R}function E(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function b(y){c.remove(y)}function S(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:_,acquireProgram:A,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:S}}function BM(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function kM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $f(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function jf(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,f,d,m,x,p){let g=s[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:p},s[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=x,g.group=p),t++,g}function a(u,f,d,m,x,p){const g=r(u,f,d,m,x,p);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):e.push(g)}function c(u,f,d,m,x,p){const g=r(u,f,d,m,x,p);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function l(u,f){e.length>1&&e.sort(u||kM),n.length>1&&n.sort(f||$f),i.length>1&&i.sort(f||$f)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function GM(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new jf,s.set(n,[r])):i>=o.length?(r=new jf,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function HM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new st};break;case"SpotLight":e={position:new N,direction:new N,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function VM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let WM=0;function XM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function qM(s){const t=new HM,e=VM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,o=new fe,r=new fe;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,T=0,M=0,_=0,A=0,E=0,b=0;l.sort(XM);for(let y=0,v=l.length;y<v;y++){const R=l[y],U=R.color,D=R.intensity,z=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*D,u+=U.g*D,f+=U.b*D;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],D);b++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=R.shadow.matrix,T++}n.directional[d]=G,d++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(U).multiplyScalar(D),G.distance=z,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[x]=G;const Z=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Z.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=Z.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=V,_++}x++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(U).multiplyScalar(D),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=G,p++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Z=R.shadow,W=e.get(R);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=R.shadow.matrix,M++}n.point[m]=G,m++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(D),G.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[g]=G,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==d||S.pointLength!==m||S.spotLength!==x||S.rectAreaLength!==p||S.hemiLength!==g||S.numDirectionalShadows!==T||S.numPointShadows!==M||S.numSpotShadows!==_||S.numSpotMaps!==A||S.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,S.directionalLength=d,S.pointLength=m,S.spotLength=x,S.rectAreaLength=p,S.hemiLength=g,S.numDirectionalShadows=T,S.numPointShadows=M,S.numSpotShadows=_,S.numSpotMaps=A,S.numLightProbes=b,n.version=WM++)}function c(l,h){let u=0,f=0,d=0,m=0,x=0;const p=h.matrixWorldInverse;for(let g=0,T=l.length;g<T;g++){const M=l[g];if(M.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),u++}else if(M.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),r.identity(),o.copy(M.matrixWorld),o.premultiply(p),r.extractRotation(o),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function Kf(s){const t=new qM(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function YM(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new Kf(s),t.set(i,[a])):o>=r.length?(a=new Kf(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const ZM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$M=`uniform sampler2D shadow_pass;
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
}`;function jM(s,t,e){let n=new fu;const i=new pt,o=new pt,r=new pe,a=new yg({depthPacking:rm}),c=new wg,l={},h=e.maxTextureSize,u={[es]:yn,[yn]:es,[Dt]:Dt},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:ZM,fragmentShader:$M}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new be;m.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new I(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rd;let g=this.type;this.render=function(E,b,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Di),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=g!==Ai&&this.type===Ai,z=g===Ai&&this.type!==Ai;for(let V=0,G=E.length;V<G;V++){const Z=E[V],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const rt=W.getFrameExtents();if(i.multiply(rt),o.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/rt.x),i.x=o.x*rt.x,W.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/rt.y),i.y=o.y*rt.y,W.mapSize.y=o.y)),W.map===null||D===!0||z===!0){const wt=this.type!==Ai?{minFilter:zn,magFilter:zn}:{};W.map!==null&&W.map.dispose(),W.map=new ni(i.x,i.y,wt),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ft=W.getViewportCount();for(let wt=0;wt<ft;wt++){const Ft=W.getViewport(wt);r.set(o.x*Ft.x,o.y*Ft.y,o.x*Ft.z,o.y*Ft.w),U.viewport(r),W.updateMatrices(Z,wt),n=W.getFrustum(),_(b,S,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Ai&&T(W,S),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(y,v,R)};function T(E,b){const S=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ni(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(b,null,S,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(b,null,S,d,x,null)}function M(E,b,S,y){let v=null;const R=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)v=R;else if(v=S.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=v.uuid,D=b.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let V=z[D];V===void 0&&(V=v.clone(),z[D]=V,b.addEventListener("dispose",A)),v=V}if(v.visible=b.visible,v.wireframe=b.wireframe,y===Ai?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:u[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,S.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=s.properties.get(v);U.light=S}return v}function _(E,b,S,y,v){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const D=t.update(E),z=E.material;if(Array.isArray(z)){const V=D.groups;for(let G=0,Z=V.length;G<Z;G++){const W=V[G],rt=z[W.materialIndex];if(rt&&rt.visible){const ft=M(E,rt,y,v);E.onBeforeShadow(s,E,b,S,D,ft,W),s.renderBufferDirect(S,null,D,ft,E,W),E.onAfterShadow(s,E,b,S,D,ft,W)}}}else if(z.visible){const V=M(E,z,y,v);E.onBeforeShadow(s,E,b,S,D,V,null),s.renderBufferDirect(S,null,D,V,E,null),E.onAfterShadow(s,E,b,S,D,V,null)}}const U=E.children;for(let D=0,z=U.length;D<z;D++)_(U[D],b,S,y,v)}function A(E){E.target.removeEventListener("dispose",A);for(const S in l){const y=l[S],v=E.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const KM={[Dl]:Ul,[Nl]:Ol,[zl]:Bl,[Co]:Fl,[Ul]:Dl,[Ol]:Nl,[Bl]:zl,[Fl]:Co};function JM(s,t){function e(){let B=!1;const gt=new pe;let Q=null;const it=new pe(0,0,0,0);return{setMask:function(yt){Q!==yt&&!B&&(s.colorMask(yt,yt,yt,yt),Q=yt)},setLocked:function(yt){B=yt},setClear:function(yt,_t,Vt,Re,Ze){Ze===!0&&(yt*=Re,_t*=Re,Vt*=Re),gt.set(yt,_t,Vt,Re),it.equals(gt)===!1&&(s.clearColor(yt,_t,Vt,Re),it.copy(gt))},reset:function(){B=!1,Q=null,it.set(-1,0,0,0)}}}function n(){let B=!1,gt=!1,Q=null,it=null,yt=null;return{setReversed:function(_t){if(gt!==_t){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Re=yt;yt=null,this.setClear(Re)}gt=_t},getReversed:function(){return gt},setTest:function(_t){_t?dt(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(_t){Q!==_t&&!B&&(s.depthMask(_t),Q=_t)},setFunc:function(_t){if(gt&&(_t=KM[_t]),it!==_t){switch(_t){case Dl:s.depthFunc(s.NEVER);break;case Ul:s.depthFunc(s.ALWAYS);break;case Nl:s.depthFunc(s.LESS);break;case Co:s.depthFunc(s.LEQUAL);break;case zl:s.depthFunc(s.EQUAL);break;case Fl:s.depthFunc(s.GEQUAL);break;case Ol:s.depthFunc(s.GREATER);break;case Bl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=_t}},setLocked:function(_t){B=_t},setClear:function(_t){yt!==_t&&(gt&&(_t=1-_t),s.clearDepth(_t),yt=_t)},reset:function(){B=!1,Q=null,it=null,yt=null,gt=!1}}}function i(){let B=!1,gt=null,Q=null,it=null,yt=null,_t=null,Vt=null,Re=null,Ze=null;return{setTest:function(ue){B||(ue?dt(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(ue){gt!==ue&&!B&&(s.stencilMask(ue),gt=ue)},setFunc:function(ue,$n,yi){(Q!==ue||it!==$n||yt!==yi)&&(s.stencilFunc(ue,$n,yi),Q=ue,it=$n,yt=yi)},setOp:function(ue,$n,yi){(_t!==ue||Vt!==$n||Re!==yi)&&(s.stencilOp(ue,$n,yi),_t=ue,Vt=$n,Re=yi)},setLocked:function(ue){B=ue},setClear:function(ue){Ze!==ue&&(s.clearStencil(ue),Ze=ue)},reset:function(){B=!1,gt=null,Q=null,it=null,yt=null,_t=null,Vt=null,Re=null,Ze=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,x=!1,p=null,g=null,T=null,M=null,_=null,A=null,E=null,b=new st(0,0,0),S=0,y=!1,v=null,R=null,U=null,D=null,z=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Z>=2);let rt=null,ft={};const wt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),jt=new pe().fromArray(wt),tt=new pe().fromArray(Ft);function ct(B,gt,Q,it){const yt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(B,_t),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Q;Vt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(gt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return _t}const St={};St[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),r.setFunc(Co),Kt(!1),Jt(Gu),dt(s.CULL_FACE),O(Di);function dt(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function zt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function kt(B,gt){return u[B]!==gt?(s.bindFramebuffer(B,gt),u[B]=gt,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Yt(B,gt){let Q=d,it=!1;if(B){Q=f.get(gt),Q===void 0&&(Q=[],f.set(gt,Q));const yt=B.textures;if(Q.length!==yt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Vt=yt.length;_t<Vt;_t++)Q[_t]=s.COLOR_ATTACHMENT0+_t;Q.length=yt.length,it=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,it=!0);it&&s.drawBuffers(Q)}function Te(B){return m!==B?(s.useProgram(B),m=B,!0):!1}const te={[ws]:s.FUNC_ADD,[D0]:s.FUNC_SUBTRACT,[U0]:s.FUNC_REVERSE_SUBTRACT};te[N0]=s.MIN,te[z0]=s.MAX;const Pe={[F0]:s.ZERO,[O0]:s.ONE,[B0]:s.SRC_COLOR,[Il]:s.SRC_ALPHA,[X0]:s.SRC_ALPHA_SATURATE,[V0]:s.DST_COLOR,[G0]:s.DST_ALPHA,[k0]:s.ONE_MINUS_SRC_COLOR,[Ll]:s.ONE_MINUS_SRC_ALPHA,[W0]:s.ONE_MINUS_DST_COLOR,[H0]:s.ONE_MINUS_DST_ALPHA,[q0]:s.CONSTANT_COLOR,[Y0]:s.ONE_MINUS_CONSTANT_COLOR,[Z0]:s.CONSTANT_ALPHA,[$0]:s.ONE_MINUS_CONSTANT_ALPHA};function O(B,gt,Q,it,yt,_t,Vt,Re,Ze,ue){if(B===Di){x===!0&&(zt(s.BLEND),x=!1);return}if(x===!1&&(dt(s.BLEND),x=!0),B!==L0){if(B!==p||ue!==y){if((g!==ws||_!==ws)&&(s.blendEquation(s.FUNC_ADD),g=ws,_=ws),ue)switch(B){case vo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case he:s.blendFunc(s.ONE,s.ONE);break;case Hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case vo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case he:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,M=null,A=null,E=null,b.set(0,0,0),S=0,p=B,y=ue}return}yt=yt||gt,_t=_t||Q,Vt=Vt||it,(gt!==g||yt!==_)&&(s.blendEquationSeparate(te[gt],te[yt]),g=gt,_=yt),(Q!==T||it!==M||_t!==A||Vt!==E)&&(s.blendFuncSeparate(Pe[Q],Pe[it],Pe[_t],Pe[Vt]),T=Q,M=it,A=_t,E=Vt),(Re.equals(b)===!1||Ze!==S)&&(s.blendColor(Re.r,Re.g,Re.b,Ze),b.copy(Re),S=Ze),p=B,y=!1}function Fn(B,gt){B.side===Dt?zt(s.CULL_FACE):dt(s.CULL_FACE);let Q=B.side===yn;gt&&(Q=!Q),Kt(Q),B.blending===vo&&B.transparent===!1?O(Di):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const it=B.stencilWrite;a.setTest(it),it&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ve(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(B){v!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),v=B)}function Jt(B){B!==P0?(dt(s.CULL_FACE),B!==R&&(B===Gu?s.cullFace(s.BACK):B===I0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),R=B}function It(B){B!==U&&(G&&s.lineWidth(B),U=B)}function ve(B,gt,Q){B?(dt(s.POLYGON_OFFSET_FILL),(D!==gt||z!==Q)&&(s.polygonOffset(gt,Q),D=gt,z=Q)):zt(s.POLYGON_OFFSET_FILL)}function Pt(B){B?dt(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function L(B){B===void 0&&(B=s.TEXTURE0+V-1),rt!==B&&(s.activeTexture(B),rt=B)}function C(B,gt,Q){Q===void 0&&(rt===null?Q=s.TEXTURE0+V-1:Q=rt);let it=ft[Q];it===void 0&&(it={type:void 0,texture:void 0},ft[Q]=it),(it.type!==B||it.texture!==gt)&&(rt!==Q&&(s.activeTexture(Q),rt=Q),s.bindTexture(B,gt||St[B]),it.type=B,it.texture=gt)}function X(){const B=ft[rt];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(B){jt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),jt.copy(B))}function At(B){tt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),tt.copy(B))}function Qt(B,gt){let Q=l.get(gt);Q===void 0&&(Q=new WeakMap,l.set(gt,Q));let it=Q.get(B);it===void 0&&(it=s.getUniformBlockIndex(gt,B.name),Q.set(B,it))}function Xt(B,gt){const it=l.get(gt).get(B);c.get(gt)!==it&&(s.uniformBlockBinding(gt,it,B.__bindingPointIndex),c.set(gt,it))}function xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,ft={},u={},f=new WeakMap,d=[],m=null,x=!1,p=null,g=null,T=null,M=null,_=null,A=null,E=null,b=new st(0,0,0),S=0,y=!1,v=null,R=null,U=null,D=null,z=null,jt.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:dt,disable:zt,bindFramebuffer:kt,drawBuffers:Yt,useProgram:Te,setBlending:O,setMaterial:Fn,setFlipSided:Kt,setCullFace:Jt,setLineWidth:It,setPolygonOffset:ve,setScissorTest:Pt,activeTexture:L,bindTexture:C,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:ot,texImage2D:Et,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:ee,texStorage3D:lt,texSubImage2D:et,texSubImage3D:Ct,compressedTexSubImage2D:vt,compressedTexSubImage3D:Tt,scissor:Ot,viewport:At,reset:xe}}function QM(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,C){return d?new OffscreenCanvas(L,C):Xa("canvas")}function x(L,C,X){let nt=1;const ot=Pt(L);if((ot.width>X||ot.height>X)&&(nt=X/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const et=Math.floor(nt*ot.width),Ct=Math.floor(nt*ot.height);u===void 0&&(u=m(et,Ct));const vt=C?m(et,Ct):u;return vt.width=et,vt.height=Ct,vt.getContext("2d").drawImage(L,0,0,et,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+et+"x"+Ct+")."),vt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),L;return L}function p(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(L,C,X,nt,ot=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let et=C;if(C===s.RED&&(X===s.FLOAT&&(et=s.R32F),X===s.HALF_FLOAT&&(et=s.R16F),X===s.UNSIGNED_BYTE&&(et=s.R8)),C===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.R8UI),X===s.UNSIGNED_SHORT&&(et=s.R16UI),X===s.UNSIGNED_INT&&(et=s.R32UI),X===s.BYTE&&(et=s.R8I),X===s.SHORT&&(et=s.R16I),X===s.INT&&(et=s.R32I)),C===s.RG&&(X===s.FLOAT&&(et=s.RG32F),X===s.HALF_FLOAT&&(et=s.RG16F),X===s.UNSIGNED_BYTE&&(et=s.RG8)),C===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RG8UI),X===s.UNSIGNED_SHORT&&(et=s.RG16UI),X===s.UNSIGNED_INT&&(et=s.RG32UI),X===s.BYTE&&(et=s.RG8I),X===s.SHORT&&(et=s.RG16I),X===s.INT&&(et=s.RG32I)),C===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGB8UI),X===s.UNSIGNED_SHORT&&(et=s.RGB16UI),X===s.UNSIGNED_INT&&(et=s.RGB32UI),X===s.BYTE&&(et=s.RGB8I),X===s.SHORT&&(et=s.RGB16I),X===s.INT&&(et=s.RGB32I)),C===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),X===s.UNSIGNED_INT&&(et=s.RGBA32UI),X===s.BYTE&&(et=s.RGBA8I),X===s.SHORT&&(et=s.RGBA16I),X===s.INT&&(et=s.RGBA32I)),C===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),C===s.RGBA){const Ct=ot?Va:oe.getTransfer(nt);X===s.FLOAT&&(et=s.RGBA32F),X===s.HALF_FLOAT&&(et=s.RGBA16F),X===s.UNSIGNED_BYTE&&(et=Ct===de?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(L,C){let X;return L?C===null||C===Ds||C===Lo?X=s.DEPTH24_STENCIL8:C===mi?X=s.DEPTH32F_STENCIL8:C===Sr&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ds||C===Lo?X=s.DEPTH_COMPONENT24:C===mi?X=s.DEPTH_COMPONENT32F:C===Sr&&(X=s.DEPTH_COMPONENT16),X}function A(L,C){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==zn&&L.minFilter!==pi?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function E(L){const C=L.target;C.removeEventListener("dispose",E),S(C),C.isVideoTexture&&h.delete(C)}function b(L){const C=L.target;C.removeEventListener("dispose",b),v(C)}function S(L){const C=n.get(L);if(C.__webglInit===void 0)return;const X=L.source,nt=f.get(X);if(nt){const ot=nt[C.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(L),Object.keys(nt).length===0&&f.delete(X)}n.remove(L)}function y(L){const C=n.get(L);s.deleteTexture(C.__webglTexture);const X=L.source,nt=f.get(X);delete nt[C.__cacheKey],r.memory.textures--}function v(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(C.__webglFramebuffer[nt]))for(let ot=0;ot<C.__webglFramebuffer[nt].length;ot++)s.deleteFramebuffer(C.__webglFramebuffer[nt][ot]);else s.deleteFramebuffer(C.__webglFramebuffer[nt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[nt])}else{if(Array.isArray(C.__webglFramebuffer))for(let nt=0;nt<C.__webglFramebuffer.length;nt++)s.deleteFramebuffer(C.__webglFramebuffer[nt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let nt=0;nt<C.__webglColorRenderbuffer.length;nt++)C.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[nt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=L.textures;for(let nt=0,ot=X.length;nt<ot;nt++){const et=n.get(X[nt]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),r.memory.textures--),n.remove(X[nt])}n.remove(L)}let R=0;function U(){R=0}function D(){const L=R;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),R+=1,L}function z(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function V(L,C){const X=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(X,L,C);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+C)}function G(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){tt(X,L,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+C)}function Z(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){tt(X,L,C);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+C)}function W(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ct(X,L,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+C)}const rt={[Ha]:s.REPEAT,[bs]:s.CLAMP_TO_EDGE,[Hl]:s.MIRRORED_REPEAT},ft={[zn]:s.NEAREST,[sm]:s.NEAREST_MIPMAP_NEAREST,[Gr]:s.NEAREST_MIPMAP_LINEAR,[pi]:s.LINEAR,[wc]:s.LINEAR_MIPMAP_NEAREST,[Ts]:s.LINEAR_MIPMAP_LINEAR},wt={[cm]:s.NEVER,[pm]:s.ALWAYS,[lm]:s.LESS,[Vd]:s.LEQUAL,[hm]:s.EQUAL,[dm]:s.GEQUAL,[um]:s.GREATER,[fm]:s.NOTEQUAL};function Ft(L,C){if(C.type===mi&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===pi||C.magFilter===wc||C.magFilter===Gr||C.magFilter===Ts||C.minFilter===pi||C.minFilter===wc||C.minFilter===Gr||C.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,rt[C.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,rt[C.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,rt[C.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ft[C.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,wt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===zn||C.minFilter!==Gr&&C.minFilter!==Ts||C.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function jt(L,C){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));const nt=C.source;let ot=f.get(nt);ot===void 0&&(ot={},f.set(nt,ot));const et=z(C);if(et!==L.__cacheKey){ot[et]===void 0&&(ot[et]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,X=!0),ot[et].usedTimes++;const Ct=ot[L.__cacheKey];Ct!==void 0&&(ot[L.__cacheKey].usedTimes--,Ct.usedTimes===0&&y(C)),L.__cacheKey=et,L.__webglTexture=ot[et].texture}return X}function tt(L,C,X){let nt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(nt=s.TEXTURE_3D);const ot=jt(L,C),et=C.source;e.bindTexture(nt,L.__webglTexture,s.TEXTURE0+X);const Ct=n.get(et);if(et.version!==Ct.__version||ot===!0){e.activeTexture(s.TEXTURE0+X);const vt=oe.getPrimaries(oe.workingColorSpace),Tt=C.colorSpace===$i?null:oe.getPrimaries(C.colorSpace),ee=C.colorSpace===$i||vt===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let lt=x(C.image,!1,i.maxTextureSize);lt=ve(C,lt);const Et=o.convert(C.format,C.colorSpace),Nt=o.convert(C.type);let Ot=M(C.internalFormat,Et,Nt,C.colorSpace,C.isVideoTexture);Ft(nt,C);let At;const Qt=C.mipmaps,Xt=C.isVideoTexture!==!0,xe=Ct.__version===void 0||ot===!0,B=et.dataReady,gt=A(C,lt);if(C.isDepthTexture)Ot=_(C.format===Do,C.type),xe&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ot,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Et,Nt,null));else if(C.isDataTexture)if(Qt.length>0){Xt&&xe&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let Q=0,it=Qt.length;Q<it;Q++)At=Qt[Q],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,At.width,At.height,Et,Nt,At.data):e.texImage2D(s.TEXTURE_2D,Q,Ot,At.width,At.height,0,Et,Nt,At.data);C.generateMipmaps=!1}else Xt?(xe&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,lt.width,lt.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Et,Nt,lt.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,lt.width,lt.height,0,Et,Nt,lt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xt&&xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,Qt[0].width,Qt[0].height,lt.depth);for(let Q=0,it=Qt.length;Q<it;Q++)if(At=Qt[Q],C.format!==ei)if(Et!==null)if(Xt){if(B)if(C.layerUpdates.size>0){const yt=Af(At.width,At.height,C.format,C.type);for(const _t of C.layerUpdates){const Vt=At.data.subarray(_t*yt/At.data.BYTES_PER_ELEMENT,(_t+1)*yt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,_t,At.width,At.height,1,Et,Vt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,lt.depth,Et,At.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Ot,At.width,At.height,lt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,lt.depth,Et,Nt,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Ot,At.width,At.height,lt.depth,0,Et,Nt,At.data)}else{Xt&&xe&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let Q=0,it=Qt.length;Q<it;Q++)At=Qt[Q],C.format!==ei?Et!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Ot,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,At.width,At.height,Et,Nt,At.data):e.texImage2D(s.TEXTURE_2D,Q,Ot,At.width,At.height,0,Et,Nt,At.data)}else if(C.isDataArrayTexture)if(Xt){if(xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,lt.width,lt.height,lt.depth),B)if(C.layerUpdates.size>0){const Q=Af(lt.width,lt.height,C.format,C.type);for(const it of C.layerUpdates){const yt=lt.data.subarray(it*Q/lt.data.BYTES_PER_ELEMENT,(it+1)*Q/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,Et,Nt,yt)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Et,Nt,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,lt.width,lt.height,lt.depth,0,Et,Nt,lt.data);else if(C.isData3DTexture)Xt?(xe&&e.texStorage3D(s.TEXTURE_3D,gt,Ot,lt.width,lt.height,lt.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Et,Nt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,lt.width,lt.height,lt.depth,0,Et,Nt,lt.data);else if(C.isFramebufferTexture){if(xe)if(Xt)e.texStorage2D(s.TEXTURE_2D,gt,Ot,lt.width,lt.height);else{let Q=lt.width,it=lt.height;for(let yt=0;yt<gt;yt++)e.texImage2D(s.TEXTURE_2D,yt,Ot,Q,it,0,Et,Nt,null),Q>>=1,it>>=1}}else if(Qt.length>0){if(Xt&&xe){const Q=Pt(Qt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Ot,Q.width,Q.height)}for(let Q=0,it=Qt.length;Q<it;Q++)At=Qt[Q],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Et,Nt,At):e.texImage2D(s.TEXTURE_2D,Q,Ot,Et,Nt,At);C.generateMipmaps=!1}else if(Xt){if(xe){const Q=Pt(lt);e.texStorage2D(s.TEXTURE_2D,gt,Ot,Q.width,Q.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Nt,lt)}else e.texImage2D(s.TEXTURE_2D,0,Ot,Et,Nt,lt);p(C)&&g(nt),Ct.__version=et.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function ct(L,C,X){if(C.image.length!==6)return;const nt=jt(L,C),ot=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+X);const et=n.get(ot);if(ot.version!==et.__version||nt===!0){e.activeTexture(s.TEXTURE0+X);const Ct=oe.getPrimaries(oe.workingColorSpace),vt=C.colorSpace===$i?null:oe.getPrimaries(C.colorSpace),Tt=C.colorSpace===$i||Ct===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const ee=C.isCompressedTexture||C.image[0].isCompressedTexture,lt=C.image[0]&&C.image[0].isDataTexture,Et=[];for(let it=0;it<6;it++)!ee&&!lt?Et[it]=x(C.image[it],!0,i.maxCubemapSize):Et[it]=lt?C.image[it].image:C.image[it],Et[it]=ve(C,Et[it]);const Nt=Et[0],Ot=o.convert(C.format,C.colorSpace),At=o.convert(C.type),Qt=M(C.internalFormat,Ot,At,C.colorSpace),Xt=C.isVideoTexture!==!0,xe=et.__version===void 0||nt===!0,B=ot.dataReady;let gt=A(C,Nt);Ft(s.TEXTURE_CUBE_MAP,C);let Q;if(ee){Xt&&xe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,Nt.width,Nt.height);for(let it=0;it<6;it++){Q=Et[it].mipmaps;for(let yt=0;yt<Q.length;yt++){const _t=Q[yt];C.format!==ei?Ot!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,_t.width,_t.height,Ot,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,Qt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,_t.width,_t.height,Ot,At,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,Qt,_t.width,_t.height,0,Ot,At,_t.data)}}}else{if(Q=C.mipmaps,Xt&&xe){Q.length>0&&gt++;const it=Pt(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,it.width,it.height)}for(let it=0;it<6;it++)if(lt){Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Et[it].width,Et[it].height,Ot,At,Et[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Et[it].width,Et[it].height,0,Ot,At,Et[it].data);for(let yt=0;yt<Q.length;yt++){const Vt=Q[yt].image[it].image;Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,Vt.width,Vt.height,Ot,At,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,Qt,Vt.width,Vt.height,0,Ot,At,Vt.data)}}else{Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,At,Et[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Ot,At,Et[it]);for(let yt=0;yt<Q.length;yt++){const _t=Q[yt];Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,Ot,At,_t.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,Qt,Ot,At,_t.image[it])}}}p(C)&&g(s.TEXTURE_CUBE_MAP),et.__version=ot.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function St(L,C,X,nt,ot,et){const Ct=o.convert(X.format,X.colorSpace),vt=o.convert(X.type),Tt=M(X.internalFormat,Ct,vt,X.colorSpace),ee=n.get(C),lt=n.get(X);if(lt.__renderTarget=C,!ee.__hasExternalTextures){const Et=Math.max(1,C.width>>et),Nt=Math.max(1,C.height>>et);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,et,Tt,Et,Nt,C.depth,0,Ct,vt,null):e.texImage2D(ot,et,Tt,Et,Nt,0,Ct,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,ot,lt.__webglTexture,0,Kt(C)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,ot,lt.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(L,C,X){if(s.bindRenderbuffer(s.RENDERBUFFER,L),C.depthBuffer){const nt=C.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,et=_(C.stencilBuffer,ot),Ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=Kt(C);Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,et,C.width,C.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,et,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,et,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,L)}else{const nt=C.textures;for(let ot=0;ot<nt.length;ot++){const et=nt[ot],Ct=o.convert(et.format,et.colorSpace),vt=o.convert(et.type),Tt=M(et.internalFormat,Ct,vt,et.colorSpace),ee=Kt(C);X&&Jt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,Tt,C.width,C.height):Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,Tt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(C.depthTexture);nt.__renderTarget=C,(!nt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),V(C.depthTexture,0);const ot=nt.__webglTexture,et=Kt(C);if(C.depthTexture.format===_o)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(C.depthTexture.format===Do)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function kt(L){const C=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),nt){const ot=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),C.__depthDisposeCallback=ot}C.__boundDepthTexture=nt}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");zt(C.__webglFramebuffer,L)}else if(X){C.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[nt]),C.__webglDepthbuffer[nt]===void 0)C.__webglDepthbuffer[nt]=s.createRenderbuffer(),dt(C.__webglDepthbuffer[nt],L,!1);else{const ot=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=C.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,et)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),dt(C.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(L,C,X){const nt=n.get(L);C!==void 0&&St(nt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&kt(L)}function Te(L){const C=L.texture,X=n.get(L),nt=n.get(C);L.addEventListener("dispose",b);const ot=L.textures,et=L.isWebGLCubeRenderTarget===!0,Ct=ot.length>1;if(Ct||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=C.version,r.memory.textures++),et){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let Tt=0;Tt<C.mipmaps.length;Tt++)X.__webglFramebuffer[vt][Tt]=s.createFramebuffer()}else X.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<C.mipmaps.length;vt++)X.__webglFramebuffer[vt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let vt=0,Tt=ot.length;vt<Tt;vt++){const ee=n.get(ot[vt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&Jt(L)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let vt=0;vt<ot.length;vt++){const Tt=ot[vt];X.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[vt]);const ee=o.convert(Tt.format,Tt.colorSpace),lt=o.convert(Tt.type),Et=M(Tt.internalFormat,ee,lt,Tt.colorSpace,L.isXRRenderTarget===!0),Nt=Kt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Et,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,X.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,C);for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)St(X.__webglFramebuffer[vt][Tt],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt);else St(X.__webglFramebuffer[vt],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);p(C)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let vt=0,Tt=ot.length;vt<Tt;vt++){const ee=ot[vt],lt=n.get(ee);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),Ft(s.TEXTURE_2D,ee),St(X.__webglFramebuffer,L,ee,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),p(ee)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,nt.__webglTexture),Ft(vt,C),C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)St(X.__webglFramebuffer[Tt],L,C,s.COLOR_ATTACHMENT0,vt,Tt);else St(X.__webglFramebuffer,L,C,s.COLOR_ATTACHMENT0,vt,0);p(C)&&g(vt),e.unbindTexture()}L.depthBuffer&&kt(L)}function te(L){const C=L.textures;for(let X=0,nt=C.length;X<nt;X++){const ot=C[X];if(p(ot)){const et=T(L),Ct=n.get(ot).__webglTexture;e.bindTexture(et,Ct),g(et),e.unbindTexture()}}}const Pe=[],O=[];function Fn(L){if(L.samples>0){if(Jt(L)===!1){const C=L.textures,X=L.width,nt=L.height;let ot=s.COLOR_BUFFER_BIT;const et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(L),vt=C.length>1;if(vt)for(let Tt=0;Tt<C.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Tt=0;Tt<C.length;Tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);const ee=n.get(C[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,X,nt,0,0,X,nt,ot,s.NEAREST),c===!0&&(Pe.length=0,O.length=0,Pe.push(s.COLOR_ATTACHMENT0+Tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Pe.push(et),O.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let Tt=0;Tt<C.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Tt]);const ee=n.get(C[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const C=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Kt(L){return Math.min(i.maxSamples,L.samples)}function Jt(L){const C=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(L){const C=r.render.frame;h.get(L)!==C&&(h.set(L,C),L.update())}function ve(L,C){const X=L.colorSpace,nt=L.format,ot=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Uo&&X!==$i&&(oe.getTransfer(X)===de?(nt!==ei||ot!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function Pt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Fn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Jt}function ty(s,t){function e(n,i=$i){let o;const r=oe.getTransfer(i);if(n===Fi)return s.UNSIGNED_BYTE;if(n===su)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ou)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Dd)return s.BYTE;if(n===Ud)return s.SHORT;if(n===Sr)return s.UNSIGNED_SHORT;if(n===iu)return s.INT;if(n===Ds)return s.UNSIGNED_INT;if(n===mi)return s.FLOAT;if(n===Ui)return s.HALF_FLOAT;if(n===zd)return s.ALPHA;if(n===Fd)return s.RGB;if(n===ei)return s.RGBA;if(n===Od)return s.LUMINANCE;if(n===Bd)return s.LUMINANCE_ALPHA;if(n===_o)return s.DEPTH_COMPONENT;if(n===Do)return s.DEPTH_STENCIL;if(n===ru)return s.RED;if(n===au)return s.RED_INTEGER;if(n===kd)return s.RG;if(n===cu)return s.RG_INTEGER;if(n===lu)return s.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===Ia)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ra)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ra)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Wl||n===Xl||n===ql)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Vl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ql)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===Zl||n===$l)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Yl||n===Zl)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===$l)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jl||n===Kl||n===Jl||n===Ql||n===th||n===eh||n===nh||n===ih||n===sh||n===oh||n===rh||n===ah||n===ch||n===lh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===jl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ql)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===th)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ih)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ah)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ch)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lh)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===hh||n===uh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===La)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gd||n===fh||n===dh||n===ph)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===La)return o.COMPRESSED_RED_RGTC1_EXT;if(n===fh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ph)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const ey={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(l,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`;class sy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new tn,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oy extends ko{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const x=new sy,p=e.getContextAttributes();let g=null,T=null;const M=[],_=[],A=new pt;let E=null;const b=new Ln;b.viewport=new pe;const S=new Ln;S.viewport=new pe;const y=[b,S],v=new Eg;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ct=M[tt];return ct===void 0&&(ct=new il,M[tt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(tt){let ct=M[tt];return ct===void 0&&(ct=new il,M[tt]=ct),ct.getGripSpace()},this.getHand=function(tt){let ct=M[tt];return ct===void 0&&(ct=new il,M[tt]=ct),ct.getHandSpace()};function D(tt){const ct=_.indexOf(tt.inputSource);if(ct===-1)return;const St=M[ct];St!==void 0&&(St.update(tt.inputSource,tt.frame,l||r),St.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",V);for(let tt=0;tt<M.length;tt++){const ct=_[tt];ct!==null&&(_[tt]=null,M[tt].disconnect(ct))}R=null,U=null,x.reset(),t.setRenderTarget(g),d=null,f=null,u=null,i=null,T=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",z),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let St=null,dt=null,zt=null;p.depth&&(zt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=p.stencil?Do:_o,dt=p.stencil?Lo:Ds);const kt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(kt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new ni(f.textureWidth,f.textureHeight,{format:ei,type:Fi,depthTexture:new np(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const St={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new ni(d.framebufferWidth,d.framebufferHeight,{format:ei,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(tt){for(let ct=0;ct<tt.removed.length;ct++){const St=tt.removed[ct],dt=_.indexOf(St);dt>=0&&(_[dt]=null,M[dt].disconnect(St))}for(let ct=0;ct<tt.added.length;ct++){const St=tt.added[ct];let dt=_.indexOf(St);if(dt===-1){for(let kt=0;kt<M.length;kt++)if(kt>=_.length){_.push(St),dt=kt;break}else if(_[kt]===null){_[kt]=St,dt=kt;break}if(dt===-1)break}const zt=M[dt];zt&&zt.connect(St)}}const G=new N,Z=new N;function W(tt,ct,St){G.setFromMatrixPosition(ct.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const dt=G.distanceTo(Z),zt=ct.projectionMatrix.elements,kt=St.projectionMatrix.elements,Yt=zt[14]/(zt[10]-1),Te=zt[14]/(zt[10]+1),te=(zt[9]+1)/zt[5],Pe=(zt[9]-1)/zt[5],O=(zt[8]-1)/zt[0],Fn=(kt[8]+1)/kt[0],Kt=Yt*O,Jt=Yt*Fn,It=dt/(-O+Fn),ve=It*-O;if(ct.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ve),tt.translateZ(It),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),zt[10]===-1)tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Pt=Yt+It,L=Te+It,C=Kt-ve,X=Jt+(dt-ve),nt=te*Te/L*Pt,ot=Pe*Te/L*Pt;tt.projectionMatrix.makePerspective(C,X,nt,ot,Pt,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function rt(tt,ct){ct===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ct.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let ct=tt.near,St=tt.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(St=x.depthFar)),v.near=S.near=b.near=ct,v.far=S.far=b.far=St,(R!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,U=v.far),b.layers.mask=tt.layers.mask|2,S.layers.mask=tt.layers.mask|4,v.layers.mask=b.layers.mask|S.layers.mask;const dt=tt.parent,zt=v.cameras;rt(v,dt);for(let kt=0;kt<zt.length;kt++)rt(zt[kt],dt);zt.length===2?W(v,b,S):v.projectionMatrix.copy(b.projectionMatrix),ft(tt,v,dt)};function ft(tt,ct,St){St===null?tt.matrix.copy(ct.matrixWorld):(tt.matrix.copy(St.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ct.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ct.projectionMatrix),tt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=mh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(tt){c=tt,f!==null&&(f.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let wt=null;function Ft(tt,ct){if(h=ct.getViewerPose(l||r),m=ct,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let dt=!1;St.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let kt=0;kt<St.length;kt++){const Yt=St[kt];let Te=null;if(d!==null)Te=d.getViewport(Yt);else{const Pe=u.getViewSubImage(f,Yt);Te=Pe.viewport,kt===0&&(t.setRenderTargetTextures(T,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),t.setRenderTarget(T))}let te=y[kt];te===void 0&&(te=new Ln,te.layers.enable(kt),te.viewport=new pe,y[kt]=te),te.matrix.fromArray(Yt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Yt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Te.x,Te.y,Te.width,Te.height),kt===0&&(v.matrix.copy(te.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(te)}const zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const kt=u.getDepthInformation(St[0]);kt&&kt.isValid&&kt.texture&&x.init(t,kt,i.renderState)}}for(let St=0;St<M.length;St++){const dt=_[St],zt=M[St];dt!==null&&zt!==void 0&&zt.update(dt,ct,l||r)}wt&&wt(tt,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),m=null}const jt=new dp;jt.setAnimationLoop(Ft),this.setAnimationLoop=function(tt){wt=tt},this.dispose=function(){}}}const us=new xi,ry=new fe;function ay(s,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Kd(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,T,M,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(p,g):g.isMeshToonMaterial?(o(p,g),u(p,g)):g.isMeshPhongMaterial?(o(p,g),h(p,g)):g.isMeshStandardMaterial?(o(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,_)):g.isMeshMatcapMaterial?(o(p,g),m(p,g)):g.isMeshDepthMaterial?o(p,g):g.isMeshDistanceMaterial?(o(p,g),x(p,g)):g.isMeshNormalMaterial?o(p,g):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,T,M):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===yn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===yn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const T=t.get(g),M=T.envMap,_=T.envMapRotation;M&&(p.envMap.value=M,us.copy(_),us.x*=-1,us.y*=-1,us.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),p.envMapRotation.value.setFromMatrix4(ry.makeRotationFromEuler(us)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,T,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*T,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,T){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const T=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function cy(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,M){const _=M.program;n.uniformBlockBinding(T,_)}function l(T,M){let _=i[T.id];_===void 0&&(m(T),_=h(T),i[T.id]=_,T.addEventListener("dispose",p));const A=M.program;n.updateUBOMapping(T,A);const E=t.render.frame;o[T.id]!==E&&(f(T),o[T.id]=E)}function h(T){const M=u();T.__bindingPointIndex=M;const _=s.createBuffer(),A=T.__size,E=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,_),_}function u(){for(let T=0;T<a;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=i[T.id],_=T.uniforms,A=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,b=_.length;E<b;E++){const S=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,v=S.length;y<v;y++){const R=S[y];if(d(R,E,y,A)===!0){const U=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let V=0;V<D.length;V++){const G=D[V],Z=x(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+z,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(T,M,_,A){const E=T.value,b=M+"_"+_;if(A[b]===void 0)return typeof E=="number"||typeof E=="boolean"?A[b]=E:A[b]=E.clone(),!0;{const S=A[b];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return A[b]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function m(T){const M=T.uniforms;let _=0;const A=16;for(let b=0,S=M.length;b<S;b++){const y=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,R=y.length;v<R;v++){const U=y[v],D=Array.isArray(U.value)?U.value:[U.value];for(let z=0,V=D.length;z<V;z++){const G=D[z],Z=x(G),W=_%A,rt=W%Z.boundary,ft=W+rt;_+=rt,ft!==0&&A-ft<Z.storage&&(_+=A-ft),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=Z.storage}}}const E=_%A;return E>0&&(_+=A-E),T.__size=_,T.__cache={},this}function x(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){const M=T.target;M.removeEventListener("dispose",p);const _=r.indexOf(M.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function g(){for(const T in i)s.deleteBuffer(i[T]);r=[],i={},o={}}return{bind:c,update:l,dispose:g}}class ly{constructor(t={}){const{canvas:e=gm(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),x=new Int32Array(4);let p=null,g=null;const T=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=ts,this.toneMappingExposure=1;const _=this;let A=!1,E=0,b=0,S=null,y=-1,v=null;const R=new pe,U=new pe;let D=null;const z=new st(0);let V=0,G=e.width,Z=e.height,W=1,rt=null,ft=null;const wt=new pe(0,0,G,Z),Ft=new pe(0,0,G,Z);let jt=!1;const tt=new fu;let ct=!1,St=!1;this.transmissionResolutionScale=1;const dt=new fe,zt=new fe,kt=new N,Yt=new pe,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Pe(){return S===null?W:1}let O=n;function Fn(P,k){return e.getContext(P,k)}try{const P={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nu}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),O===null){const k="webgl2";if(O=Fn(k,P),O===null)throw Fn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Kt,Jt,It,ve,Pt,L,C,X,nt,ot,et,Ct,vt,Tt,ee,lt,Et,Nt,Ot,At,Qt,Xt,xe,B;function gt(){Kt=new v_(O),Kt.init(),Xt=new ty(O,Kt),Jt=new f_(O,Kt,t,Xt),It=new JM(O,Kt),Jt.reverseDepthBuffer&&f&&It.buffers.depth.setReversed(!0),ve=new y_(O),Pt=new BM,L=new QM(O,Kt,It,Pt,Jt,Xt,ve),C=new p_(_),X=new x_(_),nt=new Rg(O),xe=new h_(O,nt),ot=new __(O,nt,ve,xe),et=new S_(O,ot,nt,ve),Ot=new w_(O,Jt,L),lt=new d_(Pt),Ct=new OM(_,C,X,Kt,Jt,xe,lt),vt=new ay(_,Pt),Tt=new GM,ee=new YM(Kt),Nt=new l_(_,C,X,It,et,d,c),Et=new jM(_,et,Jt),B=new cy(O,ve,Jt,It),At=new u_(O,Kt,ve),Qt=new M_(O,Kt,ve),ve.programs=Ct.programs,_.capabilities=Jt,_.extensions=Kt,_.properties=Pt,_.renderLists=Tt,_.shadowMap=Et,_.state=It,_.info=ve}gt();const Q=new oy(_,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Kt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Kt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(G,Z,!1))},this.getSize=function(P){return P.set(G,Z)},this.setSize=function(P,k,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,Z=k,e.width=Math.floor(P*W),e.height=Math.floor(k*W),q===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(G*W,Z*W).floor()},this.setDrawingBufferSize=function(P,k,q){G=P,Z=k,W=q,e.width=Math.floor(P*q),e.height=Math.floor(k*q),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(wt)},this.setViewport=function(P,k,q,$){P.isVector4?wt.set(P.x,P.y,P.z,P.w):wt.set(P,k,q,$),It.viewport(R.copy(wt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Ft)},this.setScissor=function(P,k,q,$){P.isVector4?Ft.set(P.x,P.y,P.z,P.w):Ft.set(P,k,q,$),It.scissor(U.copy(Ft).multiplyScalar(W).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(P){It.setScissorTest(jt=P)},this.setOpaqueSort=function(P){rt=P},this.setTransparentSort=function(P){ft=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(P=!0,k=!0,q=!0){let $=0;if(P){let H=!1;if(S!==null){const at=S.texture.format;H=at===lu||at===cu||at===au}if(H){const at=S.texture.type,xt=at===Fi||at===Ds||at===Sr||at===Lo||at===su||at===ou,bt=Nt.getClearColor(),Rt=Nt.getClearAlpha(),Bt=bt.r,Gt=bt.g,Lt=bt.b;xt?(m[0]=Bt,m[1]=Gt,m[2]=Lt,m[3]=Rt,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=Bt,x[1]=Gt,x[2]=Lt,x[3]=Rt,O.clearBufferiv(O.COLOR,0,x))}else $|=O.COLOR_BUFFER_BIT}k&&($|=O.DEPTH_BUFFER_BIT),q&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Nt.dispose(),Tt.dispose(),ee.dispose(),Pt.dispose(),C.dispose(),X.dispose(),et.dispose(),xe.dispose(),B.dispose(),Ct.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Uu),Q.removeEventListener("sessionend",Nu),ss.stop()};function it(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=ve.autoReset,k=Et.enabled,q=Et.autoUpdate,$=Et.needsUpdate,H=Et.type;gt(),ve.autoReset=P,Et.enabled=k,Et.autoUpdate=q,Et.needsUpdate=$,Et.type=H}function _t(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vt(P){const k=P.target;k.removeEventListener("dispose",Vt),Re(k)}function Re(P){Ze(P),Pt.remove(P)}function Ze(P){const k=Pt.get(P).programs;k!==void 0&&(k.forEach(function(q){Ct.releaseProgram(q)}),P.isShaderMaterial&&Ct.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,q,$,H,at){k===null&&(k=Te);const xt=H.isMesh&&H.matrixWorld.determinant()<0,bt=b0(P,k,q,$,H);It.setMaterial($,xt);let Rt=q.index,Bt=1;if($.wireframe===!0){if(Rt=ot.getWireframeAttribute(q),Rt===void 0)return;Bt=2}const Gt=q.drawRange,Lt=q.attributes.position;let ne=Gt.start*Bt,ce=(Gt.start+Gt.count)*Bt;at!==null&&(ne=Math.max(ne,at.start*Bt),ce=Math.min(ce,(at.start+at.count)*Bt)),Rt!==null?(ne=Math.max(ne,0),ce=Math.min(ce,Rt.count)):Lt!=null&&(ne=Math.max(ne,0),ce=Math.min(ce,Lt.count));const De=ce-ne;if(De<0||De===1/0)return;xe.setup(H,$,bt,q,Rt);let Ce,se=At;if(Rt!==null&&(Ce=nt.get(Rt),se=Qt,se.setIndex(Ce)),H.isMesh)$.wireframe===!0?(It.setLineWidth($.wireframeLinewidth*Pe()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(H.isLine){let Ut=$.linewidth;Ut===void 0&&(Ut=1),It.setLineWidth(Ut*Pe()),H.isLineSegments?se.setMode(O.LINES):H.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else H.isPoints?se.setMode(O.POINTS):H.isSprite&&se.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)se.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,Xe=H._multiDrawCounts,le=H._multiDrawCount,jn=Rt?nt.get(Rt).bytesPerElement:1,ks=Pt.get($).currentProgram.getUniforms();for(let Rn=0;Rn<le;Rn++)ks.setValue(O,"_gl_DrawID",Rn),se.render(Ut[Rn]/jn,Xe[Rn])}else if(H.isInstancedMesh)se.renderInstances(ne,De,H.count);else if(q.isInstancedBufferGeometry){const Ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Xe=Math.min(q.instanceCount,Ut);se.renderInstances(ne,De,Xe)}else se.render(ne,De)};function ue(P,k,q){P.transparent===!0&&P.side===Dt&&P.forceSinglePass===!1?(P.side=yn,P.needsUpdate=!0,kr(P,k,q),P.side=es,P.needsUpdate=!0,kr(P,k,q),P.side=Dt):kr(P,k,q)}this.compile=function(P,k,q=null){q===null&&(q=P),g=ee.get(q),g.init(k),M.push(g),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),P!==q&&P.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const $=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const at=H.material;if(at)if(Array.isArray(at))for(let xt=0;xt<at.length;xt++){const bt=at[xt];ue(bt,q,H),$.add(bt)}else ue(at,q,H),$.add(at)}),M.pop(),g=null,$},this.compileAsync=function(P,k,q=null){const $=this.compile(P,k,q);return new Promise(H=>{function at(){if($.forEach(function(xt){Pt.get(xt).currentProgram.isReady()&&$.delete(xt)}),$.size===0){H(P);return}setTimeout(at,10)}Kt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let $n=null;function yi(P){$n&&$n(P)}function Uu(){ss.stop()}function Nu(){ss.start()}const ss=new dp;ss.setAnimationLoop(yi),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(P){$n=P,Q.setAnimationLoop(P),P===null?ss.stop():ss.start()},Q.addEventListener("sessionstart",Uu),Q.addEventListener("sessionend",Nu),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,k,S),g=ee.get(P,M.length),g.init(k),M.push(g),zt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),tt.setFromProjectionMatrix(zt),St=this.localClippingEnabled,ct=lt.init(this.clippingPlanes,St),p=Tt.get(P,T.length),p.init(),T.push(p),Q.enabled===!0&&Q.isPresenting===!0){const at=_.xr.getDepthSensingMesh();at!==null&&Mc(at,k,-1/0,_.sortObjects)}Mc(P,k,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(rt,ft),te=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,te&&Nt.addToRenderList(p,P),this.info.render.frame++,ct===!0&&lt.beginShadows();const q=g.state.shadowsArray;Et.render(q,P,k),ct===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=p.opaque,H=p.transmissive;if(g.setupLights(),k.isArrayCamera){const at=k.cameras;if(H.length>0)for(let xt=0,bt=at.length;xt<bt;xt++){const Rt=at[xt];Fu($,H,P,Rt)}te&&Nt.render(P);for(let xt=0,bt=at.length;xt<bt;xt++){const Rt=at[xt];zu(p,P,Rt,Rt.viewport)}}else H.length>0&&Fu($,H,P,k),te&&Nt.render(P),zu(p,P,k);S!==null&&b===0&&(L.updateMultisampleRenderTarget(S),L.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(_,P,k),xe.resetDefaultState(),y=-1,v=null,M.pop(),M.length>0?(g=M[M.length-1],ct===!0&&lt.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Mc(P,k,q,$){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||tt.intersectsSprite(P)){$&&Yt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(zt);const xt=et.update(P),bt=P.material;bt.visible&&p.push(P,xt,bt,q,Yt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||tt.intersectsObject(P))){const xt=et.update(P),bt=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Yt.copy(P.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Yt.copy(xt.boundingSphere.center)),Yt.applyMatrix4(P.matrixWorld).applyMatrix4(zt)),Array.isArray(bt)){const Rt=xt.groups;for(let Bt=0,Gt=Rt.length;Bt<Gt;Bt++){const Lt=Rt[Bt],ne=bt[Lt.materialIndex];ne&&ne.visible&&p.push(P,xt,ne,q,Yt.z,Lt)}}else bt.visible&&p.push(P,xt,bt,q,Yt.z,null)}}const at=P.children;for(let xt=0,bt=at.length;xt<bt;xt++)Mc(at[xt],k,q,$)}function zu(P,k,q,$){const H=P.opaque,at=P.transmissive,xt=P.transparent;g.setupLightsView(q),ct===!0&&lt.setGlobalState(_.clippingPlanes,q),$&&It.viewport(R.copy($)),H.length>0&&Br(H,k,q),at.length>0&&Br(at,k,q),xt.length>0&&Br(xt,k,q),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Fu(P,k,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new ni(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Ui:Fi,minFilter:Ts,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const at=g.state.transmissionRenderTarget[$.id],xt=$.viewport||R;at.setSize(xt.z*_.transmissionResolutionScale,xt.w*_.transmissionResolutionScale);const bt=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(z),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),te&&Nt.render(q);const Rt=_.toneMapping;_.toneMapping=ts;const Bt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),ct===!0&&lt.setGlobalState(_.clippingPlanes,$),Br(P,q,$),L.updateMultisampleRenderTarget(at),L.updateRenderTargetMipmap(at),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Lt=0,ne=k.length;Lt<ne;Lt++){const ce=k[Lt],De=ce.object,Ce=ce.geometry,se=ce.material,Ut=ce.group;if(se.side===Dt&&De.layers.test($.layers)){const Xe=se.side;se.side=yn,se.needsUpdate=!0,Ou(De,q,$,Ce,se,Ut),se.side=Xe,se.needsUpdate=!0,Gt=!0}}Gt===!0&&(L.updateMultisampleRenderTarget(at),L.updateRenderTargetMipmap(at))}_.setRenderTarget(bt),_.setClearColor(z,V),Bt!==void 0&&($.viewport=Bt),_.toneMapping=Rt}function Br(P,k,q){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,at=P.length;H<at;H++){const xt=P[H],bt=xt.object,Rt=xt.geometry,Bt=$===null?xt.material:$,Gt=xt.group;bt.layers.test(q.layers)&&Ou(bt,k,q,Rt,Bt,Gt)}}function Ou(P,k,q,$,H,at){P.onBeforeRender(_,k,q,$,H,at),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(_,k,q,$,P,at),H.transparent===!0&&H.side===Dt&&H.forceSinglePass===!1?(H.side=yn,H.needsUpdate=!0,_.renderBufferDirect(q,k,$,H,P,at),H.side=es,H.needsUpdate=!0,_.renderBufferDirect(q,k,$,H,P,at),H.side=Dt):_.renderBufferDirect(q,k,$,H,P,at),P.onAfterRender(_,k,q,$,H,at)}function kr(P,k,q){k.isScene!==!0&&(k=Te);const $=Pt.get(P),H=g.state.lights,at=g.state.shadowsArray,xt=H.state.version,bt=Ct.getParameters(P,H.state,at,k,q),Rt=Ct.getProgramCacheKey(bt);let Bt=$.programs;$.environment=P.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(P.isMeshStandardMaterial?X:C).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Bt===void 0&&(P.addEventListener("dispose",Vt),Bt=new Map,$.programs=Bt);let Gt=Bt.get(Rt);if(Gt!==void 0){if($.currentProgram===Gt&&$.lightsStateVersion===xt)return ku(P,bt),Gt}else bt.uniforms=Ct.getUniforms(P),P.onBeforeCompile(bt,_),Gt=Ct.acquireProgram(bt,Rt),Bt.set(Rt,Gt),$.uniforms=bt.uniforms;const Lt=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),ku(P,bt),$.needsLights=E0(P),$.lightsStateVersion=xt,$.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMap.value=H.state.directionalShadowMap,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotShadowMap.value=H.state.spotShadowMap,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMap.value=H.state.pointShadowMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Gt,$.uniformsList=null,Gt}function Bu(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=Da.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function ku(P,k){const q=Pt.get(P);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function b0(P,k,q,$,H){k.isScene!==!0&&(k=Te),L.resetTextureUnits();const at=k.fog,xt=$.isMeshStandardMaterial?k.environment:null,bt=S===null?_.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Uo,Rt=($.isMeshStandardMaterial?X:C).get($.envMap||xt),Bt=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Gt=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Lt=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,ce=!!q.morphAttributes.color;let De=ts;$.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(De=_.toneMapping);const Ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=Ce!==void 0?Ce.length:0,Ut=Pt.get($),Xe=g.state.lights;if(ct===!0&&(St===!0||P!==v)){const nn=P===v&&$.id===y;lt.setState($,P,nn)}let le=!1;$.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Xe.state.version||Ut.outputColorSpace!==bt||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==Rt||$.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==lt.numPlanes||Ut.numIntersection!==lt.numIntersection)||Ut.vertexAlphas!==Bt||Ut.vertexTangents!==Gt||Ut.morphTargets!==Lt||Ut.morphNormals!==ne||Ut.morphColors!==ce||Ut.toneMapping!==De||Ut.morphTargetsCount!==se)&&(le=!0):(le=!0,Ut.__version=$.version);let jn=Ut.currentProgram;le===!0&&(jn=kr($,k,H));let ks=!1,Rn=!1,Xo=!1;const ye=jn.getUniforms(),On=Ut.uniforms;if(It.useProgram(jn.program)&&(ks=!0,Rn=!0,Xo=!0),$.id!==y&&(y=$.id,Rn=!0),ks||v!==P){It.buffers.depth.getReversed()?(dt.copy(P.projectionMatrix),vm(dt),_m(dt),ye.setValue(O,"projectionMatrix",dt)):ye.setValue(O,"projectionMatrix",P.projectionMatrix),ye.setValue(O,"viewMatrix",P.matrixWorldInverse);const wn=ye.map.cameraPosition;wn!==void 0&&wn.setValue(O,kt.setFromMatrixPosition(P.matrixWorld)),Jt.logarithmicDepthBuffer&&ye.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ye.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,Rn=!0,Xo=!0)}if(H.isSkinnedMesh){ye.setOptional(O,H,"bindMatrix"),ye.setOptional(O,H,"bindMatrixInverse");const nn=H.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ye.setValue(O,"boneTexture",nn.boneTexture,L))}H.isBatchedMesh&&(ye.setOptional(O,H,"batchingTexture"),ye.setValue(O,"batchingTexture",H._matricesTexture,L),ye.setOptional(O,H,"batchingIdTexture"),ye.setValue(O,"batchingIdTexture",H._indirectTexture,L),ye.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&ye.setValue(O,"batchingColorTexture",H._colorsTexture,L));const Bn=q.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Ot.update(H,q,jn),(Rn||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,ye.setValue(O,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(On.envMap.value=Rt,On.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(On.envMapIntensity.value=k.environmentIntensity),Rn&&(ye.setValue(O,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&T0(On,Xo),at&&$.fog===!0&&vt.refreshFogUniforms(On,at),vt.refreshMaterialUniforms(On,$,W,Z,g.state.transmissionRenderTarget[P.id]),Da.upload(O,Bu(Ut),On,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Da.upload(O,Bu(Ut),On,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ye.setValue(O,"center",H.center),ye.setValue(O,"modelViewMatrix",H.modelViewMatrix),ye.setValue(O,"normalMatrix",H.normalMatrix),ye.setValue(O,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const nn=$.uniformsGroups;for(let wn=0,yc=nn.length;wn<yc;wn++){const os=nn[wn];B.update(os,jn),B.bind(os,jn)}}return jn}function T0(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function E0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,k,q){Pt.get(P.texture).__webglTexture=k,Pt.get(P.depthTexture).__webglTexture=q;const $=Pt.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){const q=Pt.get(P);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const A0=O.createFramebuffer();this.setRenderTarget=function(P,k=0,q=0){S=P,E=k,b=q;let $=!0,H=null,at=!1,xt=!1;if(P){const Rt=Pt.get(P);if(Rt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(Rt.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Rt.__hasExternalTextures)L.rebindTextures(P,Pt.get(P.texture).__webglTexture,Pt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Lt=P.depthTexture;if(Rt.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const Bt=P.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);const Gt=Pt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?H=Gt[k][q]:H=Gt[k],at=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?H=Pt.get(P).__webglMultisampledFramebuffer:Array.isArray(Gt)?H=Gt[q]:H=Gt,R.copy(P.viewport),U.copy(P.scissor),D=P.scissorTest}else R.copy(wt).multiplyScalar(W).floor(),U.copy(Ft).multiplyScalar(W).floor(),D=jt;if(q!==0&&(H=A0),It.bindFramebuffer(O.FRAMEBUFFER,H)&&$&&It.drawBuffers(P,H),It.viewport(R),It.scissor(U),It.setScissorTest(D),at){const Rt=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,q)}else if(xt){const Rt=Pt.get(P.texture),Bt=k;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,q,Bt)}else if(P!==null&&q!==0){const Rt=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Rt.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(P,k,q,$,H,at,xt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){It.bindFramebuffer(O.FRAMEBUFFER,bt);try{const Rt=P.texture,Bt=Rt.format,Gt=Rt.type;if(!Jt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-$&&q>=0&&q<=P.height-H&&O.readPixels(k,q,$,H,Xt.convert(Bt),Xt.convert(Gt),at)}finally{const Rt=S!==null?Pt.get(S).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(P,k,q,$,H,at,xt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){const Rt=P.texture,Bt=Rt.format,Gt=Rt.type;if(!Jt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-$&&q>=0&&q<=P.height-H){It.bindFramebuffer(O.FRAMEBUFFER,bt);const Lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.bufferData(O.PIXEL_PACK_BUFFER,at.byteLength,O.STREAM_READ),O.readPixels(k,q,$,H,Xt.convert(Bt),Xt.convert(Gt),0);const ne=S!==null?Pt.get(S).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,ne);const ce=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await xm(O,ce,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,at),O.deleteBuffer(Lt),O.deleteSync(ce),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,q=0){P.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);const $=Math.pow(2,-q),H=Math.floor(P.image.width*$),at=Math.floor(P.image.height*$),xt=k!==null?k.x:0,bt=k!==null?k.y:0;L.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,xt,bt,H,at),It.unbindTexture()};const R0=O.createFramebuffer(),C0=O.createFramebuffer();this.copyTextureToTexture=function(P,k,q=null,$=null,H=0,at=null){P.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1],k=arguments[2],at=arguments[3]||0,q=null),at===null&&(H!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=H,H=0):at=0);let xt,bt,Rt,Bt,Gt,Lt,ne,ce,De;const Ce=P.isCompressedTexture?P.mipmaps[at]:P.image;if(q!==null)xt=q.max.x-q.min.x,bt=q.max.y-q.min.y,Rt=q.isBox3?q.max.z-q.min.z:1,Bt=q.min.x,Gt=q.min.y,Lt=q.isBox3?q.min.z:0;else{const Bn=Math.pow(2,-H);xt=Math.floor(Ce.width*Bn),bt=Math.floor(Ce.height*Bn),P.isDataArrayTexture?Rt=Ce.depth:P.isData3DTexture?Rt=Math.floor(Ce.depth*Bn):Rt=1,Bt=0,Gt=0,Lt=0}$!==null?(ne=$.x,ce=$.y,De=$.z):(ne=0,ce=0,De=0);const se=Xt.convert(k.format),Ut=Xt.convert(k.type);let Xe;k.isData3DTexture?(L.setTexture3D(k,0),Xe=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),Xe=O.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),Xe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const le=O.getParameter(O.UNPACK_ROW_LENGTH),jn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ks=O.getParameter(O.UNPACK_SKIP_PIXELS),Rn=O.getParameter(O.UNPACK_SKIP_ROWS),Xo=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt);const ye=P.isDataArrayTexture||P.isData3DTexture,On=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){const Bn=Pt.get(P),nn=Pt.get(k),wn=Pt.get(Bn.__renderTarget),yc=Pt.get(nn.__renderTarget);It.bindFramebuffer(O.READ_FRAMEBUFFER,wn.__webglFramebuffer),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,yc.__webglFramebuffer);for(let os=0;os<Rt;os++)ye&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(P).__webglTexture,H,Lt+os),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(k).__webglTexture,at,De+os)),O.blitFramebuffer(Bt,Gt,xt,bt,ne,ce,xt,bt,O.DEPTH_BUFFER_BIT,O.NEAREST);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||Pt.has(P)){const Bn=Pt.get(P),nn=Pt.get(k);It.bindFramebuffer(O.READ_FRAMEBUFFER,R0),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,C0);for(let wn=0;wn<Rt;wn++)ye?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bn.__webglTexture,H,Lt+wn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bn.__webglTexture,H),On?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,nn.__webglTexture,at,De+wn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,nn.__webglTexture,at),H!==0?O.blitFramebuffer(Bt,Gt,xt,bt,ne,ce,xt,bt,O.COLOR_BUFFER_BIT,O.NEAREST):On?O.copyTexSubImage3D(Xe,at,ne,ce,De+wn,Bt,Gt,xt,bt):O.copyTexSubImage2D(Xe,at,ne,ce,Bt,Gt,xt,bt);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else On?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Xe,at,ne,ce,De,xt,bt,Rt,se,Ut,Ce.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Xe,at,ne,ce,De,xt,bt,Rt,se,Ce.data):O.texSubImage3D(Xe,at,ne,ce,De,xt,bt,Rt,se,Ut,Ce):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,at,ne,ce,xt,bt,se,Ut,Ce.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,at,ne,ce,Ce.width,Ce.height,se,Ce.data):O.texSubImage2D(O.TEXTURE_2D,at,ne,ce,xt,bt,se,Ut,Ce);O.pixelStorei(O.UNPACK_ROW_LENGTH,le),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,jn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ks),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xo),at===0&&k.generateMipmaps&&O.generateMipmap(Xe),It.unbindTexture()},this.copyTextureToTexture3D=function(P,k,q=null,$=null,H=0){return P.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,$=arguments[1]||null,P=arguments[2],k=arguments[3],H=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,q,$,H)},this.initRenderTarget=function(P){Pt.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){E=0,b=0,S=null,It.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const hy=15,uy=6,fy=1.8,Ka=8,Jf=.85,Qf=.98,Ja=.003,ae=90,xc=1.7,dy=75,py=60,my=18,gy=10,xy=14,vy=6,_y=10,My=350,yy=50,wy=45,Sy=40,by=60,vp=6,Ty=25,Ey=8,Ay=25,Ry=50,Cy=10,Py=10,Iy=10,Ly=8,Ps=280,yh=2.5,Dy=6,td=1.5,co=5,ed=2.5,no=12,_e=30,Uy=5,Ny=8,zy=2.2,F={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116},en=new ly({antialias:!0,powerPreference:"default"});en.setSize(window.innerWidth,window.innerHeight);en.setPixelRatio(Math.min(window.devicePixelRatio,1.5));en.shadowMap.enabled=!0;en.shadowMap.type=Cd;en.toneMapping=Id;en.toneMappingExposure=2.8;en.outputColorSpace=Mn;document.body.appendChild(en.domElement);const fn=new Ln(65,window.innerWidth/window.innerHeight,.1,300),_p=new fp,ht=new Gm;ht.background=new st(F.skyDeep);ht.fog=new uu(F.fog,.01);window.addEventListener("resize",()=>{fn.aspect=window.innerWidth/window.innerHeight,fn.updateProjectionMatrix(),en.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||_p.getDelta()});const Mp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class zr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fy=new wu(-1,1,1,-1,0,1);class Oy extends be{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const By=new Oy;class yp{constructor(t){this._mesh=new I(By,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Fy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ky extends zr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Tn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qa.clone(t.uniforms),this.material=new Tn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new yp(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nd extends zr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Gy extends zr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Hy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ui}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ky(Mp),this.copyPass.material.blending=Di,this.clock=new fp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}nd!==void 0&&(r instanceof nd?n=!0:r instanceof Gy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vy extends zr{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const Wy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Fo extends zr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(o,r,{type:Ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new ni(o,r,{type:Ui});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new ni(o,r,{type:Ui});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=Wy;this.highPassUniforms=qa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new pt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Mp;this.copyUniforms=qa.clone(h.uniforms),this.blendMaterial=new Tn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:he,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new Y,this.fsQuad=new yp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new pt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Fo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Fo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Tn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Tn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Fo.BlurDirectionX=new pt(1,0);Fo.BlurDirectionY=new pt(0,1);let Is=null,bu=!0;try{const s=new Vy(ht,fn),t=new Fo(new pt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);Is=new Hy(en),Is.addPass(s),Is.addPass(t)}catch(s){console.warn("Bloom unavailable, falling back to direct render:",s.message),bu=!1}window.addEventListener("resize",()=>{bu&&Is&&Is.setSize(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2))});function id(){bu&&Is?Is.render():en.render(ht,fn)}const Tu=new Sg(F.ambient,F.ground,.65);ht.add(Tu);const Zn=new mc(F.moon,.85);Zn.position.set(30,60,-20);Zn.castShadow=!0;Zn.shadow.camera.left=-90;Zn.shadow.camera.right=90;Zn.shadow.camera.top=90;Zn.shadow.camera.bottom=-90;Zn.shadow.camera.near=1;Zn.shadow.camera.far=250;Zn.shadow.mapSize.set(1024,1024);Zn.shadow.bias=-.001;ht.add(Zn);const Eu=new mc(2241365,.3);Eu.position.set(-40,45,25);ht.add(Eu);const wp=new mc(3359829,.4);wp.position.set(-25,15,30);ht.add(wp);const Sp=new Ho(3368516,.7,100);Sp.position.set(0,.5,0);ht.add(Sp);const bp=new mc(4478327,.4);bp.position.set(-10,25,40);ht.add(bp);const Au=new Ho(6719624,.6,20);ht.add(Au);const gs=[];function Xy(){for(let s=0;s<Uy;s++){const t=new Ho(F.crystal,0,16);ht.add(t),gs.push(t)}}const cr=new Ho(F.orbGold,0,15);ht.add(cr);const Ie={};let Rr=0,Ls=0,vc=!1,Tp=!1,Ru=0,Cu=0,Pu=!1,_c=!1,Wo=!1,Qa=null,Ns=null,wh=0,Sh=0,bh=null;function qy(s){bh=s}function Yy(s){Tp=s}function Zy(s){_c=s}function Fr(){!Tp&&bh&&bh()}window.addEventListener("keydown",s=>{Ie[s.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(s.code)>=0&&s.preventDefault(),Fr()});window.addEventListener("keyup",s=>{Ie[s.code]=!1});window.addEventListener("blur",()=>{for(const s in Ie)Ie[s]=!1;vc=!1});en.domElement.addEventListener("mousedown",()=>{vc=!0,Fr()});window.addEventListener("mouseup",()=>{vc=!1});window.addEventListener("mousemove",s=>{vc&&(Rr-=s.movementX*Ja,Ls-=s.movementY*Ja,Ls=Math.max(-1,Math.min(1,Ls)))});const $y="ontouchstart"in window||navigator.maxTouchPoints>0,Or=document.getElementById("joy-zone"),tc=document.getElementById("joy-knob"),Iu=document.getElementById("btn-jump");$y&&(Or.style.display="block",Iu.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function Ep(s,t){const e=Or.getBoundingClientRect();let n=s-(e.left+e.width/2),i=t-(e.top+e.height/2);const o=Math.sqrt(n*n+i*i),r=52;o>r&&(n=n/o*r,i=i/o*r),Ru=n/r,Cu=i/r,tc.style.left=40+n+"px",tc.style.top=40+i+"px"}Or.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),Fr();const t=s.changedTouches[0];Qa=t.identifier,Pu=!0,Ep(t.clientX,t.clientY)},{passive:!1});Or.addEventListener("touchmove",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Qa&&Ep(s.changedTouches[t].clientX,s.changedTouches[t].clientY)},{passive:!1});Or.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Qa&&(Qa=null,Pu=!1,Ru=0,Cu=0,tc.style.left="40px",tc.style.top="40px")},{passive:!1});Iu.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),Fr(),_c=!0},{passive:!1});Iu.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),_c=!1},{passive:!1});en.domElement.addEventListener("touchstart",s=>{s.preventDefault(),Fr();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.clientX>window.innerWidth*.3&&Ns===null&&(Ns=e.identifier,wh=e.clientX,Sh=e.clientY)}},{passive:!1});en.domElement.addEventListener("touchmove",s=>{s.preventDefault();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.identifier===Ns&&(Rr-=(e.clientX-wh)*Ja,Ls-=(e.clientY-Sh)*Ja,Ls=Math.max(-1,Math.min(1,Ls)),wh=e.clientX,Sh=e.clientY)}},{passive:!1});en.domElement.addEventListener("touchend",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Ns&&(Ns=null)},{passive:!1});en.domElement.addEventListener("touchcancel",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Ns&&(Ns=null)},{passive:!1});function jy(){let s=0,t=0;Ie.KeyW&&(t-=1),Ie.KeyS&&(t+=1),Ie.KeyA&&(s-=1),Ie.KeyD&&(s+=1),Pu&&(s+=Ru,t+=Cu);const e=Math.sqrt(s*s+t*t);e>1&&(s/=e,t/=e);const n=uy*(Ie.ShiftLeft||Ie.ShiftRight||Wo?fy:1),i=Math.sin(Rr),o=Math.cos(Rr);return{x:(s*o+t*i)*n,z:(-s*i+t*o)*n}}const An={mushCap:new j(.5,8,5),mushStem:new Mt(.06,.1,.6,5),mushDot:new j(.06,4,3),crystal:new Mt(0,.35,1.8,6),crystalSm:new Mt(0,.18,.9,5),fly:new j(.06,4,3),spore:new j(.04,3,3),dandSeed:new j(.025,3,3),bubble:new j(.15,8,6),starMote:new j(.03,3,3),dustMote:new j(.035,3,3)};let vr=42;function w(){return vr=vr*16807%2147483647,(vr&2147483647)/2147483647}function Ky(){return vr}function Jy(s){vr=s}function ga(s,t){let e=s*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function _r(s){return s*s*(3-2*s)}function Ap(s,t){const e=Math.floor(s),n=Math.floor(t),i=_r(s-e),o=_r(t-n),r=ga(e,n),a=ga(e+1,n),c=ga(e,n+1),l=ga(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function sd(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=Ap(s*o,t*o)*i,i*=.5,o*=2;return n}const Th=[];function Eh(s,t,e){Th.push({x:s,z:t,r:e})}function Zt(s,t){const e=Math.sqrt(s*s+t*t),n=1-_r(Math.max(0,(e-ae*.7)/(ae*.3))),i=_r(Math.min(1,e/8)),o=.035,r=sd(s*o,t*o,4),a=sd(s*o*2.7+50,t*o*2.7+50,3),c=Ap(s*.15,t*.15);let l=r*2.5+a*.8+c*.15;l*=n*i;for(let h=0;h<Th.length;h++){const u=Th[h],f=s-u.x,d=t-u.z,m=Math.sqrt(f*f+d*d);if(m<u.r*2){const x=_r(Math.max(0,(m-u.r*.5)/(u.r*1.5)));l*=x}}return l}function Qy(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const i=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80}];for(const h of i)for(let u=0;u<h.n;u++){const f=n()*2048,d=n()*2048,m=h.r*(.5+n()*.8),x=e.createRadialGradient(f,d,0,f,d,m);x.addColorStop(0,h.col),x.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let p=-1;p<=1;p++)for(let g=-1;g<=1;g++)e.beginPath(),e.arc(f+p*2048,d+g*2048,m,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let u=0;u<h.n;u++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const f=n()*2048,d=n()*2048;e.beginPath(),e.arc(f,d,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let u=n()*2048,f=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(u,f);let m=n()*6.28;const x=12+Math.floor(n()*16);for(let p=0;p<x;p++)m+=Math.sin(p*.6)*.5+(n()-.5)*.4,u+=Math.cos(m)*(6+n()*10),f+=Math.sin(m)*(6+n()*10),e.lineTo(u,f);if(e.stroke(),n()<.6){const p=e.createRadialGradient(u,f,0,u,f,6+n()*8);p.addColorStop(0,d.replace("0.0","0.1")),p.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=p,e.beginPath(),e.arc(u,f,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let u=n()*2048,f=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(u,f);for(let m=0;m<10;m++)d+=Math.sin(m*.7)*.5+(n()-.5)*.35,u+=Math.cos(d)*(8+n()*14),f+=Math.sin(d)*(8+n()*14),e.lineTo(u,f);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const u=n()*2048,f=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}for(let h=0;h<40;h++){const u=n()*2048,f=n()*2048,d=15+n()*35,m=e.createRadialGradient(u,f,0,u,f,d),x=n();x<.4?(m.addColorStop(0,"rgba(45,90,50,0.18)"),m.addColorStop(1,"rgba(25,55,30,0)")):x<.7?(m.addColorStop(0,"rgba(35,75,60,0.16)"),m.addColorStop(1,"rgba(20,50,38,0)")):(m.addColorStop(0,"rgba(55,75,35,0.14)"),m.addColorStop(1,"rgba(30,45,20,0)")),e.fillStyle=m,e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}for(let h=0;h<400;h++){const u=n()*2048,f=n()*2048,d=1.5+n()*3.5,m=Math.floor(28+n()*42);e.fillStyle=`rgba(${m},${m-4},${m-10},0.3)`,e.beginPath(),e.arc(u,f,d,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const u=n()*2048,f=n()*2048,d=4+n()*18,m=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(u,f),e.lineTo(u+Math.cos(m)*d,f+Math.sin(m)*d),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const u=n()*2048,f=n()*2048,d=c[Math.floor(n()*c.length)];if(e.fillStyle=d,e.beginPath(),e.arc(u,f,1+n()*2,0,6.28),e.fill(),n()<.3){const m=e.createRadialGradient(u,f,0,u,f,4+n()*5);m.addColorStop(0,d),m.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=m,e.beginPath(),e.arc(u,f,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const u=n()*2048,f=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(u,f,.5+n()*1.2,0,6.28),e.fill()}const l=new mu(t);return l.wrapS=l.wrapT=Ha,l.repeat.set(8,8),l.colorSpace=Mn,l}function xa(s,t){let e=s*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function Ah(s){return s*s*(3-2*s)}function Rp(s,t){const e=Math.floor(s),n=Math.floor(t),i=Ah(s-e),o=Ah(t-n),r=xa(e,n),a=xa(e+1,n),c=xa(e,n+1),l=xa(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function sl(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=Rp(s*o,t*o)*i,i*=.5,o*=2;return n}function tw(){const s=Qy(),t=ae*3,e=200,n=new ge(t,t,e,e),i=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9]],r=i.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const h=i.getX(l),u=i.getY(l);Math.sqrt(h*h+u*u)<ae*1.4?i.setZ(l,Zt(h,-u)):i.setZ(l,0);const d=h,m=-u,x=sl(d*.025+100,m*.025+200,3),p=sl(d*.06+300,m*.06+400,2),g=Rp(d*.15+500,m*.15+600),T=sl(d*.04-150,m*.04-250,3),M=Math.floor(x*o.length*.999),_=Math.floor(T*o.length*.999),A=o[M],E=o[_],b=Ah(p),S=.85+g*.3,y=(A[0]*(1-b)+E[0]*b)*S,v=(A[1]*(1-b)+E[1]*b)*S,R=(A[2]*(1-b)+E[2]*b)*S,D=1+Zt(d,m)*.06;a[l*3]=y*D,a[l*3+1]=v*D,a[l*3+2]=R*D}n.setAttribute("color",new We(a,3)),n.computeVertexNormals();const c=new I(n,new K({map:s,vertexColors:!0,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,ht.add(c),c}const Cr=new re;let ec=null;const xs=120;let od=null,Ua=null,Rh=null,Ch=null,yo=null;const wo=[],ew=3;let ol=0;function ji(s,t){const e=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${e},${n},${i},${t})`}function Ki(s,t,e,n,i,o,r){s.save(),s.translate(t,e),Math.abs(i/n-1)>.01&&s.scale(1,i/n);const a=s.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,ji(o,r)),a.addColorStop(.25,ji(o,r*.55)),a.addColorStop(.55,ji(o,r*.15)),a.addColorStop(.85,ji(o,r*.03)),a.addColorStop(1,ji(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,n,0,6.2832),s.fill(),s.restore()}function rl(s,t,e,n,i,o,r,a){Ki(s,t,e,n,i,o,r),t-n<0&&Ki(s,t+a,e,n,i,o,r),t+n>a&&Ki(s,t-a,e,n,i,o,r)}function nw(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const u of r){rl(n,u.x*2048,u.y*1024,u.rx*2048,u.ry*1024,u.col,u.a,2048);for(let f=0;f<4;f++){const d=(u.x+(i()-.5)*u.rx)*2048,m=(u.y+(i()-.5)*u.ry)*1024,x=u.rx*2048*(.2+i()*.35),p=u.ry*1024*(.2+i()*.4);rl(n,d,m,x,p,u.col,u.a*(.4+i()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let u=0;u<30;u++){const f=i()*2048,d=i()*1024*.55,m=40+i()*180,x=25+i()*100;rl(n,f,d,m,x,a[Math.floor(i()*a.length)],.025+i()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let u=0;u<50;u++){const f=u/50,d=f*2048,m=(c+Math.sin(f*Math.PI)*.06+(i()-.5)*.02)*1024,x=2048*.05+i()*2048*.035,p=1024*.04*(.4+i()*.6);Ki(n,d,m,x,p,4478310,.025+i()*.015)}for(let u=0;u<25;u++){const f=.2+i()*.6,d=f*2048,m=(c+Math.sin(f*Math.PI)*.04)*1024;Ki(n,d,m,2048*.03+i()*2048*.02,1024*.02+i()*1024*.01,6719658,.015+i()*.012)}for(let u=0;u<10;u++){const f=.35+i()*.3,d=f*2048,m=(c+Math.sin(f*Math.PI)*.02)*1024;Ki(n,d,m,2048*.02,1024*.012,8943462,.01+i()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let u=0;u<12;u++){const f=.1+i()*.8,d=f*2048,m=(c+Math.sin(f*Math.PI)*.04+(i()-.5)*.02)*1024,x=20+i()*60,p=8+i()*20;Ki(n,d,m,x,p,132104,.15+i()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let u=0;u<5e3;u++){const f=i()*2048,d=i()*1024*.65,m=.3+i()*.7,x=.1+i()*.5;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${x})`,n.beginPath(),n.arc(f,d,m,0,6.28),n.fill()}for(let u=0;u<3e3;u++){const f=i(),d=f*2048,x=(c+Math.sin(f*Math.PI)*.06)*1024+(i()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const p=.2+i()*.6,g=.2+i()*.7;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${g})`,n.beginPath(),n.arc(d,x,p,0,6.28),n.fill()}for(let u=0;u<60;u++){const f=i()*2048,d=i()*1024*.58,m=1.2+i()*1.8,x=6+i()*14,p=i();let g;p<.45?g="255,255,255":p<.65?g="210,225,255":p<.8?g="255,230,200":p<.92?g="190,210,255":g="255,200,180";const T=n.createRadialGradient(f,d,0,f,d,x);T.addColorStop(0,`rgba(${g},0.5)`),T.addColorStop(.1,`rgba(${g},0.18)`),T.addColorStop(.35,`rgba(${g},0.04)`),T.addColorStop(1,`rgba(${g},0)`),n.fillStyle=T,n.beginPath(),n.arc(f,d,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${g},0.12)`,n.lineWidth=.5;const M=x*.8;n.beginPath(),n.moveTo(f-M,d),n.lineTo(f+M,d),n.moveTo(f,d-M),n.lineTo(f,d+M),n.stroke(),n.fillStyle=`rgba(${g},1)`,n.beginPath(),n.arc(f,d,m,0,6.28),n.fill()}for(let u=0;u<8;u++){const f=i()*2048,d=1024*.08+i()*1024*.42,m=50+i()*90;Ki(n,f,d,m,m*.7,3359846,.03);for(let x=0;x<100;x++){const p=i()*6.28,g=i()*i()*m,T=f+Math.cos(p)*g,M=d+Math.sin(p)*g*.65;if(T<0||T>2048||M<0||M>1024)continue;const _=.2+i()*.6;n.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,n.beginPath(),n.arc(T,M,_,0,6.28),n.fill()}}for(let u=0;u<15;u++){const f=r[Math.floor(i()*r.length)],d=(f.x+(i()-.5)*f.rx*.5)*2048,m=(f.y+(i()-.5)*f.ry*.5)*1024,x=3+i()*8,p=n.createRadialGradient(d,m,0,d,m,x*3);p.addColorStop(0,ji(f.col,.2)),p.addColorStop(.3,ji(f.col,.06)),p.addColorStop(1,ji(f.col,0)),n.fillStyle=p,n.beginPath(),n.arc(d,m,x*3,0,6.28),n.fill()}const h=new mu(e);return h.colorSpace=Mn,h}function iw(){const s=Ky(),t=nw(),e=new j(Ps,64,32,0,Math.PI*2,0,Math.PI*.55);ec=new Y({map:t,side:yn,fog:!1,transparent:!1});const n=new I(e,ec);Cr.add(n),sw(),ow(),ht.add(Cr),Jy(s)}function sw(){const s=new Float32Array(xs*3),t=new Float32Array(xs*3);Ua=new Float32Array(xs),Rh=new Float32Array(xs),Ch=new Float32Array(xs);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,i=Ps*.97;for(let a=0;a<xs;a++){const c=n()*Math.PI*2,l=n()*Math.PI*.48,h=i*Math.cos(c)*Math.sin(l),u=i*Math.cos(l),f=i*Math.sin(c)*Math.sin(l);s[a*3]=h,s[a*3+1]=u,s[a*3+2]=f;const d=e[Math.floor(n()*e.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],Ua[a]=2+n()*4,Rh[a]=n()*Math.PI*2,Ch[a]=.5+n()*2.5}const o=new be;o.setAttribute("position",new Ht(s,3)),o.setAttribute("color",new Ht(t,3)),yo=new Ht(Ua.slice(),1),yo.setUsage(Ae),o.setAttribute("size",yo);const r=new pu({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:he,depthWrite:!1});od=new ep(o,r),Cr.add(od)}function ow(){const s=new Y({color:16777215,transparent:!0,opacity:0,fog:!1,blending:he,depthWrite:!1});for(let t=0;t<ew;t++){const e=new I(new Mt(.15,0,12,4),s.clone());e.visible=!1,Cr.add(e),wo.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function rw(){let s=null;for(let a=0;a<wo.length;a++)if(!wo[a].active){s=wo[a];break}if(!s)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,i=Ps*.85;s.sx=i*Math.cos(e)*Math.sin(n),s.sy=i*Math.cos(n),s.sz=i*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;s.dx=Math.cos(o)*r,s.dy=-r*(.5+t()*.5),s.dz=Math.sin(o)*r,s.life=.5+t()*.8,s.maxLife=s.life,s.active=!0,s.mesh.visible=!0}function Cp(s,t){if(Cr.rotation.y=t*.003,yo){const e=yo.array;for(let n=0;n<xs;n++){const i=Ua[n],o=Math.sin(t*Ch[n]+Rh[n]);e[n]=i*(.65+o*.35)}yo.needsUpdate=!0}ol-=s,ol<=0&&(ol=4+Math.random()*12,rw());for(let e=0;e<wo.length;e++){const n=wo[e];if(!n.active)continue;if(n.life-=s,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const i=n.life/n.maxLife;n.sx+=n.dx*s,n.sy+=n.dy*s,n.sz+=n.dz*s,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=i*.7,n.mesh.scale.setScalar(.6+i*.4)}}function aw(s){if(ec){const t=Math.max(.15,s);ec.color.setRGB(t,t,t)}}const cw=6,va=64,Ph=[];let Es=null;const er=[new st(1734485),new st(2787447),new st(5601126),new st(6706568),new st(8930406),new st(3368533)];function lw(){Es=new re,Es.visible=!1;for(let s=0;s<cw;s++){const t=1.2+s*.2+Math.sin(s*1.7)*.15,e=Ps*t,n=.1+s*.012+Math.sin(s*2.3)*.02,i=Ps*n,o=new ge(e,i,va,3),r=o.attributes.position.array,a=4,c=(va+1)*a,l=Math.PI*(.45+s*.08+Math.sin(s*.9)*.05),h=-l/2,u=(.25+s*.04+Math.sin(s*1.3)*.02)*Math.PI,f=s*.18-.45;for(let p=0;p<c;p++){const g=Math.floor(p/a),T=p%a,M=g/va,_=h+M*l+f,E=(T/(a-1)-.5)*.05,b=u+E,S=Ps*.92;r[p*3]=Math.sin(_)*Math.sin(b)*S,r[p*3+1]=Math.cos(b)*S,r[p*3+2]=Math.cos(_)*Math.sin(b)*S}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(Ae),o.computeVertexNormals();const d=new Float32Array(c*3);o.setAttribute("color",new We(d,3)),o.attributes.color.setUsage(Ae);const m=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,blending:he,depthWrite:!1,fog:!1}),x=new I(o,m);Es.add(x),Ph.push({mesh:x,mat:m,geo:o,colorArr:d,posArr:r,vertCount:c,rows:a,segments:va,phase:s*1.7+Math.sin(s*.8)*.5,speed:.15+s*.05+Math.sin(s*2.1)*.03,colorShift:s*1.1,elevation:u,arcStart:h,arcSpan:l,azimuthOffset:f})}ht.add(Es)}let io=0;function hw(s,t,e,n,i){if(!Es)return;const o=i==="HEAVY_RAIN"||i==="LUMINOUS_STORM"||i==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>io?.2:.4;if(io+=(r-io)*a*s,io<.005){Es.visible=!1;return}Es.visible=!0;const c=Ps*.92;for(let l=0;l<Ph.length;l++){const h=Ph[l],u=h.colorArr,f=h.posArr,d=h.segments,m=h.rows;h.mat.opacity=io*(.5+l*.05);for(let x=0;x<=d;x++){const p=x/d,g=Math.sin(p*6+t*h.speed+h.phase)*.5+.5,T=Math.sin(p*3-t*h.speed*.4+h.phase*1.3)*.5+.5,M=Math.sin(p*1.5+t*.07)*.5+.5,_=Math.sin(p*1.2+t*.05+h.phase*.7)*.5+.5,A=(g*.3+T*.25+M*.2+_*.25)*io,E=(p*3+t*.08+h.colorShift)%er.length,b=Math.floor(E),S=E-b,y=er[b%er.length],v=er[(b+1)%er.length],R=(y.r+(v.r-y.r)*S)*A,U=(y.g+(v.g-y.g)*S)*A,D=(y.b+(v.b-y.b)*S)*A,z=c*.025,V=Math.sin(p*5+t*.3+h.phase)*z+Math.sin(p*2.5-t*.15+h.phase*.6)*z*.5;for(let G=0;G<m;G++){const Z=x*m+G,W=G/(m-1);let rt;W<.33?rt=W*1.2:W>.67?rt=(1-W)*1.5:rt=.7+Math.sin(W*Math.PI)*.3,u[Z*3]=R*rt,u[Z*3+1]=U*rt,u[Z*3+2]=D*rt,h.arcStart+p*h.arcSpan+h.azimuthOffset;const ft=(W-.5)*.05,wt=h.elevation+ft,Ft=V*(.3+W*.7);f[Z*3+1]=Math.cos(wt)*c+Ft}}h.geo.attributes.color.needsUpdate=!0,h.geo.attributes.position.needsUpdate=!0}}const J={pos:new N(0,xc,0),vel:new N,onGround:!0};let al=0,cl=0,Pp=0,ll=65,rd=65,nr=0,ad=!0,hl=0,Oo=0,Ih=null,Lh=null,Dh=null,cd=1;function uw(s,t,e){Ih=s,Lh=t,Dh=e}let Uh=[],Nh=[],zh=null;function fw(s,t){Uh=s,Nh=t}function dw(s){zh=s}function pw(s){const t=jy(),e=Ie.ShiftLeft||Ie.ShiftRight||Wo;J.vel.x=t.x,J.vel.z=t.z,J.vel.y-=hy*s,(Ie.Space||_c)&&J.onGround&&(J.vel.y=Ka,J.onGround=!1,Zy(!1),Lh&&Lh()),J.onGround||(hl=J.vel.y),J.pos.x+=J.vel.x*s,J.pos.y+=J.vel.y*s,J.pos.z+=J.vel.z*s;const n=Zt(J.pos.x,J.pos.z)+xc;if(J.pos.y<=n){if(J.pos.y=n,J.vel.y=0,!ad&&hl<-3){const h=Math.min(Math.abs(hl)/Ka,1);nr=h*.15,zh&&zh(J.pos.x,J.pos.z,Math.floor(3+h*5)),Dh&&Dh(h)}J.onGround=!0}ad=J.onGround,J.onGround?(J.vel.x*=Jf,J.vel.z*=Jf):(J.vel.x*=Qf,J.vel.z*=Qf);const i=.4;for(let h=0;h<Uh.length;h++){const u=Uh[h],f=J.pos.x-u.x,d=J.pos.z-u.z,m=f*f+d*d,x=.6+i;if(m<x*x&&m>.001){const p=1/Math.sqrt(m);J.pos.x=u.x+f*p*x,J.pos.z=u.z+d*p*x}}for(let h=0;h<Nh.length;h++){const u=Nh[h],f=J.pos.x-u.x,d=J.pos.z-u.z,m=f*f+d*d,x=u.colR+i;if(m<x*x&&m>.001){const p=1/Math.sqrt(m);J.pos.x=u.x+f*p*x,J.pos.z=u.z+d*p*x}}if(Math.sqrt(J.pos.x*J.pos.x+J.pos.z*J.pos.z)>ae){const h=Math.atan2(J.pos.z,J.pos.x);J.pos.x=Math.cos(h)*ae,J.pos.z=Math.sin(h)*ae}Au.position.copy(J.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&J.onGround;a?Oo=0:Oo+=s,cl+=((a?e?.06:.035:0)-cl)*s*6,a&&(al+=s*(e?12:8));const l=Math.sin(al)*cl;if(a&&Ih){const h=Math.sin(al)>=0?1:-1;cd>0&&h<0&&Ih(e),cd=h}rd=e&&a?78:65,ll+=(rd-ll)*s*4,fn.fov=ll,fn.updateProjectionMatrix(),nr*=Math.pow(.04,s),nr<.001&&(nr=0),Pp=l-nr}const ld=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function mw(s,t){const e=new re,n=6+w()*10,i=.2+w()*.3,o=new K({color:5914672,roughness:.75,emissive:1718304,emissiveIntensity:.18}),r=new I(new Mt(i*.4,i,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new K({color:2263125,emissive:F.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),c=2+Math.floor(w()*3);for(let T=0;T<c;T++){const M=T/c*6.28+w()*.5,_=n*.4+w()*n*.4,A=new I(new Mt(.008,.015,_,3),a);A.position.set(Math.cos(M)*i*.74,n*.15+_/2,Math.sin(M)*i*.74),e.add(A)}const l=new K({color:3812378,roughness:.85,emissive:1583636,emissiveIntensity:.12}),h=3+Math.floor(w()*3);for(let T=0;T<h;T++){const M=T/h*6.28+w()*.5,_=.8+w()*1.5,A=new I(new Mt(.02,i*.3,_,4),l);A.position.set(Math.cos(M)*i*.5,.08,Math.sin(M)*i*.5),A.rotation.z=M<3.14?1.2+w()*.3:-(1.2+w()*.3),A.rotation.y=M,e.add(A)}const u=3+Math.floor(w()*4);for(let T=0;T<u;T++){const M=n*(.4+w()*.5),_=w()*Math.PI*2,A=1.5+w()*3,E=new I(new Mt(.02,.06,A,4),o);E.position.set(Math.cos(_)*.3,M,Math.sin(_)*.3),E.rotation.z=(w()-.5)*1.2,E.rotation.y=_,E.castShadow=!0,e.add(E);const b=ld[Math.floor(w()*ld.length)],S=Math.cos(_)*(A*.5),y=M+w()*1.5,v=Math.sin(_)*(A*.5),R=1+w()*2,U=new K({color:b.core,emissive:b.core,emissiveIntensity:.7+w()*.5,transparent:!0,opacity:.55,roughness:.3}),D=new I(new Cs(R*.3,1),U);D.position.set(S,y,v),e.add(D);const z=new K({color:b.leaf,emissive:b.glow,emissiveIntensity:.25+w()*.25,transparent:!0,opacity:.55,roughness:.7}),V=new I(new Cs(R*.75,1),z);V.position.set(S+(w()-.5)*.4,y+(w()-.5)*.4,v+(w()-.5)*.4),V.scale.set(1+w()*.4,.65+w()*.5,1+w()*.4),V.castShadow=!0,V.receiveShadow=!0,e.add(V);const G=new K({color:b.glow,emissive:b.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),Z=new I(new Cs(R*1.2,1),G);if(Z.position.set(S,y,v),e.add(Z),w()<.35){const W=new K({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),rt=.3+w()*.8,ft=new I(new Mt(.008,.003,rt,3),W),wt=w()*A*.4;ft.position.set(Math.cos(_)*(.3+wt),M-rt/2-w()*.3,Math.sin(_)*(.3+wt)),e.add(ft)}}const f=new K({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),d=Math.floor(w()*3);for(let T=0;T<d;T++){const M=1+w()*n*.4,_=w()*6.28,A=new I(new j(.08+w()*.08,5,3),f);A.scale.set(1.5,.3,1),A.position.set(Math.cos(_)*i*.8,M,Math.sin(_)*i*.8),A.rotation.y=-_,e.add(A)}const m=new K({color:F.leaf,emissive:F.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),x=new I(new j(3+w()*2,8,6),m);x.position.y=n*.65,e.add(x);const p=new K({color:1183752,roughness:.95}),g=new I(new j(i*2.5,6,3),p);return g.scale.set(1,.12,1),g.position.y=.02,e.add(g),e.position.set(s,0,t),ht.add(e),e}function gw(s,t){const e=new re,n=.4+w()*1.2,i=w()*6.28,o=.8+w()*1.5,r=.5+w()*.8,a=new I(An.mushStem,new K({color:F.mushStem,roughness:.7,emissive:F.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new Se(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const h=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),u=new I(An.mushCap,h);u.scale.set(1,.5,1),u.position.y=.55,u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new K({color:6693546,emissive:F.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Dt});for(let v=0;v<8;v++){const R=v/8*6.28,U=new I(new ge(.35,.08),f);U.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),U.rotation.y=-R,U.rotation.x=.1,e.add(U)}for(let v=0;v<4;v++){const R=new Y({color:16777215,transparent:!0,opacity:.9}),U=new I(An.mushDot,R),D=w()*6.28,z=.15+w()*.25;U.position.set(Math.cos(D)*z,.6+w()*.1,Math.sin(D)*z),e.add(U)}const d=new K({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),m=2+Math.floor(w()*2);for(let v=0;v<m;v++){const R=new I(new j(.015+w()*.015,4,3),d),U=w()*6.28,D=.1+w()*.2;R.position.set(Math.cos(U)*D,.63+w()*.08,Math.sin(U)*D),e.add(R)}const x=new K({color:4465322,emissive:F.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let v=0;v<4;v++){const R=w()*6.28,U=.15+w()*.25,D=new I(new Mt(.004,.002,U,3),x);D.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),D.rotation.z=1.3*(R<3.14?1:-1),D.rotation.y=R,e.add(D)}const p=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),g=new I(new Se(.38,.01,4,12),p);g.position.y=.49,g.rotation.x=Math.PI/2,e.add(g);const T=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.08,roughness:.7}),M=new I(new j(.08,5,3),T);M.scale.set(1,.5,1),M.position.y=.04,e.add(M);const _=new K({color:1708040,roughness:.95});for(let v=0;v<3;v++){const R=w()*6.28,U=.1+w()*.12,D=new I(new j(.008+w()*.008,3,3),_);D.position.set(Math.cos(R)*U,.005,Math.sin(R)*U),e.add(D)}const A=new Y({color:F.mushGlow,transparent:!0,opacity:.2});for(let v=0;v<4;v++){const R=new I(new j(.006,3,3),A);R.position.set((w()-.5)*.2,.35+w()*.1,(w()-.5)*.2),e.add(R)}const E=new K({color:11167453,emissive:F.mushGlow,emissiveIntensity:r*.3,roughness:.5}),b=3+Math.floor(w()*3);for(let v=0;v<b;v++){const R=w()*6.28,U=w()*.25,D=new I(new j(.015+w()*.015,3,3),E);D.position.set(Math.cos(R)*U,.58+w()*.06,Math.sin(R)*U),e.add(D)}const S=new K({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Dt}),y=new I(new Ye(.18,8),S);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(s,0,t),ht.add(e),{group:e,capMat:h,phase:i,speed:o,base:r,x:s,z:t}}function xw(s,t){const e=new re,n=w()*6.28,i=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(An.crystal,i);o.position.y=.9,o.castShadow=!0,e.add(o);for(let M=0;M<3;M++){const _=new I(An.crystalSm,i),A=M/3*6.28+w()*.5;_.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),_.rotation.z=(w()-.5)*.8,_.castShadow=!0,e.add(_)}const r=new K({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(w()*3);for(let M=0;M<a;M++){const _=w()*6.28,A=.2+w()*.5,E=.08+w()*.12,b=new I(new j(E,4,3),r);b.scale.set(1+w()*.5,.5+w()*.4,1+w()*.5),b.position.set(Math.cos(_)*A,E*.3,Math.sin(_)*A),b.rotation.set(w(),w(),w()),e.add(b)}const c=new Y({color:F.crystalCore,transparent:!0,opacity:.5});for(let M=0;M<3;M++){const _=.4+w()*.8,A=new I(new Mt(.008,.008,_,3),c);A.position.set((w()-.5)*.15,.5+w()*.7,(w()-.5)*.15),A.rotation.set((w()-.5)*.8,(w()-.5)*.5,(w()-.5)*.8),e.add(A)}const l=new Y({color:11206638,transparent:!0,opacity:.6});for(let M=0;M<5;M++){const _=new I(new j(.012,3,3),l);_.position.set((w()-.5)*1,.3+w()*1.5,(w()-.5)*1),e.add(_)}const h=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let M=0;M<4;M++){const _=w()*6.28,A=.3+w()*.3,E=new I(new Mt(0,.015,.12+w()*.1,3),h);E.position.set(Math.cos(_)*A,.06+w()*.1,Math.sin(_)*A),E.rotation.z=(w()-.5)*.6,e.add(E)}const u=new K({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Dt});for(let M=0;M<2;M++){const _=w()*6.28,A=.2+w()*.3,E=new I(new Ye(.04+w()*.03,5),u);E.rotation.x=-Math.PI/2+w()*.4,E.position.set(Math.cos(_)*A,.05,Math.sin(_)*A),e.add(E)}const f=new Y({color:F.crystalCore,transparent:!0,opacity:.2});for(let M=0;M<2;M++){const _=new I(new Mt(.003,.003,.6+w()*.4,3),f);_.position.set((w()-.5)*.3,.7+w()*.5,(w()-.5)*.3),_.rotation.set((w()-.5)*1,w(),(w()-.5)*1),e.add(_)}const d=new K({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let M=0;M<4;M++){const _=new I(new j(.02+w()*.02,3,3),d);_.position.set((w()-.5)*.15,.4+w()*.6,(w()-.5)*.15),e.add(_)}const m=new Y({color:11206638,transparent:!0,opacity:.06}),x=new I(new Se(.35,.02,4,10),m);x.position.y=.6,x.rotation.x=Math.PI/2+w()*.3,e.add(x);const p=new Y({color:F.crystal,transparent:!0,opacity:.06,side:Dt}),g=new I(new Ye(.8,8),p);g.rotation.x=-Math.PI/2,g.position.y=.01,e.add(g),e.position.set(s,0,t),ht.add(e);const T=new Ho(F.crystal,.5,8);return T.position.set(s,1.2,t),ht.add(T),{group:e,mat:i,phase:n,x:s,z:t,light:T}}const qn={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0}};function vw(s,t,e,n,i,o){qn.uTime.value=s,qn.uWindAmp.value=t,qn.uWindLeanX.value=e,qn.uWindLeanZ.value=n,qn.uPlayerX.value=i,qn.uPlayerZ.value=o}function _w(s,t,e,n,i){const o=new be,r=[],a=[],c=[],l=n||20,h=new st(i?i[0]:663568),u=new st(i?i[1]:1388056),f=new st(i?i[2]:2777141),d=new st(i?i[3]:4517461),m=new st(i?i[4]:7864268),x=new st(i?i[5]:14548838),p=new st;for(let S=0;S<l;S++){const y=w()*6.28,v=w()*e,R=Math.cos(y)*v,U=Math.sin(y)*v,D=.25+w()*.65,z=.03+w()*.05,V=(w()-.5)*.2,G=(w()-.5)*.2,Z=(w()-.5)*.12,W=w()<.5?h:u,rt=w(),ft=rt<.4?d:rt<.7?m:x,wt=D*.35,Ft=D*.7,jt=V*.3,tt=V*.7,ct=G*.3,St=G*.7;r.push(R-z,.01,U),r.push(R+z,.01,U),r.push(R+jt-z*.9,wt,U+ct),c.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b),r.push(R+z,.01,U),r.push(R+jt+z*.9,wt,U+ct),r.push(R+jt-z*.9,wt,U+ct),c.push(0,.35,.35),a.push(W.r,W.g,W.b),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b);const dt=z*.65;r.push(R+jt-z*.9,wt,U+ct),r.push(R+jt+z*.9,wt,U+ct),r.push(R+tt-dt,Ft,U+St+Z),c.push(.35,.35,.7),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b),p.copy(f).lerp(ft,.3),a.push(p.r,p.g,p.b),r.push(R+jt+z*.9,wt,U+ct),r.push(R+tt+dt,Ft,U+St+Z),r.push(R+tt-dt,Ft,U+St+Z),c.push(.35,.7,.7),p.copy(W).lerp(f,.4),a.push(p.r,p.g,p.b),p.copy(f).lerp(ft,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),r.push(R+tt-dt,Ft,U+St+Z),r.push(R+tt+dt,Ft,U+St+Z),r.push(R+V+Z*2,D,U+G+Z*1.5),c.push(.7,.7,1),p.copy(f).lerp(ft,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),a.push(ft.r,ft.g,ft.b)}const g=new st(i?i[6]:1725736),T=new st(i?i[7]:3385941),M=Math.floor(l*.3);for(let S=0;S<M;S++){const y=w()*6.28,v=w()*e*.9,R=Math.cos(y)*v,U=Math.sin(y)*v,D=.02+w()*.03;r.push(R-D,.01,U),r.push(R+D,.01,U),r.push(R,.03+w()*.02,U+D),c.push(0,0,.05),a.push(g.r,g.g,g.b),a.push(g.r,g.g,g.b),a.push(T.r,T.g,T.b)}o.setAttribute("position",new Ht(r,3)),o.setAttribute("color",new Ht(a,3)),o.setAttribute("bladeHeight",new Ht(c,1)),o.computeVertexNormals();const _=new K({vertexColors:!0,roughness:.7,side:Dt,emissive:i?i[8]:4521830,emissiveIntensity:.08}),A=s,E=t;_.onBeforeCompile=S=>{S.uniforms.uTime=qn.uTime,S.uniforms.uWindAmp=qn.uWindAmp,S.uniforms.uWindLeanX=qn.uWindLeanX,S.uniforms.uWindLeanZ=qn.uWindLeanZ,S.uniforms.uPlayerX=qn.uPlayerX,S.uniforms.uPlayerZ=qn.uPlayerZ,S.uniforms.uPatchX={value:A},S.uniforms.uPatchZ={value:E},S.vertexShader=S.vertexShader.replace("#include <common>",`#include <common>
      attribute float bladeHeight;
      uniform float uTime;
      uniform float uWindAmp;
      uniform float uWindLeanX;
      uniform float uWindLeanZ;
      uniform float uPlayerX;
      uniform float uPlayerZ;
      uniform float uPatchX;
      uniform float uPatchZ;
      `),S.vertexShader=S.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
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
      `)};const b=new I(o,_);return b.position.set(s,0,t),ht.add(b),{mesh:b,geo:o,cx:s,cz:t}}function Mw(s,t){const e=new re,n=new K({color:F.fern,emissive:F.fernGlow,emissiveIntensity:.08,roughness:.7,side:Dt}),i=3+Math.floor(w()*2),o=.5+w()*.7,r=new K({color:1708552,roughness:.95}),a=new I(new j(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let g=0;g<3;g++){const T=w()*6.28,M=new I(new Mt(.003,.002,.08,3),r);M.position.set(Math.cos(T)*.06,.01,Math.sin(T)*.06),M.rotation.z=(T<3.14?1:-1)*1.2,M.rotation.y=T,e.add(M)}for(let g=0;g<i;g++){const T=g/i*6.28+w()*.3,M=new I(new Mt(.004,.006,.55,3),new K({color:1721632,roughness:.8}));M.position.set(Math.cos(T)*.15,.25,Math.sin(T)*.15),M.rotation.y=-T,M.rotation.x=-.6-w()*.4,e.add(M);const _=new I(new ge(.12,.6,1,3),n);_.position.set(Math.cos(T)*.15,.25,Math.sin(T)*.15),_.rotation.y=-T,_.rotation.x=-.6-w()*.4,e.add(_);for(let E=0;E<6;E++){const b=new I(new ge(.07,.06,1,1),n),S=.06+E*.08,y=E%2===0?1:-1;b.position.set(Math.cos(T)*(.15+.06),S,Math.sin(T)*(.15+.06*y)),b.rotation.y=-T,b.rotation.x=-.8,b.rotation.z=y*.5,e.add(b)}const A=new K({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const b=new I(new j(.008,3,3),A),S=.12+E*.12;b.position.set(Math.cos(T)*(.15+.02),S-.01,Math.sin(T)*(.15+.02)),e.add(b)}}const c=new K({color:F.fernGlow,emissive:F.fernGlow,emissiveIntensity:.3}),l=new I(new j(.04,4,3),c);l.position.y=.35,e.add(l);const h=new I(new Mt(.006,.003,.06,3),c);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const u=new K({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let g=0;g<3;g++){const T=w()*6.28,M=w()*.2,_=new I(new j(.006+w()*.005,3,3),u);_.position.set(Math.cos(T)*M,.12+w()*.2,Math.sin(T)*M),e.add(_)}const f=new K({color:3811856,roughness:.9,side:Dt,transparent:!0,opacity:.6}),d=new I(new ge(.1,.4,1,2),f),m=w()*6.28;d.position.set(Math.cos(m)*.12,.05,Math.sin(m)*.12),d.rotation.x=-1.3,d.rotation.y=m,e.add(d);const x=new Y({color:2768928,transparent:!0,opacity:.3});for(let g=0;g<4;g++){const T=new I(new Mt(.001,.001,.015,3),x);T.position.set((w()-.5)*.08,.08+w()*.15,(w()-.5)*.08),T.rotation.z=(w()-.5)*1.5,e.add(T)}const p=new K({color:1708552,roughness:.95});for(let g=0;g<3;g++){const T=new I(new j(.006,3,3),p);T.position.set((w()-.5)*.1,.005,(w()-.5)*.1),e.add(T)}return e.scale.setScalar(o),e.position.set(s,0,t),ht.add(e),{group:e,phase:w()*6.28}}function yw(s,t){const e=new re,n=.25+w()*.4,i=new K({color:F.flowerStem,roughness:.8}),o=new I(new Mt(.01,.015,n,4),i);o.position.y=n/2,e.add(o);for(let S=0;S<2;S++){const y=new I(new Yn(.004,.012,3),i);y.position.set(.012,n*.25+S*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new K({color:F.fern,roughness:.7,side:Dt}),a=new I(new ge(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new ge(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new K({color:1728560,roughness:.7,side:Dt});for(let S=0;S<5;S++){const y=S/5*6.28+.3,v=new I(new ge(.025,.02),l);v.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),v.rotation.x=-1.2,v.rotation.y=-y,e.add(v)}const h=new K({color:F.flower,emissive:F.flowerGlow,emissiveIntensity:.4+w()*.4,transparent:!0,opacity:.85,side:Dt});for(let S=0;S<6;S++){const y=S/6*6.28,v=new I(new ge(.05,.04),h);v.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),v.rotation.x=-.8,v.rotation.y=-y,e.add(v)}const u=new K({color:16777215,emissive:F.flowerGlow,emissiveIntensity:1.2}),f=new I(new j(.02,4,3),u);f.position.y=n+.02,e.add(f);const d=new Y({color:16777130,transparent:!0,opacity:.7}),m=new Y({color:16772676});for(let S=0;S<3;S++){const y=S/3*6.28+.5,v=new I(new Mt(.002,.002,.025,3),d);v.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(v);const R=new I(new j(.005,3,3),m);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const x=new Y({color:16777164,transparent:!0,opacity:.3});for(let S=0;S<2;S++){const y=new I(new j(.006,3,3),x);y.position.set((w()-.5)*.04,n+.06+w()*.04,(w()-.5)*.04),e.add(y)}const p=new K({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),g=new I(new j(.006,3,3),p);g.position.set(.005,n+.005,.005),e.add(g);const T=new Y({color:15662984}),M=new I(new Mt(.002,.002,.03,3),T);M.position.y=n+.035,e.add(M);const _=new I(new j(.005,3,3),T);_.position.y=n+.055,e.add(_);const A=new K({color:1725728,roughness:.7}),E=new I(new Mt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const b=new Y({color:16777215,transparent:!0,opacity:.35});for(let S=0;S<4;S++){const y=S/4*6.28+.3,v=new I(new j(.004,3,3),b);v.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(v)}return e.position.set(s,0,t),ht.add(e),{group:e,petalMat:h,phase:w()*6.28,baseH:n}}function ww(s,t){const e=new re,n=new K({color:F.reed,emissive:F.reedTip,emissiveIntensity:.05,roughness:.7}),i=new K({color:F.reedTip,emissive:F.reedTip,emissiveIntensity:.15}),o=new K({color:1709328,roughness:.95}),r=new I(new j(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(w()*4),c=new K({color:F.reed,roughness:.7,side:Dt});for(let d=0;d<a;d++){const m=.6+w()*1,x=(w()-.5)*.2,p=(w()-.5)*.2,g=new I(new Mt(.008,.015,m,4),n);g.position.set(x,m/2,p),e.add(g);const T=2+Math.floor(w()*2),M=new K({color:2771488,roughness:.7});for(let E=0;E<T;E++){const b=m*.2+E*m*.25,S=new I(new Se(.012,.004,4,6),M);S.position.set(x,b,p),S.rotation.x=Math.PI/2,e.add(S)}if(w()<.7){const E=.1+w()*.15,b=w()*6.28,S=new I(new ge(.02,E),c);S.position.set(x+Math.cos(b)*.02,m*.4,p+Math.sin(b)*.02),S.rotation.y=-b,S.rotation.x=-.5-w()*.4,e.add(S)}const _=new I(new j(.025,4,3),i);_.scale.set(.8,1.5,.8),_.position.set(x,m+.02,p),e.add(_);const A=new Y({color:F.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const b=E/3*6.28+w()*.5,S=new I(new Mt(.002,.001,.04,3),A);S.position.set(x+Math.cos(b)*.015,m+.05,p+Math.sin(b)*.015),S.rotation.z=(w()-.5)*.4,e.add(S)}}e.position.set(s,0,t),ht.add(e);const l=new K({color:4864536,roughness:.9,side:Dt,transparent:!0,opacity:.5});for(let d=0;d<2;d++){w()*6.28;const m=(w()-.5)*.15,x=new I(new ge(.025,.02),l);x.position.set(m,.2+d*.25,(w()-.5)*.1),x.rotation.set(w()*.5,w(),w()*.5),e.add(x)}const h=new Y({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const m=new I(new j(.005,3,3),h);m.position.set((w()-.5)*.15,.8+w()*.6,(w()-.5)*.15),e.add(m)}const u=new K({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new I(new Se(.1,.008,4,8),u);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:w()*6.28,swayAmp:.03+w()*.04}}let dn=null;const So=[],rn=new me,nc=new st,Ip=new st(F.dandSeed);function Sw(s){const t=new Y({color:16777215,transparent:!0,opacity:1});dn=new ns(An.dandSeed,t,s),dn.instanceMatrix.setUsage(Ae),dn.instanceColor=new vi(new Float32Array(s*3),3),dn.instanceColor.setUsage(Ae),rn.scale.setScalar(0),rn.updateMatrix();for(let e=0;e<s;e++)dn.setMatrixAt(e,rn.matrix),nc.copy(Ip),dn.setColorAt(e,nc),So.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});dn.count=s,dn.frustumCulled=!1,ht.add(dn)}function Lp(s,t,e){let n=null;for(let o=0;o<So.length;o++)if(!So[o].active){n=So[o];break}if(!n)return;n.x=s+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const i=Math.random()*6.28;n.vx=Math.cos(i)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(i)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let Dp=0,Up=0,Np=0;function bw(s,t,e){Dp=s,Up=t,Np=e}function Tw(s,t){let e=!1;for(let n=0;n<So.length;n++){const i=So[n];if(!i.active){rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),dn.setMatrixAt(n,rn.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),dn.setMatrixAt(n,rn.matrix);continue}i.drift+=(Math.random()-.5)*1.5*s,i.vx+=Math.sin(i.drift)*.3*s,i.vz+=Math.cos(i.drift)*.2*s,i.vx+=Dp*.5*s,i.vz+=Up*.5*s,i.vy+=(.15+Np*.1-i.vy)*s*.5,i.vx*=.998,i.vy*=.998,i.vz*=.998,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const r=i.life/i.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;rn.position.set(i.x,i.y,i.z),rn.scale.setScalar(a),rn.updateMatrix(),dn.setMatrixAt(n,rn.matrix),nc.copy(Ip).multiplyScalar(r),dn.setColorAt(n,nc),e=!0}dn.instanceMatrix.needsUpdate=!0,e&&(dn.instanceColor.needsUpdate=!0)}function Ew(s,t){const e=new re,n=.35+w()*.45,i=new K({color:2777128,roughness:.7,side:Dt}),o=3+Math.floor(w()*2);for(let M=0;M<o;M++){const _=M/o*6.28+w()*.3,A=new I(new ge(.08,.035),i);A.position.set(Math.cos(_)*.05,.02,Math.sin(_)*.05),A.rotation.x=-1.4,A.rotation.y=-_,e.add(A)}const r=new K({color:F.dandStem,roughness:.8}),a=new I(new Mt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new Y({color:14540236,transparent:!0,opacity:.3});for(let M=0;M<4;M++){const _=n*.2+M*n*.18,A=new I(new Mt(.002,.001,.02,3),c);A.position.set(.01,_,0),A.rotation.z=-.8,e.add(A)}const l=new K({color:F.fern,roughness:.7,side:Dt}),h=new I(new ge(.07,.03),l);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const u=new K({color:F.dandHead,emissive:F.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new I(new j(.07,6,5),u);f.position.y=n+.05,e.add(f);const d=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),m=new I(new j(.012,4,3),d);m.position.set(.04,n+.07,.03),e.add(m);const x=new Y({color:F.dandSeed,transparent:!0,opacity:.7});for(let M=0;M<8;M++){const _=M/8*6.28+w()*.2,A=new I(new Yn(.015,.05,3),x);A.position.set(Math.cos(_)*.06,n+.05+w()*.04,Math.sin(_)*.06),A.rotation.x=(w()-.5)*.6,A.rotation.z=(w()-.5)*.6,e.add(A);const E=new Y({color:16777215,transparent:!0,opacity:.3}),b=new I(new Mt(.001,.001,.03,3),E);b.position.set(Math.cos(_)*.08,n+.08,Math.sin(_)*.08),b.rotation.set((w()-.5)*.5,0,(w()-.5)*.5),e.add(b);const S=new Y({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const v=_+(y-.5)*.5,R=new I(new Mt(8e-4,8e-4,.025,3),S);R.position.set(Math.cos(v)*.075,n+.09,Math.sin(v)*.075),R.rotation.set((w()-.5)*.8,0,(w()-.5)*.8),e.add(R)}}const p=new K({color:3811856,roughness:.9});for(let M=0;M<4;M++){const _=M/4*6.28+w()*.5,A=new I(new j(.005,3,3),p);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(_)*.04,n+.04,Math.sin(_)*.04),e.add(A)}const g=new Y({color:1716240,transparent:!0,opacity:.15});for(let M=0;M<3;M++){const _=M/3*6.28,A=new I(new Mt(.001,.001,n*.7,3),g);A.position.set(Math.cos(_)*.01,n*.35,Math.sin(_)*.01),e.add(A)}const T=new Y({color:13426107,transparent:!0,opacity:.2});for(let M=0;M<5;M++){const _=n*.1+w()*n*.7,A=w()*6.28,E=new I(new Mt(8e-4,8e-4,.012,3),T);E.position.set(Math.cos(A)*.012,_,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(s,0,t),ht.add(e),{group:e,headMat:u,x:s,z:t,h:n,dispersed:!1,phase:w()*6.28,seedCount:8,regrowTimer:0}}function Aw(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)Lp(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function Rw(s,t){const e=new re,n=1+w()*.8,i=.25+w()*.15,o=new K({color:F.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new I(new Mt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new K({color:F.thornSpike,roughness:.6}),c=4+Math.floor(w()*3);for(let _=0;_<c;_++){const A=n*.15+_/c*n*.6,E=_/c*6.28+w()*1,b=new I(new Yn(.015,.08+w()*.04,3),a);b.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),b.rotation.z=(E<3.14?1.3:-1.3)+w()*.2,b.rotation.y=E,e.add(b)}const l=new K({color:F.thornOrb,emissive:F.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),h=new I(new j(i,12,10),l);h.position.y=n+i*.5,e.add(h);const u=new K({color:16777164,emissive:F.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new I(new j(i*.35,8,6),u);f.position.y=n+i*.5,e.add(f);const d=new Y({color:F.thornOrbGlow,transparent:!0,opacity:.06,blending:he,depthWrite:!1}),m=new I(new j(i*2,8,6),d);m.position.y=n+i*.5,e.add(m);const x=new K({color:F.thornSpike,emissive:F.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),p=6+Math.floor(w()*3);for(let _=0;_<p;_++){const A=_/p*6.28+w()*.3,E=(w()-.5)*1.2,b=.3+w()*.3,S=new I(new Yn(.018,b,4),x);S.position.set(Math.cos(A)*i*.8,n+i*.5+Math.sin(E)*i*.5,Math.sin(A)*i*.8),S.rotation.z=-E+(A<3.14?1.4:-1.4),S.rotation.y=A,e.add(S)}const g=new K({color:F.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Dt}),T=4+Math.floor(w()*2);for(let _=0;_<T;_++){const A=_/T*6.28+w()*.3,E=.2+w()*.15,b=new I(new ge(E,E*1.5),g);b.position.set(Math.cos(A)*(i+.05),n+i*.3-w()*.1,Math.sin(A)*(i+.05)),b.rotation.y=-A,b.rotation.x=-.4-w()*.3,e.add(b)}const M=new K({color:1718296,emissive:662026,emissiveIntensity:.05,side:Dt});for(let _=0;_<2;_++){const A=w()*6.28,E=new I(new ge(.15,.25),M);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(s,0,t),ht.add(e),{group:e,orbMat:l,hazeMat:d,phase:w()*6.28,x:s,z:t}}function Cw(s,t){const e=new re,n=2+Math.floor(w()*2),i=new K({color:1710128,roughness:.85,emissive:F.helixStem,emissiveIntensity:.1}),o=new I(new j(.18,8,6),i);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let l=0;l<n;l++){const h=1.5+w()*1,u=.15+w()*.15,f=1.5+w()*1.5,d=w()*6.28,m=[],x=16;for(let U=0;U<=x;U++){const D=U/x,z=d+D*f*6.28,V=u*(.3+D*.7);m.push(new N(Math.cos(z)*V,D*h,Math.sin(z)*V))}const p=new Ur(m),g=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.12,roughness:.7}),T=new I(new bn(p,20,.025+w()*.01,5,!1),g);e.add(T);const M=.1+w()*.08,A=w()<.5?new Mu(M,0):new _u(M,0),E=new K({color:F.helixPod,emissive:F.helixPodGlow,emissiveIntensity:.5+w()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),b=new I(A,E),S=p.getPoint(1);b.position.copy(S),b.rotation.set(w()*3,w()*3,w()*3),e.add(b),r.push(E);const y=new I(new j(M*2.5,6,4),new Y({color:F.helixPodGlow,transparent:!0,opacity:.05,blending:he,depthWrite:!1}));y.position.copy(S),e.add(y);const v=1+Math.floor(w()*2);for(let U=0;U<v;U++){const D=.3+w()*.5,z=p.getPoint(D),V=new K({color:F.helixRing,emissive:F.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),G=new I(new Se(.1+w()*.08,.008,6,12),V);G.position.copy(z),G.rotation.set(w()*3,w()*3,w()*3),e.add(G)}const R=2+Math.floor(w()*2);for(let U=0;U<R;U++){const D=.2+U/R*.6,z=p.getPoint(D),V=new K({color:F.helixNode,emissive:F.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),G=new I(new j(.025+w()*.015,5,4),V);G.position.copy(z),e.add(G)}}const a=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.06,roughness:.8}),c=2+Math.floor(w()*2);for(let l=0;l<c;l++){const h=l/c*6.28+w()*.5,u=.3+w()*.4,f=new I(new Mt(.006,.015,u,3),a);f.position.set(Math.cos(h)*.12,u*.3,Math.sin(h)*.12),f.rotation.z=(h<3.14?.8:-.8)+w()*.3,f.rotation.y=h,e.add(f)}return e.position.set(s,0,t),ht.add(e),{group:e,podMats:r,phase:w()*6.28}}function Pw(s,t){const e=new re,n=.25+w()*.1,i=new K({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const d=f/3*6.28+w()*.5,m=new I(new Mt(.01,.035,.25+w()*.15,4),i);m.position.set(Math.cos(d)*n*.6,.06,Math.sin(d)*n*.6),m.rotation.z=d<3.14?1:-1,m.rotation.y=d,e.add(m)}const o=new K({color:F.snapBody,emissive:F.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new I(new j(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new K({color:1730116,emissive:F.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),c=new I(new Se(n*.45,.02,6,12),a);c.position.y=n*1.7,c.rotation.x=Math.PI/2,e.add(c);const l=5+Math.floor(w()*3),h=[],u=[];for(let f=0;f<l;f++){const d=f/l*6.28+w()*.3,m=w()*6.28,x=3+Math.floor(w()*2),p=.2+w()*.1,g=[],T=new me;T.position.set(Math.cos(d)*n*.6,n*1.4,Math.sin(d)*n*.6),T.rotation.y=d,e.add(T);let M=T;for(let b=0;b<x;b++){const S=b/x,y=.02*(1-S*.6),v=new K({color:F.snapFrond,emissive:F.snapBodyGlow,emissiveIntensity:.08+S*.15,roughness:.6}),R=new I(new Mt(y*.7,y,p,4),v);R.position.y=b===0?0:p,R.geometry.translate(0,p/2,0),M.add(R),g.push(R),M=R}const _=new K({color:F.snapTip,emissive:F.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new I(new j(.025+w()*.015,5,4),_);A.position.y=p,M.add(A),u.push(_);const E=new I(new j(.06,4,3),new Y({color:F.snapTipGlow,transparent:!0,opacity:.04,blending:he,depthWrite:!1}));A.add(E),h.push({segments:g,baseAngle:d,phaseOffset:m,segLen:p})}return e.position.set(s,0,t),ht.add(e),{group:e,body:r,bodyMat:o,tipMats:u,fronds:h,phase:w()*6.28,x:s,z:t}}function Iw(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const c=o.fronds[a],l=1.2+a%3*.3;for(let h=0;h<c.segments.length;h++){const u=c.segments[h],f=.15+h*.12,d=Math.sin(e*l+c.phaseOffset+h*.5)*f,m=Math.cos(e*l*.7+c.phaseOffset+h*.3)*f*.6;u.rotation.z=d,u.rotation.x=m}}for(let a=0;a<o.tipMats.length;a++){const c=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+c*.4)*n}}}function Lw(s,t,e){const n=new re,i=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Dt}),o=new I(new j(.5,8,6,0,6.28,0,Math.PI/2),i);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Se(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new j(.2,6,4),new Y({color:F.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new Y({color:12312063,transparent:!0,opacity:.3});for(let T=-1;T<=1;T+=2){const M=new I(new j(.06,4,3),l);M.scale.set(.6,1.5,.6),M.position.set(T*.08,-.03,0),n.add(M)}const h=new Y({color:15663103,transparent:!0,opacity:.7});for(let T=0;T<5;T++){const M=w()*6.28,_=w()*.8,A=new I(new j(.02,3,3),h);A.position.set(Math.cos(M)*_*.35,.1-_*.15,Math.sin(M)*_*.35),n.add(A)}const u=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new Y({color:F.jellyGlow,transparent:!0,opacity:.6});for(let T=0;T<6;T++){const M=T/6*6.28,_=.4+w()*.6,A=new I(new Mt(.015,.008,_,3),u);A.position.set(Math.cos(M)*.25,-_/2-.05,Math.sin(M)*.25),n.add(A);const E=new I(new j(.012,3,3),f);E.position.set(Math.cos(M)*.25,-_-.06,Math.sin(M)*.25),n.add(E)}const d=new Y({color:F.jellyGlow,transparent:!0,opacity:.12});for(let T=0;T<8;T++){const M=T/8*6.28,_=new I(new Mt(.002,.002,.4,3),d);_.position.set(Math.cos(M)*.2,.05,Math.sin(M)*.2),_.rotation.z=Math.PI/2-.3,_.rotation.y=-M,n.add(_)}const m=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let T=0;T<10;T++){const M=T/10*6.28,_=new I(new j(.02,3,3),m);_.scale.set(1,.5,.8),_.position.set(Math.cos(M)*.46,-.04,Math.sin(M)*.46),n.add(_)}const x=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),p=new I(new Mt(.02,.01,.35,4),x);p.position.y=-.2,n.add(p);const g=new Y({color:14548991,transparent:!0,opacity:.4});for(let T=0;T<3;T++){const M=T/3*6.28,_=new I(new j(.008,3,3),g);_.position.set(Math.cos(M)*.25,-.55-w()*.3,Math.sin(M)*.25),n.add(_)}return n.position.set(s,t,e),ht.add(n),{group:n,bellMat:i,phase:w()*6.28,driftAng:w()*6.28,homeX:s,homeZ:e,floatY:t,wobble:.5+w()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function Dw(s,t){const e=new re,n=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.3,roughness:.8}),i=new I(new j(.3,8,6),n);i.position.y=.35,e.add(i);const o=new K({color:16773344,emissive:F.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new j(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new j(.22,7,5),n);a.position.y=.65,e.add(a);const c=[];for(let A=-1;A<=1;A+=2){const E=new I(new Yn(.06,.15,4),n);E.position.set(A*.13,.85,0),E.rotation.z=A*.3,e.add(E),c.push({mesh:E,side:A,baseRotZ:A*.3});const b=new I(new Yn(.03,.08,4),new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.2}));b.position.set(A*.13,.84,.01),b.rotation.z=A*.3,e.add(b),c.push({mesh:b,side:A,baseRotZ:A*.3})}const l=new Y({color:F.puffEye}),h=[];for(let A=-1;A<=1;A+=2){const E=new I(new j(.035,4,4),l);E.position.set(A*.09,.68,.18),e.add(E),h.push(E);const b=new Y({color:16777215}),S=new I(new j(.012,3,3),b);S.position.set(A*.09+A*.015,.695,.2),e.add(S),h.push(S)}const u=new Y({color:4469555}),f=new I(new j(.015,3,3),u);f.position.set(0,.63,.22),e.add(f);const d=new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const E=new I(new j(.04,4,3),d);E.position.set(A*.15,.61,.15),e.add(E)}const m=new Y({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let E=0;E<2;E++){const b=new I(new Mt(.002,.002,.06,3),m);b.position.set(A*.12,.62-E*.03,.2),b.rotation.z=A*.7+E*A*.2,b.rotation.x=-.1,e.add(b)}for(let A=-1;A<=1;A+=2){const E=new I(new j(.07,4,3),n);E.position.set(A*.12,.07,.05),E.scale.set(1,.5,1.3),e.add(E);const b=new K({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let S=0;S<3;S++){const y=S/3*6.28,v=new I(new j(.012,3,3),b);v.position.set(A*.12+Math.cos(y)*.03,.03,.05+Math.sin(y)*.03),e.add(v)}}const x=new K({color:16777215,emissive:F.puffGlow,emissiveIntensity:.4,roughness:.9}),p=new I(new j(.06,5,4),x);p.position.set(0,.38,-.28),e.add(p);const g=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const E=w()*6.28,b=w()*1.2,S=new I(new j(.01,3,3),g);S.position.set(Math.cos(E)*.28,.25+b*.2,Math.sin(E)*.28),e.add(S)}const T=new Y({color:F.puffBody});for(let A=-1;A<=1;A+=2){const E=new I(new Mt(.003,.003,.04,3),T);E.position.set(A*.09,.72,.17),E.rotation.z=A*.3,e.add(E)}const M=new Y({color:5583684,transparent:!0,opacity:.5}),_=new I(new Mt(.002,.002,.03,3),M);return _.position.set(0,.59,.22),_.rotation.z=Math.PI/2,e.add(_),e.position.set(s,0,t),ht.add(e),{group:e,ears:c,eyes:h,tail:p,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.8,hopTimer:0,hopPhase:w()*6.28,homeX:s,homeZ:t,state:"idle",idleTimer:w()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:s,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function Uw(s,t){const e=new re,n=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),i=new I(new j(.4,7,5),n);i.scale.set(1,.8,1.5),i.position.y=.9,e.add(i);const o=new K({color:13431039,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new j(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new re;a.position.set(0,1.15,.3);const c=new I(new Mt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new j(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const h=new I(new j(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const u=new Y({color:2245717}),f=new I(new j(.02,3,3),u);f.position.set(0,.17,.43),a.add(f);const d=new Y({color:F.deerEye});for(let v=-1;v<=1;v+=2){const R=new I(new j(.025,4,3),d);R.position.set(v*.09,.25,.28),a.add(R);const U=new I(new j(.008,3,3),new Y({color:16777215}));U.position.set(v*.085,.26,.29),a.add(U);const D=new Y({color:F.deerBody,transparent:!0,opacity:.5}),z=new I(new Mt(.002,.002,.03,3),D);z.position.set(v*.1,.27,.28),z.rotation.z=v*.6,a.add(z)}for(let v=-1;v<=1;v+=2){const R=new I(new Yn(.04,.14,4),n);R.position.set(v*.1,.37,.15),R.rotation.z=v*.4,a.add(R)}const m=new K({color:F.deerAntler,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let v=-1;v<=1;v+=2){const R=new I(new Mt(.015,.02,.25,3),m);R.position.set(v*.08,.42,.12),R.rotation.z=v*.5,a.add(R);const U=new I(new Mt(.01,.015,.15,3),m);U.position.set(v*.15,.55,.1),U.rotation.z=v*.8,a.add(U);const D=new I(new Mt(.008,.012,.1,3),m);D.position.set(v*.11,.5,.16),D.rotation.z=v*.3,D.rotation.x=-.5,a.add(D);const z=new I(new j(.012,3,3),new Y({color:F.deerGlow,transparent:!0,opacity:.8}));z.position.set(v*.18,.61,.09),a.add(z)}const x=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),p=new I(new Mt(.01,.02,.1,3),x);p.position.set(0,.11,.28),p.rotation.x=.3,a.add(p);const g=new Y({color:1122850});for(let v=-1;v<=1;v+=2){const R=new I(new j(.006,3,3),g);R.position.set(v*.02,.16,.42),a.add(R)}e.add(a);const T=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],M=new K({color:6715272,emissive:F.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),_=[];for(let v=0;v<4;v++){const R=T[v],U=new re;U.position.set(R.x,.65,R.z);const D=new I(new Mt(.025,.035,.35,4),n);D.position.y=-.175,U.add(D);const z=new re;z.position.set(0,-.35,0);const V=new I(new Mt(.02,.03,.3,4),n);V.position.y=-.15,z.add(V);const G=new I(new Mt(.04,.032,.04,4),M);G.position.y=-.3,z.add(G);const Z=new K({color:14544639,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new j(.025,3,3),Z);W.scale.set(1.3,.5,1.3),W.position.y=-.25,z.add(W),U.add(z),e.add(U),_.push({upper:U,lower:z,isFront:v<2,side:R.x<0?-1:1})}const A=new re;A.position.set(0,1.1,-.55);const E=new I(new Yn(.05,.15,4),new K({color:16777215,emissive:F.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const b=new Y({color:13434862,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const R=new I(new j(.02,3,3),b);R.position.set((w()-.5)*.25,.8+w()*.3,(w()-.5)*.4),e.add(R)}const S=new Y({color:F.deerBody,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const R=new I(new Mt(.002,.002,.2,3),S);R.position.set(.3,.85-v*.06,0),R.rotation.z=Math.PI/2+.3,e.add(R)}const y=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let v=0;v<3;v++){const R=new I(new j(.008,3,3),y);R.position.set((w()-.5)*.3,.9+w()*.3,(w()-.5)*.35),e.add(R)}return e.position.set(s,0,t),ht.add(e),{group:e,mat:n,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.4,walkTimer:0,legCycle:0,homeX:s,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:_,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:s,_lastTZ:t}}function Nw(s,t,e){const n=new re,i=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new Mt(.04,.05,.3,5),i);o.rotation.x=Math.PI/2,n.add(o);const r=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.5,roughness:.6});for(let p=0;p<3;p++){const g=new I(new Se(.045,.006,4,8),r);g.position.z=-.05+p*.06,g.rotation.x=0,n.add(g)}const a=new I(new j(.05,5,4),i);a.position.z=.18,n.add(a);const c=new K({color:1122867,roughness:.2,metalness:.4});for(let p=-1;p<=1;p+=2){const g=new I(new j(.018,4,3),c);g.position.set(p*.03,.01,.21),n.add(g)}for(let p=-1;p<=1;p+=2){const g=new I(new Mt(.005,.005,.15,3),i);g.position.set(p*.03,.03,.22),g.rotation.x=-.6,g.rotation.z=p*.4,n.add(g);const T=new Y({color:F.mothGlow,transparent:!0,opacity:.7}),M=new I(new j(.015,3,3),T);M.scale.set(2,.5,1),M.position.set(p*.05,.12,.28),n.add(M)}const l=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Dt,roughness:.4});n._wingPivots=[];for(let p=-1;p<=1;p+=2){const g=new re;g.position.set(p*.04,0,.02);const T=new I(new j(.2,6,4),l);T.scale.set(1.8,.08,1.2),T.position.set(p*.18,0,.02),g.add(T);const M=new I(new j(.12,5,3),l);M.scale.set(1.5,.06,1),M.position.set(p*.12,0,-.1),g.add(M);const _=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Dt}),A=new I(new ge(.03,.12),_);A.position.set(p*.1,0,-.18),A.rotation.y=p*.2,g.add(A);const E=new Y({color:F.mothSpot,transparent:!0,opacity:.9}),b=new I(new j(.03,4,3),E);b.position.set(p*.2,.02,.03),g.add(b);const S=new I(new j(.018,3,3),E);S.position.set(p*.1,.02,-.08),g.add(S);const y=new Y({color:F.mothGlow,transparent:!0,opacity:.25});for(let v=0;v<2;v++){const R=new I(new Mt(.002,.002,.2,3),y);R.position.set(p*.15,.01,-.02+v*.06),R.rotation.z=Math.PI/2+p*(.15+v*.15),g.add(R)}n.add(g),n._wingPivots.push({pivot:g,side:p})}const h=new Y({color:F.mothGlow,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const g=new I(new j(.008,3,3),h);g.position.set((w()-.5)*.04,0,-.15-p*.05),n.add(g)}const u=new Y({color:4473907,transparent:!0,opacity:.5}),f=new I(new Se(.015,.003,4,8,Math.PI*1.5),u);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const d=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.4,roughness:1});for(let p=0;p<5;p++){const g=w()*6.28,T=new I(new j(.008,3,3),d);T.position.set(Math.cos(g)*.04,Math.sin(g)*.04,w()*.15-.05),n.add(T)}const m=new Y({color:F.mothBody,transparent:!0,opacity:.4});for(let p=-1;p<=1;p+=2)for(let g=0;g<3;g++){const T=new I(new Mt(.002,.002,.06,3),m);T.position.set(p*.04,-.03,-.05+g*.06),T.rotation.z=p*.8,T.rotation.x=-.3,n.add(T)}const x=new Y({color:F.mothGlow,transparent:!0,opacity:.35});for(let p=-1;p<=1;p+=2)for(let g=0;g<5;g++){const T=g/5*Math.PI-Math.PI/2,M=new I(new j(.006,3,3),x);M.position.set(p*(.3+Math.cos(T)*.05),Math.sin(T)*.02,.02+g*.04),n.add(M)}return n.position.set(s,t,e),ht.add(n),{group:n,wingMat:l,phase:w()*6.28,orbitAng:w()*6.28,orbitR:2+w()*4,centerX:s,centerZ:e,floatY:t,flapSpeed:6+w()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function zw(s,t,e){const n=new re,i=new Y({color:F.wispCore}),o=new I(new j(.08,6,4),i);n.add(o);const r=new Y({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new Cs(.06,0),r);n.add(a);const c=new Y({color:F.wispGlow,transparent:!0,opacity:.5}),l=new I(new j(.18,6,4),c);n.add(l);const h=new Y({color:F.wispGlow,transparent:!0,opacity:.25}),u=new I(new Se(.22,.008,4,12),h);u.rotation.x=Math.PI/2,n.add(u);const f=new Y({color:F.wispTrail,transparent:!0,opacity:.15}),d=new I(new j(.35,5,4),f);n.add(d);const m=new Y({color:16777215,transparent:!0,opacity:.8}),x=new I(new j(.02,3,3),m);x.position.set(.15,0,0),n.add(x);const p=[];for(let b=0;b<3;b++){const S=new Y({color:F.wispCore,transparent:!0,opacity:.35}),y=new I(new j(.01,3,3),S);y.position.set((w()-.5)*.1,-.1-b*.08,(w()-.5)*.1),n.add(y),p.push(y)}const g=new Y({color:F.wispGlow,transparent:!0,opacity:.18}),T=[];for(let b=0;b<3;b++){const S=b/3*6.28+w()*.5,y=.15+w()*.1,v=new I(new Mt(.003,.001,y,3),g);v.position.set(Math.cos(S)*.1,w()*.08,Math.sin(S)*.1),v.rotation.z=Math.PI/3*(S<3.14?1:-1),v.rotation.y=S,n.add(v),T.push({mesh:v,baseAng:S})}const M=new Y({color:F.wispGlow,transparent:!0,opacity:.12}),_=new I(new Se(.26,.005,4,10),M);_.rotation.x=1.2,_.rotation.z=.8,n.add(_);const A=new Y({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<4;b++){const S=w()*6.28,y=w()*.8,v=new I(new j(.006,3,3),A);v.position.set(Math.cos(S)*.06,Math.sin(y)*.06,Math.sin(S)*.06),n.add(v)}const E=new Y({color:F.wispCore,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const S=new I(new j(.004,3,3),E);S.position.set(.03+w()*.04,-.05-b*.04,w()*.04),n.add(S)}return n.scale.setScalar(.5),n.position.set(s,t,e),ht.add(n),{group:n,glowMat:c,hazeMat:f,embers:p,tendrils:T,plasmaMat:g,facet:a,halo:u,halo2:_,phase:w()*6.28,targetX:s,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function Fw(s,t){const e=new re,n=yh,i=8+Math.floor(w()*5),o=new K({color:F.fairyMush,emissive:F.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new K({color:F.mushStem,roughness:.7,emissive:F.fairyGlow,emissiveIntensity:.05});for(let A=0;A<i;A++){const E=A/i*6.28+w()*.15,b=n+w()*.3-.15,S=.15+w()*.2,y=new I(An.mushStem,r);y.scale.setScalar(S),y.position.set(Math.cos(E)*b,S*.3,Math.sin(E)*b),e.add(y);const v=new I(An.mushCap,o);v.scale.set(S,S*.4,S),v.position.set(Math.cos(E)*b,S*.55,Math.sin(E)*b),e.add(v);const R=new Y({color:16777215,transparent:!0,opacity:.7}),U=new I(new j(S*.08,3,3),R);U.position.set(Math.cos(E)*b,S*.6,Math.sin(E)*b),e.add(U)}const a=new K({color:8934792,emissive:F.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=w()*6.28,b=n+w()*.6-.3,S=.06+w()*.06,y=new I(An.mushCap,a);y.scale.set(S,S*.5,S),y.position.set(Math.cos(E)*b,S*.35,Math.sin(E)*b),e.add(y)}const c=new K({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=w()*6.28,b=w()*n*.8,S=new I(new j(.08+w()*.08,4,3),c);S.scale.set(1.5,.2,1.5),S.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(S)}const l=new K({color:4478310,emissive:F.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new I(new j(.12,5,3),l);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const u=new Y({color:F.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let A=0;A<8;A++){const E=new I(new j(.012,3,3),u),b=(w()-.5)*n*.8,S=(w()-.5)*n*.8;E.position.set(b,.05+w()*.3,S),e.add(E),f.push({mesh:E,baseX:b,baseZ:S,drift:w()*6.28,speed:.2+w()*.3})}const d=new Y({color:F.fairyRing,transparent:!0,opacity:0,side:Dt}),m=new I(new zo(.3,n-.3,16),d);m.rotation.x=-Math.PI/2,m.position.y=.02,e.add(m);const x=new Y({color:F.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=w()*6.28,b=E+.5+w()*1.5,S=n*.6+w()*n*.4,y=new I(new Mt(.002,.002,S,3),x);y.position.set(Math.cos((E+b)/2)*n*.4,.005,Math.sin((E+b)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const p=new K({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=w()*6.28,b=w()*n*.7,S=new I(new j(.03,4,3),p);S.scale.set(1.3,.3,1.3),S.position.set(Math.cos(E)*b,.008,Math.sin(E)*b),e.add(S)}const g=new K({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new I(new Ye(.02+w()*.02,4),g);E.position.set((w()-.5)*.08,.06,(w()-.5)*.06),E.rotation.x=-Math.PI/2+w()*.4,e.add(E)}const T=[];for(let A=0;A<5;A++){const E=w()*6.28,b=w()*n*.9,S=new Y({color:8978346,transparent:!0,opacity:.25}),y=new I(new j(.005,3,3),S);y.position.set(Math.cos(E)*b,.01,Math.sin(E)*b),e.add(y),T.push(y)}const M=new Y({color:657926,transparent:!0,opacity:.15,side:Dt}),_=new I(new zo(n*.5,n*.85,12),M);return _.rotation.x=-Math.PI/2,_.position.y=.008,e.add(_),e.position.set(s,0,t),ht.add(e),{group:e,mushMat:o,discMat:d,sporeMat:u,spores:f,glowWorms:T,x:s,z:t,ringR:n,phase:w()*6.28,glowIntensity:0,active:!1}}function Ow(s,t,e){const n=new re,i=new K({color:F.bubbleIris,emissive:F.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(An.bubble,i);n.add(o);const r=new Y({color:15650047,transparent:!0,opacity:.1}),a=new I(new Se(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=w()*3,n.add(a);const c=new I(new Se(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new Y({color:F.bubbleShine,transparent:!0,opacity:.5}),h=new I(new j(.04,4,3),l);h.position.set(.05,.07,.08),n.add(h);const u=new Y({color:15658751,transparent:!0,opacity:.2}),f=new I(new j(.025,3,3),u);f.position.set(-.06,-.04,-.06),n.add(f);const d=new Y({color:16755438,transparent:!0,opacity:.12}),m=new I(new j(.06,4,3),d);m.position.set(.02,-.02,.01),n.add(m);const x=new Y({color:16772863,transparent:!0,opacity:.08}),p=new I(new j(.12,5,4),x);n.add(p);const g=[16764125,13426175,14548940];for(let S=0;S<3;S++){const y=new Y({color:g[S],transparent:!0,opacity:.06}),v=new I(new Se(.14-S*.02,.002,4,8),y);v.position.y=-.04+S*.04,v.rotation.x=Math.PI/2,n.add(v)}const T=new Y({color:16777215,transparent:!0,opacity:.6});for(let S=0;S<3;S++){const y=w()*6.28,v=w()*Math.PI-Math.PI/2,R=new I(new j(.003,3,3),T);R.position.set(Math.cos(y)*Math.cos(v)*.14,Math.sin(v)*.14,Math.sin(y)*Math.cos(v)*.14),n.add(R)}const M=new Y({color:11189196,transparent:!0,opacity:.1}),_=new I(new j(.015,3,3),M);_.position.set((w()-.5)*.04,(w()-.5)*.04,(w()-.5)*.04),n.add(_);const A=new Y({color:F.bubbleIris,transparent:!0,opacity:.15}),E=new I(new j(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const b=.6+w()*.8;return n.scale.setScalar(b),n.position.set(s,t,e),ht.add(n),{group:n,shellMat:i,phase:w()*6.28,driftAng:w()*6.28,driftSpeed:.3+w()*.5,floatY:t,homeX:s,homeZ:e,bobAmp:.3+w()*.4,popped:!1,popTimer:0,sc:b}}function Bw(s,t){const e=new re,n=1.5+w()*1,i=new K({color:329746,roughness:.9}),o=new I(new Ye(n*.85,10),i);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new K({color:F.pondWater,emissive:F.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new Ye(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new K({color:3816002,roughness:.85}),l=5+Math.floor(w()*4);for(let D=0;D<l;D++){const z=D/l*6.28+w()*.3,V=n+w()*.2-.1,G=.06+w()*.08,Z=new I(new j(G,4,3),c);Z.scale.set(1+w()*.5,.4+w()*.3,1+w()*.5),Z.position.set(Math.cos(z)*V,G*.2,Math.sin(z)*V),Z.rotation.set(w(),w(),w()),e.add(Z)}const h=new K({color:1725728,roughness:.7,side:Dt});for(let D=0;D<3;D++){const z=w()*6.28,V=n*.85+w()*.2;for(let G=0;G<3;G++){const Z=new I(new ge(.015,.15+w()*.1),h);Z.position.set(Math.cos(z)*V+(w()-.5)*.05,.08,Math.sin(z)*V+(w()-.5)*.05),Z.rotation.y=w()*3,Z.rotation.x=-.2,e.add(Z)}}const u=new Y({color:11197934,transparent:!0,opacity:.08}),f=[];for(let D=0;D<3;D++){const z=new I(new Se(1,.004,4,20),u.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),f.push({mesh:z,phase:D/3})}const d=new K({color:F.lilyPad,roughness:.6,side:Dt}),m=4+Math.floor(w()*2),x=[];for(let D=0;D<m;D++){const z=w()*6.28,V=w()*n*.6,G=.15+w()*.15,Z=new I(new Ye(G,8),d);Z.rotation.x=-Math.PI/2,Z.position.set(Math.cos(z)*V,.05,Math.sin(z)*V),e.add(Z);const W=new Y({color:1724448,transparent:!0,opacity:.3}),rt=new I(new Mt(.002,.002,G*1.5,3),W);rt.position.set(Math.cos(z)*V,.052,Math.sin(z)*V),rt.rotation.x=Math.PI/2,rt.rotation.z=w()*3,e.add(rt),x.push({mesh:Z,phase:w()*6.28})}const p=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Dt}),g=.08;for(let D=0;D<6;D++){const z=D/6*6.28,V=new I(new ge(.06,.05),p);V.position.set(x[0].mesh.position.x+Math.cos(z)*.05,g,x[0].mesh.position.z+Math.sin(z)*.05),V.rotation.x=-1,V.rotation.y=-z,e.add(V)}const T=new K({color:16777130,emissive:F.lilyGlow,emissiveIntensity:.8}),M=new I(new j(.025,4,3),T);if(M.position.set(x[0].mesh.position.x,g+.02,x[0].mesh.position.z),e.add(M),x.length>2){const D=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new j(.03,5,4),D);z.scale.set(.8,1.2,.8),z.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(z)}const _=new K({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const z=w()*6.28,V=w()*n*.7,G=new I(new j(.02+w()*.025,4,3),_);G.scale.set(1+w()*.5,.4,1+w()*.5),G.position.set(Math.cos(z)*V,.015,Math.sin(z)*V),e.add(G)}const A=new Y({color:2761752,transparent:!0,opacity:.12,side:Dt});for(let D=0;D<3;D++){const z=w()*6.28,V=w()*n*.5,G=new I(new Ye(.08+w()*.06,5),A);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(z)*V,.012,Math.sin(z)*V),e.add(G)}const E=new K({color:1122837,roughness:.7,transparent:!0,opacity:.4}),b=[];for(let D=0;D<2;D++){const z=w()*6.28,V=w()*n*.4,G=new I(new j(.012,4,3),E);G.scale.set(.8,.5,1.3),G.position.set(Math.cos(z)*V,.04,Math.sin(z)*V),e.add(G);const Z=new I(new Mt(.002,.001,.025,3),E);Z.position.set(Math.cos(z)*V-Math.cos(z)*.02,.04,Math.sin(z)*V-Math.sin(z)*.02),Z.rotation.z=Math.PI/2,Z.rotation.y=z,e.add(Z),b.push({body:G,tail:Z,ang:z,orbR:.15+w()*n*.35,speed:.3+w()*.4})}const S=new Y({color:2250016,transparent:!0,opacity:.1,side:Dt});for(let D=0;D<3;D++){const z=w()*6.28,V=n*.7+w()*n*.25,G=new I(new Ye(.06+w()*.04,5),S);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(z)*V,.032,Math.sin(z)*V),e.add(G)}const y=new Y({color:13426158,transparent:!0,opacity:.06}),v=new I(new Se(n-.05,.01,4,16),y);v.rotation.x=Math.PI/2,v.position.y=.035,e.add(v);const R=new K({color:4861976,roughness:.8,side:Dt,transparent:!0,opacity:.6}),U=new I(new Ye(.03,5),R);return U.rotation.x=-Math.PI/2,U.position.set((w()-.5)*n*.5,.04,(w()-.5)*n*.5),e.add(U),e.position.set(s,0,t),ht.add(e),{group:e,waterMat:r,flMat:p,pads:x,ripples:f,tadpoles:b,x:s,z:t,phase:w()*6.28,pondR:n}}function kw(s,t){const e=new re,n=new Y({color:F.orbGold}),i=new I(new j(.2,10,8),n);e.add(i);const o=new Y({color:16777215}),r=new I(new j(.06,6,4),o);e.add(r);const a=new Y({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new Cs(.15,0),a);e.add(c);const l=new Y({color:F.orbGlow,transparent:!0,opacity:.5}),h=new I(new j(.35,8,6),l);e.add(h);const u=new Y({color:F.orbGlow,transparent:!0,opacity:.3});for(let b=0;b<8;b++){const S=b/8*6.28,y=new I(new Yn(.02,.25,3),u);y.position.set(Math.cos(S)*.3,Math.sin(S*2)*.05,Math.sin(S)*.3),y.rotation.z=-S+Math.PI/2,y.rotation.y=S,e.add(y)}const f=new Y({color:F.orbInner,transparent:!0,opacity:.15}),d=new I(new j(.6,8,5),f);e.add(d);for(let b=0;b<6;b++){const S=new I(new j(.03,4,3),new Y({color:16777215})),y=b/6*6.28;S.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(S)}const m=new Y({color:F.orbGold,transparent:!0,opacity:.7});for(let b=0;b<4;b++){const S=b/4*6.28+.4,y=new I(new j(.015,3,3),m);y.position.set(Math.cos(S)*.5,0,Math.sin(S)*.5),e.add(y)}const x=new Y({color:16768426,transparent:!0,opacity:.12});for(let b=0;b<3;b++){const S=new I(new Se(.28,.003,4,12),x);S.rotation.set(b*1.05,b*.7,0),e.add(S)}const p=new Y({color:F.orbGlow,transparent:!0,opacity:.08}),g=new I(new Se(.4,.004,4,16),p);g.rotation.x=Math.PI/2,e.add(g);const T=new Y({color:16772812,transparent:!0,opacity:.15}),M=new I(new Se(.25,.012,4,10),T);M.rotation.x=Math.PI/2,e.add(M);const _=new Y({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<6;b++){const S=w()*6.28,y=w()*Math.PI-Math.PI/2,v=new I(new j(.008,3,3),_);v.position.set(Math.cos(S)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(S)*Math.cos(y)*.2),e.add(v)}const A=new Y({color:F.orbGlow,transparent:!0,opacity:.1,side:Dt}),E=new I(new Ye(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(s,1,t),ht.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:f,x:s,z:t,found:!1,flyUp:!1,flyY:1,phase:w()*6.28,laserLine:null,laserMat:null}}function Gw(s,t){const e=new re,n=new K({color:F.rockBase,roughness:.85,metalness:.05}),i=new K({color:F.rockLight,roughness:.8,metalness:.05}),o=new K({color:F.rockMoss,emissive:F.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+w()*.5,a=new I(new j(r,8,6),w()<.6?n:i),c=.4+w()*.4;a.scale.set(1+w()*.6,c,1+w()*.6),a.position.y=r*c*.35,a.rotation.set(w()*.5,w()*3,w()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(w()*3);for(let E=0;E<l;E++){const b=w()*6.28,S=r*.6+w()*r*.5,y=r*.3+w()*r*.4,v=new I(new j(y,5,4),w()<.5?n:i),R=.3+w()*.4;v.scale.set(1+w()*.5,R,1+w()*.5),v.position.set(Math.cos(b)*S,y*R*.3,Math.sin(b)*S),v.rotation.set(w()*.8,w()*3,w()*.5),e.add(v)}const h=2+Math.floor(w()*3);for(let E=0;E<h;E++){const b=w()*6.28,S=w()*r*.6,y=r*.15+w()*r*.2,v=new I(new j(y,4,3),o);v.scale.set(1.5,.2,1.5),v.position.set(Math.cos(b)*S,r*.35+w()*.05,Math.sin(b)*S),e.add(v)}const u=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const b=new K({color:u[Math.floor(w()*u.length)],roughness:.9,transparent:!0,opacity:.5}),S=w()*6.28,y=new I(new j(r*.06+w()*r*.08,3,3),b);y.scale.set(2,.15,2),y.position.set(Math.cos(S)*r*.5,r*.25+w()*.1,Math.sin(S)*r*.5),e.add(y)}const f=new Y({color:1381656,transparent:!0,opacity:.35}),d=2+Math.floor(w()*3);for(let E=0;E<d;E++){const b=w()*6.28,S=r*.3+w()*r*.4,y=new I(new Mt(.003,.001,S,3),f),v=r*.3+w()*r*.2;y.position.set(Math.cos(b)*v,r*.2+w()*r*.15,Math.sin(b)*v),y.rotation.set(w()*.5,b,Math.PI/2+w()*.4),e.add(y)}const m=new Y({color:660752,transparent:!0,opacity:.2,side:Dt}),x=1+Math.floor(w()*2);for(let E=0;E<x;E++){const b=w()*6.28,S=r*.3+w()*r*.3,y=new I(new ge(.02+w()*.015,S),m);y.position.set(Math.cos(b)*r*.45,r*.15,Math.sin(b)*r*.45),y.rotation.y=-b,e.add(y)}const p=[],g=new Y({color:8965375,transparent:!0,opacity:.4});if(w()<.5){const E=2+Math.floor(w()*3);for(let b=0;b<E;b++){const S=w()*6.28,y=r*.25+w()*r*.25,v=new I(new j(.006,3,3),g);v.position.set(Math.cos(S)*y,r*.15+w()*r*.2,Math.sin(S)*y),e.add(v),p.push(v)}}const T=new Y({color:657926,transparent:!0,opacity:.12,side:Dt}),M=new I(new zo(r*.5,r*1,8),T);M.rotation.x=-Math.PI/2,M.position.y=.005,e.add(M);const _=new K({color:3816e3,roughness:.9}),A=4+Math.floor(w()*3);for(let E=0;E<A;E++){const b=w()*6.28,S=r*.5+w()*r*.6,y=.03+w()*.05,v=new I(new j(y,3,3),_);v.scale.set(1+w()*.5,.4,1+w()*.5),v.position.set(Math.cos(b)*S,y*.15,Math.sin(b)*S),e.add(v)}if(w()<.6){const E=new K({color:3385941,emissive:F.grassTip,emissiveIntensity:.05,roughness:.7,side:Dt});for(let b=0;b<3;b++){const S=w()*6.28,y=new I(new ge(.015,.08+w()*.06),E);y.position.set(Math.cos(S)*r*.3,r*.3,Math.sin(S)*r*.3),y.rotation.y=w()*3,y.rotation.x=-.2-w()*.3,e.add(y)}}return e.position.set(s,0,t),ht.add(e),{group:e,x:s,z:t,colR:r*.8,sparkles:p,sparkleMat:g}}let zp=null,Fp=null,Op=null,Bp=null,Fh=[];function Hw(){return zp}function Vw(){return Fp}function Ww(){return Op}function Xw(){return Bp}function qw(){return Fh}function Yw(){const s=new re,t=new K({color:F.obeliskBlack,roughness:.2,metalness:.8,emissive:F.obeliskPink,emissiveIntensity:0});Fp=t;const e=new I(new Mt(1.2,1.8,_e,4),t);e.position.y=_e/2,e.rotation.y=Math.PI/4,e.castShadow=!0,s.add(e);const n=new Y({color:3351108,transparent:!0,opacity:.2});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4,v=new I(new Mt(.03,.04,_e*.9,3),n);v.position.set(Math.cos(y)*1.55,_e*.45,Math.sin(y)*1.55),s.add(v)}const i=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const U=6+R*4,D=new I(new Mt(.015,.015,.8,3),i);D.position.set(Math.cos(y)*1.6,U,Math.sin(y)*1.6),D.rotation.z=Math.PI/2,D.rotation.y=-y,D.visible=!1,s.add(D)}const v=new I(new Mt(.012,.012,2.5,3),i);v.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),v.visible=!1,s.add(v)}const o=new K({color:F.obeliskBlack,roughness:.1,metalness:.9,emissive:F.obeliskPink,emissiveIntensity:0});Op=o;const r=new I(new Yn(1.3,3,4),o);r.position.y=_e+1.5,r.rotation.y=Math.PI/4,s.add(r);const a=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4,v=new I(new Mt(.02,.02,3.2,3),a);v.position.set(Math.cos(y)*.8,_e+1.5,Math.sin(y)*.8),v.rotation.z=.35*(y<3.14?1:-1),v.rotation.y=-y,v.visible=!1,s.add(v)}for(let S=0;S<5;S++){const y=new I(new Se(1.85-S*.02,.04,6,4),new Y({color:2236979}));y.position.y=4+S*5,y.rotation.x=Math.PI/2,s.add(y)}const c=new K({color:1118488,roughness:.3,metalness:.7}),l=new I(new Mt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,s.add(l);const h=new I(new Mt(2.8,3,.4,4),c);h.position.y=.05,h.rotation.y=Math.PI/4,s.add(h);const u=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<8;S++){const y=S/8*6.28,v=new I(new j(.06,4,3),u);v.position.set(Math.cos(y)*2.5,_e*.7+S*.5,Math.sin(y)*2.5),v.visible=!1,s.add(v)}const f=new Y({color:1710626,transparent:!0,opacity:.08});for(let S=0;S<6;S++){const y=w()*6.28,v=2+w()*_e*.7,R=new I(new Mt(.008,.008,.5+w()*.5,3),f);R.position.set(Math.cos(y)*1.6,v,Math.sin(y)*1.6),R.rotation.z=(w()-.5)*.8,R.rotation.y=-y,s.add(R)}const d=new K({color:921108,roughness:.5,metalness:.4});for(let S=0;S<12;S++){const y=w()*6.28,v=3+w()*2,R=.15+w()*.25,U=new I(new j(R,4,3),d);U.scale.set(1+w()*.5,.3+w()*.3,1+w()*.5),U.position.set(Math.cos(y)*v,R*.15,Math.sin(y)*v),U.rotation.set(w(),w(),w()),s.add(U)}const m=new Y({color:F.obeliskPink,transparent:!0,opacity:0});for(let S=0;S<4;S++){const y=S/4*6.28+Math.PI/4;for(let v=0;v<5;v++){const R=5+v*3.5+w()*.5,U=(w()-.5)*.4,D=new I(new j(.04,4,3),m);D.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*U,R,Math.sin(y)*1.58+Math.sin(y+1.57)*U),D.visible=!1,s.add(D)}}const x=new Y({color:F.obeliskPink,transparent:!0,opacity:.8,blending:he,depthWrite:!1}),p=new I(new j(.5,12,8),x);p.position.y=_e+3,s.add(p);const g=new Y({color:F.obeliskPink,transparent:!0,opacity:.2,blending:he,depthWrite:!1}),T=new I(new j(.9,8,6),g);T.position.y=_e+3,s.add(T),Bp={mesh:p,haze:T,mat:x,hazeMat:g},Fh=[];const M=[.8,1.1,1.4,1.8],_=[11158783,10040302,12277247,8921821];for(let S=0;S<4;S++){const y=new Y({color:_[S],transparent:!0,opacity:.4,blending:he,depthWrite:!1,side:Dt}),v=new I(new Se(M[S],.02,6,24),y);v.position.y=_e+3,v.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),s.add(v),Fh.push({mesh:v,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new Y({color:0,transparent:!0,opacity:.15,side:Dt}),E=new I(new Ye(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,s.add(E),s.position.set(0,-_e,0),ht.add(s),zp=s;const b=new Ho(8939212,0,30);s.add(b),b.position.set(0,_e+1,0)}let kp=null,Gp=null;function Zw(){return kp}function $w(){return Gp}function jw(){const s=new K({color:F.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});Gp=s;const t=new ja;t.absarc(0,0,6,0,6.28,!1);const e=new $a;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Ar(t,24),i=new I(n,s);i.rotation.x=-Math.PI/2,i.position.y=.05,i.visible=!1,ht.add(i),kp=i;const o=new Y({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const m=d/12*6.28+w()*.3,x=3.5+w()*2,p=new I(new j(.04+w()*.04,4,3),o);p.scale.set(1.2,.4,1.2),p.position.set(Math.cos(m)*x,.02,Math.sin(m)*x),p.visible=!1,ht.add(p)}const r=new Y({color:13426158,transparent:!0,opacity:0,side:Dt});for(let d=0;d<6;d++){const m=d/6*6.28+w()*.5,x=new I(new Ye(.12+w()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(m)*3.3,.06,Math.sin(m)*3.3),x.visible=!1,ht.add(x)}const a=new Y({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const m=d/8*6.28,x=4+w()*1.5,p=new I(new Mt(.003,.003,.4,3),a);p.position.set(Math.cos(m)*x,.055,Math.sin(m)*x),p.rotation.x=Math.PI/2,p.rotation.z=m+Math.PI/2,p.visible=!1,ht.add(p)}const c=new Y({color:264208,transparent:!0,opacity:0,side:Dt}),l=new ja;l.absarc(0,0,5.2,0,6.28,!1);const h=new $a;h.absarc(0,0,3.8,0,6.28,!0),l.holes.push(h);const u=new Ar(l,16),f=new I(u,c);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,ht.add(f)}const Pr=[];function hd(s,t,e,n,i){const o=[],r=[],a=[];for(let l=0;l<e;l++){const h=s[l],u=s[l+1],f=u.x-h.x;u.y-h.y;const d=u.z-h.z,m=Math.sqrt(f*f+d*d)||1,x=-d/m,p=f/m,g=(l+.5)/e,T=.7+Math.sin(g*Math.PI)*.5,M=t*T/2,_=[h.x+x*M,h.y,h.z+p*M],A=[h.x-x*M,h.y,h.z-p*M],E=[u.x+x*M,u.y,u.z+p*M],b=[u.x-x*M,u.y,u.z-p*M];o.push(..._,...E,...A,...A,...E,...b);const S=l/e,y=(l+1)/e;if(a.push(S,0,y,0,S,1,S,1,y,0,y,1),i){const U=.85+Math.sin(g*Math.PI*3)*.15,D=1.2*U,z=.6*U;r.push(i.r*D,i.g*D,i.b*D),r.push(i.r*D,i.g*D,i.b*D),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*D,i.g*D,i.b*D),r.push(i.r*z,i.g*z,i.b*z)}}const c=new be;return c.setAttribute("position",new Ht(o,3)),c.setAttribute("uv",new Ht(a,2)),r&&c.setAttribute("color",new Ht(r,3)),c.computeVertexNormals(),c}function Kw(){for(let c=0;c<6;c++){const l=F.rainbow[c],h=c/6*6.28,u=6+c*.8,f=_e+6+c*2.5,d=1-c*.05,m=[],x=32;for(let V=0;V<=x;V++){const G=V/x,Z=h+G*Math.PI,W=Math.cos(Z)*u,rt=Math.sin(Z)*u,ft=Math.sin(G*Math.PI)*f;m.push(new N(W,ft,rt))}const p=new st(l),g=hd(m,d,x,!0,p),T=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:he}),M=new I(g,T);M.visible=!1,ht.add(M);const _=new Ur(m),A=new Y({color:16777215,transparent:!0,opacity:0,blending:he,depthWrite:!1}),E=new bn(_,x,.03,4,!1),b=new I(E,A);b.visible=!1,ht.add(b);const S=[],y=new Y({color:16777215,transparent:!0,opacity:0,blending:he,depthWrite:!1});for(let V=0;V<8;V++){const G=new I(new j(.06,4,3),y.clone());G.visible=!1,ht.add(G),S.push({mesh:G,mat:G.material,phase:V/8,speed:.15+Math.random()*.1})}const v=new Y({color:l,transparent:!0,opacity:0,side:Dt,blending:he}),R=m[0],U=m[m.length-1],D=new I(new Ye(1.2,8),v);D.rotation.x=-Math.PI/2,D.position.set(R.x,.03,R.z),D.visible=!1,ht.add(D);const z=new I(new Ye(1.2,8),v.clone());z.rotation.x=-Math.PI/2,z.position.set(U.x,.03,U.z),z.visible=!1,ht.add(z),Pr.push({mesh:M,mat:T,coreLine:b,coreMat:A,curve:_,sparkles:S,pools:[D,z],poolMat:v,targetOpacity:0})}const s=[],t=10,e=_e+14,n=32;for(let c=0;c<=n;c++){const l=c/n,h=l*Math.PI;s.push(new N(Math.cos(h)*t,Math.sin(l*Math.PI)*e,Math.sin(h)*t))}const i=new st(15654399),o=hd(s,1.5,n,!0,i),r=new Y({vertexColors:!0,transparent:!0,opacity:0,side:Dt,depthWrite:!1,blending:he}),a=new I(o,r);a.visible=!1,ht.add(a),Pr.push({mesh:a,mat:r,targetOpacity:0})}function Jw(s){for(let t=0;t<Pr.length;t++){const e=Pr[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const i=e.sparkles[n];i.phase+=i.speed*.016,i.phase>1&&(i.phase-=1);const o=e.curve.getPoint(i.phase);i.mesh.position.copy(o),i.mesh.visible=e.mesh.visible;const r=Math.sin(s*8+n*2.1)*.5+.5;i.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let pn=null;const si=[],an=new me,Mr=new st;function Qw(s){const t=new Y({color:16777215,transparent:!0,opacity:1});pn=new ns(An.fly,t,s),pn.instanceMatrix.setUsage(Ae),pn.instanceColor=new vi(new Float32Array(s*3),3),pn.instanceColor.setUsage(Ae),an.scale.setScalar(0),an.updateMatrix();for(let e=0;e<s;e++){pn.setMatrixAt(e,an.matrix);const n=e%3===0?F.fireflyB:F.firefly;Mr.setHex(n),pn.setColorAt(e,Mr),si.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}pn.count=s,pn.frustumCulled=!1,ht.add(pn)}function Na(s,t,e,n){let i=null;for(let o=0;o<si.length;o++)if(!si[o].active){i=si[o];break}if(!i){let o=1/0;for(let r=0;r<si.length;r++)si[r].life<o&&(o=si[r].life,i=si[r])}i.x=s,i.y=t+.5+Math.random()*3,i.z=e,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=n,i.max=n,i.active=!0,i.wander=Math.random()*6.28}function Hp(s,t){let e=0,n=!1;for(let i=0;i<si.length;i++){const o=si[i];if(!o.active){an.position.set(0,-100,0),an.scale.setScalar(0),an.updateMatrix(),pn.setMatrixAt(i,an.matrix);continue}if(o.life-=s,o.life<=0){o.active=!1,an.position.set(0,-100,0),an.scale.setScalar(0),an.updateMatrix(),pn.setMatrixAt(i,an.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*s,o.vx+=Math.cos(o.wander)*1.5*s,o.vz+=Math.sin(o.wander)*1.5*s,o.vy+=Math.sin(t*2+o.phase)*s,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*s,o.y+=o.vy*s,o.z+=o.vz*s;const r=Zt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*s);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),h=.6+a*.6;an.position.set(o.x,o.y,o.z),an.scale.setScalar(h),an.updateMatrix(),pn.setMatrixAt(i,an.matrix),Mr.setHex(o.colorHex),Mr.multiplyScalar(l),pn.setColorAt(i,Mr),n=!0}return pn.instanceMatrix.needsUpdate=!0,n&&(pn.instanceColor.needsUpdate=!0),e}let mn=null;const oi=[],cn=new me,ic=new st,t1=new st(F.spore);function e1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});mn=new ns(An.spore,t,s),mn.instanceMatrix.setUsage(Ae),mn.instanceColor=new vi(new Float32Array(s*3),3),mn.instanceColor.setUsage(Ae),cn.scale.setScalar(0),cn.updateMatrix();for(let e=0;e<s;e++)mn.setMatrixAt(e,cn.matrix),ic.setHex(F.spore),mn.setColorAt(e,ic),oi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});mn.count=s,mn.frustumCulled=!1,ht.add(mn)}function n1(s,t,e){let n=null;for(let i=0;i<oi.length;i++)if(!oi[i].active){n=oi[i];break}if(!n){let i=1/0;for(let o=0;o<oi.length;o++)oi[o].life<i&&(i=oi[o].life,n=oi[o])}n.x=s,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let Vp=0,Wp=0;function i1(s,t){Vp=s,Wp=t}function s1(s){let t=0,e=!1;for(let n=0;n<oi.length;n++){const i=oi[n];if(!i.active){cn.position.set(0,-100,0),cn.scale.setScalar(0),cn.updateMatrix(),mn.setMatrixAt(n,cn.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,cn.position.set(0,-100,0),cn.scale.setScalar(0),cn.updateMatrix(),mn.setMatrixAt(n,cn.matrix);continue}t++,i.vy+=.3*s,i.vx+=Vp*.3*s,i.vz+=Wp*.3*s,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const o=i.life/i.max*.7;cn.position.set(i.x,i.y,i.z),cn.scale.setScalar(1),cn.updateMatrix(),mn.setMatrixAt(n,cn.matrix),ic.copy(t1).multiplyScalar(o),mn.setColorAt(n,ic),e=!0}return mn.instanceMatrix.needsUpdate=!0,e&&(mn.instanceColor.needsUpdate=!0),t}let gn=null;const bo=[];let ul=0;const ln=new me,sc=new st,Xp=new st(F.starMote);function o1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});gn=new ns(An.starMote,t,s),gn.instanceMatrix.setUsage(Ae),gn.instanceColor=new vi(new Float32Array(s*3),3),gn.instanceColor.setUsage(Ae),ln.scale.setScalar(0),ln.updateMatrix();for(let e=0;e<s;e++)gn.setMatrixAt(e,ln.matrix),sc.copy(Xp),gn.setColorAt(e,sc),bo.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});gn.count=s,gn.frustumCulled=!1,ht.add(gn)}function r1(s){let t=null;for(let e=0;e<bo.length;e++)if(!bo[e].active){t=bo[e];break}t&&(t.x=s.x+(Math.random()-.5)*60,t.z=s.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function qp(s,t,e){ul+=s,ul>.15&&(ul=0,r1(e));let n=!1;for(let i=0;i<bo.length;i++){const o=bo[i];if(!o.active){ln.position.set(0,-100,0),ln.scale.setScalar(0),ln.updateMatrix(),gn.setMatrixAt(i,ln.matrix);continue}if(o.life-=s,o.life<=0||o.y<.5){o.active=!1,ln.position.set(0,-100,0),ln.scale.setScalar(0),ln.updateMatrix(),gn.setMatrixAt(i,ln.matrix);continue}o.y+=o.vy*s,o.drift+=(Math.random()-.5)*.5*s,o.x+=Math.sin(o.drift)*.1*s,o.z+=Math.cos(o.drift)*.08*s;const r=o.life/o.max,a=Math.sin(t*4+i)*.3+.7,c=r*a*.7,l=.5+a*.5;ln.position.set(o.x,o.y,o.z),ln.scale.setScalar(l),ln.updateMatrix(),gn.setMatrixAt(i,ln.matrix),sc.copy(Xp).multiplyScalar(c),gn.setColorAt(i,sc),n=!0}gn.instanceMatrix.needsUpdate=!0,n&&(gn.instanceColor.needsUpdate=!0)}let xn=null;const To=[],hn=new me,oc=new st,Yp=new st(8956535);function a1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});xn=new ns(An.dustMote,t,s),xn.instanceMatrix.setUsage(Ae),xn.instanceColor=new vi(new Float32Array(s*3),3),xn.instanceColor.setUsage(Ae),hn.scale.setScalar(0),hn.updateMatrix();for(let e=0;e<s;e++)xn.setMatrixAt(e,hn.matrix),oc.copy(Yp),xn.setColorAt(e,oc),To.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});xn.count=s,xn.frustumCulled=!1,ht.add(xn)}function ud(s,t,e){for(let n=0;n<e;n++){let i=null;for(let a=0;a<To.length;a++)if(!To[a].active){i=To[a];break}if(!i)continue;const o=Math.random()*6.28,r=1+Math.random()*2;i.x=s+Math.cos(o)*.2,i.y=Zt(s,t)+.1,i.z=t+Math.sin(o)*.2,i.vx=Math.cos(o)*r,i.vy=.5+Math.random()*1.5,i.vz=Math.sin(o)*r,i.life=.6+Math.random()*.6,i.max=i.life,i.active=!0}}function c1(s){let t=!1;for(let e=0;e<To.length;e++){const n=To[e];if(!n.active){hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),xn.setMatrixAt(e,hn.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,hn.position.set(0,-100,0),hn.scale.setScalar(0),hn.updateMatrix(),xn.setMatrixAt(e,hn.matrix);continue}n.vy-=3*s,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=Zt(n.x,n.z)+.05;n.y<i&&(n.y=i,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;hn.position.set(n.x,n.y,n.z),hn.scale.setScalar(1),hn.updateMatrix(),xn.setMatrixAt(e,hn.matrix),oc.copy(Yp).multiplyScalar(o),xn.setColorAt(e,oc),t=!0}xn.instanceMatrix.needsUpdate=!0,t&&(xn.instanceColor.needsUpdate=!0)}let vn=null;const Eo=[],un=new me,rc=new st,Zp=new st(F.bubblePop),l1=new j(.02,3,3);function h1(s){const t=new Y({color:16777215,transparent:!0,opacity:1});vn=new ns(l1,t,s),vn.instanceMatrix.setUsage(Ae),vn.instanceColor=new vi(new Float32Array(s*3),3),vn.instanceColor.setUsage(Ae),un.scale.setScalar(0),un.updateMatrix();for(let e=0;e<s;e++)vn.setMatrixAt(e,un.matrix),rc.copy(Zp),vn.setColorAt(e,rc),Eo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});vn.count=s,vn.frustumCulled=!1,ht.add(vn)}function u1(s,t,e,n){for(let i=0;i<n;i++){let o=null;for(let l=0;l<Eo.length;l++)if(!Eo[l].active){o=Eo[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=s,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function f1(s){let t=!1;for(let e=0;e<Eo.length;e++){const n=Eo[e];if(!n.active){un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),vn.setMatrixAt(e,un.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,un.position.set(0,-100,0),un.scale.setScalar(0),un.updateMatrix(),vn.setMatrixAt(e,un.matrix);continue}n.vy-=2*s,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=n.life/n.max*.8;un.position.set(n.x,n.y,n.z),un.scale.setScalar(1),un.updateMatrix(),vn.setMatrixAt(e,un.matrix),rc.copy(Zp).multiplyScalar(i),vn.setColorAt(e,rc),t=!0}vn.instanceMatrix.needsUpdate=!0,t&&(vn.instanceColor.needsUpdate=!0)}let _n=null;const Ao=[],Je=new me,ac=new st,$p=[new st(F.leafGlow),new st(3394662),new st(2271880),new st(5636044),new st(4513262)];let jp=0,Kp=0;function d1(s,t,e){jp=s,Kp=t}function p1(s){const t=new ge(.12,.08),e=new Y({color:16777215,transparent:!0,opacity:1,side:Dt,depthWrite:!1,blending:he});_n=new ns(t,e,s),_n.instanceMatrix.setUsage(Ae),_n.instanceColor=new vi(new Float32Array(s*3),3),_n.instanceColor.setUsage(Ae),Je.scale.setScalar(0),Je.updateMatrix();for(let n=0;n<s;n++)_n.setMatrixAt(n,Je.matrix),ac.setHex(0),_n.setColorAt(n,ac),Ao.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});_n.count=s,_n.frustumCulled=!1,ht.add(_n)}function m1(s,t,e){let n=null;for(let o=0;o<Ao.length;o++)if(!Ao[o].active){n=Ao[o];break}if(!n)return;n.x=s+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const i=Math.random()*6.28;n.vx=Math.cos(i)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(i)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*$p.length)}function g1(s,t){let e=!1;for(let n=0;n<Ao.length;n++){const i=Ao[n];if(!i.active){Je.position.set(0,-100,0),Je.scale.setScalar(0),Je.updateMatrix(),_n.setMatrixAt(n,Je.matrix);continue}if(i.life-=s,i.life<=0||i.y<-.5){i.active=!1,Je.position.set(0,-100,0),Je.scale.setScalar(0),Je.updateMatrix(),_n.setMatrixAt(n,Je.matrix);continue}i.vx+=jp*.4*s,i.vz+=Kp*.4*s,i.vx+=Math.sin(t*3+n*1.7)*.5*s,i.vz+=Math.cos(t*2.5+n*2.1)*.3*s,i.vy-=.3*s,i.vx*=.995,i.vy=Math.max(i.vy,-.8),i.vz*=.995,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s,i.rx+=i.rvx*s,i.ry+=i.rvy*s,i.rz+=i.rvz*s;const o=i.life/i.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;Je.position.set(i.x,i.y,i.z),Je.rotation.set(i.rx,i.ry,i.rz),Je.scale.setScalar(a),Je.updateMatrix(),_n.setMatrixAt(n,Je.matrix),ac.copy($p[i.colorIdx]).multiplyScalar(r),_n.setColorAt(n,ac),e=!0}_n.instanceMatrix.needsUpdate=!0,e&&(_n.instanceColor.needsUpdate=!0)}const _a=40,Oh=8;let Qe=null;const ri=[],Un=new me,Qi=new st,Jp=new st(4513194);let fd=0,dd=0,Lu=!1;function x1(){const s=new ja;return s.moveTo(0,-.18),s.quadraticCurveTo(.1,-.17,.11,-.06),s.lineTo(.1,-.02),s.lineTo(.13,.12),s.quadraticCurveTo(.125,.14,.11,.12),s.lineTo(.08,0),s.quadraticCurveTo(.05,-.02,.03,0),s.lineTo(.03,.05),s.lineTo(.02,.22),s.quadraticCurveTo(0,.245,-.02,.22),s.lineTo(-.03,.05),s.lineTo(-.03,0),s.quadraticCurveTo(-.05,-.02,-.08,0),s.lineTo(-.11,.12),s.quadraticCurveTo(-.125,.14,-.13,.12),s.lineTo(-.1,-.02),s.lineTo(-.11,-.06),s.quadraticCurveTo(-.1,-.17,0,-.18),new Ar(s)}function v1(){const s=x1(),t=new Y({color:16777215,transparent:!0,opacity:1,blending:he,depthWrite:!1,side:Dt});Qe=new ns(s,t,_a),Qe.instanceMatrix.setUsage(Ae),Qe.instanceColor=new vi(new Float32Array(_a*3),3),Qe.instanceColor.setUsage(Ae),Un.position.set(0,-100,0),Un.scale.setScalar(0),Un.updateMatrix();for(let e=0;e<_a;e++)Qe.setMatrixAt(e,Un.matrix),Qi.setScalar(0),Qe.setColorAt(e,Qi),ri.push({active:!1,life:0,maxLife:Oh,x:0,z:0});Qe.count=_a,Qe.frustumCulled=!1,ht.add(Qe),Lu=!0}function _1(s,t,e,n){if(!Lu)return;const i=s-fd,o=t-dd;if(i*i+o*o<(n?.25:.64))return;fd=s,dd=t;let c=null,l=-1;for(let p=0;p<ri.length;p++)if(!ri[p].active){c=ri[p],l=p;break}if(!c){let p=1/0;for(let g=0;g<ri.length;g++)ri[g].life<p&&(p=ri[g].life,c=ri[g],l=g)}const h=Zt(s,t);c.active=!0,c.life=Oh,c.maxLife=Oh,c.x=s,c.z=t;const u=l%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*u,d=Math.cos(e+Math.PI/2)*.12*u,m=n?1.15:1;Un.position.set(s+f,h+.015,t+d),Un.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Un.scale.set(m,m,m),Un.updateMatrix(),Qe.setMatrixAt(l,Un.matrix);const x=n?.9:.6;Qi.copy(Jp).multiplyScalar(x),Qe.setColorAt(l,Qi)}function M1(s,t){if(!Lu)return;const e=1+(t||0)*1.5;let n=!1;for(let i=0;i<ri.length;i++){const o=ri[i];if(!o.active)continue;if(o.life-=s*e,o.life<=0){o.active=!1,Un.position.set(0,-100,0),Un.scale.setScalar(0),Un.updateMatrix(),Qe.setMatrixAt(i,Un.matrix),Qi.setScalar(0),Qe.setColorAt(i,Qi),n=!0;continue}const r=o.life/o.maxLife,a=r*r;Qi.copy(Jp).multiplyScalar(a*.6),Qe.setColorAt(i,Qi),n=!0}Qe.instanceMatrix.needsUpdate=!0,n&&(Qe.instanceColor.needsUpdate=!0)}const fi=[],lo=[];let pd=_e+2,Yi=1;function md(s){Yi=s}function Qp(s,t,e,n){const i=[];for(let r=0;r<=12;r++){const a=r/12,c=s*(1-a*a),l=t*(1-a*a),h=e+(n-e)*a;i.push(new N(c,h,l))}return{curve:new Ur(i),pts:i}}function y1(s,t,e,n){const i=n||_e+2,o=e+15,r=new vu(new N(s,e,t),new N(s,o,t)),a=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:he,depthWrite:!1}),c=new I(new bn(r,1,.06,6,!1),a);ht.add(c);const l=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:he,depthWrite:!1}),h=new I(new bn(r,1,.2,6,!1),l);ht.add(h);const{curve:u}=Qp(s,t,o,i),f=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:he,depthWrite:!1}),d=new I(new bn(u,16,.05,6,!1),f);ht.add(d);const m=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:he,depthWrite:!1}),x=new I(new bn(u,16,.18,6,!1),m);ht.add(x);const p={upTube:c,upGlow:h,bendTube:d,bendGlow:x,mat:a,glowMat:l,bendMat:f,bendGlowMat:m,fromX:s,fromZ:t,floatY:e,skyY:o,tipY:i,animPhase:0,animTimer:0};fi.push(p);for(let g=0;g<fi.length-1;g++){const T=fi[g],M=(p.skyY+T.skyY)/2,_=[];for(let v=0;v<=8;v++){const R=v/8,U=p.fromX*(1-R)+T.fromX*R,D=p.fromZ*(1-R)+T.fromZ*R,z=M+Math.sin(R*Math.PI)*3;_.push(new N(U,z,D))}const A=new Ur(_),E=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:he,depthWrite:!1}),b=new I(new bn(A,10,.03,4,!1),E);ht.add(b);const S=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:he,depthWrite:!1}),y=new I(new bn(A,10,.1,4,!1),S);ht.add(y),lo.push({tube:b,glow:y,mat:E,glowMat:S,opacity:0})}return p}function w1(s){for(let t=0;t<fi.length;t++){const e=fi[t];e.tipY=s;const{curve:n}=Qp(e.fromX,e.fromZ,e.skyY,s);ht.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new bn(n,16,.05,6,!1),ht.add(e.bendTube),ht.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new bn(n,16,.18,6,!1),ht.add(e.bendGlow)}}function S1(s,t,e){const n=e||_e+2;Math.abs(n-pd)>.1&&fi.length>0&&(w1(n),pd=n);for(let i=0;i<fi.length;i++){const o=fi[i];if(o.animTimer+=s,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+i*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let i=0;i<lo.length;i++){const o=lo[i];o.opacity=Math.min(o.opacity+s*.5,.3);const r=Math.sin(t*2+i*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(Yi<1){for(let i=0;i<fi.length;i++){const o=fi[i];o.mat.opacity*=Yi,o.glowMat.opacity*=Yi,o.bendMat.opacity*=Yi,o.bendGlowMat.opacity*=Yi}for(let i=0;i<lo.length;i++)lo[i].mat.opacity*=Yi,lo[i].glowMat.opacity*=Yi}}const b1=new st(F.orbGold),T1=new st(16777215);let so=0,qe="SEEK",Zi=-_e,Ke=0,lr=[],Hn=null,vs=null,_s=null,Ge=null,Ms=[],Ri=null,Bh=null,Vn=[],hr=null,t0=null,e0=null,kh=[],Gh=[],Hh=[],Vh=[],Ji=[],ho=null,gd=0,Gn=0,oo=[],mo=null,xd=!1;const go=200;let Xn=null;const Du=[];let n0=!1;function E1(){if(Xn)return;const s=new be,t=new Float32Array(go*3),e=new Float32Array(go*3),n=new Float32Array(go);s.setAttribute("position",new We(t,3)),s.setAttribute("color",new We(e,3)),s.setAttribute("size",new We(n,1)),s.attributes.position.setUsage(Ae),s.attributes.color.setUsage(Ae),s.attributes.size.setUsage(Ae);const i=new pu({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:he,depthWrite:!1,sizeAttenuation:!0});Xn=new ep(s,i),Xn.visible=!1,ht.add(Xn);const o=new st(F.obeliskPink),r=new st(11158783);for(let a=0;a<go;a++){const c=Math.random()<.7?o:r;e[a*3]=c.r*(.8+Math.random()*.4),e[a*3+1]=c.g*(.8+Math.random()*.4),e[a*3+2]=c.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,Du.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}s.attributes.color.needsUpdate=!0,s.attributes.size.needsUpdate=!0}function A1(s,t,e){n0=!0,Xn.visible=!0;for(let n=0;n<go;n++){const i=Du[n];i.x=s,i.y=t,i.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;i.vx=Math.sin(r)*Math.cos(o)*a,i.vy=Math.cos(r)*a*.5+Math.random()*2,i.vz=Math.sin(r)*Math.sin(o)*a,i.life=5+Math.random()*6,i.active=!0}}function R1(s,t){if(!Xn||!Xn.visible)return;const e=Xn.geometry.attributes.position.array,n=Xn.geometry.attributes.size.array;let i=!1;for(let o=0;o<go;o++){const r=Du[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(i=!0,r.life-=s,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*s,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*s,r.vz+=Math.cos(t*2.5+o*1.1)*.2*s,r.x+=r.vx*s,r.y+=r.vy*s,r.z+=r.vz*s,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,c=Math.min(r.life/2,1);n[o]=(.15+a*.2)*c}Xn.geometry.attributes.position.needsUpdate=!0,Xn.geometry.attributes.size.needsUpdate=!0,i||(Xn.visible=!1)}function C1(s){lr=s.orbs,Hn=s.obeliskGroup,vs=s.obeliskMat,_s=s.obeliskGlowMat,Ge=s.pinnacleOrb,Ms=s.pinnacleRings||[],Ri=s.moatMesh,Bh=s.moatMat,Vn=s.rainbowArcs,hr=s.player,t0=s.makeLaser,e0=s.orbHudEl,kh=s.deers||[],Gh=s.puffs||[],Hh=s.jellies||[],Vh=s.moths||[],Ji=s.trees||[],ho=s.groundMesh||null,E1()}function P1(s,t){let e=null,n=1/0;for(let c=0;c<lr.length;c++){const l=lr[c];if(l.found)continue;const h=l.x-hr.pos.x,u=l.z-hr.pos.z,f=h*h+u*u;f<n&&(n=f,e=l)}if(e&&n<no*no){const c=Math.sin(t*2+e.phase)*.5+.5;cr.position.set(e.x,1,e.z),cr.intensity=1+c*2,cr.distance=no}else cr.intensity=0;for(let c=0;c<lr.length;c++){const l=lr[c];if(!(l.found&&!l.flyUp&&!l._flashing)){if(!l.found){const h=Math.sin(t*1.5+l.phase)*.5+.5;l.group.position.y=l.flyY+Math.sin(t*.8+l.phase)*.3,l.glowMat.opacity=.3+h*.4,l.hazeMat.opacity=.08+h*.12;const u=l.x-hr.pos.x,f=l.z-hr.pos.z,d=u*u+f*f,m=no*no;if(d<m){const x=1-Math.sqrt(d)/no,p=x*x;l.glowMat.opacity=Math.min(.3+h*.4+p*.5,1),l.hazeMat.opacity=Math.min(.08+h*.12+p*.25,.6),l.coreMat.color.copy(T1).lerp(b1,1-p);const g=1+p*.3;l.group.scale.setScalar(g)}else l.group.scale.setScalar(1);for(let x=3;x<l.group.children.length;x++){const p=l.group.children[x],g=(x-3)/6*6.28+t*1.5;p.position.x=Math.cos(g)*.4,p.position.z=Math.sin(g)*.4,p.position.y=Math.sin(g*2+t)*.1}if(d<ed*ed){l.found=!0,l._flashing=!0,l._flashTimer=0,l.flyY=l.group.position.y,so++;const x=e0||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+so+" / "+co),qe==="SEEK"&&(qe="RISING")}}if(l._flashing){l._flashTimer+=s;const h=Math.min(l._flashTimer/1.5,1),u=h<.3?h/.3:1-(h-.3)/.7;l.glowMat.opacity=.5+u*.5,l.hazeMat.opacity=.3+u*.5,l.group.scale.setScalar(1+u*.6),l.group.position.x=l.x+Math.sin(t*30)*u*.05,l.group.position.z=l.z+Math.cos(t*25)*u*.05,l._flashTimer>1.5&&(l._flashing=!1,l.flyUp=!0,l.group.position.x=l.x,l.group.position.z=l.z)}if(l.flyUp){const h=_e+5;l.flyY+=(h-l.flyY)*s*.8,l.group.position.y=l.flyY;const u=Math.min((l.flyY-1)/(h-1),1);if(l.group.scale.setScalar(1-u*.6),l.glowMat.opacity=.8-u*.5,l.flyY>h-1&&!l.laserLine){l.flyUp=!1,l.group.visible=!1;const f=fl();l.laserLine=t0(l.x,l.z,0,f)}}}}const i=_e/co,o=-_e+so*i;if(Zi<o-.01?(Zi+=8*s,Zi>o&&(Zi=o),Hn&&(Hn.position.y=Zi,Hn.position.x=Math.sin(t*25)*.04,Hn.position.z=Math.cos(t*30)*.03)):Hn&&(Hn.position.x*=.9,Hn.position.z*=.9),so>=co&&Zi>=-.01&&qe==="RISING"&&(qe="COMPLETE",Ke=0),Hn){Hn.rotation.y+=s*.03;const c=Hn.children[Hn.children.length-1];if(c&&c.isLight){const l=Math.max(0,Math.min(1,(Zi+_e)/_e));c.intensity=l*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Ge&&Ge.mesh.visible){const c=Math.sin(t*2)*.5+.5;Ge.mat.opacity=.6+c*.3,Ge.hazeMat.opacity=.15+c*.12;const l=so/co;Ge.mat.opacity*=.3+l*.7,Ge.hazeMat.opacity*=.2+l*.8}for(let c=0;c<Ms.length;c++){const l=Ms[c];if(!l.mesh.visible)continue;l.mesh.rotation.x+=l.rx*s,l.mesh.rotation.y+=l.ry*s,l.mesh.rotation.z+=l.rz*s;const h=so/co;l.mat.opacity=(.15+h*.35)*(.8+Math.sin(t*1.5+c)*.2)}const a=fl();if(S1(s,t,a),qe==="COMPLETE"&&Ke>3?md(Math.max(0,1-(Ke-3)/4)):(qe==="FINALE"||qe==="TRANSFORM")&&md(0),R1(s,t),qe==="COMPLETE"){Ke+=s;const c=Math.min(Ke/3,1);if(vs&&(vs.emissiveIntensity=c*1.5),_s&&(_s.emissiveIntensity=c*2.5),Ge&&Ge.mesh.visible&&Ke>1&&Ke<3){const l=Math.min((Ke-1)/1.5,1);Ge.mat.opacity=.9+l*.1,Ge.hazeMat.opacity=.5+l*.5,Ge.mesh.scale.setScalar(1+l*.5),Ge.haze.scale.setScalar(1+l*1);for(let h=0;h<Ms.length;h++){const u=Ms[h];u.mesh.rotation.x+=u.rx*s*(1+l*4),u.mesh.rotation.y+=u.ry*s*(1+l*4),u.mesh.rotation.z+=u.rz*s*(1+l*4)}}if(Ge&&Ge.mesh.visible&&Ke>=3&&!n0){const l=new N;Ge.mesh.getWorldPosition(l),A1(l.x,l.y,l.z),Ge.mesh.visible=!1,Ge.haze.visible=!1;for(let h=0;h<Ms.length;h++)Ms[h].mesh.visible=!1}if(Ke>3&&Bh){const l=Math.min((Ke-3)/4,1);Bh.opacity=l*.6,Ri&&(Ri.visible||(Ri.visible=!0),Ri.position.y=.05+Math.sin(t*3)*.02*l)}if(Ke>4)for(let l=0;l<Vn.length;l++){const h=l*.3,u=Math.min(Math.max((Ke-4-h)/2,0),1);u>0&&!Vn[l].mesh.visible&&(Vn[l].mesh.visible=!0),Vn[l].mat.opacity=u*.55,Vn[l].mesh.rotation.y+=s*.1*(l+1)*.3}if(Ke>3){const l=Math.min((Ke-3)/6,1)*2;for(let h=0;h<kh.length;h++){const u=kh[h],f=u.group,d=-f.position.x,m=-f.position.z,x=Math.sqrt(d*d+m*m);x>8?(u.wanderAng=Math.atan2(-f.position.x,-f.position.z),u.state="walk",u.speed=1.5*l,f.position.x+=d/x*u.speed*s,f.position.z+=m/x*u.speed*s,f.rotation.y=u.wanderAng):u.state="pause"}for(let h=0;h<Gh.length;h++){const u=Gh[h],f=u.group,d=-f.position.x,m=-f.position.z,x=Math.sqrt(d*d+m*m);x>8&&(u.wanderAng=Math.atan2(-f.position.x,-f.position.z),u.state="hop",u.hopTimer=u.hopTimer%1.2,f.position.x+=d/x*1.5*l*s,f.position.z+=m/x*1.5*l*s)}for(let h=0;h<Hh.length;h++){const u=Hh[h],f=u.group;f.position.x+=(0-f.position.x)*s*.15*l,f.position.z+=(0-f.position.z)*s*.15*l}for(let h=0;h<Vh.length;h++){const u=Vh[h];u.centerX+=(0-u.centerX)*s*.2*l,u.centerZ+=(0-u.centerZ)*s*.2*l,u.orbitR=Math.max(u.orbitR-s*.3*l,2)}}Ke>12&&(qe="FINALE",console.log("✦ Quest → FINALE"))}if(qe==="FINALE"){gd+=s,vs&&(vs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),_s&&(_s.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Ri&&(Ri.position.y=.05+Math.sin(t*3)*.02);for(let c=0;c<Vn.length;c++)Vn[c].mesh.rotation.y+=s*.1*(c+1)*.3,Vn[c].mat.opacity=.45+Math.sin(t+c)*.1;gd>30&&(qe="TRANSFORM",Gn=0,I1(),console.log("✦ Quest → TRANSFORM (trees="+Ji.length+")"))}if(qe==="TRANSFORM"){Gn+=s,vs&&(vs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),_s&&(_s.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Ri&&(Ri.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<Vn.length;l++)Vn[l].mesh.rotation.y+=s*.1*(l+1)*.3,Vn[l].mat.opacity=.45+Math.sin(t+l)*.1;if(Gn<3&&oo.length<Ji.length){const l=Math.min(Math.floor(Gn/3*Ji.length),Ji.length);for(;oo.length<l;){const h=oo.length,u=Ji[h],f=fl(),d=new vu(new N(0,f,0),new N(u.x,0,u.z)),m=new Y({color:F.laserPink,transparent:!0,opacity:0,blending:he,depthWrite:!1}),x=new I(new bn(d,8,.06,4,!1),m);ht.add(x);const p=new Y({color:F.laserGlow,transparent:!0,opacity:0,blending:he,depthWrite:!1}),g=new I(new bn(d,8,.18,4,!1),p);ht.add(g),oo.push({tube:x,glow:g,mat:m,glowMat:p,timer:0})}}for(let l=0;l<oo.length;l++){const h=oo[l];h.timer+=s;const u=Math.min(h.timer/.5,1),f=Math.sin(t*3+l*.5)*.5+.5;h.mat.opacity=u*(.6+f*.4),h.glowMat.opacity=u*(.2+f*.15)}let c=0;Gn>=3&&Gn<6?c=(Gn-3)/3:Gn>=6&&Gn<10?(c=1,xd||(L1(),xd=!0,console.log("✦ Trees + ground transformed"))):Gn>=10&&Gn<13&&(c=1-(Gn-10)/3),mo&&(mo.style.opacity=c)}}function fl(){return Zi+_e+3}function I1(){mo||(mo=document.createElement("div"),mo.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(mo))}function L1(){const s=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}],t=new st(667712),e=new st(534584);for(let n=0;n<Ji.length;n++){const i=Ji[n].group,o=s[n%s.length],r=new Set;i.traverse(a=>{if(!a.isMesh||!a.material)return;const c=a.material;if(r.has(c))return;r.add(c);const l={};c.color.getHSL(l),l.h>=.2&&l.h<=.6&&l.s>.08?(l.l>.45?c.color.set(o.core):c.transparent&&c.opacity<.15?c.color.set(o.glow):c.color.set(o.color),c.emissive&&c.emissive.set(o.glow)):l.h<.2&&l.s>.05&&l.l>.05&&l.l<.4?(c.color.copy(t),c.emissive&&c.emissive.copy(e)):l.l<.06&&c.color.set(657432)})}if(ho&&ho.material){ho.material.emissive.set(2099264),ho.material.emissiveIntensity=.3;const n=ho.geometry.attributes.color;if(n){const i=n.array;for(let o=0;o<i.length;o+=3){const r=i[o],a=i[o+1],c=i[o+2];i[o]=r*.5+c*.3,i[o+1]=a*.15,i[o+2]=c*.7+a*.4}n.needsUpdate=!0}}}const D1=600;let Ma=.25,Me=1,vd=.85,Le="NIGHT",ur=null,fr=null,Wh=null,dr=null,za=null;const _d=[{label:"DUSK",sky:new st(923685),fog:new st(791584),fogDensity:.009,moonInt:.6,moonCol:new st(14527112),moonElev:15,ambSky:new st(4469589),ambGnd:new st(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new st(330264),fog:new st(528408),fogDensity:.01,moonInt:1,moonCol:new st(12307694),moonElev:55,ambSky:new st(3359846),ambGnd:new st(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new st(198160),fog:new st(397332),fogDensity:.012,moonInt:.55,moonCol:new st(8952251),moonElev:75,ambSky:new st(1712708),ambGnd:new st(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new st(1187888),fog:new st(923688),fogDensity:.011,moonInt:.5,moonCol:new st(13417386),moonElev:20,ambSky:new st(3354197),ambGnd:new st(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],Xi=new st,Md=new st;function U1(s){ur=s.scene,fr=s.moon,Wh=s.moon2,dr=s.hemiLight,za=s.playerLight}function N1(s){if(!ur)return;Ma=(Ma+s/D1)%1;const t=Ma*4,e=Math.floor(t)%4,n=(e+1)%4,i=t-Math.floor(t),o=.5-.5*Math.cos(i*Math.PI),r=_d[e],a=_d[n];Le=o<.5?r.label:a.label;const c=(l,h)=>l+(h-l)*o;if(Xi.copy(r.sky).lerp(a.sky,o),ur.background.copy(Xi),Xi.copy(r.fog).lerp(a.fog,o),ur.fog.color.copy(Xi),ur.fog.density=c(r.fogDensity,a.fogDensity),fr){Xi.copy(r.moonCol).lerp(a.moonCol,o),fr.color.copy(Xi),fr.intensity=c(r.moonInt,a.moonInt);const l=Ma*Math.PI*2,h=c(r.moonElev,a.moonElev)*Math.PI/180,u=60;fr.position.set(Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u)}if(Wh){const l=c(r.moonInt,a.moonInt)/.85;Wh.intensity=.3*l}dr&&(Xi.copy(r.ambSky).lerp(a.ambSky,o),Md.copy(r.ambGnd).lerp(a.ambGnd,o),dr.color.copy(Xi),dr.groundColor.copy(Md),dr.intensity=c(r.ambInt,a.ambInt)),za&&(za.distance=c(r.plRange,a.plRange),za.intensity=c(r.plInt,a.plInt)),vd=c(r.stars,a.stars),aw(vd),Me=c(r.bio,a.bio)}let As=0,xo=0,zi=0,Ro="CLEAR",Oi=!1,li=0;const Fa={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},z1={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let uo="CLEAR",ro=null,Oa=0,ya=0,dl=0,wa=!1,Sa=0,pl=Math.random()*Math.PI*2,ml=0,gl=0;const Xh=[],F1=8;let yd=!1,xl=0,ba=1,Ba=0,Ta=0,vl=0;function O1(){const s=z1[uo],t=Object.entries(s);let e=0;for(const[,i]of t)e+=i;let n=Math.random()*e;for(const[i,o]of t)if(n-=o,n<=0)return i;return t[0][0]}function B1(){if(yd)return;const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new mu(s),i=new ge(40,14);for(let o=0;o<F1;o++){const r=new Y({map:n,color:5596791,transparent:!0,opacity:0,side:Dt,depthWrite:!1}),a=new I(i,r);a.visible=!1,ht.add(a),Xh.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}yd=!0}function k1(){B1();const s=Fa.CLEAR.duration;Oa=s[0]+Math.random()*(s[1]-s[0])}function G1(s,t,e){if(wa)if(ya-=s,ya<=0){uo=ro,ro=null,wa=!1;const o=Fa[uo].duration;Oa=o[0]+Math.random()*(o[1]-o[0]),Sa=0}else Sa=1-ya/dl;else Oa-=s,Oa<=0&&(ro=O1(),wa=!0,dl=30+Math.random()*60,ya=dl,Sa=0);const n=Fa[uo];if(wa&&ro){const o=Fa[ro],r=.5-.5*Math.cos(Sa*Math.PI),a=(c,l)=>c+(l-c)*r;ba=a(n.fogMult,o.fogMult),Ba=a(n.rainRate,o.rainRate),Ta=a(n.skyDarken,o.skyDarken),vl=a(n.mistCount,o.mistCount),zi=a(n.windBase,o.windBase),Ro=r<.5?uo:ro}else ba=n.fogMult,Ba=n.rainRate,Ta=n.skyDarken,vl=n.mistCount,zi=n.windBase,Ro=uo;Oi=Ro==="LUMINOUS_STORM",pl+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*s,ml-=s,ml<=0&&(ml=2+Math.random()*6,gl=Math.random()*.8),gl*=Math.pow(.3,s);const i=zi+gl;if(As=Math.cos(pl)*i,xo=Math.sin(pl)*i,ht.fog.density*=ba,Ta>.001){const o=ht.background,r=1-Ta;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(vl);for(let r=0;r<Xh.length;r++){const a=Xh[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=As*s*.02;const h=.03+ba*.012;a.mat.opacity+=(h-a.mat.opacity)*s*2}else a.active&&(a.mat.opacity-=s*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Oi&&(xl-=s,xl<=0&&(xl=1+Math.random()*4,li=1)),li*=Math.pow(.02,s),li<.01&&(li=0),Ba}function yr(){return Ba}const ii=300,ir=new Float32Array(ii),sr=new Float32Array(ii),or=new Float32Array(ii),_l=new Float32Array(ii),Ml=new Float32Array(ii),yl=new Float32Array(ii),ys=new Float32Array(ii),Dn=new Float32Array(ii*6);let Rs=null,qh=null;function H1(){const s=new be;s.setAttribute("position",new We(Dn,3)),qh=new du({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Rs=new qm(s,qh),Rs.frustumCulled=!1,Rs.visible=!1,ht.add(Rs);for(let t=0;t<ii;t++)ys[t]=0,i0(t)}function i0(s){const t=s*6;Dn[t]=0,Dn[t+1]=-100,Dn[t+2]=0,Dn[t+3]=0,Dn[t+4]=-100,Dn[t+5]=0}function V1(s,t,e,n,i){if(!Rs)return;const o=e>.01;if(Rs.visible=o,!o)return;qh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*s*60);for(let c=0;c<r;c++){let l=-1;for(let f=0;f<ii;f++)if(ys[f]<=0){l=f;break}if(l===-1)break;const h=Math.random()*Math.PI*2,u=Math.random()*30;ir[l]=t.x+Math.cos(h)*u,sr[l]=12+Math.random()*10,or[l]=t.z+Math.sin(h)*u,_l[l]=n*2+(Math.random()-.5)*.3,Ml[l]=-12-Math.random()*8,yl[l]=i*2+(Math.random()-.5)*.3,ys[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<ii;c++){if(ys[c]<=0)continue;if(ys[c]-=s,ys[c]<=0||sr[c]<Zt(ir[c],or[c])+.1){ys[c]=0,i0(c);continue}ir[c]+=_l[c]*s,sr[c]+=Ml[c]*s,or[c]+=yl[c]*s;const l=c*6;Dn[l]=ir[c],Dn[l+1]=sr[c],Dn[l+2]=or[c],Dn[l+3]=ir[c]+_l[c]*a,Dn[l+4]=sr[c]+Ml[c]*a,Dn[l+5]=or[c]+yl[c]*a}Rs.geometry.attributes.position.needsUpdate=!0}let ut=null,ze=null,Yh=null,_i=!1,is=!1,cc=null,wl=null,ka=null,W1=null,s0=null,X1=null,q1=null,o0=null,Y1=null,r0=null,a0=null,Z1=null,c0=null,l0=null,Sl=0,$1=null,h0=null,j1=null;const Pi={jelly:0,puff:0,deer:0,moth:0};function bl(s,t){const e=ut.sampleRate*t,n=ut.createBuffer(1,e,ut.sampleRate),i=n.getChannelData(0);if(s==="white")for(let r=0;r<e;r++)i[r]=Math.random()*2-1;else if(s==="brown"){let r=0;for(let a=0;a<e;a++){const c=Math.random()*2-1;i[a]=(r+.02*c)/1.02,r=i[a],i[a]*=1.8}}const o=Math.min(Math.floor(ut.sampleRate*.05),e>>1);for(let r=0;r<o;r++){const a=r/o;i[r]*=a,i[e-1-r]*=a}return n}function rr(s,t,e,n){const i=ut.createBufferSource();i.buffer=s,i.loop=!0;const o=ut.createGain();o.gain.value=t;const r=ut.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=ut.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,i.connect(a).connect(r).connect(o).connect(ze),i.start(),{node:i,gain:o,filter:r}}function K1(){const s=ut.createDelay(1);s.delayTime.value=.37;const t=ut.createDelay(1);t.delayTime.value=.53;const e=ut.createGain();e.gain.value=.2;const n=ut.createGain();n.gain.value=.15;const i=ut.createBiquadFilter();i.type="lowpass",i.frequency.value=2500;const o=ut.createBiquadFilter();o.type="lowpass",o.frequency.value=2e3;const r=ut.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=ut.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const c=ut.createGain();c.gain.value=.3,s.connect(i).connect(r).connect(e).connect(s),t.connect(o).connect(a).connect(n).connect(t),s.connect(c),t.connect(c),c.connect(ze);const l=ut.createGain();l.gain.value=1,l.connect(s),l.connect(t),Yh=l}function pr(s,t,e){if(s.connect(t),Yh&&e>0){const n=ut.createGain();n.gain.value=e,s.connect(n).connect(Yh)}}function J1(){const s=()=>{if(!_i){try{ut=new(window.AudioContext||window.webkitAudioContext),ze=ut.createGain(),ze.gain.value=.35,ze.connect(ut.destination),cc=bl("brown",8),wl=bl("brown",5),ka=bl("white",4),K1();const t=rr(cc,.05,200,50);W1=t.node,s0=t.gain,X1=t.filter;const e=rr(wl,.03,350,80);q1=e.node,o0=e.gain;const n=rr(ka,0,400,60);Y1=n.node,r0=n.gain,a0=n.filter;const i=rr(ka,0,2e3,80);Z1=i.node,c0=i.gain,l0=i.filter;const o=rr(wl,0,600,60);$1=o.node,h0=o.gain,j1=o.filter,_i=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",s),document.removeEventListener("keydown",s),document.removeEventListener("touchstart",s)}};document.addEventListener("click",s),document.addEventListener("keydown",s),document.addEventListener("touchstart",s)}function Q1(s,t,e,n,i,o,r,a){if(!_i||is)return;const c=ut.currentTime,l=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;s0.gain.linearRampToValueAtTime(l,c+.1),o0.gain.linearRampToValueAtTime(l*.6,c+.1);const h=Math.min(t*.12,.18),u=200+t*600;r0.gain.linearRampToValueAtTime(h,c+.1),a0.frequency.linearRampToValueAtTime(u,c+.1);const f=e*.15,d=1200+e*2e3;c0.gain.linearRampToValueAtTime(f,c+.1),l0.frequency.linearRampToValueAtTime(d,c+.1),i>.5&&Sl<=0&&(tS(),Sl=2+Math.random()*3),Sl-=s;let m=1/0;if(r&&a)for(let g=0;g<a.length;g++){const T=a[g].x-r.x,M=a[g].z-r.z,_=T*T+M*M;_<m&&(m=_)}const p=(m<225?1-Math.sqrt(m)/15:0)*.08;h0.gain.linearRampToValueAtTime(p,c+.1),Pi.jelly-=s,Pi.puff-=s,Pi.deer-=s,Pi.moth-=s}function tS(){if(!ut)return;const s=ut.currentTime,t=ut.createOscillator(),e=ut.createGain(),n=ut.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,s),e.gain.exponentialRampToValueAtTime(.001,s+.8+Math.random()*.5),t.connect(n).connect(e).connect(ze),t.start(),t.stop(s+1.5);const i=ut.createBufferSource();i.buffer=cc;const o=ut.createGain(),r=ut.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=ut.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,s),o.gain.exponentialRampToValueAtTime(.001,s+1.2),i.connect(a).connect(r).connect(o).connect(ze),i.start(),i.stop(s+1.5)}function zs(s,t,e){if(!_i||is||Pi[s]>0)return;const n=t.x-e.x,i=t.z-e.z,o=n*n+i*i;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,c=Math.max(-1,Math.min(1,n/Math.max(r,1))),l=ut.createStereoPanner();l.pan.value=c;const h=ut.currentTime;switch(s){case"jelly":{const u=360+Math.random()*60,f=ut.createOscillator(),d=ut.createOscillator();f.type="sine",d.type="sine",f.frequency.setValueAtTime(u,h),d.frequency.setValueAtTime(u+3,h),f.frequency.linearRampToValueAtTime(u-40,h+1.2),d.frequency.linearRampToValueAtTime(u-37,h+1.2);const m=ut.createOscillator(),x=ut.createGain();m.frequency.value=4,x.gain.value=5,m.connect(x),x.connect(f.frequency),x.connect(d.frequency);const p=ut.createGain();p.gain.setValueAtTime(0,h),p.gain.linearRampToValueAtTime(a,h+.15),p.gain.setValueAtTime(a,h+.6),p.gain.exponentialRampToValueAtTime(.001,h+1.4),f.connect(p),d.connect(p),p.connect(l),pr(l,ze,.4),m.start(h),f.start(h),d.start(h),m.stop(h+1.5),f.stop(h+1.5),d.stop(h+1.5),Pi.jelly=4+Math.random()*5;break}case"puff":{const u=500+Math.random()*100,f=[u,u*1.2,u*1.5];for(let d=0;d<f.length;d++){const m=ut.createOscillator();m.type="sine",m.frequency.value=f[d];const x=ut.createGain(),p=h+d*.07;x.gain.setValueAtTime(0,p),x.gain.linearRampToValueAtTime(a*.5,p+.02),x.gain.exponentialRampToValueAtTime(.001,p+.15),m.connect(x).connect(l),m.start(p),m.stop(p+.18)}pr(l,ze,.3),Pi.puff=8+Math.random()*10;break}case"deer":{const u=100+Math.random()*30,f=ut.createOscillator(),d=ut.createOscillator();f.type="triangle",d.type="triangle",f.frequency.setValueAtTime(u,h),d.frequency.setValueAtTime(u+2,h),f.frequency.linearRampToValueAtTime(u-15,h+.5),d.frequency.linearRampToValueAtTime(u-13,h+.5);const m=ut.createBiquadFilter();m.type="lowpass",m.frequency.value=250,m.Q.value=.5;const x=ut.createGain();x.gain.setValueAtTime(0,h),x.gain.linearRampToValueAtTime(a*.7,h+.12),x.gain.setValueAtTime(a*.7,h+.3),x.gain.exponentialRampToValueAtTime(.001,h+.6),f.connect(m),d.connect(m),m.connect(x).connect(l),pr(l,ze,.3),f.start(h),d.start(h),f.stop(h+.7),d.stop(h+.7),Pi.deer=5+Math.random()*6;break}case"moth":{const u=ut.createOscillator();u.type="sine",u.frequency.setValueAtTime(200+Math.random()*80,h);const f=ut.createOscillator(),d=ut.createGain();f.frequency.value=8+Math.random()*4,d.gain.value=12,f.connect(d).connect(u.frequency);const m=ut.createGain();m.gain.setValueAtTime(0,h),m.gain.linearRampToValueAtTime(a*.2,h+.05),m.gain.exponentialRampToValueAtTime(.001,h+.25),u.connect(m).connect(l),pr(l,ze,.2),f.start(h),u.start(h),f.stop(h+.3),u.stop(h+.3),Pi.moth=4+Math.random()*5;break}}}let lc=0;function eS(s,t){if(!_i||is||lc>0)return;const e=ut.currentTime;if(t){const n=ut.createBufferSource();n.buffer=ka;const i=ut.createGain(),o=ut.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(i).connect(ze),n.start(),n.stop(e+.15)}else{const n=ut.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const i=ut.createGain();i.gain.setValueAtTime(.03,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(i).connect(ze),n.start(),n.stop(e+.1)}lc=s?.22:.35}function nS(){if(!_i||is)return;const s=ut.currentTime,t=ut.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(300,s+.1);const e=ut.createGain();e.gain.setValueAtTime(.03,s),e.gain.exponentialRampToValueAtTime(.001,s+.15),t.connect(e).connect(ze),t.start(),t.stop(s+.2)}function iS(s){if(!_i||is)return;const t=ut.currentTime,e=ut.createBufferSource();e.buffer=cc;const n=ut.createGain(),i=ut.createBiquadFilter();i.type="lowpass",i.frequency.value=200;const o=ut.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(s*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(i).connect(n).connect(ze),e.start(),e.stop(t+.25)}function sS(s){lc>0&&(lc-=s)}function oS(s,t){if(!_i||is)return;const e=s.x-t.x,n=s.z-t.z,i=e*e+n*n;if(i>400)return;const o=Math.max(0,1-Math.sqrt(i)/20)*.06,r=ut.currentTime,a=ut.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const c=ut.createGain();c.gain.setValueAtTime(o,r),c.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(c).connect(ze),a.start(),a.stop(r+.15)}function rS(){if(!_i||is)return;const s=ut.currentTime,t=ut.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,s),t.frequency.exponentialRampToValueAtTime(900,s+.15);const e=ut.createGain();e.gain.setValueAtTime(.06,s),e.gain.exponentialRampToValueAtTime(.001,s+.5),t.connect(e),pr(e,ze,.4),t.start(),t.stop(s+.6)}let u0=null,f0=null,d0=null,Tl=0,wd=0,Ea=0,El=0,Sd=1,Zh=!1;function aS(){if(Zh||!ut)return;Zh=!0;const s=ut.createGain();s.gain.value=0;const t=ut.createOscillator();t.type="sine",t.frequency.value=160;const e=ut.createOscillator();e.type="sine",e.frequency.value=190;const n=ut.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(s),e.connect(n),s.connect(ze),t.start(),e.start(),u0=t,f0=e,d0=s}function cS(s){if(!ut||s<.001)return;const t=ut.currentTime,e=1800+Math.random()*800,n=ut.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const i=ut.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(s*.5,t+.01),i.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(i).connect(ze),n.start(t),n.stop(t+.12)}function lS(s,t,e,n,i,o){if(!_i||is||(aS(),!Zh))return;const r=ut.currentTime,a=i==="DEEP_NIGHT"||i==="NIGHT"?1:i==="DUSK"?.5:.3;Sd=i==="DUSK"||i==="NIGHT"?1:i==="DEEP_NIGHT"?.6:.3;const c=Math.max(.15,1-o*.7);let l=1/0;if(t&&e)for(let x=0;x<e.length;x++){const p=e[x].x-t.x,g=e[x].z-t.z,T=p*p+g*g;T<l&&(l=T)}const h=l<400?1-Math.sqrt(l)/20:0;wd+=s*2;const u=.7+.3*Math.sin(wd*Math.PI*2),f=h*.025*a*c*u;if(d0.gain.linearRampToValueAtTime(f,r+.15),Tl+=s,Tl>3+Math.random()*4){Tl=0;const x=150+Math.random()*40;u0.frequency.linearRampToValueAtTime(x,r+.5),f0.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let d=1/0;if(t&&n)for(let x=0;x<n.length;x++){const p=n[x].cx-t.x,g=n[x].cz-t.z,T=p*p+g*g;T<d&&(d=T)}const m=d<144?1-Math.sqrt(d)/12:0;if(El=m*.02*Sd*c,El>.001){if(Ea-=s,Ea<=0){cS(El);const x=1.5+(1-m)*1.5;Ea=x+Math.random()*x}}else Ea=0}function hS(s,t,e,n,i){const o=e.x-s.x,r=e.z-s.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<i*.5}function uS(s,t,e,n){const i=t.x-s.x,o=t.z-s.z,r=n?e*1.8:e;return i*i+o*o<r*r}function p0(s,t,e){let n=0,i=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],c=s.x-a.x,l=s.z-a.z,h=c*c+l*l;if(h>.01&&h<e*e){const u=Math.sqrt(h);n+=c/u/u,i+=l/u/u,o++}}return o>0&&(n/=o,i/=o),{x:n,z:i}}function m0(s,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let i=0;i<t.length;i++)e+=t[i].x,n+=t[i].z;return e/=t.length,n/=t.length,{x:e-s.x,z:n-s.z}}function fS(s,t){const e=Math.sqrt(s.x*s.x+s.z*s.z),n=ae-t;if(e<n)return{x:0,z:0};const i=(e-n)/t,o=Math.min(i*2,3);return{x:-s.x/e*o,z:-s.z/e*o}}function dS(s,t,e,n,i){let o=0,r=0;const a=Math.cos(t)*n,c=Math.sin(t)*n,l=s.x+a,h=s.z+c;for(let u=0;u<e.length;u++){const f=e[u],d=l-f.x,m=h-f.z,x=d*d+m*m,p=(f.colR||i)+1;if(x<p*p&&x>.01){const g=Math.sqrt(x),T=(p-g)/p*2;o+=d/g*T,r+=m/g*T}}return{x:o,z:r}}const Ci={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},pS={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Li=null,Ga=0,bd="";function mS(){Li=document.createElement("div"),Li.id="discovery-text",Li.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Li)}function fs(s){Ci[s]||(Ci[s]=!0,bd=pS[s],Ga=3,Li&&(Li.textContent=bd,Li.style.opacity="1"))}function gS(s,t,e,n,i,o,r,a){const c=s.x,l=s.z;if(!Ci.deer)for(let h=0;h<t.length;h++){const u=t[h].group.position.x-c,f=t[h].group.position.z-l;if(u*u+f*f<144){fs("deer");break}}if(!Ci.puffling)for(let h=0;h<e.length;h++){const u=e[h].group.position.x-c,f=e[h].group.position.z-l;if(u*u+f*f<64){fs("puffling");break}}if(!Ci.jelly)for(let h=0;h<n.length;h++){const u=n[h].group.position.x-c,f=n[h].group.position.z-l;if(u*u+f*f<100){fs("jelly");break}}if(!Ci.moth)for(let h=0;h<i.length;h++){const u=i[h].group.position.x-c,f=i[h].group.position.z-l;if(u*u+f*f<64){fs("moth");break}}if(!Ci.fairyRing)for(let h=0;h<o.length;h++){const u=o[h].x-c,f=o[h].z-l;if(u*u+f*f<16){fs("fairyRing");break}}if(!Ci.pond)for(let h=0;h<r.length;h++){const u=r[h].x-c,f=r[h].z-l;if(u*u+f*f<25){fs("pond");break}}!Ci.crystalChain&&a>=3&&fs("crystalChain")}function xS(s){Ga>0&&(Ga-=s,Ga<=.6&&Li&&(Li.style.opacity="0"))}let $h=null,Al=60;const vS={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},_S={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function MS(){$h=document.getElementById("hud")}function yS(s,t){if(!$h)return;Al=Al*.95+1/Math.max(s,.001)*.05;const e=qe==="SEEK"?"Seek the orbs...":qe==="RISING"?"The obelisk stirs...":qe==="COMPLETE"?"Convergence!":"Luminaries",n=vS[Le]||"Night",i=_S[Ro]||"Clear";$h.innerHTML="<b>"+e+"</b> · "+n+" · "+i+" · FPS:"+Math.round(Al)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let hc=null;function wS(){hc=document.getElementById("orb-hud")}function SS(){return hc}function bS(){const s=document.getElementById("overlay");s&&(s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},2500)),hc&&(hc.style.display="block")}const we=[],En=[],ie=[],hi=[],In=[],Ve=[],Bo=[],g0=[],Ir=[],gi=[],jh=[],uc=[],fc=[],wr=[],di=[],ui=[],Ne=[],Nn=[],Kh=[],Jh=[],x0=[],qi=[];let Td=0,Ed=0,Rl=0,Wn=null,ai=0;const Qh=15,tu=[];let Ad=!1;function TS(){if(Ad)return;Ad=!0;const s=new du({color:F.crystal,transparent:!0,opacity:0,blending:he,depthWrite:!1});for(let t=0;t<Qh;t++){const e=new be,n=new Float32Array(6);e.setAttribute("position",new We(n,3)),e.attributes.position.setUsage(Ae);const i=new tp(e,s.clone());i.visible=!1,ht.add(i),tu.push({line:i,geo:e,opacity:0,active:!1})}}let ds=null;function ES(){if(ds)return ds;const s=new zo(.9,1,48),t=new Y({color:F.echoBloom,transparent:!0,opacity:.5,side:Dt,depthWrite:!1,blending:he});return ds=new I(s,t),ds.rotation.x=-Math.PI/2,ds.visible=!1,ht.add(ds),ds}const He=[];function sn(s,t){for(let e=0;e<He.length;e++){const n=He[e].x-s,i=He[e].z-t;if(n*n+i*i<He[e].r2)return!0}return!1}function AS(){for(let t=0;t<dy;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=5+w()*(ae-10);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<we.length;c++){const l=we[c].x-e,h=we[c].z-n;if(l*l+h*h<9){i=!1;break}}if(i)break}if(i){const o=mw(e,n);o.position.y=Zt(e,n),we.push({group:o,x:e,z:n}),He.push({x:e,z:n,r2:4})}}for(let t=0;t<Ey;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=10+w()*(ae*.6);if(e=Math.cos(r)*a,n=Math.sin(r)*a,i=!sn(e,n),i)break}if(i){Eh(e,n,4);const o=Fw(e,n);o.group.position.y=Zt(e,n),di.push(o),He.push({x:e,z:n,r2:25})}}for(let t=0;t<Cy;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=8+w()*(ae*.6);if(e=Math.cos(r)*a,n=Math.sin(r)*a,i=!sn(e,n),i)break}if(i){Eh(e,n,3);const o=Bw(e,n);o.group.position.y=Zt(e,n),Ne.push(o),He.push({x:e,z:n,r2:16})}}for(let t=0;t<py;t++){const e=we[Math.floor(w()*we.length)],n=w()*6.28,i=1+w()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i;if(sn(o,r))continue;const a=gw(o,r);a.group.position.y=Zt(o,r),En.push(a),He.push({x:o,z:r,r2:1})}for(let t=0;t<my;t++){const e=w()*6.28,n=8+w()*ae*.6,i=Math.cos(e)*n,o=Math.sin(e)*n;if(sn(i,o))continue;const r=xw(i,o);r.group.position.y=Zt(i,o),ie.push(r),He.push({x:i,z:o,r2:4})}for(let t=0;t<gy;t++){const e=w()*6.28,n=10+w()*ae*.5,i=Math.cos(e)*n,o=Math.sin(e)*n;hi.push(Lw(i,Zt(i,o)+3+w()*5,o))}for(let t=0;t<xy;t++){const e=En[Math.floor(w()*En.length)],n=w()*6.28,i=1+w()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i;if(sn(o,r))continue;const a=Dw(o,r);a.group.position.y=Zt(o,r),a._baseY=Zt(o,r),In.push(a)}for(let t=0;t<vy;t++){const e=w()*6.28,n=12+w()*ae*.5,i=Math.cos(e)*n,o=Math.sin(e)*n;if(sn(i,o))continue;const r=Uw(i,o),a=Zt(i,o);r.group.position.y=a,r._baseY=a,Ve.push(r)}for(let t=0;t<_y;t++){const e=we[Math.floor(w()*we.length)];Bo.push(Nw(e.x,Zt(e.x,e.z)+2+w()*4,e.z))}const s=[null,F.grassPurple,F.grassBlue,F.grassTeal];for(let t=0;t<My;t++){const e=w()*6.28,n=2+w()*(ae*.9),i=Math.cos(e)*n,o=Math.sin(e)*n,r=s[Math.floor(w()*s.length)],a=2+w()*2.5,c=25+Math.floor(w()*20);if(sn(i,o))continue;const l=_w(i,o,a,c,r);l.mesh.position.y=Zt(i,o),g0.push(l),He.push({x:i,z:o,r2:a*a})}for(let t=0;t<by;t++){let e,n,i=!1;for(let o=0;o<10;o++){const r=w()*6.28,a=3+w()*(ae*.85);if(e=Math.cos(r)*a,n=Math.sin(r)*a,i=!sn(e,n),i)break}if(i){const o=Gw(e,n);o.group.position.y=Zt(e,n)-.08,uc.push(o),He.push({x:e,z:n,r2:2.25})}}for(let t=0;t<yy;t++){const e=we[Math.floor(w()*we.length)],n=w()*6.28,i=1+w()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i;if(sn(o,r))continue;const a=Mw(o,r);a.group.position.y=Zt(o,r),Ir.push(a),He.push({x:o,z:r,r2:1})}for(let t=0;t<wy;t++){const e=w()*6.28,n=3+w()*(ae*.7),i=Math.cos(e)*n,o=Math.sin(e)*n;if(sn(i,o))continue;const r=yw(i,o);r.group.position.y=Zt(i,o),gi.push(r),He.push({x:i,z:o,r2:1})}for(let t=0;t<Sy;t++){const e=w()*6.28,n=4+w()*(ae*.8),i=Math.cos(e)*n,o=Math.sin(e)*n;if(sn(i,o))continue;const r=ww(i,o);r.group.position.y=Zt(i,o),jh.push(r),He.push({x:i,z:o,r2:1})}for(let t=0;t<co;t++){let e,n,i=!1;for(let o=0;o<30;o++){const r=w()*6.28,a=20+w()*(ae*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<Nn.length;c++){const l=Nn[c].x-e,h=Nn[c].z-n;if(l*l+h*h<225){i=!1;break}}if(i)break}if(i){const o=kw(e,n);o.group.position.y=Zt(e,n)+1,o.flyY=Zt(e,n)+1,Nn.push(o)}}for(let t=0;t<vp;t++){const e=w()*6.28,n=2+w()*3,i=Math.cos(e)*n,o=Math.sin(e)*n;fc.push(zw(i,Zt(i,o)+1+w()*.5,o))}for(let t=0;t<Ty;t++){const e=w()*6.28,n=4+w()*(ae*.7),i=Math.cos(e)*n,o=Math.sin(e)*n;if(sn(i,o))continue;const r=Ew(i,o);r.group.position.y=Zt(i,o),wr.push(r),He.push({x:i,z:o,r2:1})}for(let t=0;t<Ay;t++){const e=w()*6.28,n=5+w()*ae*.6,i=Math.cos(e)*n,o=Math.sin(e)*n;ui.push(Ow(i,Zt(i,o)+.5+w()*5,o))}for(let t=0;t<Py;t++){const e=w()*6.28,n=5+w()*(ae*.7),i=Math.cos(e)*n,o=Math.sin(e)*n;if(sn(i,o))continue;const r=Rw(i,o);r.group.position.y=Zt(i,o),Kh.push(r),He.push({x:i,z:o,r2:2.25})}for(let t=0;t<Iy;t++){const e=we[Math.floor(w()*we.length)],n=w()*6.28,i=2+w()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i;if(sn(o,r))continue;const a=Cw(o,r);a.group.position.y=Zt(o,r),Jh.push(a),He.push({x:o,z:r,r2:1})}for(let t=0;t<Ly;t++){const e=w()*6.28,n=6+w()*(ae*.65),i=Math.cos(e)*n,o=Math.sin(e)*n;if(sn(i,o))continue;const r=Pw(i,o);r.group.position.y=Zt(i,o),x0.push(r),He.push({x:i,z:o,r2:2.25})}}function v0(s,t){const e=1+zi*1.5,n=As*.03,i=xo*.03,o=J.pos.x,r=J.pos.z;for(let a=0;a<we.length;a++){const c=we[a],l=c.x-o,h=c.z-r,u=l*l+h*h;if(u>12100){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),u>4900){if(c._lod!==1){const f=c.group.children;for(let d=0;d<f.length-2;d++)f[d].visible=!1;f[f.length-2].visible=!0,f[f.length-1].visible=!0,c._lod=1}continue}if(c._lod!==0){const f=c.group.children;for(let d=0;d<f.length;d++)f[d].visible=!0;c._lod=0}if(u<900){const f=c.x*.1+c.z*.13;c.group.rotation.z=Math.sin(t*.3+f)*.004*e+n*.15,c.group.rotation.x=Math.sin(t*.25+f+1)*.003*e+i*.15}}vw(t,e,n,i,o,r);for(let a=0;a<Ir.length;a++){const c=Ir[a],l=c.group.position.x-o,h=c.group.position.z-r,u=l*l+h*h;if(u>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(u>900)&&(c.group.rotation.z=Math.sin(t*.8+c.phase)*.03*e+n,c.group.rotation.x=Math.sin(t*.6+c.phase+1)*.02*e+i)}for(let a=0;a<gi.length;a++){const c=gi[a],l=c.group.position.x-o,h=c.group.position.z-r,u=l*l+h*h;if(u>1600){c.group.visible&&(c.group.visible=!1);continue}if(c.group.visible||(c.group.visible=!0),u>900)continue;const f=Math.sin(t*1+c.phase)*.5+.5;c.petalMat.emissiveIntensity=(.3+f*.5)*Me,c.group.rotation.z=Math.sin(t*.9+c.phase)*.04*e+n*.5}for(let a=0;a<jh.length;a++){const c=jh[a],l=c.group.position.x-o,h=c.group.position.z-r,u=l*l+h*h;if(u>1600){c.group.visible&&(c.group.visible=!1);continue}c.group.visible||(c.group.visible=!0),!(u>900)&&(c.group.rotation.z=Math.sin(t*1.1+c.phase)*c.swayAmp*e+n,c.group.rotation.x=Math.sin(t*.8+c.phase+2)*c.swayAmp*.5*e+i)}for(let a=0;a<Kh.length;a++){const c=Kh[a],l=Math.sin(t*1.2+c.phase)*.5+.5;c.orbMat.emissiveIntensity=(.5+l*.5)*Me,c.hazeMat.opacity=(.04+l*.04)*Me,c.group.rotation.z=Math.sin(t*.5+c.phase)*.02*e+n*.3,c.group.rotation.x=Math.sin(t*.4+c.phase+1)*.015*e+i*.3}for(let a=0;a<Jh.length;a++){const c=Jh[a];for(let l=0;l<c.podMats.length;l++){const h=Math.sin(t*1.5+c.phase+l*1.8)*.5+.5;c.podMats[l].emissiveIntensity=(.3+h*.5)*Me}c.group.rotation.z=Math.sin(t*.35+c.phase)*.01*e+n*.2}Iw(x0,s,t,Me)}function _0(s,t){for(let n=0;n<hi.length;n++){const i=hi[n],o=i.group,r=o.position.x,a=o.position.z;i._syncPhase===void 0&&(i._syncPhase=i.phase);let c=0,l=0;for(let h=0;h<hi.length;h++){if(h===n)continue;const u=hi[h],f=u.group.position.x-r,d=u.group.position.z-a;f*f+d*d<225&&(c+=u._syncPhase||u.phase,l++)}if(l>0){const h=c/l;i._syncPhase+=(h-i._syncPhase)*s*.4}}const e=Le==="DEEP_NIGHT"?2:Le==="DAWN"?-1.5:0;for(let n=0;n<hi.length;n++){const i=hi[n],o=i.group,r=o.position.x,a=o.position.z,c=i.floatY+e;if(i._stT-=s,i._stT<=0)if(Oi)i._state="display",i._stT=10+Math.random()*15;else{const d=Math.random();d<.5?(i._state="drift",i._stT=20+Math.random()*30):d<.75?(i._state="pulse",i._stT=8+Math.random()*12):(i._state="migrate",i._migrateAng=Math.random()*6.28,i._stT=15+Math.random()*20)}switch(Oi&&i._state!=="display"&&(i._state="display",i._stT=10,zs("jelly",{x:r,z:a},J.pos)),i._state){case"drift":{i.driftAng+=s*.15;const d=8+Math.sin(t*.1+i.phase)*4,m=i.homeX+Math.cos(i.driftAng)*d,x=i.homeZ+Math.sin(i.driftAng)*d;o.position.x+=(m-r)*s*.3,o.position.z+=(x-a)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1.5;break}case"pulse":{i.driftAng+=s*.08,o.position.x+=Math.cos(i.driftAng)*s*.3,o.position.z+=Math.sin(i.driftAng)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1,i._pulseSync=Math.sin(t*2+i._syncPhase)*.5+.5;break}case"migrate":{o.position.x+=Math.cos(i._migrateAng)*s*1,o.position.z+=Math.sin(i._migrateAng)*s*1,o.position.y=c+Math.sin(t*i.wobble+i.phase)*.8,o.position.x*o.position.x+o.position.z*o.position.z>ae*.8*(ae*.8)&&(i._migrateAng+=Math.PI);break}case"display":{i.driftAng+=s*.4,o.position.x+=Math.cos(i.driftAng)*s*.8,o.position.z+=Math.sin(i.driftAng)*s*.8,o.position.y=c+Math.sin(t*2+i.phase)*2,i._syncPhase+=(0-i._syncPhase)*s*2;break}}i._state==="pulse"&&Math.random()<.003&&zs("jelly",{x:r,z:a},J.pos);const l=i._syncPhase||i.phase,h=Math.sin(t*1.2+l)*.5+.5;let u=1,f=0;if(i._state==="pulse")u=1+i._pulseSync*1.5,f=i._pulseSync*.15;else if(i._state==="display"){const d=Math.sin(t*4)*.5+.5;u=1.5+d*1.2,f=.15+d*.1}else i._state==="drift"&&(u=1+h*.3);i.bellMat.emissiveIntensity=(.4+h*.8)*Me*u,i.bellMat.opacity=.35+h*.25+f,o.rotation.y+=s*.2;for(let d=2;d<o.children.length;d++)o.children[d].rotation.x=Math.sin(t*2+d+l)*.15,o.children[d].rotation.z=Math.sin(t*1.5+d*.7+l)*.1}}function M0(s,t){const e=Ie.ShiftLeft||Ie.ShiftRight||Wo,n=Le==="DAWN"?.6:Le==="NIGHT"?1.3:1,i=Le==="DAWN"?2:Le==="NIGHT"?.6:1;for(let o=0;o<In.length;o++){const r=In[o],a=r.group,c=a.position.x,l=a.position.z,h=c-J.pos.x,u=l-J.pos.z,f=h*h+u*u;if(r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const b=e?3.5:2;let S=f<b*b;if(!S)for(let y=0;y<Ve.length;y++){if(Ve[y].state!=="flee")continue;const v=Ve[y].group.position.x-c,R=Ve[y].group.position.z-l;if(v*v+R*R<25){S=!0;break}}S&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(h,u),r.hopTimer=0,zs("puff",{x:c,z:l},J.pos))}if(Oi&&r.state!=="startled"&&r.state!=="huddle"){let b=1/0,S=-1;for(let y=0;y<In.length;y++){if(y===o)continue;const v=In[y].group.position.x-c,R=In[y].group.position.z-l,U=v*v+R*R;U<b&&(b=U,S=y)}S>=0&&b>1&&(r.state="huddle",r._huddleTarget=S)}Oo>8&&f<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const d=c-r._lastTX,m=l-r._lastTZ;d*d+m*m>.25&&(r._baseY=Zt(c,l),r._lastTX=c,r._lastTZ=l);const x={x:c,z:l},p=[];for(let b=0;b<In.length;b++){if(b===o)continue;const S=In[b].group.position.x,y=In[b].group.position.z;(S-c)*(S-c)+(y-l)*(y-l)<100&&p.push({x:S,z:y})}const g=p0(x,p,1.5),T=p.length>0?m0(x,p):{x:0,z:0},M=g.x*2+T.x*.3,_=g.z*2+T.z*.3,A=Math.sqrt(M*M+_*_);switch(r.state){case"idle":{if(r.idleTimer-=s,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*s*.3,A>.1&&p.length>1&&(a.position.x+=T.x*.05*s,a.position.z+=T.z*.05*s),Math.random()<2e-4&&zs("puff",{x:c,z:l},J.pos),r.idleTimer<=0){const b=A>.2?Math.atan2(M,_):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+b*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=s;const S=r.hopTimer/1.2;if(S>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*i,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(S*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*s;const y=1-Math.sin(S*Math.PI)*.15,v=1+Math.sin(S*Math.PI)*.2;a.scale.set(y,v,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=s,r.hopTimer+=s*1.5;const b=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(b*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*s+g.x*.5*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*s+g.z*.5*s,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=s,f>225||Oo<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(J.pos.x-c,J.pos.z-l),f>9){r.hopTimer+=s;const b=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(b*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*s}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Oi){r.state="idle",r.idleTimer=2;break}const b=In[r._huddleTarget];if(b){const S=b.group.position.x-c,y=b.group.position.z-l,v=Math.sqrt(S*S+y*y);v>.5&&(a.position.x+=S/v*r.speed*.5*s,a.position.z+=y/v*r.speed*.5*s)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=s,r._blinkTimer<=0)if(r._blinkState===0){for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let b=0;b<r.eyes.length;b++)r.eyes[b].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let b=0;b<r.ears.length;b++){const S=r.ears[b];S.mesh.rotation.z=S.baseRotZ+Math.sin(t*3.5+S.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>ae*.85*(ae*.85)&&(r.wanderAng+=Math.PI)}}function y0(s,t){const e=Ie.ShiftLeft||Ie.ShiftRight||Wo;for(let n=0;n<Ve.length;n++){const i=Ve[n],o=i.group,r=o.position.x,a=o.position.z,c=r-J.pos.x,l=a-J.pos.z,h=c*c+l*l,u=Math.atan2(c,l),f=e?18:12,d=f*f,m=e?10:Ny,x=m*m,p=r-i._lastTX,g=a-i._lastTZ;p*p+g*g>.25&&(i._baseY=Zt(r,a),i._lastTX=r,i._lastTZ=a);const T=i._baseY;if(i.state!=="flee"&&i.state!=="alert"&&i.state!=="watching"){const v={x:r,z:a},R={x:J.pos.x,z:J.pos.z};h<x||uS(v,R,m,e)?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2,i._zigTimer=0,zs("deer",v,J.pos)):(h<d||hS(v,i.wanderAng,R,f,Math.PI*.5))&&(i.state="alert",i._stT=1+Math.random()*1.5,zs("deer",v,J.pos))}if(i.state!=="flee")for(let v=0;v<Ve.length;v++){if(v===n||Ve[v].state!=="flee")continue;const R=Ve[v].group.position.x-r,U=Ve[v].group.position.z-a;if(R*R+U*U<400){i.state="flee",i.wanderAng=Ve[v].wanderAng+(Math.random()-.5)*.4,i.fleeTimer=2+Math.random()*1.5,i._zigTimer=0;break}}const M=[];for(let v=0;v<Ve.length;v++){if(v===n)continue;const R=Ve[v].group.position.x,U=Ve[v].group.position.z;(R-r)*(R-r)+(U-a)*(U-a)<400&&M.push({x:R,z:U})}const _=p0({x:r,z:a},M,3),A=M.length>0?m0({x:r,z:a},M):{x:0,z:0};(i.state==="alert"||i.state==="watching")&&(i.headLook+=(u-i.wanderAng)*.3*s);let E=i.speed,b=!1;switch(i.state){case"walk":{if(b=!0,i.walkTimer-=s,i.walkTimer<=0){const R=Math.random(),U=Le==="DUSK"?.55:.4,D=Le==="DEEP_NIGHT"?.25:.1;if(R<.25)i.state="pause",i.pauseTimer=2+Math.random()*3;else if(R<U)i.state="graze",i._stT=Le==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<U+.1&&Ne.length>0){i.state="drink",i._stT=8;let z=1/0;for(let V=0;V<Ne.length;V++){const G=Ne[V].x-r,Z=Ne[V].z-a,W=G*G+Z*Z;W<z&&(z=W,i._drinkTgt=Ne[V])}}else R<U+.1+D?(i.state="rest",i._stT=Le==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(i.wanderAng+=(Math.random()-.5)*1.2,i.walkTimer=3+Math.random()*5)}if((r-i.homeX)*(r-i.homeX)+(a-i.homeZ)*(a-i.homeZ)>400){const R=Math.atan2(i.homeX-r,i.homeZ-a);i.wanderAng+=(R-i.wanderAng)*s*.5}if(M.length>0){const R=Math.atan2(A.x*.15+_.x*.8,A.z*.15+_.z*.8);i.wanderAng+=(R-i.wanderAng)*s*.3}break}case"pause":{i.pauseTimer-=s,i.headLook=Math.sin(t*.6)*.4,i.pauseTimer<=0&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}case"graze":{i._stT-=s,i.headBob=-.5,i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*4,i.headBob=0);break}case"drink":{if(i._stT-=s,i._drinkTgt){const v=i._drinkTgt.x-r,R=i._drinkTgt.z-a;Math.sqrt(v*v+R*R)>2?(i.wanderAng=Math.atan2(v,R),b=!0,E=i.speed*.7):i.headBob=-.6}i._stT<=0&&(i.state="walk",i.walkTimer=3+Math.random()*4,i.headBob=0,i._drinkTgt=null);break}case"rest":{i._stT-=s,o.position.y=Math.max(T-.3,o.position.y-s*.5),i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*3);break}case"alert":{i._stT-=s,h<x?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):i._stT<=0&&(h<f*1.2*(f*1.2)?(i.state="watching",i._stT=3+Math.random()*3):(i.state="walk",i.walkTimer=2+Math.random()*3));break}case"watching":{i._stT-=s,b=!0,E=i.speed*.3,i.wanderAng=u,h<x?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):(h>f*1.5*(f*1.5)||i._stT<=0)&&(i.state="walk",i.walkTimer=2+Math.random()*4);break}case"flee":{b=!0,E=i.speed*zy,i.fleeTimer-=s,i._zigTimer-=s,i._zigTimer<=0&&(i._zigDir*=-1,i._zigTimer=.4+Math.random()*.4),i.wanderAng=u+i._zigDir*.3;const v=dS({x:r,z:a},i.wanderAng,we,3,1.5);v.x*v.x+v.z*v.z>.01&&(i.wanderAng+=Math.atan2(v.z,v.x)*.3);const R=fS({x:r,z:a},8);(R.x!==0||R.z!==0)&&(i.wanderAng=Math.atan2(R.z,R.x)),(i.fleeTimer<=0||h>f*2*(f*2))&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}}if(b&&(o.position.x+=Math.sin(i.wanderAng)*E*s,o.position.z+=Math.cos(i.wanderAng)*E*s,i.legCycle+=s*E*3),o.position.x*o.position.x+o.position.z*o.position.z>ae*.9*(ae*.9)&&(i.wanderAng=Math.atan2(-o.position.x,-o.position.z)),i.state!=="rest"){const v=T-o.position.y;Math.abs(v)>.01?o.position.y+=Math.sign(v)*Math.min(Math.abs(v),s*2):o.position.y=T}if(o.rotation.y=i.wanderAng,i.state==="alert"||i.state==="watching"){const v=u-i.wanderAng;i.headLook+=(v*.5-i.headLook)*s*3}const y=i.headBob||0;i.neckPivot.rotation.x+=(y-i.neckPivot.rotation.x)*s*3,i.neckPivot.rotation.y+=(i.headLook-i.neckPivot.rotation.y)*s*4,b&&i.state!=="graze"&&i.state!=="drink"&&(i.neckPivot.rotation.x+=Math.sin(i.legCycle*2)*.05);for(let v=0;v<i.legPivots.length;v++){const R=i.legPivots[v];if(b){const U=R.isFront?0:Math.PI,D=R.side>0?Math.PI:0,z=Math.sin(i.legCycle+U+D)*.4*(E/i.speed);R.upper.rotation.x=z,R.lower.rotation.x=Math.max(0,-z*.6)}else i.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*s*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*s*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}i.tailPivot.rotation.x=Math.sin(t*1.5+i.phase)*.15,i.state==="flee"&&(i.tailPivot.rotation.x+=.3),i.state==="alert"?i.tailPivot.rotation.z=Math.sin(t*6)*.1:i.tailPivot.rotation.z*=.9,i.mat.emissiveIntensity=(.3+Math.sin(t*.8+i.phase)*.2)*Me,i.headLook*=.98}}function w0(s,t){for(let e=0;e<Bo.length;e++){const n=Bo[e],i=n.group,o=i.position.x,r=i.position.z;if(n._state==="patrol"){if(Math.random()<.002){let m=1/0,x=null;for(let p=0;p<ie.length;p++){const g=ie[p].x-o,T=ie[p].z-r,M=g*g+T*T;M<900&&M<m&&(m=M,x=ie[p])}for(let p=0;p<di.length;p++){if(di[p].glowIntensity<.3)continue;const g=di[p].x-o,T=di[p].z-r,M=g*g+T*T;M<900&&M<m&&(m=M,x=di[p])}x&&(n._state="attracted",n._attractTarget=x,n._stT=6+Math.random()*8,zs("moth",{x:o,z:r},J.pos))}const d=Le==="DAWN"?.005:Le==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let m=1/0,x=null;for(let p=0;p<we.length;p++){const g=we[p].x-o,T=we[p].z-r,M=g*g+T*T;M<400&&M<m&&(m=M,x=we[p])}x&&(n._state="rest",n._restTree=x,n._stT=Le==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const a=Le==="DEEP_NIGHT"?1.6:Le==="DAWN"?.5:1,c=Le==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=s*.4*a;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,m=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;i.position.x+=(d-o)*s*1.5,i.position.z+=(m-r)*s*1.5,i.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,i.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=s,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=s*.8;const d=n._attractTarget,m=Math.max(.5,n._stT*.4),x=d.x+Math.cos(n.orbitAng)*m,p=d.z+Math.sin(n.orbitAng)*m;i.position.x+=(x-o)*s*2,i.position.z+=(p-r)*s*2,i.position.y+=(2-i.position.y)*s*.5,i.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=s,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=i.position.x,n.centerZ=i.position.z;break}const d=n._restTree,m=d.x+.5-o,x=d.z+.5-r,p=Math.sqrt(m*m+x*x);p>.3&&(i.position.x+=m/p*s*2,i.position.z+=x/p*s*2),i.position.y+=(2.5-i.position.y)*s*1.5,i.rotation.y=Math.atan2(m,x);break}}const l=n._state==="rest"?.05:.4,h=Math.sin(t*n.flapSpeed+n.phase)*l;for(let d=0;d<i._wingPivots.length;d++){const m=i._wingPivots[d];m.pivot.rotation.z=h*m.side}const u=Math.sin(t*1.5+n.phase)*.5+.5,f=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+u*.6+f)*Me,n.wingMat.opacity=.45+u*.25}}function RS(s,t){const e=Ie.ShiftLeft||Ie.ShiftRight||Wo;let n=null;if(Oo>5&&(qe==="SEEK"||qe==="RISING")){let i=1/0;for(let o=0;o<Nn.length;o++){if(Nn[o].found)continue;const r=Nn[o].x-J.pos.x,a=Nn[o].z-J.pos.z,c=r*r+a*a;c<i&&(i=c,n=Nn[o])}}for(let i=0;i<fc.length;i++){const o=fc[i],r=t*.5+o.phase+i/vp*6.28,a=e?4+i*2:1.5+i*.8,c=e?3+i:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=J.pos.x+Math.cos(r)*a,o.targetY=J.pos.y-xc+c,o.targetZ=J.pos.z+Math.sin(r)*a,i===0&&n){const m=Math.min((Oo-5)/3,.6);o.targetX+=(n.x-J.pos.x)*m,o.targetZ+=(n.z-J.pos.z)*m,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*s,o.velY+=(o.targetY-o.group.position.y)*l*s,o.velZ+=(o.targetZ-o.group.position.z)*l*s,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*s*4,o.group.position.y+=o.velY*s*4,o.group.position.z+=o.velZ*s*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const u=t*(2.5+i*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(u)*f,Math.sin(u*1.5)*.08,Math.sin(u)*f);for(let m=0;m<o.tendrils.length;m++){const x=o.tendrils[m],p=Math.sin(t*3+m*2.1+o.phase)*.3,g=.08+Math.sin(t*2+m*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+p)*g,x.mesh.position.z=Math.sin(x.baseAng+p)*g,x.mesh.rotation.y=x.baseAng+p,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+m)*.2}for(let m=0;m<o.embers.length;m++){const x=(m+1)*.08;o.embers[m].position.y=-.06-x+Math.sin(t*4+m*1.4+o.phase)*.03,o.embers[m].position.x=Math.sin(t*2.5+m*2+o.phase)*.06,o.embers[m].material.opacity=.2+Math.sin(t*5+m*1.7)*.15}o.facet.rotation.y+=s*1.5,o.facet.rotation.x+=s*.7,o.halo.rotation.z+=s*.3,o.halo2.rotation.y+=s*.2}}function CS(s,t){for(let e=0;e<di.length;e++){const n=di[e],i=n.x-J.pos.x,o=n.z-J.pos.z,a=i*i+o*o<(yh+.5)*(yh+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*s*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Me,a&&J.vel.y>0&&J.vel.y<=Ka+.5&&(J.vel.y=Ka+Dy,n.glowIntensity=1.5,rS());const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let h=0;h<n.spores.length;h++){const u=n.spores[h];u.drift+=s*.3,u.mesh.position.y+=u.speed*s*(.5+n.glowIntensity),u.mesh.position.x=u.baseX+Math.sin(t*.8+u.drift)*.15,u.mesh.position.z=u.baseZ+Math.cos(t*.6+u.drift)*.12,u.mesh.position.y>.8&&(u.mesh.position.y=.03),u.mesh.scale.setScalar(.6+Math.sin(t*2+h)*.4)}for(let h=0;h<n.glowWorms.length;h++){const u=Math.sin(t*1.5+h*1.3+n.phase)*.5+.5;n.glowWorms[h].material.opacity=.1+u*.4+n.glowIntensity*.3}}}function PS(s,t){for(let e=0;e<ui.length;e++){const n=ui[e];if(n.popped){if(n.popTimer-=s,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=w()*6.28,u=8+w()*ae*.5;n.homeX=Math.cos(h)*u,n.homeZ=Math.sin(h)*u,n.floatY=.5+w()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=s*.2;const i=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(i-n.group.position.x)*s*.5,n.group.position.z+=(o-n.group.position.z)*s*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-J.pos.x,c=n.group.position.y-J.pos.y,l=n.group.position.z-J.pos.z;a*a+c*c+l*l<td*td*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,u1(n.group.position.x,n.group.position.y,n.group.position.z,6),oS(n.group.position,J.pos))}}function IS(s,t){const e=yr();for(let n=0;n<Ne.length;n++){const i=Ne[n],o=.015+e*.01;for(let u=0;u<i.pads.length;u++)i.pads[u].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+i.pads[u].phase)*o;const r=e*.08;i.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+i.phase)*.1)*Me;const a=Math.sin(t*1.2+i.phase)*.5+.5;i.flMat.emissiveIntensity=(.3+a*.5)*Me;const c=.25+e*.2,l=.12+e*.08;for(let u=0;u<i.ripples.length;u++){const f=i.ripples[u],d=(t*c+f.phase)%1,m=.2+d*i.pondR*.8;f.mesh.scale.setScalar(m),f.mesh.material.opacity=(1-d)*l}const h=1+e*.5;for(let u=0;u<i.tadpoles.length;u++){const f=i.tadpoles[u];f.ang+=f.speed*h*s;const d=Math.cos(f.ang)*f.orbR,m=Math.sin(f.ang)*f.orbR;f.body.position.x=d,f.body.position.z=m,f.body.rotation.y=f.ang+Math.PI/2;const x=.02;f.tail.position.x=d-Math.cos(f.ang)*x,f.tail.position.z=m-Math.sin(f.ang)*x,f.tail.rotation.y=f.ang,f.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+u*3)*.4}}}function LS(s,t){if(Rl-=s,Rl<=0){Rl=.5;for(let o=0;o<ie.length;o++){const r=ie[o],a=r.x-J.pos.x,c=r.z-J.pos.z;if(a*a+c*c<36){Wn={x:r.x,z:r.z},ai=0;break}}}const e=ES();if(!Wn){e.visible=!1;return}if(ai+=s*12,ai>30){Wn=null,ai=0,e.visible=!1;return}e.visible=!0,e.position.set(Wn.x,.15,Wn.z),e.scale.setScalar(ai),e.material.opacity=(1-ai/30)*.45;const n=ai,i=4;for(let o=0;o<En.length;o++){const r=En[o],a=r.x-Wn.x,c=r.z-Wn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+h*2)*Me)}}for(let o=0;o<gi.length;o++){const r=gi[o],a=r.group.position.x-Wn.x,c=r.group.position.z-Wn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+h*1.5)*Me)}}}function DS(s,t){const e=J.pos.x,n=J.pos.z,i=yr(),o=Oi?.6:i>.3?i*.4:0;for(let l=0;l<gi.length;l++){const h=gi[l],u=h.group.position.x,f=h.group.position.z,d=u-e,m=f-n,p=d*d+m*m<16?1:0;h._react=h._react||0,h._react+=(p-h._react)*s*(p>0?4:1.5);const g=(1+h._react*.15)*(1-o*.12),T=(1+h._react*.05)*(1-o*.15);h.group.scale.set(g,T,g),h.petalMat.emissiveIntensity+=h._react*.6*Me*(1-o*.4)}for(let l=0;l<En.length;l++){const h=En[l],u=h.x-e,f=h.z-n,m=u*u+f*f<4?1:0;h._touch=h._touch||0,h._touch+=(m-h._touch)*s*(m>0?6:1.5);const x=i*.4;h.capMat.emissiveIntensity+=(h._touch*1.5+x)*Me;const p=1+h._touch*.08;h.group.scale.set(p,1+h._touch*.04,p)}for(let l=0;l<Ir.length;l++){const h=Ir[l],u=h.group.position.x,f=h.group.position.z,d=u-e,m=f-n,p=d*d+m*m<2.25?.65:1;h._curl=h._curl===void 0?1:h._curl,h._curl+=(p-h._curl)*s*(p<1?4:1.5),h.group.scale.set(1+(1-h._curl)*.3,h._curl,1+(1-h._curl)*.3)}TS();const r=Ro==="FOG_BANK"?.5:1;let a=0,c=0;for(let l=0;l<ie.length;l++){const h=ie[l],u=h.x-e,f=h.z-n;if(u*u+f*f<36)for(let d=0;d<ie.length;d++){if(l===d)continue;const m=ie[d],x=h.x-m.x,p=h.z-m.z,g=x*x+p*p;if(g<400){a++;const T=(1-Math.sqrt(g)/20)*.8*r;if(m.mat.emissiveIntensity+=T*Me,c<Qh){const M=tu[c],_=M.geo.attributes.position.array,A=1,E=1;_[0]=h.x,_[1]=A,_[2]=h.z,_[3]=m.x,_[4]=E,_[5]=m.z,M.geo.attributes.position.needsUpdate=!0,M.geo.computeBoundingSphere(),M.active=!0;const b=Math.sin(t*3+l*1.5+d*.7)*.3+.5;M.opacity=T*b*Me,M.line.material.opacity=M.opacity,M.line.visible=!0,c++}}}}for(let l=c;l<Qh;l++){const h=tu[l];h.line.visible&&(h.opacity*=.85,h.line.material.opacity=h.opacity,h.opacity<.01&&(h.line.visible=!1))}return a}let Aa="EXPLORE",Cl=0,Pl=0;function US(s,t){let e=!1;for(let f=0;f<ie.length;f++){const d=ie[f].x-J.pos.x,m=ie[f].z-J.pos.z;if(d*d+m*m<64){e=!0;break}}Aa=e?"NEAR_CRYSTAL":"EXPLORE",Cl+=s;const n=yr(),i=Math.max(.2,1-n*.8),o=(Aa==="NEAR_CRYSTAL"?.08:.25)/i,r=Math.floor((Aa==="NEAR_CRYSTAL"?120:100)*i);if(Cl>o&&(Cl=0,Hp(0,t)<r))if(Aa==="NEAR_CRYSTAL")for(let d=0;d<ie.length;d++){const m=ie[d].x-J.pos.x,x=ie[d].z-J.pos.z;m*m+x*x<100&&Na(ie[d].x,Zt(ie[d].x,ie[d].z)+1,ie[d].z,3+Math.random()*4)}else if(Math.random()<.3&&gi.length>0){const d=gi[Math.floor(Math.random()*gi.length)];if(d._react>.3){const m=d.group.position.x,x=d.group.position.z;Na(m+(Math.random()-.5)*2,Zt(m,x)+.5,x+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,m=5+Math.random()*25,x=J.pos.x+Math.cos(d)*m,p=J.pos.z+Math.sin(d)*m;Na(x,Zt(x,p),p,6+Math.random()*10)}if(Pl+=s,Pl>.2){Pl=0;for(let f=0;f<En.length;f++){const d=En[f],m=d.x-J.pos.x,x=d.z-J.pos.z;m*m+x*x<200&&Math.random()<.15&&n1(d.x,.6*d.group.scale.x,d.z)}}for(let f=0;f<En.length;f++){const d=En[f],m=d.x-J.pos.x,x=d.z-J.pos.z;if(m*m+x*x>2500){d.group.visible&&(d.group.visible=!1);continue}d.group.visible||(d.group.visible=!0);const g=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+g*.8)*Me}for(let f=0;f<ie.length;f++){const d=ie[f],m=Math.sin(t*.6+d.phase)*.5+.5;d.mat.emissiveIntensity=(1+m*1.5)*Me,d.group.children[0].rotation.y+=s*.15,d.light&&(d.light.intensity=(.3+m*.4)*Me)}if(!qi.length)for(let f=0;f<ie.length;f++)qi.push({idx:f,dist:0});const a=J.pos.x-Td,c=J.pos.z-Ed;if(a*a+c*c>1){Td=J.pos.x,Ed=J.pos.z;for(let f=0;f<ie.length;f++){const d=ie[f],m=d.x-J.pos.x,x=d.z-J.pos.z;qi[f].idx=f,qi[f].dist=m*m+x*x}qi.sort((f,d)=>f.dist-d.dist)}for(let f=0;f<gs.length;f++)if(f<qi.length&&qi[f].dist<2500){const d=ie[qi[f].idx],m=Math.sin(t*.6+d.phase)*.5+.5;gs[f].position.set(d.x,1.5,d.z),gs[f].intensity=(1.5+m*2)*Me,gs[f].distance=16,gs[f].color.setHex(F.crystal)}else gs[f].intensity=0;if(zi>.8&&Math.random()<.005)for(let f=0;f<wr.length;f++){const d=wr[f];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let m=0;m<8;m++)Lp(d.x,d.h+.05,d.z);for(let m=2;m<d.group.children.length;m++)d.group.children[m].visible=!1;d.regrowTimer=15+Math.random()*10}}const l=zi>.3?(zi-.3)*.02:0,h=Oi?.03:0;if(Math.random()<l+h)for(let f=0;f<we.length;f++){const d=we[f],m=d.x-J.pos.x,x=d.z-J.pos.z;if(m*m+x*x<900&&Math.random()<.15){const p=(d.group.children[0]?d.group.children[0].geometry.parameters.height*.7:6)+d.group.position.y;m1(d.x,p,d.z);break}}_0(s,t),M0(s,t),y0(s,t),w0(s,t),Cp(s,t),v0(s,t);for(let f=0;f<uc.length;f++){const d=uc[f],m=d.x||d.group.position.x,x=d.z||d.group.position.z,p=m-J.pos.x,g=x-J.pos.z,T=p*p+g*g;if(T>2500){d.group.visible&&(d.group.visible=!1);continue}if(d.group.visible||(d.group.visible=!0),!d.sparkles||T>400)continue;let M=0;for(let y=0;y<ie.length;y++){const v=ie[y].x-m,R=ie[y].z-x,U=v*v+R*R;U<100&&(M=Math.max(M,(1-Math.sqrt(U)/10)*.6))}const _=m-J.pos.x,A=x-J.pos.z,E=_*_+A*A,b=E<25?(1-Math.sqrt(E)/5)*.3:0;let S=0;if(Wn&&ai>0){const y=m-Wn.x,v=x-Wn.z,R=Math.sqrt(y*y+v*v);Math.abs(R-ai)<3&&(S=(1-Math.abs(R-ai)/3)*.8)}for(let y=0;y<d.sparkles.length;y++){const v=Math.sin(t*4+f*2.3+y*1.7)*.35;d.sparkles[y].material.opacity=.15+v+M+b+S}d.mossMat&&b>0&&(d.mossMat.emissiveIntensity=.05+b*.4*Math.sin(t*2+f)*.5+.5)}RS(s,t),Aw(wr,s,t,J.pos),CS(s,t),PS(s,t),IS(s,t),qp(s,t,J.pos),Tw(s,t),g1(s,t),c1(s),f1(s),LS(s);const u=DS(s,t);if(P1(s,t),Jw(t),J.onGround&&J.vel.x*J.vel.x+J.vel.z*J.vel.z>.5){const d=Math.atan2(J.vel.x,J.vel.z),m=Ie.ShiftLeft||Ie.ShiftRight||Wo;_1(J.pos.x,J.pos.z,d,m)}M1(s,yr()),lS(s,J.pos,Ne,g0,Le,yr()),sS(s),gS(J.pos,Ve,In,hi,Bo,di,Ne,u),xS(s)}let ke=0,eu=!1;function NS(){eu||(eu=!0,Yy(!0),bS())}function S0(){requestAnimationFrame(S0);const s=Math.min(_p.getDelta(),.1);ke+=s,N1(s);const t=G1(s,ke,J.pos);if(V1(s,J.pos,t,As,xo),hw(s,ke,Le,Me,Ro),li>0&&(Tu.intensity+=li*.8,ht.background.r=Math.min(ht.background.r+li*.08,.25),ht.background.g=Math.min(ht.background.g+li*.08,.25),ht.background.b=Math.min(ht.background.b+li*.12,.35)),Q1(s,zi,t,Oi,li,Le,J.pos,Ne),i1(As,xo),bw(As,xo,zi),d1(As,xo),!eu){fn.position.set(0,xc,0),fn.rotation.order="YXZ",fn.rotation.y+=s*.08,fn.rotation.x=0;for(let e=0;e<En.length;e++){const n=En[e],i=Math.sin(ke*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+i*.8)*Me}for(let e=0;e<ie.length;e++){const n=ie[e];n.mat.emissiveIntensity=(1+Math.sin(ke*.6+n.phase)*.5*1.5+.75)*Me}_0(s,ke),M0(s,ke),y0(s,ke),w0(s,ke),Cp(s,ke),v0(s,ke),qp(s,ke,J.pos);for(let e=0;e<ui.length;e++)ui[e].popped||(ui[e].group.position.y=ui[e].floatY+Math.sin(ke*.6+ui[e].phase)*ui[e].bobAmp);for(let e=0;e<Ne.length;e++)for(let n=0;n<Ne[e].pads.length;n++)Ne[e].pads[n].mesh.position.y=.05+Math.sin(ke*.8+Ne[e].pads[n].phase)*.015;for(let e=0;e<Nn.length;e++){const n=Nn[e],i=Math.sin(ke*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(ke*.8+n.phase)*.3,n.glowMat.opacity=.3+i*.4}id();return}pw(s),US(s,ke),Hp(s,ke),s1(s),fn.position.copy(J.pos),fn.position.y+=Pp,fn.rotation.order="YXZ",fn.rotation.y=Rr,fn.rotation.x=Ls,yS(s,J.pos),id()}try{Eh(0,0,5),iw(),U1({scene:ht,moon:Zn,moon2:Eu,hemiLight:Tu,playerLight:Au}),AS();const s=tw();fw(we,uc),dw(ud),uw(t=>{let e=!1;for(let n=0;n<Ne.length;n++){const i=Ne[n].x-J.pos.x,o=Ne[n].z-J.pos.z;if(i*i+o*o<16){e=!0;break}}eS(t,e),Math.random()<.4&&ud(J.pos.x,J.pos.z,1)},()=>nS(),t=>iS(t)),k1(),H1(),Qw(150),e1(60),Xy(),o1(Ry),a1(20),Sw(40),h1(30),p1(50),v1(),lw(),Yw(),jw(),Kw(),J1(),mS(),MS(),wS(),C1({orbs:Nn,obeliskGroup:Hw(),obeliskMat:Vw(),obeliskGlowMat:Ww(),pinnacleOrb:Xw(),pinnacleRings:qw(),moatMesh:Zw(),moatMat:$w(),rainbowArcs:Pr,player:J,makeLaser:y1,orbHudEl:SS(),deers:Ve,puffs:In,jellies:hi,moths:Bo,trees:we,groundMesh:s}),qy(NS);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*ae*.7,i=Math.cos(e)*n,o=Math.sin(e)*n;Na(i,Zt(i,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+we.length+" mush="+En.length+" crystals="+ie.length+" orbs="+Nn.length+" creatures="+(hi.length+In.length+Ve.length+Bo.length)+" wisps="+fc.length+" dandelions="+wr.length+" fairyRings="+di.length+" bubbles="+ui.length+" ponds="+Ne.length+" scene="+ht.children.length),S0()}catch(s){console.error("INIT FAILED:",s),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(s.stack||s.message)+"</pre></div>"}
