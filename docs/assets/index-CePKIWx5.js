(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cf="172",qm=0,Yf=1,Ym=2,O0=1,B0=2,zi=3,xs=0,rn=1,Ct=2,Vi=0,Bo=1,Qt=2,Zf=3,$f=4,Zm=5,Os=100,$m=101,jm=102,Jm=103,Km=104,Qm=200,tg=201,eg=202,ng=203,_u=204,yu=205,ig=206,sg=207,og=208,rg=209,ag=210,cg=211,lg=212,ug=213,hg=214,wu=0,Su=1,bu=2,Ko=3,Tu=4,Eu=5,Au=6,Ru=7,G0=0,fg=1,dg=2,ms=0,pg=1,mg=2,gg=3,k0=4,xg=5,vg=6,Mg=7,H0=300,Qo=301,tr=302,Cu=303,Pu=304,Qc=306,er=1e3,Gs=1001,Iu=1002,Wn=1003,_g=1004,ma=1005,Si=1006,ll=1007,ks=1008,$i=1009,V0=1010,W0=1011,Jr=1012,lf=1013,Zs=1014,bi=1015,Wi=1016,uf=1017,hf=1018,nr=1020,X0=35902,q0=1021,Y0=1022,hi=1023,Z0=1024,$0=1025,Go=1026,ir=1027,ff=1028,df=1029,j0=1030,pf=1031,mf=1033,lc=33776,uc=33777,hc=33778,fc=33779,Lu=35840,Du=35841,Uu=35842,Nu=35843,zu=36196,Fu=37492,Ou=37496,Bu=37808,Gu=37809,ku=37810,Hu=37811,Vu=37812,Wu=37813,Xu=37814,qu=37815,Yu=37816,Zu=37817,$u=37818,ju=37819,Ju=37820,Ku=37821,dc=36492,Qu=36494,th=36495,J0=36283,eh=36284,nh=36285,ih=36286,yg=3200,wg=3201,K0=0,Sg=1,us="",An="srgb",sr="srgb-linear",Rc="linear",ve="srgb",no=7680,jf=519,bg=512,Tg=513,Eg=514,Q0=515,Ag=516,Rg=517,Cg=518,Pg=519,sh=35044,ye=35048,Jf="300 es",ki=2e3,Cc=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,oh=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Ig(i,t){return(i%t+t)%t}function hl(i,t,e){return(1-e)*i+e*t}function wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,o,r,a,u,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,u,l)}set(t,e,n,s,o,r,a,u,l){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=o,c[5]=u,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],u=n[6],l=n[1],c=n[4],h=n[7],f=n[2],p=n[5],m=n[8],x=s[0],d=s[3],g=s[6],S=s[1],_=s[4],w=s[7],A=s[2],E=s[5],T=s[8];return o[0]=r*x+a*S+u*A,o[3]=r*d+a*_+u*E,o[6]=r*g+a*w+u*T,o[1]=l*x+c*S+h*A,o[4]=l*d+c*_+h*E,o[7]=l*g+c*w+h*T,o[2]=f*x+p*S+m*A,o[5]=f*d+p*_+m*E,o[8]=f*g+p*w+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],u=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*o*c+n*a*u+s*o*l-s*r*u}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],u=t[6],l=t[7],c=t[8],h=c*r-a*l,f=a*u-c*o,p=l*o-r*u,m=e*h+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=h*x,t[1]=(s*l-c*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(c*e-s*u)*x,t[5]=(s*o-a*e)*x,t[6]=p*x,t[7]=(n*u-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const u=Math.cos(o),l=Math.sin(o);return this.set(n*u,n*l,-n*(u*r+l*a)+r+t,-s*l,s*u,-s*(-l*r+u*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fl.makeScale(t,e)),this}rotate(t){return this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fl=new qt;function tp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lg(){const i=Pc("canvas");return i.style.display="block",i}const Kf={};function Ao(i){i in Kf||(Kf[i]=!0,console.warn(i))}function Dg(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Ug(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ng(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qf=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),td=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zg(){const i={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ve&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ve&&(s.r=ko(s.r),s.g=ko(s.g),s.b=ko(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?Rc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sr]:{primaries:t,whitePoint:n,transfer:Rc,toXYZ:Qf,fromXYZ:td,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Qf,fromXYZ:td,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),i}const he=zg();function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let io;class Fg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{io===void 0&&(io=Pc("canvas")),io.width=t.width,io.height=t.height;const n=io.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=io}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=qi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qi(e[n]/255)*255):e[n]=qi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Og=0;class ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(dl(s[r].image)):o.push(dl(s[r]))}else o=dl(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bg=0;class an extends dr{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Gs,s=Gs,o=Si,r=ks,a=hi,u=$i,l=an.DEFAULT_ANISOTROPY,c=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Xi(),this.name="",this.source=new ep(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==H0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case Gs:t.x=t.x<0?0:1;break;case Iu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case Gs:t.y=t.y<0?0:1;break;case Iu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=H0;an.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const u=t.elements,l=u[0],c=u[4],h=u[8],f=u[1],p=u[5],m=u[9],x=u[2],d=u[6],g=u[10];if(Math.abs(c-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-d)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+d)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,w=(p+1)/2,A=(g+1)/2,E=(c+f)/4,T=(h+x)/4,b=(m+d)/4;return _>w&&_>A?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=E/n,o=T/n):w>A?w<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),n=E/s,o=b/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=T/o,s=b/o),this.set(n,s,o,e),this}let S=Math.sqrt((d-m)*(d-m)+(h-x)*(h-x)+(f-c)*(f-c));return Math.abs(S)<.001&&(S=1),this.x=(d-m)/S,this.y=(h-x)/S,this.z=(f-c)/S,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gg extends dr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new ep(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Gg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class np extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kg extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let u=n[s+0],l=n[s+1],c=n[s+2],h=n[s+3];const f=o[r+0],p=o[r+1],m=o[r+2],x=o[r+3];if(a===0){t[e+0]=u,t[e+1]=l,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=m,t[e+3]=x;return}if(h!==x||u!==f||l!==p||c!==m){let d=1-a;const g=u*f+l*p+c*m+h*x,S=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,g*S);d=Math.sin(d*E)/A,a=Math.sin(a*E)/A}const w=a*S;if(u=u*d+f*w,l=l*d+p*w,c=c*d+m*w,h=h*d+x*w,d===1-a){const A=1/Math.sqrt(u*u+l*l+c*c+h*h);u*=A,l*=A,c*=A,h*=A}}t[e]=u,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],u=n[s+1],l=n[s+2],c=n[s+3],h=o[r],f=o[r+1],p=o[r+2],m=o[r+3];return t[e]=a*m+c*h+u*p-l*f,t[e+1]=u*m+c*f+l*h-a*p,t[e+2]=l*m+c*p+a*f-u*h,t[e+3]=c*m-a*h-u*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,u=Math.sin,l=a(n/2),c=a(s/2),h=a(o/2),f=u(n/2),p=u(s/2),m=u(o/2);switch(r){case"XYZ":this._x=f*c*h+l*p*m,this._y=l*p*h-f*c*m,this._z=l*c*m+f*p*h,this._w=l*c*h-f*p*m;break;case"YXZ":this._x=f*c*h+l*p*m,this._y=l*p*h-f*c*m,this._z=l*c*m-f*p*h,this._w=l*c*h+f*p*m;break;case"ZXY":this._x=f*c*h-l*p*m,this._y=l*p*h+f*c*m,this._z=l*c*m+f*p*h,this._w=l*c*h-f*p*m;break;case"ZYX":this._x=f*c*h-l*p*m,this._y=l*p*h+f*c*m,this._z=l*c*m-f*p*h,this._w=l*c*h+f*p*m;break;case"YZX":this._x=f*c*h+l*p*m,this._y=l*p*h+f*c*m,this._z=l*c*m-f*p*h,this._w=l*c*h-f*p*m;break;case"XZY":this._x=f*c*h-l*p*m,this._y=l*p*h-f*c*m,this._z=l*c*m+f*p*h,this._w=l*c*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],u=e[9],l=e[2],c=e[6],h=e[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-u)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(c-u)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(u+c)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(u+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,u=e._y,l=e._z,c=e._w;return this._x=n*c+r*a+s*l-o*u,this._y=s*c+r*u+o*a-n*l,this._z=o*c+r*l+n*u-s*a,this._w=r*c-n*a-s*u-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(u),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=o*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ed.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,u=t.w,l=2*(r*s-a*n),c=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+u*l+r*h-a*c,this.y=n+u*c+a*l-o*h,this.z=s+u*h+o*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,u=e.z;return this.x=s*u-o*a,this.y=o*r-n*u,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new z,ed=new gs;class Ks{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ai):ai.fromBufferAttribute(o,r),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),xa.subVectors(this.max,vr),so.subVectors(t.a,vr),oo.subVectors(t.b,vr),ro.subVectors(t.c,vr),Ji.subVectors(oo,so),Ki.subVectors(ro,oo),ys.subVectors(so,ro);let e=[0,-Ji.z,Ji.y,0,-Ki.z,Ki.y,0,-ys.z,ys.y,Ji.z,0,-Ji.x,Ki.z,0,-Ki.x,ys.z,0,-ys.x,-Ji.y,Ji.x,0,-Ki.y,Ki.x,0,-ys.y,ys.x,0];return!ml(e,so,oo,ro,xa)||(e=[1,0,0,0,1,0,0,0,1],!ml(e,so,oo,ro,xa))?!1:(va.crossVectors(Ji,Ki),e=[va.x,va.y,va.z],ml(e,so,oo,ro,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pi=[new z,new z,new z,new z,new z,new z,new z,new z],ai=new z,ga=new Ks,so=new z,oo=new z,ro=new z,Ji=new z,Ki=new z,ys=new z,vr=new z,xa=new z,va=new z,ws=new z;function ml(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ws.fromArray(i,o);const a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),u=t.dot(ws),l=e.dot(ws),c=n.dot(ws);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>a)return!1}return!0}const Hg=new Ks,Mr=new z,gl=new z;class Qs{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);const e=Mr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(gl)),this.expandByPoint(Mr.copy(t.center).sub(gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new z,xl=new z,Ma=new z,Qi=new z,vl=new z,_a=new z,Ml=new z;class gf{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xl.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(xl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ma),a=Qi.dot(this.direction),u=-Qi.dot(Ma),l=Qi.lengthSq(),c=Math.abs(1-r*r);let h,f,p,m;if(c>0)if(h=r*u-a,f=r*a-u,m=o*c,h>=0)if(f>=-m)if(f<=m){const x=1/c;h*=x,f*=x,p=h*(h+r*f+2*a)+f*(r*h+f+2*u)+l}else f=o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*u)+l;else f=-o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*u)+l;else f<=-m?(h=Math.max(0,-(-r*o+a)),f=h>0?-o:Math.min(Math.max(-o,-u),o),p=-h*h+f*(f+2*u)+l):f<=m?(h=0,f=Math.min(Math.max(-o,-u),o),p=f*(f+2*u)+l):(h=Math.max(0,-(r*o+a)),f=h>0?o:Math.min(Math.max(-o,-u),o),p=-h*h+f*(f+2*u)+l);else f=r>0?-o:o,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xl).addScaledVector(Ma,f),p}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);const n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,u=n+r;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,u;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),c>=0?(o=(t.min.y-f.y)*c,r=(t.max.y-f.y)*c):(o=(t.max.y-f.y)*c,r=(t.min.y-f.y)*c),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-f.z)*h,u=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,u=(t.min.z-f.z)*h),n>u||a>s)||((a>n||n!==n)&&(n=a),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,s,o){vl.subVectors(e,t),_a.subVectors(n,t),Ml.crossVectors(vl,_a);let r=this.direction.dot(Ml),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Qi.subVectors(this.origin,t);const u=a*this.direction.dot(_a.crossVectors(Qi,_a));if(u<0)return null;const l=a*this.direction.dot(vl.cross(Qi));if(l<0||u+l>r)return null;const c=-a*Qi.dot(Ml);return c<0?null:this.at(c/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,o,r,a,u,l,c,h,f,p,m,x,d){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,u,l,c,h,f,p,m,x,d)}set(t,e,n,s,o,r,a,u,l,c,h,f,p,m,x,d){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=u,g[2]=l,g[6]=c,g[10]=h,g[14]=f,g[3]=p,g[7]=m,g[11]=x,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ao.setFromMatrixColumn(t,0).length(),o=1/ao.setFromMatrixColumn(t,1).length(),r=1/ao.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),u=Math.cos(s),l=Math.sin(s),c=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const f=r*c,p=r*h,m=a*c,x=a*h;e[0]=u*c,e[4]=-u*h,e[8]=l,e[1]=p+m*l,e[5]=f-x*l,e[9]=-a*u,e[2]=x-f*l,e[6]=m+p*l,e[10]=r*u}else if(t.order==="YXZ"){const f=u*c,p=u*h,m=l*c,x=l*h;e[0]=f+x*a,e[4]=m*a-p,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=p*a-m,e[6]=x+f*a,e[10]=r*u}else if(t.order==="ZXY"){const f=u*c,p=u*h,m=l*c,x=l*h;e[0]=f-x*a,e[4]=-r*h,e[8]=m+p*a,e[1]=p+m*a,e[5]=r*c,e[9]=x-f*a,e[2]=-r*l,e[6]=a,e[10]=r*u}else if(t.order==="ZYX"){const f=r*c,p=r*h,m=a*c,x=a*h;e[0]=u*c,e[4]=m*l-p,e[8]=f*l+x,e[1]=u*h,e[5]=x*l+f,e[9]=p*l-m,e[2]=-l,e[6]=a*u,e[10]=r*u}else if(t.order==="YZX"){const f=r*u,p=r*l,m=a*u,x=a*l;e[0]=u*c,e[4]=x-f*h,e[8]=m*h+p,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=p*h+m,e[10]=f-x*h}else if(t.order==="XZY"){const f=r*u,p=r*l,m=a*u,x=a*l;e[0]=u*c,e[4]=-h,e[8]=l*c,e[1]=f*h+x,e[5]=r*c,e[9]=p*h-m,e[2]=m*h-p,e[6]=a*c,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vg,t,Wg)}lookAt(t,e,n){const s=this.elements;return Nn.subVectors(t,e),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),ts.crossVectors(n,Nn),ts.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),ts.crossVectors(n,Nn)),ts.normalize(),ya.crossVectors(Nn,ts),s[0]=ts.x,s[4]=ya.x,s[8]=Nn.x,s[1]=ts.y,s[5]=ya.y,s[9]=Nn.y,s[2]=ts.z,s[6]=ya.z,s[10]=Nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],u=n[8],l=n[12],c=n[1],h=n[5],f=n[9],p=n[13],m=n[2],x=n[6],d=n[10],g=n[14],S=n[3],_=n[7],w=n[11],A=n[15],E=s[0],T=s[4],b=s[8],y=s[12],M=s[1],R=s[5],L=s[9],D=s[13],F=s[2],V=s[6],k=s[10],O=s[14],B=s[3],it=s[7],ut=s[11],ft=s[15];return o[0]=r*E+a*M+u*F+l*B,o[4]=r*T+a*R+u*V+l*it,o[8]=r*b+a*L+u*k+l*ut,o[12]=r*y+a*D+u*O+l*ft,o[1]=c*E+h*M+f*F+p*B,o[5]=c*T+h*R+f*V+p*it,o[9]=c*b+h*L+f*k+p*ut,o[13]=c*y+h*D+f*O+p*ft,o[2]=m*E+x*M+d*F+g*B,o[6]=m*T+x*R+d*V+g*it,o[10]=m*b+x*L+d*k+g*ut,o[14]=m*y+x*D+d*O+g*ft,o[3]=S*E+_*M+w*F+A*B,o[7]=S*T+_*R+w*V+A*it,o[11]=S*b+_*L+w*k+A*ut,o[15]=S*y+_*D+w*O+A*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],u=t[9],l=t[13],c=t[2],h=t[6],f=t[10],p=t[14],m=t[3],x=t[7],d=t[11],g=t[15];return m*(+o*u*h-s*l*h-o*a*f+n*l*f+s*a*p-n*u*p)+x*(+e*u*p-e*l*f+o*r*f-s*r*p+s*l*c-o*u*c)+d*(+e*l*h-e*a*p-o*r*h+n*r*p+o*a*c-n*l*c)+g*(-s*a*c-e*u*h+e*a*f+s*r*h-n*r*f+n*u*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],u=t[6],l=t[7],c=t[8],h=t[9],f=t[10],p=t[11],m=t[12],x=t[13],d=t[14],g=t[15],S=h*d*l-x*f*l+x*u*p-a*d*p-h*u*g+a*f*g,_=m*f*l-c*d*l-m*u*p+r*d*p+c*u*g-r*f*g,w=c*x*l-m*h*l+m*a*p-r*x*p-c*a*g+r*h*g,A=m*h*u-c*x*u-m*a*f+r*x*f+c*a*d-r*h*d,E=e*S+n*_+s*w+o*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=S*T,t[1]=(x*f*o-h*d*o-x*s*p+n*d*p+h*s*g-n*f*g)*T,t[2]=(a*d*o-x*u*o+x*s*l-n*d*l-a*s*g+n*u*g)*T,t[3]=(h*u*o-a*f*o-h*s*l+n*f*l+a*s*p-n*u*p)*T,t[4]=_*T,t[5]=(c*d*o-m*f*o+m*s*p-e*d*p-c*s*g+e*f*g)*T,t[6]=(m*u*o-r*d*o-m*s*l+e*d*l+r*s*g-e*u*g)*T,t[7]=(r*f*o-c*u*o+c*s*l-e*f*l-r*s*p+e*u*p)*T,t[8]=w*T,t[9]=(m*h*o-c*x*o-m*n*p+e*x*p+c*n*g-e*h*g)*T,t[10]=(r*x*o-m*a*o+m*n*l-e*x*l-r*n*g+e*a*g)*T,t[11]=(c*a*o-r*h*o-c*n*l+e*h*l+r*n*p-e*a*p)*T,t[12]=A*T,t[13]=(c*x*s-m*h*s+m*n*f-e*x*f-c*n*d+e*h*d)*T,t[14]=(m*a*s-r*x*s-m*n*u+e*x*u+r*n*d-e*a*d)*T,t[15]=(r*h*s-c*a*s+c*n*u-e*h*u-r*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,u=t.z,l=o*r,c=o*a;return this.set(l*r+n,l*a-s*u,l*u+s*a,0,l*a+s*u,c*a+n,c*u-s*r,0,l*u-s*a,c*u+s*r,o*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,u=e._w,l=o+o,c=r+r,h=a+a,f=o*l,p=o*c,m=o*h,x=r*c,d=r*h,g=a*h,S=u*l,_=u*c,w=u*h,A=n.x,E=n.y,T=n.z;return s[0]=(1-(x+g))*A,s[1]=(p+w)*A,s[2]=(m-_)*A,s[3]=0,s[4]=(p-w)*E,s[5]=(1-(f+g))*E,s[6]=(d+S)*E,s[7]=0,s[8]=(m+_)*T,s[9]=(d-S)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=ao.set(s[0],s[1],s[2]).length();const r=ao.set(s[4],s[5],s[6]).length(),a=ao.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ci.copy(this);const l=1/o,c=1/r,h=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=c,ci.elements[5]*=c,ci.elements[6]*=c,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,e.setFromRotationMatrix(ci),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=ki){const u=this.elements,l=2*o/(e-t),c=2*o/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,m;if(a===ki)p=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Cc)p=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=l,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=c,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=m,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=ki){const u=this.elements,l=1/(e-t),c=1/(n-s),h=1/(r-o),f=(e+t)*l,p=(n+s)*c;let m,x;if(a===ki)m=(r+o)*h,x=-2*h;else if(a===Cc)m=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*l,u[4]=0,u[8]=0,u[12]=-f,u[1]=0,u[5]=2*c,u[9]=0,u[13]=-p,u[2]=0,u[6]=0,u[10]=x,u[14]=-m,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ao=new z,ci=new me,Vg=new z(0,0,0),Wg=new z(1,1,1),ts=new z,ya=new z,Nn=new z,nd=new me,id=new gs;class Ei{constructor(t=0,e=0,n=0,s=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],u=s[1],l=s[5],c=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return id.setFromEuler(this),this.setFromQuaternion(id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xg=0;const sd=new z,co=new gs,Li=new me,wa=new z,_r=new z,qg=new z,Yg=new gs,od=new z(1,0,0),rd=new z(0,1,0),ad=new z(0,0,1),cd={type:"added"},Zg={type:"removed"},lo={type:"childadded",child:null},_l={type:"childremoved",child:null};class fe extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new z,e=new Ei,n=new gs,s=new z(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new qt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return co.setFromAxisAngle(t,e),this.quaternion.multiply(co),this}rotateOnWorldAxis(t,e){return co.setFromAxisAngle(t,e),this.quaternion.premultiply(co),this}rotateX(t){return this.rotateOnAxis(od,t)}rotateY(t){return this.rotateOnAxis(rd,t)}rotateZ(t){return this.rotateOnAxis(ad,t)}translateOnAxis(t,e){return sd.copy(t).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(od,t)}translateY(t){return this.translateOnAxis(rd,t)}translateZ(t){return this.translateOnAxis(ad,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(_r,wa,this.up):Li.lookAt(wa,_r,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),co.setFromRotationMatrix(Li),this.quaternion.premultiply(co.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cd),lo.child=t,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zg),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cd),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,qg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Yg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const h=u[l];o(t.shapes,h)}else o(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(o(t.materials,this.material[u]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];s.animations.push(o(t.animations,u))}}if(e){const a=r(t.geometries),u=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),f=r(t.skeletons),p=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const u=[];for(const l in a){const c=a[l];delete c.metadata,u.push(c)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new z(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new z,Di=new z,yl=new z,Ui=new z,uo=new z,ho=new z,ld=new z,wl=new z,Sl=new z,bl=new z,Tl=new _e,El=new _e,Al=new _e;class ni{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),li.subVectors(t,e),s.cross(li);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){li.subVectors(s,e),Di.subVectors(n,e),yl.subVectors(t,e);const r=li.dot(li),a=li.dot(Di),u=li.dot(yl),l=Di.dot(Di),c=Di.dot(yl),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const f=1/h,p=(l*u-a*c)*f,m=(r*c-a*u)*f;return o.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,n,s,o,r,a,u){return this.getBarycoord(t,e,n,s,Ui)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,Ui.x),u.addScaledVector(r,Ui.y),u.addScaledVector(a,Ui.z),u)}static getInterpolatedAttribute(t,e,n,s,o,r){return Tl.setScalar(0),El.setScalar(0),Al.setScalar(0),Tl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,n),Al.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Tl,o.x),r.addScaledVector(El,o.y),r.addScaledVector(Al,o.z),r}static isFrontFacing(t,e,n,s){return li.subVectors(n,e),Di.subVectors(t,e),li.cross(Di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),li.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return ni.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;uo.subVectors(s,n),ho.subVectors(o,n),wl.subVectors(t,n);const u=uo.dot(wl),l=ho.dot(wl);if(u<=0&&l<=0)return e.copy(n);Sl.subVectors(t,s);const c=uo.dot(Sl),h=ho.dot(Sl);if(c>=0&&h<=c)return e.copy(s);const f=u*h-c*l;if(f<=0&&u>=0&&c<=0)return r=u/(u-c),e.copy(n).addScaledVector(uo,r);bl.subVectors(t,o);const p=uo.dot(bl),m=ho.dot(bl);if(m>=0&&p<=m)return e.copy(o);const x=p*l-u*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ho,a);const d=c*m-p*h;if(d<=0&&h-c>=0&&p-m>=0)return ld.subVectors(o,s),a=(h-c)/(h-c+(p-m)),e.copy(s).addScaledVector(ld,a);const g=1/(d+x+f);return r=x*g,a=f*g,e.copy(n).addScaledVector(uo,r).addScaledVector(ho,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Rl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Ig(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Rl(r,o,t+1/3),this.g=Rl(r,o,t),this.b=Rl(r,o,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=An){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const n=sp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=ko(t.r),this.g=ko(t.g),this.b=ko(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return he.fromWorkingColorSpace(tn.copy(this),t),Math.round(Kt(tn.r*255,0,255))*65536+Math.round(Kt(tn.g*255,0,255))*256+Math.round(Kt(tn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,s=tn.g,o=tn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let u,l;const c=(a+r)/2;if(a===r)u=0,l=0;else{const h=r-a;switch(l=c<=.5?h/(r+a):h/(2-r-a),r){case n:u=(s-o)/h+(s<o?6:0);break;case s:u=(o-n)/h+2;break;case o:u=(n-s)/h+4;break}u/=6}return t.h=u,t.s=l,t.l=c,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=An){he.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,s=tn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(Sa);const n=hl(es.h,Sa.h,e),s=hl(es.s,Sa.s,e),o=hl(es.l,Sa.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new rt;rt.NAMES=sp;let $g=0;class vs extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Bo,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=yu,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(n.blending=this.blending),this.side!==xs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_u&&(n.blendSrc=this.blendSrc),this.blendDst!==yu&&(n.blendDst=this.blendDst),this.blendEquation!==Os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(n.stencilFail=this.stencilFail),this.stencilZFail!==no&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const u=o[a];delete u.metadata,r.push(u)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Z extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=G0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new z,ba=new pt;class Fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sh,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ba.fromBufferAttribute(this,e),ba.applyMatrix3(t),this.setXY(e,ba.x,ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),o=Me(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sh&&(t.usage=this.usage),t}}class op extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rp extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jg=0;const jn=new me,Cl=new fe,fo=new z,zn=new Ks,yr=new Ks,qe=new z;class be extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tp(t)?rp:op)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new qt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return Cl.lookAt(t),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];zn.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(zn.min,yr.min),zn.expandByPoint(qe),qe.addVectors(zn.max,yr.max),zn.expandByPoint(qe)):(zn.expandByPoint(yr.min),zn.expandByPoint(yr.max))}zn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)qe.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],u=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)qe.fromBufferAttribute(a,l),u&&(fo.fromBufferAttribute(t,l),qe.add(fo)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],u=[];for(let b=0;b<n.count;b++)a[b]=new z,u[b]=new z;const l=new z,c=new z,h=new z,f=new pt,p=new pt,m=new pt,x=new z,d=new z;function g(b,y,M){l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(o,b),p.fromBufferAttribute(o,y),m.fromBufferAttribute(o,M),c.sub(l),h.sub(l),p.sub(f),m.sub(f);const R=1/(p.x*m.y-m.x*p.y);isFinite(R)&&(x.copy(c).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(R),d.copy(h).multiplyScalar(p.x).addScaledVector(c,-m.x).multiplyScalar(R),a[b].add(x),a[y].add(x),a[M].add(x),u[b].add(d),u[y].add(d),u[M].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let b=0,y=S.length;b<y;++b){const M=S[b],R=M.start,L=M.count;for(let D=R,F=R+L;D<F;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const _=new z,w=new z,A=new z,E=new z;function T(b){A.fromBufferAttribute(s,b),E.copy(A);const y=a[b];_.copy(y),_.sub(A.multiplyScalar(A.dot(y))).normalize(),w.crossVectors(E,y);const R=w.dot(u[b])<0?-1:1;r.setXYZW(b,_.x,_.y,_.z,R)}for(let b=0,y=S.length;b<y;++b){const M=S[b],R=M.start,L=M.count;for(let D=R,F=R+L;D<F;D+=3)T(t.getX(D+0)),T(t.getX(D+1)),T(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new z,o=new z,r=new z,a=new z,u=new z,l=new z,c=new z,h=new z;if(t)for(let f=0,p=t.count;f<p;f+=3){const m=t.getX(f+0),x=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,d),c.subVectors(r,o),h.subVectors(s,o),c.cross(h),a.fromBufferAttribute(n,m),u.fromBufferAttribute(n,x),l.fromBufferAttribute(n,d),a.add(c),u.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,u.x,u.y,u.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),c.subVectors(r,o),h.subVectors(s,o),c.cross(h),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,u){const l=a.array,c=a.itemSize,h=a.normalized,f=new l.constructor(u.length*c);let p=0,m=0;for(let x=0,d=u.length;x<d;x++){a.isInterleavedBufferAttribute?p=u[x]*a.data.stride+a.offset:p=u[x]*c;for(let g=0;g<c;g++)f[m++]=l[p++]}return new Fe(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const u=s[a],l=t(u,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const u=[],l=o[a];for(let c=0,h=l.length;c<h;c++){const f=l[c],p=t(f,n);u.push(p)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,u=r.length;a<u;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(t[l]=u[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const l=n[u];t.data.attributes[u]=l.toJSON(t.data)}const s={};let o=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];c.push(p.toJSON(t.data))}c.length>0&&(s[u]=c,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(e))}const o=t.morphAttributes;for(const l in o){const c=[],h=o[l];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,c=r.length;l<c;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ud=new me,Ss=new gf,Ta=new Qs,hd=new z,Ea=new z,Aa=new z,Ra=new z,Pl=new z,Ca=new z,fd=new z,Pa=new z;class C extends fe{constructor(t=new be,e=new Z){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Ca.set(0,0,0);for(let u=0,l=o.length;u<l;u++){const c=a[u],h=o[u];c!==0&&(Pl.fromBufferAttribute(h,t),r?Ca.addScaledVector(Pl,c):Ca.addScaledVector(Pl.sub(e),c))}e.add(Ca)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(o),Ss.copy(t.ray).recast(t.near),!(Ta.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Ta,hd)===null||Ss.origin.distanceToSquared(hd)>(t.far-t.near)**2))&&(ud.copy(o).invert(),Ss.copy(t.ray).applyMatrix4(ud),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,u=o.attributes.position,l=o.attributes.uv,c=o.attributes.uv1,h=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const d=f[m],g=r[d.materialIndex],S=Math.max(d.start,p.start),_=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let w=S,A=_;w<A;w+=3){const E=a.getX(w),T=a.getX(w+1),b=a.getX(w+2);s=Ia(this,g,t,n,l,c,h,E,T,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let d=m,g=x;d<g;d+=3){const S=a.getX(d),_=a.getX(d+1),w=a.getX(d+2);s=Ia(this,r,t,n,l,c,h,S,_,w),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const d=f[m],g=r[d.materialIndex],S=Math.max(d.start,p.start),_=Math.min(u.count,Math.min(d.start+d.count,p.start+p.count));for(let w=S,A=_;w<A;w+=3){const E=w,T=w+1,b=w+2;s=Ia(this,g,t,n,l,c,h,E,T,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(u.count,p.start+p.count);for(let d=m,g=x;d<g;d+=3){const S=d,_=d+1,w=d+2;s=Ia(this,r,t,n,l,c,h,S,_,w),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function Jg(i,t,e,n,s,o,r,a){let u;if(t.side===rn?u=n.intersectTriangle(r,o,s,!0,a):u=n.intersectTriangle(s,o,r,t.side===xs,a),u===null)return null;Pa.copy(a),Pa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Pa);return l<e.near||l>e.far?null:{distance:l,point:Pa.clone(),object:i}}function Ia(i,t,e,n,s,o,r,a,u,l){i.getVertexPosition(a,Ea),i.getVertexPosition(u,Aa),i.getVertexPosition(l,Ra);const c=Jg(i,t,e,n,Ea,Aa,Ra,fd);if(c){const h=new z;ni.getBarycoord(fd,Ea,Aa,Ra,h),s&&(c.uv=ni.getInterpolatedAttribute(s,a,u,l,h,new pt)),o&&(c.uv1=ni.getInterpolatedAttribute(o,a,u,l,h,new pt)),r&&(c.normal=ni.getInterpolatedAttribute(r,a,u,l,h,new z),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:u,c:l,normal:new z,materialIndex:0};ni.getNormal(Ea,Aa,Ra,f.normal),c.face=f,c.barycoord=h}return c}class aa extends be{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const u=[],l=[],c=[],h=[];let f=0,p=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(u),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(h,2));function m(x,d,g,S,_,w,A,E,T,b,y){const M=w/T,R=A/b,L=w/2,D=A/2,F=E/2,V=T+1,k=b+1;let O=0,B=0;const it=new z;for(let ut=0;ut<k;ut++){const ft=ut*R-D;for(let Pt=0;Pt<V;Pt++){const Wt=Pt*M-L;it[x]=Wt*S,it[d]=ft*_,it[g]=F,l.push(it.x,it.y,it.z),it[x]=0,it[d]=0,it[g]=E>0?1:-1,c.push(it.x,it.y,it.z),h.push(Pt/T),h.push(1-ut/b),O+=1}}for(let ut=0;ut<b;ut++)for(let ft=0;ft<T;ft++){const Pt=f+ft+V*ut,Wt=f+ft+V*(ut+1),et=f+(ft+1)+V*(ut+1),lt=f+(ft+1)+V*ut;u.push(Pt,Wt,lt),u.push(Wt,et,lt),B+=6}a.addGroup(p,B,y),p+=B,f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){const t={};for(let e=0;e<i.length;e++){const n=or(i[e]);for(const s in n)t[s]=n[s]}return t}function Kg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ap(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Ic={clone:or,merge:fn};var Qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qg,this.fragmentShader=tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=Kg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cp extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new z,dd=new pt,pd=new pt;class On extends cp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oh*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,e){return this.getViewBounds(t,dd,pd),e.subVectors(pd,dd)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ul*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const u=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/u,e-=r.offsetY*n/l,s*=r.width/u,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const po=-90,mo=1;class ex extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new On(po,mo,t,e);s.layers=this.layers,this.add(s);const o=new On(po,mo,t,e);o.layers=this.layers,this.add(o);const r=new On(po,mo,t,e);r.layers=this.layers,this.add(r);const a=new On(po,mo,t,e);a.layers=this.layers,this.add(a);const u=new On(po,mo,t,e);u.layers=this.layers,this.add(u);const l=new On(po,mo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,u]=e;for(const l of e)this.remove(l);if(t===ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Cc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,u,l,c]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,u),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(h,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class lp extends an{constructor(t,e,n,s,o,r,a,u,l,c){t=t!==void 0?t:[],e=e!==void 0?e:Qo,super(t,e,n,s,o,r,a,u,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nx extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new aa(5,5,5),o=new Pn({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Vi});o.uniforms.tEquirect.value=e;const r=new C(s,o),a=e.minFilter;return e.minFilter===ks&&(e.minFilter=Si),new ex(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class xf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(t),this.density=e}clone(){return new xf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ix extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class sx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new z;class Lc{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),o=Me(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class up extends vs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let go;const wr=new z,xo=new z,vo=new z,Mo=new pt,Sr=new pt,hp=new me,La=new z,br=new z,Da=new z,md=new pt,Il=new pt,gd=new pt;class ox extends fe{constructor(t=new up){if(super(),this.isSprite=!0,this.type="Sprite",go===void 0){go=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sx(e,5);go.setIndex([0,1,2,0,2,3]),go.setAttribute("position",new Lc(n,3,0,!1)),go.setAttribute("uv",new Lc(n,2,3,!1))}this.geometry=go,this.material=t,this.center=new pt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xo.setFromMatrixScale(this.matrixWorld),hp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xo.multiplyScalar(-vo.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;Ua(La.set(-.5,-.5,0),vo,r,xo,s,o),Ua(br.set(.5,-.5,0),vo,r,xo,s,o),Ua(Da.set(.5,.5,0),vo,r,xo,s,o),md.set(0,0),Il.set(1,0),gd.set(1,1);let a=t.ray.intersectTriangle(La,br,Da,!1,wr);if(a===null&&(Ua(br.set(-.5,.5,0),vo,r,xo,s,o),Il.set(0,1),a=t.ray.intersectTriangle(La,Da,br,!1,wr),a===null))return;const u=t.ray.origin.distanceTo(wr);u<t.near||u>t.far||e.push({distance:u,point:wr.clone(),uv:ni.getInterpolation(wr,La,br,Da,md,Il,gd,new pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ua(i,t,e,n,s,o){Mo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Sr.x=o*Mo.x-s*Mo.y,Sr.y=s*Mo.x+o*Mo.y):Sr.copy(Mo),i.copy(t),i.x+=Sr.x,i.y+=Sr.y,i.applyMatrix4(hp)}class rx extends an{constructor(t=null,e=1,n=1,s,o,r,a,u,l=Wn,c=Wn,h,f){super(null,r,a,u,l,c,s,o,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _o=new me,xd=new me,Na=[],vd=new Ks,ax=new me,Tr=new C,Er=new Qs;class ii extends C{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ax)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ks),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_o),vd.copy(t.boundingBox).applyMatrix4(_o),this.boundingBox.union(vd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_o),Er.copy(t.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,_o),xd.multiplyMatrices(n,_o),Tr.matrixWorld=xd,Tr.raycast(t,Na);for(let r=0,a=Na.length;r<a;r++){const u=Na[r];u.instanceId=o,u.object=this,e.push(u)}Na.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new rx(new Float32Array(s*this.count),s,this.count,ff,bi));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,u=s*t;o[u]=a,o.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Ll=new z,cx=new z,lx=new qt;class Ps{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ll.subVectors(n,e).cross(cx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lx.getNormalMatrix(t),s=this.coplanarPoint(Ll).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Qs,za=new z;class vf{constructor(t=new Ps,e=new Ps,n=new Ps,s=new Ps,o=new Ps,r=new Ps){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ki){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],u=s[3],l=s[4],c=s[5],h=s[6],f=s[7],p=s[8],m=s[9],x=s[10],d=s[11],g=s[12],S=s[13],_=s[14],w=s[15];if(n[0].setComponents(u-o,f-l,d-p,w-g).normalize(),n[1].setComponents(u+o,f+l,d+p,w+g).normalize(),n[2].setComponents(u+r,f+c,d+m,w+S).normalize(),n[3].setComponents(u-r,f-c,d-m,w-S).normalize(),n[4].setComponents(u-a,f-h,d-x,w-_).normalize(),e===ki)n[5].setComponents(u+a,f+h,d+x,w+_).normalize();else if(e===Cc)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(za.x=s.normal.x>0?t.max.x:t.min.x,za.y=s.normal.y>0?t.max.y:t.min.y,za.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mf extends vs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dc=new z,Uc=new z,Md=new me,Ar=new gf,Fa=new Qs,Dl=new z,_d=new z;class fp extends fe{constructor(t=new be,e=new Mf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Dc.fromBufferAttribute(e,s-1),Uc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Dc.distanceTo(Uc);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=o,t.ray.intersectsSphere(Fa)===!1)return;Md.copy(s).invert(),Ar.copy(t.ray).applyMatrix4(Md);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,l=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let x=p,d=m-1;x<d;x+=l){const g=c.getX(x),S=c.getX(x+1),_=Oa(this,t,Ar,u,g,S);_&&e.push(_)}if(this.isLineLoop){const x=c.getX(m-1),d=c.getX(p),g=Oa(this,t,Ar,u,x,d);g&&e.push(g)}}else{const p=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let x=p,d=m-1;x<d;x+=l){const g=Oa(this,t,Ar,u,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=Oa(this,t,Ar,u,m-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Oa(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Dc.fromBufferAttribute(r,s),Uc.fromBufferAttribute(r,o),e.distanceSqToSegment(Dc,Uc,Dl,_d)>n)return;Dl.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Dl);if(!(u<t.near||u>t.far))return{distance:u,point:_d.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const yd=new z,wd=new z;class ux extends fp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)yd.fromBufferAttribute(e,s),wd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yd.distanceTo(wd);t.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _f extends vs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sd=new me,rh=new gf,Ba=new Qs,Ga=new z;class dp extends fe{constructor(t=new be,e=new _f){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=o,t.ray.intersectsSphere(Ba)===!1)return;Sd.copy(s).invert(),rh.copy(t.ray).applyMatrix4(Sd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let m=f,x=p;m<x;m++){const d=l.getX(m);Ga.fromBufferAttribute(h,d),bd(Ga,d,u,s,t,e,this)}}else{const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let m=f,x=p;m<x;m++)Ga.fromBufferAttribute(h,m),bd(Ga,m,u,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function bd(i,t,e,n,s,o,r){const a=rh.distanceSqToPoint(i);if(a<e){const u=new z;rh.closestPointToPoint(i,u),u.applyMatrix4(n);const l=s.ray.origin.distanceTo(u);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class te extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ca extends an{constructor(t,e,n,s,o,r,a,u,l){super(t,e,n,s,o,r,a,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pp extends an{constructor(t,e,n,s,o,r,a,u,l,c=Go){if(c!==Go&&c!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Go&&(n=Zs),n===void 0&&c===ir&&(n=nr),super(null,s,o,r,a,u,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Wn,this.minFilter=u!==void 0?u:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,u=o-1,l;for(;a<=u;)if(s=Math.floor(a+(u-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)u=s-1;else{u=s;break}if(s=u,n[s]===r)return s/(o-1);const c=n[s],f=n[s+1]-c,p=(r-c)/f;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),u=e||(r.isVector2?new pt:new z);return u.copy(a).sub(r).normalize(),u}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,s=[],o=[],r=[],a=new z,u=new me;for(let p=0;p<=t;p++){const m=p/t;s[p]=this.getTangentAt(m,new z)}o[0]=new z,r[0]=new z;let l=Number.MAX_VALUE;const c=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Kt(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(u.makeRotationAxis(a,m))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(Kt(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let m=1;m<=t;m++)o[m].applyMatrix4(u.makeRotationAxis(s[m],p*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yf extends Ri{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=u}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let u=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=u-this.aX,p=l-this.aY;u=f*c-p*h+this.aX,l=f*h+p*c+this.aY}return n.set(u,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hx extends yf{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function wf(){let i=0,t=0,e=0,n=0;function s(o,r,a,u){i=o,t=a,e=-3*o+3*r-2*a-u,n=2*o-2*r+a+u}return{initCatmullRom:function(o,r,a,u,l){s(r,a,l*(a-o),l*(u-r))},initNonuniformCatmullRom:function(o,r,a,u,l,c,h){let f=(r-o)/l-(a-o)/(l+c)+(a-r)/c,p=(a-r)/c-(u-r)/(c+h)+(u-a)/h;f*=c,p*=c,s(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const ka=new z,Ul=new wf,Nl=new wf,zl=new wf;class to extends Ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),u=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:u===0&&a===o-1&&(a=o-2,u=1);let l,c;this.closed||a>0?l=s[(a-1)%o]:(ka.subVectors(s[0],s[1]).add(s[0]),l=ka);const h=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?c=s[(a+2)%o]:(ka.subVectors(s[o-1],s[o-2]).add(s[o-1]),c=ka),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(c),p);x<1e-4&&(x=1),m<1e-4&&(m=x),d<1e-4&&(d=x),Ul.initNonuniformCatmullRom(l.x,h.x,f.x,c.x,m,x,d),Nl.initNonuniformCatmullRom(l.y,h.y,f.y,c.y,m,x,d),zl.initNonuniformCatmullRom(l.z,h.z,f.z,c.z,m,x,d)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(l.x,h.x,f.x,c.x,this.tension),Nl.initCatmullRom(l.y,h.y,f.y,c.y,this.tension),zl.initCatmullRom(l.z,h.z,f.z,c.z,this.tension));return n.set(Ul.calc(u),Nl.calc(u),zl.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Td(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,u=i*a;return(2*e-2*n+o+r)*u+(-3*e+3*n-2*o-r)*a+o*i+e}function fx(i,t){const e=1-i;return e*e*t}function dx(i,t){return 2*(1-i)*i*t}function px(i,t){return i*i*t}function Hr(i,t,e,n){return fx(i,t)+dx(i,e)+px(i,n)}function mx(i,t){const e=1-i;return e*e*e*t}function gx(i,t){const e=1-i;return 3*e*e*i*t}function xx(i,t){return 3*(1-i)*i*i*t}function vx(i,t){return i*i*i*t}function Vr(i,t,e,n,s){return mx(i,t)+gx(i,e)+xx(i,n)+vx(i,s)}class mp extends Ri{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Vr(t,s.x,o.x,r.x,a.x),Vr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mx extends Ri{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Vr(t,s.x,o.x,r.x,a.x),Vr(t,s.y,o.y,r.y,a.y),Vr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gp extends Ri{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sf extends Ri{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xp extends Ri{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Hr(t,s.x,o.x,r.x),Hr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vp extends Ri{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Hr(t,s.x,o.x,r.x),Hr(t,s.y,o.y,r.y),Hr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mp extends Ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,u=s[r===0?r:r-1],l=s[r],c=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(Td(a,u.x,l.x,c.x,h.x),Td(a,u.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var ah=Object.freeze({__proto__:null,ArcCurve:hx,CatmullRomCurve3:to,CubicBezierCurve:mp,CubicBezierCurve3:Mx,EllipseCurve:yf,LineCurve:gp,LineCurve3:Sf,QuadraticBezierCurve:xp,QuadraticBezierCurve3:vp,SplineCurve:Mp});class _x extends Ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ah[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],u=a.getLength(),l=u===0?0:1-r/u;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,u=r.getPoints(a);for(let l=0;l<u.length;l++){const c=u[l];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ah[s.type]().fromJSON(s))}return this}}class Nc extends _x{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gp(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new xp(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new mp(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+a,e+u,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,u){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,s,o,r,a,u),this}absellipse(t,e,n,s,o,r,a,u){const l=new yf(t,e,n,s,o,r,a,u);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Be extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],u=[],l=new z,c=new pt;r.push(0,0,0),a.push(0,0,1),u.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[f]/t+1)/2,c.y=(r[f+1]/t+1)/2,u.push(c.x,c.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gt extends be{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:u};const l=this;s=Math.floor(s),o=Math.floor(o);const c=[],h=[],f=[],p=[];let m=0;const x=[],d=n/2;let g=0;S(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(p,2));function S(){const w=new z,A=new z;let E=0;const T=(e-t)/n;for(let b=0;b<=o;b++){const y=[],M=b/o,R=M*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,F=D*u+a,V=Math.sin(F),k=Math.cos(F);A.x=R*V,A.y=-M*n+d,A.z=R*k,h.push(A.x,A.y,A.z),w.set(V,T,k).normalize(),f.push(w.x,w.y,w.z),p.push(D,1-M),y.push(m++)}x.push(y)}for(let b=0;b<s;b++)for(let y=0;y<o;y++){const M=x[y][b],R=x[y+1][b],L=x[y+1][b+1],D=x[y][b+1];(t>0||y!==0)&&(c.push(M,R,D),E+=3),(e>0||y!==o-1)&&(c.push(R,L,D),E+=3)}l.addGroup(g,E,0),g+=E}function _(w){const A=m,E=new pt,T=new z;let b=0;const y=w===!0?t:e,M=w===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,d*M,0),f.push(0,M,0),p.push(.5,.5),m++;const R=m;for(let L=0;L<=s;L++){const F=L/s*u+a,V=Math.cos(F),k=Math.sin(F);T.x=y*k,T.y=d*M,T.z=y*V,h.push(T.x,T.y,T.z),f.push(0,M,0),E.x=V*.5+.5,E.y=k*.5*M+.5,p.push(E.x,E.y),m++}for(let L=0;L<s;L++){const D=A+L,F=R+L;w===!0?c.push(F,F+1,D):c.push(F+1,F,D),b+=3}l.addGroup(g,b,w===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rn extends gt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Rn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class la extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),c(),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(o.slice(),3)),this.setAttribute("uv",new Vt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const _=new z,w=new z,A=new z;for(let E=0;E<e.length;E+=3)p(e[E+0],_),p(e[E+1],w),p(e[E+2],A),u(_,w,A,S)}function u(S,_,w,A){const E=A+1,T=[];for(let b=0;b<=E;b++){T[b]=[];const y=S.clone().lerp(w,b/E),M=_.clone().lerp(w,b/E),R=E-b;for(let L=0;L<=R;L++)L===0&&b===E?T[b][L]=y:T[b][L]=y.clone().lerp(M,L/R)}for(let b=0;b<E;b++)for(let y=0;y<2*(E-b)-1;y++){const M=Math.floor(y/2);y%2===0?(f(T[b][M+1]),f(T[b+1][M]),f(T[b][M])):(f(T[b][M+1]),f(T[b+1][M+1]),f(T[b+1][M]))}}function l(S){const _=new z;for(let w=0;w<o.length;w+=3)_.x=o[w+0],_.y=o[w+1],_.z=o[w+2],_.normalize().multiplyScalar(S),o[w+0]=_.x,o[w+1]=_.y,o[w+2]=_.z}function c(){const S=new z;for(let _=0;_<o.length;_+=3){S.x=o[_+0],S.y=o[_+1],S.z=o[_+2];const w=d(S)/2/Math.PI+.5,A=g(S)/Math.PI+.5;r.push(w,1-A)}m(),h()}function h(){for(let S=0;S<r.length;S+=6){const _=r[S+0],w=r[S+2],A=r[S+4],E=Math.max(_,w,A),T=Math.min(_,w,A);E>.9&&T<.1&&(_<.2&&(r[S+0]+=1),w<.2&&(r[S+2]+=1),A<.2&&(r[S+4]+=1))}}function f(S){o.push(S.x,S.y,S.z)}function p(S,_){const w=S*3;_.x=t[w+0],_.y=t[w+1],_.z=t[w+2]}function m(){const S=new z,_=new z,w=new z,A=new z,E=new pt,T=new pt,b=new pt;for(let y=0,M=0;y<o.length;y+=9,M+=6){S.set(o[y+0],o[y+1],o[y+2]),_.set(o[y+3],o[y+4],o[y+5]),w.set(o[y+6],o[y+7],o[y+8]),E.set(r[M+0],r[M+1]),T.set(r[M+2],r[M+3]),b.set(r[M+4],r[M+5]),A.copy(S).add(_).add(w).divideScalar(3);const R=d(A);x(E,M+0,S,R),x(T,M+2,_,R),x(b,M+4,w,R)}}function x(S,_,w,A){A<0&&S.x===1&&(r[_]=S.x-1),w.x===0&&w.z===0&&(r[_]=A/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function g(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.vertices,t.indices,t.radius,t.details)}}class bf extends la{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bf(t.radius,t.detail)}}class zc extends Nc{constructor(t){super(t),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Nc().fromJSON(s))}return this}}const yx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=_p(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,u,l,c,h,f,p;if(n&&(o=Ex(i,t,o,e)),i.length>80*e){a=l=i[0],u=c=i[1];for(let m=e;m<s;m+=e)h=i[m],f=i[m+1],h<a&&(a=h),f<u&&(u=f),h>l&&(l=h),f>c&&(c=f);p=Math.max(l-a,c-u),p=p!==0?32767/p:0}return Kr(o,r,e,a,u,p,0),r}};function _p(i,t,e,n,s){let o,r;if(s===Fx(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Ed(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Ed(o,i[o],i[o+1],r);return r&&tl(r,r.next)&&(ta(r),r=r.next),r}function $s(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(tl(e,e.next)||Le(e.prev,e,e.next)===0)){if(ta(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Kr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Ix(i,n,s,o);let a=i,u,l;for(;i.prev!==i.next;){if(u=i.prev,l=i.next,o?Sx(i,n,s,o):wx(i)){t.push(u.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ta(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=bx($s(i),t,e),Kr(i,t,e,n,s,o,2)):r===2&&Tx(i,t,e,n,s,o):Kr($s(i),t,e,n,s,o,1);break}}}function wx(i){const t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,u=e.y,l=n.y,c=s<o?s<r?s:r:o<r?o:r,h=a<u?a<l?a:l:u<l?u:l,f=s>o?s>r?s:r:o>r?o:r,p=a>u?a>l?a:l:u>l?u:l;let m=n.next;for(;m!==t;){if(m.x>=c&&m.x<=f&&m.y>=h&&m.y<=p&&Lo(s,a,o,u,r,l,m.x,m.y)&&Le(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Sx(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Le(s,o,r)>=0)return!1;const a=s.x,u=o.x,l=r.x,c=s.y,h=o.y,f=r.y,p=a<u?a<l?a:l:u<l?u:l,m=c<h?c<f?c:f:h<f?h:f,x=a>u?a>l?a:l:u>l?u:l,d=c>h?c>f?c:f:h>f?h:f,g=ch(p,m,t,e,n),S=ch(x,d,t,e,n);let _=i.prevZ,w=i.nextZ;for(;_&&_.z>=g&&w&&w.z<=S;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=d&&_!==s&&_!==r&&Lo(a,c,u,h,l,f,_.x,_.y)&&Le(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=p&&w.x<=x&&w.y>=m&&w.y<=d&&w!==s&&w!==r&&Lo(a,c,u,h,l,f,w.x,w.y)&&Le(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=d&&_!==s&&_!==r&&Lo(a,c,u,h,l,f,_.x,_.y)&&Le(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=S;){if(w.x>=p&&w.x<=x&&w.y>=m&&w.y<=d&&w!==s&&w!==r&&Lo(a,c,u,h,l,f,w.x,w.y)&&Le(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function bx(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!tl(s,o)&&yp(s,n,n.next,o)&&Qr(s,o)&&Qr(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),ta(n),ta(n.next),n=i=o),n=n.next}while(n!==i);return $s(n)}function Tx(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Ux(r,a)){let u=wp(r,a);r=$s(r,r.next),u=$s(u,u.next),Kr(r,t,e,n,s,o,0),Kr(u,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Ex(i,t,e,n){const s=[];let o,r,a,u,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,u=o<r-1?t[o+1]*n:i.length,l=_p(i,a,u,n,!1),l===l.next&&(l.steiner=!0),s.push(Dx(l));for(s.sort(Ax),o=0;o<s.length;o++)e=Rx(s[o],e);return e}function Ax(i,t){return i.x-t.x}function Rx(i,t){const e=Cx(i,t);if(!e)return t;const n=wp(e,i);return $s(n,n.next),$s(e,e.next)}function Cx(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,u=s.x,l=s.y;let c=1/0,h;e=s;do o>=e.x&&e.x>=u&&o!==e.x&&Lo(r<l?o:n,r,u,l,r<l?n:o,r,e.x,e.y)&&(h=Math.abs(r-e.y)/(o-e.x),Qr(e,i)&&(h<c||h===c&&(e.x>s.x||e.x===s.x&&Px(s,e)))&&(s=e,c=h)),e=e.next;while(e!==a);return s}function Px(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function Ix(i,t,e,n){let s=i;do s.z===0&&(s.z=ch(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lx(s)}function Lx(i){let t,e,n,s,o,r,a,u,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(u=l;a>0||u>0&&n;)a!==0&&(u===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,u--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function ch(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Lo(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Ux(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Nx(i,t)&&(Qr(i,t)&&Qr(t,i)&&zx(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||tl(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function tl(i,t){return i.x===t.x&&i.y===t.y}function yp(i,t,e,n){const s=Va(Le(i,t,e)),o=Va(Le(i,t,n)),r=Va(Le(e,n,i)),a=Va(Le(e,n,t));return!!(s!==o&&r!==a||s===0&&Ha(i,e,t)||o===0&&Ha(i,n,t)||r===0&&Ha(e,i,n)||a===0&&Ha(e,t,n))}function Ha(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Va(i){return i>0?1:i<0?-1:0}function Nx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qr(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function zx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wp(i,t){const e=new lh(i.i,i.x,i.y),n=new lh(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ed(i,t,e,n){const s=new lh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fx(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Wr{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Wr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Ad(t),Rd(n,t);let r=t.length;e.forEach(Ad);for(let u=0;u<e.length;u++)s.push(r),r+=e[u].length,Rd(n,e[u]);const a=yx.triangulate(n,s);for(let u=0;u<a.length;u+=3)o.push(a.slice(u,u+3));return o}}function Ad(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Rd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class rr extends la{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rr(t.radius,t.detail)}}class Tf extends la{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Tf(t.radius,t.detail)}}class oe extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),u=Math.floor(s),l=a+1,c=u+1,h=t/a,f=e/u,p=[],m=[],x=[],d=[];for(let g=0;g<c;g++){const S=g*f-r;for(let _=0;_<l;_++){const w=_*h-o;m.push(w,-S,0),x.push(0,0,1),d.push(_/a),d.push(1-g/u)}}for(let g=0;g<u;g++)for(let S=0;S<a;S++){const _=S+l*g,w=S+l*(g+1),A=S+1+l*(g+1),E=S+1+l*g;p.push(_,w,E),p.push(w,A,E)}this.setIndex(p),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.widthSegments,t.heightSegments)}}class ar extends be{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],u=[],l=[],c=[];let h=t;const f=(e-t)/s,p=new z,m=new pt;for(let x=0;x<=s;x++){for(let d=0;d<=n;d++){const g=o+d/n*r;p.x=h*Math.cos(g),p.y=h*Math.sin(g),u.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,c.push(m.x,m.y)}h+=f}for(let x=0;x<s;x++){const d=x*(n+1);for(let g=0;g<n;g++){const S=g+d,_=S,w=S+n+1,A=S+n+2,E=S+1;a.push(_,w,E),a.push(w,A,E)}}this.setIndex(a),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ea extends be{constructor(t=new zc([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,u=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(a,u,c),a+=u,u=0;this.setIndex(n),this.setAttribute("position",new Vt(s,3)),this.setAttribute("normal",new Vt(o,3)),this.setAttribute("uv",new Vt(r,2));function l(c){const h=s.length/3,f=c.extractPoints(e);let p=f.shape;const m=f.holes;Wr.isClockWise(p)===!1&&(p=p.reverse());for(let d=0,g=m.length;d<g;d++){const S=m[d];Wr.isClockWise(S)===!0&&(m[d]=S.reverse())}const x=Wr.triangulateShape(p,m);for(let d=0,g=m.length;d<g;d++){const S=m[d];p=p.concat(S)}for(let d=0,g=p.length;d<g;d++){const S=p[d];s.push(S.x,S.y,0),o.push(0,0,1),r.push(S.x,S.y)}for(let d=0,g=x.length;d<g;d++){const S=x[d],_=S[0]+h,w=S[1]+h,A=S[2]+h;n.push(_,w,A),u+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ox(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new ea(n,t.curveSegments)}}function Ox(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class $ extends be{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const u=Math.min(r+a,Math.PI);let l=0;const c=[],h=new z,f=new z,p=[],m=[],x=[],d=[];for(let g=0;g<=n;g++){const S=[],_=g/n;let w=0;g===0&&r===0?w=.5/e:g===n&&u===Math.PI&&(w=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(s+E*o)*Math.sin(r+_*a),h.y=t*Math.cos(r+_*a),h.z=t*Math.sin(s+E*o)*Math.sin(r+_*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),d.push(E+w,1-_),S.push(l++)}c.push(S)}for(let g=0;g<n;g++)for(let S=0;S<e;S++){const _=c[g][S+1],w=c[g][S],A=c[g+1][S],E=c[g+1][S+1];(g!==0||r>0)&&p.push(_,w,E),(g!==n-1||u<Math.PI)&&p.push(w,A,E)}this.setIndex(p),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Re extends be{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],u=[],l=[],c=new z,h=new z,f=new z;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const x=m/s*o,d=p/n*Math.PI*2;h.x=(t+e*Math.cos(d))*Math.cos(x),h.y=(t+e*Math.cos(d))*Math.sin(x),h.z=e*Math.sin(d),a.push(h.x,h.y,h.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),f.subVectors(h,c).normalize(),u.push(f.x,f.y,f.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const x=(s+1)*p+m-1,d=(s+1)*(p-1)+m-1,g=(s+1)*(p-1)+m,S=(s+1)*p+m;r.push(x,d,S),r.push(d,g,S)}this.setIndex(r),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class on extends be{constructor(t=new vp(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new z,u=new z,l=new pt;let c=new z;const h=[],f=[],p=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(f,3)),this.setAttribute("uv",new Vt(p,2));function x(){for(let _=0;_<e;_++)d(_);d(o===!1?e:0),S(),g()}function d(_){c=t.getPointAt(_/e,c);const w=r.normals[_],A=r.binormals[_];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,b=Math.sin(T),y=-Math.cos(T);u.x=y*w.x+b*A.x,u.y=y*w.y+b*A.y,u.z=y*w.z+b*A.z,u.normalize(),f.push(u.x,u.y,u.z),a.x=c.x+n*u.x,a.y=c.y+n*u.y,a.z=c.z+n*u.z,h.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let w=1;w<=s;w++){const A=(s+1)*(_-1)+(w-1),E=(s+1)*_+(w-1),T=(s+1)*_+w,b=(s+1)*(_-1)+w;m.push(A,E,b),m.push(E,T,b)}}function S(){for(let _=0;_<=e;_++)for(let w=0;w<=s;w++)l.x=_/e,l.y=w/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new on(new ah[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class q extends vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bx extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gx extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ef extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class kx extends Ef{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Fl=new me,Cd=new z,Pd=new z;class Sp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vf,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cd),Pd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pd),e.updateMatrixWorld(),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Id=new me,Rr=new z,Ol=new z;class Hx extends Sp{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rr),Ol.copy(n.position),Ol.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ol),n.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),Id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Id)}}class pr extends Ef{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Af extends cp{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,u=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=c*this.view.offsetY,u=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Vx extends Sp{constructor(){super(new Af(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class el extends Ef{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Vx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wx extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ld(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ld();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ld(){return performance.now()}function Dd(i,t,e,n){const s=Xx(n);switch(e){case q0:return i*t;case Z0:return i*t;case $0:return i*t*2;case ff:return i*t/s.components*s.byteLength;case df:return i*t/s.components*s.byteLength;case j0:return i*t*2/s.components*s.byteLength;case pf:return i*t*2/s.components*s.byteLength;case Y0:return i*t*3/s.components*s.byteLength;case hi:return i*t*4/s.components*s.byteLength;case mf:return i*t*4/s.components*s.byteLength;case lc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hc:case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Du:case Nu:return Math.max(i,16)*Math.max(t,8)/4;case Lu:case Uu:return Math.max(i,8)*Math.max(t,8)/2;case zu:case Fu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ou:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ku:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $u:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ju:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ju:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ku:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dc:case Qu:case th:return Math.ceil(i/4)*Math.ceil(t/4)*16;case J0:case eh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nh:case ih:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xx(i){switch(i){case $i:case V0:return{byteLength:1,components:1};case Jr:case W0:case Wi:return{byteLength:2,components:1};case uf:case hf:return{byteLength:2,components:4};case Zs:case lf:case bi:return{byteLength:4,components:1};case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tp(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function qx(i){const t=new WeakMap;function e(a,u){const l=a.array,c=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,l,c),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,u,l){const c=u.array,h=u.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,c);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){const m=h[f],x=h[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){const x=h[p];i.bufferSubData(l,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=t.get(a);u&&(i.deleteBuffer(u.buffer),t.delete(a))}function r(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,u));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,u),l.version=a.version}}return{get:s,remove:o,update:r}}var Yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zx=`#ifdef USE_ALPHAHASH
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
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qx=`#ifdef USE_AOMAP
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
#endif`,tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ev=`#ifdef USE_BATCHING
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
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ov=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rv=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gv=`#define PI 3.141592653589793
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
} // validated`,xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vv=`vec3 transformedNormal = objectNormal;
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
#endif`,Mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tv=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uv=`#ifdef USE_GRADIENTMAP
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
}`,Nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ov=`uniform bool receiveShadow;
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
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
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
#endif`,Xv=`struct PhysicalMaterial {
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
}`,qv=`
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
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$v=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nM=`#if defined( USE_POINTS_UV )
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
#endif`,iM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`#ifdef USE_MORPHTARGETS
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
#endif`,lM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mM=`#ifdef USE_NORMALMAP
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
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IM=`float getShadowMask() {
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
}`,LM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DM=`#ifdef USE_SKINNING
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
#endif`,UM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,zM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jM=`varying vec3 vWorldDirection;
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
}`,KM=`#include <common>
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
}`,QM=`#if DEPTH_PACKING == 3200
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
}`,t_=`#define DISTANCE
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
}`,e_=`#define DISTANCE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,o_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,c_=`#define LAMBERT
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
}`,l_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,h_=`#define MATCAP
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
}`,f_=`#define NORMAL
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
}`,d_=`#define NORMAL
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
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
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
}`,g_=`#define STANDARD
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
}`,x_=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,M_=`#define TOON
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
}`,__=`uniform float size;
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
}`,y_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,S_=`uniform vec3 color;
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
}`,b_=`uniform float rotation;
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
}`,T_=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Yx,alphahash_pars_fragment:Zx,alphamap_fragment:$x,alphamap_pars_fragment:jx,alphatest_fragment:Jx,alphatest_pars_fragment:Kx,aomap_fragment:Qx,aomap_pars_fragment:tv,batching_pars_vertex:ev,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:sv,bsdfs:ov,iridescence_fragment:rv,bumpmap_pars_fragment:av,clipping_planes_fragment:cv,clipping_planes_pars_fragment:lv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:hv,color_fragment:fv,color_pars_fragment:dv,color_pars_vertex:pv,color_vertex:mv,common:gv,cube_uv_reflection_fragment:xv,defaultnormal_vertex:vv,displacementmap_pars_vertex:Mv,displacementmap_vertex:_v,emissivemap_fragment:yv,emissivemap_pars_fragment:wv,colorspace_fragment:Sv,colorspace_pars_fragment:bv,envmap_fragment:Tv,envmap_common_pars_fragment:Ev,envmap_pars_fragment:Av,envmap_pars_vertex:Rv,envmap_physical_pars_fragment:Bv,envmap_vertex:Cv,fog_vertex:Pv,fog_pars_vertex:Iv,fog_fragment:Lv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Uv,lightmap_pars_fragment:Nv,lights_lambert_fragment:zv,lights_lambert_pars_fragment:Fv,lights_pars_begin:Ov,lights_toon_fragment:Gv,lights_toon_pars_fragment:kv,lights_phong_fragment:Hv,lights_phong_pars_fragment:Vv,lights_physical_fragment:Wv,lights_physical_pars_fragment:Xv,lights_fragment_begin:qv,lights_fragment_maps:Yv,lights_fragment_end:Zv,logdepthbuf_fragment:$v,logdepthbuf_pars_fragment:jv,logdepthbuf_pars_vertex:Jv,logdepthbuf_vertex:Kv,map_fragment:Qv,map_pars_fragment:tM,map_particle_fragment:eM,map_particle_pars_fragment:nM,metalnessmap_fragment:iM,metalnessmap_pars_fragment:sM,morphinstance_vertex:oM,morphcolor_vertex:rM,morphnormal_vertex:aM,morphtarget_pars_vertex:cM,morphtarget_vertex:lM,normal_fragment_begin:uM,normal_fragment_maps:hM,normal_pars_fragment:fM,normal_pars_vertex:dM,normal_vertex:pM,normalmap_pars_fragment:mM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:xM,clearcoat_pars_fragment:vM,iridescence_pars_fragment:MM,opaque_fragment:_M,packing:yM,premultiplied_alpha_fragment:wM,project_vertex:SM,dithering_fragment:bM,dithering_pars_fragment:TM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:AM,shadowmap_pars_fragment:RM,shadowmap_pars_vertex:CM,shadowmap_vertex:PM,shadowmask_pars_fragment:IM,skinbase_vertex:LM,skinning_pars_vertex:DM,skinning_vertex:UM,skinnormal_vertex:NM,specularmap_fragment:zM,specularmap_pars_fragment:FM,tonemapping_fragment:OM,tonemapping_pars_fragment:BM,transmission_fragment:GM,transmission_pars_fragment:kM,uv_pars_fragment:HM,uv_pars_vertex:VM,uv_vertex:WM,worldpos_vertex:XM,background_vert:qM,background_frag:YM,backgroundCube_vert:ZM,backgroundCube_frag:$M,cube_vert:jM,cube_frag:JM,depth_vert:KM,depth_frag:QM,distanceRGBA_vert:t_,distanceRGBA_frag:e_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:o_,meshbasic_vert:r_,meshbasic_frag:a_,meshlambert_vert:c_,meshlambert_frag:l_,meshmatcap_vert:u_,meshmatcap_frag:h_,meshnormal_vert:f_,meshnormal_frag:d_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:x_,meshtoon_vert:v_,meshtoon_frag:M_,points_vert:__,points_frag:y_,shadow_vert:w_,shadow_frag:S_,sprite_vert:b_,sprite_frag:T_},xt={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Mi={basic:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new rt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:fn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:fn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new rt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:fn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:fn([xt.points,xt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:fn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:fn([xt.common,xt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:fn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:fn([xt.sprite,xt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:fn([xt.common,xt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:fn([xt.lights,xt.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Mi.physical={uniforms:fn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Wa={r:0,b:0,g:0},Ts=new Ei,E_=new me;function A_(i,t,e,n,s,o,r){const a=new rt(0);let u=o===!0?0:1,l,c,h=null,f=0,p=null;function m(_){let w=_.isScene===!0?_.background:null;return w&&w.isTexture&&(w=(_.backgroundBlurriness>0?e:t).get(w)),w}function x(_){let w=!1;const A=m(_);A===null?g(a,u):A&&A.isColor&&(g(A,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(_,w){const A=m(w);A&&(A.isCubeTexture||A.mapping===Qc)?(c===void 0&&(c=new C(new aa(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:or(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ts.copy(w.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(Ts)),c.material.toneMapped=he.getTransfer(A.colorSpace)!==ve,(h!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new C(new oe(2,2),new Pn({name:"BackgroundMaterial",uniforms:or(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=he.getTransfer(A.colorSpace)!==ve,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,w){_.getRGB(Wa,ap(i)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,w,r)}function S(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),u=w,g(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(_){u=_,g(a,u)},render:x,addToRenderList:d,dispose:S}}function R_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(M,R,L,D,F){let V=!1;const k=h(D,L,R);o!==k&&(o=k,l(o.object)),V=p(M,D,L,F),V&&m(M,D,L,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,w(M,R,L,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function u(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function c(M){return i.deleteVertexArray(M)}function h(M,R,L){const D=L.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let V=F[R.id];V===void 0&&(V={},F[R.id]=V);let k=V[D];return k===void 0&&(k=f(u()),V[D]=k),k}function f(M){const R=[],L=[],D=[];for(let F=0;F<e;F++)R[F]=0,L[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:D,object:M,attributes:{},index:null}}function p(M,R,L,D){const F=o.attributes,V=R.attributes;let k=0;const O=L.getAttributes();for(const B in O)if(O[B].location>=0){const ut=F[B];let ft=V[B];if(ft===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;k++}return o.attributesNum!==k||o.index!==D}function m(M,R,L,D){const F={},V=R.attributes;let k=0;const O=L.getAttributes();for(const B in O)if(O[B].location>=0){let ut=V[B];ut===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),F[B]=ft,k++}o.attributes=F,o.attributesNum=k,o.index=D}function x(){const M=o.newAttributes;for(let R=0,L=M.length;R<L;R++)M[R]=0}function d(M){g(M,0)}function g(M,R){const L=o.newAttributes,D=o.enabledAttributes,F=o.attributeDivisors;L[M]=1,D[M]===0&&(i.enableVertexAttribArray(M),D[M]=1),F[M]!==R&&(i.vertexAttribDivisor(M,R),F[M]=R)}function S(){const M=o.newAttributes,R=o.enabledAttributes;for(let L=0,D=R.length;L<D;L++)R[L]!==M[L]&&(i.disableVertexAttribArray(L),R[L]=0)}function _(M,R,L,D,F,V,k){k===!0?i.vertexAttribIPointer(M,R,L,F,V):i.vertexAttribPointer(M,R,L,D,F,V)}function w(M,R,L,D){x();const F=D.attributes,V=L.getAttributes(),k=R.defaultAttributeValues;for(const O in V){const B=V[O];if(B.location>=0){let it=F[O];if(it===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){const ut=it.normalized,ft=it.itemSize,Pt=t.get(it);if(Pt===void 0)continue;const Wt=Pt.buffer,et=Pt.type,lt=Pt.bytesPerElement,yt=et===i.INT||et===i.UNSIGNED_INT||it.gpuType===lf;if(it.isInterleavedBufferAttribute){const mt=it.data,zt=mt.stride,Ot=it.offset;if(mt.isInstancedInterleavedBuffer){for(let $t=0;$t<B.locationSize;$t++)g(B.location+$t,mt.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $t=0;$t<B.locationSize;$t++)d(B.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let $t=0;$t<B.locationSize;$t++)_(B.location+$t,ft/B.locationSize,et,ut,zt*lt,(Ot+ft/B.locationSize*$t)*lt,yt)}else{if(it.isInstancedBufferAttribute){for(let mt=0;mt<B.locationSize;mt++)g(B.location+mt,it.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let mt=0;mt<B.locationSize;mt++)d(B.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let mt=0;mt<B.locationSize;mt++)_(B.location+mt,ft/B.locationSize,et,ut,ft*lt,ft/B.locationSize*mt*lt,yt)}}else if(k!==void 0){const ut=k[O];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(B.location,ut);break;case 3:i.vertexAttrib3fv(B.location,ut);break;case 4:i.vertexAttrib4fv(B.location,ut);break;default:i.vertexAttrib1fv(B.location,ut)}}}}S()}function A(){b();for(const M in n){const R=n[M];for(const L in R){const D=R[L];for(const F in D)c(D[F].object),delete D[F];delete R[L]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const L in R){const D=R[L];for(const F in D)c(D[F].object),delete D[F];delete R[L]}delete n[M.id]}function T(M){for(const R in n){const L=n[R];if(L[M.id]===void 0)continue;const D=L[M.id];for(const F in D)c(D[F].object),delete D[F];delete L[M.id]}}function b(){y(),r=!0,o!==s&&(o=s,l(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:d,disableUnusedAttributes:S}}function C_(i,t,e){let n;function s(l){n=l}function o(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let p=0;for(let m=0;m<h;m++)p+=c[m];e.update(p,n,1)}function u(l,c,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)r(l[m],c[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,c,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=c[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function P_(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==hi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==$i&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==bi&&!b)}function u(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=u(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:u,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:d,maxAttributes:g,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:A,maxSamples:E}}function I_(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Ps,a=new qt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,f){e=c(h,f,0)},this.setState=function(h,f,p){const m=h.clippingPlanes,x=h.clipIntersection,d=h.clipShadows,g=i.get(h);if(!s||m===null||m.length===0||o&&!d)o?c(null):l();else{const S=o?0:n,_=S*4;let w=g.clippingState||null;u.value=w,w=c(m,f,_,p);for(let A=0;A!==_;++A)w[A]=e[A];g.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(h,f,p,m){const x=h!==null?h.length:0;let d=null;if(x!==0){if(d=u.value,m!==!0||d===null){const g=p+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(d===null||d.length<g)&&(d=new Float32Array(g));for(let _=0,w=p;_!==x;++_,w+=4)r.copy(h[_]).applyMatrix4(S,a),r.normal.toArray(d,w),d[w+3]=r.constant}u.value=d,u.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,d}}function L_(i){let t=new WeakMap;function e(r,a){return a===Cu?r.mapping=Qo:a===Pu&&(r.mapping=tr),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Cu||a===Pu)if(t.has(r)){const u=t.get(r).texture;return e(u,r.mapping)}else{const u=r.image;if(u&&u.height>0){const l=new nx(u.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Do=4,Ud=[.125,.215,.35,.446,.526,.582],Bs=20,Bl=new Af,Nd=new rt;let Gl=null,kl=0,Hl=0,Vl=!1;const Is=(1+Math.sqrt(5))/2,yo=1/Is,zd=[new z(-Is,yo,0),new z(Is,yo,0),new z(-yo,0,Is),new z(yo,0,Is),new z(0,Is,-yo),new z(0,Is,yo),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Fd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Gl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gl,kl,Hl),this._renderer.xr.enabled=Vl,t.scissorTest=!1,Xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qo||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Wi,format:hi,colorSpace:sr,depthBuffer:!1},s=Od(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(o)),this._blurMaterial=U_(o,t,e)}return s}_compileMaterial(t){const e=new C(this._lodPlanes[0],t);this._renderer.compile(e,Bl)}_sceneToCubeUV(t,e,n,s){const a=new On(90,1,e,n),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Nd),c.toneMapping=ms,c.autoClear=!1;const p=new Z({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new C(new aa,p);let x=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,x=!0):(p.color.copy(Nd),x=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(a.up.set(0,u[g],0),a.lookAt(l[g],0,0)):S===1?(a.up.set(0,0,u[g]),a.lookAt(0,l[g],0)):(a.up.set(0,u[g],0),a.lookAt(0,0,l[g]));const _=this._cubeSize;Xa(s,S*_,g>2?_:0,_,_),c.setRenderTarget(s),x&&c.render(m,a),c.render(t,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=f,c.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qo||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bd());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new C(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const u=this._cubeSize;Xa(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(r,Bl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=zd[(s-o-1)%zd.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const u=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new C(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Bs-1),x=o/m,d=isFinite(o)?1+Math.floor(c*x):Bs;d>Bs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Bs}`);const g=[];let S=0;for(let T=0;T<Bs;++T){const b=T/x,y=Math.exp(-b*b/2);g.push(y),T===0?S+=y:T<d&&(S+=2*y)}for(let T=0;T<g.length;T++)g[T]=g[T]/S;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=g,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const w=this._sizeLods[s],A=3*w*(s>_-Do?s-_+Do:0),E=4*(this._cubeSize-w);Xa(e,A,E,3*w,2*w),u.setRenderTarget(e),u.render(h,Bl)}}function D_(i){const t=[],e=[],n=[];let s=i;const o=i-Do+1+Ud.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let u=1/a;r>i-Do?u=Ud[r-i+Do-1]:r===0&&(u=0),n.push(u);const l=1/(a-2),c=-l,h=1+l,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,m=6,x=3,d=2,g=1,S=new Float32Array(x*m*p),_=new Float32Array(d*m*p),w=new Float32Array(g*m*p);for(let E=0;E<p;E++){const T=E%3*2/3-1,b=E>2?0:-1,y=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];S.set(y,x*m*E),_.set(f,d*m*E);const M=[E,E,E,E,E,E];w.set(M,g*m*E)}const A=new be;A.setAttribute("position",new Fe(S,x)),A.setAttribute("uv",new Fe(_,d)),A.setAttribute("faceIndex",new Fe(w,g)),t.push(A),s>Do&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Od(i,t,e){const n=new fi(i,t,e);return n.texture.mapping=Qc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function U_(i,t,e){const n=new Float32Array(Bs),s=new z(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rf(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Bd(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Gd(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Rf(){return`

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
	`}function N_(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const u=a.mapping,l=u===Cu||u===Pu,c=u===Qo||u===tr;if(l||c){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Fd(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new Fd(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let u=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&u++;return u===l}function o(a){const u=a.target;u.removeEventListener("dispose",o);const l=t.get(u);l!==void 0&&(t.delete(u),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function z_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ao("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F_(i,t,e,n){const s={},o=new WeakMap;function r(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",r),delete s[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function u(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,m=h.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let _=0,w=S.length;_<w;_+=3){const A=S[_+0],E=S[_+1],T=S[_+2];f.push(A,E,E,T,T,A)}}else if(m!==void 0){const S=m.array;x=m.version;for(let _=0,w=S.length/3-1;_<w;_+=3){const A=_+0,E=_+1,T=_+2;f.push(A,E,E,T,T,A)}}else return;const d=new(tp(f)?rp:op)(f,1);d.version=x;const g=o.get(h);g&&t.remove(g),o.set(h,d)}function c(h){const f=o.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:u,getWireframeAttribute:c}}function O_(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function u(f,p){i.drawElements(n,p,o,f*r),e.update(p,n,1)}function l(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,o,f*r,m),e.update(p,n,m))}function c(f,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,f,0,m);let d=0;for(let g=0;g<m;g++)d+=p[g];e.update(d,n,1)}function h(f,p,m,x){if(m===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f.length;g++)l(f[g]/r,p[g],x[g]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,o,f,0,x,0,m);let g=0;for(let S=0;S<m;S++)g+=p[S]*x[S];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=u,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function B_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function G_(i,t,e){const n=new WeakMap,s=new _e;function o(r,a,u){const l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let w=0;m===!0&&(w=1),x===!0&&(w=2),d===!0&&(w=3);let A=a.attributes.position.count*w,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*E*4*h),b=new np(T,A,E,h);b.type=bi,b.needsUpdate=!0;const y=w*4;for(let R=0;R<h;R++){const L=g[R],D=S[R],F=_[R],V=A*E*4*R;for(let k=0;k<L.count;k++){const O=k*y;m===!0&&(s.fromBufferAttribute(L,k),T[V+O+0]=s.x,T[V+O+1]=s.y,T[V+O+2]=s.z,T[V+O+3]=0),x===!0&&(s.fromBufferAttribute(D,k),T[V+O+4]=s.x,T[V+O+5]=s.y,T[V+O+6]=s.z,T[V+O+7]=0),d===!0&&(s.fromBufferAttribute(F,k),T[V+O+8]=s.x,T[V+O+9]=s.y,T[V+O+10]=s.z,T[V+O+11]=F.itemSize===4?s.w:1)}}f={count:h,texture:b,size:new pt(A,E)},n.set(a,f),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let d=0;d<l.length;d++)m+=l[d];const x=a.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",l)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function k_(i,t,e,n){let s=new WeakMap;function o(u){const l=n.render.frame,c=u.geometry,h=t.get(u,c);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),s.get(u)!==l&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){const f=u.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function r(){s=new WeakMap}function a(u){const l=u.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const Ep=new an,kd=new pp(1,1),Ap=new np,Rp=new kg,Cp=new lp,Hd=[],Vd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),qd=new Float32Array(4);function mr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Hd[s];if(o===void 0&&(o=new Float32Array(s),Hd[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nl(i,t){let e=Vd[t];e===void 0&&(e=new Int32Array(t),Vd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function H_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function V_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function W_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function X_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function q_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;qd.set(n),i.uniformMatrix2fv(this.addr,!1,qd),Xe(e,n)}}function Y_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Xd.set(n),i.uniformMatrix3fv(this.addr,!1,Xd),Xe(e,n)}}function Z_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Wd.set(n),i.uniformMatrix4fv(this.addr,!1,Wd),Xe(e,n)}}function $_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function j_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function J_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function K_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Q_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ty(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function ey(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function ny(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function iy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(kd.compareFunction=Q0,o=kd):o=Ep,e.setTexture2D(t||o,s)}function sy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rp,s)}function oy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cp,s)}function ry(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ap,s)}function ay(i){switch(i){case 5126:return H_;case 35664:return V_;case 35665:return W_;case 35666:return X_;case 35674:return q_;case 35675:return Y_;case 35676:return Z_;case 5124:case 35670:return $_;case 35667:case 35671:return j_;case 35668:case 35672:return J_;case 35669:case 35673:return K_;case 5125:return Q_;case 36294:return ty;case 36295:return ey;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ry}}function cy(i,t){i.uniform1fv(this.addr,t)}function ly(i,t){const e=mr(t,this.size,2);i.uniform2fv(this.addr,e)}function uy(i,t){const e=mr(t,this.size,3);i.uniform3fv(this.addr,e)}function hy(i,t){const e=mr(t,this.size,4);i.uniform4fv(this.addr,e)}function fy(i,t){const e=mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dy(i,t){const e=mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function py(i,t){const e=mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function my(i,t){i.uniform1iv(this.addr,t)}function gy(i,t){i.uniform2iv(this.addr,t)}function xy(i,t){i.uniform3iv(this.addr,t)}function vy(i,t){i.uniform4iv(this.addr,t)}function My(i,t){i.uniform1uiv(this.addr,t)}function _y(i,t){i.uniform2uiv(this.addr,t)}function yy(i,t){i.uniform3uiv(this.addr,t)}function wy(i,t){i.uniform4uiv(this.addr,t)}function Sy(i,t,e){const n=this.cache,s=t.length,o=nl(e,s);We(n,o)||(i.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Ep,o[r])}function by(i,t,e){const n=this.cache,s=t.length,o=nl(e,s);We(n,o)||(i.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Rp,o[r])}function Ty(i,t,e){const n=this.cache,s=t.length,o=nl(e,s);We(n,o)||(i.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Cp,o[r])}function Ey(i,t,e){const n=this.cache,s=t.length,o=nl(e,s);We(n,o)||(i.uniform1iv(this.addr,o),Xe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ap,o[r])}function Ay(i){switch(i){case 5126:return cy;case 35664:return ly;case 35665:return uy;case 35666:return hy;case 35674:return fy;case 35675:return dy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return xy;case 35669:case 35673:return vy;case 5125:return My;case 36294:return _y;case 36295:return yy;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ey}}class Ry{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ay(e.type)}}class Cy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ay(e.type)}}class Py{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Wl=/(\w+)(\])?(\[|\.)?/g;function Yd(i,t){i.seq.push(t),i.map[t.id]=t}function Iy(i,t,e){const n=i.name,s=n.length;for(Wl.lastIndex=0;;){const o=Wl.exec(n),r=Wl.lastIndex;let a=o[1];const u=o[2]==="]",l=o[3];if(u&&(a=a|0),l===void 0||l==="["&&r+2===s){Yd(e,l===void 0?new Ry(a,i,t):new Cy(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Py(a),Yd(e,h)),e=h}}}class pc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Iy(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],u=n[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Zd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ly=37297;let Dy=0;function Uy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const $d=new qt;function Ny(i){he._getMatrix($d,he.workingColorSpace,i);const t=`mat3( ${$d.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Rc:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Uy(i.getShaderSource(t),r)}else return s}function zy(i,t){const e=Ny(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fy(i,t){let e;switch(t){case pg:e="Linear";break;case mg:e="Reinhard";break;case gg:e="Cineon";break;case k0:e="ACESFilmic";break;case vg:e="AgX";break;case Mg:e="Neutral";break;case xg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qa=new z;function Oy(){he.getLuminanceCoefficients(qa);const i=qa.x.toFixed(4),t=qa.y.toFixed(4),e=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Gy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ky(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Nr(i){return i!==""}function Jd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(i){return i.replace(Hy,Wy)}const Vy=new Map;function Wy(i,t){let e=Zt[t];if(e===void 0){const n=Vy.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return uh(e)}const Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(i){return i.replace(Xy,qy)}function qy(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function t0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Yy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===O0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===B0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function Zy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qo:case tr:t="ENVMAP_TYPE_CUBE";break;case Qc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $y(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function jy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case G0:t="ENVMAP_BLENDING_MULTIPLY";break;case fg:t="ENVMAP_BLENDING_MIX";break;case dg:t="ENVMAP_BLENDING_ADD";break}return t}function Jy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ky(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const u=Yy(e),l=Zy(e),c=$y(e),h=jy(e),f=Jy(e),p=By(e),m=Gy(o),x=s.createProgram();let d,g,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Nr).join(`
`),d.length>0&&(d+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Nr).join(`
`),g.length>0&&(g+=`
`)):(d=[t0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),g=[t0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ms?"#define TONE_MAPPING":"",e.toneMapping!==ms?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ms?Fy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,zy("linearToOutputTexel",e.outputColorSpace),Oy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),r=uh(r),r=Jd(r,e),r=Kd(r,e),a=uh(a),a=Jd(a,e),a=Kd(a,e),r=Qd(r),a=Qd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["#define varying in",e.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=S+d+r,w=S+g+a,A=Zd(s,s.VERTEX_SHADER,_),E=Zd(s,s.FRAGMENT_SHADER,w);s.attachShader(x,A),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(A).trim(),F=s.getShaderInfoLog(E).trim();let V=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const O=jd(s,A,"vertex"),B=jd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+O+`
`+B)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||F==="")&&(k=!1);k&&(R.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:d},fragmentShader:{log:F,prefix:g}})}s.deleteShader(A),s.deleteShader(E),b=new pc(s,x),y=ky(s,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Ly)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let Qy=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new e1(t),e.set(t,n)),n}}class e1{constructor(t){this.id=Qy++,this.code=t,this.usedTimes=0}}function n1(i,t,e,n,s,o,r){const a=new ip,u=new t1,l=new Set,c=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function d(y,M,R,L,D){const F=L.fog,V=D.geometry,k=y.isMeshStandardMaterial?L.environment:null,O=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),B=O&&O.mapping===Qc?O.image.height:null,it=m[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ut=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=ut!==void 0?ut.length:0;let Pt=0;V.morphAttributes.position!==void 0&&(Pt=1),V.morphAttributes.normal!==void 0&&(Pt=2),V.morphAttributes.color!==void 0&&(Pt=3);let Wt,et,lt,yt;if(it){const ge=Mi[it];Wt=ge.vertexShader,et=ge.fragmentShader}else Wt=y.vertexShader,et=y.fragmentShader,u.update(y),lt=u.getVertexShaderID(y),yt=u.getFragmentShaderID(y);const mt=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Ot=D.isInstancedMesh===!0,$t=D.isBatchedMesh===!0,Pe=!!y.map,re=!!y.matcap,Oe=!!O,G=!!y.aoMap,Yn=!!y.lightMap,ne=!!y.bumpMap,ie=!!y.normalMap,Dt=!!y.displacementMap,Te=!!y.emissiveMap,Lt=!!y.metalnessMap,N=!!y.roughnessMap,P=y.anisotropy>0,j=y.clearcoat>0,st=y.dispersion>0,ct=y.iridescence>0,nt=y.sheen>0,It=y.transmission>0,_t=P&&!!y.anisotropyMap,Tt=j&&!!y.clearcoatMap,ae=j&&!!y.clearcoatNormalMap,dt=j&&!!y.clearcoatRoughnessMap,Et=ct&&!!y.iridescenceMap,Ft=ct&&!!y.iridescenceThicknessMap,Gt=nt&&!!y.sheenColorMap,At=nt&&!!y.sheenRoughnessMap,se=!!y.specularMap,Yt=!!y.specularColorMap,we=!!y.specularIntensityMap,H=It&&!!y.transmissionMap,vt=It&&!!y.thicknessMap,tt=!!y.gradientMap,ot=!!y.alphaMap,St=y.alphaTest>0,wt=!!y.alphaHash,Xt=!!y.extensions;let De=ms;y.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(De=i.toneMapping);const Ke={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Wt,fragmentShader:et,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:yt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:$t,batchingColor:$t&&D._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&D.instanceColor!==null,instancingMorph:Ot&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:sr,alphaToCoverage:!!y.alphaToCoverage,map:Pe,matcap:re,envMap:Oe,envMapMode:Oe&&O.mapping,envMapCubeUVHeight:B,aoMap:G,lightMap:Yn,bumpMap:ne,normalMap:ie,displacementMap:f&&Dt,emissiveMap:Te,normalMapObjectSpace:ie&&y.normalMapType===Sg,normalMapTangentSpace:ie&&y.normalMapType===K0,metalnessMap:Lt,roughnessMap:N,anisotropy:P,anisotropyMap:_t,clearcoat:j,clearcoatMap:Tt,clearcoatNormalMap:ae,clearcoatRoughnessMap:dt,dispersion:st,iridescence:ct,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:nt,sheenColorMap:Gt,sheenRoughnessMap:At,specularMap:se,specularColorMap:Yt,specularIntensityMap:we,transmission:It,transmissionMap:H,thicknessMap:vt,gradientMap:tt,opaque:y.transparent===!1&&y.blending===Bo&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:St,alphaHash:wt,combine:y.combine,mapUv:Pe&&x(y.map.channel),aoMapUv:G&&x(y.aoMap.channel),lightMapUv:Yn&&x(y.lightMap.channel),bumpMapUv:ne&&x(y.bumpMap.channel),normalMapUv:ie&&x(y.normalMap.channel),displacementMapUv:Dt&&x(y.displacementMap.channel),emissiveMapUv:Te&&x(y.emissiveMap.channel),metalnessMapUv:Lt&&x(y.metalnessMap.channel),roughnessMapUv:N&&x(y.roughnessMap.channel),anisotropyMapUv:_t&&x(y.anisotropyMap.channel),clearcoatMapUv:Tt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(y.sheenRoughnessMap.channel),specularMapUv:se&&x(y.specularMap.channel),specularColorMapUv:Yt&&x(y.specularColorMap.channel),specularIntensityMapUv:we&&x(y.specularIntensityMap.channel),transmissionMapUv:H&&x(y.transmissionMap.channel),thicknessMapUv:vt&&x(y.thicknessMap.channel),alphaMapUv:ot&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ie||P),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Pe||ot),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:zt,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Pe&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===ve,decodeVideoTextureEmissive:Te&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===ve,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ct,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&y.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function g(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(S(M,y),_(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function w(y){const M=m[y.type];let R;if(M){const L=Mi[M];R=Ic.clone(L.uniforms)}else R=y.uniforms;return R}function A(y,M){let R;for(let L=0,D=c.length;L<D;L++){const F=c[L];if(F.cacheKey===M){R=F,++R.usedTimes;break}}return R===void 0&&(R=new Ky(i,M,y,o),c.push(R)),R}function E(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function T(y){u.remove(y)}function b(){u.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:w,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:b}}function i1(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,u){i.get(r)[a]=u}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function s1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function e0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function n0(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,f,p,m,x,d){let g=i[t];return g===void 0?(g={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:x,group:d},i[t]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=p,g.groupOrder=m,g.renderOrder=h.renderOrder,g.z=x,g.group=d),t++,g}function a(h,f,p,m,x,d){const g=r(h,f,p,m,x,d);p.transmission>0?n.push(g):p.transparent===!0?s.push(g):e.push(g)}function u(h,f,p,m,x,d){const g=r(h,f,p,m,x,d);p.transmission>0?n.unshift(g):p.transparent===!0?s.unshift(g):e.unshift(g)}function l(h,f){e.length>1&&e.sort(h||s1),n.length>1&&n.sort(f||e0),s.length>1&&s.sort(f||e0)}function c(){for(let h=t,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:u,finish:c,sort:l}}function o1(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new n0,i.set(n,[r])):s>=o.length?(r=new n0,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function r1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new rt};break;case"SpotLight":e={position:new z,direction:new z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function a1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let c1=0;function l1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u1(i){const t=new r1,e=a1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const s=new z,o=new me,r=new me;function a(l){let c=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,m=0,x=0,d=0,g=0,S=0,_=0,w=0,A=0,E=0,T=0;l.sort(l1);for(let y=0,M=l.length;y<M;y++){const R=l[y],L=R.color,D=R.intensity,F=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=L.r*D,h+=L.g*D,f+=L.b*D;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],D);T++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const O=R.shadow,B=e.get(R);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=k,p++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(L).multiplyScalar(D),k.distance=F,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const O=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,O.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[x]=O.matrix,R.castShadow){const B=e.get(R);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=V,w++}x++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(L).multiplyScalar(D),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[d]=k,d++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const O=R.shadow,B=e.get(R);B.shadowIntensity=O.intensity,B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,B.shadowCameraNear=O.camera.near,B.shadowCameraFar=O.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=R.shadow.matrix,_++}n.point[m]=k,m++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(D),k.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[g]=k,g++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==p||b.pointLength!==m||b.spotLength!==x||b.rectAreaLength!==d||b.hemiLength!==g||b.numDirectionalShadows!==S||b.numPointShadows!==_||b.numSpotShadows!==w||b.numSpotMaps!==A||b.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=d,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=w+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=p,b.pointLength=m,b.spotLength=x,b.rectAreaLength=d,b.hemiLength=g,b.numDirectionalShadows=S,b.numPointShadows=_,b.numSpotShadows=w,b.numSpotMaps=A,b.numLightProbes=T,n.version=c1++)}function u(l,c){let h=0,f=0,p=0,m=0,x=0;const d=c.matrixWorldInverse;for(let g=0,S=l.length;g<S;g++){const _=l[g];if(_.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(_.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),p++}else if(_.isRectAreaLight){const w=n.rectArea[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),r.identity(),o.copy(_.matrixWorld),o.premultiply(d),r.extractRotation(o),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),m++}else if(_.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(d),f++}else if(_.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(d),x++}}}return{setup:a,setupView:u,state:n}}function i0(i){const t=new u1(i),e=[],n=[];function s(c){l.camera=c,e.length=0,n.length=0}function o(c){e.push(c)}function r(c){n.push(c)}function a(){t.setup(e)}function u(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:u,pushLight:o,pushShadow:r}}function h1(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new i0(i),t.set(s,[a])):o>=r.length?(a=new i0(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d1=`uniform sampler2D shadow_pass;
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
}`;function p1(i,t,e){let n=new vf;const s=new pt,o=new pt,r=new _e,a=new Bx({depthPacking:wg}),u=new Gx,l={},c=e.maxTextureSize,h={[xs]:rn,[rn]:xs,[Ct]:Ct},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:f1,fragmentShader:d1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new be;m.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new C(m,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O0;let g=this.type;this.render=function(E,T,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Vi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=g!==zi&&this.type===zi,F=g===zi&&this.type!==zi;for(let V=0,k=E.length;V<k;V++){const O=E[V],B=O.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const it=B.getFrameExtents();if(s.multiply(it),o.copy(B.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(o.x=Math.floor(c/it.x),s.x=o.x*it.x,B.mapSize.x=o.x),s.y>c&&(o.y=Math.floor(c/it.y),s.y=o.y*it.y,B.mapSize.y=o.y)),B.map===null||D===!0||F===!0){const ft=this.type!==zi?{minFilter:Wn,magFilter:Wn}:{};B.map!==null&&B.map.dispose(),B.map=new fi(s.x,s.y,ft),B.map.texture.name=O.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ut=B.getViewportCount();for(let ft=0;ft<ut;ft++){const Pt=B.getViewport(ft);r.set(o.x*Pt.x,o.y*Pt.y,o.x*Pt.z,o.y*Pt.w),L.viewport(r),B.updateMatrices(O,ft),n=B.getFrustum(),w(T,b,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===zi&&S(B,b),B.needsUpdate=!1}g=this.type,d.needsUpdate=!1,i.setRenderTarget(y,M,R)};function S(E,T){const b=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,b,f,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,b,p,x,null)}function _(E,T,b,y){let M=null;const R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=b.isPointLight===!0?u:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=M.uuid,D=T.uuid;let F=l[L];F===void 0&&(F={},l[L]=F);let V=F[D];V===void 0&&(V=M.clone(),F[D]=V,T.addEventListener("dispose",A)),M=V}if(M.visible=T.visible,M.wireframe=T.wireframe,y===zi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=i.properties.get(M);L.light=b}return M}function w(E,T,b,y,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===zi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const D=t.update(E),F=E.material;if(Array.isArray(F)){const V=D.groups;for(let k=0,O=V.length;k<O;k++){const B=V[k],it=F[B.materialIndex];if(it&&it.visible){const ut=_(E,it,y,M);E.onBeforeShadow(i,E,T,b,D,ut,B),i.renderBufferDirect(b,null,D,ut,E,B),E.onAfterShadow(i,E,T,b,D,ut,B)}}}else if(F.visible){const V=_(E,F,y,M);E.onBeforeShadow(i,E,T,b,D,V,null),i.renderBufferDirect(b,null,D,V,E,null),E.onAfterShadow(i,E,T,b,D,V,null)}}const L=E.children;for(let D=0,F=L.length;D<F;D++)w(L[D],T,b,y,M)}function A(E){E.target.removeEventListener("dispose",A);for(const b in l){const y=l[b],M=E.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const m1={[wu]:Su,[bu]:Au,[Tu]:Ru,[Ko]:Eu,[Su]:wu,[Au]:bu,[Ru]:Tu,[Eu]:Ko};function g1(i,t){function e(){let H=!1;const vt=new _e;let tt=null;const ot=new _e(0,0,0,0);return{setMask:function(St){tt!==St&&!H&&(i.colorMask(St,St,St,St),tt=St)},setLocked:function(St){H=St},setClear:function(St,wt,Xt,De,Ke){Ke===!0&&(St*=De,wt*=De,Xt*=De),vt.set(St,wt,Xt,De),ot.equals(vt)===!1&&(i.clearColor(St,wt,Xt,De),ot.copy(vt))},reset:function(){H=!1,tt=null,ot.set(-1,0,0,0)}}}function n(){let H=!1,vt=!1,tt=null,ot=null,St=null;return{setReversed:function(wt){if(vt!==wt){const Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const De=St;St=null,this.setClear(De)}vt=wt},getReversed:function(){return vt},setTest:function(wt){wt?mt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(wt){tt!==wt&&!H&&(i.depthMask(wt),tt=wt)},setFunc:function(wt){if(vt&&(wt=m1[wt]),ot!==wt){switch(wt){case wu:i.depthFunc(i.NEVER);break;case Su:i.depthFunc(i.ALWAYS);break;case bu:i.depthFunc(i.LESS);break;case Ko:i.depthFunc(i.LEQUAL);break;case Tu:i.depthFunc(i.EQUAL);break;case Eu:i.depthFunc(i.GEQUAL);break;case Au:i.depthFunc(i.GREATER);break;case Ru:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=wt}},setLocked:function(wt){H=wt},setClear:function(wt){St!==wt&&(vt&&(wt=1-wt),i.clearDepth(wt),St=wt)},reset:function(){H=!1,tt=null,ot=null,St=null,vt=!1}}}function s(){let H=!1,vt=null,tt=null,ot=null,St=null,wt=null,Xt=null,De=null,Ke=null;return{setTest:function(ge){H||(ge?mt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ge){vt!==ge&&!H&&(i.stencilMask(ge),vt=ge)},setFunc:function(ge,oi,Ci){(tt!==ge||ot!==oi||St!==Ci)&&(i.stencilFunc(ge,oi,Ci),tt=ge,ot=oi,St=Ci)},setOp:function(ge,oi,Ci){(wt!==ge||Xt!==oi||De!==Ci)&&(i.stencilOp(ge,oi,Ci),wt=ge,Xt=oi,De=Ci)},setLocked:function(ge){H=ge},setClear:function(ge){Ke!==ge&&(i.clearStencil(ge),Ke=ge)},reset:function(){H=!1,vt=null,tt=null,ot=null,St=null,wt=null,Xt=null,De=null,Ke=null}}}const o=new e,r=new n,a=new s,u=new WeakMap,l=new WeakMap;let c={},h={},f=new WeakMap,p=[],m=null,x=!1,d=null,g=null,S=null,_=null,w=null,A=null,E=null,T=new rt(0,0,0),b=0,y=!1,M=null,R=null,L=null,D=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),k=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),k=O>=2);let it=null,ut={};const ft=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Wt=new _e().fromArray(ft),et=new _e().fromArray(Pt);function lt(H,vt,tt,ot){const St=new Uint8Array(4),wt=i.createTexture();i.bindTexture(H,wt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<tt;Xt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(vt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return wt}const yt={};yt[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),r.setFunc(Ko),ne(!1),ie(Yf),mt(i.CULL_FACE),G(Vi);function mt(H){c[H]!==!0&&(i.enable(H),c[H]=!0)}function zt(H){c[H]!==!1&&(i.disable(H),c[H]=!1)}function Ot(H,vt){return h[H]!==vt?(i.bindFramebuffer(H,vt),h[H]=vt,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function $t(H,vt){let tt=p,ot=!1;if(H){tt=f.get(vt),tt===void 0&&(tt=[],f.set(vt,tt));const St=H.textures;if(tt.length!==St.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Xt=St.length;wt<Xt;wt++)tt[wt]=i.COLOR_ATTACHMENT0+wt;tt.length=St.length,ot=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ot=!0);ot&&i.drawBuffers(tt)}function Pe(H){return m!==H?(i.useProgram(H),m=H,!0):!1}const re={[Os]:i.FUNC_ADD,[$m]:i.FUNC_SUBTRACT,[jm]:i.FUNC_REVERSE_SUBTRACT};re[Jm]=i.MIN,re[Km]=i.MAX;const Oe={[Qm]:i.ZERO,[tg]:i.ONE,[eg]:i.SRC_COLOR,[_u]:i.SRC_ALPHA,[ag]:i.SRC_ALPHA_SATURATE,[og]:i.DST_COLOR,[ig]:i.DST_ALPHA,[ng]:i.ONE_MINUS_SRC_COLOR,[yu]:i.ONE_MINUS_SRC_ALPHA,[rg]:i.ONE_MINUS_DST_COLOR,[sg]:i.ONE_MINUS_DST_ALPHA,[cg]:i.CONSTANT_COLOR,[lg]:i.ONE_MINUS_CONSTANT_COLOR,[ug]:i.CONSTANT_ALPHA,[hg]:i.ONE_MINUS_CONSTANT_ALPHA};function G(H,vt,tt,ot,St,wt,Xt,De,Ke,ge){if(H===Vi){x===!0&&(zt(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),H!==Zm){if(H!==d||ge!==y){if((g!==Os||w!==Os)&&(i.blendEquation(i.FUNC_ADD),g=Os,w=Os),ge)switch(H){case Bo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFunc(i.ONE,i.ONE);break;case Zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $f:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $f:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}S=null,_=null,A=null,E=null,T.set(0,0,0),b=0,d=H,y=ge}return}St=St||vt,wt=wt||tt,Xt=Xt||ot,(vt!==g||St!==w)&&(i.blendEquationSeparate(re[vt],re[St]),g=vt,w=St),(tt!==S||ot!==_||wt!==A||Xt!==E)&&(i.blendFuncSeparate(Oe[tt],Oe[ot],Oe[wt],Oe[Xt]),S=tt,_=ot,A=wt,E=Xt),(De.equals(T)===!1||Ke!==b)&&(i.blendColor(De.r,De.g,De.b,Ke),T.copy(De),b=Ke),d=H,y=!1}function Yn(H,vt){H.side===Ct?zt(i.CULL_FACE):mt(i.CULL_FACE);let tt=H.side===rn;vt&&(tt=!tt),ne(tt),H.blending===Bo&&H.transparent===!1?G(Vi):G(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),o.setMask(H.colorWrite);const ot=H.stencilWrite;a.setTest(ot),ot&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Te(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(H){M!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),M=H)}function ie(H){H!==qm?(mt(i.CULL_FACE),H!==R&&(H===Yf?i.cullFace(i.BACK):H===Ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),R=H}function Dt(H){H!==L&&(k&&i.lineWidth(H),L=H)}function Te(H,vt,tt){H?(mt(i.POLYGON_OFFSET_FILL),(D!==vt||F!==tt)&&(i.polygonOffset(vt,tt),D=vt,F=tt)):zt(i.POLYGON_OFFSET_FILL)}function Lt(H){H?mt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function N(H){H===void 0&&(H=i.TEXTURE0+V-1),it!==H&&(i.activeTexture(H),it=H)}function P(H,vt,tt){tt===void 0&&(it===null?tt=i.TEXTURE0+V-1:tt=it);let ot=ut[tt];ot===void 0&&(ot={type:void 0,texture:void 0},ut[tt]=ot),(ot.type!==H||ot.texture!==vt)&&(it!==tt&&(i.activeTexture(tt),it=tt),i.bindTexture(H,vt||yt[H]),ot.type=H,ot.texture=vt)}function j(){const H=ut[it];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(H){Wt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Wt.copy(H))}function At(H){et.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),et.copy(H))}function se(H,vt){let tt=l.get(vt);tt===void 0&&(tt=new WeakMap,l.set(vt,tt));let ot=tt.get(H);ot===void 0&&(ot=i.getUniformBlockIndex(vt,H.name),tt.set(H,ot))}function Yt(H,vt){const ot=l.get(vt).get(H);u.get(vt)!==ot&&(i.uniformBlockBinding(vt,ot,H.__bindingPointIndex),u.set(vt,ot))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},it=null,ut={},h={},f=new WeakMap,p=[],m=null,x=!1,d=null,g=null,S=null,_=null,w=null,A=null,E=null,T=new rt(0,0,0),b=0,y=!1,M=null,R=null,L=null,D=null,F=null,Wt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:mt,disable:zt,bindFramebuffer:Ot,drawBuffers:$t,useProgram:Pe,setBlending:G,setMaterial:Yn,setFlipSided:ne,setCullFace:ie,setLineWidth:Dt,setPolygonOffset:Te,setScissorTest:Lt,activeTexture:N,bindTexture:P,unbindTexture:j,compressedTexImage2D:st,compressedTexImage3D:ct,texImage2D:Et,texImage3D:Ft,updateUBOMapping:se,uniformBlockBinding:Yt,texStorage2D:ae,texStorage3D:dt,texSubImage2D:nt,texSubImage3D:It,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Gt,viewport:At,reset:we}}function x1(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,P){return p?new OffscreenCanvas(N,P):Pc("canvas")}function x(N,P,j){let st=1;const ct=Lt(N);if((ct.width>j||ct.height>j)&&(st=j/Math.max(ct.width,ct.height)),st<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const nt=Math.floor(st*ct.width),It=Math.floor(st*ct.height);h===void 0&&(h=m(nt,It));const _t=P?m(nt,It):h;return _t.width=nt,_t.height=It,_t.getContext("2d").drawImage(N,0,0,nt,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+nt+"x"+It+")."),_t}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),N;return N}function d(N){return N.generateMipmaps}function g(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(N,P,j,st,ct=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let nt=P;if(P===i.RED&&(j===i.FLOAT&&(nt=i.R32F),j===i.HALF_FLOAT&&(nt=i.R16F),j===i.UNSIGNED_BYTE&&(nt=i.R8)),P===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(nt=i.R8UI),j===i.UNSIGNED_SHORT&&(nt=i.R16UI),j===i.UNSIGNED_INT&&(nt=i.R32UI),j===i.BYTE&&(nt=i.R8I),j===i.SHORT&&(nt=i.R16I),j===i.INT&&(nt=i.R32I)),P===i.RG&&(j===i.FLOAT&&(nt=i.RG32F),j===i.HALF_FLOAT&&(nt=i.RG16F),j===i.UNSIGNED_BYTE&&(nt=i.RG8)),P===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(nt=i.RG8UI),j===i.UNSIGNED_SHORT&&(nt=i.RG16UI),j===i.UNSIGNED_INT&&(nt=i.RG32UI),j===i.BYTE&&(nt=i.RG8I),j===i.SHORT&&(nt=i.RG16I),j===i.INT&&(nt=i.RG32I)),P===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),j===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),j===i.UNSIGNED_INT&&(nt=i.RGB32UI),j===i.BYTE&&(nt=i.RGB8I),j===i.SHORT&&(nt=i.RGB16I),j===i.INT&&(nt=i.RGB32I)),P===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),j===i.UNSIGNED_INT&&(nt=i.RGBA32UI),j===i.BYTE&&(nt=i.RGBA8I),j===i.SHORT&&(nt=i.RGBA16I),j===i.INT&&(nt=i.RGBA32I)),P===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),P===i.RGBA){const It=ct?Rc:he.getTransfer(st);j===i.FLOAT&&(nt=i.RGBA32F),j===i.HALF_FLOAT&&(nt=i.RGBA16F),j===i.UNSIGNED_BYTE&&(nt=It===ve?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function w(N,P){let j;return N?P===null||P===Zs||P===nr?j=i.DEPTH24_STENCIL8:P===bi?j=i.DEPTH32F_STENCIL8:P===Jr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Zs||P===nr?j=i.DEPTH_COMPONENT24:P===bi?j=i.DEPTH_COMPONENT32F:P===Jr&&(j=i.DEPTH_COMPONENT16),j}function A(N,P){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Wn&&N.minFilter!==Si?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function E(N){const P=N.target;P.removeEventListener("dispose",E),b(P),P.isVideoTexture&&c.delete(P)}function T(N){const P=N.target;P.removeEventListener("dispose",T),M(P)}function b(N){const P=n.get(N);if(P.__webglInit===void 0)return;const j=N.source,st=f.get(j);if(st){const ct=st[P.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&y(N),Object.keys(st).length===0&&f.delete(j)}n.remove(N)}function y(N){const P=n.get(N);i.deleteTexture(P.__webglTexture);const j=N.source,st=f.get(j);delete st[P.__cacheKey],r.memory.textures--}function M(N){const P=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(P.__webglFramebuffer[st]))for(let ct=0;ct<P.__webglFramebuffer[st].length;ct++)i.deleteFramebuffer(P.__webglFramebuffer[st][ct]);else i.deleteFramebuffer(P.__webglFramebuffer[st]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[st])}else{if(Array.isArray(P.__webglFramebuffer))for(let st=0;st<P.__webglFramebuffer.length;st++)i.deleteFramebuffer(P.__webglFramebuffer[st]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let st=0;st<P.__webglColorRenderbuffer.length;st++)P.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[st]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const j=N.textures;for(let st=0,ct=j.length;st<ct;st++){const nt=n.get(j[st]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),r.memory.textures--),n.remove(j[st])}n.remove(N)}let R=0;function L(){R=0}function D(){const N=R;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),R+=1,N}function F(N){const P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function V(N,P){const j=n.get(N);if(N.isVideoTexture&&Dt(N),N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){const st=N.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(j,N,P);return}}e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+P)}function k(N,P){const j=n.get(N);if(N.version>0&&j.__version!==N.version){et(j,N,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+P)}function O(N,P){const j=n.get(N);if(N.version>0&&j.__version!==N.version){et(j,N,P);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+P)}function B(N,P){const j=n.get(N);if(N.version>0&&j.__version!==N.version){lt(j,N,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+P)}const it={[er]:i.REPEAT,[Gs]:i.CLAMP_TO_EDGE,[Iu]:i.MIRRORED_REPEAT},ut={[Wn]:i.NEAREST,[_g]:i.NEAREST_MIPMAP_NEAREST,[ma]:i.NEAREST_MIPMAP_LINEAR,[Si]:i.LINEAR,[ll]:i.LINEAR_MIPMAP_NEAREST,[ks]:i.LINEAR_MIPMAP_LINEAR},ft={[bg]:i.NEVER,[Pg]:i.ALWAYS,[Tg]:i.LESS,[Q0]:i.LEQUAL,[Eg]:i.EQUAL,[Cg]:i.GEQUAL,[Ag]:i.GREATER,[Rg]:i.NOTEQUAL};function Pt(N,P){if(P.type===bi&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Si||P.magFilter===ll||P.magFilter===ma||P.magFilter===ks||P.minFilter===Si||P.minFilter===ll||P.minFilter===ma||P.minFilter===ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,it[P.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,it[P.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,it[P.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ut[P.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ut[P.minFilter]),P.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ft[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Wn||P.minFilter!==ma&&P.minFilter!==ks||P.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Wt(N,P){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",E));const st=P.source;let ct=f.get(st);ct===void 0&&(ct={},f.set(st,ct));const nt=F(P);if(nt!==N.__cacheKey){ct[nt]===void 0&&(ct[nt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,j=!0),ct[nt].usedTimes++;const It=ct[N.__cacheKey];It!==void 0&&(ct[N.__cacheKey].usedTimes--,It.usedTimes===0&&y(P)),N.__cacheKey=nt,N.__webglTexture=ct[nt].texture}return j}function et(N,P,j){let st=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(st=i.TEXTURE_3D);const ct=Wt(N,P),nt=P.source;e.bindTexture(st,N.__webglTexture,i.TEXTURE0+j);const It=n.get(nt);if(nt.version!==It.__version||ct===!0){e.activeTexture(i.TEXTURE0+j);const _t=he.getPrimaries(he.workingColorSpace),Tt=P.colorSpace===us?null:he.getPrimaries(P.colorSpace),ae=P.colorSpace===us||_t===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let dt=x(P.image,!1,s.maxTextureSize);dt=Te(P,dt);const Et=o.convert(P.format,P.colorSpace),Ft=o.convert(P.type);let Gt=_(P.internalFormat,Et,Ft,P.colorSpace,P.isVideoTexture);Pt(st,P);let At;const se=P.mipmaps,Yt=P.isVideoTexture!==!0,we=It.__version===void 0||ct===!0,H=nt.dataReady,vt=A(P,dt);if(P.isDepthTexture)Gt=w(P.format===ir,P.type),we&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Gt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Ft,null));else if(P.isDataTexture)if(se.length>0){Yt&&we&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,se[0].width,se[0].height);for(let tt=0,ot=se.length;tt<ot;tt++)At=se[tt],Yt?H&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Ft,At.data):e.texImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,Et,Ft,At.data);P.generateMipmaps=!1}else Yt?(we&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt.width,dt.height,Et,Ft,dt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,dt.width,dt.height,0,Et,Ft,dt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Yt&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,se[0].width,se[0].height,dt.depth);for(let tt=0,ot=se.length;tt<ot;tt++)if(At=se[tt],P.format!==hi)if(Et!==null)if(Yt){if(H)if(P.layerUpdates.size>0){const St=Dd(At.width,At.height,P.format,P.type);for(const wt of P.layerUpdates){const Xt=At.data.subarray(wt*St/At.data.BYTES_PER_ELEMENT,(wt+1)*St/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,wt,At.width,At.height,1,Et,Xt)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,dt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Gt,At.width,At.height,dt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,At.width,At.height,dt.depth,Et,Ft,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Gt,At.width,At.height,dt.depth,0,Et,Ft,At.data)}else{Yt&&we&&e.texStorage2D(i.TEXTURE_2D,vt,Gt,se[0].width,se[0].height);for(let tt=0,ot=se.length;tt<ot;tt++)At=se[tt],P.format!==hi?Et!==null?Yt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?H&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,At.width,At.height,Et,Ft,At.data):e.texImage2D(i.TEXTURE_2D,tt,Gt,At.width,At.height,0,Et,Ft,At.data)}else if(P.isDataArrayTexture)if(Yt){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Gt,dt.width,dt.height,dt.depth),H)if(P.layerUpdates.size>0){const tt=Dd(dt.width,dt.height,P.format,P.type);for(const ot of P.layerUpdates){const St=dt.data.subarray(ot*tt/dt.data.BYTES_PER_ELEMENT,(ot+1)*tt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,dt.width,dt.height,1,Et,Ft,St)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Et,Ft,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,dt.width,dt.height,dt.depth,0,Et,Ft,dt.data);else if(P.isData3DTexture)Yt?(we&&e.texStorage3D(i.TEXTURE_3D,vt,Gt,dt.width,dt.height,dt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Et,Ft,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,dt.width,dt.height,dt.depth,0,Et,Ft,dt.data);else if(P.isFramebufferTexture){if(we)if(Yt)e.texStorage2D(i.TEXTURE_2D,vt,Gt,dt.width,dt.height);else{let tt=dt.width,ot=dt.height;for(let St=0;St<vt;St++)e.texImage2D(i.TEXTURE_2D,St,Gt,tt,ot,0,Et,Ft,null),tt>>=1,ot>>=1}}else if(se.length>0){if(Yt&&we){const tt=Lt(se[0]);e.texStorage2D(i.TEXTURE_2D,vt,Gt,tt.width,tt.height)}for(let tt=0,ot=se.length;tt<ot;tt++)At=se[tt],Yt?H&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Et,Ft,At):e.texImage2D(i.TEXTURE_2D,tt,Gt,Et,Ft,At);P.generateMipmaps=!1}else if(Yt){if(we){const tt=Lt(dt);e.texStorage2D(i.TEXTURE_2D,vt,Gt,tt.width,tt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ft,dt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Et,Ft,dt);d(P)&&g(st),It.__version=nt.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function lt(N,P,j){if(P.image.length!==6)return;const st=Wt(N,P),ct=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+j);const nt=n.get(ct);if(ct.version!==nt.__version||st===!0){e.activeTexture(i.TEXTURE0+j);const It=he.getPrimaries(he.workingColorSpace),_t=P.colorSpace===us?null:he.getPrimaries(P.colorSpace),Tt=P.colorSpace===us||It===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const ae=P.isCompressedTexture||P.image[0].isCompressedTexture,dt=P.image[0]&&P.image[0].isDataTexture,Et=[];for(let ot=0;ot<6;ot++)!ae&&!dt?Et[ot]=x(P.image[ot],!0,s.maxCubemapSize):Et[ot]=dt?P.image[ot].image:P.image[ot],Et[ot]=Te(P,Et[ot]);const Ft=Et[0],Gt=o.convert(P.format,P.colorSpace),At=o.convert(P.type),se=_(P.internalFormat,Gt,At,P.colorSpace),Yt=P.isVideoTexture!==!0,we=nt.__version===void 0||st===!0,H=ct.dataReady;let vt=A(P,Ft);Pt(i.TEXTURE_CUBE_MAP,P);let tt;if(ae){Yt&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,se,Ft.width,Ft.height);for(let ot=0;ot<6;ot++){tt=Et[ot].mipmaps;for(let St=0;St<tt.length;St++){const wt=tt[St];P.format!==hi?Gt!==null?Yt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,wt.width,wt.height,Gt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,se,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,0,0,wt.width,wt.height,Gt,At,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St,se,wt.width,wt.height,0,Gt,At,wt.data)}}}else{if(tt=P.mipmaps,Yt&&we){tt.length>0&&vt++;const ot=Lt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,se,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(dt){Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Et[ot].width,Et[ot].height,Gt,At,Et[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,se,Et[ot].width,Et[ot].height,0,Gt,At,Et[ot].data);for(let St=0;St<tt.length;St++){const Xt=tt[St].image[ot].image;Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Xt.width,Xt.height,Gt,At,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,se,Xt.width,Xt.height,0,Gt,At,Xt.data)}}else{Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Gt,At,Et[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,se,Gt,At,Et[ot]);for(let St=0;St<tt.length;St++){const wt=tt[St];Yt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,0,0,Gt,At,wt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,St+1,se,Gt,At,wt.image[ot])}}}d(P)&&g(i.TEXTURE_CUBE_MAP),nt.__version=ct.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function yt(N,P,j,st,ct,nt){const It=o.convert(j.format,j.colorSpace),_t=o.convert(j.type),Tt=_(j.internalFormat,It,_t,j.colorSpace),ae=n.get(P),dt=n.get(j);if(dt.__renderTarget=P,!ae.__hasExternalTextures){const Et=Math.max(1,P.width>>nt),Ft=Math.max(1,P.height>>nt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,nt,Tt,Et,Ft,P.depth,0,It,_t,null):e.texImage2D(ct,nt,Tt,Et,Ft,0,It,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),ie(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ct,dt.__webglTexture,0,ne(P)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ct,dt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(N,P,j){if(i.bindRenderbuffer(i.RENDERBUFFER,N),P.depthBuffer){const st=P.depthTexture,ct=st&&st.isDepthTexture?st.type:null,nt=w(P.stencilBuffer,ct),It=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ne(P);ie(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,nt,P.width,P.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,nt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,nt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,N)}else{const st=P.textures;for(let ct=0;ct<st.length;ct++){const nt=st[ct],It=o.convert(nt.format,nt.colorSpace),_t=o.convert(nt.type),Tt=_(nt.internalFormat,It,_t,nt.colorSpace),ae=ne(P);j&&ie(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Tt,P.width,P.height):ie(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Tt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(N,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(P.depthTexture);st.__renderTarget=P,(!st.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),V(P.depthTexture,0);const ct=st.__webglTexture,nt=ne(P);if(P.depthTexture.format===Go)ie(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(P.depthTexture.format===ir)ie(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Ot(N){const P=n.get(N),j=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){const st=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),st){const ct=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,st.removeEventListener("dispose",ct)};st.addEventListener("dispose",ct),P.__depthDisposeCallback=ct}P.__boundDepthTexture=st}if(N.depthTexture&&!P.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");zt(P.__webglFramebuffer,N)}else if(j){P.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[st]),P.__webglDepthbuffer[st]===void 0)P.__webglDepthbuffer[st]=i.createRenderbuffer(),mt(P.__webglDepthbuffer[st],N,!1);else{const ct=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=P.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),mt(P.__webglDepthbuffer,N,!1);else{const st=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(N,P,j){const st=n.get(N);P!==void 0&&yt(st.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Ot(N)}function Pe(N){const P=N.texture,j=n.get(N),st=n.get(P);N.addEventListener("dispose",T);const ct=N.textures,nt=N.isWebGLCubeRenderTarget===!0,It=ct.length>1;if(It||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=P.version,r.memory.textures++),nt){j.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0){j.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<P.mipmaps.length;Tt++)j.__webglFramebuffer[_t][Tt]=i.createFramebuffer()}else j.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){j.__webglFramebuffer=[];for(let _t=0;_t<P.mipmaps.length;_t++)j.__webglFramebuffer[_t]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(It)for(let _t=0,Tt=ct.length;_t<Tt;_t++){const ae=n.get(ct[_t]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),r.memory.textures++)}if(N.samples>0&&ie(N)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let _t=0;_t<ct.length;_t++){const Tt=ct[_t];j.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[_t]);const ae=o.convert(Tt.format,Tt.colorSpace),dt=o.convert(Tt.type),Et=_(Tt.internalFormat,ae,dt,Tt.colorSpace,N.isXRRenderTarget===!0),Ft=ne(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,j.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(j.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,P);for(let _t=0;_t<6;_t++)if(P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)yt(j.__webglFramebuffer[_t][Tt],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else yt(j.__webglFramebuffer[_t],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);d(P)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let _t=0,Tt=ct.length;_t<Tt;_t++){const ae=ct[_t],dt=n.get(ae);e.bindTexture(i.TEXTURE_2D,dt.__webglTexture),Pt(i.TEXTURE_2D,ae),yt(j.__webglFramebuffer,N,ae,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),d(ae)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(_t=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),Pt(_t,P),P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)yt(j.__webglFramebuffer[Tt],N,P,i.COLOR_ATTACHMENT0,_t,Tt);else yt(j.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0,_t,0);d(P)&&g(_t),e.unbindTexture()}N.depthBuffer&&Ot(N)}function re(N){const P=N.textures;for(let j=0,st=P.length;j<st;j++){const ct=P[j];if(d(ct)){const nt=S(N),It=n.get(ct).__webglTexture;e.bindTexture(nt,It),g(nt),e.unbindTexture()}}}const Oe=[],G=[];function Yn(N){if(N.samples>0){if(ie(N)===!1){const P=N.textures,j=N.width,st=N.height;let ct=i.COLOR_BUFFER_BIT;const nt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(N),_t=P.length>1;if(_t)for(let Tt=0;Tt<P.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Tt=0;Tt<P.length;Tt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);const ae=n.get(P[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,j,st,0,0,j,st,ct,i.NEAREST),u===!0&&(Oe.length=0,G.length=0,Oe.push(i.COLOR_ATTACHMENT0+Tt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Oe.push(nt),G.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<P.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Tt]);const ae=n.get(P[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,ae,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&u){const P=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function ne(N){return Math.min(s.maxSamples,N.samples)}function ie(N){const P=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Dt(N){const P=r.render.frame;c.get(N)!==P&&(c.set(N,P),N.update())}function Te(N,P){const j=N.colorSpace,st=N.format,ct=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==sr&&j!==us&&(he.getTransfer(j)===ve?(st!==hi||ct!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),P}function Lt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=B,this.rebindTextures=$t,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Yn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ie}function v1(i,t){function e(n,s=us){let o;const r=he.getTransfer(s);if(n===$i)return i.UNSIGNED_BYTE;if(n===uf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===X0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===V0)return i.BYTE;if(n===W0)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===lf)return i.INT;if(n===Zs)return i.UNSIGNED_INT;if(n===bi)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===q0)return i.ALPHA;if(n===Y0)return i.RGB;if(n===hi)return i.RGBA;if(n===Z0)return i.LUMINANCE;if(n===$0)return i.LUMINANCE_ALPHA;if(n===Go)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===ff)return i.RED;if(n===df)return i.RED_INTEGER;if(n===j0)return i.RG;if(n===pf)return i.RG_INTEGER;if(n===mf)return i.RGBA_INTEGER;if(n===lc||n===uc||n===hc||n===fc)if(r===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===lc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===lc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lu||n===Du||n===Uu||n===Nu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Du)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zu||n===Fu||n===Ou)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===zu||n===Fu)return r===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ou)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bu||n===Gu||n===ku||n===Hu||n===Vu||n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===$u||n===ju||n===Ju||n===Ku)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Bu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ku)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zu)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$u)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ju)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ju)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ku)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===Qu||n===th)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===dc)return r===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===th)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===J0||n===eh||n===nh||n===ih)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===dc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===eh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ih)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const M1={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,u=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const d=e.getJointPose(x,n),g=this._getHandJoint(l,x);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return a!==null&&(a.visible=s!==null),u!==null&&(u.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
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

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new an,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pn({vertexShader:_1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new C(new oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S1 extends dr{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",u=1,l=null,c=null,h=null,f=null,p=null,m=null;const x=new w1,d=e.getContextAttributes();let g=null,S=null;const _=[],w=[],A=new pt;let E=null;const T=new On;T.viewport=new _e;const b=new On;b.viewport=new _e;const y=[T,b],M=new Wx;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let lt=_[et];return lt===void 0&&(lt=new Xl,_[et]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(et){let lt=_[et];return lt===void 0&&(lt=new Xl,_[et]=lt),lt.getGripSpace()},this.getHand=function(et){let lt=_[et];return lt===void 0&&(lt=new Xl,_[et]=lt),lt.getHandSpace()};function D(et){const lt=w.indexOf(et.inputSource);if(lt===-1)return;const yt=_[lt];yt!==void 0&&(yt.update(et.inputSource,et.frame,l||r),yt.dispatchEvent({type:et.type,data:et.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",V);for(let et=0;et<_.length;et++){const lt=w[et];lt!==null&&(w[et]=null,_[et].disconnect(lt))}R=null,L=null,x.reset(),t.setRenderTarget(g),p=null,f=null,h=null,s=null,S=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",V),d.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let yt=null,mt=null,zt=null;d.depth&&(zt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=d.stencil?ir:Go,mt=d.stencil?nr:Zs);const Ot={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:o};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new fi(f.textureWidth,f.textureHeight,{format:hi,type:$i,depthTexture:new pp(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new fi(p.framebufferWidth,p.framebufferHeight,{format:hi,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}S.isXRRenderTarget=!0,this.setFoveation(u),l=null,r=await s.requestReferenceSpace(a),Wt.setContext(s),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(et){for(let lt=0;lt<et.removed.length;lt++){const yt=et.removed[lt],mt=w.indexOf(yt);mt>=0&&(w[mt]=null,_[mt].disconnect(yt))}for(let lt=0;lt<et.added.length;lt++){const yt=et.added[lt];let mt=w.indexOf(yt);if(mt===-1){for(let Ot=0;Ot<_.length;Ot++)if(Ot>=w.length){w.push(yt),mt=Ot;break}else if(w[Ot]===null){w[Ot]=yt,mt=Ot;break}if(mt===-1)break}const zt=_[mt];zt&&zt.connect(yt)}}const k=new z,O=new z;function B(et,lt,yt){k.setFromMatrixPosition(lt.matrixWorld),O.setFromMatrixPosition(yt.matrixWorld);const mt=k.distanceTo(O),zt=lt.projectionMatrix.elements,Ot=yt.projectionMatrix.elements,$t=zt[14]/(zt[10]-1),Pe=zt[14]/(zt[10]+1),re=(zt[9]+1)/zt[5],Oe=(zt[9]-1)/zt[5],G=(zt[8]-1)/zt[0],Yn=(Ot[8]+1)/Ot[0],ne=$t*G,ie=$t*Yn,Dt=mt/(-G+Yn),Te=Dt*-G;if(lt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Te),et.translateZ(Dt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),zt[10]===-1)et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Lt=$t+Dt,N=Pe+Dt,P=ne-Te,j=ie+(mt-Te),st=re*Pe/N*Lt,ct=Oe*Pe/N*Lt;et.projectionMatrix.makePerspective(P,j,st,ct,Lt,N),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function it(et,lt){lt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(lt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let lt=et.near,yt=et.far;x.texture!==null&&(x.depthNear>0&&(lt=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),M.near=b.near=T.near=lt,M.far=b.far=T.far=yt,(R!==M.near||L!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,L=M.far),T.layers.mask=et.layers.mask|2,b.layers.mask=et.layers.mask|4,M.layers.mask=T.layers.mask|b.layers.mask;const mt=et.parent,zt=M.cameras;it(M,mt);for(let Ot=0;Ot<zt.length;Ot++)it(zt[Ot],mt);zt.length===2?B(M,T,b):M.projectionMatrix.copy(T.projectionMatrix),ut(et,M,mt)};function ut(et,lt,yt){yt===null?et.matrix.copy(lt.matrixWorld):(et.matrix.copy(yt.matrixWorld),et.matrix.invert(),et.matrix.multiply(lt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=oh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return u},this.setFoveation=function(et){u=et,f!==null&&(f.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ft=null;function Pt(et,lt){if(c=lt.getViewerPose(l||r),m=lt,c!==null){const yt=c.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let mt=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let Ot=0;Ot<yt.length;Ot++){const $t=yt[Ot];let Pe=null;if(p!==null)Pe=p.getViewport($t);else{const Oe=h.getViewSubImage(f,$t);Pe=Oe.viewport,Ot===0&&(t.setRenderTargetTextures(S,Oe.colorTexture,f.ignoreDepthValues?void 0:Oe.depthStencilTexture),t.setRenderTarget(S))}let re=y[Ot];re===void 0&&(re=new On,re.layers.enable(Ot),re.viewport=new _e,y[Ot]=re),re.matrix.fromArray($t.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray($t.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Ot===0&&(M.matrix.copy(re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(re)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Ot=h.getDepthInformation(yt[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,s.renderState)}}for(let yt=0;yt<_.length;yt++){const mt=w[yt],zt=_[yt];mt!==null&&zt!==void 0&&zt.update(mt,lt,l||r)}ft&&ft(et,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),m=null}const Wt=new Tp;Wt.setAnimationLoop(Pt),this.setAnimationLoop=function(et){ft=et},this.dispose=function(){}}}const Es=new Ei,b1=new me;function T1(i,t){function e(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function n(d,g){g.color.getRGB(d.fogColor.value,ap(i)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function s(d,g,S,_,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(d,g):g.isMeshToonMaterial?(o(d,g),h(d,g)):g.isMeshPhongMaterial?(o(d,g),c(d,g)):g.isMeshStandardMaterial?(o(d,g),f(d,g),g.isMeshPhysicalMaterial&&p(d,g,w)):g.isMeshMatcapMaterial?(o(d,g),m(d,g)):g.isMeshDepthMaterial?o(d,g):g.isMeshDistanceMaterial?(o(d,g),x(d,g)):g.isMeshNormalMaterial?o(d,g):g.isLineBasicMaterial?(r(d,g),g.isLineDashedMaterial&&a(d,g)):g.isPointsMaterial?u(d,g,S,_):g.isSpriteMaterial?l(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,e(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===rn&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,e(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===rn&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,e(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,e(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);const S=t.get(g),_=S.envMap,w=S.envMapRotation;_&&(d.envMap.value=_,Es.copy(w),Es.x*=-1,Es.y*=-1,Es.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),d.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(Es)),d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap&&(d.lightMap.value=g.lightMap,d.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,d.lightMapTransform)),g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,d.aoMapTransform))}function r(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform))}function a(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function u(d,g,S,_){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*S,d.scale.value=_*.5,g.map&&(d.map.value=g.map,e(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function l(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,e(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,e(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function c(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function h(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function f(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,d.roughnessMapTransform)),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function p(d,g,S){d.ior.value=g.ior,g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&d.clearcoatNormalScale.value.negate())),g.dispersion>0&&(d.dispersion.value=g.dispersion),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function x(d,g){const S=t.get(g).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E1(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,_){const w=_.program;n.uniformBlockBinding(S,w)}function l(S,_){let w=s[S.id];w===void 0&&(m(S),w=c(S),s[S.id]=w,S.addEventListener("dispose",d));const A=_.program;n.updateUBOMapping(S,A);const E=t.render.frame;o[S.id]!==E&&(f(S),o[S.id]=E)}function c(S){const _=h();S.__bindingPointIndex=_;const w=i.createBuffer(),A=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function h(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const _=s[S.id],w=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,T=w.length;E<T;E++){const b=Array.isArray(w[E])?w[E]:[w[E]];for(let y=0,M=b.length;y<M;y++){const R=b[y];if(p(R,E,y,A)===!0){const L=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let V=0;V<D.length;V++){const k=D[V],O=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,L+F,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,_,w,A){const E=S.value,T=_+"_"+w;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const b=A[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return A[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function m(S){const _=S.uniforms;let w=0;const A=16;for(let T=0,b=_.length;T<b;T++){const y=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,R=y.length;M<R;M++){const L=y[M],D=Array.isArray(L.value)?L.value:[L.value];for(let F=0,V=D.length;F<V;F++){const k=D[F],O=x(k),B=w%A,it=B%O.boundary,ut=B+it;w+=it,ut!==0&&A-ut<O.storage&&(w+=A-ut),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=O.storage}}}const E=w%A;return E>0&&(w+=A-E),S.__size=w,S.__cache={},this}function x(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function d(S){const _=S.target;_.removeEventListener("dispose",d);const w=r.indexOf(_.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:u,update:l,dispose:g}}class A1{constructor(t={}){const{canvas:e=Lg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const m=new Uint32Array(4),x=new Int32Array(4);let d=null,g=null;const S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=ms,this.toneMappingExposure=1;const w=this;let A=!1,E=0,T=0,b=null,y=-1,M=null;const R=new _e,L=new _e;let D=null;const F=new rt(0);let V=0,k=e.width,O=e.height,B=1,it=null,ut=null;const ft=new _e(0,0,k,O),Pt=new _e(0,0,k,O);let Wt=!1;const et=new vf;let lt=!1,yt=!1;this.transmissionResolutionScale=1;const mt=new me,zt=new me,Ot=new z,$t=new _e,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Oe(){return b===null?B:1}let G=n;function Yn(I,W){return e.getContext(I,W)}try{const I={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cf}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),G===null){const W="webgl2";if(G=Yn(W,I),G===null)throw Yn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ne,ie,Dt,Te,Lt,N,P,j,st,ct,nt,It,_t,Tt,ae,dt,Et,Ft,Gt,At,se,Yt,we,H;function vt(){ne=new z_(G),ne.init(),Yt=new v1(G,ne),ie=new P_(G,ne,t,Yt),Dt=new g1(G,ne),ie.reverseDepthBuffer&&f&&Dt.buffers.depth.setReversed(!0),Te=new B_(G),Lt=new i1,N=new x1(G,ne,Dt,Lt,ie,Yt,Te),P=new L_(w),j=new N_(w),st=new qx(G),we=new R_(G,st),ct=new F_(G,st,Te,we),nt=new k_(G,ct,st,Te),Gt=new G_(G,ie,N),dt=new I_(Lt),It=new n1(w,P,j,ne,ie,we,dt),_t=new T1(w,Lt),Tt=new o1,ae=new h1(ne),Ft=new A_(w,P,j,Dt,nt,p,u),Et=new p1(w,nt,ie),H=new E1(G,Te,ie,Dt),At=new C_(G,ne,Te),se=new O_(G,ne,Te),Te.programs=It.programs,w.capabilities=ie,w.extensions=ne,w.properties=Lt,w.renderLists=Tt,w.shadowMap=Et,w.state=Dt,w.info=Te}vt();const tt=new S1(w,G);this.xr=tt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const I=ne.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ne.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(I){I!==void 0&&(B=I,this.setSize(k,O,!1))},this.getSize=function(I){return I.set(k,O)},this.setSize=function(I,W,K=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=I,O=W,e.width=Math.floor(I*B),e.height=Math.floor(W*B),K===!0&&(e.style.width=I+"px",e.style.height=W+"px"),this.setViewport(0,0,I,W)},this.getDrawingBufferSize=function(I){return I.set(k*B,O*B).floor()},this.setDrawingBufferSize=function(I,W,K){k=I,O=W,B=K,e.width=Math.floor(I*K),e.height=Math.floor(W*K),this.setViewport(0,0,I,W)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy(ft)},this.setViewport=function(I,W,K,Q){I.isVector4?ft.set(I.x,I.y,I.z,I.w):ft.set(I,W,K,Q),Dt.viewport(R.copy(ft).multiplyScalar(B).round())},this.getScissor=function(I){return I.copy(Pt)},this.setScissor=function(I,W,K,Q){I.isVector4?Pt.set(I.x,I.y,I.z,I.w):Pt.set(I,W,K,Q),Dt.scissor(L.copy(Pt).multiplyScalar(B).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(I){Dt.setScissorTest(Wt=I)},this.setOpaqueSort=function(I){it=I},this.setTransparentSort=function(I){ut=I},this.getClearColor=function(I){return I.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(I=!0,W=!0,K=!0){let Q=0;if(I){let X=!1;if(b!==null){const ht=b.texture.format;X=ht===mf||ht===pf||ht===df}if(X){const ht=b.texture.type,Mt=ht===$i||ht===Zs||ht===Jr||ht===nr||ht===uf||ht===hf,bt=Ft.getClearColor(),Rt=Ft.getClearAlpha(),kt=bt.r,Ht=bt.g,Ut=bt.b;Mt?(m[0]=kt,m[1]=Ht,m[2]=Ut,m[3]=Rt,G.clearBufferuiv(G.COLOR,0,m)):(x[0]=kt,x[1]=Ht,x[2]=Ut,x[3]=Rt,G.clearBufferiv(G.COLOR,0,x))}else Q|=G.COLOR_BUFFER_BIT}W&&(Q|=G.DEPTH_BUFFER_BIT),K&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Ft.dispose(),Tt.dispose(),ae.dispose(),Lt.dispose(),P.dispose(),j.dispose(),nt.dispose(),we.dispose(),H.dispose(),It.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Gf),tt.removeEventListener("sessionend",kf),Ms.stop()};function ot(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const I=Te.autoReset,W=Et.enabled,K=Et.autoUpdate,Q=Et.needsUpdate,X=Et.type;vt(),Te.autoReset=I,Et.enabled=W,Et.autoUpdate=K,Et.needsUpdate=Q,Et.type=X}function wt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Xt(I){const W=I.target;W.removeEventListener("dispose",Xt),De(W)}function De(I){Ke(I),Lt.remove(I)}function Ke(I){const W=Lt.get(I).programs;W!==void 0&&(W.forEach(function(K){It.releaseProgram(K)}),I.isShaderMaterial&&It.releaseShaderCache(I))}this.renderBufferDirect=function(I,W,K,Q,X,ht){W===null&&(W=Pe);const Mt=X.isMesh&&X.matrixWorld.determinant()<0,bt=Gm(I,W,K,Q,X);Dt.setMaterial(Q,Mt);let Rt=K.index,kt=1;if(Q.wireframe===!0){if(Rt=ct.getWireframeAttribute(K),Rt===void 0)return;kt=2}const Ht=K.drawRange,Ut=K.attributes.position;let ce=Ht.start*kt,de=(Ht.start+Ht.count)*kt;ht!==null&&(ce=Math.max(ce,ht.start*kt),de=Math.min(de,(ht.start+ht.count)*kt)),Rt!==null?(ce=Math.max(ce,0),de=Math.min(de,Rt.count)):Ut!=null&&(ce=Math.max(ce,0),de=Math.min(de,Ut.count));const ke=de-ce;if(ke<0||ke===1/0)return;we.setup(X,Q,bt,K,Rt);let Ue,ue=At;if(Rt!==null&&(Ue=st.get(Rt),ue=se,ue.setIndex(Ue)),X.isMesh)Q.wireframe===!0?(Dt.setLineWidth(Q.wireframeLinewidth*Oe()),ue.setMode(G.LINES)):ue.setMode(G.TRIANGLES);else if(X.isLine){let Nt=Q.linewidth;Nt===void 0&&(Nt=1),Dt.setLineWidth(Nt*Oe()),X.isLineSegments?ue.setMode(G.LINES):X.isLineLoop?ue.setMode(G.LINE_LOOP):ue.setMode(G.LINE_STRIP)}else X.isPoints?ue.setMode(G.POINTS):X.isSprite&&ue.setMode(G.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ue.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ue.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Nt=X._multiDrawStarts,$e=X._multiDrawCounts,pe=X._multiDrawCount,ri=Rt?st.get(Rt).bytesPerElement:1,eo=Lt.get(Q).currentProgram.getUniforms();for(let Un=0;Un<pe;Un++)eo.setValue(G,"_gl_DrawID",Un),ue.render(Nt[Un]/ri,$e[Un])}else if(X.isInstancedMesh)ue.renderInstances(ce,ke,X.count);else if(K.isInstancedBufferGeometry){const Nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,$e=Math.min(K.instanceCount,Nt);ue.renderInstances(ce,ke,$e)}else ue.render(ce,ke)};function ge(I,W,K){I.transparent===!0&&I.side===Ct&&I.forceSinglePass===!1?(I.side=rn,I.needsUpdate=!0,pa(I,W,K),I.side=xs,I.needsUpdate=!0,pa(I,W,K),I.side=Ct):pa(I,W,K)}this.compile=function(I,W,K=null){K===null&&(K=I),g=ae.get(K),g.init(W),_.push(g),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),I!==K&&I.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const Q=new Set;return I.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ht=X.material;if(ht)if(Array.isArray(ht))for(let Mt=0;Mt<ht.length;Mt++){const bt=ht[Mt];ge(bt,K,X),Q.add(bt)}else ge(ht,K,X),Q.add(ht)}),_.pop(),g=null,Q},this.compileAsync=function(I,W,K=null){const Q=this.compile(I,W,K);return new Promise(X=>{function ht(){if(Q.forEach(function(Mt){Lt.get(Mt).currentProgram.isReady()&&Q.delete(Mt)}),Q.size===0){X(I);return}setTimeout(ht,10)}ne.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let oi=null;function Ci(I){oi&&oi(I)}function Gf(){Ms.stop()}function kf(){Ms.start()}const Ms=new Tp;Ms.setAnimationLoop(Ci),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(I){oi=I,tt.setAnimationLoop(I),I===null?Ms.stop():Ms.start()},tt.addEventListener("sessionstart",Gf),tt.addEventListener("sessionend",kf),this.render=function(I,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(W),W=tt.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,W,b),g=ae.get(I,_.length),g.init(W),_.push(g),zt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),et.setFromProjectionMatrix(zt),yt=this.localClippingEnabled,lt=dt.init(this.clippingPlanes,yt),d=Tt.get(I,S.length),d.init(),S.push(d),tt.enabled===!0&&tt.isPresenting===!0){const ht=w.xr.getDepthSensingMesh();ht!==null&&al(ht,W,-1/0,w.sortObjects)}al(I,W,0,w.sortObjects),d.finish(),w.sortObjects===!0&&d.sort(it,ut),re=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,re&&Ft.addToRenderList(d,I),this.info.render.frame++,lt===!0&&dt.beginShadows();const K=g.state.shadowsArray;Et.render(K,I,W),lt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=d.opaque,X=d.transmissive;if(g.setupLights(),W.isArrayCamera){const ht=W.cameras;if(X.length>0)for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];Vf(Q,X,I,Rt)}re&&Ft.render(I);for(let Mt=0,bt=ht.length;Mt<bt;Mt++){const Rt=ht[Mt];Hf(d,I,Rt,Rt.viewport)}}else X.length>0&&Vf(Q,X,I,W),re&&Ft.render(I),Hf(d,I,W);b!==null&&T===0&&(N.updateMultisampleRenderTarget(b),N.updateRenderTargetMipmap(b)),I.isScene===!0&&I.onAfterRender(w,I,W),we.resetDefaultState(),y=-1,M=null,_.pop(),_.length>0?(g=_[_.length-1],lt===!0&&dt.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,S.pop(),S.length>0?d=S[S.length-1]:d=null};function al(I,W,K,Q){if(I.visible===!1)return;if(I.layers.test(W.layers)){if(I.isGroup)K=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(W);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||et.intersectsSprite(I)){Q&&$t.setFromMatrixPosition(I.matrixWorld).applyMatrix4(zt);const Mt=nt.update(I),bt=I.material;bt.visible&&d.push(I,Mt,bt,K,$t.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||et.intersectsObject(I))){const Mt=nt.update(I),bt=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),$t.copy(I.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),$t.copy(Mt.boundingSphere.center)),$t.applyMatrix4(I.matrixWorld).applyMatrix4(zt)),Array.isArray(bt)){const Rt=Mt.groups;for(let kt=0,Ht=Rt.length;kt<Ht;kt++){const Ut=Rt[kt],ce=bt[Ut.materialIndex];ce&&ce.visible&&d.push(I,Mt,ce,K,$t.z,Ut)}}else bt.visible&&d.push(I,Mt,bt,K,$t.z,null)}}const ht=I.children;for(let Mt=0,bt=ht.length;Mt<bt;Mt++)al(ht[Mt],W,K,Q)}function Hf(I,W,K,Q){const X=I.opaque,ht=I.transmissive,Mt=I.transparent;g.setupLightsView(K),lt===!0&&dt.setGlobalState(w.clippingPlanes,K),Q&&Dt.viewport(R.copy(Q)),X.length>0&&da(X,W,K),ht.length>0&&da(ht,W,K),Mt.length>0&&da(Mt,W,K),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Vf(I,W,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new fi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Wi:$i,minFilter:ks,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ht=g.state.transmissionRenderTarget[Q.id],Mt=Q.viewport||R;ht.setSize(Mt.z*w.transmissionResolutionScale,Mt.w*w.transmissionResolutionScale);const bt=w.getRenderTarget();w.setRenderTarget(ht),w.getClearColor(F),V=w.getClearAlpha(),V<1&&w.setClearColor(16777215,.5),w.clear(),re&&Ft.render(K);const Rt=w.toneMapping;w.toneMapping=ms;const kt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),lt===!0&&dt.setGlobalState(w.clippingPlanes,Q),da(I,K,Q),N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ut=0,ce=W.length;Ut<ce;Ut++){const de=W[Ut],ke=de.object,Ue=de.geometry,ue=de.material,Nt=de.group;if(ue.side===Ct&&ke.layers.test(Q.layers)){const $e=ue.side;ue.side=rn,ue.needsUpdate=!0,Wf(ke,K,Q,Ue,ue,Nt),ue.side=$e,ue.needsUpdate=!0,Ht=!0}}Ht===!0&&(N.updateMultisampleRenderTarget(ht),N.updateRenderTargetMipmap(ht))}w.setRenderTarget(bt),w.setClearColor(F,V),kt!==void 0&&(Q.viewport=kt),w.toneMapping=Rt}function da(I,W,K){const Q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ht=I.length;X<ht;X++){const Mt=I[X],bt=Mt.object,Rt=Mt.geometry,kt=Q===null?Mt.material:Q,Ht=Mt.group;bt.layers.test(K.layers)&&Wf(bt,W,K,Rt,kt,Ht)}}function Wf(I,W,K,Q,X,ht){I.onBeforeRender(w,W,K,Q,X,ht),I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),X.onBeforeRender(w,W,K,Q,I,ht),X.transparent===!0&&X.side===Ct&&X.forceSinglePass===!1?(X.side=rn,X.needsUpdate=!0,w.renderBufferDirect(K,W,Q,X,I,ht),X.side=xs,X.needsUpdate=!0,w.renderBufferDirect(K,W,Q,X,I,ht),X.side=Ct):w.renderBufferDirect(K,W,Q,X,I,ht),I.onAfterRender(w,W,K,Q,X,ht)}function pa(I,W,K){W.isScene!==!0&&(W=Pe);const Q=Lt.get(I),X=g.state.lights,ht=g.state.shadowsArray,Mt=X.state.version,bt=It.getParameters(I,X.state,ht,W,K),Rt=It.getProgramCacheKey(bt);let kt=Q.programs;Q.environment=I.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(I.isMeshStandardMaterial?j:P).get(I.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&I.envMap===null?W.environmentRotation:I.envMapRotation,kt===void 0&&(I.addEventListener("dispose",Xt),kt=new Map,Q.programs=kt);let Ht=kt.get(Rt);if(Ht!==void 0){if(Q.currentProgram===Ht&&Q.lightsStateVersion===Mt)return qf(I,bt),Ht}else bt.uniforms=It.getUniforms(I),I.onBeforeCompile(bt,w),Ht=It.acquireProgram(bt,Rt),kt.set(Rt,Ht),Q.uniforms=bt.uniforms;const Ut=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ut.clippingPlanes=dt.uniform),qf(I,bt),Q.needsLights=Hm(I),Q.lightsStateVersion=Mt,Q.needsLights&&(Ut.ambientLightColor.value=X.state.ambient,Ut.lightProbe.value=X.state.probe,Ut.directionalLights.value=X.state.directional,Ut.directionalLightShadows.value=X.state.directionalShadow,Ut.spotLights.value=X.state.spot,Ut.spotLightShadows.value=X.state.spotShadow,Ut.rectAreaLights.value=X.state.rectArea,Ut.ltc_1.value=X.state.rectAreaLTC1,Ut.ltc_2.value=X.state.rectAreaLTC2,Ut.pointLights.value=X.state.point,Ut.pointLightShadows.value=X.state.pointShadow,Ut.hemisphereLights.value=X.state.hemi,Ut.directionalShadowMap.value=X.state.directionalShadowMap,Ut.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ut.spotShadowMap.value=X.state.spotShadowMap,Ut.spotLightMatrix.value=X.state.spotLightMatrix,Ut.spotLightMap.value=X.state.spotLightMap,Ut.pointShadowMap.value=X.state.pointShadowMap,Ut.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Ht,Q.uniformsList=null,Ht}function Xf(I){if(I.uniformsList===null){const W=I.currentProgram.getUniforms();I.uniformsList=pc.seqWithValue(W.seq,I.uniforms)}return I.uniformsList}function qf(I,W){const K=Lt.get(I);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function Gm(I,W,K,Q,X){W.isScene!==!0&&(W=Pe),N.resetTextureUnits();const ht=W.fog,Mt=Q.isMeshStandardMaterial?W.environment:null,bt=b===null?w.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:sr,Rt=(Q.isMeshStandardMaterial?j:P).get(Q.envMap||Mt),kt=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ut=!!K.morphAttributes.position,ce=!!K.morphAttributes.normal,de=!!K.morphAttributes.color;let ke=ms;Q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ke=w.toneMapping);const Ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ue=Ue!==void 0?Ue.length:0,Nt=Lt.get(Q),$e=g.state.lights;if(lt===!0&&(yt===!0||I!==M)){const un=I===M&&Q.id===y;dt.setState(Q,I,un)}let pe=!1;Q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==$e.state.version||Nt.outputColorSpace!==bt||X.isBatchedMesh&&Nt.batching===!1||!X.isBatchedMesh&&Nt.batching===!0||X.isBatchedMesh&&Nt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Nt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Nt.instancing===!1||!X.isInstancedMesh&&Nt.instancing===!0||X.isSkinnedMesh&&Nt.skinning===!1||!X.isSkinnedMesh&&Nt.skinning===!0||X.isInstancedMesh&&Nt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Nt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Nt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Nt.instancingMorph===!1&&X.morphTexture!==null||Nt.envMap!==Rt||Q.fog===!0&&Nt.fog!==ht||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==dt.numPlanes||Nt.numIntersection!==dt.numIntersection)||Nt.vertexAlphas!==kt||Nt.vertexTangents!==Ht||Nt.morphTargets!==Ut||Nt.morphNormals!==ce||Nt.morphColors!==de||Nt.toneMapping!==ke||Nt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,Nt.__version=Q.version);let ri=Nt.currentProgram;pe===!0&&(ri=pa(Q,W,X));let eo=!1,Un=!1,xr=!1;const Ce=ri.getUniforms(),Zn=Nt.uniforms;if(Dt.useProgram(ri.program)&&(eo=!0,Un=!0,xr=!0),Q.id!==y&&(y=Q.id,Un=!0),eo||M!==I){Dt.buffers.depth.getReversed()?(mt.copy(I.projectionMatrix),Ug(mt),Ng(mt),Ce.setValue(G,"projectionMatrix",mt)):Ce.setValue(G,"projectionMatrix",I.projectionMatrix),Ce.setValue(G,"viewMatrix",I.matrixWorldInverse);const Cn=Ce.map.cameraPosition;Cn!==void 0&&Cn.setValue(G,Ot.setFromMatrixPosition(I.matrixWorld)),ie.logarithmicDepthBuffer&&Ce.setValue(G,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ce.setValue(G,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,Un=!0,xr=!0)}if(X.isSkinnedMesh){Ce.setOptional(G,X,"bindMatrix"),Ce.setOptional(G,X,"bindMatrixInverse");const un=X.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ce.setValue(G,"boneTexture",un.boneTexture,N))}X.isBatchedMesh&&(Ce.setOptional(G,X,"batchingTexture"),Ce.setValue(G,"batchingTexture",X._matricesTexture,N),Ce.setOptional(G,X,"batchingIdTexture"),Ce.setValue(G,"batchingIdTexture",X._indirectTexture,N),Ce.setOptional(G,X,"batchingColorTexture"),X._colorsTexture!==null&&Ce.setValue(G,"batchingColorTexture",X._colorsTexture,N));const $n=K.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&Gt.update(X,K,ri),(Un||Nt.receiveShadow!==X.receiveShadow)&&(Nt.receiveShadow=X.receiveShadow,Ce.setValue(G,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Zn.envMap.value=Rt,Zn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Zn.envMapIntensity.value=W.environmentIntensity),Un&&(Ce.setValue(G,"toneMappingExposure",w.toneMappingExposure),Nt.needsLights&&km(Zn,xr),ht&&Q.fog===!0&&_t.refreshFogUniforms(Zn,ht),_t.refreshMaterialUniforms(Zn,Q,B,O,g.state.transmissionRenderTarget[I.id]),pc.upload(G,Xf(Nt),Zn,N)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(pc.upload(G,Xf(Nt),Zn,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ce.setValue(G,"center",X.center),Ce.setValue(G,"modelViewMatrix",X.modelViewMatrix),Ce.setValue(G,"normalMatrix",X.normalMatrix),Ce.setValue(G,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const un=Q.uniformsGroups;for(let Cn=0,cl=un.length;Cn<cl;Cn++){const _s=un[Cn];H.update(_s,ri),H.bind(_s,ri)}}return ri}function km(I,W){I.ambientLightColor.needsUpdate=W,I.lightProbe.needsUpdate=W,I.directionalLights.needsUpdate=W,I.directionalLightShadows.needsUpdate=W,I.pointLights.needsUpdate=W,I.pointLightShadows.needsUpdate=W,I.spotLights.needsUpdate=W,I.spotLightShadows.needsUpdate=W,I.rectAreaLights.needsUpdate=W,I.hemisphereLights.needsUpdate=W}function Hm(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(I,W,K){Lt.get(I.texture).__webglTexture=W,Lt.get(I.depthTexture).__webglTexture=K;const Q=Lt.get(I);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,W){const K=Lt.get(I);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0};const Vm=G.createFramebuffer();this.setRenderTarget=function(I,W=0,K=0){b=I,E=W,T=K;let Q=!0,X=null,ht=!1,Mt=!1;if(I){const Rt=Lt.get(I);if(Rt.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(G.FRAMEBUFFER,null),Q=!1;else if(Rt.__webglFramebuffer===void 0)N.setupRenderTarget(I);else if(Rt.__hasExternalTextures)N.rebindTextures(I,Lt.get(I.texture).__webglTexture,Lt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ut=I.depthTexture;if(Rt.__boundDepthTexture!==Ut){if(Ut!==null&&Lt.has(Ut)&&(I.width!==Ut.image.width||I.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(I)}}const kt=I.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Mt=!0);const Ht=Lt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ht[W])?X=Ht[W][K]:X=Ht[W],ht=!0):I.samples>0&&N.useMultisampledRTT(I)===!1?X=Lt.get(I).__webglMultisampledFramebuffer:Array.isArray(Ht)?X=Ht[K]:X=Ht,R.copy(I.viewport),L.copy(I.scissor),D=I.scissorTest}else R.copy(ft).multiplyScalar(B).floor(),L.copy(Pt).multiplyScalar(B).floor(),D=Wt;if(K!==0&&(X=Vm),Dt.bindFramebuffer(G.FRAMEBUFFER,X)&&Q&&Dt.drawBuffers(I,X),Dt.viewport(R),Dt.scissor(L),Dt.setScissorTest(D),ht){const Rt=Lt.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Rt.__webglTexture,K)}else if(Mt){const Rt=Lt.get(I.texture),kt=W;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Rt.__webglTexture,K,kt)}else if(I!==null&&K!==0){const Rt=Lt.get(I.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Rt.__webglTexture,K)}y=-1},this.readRenderTargetPixels=function(I,W,K,Q,X,ht,Mt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){Dt.bindFramebuffer(G.FRAMEBUFFER,bt);try{const Rt=I.texture,kt=Rt.format,Ht=Rt.type;if(!ie.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=I.width-Q&&K>=0&&K<=I.height-X&&G.readPixels(W,K,Q,X,Yt.convert(kt),Yt.convert(Ht),ht)}finally{const Rt=b!==null?Lt.get(b).__webglFramebuffer:null;Dt.bindFramebuffer(G.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(I,W,K,Q,X,ht,Mt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Lt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){const Rt=I.texture,kt=Rt.format,Ht=Rt.type;if(!ie.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=I.width-Q&&K>=0&&K<=I.height-X){Dt.bindFramebuffer(G.FRAMEBUFFER,bt);const Ut=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ut),G.bufferData(G.PIXEL_PACK_BUFFER,ht.byteLength,G.STREAM_READ),G.readPixels(W,K,Q,X,Yt.convert(kt),Yt.convert(Ht),0);const ce=b!==null?Lt.get(b).__webglFramebuffer:null;Dt.bindFramebuffer(G.FRAMEBUFFER,ce);const de=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Dg(G,de,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ut),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ht),G.deleteBuffer(Ut),G.deleteSync(de),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,W=null,K=0){I.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,I=arguments[1]);const Q=Math.pow(2,-K),X=Math.floor(I.image.width*Q),ht=Math.floor(I.image.height*Q),Mt=W!==null?W.x:0,bt=W!==null?W.y:0;N.setTexture2D(I,0),G.copyTexSubImage2D(G.TEXTURE_2D,K,0,0,Mt,bt,X,ht),Dt.unbindTexture()};const Wm=G.createFramebuffer(),Xm=G.createFramebuffer();this.copyTextureToTexture=function(I,W,K=null,Q=null,X=0,ht=null){I.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,I=arguments[1],W=arguments[2],ht=arguments[3]||0,K=null),ht===null&&(X!==0?(Ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=X,X=0):ht=0);let Mt,bt,Rt,kt,Ht,Ut,ce,de,ke;const Ue=I.isCompressedTexture?I.mipmaps[ht]:I.image;if(K!==null)Mt=K.max.x-K.min.x,bt=K.max.y-K.min.y,Rt=K.isBox3?K.max.z-K.min.z:1,kt=K.min.x,Ht=K.min.y,Ut=K.isBox3?K.min.z:0;else{const $n=Math.pow(2,-X);Mt=Math.floor(Ue.width*$n),bt=Math.floor(Ue.height*$n),I.isDataArrayTexture?Rt=Ue.depth:I.isData3DTexture?Rt=Math.floor(Ue.depth*$n):Rt=1,kt=0,Ht=0,Ut=0}Q!==null?(ce=Q.x,de=Q.y,ke=Q.z):(ce=0,de=0,ke=0);const ue=Yt.convert(W.format),Nt=Yt.convert(W.type);let $e;W.isData3DTexture?(N.setTexture3D(W,0),$e=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),$e=G.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),$e=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const pe=G.getParameter(G.UNPACK_ROW_LENGTH),ri=G.getParameter(G.UNPACK_IMAGE_HEIGHT),eo=G.getParameter(G.UNPACK_SKIP_PIXELS),Un=G.getParameter(G.UNPACK_SKIP_ROWS),xr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ue.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ue.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ht),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ut);const Ce=I.isDataArrayTexture||I.isData3DTexture,Zn=W.isDataArrayTexture||W.isData3DTexture;if(I.isDepthTexture){const $n=Lt.get(I),un=Lt.get(W),Cn=Lt.get($n.__renderTarget),cl=Lt.get(un.__renderTarget);Dt.bindFramebuffer(G.READ_FRAMEBUFFER,Cn.__webglFramebuffer),Dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,cl.__webglFramebuffer);for(let _s=0;_s<Rt;_s++)Ce&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.get(I).__webglTexture,X,Ut+_s),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Lt.get(W).__webglTexture,ht,ke+_s)),G.blitFramebuffer(kt,Ht,Mt,bt,ce,de,Mt,bt,G.DEPTH_BUFFER_BIT,G.NEAREST);Dt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(X!==0||I.isRenderTargetTexture||Lt.has(I)){const $n=Lt.get(I),un=Lt.get(W);Dt.bindFramebuffer(G.READ_FRAMEBUFFER,Wm),Dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Xm);for(let Cn=0;Cn<Rt;Cn++)Ce?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$n.__webglTexture,X,Ut+Cn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,$n.__webglTexture,X),Zn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,un.__webglTexture,ht,ke+Cn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,un.__webglTexture,ht),X!==0?G.blitFramebuffer(kt,Ht,Mt,bt,ce,de,Mt,bt,G.COLOR_BUFFER_BIT,G.NEAREST):Zn?G.copyTexSubImage3D($e,ht,ce,de,ke+Cn,kt,Ht,Mt,bt):G.copyTexSubImage2D($e,ht,ce,de,kt,Ht,Mt,bt);Dt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Zn?I.isDataTexture||I.isData3DTexture?G.texSubImage3D($e,ht,ce,de,ke,Mt,bt,Rt,ue,Nt,Ue.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D($e,ht,ce,de,ke,Mt,bt,Rt,ue,Ue.data):G.texSubImage3D($e,ht,ce,de,ke,Mt,bt,Rt,ue,Nt,Ue):I.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ht,ce,de,Mt,bt,ue,Nt,Ue.data):I.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ht,ce,de,Ue.width,Ue.height,ue,Ue.data):G.texSubImage2D(G.TEXTURE_2D,ht,ce,de,Mt,bt,ue,Nt,Ue);G.pixelStorei(G.UNPACK_ROW_LENGTH,pe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ri),G.pixelStorei(G.UNPACK_SKIP_PIXELS,eo),G.pixelStorei(G.UNPACK_SKIP_ROWS,Un),G.pixelStorei(G.UNPACK_SKIP_IMAGES,xr),ht===0&&W.generateMipmaps&&G.generateMipmap($e),Dt.unbindTexture()},this.copyTextureToTexture3D=function(I,W,K=null,Q=null,X=0){return I.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Q=arguments[1]||null,I=arguments[2],W=arguments[3],X=arguments[4]||0),Ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,W,K,Q,X)},this.initRenderTarget=function(I){Lt.get(I).__webglFramebuffer===void 0&&N.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?N.setTextureCube(I,0):I.isData3DTexture?N.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?N.setTexture2DArray(I,0):N.setTexture2D(I,0),Dt.unbindTexture()},this.resetState=function(){E=0,T=0,b=null,Dt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const R1=15,C1=6,P1=1.8,Fc=8,s0=.85,o0=.98,Oc=.003,Jt=90,il=1.7,r0=500,I1=250,L1=18,D1=35,U1=40,N1=12,z1=35,F1=1200,O1=160,B1=140,G1=40,k1=60,Pp=6,H1=25,V1=8,W1=40,X1=50,q1=10,Y1=30,Z1=30,$1=24,j1=45,J1=24,K1=36,Q1=36,tw=45,ew=25,Yi=280,hh=2.5,nw=6,a0=1.5,Ro=5,c0=2.5,wo=12,Ae=30,iw=5,sw=8,ow=2.2,U={fog:396308,ground:1720360,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,rockBase:2763314,rockMoss:1721378,rockLight:3816005,skyDeep:198160,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116,spiralStem:1716288,spiralFrond:2271880,spiralGlow:4521932,spiralTip:8978414,corpseSpathe:5574946,corpseColumn:8921668,corpseGlow:13382485,corpseLeaf:1717016,orbBushLeaf:2245666,orbBushOrb:16746700,orbBushGlow:16755421,orbBushStem:1718312,lanternStem:2769954,lanternPod:16768358,lanternGlow:16772744,lanternHaze:16763972,veilSupport:3816e3,veilMoss:4508808,veilGlow:6750122,veilEdge:8978380,groundGlowColors:[3407837,4521898,13400063,4500206,8978380]},ln=new A1({antialias:!0,powerPreference:"default"});ln.setSize(window.innerWidth,window.innerHeight);ln.setPixelRatio(Math.min(window.devicePixelRatio,1.5));ln.shadowMap.enabled=!0;ln.shadowMap.type=B0;ln.toneMapping=k0;ln.toneMappingExposure=2.8;ln.outputColorSpace=An;document.body.appendChild(ln.domElement);const Mn=new On(65,window.innerWidth/window.innerHeight,.1,300),Ip=new bp,at=new ix;at.background=new rt(U.skyDeep);at.fog=new xf(U.fog,.01);window.addEventListener("resize",()=>{Mn.aspect=window.innerWidth/window.innerHeight,Mn.updateProjectionMatrix(),ln.setSize(window.innerWidth,window.innerHeight)});document.addEventListener("visibilitychange",()=>{document.hidden||Ip.getDelta()});const Lp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ua{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rw=new Af(-1,1,1,-1,0,1);class aw extends be{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const cw=new aw;class Dp{constructor(t){this._mesh=new C(cw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,rw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class lw extends ua{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ic.clone(t.uniforms),this.material=new Pn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Dp(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class l0 extends ua{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class uw extends ua{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class hw{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new pt);this._width=n.width,this._height=n.height,e=new fi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lw(Lp),this.copyPass.material.blending=Vi,this.clock=new bp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),u.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}l0!==void 0&&(r instanceof l0?n=!0:r instanceof uw&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fw extends ua{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const dw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class cr extends ua{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new pt(t.x,t.y):new pt(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new fi(o,r,{type:Wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new fi(o,r,{type:Wi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new fi(o,r,{type:Wi});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=dw;this.highPassUniforms=Ic.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const u=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(u[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new pt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=Lp;this.copyUniforms=Ic.clone(c.uniforms),this.blendMaterial=new Pn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Qt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new Z,this.fsQuad=new Dp(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let u=0;u<this.nMips;u++)this.fsQuad.material=this.separableBlurMaterials[u],this.separableBlurMaterials[u].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[u].uniforms.direction.value=cr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[u]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[u].uniforms.colorTexture.value=this.renderTargetsHorizontal[u].texture,this.separableBlurMaterials[u].uniforms.direction.value=cr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[u]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[u];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new pt(.5,.5)},direction:{value:new pt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Pn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}cr.BlurDirectionX=new pt(1,0);cr.BlurDirectionY=new pt(0,1);let qs=null,Cf=!0;try{const i=new fw(at,Mn),t=new cr(new pt(Math.floor(window.innerWidth/2),Math.floor(window.innerHeight/2)),.6,.4,.85);qs=new hw(ln),qs.addPass(i),qs.addPass(t)}catch(i){console.warn("Bloom unavailable, falling back to direct render:",i.message),Cf=!1}window.addEventListener("resize",()=>{Cf&&qs&&qs.setSize(window.innerWidth,window.innerHeight)});function u0(){Cf&&qs?qs.render():ln.render(at,Mn)}const Pf=new kx(U.ambient,U.ground,.65);at.add(Pf);const si=new el(U.moon,.85);si.position.set(30,60,-20);si.castShadow=!0;si.shadow.camera.left=-90;si.shadow.camera.right=90;si.shadow.camera.top=90;si.shadow.camera.bottom=-90;si.shadow.camera.near=1;si.shadow.camera.far=250;si.shadow.mapSize.set(1024,1024);si.shadow.bias=-.001;at.add(si);const If=new el(2241365,.3);If.position.set(-40,45,25);at.add(If);const Up=new el(3359829,.4);Up.position.set(-25,15,30);at.add(Up);const Np=new pr(3368516,.7,100);Np.position.set(0,.5,0);at.add(Np);const zp=new el(4478327,.4);zp.position.set(-10,25,40);at.add(zp);const Lf=new pr(6719624,.6,20);at.add(Lf);const Ls=[];function pw(){for(let i=0;i<iw;i++){const t=new pr(U.crystal,0,16);at.add(t),Ls.push(t)}}const zr=new pr(U.orbGold,0,15);at.add(zr);const Ge={};let na=0,Ys=0,sl=!1,Fp=!1,Df=0,Uf=0,Nf=!1,ol=!1,gr=!1,Bc=null,js=null,fh=0,dh=0,ph=null;function mw(i){ph=i}function gw(i){Fp=i}function xw(i){ol=i}function ha(){!Fp&&ph&&ph()}window.addEventListener("keydown",i=>{Ge[i.code]=!0,"Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD".split(" ").indexOf(i.code)>=0&&i.preventDefault(),ha()});window.addEventListener("keyup",i=>{Ge[i.code]=!1});window.addEventListener("blur",()=>{for(const i in Ge)Ge[i]=!1;sl=!1});ln.domElement.addEventListener("mousedown",()=>{sl=!0,ha()});window.addEventListener("mouseup",()=>{sl=!1});window.addEventListener("mousemove",i=>{sl&&(na-=i.movementX*Oc,Ys-=i.movementY*Oc,Ys=Math.max(-1,Math.min(1,Ys)))});const vw="ontouchstart"in window||navigator.maxTouchPoints>0,fa=document.getElementById("joy-zone"),Gc=document.getElementById("joy-knob"),zf=document.getElementById("btn-jump");vw&&(fa.style.display="block",zf.style.display="block",document.getElementById("controls").textContent="Stick: Move · Drag right: Look · JUMP");function Op(i,t){const e=fa.getBoundingClientRect();let n=i-(e.left+e.width/2),s=t-(e.top+e.height/2);const o=Math.sqrt(n*n+s*s),r=52;o>r&&(n=n/o*r,s=s/o*r),Df=n/r,Uf=s/r,Gc.style.left=40+n+"px",Gc.style.top=40+s+"px"}fa.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),ha();const t=i.changedTouches[0];Bc=t.identifier,Nf=!0,Op(t.clientX,t.clientY)},{passive:!1});fa.addEventListener("touchmove",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Bc&&Op(i.changedTouches[t].clientX,i.changedTouches[t].clientY)},{passive:!1});fa.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation();for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===Bc&&(Bc=null,Nf=!1,Df=0,Uf=0,Gc.style.left="40px",Gc.style.top="40px")},{passive:!1});zf.addEventListener("touchstart",i=>{i.preventDefault(),i.stopPropagation(),ha(),ol=!0},{passive:!1});zf.addEventListener("touchend",i=>{i.preventDefault(),i.stopPropagation(),ol=!1},{passive:!1});ln.domElement.addEventListener("touchstart",i=>{i.preventDefault(),ha();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.clientX>window.innerWidth*.3&&js===null&&(js=e.identifier,fh=e.clientX,dh=e.clientY)}},{passive:!1});ln.domElement.addEventListener("touchmove",i=>{i.preventDefault();for(let t=0;t<i.changedTouches.length;t++){const e=i.changedTouches[t];e.identifier===js&&(na-=(e.clientX-fh)*Oc,Ys-=(e.clientY-dh)*Oc,Ys=Math.max(-1,Math.min(1,Ys)),fh=e.clientX,dh=e.clientY)}},{passive:!1});ln.domElement.addEventListener("touchend",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===js&&(js=null)},{passive:!1});ln.domElement.addEventListener("touchcancel",i=>{for(let t=0;t<i.changedTouches.length;t++)i.changedTouches[t].identifier===js&&(js=null)},{passive:!1});function Mw(){let i=0,t=0;Ge.KeyW&&(t-=1),Ge.KeyS&&(t+=1),Ge.KeyA&&(i-=1),Ge.KeyD&&(i+=1),Nf&&(i+=Df,t+=Uf);const e=Math.sqrt(i*i+t*t);e>1&&(i/=e,t/=e);const n=C1*(Ge.ShiftLeft||Ge.ShiftRight||gr?P1:1),s=Math.sin(na),o=Math.cos(na);return{x:(i*o+t*s)*n,z:(-i*s+t*o)*n}}const Dn={mushCap:new $(.5,8,5),mushStem:new gt(.06,.1,.6,5),mushDot:new $(.06,4,3),crystal:new gt(0,.35,1.8,6),crystalSm:new gt(0,.18,.9,5),fly:new $(.06,4,3),spore:new $(.04,3,3),dandSeed:new $(.025,3,3),bubble:new $(.15,8,6),starMote:new $(.03,3,3),dustMote:new $(.035,3,3)};let Xr=42;function v(){return Xr=Xr*16807%2147483647,(Xr&2147483647)/2147483647}function Bp(){return Xr}function mh(i){Xr=i}function Ya(i,t){let e=i*374761393+t*668265263+1274126177|0;return e=(e^e>>13)*1274126177|0,(e&2147483647)/2147483647}function Uo(i){return i*i*(3-2*i)}function Gp(i,t){const e=Math.floor(i),n=Math.floor(t),s=Uo(i-e),o=Uo(t-n),r=Ya(e,n),a=Ya(e+1,n),u=Ya(e,n+1),l=Ya(e+1,n+1);return r+(a-r)*s+(u-r)*o+(r-a-u+l)*s*o}function Za(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=Gp(i*o,t*o)*s,s*=.5,o*=2;return n}const gh=[];function xh(i,t,e){gh.push({x:i,z:t,r:e})}function Bt(i,t){const e=Math.sqrt(i*i+t*t),n=1-Uo(Math.max(0,(e-Jt*.7)/(Jt*.3))),s=Uo(Math.min(1,e/10)),o=.012,r=Za(i*o+200,t*o+300,3),a=Uo(Math.max(0,Math.min(1,(r-.15)*2))),u=.035,l=Za(i*u,t*u,4),c=Za(i*u*2.7+50,t*u*2.7+50,3),h=Gp(i*.15,t*.15),p=Za(i*u*.6-100,t*u*.6-100,3)*1.5,m=l*5*a,x=c*1.5*a,d=h*.2;let g=p+m+x+d;g*=n*s;for(let S=0;S<gh.length;S++){const _=gh[S],w=i-_.x,A=t-_.z,E=Math.sqrt(w*w+A*A);if(E<_.r*2.5){const T=Uo(Math.max(0,(E-_.r*.5)/(_.r*2)));g*=T}}return g}const ds={uTime:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uTransform:{value:0}};function _w(i,t,e){ds.uTime.value=i,ds.uPlayerX.value=t,ds.uPlayerZ.value=e}function yw(i){ds.uTransform.value=i}function ww(){const t=document.createElement("canvas");t.width=2048,t.height=2048;const e=t.getContext("2d"),n=Math.random;e.fillStyle="#223822",e.fillRect(0,0,2048,2048);const s=[{col:"rgba(50,45,25,0.38)",n:16,r:130},{col:"rgba(35,55,30,0.35)",n:14,r:120},{col:"rgba(55,40,22,0.35)",n:14,r:115},{col:"rgba(45,55,28,0.32)",n:12,r:110},{col:"rgba(60,48,25,0.32)",n:12,r:105},{col:"rgba(30,50,32,0.30)",n:10,r:100},{col:"rgba(65,50,28,0.28)",n:10,r:100},{col:"rgba(40,60,35,0.26)",n:10,r:95},{col:"rgba(70,45,22,0.24)",n:8,r:90},{col:"rgba(45,35,18,0.22)",n:8,r:85}];for(const c of s)for(let h=0;h<c.n;h++){const f=n()*2048,p=n()*2048,m=c.r*(.5+n()*.8),x=e.createRadialGradient(f,p,0,f,p,m);x.addColorStop(0,c.col),x.addColorStop(.6,c.col.replace(/[\d.]+\)$/,parseFloat(c.col.match(/[\d.]+\)$/)[0])*.4+")")),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x;for(let d=-1;d<=1;d++)for(let g=-1;g<=1;g++)e.beginPath(),e.arc(f+d*2048,p+g*2048,m,0,6.28),e.fill()}const o=[{n:80,r:25,colors:["rgba(45,40,22,0.24)","rgba(38,55,30,0.20)","rgba(50,38,18,0.22)","rgba(35,48,25,0.18)","rgba(55,42,20,0.20)","rgba(30,52,32,0.16)"]},{n:200,r:10,colors:["rgba(45,40,20,0.14)","rgba(35,50,28,0.12)","rgba(50,38,18,0.12)","rgba(30,48,28,0.10)","rgba(48,42,18,0.12)","rgba(28,45,30,0.08)"]},{n:500,r:4,colors:["rgba(42,38,18,0.10)","rgba(35,48,25,0.08)","rgba(48,36,16,0.08)","rgba(30,45,28,0.06)","rgba(45,40,16,0.08)","rgba(25,42,28,0.05)"]}];for(const c of o)for(let h=0;h<c.n;h++){e.fillStyle=c.colors[Math.floor(n()*c.colors.length)];const f=n()*2048,p=n()*2048;e.beginPath(),e.arc(f,p,c.r+n()*c.r*.6,0,6.28),e.fill()}const r=["rgba(50,180,90,0.10)","rgba(40,160,100,0.08)","rgba(65,145,170,0.07)","rgba(80,200,130,0.09)","rgba(55,155,135,0.08)"];for(let c=0;c<45;c++){let h=n()*2048,f=n()*2048;const p=r[Math.floor(n()*r.length)];e.strokeStyle=p,e.lineWidth=1.5+n()*2.5,e.beginPath(),e.moveTo(h,f);let m=n()*6.28;const x=14+Math.floor(n()*20);for(let d=0;d<x;d++)m+=Math.sin(d*.6)*.5+(n()-.5)*.4,h+=Math.cos(m)*(6+n()*10),f+=Math.sin(m)*(6+n()*10),e.lineTo(h,f);if(e.stroke(),n()<.7){const d=6+n()*10,g=e.createRadialGradient(h,f,0,h,f,d);g.addColorStop(0,p.replace(/[\d.]+\)$/,"0.18)")),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(h,f,d,0,6.28),e.fill()}if(n()<.5&&c<30){let d=h,g=f,S=m+(n()-.5)*1.5;e.strokeStyle=p.replace(/[\d.]+\)$/,parseFloat(p.match(/[\d.]+\)$/)[0])*.6+")"),e.lineWidth=1+n()*1.5,e.beginPath(),e.moveTo(d,g);for(let _=0;_<6;_++)S+=(n()-.5)*.6,d+=Math.cos(S)*(4+n()*8),g+=Math.sin(S)*(4+n()*8),e.lineTo(d,g);e.stroke()}}for(let c=0;c<20;c++){const h=n()*2048,f=n()*2048,p=20+n()*60,x=n()<.7?`rgba(50,${140+Math.floor(n()*60)},${60+Math.floor(n()*40)},${.06+n()*.06})`:`rgba(${100+Math.floor(n()*60)},${80+Math.floor(n()*40)},40,${.05+n()*.04})`;e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(h,f,p,0,6.28),e.stroke(),n()<.4&&(e.lineWidth=.8+n()*1.5,e.beginPath(),e.arc(h,f,p*(.6+n()*.2),0,6.28),e.stroke());for(let d=-1;d<=1;d++)for(let g=-1;g<=1;g++)d===0&&g===0||(e.strokeStyle=x,e.lineWidth=1.5+n()*3,e.beginPath(),e.arc(h+d*2048,f+g*2048,p,0,6.28),e.stroke())}e.lineWidth=1.2;for(let c=0;c<30;c++){e.strokeStyle=`rgba(15,25,12,${.2+n()*.15})`;let h=n()*2048,f=n()*2048,p=n()*6.28;e.beginPath(),e.moveTo(h,f);for(let m=0;m<10;m++)p+=Math.sin(m*.7)*.5+(n()-.5)*.35,h+=Math.cos(p)*(8+n()*14),f+=Math.sin(p)*(8+n()*14),e.lineTo(h,f);e.stroke()}const a=["rgba(55,40,18,0.28)","rgba(50,50,22,0.25)","rgba(35,55,25,0.22)","rgba(60,45,20,0.25)","rgba(45,52,22,0.22)","rgba(65,48,22,0.22)","rgba(40,55,28,0.20)","rgba(55,42,16,0.20)","rgba(70,50,22,0.22)","rgba(48,38,15,0.20)","rgba(30,50,28,0.18)","rgba(60,55,25,0.16)"];for(let c=0;c<3500;c++){e.fillStyle=a[Math.floor(n()*a.length)];const h=n()*2048,f=n()*2048,p=.8+n()*2.5;e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}for(let c=0;c<50;c++){const h=n()*2048,f=n()*2048,p=15+n()*35,m=e.createRadialGradient(h,f,0,h,f,p),x=n();x<.25?(m.addColorStop(0,"rgba(35,60,35,0.18)"),m.addColorStop(1,"rgba(20,35,20,0)")):x<.5?(m.addColorStop(0,"rgba(55,42,20,0.18)"),m.addColorStop(1,"rgba(30,22,10,0)")):x<.7?(m.addColorStop(0,"rgba(45,55,28,0.16)"),m.addColorStop(1,"rgba(25,30,15,0)")):x<.85?(m.addColorStop(0,"rgba(60,45,22,0.15)"),m.addColorStop(1,"rgba(32,24,12,0)")):(m.addColorStop(0,"rgba(38,65,40,0.14)"),m.addColorStop(1,"rgba(22,38,22,0)")),e.fillStyle=m,e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}for(let c=0;c<300;c++){const h=n()*2048,f=n()*2048,p=1.5+n()*3,m=Math.floor(30+n()*40);e.fillStyle=`rgba(${m+5},${m},${m-8},0.25)`,e.beginPath(),e.arc(h,f,p,0,6.28),e.fill()}e.lineWidth=.7;for(let c=0;c<60;c++){const h=n()*2048,f=n()*2048,p=4+n()*16,m=n()*6.28;e.strokeStyle=`rgba(18,28,12,${.15+n()*.1})`,e.beginPath(),e.moveTo(h,f),e.lineTo(h+Math.cos(m)*p,f+Math.sin(m)*p),e.stroke()}const u=["rgba(60,190,100,0.10)","rgba(50,175,130,0.08)","rgba(80,160,180,0.07)","rgba(100,90,170,0.06)","rgba(160,130,60,0.05)","rgba(50,160,150,0.07)"];for(let c=0;c<400;c++){const h=n()*2048,f=n()*2048,p=u[Math.floor(n()*u.length)];if(e.fillStyle=p,e.beginPath(),e.arc(h,f,1+n()*2.5,0,6.28),e.fill(),n()<.4){const m=5+n()*6,x=e.createRadialGradient(h,f,0,h,f,m);x.addColorStop(0,p),x.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=x,e.beginPath(),e.arc(h,f,m,0,6.28),e.fill()}}for(let c=0;c<150;c++){const h=n()*2048,f=n()*2048;e.fillStyle=`rgba(90,150,110,${.04+n()*.04})`,e.beginPath(),e.arc(h,f,.5+n()*1.5,0,6.28),e.fill()}const l=new ca(t);return l.wrapS=l.wrapT=er,l.repeat.set(8,8),l.colorSpace=An,l}function $a(i,t){let e=i*127961+t*372143+918273|0;return e=(e^e>>13)*517261|0,(e&2147483647)/2147483647}function vh(i){return i*i*(3-2*i)}function kp(i,t){const e=Math.floor(i),n=Math.floor(t),s=vh(i-e),o=vh(t-n),r=$a(e,n),a=$a(e+1,n),u=$a(e,n+1),l=$a(e+1,n+1);return r+(a-r)*s+(u-r)*o+(r-a-u+l)*s*o}function ql(i,t,e){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=kp(i*o,t*o)*s,s*=.5,o*=2;return n}function Sw(){const i=ww(),t=Jt*3,e=200,n=new oe(t,t,e,e),s=n.attributes.position,o=[[.65,.6,.38],[.5,.7,.42],[.72,.58,.35],[.55,.68,.4],[.6,.55,.32],[.45,.65,.45],[.68,.62,.36],[.48,.72,.48],[.75,.55,.32],[.55,.6,.38]],r=s.count,a=new Float32Array(r*3);for(let c=0;c<r;c++){const h=s.getX(c),f=s.getY(c);Math.sqrt(h*h+f*f)<Jt*1.4?s.setZ(c,Bt(h,-f)):s.setZ(c,0);const m=h,x=-f,d=ql(m*.025+100,x*.025+200,3),g=ql(m*.06+300,x*.06+400,2),S=kp(m*.15+500,x*.15+600),_=ql(m*.04-150,x*.04-250,3),w=Math.floor(d*o.length*.999),A=Math.floor(_*o.length*.999),E=o[w],T=o[A],b=vh(g),y=.82+S*.25,M=(E[0]*(1-b)+T[0]*b)*y,R=(E[1]*(1-b)+T[1]*b)*y,L=(E[2]*(1-b)+T[2]*b)*y,F=1+Bt(m,x)*.06;a[c*3]=M*F,a[c*3+1]=R*F,a[c*3+2]=L*F}n.setAttribute("color",new Fe(a,3)),n.computeVertexNormals();const u=new q({map:i,vertexColors:!0,roughness:.75,metalness:0,emissive:1388056,emissiveIntensity:.25});u.onBeforeCompile=c=>{c.uniforms.uTime=ds.uTime,c.uniforms.uPlayerX=ds.uPlayerX,c.uniforms.uPlayerZ=ds.uPlayerZ,c.uniforms.uTransform=ds.uTransform,c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
      `)};const l=new C(n,u);return l.rotation.x=-Math.PI/2,l.receiveShadow=!0,at.add(l),l}const Ho=new te;let kc=null;const Ds=120;let h0=null,mc=null,Mh=null,_h=null,Vo=null;const Wo=[],bw=3;let Yl=0;function hs(i,t){const e=i>>16&255,n=i>>8&255,s=i&255;return`rgba(${e},${n},${s},${t})`}function fs(i,t,e,n,s,o,r){i.save(),i.translate(t,e),Math.abs(s/n-1)>.01&&i.scale(1,s/n);const a=i.createRadialGradient(0,0,0,0,0,n);a.addColorStop(0,hs(o,r)),a.addColorStop(.25,hs(o,r*.55)),a.addColorStop(.55,hs(o,r*.15)),a.addColorStop(.85,hs(o,r*.03)),a.addColorStop(1,hs(o,0)),i.fillStyle=a,i.beginPath(),i.arc(0,0,n,0,6.2832),i.fill(),i.restore()}function Zl(i,t,e,n,s,o,r,a){fs(i,t,e,n,s,o,r),t-n<0&&fs(i,t+a,e,n,s,o,r),t+n>a&&fs(i,t-a,e,n,s,o,r)}function Tw(){const e=document.createElement("canvas");e.width=2048,e.height=1024;const n=e.getContext("2d"),s=Math.random,o=n.createLinearGradient(0,0,0,1024);o.addColorStop(0,"#030610"),o.addColorStop(.2,"#050a18"),o.addColorStop(.4,"#0a1222"),o.addColorStop(.55,"#0c1828"),o.addColorStop(.75,"#081018"),o.addColorStop(1,"#040810"),n.fillStyle=o,n.fillRect(0,0,2048,1024);const r=[{x:.12,y:.22,rx:.18,ry:.14,col:1717094,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:2758741,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:1721446,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:3348548,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:2245768,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:4465220,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:1586005,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:2765670,a:.07}];for(const h of r){Zl(n,h.x*2048,h.y*1024,h.rx*2048,h.ry*1024,h.col,h.a,2048);for(let f=0;f<4;f++){const p=(h.x+(s()-.5)*h.rx)*2048,m=(h.y+(s()-.5)*h.ry)*1024,x=h.rx*2048*(.2+s()*.35),d=h.ry*1024*(.2+s()*.4);Zl(n,p,m,x,d,h.col,h.a*(.4+s()*.5),2048)}}const a=[2245802,2245734,4465254,5583701,3368584,2245717,3809894];for(let h=0;h<30;h++){const f=s()*2048,p=s()*1024*.55,m=40+s()*180,x=25+s()*100;Zl(n,f,p,m,x,a[Math.floor(s()*a.length)],.025+s()*.035,2048)}n.save(),n.globalCompositeOperation="screen";const u=.26;for(let h=0;h<50;h++){const f=h/50,p=f*2048,m=(u+Math.sin(f*Math.PI)*.06+(s()-.5)*.02)*1024,x=2048*.05+s()*2048*.035,d=1024*.04*(.4+s()*.6);fs(n,p,m,x,d,4478310,.025+s()*.015)}for(let h=0;h<25;h++){const f=.2+s()*.6,p=f*2048,m=(u+Math.sin(f*Math.PI)*.04)*1024;fs(n,p,m,2048*.03+s()*2048*.02,1024*.02+s()*1024*.01,6719658,.015+s()*.012)}for(let h=0;h<10;h++){const f=.35+s()*.3,p=f*2048,m=(u+Math.sin(f*Math.PI)*.02)*1024;fs(n,p,m,2048*.02,1024*.012,8943462,.01+s()*.008)}n.globalCompositeOperation="source-over",n.restore();for(let h=0;h<12;h++){const f=.1+s()*.8,p=f*2048,m=(u+Math.sin(f*Math.PI)*.04+(s()-.5)*.02)*1024,x=20+s()*60,d=8+s()*20;fs(n,p,m,x,d,132104,.15+s()*.1)}const l=["255,255,255","220,230,255","255,240,220","200,215,255","255,225,200","240,240,255","255,245,235"];for(let h=0;h<5e3;h++){const f=s()*2048,p=s()*1024*.65,m=.3+s()*.7,x=.1+s()*.5;n.fillStyle=`rgba(${l[Math.floor(s()*l.length)]},${x})`,n.beginPath(),n.arc(f,p,m,0,6.28),n.fill()}for(let h=0;h<3e3;h++){const f=s(),p=f*2048,x=(u+Math.sin(f*Math.PI)*.06)*1024+(s()-.5)*1024*.1;if(x<0||x>1024*.6)continue;const d=.2+s()*.6,g=.2+s()*.7;n.fillStyle=`rgba(${l[Math.floor(s()*l.length)]},${g})`,n.beginPath(),n.arc(p,x,d,0,6.28),n.fill()}for(let h=0;h<60;h++){const f=s()*2048,p=s()*1024*.58,m=1.2+s()*1.8,x=6+s()*14,d=s();let g;d<.45?g="255,255,255":d<.65?g="210,225,255":d<.8?g="255,230,200":d<.92?g="190,210,255":g="255,200,180";const S=n.createRadialGradient(f,p,0,f,p,x);S.addColorStop(0,`rgba(${g},0.5)`),S.addColorStop(.1,`rgba(${g},0.18)`),S.addColorStop(.35,`rgba(${g},0.04)`),S.addColorStop(1,`rgba(${g},0)`),n.fillStyle=S,n.beginPath(),n.arc(f,p,x,0,6.28),n.fill(),n.strokeStyle=`rgba(${g},0.12)`,n.lineWidth=.5;const _=x*.8;n.beginPath(),n.moveTo(f-_,p),n.lineTo(f+_,p),n.moveTo(f,p-_),n.lineTo(f,p+_),n.stroke(),n.fillStyle=`rgba(${g},1)`,n.beginPath(),n.arc(f,p,m,0,6.28),n.fill()}for(let h=0;h<8;h++){const f=s()*2048,p=1024*.08+s()*1024*.42,m=50+s()*90;fs(n,f,p,m,m*.7,3359846,.03);for(let x=0;x<100;x++){const d=s()*6.28,g=s()*s()*m,S=f+Math.cos(d)*g,_=p+Math.sin(d)*g*.65;if(S<0||S>2048||_<0||_>1024)continue;const w=.2+s()*.6;n.fillStyle=`rgba(255,255,255,${.25+s()*.6})`,n.beginPath(),n.arc(S,_,w,0,6.28),n.fill()}}for(let h=0;h<15;h++){const f=r[Math.floor(s()*r.length)],p=(f.x+(s()-.5)*f.rx*.5)*2048,m=(f.y+(s()-.5)*f.ry*.5)*1024,x=3+s()*8,d=n.createRadialGradient(p,m,0,p,m,x*3);d.addColorStop(0,hs(f.col,.2)),d.addColorStop(.3,hs(f.col,.06)),d.addColorStop(1,hs(f.col,0)),n.fillStyle=d,n.beginPath(),n.arc(p,m,x*3,0,6.28),n.fill()}const c=new ca(e);return c.colorSpace=An,c}function Ew(){const i=Bp(),t=Tw(),e=.03,n=new $(Yi,64,32,0,Math.PI*2,e,Math.PI*.55);kc=new Z({map:t,side:rn,fog:!1,transparent:!1});const s=new C(n,kc);Ho.add(s);const o=Yi*Math.sin(e)*1.05,r=new Be(o,32),a=new Z({color:198160,side:rn,fog:!1}),u=new C(r,a);u.position.y=Yi*Math.cos(e),u.rotation.x=Math.PI/2,Ho.add(u),Aw(),Rw(),at.add(Ho),mh(i)}function Aw(){const i=new Float32Array(Ds*3),t=new Float32Array(Ds*3);mc=new Float32Array(Ds),Mh=new Float32Array(Ds),_h=new Float32Array(Ds);const e=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],n=Math.random,s=Yi*.97;for(let a=0;a<Ds;a++){const u=n()*Math.PI*2,l=n()*Math.PI*.48,c=s*Math.cos(u)*Math.sin(l),h=s*Math.cos(l),f=s*Math.sin(u)*Math.sin(l);i[a*3]=c,i[a*3+1]=h,i[a*3+2]=f;const p=e[Math.floor(n()*e.length)];t[a*3]=p[0],t[a*3+1]=p[1],t[a*3+2]=p[2],mc[a]=2+n()*4,Mh[a]=n()*Math.PI*2,_h[a]=.5+n()*2.5}const o=new be;o.setAttribute("position",new Vt(i,3)),o.setAttribute("color",new Vt(t,3)),Vo=new Vt(mc.slice(),1),Vo.setUsage(ye),o.setAttribute("size",Vo);const r=new _f({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:Qt,depthWrite:!1});h0=new dp(o,r),Ho.add(h0)}function Rw(){const i=new Z({color:16777215,transparent:!0,opacity:0,fog:!1,blending:Qt,depthWrite:!1});for(let t=0;t<bw;t++){const e=new C(new gt(.15,0,12,4),i.clone());e.visible=!1,Ho.add(e),Wo.push({mesh:e,mat:e.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function Cw(){let i=null;for(let a=0;a<Wo.length;a++)if(!Wo[a].active){i=Wo[a];break}if(!i)return;const t=Math.random,e=t()*Math.PI*2,n=.1+t()*.35,s=Yi*.85;i.sx=s*Math.cos(e)*Math.sin(n),i.sy=s*Math.cos(n),i.sz=s*Math.sin(e)*Math.sin(n);const o=e+(t()-.5)*1,r=80+t()*120;i.dx=Math.cos(o)*r,i.dy=-r*(.5+t()*.5),i.dz=Math.sin(o)*r,i.life=.5+t()*.8,i.maxLife=i.life,i.active=!0,i.mesh.visible=!0}function Hp(i,t){if(Ho.rotation.y=t*.003,Vo){const e=Vo.array;for(let n=0;n<Ds;n++){const s=mc[n],o=Math.sin(t*_h[n]+Mh[n]);e[n]=s*(.65+o*.35)}Vo.needsUpdate=!0}Yl-=i,Yl<=0&&(Yl=4+Math.random()*12,Cw());for(let e=0;e<Wo.length;e++){const n=Wo[e];if(!n.active)continue;if(n.life-=i,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife;n.sx+=n.dx*i,n.sy+=n.dy*i,n.sz+=n.dz*i,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=s*.7,n.mesh.scale.setScalar(.6+s*.4)}}function Pw(i){if(kc){const t=Math.max(.15,i);kc.color.setRGB(t,t,t)}}const Iw=6,ja=64,yh=[];let Hs=null;const Cr=[new rt(1734485),new rt(2787447),new rt(5601126),new rt(6706568),new rt(8930406),new rt(3368533)];function Lw(){Hs=new te,Hs.visible=!1;for(let i=0;i<Iw;i++){const t=1.2+i*.2+Math.sin(i*1.7)*.15,e=Yi*t,n=.1+i*.012+Math.sin(i*2.3)*.02,s=Yi*n,o=new oe(e,s,ja,3),r=o.attributes.position.array,a=4,u=(ja+1)*a,l=Math.PI*(.45+i*.08+Math.sin(i*.9)*.05),c=-l/2,h=(.25+i*.04+Math.sin(i*1.3)*.02)*Math.PI,f=i*.18-.45;for(let d=0;d<u;d++){const g=Math.floor(d/a),S=d%a,_=g/ja,w=c+_*l+f,E=(S/(a-1)-.5)*.05,T=h+E,b=Yi*.92;r[d*3]=Math.sin(w)*Math.sin(T)*b,r[d*3+1]=Math.cos(T)*b,r[d*3+2]=Math.cos(w)*Math.sin(T)*b}o.attributes.position.needsUpdate=!0,o.attributes.position.setUsage(ye),o.computeVertexNormals();const p=new Float32Array(u*3);o.setAttribute("color",new Fe(p,3)),o.attributes.color.setUsage(ye);const m=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Ct,blending:Qt,depthWrite:!1,fog:!1}),x=new C(o,m);Hs.add(x),yh.push({mesh:x,mat:m,geo:o,colorArr:p,posArr:r,vertCount:u,rows:a,segments:ja,phase:i*1.7+Math.sin(i*.8)*.5,speed:.15+i*.05+Math.sin(i*2.1)*.03,colorShift:i*1.1,elevation:h,arcStart:c,arcSpan:l,azimuthOffset:f})}at.add(Hs)}let So=0;function Dw(i,t,e,n,s){if(!Hs)return;const o=s==="HEAVY_RAIN"||s==="LUMINOUS_STORM"||s==="FOG_BANK";let r=0;o||(e==="DEEP_NIGHT"?r=.25:e==="NIGHT"&&(r=.08));const a=r>So?.2:.4;if(So+=(r-So)*a*i,So<.005){Hs.visible=!1;return}Hs.visible=!0;const u=Yi*.92;for(let l=0;l<yh.length;l++){const c=yh[l],h=c.colorArr,f=c.posArr,p=c.segments,m=c.rows;c.mat.opacity=So*(.5+l*.05);for(let x=0;x<=p;x++){const d=x/p,g=Math.sin(d*6+t*c.speed+c.phase)*.5+.5,S=Math.sin(d*3-t*c.speed*.4+c.phase*1.3)*.5+.5,_=Math.sin(d*1.5+t*.07)*.5+.5,w=Math.sin(d*1.2+t*.05+c.phase*.7)*.5+.5,A=(g*.3+S*.25+_*.2+w*.25)*So,E=(d*3+t*.08+c.colorShift)%Cr.length,T=Math.floor(E),b=E-T,y=Cr[T%Cr.length],M=Cr[(T+1)%Cr.length],R=(y.r+(M.r-y.r)*b)*A,L=(y.g+(M.g-y.g)*b)*A,D=(y.b+(M.b-y.b)*b)*A,F=u*.025,V=Math.sin(d*5+t*.3+c.phase)*F+Math.sin(d*2.5-t*.15+c.phase*.6)*F*.5;for(let k=0;k<m;k++){const O=x*m+k,B=k/(m-1);let it;B<.33?it=B*1.2:B>.67?it=(1-B)*1.5:it=.7+Math.sin(B*Math.PI)*.3,h[O*3]=R*it,h[O*3+1]=L*it,h[O*3+2]=D*it,c.arcStart+d*c.arcSpan+c.azimuthOffset;const ut=(B-.5)*.05,ft=c.elevation+ut,Pt=V*(.3+B*.7);f[O*3+1]=Math.cos(ft)*u+Pt}}c.geo.attributes.color.needsUpdate=!0,c.geo.attributes.position.needsUpdate=!0}}const J={pos:new z(0,il,0),vel:new z,onGround:!0};let $l=0,jl=0,Vp=0,Jl=65,f0=65,Pr=0,d0=!0,Kl=0,lr=0,wh=null,Sh=null,bh=null,p0=1;function Uw(i,t,e){wh=i,Sh=t,bh=e}let Th=[],Eh=[],Ah=null;function Nw(i,t){Th=i,Eh=t}function zw(i){Ah=i}function Fw(i){const t=Mw(),e=Ge.ShiftLeft||Ge.ShiftRight||gr;J.vel.x=t.x,J.vel.z=t.z,J.vel.y-=R1*i,(Ge.Space||ol)&&J.onGround&&(J.vel.y=Fc,J.onGround=!1,xw(!1),Sh&&Sh()),J.onGround||(Kl=J.vel.y),J.pos.x+=J.vel.x*i,J.pos.y+=J.vel.y*i,J.pos.z+=J.vel.z*i;const n=Bt(J.pos.x,J.pos.z)+il;if(J.pos.y<=n){if(J.pos.y=n,J.vel.y=0,!d0&&Kl<-3){const c=Math.min(Math.abs(Kl)/Fc,1);Pr=c*.15,Ah&&Ah(J.pos.x,J.pos.z,Math.floor(3+c*5)),bh&&bh(c)}J.onGround=!0}d0=J.onGround,J.onGround?(J.vel.x*=s0,J.vel.z*=s0):(J.vel.x*=o0,J.vel.z*=o0);const s=.4;for(let c=0;c<Th.length;c++){const h=Th[c],f=J.pos.x-h.x,p=J.pos.z-h.z,m=f*f+p*p,x=.6+s;if(m<x*x&&m>.001){const d=1/Math.sqrt(m);J.pos.x=h.x+f*d*x,J.pos.z=h.z+p*d*x}}for(let c=0;c<Eh.length;c++){const h=Eh[c],f=J.pos.x-h.x,p=J.pos.z-h.z,m=f*f+p*p,x=h.colR+s;if(m<x*x&&m>.001){const d=1/Math.sqrt(m);J.pos.x=h.x+f*d*x,J.pos.z=h.z+p*d*x}}if(Math.sqrt(J.pos.x*J.pos.x+J.pos.z*J.pos.z)>Jt){const c=Math.atan2(J.pos.z,J.pos.x);J.pos.x=Math.cos(c)*Jt,J.pos.z=Math.sin(c)*Jt}Lf.position.copy(J.pos);const a=Math.sqrt(t.x*t.x+t.z*t.z)>.5&&J.onGround;a?lr=0:lr+=i,jl+=((a?e?.06:.035:0)-jl)*i*6,a&&($l+=i*(e?12:8));const l=Math.sin($l)*jl;if(a&&wh){const c=Math.sin($l)>=0?1:-1;p0>0&&c<0&&wh(e),p0=c}f0=e&&a?78:65,Jl+=(f0-Jl)*i*4,Mn.fov=Jl,Mn.updateProjectionMatrix(),Pr*=Math.pow(.04,i),Pr<.001&&(Pr=0),Vp=l-Pr}function Ja(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,u=new be;let l=0;for(let c=0;c<i.length;++c){const h=i[c];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;u.addGroup(l,p,c),l+=p}}if(e){let c=0;const h=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let m=0;m<p.count;++m)h.push(p.getX(m)+c);c+=i[f].attributes.position.count}u.setIndex(h)}for(const c in o){const h=m0(o[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;u.setAttribute(c,h)}for(const c in r){const h=r[c][0].length;if(h===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[c]=[];for(let f=0;f<h;++f){const p=[];for(let x=0;x<r[c].length;++x)p.push(r[c][x][f]);const m=m0(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;u.morphAttributes[c].push(m)}}return u}function m0(i){let t,e,n,s=-1,o=0;for(let l=0;l<i.length;++l){const c=i[l];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=c.count*e}const r=new t(o),a=new Fe(r,e,n);let u=0;for(let l=0;l<i.length;++l){const c=i[l];if(c.isInterleavedBufferAttribute){const h=u/e;for(let f=0,p=c.count;f<p;f++)for(let m=0;m<e;m++){const x=c.getComponent(f,m);a.setComponent(f+h,m,x)}}else r.set(c.array,u);u+=c.count*e}return s!==void 0&&(a.gpuType=s),a}function g0(i,t,e){return i+(t-i)*e}let bo=null;function Ow(){if(bo)return bo;const i=256,t=512,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,t);s.addColorStop(0,"#5a4030"),s.addColorStop(.3,"#4d3528"),s.addColorStop(.7,"#3a2a1e"),s.addColorStop(1,"#2e2015"),n.fillStyle=s,n.fillRect(0,0,i,t);for(let o=0;o<28;o++){const r=o/28*i+Math.sin(o*3.7)*6,a=2+Math.sin(o*2.1)*1.5,u=Math.sin(o*1.3+.5)*.5+.5,l=Math.floor(50+u*30),c=Math.floor(30+u*20),h=Math.floor(15+u*12);n.strokeStyle=`rgba(${l},${c},${h},0.4)`,n.lineWidth=a,n.beginPath();let f=0;for(n.moveTo(r,f);f<t;){f+=8+Math.random()*12;const p=Math.sin(f*.03+o)*3;n.lineTo(r+p,f)}n.stroke()}for(let o=0;o<18;o++){const r=o/18*i+Math.sin(o*5.3)*8;n.strokeStyle="rgba(20,12,6,0.35)",n.lineWidth=.8+Math.random()*1.2,n.beginPath();let a=Math.random()*40;for(n.moveTo(r,a);a<t;)a+=5+Math.random()*10,n.lineTo(r+Math.sin(a*.05+o*2)*4,a);n.stroke()}for(let o=0;o<30;o++){const r=o/30*t+Math.random()*10;n.strokeStyle=`rgba(${30+Math.random()*20},${18+Math.random()*12},${8+Math.random()*8},0.15)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,r);for(let a=0;a<i;a+=10)n.lineTo(a,r+Math.sin(a*.04+o)*2);n.stroke()}for(let o=0;o<5;o++){const r=Math.random()*i,a=50+Math.random()*(t-100),u=4+Math.random()*6,l=3+Math.random()*5,c=n.createRadialGradient(r,a,0,r,a,u);c.addColorStop(0,"rgba(15,8,4,0.5)"),c.addColorStop(.5,"rgba(30,18,10,0.3)"),c.addColorStop(1,"rgba(40,25,14,0)"),n.fillStyle=c,n.beginPath(),n.ellipse(r,a,u,l,0,0,Math.PI*2),n.fill()}for(let o=0;o<8;o++){const r=Math.random()*i;n.strokeStyle="rgba(34,136,85,0.08)",n.lineWidth=.5+Math.random()*.8,n.beginPath();let a=Math.random()*t*.3;n.moveTo(r,a);const u=30+Math.random()*80;for(;a<a+u&&a<t;)a+=4+Math.random()*6,n.lineTo(r+Math.sin(a*.08+o*2)*2,a);n.stroke()}return bo=new ca(e),bo.wrapS=er,bo.wrapT=er,bo}const ia=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}];let Ka=null;function Bw(){if(Ka)return Ka;const i=64,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(68, 255, 136, 0.55)"),n.addColorStop(.25,"rgba(34, 204, 100, 0.35)"),n.addColorStop(.6,"rgba(20, 120, 60, 0.12)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,i,i),Ka=new ca(t),Ka}function Gw(i,t){const e=new up({map:Bw(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:Qt}),n=new ox(e),s=i*.55;return n.scale.set(s*2.2,s*1.6,1),n.position.y=t+i*.6,n.visible=!1,at.add(n),n}function kw(i){const t=new te,e=6+v()*10,n=.2+v()*.3,s=n*1.8,o=new C(new gt(n*.4,s,e,8));o.material=new q({color:5914672}),o.position.y=e/2,o.userData._cat="trunk",t.add(o);const r=2+Math.floor(v()*3);for(let _=0;_<r;_++){const w=_/r*6.28+v()*.5,A=e*.4+v()*e*.4,E=new C(new gt(.008,.015,A,3));E.material=new q({color:2263125}),E.position.set(Math.cos(w)*n*.74,e*.15+A/2,Math.sin(w)*n*.74),E.userData._cat="detail",t.add(E)}const a=new z(0,1,0),u=4+Math.floor(v()*4);for(let _=0;_<u;_++){const w=_/u*6.28+v()*.4,A=1.2+v()*2.5,E=s*(.3+v()*.2),T=.03+v()*.03,b=-.1-v()*.15,y=Math.cos(w)*Math.cos(b),M=Math.sin(b),R=Math.sin(w)*Math.cos(b),L=new z(y,M,R).normalize(),D=new gt(T,E,A,5);D.translate(0,A/2,0);const F=new C(D,new q({color:4864040}));F.position.set(Math.cos(w)*s*.6,.05,Math.sin(w)*s*.6);const V=new gs().setFromUnitVectors(a,L);if(F.quaternion.copy(V),F.userData._cat="trunk",t.add(F),v()<.6){const k=.4+v()*.3,O=w+(v()-.5)*1.2,B=.5+v()*1,it=new z(Math.cos(O)*Math.cos(-.1),Math.sin(-.1),Math.sin(O)*Math.cos(-.1)).normalize(),ut=new gt(.02,E*.3,B,4);ut.translate(0,B/2,0);const ft=new C(ut,new q({color:4864040})),Pt=new z(Math.cos(w)*s*.6+y*A*k,.05+M*A*k,Math.sin(w)*s*.6+R*A*k);ft.position.copy(Pt);const Wt=new gs().setFromUnitVectors(a,it);ft.quaternion.copy(Wt),ft.userData._cat="trunk",t.add(ft)}else v(),v()}const l=ia[i%ia.length],c=new q({color:5914672}),h=new q({color:4863269}),f=new z(0,1,0);function p(_,w,A,E,T,b){const y=new gt(T,E,A,5);y.translate(0,A/2,0);const M=new C(y,b);M.position.copy(_);const R=w.clone().normalize(),L=new gs().setFromUnitVectors(f,R);M.quaternion.copy(L),M.userData._cat="trunk",t.add(M)}function m(_,w,A,E){const T=3+Math.floor(v()*4),b=E*.45;for(let M=0;M<T;M++){const R=E*(.12+v()*.18),L=new C(new rr(R,1)),D=v()<.3;L.material=new q({color:D?l.core:l.leaf}),L.position.set(_+(v()-.5)*b*2,w+(v()-.3)*b*1.4,A+(v()-.5)*b*2),L.scale.set(.7+v()*.8,.5+v()*.9,.7+v()*.8),L.userData._cat="canopy",t.add(L)}const y=new C(new rr(E*.5,1));y.material=new q({color:l.glow}),y.position.set(_,w,A),y.scale.set(1+v()*.3,.7+v()*.4,1+v()*.3),y.userData._cat="glow",t.add(y)}const x=2+Math.floor(v()*2);for(let _=0;_<x;_++){const w=e*(.3+v()*.25),A=_/x*Math.PI*2+v()*1,E=.35+v()*.45,T=1+v()*1.8,b=n*.4,y=n*.08,M=Math.cos(A)*Math.cos(E),R=Math.sin(E),L=Math.sin(A)*Math.cos(E),D=new z(M,R,L),F=new z(Math.cos(A)*n*.95,w,Math.sin(A)*n*.95);if(p(F,D,T,b,y,c),v()<.4){const V=.4+v()*.8,k=new C(new gt(.008,.003,V,3));k.material=new q({color:2773040});const O=.4+v()*.4;k.position.set(F.x+M*T*O,F.y+R*T*O-V/2,F.z+L*T*O),k.userData._cat="detail",t.add(k)}else v(),v()}const d=5+Math.floor(v()*4);for(let _=0;_<d;_++){const w=e*(.55+v()*.37),A=_/d*Math.PI*2+v()*.5,E=.6+v()*.55,T=1.5+v()*3,b=n*.35,y=.03+v()*.02,M=Math.cos(A)*Math.cos(E),R=Math.sin(E),L=Math.sin(A)*Math.cos(E),D=new z(M,R,L),F=new z(Math.cos(A)*n*.95,w,Math.sin(A)*n*.95);p(F,D,T,b,y,c);const V=F.x+M*T,k=F.y+R*T,O=F.z+L*T,B=.8+v()*1.5;m(V,k,O,B);const it=1+Math.floor(v()*3);for(let ut=0;ut<it;ut++){const ft=.35+v()*.35,Pt=new z(F.x+M*T*ft,F.y+R*T*ft,F.z+L*T*ft),Wt=A+(v()-.5)*1.8,et=.45+v()*.55,lt=.6+v()*1.4,yt=new z(Math.cos(Wt)*Math.cos(et),Math.sin(et),Math.sin(Wt)*Math.cos(et));p(Pt,yt,lt,.04,.012,h);const mt=Pt.x+yt.x*lt,zt=Pt.y+yt.y*lt,Ot=Pt.z+yt.z*lt,$t=.5+v()*.8;m(mt,zt,Ot,$t)}if(v()<.3){const ut=.3+v()*.7,ft=new C(new gt(.008,.003,ut,3));ft.material=new q({color:2773040});const Pt=.5+v()*.3;ft.position.set(F.x+M*T*Pt,F.y+R*T*Pt-ut/2,F.z+L*T*Pt),ft.userData._cat="detail",t.add(ft)}else v(),v()}const g=Math.floor(v()*3);for(let _=0;_<g;_++){const w=1+v()*e*.4,A=v()*6.28,E=.08+v()*.08,T=new C(new $(E,5,3));T.material=new q({color:5911840}),T.scale.set(1.5,.3,1),T.position.set(Math.cos(A)*n*.8,w,Math.sin(A)*n*.8),T.rotation.y=-A,T.userData._cat="detail",t.add(T)}const S=new C(new $(2.5+v()*1.5,8,6));return S.material=new q({color:new rt(U.leaf)}),S.position.y=e*.85,S.userData._cat="glow",t.add(S),t.userData.treeH=e,t}function Hw(i,t){const e=Bp();mh(7919+t*1013+i*3571);const n=kw(i),s=n.userData.treeH;mh(e),n.updateMatrixWorld(!0);const o=[],r=[],a=[],u=[],l=new rt;for(let m=0;m<n.children.length;m++){const x=n.children[m];if(!x.isMesh)continue;let d=x.geometry.clone();if(x.updateMatrix(),d.applyMatrix4(x.matrix),d.index){const A=d.toNonIndexed();d.dispose(),d=A}const g=x.userData._cat||"trunk";g==="trunk"?l.set(16777215):l.copy(x.material.color);const _=d.attributes.position.count,w=new Float32Array(_*3);for(let A=0;A<_;A++)w[A*3]=l.r,w[A*3+1]=l.g,w[A*3+2]=l.b;if(d.setAttribute("color",new Fe(w,3)),g==="trunk"){if(!d.attributes.uv){const A=new Float32Array(_*2);d.setAttribute("uv",new Fe(A,2))}}else d.attributes.uv&&d.deleteAttribute("uv");g==="trunk"?o.push(d):g==="canopy"?r.push(d):g==="glow"?a.push(d):g==="detail"&&u.push(d),x.material.dispose()}const c=o.length>0?Ja(o):null,h=r.length>0?Ja(r):null,f=a.length>0?Ja(a):null,p=u.length>0?Ja(u):null;for(const m of o)m.dispose();for(const m of r)m.dispose();for(const m of a)m.dispose();for(const m of u)m.dispose();return{trunkGeo:c,canopyGeo:h,glowGeo:f,detailGeo:p,treeH:s,palIdx:i}}const Ee=new fe;function Vw(i){const t=[];for(let e=0;e<i;e++){const n=e%ia.length,s=Math.floor(e/ia.length);t.push(Hw(n,s))}return t}function Ww(i,t,e){const n=[];for(let s=0;s<i.length;s++){const o=i[s],r=ia[o.palIdx],a=Ow(),u=new q({vertexColors:!0,map:a,roughness:.85,emissive:1708040,emissiveIntensity:.3}),l=o.trunkGeo?new ii(o.trunkGeo,u,e):null;l&&(l.instanceMatrix.setUsage(ye),l.count=0,at.add(l));const c=new q({vertexColors:!0,roughness:.5,emissive:r.glow,emissiveIntensity:.45,transparent:!0,opacity:.4,depthWrite:!1}),h=o.canopyGeo?new ii(o.canopyGeo,c,e):null;h&&(h.instanceMatrix.setUsage(ye),h.count=0,at.add(h));const f=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.08,transparent:!0,opacity:.07,depthWrite:!1}),p=o.glowGeo?new ii(o.glowGeo,f,e):null;p&&(p.instanceMatrix.setUsage(ye),p.count=0,at.add(p));const m=new q({vertexColors:!0,emissive:r.glow,emissiveIntensity:.2}),x=o.detailGeo?new ii(o.detailGeo,m,e):null;x&&(x.instanceMatrix.setUsage(ye),x.count=0,at.add(x)),n.push({trunk:l,canopy:h,glow:p,detail:x,trunkMat:u,canopyMat:c,glowMat:f,detailMat:m,instances:[],treeH:o.treeH})}for(let s=0;s<t.length;s++){const o=s%i.length,r=t[s],a=r.yRot,u=r.scale;Ee.position.set(r.x,r.y,r.z),Ee.rotation.set(0,a,0),Ee.scale.setScalar(u),Ee.updateMatrix();const l=n[o].instances.length;n[o].trunk&&n[o].trunk.setMatrixAt(l,Ee.matrix),n[o].canopy&&n[o].canopy.setMatrixAt(l,Ee.matrix),n[o].glow&&n[o].glow.setMatrixAt(l,Ee.matrix),n[o].detail&&n[o].detail.setMatrixAt(l,Ee.matrix),n[o].instances.push({x:r.x,z:r.z,y:r.y,yRot:a,scale:u,treeH:r.treeH||n[o].treeH,posIdx:s})}for(let s=0;s<n.length;s++){const o=n[s].instances.length;n[s].trunk&&(n[s].trunk.count=o),n[s].canopy&&(n[s].canopy.count=o),n[s].glow&&(n[s].glow.count=o),n[s].detail&&(n[s].detail.count=0)}return n}function Xw(i,t,e,n,s,o,r,a,u){for(let l=0;l<i.length;l++){const c=i[l];let h=0,f=0,p=0,m=0;for(let x=0;x<c.instances.length;x++){const d=c.instances[x],g=d.x-e,S=d.z-s,_=d.y+(d.treeH||10)*.4-n,w=g*g+_*_+S*S,A=d.posIdx,E=t[A];if(w>13225){E&&(E.visible=!1);continue}if(w>11025){if(E){const T=Math.sqrt(w);E.visible=!0,E.material.opacity=g0(.65,0,(T-105)/10)}continue}if(w>5625){E&&(E.visible=!0,E.material.opacity=.65);continue}if(w>3969){const b=(Math.sqrt(w)-63)/12;E&&(E.visible=!0,E.material.opacity=g0(0,.65,b)),Ee.position.set(d.x,d.y,d.z),Ee.rotation.set(0,d.yRot,0),Ee.scale.setScalar(d.scale),Ee.updateMatrix(),c.trunk&&c.trunk.setMatrixAt(h++,Ee.matrix),c.canopy&&c.canopy.setMatrixAt(f++,Ee.matrix),c.glow&&c.glow.setMatrixAt(p++,Ee.matrix);continue}if(E&&(E.visible=!1),Ee.position.set(d.x,d.y,d.z),Ee.scale.setScalar(d.scale),w<400){const T=d.x*.1+d.z*.13;Ee.rotation.set(Math.sin(o*.25+T+1)*.003*r+u*.15,d.yRot,Math.sin(o*.3+T)*.004*r+a*.15),Ee.updateMatrix(),c.detail&&c.detail.setMatrixAt(m++,Ee.matrix)}else Ee.rotation.set(0,d.yRot,0),Ee.updateMatrix();c.trunk&&c.trunk.setMatrixAt(h++,Ee.matrix),c.canopy&&c.canopy.setMatrixAt(f++,Ee.matrix),c.glow&&c.glow.setMatrixAt(p++,Ee.matrix)}c.trunk&&(c.trunk.count=h,c.trunk.instanceMatrix.needsUpdate=!0),c.canopy&&(c.canopy.count=f,c.canopy.instanceMatrix.needsUpdate=!0),c.glow&&(c.glow.count=p,c.glow.instanceMatrix.needsUpdate=!0),c.detail&&(c.detail.count=m,c.detail.instanceMatrix.needsUpdate=!0)}}function qw(i,t){const e=new te,n=.4+v()*1.2,s=v()*6.28,o=.8+v()*1.5,r=.5+v()*.8,a=new C(Dn.mushStem,new q({color:U.mushStem,roughness:.7,emissive:U.mushGlow,emissiveIntensity:.1}));a.position.y=.3,e.add(a);const u=new q({color:U.mushStem,emissive:U.mushGlow,emissiveIntensity:.15,roughness:.6}),l=new C(new Re(.09,.012,4,8),u);l.position.y=.42,l.rotation.x=Math.PI/2,e.add(l);const c=new q({color:U.mushCap,emissive:U.mushGlow,emissiveIntensity:r,roughness:.3,transparent:!0,opacity:.9}),h=new C(Dn.mushCap,c);h.scale.set(1,.5,1),h.position.y=.55,h.castShadow=!0,h.receiveShadow=!0,e.add(h);const f=new q({color:6693546,emissive:U.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:Ct});for(let M=0;M<8;M++){const R=M/8*6.28,L=new C(new oe(.35,.08),f);L.position.set(Math.cos(R)*.15,.48,Math.sin(R)*.15),L.rotation.y=-R,L.rotation.x=.1,e.add(L)}for(let M=0;M<4;M++){const R=new Z({color:16777215,transparent:!0,opacity:.9}),L=new C(Dn.mushDot,R),D=v()*6.28,F=.15+v()*.25;L.position.set(Math.cos(D)*F,.6+v()*.1,Math.sin(D)*F),e.add(L)}const p=new q({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),m=2+Math.floor(v()*2);for(let M=0;M<m;M++){const R=new C(new $(.015+v()*.015,4,3),p),L=v()*6.28,D=.1+v()*.2;R.position.set(Math.cos(L)*D,.63+v()*.08,Math.sin(L)*D),e.add(R)}const x=new q({color:4465322,emissive:U.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35});for(let M=0;M<4;M++){const R=v()*6.28,L=.15+v()*.25,D=new C(new gt(.004,.002,L,3),x);D.position.set(Math.cos(R)*.12,.01,Math.sin(R)*.12),D.rotation.z=1.3*(R<3.14?1:-1),D.rotation.y=R,e.add(D)}const d=new q({color:U.mushCap,emissive:U.mushGlow,emissiveIntensity:r*.6,transparent:!0,opacity:.4}),g=new C(new Re(.38,.01,4,12),d);g.position.y=.49,g.rotation.x=Math.PI/2,e.add(g);const S=new q({color:U.mushStem,emissive:U.mushGlow,emissiveIntensity:.08,roughness:.7}),_=new C(new $(.08,5,3),S);_.scale.set(1,.5,1),_.position.y=.04,e.add(_);const w=new q({color:1708040,roughness:.95});for(let M=0;M<3;M++){const R=v()*6.28,L=.1+v()*.12,D=new C(new $(.008+v()*.008,3,3),w);D.position.set(Math.cos(R)*L,.005,Math.sin(R)*L),e.add(D)}const A=new Z({color:U.mushGlow,transparent:!0,opacity:.2});for(let M=0;M<4;M++){const R=new C(new $(.006,3,3),A);R.position.set((v()-.5)*.2,.35+v()*.1,(v()-.5)*.2),e.add(R)}const E=new q({color:11167453,emissive:U.mushGlow,emissiveIntensity:r*.3,roughness:.5}),T=3+Math.floor(v()*3);for(let M=0;M<T;M++){const R=v()*6.28,L=v()*.25,D=new C(new $(.015+v()*.015,3,3),E);D.position.set(Math.cos(R)*L,.58+v()*.06,Math.sin(R)*L),e.add(D)}const b=new q({color:657416,transparent:!0,opacity:.2,roughness:.95,side:Ct}),y=new C(new Be(.18,8),b);return y.rotation.x=-Math.PI/2,y.position.y=.005,e.add(y),e.scale.setScalar(n),e.position.set(i,0,t),at.add(e),{group:e,capMat:c,phase:s,speed:o,base:r,x:i,z:t}}function Yw(i,t){const e=new te,n=v()*6.28,s=new q({color:U.crystal,emissive:U.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),o=new C(Dn.crystal,s);o.position.y=.9,o.castShadow=!0,e.add(o);for(let _=0;_<3;_++){const w=new C(Dn.crystalSm,s),A=_/3*6.28+v()*.5;w.position.set(Math.cos(A)*.4,.45,Math.sin(A)*.4),w.rotation.z=(v()-.5)*.8,w.castShadow=!0,e.add(w)}const r=new q({color:1710626,roughness:.9,metalness:.1}),a=3+Math.floor(v()*3);for(let _=0;_<a;_++){const w=v()*6.28,A=.2+v()*.5,E=.08+v()*.12,T=new C(new $(E,4,3),r);T.scale.set(1+v()*.5,.5+v()*.4,1+v()*.5),T.position.set(Math.cos(w)*A,E*.3,Math.sin(w)*A),T.rotation.set(v(),v(),v()),e.add(T)}const u=new Z({color:U.crystalCore,transparent:!0,opacity:.5});for(let _=0;_<3;_++){const w=.4+v()*.8,A=new C(new gt(.008,.008,w,3),u);A.position.set((v()-.5)*.15,.5+v()*.7,(v()-.5)*.15),A.rotation.set((v()-.5)*.8,(v()-.5)*.5,(v()-.5)*.8),e.add(A)}const l=new Z({color:11206638,transparent:!0,opacity:.6});for(let _=0;_<5;_++){const w=new C(new $(.012,3,3),l);w.position.set((v()-.5)*1,.3+v()*1.5,(v()-.5)*1),e.add(w)}const c=new q({color:U.crystal,emissive:U.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5});for(let _=0;_<4;_++){const w=v()*6.28,A=.3+v()*.3,E=new C(new gt(0,.015,.12+v()*.1,3),c);E.position.set(Math.cos(w)*A,.06+v()*.1,Math.sin(w)*A),E.rotation.z=(v()-.5)*.6,e.add(E)}const h=new q({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:Ct});for(let _=0;_<2;_++){const w=v()*6.28,A=.2+v()*.3,E=new C(new Be(.04+v()*.03,5),h);E.rotation.x=-Math.PI/2+v()*.4,E.position.set(Math.cos(w)*A,.05,Math.sin(w)*A),e.add(E)}const f=new Z({color:U.crystalCore,transparent:!0,opacity:.2});for(let _=0;_<2;_++){const w=new C(new gt(.003,.003,.6+v()*.4,3),f);w.position.set((v()-.5)*.3,.7+v()*.5,(v()-.5)*.3),w.rotation.set((v()-.5)*1,v(),(v()-.5)*1),e.add(w)}const p=new q({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25});for(let _=0;_<4;_++){const w=new C(new $(.02+v()*.02,3,3),p);w.position.set((v()-.5)*.15,.4+v()*.6,(v()-.5)*.15),e.add(w)}const m=new Z({color:11206638,transparent:!0,opacity:.06}),x=new C(new Re(.35,.02,4,10),m);x.position.y=.6,x.rotation.x=Math.PI/2+v()*.3,e.add(x);const d=new Z({color:U.crystal,transparent:!0,opacity:.06,side:Ct}),g=new C(new Be(.8,8),d);g.rotation.x=-Math.PI/2,g.position.y=.01,e.add(g),e.position.set(i,0,t),at.add(e);const S=new pr(U.crystal,.5,8);return S.position.set(i,1.2,t),at.add(S),{group:e,mat:s,phase:n,x:i,z:t,light:S}}const ei={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0}};function Zw(i,t,e,n,s,o){ei.uTime.value=i,ei.uWindAmp.value=t,ei.uWindLeanX.value=e,ei.uWindLeanZ.value=n,ei.uPlayerX.value=s,ei.uPlayerZ.value=o}function $w(i,t,e,n,s){const o=new be,r=[],a=[],u=[],l=n||20,c=new rt(s?s[0]:663568),h=new rt(s?s[1]:1388056),f=new rt(s?s[2]:2777141),p=new rt(s?s[3]:4517461),m=new rt(s?s[4]:7864268),x=new rt(s?s[5]:14548838),d=new rt;for(let b=0;b<l;b++){const y=v()*6.28,M=v()*e,R=Math.cos(y)*M,L=Math.sin(y)*M,D=.25+v()*.65,F=.03+v()*.05,V=(v()-.5)*.2,k=(v()-.5)*.2,O=(v()-.5)*.12,B=v()<.5?c:h,it=v(),ut=it<.4?p:it<.7?m:x,ft=D*.35,Pt=D*.7,Wt=V*.3,et=V*.7,lt=k*.3,yt=k*.7;r.push(R-F,.01,L),r.push(R+F,.01,L),r.push(R+Wt-F*.9,ft,L+lt),u.push(0,0,.35),a.push(B.r,B.g,B.b,B.r,B.g,B.b),d.copy(B).lerp(f,.4),a.push(d.r,d.g,d.b),r.push(R+F,.01,L),r.push(R+Wt+F*.9,ft,L+lt),r.push(R+Wt-F*.9,ft,L+lt),u.push(0,.35,.35),a.push(B.r,B.g,B.b),d.copy(B).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b);const mt=F*.65;r.push(R+Wt-F*.9,ft,L+lt),r.push(R+Wt+F*.9,ft,L+lt),r.push(R+et-mt,Pt,L+yt+O),u.push(.35,.35,.7),d.copy(B).lerp(f,.4),a.push(d.r,d.g,d.b,d.r,d.g,d.b),d.copy(f).lerp(ut,.3),a.push(d.r,d.g,d.b),r.push(R+Wt+F*.9,ft,L+lt),r.push(R+et+mt,Pt,L+yt+O),r.push(R+et-mt,Pt,L+yt+O),u.push(.35,.7,.7),d.copy(B).lerp(f,.4),a.push(d.r,d.g,d.b),d.copy(f).lerp(ut,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),r.push(R+et-mt,Pt,L+yt+O),r.push(R+et+mt,Pt,L+yt+O),r.push(R+V+O*2,D,L+k+O*1.5),u.push(.7,.7,1),d.copy(f).lerp(ut,.3),a.push(d.r,d.g,d.b,d.r,d.g,d.b),a.push(ut.r,ut.g,ut.b)}const g=new rt(s?s[6]:1725736),S=new rt(s?s[7]:3385941),_=Math.floor(l*.3);for(let b=0;b<_;b++){const y=v()*6.28,M=v()*e*.9,R=Math.cos(y)*M,L=Math.sin(y)*M,D=.02+v()*.03;r.push(R-D,.01,L),r.push(R+D,.01,L),r.push(R,.03+v()*.02,L+D),u.push(0,0,.05),a.push(g.r,g.g,g.b),a.push(g.r,g.g,g.b),a.push(S.r,S.g,S.b)}o.setAttribute("position",new Vt(r,3)),o.setAttribute("color",new Vt(a,3)),o.setAttribute("bladeHeight",new Vt(u,1)),o.computeVertexNormals();const w=new q({vertexColors:!0,roughness:.7,side:Ct,emissive:s?s[8]:4521830,emissiveIntensity:.15}),A=i,E=t;w.onBeforeCompile=b=>{b.uniforms.uTime=ei.uTime,b.uniforms.uWindAmp=ei.uWindAmp,b.uniforms.uWindLeanX=ei.uWindLeanX,b.uniforms.uWindLeanZ=ei.uWindLeanZ,b.uniforms.uPlayerX=ei.uPlayerX,b.uniforms.uPlayerZ=ei.uPlayerZ,b.uniforms.uPatchX={value:A},b.uniforms.uPatchZ={value:E},b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
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

        // Proximity glow (6m radius, quadratic falloff)
        vGlow = pd2 < 36.0 ? (1.0 - sqrt(pd2) / 6.0) * hFrac : 0.0;
        vGlow *= vGlow;
      } else {
        vGlow = 0.0;
      }
      `),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
      varying float vGlow;
      `),b.fragmentShader=b.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance *= (1.0 + vGlow * 10.0);
      `)};const T=new C(o,w);return T.position.set(i,0,t),at.add(T),{mesh:T,geo:o,cx:i,cz:t}}function jw(i,t){const e=new te,n=new q({color:U.fern,emissive:U.fernGlow,emissiveIntensity:.08,roughness:.7,side:Ct}),s=3+Math.floor(v()*2),o=.5+v()*.7,r=new q({color:1708552,roughness:.95}),a=new C(new $(.06,5,3),r);a.scale.set(1.5,.5,1.5),a.position.y=.02,e.add(a);for(let g=0;g<3;g++){const S=v()*6.28,_=new C(new gt(.003,.002,.08,3),r);_.position.set(Math.cos(S)*.06,.01,Math.sin(S)*.06),_.rotation.z=(S<3.14?1:-1)*1.2,_.rotation.y=S,e.add(_)}for(let g=0;g<s;g++){const S=g/s*6.28+v()*.3,_=new C(new gt(.004,.006,.55,3),new q({color:1721632,roughness:.8}));_.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),_.rotation.y=-S,_.rotation.x=-.6-v()*.4,e.add(_);const w=new C(new oe(.12,.6,1,3),n);w.position.set(Math.cos(S)*.15,.25,Math.sin(S)*.15),w.rotation.y=-S,w.rotation.x=-.6-v()*.4,e.add(w);for(let E=0;E<6;E++){const T=new C(new oe(.07,.06,1,1),n),b=.06+E*.08,y=E%2===0?1:-1;T.position.set(Math.cos(S)*(.15+.06),b,Math.sin(S)*(.15+.06*y)),T.rotation.y=-S,T.rotation.x=-.8,T.rotation.z=y*.5,e.add(T)}const A=new q({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let E=0;E<3;E++){const T=new C(new $(.008,3,3),A),b=.12+E*.12;T.position.set(Math.cos(S)*(.15+.02),b-.01,Math.sin(S)*(.15+.02)),e.add(T)}}const u=new q({color:U.fernGlow,emissive:U.fernGlow,emissiveIntensity:.3}),l=new C(new $(.04,4,3),u);l.position.y=.35,e.add(l);const c=new C(new gt(.006,.003,.06,3),u);c.position.set(.02,.37,0),c.rotation.z=-.8,e.add(c);const h=new q({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let g=0;g<3;g++){const S=v()*6.28,_=v()*.2,w=new C(new $(.006+v()*.005,3,3),h);w.position.set(Math.cos(S)*_,.12+v()*.2,Math.sin(S)*_),e.add(w)}const f=new q({color:3811856,roughness:.9,side:Ct,transparent:!0,opacity:.6}),p=new C(new oe(.1,.4,1,2),f),m=v()*6.28;p.position.set(Math.cos(m)*.12,.05,Math.sin(m)*.12),p.rotation.x=-1.3,p.rotation.y=m,e.add(p);const x=new Z({color:2768928,transparent:!0,opacity:.3});for(let g=0;g<4;g++){const S=new C(new gt(.001,.001,.015,3),x);S.position.set((v()-.5)*.08,.08+v()*.15,(v()-.5)*.08),S.rotation.z=(v()-.5)*1.5,e.add(S)}const d=new q({color:1708552,roughness:.95});for(let g=0;g<3;g++){const S=new C(new $(.006,3,3),d);S.position.set((v()-.5)*.1,.005,(v()-.5)*.1),e.add(S)}return e.scale.setScalar(o),e.position.set(i,0,t),at.add(e),{group:e,phase:v()*6.28}}function Jw(i,t){const e=new te,n=.25+v()*.4,s=new q({color:U.flowerStem,roughness:.8}),o=new C(new gt(.01,.015,n,4),s);o.position.y=n/2,e.add(o);for(let b=0;b<2;b++){const y=new C(new Rn(.004,.012,3),s);y.position.set(.012,n*.25+b*n*.25,0),y.rotation.z=-1.2,e.add(y)}const r=new q({color:U.fern,roughness:.7,side:Ct}),a=new C(new oe(.06,.04),r);a.position.set(.03,n*.3,0),a.rotation.z=-.5,e.add(a);const u=new C(new oe(.05,.035),r);u.position.set(-.025,n*.5,.01),u.rotation.z=.6,e.add(u);const l=new q({color:1728560,roughness:.7,side:Ct});for(let b=0;b<5;b++){const y=b/5*6.28+.3,M=new C(new oe(.025,.02),l);M.position.set(Math.cos(y)*.025,n-.005,Math.sin(y)*.025),M.rotation.x=-1.2,M.rotation.y=-y,e.add(M)}const c=new q({color:U.flower,emissive:U.flowerGlow,emissiveIntensity:.4+v()*.4,transparent:!0,opacity:.85,side:Ct});for(let b=0;b<6;b++){const y=b/6*6.28,M=new C(new oe(.05,.04),c);M.position.set(Math.cos(y)*.03,n+.01,Math.sin(y)*.03),M.rotation.x=-.8,M.rotation.y=-y,e.add(M)}const h=new q({color:16777215,emissive:U.flowerGlow,emissiveIntensity:1.2}),f=new C(new $(.02,4,3),h);f.position.y=n+.02,e.add(f);const p=new Z({color:16777130,transparent:!0,opacity:.7}),m=new Z({color:16772676});for(let b=0;b<3;b++){const y=b/3*6.28+.5,M=new C(new gt(.002,.002,.025,3),p);M.position.set(Math.cos(y)*.012,n+.03,Math.sin(y)*.012),e.add(M);const R=new C(new $(.005,3,3),m);R.position.set(Math.cos(y)*.012,n+.045,Math.sin(y)*.012),e.add(R)}const x=new Z({color:16777164,transparent:!0,opacity:.3});for(let b=0;b<2;b++){const y=new C(new $(.006,3,3),x);y.position.set((v()-.5)*.04,n+.06+v()*.04,(v()-.5)*.04),e.add(y)}const d=new q({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),g=new C(new $(.006,3,3),d);g.position.set(.005,n+.005,.005),e.add(g);const S=new Z({color:15662984}),_=new C(new gt(.002,.002,.03,3),S);_.position.y=n+.035,e.add(_);const w=new C(new $(.005,3,3),S);w.position.y=n+.055,e.add(w);const A=new q({color:1725728,roughness:.7}),E=new C(new gt(.015,.02,.02,5),A);E.position.y=n-.01,e.add(E);const T=new Z({color:16777215,transparent:!0,opacity:.35});for(let b=0;b<4;b++){const y=b/4*6.28+.3,M=new C(new $(.004,3,3),T);M.position.set(Math.cos(y)*.045,n+.005,Math.sin(y)*.045),e.add(M)}return e.position.set(i,0,t),at.add(e),{group:e,petalMat:c,phase:v()*6.28,baseH:n}}function Kw(i,t){const e=new te,n=new q({color:U.reed,emissive:U.reedTip,emissiveIntensity:.05,roughness:.7}),s=new q({color:U.reedTip,emissive:U.reedTip,emissiveIntensity:.15}),o=new q({color:1709328,roughness:.95}),r=new C(new $(.08,5,3),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=3+Math.floor(v()*4),u=new q({color:U.reed,roughness:.7,side:Ct});for(let p=0;p<a;p++){const m=.6+v()*1,x=(v()-.5)*.2,d=(v()-.5)*.2,g=new C(new gt(.008,.015,m,4),n);g.position.set(x,m/2,d),e.add(g);const S=2+Math.floor(v()*2),_=new q({color:2771488,roughness:.7});for(let E=0;E<S;E++){const T=m*.2+E*m*.25,b=new C(new Re(.012,.004,4,6),_);b.position.set(x,T,d),b.rotation.x=Math.PI/2,e.add(b)}if(v()<.7){const E=.1+v()*.15,T=v()*6.28,b=new C(new oe(.02,E),u);b.position.set(x+Math.cos(T)*.02,m*.4,d+Math.sin(T)*.02),b.rotation.y=-T,b.rotation.x=-.5-v()*.4,e.add(b)}const w=new C(new $(.025,4,3),s);w.scale.set(.8,1.5,.8),w.position.set(x,m+.02,d),e.add(w);const A=new Z({color:U.reedTip,transparent:!0,opacity:.4});for(let E=0;E<3;E++){const T=E/3*6.28+v()*.5,b=new C(new gt(.002,.001,.04,3),A);b.position.set(x+Math.cos(T)*.015,m+.05,d+Math.sin(T)*.015),b.rotation.z=(v()-.5)*.4,e.add(b)}}e.position.set(i,0,t),at.add(e);const l=new q({color:4864536,roughness:.9,side:Ct,transparent:!0,opacity:.5});for(let p=0;p<2;p++){v()*6.28;const m=(v()-.5)*.15,x=new C(new oe(.025,.02),l);x.position.set(m,.2+p*.25,(v()-.5)*.1),x.rotation.set(v()*.5,v(),v()*.5),e.add(x)}const c=new Z({color:15654348,transparent:!0,opacity:.25});for(let p=0;p<3;p++){const m=new C(new $(.005,3,3),c);m.position.set((v()-.5)*.15,.8+v()*.6,(v()-.5)*.15),e.add(m)}const h=new q({color:2241312,roughness:.9,transparent:!0,opacity:.2}),f=new C(new Re(.1,.008,4,8),h);return f.rotation.x=Math.PI/2,f.position.y=.03,e.add(f),{group:e,phase:v()*6.28,swayAmp:.03+v()*.04}}let _n=null;const Xo=[],dn=new fe,Hc=new rt,Wp=new rt(U.dandSeed);function Qw(i){const t=new Z({color:16777215,transparent:!0,opacity:1});_n=new ii(Dn.dandSeed,t,i),_n.instanceMatrix.setUsage(ye),_n.instanceColor=new Ai(new Float32Array(i*3),3),_n.instanceColor.setUsage(ye),dn.scale.setScalar(0),dn.updateMatrix();for(let e=0;e<i;e++)_n.setMatrixAt(e,dn.matrix),Hc.copy(Wp),_n.setColorAt(e,Hc),Xo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});_n.count=i,_n.frustumCulled=!1,at.add(_n)}function Xp(i,t,e){let n=null;for(let o=0;o<Xo.length;o++)if(!Xo[o].active){n=Xo[o];break}if(!n)return;n.x=i+(Math.random()-.5)*.1,n.y=t,n.z=e+(Math.random()-.5)*.1;const s=Math.random()*6.28;n.vx=Math.cos(s)*.5+Math.random()*.3,n.vy=.6+Math.random()*.8,n.vz=Math.sin(s)*.5,n.life=4+Math.random()*5,n.max=n.life,n.active=!0,n.drift=Math.random()*6.28}let qp=0,Yp=0,Zp=0;function tS(i,t,e){qp=i,Yp=t,Zp=e}function eS(i,t){let e=!1;for(let n=0;n<Xo.length;n++){const s=Xo[n];if(!s.active){dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(n,dn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,dn.position.set(0,-100,0),dn.scale.setScalar(0),dn.updateMatrix(),_n.setMatrixAt(n,dn.matrix);continue}s.drift+=(Math.random()-.5)*1.5*i,s.vx+=Math.sin(s.drift)*.3*i,s.vz+=Math.cos(s.drift)*.2*i,s.vx+=qp*.5*i,s.vz+=Yp*.5*i,s.vy+=(.15+Zp*.1-s.vy)*i*.5,s.vx*=.998,s.vy*=.998,s.vz*=.998,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const r=s.life/s.max*.7*(.6+Math.sin(t*2+n)*.4),a=.8+Math.sin(t*3+n*.5)*.3;dn.position.set(s.x,s.y,s.z),dn.scale.setScalar(a),dn.updateMatrix(),_n.setMatrixAt(n,dn.matrix),Hc.copy(Wp).multiplyScalar(r),_n.setColorAt(n,Hc),e=!0}_n.instanceMatrix.needsUpdate=!0,e&&(_n.instanceColor.needsUpdate=!0)}function nS(i,t){const e=new te,n=.35+v()*.45,s=new q({color:2777128,roughness:.7,side:Ct}),o=3+Math.floor(v()*2);for(let _=0;_<o;_++){const w=_/o*6.28+v()*.3,A=new C(new oe(.08,.035),s);A.position.set(Math.cos(w)*.05,.02,Math.sin(w)*.05),A.rotation.x=-1.4,A.rotation.y=-w,e.add(A)}const r=new q({color:U.dandStem,roughness:.8}),a=new C(new gt(.008,.012,n,4),r);a.position.y=n/2,e.add(a);const u=new Z({color:14540236,transparent:!0,opacity:.3});for(let _=0;_<4;_++){const w=n*.2+_*n*.18,A=new C(new gt(.002,.001,.02,3),u);A.position.set(.01,w,0),A.rotation.z=-.8,e.add(A)}const l=new q({color:U.fern,roughness:.7,side:Ct}),c=new C(new oe(.07,.03),l);c.position.set(.03,n*.15,0),c.rotation.z=-.4,e.add(c);const h=new q({color:U.dandHead,emissive:U.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new C(new $(.07,6,5),h);f.position.y=n+.05,e.add(f);const p=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),m=new C(new $(.012,4,3),p);m.position.set(.04,n+.07,.03),e.add(m);const x=new Z({color:U.dandSeed,transparent:!0,opacity:.7});for(let _=0;_<8;_++){const w=_/8*6.28+v()*.2,A=new C(new Rn(.015,.05,3),x);A.position.set(Math.cos(w)*.06,n+.05+v()*.04,Math.sin(w)*.06),A.rotation.x=(v()-.5)*.6,A.rotation.z=(v()-.5)*.6,e.add(A);const E=new Z({color:16777215,transparent:!0,opacity:.3}),T=new C(new gt(.001,.001,.03,3),E);T.position.set(Math.cos(w)*.08,n+.08,Math.sin(w)*.08),T.rotation.set((v()-.5)*.5,0,(v()-.5)*.5),e.add(T);const b=new Z({color:15658717,transparent:!0,opacity:.15});for(let y=0;y<2;y++){const M=w+(y-.5)*.5,R=new C(new gt(8e-4,8e-4,.025,3),b);R.position.set(Math.cos(M)*.075,n+.09,Math.sin(M)*.075),R.rotation.set((v()-.5)*.8,0,(v()-.5)*.8),e.add(R)}}const d=new q({color:3811856,roughness:.9});for(let _=0;_<4;_++){const w=_/4*6.28+v()*.5,A=new C(new $(.005,3,3),d);A.scale.set(.6,1.5,.6),A.position.set(Math.cos(w)*.04,n+.04,Math.sin(w)*.04),e.add(A)}const g=new Z({color:1716240,transparent:!0,opacity:.15});for(let _=0;_<3;_++){const w=_/3*6.28,A=new C(new gt(.001,.001,n*.7,3),g);A.position.set(Math.cos(w)*.01,n*.35,Math.sin(w)*.01),e.add(A)}const S=new Z({color:13426107,transparent:!0,opacity:.2});for(let _=0;_<5;_++){const w=n*.1+v()*n*.7,A=v()*6.28,E=new C(new gt(8e-4,8e-4,.012,3),S);E.position.set(Math.cos(A)*.012,w,Math.sin(A)*.012),E.rotation.z=A<3.14?-.8:.8,E.rotation.y=A,e.add(E)}return e.position.set(i,0,t),at.add(e),{group:e,headMat:h,x:i,z:t,h:n,dispersed:!1,phase:v()*6.28,seedCount:8,regrowTimer:0}}function iS(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s];if(o.dispersed){if(o.regrowTimer-=t,o.regrowTimer<=0){o.dispersed=!1;for(let r=2;r<o.group.children.length;r++)o.group.children[r].visible=!0}o.group.rotation.z=Math.sin(e*.9+o.phase)*.02}else{const r=o.x-n.x,a=o.z-n.z;if(r*r+a*a<1.2){o.dispersed=!0;for(let u=0;u<8;u++)Xp(o.x,o.h+.05,o.z);for(let u=2;u<o.group.children.length;u++)o.group.children[u].visible=!1;o.regrowTimer=15+Math.random()*10}else o.group.rotation.z=Math.sin(e*.9+o.phase)*.04,o.headMat.emissiveIntensity=.15+Math.sin(e*1.2+o.phase)*.1}}}function sS(i,t){const e=new te,n=1+v()*.8,s=.25+v()*.15,o=new q({color:U.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),r=new C(new gt(.04,.07,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:U.thornSpike,roughness:.6}),u=4+Math.floor(v()*3);for(let w=0;w<u;w++){const A=n*.15+w/u*n*.6,E=w/u*6.28+v()*1,T=new C(new Rn(.015,.08+v()*.04,3),a);T.position.set(Math.cos(E)*.06,A,Math.sin(E)*.06),T.rotation.z=(E<3.14?1.3:-1.3)+v()*.2,T.rotation.y=E,e.add(T)}const l=new q({color:U.thornOrb,emissive:U.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),c=new C(new $(s,12,10),l);c.position.y=n+s*.5,e.add(c);const h=new q({color:16777164,emissive:U.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),f=new C(new $(s*.35,8,6),h);f.position.y=n+s*.5,e.add(f);const p=new Z({color:U.thornOrbGlow,transparent:!0,opacity:.06,blending:Qt,depthWrite:!1}),m=new C(new $(s*2,8,6),p);m.position.y=n+s*.5,e.add(m);const x=new q({color:U.thornSpike,emissive:U.thornOrbGlow,emissiveIntensity:.3,roughness:.5}),d=6+Math.floor(v()*3);for(let w=0;w<d;w++){const A=w/d*6.28+v()*.3,E=(v()-.5)*1.2,T=.3+v()*.3,b=new C(new Rn(.018,T,4),x);b.position.set(Math.cos(A)*s*.8,n+s*.5+Math.sin(E)*s*.5,Math.sin(A)*s*.8),b.rotation.z=-E+(A<3.14?1.4:-1.4),b.rotation.y=A,e.add(b)}const g=new q({color:U.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:Ct}),S=4+Math.floor(v()*2);for(let w=0;w<S;w++){const A=w/S*6.28+v()*.3,E=.2+v()*.15,T=new C(new oe(E,E*1.5),g);T.position.set(Math.cos(A)*(s+.05),n+s*.3-v()*.1,Math.sin(A)*(s+.05)),T.rotation.y=-A,T.rotation.x=-.4-v()*.3,e.add(T)}const _=new q({color:1718296,emissive:662026,emissiveIntensity:.05,side:Ct});for(let w=0;w<2;w++){const A=v()*6.28,E=new C(new oe(.15,.25),_);E.position.set(Math.cos(A)*.12,n*.3,Math.sin(A)*.12),E.rotation.y=-A,E.rotation.x=-.8,e.add(E)}return e.position.set(i,0,t),at.add(e),{group:e,orbMat:l,hazeMat:p,phase:v()*6.28,x:i,z:t}}function oS(i,t){const e=new te,n=2+Math.floor(v()*2),s=new q({color:1710128,roughness:.85,emissive:U.helixStem,emissiveIntensity:.1}),o=new C(new $(.18,8,6),s);o.scale.set(1.2,.5,1.2),o.position.y=.05,e.add(o);const r=[];for(let l=0;l<n;l++){const c=1.5+v()*1,h=.15+v()*.15,f=1.5+v()*1.5,p=v()*6.28,m=[],x=16;for(let L=0;L<=x;L++){const D=L/x,F=p+D*f*6.28,V=h*(.3+D*.7);m.push(new z(Math.cos(F)*V,D*c,Math.sin(F)*V))}const d=new to(m),g=new q({color:U.helixStem,emissive:U.helixNode,emissiveIntensity:.12,roughness:.7}),S=new C(new on(d,20,.025+v()*.01,5,!1),g);e.add(S);const _=.1+v()*.08,A=v()<.5?new Tf(_,0):new bf(_,0),E=new q({color:U.helixPod,emissive:U.helixPodGlow,emissiveIntensity:.5+v()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),T=new C(A,E),b=d.getPoint(1);T.position.copy(b),T.rotation.set(v()*3,v()*3,v()*3),e.add(T),r.push(E);const y=new C(new $(_*2.5,6,4),new Z({color:U.helixPodGlow,transparent:!0,opacity:.05,blending:Qt,depthWrite:!1}));y.position.copy(b),e.add(y);const M=1+Math.floor(v()*2);for(let L=0;L<M;L++){const D=.3+v()*.5,F=d.getPoint(D),V=new q({color:U.helixRing,emissive:U.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),k=new C(new Re(.1+v()*.08,.008,6,12),V);k.position.copy(F),k.rotation.set(v()*3,v()*3,v()*3),e.add(k)}const R=2+Math.floor(v()*2);for(let L=0;L<R;L++){const D=.2+L/R*.6,F=d.getPoint(D),V=new q({color:U.helixNode,emissive:U.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),k=new C(new $(.025+v()*.015,5,4),V);k.position.copy(F),e.add(k)}}const a=new q({color:U.helixStem,emissive:U.helixNode,emissiveIntensity:.06,roughness:.8}),u=2+Math.floor(v()*2);for(let l=0;l<u;l++){const c=l/u*6.28+v()*.5,h=.3+v()*.4,f=new C(new gt(.006,.015,h,3),a);f.position.set(Math.cos(c)*.12,h*.3,Math.sin(c)*.12),f.rotation.z=(c<3.14?.8:-.8)+v()*.3,f.rotation.y=c,e.add(f)}return e.position.set(i,0,t),at.add(e),{group:e,podMats:r,phase:v()*6.28}}function rS(i,t){const e=new te,n=.25+v()*.1,s=new q({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06});for(let f=0;f<3;f++){const p=f/3*6.28+v()*.5,m=new C(new gt(.01,.035,.25+v()*.15,4),s);m.position.set(Math.cos(p)*n*.6,.06,Math.sin(p)*n*.6),m.rotation.z=p<3.14?1:-1,m.rotation.y=p,e.add(m)}const o=new q({color:U.snapBody,emissive:U.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),r=new C(new $(n,10,8),o);r.position.y=n+.05,r.scale.set(1,.85,1),e.add(r);const a=new q({color:1730116,emissive:U.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6}),u=new C(new Re(n*.45,.02,6,12),a);u.position.y=n*1.7,u.rotation.x=Math.PI/2,e.add(u);const l=5+Math.floor(v()*3),c=[],h=[];for(let f=0;f<l;f++){const p=f/l*6.28+v()*.3,m=v()*6.28,x=3+Math.floor(v()*2),d=.2+v()*.1,g=[],S=new fe;S.position.set(Math.cos(p)*n*.6,n*1.4,Math.sin(p)*n*.6),S.rotation.y=p,e.add(S);let _=S;for(let T=0;T<x;T++){const b=T/x,y=.02*(1-b*.6),M=new q({color:U.snapFrond,emissive:U.snapBodyGlow,emissiveIntensity:.08+b*.15,roughness:.6}),R=new C(new gt(y*.7,y,d,4),M);R.position.y=T===0?0:d,R.geometry.translate(0,d/2,0),_.add(R),g.push(R),_=R}const w=new q({color:U.snapTip,emissive:U.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),A=new C(new $(.025+v()*.015,5,4),w);A.position.y=d,_.add(A),h.push(w);const E=new C(new $(.06,4,3),new Z({color:U.snapTipGlow,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}));A.add(E),c.push({segments:g,baseAngle:p,phaseOffset:m,segLen:d})}return e.position.set(i,0,t),at.add(e),{group:e,body:r,bodyMat:o,tipMats:h,fronds:c,phase:v()*6.28,x:i,z:t}}function aS(i,t,e,n){for(let s=0;s<i.length;s++){const o=i[s],r=Math.sin(e*1.5+o.phase)*.08;o.body.scale.set(1+r,.85+r*.5,1+r),o.bodyMat.emissiveIntensity=(.3+Math.sin(e*2+o.phase)*.15)*n;for(let a=0;a<o.fronds.length;a++){const u=o.fronds[a],l=1.2+a%3*.3;for(let c=0;c<u.segments.length;c++){const h=u.segments[c],f=.15+c*.12,p=Math.sin(e*l+u.phaseOffset+c*.5)*f,m=Math.cos(e*l*.7+u.phaseOffset+c*.3)*f*.6;h.rotation.z=p,h.rotation.x=m}}for(let a=0;a<o.tipMats.length;a++){const u=Math.sin(e*2.5+o.phase+a*1.2)*.5+.5;o.tipMats[a].emissiveIntensity=(.4+u*.4)*n}}}function cS(i,t){const e=new te,n=1.2+v()*.8,s=3+Math.floor(v()*3),o=new q({color:U.spiralStem,roughness:.7,emissive:U.spiralFrond,emissiveIntensity:.06}),r=new C(new gt(.02,.05,n,5),o);r.position.y=n/2,e.add(r);const a=new q({color:1721392,emissive:662032,emissiveIntensity:.05,side:Ct});for(let c=0;c<3;c++){const h=v()*6.28,f=new C(new oe(.12,.2),a);f.position.set(Math.cos(h)*.1,n*.12,Math.sin(h)*.1),f.rotation.y=-h,f.rotation.x=-.7,e.add(f)}const u=[];for(let c=0;c<s;c++){const h=c/s*6.28+v()*.4,f=n*(.5+v()*.35),p=.15+v()*.15,m=1+v()*1.5,x=[],d=14;for(let y=0;y<=d;y++){const M=y/d,R=h+M*m*6.28,L=p*(.2+M*.8);x.push(new z(Math.cos(R)*L,n*.25+M*f,Math.sin(R)*L))}const g=new to(x),S=new q({color:U.spiralFrond,emissive:U.spiralGlow,emissiveIntensity:.12,roughness:.5}),_=new C(new on(g,16,.012+v()*.006,4,!1),S);e.add(_);const w=3+Math.floor(v()*2);for(let y=0;y<w;y++){const M=.2+y/w*.6,R=g.getPoint(M),L=new C(new oe(.04,.06),new q({color:U.spiralFrond,emissive:U.spiralGlow,emissiveIntensity:.08,side:Ct}));L.position.copy(R),L.rotation.set(v()*1.5,v()*3,v()*1.5),e.add(L)}const A=g.getPoint(1),E=new q({color:U.spiralTip,emissive:U.spiralGlow,emissiveIntensity:.6,transparent:!0,opacity:.7}),T=new C(new $(.025+v()*.015,5,4),E);T.position.copy(A),e.add(T),u.push(E);const b=new C(new $(.07,4,3),new Z({color:U.spiralGlow,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}));b.position.copy(A),e.add(b)}const l=new q({color:1714224,roughness:.85,emissive:660752,emissiveIntensity:.04});for(let c=0;c<3;c++){const h=c/3*6.28+v()*.5,f=new C(new gt(.006,.018,.15+v()*.1,3),l);f.position.set(Math.cos(h)*.06,.04,Math.sin(h)*.06),f.rotation.z=h<3.14?.8:-.8,f.rotation.y=h,e.add(f)}return e.position.set(i,0,t),at.add(e),{group:e,tipMats:u,phase:v()*6.28,x:i,z:t}}function lS(i,t){const e=new te,n=1.5+v()*1,s=n*.7,o=.4+v()*.2,r=new q({color:U.corpseLeaf,roughness:.75,emissive:662026,emissiveIntensity:.05}),a=new C(new gt(.06,.1,n*.5,6),r);a.position.y=n*.25,e.add(a);const u=new q({color:U.corpseSpathe,emissive:2230800,emissiveIntensity:.08,transparent:!0,opacity:.85,roughness:.5,side:Ct}),l=new Rn(o,n*.5,8,1,!0),c=new C(l,u);c.position.y=n*.55,c.scale.set(1,1,1),e.add(c);const h=new q({color:U.corpseSpathe,emissive:U.corpseGlow,emissiveIntensity:.1,roughness:.4}),f=new C(new Re(o*.95,.02,6,12),h);f.position.y=n*.8,f.rotation.x=Math.PI/2,e.add(f);const p=new q({color:U.corpseColumn,emissive:U.corpseGlow,emissiveIntensity:.5,transparent:!0,opacity:.8,roughness:.3}),m=new C(new gt(.03,.06,s,6),p);m.position.y=n*.4+s*.5,e.add(m);const x=new Z({color:U.corpseGlow,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}),d=new C(new $(o*1.2,6,4),x);d.position.y=n*.65,e.add(d);for(let y=0;y<5;y++){const M=v()*6.28,R=n*.45+v()*s*.6,L=new C(new $(.01,3,3),new q({color:U.corpseGlow,emissive:U.corpseGlow,emissiveIntensity:.3}));L.position.set(Math.cos(M)*.05,R,Math.sin(M)*.05),e.add(L)}const g=new Z({color:1118481,transparent:!0,opacity:.7}),S=[],_=3+Math.floor(v()*3),w=n*.7;for(let y=0;y<_;y++){const M=new C(new $(.008,3,3),g);M.position.set(0,w,0),e.add(M),S.push(M)}const A=new q({color:U.corpseLeaf,emissive:662024,emissiveIntensity:.04,side:Ct}),E=2+Math.floor(v()*2);for(let y=0;y<E;y++){const M=y/E*6.28+v()*.5,R=new C(new oe(.25+v()*.1,.35+v()*.1),A);R.position.set(Math.cos(M)*.18,n*.15,Math.sin(M)*.18),R.rotation.y=-M,R.rotation.x=-.6-v()*.3,e.add(R)}const T=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),b=new C(new $(.15,6,4),T);return b.scale.set(1.5,.4,1.5),b.position.y=.03,e.add(b),e.position.set(i,0,t),at.add(e),{group:e,columnMat:p,hazeMat:x,flies:S,spadixY:w,phase:v()*6.28,x:i,z:t}}function uS(i,t){const e=new te,n=.3+v()*.15,s=.3+v()*.2,o=new q({color:U.orbBushLeaf,roughness:.8,emissive:662026,emissiveIntensity:.06}),r=5+Math.floor(v()*4);for(let f=0;f<r;f++){const p=v()*6.28,m=v()*n*.6,x=.1+v()*.08,d=new C(new $(x,5,4),o);d.scale.set(1.2,.6,1.2),d.position.set(Math.cos(p)*m,s*.4+v()*s*.3,Math.sin(p)*m),e.add(d)}const a=new q({color:U.orbBushStem,emissive:662026,emissiveIntensity:.04,side:Ct});for(let f=0;f<6;f++){const p=v()*6.28,m=n*.5+v()*n*.3,x=new C(new oe(.06,.08),a);x.position.set(Math.cos(p)*m,s*.3+v()*.15,Math.sin(p)*m),x.rotation.set(v()*.5,-p,v()*.3),e.add(x)}const u=[],l=6+Math.floor(v()*5),c=new q({color:U.orbBushStem,roughness:.7,emissive:U.orbBushGlow,emissiveIntensity:.05});for(let f=0;f<l;f++){const p=v()*6.28,m=v()*n*.7,x=s+.15+v()*.3,d=.02+v()*.015,g=x-s*.3,S=new C(new gt(.003,.005,g,3),c);S.position.set(Math.cos(p)*m,s*.3+g/2,Math.sin(p)*m),S.rotation.z=(v()-.5)*.3,S.rotation.x=(v()-.5)*.3,e.add(S);const _=new q({color:U.orbBushOrb,emissive:U.orbBushGlow,emissiveIntensity:.5+v()*.3,transparent:!0,opacity:.7,roughness:.2}),w=new C(new $(d,5,4),_);w.position.set(Math.cos(p)*m+(v()-.5)*.03,x,Math.sin(p)*m+(v()-.5)*.03),e.add(w),u.push(_);const A=new C(new $(d*2.5,4,3),new Z({color:U.orbBushGlow,transparent:!0,opacity:.03,blending:Qt,depthWrite:!1}));A.position.copy(w.position),e.add(A)}const h=new q({color:1712152,roughness:.9});for(let f=0;f<3;f++){const p=v()*6.28,m=n+v()*.1,x=new C(new $(.015,3,3),h);x.position.set(Math.cos(p)*m,.01,Math.sin(p)*m),x.scale.set(1,.4,1),e.add(x)}return e.position.set(i,0,t),at.add(e),{group:e,orbMats:u,phase:v()*6.28,x:i,z:t}}function hS(i,t){const e=new te,n=2+Math.floor(v()*3),s=[],o=new q({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),r=new C(new $(.1,5,4),o);r.scale.set(1.5,.4,1.5),r.position.y=.02,e.add(r);const a=new q({color:U.lanternStem,emissive:662024,emissiveIntensity:.04,side:Ct});for(let u=0;u<2;u++){const l=v()*6.28,c=new C(new oe(.1,.18),a);c.position.set(Math.cos(l)*.08,.08,Math.sin(l)*.08),c.rotation.y=-l,c.rotation.x=-.6,e.add(c)}for(let u=0;u<n;u++){const l=u/n*6.28+v()*.5,c=.8+v()*.8,h=.3+v()*.4,f=[],p=10;for(let M=0;M<=p;M++){const R=M/p,L=h*Math.sin(R*Math.PI*.7),D=R<.7?R/.7*c:c-(R-.7)/.3*c*.25;f.push(new z(Math.cos(l)*L,D,Math.sin(l)*L))}const m=new to(f),x=new q({color:U.lanternStem,roughness:.7,emissive:U.lanternHaze,emissiveIntensity:.06}),d=new C(new on(m,12,.008+v()*.004,4,!1),x);e.add(d);const g=m.getPoint(1),S=.06+v()*.04,_=new q({color:U.lanternPod,emissive:U.lanternGlow,emissiveIntensity:.5+v()*.3,transparent:!0,opacity:.5,roughness:.2,metalness:.1}),w=new C(new $(S,8,6),_);w.position.copy(g),w.position.y-=S*.3,e.add(w),s.push(_);const A=new q({color:16777164,emissive:U.lanternGlow,emissiveIntensity:1,transparent:!0,opacity:.5,roughness:0}),E=new C(new $(S*.4,5,4),A);E.position.copy(w.position),e.add(E);const T=new C(new $(S*2.5,5,4),new Z({color:U.lanternHaze,transparent:!0,opacity:.04,blending:Qt,depthWrite:!1}));T.position.copy(w.position),e.add(T);const b=new q({color:U.lanternStem,roughness:.6}),y=new C(new Rn(S*.5,S*.4,5),b);y.position.copy(g),y.rotation.x=Math.PI,e.add(y)}return e.position.set(i,0,t),at.add(e),{group:e,podMats:s,phase:v()*6.28,x:i,z:t}}function fS(i,t){const e=new te,n=1+Math.floor(v()*2),s=[];for(let a=0;a<n;a++){const u=(a-(n-1)*.5)*.3,l=1+v()*.8,c=new q({color:U.veilSupport,roughness:.85,emissive:657928,emissiveIntensity:.03}),h=new C(new gt(.015,.03,l,4),c);h.position.set(u,l/2,0),e.add(h);const f=.2+v()*.15,p=new C(new gt(.008,.012,f,3),c);p.position.set(u,l*.9,0),p.rotation.z=Math.PI/2,e.add(p);const m=3+Math.floor(v()*3);for(let d=0;d<m;d++){const g=.08+v()*.06,S=l*(.3+v()*.4),_=(d-(m-1)*.5)*(f/m),w=new q({color:U.veilMoss,emissive:U.veilGlow,emissiveIntensity:.12+v()*.08,transparent:!0,opacity:.25+v()*.15,roughness:.6,side:Ct}),A=new C(new oe(g,S),w);A.position.set(u+_,l*.9-S*.5,(v()-.5)*.05),A.rotation.y=(v()-.5)*.4,e.add(A),s.push(A);const E=2+Math.floor(v()*2),T=new Z({color:U.veilEdge,transparent:!0,opacity:.4});for(let b=0;b<E;b++){const y=new C(new $(.006,3,3),T);y.position.set(u+_+(v()-.5)*g*.8,l*.9-S+v()*S*.15,(v()-.5)*.04),e.add(y)}}const x=new q({color:U.veilMoss,emissive:U.veilGlow,emissiveIntensity:.08,transparent:!0,opacity:.3});for(let d=0;d<3;d++){const g=l*(.2+v()*.5),S=v()*6.28,_=new C(new $(.015+v()*.01,4,3),x);_.scale.set(1.5,.5,1),_.position.set(u+Math.cos(S)*.025,g,Math.sin(S)*.025),e.add(_)}}const o=new q({color:2767400,roughness:.9,emissive:U.veilGlow,emissiveIntensity:.03}),r=new C(new $(.12,5,4),o);return r.scale.set(1.5,.3,1.5),r.position.y=.02,e.add(r),e.position.set(i,0,t),at.add(e),{group:e,veilMats:s,phase:v()*6.28,x:i,z:t}}function dS(i,t,e){const n=new te,s=new q({color:U.jellyBell,emissive:U.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,roughness:.2,metalness:.1,side:Ct}),o=new C(new $(.5,8,6,0,6.28,0,Math.PI/2),s);o.scale.set(1,.6,1),o.position.y=0,n.add(o);const r=new q({color:U.jellyBell,emissive:U.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6}),a=new C(new Re(.48,.025,5,12),r);a.rotation.x=Math.PI/2,a.position.y=-.02,n.add(a);const u=new C(new $(.2,6,4),new Z({color:U.jellyGlow,transparent:!0,opacity:.7}));u.position.y=-.05,n.add(u);const l=new Z({color:12312063,transparent:!0,opacity:.3});for(let S=-1;S<=1;S+=2){const _=new C(new $(.06,4,3),l);_.scale.set(.6,1.5,.6),_.position.set(S*.08,-.03,0),n.add(_)}const c=new Z({color:15663103,transparent:!0,opacity:.7});for(let S=0;S<5;S++){const _=v()*6.28,w=v()*.8,A=new C(new $(.02,3,3),c);A.position.set(Math.cos(_)*w*.35,.1-w*.15,Math.sin(_)*w*.35),n.add(A)}const h=new q({color:U.jellyTent,emissive:U.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4}),f=new Z({color:U.jellyGlow,transparent:!0,opacity:.6});for(let S=0;S<6;S++){const _=S/6*6.28,w=.4+v()*.6,A=new C(new gt(.015,.008,w,3),h);A.position.set(Math.cos(_)*.25,-w/2-.05,Math.sin(_)*.25),n.add(A);const E=new C(new $(.012,3,3),f);E.position.set(Math.cos(_)*.25,-w-.06,Math.sin(_)*.25),n.add(E)}const p=new Z({color:U.jellyGlow,transparent:!0,opacity:.12});for(let S=0;S<8;S++){const _=S/8*6.28,w=new C(new gt(.002,.002,.4,3),p);w.position.set(Math.cos(_)*.2,.05,Math.sin(_)*.2),w.rotation.z=Math.PI/2-.3,w.rotation.y=-_,n.add(w)}const m=new q({color:U.jellyBell,emissive:U.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4});for(let S=0;S<10;S++){const _=S/10*6.28,w=new C(new $(.02,3,3),m);w.scale.set(1,.5,.8),w.position.set(Math.cos(_)*.46,-.04,Math.sin(_)*.46),n.add(w)}const x=new q({color:U.jellyTent,emissive:U.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35}),d=new C(new gt(.02,.01,.35,4),x);d.position.y=-.2,n.add(d);const g=new Z({color:14548991,transparent:!0,opacity:.4});for(let S=0;S<3;S++){const _=S/3*6.28,w=new C(new $(.008,3,3),g);w.position.set(Math.cos(_)*.25,-.55-v()*.3,Math.sin(_)*.25),n.add(w)}return n.position.set(i,t,e),at.add(n),{group:n,bellMat:s,phase:v()*6.28,driftAng:v()*6.28,homeX:i,homeZ:e,floatY:t,wobble:.5+v()*.5,_init:!0,_state:"drift",_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function pS(i,t){const e=new te,n=new q({color:U.puffBody,emissive:U.puffGlow,emissiveIntensity:.3,roughness:.8}),s=new C(new $(.3,8,6),n);s.position.y=.35,e.add(s);const o=new q({color:16773344,emissive:U.puffGlow,emissiveIntensity:.15,roughness:.9}),r=new C(new $(.18,6,4),o);r.scale.set(.7,.9,.3),r.position.set(0,.32,.2),e.add(r);const a=new C(new $(.22,7,5),n);a.position.y=.65,e.add(a);const u=[];for(let y=-1;y<=1;y+=2){const M=new C(new Rn(.06,.15,4),n);M.position.set(y*.13,.85,0),M.rotation.z=y*.3,e.add(M),u.push({mesh:M,side:y,baseRotZ:y*.3});const R=new C(new Rn(.03,.08,4),new q({color:U.puffCheek,emissive:U.puffCheek,emissiveIntensity:.2}));R.position.set(y*.13,.84,.01),R.rotation.z=y*.3,e.add(R),u.push({mesh:R,side:y,baseRotZ:y*.3})}const l=new Z({color:U.puffEye}),c=[];for(let y=-1;y<=1;y+=2){const M=new C(new $(.035,4,4),l);M.position.set(y*.09,.68,.18),e.add(M),c.push(M);const R=new Z({color:16777215}),L=new C(new $(.012,3,3),R);L.position.set(y*.09+y*.015,.695,.2),e.add(L),c.push(L)}const h=new Z({color:4469555}),f=new C(new $(.015,3,3),h);f.position.set(0,.63,.22),e.add(f);const p=new q({color:U.puffCheek,emissive:U.puffCheek,emissiveIntensity:.3});for(let y=-1;y<=1;y+=2){const M=new C(new $(.04,4,3),p);M.position.set(y*.15,.61,.15),e.add(M)}const m=new Z({color:15654348,transparent:!0,opacity:.5});for(let y=-1;y<=1;y+=2)for(let M=0;M<2;M++){const R=new C(new gt(.002,.002,.06,3),m);R.position.set(y*.12,.62-M*.03,.2),R.rotation.z=y*.7+M*y*.2,R.rotation.x=-.1,e.add(R)}for(let y=-1;y<=1;y+=2){const M=new C(new $(.07,4,3),n);M.position.set(y*.12,.07,.05),M.scale.set(1,.5,1.3),e.add(M);const R=new q({color:16755370,emissive:16746632,emissiveIntensity:.1});for(let L=0;L<3;L++){const D=L/3*6.28,F=new C(new $(.012,3,3),R);F.position.set(y*.12+Math.cos(D)*.03,.03,.05+Math.sin(D)*.03),e.add(F)}}const x=new q({color:16777215,emissive:U.puffGlow,emissiveIntensity:.4,roughness:.9}),d=new C(new $(.06,5,4),x);d.position.set(0,.38,-.28),e.add(d);const g=new q({color:U.puffBody,emissive:U.puffGlow,emissiveIntensity:.2,roughness:1});for(let y=0;y<6;y++){const M=v()*6.28,R=v()*1.2,L=new C(new $(.01,3,3),g);L.position.set(Math.cos(M)*.28,.25+R*.2,Math.sin(M)*.28),e.add(L)}const S=new Z({color:U.puffBody});for(let y=-1;y<=1;y+=2){const M=new C(new gt(.003,.003,.04,3),S);M.position.set(y*.09,.72,.17),M.rotation.z=y*.3,e.add(M)}const _=new Z({color:5583684,transparent:!0,opacity:.5}),w=new C(new gt(.002,.002,.03,3),_);w.position.set(0,.59,.22),w.rotation.z=Math.PI/2,e.add(w);const A=new Z({color:16777215,transparent:!0,opacity:.6}),E=[];for(let y=0;y<3;y++){const M=new C(new $(.01,3,3),A.clone());M.position.set(0,.5,0),e.add(M),E.push({mesh:M,mat:M.material,phase:v()*6.28,orbitR:.28+v()*.1})}const T=new Z({color:U.puffGlow,transparent:!0,opacity:.15,side:Ct});for(let y=0;y<4;y++){const M=v()*6.28,R=(v()-.5)*.4,L=new C(new Be(.02+v()*.012,5),T);L.position.set(Math.cos(M)*.27,.35+R*.15,Math.sin(M)*.27),L.lookAt(0,.35,0),e.add(L)}let b=null;if(v()<.4){b=new q({color:U.flower,emissive:U.flowerGlow,emissiveIntensity:.3});for(let M=0;M<3;M++){const R=M/3*6.28,L=new C(new Rn(.015,.03,3),b);L.position.set(Math.cos(R)*.035,.88,Math.sin(R)*.035),L.rotation.z=-Math.cos(R)*.5,L.rotation.x=Math.sin(R)*.5,e.add(L)}const y=new C(new $(.01,3,3),new q({color:16772676,emissive:16768290,emissiveIntensity:.4}));y.position.set(0,.89,0),e.add(y)}return e.position.set(i,0,t),at.add(e),{group:e,ears:u,eyes:c,tail:d,sparkles:E,crownMat:b,phase:v()*6.28,wanderAng:v()*6.28,speed:.6+v()*.8,hopTimer:0,hopPhase:v()*6.28,homeX:i,homeZ:t,state:"idle",idleTimer:v()*3,_init:!0,_followT:0,_scaredT:0,_huddleTarget:-1,_baseY:0,_lastTX:i,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function mS(i,t){const e=new te,n=new q({color:U.deerBody,emissive:U.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.7,roughness:.3}),s=new C(new $(.4,7,5),n);s.scale.set(1,.8,1.5),s.position.y=.9,e.add(s);const o=new q({color:13431039,emissive:U.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5}),r=new C(new $(.15,5,4),o);r.scale.set(.8,.6,.5),r.position.set(0,.78,.25),e.add(r);const a=new te;a.position.set(0,1.15,.3);const u=new C(new gt(.08,.12,.4,5),n);u.position.set(0,.1,.08),u.rotation.x=-.4,a.add(u);const l=new C(new $(.14,6,5),n);l.position.set(0,.22,.2),a.add(l);const c=new C(new $(.07,4,3),n);c.scale.set(1,.7,1.4),c.position.set(0,.17,.35),a.add(c);const h=new Z({color:2245717}),f=new C(new $(.02,3,3),h);f.position.set(0,.17,.43),a.add(f);const p=new Z({color:U.deerEye});for(let O=-1;O<=1;O+=2){const B=new C(new $(.025,4,3),p);B.position.set(O*.09,.25,.28),a.add(B);const it=new C(new $(.008,3,3),new Z({color:16777215}));it.position.set(O*.085,.26,.29),a.add(it);const ut=new Z({color:U.deerBody,transparent:!0,opacity:.5}),ft=new C(new gt(.002,.002,.03,3),ut);ft.position.set(O*.1,.27,.28),ft.rotation.z=O*.6,a.add(ft)}for(let O=-1;O<=1;O+=2){const B=new C(new Rn(.04,.14,4),n);B.position.set(O*.1,.37,.15),B.rotation.z=O*.4,a.add(B)}const m=new q({color:U.deerAntler,emissive:U.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8});for(let O=-1;O<=1;O+=2){const B=new C(new gt(.015,.02,.25,3),m);B.position.set(O*.08,.42,.12),B.rotation.z=O*.5,a.add(B);const it=new C(new gt(.01,.015,.15,3),m);it.position.set(O*.15,.55,.1),it.rotation.z=O*.8,a.add(it);const ut=new C(new gt(.008,.012,.1,3),m);ut.position.set(O*.11,.5,.16),ut.rotation.z=O*.3,ut.rotation.x=-.5,a.add(ut);const ft=new C(new $(.012,3,3),new Z({color:U.deerGlow,transparent:!0,opacity:.8}));ft.position.set(O*.18,.61,.09),a.add(ft)}const x=new q({color:U.deerBody,emissive:U.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),d=new C(new gt(.01,.02,.1,3),x);d.position.set(0,.11,.28),d.rotation.x=.3,a.add(d);const g=new Z({color:1122850});for(let O=-1;O<=1;O+=2){const B=new C(new $(.006,3,3),g);B.position.set(O*.02,.16,.42),a.add(B)}e.add(a);const S=[{x:-.15,z:.3,label:"FL"},{x:.15,z:.3,label:"FR"},{x:-.15,z:-.3,label:"BL"},{x:.15,z:-.3,label:"BR"}],_=new q({color:6715272,emissive:U.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),w=[];for(let O=0;O<4;O++){const B=S[O],it=new te;it.position.set(B.x,.65,B.z);const ut=new C(new gt(.025,.035,.35,4),n);ut.position.y=-.175,it.add(ut);const ft=new te;ft.position.set(0,-.35,0);const Pt=new C(new gt(.02,.03,.3,4),n);Pt.position.y=-.15,ft.add(Pt);const Wt=new C(new gt(.04,.032,.04,4),_);Wt.position.y=-.3,ft.add(Wt);const et=new q({color:14544639,emissive:U.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5}),lt=new C(new $(.025,3,3),et);lt.scale.set(1.3,.5,1.3),lt.position.y=-.25,ft.add(lt),it.add(ft),e.add(it),w.push({upper:it,lower:ft,isFront:O<2,side:B.x<0?-1:1})}const A=new te;A.position.set(0,1.1,-.55);const E=new C(new Rn(.05,.15,4),new q({color:16777215,emissive:U.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8}));A.add(E),e.add(A);const T=new Z({color:13434862,transparent:!0,opacity:.3});for(let O=0;O<4;O++){const B=new C(new $(.02,3,3),T);B.position.set((v()-.5)*.25,.8+v()*.3,(v()-.5)*.4),e.add(B)}const b=new Z({color:U.deerBody,transparent:!0,opacity:.15});for(let O=0;O<3;O++){const B=new C(new gt(.002,.002,.2,3),b);B.position.set(.3,.85-O*.06,0),B.rotation.z=Math.PI/2+.3,e.add(B)}const y=new q({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.5});for(let O=0;O<3;O++){const B=new C(new $(.008,3,3),y);B.position.set((v()-.5)*.3,.9+v()*.3,(v()-.5)*.35),e.add(B)}const M=new q({color:14544639,emissive:U.deerGlow,emissiveIntensity:.4,transparent:!0,opacity:.3,side:Ct}),R=[];for(let O=0;O<5;O++){const B=new C(new oe(.05,.08+v()*.04),M);B.position.set(0,.1+O*.055,.04-O*.015),B.rotation.x=-.2+v()*.15,B.rotation.z=(v()-.5)*.25,a.add(B),R.push(B)}const L=new Z({color:U.deerGlow,transparent:!0,opacity:.5}),D=[];for(let O=-1;O<=1;O+=2){const B=new C(new $(.012,3,3),L.clone());B.position.set(O*.1,.47,.11),a.add(B),D.push(B);const it=new C(new $(.01,3,3),L.clone());it.position.set(O*.14,.53,.12),a.add(it),D.push(it)}const F=new Z({color:U.deerGlow,transparent:!0,opacity:.08,blending:Qt,depthWrite:!1}),V=[];for(let O=0;O<3;O++){const B=new C(new $(.06-O*.012,4,3),F.clone());B.position.set(0,.8,-.6-O*.35),at.add(B),V.push({mesh:B,mat:B.material,prevX:i,prevY:0,prevZ:t})}const k=new Z({color:U.deerGlow,transparent:!0,opacity:.2,side:Ct});for(let O=0;O<3;O++){v()*6.28;const B=new C(new Be(.03+v()*.015,5),k);B.position.set((O===1?-1:1)*.32,.8+v()*.25,(v()-.5)*.3),B.rotation.y=(O===1?-1:1)*Math.PI/2,e.add(B)}return e.position.set(i,0,t),at.add(e),{group:e,mat:n,manePlanes:R,branchOrbs:D,trailSpheres:V,phase:v()*6.28,wanderAng:v()*6.28,speed:.6+v()*.4,walkTimer:0,legCycle:0,homeX:i,homeZ:t,state:"walk",pauseTimer:0,neckPivot:a,legPivots:w,tailPivot:A,fleeTimer:0,headLook:0,headBob:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:i,_lastTZ:t}}function gS(i,t,e){const n=new te,s=new q({color:U.mothBody,emissive:U.mothGlow,emissiveIntensity:.3,roughness:.7}),o=new C(new gt(.04,.05,.3,5),s);o.rotation.x=Math.PI/2,n.add(o);const r=new q({color:U.mothBody,emissive:U.mothGlow,emissiveIntensity:.5,roughness:.6});for(let d=0;d<3;d++){const g=new C(new Re(.045,.006,4,8),r);g.position.z=-.05+d*.06,g.rotation.x=0,n.add(g)}const a=new C(new $(.05,5,4),s);a.position.z=.18,n.add(a);const u=new q({color:1122867,roughness:.2,metalness:.4});for(let d=-1;d<=1;d+=2){const g=new C(new $(.018,4,3),u);g.position.set(d*.03,.01,.21),n.add(g)}for(let d=-1;d<=1;d+=2){const g=new C(new gt(.005,.005,.15,3),s);g.position.set(d*.03,.03,.22),g.rotation.x=-.6,g.rotation.z=d*.4,n.add(g);const S=new Z({color:U.mothGlow,transparent:!0,opacity:.7}),_=new C(new $(.015,3,3),S);_.scale.set(2,.5,1),_.position.set(d*.05,.12,.28),n.add(_)}const l=new q({color:U.mothWing,emissive:U.mothGlow,emissiveIntensity:.8,transparent:!0,opacity:.6,side:Ct,roughness:.4});n._wingPivots=[];for(let d=-1;d<=1;d+=2){const g=new te;g.position.set(d*.04,0,.02);const S=new C(new $(.2,6,4),l);S.scale.set(1.8,.08,1.2),S.position.set(d*.18,0,.02),g.add(S);const _=new C(new $(.12,5,3),l);_.scale.set(1.5,.06,1),_.position.set(d*.12,0,-.1),g.add(_);const w=new q({color:U.mothWing,emissive:U.mothGlow,emissiveIntensity:.6,transparent:!0,opacity:.45,side:Ct}),A=new C(new oe(.03,.12),w);A.position.set(d*.1,0,-.18),A.rotation.y=d*.2,g.add(A);const E=new Z({color:U.mothSpot,transparent:!0,opacity:.9}),T=new C(new $(.03,4,3),E);T.position.set(d*.2,.02,.03),g.add(T);const b=new C(new $(.018,3,3),E);b.position.set(d*.1,.02,-.08),g.add(b);const y=new Z({color:U.mothGlow,transparent:!0,opacity:.25});for(let M=0;M<2;M++){const R=new C(new gt(.002,.002,.2,3),y);R.position.set(d*.15,.01,-.02+M*.06),R.rotation.z=Math.PI/2+d*(.15+M*.15),g.add(R)}n.add(g),n._wingPivots.push({pivot:g,side:d})}const c=new Z({color:U.mothGlow,transparent:!0,opacity:.25});for(let d=0;d<3;d++){const g=new C(new $(.008,3,3),c);g.position.set((v()-.5)*.04,0,-.15-d*.05),n.add(g)}const h=new Z({color:4473907,transparent:!0,opacity:.5}),f=new C(new Re(.015,.003,4,8,Math.PI*1.5),h);f.position.set(0,-.02,.2),f.rotation.x=.4,n.add(f);const p=new q({color:U.mothBody,emissive:U.mothGlow,emissiveIntensity:.4,roughness:1});for(let d=0;d<5;d++){const g=v()*6.28,S=new C(new $(.008,3,3),p);S.position.set(Math.cos(g)*.04,Math.sin(g)*.04,v()*.15-.05),n.add(S)}const m=new Z({color:U.mothBody,transparent:!0,opacity:.4});for(let d=-1;d<=1;d+=2)for(let g=0;g<3;g++){const S=new C(new gt(.002,.002,.06,3),m);S.position.set(d*.04,-.03,-.05+g*.06),S.rotation.z=d*.8,S.rotation.x=-.3,n.add(S)}const x=new Z({color:U.mothGlow,transparent:!0,opacity:.35});for(let d=-1;d<=1;d+=2)for(let g=0;g<5;g++){const S=g/5*Math.PI-Math.PI/2,_=new C(new $(.006,3,3),x);_.position.set(d*(.3+Math.cos(S)*.05),Math.sin(S)*.02,.02+g*.04),n.add(_)}return n.position.set(i,t,e),at.add(n),{group:n,wingMat:l,phase:v()*6.28,orbitAng:v()*6.28,orbitR:2+v()*4,centerX:i,centerZ:e,floatY:t,flapSpeed:6+v()*4,_init:!0,_state:"patrol",_stT:0,_attractTarget:null,_restTree:null}}function xS(i,t,e){const n=new te,s=new Z({color:U.wispCore}),o=new C(new $(.08,6,4),s);n.add(o);const r=new Z({color:16777215,transparent:!0,opacity:.7,wireframe:!0}),a=new C(new rr(.06,0),r);n.add(a);const u=new Z({color:U.wispGlow,transparent:!0,opacity:.5}),l=new C(new $(.18,6,4),u);n.add(l);const c=new Z({color:U.wispGlow,transparent:!0,opacity:.25}),h=new C(new Re(.22,.008,4,12),c);h.rotation.x=Math.PI/2,n.add(h);const f=new Z({color:U.wispTrail,transparent:!0,opacity:.15}),p=new C(new $(.35,5,4),f);n.add(p);const m=new Z({color:16777215,transparent:!0,opacity:.8}),x=new C(new $(.02,3,3),m);x.position.set(.15,0,0),n.add(x);const d=[];for(let T=0;T<3;T++){const b=new Z({color:U.wispCore,transparent:!0,opacity:.35}),y=new C(new $(.01,3,3),b);y.position.set((v()-.5)*.1,-.1-T*.08,(v()-.5)*.1),n.add(y),d.push(y)}const g=new Z({color:U.wispGlow,transparent:!0,opacity:.18}),S=[];for(let T=0;T<3;T++){const b=T/3*6.28+v()*.5,y=.15+v()*.1,M=new C(new gt(.003,.001,y,3),g);M.position.set(Math.cos(b)*.1,v()*.08,Math.sin(b)*.1),M.rotation.z=Math.PI/3*(b<3.14?1:-1),M.rotation.y=b,n.add(M),S.push({mesh:M,baseAng:b})}const _=new Z({color:U.wispGlow,transparent:!0,opacity:.12}),w=new C(new Re(.26,.005,4,10),_);w.rotation.x=1.2,w.rotation.z=.8,n.add(w);const A=new Z({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<4;T++){const b=v()*6.28,y=v()*.8,M=new C(new $(.006,3,3),A);M.position.set(Math.cos(b)*.06,Math.sin(y)*.06,Math.sin(b)*.06),n.add(M)}const E=new Z({color:U.wispCore,transparent:!0,opacity:.2});for(let T=0;T<4;T++){const b=new C(new $(.004,3,3),E);b.position.set(.03+v()*.04,-.05-T*.04,v()*.04),n.add(b)}return n.scale.setScalar(.5),n.position.set(i,t,e),at.add(n),{group:n,glowMat:u,hazeMat:f,embers:d,tendrils:S,plasmaMat:g,facet:a,halo:h,halo2:w,phase:v()*6.28,targetX:i,targetY:t,targetZ:e,velX:0,velY:0,velZ:0,scatter:0}}function vS(i,t){const e=new te,n=hh,s=8+Math.floor(v()*5),o=new q({color:U.fairyMush,emissive:U.fairyGlow,emissiveIntensity:.2,roughness:.5}),r=new q({color:U.mushStem,roughness:.7,emissive:U.fairyGlow,emissiveIntensity:.05});for(let A=0;A<s;A++){const E=A/s*6.28+v()*.15,T=n+v()*.3-.15,b=.15+v()*.2,y=new C(Dn.mushStem,r);y.scale.setScalar(b),y.position.set(Math.cos(E)*T,b*.3,Math.sin(E)*T),e.add(y);const M=new C(Dn.mushCap,o);M.scale.set(b,b*.4,b),M.position.set(Math.cos(E)*T,b*.55,Math.sin(E)*T),e.add(M);const R=new Z({color:16777215,transparent:!0,opacity:.7}),L=new C(new $(b*.08,3,3),R);L.position.set(Math.cos(E)*T,b*.6,Math.sin(E)*T),e.add(L)}const a=new q({color:8934792,emissive:U.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let A=0;A<5;A++){const E=v()*6.28,T=n+v()*.6-.3,b=.06+v()*.06,y=new C(Dn.mushCap,a);y.scale.set(b,b*.5,b),y.position.set(Math.cos(E)*T,b*.35,Math.sin(E)*T),e.add(y)}const u=new q({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let A=0;A<4;A++){const E=v()*6.28,T=v()*n*.8,b=new C(new $(.08+v()*.08,4,3),u);b.scale.set(1.5,.2,1.5),b.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(b)}const l=new q({color:4478310,emissive:U.fairyGlow,emissiveIntensity:.05,roughness:.85}),c=new C(new $(.12,5,3),l);c.scale.set(1.2,.3,1),c.position.y=.03,e.add(c);const h=new Z({color:U.fairyGlow,transparent:!0,opacity:.2}),f=[];for(let A=0;A<8;A++){const E=new C(new $(.012,3,3),h),T=(v()-.5)*n*.8,b=(v()-.5)*n*.8;E.position.set(T,.05+v()*.3,b),e.add(E),f.push({mesh:E,baseX:T,baseZ:b,drift:v()*6.28,speed:.2+v()*.3})}const p=new Z({color:U.fairyRing,transparent:!0,opacity:0,side:Ct}),m=new C(new ar(.3,n-.3,16),p);m.rotation.x=-Math.PI/2,m.position.y=.02,e.add(m);const x=new Z({color:U.fairyGlow,transparent:!0,opacity:.08});for(let A=0;A<6;A++){const E=v()*6.28,T=E+.5+v()*1.5,b=n*.6+v()*n*.4,y=new C(new gt(.002,.002,b,3),x);y.position.set(Math.cos((E+T)/2)*n*.4,.005,Math.sin((E+T)/2)*n*.4),y.rotation.x=Math.PI/2,y.rotation.z=E,e.add(y)}const d=new q({color:4864560,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<3;A++){const E=v()*6.28,T=v()*n*.7,b=new C(new $(.03,4,3),d);b.scale.set(1.3,.3,1.3),b.position.set(Math.cos(E)*T,.008,Math.sin(E)*T),e.add(b)}const g=new q({color:7833702,roughness:.9,transparent:!0,opacity:.5});for(let A=0;A<2;A++){const E=new C(new Be(.02+v()*.02,4),g);E.position.set((v()-.5)*.08,.06,(v()-.5)*.06),E.rotation.x=-Math.PI/2+v()*.4,e.add(E)}const S=[];for(let A=0;A<5;A++){const E=v()*6.28,T=v()*n*.9,b=new Z({color:8978346,transparent:!0,opacity:.25}),y=new C(new $(.005,3,3),b);y.position.set(Math.cos(E)*T,.01,Math.sin(E)*T),e.add(y),S.push(y)}const _=new Z({color:657926,transparent:!0,opacity:.15,side:Ct}),w=new C(new ar(n*.5,n*.85,12),_);return w.rotation.x=-Math.PI/2,w.position.y=.008,e.add(w),e.position.set(i,0,t),at.add(e),{group:e,mushMat:o,discMat:p,sporeMat:h,spores:f,glowWorms:S,x:i,z:t,ringR:n,phase:v()*6.28,glowIntensity:0,active:!1}}function MS(i,t,e){const n=new te,s=new q({color:U.bubbleIris,emissive:U.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,roughness:0,metalness:.6}),o=new C(Dn.bubble,s);n.add(o);const r=new Z({color:15650047,transparent:!0,opacity:.1}),a=new C(new Re(.13,.003,4,10),r);a.rotation.x=.5,a.rotation.y=v()*3,n.add(a);const u=new C(new Re(.11,.003,4,10),r);u.rotation.x=-.8,u.rotation.z=1.2,n.add(u);const l=new Z({color:U.bubbleShine,transparent:!0,opacity:.5}),c=new C(new $(.04,4,3),l);c.position.set(.05,.07,.08),n.add(c);const h=new Z({color:15658751,transparent:!0,opacity:.2}),f=new C(new $(.025,3,3),h);f.position.set(-.06,-.04,-.06),n.add(f);const p=new Z({color:16755438,transparent:!0,opacity:.12}),m=new C(new $(.06,4,3),p);m.position.set(.02,-.02,.01),n.add(m);const x=new Z({color:16772863,transparent:!0,opacity:.08}),d=new C(new $(.12,5,4),x);n.add(d);const g=[16764125,13426175,14548940];for(let b=0;b<3;b++){const y=new Z({color:g[b],transparent:!0,opacity:.06}),M=new C(new Re(.14-b*.02,.002,4,8),y);M.position.y=-.04+b*.04,M.rotation.x=Math.PI/2,n.add(M)}const S=new Z({color:16777215,transparent:!0,opacity:.6});for(let b=0;b<3;b++){const y=v()*6.28,M=v()*Math.PI-Math.PI/2,R=new C(new $(.003,3,3),S);R.position.set(Math.cos(y)*Math.cos(M)*.14,Math.sin(M)*.14,Math.sin(y)*Math.cos(M)*.14),n.add(R)}const _=new Z({color:11189196,transparent:!0,opacity:.1}),w=new C(new $(.015,3,3),_);w.position.set((v()-.5)*.04,(v()-.5)*.04,(v()-.5)*.04),n.add(w);const A=new Z({color:U.bubbleIris,transparent:!0,opacity:.15}),E=new C(new $(.04,4,3),A);E.scale.set(1.3,.6,1.3),E.position.y=-.12,n.add(E);const T=.6+v()*.8;return n.scale.setScalar(T),n.position.set(i,t,e),at.add(n),{group:n,shellMat:s,phase:v()*6.28,driftAng:v()*6.28,driftSpeed:.3+v()*.5,floatY:t,homeX:i,homeZ:e,bobAmp:.3+v()*.4,popped:!1,popTimer:0,sc:T}}function _S(i,t){const e=new te,n=1.5+v()*1,s=new q({color:329746,roughness:.9}),o=new C(new Be(n*.85,10),s);o.rotation.x=-Math.PI/2,o.position.y=.005,e.add(o);const r=new q({color:U.pondWater,emissive:U.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4}),a=new C(new Be(n,12),r);a.rotation.x=-Math.PI/2,a.position.y=.03,e.add(a);const u=new q({color:3816002,roughness:.85}),l=5+Math.floor(v()*4);for(let D=0;D<l;D++){const F=D/l*6.28+v()*.3,V=n+v()*.2-.1,k=.06+v()*.08,O=new C(new $(k,4,3),u);O.scale.set(1+v()*.5,.4+v()*.3,1+v()*.5),O.position.set(Math.cos(F)*V,k*.2,Math.sin(F)*V),O.rotation.set(v(),v(),v()),e.add(O)}const c=new q({color:1725728,roughness:.7,side:Ct});for(let D=0;D<3;D++){const F=v()*6.28,V=n*.85+v()*.2;for(let k=0;k<3;k++){const O=new C(new oe(.015,.15+v()*.1),c);O.position.set(Math.cos(F)*V+(v()-.5)*.05,.08,Math.sin(F)*V+(v()-.5)*.05),O.rotation.y=v()*3,O.rotation.x=-.2,e.add(O)}}const h=new Z({color:11197934,transparent:!0,opacity:.08}),f=[];for(let D=0;D<3;D++){const F=new C(new Re(1,.004,4,20),h.clone());F.rotation.x=Math.PI/2,F.position.y=.036,e.add(F),f.push({mesh:F,phase:D/3})}const p=new q({color:U.lilyPad,roughness:.6,side:Ct}),m=4+Math.floor(v()*2),x=[];for(let D=0;D<m;D++){const F=v()*6.28,V=v()*n*.6,k=.15+v()*.15,O=new C(new Be(k,8),p);O.rotation.x=-Math.PI/2,O.position.set(Math.cos(F)*V,.05,Math.sin(F)*V),e.add(O);const B=new Z({color:1724448,transparent:!0,opacity:.3}),it=new C(new gt(.002,.002,k*1.5,3),B);it.position.set(Math.cos(F)*V,.052,Math.sin(F)*V),it.rotation.x=Math.PI/2,it.rotation.z=v()*3,e.add(it),x.push({mesh:O,phase:v()*6.28})}const d=new q({color:U.lilyFlower,emissive:U.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:Ct}),g=.08;for(let D=0;D<6;D++){const F=D/6*6.28,V=new C(new oe(.06,.05),d);V.position.set(x[0].mesh.position.x+Math.cos(F)*.05,g,x[0].mesh.position.z+Math.sin(F)*.05),V.rotation.x=-1,V.rotation.y=-F,e.add(V)}const S=new q({color:16777130,emissive:U.lilyGlow,emissiveIntensity:.8}),_=new C(new $(.025,4,3),S);if(_.position.set(x[0].mesh.position.x,g+.02,x[0].mesh.position.z),e.add(_),x.length>2){const D=new q({color:U.lilyFlower,emissive:U.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7}),F=new C(new $(.03,5,4),D);F.scale.set(.8,1.2,.8),F.position.set(x[2].mesh.position.x,.09,x[2].mesh.position.z),e.add(F)}const w=new q({color:3815477,roughness:.8,transparent:!0,opacity:.5});for(let D=0;D<5;D++){const F=v()*6.28,V=v()*n*.7,k=new C(new $(.02+v()*.025,4,3),w);k.scale.set(1+v()*.5,.4,1+v()*.5),k.position.set(Math.cos(F)*V,.015,Math.sin(F)*V),e.add(k)}const A=new Z({color:2761752,transparent:!0,opacity:.12,side:Ct});for(let D=0;D<3;D++){const F=v()*6.28,V=v()*n*.5,k=new C(new Be(.08+v()*.06,5),A);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(F)*V,.012,Math.sin(F)*V),e.add(k)}const E=new q({color:1122837,roughness:.7,transparent:!0,opacity:.4}),T=[];for(let D=0;D<2;D++){const F=v()*6.28,V=v()*n*.4,k=new C(new $(.012,4,3),E);k.scale.set(.8,.5,1.3),k.position.set(Math.cos(F)*V,.04,Math.sin(F)*V),e.add(k);const O=new C(new gt(.002,.001,.025,3),E);O.position.set(Math.cos(F)*V-Math.cos(F)*.02,.04,Math.sin(F)*V-Math.sin(F)*.02),O.rotation.z=Math.PI/2,O.rotation.y=F,e.add(O),T.push({body:k,tail:O,ang:F,orbR:.15+v()*n*.35,speed:.3+v()*.4})}const b=new Z({color:2250016,transparent:!0,opacity:.1,side:Ct});for(let D=0;D<3;D++){const F=v()*6.28,V=n*.7+v()*n*.25,k=new C(new Be(.06+v()*.04,5),b);k.rotation.x=-Math.PI/2,k.position.set(Math.cos(F)*V,.032,Math.sin(F)*V),e.add(k)}const y=new Z({color:13426158,transparent:!0,opacity:.06}),M=new C(new Re(n-.05,.01,4,16),y);M.rotation.x=Math.PI/2,M.position.y=.035,e.add(M);const R=new q({color:4861976,roughness:.8,side:Ct,transparent:!0,opacity:.6}),L=new C(new Be(.03,5),R);return L.rotation.x=-Math.PI/2,L.position.set((v()-.5)*n*.5,.04,(v()-.5)*n*.5),e.add(L),e.position.set(i,0,t),at.add(e),{group:e,waterMat:r,flMat:d,pads:x,ripples:f,tadpoles:T,x:i,z:t,phase:v()*6.28,pondR:n}}function yS(i,t){const e=new te,n=new Z({color:U.orbGold}),s=new C(new $(.2,10,8),n);e.add(s);const o=new Z({color:16777215}),r=new C(new $(.06,6,4),o);e.add(r);const a=new Z({color:16772744,transparent:!0,opacity:.4,wireframe:!0}),u=new C(new rr(.15,0),a);e.add(u);const l=new Z({color:U.orbGlow,transparent:!0,opacity:.5}),c=new C(new $(.35,8,6),l);e.add(c);const h=new Z({color:U.orbGlow,transparent:!0,opacity:.3});for(let T=0;T<8;T++){const b=T/8*6.28,y=new C(new Rn(.02,.25,3),h);y.position.set(Math.cos(b)*.3,Math.sin(b*2)*.05,Math.sin(b)*.3),y.rotation.z=-b+Math.PI/2,y.rotation.y=b,e.add(y)}const f=new Z({color:U.orbInner,transparent:!0,opacity:.15}),p=new C(new $(.6,8,5),f);e.add(p);for(let T=0;T<6;T++){const b=new C(new $(.03,4,3),new Z({color:16777215})),y=T/6*6.28;b.position.set(Math.cos(y)*.4,Math.sin(y*2)*.1,Math.sin(y)*.4),e.add(b)}const m=new Z({color:U.orbGold,transparent:!0,opacity:.7});for(let T=0;T<4;T++){const b=T/4*6.28+.4,y=new C(new $(.015,3,3),m);y.position.set(Math.cos(b)*.5,0,Math.sin(b)*.5),e.add(y)}const x=new Z({color:16768426,transparent:!0,opacity:.12});for(let T=0;T<3;T++){const b=new C(new Re(.28,.003,4,12),x);b.rotation.set(T*1.05,T*.7,0),e.add(b)}const d=new Z({color:U.orbGlow,transparent:!0,opacity:.08}),g=new C(new Re(.4,.004,4,16),d);g.rotation.x=Math.PI/2,e.add(g);const S=new Z({color:16772812,transparent:!0,opacity:.15}),_=new C(new Re(.25,.012,4,10),S);_.rotation.x=Math.PI/2,e.add(_);const w=new Z({color:16777215,transparent:!0,opacity:.5});for(let T=0;T<6;T++){const b=v()*6.28,y=v()*Math.PI-Math.PI/2,M=new C(new $(.008,3,3),w);M.position.set(Math.cos(b)*Math.cos(y)*.2,Math.sin(y)*.2,Math.sin(b)*Math.cos(y)*.2),e.add(M)}const A=new Z({color:U.orbGlow,transparent:!0,opacity:.1,side:Ct}),E=new C(new Be(.5,8),A);return E.rotation.x=-Math.PI/2,E.position.y=-.95,e.add(E),e.position.set(i,1,t),at.add(e),{group:e,coreMat:n,glowMat:l,hazeMat:f,x:i,z:t,found:!1,flyUp:!1,flyY:1,phase:v()*6.28,laserLine:null,laserMat:null}}function wS(i,t){const e=new te,n=new q({color:U.rockBase,roughness:.85,metalness:.05}),s=new q({color:U.rockLight,roughness:.8,metalness:.05}),o=new q({color:U.rockMoss,emissive:U.rockMoss,emissiveIntensity:.03,roughness:.9}),r=.3+v()*.5,a=new C(new $(r,8,6),v()<.6?n:s),u=.4+v()*.4;a.scale.set(1+v()*.6,u,1+v()*.6),a.position.y=r*u*.35,a.rotation.set(v()*.5,v()*3,v()*.3),a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=1+Math.floor(v()*3);for(let E=0;E<l;E++){const T=v()*6.28,b=r*.6+v()*r*.5,y=r*.3+v()*r*.4,M=new C(new $(y,5,4),v()<.5?n:s),R=.3+v()*.4;M.scale.set(1+v()*.5,R,1+v()*.5),M.position.set(Math.cos(T)*b,y*R*.3,Math.sin(T)*b),M.rotation.set(v()*.8,v()*3,v()*.5),e.add(M)}const c=2+Math.floor(v()*3);for(let E=0;E<c;E++){const T=v()*6.28,b=v()*r*.6,y=r*.15+v()*r*.2,M=new C(new $(y,4,3),o);M.scale.set(1.5,.2,1.5),M.position.set(Math.cos(T)*b,r*.35+v()*.05,Math.sin(T)*b),e.add(M)}const h=[8943428,10061909,6715221,11180390];for(let E=0;E<3;E++){const T=new q({color:h[Math.floor(v()*h.length)],roughness:.9,transparent:!0,opacity:.5}),b=v()*6.28,y=new C(new $(r*.06+v()*r*.08,3,3),T);y.scale.set(2,.15,2),y.position.set(Math.cos(b)*r*.5,r*.25+v()*.1,Math.sin(b)*r*.5),e.add(y)}const f=new Z({color:1381656,transparent:!0,opacity:.35}),p=2+Math.floor(v()*3);for(let E=0;E<p;E++){const T=v()*6.28,b=r*.3+v()*r*.4,y=new C(new gt(.003,.001,b,3),f),M=r*.3+v()*r*.2;y.position.set(Math.cos(T)*M,r*.2+v()*r*.15,Math.sin(T)*M),y.rotation.set(v()*.5,T,Math.PI/2+v()*.4),e.add(y)}const m=new Z({color:660752,transparent:!0,opacity:.2,side:Ct}),x=1+Math.floor(v()*2);for(let E=0;E<x;E++){const T=v()*6.28,b=r*.3+v()*r*.3,y=new C(new oe(.02+v()*.015,b),m);y.position.set(Math.cos(T)*r*.45,r*.15,Math.sin(T)*r*.45),y.rotation.y=-T,e.add(y)}const d=[],g=new Z({color:8965375,transparent:!0,opacity:.4});if(v()<.5){const E=2+Math.floor(v()*3);for(let T=0;T<E;T++){const b=v()*6.28,y=r*.25+v()*r*.25,M=new C(new $(.006,3,3),g);M.position.set(Math.cos(b)*y,r*.15+v()*r*.2,Math.sin(b)*y),e.add(M),d.push(M)}}const S=new Z({color:657926,transparent:!0,opacity:.12,side:Ct}),_=new C(new ar(r*.5,r*1,8),S);_.rotation.x=-Math.PI/2,_.position.y=.005,e.add(_);const w=new q({color:3816e3,roughness:.9}),A=4+Math.floor(v()*3);for(let E=0;E<A;E++){const T=v()*6.28,b=r*.5+v()*r*.6,y=.03+v()*.05,M=new C(new $(y,3,3),w);M.scale.set(1+v()*.5,.4,1+v()*.5),M.position.set(Math.cos(T)*b,y*.15,Math.sin(T)*b),e.add(M)}if(v()<.6){const E=new q({color:3385941,emissive:U.grassTip,emissiveIntensity:.05,roughness:.7,side:Ct});for(let T=0;T<3;T++){const b=v()*6.28,y=new C(new oe(.015,.08+v()*.06),E);y.position.set(Math.cos(b)*r*.3,r*.3,Math.sin(b)*r*.3),y.rotation.y=v()*3,y.rotation.x=-.2-v()*.3,e.add(y)}}return e.position.set(i,0,t),at.add(e),{group:e,x:i,z:t,colR:r*.8,sparkles:d,sparkleMat:g}}let $p=null,jp=null,Jp=null,Kp=null,Rh=[];function SS(){return $p}function bS(){return jp}function TS(){return Jp}function ES(){return Kp}function AS(){return Rh}function RS(){const i=new te,t=new q({color:U.obeliskBlack,roughness:.2,metalness:.8,emissive:U.obeliskPink,emissiveIntensity:0});jp=t;const e=new C(new gt(1.2,1.8,Ae,4),t);e.position.y=Ae/2,e.rotation.y=Math.PI/4,e.castShadow=!0,i.add(e);const n=new Z({color:3351108,transparent:!0,opacity:.2});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,M=new C(new gt(.03,.04,Ae*.9,3),n);M.position.set(Math.cos(y)*1.55,Ae*.45,Math.sin(y)*1.55),i.add(M)}const s=new Z({color:U.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let R=0;R<3;R++){const L=6+R*4,D=new C(new gt(.015,.015,.8,3),s);D.position.set(Math.cos(y)*1.6,L,Math.sin(y)*1.6),D.rotation.z=Math.PI/2,D.rotation.y=-y,D.visible=!1,i.add(D)}const M=new C(new gt(.012,.012,2.5,3),s);M.position.set(Math.cos(y)*1.6,12,Math.sin(y)*1.6),M.visible=!1,i.add(M)}const o=new q({color:U.obeliskBlack,roughness:.1,metalness:.9,emissive:U.obeliskPink,emissiveIntensity:0});Jp=o;const r=new C(new Rn(1.3,3,4),o);r.position.y=Ae+1.5,r.rotation.y=Math.PI/4,i.add(r);const a=new Z({color:U.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4,M=new C(new gt(.02,.02,3.2,3),a);M.position.set(Math.cos(y)*.8,Ae+1.5,Math.sin(y)*.8),M.rotation.z=.35*(y<3.14?1:-1),M.rotation.y=-y,M.visible=!1,i.add(M)}for(let b=0;b<5;b++){const y=new C(new Re(1.85-b*.02,.04,6,4),new Z({color:2236979}));y.position.y=4+b*5,y.rotation.x=Math.PI/2,i.add(y)}const u=new q({color:1118488,roughness:.3,metalness:.7}),l=new C(new gt(2.2,2.5,.6,4),u);l.position.y=.3,l.rotation.y=Math.PI/4,i.add(l);const c=new C(new gt(2.8,3,.4,4),u);c.position.y=.05,c.rotation.y=Math.PI/4,i.add(c);const h=new Z({color:U.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<8;b++){const y=b/8*6.28,M=new C(new $(.06,4,3),h);M.position.set(Math.cos(y)*2.5,Ae*.7+b*.5,Math.sin(y)*2.5),M.visible=!1,i.add(M)}const f=new Z({color:1710626,transparent:!0,opacity:.08});for(let b=0;b<6;b++){const y=v()*6.28,M=2+v()*Ae*.7,R=new C(new gt(.008,.008,.5+v()*.5,3),f);R.position.set(Math.cos(y)*1.6,M,Math.sin(y)*1.6),R.rotation.z=(v()-.5)*.8,R.rotation.y=-y,i.add(R)}const p=new q({color:921108,roughness:.5,metalness:.4});for(let b=0;b<12;b++){const y=v()*6.28,M=3+v()*2,R=.15+v()*.25,L=new C(new $(R,4,3),p);L.scale.set(1+v()*.5,.3+v()*.3,1+v()*.5),L.position.set(Math.cos(y)*M,R*.15,Math.sin(y)*M),L.rotation.set(v(),v(),v()),i.add(L)}const m=new Z({color:U.obeliskPink,transparent:!0,opacity:0});for(let b=0;b<4;b++){const y=b/4*6.28+Math.PI/4;for(let M=0;M<5;M++){const R=5+M*3.5+v()*.5,L=(v()-.5)*.4,D=new C(new $(.04,4,3),m);D.position.set(Math.cos(y)*1.58+Math.cos(y+1.57)*L,R,Math.sin(y)*1.58+Math.sin(y+1.57)*L),D.visible=!1,i.add(D)}}const x=new Z({color:U.obeliskPink,transparent:!0,opacity:.8,blending:Qt,depthWrite:!1}),d=new C(new $(.5,12,8),x);d.position.y=Ae+3,i.add(d);const g=new Z({color:U.obeliskPink,transparent:!0,opacity:.2,blending:Qt,depthWrite:!1}),S=new C(new $(.9,8,6),g);S.position.y=Ae+3,i.add(S),Kp={mesh:d,haze:S,mat:x,hazeMat:g},Rh=[];const _=[.8,1.1,1.4,1.8],w=[11158783,10040302,12277247,8921821];for(let b=0;b<4;b++){const y=new Z({color:w[b],transparent:!0,opacity:.4,blending:Qt,depthWrite:!1,side:Ct}),M=new C(new Re(_[b],.02,6,24),y);M.position.y=Ae+3,M.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),i.add(M),Rh.push({mesh:M,mat:y,rx:(Math.random()-.5)*2,ry:(Math.random()-.5)*2,rz:(Math.random()-.5)*1.5})}const A=new Z({color:0,transparent:!0,opacity:.15,side:Ct}),E=new C(new Be(4,8),A);E.rotation.x=-Math.PI/2,E.position.y=.005,i.add(E),i.position.set(0,-Ae,0),at.add(i),$p=i;const T=new pr(8939212,0,30);i.add(T),T.position.set(0,Ae+1,0)}let Qp=null,tm=null;function CS(){return Qp}function PS(){return tm}function IS(){const i=new q({color:U.moatBlue,emissive:1136042,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3});tm=i;const t=new zc;t.absarc(0,0,6,0,6.28,!1);const e=new Nc;e.absarc(0,0,3,0,6.28,!0),t.holes.push(e);const n=new ea(t,24),s=new C(n,i);s.rotation.x=-Math.PI/2,s.position.y=.05,s.visible=!1,at.add(s),Qp=s;const o=new Z({color:4491468,transparent:!0,opacity:0});for(let p=0;p<12;p++){const m=p/12*6.28+v()*.3,x=3.5+v()*2,d=new C(new $(.04+v()*.04,4,3),o);d.scale.set(1.2,.4,1.2),d.position.set(Math.cos(m)*x,.02,Math.sin(m)*x),d.visible=!1,at.add(d)}const r=new Z({color:13426158,transparent:!0,opacity:0,side:Ct});for(let p=0;p<6;p++){const m=p/6*6.28+v()*.5,x=new C(new Be(.12+v()*.1,5),r);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(m)*3.3,.06,Math.sin(m)*3.3),x.visible=!1,at.add(x)}const a=new Z({color:8960989,transparent:!0,opacity:0});for(let p=0;p<8;p++){const m=p/8*6.28,x=4+v()*1.5,d=new C(new gt(.003,.003,.4,3),a);d.position.set(Math.cos(m)*x,.055,Math.sin(m)*x),d.rotation.x=Math.PI/2,d.rotation.z=m+Math.PI/2,d.visible=!1,at.add(d)}const u=new Z({color:264208,transparent:!0,opacity:0,side:Ct}),l=new zc;l.absarc(0,0,5.2,0,6.28,!1);const c=new Nc;c.absarc(0,0,3.8,0,6.28,!0),l.holes.push(c);const h=new ea(l,16),f=new C(h,u);f.rotation.x=-Math.PI/2,f.position.y=.04,f.visible=!1,at.add(f)}const sa=[];function x0(i,t,e,n,s){const o=[],r=[],a=[];for(let l=0;l<e;l++){const c=i[l],h=i[l+1],f=h.x-c.x;h.y-c.y;const p=h.z-c.z,m=Math.sqrt(f*f+p*p)||1,x=-p/m,d=f/m,g=(l+.5)/e,S=.7+Math.sin(g*Math.PI)*.5,_=t*S/2,w=[c.x+x*_,c.y,c.z+d*_],A=[c.x-x*_,c.y,c.z-d*_],E=[h.x+x*_,h.y,h.z+d*_],T=[h.x-x*_,h.y,h.z-d*_];o.push(...w,...E,...A,...A,...E,...T);const b=l/e,y=(l+1)/e;if(a.push(b,0,y,0,b,1,b,1,y,0,y,1),s){const L=.85+Math.sin(g*Math.PI*3)*.15,D=1.2*L,F=.6*L;r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*F,s.g*F,s.b*F),r.push(s.r*F,s.g*F,s.b*F),r.push(s.r*D,s.g*D,s.b*D),r.push(s.r*F,s.g*F,s.b*F)}}const u=new be;return u.setAttribute("position",new Vt(o,3)),u.setAttribute("uv",new Vt(a,2)),r&&u.setAttribute("color",new Vt(r,3)),u.computeVertexNormals(),u}function LS(){for(let u=0;u<6;u++){const l=U.rainbow[u],c=u/6*6.28,h=6+u*.8,f=Ae+6+u*2.5,p=1-u*.05,m=[],x=32;for(let V=0;V<=x;V++){const k=V/x,O=c+k*Math.PI,B=Math.cos(O)*h,it=Math.sin(O)*h,ut=Math.sin(k*Math.PI)*f;m.push(new z(B,ut,it))}const d=new rt(l),g=x0(m,p,x,!0,d),S=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Ct,depthWrite:!1,blending:Qt}),_=new C(g,S);_.visible=!1,at.add(_);const w=new to(m),A=new Z({color:16777215,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),E=new on(w,x,.03,4,!1),T=new C(E,A);T.visible=!1,at.add(T);const b=[],y=new Z({color:16777215,transparent:!0,opacity:0,blending:Qt,depthWrite:!1});for(let V=0;V<8;V++){const k=new C(new $(.06,4,3),y.clone());k.visible=!1,at.add(k),b.push({mesh:k,mat:k.material,phase:V/8,speed:.15+Math.random()*.1})}const M=new Z({color:l,transparent:!0,opacity:0,side:Ct,blending:Qt}),R=m[0],L=m[m.length-1],D=new C(new Be(1.2,8),M);D.rotation.x=-Math.PI/2,D.position.set(R.x,.03,R.z),D.visible=!1,at.add(D);const F=new C(new Be(1.2,8),M.clone());F.rotation.x=-Math.PI/2,F.position.set(L.x,.03,L.z),F.visible=!1,at.add(F),sa.push({mesh:_,mat:S,coreLine:T,coreMat:A,curve:w,sparkles:b,pools:[D,F],poolMat:M,targetOpacity:0})}const i=[],t=10,e=Ae+14,n=32;for(let u=0;u<=n;u++){const l=u/n,c=l*Math.PI;i.push(new z(Math.cos(c)*t,Math.sin(l*Math.PI)*e,Math.sin(c)*t))}const s=new rt(15654399),o=x0(i,1.5,n,!0,s),r=new Z({vertexColors:!0,transparent:!0,opacity:0,side:Ct,depthWrite:!1,blending:Qt}),a=new C(o,r);a.visible=!1,at.add(a),sa.push({mesh:a,mat:r,targetOpacity:0})}function DS(i){for(let t=0;t<sa.length;t++){const e=sa[t];if(!(!e.sparkles||!e.curve)&&e.mesh.visible){e.coreLine&&(e.coreLine.visible=e.mesh.visible,e.coreMat.opacity=e.mat.opacity*.4);for(let n=0;n<e.sparkles.length;n++){const s=e.sparkles[n];s.phase+=s.speed*.016,s.phase>1&&(s.phase-=1);const o=e.curve.getPoint(s.phase);s.mesh.position.copy(o),s.mesh.visible=e.mesh.visible;const r=Math.sin(i*8+n*2.1)*.5+.5;s.mat.opacity=e.mat.opacity*r*.7}if(e.pools)for(let n=0;n<e.pools.length;n++)e.pools[n].visible=e.mesh.visible,e.poolMat&&(e.poolMat.opacity=e.mat.opacity*.3)}}}let yn=null;const mi=[],pn=new fe,qr=new rt;function US(i){const t=new Z({color:16777215,transparent:!0,opacity:1});yn=new ii(Dn.fly,t,i),yn.instanceMatrix.setUsage(ye),yn.instanceColor=new Ai(new Float32Array(i*3),3),yn.instanceColor.setUsage(ye),pn.scale.setScalar(0),pn.updateMatrix();for(let e=0;e<i;e++){yn.setMatrixAt(e,pn.matrix);const n=e%3===0?U.fireflyB:U.firefly;qr.setHex(n),yn.setColorAt(e,qr),mi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:n})}yn.count=i,yn.frustumCulled=!1,at.add(yn)}function gc(i,t,e,n){let s=null;for(let o=0;o<mi.length;o++)if(!mi[o].active){s=mi[o];break}if(!s){let o=1/0;for(let r=0;r<mi.length;r++)mi[r].life<o&&(o=mi[r].life,s=mi[r])}s.x=i,s.y=t+.5+Math.random()*3,s.z=e,s.vx=(Math.random()-.5)*2,s.vy=Math.random()-.5,s.vz=(Math.random()-.5)*2,s.life=n,s.max=n,s.active=!0,s.wander=Math.random()*6.28}function em(i,t){let e=0,n=!1;for(let s=0;s<mi.length;s++){const o=mi[s];if(!o.active){pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(s,pn.matrix);continue}if(o.life-=i,o.life<=0){o.active=!1,pn.position.set(0,-100,0),pn.scale.setScalar(0),pn.updateMatrix(),yn.setMatrixAt(s,pn.matrix);continue}e++,o.wander+=(Math.random()-.5)*3*i,o.vx+=Math.cos(o.wander)*1.5*i,o.vz+=Math.sin(o.wander)*1.5*i,o.vy+=Math.sin(t*2+o.phase)*i,o.vx*=.995,o.vy*=.995,o.vz*=.995,o.x+=o.vx*i,o.y+=o.vy*i,o.z+=o.vz*i;const r=Bt(o.x,o.z)+.3;o.y<r&&(o.y=r,o.vy=Math.abs(o.vy)*.5),o.y>12&&(o.vy-=2*i);const a=Math.sin(t*3+o.phase)*.5+.5,l=o.life/o.max*(.4+a*.6),c=.6+a*.6;pn.position.set(o.x,o.y,o.z),pn.scale.setScalar(c),pn.updateMatrix(),yn.setMatrixAt(s,pn.matrix),qr.setHex(o.colorHex),qr.multiplyScalar(l),yn.setColorAt(s,qr),n=!0}return yn.instanceMatrix.needsUpdate=!0,n&&(yn.instanceColor.needsUpdate=!0),e}let wn=null;const gi=[],mn=new fe,Vc=new rt,NS=new rt(U.spore);function zS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});wn=new ii(Dn.spore,t,i),wn.instanceMatrix.setUsage(ye),wn.instanceColor=new Ai(new Float32Array(i*3),3),wn.instanceColor.setUsage(ye),mn.scale.setScalar(0),mn.updateMatrix();for(let e=0;e<i;e++)wn.setMatrixAt(e,mn.matrix),Vc.setHex(U.spore),wn.setColorAt(e,Vc),gi.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});wn.count=i,wn.frustumCulled=!1,at.add(wn)}function FS(i,t,e){let n=null;for(let s=0;s<gi.length;s++)if(!gi[s].active){n=gi[s];break}if(!n){let s=1/0;for(let o=0;o<gi.length;o++)gi[o].life<s&&(s=gi[o].life,n=gi[o])}n.x=i,n.y=t,n.z=e,n.vx=(Math.random()-.5)*.3,n.vy=.4+Math.random()*.4,n.vz=(Math.random()-.5)*.3,n.life=3+Math.random()*3,n.max=n.life,n.active=!0}let nm=0,im=0;function OS(i,t){nm=i,im=t}function BS(i){let t=0,e=!1;for(let n=0;n<gi.length;n++){const s=gi[n];if(!s.active){mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(n,mn.matrix);continue}if(s.life-=i,s.life<=0){s.active=!1,mn.position.set(0,-100,0),mn.scale.setScalar(0),mn.updateMatrix(),wn.setMatrixAt(n,mn.matrix);continue}t++,s.vy+=.3*i,s.vx+=nm*.3*i,s.vz+=im*.3*i,s.vx*=.997,s.vy*=.997,s.vz*=.997,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i;const o=s.life/s.max*.7;mn.position.set(s.x,s.y,s.z),mn.scale.setScalar(1),mn.updateMatrix(),wn.setMatrixAt(n,mn.matrix),Vc.copy(NS).multiplyScalar(o),wn.setColorAt(n,Vc),e=!0}return wn.instanceMatrix.needsUpdate=!0,e&&(wn.instanceColor.needsUpdate=!0),t}let Sn=null;const qo=[];let Ql=0;const gn=new fe,Wc=new rt,sm=new rt(U.starMote);function GS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});Sn=new ii(Dn.starMote,t,i),Sn.instanceMatrix.setUsage(ye),Sn.instanceColor=new Ai(new Float32Array(i*3),3),Sn.instanceColor.setUsage(ye),gn.scale.setScalar(0),gn.updateMatrix();for(let e=0;e<i;e++)Sn.setMatrixAt(e,gn.matrix),Wc.copy(sm),Sn.setColorAt(e,Wc),qo.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});Sn.count=i,Sn.frustumCulled=!1,at.add(Sn)}function kS(i){let t=null;for(let e=0;e<qo.length;e++)if(!qo[e].active){t=qo[e];break}t&&(t.x=i.x+(Math.random()-.5)*60,t.z=i.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function om(i,t,e){Ql+=i,Ql>.15&&(Ql=0,kS(e));let n=!1;for(let s=0;s<qo.length;s++){const o=qo[s];if(!o.active){gn.position.set(0,-100,0),gn.scale.setScalar(0),gn.updateMatrix(),Sn.setMatrixAt(s,gn.matrix);continue}if(o.life-=i,o.life<=0||o.y<.5){o.active=!1,gn.position.set(0,-100,0),gn.scale.setScalar(0),gn.updateMatrix(),Sn.setMatrixAt(s,gn.matrix);continue}o.y+=o.vy*i,o.drift+=(Math.random()-.5)*.5*i,o.x+=Math.sin(o.drift)*.1*i,o.z+=Math.cos(o.drift)*.08*i;const r=o.life/o.max,a=Math.sin(t*4+s)*.3+.7,u=r*a*.7,l=.5+a*.5;gn.position.set(o.x,o.y,o.z),gn.scale.setScalar(l),gn.updateMatrix(),Sn.setMatrixAt(s,gn.matrix),Wc.copy(sm).multiplyScalar(u),Sn.setColorAt(s,Wc),n=!0}Sn.instanceMatrix.needsUpdate=!0,n&&(Sn.instanceColor.needsUpdate=!0)}let bn=null;const Yo=[],xn=new fe,Xc=new rt,rm=new rt(8956535);function HS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});bn=new ii(Dn.dustMote,t,i),bn.instanceMatrix.setUsage(ye),bn.instanceColor=new Ai(new Float32Array(i*3),3),bn.instanceColor.setUsage(ye),xn.scale.setScalar(0),xn.updateMatrix();for(let e=0;e<i;e++)bn.setMatrixAt(e,xn.matrix),Xc.copy(rm),bn.setColorAt(e,Xc),Yo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});bn.count=i,bn.frustumCulled=!1,at.add(bn)}function v0(i,t,e){for(let n=0;n<e;n++){let s=null;for(let a=0;a<Yo.length;a++)if(!Yo[a].active){s=Yo[a];break}if(!s)continue;const o=Math.random()*6.28,r=1+Math.random()*2;s.x=i+Math.cos(o)*.2,s.y=Bt(i,t)+.1,s.z=t+Math.sin(o)*.2,s.vx=Math.cos(o)*r,s.vy=.5+Math.random()*1.5,s.vz=Math.sin(o)*r,s.life=.6+Math.random()*.6,s.max=s.life,s.active=!0}}function VS(i){let t=!1;for(let e=0;e<Yo.length;e++){const n=Yo[e];if(!n.active){xn.position.set(0,-100,0),xn.scale.setScalar(0),xn.updateMatrix(),bn.setMatrixAt(e,xn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,xn.position.set(0,-100,0),xn.scale.setScalar(0),xn.updateMatrix(),bn.setMatrixAt(e,xn.matrix);continue}n.vy-=3*i,n.vx*=.96,n.vy*=.96,n.vz*=.96,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=Bt(n.x,n.z)+.05;n.y<s&&(n.y=s,n.vy=0,n.vx*=.8,n.vz*=.8);const o=n.life/n.max*.4;xn.position.set(n.x,n.y,n.z),xn.scale.setScalar(1),xn.updateMatrix(),bn.setMatrixAt(e,xn.matrix),Xc.copy(rm).multiplyScalar(o),bn.setColorAt(e,Xc),t=!0}bn.instanceMatrix.needsUpdate=!0,t&&(bn.instanceColor.needsUpdate=!0)}let Tn=null;const Zo=[],vn=new fe,qc=new rt,am=new rt(U.bubblePop),WS=new $(.02,3,3);function XS(i){const t=new Z({color:16777215,transparent:!0,opacity:1});Tn=new ii(WS,t,i),Tn.instanceMatrix.setUsage(ye),Tn.instanceColor=new Ai(new Float32Array(i*3),3),Tn.instanceColor.setUsage(ye),vn.scale.setScalar(0),vn.updateMatrix();for(let e=0;e<i;e++)Tn.setMatrixAt(e,vn.matrix),qc.copy(am),Tn.setColorAt(e,qc),Zo.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Tn.count=i,Tn.frustumCulled=!1,at.add(Tn)}function qS(i,t,e,n){for(let s=0;s<n;s++){let o=null;for(let l=0;l<Zo.length;l++)if(!Zo[l].active){o=Zo[l];break}if(!o)continue;const r=Math.random()*6.28,a=Math.random()*3.14,u=1+Math.random()*2;o.x=i,o.y=t,o.z=e,o.vx=Math.cos(r)*Math.sin(a)*u,o.vy=Math.cos(a)*u,o.vz=Math.sin(r)*Math.sin(a)*u,o.life=.4+Math.random()*.4,o.max=o.life,o.active=!0}}function YS(i){let t=!1;for(let e=0;e<Zo.length;e++){const n=Zo[e];if(!n.active){vn.position.set(0,-100,0),vn.scale.setScalar(0),vn.updateMatrix(),Tn.setMatrixAt(e,vn.matrix);continue}if(n.life-=i,n.life<=0){n.active=!1,vn.position.set(0,-100,0),vn.scale.setScalar(0),vn.updateMatrix(),Tn.setMatrixAt(e,vn.matrix);continue}n.vy-=2*i,n.vx*=.97,n.vy*=.97,n.vz*=.97,n.x+=n.vx*i,n.y+=n.vy*i,n.z+=n.vz*i;const s=n.life/n.max*.8;vn.position.set(n.x,n.y,n.z),vn.scale.setScalar(1),vn.updateMatrix(),Tn.setMatrixAt(e,vn.matrix),qc.copy(am).multiplyScalar(s),Tn.setColorAt(e,qc),t=!0}Tn.instanceMatrix.needsUpdate=!0,t&&(Tn.instanceColor.needsUpdate=!0)}let En=null;const $o=[],nn=new fe,Yc=new rt,cm=[new rt(U.leafGlow),new rt(3394662),new rt(2271880),new rt(5636044),new rt(4513262)];let lm=0,um=0;function ZS(i,t,e){lm=i,um=t}function $S(i){const t=new oe(.12,.08),e=new Z({color:16777215,transparent:!0,opacity:1,side:Ct,depthWrite:!1,blending:Qt});En=new ii(t,e,i),En.instanceMatrix.setUsage(ye),En.instanceColor=new Ai(new Float32Array(i*3),3),En.instanceColor.setUsage(ye),nn.scale.setScalar(0),nn.updateMatrix();for(let n=0;n<i;n++)En.setMatrixAt(n,nn.matrix),Yc.setHex(0),En.setColorAt(n,Yc),$o.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});En.count=i,En.frustumCulled=!1,at.add(En)}function jS(i,t,e){let n=null;for(let o=0;o<$o.length;o++)if(!$o[o].active){n=$o[o];break}if(!n)return;n.x=i+(Math.random()-.5)*2,n.y=t+Math.random()*2,n.z=e+(Math.random()-.5)*2;const s=Math.random()*6.28;n.vx=Math.cos(s)*.3,n.vy=-.2-Math.random()*.3,n.vz=Math.sin(s)*.3,n.rvx=(Math.random()-.5)*4,n.rvy=(Math.random()-.5)*3,n.rvz=(Math.random()-.5)*2,n.rx=Math.random()*6.28,n.ry=Math.random()*6.28,n.rz=Math.random()*6.28,n.life=4+Math.random()*4,n.max=n.life,n.active=!0,n.colorIdx=Math.floor(Math.random()*cm.length)}function JS(i,t){let e=!1;for(let n=0;n<$o.length;n++){const s=$o[n];if(!s.active){nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),En.setMatrixAt(n,nn.matrix);continue}if(s.life-=i,s.life<=0||s.y<-.5){s.active=!1,nn.position.set(0,-100,0),nn.scale.setScalar(0),nn.updateMatrix(),En.setMatrixAt(n,nn.matrix);continue}s.vx+=lm*.4*i,s.vz+=um*.4*i,s.vx+=Math.sin(t*3+n*1.7)*.5*i,s.vz+=Math.cos(t*2.5+n*2.1)*.3*i,s.vy-=.3*i,s.vx*=.995,s.vy=Math.max(s.vy,-.8),s.vz*=.995,s.x+=s.vx*i,s.y+=s.vy*i,s.z+=s.vz*i,s.rx+=s.rvx*i,s.ry+=s.rvy*i,s.rz+=s.rvz*i;const o=s.life/s.max,r=o*(.6+Math.sin(t*2+n*.8)*.4),a=.8+o*.4;nn.position.set(s.x,s.y,s.z),nn.rotation.set(s.rx,s.ry,s.rz),nn.scale.setScalar(a),nn.updateMatrix(),En.setMatrixAt(n,nn.matrix),Yc.copy(cm[s.colorIdx]).multiplyScalar(r),En.setColorAt(n,Yc),e=!0}En.instanceMatrix.needsUpdate=!0,e&&(En.instanceColor.needsUpdate=!0)}const Qa=40,Ch=8;let sn=null;const xi=[],Gn=new fe,ps=new rt,hm=new rt(4513194);let M0=0,_0=0,Ff=!1;function KS(){const i=new zc;return i.moveTo(0,-.18),i.quadraticCurveTo(.1,-.17,.11,-.06),i.lineTo(.1,-.02),i.lineTo(.13,.12),i.quadraticCurveTo(.125,.14,.11,.12),i.lineTo(.08,0),i.quadraticCurveTo(.05,-.02,.03,0),i.lineTo(.03,.05),i.lineTo(.02,.22),i.quadraticCurveTo(0,.245,-.02,.22),i.lineTo(-.03,.05),i.lineTo(-.03,0),i.quadraticCurveTo(-.05,-.02,-.08,0),i.lineTo(-.11,.12),i.quadraticCurveTo(-.125,.14,-.13,.12),i.lineTo(-.1,-.02),i.lineTo(-.11,-.06),i.quadraticCurveTo(-.1,-.17,0,-.18),new ea(i)}function QS(){const i=KS(),t=new Z({color:16777215,transparent:!0,opacity:1,blending:Qt,depthWrite:!1,side:Ct});sn=new ii(i,t,Qa),sn.instanceMatrix.setUsage(ye),sn.instanceColor=new Ai(new Float32Array(Qa*3),3),sn.instanceColor.setUsage(ye),Gn.position.set(0,-100,0),Gn.scale.setScalar(0),Gn.updateMatrix();for(let e=0;e<Qa;e++)sn.setMatrixAt(e,Gn.matrix),ps.setScalar(0),sn.setColorAt(e,ps),xi.push({active:!1,life:0,maxLife:Ch,x:0,z:0});sn.count=Qa,sn.frustumCulled=!1,at.add(sn),Ff=!0}function t2(i,t,e,n){if(!Ff)return;const s=i-M0,o=t-_0;if(s*s+o*o<(n?.25:.64))return;M0=i,_0=t;let u=null,l=-1;for(let d=0;d<xi.length;d++)if(!xi[d].active){u=xi[d],l=d;break}if(!u){let d=1/0;for(let g=0;g<xi.length;g++)xi[g].life<d&&(d=xi[g].life,u=xi[g],l=g)}const c=Bt(i,t);u.active=!0,u.life=Ch,u.maxLife=Ch,u.x=i,u.z=t;const h=l%2===0?1:-1,f=Math.sin(e+Math.PI/2)*.12*h,p=Math.cos(e+Math.PI/2)*.12*h,m=n?1.15:1;Gn.position.set(i+f,c+.04,t+p),Gn.rotation.set(-Math.PI/2,0,-e+(Math.random()-.5)*.15),Gn.scale.set(m,m,m),Gn.updateMatrix(),sn.setMatrixAt(l,Gn.matrix);const x=n?1.2:.85;ps.copy(hm).multiplyScalar(x),sn.setColorAt(l,ps)}function e2(i,t){if(!Ff)return;const e=1+(t||0)*1.5;let n=!1;for(let s=0;s<xi.length;s++){const o=xi[s];if(!o.active)continue;if(o.life-=i*e,o.life<=0){o.active=!1,Gn.position.set(0,-100,0),Gn.scale.setScalar(0),Gn.updateMatrix(),sn.setMatrixAt(s,Gn.matrix),ps.setScalar(0),sn.setColorAt(s,ps),n=!0;continue}const r=o.life/o.maxLife,a=r*r;ps.copy(hm).multiplyScalar(a*.85),sn.setColorAt(s,ps),n=!0}sn.instanceMatrix.needsUpdate=!0,n&&(sn.instanceColor.needsUpdate=!0)}const kn=[],Bi=[];let y0=Ae+2,cs=1;function w0(i){cs=i}function n2(){for(let i=0;i<kn.length;i++){const t=kn[i];at.remove(t.upTube),t.upTube.geometry.dispose(),t.mat.dispose(),at.remove(t.upGlow),t.upGlow.geometry.dispose(),t.glowMat.dispose(),at.remove(t.bendTube),t.bendTube.geometry.dispose(),t.bendMat.dispose(),at.remove(t.bendGlow),t.bendGlow.geometry.dispose(),t.bendGlowMat.dispose()}kn.length=0;for(let i=0;i<Bi.length;i++){const t=Bi[i];at.remove(t.tube),t.tube.geometry.dispose(),t.mat.dispose(),at.remove(t.glow),t.glow.geometry.dispose(),t.glowMat.dispose()}Bi.length=0}function fm(i,t,e,n){const s=[];for(let r=0;r<=12;r++){const a=r/12,u=i*(1-a*a),l=t*(1-a*a),c=e+(n-e)*a;s.push(new z(u,c,l))}return{curve:new to(s),pts:s}}function i2(i,t,e,n){const s=n||Ae+2,o=e+15,r=new Sf(new z(i,e,t),new z(i,o,t)),a=new Z({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),u=new C(new on(r,1,.06,6,!1),a);at.add(u);const l=new Z({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),c=new C(new on(r,1,.2,6,!1),l);at.add(c);const{curve:h}=fm(i,t,o,s),f=new Z({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),p=new C(new on(h,16,.05,6,!1),f);at.add(p);const m=new Z({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),x=new C(new on(h,16,.18,6,!1),m);at.add(x);const d={upTube:u,upGlow:c,bendTube:p,bendGlow:x,mat:a,glowMat:l,bendMat:f,bendGlowMat:m,fromX:i,fromZ:t,floatY:e,skyY:o,tipY:s,animPhase:0,animTimer:0};kn.push(d);for(let g=0;g<kn.length-1;g++){const S=kn[g],_=(d.skyY+S.skyY)/2,w=[];for(let M=0;M<=8;M++){const R=M/8,L=d.fromX*(1-R)+S.fromX*R,D=d.fromZ*(1-R)+S.fromZ*R,F=_+Math.sin(R*Math.PI)*3;w.push(new z(L,F,D))}const A=new to(w),E=new Z({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),T=new C(new on(A,10,.03,4,!1),E);at.add(T);const b=new Z({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),y=new C(new on(A,10,.1,4,!1),b);at.add(y),Bi.push({tube:T,glow:y,mat:E,glowMat:b,opacity:0})}return d}function s2(i){for(let t=0;t<kn.length;t++){const e=kn[t];e.tipY=i;const{curve:n}=fm(e.fromX,e.fromZ,e.skyY,i);at.remove(e.bendTube),e.bendTube.geometry.dispose(),e.bendTube.geometry=new on(n,16,.05,6,!1),at.add(e.bendTube),at.remove(e.bendGlow),e.bendGlow.geometry.dispose(),e.bendGlow.geometry=new on(n,16,.18,6,!1),at.add(e.bendGlow)}}function o2(i,t,e){const n=e||Ae+2;Math.abs(n-y0)>.1&&kn.length>0&&(s2(n),y0=n);for(let s=0;s<kn.length;s++){const o=kn[s];if(o.animTimer+=i,o.animPhase===0){const r=Math.min(o.animTimer/.5,1);o.mat.opacity=r*.8,o.glowMat.opacity=r*.3,o.animTimer>.5&&(o.animPhase=1,o.animTimer=0)}else if(o.animPhase===1){const r=Math.min(o.animTimer/.8,1);o.bendMat.opacity=r*.7,o.bendGlowMat.opacity=r*.2,o.mat.opacity=.8,o.glowMat.opacity=.3,o.animTimer>.8&&(o.animPhase=2)}else{const r=Math.sin(t*3+s*1.2)*.5+.5;o.mat.opacity=.5+r*.4,o.glowMat.opacity=.15+r*.15,o.bendMat.opacity=.4+r*.3,o.bendGlowMat.opacity=.1+r*.12}}for(let s=0;s<Bi.length;s++){const o=Bi[s];o.opacity=Math.min(o.opacity+i*.5,.3);const r=Math.sin(t*2+s*.8)*.5+.5;o.mat.opacity=o.opacity*(.6+r*.4),o.glowMat.opacity=o.opacity*(.2+r*.15)}if(cs<1){for(let s=0;s<kn.length;s++){const o=kn[s];o.mat.opacity*=cs,o.glowMat.opacity*=cs,o.bendMat.opacity*=cs,o.bendGlowMat.opacity*=cs}for(let s=0;s<Bi.length;s++)Bi[s].mat.opacity*=cs,Bi[s].glowMat.opacity*=cs}}const r2=new rt(U.orbGold),a2=new rt(16777215);let To=0,Je="SEEK",ls=-Ae,en=0,Fr=[],Jn=null,Us=null,Ns=null,xe=null,zs=[],Fi=null,Ph=null,Kn=[],Or=null,dm=null,pm=null,Ih=null,Lh=null,Dh=null,Uh=null,xc=null,Nh=[],zh=[],Fh=[],Oh=[],Co=[],Bh=[],Po=null,S0=0,je=0,pi=[],No=null,b0=!1,T0=!1;const zo=200;let ti=null;const Of=[];let mm=!1;function c2(){if(ti)return;const i=new be,t=new Float32Array(zo*3),e=new Float32Array(zo*3),n=new Float32Array(zo);i.setAttribute("position",new Fe(t,3)),i.setAttribute("color",new Fe(e,3)),i.setAttribute("size",new Fe(n,1)),i.attributes.position.setUsage(ye),i.attributes.color.setUsage(ye),i.attributes.size.setUsage(ye);const s=new _f({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:Qt,depthWrite:!1,sizeAttenuation:!0});ti=new dp(i,s),ti.visible=!1,at.add(ti);const o=new rt(U.obeliskPink),r=new rt(11158783);for(let a=0;a<zo;a++){const u=Math.random()<.7?o:r;e[a*3]=u.r*(.8+Math.random()*.4),e[a*3+1]=u.g*(.8+Math.random()*.4),e[a*3+2]=u.b*(.8+Math.random()*.4),n[a]=.15+Math.random()*.25,Of.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Math.random()*6.28})}i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0}function l2(i,t,e){mm=!0,ti.visible=!0;for(let n=0;n<zo;n++){const s=Of[n];s.x=i,s.y=t,s.z=e;const o=Math.random()*6.28,r=Math.random()*Math.PI,a=2+Math.random()*5;s.vx=Math.sin(r)*Math.cos(o)*a,s.vy=Math.cos(r)*a*.5+Math.random()*2,s.vz=Math.sin(r)*Math.sin(o)*a,s.life=5+Math.random()*6,s.active=!0}}function u2(i,t){if(!ti||!ti.visible)return;const e=ti.geometry.attributes.position.array,n=ti.geometry.attributes.size.array;let s=!1;for(let o=0;o<zo;o++){const r=Of[o];if(!r.active){e[o*3+1]=-100,n[o]=0;continue}if(s=!0,r.life-=i,r.life<=0||r.y<-1){r.active=!1;continue}r.vy-=1.5*i,r.vx*=.995,r.vz*=.995,r.vx+=Math.sin(t*3+o*.7)*.3*i,r.vz+=Math.cos(t*2.5+o*1.1)*.2*i,r.x+=r.vx*i,r.y+=r.vy*i,r.z+=r.vz*i,e[o*3]=r.x,e[o*3+1]=r.y,e[o*3+2]=r.z;const a=Math.sin(t*6+r.sparklePhase)*.5+.5,u=Math.min(r.life/2,1);n[o]=(.15+a*.2)*u}ti.geometry.attributes.position.needsUpdate=!0,ti.geometry.attributes.size.needsUpdate=!0,s||(ti.visible=!1)}function h2(i){Fr=i.orbs,Jn=i.obeliskGroup,Us=i.obeliskMat,Ns=i.obeliskGlowMat,xe=i.pinnacleOrb,zs=i.pinnacleRings||[],Fi=i.moatMesh,Ph=i.moatMat,Kn=i.rainbowArcs,Or=i.player,dm=i.makeLaser,pm=i.orbHudEl,Nh=i.deers||[],zh=i.puffs||[],Fh=i.jellies||[],Oh=i.moths||[],Co=i.trees||[],Bh=i.treeMeshes||[],Po=i.groundMesh||null,Ih=i.playOrbCollect||null,Lh=i.playOrbWarble||null,Dh=i.playLaserZap||null,Uh=i.playLaserHum||null,xc=i.stopLaserHums||null,c2()}function f2(i,t){let e=null,n=1/0;for(let u=0;u<Fr.length;u++){const l=Fr[u];if(l.found)continue;const c=l.x-Or.pos.x,h=l.z-Or.pos.z,f=c*c+h*h;f<n&&(n=f,e=l)}if(e&&n<wo*wo){const u=Math.sin(t*2+e.phase)*.5+.5;zr.position.set(e.x,1,e.z),zr.intensity=1+u*2,zr.distance=wo}else zr.intensity=0;for(let u=0;u<Fr.length;u++){const l=Fr[u];if(!(l.found&&!l.flyUp&&!l._flashing)){if(!l.found){const c=Math.sin(t*1.5+l.phase)*.5+.5;l.group.position.y=l.flyY+Math.sin(t*.8+l.phase)*.3,l.glowMat.opacity=.3+c*.4,l.hazeMat.opacity=.08+c*.12;const h=l.x-Or.pos.x,f=l.z-Or.pos.z,p=h*h+f*f,m=wo*wo;if(p<m){const x=1-Math.sqrt(p)/wo,d=x*x;l.glowMat.opacity=Math.min(.3+c*.4+d*.5,1),l.hazeMat.opacity=Math.min(.08+c*.12+d*.25,.6),l.coreMat.color.copy(a2).lerp(r2,1-d);const g=1+d*.3;l.group.scale.setScalar(g)}else l.group.scale.setScalar(1);for(let x=3;x<l.group.children.length;x++){const d=l.group.children[x],g=(x-3)/6*6.28+t*1.5;d.position.x=Math.cos(g)*.4,d.position.z=Math.sin(g)*.4,d.position.y=Math.sin(g*2+t)*.1}if(p<c0*c0){l.found=!0,l._flashing=!0,l._flashTimer=0,l.flyY=l.group.position.y,To++;const x=pm||document.getElementById("orb-hud");x&&(x.innerHTML="✦ "+To+" / "+Ro),Je==="SEEK"&&(Je="RISING"),Ih&&Ih()}}if(l._flashing){l._flashTimer+=i;const c=Math.min(l._flashTimer/1.5,1),h=c<.3?c/.3:1-(c-.3)/.7;l.glowMat.opacity=.5+h*.5,l.hazeMat.opacity=.3+h*.5,l.group.scale.setScalar(1+h*.6),l.group.position.x=l.x+Math.sin(t*30)*h*.05,l.group.position.z=l.z+Math.cos(t*25)*h*.05,l._flashTimer>1.5&&(l._flashing=!1,l.flyUp=!0,l.group.position.x=l.x,l.group.position.z=l.z,Lh&&Lh())}if(l.flyUp){const c=Ae+5;l.flyY+=(c-l.flyY)*i*.8,l.group.position.y=l.flyY;const h=Math.min((l.flyY-1)/(c-1),1);if(l.group.scale.setScalar(1-h*.6),l.glowMat.opacity=.8-h*.5,l.flyY>c-1&&!l.laserLine){l.flyUp=!1,l.group.visible=!1;const f=tu();l.laserLine=dm(l.x,l.z,0,f),Dh&&Dh(),Uh&&Uh(l.x,l.z)}}}}const s=Ae/Ro,o=-Ae+To*s;if(ls<o-.01?(ls+=8*i,ls>o&&(ls=o),Jn&&(Jn.position.y=ls,Jn.position.x=Math.sin(t*25)*.04,Jn.position.z=Math.cos(t*30)*.03)):Jn&&(Jn.position.x*=.9,Jn.position.z*=.9),To>=Ro&&ls>=-.01&&Je==="RISING"&&(Je="COMPLETE",en=0),Jn){Jn.rotation.y+=i*.03;const u=Jn.children[Jn.children.length-1];if(u&&u.isLight){const l=Math.max(0,Math.min(1,(ls+Ae)/Ae));u.intensity=l*1.5*(.8+Math.sin(t*1.5)*.2)}}if(xe&&xe.mesh.visible){const u=Math.sin(t*2)*.5+.5;xe.mat.opacity=.6+u*.3,xe.hazeMat.opacity=.15+u*.12;const l=To/Ro;xe.mat.opacity*=.3+l*.7,xe.hazeMat.opacity*=.2+l*.8}for(let u=0;u<zs.length;u++){const l=zs[u];if(!l.mesh.visible)continue;l.mesh.rotation.x+=l.rx*i,l.mesh.rotation.y+=l.ry*i,l.mesh.rotation.z+=l.rz*i;const c=To/Ro;l.mat.opacity=(.15+c*.35)*(.8+Math.sin(t*1.5+u)*.2)}const a=tu();if(o2(i,t,a),Je==="COMPLETE"&&en>3?w0(Math.max(0,1-(en-3)/4)):(Je==="FINALE"||Je==="TRANSFORM")&&(w0(0),xc&&(xc(),xc=null)),u2(i,t),Je==="COMPLETE"){en+=i;const u=Math.min(en/3,1);if(Us&&(Us.emissiveIntensity=u*1.5),Ns&&(Ns.emissiveIntensity=u*2.5),xe&&xe.mesh.visible&&en>1&&en<3){const l=Math.min((en-1)/1.5,1);xe.mat.opacity=.9+l*.1,xe.hazeMat.opacity=.5+l*.5,xe.mesh.scale.setScalar(1+l*.5),xe.haze.scale.setScalar(1+l*1);for(let c=0;c<zs.length;c++){const h=zs[c];h.mesh.rotation.x+=h.rx*i*(1+l*4),h.mesh.rotation.y+=h.ry*i*(1+l*4),h.mesh.rotation.z+=h.rz*i*(1+l*4)}}if(xe&&xe.mesh.visible&&en>=3&&!mm){const l=new z;xe.mesh.getWorldPosition(l),l2(l.x,l.y,l.z),xe.mesh.visible=!1,xe.haze.visible=!1;for(let c=0;c<zs.length;c++)zs[c].mesh.visible=!1}if(en>3&&Ph){const l=Math.min((en-3)/4,1);Ph.opacity=l*.6,Fi&&(Fi.visible||(Fi.visible=!0),Fi.position.y=.05+Math.sin(t*3)*.02*l)}if(en>4)for(let l=0;l<Kn.length;l++){const c=l*.3,h=Math.min(Math.max((en-4-c)/2,0),1);h>0&&!Kn[l].mesh.visible&&(Kn[l].mesh.visible=!0),Kn[l].mat.opacity=h*.55,Kn[l].mesh.rotation.y+=i*.1*(l+1)*.3}if(en>3){const l=Math.min((en-3)/6,1)*2;for(let c=0;c<Nh.length;c++){const h=Nh[c],f=h.group,p=-f.position.x,m=-f.position.z,x=Math.sqrt(p*p+m*m);x>8?(h.wanderAng=Math.atan2(-f.position.x,-f.position.z),h.state="walk",h.speed=1.5*l,f.position.x+=p/x*h.speed*i,f.position.z+=m/x*h.speed*i,f.rotation.y=h.wanderAng):h.state="pause"}for(let c=0;c<zh.length;c++){const h=zh[c],f=h.group,p=-f.position.x,m=-f.position.z,x=Math.sqrt(p*p+m*m);x>8&&(h.wanderAng=Math.atan2(-f.position.x,-f.position.z),h.state="hop",h.hopTimer=h.hopTimer%1.2,f.position.x+=p/x*1.5*l*i,f.position.z+=m/x*1.5*l*i)}for(let c=0;c<Fh.length;c++){const h=Fh[c],f=h.group;f.position.x+=(0-f.position.x)*i*.15*l,f.position.z+=(0-f.position.z)*i*.15*l}for(let c=0;c<Oh.length;c++){const h=Oh[c];h.centerX+=(0-h.centerX)*i*.2*l,h.centerZ+=(0-h.centerZ)*i*.2*l,h.orbitR=Math.max(h.orbitR-i*.3*l,2)}}en>12&&(Je="FINALE",console.log("✦ Quest → FINALE"))}if(Je==="FINALE"){S0+=i,Us&&(Us.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Ns&&(Ns.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Fi&&(Fi.position.y=.05+Math.sin(t*3)*.02);for(let u=0;u<Kn.length;u++)Kn[u].mesh.rotation.y+=i*.1*(u+1)*.3,Kn[u].mat.opacity=.45+Math.sin(t+u)*.1;S0>30&&(Je="TRANSFORM",je=0,d2(),console.log("✦ Quest → TRANSFORM (trees="+Co.length+")"))}if(Je==="TRANSFORM"){je+=i,Us&&(Us.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Ns&&(Ns.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Fi&&(Fi.position.y=.05+Math.sin(t*3)*.02);for(let h=0;h<Kn.length;h++)Kn[h].mesh.rotation.y+=i*.1*(h+1)*.3,Kn[h].mat.opacity=.45+Math.sin(t+h)*.1;if(je<3&&pi.length<Co.length){const h=Math.min(Math.floor(je/3*Co.length),Co.length);for(;pi.length<h;){const f=pi.length,p=Co[f],m=tu(),x=new Sf(new z(0,m,0),new z(p.x,0,p.z)),d=new Z({color:U.laserPink,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),g=new C(new on(x,8,.06,4,!1),d);at.add(g);const S=new Z({color:U.laserGlow,transparent:!0,opacity:0,blending:Qt,depthWrite:!1}),_=new C(new on(x,8,.18,4,!1),S);at.add(_),pi.push({tube:g,glow:_,mat:d,glowMat:S,timer:0})}}const u=je>=13?Math.min((je-13)/30,1):0,l=u*u*(3-2*u);for(let h=0;h<pi.length;h++){const f=pi[h];f.timer+=i;const p=Math.min(f.timer/.5,1)*(1-l),m=1-l,x=Math.sin(t*3+h*.5)*.5*m+.5;f.mat.opacity=p*(.6+x*.4),f.glowMat.opacity=p*(.2+x*.15)}if(u>=1&&pi.length>0){for(let h=0;h<pi.length;h++){const f=pi[h];at.remove(f.tube),f.tube.geometry.dispose(),f.mat.dispose(),at.remove(f.glow),f.glow.geometry.dispose(),f.glowMat.dispose()}pi.length=0}je>=13&&!T0&&(n2(),T0=!0);let c=0;if(je>=3&&je<6?c=(je-3)/3:je>=6&&je<10?(c=1,b0||(p2(),b0=!0,console.log("✦ Trees + ground transformed"))):je>=10&&je<13&&(c=1-(je-10)/3),No&&(No.style.opacity=c),je>=13&&xe&&!xe.mesh.visible&&(xe.mesh.visible=!0,xe.haze.visible=!0,xe.mesh.scale.setScalar(1.2),xe.haze.scale.setScalar(1.8)),je>=13&&xe&&xe.mesh.visible){const h=Math.sin(t*1.5)*.5+.5;xe.mat.opacity=.85+h*.15,xe.hazeMat.opacity=.3+h*.2}}}function tu(){return ls+Ae+3}function d2(){No||(No=document.createElement("div"),No.style.cssText="position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;",document.body.appendChild(No))}function p2(){const i=[{color:5575728,glow:13378167,core:16729258},{color:3805248,glow:11154363,core:14505471},{color:4461608,glow:14496648,core:16737979},{color:2756688,glow:8926156,core:12277247},{color:4200496,glow:13386905,core:16742348}];for(let t=0;t<Bh.length;t++){const e=Bh[t],n=i[t%i.length];e.trunkMat&&(e.trunkMat.color.set(667712),e.trunkMat.emissive.set(534584),e.trunkMat.emissiveIntensity=.1),e.canopyMat&&(e.canopyMat.color.set(n.core),e.canopyMat.emissive.set(n.glow),e.canopyMat.emissiveIntensity=.9),e.glowMat&&(e.glowMat.color.set(n.glow),e.glowMat.emissive.set(n.glow),e.glowMat.emissiveIntensity=.15),e.detailMat&&(e.detailMat.color.set(n.color),e.detailMat.emissive.set(n.glow),e.detailMat.emissiveIntensity=.3)}if(yw(1),Po&&Po.material){Po.material.emissive.set(2754629),Po.material.emissiveIntensity=.4;const t=Po.geometry.attributes.color;if(t){const e=t.array;for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],r=e[n+2];e[n]=s*.45+r*.25+o*.1,e[n+1]=o*.1,e[n+2]=r*.6+o*.45+s*.1}t.needsUpdate=!0}}}const m2=600;let tc=.25,ee=1,E0=.85,ze="NIGHT",Br=null,Gr=null,Gh=null,kr=null,vc=null;const A0=[{label:"DUSK",sky:new rt(923685),fog:new rt(791584),fogDensity:.009,moonInt:.6,moonCol:new rt(14527112),moonElev:15,ambSky:new rt(4469589),ambGnd:new rt(2238488),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:"NIGHT",sky:new rt(330264),fog:new rt(528408),fogDensity:.01,moonInt:1,moonCol:new rt(12307694),moonElev:55,ambSky:new rt(3359846),ambGnd:new rt(1587232),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:"DEEP_NIGHT",sky:new rt(198160),fog:new rt(397332),fogDensity:.012,moonInt:.55,moonCol:new rt(8952251),moonElev:75,ambSky:new rt(1712708),ambGnd:new rt(1188888),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:"DAWN",sky:new rt(1187888),fog:new rt(923688),fogDensity:.011,moonInt:.5,moonCol:new rt(13417386),moonElev:20,ambSky:new rt(3354197),ambGnd:new rt(1843224),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],is=new rt,R0=new rt;function g2(i){Br=i.scene,Gr=i.moon,Gh=i.moon2,kr=i.hemiLight,vc=i.playerLight}function x2(i){if(!Br)return;tc=(tc+i/m2)%1;const t=tc*4,e=Math.floor(t)%4,n=(e+1)%4,s=t-Math.floor(t),o=.5-.5*Math.cos(s*Math.PI),r=A0[e],a=A0[n];ze=o<.5?r.label:a.label;const u=(l,c)=>l+(c-l)*o;if(is.copy(r.sky).lerp(a.sky,o),Br.background.copy(is),is.copy(r.fog).lerp(a.fog,o),Br.fog.color.copy(is),Br.fog.density=u(r.fogDensity,a.fogDensity),Gr){is.copy(r.moonCol).lerp(a.moonCol,o),Gr.color.copy(is),Gr.intensity=u(r.moonInt,a.moonInt);const l=tc*Math.PI*2,c=u(r.moonElev,a.moonElev)*Math.PI/180,h=60;Gr.position.set(Math.cos(l)*Math.cos(c)*h,Math.sin(c)*h,Math.sin(l)*Math.cos(c)*h)}if(Gh){const l=u(r.moonInt,a.moonInt)/.85;Gh.intensity=.3*l}kr&&(is.copy(r.ambSky).lerp(a.ambSky,o),R0.copy(r.ambGnd).lerp(a.ambGnd,o),kr.color.copy(is),kr.groundColor.copy(R0),kr.intensity=u(r.ambInt,a.ambInt)),vc&&(vc.distance=u(r.plRange,a.plRange),vc.intensity=u(r.plInt,a.plInt)),E0=u(r.stars,a.stars),Pw(E0),ee=u(r.bio,a.bio)}let Vs=0,Fo=0,Zi=0,jo="CLEAR",ji=!1,_i=0;const Mc={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},v2={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}};let Io="CLEAR",Eo=null,_c=0,ec=0,eu=0,nc=!1,ic=0,nu=Math.random()*Math.PI*2,iu=0,su=0;const kh=[],M2=8;let C0=!1,ou=0,sc=1,yc=0,oc=0,ru=0;function _2(){const i=v2[Io],t=Object.entries(i);let e=0;for(const[,s]of t)e+=s;let n=Math.random()*e;for(const[s,o]of t)if(n-=o,n<=0)return s;return t[0][0]}function y2(){if(C0)return;const i=document.createElement("canvas");i.width=128,i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(64,32,0,64,32,64);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.3,"rgba(255,255,255,0.25)"),e.addColorStop(.7,"rgba(255,255,255,0.06)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,64);const n=new ca(i),s=new oe(40,14);for(let o=0;o<M2;o++){const r=new Z({map:n,color:5596791,transparent:!0,opacity:0,side:Ct,depthWrite:!1}),a=new C(s,r);a.visible=!1,at.add(a),kh.push({mesh:a,mat:r,active:!1,drift:Math.random()*Math.PI*2,speed:.3+Math.random()*.4,baseY:.8+Math.random()*2,wobble:Math.random()*Math.PI*2})}C0=!0}function w2(){y2();const i=Mc.CLEAR.duration;_c=i[0]+Math.random()*(i[1]-i[0])}function S2(i,t,e){if(nc)if(ec-=i,ec<=0){Io=Eo,Eo=null,nc=!1;const o=Mc[Io].duration;_c=o[0]+Math.random()*(o[1]-o[0]),ic=0}else ic=1-ec/eu;else _c-=i,_c<=0&&(Eo=_2(),nc=!0,eu=30+Math.random()*60,ec=eu,ic=0);const n=Mc[Io];if(nc&&Eo){const o=Mc[Eo],r=.5-.5*Math.cos(ic*Math.PI),a=(u,l)=>u+(l-u)*r;sc=a(n.fogMult,o.fogMult),yc=a(n.rainRate,o.rainRate),oc=a(n.skyDarken,o.skyDarken),ru=a(n.mistCount,o.mistCount),Zi=a(n.windBase,o.windBase),jo=r<.5?Io:Eo}else sc=n.fogMult,yc=n.rainRate,oc=n.skyDarken,ru=n.mistCount,Zi=n.windBase,jo=Io;ji=jo==="LUMINOUS_STORM",nu+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*i,iu-=i,iu<=0&&(iu=2+Math.random()*6,su=Math.random()*.8),su*=Math.pow(.3,i);const s=Zi+su;if(Vs=Math.cos(nu)*s,Fo=Math.sin(nu)*s,at.fog.density*=sc,oc>.001){const o=at.background,r=1-oc;o.r*=r,o.g*=r,o.b*=r}if(e){const o=Math.round(ru);for(let r=0;r<kh.length;r++){const a=kh[r];if(r<o){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Math.random()*Math.PI*2);const u=10+Math.sin(t*.3+a.wobble)*8,l=a.drift+t*a.speed*.05;a.mesh.position.set(e.x+Math.cos(l)*u,a.baseY+Math.sin(t*.4+a.wobble)*.5,e.z+Math.sin(l)*u),a.mesh.rotation.y=l+Math.PI/2,a.drift+=Vs*i*.02;const c=.03+sc*.012;a.mat.opacity+=(c-a.mat.opacity)*i*2}else a.active&&(a.mat.opacity-=i*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return ji&&(ou-=i,ou<=0&&(ou=1+Math.random()*4,_i=1)),_i*=Math.pow(.02,i),_i<.01&&(_i=0),yc}function Yr(){return yc}const di=300,Ir=new Float32Array(di),Lr=new Float32Array(di),Dr=new Float32Array(di),au=new Float32Array(di),cu=new Float32Array(di),lu=new Float32Array(di),Fs=new Float32Array(di),Bn=new Float32Array(di*6);let Ws=null,Hh=null;function b2(){const i=new be;i.setAttribute("position",new Fe(Bn,3)),Hh=new Mf({color:8952251,transparent:!0,opacity:.3,depthWrite:!1}),Ws=new ux(i,Hh),Ws.frustumCulled=!1,Ws.visible=!1,at.add(Ws);for(let t=0;t<di;t++)Fs[t]=0,gm(t)}function gm(i){const t=i*6;Bn[t]=0,Bn[t+1]=-100,Bn[t+2]=0,Bn[t+3]=0,Bn[t+4]=-100,Bn[t+5]=0}function T2(i,t,e,n,s){if(!Ws)return;const o=e>.01;if(Ws.visible=o,!o)return;Hh.opacity=Math.min(.15+e*.35,.5);const r=Math.floor(e*12*i*60);for(let u=0;u<r;u++){let l=-1;for(let f=0;f<di;f++)if(Fs[f]<=0){l=f;break}if(l===-1)break;const c=Math.random()*Math.PI*2,h=Math.random()*30;Ir[l]=t.x+Math.cos(c)*h,Lr[l]=12+Math.random()*10,Dr[l]=t.z+Math.sin(c)*h,au[l]=n*2+(Math.random()-.5)*.3,cu[l]=-12-Math.random()*8,lu[l]=s*2+(Math.random()-.5)*.3,Fs[l]=2+Math.random()*1.5}const a=.06;for(let u=0;u<di;u++){if(Fs[u]<=0)continue;if(Fs[u]-=i,Fs[u]<=0||Lr[u]<Bt(Ir[u],Dr[u])+.1){Fs[u]=0,gm(u);continue}Ir[u]+=au[u]*i,Lr[u]+=cu[u]*i,Dr[u]+=lu[u]*i;const l=u*6;Bn[l]=Ir[u],Bn[l+1]=Lr[u],Bn[l+2]=Dr[u],Bn[l+3]=Ir[u]+au[u]*a,Bn[l+4]=Lr[u]+cu[u]*a,Bn[l+5]=Dr[u]+lu[u]*a}Ws.geometry.attributes.position.needsUpdate=!0}let Y=null,Se=null,Vh=null,cn=!1,qn=!1,Zc=null,uu=null,Zr=null,E2=null,xm=null,A2=null,R2=null,vm=null,C2=null,Mm=null,_m=null,P2=null,ym=null,wm=null,hu=0,I2=null,Sm=null,L2=null;const Gi={jelly:0,puff:0,deer:0,moth:0};function fu(i,t){const e=Y.sampleRate*t,n=Y.createBuffer(1,e,Y.sampleRate),s=n.getChannelData(0);if(i==="white")for(let r=0;r<e;r++)s[r]=Math.random()*2-1;else if(i==="brown"){let r=0;for(let a=0;a<e;a++){const u=Math.random()*2-1;s[a]=(r+.02*u)/1.02,r=s[a],s[a]*=1.8}}const o=Math.min(Math.floor(Y.sampleRate*.5),e>>2);for(let r=0;r<o;r++){const a=r/o,u=e-o+r;s[u]=s[u]*(1-a)+s[r]*a}return n}function Ur(i,t,e,n){const s=Y.createBufferSource();s.buffer=i,s.loop=!0;const o=Y.createGain();o.gain.value=t;const r=Y.createBiquadFilter();r.type="lowpass",r.frequency.value=e,r.Q.value=.5;const a=Y.createBiquadFilter();return a.type="highpass",a.frequency.value=n||40,a.Q.value=.5,s.connect(a).connect(r).connect(o).connect(Se),s.start(),{node:s,gain:o,filter:r}}function D2(){const i=Y.createDelay(1);i.delayTime.value=.55;const t=Y.createDelay(1);t.delayTime.value=.79;const e=Y.createGain();e.gain.value=.35;const n=Y.createGain();n.gain.value=.28;const s=Y.createBiquadFilter();s.type="lowpass",s.frequency.value=2200;const o=Y.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;const r=Y.createBiquadFilter();r.type="highpass",r.frequency.value=120,r.Q.value=.5;const a=Y.createBiquadFilter();a.type="highpass",a.frequency.value=120,a.Q.value=.5;const u=Y.createGain();u.gain.value=.5,i.connect(s).connect(r).connect(e).connect(i),t.connect(o).connect(a).connect(n).connect(t),i.connect(u),t.connect(u),u.connect(Se);const l=Y.createGain();l.gain.value=1,l.connect(i),l.connect(t),Vh=l}function In(i,t,e){if(i.connect(t),Vh&&e>0){const n=Y.createGain();n.gain.value=e,i.connect(n).connect(Vh)}}function U2(){const i=()=>{if(!cn){try{Y=new(window.AudioContext||window.webkitAudioContext),Se=Y.createGain(),Se.gain.value=.42,Se.connect(Y.destination),Zc=fu("brown",16),uu=fu("brown",11),Zr=fu("white",9),D2();const t=Ur(Zc,.05,200,50);E2=t.node,xm=t.gain,A2=t.filter;const e=Ur(uu,.03,350,80);R2=e.node,vm=e.gain;const n=Ur(Zr,0,400,60);C2=n.node,Mm=n.gain,_m=n.filter;const s=Ur(Zr,0,2e3,80);P2=s.node,ym=s.gain,wm=s.filter;const o=Ur(uu,0,600,60);I2=o.node,Sm=o.gain,L2=o.filter,cn=!0}catch(t){console.warn("Audio init failed:",t)}document.removeEventListener("click",i),document.removeEventListener("keydown",i),document.removeEventListener("touchstart",i)}};document.addEventListener("click",i),document.addEventListener("keydown",i),document.addEventListener("touchstart",i)}function N2(i,t,e,n,s,o,r,a){if(!cn||qn)return;const u=Y.currentTime,l=o==="DEEP_NIGHT"?.07:o==="DAWN"?.03:.05;xm.gain.linearRampToValueAtTime(l,u+.1),vm.gain.linearRampToValueAtTime(l*.6,u+.1);const c=Math.min(t*.12,.18),h=200+t*600;Mm.gain.linearRampToValueAtTime(c,u+.1),_m.frequency.linearRampToValueAtTime(h,u+.1);const f=e*.15,p=1200+e*2e3;ym.gain.linearRampToValueAtTime(f,u+.1),wm.frequency.linearRampToValueAtTime(p,u+.1),s>.5&&hu<=0&&(z2(),hu=2+Math.random()*3),hu-=i;let m=1/0;if(r&&a)for(let g=0;g<a.length;g++){const S=a[g].x-r.x,_=a[g].z-r.z,w=S*S+_*_;w<m&&(m=w)}const d=(m<225?1-Math.sqrt(m)/15:0)*.08;Sm.gain.linearRampToValueAtTime(d,u+.1),Gi.jelly-=i,Gi.puff-=i,Gi.deer-=i,Gi.moth-=i}function z2(){if(!Y)return;const i=Y.currentTime,t=Y.createOscillator(),e=Y.createGain(),n=Y.createBiquadFilter();t.type="sawtooth",t.frequency.value=50+Math.random()*25,n.type="lowpass",n.frequency.value=120,n.Q.value=1,e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(.001,i+.8+Math.random()*.5),t.connect(n).connect(e).connect(Se),t.start(),t.stop(i+1.5);const s=Y.createBufferSource();s.buffer=Zc;const o=Y.createGain(),r=Y.createBiquadFilter();r.type="lowpass",r.frequency.value=120;const a=Y.createBiquadFilter();a.type="highpass",a.frequency.value=45,a.Q.value=.5,o.gain.setValueAtTime(.15,i),o.gain.exponentialRampToValueAtTime(.001,i+1.2),s.connect(a).connect(r).connect(o).connect(Se),s.start(),s.stop(i+1.5)}function Js(i,t,e){if(!cn||qn||Gi[i]>0)return;const n=t.x-e.x,s=t.z-e.z,o=n*n+s*s;if(o>900)return;const r=Math.sqrt(o),a=Math.max(0,1-r/30)*.1,u=Math.max(-1,Math.min(1,n/Math.max(r,1))),l=Y.createStereoPanner();l.pan.value=u;const c=Y.currentTime;switch(i){case"jelly":{const h=360+Math.random()*60,f=Y.createOscillator(),p=Y.createOscillator();f.type="sine",p.type="sine",f.frequency.setValueAtTime(h,c),p.frequency.setValueAtTime(h+3,c),f.frequency.linearRampToValueAtTime(h-40,c+1.2),p.frequency.linearRampToValueAtTime(h-37,c+1.2);const m=Y.createOscillator(),x=Y.createGain();m.frequency.value=4,x.gain.value=5,m.connect(x),x.connect(f.frequency),x.connect(p.frequency);const d=Y.createGain();d.gain.setValueAtTime(0,c),d.gain.linearRampToValueAtTime(a,c+.15),d.gain.setValueAtTime(a,c+.6),d.gain.exponentialRampToValueAtTime(.001,c+1.4),f.connect(d),p.connect(d),d.connect(l),In(l,Se,.4),m.start(c),f.start(c),p.start(c),m.stop(c+1.5),f.stop(c+1.5),p.stop(c+1.5),Gi.jelly=4+Math.random()*5;break}case"puff":{const h=500+Math.random()*100,f=[h,h*1.2,h*1.5];for(let p=0;p<f.length;p++){const m=Y.createOscillator();m.type="sine",m.frequency.value=f[p];const x=Y.createGain(),d=c+p*.07;x.gain.setValueAtTime(0,d),x.gain.linearRampToValueAtTime(a*.5,d+.02),x.gain.exponentialRampToValueAtTime(.001,d+.15),m.connect(x).connect(l),m.start(d),m.stop(d+.18)}In(l,Se,.3),Gi.puff=8+Math.random()*10;break}case"deer":{const h=100+Math.random()*30,f=Y.createOscillator(),p=Y.createOscillator();f.type="triangle",p.type="triangle",f.frequency.setValueAtTime(h,c),p.frequency.setValueAtTime(h+2,c),f.frequency.linearRampToValueAtTime(h-15,c+.5),p.frequency.linearRampToValueAtTime(h-13,c+.5);const m=Y.createBiquadFilter();m.type="lowpass",m.frequency.value=250,m.Q.value=.5;const x=Y.createGain();x.gain.setValueAtTime(0,c),x.gain.linearRampToValueAtTime(a*.7,c+.12),x.gain.setValueAtTime(a*.7,c+.3),x.gain.exponentialRampToValueAtTime(.001,c+.6),f.connect(m),p.connect(m),m.connect(x).connect(l),In(l,Se,.3),f.start(c),p.start(c),f.stop(c+.7),p.stop(c+.7),Gi.deer=5+Math.random()*6;break}case"moth":{const h=Y.createOscillator();h.type="sine",h.frequency.setValueAtTime(200+Math.random()*80,c);const f=Y.createOscillator(),p=Y.createGain();f.frequency.value=8+Math.random()*4,p.gain.value=12,f.connect(p).connect(h.frequency);const m=Y.createGain();m.gain.setValueAtTime(0,c),m.gain.linearRampToValueAtTime(a*.2,c+.05),m.gain.exponentialRampToValueAtTime(.001,c+.25),h.connect(m).connect(l),In(l,Se,.2),f.start(c),h.start(c),f.stop(c+.3),h.stop(c+.3),Gi.moth=4+Math.random()*5;break}}}let $c=0;function F2(i,t){if(!cn||qn||$c>0)return;const e=Y.currentTime;if(t){const n=Y.createBufferSource();n.buffer=Zr;const s=Y.createGain(),o=Y.createBiquadFilter();o.type="bandpass",o.frequency.value=2e3,o.Q.value=.5,s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),n.connect(o).connect(s).connect(Se),n.start(),n.stop(e+.15)}else{const n=Y.createOscillator();n.type="sine",n.frequency.value=80+Math.random()*40;const s=Y.createGain();s.gain.setValueAtTime(.03,e),s.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(s).connect(Se),n.start(),n.stop(e+.1)}$c=i?.22:.35}function O2(){if(!cn||qn)return;const i=Y.currentTime,t=Y.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,i),t.frequency.exponentialRampToValueAtTime(300,i+.1);const e=Y.createGain();e.gain.setValueAtTime(.03,i),e.gain.exponentialRampToValueAtTime(.001,i+.15),t.connect(e).connect(Se),t.start(),t.stop(i+.2)}function B2(i){if(!cn||qn)return;const t=Y.currentTime,e=Y.createBufferSource();e.buffer=Zc;const n=Y.createGain(),s=Y.createBiquadFilter();s.type="lowpass",s.frequency.value=200;const o=Y.createBiquadFilter();o.type="highpass",o.frequency.value=50,o.Q.value=.5,n.gain.setValueAtTime(i*.05,t),n.gain.exponentialRampToValueAtTime(.001,t+.2),e.connect(o).connect(s).connect(n).connect(Se),e.start(),e.stop(t+.25)}function G2(i){$c>0&&($c-=i)}function k2(i,t){if(!cn||qn)return;const e=i.x-t.x,n=i.z-t.z,s=e*e+n*n;if(s>400)return;const o=Math.max(0,1-Math.sqrt(s)/20)*.06,r=Y.currentTime,a=Y.createOscillator();a.type="sine",a.frequency.setValueAtTime(600+Math.random()*300,r),a.frequency.exponentialRampToValueAtTime(200,r+.1);const u=Y.createGain();u.gain.setValueAtTime(o,r),u.gain.exponentialRampToValueAtTime(.001,r+.12),a.connect(u).connect(Se),a.start(),a.stop(r+.15)}function H2(){if(!cn||qn)return;const i=Y.currentTime,t=[440,554,659,880];for(let e=0;e<t.length;e++){const n=Y.createOscillator();n.type="sine",n.frequency.setValueAtTime(t[e],i+e*.12);const s=Y.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.05,i+e*.12+.05),s.gain.exponentialRampToValueAtTime(.001,i+e*.12+.7),n.connect(s),In(s,Se,.5),n.start(i+e*.12),n.stop(i+e*.12+.8)}}function V2(){if(!cn||qn)return;const i=Y.currentTime,t=Y.createOscillator();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(1200,i+3);const e=Y.createOscillator(),n=Y.createGain();e.frequency.setValueAtTime(6,i),e.frequency.linearRampToValueAtTime(12,i+3),n.gain.value=20,e.connect(n).connect(t.frequency);const s=Y.createOscillator();s.type="sine",s.frequency.setValueAtTime(600,i),s.frequency.exponentialRampToValueAtTime(2400,i+3);const o=Y.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.04,i+.2),o.gain.setValueAtTime(.04,i+2),o.gain.exponentialRampToValueAtTime(.001,i+3.5),t.connect(o),s.connect(o),In(o,Se,.6),e.start(i),t.start(i),s.start(i),e.stop(i+4),t.stop(i+4),s.stop(i+4)}function W2(){if(!cn||qn)return;const i=Y.currentTime,t=Y.createBufferSource();t.buffer=Zr;const e=Y.createBiquadFilter();e.type="bandpass",e.frequency.setValueAtTime(3e3,i),e.frequency.exponentialRampToValueAtTime(500,i+.3),e.Q.value=2;const n=Y.createGain();n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.3),t.connect(e).connect(n).connect(Se);const s=Y.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(2e3,i),s.frequency.exponentialRampToValueAtTime(100,i+.15);const o=Y.createBiquadFilter();o.type="lowpass",o.frequency.value=4e3;const r=Y.createGain();r.gain.setValueAtTime(.06,i),r.gain.exponentialRampToValueAtTime(.001,i+.2),s.connect(o).connect(r),In(r,Se,.3);const a=Y.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,i+.15),a.frequency.linearRampToValueAtTime(55,i+2);const u=Y.createBiquadFilter();u.type="bandpass",u.frequency.value=180,u.Q.value=3;const l=Y.createGain();l.gain.setValueAtTime(0,i),l.gain.linearRampToValueAtTime(.03,i+.2),l.gain.exponentialRampToValueAtTime(.001,i+2),a.connect(u).connect(l).connect(Se),t.start(i),t.stop(i+.4),s.start(i),s.stop(i+.25),a.start(i+.1),a.stop(i+2.2)}const Jo=[];function X2(i,t){if(!cn||qn)return;const e=Y.currentTime,n=Y.createOscillator();n.type="sawtooth",n.frequency.value=55+Math.random()*10;const s=Y.createOscillator(),o=Y.createGain();s.type="square",s.frequency.value=120+Math.random()*60,o.gain.value=15,s.connect(o).connect(n.frequency);const r=Y.createBiquadFilter();r.type="bandpass",r.frequency.value=200,r.Q.value=3;const a=Y.createGain();a.gain.value=0;const u=Y.createStereoPanner();n.connect(r).connect(a).connect(u).connect(Se),s.start(e),n.start(e),Jo.push({osc:n,mod:s,gain:a,panner:u,filter:r,x:i,z:t})}function q2(i){if(!cn||!Y)return;const t=Y.currentTime;for(let e=0;e<Jo.length;e++){const n=Jo[e],s=n.x-i.x,o=n.z-i.z,r=s*s+o*o,a=Math.sqrt(r),u=r<625?Math.max(0,1-a/25)*.04:0;n.gain.gain.linearRampToValueAtTime(u,t+.1);const l=Math.max(-1,Math.min(1,s/Math.max(a,1)));n.panner.pan.linearRampToValueAtTime(l,t+.1),n.filter.frequency.value=180+Math.sin(t*.5+e)*40}}function Y2(){if(!Y)return;const i=Y.currentTime;for(let t=0;t<Jo.length;t++){const e=Jo[t];e.gain.gain.linearRampToValueAtTime(0,i+.5),e.osc.stop(i+.6),e.mod.stop(i+.6)}Jo.length=0}function Z2(){if(!cn||qn)return;const i=Y.currentTime,t=Y.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(900,i+.15);const e=Y.createGain();e.gain.setValueAtTime(.06,i),e.gain.exponentialRampToValueAtTime(.001,i+.5),t.connect(e),In(e,Se,.4),t.start(),t.stop(i+.6)}let bm=null,Tm=null,Em=null,du=0,P0=0,rc=0,pu=0,I0=1,Wh=!1;function $2(){if(Wh||!Y)return;Wh=!0;const i=Y.createGain();i.gain.value=0;const t=Y.createOscillator();t.type="sine",t.frequency.value=160;const e=Y.createOscillator();e.type="sine",e.frequency.value=190;const n=Y.createBiquadFilter();n.type="lowpass",n.frequency.value=350,n.Q.value=.5,t.connect(n).connect(i),e.connect(n),i.connect(Se),t.start(),e.start(),bm=t,Tm=e,Em=i}function j2(i){if(!Y||i<.001)return;const t=Y.currentTime,e=1800+Math.random()*800,n=Y.createOscillator();n.type="sine",n.frequency.value=e,n.frequency.exponentialRampToValueAtTime(e*.88,t+.1);const s=Y.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i*.5,t+.01),s.gain.exponentialRampToValueAtTime(.001,t+.1),n.connect(s).connect(Se),n.start(t),n.stop(t+.12)}function J2(i,t,e,n,s,o){if(!cn||qn||($2(),!Wh))return;const r=Y.currentTime,a=s==="DEEP_NIGHT"||s==="NIGHT"?1:s==="DUSK"?.5:.3;I0=s==="DUSK"||s==="NIGHT"?1:s==="DEEP_NIGHT"?.6:.3;const u=Math.max(.15,1-o*.7);let l=1/0;if(t&&e)for(let x=0;x<e.length;x++){const d=e[x].x-t.x,g=e[x].z-t.z,S=d*d+g*g;S<l&&(l=S)}const c=l<400?1-Math.sqrt(l)/20:0;P0+=i*2;const h=.7+.3*Math.sin(P0*Math.PI*2),f=c*.025*a*u*h;if(Em.gain.linearRampToValueAtTime(f,r+.15),du+=i,du>3+Math.random()*4){du=0;const x=150+Math.random()*40;bm.frequency.linearRampToValueAtTime(x,r+.5),Tm.frequency.linearRampToValueAtTime(x+20+Math.random()*15,r+.5)}let p=1/0;if(t&&n)for(let x=0;x<n.length;x++){const d=n[x].cx-t.x,g=n[x].cz-t.z,S=d*d+g*g;S<p&&(p=S)}const m=p<144?1-Math.sqrt(p)/12:0;if(pu=m*.02*I0*u,pu>.001){if(rc-=i,rc<=0){j2(pu);const x=1.5+(1-m)*1.5;rc=x+Math.random()*x}}else rc=0}const Am=[0,2,4,7,9],K2=[0,2,3,5,7,9,10],Q2=220;let ur=!1,Xn=null,wc=0,Sc=0,bc=0,Xh=Am,oa=0,ac=0,L0=0,jc="",ss=null,os=null,As=null,Ni=null,rs=null,mu=null,rl=0;function tb(){ur||!Y||(ur=!0,Xn=Y.createGain(),Xn.gain.value=.004,Xn.connect(Se),wc=1.5,Sc=3,bc=0,ib())}function hr(i,t){const e=Xh.length,n=Math.floor(i/e)+(t||0),s=(i%e+e)%e,o=Xh[s];return Q2*Math.pow(2,n+o/12)}function eb(){if(!Y||!Xn)return;const i=Y.currentTime,t=Math.random()<.6?0:Math.random()<.5?4:3,e=hr(t,-1);rl=t,As&&(As.gain.linearRampToValueAtTime(.001,i+3),ss&&ss.stop(i+3.2),os&&os.stop(i+3.2),rs&&rs.stop(i+3.2)),ss=Y.createOscillator(),os=Y.createOscillator(),ss.type="sine",os.type="sine",ss.frequency.value=e,os.frequency.value=e*1.002,As=Y.createGain(),As.gain.setValueAtTime(0,i),As.gain.linearRampToValueAtTime(.07,i+4),Ni=Y.createBiquadFilter(),Ni.type="lowpass",Ni.frequency.value=550,Ni.Q.value=.5,rs=Y.createOscillator(),mu=Y.createGain(),rs.type="sine",rs.frequency.value=.04+Math.random()*.04,mu.gain.value=60,rs.connect(mu).connect(Ni.frequency);const n=Y.createOscillator();n.type="sine",n.frequency.value=e*1.5;const s=Y.createGain();s.gain.value=.04,n.connect(s).connect(Ni),ss.connect(Ni),os.connect(Ni),Ni.connect(As),In(As,Xn,.7),ss.start(i+.5),os.start(i+.5),n.start(i+1),rs.start(i),ss.stop(i+35),os.stop(i+35),n.stop(i+35),rs.stop(i+35)}function Bf(i,t,e){if(!Y)return;const n=Y.currentTime+(e||0),s=Y.createOscillator();s.type="triangle",s.frequency.value=i;const o=Y.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(t,n+.04),o.gain.exponentialRampToValueAtTime(t*.5,n+.5),o.gain.exponentialRampToValueAtTime(.001,n+4);const r=Y.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(i*3,n),r.frequency.exponentialRampToValueAtTime(i*1.2,n+2.5),r.Q.value=.7,s.connect(r).connect(o),In(o,Xn,.75),s.start(n),s.stop(n+5)}function nb(i,t,e,n){if(!Y)return;const s=Y.currentTime+(n||0),o=e||3,r=Y.createOscillator();r.type="sine",r.frequency.value=i;const a=Math.min(o,5),u=Y.createBuffer(1,Y.sampleRate*a,Y.sampleRate),l=u.getChannelData(0);for(let d=0;d<l.length;d++)l[d]=(Math.random()*2-1)*.03;const c=Y.createBufferSource();c.buffer=u;const h=Y.createBiquadFilter();h.type="bandpass",h.frequency.value=i*2,h.Q.value=2;const f=Y.createGain();f.gain.setValueAtTime(0,s),f.gain.linearRampToValueAtTime(t*.12,s+.5),f.gain.linearRampToValueAtTime(0,s+o),c.connect(h).connect(f).connect(Xn);const p=Y.createGain();p.gain.setValueAtTime(0,s),p.gain.linearRampToValueAtTime(t,s+.5),p.gain.setValueAtTime(t,s+Math.max(o-1,.6)),p.gain.exponentialRampToValueAtTime(.001,s+o);const m=Y.createOscillator(),x=Y.createGain();m.frequency.value=3+Math.random()*1.5,x.gain.value=i*.008,m.connect(x).connect(r.frequency),r.connect(p),In(p,Xn,.7),m.start(s),r.start(s),c.start(s),m.stop(s+o+.1),r.stop(s+o+.1),c.stop(s+o+.1)}function Rm(i,t,e){if(!Y)return;const n=Y.currentTime+(e||0),s=Y.createOscillator(),o=Y.createOscillator();s.type="triangle",o.type="triangle",s.frequency.value=i,o.frequency.value=i*1.003;const r=Y.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t,n+.04),r.gain.exponentialRampToValueAtTime(t*.3,n+1),r.gain.exponentialRampToValueAtTime(.001,n+5);const a=Y.createBiquadFilter();a.type="peaking",a.frequency.value=i*.5,a.Q.value=1.5,a.gain.value=3,s.connect(a).connect(r),o.connect(a),In(r,Xn,.65),s.start(n),o.start(n),s.stop(n+6),o.stop(n+6)}let Tc=0,$r=0,qh=0,Yh=[];const D0=[3,7,6,5,4,3,5,7];function ib(){qh=2.2+Math.random()*.6,Tc=2,$r=0,Yh=[.2,.15,.12,.18,.1,.08,.15,.12]}function sb(i){if(!Y||!Xn)return;const t=Y.currentTime,e=D0[$r%D0.length],n=hr(rl+e,0),s=Y.createOscillator();s.type="triangle",s.frequency.value=n;const o=Y.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(i*.25,t+.04),o.gain.exponentialRampToValueAtTime(i*.06,t+.4),o.gain.exponentialRampToValueAtTime(.001,t+1.6);const r=Y.createBiquadFilter();r.type="highpass",r.frequency.value=300,r.Q.value=.5;const a=Y.createBiquadFilter();if(a.type="lowpass",a.frequency.value=n*2.5,a.Q.value=.5,s.connect(r).connect(a).connect(o),In(o,Xn,.75),s.start(t),s.stop(t+2),i>.3){const u=Y.createOscillator();u.type="sine",u.frequency.value=n*2;const l=Y.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(i*.06,t+.02),l.gain.exponentialRampToValueAtTime(.001,t+1),u.connect(l).connect(o),u.start(t),u.stop(t+1.2)}}function ob(i,t,e){if(!Y)return;const n=Y.currentTime+(e||0),s=Y.createOscillator();s.type="sine",s.frequency.value=i;const o=Y.createOscillator();o.type="sine",o.frequency.value=i*2.01;const r=Y.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(t*.25,n+.03),r.gain.exponentialRampToValueAtTime(t*.08,n+.8),r.gain.exponentialRampToValueAtTime(.001,n+5);const a=Y.createGain();a.gain.value=.12,s.connect(r),o.connect(a).connect(r),In(r,Xn,.85),s.start(n),o.start(n),s.stop(n+5.5),o.stop(n+5.5)}function rb(i,t,e){if(!Y)return;const n=[0,2,4,2],s=.24+Math.random()*.16;for(let o=0;o<n.length;o++){const r=hr(i+n[o],oa);Bf(r,t*(o===0?1:.7),(e||0)+o*s)}}function Cm(i){const t=Math.random();let e;return t<.25?e=i+1:t<.5?e=i-1:t<.65?e=i+2:t<.8?e=i-2:t<.9?e=0:e=rl,Math.max(-3,Math.min(10,e))}function ab(){if(!Y||!ur)return 2;const i=3+Math.floor(Math.random()*5),t=1+Math.random()*1.2,e=Math.random()<.4;let n;const s=Math.random();s<.4?n="harp":s<.7?n="flute":n="lute",n===jc&&Math.random()<.7&&(n=["harp","flute","lute"][Math.floor(Math.random()*3)]),jc=n;let o=L0+(Math.random()<.7?0:Math.random()<.5?1:-1);o=Math.max(-2,Math.min(8,o));const r=.25+Math.random()*.2;let a=0;for(let u=0;u<i;u++){const l=e?t*(u%2===0?1:.6):t;a=u===0?0:a+l+(Math.random()-.5)*.08;const c=hr(o,oa);if(n==="harp"&&Math.random()<.2&&u>0)rb(o,r*.7,a);else if(n==="harp")Bf(c,r,a);else if(n==="flute"){const h=l*1.5+.5;nb(c,r*.9,h,a)}else Rm(c,r*.7,a);u>=i-2&&Math.random()<.5?o=o>0?o-1:o+1:o=Cm(o)}return L0=o,a+1.5}function cb(){if(!Y||!ur)return 3;const i=1+Math.floor(Math.random()*3),t=jc==="harp"?Math.random()<.5?"lute":"shimmer":jc==="lute"?Math.random()<.5?"harp":"shimmer":Math.random()<.5?"lute":"shimmer",e=2+Math.random()*3,n=.15+Math.random()*.15;let s=rl;for(let o=0;o<i;o++){const r=o*e,a=hr(s,oa-1);t==="lute"?Rm(a,n*.6,r):t==="harp"?Bf(a,n,r):ob(hr(s,oa+1),n*.5,r),s=Cm(s)}return i*e+2}function lb(i,t,e,n){if(!cn||qn||(ur||tb(),!ur))return;const s=Y.currentTime;Xh=t==="DEEP_NIGHT"||t==="NIGHT"?K2:Am,oa=t==="DAY"?1:0;const o=t==="DEEP_NIGHT"?.004:t==="NIGHT"?.005:t==="DAWN"?.006:t==="DAY"?.003:.005,r=n?1.15:1;if(Xn.gain.linearRampToValueAtTime(o*r,s+2),ac=Math.min(1,(e||0)/5),bc-=i,bc<=0&&(eb(),bc=18+Math.random()*12),wc-=i,wc<=0){const a=ab(),u=ac>.3?3:6,l=ac>.3?6:10;wc=a+u+Math.random()*l}if(Sc-=i,Sc<=0){const a=cb(),u=ac>.3?6:12;Sc=a+u+Math.random()*8}if(Tc-=i,Tc<=0){const a=Yh[$r%Yh.length],u=qh*(.95+Math.random()*.1);sb(a),$r++,Tc=u,$r%16===0&&(qh=2.2+Math.random()*.6)}}function ub(i,t,e,n,s){const o=e.x-i.x,r=e.z-i.z,a=o*o+r*r;if(a>n*n)return!1;if(a<.01)return!0;let l=Math.atan2(r,o)-t;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;return Math.abs(l)<s*.5}function hb(i,t,e,n){const s=t.x-i.x,o=t.z-i.z,r=n?e*1.8:e;return s*s+o*o<r*r}function Pm(i,t,e){let n=0,s=0,o=0;for(let r=0;r<t.length;r++){const a=t[r],u=i.x-a.x,l=i.z-a.z,c=u*u+l*l;if(c>.01&&c<e*e){const h=Math.sqrt(c);n+=u/h/h,s+=l/h/h,o++}}return o>0&&(n/=o,s/=o),{x:n,z:s}}function Im(i,t){if(t.length===0)return{x:0,z:0};let e=0,n=0;for(let s=0;s<t.length;s++)e+=t[s].x,n+=t[s].z;return e/=t.length,n/=t.length,{x:e-i.x,z:n-i.z}}function fb(i,t){const e=Math.sqrt(i.x*i.x+i.z*i.z),n=Jt-t;if(e<n)return{x:0,z:0};const s=(e-n)/t,o=Math.min(s*2,3);return{x:-i.x/e*o,z:-i.z/e*o}}function db(i,t,e,n,s){let o=0,r=0;const a=Math.cos(t)*n,u=Math.sin(t)*n,l=i.x+a,c=i.z+u;for(let h=0;h<e.length;h++){const f=e[h],p=l-f.x,m=c-f.z,x=p*p+m*m,d=(f.colR||s)+1;if(x<d*d&&x>.01){const g=Math.sqrt(x),S=(d-g)/d*2;o+=p/g*S,r+=m/g*S}}return{x:o,z:r}}const Oi={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},pb={deer:"Spirit Deer",puffling:"Puffling",jelly:"Luminous Jelly",moth:"Moon Moth",fairyRing:"Fairy Ring",crystalChain:"Crystal Resonance",pond:"Moonlit Pond"};let Hi=null,Ec=0,U0="";function mb(){Hi=document.createElement("div"),Hi.id="discovery-text",Hi.style.cssText="position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;",document.body.appendChild(Hi)}function Rs(i){Oi[i]||(Oi[i]=!0,U0=pb[i],Ec=3,Hi&&(Hi.textContent=U0,Hi.style.opacity="1"))}function gb(i,t,e,n,s,o,r,a){const u=i.x,l=i.z;if(!Oi.deer)for(let c=0;c<t.length;c++){const h=t[c].group.position.x-u,f=t[c].group.position.z-l;if(h*h+f*f<144){Rs("deer");break}}if(!Oi.puffling)for(let c=0;c<e.length;c++){const h=e[c].group.position.x-u,f=e[c].group.position.z-l;if(h*h+f*f<64){Rs("puffling");break}}if(!Oi.jelly)for(let c=0;c<n.length;c++){const h=n[c].group.position.x-u,f=n[c].group.position.z-l;if(h*h+f*f<100){Rs("jelly");break}}if(!Oi.moth)for(let c=0;c<s.length;c++){const h=s[c].group.position.x-u,f=s[c].group.position.z-l;if(h*h+f*f<64){Rs("moth");break}}if(!Oi.fairyRing)for(let c=0;c<o.length;c++){const h=o[c].x-u,f=o[c].z-l;if(h*h+f*f<16){Rs("fairyRing");break}}if(!Oi.pond)for(let c=0;c<r.length;c++){const h=r[c].x-u,f=r[c].z-l;if(h*h+f*f<25){Rs("pond");break}}!Oi.crystalChain&&a>=3&&Rs("crystalChain")}function xb(i){Ec>0&&(Ec-=i,Ec<=.6&&Hi&&(Hi.style.opacity="0"))}let Zh=null,gu=60;const vb={DUSK:"Dusk",NIGHT:"Night",DEEP_NIGHT:"Deep Night",DAWN:"Dawn"},Mb={CLEAR:"Clear",MISTY:"Misty",LIGHT_RAIN:"Light Rain",HEAVY_RAIN:"Heavy Rain",FOG_BANK:"Fog",LUMINOUS_STORM:"Storm"};function _b(){Zh=document.getElementById("hud")}function yb(i,t){if(!Zh)return;gu=gu*.95+1/Math.max(i,.001)*.05;const e=Je==="SEEK"?"Seek the orbs...":Je==="RISING"?"The obelisk stirs...":Je==="COMPLETE"?"Convergence!":"Luminaries",n=vb[ze]||"Night",s=Mb[jo]||"Clear";Zh.innerHTML="<b>"+e+"</b> · "+n+" · "+s+" · FPS:"+Math.round(gu)+"<br>Pos:"+t.x.toFixed(0)+","+t.z.toFixed(0)}let Jc=null;function wb(){Jc=document.getElementById("orb-hud")}function Sb(){return Jc}function bb(){const i=document.getElementById("overlay");i&&(i.style.opacity="0",setTimeout(()=>{try{i.remove()}catch{}},2500)),Jc&&(Jc.style.display="block")}const jt=[];let Oo=[];const Ac=[],Ln=[],le=[],ui=[],Fn=[],Ze=[],fr=[],Lm=[],ra=[],Ti=[],$h=[],Xs=[],Kc=[],jr=[],Hn=[],yi=[],Ne=[],Vn=[],jh=[],Jh=[],Dm=[],Kh=[],Qh=[],tf=[],ef=[],nf=[],sf=[],as=[];let N0=0,z0=0,xu=0,Qn=null,vi=0;const of=15,rf=[];let F0=!1;function Tb(){if(F0)return;F0=!0;const i=new Mf({color:U.crystal,transparent:!0,opacity:0,blending:Qt,depthWrite:!1});for(let t=0;t<of;t++){const e=new be,n=new Float32Array(6);e.setAttribute("position",new Fe(n,3)),e.attributes.position.setUsage(ye);const s=new fp(e,i.clone());s.visible=!1,at.add(s),rf.push({line:s,geo:e,opacity:0,active:!1})}}let Cs=null;function Eb(){if(Cs)return Cs;const i=new ar(.9,1,48),t=new Z({color:U.echoBloom,transparent:!0,opacity:.5,side:Ct,depthWrite:!1,blending:Qt});return Cs=new C(i,t),Cs.rotation.x=-Math.PI/2,Cs.visible=!1,at.add(Cs),Cs}const Ie=[];function Ve(i,t){for(let e=0;e<Ie.length;e++){const n=Ie[e].x-i,s=Ie[e].z-t;if(n*n+s*s<Ie[e].r2)return!0}return!1}function Ab(){const i=25+Math.floor(v()*15),t=[];for(let c=0;c<i;c++){const h=v()*6.28,f=8+v()*(Jt-15);t.push({x:Math.cos(h)*f,z:Math.sin(h)*f,r:6+v()*18,density:.5+v()*.5})}const e=5+Math.floor(v()*4),n=[];for(let c=0;c<e;c++){const h=v()*6.28,f=12+v()*(Jt*.65);n.push({x:Math.cos(h)*f,z:Math.sin(h)*f,r2:(10+v()*15)**2})}for(let c=0;c<r0;c++){let h,f,p=!1;for(let m=0;m<25;m++){if(v()<.2){const d=v()*6.28,g=5+v()*(Jt-10);h=Math.cos(d)*g,f=Math.sin(d)*g}else{const d=Math.floor(v()*i),g=t[d],S=g.r*(v()+v())*.5*g.density,_=v()*6.28;h=g.x+Math.cos(_)*S,f=g.z+Math.sin(_)*S}if(h*h+f*f>(Jt-5)*(Jt-5))continue;let x=!1;for(let d=0;d<n.length;d++){const g=n[d].x-h,S=n[d].z-f;if(g*g+S*S<n[d].r2){x=!0;break}}if(!x){p=!0;for(let d=0;d<jt.length;d++){const g=jt[d].x-h,S=jt[d].z-f;if(g*g+S*S<6.25){p=!1;break}}if(p)break}}if(p){const m=6+v()*10;v();const x=Bt(h,f),d=v()*Math.PI*2,g=.8+v()*.4,S=Gw(m,x);S.position.x=h,S.position.z=f,Ac.push(S),jt.push({x:h,z:f,y:x,treeH:m,yRot:d,scale:g}),Ie.push({x:h,z:f,r2:4})}}const s=Vw(10),o=Math.ceil(r0/10)+10;Oo=Ww(s,jt,o);for(let c=0;c<V1;c++){let h,f,p=!1;for(let m=0;m<20;m++){const x=v()*6.28,d=10+v()*(Jt*.6);if(h=Math.cos(x)*d,f=Math.sin(x)*d,p=!Ve(h,f),p)break}if(p){xh(h,f,4);const m=vS(h,f);m.group.position.y=Bt(h,f),Hn.push(m),Ie.push({x:h,z:f,r2:64})}}for(let c=0;c<q1;c++){let h,f,p=!1;for(let m=0;m<20;m++){const x=v()*6.28,d=8+v()*(Jt*.6);if(h=Math.cos(x)*d,f=Math.sin(x)*d,p=!Ve(h,f),p)break}if(p){xh(h,f,3);const m=_S(h,f);m.group.position.y=Bt(h,f),Ne.push(m),Ie.push({x:h,z:f,r2:49})}}const r=new Float32Array(jt.length);let a=0;for(let c=0;c<jt.length;c++){let h=0;for(let f=0;f<jt.length;f++){if(c===f)continue;const p=jt[c].x-jt[f].x,m=jt[c].z-jt[f].z;p*p+m*m<144&&h++}r[c]=Math.max(h,.2),a+=r[c]}function u(c,h){let f=0;for(let p=0;p<jt.length;p++){const m=c-jt[p].x,x=h-jt[p].z;m*m+x*x<100&&f++}return f}for(let c=0;c<I1;c++){let h=v()*a,f=0;for(let _=0;_<r.length;_++)if(h-=r[_],h<=0){f=_;break}const p=jt[f],m=v()*6.28,x=1+v()*4,d=p.x+Math.cos(m)*x,g=p.z+Math.sin(m)*x;if(Ve(d,g))continue;const S=qw(d,g);S.group.position.y=Bt(d,g),Ln.push(S),Ie.push({x:d,z:g,r2:1})}for(let c=0;c<L1;c++){const h=v()*6.28,f=8+v()*Jt*.6,p=Math.cos(h)*f,m=Math.sin(h)*f;if(Ve(p,m))continue;const x=Yw(p,m);x.group.position.y=Bt(p,m),le.push(x),Ie.push({x:p,z:m,r2:4})}for(let c=0;c<D1;c++){const h=v()*6.28,f=10+v()*Jt*.5,p=Math.cos(h)*f,m=Math.sin(h)*f;ui.push(dS(p,Bt(p,m)+3+v()*5,m))}for(let c=0;c<U1;c++){const h=Ln[Math.floor(v()*Ln.length)],f=v()*6.28,p=1+v()*5,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Ve(m,x))continue;const d=pS(m,x);d.group.position.y=Bt(m,x),d._baseY=Bt(m,x),Fn.push(d)}for(let c=0;c<N1;c++){const h=v()*6.28,f=12+v()*Jt*.5,p=Math.cos(h)*f,m=Math.sin(h)*f;if(Ve(p,m))continue;const x=mS(p,m),d=Bt(p,m);x.group.position.y=d,x._baseY=d,Ze.push(x)}for(let c=0;c<z1;c++){const h=jt[Math.floor(v()*jt.length)];fr.push(gS(h.x,Bt(h.x,h.z)+2+v()*4,h.z))}const l=[null,U.grassPurple,U.grassBlue,U.grassTeal];for(let c=0;c<F1;c++){const h=v()*6.28,f=2+v()*(Jt*.9),p=Math.cos(h)*f,m=Math.sin(h)*f,x=l[Math.floor(v()*l.length)],d=2+v()*2.5,g=25+Math.floor(v()*20);if(Ve(p,m))continue;const S=$w(p,m,d,g,x);S.mesh.position.y=Bt(p,m),Lm.push(S),Ie.push({x:p,z:m,r2:d*d})}for(let c=0;c<k1;c++){let h,f,p=!1;for(let m=0;m<10;m++){const x=v()*6.28,d=3+v()*(Jt*.85);if(h=Math.cos(x)*d,f=Math.sin(x)*d,p=!Ve(h,f),p)break}if(p){const m=wS(h,f);m.group.position.y=Bt(h,f)-.08,Xs.push(m),Ie.push({x:h,z:f,r2:2.25})}}for(let c=0;c<O1;c++){const h=jt[Math.floor(v()*jt.length)],f=v()*6.28,p=1+v()*5,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Ve(m,x))continue;const d=jw(m,x);d.group.position.y=Bt(m,x),ra.push(d),Ie.push({x:m,z:x,r2:1})}for(let c=0;c<B1;c++){const h=v()*6.28,f=3+v()*(Jt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Ve(p,m)||u(p,m)>1&&v()<.8)continue;const x=Jw(p,m);x.group.position.y=Bt(p,m),Ti.push(x),Ie.push({x:p,z:m,r2:1})}for(let c=0;c<G1;c++){const h=v()*6.28,f=4+v()*(Jt*.8),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Ve(p,m)||u(p,m)>1&&v()<.8)continue;const x=Kw(p,m);x.group.position.y=Bt(p,m),$h.push(x),Ie.push({x:p,z:m,r2:1})}for(let c=0;c<Ro;c++){let h,f,p=!1;for(let m=0;m<30;m++){const x=v()*6.28,d=20+v()*(Jt*.6);h=Math.cos(x)*d,f=Math.sin(x)*d,p=!0;for(let g=0;g<Vn.length;g++){const S=Vn[g].x-h,_=Vn[g].z-f;if(S*S+_*_<225){p=!1;break}}if(p)break}if(p){const m=yS(h,f);m.group.position.y=Bt(h,f)+1,m.flyY=Bt(h,f)+1,Vn.push(m)}}for(let c=0;c<Pp;c++){const h=v()*6.28,f=2+v()*3,p=Math.cos(h)*f,m=Math.sin(h)*f;Kc.push(xS(p,Bt(p,m)+1+v()*.5,m))}for(let c=0;c<H1;c++){const h=v()*6.28,f=4+v()*(Jt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Ve(p,m)||u(p,m)>1&&v()<.8)continue;const x=nS(p,m);x.group.position.y=Bt(p,m),jr.push(x),Ie.push({x:p,z:m,r2:1})}for(let c=0;c<W1;c++){const h=v()*6.28,f=5+v()*Jt*.6,p=Math.cos(h)*f,m=Math.sin(h)*f;yi.push(MS(p,Bt(p,m)+.5+v()*5,m))}for(let c=0;c<Y1;c++){const h=v()*6.28,f=5+v()*(Jt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Ve(p,m))continue;const x=sS(p,m);x.group.position.y=Bt(p,m),jh.push(x),Ie.push({x:p,z:m,r2:2.25})}for(let c=0;c<Z1;c++){const h=jt[Math.floor(v()*jt.length)],f=v()*6.28,p=2+v()*4,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Ve(m,x))continue;const d=oS(m,x);d.group.position.y=Bt(m,x),Jh.push(d),Ie.push({x:m,z:x,r2:1})}for(let c=0;c<$1;c++){const h=v()*6.28,f=6+v()*(Jt*.65),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Ve(p,m))continue;const x=rS(p,m);x.group.position.y=Bt(p,m),Dm.push(x),Ie.push({x:p,z:m,r2:2.25})}for(let c=0;c<j1;c++){const h=jt[Math.floor(v()*jt.length)],f=v()*6.28,p=2+v()*5,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Ve(m,x))continue;const d=cS(m,x);d.group.position.y=Bt(m,x),Kh.push(d),Ie.push({x:m,z:x,r2:1.5})}for(let c=0;c<J1;c++){const h=v()*6.28,f=8+v()*(Jt*.6),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Ve(p,m))continue;const x=lS(p,m);x.group.position.y=Bt(p,m),Qh.push(x),Ie.push({x:p,z:m,r2:3})}for(let c=0;c<K1;c++){const h=v()*6.28,f=5+v()*(Jt*.7),p=Math.cos(h)*f,m=Math.sin(h)*f;if(Ve(p,m))continue;const x=uS(p,m);x.group.position.y=Bt(p,m),tf.push(x),Ie.push({x:p,z:m,r2:1.5})}for(let c=0;c<Q1;c++){const h=jt[Math.floor(v()*jt.length)],f=v()*6.28,p=2+v()*4,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Ve(m,x))continue;const d=hS(m,x);d.group.position.y=Bt(m,x),ef.push(d),Ie.push({x:m,z:x,r2:1.5})}for(let c=0;c<tw;c++){const h=Xs.length>0?Xs[Math.floor(v()*Xs.length)]:{x:0,z:0},f=v()*6.28,p=1+v()*3,m=h.x+Math.cos(f)*p,x=h.z+Math.sin(f)*p;if(Ve(m,x))continue;const d=fS(m,x);d.group.position.y=Bt(m,x),nf.push(d),Ie.push({x:m,z:x,r2:1})}for(let c=0;c<ew;c++){const h=v()*6.28,f=5+v()*(Jt*.8),p=Math.cos(h)*f,m=Math.sin(h)*f,x=1.5+v()*3.5,d=U.groundGlowColors[Math.floor(v()*U.groundGlowColors.length)],g=.03+v()*.05,S=new Z({color:d,transparent:!0,opacity:g,blending:Qt,depthWrite:!1,side:Ct}),_=new C(new Be(x,10),S);_.rotation.x=-Math.PI/2,_.position.set(p,Bt(p,m)+.02,m),at.add(_),sf.push({mesh:_,mat:S,phase:v()*6.28,baseOpacity:g,speed:.3+v()*.3,x:p,z:m})}for(let c=0;c<jt.length;c++){const h=jt[c],f=Bt(h.x,h.z);h.y=f,Ac[c]&&(Ac[c].position.y=f+(h.treeH||10)*.6)}if(Oo.length>0){const c=new fe;for(let h=0;h<Oo.length;h++){const f=Oo[h];for(let p=0;p<f.instances.length;p++){const m=f.instances[p],x=jt[m.posIdx];m.y=x.y,c.position.set(x.x,x.y,x.z),c.rotation.set(0,x.yRot,0),c.scale.setScalar(x.scale),c.updateMatrix(),f.trunk&&f.trunk.setMatrixAt(p,c.matrix),f.canopy&&f.canopy.setMatrixAt(p,c.matrix),f.glow&&f.glow.setMatrixAt(p,c.matrix),f.detail&&f.detail.setMatrixAt(p,c.matrix)}f.trunk&&(f.trunk.instanceMatrix.needsUpdate=!0),f.canopy&&(f.canopy.instanceMatrix.needsUpdate=!0),f.glow&&(f.glow.instanceMatrix.needsUpdate=!0),f.detail&&(f.detail.instanceMatrix.needsUpdate=!0)}}}function Um(i,t){const e=1+Zi*1.5,n=Vs*.03,s=Fo*.03,o=J.pos.x,r=J.pos.y,a=J.pos.z;Xw(Oo,Ac,o,r,a,t,e,n,s),Zw(t,e,n,s,o,a),_w(t,o,a);for(let u=0;u<ra.length;u++){const l=ra[u],c=l.group.position.x-o,h=l.group.position.y-r,f=l.group.position.z-a,p=c*c+h*h+f*f;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}l.group.visible||(l.group.visible=!0),!(p>900)&&(l.group.rotation.z=Math.sin(t*.8+l.phase)*.03*e+n,l.group.rotation.x=Math.sin(t*.6+l.phase+1)*.02*e+s)}for(let u=0;u<Ti.length;u++){const l=Ti[u],c=l.group.position.x-o,h=l.group.position.y-r,f=l.group.position.z-a,p=c*c+h*h+f*f;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}if(l.group.visible||(l.group.visible=!0),p>900)continue;const m=Math.sin(t*1+l.phase)*.5+.5;l.petalMat.emissiveIntensity=(.3+m*.5)*ee,l.group.rotation.z=Math.sin(t*.9+l.phase)*.04*e+n*.5}for(let u=0;u<$h.length;u++){const l=$h[u],c=l.group.position.x-o,h=l.group.position.y-r,f=l.group.position.z-a,p=c*c+h*h+f*f;if(p>1600){l.group.visible&&(l.group.visible=!1);continue}l.group.visible||(l.group.visible=!0),!(p>900)&&(l.group.rotation.z=Math.sin(t*1.1+l.phase)*l.swayAmp*e+n,l.group.rotation.x=Math.sin(t*.8+l.phase+2)*l.swayAmp*.5*e+s)}for(let u=0;u<jh.length;u++){const l=jh[u],c=Math.sin(t*1.2+l.phase)*.5+.5;l.orbMat.emissiveIntensity=(.5+c*.5)*ee,l.hazeMat.opacity=(.04+c*.04)*ee,l.group.rotation.z=Math.sin(t*.5+l.phase)*.02*e+n*.3,l.group.rotation.x=Math.sin(t*.4+l.phase+1)*.015*e+s*.3}for(let u=0;u<Jh.length;u++){const l=Jh[u];for(let c=0;c<l.podMats.length;c++){const h=Math.sin(t*1.5+l.phase+c*1.8)*.5+.5;l.podMats[c].emissiveIntensity=(.3+h*.5)*ee}l.group.rotation.z=Math.sin(t*.35+l.phase)*.01*e+n*.2}aS(Dm,i,t,ee);for(let u=0;u<Kh.length;u++){const l=Kh[u],c=l.x-o,h=l.z-a,f=c*c+h*h;if(f>1600){l.group.visible&&(l.group.visible=!1);continue}if(l.group.visible||(l.group.visible=!0),f<900){for(let p=0;p<l.tipMats.length;p++){const m=Math.sin(t*1.8+l.phase+p*1.5)*.5+.5;l.tipMats[p].emissiveIntensity=(.3+m*.5)*ee}l.group.rotation.z=Math.sin(t*.4+l.phase)*.015*e+n*.2,l.group.rotation.x=Math.sin(t*.35+l.phase+1)*.01*e+s*.2}}for(let u=0;u<Qh.length;u++){const l=Qh[u],c=l.x-o,h=l.z-a,f=c*c+h*h;if(f>1600){l.group.visible&&(l.group.visible=!1);continue}if(l.group.visible||(l.group.visible=!0),f<900){l.columnMat.emissiveIntensity=(.3+Math.sin(t*1+l.phase)*.25)*ee,l.hazeMat.opacity=(.03+Math.sin(t*.8+l.phase)*.02)*ee;for(let p=0;p<l.flies.length;p++){const m=t*(2+p*.5)+p*2.1,x=.2+Math.sin(t*.7+p)*.08,d=.1+Math.sin(t*1.3+p*1.7)*.15;l.flies[p].position.set(Math.cos(m)*x,l.spadixY+d,Math.sin(m)*x)}l.group.rotation.z=Math.sin(t*.3+l.phase)*.01*e+n*.15}}for(let u=0;u<tf.length;u++){const l=tf[u],c=l.x-o,h=l.z-a,f=c*c+h*h;if(f>1600){l.group.visible&&(l.group.visible=!1);continue}if(l.group.visible||(l.group.visible=!0),f<900){for(let p=0;p<l.orbMats.length;p++){const m=Math.sin(t*2+l.phase+p*1.3)*.5+.5;l.orbMats[p].emissiveIntensity=(.3+m*.5)*ee}l.group.rotation.z=Math.sin(t*.45+l.phase)*.012*e+n*.2,l.group.rotation.x=Math.sin(t*.4+l.phase+1)*.008*e+s*.2}}for(let u=0;u<ef.length;u++){const l=ef[u],c=l.x-o,h=l.z-a,f=c*c+h*h;if(f>1600){l.group.visible&&(l.group.visible=!1);continue}if(l.group.visible||(l.group.visible=!0),f<900){for(let p=0;p<l.podMats.length;p++){const m=Math.sin(t*1.5+l.phase+p*1.8)*.5+.5;l.podMats[p].emissiveIntensity=(.3+m*.4)*ee}l.group.rotation.z=Math.sin(t*.6+l.phase)*.02*e+n*.25,l.group.rotation.x=Math.sin(t*.5+l.phase+1)*.015*e+s*.25}}for(let u=0;u<nf.length;u++){const l=nf[u],c=l.x-o,h=l.z-a,f=c*c+h*h;if(f>1600){l.group.visible&&(l.group.visible=!1);continue}if(l.group.visible||(l.group.visible=!0),f<900){for(let p=0;p<l.veilMats.length;p++)l.veilMats[p].rotation.z=Math.sin(t*.8+l.phase+p*.7)*.06*e;l.group.rotation.z=Math.sin(t*.35+l.phase)*.01*e+n*.15}}for(let u=0;u<sf.length;u++){const l=sf[u],c=l.x-o,h=l.z-a;if(c*c+h*h>3600){l.mesh.visible=!1;continue}l.mesh.visible=!0;const f=Math.sin(t*l.speed+l.phase)*.3+.7;l.mat.opacity=l.baseOpacity*f*ee}}function Nm(i,t){for(let n=0;n<ui.length;n++){const s=ui[n],o=s.group,r=o.position.x,a=o.position.z;s._syncPhase===void 0&&(s._syncPhase=s.phase);let u=0,l=0;for(let c=0;c<ui.length;c++){if(c===n)continue;const h=ui[c],f=h.group.position.x-r,p=h.group.position.z-a;f*f+p*p<225&&(u+=h._syncPhase||h.phase,l++)}if(l>0){const c=u/l;s._syncPhase+=(c-s._syncPhase)*i*.4}}const e=ze==="DEEP_NIGHT"?2:ze==="DAWN"?-1.5:0;for(let n=0;n<ui.length;n++){const s=ui[n].group,o=s.position.x-J.pos.x,r=s.position.z-J.pos.z,a=s.position.y-J.pos.y;if(o*o+a*a+r*r>3025){s.visible=!1;continue}s.visible=!0;const u=ui[n],l=u.group,c=l.position.x,h=l.position.z,f=u.floatY+e;if(u._stT-=i,u._stT<=0)if(ji)u._state="display",u._stT=10+Math.random()*15;else{const S=Math.random();S<.5?(u._state="drift",u._stT=20+Math.random()*30):S<.75?(u._state="pulse",u._stT=8+Math.random()*12):(u._state="migrate",u._migrateAng=Math.random()*6.28,u._stT=15+Math.random()*20)}switch(ji&&u._state!=="display"&&(u._state="display",u._stT=10,Js("jelly",{x:c,z:h},J.pos)),u._state){case"drift":{u.driftAng+=i*.15;const S=8+Math.sin(t*.1+u.phase)*4,_=u.homeX+Math.cos(u.driftAng)*S,w=u.homeZ+Math.sin(u.driftAng)*S;l.position.x+=(_-c)*i*.3,l.position.z+=(w-h)*i*.3,l.position.y=f+Math.sin(t*u.wobble+u.phase)*1.5;break}case"pulse":{u.driftAng+=i*.08,l.position.x+=Math.cos(u.driftAng)*i*.3,l.position.z+=Math.sin(u.driftAng)*i*.3,l.position.y=f+Math.sin(t*u.wobble+u.phase)*1,u._pulseSync=Math.sin(t*2+u._syncPhase)*.5+.5;break}case"migrate":{l.position.x+=Math.cos(u._migrateAng)*i*1,l.position.z+=Math.sin(u._migrateAng)*i*1,l.position.y=f+Math.sin(t*u.wobble+u.phase)*.8,l.position.x*l.position.x+l.position.z*l.position.z>Jt*.8*(Jt*.8)&&(u._migrateAng+=Math.PI);break}case"display":{u.driftAng+=i*.4,l.position.x+=Math.cos(u.driftAng)*i*.8,l.position.z+=Math.sin(u.driftAng)*i*.8,l.position.y=f+Math.sin(t*2+u.phase)*2,u._syncPhase+=(0-u._syncPhase)*i*2;break}}const p=Bt(l.position.x,l.position.z);l.position.y<p+3&&(l.position.y=p+3),u._state==="pulse"&&Math.random()<.003&&Js("jelly",{x:c,z:h},J.pos);const m=u._syncPhase||u.phase,x=Math.sin(t*1.2+m)*.5+.5;let d=1,g=0;if(u._state==="pulse")d=1+u._pulseSync*1.5,g=u._pulseSync*.15;else if(u._state==="display"){const S=Math.sin(t*4)*.5+.5;d=1.5+S*1.2,g=.15+S*.1}else u._state==="drift"&&(d=1+x*.3);u.bellMat.emissiveIntensity=(.4+x*.8)*ee*d,u.bellMat.opacity=.35+x*.25+g,l.rotation.y+=i*.2;for(let S=2;S<l.children.length;S++)l.children[S].rotation.x=Math.sin(t*2+S+m)*.15,l.children[S].rotation.z=Math.sin(t*1.5+S*.7+m)*.1}}function zm(i,t){const e=Ge.ShiftLeft||Ge.ShiftRight||gr,n=ze==="DAWN"?.6:ze==="NIGHT"?1.3:1,s=ze==="DAWN"?2:ze==="NIGHT"?.6:1;for(let o=0;o<Fn.length;o++){const r=Fn[o],a=r.group,u=a.position.x,l=a.position.z,c=u-J.pos.x,h=l-J.pos.z,f=c*c+h*h;if(f>1600){a.visible=!1;continue}if(a.visible=!0,r.state!=="startled"&&r.state!=="following"&&r.state!=="huddle"){const T=e?3.5:2;let b=f<T*T;if(!b)for(let y=0;y<Ze.length;y++){if(Ze[y].state!=="flee")continue;const M=Ze[y].group.position.x-u,R=Ze[y].group.position.z-l;if(M*M+R*R<25){b=!0;break}}b&&(r.state="startled",r._scaredT=.6+Math.random()*.5,r.wanderAng=Math.atan2(c,h),r.hopTimer=0,Js("puff",{x:u,z:l},J.pos))}if(ji&&r.state!=="startled"&&r.state!=="huddle"){let T=1/0,b=-1;for(let y=0;y<Fn.length;y++){if(y===o)continue;const M=Fn[y].group.position.x-u,R=Fn[y].group.position.z-l,L=M*M+R*R;L<T&&(T=L,b=y)}b>=0&&T>1&&(r.state="huddle",r._huddleTarget=b)}lr>8&&f<144&&r.state==="idle"&&Math.random()<.001&&(r.state="following",r._followT=10+Math.random()*10);const p=u-r._lastTX,m=l-r._lastTZ;p*p+m*m>.25&&(r._baseY=Bt(u,l),r._lastTX=u,r._lastTZ=l);const x={x:u,z:l},d=[];for(let T=0;T<Fn.length;T++){if(T===o)continue;const b=Fn[T].group.position.x,y=Fn[T].group.position.z;(b-u)*(b-u)+(y-l)*(y-l)<100&&d.push({x:b,z:y})}const g=Pm(x,d,1.5),S=d.length>0?Im(x,d):{x:0,z:0},_=g.x*2+S.x*.3,w=g.z*2+S.z*.3,A=Math.sqrt(_*_+w*w);switch(r.state){case"idle":{if(r.idleTimer-=i,a.position.y=r._baseY+Math.sin(t*2+r.phase)*.02,a.rotation.y+=Math.sin(t*.5+r.phase)*i*.3,A>.1&&d.length>1&&(a.position.x+=S.x*.05*i,a.position.z+=S.z*.05*i),Math.random()<2e-4&&Js("puff",{x:u,z:l},J.pos),r.idleTimer<=0){const T=A>.2?Math.atan2(_,w):0;r.state="hop",r.wanderAng+=(Math.random()-.5)*1.5+T*.3,r.hopTimer=0}break}case"hop":{r.hopTimer+=i;const b=r.hopTimer/1.2;if(b>=1)r.state="idle",r.idleTimer=(1.5+Math.random()*3)*s,a.position.y=r._baseY;else{a.position.y=r._baseY+Math.sin(b*Math.PI)*.3,a.position.x+=Math.sin(r.wanderAng)*r.speed*n*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*i;const y=1-Math.sin(b*Math.PI)*.15,M=1+Math.sin(b*Math.PI)*.2;a.scale.set(y,M,y),a.rotation.y=r.wanderAng}break}case"startled":{r._scaredT-=i,r.hopTimer+=i*1.5;const T=Math.min(r.hopTimer/.8,1);a.position.y=r._baseY+Math.sin(T*Math.PI)*.5,a.position.x+=Math.sin(r.wanderAng)*r.speed*2*i+g.x*.5*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*2*i+g.z*.5*i,a.scale.set(.85,1.3,.85),r._scaredT<=0&&(r.state="idle",r.idleTimer=3+Math.random()*3,a.position.y=r._baseY,a.scale.set(1,1,1));break}case"following":{if(r._followT-=i,f>225||lr<3||r._followT<=0){r.state="idle",r.idleTimer=2;break}if(r.wanderAng=Math.atan2(J.pos.x-u,J.pos.z-l),f>9){r.hopTimer+=i;const T=r.hopTimer%1.5/1.5;a.position.y=r._baseY+Math.sin(T*Math.PI)*.2,a.position.x+=Math.sin(r.wanderAng)*r.speed*.4*i,a.position.z+=Math.cos(r.wanderAng)*r.speed*.4*i}else a.position.y=r._baseY+Math.sin(t*3+r.phase)*.03;a.rotation.y=r.wanderAng;break}case"huddle":{if(!ji){r.state="idle",r.idleTimer=2;break}const T=Fn[r._huddleTarget];if(T){const b=T.group.position.x-u,y=T.group.position.z-l,M=Math.sqrt(b*b+y*y);M>.5&&(a.position.x+=b/M*r.speed*.5*i,a.position.z+=y/M*r.speed*.5*i)}a.rotation.z=Math.sin(t*8)*.05,a.position.y=r._baseY;break}}if(r._blinkTimer-=i,r._blinkTimer<=0)if(r._blinkState===0){for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=.1;r._blinkState=1,r._blinkTimer=.08+Math.random()*.06}else{for(let T=0;T<r.eyes.length;T++)r.eyes[T].scale.y=1;r._blinkState=0,r._blinkTimer=2+Math.random()*5}for(let T=0;T<r.ears.length;T++){const b=r.ears[T];b.mesh.rotation.z=b.baseRotZ+Math.sin(t*3.5+b.side*1.2+r.phase)*.08}if(r.tail.position.y=.38+Math.sin(t*4+r.phase)*.015,r.sparkles)for(let T=0;T<r.sparkles.length;T++){const b=r.sparkles[T],y=t*(2+T*.7)+b.phase;b.mesh.position.set(Math.cos(y)*b.orbitR,.5+Math.sin(y*1.3)*.1,Math.sin(y)*b.orbitR),b.mat.opacity=(.3+Math.sin(t*4+b.phase)*.3)*ee}r.crownMat&&(r.crownMat.emissiveIntensity=(.2+Math.sin(t*2+r.phase)*.15)*ee),a.position.x*a.position.x+a.position.z*a.position.z>Jt*.85*(Jt*.85)&&(r.wanderAng+=Math.PI)}}function Fm(i,t){const e=Ge.ShiftLeft||Ge.ShiftRight||gr;for(let n=0;n<Ze.length;n++){const s=Ze[n],o=s.group,r=o.position.x,a=o.position.z,u=r-J.pos.x,l=a-J.pos.z,c=u*u+l*l;if(c>3600){o.visible=!1;continue}o.visible=!0;const h=Math.atan2(u,l),f=e?18:12,p=f*f,m=e?10:sw,x=m*m,d=r-s._lastTX,g=a-s._lastTZ;d*d+g*g>.25&&(s._baseY=Bt(r,a),s._lastTX=r,s._lastTZ=a);const S=s._baseY;if(s.state!=="flee"&&s.state!=="alert"&&s.state!=="watching"){const M={x:r,z:a},R={x:J.pos.x,z:J.pos.z};c<x||hb(M,R,m,e)?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2,s._zigTimer=0,Js("deer",M,J.pos)):(c<p||ub(M,s.wanderAng,R,f,Math.PI*.5))&&(s.state="alert",s._stT=1+Math.random()*1.5,Js("deer",M,J.pos))}if(s.state!=="flee")for(let M=0;M<Ze.length;M++){if(M===n||Ze[M].state!=="flee")continue;const R=Ze[M].group.position.x-r,L=Ze[M].group.position.z-a;if(R*R+L*L<400){s.state="flee",s.wanderAng=Ze[M].wanderAng+(Math.random()-.5)*.4,s.fleeTimer=2+Math.random()*1.5,s._zigTimer=0;break}}const _=[];for(let M=0;M<Ze.length;M++){if(M===n)continue;const R=Ze[M].group.position.x,L=Ze[M].group.position.z;(R-r)*(R-r)+(L-a)*(L-a)<400&&_.push({x:R,z:L})}const w=Pm({x:r,z:a},_,3),A=_.length>0?Im({x:r,z:a},_):{x:0,z:0};(s.state==="alert"||s.state==="watching")&&(s.headLook+=(h-s.wanderAng)*.3*i);let E=s.speed,T=!1;switch(s.state){case"walk":{if(T=!0,s.walkTimer-=i,s.walkTimer<=0){const R=Math.random(),L=ze==="DUSK"?.55:.4,D=ze==="DEEP_NIGHT"?.25:.1;if(R<.25)s.state="pause",s.pauseTimer=2+Math.random()*3;else if(R<L)s.state="graze",s._stT=ze==="DUSK"?5+Math.random()*6:3+Math.random()*4;else if(R<L+.1&&Ne.length>0){s.state="drink",s._stT=8;let F=1/0;for(let V=0;V<Ne.length;V++){const k=Ne[V].x-r,O=Ne[V].z-a,B=k*k+O*O;B<F&&(F=B,s._drinkTgt=Ne[V])}}else R<L+.1+D?(s.state="rest",s._stT=ze==="DEEP_NIGHT"?8+Math.random()*8:5+Math.random()*5):(s.wanderAng+=(Math.random()-.5)*1.2,s.walkTimer=3+Math.random()*5)}if((r-s.homeX)*(r-s.homeX)+(a-s.homeZ)*(a-s.homeZ)>400){const R=Math.atan2(s.homeX-r,s.homeZ-a);s.wanderAng+=(R-s.wanderAng)*i*.5}if(_.length>0){const R=Math.atan2(A.x*.15+w.x*.8,A.z*.15+w.z*.8);s.wanderAng+=(R-s.wanderAng)*i*.3}break}case"pause":{s.pauseTimer-=i,s.headLook=Math.sin(t*.6)*.4,s.pauseTimer<=0&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}case"graze":{s._stT-=i,s.headBob=-.5,s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*4,s.headBob=0);break}case"drink":{if(s._stT-=i,s._drinkTgt){const M=s._drinkTgt.x-r,R=s._drinkTgt.z-a;Math.sqrt(M*M+R*R)>2?(s.wanderAng=Math.atan2(M,R),T=!0,E=s.speed*.7):s.headBob=-.6}s._stT<=0&&(s.state="walk",s.walkTimer=3+Math.random()*4,s.headBob=0,s._drinkTgt=null);break}case"rest":{s._stT-=i,o.position.y=Math.max(S-.3,o.position.y-i*.5),s._stT<=0&&(s.state="walk",s.walkTimer=2+Math.random()*3);break}case"alert":{s._stT-=i,c<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):s._stT<=0&&(c<f*1.2*(f*1.2)?(s.state="watching",s._stT=3+Math.random()*3):(s.state="walk",s.walkTimer=2+Math.random()*3));break}case"watching":{s._stT-=i,T=!0,E=s.speed*.3,s.wanderAng=h,c<x?(s.state="flee",s.wanderAng=h,s.fleeTimer=2.5+Math.random()*2):(c>f*1.5*(f*1.5)||s._stT<=0)&&(s.state="walk",s.walkTimer=2+Math.random()*4);break}case"flee":{T=!0,E=s.speed*ow,s.fleeTimer-=i,s._zigTimer-=i,s._zigTimer<=0&&(s._zigDir*=-1,s._zigTimer=.4+Math.random()*.4),s.wanderAng=h+s._zigDir*.3;const M=db({x:r,z:a},s.wanderAng,jt,3,1.5);M.x*M.x+M.z*M.z>.01&&(s.wanderAng+=Math.atan2(M.z,M.x)*.3);const R=fb({x:r,z:a},8);(R.x!==0||R.z!==0)&&(s.wanderAng=Math.atan2(R.z,R.x)),(s.fleeTimer<=0||c>f*2*(f*2))&&(s.state="walk",s.walkTimer=3+Math.random()*5);break}}if(T&&(o.position.x+=Math.sin(s.wanderAng)*E*i,o.position.z+=Math.cos(s.wanderAng)*E*i,s.legCycle+=i*E*3),o.position.x*o.position.x+o.position.z*o.position.z>Jt*.9*(Jt*.9)&&(s.wanderAng=Math.atan2(-o.position.x,-o.position.z)),s.state!=="rest"){const M=S-o.position.y;Math.abs(M)>.01?o.position.y+=Math.sign(M)*Math.min(Math.abs(M),i*2):o.position.y=S}if(o.rotation.y=s.wanderAng,s.state==="alert"||s.state==="watching"){const M=h-s.wanderAng;s.headLook+=(M*.5-s.headLook)*i*3}const y=s.headBob||0;s.neckPivot.rotation.x+=(y-s.neckPivot.rotation.x)*i*3,s.neckPivot.rotation.y+=(s.headLook-s.neckPivot.rotation.y)*i*4,T&&s.state!=="graze"&&s.state!=="drink"&&(s.neckPivot.rotation.x+=Math.sin(s.legCycle*2)*.05);for(let M=0;M<s.legPivots.length;M++){const R=s.legPivots[M];if(T){const L=R.isFront?0:Math.PI,D=R.side>0?Math.PI:0,F=Math.sin(s.legCycle+L+D)*.4*(E/s.speed);R.upper.rotation.x=F,R.lower.rotation.x=Math.max(0,-F*.6)}else s.state==="rest"&&o.position.y<-.1?(R.upper.rotation.x+=(.8-R.upper.rotation.x)*i*2,R.lower.rotation.x+=(1-R.lower.rotation.x)*i*2):(R.upper.rotation.x*=.9,R.lower.rotation.x*=.9)}if(s.tailPivot.rotation.x=Math.sin(t*1.5+s.phase)*.15,s.state==="flee"&&(s.tailPivot.rotation.x+=.3),s.state==="alert"?s.tailPivot.rotation.z=Math.sin(t*6)*.1:s.tailPivot.rotation.z*=.9,s.mat.emissiveIntensity=(.3+Math.sin(t*.8+s.phase)*.2)*ee,s.headLook*=.98,s.manePlanes)for(let M=0;M<s.manePlanes.length;M++)s.manePlanes[M].rotation.z=Math.sin(t*3+M*1.2+s.phase)*.15;if(s.branchOrbs)for(let M=0;M<s.branchOrbs.length;M++)s.branchOrbs[M].material.opacity=(.3+Math.sin(t*2.5+s.phase+M*1.5)*.3)*ee;if(s.trailSpheres){const M=s.state==="walk"||s.state==="flee";for(let R=0;R<s.trailSpheres.length;R++){const L=s.trailSpheres[R],D=.03+R*.02;L.prevX+=(r-L.prevX)*D,L.prevY+=(o.position.y+.8-L.prevY)*D,L.prevZ+=(a-L.prevZ)*D,L.mesh.position.set(L.prevX,L.prevY+Math.sin(t*2+R*1.5)*.04,L.prevZ),L.mat.opacity=M?(.12-R*.03)*ee:.02*ee}}}}function Om(i,t){for(let e=0;e<fr.length;e++){const n=fr[e],s=n.group,o=s.position.x,r=s.position.z,a=o-J.pos.x,u=r-J.pos.z;if(a*a+u*u>2025){s.visible=!1;continue}if(s.visible=!0,n._state==="patrol"){if(Math.random()<.002){let g=1/0,S=null;for(let _=0;_<le.length;_++){const w=le[_].x-o,A=le[_].z-r,E=w*w+A*A;E<900&&E<g&&(g=E,S=le[_])}for(let _=0;_<Hn.length;_++){if(Hn[_].glowIntensity<.3)continue;const w=Hn[_].x-o,A=Hn[_].z-r,E=w*w+A*A;E<900&&E<g&&(g=E,S=Hn[_])}S&&(n._state="attracted",n._attractTarget=S,n._stT=6+Math.random()*8,Js("moth",{x:o,z:r},J.pos))}const d=ze==="DAWN"?.005:ze==="DEEP_NIGHT"?3e-4:.001;if(Math.random()<d){let g=1/0,S=null;for(let _=0;_<jt.length;_++){const w=jt[_].x-o,A=jt[_].z-r,E=w*w+A*A;E<400&&E<g&&(g=E,S=jt[_])}S&&(n._state="rest",n._restTree=S,n._stT=ze==="DAWN"?8+Math.random()*10:4+Math.random()*6)}}const l=ze==="DEEP_NIGHT"?1.6:ze==="DAWN"?.5:1,c=ze==="DEEP_NIGHT"?1.4:1;switch(n._state){case"patrol":{n.orbitAng+=i*.4*l;const d=n.centerX+Math.cos(n.orbitAng)*n.orbitR*c,g=n.centerZ+Math.sin(n.orbitAng)*n.orbitR*c;s.position.x+=(d-o)*i*1.5,s.position.z+=(g-r)*i*1.5,s.position.y=n.floatY+Math.sin(t*.7+n.phase)*.8,s.rotation.y=n.orbitAng+Math.PI/2;break}case"attracted":{if(n._stT-=i,!n._attractTarget||n._stT<=0){n._state="patrol",n._attractTarget=null;break}n.orbitAng+=i*.8;const d=n._attractTarget,g=Math.max(.5,n._stT*.4),S=d.x+Math.cos(n.orbitAng)*g,_=d.z+Math.sin(n.orbitAng)*g;s.position.x+=(S-o)*i*2,s.position.z+=(_-r)*i*2,s.position.y+=(2-s.position.y)*i*.5,s.rotation.y=n.orbitAng+Math.PI/2;break}case"rest":{if(n._stT-=i,!n._restTree||n._stT<=0){n._state="patrol",n._restTree=null,n.centerX=s.position.x,n.centerZ=s.position.z;break}const d=n._restTree,g=d.x+.5-o,S=d.z+.5-r,_=Math.sqrt(g*g+S*S);_>.3&&(s.position.x+=g/_*i*2,s.position.z+=S/_*i*2),s.position.y+=(2.5-s.position.y)*i*1.5,s.rotation.y=Math.atan2(g,S);break}}const h=Bt(s.position.x,s.position.z);s.position.y<h+1.5&&(s.position.y=h+1.5);const f=n._state==="rest"?.05:.4,p=Math.sin(t*n.flapSpeed+n.phase)*f;for(let d=0;d<s._wingPivots.length;d++){const g=s._wingPivots[d];g.pivot.rotation.z=p*g.side}const m=Math.sin(t*1.5+n.phase)*.5+.5,x=n._state==="attracted"?.4:0;n.wingMat.emissiveIntensity=(.5+m*.6+x)*ee,n.wingMat.opacity=.45+m*.25}}function Rb(i,t){const e=Ge.ShiftLeft||Ge.ShiftRight||gr;let n=null;if(lr>5&&(Je==="SEEK"||Je==="RISING")){let s=1/0;for(let o=0;o<Vn.length;o++){if(Vn[o].found)continue;const r=Vn[o].x-J.pos.x,a=Vn[o].z-J.pos.z,u=r*r+a*a;u<s&&(s=u,n=Vn[o])}}for(let s=0;s<Kc.length;s++){const o=Kc[s],r=t*.5+o.phase+s/Pp*6.28,a=e?4+s*2:1.5+s*.8,u=e?3+s:1.2+Math.sin(t*.7+o.phase)*.5;if(o.targetX=J.pos.x+Math.cos(r)*a,o.targetY=J.pos.y-il+u,o.targetZ=J.pos.z+Math.sin(r)*a,s===0&&n){const m=Math.min((lr-5)/3,.6);o.targetX+=(n.x-J.pos.x)*m,o.targetZ+=(n.z-J.pos.z)*m,o.targetY+=.5}const l=e?.8:2.5;o.velX+=(o.targetX-o.group.position.x)*l*i,o.velY+=(o.targetY-o.group.position.y)*l*i,o.velZ+=(o.targetZ-o.group.position.z)*l*i,o.velX*=.92,o.velY*=.92,o.velZ*=.92,o.group.position.x+=o.velX*i*4,o.group.position.y+=o.velY*i*4,o.group.position.z+=o.velZ*i*4;const c=Math.sin(t*2+o.phase)*.5+.5;o.glowMat.opacity=.3+c*.4,o.hazeMat.opacity=.08+c*.12;const h=t*(2.5+s*.5)+o.phase,f=.14+Math.sin(t*1.3+o.phase)*.06;o.group.children[5].position.set(Math.cos(h)*f,Math.sin(h*1.5)*.08,Math.sin(h)*f);for(let m=0;m<o.tendrils.length;m++){const x=o.tendrils[m],d=Math.sin(t*3+m*2.1+o.phase)*.3,g=.08+Math.sin(t*2+m*1.5)*.04;x.mesh.position.x=Math.cos(x.baseAng+d)*g,x.mesh.position.z=Math.sin(x.baseAng+d)*g,x.mesh.rotation.y=x.baseAng+d,x.mesh.rotation.z=Math.PI/3+Math.sin(t*2.5+m)*.2}for(let m=0;m<o.embers.length;m++){const x=(m+1)*.08;o.embers[m].position.y=-.06-x+Math.sin(t*4+m*1.4+o.phase)*.03,o.embers[m].position.x=Math.sin(t*2.5+m*2+o.phase)*.06,o.embers[m].material.opacity=.2+Math.sin(t*5+m*1.7)*.15}o.facet.rotation.y+=i*1.5,o.facet.rotation.x+=i*.7,o.halo.rotation.z+=i*.3,o.halo2.rotation.y+=i*.2}}function Cb(i,t){for(let e=0;e<Hn.length;e++){const n=Hn[e],s=n.x-J.pos.x,o=n.z-J.pos.z,a=s*s+o*o<(hh+.5)*(hh+.5),u=a?1:0;n.glowIntensity+=(u-n.glowIntensity)*i*3,n.discMat.opacity=n.glowIntensity*.25*(.6+Math.sin(t*2+n.phase)*.4),n.mushMat.emissiveIntensity=(.2+n.glowIntensity*.8)*ee,a&&J.vel.y>0&&J.vel.y<=Fc+.5&&(J.vel.y=Fc+nw,n.glowIntensity=1.5,Z2());const l=.08+n.glowIntensity*.25;n.sporeMat.opacity=l;for(let c=0;c<n.spores.length;c++){const h=n.spores[c];h.drift+=i*.3,h.mesh.position.y+=h.speed*i*(.5+n.glowIntensity),h.mesh.position.x=h.baseX+Math.sin(t*.8+h.drift)*.15,h.mesh.position.z=h.baseZ+Math.cos(t*.6+h.drift)*.12,h.mesh.position.y>.8&&(h.mesh.position.y=.03),h.mesh.scale.setScalar(.6+Math.sin(t*2+c)*.4)}for(let c=0;c<n.glowWorms.length;c++){const h=Math.sin(t*1.5+c*1.3+n.phase)*.5+.5;n.glowWorms[c].material.opacity=.1+h*.4+n.glowIntensity*.3}}}function Pb(i,t){for(let e=0;e<yi.length;e++){const n=yi[e];if(n.popped){if(n.popTimer-=i,n.popTimer<=0){n.popped=!1,n.group.visible=!0;const c=v()*6.28,h=8+v()*Jt*.5;n.homeX=Math.cos(c)*h,n.homeZ=Math.sin(c)*h,n.floatY=.5+v()*4,n.group.position.set(n.homeX,n.floatY,n.homeZ)}continue}n.driftAng+=i*.2;const s=n.homeX+Math.sin(n.driftAng)*3,o=n.homeZ+Math.cos(n.driftAng*.7)*3;n.group.position.x+=(s-n.group.position.x)*i*.5,n.group.position.z+=(o-n.group.position.z)*i*.5,n.group.position.y=n.floatY+Math.sin(t*.6+n.phase)*n.bobAmp;const r=(t*.1+n.phase)%1;n.shellMat.color.setRGB(Math.sin(r*6.28)*.15+.7,Math.sin(r*6.28+2.09)*.15+.7,Math.sin(r*6.28+4.19)*.15+.8),n.shellMat.opacity=.18+Math.sin(t*1.5+n.phase)*.08;const a=n.group.position.x-J.pos.x,u=n.group.position.y-J.pos.y,l=n.group.position.z-J.pos.z;a*a+u*u+l*l<a0*a0*n.sc*n.sc&&(n.popped=!0,n.popTimer=8+Math.random()*8,n.group.visible=!1,qS(n.group.position.x,n.group.position.y,n.group.position.z,6),k2(n.group.position,J.pos))}}function Ib(i,t){const e=Yr();for(let n=0;n<Ne.length;n++){const s=Ne[n],o=.015+e*.01;for(let h=0;h<s.pads.length;h++)s.pads[h].mesh.position.y=.05+Math.sin(t*(.8+e*.4)+s.pads[h].phase)*o;const r=e*.08;s.waterMat.emissiveIntensity=(.15+r+Math.sin(t*1+s.phase)*.1)*ee;const a=Math.sin(t*1.2+s.phase)*.5+.5;s.flMat.emissiveIntensity=(.3+a*.5)*ee;const u=.25+e*.2,l=.12+e*.08;for(let h=0;h<s.ripples.length;h++){const f=s.ripples[h],p=(t*u+f.phase)%1,m=.2+p*s.pondR*.8;f.mesh.scale.setScalar(m),f.mesh.material.opacity=(1-p)*l}const c=1+e*.5;for(let h=0;h<s.tadpoles.length;h++){const f=s.tadpoles[h];f.ang+=f.speed*c*i;const p=Math.cos(f.ang)*f.orbR,m=Math.sin(f.ang)*f.orbR;f.body.position.x=p,f.body.position.z=m,f.body.rotation.y=f.ang+Math.PI/2;const x=.02;f.tail.position.x=p-Math.cos(f.ang)*x,f.tail.position.z=m-Math.sin(f.ang)*x,f.tail.rotation.y=f.ang,f.tail.rotation.z=Math.PI/2+Math.sin(t*(8+e*2)+h*3)*.4}}}function Lb(i,t){if(xu-=i,xu<=0){xu=.5;for(let o=0;o<le.length;o++){const r=le[o],a=r.x-J.pos.x,u=r.z-J.pos.z;if(a*a+u*u<36){Qn={x:r.x,z:r.z},vi=0;break}}}const e=Eb();if(!Qn){e.visible=!1;return}if(vi+=i*12,vi>30){Qn=null,vi=0,e.visible=!1;return}e.visible=!0,e.position.set(Qn.x,.15,Qn.z),e.scale.setScalar(vi),e.material.opacity=(1-vi/30)*.45;const n=vi,s=4;for(let o=0;o<Ln.length;o++){const r=Ln[o],a=r.x-Qn.x,u=r.z-Qn.z,l=Math.sqrt(a*a+u*u);if(Math.abs(l-n)<s){const c=1-Math.abs(l-n)/s;r.capMat.emissiveIntensity=Math.max(r.capMat.emissiveIntensity,(r.base+c*2)*ee)}}for(let o=0;o<Ti.length;o++){const r=Ti[o],a=r.group.position.x-Qn.x,u=r.group.position.z-Qn.z,l=Math.sqrt(a*a+u*u);if(Math.abs(l-n)<s){const c=1-Math.abs(l-n)/s;r.petalMat.emissiveIntensity=Math.max(r.petalMat.emissiveIntensity,(.3+c*1.5)*ee)}}}function Db(i,t){const e=J.pos.x;J.pos.y;const n=J.pos.z,s=Yr(),o=ji?.6:s>.3?s*.4:0;for(let l=0;l<Ti.length;l++){const c=Ti[l],h=c.group.position.x,f=c.group.position.z,p=h-e,m=f-n,d=p*p+m*m<16?1:0;c._react=c._react||0,c._react+=(d-c._react)*i*(d>0?4:1.5);const g=(1+c._react*.15)*(1-o*.12),S=(1+c._react*.05)*(1-o*.15);c.group.scale.set(g,S,g),c.petalMat.emissiveIntensity+=c._react*.6*ee*(1-o*.4)}for(let l=0;l<Ln.length;l++){const c=Ln[l],h=c.x-e,f=c.z-n,m=h*h+f*f<4?1:0;c._touch=c._touch||0,c._touch+=(m-c._touch)*i*(m>0?6:1.5);const x=s*.4;c.capMat.emissiveIntensity+=(c._touch*1.5+x)*ee;const d=1+c._touch*.08;c.group.scale.set(d,1+c._touch*.04,d)}for(let l=0;l<ra.length;l++){const c=ra[l],h=c.group.position.x,f=c.group.position.z,p=h-e,m=f-n,d=p*p+m*m<2.25?.65:1;c._curl=c._curl===void 0?1:c._curl,c._curl+=(d-c._curl)*i*(d<1?4:1.5),c.group.scale.set(1+(1-c._curl)*.3,c._curl,1+(1-c._curl)*.3)}Tb();const r=jo==="FOG_BANK"?.5:1;let a=0,u=0;for(let l=0;l<le.length;l++){const c=le[l],h=c.x-e,f=c.z-n;if(h*h+f*f<36)for(let p=0;p<le.length;p++){if(l===p)continue;const m=le[p],x=c.x-m.x,d=c.z-m.z,g=x*x+d*d;if(g<400){a++;const S=(1-Math.sqrt(g)/20)*.8*r;if(m.mat.emissiveIntensity+=S*ee,u<of){const _=rf[u],w=_.geo.attributes.position.array,A=1,E=1;w[0]=c.x,w[1]=A,w[2]=c.z,w[3]=m.x,w[4]=E,w[5]=m.z,_.geo.attributes.position.needsUpdate=!0,_.geo.computeBoundingSphere(),_.active=!0;const T=Math.sin(t*3+l*1.5+p*.7)*.3+.5;_.opacity=S*T*ee,_.line.material.opacity=_.opacity,_.line.visible=!0,u++}}}}for(let l=u;l<of;l++){const c=rf[l];c.line.visible&&(c.opacity*=.85,c.line.material.opacity=c.opacity,c.opacity<.01&&(c.line.visible=!1))}return a}let cc="EXPLORE",vu=0,Mu=0;function Ub(i,t){let e=!1;for(let x=0;x<le.length;x++){const d=le[x].x-J.pos.x,g=le[x].z-J.pos.z;if(d*d+g*g<64){e=!0;break}}cc=e?"NEAR_CRYSTAL":"EXPLORE",vu+=i;const n=Yr(),s=Math.max(.2,1-n*.8),o=(cc==="NEAR_CRYSTAL"?.08:.25)/s,r=Math.floor((cc==="NEAR_CRYSTAL"?120:100)*s);if(vu>o&&(vu=0,em(0,t)<r))if(cc==="NEAR_CRYSTAL")for(let d=0;d<le.length;d++){const g=le[d].x-J.pos.x,S=le[d].z-J.pos.z;g*g+S*S<100&&gc(le[d].x,Bt(le[d].x,le[d].z)+1,le[d].z,3+Math.random()*4)}else if(Math.random()<.3&&Ti.length>0){const d=Ti[Math.floor(Math.random()*Ti.length)];if(d._react>.3){const g=d.group.position.x,S=d.group.position.z;gc(g+(Math.random()-.5)*2,Bt(g,S)+.5,S+(Math.random()-.5)*2,4+Math.random()*6)}}else{const d=Math.random()*6.28,g=5+Math.random()*25,S=J.pos.x+Math.cos(d)*g,_=J.pos.z+Math.sin(d)*g;gc(S,Bt(S,_),_,6+Math.random()*10)}if(Mu+=i,Mu>.2){Mu=0;for(let x=0;x<Ln.length;x++){const d=Ln[x],g=d.x-J.pos.x,S=d.z-J.pos.z;g*g+S*S<200&&Math.random()<.15&&FS(d.x,.6*d.group.scale.x,d.z)}}for(let x=0;x<Ln.length;x++){const d=Ln[x],g=d.x-J.pos.x,S=(d.group.position.y||0)-J.pos.y,_=d.z-J.pos.z;if(g*g+S*S+_*_>2500){d.group.visible&&(d.group.visible=!1);continue}d.group.visible||(d.group.visible=!0);const A=Math.sin(t*d.speed+d.phase)*.5+.5;d.capMat.emissiveIntensity=d.base*(.5+A*.8)*ee}for(let x=0;x<le.length;x++){const d=le[x],g=Math.sin(t*.6+d.phase)*.5+.5;d.mat.emissiveIntensity=(1+g*1.5)*ee,d.group.children[0].rotation.y+=i*.15,d.light&&(d.light.intensity=(.3+g*.4)*ee)}if(!as.length)for(let x=0;x<le.length;x++)as.push({idx:x,dist:0});const a=J.pos.x-N0,u=J.pos.z-z0;if(a*a+u*u>1){N0=J.pos.x,z0=J.pos.z;for(let x=0;x<le.length;x++){const d=le[x],g=d.x-J.pos.x,S=d.z-J.pos.z;as[x].idx=x,as[x].dist=g*g+S*S}as.sort((x,d)=>x.dist-d.dist)}for(let x=0;x<Ls.length;x++)if(x<as.length&&as[x].dist<2500){const d=le[as[x].idx],g=Math.sin(t*.6+d.phase)*.5+.5;Ls[x].position.set(d.x,1.5,d.z),Ls[x].intensity=(1.5+g*2)*ee,Ls[x].distance=16,Ls[x].color.setHex(U.crystal)}else Ls[x].intensity=0;if(Zi>.8&&Math.random()<.005)for(let x=0;x<jr.length;x++){const d=jr[x];if(!d.dispersed&&Math.random()<.1){d.dispersed=!0;for(let g=0;g<8;g++)Xp(d.x,d.h+.05,d.z);for(let g=2;g<d.group.children.length;g++)d.group.children[g].visible=!1;d.regrowTimer=15+Math.random()*10}}const l=Zi>.3?(Zi-.3)*.02:0,c=ji?.03:0;if(Math.random()<l+c)for(let x=0;x<jt.length;x++){const d=jt[x],g=d.x-J.pos.x,S=d.z-J.pos.z;if(g*g+S*S<900&&Math.random()<.15){const _=(d.treeH||10)*.7+(d.y||0);jS(d.x,_,d.z);break}}Nm(i,t),zm(i,t),Fm(i,t),Om(i,t),Hp(i,t),Um(i,t);const h=J.pos.x,f=J.pos.y,p=J.pos.z;for(let x=0;x<Xs.length;x++){const d=Xs[x],g=d.x||d.group.position.x,S=d.z||d.group.position.z,_=g-h,w=(d.group.position.y||0)-f,A=S-p,E=_*_+w*w+A*A;if(E>2500){d.group.visible&&(d.group.visible=!1);continue}if(d.group.visible||(d.group.visible=!0),!d.sparkles||E>400)continue;let T=0;for(let D=0;D<le.length;D++){const F=le[D].x-g,V=le[D].z-S,k=F*F+V*V;k<100&&(T=Math.max(T,(1-Math.sqrt(k)/10)*.6))}const b=g-J.pos.x,y=S-J.pos.z,M=b*b+y*y,R=M<25?(1-Math.sqrt(M)/5)*.3:0;let L=0;if(Qn&&vi>0){const D=g-Qn.x,F=S-Qn.z,V=Math.sqrt(D*D+F*F);Math.abs(V-vi)<3&&(L=(1-Math.abs(V-vi)/3)*.8)}for(let D=0;D<d.sparkles.length;D++){const F=Math.sin(t*4+x*2.3+D*1.7)*.35;d.sparkles[D].material.opacity=.15+F+T+R+L}d.mossMat&&R>0&&(d.mossMat.emissiveIntensity=.05+R*.4*Math.sin(t*2+x)*.5+.5)}Rb(i,t),iS(jr,i,t,J.pos),Cb(i,t),Pb(i,t),Ib(i,t),om(i,t,J.pos),eS(i,t),JS(i,t),VS(i),YS(i),Lb(i);const m=Db(i,t);if(f2(i,t),DS(t),J.onGround&&J.vel.x*J.vel.x+J.vel.z*J.vel.z>.5){const d=Math.atan2(J.vel.x,J.vel.z),g=Ge.ShiftLeft||Ge.ShiftRight||gr;t2(J.pos.x,J.pos.z,d,g)}e2(i,Yr()),J2(i,J.pos,Ne,Lm,ze,Yr()),G2(i),gb(J.pos,Ze,Fn,ui,fr,Hn,Ne,m),xb(i)}let Ye=0,af=!1;function Nb(){af||(af=!0,gw(!0),bb())}function Bm(){requestAnimationFrame(Bm);const i=Math.min(Ip.getDelta(),.1);Ye+=i,x2(i);const t=S2(i,Ye,J.pos);T2(i,J.pos,t,Vs,Fo),Dw(i,Ye,ze,ee,jo),_i>0&&(Pf.intensity+=_i*.8,at.background.r=Math.min(at.background.r+_i*.08,.25),at.background.g=Math.min(at.background.g+_i*.08,.25),at.background.b=Math.min(at.background.b+_i*.12,.35)),N2(i,Zi,t,ji,_i,ze,J.pos,Ne),q2(J.pos);const e=Math.sqrt(J.vel.x*J.vel.x+J.vel.z*J.vel.z);let n=!1;for(let s=0;s<Ne.length;s++){const o=Ne[s].x-J.pos.x,r=Ne[s].z-J.pos.z;if(o*o+r*r<225){n=!0;break}}if(!n)for(let s=0;s<Hn.length;s++){const o=Hn[s].x-J.pos.x,r=Hn[s].z-J.pos.z;if(o*o+r*r<144){n=!0;break}}if(lb(i,ze,e,n),OS(Vs,Fo),tS(Vs,Fo,Zi),ZS(Vs,Fo),!af){Mn.position.set(0,il,0),Mn.rotation.order="YXZ",Mn.rotation.y+=i*.08,Mn.rotation.x=0;for(let s=0;s<Ln.length;s++){const o=Ln[s],r=Math.sin(Ye*o.speed+o.phase)*.5+.5;o.capMat.emissiveIntensity=o.base*(.5+r*.8)*ee}for(let s=0;s<le.length;s++){const o=le[s];o.mat.emissiveIntensity=(1+Math.sin(Ye*.6+o.phase)*.5*1.5+.75)*ee}Nm(i,Ye),zm(i,Ye),Fm(i,Ye),Om(i,Ye),Hp(i,Ye),Um(i,Ye),om(i,Ye,J.pos);for(let s=0;s<yi.length;s++)yi[s].popped||(yi[s].group.position.y=yi[s].floatY+Math.sin(Ye*.6+yi[s].phase)*yi[s].bobAmp);for(let s=0;s<Ne.length;s++)for(let o=0;o<Ne[s].pads.length;o++)Ne[s].pads[o].mesh.position.y=.05+Math.sin(Ye*.8+Ne[s].pads[o].phase)*.015;for(let s=0;s<Vn.length;s++){const o=Vn[s],r=Math.sin(Ye*1.5+o.phase)*.5+.5;o.group.position.y=o.flyY+Math.sin(Ye*.8+o.phase)*.3,o.glowMat.opacity=.3+r*.4}u0();return}Fw(i),Ub(i,Ye),em(i,Ye),BS(i),Mn.position.copy(J.pos),Mn.position.y+=Vp,Mn.rotation.order="YXZ",Mn.rotation.y=na,Mn.rotation.x=Ys,yb(i,J.pos),u0()}try{xh(0,0,5),Ew(),g2({scene:at,moon:si,moon2:If,hemiLight:Pf,playerLight:Lf}),Ab();const i=Sw();Nw(jt,Xs),zw(v0),Uw(t=>{let e=!1;for(let n=0;n<Ne.length;n++){const s=Ne[n].x-J.pos.x,o=Ne[n].z-J.pos.z;if(s*s+o*o<16){e=!0;break}}F2(t,e),Math.random()<.4&&v0(J.pos.x,J.pos.z,1)},()=>O2(),t=>B2(t)),w2(),b2(),US(150),zS(60),pw(),GS(X1),HS(20),Qw(40),XS(30),$S(50),QS(),Lw(),RS(),IS(),LS(),U2(),mb(),_b(),wb(),h2({orbs:Vn,obeliskGroup:SS(),obeliskMat:bS(),obeliskGlowMat:TS(),pinnacleOrb:ES(),pinnacleRings:AS(),moatMesh:CS(),moatMat:PS(),rainbowArcs:sa,player:J,makeLaser:i2,orbHudEl:Sb(),deers:Ze,puffs:Fn,jellies:ui,moths:fr,trees:jt,treeMeshes:Oo,groundMesh:i,playOrbCollect:H2,playOrbWarble:V2,playLaserZap:W2,playLaserHum:X2,stopLaserHums:Y2}),mw(Nb);for(let t=0;t<50;t++){const e=Math.random()*6.28,n=3+Math.random()*Jt*.7,s=Math.cos(e)*n,o=Math.sin(e)*n;gc(s,Bt(s,o),o,8+Math.random()*12)}console.log("✓ Init: trees="+jt.length+" mush="+Ln.length+" crystals="+le.length+" orbs="+Vn.length+" creatures="+(ui.length+Fn.length+Ze.length+fr.length)+" wisps="+Kc.length+" dandelions="+jr.length+" fairyRings="+Hn.length+" bubbles="+yi.length+" ponds="+Ne.length+" scene="+at.children.length),Bm()}catch(i){console.error("INIT FAILED:",i),document.body.innerHTML='<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>'+(i.stack||i.message)+"</pre></div>"}
