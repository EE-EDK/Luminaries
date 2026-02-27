(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="172",Qp=0,Mu=1,t0=2,id=1,sd=2,vi=3,$i=0,un=1,Ut=2,Ei=0,lo=1,pe=2,vu=3,yu=4,e0=5,ps=100,n0=101,i0=102,s0=103,o0=104,r0=200,a0=201,c0=202,l0=203,ul=204,fl=205,h0=206,u0=207,f0=208,d0=209,p0=210,m0=211,g0=212,x0=213,_0=214,dl=0,pl=1,ml=2,vo=3,gl=4,xl=5,_l=6,Ml=7,od=0,M0=1,v0=2,Zi=0,y0=1,w0=2,S0=3,rd=4,b0=5,T0=6,E0=7,ad=300,yo=301,wo=302,vl=303,yl=304,Ka=306,Aa=1e3,gs=1001,wl=1002,Ln=1003,A0=1004,Rr=1005,li=1006,rc=1007,xs=1008,Pi=1009,cd=1010,ld=1011,hr=1012,Nh=1013,Ss=1014,hi=1015,Ai=1016,zh=1017,Fh=1018,So=1020,hd=35902,ud=1021,fd=1022,Kn=1023,dd=1024,pd=1025,ho=1026,bo=1027,Oh=1028,Bh=1029,md=1030,kh=1031,Gh=1033,da=33776,pa=33777,ma=33778,ga=33779,Sl=35840,bl=35841,Tl=35842,El=35843,Al=36196,Rl=37492,Cl=37496,Pl=37808,Il=37809,Ll=37810,Dl=37811,Ul=37812,Nl=37813,zl=37814,Fl=37815,Ol=37816,Bl=37817,kl=37818,Gl=37819,Hl=37820,Vl=37821,xa=36492,Wl=36494,Xl=36495,gd=36283,Yl=36284,ql=36285,Zl=36286,R0=3200,C0=3201,xd=0,P0=1,Wi="",hn="srgb",To="srgb-linear",Ra="linear",de="srgb",Us=7680,wu=519,I0=512,L0=513,D0=514,_d=515,U0=516,N0=517,z0=518,F0=519,Su=35044,Le=35048,bu="300 es",bi=2e3,Ca=2001;class Io{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ac=Math.PI/180,$l=180/Math.PI;function Lo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[s&255]+qe[s>>8&255]+qe[s>>16&255]+qe[s>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Zt(s,t,e){return Math.max(t,Math.min(e,s))}function O0(s,t){return(s%t+t)%t}function cc(s,t,e){return(1-e)*s+e*t}function No(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,i,o,r,a,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],b=i[1],v=i[4],M=i[7],A=i[2],E=i[5],S=i[8];return o[0]=r*_+a*b+c*A,o[3]=r*p+a*v+c*E,o[6]=r*m+a*M+c*S,o[1]=l*_+h*b+f*A,o[4]=l*p+h*v+f*E,o[7]=l*m+h*M+f*S,o[2]=u*_+d*b+g*A,o[5]=u*p+d*v+g*E,o[8]=u*m+d*M+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*r-a*l,u=a*c-h*o,d=l*o-r*c,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*r)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*o-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lc.makeScale(t,e)),this}rotate(t){return this.premultiply(lc.makeRotation(-t)),this}translate(t,e){return this.premultiply(lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lc=new Wt;function Md(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function B0(){const s=Pa("canvas");return s.style.display="block",s}const Tu={};function Qs(s){s in Tu||(Tu[s]=!0,console.warn(s))}function k0(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function G0(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function H0(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Eu=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V0(){const s={enabled:!0,workingColorSpace:To,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===de&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(i.r=uo(i.r),i.g=uo(i.g),i.b=uo(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wi?Ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[To]:{primaries:t,whitePoint:n,transfer:Ra,toXYZ:Eu,fromXYZ:Au,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Eu,fromXYZ:Au,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),s}const re=V0();function Ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class W0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ns===void 0&&(Ns=Pa("canvas")),Ns.width=t.width,Ns.height=t.height;const n=Ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Ri(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let X0=0;class vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Lo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(hc(i[r].image)):o.push(hc(i[r]))}else o=hc(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?W0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y0=0;class Je extends Io{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=gs,i=gs,o=li,r=xs,a=Kn,c=Pi,l=Je.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Lo(),this.name="",this.source=new vd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case gs:t.x=t.x<0?0:1;break;case wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case gs:t.y=t.y<0?0:1;break;case wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=ad;Je.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,i=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,M=(d+1)/2,A=(m+1)/2,E=(h+u)/4,S=(f+_)/4,T=(g+p)/4;return v>M&&v>A?v<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(v),i=E/n,o=S/n):M>A?M<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(M),n=E/i,o=T/i):A<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(A),n=S/o,i=T/o),this.set(n,i,o,e),this}let b=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-_)/b,this.z=(u-h)/b,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q0 extends Io{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new vd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends q0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yd extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z0 extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3];const u=o[r+0],d=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==u||l!==d||h!==g){let p=1-a;const m=c*u+l*d+h*g+f*_,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),E=Math.atan2(A,m*b);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}const M=a*b;if(c=c*p+u*M,l=l*p+d*M,h=h*p+g*M,f=f*p+_*M,p===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=A,l*=A,h*=A,f*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=o[r],u=o[r+1],d=o[r+2],g=o[r+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),f=a(o/2),u=c(n/2),d=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(o-l)*d,this._z=(r-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(o+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(o-l)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(r-i)/d,this._x=(o+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=o*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ru.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),f=2*(o*n-r*e);return this.x=e+c*l+r*f-a*h,this.y=n+c*h+a*l-o*f,this.z=i+c*f+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new N,Ru=new _r;class As{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,qn):qn.fromBufferAttribute(o,r),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),Pr.subVectors(this.max,zo),zs.subVectors(t.a,zo),Fs.subVectors(t.b,zo),Os.subVectors(t.c,zo),Ui.subVectors(Fs,zs),Ni.subVectors(Os,Fs),Ji.subVectors(zs,Os);let e=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-Ji.z,Ji.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,Ji.z,0,-Ji.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-Ji.y,Ji.x,0];return!fc(e,zs,Fs,Os,Pr)||(e=[1,0,0,0,1,0,0,0,1],!fc(e,zs,Fs,Os,Pr))?!1:(Ir.crossVectors(Ui,Ni),e=[Ir.x,Ir.y,Ir.z],fc(e,zs,Fs,Os,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mi=[new N,new N,new N,new N,new N,new N,new N,new N],qn=new N,Cr=new As,zs=new N,Fs=new N,Os=new N,Ui=new N,Ni=new N,Ji=new N,zo=new N,Pr=new N,Ir=new N,Qi=new N;function fc(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Qi.fromArray(s,o);const a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $0=new As,Fo=new N,dc=new N;class Rs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$0.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const e=Fo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(dc)),this.expandByPoint(Fo.copy(t.center).sub(dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new N,pc=new N,Lr=new N,zi=new N,mc=new N,Dr=new N,gc=new N;class Hh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){pc.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(pc);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Lr),a=zi.dot(this.direction),c=-zi.dot(Lr),l=zi.lengthSq(),h=Math.abs(1-r*r);let f,u,d,g;if(h>0)if(f=r*c-a,u=r*a-c,g=o*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*a)+u*(r*f+u+2*c)+l}else u=o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u=-o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-r*o+a)),u=f>0?-o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-o,-c),o),d=u*(u+2*c)+l):(f=Math.max(0,-(r*o+a)),u=f>0?o:Math.min(Math.max(-o,-c),o),d=-f*f+u*(u+2*c)+l);else u=r>0?-o:o,f=Math.max(0,-(r*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(pc).addScaledVector(Lr,u),d}intersectSphere(t,e){gi.subVectors(t.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,i,o){mc.subVectors(e,t),Dr.subVectors(n,t),gc.crossVectors(mc,Dr);let r=this.direction.dot(gc),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;zi.subVectors(this.origin,t);const c=a*this.direction.dot(Dr.crossVectors(zi,Dr));if(c<0)return null;const l=a*this.direction.dot(mc.cross(zi));if(l<0||c+l>r)return null;const h=-a*zi.dot(gc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,i,o,r,a,c,l,h,f,u,d,g,_,p){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,f,u,d,g,_,p)}set(t,e,n,i,o,r,a,c,l,h,f,u,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=o,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Bs.setFromMatrixColumn(t,0).length(),o=1/Bs.setFromMatrixColumn(t,1).length(),r=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const u=r*h,d=r*f,g=a*h,_=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+d*l,e[10]=r*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,_=l*f;e[0]=u+_*a,e[4]=g*a-d,e[8]=r*l,e[1]=r*f,e[5]=r*h,e[9]=-a,e[2]=d*a-g,e[6]=_+u*a,e[10]=r*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,_=l*f;e[0]=u-_*a,e[4]=-r*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const u=r*h,d=r*f,g=a*h,_=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+_,e[1]=c*f,e[5]=_*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,d=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*f,e[8]=g*f+d,e[1]=f,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-_*f}else if(t.order==="XZY"){const u=r*c,d=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+_,e[5]=r*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(j0,t,K0)}lookAt(t,e,n){const i=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Fi.crossVectors(n,En),Fi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Fi.crossVectors(n,En)),Fi.normalize(),Ur.crossVectors(En,Fi),i[0]=Fi.x,i[4]=Ur.x,i[8]=En.x,i[1]=Fi.y,i[5]=Ur.y,i[9]=En.y,i[2]=Fi.z,i[6]=Ur.z,i[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],v=n[7],M=n[11],A=n[15],E=i[0],S=i[4],T=i[8],y=i[12],x=i[1],R=i[5],U=i[9],D=i[13],z=i[2],H=i[6],V=i[10],$=i[14],W=i[3],lt=i[7],ft=i[11],bt=i[15];return o[0]=r*E+a*x+c*z+l*W,o[4]=r*S+a*R+c*H+l*lt,o[8]=r*T+a*U+c*V+l*ft,o[12]=r*y+a*D+c*$+l*bt,o[1]=h*E+f*x+u*z+d*W,o[5]=h*S+f*R+u*H+d*lt,o[9]=h*T+f*U+u*V+d*ft,o[13]=h*y+f*D+u*$+d*bt,o[2]=g*E+_*x+p*z+m*W,o[6]=g*S+_*R+p*H+m*lt,o[10]=g*T+_*U+p*V+m*ft,o[14]=g*y+_*D+p*$+m*bt,o[3]=b*E+v*x+M*z+A*W,o[7]=b*S+v*R+M*H+A*lt,o[11]=b*T+v*U+M*V+A*ft,o[15]=b*y+v*D+M*$+A*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+o*c*f-i*l*f-o*a*u+n*l*u+i*a*d-n*c*d)+_*(+e*c*d-e*l*u+o*r*u-i*r*d+i*l*h-o*c*h)+p*(+e*l*f-e*a*d-o*r*f+n*r*d+o*a*h-n*l*h)+m*(-i*a*h-e*c*f+e*a*u+i*r*f-n*r*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],b=f*p*l-_*u*l+_*c*d-a*p*d-f*c*m+a*u*m,v=g*u*l-h*p*l-g*c*d+r*p*d+h*c*m-r*u*m,M=h*_*l-g*f*l+g*a*d-r*_*d-h*a*m+r*f*m,A=g*f*c-h*_*c-g*a*u+r*_*u+h*a*p-r*f*p,E=e*b+n*v+i*M+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/E;return t[0]=b*S,t[1]=(_*u*o-f*p*o-_*i*d+n*p*d+f*i*m-n*u*m)*S,t[2]=(a*p*o-_*c*o+_*i*l-n*p*l-a*i*m+n*c*m)*S,t[3]=(f*c*o-a*u*o-f*i*l+n*u*l+a*i*d-n*c*d)*S,t[4]=v*S,t[5]=(h*p*o-g*u*o+g*i*d-e*p*d-h*i*m+e*u*m)*S,t[6]=(g*c*o-r*p*o-g*i*l+e*p*l+r*i*m-e*c*m)*S,t[7]=(r*u*o-h*c*o+h*i*l-e*u*l-r*i*d+e*c*d)*S,t[8]=M*S,t[9]=(g*f*o-h*_*o-g*n*d+e*_*d+h*n*m-e*f*m)*S,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*m+e*a*m)*S,t[11]=(h*a*o-r*f*o-h*n*l+e*f*l+r*n*d-e*a*d)*S,t[12]=A*S,t[13]=(h*_*i-g*f*i+g*n*u-e*_*u-h*n*p+e*f*p)*S,t[14]=(g*a*i-r*_*i-g*n*c+e*_*c+r*n*p-e*a*p)*S,t[15]=(r*f*i-h*a*i+h*n*c-e*f*c-r*n*u+e*a*u)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,f=a+a,u=o*l,d=o*h,g=o*f,_=r*h,p=r*f,m=a*f,b=c*l,v=c*h,M=c*f,A=n.x,E=n.y,S=n.z;return i[0]=(1-(_+m))*A,i[1]=(d+M)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(d-M)*E,i[5]=(1-(u+m))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(g+v)*S,i[9]=(p-b)*S,i[10]=(1-(u+_))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Bs.set(i[0],i[1],i[2]).length();const r=Bs.set(i[4],i[5],i[6]).length(),a=Bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Zn.copy(this);const l=1/o,h=1/r,f=1/a;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,e.setFromRotationMatrix(Zn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=bi){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let d,g;if(a===bi)d=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Ca)d=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=bi){const c=this.elements,l=1/(e-t),h=1/(n-i),f=1/(r-o),u=(e+t)*l,d=(n+i)*h;let g,_;if(a===bi)g=(r+o)*f,_=-2*f;else if(a===Ca)g=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bs=new N,Zn=new fe,j0=new N(0,0,0),K0=new N(1,1,1),Fi=new N,Ur=new N,En=new N,Cu=new fe,Pu=new _r;class fi{constructor(t=0,e=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class wd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J0=0;const Iu=new N,ks=new _r,xi=new fe,Nr=new N,Oo=new N,Q0=new N,tm=new _r,Lu=new N(1,0,0),Du=new N(0,1,0),Uu=new N(0,0,1),Nu={type:"added"},em={type:"removed"},Gs={type:"childadded",child:null},xc={type:"childremoved",child:null};class ge extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new N,e=new fi,n=new _r,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Wt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Uu,t)}translateOnAxis(t,e){return Iu.copy(t).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Oo,Nr,this.up):xi.lookAt(Nr,Oo,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(xi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(em),xc.child=t,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nu),Gs.child=t,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,Q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),f=r(t.shapes),u=r(t.skeletons),d=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new N(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new N,_i=new N,_c=new N,Mi=new N,Hs=new N,Vs=new N,zu=new N,Mc=new N,vc=new N,yc=new N,wc=new me,Sc=new me,bc=new me;class jn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$n.subVectors(t,e),i.cross($n);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){$n.subVectors(i,e),_i.subVectors(n,e),_c.subVectors(t,e);const r=$n.dot($n),a=$n.dot(_i),c=$n.dot(_c),l=_i.dot(_i),h=_i.dot(_c),f=r*l-a*a;if(f===0)return o.set(0,0,0),null;const u=1/f,d=(l*c-a*h)*u,g=(r*h-a*c)*u;return o.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Mi.x),c.addScaledVector(r,Mi.y),c.addScaledVector(a,Mi.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return wc.setScalar(0),Sc.setScalar(0),bc.setScalar(0),wc.fromBufferAttribute(t,e),Sc.fromBufferAttribute(t,n),bc.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(wc,o.x),r.addScaledVector(Sc,o.y),r.addScaledVector(bc,o.z),r}static isFrontFacing(t,e,n,i){return $n.subVectors(n,e),_i.subVectors(t,e),$n.cross(_i).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),$n.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return jn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return jn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return jn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return jn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return jn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Hs.subVectors(i,n),Vs.subVectors(o,n),Mc.subVectors(t,n);const c=Hs.dot(Mc),l=Vs.dot(Mc);if(c<=0&&l<=0)return e.copy(n);vc.subVectors(t,i);const h=Hs.dot(vc),f=Vs.dot(vc);if(h>=0&&f<=h)return e.copy(i);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Hs,r);yc.subVectors(t,o);const d=Hs.dot(yc),g=Vs.dot(yc);if(g>=0&&d<=g)return e.copy(o);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Vs,a);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return zu.subVectors(o,i),a=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(zu,a);const m=1/(p+_+u);return r=_*m,a=u*m,e.copy(n).addScaledVector(Hs,r).addScaledVector(Vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Tc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=O0(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Tc(r,o,t+1/3),this.g=Tc(r,o,t),this.b=Tc(r,o,t-1/3)}return re.toWorkingColorSpace(this,i),this}setStyle(t,e=hn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=Sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=uo(t.r),this.g=uo(t.g),this.b=uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return re.fromWorkingColorSpace(Ze.copy(this),t),Math.round(Zt(Ze.r*255,0,255))*65536+Math.round(Zt(Ze.g*255,0,255))*256+Math.round(Zt(Ze.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ze.copy(this),e);const n=Ze.r,i=Ze.g,o=Ze.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const f=r-a;switch(l=h<=.5?f/(r+a):f/(2-r-a),r){case n:c=(i-o)/f+(i<o?6:0);break;case i:c=(o-n)/f+2;break;case o:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=hn){re.fromWorkingColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,i=Ze.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(zr);const n=cc(Oi.h,zr.h,e),i=cc(Oi.s,zr.s,e),o=cc(Oi.l,zr.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new ot;ot.NAMES=Sd;let nm=0;class Cs extends Io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=lo,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ul&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Z extends Cs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new N,Fr=new dt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Su,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=No(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=No(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=No(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=No(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=No(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),i=dn(i,this.array),o=dn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Su&&(t.usage=this.usage),t}}class bd extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Td extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let im=0;const zn=new fe,Ec=new ge,Ws=new N,An=new As,Bo=new As,Fe=new N;class be extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Md(t)?Td:bd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Wt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,n){return zn.makeTranslation(t,e,n),this.applyMatrix4(zn),this}scale(t,e,n){return zn.makeScale(t,e,n),this.applyMatrix4(zn),this}lookAt(t){return Ec.lookAt(t),Ec.updateMatrix(),this.applyMatrix4(Ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];An.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(An.min,Bo.min),An.expandByPoint(Fe),Fe.addVectors(An.max,Bo.max),An.expandByPoint(Fe)):(An.expandByPoint(Bo.min),An.expandByPoint(Bo.max))}An.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Fe.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Ws.fromBufferAttribute(t,l),Fe.add(Ws)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new N,c[T]=new N;const l=new N,h=new N,f=new N,u=new dt,d=new dt,g=new dt,_=new N,p=new N;function m(T,y,x){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,x),u.fromBufferAttribute(o,T),d.fromBufferAttribute(o,y),g.fromBufferAttribute(o,x),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[T].add(_),a[y].add(_),a[x].add(_),c[T].add(p),c[y].add(p),c[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let T=0,y=b.length;T<y;++T){const x=b[T],R=x.start,U=x.count;for(let D=R,z=R+U;D<z;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const v=new N,M=new N,A=new N,E=new N;function S(T){A.fromBufferAttribute(i,T),E.copy(A);const y=a[T];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),M.crossVectors(E,y);const R=M.dot(c[T])<0?-1:1;r.setXYZW(T,v.x,v.y,v.z,R)}for(let T=0,y=b.length;T<y;++T){const x=b[T],R=x.start,U=x.count;for(let D=R,z=R+U;D<z;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new N,o=new N,r=new N,a=new N,c=new N,l=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,p),h.subVectors(r,o),f.subVectors(i,o),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),f.subVectors(i,o),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)u[g++]=l[d++]}return new Xe(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],f=o[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fu=new fe,ts=new Hh,Or=new Rs,Ou=new N,Br=new N,kr=new N,Gr=new N,Ac=new N,Hr=new N,Bu=new N,Vr=new N;class I extends ge{constructor(t=new be,e=new Z){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Hr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],f=o[c];h!==0&&(Ac.fromBufferAttribute(f,t),r?Hr.addScaledVector(Ac,h):Hr.addScaledVector(Ac.sub(e),h))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(o),ts.copy(t.ray).recast(t.near),!(Or.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Or,Ou)===null||ts.origin.distanceToSquared(Ou)>(t.far-t.near)**2))&&(Fu.copy(o).invert(),ts.copy(t.ray).applyMatrix4(Fu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=b,A=v;M<A;M+=3){const E=a.getX(M),S=a.getX(M+1),T=a.getX(M+2);i=Wr(this,m,t,n,l,h,f,E,S,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const b=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=Wr(this,r,t,n,l,h,f,b,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=r[p.materialIndex],b=Math.max(p.start,d.start),v=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=b,A=v;M<A;M+=3){const E=M,S=M+1,T=M+2;i=Wr(this,m,t,n,l,h,f,E,S,T),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const b=p,v=p+1,M=p+2;i=Wr(this,r,t,n,l,h,f,b,v,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function sm(s,t,e,n,i,o,r,a){let c;if(t.side===un?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===$i,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:s}}function Wr(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,Br),s.getVertexPosition(c,kr),s.getVertexPosition(l,Gr);const h=sm(s,t,e,n,Br,kr,Gr,Bu);if(h){const f=new N;jn.getBarycoord(Bu,Br,kr,Gr,f),i&&(h.uv=jn.getInterpolatedAttribute(i,a,c,l,f,new dt)),o&&(h.uv1=jn.getInterpolatedAttribute(o,a,c,l,f,new dt)),r&&(h.normal=jn.getInterpolatedAttribute(r,a,c,l,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new N,materialIndex:0};jn.getNormal(Br,kr,Gr,u.normal),h.face=u,h.barycoord=f}return h}class Mr extends be{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(f,2));function g(_,p,m,b,v,M,A,E,S,T,y){const x=M/S,R=A/T,U=M/2,D=A/2,z=E/2,H=S+1,V=T+1;let $=0,W=0;const lt=new N;for(let ft=0;ft<V;ft++){const bt=ft*R-D;for(let Ht=0;Ht<H;Ht++){const jt=Ht*x-U;lt[_]=jt*b,lt[p]=bt*v,lt[m]=z,l.push(lt.x,lt.y,lt.z),lt[_]=0,lt[p]=0,lt[m]=E>0?1:-1,h.push(lt.x,lt.y,lt.z),f.push(Ht/S),f.push(1-ft/T),$+=1}}for(let ft=0;ft<T;ft++)for(let bt=0;bt<S;bt++){const Ht=u+bt+H*ft,jt=u+bt+H*(ft+1),Q=u+(bt+1)+H*(ft+1),at=u+(bt+1)+H*ft;c.push(Ht,jt,at),c.push(jt,Q,at),W+=6}a.addGroup(d,W,y),d+=W,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Eo(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function en(s){const t={};for(let e=0;e<s.length;e++){const n=Eo(s[e]);for(const i in n)t[i]=n[i]}return t}function om(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ed(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Ia={clone:Eo,merge:en};var rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Cs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rm,this.fragmentShader=am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=om(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ad extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new N,ku=new dt,Gu=new dt;class Cn extends Ad{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$l*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $l*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,ku,Gu),e.subVectors(Gu,ku)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ac*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xs=-90,Ys=1;class cm extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Cn(Xs,Ys,t,e);i.layers=this.layers,this.add(i);const o=new Cn(Xs,Ys,t,e);o.layers=this.layers,this.add(o);const r=new Cn(Xs,Ys,t,e);r.layers=this.layers,this.add(r);const a=new Cn(Xs,Ys,t,e);a.layers=this.layers,this.add(a);const c=new Cn(Xs,Ys,t,e);c.layers=this.layers,this.add(c);const l=new Cn(Xs,Ys,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rd extends Je{constructor(t,e,n,i,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:yo,super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lm extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Rd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mr(5,5,5),o=new wn({name:"CubemapFromEquirect",uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ei});o.uniforms.tEquirect.value=e;const r=new I(i,o),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=li),new cm(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class Vh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new Vh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hm extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class um extends Je{constructor(t=null,e=1,n=1,i,o,r,a,c,l=Ln,h=Ln,f,u){super(null,r,a,c,l,h,i,o,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qs=new fe,Hu=new fe,Xr=[],Vu=new As,fm=new fe,ko=new I,Go=new Rs;class Ps extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new As),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Vu.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(Vu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Go.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Go)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(n),t.ray.intersectsSphere(Go)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,qs),Hu.multiplyMatrices(n,qs),ko.matrixWorld=Hu,ko.raycast(t,Xr);for(let r=0,a=Xr.length;r<a;r++){const c=Xr[r];c.instanceId=o,c.object=this,e.push(c)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new um(new Float32Array(i*this.count),i,this.count,Oh,hi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Rc=new N,dm=new N,pm=new Wt;class rs{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Rc.subVectors(n,e).cross(dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Rc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pm.getNormalMatrix(t),i=this.coplanarPoint(Rc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Rs,Yr=new N;class Wh{constructor(t=new rs,e=new rs,n=new rs,i=new rs,o=new rs,r=new rs){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bi){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],f=i[6],u=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],b=i[13],v=i[14],M=i[15];if(n[0].setComponents(c-o,u-l,p-d,M-m).normalize(),n[1].setComponents(c+o,u+l,p+d,M+m).normalize(),n[2].setComponents(c+r,u+h,p+g,M+b).normalize(),n[3].setComponents(c-r,u-h,p-g,M-b).normalize(),n[4].setComponents(c-a,u-f,p-_,M-v).normalize(),e===bi)n[5].setComponents(c+a,u+f,p+_,M+v).normalize();else if(e===Ca)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Yr.x=i.normal.x>0?t.max.x:t.min.x,Yr.y=i.normal.y>0?t.max.y:t.min.y,Yr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xh extends Cs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const La=new N,Da=new N,Wu=new fe,Ho=new Hh,qr=new Rs,Cc=new N,Xu=new N;class Cd extends ge{constructor(t=new be,e=new Xh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)La.fromBufferAttribute(e,i-1),Da.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=La.distanceTo(Da);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(i),qr.radius+=o,t.ray.intersectsSphere(qr)===!1)return;Wu.copy(i).invert(),Ho.copy(t.ray).applyMatrix4(Wu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=l){const m=h.getX(_),b=h.getX(_+1),v=Zr(this,t,Ho,c,m,b);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=Zr(this,t,Ho,c,_,p);m&&e.push(m)}}else{const d=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=d,p=g-1;_<p;_+=l){const m=Zr(this,t,Ho,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Zr(this,t,Ho,c,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Zr(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(La.fromBufferAttribute(r,i),Da.fromBufferAttribute(r,o),e.distanceSqToSegment(La,Da,Cc,Xu)>n)return;Cc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Cc);if(!(c<t.near||c>t.far))return{distance:c,point:Xu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Yu=new N,qu=new N;class mm extends Cd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)Yu.fromBufferAttribute(e,i),qu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yu.distanceTo(qu);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yh extends Cs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zu=new fe,jl=new Hh,$r=new Rs,jr=new N;class Pd extends ge{constructor(t=new be,e=new Yh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=o,t.ray.intersectsSphere($r)===!1)return;Zu.copy(i).invert(),jl.copy(t.ray).applyMatrix4(Zu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let g=u,_=d;g<_;g++){const p=l.getX(g);jr.fromBufferAttribute(f,p),$u(jr,p,c,i,t,e,this)}}else{const u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let g=u,_=d;g<_;g++)jr.fromBufferAttribute(f,g),$u(jr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function $u(s,t,e,n,i,o,r){const a=jl.distanceSqToPoint(s);if(a<e){const c=new N;jl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ce extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}class qh extends Je{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Id extends Je{constructor(t,e,n,i,o,r,a,c,l,h=ho){if(h!==ho&&h!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ho&&(n=Ss),n===void 0&&h===bo&&(n=So),super(null,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=c!==void 0?c:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],u=n[i+1]-h,d=(r-h)/u;return(i+d)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new dt:new N);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],r=[],a=new N,c=new fe;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(i[d-1].dot(i[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,g))}r[d].crossVectors(i[d],o[d])}if(e===!0){let d=Math.acos(Zt(o[0].dot(o[t]),-1,1));d/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Zh extends di{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gm extends Zh{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function $h(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,f){let u=(r-o)/l-(a-o)/(l+h)+(a-r)/h,d=(a-r)/h-(c-r)/(h+f)+(c-a)/f;u*=h,d*=h,i(r,a,u,d)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const Kr=new N,Pc=new $h,Ic=new $h,Lc=new $h;class vr extends di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(Kr.subVectors(i[0],i[1]).add(i[0]),l=Kr);const f=i[a%o],u=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Kr.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Pc.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,_,p),Ic.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,_,p),Lc.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Ic.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Lc.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Pc.calc(c),Ic.calc(c),Lc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ju(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function xm(s,t){const e=1-s;return e*e*t}function _m(s,t){return 2*(1-s)*s*t}function Mm(s,t){return s*s*t}function er(s,t,e,n){return xm(s,t)+_m(s,e)+Mm(s,n)}function vm(s,t){const e=1-s;return e*e*e*t}function ym(s,t){const e=1-s;return 3*e*e*s*t}function wm(s,t){return 3*(1-s)*s*s*t}function Sm(s,t){return s*s*s*t}function nr(s,t,e,n,i){return vm(s,t)+ym(s,e)+wm(s,n)+Sm(s,i)}class Ld extends di{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(nr(t,i.x,o.x,r.x,a.x),nr(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bm extends di{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(nr(t,i.x,o.x,r.x,a.x),nr(t,i.y,o.y,r.y,a.y),nr(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dd extends di{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jh extends di{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ud extends di{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(er(t,i.x,o.x,r.x),er(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nd extends di{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(er(t,i.x,o.x,r.x),er(t,i.y,o.y,r.y),er(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zd extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(ju(a,c.x,l.x,h.x,f.x),ju(a,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var Kl=Object.freeze({__proto__:null,ArcCurve:gm,CatmullRomCurve3:vr,CubicBezierCurve:Ld,CubicBezierCurve3:bm,EllipseCurve:Zh,LineCurve:Dd,LineCurve3:jh,QuadraticBezierCurve:Ud,QuadraticBezierCurve3:Nd,SplineCurve:zd});class Tm extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Kl[i.type]().fromJSON(i))}return this}}class Ua extends Tm{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Dd(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Ud(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Ld(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new Zh(t,e,n,i,o,r,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class We extends be{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new N,h=new dt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mt extends be{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],f=[],u=[],d=[];let g=0;const _=[],p=n/2;let m=0;b(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function b(){const M=new N,A=new N;let E=0;const S=(e-t)/n;for(let T=0;T<=o;T++){const y=[],x=T/o,R=x*(e-t)+t;for(let U=0;U<=i;U++){const D=U/i,z=D*c+a,H=Math.sin(z),V=Math.cos(z);A.x=R*H,A.y=-x*n+p,A.z=R*V,f.push(A.x,A.y,A.z),M.set(H,S,V).normalize(),u.push(M.x,M.y,M.z),d.push(D,1-x),y.push(g++)}_.push(y)}for(let T=0;T<i;T++)for(let y=0;y<o;y++){const x=_[y][T],R=_[y+1][T],U=_[y+1][T+1],D=_[y][T+1];(t>0||y!==0)&&(h.push(x,R,D),E+=3),(e>0||y!==o-1)&&(h.push(R,U,D),E+=3)}l.addGroup(m,E,0),m+=E}function v(M){const A=g,E=new dt,S=new N;let T=0;const y=M===!0?t:e,x=M===!0?1:-1;for(let U=1;U<=i;U++)f.push(0,p*x,0),u.push(0,x,0),d.push(.5,.5),g++;const R=g;for(let U=0;U<=i;U++){const z=U/i*c+a,H=Math.cos(z),V=Math.sin(z);S.x=y*V,S.y=p*x,S.z=y*H,f.push(S.x,S.y,S.z),u.push(0,x,0),E.x=H*.5+.5,E.y=V*.5*x+.5,d.push(E.x,E.y),g++}for(let U=0;U<i;U++){const D=A+U,z=R+U;M===!0?h.push(z,z+1,D):h.push(z+1,z,D),T+=3}l.addGroup(m,T,M===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hn extends Mt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Hn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yr extends be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),h(),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(o.slice(),3)),this.setAttribute("uv",new Gt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const v=new N,M=new N,A=new N;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],M),d(e[E+2],A),c(v,M,A,b)}function c(b,v,M,A){const E=A+1,S=[];for(let T=0;T<=E;T++){S[T]=[];const y=b.clone().lerp(M,T/E),x=v.clone().lerp(M,T/E),R=E-T;for(let U=0;U<=R;U++)U===0&&T===E?S[T][U]=y:S[T][U]=y.clone().lerp(x,U/R)}for(let T=0;T<E;T++)for(let y=0;y<2*(E-T)-1;y++){const x=Math.floor(y/2);y%2===0?(u(S[T][x+1]),u(S[T+1][x]),u(S[T][x])):(u(S[T][x+1]),u(S[T+1][x+1]),u(S[T+1][x]))}}function l(b){const v=new N;for(let M=0;M<o.length;M+=3)v.x=o[M+0],v.y=o[M+1],v.z=o[M+2],v.normalize().multiplyScalar(b),o[M+0]=v.x,o[M+1]=v.y,o[M+2]=v.z}function h(){const b=new N;for(let v=0;v<o.length;v+=3){b.x=o[v+0],b.y=o[v+1],b.z=o[v+2];const M=p(b)/2/Math.PI+.5,A=m(b)/Math.PI+.5;r.push(M,1-A)}g(),f()}function f(){for(let b=0;b<r.length;b+=6){const v=r[b+0],M=r[b+2],A=r[b+4],E=Math.max(v,M,A),S=Math.min(v,M,A);E>.9&&S<.1&&(v<.2&&(r[b+0]+=1),M<.2&&(r[b+2]+=1),A<.2&&(r[b+4]+=1))}}function u(b){o.push(b.x,b.y,b.z)}function d(b,v){const M=b*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const b=new N,v=new N,M=new N,A=new N,E=new dt,S=new dt,T=new dt;for(let y=0,x=0;y<o.length;y+=9,x+=6){b.set(o[y+0],o[y+1],o[y+2]),v.set(o[y+3],o[y+4],o[y+5]),M.set(o[y+6],o[y+7],o[y+8]),E.set(r[x+0],r[x+1]),S.set(r[x+2],r[x+3]),T.set(r[x+4],r[x+5]),A.copy(b).add(v).add(M).divideScalar(3);const R=p(A);_(E,x+0,b,R),_(S,x+2,v,R),_(T,x+4,M,R)}}function _(b,v,M,A){A<0&&b.x===1&&(r[v]=b.x-1),M.x===0&&M.z===0&&(r[v]=A/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.vertices,t.indices,t.radius,t.details)}}class Kh extends yr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kh(t.radius,t.detail)}}class Jl extends Ua{constructor(t){super(t),this.uuid=Lo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ua().fromJSON(i))}return this}}const Em={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Fd(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,f,u,d;if(n&&(o=Im(s,t,o,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)f=s[g],u=s[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return ur(o,r,e,a,c,d,0),r}};function Fd(s,t,e,n,i){let o,r;if(i===Hm(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Ku(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Ku(o,s[o],s[o+1],r);return r&&Ja(r,r.next)&&(dr(r),r=r.next),r}function bs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ja(e,e.next)||Ee(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(s,t,e,n,i,o,r){if(!s)return;!r&&o&&zm(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?Rm(s,n,i,o):Am(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),dr(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=Cm(bs(s),t,e),ur(s,t,e,n,i,o,2)):r===2&&Pm(s,t,e,n,i,o):ur(bs(s),t,e,n,i,o,1);break}}}function Am(s){const t=s.prev,e=s,n=s.next;if(Ee(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=i<o?i<r?i:r:o<r?o:r,f=a<c?a<l?a:l:c<l?c:l,u=i>o?i>r?i:r:o>r?o:r,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&so(i,a,o,c,r,l,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rm(s,t,e,n){const i=s.prev,o=s,r=s.next;if(Ee(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,h=i.y,f=o.y,u=r.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,_=a>c?a>l?a:l:c>l?c:l,p=h>f?h>u?h:u:f>u?f:u,m=Ql(d,g,t,e,n),b=Ql(_,p,t,e,n);let v=s.prevZ,M=s.nextZ;for(;v&&v.z>=m&&M&&M.z<=b;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==r&&so(a,h,c,f,l,u,v.x,v.y)&&Ee(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==r&&so(a,h,c,f,l,u,M.x,M.y)&&Ee(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==i&&v!==r&&so(a,h,c,f,l,u,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==r&&so(a,h,c,f,l,u,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Cm(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Ja(i,o)&&Od(i,n,n.next,o)&&fr(i,o)&&fr(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),dr(n),dr(n.next),n=s=o),n=n.next}while(n!==s);return bs(n)}function Pm(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Bm(r,a)){let c=Bd(r,a);r=bs(r,r.next),c=bs(c,c.next),ur(r,t,e,n,i,o,0),ur(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Im(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=Fd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Om(l));for(i.sort(Lm),o=0;o<i.length;o++)e=Dm(i[o],e);return e}function Lm(s,t){return s.x-t.x}function Dm(s,t){const e=Um(s,t);if(!e)return t;const n=Bd(e,s);return bs(n,n.next),bs(e,e.next)}function Um(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=o&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,f;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&so(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),fr(e,s)&&(f<h||f===h&&(e.x>i.x||e.x===i.x&&Nm(i,e)))&&(i=e,h=f)),e=e.next;while(e!==a);return i}function Nm(s,t){return Ee(s.prev,s,t.prev)<0&&Ee(t.next,s,s.next)<0}function zm(s,t,e,n){let i=s;do i.z===0&&(i.z=Ql(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Fm(i)}function Fm(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function Ql(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Om(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function so(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function Bm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!km(s,t)&&(fr(s,t)&&fr(t,s)&&Gm(s,t)&&(Ee(s.prev,s,t.prev)||Ee(s,t.prev,t))||Ja(s,t)&&Ee(s.prev,s,s.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ja(s,t){return s.x===t.x&&s.y===t.y}function Od(s,t,e,n){const i=Qr(Ee(s,t,e)),o=Qr(Ee(s,t,n)),r=Qr(Ee(e,n,s)),a=Qr(Ee(e,n,t));return!!(i!==o&&r!==a||i===0&&Jr(s,e,t)||o===0&&Jr(s,n,t)||r===0&&Jr(e,s,n)||a===0&&Jr(e,t,n))}function Jr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Qr(s){return s>0?1:s<0?-1:0}function km(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Od(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function fr(s,t){return Ee(s.prev,s,s.next)<0?Ee(s,t,s.next)>=0&&Ee(s,s.prev,t)>=0:Ee(s,t,s.prev)<0||Ee(s,s.next,t)<0}function Gm(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Bd(s,t){const e=new th(s.i,s.x,s.y),n=new th(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ku(s,t,e,n){const i=new th(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function dr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function th(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hm(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class ir{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return ir.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Ju(t),Qu(n,t);let r=t.length;e.forEach(Ju);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Qu(n,e[c]);const a=Em.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Ju(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Qu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class vs extends yr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vs(t.radius,t.detail)}}class Jh extends yr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jh(t.radius,t.detail)}}class _e extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const b=m*u-r;for(let v=0;v<l;v++){const M=v*f-o;g.push(M,-b,0),_.push(0,0,1),p.push(v/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){const v=b+l*m,M=b+l*(m+1),A=b+1+l*(m+1),E=b+1+l*m;d.push(v,M,E),d.push(M,A,E)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ao extends be{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let f=t;const u=(e-t)/i,d=new N,g=new dt;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=o+p/n*r;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const b=m+p,v=b,M=b+n+1,A=b+n+2,E=b+1;a.push(v,M,E),a.push(M,A,E)}}this.setIndex(a),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Na extends be{constructor(t=new Jl([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Gt(i,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(r,2));function l(h){const f=i.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;ir.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const b=g[p];ir.isClockWise(b)===!0&&(g[p]=b.reverse())}const _=ir.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const b=g[p];d=d.concat(b)}for(let p=0,m=d.length;p<m;p++){const b=d[p];i.push(b.x,b.y,0),o.push(0,0,1),r.push(b.x,b.y)}for(let p=0,m=_.length;p<m;p++){const b=_[p],v=b[0]+f,M=b[1]+f,A=b[2]+f;n.push(v,M,A),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Vm(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new Na(n,t.curveSegments)}}function Vm(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class j extends be{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],f=new N,u=new N,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const b=[],v=m/n;let M=0;m===0&&r===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const E=A/e;f.x=-t*Math.cos(i+E*o)*Math.sin(r+v*a),f.y=t*Math.cos(r+v*a),f.z=t*Math.sin(i+E*o)*Math.sin(r+v*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(E+M,1-v),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const v=h[m][b+1],M=h[m][b],A=h[m+1][b],E=h[m+1][b+1];(m!==0||r>0)&&d.push(v,M,E),(m!==n-1||c<Math.PI)&&d.push(M,A,E)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new j(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Se extends be{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new N,f=new N,u=new N;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*o,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,b=(i+1)*d+g;r.push(_,p,b),r.push(p,m,b)}this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yn extends be{constructor(t=new Nd(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,c=new N,l=new dt;let h=new N;const f=[],u=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function _(){for(let v=0;v<e;v++)p(v);p(o===!1?e:0),b(),m()}function p(v){h=t.getPointAt(v/e,h);const M=r.normals[v],A=r.binormals[v];for(let E=0;E<=i;E++){const S=E/i*Math.PI*2,T=Math.sin(S),y=-Math.cos(S);c.x=y*M.x+T*A.x,c.y=y*M.y+T*A.y,c.z=y*M.z+T*A.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){const A=(i+1)*(v-1)+(M-1),E=(i+1)*v+(M-1),S=(i+1)*v+M,T=(i+1)*(v-1)+M;g.push(A,E,T),g.push(E,S,T)}}function b(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)l.x=v/e,l.y=M/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new yn(new Kl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class K extends Cs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wm extends Cs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xm extends Cs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qh extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ym extends Qh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Dc=new fe,tf=new N,ef=new N;class kd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(tf),ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ef),e.updateMatrixWorld(),Dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nf=new fe,Vo=new N,Uc=new N;class qm extends kd{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Vo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vo),Uc.copy(n.position),Uc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Uc),n.updateMatrixWorld(),i.makeTranslation(-Vo.x,-Vo.y,-Vo.z),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf)}}class Is extends Qh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class tu extends Ad{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zm extends kd{constructor(){super(new tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qa extends Qh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Zm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class $m extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function sf(){return performance.now()}function of(s,t,e,n){const i=jm(n);switch(e){case ud:return s*t;case dd:return s*t;case pd:return s*t*2;case Oh:return s*t/i.components*i.byteLength;case Bh:return s*t/i.components*i.byteLength;case md:return s*t*2/i.components*i.byteLength;case kh:return s*t*2/i.components*i.byteLength;case fd:return s*t*3/i.components*i.byteLength;case Kn:return s*t*4/i.components*i.byteLength;case Gh:return s*t*4/i.components*i.byteLength;case da:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bl:case El:return Math.max(s,16)*Math.max(t,8)/4;case Sl:case Tl:return Math.max(s,8)*Math.max(t,8)/2;case Al:case Rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case kl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case xa:case Wl:case Xl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gd:case Yl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ql:case Zl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jm(s){switch(s){case Pi:case cd:return{byteLength:1,components:1};case hr:case ld:case Ai:return{byteLength:2,components:1};case zh:case Fh:return{byteLength:2,components:4};case Ss:case Nh:case hi:return{byteLength:4,components:1};case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hd(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Km(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const h=c.array,f=c.updateRanges;if(s.bindBuffer(l,a),f.length===0)s.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var Jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
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
#endif`,tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
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
#endif`,og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
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
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,fg=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yg=`#define PI 3.141592653589793
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
} // validated`,wg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
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
#endif`,jg=`struct PhysicalMaterial {
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
}`,Kg=`
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
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
#endif`,px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vx=`#ifdef USE_NORMALMAP
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
#endif`,yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zx=`float getShadowMask() {
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
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
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
}`,s_=`#if DEPTH_PACKING == 3200
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
}`,o_=`#define DISTANCE
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
}`,r_=`#define DISTANCE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,f_=`uniform vec3 diffuse;
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
}`,d_=`#define LAMBERT
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define MATCAP
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
}`,g_=`#define MATCAP
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
}`,x_=`#define NORMAL
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
}`,__=`#define NORMAL
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
}`,M_=`#define PHONG
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
}`,v_=`#define PHONG
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
}`,y_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,S_=`#define TOON
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
}`,b_=`#define TOON
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
}`,T_=`uniform float size;
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
}`,E_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,C_=`uniform float rotation;
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
}`,P_=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Jm,alphahash_pars_fragment:Qm,alphamap_fragment:tg,alphamap_pars_fragment:eg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:sg,aomap_pars_fragment:og,batching_pars_vertex:rg,batching_vertex:ag,begin_vertex:cg,beginnormal_vertex:lg,bsdfs:hg,iridescence_fragment:ug,bumpmap_pars_fragment:fg,clipping_planes_fragment:dg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:gg,color_fragment:xg,color_pars_fragment:_g,color_pars_vertex:Mg,color_vertex:vg,common:yg,cube_uv_reflection_fragment:wg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:bg,displacementmap_vertex:Tg,emissivemap_fragment:Eg,emissivemap_pars_fragment:Ag,colorspace_fragment:Rg,colorspace_pars_fragment:Cg,envmap_fragment:Pg,envmap_common_pars_fragment:Ig,envmap_pars_fragment:Lg,envmap_pars_vertex:Dg,envmap_physical_pars_fragment:Wg,envmap_vertex:Ug,fog_vertex:Ng,fog_pars_vertex:zg,fog_fragment:Fg,fog_pars_fragment:Og,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:kg,lights_lambert_fragment:Gg,lights_lambert_pars_fragment:Hg,lights_pars_begin:Vg,lights_toon_fragment:Xg,lights_toon_pars_fragment:Yg,lights_phong_fragment:qg,lights_phong_pars_fragment:Zg,lights_physical_fragment:$g,lights_physical_pars_fragment:jg,lights_fragment_begin:Kg,lights_fragment_maps:Jg,lights_fragment_end:Qg,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:nx,logdepthbuf_vertex:ix,map_fragment:sx,map_pars_fragment:ox,map_particle_fragment:rx,map_particle_pars_fragment:ax,metalnessmap_fragment:cx,metalnessmap_pars_fragment:lx,morphinstance_vertex:hx,morphcolor_vertex:ux,morphnormal_vertex:fx,morphtarget_pars_vertex:dx,morphtarget_vertex:px,normal_fragment_begin:mx,normal_fragment_maps:gx,normal_pars_fragment:xx,normal_pars_vertex:_x,normal_vertex:Mx,normalmap_pars_fragment:vx,clearcoat_normal_fragment_begin:yx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Sx,iridescence_pars_fragment:bx,opaque_fragment:Tx,packing:Ex,premultiplied_alpha_fragment:Ax,project_vertex:Rx,dithering_fragment:Cx,dithering_pars_fragment:Px,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Lx,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Ux,shadowmap_vertex:Nx,shadowmask_pars_fragment:zx,skinbase_vertex:Fx,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:kx,specularmap_fragment:Gx,specularmap_pars_fragment:Hx,tonemapping_fragment:Vx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:Yx,uv_pars_fragment:qx,uv_pars_vertex:Zx,uv_vertex:$x,worldpos_vertex:jx,background_vert:Kx,background_frag:Jx,backgroundCube_vert:Qx,backgroundCube_frag:t_,cube_vert:e_,cube_frag:n_,depth_vert:i_,depth_frag:s_,distanceRGBA_vert:o_,distanceRGBA_frag:r_,equirect_vert:a_,equirect_frag:c_,linedashed_vert:l_,linedashed_frag:h_,meshbasic_vert:u_,meshbasic_frag:f_,meshlambert_vert:d_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:g_,meshnormal_vert:x_,meshnormal_frag:__,meshphong_vert:M_,meshphong_frag:v_,meshphysical_vert:y_,meshphysical_frag:w_,meshtoon_vert:S_,meshtoon_frag:b_,points_vert:T_,points_frag:E_,shadow_vert:A_,shadow_frag:R_,sprite_vert:C_,sprite_frag:P_},pt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},ii={basic:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:en([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:en([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:en([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ot(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:en([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:en([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:en([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:en([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:en([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:en([pt.common,pt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:en([pt.lights,pt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ii.physical={uniforms:en([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ta={r:0,b:0,g:0},ns=new fi,I_=new fe;function L_(s,t,e,n,i,o,r){const a=new ot(0);let c=o===!0?0:1,l,h,f=null,u=0,d=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const A=g(v);A===null?m(a,c):A&&A.isColor&&(m(A,1),M=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===Ka)?(h===void 0&&(h=new I(new Mr(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Eo(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ns.copy(M.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(ns)),h.material.toneMapped=re.getTransfer(A.colorSpace)!==de,(f!==A||u!==A.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,f=A,u=A.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new I(new _e(2,2),new wn({name:"BackgroundMaterial",uniforms:Eo(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=re.getTransfer(A.colorSpace)!==de,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||u!==A.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,f=A,u=A.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(ta,Ed(s)),n.buffers.color.setClear(ta.r,ta.g,ta.b,M,r)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:p,dispose:b}}function D_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let o=i,r=!1;function a(x,R,U,D,z){let H=!1;const V=f(D,U,R);o!==V&&(o=V,l(o.object)),H=d(x,D,U,z),H&&g(x,D,U,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,M(x,R,U,D),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function f(x,R,U){const D=U.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let H=z[R.id];H===void 0&&(H={},z[R.id]=H);let V=H[D];return V===void 0&&(V=u(c()),H[D]=V),V}function u(x){const R=[],U=[],D=[];for(let z=0;z<e;z++)R[z]=0,U[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:D,object:x,attributes:{},index:null}}function d(x,R,U,D){const z=o.attributes,H=R.attributes;let V=0;const $=U.getAttributes();for(const W in $)if($[W].location>=0){const ft=z[W];let bt=H[W];if(bt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(bt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(bt=x.instanceColor)),ft===void 0||ft.attribute!==bt||bt&&ft.data!==bt.data)return!0;V++}return o.attributesNum!==V||o.index!==D}function g(x,R,U,D){const z={},H=R.attributes;let V=0;const $=U.getAttributes();for(const W in $)if($[W].location>=0){let ft=H[W];ft===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor));const bt={};bt.attribute=ft,ft&&ft.data&&(bt.data=ft.data),z[W]=bt,V++}o.attributes=z,o.attributesNum=V,o.index=D}function _(){const x=o.newAttributes;for(let R=0,U=x.length;R<U;R++)x[R]=0}function p(x){m(x,0)}function m(x,R){const U=o.newAttributes,D=o.enabledAttributes,z=o.attributeDivisors;U[x]=1,D[x]===0&&(s.enableVertexAttribArray(x),D[x]=1),z[x]!==R&&(s.vertexAttribDivisor(x,R),z[x]=R)}function b(){const x=o.newAttributes,R=o.enabledAttributes;for(let U=0,D=R.length;U<D;U++)R[U]!==x[U]&&(s.disableVertexAttribArray(U),R[U]=0)}function v(x,R,U,D,z,H,V){V===!0?s.vertexAttribIPointer(x,R,U,z,H):s.vertexAttribPointer(x,R,U,D,z,H)}function M(x,R,U,D){_();const z=D.attributes,H=U.getAttributes(),V=R.defaultAttributeValues;for(const $ in H){const W=H[$];if(W.location>=0){let lt=z[$];if(lt===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),lt!==void 0){const ft=lt.normalized,bt=lt.itemSize,Ht=t.get(lt);if(Ht===void 0)continue;const jt=Ht.buffer,Q=Ht.type,at=Ht.bytesPerElement,yt=Q===s.INT||Q===s.UNSIGNED_INT||lt.gpuType===Nh;if(lt.isInterleavedBufferAttribute){const ut=lt.data,zt=ut.stride,Bt=lt.offset;if(ut.isInstancedInterleavedBuffer){for(let qt=0;qt<W.locationSize;qt++)m(W.location+qt,ut.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let qt=0;qt<W.locationSize;qt++)p(W.location+qt);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let qt=0;qt<W.locationSize;qt++)v(W.location+qt,bt/W.locationSize,Q,ft,zt*at,(Bt+bt/W.locationSize*qt)*at,yt)}else{if(lt.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)m(W.location+ut,lt.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ut=0;ut<W.locationSize;ut++)p(W.location+ut);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let ut=0;ut<W.locationSize;ut++)v(W.location+ut,bt/W.locationSize,Q,ft,bt*at,bt/W.locationSize*ut*at,yt)}}else if(V!==void 0){const ft=V[$];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(W.location,ft);break;case 3:s.vertexAttrib3fv(W.location,ft);break;case 4:s.vertexAttrib4fv(W.location,ft);break;default:s.vertexAttrib1fv(W.location,ft)}}}}b()}function A(){T();for(const x in n){const R=n[x];for(const U in R){const D=R[U];for(const z in D)h(D[z].object),delete D[z];delete R[U]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const U in R){const D=R[U];for(const z in D)h(D[z].object),delete D[z];delete R[U]}delete n[x.id]}function S(x){for(const R in n){const U=n[R];if(U[x.id]===void 0)continue;const D=U[x.id];for(const z in D)h(D[z].object),delete D[z];delete U[x.id]}}function T(){y(),r=!0,o!==i&&(o=i,l(o.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function U_(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,f){f!==0&&(s.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)r(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function N_(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){return!(S!==Kn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const T=S===Ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Pi&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==hi&&!T)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:A,maxSamples:E}}function z_(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new rs,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=s.get(f);if(!i||g===null||g.length===0||o&&!p)o?h(null):l();else{const b=o?0:n,v=b*4;let M=m.clippingState||null;c.value=M,M=h(g,u,v,d);for(let A=0;A!==v;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=d+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=d;v!==_;++v,M+=4)r.copy(f[v]).applyMatrix4(b,a),r.normal.toArray(p,M),p[M+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function F_(s){let t=new WeakMap;function e(r,a){return a===vl?r.mapping=yo:a===yl&&(r.mapping=wo),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===vl||a===yl)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new lm(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const oo=4,rf=[.125,.215,.35,.446,.526,.582],ms=20,Nc=new tu,af=new ot;let zc=null,Fc=0,Oc=0,Bc=!1;const as=(1+Math.sqrt(5))/2,Zs=1/as,cf=[new N(-as,Zs,0),new N(as,Zs,0),new N(-Zs,0,as),new N(Zs,0,as),new N(0,as,-Zs),new N(0,as,Zs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class lf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){zc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zc,Fc,Oc),this._renderer.xr.enabled=Bc,t.scissorTest=!1,ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yo||t.mapping===wo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Ai,format:Kn,colorSpace:To,depthBuffer:!1},i=hf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O_(o)),this._blurMaterial=B_(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,Nc)}_sceneToCubeUV(t,e,n,i){const a=new Cn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(af),h.toneMapping=Zi,h.autoClear=!1;const d=new Z({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new I(new Mr,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(af),_=!0);for(let m=0;m<6;m++){const b=m%3;b===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):b===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const v=this._cubeSize;ea(i,b*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===yo||t.mapping===wo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;ea(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Nc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=cf[(i-o-1)%cf.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new I(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*ms-1),_=o/g,p=isFinite(o)?1+Math.floor(h*_):ms;p>ms&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ms}`);const m=[];let b=0;for(let S=0;S<ms;++S){const T=S/_,y=Math.exp(-T*T/2);m.push(y),S===0?b+=y:S<p&&(b+=2*y)}for(let S=0;S<m.length;S++)m[S]=m[S]/b;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;const M=this._sizeLods[i],A=3*M*(i>v-oo?i-v+oo:0),E=4*(this._cubeSize-M);ea(e,A,E,3*M,2*M),c.setRenderTarget(e),c.render(f,Nc)}}function O_(s){const t=[],e=[],n=[];let i=s;const o=s-oo+1+rf.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-oo?c=rf[r-s+oo-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*d),v=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let E=0;E<d;E++){const S=E%3*2/3-1,T=E>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];b.set(y,_*g*E),v.set(u,p*g*E);const x=[E,E,E,E,E,E];M.set(x,m*g*E)}const A=new be;A.setAttribute("position",new Xe(b,_)),A.setAttribute("uv",new Xe(v,p)),A.setAttribute("faceIndex",new Xe(M,m)),t.push(A),i>oo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hf(s,t,e){const n=new Jn(s,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ea(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function B_(s,t,e){const n=new Float32Array(ms),i=new N(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function uf(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ff(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function k_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===vl||c===yl,h=c===yo||c===wo;if(l||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new lf(s)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new lf(s)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function G_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Qs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function H_(s,t,e,n){const i={},o=new WeakMap;function r(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const d in u)t.update(u[d],s.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let v=0,M=b.length;v<M;v+=3){const A=b[v+0],E=b[v+1],S=b[v+2];u.push(A,E,E,S,S,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let v=0,M=b.length/3-1;v<M;v+=3){const A=v+0,E=v+1,S=v+2;u.push(A,E,E,S,S,A)}}else return;const p=new(Md(u)?Td:bd)(u,1);p.version=_;const m=o.get(f);m&&t.remove(m),o.set(f,p)}function h(f){const u=o.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function V_(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function c(u,d){s.drawElements(n,d,o,u*r),e.update(d,n,1)}function l(u,d,g){g!==0&&(s.drawElementsInstanced(n,d,o,u*r,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,u,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function f(u,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)l(u[m]/r,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,o,u,0,_,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b]*_[b];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function W_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function X_(s,t,e){const n=new WeakMap,i=new me;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let x=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let A=a.attributes.position.count*M,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*E*4*f),T=new yd(S,A,E,f);T.type=hi,T.needsUpdate=!0;const y=M*4;for(let R=0;R<f;R++){const U=m[R],D=b[R],z=v[R],H=A*E*4*R;for(let V=0;V<U.count;V++){const $=V*y;g===!0&&(i.fromBufferAttribute(U,V),S[H+$+0]=i.x,S[H+$+1]=i.y,S[H+$+2]=i.z,S[H+$+3]=0),_===!0&&(i.fromBufferAttribute(D,V),S[H+$+4]=i.x,S[H+$+5]=i.y,S[H+$+6]=i.z,S[H+$+7]=0),p===!0&&(i.fromBufferAttribute(z,V),S[H+$+8]=i.x,S[H+$+9]=i.y,S[H+$+10]=i.z,S[H+$+11]=z.itemSize===4?i.w:1)}}u={count:f,texture:T,size:new dt(A,E)},n.set(a,u),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function Y_(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return f}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const Vd=new Je,df=new Id(1,1),Wd=new yd,Xd=new Z0,Yd=new Rd,pf=[],mf=[],gf=new Float32Array(16),xf=new Float32Array(9),_f=new Float32Array(4);function Do(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=pf[i];if(o===void 0&&(o=new Float32Array(i),pf[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Ne(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function tc(s,t){let e=mf[t];e===void 0&&(e=new Int32Array(t),mf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function q_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Z_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function $_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function j_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function K_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,n))return;_f.set(n),s.uniformMatrix2fv(this.addr,!1,_f),ze(e,n)}}function J_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,n))return;xf.set(n),s.uniformMatrix3fv(this.addr,!1,xf),ze(e,n)}}function Q_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Ne(e,n))return;gf.set(n),s.uniformMatrix4fv(this.addr,!1,gf),ze(e,n)}}function tM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function eM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function nM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function iM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function sM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function oM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function rM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function aM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function cM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(df.compareFunction=_d,o=df):o=Vd,e.setTexture2D(t||o,i)}function lM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xd,i)}function hM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yd,i)}function uM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wd,i)}function fM(s){switch(s){case 5126:return q_;case 35664:return Z_;case 35665:return $_;case 35666:return j_;case 35674:return K_;case 35675:return J_;case 35676:return Q_;case 5124:case 35670:return tM;case 35667:case 35671:return eM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return sM;case 36294:return oM;case 36295:return rM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return uM}}function dM(s,t){s.uniform1fv(this.addr,t)}function pM(s,t){const e=Do(t,this.size,2);s.uniform2fv(this.addr,e)}function mM(s,t){const e=Do(t,this.size,3);s.uniform3fv(this.addr,e)}function gM(s,t){const e=Do(t,this.size,4);s.uniform4fv(this.addr,e)}function xM(s,t){const e=Do(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _M(s,t){const e=Do(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function MM(s,t){const e=Do(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function vM(s,t){s.uniform1iv(this.addr,t)}function yM(s,t){s.uniform2iv(this.addr,t)}function wM(s,t){s.uniform3iv(this.addr,t)}function SM(s,t){s.uniform4iv(this.addr,t)}function bM(s,t){s.uniform1uiv(this.addr,t)}function TM(s,t){s.uniform2uiv(this.addr,t)}function EM(s,t){s.uniform3uiv(this.addr,t)}function AM(s,t){s.uniform4uiv(this.addr,t)}function RM(s,t,e){const n=this.cache,i=t.length,o=tc(e,i);Ne(n,o)||(s.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Vd,o[r])}function CM(s,t,e){const n=this.cache,i=t.length,o=tc(e,i);Ne(n,o)||(s.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Xd,o[r])}function PM(s,t,e){const n=this.cache,i=t.length,o=tc(e,i);Ne(n,o)||(s.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Yd,o[r])}function IM(s,t,e){const n=this.cache,i=t.length,o=tc(e,i);Ne(n,o)||(s.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Wd,o[r])}function LM(s){switch(s){case 5126:return dM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return xM;case 35675:return _M;case 35676:return MM;case 5124:case 35670:return vM;case 35667:case 35671:return yM;case 35668:case 35672:return wM;case 35669:case 35673:return SM;case 5125:return bM;case 36294:return TM;case 36295:return EM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return IM}}class DM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fM(e.type)}}class UM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LM(e.type)}}class NM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function Mf(s,t){s.seq.push(t),s.map[t.id]=t}function zM(s,t,e){const n=s.name,i=n.length;for(kc.lastIndex=0;;){const o=kc.exec(n),r=kc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Mf(e,l===void 0?new DM(a,s,t):new UM(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new NM(a),Mf(e,f)),e=f}}}class _a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);zM(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function vf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const FM=37297;let OM=0;function BM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const yf=new Wt;function kM(s){re._getMatrix(yf,re.workingColorSpace,s);const t=`mat3( ${yf.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(s)){case Ra:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+BM(s.getShaderSource(t),r)}else return i}function GM(s,t){const e=kM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function HM(s,t){let e;switch(t){case y0:e="Linear";break;case w0:e="Reinhard";break;case S0:e="Cineon";break;case rd:e="ACESFilmic";break;case T0:e="AgX";break;case E0:e="Neutral";break;case b0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const na=new N;function VM(){re.getLuminanceCoefficients(na);const s=na.x.toFixed(4),t=na.y.toFixed(4),e=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function XM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function YM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Zo(s){return s!==""}function Sf(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qM=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(s){return s.replace(qM,$M)}const ZM=new Map;function $M(s,t){let e=Yt[t];if(e===void 0){const n=ZM.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return eh(e)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(s){return s.replace(jM,KM)}function KM(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Ef(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function JM(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===id?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function QM(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yo:case wo:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wo:t="ENVMAP_MODE_REFRACTION";break}return t}function ev(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case od:t="ENVMAP_BLENDING_MULTIPLY";break;case M0:t="ENVMAP_BLENDING_MIX";break;case v0:t="ENVMAP_BLENDING_ADD";break}return t}function nv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function iv(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=JM(e),l=QM(e),h=tv(e),f=ev(e),u=nv(e),d=WM(e),g=XM(o),_=i.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zo).join(`
`),m.length>0&&(m+=`
`)):(p=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),m=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Zi?HM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,GM("linearToOutputTexel",e.outputColorSpace),VM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zo).join(`
`)),r=eh(r),r=Sf(r,e),r=bf(r,e),a=eh(a),a=Sf(a,e),a=bf(a,e),r=Tf(r),a=Tf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=b+p+r,M=b+m+a,A=vf(i,i.VERTEX_SHADER,v),E=vf(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(R){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(A).trim(),z=i.getShaderInfoLog(E).trim();let H=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,E);else{const $=wf(i,A,"vertex"),W=wf(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+$+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||z==="")&&(V=!1);V&&(R.diagnostics={runnable:H,programLog:U,vertexShader:{log:D,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(A),i.deleteShader(E),T=new _a(i,_),y=YM(i,_)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,FM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let sv=0;class ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rv(t),e.set(t,n)),n}}class rv{constructor(t){this.id=sv++,this.code=t,this.usedTimes=0}}function av(s,t,e,n,i,o,r){const a=new wd,c=new ov,l=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,x,R,U,D){const z=U.fog,H=D.geometry,V=y.isMeshStandardMaterial?U.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),W=$&&$.mapping===Ka?$.image.height:null,lt=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,bt=ft!==void 0?ft.length:0;let Ht=0;H.morphAttributes.position!==void 0&&(Ht=1),H.morphAttributes.normal!==void 0&&(Ht=2),H.morphAttributes.color!==void 0&&(Ht=3);let jt,Q,at,yt;if(lt){const ue=ii[lt];jt=ue.vertexShader,Q=ue.fragmentShader}else jt=y.vertexShader,Q=y.fragmentShader,c.update(y),at=c.getVertexShaderID(y),yt=c.getFragmentShaderID(y);const ut=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),Bt=D.isInstancedMesh===!0,qt=D.isBatchedMesh===!0,Te=!!y.map,te=!!y.matcap,Ce=!!$,O=!!y.aoMap,Dn=!!y.lightMap,Kt=!!y.bumpMap,Jt=!!y.normalMap,It=!!y.displacementMap,Me=!!y.emissiveMap,Pt=!!y.metalnessMap,L=!!y.roughnessMap,C=y.anisotropy>0,X=y.clearcoat>0,nt=y.dispersion>0,st=y.iridescence>0,et=y.sheen>0,Rt=y.transmission>0,xt=C&&!!y.anisotropyMap,St=X&&!!y.clearcoatMap,ee=X&&!!y.clearcoatNormalMap,ct=X&&!!y.clearcoatRoughnessMap,Tt=st&&!!y.iridescenceMap,Nt=st&&!!y.iridescenceThicknessMap,Ft=et&&!!y.sheenColorMap,Et=et&&!!y.sheenRoughnessMap,Qt=!!y.specularMap,Xt=!!y.specularColorMap,xe=!!y.specularIntensityMap,B=Rt&&!!y.transmissionMap,mt=Rt&&!!y.thicknessMap,J=!!y.gradientMap,it=!!y.alphaMap,vt=y.alphaTest>0,_t=!!y.alphaHash,Vt=!!y.extensions;let Ae=Zi;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const Ye={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:jt,fragmentShader:Q,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:qt,batchingColor:qt&&D._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&D.instanceColor!==null,instancingMorph:Bt&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:To,alphaToCoverage:!!y.alphaToCoverage,map:Te,matcap:te,envMap:Ce,envMapMode:Ce&&$.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:Dn,bumpMap:Kt,normalMap:Jt,displacementMap:u&&It,emissiveMap:Me,normalMapObjectSpace:Jt&&y.normalMapType===P0,normalMapTangentSpace:Jt&&y.normalMapType===xd,metalnessMap:Pt,roughnessMap:L,anisotropy:C,anisotropyMap:xt,clearcoat:X,clearcoatMap:St,clearcoatNormalMap:ee,clearcoatRoughnessMap:ct,dispersion:nt,iridescence:st,iridescenceMap:Tt,iridescenceThicknessMap:Nt,sheen:et,sheenColorMap:Ft,sheenRoughnessMap:Et,specularMap:Qt,specularColorMap:Xt,specularIntensityMap:xe,transmission:Rt,transmissionMap:B,thicknessMap:mt,gradientMap:J,opaque:y.transparent===!1&&y.blending===lo&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:vt,alphaHash:_t,combine:y.combine,mapUv:Te&&_(y.map.channel),aoMapUv:O&&_(y.aoMap.channel),lightMapUv:Dn&&_(y.lightMap.channel),bumpMapUv:Kt&&_(y.bumpMap.channel),normalMapUv:Jt&&_(y.normalMap.channel),displacementMapUv:It&&_(y.displacementMap.channel),emissiveMapUv:Me&&_(y.emissiveMap.channel),metalnessMapUv:Pt&&_(y.metalnessMap.channel),roughnessMapUv:L&&_(y.roughnessMap.channel),anisotropyMapUv:xt&&_(y.anisotropyMap.channel),clearcoatMapUv:St&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(y.sheenRoughnessMap.channel),specularMapUv:Qt&&_(y.specularMap.channel),specularColorMapUv:Xt&&_(y.specularColorMap.channel),specularIntensityMapUv:xe&&_(y.specularIntensityMap.channel),transmissionMapUv:B&&_(y.transmissionMap.channel),thicknessMapUv:mt&&_(y.thicknessMap.channel),alphaMapUv:it&&_(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Jt||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Te||it),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:zt,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ht,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:Me&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(x,y),v(x,y),x.push(s.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function b(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const x=g[y.type];let R;if(x){const U=ii[x];R=Ia.clone(U.uniforms)}else R=y.uniforms;return R}function A(y,x){let R;for(let U=0,D=h.length;U<D;U++){const z=h[U];if(z.cacheKey===x){R=z,++R.usedTimes;break}}return R===void 0&&(R=new iv(s,x,y,o),h.push(R)),R}function E(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function S(y){c.remove(y)}function T(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:T}}function cv(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function lv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Af(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rf(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(f,u,d,g,_,p){let m=s[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},s[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),t++,m}function a(f,u,d,g,_,p){const m=r(f,u,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function c(f,u,d,g,_,p){const m=r(f,u,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function l(f,u){e.length>1&&e.sort(f||lv),n.length>1&&n.sort(u||Af),i.length>1&&i.sort(u||Af)}function h(){for(let f=t,u=s.length;f<u;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function hv(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Rf,s.set(n,[r])):i>=o.length?(r=new Rf,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function uv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ot};break;case"SpotLight":e={position:new N,direction:new N,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function fv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let dv=0;function pv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mv(s){const t=new uv,e=fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,o=new fe,r=new fe;function a(l){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,b=0,v=0,M=0,A=0,E=0,S=0;l.sort(pv);for(let y=0,x=l.length;y<x;y++){const R=l[y],U=R.color,D=R.intensity,z=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*D,f+=U.g*D,u+=U.b*D;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],D);S++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,W=e.get(R);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=R.shadow.matrix,b++}n.directional[d]=V,d++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(U).multiplyScalar(D),V.distance=z,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[_]=V;const $=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,$.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=$.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=H,M++}_++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(U).multiplyScalar(D),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=V,p++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const $=R.shadow,W=e.get(R);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(D),V.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[m]=V,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const T=n.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==p||T.hemiLength!==m||T.numDirectionalShadows!==b||T.numPointShadows!==v||T.numSpotShadows!==M||T.numSpotMaps!==A||T.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,T.directionalLength=d,T.pointLength=g,T.spotLength=_,T.rectAreaLength=p,T.hemiLength=m,T.numDirectionalShadows=b,T.numPointShadows=v,T.numSpotShadows=M,T.numSpotMaps=A,T.numLightProbes=S,n.version=dv++)}function c(l,h){let f=0,u=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const v=l[m];if(v.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),r.identity(),o.copy(v.matrixWorld),o.premultiply(p),r.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Cf(s){const t=new mv(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function gv(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new Cf(s),t.set(i,[a])):o>=r.length?(a=new Cf(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
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
}`;function Mv(s,t,e){let n=new Wh;const i=new dt,o=new dt,r=new me,a=new Wm({depthPacking:C0}),c=new Xm,l={},h=e.maxTextureSize,f={[$i]:un,[un]:$i,[Ut]:Ut},u=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:xv,fragmentShader:_v}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new I(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let m=this.type;this.render=function(E,S,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),x=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Ei),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=m!==vi&&this.type===vi,z=m===vi&&this.type!==vi;for(let H=0,V=E.length;H<V;H++){const $=E[H],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const lt=W.getFrameExtents();if(i.multiply(lt),o.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/lt.x),i.x=o.x*lt.x,W.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/lt.y),i.y=o.y*lt.y,W.mapSize.y=o.y)),W.map===null||D===!0||z===!0){const bt=this.type!==vi?{minFilter:Ln,magFilter:Ln}:{};W.map!==null&&W.map.dispose(),W.map=new Jn(i.x,i.y,bt),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ft=W.getViewportCount();for(let bt=0;bt<ft;bt++){const Ht=W.getViewport(bt);r.set(o.x*Ht.x,o.y*Ht.y,o.x*Ht.z,o.y*Ht.w),U.viewport(r),W.updateMatrices($,bt),n=W.getFrustum(),M(S,T,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===vi&&b(W,T),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(y,x,R)};function b(E,S){const T=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jn(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(S,null,T,u,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(S,null,T,d,_,null)}function v(E,S,T,y){let x=null;const R=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)x=R;else if(x=T.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const U=x.uuid,D=S.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let H=z[D];H===void 0&&(H=x.clone(),z[D]=H,S.addEventListener("dispose",A)),x=H}if(x.visible=S.visible,x.wireframe=S.wireframe,y===vi?x.side=S.shadowSide!==null?S.shadowSide:S.side:x.side=S.shadowSide!==null?S.shadowSide:f[S.side],x.alphaMap=S.alphaMap,x.alphaTest=S.alphaTest,x.map=S.map,x.clipShadows=S.clipShadows,x.clippingPlanes=S.clippingPlanes,x.clipIntersection=S.clipIntersection,x.displacementMap=S.displacementMap,x.displacementScale=S.displacementScale,x.displacementBias=S.displacementBias,x.wireframeLinewidth=S.wireframeLinewidth,x.linewidth=S.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=s.properties.get(x);U.light=T}return x}function M(E,S,T,y,x){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===vi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const D=t.update(E),z=E.material;if(Array.isArray(z)){const H=D.groups;for(let V=0,$=H.length;V<$;V++){const W=H[V],lt=z[W.materialIndex];if(lt&&lt.visible){const ft=v(E,lt,y,x);E.onBeforeShadow(s,E,S,T,D,ft,W),s.renderBufferDirect(T,null,D,ft,E,W),E.onAfterShadow(s,E,S,T,D,ft,W)}}}else if(z.visible){const H=v(E,z,y,x);E.onBeforeShadow(s,E,S,T,D,H,null),s.renderBufferDirect(T,null,D,H,E,null),E.onAfterShadow(s,E,S,T,D,H,null)}}const U=E.children;for(let D=0,z=U.length;D<z;D++)M(U[D],S,T,y,x)}function A(E){E.target.removeEventListener("dispose",A);for(const T in l){const y=l[T],x=E.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const vv={[dl]:pl,[ml]:_l,[gl]:Ml,[vo]:xl,[pl]:dl,[_l]:ml,[Ml]:gl,[xl]:vo};function yv(s,t){function e(){let B=!1;const mt=new me;let J=null;const it=new me(0,0,0,0);return{setMask:function(vt){J!==vt&&!B&&(s.colorMask(vt,vt,vt,vt),J=vt)},setLocked:function(vt){B=vt},setClear:function(vt,_t,Vt,Ae,Ye){Ye===!0&&(vt*=Ae,_t*=Ae,Vt*=Ae),mt.set(vt,_t,Vt,Ae),it.equals(mt)===!1&&(s.clearColor(vt,_t,Vt,Ae),it.copy(mt))},reset:function(){B=!1,J=null,it.set(-1,0,0,0)}}}function n(){let B=!1,mt=!1,J=null,it=null,vt=null;return{setReversed:function(_t){if(mt!==_t){const Vt=t.get("EXT_clip_control");mt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const Ae=vt;vt=null,this.setClear(Ae)}mt=_t},getReversed:function(){return mt},setTest:function(_t){_t?ut(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(_t){J!==_t&&!B&&(s.depthMask(_t),J=_t)},setFunc:function(_t){if(mt&&(_t=vv[_t]),it!==_t){switch(_t){case dl:s.depthFunc(s.NEVER);break;case pl:s.depthFunc(s.ALWAYS);break;case ml:s.depthFunc(s.LESS);break;case vo:s.depthFunc(s.LEQUAL);break;case gl:s.depthFunc(s.EQUAL);break;case xl:s.depthFunc(s.GEQUAL);break;case _l:s.depthFunc(s.GREATER);break;case Ml:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=_t}},setLocked:function(_t){B=_t},setClear:function(_t){vt!==_t&&(mt&&(_t=1-_t),s.clearDepth(_t),vt=_t)},reset:function(){B=!1,J=null,it=null,vt=null,mt=!1}}}function i(){let B=!1,mt=null,J=null,it=null,vt=null,_t=null,Vt=null,Ae=null,Ye=null;return{setTest:function(ue){B||(ue?ut(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!B&&(s.stencilMask(ue),mt=ue)},setFunc:function(ue,Xn,pi){(J!==ue||it!==Xn||vt!==pi)&&(s.stencilFunc(ue,Xn,pi),J=ue,it=Xn,vt=pi)},setOp:function(ue,Xn,pi){(_t!==ue||Vt!==Xn||Ae!==pi)&&(s.stencilOp(ue,Xn,pi),_t=ue,Vt=Xn,Ae=pi)},setLocked:function(ue){B=ue},setClear:function(ue){Ye!==ue&&(s.clearStencil(ue),Ye=ue)},reset:function(){B=!1,mt=null,J=null,it=null,vt=null,_t=null,Vt=null,Ae=null,Ye=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,_=!1,p=null,m=null,b=null,v=null,M=null,A=null,E=null,S=new ot(0,0,0),T=0,y=!1,x=null,R=null,U=null,D=null,z=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=$>=2);let lt=null,ft={};const bt=s.getParameter(s.SCISSOR_BOX),Ht=s.getParameter(s.VIEWPORT),jt=new me().fromArray(bt),Q=new me().fromArray(Ht);function at(B,mt,J,it){const vt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(B,_t),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<J;Vt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(mt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return _t}const yt={};yt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ut(s.DEPTH_TEST),r.setFunc(vo),Kt(!1),Jt(Mu),ut(s.CULL_FACE),O(Ei);function ut(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function zt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Bt(B,mt){return f[B]!==mt?(s.bindFramebuffer(B,mt),f[B]=mt,B===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=mt),B===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function qt(B,mt){let J=d,it=!1;if(B){J=u.get(mt),J===void 0&&(J=[],u.set(mt,J));const vt=B.textures;if(J.length!==vt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Vt=vt.length;_t<Vt;_t++)J[_t]=s.COLOR_ATTACHMENT0+_t;J.length=vt.length,it=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,it=!0);it&&s.drawBuffers(J)}function Te(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const te={[ps]:s.FUNC_ADD,[n0]:s.FUNC_SUBTRACT,[i0]:s.FUNC_REVERSE_SUBTRACT};te[s0]=s.MIN,te[o0]=s.MAX;const Ce={[r0]:s.ZERO,[a0]:s.ONE,[c0]:s.SRC_COLOR,[ul]:s.SRC_ALPHA,[p0]:s.SRC_ALPHA_SATURATE,[f0]:s.DST_COLOR,[h0]:s.DST_ALPHA,[l0]:s.ONE_MINUS_SRC_COLOR,[fl]:s.ONE_MINUS_SRC_ALPHA,[d0]:s.ONE_MINUS_DST_COLOR,[u0]:s.ONE_MINUS_DST_ALPHA,[m0]:s.CONSTANT_COLOR,[g0]:s.ONE_MINUS_CONSTANT_COLOR,[x0]:s.CONSTANT_ALPHA,[_0]:s.ONE_MINUS_CONSTANT_ALPHA};function O(B,mt,J,it,vt,_t,Vt,Ae,Ye,ue){if(B===Ei){_===!0&&(zt(s.BLEND),_=!1);return}if(_===!1&&(ut(s.BLEND),_=!0),B!==e0){if(B!==p||ue!==y){if((m!==ps||M!==ps)&&(s.blendEquation(s.FUNC_ADD),m=ps,M=ps),ue)switch(B){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pe:s.blendFunc(s.ONE,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pe:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,v=null,A=null,E=null,S.set(0,0,0),T=0,p=B,y=ue}return}vt=vt||mt,_t=_t||J,Vt=Vt||it,(mt!==m||vt!==M)&&(s.blendEquationSeparate(te[mt],te[vt]),m=mt,M=vt),(J!==b||it!==v||_t!==A||Vt!==E)&&(s.blendFuncSeparate(Ce[J],Ce[it],Ce[_t],Ce[Vt]),b=J,v=it,A=_t,E=Vt),(Ae.equals(S)===!1||Ye!==T)&&(s.blendColor(Ae.r,Ae.g,Ae.b,Ye),S.copy(Ae),T=Ye),p=B,y=!1}function Dn(B,mt){B.side===Ut?zt(s.CULL_FACE):ut(s.CULL_FACE);let J=B.side===un;mt&&(J=!J),Kt(J),B.blending===lo&&B.transparent===!1?O(Ei):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const it=B.stencilWrite;a.setTest(it),it&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Me(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ut(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(B){x!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),x=B)}function Jt(B){B!==Qp?(ut(s.CULL_FACE),B!==R&&(B===Mu?s.cullFace(s.BACK):B===t0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),R=B}function It(B){B!==U&&(V&&s.lineWidth(B),U=B)}function Me(B,mt,J){B?(ut(s.POLYGON_OFFSET_FILL),(D!==mt||z!==J)&&(s.polygonOffset(mt,J),D=mt,z=J)):zt(s.POLYGON_OFFSET_FILL)}function Pt(B){B?ut(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function L(B){B===void 0&&(B=s.TEXTURE0+H-1),lt!==B&&(s.activeTexture(B),lt=B)}function C(B,mt,J){J===void 0&&(lt===null?J=s.TEXTURE0+H-1:J=lt);let it=ft[J];it===void 0&&(it={type:void 0,texture:void 0},ft[J]=it),(it.type!==B||it.texture!==mt)&&(lt!==J&&(s.activeTexture(J),lt=J),s.bindTexture(B,mt||yt[B]),it.type=B,it.texture=mt)}function X(){const B=ft[lt];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(B){jt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),jt.copy(B))}function Et(B){Q.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Q.copy(B))}function Qt(B,mt){let J=l.get(mt);J===void 0&&(J=new WeakMap,l.set(mt,J));let it=J.get(B);it===void 0&&(it=s.getUniformBlockIndex(mt,B.name),J.set(B,it))}function Xt(B,mt){const it=l.get(mt).get(B);c.get(mt)!==it&&(s.uniformBlockBinding(mt,it,B.__bindingPointIndex),c.set(mt,it))}function xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},lt=null,ft={},f={},u=new WeakMap,d=[],g=null,_=!1,p=null,m=null,b=null,v=null,M=null,A=null,E=null,S=new ot(0,0,0),T=0,y=!1,x=null,R=null,U=null,D=null,z=null,jt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ut,disable:zt,bindFramebuffer:Bt,drawBuffers:qt,useProgram:Te,setBlending:O,setMaterial:Dn,setFlipSided:Kt,setCullFace:Jt,setLineWidth:It,setPolygonOffset:Me,setScissorTest:Pt,activeTexture:L,bindTexture:C,unbindTexture:X,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:Tt,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:ee,texStorage3D:ct,texSubImage2D:et,texSubImage3D:Rt,compressedTexSubImage2D:xt,compressedTexSubImage3D:St,scissor:Ft,viewport:Et,reset:xe}}function wv(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return d?new OffscreenCanvas(L,C):Pa("canvas")}function _(L,C,X){let nt=1;const st=Pt(L);if((st.width>X||st.height>X)&&(nt=X/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const et=Math.floor(nt*st.width),Rt=Math.floor(nt*st.height);f===void 0&&(f=g(et,Rt));const xt=C?g(et,Rt):f;return xt.width=et,xt.height=Rt,xt.getContext("2d").drawImage(L,0,0,et,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+et+"x"+Rt+")."),xt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function p(L){return L.generateMipmaps}function m(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(L,C,X,nt,st=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let et=C;if(C===s.RED&&(X===s.FLOAT&&(et=s.R32F),X===s.HALF_FLOAT&&(et=s.R16F),X===s.UNSIGNED_BYTE&&(et=s.R8)),C===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.R8UI),X===s.UNSIGNED_SHORT&&(et=s.R16UI),X===s.UNSIGNED_INT&&(et=s.R32UI),X===s.BYTE&&(et=s.R8I),X===s.SHORT&&(et=s.R16I),X===s.INT&&(et=s.R32I)),C===s.RG&&(X===s.FLOAT&&(et=s.RG32F),X===s.HALF_FLOAT&&(et=s.RG16F),X===s.UNSIGNED_BYTE&&(et=s.RG8)),C===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RG8UI),X===s.UNSIGNED_SHORT&&(et=s.RG16UI),X===s.UNSIGNED_INT&&(et=s.RG32UI),X===s.BYTE&&(et=s.RG8I),X===s.SHORT&&(et=s.RG16I),X===s.INT&&(et=s.RG32I)),C===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGB8UI),X===s.UNSIGNED_SHORT&&(et=s.RGB16UI),X===s.UNSIGNED_INT&&(et=s.RGB32UI),X===s.BYTE&&(et=s.RGB8I),X===s.SHORT&&(et=s.RGB16I),X===s.INT&&(et=s.RGB32I)),C===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),X===s.UNSIGNED_INT&&(et=s.RGBA32UI),X===s.BYTE&&(et=s.RGBA8I),X===s.SHORT&&(et=s.RGBA16I),X===s.INT&&(et=s.RGBA32I)),C===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),C===s.RGBA){const Rt=st?Ra:re.getTransfer(nt);X===s.FLOAT&&(et=s.RGBA32F),X===s.HALF_FLOAT&&(et=s.RGBA16F),X===s.UNSIGNED_BYTE&&(et=Rt===de?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(L,C){let X;return L?C===null||C===Ss||C===So?X=s.DEPTH24_STENCIL8:C===hi?X=s.DEPTH32F_STENCIL8:C===hr&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ss||C===So?X=s.DEPTH_COMPONENT24:C===hi?X=s.DEPTH_COMPONENT32F:C===hr&&(X=s.DEPTH_COMPONENT16),X}function A(L,C){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ln&&L.minFilter!==li?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function E(L){const C=L.target;C.removeEventListener("dispose",E),T(C),C.isVideoTexture&&h.delete(C)}function S(L){const C=L.target;C.removeEventListener("dispose",S),x(C)}function T(L){const C=n.get(L);if(C.__webglInit===void 0)return;const X=L.source,nt=u.get(X);if(nt){const st=nt[C.__cacheKey];st.usedTimes--,st.usedTimes===0&&y(L),Object.keys(nt).length===0&&u.delete(X)}n.remove(L)}function y(L){const C=n.get(L);s.deleteTexture(C.__webglTexture);const X=L.source,nt=u.get(X);delete nt[C.__cacheKey],r.memory.textures--}function x(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(C.__webglFramebuffer[nt]))for(let st=0;st<C.__webglFramebuffer[nt].length;st++)s.deleteFramebuffer(C.__webglFramebuffer[nt][st]);else s.deleteFramebuffer(C.__webglFramebuffer[nt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[nt])}else{if(Array.isArray(C.__webglFramebuffer))for(let nt=0;nt<C.__webglFramebuffer.length;nt++)s.deleteFramebuffer(C.__webglFramebuffer[nt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let nt=0;nt<C.__webglColorRenderbuffer.length;nt++)C.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[nt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const X=L.textures;for(let nt=0,st=X.length;nt<st;nt++){const et=n.get(X[nt]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),r.memory.textures--),n.remove(X[nt])}n.remove(L)}let R=0;function U(){R=0}function D(){const L=R;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),R+=1,L}function z(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function H(L,C){const X=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(X,L,C);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+C)}function V(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Q(X,L,C);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+C)}function $(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Q(X,L,C);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+C)}function W(L,C){const X=n.get(L);if(L.version>0&&X.__version!==L.version){at(X,L,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+C)}const lt={[Aa]:s.REPEAT,[gs]:s.CLAMP_TO_EDGE,[wl]:s.MIRRORED_REPEAT},ft={[Ln]:s.NEAREST,[A0]:s.NEAREST_MIPMAP_NEAREST,[Rr]:s.NEAREST_MIPMAP_LINEAR,[li]:s.LINEAR,[rc]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},bt={[I0]:s.NEVER,[F0]:s.ALWAYS,[L0]:s.LESS,[_d]:s.LEQUAL,[D0]:s.EQUAL,[z0]:s.GEQUAL,[U0]:s.GREATER,[N0]:s.NOTEQUAL};function Ht(L,C){if(C.type===hi&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===li||C.magFilter===rc||C.magFilter===Rr||C.magFilter===xs||C.minFilter===li||C.minFilter===rc||C.minFilter===Rr||C.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,lt[C.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,lt[C.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,lt[C.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ft[C.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,bt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ln||C.minFilter!==Rr&&C.minFilter!==xs||C.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function jt(L,C){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));const nt=C.source;let st=u.get(nt);st===void 0&&(st={},u.set(nt,st));const et=z(C);if(et!==L.__cacheKey){st[et]===void 0&&(st[et]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,X=!0),st[et].usedTimes++;const Rt=st[L.__cacheKey];Rt!==void 0&&(st[L.__cacheKey].usedTimes--,Rt.usedTimes===0&&y(C)),L.__cacheKey=et,L.__webglTexture=st[et].texture}return X}function Q(L,C,X){let nt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(nt=s.TEXTURE_3D);const st=jt(L,C),et=C.source;e.bindTexture(nt,L.__webglTexture,s.TEXTURE0+X);const Rt=n.get(et);if(et.version!==Rt.__version||st===!0){e.activeTexture(s.TEXTURE0+X);const xt=re.getPrimaries(re.workingColorSpace),St=C.colorSpace===Wi?null:re.getPrimaries(C.colorSpace),ee=C.colorSpace===Wi||xt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ct=_(C.image,!1,i.maxTextureSize);ct=Me(C,ct);const Tt=o.convert(C.format,C.colorSpace),Nt=o.convert(C.type);let Ft=v(C.internalFormat,Tt,Nt,C.colorSpace,C.isVideoTexture);Ht(nt,C);let Et;const Qt=C.mipmaps,Xt=C.isVideoTexture!==!0,xe=Rt.__version===void 0||st===!0,B=et.dataReady,mt=A(C,ct);if(C.isDepthTexture)Ft=M(C.format===bo,C.type),xe&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Ft,ct.width,ct.height,0,Tt,Nt,null));else if(C.isDataTexture)if(Qt.length>0){Xt&&xe&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,Qt[0].width,Qt[0].height);for(let J=0,it=Qt.length;J<it;J++)Et=Qt[J],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,Et.width,Et.height,Tt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,J,Ft,Et.width,Et.height,0,Tt,Nt,Et.data);C.generateMipmaps=!1}else Xt?(xe&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,ct.width,ct.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,Tt,Nt,ct.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,ct.width,ct.height,0,Tt,Nt,ct.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Xt&&xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ft,Qt[0].width,Qt[0].height,ct.depth);for(let J=0,it=Qt.length;J<it;J++)if(Et=Qt[J],C.format!==Kn)if(Tt!==null)if(Xt){if(B)if(C.layerUpdates.size>0){const vt=of(Et.width,Et.height,C.format,C.type);for(const _t of C.layerUpdates){const Vt=Et.data.subarray(_t*vt/Et.data.BYTES_PER_ELEMENT,(_t+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,_t,Et.width,Et.height,1,Tt,Vt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Et.width,Et.height,ct.depth,Tt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Ft,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Et.width,Et.height,ct.depth,Tt,Nt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,Ft,Et.width,Et.height,ct.depth,0,Tt,Nt,Et.data)}else{Xt&&xe&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,Qt[0].width,Qt[0].height);for(let J=0,it=Qt.length;J<it;J++)Et=Qt[J],C.format!==Kn?Tt!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,J,Ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?B&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,Et.width,Et.height,Tt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,J,Ft,Et.width,Et.height,0,Tt,Nt,Et.data)}else if(C.isDataArrayTexture)if(Xt){if(xe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ft,ct.width,ct.height,ct.depth),B)if(C.layerUpdates.size>0){const J=of(ct.width,ct.height,C.format,C.type);for(const it of C.layerUpdates){const vt=ct.data.subarray(it*J/ct.data.BYTES_PER_ELEMENT,(it+1)*J/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,Tt,Nt,vt)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Tt,Nt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,Tt,Nt,ct.data);else if(C.isData3DTexture)Xt?(xe&&e.texStorage3D(s.TEXTURE_3D,mt,Ft,ct.width,ct.height,ct.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Tt,Nt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,Tt,Nt,ct.data);else if(C.isFramebufferTexture){if(xe)if(Xt)e.texStorage2D(s.TEXTURE_2D,mt,Ft,ct.width,ct.height);else{let J=ct.width,it=ct.height;for(let vt=0;vt<mt;vt++)e.texImage2D(s.TEXTURE_2D,vt,Ft,J,it,0,Tt,Nt,null),J>>=1,it>>=1}}else if(Qt.length>0){if(Xt&&xe){const J=Pt(Qt[0]);e.texStorage2D(s.TEXTURE_2D,mt,Ft,J.width,J.height)}for(let J=0,it=Qt.length;J<it;J++)Et=Qt[J],Xt?B&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,Tt,Nt,Et):e.texImage2D(s.TEXTURE_2D,J,Ft,Tt,Nt,Et);C.generateMipmaps=!1}else if(Xt){if(xe){const J=Pt(ct);e.texStorage2D(s.TEXTURE_2D,mt,Ft,J.width,J.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Nt,ct)}else e.texImage2D(s.TEXTURE_2D,0,Ft,Tt,Nt,ct);p(C)&&m(nt),Rt.__version=et.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function at(L,C,X){if(C.image.length!==6)return;const nt=jt(L,C),st=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+X);const et=n.get(st);if(st.version!==et.__version||nt===!0){e.activeTexture(s.TEXTURE0+X);const Rt=re.getPrimaries(re.workingColorSpace),xt=C.colorSpace===Wi?null:re.getPrimaries(C.colorSpace),St=C.colorSpace===Wi||Rt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const ee=C.isCompressedTexture||C.image[0].isCompressedTexture,ct=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let it=0;it<6;it++)!ee&&!ct?Tt[it]=_(C.image[it],!0,i.maxCubemapSize):Tt[it]=ct?C.image[it].image:C.image[it],Tt[it]=Me(C,Tt[it]);const Nt=Tt[0],Ft=o.convert(C.format,C.colorSpace),Et=o.convert(C.type),Qt=v(C.internalFormat,Ft,Et,C.colorSpace),Xt=C.isVideoTexture!==!0,xe=et.__version===void 0||nt===!0,B=st.dataReady;let mt=A(C,Nt);Ht(s.TEXTURE_CUBE_MAP,C);let J;if(ee){Xt&&xe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Qt,Nt.width,Nt.height);for(let it=0;it<6;it++){J=Tt[it].mipmaps;for(let vt=0;vt<J.length;vt++){const _t=J[vt];C.format!==Kn?Ft!==null?Xt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,_t.width,_t.height,Ft,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Qt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,_t.width,_t.height,Ft,Et,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Qt,_t.width,_t.height,0,Ft,Et,_t.data)}}}else{if(J=C.mipmaps,Xt&&xe){J.length>0&&mt++;const it=Pt(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Qt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Tt[it].width,Tt[it].height,Ft,Et,Tt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Tt[it].width,Tt[it].height,0,Ft,Et,Tt[it].data);for(let vt=0;vt<J.length;vt++){const Vt=J[vt].image[it].image;Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Vt.width,Vt.height,Ft,Et,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Qt,Vt.width,Vt.height,0,Ft,Et,Vt.data)}}else{Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,Et,Tt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Qt,Ft,Et,Tt[it]);for(let vt=0;vt<J.length;vt++){const _t=J[vt];Xt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,Ft,Et,_t.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Qt,Ft,Et,_t.image[it])}}}p(C)&&m(s.TEXTURE_CUBE_MAP),et.__version=st.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function yt(L,C,X,nt,st,et){const Rt=o.convert(X.format,X.colorSpace),xt=o.convert(X.type),St=v(X.internalFormat,Rt,xt,X.colorSpace),ee=n.get(C),ct=n.get(X);if(ct.__renderTarget=C,!ee.__hasExternalTextures){const Tt=Math.max(1,C.width>>et),Nt=Math.max(1,C.height>>et);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,et,St,Tt,Nt,C.depth,0,Rt,xt,null):e.texImage2D(st,et,St,Tt,Nt,0,Rt,xt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,st,ct.__webglTexture,0,Kt(C)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,st,ct.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(L,C,X){if(s.bindRenderbuffer(s.RENDERBUFFER,L),C.depthBuffer){const nt=C.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,et=M(C.stencilBuffer,st),Rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=Kt(C);Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,et,C.width,C.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,et,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,et,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,L)}else{const nt=C.textures;for(let st=0;st<nt.length;st++){const et=nt[st],Rt=o.convert(et.format,et.colorSpace),xt=o.convert(et.type),St=v(et.internalFormat,Rt,xt,et.colorSpace),ee=Kt(C);X&&Jt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,St,C.width,C.height):Jt(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,St,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,St,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(C.depthTexture);nt.__renderTarget=C,(!nt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),H(C.depthTexture,0);const st=nt.__webglTexture,et=Kt(C);if(C.depthTexture.format===ho)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(C.depthTexture.format===bo)Jt(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Bt(L){const C=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),nt){const st=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),C.__depthDisposeCallback=st}C.__boundDepthTexture=nt}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");zt(C.__webglFramebuffer,L)}else if(X){C.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[nt]),C.__webglDepthbuffer[nt]===void 0)C.__webglDepthbuffer[nt]=s.createRenderbuffer(),ut(C.__webglDepthbuffer[nt],L,!1);else{const st=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=C.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,et)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),ut(C.__webglDepthbuffer,L,!1);else{const nt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,st)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(L,C,X){const nt=n.get(L);C!==void 0&&yt(nt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Bt(L)}function Te(L){const C=L.texture,X=n.get(L),nt=n.get(C);L.addEventListener("dispose",S);const st=L.textures,et=L.isWebGLCubeRenderTarget===!0,Rt=st.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=C.version,r.memory.textures++),et){X.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer[xt]=[];for(let St=0;St<C.mipmaps.length;St++)X.__webglFramebuffer[xt][St]=s.createFramebuffer()}else X.__webglFramebuffer[xt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){X.__webglFramebuffer=[];for(let xt=0;xt<C.mipmaps.length;xt++)X.__webglFramebuffer[xt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let xt=0,St=st.length;xt<St;xt++){const ee=n.get(st[xt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&Jt(L)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xt=0;xt<st.length;xt++){const St=st[xt];X.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[xt]);const ee=o.convert(St.format,St.colorSpace),ct=o.convert(St.type),Tt=v(St.internalFormat,ee,ct,St.colorSpace,L.isXRRenderTarget===!0),Nt=Kt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Tt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,X.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,C);for(let xt=0;xt<6;xt++)if(C.mipmaps&&C.mipmaps.length>0)for(let St=0;St<C.mipmaps.length;St++)yt(X.__webglFramebuffer[xt][St],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,St);else yt(X.__webglFramebuffer[xt],L,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);p(C)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let xt=0,St=st.length;xt<St;xt++){const ee=st[xt],ct=n.get(ee);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),Ht(s.TEXTURE_2D,ee),yt(X.__webglFramebuffer,L,ee,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),p(ee)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let xt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,nt.__webglTexture),Ht(xt,C),C.mipmaps&&C.mipmaps.length>0)for(let St=0;St<C.mipmaps.length;St++)yt(X.__webglFramebuffer[St],L,C,s.COLOR_ATTACHMENT0,xt,St);else yt(X.__webglFramebuffer,L,C,s.COLOR_ATTACHMENT0,xt,0);p(C)&&m(xt),e.unbindTexture()}L.depthBuffer&&Bt(L)}function te(L){const C=L.textures;for(let X=0,nt=C.length;X<nt;X++){const st=C[X];if(p(st)){const et=b(L),Rt=n.get(st).__webglTexture;e.bindTexture(et,Rt),m(et),e.unbindTexture()}}}const Ce=[],O=[];function Dn(L){if(L.samples>0){if(Jt(L)===!1){const C=L.textures,X=L.width,nt=L.height;let st=s.COLOR_BUFFER_BIT;const et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(L),xt=C.length>1;if(xt)for(let St=0;St<C.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let St=0;St<C.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),xt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const ee=n.get(C[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,X,nt,0,0,X,nt,st,s.NEAREST),c===!0&&(Ce.length=0,O.length=0,Ce.push(s.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ce.push(et),O.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let St=0;St<C.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[St]);const ee=n.get(C[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const C=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Kt(L){return Math.min(i.maxSamples,L.samples)}function Jt(L){const C=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function It(L){const C=r.render.frame;h.get(L)!==C&&(h.set(L,C),L.update())}function Me(L,C){const X=L.colorSpace,nt=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==To&&X!==Wi&&(re.getTransfer(X)===de?(nt!==Kn||st!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),C}function Pt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=qt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Jt}function Sv(s,t){function e(n,i=Wi){let o;const r=re.getTransfer(i);if(n===Pi)return s.UNSIGNED_BYTE;if(n===zh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cd)return s.BYTE;if(n===ld)return s.SHORT;if(n===hr)return s.UNSIGNED_SHORT;if(n===Nh)return s.INT;if(n===Ss)return s.UNSIGNED_INT;if(n===hi)return s.FLOAT;if(n===Ai)return s.HALF_FLOAT;if(n===ud)return s.ALPHA;if(n===fd)return s.RGB;if(n===Kn)return s.RGBA;if(n===dd)return s.LUMINANCE;if(n===pd)return s.LUMINANCE_ALPHA;if(n===ho)return s.DEPTH_COMPONENT;if(n===bo)return s.DEPTH_STENCIL;if(n===Oh)return s.RED;if(n===Bh)return s.RED_INTEGER;if(n===md)return s.RG;if(n===kh)return s.RG_INTEGER;if(n===Gh)return s.RGBA_INTEGER;if(n===da||n===pa||n===ma||n===ga)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===da)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===da)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===bl||n===Tl||n===El)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Sl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Al||n===Rl)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Cl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===zl||n===Fl||n===Ol||n===Bl||n===kl||n===Gl||n===Hl||n===Vl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Pl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===Wl||n===Xl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===xa)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gd||n===Yl||n===ql||n===Zl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===xa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===So?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const bv={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
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

}`;class Av{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Je,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:Tv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new _e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rv extends Io{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const _=new Av,p=e.getContextAttributes();let m=null,b=null;const v=[],M=[],A=new dt;let E=null;const S=new Cn;S.viewport=new me;const T=new Cn;T.viewport=new me;const y=[S,T],x=new $m;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let at=v[Q];return at===void 0&&(at=new Gc,v[Q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Q){let at=v[Q];return at===void 0&&(at=new Gc,v[Q]=at),at.getGripSpace()},this.getHand=function(Q){let at=v[Q];return at===void 0&&(at=new Gc,v[Q]=at),at.getHandSpace()};function D(Q){const at=M.indexOf(Q.inputSource);if(at===-1)return;const yt=v[at];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,l||r),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",H);for(let Q=0;Q<v.length;Q++){const at=M[Q];at!==null&&(M[Q]=null,v[Q].disconnect(at))}R=null,U=null,_.reset(),t.setRenderTarget(m),d=null,u=null,f=null,i=null,b=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",z),i.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let yt=null,ut=null,zt=null;p.depth&&(zt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=p.stencil?bo:ho,ut=p.stencil?So:Ss);const Bt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(Bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Jn(u.textureWidth,u.textureHeight,{format:Kn,type:Pi,depthTexture:new Id(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const yt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Jn(d.framebufferWidth,d.framebufferHeight,{format:Kn,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Q){for(let at=0;at<Q.removed.length;at++){const yt=Q.removed[at],ut=M.indexOf(yt);ut>=0&&(M[ut]=null,v[ut].disconnect(yt))}for(let at=0;at<Q.added.length;at++){const yt=Q.added[at];let ut=M.indexOf(yt);if(ut===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=M.length){M.push(yt),ut=Bt;break}else if(M[Bt]===null){M[Bt]=yt,ut=Bt;break}if(ut===-1)break}const zt=v[ut];zt&&zt.connect(yt)}}const V=new N,$=new N;function W(Q,at,yt){V.setFromMatrixPosition(at.matrixWorld),$.setFromMatrixPosition(yt.matrixWorld);const ut=V.distanceTo($),zt=at.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,qt=zt[14]/(zt[10]-1),Te=zt[14]/(zt[10]+1),te=(zt[9]+1)/zt[5],Ce=(zt[9]-1)/zt[5],O=(zt[8]-1)/zt[0],Dn=(Bt[8]+1)/Bt[0],Kt=qt*O,Jt=qt*Dn,It=ut/(-O+Dn),Me=It*-O;if(at.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Me),Q.translateZ(It),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),zt[10]===-1)Q.projectionMatrix.copy(at.projectionMatrix),Q.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Pt=qt+It,L=Te+It,C=Kt-Me,X=Jt+(ut-Me),nt=te*Te/L*Pt,st=Ce*Te/L*Pt;Q.projectionMatrix.makePerspective(C,X,nt,st,Pt,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function lt(Q,at){at===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(at.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let at=Q.near,yt=Q.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),x.near=T.near=S.near=at,x.far=T.far=S.far=yt,(R!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,U=x.far),S.layers.mask=Q.layers.mask|2,T.layers.mask=Q.layers.mask|4,x.layers.mask=S.layers.mask|T.layers.mask;const ut=Q.parent,zt=x.cameras;lt(x,ut);for(let Bt=0;Bt<zt.length;Bt++)lt(zt[Bt],ut);zt.length===2?W(x,S,T):x.projectionMatrix.copy(S.projectionMatrix),ft(Q,x,ut)};function ft(Q,at,yt){yt===null?Q.matrix.copy(at.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(at.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(at.projectionMatrix),Q.projectionMatrixInverse.copy(at.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$l*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Q){c=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let bt=null;function Ht(Q,at){if(h=at.getViewerPose(l||r),g=at,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let ut=!1;yt.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let Bt=0;Bt<yt.length;Bt++){const qt=yt[Bt];let Te=null;if(d!==null)Te=d.getViewport(qt);else{const Ce=f.getViewSubImage(u,qt);Te=Ce.viewport,Bt===0&&(t.setRenderTargetTextures(b,Ce.colorTexture,u.ignoreDepthValues?void 0:Ce.depthStencilTexture),t.setRenderTarget(b))}let te=y[Bt];te===void 0&&(te=new Cn,te.layers.enable(Bt),te.viewport=new me,y[Bt]=te),te.matrix.fromArray(qt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(qt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Te.x,Te.y,Te.width,Te.height),Bt===0&&(x.matrix.copy(te.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(te)}const zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Bt=f.getDepthInformation(yt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,i.renderState)}}for(let yt=0;yt<v.length;yt++){const ut=M[yt],zt=v[yt];ut!==null&&zt!==void 0&&zt.update(ut,at,l||r)}bt&&bt(Q,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const jt=new Hd;jt.setAnimationLoop(Ht),this.setAnimationLoop=function(Q){bt=Q},this.dispose=function(){}}}const is=new fi,Cv=new fe;function Pv(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ed(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(p,m):m.isMeshToonMaterial?(o(p,m),f(p,m)):m.isMeshPhongMaterial?(o(p,m),h(p,m)):m.isMeshStandardMaterial?(o(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(o(p,m),g(p,m)):m.isMeshDepthMaterial?o(p,m):m.isMeshDistanceMaterial?(o(p,m),_(p,m)):m.isMeshNormalMaterial?o(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,b,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),v=b.envMap,M=b.envMapRotation;v&&(p.envMap.value=v,is.copy(M),is.x*=-1,is.y*=-1,is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),p.envMapRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(is)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,v){const M=v.program;n.uniformBlockBinding(b,M)}function l(b,v){let M=i[b.id];M===void 0&&(g(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(b,A);const E=t.render.frame;o[b.id]!==E&&(u(b),o[b.id]=E)}function h(b){const v=f();b.__bindingPointIndex=v;const M=s.createBuffer(),A=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function f(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const v=i[b.id],M=b.uniforms,A=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,S=M.length;E<S;E++){const T=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,x=T.length;y<x;y++){const R=T[y];if(d(R,E,y,A)===!0){const U=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let H=0;H<D.length;H++){const V=D[H],$=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,U+z,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,v,M,A){const E=b.value,S=v+"_"+M;if(A[S]===void 0)return typeof E=="number"||typeof E=="boolean"?A[S]=E:A[S]=E.clone(),!0;{const T=A[S];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return A[S]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(b){const v=b.uniforms;let M=0;const A=16;for(let S=0,T=v.length;S<T;S++){const y=Array.isArray(v[S])?v[S]:[v[S]];for(let x=0,R=y.length;x<R;x++){const U=y[x],D=Array.isArray(U.value)?U.value:[U.value];for(let z=0,H=D.length;z<H;z++){const V=D[z],$=_(V),W=M%A,lt=W%$.boundary,ft=W+lt;M+=lt,ft!==0&&A-ft<$.storage&&(M+=A-ft),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=$.storage}}}const E=M%A;return E>0&&(M+=A-E),b.__size=M,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){const v=b.target;v.removeEventListener("dispose",p);const M=r.indexOf(v.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete o[v.id]}function m(){for(const b in i)s.deleteBuffer(i[b]);r=[],i={},o={}}return{bind:c,update:l,dispose:m}}class Lv{constructor(t={}){const{canvas:e=B0(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const b=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=Zi,this.toneMappingExposure=1;const M=this;let A=!1,E=0,S=0,T=null,y=-1,x=null;const R=new me,U=new me;let D=null;const z=new ot(0);let H=0,V=e.width,$=e.height,W=1,lt=null,ft=null;const bt=new me(0,0,V,$),Ht=new me(0,0,V,$);let jt=!1;const Q=new Wh;let at=!1,yt=!1;this.transmissionResolutionScale=1;const ut=new fe,zt=new fe,Bt=new N,qt=new me,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Ce(){return T===null?W:1}let O=n;function Dn(P,k){return e.getContext(P,k)}try{const P={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uh}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),O===null){const k="webgl2";if(O=Dn(k,P),O===null)throw Dn(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Kt,Jt,It,Me,Pt,L,C,X,nt,st,et,Rt,xt,St,ee,ct,Tt,Nt,Ft,Et,Qt,Xt,xe,B;function mt(){Kt=new G_(O),Kt.init(),Xt=new Sv(O,Kt),Jt=new N_(O,Kt,t,Xt),It=new yv(O,Kt),Jt.reverseDepthBuffer&&u&&It.buffers.depth.setReversed(!0),Me=new W_(O),Pt=new cv,L=new wv(O,Kt,It,Pt,Jt,Xt,Me),C=new F_(M),X=new k_(M),nt=new Km(O),xe=new D_(O,nt),st=new H_(O,nt,Me,xe),et=new Y_(O,st,nt,Me),Ft=new X_(O,Jt,L),ct=new z_(Pt),Rt=new av(M,C,X,Kt,Jt,xe,ct),xt=new Pv(M,Pt),St=new hv,ee=new gv(Kt),Nt=new L_(M,C,X,It,et,d,c),Tt=new Mv(M,et,Jt),B=new Iv(O,Me,Jt,It),Et=new U_(O,Kt,Me),Qt=new V_(O,Kt,Me),Me.programs=Rt.programs,M.capabilities=Jt,M.extensions=Kt,M.properties=Pt,M.renderLists=St,M.shadowMap=Tt,M.state=It,M.info=Me}mt();const J=new Rv(M,O);this.xr=J,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const P=Kt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Kt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(P){P!==void 0&&(W=P,this.setSize(V,$,!1))},this.getSize=function(P){return P.set(V,$)},this.setSize=function(P,k,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,$=k,e.width=Math.floor(P*W),e.height=Math.floor(k*W),Y===!0&&(e.style.width=P+"px",e.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(V*W,$*W).floor()},this.setDrawingBufferSize=function(P,k,Y){V=P,$=k,W=Y,e.width=Math.floor(P*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(bt)},this.setViewport=function(P,k,Y,q){P.isVector4?bt.set(P.x,P.y,P.z,P.w):bt.set(P,k,Y,q),It.viewport(R.copy(bt).multiplyScalar(W).round())},this.getScissor=function(P){return P.copy(Ht)},this.setScissor=function(P,k,Y,q){P.isVector4?Ht.set(P.x,P.y,P.z,P.w):Ht.set(P,k,Y,q),It.scissor(U.copy(Ht).multiplyScalar(W).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(P){It.setScissorTest(jt=P)},this.setOpaqueSort=function(P){lt=P},this.setTransparentSort=function(P){ft=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(P=!0,k=!0,Y=!0){let q=0;if(P){let G=!1;if(T!==null){const rt=T.texture.format;G=rt===Gh||rt===kh||rt===Bh}if(G){const rt=T.texture.type,gt=rt===Pi||rt===Ss||rt===hr||rt===So||rt===zh||rt===Fh,wt=Nt.getClearColor(),At=Nt.getClearAlpha(),Ot=wt.r,kt=wt.g,Lt=wt.b;gt?(g[0]=Ot,g[1]=kt,g[2]=Lt,g[3]=At,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ot,_[1]=kt,_[2]=Lt,_[3]=At,O.clearBufferiv(O.COLOR,0,_))}else q|=O.COLOR_BUFFER_BIT}k&&(q|=O.DEPTH_BUFFER_BIT),Y&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Nt.dispose(),St.dispose(),ee.dispose(),Pt.dispose(),C.dispose(),X.dispose(),et.dispose(),xe.dispose(),B.dispose(),Rt.dispose(),J.dispose(),J.removeEventListener("sessionstart",fu),J.removeEventListener("sessionend",du),ji.stop()};function it(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Me.autoReset,k=Tt.enabled,Y=Tt.autoUpdate,q=Tt.needsUpdate,G=Tt.type;mt(),Me.autoReset=P,Tt.enabled=k,Tt.autoUpdate=Y,Tt.needsUpdate=q,Tt.type=G}function _t(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vt(P){const k=P.target;k.removeEventListener("dispose",Vt),Ae(k)}function Ae(P){Ye(P),Pt.remove(P)}function Ye(P){const k=Pt.get(P).programs;k!==void 0&&(k.forEach(function(Y){Rt.releaseProgram(Y)}),P.isShaderMaterial&&Rt.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,Y,q,G,rt){k===null&&(k=Te);const gt=G.isMesh&&G.matrixWorld.determinant()<0,wt=qp(P,k,Y,q,G);It.setMaterial(q,gt);let At=Y.index,Ot=1;if(q.wireframe===!0){if(At=st.getWireframeAttribute(Y),At===void 0)return;Ot=2}const kt=Y.drawRange,Lt=Y.attributes.position;let ne=kt.start*Ot,le=(kt.start+kt.count)*Ot;rt!==null&&(ne=Math.max(ne,rt.start*Ot),le=Math.min(le,(rt.start+rt.count)*Ot)),At!==null?(ne=Math.max(ne,0),le=Math.min(le,At.count)):Lt!=null&&(ne=Math.max(ne,0),le=Math.min(le,Lt.count));const Pe=le-ne;if(Pe<0||Pe===1/0)return;xe.setup(G,q,wt,Y,At);let Re,oe=Et;if(At!==null&&(Re=nt.get(At),oe=Qt,oe.setIndex(Re)),G.isMesh)q.wireframe===!0?(It.setLineWidth(q.wireframeLinewidth*Ce()),oe.setMode(O.LINES)):oe.setMode(O.TRIANGLES);else if(G.isLine){let Dt=q.linewidth;Dt===void 0&&(Dt=1),It.setLineWidth(Dt*Ce()),G.isLineSegments?oe.setMode(O.LINES):G.isLineLoop?oe.setMode(O.LINE_LOOP):oe.setMode(O.LINE_STRIP)}else G.isPoints?oe.setMode(O.POINTS):G.isSprite&&oe.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)oe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))oe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Dt=G._multiDrawStarts,Ge=G._multiDrawCounts,he=G._multiDrawCount,Yn=At?nt.get(At).bytesPerElement:1,Ds=Pt.get(q).currentProgram.getUniforms();for(let Tn=0;Tn<he;Tn++)Ds.setValue(O,"_gl_DrawID",Tn),oe.render(Dt[Tn]/Yn,Ge[Tn])}else if(G.isInstancedMesh)oe.renderInstances(ne,Pe,G.count);else if(Y.isInstancedBufferGeometry){const Dt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ge=Math.min(Y.instanceCount,Dt);oe.renderInstances(ne,Pe,Ge)}else oe.render(ne,Pe)};function ue(P,k,Y){P.transparent===!0&&P.side===Ut&&P.forceSinglePass===!1?(P.side=un,P.needsUpdate=!0,Ar(P,k,Y),P.side=$i,P.needsUpdate=!0,Ar(P,k,Y),P.side=Ut):Ar(P,k,Y)}this.compile=function(P,k,Y=null){Y===null&&(Y=P),m=ee.get(Y),m.init(k),v.push(m),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),P!==Y&&P.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const q=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const rt=G.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){const wt=rt[gt];ue(wt,Y,G),q.add(wt)}else ue(rt,Y,G),q.add(rt)}),v.pop(),m=null,q},this.compileAsync=function(P,k,Y=null){const q=this.compile(P,k,Y);return new Promise(G=>{function rt(){if(q.forEach(function(gt){Pt.get(gt).currentProgram.isReady()&&q.delete(gt)}),q.size===0){G(P);return}setTimeout(rt,10)}Kt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Xn=null;function pi(P){Xn&&Xn(P)}function fu(){ji.stop()}function du(){ji.start()}const ji=new Hd;ji.setAnimationLoop(pi),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(P){Xn=P,J.setAnimationLoop(P),P===null?ji.stop():ji.start()},J.addEventListener("sessionstart",fu),J.addEventListener("sessionend",du),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,k,T),m=ee.get(P,v.length),m.init(k),v.push(m),zt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(zt),yt=this.localClippingEnabled,at=ct.init(this.clippingPlanes,yt),p=St.get(P,b.length),p.init(),b.push(p),J.enabled===!0&&J.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&sc(rt,k,-1/0,M.sortObjects)}sc(P,k,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(lt,ft),te=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,te&&Nt.addToRenderList(p,P),this.info.render.frame++,at===!0&&ct.beginShadows();const Y=m.state.shadowsArray;Tt.render(Y,P,k),at===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=p.opaque,G=p.transmissive;if(m.setupLights(),k.isArrayCamera){const rt=k.cameras;if(G.length>0)for(let gt=0,wt=rt.length;gt<wt;gt++){const At=rt[gt];mu(q,G,P,At)}te&&Nt.render(P);for(let gt=0,wt=rt.length;gt<wt;gt++){const At=rt[gt];pu(p,P,At,At.viewport)}}else G.length>0&&mu(q,G,P,k),te&&Nt.render(P),pu(p,P,k);T!==null&&S===0&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(M,P,k),xe.resetDefaultState(),y=-1,x=null,v.pop(),v.length>0?(m=v[v.length-1],at===!0&&ct.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function sc(P,k,Y,q){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){q&&qt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(zt);const gt=et.update(P),wt=P.material;wt.visible&&p.push(P,gt,wt,Y,qt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){const gt=et.update(P),wt=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),qt.copy(P.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),qt.copy(gt.boundingSphere.center)),qt.applyMatrix4(P.matrixWorld).applyMatrix4(zt)),Array.isArray(wt)){const At=gt.groups;for(let Ot=0,kt=At.length;Ot<kt;Ot++){const Lt=At[Ot],ne=wt[Lt.materialIndex];ne&&ne.visible&&p.push(P,gt,ne,Y,qt.z,Lt)}}else wt.visible&&p.push(P,gt,wt,Y,qt.z,null)}}const rt=P.children;for(let gt=0,wt=rt.length;gt<wt;gt++)sc(rt[gt],k,Y,q)}function pu(P,k,Y,q){const G=P.opaque,rt=P.transmissive,gt=P.transparent;m.setupLightsView(Y),at===!0&&ct.setGlobalState(M.clippingPlanes,Y),q&&It.viewport(R.copy(q)),G.length>0&&Er(G,k,Y),rt.length>0&&Er(rt,k,Y),gt.length>0&&Er(gt,k,Y),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function mu(P,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new Jn(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Ai:Pi,minFilter:xs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const rt=m.state.transmissionRenderTarget[q.id],gt=q.viewport||R;rt.setSize(gt.z*M.transmissionResolutionScale,gt.w*M.transmissionResolutionScale);const wt=M.getRenderTarget();M.setRenderTarget(rt),M.getClearColor(z),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear(),te&&Nt.render(Y);const At=M.toneMapping;M.toneMapping=Zi;const Ot=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),at===!0&&ct.setGlobalState(M.clippingPlanes,q),Er(P,Y,q),L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Lt=0,ne=k.length;Lt<ne;Lt++){const le=k[Lt],Pe=le.object,Re=le.geometry,oe=le.material,Dt=le.group;if(oe.side===Ut&&Pe.layers.test(q.layers)){const Ge=oe.side;oe.side=un,oe.needsUpdate=!0,gu(Pe,Y,q,Re,oe,Dt),oe.side=Ge,oe.needsUpdate=!0,kt=!0}}kt===!0&&(L.updateMultisampleRenderTarget(rt),L.updateRenderTargetMipmap(rt))}M.setRenderTarget(wt),M.setClearColor(z,H),Ot!==void 0&&(q.viewport=Ot),M.toneMapping=At}function Er(P,k,Y){const q=k.isScene===!0?k.overrideMaterial:null;for(let G=0,rt=P.length;G<rt;G++){const gt=P[G],wt=gt.object,At=gt.geometry,Ot=q===null?gt.material:q,kt=gt.group;wt.layers.test(Y.layers)&&gu(wt,k,Y,At,Ot,kt)}}function gu(P,k,Y,q,G,rt){P.onBeforeRender(M,k,Y,q,G,rt),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(M,k,Y,q,P,rt),G.transparent===!0&&G.side===Ut&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,M.renderBufferDirect(Y,k,q,G,P,rt),G.side=$i,G.needsUpdate=!0,M.renderBufferDirect(Y,k,q,G,P,rt),G.side=Ut):M.renderBufferDirect(Y,k,q,G,P,rt),P.onAfterRender(M,k,Y,q,G,rt)}function Ar(P,k,Y){k.isScene!==!0&&(k=Te);const q=Pt.get(P),G=m.state.lights,rt=m.state.shadowsArray,gt=G.state.version,wt=Rt.getParameters(P,G.state,rt,k,Y),At=Rt.getProgramCacheKey(wt);let Ot=q.programs;q.environment=P.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(P.isMeshStandardMaterial?X:C).get(P.envMap||q.environment),q.envMapRotation=q.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Ot===void 0&&(P.addEventListener("dispose",Vt),Ot=new Map,q.programs=Ot);let kt=Ot.get(At);if(kt!==void 0){if(q.currentProgram===kt&&q.lightsStateVersion===gt)return _u(P,wt),kt}else wt.uniforms=Rt.getUniforms(P),P.onBeforeCompile(wt,M),kt=Rt.acquireProgram(wt,At),Ot.set(At,kt),q.uniforms=wt.uniforms;const Lt=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Lt.clippingPlanes=ct.uniform),_u(P,wt),q.needsLights=$p(P),q.lightsStateVersion=gt,q.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.directionalShadowMap.value=G.state.directionalShadowMap,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotShadowMap.value=G.state.spotShadowMap,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMap.value=G.state.pointShadowMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=kt,q.uniformsList=null,kt}function xu(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=_a.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function _u(P,k){const Y=Pt.get(P);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function qp(P,k,Y,q,G){k.isScene!==!0&&(k=Te),L.resetTextureUnits();const rt=k.fog,gt=q.isMeshStandardMaterial?k.environment:null,wt=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:To,At=(q.isMeshStandardMaterial?X:C).get(q.envMap||gt),Ot=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,kt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!Y.morphAttributes.position,ne=!!Y.morphAttributes.normal,le=!!Y.morphAttributes.color;let Pe=Zi;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pe=M.toneMapping);const Re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=Re!==void 0?Re.length:0,Dt=Pt.get(q),Ge=m.state.lights;if(at===!0&&(yt===!0||P!==x)){const tn=P===x&&q.id===y;ct.setState(q,P,tn)}let he=!1;q.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ge.state.version||Dt.outputColorSpace!==wt||G.isBatchedMesh&&Dt.batching===!1||!G.isBatchedMesh&&Dt.batching===!0||G.isBatchedMesh&&Dt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Dt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Dt.instancing===!1||!G.isInstancedMesh&&Dt.instancing===!0||G.isSkinnedMesh&&Dt.skinning===!1||!G.isSkinnedMesh&&Dt.skinning===!0||G.isInstancedMesh&&Dt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Dt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Dt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Dt.instancingMorph===!1&&G.morphTexture!==null||Dt.envMap!==At||q.fog===!0&&Dt.fog!==rt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ct.numPlanes||Dt.numIntersection!==ct.numIntersection)||Dt.vertexAlphas!==Ot||Dt.vertexTangents!==kt||Dt.morphTargets!==Lt||Dt.morphNormals!==ne||Dt.morphColors!==le||Dt.toneMapping!==Pe||Dt.morphTargetsCount!==oe)&&(he=!0):(he=!0,Dt.__version=q.version);let Yn=Dt.currentProgram;he===!0&&(Yn=Ar(q,k,G));let Ds=!1,Tn=!1,Uo=!1;const ye=Yn.getUniforms(),Un=Dt.uniforms;if(It.useProgram(Yn.program)&&(Ds=!0,Tn=!0,Uo=!0),q.id!==y&&(y=q.id,Tn=!0),Ds||x!==P){It.buffers.depth.getReversed()?(ut.copy(P.projectionMatrix),G0(ut),H0(ut),ye.setValue(O,"projectionMatrix",ut)):ye.setValue(O,"projectionMatrix",P.projectionMatrix),ye.setValue(O,"viewMatrix",P.matrixWorldInverse);const fn=ye.map.cameraPosition;fn!==void 0&&fn.setValue(O,Bt.setFromMatrixPosition(P.matrixWorld)),Jt.logarithmicDepthBuffer&&ye.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ye.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),x!==P&&(x=P,Tn=!0,Uo=!0)}if(G.isSkinnedMesh){ye.setOptional(O,G,"bindMatrix"),ye.setOptional(O,G,"bindMatrixInverse");const tn=G.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ye.setValue(O,"boneTexture",tn.boneTexture,L))}G.isBatchedMesh&&(ye.setOptional(O,G,"batchingTexture"),ye.setValue(O,"batchingTexture",G._matricesTexture,L),ye.setOptional(O,G,"batchingIdTexture"),ye.setValue(O,"batchingIdTexture",G._indirectTexture,L),ye.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&ye.setValue(O,"batchingColorTexture",G._colorsTexture,L));const Nn=Y.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Ft.update(G,Y,Yn),(Tn||Dt.receiveShadow!==G.receiveShadow)&&(Dt.receiveShadow=G.receiveShadow,ye.setValue(O,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Un.envMap.value=At,Un.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(Un.envMapIntensity.value=k.environmentIntensity),Tn&&(ye.setValue(O,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&Zp(Un,Uo),rt&&q.fog===!0&&xt.refreshFogUniforms(Un,rt),xt.refreshMaterialUniforms(Un,q,W,$,m.state.transmissionRenderTarget[P.id]),_a.upload(O,xu(Dt),Un,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(_a.upload(O,xu(Dt),Un,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ye.setValue(O,"center",G.center),ye.setValue(O,"modelViewMatrix",G.modelViewMatrix),ye.setValue(O,"normalMatrix",G.normalMatrix),ye.setValue(O,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const tn=q.uniformsGroups;for(let fn=0,oc=tn.length;fn<oc;fn++){const Ki=tn[fn];B.update(Ki,Yn),B.bind(Ki,Yn)}}return Yn}function Zp(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function $p(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,k,Y){Pt.get(P.texture).__webglTexture=k,Pt.get(P.depthTexture).__webglTexture=Y;const q=Pt.get(P);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,k){const Y=Pt.get(P);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const jp=O.createFramebuffer();this.setRenderTarget=function(P,k=0,Y=0){T=P,E=k,S=Y;let q=!0,G=null,rt=!1,gt=!1;if(P){const At=Pt.get(P);if(At.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(At.__hasExternalTextures)L.rebindTextures(P,Pt.get(P.texture).__webglTexture,Pt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Lt=P.depthTexture;if(At.__boundDepthTexture!==Lt){if(Lt!==null&&Pt.has(Lt)&&(P.width!==Lt.image.width||P.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const Ot=P.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(gt=!0);const kt=Pt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?G=kt[k][Y]:G=kt[k],rt=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?G=Pt.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[Y]:G=kt,R.copy(P.viewport),U.copy(P.scissor),D=P.scissorTest}else R.copy(bt).multiplyScalar(W).floor(),U.copy(Ht).multiplyScalar(W).floor(),D=jt;if(Y!==0&&(G=jp),It.bindFramebuffer(O.FRAMEBUFFER,G)&&q&&It.drawBuffers(P,G),It.viewport(R),It.scissor(U),It.setScissorTest(D),rt){const At=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,At.__webglTexture,Y)}else if(gt){const At=Pt.get(P.texture),Ot=k;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.__webglTexture,Y,Ot)}else if(P!==null&&Y!==0){const At=Pt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(P,k,Y,q,G,rt,gt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){It.bindFramebuffer(O.FRAMEBUFFER,wt);try{const At=P.texture,Ot=At.format,kt=At.type;if(!Jt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-q&&Y>=0&&Y<=P.height-G&&O.readPixels(k,Y,q,G,Xt.convert(Ot),Xt.convert(kt),rt)}finally{const At=T!==null?Pt.get(T).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(P,k,Y,q,G,rt,gt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Pt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){const At=P.texture,Ot=At.format,kt=At.type;if(!Jt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=P.width-q&&Y>=0&&Y<=P.height-G){It.bindFramebuffer(O.FRAMEBUFFER,wt);const Lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.bufferData(O.PIXEL_PACK_BUFFER,rt.byteLength,O.STREAM_READ),O.readPixels(k,Y,q,G,Xt.convert(Ot),Xt.convert(kt),0);const ne=T!==null?Pt.get(T).__webglFramebuffer:null;It.bindFramebuffer(O.FRAMEBUFFER,ne);const le=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await k0(O,le,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,rt),O.deleteBuffer(Lt),O.deleteSync(le),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,k=null,Y=0){P.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,P=arguments[1]);const q=Math.pow(2,-Y),G=Math.floor(P.image.width*q),rt=Math.floor(P.image.height*q),gt=k!==null?k.x:0,wt=k!==null?k.y:0;L.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,gt,wt,G,rt),It.unbindTexture()};const Kp=O.createFramebuffer(),Jp=O.createFramebuffer();this.copyTextureToTexture=function(P,k,Y=null,q=null,G=0,rt=null){P.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1],k=arguments[2],rt=arguments[3]||0,Y=null),rt===null&&(G!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=G,G=0):rt=0);let gt,wt,At,Ot,kt,Lt,ne,le,Pe;const Re=P.isCompressedTexture?P.mipmaps[rt]:P.image;if(Y!==null)gt=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,kt=Y.min.y,Lt=Y.isBox3?Y.min.z:0;else{const Nn=Math.pow(2,-G);gt=Math.floor(Re.width*Nn),wt=Math.floor(Re.height*Nn),P.isDataArrayTexture?At=Re.depth:P.isData3DTexture?At=Math.floor(Re.depth*Nn):At=1,Ot=0,kt=0,Lt=0}q!==null?(ne=q.x,le=q.y,Pe=q.z):(ne=0,le=0,Pe=0);const oe=Xt.convert(k.format),Dt=Xt.convert(k.type);let Ge;k.isData3DTexture?(L.setTexture3D(k,0),Ge=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),Ge=O.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),Ge=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const he=O.getParameter(O.UNPACK_ROW_LENGTH),Yn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ds=O.getParameter(O.UNPACK_SKIP_PIXELS),Tn=O.getParameter(O.UNPACK_SKIP_ROWS),Uo=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Re.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Re.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,kt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt);const ye=P.isDataArrayTexture||P.isData3DTexture,Un=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){const Nn=Pt.get(P),tn=Pt.get(k),fn=Pt.get(Nn.__renderTarget),oc=Pt.get(tn.__renderTarget);It.bindFramebuffer(O.READ_FRAMEBUFFER,fn.__webglFramebuffer),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,oc.__webglFramebuffer);for(let Ki=0;Ki<At;Ki++)ye&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(P).__webglTexture,G,Lt+Ki),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(k).__webglTexture,rt,Pe+Ki)),O.blitFramebuffer(Ot,kt,gt,wt,ne,le,gt,wt,O.DEPTH_BUFFER_BIT,O.NEAREST);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||Pt.has(P)){const Nn=Pt.get(P),tn=Pt.get(k);It.bindFramebuffer(O.READ_FRAMEBUFFER,Kp),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,Jp);for(let fn=0;fn<At;fn++)ye?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nn.__webglTexture,G,Lt+fn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nn.__webglTexture,G),Un?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,rt,Pe+fn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,rt),G!==0?O.blitFramebuffer(Ot,kt,gt,wt,ne,le,gt,wt,O.COLOR_BUFFER_BIT,O.NEAREST):Un?O.copyTexSubImage3D(Ge,rt,ne,le,Pe+fn,Ot,kt,gt,wt):O.copyTexSubImage2D(Ge,rt,ne,le,Ot,kt,gt,wt);It.bindFramebuffer(O.READ_FRAMEBUFFER,null),It.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Un?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Ge,rt,ne,le,Pe,gt,wt,At,oe,Dt,Re.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Ge,rt,ne,le,Pe,gt,wt,At,oe,Re.data):O.texSubImage3D(Ge,rt,ne,le,Pe,gt,wt,At,oe,Dt,Re):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,rt,ne,le,gt,wt,oe,Dt,Re.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,rt,ne,le,Re.width,Re.height,oe,Re.data):O.texSubImage2D(O.TEXTURE_2D,rt,ne,le,gt,wt,oe,Dt,Re);O.pixelStorei(O.UNPACK_ROW_LENGTH,he),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ds),O.pixelStorei(O.UNPACK_SKIP_ROWS,Tn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Uo),rt===0&&k.generateMipmaps&&O.generateMipmap(Ge),It.unbindTexture()},this.copyTextureToTexture3D=function(P,k,Y=null,q=null,G=0){return P.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,P=arguments[2],k=arguments[3],G=arguments[4]||0),Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,k,Y,q,G)},this.initRenderTarget=function(P){Pt.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){E=0,S=0,T=null,It.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const Dv=15,Uv=6,Nv=1.8,za=8,Pf=.85,If=.98,Fa=.003,ae=90,ec=1.7,zv=60,Fv=45,Ov=10,Bv=6,kv=8,Gv=4,Hv=5,Vv=110,Wv=35,Xv=30,Yv=25,qv=60,qd=3,Zv=20,$v=5,jv=30,Kv=40,Jv=6,Qv=6,ty=6,ey=5,nu=280,nh=2.5,ny=6,Lf=1.5,to=5,Df=2.5,$s=12,ve=30,iy=5,sy=8,oy=2.2,F={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116},Qe=new Lv({antialias:!0,powerPreference:"default"});Qe.setSize(window.innerWidth,window.innerHeight);Qe.setPixelRatio(Math.min(window.devicePixelRatio,2));Qe.shadowMap.enabled=!0;Qe.shadowMap.type=sd;Qe.toneMapping=rd;Qe.toneMappingExposure=2.8;Qe.outputColorSpace=hn;document.body.appendChild(Qe.domElement);const ln=new Cn(65,window.innerWidth/window.innerHeight,.1,300),Zd=new Gd,ht=new hm;ht.background=new ot(F.skyDeep);ht.fog=new Vh(F.fog,.01);window.addEventListener("resize",()=>{ln.aspect=window.innerWidth/window.innerHeight,ln.updateProjectionMatrix(),Qe.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||Zd.getDelta()});const $d={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ry=new tu(-1,1,1,-1,0,1);class ay extends be{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const cy=new ay;class jd{constructor(t){this._mesh=new I(cy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ry)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ly extends wr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof wn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ia.clone(t.uniforms),this.material=new wn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new jd(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Uf extends wr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class hy extends wr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class uy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new dt);this._width=n.width,this._height=n.height,e=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ai}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ly($d),this.copyPass.material.blending=Ei,this.clock=new Gd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Uf!==void 0&&(r instanceof Uf?n=!0:r instanceof hy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fy extends wr{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const dy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ro extends wr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new dt(t.x,t.y):new dt(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Jn(o,r,{type:Ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new Jn(o,r,{type:Ai});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Jn(o,r,{type:Ai});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=dy;this.highPassUniforms=Ia.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new dt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=$d;this.copyUniforms=Ia.clone(h.uniforms),this.blendMaterial=new wn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:pe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new Z,this.fsQuad=new jd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new dt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ro.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ro.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new wn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new wn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ro.BlurDirectionX=new dt(1,0);Ro.BlurDirectionY=new dt(0,1);let ys=null,iu=!0;try{const s=new fy(ht,ln),t=new Ro(new dt(window.innerWidth,window.innerHeight),.6,.4,.85);ys=new uy(Qe),ys.addPass(s),ys.addPass(t)}catch(s){console.warn("Bloom unavailable, falling back to direct render:",s.message),iu=!1}window.addEventListener("resize",()=>{iu&&ys&&ys.setSize(window.innerWidth,window.innerHeight)});function Nf(){iu&&ys?ys.render():Qe.render(ht,ln)}const su=new Ym(F.ambient,F.ground,.5);ht.add(su);const Vn=new Qa(F.moon,.85);Vn.position.set(30,60,-20);Vn.castShadow=!0;Vn.shadow.camera.left=-90;Vn.shadow.camera.right=90;Vn.shadow.camera.top=90;Vn.shadow.camera.bottom=-90;Vn.shadow.camera.near=1;Vn.shadow.camera.far=250;Vn.shadow.mapSize.set(1024,1024);Vn.shadow.bias=-.001;ht.add(Vn);const Wn=new Qa(2241365,.3);Wn.position.set(-40,45,25);Wn.castShadow=!0;Wn.shadow.camera.left=-70;Wn.shadow.camera.right=70;Wn.shadow.camera.top=70;Wn.shadow.camera.bottom=-70;Wn.shadow.camera.near=1;Wn.shadow.camera.far=200;Wn.shadow.mapSize.set(512,512);Wn.shadow.bias=-.002;ht.add(Wn);const Kd=new Qa(3359829,.4);Kd.position.set(-25,15,30);ht.add(Kd);const Jd=new Is(3368516,.7,100);Jd.position.set(0,.5,0);ht.add(Jd);const py=[{pos:[15,3,15],col:3368618,int:.8,dist:30},{pos:[-20,4,-10],col:6702216,int:.7,dist:25},{pos:[0,5,30],col:2263142,int:.7,dist:28},{pos:[-15,3,20],col:4491417,int:.6,dist:22},{pos:[25,3,-20],col:10053188,int:.5,dist:20}];for(const s of py){const t=new Is(s.col,s.int,s.dist);t.position.set(s.pos[0],s.pos[1],s.pos[2]),ht.add(t)}const Qd=new Qa(4478327,.4);Qd.position.set(-10,25,40);ht.add(Qd);const ou=new Is(6719624,.6,20);ht.add(ou);const cs=[];function my(){for(let s=0;s<iy;s++){const t=new Is(F.crystal,0,16);ht.add(t),cs.push(t)}}const $o=new Is(F.orbGold,0,15);ht.add($o);const De={};let pr=0,ws=0,nc=!1,tp=!1,ru=0,au=0,cu=!1,ic=!1,Sr=!1,Oa=null,Ts=null,ih=0,sh=0,oh=null;function gy(s){oh=s}function xy(s){tp=s}function _y(s){ic=s}function br(){!tp&&oh&&oh()}window.addEventListener("keydown",s=>{De[s.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(s.code)>=0&&s.preventDefault(),br()});window.addEventListener("keyup",s=>{De[s.code]=!1});window.addEventListener("blur",()=>{for(const s in De)De[s]=!1;nc=!1});Qe.domElement.addEventListener("mousedown",()=>{nc=!0,br()});window.addEventListener("mouseup",()=>{nc=!1});window.addEventListener("mousemove",s=>{nc&&(pr-=s.movementX*Fa,ws-=s.movementY*Fa,ws=Math.max(-1,Math.min(1,ws)))});const My="ontouchstart"in window||navigator.maxTouchPoints>0,Tr=document.getElementById("joy-zone"),Ba=document.getElementById("joy-knob"),lu=document.getElementById("btn-jump");My&&(Tr.style.display="block",lu.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function ep(s,t){const e=Tr.getBoundingClientRect();let n=s-(e.left+e.width/2),i=t-(e.top+e.height/2);const o=Math.sqrt(n*n+i*i),r=52;o>r&&(n=n/o*r,i=i/o*r),ru=n/r,au=i/r,Ba.style.left=40+n+"px",Ba.style.top=40+i+"px"}Tr.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),br();const t=s.changedTouches[0];Oa=t.identifier,cu=!0,ep(t.clientX,t.clientY)},{passive:!1});Tr.addEventListener("touchmove",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Oa&&ep(s.changedTouches[t].clientX,s.changedTouches[t].clientY)},{passive:!1});Tr.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Oa&&(Oa=null,cu=!1,ru=0,au=0,Ba.style.left="40px",Ba.style.top="40px")},{passive:!1});lu.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),br(),ic=!0},{passive:!1});lu.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),ic=!1},{passive:!1});Qe.domElement.addEventListener("touchstart",s=>{s.preventDefault(),br();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.clientX>window.innerWidth*.3&&Ts===null&&(Ts=e.identifier,ih=e.clientX,sh=e.clientY)}},{passive:!1});Qe.domElement.addEventListener("touchmove",s=>{s.preventDefault();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.identifier===Ts&&(pr-=(e.clientX-ih)*Fa,ws-=(e.clientY-sh)*Fa,ws=Math.max(-1,Math.min(1,ws)),ih=e.clientX,sh=e.clientY)}},{passive:!1});Qe.domElement.addEventListener("touchend",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Ts&&(Ts=null)},{passive:!1});Qe.domElement.addEventListener("touchcancel",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Ts&&(Ts=null)},{passive:!1});function vy(){let s=0,t=0;De.KeyW&&(t-=1),De.KeyS&&(t+=1),De.KeyA&&(s-=1),De.KeyD&&(s+=1),cu&&(s+=ru,t+=au);const e=Math.sqrt(s*s+t*t);e>1&&(s/=e,t/=e);const n=Uv*(De.ShiftLeft||De.ShiftRight||Sr?Nv:1),i=Math.sin(pr),o=Math.cos(pr);return{x:(s*o+t*i)*n,z:(-s*i+t*o)*n}}const bn={mushCap:new j(.5,8,5),mushStem:new Mt(.06,.1,.6,5),mushDot:new j(.06,4,3),crystal:new Mt(0,.35,1.8,6),crystalSm:new Mt(0,.18,.9,5),fly:new j(.06,4,3),spore:new j(.04,3,3),dandSeed:new j(.025,3,3),bubble:new j(.15,8,6),starMote:new j(.03,3,3),dustMote:new j(.035,3,3)};let sr=42;function w(){return sr=sr*16807%2147483647,(sr&2147483647)/2147483647}function yy(){return sr}function wy(s){sr=s}function ia(s,t){let e=s*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function or(s){return s*s*(3-2*s)}function np(s,t){const e=Math.floor(s),n=Math.floor(t),i=or(s-e),o=or(t-n),r=ia(e,n),a=ia(e+1,n),c=ia(e,n+1),l=ia(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function zf(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=np(s*o,t*o)*i,i*=.5,o*=2;return n}const rh=[];function ah(s,t,e){rh.push({x:s,z:t,r:e})}function $t(s,t){const e=Math.sqrt(s*s+t*t),n=1-or(Math.max(0,(e-ae*.7)/(ae*.3))),i=or(Math.min(1,e/8)),o=.035,r=zf(s*o,t*o,4),a=zf(s*o*2.7+50,t*o*2.7+50,3),c=np(s*.15,t*.15);let l=r*2.5+a*.8+c*.15;l*=n*i;for(let h=0;h<rh.length;h++){const f=rh[h],u=s-f.x,d=t-f.z,g=Math.sqrt(u*u+d*d);if(g<f.r*2){const _=or(Math.max(0,(g-f.r*.5)/(f.r*1.5)));l*=_}}return l}function Sy(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const i=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80}];for(const h of i)for(let f=0;f<h.n;f++){const u=n()*2048,d=n()*2048,g=h.r*(.5+n()*.8),_=e.createRadialGradient(u,d,0,u,d,g);_.addColorStop(0,h.col),_.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),_.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=_;for(let p=-1;p<=1;p++)for(let m=-1;m<=1;m++)e.beginPath(),e.arc(u+p*2048,d+m*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let f=0;f<h.n;f++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const u=n()*2048,d=n()*2048;e.beginPath(),e.arc(u,d,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let f=n()*2048,u=n()*2048;const d=r[Math.floor(n()*r.length)];e.strokeStyle=d,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(f,u);let g=n()*6.28;const _=12+Math.floor(n()*16);for(let p=0;p<_;p++)g+=Math.sin(p*.6)*.5+(n()-.5)*.4,f+=Math.cos(g)*(6+n()*10),u+=Math.sin(g)*(6+n()*10),e.lineTo(f,u);if(e.stroke(),n()<.6){const p=e.createRadialGradient(f,u,0,f,u,6+n()*8);p.addColorStop(0,d.replace("0.0","0.1")),p.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=p,e.beginPath(),e.arc(f,u,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let f=n()*2048,u=n()*2048,d=n()*6.28;e.beginPath(),e.moveTo(f,u);for(let g=0;g<10;g++)d+=Math.sin(g*.7)*.5+(n()-.5)*.35,f+=Math.cos(d)*(8+n()*14),u+=Math.sin(d)*(8+n()*14),e.lineTo(f,u);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const f=n()*2048,u=n()*2048,d=.8+n()*2.5;e.beginPath(),e.arc(f,u,d,0,6.28),e.fill()}for(let h=0;h<40;h++){const f=n()*2048,u=n()*2048,d=15+n()*35,g=e.createRadialGradient(f,u,0,f,u,d),_=n();_<.4?(g.addColorStop(0,"rgba(45,90,50,0.18)"),g.addColorStop(1,"rgba(25,55,30,0)")):_<.7?(g.addColorStop(0,"rgba(35,75,60,0.16)"),g.addColorStop(1,"rgba(20,50,38,0)")):(g.addColorStop(0,"rgba(55,75,35,0.14)"),g.addColorStop(1,"rgba(30,45,20,0)")),e.fillStyle=g,e.beginPath(),e.arc(f,u,d,0,6.28),e.fill()}for(let h=0;h<400;h++){const f=n()*2048,u=n()*2048,d=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(f,u,d,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const f=n()*2048,u=n()*2048,d=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(f,u),e.lineTo(f+Math.cos(g)*d,u+Math.sin(g)*d),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const f=n()*2048,u=n()*2048,d=c[Math.floor(n()*c.length)];if(e.fillStyle=d,e.beginPath(),e.arc(f,u,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(f,u,0,f,u,4+n()*5);g.addColorStop(0,d),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(f,u,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const f=n()*2048,u=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(f,u,.5+n()*1.2,0,6.28),e.fill()}const l=new qh(t);return l.wrapS=l.wrapT=Aa,l.repeat.set(8,8),l.colorSpace=hn,l}function sa(s,t){let e=s*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function ch(s){return s*s*(3-2*s)}function ip(s,t){const e=Math.floor(s),n=Math.floor(t),i=ch(s-e),o=ch(t-n),r=sa(e,n),a=sa(e+1,n),c=sa(e,n+1),l=sa(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function Hc(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=ip(s*o,t*o)*i,i*=.5,o*=2;return n}function by(){const s=Sy(),t=ae*3,e=200,n=new _e(t,t,e,e),i=n.attributes.position,o=[[.55,.95,.6],[.45,.85,.95],[.8,.5,1],[.85,.65,.4],[.5,1.1,.65],[.4,.7,.9]],r=i.count,a=new Float32Array(r*3);for(let l=0;l<r;l++){const h=i.getX(l),f=i.getY(l);Math.sqrt(h*h+f*f)<ae*1.4?i.setZ(l,$t(h,-f)):i.setZ(l,0);const d=h,g=-f,_=Hc(d*.025+100,g*.025+200,3),p=Hc(d*.06+300,g*.06+400,2),m=ip(d*.15+500,g*.15+600),b=Hc(d*.04-150,g*.04-250,3),v=Math.floor(_*o.length*.999),M=Math.floor(b*o.length*.999),A=o[v],E=o[M],S=ch(p),T=.85+m*.3,y=(A[0]*(1-S)+E[0]*S)*T,x=(A[1]*(1-S)+E[1]*S)*T,R=(A[2]*(1-S)+E[2]*S)*T,D=1+$t(d,g)*.06;a[l*3]=y*D,a[l*3+1]=x*D,a[l*3+2]=R*D}n.setAttribute("color",new Xe(a,3)),n.computeVertexNormals();const c=new I(n,new K({map:s,vertexColors:!0,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return c.rotation.x=-Math.PI/2,c.receiveShadow=!0,ht.add(c),c}const mr=new ce;let ka=null;const ls=120;let Ff=null,Ma=null,lh=null,hh=null,fo=null;const po=[],Ty=3;let Vc=0;function Xi(s,t){const e=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${e},${n},${i},${t})`}function Yi(s,t,e,n,i,o,r){s.save(),s.translate(t,e),Math.abs(i/n-1)>.01&&s.scale(1,i/n);const a=s.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,Xi(o,r)),a.addColorStop(.25,Xi(o,r*.55)),a.addColorStop(.55,Xi(o,r*.15)),a.addColorStop(.85,Xi(o,r*.03)),a.addColorStop(1,Xi(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,n,0,6.2832),s.fill(),s.restore()}function Wc(s,t,e,n,i,o,r,a){Yi(s,t,e,n,i,o,r),t-n<0&&Yi(s,t+a,e,n,i,o,r),t+n>a&&Yi(s,t-a,e,n,i,o,r)}function Ey(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const f of r){Wc(n,f.x*2048,f.y*1024,f.rx*2048,f.ry*1024,f.col,f.a,2048);for(let u=0;u<4;u++){const d=(f.x+(i()-.5)*f.rx)*2048,g=(f.y+(i()-.5)*f.ry)*1024,_=f.rx*2048*(.2+i()*.35),p=f.ry*1024*(.2+i()*.4);Wc(n,d,g,_,p,f.col,f.a*(.4+i()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let f=0;f<30;f++){const u=i()*2048,d=i()*1024*.55,g=40+i()*180,_=25+i()*100;Wc(n,u,d,g,_,a[Math.floor(i()*a.length)],.025+i()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let f=0;f<50;f++){const u=f/50,d=u*2048,g=(c+Math.sin(u*Math.PI)*.06+(i()-.5)*.02)*1024,_=2048*.05+i()*2048*.035,p=1024*.04*(.4+i()*.6);Yi(n,d,g,_,p,4478310,.025+i()*.015)}for(let f=0;f<25;f++){const u=.2+i()*.6,d=u*2048,g=(c+Math.sin(u*Math.PI)*.04)*1024;Yi(n,d,g,2048*.03+i()*2048*.02,1024*.02+i()*1024*.01,6719658,.015+i()*.012)}for(let f=0;f<10;f++){const u=.35+i()*.3,d=u*2048,g=(c+Math.sin(u*Math.PI)*.02)*1024;Yi(n,d,g,2048*.02,1024*.012,8943462,.01+i()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let f=0;f<12;f++){const u=.1+i()*.8,d=u*2048,g=(c+Math.sin(u*Math.PI)*.04+(i()-.5)*.02)*1024,_=20+i()*60,p=8+i()*20;Yi(n,d,g,_,p,132104,.15+i()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let f=0;f<5e3;f++){const u=i()*2048,d=i()*1024*.65,g=.3+i()*.7,_=.1+i()*.5;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${_})`,n.beginPath(),n.arc(u,d,g,0,6.28),n.fill()}for(let f=0;f<3e3;f++){const u=i(),d=u*2048,_=(c+Math.sin(u*Math.PI)*.06)*1024+(i()-.5)*1024*.1;if(_<0||_>1024*.6)continue;const p=.2+i()*.6,m=.2+i()*.7;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${m})`,n.beginPath(),n.arc(d,_,p,0,6.28),n.fill()}for(let f=0;f<60;f++){const u=i()*2048,d=i()*1024*.58,g=1.2+i()*1.8,_=6+i()*14,p=i();let m;p<.45?m="255,255,255":p<.65?m="210,225,255":p<.8?m="255,230,200":p<.92?m="190,210,255":m="255,200,180";const b=n.createRadialGradient(u,d,0,u,d,_);b.addColorStop(0,`rgba(${m},0.5)`),b.addColorStop(.1,`rgba(${m},0.18)`),b.addColorStop(.35,`rgba(${m},0.04)`),b.addColorStop(1,`rgba(${m},0)`),n.fillStyle=b,n.beginPath(),n.arc(u,d,_,0,6.28),n.fill(),n.strokeStyle=`rgba(${m},0.12)`,n.lineWidth=.5;const v=_*.8;n.beginPath(),n.moveTo(u-v,d),n.lineTo(u+v,d),n.moveTo(u,d-v),n.lineTo(u,d+v),n.stroke(),n.fillStyle=`rgba(${m},1)`,n.beginPath(),n.arc(u,d,g,0,6.28),n.fill()}for(let f=0;f<8;f++){const u=i()*2048,d=1024*.08+i()*1024*.42,g=50+i()*90;Yi(n,u,d,g,g*.7,3359846,.03);for(let _=0;_<100;_++){const p=i()*6.28,m=i()*i()*g,b=u+Math.cos(p)*m,v=d+Math.sin(p)*m*.65;if(b<0||b>2048||v<0||v>1024)continue;const M=.2+i()*.6;n.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,n.beginPath(),n.arc(b,v,M,0,6.28),n.fill()}}for(let f=0;f<15;f++){const u=r[Math.floor(i()*r.length)],d=(u.x+(i()-.5)*u.rx*.5)*2048,g=(u.y+(i()-.5)*u.ry*.5)*1024,_=3+i()*8,p=n.createRadialGradient(d,g,0,d,g,_*3);p.addColorStop(0,Xi(u.col,.2)),p.addColorStop(.3,Xi(u.col,.06)),p.addColorStop(1,Xi(u.col,0)),n.fillStyle=p,n.beginPath(),n.arc(d,g,_*3,0,6.28),n.fill()}const h=new qh(e);return h.colorSpace=hn,h}function Ay(){const s=yy(),t=Ey(),e=new j(nu,64,32,0,Math.PI*2,0,Math.PI*.55);ka=new Z({map:t,side:un,fog:!1,transparent:!1});const n=new I(e,ka);mr.add(n),Ry(),Cy(),ht.add(mr),wy(s)}function Ry(){const s=new Float32Array(ls*3),t=new Float32Array(ls*3);Ma=new Float32Array(ls),lh=new Float32Array(ls),hh=new Float32Array(ls);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,i=nu*.97;for(let a=0;a<ls;a++){const c=n()*Math.PI*2,l=n()*Math.PI*.48,h=i*Math.cos(c)*Math.sin(l),f=i*Math.cos(l),u=i*Math.sin(c)*Math.sin(l);s[a*3]=h,s[a*3+1]=f,s[a*3+2]=u;const d=e[Math.floor(n()*e.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],Ma[a]=2+n()*4,lh[a]=n()*Math.PI*2,hh[a]=.5+n()*2.5}const o=new be;o.setAttribute("position",new Gt(s,3)),o.setAttribute("color",new Gt(t,3)),fo=new Gt(Ma.slice(),1),fo.setUsage(Le),o.setAttribute("size",fo);const r=new Yh({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:pe,depthWrite:!1});Ff=new Pd(o,r),mr.add(Ff)}function Cy(){const s=new Z({color:16777215,transparent:!0,opacity:0,fog:!1,blending:pe,depthWrite:!1});for(let t=0;t<Ty;t++){const e=new I(new Mt(.15,0,12,4),s.clone());e.visible=!1,mr.add(e),po.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function Py(){let s=null;for(let a=0;a<po.length;a++)if(!po[a].active){s=po[a];break}if(!s)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,i=nu*.85;s.sx=i*Math.cos(e)*Math.sin(n),s.sy=i*Math.cos(n),s.sz=i*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;s.dx=Math.cos(o)*r,s.dy=-r*(.5+t()*.5),s.dz=Math.sin(o)*r,s.life=.5+t()*.8,s.maxLife=s.life,s.active=!0,s.mesh.visible=!0}function sp(s,t){if(mr.rotation.y=t*.003,fo){const e=fo.array;for(let n=0;n<ls;n++){const i=Ma[n],o=Math.sin(t*hh[n]+lh[n]);e[n]=i*(.65+o*.35)}fo.needsUpdate=!0}Vc-=s,Vc<=0&&(Vc=4+Math.random()*12,Py());for(let e=0;e<po.length;e++){const n=po[e];if(!n.active)continue;if(n.life-=s,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const i=n.life/n.maxLife;n.sx+=n.dx*s,n.sy+=n.dy*s,n.sz+=n.dz*s,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=i*.7,n.mesh.scale.setScalar(.6+i*.4)}}function Iy(s){if(ka){const t=Math.max(.15,s);ka.color.setRGB(t,t,t)}}const tt={pos:new N(0,ec,0),vel:new N,onGround:!0};let Xc=0,Yc=0,op=0,qc=65,Of=65,Wo=0,Bf=!0,Zc=0,Co=0,uh=null,fh=null,dh=null,kf=1;function Ly(s,t,e){uh=s,fh=t,dh=e}let ph=[],mh=[],gh=null;function Dy(s,t){ph=s,mh=t}function Uy(s){gh=s}function Ny(s){const t=vy(),e=De.ShiftLeft||De.ShiftRight||Sr;tt.vel.x=t.x,tt.vel.z=t.z,tt.vel.y-=Dv*s,(De.Space||ic)&&tt.onGround&&(tt.vel.y=za,tt.onGround=!1,_y(!1),fh&&fh()),tt.onGround||(Zc=tt.vel.y),tt.pos.x+=tt.vel.x*s,tt.pos.y+=tt.vel.y*s,tt.pos.z+=tt.vel.z*s;const n=$t(tt.pos.x,tt.pos.z)+ec;if(tt.pos.y<=n){if(tt.pos.y=n,tt.vel.y=0,!Bf&&Zc<-3){const h=Math.min(Math.abs(Zc)/za,1);Wo=h*.15,gh&&gh(tt.pos.x,tt.pos.z,Math.floor(3+h*5)),dh&&dh(h)}tt.onGround=!0}Bf=tt.onGround,tt.onGround?(tt.vel.x*=Pf,tt.vel.z*=Pf):(tt.vel.x*=If,tt.vel.z*=If);const i=.4;for(let h=0;h<ph.length;h++){const f=ph[h],u=tt.pos.x-f.x,d=tt.pos.z-f.z,g=u*u+d*d,_=.6+i;if(g<_*_&&g>.001){const p=1/Math.sqrt(g);tt.pos.x=f.x+u*p*_,tt.pos.z=f.z+d*p*_}}for(let h=0;h<mh.length;h++){const f=mh[h],u=tt.pos.x-f.x,d=tt.pos.z-f.z,g=u*u+d*d,_=f.colR+i;if(g<_*_&&g>.001){const p=1/Math.sqrt(g);tt.pos.x=f.x+u*p*_,tt.pos.z=f.z+d*p*_}}if(Math.sqrt(tt.pos.x*tt.pos.x+tt.pos.z*tt.pos.z)>ae){const h=Math.atan2(tt.pos.z,tt.pos.x);tt.pos.x=Math.cos(h)*ae,tt.pos.z=Math.sin(h)*ae}ou.position.copy(tt.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&tt.onGround;a?Co=0:Co+=s,Yc+=((a?e?.06:.035:0)-Yc)*s*6,a&&(Xc+=s*(e?12:8));const l=Math.sin(Xc)*Yc;if(a&&uh){const h=Math.sin(Xc)>=0?1:-1;kf>0&&h<0&&uh(e),kf=h}Of=e&&a?78:65,qc+=(Of-qc)*s*4,ln.fov=qc,ln.updateProjectionMatrix(),Wo*=Math.pow(.04,s),Wo<.001&&(Wo=0),op=l-Wo}const Gf=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function zy(s,t){const e=new ce,n=6+w()*10,i=.2+w()*.3,o=new K({color:5914672,roughness:.75,emissive:1718304,emissiveIntensity:.18}),r=new I(new Mt(i*.4,i,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new K({color:2263125,emissive:F.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),c=2+Math.floor(w()*3);for(let b=0;b<c;b++){const v=b/c*6.28+w()*.5,M=n*.4+w()*n*.4,A=new I(new Mt(.008,.015,M,3),a);A.position.set(Math.cos(v)*i*.74,n*.15+M/2,Math.sin(v)*i*.74),e.add(A)}const l=new K({color:3812378,roughness:.85,emissive:1583636,emissiveIntensity:.12}),h=3+Math.floor(w()*3);for(let b=0;b<h;b++){const v=b/h*6.28+w()*.5,M=.8+w()*1.5,A=new I(new Mt(.02,i*.3,M,4),l);A.position.set(Math.cos(v)*i*.5,.08,Math.sin(v)*i*.5),A.rotation.z=v<3.14?1.2+w()*.3:-(1.2+w()*.3),A.rotation.y=v,e.add(A)}const f=3+Math.floor(w()*4);for(let b=0;b<f;b++){const v=n*(.4+w()*.5),M=w()*Math.PI*2,A=1.5+w()*3,E=new I(new Mt(.02,.06,A,4),o);E.position.set(Math.cos(M)*.3,v,Math.sin(M)*.3),E.rotation.z=(w()-.5)*1.2,E.rotation.y=M,E.castShadow=!0,e.add(E);const S=Gf[Math.floor(w()*Gf.length)],T=Math.cos(M)*(A*.5),y=v+w()*1.5,x=Math.sin(M)*(A*.5),R=1+w()*2,U=new K({color:S.core,emissive:S.core,emissiveIntensity:.7+w()*.5,transparent:!0,opacity:.55,roughness:.3}),D=new I(new vs(R*.3,1),U);D.position.set(T,y,x),e.add(D);const z=new K({color:S.leaf,emissive:S.glow,emissiveIntensity:.25+w()*.25,transparent:!0,opacity:.55,roughness:.7}),H=new I(new vs(R*.75,1),z);H.position.set(T+(w()-.5)*.4,y+(w()-.5)*.4,x+(w()-.5)*.4),H.scale.set(1+w()*.4,.65+w()*.5,1+w()*.4),H.castShadow=!0,H.receiveShadow=!0,e.add(H);const V=new K({color:S.glow,emissive:S.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),$=new I(new vs(R*1.2,1),V);if($.position.set(T,y,x),e.add($),w()<.35){const W=new K({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),lt=.3+w()*.8,ft=new I(new Mt(.008,.003,lt,3),W),bt=w()*A*.4;ft.position.set(Math.cos(M)*(.3+bt),v-lt/2-w()*.3,Math.sin(M)*(.3+bt)),e.add(ft)}}const u=new K({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),d=Math.floor(w()*3);for(let b=0;b<d;b++){const v=1+w()*n*.4,M=w()*6.28,A=new I(new j(.08+w()*.08,5,3),u);A.scale.set(1.5,.3,1),A.position.set(Math.cos(M)*i*.8,v,Math.sin(M)*i*.8),A.rotation.y=-M,e.add(A)}const g=new K({color:F.leaf,emissive:F.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),_=new I(new j(3+w()*2,8,6),g);_.position.y=n*.65,e.add(_);const p=new K({color:1183752,roughness:.95}),m=new I(new j(i*2.5,6,3),p);return m.scale.set(1,.12,1),m.position.y=.02,e.add(m),e.position.set(s,0,t),ht.add(e),e}function Fy(s,t){const e=new ce,n=.4+w()*1.2,i=w()*6.28,o=.8+w()*1.5,r=.5+w()*.8,a=new I(bn.mushStem,new K({color:F.mushStem,roughness:.7,emissive:F.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new Se(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const h=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),f=new I(bn.mushCap,h);f.scale.set(1,.5,1),f.position.y=.55,f.castShadow=!0,f.receiveShadow=!0,e.add(f);const u=new K({color:6693546,emissive:F.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Ut});for(let x=0;x<8;x++){const R=x/8*6.28,U=new I(new _e(.35,.08),u);U.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),U.rotation.y=-R,U.rotation.x=.1,e.add(U)}for(let x=0;x<4;x++){const R=new Z({color:16777215,transparent:!0,opacity:.9}),U=new I(bn.mushDot,R),D=w()*6.28,z=.15+w()*.25;U.position.set(Math.cos(D)*z,.6+w()*.1,Math.sin(D)*z),e.add(U)}const d=new K({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(w()*2);for(let x=0;x<g;x++){const R=new I(new j(.015+w()*.015,4,3),d),U=w()*6.28,D=.1+w()*.2;R.position.set(Math.cos(U)*D,.63+w()*.08,Math.sin(U)*D),e.add(R)}const _=new K({color:4465322,emissive:F.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let x=0;x<4;x++){const R=w()*6.28,U=.15+w()*.25,D=new I(new Mt(.004,.002,U,3),_);D.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),D.rotation.z=1.3*(R<3.14?1:-1),D.rotation.y=R,e.add(D)}const p=new K({color:F.mushCap,emissive:F.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),m=new I(new Se(.38,.01,4,12),p);m.position.y=.49,m.rotation.x=Math.PI/2,e.add(m);const b=new K({color:F.mushStem,emissive:F.mushGlow,emissiveIntensity:.08,roughness:.7}),v=new I(new j(.08,5,3),b);v.scale.set(1,.5,1),v.position.y=.04,e.add(v);const M=new K({color:1708040,roughness:.95});for(let x=0;x<3;x++){const R=w()*6.28,U=.1+w()*.12,D=new I(new j(.008+w()*.008,3,3),M);D.position.set(Math.cos(R)*U,.005,Math.sin(R)*U),e.add(D)}const A=new Z({color:F.mushGlow,transparent:!0,opacity:.2});for(let x=0;x<4;x++){const R=new I(new j(.006,3,3),A);R.position.set((w()-.5)*.2,.35+w()*.1,(w()-.5)*.2),e.add(R)}const E=new K({color:11167453,emissive:F.mushGlow,emissiveIntensity:r*.3,roughness:.5}),S=3+Math.floor(w()*3);for(let x=0;x<S;x++){const R=w()*6.28,U=w()*.25,D=new I(new j(.015+w()*.015,3,3),E);D.position.set(Math.cos(R)*U,.58+w()*.06,Math.sin(R)*U),e.add(D)}const T=new K({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Ut}),y=new I(new We(.18,8),T);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(s,0,t),ht.add(e),{group:e,capMat:h,phase:i,speed:o,base:r,x:s,z:t}}function Oy(s,t){const e=new ce,n=w()*6.28,i=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(bn.crystal,i);o.position.y=.9,o.castShadow=!0,e.add(o);for(let v=0;v<3;v++){const M=new I(bn.crystalSm,i),A=v/3*6.28+w()*.5;M.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),M.rotation.z=(w()-.5)*.8,M.castShadow=!0,e.add(M)}const r=new K({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(w()*3);for(let v=0;v<a;v++){const M=w()*6.28,A=.2+w()*.5,E=.08+w()*.12,S=new I(new j(E,4,3),r);S.scale.set(1+w()*.5,.5+w()*.4,1+w()*.5),S.position.set(Math.cos(M)*A,E*.3,Math.sin(M)*A),S.rotation.set(w(),w(),w()),e.add(S)}const c=new Z({color:F.crystalCore,transparent:!0,opacity:.5});for(let v=0;v<3;v++){const M=.4+w()*.8,A=new I(new Mt(.008,.008,M,3),c);A.position.set((w()-.5)*.15,.5+w()*.7,(w()-.5)*.15),A.rotation.set((w()-.5)*.8,(w()-.5)*.5,(w()-.5)*.8),e.add(A)}const l=new Z({color:11206638,transparent:!0,opacity:.6});for(let v=0;v<5;v++){const M=new I(new j(.012,3,3),l);M.position.set((w()-.5)*1,.3+w()*1.5,(w()-.5)*1),e.add(M)}const h=new K({color:F.crystal,emissive:F.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let v=0;v<4;v++){const M=w()*6.28,A=.3+w()*.3,E=new I(new Mt(0,.015,.12+w()*.1,3),h);E.position.set(Math.cos(M)*A,.06+w()*.1,Math.sin(M)*A),E.rotation.z=(w()-.5)*.6,e.add(E)}const f=new K({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Ut});for(let v=0;v<2;v++){const M=w()*6.28,A=.2+w()*.3,E=new I(new We(.04+w()*.03,5),f);E.rotation.x=-Math.PI/2+w()*.4,E.position.set(Math.cos(M)*A,.05,Math.sin(M)*A),e.add(E)}const u=new Z({color:F.crystalCore,transparent:!0,opacity:.2});for(let v=0;v<2;v++){const M=new I(new Mt(.003,.003,.6+w()*.4,3),u);M.position.set((w()-.5)*.3,.7+w()*.5,(w()-.5)*.3),M.rotation.set((w()-.5)*1,w(),(w()-.5)*1),e.add(M)}const d=new K({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let v=0;v<4;v++){const M=new I(new j(.02+w()*.02,3,3),d);M.position.set((w()-.5)*.15,.4+w()*.6,(w()-.5)*.15),e.add(M)}const g=new Z({color:11206638,transparent:!0,opacity:.06}),_=new I(new Se(.35,.02,4,10),g);_.position.y=.6,_.rotation.x=Math.PI/2+w()*.3,e.add(_);const p=new Z({color:F.crystal,transparent:!0,opacity:.06,side:Ut}),m=new I(new We(.8,8),p);m.rotation.x=-Math.PI/2,m.position.y=.01,e.add(m),e.position.set(s,0,t),ht.add(e);const b=new Is(F.crystal,.5,8);return b.position.set(s,1.2,t),ht.add(b),{group:e,mat:i,phase:n,x:s,z:t,light:b}}function By(s,t,e,n,i){const o=new be,r=[],a=[],c=[],l=n||20,h=new ot(i?i[0]:663568),f=new ot(i?i[1]:1388056),u=new ot(i?i[2]:2777141),d=new ot(i?i[3]:4517461),g=new ot(i?i[4]:7864268),_=new ot(i?i[5]:14548838),p=new ot;for(let T=0;T<l;T++){const y=w()*6.28,x=w()*e,R=Math.cos(y)*x,U=Math.sin(y)*x,D=.25+w()*.65,z=.03+w()*.05,H=(w()-.5)*.2,V=(w()-.5)*.2,$=(w()-.5)*.12,W=w()<.5?h:f,lt=w(),ft=lt<.4?d:lt<.7?g:_,bt=D*.35,Ht=D*.7,jt=H*.3,Q=H*.7,at=V*.3,yt=V*.7;r.push(R-z,.01,U),r.push(R+z,.01,U),r.push(R+jt-z*.9,bt,U+at),c.push(0,0,.35),a.push(W.r,W.g,W.b,W.r,W.g,W.b),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b),r.push(R+z,.01,U),r.push(R+jt+z*.9,bt,U+at),r.push(R+jt-z*.9,bt,U+at),c.push(0,.35,.35),a.push(W.r,W.g,W.b),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b);const ut=z*.65;r.push(R+jt-z*.9,bt,U+at),r.push(R+jt+z*.9,bt,U+at),r.push(R+Q-ut,Ht,U+yt+$),c.push(.35,.35,.7),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b,p.r,p.g,p.b),p.copy(u).lerp(ft,.3),a.push(p.r,p.g,p.b),r.push(R+jt+z*.9,bt,U+at),r.push(R+Q+ut,Ht,U+yt+$),r.push(R+Q-ut,Ht,U+yt+$),c.push(.35,.7,.7),p.copy(W).lerp(u,.4),a.push(p.r,p.g,p.b),p.copy(u).lerp(ft,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),r.push(R+Q-ut,Ht,U+yt+$),r.push(R+Q+ut,Ht,U+yt+$),r.push(R+H+$*2,D,U+V+$*1.5),c.push(.7,.7,1),p.copy(u).lerp(ft,.3),a.push(p.r,p.g,p.b,p.r,p.g,p.b),a.push(ft.r,ft.g,ft.b)}const m=new ot(i?i[6]:1725736),b=new ot(i?i[7]:3385941),v=Math.floor(l*.3);for(let T=0;T<v;T++){const y=w()*6.28,x=w()*e*.9,R=Math.cos(y)*x,U=Math.sin(y)*x,D=.02+w()*.03;r.push(R-D,.01,U),r.push(R+D,.01,U),r.push(R,.03+w()*.02,U+D),c.push(0,0,.05),a.push(m.r,m.g,m.b),a.push(m.r,m.g,m.b),a.push(b.r,b.g,b.b)}const M=new Gt(r,3);M.setUsage(Le),o.setAttribute("position",M),o.setAttribute("color",new Gt(a,3)),o.setAttribute("bladeHeight",new Gt(c,1)),o.computeVertexNormals();const A=new Float32Array(r.length);A.set(M.array);const E=new K({vertexColors:!0,roughness:.7,side:Ut,emissive:i?i[8]:4521830,emissiveIntensity:.08}),S=new I(o,E);return S.position.set(s,0,t),ht.add(S),{mesh:S,geo:o,cx:s,cz:t,origPos:A}}function ky(s,t,e,n,i,o,r){const a=s.geo.attributes.position.array,c=s.geo.attributes.bladeHeight.array,l=s.origPos,h=s.cx,f=s.cz,u=o-h,d=r-f;for(let g=0,_=c.length;g<_;g++){const p=c[g];if(p<.01)continue;const m=g*3,b=l[m],v=l[m+1],M=l[m+2],A=(Math.sin(t*.7+(h+b)*.05)*.06+Math.sin(t*1.3+(f+M)*.08)*.03)*e*p*p,E=(Math.sin(t*.9+(f+M)*.06)*.04+Math.sin(t*1.7+(h+b)*.04)*.02)*e*p*p;let S=A+n*p,T=E+i*p;const y=b-u,x=M-d,R=y*y+x*x;if(R<1.44){const U=1-Math.sqrt(R)/1.2,D=U*U*.7,z=Math.atan2(y,x);S+=Math.sin(z)*D*p*.15,T+=Math.cos(z)*D*p*.15,a[m+1]=v*(1-D*p)}else a[m+1]=v;a[m]=b+S,a[m+2]=M+T}s.geo.attributes.position.needsUpdate=!0}function Gy(s,t){const e=new ce,n=new K({color:F.fern,emissive:F.fernGlow,emissiveIntensity:.08,roughness:.7,side:Ut}),i=3+Math.floor(w()*2),o=.5+w()*.7,r=new K({color:1708552,roughness:.95}),a=new I(new j(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let m=0;m<3;m++){const b=w()*6.28,v=new I(new Mt(.003,.002,.08,3),r);v.position.set(Math.cos(b)*.06,.01,Math.sin(b)*.06),v.rotation.z=(b<3.14?1:-1)*1.2,v.rotation.y=b,e.add(v)}for(let m=0;m<i;m++){const b=m/i*6.28+w()*.3,v=new I(new Mt(.004,.006,.55,3),new K({color:1721632,roughness:.8}));v.position.set(Math.cos(b)*.15,.25,Math.sin(b)*.15),v.rotation.y=-b,v.rotation.x=-.6-w()*.4,e.add(v);const M=new I(new _e(.12,.6,1,3),n);M.position.set(Math.cos(b)*.15,.25,Math.sin(b)*.15),M.rotation.y=-b,M.rotation.x=-.6-w()*.4,e.add(M);for(let E=0;E<6;E++){const S=new I(new _e(.07,.06,1,1),n),T=.06+E*.08,y=E%2===0?1:-1;S.position.set(Math.cos(b)*(.15+.06),T,Math.sin(b)*(.15+.06*y)),S.rotation.y=-b,S.rotation.x=-.8,S.rotation.z=y*.5,e.add(S)}const A=new K({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const S=new I(new j(.008,3,3),A),T=.12+E*.12;S.position.set(Math.cos(b)*(.15+.02),T-.01,Math.sin(b)*(.15+.02)),e.add(S)}}const c=new K({color:F.fernGlow,emissive:F.fernGlow,emissiveIntensity:.3}),l=new I(new j(.04,4,3),c);l.position.y=.35,e.add(l);const h=new I(new Mt(.006,.003,.06,3),c);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const f=new K({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let m=0;m<3;m++){const b=w()*6.28,v=w()*.2,M=new I(new j(.006+w()*.005,3,3),f);M.position.set(Math.cos(b)*v,.12+w()*.2,Math.sin(b)*v),e.add(M)}const u=new K({color:3811856,roughness:.9,side:Ut,transparent:!0,opacity:.6}),d=new I(new _e(.1,.4,1,2),u),g=w()*6.28;d.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),d.rotation.x=-1.3,d.rotation.y=g,e.add(d);const _=new Z({color:2768928,transparent:!0,opacity:.3});for(let m=0;m<4;m++){const b=new I(new Mt(.001,.001,.015,3),_);b.position.set((w()-.5)*.08,.08+w()*.15,(w()-.5)*.08),b.rotation.z=(w()-.5)*1.5,e.add(b)}const p=new K({color:1708552,roughness:.95});for(let m=0;m<3;m++){const b=new I(new j(.006,3,3),p);b.position.set((w()-.5)*.1,.005,(w()-.5)*.1),e.add(b)}return e.scale.setScalar(o),e.position.set(s,0,t),ht.add(e),{group:e,phase:w()*6.28}}function Hy(s,t){const e=new ce,n=.25+w()*.4,i=new K({color:F.flowerStem,roughness:.8}),o=new I(new Mt(.01,.015,n,4),i);o.position.y=n/2,e.add(o);for(let T=0;T<2;T++){const y=new I(new Hn(.004,.012,3),i);y.position.set(.012,n*.25+T*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new K({color:F.fern,roughness:.7,side:Ut}),a=new I(new _e(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new _e(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new K({color:1728560,roughness:.7,side:Ut});for(let T=0;T<5;T++){const y=T/5*6.28+.3,x=new I(new _e(.025,.02),l);x.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),x.rotation.x=-1.2,x.rotation.y=-y,e.add(x)}const h=new K({color:F.flower,emissive:F.flowerGlow,emissiveIntensity:.4+w()*.4,transparent:!0,opacity:.85,side:Ut});for(let T=0;T<6;T++){const y=T/6*6.28,x=new I(new _e(.05,.04),h);x.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),x.rotation.x=-.8,x.rotation.y=-y,e.add(x)}const f=new K({color:16777215,emissive:F.flowerGlow,emissiveIntensity:1.2}),u=new I(new j(.02,4,3),f);u.position.y=n+.02,e.add(u);const d=new Z({color:16777130,transparent:!0,opacity:.7}),g=new Z({color:16772676});for(let T=0;T<3;T++){const y=T/3*6.28+.5,x=new I(new Mt(.002,.002,.025,3),d);x.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(x);const R=new I(new j(.005,3,3),g);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const _=new Z({color:16777164,transparent:!0,opacity:.3});for(let T=0;T<2;T++){const y=new I(new j(.006,3,3),_);y.position.set((w()-.5)*.04,n+.06+w()*.04,(w()-.5)*.04),e.add(y)}const p=new K({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),m=new I(new j(.006,3,3),p);m.position.set(.005,n+.005,.005),e.add(m);const b=new Z({color:15662984}),v=new I(new Mt(.002,.002,.03,3),b);v.position.y=n+.035,e.add(v);const M=new I(new j(.005,3,3),b);M.position.y=n+.055,e.add(M);const A=new K({color:1725728,roughness:.7}),E=new I(new Mt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const S=new Z({color:16777215,transparent:!0,opacity:.35});for(let T=0;T<4;T++){const y=T/4*6.28+.3,x=new I(new j(.004,3,3),S);x.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(x)}return e.position.set(s,0,t),ht.add(e),{group:e,petalMat:h,phase:w()*6.28,baseH:n}}function Vy(s,t){const e=new ce,n=new K({color:F.reed,emissive:F.reedTip,emissiveIntensity:.05,roughness:.7}),i=new K({color:F.reedTip,emissive:F.reedTip,emissiveIntensity:.15}),o=new K({color:1709328,roughness:.95}),r=new I(new j(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(w()*4),c=new K({color:F.reed,roughness:.7,side:Ut});for(let d=0;d<a;d++){const g=.6+w()*1,_=(w()-.5)*.2,p=(w()-.5)*.2,m=new I(new Mt(.008,.015,g,4),n);m.position.set(_,g/2,p),e.add(m);const b=2+Math.floor(w()*2),v=new K({color:2771488,roughness:.7});for(let E=0;E<b;E++){const S=g*.2+E*g*.25,T=new I(new Se(.012,.004,4,6),v);T.position.set(_,S,p),T.rotation.x=Math.PI/2,e.add(T)}if(w()<.7){const E=.1+w()*.15,S=w()*6.28,T=new I(new _e(.02,E),c);T.position.set(_+Math.cos(S)*.02,g*.4,p+Math.sin(S)*.02),T.rotation.y=-S,T.rotation.x=-.5-w()*.4,e.add(T)}const M=new I(new j(.025,4,3),i);M.scale.set(.8,1.5,.8),M.position.set(_,g+.02,p),e.add(M);const A=new Z({color:F.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const S=E/3*6.28+w()*.5,T=new I(new Mt(.002,.001,.04,3),A);T.position.set(_+Math.cos(S)*.015,g+.05,p+Math.sin(S)*.015),T.rotation.z=(w()-.5)*.4,e.add(T)}}e.position.set(s,0,t),ht.add(e);const l=new K({color:4864536,roughness:.9,side:Ut,transparent:!0,opacity:.5});for(let d=0;d<2;d++){w()*6.28;const g=(w()-.5)*.15,_=new I(new _e(.025,.02),l);_.position.set(g,.2+d*.25,(w()-.5)*.1),_.rotation.set(w()*.5,w(),w()*.5),e.add(_)}const h=new Z({color:15654348,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new I(new j(.005,3,3),h);g.position.set((w()-.5)*.15,.8+w()*.6,(w()-.5)*.15),e.add(g)}const f=new K({color:2241312,roughness:.9,transparent:!0,opacity:.2}),u=new I(new Se(.1,.008,4,8),f);return u.rotation.x=Math.PI/2,u.position.y=.03,e.add(u),{group:e,phase:w()*6.28,swayAmp:.03+w()*.04}}let pn=null;const mo=[],nn=new ge,Ga=new ot,rp=new ot(F.dandSeed);function Wy(s){const t=new Z({color:16777215,transparent:!0,opacity:1});pn=new Ps(bn.dandSeed,t,s),pn.instanceMatrix.setUsage(Le),pn.instanceColor=new Ii(new Float32Array(s*3),3),pn.instanceColor.setUsage(Le),nn.scale.setScalar(0),nn.updateMatrix();for(let e=0;e<s;e++)pn.setMatrixAt(e,nn.matrix),Ga.copy(rp),pn.setColorAt(e,Ga),mo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});pn.count=s,ht.add(pn)}function ap(s,t,e){let n=null;for(let o=0;o<mo.length;o++)if(!mo[o].active){n=mo[o];break}if(!n)return;n.x=s+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const i=Math.random()*6.28;n.vx=Math.cos(i)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(i)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let cp=0,lp=0,hp=0;function Xy(s,t,e){cp=s,lp=t,hp=e}function Yy(s,t){let e=!1;for(let n=0;n<mo.length;n++){const i=mo[n];if(!i.active){nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),pn.setMatrixAt(n,nn.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),pn.setMatrixAt(n,nn.matrix);continue}i.drift+=(Math.random()-.5)*1.5*s,i.vx+=Math.sin(i.drift)*.3*s,i.vz+=Math.cos(i.drift)*.2*s,i.vx+=cp*.5*s,i.vz+=lp*.5*s,i.vy+=(.15+hp*.1-i.vy)*s*.5,i.vx*=.998,i.vy*=.998,i.vz*=.998,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const r=i.life/i.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;nn.position.set(i.x,i.y,i.z),nn.scale.setScalar(a),nn.updateMatrix(),pn.setMatrixAt(n,nn.matrix),Ga.copy(rp).multiplyScalar(r),pn.setColorAt(n,Ga),e=!0}pn.instanceMatrix.needsUpdate=!0,e&&(pn.instanceColor.needsUpdate=!0)}function qy(s,t){const e=new ce,n=.35+w()*.45,i=new K({color:2777128,roughness:.7,side:Ut}),o=3+Math.floor(w()*2);for(let v=0;v<o;v++){const M=v/o*6.28+w()*.3,A=new I(new _e(.08,.035),i);A.position.set(Math.cos(M)*.05,.02,Math.sin(M)*.05),A.rotation.x=-1.4,A.rotation.y=-M,e.add(A)}const r=new K({color:F.dandStem,roughness:.8}),a=new I(new Mt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new Z({color:14540236,transparent:!0,opacity:.3});for(let v=0;v<4;v++){const M=n*.2+v*n*.18,A=new I(new Mt(.002,.001,.02,3),c);A.position.set(.01,M,0),A.rotation.z=-.8,e.add(A)}const l=new K({color:F.fern,roughness:.7,side:Ut}),h=new I(new _e(.07,.03),l);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const f=new K({color:F.dandHead,emissive:F.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),u=new I(new j(.07,6,5),f);u.position.y=n+.05,e.add(u);const d=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new j(.012,4,3),d);g.position.set(.04,n+.07,.03),e.add(g);const _=new Z({color:F.dandSeed,transparent:!0,opacity:.7});for(let v=0;v<8;v++){const M=v/8*6.28+w()*.2,A=new I(new Hn(.015,.05,3),_);A.position.set(Math.cos(M)*.06,n+.05+w()*.04,Math.sin(M)*.06),A.rotation.x=(w()-.5)*.6,A.rotation.z=(w()-.5)*.6,e.add(A);const E=new Z({color:16777215,transparent:!0,opacity:.3}),S=new I(new Mt(.001,.001,.03,3),E);S.position.set(Math.cos(M)*.08,n+.08,Math.sin(M)*.08),S.rotation.set((w()-.5)*.5,0,(w()-.5)*.5),e.add(S);const T=new Z({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const x=M+(y-.5)*.5,R=new I(new Mt(8e-4,8e-4,.025,3),T);R.position.set(Math.cos(x)*.075,n+.09,Math.sin(x)*.075),R.rotation.set((w()-.5)*.8,0,(w()-.5)*.8),e.add(R)}}const p=new K({color:3811856,roughness:.9});for(let v=0;v<4;v++){const M=v/4*6.28+w()*.5,A=new I(new j(.005,3,3),p);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(M)*.04,n+.04,Math.sin(M)*.04),e.add(A)}const m=new Z({color:1716240,transparent:!0,opacity:.15});for(let v=0;v<3;v++){const M=v/3*6.28,A=new I(new Mt(.001,.001,n*.7,3),m);A.position.set(Math.cos(M)*.01,n*.35,Math.sin(M)*.01),e.add(A)}const b=new Z({color:13426107,transparent:!0,opacity:.2});for(let v=0;v<5;v++){const M=n*.1+w()*n*.7,A=w()*6.28,E=new I(new Mt(8e-4,8e-4,.012,3),b);E.position.set(Math.cos(A)*.012,M,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(s,0,t),ht.add(e),{group:e,headMat:f,x:s,z:t,h:n,dispersed:!1,phase:w()*6.28,seedCount:8,regrowTimer:0}}function Zy(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)ap(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function $y(s,t){const e=new ce,n=1+w()*.8,i=.25+w()*.15,o=new K({color:F.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new I(new Mt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new K({color:F.thornSpike,roughness:.6}),c=4+Math.floor(w()*3);for(let M=0;M<c;M++){const A=n*.15+M/c*n*.6,E=M/c*6.28+w()*1,S=new I(new Hn(.015,.08+w()*.04,3),a);S.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),S.rotation.z=(E<3.14?1.3:-1.3)+w()*.2,S.rotation.y=E,e.add(S)}const l=new K({color:F.thornOrb,emissive:F.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),h=new I(new j(i,12,10),l);h.position.y=n+i*.5,e.add(h);const f=new K({color:16777164,emissive:F.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),u=new I(new j(i*.35,8,6),f);u.position.y=n+i*.5,e.add(u);const d=new Z({color:F.thornOrbGlow,transparent:!0,opacity:.06,blending:pe,depthWrite:!1}),g=new I(new j(i*2,8,6),d);g.position.y=n+i*.5,e.add(g);const _=new K({color:F.thornSpike,emissive:F.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),p=6+Math.floor(w()*3);for(let M=0;M<p;M++){const A=M/p*6.28+w()*.3,E=(w()-.5)*1.2,S=.3+w()*.3,T=new I(new Hn(.018,S,4),_);T.position.set(Math.cos(A)*i*.8,n+i*.5+Math.sin(E)*i*.5,Math.sin(A)*i*.8),T.rotation.z=-E+(A<3.14?1.4:-1.4),T.rotation.y=A,e.add(T)}const m=new K({color:F.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Ut}),b=4+Math.floor(w()*2);for(let M=0;M<b;M++){const A=M/b*6.28+w()*.3,E=.2+w()*.15,S=new I(new _e(E,E*1.5),m);S.position.set(Math.cos(A)*(i+.05),n+i*.3-w()*.1,Math.sin(A)*(i+.05)),S.rotation.y=-A,S.rotation.x=-.4-w()*.3,e.add(S)}const v=new K({color:1718296,emissive:662026,emissiveIntensity:.05,side:Ut});for(let M=0;M<2;M++){const A=w()*6.28,E=new I(new _e(.15,.25),v);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(s,0,t),ht.add(e),{group:e,orbMat:l,hazeMat:d,phase:w()*6.28,x:s,z:t}}function jy(s,t){const e=new ce,n=2+Math.floor(w()*2),i=new K({color:1710128,roughness:.85,emissive:F.helixStem,emissiveIntensity:.1}),o=new I(new j(.18,8,6),i);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let l=0;l<n;l++){const h=1.5+w()*1,f=.15+w()*.15,u=1.5+w()*1.5,d=w()*6.28,g=[],_=16;for(let U=0;U<=_;U++){const D=U/_,z=d+D*u*6.28,H=f*(.3+D*.7);g.push(new N(Math.cos(z)*H,D*h,Math.sin(z)*H))}const p=new vr(g),m=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.12,roughness:.7}),b=new I(new yn(p,20,.025+w()*.01,5,!1),m);e.add(b);const v=.1+w()*.08,A=w()<.5?new Jh(v,0):new Kh(v,0),E=new K({color:F.helixPod,emissive:F.helixPodGlow,emissiveIntensity:.5+w()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),S=new I(A,E),T=p.getPoint(1);S.position.copy(T),S.rotation.set(w()*3,w()*3,w()*3),e.add(S),r.push(E);const y=new I(new j(v*2.5,6,4),new Z({color:F.helixPodGlow,transparent:!0,opacity:.05,blending:pe,depthWrite:!1}));y.position.copy(T),e.add(y);const x=1+Math.floor(w()*2);for(let U=0;U<x;U++){const D=.3+w()*.5,z=p.getPoint(D),H=new K({color:F.helixRing,emissive:F.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),V=new I(new Se(.1+w()*.08,.008,6,12),H);V.position.copy(z),V.rotation.set(w()*3,w()*3,w()*3),e.add(V)}const R=2+Math.floor(w()*2);for(let U=0;U<R;U++){const D=.2+U/R*.6,z=p.getPoint(D),H=new K({color:F.helixNode,emissive:F.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),V=new I(new j(.025+w()*.015,5,4),H);V.position.copy(z),e.add(V)}}const a=new K({color:F.helixStem,emissive:F.helixNode,emissiveIntensity:.06,roughness:.8}),c=2+Math.floor(w()*2);for(let l=0;l<c;l++){const h=l/c*6.28+w()*.5,f=.3+w()*.4,u=new I(new Mt(.006,.015,f,3),a);u.position.set(Math.cos(h)*.12,f*.3,Math.sin(h)*.12),u.rotation.z=(h<3.14?.8:-.8)+w()*.3,u.rotation.y=h,e.add(u)}return e.position.set(s,0,t),ht.add(e),{group:e,podMats:r,phase:w()*6.28}}function Ky(s,t){const e=new ce,n=.25+w()*.1,i=new K({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let u=0;u<3;u++){const d=u/3*6.28+w()*.5,g=new I(new Mt(.01,.035,.25+w()*.15,4),i);g.position.set(Math.cos(d)*n*.6,.06,Math.sin(d)*n*.6),g.rotation.z=d<3.14?1:-1,g.rotation.y=d,e.add(g)}const o=new K({color:F.snapBody,emissive:F.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new I(new j(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new K({color:1730116,emissive:F.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),c=new I(new Se(n*.45,.02,6,12),a);c.position.y=n*1.7,c.rotation.x=Math.PI/2,e.add(c);const l=5+Math.floor(w()*3),h=[],f=[];for(let u=0;u<l;u++){const d=u/l*6.28+w()*.3,g=w()*6.28,_=3+Math.floor(w()*2),p=.2+w()*.1,m=[],b=new ge;b.position.set(Math.cos(d)*n*.6,n*1.4,Math.sin(d)*n*.6),b.rotation.y=d,e.add(b);let v=b;for(let S=0;S<_;S++){const T=S/_,y=.02*(1-T*.6),x=new K({color:F.snapFrond,emissive:F.snapBodyGlow,emissiveIntensity:.08+T*.15,roughness:.6}),R=new I(new Mt(y*.7,y,p,4),x);R.position.y=S===0?0:p,R.geometry.translate(0,p/2,0),v.add(R),m.push(R),v=R}const M=new K({color:F.snapTip,emissive:F.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new I(new j(.025+w()*.015,5,4),M);A.position.y=p,v.add(A),f.push(M);const E=new I(new j(.06,4,3),new Z({color:F.snapTipGlow,transparent:!0,opacity:.04,blending:pe,depthWrite:!1}));A.add(E),h.push({segments:m,baseAngle:d,phaseOffset:g,segLen:p})}return e.position.set(s,0,t),ht.add(e),{group:e,body:r,bodyMat:o,tipMats:f,fronds:h,phase:w()*6.28,x:s,z:t}}function Jy(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const c=o.fronds[a],l=1.2+a%3*.3;for(let h=0;h<c.segments.length;h++){const f=c.segments[h],u=.15+h*.12,d=Math.sin(e*l+c.phaseOffset+h*.5)*u,g=Math.cos(e*l*.7+c.phaseOffset+h*.3)*u*.6;f.rotation.z=d,f.rotation.x=g}}for(let a=0;a<o.tipMats.length;a++){const c=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+c*.4)*n}}}function Qy(s,t,e){const n=new ce,i=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Ut}),o=new I(new j(.5,8,6,0,6.28,0,Math.PI/2),i);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Se(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new j(.2,6,4),new Z({color:F.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new Z({color:12312063,transparent:!0,opacity:.3});for(let b=-1;b<=1;b+=2){const v=new I(new j(.06,4,3),l);v.scale.set(.6,1.5,.6),v.position.set(b*.08,-.03,0),n.add(v)}const h=new Z({color:15663103,transparent:!0,opacity:.7});for(let b=0;b<5;b++){const v=w()*6.28,M=w()*.8,A=new I(new j(.02,3,3),h);A.position.set(Math.cos(v)*M*.35,.1-M*.15,Math.sin(v)*M*.35),n.add(A)}const f=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),u=new Z({color:F.jellyGlow,transparent:!0,opacity:.6});for(let b=0;b<6;b++){const v=b/6*6.28,M=.4+w()*.6,A=new I(new Mt(.015,.008,M,3),f);A.position.set(Math.cos(v)*.25,-M/2-.05,Math.sin(v)*.25),n.add(A);const E=new I(new j(.012,3,3),u);E.position.set(Math.cos(v)*.25,-M-.06,Math.sin(v)*.25),n.add(E)}const d=new Z({color:F.jellyGlow,transparent:!0,opacity:.12});for(let b=0;b<8;b++){const v=b/8*6.28,M=new I(new Mt(.002,.002,.4,3),d);M.position.set(Math.cos(v)*.2,.05,Math.sin(v)*.2),M.rotation.z=Math.PI/2-.3,M.rotation.y=-v,n.add(M)}const g=new K({color:F.jellyBell,emissive:F.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let b=0;b<10;b++){const v=b/10*6.28,M=new I(new j(.02,3,3),g);M.scale.set(1,.5,.8),M.position.set(Math.cos(v)*.46,-.04,Math.sin(v)*.46),n.add(M)}const _=new K({color:F.jellyTent,emissive:F.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),p=new I(new Mt(.02,.01,.35,4),_);p.position.y=-.2,n.add(p);const m=new Z({color:14548991,transparent:!0,opacity:.4});for(let b=0;b<3;b++){const v=b/3*6.28,M=new I(new j(.008,3,3),m);M.position.set(Math.cos(v)*.25,-.55-w()*.3,Math.sin(v)*.25),n.add(M)}return n.position.set(s,t,e),ht.add(n),{group:n,bellMat:i,phase:w()*6.28,driftAng:w()*6.28,homeX:s,homeZ:e,floatY:t,wobble:.5+w()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function tw(s,t){const e=new ce,n=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.3,roughness:.8}),i=new I(new j(.3,8,6),n);i.position.y=.35,e.add(i);const o=new K({color:16773344,emissive:F.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new j(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new j(.22,7,5),n);a.position.y=.65,e.add(a);const c=[];for(let A=-1;A<=1;A+=2){const E=new I(new Hn(.06,.15,4),n);E.position.set(A*.13,.85,0),E.rotation.z=A*.3,e.add(E),c.push({mesh:E,side:A,baseRotZ:A*.3});const S=new I(new Hn(.03,.08,4),new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.2}));S.position.set(A*.13,.84,.01),S.rotation.z=A*.3,e.add(S),c.push({mesh:S,side:A,baseRotZ:A*.3})}const l=new Z({color:F.puffEye}),h=[];for(let A=-1;A<=1;A+=2){const E=new I(new j(.035,4,4),l);E.position.set(A*.09,.68,.18),e.add(E),h.push(E);const S=new Z({color:16777215}),T=new I(new j(.012,3,3),S);T.position.set(A*.09+A*.015,.695,.2),e.add(T),h.push(T)}const f=new Z({color:4469555}),u=new I(new j(.015,3,3),f);u.position.set(0,.63,.22),e.add(u);const d=new K({color:F.puffCheek,emissive:F.puffCheek,emissiveIntensity:.3});for(let A=-1;A<=1;A+=2){const E=new I(new j(.04,4,3),d);E.position.set(A*.15,.61,.15),e.add(E)}const g=new Z({color:15654348,transparent:!0,opacity:.5});for(let A=-1;A<=1;A+=2)for(let E=0;E<2;E++){const S=new I(new Mt(.002,.002,.06,3),g);S.position.set(A*.12,.62-E*.03,.2),S.rotation.z=A*.7+E*A*.2,S.rotation.x=-.1,e.add(S)}for(let A=-1;A<=1;A+=2){const E=new I(new j(.07,4,3),n);E.position.set(A*.12,.07,.05),E.scale.set(1,.5,1.3),e.add(E);const S=new K({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let T=0;T<3;T++){const y=T/3*6.28,x=new I(new j(.012,3,3),S);x.position.set(A*.12+Math.cos(y)*.03,.03,.05+Math.sin(y)*.03),e.add(x)}}const _=new K({color:16777215,emissive:F.puffGlow,emissiveIntensity:.4,roughness:.9}),p=new I(new j(.06,5,4),_);p.position.set(0,.38,-.28),e.add(p);const m=new K({color:F.puffBody,emissive:F.puffGlow,emissiveIntensity:.2,roughness:1});for(let A=0;A<6;A++){const E=w()*6.28,S=w()*1.2,T=new I(new j(.01,3,3),m);T.position.set(Math.cos(E)*.28,.25+S*.2,Math.sin(E)*.28),e.add(T)}const b=new Z({color:F.puffBody});for(let A=-1;A<=1;A+=2){const E=new I(new Mt(.003,.003,.04,3),b);E.position.set(A*.09,.72,.17),E.rotation.z=A*.3,e.add(E)}const v=new Z({color:5583684,transparent:!0,opacity:.5}),M=new I(new Mt(.002,.002,.03,3),v);return M.position.set(0,.59,.22),M.rotation.z=Math.PI/2,e.add(M),e.position.set(s,0,t),ht.add(e),{group:e,ears:c,eyes:h,tail:p,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.8,hopTimer:0,hopPhase:w()*6.28,homeX:s,homeZ:t,state:"idle",idleTimer:w()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:s,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function ew(s,t){const e=new ce,n=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),i=new I(new j(.4,7,5),n);i.scale.set(1,.8,1.5),i.position.y=.9,e.add(i);const o=new K({color:13431039,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new j(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new ce;a.position.set(0,1.15,.3);const c=new I(new Mt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new j(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const h=new I(new j(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const f=new Z({color:2245717}),u=new I(new j(.02,3,3),f);u.position.set(0,.17,.43),a.add(u);const d=new Z({color:F.deerEye});for(let x=-1;x<=1;x+=2){const R=new I(new j(.025,4,3),d);R.position.set(x*.09,.25,.28),a.add(R);const U=new I(new j(.008,3,3),new Z({color:16777215}));U.position.set(x*.085,.26,.29),a.add(U);const D=new Z({color:F.deerBody,transparent:!0,opacity:.5}),z=new I(new Mt(.002,.002,.03,3),D);z.position.set(x*.1,.27,.28),z.rotation.z=x*.6,a.add(z)}for(let x=-1;x<=1;x+=2){const R=new I(new Hn(.04,.14,4),n);R.position.set(x*.1,.37,.15),R.rotation.z=x*.4,a.add(R)}const g=new K({color:F.deerAntler,emissive:F.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let x=-1;x<=1;x+=2){const R=new I(new Mt(.015,.02,.25,3),g);R.position.set(x*.08,.42,.12),R.rotation.z=x*.5,a.add(R);const U=new I(new Mt(.01,.015,.15,3),g);U.position.set(x*.15,.55,.1),U.rotation.z=x*.8,a.add(U);const D=new I(new Mt(.008,.012,.1,3),g);D.position.set(x*.11,.5,.16),D.rotation.z=x*.3,D.rotation.x=-.5,a.add(D);const z=new I(new j(.012,3,3),new Z({color:F.deerGlow,transparent:!0,opacity:.8}));z.position.set(x*.18,.61,.09),a.add(z)}const _=new K({color:F.deerBody,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),p=new I(new Mt(.01,.02,.1,3),_);p.position.set(0,.11,.28),p.rotation.x=.3,a.add(p);const m=new Z({color:1122850});for(let x=-1;x<=1;x+=2){const R=new I(new j(.006,3,3),m);R.position.set(x*.02,.16,.42),a.add(R)}e.add(a);const b=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],v=new K({color:6715272,emissive:F.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),M=[];for(let x=0;x<4;x++){const R=b[x],U=new ce;U.position.set(R.x,.65,R.z);const D=new I(new Mt(.025,.035,.35,4),n);D.position.y=-.175,U.add(D);const z=new ce;z.position.set(0,-.35,0);const H=new I(new Mt(.02,.03,.3,4),n);H.position.y=-.15,z.add(H);const V=new I(new Mt(.04,.032,.04,4),v);V.position.y=-.3,z.add(V);const $=new K({color:14544639,emissive:F.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),W=new I(new j(.025,3,3),$);W.scale.set(1.3,.5,1.3),W.position.y=-.25,z.add(W),U.add(z),e.add(U),M.push({upper:U,lower:z,isFront:x<2,side:R.x<0?-1:1})}const A=new ce;A.position.set(0,1.1,-.55);const E=new I(new Hn(.05,.15,4),new K({color:16777215,emissive:F.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const S=new Z({color:13434862,transparent:!0,opacity:.3});for(let x=0;x<4;x++){const R=new I(new j(.02,3,3),S);R.position.set((w()-.5)*.25,.8+w()*.3,(w()-.5)*.4),e.add(R)}const T=new Z({color:F.deerBody,transparent:!0,opacity:.15});for(let x=0;x<3;x++){const R=new I(new Mt(.002,.002,.2,3),T);R.position.set(.3,.85-x*.06,0),R.rotation.z=Math.PI/2+.3,e.add(R)}const y=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let x=0;x<3;x++){const R=new I(new j(.008,3,3),y);R.position.set((w()-.5)*.3,.9+w()*.3,(w()-.5)*.35),e.add(R)}return e.position.set(s,0,t),ht.add(e),{group:e,mat:n,phase:w()*6.28,wanderAng:w()*6.28,speed:.6+w()*.4,walkTimer:0,legCycle:0,homeX:s,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:M,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:s,_lastTZ:t}}function nw(s,t,e){const n=new ce,i=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new Mt(.04,.05,.3,5),i);o.rotation.x=Math.PI/2,n.add(o);const r=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.5,roughness:.6});for(let p=0;p<3;p++){const m=new I(new Se(.045,.006,4,8),r);m.position.z=-.05+p*.06,m.rotation.x=0,n.add(m)}const a=new I(new j(.05,5,4),i);a.position.z=.18,n.add(a);const c=new K({color:1122867,roughness:.2,metalness:.4});for(let p=-1;p<=1;p+=2){const m=new I(new j(.018,4,3),c);m.position.set(p*.03,.01,.21),n.add(m)}for(let p=-1;p<=1;p+=2){const m=new I(new Mt(.005,.005,.15,3),i);m.position.set(p*.03,.03,.22),m.rotation.x=-.6,m.rotation.z=p*.4,n.add(m);const b=new Z({color:F.mothGlow,transparent:!0,opacity:.7}),v=new I(new j(.015,3,3),b);v.scale.set(2,.5,1),v.position.set(p*.05,.12,.28),n.add(v)}const l=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Ut,roughness:.4});n._wingPivots=[];for(let p=-1;p<=1;p+=2){const m=new ce;m.position.set(p*.04,0,.02);const b=new I(new j(.2,6,4),l);b.scale.set(1.8,.08,1.2),b.position.set(p*.18,0,.02),m.add(b);const v=new I(new j(.12,5,3),l);v.scale.set(1.5,.06,1),v.position.set(p*.12,0,-.1),m.add(v);const M=new K({color:F.mothWing,emissive:F.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Ut}),A=new I(new _e(.03,.12),M);A.position.set(p*.1,0,-.18),A.rotation.y=p*.2,m.add(A);const E=new Z({color:F.mothSpot,transparent:!0,opacity:.9}),S=new I(new j(.03,4,3),E);S.position.set(p*.2,.02,.03),m.add(S);const T=new I(new j(.018,3,3),E);T.position.set(p*.1,.02,-.08),m.add(T);const y=new Z({color:F.mothGlow,transparent:!0,opacity:.25});for(let x=0;x<2;x++){const R=new I(new Mt(.002,.002,.2,3),y);R.position.set(p*.15,.01,-.02+x*.06),R.rotation.z=Math.PI/2+p*(.15+x*.15),m.add(R)}n.add(m),n._wingPivots.push({pivot:m,side:p})}const h=new Z({color:F.mothGlow,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const m=new I(new j(.008,3,3),h);m.position.set((w()-.5)*.04,0,-.15-p*.05),n.add(m)}const f=new Z({color:4473907,transparent:!0,opacity:.5}),u=new I(new Se(.015,.003,4,8,Math.PI*1.5),f);u.position.set(0,-.02,.2),u.rotation.x=.4,n.add(u);const d=new K({color:F.mothBody,emissive:F.mothGlow,emissiveIntensity:.4,roughness:1});for(let p=0;p<5;p++){const m=w()*6.28,b=new I(new j(.008,3,3),d);b.position.set(Math.cos(m)*.04,Math.sin(m)*.04,w()*.15-.05),n.add(b)}const g=new Z({color:F.mothBody,transparent:!0,opacity:.4});for(let p=-1;p<=1;p+=2)for(let m=0;m<3;m++){const b=new I(new Mt(.002,.002,.06,3),g);b.position.set(p*.04,-.03,-.05+m*.06),b.rotation.z=p*.8,b.rotation.x=-.3,n.add(b)}const _=new Z({color:F.mothGlow,transparent:!0,opacity:.35});for(let p=-1;p<=1;p+=2)for(let m=0;m<5;m++){const b=m/5*Math.PI-Math.PI/2,v=new I(new j(.006,3,3),_);v.position.set(p*(.3+Math.cos(b)*.05),Math.sin(b)*.02,.02+m*.04),n.add(v)}return n.position.set(s,t,e),ht.add(n),{group:n,wingMat:l,phase:w()*6.28,orbitAng:w()*6.28,orbitR:2+w()*4,centerX:s,centerZ:e,floatY:t,flapSpeed:6+w()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function iw(s,t,e){const n=new ce,i=new Z({color:F.wispCore}),o=new I(new j(.08,6,4),i);n.add(o);const r=new Z({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new vs(.06,0),r);n.add(a);const c=new Z({color:F.wispGlow,transparent:!0,opacity:.5}),l=new I(new j(.18,6,4),c);n.add(l);const h=new Z({color:F.wispGlow,transparent:!0,opacity:.25}),f=new I(new Se(.22,.008,4,12),h);f.rotation.x=Math.PI/2,n.add(f);const u=new Z({color:F.wispTrail,transparent:!0,opacity:.15}),d=new I(new j(.35,5,4),u);n.add(d);const g=new Z({color:16777215,transparent:!0,opacity:.8}),_=new I(new j(.02,3,3),g);_.position.set(.15,0,0),n.add(_);const p=[];for(let S=0;S<3;S++){const T=new Z({color:F.wispCore,transparent:!0,opacity:.35}),y=new I(new j(.01,3,3),T);y.position.set((w()-.5)*.1,-.1-S*.08,(w()-.5)*.1),n.add(y),p.push(y)}const m=new Z({color:F.wispGlow,transparent:!0,opacity:.18}),b=[];for(let S=0;S<3;S++){const T=S/3*6.28+w()*.5,y=.15+w()*.1,x=new I(new Mt(.003,.001,y,3),m);x.position.set(Math.cos(T)*.1,w()*.08,Math.sin(T)*.1),x.rotation.z=Math.PI/3*(T<3.14?1:-1),x.rotation.y=T,n.add(x),b.push({mesh:x,baseAng:T})}const v=new Z({color:F.wispGlow,transparent:!0,opacity:.12}),M=new I(new Se(.26,.005,4,10),v);M.rotation.x=1.2,M.rotation.z=.8,n.add(M);const A=new Z({color:16777215,transparent:!0,opacity:.5});for(let S=0;S<4;S++){const T=w()*6.28,y=w()*.8,x=new I(new j(.006,3,3),A);x.position.set(Math.cos(T)*.06,Math.sin(y)*.06,Math.sin(T)*.06),n.add(x)}const E=new Z({color:F.wispCore,transparent:!0,opacity:.2});for(let S=0;S<4;S++){const T=new I(new j(.004,3,3),E);T.position.set(.03+w()*.04,-.05-S*.04,w()*.04),n.add(T)}return n.scale.setScalar(.5),n.position.set(s,t,e),ht.add(n),{group:n,glowMat:c,hazeMat:u,embers:p,tendrils:b,plasmaMat:m,facet:a,halo:f,halo2:M,phase:w()*6.28,targetX:s,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function sw(s,t){const e=new ce,n=nh,i=8+Math.floor(w()*5),o=new K({color:F.fairyMush,emissive:F.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new K({color:F.mushStem,roughness:.7,emissive:F.fairyGlow,emissiveIntensity:.05});for(let A=0;A<i;A++){const E=A/i*6.28+w()*.15,S=n+w()*.3-.15,T=.15+w()*.2,y=new I(bn.mushStem,r);y.scale.setScalar(T),y.position.set(Math.cos(E)*S,T*.3,Math.sin(E)*S),e.add(y);const x=new I(bn.mushCap,o);x.scale.set(T,T*.4,T),x.position.set(Math.cos(E)*S,T*.55,Math.sin(E)*S),e.add(x);const R=new Z({color:16777215,transparent:!0,opacity:.7}),U=new I(new j(T*.08,3,3),R);U.position.set(Math.cos(E)*S,T*.6,Math.sin(E)*S),e.add(U)}const a=new K({color:8934792,emissive:F.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=w()*6.28,S=n+w()*.6-.3,T=.06+w()*.06,y=new I(bn.mushCap,a);y.scale.set(T,T*.5,T),y.position.set(Math.cos(E)*S,T*.35,Math.sin(E)*S),e.add(y)}const c=new K({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=w()*6.28,S=w()*n*.8,T=new I(new j(.08+w()*.08,4,3),c);T.scale.set(1.5,.2,1.5),T.position.set(Math.cos(E)*S,.01,Math.sin(E)*S),e.add(T)}const l=new K({color:4478310,emissive:F.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new I(new j(.12,5,3),l);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const f=new Z({color:F.fairyGlow,transparent:!0,opacity:.2}),u=[];for(let A=0;A<8;A++){const E=new I(new j(.012,3,3),f),S=(w()-.5)*n*.8,T=(w()-.5)*n*.8;E.position.set(S,.05+w()*.3,T),e.add(E),u.push({mesh:E,baseX:S,baseZ:T,drift:w()*6.28,speed:.2+w()*.3})}const d=new Z({color:F.fairyRing,transparent:!0,opacity:0,side:Ut}),g=new I(new Ao(.3,n-.3,16),d);g.rotation.x=-Math.PI/2,g.position.y=.02,e.add(g);const _=new Z({color:F.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=w()*6.28,S=E+.5+w()*1.5,T=n*.6+w()*n*.4,y=new I(new Mt(.002,.002,T,3),_);y.position.set(Math.cos((E+S)/2)*n*.4,.005,Math.sin((E+S)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const p=new K({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=w()*6.28,S=w()*n*.7,T=new I(new j(.03,4,3),p);T.scale.set(1.3,.3,1.3),T.position.set(Math.cos(E)*S,.008,Math.sin(E)*S),e.add(T)}const m=new K({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new I(new We(.02+w()*.02,4),m);E.position.set((w()-.5)*.08,.06,(w()-.5)*.06),E.rotation.x=-Math.PI/2+w()*.4,e.add(E)}const b=[];for(let A=0;A<5;A++){const E=w()*6.28,S=w()*n*.9,T=new Z({color:8978346,transparent:!0,opacity:.25}),y=new I(new j(.005,3,3),T);y.position.set(Math.cos(E)*S,.01,Math.sin(E)*S),e.add(y),b.push(y)}const v=new Z({color:657926,transparent:!0,opacity:.15,side:Ut}),M=new I(new Ao(n*.5,n*.85,12),v);return M.rotation.x=-Math.PI/2,M.position.y=.008,e.add(M),e.position.set(s,0,t),ht.add(e),{group:e,mushMat:o,discMat:d,sporeMat:f,spores:u,glowWorms:b,x:s,z:t,ringR:n,phase:w()*6.28,glowIntensity:0,active:!1}}function ow(s,t,e){const n=new ce,i=new K({color:F.bubbleIris,emissive:F.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(bn.bubble,i);n.add(o);const r=new Z({color:15650047,transparent:!0,opacity:.1}),a=new I(new Se(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=w()*3,n.add(a);const c=new I(new Se(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new Z({color:F.bubbleShine,transparent:!0,opacity:.5}),h=new I(new j(.04,4,3),l);h.position.set(.05,.07,.08),n.add(h);const f=new Z({color:15658751,transparent:!0,opacity:.2}),u=new I(new j(.025,3,3),f);u.position.set(-.06,-.04,-.06),n.add(u);const d=new Z({color:16755438,transparent:!0,opacity:.12}),g=new I(new j(.06,4,3),d);g.position.set(.02,-.02,.01),n.add(g);const _=new Z({color:16772863,transparent:!0,opacity:.08}),p=new I(new j(.12,5,4),_);n.add(p);const m=[16764125,13426175,14548940];for(let T=0;T<3;T++){const y=new Z({color:m[T],transparent:!0,opacity:.06}),x=new I(new Se(.14-T*.02,.002,4,8),y);x.position.y=-.04+T*.04,x.rotation.x=Math.PI/2,n.add(x)}const b=new Z({color:16777215,transparent:!0,opacity:.6});for(let T=0;T<3;T++){const y=w()*6.28,x=w()*Math.PI-Math.PI/2,R=new I(new j(.003,3,3),b);R.position.set(Math.cos(y)*Math.cos(x)*.14,Math.sin(x)*.14,Math.sin(y)*Math.cos(x)*.14),n.add(R)}const v=new Z({color:11189196,transparent:!0,opacity:.1}),M=new I(new j(.015,3,3),v);M.position.set((w()-.5)*.04,(w()-.5)*.04,(w()-.5)*.04),n.add(M);const A=new Z({color:F.bubbleIris,transparent:!0,opacity:.15}),E=new I(new j(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const S=.6+w()*.8;return n.scale.setScalar(S),n.position.set(s,t,e),ht.add(n),{group:n,shellMat:i,phase:w()*6.28,driftAng:w()*6.28,driftSpeed:.3+w()*.5,floatY:t,homeX:s,homeZ:e,bobAmp:.3+w()*.4,popped:!1,popTimer:0,sc:S}}function rw(s,t){const e=new ce,n=1.5+w()*1,i=new K({color:329746,roughness:.9}),o=new I(new We(n*.85,10),i);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new K({color:F.pondWater,emissive:F.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new We(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new K({color:3816002,roughness:.85}),l=5+Math.floor(w()*4);for(let D=0;D<l;D++){const z=D/l*6.28+w()*.3,H=n+w()*.2-.1,V=.06+w()*.08,$=new I(new j(V,4,3),c);$.scale.set(1+w()*.5,.4+w()*.3,1+w()*.5),$.position.set(Math.cos(z)*H,V*.2,Math.sin(z)*H),$.rotation.set(w(),w(),w()),e.add($)}const h=new K({color:1725728,roughness:.7,side:Ut});for(let D=0;D<3;D++){const z=w()*6.28,H=n*.85+w()*.2;for(let V=0;V<3;V++){const $=new I(new _e(.015,.15+w()*.1),h);$.position.set(Math.cos(z)*H+(w()-.5)*.05,.08,Math.sin(z)*H+(w()-.5)*.05),$.rotation.y=w()*3,$.rotation.x=-.2,e.add($)}}const f=new Z({color:11197934,transparent:!0,opacity:.08}),u=[];for(let D=0;D<3;D++){const z=new I(new Se(1,.004,4,20),f.clone());z.rotation.x=Math.PI/2,z.position.y=.036,e.add(z),u.push({mesh:z,phase:D/3})}const d=new K({color:F.lilyPad,roughness:.6,side:Ut}),g=4+Math.floor(w()*2),_=[];for(let D=0;D<g;D++){const z=w()*6.28,H=w()*n*.6,V=.15+w()*.15,$=new I(new We(V,8),d);$.rotation.x=-Math.PI/2,$.position.set(Math.cos(z)*H,.05,Math.sin(z)*H),e.add($);const W=new Z({color:1724448,transparent:!0,opacity:.3}),lt=new I(new Mt(.002,.002,V*1.5,3),W);lt.position.set(Math.cos(z)*H,.052,Math.sin(z)*H),lt.rotation.x=Math.PI/2,lt.rotation.z=w()*3,e.add(lt),_.push({mesh:$,phase:w()*6.28})}const p=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Ut}),m=.08;for(let D=0;D<6;D++){const z=D/6*6.28,H=new I(new _e(.06,.05),p);H.position.set(_[0].mesh.position.x+Math.cos(z)*.05,m,_[0].mesh.position.z+Math.sin(z)*.05),H.rotation.x=-1,H.rotation.y=-z,e.add(H)}const b=new K({color:16777130,emissive:F.lilyGlow,emissiveIntensity:.8}),v=new I(new j(.025,4,3),b);if(v.position.set(_[0].mesh.position.x,m+.02,_[0].mesh.position.z),e.add(v),_.length>2){const D=new K({color:F.lilyFlower,emissive:F.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),z=new I(new j(.03,5,4),D);z.scale.set(.8,1.2,.8),z.position.set(_[2].mesh.position.x,.09,_[2].mesh.position.z),e.add(z)}const M=new K({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const z=w()*6.28,H=w()*n*.7,V=new I(new j(.02+w()*.025,4,3),M);V.scale.set(1+w()*.5,.4,1+w()*.5),V.position.set(Math.cos(z)*H,.015,Math.sin(z)*H),e.add(V)}const A=new Z({color:2761752,transparent:!0,opacity:.12,side:Ut});for(let D=0;D<3;D++){const z=w()*6.28,H=w()*n*.5,V=new I(new We(.08+w()*.06,5),A);V.rotation.x=-Math.PI/2,V.position.set(Math.cos(z)*H,.012,Math.sin(z)*H),e.add(V)}const E=new K({color:1122837,roughness:.7,transparent:!0,opacity:.4}),S=[];for(let D=0;D<2;D++){const z=w()*6.28,H=w()*n*.4,V=new I(new j(.012,4,3),E);V.scale.set(.8,.5,1.3),V.position.set(Math.cos(z)*H,.04,Math.sin(z)*H),e.add(V);const $=new I(new Mt(.002,.001,.025,3),E);$.position.set(Math.cos(z)*H-Math.cos(z)*.02,.04,Math.sin(z)*H-Math.sin(z)*.02),$.rotation.z=Math.PI/2,$.rotation.y=z,e.add($),S.push({body:V,tail:$,ang:z,orbR:.15+w()*n*.35,speed:.3+w()*.4})}const T=new Z({color:2250016,transparent:!0,opacity:.1,side:Ut});for(let D=0;D<3;D++){const z=w()*6.28,H=n*.7+w()*n*.25,V=new I(new We(.06+w()*.04,5),T);V.rotation.x=-Math.PI/2,V.position.set(Math.cos(z)*H,.032,Math.sin(z)*H),e.add(V)}const y=new Z({color:13426158,transparent:!0,opacity:.06}),x=new I(new Se(n-.05,.01,4,16),y);x.rotation.x=Math.PI/2,x.position.y=.035,e.add(x);const R=new K({color:4861976,roughness:.8,side:Ut,transparent:!0,opacity:.6}),U=new I(new We(.03,5),R);return U.rotation.x=-Math.PI/2,U.position.set((w()-.5)*n*.5,.04,(w()-.5)*n*.5),e.add(U),e.position.set(s,0,t),ht.add(e),{group:e,waterMat:r,flMat:p,pads:_,ripples:u,tadpoles:S,x:s,z:t,phase:w()*6.28,pondR:n}}function aw(s,t){const e=new ce,n=new Z({color:F.orbGold}),i=new I(new j(.2,10,8),n);e.add(i);const o=new Z({color:16777215}),r=new I(new j(.06,6,4),o);e.add(r);const a=new Z({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new vs(.15,0),a);e.add(c);const l=new Z({color:F.orbGlow,transparent:!0,opacity:.5}),h=new I(new j(.35,8,6),l);e.add(h);const f=new Z({color:F.orbGlow,transparent:!0,opacity:.3});for(let S=0;S<8;S++){const T=S/8*6.28,y=new I(new Hn(.02,.25,3),f);y.position.set(Math.cos(T)*.3,Math.sin(T*2)*.05,Math.sin(T)*.3),y.rotation.z=-T+Math.PI/2,y.rotation.y=T,e.add(y)}const u=new Z({color:F.orbInner,transparent:!0,opacity:.15}),d=new I(new j(.6,8,5),u);e.add(d);for(let S=0;S<6;S++){const T=new I(new j(.03,4,3),new Z({color:16777215})),y=S/6*6.28;T.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(T)}const g=new Z({color:F.orbGold,transparent:!0,opacity:.7});for(let S=0;S<4;S++){const T=S/4*6.28+.4,y=new I(new j(.015,3,3),g);y.position.set(Math.cos(T)*.5,0,Math.sin(T)*.5),e.add(y)}const _=new Z({color:16768426,transparent:!0,opacity:.12});for(let S=0;S<3;S++){const T=new I(new Se(.28,.003,4,12),_);T.rotation.set(S*1.05,S*.7,0),e.add(T)}const p=new Z({color:F.orbGlow,transparent:!0,opacity:.08}),m=new I(new Se(.4,.004,4,16),p);m.rotation.x=Math.PI/2,e.add(m);const b=new Z({color:16772812,transparent:!0,opacity:.15}),v=new I(new Se(.25,.012,4,10),b);v.rotation.x=Math.PI/2,e.add(v);const M=new Z({color:16777215,transparent:!0,opacity:.5});for(let S=0;S<6;S++){const T=w()*6.28,y=w()*Math.PI-Math.PI/2,x=new I(new j(.008,3,3),M);x.position.set(Math.cos(T)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(T)*Math.cos(y)*.2),e.add(x)}const A=new Z({color:F.orbGlow,transparent:!0,opacity:.1,side:Ut}),E=new I(new We(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(s,1,t),ht.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:u,x:s,z:t,found:!1,flyUp:!1,flyY:1,phase:w()*6.28,laserLine:null,laserMat:null}}function cw(s,t){const e=new ce,n=new K({color:F.rockBase,roughness:.85,metalness:.05}),i=new K({color:F.rockLight,roughness:.8,metalness:.05}),o=new K({color:F.rockMoss,emissive:F.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+w()*.5,a=new I(new j(r,8,6),w()<.6?n:i),c=.4+w()*.4;a.scale.set(1+w()*.6,c,1+w()*.6),a.position.y=r*c*.35,a.rotation.set(w()*.5,w()*3,w()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(w()*3);for(let E=0;E<l;E++){const S=w()*6.28,T=r*.6+w()*r*.5,y=r*.3+w()*r*.4,x=new I(new j(y,5,4),w()<.5?n:i),R=.3+w()*.4;x.scale.set(1+w()*.5,R,1+w()*.5),x.position.set(Math.cos(S)*T,y*R*.3,Math.sin(S)*T),x.rotation.set(w()*.8,w()*3,w()*.5),e.add(x)}const h=2+Math.floor(w()*3);for(let E=0;E<h;E++){const S=w()*6.28,T=w()*r*.6,y=r*.15+w()*r*.2,x=new I(new j(y,4,3),o);x.scale.set(1.5,.2,1.5),x.position.set(Math.cos(S)*T,r*.35+w()*.05,Math.sin(S)*T),e.add(x)}const f=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const S=new K({color:f[Math.floor(w()*f.length)],roughness:.9,transparent:!0,opacity:.5}),T=w()*6.28,y=new I(new j(r*.06+w()*r*.08,3,3),S);y.scale.set(2,.15,2),y.position.set(Math.cos(T)*r*.5,r*.25+w()*.1,Math.sin(T)*r*.5),e.add(y)}const u=new Z({color:1381656,transparent:!0,opacity:.35}),d=2+Math.floor(w()*3);for(let E=0;E<d;E++){const S=w()*6.28,T=r*.3+w()*r*.4,y=new I(new Mt(.003,.001,T,3),u),x=r*.3+w()*r*.2;y.position.set(Math.cos(S)*x,r*.2+w()*r*.15,Math.sin(S)*x),y.rotation.set(w()*.5,S,Math.PI/2+w()*.4),e.add(y)}const g=new Z({color:660752,transparent:!0,opacity:.2,side:Ut}),_=1+Math.floor(w()*2);for(let E=0;E<_;E++){const S=w()*6.28,T=r*.3+w()*r*.3,y=new I(new _e(.02+w()*.015,T),g);y.position.set(Math.cos(S)*r*.45,r*.15,Math.sin(S)*r*.45),y.rotation.y=-S,e.add(y)}const p=[],m=new Z({color:8965375,transparent:!0,opacity:.4});if(w()<.5){const E=2+Math.floor(w()*3);for(let S=0;S<E;S++){const T=w()*6.28,y=r*.25+w()*r*.25,x=new I(new j(.006,3,3),m);x.position.set(Math.cos(T)*y,r*.15+w()*r*.2,Math.sin(T)*y),e.add(x),p.push(x)}}const b=new Z({color:657926,transparent:!0,opacity:.12,side:Ut}),v=new I(new Ao(r*.5,r*1,8),b);v.rotation.x=-Math.PI/2,v.position.y=.005,e.add(v);const M=new K({color:3816e3,roughness:.9}),A=4+Math.floor(w()*3);for(let E=0;E<A;E++){const S=w()*6.28,T=r*.5+w()*r*.6,y=.03+w()*.05,x=new I(new j(y,3,3),M);x.scale.set(1+w()*.5,.4,1+w()*.5),x.position.set(Math.cos(S)*T,y*.15,Math.sin(S)*T),e.add(x)}if(w()<.6){const E=new K({color:3385941,emissive:F.grassTip,emissiveIntensity:.05,roughness:.7,side:Ut});for(let S=0;S<3;S++){const T=w()*6.28,y=new I(new _e(.015,.08+w()*.06),E);y.position.set(Math.cos(T)*r*.3,r*.3,Math.sin(T)*r*.3),y.rotation.y=w()*3,y.rotation.x=-.2-w()*.3,e.add(y)}}return e.position.set(s,0,t),ht.add(e),{group:e,x:s,z:t,colR:r*.8,sparkles:p,sparkleMat:m}}let up=null,fp=null,dp=null,pp=null,xh=[];function lw(){return up}function hw(){return fp}function uw(){return dp}function fw(){return pp}function dw(){return xh}function pw(){const s=new ce,t=new K({color:F.obeliskBlack,roughness:.2,metalness:.8,emissive:F.obeliskPink,emissiveIntensity:0});fp=t;const e=new I(new Mt(1.2,1.8,ve,4),t);e.position.y=ve/2,e.rotation.y=Math.PI/4,e.castShadow=!0,s.add(e);const n=new Z({color:3351108,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const y=T/4*6.28+Math.PI/4,x=new I(new Mt(.03,.04,ve*.9,3),n);x.position.set(Math.cos(y)*1.55,ve*.45,Math.sin(y)*1.55),s.add(x)}const i=new Z({color:F.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const y=T/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const U=6+R*4,D=new I(new Mt(.015,.015,.8,3),i);D.position.set(Math.cos(y)*1.6,U,Math.sin(y)*1.6),D.rotation.z=Math.PI/2,D.rotation.y=-y,D.visible=!1,s.add(D)}const x=new I(new Mt(.012,.012,2.5,3),i);x.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),x.visible=!1,s.add(x)}const o=new K({color:F.obeliskBlack,roughness:.1,metalness:.9,emissive:F.obeliskPink,emissiveIntensity:0});dp=o;const r=new I(new Hn(1.3,3,4),o);r.position.y=ve+1.5,r.rotation.y=Math.PI/4,s.add(r);const a=new Z({color:F.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const y=T/4*6.28+Math.PI/4,x=new I(new Mt(.02,.02,3.2,3),a);x.position.set(Math.cos(y)*.8,ve+1.5,Math.sin(y)*.8),x.rotation.z=.35*(y<3.14?1:-1),x.rotation.y=-y,x.visible=!1,s.add(x)}for(let T=0;T<5;T++){const y=new I(new Se(1.85-T*.02,.04,6,4),new Z({color:2236979}));y.position.y=4+T*5,y.rotation.x=Math.PI/2,s.add(y)}const c=new K({color:1118488,roughness:.3,metalness:.7}),l=new I(new Mt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,s.add(l);const h=new I(new Mt(2.8,3,.4,4),c);h.position.y=.05,h.rotation.y=Math.PI/4,s.add(h);const f=new Z({color:F.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<8;T++){const y=T/8*6.28,x=new I(new j(.06,4,3),f);x.position.set(Math.cos(y)*2.5,ve*.7+T*.5,Math.sin(y)*2.5),x.visible=!1,s.add(x)}const u=new Z({color:1710626,transparent:!0,opacity:.08});for(let T=0;T<6;T++){const y=w()*6.28,x=2+w()*ve*.7,R=new I(new Mt(.008,.008,.5+w()*.5,3),u);R.position.set(Math.cos(y)*1.6,x,Math.sin(y)*1.6),R.rotation.z=(w()-.5)*.8,R.rotation.y=-y,s.add(R)}const d=new K({color:921108,roughness:.5,metalness:.4});for(let T=0;T<12;T++){const y=w()*6.28,x=3+w()*2,R=.15+w()*.25,U=new I(new j(R,4,3),d);U.scale.set(1+w()*.5,.3+w()*.3,1+w()*.5),U.position.set(Math.cos(y)*x,R*.15,Math.sin(y)*x),U.rotation.set(w(),w(),w()),s.add(U)}const g=new Z({color:F.obeliskPink,transparent:!0,opacity:0});for(let T=0;T<4;T++){const y=T/4*6.28+Math.PI/4;for(let x=0;x<5;x++){const R=5+x*3.5+w()*.5,U=(w()-.5)*.4,D=new I(new j(.04,4,3),g);D.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*U,R,Math.sin(y)*1.58+Math.sin(y+1.57)*U),D.visible=!1,s.add(D)}}const _=new Z({color:F.obeliskPink,transparent:!0,opacity:.8,blending:pe,depthWrite:!1}),p=new I(new j(.5,12,8),_);p.position.y=ve+3,s.add(p);const m=new Z({color:F.obeliskPink,transparent:!0,opacity:.2,blending:pe,depthWrite:!1}),b=new I(new j(.9,8,6),m);b.position.y=ve+3,s.add(b),pp={mesh:p,haze:b,mat:_,hazeMat:m},xh=[];const v=[.8,1.1,1.4,1.8],M=[11158783,10040302,12277247,8921821];for(let T=0;T<4;T++){const y=new Z({color:M[T],transparent:!0,opacity:.4,blending:pe,depthWrite:!1,side:Ut}),x=new I(new Se(v[T],.02,6,24),y);x.position.y=ve+3,x.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),s.add(x),xh.push({mesh:x,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new Z({color:0,transparent:!0,opacity:.15,side:Ut}),E=new I(new We(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,s.add(E),s.position.set(0,-ve,0),ht.add(s),up=s;const S=new Is(8939212,0,30);s.add(S),S.position.set(0,ve+1,0)}let mp=null,gp=null;function mw(){return mp}function gw(){return gp}function xw(){const s=new K({color:F.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});gp=s;const t=new Jl;t.absarc(0,0,6,0,6.28,!1);const e=new Ua;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Na(t,24),i=new I(n,s);i.rotation.x=-Math.PI/2,i.position.y=.05,i.visible=!1,ht.add(i),mp=i;const o=new Z({color:4491468,transparent:!0,opacity:0});for(let d=0;d<12;d++){const g=d/12*6.28+w()*.3,_=3.5+w()*2,p=new I(new j(.04+w()*.04,4,3),o);p.scale.set(1.2,.4,1.2),p.position.set(Math.cos(g)*_,.02,Math.sin(g)*_),p.visible=!1,ht.add(p)}const r=new Z({color:13426158,transparent:!0,opacity:0,side:Ut});for(let d=0;d<6;d++){const g=d/6*6.28+w()*.5,_=new I(new We(.12+w()*.1,5),r);_.rotation.x=-Math.PI/2,_.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),_.visible=!1,ht.add(_)}const a=new Z({color:8960989,transparent:!0,opacity:0});for(let d=0;d<8;d++){const g=d/8*6.28,_=4+w()*1.5,p=new I(new Mt(.003,.003,.4,3),a);p.position.set(Math.cos(g)*_,.055,Math.sin(g)*_),p.rotation.x=Math.PI/2,p.rotation.z=g+Math.PI/2,p.visible=!1,ht.add(p)}const c=new Z({color:264208,transparent:!0,opacity:0,side:Ut}),l=new Jl;l.absarc(0,0,5.2,0,6.28,!1);const h=new Ua;h.absarc(0,0,3.8,0,6.28,!0),l.holes.push(h);const f=new Na(l,16),u=new I(f,c);u.rotation.x=-Math.PI/2,u.position.y=.04,u.visible=!1,ht.add(u)}const gr=[];function Hf(s,t,e,n,i){const o=[],r=[],a=[];for(let l=0;l<e;l++){const h=s[l],f=s[l+1],u=f.x-h.x;f.y-h.y;const d=f.z-h.z,g=Math.sqrt(u*u+d*d)||1,_=-d/g,p=u/g,m=(l+.5)/e,b=.7+Math.sin(m*Math.PI)*.5,v=t*b/2,M=[h.x+_*v,h.y,h.z+p*v],A=[h.x-_*v,h.y,h.z-p*v],E=[f.x+_*v,f.y,f.z+p*v],S=[f.x-_*v,f.y,f.z-p*v];o.push(...M,...E,...A,...A,...E,...S);const T=l/e,y=(l+1)/e;if(a.push(T,0,y,0,T,1,T,1,y,0,y,1),i){const U=.85+Math.sin(m*Math.PI*3)*.15,D=1.2*U,z=.6*U;r.push(i.r*D,i.g*D,i.b*D),r.push(i.r*D,i.g*D,i.b*D),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*z,i.g*z,i.b*z),r.push(i.r*D,i.g*D,i.b*D),r.push(i.r*z,i.g*z,i.b*z)}}const c=new be;return c.setAttribute("position",new Gt(o,3)),c.setAttribute("uv",new Gt(a,2)),r&&c.setAttribute("color",new Gt(r,3)),c.computeVertexNormals(),c}function _w(){for(let c=0;c<6;c++){const l=F.rainbow[c],h=c/6*6.28,f=6+c*.8,u=ve+6+c*2.5,d=1-c*.05,g=[],_=32;for(let H=0;H<=_;H++){const V=H/_,$=h+V*Math.PI,W=Math.cos($)*f,lt=Math.sin($)*f,ft=Math.sin(V*Math.PI)*u;g.push(new N(W,ft,lt))}const p=new ot(l),m=Hf(g,d,_,!0,p),b=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Ut,depthWrite:!1,blending:pe}),v=new I(m,b);v.visible=!1,ht.add(v);const M=new vr(g),A=new Z({color:16777215,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),E=new yn(M,_,.03,4,!1),S=new I(E,A);S.visible=!1,ht.add(S);const T=[],y=new Z({color:16777215,transparent:!0,opacity:0,blending:pe,depthWrite:!1});for(let H=0;H<8;H++){const V=new I(new j(.06,4,3),y.clone());V.visible=!1,ht.add(V),T.push({mesh:V,mat:V.material,phase:H/8,speed:.15+Math.random()*.1})}const x=new Z({color:l,transparent:!0,opacity:0,side:Ut,blending:pe}),R=g[0],U=g[g.length-1],D=new I(new We(1.2,8),x);D.rotation.x=-Math.PI/2,D.position.set(R.x,.03,R.z),D.visible=!1,ht.add(D);const z=new I(new We(1.2,8),x.clone());z.rotation.x=-Math.PI/2,z.position.set(U.x,.03,U.z),z.visible=!1,ht.add(z),gr.push({mesh:v,mat:b,coreLine:S,coreMat:A,curve:M,sparkles:T,pools:[D,z],poolMat:x,targetOpacity:0})}const s=[],t=10,e=ve+14,n=32;for(let c=0;c<=n;c++){const l=c/n,h=l*Math.PI;s.push(new N(Math.cos(h)*t,Math.sin(l*Math.PI)*e,Math.sin(h)*t))}const i=new ot(15654399),o=Hf(s,1.5,n,!0,i),r=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Ut,depthWrite:!1,blending:pe}),a=new I(o,r);a.visible=!1,ht.add(a),gr.push({mesh:a,mat:r,targetOpacity:0})}function Mw(s){for(let t=0;t<gr.length;t++){const e=gr[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const i=e.sparkles[n];i.phase+=i.speed*.016,i.phase>1&&(i.phase-=1);const o=e.curve.getPoint(i.phase);i.mesh.position.copy(o),i.mesh.visible=e.mesh.visible;const r=Math.sin(s*8+n*2.1)*.5+.5;i.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let mn=null;const ti=[],sn=new ge,rr=new ot;function vw(s){const t=new Z({color:16777215,transparent:!0,opacity:1});mn=new Ps(bn.fly,t,s),mn.instanceMatrix.setUsage(Le),mn.instanceColor=new Ii(new Float32Array(s*3),3),mn.instanceColor.setUsage(Le),sn.scale.setScalar(0),sn.updateMatrix();for(let e=0;e<s;e++){mn.setMatrixAt(e,sn.matrix);const n=e%3===0?F.fireflyB:F.firefly;rr.setHex(n),mn.setColorAt(e,rr),ti.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}mn.count=s,ht.add(mn)}function va(s,t,e,n){let i=null;for(let o=0;o<ti.length;o++)if(!ti[o].active){i=ti[o];break}if(!i){let o=1/0;for(let r=0;r<ti.length;r++)ti[r].life<o&&(o=ti[r].life,i=ti[r])}i.x=s,i.y=t+.5+Math.random()*3,i.z=e,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=n,i.max=n,i.active=!0,i.wander=Math.random()*6.28}function xp(s,t){let e=0,n=!1;for(let i=0;i<ti.length;i++){const o=ti[i];if(!o.active){sn.position.set(0,-100,0),sn.scale.setScalar(0),sn.updateMatrix(),mn.setMatrixAt(i,sn.matrix);continue}if(o.life-=s,o.life<=0){o.active=!1,sn.position.set(0,-100,0),sn.scale.setScalar(0),sn.updateMatrix(),mn.setMatrixAt(i,sn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*s,o.vx+=Math.cos(o.wander)*1.5*s,o.vz+=Math.sin(o.wander)*1.5*s,o.vy+=Math.sin(t*2+o.phase)*s,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*s,o.y+=o.vy*s,o.z+=o.vz*s;const r=$t(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*s);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),h=.6+a*.6;sn.position.set(o.x,o.y,o.z),sn.scale.setScalar(h),sn.updateMatrix(),mn.setMatrixAt(i,sn.matrix),rr.setHex(o.colorHex),rr.multiplyScalar(l),mn.setColorAt(i,rr),n=!0}return mn.instanceMatrix.needsUpdate=!0,n&&(mn.instanceColor.needsUpdate=!0),e}let gn=null;const ei=[],on=new ge,Ha=new ot,yw=new ot(F.spore);function ww(s){const t=new Z({color:16777215,transparent:!0,opacity:1});gn=new Ps(bn.spore,t,s),gn.instanceMatrix.setUsage(Le),gn.instanceColor=new Ii(new Float32Array(s*3),3),gn.instanceColor.setUsage(Le),on.scale.setScalar(0),on.updateMatrix();for(let e=0;e<s;e++)gn.setMatrixAt(e,on.matrix),Ha.setHex(F.spore),gn.setColorAt(e,Ha),ei.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});gn.count=s,ht.add(gn)}function Sw(s,t,e){let n=null;for(let i=0;i<ei.length;i++)if(!ei[i].active){n=ei[i];break}if(!n){let i=1/0;for(let o=0;o<ei.length;o++)ei[o].life<i&&(i=ei[o].life,n=ei[o])}n.x=s,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let _p=0,Mp=0;function bw(s,t){_p=s,Mp=t}function Tw(s){let t=0,e=!1;for(let n=0;n<ei.length;n++){const i=ei[n];if(!i.active){on.position.set(0,-100,0),on.scale.setScalar(0),on.updateMatrix(),gn.setMatrixAt(n,on.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,on.position.set(0,-100,0),on.scale.setScalar(0),on.updateMatrix(),gn.setMatrixAt(n,on.matrix);continue}t++,i.vy+=.3*s,i.vx+=_p*.3*s,i.vz+=Mp*.3*s,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const o=i.life/i.max*.7;on.position.set(i.x,i.y,i.z),on.scale.setScalar(1),on.updateMatrix(),gn.setMatrixAt(n,on.matrix),Ha.copy(yw).multiplyScalar(o),gn.setColorAt(n,Ha),e=!0}return gn.instanceMatrix.needsUpdate=!0,e&&(gn.instanceColor.needsUpdate=!0),t}let xn=null;const go=[];let $c=0;const rn=new ge,Va=new ot,vp=new ot(F.starMote);function Ew(s){const t=new Z({color:16777215,transparent:!0,opacity:1});xn=new Ps(bn.starMote,t,s),xn.instanceMatrix.setUsage(Le),xn.instanceColor=new Ii(new Float32Array(s*3),3),xn.instanceColor.setUsage(Le),rn.scale.setScalar(0),rn.updateMatrix();for(let e=0;e<s;e++)xn.setMatrixAt(e,rn.matrix),Va.copy(vp),xn.setColorAt(e,Va),go.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});xn.count=s,ht.add(xn)}function Aw(s){let t=null;for(let e=0;e<go.length;e++)if(!go[e].active){t=go[e];break}t&&(t.x=s.x+(Math.random()-.5)*60,t.z=s.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function yp(s,t,e){$c+=s,$c>.15&&($c=0,Aw(e));let n=!1;for(let i=0;i<go.length;i++){const o=go[i];if(!o.active){rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),xn.setMatrixAt(i,rn.matrix);continue}if(o.life-=s,o.life<=0||o.y<.5){o.active=!1,rn.position.set(0,-100,0),rn.scale.setScalar(0),rn.updateMatrix(),xn.setMatrixAt(i,rn.matrix);continue}o.y+=o.vy*s,o.drift+=(Math.random()-.5)*.5*s,o.x+=Math.sin(o.drift)*.1*s,o.z+=Math.cos(o.drift)*.08*s;const r=o.life/o.max,a=Math.sin(t*4+i)*.3+.7,c=r*a*.7,l=.5+a*.5;rn.position.set(o.x,o.y,o.z),rn.scale.setScalar(l),rn.updateMatrix(),xn.setMatrixAt(i,rn.matrix),Va.copy(vp).multiplyScalar(c),xn.setColorAt(i,Va),n=!0}xn.instanceMatrix.needsUpdate=!0,n&&(xn.instanceColor.needsUpdate=!0)}let _n=null;const xo=[],an=new ge,Wa=new ot,wp=new ot(8956535);function Rw(s){const t=new Z({color:16777215,transparent:!0,opacity:1});_n=new Ps(bn.dustMote,t,s),_n.instanceMatrix.setUsage(Le),_n.instanceColor=new Ii(new Float32Array(s*3),3),_n.instanceColor.setUsage(Le),an.scale.setScalar(0),an.updateMatrix();for(let e=0;e<s;e++)_n.setMatrixAt(e,an.matrix),Wa.copy(wp),_n.setColorAt(e,Wa),xo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});_n.count=s,ht.add(_n)}function Vf(s,t,e){for(let n=0;n<e;n++){let i=null;for(let a=0;a<xo.length;a++)if(!xo[a].active){i=xo[a];break}if(!i)continue;const o=Math.random()*6.28,r=1+Math.random()*2;i.x=s+Math.cos(o)*.2,i.y=$t(s,t)+.1,i.z=t+Math.sin(o)*.2,i.vx=Math.cos(o)*r,i.vy=.5+Math.random()*1.5,i.vz=Math.sin(o)*r,i.life=.6+Math.random()*.6,i.max=i.life,i.active=!0}}function Cw(s){let t=!1;for(let e=0;e<xo.length;e++){const n=xo[e];if(!n.active){an.position.set(0,-100,0),an.scale.setScalar(0),an.updateMatrix(),_n.setMatrixAt(e,an.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,an.position.set(0,-100,0),an.scale.setScalar(0),an.updateMatrix(),_n.setMatrixAt(e,an.matrix);continue}n.vy-=3*s,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=$t(n.x,n.z)+.05;n.y<i&&(n.y=i,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;an.position.set(n.x,n.y,n.z),an.scale.setScalar(1),an.updateMatrix(),_n.setMatrixAt(e,an.matrix),Wa.copy(wp).multiplyScalar(o),_n.setColorAt(e,Wa),t=!0}_n.instanceMatrix.needsUpdate=!0,t&&(_n.instanceColor.needsUpdate=!0)}let Mn=null;const _o=[],cn=new ge,Xa=new ot,Sp=new ot(F.bubblePop),Pw=new j(.02,3,3);function Iw(s){const t=new Z({color:16777215,transparent:!0,opacity:1});Mn=new Ps(Pw,t,s),Mn.instanceMatrix.setUsage(Le),Mn.instanceColor=new Ii(new Float32Array(s*3),3),Mn.instanceColor.setUsage(Le),cn.scale.setScalar(0),cn.updateMatrix();for(let e=0;e<s;e++)Mn.setMatrixAt(e,cn.matrix),Xa.copy(Sp),Mn.setColorAt(e,Xa),_o.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Mn.count=s,ht.add(Mn)}function Lw(s,t,e,n){for(let i=0;i<n;i++){let o=null;for(let l=0;l<_o.length;l++)if(!_o[l].active){o=_o[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=s,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function Dw(s){let t=!1;for(let e=0;e<_o.length;e++){const n=_o[e];if(!n.active){cn.position.set(0,-100,0),cn.scale.setScalar(0),cn.updateMatrix(),Mn.setMatrixAt(e,cn.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,cn.position.set(0,-100,0),cn.scale.setScalar(0),cn.updateMatrix(),Mn.setMatrixAt(e,cn.matrix);continue}n.vy-=2*s,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=n.life/n.max*.8;cn.position.set(n.x,n.y,n.z),cn.scale.setScalar(1),cn.updateMatrix(),Mn.setMatrixAt(e,cn.matrix),Xa.copy(Sp).multiplyScalar(i),Mn.setColorAt(e,Xa),t=!0}Mn.instanceMatrix.needsUpdate=!0,t&&(Mn.instanceColor.needsUpdate=!0)}let vn=null;const Mo=[],je=new ge,Ya=new ot,bp=[new ot(F.leafGlow),new ot(3394662),new ot(2271880),new ot(5636044),new ot(4513262)];let Tp=0,Ep=0;function Uw(s,t,e){Tp=s,Ep=t}function Nw(s){const t=new _e(.12,.08),e=new Z({color:16777215,transparent:!0,opacity:1,side:Ut,depthWrite:!1,blending:pe});vn=new Ps(t,e,s),vn.instanceMatrix.setUsage(Le),vn.instanceColor=new Ii(new Float32Array(s*3),3),vn.instanceColor.setUsage(Le),je.scale.setScalar(0),je.updateMatrix();for(let n=0;n<s;n++)vn.setMatrixAt(n,je.matrix),Ya.setHex(0),vn.setColorAt(n,Ya),Mo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});vn.count=s,ht.add(vn)}function zw(s,t,e){let n=null;for(let o=0;o<Mo.length;o++)if(!Mo[o].active){n=Mo[o];break}if(!n)return;n.x=s+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const i=Math.random()*6.28;n.vx=Math.cos(i)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(i)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*bp.length)}function Fw(s,t){let e=!1;for(let n=0;n<Mo.length;n++){const i=Mo[n];if(!i.active){je.position.set(0,-100,0),je.scale.setScalar(0),je.updateMatrix(),vn.setMatrixAt(n,je.matrix);continue}if(i.life-=s,i.life<=0||i.y<-.5){i.active=!1,je.position.set(0,-100,0),je.scale.setScalar(0),je.updateMatrix(),vn.setMatrixAt(n,je.matrix);continue}i.vx+=Tp*.4*s,i.vz+=Ep*.4*s,i.vx+=Math.sin(t*3+n*1.7)*.5*s,i.vz+=Math.cos(t*2.5+n*2.1)*.3*s,i.vy-=.3*s,i.vx*=.995,i.vy=Math.max(i.vy,-.8),i.vz*=.995,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s,i.rx+=i.rvx*s,i.ry+=i.rvy*s,i.rz+=i.rvz*s;const o=i.life/i.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;je.position.set(i.x,i.y,i.z),je.rotation.set(i.rx,i.ry,i.rz),je.scale.setScalar(a),je.updateMatrix(),vn.setMatrixAt(n,je.matrix),Ya.copy(bp[i.colorIdx]).multiplyScalar(r),vn.setColorAt(n,Ya),e=!0}vn.instanceMatrix.needsUpdate=!0,e&&(vn.instanceColor.needsUpdate=!0)}const ai=[],eo=[];let Wf=ve+2,Hi=1;function Xf(s){Hi=s}function Ap(s,t,e,n){const i=[];for(let r=0;r<=12;r++){const a=r/12,c=s*(1-a*a),l=t*(1-a*a),h=e+(n-e)*a;i.push(new N(c,h,l))}return{curve:new vr(i),pts:i}}function Ow(s,t,e,n){const i=n||ve+2,o=e+15,r=new jh(new N(s,e,t),new N(s,o,t)),a=new Z({color:F.laserPink,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),c=new I(new yn(r,1,.06,6,!1),a);ht.add(c);const l=new Z({color:F.laserGlow,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),h=new I(new yn(r,1,.2,6,!1),l);ht.add(h);const{curve:f}=Ap(s,t,o,i),u=new Z({color:F.laserPink,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),d=new I(new yn(f,16,.05,6,!1),u);ht.add(d);const g=new Z({color:F.laserGlow,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),_=new I(new yn(f,16,.18,6,!1),g);ht.add(_);const p={upTube:c,upGlow:h,bendTube:d,bendGlow:_,mat:a,glowMat:l,bendMat:u,bendGlowMat:g,fromX:s,fromZ:t,floatY:e,skyY:o,tipY:i,animPhase:0,animTimer:0};ai.push(p);for(let m=0;m<ai.length-1;m++){const b=ai[m],v=(p.skyY+b.skyY)/2,M=[];for(let x=0;x<=8;x++){const R=x/8,U=p.fromX*(1-R)+b.fromX*R,D=p.fromZ*(1-R)+b.fromZ*R,z=v+Math.sin(R*Math.PI)*3;M.push(new N(U,z,D))}const A=new vr(M),E=new Z({color:F.laserGlow,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),S=new I(new yn(A,10,.03,4,!1),E);ht.add(S);const T=new Z({color:F.laserPink,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),y=new I(new yn(A,10,.1,4,!1),T);ht.add(y),eo.push({tube:S,glow:y,mat:E,glowMat:T,opacity:0})}return p}function Bw(s){for(let t=0;t<ai.length;t++){const e=ai[t];e.tipY=s;const{curve:n}=Ap(e.fromX,e.fromZ,e.skyY,s);ht.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new yn(n,16,.05,6,!1),ht.add(e.bendTube),ht.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new yn(n,16,.18,6,!1),ht.add(e.bendGlow)}}function kw(s,t,e){const n=e||ve+2;Math.abs(n-Wf)>.1&&ai.length>0&&(Bw(n),Wf=n);for(let i=0;i<ai.length;i++){const o=ai[i];if(o.animTimer+=s,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+i*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let i=0;i<eo.length;i++){const o=eo[i];o.opacity=Math.min(o.opacity+s*.5,.3);const r=Math.sin(t*2+i*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(Hi<1){for(let i=0;i<ai.length;i++){const o=ai[i];o.mat.opacity*=Hi,o.glowMat.opacity*=Hi,o.bendMat.opacity*=Hi,o.bendGlowMat.opacity*=Hi}for(let i=0;i<eo.length;i++)eo[i].mat.opacity*=Hi,eo[i].glowMat.opacity*=Hi}}const Gw=new ot(F.orbGold),Hw=new ot(16777215);let js=0,Ve="SEEK",Vi=-ve,$e=0,jo=[],On=null,hs=null,us=null,Oe=null,fs=[],yi=null,_h=null,Bn=[],Ko=null,Rp=null,Cp=null,Mh=[],vh=[],yh=[],wh=[],qi=[],no=null,Yf=0,Fn=0,Ks=[],ro=null,qf=!1;const ao=200;let Gn=null;const hu=[];let Pp=!1;function Vw(){if(Gn)return;const s=new be,t=new Float32Array(ao*3),e=new Float32Array(ao*3),n=new Float32Array(ao);s.setAttribute("position",new Xe(t,3)),s.setAttribute("color",new Xe(e,3)),s.setAttribute("size",new Xe(n,1)),s.attributes.position.setUsage(Le),s.attributes.color.setUsage(Le),s.attributes.size.setUsage(Le);const i=new Yh({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:pe,depthWrite:!1,sizeAttenuation:!0});Gn=new Pd(s,i),Gn.visible=!1,ht.add(Gn);const o=new ot(F.obeliskPink),r=new ot(11158783);for(let a=0;a<ao;a++){const c=Math.random()<.7?o:r;e[a*3]=c.r*(.8+Math.random()*.4),e[a*3+1]=c.g*(.8+Math.random()*.4),e[a*3+2]=c.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,hu.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}s.attributes.color.needsUpdate=!0,s.attributes.size.needsUpdate=!0}function Ww(s,t,e){Pp=!0,Gn.visible=!0;for(let n=0;n<ao;n++){const i=hu[n];i.x=s,i.y=t,i.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;i.vx=Math.sin(r)*Math.cos(o)*a,i.vy=Math.cos(r)*a*.5+Math.random()*2,i.vz=Math.sin(r)*Math.sin(o)*a,i.life=5+Math.random()*6,i.active=!0}}function Xw(s,t){if(!Gn||!Gn.visible)return;const e=Gn.geometry.attributes.position.array,n=Gn.geometry.attributes.size.array;let i=!1;for(let o=0;o<ao;o++){const r=hu[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(i=!0,r.life-=s,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*s,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*s,r.vz+=Math.cos(t*2.5+o*1.1)*.2*s,r.x+=r.vx*s,r.y+=r.vy*s,r.z+=r.vz*s,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,c=Math.min(r.life/2,1);n[o]=(.15+a*.2)*c}Gn.geometry.attributes.position.needsUpdate=!0,Gn.geometry.attributes.size.needsUpdate=!0,i||(Gn.visible=!1)}function Yw(s){jo=s.orbs,On=s.obeliskGroup,hs=s.obeliskMat,us=s.obeliskGlowMat,Oe=s.pinnacleOrb,fs=s.pinnacleRings||[],yi=s.moatMesh,_h=s.moatMat,Bn=s.rainbowArcs,Ko=s.player,Rp=s.makeLaser,Cp=s.orbHudEl,Mh=s.deers||[],vh=s.puffs||[],yh=s.jellies||[],wh=s.moths||[],qi=s.trees||[],no=s.groundMesh||null,Vw()}function qw(s,t){let e=null,n=1/0;for(let c=0;c<jo.length;c++){const l=jo[c];if(l.found)continue;const h=l.x-Ko.pos.x,f=l.z-Ko.pos.z,u=h*h+f*f;u<n&&(n=u,e=l)}if(e&&n<$s*$s){const c=Math.sin(t*2+e.phase)*.5+.5;$o.position.set(e.x,1,e.z),$o.intensity=1+c*2,$o.distance=$s}else $o.intensity=0;for(let c=0;c<jo.length;c++){const l=jo[c];if(!(l.found&&!l.flyUp&&!l._flashing)){if(!l.found){const h=Math.sin(t*1.5+l.phase)*.5+.5;l.group.position.y=l.flyY+Math.sin(t*.8+l.phase)*.3,l.glowMat.opacity=.3+h*.4,l.hazeMat.opacity=.08+h*.12;const f=l.x-Ko.pos.x,u=l.z-Ko.pos.z,d=f*f+u*u,g=$s*$s;if(d<g){const _=1-Math.sqrt(d)/$s,p=_*_;l.glowMat.opacity=Math.min(.3+h*.4+p*.5,1),l.hazeMat.opacity=Math.min(.08+h*.12+p*.25,.6),l.coreMat.color.copy(Hw).lerp(Gw,1-p);const m=1+p*.3;l.group.scale.setScalar(m)}else l.group.scale.setScalar(1);for(let _=3;_<l.group.children.length;_++){const p=l.group.children[_],m=(_-3)/6*6.28+t*1.5;p.position.x=Math.cos(m)*.4,p.position.z=Math.sin(m)*.4,p.position.y=Math.sin(m*2+t)*.1}if(d<Df*Df){l.found=!0,l._flashing=!0,l._flashTimer=0,l.flyY=l.group.position.y,js++;const _=Cp||document.getElementById("orb-hud");_&&(_.innerHTML="✦ "+js+" / "+to),Ve==="SEEK"&&(Ve="RISING")}}if(l._flashing){l._flashTimer+=s;const h=Math.min(l._flashTimer/1.5,1),f=h<.3?h/.3:1-(h-.3)/.7;l.glowMat.opacity=.5+f*.5,l.hazeMat.opacity=.3+f*.5,l.group.scale.setScalar(1+f*.6),l.group.position.x=l.x+Math.sin(t*30)*f*.05,l.group.position.z=l.z+Math.cos(t*25)*f*.05,l._flashTimer>1.5&&(l._flashing=!1,l.flyUp=!0,l.group.position.x=l.x,l.group.position.z=l.z)}if(l.flyUp){const h=ve+5;l.flyY+=(h-l.flyY)*s*.8,l.group.position.y=l.flyY;const f=Math.min((l.flyY-1)/(h-1),1);if(l.group.scale.setScalar(1-f*.6),l.glowMat.opacity=.8-f*.5,l.flyY>h-1&&!l.laserLine){l.flyUp=!1,l.group.visible=!1;const u=jc();l.laserLine=Rp(l.x,l.z,0,u)}}}}const i=ve/to,o=-ve+js*i;if(Vi<o-.01?(Vi+=8*s,Vi>o&&(Vi=o),On&&(On.position.y=Vi,On.position.x=Math.sin(t*25)*.04,On.position.z=Math.cos(t*30)*.03)):On&&(On.position.x*=.9,On.position.z*=.9),js>=to&&Vi>=-.01&&Ve==="RISING"&&(Ve="COMPLETE",$e=0),On){On.rotation.y+=s*.03;const c=On.children[On.children.length-1];if(c&&c.isLight){const l=Math.max(0,Math.min(1,(Vi+ve)/ve));c.intensity=l*1.5*(.8+Math.sin(t*1.5)*.2)}}if(Oe&&Oe.mesh.visible){const c=Math.sin(t*2)*.5+.5;Oe.mat.opacity=.6+c*.3,Oe.hazeMat.opacity=.15+c*.12;const l=js/to;Oe.mat.opacity*=.3+l*.7,Oe.hazeMat.opacity*=.2+l*.8}for(let c=0;c<fs.length;c++){const l=fs[c];if(!l.mesh.visible)continue;l.mesh.rotation.x+=l.rx*s,l.mesh.rotation.y+=l.ry*s,l.mesh.rotation.z+=l.rz*s;const h=js/to;l.mat.opacity=(.15+h*.35)*(.8+Math.sin(t*1.5+c)*.2)}const a=jc();if(kw(s,t,a),Ve==="COMPLETE"&&$e>3?Xf(Math.max(0,1-($e-3)/4)):(Ve==="FINALE"||Ve==="TRANSFORM")&&Xf(0),Xw(s,t),Ve==="COMPLETE"){$e+=s;const c=Math.min($e/3,1);if(hs&&(hs.emissiveIntensity=c*1.5),us&&(us.emissiveIntensity=c*2.5),Oe&&Oe.mesh.visible&&$e>1&&$e<3){const l=Math.min(($e-1)/1.5,1);Oe.mat.opacity=.9+l*.1,Oe.hazeMat.opacity=.5+l*.5,Oe.mesh.scale.setScalar(1+l*.5),Oe.haze.scale.setScalar(1+l*1);for(let h=0;h<fs.length;h++){const f=fs[h];f.mesh.rotation.x+=f.rx*s*(1+l*4),f.mesh.rotation.y+=f.ry*s*(1+l*4),f.mesh.rotation.z+=f.rz*s*(1+l*4)}}if(Oe&&Oe.mesh.visible&&$e>=3&&!Pp){const l=new N;Oe.mesh.getWorldPosition(l),Ww(l.x,l.y,l.z),Oe.mesh.visible=!1,Oe.haze.visible=!1;for(let h=0;h<fs.length;h++)fs[h].mesh.visible=!1}if($e>3&&_h){const l=Math.min(($e-3)/4,1);_h.opacity=l*.6,yi&&(yi.visible||(yi.visible=!0),yi.position.y=.05+Math.sin(t*3)*.02*l)}if($e>4)for(let l=0;l<Bn.length;l++){const h=l*.3,f=Math.min(Math.max(($e-4-h)/2,0),1);f>0&&!Bn[l].mesh.visible&&(Bn[l].mesh.visible=!0),Bn[l].mat.opacity=f*.55,Bn[l].mesh.rotation.y+=s*.1*(l+1)*.3}if($e>3){const l=Math.min(($e-3)/6,1)*2;for(let h=0;h<Mh.length;h++){const f=Mh[h],u=f.group,d=-u.position.x,g=-u.position.z,_=Math.sqrt(d*d+g*g);_>8?(f.wanderAng=Math.atan2(-u.position.x,-u.position.z),f.state="walk",f.speed=1.5*l,u.position.x+=d/_*f.speed*s,u.position.z+=g/_*f.speed*s,u.rotation.y=f.wanderAng):f.state="pause"}for(let h=0;h<vh.length;h++){const f=vh[h],u=f.group,d=-u.position.x,g=-u.position.z,_=Math.sqrt(d*d+g*g);_>8&&(f.wanderAng=Math.atan2(-u.position.x,-u.position.z),f.state="hop",f.hopTimer=f.hopTimer%1.2,u.position.x+=d/_*1.5*l*s,u.position.z+=g/_*1.5*l*s)}for(let h=0;h<yh.length;h++){const f=yh[h],u=f.group;u.position.x+=(0-u.position.x)*s*.15*l,u.position.z+=(0-u.position.z)*s*.15*l}for(let h=0;h<wh.length;h++){const f=wh[h];f.centerX+=(0-f.centerX)*s*.2*l,f.centerZ+=(0-f.centerZ)*s*.2*l,f.orbitR=Math.max(f.orbitR-s*.3*l,2)}}$e>12&&(Ve="FINALE",console.log("✦ Quest → FINALE"))}if(Ve==="FINALE"){Yf+=s,hs&&(hs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),us&&(us.emissiveIntensity=2.5+Math.sin(t*.7)*.5),yi&&(yi.position.y=.05+Math.sin(t*3)*.02);for(let c=0;c<Bn.length;c++)Bn[c].mesh.rotation.y+=s*.1*(c+1)*.3,Bn[c].mat.opacity=.45+Math.sin(t+c)*.1;Yf>30&&(Ve="TRANSFORM",Fn=0,Zw(),console.log("✦ Quest → TRANSFORM (trees="+qi.length+")"))}if(Ve==="TRANSFORM"){Fn+=s,hs&&(hs.emissiveIntensity=1.5+Math.sin(t*.5)*.3),us&&(us.emissiveIntensity=2.5+Math.sin(t*.7)*.5),yi&&(yi.position.y=.05+Math.sin(t*3)*.02);for(let l=0;l<Bn.length;l++)Bn[l].mesh.rotation.y+=s*.1*(l+1)*.3,Bn[l].mat.opacity=.45+Math.sin(t+l)*.1;if(Fn<3&&Ks.length<qi.length){const l=Math.min(Math.floor(Fn/3*qi.length),qi.length);for(;Ks.length<l;){const h=Ks.length,f=qi[h],u=jc(),d=new jh(new N(0,u,0),new N(f.x,0,f.z)),g=new Z({color:F.laserPink,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),_=new I(new yn(d,8,.06,4,!1),g);ht.add(_);const p=new Z({color:F.laserGlow,transparent:!0,opacity:0,blending:pe,depthWrite:!1}),m=new I(new yn(d,8,.18,4,!1),p);ht.add(m),Ks.push({tube:_,glow:m,mat:g,glowMat:p,timer:0})}}for(let l=0;l<Ks.length;l++){const h=Ks[l];h.timer+=s;const f=Math.min(h.timer/.5,1),u=Math.sin(t*3+l*.5)*.5+.5;h.mat.opacity=f*(.6+u*.4),h.glowMat.opacity=f*(.2+u*.15)}let c=0;Fn>=3&&Fn<6?c=(Fn-3)/3:Fn>=6&&Fn<10?(c=1,qf||($w(),qf=!0,console.log("✦ Trees + ground transformed"))):Fn>=10&&Fn<13&&(c=1-(Fn-10)/3),ro&&(ro.style.opacity=c)}}function jc(){return Vi+ve+3}function Zw(){ro||(ro=document.createElement("div"),ro.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(ro))}function $w(){const s=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}],t=new ot(667712),e=new ot(534584);for(let n=0;n<qi.length;n++){const i=qi[n].group,o=s[n%s.length],r=new Set;i.traverse(a=>{if(!a.isMesh||!a.material)return;const c=a.material;if(r.has(c))return;r.add(c);const l={};c.color.getHSL(l),l.h>=.2&&l.h<=.6&&l.s>.08?(l.l>.45?c.color.set(o.core):c.transparent&&c.opacity<.15?c.color.set(o.glow):c.color.set(o.color),c.emissive&&c.emissive.set(o.glow)):l.h<.2&&l.s>.05&&l.l>.05&&l.l<.4?(c.color.copy(t),c.emissive&&c.emissive.copy(e)):l.l<.06&&c.color.set(657432)})}if(no&&no.material){no.material.emissive.set(2099264),no.material.emissiveIntensity=.3;const n=no.geometry.attributes.color;if(n){const i=n.array;for(let o=0;o<i.length;o+=3){const r=i[o],a=i[o+1],c=i[o+2];i[o]=r*.5+c*.3,i[o+1]=a*.15,i[o+2]=c*.7+a*.4}n.needsUpdate=!0}}}const jw=600;let oa=.25,we=1,Zf=.85,Ue="NIGHT",Jo=null,Qo=null,Sh=null,tr=null,ya=null;const $f=[{label:"DUSK",sky:new ot(923685),fog:new ot(791584),fogDensity:.009,moonInt:.6,moonCol:new ot(14527112),moonElev:15,ambSky:new ot(4469589),ambGnd:new ot(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new ot(330264),fog:new ot(528408),fogDensity:.01,moonInt:1,moonCol:new ot(12307694),moonElev:55,ambSky:new ot(3359846),ambGnd:new ot(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new ot(198160),fog:new ot(397332),fogDensity:.012,moonInt:.55,moonCol:new ot(8952251),moonElev:75,ambSky:new ot(1712708),ambGnd:new ot(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new ot(1187888),fog:new ot(923688),fogDensity:.011,moonInt:.5,moonCol:new ot(13417386),moonElev:20,ambSky:new ot(3354197),ambGnd:new ot(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],ki=new ot,jf=new ot;function Kw(s){Jo=s.scene,Qo=s.moon,Sh=s.moon2,tr=s.hemiLight,ya=s.playerLight}function Jw(s){if(!Jo)return;oa=(oa+s/jw)%1;const t=oa*4,e=Math.floor(t)%4,n=(e+1)%4,i=t-Math.floor(t),o=.5-.5*Math.cos(i*Math.PI),r=$f[e],a=$f[n];Ue=o<.5?r.label:a.label;const c=(l,h)=>l+(h-l)*o;if(ki.copy(r.sky).lerp(a.sky,o),Jo.background.copy(ki),ki.copy(r.fog).lerp(a.fog,o),Jo.fog.color.copy(ki),Jo.fog.density=c(r.fogDensity,a.fogDensity),Qo){ki.copy(r.moonCol).lerp(a.moonCol,o),Qo.color.copy(ki),Qo.intensity=c(r.moonInt,a.moonInt);const l=oa*Math.PI*2,h=c(r.moonElev,a.moonElev)*Math.PI/180,f=60;Qo.position.set(Math.cos(l)*Math.cos(h)*f,Math.sin(h)*f,Math.sin(l)*Math.cos(h)*f)}if(Sh){const l=c(r.moonInt,a.moonInt)/.85;Sh.intensity=.3*l}tr&&(ki.copy(r.ambSky).lerp(a.ambSky,o),jf.copy(r.ambGnd).lerp(a.ambGnd,o),tr.color.copy(ki),tr.groundColor.copy(jf),tr.intensity=c(r.ambInt,a.ambInt)),ya&&(ya.distance=c(r.plRange,a.plRange),ya.intensity=c(r.plInt,a.plInt)),Zf=c(r.stars,a.stars),Iy(Zf),we=c(r.bio,a.bio)}let _s=0,co=0,Ci=0,ar="CLEAR",Li=!1,si=0;const wa={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},Qw={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let io="CLEAR",Js=null,Sa=0,ra=0,Kc=0,aa=!1,ca=0,Jc=Math.random()*Math.PI*2,Qc=0,tl=0;const bh=[],t1=8;let Kf=!1,el=0,la=1,ba=0,ha=0,nl=0;function e1(){const s=Qw[io],t=Object.entries(s);let e=0;for(const[,i]of t)e+=i;let n=Math.random()*e;for(const[i,o]of t)if(n-=o,n<=0)return i;return t[0][0]}function n1(){if(Kf)return;const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new qh(s),i=new _e(40,14);for(let o=0;o<t1;o++){const r=new Z({map:n,color:5596791,transparent:!0,opacity:0,side:Ut,depthWrite:!1}),a=new I(i,r);a.visible=!1,ht.add(a),bh.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}Kf=!0}function i1(){n1();const s=wa.CLEAR.duration;Sa=s[0]+Math.random()*(s[1]-s[0])}function s1(s,t,e){if(aa)if(ra-=s,ra<=0){io=Js,Js=null,aa=!1;const o=wa[io].duration;Sa=o[0]+Math.random()*(o[1]-o[0]),ca=0}else ca=1-ra/Kc;else Sa-=s,Sa<=0&&(Js=e1(),aa=!0,Kc=30+Math.random()*60,ra=Kc,ca=0);const n=wa[io];if(aa&&Js){const o=wa[Js],r=.5-.5*Math.cos(ca*Math.PI),a=(c,l)=>c+(l-c)*r;la=a(n.fogMult,o.fogMult),ba=a(n.rainRate,o.rainRate),ha=a(n.skyDarken,o.skyDarken),nl=a(n.mistCount,o.mistCount),Ci=a(n.windBase,o.windBase),ar=r<.5?io:Js}else la=n.fogMult,ba=n.rainRate,ha=n.skyDarken,nl=n.mistCount,Ci=n.windBase,ar=io;Li=ar==="LUMINOUS_STORM",Jc+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*s,Qc-=s,Qc<=0&&(Qc=2+Math.random()*6,tl=Math.random()*.8),tl*=Math.pow(.3,s);const i=Ci+tl;if(_s=Math.cos(Jc)*i,co=Math.sin(Jc)*i,ht.fog.density*=la,ha>.001){const o=ht.background,r=1-ha;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(nl);for(let r=0;r<bh.length;r++){const a=bh[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=_s*s*.02;const h=.03+la*.012;a.mat.opacity+=(h-a.mat.opacity)*s*2}else a.active&&(a.mat.opacity-=s*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Li&&(el-=s,el<=0&&(el=1+Math.random()*4,si=1)),si*=Math.pow(.02,s),si<.01&&(si=0),ba}function uu(){return ba}const Qn=300,Xo=new Float32Array(Qn),Yo=new Float32Array(Qn),qo=new Float32Array(Qn),il=new Float32Array(Qn),sl=new Float32Array(Qn),ol=new Float32Array(Qn),ds=new Float32Array(Qn),Pn=new Float32Array(Qn*6);let Ms=null,Th=null;function o1(){const s=new be;s.setAttribute("position",new Xe(Pn,3)),Th=new Xh({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Ms=new mm(s,Th),Ms.frustumCulled=!1,Ms.visible=!1,ht.add(Ms);for(let t=0;t<Qn;t++)ds[t]=0,Ip(t)}function Ip(s){const t=s*6;Pn[t]=0,Pn[t+1]=-100,Pn[t+2]=0,Pn[t+3]=0,Pn[t+4]=-100,Pn[t+5]=0}function r1(s,t,e,n,i){if(!Ms)return;const o=e>.01;if(Ms.visible=o,!o)return;Th.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*s*60);for(let c=0;c<r;c++){let l=-1;for(let u=0;u<Qn;u++)if(ds[u]<=0){l=u;break}if(l===-1)break;const h=Math.random()*Math.PI*2,f=Math.random()*30;Xo[l]=t.x+Math.cos(h)*f,Yo[l]=12+Math.random()*10,qo[l]=t.z+Math.sin(h)*f,il[l]=n*2+(Math.random()-.5)*.3,sl[l]=-12-Math.random()*8,ol[l]=i*2+(Math.random()-.5)*.3,ds[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<Qn;c++){if(ds[c]<=0)continue;if(ds[c]-=s,ds[c]<=0||Yo[c]<$t(Xo[c],qo[c])+.1){ds[c]=0,Ip(c);continue}Xo[c]+=il[c]*s,Yo[c]+=sl[c]*s,qo[c]+=ol[c]*s;const l=c*6;Pn[l]=Xo[c],Pn[l+1]=Yo[c],Pn[l+2]=qo[c],Pn[l+3]=Xo[c]+il[c]*a,Pn[l+4]=Yo[c]+sl[c]*a,Pn[l+5]=qo[c]+ol[c]*a}Ms.geometry.attributes.position.needsUpdate=!0}let Ct=null,Ke=null,Di=!1,Ls=!1,cr=null,Ta=null,a1=null,Lp=null,c1=null,l1=null,Dp=null,Up=null,h1=null,Np=null,zp=null,rl=0,u1=null,Fp=null,f1=null;const Si={jelly:0,puff:0,deer:0,moth:0};function Jf(s,t){const e=Ct.sampleRate*t,n=Ct.createBuffer(1,e,Ct.sampleRate),i=n.getChannelData(0);if(s==="white")for(let o=0;o<e;o++)i[o]=Math.random()*2-1;else if(s==="brown"){let o=0;for(let r=0;r<e;r++){const a=Math.random()*2-1;i[r]=(o+.02*a)/1.02,o=i[r],i[r]*=3.5}}return n}function ua(s,t,e){const n=Ct.createBufferSource();n.buffer=s,n.loop=!0;const i=Ct.createGain();i.gain.value=t;const o=Ct.createBiquadFilter();return o.type="lowpass",o.frequency.value=e,o.Q.value=.5,n.connect(o).connect(i).connect(Ke),n.start(),{node:n,gain:i,filter:o}}function d1(){const s=()=>{if(!Di){try{Ct=new(window.AudioContext||window.webkitAudioContext),Ke=Ct.createGain(),Ke.gain.value=.35,Ke.connect(Ct.destination),cr=Jf("brown",2),Ta=Jf("white",2);const t=ua(cr,.12,180);a1=t.node,Lp=t.gain,c1=t.filter;const e=ua(Ta,0,400);l1=e.node,Dp=e.gain,Up=e.filter;const n=ua(Ta,0,2e3);h1=n.node,Np=n.gain,zp=n.filter;const i=ua(cr,0,600);u1=i.node,Fp=i.gain,f1=i.filter,Di=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",s),document.removeEventListener("keydown",s),document.removeEventListener("touchstart",s)}};document.addEventListener("click",s),document.addEventListener("keydown",s),document.addEventListener("touchstart",s)}function p1(s,t,e,n,i,o,r,a){if(!Di||Ls)return;const c=Ct.currentTime,l=o==="DEEP_NIGHT"?.15:o==="DAWN"?.08:.12;Lp.gain.linearRampToValueAtTime(l,c+.1);const h=Math.min(t*.18,.3),f=200+t*600;Dp.gain.linearRampToValueAtTime(h,c+.1),Up.frequency.linearRampToValueAtTime(f,c+.1);const u=e*.25,d=1200+e*2e3;Np.gain.linearRampToValueAtTime(u,c+.1),zp.frequency.linearRampToValueAtTime(d,c+.1),i>.5&&rl<=0&&(m1(),rl=2+Math.random()*3),rl-=s;let g=1/0;if(r&&a)for(let m=0;m<a.length;m++){const b=a[m].x-r.x,v=a[m].z-r.z,M=b*b+v*v;M<g&&(g=M)}const p=(g<225?1-Math.sqrt(g)/15:0)*.12;Fp.gain.linearRampToValueAtTime(p,c+.1),Si.jelly-=s,Si.puff-=s,Si.deer-=s,Si.moth-=s}function m1(){if(!Ct)return;const s=Ct.createOscillator(),t=Ct.createGain(),e=Ct.createBiquadFilter();s.type="sawtooth",s.frequency.value=40+Math.random()*30,e.type="lowpass",e.frequency.value=100,e.Q.value=1,t.gain.setValueAtTime(.4,Ct.currentTime),t.gain.exponentialRampToValueAtTime(.001,Ct.currentTime+.8+Math.random()*.5),s.connect(e).connect(t).connect(Ke),s.start(),s.stop(Ct.currentTime+1.5);const n=Ct.createBufferSource();n.buffer=cr;const i=Ct.createGain(),o=Ct.createBiquadFilter();o.type="lowpass",o.frequency.value=80,i.gain.setValueAtTime(.3,Ct.currentTime),i.gain.exponentialRampToValueAtTime(.001,Ct.currentTime+1.2),n.connect(o).connect(i).connect(Ke),n.start(),n.stop(Ct.currentTime+1.5)}function Es(s,t,e){if(!Di||Ls||!Ct||Si[s]>0)return;const n=t.x-e.x,i=t.z-e.z,o=n*n+i*i;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.15,c=Math.max(-1,Math.min(1,n/Math.max(r,1))),l=Ct.createOscillator(),h=Ct.createGain(),f=Ct.createStereoPanner();f.pan.value=c;const u=Ct.currentTime;switch(s){case"jelly":l.type="sine",l.frequency.setValueAtTime(280+Math.random()*80,u),l.frequency.linearRampToValueAtTime(220+Math.random()*60,u+.6),h.gain.setValueAtTime(a,u),h.gain.exponentialRampToValueAtTime(.001,u+.8),l.connect(h).connect(f).connect(Ke),l.start(),l.stop(u+.8),Si.jelly=3+Math.random()*4;break;case"puff":l.type="sine",l.frequency.setValueAtTime(600+Math.random()*200,u),l.frequency.exponentialRampToValueAtTime(400,u+.15),h.gain.setValueAtTime(a*.7,u),h.gain.exponentialRampToValueAtTime(.001,u+.15),l.connect(h).connect(f).connect(Ke),l.start(),l.stop(u+.2),Si.puff=2+Math.random()*3;break;case"deer":l.type="sawtooth",l.frequency.setValueAtTime(120+Math.random()*40,u),l.frequency.linearRampToValueAtTime(80,u+.3);const d=Ct.createBiquadFilter();d.type="lowpass",d.frequency.value=300,h.gain.setValueAtTime(a,u),h.gain.exponentialRampToValueAtTime(.001,u+.4),l.connect(d).connect(h).connect(f).connect(Ke),l.start(),l.stop(u+.5),Si.deer=4+Math.random()*5;break;case"moth":l.type="triangle",l.frequency.setValueAtTime(180+Math.random()*100,u);const g=Ct.createOscillator(),_=Ct.createGain();g.frequency.value=20+Math.random()*10,_.gain.value=50,g.connect(_).connect(l.frequency),h.gain.setValueAtTime(a*.4,u),h.gain.exponentialRampToValueAtTime(.001,u+.3),l.connect(h).connect(f).connect(Ke),g.start(),l.start(),g.stop(u+.35),l.stop(u+.35),Si.moth=3+Math.random()*4;break}}let qa=0;function g1(s,t){if(!Di||Ls||!Ct||qa>0)return;const e=Ct.currentTime;if(t){const n=Ct.createBufferSource();n.buffer=Ta;const i=Ct.createGain(),o=Ct.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,i.gain.setValueAtTime(.06,e),i.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(i).connect(Ke),n.start(),n.stop(e+.15)}else{const n=Ct.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const i=Ct.createGain();i.gain.setValueAtTime(.04,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(i).connect(Ke),n.start(),n.stop(e+.1)}qa=s?.22:.35}function x1(){if(!Di||Ls||!Ct)return;const s=Ct.currentTime,t=Ct.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,s),t.frequency.exponentialRampToValueAtTime(300,s+.1);const e=Ct.createGain();e.gain.setValueAtTime(.04,s),e.gain.exponentialRampToValueAtTime(.001,s+.15),t.connect(e).connect(Ke),t.start(),t.stop(s+.2)}function _1(s){if(!Di||Ls||!Ct)return;const t=Ct.currentTime,e=Ct.createBufferSource();e.buffer=cr;const n=Ct.createGain(),i=Ct.createBiquadFilter();i.type="lowpass",i.frequency.value=200,n.gain.setValueAtTime(s*.08,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(i).connect(n).connect(Ke),e.start(),e.stop(t+.25)}function M1(s){qa>0&&(qa-=s)}function v1(s,t){if(!Di||Ls||!Ct)return;const e=s.x-t.x,n=s.z-t.z,i=e*e+n*n;if(i>400)return;const o=Math.max(0,1-Math.sqrt(i)/20)*.08,r=Ct.currentTime,a=Ct.createOscillator();a.type="sine",a.frequency.setValueAtTime(800+Math.random()*400,r),a.frequency.exponentialRampToValueAtTime(200,r+.08);const c=Ct.createGain();c.gain.setValueAtTime(o,r),c.gain.exponentialRampToValueAtTime(.001,r+.1),a.connect(c).connect(Ke),a.start(),a.stop(r+.12)}function y1(){if(!Di||Ls||!Ct)return;const s=Ct.currentTime,t=Ct.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,s),t.frequency.exponentialRampToValueAtTime(800,s+.2);const e=Ct.createGain();e.gain.setValueAtTime(.08,s),e.gain.exponentialRampToValueAtTime(.001,s+.4),t.connect(e).connect(Ke),t.start(),t.stop(s+.5)}function w1(s,t,e,n,i){const o=e.x-s.x,r=e.z-s.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<i*.5}function S1(s,t,e,n){const i=t.x-s.x,o=t.z-s.z,r=n?e*1.8:e;return i*i+o*o<r*r}function Op(s,t,e){let n=0,i=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],c=s.x-a.x,l=s.z-a.z,h=c*c+l*l;if(h>.01&&h<e*e){const f=Math.sqrt(h);n+=c/f/f,i+=l/f/f,o++}}return o>0&&(n/=o,i/=o),{x:n,z:i}}function Bp(s,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let i=0;i<t.length;i++)e+=t[i].x,n+=t[i].z;return e/=t.length,n/=t.length,{x:e-s.x,z:n-s.z}}function b1(s,t){const e=Math.sqrt(s.x*s.x+s.z*s.z),n=ae-t;if(e<n)return{x:0,z:0};const i=(e-n)/t,o=Math.min(i*2,3);return{x:-s.x/e*o,z:-s.z/e*o}}function T1(s,t,e,n,i){let o=0,r=0;const a=Math.cos(t)*n,c=Math.sin(t)*n,l=s.x+a,h=s.z+c;for(let f=0;f<e.length;f++){const u=e[f],d=l-u.x,g=h-u.z,_=d*d+g*g,p=(u.colR||i)+1;if(_<p*p&&_>.01){const m=Math.sqrt(_),b=(p-m)/p*2;o+=d/m*b,r+=g/m*b}}return{x:o,z:r}}const wi={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},E1={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Ti=null,Ea=0,Qf="";function A1(){Ti=document.createElement("div"),Ti.id="discovery-text",Ti.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Ti)}function ss(s){wi[s]||(wi[s]=!0,Qf=E1[s],Ea=3,Ti&&(Ti.textContent=Qf,Ti.style.opacity="1"))}function R1(s,t,e,n,i,o,r,a){const c=s.x,l=s.z;if(!wi.deer)for(let h=0;h<t.length;h++){const f=t[h].group.position.x-c,u=t[h].group.position.z-l;if(f*f+u*u<144){ss("deer");break}}if(!wi.puffling)for(let h=0;h<e.length;h++){const f=e[h].group.position.x-c,u=e[h].group.position.z-l;if(f*f+u*u<64){ss("puffling");break}}if(!wi.jelly)for(let h=0;h<n.length;h++){const f=n[h].group.position.x-c,u=n[h].group.position.z-l;if(f*f+u*u<100){ss("jelly");break}}if(!wi.moth)for(let h=0;h<i.length;h++){const f=i[h].group.position.x-c,u=i[h].group.position.z-l;if(f*f+u*u<64){ss("moth");break}}if(!wi.fairyRing)for(let h=0;h<o.length;h++){const f=o[h].x-c,u=o[h].z-l;if(f*f+u*u<16){ss("fairyRing");break}}if(!wi.pond)for(let h=0;h<r.length;h++){const f=r[h].x-c,u=r[h].z-l;if(f*f+u*u<25){ss("pond");break}}!wi.crystalChain&&a>=3&&ss("crystalChain")}function C1(s){Ea>0&&(Ea-=s,Ea<=.6&&Ti&&(Ti.style.opacity="0"))}let Eh=null,al=60;const P1={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},I1={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function L1(){Eh=document.getElementById("hud")}function D1(s,t){if(!Eh)return;al=al*.95+1/Math.max(s,.001)*.05;const e=Ve==="SEEK"?"Seek the orbs...":Ve==="RISING"?"The obelisk stirs...":Ve==="COMPLETE"?"Convergence!":"Luminaries",n=P1[Ue]||"Night",i=I1[ar]||"Clear";Eh.innerHTML="<b>"+e+"</b> · "+n+" · "+i+" · FPS:"+Math.round(al)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let Za=null;function U1(){Za=document.getElementById("orb-hud")}function N1(){return Za}function z1(){const s=document.getElementById("overlay");s&&(s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},2500)),Za&&(Za.style.display="block")}const ie=[],Sn=[],se=[],oi=[],Rn=[],Be=[],Po=[],Ah=[],xr=[],ui=[],Rh=[],$a=[],ja=[],lr=[],ci=[],ri=[],ke=[],In=[],Ch=[],Ph=[],kp=[],Gi=[];let td=0,ed=0,cl=0,kn=null,ni=0;const Ih=15,Lh=[];let nd=!1;function F1(){if(nd)return;nd=!0;const s=new Xh({color:F.crystal,transparent:!0,opacity:0,blending:pe,depthWrite:!1});for(let t=0;t<Ih;t++){const e=new be,n=new Float32Array(6);e.setAttribute("position",new Xe(n,3)),e.attributes.position.setUsage(Le);const i=new Cd(e,s.clone());i.visible=!1,ht.add(i),Lh.push({line:i,geo:e,opacity:0,active:!1})}}let os=null;function O1(){if(os)return os;const s=new Ao(.9,1,48),t=new Z({color:F.echoBloom,transparent:!0,opacity:.5,side:Ut,depthWrite:!1,blending:pe});return os=new I(s,t),os.rotation.x=-Math.PI/2,os.visible=!1,ht.add(os),os}function B1(){for(let t=0;t<zv;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=5+w()*(ae-10);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ie.length;c++){const l=ie[c].x-e,h=ie[c].z-n;if(l*l+h*h<9){i=!1;break}}if(i)break}if(i){const o=zy(e,n);o.position.y=$t(e,n),ie.push({group:o,x:e,z:n})}}for(let t=0;t<Fv;t++){const e=ie[Math.floor(w()*ie.length)],n=w()*6.28,i=1+w()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=Fy(o,r);a.group.position.y=$t(o,r),Sn.push(a)}for(let t=0;t<Ov;t++){const e=w()*6.28,n=8+w()*ae*.6,i=Math.cos(e)*n,o=Math.sin(e)*n,r=Oy(i,o);r.group.position.y=$t(i,o),se.push(r)}for(let t=0;t<Bv;t++){const e=w()*6.28,n=10+w()*ae*.5,i=Math.cos(e)*n,o=Math.sin(e)*n;oi.push(Qy(i,$t(i,o)+3+w()*5,o))}for(let t=0;t<kv;t++){const e=Sn[Math.floor(w()*Sn.length)],n=w()*6.28,i=1+w()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=tw(o,r);a.group.position.y=$t(o,r),a._baseY=$t(o,r),Rn.push(a)}for(let t=0;t<Gv;t++){const e=w()*6.28,n=12+w()*ae*.5,i=Math.cos(e)*n,o=Math.sin(e)*n,r=ew(i,o),a=$t(i,o);r.group.position.y=a,r._baseY=a,Be.push(r)}for(let t=0;t<Hv;t++){const e=ie[Math.floor(w()*ie.length)];Po.push(nw(e.x,$t(e.x,e.z)+2+w()*4,e.z))}const s=[null,F.grassPurple,F.grassBlue,F.grassTeal];for(let t=0;t<Vv;t++){const e=w()*6.28,n=2+w()*(ae*.9),i=Math.cos(e)*n,o=Math.sin(e)*n,r=s[Math.floor(w()*s.length)],a=By(i,o,2+w()*2.5,25+Math.floor(w()*20),r);a.mesh.position.y=$t(i,o),Ah.push(a)}for(let t=0;t<qv;t++){let e,n,i=!1;for(let o=0;o<10;o++){const r=w()*6.28,a=3+w()*(ae*.85);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ie.length;c++){const l=ie[c].x-e,h=ie[c].z-n;if(l*l+h*h<4){i=!1;break}}if(i)break}if(i){const o=cw(e,n);o.group.position.y=$t(e,n)-.08,$a.push(o)}}for(let t=0;t<Wv;t++){const e=ie[Math.floor(w()*ie.length)],n=w()*6.28,i=1+w()*5,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=Gy(o,r);a.group.position.y=$t(o,r),xr.push(a)}for(let t=0;t<Xv;t++){const e=w()*6.28,n=3+w()*(ae*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Hy(i,o);r.group.position.y=$t(i,o),ui.push(r)}for(let t=0;t<Yv;t++){const e=w()*6.28,n=4+w()*(ae*.8),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Vy(i,o);r.group.position.y=$t(i,o),Rh.push(r)}for(let t=0;t<to;t++){let e,n,i=!1;for(let o=0;o<30;o++){const r=w()*6.28,a=20+w()*(ae*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<In.length;c++){const l=In[c].x-e,h=In[c].z-n;if(l*l+h*h<225){i=!1;break}}if(i)break}if(i){const o=aw(e,n);o.group.position.y=$t(e,n)+1,o.flyY=$t(e,n)+1,In.push(o)}}for(let t=0;t<qd;t++){const e=w()*6.28,n=2+w()*3,i=Math.cos(e)*n,o=Math.sin(e)*n;ja.push(iw(i,$t(i,o)+1+w()*.5,o))}for(let t=0;t<Zv;t++){const e=w()*6.28,n=4+w()*(ae*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=qy(i,o);r.group.position.y=$t(i,o),lr.push(r)}for(let t=0;t<$v;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=10+w()*(ae*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ie.length;c++){const l=ie[c].x-e,h=ie[c].z-n;if(l*l+h*h<36){i=!1;break}}if(i)break}if(i){ah(e,n,4);const o=sw(e,n);o.group.position.y=$t(e,n),ci.push(o)}}for(let t=0;t<jv;t++){const e=w()*6.28,n=5+w()*ae*.6,i=Math.cos(e)*n,o=Math.sin(e)*n;ri.push(ow(i,$t(i,o)+.5+w()*5,o))}for(let t=0;t<Jv;t++){let e,n,i=!1;for(let o=0;o<20;o++){const r=w()*6.28,a=8+w()*(ae*.6);e=Math.cos(r)*a,n=Math.sin(r)*a,i=!0;for(let c=0;c<ie.length;c++){const l=ie[c].x-e,h=ie[c].z-n;if(l*l+h*h<16){i=!1;break}}if(i)break}if(i){ah(e,n,3);const o=rw(e,n);o.group.position.y=$t(e,n),ke.push(o)}}for(let t=0;t<Qv;t++){const e=w()*6.28,n=5+w()*(ae*.7),i=Math.cos(e)*n,o=Math.sin(e)*n,r=$y(i,o);r.group.position.y=$t(i,o),Ch.push(r)}for(let t=0;t<ty;t++){const e=ie[Math.floor(w()*ie.length)],n=w()*6.28,i=2+w()*4,o=e.x+Math.cos(n)*i,r=e.z+Math.sin(n)*i,a=jy(o,r);a.group.position.y=$t(o,r),Ph.push(a)}for(let t=0;t<ey;t++){const e=w()*6.28,n=6+w()*(ae*.65),i=Math.cos(e)*n,o=Math.sin(e)*n,r=Ky(i,o);r.group.position.y=$t(i,o),kp.push(r)}}function Gp(s,t){const e=1+Ci*1.5,n=_s*.03,i=co*.03;for(let o=0;o<ie.length;o++){const r=ie[o],a=r.x*.1+r.z*.13;r.group.rotation.z=Math.sin(t*.3+a)*.004*e+n*.15,r.group.rotation.x=Math.sin(t*.25+a+1)*.003*e+i*.15}for(let o=0;o<Ah.length;o++)ky(Ah[o],t,e,n,i,tt.pos.x,tt.pos.z);for(let o=0;o<xr.length;o++){const r=xr[o];r.group.rotation.z=Math.sin(t*.8+r.phase)*.03*e+n,r.group.rotation.x=Math.sin(t*.6+r.phase+1)*.02*e+i}for(let o=0;o<ui.length;o++){const r=ui[o],a=Math.sin(t*1+r.phase)*.5+.5;r.petalMat.emissiveIntensity=(.3+a*.5)*we,r.group.rotation.z=Math.sin(t*.9+r.phase)*.04*e+n*.5}for(let o=0;o<Rh.length;o++){const r=Rh[o];r.group.rotation.z=Math.sin(t*1.1+r.phase)*r.swayAmp*e+n,r.group.rotation.x=Math.sin(t*.8+r.phase+2)*r.swayAmp*.5*e+i}for(let o=0;o<Ch.length;o++){const r=Ch[o],a=Math.sin(t*1.2+r.phase)*.5+.5;r.orbMat.emissiveIntensity=(.5+a*.5)*we,r.hazeMat.opacity=(.04+a*.04)*we,r.group.rotation.z=Math.sin(t*.5+r.phase)*.02*e+n*.3,r.group.rotation.x=Math.sin(t*.4+r.phase+1)*.015*e+i*.3}for(let o=0;o<Ph.length;o++){const r=Ph[o];for(let a=0;a<r.podMats.length;a++){const c=Math.sin(t*1.5+r.phase+a*1.8)*.5+.5;r.podMats[a].emissiveIntensity=(.3+c*.5)*we}r.group.rotation.z=Math.sin(t*.35+r.phase)*.01*e+n*.2}Jy(kp,s,t,we)}function Hp(s,t){for(let n=0;n<oi.length;n++){const i=oi[n],o=i.group,r=o.position.x,a=o.position.z;i._syncPhase===void 0&&(i._syncPhase=i.phase);let c=0,l=0;for(let h=0;h<oi.length;h++){if(h===n)continue;const f=oi[h],u=f.group.position.x-r,d=f.group.position.z-a;u*u+d*d<225&&(c+=f._syncPhase||f.phase,l++)}if(l>0){const h=c/l;i._syncPhase+=(h-i._syncPhase)*s*.4}}const e=Ue==="DEEP_NIGHT"?2:Ue==="DAWN"?-1.5:0;for(let n=0;n<oi.length;n++){const i=oi[n],o=i.group,r=o.position.x,a=o.position.z,c=i.floatY+e;if(i._stT-=s,i._stT<=0)if(Li)i._state="display",i._stT=10+Math.random()*15;else{const d=Math.random();d<.5?(i._state="drift",i._stT=20+Math.random()*30):d<.75?(i._state="pulse",i._stT=8+Math.random()*12):(i._state="migrate",i._migrateAng=Math.random()*6.28,i._stT=15+Math.random()*20)}switch(Li&&i._state!=="display"&&(i._state="display",i._stT=10,Es("jelly",{x:r,z:a},tt.pos)),i._state){case"drift":{i.driftAng+=s*.15;const d=8+Math.sin(t*.1+i.phase)*4,g=i.homeX+Math.cos(i.driftAng)*d,_=i.homeZ+Math.sin(i.driftAng)*d;o.position.x+=(g-r)*s*.3,o.position.z+=(_-a)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1.5;break}case"pulse":{i.driftAng+=s*.08,o.position.x+=Math.cos(i.driftAng)*s*.3,o.position.z+=Math.sin(i.driftAng)*s*.3,o.position.y=c+Math.sin(t*i.wobble+i.phase)*1,i._pulseSync=Math.sin(t*2+i._syncPhase)*.5+.5;break}case"migrate":{o.position.x+=Math.cos(i._migrateAng)*s*1,o.position.z+=Math.sin(i._migrateAng)*s*1,o.position.y=c+Math.sin(t*i.wobble+i.phase)*.8,o.position.x*o.position.x+o.position.z*o.position.z>ae*.8*(ae*.8)&&(i._migrateAng+=Math.PI);break}case"display":{i.driftAng+=s*.4,o.position.x+=Math.cos(i.driftAng)*s*.8,o.position.z+=Math.sin(i.driftAng)*s*.8,o.position.y=c+Math.sin(t*2+i.phase)*2,i._syncPhase+=(0-i._syncPhase)*s*2;break}}i._state==="pulse"&&Math.random()<.003&&Es("jelly",{x:r,z:a},tt.pos);const l=i._syncPhase||i.phase,h=Math.sin(t*1.2+l)*.5+.5;let f=1,u=0;if(i._state==="pulse")f=1+i._pulseSync*1.5,u=i._pulseSync*.15;else if(i._state==="display"){const d=Math.sin(t*4)*.5+.5;f=1.5+d*1.2,u=.15+d*.1}else i._state==="drift"&&(f=1+h*.3);i.bellMat.emissiveIntensity=(.4+h*.8)*we*f,i.bellMat.opacity=.35+h*.25+u,o.rotation.y+=s*.2;for(let d=2;d<o.children.length;d++)o.children[d].rotation.x=Math.sin(t*2+d+l)*.15,o.children[d].rotation.z=Math.sin(t*1.5+d*.7+l)*.1}}function Vp(s,t){const e=De.ShiftLeft||De.ShiftRight||Sr,n=Ue==="DAWN"?.6:Ue==="NIGHT"?1.3:1,i=Ue==="DAWN"?2:Ue==="NIGHT"?.6:1;for(let o=0;o<Rn.length;o++){const r=Rn[o],a=r.group,c=a.position.x,l=a.position.z,h=c-tt.pos.x,f=l-tt.pos.z,u=h*h+f*f;if(r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const S=e?3.5:2;let T=u<S*S;if(!T)for(let y=0;y<Be.length;y++){if(Be[y].state!=="flee")continue;const x=Be[y].group.position.x-c,R=Be[y].group.position.z-l;if(x*x+R*R<25){T=!0;break}}T&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(h,f),r.hopTimer=0,Es("puff",{x:c,z:l},tt.pos))}if(Li&&r.state!=="startled"&&r.state!=="huddle"){let S=1/0,T=-1;for(let y=0;y<Rn.length;y++){if(y===o)continue;const x=Rn[y].group.position.x-c,R=Rn[y].group.position.z-l,U=x*x+R*R;U<S&&(S=U,T=y)}T>=0&&S>1&&(r.state="huddle",r._huddleTarget=T)}Co>8&&u<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const d=c-r._lastTX,g=l-r._lastTZ;d*d+g*g>.25&&(r._baseY=$t(c,l),r._lastTX=c,r._lastTZ=l);const _={x:c,z:l},p=[];for(let S=0;S<Rn.length;S++){if(S===o)continue;const T=Rn[S].group.position.x,y=Rn[S].group.position.z;(T-c)*(T-c)+(y-l)*(y-l)<100&&p.push({x:T,z:y})}const m=Op(_,p,1.5),b=p.length>0?Bp(_,p):{x:0,z:0},v=m.x*2+b.x*.3,M=m.z*2+b.z*.3,A=Math.sqrt(v*v+M*M);switch(r.state){case"idle":{if(r.idleTimer-=s,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*s*.3,A>.1&&p.length>1&&(a.position.x+=b.x*.05*s,a.position.z+=b.z*.05*s),Math.random()<.001&&Es("puff",{x:c,z:l},tt.pos),r.idleTimer<=0){const S=A>.2?Math.atan2(v,M):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+S*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=s;const T=r.hopTimer/1.2;if(T>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*i,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(T*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*s;const y=1-Math.sin(T*Math.PI)*.15,x=1+Math.sin(T*Math.PI)*.2;a.scale.set(y,x,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=s,r.hopTimer+=s*1.5;const S=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(S*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*s+m.x*.5*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*s+m.z*.5*s,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=s,u>225||Co<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(tt.pos.x-c,tt.pos.z-l),u>9){r.hopTimer+=s;const S=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(S*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*s,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*s}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!Li){r.state="idle",r.idleTimer=2;break}const S=Rn[r._huddleTarget];if(S){const T=S.group.position.x-c,y=S.group.position.z-l,x=Math.sqrt(T*T+y*y);x>.5&&(a.position.x+=T/x*r.speed*.5*s,a.position.z+=y/x*r.speed*.5*s)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=s,r._blinkTimer<=0)if(r._blinkState===0){for(let S=0;S<r.eyes.length;S++)r.eyes[S].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let S=0;S<r.eyes.length;S++)r.eyes[S].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let S=0;S<r.ears.length;S++){const T=r.ears[S];T.mesh.rotation.z=T.baseRotZ+Math.sin(t*3.5+T.side*1.2+r.phase)*.08}r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,a.position.x*a.position.x+a.position.z*a.position.z>ae*.85*(ae*.85)&&(r.wanderAng+=Math.PI)}}function Wp(s,t){const e=De.ShiftLeft||De.ShiftRight||Sr;for(let n=0;n<Be.length;n++){const i=Be[n],o=i.group,r=o.position.x,a=o.position.z,c=r-tt.pos.x,l=a-tt.pos.z,h=c*c+l*l,f=Math.atan2(c,l),u=e?18:12,d=u*u,g=e?10:sy,_=g*g,p=r-i._lastTX,m=a-i._lastTZ;p*p+m*m>.25&&(i._baseY=$t(r,a),i._lastTX=r,i._lastTZ=a);const b=i._baseY;if(i.state!=="flee"&&i.state!=="alert"&&i.state!=="watching"){const x={x:r,z:a},R={x:tt.pos.x,z:tt.pos.z};h<_||S1(x,R,g,e)?(i.state="flee",i.wanderAng=f,i.fleeTimer=2.5+Math.random()*2,i._zigTimer=0,Es("deer",x,tt.pos)):(h<d||w1(x,i.wanderAng,R,u,Math.PI*.5))&&(i.state="alert",i._stT=1+Math.random()*1.5,Es("deer",x,tt.pos))}if(i.state!=="flee")for(let x=0;x<Be.length;x++){if(x===n||Be[x].state!=="flee")continue;const R=Be[x].group.position.x-r,U=Be[x].group.position.z-a;if(R*R+U*U<400){i.state="flee",i.wanderAng=Be[x].wanderAng+(Math.random()-.5)*.4,i.fleeTimer=2+Math.random()*1.5,i._zigTimer=0;break}}const v=[];for(let x=0;x<Be.length;x++){if(x===n)continue;const R=Be[x].group.position.x,U=Be[x].group.position.z;(R-r)*(R-r)+(U-a)*(U-a)<400&&v.push({x:R,z:U})}const M=Op({x:r,z:a},v,3),A=v.length>0?Bp({x:r,z:a},v):{x:0,z:0};(i.state==="alert"||i.state==="watching")&&(i.headLook+=(f-i.wanderAng)*.3*s);let E=i.speed,S=!1;switch(i.state){case"walk":{if(S=!0,i.walkTimer-=s,i.walkTimer<=0){const R=Math.random(),U=Ue==="DUSK"?.55:.4,D=Ue==="DEEP_NIGHT"?.25:.1;if(R<.25)i.state="pause",i.pauseTimer=2+Math.random()*3;else if(R<U)i.state="graze",i._stT=Ue==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<U+.1&&ke.length>0){i.state="drink",i._stT=8;let z=1/0;for(let H=0;H<ke.length;H++){const V=ke[H].x-r,$=ke[H].z-a,W=V*V+$*$;W<z&&(z=W,i._drinkTgt=ke[H])}}else R<U+.1+D?(i.state="rest",i._stT=Ue==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(i.wanderAng+=(Math.random()-.5)*1.2,i.walkTimer=3+Math.random()*5)}if((r-i.homeX)*(r-i.homeX)+(a-i.homeZ)*(a-i.homeZ)>400){const R=Math.atan2(i.homeX-r,i.homeZ-a);i.wanderAng+=(R-i.wanderAng)*s*.5}if(v.length>0){const R=Math.atan2(A.x*.15+M.x*.8,A.z*.15+M.z*.8);i.wanderAng+=(R-i.wanderAng)*s*.3}break}case"pause":{i.pauseTimer-=s,i.headLook=Math.sin(t*.6)*.4,i.pauseTimer<=0&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}case"graze":{i._stT-=s,i.headBob=-.5,i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*4,i.headBob=0);break}case"drink":{if(i._stT-=s,i._drinkTgt){const x=i._drinkTgt.x-r,R=i._drinkTgt.z-a;Math.sqrt(x*x+R*R)>2?(i.wanderAng=Math.atan2(x,R),S=!0,E=i.speed*.7):i.headBob=-.6}i._stT<=0&&(i.state="walk",i.walkTimer=3+Math.random()*4,i.headBob=0,i._drinkTgt=null);break}case"rest":{i._stT-=s,o.position.y=Math.max(b-.3,o.position.y-s*.5),i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*3);break}case"alert":{i._stT-=s,h<_?(i.state="flee",i.wanderAng=f,i.fleeTimer=2.5+Math.random()*2):i._stT<=0&&(h<u*1.2*(u*1.2)?(i.state="watching",i._stT=3+Math.random()*3):(i.state="walk",i.walkTimer=2+Math.random()*3));break}case"watching":{i._stT-=s,S=!0,E=i.speed*.3,i.wanderAng=f,h<_?(i.state="flee",i.wanderAng=f,i.fleeTimer=2.5+Math.random()*2):(h>u*1.5*(u*1.5)||i._stT<=0)&&(i.state="walk",i.walkTimer=2+Math.random()*4);break}case"flee":{S=!0,E=i.speed*oy,i.fleeTimer-=s,i._zigTimer-=s,i._zigTimer<=0&&(i._zigDir*=-1,i._zigTimer=.4+Math.random()*.4),i.wanderAng=f+i._zigDir*.3;const x=T1({x:r,z:a},i.wanderAng,ie,3,1.5);x.x*x.x+x.z*x.z>.01&&(i.wanderAng+=Math.atan2(x.z,x.x)*.3);const R=b1({x:r,z:a},8);(R.x!==0||R.z!==0)&&(i.wanderAng=Math.atan2(R.z,R.x)),(i.fleeTimer<=0||h>u*2*(u*2))&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}}if(S&&(o.position.x+=Math.sin(i.wanderAng)*E*s,o.position.z+=Math.cos(i.wanderAng)*E*s,i.legCycle+=s*E*3),o.position.x*o.position.x+o.position.z*o.position.z>ae*.9*(ae*.9)&&(i.wanderAng=Math.atan2(-o.position.x,-o.position.z)),i.state!=="rest"){const x=b-o.position.y;Math.abs(x)>.01?o.position.y+=Math.sign(x)*Math.min(Math.abs(x),s*2):o.position.y=b}if(o.rotation.y=i.wanderAng,i.state==="alert"||i.state==="watching"){const x=f-i.wanderAng;i.headLook+=(x*.5-i.headLook)*s*3}const y=i.headBob||0;i.neckPivot.rotation.x+=(y-i.neckPivot.rotation.x)*s*3,i.neckPivot.rotation.y+=(i.headLook-i.neckPivot.rotation.y)*s*4,S&&i.state!=="graze"&&i.state!=="drink"&&(i.neckPivot.rotation.x+=Math.sin(i.legCycle*2)*.05);for(let x=0;x<i.legPivots.length;x++){const R=i.legPivots[x];if(S){const U=R.isFront?0:Math.PI,D=R.side>0?Math.PI:0,z=Math.sin(i.legCycle+U+D)*.4*(E/i.speed);R.upper.rotation.x=z,R.lower.rotation.x=Math.max(0,-z*.6)}else i.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*s*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*s*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}i.tailPivot.rotation.x=Math.sin(t*1.5+i.phase)*.15,i.state==="flee"&&(i.tailPivot.rotation.x+=.3),i.state==="alert"?i.tailPivot.rotation.z=Math.sin(t*6)*.1:i.tailPivot.rotation.z*=.9,i.mat.emissiveIntensity=(.3+Math.sin(t*.8+i.phase)*.2)*we,i.headLook*=.98}}function Xp(s,t){for(let e=0;e<Po.length;e++){const n=Po[e],i=n.group,o=i.position.x,r=i.position.z;if(n._state==="patrol"){if(Math.random()<.002){let g=1/0,_=null;for(let p=0;p<se.length;p++){const m=se[p].x-o,b=se[p].z-r,v=m*m+b*b;v<900&&v<g&&(g=v,_=se[p])}for(let p=0;p<ci.length;p++){if(ci[p].glowIntensity<.3)continue;const m=ci[p].x-o,b=ci[p].z-r,v=m*m+b*b;v<900&&v<g&&(g=v,_=ci[p])}_&&(n._state="attracted",n._attractTarget=_,n._stT=6+Math.random()*8,Es("moth",{x:o,z:r},tt.pos))}const d=Ue==="DAWN"?.005:Ue==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let g=1/0,_=null;for(let p=0;p<ie.length;p++){const m=ie[p].x-o,b=ie[p].z-r,v=m*m+b*b;v<400&&v<g&&(g=v,_=ie[p])}_&&(n._state="rest",n._restTree=_,n._stT=Ue==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const a=Ue==="DEEP_NIGHT"?1.6:Ue==="DAWN"?.5:1,c=Ue==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=s*.4*a;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,g=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;i.position.x+=(d-o)*s*1.5,i.position.z+=(g-r)*s*1.5,i.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,i.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=s,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=s*.8;const d=n._attractTarget,g=Math.max(.5,n._stT*.4),_=d.x+Math.cos(n.orbitAng)*g,p=d.z+Math.sin(n.orbitAng)*g;i.position.x+=(_-o)*s*2,i.position.z+=(p-r)*s*2,i.position.y+=(2-i.position.y)*s*.5,i.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=s,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=i.position.x,n.centerZ=i.position.z;break}const d=n._restTree,g=d.x+.5-o,_=d.z+.5-r,p=Math.sqrt(g*g+_*_);p>.3&&(i.position.x+=g/p*s*2,i.position.z+=_/p*s*2),i.position.y+=(2.5-i.position.y)*s*1.5,i.rotation.y=Math.atan2(g,_);break}}const l=n._state==="rest"?.05:.4,h=Math.sin(t*n.flapSpeed+n.phase)*l;for(let d=0;d<i._wingPivots.length;d++){const g=i._wingPivots[d];g.pivot.rotation.z=h*g.side}const f=Math.sin(t*1.5+n.phase)*.5+.5,u=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+f*.6+u)*we,n.wingMat.opacity=.45+f*.25}}function k1(s,t){const e=De.ShiftLeft||De.ShiftRight||Sr;let n=null;if(Co>5&&(Ve==="SEEK"||Ve==="RISING")){let i=1/0;for(let o=0;o<In.length;o++){if(In[o].found)continue;const r=In[o].x-tt.pos.x,a=In[o].z-tt.pos.z,c=r*r+a*a;c<i&&(i=c,n=In[o])}}for(let i=0;i<ja.length;i++){const o=ja[i],r=t*.5+o.phase+i/qd*6.28,a=e?4+i*2:1.5+i*.8,c=e?3+i:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=tt.pos.x+Math.cos(r)*a,o.targetY=tt.pos.y-ec+c,o.targetZ=tt.pos.z+Math.sin(r)*a,i===0&&n){const g=Math.min((Co-5)/3,.6);o.targetX+=(n.x-tt.pos.x)*g,o.targetZ+=(n.z-tt.pos.z)*g,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*s,o.velY+=(o.targetY-o.group.position.y)*l*s,o.velZ+=(o.targetZ-o.group.position.z)*l*s,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*s*4,o.group.position.y+=o.velY*s*4,o.group.position.z+=o.velZ*s*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const f=t*(2.5+i*.5)+o.phase,u=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(f)*u,Math.sin(f*1.5)*.08,Math.sin(f)*u);for(let g=0;g<o.tendrils.length;g++){const _=o.tendrils[g],p=Math.sin(t*3+g*2.1+o.phase)*.3,m=.08+Math.sin(t*2+g*1.5)*.04;_.mesh.position.x=Math.cos(_.baseAng+p)*m,_.mesh.position.z=Math.sin(_.baseAng+p)*m,_.mesh.rotation.y=_.baseAng+p,_.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+g)*.2}for(let g=0;g<o.embers.length;g++){const _=(g+1)*.08;o.embers[g].position.y=-.06-_+Math.sin(t*4+g*1.4+o.phase)*.03,o.embers[g].position.x=Math.sin(t*2.5+g*2+o.phase)*.06,o.embers[g].material.opacity=.2+Math.sin(t*5+g*1.7)*.15}o.facet.rotation.y+=s*1.5,o.facet.rotation.x+=s*.7,o.halo.rotation.z+=s*.3,o.halo2.rotation.y+=s*.2}}function G1(s,t){for(let e=0;e<ci.length;e++){const n=ci[e],i=n.x-tt.pos.x,o=n.z-tt.pos.z,a=i*i+o*o<(nh+.5)*(nh+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*s*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*we,a&&tt.vel.y>0&&tt.vel.y<=za+.5&&(tt.vel.y=za+ny,n.glowIntensity=1.5,y1());const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let h=0;h<n.spores.length;h++){const f=n.spores[h];f.drift+=s*.3,f.mesh.position.y+=f.speed*s*(.5+n.glowIntensity),f.mesh.position.x=f.baseX+Math.sin(t*.8+f.drift)*.15,f.mesh.position.z=f.baseZ+Math.cos(t*.6+f.drift)*.12,f.mesh.position.y>.8&&(f.mesh.position.y=.03),f.mesh.scale.setScalar(.6+Math.sin(t*2+h)*.4)}for(let h=0;h<n.glowWorms.length;h++){const f=Math.sin(t*1.5+h*1.3+n.phase)*.5+.5;n.glowWorms[h].material.opacity=.1+f*.4+n.glowIntensity*.3}}}function H1(s,t){for(let e=0;e<ri.length;e++){const n=ri[e];if(n.popped){if(n.popTimer-=s,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=w()*6.28,f=8+w()*ae*.5;n.homeX=Math.cos(h)*f,n.homeZ=Math.sin(h)*f,n.floatY=.5+w()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=s*.2;const i=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(i-n.group.position.x)*s*.5,n.group.position.z+=(o-n.group.position.z)*s*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-tt.pos.x,c=n.group.position.y-tt.pos.y,l=n.group.position.z-tt.pos.z;a*a+c*c+l*l<Lf*Lf*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,Lw(n.group.position.x,n.group.position.y,n.group.position.z,6),v1(n.group.position,tt.pos))}}function V1(s,t){const e=uu();for(let n=0;n<ke.length;n++){const i=ke[n],o=.015+e*.01;for(let f=0;f<i.pads.length;f++)i.pads[f].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+i.pads[f].phase)*o;const r=e*.08;i.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+i.phase)*.1)*we;const a=Math.sin(t*1.2+i.phase)*.5+.5;i.flMat.emissiveIntensity=(.3+a*.5)*we;const c=.25+e*.2,l=.12+e*.08;for(let f=0;f<i.ripples.length;f++){const u=i.ripples[f],d=(t*c+u.phase)%1,g=.2+d*i.pondR*.8;u.mesh.scale.setScalar(g),u.mesh.material.opacity=(1-d)*l}const h=1+e*.5;for(let f=0;f<i.tadpoles.length;f++){const u=i.tadpoles[f];u.ang+=u.speed*h*s;const d=Math.cos(u.ang)*u.orbR,g=Math.sin(u.ang)*u.orbR;u.body.position.x=d,u.body.position.z=g,u.body.rotation.y=u.ang+Math.PI/2;const _=.02;u.tail.position.x=d-Math.cos(u.ang)*_,u.tail.position.z=g-Math.sin(u.ang)*_,u.tail.rotation.y=u.ang,u.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+f*3)*.4}}}function W1(s,t){if(cl-=s,cl<=0){cl=.5;for(let o=0;o<se.length;o++){const r=se[o],a=r.x-tt.pos.x,c=r.z-tt.pos.z;if(a*a+c*c<36){kn={x:r.x,z:r.z},ni=0;break}}}const e=O1();if(!kn){e.visible=!1;return}if(ni+=s*12,ni>30){kn=null,ni=0,e.visible=!1;return}e.visible=!0,e.position.set(kn.x,.15,kn.z),e.scale.setScalar(ni),e.material.opacity=(1-ni/30)*.45;const n=ni,i=4;for(let o=0;o<Sn.length;o++){const r=Sn[o],a=r.x-kn.x,c=r.z-kn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+h*2)*we)}}for(let o=0;o<ui.length;o++){const r=ui[o],a=r.group.position.x-kn.x,c=r.group.position.z-kn.z,l=Math.sqrt(a*a+c*c);if(Math.abs(l-n)<i){const h=1-Math.abs(l-n)/i;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+h*1.5)*we)}}}function X1(s,t){const e=tt.pos.x,n=tt.pos.z,i=uu(),o=Li?.6:i>.3?i*.4:0;for(let l=0;l<ui.length;l++){const h=ui[l],f=h.group.position.x,u=h.group.position.z,d=f-e,g=u-n,p=d*d+g*g<16?1:0;h._react=h._react||0,h._react+=(p-h._react)*s*(p>0?4:1.5);const m=(1+h._react*.15)*(1-o*.12),b=(1+h._react*.05)*(1-o*.15);h.group.scale.set(m,b,m),h.petalMat.emissiveIntensity+=h._react*.6*we*(1-o*.4)}for(let l=0;l<Sn.length;l++){const h=Sn[l],f=h.x-e,u=h.z-n,g=f*f+u*u<4?1:0;h._touch=h._touch||0,h._touch+=(g-h._touch)*s*(g>0?6:1.5);const _=i*.4;h.capMat.emissiveIntensity+=(h._touch*1.5+_)*we;const p=1+h._touch*.08;h.group.scale.set(p,1+h._touch*.04,p)}for(let l=0;l<xr.length;l++){const h=xr[l],f=h.group.position.x,u=h.group.position.z,d=f-e,g=u-n,p=d*d+g*g<2.25?.65:1;h._curl=h._curl===void 0?1:h._curl,h._curl+=(p-h._curl)*s*(p<1?4:1.5),h.group.scale.set(1+(1-h._curl)*.3,h._curl,1+(1-h._curl)*.3)}F1();const r=ar==="FOG_BANK"?.5:1;let a=0,c=0;for(let l=0;l<se.length;l++){const h=se[l],f=h.x-e,u=h.z-n;if(f*f+u*u<36)for(let d=0;d<se.length;d++){if(l===d)continue;const g=se[d],_=h.x-g.x,p=h.z-g.z,m=_*_+p*p;if(m<400){a++;const b=(1-Math.sqrt(m)/20)*.8*r;if(g.mat.emissiveIntensity+=b*we,c<Ih){const v=Lh[c],M=v.geo.attributes.position.array,A=1,E=1;M[0]=h.x,M[1]=A,M[2]=h.z,M[3]=g.x,M[4]=E,M[5]=g.z,v.geo.attributes.position.needsUpdate=!0,v.geo.computeBoundingSphere(),v.active=!0;const S=Math.sin(t*3+l*1.5+d*.7)*.3+.5;v.opacity=b*S*we,v.line.material.opacity=v.opacity,v.line.visible=!0,c++}}}}for(let l=c;l<Ih;l++){const h=Lh[l];h.line.visible&&(h.opacity*=.85,h.line.material.opacity=h.opacity,h.opacity<.01&&(h.line.visible=!1))}return a}let fa="EXPLORE",ll=0,hl=0;function Y1(s,t){let e=!1;for(let u=0;u<se.length;u++){const d=se[u].x-tt.pos.x,g=se[u].z-tt.pos.z;if(d*d+g*g<64){e=!0;break}}fa=e?"NEAR_CRYSTAL":"EXPLORE",ll+=s;const n=uu(),i=Math.max(.2,1-n*.8),o=(fa==="NEAR_CRYSTAL"?.08:.25)/i,r=Math.floor((fa==="NEAR_CRYSTAL"?120:100)*i);if(ll>o&&(ll=0,xp(0,t)<r))if(fa==="NEAR_CRYSTAL")for(let d=0;d<se.length;d++){const g=se[d].x-tt.pos.x,_=se[d].z-tt.pos.z;g*g+_*_<100&&va(se[d].x,$t(se[d].x,se[d].z)+1,se[d].z,3+Math.random()*4)}else if(Math.random()<.3&&ui.length>0){const d=ui[Math.floor(Math.random()*ui.length)];if(d._react>.3){const g=d.group.position.x,_=d.group.position.z;va(g+(Math.random()-.5)*2,$t(g,_)+.5,_+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,g=5+Math.random()*25,_=tt.pos.x+Math.cos(d)*g,p=tt.pos.z+Math.sin(d)*g;va(_,$t(_,p),p,6+Math.random()*10)}if(hl+=s,hl>.2){hl=0;for(let u=0;u<Sn.length;u++){const d=Sn[u],g=d.x-tt.pos.x,_=d.z-tt.pos.z;g*g+_*_<200&&Math.random()<.15&&Sw(d.x,.6*d.group.scale.x,d.z)}}for(let u=0;u<Sn.length;u++){const d=Sn[u],g=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+g*.8)*we}for(let u=0;u<se.length;u++){const d=se[u],g=Math.sin(t*.6+d.phase)*.5+.5;d.mat.emissiveIntensity=(1+g*1.5)*we,d.group.children[0].rotation.y+=s*.15,d.light&&(d.light.intensity=(.3+g*.4)*we)}if(!Gi.length)for(let u=0;u<se.length;u++)Gi.push({idx:u,dist:0});const a=tt.pos.x-td,c=tt.pos.z-ed;if(a*a+c*c>1){td=tt.pos.x,ed=tt.pos.z;for(let u=0;u<se.length;u++){const d=se[u],g=d.x-tt.pos.x,_=d.z-tt.pos.z;Gi[u].idx=u,Gi[u].dist=g*g+_*_}Gi.sort((u,d)=>u.dist-d.dist)}for(let u=0;u<cs.length;u++)if(u<Gi.length&&Gi[u].dist<2500){const d=se[Gi[u].idx],g=Math.sin(t*.6+d.phase)*.5+.5;cs[u].position.set(d.x,1.5,d.z),cs[u].intensity=(1.5+g*2)*we,cs[u].distance=16,cs[u].color.setHex(F.crystal)}else cs[u].intensity=0;if(Ci>.8&&Math.random()<.005)for(let u=0;u<lr.length;u++){const d=lr[u];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let g=0;g<8;g++)ap(d.x,d.h+.05,d.z);for(let g=2;g<d.group.children.length;g++)d.group.children[g].visible=!1;d.regrowTimer=15+Math.random()*10}}const l=Ci>.3?(Ci-.3)*.02:0,h=Li?.03:0;if(Math.random()<l+h)for(let u=0;u<ie.length;u++){const d=ie[u],g=d.x-tt.pos.x,_=d.z-tt.pos.z;if(g*g+_*_<900&&Math.random()<.15){const p=(d.group.children[0]?d.group.children[0].geometry.parameters.height*.7:6)+d.group.position.y;zw(d.x,p,d.z);break}}Hp(s,t),Vp(s,t),Wp(s,t),Xp(s,t),sp(s,t),Gp(s,t);for(let u=0;u<$a.length;u++){const d=$a[u];if(!d.sparkles)continue;const g=d.x||d.group.position.x,_=d.z||d.group.position.z;let p=0;for(let E=0;E<se.length;E++){const S=se[E].x-g,T=se[E].z-_,y=S*S+T*T;y<100&&(p=Math.max(p,(1-Math.sqrt(y)/10)*.6))}const m=g-tt.pos.x,b=_-tt.pos.z,v=m*m+b*b,M=v<25?(1-Math.sqrt(v)/5)*.3:0;let A=0;if(kn&&ni>0){const E=g-kn.x,S=_-kn.z,T=Math.sqrt(E*E+S*S);Math.abs(T-ni)<3&&(A=(1-Math.abs(T-ni)/3)*.8)}for(let E=0;E<d.sparkles.length;E++){const S=Math.sin(t*4+u*2.3+E*1.7)*.35;d.sparkles[E].material.opacity=.15+S+p+M+A}d.mossMat&&M>0&&(d.mossMat.emissiveIntensity=.05+M*.4*Math.sin(t*2+u)*.5+.5)}k1(s,t),Zy(lr,s,t,tt.pos),G1(s,t),H1(s,t),V1(s,t),yp(s,t,tt.pos),Yy(s,t),Fw(s,t),Cw(s),Dw(s),W1(s);const f=X1(s,t);qw(s,t),Mw(t),M1(s),R1(tt.pos,Be,Rn,oi,Po,ci,ke,f),C1(s)}let He=0,Dh=!1;function q1(){Dh||(Dh=!0,xy(!0),z1())}function Yp(){requestAnimationFrame(Yp);const s=Math.min(Zd.getDelta(),.1);He+=s,Jw(s);const t=s1(s,He,tt.pos);if(r1(s,tt.pos,t,_s,co),si>0&&(su.intensity+=si*.8,ht.background.r=Math.min(ht.background.r+si*.08,.25),ht.background.g=Math.min(ht.background.g+si*.08,.25),ht.background.b=Math.min(ht.background.b+si*.12,.35)),p1(s,Ci,t,Li,si,Ue,tt.pos,ke),bw(_s,co),Xy(_s,co,Ci),Uw(_s,co),!Dh){ln.position.set(0,ec,0),ln.rotation.order="YXZ",ln.rotation.y+=s*.08,ln.rotation.x=0;for(let e=0;e<Sn.length;e++){const n=Sn[e],i=Math.sin(He*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+i*.8)*we}for(let e=0;e<se.length;e++){const n=se[e];n.mat.emissiveIntensity=(1+Math.sin(He*.6+n.phase)*.5*1.5+.75)*we}Hp(s,He),Vp(s,He),Wp(s,He),Xp(s,He),sp(s,He),Gp(s,He),yp(s,He,tt.pos);for(let e=0;e<ri.length;e++)ri[e].popped||(ri[e].group.position.y=ri[e].floatY+Math.sin(He*.6+ri[e].phase)*ri[e].bobAmp);for(let e=0;e<ke.length;e++)for(let n=0;n<ke[e].pads.length;n++)ke[e].pads[n].mesh.position.y=.05+Math.sin(He*.8+ke[e].pads[n].phase)*.015;for(let e=0;e<In.length;e++){const n=In[e],i=Math.sin(He*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(He*.8+n.phase)*.3,n.glowMat.opacity=.3+i*.4}Nf();return}Ny(s),Y1(s,He),xp(s,He),Tw(s),ln.position.copy(tt.pos),ln.position.y+=op,ln.rotation.order="YXZ",ln.rotation.y=pr,ln.rotation.x=ws,D1(s,tt.pos),Nf()}try{ah(0,0,5),Ay(),Kw({scene:ht,moon:Vn,moon2:Wn,hemiLight:su,playerLight:ou}),B1();const s=by();Dy(ie,$a),Uy(Vf),Ly(t=>{let e=!1;for(let n=0;n<ke.length;n++){const i=ke[n].x-tt.pos.x,o=ke[n].z-tt.pos.z;if(i*i+o*o<16){e=!0;break}}g1(t,e),Math.random()<.4&&Vf(tt.pos.x,tt.pos.z,1)},()=>x1(),t=>_1(t)),i1(),o1(),vw(150),ww(60),my(),Ew(Kv),Rw(20),Wy(40),Iw(30),Nw(50),pw(),xw(),_w(),d1(),A1(),L1(),U1(),Yw({orbs:In,obeliskGroup:lw(),obeliskMat:hw(),obeliskGlowMat:uw(),pinnacleOrb:fw(),pinnacleRings:dw(),moatMesh:mw(),moatMat:gw(),rainbowArcs:gr,player:tt,makeLaser:Ow,orbHudEl:N1(),deers:Be,puffs:Rn,jellies:oi,moths:Po,trees:ie,groundMesh:s}),gy(q1);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*ae*.7,i=Math.cos(e)*n,o=Math.sin(e)*n;va(i,$t(i,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+ie.length+" mush="+Sn.length+" crystals="+se.length+" orbs="+In.length+" creatures="+(oi.length+Rn.length+Be.length+Po.length)+" wisps="+ja.length+" dandelions="+lr.length+" fairyRings="+ci.length+" bubbles="+ri.length+" ponds="+ke.length+" scene="+ht.children.length),Yp()}catch(s){console.error("INIT FAILED:",s),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(s.stack||s.message)+"</pre></div>"}
