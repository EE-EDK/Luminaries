(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="172",hd=0,ah=1,ud=2,Lu=1,Du=2,Qn=3,Mi=0,je=1,Ht=2,si=0,Ms=1,fc=2,ch=3,lh=4,fd=5,Bi=100,dd=101,pd=102,md=103,gd=104,_d=200,xd=201,vd=202,Md=203,dc=204,pc=205,yd=206,wd=207,Sd=208,Ed=209,bd=210,Td=211,Ad=212,Cd=213,Rd=214,mc=0,gc=1,_c=2,As=3,xc=4,vc=5,Mc=6,yc=7,Uu=0,Pd=1,Id=2,vi=0,Ld=1,Dd=2,Ud=3,Nu=4,Nd=5,Fd=6,Od=7,Fu=300,Cs=301,Rs=302,wc=303,Sc=304,ta=306,Pr=1e3,Gi=1001,Ec=1002,xn=1003,zd=1004,zo=1005,Hn=1006,la=1007,Hi=1008,ai=1009,Ou=1010,zu=1011,Mo=1012,Rl=1013,qi=1014,Vn=1015,oi=1016,Pl=1017,Il=1018,Ps=1020,Bu=35902,ku=1021,Gu=1022,Un=1023,Hu=1024,Vu=1025,ys=1026,Is=1027,Ll=1028,Dl=1029,Wu=1030,Ul=1031,Nl=1033,vr=33776,Mr=33777,yr=33778,wr=33779,bc=35840,Tc=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Ic=37496,Lc=37808,Dc=37809,Uc=37810,Nc=37811,Fc=37812,Oc=37813,zc=37814,Bc=37815,kc=37816,Gc=37817,Hc=37818,Vc=37819,Wc=37820,Xc=37821,Sr=36492,Yc=36494,qc=36495,Xu=36283,Zc=36284,$c=36285,Kc=36286,Bd=3200,kd=3201,Yu=0,Gd=1,gi="",Je="srgb",Ls="srgb-linear",Ir="linear",ae="srgb",ts=7680,hh=519,Hd=512,Vd=513,Wd=514,qu=515,Xd=516,Yd=517,qd=518,Zd=519,uh=35044,bn=35048,fh="300 es",ii=2e3,Lr=2001;class zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,Jc=180/Math.PI;function Bs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Yt(s,t,e){return Math.max(t,Math.min(e,s))}function $d(s,t){return(s%t+t)%t}function ua(s,t,e){return(1-e)*s+e*t}function Xs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,o,r,a,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=i[0],m=i[3],d=i[6],y=i[1],x=i[4],_=i[7],T=i[2],b=i[5],E=i[8];return o[0]=r*v+a*y+c*T,o[3]=r*m+a*x+c*b,o[6]=r*d+a*_+c*E,o[1]=l*v+h*y+u*T,o[4]=l*m+h*x+u*b,o[7]=l*d+h*_+u*E,o[2]=f*v+p*y+g*T,o[5]=f*m+p*x+g*b,o[8]=f*d+p*_+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,p=l*o-r*c,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*r)*v,t[3]=f*v,t[4]=(h*e-i*c)*v,t[5]=(i*o-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Gt;function Zu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kd(){const s=Dr("canvas");return s.style.display="block",s}const dh={};function gs(s){s in dh||(dh[s]=!0,console.warn(s))}function Jd(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function jd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ph=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tp(){const s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ae&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Ir:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ls]:{primaries:t,whitePoint:n,transfer:Ir,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),s}const ee=tp();function ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class ep{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=Dr("canvas")),es.width=t.width,es.height=t.height;const n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=ri(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let np=0;class $u{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(da(i[r].image)):o.push(da(i[r]))}else o=da(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ep.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ip=0;class ke extends zs{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Gi,i=Gi,o=Hn,r=Hi,a=Un,c=ai,l=ke.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Bs(),this.name="",this.source=new $u(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Fu;ke.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(p+1)/2,T=(d+1)/2,b=(h+f)/4,E=(u+v)/4,C=(g+m)/4;return x>_&&x>T?x<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(x),i=b/n,o=E/n):_>T?_<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(_),n=b/i,o=C/i):T<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(T),n=E/o,i=C/o),this.set(n,i,o,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sp extends zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new $u(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends sp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ku extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class op extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=o[r+0],p=o[r+1],g=o[r+2],v=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*v,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const T=Math.sqrt(x),b=Math.atan2(T,d*y);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const _=a*y;if(c=c*m+f*_,l=l*m+p*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=o[r],f=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(o/2),f=c(n/2),p=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(o+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-i)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=i+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new U,gh=new Po;class Ji{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Pn):Pn.fromBufferAttribute(o,r),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(t.matrixWorld),this.union(Bo)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),ko.subVectors(this.max,Ys),ns.subVectors(t.a,Ys),is.subVectors(t.b,Ys),ss.subVectors(t.c,Ys),ci.subVectors(is,ns),li.subVectors(ss,is),Ei.subVectors(ns,ss);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Ei.z,Ei.y,ci.z,0,-ci.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-ci.y,ci.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!ma(e,ns,is,ss,ko)||(e=[1,0,0,0,1,0,0,0,1],!ma(e,ns,is,ss,ko))?!1:(Go.crossVectors(ci,li),e=[Go.x,Go.y,Go.z],ma(e,ns,is,ss,ko))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zn=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,Bo=new Ji,ns=new U,is=new U,ss=new U,ci=new U,li=new U,Ei=new U,Ys=new U,ko=new U,Go=new U,bi=new U;function ma(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){bi.fromArray(s,o);const a=i.x*Math.abs(bi.x)+i.y*Math.abs(bi.y)+i.z*Math.abs(bi.z),c=t.dot(bi),l=e.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const rp=new Ji,qs=new U,ga=new U;class ks{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rp.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);const e=qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(ga)),this.expandByPoint(qs.copy(t.center).sub(ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new U,_a=new U,Ho=new U,hi=new U,xa=new U,Vo=new U,va=new U;class Ju{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_a.copy(t).add(e).multiplyScalar(.5),Ho.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(_a);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ho),a=hi.dot(this.direction),c=-hi.dot(Ho),l=hi.lengthSq(),h=Math.abs(1-r*r);let u,f,p,g;if(h>0)if(u=r*c-a,f=r*a-c,g=o*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_a).addScaledVector(Ho,f),p}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,o){xa.subVectors(e,t),Vo.subVectors(n,t),va.crossVectors(xa,Vo);let r=this.direction.dot(va),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;hi.subVectors(this.origin,t);const c=a*this.direction.dot(Vo.crossVectors(hi,Vo));if(c<0)return null;const l=a*this.direction.dot(xa.cross(hi));if(l<0||c+l>r)return null;const h=-a*hi.dot(va);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,i,o,r,a,c,l,h,u,f,p,g,v,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,u,f,p,g,v,m)}set(t,e,n,i,o,r,a,c,l,h,u,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=o,d[5]=r,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/os.setFromMatrixColumn(t,0).length(),o=1/os.setFromMatrixColumn(t,1).length(),r=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,p=r*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,v=l*u;e[0]=f+v*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=v+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,v=l*u;e[0]=f-v*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=v-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,p=r*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,p=r*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=r*c,p=r*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ap,t,cp)}lookAt(t,e,n){const i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ui.crossVectors(n,fn),ui.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ui.crossVectors(n,fn)),ui.normalize(),Wo.crossVectors(fn,ui),i[0]=ui.x,i[4]=Wo.x,i[8]=fn.x,i[1]=ui.y,i[5]=Wo.y,i[9]=fn.y,i[2]=ui.z,i[6]=Wo.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],y=n[3],x=n[7],_=n[11],T=n[15],b=i[0],E=i[4],C=i[8],w=i[12],M=i[1],P=i[5],D=i[9],N=i[13],G=i[2],W=i[6],q=i[10],J=i[14],Y=i[3],ct=i[7],ft=i[11],Tt=i[15];return o[0]=r*b+a*M+c*G+l*Y,o[4]=r*E+a*P+c*W+l*ct,o[8]=r*C+a*D+c*q+l*ft,o[12]=r*w+a*N+c*J+l*Tt,o[1]=h*b+u*M+f*G+p*Y,o[5]=h*E+u*P+f*W+p*ct,o[9]=h*C+u*D+f*q+p*ft,o[13]=h*w+u*N+f*J+p*Tt,o[2]=g*b+v*M+m*G+d*Y,o[6]=g*E+v*P+m*W+d*ct,o[10]=g*C+v*D+m*q+d*ft,o[14]=g*w+v*N+m*J+d*Tt,o[3]=y*b+x*M+_*G+T*Y,o[7]=y*E+x*P+_*W+T*ct,o[11]=y*C+x*D+_*q+T*ft,o[15]=y*w+x*N+_*J+T*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+o*c*u-i*l*u-o*a*f+n*l*f+i*a*p-n*c*p)+v*(+e*c*p-e*l*f+o*r*f-i*r*p+i*l*h-o*c*h)+m*(+e*l*u-e*a*p-o*r*u+n*r*p+o*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*r*u-n*r*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],y=u*m*l-v*f*l+v*c*p-a*m*p-u*c*d+a*f*d,x=g*f*l-h*m*l-g*c*p+r*m*p+h*c*d-r*f*d,_=h*v*l-g*u*l+g*a*p-r*v*p-h*a*d+r*u*d,T=g*u*c-h*v*c-g*a*f+r*v*f+h*a*m-r*u*m,b=e*y+n*x+i*_+o*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=y*E,t[1]=(v*f*o-u*m*o-v*i*p+n*m*p+u*i*d-n*f*d)*E,t[2]=(a*m*o-v*c*o+v*i*l-n*m*l-a*i*d+n*c*d)*E,t[3]=(u*c*o-a*f*o-u*i*l+n*f*l+a*i*p-n*c*p)*E,t[4]=x*E,t[5]=(h*m*o-g*f*o+g*i*p-e*m*p-h*i*d+e*f*d)*E,t[6]=(g*c*o-r*m*o-g*i*l+e*m*l+r*i*d-e*c*d)*E,t[7]=(r*f*o-h*c*o+h*i*l-e*f*l-r*i*p+e*c*p)*E,t[8]=_*E,t[9]=(g*u*o-h*v*o-g*n*p+e*v*p+h*n*d-e*u*d)*E,t[10]=(r*v*o-g*a*o+g*n*l-e*v*l-r*n*d+e*a*d)*E,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*p-e*a*p)*E,t[12]=T*E,t[13]=(h*v*i-g*u*i+g*n*f-e*v*f-h*n*m+e*u*m)*E,t[14]=(g*a*i-r*v*i-g*n*c+e*v*c+r*n*m-e*a*m)*E,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,p=o*h,g=o*u,v=r*h,m=r*u,d=a*u,y=c*l,x=c*h,_=c*u,T=n.x,b=n.y,E=n.z;return i[0]=(1-(v+d))*T,i[1]=(p+_)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(p-_)*b,i[5]=(1-(f+d))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(g+x)*E,i[9]=(m-y)*E,i[10]=(1-(f+v))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=os.set(i[0],i[1],i[2]).length();const r=os.set(i[4],i[5],i[6]).length(),a=os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],In.copy(this);const l=1/o,h=1/r,u=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=ii){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===ii)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Lr)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=ii){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(r-o),f=(e+t)*l,p=(n+i)*h;let g,v;if(a===ii)g=(r+o)*u,v=-2*u;else if(a===Lr)g=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new U,In=new ue,ap=new U(0,0,0),cp=new U(1,1,1),ui=new U,Wo=new U,fn=new U,_h=new ue,xh=new Po;class Wn{constructor(t=0,e=0,n=0,i=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xh.setFromEuler(this),this.setFromQuaternion(xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class ju{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lp=0;const vh=new U,rs=new Po,Kn=new ue,Xo=new U,Zs=new U,hp=new U,up=new Po,Mh=new U(1,0,0),yh=new U(0,1,0),wh=new U(0,0,1),Sh={type:"added"},fp={type:"removed"},as={type:"childadded",child:null},Ma={type:"childremoved",child:null};class _e extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new U,e=new Wn,n=new Po,i=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Gt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Mh,t)}rotateY(t){return this.rotateOnAxis(yh,t)}rotateZ(t){return this.rotateOnAxis(wh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mh,t)}translateY(t){return this.translateOnAxis(yh,t)}translateZ(t){return this.translateOnAxis(wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xo.copy(t):Xo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Zs,Xo,this.up):Kn.lookAt(Xo,Zs,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(Kn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fp),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t,hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new U(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new U,Jn=new U,ya=new U,jn=new U,cs=new U,ls=new U,Eh=new U,wa=new U,Sa=new U,Ea=new U,ba=new le,Ta=new le,Aa=new le;class Dn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Ln.subVectors(i,e),Jn.subVectors(n,e),ya.subVectors(t,e);const r=Ln.dot(Ln),a=Ln.dot(Jn),c=Ln.dot(ya),l=Jn.dot(Jn),h=Jn.dot(ya),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(r*h-a*c)*f;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,jn.x),c.addScaledVector(r,jn.y),c.addScaledVector(a,jn.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return ba.setScalar(0),Ta.setScalar(0),Aa.setScalar(0),ba.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,n),Aa.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ba,o.x),r.addScaledVector(Ta,o.y),r.addScaledVector(Aa,o.z),r}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),Jn.subVectors(t,e),Ln.cross(Jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Ln.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;cs.subVectors(i,n),ls.subVectors(o,n),wa.subVectors(t,n);const c=cs.dot(wa),l=ls.dot(wa);if(c<=0&&l<=0)return e.copy(n);Sa.subVectors(t,i);const h=cs.dot(Sa),u=ls.dot(Sa);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(cs,r);Ea.subVectors(t,o);const p=cs.dot(Ea),g=ls.dot(Ea);if(g>=0&&p<=g)return e.copy(o);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ls,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Eh.subVectors(o,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Eh,a);const d=1/(m+v+f);return r=v*d,a=f*d,e.copy(n).addScaledVector(cs,r).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Ca(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class at{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=$d(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Ca(r,o,t+1/3),this.g=Ca(r,o,t),this.b=Ca(r,o,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ee.fromWorkingColorSpace(Be.copy(this),t),Math.round(Yt(Be.r*255,0,255))*65536+Math.round(Yt(Be.g*255,0,255))*256+Math.round(Yt(Be.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,o=Be.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Je){ee.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Yo);const n=ua(fi.h,Yo.h,e),i=ua(fi.s,Yo.s,e),o=ua(fi.l,Yo.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new at;at.NAMES=Qu;let dp=0;class Gs extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Ms,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class K extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new U,qo=new ht;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array),o=tn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uh&&(t.usage=this.usage),t}}class tf extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ef extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pp=0;const wn=new ue,Ra=new _e,hs=new U,dn=new Ji,$s=new Ji,Le=new U;class Ie extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zu(t)?ef:tf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Gt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];dn.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(dn.min,$s.min),dn.expandByPoint(Le),Le.addVectors(dn.max,$s.max),dn.expandByPoint(Le)):(dn.expandByPoint($s.min),dn.expandByPoint($s.max))}dn.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Le.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),Le.add(hs)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new U,c[C]=new U;const l=new U,h=new U,u=new U,f=new ht,p=new ht,g=new ht,v=new U,m=new U;function d(C,w,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),f.fromBufferAttribute(o,C),p.fromBufferAttribute(o,w),g.fromBufferAttribute(o,M),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(v),a[w].add(v),a[M].add(v),c[C].add(m),c[w].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,w=y.length;C<w;++C){const M=y[C],P=M.start,D=M.count;for(let N=P,G=P+D;N<G;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const x=new U,_=new U,T=new U,b=new U;function E(C){T.fromBufferAttribute(i,C),b.copy(T);const w=a[C];x.copy(w),x.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(b,w);const P=_.dot(c[C])<0?-1:1;r.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,w=y.length;C<w;++C){const M=y[C],P=M.start,D=M.count;for(let N=P,G=P+D;N<G;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new U,o=new U,r=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new En(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bh=new ue,Ti=new Ju,Zo=new ks,Th=new U,$o=new U,Ko=new U,Jo=new U,Pa=new U,jo=new U,Ah=new U,Qo=new U;class I extends _e{constructor(t=new Ie,e=new K){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){jo.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Pa.fromBufferAttribute(u,t),r?jo.addScaledVector(Pa,h):jo.addScaledVector(Pa.sub(e),h))}e.add(jo)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(o),Ti.copy(t.ray).recast(t.near),!(Zo.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Zo,Th)===null||Ti.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(bh.copy(o).invert(),Ti.copy(t.ray).applyMatrix4(bh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=r[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,T=x;_<T;_+=3){const b=a.getX(_),E=a.getX(_+1),C=a.getX(_+2);i=tr(this,d,t,n,l,h,u,b,E,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const y=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);i=tr(this,r,t,n,l,h,u,y,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=r[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,T=x;_<T;_+=3){const b=_,E=_+1,C=_+2;i=tr(this,d,t,n,l,h,u,b,E,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const y=m,x=m+1,_=m+2;i=tr(this,r,t,n,l,h,u,y,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function mp(s,t,e,n,i,o,r,a){let c;if(t.side===je?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Mi,a),c===null)return null;Qo.copy(a),Qo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Qo);return l<e.near||l>e.far?null:{distance:l,point:Qo.clone(),object:s}}function tr(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,$o),s.getVertexPosition(c,Ko),s.getVertexPosition(l,Jo);const h=mp(s,t,e,n,$o,Ko,Jo,Ah);if(h){const u=new U;Dn.getBarycoord(Ah,$o,Ko,Jo,u),i&&(h.uv=Dn.getInterpolatedAttribute(i,a,c,l,u,new ht)),o&&(h.uv1=Dn.getInterpolatedAttribute(o,a,c,l,u,new ht)),r&&(h.normal=Dn.getInterpolatedAttribute(r,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};Dn.getNormal($o,Ko,Jo,f.normal),h.face=f,h.barycoord=u}return h}class Io extends Ie{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(v,m,d,y,x,_,T,b,E,C,w){const M=_/E,P=T/C,D=_/2,N=T/2,G=b/2,W=E+1,q=C+1;let J=0,Y=0;const ct=new U;for(let ft=0;ft<q;ft++){const Tt=ft*P-N;for(let Bt=0;Bt<W;Bt++){const fe=Bt*M-D;ct[v]=fe*y,ct[m]=Tt*x,ct[d]=G,l.push(ct.x,ct.y,ct.z),ct[v]=0,ct[m]=0,ct[d]=b>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Bt/E),u.push(1-ft/C),J+=1}}for(let ft=0;ft<C;ft++)for(let Tt=0;Tt<E;Tt++){const Bt=f+Tt+W*ft,fe=f+Tt+W*(ft+1),tt=f+(Tt+1)+W*(ft+1),lt=f+(Tt+1)+W*ft;c.push(Bt,fe,lt),c.push(fe,tt,lt),Y+=6}a.addGroup(p,Y,w),p+=Y,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const n=Ds(s[e]);for(const i in n)t[i]=n[i]}return t}function gp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function nf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Ur={clone:Ds,merge:Ve};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sf extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new U,Ch=new ht,Rh=new ht;class pn extends sf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jc*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Rh),e.subVectors(Rh,Ch)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ha*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,fs=1;class vp extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(us,fs,t,e);i.layers=this.layers,this.add(i);const o=new pn(us,fs,t,e);o.layers=this.layers,this.add(o);const r=new pn(us,fs,t,e);r.layers=this.layers,this.add(r);const a=new pn(us,fs,t,e);a.layers=this.layers,this.add(a);const c=new pn(us,fs,t,e);c.layers=this.layers,this.add(c);const l=new pn(us,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class of extends ke{constructor(t,e,n,i,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mp extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new of(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Io(5,5,5),o=new cn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:si});o.uniforms.tEquirect.value=e;const r=new I(i,o),a=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Hn),new vp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}class Fl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(t),this.density=e}clone(){return new Fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yp extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wp extends ke{constructor(t=null,e=1,n=1,i,o,r,a,c,l=xn,h=xn,u,f){super(null,r,a,c,l,h,i,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi extends En{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new ue,Ph=new ue,er=[],Ih=new Ji,Sp=new ue,Ks=new I,Js=new ks;class Hs extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Ih.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Ih)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ks),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Js.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,ds),Ph.multiplyMatrices(n,ds),Ks.matrixWorld=Ph,Ks.raycast(t,er);for(let r=0,a=er.length;r<a;r++){const c=er[r];c.instanceId=o,c.object=this,e.push(c)}er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wp(new Float32Array(i*this.count),i,this.count,Ll,Vn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Ia=new U,Ep=new U,bp=new Gt;class Li{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ia.subVectors(n,e).cross(Ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||bp.getNormalMatrix(t),i=this.coplanarPoint(Ia).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new ks,nr=new U;class Ol{constructor(t=new Li,e=new Li,n=new Li,i=new Li,o=new Li,r=new Li){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],v=i[10],m=i[11],d=i[12],y=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-o,f-l,m-p,_-d).normalize(),n[1].setComponents(c+o,f+l,m+p,_+d).normalize(),n[2].setComponents(c+r,f+h,m+g,_+y).normalize(),n[3].setComponents(c-r,f-h,m-g,_-y).normalize(),n[4].setComponents(c-a,f-u,m-v,_-x).normalize(),e===ii)n[5].setComponents(c+a,f+u,m+v,_+x).normalize();else if(e===Lr)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(nr.x=i.normal.x>0?t.max.x:t.min.x,nr.y=i.normal.y>0?t.max.y:t.min.y,nr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rf extends Gs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nr=new U,Fr=new U,Lh=new ue,js=new Ju,ir=new ks,La=new U,Dh=new U;class Tp extends _e{constructor(t=new Ie,e=new rf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)Nr.fromBufferAttribute(e,i-1),Fr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Nr.distanceTo(Fr);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=o,t.ray.intersectsSphere(ir)===!1)return;Lh.copy(i).invert(),js.copy(t.ray).applyMatrix4(Lh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=l){const d=h.getX(v),y=h.getX(v+1),x=sr(this,t,js,c,d,y);x&&e.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),d=sr(this,t,js,c,v,m);d&&e.push(d)}}else{const p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let v=p,m=g-1;v<m;v+=l){const d=sr(this,t,js,c,v,v+1);d&&e.push(d)}if(this.isLineLoop){const v=sr(this,t,js,c,g-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function sr(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(Nr.fromBufferAttribute(r,i),Fr.fromBufferAttribute(r,o),e.distanceSqToSegment(Nr,Fr,La,Dh)>n)return;La.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(La);if(!(c<t.near||c>t.far))return{distance:c,point:Dh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Uh=new U,Nh=new U;class Ap extends Tp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)Uh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uh.distanceTo(Nh);t.setAttribute("lineDistance",new qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class he extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}class zl extends ke{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class af extends ke{constructor(t,e,n,i,o,r,a,c,l,h=ys){if(h!==ys&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ys&&(n=qi),n===void 0&&h===Is&&(n=Ps),super(null,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xn,this.minFilter=c!==void 0?c:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],f=n[i+1]-h,p=(r-h)/f;return(i+p)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new ht:new U);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],o=[],r=[],a=new U,c=new ue;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new U)}o[0]=new U,r[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Yt(i[p-1].dot(i[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(i[p],o[p])}if(e===!0){let p=Math.acos(Yt(o[0].dot(o[t]),-1,1));p/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bl extends Yn{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cp extends Bl{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function kl(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,p*=h,i(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const or=new U,Da=new kl,Ua=new kl,Na=new kl;class jc extends Yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(or.subVectors(i[0],i[1]).add(i[0]),l=or);const u=i[a%o],f=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(or.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=or),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Da.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),Ua.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),Na.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ua.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Na.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Da.calc(c),Ua.calc(c),Na.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Fh(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function Rp(s,t){const e=1-s;return e*e*t}function Pp(s,t){return 2*(1-s)*s*t}function Ip(s,t){return s*s*t}function po(s,t,e,n){return Rp(s,t)+Pp(s,e)+Ip(s,n)}function Lp(s,t){const e=1-s;return e*e*e*t}function Dp(s,t){const e=1-s;return 3*e*e*s*t}function Up(s,t){return 3*(1-s)*s*s*t}function Np(s,t){return s*s*s*t}function mo(s,t,e,n,i){return Lp(s,t)+Dp(s,e)+Up(s,n)+Np(s,i)}class cf extends Yn{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(mo(t,i.x,o.x,r.x,a.x),mo(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fp extends Yn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(mo(t,i.x,o.x,r.x,a.x),mo(t,i.y,o.y,r.y,a.y),mo(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lf extends Yn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hf extends Yn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends Yn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(po(t,i.x,o.x,r.x),po(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ff extends Yn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(po(t,i.x,o.x,r.x),po(t,i.y,o.y,r.y),po(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class df extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Fh(a,c.x,l.x,h.x,u.x),Fh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Qc=Object.freeze({__proto__:null,ArcCurve:Cp,CatmullRomCurve3:jc,CubicBezierCurve:cf,CubicBezierCurve3:Fp,EllipseCurve:Bl,LineCurve:lf,LineCurve3:hf,QuadraticBezierCurve:uf,QuadraticBezierCurve3:ff,SplineCurve:df});class Op extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Qc[i.type]().fromJSON(i))}return this}}class Or extends Op{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lf(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new uf(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new cf(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new df(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new Bl(t,e,n,i,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Fe extends Ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new U,h=new ht;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class wt extends Ie{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],f=[],p=[];let g=0;const v=[],m=n/2;let d=0;y(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function y(){const _=new U,T=new U;let b=0;const E=(e-t)/n;for(let C=0;C<=o;C++){const w=[],M=C/o,P=M*(e-t)+t;for(let D=0;D<=i;D++){const N=D/i,G=N*c+a,W=Math.sin(G),q=Math.cos(G);T.x=P*W,T.y=-M*n+m,T.z=P*q,u.push(T.x,T.y,T.z),_.set(W,E,q).normalize(),f.push(_.x,_.y,_.z),p.push(N,1-M),w.push(g++)}v.push(w)}for(let C=0;C<i;C++)for(let w=0;w<o;w++){const M=v[w][C],P=v[w+1][C],D=v[w+1][C+1],N=v[w][C+1];(t>0||w!==0)&&(h.push(M,P,N),b+=3),(e>0||w!==o-1)&&(h.push(P,D,N),b+=3)}l.addGroup(d,b,0),d+=b}function x(_){const T=g,b=new ht,E=new U;let C=0;const w=_===!0?t:e,M=_===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let D=0;D<=i;D++){const G=D/i*c+a,W=Math.cos(G),q=Math.sin(G);E.x=w*q,E.y=m*M,E.z=w*W,u.push(E.x,E.y,E.z),f.push(0,M,0),b.x=W*.5+.5,b.y=q*.5*M+.5,p.push(b.x,b.y),g++}for(let D=0;D<i;D++){const N=T+D,G=P+D;_===!0?h.push(G,G+1,N):h.push(G+1,G,N),C+=3}l.addGroup(d,C,_===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xn extends wt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Xn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gl extends Ie{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),l(n),h(),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(o.slice(),3)),this.setAttribute("uv",new qt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new U,_=new U,T=new U;for(let b=0;b<e.length;b+=3)p(e[b+0],x),p(e[b+1],_),p(e[b+2],T),c(x,_,T,y)}function c(y,x,_,T){const b=T+1,E=[];for(let C=0;C<=b;C++){E[C]=[];const w=y.clone().lerp(_,C/b),M=x.clone().lerp(_,C/b),P=b-C;for(let D=0;D<=P;D++)D===0&&C===b?E[C][D]=w:E[C][D]=w.clone().lerp(M,D/P)}for(let C=0;C<b;C++)for(let w=0;w<2*(b-C)-1;w++){const M=Math.floor(w/2);w%2===0?(f(E[C][M+1]),f(E[C+1][M]),f(E[C][M])):(f(E[C][M+1]),f(E[C+1][M+1]),f(E[C+1][M]))}}function l(y){const x=new U;for(let _=0;_<o.length;_+=3)x.x=o[_+0],x.y=o[_+1],x.z=o[_+2],x.normalize().multiplyScalar(y),o[_+0]=x.x,o[_+1]=x.y,o[_+2]=x.z}function h(){const y=new U;for(let x=0;x<o.length;x+=3){y.x=o[x+0],y.y=o[x+1],y.z=o[x+2];const _=m(y)/2/Math.PI+.5,T=d(y)/Math.PI+.5;r.push(_,1-T)}g(),u()}function u(){for(let y=0;y<r.length;y+=6){const x=r[y+0],_=r[y+2],T=r[y+4],b=Math.max(x,_,T),E=Math.min(x,_,T);b>.9&&E<.1&&(x<.2&&(r[y+0]+=1),_<.2&&(r[y+2]+=1),T<.2&&(r[y+4]+=1))}}function f(y){o.push(y.x,y.y,y.z)}function p(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function g(){const y=new U,x=new U,_=new U,T=new U,b=new ht,E=new ht,C=new ht;for(let w=0,M=0;w<o.length;w+=9,M+=6){y.set(o[w+0],o[w+1],o[w+2]),x.set(o[w+3],o[w+4],o[w+5]),_.set(o[w+6],o[w+7],o[w+8]),b.set(r[M+0],r[M+1]),E.set(r[M+2],r[M+3]),C.set(r[M+4],r[M+5]),T.copy(y).add(x).add(_).divideScalar(3);const P=m(T);v(b,M+0,y,P),v(E,M+2,x,P),v(C,M+4,_,P)}}function v(y,x,_,T){T<0&&y.x===1&&(r[x]=y.x-1),_.x===0&&_.z===0&&(r[x]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gl(t.vertices,t.indices,t.radius,t.details)}}class tl extends Or{constructor(t){super(t),this.uuid=Bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Or().fromJSON(i))}return this}}const zp={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=pf(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,f,p;if(n&&(o=Vp(s,t,o,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return yo(o,r,e,a,c,p,0),r}};function pf(s,t,e,n,i){let o,r;if(i===t0(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Oh(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Oh(o,s[o],s[o+1],r);return r&&ea(r,r.next)&&(So(r),r=r.next),r}function Zi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ea(e,e.next)||ve(e.prev,e,e.next)===0)){if(So(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yo(s,t,e,n,i,o,r){if(!s)return;!r&&o&&Zp(s,n,i,o);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,o?kp(s,n,i,o):Bp(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),So(s),s=l.next,a=l.next;continue}if(s=l,s===a){r?r===1?(s=Gp(Zi(s),t,e),yo(s,t,e,n,i,o,2)):r===2&&Hp(s,t,e,n,i,o):yo(Zi(s),t,e,n,i,o,1);break}}}function Bp(s){const t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=i<o?i<r?i:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,f=i>o?i>r?i:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&xs(i,a,o,c,r,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kp(s,t,e,n){const i=s.prev,o=s,r=s.next;if(ve(i,o,r)>=0)return!1;const a=i.x,c=o.x,l=r.x,h=i.y,u=o.y,f=r.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=el(p,g,t,e,n),y=el(v,m,t,e,n);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=d&&_&&_.z<=y;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&xs(a,h,c,u,l,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==r&&xs(a,h,c,u,l,f,_.x,_.y)&&ve(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&xs(a,h,c,u,l,f,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==r&&xs(a,h,c,u,l,f,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Gp(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!ea(i,o)&&mf(i,n,n.next,o)&&wo(i,o)&&wo(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),So(n),So(n.next),n=s=o),n=n.next}while(n!==s);return Zi(n)}function Hp(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Jp(r,a)){let c=gf(r,a);r=Zi(r,r.next),c=Zi(c,c.next),yo(r,t,e,n,i,o,0),yo(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Vp(s,t,e,n){const i=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,l=pf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Kp(l));for(i.sort(Wp),o=0;o<i.length;o++)e=Xp(i[o],e);return e}function Wp(s,t){return s.x-t.x}function Xp(s,t){const e=Yp(s,t);if(!e)return t;const n=gf(e,s);return Zi(n,n.next),Zi(e,e.next)}function Yp(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&xs(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),wo(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&qp(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function qp(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function Zp(s,t,e,n){let i=s;do i.z===0&&(i.z=el(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,$p(i)}function $p(s){let t,e,n,i,o,r,a,c,l=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,l*=2}while(r>1);return s}function el(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Kp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function xs(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function Jp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!jp(s,t)&&(wo(s,t)&&wo(t,s)&&Qp(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||ea(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ea(s,t){return s.x===t.x&&s.y===t.y}function mf(s,t,e,n){const i=ar(ve(s,t,e)),o=ar(ve(s,t,n)),r=ar(ve(e,n,s)),a=ar(ve(e,n,t));return!!(i!==o&&r!==a||i===0&&rr(s,e,t)||o===0&&rr(s,n,t)||r===0&&rr(e,s,n)||a===0&&rr(e,t,n))}function rr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ar(s){return s>0?1:s<0?-1:0}function jp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&mf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function wo(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function Qp(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function gf(s,t){const e=new nl(s.i,s.x,s.y),n=new nl(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Oh(s,t,e,n){const i=new nl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function So(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function nl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function t0(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class go{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return go.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];zh(t),Bh(n,t);let r=t.length;e.forEach(zh);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Bh(n,e[c]);const a=zp.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function zh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Bh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Wi extends Gl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wi(t.radius,t.detail)}}class we extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const y=d*f-r;for(let x=0;x<l;x++){const _=x*u-o;g.push(_,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){const x=y+l*d,_=y+l*(d+1),T=y+1+l*(d+1),b=y+1+l*d;p.push(x,_,b),p.push(_,T,b)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.widthSegments,t.heightSegments)}}class zr extends Ie{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,p=new U,g=new ht;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const d=o+m/n*r;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<i;v++){const m=v*(n+1);for(let d=0;d<n;d++){const y=d+m,x=y,_=y+n+1,T=y+n+2,b=y+1;a.push(x,_,b),a.push(_,T,b)}}this.setIndex(a),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Br extends Ie{constructor(t=new tl([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new qt(i,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(r,2));function l(h){const u=i.length/3,f=h.extractPoints(e);let p=f.shape;const g=f.holes;go.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const y=g[m];go.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=go.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const y=g[m];p=p.concat(y)}for(let m=0,d=p.length;m<d;m++){const y=p[m];i.push(y.x,y.y,0),o.push(0,0,1),r.push(y.x,y.y)}for(let m=0,d=v.length;m<d;m++){const y=v[m],x=y[0]+u,_=y[1]+u,T=y[2]+u;n.push(x,_,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return e0(e,t)}static fromJSON(t,e){const n=[];for(let i=0,o=t.shapes.length;i<o;i++){const r=e[t.shapes[i]];n.push(r)}return new Br(n,t.curveSegments)}}function e0(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class $ extends Ie{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new U,f=new U,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const y=[],x=d/n;let _=0;d===0&&r===0?_=.5/e:d===n&&c===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const b=T/e;u.x=-t*Math.cos(i+b*o)*Math.sin(r+x*a),u.y=t*Math.cos(r+x*a),u.z=t*Math.sin(i+b*o)*Math.sin(r+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(b+_,1-x),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const x=h[d][y+1],_=h[d][y],T=h[d+1][y],b=h[d+1][y+1];(d!==0||r>0)&&p.push(x,_,b),(d!==n-1||c<Math.PI)&&p.push(_,T,b)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ee extends Ie{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new U,u=new U,f=new U;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*o,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,y=(i+1)*p+g;r.push(v,m,y),r.push(m,d,y)}this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Us extends Ie{constructor(t=new ff(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new U,c=new U,l=new ht;let h=new U;const u=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(p,2));function v(){for(let x=0;x<e;x++)m(x);m(o===!1?e:0),y(),d()}function m(x){h=t.getPointAt(x/e,h);const _=r.normals[x],T=r.binormals[x];for(let b=0;b<=i;b++){const E=b/i*Math.PI*2,C=Math.sin(E),w=-Math.cos(E);c.x=w*_.x+C*T.x,c.y=w*_.y+C*T.y,c.z=w*_.z+C*T.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let x=1;x<=e;x++)for(let _=1;_<=i;_++){const T=(i+1)*(x-1)+(_-1),b=(i+1)*x+(_-1),E=(i+1)*x+_,C=(i+1)*(x-1)+_;g.push(T,b,C),g.push(b,E,C)}}function y(){for(let x=0;x<=e;x++)for(let _=0;_<=i;_++)l.x=x/e,l.y=_/i,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Us(new Qc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Q extends Gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class n0 extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class i0 extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hl extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class s0 extends Hl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fa=new ue,kh=new U,Gh=new U;class _f{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(kh),Gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gh),e.updateMatrixWorld(),Fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hh=new ue,Qs=new U,Oa=new U;class o0 extends _f{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qs),Oa.copy(n.position),Oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Oa),n.updateMatrixWorld(),i.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh)}}class ji extends Hl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new o0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vl extends sf{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class r0 extends _f{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class na extends Hl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new r0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class a0 extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vh(){return performance.now()}function Wh(s,t,e,n){const i=c0(n);switch(e){case ku:return s*t;case Hu:return s*t;case Vu:return s*t*2;case Ll:return s*t/i.components*i.byteLength;case Dl:return s*t/i.components*i.byteLength;case Wu:return s*t*2/i.components*i.byteLength;case Ul:return s*t*2/i.components*i.byteLength;case Gu:return s*t*3/i.components*i.byteLength;case Un:return s*t*4/i.components*i.byteLength;case Nl:return s*t*4/i.components*i.byteLength;case vr:case Mr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yr:case wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Cc:return Math.max(s,16)*Math.max(t,8)/4;case bc:case Ac:return Math.max(s,8)*Math.max(t,8)/2;case Rc:case Pc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case zc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Sr:case Yc:case qc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xu:case Zc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $c:case Kc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c0(s){switch(s){case ai:case Ou:return{byteLength:1,components:1};case Mo:case zu:case oi:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case qi:case Rl:case Vn:return{byteLength:4,components:1};case Bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vf(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function l0(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,D0=`#define PI 3.141592653589793
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
} // validated`,U0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N0=`vec3 transformedNormal = objectNormal;
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,j0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
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
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
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
#endif`,cm=`struct PhysicalMaterial {
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
}`,lm=`
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vm=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
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
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zm=`float getShadowMask() {
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
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`#include <common>
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
}`,gg=`#if DEPTH_PACKING == 3200
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
}`,_g=`#define DISTANCE
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
}`,xg=`#define DISTANCE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Eg=`uniform vec3 diffuse;
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
}`,bg=`#define LAMBERT
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
}`,Tg=`#define LAMBERT
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
}`,Ag=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Rg=`#define NORMAL
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
}`,Pg=`#define NORMAL
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
}`,Ig=`#define PHONG
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
}`,Lg=`#define PHONG
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
}`,Dg=`#define STANDARD
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
}`,Ug=`#define STANDARD
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
}`,Ng=`#define TOON
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
}`,Fg=`#define TOON
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
}`,Og=`uniform float size;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,kg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:f0,alphamap_pars_fragment:d0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:_0,batching_pars_vertex:x0,batching_vertex:v0,begin_vertex:M0,beginnormal_vertex:y0,bsdfs:w0,iridescence_fragment:S0,bumpmap_pars_fragment:E0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:C0,color_fragment:R0,color_pars_fragment:P0,color_pars_vertex:I0,color_vertex:L0,common:D0,cube_uv_reflection_fragment:U0,defaultnormal_vertex:N0,displacementmap_pars_vertex:F0,displacementmap_vertex:O0,emissivemap_fragment:z0,emissivemap_pars_fragment:B0,colorspace_fragment:k0,colorspace_pars_fragment:G0,envmap_fragment:H0,envmap_common_pars_fragment:V0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:nm,envmap_vertex:Y0,fog_vertex:q0,fog_pars_vertex:Z0,fog_fragment:$0,fog_pars_fragment:K0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:j0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:tm,lights_pars_begin:em,lights_toon_fragment:im,lights_toon_pars_fragment:sm,lights_phong_fragment:om,lights_phong_pars_fragment:rm,lights_physical_fragment:am,lights_physical_pars_fragment:cm,lights_fragment_begin:lm,lights_fragment_maps:hm,lights_fragment_end:um,logdepthbuf_fragment:fm,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:_m,map_particle_fragment:xm,map_particle_pars_fragment:vm,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:ym,morphinstance_vertex:wm,morphcolor_vertex:Sm,morphnormal_vertex:Em,morphtarget_pars_vertex:bm,morphtarget_vertex:Tm,normal_fragment_begin:Am,normal_fragment_maps:Cm,normal_pars_fragment:Rm,normal_pars_vertex:Pm,normal_vertex:Im,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Fm,opaque_fragment:Om,packing:zm,premultiplied_alpha_fragment:Bm,project_vertex:km,dithering_fragment:Gm,dithering_pars_fragment:Hm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:Ym,shadowmap_vertex:qm,shadowmask_pars_fragment:Zm,skinbase_vertex:$m,skinning_pars_vertex:Km,skinning_vertex:Jm,skinnormal_vertex:jm,specularmap_fragment:Qm,specularmap_pars_fragment:tg,tonemapping_fragment:eg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:sg,uv_pars_fragment:og,uv_pars_vertex:rg,uv_vertex:ag,worldpos_vertex:cg,background_vert:lg,background_frag:hg,backgroundCube_vert:ug,backgroundCube_frag:fg,cube_vert:dg,cube_frag:pg,depth_vert:mg,depth_frag:gg,distanceRGBA_vert:_g,distanceRGBA_frag:xg,equirect_vert:vg,equirect_frag:Mg,linedashed_vert:yg,linedashed_frag:wg,meshbasic_vert:Sg,meshbasic_frag:Eg,meshlambert_vert:bg,meshlambert_frag:Tg,meshmatcap_vert:Ag,meshmatcap_frag:Cg,meshnormal_vert:Rg,meshnormal_frag:Pg,meshphong_vert:Ig,meshphong_frag:Lg,meshphysical_vert:Dg,meshphysical_frag:Ug,meshtoon_vert:Ng,meshtoon_frag:Fg,points_vert:Og,points_frag:zg,shadow_vert:Bg,shadow_frag:kg,sprite_vert:Gg,sprite_frag:Hg},ut={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},kn={basic:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new at(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ve([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ve([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new at(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ve([ut.points,ut.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ve([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ve([ut.common,ut.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ve([ut.sprite,ut.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ve([ut.common,ut.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ve([ut.lights,ut.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};kn.physical={uniforms:Ve([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const cr={r:0,b:0,g:0},Ci=new Wn,Vg=new ue;function Wg(s,t,e,n,i,o,r){const a=new at(0);let c=o===!0?0:1,l,h,u=null,f=0,p=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const T=g(x);T===null?d(a,c):T&&T.isColor&&(d(T,1),_=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){const T=g(_);T&&(T.isCubeTexture||T.mapping===ta)?(h===void 0&&(h=new I(new Io(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ds(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ci.copy(_.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(Ci)),h.material.toneMapped=ee.getTransfer(T.colorSpace)!==ae,(u!==T||f!==T.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,p=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new I(new we(2,2),new cn({name:"BackgroundMaterial",uniforms:Ds(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ee.getTransfer(T.colorSpace)!==ae,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,p=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function d(x,_){x.getRGB(cr,nf(s)),n.buffers.color.setClear(cr.r,cr.g,cr.b,_,r)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(a,c)},render:v,addToRenderList:m,dispose:y}}function Xg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let o=i,r=!1;function a(M,P,D,N,G){let W=!1;const q=u(N,D,P);o!==q&&(o=q,l(o.object)),W=p(M,N,D,G),W&&g(M,N,D,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,_(M,P,D,N),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,D){const N=D.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let W=G[P.id];W===void 0&&(W={},G[P.id]=W);let q=W[N];return q===void 0&&(q=f(c()),W[N]=q),q}function f(M){const P=[],D=[],N=[];for(let G=0;G<e;G++)P[G]=0,D[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:N,object:M,attributes:{},index:null}}function p(M,P,D,N){const G=o.attributes,W=P.attributes;let q=0;const J=D.getAttributes();for(const Y in J)if(J[Y].location>=0){const ft=G[Y];let Tt=W[Y];if(Tt===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),ft===void 0||ft.attribute!==Tt||Tt&&ft.data!==Tt.data)return!0;q++}return o.attributesNum!==q||o.index!==N}function g(M,P,D,N){const G={},W=P.attributes;let q=0;const J=D.getAttributes();for(const Y in J)if(J[Y].location>=0){let ft=W[Y];ft===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));const Tt={};Tt.attribute=ft,ft&&ft.data&&(Tt.data=ft.data),G[Y]=Tt,q++}o.attributes=G,o.attributesNum=q,o.index=N}function v(){const M=o.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function m(M){d(M,0)}function d(M,P){const D=o.newAttributes,N=o.enabledAttributes,G=o.attributeDivisors;D[M]=1,N[M]===0&&(s.enableVertexAttribArray(M),N[M]=1),G[M]!==P&&(s.vertexAttribDivisor(M,P),G[M]=P)}function y(){const M=o.newAttributes,P=o.enabledAttributes;for(let D=0,N=P.length;D<N;D++)P[D]!==M[D]&&(s.disableVertexAttribArray(D),P[D]=0)}function x(M,P,D,N,G,W,q){q===!0?s.vertexAttribIPointer(M,P,D,G,W):s.vertexAttribPointer(M,P,D,N,G,W)}function _(M,P,D,N){v();const G=N.attributes,W=D.getAttributes(),q=P.defaultAttributeValues;for(const J in W){const Y=W[J];if(Y.location>=0){let ct=G[J];if(ct===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){const ft=ct.normalized,Tt=ct.itemSize,Bt=t.get(ct);if(Bt===void 0)continue;const fe=Bt.buffer,tt=Bt.type,lt=Bt.bytesPerElement,At=tt===s.INT||tt===s.UNSIGNED_INT||ct.gpuType===Rl;if(ct.isInterleavedBufferAttribute){const mt=ct.data,Ut=mt.stride,Ot=ct.offset;if(mt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)d(Y.location+Xt,mt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)m(Y.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Xt=0;Xt<Y.locationSize;Xt++)x(Y.location+Xt,Tt/Y.locationSize,tt,ft,Ut*lt,(Ot+Tt/Y.locationSize*Xt)*lt,At)}else{if(ct.isInstancedBufferAttribute){for(let mt=0;mt<Y.locationSize;mt++)d(Y.location+mt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<Y.locationSize;mt++)m(Y.location+mt);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let mt=0;mt<Y.locationSize;mt++)x(Y.location+mt,Tt/Y.locationSize,tt,ft,Tt*lt,Tt/Y.locationSize*mt*lt,At)}}else if(q!==void 0){const ft=q[J];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(Y.location,ft);break;case 3:s.vertexAttrib3fv(Y.location,ft);break;case 4:s.vertexAttrib4fv(Y.location,ft);break;default:s.vertexAttrib1fv(Y.location,ft)}}}}y()}function T(){C();for(const M in n){const P=n[M];for(const D in P){const N=P[D];for(const G in N)h(N[G].object),delete N[G];delete P[D]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const D in P){const N=P[D];for(const G in N)h(N[G].object),delete N[G];delete P[D]}delete n[M.id]}function E(M){for(const P in n){const D=n[P];if(D[M.id]===void 0)continue;const N=D[M.id];for(const G in N)h(N[G].object),delete N[G];delete D[M.id]}}function C(){w(),r=!0,o!==i&&(o=i,l(o.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Yg(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qg(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){return!(E!==Un&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ai&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Vn&&!C)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:T,maxSamples:b}}function Zg(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Li,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||o&&!m)o?h(null):l();else{const y=o?0:n,x=y*4;let _=d.clippingState||null;c.value=_,_=h(g,f,x,p);for(let T=0;T!==x;++T)_[T]=e[T];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=p+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,_=p;x!==v;++x,_+=4)r.copy(u[x]).applyMatrix4(y,a),r.normal.toArray(m,_),m[_+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function $g(s){let t=new WeakMap;function e(r,a){return a===wc?r.mapping=Cs:a===Sc&&(r.mapping=Rs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===wc||a===Sc)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Mp(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const vs=4,Xh=[.125,.215,.35,.446,.526,.582],ki=20,za=new Vl,Yh=new at;let Ba=null,ka=0,Ga=0,Ha=!1;const Di=(1+Math.sqrt(5))/2,ps=1/Di,qh=[new U(-Di,ps,0),new U(Di,ps,0),new U(-ps,0,Di),new U(ps,0,Di),new U(0,Di,-ps),new U(0,Di,ps),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Zh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,ka,Ga),this._renderer.xr.enabled=Ha,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:oi,format:Un,colorSpace:Ls,depthBuffer:!1},i=$h(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(o)),this._blurMaterial=Jg(o,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,i){const a=new pn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Yh),h.toneMapping=vi,h.autoClear=!1;const p=new K({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new I(new Io,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Yh),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const x=this._cubeSize;lr(i,y*x,d>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Cs||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new I(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;lr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=qh[(i-o-1)%qh.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*ki-1),v=o/g,m=isFinite(o)?1+Math.floor(h*v):ki;m>ki&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const d=[];let y=0;for(let E=0;E<ki;++E){const C=E/v,w=Math.exp(-C*C/2);d.push(w),E===0?y+=w:E<m&&(y+=2*w)}for(let E=0;E<d.length;E++)d[E]=d[E]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[i],T=3*_*(i>x-vs?i-x+vs:0),b=4*(this._cubeSize-_);lr(e,T,b,3*_,2*_),c.setRenderTarget(e),c.render(u,za)}}function Kg(s){const t=[],e=[],n=[];let i=s;const o=s-vs+1+Xh.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-vs?c=Xh[r-s+vs-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,y=new Float32Array(v*g*p),x=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let b=0;b<p;b++){const E=b%3*2/3-1,C=b>2?0:-1,w=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];y.set(w,v*g*b),x.set(f,m*g*b);const M=[b,b,b,b,b,b];_.set(M,d*g*b)}const T=new Ie;T.setAttribute("position",new En(y,v)),T.setAttribute("uv",new En(x,m)),T.setAttribute("faceIndex",new En(_,d)),t.push(T),i>vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $h(s,t,e){const n=new Nn(s,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Jg(s,t,e){const n=new Float32Array(ki),i=new U(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Kh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Jh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Wl(){return`

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
	`}function jg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===wc||c===Sc,h=c===Cs||c===Rs;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Zh(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Zh(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Qg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function t_(s,t,e,n){const i={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete i[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let x=0,_=y.length;x<_;x+=3){const T=y[x+0],b=y[x+1],E=y[x+2];f.push(T,b,b,E,E,T)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const T=x+0,b=x+1,E=x+2;f.push(T,b,b,E,E,T)}}else return;const m=new(Zu(f)?ef:tf)(f,1);m.version=v;const d=o.get(u);d&&t.remove(d),o.set(u,m)}function h(u){const f=o.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function e_(s,t,e){let n;function i(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,p){s.drawElements(n,p,o,f*r),e.update(p,n,1)}function l(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,o,f*r,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/r,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,f,0,v,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*v[y];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function n_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function i_(s,t,e){const n=new WeakMap,i=new le;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let T=a.attributes.position.count*_,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const E=new Float32Array(T*b*4*u),C=new Ku(E,T,b,u);C.type=Vn,C.needsUpdate=!0;const w=_*4;for(let P=0;P<u;P++){const D=d[P],N=y[P],G=x[P],W=T*b*4*P;for(let q=0;q<D.count;q++){const J=q*w;g===!0&&(i.fromBufferAttribute(D,q),E[W+J+0]=i.x,E[W+J+1]=i.y,E[W+J+2]=i.z,E[W+J+3]=0),v===!0&&(i.fromBufferAttribute(N,q),E[W+J+4]=i.x,E[W+J+5]=i.y,E[W+J+6]=i.z,E[W+J+7]=0),m===!0&&(i.fromBufferAttribute(G,q),E[W+J+8]=i.x,E[W+J+9]=i.y,E[W+J+10]=i.z,E[W+J+11]=G.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new ht(T,b)},n.set(a,f),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:o}}function s_(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const Mf=new ke,jh=new af(1,1),yf=new Ku,wf=new op,Sf=new of,Qh=[],tu=[],eu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function Vs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Qh[i];if(o===void 0&&(o=new Float32Array(i),Qh[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ia(s,t){let e=tu[t];e===void 0&&(e=new Int32Array(t),tu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function o_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function r_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function a_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function c_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function l_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;iu.set(n),s.uniformMatrix2fv(this.addr,!1,iu),Pe(e,n)}}function h_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;nu.set(n),s.uniformMatrix3fv(this.addr,!1,nu),Pe(e,n)}}function u_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;eu.set(n),s.uniformMatrix4fv(this.addr,!1,eu),Pe(e,n)}}function f_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function d_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function p_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function m_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function g_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function __(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function x_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function v_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function M_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(jh.compareFunction=qu,o=jh):o=Mf,e.setTexture2D(t||o,i)}function y_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wf,i)}function w_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Sf,i)}function S_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yf,i)}function E_(s){switch(s){case 5126:return o_;case 35664:return r_;case 35665:return a_;case 35666:return c_;case 35674:return l_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return f_;case 35667:case 35671:return d_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return __;case 36295:return x_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return S_}}function b_(s,t){s.uniform1fv(this.addr,t)}function T_(s,t){const e=Vs(t,this.size,2);s.uniform2fv(this.addr,e)}function A_(s,t){const e=Vs(t,this.size,3);s.uniform3fv(this.addr,e)}function C_(s,t){const e=Vs(t,this.size,4);s.uniform4fv(this.addr,e)}function R_(s,t){const e=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function P_(s,t){const e=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function I_(s,t){const e=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function L_(s,t){s.uniform1iv(this.addr,t)}function D_(s,t){s.uniform2iv(this.addr,t)}function U_(s,t){s.uniform3iv(this.addr,t)}function N_(s,t){s.uniform4iv(this.addr,t)}function F_(s,t){s.uniform1uiv(this.addr,t)}function O_(s,t){s.uniform2uiv(this.addr,t)}function z_(s,t){s.uniform3uiv(this.addr,t)}function B_(s,t){s.uniform4uiv(this.addr,t)}function k_(s,t,e){const n=this.cache,i=t.length,o=ia(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Mf,o[r])}function G_(s,t,e){const n=this.cache,i=t.length,o=ia(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||wf,o[r])}function H_(s,t,e){const n=this.cache,i=t.length,o=ia(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Sf,o[r])}function V_(s,t,e){const n=this.cache,i=t.length,o=ia(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||yf,o[r])}function W_(s){switch(s){case 5126:return b_;case 35664:return T_;case 35665:return A_;case 35666:return C_;case 35674:return R_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return U_;case 35669:case 35673:return N_;case 5125:return F_;case 36294:return O_;case 36295:return z_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return V_}}class X_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=E_(e.type)}}class Y_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W_(e.type)}}class q_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function su(s,t){s.seq.push(t),s.map[t.id]=t}function Z_(s,t,e){const n=s.name,i=n.length;for(Va.lastIndex=0;;){const o=Va.exec(n),r=Va.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){su(e,l===void 0?new X_(a,s,t):new Y_(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new q_(a),su(e,u)),e=u}}}class Er{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);Z_(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function ou(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const $_=37297;let K_=0;function J_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const ru=new Gt;function j_(s){ee._getMatrix(ru,ee.workingColorSpace,s);const t=`mat3( ${ru.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(s)){case Ir:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function au(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+J_(s.getShaderSource(t),r)}else return i}function Q_(s,t){const e=j_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tx(s,t){let e;switch(t){case Ld:e="Linear";break;case Dd:e="Reinhard";break;case Ud:e="Cineon";break;case Nu:e="ACESFilmic";break;case Fd:e="AgX";break;case Od:e="Neutral";break;case Nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new U;function ex(){ee.getLuminanceCoefficients(hr);const s=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function ix(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function oo(s){return s!==""}function cu(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(s){return s.replace(ox,ax)}const rx=new Map;function ax(s,t){let e=Wt[t];if(e===void 0){const n=rx.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(s){return s.replace(cx,lx)}function lx(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function uu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function hx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function ux(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case Rs:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function dx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Uu:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Id:t="ENVMAP_BLENDING_ADD";break}return t}function px(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mx(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=hx(e),l=ux(e),h=fx(e),u=dx(e),f=px(e),p=nx(e),g=ix(o),v=i.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),d.length>0&&(d+=`
`)):(m=[uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),d=[uu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Wt.tonemapping_pars_fragment:"",e.toneMapping!==vi?tx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Q_("linearToOutputTexel",e.outputColorSpace),ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),r=il(r),r=cu(r,e),r=lu(r,e),a=il(a),a=cu(a,e),a=lu(a,e),r=hu(r),a=hu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+m+r,_=y+d+a,T=ou(i,i.VERTEX_SHADER,x),b=ou(i,i.FRAGMENT_SHADER,_);i.attachShader(v,T),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(P){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(T).trim(),G=i.getShaderInfoLog(b).trim();let W=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,T,b);else{const J=au(i,T,"vertex"),Y=au(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+J+`
`+Y)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||G==="")&&(q=!1);q&&(P.diagnostics={runnable:W,programLog:D,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:d}})}i.deleteShader(T),i.deleteShader(b),C=new Er(i,v),w=sx(i,v)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,$_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=K_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=b,this}let gx=0;class _x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xx(t),e.set(t,n)),n}}class xx{constructor(t){this.id=gx++,this.code=t,this.usedTimes=0}}function vx(s,t,e,n,i,o,r){const a=new ju,c=new _x,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,D,N){const G=D.fog,W=N.geometry,q=w.isMeshStandardMaterial?D.environment:null,J=(w.isMeshStandardMaterial?e:t).get(w.envMap||q),Y=J&&J.mapping===ta?J.image.height:null,ct=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Tt=ft!==void 0?ft.length:0;let Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let fe,tt,lt,At;if(ct){const re=kn[ct];fe=re.vertexShader,tt=re.fragmentShader}else fe=w.vertexShader,tt=w.fragmentShader,c.update(w),lt=c.getVertexShaderID(w),At=c.getFragmentShaderID(w);const mt=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),Ot=N.isInstancedMesh===!0,Xt=N.isBatchedMesh===!0,xe=!!w.map,Jt=!!w.matcap,Se=!!J,F=!!w.aoMap,vn=!!w.lightMap,Zt=!!w.bumpMap,$t=!!w.normalMap,Pt=!!w.displacementMap,pe=!!w.emissiveMap,Rt=!!w.metalnessMap,L=!!w.roughnessMap,A=w.anisotropy>0,H=w.clearcoat>0,et=w.dispersion>0,it=w.iridescence>0,j=w.sheen>0,Ct=w.transmission>0,gt=A&&!!w.anisotropyMap,yt=H&&!!w.clearcoatMap,jt=H&&!!w.clearcoatNormalMap,rt=H&&!!w.clearcoatRoughnessMap,St=it&&!!w.iridescenceMap,Dt=it&&!!w.iridescenceThicknessMap,Nt=j&&!!w.sheenColorMap,Et=j&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,Vt=!!w.specularColorMap,de=!!w.specularIntensityMap,O=Ct&&!!w.transmissionMap,dt=Ct&&!!w.thicknessMap,Z=!!w.gradientMap,nt=!!w.alphaMap,xt=w.alphaTest>0,_t=!!w.alphaHash,kt=!!w.extensions;let Me=vi;w.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Me=s.toneMapping);const Oe={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:fe,fragmentShader:tt,defines:w.defines,customVertexShaderID:lt,customFragmentShaderID:At,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Xt,batchingColor:Xt&&N._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&N.instanceColor!==null,instancingMorph:Ot&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Ls,alphaToCoverage:!!w.alphaToCoverage,map:xe,matcap:Jt,envMap:Se,envMapMode:Se&&J.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:vn,bumpMap:Zt,normalMap:$t,displacementMap:f&&Pt,emissiveMap:pe,normalMapObjectSpace:$t&&w.normalMapType===Gd,normalMapTangentSpace:$t&&w.normalMapType===Yu,metalnessMap:Rt,roughnessMap:L,anisotropy:A,anisotropyMap:gt,clearcoat:H,clearcoatMap:yt,clearcoatNormalMap:jt,clearcoatRoughnessMap:rt,dispersion:et,iridescence:it,iridescenceMap:St,iridescenceThicknessMap:Dt,sheen:j,sheenColorMap:Nt,sheenRoughnessMap:Et,specularMap:Kt,specularColorMap:Vt,specularIntensityMap:de,transmission:Ct,transmissionMap:O,thicknessMap:dt,gradientMap:Z,opaque:w.transparent===!1&&w.blending===Ms&&w.alphaToCoverage===!1,alphaMap:nt,alphaTest:xt,alphaHash:_t,combine:w.combine,mapUv:xe&&v(w.map.channel),aoMapUv:F&&v(w.aoMap.channel),lightMapUv:vn&&v(w.lightMap.channel),bumpMapUv:Zt&&v(w.bumpMap.channel),normalMapUv:$t&&v(w.normalMap.channel),displacementMapUv:Pt&&v(w.displacementMap.channel),emissiveMapUv:pe&&v(w.emissiveMap.channel),metalnessMapUv:Rt&&v(w.metalnessMap.channel),roughnessMapUv:L&&v(w.roughnessMap.channel),anisotropyMapUv:gt&&v(w.anisotropyMap.channel),clearcoatMapUv:yt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:jt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(w.sheenRoughnessMap.channel),specularMapUv:Kt&&v(w.specularMap.channel),specularColorMapUv:Vt&&v(w.specularColorMap.channel),specularIntensityMapUv:de&&v(w.specularIntensityMap.channel),transmissionMapUv:O&&v(w.transmissionMap.channel),thicknessMapUv:dt&&v(w.thicknessMap.channel),alphaMapUv:nt&&v(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&($t||A),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(xe||nt),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:xe&&w.map.isVideoTexture===!0&&ee.getTransfer(w.map.colorSpace)===ae,decodeVideoTextureEmissive:pe&&w.emissiveMap.isVideoTexture===!0&&ee.getTransfer(w.emissiveMap.colorSpace)===ae,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ht,flipSided:w.side===je,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:kt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&w.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function d(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(M,w),x(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const M=g[w.type];let P;if(M){const D=kn[M];P=Ur.clone(D.uniforms)}else P=w.uniforms;return P}function T(w,M){let P;for(let D=0,N=h.length;D<N;D++){const G=h[D];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new mx(s,M,w,o),h.push(P)),P}function b(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function E(w){c.remove(w)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:C}}function Mx(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function yx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function fu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function du(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,f,p,g,v,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function a(u,f,p,g,v,m){const d=r(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,g,v,m){const d=r(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||yx),n.length>1&&n.sort(f||fu),i.length>1&&i.sort(f||fu)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function wx(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new du,s.set(n,[r])):i>=o.length?(r=new du,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Sx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new at};break;case"SpotLight":e={position:new U,direction:new U,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Ex(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let bx=0;function Tx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ax(s){const t=new Sx,e=Ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,o=new ue,r=new ue;function a(l){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,y=0,x=0,_=0,T=0,b=0,E=0;l.sort(Tx);for(let w=0,M=l.length;w<M;w++){const P=l[w],D=P.color,N=P.intensity,G=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*N,u+=D.g*N,f+=D.b*N;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],N);E++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,Y=e.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=q,p++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(D).multiplyScalar(N),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[v]=q;const J=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,J.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[v]=J.matrix,P.castShadow){const Y=e.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=W,_++}v++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(D).multiplyScalar(N),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const J=P.shadow,Y=e.get(P);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,Y.shadowCameraNear=J.camera.near,Y.shadowCameraFar=J.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(N),q.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[d]=q,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==T||C.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=T,C.numLightProbes=E,n.version=bx++)}function c(l,h){let u=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,y=l.length;d<y;d++){const x=l[d];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),r.identity(),o.copy(x.matrixWorld),o.premultiply(m),r.extractRotation(o),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function pu(s){const t=new Ax(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Cx(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new pu(s),t.set(i,[a])):o>=r.length?(a=new pu(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
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
}`;function Ix(s,t,e){let n=new Ol;const i=new ht,o=new ht,r=new le,a=new n0({depthPacking:kd}),c=new i0,l={},h=e.maxTextureSize,u={[Mi]:je,[je]:Mi,[Ht]:Ht},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Rx,fragmentShader:Px}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new I(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let d=this.type;this.render=function(b,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending(si),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=d!==Qn&&this.type===Qn,G=d===Qn&&this.type!==Qn;for(let W=0,q=b.length;W<q;W++){const J=b[W],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ct=Y.getFrameExtents();if(i.multiply(ct),o.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/ct.x),i.x=o.x*ct.x,Y.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/ct.y),i.y=o.y*ct.y,Y.mapSize.y=o.y)),Y.map===null||N===!0||G===!0){const Tt=this.type!==Qn?{minFilter:xn,magFilter:xn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Nn(i.x,i.y,Tt),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const ft=Y.getViewportCount();for(let Tt=0;Tt<ft;Tt++){const Bt=Y.getViewport(Tt);r.set(o.x*Bt.x,o.y*Bt.y,o.x*Bt.z,o.y*Bt.w),D.viewport(r),Y.updateMatrices(J,Tt),n=Y.getFrustum(),_(E,C,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===Qn&&y(Y,C),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,P)};function y(b,E){const C=t.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Nn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,C,f,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,C,p,v,null)}function x(b,E,C,w){let M=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=M.uuid,N=E.uuid;let G=l[D];G===void 0&&(G={},l[D]=G);let W=G[N];W===void 0&&(W=M.clone(),G[N]=W,E.addEventListener("dispose",T)),M=W}if(M.visible=E.visible,M.wireframe=E.wireframe,w===Qn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=C}return M}function _(b,E,C,w,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Qn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const N=t.update(b),G=b.material;if(Array.isArray(G)){const W=N.groups;for(let q=0,J=W.length;q<J;q++){const Y=W[q],ct=G[Y.materialIndex];if(ct&&ct.visible){const ft=x(b,ct,w,M);b.onBeforeShadow(s,b,E,C,N,ft,Y),s.renderBufferDirect(C,null,N,ft,b,Y),b.onAfterShadow(s,b,E,C,N,ft,Y)}}}else if(G.visible){const W=x(b,G,w,M);b.onBeforeShadow(s,b,E,C,N,W,null),s.renderBufferDirect(C,null,N,W,b,null),b.onAfterShadow(s,b,E,C,N,W,null)}}const D=b.children;for(let N=0,G=D.length;N<G;N++)_(D[N],E,C,w,M)}function T(b){b.target.removeEventListener("dispose",T);for(const C in l){const w=l[C],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const Lx={[mc]:gc,[_c]:Mc,[xc]:yc,[As]:vc,[gc]:mc,[Mc]:_c,[yc]:xc,[vc]:As};function Dx(s,t){function e(){let O=!1;const dt=new le;let Z=null;const nt=new le(0,0,0,0);return{setMask:function(xt){Z!==xt&&!O&&(s.colorMask(xt,xt,xt,xt),Z=xt)},setLocked:function(xt){O=xt},setClear:function(xt,_t,kt,Me,Oe){Oe===!0&&(xt*=Me,_t*=Me,kt*=Me),dt.set(xt,_t,kt,Me),nt.equals(dt)===!1&&(s.clearColor(xt,_t,kt,Me),nt.copy(dt))},reset:function(){O=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let O=!1,dt=!1,Z=null,nt=null,xt=null;return{setReversed:function(_t){if(dt!==_t){const kt=t.get("EXT_clip_control");dt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const Me=xt;xt=null,this.setClear(Me)}dt=_t},getReversed:function(){return dt},setTest:function(_t){_t?mt(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(_t){Z!==_t&&!O&&(s.depthMask(_t),Z=_t)},setFunc:function(_t){if(dt&&(_t=Lx[_t]),nt!==_t){switch(_t){case mc:s.depthFunc(s.NEVER);break;case gc:s.depthFunc(s.ALWAYS);break;case _c:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case xc:s.depthFunc(s.EQUAL);break;case vc:s.depthFunc(s.GEQUAL);break;case Mc:s.depthFunc(s.GREATER);break;case yc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}nt=_t}},setLocked:function(_t){O=_t},setClear:function(_t){xt!==_t&&(dt&&(_t=1-_t),s.clearDepth(_t),xt=_t)},reset:function(){O=!1,Z=null,nt=null,xt=null,dt=!1}}}function i(){let O=!1,dt=null,Z=null,nt=null,xt=null,_t=null,kt=null,Me=null,Oe=null;return{setTest:function(re){O||(re?mt(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(re){dt!==re&&!O&&(s.stencilMask(re),dt=re)},setFunc:function(re,Cn,qn){(Z!==re||nt!==Cn||xt!==qn)&&(s.stencilFunc(re,Cn,qn),Z=re,nt=Cn,xt=qn)},setOp:function(re,Cn,qn){(_t!==re||kt!==Cn||Me!==qn)&&(s.stencilOp(re,Cn,qn),_t=re,kt=Cn,Me=qn)},setLocked:function(re){O=re},setClear:function(re){Oe!==re&&(s.clearStencil(re),Oe=re)},reset:function(){O=!1,dt=null,Z=null,nt=null,xt=null,_t=null,kt=null,Me=null,Oe=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,_=null,T=null,b=null,E=new at(0,0,0),C=0,w=!1,M=null,P=null,D=null,N=null,G=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=J>=2);let ct=null,ft={};const Tt=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),fe=new le().fromArray(Tt),tt=new le().fromArray(Bt);function lt(O,dt,Z,nt){const xt=new Uint8Array(4),_t=s.createTexture();s.bindTexture(O,_t),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<Z;kt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(dt+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return _t}const At={};At[s.TEXTURE_2D]=lt(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),mt(s.DEPTH_TEST),r.setFunc(As),Zt(!1),$t(ah),mt(s.CULL_FACE),F(si);function mt(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Ut(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Ot(O,dt){return u[O]!==dt?(s.bindFramebuffer(O,dt),u[O]=dt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Xt(O,dt){let Z=p,nt=!1;if(O){Z=f.get(dt),Z===void 0&&(Z=[],f.set(dt,Z));const xt=O.textures;if(Z.length!==xt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,kt=xt.length;_t<kt;_t++)Z[_t]=s.COLOR_ATTACHMENT0+_t;Z.length=xt.length,nt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,nt=!0);nt&&s.drawBuffers(Z)}function xe(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const Jt={[Bi]:s.FUNC_ADD,[dd]:s.FUNC_SUBTRACT,[pd]:s.FUNC_REVERSE_SUBTRACT};Jt[md]=s.MIN,Jt[gd]=s.MAX;const Se={[_d]:s.ZERO,[xd]:s.ONE,[vd]:s.SRC_COLOR,[dc]:s.SRC_ALPHA,[bd]:s.SRC_ALPHA_SATURATE,[Sd]:s.DST_COLOR,[yd]:s.DST_ALPHA,[Md]:s.ONE_MINUS_SRC_COLOR,[pc]:s.ONE_MINUS_SRC_ALPHA,[Ed]:s.ONE_MINUS_DST_COLOR,[wd]:s.ONE_MINUS_DST_ALPHA,[Td]:s.CONSTANT_COLOR,[Ad]:s.ONE_MINUS_CONSTANT_COLOR,[Cd]:s.CONSTANT_ALPHA,[Rd]:s.ONE_MINUS_CONSTANT_ALPHA};function F(O,dt,Z,nt,xt,_t,kt,Me,Oe,re){if(O===si){v===!0&&(Ut(s.BLEND),v=!1);return}if(v===!1&&(mt(s.BLEND),v=!0),O!==fd){if(O!==m||re!==w){if((d!==Bi||_!==Bi)&&(s.blendEquation(s.FUNC_ADD),d=Bi,_=Bi),re)switch(O){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fc:s.blendFunc(s.ONE,s.ONE);break;case ch:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ch:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,x=null,T=null,b=null,E.set(0,0,0),C=0,m=O,w=re}return}xt=xt||dt,_t=_t||Z,kt=kt||nt,(dt!==d||xt!==_)&&(s.blendEquationSeparate(Jt[dt],Jt[xt]),d=dt,_=xt),(Z!==y||nt!==x||_t!==T||kt!==b)&&(s.blendFuncSeparate(Se[Z],Se[nt],Se[_t],Se[kt]),y=Z,x=nt,T=_t,b=kt),(Me.equals(E)===!1||Oe!==C)&&(s.blendColor(Me.r,Me.g,Me.b,Oe),E.copy(Me),C=Oe),m=O,w=!1}function vn(O,dt){O.side===Ht?Ut(s.CULL_FACE):mt(s.CULL_FACE);let Z=O.side===je;dt&&(Z=!Z),Zt(Z),O.blending===Ms&&O.transparent===!1?F(si):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const nt=O.stencilWrite;a.setTest(nt),nt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(O){M!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),M=O)}function $t(O){O!==hd?(mt(s.CULL_FACE),O!==P&&(O===ah?s.cullFace(s.BACK):O===ud?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),P=O}function Pt(O){O!==D&&(q&&s.lineWidth(O),D=O)}function pe(O,dt,Z){O?(mt(s.POLYGON_OFFSET_FILL),(N!==dt||G!==Z)&&(s.polygonOffset(dt,Z),N=dt,G=Z)):Ut(s.POLYGON_OFFSET_FILL)}function Rt(O){O?mt(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function L(O){O===void 0&&(O=s.TEXTURE0+W-1),ct!==O&&(s.activeTexture(O),ct=O)}function A(O,dt,Z){Z===void 0&&(ct===null?Z=s.TEXTURE0+W-1:Z=ct);let nt=ft[Z];nt===void 0&&(nt={type:void 0,texture:void 0},ft[Z]=nt),(nt.type!==O||nt.texture!==dt)&&(ct!==Z&&(s.activeTexture(Z),ct=Z),s.bindTexture(O,dt||At[O]),nt.type=O,nt.texture=dt)}function H(){const O=ft[ct];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function et(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(O){fe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),fe.copy(O))}function Et(O){tt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Kt(O,dt){let Z=l.get(dt);Z===void 0&&(Z=new WeakMap,l.set(dt,Z));let nt=Z.get(O);nt===void 0&&(nt=s.getUniformBlockIndex(dt,O.name),Z.set(O,nt))}function Vt(O,dt){const nt=l.get(dt).get(O);c.get(dt)!==nt&&(s.uniformBlockBinding(dt,nt,O.__bindingPointIndex),c.set(dt,nt))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ct=null,ft={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,_=null,T=null,b=null,E=new at(0,0,0),C=0,w=!1,M=null,P=null,D=null,N=null,G=null,fe.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:mt,disable:Ut,bindFramebuffer:Ot,drawBuffers:Xt,useProgram:xe,setBlending:F,setMaterial:vn,setFlipSided:Zt,setCullFace:$t,setLineWidth:Pt,setPolygonOffset:pe,setScissorTest:Rt,activeTexture:L,bindTexture:A,unbindTexture:H,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:St,texImage3D:Dt,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:jt,texStorage3D:rt,texSubImage2D:j,texSubImage3D:Ct,compressedTexSubImage2D:gt,compressedTexSubImage3D:yt,scissor:Nt,viewport:Et,reset:de}}function Ux(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return p?new OffscreenCanvas(L,A):Dr("canvas")}function v(L,A,H){let et=1;const it=Rt(L);if((it.width>H||it.height>H)&&(et=H/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(et*it.width),Ct=Math.floor(et*it.height);u===void 0&&(u=g(j,Ct));const gt=A?g(j,Ct):u;return gt.width=j,gt.height=Ct,gt.getContext("2d").drawImage(L,0,0,j,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Ct+")."),gt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),L;return L}function m(L){return L.generateMipmaps}function d(L){s.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,A,H,et,it=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=A;if(A===s.RED&&(H===s.FLOAT&&(j=s.R32F),H===s.HALF_FLOAT&&(j=s.R16F),H===s.UNSIGNED_BYTE&&(j=s.R8)),A===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.R8UI),H===s.UNSIGNED_SHORT&&(j=s.R16UI),H===s.UNSIGNED_INT&&(j=s.R32UI),H===s.BYTE&&(j=s.R8I),H===s.SHORT&&(j=s.R16I),H===s.INT&&(j=s.R32I)),A===s.RG&&(H===s.FLOAT&&(j=s.RG32F),H===s.HALF_FLOAT&&(j=s.RG16F),H===s.UNSIGNED_BYTE&&(j=s.RG8)),A===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RG8UI),H===s.UNSIGNED_SHORT&&(j=s.RG16UI),H===s.UNSIGNED_INT&&(j=s.RG32UI),H===s.BYTE&&(j=s.RG8I),H===s.SHORT&&(j=s.RG16I),H===s.INT&&(j=s.RG32I)),A===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGB8UI),H===s.UNSIGNED_SHORT&&(j=s.RGB16UI),H===s.UNSIGNED_INT&&(j=s.RGB32UI),H===s.BYTE&&(j=s.RGB8I),H===s.SHORT&&(j=s.RGB16I),H===s.INT&&(j=s.RGB32I)),A===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),H===s.UNSIGNED_INT&&(j=s.RGBA32UI),H===s.BYTE&&(j=s.RGBA8I),H===s.SHORT&&(j=s.RGBA16I),H===s.INT&&(j=s.RGBA32I)),A===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),A===s.RGBA){const Ct=it?Ir:ee.getTransfer(et);H===s.FLOAT&&(j=s.RGBA32F),H===s.HALF_FLOAT&&(j=s.RGBA16F),H===s.UNSIGNED_BYTE&&(j=Ct===ae?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(L,A){let H;return L?A===null||A===qi||A===Ps?H=s.DEPTH24_STENCIL8:A===Vn?H=s.DEPTH32F_STENCIL8:A===Mo&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===qi||A===Ps?H=s.DEPTH_COMPONENT24:A===Vn?H=s.DEPTH_COMPONENT32F:A===Mo&&(H=s.DEPTH_COMPONENT16),H}function T(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==xn&&L.minFilter!==Hn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function b(L){const A=L.target;A.removeEventListener("dispose",b),C(A),A.isVideoTexture&&h.delete(A)}function E(L){const A=L.target;A.removeEventListener("dispose",E),M(A)}function C(L){const A=n.get(L);if(A.__webglInit===void 0)return;const H=L.source,et=f.get(H);if(et){const it=et[A.__cacheKey];it.usedTimes--,it.usedTimes===0&&w(L),Object.keys(et).length===0&&f.delete(H)}n.remove(L)}function w(L){const A=n.get(L);s.deleteTexture(A.__webglTexture);const H=L.source,et=f.get(H);delete et[A.__cacheKey],r.memory.textures--}function M(L){const A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(A.__webglFramebuffer[et]))for(let it=0;it<A.__webglFramebuffer[et].length;it++)s.deleteFramebuffer(A.__webglFramebuffer[et][it]);else s.deleteFramebuffer(A.__webglFramebuffer[et]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[et])}else{if(Array.isArray(A.__webglFramebuffer))for(let et=0;et<A.__webglFramebuffer.length;et++)s.deleteFramebuffer(A.__webglFramebuffer[et]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let et=0;et<A.__webglColorRenderbuffer.length;et++)A.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[et]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const H=L.textures;for(let et=0,it=H.length;et<it;et++){const j=n.get(H[et]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),r.memory.textures--),n.remove(H[et])}n.remove(L)}let P=0;function D(){P=0}function N(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function G(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function W(L,A){const H=n.get(L);if(L.isVideoTexture&&Pt(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const et=L.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(H,L,A);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+A)}function q(L,A){const H=n.get(L);if(L.version>0&&H.__version!==L.version){tt(H,L,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+A)}function J(L,A){const H=n.get(L);if(L.version>0&&H.__version!==L.version){tt(H,L,A);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+A)}function Y(L,A){const H=n.get(L);if(L.version>0&&H.__version!==L.version){lt(H,L,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+A)}const ct={[Pr]:s.REPEAT,[Gi]:s.CLAMP_TO_EDGE,[Ec]:s.MIRRORED_REPEAT},ft={[xn]:s.NEAREST,[zd]:s.NEAREST_MIPMAP_NEAREST,[zo]:s.NEAREST_MIPMAP_LINEAR,[Hn]:s.LINEAR,[la]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},Tt={[Hd]:s.NEVER,[Zd]:s.ALWAYS,[Vd]:s.LESS,[qu]:s.LEQUAL,[Wd]:s.EQUAL,[qd]:s.GEQUAL,[Xd]:s.GREATER,[Yd]:s.NOTEQUAL};function Bt(L,A){if(A.type===Vn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Hn||A.magFilter===la||A.magFilter===zo||A.magFilter===Hi||A.minFilter===Hn||A.minFilter===la||A.minFilter===zo||A.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ct[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ct[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ct[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ft[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ft[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Tt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xn||A.minFilter!==zo&&A.minFilter!==Hi||A.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function fe(L,A){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",b));const et=A.source;let it=f.get(et);it===void 0&&(it={},f.set(et,it));const j=G(A);if(j!==L.__cacheKey){it[j]===void 0&&(it[j]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,H=!0),it[j].usedTimes++;const Ct=it[L.__cacheKey];Ct!==void 0&&(it[L.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(A)),L.__cacheKey=j,L.__webglTexture=it[j].texture}return H}function tt(L,A,H){let et=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(et=s.TEXTURE_3D);const it=fe(L,A),j=A.source;e.bindTexture(et,L.__webglTexture,s.TEXTURE0+H);const Ct=n.get(j);if(j.version!==Ct.__version||it===!0){e.activeTexture(s.TEXTURE0+H);const gt=ee.getPrimaries(ee.workingColorSpace),yt=A.colorSpace===gi?null:ee.getPrimaries(A.colorSpace),jt=A.colorSpace===gi||gt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let rt=v(A.image,!1,i.maxTextureSize);rt=pe(A,rt);const St=o.convert(A.format,A.colorSpace),Dt=o.convert(A.type);let Nt=x(A.internalFormat,St,Dt,A.colorSpace,A.isVideoTexture);Bt(et,A);let Et;const Kt=A.mipmaps,Vt=A.isVideoTexture!==!0,de=Ct.__version===void 0||it===!0,O=j.dataReady,dt=T(A,rt);if(A.isDepthTexture)Nt=_(A.format===Is,A.type),de&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,Dt,null));else if(A.isDataTexture)if(Kt.length>0){Vt&&de&&e.texStorage2D(s.TEXTURE_2D,dt,Nt,Kt[0].width,Kt[0].height);for(let Z=0,nt=Kt.length;Z<nt;Z++)Et=Kt[Z],Vt?O&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Et.width,Et.height,St,Dt,Et.data):e.texImage2D(s.TEXTURE_2D,Z,Nt,Et.width,Et.height,0,St,Dt,Et.data);A.generateMipmaps=!1}else Vt?(de&&e.texStorage2D(s.TEXTURE_2D,dt,Nt,rt.width,rt.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,St,Dt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,rt.width,rt.height,0,St,Dt,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Vt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Nt,Kt[0].width,Kt[0].height,rt.depth);for(let Z=0,nt=Kt.length;Z<nt;Z++)if(Et=Kt[Z],A.format!==Un)if(St!==null)if(Vt){if(O)if(A.layerUpdates.size>0){const xt=Wh(Et.width,Et.height,A.format,A.type);for(const _t of A.layerUpdates){const kt=Et.data.subarray(_t*xt/Et.data.BYTES_PER_ELEMENT,(_t+1)*xt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,_t,Et.width,Et.height,1,St,kt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,rt.depth,St,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Nt,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Et.width,Et.height,rt.depth,St,Dt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Nt,Et.width,Et.height,rt.depth,0,St,Dt,Et.data)}else{Vt&&de&&e.texStorage2D(s.TEXTURE_2D,dt,Nt,Kt[0].width,Kt[0].height);for(let Z=0,nt=Kt.length;Z<nt;Z++)Et=Kt[Z],A.format!==Un?St!==null?Vt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Nt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?O&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Et.width,Et.height,St,Dt,Et.data):e.texImage2D(s.TEXTURE_2D,Z,Nt,Et.width,Et.height,0,St,Dt,Et.data)}else if(A.isDataArrayTexture)if(Vt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Nt,rt.width,rt.height,rt.depth),O)if(A.layerUpdates.size>0){const Z=Wh(rt.width,rt.height,A.format,A.type);for(const nt of A.layerUpdates){const xt=rt.data.subarray(nt*Z/rt.data.BYTES_PER_ELEMENT,(nt+1)*Z/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,rt.width,rt.height,1,St,Dt,xt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Dt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,St,Dt,rt.data);else if(A.isData3DTexture)Vt?(de&&e.texStorage3D(s.TEXTURE_3D,dt,Nt,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Dt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,St,Dt,rt.data);else if(A.isFramebufferTexture){if(de)if(Vt)e.texStorage2D(s.TEXTURE_2D,dt,Nt,rt.width,rt.height);else{let Z=rt.width,nt=rt.height;for(let xt=0;xt<dt;xt++)e.texImage2D(s.TEXTURE_2D,xt,Nt,Z,nt,0,St,Dt,null),Z>>=1,nt>>=1}}else if(Kt.length>0){if(Vt&&de){const Z=Rt(Kt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Nt,Z.width,Z.height)}for(let Z=0,nt=Kt.length;Z<nt;Z++)Et=Kt[Z],Vt?O&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,St,Dt,Et):e.texImage2D(s.TEXTURE_2D,Z,Nt,St,Dt,Et);A.generateMipmaps=!1}else if(Vt){if(de){const Z=Rt(rt);e.texStorage2D(s.TEXTURE_2D,dt,Nt,Z.width,Z.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Dt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Nt,St,Dt,rt);m(A)&&d(et),Ct.__version=j.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function lt(L,A,H){if(A.image.length!==6)return;const et=fe(L,A),it=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+H);const j=n.get(it);if(it.version!==j.__version||et===!0){e.activeTexture(s.TEXTURE0+H);const Ct=ee.getPrimaries(ee.workingColorSpace),gt=A.colorSpace===gi?null:ee.getPrimaries(A.colorSpace),yt=A.colorSpace===gi||Ct===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const jt=A.isCompressedTexture||A.image[0].isCompressedTexture,rt=A.image[0]&&A.image[0].isDataTexture,St=[];for(let nt=0;nt<6;nt++)!jt&&!rt?St[nt]=v(A.image[nt],!0,i.maxCubemapSize):St[nt]=rt?A.image[nt].image:A.image[nt],St[nt]=pe(A,St[nt]);const Dt=St[0],Nt=o.convert(A.format,A.colorSpace),Et=o.convert(A.type),Kt=x(A.internalFormat,Nt,Et,A.colorSpace),Vt=A.isVideoTexture!==!0,de=j.__version===void 0||et===!0,O=it.dataReady;let dt=T(A,Dt);Bt(s.TEXTURE_CUBE_MAP,A);let Z;if(jt){Vt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Kt,Dt.width,Dt.height);for(let nt=0;nt<6;nt++){Z=St[nt].mipmaps;for(let xt=0;xt<Z.length;xt++){const _t=Z[xt];A.format!==Un?Nt!==null?Vt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,_t.width,_t.height,Nt,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,Kt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,0,0,_t.width,_t.height,Nt,Et,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt,Kt,_t.width,_t.height,0,Nt,Et,_t.data)}}}else{if(Z=A.mipmaps,Vt&&de){Z.length>0&&dt++;const nt=Rt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Kt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(rt){Vt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,St[nt].width,St[nt].height,Nt,Et,St[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Kt,St[nt].width,St[nt].height,0,Nt,Et,St[nt].data);for(let xt=0;xt<Z.length;xt++){const kt=Z[xt].image[nt].image;Vt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,kt.width,kt.height,Nt,Et,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,Kt,kt.width,kt.height,0,Nt,Et,kt.data)}}else{Vt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,Et,St[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Kt,Nt,Et,St[nt]);for(let xt=0;xt<Z.length;xt++){const _t=Z[xt];Vt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,0,0,Nt,Et,_t.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,xt+1,Kt,Nt,Et,_t.image[nt])}}}m(A)&&d(s.TEXTURE_CUBE_MAP),j.__version=it.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function At(L,A,H,et,it,j){const Ct=o.convert(H.format,H.colorSpace),gt=o.convert(H.type),yt=x(H.internalFormat,Ct,gt,H.colorSpace),jt=n.get(A),rt=n.get(H);if(rt.__renderTarget=A,!jt.__hasExternalTextures){const St=Math.max(1,A.width>>j),Dt=Math.max(1,A.height>>j);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,j,yt,St,Dt,A.depth,0,Ct,gt,null):e.texImage2D(it,j,yt,St,Dt,0,Ct,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),$t(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,it,rt.__webglTexture,0,Zt(A)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,it,rt.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(L,A,H){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const et=A.depthTexture,it=et&&et.isDepthTexture?et.type:null,j=_(A.stencilBuffer,it),Ct=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=Zt(A);$t(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,j,A.width,A.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,j,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,j,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,L)}else{const et=A.textures;for(let it=0;it<et.length;it++){const j=et[it],Ct=o.convert(j.format,j.colorSpace),gt=o.convert(j.type),yt=x(j.internalFormat,Ct,gt,j.colorSpace),jt=Zt(A);H&&$t(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,yt,A.width,A.height):$t(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,yt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,yt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(A.depthTexture);et.__renderTarget=A,(!et.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),W(A.depthTexture,0);const it=et.__webglTexture,j=Zt(A);if(A.depthTexture.format===ys)$t(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(A.depthTexture.format===Is)$t(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ot(L){const A=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const et=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),et){const it=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,et.removeEventListener("dispose",it)};et.addEventListener("dispose",it),A.__depthDisposeCallback=it}A.__boundDepthTexture=et}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ut(A.__webglFramebuffer,L)}else if(H){A.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[et]),A.__webglDepthbuffer[et]===void 0)A.__webglDepthbuffer[et]=s.createRenderbuffer(),mt(A.__webglDepthbuffer[et],L,!1);else{const it=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),mt(A.__webglDepthbuffer,L,!1);else{const et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,it)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(L,A,H){const et=n.get(L);A!==void 0&&At(et.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ot(L)}function xe(L){const A=L.texture,H=n.get(L),et=n.get(A);L.addEventListener("dispose",E);const it=L.textures,j=L.isWebGLCubeRenderTarget===!0,Ct=it.length>1;if(Ct||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=A.version,r.memory.textures++),j){H.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[gt]=[];for(let yt=0;yt<A.mipmaps.length;yt++)H.__webglFramebuffer[gt][yt]=s.createFramebuffer()}else H.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let gt=0;gt<A.mipmaps.length;gt++)H.__webglFramebuffer[gt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let gt=0,yt=it.length;gt<yt;gt++){const jt=n.get(it[gt]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),r.memory.textures++)}if(L.samples>0&&$t(L)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let gt=0;gt<it.length;gt++){const yt=it[gt];H.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[gt]);const jt=o.convert(yt.format,yt.colorSpace),rt=o.convert(yt.type),St=x(yt.internalFormat,jt,rt,yt.colorSpace,L.isXRRenderTarget===!0),Dt=Zt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,St,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,H.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,A);for(let gt=0;gt<6;gt++)if(A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)At(H.__webglFramebuffer[gt][yt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt);else At(H.__webglFramebuffer[gt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(A)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let gt=0,yt=it.length;gt<yt;gt++){const jt=it[gt],rt=n.get(jt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),Bt(s.TEXTURE_2D,jt),At(H.__webglFramebuffer,L,jt,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,0),m(jt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(gt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,et.__webglTexture),Bt(gt,A),A.mipmaps&&A.mipmaps.length>0)for(let yt=0;yt<A.mipmaps.length;yt++)At(H.__webglFramebuffer[yt],L,A,s.COLOR_ATTACHMENT0,gt,yt);else At(H.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,gt,0);m(A)&&d(gt),e.unbindTexture()}L.depthBuffer&&Ot(L)}function Jt(L){const A=L.textures;for(let H=0,et=A.length;H<et;H++){const it=A[H];if(m(it)){const j=y(L),Ct=n.get(it).__webglTexture;e.bindTexture(j,Ct),d(j),e.unbindTexture()}}}const Se=[],F=[];function vn(L){if(L.samples>0){if($t(L)===!1){const A=L.textures,H=L.width,et=L.height;let it=s.COLOR_BUFFER_BIT;const j=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(L),gt=A.length>1;if(gt)for(let yt=0;yt<A.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let yt=0;yt<A.length;yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);const jt=n.get(A[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,H,et,0,0,H,et,it,s.NEAREST),c===!0&&(Se.length=0,F.length=0,Se.push(s.COLOR_ATTACHMENT0+yt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Se.push(j),F.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let yt=0;yt<A.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);const jt=n.get(A[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Zt(L){return Math.min(i.maxSamples,L.samples)}function $t(L){const A=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pt(L){const A=r.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function pe(L,A){const H=L.colorSpace,et=L.format,it=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Ls&&H!==gi&&(ee.getTransfer(H)===ae?(et!==Un||it!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}function Rt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=At,this.useMultisampledRTT=$t}function Nx(s,t){function e(n,i=gi){let o;const r=ee.getTransfer(i);if(n===ai)return s.UNSIGNED_BYTE;if(n===Pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Il)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ou)return s.BYTE;if(n===zu)return s.SHORT;if(n===Mo)return s.UNSIGNED_SHORT;if(n===Rl)return s.INT;if(n===qi)return s.UNSIGNED_INT;if(n===Vn)return s.FLOAT;if(n===oi)return s.HALF_FLOAT;if(n===ku)return s.ALPHA;if(n===Gu)return s.RGB;if(n===Un)return s.RGBA;if(n===Hu)return s.LUMINANCE;if(n===Vu)return s.LUMINANCE_ALPHA;if(n===ys)return s.DEPTH_COMPONENT;if(n===Is)return s.DEPTH_STENCIL;if(n===Ll)return s.RED;if(n===Dl)return s.RED_INTEGER;if(n===Wu)return s.RG;if(n===Ul)return s.RG_INTEGER;if(n===Nl)return s.RGBA_INTEGER;if(n===vr||n===Mr||n===yr||n===wr)if(r===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===vr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===vr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Tc||n===Ac||n===Cc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===bc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Pc||n===Ic)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Rc||n===Pc)return r===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ic)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===zc||n===Bc||n===kc||n===Gc||n===Hc||n===Vc||n===Wc||n===Xc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Lc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return r===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sr||n===Yc||n===qc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Sr)return r===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xu||n===Zc||n===$c||n===Kc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Sr)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$c)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Fx={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
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

}`;class Bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ke,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new cn({vertexShader:Ox,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new we(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kx extends zs{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const v=new Bx,m=e.getContextAttributes();let d=null,y=null;const x=[],_=[],T=new ht;let b=null;const E=new pn;E.viewport=new le;const C=new pn;C.viewport=new le;const w=[E,C],M=new a0;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=x[tt];return lt===void 0&&(lt=new Wa,x[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=x[tt];return lt===void 0&&(lt=new Wa,x[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=x[tt];return lt===void 0&&(lt=new Wa,x[tt]=lt),lt.getHandSpace()};function N(tt){const lt=_.indexOf(tt.inputSource);if(lt===-1)return;const At=x[lt];At!==void 0&&(At.update(tt.inputSource,tt.frame,l||r),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function G(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",W);for(let tt=0;tt<x.length;tt++){const lt=_[tt];lt!==null&&(_[tt]=null,x[tt].disconnect(lt))}P=null,D=null,v.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,y=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",G),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let At=null,mt=null,Ut=null;m.depth&&(Ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=m.stencil?Is:ys,mt=m.stencil?Ps:qi);const Ot={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:o};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Ot),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Nn(f.textureWidth,f.textureHeight,{format:Un,type:ai,depthTexture:new af(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const At={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,At),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Nn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(tt){for(let lt=0;lt<tt.removed.length;lt++){const At=tt.removed[lt],mt=_.indexOf(At);mt>=0&&(_[mt]=null,x[mt].disconnect(At))}for(let lt=0;lt<tt.added.length;lt++){const At=tt.added[lt];let mt=_.indexOf(At);if(mt===-1){for(let Ot=0;Ot<x.length;Ot++)if(Ot>=_.length){_.push(At),mt=Ot;break}else if(_[Ot]===null){_[Ot]=At,mt=Ot;break}if(mt===-1)break}const Ut=x[mt];Ut&&Ut.connect(At)}}const q=new U,J=new U;function Y(tt,lt,At){q.setFromMatrixPosition(lt.matrixWorld),J.setFromMatrixPosition(At.matrixWorld);const mt=q.distanceTo(J),Ut=lt.projectionMatrix.elements,Ot=At.projectionMatrix.elements,Xt=Ut[14]/(Ut[10]-1),xe=Ut[14]/(Ut[10]+1),Jt=(Ut[9]+1)/Ut[5],Se=(Ut[9]-1)/Ut[5],F=(Ut[8]-1)/Ut[0],vn=(Ot[8]+1)/Ot[0],Zt=Xt*F,$t=Xt*vn,Pt=mt/(-F+vn),pe=Pt*-F;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(pe),tt.translateZ(Pt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ut[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Rt=Xt+Pt,L=xe+Pt,A=Zt-pe,H=$t+(mt-pe),et=Jt*xe/L*Rt,it=Se*xe/L*Rt;tt.projectionMatrix.makePerspective(A,H,et,it,Rt,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ct(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let lt=tt.near,At=tt.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(At=v.depthFar)),M.near=C.near=E.near=lt,M.far=C.far=E.far=At,(P!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far),E.layers.mask=tt.layers.mask|2,C.layers.mask=tt.layers.mask|4,M.layers.mask=E.layers.mask|C.layers.mask;const mt=tt.parent,Ut=M.cameras;ct(M,mt);for(let Ot=0;Ot<Ut.length;Ot++)ct(Ut[Ot],mt);Ut.length===2?Y(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),ft(tt,M,mt)};function ft(tt,lt,At){At===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Jc*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(tt){c=tt,f!==null&&(f.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Tt=null;function Bt(tt,lt){if(h=lt.getViewerPose(l||r),g=lt,h!==null){const At=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let mt=!1;At.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let Ot=0;Ot<At.length;Ot++){const Xt=At[Ot];let xe=null;if(p!==null)xe=p.getViewport(Xt);else{const Se=u.getViewSubImage(f,Xt);xe=Se.viewport,Ot===0&&(t.setRenderTargetTextures(y,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),t.setRenderTarget(y))}let Jt=w[Ot];Jt===void 0&&(Jt=new pn,Jt.layers.enable(Ot),Jt.viewport=new le,w[Ot]=Jt),Jt.matrix.fromArray(Xt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Xt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(xe.x,xe.y,xe.width,xe.height),Ot===0&&(M.matrix.copy(Jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(Jt)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Ot=u.getDepthInformation(At[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,i.renderState)}}for(let At=0;At<x.length;At++){const mt=_[At],Ut=x[At];mt!==null&&Ut!==void 0&&Ut.update(mt,lt,l||r)}Tt&&Tt(tt,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const fe=new vf;fe.setAnimationLoop(Bt),this.setAnimationLoop=function(tt){Tt=tt},this.dispose=function(){}}}const Ri=new Wn,Gx=new ue;function Hx(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,nf(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,x,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),u(m,d)):d.isMeshPhongMaterial?(o(m,d),h(m,d)):d.isMeshStandardMaterial?(o(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),v(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===je&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===je&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,Ri.copy(_),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(Ri)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===je&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vx(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function l(y,x){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(y,T);const b=t.render.frame;o[y.id]!==b&&(f(y),o[y.id]=b)}function h(y){const x=u();y.__bindingPointIndex=x;const _=s.createBuffer(),T=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,T,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],_=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,E=_.length;b<E;b++){const C=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,M=C.length;w<M;w++){const P=C[w];if(p(P,b,w,T)===!0){const D=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let W=0;W<N.length;W++){const q=N[W],J=v(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,D+G,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,x,_,T){const b=y.value,E=x+"_"+_;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const C=T[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return T[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(y){const x=y.uniforms;let _=0;const T=16;for(let E=0,C=x.length;E<C;E++){const w=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,P=w.length;M<P;M++){const D=w[M],N=Array.isArray(D.value)?D.value:[D.value];for(let G=0,W=N.length;G<W;G++){const q=N[G],J=v(q),Y=_%T,ct=Y%J.boundary,ft=Y+ct;_+=ct,ft!==0&&T-ft<J.storage&&(_+=T-ft),D.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=J.storage}}}const b=_%T;return b>0&&(_+=T-b),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=r.indexOf(x.__bindingPointIndex);r.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete o[x.id]}function d(){for(const y in i)s.deleteBuffer(i[y]);r=[],i={},o={}}return{bind:c,update:l,dispose:d}}class Wx{constructor(t={}){const{canvas:e=Kd(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=vi,this.toneMappingExposure=1;const _=this;let T=!1,b=0,E=0,C=null,w=-1,M=null;const P=new le,D=new le;let N=null;const G=new at(0);let W=0,q=e.width,J=e.height,Y=1,ct=null,ft=null;const Tt=new le(0,0,q,J),Bt=new le(0,0,q,J);let fe=!1;const tt=new Ol;let lt=!1,At=!1;this.transmissionResolutionScale=1;const mt=new ue,Ut=new ue,Ot=new U,Xt=new le,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Se(){return C===null?Y:1}let F=n;function vn(R,z){return e.getContext(R,z)}try{const R={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cl}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),F===null){const z="webgl2";if(F=vn(z,R),F===null)throw vn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Zt,$t,Pt,pe,Rt,L,A,H,et,it,j,Ct,gt,yt,jt,rt,St,Dt,Nt,Et,Kt,Vt,de,O;function dt(){Zt=new Qg(F),Zt.init(),Vt=new Nx(F,Zt),$t=new qg(F,Zt,t,Vt),Pt=new Dx(F,Zt),$t.reverseDepthBuffer&&f&&Pt.buffers.depth.setReversed(!0),pe=new n_(F),Rt=new Mx,L=new Ux(F,Zt,Pt,Rt,$t,Vt,pe),A=new $g(_),H=new jg(_),et=new l0(F),de=new Xg(F,et),it=new t_(F,et,pe,de),j=new s_(F,it,et,pe),Nt=new i_(F,$t,L),rt=new Zg(Rt),Ct=new vx(_,A,H,Zt,$t,de,rt),gt=new Hx(_,Rt),yt=new wx,jt=new Cx(Zt),Dt=new Wg(_,A,H,Pt,j,p,c),St=new Ix(_,j,$t),O=new Vx(F,pe,$t,Pt),Et=new Yg(F,Zt,pe),Kt=new e_(F,Zt,pe),pe.programs=Ct.programs,_.capabilities=$t,_.extensions=Zt,_.properties=Rt,_.renderLists=yt,_.shadowMap=St,_.state=Pt,_.info=pe}dt();const Z=new kx(_,F);this.xr=Z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Zt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Zt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(q,J,!1))},this.getSize=function(R){return R.set(q,J)},this.setSize=function(R,z,V=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,J=z,e.width=Math.floor(R*Y),e.height=Math.floor(z*Y),V===!0&&(e.style.width=R+"px",e.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(q*Y,J*Y).floor()},this.setDrawingBufferSize=function(R,z,V){q=R,J=z,Y=V,e.width=Math.floor(R*V),e.height=Math.floor(z*V),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(Tt)},this.setViewport=function(R,z,V,X){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,z,V,X),Pt.viewport(P.copy(Tt).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Bt)},this.setScissor=function(R,z,V,X){R.isVector4?Bt.set(R.x,R.y,R.z,R.w):Bt.set(R,z,V,X),Pt.scissor(D.copy(Bt).multiplyScalar(Y).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(R){Pt.setScissorTest(fe=R)},this.setOpaqueSort=function(R){ct=R},this.setTransparentSort=function(R){ft=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(R=!0,z=!0,V=!0){let X=0;if(R){let B=!1;if(C!==null){const ot=C.texture.format;B=ot===Nl||ot===Ul||ot===Dl}if(B){const ot=C.texture.type,pt=ot===ai||ot===qi||ot===Mo||ot===Ps||ot===Pl||ot===Il,Mt=Dt.getClearColor(),bt=Dt.getClearAlpha(),Ft=Mt.r,zt=Mt.g,It=Mt.b;pt?(g[0]=Ft,g[1]=zt,g[2]=It,g[3]=bt,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Ft,v[1]=zt,v[2]=It,v[3]=bt,F.clearBufferiv(F.COLOR,0,v))}else X|=F.COLOR_BUFFER_BIT}z&&(X|=F.DEPTH_BUFFER_BIT),V&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Dt.dispose(),yt.dispose(),jt.dispose(),Rt.dispose(),A.dispose(),H.dispose(),j.dispose(),de.dispose(),O.dispose(),Ct.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",th),Z.removeEventListener("sessionend",eh),wi.stop()};function nt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=pe.autoReset,z=St.enabled,V=St.autoUpdate,X=St.needsUpdate,B=St.type;dt(),pe.autoReset=R,St.enabled=z,St.autoUpdate=V,St.needsUpdate=X,St.type=B}function _t(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function kt(R){const z=R.target;z.removeEventListener("dispose",kt),Me(z)}function Me(R){Oe(R),Rt.remove(R)}function Oe(R){const z=Rt.get(R).programs;z!==void 0&&(z.forEach(function(V){Ct.releaseProgram(V)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,V,X,B,ot){z===null&&(z=xe);const pt=B.isMesh&&B.matrixWorld.determinant()<0,Mt=sd(R,z,V,X,B);Pt.setMaterial(X,pt);let bt=V.index,Ft=1;if(X.wireframe===!0){if(bt=it.getWireframeAttribute(V),bt===void 0)return;Ft=2}const zt=V.drawRange,It=V.attributes.position;let Qt=zt.start*Ft,ie=(zt.start+zt.count)*Ft;ot!==null&&(Qt=Math.max(Qt,ot.start*Ft),ie=Math.min(ie,(ot.start+ot.count)*Ft)),bt!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,bt.count)):It!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,It.count));const be=ie-Qt;if(be<0||be===1/0)return;de.setup(B,X,Mt,V,bt);let ye,te=Et;if(bt!==null&&(ye=et.get(bt),te=Kt,te.setIndex(ye)),B.isMesh)X.wireframe===!0?(Pt.setLineWidth(X.wireframeLinewidth*Se()),te.setMode(F.LINES)):te.setMode(F.TRIANGLES);else if(B.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),Pt.setLineWidth(Lt*Se()),B.isLineSegments?te.setMode(F.LINES):B.isLineLoop?te.setMode(F.LINE_LOOP):te.setMode(F.LINE_STRIP)}else B.isPoints?te.setMode(F.POINTS):B.isSprite&&te.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)te.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Lt=B._multiDrawStarts,De=B._multiDrawCounts,se=B._multiDrawCount,Rn=bt?et.get(bt).bytesPerElement:1,Qi=Rt.get(X).currentProgram.getUniforms();for(let un=0;un<se;un++)Qi.setValue(F,"_gl_DrawID",un),te.render(Lt[un]/Rn,De[un])}else if(B.isInstancedMesh)te.renderInstances(Qt,be,B.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,De=Math.min(V.instanceCount,Lt);te.renderInstances(Qt,be,De)}else te.render(Qt,be)};function re(R,z,V){R.transparent===!0&&R.side===Ht&&R.forceSinglePass===!1?(R.side=je,R.needsUpdate=!0,Oo(R,z,V),R.side=Mi,R.needsUpdate=!0,Oo(R,z,V),R.side=Ht):Oo(R,z,V)}this.compile=function(R,z,V=null){V===null&&(V=R),d=jt.get(V),d.init(z),x.push(d),V.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),R!==V&&R.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const X=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ot=B.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){const Mt=ot[pt];re(Mt,V,B),X.add(Mt)}else re(ot,V,B),X.add(ot)}),x.pop(),d=null,X},this.compileAsync=function(R,z,V=null){const X=this.compile(R,z,V);return new Promise(B=>{function ot(){if(X.forEach(function(pt){Rt.get(pt).currentProgram.isReady()&&X.delete(pt)}),X.size===0){B(R);return}setTimeout(ot,10)}Zt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Cn=null;function qn(R){Cn&&Cn(R)}function th(){wi.stop()}function eh(){wi.start()}const wi=new vf;wi.setAnimationLoop(qn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){Cn=R,Z.setAnimationLoop(R),R===null?wi.stop():wi.start()},Z.addEventListener("sessionstart",th),Z.addEventListener("sessionend",eh),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,z,C),d=jt.get(R,x.length),d.init(z),x.push(d),Ut.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),tt.setFromProjectionMatrix(Ut),At=this.localClippingEnabled,lt=rt.init(this.clippingPlanes,At),m=yt.get(R,y.length),m.init(),y.push(m),Z.enabled===!0&&Z.isPresenting===!0){const ot=_.xr.getDepthSensingMesh();ot!==null&&aa(ot,z,-1/0,_.sortObjects)}aa(R,z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ct,ft),Jt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Jt&&Dt.addToRenderList(m,R),this.info.render.frame++,lt===!0&&rt.beginShadows();const V=d.state.shadowsArray;St.render(V,R,z),lt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(d.setupLights(),z.isArrayCamera){const ot=z.cameras;if(B.length>0)for(let pt=0,Mt=ot.length;pt<Mt;pt++){const bt=ot[pt];ih(X,B,R,bt)}Jt&&Dt.render(R);for(let pt=0,Mt=ot.length;pt<Mt;pt++){const bt=ot[pt];nh(m,R,bt,bt.viewport)}}else B.length>0&&ih(X,B,R,z),Jt&&Dt.render(R),nh(m,R,z);C!==null&&E===0&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(_,R,z),de.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(d=x[x.length-1],lt===!0&&rt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function aa(R,z,V,X){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||tt.intersectsSprite(R)){X&&Xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const pt=j.update(R),Mt=R.material;Mt.visible&&m.push(R,pt,Mt,V,Xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||tt.intersectsObject(R))){const pt=j.update(R),Mt=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xt.copy(R.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Xt.copy(pt.boundingSphere.center)),Xt.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(Mt)){const bt=pt.groups;for(let Ft=0,zt=bt.length;Ft<zt;Ft++){const It=bt[Ft],Qt=Mt[It.materialIndex];Qt&&Qt.visible&&m.push(R,pt,Qt,V,Xt.z,It)}}else Mt.visible&&m.push(R,pt,Mt,V,Xt.z,null)}}const ot=R.children;for(let pt=0,Mt=ot.length;pt<Mt;pt++)aa(ot[pt],z,V,X)}function nh(R,z,V,X){const B=R.opaque,ot=R.transmissive,pt=R.transparent;d.setupLightsView(V),lt===!0&&rt.setGlobalState(_.clippingPlanes,V),X&&Pt.viewport(P.copy(X)),B.length>0&&Fo(B,z,V),ot.length>0&&Fo(ot,z,V),pt.length>0&&Fo(pt,z,V),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function ih(R,z,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[X.id]===void 0&&(d.state.transmissionRenderTarget[X.id]=new Nn(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?oi:ai,minFilter:Hi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const ot=d.state.transmissionRenderTarget[X.id],pt=X.viewport||P;ot.setSize(pt.z*_.transmissionResolutionScale,pt.w*_.transmissionResolutionScale);const Mt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(G),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),Jt&&Dt.render(V);const bt=_.toneMapping;_.toneMapping=vi;const Ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),d.setupLightsView(X),lt===!0&&rt.setGlobalState(_.clippingPlanes,X),Fo(R,V,X),L.updateMultisampleRenderTarget(ot),L.updateRenderTargetMipmap(ot),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let It=0,Qt=z.length;It<Qt;It++){const ie=z[It],be=ie.object,ye=ie.geometry,te=ie.material,Lt=ie.group;if(te.side===Ht&&be.layers.test(X.layers)){const De=te.side;te.side=je,te.needsUpdate=!0,sh(be,V,X,ye,te,Lt),te.side=De,te.needsUpdate=!0,zt=!0}}zt===!0&&(L.updateMultisampleRenderTarget(ot),L.updateRenderTargetMipmap(ot))}_.setRenderTarget(Mt),_.setClearColor(G,W),Ft!==void 0&&(X.viewport=Ft),_.toneMapping=bt}function Fo(R,z,V){const X=z.isScene===!0?z.overrideMaterial:null;for(let B=0,ot=R.length;B<ot;B++){const pt=R[B],Mt=pt.object,bt=pt.geometry,Ft=X===null?pt.material:X,zt=pt.group;Mt.layers.test(V.layers)&&sh(Mt,z,V,bt,Ft,zt)}}function sh(R,z,V,X,B,ot){R.onBeforeRender(_,z,V,X,B,ot),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(_,z,V,X,R,ot),B.transparent===!0&&B.side===Ht&&B.forceSinglePass===!1?(B.side=je,B.needsUpdate=!0,_.renderBufferDirect(V,z,X,B,R,ot),B.side=Mi,B.needsUpdate=!0,_.renderBufferDirect(V,z,X,B,R,ot),B.side=Ht):_.renderBufferDirect(V,z,X,B,R,ot),R.onAfterRender(_,z,V,X,B,ot)}function Oo(R,z,V){z.isScene!==!0&&(z=xe);const X=Rt.get(R),B=d.state.lights,ot=d.state.shadowsArray,pt=B.state.version,Mt=Ct.getParameters(R,B.state,ot,z,V),bt=Ct.getProgramCacheKey(Mt);let Ft=X.programs;X.environment=R.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(R.isMeshStandardMaterial?H:A).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",kt),Ft=new Map,X.programs=Ft);let zt=Ft.get(bt);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===pt)return rh(R,Mt),zt}else Mt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Mt,_),zt=Ct.acquireProgram(Mt,bt),Ft.set(bt,zt),X.uniforms=Mt.uniforms;const It=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(It.clippingPlanes=rt.uniform),rh(R,Mt),X.needsLights=rd(R),X.lightsStateVersion=pt,X.needsLights&&(It.ambientLightColor.value=B.state.ambient,It.lightProbe.value=B.state.probe,It.directionalLights.value=B.state.directional,It.directionalLightShadows.value=B.state.directionalShadow,It.spotLights.value=B.state.spot,It.spotLightShadows.value=B.state.spotShadow,It.rectAreaLights.value=B.state.rectArea,It.ltc_1.value=B.state.rectAreaLTC1,It.ltc_2.value=B.state.rectAreaLTC2,It.pointLights.value=B.state.point,It.pointLightShadows.value=B.state.pointShadow,It.hemisphereLights.value=B.state.hemi,It.directionalShadowMap.value=B.state.directionalShadowMap,It.directionalShadowMatrix.value=B.state.directionalShadowMatrix,It.spotShadowMap.value=B.state.spotShadowMap,It.spotLightMatrix.value=B.state.spotLightMatrix,It.spotLightMap.value=B.state.spotLightMap,It.pointShadowMap.value=B.state.pointShadowMap,It.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function oh(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Er.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function rh(R,z){const V=Rt.get(R);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function sd(R,z,V,X,B){z.isScene!==!0&&(z=xe),L.resetTextureUnits();const ot=z.fog,pt=X.isMeshStandardMaterial?z.environment:null,Mt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ls,bt=(X.isMeshStandardMaterial?H:A).get(X.envMap||pt),Ft=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,ie=!!V.morphAttributes.color;let be=vi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(be=_.toneMapping);const ye=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=ye!==void 0?ye.length:0,Lt=Rt.get(X),De=d.state.lights;if(lt===!0&&(At===!0||R!==M)){const He=R===M&&X.id===w;rt.setState(X,R,He)}let se=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==De.state.version||Lt.outputColorSpace!==Mt||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==bt||X.fog===!0&&Lt.fog!==ot||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==rt.numPlanes||Lt.numIntersection!==rt.numIntersection)||Lt.vertexAlphas!==Ft||Lt.vertexTangents!==zt||Lt.morphTargets!==It||Lt.morphNormals!==Qt||Lt.morphColors!==ie||Lt.toneMapping!==be||Lt.morphTargetsCount!==te)&&(se=!0):(se=!0,Lt.__version=X.version);let Rn=Lt.currentProgram;se===!0&&(Rn=Oo(X,z,B));let Qi=!1,un=!1,Ws=!1;const ge=Rn.getUniforms(),Mn=Lt.uniforms;if(Pt.useProgram(Rn.program)&&(Qi=!0,un=!0,Ws=!0),X.id!==w&&(w=X.id,un=!0),Qi||M!==R){Pt.buffers.depth.getReversed()?(mt.copy(R.projectionMatrix),jd(mt),Qd(mt),ge.setValue(F,"projectionMatrix",mt)):ge.setValue(F,"projectionMatrix",R.projectionMatrix),ge.setValue(F,"viewMatrix",R.matrixWorldInverse);const Qe=ge.map.cameraPosition;Qe!==void 0&&Qe.setValue(F,Ot.setFromMatrixPosition(R.matrixWorld)),$t.logarithmicDepthBuffer&&ge.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,un=!0,Ws=!0)}if(B.isSkinnedMesh){ge.setOptional(F,B,"bindMatrix"),ge.setOptional(F,B,"bindMatrixInverse");const He=B.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ge.setValue(F,"boneTexture",He.boneTexture,L))}B.isBatchedMesh&&(ge.setOptional(F,B,"batchingTexture"),ge.setValue(F,"batchingTexture",B._matricesTexture,L),ge.setOptional(F,B,"batchingIdTexture"),ge.setValue(F,"batchingIdTexture",B._indirectTexture,L),ge.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&ge.setValue(F,"batchingColorTexture",B._colorsTexture,L));const yn=V.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Nt.update(B,V,Rn),(un||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,ge.setValue(F,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Mn.envMap.value=bt,Mn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(Mn.envMapIntensity.value=z.environmentIntensity),un&&(ge.setValue(F,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&od(Mn,Ws),ot&&X.fog===!0&&gt.refreshFogUniforms(Mn,ot),gt.refreshMaterialUniforms(Mn,X,Y,J,d.state.transmissionRenderTarget[R.id]),Er.upload(F,oh(Lt),Mn,L)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Er.upload(F,oh(Lt),Mn,L),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(F,"center",B.center),ge.setValue(F,"modelViewMatrix",B.modelViewMatrix),ge.setValue(F,"normalMatrix",B.normalMatrix),ge.setValue(F,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const He=X.uniformsGroups;for(let Qe=0,ca=He.length;Qe<ca;Qe++){const Si=He[Qe];O.update(Si,Rn),O.bind(Si,Rn)}}return Rn}function od(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function rd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,z,V){Rt.get(R.texture).__webglTexture=z,Rt.get(R.depthTexture).__webglTexture=V;const X=Rt.get(R);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const V=Rt.get(R);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0};const ad=F.createFramebuffer();this.setRenderTarget=function(R,z=0,V=0){C=R,b=z,E=V;let X=!0,B=null,ot=!1,pt=!1;if(R){const bt=Rt.get(R);if(bt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(bt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(bt.__hasExternalTextures)L.rebindTextures(R,Rt.get(R.texture).__webglTexture,Rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const It=R.depthTexture;if(bt.__boundDepthTexture!==It){if(It!==null&&Rt.has(It)&&(R.width!==It.image.width||R.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Ft=R.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(pt=!0);const zt=Rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?B=zt[z][V]:B=zt[z],ot=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?B=Rt.get(R).__webglMultisampledFramebuffer:Array.isArray(zt)?B=zt[V]:B=zt,P.copy(R.viewport),D.copy(R.scissor),N=R.scissorTest}else P.copy(Tt).multiplyScalar(Y).floor(),D.copy(Bt).multiplyScalar(Y).floor(),N=fe;if(V!==0&&(B=ad),Pt.bindFramebuffer(F.FRAMEBUFFER,B)&&X&&Pt.drawBuffers(R,B),Pt.viewport(P),Pt.scissor(D),Pt.setScissorTest(N),ot){const bt=Rt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,bt.__webglTexture,V)}else if(pt){const bt=Rt.get(R.texture),Ft=z;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,bt.__webglTexture,V,Ft)}else if(R!==null&&V!==0){const bt=Rt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bt.__webglTexture,V)}w=-1},this.readRenderTargetPixels=function(R,z,V,X,B,ot,pt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){Pt.bindFramebuffer(F.FRAMEBUFFER,Mt);try{const bt=R.texture,Ft=bt.format,zt=bt.type;if(!$t.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-X&&V>=0&&V<=R.height-B&&F.readPixels(z,V,X,B,Vt.convert(Ft),Vt.convert(zt),ot)}finally{const bt=C!==null?Rt.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(R,z,V,X,B,ot,pt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){const bt=R.texture,Ft=bt.format,zt=bt.type;if(!$t.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-X&&V>=0&&V<=R.height-B){Pt.bindFramebuffer(F.FRAMEBUFFER,Mt);const It=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,It),F.bufferData(F.PIXEL_PACK_BUFFER,ot.byteLength,F.STREAM_READ),F.readPixels(z,V,X,B,Vt.convert(Ft),Vt.convert(zt),0);const Qt=C!==null?Rt.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(F.FRAMEBUFFER,Qt);const ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Jd(F,ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,It),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ot),F.deleteBuffer(It),F.deleteSync(ie),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,z=null,V=0){R.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const X=Math.pow(2,-V),B=Math.floor(R.image.width*X),ot=Math.floor(R.image.height*X),pt=z!==null?z.x:0,Mt=z!==null?z.y:0;L.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,pt,Mt,B,ot),Pt.unbindTexture()};const cd=F.createFramebuffer(),ld=F.createFramebuffer();this.copyTextureToTexture=function(R,z,V=null,X=null,B=0,ot=null){R.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1],z=arguments[2],ot=arguments[3]||0,V=null),ot===null&&(B!==0?(gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=B,B=0):ot=0);let pt,Mt,bt,Ft,zt,It,Qt,ie,be;const ye=R.isCompressedTexture?R.mipmaps[ot]:R.image;if(V!==null)pt=V.max.x-V.min.x,Mt=V.max.y-V.min.y,bt=V.isBox3?V.max.z-V.min.z:1,Ft=V.min.x,zt=V.min.y,It=V.isBox3?V.min.z:0;else{const yn=Math.pow(2,-B);pt=Math.floor(ye.width*yn),Mt=Math.floor(ye.height*yn),R.isDataArrayTexture?bt=ye.depth:R.isData3DTexture?bt=Math.floor(ye.depth*yn):bt=1,Ft=0,zt=0,It=0}X!==null?(Qt=X.x,ie=X.y,be=X.z):(Qt=0,ie=0,be=0);const te=Vt.convert(z.format),Lt=Vt.convert(z.type);let De;z.isData3DTexture?(L.setTexture3D(z,0),De=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(L.setTexture2DArray(z,0),De=F.TEXTURE_2D_ARRAY):(L.setTexture2D(z,0),De=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const se=F.getParameter(F.UNPACK_ROW_LENGTH),Rn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Qi=F.getParameter(F.UNPACK_SKIP_PIXELS),un=F.getParameter(F.UNPACK_SKIP_ROWS),Ws=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ft),F.pixelStorei(F.UNPACK_SKIP_ROWS,zt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,It);const ge=R.isDataArrayTexture||R.isData3DTexture,Mn=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const yn=Rt.get(R),He=Rt.get(z),Qe=Rt.get(yn.__renderTarget),ca=Rt.get(He.__renderTarget);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let Si=0;Si<bt;Si++)ge&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(R).__webglTexture,B,It+Si),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(z).__webglTexture,ot,be+Si)),F.blitFramebuffer(Ft,zt,pt,Mt,Qt,ie,pt,Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(B!==0||R.isRenderTargetTexture||Rt.has(R)){const yn=Rt.get(R),He=Rt.get(z);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,cd),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ld);for(let Qe=0;Qe<bt;Qe++)ge?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,yn.__webglTexture,B,It+Qe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yn.__webglTexture,B),Mn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,He.__webglTexture,ot,be+Qe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,He.__webglTexture,ot),B!==0?F.blitFramebuffer(Ft,zt,pt,Mt,Qt,ie,pt,Mt,F.COLOR_BUFFER_BIT,F.NEAREST):Mn?F.copyTexSubImage3D(De,ot,Qt,ie,be+Qe,Ft,zt,pt,Mt):F.copyTexSubImage2D(De,ot,Qt,ie,Ft,zt,pt,Mt);Pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(De,ot,Qt,ie,be,pt,Mt,bt,te,Lt,ye.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(De,ot,Qt,ie,be,pt,Mt,bt,te,ye.data):F.texSubImage3D(De,ot,Qt,ie,be,pt,Mt,bt,te,Lt,ye):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ot,Qt,ie,pt,Mt,te,Lt,ye.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ot,Qt,ie,ye.width,ye.height,te,ye.data):F.texSubImage2D(F.TEXTURE_2D,ot,Qt,ie,pt,Mt,te,Lt,ye);F.pixelStorei(F.UNPACK_ROW_LENGTH,se),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qi),F.pixelStorei(F.UNPACK_SKIP_ROWS,un),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ws),ot===0&&z.generateMipmaps&&F.generateMipmap(De),Pt.unbindTexture()},this.copyTextureToTexture3D=function(R,z,V=null,X=null,B=0){return R.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,R=arguments[2],z=arguments[3],B=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,V,X,B)},this.initRenderTarget=function(R){Rt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){b=0,E=0,C=null,Pt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Xx=15,Yx=6,qx=1.8,kr=8,mu=.85,gu=.98,Gr=.003,ce=90,sa=1.7,Zx=60,$x=45,Kx=10,Jx=6,jx=8,Qx=4,tv=5,ev=80,nv=35,iv=30,sv=25,ov=60,Ef=3,rv=20,av=5,cv=30,lv=40,hv=6,uv=280,sl=2.5,fv=6,_u=1.5,ol=5,xu=2.5,Xa=12,Ne=30,dv=4,pv=5,mv=8,gv=2.2,k={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160},Ge=new Wx({antialias:!0,powerPreference:"default"});Ge.setSize(window.innerWidth,window.innerHeight);Ge.setPixelRatio(Math.min(window.devicePixelRatio,2));Ge.shadowMap.enabled=!0;Ge.shadowMap.type=Du;Ge.toneMapping=Nu;Ge.toneMappingExposure=2.8;Ge.outputColorSpace=Je;document.body.appendChild(Ge.domElement);const Ke=new pn(65,window.innerWidth/window.innerHeight,.1,300),bf=new xf,vt=new yp;vt.background=new at(k.skyDeep);vt.fog=new Fl(k.fog,.01);window.addEventListener("resize",()=>{Ke.aspect=window.innerWidth/window.innerHeight,Ke.updateProjectionMatrix(),Ge.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||bf.getDelta()});const Tf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Lo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _v=new Vl(-1,1,1,-1,0,1);class xv extends Ie{constructor(){super(),this.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qt([0,2,0,0,2,0],2))}}const vv=new xv;class Af{constructor(t){this._mesh=new I(vv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,_v)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Mv extends Lo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof cn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ur.clone(t.uniforms),this.material=new cn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Af(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vu extends Lo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class yv extends Lo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:oi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mv(Tf),this.copyPass.material.blending=si,this.clock=new xf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vu!==void 0&&(r instanceof vu?n=!0:r instanceof yv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sv extends Lo{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const Ev={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ns extends Lo{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Nn(o,r,{type:oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Nn(o,r,{type:oi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Nn(o,r,{type:oi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=Ev;this.highPassUniforms=Ur.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ht(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Tf;this.copyUniforms=Ur.clone(h.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:fc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new K,this.fsQuad=new Af(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new ht(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ns.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ns.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new cn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new cn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ns.BlurDirectionX=new ht(1,0);Ns.BlurDirectionY=new ht(0,1);let Xi=null,Xl=!0;try{const s=new Sv(vt,Ke),t=new Ns(new ht(window.innerWidth,window.innerHeight),.6,.4,.85);Xi=new wv(Ge),Xi.addPass(s),Xi.addPass(t)}catch(s){console.warn("Bloom unavailable, falling back to direct render:",s.message),Xl=!1}window.addEventListener("resize",()=>{Xl&&Xi&&Xi.setSize(window.innerWidth,window.innerHeight)});function Mu(){Xl&&Xi?Xi.render():Ge.render(vt,Ke)}const Yl=new s0(k.ambient,k.ground,.5);vt.add(Yl);const Tn=new na(k.moon,.85);Tn.position.set(30,60,-20);Tn.castShadow=!0;Tn.shadow.camera.left=-90;Tn.shadow.camera.right=90;Tn.shadow.camera.top=90;Tn.shadow.camera.bottom=-90;Tn.shadow.camera.near=1;Tn.shadow.camera.far=250;Tn.shadow.mapSize.set(1024,1024);Tn.shadow.bias=-.001;vt.add(Tn);const An=new na(2241365,.3);An.position.set(-40,45,25);An.castShadow=!0;An.shadow.camera.left=-70;An.shadow.camera.right=70;An.shadow.camera.top=70;An.shadow.camera.bottom=-70;An.shadow.camera.near=1;An.shadow.camera.far=200;An.shadow.mapSize.set(512,512);An.shadow.bias=-.002;vt.add(An);const Cf=new na(3359829,.4);Cf.position.set(-25,15,30);vt.add(Cf);const Rf=new ji(3368516,.7,100);Rf.position.set(0,.5,0);vt.add(Rf);const bv=[{pos:[15,3,15],col:3368618,int:.8,dist:30},{pos:[-20,4,-10],col:6702216,int:.7,dist:25},{pos:[0,5,30],col:2263142,int:.7,dist:28},{pos:[-15,3,20],col:4491417,int:.6,dist:22},{pos:[25,3,-20],col:10053188,int:.5,dist:20}];for(const s of bv){const t=new ji(s.col,s.int,s.dist);t.position.set(s.pos[0],s.pos[1],s.pos[2]),vt.add(t)}const Pf=new na(4478327,.4);Pf.position.set(-10,25,40);vt.add(Pf);const ql=new ji(6719624,.6,20);vt.add(ql);const Ui=[];function Tv(){for(let s=0;s<pv;s++){const t=new ji(k.crystal,0,16);vt.add(t),Ui.push(t)}}const ro=new ji(k.orbGold,0,15);vt.add(ro);const Ce={};let Eo=0,Yi=0,oa=!1,If=!1,Zl=0,$l=0,Kl=!1,ra=!1,Do=!1,Hr=null,$i=null,rl=0,al=0,cl=null;function Av(s){cl=s}function Cv(s){If=s}function Rv(s){ra=s}function Uo(){!If&&cl&&cl()}window.addEventListener("keydown",s=>{Ce[s.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(s.code)>=0&&s.preventDefault(),Uo()});window.addEventListener("keyup",s=>{Ce[s.code]=!1});window.addEventListener("blur",()=>{for(const s in Ce)Ce[s]=!1;oa=!1});Ge.domElement.addEventListener("mousedown",()=>{oa=!0,Uo()});window.addEventListener("mouseup",()=>{oa=!1});window.addEventListener("mousemove",s=>{oa&&(Eo-=s.movementX*Gr,Yi-=s.movementY*Gr,Yi=Math.max(-1,Math.min(1,Yi)))});const Pv="ontouchstart"in window||navigator.maxTouchPoints>0,No=document.getElementById("joy-zone"),Vr=document.getElementById("joy-knob"),Jl=document.getElementById("btn-jump");Pv&&(No.style.display="block",Jl.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function Lf(s,t){const e=No.getBoundingClientRect();let n=s-(e.left+e.width/2),i=t-(e.top+e.height/2);const o=Math.sqrt(n*n+i*i),r=52;o>r&&(n=n/o*r,i=i/o*r),Zl=n/r,$l=i/r,Vr.style.left=40+n+"px",Vr.style.top=40+i+"px"}No.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),Uo();const t=s.changedTouches[0];Hr=t.identifier,Kl=!0,Lf(t.clientX,t.clientY)},{passive:!1});No.addEventListener("touchmove",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Hr&&Lf(s.changedTouches[t].clientX,s.changedTouches[t].clientY)},{passive:!1});No.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation();for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===Hr&&(Hr=null,Kl=!1,Zl=0,$l=0,Vr.style.left="40px",Vr.style.top="40px")},{passive:!1});Jl.addEventListener("touchstart",s=>{s.preventDefault(),s.stopPropagation(),Uo(),ra=!0},{passive:!1});Jl.addEventListener("touchend",s=>{s.preventDefault(),s.stopPropagation(),ra=!1},{passive:!1});Ge.domElement.addEventListener("touchstart",s=>{s.preventDefault(),Uo();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.clientX>window.innerWidth*.3&&$i===null&&($i=e.identifier,rl=e.clientX,al=e.clientY)}},{passive:!1});Ge.domElement.addEventListener("touchmove",s=>{s.preventDefault();for(let t=0;t<s.changedTouches.length;t++){const e=s.changedTouches[t];e.identifier===$i&&(Eo-=(e.clientX-rl)*Gr,Yi-=(e.clientY-al)*Gr,Yi=Math.max(-1,Math.min(1,Yi)),rl=e.clientX,al=e.clientY)}},{passive:!1});Ge.domElement.addEventListener("touchend",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===$i&&($i=null)},{passive:!1});Ge.domElement.addEventListener("touchcancel",s=>{for(let t=0;t<s.changedTouches.length;t++)s.changedTouches[t].identifier===$i&&($i=null)},{passive:!1});function Iv(){let s=0,t=0;Ce.KeyW&&(t-=1),Ce.KeyS&&(t+=1),Ce.KeyA&&(s-=1),Ce.KeyD&&(s+=1),Kl&&(s+=Zl,t+=$l);const e=Math.sqrt(s*s+t*t);e>1&&(s/=e,t/=e);const n=Yx*(Ce.ShiftLeft||Ce.ShiftRight||Do?qx:1),i=Math.sin(Eo),o=Math.cos(Eo);return{x:(s*o+t*i)*n,z:(-s*i+t*o)*n}}const hn={mushCap:new $(.5,8,5),mushStem:new wt(.06,.1,.6,5),mushDot:new $(.06,4,3),crystal:new wt(0,.35,1.8,6),crystalSm:new wt(0,.18,.9,5),fly:new $(.06,4,3),spore:new $(.04,3,3),dandSeed:new $(.025,3,3),bubble:new $(.15,8,6),starMote:new $(.03,3,3),dustMote:new $(.035,3,3)};let _o=42;function S(){return _o=_o*16807%2147483647,(_o&2147483647)/2147483647}function Lv(){return _o}function Dv(s){_o=s}function ur(s,t){let e=s*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function xo(s){return s*s*(3-2*s)}function Df(s,t){const e=Math.floor(s),n=Math.floor(t),i=xo(s-e),o=xo(t-n),r=ur(e,n),a=ur(e+1,n),c=ur(e,n+1),l=ur(e+1,n+1);return r+(a-r)*i+(c-r)*o+(r-a-c+l)*i*o}function yu(s,t,e){let n=0,i=.5,o=1;for(let r=0;r<e;r++)n+=Df(s*o,t*o)*i,i*=.5,o*=2;return n}const ll=[];function hl(s,t,e){ll.push({x:s,z:t,r:e})}function ne(s,t){const e=Math.sqrt(s*s+t*t),n=1-xo(Math.max(0,(e-ce*.7)/(ce*.3))),i=xo(Math.min(1,e/8)),o=.035,r=yu(s*o,t*o,4),a=yu(s*o*2.7+50,t*o*2.7+50,3),c=Df(s*.15,t*.15);let l=r*2.5+a*.8+c*.15;l*=n*i;for(let h=0;h<ll.length;h++){const u=ll[h],f=s-u.x,p=t-u.z,g=Math.sqrt(f*f+p*p);if(g<u.r*2){const v=xo(Math.max(0,(g-u.r*.5)/(u.r*1.5)));l*=v}}return l}function Uv(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#2a5038",e.fillRect(0,0,2048,2048);const i=[{col:"rgba(40,80,50,0.35)",n:15,r:120},{col:"rgba(60,50,25,0.25)",n:12,r:100},{col:"rgba(30,65,55,0.25)",n:10,r:110},{col:"rgba(55,70,35,0.2)",n:8,r:90},{col:"rgba(35,40,25,0.25)",n:8,r:80}];for(const h of i)for(let u=0;u<h.n;u++){const f=n()*2048,p=n()*2048,g=h.r*(.5+n()*.8),v=e.createRadialGradient(f,p,0,f,p,g);v.addColorStop(0,h.col),v.addColorStop(.6,h.col.replace(/[\d.]+\)$/,parseFloat(h.col.match(/[\d.]+\)$/)[0])*.4+")")),v.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=v;for(let m=-1;m<=1;m++)for(let d=-1;d<=1;d++)e.beginPath(),e.arc(f+m*2048,p+d*2048,g,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(20,45,25,0.2)","rgba(35,55,28,0.18)","rgba(28,22,12,0.2)","rgba(15,38,30,0.15)"]},{n:200,r:10,colors:["rgba(30,55,30,0.14)","rgba(45,35,18,0.12)","rgba(22,48,35,0.12)","rgba(38,28,14,0.1)"]},{n:500,r:4,colors:["rgba(25,50,28,0.1)","rgba(40,30,15,0.08)","rgba(18,42,32,0.08)","rgba(32,25,10,0.06)"]}];for(const h of o)for(let u=0;u<h.n;u++){e.fillStyle=h.colors[Math.floor(n()*h.colors.length)];const f=n()*2048,p=n()*2048;e.beginPath(),e.arc(f,p,h.r+n()*h.r*.6,0,6.28),e.fill()}const r=["rgba(60,200,100,0.06)","rgba(50,180,120,0.05)","rgba(80,160,200,0.04)","rgba(100,220,150,0.05)"];for(let h=0;h<25;h++){let u=n()*2048,f=n()*2048;const p=r[Math.floor(n()*r.length)];e.strokeStyle=p,e.lineWidth=1+n()*2,e.beginPath(),e.moveTo(u,f);let g=n()*6.28;const v=12+Math.floor(n()*16);for(let m=0;m<v;m++)g+=Math.sin(m*.6)*.5+(n()-.5)*.4,u+=Math.cos(g)*(6+n()*10),f+=Math.sin(g)*(6+n()*10),e.lineTo(u,f);if(e.stroke(),n()<.6){const m=e.createRadialGradient(u,f,0,u,f,6+n()*8);m.addColorStop(0,p.replace("0.0","0.1")),m.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=m,e.beginPath(),e.arc(u,f,6+n()*8,0,6.28),e.fill()}}e.lineWidth=1.2;for(let h=0;h<30;h++){e.strokeStyle=`rgba(20,12,5,${.15+n()*.12})`;let u=n()*2048,f=n()*2048,p=n()*6.28;e.beginPath(),e.moveTo(u,f);for(let g=0;g<10;g++)p+=Math.sin(g*.7)*.5+(n()-.5)*.35,u+=Math.cos(p)*(8+n()*14),f+=Math.sin(p)*(8+n()*14),e.lineTo(u,f);e.stroke()}const a=["rgba(55,32,12,0.3)","rgba(70,42,18,0.25)","rgba(40,55,22,0.22)","rgba(22,50,28,0.2)","rgba(60,45,20,0.25)","rgba(30,60,35,0.18)","rgba(50,25,8,0.22)","rgba(65,55,25,0.18)"];for(let h=0;h<3e3;h++){e.fillStyle=a[Math.floor(n()*a.length)];const u=n()*2048,f=n()*2048,p=.8+n()*2.5;e.beginPath(),e.arc(u,f,p,0,6.28),e.fill()}for(let h=0;h<40;h++){const u=n()*2048,f=n()*2048,p=15+n()*35,g=e.createRadialGradient(u,f,0,u,f,p),v=n();v<.4?(g.addColorStop(0,"rgba(45,90,50,0.18)"),g.addColorStop(1,"rgba(25,55,30,0)")):v<.7?(g.addColorStop(0,"rgba(35,75,60,0.16)"),g.addColorStop(1,"rgba(20,50,38,0)")):(g.addColorStop(0,"rgba(55,75,35,0.14)"),g.addColorStop(1,"rgba(30,45,20,0)")),e.fillStyle=g,e.beginPath(),e.arc(u,f,p,0,6.28),e.fill()}for(let h=0;h<400;h++){const u=n()*2048,f=n()*2048,p=1.5+n()*3.5,g=Math.floor(28+n()*42);e.fillStyle=`rgba(${g},${g-4},${g-10},0.3)`,e.beginPath(),e.arc(u,f,p,0,6.28),e.fill()}e.lineWidth=.7;for(let h=0;h<80;h++){const u=n()*2048,f=n()*2048,p=4+n()*18,g=n()*6.28;e.strokeStyle=`rgba(22,12,5,${.15+n()*.1})`,e.beginPath(),e.moveTo(u,f),e.lineTo(u+Math.cos(g)*p,f+Math.sin(g)*p),e.stroke()}const c=["rgba(80,220,120,0.08)","rgba(60,200,160,0.07)","rgba(100,180,220,0.06)","rgba(120,100,200,0.05)","rgba(200,150,80,0.04)","rgba(60,180,180,0.06)"];for(let h=0;h<300;h++){const u=n()*2048,f=n()*2048,p=c[Math.floor(n()*c.length)];if(e.fillStyle=p,e.beginPath(),e.arc(u,f,1+n()*2,0,6.28),e.fill(),n()<.3){const g=e.createRadialGradient(u,f,0,u,f,4+n()*5);g.addColorStop(0,p),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(u,f,4+n()*5,0,6.28),e.fill()}}for(let h=0;h<150;h++){const u=n()*2048,f=n()*2048;e.fillStyle=`rgba(120,180,130,${.04+n()*.04})`,e.beginPath(),e.arc(u,f,.5+n()*1.2,0,6.28),e.fill()}const l=new zl(t);return l.wrapS=l.wrapT=Pr,l.repeat.set(5,5),l.colorSpace=Je,l}function Nv(){const s=Uv(),t=ce*3,e=200,n=new we(t,t,e,e),i=n.attributes.position;n.attributes.uv;for(let r=0;r<i.count;r++){const a=i.getX(r),c=i.getY(r);Math.sqrt(a*a+c*c)<ce*1.4?i.setZ(r,ne(a,c)):i.setZ(r,0)}n.computeVertexNormals();const o=new I(n,new Q({map:s,color:15663086,roughness:.75,metalness:0,emissive:1718304,emissiveIntensity:.25}));return o.rotation.x=-Math.PI/2,o.receiveShadow=!0,vt.add(o),o}const ul=new he;let Wr=null;function _i(s,t){const e=s>>16&255,n=s>>8&255,i=s&255;return`rgba(${e},${n},${i},${t})`}function xi(s,t,e,n,i,o,r){s.save(),s.translate(t,e),Math.abs(i/n-1)>.01&&s.scale(1,i/n);const a=s.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,_i(o,r)),a.addColorStop(.25,_i(o,r*.55)),a.addColorStop(.55,_i(o,r*.15)),a.addColorStop(.85,_i(o,r*.03)),a.addColorStop(1,_i(o,0)),s.fillStyle=a,s.beginPath(),s.arc(0,0,n,0,6.2832),s.fill(),s.restore()}function Ya(s,t,e,n,i,o,r,a){xi(s,t,e,n,i,o,r),t-n<0&&xi(s,t+a,e,n,i,o,r),t+n>a&&xi(s,t-a,e,n,i,o,r)}function Fv(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),i=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const u of r){Ya(n,u.x*2048,u.y*1024,u.rx*2048,u.ry*1024,u.col,u.a,2048);for(let f=0;f<4;f++){const p=(u.x+(i()-.5)*u.rx)*2048,g=(u.y+(i()-.5)*u.ry)*1024,v=u.rx*2048*(.2+i()*.35),m=u.ry*1024*(.2+i()*.4);Ya(n,p,g,v,m,u.col,u.a*(.4+i()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let u=0;u<30;u++){const f=i()*2048,p=i()*1024*.55,g=40+i()*180,v=25+i()*100;Ya(n,f,p,g,v,a[Math.floor(i()*a.length)],.025+i()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const c=.26;for(let u=0;u<50;u++){const f=u/50,p=f*2048,g=(c+Math.sin(f*Math.PI)*.06+(i()-.5)*.02)*1024,v=2048*.05+i()*2048*.035,m=1024*.04*(.4+i()*.6);xi(n,p,g,v,m,4478310,.025+i()*.015)}for(let u=0;u<25;u++){const f=.2+i()*.6,p=f*2048,g=(c+Math.sin(f*Math.PI)*.04)*1024;xi(n,p,g,2048*.03+i()*2048*.02,1024*.02+i()*1024*.01,6719658,.015+i()*.012)}for(let u=0;u<10;u++){const f=.35+i()*.3,p=f*2048,g=(c+Math.sin(f*Math.PI)*.02)*1024;xi(n,p,g,2048*.02,1024*.012,8943462,.01+i()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let u=0;u<12;u++){const f=.1+i()*.8,p=f*2048,g=(c+Math.sin(f*Math.PI)*.04+(i()-.5)*.02)*1024,v=20+i()*60,m=8+i()*20;xi(n,p,g,v,m,132104,.15+i()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let u=0;u<5e3;u++){const f=i()*2048,p=i()*1024*.65,g=.3+i()*.7,v=.1+i()*.5;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${v})`,n.beginPath(),n.arc(f,p,g,0,6.28),n.fill()}for(let u=0;u<3e3;u++){const f=i(),p=f*2048,v=(c+Math.sin(f*Math.PI)*.06)*1024+(i()-.5)*1024*.1;if(v<0||v>1024*.6)continue;const m=.2+i()*.6,d=.2+i()*.7;n.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${d})`,n.beginPath(),n.arc(p,v,m,0,6.28),n.fill()}for(let u=0;u<60;u++){const f=i()*2048,p=i()*1024*.58,g=1.2+i()*1.8,v=6+i()*14,m=i();let d;m<.45?d="255,255,255":m<.65?d="210,225,255":m<.8?d="255,230,200":m<.92?d="190,210,255":d="255,200,180";const y=n.createRadialGradient(f,p,0,f,p,v);y.addColorStop(0,`rgba(${d},0.5)`),y.addColorStop(.1,`rgba(${d},0.18)`),y.addColorStop(.35,`rgba(${d},0.04)`),y.addColorStop(1,`rgba(${d},0)`),n.fillStyle=y,n.beginPath(),n.arc(f,p,v,0,6.28),n.fill(),n.strokeStyle=`rgba(${d},0.12)`,n.lineWidth=.5;const x=v*.8;n.beginPath(),n.moveTo(f-x,p),n.lineTo(f+x,p),n.moveTo(f,p-x),n.lineTo(f,p+x),n.stroke(),n.fillStyle=`rgba(${d},1)`,n.beginPath(),n.arc(f,p,g,0,6.28),n.fill()}for(let u=0;u<8;u++){const f=i()*2048,p=1024*.08+i()*1024*.42,g=50+i()*90;xi(n,f,p,g,g*.7,3359846,.03);for(let v=0;v<100;v++){const m=i()*6.28,d=i()*i()*g,y=f+Math.cos(m)*d,x=p+Math.sin(m)*d*.65;if(y<0||y>2048||x<0||x>1024)continue;const _=.2+i()*.6;n.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,n.beginPath(),n.arc(y,x,_,0,6.28),n.fill()}}for(let u=0;u<15;u++){const f=r[Math.floor(i()*r.length)],p=(f.x+(i()-.5)*f.rx*.5)*2048,g=(f.y+(i()-.5)*f.ry*.5)*1024,v=3+i()*8,m=n.createRadialGradient(p,g,0,p,g,v*3);m.addColorStop(0,_i(f.col,.2)),m.addColorStop(.3,_i(f.col,.06)),m.addColorStop(1,_i(f.col,0)),n.fillStyle=m,n.beginPath(),n.arc(p,g,v*3,0,6.28),n.fill()}const h=new zl(e);return h.colorSpace=Je,h}function Ov(){const s=Lv(),t=Fv(),e=new $(uv,64,32);Wr=new K({map:t,side:je,fog:!1,transparent:!1});const n=new I(e,Wr);ul.add(n),vt.add(ul),Dv(s)}function Uf(s,t){ul.rotation.y=t*.003}function zv(s){if(Wr){const t=Math.max(.15,s);Wr.color.setRGB(t,t,t)}}const st={pos:new U(0,sa,0),vel:new U,onGround:!0};let wu=0,qa=0,Nf=0,Za=65,Su=65,to=0,Eu=!0,$a=0,Fs=0,fl=[],dl=[],pl=null;function Bv(s,t){fl=s,dl=t}function kv(s){pl=s}function Gv(s){const t=Iv(),e=Ce.ShiftLeft||Ce.ShiftRight||Do;st.vel.x=t.x,st.vel.z=t.z,st.vel.y-=Xx*s,(Ce.Space||ra)&&st.onGround&&(st.vel.y=kr,st.onGround=!1,Rv(!1)),st.onGround||($a=st.vel.y),st.pos.x+=st.vel.x*s,st.pos.y+=st.vel.y*s,st.pos.z+=st.vel.z*s;const n=ne(st.pos.x,st.pos.z)+sa;if(st.pos.y<=n){if(st.pos.y=n,st.vel.y=0,!Eu&&$a<-3){const h=Math.min(Math.abs($a)/kr,1);to=h*.15,pl&&pl(st.pos.x,st.pos.z,Math.floor(3+h*5))}st.onGround=!0}Eu=st.onGround,st.onGround?(st.vel.x*=mu,st.vel.z*=mu):(st.vel.x*=gu,st.vel.z*=gu);const i=.4;for(let h=0;h<fl.length;h++){const u=fl[h],f=st.pos.x-u.x,p=st.pos.z-u.z,g=f*f+p*p,v=.6+i;if(g<v*v&&g>.001){const m=1/Math.sqrt(g);st.pos.x=u.x+f*m*v,st.pos.z=u.z+p*m*v}}for(let h=0;h<dl.length;h++){const u=dl[h],f=st.pos.x-u.x,p=st.pos.z-u.z,g=f*f+p*p,v=u.colR+i;if(g<v*v&&g>.001){const m=1/Math.sqrt(g);st.pos.x=u.x+f*m*v,st.pos.z=u.z+p*m*v}}if(Math.sqrt(st.pos.x*st.pos.x+st.pos.z*st.pos.z)>ce){const h=Math.atan2(st.pos.z,st.pos.x);st.pos.x=Math.cos(h)*ce,st.pos.z=Math.sin(h)*ce}ql.position.copy(st.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&st.onGround;a?Fs=0:Fs+=s,qa+=((a?e?.06:.035:0)-qa)*s*6,a&&(wu+=s*(e?12:8));const l=Math.sin(wu)*qa;Su=e&&a?78:65,Za+=(Su-Za)*s*4,Ke.fov=Za,Ke.updateProjectionMatrix(),to*=Math.pow(.04,s),to<.001&&(to=0),Nf=l-to}const bu=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];function Hv(s,t){const e=new he,n=6+S()*10,i=.2+S()*.3,o=new Q({color:3811352,roughness:.8,emissive:1321496,emissiveIntensity:.12}),r=new I(new wt(i*.4,i,n,6),o);r.position.y=n/2,r.castShadow=!0,e.add(r);const a=new Q({color:2263125,emissive:k.leafGlow,emissiveIntensity:.5,transparent:!0,opacity:.25}),c=2+Math.floor(S()*3);for(let y=0;y<c;y++){const x=y/c*6.28+S()*.5,_=n*.4+S()*n*.4,T=new I(new wt(.008,.015,_,3),a);T.position.set(Math.cos(x)*i*.74,n*.15+_/2,Math.sin(x)*i*.74),e.add(T)}const l=new Q({color:2759696,roughness:.85,emissive:1188368,emissiveIntensity:.08}),h=3+Math.floor(S()*3);for(let y=0;y<h;y++){const x=y/h*6.28+S()*.5,_=.8+S()*1.5,T=new I(new wt(.02,i*.3,_,4),l);T.position.set(Math.cos(x)*i*.5,.08,Math.sin(x)*i*.5),T.rotation.z=x<3.14?1.2+S()*.3:-(1.2+S()*.3),T.rotation.y=x,e.add(T)}const u=3+Math.floor(S()*4);for(let y=0;y<u;y++){const x=n*(.4+S()*.5),_=S()*Math.PI*2,T=1.5+S()*3,b=new I(new wt(.02,.06,T,4),o);b.position.set(Math.cos(_)*.3,x,Math.sin(_)*.3),b.rotation.z=(S()-.5)*1.2,b.rotation.y=_,b.castShadow=!0,e.add(b);const E=bu[Math.floor(S()*bu.length)],C=Math.cos(_)*(T*.5),w=x+S()*1.5,M=Math.sin(_)*(T*.5),P=1+S()*2,D=new Q({color:E.core,emissive:E.core,emissiveIntensity:.7+S()*.5,transparent:!0,opacity:.55,roughness:.3}),N=new I(new Wi(P*.3,1),D);N.position.set(C,w,M),e.add(N);const G=new Q({color:E.leaf,emissive:E.glow,emissiveIntensity:.25+S()*.25,transparent:!0,opacity:.55,roughness:.7}),W=new I(new Wi(P*.75,1),G);W.position.set(C+(S()-.5)*.4,w+(S()-.5)*.4,M+(S()-.5)*.4),W.scale.set(1+S()*.4,.65+S()*.5,1+S()*.4),W.castShadow=!0,W.receiveShadow=!0,e.add(W);const q=new Q({color:E.glow,emissive:E.glow,emissiveIntensity:.12,transparent:!0,opacity:.08,depthWrite:!1}),J=new I(new Wi(P*1.2,1),q);if(J.position.set(C,w,M),e.add(J),S()<.35){const Y=new Q({color:2773040,emissive:1135904,emissiveIntensity:.08,transparent:!0,opacity:.5}),ct=.3+S()*.8,ft=new I(new wt(.008,.003,ct,3),Y),Tt=S()*T*.4;ft.position.set(Math.cos(_)*(.3+Tt),x-ct/2-S()*.3,Math.sin(_)*(.3+Tt)),e.add(ft)}}const f=new Q({color:5911840,emissive:3349e3,emissiveIntensity:.06,roughness:.8}),p=Math.floor(S()*3);for(let y=0;y<p;y++){const x=1+S()*n*.4,_=S()*6.28,T=new I(new $(.08+S()*.08,5,3),f);T.scale.set(1.5,.3,1),T.position.set(Math.cos(_)*i*.8,x,Math.sin(_)*i*.8),T.rotation.y=-_,e.add(T)}const g=new Q({color:k.leaf,emissive:k.leafGlow,emissiveIntensity:.06,transparent:!0,opacity:.07,depthWrite:!1}),v=new I(new $(3+S()*2,8,6),g);v.position.y=n*.65,e.add(v);const m=new Q({color:1183752,roughness:.95}),d=new I(new $(i*2.5,6,3),m);return d.scale.set(1,.12,1),d.position.y=.02,e.add(d),e.position.set(s,0,t),vt.add(e),e}function Vv(s,t){const e=new he,n=.4+S()*1.2,i=S()*6.28,o=.8+S()*1.5,r=.5+S()*.8,a=new I(hn.mushStem,new Q({color:k.mushStem,roughness:.7,emissive:k.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const c=new Q({color:k.mushStem,emissive:k.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new I(new Ee(.09,.012,4,8),c);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const h=new Q({color:k.mushCap,emissive:k.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),u=new I(hn.mushCap,h);u.scale.set(1,.5,1),u.position.y=.55,u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new Q({color:6693546,emissive:k.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Ht});for(let M=0;M<8;M++){const P=M/8*6.28,D=new I(new we(.35,.08),f);D.position.set(Math.cos(P)*.15,.48,Math.sin(P)*.15),D.rotation.y=-P,D.rotation.x=.1,e.add(D)}for(let M=0;M<4;M++){const P=new K({color:16777215,transparent:!0,opacity:.9}),D=new I(hn.mushDot,P),N=S()*6.28,G=.15+S()*.25;D.position.set(Math.cos(N)*G,.6+S()*.1,Math.sin(N)*G),e.add(D)}const p=new Q({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),g=2+Math.floor(S()*2);for(let M=0;M<g;M++){const P=new I(new $(.015+S()*.015,4,3),p),D=S()*6.28,N=.1+S()*.2;P.position.set(Math.cos(D)*N,.63+S()*.08,Math.sin(D)*N),e.add(P)}const v=new Q({color:4465322,emissive:k.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let M=0;M<4;M++){const P=S()*6.28,D=.15+S()*.25,N=new I(new wt(.004,.002,D,3),v);N.position.set(Math.cos(P)*.12,.01,Math.sin(P)*.12),N.rotation.z=1.3*(P<3.14?1:-1),N.rotation.y=P,e.add(N)}const m=new Q({color:k.mushCap,emissive:k.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),d=new I(new Ee(.38,.01,4,12),m);d.position.y=.49,d.rotation.x=Math.PI/2,e.add(d);const y=new Q({color:k.mushStem,emissive:k.mushGlow,emissiveIntensity:.08,roughness:.7}),x=new I(new $(.08,5,3),y);x.scale.set(1,.5,1),x.position.y=.04,e.add(x);const _=new Q({color:1708040,roughness:.95});for(let M=0;M<3;M++){const P=S()*6.28,D=.1+S()*.12,N=new I(new $(.008+S()*.008,3,3),_);N.position.set(Math.cos(P)*D,.005,Math.sin(P)*D),e.add(N)}const T=new K({color:k.mushGlow,transparent:!0,opacity:.2});for(let M=0;M<4;M++){const P=new I(new $(.006,3,3),T);P.position.set((S()-.5)*.2,.35+S()*.1,(S()-.5)*.2),e.add(P)}const b=new Q({color:11167453,emissive:k.mushGlow,emissiveIntensity:r*.3,roughness:.5}),E=3+Math.floor(S()*3);for(let M=0;M<E;M++){const P=S()*6.28,D=S()*.25,N=new I(new $(.015+S()*.015,3,3),b);N.position.set(Math.cos(P)*D,.58+S()*.06,Math.sin(P)*D),e.add(N)}const C=new Q({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Ht}),w=new I(new Fe(.18,8),C);return w.rotation.x=-Math.PI/2,w.position.y=.005,e.add(w),e.scale.setScalar(n),e.position.set(s,0,t),vt.add(e),{group:e,capMat:h,phase:i,speed:o,base:r,x:s,z:t}}function Wv(s,t){const e=new he,n=S()*6.28,i=new Q({color:k.crystal,emissive:k.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new I(hn.crystal,i);o.position.y=.9,o.castShadow=!0,e.add(o);for(let x=0;x<3;x++){const _=new I(hn.crystalSm,i),T=x/3*6.28+S()*.5;_.position.set(Math.cos(T)*.4,.45,Math.sin(T)*.4),_.rotation.z=(S()-.5)*.8,_.castShadow=!0,e.add(_)}const r=new Q({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(S()*3);for(let x=0;x<a;x++){const _=S()*6.28,T=.2+S()*.5,b=.08+S()*.12,E=new I(new $(b,4,3),r);E.scale.set(1+S()*.5,.5+S()*.4,1+S()*.5),E.position.set(Math.cos(_)*T,b*.3,Math.sin(_)*T),E.rotation.set(S(),S(),S()),e.add(E)}const c=new K({color:k.crystalCore,transparent:!0,opacity:.5});for(let x=0;x<3;x++){const _=.4+S()*.8,T=new I(new wt(.008,.008,_,3),c);T.position.set((S()-.5)*.15,.5+S()*.7,(S()-.5)*.15),T.rotation.set((S()-.5)*.8,(S()-.5)*.5,(S()-.5)*.8),e.add(T)}const l=new K({color:11206638,transparent:!0,opacity:.6});for(let x=0;x<5;x++){const _=new I(new $(.012,3,3),l);_.position.set((S()-.5)*1,.3+S()*1.5,(S()-.5)*1),e.add(_)}const h=new Q({color:k.crystal,emissive:k.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let x=0;x<4;x++){const _=S()*6.28,T=.3+S()*.3,b=new I(new wt(0,.015,.12+S()*.1,3),h);b.position.set(Math.cos(_)*T,.06+S()*.1,Math.sin(_)*T),b.rotation.z=(S()-.5)*.6,e.add(b)}const u=new Q({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Ht});for(let x=0;x<2;x++){const _=S()*6.28,T=.2+S()*.3,b=new I(new Fe(.04+S()*.03,5),u);b.rotation.x=-Math.PI/2+S()*.4,b.position.set(Math.cos(_)*T,.05,Math.sin(_)*T),e.add(b)}const f=new K({color:k.crystalCore,transparent:!0,opacity:.2});for(let x=0;x<2;x++){const _=new I(new wt(.003,.003,.6+S()*.4,3),f);_.position.set((S()-.5)*.3,.7+S()*.5,(S()-.5)*.3),_.rotation.set((S()-.5)*1,S(),(S()-.5)*1),e.add(_)}const p=new Q({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let x=0;x<4;x++){const _=new I(new $(.02+S()*.02,3,3),p);_.position.set((S()-.5)*.15,.4+S()*.6,(S()-.5)*.15),e.add(_)}const g=new K({color:11206638,transparent:!0,opacity:.06}),v=new I(new Ee(.35,.02,4,10),g);v.position.y=.6,v.rotation.x=Math.PI/2+S()*.3,e.add(v);const m=new K({color:k.crystal,transparent:!0,opacity:.06,side:Ht}),d=new I(new Fe(.8,8),m);d.rotation.x=-Math.PI/2,d.position.y=.01,e.add(d),e.position.set(s,0,t),vt.add(e);const y=new ji(k.crystal,.5,8);return y.position.set(s,1.2,t),vt.add(y),{group:e,mat:i,phase:n,x:s,z:t,light:y}}function Xv(s,t,e,n){const i=new Ie,o=[],r=[],a=n||20,c=new at(663568),l=new at(1388056),h=new at(2777141),u=new at(4517461),f=new at(7864268),p=new at(14548838),g=new at;for(let x=0;x<a;x++){const _=S()*6.28,T=S()*e,b=Math.cos(_)*T,E=Math.sin(_)*T,C=.25+S()*.65,w=.03+S()*.05,M=(S()-.5)*.2,P=(S()-.5)*.2,D=(S()-.5)*.12,N=S()<.5?c:l,G=S(),W=G<.4?u:G<.7?f:p,q=C*.35,J=C*.7,Y=M*.3,ct=M*.7,ft=P*.3,Tt=P*.7;o.push(b-w,.01,E),o.push(b+w,.01,E),o.push(b+Y-w*.9,q,E+ft),r.push(N.r,N.g,N.b,N.r,N.g,N.b),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b),o.push(b+w,.01,E),o.push(b+Y+w*.9,q,E+ft),o.push(b+Y-w*.9,q,E+ft),r.push(N.r,N.g,N.b),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b,g.r,g.g,g.b);const Bt=w*.65;o.push(b+Y-w*.9,q,E+ft),o.push(b+Y+w*.9,q,E+ft),o.push(b+ct-Bt,J,E+Tt+D),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b,g.r,g.g,g.b),g.copy(h).lerp(W,.3),r.push(g.r,g.g,g.b),o.push(b+Y+w*.9,q,E+ft),o.push(b+ct+Bt,J,E+Tt+D),o.push(b+ct-Bt,J,E+Tt+D),g.copy(N).lerp(h,.4),r.push(g.r,g.g,g.b),g.copy(h).lerp(W,.3),r.push(g.r,g.g,g.b,g.r,g.g,g.b),o.push(b+ct-Bt,J,E+Tt+D),o.push(b+ct+Bt,J,E+Tt+D),o.push(b+M+D*2,C,E+P+D*1.5),g.copy(h).lerp(W,.3),r.push(g.r,g.g,g.b,g.r,g.g,g.b),r.push(W.r,W.g,W.b)}const v=new at(1725736),m=Math.floor(a*.3);for(let x=0;x<m;x++){const _=S()*6.28,T=S()*e*.9,b=Math.cos(_)*T,E=Math.sin(_)*T,C=.02+S()*.03;o.push(b-C,.01,E),o.push(b+C,.01,E),o.push(b,.03+S()*.02,E+C),r.push(v.r,v.g,v.b),r.push(v.r,v.g,v.b);const w=new at(3385941);r.push(w.r,w.g,w.b)}i.setAttribute("position",new qt(o,3)),i.setAttribute("color",new qt(r,3)),i.computeVertexNormals();const d=new Q({vertexColors:!0,roughness:.7,side:Ht,emissive:4521830,emissiveIntensity:.08}),y=new I(i,d);return y.position.set(s,0,t),vt.add(y),{mesh:y,geo:i,cx:s,cz:t}}function Yv(s,t){const e=new he,n=new Q({color:k.fern,emissive:k.fernGlow,emissiveIntensity:.08,roughness:.7,side:Ht}),i=3+Math.floor(S()*2),o=.5+S()*.7,r=new Q({color:1708552,roughness:.95}),a=new I(new $(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let d=0;d<3;d++){const y=S()*6.28,x=new I(new wt(.003,.002,.08,3),r);x.position.set(Math.cos(y)*.06,.01,Math.sin(y)*.06),x.rotation.z=(y<3.14?1:-1)*1.2,x.rotation.y=y,e.add(x)}for(let d=0;d<i;d++){const y=d/i*6.28+S()*.3,x=new I(new wt(.004,.006,.55,3),new Q({color:1721632,roughness:.8}));x.position.set(Math.cos(y)*.15,.25,Math.sin(y)*.15),x.rotation.y=-y,x.rotation.x=-.6-S()*.4,e.add(x);const _=new I(new we(.12,.6,1,3),n);_.position.set(Math.cos(y)*.15,.25,Math.sin(y)*.15),_.rotation.y=-y,_.rotation.x=-.6-S()*.4,e.add(_);for(let b=0;b<6;b++){const E=new I(new we(.07,.06,1,1),n),C=.06+b*.08,w=b%2===0?1:-1;E.position.set(Math.cos(y)*(.15+.06),C,Math.sin(y)*(.15+.06*w)),E.rotation.y=-y,E.rotation.x=-.8,E.rotation.z=w*.5,e.add(E)}const T=new Q({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let b=0;b<3;b++){const E=new I(new $(.008,3,3),T),C=.12+b*.12;E.position.set(Math.cos(y)*(.15+.02),C-.01,Math.sin(y)*(.15+.02)),e.add(E)}}const c=new Q({color:k.fernGlow,emissive:k.fernGlow,emissiveIntensity:.3}),l=new I(new $(.04,4,3),c);l.position.y=.35,e.add(l);const h=new I(new wt(.006,.003,.06,3),c);h.position.set(.02,.37,0),h.rotation.z=-.8,e.add(h);const u=new Q({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let d=0;d<3;d++){const y=S()*6.28,x=S()*.2,_=new I(new $(.006+S()*.005,3,3),u);_.position.set(Math.cos(y)*x,.12+S()*.2,Math.sin(y)*x),e.add(_)}const f=new Q({color:3811856,roughness:.9,side:Ht,transparent:!0,opacity:.6}),p=new I(new we(.1,.4,1,2),f),g=S()*6.28;p.position.set(Math.cos(g)*.12,.05,Math.sin(g)*.12),p.rotation.x=-1.3,p.rotation.y=g,e.add(p);const v=new K({color:2768928,transparent:!0,opacity:.3});for(let d=0;d<4;d++){const y=new I(new wt(.001,.001,.015,3),v);y.position.set((S()-.5)*.08,.08+S()*.15,(S()-.5)*.08),y.rotation.z=(S()-.5)*1.5,e.add(y)}const m=new Q({color:1708552,roughness:.95});for(let d=0;d<3;d++){const y=new I(new $(.006,3,3),m);y.position.set((S()-.5)*.1,.005,(S()-.5)*.1),e.add(y)}return e.scale.setScalar(o),e.position.set(s,0,t),vt.add(e),{group:e,phase:S()*6.28}}function qv(s,t){const e=new he,n=.25+S()*.4,i=new Q({color:k.flowerStem,roughness:.8}),o=new I(new wt(.01,.015,n,4),i);o.position.y=n/2,e.add(o);for(let C=0;C<2;C++){const w=new I(new Xn(.004,.012,3),i);w.position.set(.012,n*.25+C*n*.25,0),w.rotation.z=-1.2,e.add(w)}const r=new Q({color:k.fern,roughness:.7,side:Ht}),a=new I(new we(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const c=new I(new we(.05,.035),r);c.position.set(-.025,n*.5,.01),c.rotation.z=.6,e.add(c);const l=new Q({color:1728560,roughness:.7,side:Ht});for(let C=0;C<5;C++){const w=C/5*6.28+.3,M=new I(new we(.025,.02),l);M.position.set(Math.cos(w)*.025,n-.005,Math.sin(w)*.025),M.rotation.x=-1.2,M.rotation.y=-w,e.add(M)}const h=new Q({color:k.flower,emissive:k.flowerGlow,emissiveIntensity:.4+S()*.4,transparent:!0,opacity:.85,side:Ht});for(let C=0;C<6;C++){const w=C/6*6.28,M=new I(new we(.05,.04),h);M.position.set(Math.cos(w)*.03,n+.01,Math.sin(w)*.03),M.rotation.x=-.8,M.rotation.y=-w,e.add(M)}const u=new Q({color:16777215,emissive:k.flowerGlow,emissiveIntensity:1.2}),f=new I(new $(.02,4,3),u);f.position.y=n+.02,e.add(f);const p=new K({color:16777130,transparent:!0,opacity:.7}),g=new K({color:16772676});for(let C=0;C<3;C++){const w=C/3*6.28+.5,M=new I(new wt(.002,.002,.025,3),p);M.position.set(Math.cos(w)*.012,n+.03,Math.sin(w)*.012),e.add(M);const P=new I(new $(.005,3,3),g);P.position.set(Math.cos(w)*.012,n+.045,Math.sin(w)*.012),e.add(P)}const v=new K({color:16777164,transparent:!0,opacity:.3});for(let C=0;C<2;C++){const w=new I(new $(.006,3,3),v);w.position.set((S()-.5)*.04,n+.06+S()*.04,(S()-.5)*.04),e.add(w)}const m=new Q({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),d=new I(new $(.006,3,3),m);d.position.set(.005,n+.005,.005),e.add(d);const y=new K({color:15662984}),x=new I(new wt(.002,.002,.03,3),y);x.position.y=n+.035,e.add(x);const _=new I(new $(.005,3,3),y);_.position.y=n+.055,e.add(_);const T=new Q({color:1725728,roughness:.7}),b=new I(new wt(.015,.02,.02,5),T);b.position.y=n-.01,e.add(b);const E=new K({color:16777215,transparent:!0,opacity:.35});for(let C=0;C<4;C++){const w=C/4*6.28+.3,M=new I(new $(.004,3,3),E);M.position.set(Math.cos(w)*.045,n+.005,Math.sin(w)*.045),e.add(M)}return e.position.set(s,0,t),vt.add(e),{group:e,petalMat:h,phase:S()*6.28,baseH:n}}function Zv(s,t){const e=new he,n=new Q({color:k.reed,emissive:k.reedTip,emissiveIntensity:.05,roughness:.7}),i=new Q({color:k.reedTip,emissive:k.reedTip,emissiveIntensity:.15}),o=new Q({color:1709328,roughness:.95}),r=new I(new $(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(S()*4),c=new Q({color:k.reed,roughness:.7,side:Ht});for(let p=0;p<a;p++){const g=.6+S()*1,v=(S()-.5)*.2,m=(S()-.5)*.2,d=new I(new wt(.008,.015,g,4),n);d.position.set(v,g/2,m),e.add(d);const y=2+Math.floor(S()*2),x=new Q({color:2771488,roughness:.7});for(let b=0;b<y;b++){const E=g*.2+b*g*.25,C=new I(new Ee(.012,.004,4,6),x);C.position.set(v,E,m),C.rotation.x=Math.PI/2,e.add(C)}if(S()<.7){const b=.1+S()*.15,E=S()*6.28,C=new I(new we(.02,b),c);C.position.set(v+Math.cos(E)*.02,g*.4,m+Math.sin(E)*.02),C.rotation.y=-E,C.rotation.x=-.5-S()*.4,e.add(C)}const _=new I(new $(.025,4,3),i);_.scale.set(.8,1.5,.8),_.position.set(v,g+.02,m),e.add(_);const T=new K({color:k.reedTip,transparent:!0,opacity:.4});for(let b=0;b<3;b++){const E=b/3*6.28+S()*.5,C=new I(new wt(.002,.001,.04,3),T);C.position.set(v+Math.cos(E)*.015,g+.05,m+Math.sin(E)*.015),C.rotation.z=(S()-.5)*.4,e.add(C)}}e.position.set(s,0,t),vt.add(e);const l=new Q({color:4864536,roughness:.9,side:Ht,transparent:!0,opacity:.5});for(let p=0;p<2;p++){S()*6.28;const g=(S()-.5)*.15,v=new I(new we(.025,.02),l);v.position.set(g,.2+p*.25,(S()-.5)*.1),v.rotation.set(S()*.5,S(),S()*.5),e.add(v)}const h=new K({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const g=new I(new $(.005,3,3),h);g.position.set((S()-.5)*.15,.8+S()*.6,(S()-.5)*.15),e.add(g)}const u=new Q({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new I(new Ee(.1,.008,4,8),u);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:S()*6.28,swayAmp:.03+S()*.04}}let en=null;const Ss=[],We=new _e,Xr=new at,Ff=new at(k.dandSeed);function $v(s){const t=new K({color:16777215,transparent:!0,opacity:1});en=new Hs(hn.dandSeed,t,s),en.instanceMatrix.setUsage(bn),en.instanceColor=new yi(new Float32Array(s*3),3),en.instanceColor.setUsage(bn),We.scale.setScalar(0),We.updateMatrix();for(let e=0;e<s;e++)en.setMatrixAt(e,We.matrix),Xr.copy(Ff),en.setColorAt(e,Xr),Ss.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});en.count=s,vt.add(en)}function Kv(s,t,e){let n=null;for(let o=0;o<Ss.length;o++)if(!Ss[o].active){n=Ss[o];break}if(!n)return;n.x=s+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const i=Math.random()*6.28;n.vx=Math.cos(i)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(i)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}function Jv(s,t){let e=!1;for(let n=0;n<Ss.length;n++){const i=Ss[n];if(!i.active){We.position.set(0,-100,0),We.scale.setScalar(0),We.updateMatrix(),en.setMatrixAt(n,We.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,We.position.set(0,-100,0),We.scale.setScalar(0),We.updateMatrix(),en.setMatrixAt(n,We.matrix);continue}i.drift+=(Math.random()-.5)*1.5*s,i.vx+=Math.sin(i.drift)*.3*s,i.vz+=Math.cos(i.drift)*.2*s,i.vy+=(.15-i.vy)*s*.5,i.vx*=.998,i.vy*=.998,i.vz*=.998,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const r=i.life/i.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;We.position.set(i.x,i.y,i.z),We.scale.setScalar(a),We.updateMatrix(),en.setMatrixAt(n,We.matrix),Xr.copy(Ff).multiplyScalar(r),en.setColorAt(n,Xr),e=!0}en.instanceMatrix.needsUpdate=!0,e&&(en.instanceColor.needsUpdate=!0)}function jv(s,t){const e=new he,n=.35+S()*.45,i=new Q({color:2777128,roughness:.7,side:Ht}),o=3+Math.floor(S()*2);for(let x=0;x<o;x++){const _=x/o*6.28+S()*.3,T=new I(new we(.08,.035),i);T.position.set(Math.cos(_)*.05,.02,Math.sin(_)*.05),T.rotation.x=-1.4,T.rotation.y=-_,e.add(T)}const r=new Q({color:k.dandStem,roughness:.8}),a=new I(new wt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const c=new K({color:14540236,transparent:!0,opacity:.3});for(let x=0;x<4;x++){const _=n*.2+x*n*.18,T=new I(new wt(.002,.001,.02,3),c);T.position.set(.01,_,0),T.rotation.z=-.8,e.add(T)}const l=new Q({color:k.fern,roughness:.7,side:Ht}),h=new I(new we(.07,.03),l);h.position.set(.03,n*.15,0),h.rotation.z=-.4,e.add(h);const u=new Q({color:k.dandHead,emissive:k.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new I(new $(.07,6,5),u);f.position.y=n+.05,e.add(f);const p=new Q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),g=new I(new $(.012,4,3),p);g.position.set(.04,n+.07,.03),e.add(g);const v=new K({color:k.dandSeed,transparent:!0,opacity:.7});for(let x=0;x<8;x++){const _=x/8*6.28+S()*.2,T=new I(new Xn(.015,.05,3),v);T.position.set(Math.cos(_)*.06,n+.05+S()*.04,Math.sin(_)*.06),T.rotation.x=(S()-.5)*.6,T.rotation.z=(S()-.5)*.6,e.add(T);const b=new K({color:16777215,transparent:!0,opacity:.3}),E=new I(new wt(.001,.001,.03,3),b);E.position.set(Math.cos(_)*.08,n+.08,Math.sin(_)*.08),E.rotation.set((S()-.5)*.5,0,(S()-.5)*.5),e.add(E);const C=new K({color:15658717,transparent:!0,opacity:.15});for(let w=0;w<2;w++){const M=_+(w-.5)*.5,P=new I(new wt(8e-4,8e-4,.025,3),C);P.position.set(Math.cos(M)*.075,n+.09,Math.sin(M)*.075),P.rotation.set((S()-.5)*.8,0,(S()-.5)*.8),e.add(P)}}const m=new Q({color:3811856,roughness:.9});for(let x=0;x<4;x++){const _=x/4*6.28+S()*.5,T=new I(new $(.005,3,3),m);T.scale.set(.6,1.5,.6),T.position.set(Math.cos(_)*.04,n+.04,Math.sin(_)*.04),e.add(T)}const d=new K({color:1716240,transparent:!0,opacity:.15});for(let x=0;x<3;x++){const _=x/3*6.28,T=new I(new wt(.001,.001,n*.7,3),d);T.position.set(Math.cos(_)*.01,n*.35,Math.sin(_)*.01),e.add(T)}const y=new K({color:13426107,transparent:!0,opacity:.2});for(let x=0;x<5;x++){const _=n*.1+S()*n*.7,T=S()*6.28,b=new I(new wt(8e-4,8e-4,.012,3),y);b.position.set(Math.cos(T)*.012,_,Math.sin(T)*.012),b.rotation.z=T<3.14?-.8:.8,b.rotation.y=T,e.add(b)}return e.position.set(s,0,t),vt.add(e),{group:e,headMat:u,x:s,z:t,h:n,dispersed:!1,phase:S()*6.28,seedCount:8,regrowTimer:0}}function Qv(s,t,e,n){for(let i=0;i<s.length;i++){const o=s[i];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let c=0;c<8;c++)Kv(o.x,o.h+.05,o.z);for(let c=2;c<o.group.children.length;c++)o.group.children[c].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function tM(s,t,e){const n=new he,i=new Q({color:k.jellyBell,emissive:k.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Ht}),o=new I(new $(.5,8,6,0,6.28,0,Math.PI/2),i);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new Q({color:k.jellyBell,emissive:k.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new I(new Ee(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const c=new I(new $(.2,6,4),new K({color:k.jellyGlow,transparent:!0,opacity:.7}));c.position.y=-.05,n.add(c);const l=new K({color:12312063,transparent:!0,opacity:.3});for(let y=-1;y<=1;y+=2){const x=new I(new $(.06,4,3),l);x.scale.set(.6,1.5,.6),x.position.set(y*.08,-.03,0),n.add(x)}const h=new K({color:15663103,transparent:!0,opacity:.7});for(let y=0;y<5;y++){const x=S()*6.28,_=S()*.8,T=new I(new $(.02,3,3),h);T.position.set(Math.cos(x)*_*.35,.1-_*.15,Math.sin(x)*_*.35),n.add(T)}const u=new Q({color:k.jellyTent,emissive:k.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new K({color:k.jellyGlow,transparent:!0,opacity:.6});for(let y=0;y<6;y++){const x=y/6*6.28,_=.4+S()*.6,T=new I(new wt(.015,.008,_,3),u);T.position.set(Math.cos(x)*.25,-_/2-.05,Math.sin(x)*.25),n.add(T);const b=new I(new $(.012,3,3),f);b.position.set(Math.cos(x)*.25,-_-.06,Math.sin(x)*.25),n.add(b)}const p=new K({color:k.jellyGlow,transparent:!0,opacity:.12});for(let y=0;y<8;y++){const x=y/8*6.28,_=new I(new wt(.002,.002,.4,3),p);_.position.set(Math.cos(x)*.2,.05,Math.sin(x)*.2),_.rotation.z=Math.PI/2-.3,_.rotation.y=-x,n.add(_)}const g=new Q({color:k.jellyBell,emissive:k.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let y=0;y<10;y++){const x=y/10*6.28,_=new I(new $(.02,3,3),g);_.scale.set(1,.5,.8),_.position.set(Math.cos(x)*.46,-.04,Math.sin(x)*.46),n.add(_)}const v=new Q({color:k.jellyTent,emissive:k.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),m=new I(new wt(.02,.01,.35,4),v);m.position.y=-.2,n.add(m);const d=new K({color:14548991,transparent:!0,opacity:.4});for(let y=0;y<3;y++){const x=y/3*6.28,_=new I(new $(.008,3,3),d);_.position.set(Math.cos(x)*.25,-.55-S()*.3,Math.sin(x)*.25),n.add(_)}return n.position.set(s,t,e),vt.add(n),{group:n,bellMat:i,phase:S()*6.28,driftAng:S()*6.28,homeX:s,homeZ:e,floatY:t,wobble:.5+S()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function eM(s,t){const e=new he,n=new Q({color:k.puffBody,emissive:k.puffGlow,emissiveIntensity:.3,roughness:.8}),i=new I(new $(.3,8,6),n);i.position.y=.35,e.add(i);const o=new Q({color:16773344,emissive:k.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new I(new $(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new I(new $(.22,7,5),n);a.position.y=.65,e.add(a);for(let x=-1;x<=1;x+=2){const _=new I(new Xn(.06,.15,4),n);_.position.set(x*.13,.85,0),_.rotation.z=x*.3,e.add(_);const T=new I(new Xn(.03,.08,4),new Q({color:k.puffCheek,emissive:k.puffCheek,emissiveIntensity:.2}));T.position.set(x*.13,.84,.01),T.rotation.z=x*.3,e.add(T)}const c=new K({color:k.puffEye});for(let x=-1;x<=1;x+=2){const _=new I(new $(.035,4,4),c);_.position.set(x*.09,.68,.18),e.add(_);const T=new K({color:16777215}),b=new I(new $(.012,3,3),T);b.position.set(x*.09+x*.015,.695,.2),e.add(b)}const l=new K({color:4469555}),h=new I(new $(.015,3,3),l);h.position.set(0,.63,.22),e.add(h);const u=new Q({color:k.puffCheek,emissive:k.puffCheek,emissiveIntensity:.3});for(let x=-1;x<=1;x+=2){const _=new I(new $(.04,4,3),u);_.position.set(x*.15,.61,.15),e.add(_)}const f=new K({color:15654348,transparent:!0,opacity:.5});for(let x=-1;x<=1;x+=2)for(let _=0;_<2;_++){const T=new I(new wt(.002,.002,.06,3),f);T.position.set(x*.12,.62-_*.03,.2),T.rotation.z=x*.7+_*x*.2,T.rotation.x=-.1,e.add(T)}for(let x=-1;x<=1;x+=2){const _=new I(new $(.07,4,3),n);_.position.set(x*.12,.07,.05),_.scale.set(1,.5,1.3),e.add(_);const T=new Q({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let b=0;b<3;b++){const E=b/3*6.28,C=new I(new $(.012,3,3),T);C.position.set(x*.12+Math.cos(E)*.03,.03,.05+Math.sin(E)*.03),e.add(C)}}const p=new Q({color:16777215,emissive:k.puffGlow,emissiveIntensity:.4,roughness:.9}),g=new I(new $(.06,5,4),p);g.position.set(0,.38,-.28),e.add(g);const v=new Q({color:k.puffBody,emissive:k.puffGlow,emissiveIntensity:.2,roughness:1});for(let x=0;x<6;x++){const _=S()*6.28,T=S()*1.2,b=new I(new $(.01,3,3),v);b.position.set(Math.cos(_)*.28,.25+T*.2,Math.sin(_)*.28),e.add(b)}const m=new K({color:k.puffBody});for(let x=-1;x<=1;x+=2){const _=new I(new wt(.003,.003,.04,3),m);_.position.set(x*.09,.72,.17),_.rotation.z=x*.3,e.add(_)}const d=new K({color:5583684,transparent:!0,opacity:.5}),y=new I(new wt(.002,.002,.03,3),d);return y.position.set(0,.59,.22),y.rotation.z=Math.PI/2,e.add(y),e.position.set(s,0,t),vt.add(e),{group:e,phase:S()*6.28,wanderAng:S()*6.28,speed:.6+S()*.8,hopTimer:0,hopPhase:S()*6.28,homeX:s,homeZ:t,state:"idle",idleTimer:S()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:s,_lastTZ:t}}function nM(s,t){const e=new he,n=new Q({color:k.deerBody,emissive:k.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),i=new I(new $(.4,7,5),n);i.scale.set(1,.8,1.5),i.position.y=.9,e.add(i);const o=new Q({color:13431039,emissive:k.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new I(new $(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new he;a.position.set(0,1.15,.3);const c=new I(new wt(.08,.12,.4,5),n);c.position.set(0,.1,.08),c.rotation.x=-.4,a.add(c);const l=new I(new $(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const h=new I(new $(.07,4,3),n);h.scale.set(1,.7,1.4),h.position.set(0,.17,.35),a.add(h);const u=new K({color:2245717}),f=new I(new $(.02,3,3),u);f.position.set(0,.17,.43),a.add(f);const p=new K({color:k.deerEye});for(let M=-1;M<=1;M+=2){const P=new I(new $(.025,4,3),p);P.position.set(M*.09,.25,.28),a.add(P);const D=new I(new $(.008,3,3),new K({color:16777215}));D.position.set(M*.085,.26,.29),a.add(D);const N=new K({color:k.deerBody,transparent:!0,opacity:.5}),G=new I(new wt(.002,.002,.03,3),N);G.position.set(M*.1,.27,.28),G.rotation.z=M*.6,a.add(G)}for(let M=-1;M<=1;M+=2){const P=new I(new Xn(.04,.14,4),n);P.position.set(M*.1,.37,.15),P.rotation.z=M*.4,a.add(P)}const g=new Q({color:k.deerAntler,emissive:k.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let M=-1;M<=1;M+=2){const P=new I(new wt(.015,.02,.25,3),g);P.position.set(M*.08,.42,.12),P.rotation.z=M*.5,a.add(P);const D=new I(new wt(.01,.015,.15,3),g);D.position.set(M*.15,.55,.1),D.rotation.z=M*.8,a.add(D);const N=new I(new wt(.008,.012,.1,3),g);N.position.set(M*.11,.5,.16),N.rotation.z=M*.3,N.rotation.x=-.5,a.add(N);const G=new I(new $(.012,3,3),new K({color:k.deerGlow,transparent:!0,opacity:.8}));G.position.set(M*.18,.61,.09),a.add(G)}const v=new Q({color:k.deerBody,emissive:k.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),m=new I(new wt(.01,.02,.1,3),v);m.position.set(0,.11,.28),m.rotation.x=.3,a.add(m);const d=new K({color:1122850});for(let M=-1;M<=1;M+=2){const P=new I(new $(.006,3,3),d);P.position.set(M*.02,.16,.42),a.add(P)}e.add(a);const y=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],x=new Q({color:6715272,emissive:k.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),_=[];for(let M=0;M<4;M++){const P=y[M],D=new he;D.position.set(P.x,.65,P.z);const N=new I(new wt(.025,.035,.35,4),n);N.position.y=-.175,D.add(N);const G=new he;G.position.set(0,-.35,0);const W=new I(new wt(.02,.03,.3,4),n);W.position.y=-.15,G.add(W);const q=new I(new wt(.04,.032,.04,4),x);q.position.y=-.3,G.add(q);const J=new Q({color:14544639,emissive:k.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),Y=new I(new $(.025,3,3),J);Y.scale.set(1.3,.5,1.3),Y.position.y=-.25,G.add(Y),D.add(G),e.add(D),_.push({upper:D,lower:G,isFront:M<2,side:P.x<0?-1:1})}const T=new he;T.position.set(0,1.1,-.55);const b=new I(new Xn(.05,.15,4),new Q({color:16777215,emissive:k.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));T.add(b),e.add(T);const E=new K({color:13434862,transparent:!0,opacity:.3});for(let M=0;M<4;M++){const P=new I(new $(.02,3,3),E);P.position.set((S()-.5)*.25,.8+S()*.3,(S()-.5)*.4),e.add(P)}const C=new K({color:k.deerBody,transparent:!0,opacity:.15});for(let M=0;M<3;M++){const P=new I(new wt(.002,.002,.2,3),C);P.position.set(.3,.85-M*.06,0),P.rotation.z=Math.PI/2+.3,e.add(P)}const w=new Q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let M=0;M<3;M++){const P=new I(new $(.008,3,3),w);P.position.set((S()-.5)*.3,.9+S()*.3,(S()-.5)*.35),e.add(P)}return e.position.set(s,0,t),vt.add(e),{group:e,mat:n,phase:S()*6.28,wanderAng:S()*6.28,speed:.6+S()*.4,walkTimer:0,legCycle:0,homeX:s,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:_,tailPivot:T,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:s,_lastTZ:t}}function iM(s,t,e){const n=new he,i=new Q({color:k.mothBody,emissive:k.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new I(new wt(.04,.05,.3,5),i);o.rotation.x=Math.PI/2,n.add(o);const r=new Q({color:k.mothBody,emissive:k.mothGlow,emissiveIntensity:.5,roughness:.6});for(let m=0;m<3;m++){const d=new I(new Ee(.045,.006,4,8),r);d.position.z=-.05+m*.06,d.rotation.x=0,n.add(d)}const a=new I(new $(.05,5,4),i);a.position.z=.18,n.add(a);const c=new Q({color:1122867,roughness:.2,metalness:.4});for(let m=-1;m<=1;m+=2){const d=new I(new $(.018,4,3),c);d.position.set(m*.03,.01,.21),n.add(d)}for(let m=-1;m<=1;m+=2){const d=new I(new wt(.005,.005,.15,3),i);d.position.set(m*.03,.03,.22),d.rotation.x=-.6,d.rotation.z=m*.4,n.add(d);const y=new K({color:k.mothGlow,transparent:!0,opacity:.7}),x=new I(new $(.015,3,3),y);x.scale.set(2,.5,1),x.position.set(m*.05,.12,.28),n.add(x)}const l=new Q({color:k.mothWing,emissive:k.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Ht,roughness:.4});n._wingPivots=[];for(let m=-1;m<=1;m+=2){const d=new he;d.position.set(m*.04,0,.02);const y=new I(new $(.2,6,4),l);y.scale.set(1.8,.08,1.2),y.position.set(m*.18,0,.02),d.add(y);const x=new I(new $(.12,5,3),l);x.scale.set(1.5,.06,1),x.position.set(m*.12,0,-.1),d.add(x);const _=new Q({color:k.mothWing,emissive:k.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Ht}),T=new I(new we(.03,.12),_);T.position.set(m*.1,0,-.18),T.rotation.y=m*.2,d.add(T);const b=new K({color:k.mothSpot,transparent:!0,opacity:.9}),E=new I(new $(.03,4,3),b);E.position.set(m*.2,.02,.03),d.add(E);const C=new I(new $(.018,3,3),b);C.position.set(m*.1,.02,-.08),d.add(C);const w=new K({color:k.mothGlow,transparent:!0,opacity:.25});for(let M=0;M<2;M++){const P=new I(new wt(.002,.002,.2,3),w);P.position.set(m*.15,.01,-.02+M*.06),P.rotation.z=Math.PI/2+m*(.15+M*.15),d.add(P)}n.add(d),n._wingPivots.push({pivot:d,side:m})}const h=new K({color:k.mothGlow,transparent:!0,opacity:.25});for(let m=0;m<3;m++){const d=new I(new $(.008,3,3),h);d.position.set((S()-.5)*.04,0,-.15-m*.05),n.add(d)}const u=new K({color:4473907,transparent:!0,opacity:.5}),f=new I(new Ee(.015,.003,4,8,Math.PI*1.5),u);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const p=new Q({color:k.mothBody,emissive:k.mothGlow,emissiveIntensity:.4,roughness:1});for(let m=0;m<5;m++){const d=S()*6.28,y=new I(new $(.008,3,3),p);y.position.set(Math.cos(d)*.04,Math.sin(d)*.04,S()*.15-.05),n.add(y)}const g=new K({color:k.mothBody,transparent:!0,opacity:.4});for(let m=-1;m<=1;m+=2)for(let d=0;d<3;d++){const y=new I(new wt(.002,.002,.06,3),g);y.position.set(m*.04,-.03,-.05+d*.06),y.rotation.z=m*.8,y.rotation.x=-.3,n.add(y)}const v=new K({color:k.mothGlow,transparent:!0,opacity:.35});for(let m=-1;m<=1;m+=2)for(let d=0;d<5;d++){const y=d/5*Math.PI-Math.PI/2,x=new I(new $(.006,3,3),v);x.position.set(m*(.3+Math.cos(y)*.05),Math.sin(y)*.02,.02+d*.04),n.add(x)}return n.position.set(s,t,e),vt.add(n),{group:n,wingMat:l,phase:S()*6.28,orbitAng:S()*6.28,orbitR:2+S()*4,centerX:s,centerZ:e,floatY:t,flapSpeed:6+S()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function sM(s,t,e){const n=new he,i=new K({color:k.wispCore}),o=new I(new $(.08,6,4),i);n.add(o);const r=new K({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new I(new Wi(.06,0),r);n.add(a);const c=new K({color:k.wispGlow,transparent:!0,opacity:.5}),l=new I(new $(.18,6,4),c);n.add(l);const h=new K({color:k.wispGlow,transparent:!0,opacity:.25}),u=new I(new Ee(.22,.008,4,12),h);u.rotation.x=Math.PI/2,n.add(u);const f=new K({color:k.wispTrail,transparent:!0,opacity:.15}),p=new I(new $(.35,5,4),f);n.add(p);const g=new K({color:16777215,transparent:!0,opacity:.8}),v=new I(new $(.02,3,3),g);v.position.set(.15,0,0),n.add(v);const m=new K({color:k.wispCore,transparent:!0,opacity:.35});for(let b=0;b<3;b++){const E=new I(new $(.01,3,3),m);E.position.set((S()-.5)*.1,-.1-b*.08,(S()-.5)*.1),n.add(E)}const d=new K({color:k.wispGlow,transparent:!0,opacity:.18});for(let b=0;b<3;b++){const E=b/3*6.28+S()*.5,C=.15+S()*.1,w=new I(new wt(.003,.001,C,3),d);w.position.set(Math.cos(E)*.1,S()*.08,Math.sin(E)*.1),w.rotation.z=Math.PI/3*(E<3.14?1:-1),w.rotation.y=E,n.add(w)}const y=new K({color:k.wispGlow,transparent:!0,opacity:.12}),x=new I(new Ee(.26,.005,4,10),y);x.rotation.x=1.2,x.rotation.z=.8,n.add(x);const _=new K({color:16777215,transparent:!0,opacity:.5});for(let b=0;b<4;b++){const E=S()*6.28,C=S()*.8,w=new I(new $(.006,3,3),_);w.position.set(Math.cos(E)*.06,Math.sin(C)*.06,Math.sin(E)*.06),n.add(w)}const T=new K({color:k.wispCore,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const E=new I(new $(.004,3,3),T);E.position.set(.03+S()*.04,-.05-b*.04,S()*.04),n.add(E)}return n.position.set(s,t,e),vt.add(n),{group:n,glowMat:c,hazeMat:f,phase:S()*6.28,targetX:s,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function oM(s,t){const e=new he,n=sl,i=8+Math.floor(S()*5),o=new Q({color:k.fairyMush,emissive:k.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new Q({color:k.mushStem,roughness:.7,emissive:k.fairyGlow,emissiveIntensity:.05});for(let _=0;_<i;_++){const T=_/i*6.28+S()*.15,b=n+S()*.3-.15,E=.15+S()*.2,C=new I(hn.mushStem,r);C.scale.setScalar(E),C.position.set(Math.cos(T)*b,E*.3,Math.sin(T)*b),e.add(C);const w=new I(hn.mushCap,o);w.scale.set(E,E*.4,E),w.position.set(Math.cos(T)*b,E*.55,Math.sin(T)*b),e.add(w);const M=new K({color:16777215,transparent:!0,opacity:.7}),P=new I(new $(E*.08,3,3),M);P.position.set(Math.cos(T)*b,E*.6,Math.sin(T)*b),e.add(P)}const a=new Q({color:8934792,emissive:k.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let _=0;_<5;_++){const T=S()*6.28,b=n+S()*.6-.3,E=.06+S()*.06,C=new I(hn.mushCap,a);C.scale.set(E,E*.5,E),C.position.set(Math.cos(T)*b,E*.35,Math.sin(T)*b),e.add(C)}const c=new Q({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let _=0;_<4;_++){const T=S()*6.28,b=S()*n*.8,E=new I(new $(.08+S()*.08,4,3),c);E.scale.set(1.5,.2,1.5),E.position.set(Math.cos(T)*b,.01,Math.sin(T)*b),e.add(E)}const l=new Q({color:4478310,emissive:k.fairyGlow,emissiveIntensity:.05,roughness:.85}),h=new I(new $(.12,5,3),l);h.scale.set(1.2,.3,1),h.position.y=.03,e.add(h);const u=new K({color:k.fairyGlow,transparent:!0,opacity:.2});for(let _=0;_<6;_++){const T=new I(new $(.01,3,3),u);T.position.set((S()-.5)*n*.8,.1+S()*.4,(S()-.5)*n*.8),e.add(T)}const f=new K({color:k.fairyRing,transparent:!0,opacity:0,side:Ht}),p=new I(new zr(.3,n-.3,16),f);p.rotation.x=-Math.PI/2,p.position.y=.02,e.add(p);const g=new K({color:k.fairyGlow,transparent:!0,opacity:.08});for(let _=0;_<6;_++){const T=S()*6.28,b=T+.5+S()*1.5,E=n*.6+S()*n*.4,C=new I(new wt(.002,.002,E,3),g);C.position.set(Math.cos((T+b)/2)*n*.4,.005,Math.sin((T+b)/2)*n*.4),C.rotation.x=Math.PI/2,C.rotation.z=T,e.add(C)}const v=new Q({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let _=0;_<3;_++){const T=S()*6.28,b=S()*n*.7,E=new I(new $(.03,4,3),v);E.scale.set(1.3,.3,1.3),E.position.set(Math.cos(T)*b,.008,Math.sin(T)*b),e.add(E)}const m=new Q({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let _=0;_<2;_++){const T=new I(new Fe(.02+S()*.02,4),m);T.position.set((S()-.5)*.08,.06,(S()-.5)*.06),T.rotation.x=-Math.PI/2+S()*.4,e.add(T)}const d=new K({color:8978346,transparent:!0,opacity:.25});for(let _=0;_<5;_++){const T=S()*6.28,b=S()*n*.9,E=new I(new $(.005,3,3),d);E.position.set(Math.cos(T)*b,.01,Math.sin(T)*b),e.add(E)}const y=new K({color:657926,transparent:!0,opacity:.15,side:Ht}),x=new I(new zr(n*.5,n*.85,12),y);return x.rotation.x=-Math.PI/2,x.position.y=.008,e.add(x),e.position.set(s,0,t),vt.add(e),{group:e,mushMat:o,discMat:f,x:s,z:t,phase:S()*6.28,glowIntensity:0,active:!1}}function rM(s,t,e){const n=new he,i=new Q({color:k.bubbleIris,emissive:k.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new I(hn.bubble,i);n.add(o);const r=new K({color:15650047,transparent:!0,opacity:.1}),a=new I(new Ee(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=S()*3,n.add(a);const c=new I(new Ee(.11,.003,4,10),r);c.rotation.x=-.8,c.rotation.z=1.2,n.add(c);const l=new K({color:k.bubbleShine,transparent:!0,opacity:.5}),h=new I(new $(.04,4,3),l);h.position.set(.05,.07,.08),n.add(h);const u=new K({color:15658751,transparent:!0,opacity:.2}),f=new I(new $(.025,3,3),u);f.position.set(-.06,-.04,-.06),n.add(f);const p=new K({color:16755438,transparent:!0,opacity:.12}),g=new I(new $(.06,4,3),p);g.position.set(.02,-.02,.01),n.add(g);const v=new K({color:16772863,transparent:!0,opacity:.08}),m=new I(new $(.12,5,4),v);n.add(m);const d=[16764125,13426175,14548940];for(let C=0;C<3;C++){const w=new K({color:d[C],transparent:!0,opacity:.06}),M=new I(new Ee(.14-C*.02,.002,4,8),w);M.position.y=-.04+C*.04,M.rotation.x=Math.PI/2,n.add(M)}const y=new K({color:16777215,transparent:!0,opacity:.6});for(let C=0;C<3;C++){const w=S()*6.28,M=S()*Math.PI-Math.PI/2,P=new I(new $(.003,3,3),y);P.position.set(Math.cos(w)*Math.cos(M)*.14,Math.sin(M)*.14,Math.sin(w)*Math.cos(M)*.14),n.add(P)}const x=new K({color:11189196,transparent:!0,opacity:.1}),_=new I(new $(.015,3,3),x);_.position.set((S()-.5)*.04,(S()-.5)*.04,(S()-.5)*.04),n.add(_);const T=new K({color:k.bubbleIris,transparent:!0,opacity:.15}),b=new I(new $(.04,4,3),T);b.scale.set(1.3,.6,1.3),b.position.y=-.12,n.add(b);const E=.6+S()*.8;return n.scale.setScalar(E),n.position.set(s,t,e),vt.add(n),{group:n,shellMat:i,phase:S()*6.28,driftAng:S()*6.28,driftSpeed:.3+S()*.5,floatY:t,homeX:s,homeZ:e,bobAmp:.3+S()*.4,popped:!1,popTimer:0,sc:E}}function aM(s,t){const e=new he,n=1.5+S()*1,i=new Q({color:329746,roughness:.9}),o=new I(new Fe(n*.85,10),i);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new Q({color:k.pondWater,emissive:k.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new I(new Fe(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const c=new Q({color:3816002,roughness:.85}),l=5+Math.floor(S()*4);for(let P=0;P<l;P++){const D=P/l*6.28+S()*.3,N=n+S()*.2-.1,G=.06+S()*.08,W=new I(new $(G,4,3),c);W.scale.set(1+S()*.5,.4+S()*.3,1+S()*.5),W.position.set(Math.cos(D)*N,G*.2,Math.sin(D)*N),W.rotation.set(S(),S(),S()),e.add(W)}const h=new Q({color:1725728,roughness:.7,side:Ht});for(let P=0;P<3;P++){const D=S()*6.28,N=n*.85+S()*.2;for(let G=0;G<3;G++){const W=new I(new we(.015,.15+S()*.1),h);W.position.set(Math.cos(D)*N+(S()-.5)*.05,.08,Math.sin(D)*N+(S()-.5)*.05),W.rotation.y=S()*3,W.rotation.x=-.2,e.add(W)}}const u=new K({color:11197934,transparent:!0,opacity:.08});for(let P=0;P<2;P++){const D=new I(new Ee(n*.3+P*n*.25,.005,4,16),u);D.rotation.x=Math.PI/2,D.position.y=.035,e.add(D)}const f=new Q({color:k.lilyPad,roughness:.6,side:Ht}),p=4+Math.floor(S()*2),g=[];for(let P=0;P<p;P++){const D=S()*6.28,N=S()*n*.6,G=.15+S()*.15,W=new I(new Fe(G,8),f);W.rotation.x=-Math.PI/2,W.position.set(Math.cos(D)*N,.05,Math.sin(D)*N),e.add(W);const q=new K({color:1724448,transparent:!0,opacity:.3}),J=new I(new wt(.002,.002,G*1.5,3),q);J.position.set(Math.cos(D)*N,.052,Math.sin(D)*N),J.rotation.x=Math.PI/2,J.rotation.z=S()*3,e.add(J),g.push({mesh:W,phase:S()*6.28})}const v=new Q({color:k.lilyFlower,emissive:k.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Ht}),m=.08;for(let P=0;P<6;P++){const D=P/6*6.28,N=new I(new we(.06,.05),v);N.position.set(g[0].mesh.position.x+Math.cos(D)*.05,m,g[0].mesh.position.z+Math.sin(D)*.05),N.rotation.x=-1,N.rotation.y=-D,e.add(N)}const d=new Q({color:16777130,emissive:k.lilyGlow,emissiveIntensity:.8}),y=new I(new $(.025,4,3),d);if(y.position.set(g[0].mesh.position.x,m+.02,g[0].mesh.position.z),e.add(y),g.length>2){const P=new Q({color:k.lilyFlower,emissive:k.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),D=new I(new $(.03,5,4),P);D.scale.set(.8,1.2,.8),D.position.set(g[2].mesh.position.x,.09,g[2].mesh.position.z),e.add(D)}const x=new Q({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let P=0;P<5;P++){const D=S()*6.28,N=S()*n*.7,G=new I(new $(.02+S()*.025,4,3),x);G.scale.set(1+S()*.5,.4,1+S()*.5),G.position.set(Math.cos(D)*N,.015,Math.sin(D)*N),e.add(G)}const _=new K({color:2761752,transparent:!0,opacity:.12,side:Ht});for(let P=0;P<3;P++){const D=S()*6.28,N=S()*n*.5,G=new I(new Fe(.08+S()*.06,5),_);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(D)*N,.012,Math.sin(D)*N),e.add(G)}const T=new Q({color:1122837,roughness:.7,transparent:!0,opacity:.4});for(let P=0;P<2;P++){const D=S()*6.28,N=S()*n*.5,G=new I(new $(.012,4,3),T);G.scale.set(.8,.5,1.3),G.position.set(Math.cos(D)*N,.04,Math.sin(D)*N),e.add(G);const W=new I(new wt(.002,.001,.025,3),T);W.position.set(Math.cos(D)*N-Math.cos(D)*.02,.04,Math.sin(D)*N-Math.sin(D)*.02),W.rotation.z=Math.PI/2,W.rotation.y=D,e.add(W)}const b=new K({color:2250016,transparent:!0,opacity:.1,side:Ht});for(let P=0;P<3;P++){const D=S()*6.28,N=n*.7+S()*n*.25,G=new I(new Fe(.06+S()*.04,5),b);G.rotation.x=-Math.PI/2,G.position.set(Math.cos(D)*N,.032,Math.sin(D)*N),e.add(G)}const E=new K({color:13426158,transparent:!0,opacity:.06}),C=new I(new Ee(n-.05,.01,4,16),E);C.rotation.x=Math.PI/2,C.position.y=.035,e.add(C);const w=new Q({color:4861976,roughness:.8,side:Ht,transparent:!0,opacity:.6}),M=new I(new Fe(.03,5),w);return M.rotation.x=-Math.PI/2,M.position.set((S()-.5)*n*.5,.04,(S()-.5)*n*.5),e.add(M),e.position.set(s,0,t),vt.add(e),{group:e,waterMat:r,flMat:v,pads:g,x:s,z:t,phase:S()*6.28,pondR:n}}function cM(s,t){const e=new he,n=new K({color:k.orbGold}),i=new I(new $(.2,10,8),n);e.add(i);const o=new K({color:16777215}),r=new I(new $(.06,6,4),o);e.add(r);const a=new K({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),c=new I(new Wi(.15,0),a);e.add(c);const l=new K({color:k.orbGlow,transparent:!0,opacity:.5}),h=new I(new $(.35,8,6),l);e.add(h);const u=new K({color:k.orbGlow,transparent:!0,opacity:.3});for(let E=0;E<8;E++){const C=E/8*6.28,w=new I(new Xn(.02,.25,3),u);w.position.set(Math.cos(C)*.3,Math.sin(C*2)*.05,Math.sin(C)*.3),w.rotation.z=-C+Math.PI/2,w.rotation.y=C,e.add(w)}const f=new K({color:k.orbInner,transparent:!0,opacity:.15}),p=new I(new $(.6,8,5),f);e.add(p);for(let E=0;E<6;E++){const C=new I(new $(.03,4,3),new K({color:16777215})),w=E/6*6.28;C.position.set(Math.cos(w)*.4,Math.sin(w*2)*.1,Math.sin(w)*.4),e.add(C)}const g=new K({color:k.orbGold,transparent:!0,opacity:.7});for(let E=0;E<4;E++){const C=E/4*6.28+.4,w=new I(new $(.015,3,3),g);w.position.set(Math.cos(C)*.5,0,Math.sin(C)*.5),e.add(w)}const v=new K({color:16768426,transparent:!0,opacity:.12});for(let E=0;E<3;E++){const C=new I(new Ee(.28,.003,4,12),v);C.rotation.set(E*1.05,E*.7,0),e.add(C)}const m=new K({color:k.orbGlow,transparent:!0,opacity:.08}),d=new I(new Ee(.4,.004,4,16),m);d.rotation.x=Math.PI/2,e.add(d);const y=new K({color:16772812,transparent:!0,opacity:.15}),x=new I(new Ee(.25,.012,4,10),y);x.rotation.x=Math.PI/2,e.add(x);const _=new K({color:16777215,transparent:!0,opacity:.5});for(let E=0;E<6;E++){const C=S()*6.28,w=S()*Math.PI-Math.PI/2,M=new I(new $(.008,3,3),_);M.position.set(Math.cos(C)*Math.cos(w)*.2,Math.sin(w)*.2,Math.sin(C)*Math.cos(w)*.2),e.add(M)}const T=new K({color:k.orbGlow,transparent:!0,opacity:.1,side:Ht}),b=new I(new Fe(.5,8),T);return b.rotation.x=-Math.PI/2,b.position.y=-.95,e.add(b),e.position.set(s,1,t),vt.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:f,x:s,z:t,found:!1,flyUp:!1,flyY:1,phase:S()*6.28,laserLine:null,laserMat:null}}function lM(s,t){const e=new he,n=new Q({color:k.rockBase,roughness:.85,metalness:.05}),i=new Q({color:k.rockLight,roughness:.8,metalness:.05}),o=new Q({color:k.rockMoss,emissive:k.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+S()*.5,a=new I(new $(r,8,6),S()<.6?n:i);a.scale.set(1+S()*.6,.4+S()*.4,1+S()*.6),a.position.y=r*.2,a.rotation.set(S()*.5,S()*3,S()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const c=1+Math.floor(S()*3);for(let p=0;p<c;p++){const g=S()*6.28,v=r*.6+S()*r*.5,m=r*.3+S()*r*.4,d=new I(new $(m,5,4),S()<.5?n:i);d.scale.set(1+S()*.5,.3+S()*.4,1+S()*.5),d.position.set(Math.cos(g)*v,m*.15,Math.sin(g)*v),d.rotation.set(S()*.8,S()*3,S()*.5),e.add(d)}const l=2+Math.floor(S()*3);for(let p=0;p<l;p++){const g=S()*6.28,v=S()*r*.6,m=r*.15+S()*r*.2,d=new I(new $(m,4,3),o);d.scale.set(1.5,.2,1.5),d.position.set(Math.cos(g)*v,r*.35+S()*.05,Math.sin(g)*v),e.add(d)}const h=[8943428,10061909,6715221,11180390];for(let p=0;p<3;p++){const g=new Q({color:h[Math.floor(S()*h.length)],roughness:.9,transparent:!0,opacity:.5}),v=S()*6.28,m=new I(new $(r*.06+S()*r*.08,3,3),g);m.scale.set(2,.15,2),m.position.set(Math.cos(v)*r*.5,r*.25+S()*.1,Math.sin(v)*r*.5),e.add(m)}const u=new Q({color:3816e3,roughness:.9}),f=4+Math.floor(S()*3);for(let p=0;p<f;p++){const g=S()*6.28,v=r*.5+S()*r*.6,m=.03+S()*.05,d=new I(new $(m,3,3),u);d.scale.set(1+S()*.5,.4,1+S()*.5),d.position.set(Math.cos(g)*v,m*.15,Math.sin(g)*v),e.add(d)}if(S()<.6){const p=new Q({color:3385941,emissive:k.grassTip,emissiveIntensity:.05,roughness:.7,side:Ht});for(let g=0;g<3;g++){const v=S()*6.28,m=new I(new we(.015,.08+S()*.06),p);m.position.set(Math.cos(v)*r*.3,r*.3,Math.sin(v)*r*.3),m.rotation.y=S()*3,m.rotation.x=-.2-S()*.3,e.add(m)}}return e.position.set(s,0,t),vt.add(e),{group:e,x:s,z:t,colR:r*.8}}let Of=null,zf=null,Bf=null;function hM(){return Of}function uM(){return zf}function fM(){return Bf}function dM(){const s=new he,t=new Q({color:k.obeliskBlack,roughness:.2,metalness:.8,emissive:k.obeliskPink,emissiveIntensity:0});zf=t;const e=new I(new wt(1.2,1.8,Ne,4),t);e.position.y=Ne/2,e.rotation.y=Math.PI/4,e.castShadow=!0,s.add(e);const n=new K({color:3351108,transparent:!0,opacity:.2});for(let y=0;y<4;y++){const x=y/4*6.28+Math.PI/4,_=new I(new wt(.03,.04,Ne*.9,3),n);_.position.set(Math.cos(x)*1.55,Ne*.45,Math.sin(x)*1.55),s.add(_)}const i=new K({color:k.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<4;y++){const x=y/4*6.28+Math.PI/4;for(let T=0;T<3;T++){const b=6+T*4,E=new I(new wt(.015,.015,.8,3),i);E.position.set(Math.cos(x)*1.6,b,Math.sin(x)*1.6),E.rotation.z=Math.PI/2,E.rotation.y=-x,E.visible=!1,s.add(E)}const _=new I(new wt(.012,.012,2.5,3),i);_.position.set(Math.cos(x)*1.6,12,Math.sin(x)*1.6),_.visible=!1,s.add(_)}const o=new Q({color:k.obeliskBlack,roughness:.1,metalness:.9,emissive:k.obeliskPink,emissiveIntensity:0});Bf=o;const r=new I(new Xn(1.3,3,4),o);r.position.y=Ne+1.5,r.rotation.y=Math.PI/4,s.add(r);const a=new K({color:k.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<4;y++){const x=y/4*6.28+Math.PI/4,_=new I(new wt(.02,.02,3.2,3),a);_.position.set(Math.cos(x)*.8,Ne+1.5,Math.sin(x)*.8),_.rotation.z=.35*(x<3.14?1:-1),_.rotation.y=-x,_.visible=!1,s.add(_)}for(let y=0;y<5;y++){const x=new I(new Ee(1.85-y*.02,.04,6,4),new K({color:2236979}));x.position.y=4+y*5,x.rotation.x=Math.PI/2,s.add(x)}const c=new Q({color:1118488,roughness:.3,metalness:.7}),l=new I(new wt(2.2,2.5,.6,4),c);l.position.y=.3,l.rotation.y=Math.PI/4,s.add(l);const h=new I(new wt(2.8,3,.4,4),c);h.position.y=.05,h.rotation.y=Math.PI/4,s.add(h);const u=new K({color:k.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<8;y++){const x=y/8*6.28,_=new I(new $(.06,4,3),u);_.position.set(Math.cos(x)*2.5,Ne*.7+y*.5,Math.sin(x)*2.5),_.visible=!1,s.add(_)}const f=new K({color:1710626,transparent:!0,opacity:.08});for(let y=0;y<6;y++){const x=S()*6.28,_=2+S()*Ne*.7,T=new I(new wt(.008,.008,.5+S()*.5,3),f);T.position.set(Math.cos(x)*1.6,_,Math.sin(x)*1.6),T.rotation.z=(S()-.5)*.8,T.rotation.y=-x,s.add(T)}const p=new Q({color:921108,roughness:.5,metalness:.4});for(let y=0;y<12;y++){const x=S()*6.28,_=3+S()*2,T=.15+S()*.25,b=new I(new $(T,4,3),p);b.scale.set(1+S()*.5,.3+S()*.3,1+S()*.5),b.position.set(Math.cos(x)*_,T*.15,Math.sin(x)*_),b.rotation.set(S(),S(),S()),s.add(b)}const g=new K({color:k.obeliskPink,transparent:!0,opacity:0});for(let y=0;y<4;y++){const x=y/4*6.28+Math.PI/4;for(let _=0;_<5;_++){const T=5+_*3.5+S()*.5,b=(S()-.5)*.4,E=new I(new $(.04,4,3),g);E.position.set(Math.cos(x)*1.58+Math.cos(x+1.57)*b,T,Math.sin(x)*1.58+Math.sin(x+1.57)*b),E.visible=!1,s.add(E)}}const v=new K({color:0,transparent:!0,opacity:.15,side:Ht}),m=new I(new Fe(4,8),v);m.rotation.x=-Math.PI/2,m.position.y=.005,s.add(m),s.position.set(0,-Ne,0),vt.add(s),Of=s;const d=new ji(8939212,0,30);s.add(d),d.position.set(0,Ne+1,0)}let kf=null,Gf=null;function pM(){return kf}function mM(){return Gf}function gM(){const s=new Q({color:k.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});Gf=s;const t=new tl;t.absarc(0,0,6,0,6.28,!1);const e=new Or;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new Br(t,24),i=new I(n,s);i.rotation.x=-Math.PI/2,i.position.y=.05,i.visible=!1,vt.add(i),kf=i;const o=new K({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const g=p/12*6.28+S()*.3,v=3.5+S()*2,m=new I(new $(.04+S()*.04,4,3),o);m.scale.set(1.2,.4,1.2),m.position.set(Math.cos(g)*v,.02,Math.sin(g)*v),m.visible=!1,vt.add(m)}const r=new K({color:13426158,transparent:!0,opacity:0,side:Ht});for(let p=0;p<6;p++){const g=p/6*6.28+S()*.5,v=new I(new Fe(.12+S()*.1,5),r);v.rotation.x=-Math.PI/2,v.position.set(Math.cos(g)*3.3,.06,Math.sin(g)*3.3),v.visible=!1,vt.add(v)}const a=new K({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const g=p/8*6.28,v=4+S()*1.5,m=new I(new wt(.003,.003,.4,3),a);m.position.set(Math.cos(g)*v,.055,Math.sin(g)*v),m.rotation.x=Math.PI/2,m.rotation.z=g+Math.PI/2,m.visible=!1,vt.add(m)}const c=new K({color:264208,transparent:!0,opacity:0,side:Ht}),l=new tl;l.absarc(0,0,5.2,0,6.28,!1);const h=new Or;h.absarc(0,0,3.8,0,6.28,!0),l.holes.push(h);const u=new Br(l,16),f=new I(u,c);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,vt.add(f)}const ml=[];function _M(){for(let r=0;r<6;r++){const a=k.rainbow[r],c=r/6*6.28,l=5+r*.5,h=Ne+5+r*2,u=[];for(let b=0;b<=12;b++){const E=b/12,C=c+E*Math.PI,w=Math.cos(C)*l,M=Math.sin(C)*l,P=Math.sin(E*Math.PI)*h;u.push(new U(w,P,M))}const f=new jc(u),p=new K({color:a,transparent:!0,opacity:0}),g=new Us(f,20,.12-r*.008,5,!1),v=new I(g,p);v.visible=!1,vt.add(v);const m=new K({color:a,transparent:!0,opacity:0});for(let b=0;b<5;b++){const E=(b+.5)/5,C=f.getPoint(E),w=new I(new $(.05,3,3),m);w.position.copy(C),w.visible=!1,vt.add(w)}const d=new K({color:a,transparent:!0,opacity:0,side:Ht}),y=u[0],x=u[u.length-1],_=new I(new Fe(.5,6),d);_.rotation.x=-Math.PI/2,_.position.set(y.x,.03,y.z),_.visible=!1,vt.add(_);const T=new I(new Fe(.5,6),d);T.rotation.x=-Math.PI/2,T.position.set(x.x,.03,x.z),T.visible=!1,vt.add(T),ml.push({mesh:v,mat:p,targetOpacity:0})}const s=[],t=9.5,e=Ne+12;for(let r=0;r<=12;r++){const a=r/12,c=a*Math.PI;s.push(new U(Math.cos(c)*t,Math.sin(a*Math.PI)*e,Math.sin(c)*t))}const n=new jc(s),i=new K({color:15654399,transparent:!0,opacity:0}),o=new I(new Us(n,16,.04,4,!1),i);o.visible=!1,vt.add(o),ml.push({mesh:o,mat:i,targetOpacity:0})}let nn=null;const zn=[],Xe=new _e,vo=new at;function xM(s){const t=new K({color:16777215,transparent:!0,opacity:1});nn=new Hs(hn.fly,t,s),nn.instanceMatrix.setUsage(bn),nn.instanceColor=new yi(new Float32Array(s*3),3),nn.instanceColor.setUsage(bn),Xe.scale.setScalar(0),Xe.updateMatrix();for(let e=0;e<s;e++){nn.setMatrixAt(e,Xe.matrix);const n=e%3===0?k.fireflyB:k.firefly;vo.setHex(n),nn.setColorAt(e,vo),zn.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}nn.count=s,vt.add(nn)}function gl(s,t,e,n){let i=null;for(let o=0;o<zn.length;o++)if(!zn[o].active){i=zn[o];break}if(!i){let o=1/0;for(let r=0;r<zn.length;r++)zn[r].life<o&&(o=zn[r].life,i=zn[r])}i.x=s,i.y=t+.5+Math.random()*3,i.z=e,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=n,i.max=n,i.active=!0,i.wander=Math.random()*6.28}function Hf(s,t){let e=0,n=!1;for(let i=0;i<zn.length;i++){const o=zn[i];if(!o.active){Xe.position.set(0,-100,0),Xe.scale.setScalar(0),Xe.updateMatrix(),nn.setMatrixAt(i,Xe.matrix);continue}if(o.life-=s,o.life<=0){o.active=!1,Xe.position.set(0,-100,0),Xe.scale.setScalar(0),Xe.updateMatrix(),nn.setMatrixAt(i,Xe.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*s,o.vx+=Math.cos(o.wander)*1.5*s,o.vz+=Math.sin(o.wander)*1.5*s,o.vy+=Math.sin(t*2+o.phase)*s,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*s,o.y+=o.vy*s,o.z+=o.vz*s;const r=ne(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*s);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),h=.6+a*.6;Xe.position.set(o.x,o.y,o.z),Xe.scale.setScalar(h),Xe.updateMatrix(),nn.setMatrixAt(i,Xe.matrix),vo.setHex(o.colorHex),vo.multiplyScalar(l),nn.setColorAt(i,vo),n=!0}return nn.instanceMatrix.needsUpdate=!0,n&&(nn.instanceColor.needsUpdate=!0),e}let sn=null;const Bn=[],Ye=new _e,Yr=new at,vM=new at(k.spore);function MM(s){const t=new K({color:16777215,transparent:!0,opacity:1});sn=new Hs(hn.spore,t,s),sn.instanceMatrix.setUsage(bn),sn.instanceColor=new yi(new Float32Array(s*3),3),sn.instanceColor.setUsage(bn),Ye.scale.setScalar(0),Ye.updateMatrix();for(let e=0;e<s;e++)sn.setMatrixAt(e,Ye.matrix),Yr.setHex(k.spore),sn.setColorAt(e,Yr),Bn.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});sn.count=s,vt.add(sn)}function yM(s,t,e){let n=null;for(let i=0;i<Bn.length;i++)if(!Bn[i].active){n=Bn[i];break}if(!n){let i=1/0;for(let o=0;o<Bn.length;o++)Bn[o].life<i&&(i=Bn[o].life,n=Bn[o])}n.x=s,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}function wM(s){let t=0,e=!1;for(let n=0;n<Bn.length;n++){const i=Bn[n];if(!i.active){Ye.position.set(0,-100,0),Ye.scale.setScalar(0),Ye.updateMatrix(),sn.setMatrixAt(n,Ye.matrix);continue}if(i.life-=s,i.life<=0){i.active=!1,Ye.position.set(0,-100,0),Ye.scale.setScalar(0),Ye.updateMatrix(),sn.setMatrixAt(n,Ye.matrix);continue}t++,i.vy+=.3*s,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*s,i.y+=i.vy*s,i.z+=i.vz*s;const o=i.life/i.max*.7;Ye.position.set(i.x,i.y,i.z),Ye.scale.setScalar(1),Ye.updateMatrix(),sn.setMatrixAt(n,Ye.matrix),Yr.copy(vM).multiplyScalar(o),sn.setColorAt(n,Yr),e=!0}return sn.instanceMatrix.needsUpdate=!0,e&&(sn.instanceColor.needsUpdate=!0),t}let on=null;const Es=[];let Ka=0;const qe=new _e,qr=new at,Vf=new at(k.starMote);function SM(s){const t=new K({color:16777215,transparent:!0,opacity:1});on=new Hs(hn.starMote,t,s),on.instanceMatrix.setUsage(bn),on.instanceColor=new yi(new Float32Array(s*3),3),on.instanceColor.setUsage(bn),qe.scale.setScalar(0),qe.updateMatrix();for(let e=0;e<s;e++)on.setMatrixAt(e,qe.matrix),qr.copy(Vf),on.setColorAt(e,qr),Es.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});on.count=s,vt.add(on)}function EM(s){let t=null;for(let e=0;e<Es.length;e++)if(!Es[e].active){t=Es[e];break}t&&(t.x=s.x+(Math.random()-.5)*60,t.z=s.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function Wf(s,t,e){Ka+=s,Ka>.15&&(Ka=0,EM(e));let n=!1;for(let i=0;i<Es.length;i++){const o=Es[i];if(!o.active){qe.position.set(0,-100,0),qe.scale.setScalar(0),qe.updateMatrix(),on.setMatrixAt(i,qe.matrix);continue}if(o.life-=s,o.life<=0||o.y<.5){o.active=!1,qe.position.set(0,-100,0),qe.scale.setScalar(0),qe.updateMatrix(),on.setMatrixAt(i,qe.matrix);continue}o.y+=o.vy*s,o.drift+=(Math.random()-.5)*.5*s,o.x+=Math.sin(o.drift)*.1*s,o.z+=Math.cos(o.drift)*.08*s;const r=o.life/o.max,a=Math.sin(t*4+i)*.3+.7,c=r*a*.7,l=.5+a*.5;qe.position.set(o.x,o.y,o.z),qe.scale.setScalar(l),qe.updateMatrix(),on.setMatrixAt(i,qe.matrix),qr.copy(Vf).multiplyScalar(c),on.setColorAt(i,qr),n=!0}on.instanceMatrix.needsUpdate=!0,n&&(on.instanceColor.needsUpdate=!0)}let rn=null;const bs=[],Ze=new _e,Zr=new at,Xf=new at(8956535);function bM(s){const t=new K({color:16777215,transparent:!0,opacity:1});rn=new Hs(hn.dustMote,t,s),rn.instanceMatrix.setUsage(bn),rn.instanceColor=new yi(new Float32Array(s*3),3),rn.instanceColor.setUsage(bn),Ze.scale.setScalar(0),Ze.updateMatrix();for(let e=0;e<s;e++)rn.setMatrixAt(e,Ze.matrix),Zr.copy(Xf),rn.setColorAt(e,Zr),bs.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});rn.count=s,vt.add(rn)}function TM(s,t,e){for(let n=0;n<e;n++){let i=null;for(let a=0;a<bs.length;a++)if(!bs[a].active){i=bs[a];break}if(!i)continue;const o=Math.random()*6.28,r=1+Math.random()*2;i.x=s+Math.cos(o)*.2,i.y=ne(s,t)+.1,i.z=t+Math.sin(o)*.2,i.vx=Math.cos(o)*r,i.vy=.5+Math.random()*1.5,i.vz=Math.sin(o)*r,i.life=.6+Math.random()*.6,i.max=i.life,i.active=!0}}function AM(s){let t=!1;for(let e=0;e<bs.length;e++){const n=bs[e];if(!n.active){Ze.position.set(0,-100,0),Ze.scale.setScalar(0),Ze.updateMatrix(),rn.setMatrixAt(e,Ze.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,Ze.position.set(0,-100,0),Ze.scale.setScalar(0),Ze.updateMatrix(),rn.setMatrixAt(e,Ze.matrix);continue}n.vy-=3*s,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=ne(n.x,n.z)+.05;n.y<i&&(n.y=i,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;Ze.position.set(n.x,n.y,n.z),Ze.scale.setScalar(1),Ze.updateMatrix(),rn.setMatrixAt(e,Ze.matrix),Zr.copy(Xf).multiplyScalar(o),rn.setColorAt(e,Zr),t=!0}rn.instanceMatrix.needsUpdate=!0,t&&(rn.instanceColor.needsUpdate=!0)}let an=null;const Ts=[],$e=new _e,$r=new at,Yf=new at(k.bubblePop),CM=new $(.02,3,3);function RM(s){const t=new K({color:16777215,transparent:!0,opacity:1});an=new Hs(CM,t,s),an.instanceMatrix.setUsage(bn),an.instanceColor=new yi(new Float32Array(s*3),3),an.instanceColor.setUsage(bn),$e.scale.setScalar(0),$e.updateMatrix();for(let e=0;e<s;e++)an.setMatrixAt(e,$e.matrix),$r.copy(Yf),an.setColorAt(e,$r),Ts.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});an.count=s,vt.add(an)}function PM(s,t,e,n){for(let i=0;i<n;i++){let o=null;for(let l=0;l<Ts.length;l++)if(!Ts[l].active){o=Ts[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,c=1+Math.random()*2;o.x=s,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*c,o.vy=Math.cos(a)*c,o.vz=Math.sin(r)*Math.sin(a)*c,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function IM(s){let t=!1;for(let e=0;e<Ts.length;e++){const n=Ts[e];if(!n.active){$e.position.set(0,-100,0),$e.scale.setScalar(0),$e.updateMatrix(),an.setMatrixAt(e,$e.matrix);continue}if(n.life-=s,n.life<=0){n.active=!1,$e.position.set(0,-100,0),$e.scale.setScalar(0),$e.updateMatrix(),an.setMatrixAt(e,$e.matrix);continue}n.vy-=2*s,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*s,n.y+=n.vy*s,n.z+=n.vz*s;const i=n.life/n.max*.8;$e.position.set(n.x,n.y,n.z),$e.scale.setScalar(1),$e.updateMatrix(),an.setMatrixAt(e,$e.matrix),$r.copy(Yf).multiplyScalar(i),an.setColorAt(e,$r),t=!0}an.instanceMatrix.needsUpdate=!0,t&&(an.instanceColor.needsUpdate=!0)}let Ja=0,Sn="SEEK",Pi=-Ne,On=0,Ni=[],Fi=null,ao=null,co=null,Oi=null,_l=null,ti=[],lo=null,qf=null,Zf=null,xl=[],vl=[],Ml=[],yl=[];function LM(s){Ni=s.orbs,Fi=s.obeliskGroup,ao=s.obeliskMat,co=s.obeliskGlowMat,Oi=s.moatMesh,_l=s.moatMat,ti=s.rainbowArcs,lo=s.player,qf=s.makeLaser,Zf=s.orbHudEl,xl=s.deers||[],vl=s.puffs||[],Ml=s.jellies||[],yl=s.moths||[]}function DM(s,t){let e=null,n=1/0;for(let i=0;i<Ni.length;i++){const o=Ni[i];if(o.found)continue;const r=o.x-lo.pos.x,a=o.z-lo.pos.z,c=r*r+a*a;c<n&&(n=c,e=o)}if(e&&n<Xa*Xa){const i=Math.sin(t*2+e.phase)*.5+.5;ro.position.set(e.x,1,e.z),ro.intensity=1+i*2,ro.distance=Xa}else ro.intensity=0;for(let i=0;i<Ni.length;i++){const o=Ni[i];if(!(o.found&&!o.flyUp)){if(!o.found){const r=Math.sin(t*1.5+o.phase)*.5+.5;o.group.position.y=o.flyY+Math.sin(t*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4,o.hazeMat.opacity=.08+r*.12;for(let l=3;l<o.group.children.length;l++){const h=o.group.children[l],u=(l-3)/6*6.28+t*1.5;h.position.x=Math.cos(u)*.4,h.position.z=Math.sin(u)*.4,h.position.y=Math.sin(u*2+t)*.1}const a=o.x-lo.pos.x,c=o.z-lo.pos.z;if(a*a+c*c<xu*xu){o.found=!0,o.flyUp=!0,o.flyY=o.group.position.y,Ja++;const l=Zf||document.getElementById("orb-hud");l&&(l.innerHTML="✦ "+Ja+" / "+ol),Sn==="SEEK"&&(Sn="RISING")}}if(o.flyUp){const r=Ne+5;o.flyY+=(r-o.flyY)*s*.8,o.group.position.y=o.flyY;const a=Math.min((o.flyY-1)/(r-1),1);o.group.scale.setScalar(1-a*.6),o.glowMat.opacity=.8-a*.5,o.flyY>r-1&&!o.laserLine&&(o.flyUp=!1,o.group.visible=!1,o.laserLine=qf(o.x,o.z,r))}}}if(Sn==="RISING"&&(Pi<0&&(Pi+=dv*s,Pi>0&&(Pi=0),Fi&&(Fi.position.y=Pi)),Ja>=ol&&Pi>=0&&(Sn="COMPLETE",On=0)),Fi){Fi.rotation.y+=s*.03;const i=Fi.children[Fi.children.length-1];if(i&&i.isLight){const o=Math.max(0,Math.min(1,(Pi+Ne)/Ne));i.intensity=o*1.5*(.8+Math.sin(t*1.5)*.2)}}for(let i=0;i<Ni.length;i++){const o=Ni[i];if(!o.laserLine)continue;const r=Math.sin(t*3+i)*.5+.5;o.laserLine.mat.opacity=.5+r*.4,o.laserLine.glowMat.opacity=.15+r*.15}if(Sn==="COMPLETE"){On+=s;const i=Math.min(On/3,1);if(ao&&(ao.emissiveIntensity=i*1.5),co&&(co.emissiveIntensity=i*2.5),On>1&&_l){const o=Math.min((On-1)/4,1);_l.opacity=o*.6,Oi&&(Oi.visible||(Oi.visible=!0),Oi.position.y=.05+Math.sin(t*3)*.02*o)}if(On>2)for(let o=0;o<ti.length;o++){const r=o*.3,a=Math.min(Math.max((On-2-r)/2,0),1);a>0&&!ti[o].mesh.visible&&(ti[o].mesh.visible=!0),ti[o].mat.opacity=a*.55,ti[o].mesh.rotation.y+=s*.1*(o+1)*.3}if(On>1){const o=Math.min((On-1)/6,1)*2;for(let r=0;r<xl.length;r++){const a=xl[r],c=a.group,l=-c.position.x,h=-c.position.z,u=Math.sqrt(l*l+h*h);u>8?(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="walk",a.speed=1.5*o,c.position.x+=l/u*a.speed*s,c.position.z+=h/u*a.speed*s,c.rotation.y=a.wanderAng):a.state="pause"}for(let r=0;r<vl.length;r++){const a=vl[r],c=a.group,l=-c.position.x,h=-c.position.z,u=Math.sqrt(l*l+h*h);u>8&&(a.wanderAng=Math.atan2(-c.position.x,-c.position.z),a.state="hop",a.hopTimer=a.hopTimer%1.2,c.position.x+=l/u*1.5*o*s,c.position.z+=h/u*1.5*o*s)}for(let r=0;r<Ml.length;r++){const a=Ml[r],c=a.group;c.position.x+=(0-c.position.x)*s*.15*o,c.position.z+=(0-c.position.z)*s*.15*o}for(let r=0;r<yl.length;r++){const a=yl[r];a.centerX+=(0-a.centerX)*s*.2*o,a.centerZ+=(0-a.centerZ)*s*.2*o,a.orbitR=Math.max(a.orbitR-s*.3*o,2)}}On>10&&(Sn="FINALE")}if(Sn==="FINALE"){ao&&(ao.emissiveIntensity=1.5+Math.sin(t*.5)*.3),co&&(co.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Oi&&(Oi.position.y=.05+Math.sin(t*3)*.02);for(let i=0;i<ti.length;i++)ti[i].mesh.rotation.y+=s*.1*(i+1)*.3,ti[i].mat.opacity=.45+Math.sin(t+i)*.1}}function UM(s,t,e){const n=Ne+2,i=[new U(s,e,t),new U(0,n,0)],o=new K({color:k.laserPink,transparent:!0,opacity:.8}),r=new hf(i[0],i[1]),a=new Us(r,1,.08,6,!1),c=new I(a,o);vt.add(c);const l=new K({color:k.laserGlow,transparent:!0,opacity:.25}),h=new I(new Us(r,1,.25,6,!1),l);return vt.add(h),{tube:c,glow:h,mat:o,glowMat:l}}const NM=600;let fr=.25,Ae=1,Tu=.85,$f="NIGHT",ho=null,uo=null,wl=null,fo=null,br=null;const Au=[{label:"DUSK",sky:new at(923685),fog:new at(791584),fogDensity:.009,moonInt:.6,moonCol:new at(14527112),moonElev:15,ambSky:new at(4469589),ambGnd:new at(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new at(330264),fog:new at(528408),fogDensity:.01,moonInt:1,moonCol:new at(12307694),moonElev:55,ambSky:new at(3359846),ambGnd:new at(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new at(198160),fog:new at(397332),fogDensity:.012,moonInt:.55,moonCol:new at(8952251),moonElev:75,ambSky:new at(1712708),ambGnd:new at(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new at(1187888),fog:new at(923688),fogDensity:.011,moonInt:.5,moonCol:new at(13417386),moonElev:20,ambSky:new at(3354197),ambGnd:new at(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],pi=new at,Cu=new at;function FM(s){ho=s.scene,uo=s.moon,wl=s.moon2,fo=s.hemiLight,br=s.playerLight}function OM(s){if(!ho)return;fr=(fr+s/NM)%1;const t=fr*4,e=Math.floor(t)%4,n=(e+1)%4,i=t-Math.floor(t),o=.5-.5*Math.cos(i*Math.PI),r=Au[e],a=Au[n];$f=o<.5?r.label:a.label;const c=(l,h)=>l+(h-l)*o;if(pi.copy(r.sky).lerp(a.sky,o),ho.background.copy(pi),pi.copy(r.fog).lerp(a.fog,o),ho.fog.color.copy(pi),ho.fog.density=c(r.fogDensity,a.fogDensity),uo){pi.copy(r.moonCol).lerp(a.moonCol,o),uo.color.copy(pi),uo.intensity=c(r.moonInt,a.moonInt);const l=fr*Math.PI*2,h=c(r.moonElev,a.moonElev)*Math.PI/180,u=60;uo.position.set(Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u)}if(wl){const l=c(r.moonInt,a.moonInt)/.85;wl.intensity=.3*l}fo&&(pi.copy(r.ambSky).lerp(a.ambSky,o),Cu.copy(r.ambGnd).lerp(a.ambGnd,o),fo.color.copy(pi),fo.groundColor.copy(Cu),fo.intensity=c(r.ambInt,a.ambInt)),br&&(br.distance=c(r.plRange,a.plRange),br.intensity=c(r.plInt,a.plInt)),Tu=c(r.stars,a.stars),zv(Tu),Ae=c(r.bio,a.bio)}let Kr=0,jl=0,Tr=0,Ar="CLEAR",Os=!1,ni=0;const Cr={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},zM={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let _s="CLEAR",ms=null,Rr=0,dr=0,ja=0,pr=!1,mr=0,Qa=Math.random()*Math.PI*2,tc=0,ec=0;const Sl=[],BM=8;let Ru=!1,nc=0,gr=1,ic=0,_r=0,sc=0;function kM(){const s=zM[_s],t=Object.entries(s);let e=0;for(const[,i]of t)e+=i;let n=Math.random()*e;for(const[i,o]of t)if(n-=o,n<=0)return i;return t[0][0]}function GM(){if(Ru)return;const s=document.createElement("canvas");s.width=128,s.height=64;const t=s.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new zl(s),i=new we(40,14);for(let o=0;o<BM;o++){const r=new K({map:n,color:5596791,transparent:!0,opacity:0,side:Ht,depthWrite:!1}),a=new I(i,r);a.visible=!1,vt.add(a),Sl.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}Ru=!0}function HM(){GM();const s=Cr.CLEAR.duration;Rr=s[0]+Math.random()*(s[1]-s[0])}function VM(s,t,e){if(pr)if(dr-=s,dr<=0){_s=ms,ms=null,pr=!1;const o=Cr[_s].duration;Rr=o[0]+Math.random()*(o[1]-o[0]),mr=0}else mr=1-dr/ja;else Rr-=s,Rr<=0&&(ms=kM(),pr=!0,ja=30+Math.random()*60,dr=ja,mr=0);const n=Cr[_s];if(pr&&ms){const o=Cr[ms],r=.5-.5*Math.cos(mr*Math.PI),a=(c,l)=>c+(l-c)*r;gr=a(n.fogMult,o.fogMult),ic=a(n.rainRate,o.rainRate),_r=a(n.skyDarken,o.skyDarken),sc=a(n.mistCount,o.mistCount),Tr=a(n.windBase,o.windBase),Ar=r<.5?_s:ms}else gr=n.fogMult,ic=n.rainRate,_r=n.skyDarken,sc=n.mistCount,Tr=n.windBase,Ar=_s;Os=Ar==="LUMINOUS_STORM",Qa+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*s,tc-=s,tc<=0&&(tc=2+Math.random()*6,ec=Math.random()*.8),ec*=Math.pow(.3,s);const i=Tr+ec;if(Kr=Math.cos(Qa)*i,jl=Math.sin(Qa)*i,vt.fog.density*=gr,_r>.001){const o=vt.background,r=1-_r;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(sc);for(let r=0;r<Sl.length;r++){const a=Sl[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const c=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*c,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*c),a.mesh.rotation.y=l+Math.PI/2,a.drift+=Kr*s*.02;const h=.03+gr*.012;a.mat.opacity+=(h-a.mat.opacity)*s*2}else a.active&&(a.mat.opacity-=s*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return Os&&(nc-=s,nc<=0&&(nc=1+Math.random()*4,ni=1)),ni*=Math.pow(.02,s),ni<.01&&(ni=0),ic}const Fn=300,eo=new Float32Array(Fn),no=new Float32Array(Fn),io=new Float32Array(Fn),oc=new Float32Array(Fn),rc=new Float32Array(Fn),ac=new Float32Array(Fn),zi=new Float32Array(Fn),mn=new Float32Array(Fn*6);let Vi=null,El=null;function WM(){const s=new Ie;s.setAttribute("position",new En(mn,3)),El=new rf({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Vi=new Ap(s,El),Vi.frustumCulled=!1,Vi.visible=!1,vt.add(Vi);for(let t=0;t<Fn;t++)zi[t]=0,Kf(t)}function Kf(s){const t=s*6;mn[t]=0,mn[t+1]=-100,mn[t+2]=0,mn[t+3]=0,mn[t+4]=-100,mn[t+5]=0}function XM(s,t,e,n,i){if(!Vi)return;const o=e>.01;if(Vi.visible=o,!o)return;El.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*s*60);for(let c=0;c<r;c++){let l=-1;for(let f=0;f<Fn;f++)if(zi[f]<=0){l=f;break}if(l===-1)break;const h=Math.random()*Math.PI*2,u=Math.random()*30;eo[l]=t.x+Math.cos(h)*u,no[l]=12+Math.random()*10,io[l]=t.z+Math.sin(h)*u,oc[l]=n*2+(Math.random()-.5)*.3,rc[l]=-12-Math.random()*8,ac[l]=i*2+(Math.random()-.5)*.3,zi[l]=2+Math.random()*1.5}const a=.06;for(let c=0;c<Fn;c++){if(zi[c]<=0)continue;if(zi[c]-=s,zi[c]<=0||no[c]<ne(eo[c],io[c])+.1){zi[c]=0,Kf(c);continue}eo[c]+=oc[c]*s,no[c]+=rc[c]*s,io[c]+=ac[c]*s;const l=c*6;mn[l]=eo[c],mn[l+1]=no[c],mn[l+2]=io[c],mn[l+3]=eo[c]+oc[c]*a,mn[l+4]=no[c]+rc[c]*a,mn[l+5]=io[c]+ac[c]*a}Vi.geometry.attributes.position.needsUpdate=!0}let bl=null,cc=60;const YM={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},qM={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function ZM(){bl=document.getElementById("hud")}function $M(s,t){if(!bl)return;cc=cc*.95+1/Math.max(s,.001)*.05;const e=Sn==="SEEK"?"Seek the orbs...":Sn==="RISING"?"The obelisk stirs...":Sn==="COMPLETE"?"Convergence!":"Luminaries",n=YM[$f]||"Night",i=qM[Ar]||"Clear";bl.innerHTML="<b>"+e+"</b> · "+n+" · "+i+" · FPS:"+Math.round(cc)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let Jr=null;function KM(){Jr=document.getElementById("orb-hud")}function JM(){return Jr}function jM(){const s=document.getElementById("overlay");s&&(s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},2500)),Jr&&(Jr.style.display="block")}const me=[],ln=[],oe=[],bo=[],ei=[],To=[],Ao=[],Co=[],Ro=[],Ki=[],Tl=[],Jf=[],jr=[],Ql=[],Qr=[],Gn=[],gn=[],_n=[],mi=[];let Pu=0,Iu=0,lc=0,Ii=null,so=0;function QM(){for(let s=0;s<Zx;s++){let t,e,n=!1;for(let i=0;i<20;i++){const o=S()*6.28,r=5+S()*(ce-10);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<me.length;a++){const c=me[a].x-t,l=me[a].z-e;if(c*c+l*l<9){n=!1;break}}if(n)break}if(n){const i=Hv(t,e);i.position.y=ne(t,e),me.push({group:i,x:t,z:e})}}for(let s=0;s<$x;s++){const t=me[Math.floor(S()*me.length)],e=S()*6.28,n=1+S()*4,i=t.x+Math.cos(e)*n,o=t.z+Math.sin(e)*n,r=Vv(i,o);r.group.position.y=ne(i,o),ln.push(r)}for(let s=0;s<Kx;s++){const t=S()*6.28,e=8+S()*ce*.6,n=Math.cos(t)*e,i=Math.sin(t)*e,o=Wv(n,i);o.group.position.y=ne(n,i),oe.push(o)}for(let s=0;s<Jx;s++){const t=S()*6.28,e=10+S()*ce*.5,n=Math.cos(t)*e,i=Math.sin(t)*e;bo.push(tM(n,ne(n,i)+3+S()*5,i))}for(let s=0;s<jx;s++){const t=ln[Math.floor(S()*ln.length)],e=S()*6.28,n=1+S()*5,i=t.x+Math.cos(e)*n,o=t.z+Math.sin(e)*n,r=eM(i,o);r.group.position.y=ne(i,o),r._baseY=ne(i,o),ei.push(r)}for(let s=0;s<Qx;s++){const t=S()*6.28,e=12+S()*ce*.5,n=Math.cos(t)*e,i=Math.sin(t)*e,o=nM(n,i),r=ne(n,i);o.group.position.y=r,o._baseY=r,To.push(o)}for(let s=0;s<tv;s++){const t=me[Math.floor(S()*me.length)];Ao.push(iM(t.x,ne(t.x,t.z)+2+S()*4,t.z))}for(let s=0;s<ev;s++){const t=S()*6.28,e=2+S()*(ce*.9),n=Math.cos(t)*e,i=Math.sin(t)*e,o=Xv(n,i,2+S()*2.5,25+Math.floor(S()*20));o.mesh.position.y=ne(n,i),Co.push(o)}for(let s=0;s<ov;s++){let t,e,n=!1;for(let i=0;i<10;i++){const o=S()*6.28,r=3+S()*(ce*.85);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<me.length;a++){const c=me[a].x-t,l=me[a].z-e;if(c*c+l*l<4){n=!1;break}}if(n)break}if(n){const i=lM(t,e);i.group.position.y=ne(t,e),Jf.push(i)}}for(let s=0;s<nv;s++){const t=me[Math.floor(S()*me.length)],e=S()*6.28,n=1+S()*5,i=t.x+Math.cos(e)*n,o=t.z+Math.sin(e)*n,r=Yv(i,o);r.group.position.y=ne(i,o),Ro.push(r)}for(let s=0;s<iv;s++){const t=S()*6.28,e=3+S()*(ce*.7),n=Math.cos(t)*e,i=Math.sin(t)*e,o=qv(n,i);o.group.position.y=ne(n,i),Ki.push(o)}for(let s=0;s<sv;s++){const t=S()*6.28,e=4+S()*(ce*.8),n=Math.cos(t)*e,i=Math.sin(t)*e,o=Zv(n,i);o.group.position.y=ne(n,i),Tl.push(o)}for(let s=0;s<ol;s++){let t,e,n=!1;for(let i=0;i<30;i++){const o=S()*6.28,r=20+S()*(ce*.6);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<_n.length;a++){const c=_n[a].x-t,l=_n[a].z-e;if(c*c+l*l<225){n=!1;break}}if(n)break}if(n){const i=cM(t,e);i.group.position.y=ne(t,e)+1,i.flyY=ne(t,e)+1,_n.push(i)}}for(let s=0;s<Ef;s++){const t=S()*6.28,e=2+S()*3,n=Math.cos(t)*e,i=Math.sin(t)*e;jr.push(sM(n,ne(n,i)+1+S()*.5,i))}for(let s=0;s<rv;s++){const t=S()*6.28,e=4+S()*(ce*.7),n=Math.cos(t)*e,i=Math.sin(t)*e,o=jv(n,i);o.group.position.y=ne(n,i),Ql.push(o)}for(let s=0;s<av;s++){let t,e,n=!1;for(let i=0;i<20;i++){const o=S()*6.28,r=10+S()*(ce*.6);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<me.length;a++){const c=me[a].x-t,l=me[a].z-e;if(c*c+l*l<36){n=!1;break}}if(n)break}if(n){hl(t,e,4);const i=oM(t,e);i.group.position.y=ne(t,e),Qr.push(i)}}for(let s=0;s<cv;s++){const t=S()*6.28,e=5+S()*ce*.6,n=Math.cos(t)*e,i=Math.sin(t)*e;Gn.push(rM(n,ne(n,i)+.5+S()*5,i))}for(let s=0;s<hv;s++){let t,e,n=!1;for(let i=0;i<20;i++){const o=S()*6.28,r=8+S()*(ce*.6);t=Math.cos(o)*r,e=Math.sin(o)*r,n=!0;for(let a=0;a<me.length;a++){const c=me[a].x-t,l=me[a].z-e;if(c*c+l*l<16){n=!1;break}}if(n)break}if(n){hl(t,e,3);const i=aM(t,e);i.group.position.y=ne(t,e),gn.push(i)}}}function jf(s,t){const e=1+Tr*1.5,n=Kr*.03,i=jl*.03;for(let o=0;o<Co.length;o++){const r=Co[o],a=(Math.sin(t*.7+r.cx*.05)*.04+Math.sin(t*1.3+r.cz*.08)*.02)*e;r.mesh.rotation.z=a+n,r.mesh.rotation.x=Math.sin(t*.9+r.cz*.06)*.03*e+i}for(let o=0;o<Ro.length;o++){const r=Ro[o];r.group.rotation.z=Math.sin(t*.8+r.phase)*.03*e+n,r.group.rotation.x=Math.sin(t*.6+r.phase+1)*.02*e+i}for(let o=0;o<Ki.length;o++){const r=Ki[o],a=Math.sin(t*1+r.phase)*.5+.5;r.petalMat.emissiveIntensity=(.3+a*.5)*Ae,r.group.rotation.z=Math.sin(t*.9+r.phase)*.04*e+n*.5}for(let o=0;o<Tl.length;o++){const r=Tl[o];r.group.rotation.z=Math.sin(t*1.1+r.phase)*r.swayAmp*e+n,r.group.rotation.x=Math.sin(t*.8+r.phase+2)*r.swayAmp*.5*e+i}}function Qf(s,t){for(let e=0;e<bo.length;e++){const n=bo[e],i=n.group,o=i.position.x,r=i.position.z;if(n._stT-=s,n._stT<=0)if(Os)n._state="display",n._stT=10+Math.random()*15;else{const h=Math.random();h<.5?(n._state="drift",n._stT=20+Math.random()*30):h<.75?(n._state="pulse",n._stT=8+Math.random()*12):(n._state="migrate",n._migrateAng=Math.random()*6.28,n._stT=15+Math.random()*20)}switch(Os&&n._state!=="display"&&(n._state="display",n._stT=10),n._state){case"drift":{n.driftAng+=s*.15;const h=8+Math.sin(t*.1+n.phase)*4,u=n.homeX+Math.cos(n.driftAng)*h,f=n.homeZ+Math.sin(n.driftAng)*h;i.position.x+=(u-o)*s*.3,i.position.z+=(f-r)*s*.3,i.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*1.5;break}case"pulse":{n.driftAng+=s*.08,i.position.x+=Math.cos(n.driftAng)*s*.3,i.position.z+=Math.sin(n.driftAng)*s*.3,i.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*1,n._pulseSync=Math.sin(t*2+Math.floor(e/2)*Math.PI)*.5+.5;break}case"migrate":{i.position.x+=Math.cos(n._migrateAng)*s*1,i.position.z+=Math.sin(n._migrateAng)*s*1,i.position.y=n.floatY+Math.sin(t*n.wobble+n.phase)*.8,i.position.x*i.position.x+i.position.z*i.position.z>ce*.8*(ce*.8)&&(n._migrateAng+=Math.PI);break}case"display":{n.driftAng+=s*.4,i.position.x+=Math.cos(n.driftAng)*s*.8,i.position.z+=Math.sin(n.driftAng)*s*.8,i.position.y=n.floatY+Math.sin(t*2+n.phase)*2;break}}const a=Math.sin(t*1.2+n.phase)*.5+.5;let c=1,l=0;n._state==="pulse"?(c=1+n._pulseSync*1.5,l=n._pulseSync*.15):n._state==="display"&&(c=1.5+Math.sin(t*4+n.phase)*.8,l=.15),n.bellMat.emissiveIntensity=(.4+a*.8)*Ae*c,n.bellMat.opacity=.35+a*.25+l,i.rotation.y+=s*.2;for(let h=2;h<i.children.length;h++)i.children[h].rotation.x=Math.sin(t*2+h+n.phase)*.15,i.children[h].rotation.z=Math.sin(t*1.5+h*.7+n.phase)*.1}}function td(s,t){const e=Ce.ShiftLeft||Ce.ShiftRight||Do;for(let n=0;n<ei.length;n++){const i=ei[n],o=i.group,r=o.position.x,a=o.position.z,c=r-st.pos.x,l=a-st.pos.z,h=c*c+l*l;if(i.state!=="startled"&&i.state!=="following"&&i.state!=="huddle"){const g=e?3.5:2;h<g*g&&(i.state="startled",i._scaredT=.6+Math.random()*.5,i.wanderAng=Math.atan2(c,l),i.hopTimer=0)}if(Os&&i.state!=="startled"&&i.state!=="huddle"){let g=1/0,v=-1;for(let m=0;m<ei.length;m++){if(m===n)continue;const d=ei[m].group.position.x-r,y=ei[m].group.position.z-a,x=d*d+y*y;x<g&&(g=x,v=m)}v>=0&&g>1&&(i.state="huddle",i._huddleTarget=v)}Fs>8&&h<144&&i.state==="idle"&&Math.random()<.001&&(i.state="following",i._followT=10+Math.random()*10);const u=r-i._lastTX,f=a-i._lastTZ;switch(u*u+f*f>.25&&(i._baseY=ne(r,a),i._lastTX=r,i._lastTZ=a),i.state){case"idle":{i.idleTimer-=s,o.position.y=i._baseY+Math.sin(t*2+i.phase)*.02,o.rotation.y+=Math.sin(t*.5+i.phase)*s*.3,i.idleTimer<=0&&(i.state="hop",i.wanderAng+=(Math.random()-.5)*1.5,i.hopTimer=0);break}case"hop":{i.hopTimer+=s;const v=i.hopTimer/1.2;if(v>=1)i.state="idle",i.idleTimer=1.5+Math.random()*3,o.position.y=i._baseY;else{o.position.y=i._baseY+Math.sin(v*Math.PI)*.3,o.position.x+=Math.sin(i.wanderAng)*i.speed*s,o.position.z+=Math.cos(i.wanderAng)*i.speed*s;const m=1-Math.sin(v*Math.PI)*.15,d=1+Math.sin(v*Math.PI)*.2;o.scale.set(m,d,m),o.rotation.y=i.wanderAng}break}case"startled":{i._scaredT-=s,i.hopTimer+=s*1.5;const g=Math.min(i.hopTimer/.8,1);o.position.y=i._baseY+Math.sin(g*Math.PI)*.5,o.position.x+=Math.sin(i.wanderAng)*i.speed*2*s,o.position.z+=Math.cos(i.wanderAng)*i.speed*2*s,o.scale.set(.85,1.3,.85),i._scaredT<=0&&(i.state="idle",i.idleTimer=3+Math.random()*3,o.position.y=i._baseY,o.scale.set(1,1,1));break}case"following":{if(i._followT-=s,h>225||Fs<3||i._followT<=0){i.state="idle",i.idleTimer=2;break}if(i.wanderAng=Math.atan2(st.pos.x-r,st.pos.z-a),h>9){i.hopTimer+=s;const g=i.hopTimer%1.5/1.5;o.position.y=i._baseY+Math.sin(g*Math.PI)*.2,o.position.x+=Math.sin(i.wanderAng)*i.speed*.4*s,o.position.z+=Math.cos(i.wanderAng)*i.speed*.4*s}else o.position.y=i._baseY+Math.sin(t*3+i.phase)*.03;o.rotation.y=i.wanderAng;break}case"huddle":{if(!Os){i.state="idle",i.idleTimer=2;break}const g=ei[i._huddleTarget];if(g){const v=g.group.position.x-r,m=g.group.position.z-a,d=Math.sqrt(v*v+m*m);d>.5&&(o.position.x+=v/d*i.speed*.5*s,o.position.z+=m/d*i.speed*.5*s)}o.rotation.z=Math.sin(t*8)*.05,o.position.y=i._baseY;break}}o.position.x*o.position.x+o.position.z*o.position.z>ce*.85*(ce*.85)&&(i.wanderAng+=Math.PI)}}function ed(s,t){const e=Ce.ShiftLeft||Ce.ShiftRight||Do;for(let n=0;n<To.length;n++){const i=To[n],o=i.group,r=o.position.x,a=o.position.z,c=r-st.pos.x,l=a-st.pos.z,h=c*c+l*l,u=Math.atan2(c,l),f=e?18:12,p=f*f,g=e?10:mv,v=g*g,m=r-i._lastTX,d=a-i._lastTZ;m*m+d*d>.25&&(i._baseY=ne(r,a),i._lastTX=r,i._lastTZ=a);const y=i._baseY;i.state!=="flee"&&i.state!=="alert"&&i.state!=="watching"&&(h<v?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2,i._zigTimer=0):h<p&&(i.state="alert",i._stT=1+Math.random()*1.5));let x=i.speed,_=!1;switch(i.state){case"walk":{if(_=!0,i.walkTimer-=s,i.walkTimer<=0){const C=Math.random();if(C<.25)i.state="pause",i.pauseTimer=2+Math.random()*3;else if(C<.4)i.state="graze",i._stT=3+Math.random()*4;else if(C<.5&&gn.length>0){i.state="drink",i._stT=8;let w=1/0;for(let M=0;M<gn.length;M++){const P=gn[M].x-r,D=gn[M].z-a,N=P*P+D*D;N<w&&(w=N,i._drinkTgt=gn[M])}}else C<.55?(i.state="rest",i._stT=5+Math.random()*5):(i.wanderAng+=(Math.random()-.5)*1.2,i.walkTimer=3+Math.random()*5)}if((r-i.homeX)*(r-i.homeX)+(a-i.homeZ)*(a-i.homeZ)>400){const C=Math.atan2(i.homeX-r,i.homeZ-a);i.wanderAng+=(C-i.wanderAng)*s*.5}break}case"pause":{i.pauseTimer-=s,i.headLook=Math.sin(t*.6)*.4,i.pauseTimer<=0&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}case"graze":{i._stT-=s,i.headBob=-.5,i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*4,i.headBob=0);break}case"drink":{if(i._stT-=s,i._drinkTgt){const E=i._drinkTgt.x-r,C=i._drinkTgt.z-a;Math.sqrt(E*E+C*C)>2?(i.wanderAng=Math.atan2(E,C),_=!0,x=i.speed*.7):i.headBob=-.6}i._stT<=0&&(i.state="walk",i.walkTimer=3+Math.random()*4,i.headBob=0,i._drinkTgt=null);break}case"rest":{i._stT-=s,o.position.y=Math.max(y-.3,o.position.y-s*.5),i._stT<=0&&(i.state="walk",i.walkTimer=2+Math.random()*3);break}case"alert":{i._stT-=s,h<v?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):i._stT<=0&&(h<f*1.2*(f*1.2)?(i.state="watching",i._stT=3+Math.random()*3):(i.state="walk",i.walkTimer=2+Math.random()*3));break}case"watching":{i._stT-=s,_=!0,x=i.speed*.3,i.wanderAng=u,h<v?(i.state="flee",i.wanderAng=u,i.fleeTimer=2.5+Math.random()*2):(h>f*1.5*(f*1.5)||i._stT<=0)&&(i.state="walk",i.walkTimer=2+Math.random()*4);break}case"flee":{_=!0,x=i.speed*gv,i.fleeTimer-=s,i._zigTimer-=s,i._zigTimer<=0&&(i._zigDir*=-1,i._zigTimer=.4+Math.random()*.4),i.wanderAng=u+i._zigDir*.3,(i.fleeTimer<=0||h>f*2*(f*2))&&(i.state="walk",i.walkTimer=3+Math.random()*5);break}}if(_&&(o.position.x+=Math.sin(i.wanderAng)*x*s,o.position.z+=Math.cos(i.wanderAng)*x*s,i.legCycle+=s*x*3),o.position.x*o.position.x+o.position.z*o.position.z>ce*.9*(ce*.9)&&(i.wanderAng=Math.atan2(-o.position.x,-o.position.z)),i.state!=="rest"){const E=y-o.position.y;Math.abs(E)>.01?o.position.y+=Math.sign(E)*Math.min(Math.abs(E),s*2):o.position.y=y}if(o.rotation.y=i.wanderAng,i.state==="alert"||i.state==="watching"){const E=u-i.wanderAng;i.headLook+=(E*.5-i.headLook)*s*3}const b=i.headBob||0;i.neckPivot.rotation.x+=(b-i.neckPivot.rotation.x)*s*3,i.neckPivot.rotation.y+=(i.headLook-i.neckPivot.rotation.y)*s*4,_&&i.state!=="graze"&&i.state!=="drink"&&(i.neckPivot.rotation.x+=Math.sin(i.legCycle*2)*.05);for(let E=0;E<i.legPivots.length;E++){const C=i.legPivots[E];if(_){const w=C.isFront?0:Math.PI,M=C.side>0?Math.PI:0,P=Math.sin(i.legCycle+w+M)*.4*(x/i.speed);C.upper.rotation.x=P,C.lower.rotation.x=Math.max(0,-P*.6)}else i.state==="rest"&&o.position.y<-.1?(C.upper.rotation.x+=(.8-C.upper.rotation.x)*s*2,C.lower.rotation.x+=(1-C.lower.rotation.x)*s*2):(C.upper.rotation.x*=.9,C.lower.rotation.x*=.9)}i.tailPivot.rotation.x=Math.sin(t*1.5+i.phase)*.15,i.state==="flee"&&(i.tailPivot.rotation.x+=.3),i.state==="alert"?i.tailPivot.rotation.z=Math.sin(t*6)*.1:i.tailPivot.rotation.z*=.9,i.mat.emissiveIntensity=(.3+Math.sin(t*.8+i.phase)*.2)*Ae,i.headLook*=.98}}function nd(s,t){for(let e=0;e<Ao.length;e++){const n=Ao[e],i=n.group,o=i.position.x,r=i.position.z;if(n._state==="patrol"){if(Math.random()<.002){let u=1/0,f=null;for(let p=0;p<oe.length;p++){const g=oe[p].x-o,v=oe[p].z-r,m=g*g+v*v;m<900&&m<u&&(u=m,f=oe[p])}f&&(n._state="attracted",n._attractTarget=f,n._stT=6+Math.random()*8)}if(Math.random()<.001){let u=1/0,f=null;for(let p=0;p<me.length;p++){const g=me[p].x-o,v=me[p].z-r,m=g*g+v*v;m<400&&m<u&&(u=m,f=me[p])}f&&(n._state="rest",n._restTree=f,n._stT=4+Math.random()*6)}}switch(n._state){case"patrol":{n.orbitAng+=s*.4;const u=n.centerX+Math.cos(n.orbitAng)*n.orbitR,f=n.centerZ+Math.sin(n.orbitAng)*n.orbitR;i.position.x+=(u-o)*s*1.5,i.position.z+=(f-r)*s*1.5,i.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,i.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=s,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=s*.8;const u=n._attractTarget,f=Math.max(.5,n._stT*.4),p=u.x+Math.cos(n.orbitAng)*f,g=u.z+Math.sin(n.orbitAng)*f;i.position.x+=(p-o)*s*2,i.position.z+=(g-r)*s*2,i.position.y+=(2-i.position.y)*s*.5,i.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=s,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=i.position.x,n.centerZ=i.position.z;break}const u=n._restTree,f=u.x+.5-o,p=u.z+.5-r,g=Math.sqrt(f*f+p*p);g>.3&&(i.position.x+=f/g*s*2,i.position.z+=p/g*s*2),i.position.y+=(2.5-i.position.y)*s*1.5,i.rotation.y=Math.atan2(f,p);break}}const a=n._state==="rest"?.05:.4,c=Math.sin(t*n.flapSpeed+n.phase)*a;for(let u=0;u<i._wingPivots.length;u++){const f=i._wingPivots[u];f.pivot.rotation.z=c*f.side}const l=Math.sin(t*1.5+n.phase)*.5+.5,h=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+l*.6+h)*Ae,n.wingMat.opacity=.45+l*.25}}function ty(s,t){const e=Ce.ShiftLeft||Ce.ShiftRight||Do;let n=null;if(Fs>5&&(Sn==="SEEK"||Sn==="RISING")){let i=1/0;for(let o=0;o<_n.length;o++){if(_n[o].found)continue;const r=_n[o].x-st.pos.x,a=_n[o].z-st.pos.z,c=r*r+a*a;c<i&&(i=c,n=_n[o])}}for(let i=0;i<jr.length;i++){const o=jr[i],r=t*.5+o.phase+i/Ef*6.28,a=e?4+i*2:1.5+i*.8,c=e?3+i:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=st.pos.x+Math.cos(r)*a,o.targetY=st.pos.y-sa+c,o.targetZ=st.pos.z+Math.sin(r)*a,i===0&&n){const p=Math.min((Fs-5)/3,.6);o.targetX+=(n.x-st.pos.x)*p,o.targetZ+=(n.z-st.pos.z)*p,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*s,o.velY+=(o.targetY-o.group.position.y)*l*s,o.velZ+=(o.targetZ-o.group.position.z)*l*s,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*s*4,o.group.position.y+=o.velY*s*4,o.group.position.z+=o.velZ*s*4;const h=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+h*.4,o.hazeMat.opacity=.08+h*.12;const u=o.group.children[3],f=t*3+o.phase;u.position.set(Math.cos(f)*.18,Math.sin(f*1.5)*.06,Math.sin(f)*.18)}}function ey(s,t){for(let e=0;e<Qr.length;e++){const n=Qr[e],i=n.x-st.pos.x,o=n.z-st.pos.z,a=i*i+o*o<(sl+.5)*(sl+.5),c=a?1:0;n.glowIntensity+=(c-n.glowIntensity)*s*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*Ae,a&&st.vel.y>0&&st.vel.y<=kr+.5&&(st.vel.y=kr+fv,n.glowIntensity=1.5)}}function ny(s,t){for(let e=0;e<Gn.length;e++){const n=Gn[e];if(n.popped){if(n.popTimer-=s,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const h=S()*6.28,u=8+S()*ce*.5;n.homeX=Math.cos(h)*u,n.homeZ=Math.sin(h)*u,n.floatY=.5+S()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=s*.2;const i=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(i-n.group.position.x)*s*.5,n.group.position.z+=(o-n.group.position.z)*s*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-st.pos.x,c=n.group.position.y-st.pos.y,l=n.group.position.z-st.pos.z;a*a+c*c+l*l<_u*_u*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,PM(n.group.position.x,n.group.position.y,n.group.position.z,6))}}function iy(s,t){for(let e=0;e<gn.length;e++){const n=gn[e];for(let o=0;o<n.pads.length;o++)n.pads[o].mesh.position.y=.05+Math.sin(t*.8+n.pads[o].phase)*.015;n.waterMat.emissiveIntensity=(.15+Math.sin(t*1+n.phase)*.1)*Ae;const i=Math.sin(t*1.2+n.phase)*.5+.5;n.flMat.emissiveIntensity=(.3+i*.5)*Ae}}function sy(s,t){if(lc-=s,lc<=0){lc=.5;for(let i=0;i<oe.length;i++){const o=oe[i],r=o.x-st.pos.x,a=o.z-st.pos.z;if(r*r+a*a<36){Ii={x:o.x,z:o.z},so=0;break}}}if(!Ii)return;if(so+=s*12,so>30){Ii=null,so=0;return}const e=so,n=4;for(let i=0;i<ln.length;i++){const o=ln[i],r=o.x-Ii.x,a=o.z-Ii.z,c=Math.sqrt(r*r+a*a);if(Math.abs(c-e)<n){const l=1-Math.abs(c-e)/n;o.capMat.emissiveIntensity=Math.max(o.capMat.emissiveIntensity,(o.base+l*2)*Ae)}}for(let i=0;i<Ki.length;i++){const o=Ki[i],r=o.group.position.x-Ii.x,a=o.group.position.z-Ii.z,c=Math.sqrt(r*r+a*a);if(Math.abs(c-e)<n){const l=1-Math.abs(c-e)/n;o.petalMat.emissiveIntensity=Math.max(o.petalMat.emissiveIntensity,(.3+l*1.5)*Ae)}}}function oy(s,t){const e=st.pos.x,n=st.pos.z;for(let i=0;i<Ki.length;i++){const o=Ki[i],r=o.group.position.x,a=o.group.position.z,c=r-e,l=a-n,u=c*c+l*l<16?1:0;o._react=o._react||0,o._react+=(u-o._react)*s*(u>0?4:1.5);const f=1+o._react*.15;o.group.scale.set(f,1+o._react*.05,f),o.petalMat.emissiveIntensity+=o._react*.6*Ae}for(let i=0;i<ln.length;i++){const o=ln[i],r=o.x-e,a=o.z-n,l=r*r+a*a<4?1:0;o._touch=o._touch||0,o._touch+=(l-o._touch)*s*(l>0?6:1.5),o.capMat.emissiveIntensity+=o._touch*1.5*Ae;const h=1+o._touch*.08;o.group.scale.set(h,1+o._touch*.04,h)}for(let i=0;i<Co.length;i++){const o=Co[i],r=o.cx-e,a=o.cz-n,c=r*r+a*a;if(c<25&&c>.01){const l=Math.sqrt(c),h=(1-l/5)*.08;o.mesh.rotation.z+=r/l*h,o.mesh.rotation.x+=a/l*h}}for(let i=0;i<Ro.length;i++){const o=Ro[i],r=o.group.position.x,a=o.group.position.z,c=r-e,l=a-n,u=c*c+l*l<2.25?.65:1;o._curl=o._curl===void 0?1:o._curl,o._curl+=(u-o._curl)*s*(u<1?4:1.5),o.group.scale.set(1+(1-o._curl)*.3,o._curl,1+(1-o._curl)*.3)}for(let i=0;i<oe.length;i++){const o=oe[i],r=o.x-e,a=o.z-n;if(r*r+a*a<36)for(let c=0;c<oe.length;c++){if(i===c)continue;const l=oe[c],h=o.x-l.x,u=o.z-l.z,f=h*h+u*u;if(f<400){const p=(1-Math.sqrt(f)/20)*.8;l.mat.emissiveIntensity+=p*Ae,l.light&&(l.light.intensity+=p*.3*Ae)}}}}let xr="EXPLORE",hc=0,uc=0;function ry(s,t){let e=!1;for(let a=0;a<oe.length;a++){const c=oe[a].x-st.pos.x,l=oe[a].z-st.pos.z;if(c*c+l*l<64){e=!0;break}}xr=e?"NEAR_CRYSTAL":"EXPLORE",hc+=s;const n=xr==="NEAR_CRYSTAL"?.08:.25,i=xr==="NEAR_CRYSTAL"?120:100;if(hc>n&&(hc=0,Hf(0,t)<i))if(xr==="NEAR_CRYSTAL")for(let c=0;c<oe.length;c++){const l=oe[c].x-st.pos.x,h=oe[c].z-st.pos.z;l*l+h*h<100&&gl(oe[c].x,ne(oe[c].x,oe[c].z)+1,oe[c].z,3+Math.random()*4)}else{const c=Math.random()*6.28,l=5+Math.random()*25,h=st.pos.x+Math.cos(c)*l,u=st.pos.z+Math.sin(c)*l;gl(h,ne(h,u),u,6+Math.random()*10)}if(uc+=s,uc>.2){uc=0;for(let a=0;a<ln.length;a++){const c=ln[a],l=c.x-st.pos.x,h=c.z-st.pos.z;l*l+h*h<200&&Math.random()<.15&&yM(c.x,.6*c.group.scale.x,c.z)}}for(let a=0;a<ln.length;a++){const c=ln[a],l=Math.sin(t*c.speed+c.phase)*.5+.5;c.capMat.emissiveIntensity=c.base*(.5+l*.8)*Ae}for(let a=0;a<oe.length;a++){const c=oe[a],l=Math.sin(t*.6+c.phase)*.5+.5;c.mat.emissiveIntensity=(1+l*1.5)*Ae,c.group.children[0].rotation.y+=s*.15,c.light&&(c.light.intensity=(.3+l*.4)*Ae)}if(!mi.length)for(let a=0;a<oe.length;a++)mi.push({idx:a,dist:0});const o=st.pos.x-Pu,r=st.pos.z-Iu;if(o*o+r*r>1){Pu=st.pos.x,Iu=st.pos.z;for(let a=0;a<oe.length;a++){const c=oe[a],l=c.x-st.pos.x,h=c.z-st.pos.z;mi[a].idx=a,mi[a].dist=l*l+h*h}mi.sort((a,c)=>a.dist-c.dist)}for(let a=0;a<Ui.length;a++)if(a<mi.length&&mi[a].dist<2500){const c=oe[mi[a].idx],l=Math.sin(t*.6+c.phase)*.5+.5;Ui[a].position.set(c.x,1.5,c.z),Ui[a].intensity=(1.5+l*2)*Ae,Ui[a].distance=16,Ui[a].color.setHex(k.crystal)}else Ui[a].intensity=0;Qf(s,t),td(s,t),ed(s,t),nd(s,t),Uf(s,t),jf(s,t),ty(s,t),Qv(Ql,s,t,st.pos),ey(s,t),ny(s,t),iy(s,t),Wf(s,t,st.pos),Jv(s,t),AM(s),IM(s),sy(s),oy(s),DM(s,t)}let Ue=0,Al=!1;function ay(){Al||(Al=!0,Cv(!0),jM())}function id(){requestAnimationFrame(id);const s=Math.min(bf.getDelta(),.1);Ue+=s,OM(s);const t=VM(s,Ue,st.pos);if(XM(s,st.pos,t,Kr,jl),ni>0&&(Yl.intensity+=ni*2.5,vt.background.r=Math.min(1,vt.background.r+ni*.3),vt.background.g=Math.min(1,vt.background.g+ni*.3),vt.background.b=Math.min(1,vt.background.b+ni*.4)),!Al){Ke.position.set(0,sa,0),Ke.rotation.order="YXZ",Ke.rotation.y+=s*.08,Ke.rotation.x=0;for(let e=0;e<ln.length;e++){const n=ln[e],i=Math.sin(Ue*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.5+i*.8)*Ae}for(let e=0;e<oe.length;e++){const n=oe[e];n.mat.emissiveIntensity=(1+Math.sin(Ue*.6+n.phase)*.5*1.5+.75)*Ae}Qf(s,Ue),td(s,Ue),ed(s,Ue),nd(s,Ue),Uf(s,Ue),jf(s,Ue),Wf(s,Ue,st.pos);for(let e=0;e<Gn.length;e++)Gn[e].popped||(Gn[e].group.position.y=Gn[e].floatY+Math.sin(Ue*.6+Gn[e].phase)*Gn[e].bobAmp);for(let e=0;e<gn.length;e++)for(let n=0;n<gn[e].pads.length;n++)gn[e].pads[n].mesh.position.y=.05+Math.sin(Ue*.8+gn[e].pads[n].phase)*.015;for(let e=0;e<_n.length;e++){const n=_n[e],i=Math.sin(Ue*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(Ue*.8+n.phase)*.3,n.glowMat.opacity=.3+i*.4}Mu();return}Gv(s),ry(s,Ue),Hf(s,Ue),wM(s),Ke.position.copy(st.pos),Ke.position.y+=Nf,Ke.rotation.order="YXZ",Ke.rotation.y=Eo,Ke.rotation.x=Yi,$M(s,st.pos),Mu()}try{hl(0,0,5),Ov(),FM({scene:vt,moon:Tn,moon2:An,hemiLight:Yl,playerLight:ql}),QM(),Nv(),Bv(me,Jf),kv(TM),HM(),WM(),xM(150),MM(60),Tv(),SM(lv),bM(20),$v(40),RM(30),dM(),gM(),_M(),ZM(),KM(),LM({orbs:_n,obeliskGroup:hM(),obeliskMat:uM(),obeliskGlowMat:fM(),moatMesh:pM(),moatMat:mM(),rainbowArcs:ml,player:st,makeLaser:UM,orbHudEl:JM(),deers:To,puffs:ei,jellies:bo,moths:Ao}),Av(ay);for(let s=0;s<50;s++){const t=Math.random()*6.28,e=3+Math.random()*ce*.7,n=Math.cos(t)*e,i=Math.sin(t)*e;gl(n,ne(n,i),i,8+Math.random()*12)}console.log("✓ Init: trees="+me.length+" mush="+ln.length+" crystals="+oe.length+" orbs="+_n.length+" creatures="+(bo.length+ei.length+To.length+Ao.length)+" wisps="+jr.length+" dandelions="+Ql.length+" fairyRings="+Qr.length+" bubbles="+Gn.length+" ponds="+gn.length+" scene="+vt.children.length),id()}catch(s){console.error("INIT FAILED:",s),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(s.stack||s.message)+"</pre></div>"}
