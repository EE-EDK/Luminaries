(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=1021,S=1022,C=1023,w=1024,T=1025,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,ee=1033,te=33776,ne=33777,re=33778,ie=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,M=37816,be=37817,xe=37818,Se=37819,N=37820,Ce=37821,P=36492,we=36494,Te=36495,Ee=36283,De=36284,Oe=36285,ke=36286,Ae=2300,je=2301,Me=2302,Ne=2400,Pe=2401,Fe=2402,Ie=3200,Le=3201,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=35048,Ge=2e3,Ke=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},qe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Je=Math.PI/180,Ye=180/Math.PI;function Xe(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qe[e&255]+qe[e>>8&255]+qe[e>>16&255]+qe[e>>24&255]+`-`+qe[t&255]+qe[t>>8&255]+`-`+qe[t>>16&15|64]+qe[t>>24&255]+`-`+qe[n&63|128]+qe[n>>8&255]+`-`+qe[n>>16&255]+qe[n>>24&255]+qe[r&255]+qe[r>>8&255]+qe[r>>16&255]+qe[r>>24&255]).toLowerCase()}function F(e,t,n){return Math.max(t,Math.min(n,e))}function Ze(e,t){return(e%t+t)%t}function Qe(e,t,n){return(1-n)*e+n*t}function $e(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var I=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},L=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tt.makeScale(e,t)),this}rotate(e){return this.premultiply(tt.makeRotation(-e)),this}translate(e,t){return this.premultiply(tt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tt=new L;function nt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function rt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function it(){let e=rt(`canvas`);return e.style.display=`block`,e}var at={};function ot(e){e in at||(at[e]=!0,console.warn(e))}function st(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function ct(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function lt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ut=new L().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dt=new L().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ft(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=mt(e.r),e.g=mt(e.g),e.b=mt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=ht(e.r),e.g=ht(e.g),e.b=ht(e.b)),e)},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:ut,fromXYZ:dt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:ut,fromXYZ:dt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var pt=ft();function mt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var gt,_t=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gt===void 0&&(gt=rt(`canvas`)),gt.width=e.width,gt.height=e.height;let n=gt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=rt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=mt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(mt(t[e]/255)*255):t[e]=mt(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},vt=0,yt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:vt++}),this.uuid=Xe(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(bt(r[t].image)):e.push(bt(r[t]))}else e=bt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function bt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?_t.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var xt=0,St=class r extends Ke{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=C,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:xt++}),this.uuid=Xe(),this.name=``,this.source=new yt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new I(0,0),this.repeat=new I(1,1),this.center=new I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new L,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};St.DEFAULT_IMAGE=null,St.DEFAULT_MAPPING=300,St.DEFAULT_ANISOTROPY=1;var Ct=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this.w=F(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this.w=F(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wt=class extends Ke{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new yt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Tt=class extends wt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Et=class extends St{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Dt=class extends St{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ot=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(F(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(At.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(At.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kt.copy(this).projectOnVector(e),this.sub(kt)}reflect(e){return this.sub(kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kt=new R,At=new Ot,jt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Nt):Nt.fromBufferAttribute(r,t),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Pt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Pt.copy(e.boundingBox)),Pt.applyMatrix4(e.matrixWorld),this.union(Pt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vt),Ht.subVectors(this.max,Vt),Ft.subVectors(e.a,Vt),It.subVectors(e.b,Vt),Lt.subVectors(e.c,Vt),Rt.subVectors(It,Ft),zt.subVectors(Lt,It),Bt.subVectors(Ft,Lt);let t=[0,-Rt.z,Rt.y,0,-zt.z,zt.y,0,-Bt.z,Bt.y,Rt.z,0,-Rt.x,zt.z,0,-zt.x,Bt.z,0,-Bt.x,-Rt.y,Rt.x,0,-zt.y,zt.x,0,-Bt.y,Bt.x,0];return!Gt(t,Ft,It,Lt,Ht)||(t=[1,0,0,0,1,0,0,0,1],!Gt(t,Ft,It,Lt,Ht))?!1:(Ut.crossVectors(Rt,zt),t=[Ut.x,Ut.y,Ut.z],Gt(t,Ft,It,Lt,Ht))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mt=[new R,new R,new R,new R,new R,new R,new R,new R],Nt=new R,Pt=new jt,Ft=new R,It=new R,Lt=new R,Rt=new R,zt=new R,Bt=new R,Vt=new R,Ht=new R,Ut=new R,Wt=new R;function Gt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Wt.fromArray(e,a);let o=i.x*Math.abs(Wt.x)+i.y*Math.abs(Wt.y)+i.z*Math.abs(Wt.z),s=t.dot(Wt),c=n.dot(Wt),l=r.dot(Wt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Kt=new jt,qt=new R,Jt=new R,Yt=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Kt.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qt.subVectors(e,this.center);let t=qt.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(qt,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jt.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qt.copy(e.center).add(Jt)),this.expandByPoint(qt.copy(e.center).sub(Jt))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xt=new R,Zt=new R,Qt=new R,$t=new R,en=new R,tn=new R,nn=new R,rn=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zt.copy(e).add(t).multiplyScalar(.5),Qt.copy(t).sub(e).normalize(),$t.copy(this.origin).sub(Zt);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Qt),o=$t.dot(this.direction),s=-$t.dot(Qt),c=$t.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Zt).addScaledVector(Qt,d),f}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);let n=Xt.dot(this.direction),r=Xt.dot(Xt)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,r,i){en.subVectors(t,e),tn.subVectors(n,e),nn.crossVectors(en,tn);let a=this.direction.dot(nn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$t.subVectors(this.origin,e);let s=o*this.direction.dot(tn.crossVectors($t,tn));if(s<0)return null;let c=o*this.direction.dot(en.cross($t));if(c<0||s+c>a)return null;let l=-o*$t.dot(nn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/on.setFromMatrixColumn(e,0).length(),i=1/on.setFromMatrixColumn(e,1).length(),a=1/on.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cn,e,ln)}lookAt(e,t,n){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),un.crossVectors(n,fn),un.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),un.crossVectors(n,fn)),un.normalize(),dn.crossVectors(fn,un),r[0]=un.x,r[4]=dn.x,r[8]=fn.x,r[1]=un.y,r[5]=dn.y,r[9]=fn.y,r[2]=un.z,r[6]=dn.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],te=r[3],ne=r[7],re=r[11],ie=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*j+c*re,i[12]=a*w+o*O+s*ee+c*ie,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*j+f*re,i[13]=l*w+u*O+d*ee+f*ie,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*j+g*re,i[14]=p*w+m*O+h*ee+g*ie,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*j+b*re,i[15]=_*w+v*O+y*ee+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=on.set(r[0],r[1],r[2]).length(),a=on.set(r[4],r[5],r[6]).length(),o=on.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);let s=1/i,c=1/a,l=1/o;return sn.elements[0]*=s,sn.elements[1]*=s,sn.elements[2]*=s,sn.elements[4]*=c,sn.elements[5]*=c,sn.elements[6]*=c,sn.elements[8]*=l,sn.elements[9]*=l,sn.elements[10]*=l,t.setFromRotationMatrix(sn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Ge){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ge){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},on=new R,sn=new an,cn=new R(0,0,0),ln=new R(1,1,1),un=new R,dn=new R,fn=new R,pn=new an,mn=new Ot,hn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(F(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-F(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(F(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-F(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(F(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-F(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mn.setFromEuler(this),this.setFromQuaternion(mn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER=`XYZ`;var gn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},_n=0,vn=new R,yn=new Ot,bn=new an,xn=new R,Sn=new R,Cn=new R,wn=new Ot,Tn=new R(1,0,0),En=new R(0,1,0),Dn=new R(0,0,1),On={type:`added`},kn={type:`removed`},An={type:`childadded`,child:null},jn={type:`childremoved`,child:null},Mn=class e extends Ke{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:_n++}),this.uuid=Xe(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new hn,r=new Ot,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new an},normalMatrix:{value:new L}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.multiply(yn),this}rotateOnWorldAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.premultiply(yn),this}rotateX(e){return this.rotateOnAxis(Tn,e)}rotateY(e){return this.rotateOnAxis(En,e)}rotateZ(e){return this.rotateOnAxis(Dn,e)}translateOnAxis(e,t){return vn.copy(e).applyQuaternion(this.quaternion),this.position.add(vn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tn,e)}translateY(e){return this.translateOnAxis(En,e)}translateZ(e){return this.translateOnAxis(Dn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xn.copy(e):xn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Sn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Sn,xn,this.up):bn.lookAt(xn,Sn,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),yn.setFromRotationMatrix(bn),this.quaternion.premultiply(yn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,e,Cn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,wn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Mn.DEFAULT_UP=new R(0,1,0),Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new R,Pn=new R,Fn=new R,In=new R,Ln=new R,Rn=new R,zn=new R,Bn=new R,Vn=new R,Hn=new R,Un=new Ct,Wn=new Ct,Gn=new Ct,Kn=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Nn.subVectors(e,t),r.cross(Nn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Nn.subVectors(r,t),Pn.subVectors(n,t),Fn.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(Pn),s=Nn.dot(Fn),c=Pn.dot(Pn),l=Pn.dot(Fn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,In)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,In.x),s.addScaledVector(a,In.y),s.addScaledVector(o,In.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Un.setScalar(0),Wn.setScalar(0),Gn.setScalar(0),Un.fromBufferAttribute(e,t),Wn.fromBufferAttribute(e,n),Gn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Un,i.x),a.addScaledVector(Wn,i.y),a.addScaledVector(Gn,i.z),a}static isFrontFacing(e,t,n,r){return Nn.subVectors(n,t),Pn.subVectors(e,t),Nn.cross(Pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),Nn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ln.subVectors(r,n),Rn.subVectors(i,n),Bn.subVectors(e,n);let s=Ln.dot(Bn),c=Rn.dot(Bn);if(s<=0&&c<=0)return t.copy(n);Vn.subVectors(e,r);let l=Ln.dot(Vn),u=Rn.dot(Vn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ln,a);Hn.subVectors(e,i);let f=Ln.dot(Hn),p=Rn.dot(Hn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Rn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return zn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(zn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ln,a).addScaledVector(Rn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Yn={h:0,s:0,l:0};function Xn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=Ze(e,1),t=F(t,0,1),n=F(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Xn(i,r,e+1/3),this.g=Xn(i,r,e),this.b=Xn(i,r,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=qn[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mt(e.r),this.g=mt(e.g),this.b=mt(e.b),this}copyLinearToSRGB(e){return this.r=ht(e.r),this.g=ht(e.g),this.b=ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return pt.fromWorkingColorSpace(Zn.copy(this),e),Math.round(F(Zn.r*255,0,255))*65536+Math.round(F(Zn.g*255,0,255))*256+Math.round(F(Zn.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Zn.copy(this),t);let n=Zn.r,r=Zn.g,i=Zn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Zn.copy(this),t),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=Re){pt.fromWorkingColorSpace(Zn.copy(this),e);let t=Zn.r,n=Zn.g,r=Zn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Yn);let n=Qe(Jn.h,Yn.h,t),r=Qe(Jn.s,Yn.s,t),i=Qe(Jn.l,Yn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zn=new z;z.NAMES=qn;var Qn=0,$n=class extends Ke{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:Qn++}),this.uuid=Xe(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new z(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},B=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},er=new R,tr=new I,nr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXYZ(t,er.x,er.y,er.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix4(e),this.setXYZ(t,er.x,er.y,er.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyNormalMatrix(e),this.setXYZ(t,er.x,er.y,er.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.transformDirection(e),this.setXYZ(t,er.x,er.y,er.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$e(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$e(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$e(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$e(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$e(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},rr=class extends nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ir=class extends nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},V=class extends nr{constructor(e,t,n){super(new Float32Array(e),t,n)}},ar=0,or=new an,sr=new Mn,cr=new R,lr=new jt,ur=new jt,dr=new R,fr=class e extends Ke{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:ar++}),this.uuid=Xe(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nt(e)?ir:rr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new L().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return or.makeRotationFromQuaternion(e),this.applyMatrix4(or),this}rotateX(e){return or.makeRotationX(e),this.applyMatrix4(or),this}rotateY(e){return or.makeRotationY(e),this.applyMatrix4(or),this}rotateZ(e){return or.makeRotationZ(e),this.applyMatrix4(or),this}translate(e,t,n){return or.makeTranslation(e,t,n),this.applyMatrix4(or),this}scale(e,t,n){return or.makeScale(e,t,n),this.applyMatrix4(or),this}lookAt(e){return sr.lookAt(e),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new V(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];lr.setFromBufferAttribute(n),this.morphTargetsRelative?(dr.addVectors(this.boundingBox.min,lr.min),this.boundingBox.expandByPoint(dr),dr.addVectors(this.boundingBox.max,lr.max),this.boundingBox.expandByPoint(dr)):(this.boundingBox.expandByPoint(lr.min),this.boundingBox.expandByPoint(lr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(lr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ur.setFromBufferAttribute(n),this.morphTargetsRelative?(dr.addVectors(lr.min,ur.min),lr.expandByPoint(dr),dr.addVectors(lr.max,ur.max),lr.expandByPoint(dr)):(lr.expandByPoint(ur.min),lr.expandByPoint(ur.max))}lr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)dr.fromBufferAttribute(a,t),o&&(cr.fromBufferAttribute(e,t),dr.add(cr)),r=Math.max(r,n.distanceToSquared(dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new nr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let c=new R,l=new R,u=new R,d=new I,f=new I,p=new I,m=new R,h=new R;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new R,y=new R,b=new R,x=new R;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new nr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dr.fromBufferAttribute(e,t),dr.normalize(),e.setXYZ(t,dr.x,dr.y,dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new nr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},pr=new an,mr=new rn,hr=new Yt,gr=new R,_r=new R,vr=new R,yr=new R,br=new R,xr=new R,Sr=new R,Cr=new R,H=class extends Mn{constructor(e=new fr,t=new B){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){xr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(br.fromBufferAttribute(s,e),a?xr.addScaledVector(br,r):xr.addScaledVector(br.sub(t),r))}t.add(xr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),mr.copy(e.ray).recast(e.near),!(hr.containsPoint(mr.origin)===!1&&(mr.intersectSphere(hr,gr)===null||mr.origin.distanceToSquared(gr)>(e.far-e.near)**2))&&(pr.copy(i).invert(),mr.copy(e.ray).applyMatrix4(pr),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Tr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Tr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Tr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Tr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function wr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Cr.copy(s),Cr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Cr);return l<n.near||l>n.far?null:{distance:l,point:Cr.clone(),object:e}}function Tr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,_r),e.getVertexPosition(c,vr),e.getVertexPosition(l,yr);let u=wr(e,t,n,r,_r,vr,yr,Sr);if(u){let e=new R;Kn.getBarycoord(Sr,_r,vr,yr,e),i&&(u.uv=Kn.getInterpolatedAttribute(i,s,c,l,e,new I)),a&&(u.uv1=Kn.getInterpolatedAttribute(a,s,c,l,e,new I)),o&&(u.normal=Kn.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};Kn.getNormal(_r,vr,yr,t.normal),u.face=t,u.barycoord=e}return u}var Er=class e extends fr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new V(c,3)),this.setAttribute(`normal`,new V(l,3)),this.setAttribute(`uv`,new V(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Dr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Or(e){let t={};for(let n=0;n<e.length;n++){let r=Dr(e[n]);for(let e in r)t[e]=r[e]}return t}function kr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ar(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pt.workingColorSpace}var jr={clone:Dr,merge:Or},Mr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pr=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mr,this.fragmentShader=Nr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=kr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fr=class extends Mn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ir=new R,Lr=new I,Rr=new I,zr=class extends Fr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ye*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Je*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ye*2*Math.atan(Math.tan(Je*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,Lr,Rr),t.subVectors(Rr,Lr)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Je*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Br=-90,Vr=1,Hr=class extends Mn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new zr(Br,Vr,e,t);r.layers=this.layers,this.add(r);let i=new zr(Br,Vr,e,t);i.layers=this.layers,this.add(i);let a=new zr(Br,Vr,e,t);a.layers=this.layers,this.add(a);let o=new zr(Br,Vr,e,t);o.layers=this.layers,this.add(o);let s=new zr(Br,Vr,e,t);s.layers=this.layers,this.add(s);let c=new zr(Br,Vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ur=class extends St{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wr=class extends Tt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1};this.texture=new Ur([n,n,n,n,n,n],t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps===void 0?!1:t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?o:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Er(5,5,5),i=new Pr({name:`CubemapFromEquirect`,uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new H(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Hr(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Gr=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new z(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Kr=class extends Mn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ue,this.updateRanges=[],this.version=0,this.uuid=Xe()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xe()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xe()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Jr=new R,Yr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix4(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyNormalMatrix(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.transformDirection(e),this.setXYZ(t,Jr.x,Jr.y,Jr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$e(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$e(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$e(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$e(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$e(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new nr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xr=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new z(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zr,Qr=new R,$r=new R,ei=new R,ti=new I,ni=new I,ri=new an,ii=new R,ai=new R,oi=new R,si=new I,ci=new I,li=new I,ui=class extends Mn{constructor(e=new Xr){if(super(),this.isSprite=!0,this.type=`Sprite`,Zr===void 0){Zr=new fr;let e=new qr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute(`position`,new Yr(e,3,0,!1)),Zr.setAttribute(`uv`,new Yr(e,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new I(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),$r.setFromMatrixScale(this.matrixWorld),ri.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ei.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-ei.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;di(ii.set(-.5,-.5,0),ei,a,$r,r,i),di(ai.set(.5,-.5,0),ei,a,$r,r,i),di(oi.set(.5,.5,0),ei,a,$r,r,i),si.set(0,0),ci.set(1,0),li.set(1,1);let o=e.ray.intersectTriangle(ii,ai,oi,!1,Qr);if(o===null&&(di(ai.set(-.5,.5,0),ei,a,$r,r,i),ci.set(0,1),o=e.ray.intersectTriangle(ii,oi,ai,!1,Qr),o===null))return;let s=e.ray.origin.distanceTo(Qr);s<e.near||s>e.far||t.push({distance:s,point:Qr.clone(),uv:Kn.getInterpolation(Qr,ii,ai,oi,si,ci,li,new I),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function di(e,t,n,r,i,a){ti.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ni.copy(ti):(ni.x=a*ti.x-i*ti.y,ni.y=i*ti.x+a*ti.y),e.copy(t),e.x+=ni.x,e.y+=ni.y,e.applyMatrix4(ri)}var fi=class extends St{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pi=class extends nr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mi=new an,hi=new an,gi=[],_i=new jt,vi=new an,yi=new H,bi=new Yt,xi=class extends H{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,vi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),_i.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(_i)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),bi.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(bi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(yi.geometry=this.geometry,yi.material=this.material,yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bi.copy(this.boundingSphere),bi.applyMatrix4(n),e.ray.intersectsSphere(bi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,mi),hi.multiplyMatrices(n,mi),yi.matrixWorld=hi,yi.raycast(e,gi);for(let e=0,n=gi.length;e<n;e++){let n=gi[e];n.instanceId=i,n.object=this,t.push(n)}gi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(r*this.count),r,this.count,O,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Si=new R,Ci=new R,wi=new L,Ti=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Si.subVectors(n,t).cross(Ci.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Si),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wi.getNormalMatrix(e),r=this.coplanarPoint(Si).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new Yt,Di=new R,Oi=class{constructor(e=new Ti,t=new Ti,n=new Ti,r=new Ti,i=new Ti,a=new Ti){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Di.x=r.normal.x>0?e.max.x:e.min.x,Di.y=r.normal.y>0?e.max.y:e.min.y,Di.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Di)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ki=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new z(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ai=new R,ji=new R,Mi=new an,Ni=new rn,Pi=new Yt,Fi=new R,Ii=new R,Li=class extends Mn{constructor(e=new fr,t=new ki){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ai.fromBufferAttribute(t,e-1),ji.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ai.distanceTo(ji);e.setAttribute(`lineDistance`,new V(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere),Pi.applyMatrix4(r),Pi.radius+=i,e.ray.intersectsSphere(Pi)===!1)return;Mi.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Mi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ri(this,e,Ni,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ri(this,e,Ni,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ri(this,e,Ni,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=Ri(this,e,Ni,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ri(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(Ai.fromBufferAttribute(o,i),ji.fromBufferAttribute(o,a),n.distanceSqToSegment(Ai,ji,Fi,Ii)>r)return;Fi.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(Fi);if(!(s<t.near||s>t.far))return{distance:s,point:Ii.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:e}}var zi=new R,Bi=new R,Vi=class extends Li{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)zi.fromBufferAttribute(t,e),Bi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+zi.distanceTo(Bi);e.setAttribute(`lineDistance`,new V(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Hi=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ui=new an,Wi=new rn,Gi=new Yt,Ki=new R,qi=class extends Mn{constructor(e=new fr,t=new Hi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(r),Gi.radius+=i,e.ray.intersectsSphere(Gi)===!1)return;Ui.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Ui);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ki.fromBufferAttribute(l,n),Ji(Ki,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ki.fromBufferAttribute(l,a),Ji(Ki,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ji(e,t,n,r,i,a,o){let s=Wi.distanceSqToPoint(e);if(s<n){let n=new R;Wi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var U=class extends Mn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Yi=class extends St{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xi=class extends St{constructor(e,t,n,i,a,o,s,c,l,u=E){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=m),n===void 0&&u===1027&&(n=y),super(null,i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?r:s,this.minFilter=c===void 0?r:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Zi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new I:new R);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,r=[],i=[],a=[],o=new R,s=new an;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new R)}i[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(F(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(F(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qi=class extends Zi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new I){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$i=class extends Qi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ea(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ta=new R,na=new ea,ra=new ea,ia=new ea,aa=class extends Zi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ta.subVectors(r[0],r[1]).add(r[0]),c=ta);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ta.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ta),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),na.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ra.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ia.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(na.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ra.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ia.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(na.calc(s),ra.calc(s),ia.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function sa(e,t){let n=1-e;return n*n*t}function ca(e,t){return 2*(1-e)*e*t}function la(e,t){return e*e*t}function ua(e,t,n,r){return sa(e,t)+ca(e,n)+la(e,r)}function da(e,t){let n=1-e;return n*n*n*t}function fa(e,t){let n=1-e;return 3*n*n*e*t}function pa(e,t){return 3*(1-e)*e*e*t}function ma(e,t){return e*e*e*t}function ha(e,t,n,r,i){return da(e,t)+fa(e,n)+pa(e,r)+ma(e,i)}var ga=class extends Zi{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,i.x,a.x,o.x),ha(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends Zi{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,i.x,a.x,o.x),ha(e,r.y,i.y,a.y,o.y),ha(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Zi{constructor(e=new I,t=new I){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Zi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Zi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ua(e,r.x,i.x,a.x),ua(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Zi{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ua(e,r.x,i.x,a.x),ua(e,r.y,i.y,a.y),ua(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new I){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(oa(o,s.x,c.x,l.x,u.x),oa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new I().fromArray(n))}return this}},Ca=Object.freeze({__proto__:null,ArcCurve:$i,CatmullRomCurve3:aa,CubicBezierCurve:ga,CubicBezierCurve3:_a,EllipseCurve:Qi,LineCurve:va,LineCurve3:ya,QuadraticBezierCurve:ba,QuadraticBezierCurve3:xa,SplineCurve:Sa}),wa=class extends Zi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ca[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ca[n.type]().fromJSON(n))}return this}},Ta=class extends wa{constructor(e){super(),this.type=`Path`,this.currentPoint=new I,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new va(this.currentPoint.clone(),new I(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ba(this.currentPoint.clone(),new I(e,t),new I(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ga(this.currentPoint.clone(),new I(e,t),new I(n,r),new I(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Sa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Qi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ea=class e extends fr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new R,l=new I;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new V(a,3)),this.setAttribute(`normal`,new V(o,3)),this.setAttribute(`uv`,new V(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},W=class e extends fr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new V(u,3)),this.setAttribute(`normal`,new V(d,3)),this.setAttribute(`uv`,new V(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new I,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Da=class e extends W{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oa=class e extends fr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new V(i,3)),this.setAttribute(`normal`,new V(i.slice(),3)),this.setAttribute(`uv`,new V(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new I,s=new I,c=new I;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},ka=class e extends Oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Aa=class extends Ta{constructor(e){super(e),this.uuid=Xe(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ta().fromJSON(n))}return this}},ja={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ma(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=za(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return Pa(a,o,n,s,c,p,0),o}};function Ma(e,t,n,r,i){let a,o;if(i===co(e,t,n,r)>0)for(a=t;a<n;a+=r)o=ao(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=ao(a,e[a],e[a+1],o);return o&&Za(o,o.next)&&(oo(o),o=o.next),o}function Na(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(Za(n,n.next)||Xa(n.prev,n,n.next)===0)){if(oo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Pa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Wa(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?Ia(e,r,i,a):Fa(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),oo(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=La(Na(e),t,n),Pa(e,t,n,r,i,a,2)):o===2&&Ra(e,t,n,r,i,a):Pa(Na(e),t,n,r,i,a,1);break}}}function Fa(e){let t=e.prev,n=e,r=e.next;if(Xa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ja(i,s,a,c,o,l,m.x,m.y)&&Xa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ia(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Xa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=Ka(p,m,t,n,r),v=Ka(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ja(s,u,c,d,l,f,y.x,y.y)&&Xa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ja(s,u,c,d,l,f,b.x,b.y)&&Xa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ja(s,u,c,d,l,f,y.x,y.y)&&Xa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ja(s,u,c,d,l,f,b.x,b.y)&&Xa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function La(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!Za(i,a)&&Qa(i,r,r.next,a)&&no(i,a)&&no(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),oo(r),oo(r.next),r=e=a),r=r.next}while(r!==e);return Na(r)}function Ra(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ya(o,e)){let s=io(o,e);o=Na(o,o.next),s=Na(s,s.next),Pa(o,t,n,r,i,a,0),Pa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function za(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=Ma(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(qa(l));for(i.sort(Ba),a=0;a<i.length;a++)n=Va(i[a],n);return n}function Ba(e,t){return e.x-t.x}function Va(e,t){let n=Ha(e,t);if(!n)return t;let r=io(n,e);return Na(r,r.next),Na(n,n.next)}function Ha(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&Ja(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),no(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&Ua(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function Ua(e,t){return Xa(e.prev,e,t.prev)<0&&Xa(t.next,e,e.next)<0}function Wa(e,t,n,r){let i=e;do i.z===0&&(i.z=Ka(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ga(i)}function Ga(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function Ka(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function qa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ja(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ya(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!to(e,t)&&(no(e,t)&&no(t,e)&&ro(e,t)&&(Xa(e.prev,e,t.prev)||Xa(e,t.prev,t))||Za(e,t)&&Xa(e.prev,e,e.next)>0&&Xa(t.prev,t,t.next)>0)}function Xa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Za(e,t){return e.x===t.x&&e.y===t.y}function Qa(e,t,n,r){let i=eo(Xa(e,t,n)),a=eo(Xa(e,t,r)),o=eo(Xa(n,r,e)),s=eo(Xa(n,r,t));return!!(i!==a&&o!==s||i===0&&$a(e,n,t)||a===0&&$a(e,r,t)||o===0&&$a(n,e,r)||s===0&&$a(n,t,r))}function $a(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function eo(e){return e>0?1:e<0?-1:0}function to(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Qa(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function no(e,t){return Xa(e.prev,e,e.next)<0?Xa(e,t,e.next)>=0&&Xa(e,e.prev,t)>=0:Xa(e,t,e.prev)<0||Xa(e,e.next,t)<0}function ro(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function io(e,t){let n=new so(e.i,e.x,e.y),r=new so(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function ao(e,t,n,r){let i=new so(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function oo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function so(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function co(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var lo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];uo(e),fo(n,e);let a=e.length;t.forEach(uo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,fo(n,t[e]);let o=ja.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function uo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function fo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var po=class e extends Oa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},mo=class e extends Oa{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ho=class e extends fr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new V(p,3)),this.setAttribute(`normal`,new V(m,3)),this.setAttribute(`uv`,new V(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},go=class e extends fr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new R,p=new I;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new V(s,3)),this.setAttribute(`normal`,new V(c,3)),this.setAttribute(`uv`,new V(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},_o=class e extends fr{constructor(e=new Aa([new I(0,.5),new I(-.5,-.5),new I(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new V(r,3)),this.setAttribute(`normal`,new V(i,3)),this.setAttribute(`uv`,new V(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;lo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];lo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=lo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return vo(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function vo(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var G=class e extends fr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new V(p,3)),this.setAttribute(`normal`,new V(m,3)),this.setAttribute(`uv`,new V(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},yo=class e extends fr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new R,u=new R,d=new R;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new V(o,3)),this.setAttribute(`normal`,new V(s,3)),this.setAttribute(`uv`,new V(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},bo=class e extends fr{constructor(e=new xa(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,s=new R,c=new I,l=new R,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new V(u,3)),this.setAttribute(`normal`,new V(d,3)),this.setAttribute(`uv`,new V(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},K=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xo=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ie,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},So=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Co(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function wo(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var To=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Eo=class extends To{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ne,endingEnd:Ne}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pe:i=e,o=2*t-n;break;case Fe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Pe:a=e,s=2*n-t;break;case Fe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Do=class extends To{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Oo=class extends To{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ko=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ae:t=this.InterpolantFactoryMethodDiscrete;break;case je:t=this.InterpolantFactoryMethodLinear;break;case Me:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ae;case this.InterpolantFactoryMethodLinear:return je;case this.InterpolantFactoryMethodSmooth:return Me}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&wo(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Me,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ko.prototype.TimeBufferType=Float32Array,ko.prototype.ValueBufferType=Float32Array,ko.prototype.DefaultInterpolation=je;var Ao=class extends ko{constructor(e,t,n){super(e,t,n)}};Ao.prototype.ValueTypeName=`bool`,Ao.prototype.ValueBufferType=Array,Ao.prototype.DefaultInterpolation=Ae,Ao.prototype.InterpolantFactoryMethodLinear=void 0,Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends ko{};jo.prototype.ValueTypeName=`color`;var Mo=class extends ko{};Mo.prototype.ValueTypeName=`number`;var No=class extends To{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ot.slerpFlat(i,0,a,c-o,a,c,s);return i}},Po=class extends ko{InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}};Po.prototype.ValueTypeName=`quaternion`,Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends ko{constructor(e,t,n){super(e,t,n)}};Fo.prototype.ValueTypeName=`string`,Fo.prototype.ValueBufferType=Array,Fo.prototype.DefaultInterpolation=Ae,Fo.prototype.InterpolantFactoryMethodLinear=void 0,Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends ko{};Io.prototype.ValueTypeName=`vector`;var Lo=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},Ro=class{constructor(e){this.manager=e===void 0?Lo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ro.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var zo=class extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new z(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Bo=class extends zo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Vo=new an,Ho=new R,Uo=new R,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I(512,512),this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new I(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ho),Uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uo),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Go=new an,Ko=new R,qo=new R,Jo=class extends Wo{constructor(){super(new zr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new I(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ko),qo.copy(n.position),qo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qo),n.updateMatrixWorld(),r.makeTranslation(-Ko.x,-Ko.y,-Ko.z),Go.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go)}},Yo=class extends zo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Jo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Xo=class extends Fr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zo=class extends Wo{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qo=class extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Zo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$o=class extends zr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},es=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ts(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ts();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ts(){return performance.now()}var ns=`\\[\\]\\.:\\/`,rs=RegExp(`[`+ns+`]`,`g`),is=`[^`+ns+`]`,as=`[^`+ns.replace(`\\.`,``)+`]`,os=`((?:WC+[\\/:])*)`.replace(`WC`,is),ss=`(WCOD+)?`.replace(`WCOD`,as),cs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,is),ls=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,is),us=RegExp(`^`+os+ss+cs+ls+`$`),ds=[`material`,`materials`,`bones`,`map`],fs=class{constructor(e,t,n){let r=n||ps.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ps=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(rs,``)}static parseTrackName(e){let t=us.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ds.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ps.Composite=fs,ps.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ps.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ps.prototype.GetterByBindingType=[ps.prototype._getValue_direct,ps.prototype._getValue_array,ps.prototype._getValue_arrayElement,ps.prototype._getValue_toArray],ps.prototype.SetterByBindingTypeAndVersioning=[[ps.prototype._setValue_direct,ps.prototype._setValue_direct_setNeedsUpdate,ps.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ps.prototype._setValue_array,ps.prototype._setValue_array_setNeedsUpdate,ps.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ps.prototype._setValue_arrayElement,ps.prototype._setValue_arrayElement_setNeedsUpdate,ps.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ps.prototype._setValue_fromArray,ps.prototype._setValue_fromArray_setNeedsUpdate,ps.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function ms(e,t,n,r){let i=hs(r);switch(n){case x:return e*t;case w:return e*t;case T:return e*t*2;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case S:return e*t*3/i.components*i.byteLength;case C:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case te:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case M:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case N:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case P:case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function hs(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`172`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`172`);function gs(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _s(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},J={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new L},alphaMap:{value:null},alphaMapTransform:{value:new L},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new L}},envmap:{envMap:{value:null},envMapRotation:{value:new L},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new L}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new L}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new L},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new L},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new L},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new L}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new L}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new L}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new L},alphaTest:{value:0},uvTransform:{value:new L}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new L},alphaMap:{value:null},alphaMapTransform:{value:new L},alphaTest:{value:0}}},vs={basic:{uniforms:Or([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:Or([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new z(0)}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:Or([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:Or([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:Or([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new z(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:Or([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:Or([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:Or([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:Or([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:Or([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:Or([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new L},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new L}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distanceRGBA:{uniforms:Or([J.common,J.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distanceRGBA_vert,fragmentShader:q.distanceRGBA_frag},shadow:{uniforms:Or([J.lights,J.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};vs.physical={uniforms:Or([vs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new L},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new L},clearcoatNormalScale:{value:new I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new L},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new L},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new L},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new L},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new L},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new L},transmissionSamplerSize:{value:new I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new L},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new L},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new L},anisotropyVector:{value:new I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new L}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var ys={r:0,b:0,g:0},bs=new hn,xs=new an;function Ss(e,t,n,r,i,a,o){let s=new z(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new H(new Er(1,1,1),new Pr({name:`BackgroundCubeMaterial`,uniforms:Dr(vs.backgroundCube.uniforms),vertexShader:vs.backgroundCube.vertexShader,fragmentShader:vs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),i.update(u)),bs.copy(n.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xs.makeRotationFromEuler(bs)),u.material.toneMapped=pt.getTransfer(r.colorSpace)!==Ve,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new H(new ho(2,2),new Pr({name:`BackgroundMaterial`,uniforms:Dr(vs.background.uniforms),vertexShader:vs.background.vertexShader,fragmentShader:vs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,`map`,{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=pt.getTransfer(r.colorSpace)!==Ve,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(ys,Ar(e)),r.buffers.color.setClear(ys.r,ys.g,ys.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function Cs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ws(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Ts(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Es(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ti,s=new L,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Ds(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304)if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}else{let a=r.image;if(a&&a.height>0){let o=new Wr(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}else return null}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Os=4,ks=[.125,.215,.35,.446,.526,.582],As=20,js=new Xo,Ms=new z,Ns=null,Ps=0,Fs=0,Is=!1,Ls=(1+Math.sqrt(5))/2,Rs=1/Ls,zs=[new R(-Ls,Rs,0),new R(Ls,Rs,0),new R(-Rs,0,Ls),new R(Rs,0,Ls),new R(0,Ls,-Rs),new R(0,Ls,Rs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ns=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ks(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ns,Ps,Fs),this._renderer.xr.enabled=Is,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ns=this._renderer.getRenderTarget(),Ps=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:C,colorSpace:ze,depthBuffer:!1},r=Hs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hs(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vs(r)),this._blurMaterial=Ws(r,e,t)}return r}_compileMaterial(e){let t=new H(this._lodPlanes[0],e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,n,r){let i=new zr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Ms),s.toneMapping=0,s.autoClear=!1;let u=new B({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new H(new Er,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Ms),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Us(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ks()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new H(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Us(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,js)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=zs[(r-t-1)%zs.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new H(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*As-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):As;m>As&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);let h=[],g=0;for(let e=0;e<As;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Us(t,3*v*(r>_-Os?r-_+Os:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,js)}};function Vs(e){let t=[],n=[],r=[],i=e,a=e-Os+1+ks.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Os?s=ks[o-e+Os-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new fr;h.setAttribute(`position`,new nr(f,3)),h.setAttribute(`uv`,new nr(p,2)),h.setAttribute(`faceIndex`,new nr(m,1)),t.push(h),i>Os&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Hs(e,t,n){let r=new Tt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Us(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ws(e,t,n){let r=new Float32Array(As),i=new R(0,1,0);return new Pr({name:`SphericalGaussianBlur`,defines:{n:As,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gs(){return new Pr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:qs(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ks(){return new Pr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qs(){return`

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
	`}function Js(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Bs(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Bs(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Ys(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ot(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Xs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(nt(n)?ir:rr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Zs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Qs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $s(e,t,n){let r=new WeakMap,i=new Ct;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Et(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new I(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ec(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var tc=new St,nc=new Xi(1,1),rc=new Et,ic=new Dt,ac=new Ur,oc=[],sc=[],cc=new Float32Array(16),lc=new Float32Array(9),uc=new Float32Array(4);function dc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=oc[i];if(a===void 0&&(a=new Float32Array(i),oc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function fc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function pc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function mc(e,t){let n=sc[t];n===void 0&&(n=new Int32Array(t),sc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function hc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fc(n,t))return;e.uniform2fv(this.addr,t),pc(n,t)}}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fc(n,t))return;e.uniform3fv(this.addr,t),pc(n,t)}}function vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fc(n,t))return;e.uniform4fv(this.addr,t),pc(n,t)}}function yc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),pc(n,t)}else{if(fc(n,r))return;uc.set(r),e.uniformMatrix2fv(this.addr,!1,uc),pc(n,r)}}function bc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),pc(n,t)}else{if(fc(n,r))return;lc.set(r),e.uniformMatrix3fv(this.addr,!1,lc),pc(n,r)}}function xc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),pc(n,t)}else{if(fc(n,r))return;cc.set(r),e.uniformMatrix4fv(this.addr,!1,cc),pc(n,r)}}function Sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fc(n,t))return;e.uniform2iv(this.addr,t),pc(n,t)}}function wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fc(n,t))return;e.uniform3iv(this.addr,t),pc(n,t)}}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fc(n,t))return;e.uniform4iv(this.addr,t),pc(n,t)}}function Ec(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fc(n,t))return;e.uniform2uiv(this.addr,t),pc(n,t)}}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fc(n,t))return;e.uniform3uiv(this.addr,t),pc(n,t)}}function kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fc(n,t))return;e.uniform4uiv(this.addr,t),pc(n,t)}}function Ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(nc.compareFunction=515,a=nc):a=tc,n.setTexture2D(t||a,i)}function jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ic,i)}function Mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ac,i)}function Nc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||rc,i)}function Pc(e){switch(e){case 5126:return hc;case 35664:return gc;case 35665:return _c;case 35666:return vc;case 35674:return yc;case 35675:return bc;case 35676:return xc;case 5124:case 35670:return Sc;case 35667:case 35671:return Cc;case 35668:case 35672:return wc;case 35669:case 35673:return Tc;case 5125:return Ec;case 36294:return Dc;case 36295:return Oc;case 36296:return kc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ac;case 35679:case 36299:case 36307:return jc;case 35680:case 36300:case 36308:case 36293:return Mc;case 36289:case 36303:case 36311:case 36292:return Nc}}function Fc(e,t){e.uniform1fv(this.addr,t)}function Ic(e,t){let n=dc(t,this.size,2);e.uniform2fv(this.addr,n)}function Lc(e,t){let n=dc(t,this.size,3);e.uniform3fv(this.addr,n)}function Rc(e,t){let n=dc(t,this.size,4);e.uniform4fv(this.addr,n)}function zc(e,t){let n=dc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Bc(e,t){let n=dc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Vc(e,t){let n=dc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Hc(e,t){e.uniform1iv(this.addr,t)}function Uc(e,t){e.uniform2iv(this.addr,t)}function Wc(e,t){e.uniform3iv(this.addr,t)}function Gc(e,t){e.uniform4iv(this.addr,t)}function Kc(e,t){e.uniform1uiv(this.addr,t)}function qc(e,t){e.uniform2uiv(this.addr,t)}function Jc(e,t){e.uniform3uiv(this.addr,t)}function Yc(e,t){e.uniform4uiv(this.addr,t)}function Xc(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||tc,a[e])}function Zc(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ic,a[e])}function Qc(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ac,a[e])}function $c(e,t,n){let r=this.cache,i=t.length,a=mc(n,i);fc(r,a)||(e.uniform1iv(this.addr,a),pc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||rc,a[e])}function el(e){switch(e){case 5126:return Fc;case 35664:return Ic;case 35665:return Lc;case 35666:return Rc;case 35674:return zc;case 35675:return Bc;case 35676:return Vc;case 5124:case 35670:return Hc;case 35667:case 35671:return Uc;case 35668:case 35672:return Wc;case 35669:case 35673:return Gc;case 5125:return Kc;case 36294:return qc;case 36295:return Jc;case 36296:return Yc;case 35678:case 36198:case 36298:case 36306:case 35682:return Xc;case 35679:case 36299:case 36307:return Zc;case 35680:case 36300:case 36308:case 36293:return Qc;case 36289:case 36303:case 36311:case 36292:return $c}}var tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pc(t.type)}},nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=el(t.type)}},rl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function al(e,t){e.seq.push(t),e.map[t.id]=t}function ol(e,t,n){let r=e.name,i=r.length;for(il.lastIndex=0;;){let a=il.exec(r),o=il.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){al(n,l===void 0?new tl(s,e,t):new nl(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new rl(s),al(n,e)),n=e}}}var sl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ol(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function cl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ll=37297,ul=0;function dl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var fl=new L;function pl(e){pt._getMatrix(fl,pt.workingColorSpace,e);let t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(pt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ml(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+dl(e.getShaderSource(t),r)}else return i}function hl(e,t){let n=pl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function gl(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var _l=new R;function vl(){return pt.getLuminanceCoefficients(_l),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${_l.x.toFixed(4)}, ${_l.y.toFixed(4)}, ${_l.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function yl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Sl).join(`
`)}function bl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function xl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Sl(e){return e!==``}function Cl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tl=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(e){return e.replace(Tl,Ol)}var Dl=new Map;function Ol(e,t){let n=q[t];if(n===void 0){let e=Dl.get(t);if(e!==void 0)n=q[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return El(n)}var kl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(e){return e.replace(kl,jl)}function jl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ml(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Nl(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Pl(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`;break}return t}function Fl(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`;break}return t}function Il(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`;break}return t}function Ll(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Rl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Nl(n),l=Pl(n),u=Fl(n),d=Il(n),f=Ll(n),p=yl(n),m=bl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Sl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Sl).join(`
`),_.length>0&&(_+=`
`)):(g=[Ml(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Sl).join(`
`),_=[Ml(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:gl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,hl(`linearToOutputTexel`,n.outputColorSpace),vl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Sl).join(`
`)),o=El(o),o=Cl(o,n),o=wl(o,n),s=El(s),s=Cl(s,n),s=wl(s,n),o=Al(o),s=Al(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=cl(i,i.VERTEX_SHADER,y),S=cl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ml(i,x,`vertex`),r=ml(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new sl(i,h),T=xl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ll)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ul++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var zl=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vl(e),t.set(e,n)),n}},Vl=class{constructor(e){this.id=zl++,this.code=e,this.usedTimes=0}};function Hl(e,t,n,r,i,a,o){let s=new gn,c=new Bl,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=vs[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=_.isInstancedMesh===!0,ne=_.isBatchedMesh===!0,re=!!a.map,ie=!!a.matcap,ae=!!x,oe=!!a.aoMap,se=!!a.lightMap,ce=!!a.bumpMap,le=!!a.normalMap,ue=!!a.displacementMap,de=!!a.emissiveMap,fe=!!a.metalnessMap,pe=!!a.roughnessMap,me=a.anisotropy>0,he=a.clearcoat>0,ge=a.dispersion>0,_e=a.iridescence>0,ve=a.sheen>0,ye=a.transmission>0,M=me&&!!a.anisotropyMap,be=he&&!!a.clearcoatMap,xe=he&&!!a.clearcoatNormalMap,Se=he&&!!a.clearcoatRoughnessMap,N=_e&&!!a.iridescenceMap,Ce=_e&&!!a.iridescenceThicknessMap,P=ve&&!!a.sheenColorMap,we=ve&&!!a.sheenRoughnessMap,Te=!!a.specularMap,Ee=!!a.specularColorMap,De=!!a.specularIntensityMap,Oe=ye&&!!a.transmissionMap,ke=ye&&!!a.thicknessMap,Ae=!!a.gradientMap,je=!!a.alphaMap,Me=a.alphaTest>0,Ne=!!a.alphaHash,Pe=!!a.extensions,Fe=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:ne,batchingColor:ne&&_._colorsTexture!==null,instancing:te,instancingColor:te&&_.instanceColor!==null,instancingMorph:te&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ze,alphaToCoverage:!!a.alphaToCoverage,map:re,matcap:ie,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:f&&ue,emissiveMap:de,normalMapObjectSpace:le&&a.normalMapType===1,normalMapTangentSpace:le&&a.normalMapType===0,metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:M,clearcoat:he,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:ge,iridescence:_e,iridescenceMap:N,iridescenceThicknessMap:Ce,sheen:ve,sheenColorMap:P,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ye,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:Ne,combine:a.combine,mapUv:re&&h(a.map.channel),aoMapUv:oe&&h(a.aoMap.channel),lightMapUv:se&&h(a.lightMap.channel),bumpMapUv:ce&&h(a.bumpMap.channel),normalMapUv:le&&h(a.normalMap.channel),displacementMapUv:ue&&h(a.displacementMap.channel),emissiveMapUv:de&&h(a.emissiveMap.channel),metalnessMapUv:fe&&h(a.metalnessMap.channel),roughnessMapUv:pe&&h(a.roughnessMap.channel),anisotropyMapUv:M&&h(a.anisotropyMap.channel),clearcoatMapUv:be&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:xe&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:P&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:we&&h(a.sheenRoughnessMap.channel),specularMapUv:Te&&h(a.specularMap.channel),specularColorMapUv:Ee&&h(a.specularColorMap.channel),specularIntensityMapUv:De&&h(a.specularIntensityMap.channel),transmissionMapUv:Oe&&h(a.transmissionMap.channel),thicknessMapUv:ke&&h(a.thicknessMap.channel),alphaMapUv:je&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(le||me),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(re||je),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ee,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:re&&a.map.isVideoTexture===!0&&pt.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&a.emissiveMap.isVideoTexture===!0&&pt.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Pe&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&a.extensions.multiDraw===!0||ne)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=vs[t];n=jr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Rl(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Ul(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Wl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Kl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Wl),r.length>1&&r.sort(t||Gl),i.length>1&&i.sort(t||Gl)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function ql(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Kl,e.set(t,[i])):n>=r.length?(i=new Kl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Jl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new R,color:new z};break;case`SpotLight`:n={position:new R,direction:new R,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new z,groundColor:new z};break;case`RectAreaLight`:n={color:new z,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=n,n}}}function Yl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Xl=0;function Zl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ql(e){let t=new Jl,n=Yl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new an,o=new an;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Zl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Xl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function $l(e){let t=new Ql(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function eu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new $l(e),t.set(n,[a])):r>=i.length?(a=new $l(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var tu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nu=`uniform sampler2D shadow_pass;
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
}`;function ru(e,t,n){let i=new Oi,a=new I,o=new I,s=new Ct,c=new xo({depthPacking:Le}),l=new So,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:tu,fragmentShader:nu}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new fr;h.setAttribute(`position`,new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new H(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new Tt(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Tt(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var iu={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function au(e,t){function n(){let t=!1,n=new Ct,r=null,i=new Ct(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=iu[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new z(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Ct().fromArray(ae),ce=new Ct().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),M(!1),be(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return d[t]===n?!1:(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return m===t?!1:(e.useProgram(t),m=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(fe(e.BLEND),h=!1);return}if(h===!1&&(de(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a=a||n,o=o||r,s=s||i,(n!==_||a!==b)&&(e.blendEquationSeparate(ge[n],ge[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),M(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function M(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function be(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function xe(t){t!==O&&(ee&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):fe(e.POLYGON_OFFSET_FILL)}function N(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),re!==t&&(e.activeTexture(t),re=t)}function P(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+j-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function we(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Pe(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Fe(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Ie(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Re(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},re=null,ie={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new z(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:M,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:N,activeTexture:Ce,bindTexture:P,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Ne,texImage3D:Pe,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:Fe,viewport:Ie,reset:ze}}function ou(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new I,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):rt(`canvas`)}function w(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function T(e){return e.generateMipmaps}function E(e){l.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function k(e,t,n,r,i=!1){if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RG8UI),n===l.UNSIGNED_SHORT&&(a=l.RG16UI),n===l.UNSIGNED_INT&&(a=l.RG32UI),n===l.BYTE&&(a=l.RG8I),n===l.SHORT&&(a=l.RG16I),n===l.INT&&(a=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGB8UI),n===l.UNSIGNED_SHORT&&(a=l.RGB16UI),n===l.UNSIGNED_INT&&(a=l.RGB32UI),n===l.BYTE&&(a=l.RGB8I),n===l.SHORT&&(a=l.RGB16I),n===l.INT&&(a=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(a=l.RGBA16UI),n===l.UNSIGNED_INT&&(a=l.RGBA32UI),n===l.BYTE&&(a=l.RGBA8I),n===l.SHORT&&(a=l.RGBA16I),n===l.INT&&(a=l.RGBA32I)),t===l.RGB&&n===l.UNSIGNED_INT_5_9_9_9_REV&&(a=l.RGB9_E5),t===l.RGBA){let e=i?Be:pt.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),a}function A(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),ne(t),t.isVideoTexture&&y.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ie(t)}function ne(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&re(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function re(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=x.get(n);delete r[t.__cacheKey],h.memory.textures--}function ie(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ae=0;function oe(){ae=0}function se(){let e=ae;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ce(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function le(e,t){let n=f.get(e);if(e.isVideoTexture&&ke(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(n,e,t);return}}d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){ve(n,e,t);return}d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){ve(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){ye(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let pe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},me={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},he={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ge(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,pe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,pe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,pe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,me[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,me[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,he[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function _e(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ee));let r=t.source,i=x.get(r);i===void 0&&(i={},x.set(r,i));let a=ce(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&re(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ve(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=_e(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(l.TEXTURE0+n);let e=pt.getPrimaries(pt.workingColorSpace),s=t.colorSpace===``?null:pt.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=w(t.image,!1,p.maxTextureSize);u=Ae(t,u);let f=m.convert(t.format,t.colorSpace),h=m.convert(t.type),g=k(t.internalFormat,f,h,t.colorSpace,t.isVideoTexture);ge(r,t);let _,v=t.mipmaps,y=t.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=j(t,u);if(t.isDepthTexture)g=A(t.format===D,t.type),b&&(y?d.texStorage2D(l.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(t.isDataTexture)if(v.length>0){y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data);t.generateMipmaps=!1}else y?(b&&d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data);else if(t.isCompressedTexture)if(t.isCompressedArrayTexture){y&&b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let e=0,n=v.length;e<n;e++)if(_=v[e],t.format!==1023)if(f!==null)if(y){if(x)if(t.layerUpdates.size>0){let n=ms(_.width,_.height,t.format,t.type);for(let r of t.layerUpdates){let t=_.data.subarray(r*n/_.data.BYTES_PER_ELEMENT,(r+1)*n/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,r,_.width,_.height,1,f,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,_.data)}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,_.data,0,0);else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else y?x&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)_=v[e],t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,_.data)}else if(t.isDataArrayTexture)if(y){if(b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x)if(t.layerUpdates.size>0){let e=ms(u.width,u.height,t.format,t.type);for(let n of t.layerUpdates){let t=u.data.subarray(n*e/u.data.BYTES_PER_ELEMENT,(n+1)*e/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,n,u.width,u.height,1,f,h,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isData3DTexture)y?(b&&d.texStorage3D(l.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(l.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isFramebufferTexture){if(b)if(y)d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height);else{let e=u.width,t=u.height;for(let n=0;n<S;n++)d.texImage2D(l.TEXTURE_2D,n,g,e,t,0,f,h,null),e>>=1,t>>=1}}else if(v.length>0){if(y&&b){let e=je(v[0]);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f,h,_):d.texImage2D(l.TEXTURE_2D,e,g,f,h,_);t.generateMipmaps=!1}else if(y){if(b){let e=je(u);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(l.TEXTURE_2D,0,g,f,h,u);T(t)&&E(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n){if(t.image.length!==6)return;let r=_e(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=pt.getPrimaries(pt.workingColorSpace),o=t.colorSpace===``?null:pt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=w(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ae(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=k(t.internalFormat,g,_,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);ge(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=je(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}T(t)&&E(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function M(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=k(n.internalFormat,o,s,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Oe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,De(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function be(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=A(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=De(t);Oe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,s,a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,s,a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=k(i.internalFormat,a,o,i.colorSpace),c=De(t);n&&Oe(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):Oe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function xe(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let n=f.get(t.depthTexture);n.__renderTarget=t,(!n.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),le(t.depthTexture,0);let r=n.__webglTexture,i=De(t);if(t.depthTexture.format===1026)Oe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0);else if(t.depthTexture.format===1027)Oe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function Se(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);xe(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),be(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),be(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function N(e,t,n){let r=f.get(e);t!==void 0&&M(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Se(e)}function Ce(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,te);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Oe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=k(r.internalFormat,a,o,r.colorSpace,e.isXRRenderTarget===!0),c=De(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),be(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)M(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else M(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);T(t)&&E(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r);d.bindTexture(l.TEXTURE_2D,a.__webglTexture),ge(l.TEXTURE_2D,r),M(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,l.TEXTURE_2D,0),T(r)&&E(l.TEXTURE_2D)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ge(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)M(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else M(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);T(t)&&E(i),d.unbindTexture()}e.depthBuffer&&Se(e)}function P(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let we=[],Te=[];function Ee(e){if(e.samples>0){if(Oe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(we.length=0,Te.length=0,we.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(we.push(a),Te.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Te)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,we))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function De(e){return Math.min(p.maxSamples,e.samples)}function Oe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function ke(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ae(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(pt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=se,this.resetTextureUnits=oe,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=N,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=M,this.useMultisampledRTT=Oe}function su(e,t){function n(n,r=``){let i,a=pt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var cu={type:`move`},lu=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new U,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new U,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new U,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cu)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new U;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},uu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,du=`
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

}`,fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new St,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pr({vertexShader:uu,fragmentShader:du,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new ho(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pu=class extends Ke{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=new fu,_=t.getContextAttributes(),v=null,b=null,x=[],S=[],w=new I,T=null,O=new zr;O.viewport=new Ct;let k=new zr;k.viewport=new Ct;let A=[O,k],j=new $o,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new lu,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new lu,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new lu,x[e]=t),t.getHandSpace()};function ne(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,te=null,g.reset(),e.setRenderTarget(v),p=null,f=null,d=null,r=null,b=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.enabledFeatures!==void 0&&r.enabledFeatures.includes(`layers`)){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?D:E,a=_.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Tt(f.textureWidth,f.textureHeight,{format:C,type:l,depthTexture:new Xi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Tt(p.framebufferWidth,p.framebufferHeight,{format:C,type:l,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ae=new R,oe=new R;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=k.near=O.near=t,j.far=k.far=O.far=n,(ee!==j.near||te!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,te=j.far),O.layers.mask=e.layers.mask|2,k.layers.mask=e.layers.mask|4,j.layers.mask=O.layers.mask|k.layers.mask;let i=e.parent,a=j.cameras;ce(j,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(j,O,k):j.projectionMatrix.copy(O.projectionMatrix),le(e,j,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ye*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)};let ue=null;function de(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=d.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(b,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(b))}let o=A[r];o===void 0&&(o=new zr,o.layers.enable(r),o.viewport=new Ct,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=d.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&g.init(e,n,r.renderState)}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let fe=new gs;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},mu=new hn,hu=new an;function gu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ar(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,mu.copy(o),mu.x*=-1,mu.y*=-1,mu.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(mu.y*=-1,mu.z*=-1),e.envMapRotation.value.setFromMatrix4(hu.makeRotationFromEuler(mu)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function _u(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var vu=class{constructor(e={}){let{canvas:t=it(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),_=new Int32Array(4),v=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this.toneMapping=0,this.toneMappingExposure=1;let S=this,C=!1,w=0,T=0,E=null,D=-1,O=null,k=new Ct,A=new Ct,j=null,ee=new z(0),te=0,ne=t.width,re=t.height,ie=1,ae=null,oe=null,se=new Ct(0,0,ne,re),ce=new Ct(0,0,ne,re),le=!1,ue=new Oi,de=!1,fe=!1;this.transmissionResolutionScale=1;let pe=new an,me=new an,he=new R,ge=new Ct,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return E===null?ie:1}let M=n;function be(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r172`),t.addEventListener(`webglcontextlost`,qe,!1),t.addEventListener(`webglcontextrestored`,Je,!1),t.addEventListener(`webglcontextcreationerror`,Ye,!1),M===null){let t=`webgl2`;if(M=be(t,e),M===null)throw be(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let xe,Se,N,Ce,P,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Be,Ve,He,Ue,We;function Ge(){xe=new Ys(M),xe.init(),He=new su(M,xe),Se=new Ts(M,xe,e,He),N=new au(M,xe),Se.reverseDepthBuffer&&p&&N.buffers.depth.setReversed(!0),Ce=new Qs(M),P=new Ul,we=new ou(M,xe,N,P,Se,He,Ce),Te=new Ds(S),Ee=new Js(S),De=new _s(M),Ue=new Cs(M,De),Oe=new Xs(M,De,Ce,Ue),ke=new ec(M,Oe,De,Ce),Le=new $s(M,Se,we),Pe=new Es(P),Ae=new Hl(S,Te,Ee,xe,Se,Ue,Pe),je=new gu(S,P),Me=new ql,Ne=new eu(xe),Ie=new Ss(S,Te,Ee,N,ke,m,s),Fe=new ru(S,ke,Se),We=new _u(M,Ce,Se,N),Be=new ws(M,xe,Ce),Ve=new Zs(M,xe,Ce),Ce.programs=Ae.programs,S.capabilities=Se,S.extensions=xe,S.properties=P,S.renderLists=Me,S.shadowMap=Fe,S.state=N,S.info=Ce}Ge();let Ke=new pu(S,M);this.xr=Ke,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(e){e!==void 0&&(ie=e,this.setSize(ne,re,!1))},this.getSize=function(e){return e.set(ne,re)},this.setSize=function(e,n,r=!0){if(Ke.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}ne=e,re=n,t.width=Math.floor(e*ie),t.height=Math.floor(n*ie),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ne*ie,re*ie).floor()},this.setDrawingBufferSize=function(e,n,r){ne=e,re=n,ie=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(k)},this.getViewport=function(e){return e.copy(se)},this.setViewport=function(e,t,n,r){e.isVector4?se.set(e.x,e.y,e.z,e.w):se.set(e,t,n,r),N.viewport(k.copy(se).multiplyScalar(ie).round())},this.getScissor=function(e){return e.copy(ce)},this.setScissor=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),N.scissor(A.copy(ce).multiplyScalar(ie).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(e){N.setScissorTest(le=e)},this.setOpaqueSort=function(e){ae=e},this.setTransparentSort=function(e){oe=e},this.getClearColor=function(e){return e.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Ie.getClearColor(),r=Ie.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,M.clearBufferuiv(M.COLOR,0,h)):(_[0]=i,_[1]=a,_[2]=o,_[3]=r,M.clearBufferiv(M.COLOR,0,_))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,qe,!1),t.removeEventListener(`webglcontextrestored`,Je,!1),t.removeEventListener(`webglcontextcreationerror`,Ye,!1),Ie.dispose(),Me.dispose(),Ne.dispose(),P.dispose(),Te.dispose(),Ee.dispose(),ke.dispose(),Ue.dispose(),We.dispose(),Ae.dispose(),Ke.dispose(),Ke.removeEventListener(`sessionstart`,I),Ke.removeEventListener(`sessionend`,L),tt.stop()};function qe(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function Je(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=Ce.autoReset,t=Fe.enabled,n=Fe.autoUpdate,r=Fe.needsUpdate,i=Fe.type;Ge(),Ce.autoReset=e,Fe.enabled=t,Fe.autoUpdate=n,Fe.needsUpdate=r,Fe.type=i}function Ye(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Xe(e){let t=e.target;t.removeEventListener(`dispose`,Xe),F(t)}function F(e){Ze(e),P.remove(e)}function Ze(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){Ae.releaseProgram(e)}),e.isShaderMaterial&&Ae.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=_e);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=gt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Oe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ue.setup(i,r,s,n,c);let h,g=Be;if(c!==null&&(h=De.get(c),g=Ve,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*ye()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*ye()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(xe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?De.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Qe(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ft(e,t,n),e.side=0,e.needsUpdate=!0,ft(e,t,n),e.side=2):ft(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=Ne.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Qe(a,n,e),r.add(a)}else Qe(t,n,e),r.add(t)}),x.pop(),y=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){P.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}xe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let $e=null;function et(e){$e&&$e(e)}function I(){tt.stop()}function L(){tt.start()}let tt=new gs;tt.setAnimationLoop(et),typeof self<`u`&&tt.setContext(self),this.setAnimationLoop=function(e){$e=e,Ke.setAnimationLoop(e),e===null?tt.stop():tt.start()},Ke.addEventListener(`sessionstart`,I),Ke.addEventListener(`sessionend`,L),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(t),t=Ke.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=Ne.get(e,x.length),y.init(t),x.push(y),me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ue.setFromProjectionMatrix(me),fe=this.localClippingEnabled,de=Pe.init(this.clippingPlanes,fe),v=Me.get(e,b.length),v.init(),b.push(v),Ke.enabled===!0&&Ke.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&nt(e,t,-1/0,S.sortObjects)}nt(e,t,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ae,oe),ve=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,ve&&Ie.addToRenderList(v,e),this.info.render.frame++,de===!0&&Pe.beginShadows();let n=y.state.shadowsArray;Fe.render(n,e,t),de===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=v.opaque,i=v.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];at(r,i,e,a)}ve&&Ie.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];rt(v,e,r,r.viewport)}}else i.length>0&&at(r,i,e,t),ve&&Ie.render(e),rt(v,e,t);E!==null&&T===0&&(we.updateMultisampleRenderTarget(E),we.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),Ue.resetDefaultState(),D=-1,O=null,x.pop(),x.length>0?(y=x[x.length-1],de===!0&&Pe.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),v=b.length>0?b[b.length-1]:null};function nt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ue.intersectsSprite(e)){r&&ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);let t=ke.update(e),i=e.material;i.visible&&v.push(e,t,i,n,ge.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ue.intersectsObject(e))){let t=ke.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ge.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ge.copy(e.boundingSphere.center)),ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&v.push(e,t,s,n,ge.z,o)}}else i.visible&&v.push(e,t,i,n,ge.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)nt(i[e],t,n,r)}function rt(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),de===!0&&Pe.setGlobalState(S.clippingPlanes,n),r&&N.viewport(k.copy(r)),i.length>0&&ut(i,t,n),a.length>0&&ut(a,t,n),o.length>0&&ut(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function at(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new Tt(1,1,{generateMipmaps:!0,type:xe.has(`EXT_color_buffer_half_float`)||xe.has(`EXT_color_buffer_float`)?g:l,minFilter:c,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||k;a.setSize(o.z*S.transmissionResolutionScale,o.w*S.transmissionResolutionScale);let s=S.getRenderTarget();S.setRenderTarget(a),S.getClearColor(ee),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear(),ve&&Ie.render(n);let u=S.toneMapping;S.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),de===!0&&Pe.setGlobalState(S.clippingPlanes,r),ut(e,n,r),we.updateMultisampleRenderTarget(a),we.updateRenderTargetMipmap(a),xe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,dt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(we.updateMultisampleRenderTarget(a),we.updateRenderTargetMipmap(a))}S.setRenderTarget(s),S.setClearColor(ee,te),d!==void 0&&(r.viewport=d),S.toneMapping=u}function ut(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&dt(o,t,n,s,c,l)}}function dt(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function ft(e,t,n){t.isScene!==!0&&(t=_e);let r=P.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=Ae.getParameters(e,i.state,a,t,n),c=Ae.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Ee:Te).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Xe),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return ht(e,s),u}else s.uniforms=Ae.getUniforms(e),e.onBeforeCompile(s,S),u=Ae.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Pe.uniform),ht(e,s),r.needsLights=vt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function mt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=sl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ht(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function gt(e,t,n,r,i){t.isScene!==!0&&(t=_e),we.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ze,c=(r.isMeshStandardMaterial?Ee:Te).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=P.get(r),v=y.state.lights;if(de===!0&&(fe===!0||e!==O)){let t=e===O&&r.id===D;Pe.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Pe.numPlanes||_.numIntersection!==Pe.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=ft(r,t,i));let C=!1,w=!1,T=!1,k=x.getUniforms(),A=_.uniforms;if(N.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||O!==e){N.buffers.depth.getReversed()?(pe.copy(e.projectionMatrix),ct(pe),lt(pe),k.setValue(M,`projectionMatrix`,pe)):k.setValue(M,`projectionMatrix`,e.projectionMatrix),k.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(M,he.setFromMatrixPosition(e.matrixWorld)),Se.logarithmicDepthBuffer&&k.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),O!==e&&(O=e,w=!0,T=!0)}if(i.isSkinnedMesh){k.setOptional(M,i,`bindMatrix`),k.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(M,`boneTexture`,e.boneTexture,we))}i.isBatchedMesh&&(k.setOptional(M,i,`batchingTexture`),k.setValue(M,`batchingTexture`,i._matricesTexture,we),k.setOptional(M,i,`batchingIdTexture`),k.setValue(M,`batchingIdTexture`,i._indirectTexture,we),k.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(M,`batchingColorTexture`,i._colorsTexture,we));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Le.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(M,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(M,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&_t(A,T),a&&r.fog===!0&&je.refreshFogUniforms(A,a),je.refreshMaterialUniforms(A,r,ie,re,y.state.transmissionRenderTarget[e.id]),sl.upload(M,mt(_),A,we)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(sl.upload(M,mt(_),A,we),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(M,`center`,i.center),k.setValue(M,`modelViewMatrix`,i.modelViewMatrix),k.setValue(M,`normalMatrix`,i.normalMatrix),k.setValue(M,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];We.update(n,x),We.bind(n,x)}}return x}function _t(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function vt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=n;let r=P.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||xe.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let yt=M.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=P.get(e);if(s.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(M.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)we.setupRenderTarget(e);else if(s.__hasExternalTextures)we.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);we.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&we.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,k.copy(e.viewport),A.copy(e.scissor),j=e.scissorTest}else k.copy(se).multiplyScalar(ie).floor(),A.copy(ce).multiplyScalar(ie).floor(),j=le;if(n!==0&&(i=yt),N.bindFramebuffer(M.FRAMEBUFFER,i)&&r&&N.drawBuffers(e,i),N.viewport(k),N.scissor(A),N.setScissorTest(j),a){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=P.get(e.texture),i=t;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,n,i)}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){N.bindFramebuffer(M.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!Se.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Se.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,He.convert(s),He.convert(c),a)}finally{let e=E===null?null:P.get(E).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!Se.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Se.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,s);let e=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,e),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,He.convert(c),He.convert(l),0);let o=E===null?null:P.get(E).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,o);let u=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await st(M,u,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,e),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.deleteBuffer(e),M.deleteSync(u),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(ot(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;we.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()};let bt=M.createFramebuffer(),xt=M.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){e.isTexture!==!0&&(ot(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],a=arguments[3]||0,n=null),a===null&&(i===0?a=0:(ot(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=He.convert(t.format),_=He.convert(t.type),v;t.isData3DTexture?(we.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(we.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(we.setTexture2D(t,0),v=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=M.getParameter(M.UNPACK_ROW_LENGTH),b=M.getParameter(M.UNPACK_IMAGE_HEIGHT),x=M.getParameter(M.UNPACK_SKIP_PIXELS),S=M.getParameter(M.UNPACK_SKIP_ROWS),C=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,l),M.pixelStorei(M.UNPACK_SKIP_ROWS,u),M.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,bt),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,xt);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);M.pixelStorei(M.UNPACK_ROW_LENGTH,y),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),M.pixelStorei(M.UNPACK_SKIP_PIXELS,x),M.pixelStorei(M.UNPACK_SKIP_ROWS,S),M.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(ot(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),ot(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&we.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?we.setTextureCube(e,0):e.isData3DTexture?we.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?we.setTexture2DArray(e,0):we.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,N.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}},yu=1.8,bu=.85,xu=.98,Su=.003,Cu=1.7,wu=[0,625,2500],Tu=[16,8,-1],Eu=.35,Du=2.5,Ou=.15,ku=.05,Au={CLEAR:{puff:1,jelly:1,deer:1,moth:1},MISTY:{puff:.8,jelly:1.2,deer:1,moth:1.3},LIGHT_RAIN:{puff:.7,jelly:1.4,deer:.8,moth:.6},HEAVY_RAIN:{puff:.5,jelly:.5,deer:.5,moth:.5},FOG_BANK:{puff:.6,jelly:1.3,deer:.9,moth:1.5},LUMINOUS_STORM:{puff:.5,jelly:.5,deer:.5,moth:.5}},ju=1.2,Mu={center:120,tol:50},Nu={center:240,tol:55},Pu={center:390,tol:60},Fu={center:550,tol:65},Y={sky:528408,fog:396308,ground:1720360,bark:5914672,leaf:1722400,leafGlow:4521898,mushCap:8926190,mushGlow:13400063,mushStem:2756928,crystal:3407837,crystalCore:8978414,firefly:15662950,fireflyB:6750173,spore:12320665,ambient:2241365,moon:12307694,moon2:2241365,playerLight:6719624,jellyBell:7833855,jellyGlow:11193599,jellyTent:6715340,puffBody:16768460,puffGlow:16755336,puffEye:2236962,puffCheek:16746649,deerBody:11202303,deerGlow:8969727,deerAntler:13434862,deerEye:1127236,mothWing:11206553,mothGlow:13434794,mothBody:5596723,mothSpot:16777215,luminidBody:2241348,luminidGlow:4491519,luminidCore:16777215,grass1:1721376,grass2:865048,grassTip:3385941,grassPurple:[1706530,2363962,4857960,11158766,13400063,16746717,2757952,6697898,11158783],grassBlue:[660514,858677,2114917,4500206,6741503,8974079,1387077,3368618,4500223],grassTeal:[662042,1059362,2121808,4517563,6750173,11206536,1720376,3385992,4521915],fern:1725744,fernGlow:3394662,flower:16742348,flowerGlow:16751069,flowerStem:1721376,reed:2774325,reedTip:4504422,orbGold:16763955,orbGlow:16772778,orbInner:16775389,laserPink:16737962,laserGlow:16746700,obeliskBlack:657938,obeliskPink:16729258,moatBlue:3377356,moatGlow:1136042,moatStone:4491468,rainbow:[16724787,16746547,16772659,3407718,3377407,8926207],wispCore:11202303,wispGlow:14544639,wispTrail:8965375,dandStem:4482611,dandHead:16777198,dandSeed:16775389,dandSeedGlow:16777215,fairyMush:13404415,fairyGlow:14527231,fairyRing:11167470,bubbleIris:11197951,bubbleShine:16777215,bubblePop:13434862,starMote:16772829,starGlow:16777164,pondWater:2254506,pondGlow:3377356,lilyPad:2263108,lilyFlower:16746700,lilyGlow:16755421,echoBloom:11206604,echoWave:8978363,rockBase:10132128,rockLight:11184814,rockMoss:1721378,rockEmissive:1714716,rockGranite:[10132128,11184814,9079442,11579576],rockSandstone:[11180672,12628120,10127989,13680808],rockLimestone:[11579560,12632248,9474184,14211280],rockSlate:[7372944,8425632,6320256,10004664],rockBasalt:[7368824,8421512,6316136,9474200],skyDeep:198160,skyNeb1:2230323,skyNeb2:530483,skyNeb3:1706024,skyNeb4:662050,skyNeb5:1575464,skyStarBright:16777215,skyStarDim:8952251,skyStarWarm:16768426,skyStarCool:11193599,skyGalaxy:6706568,skyAnomaly:[16729224,4521932,16755234,8930559,2285055,16737860],skyConstLine:3359846,thornOrb:16755268,thornOrbGlow:16764006,thornPetal:6689075,thornSpike:2759184,thornStem:1717024,helixStem:1714240,helixPod:6697983,helixPodGlow:8934911,helixRing:4465322,helixNode:5588172,snapBody:2271846,snapBodyGlow:4521864,snapTip:6750122,snapTipGlow:8978380,snapFrond:1730116,spiralStem:1716288,spiralFrond:2271880,spiralGlow:4521932,spiralTip:8978414,corpseSpathe:5574946,corpseColumn:8921668,corpseGlow:13382485,corpseLeaf:1717016,orbBushLeaf:2245666,orbBushOrb:16746700,orbBushGlow:16755421,orbBushStem:1718312,lanternStem:2769954,lanternPod:16768358,lanternGlow:16772744,lanternHaze:16763972,veilSupport:3816e3,veilMoss:4508808,veilGlow:6750122,veilEdge:8978380,groundGlowColors:[3407837,4521898,13400063,4500206,8978380],deerChest:13431039,deerNose:2245717,deerEyeHighlight:16777215,deerInnerEar:14535918,deerNostril:1122850,deerHoof:6715272,deerFetlock:14544639,deerTailTip:16777215,deerThroat:13430510,deerBelly:14544622,deerSpot:13434862,deerDew:15663103,deerDewEmissive:11197951,deerMane:14544639,puffBelly:16773344,puffBrow:3351057,puffMushroom:16729156,puffMoss:4491298,puffTail:16777215,jellyOrgan:12312063,jellySpot:15663103,jellyTip:14544639,jellyMucus:14548991,mothFur:15658717,mothAbdomen:14540236,mothSegment:14540219,mothEye:1122867,mothEyeEmissive:1717077,mothAntenna:14535816,mothEdge:6702131,mothSpotRing:16772693,mothSpotDark:2241348,mothLeg:13421755,luminidShell:8965375,luminidShellEmissive:2245802,luminidHalo:4491519,luminidLeg:2241348,luminidLegEmissive:1122867,questPink1:6692928,questPink1Glow:16724889,questPink1Core:16737996,questPink2:4855888,questPink2Glow:13386973,questPink2Core:15628287,questPink3:5577264,questPink3Glow:16729241,questPink3Core:16746700,questPink4:3807328,questPink4Glow:11158766,questPink4Core:13400063,questPink5:5251136,questPink5Glow:15619515,questPink5Core:16751069,dustBase:8956535,rainDrop:8952251,skyWisp1:2245802,skyWisp2:2245734,skyWisp3:4465254,skyWisp4:5583701,skyWisp5:3368584,skyWisp6:2245717,skyWisp7:3809894,skyClusterGlow:3359846,skyZenithCap:198160,skyConstJelly:6737151,skyConstPuff:16755336,skyConstMoth:8978278,skyConstDeer:6750156,skyConstConverge:16768324,groundEmissive:1718304,white:16777215,black:0,glitterPurple:11158783,obeliskChamber:3351108,obeliskScratch:1710626,obeliskBase:1118488,obeliskInterior:2236979,obeliskRubble:921108,obeliskLight:8939212,transformTrunk:6964528,transformTrunkGlow:13404228,transformGroundGlow:5905018,skyCloud1:1717094,skyCloud2:2758741,skyCloud3:1721446,skyCloud4:3348548,skyCloud5:2245768,skyCloud6:4465220,skyCloud7:1586005,skyCloud8:2765670,skyMoonGlow:4478310,skyMoonCore:6719658,skyMoonWarm:8943462,skyMoonShadow:132104,auroraMutedGreen:1734485,auroraMutedTeal:2787447,auroraPaleSage:5601126,auroraMutedPurple:6706568,auroraMutedRose:8930406,auroraDarkTeal:3368533,duskSky:923685,duskFog:791584,duskMoon:14527112,duskAmbSky:4469589,duskAmbGnd:2238488,nightSky:330264,nightFog:528408,nightMoon:12307694,nightAmbSky:3359846,nightAmbGnd:1587232,deepSky:198160,deepFog:397332,deepMoon:8952251,deepAmbSky:1712708,deepAmbGnd:1188888,dawnSky:1187888,dawnFog:923688,dawnMoon:13417386,dawnAmbSky:3354197,dawnAmbGnd:1843224,mistColor:5596791},Iu=new vu({antialias:!0,powerPreference:`default`});Iu.setSize(window.innerWidth,window.innerHeight),Iu.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),Iu.shadowMap.enabled=!0,Iu.shadowMap.type=2,Iu.toneMapping=4,Iu.toneMappingExposure=2.8,Iu.outputColorSpace=Re,document.body.appendChild(Iu.domElement);var Lu=new zr(65,window.innerWidth/window.innerHeight,.1,300),Ru=new es,X=new Kr;X.background=new z(Y.skyDeep),X.fog=new Gr(Y.fog,.01),window.addEventListener(`resize`,()=>{Lu.aspect=window.innerWidth/window.innerHeight,Lu.updateProjectionMatrix(),Iu.setSize(window.innerWidth,window.innerHeight)}),document.addEventListener(`visibilitychange`,()=>{document.hidden||Ru.getDelta()});var zu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Bu=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Vu=new Xo(-1,1,1,-1,0,1),Hu=new class extends fr{constructor(){super(),this.setAttribute(`position`,new V([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new V([0,2,0,0,2,0],2))}},Uu=class{constructor(e){this._mesh=new H(Hu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Wu=class extends Bu{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof Pr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=jr.clone(e.uniforms),this.material=new Pr({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Uu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},Gu=class extends Bu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Ku=class extends Bu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},qu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new I);this._width=n.width,this._height=n.height,t=new Tt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wu(zu),this.copyPass.material.blending=0,this.clock=new es}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Gu!==void 0&&(r instanceof Gu?n=!0:r instanceof Ku&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new I);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ju=class extends Bu{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new z}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Yu={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new z(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Xu=class e extends Bu{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new I(256,256):new I(e.x,e.y),this.clearColor=new z(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Tt(i,a,{type:g}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Tt(i,a,{type:g});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Tt(i,a,{type:g});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Yu;this.highPassUniforms=jr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pr({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new I(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=zu;this.copyUniforms=jr.clone(l.uniforms),this.blendMaterial=new Pr({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new z,this.oldClearAlpha=1,this.basic=new B,this.fsQuad=new Uu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new I(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Pr({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new I(.5,.5)},direction:{value:new I(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Pr({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Xu.BlurDirectionX=new I(1,0),Xu.BlurDirectionY=new I(0,1);var Zu={uniforms:{tDiffuse:{value:null},saturation:{value:1}},vertexShader:`
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
  `},Qu=null,$u=!0,ed=null,td=null;try{let e=new Ju(X,Lu);ed=new Xu(new I(Math.min(512,Math.floor(window.innerWidth/2)),Math.min(512,Math.floor(window.innerHeight/2))),.6,.4,.85),td=new Wu(Zu),Qu=new qu(Iu),Qu.addPass(e),Qu.addPass(ed),Qu.addPass(td)}catch(e){console.warn(`Bloom unavailable, falling back to direct render:`,e.message),$u=!1}window.addEventListener(`resize`,()=>{if($u&&Qu&&(Qu.setSize(window.innerWidth,window.innerHeight),ed)){let e=Math.min(512,Math.floor(window.innerWidth/2)),t=Math.min(512,Math.floor(window.innerHeight/2));ed.resolution.set(e,t)}});function nd(){$u&&Qu?Qu.render():Iu.render(X,Lu)}var rd=new Bo(Y.ambient,Y.ground,.75);X.add(rd);var id=new Qo(Y.moon,.85);id.position.set(30,60,-20),id.castShadow=!0,id.shadow.camera.left=-90,id.shadow.camera.right=90,id.shadow.camera.top=90,id.shadow.camera.bottom=-90,id.shadow.camera.near=1,id.shadow.camera.far=250,id.shadow.mapSize.set(1024,1024),id.shadow.bias=-.001,id.shadow.autoUpdate=!1,id.shadow.needsUpdate=!0,X.add(id);var ad=new Qo(Y.moon2,.35);ad.position.set(-40,45,25),X.add(ad);var od=new Yo(Y.playerLight,.6,20);X.add(od);var sd=[];function cd(){for(let e=0;e<4;e++){let e=new Yo(16777215,0,10);X.add(e),sd.push(e)}}var ld=sd;function ud(){cd()}var dd={},fd=0,pd=0,md=!1,hd=!1,gd=0,_d=0,vd=!1,yd=!1,bd=!1,xd=!1,Sd=0,Cd=window.innerHeight,wd=!1,Td=.5,Ed=null,Dd=null,Od=0,kd=0,Ad=null;function jd(e){Ad=e}function Md(e){hd=e}function Nd(e){fd=e}function Pd(e){pd=e}function Fd(e){yd=e}function Id(){!hd&&Ad&&Ad()}window.addEventListener(`keydown`,e=>{dd[e.code]=!0,`Space ShiftLeft ShiftRight KeyW KeyA KeyS KeyD`.split(` `).indexOf(e.code)>=0&&e.preventDefault(),Id()}),window.addEventListener(`keyup`,e=>{dd[e.code]=!1}),window.addEventListener(`blur`,()=>{for(let e in dd)dd[e]=!1;md=!1,xd=!1}),window.addEventListener(`resize`,()=>{Cd=window.innerHeight}),Iu.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),Iu.domElement.addEventListener(`mousedown`,e=>{e.button===2?(xd=!0,Id()):(md=!0,Id())}),window.addEventListener(`mouseup`,e=>{e.button===2?xd=!1:md=!1}),window.addEventListener(`mousemove`,e=>{Sd=e.clientY,md&&(fd-=e.movementX*Su,pd-=e.movementY*Su,pd=Math.max(-1,Math.min(1,pd)))});var Ld=`ontouchstart`in window||navigator.maxTouchPoints>0,Rd=document.getElementById(`joy-zone`),zd=document.getElementById(`joy-knob`),Bd=document.getElementById(`btn-jump`),Vd=document.getElementById(`btn-sprint`);Ld&&(Rd.style.display=`block`,Bd.style.display=`block`,Vd&&(Vd.style.display=`block`),document.getElementById(`controls`).textContent=`Stick: Move · Drag right: Look · JUMP · SPRINT · HUM`);function Hd(e,t){let n=Rd.getBoundingClientRect(),r=e-(n.left+n.width/2),i=t-(n.top+n.height/2),a=Math.sqrt(r*r+i*i);a>52&&(r=r/a*52,i=i/a*52),gd=r/52,_d=i/52,zd.style.left=40+r+`px`,zd.style.top=40+i+`px`}Rd.addEventListener(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),Id();let t=e.changedTouches[0];Ed=t.identifier,vd=!0,Hd(t.clientX,t.clientY)},{passive:!1}),Rd.addEventListener(`touchmove`,e=>{e.preventDefault(),e.stopPropagation();for(let t=0;t<e.changedTouches.length;t++)e.changedTouches[t].identifier===Ed&&Hd(e.changedTouches[t].clientX,e.changedTouches[t].clientY)},{passive:!1}),Rd.addEventListener(`touchend`,e=>{e.preventDefault(),e.stopPropagation();for(let t=0;t<e.changedTouches.length;t++)e.changedTouches[t].identifier===Ed&&(Ed=null,vd=!1,gd=0,_d=0,zd.style.left=`40px`,zd.style.top=`40px`)},{passive:!1}),Rd.addEventListener(`touchcancel`,e=>{e.preventDefault(),e.stopPropagation();for(let t=0;t<e.changedTouches.length;t++)e.changedTouches[t].identifier===Ed&&(Ed=null,vd=!1,gd=0,_d=0,zd.style.left=`40px`,zd.style.top=`40px`)},{passive:!1}),Bd.addEventListener(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),Id(),yd=!0},{passive:!1}),Bd.addEventListener(`touchend`,e=>{e.preventDefault(),e.stopPropagation(),yd=!1},{passive:!1}),Bd.addEventListener(`touchcancel`,e=>{e.preventDefault(),e.stopPropagation(),yd=!1},{passive:!1}),Vd&&(Vd.addEventListener(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),Id(),bd=!0},{passive:!1}),Vd.addEventListener(`touchend`,e=>{e.preventDefault(),e.stopPropagation(),bd=!1},{passive:!1}),Vd.addEventListener(`touchcancel`,e=>{e.preventDefault(),e.stopPropagation(),bd=!1},{passive:!1}));var Ud=document.getElementById(`hum-slider`),Wd=document.getElementById(`hum-thumb`),Gd=document.getElementById(`hum-track`),Kd=null;function qd(e){let t=Gd.getBoundingClientRect(),n=Math.max(0,Math.min(1,(e-t.top)/t.height));Td=n,Wd.style.bottom=(1-n)*(t.height-20)+`px`}Ud&&Ld&&(Ud.style.display=`block`,Ud.addEventListener(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),Id(),wd=!0;let t=e.changedTouches[0];Kd=t.identifier,qd(t.clientY),Wd&&(Wd.style.borderColor=`rgba(100,255,180,.9)`)},{passive:!1}),Ud.addEventListener(`touchmove`,e=>{e.preventDefault(),e.stopPropagation();for(let t=0;t<e.changedTouches.length;t++)e.changedTouches[t].identifier===Kd&&qd(e.changedTouches[t].clientY)},{passive:!1}),Ud.addEventListener(`touchend`,e=>{e.preventDefault(),e.stopPropagation();for(let t=0;t<e.changedTouches.length;t++)e.changedTouches[t].identifier===Kd&&(Kd=null,wd=!1,Wd&&(Wd.style.borderColor=`rgba(100,255,180,.5)`))},{passive:!1}),Ud.addEventListener(`touchcancel`,e=>{e.preventDefault(),e.stopPropagation();for(let t=0;t<e.changedTouches.length;t++)e.changedTouches[t].identifier===Kd&&(Kd=null,wd=!1,Wd&&(Wd.style.borderColor=`rgba(100,255,180,.5)`))},{passive:!1})),Iu.domElement.addEventListener(`touchstart`,e=>{e.preventDefault(),Id();for(let t=0;t<e.changedTouches.length;t++){let n=e.changedTouches[t];n.clientX>window.innerWidth*.3&&Dd===null&&(Dd=n.identifier,Od=n.clientX,kd=n.clientY)}},{passive:!1}),Iu.domElement.addEventListener(`touchmove`,e=>{e.preventDefault();for(let t=0;t<e.changedTouches.length;t++){let n=e.changedTouches[t];n.identifier===Dd&&(fd-=(n.clientX-Od)*Su,pd-=(n.clientY-kd)*Su,pd=Math.max(-1,Math.min(1,pd)),Od=n.clientX,kd=n.clientY)}},{passive:!1}),Iu.domElement.addEventListener(`touchend`,e=>{for(let t=0;t<e.changedTouches.length;t++)e.changedTouches[t].identifier===Dd&&(Dd=null)},{passive:!1}),Iu.domElement.addEventListener(`touchcancel`,e=>{for(let t=0;t<e.changedTouches.length;t++)e.changedTouches[t].identifier===Dd&&(Dd=null)},{passive:!1});var Jd={x:0,z:0};function Yd(){let e=0,t=0;dd.KeyW&&--t,dd.KeyS&&(t+=1),dd.KeyA&&--e,dd.KeyD&&(e+=1),vd&&(e+=gd,t+=_d);let n=Math.sqrt(e*e+t*t);n>1&&(e/=n,t/=n);let r=6*(dd.ShiftLeft||dd.ShiftRight||bd?yu:1),i=Math.sin(fd),a=Math.cos(fd);return Jd.x=(e*a+t*i)*r,Jd.z=(-e*i+t*a)*r,Jd}var Xd=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[1,0],[-1,0],[0,1],[0,-1],[0,1],[0,-1]],Zd=new Uint8Array(512),Qd=new Uint8Array(256);for(let e=0;e<256;e++)Qd[e]=e;var $d=123;function ef(){return $d=$d*16807%2147483647,$d/2147483647}for(let e=255;e>0;e--){let t=Math.floor(ef()*(e+1));[Qd[e],Qd[t]]=[Qd[t],Qd[e]]}for(let e=0;e<512;e++)Zd[e]=Qd[e&255];var tf=.5*(Math.sqrt(3)-1),nf=(3-Math.sqrt(3))/6;function rf(e,t){let n,r,i,a=(e+t)*tf,o=Math.floor(e+a),s=Math.floor(t+a),c=(o+s)*nf,l=o-c,u=s-c,d=e-l,f=t-u,p,m;d>f?(p=1,m=0):(p=0,m=1);let h=d-p+nf,g=f-m+nf,_=d-1+2*nf,v=f-1+2*nf,y=o&255,b=s&255,x=.5-d*d-f*f;if(x<0)n=0;else{x*=x;let e=Xd[Zd[y+Zd[b]]%12];n=x*x*(e[0]*d+e[1]*f)}let S=.5-h*h-g*g;if(S<0)r=0;else{S*=S;let e=Xd[Zd[y+p+Zd[b+m]]%12];r=S*S*(e[0]*h+e[1]*g)}let C=.5-_*_-v*v;if(C<0)i=0;else{C*=C;let e=Xd[Zd[y+1+Zd[b+1]]%12];i=C*C*(e[0]*_+e[1]*v)}return 70*(n+r+i)}function af(e,t){let n=e*374761393+t*668265263+1274126177|0;return n=(n^n>>13)*1274126177|0,(n&2147483647)/2147483647}function of(e,t,n){let r=0,i=.5,a=1;for(let o=0;o<n;o++)r+=rf(e*a,t*a)*i,i*=.5,a*=2;return r}function sf(e,t,n){let r=0,i=1,a=1,o=1;for(let s=0;s<n;s++){let n=Math.abs(rf(e*a,t*a));n=1-n,n*=n,n*=o,o=Math.min(1,n*1.5),r+=n*i,i*=.45,a*=2.1}return r}function cf(e){return e*e*(3-2*e)}function lf(e,t){let n=Math.floor(e),r=Math.floor(t),i=999;for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let s=n+a+af(n+a,r+o)*.8+.1,c=r+o+af(r+o+7,n+a+3)*.8+.1,l=Math.sqrt((e-s)*(e-s)+(t-c)*(t-c));l<i&&(i=l)}return i}function uf(e,t){let n=0,r=.028,i=e*.82+t*.57,a=-e*.57+t*.82,o=sf(i*r+400,a*r+500,4);n+=o*3.5;let s=.018,c=e*.34+t*.94,l=-e*.94+t*.34,u=sf(c*s-200,l*s+150,3);n+=u*2;let d=.045,f=lf(e*d+70,t*d+90),p=Math.max(0,1-f*1.6),m=p*p*(3-2*p),h=2+of(e*.01+600,t*.01+700,2)*4;n+=m*h;let g=of(e*.08+800,t*.08+900,3),_=g*g*4;n+=_;let v=of(e*.025-300,t*.025-400,3),y=Math.floor(v*5)/5,b=(v*.3+y*.7)*3;n+=b;let x=.04,S=e*.5+t*.87,C=-e*.87+t*.5,w=Math.abs(rf(S*x+150,C*x+250)),T=w*w;return n-=(1-T)*1.5,n}var df=[];function ff(e,t,n){df.push({x:e,z:t,r:n})}var pf=null,mf=0,hf=0,gf=0;function _f(){let e=new Float32Array(32761);for(let t=0;t<181;t++){let n=-90+t*1;for(let r=0;r<181;r++)e[t*181+r]=wf(-90+r*1,n)}pf=e,mf=181,hf=-90,gf=1/1}var vf=0,yf=0,bf=0,xf=0,Sf=0,Cf=0;function wf(e,t){let n=Math.sqrt(e*e+t*t),r=1-cf(Math.max(0,(n-90*.7)/(90*.3))),i=cf(Math.min(1,n/10)),a=.012,o=of(e*a+200,t*a+300,3),s=cf(Math.max(0,Math.min(1,(o-.15)*2))),c=.035,l=of(e*c,t*c,4),u=of(e*c*2.7+50,t*c*2.7+50,3),d=rf(e*.15,t*.15),f=of(e*c*.6-100,t*c*.6-100,3)*1.5,p=l*5*s,m=u*1.5*s,h=d*.2,g=f+p+m+h,_=uf(e,t),v=.3+s*.7;g+=_*v,g*=r*i;for(let n=0;n<df.length;n++){let r=df[n],i=e-r.x,a=t-r.z,o=Math.sqrt(i*i+a*a);if(o<r.r*2.5){let e=cf(Math.max(0,(o-r.r*.5)/(r.r*2)));g*=e}}return g}function Tf(e,t){if(!pf)return wf(e,t);vf=(e-hf)*gf,yf=(t-hf)*gf,bf=vf|0,xf=yf|0,bf<0&&(bf=0),xf<0&&(xf=0),bf>=mf-1&&(bf=mf-2),xf>=mf-1&&(xf=mf-2),Sf=vf-bf,Cf=yf-xf;let n=xf*mf+bf,r=n+mf;return(pf[n]*(1-Sf)+pf[n+1]*Sf)*(1-Cf)+(pf[r]*(1-Sf)+pf[r+1]*Sf)*Cf}function Ef(e,t){let n=.3,r=Tf(e,t),i=Tf(e+n,t),a=Tf(e,t+n),o=-(i-r)/n,s=-(a-r)/n,c=Math.sqrt(o*o+1+s*s);return{x:o/c,y:1/c,z:s/c}}function Df(e,t,n){return e+(t-e)*n}function Of(e){return e*e*(3-2*e)}Math.PI*2;var kf=42;function Z(){return kf=kf*16807%2147483647,kf===0&&(kf=42),(kf&2147483647)/2147483647}function Af(){return kf}function jf(e){kf=e||42}var Mf={uTime:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uTransform:{value:0}};function Nf(e){Mf.uTransform.value=e}function Pf(){let t=2048,n=document.createElement(`canvas`);n.width=t,n.height=t;let r=n.getContext(`2d`),i=Z;r.fillStyle=`#223822`,r.fillRect(0,0,t,t);for(let e of[{col:`rgba(50,45,25,0.38)`,n:16,r:130},{col:`rgba(35,55,30,0.35)`,n:14,r:120},{col:`rgba(55,40,22,0.35)`,n:14,r:115},{col:`rgba(45,55,28,0.32)`,n:12,r:110},{col:`rgba(60,48,25,0.32)`,n:12,r:105},{col:`rgba(30,50,32,0.30)`,n:10,r:100},{col:`rgba(65,50,28,0.28)`,n:10,r:100},{col:`rgba(40,60,35,0.26)`,n:10,r:95},{col:`rgba(70,45,22,0.24)`,n:8,r:90},{col:`rgba(45,35,18,0.22)`,n:8,r:85}])for(let n=0;n<e.n;n++){let n=i()*t,a=i()*t,o=e.r*(.5+i()*.8),s=r.createRadialGradient(n,a,0,n,a,o);s.addColorStop(0,e.col),s.addColorStop(.6,e.col.replace(/[\d.]+\)$/,parseFloat(e.col.match(/[\d.]+\)$/)[0])*.4+`)`)),s.addColorStop(1,`rgba(0,0,0,0)`),r.fillStyle=s;for(let e=-1;e<=1;e++)for(let i=-1;i<=1;i++)r.beginPath(),r.arc(n+e*t,a+i*t,o,0,6.28),r.fill()}for(let e of[{n:80,r:25,colors:[`rgba(45,40,22,0.24)`,`rgba(38,55,30,0.20)`,`rgba(50,38,18,0.22)`,`rgba(35,48,25,0.18)`,`rgba(55,42,20,0.20)`,`rgba(30,52,32,0.16)`]},{n:200,r:10,colors:[`rgba(45,40,20,0.14)`,`rgba(35,50,28,0.12)`,`rgba(50,38,18,0.12)`,`rgba(30,48,28,0.10)`,`rgba(48,42,18,0.12)`,`rgba(28,45,30,0.08)`]},{n:500,r:4,colors:[`rgba(42,38,18,0.10)`,`rgba(35,48,25,0.08)`,`rgba(48,36,16,0.08)`,`rgba(30,45,28,0.06)`,`rgba(45,40,16,0.08)`,`rgba(25,42,28,0.05)`]}])for(let n=0;n<e.n;n++){r.fillStyle=e.colors[Math.floor(i()*e.colors.length)];let n=i()*t,a=i()*t;r.beginPath(),r.arc(n,a,e.r+i()*e.r*.6,0,6.28),r.fill()}let a=[`rgba(50,180,90,0.10)`,`rgba(40,160,100,0.08)`,`rgba(65,145,170,0.07)`,`rgba(80,200,130,0.09)`,`rgba(55,155,135,0.08)`];for(let e=0;e<45;e++){let n=i()*t,o=i()*t,s=a[Math.floor(i()*a.length)];r.strokeStyle=s,r.lineWidth=1.5+i()*2.5,r.beginPath(),r.moveTo(n,o);let c=i()*6.28,l=14+Math.floor(i()*20);for(let e=0;e<l;e++)c+=Math.sin(e*.6)*.5+(i()-.5)*.4,n+=Math.cos(c)*(6+i()*10),o+=Math.sin(c)*(6+i()*10),r.lineTo(n,o);if(r.stroke(),i()<.7){let e=6+i()*10,t=r.createRadialGradient(n,o,0,n,o,e);t.addColorStop(0,s.replace(/[\d.]+\)$/,`0.18)`)),t.addColorStop(1,`rgba(0,0,0,0)`),r.fillStyle=t,r.beginPath(),r.arc(n,o,e,0,6.28),r.fill()}if(i()<.5&&e<30){let e=n,t=o,a=c+(i()-.5)*1.5;r.strokeStyle=s.replace(/[\d.]+\)$/,parseFloat(s.match(/[\d.]+\)$/)[0])*.6+`)`),r.lineWidth=1+i()*1.5,r.beginPath(),r.moveTo(e,t);for(let n=0;n<6;n++)a+=(i()-.5)*.6,e+=Math.cos(a)*(4+i()*8),t+=Math.sin(a)*(4+i()*8),r.lineTo(e,t);r.stroke()}}for(let e=0;e<20;e++){let e=i()*t,n=i()*t,a=20+i()*60,o=i()<.7?`rgba(50,${140+Math.floor(i()*60)},${60+Math.floor(i()*40)},${.06+i()*.06})`:`rgba(${100+Math.floor(i()*60)},${80+Math.floor(i()*40)},40,${.05+i()*.04})`;r.strokeStyle=o,r.lineWidth=1.5+i()*3,r.beginPath(),r.arc(e,n,a,0,6.28),r.stroke(),i()<.4&&(r.lineWidth=.8+i()*1.5,r.beginPath(),r.arc(e,n,a*(.6+i()*.2),0,6.28),r.stroke());for(let s=-1;s<=1;s++)for(let c=-1;c<=1;c++)s===0&&c===0||(r.strokeStyle=o,r.lineWidth=1.5+i()*3,r.beginPath(),r.arc(e+s*t,n+c*t,a,0,6.28),r.stroke())}r.lineWidth=1.2;for(let e=0;e<30;e++){r.strokeStyle=`rgba(15,25,12,${.2+i()*.15})`;let e=i()*t,n=i()*t,a=i()*6.28;r.beginPath(),r.moveTo(e,n);for(let t=0;t<10;t++)a+=Math.sin(t*.7)*.5+(i()-.5)*.35,e+=Math.cos(a)*(8+i()*14),n+=Math.sin(a)*(8+i()*14),r.lineTo(e,n);r.stroke()}let o=[`rgba(55,40,18,0.28)`,`rgba(50,50,22,0.25)`,`rgba(35,55,25,0.22)`,`rgba(60,45,20,0.25)`,`rgba(45,52,22,0.22)`,`rgba(65,48,22,0.22)`,`rgba(40,55,28,0.20)`,`rgba(55,42,16,0.20)`,`rgba(70,50,22,0.22)`,`rgba(48,38,15,0.20)`,`rgba(30,50,28,0.18)`,`rgba(60,55,25,0.16)`];for(let e=0;e<3500;e++){r.fillStyle=o[Math.floor(i()*o.length)];let e=i()*t,n=i()*t,a=.8+i()*2.5;r.beginPath(),r.arc(e,n,a,0,6.28),r.fill()}for(let e=0;e<50;e++){let e=i()*t,n=i()*t,a=15+i()*35,o=r.createRadialGradient(e,n,0,e,n,a),s=i();s<.25?(o.addColorStop(0,`rgba(35,60,35,0.18)`),o.addColorStop(1,`rgba(20,35,20,0)`)):s<.5?(o.addColorStop(0,`rgba(55,42,20,0.18)`),o.addColorStop(1,`rgba(30,22,10,0)`)):s<.7?(o.addColorStop(0,`rgba(45,55,28,0.16)`),o.addColorStop(1,`rgba(25,30,15,0)`)):s<.85?(o.addColorStop(0,`rgba(60,45,22,0.15)`),o.addColorStop(1,`rgba(32,24,12,0)`)):(o.addColorStop(0,`rgba(38,65,40,0.14)`),o.addColorStop(1,`rgba(22,38,22,0)`)),r.fillStyle=o,r.beginPath(),r.arc(e,n,a,0,6.28),r.fill()}for(let e=0;e<300;e++){let e=i()*t,n=i()*t,a=1.5+i()*3,o=Math.floor(30+i()*40);r.fillStyle=`rgba(${o+5},${o},${o-8},0.25)`,r.beginPath(),r.arc(e,n,a,0,6.28),r.fill()}r.lineWidth=.7;for(let e=0;e<60;e++){let e=i()*t,n=i()*t,a=4+i()*16,o=i()*6.28;r.strokeStyle=`rgba(18,28,12,${.15+i()*.1})`,r.beginPath(),r.moveTo(e,n),r.lineTo(e+Math.cos(o)*a,n+Math.sin(o)*a),r.stroke()}let s=[`rgba(60,190,100,0.10)`,`rgba(50,175,130,0.08)`,`rgba(80,160,180,0.07)`,`rgba(100,90,170,0.06)`,`rgba(160,130,60,0.05)`,`rgba(50,160,150,0.07)`];for(let e=0;e<400;e++){let e=i()*t,n=i()*t,a=s[Math.floor(i()*s.length)];if(r.fillStyle=a,r.beginPath(),r.arc(e,n,1+i()*2.5,0,6.28),r.fill(),i()<.4){let t=5+i()*6,o=r.createRadialGradient(e,n,0,e,n,t);o.addColorStop(0,a),o.addColorStop(1,`rgba(0,0,0,0)`),r.fillStyle=o,r.beginPath(),r.arc(e,n,t,0,6.28),r.fill()}}for(let e=0;e<150;e++){let e=i()*t,n=i()*t;r.fillStyle=`rgba(90,150,110,${.04+i()*.04})`,r.beginPath(),r.arc(e,n,.5+i()*1.5,0,6.28),r.fill()}let c=new Yi(n);return c.wrapS=c.wrapT=e,c.repeat.set(8,8),c.colorSpace=Re,c}function Ff(e,t){let n=e*127961+t*372143+918273|0;return n=(n^n>>13)*517261|0,(n&2147483647)/2147483647}function If(e,t){let n=Math.floor(e),r=Math.floor(t),i=Of(e-n),a=Of(t-r),o=Ff(n,r),s=Ff(n+1,r),c=Ff(n,r+1),l=Ff(n+1,r+1);return o+(s-o)*i+(c-o)*a+(o-s-c+l)*i*a}function Lf(e,t,n){let r=0,i=.5,a=1;for(let o=0;o<n;o++)r+=If(e*a,t*a)*i,i*=.5,a*=2;return r}function Rf(){let e=Pf(),t=new ho(270,270,200,200),n=t.attributes.position,r=[[.65,.6,.38],[.5,.7,.42],[.72,.58,.35],[.55,.68,.4],[.6,.55,.32],[.45,.65,.45],[.68,.62,.36],[.48,.72,.48],[.75,.55,.32],[.55,.6,.38]],i=n.count,a=new Float32Array(i*3);for(let e=0;e<i;e++){let t=n.getX(e),i=n.getY(e);Math.sqrt(t*t+i*i)<90*1.4?n.setZ(e,Tf(t,-i)):n.setZ(e,0);let o=t,s=-i,c=Lf(o*.025+100,s*.025+200,3),l=Lf(o*.06+300,s*.06+400,2),u=If(o*.15+500,s*.15+600),d=Lf(o*.04-150,s*.04-250,3),f=Math.floor(c*r.length*.999),p=Math.floor(d*r.length*.999),m=r[f],h=r[p],g=Of(l),_=.9+u*.25,v=(m[0]*(1-g)+h[0]*g)*_,y=(m[1]*(1-g)+h[1]*g)*_,b=(m[2]*(1-g)+h[2]*g)*_,x=1+Tf(o,s)*.06;a[e*3]=v*x,a[e*3+1]=y*x,a[e*3+2]=b*x}t.setAttribute(`color`,new nr(a,3)),t.computeVertexNormals();let o=new K({map:e,vertexColors:!0,roughness:.75,metalness:0,emissive:Y.groundEmissive,emissiveIntensity:.4});o.onBeforeCompile=e=>{e.uniforms.uTime=Mf.uTime,e.uniforms.uPlayerX=Mf.uPlayerX,e.uniforms.uPlayerZ=Mf.uPlayerZ,e.uniforms.uTransform=Mf.uTransform,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
      uniform float uPlayerX;
      uniform float uPlayerZ;
      varying vec3 vWorldPos;
      varying float vPlayerDist2;
      `),e.vertexShader=e.vertexShader.replace(`#include <fog_vertex>`,`#include <fog_vertex>
      vec4 gWorldPos = modelMatrix * vec4(transformed, 1.0);
      vWorldPos = gWorldPos.xyz;
      float gpdx = gWorldPos.x - uPlayerX;
      float gpdz = gWorldPos.z - uPlayerZ;
      vPlayerDist2 = gpdx * gpdx + gpdz * gpdz;
      `),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
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
      `),e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>

      // Shared world-space coords + distance fade for all ground detail
      vec2 gWP = vWorldPos.xz;
      float detailFade = 1.0 - smoothstep(400.0, 900.0, vPlayerDist2); // ~20-30m fade

      // --- Micro-grit detail (sand/soil grain visible up close) ---
      float grit1 = gNoise(gWP * 8.0 + 500.0);   // coarse grain
      float grit2 = gNoise(gWP * 20.0 + 700.0);   // fine grain
      // Subtle brightness modulation: +/-8% from base color
      float gritMod = 1.0 + (grit1 - 0.5) * 0.08 + (grit2 - 0.5) * 0.04;
      gritMod = mix(1.0, gritMod, detailFade);      // fade at distance
      diffuseColor.rgb *= gritMod;
      // Slight warm/cool shift (earth tones)
      float warmShift = (grit1 - 0.5) * 0.02 * detailFade;
      diffuseColor.r += warmShift;
      diffuseColor.b -= warmShift * 0.5;
      `),e.fragmentShader=e.fragmentShader.replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>

      // --- Roughness variation (wet moss vs dry earth) ---
      float rNoise = gFbm(gWP * 0.12 + 50.0);      // large-scale wet/dry zones
      float rDetail = gNoise(gWP * 0.6 + 150.0);    // medium-scale patches
      float rFine = gNoise(gWP * 2.5 + 250.0);      // fine variation
      // Map noise to roughness range: 0.55 (wet/mossy) to 0.95 (dry earth)
      float wetness = smoothstep(0.35, 0.65, rNoise); // 0=wet, 1=dry
      float roughVar = mix(0.55, 0.95, wetness);
      roughVar += (rDetail - 0.5) * 0.1;              // medium patch variation
      roughVar += (rFine - 0.5) * 0.04;               // fine grain
      roughnessFactor = clamp(roughVar, 0.45, 1.0);
      `),e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>

      // --- Procedural normal perturbation (pebbles, soil clumps, root ridges) ---
      {
        float eps = 0.15;
        float nScale = 0.8;
        float nStr = 0.35 * detailFade; // fade bump at distance

        // FBM gradient via finite difference
        float h0 = gFbm(gWP * nScale);
        float hx = gFbm((gWP + vec2(eps, 0.0)) * nScale);
        float hz = gFbm((gWP + vec2(0.0, eps)) * nScale);

        // Higher frequency pebble detail
        float dScale = 3.5;
        float dStr = 0.15;
        h0 += gNoise(gWP * dScale) * dStr;
        hx += gNoise((gWP + vec2(eps, 0.0)) * dScale) * dStr;
        hz += gNoise((gWP + vec2(0.0, eps)) * dScale) * dStr;

        // Perturb surface normal
        vec3 bumpN = normalize(normal + vec3(
          -(hx - h0) / eps * nStr,
          0.0,
          -(hz - h0) / eps * nStr
        ));
        normal = bumpN;
      }
      `),e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>

      float tF = uTransform; // 0 = forest, 1 = purple finale
      vec2 wp = vWorldPos.xz;

      // --- Mycelium vein glow (noise contour lines) ---
      float vn1 = gFbm(wp * 0.25 + 30.0);
      float vn2 = gFbm(wp * 0.15 + 80.0);
      float vein1 = smoothstep(0.44, 0.50, vn1) * smoothstep(0.56, 0.50, vn1);
      float vein2 = smoothstep(0.42, 0.49, vn2) * smoothstep(0.58, 0.49, vn2);
      float veins = max(vein1, vein2 * 0.7);
      float veinPulse = 0.7 + 0.3 * sin(uTime * 0.4 + vn1 * 8.0);
      // Forest: bright green veins | Finale: bright white-cyan veins
      vec3 veinColForest = vec3(0.20, 0.65, 0.30) * 1.2;
      vec3 veinColFinale = vec3(0.80, 0.95, 1.00) * 1.32;
      totalEmissiveRadiance += veins * mix(veinColForest, veinColFinale, tF) * veinPulse;

      // --- Organic ring patterns (growth rings from noise) ---
      float ringN = gNoise(wp * 0.06 + 10.0);
      float ring = sin(ringN * 25.0) * 0.5 + 0.5;
      ring = smoothstep(0.85, 1.0, ring) * mix(0.88, 1.1, tF);
      // Forest: brighter green | Finale: pink-magenta
      vec3 ringColForest = vec3(0.12, 0.40, 0.20);
      vec3 ringColFinale = vec3(0.66, 0.22, 0.55);
      totalEmissiveRadiance += ring * mix(ringColForest, ringColFinale, tF);

      // --- Scattered fairy ring glows ---
      vec2 cell = floor(wp * 0.07);
      vec2 cellCenter = (cell + 0.5 + (vec2(gHash(cell), gHash(cell + 100.0)) - 0.5) * 0.6) / 0.07;
      float rd = length(wp - cellCenter);
      float ringR = 3.0 + gHash(cell + 200.0) * 4.0;
      float fRing = smoothstep(0.4, 0.0, abs(rd - ringR)) * step(0.75, gHash(cell + 300.0));
      // Forest: brighter green | Finale: bright purple
      vec3 fRingColForest = vec3(0.18, 0.48, 0.25) * 1.2;
      vec3 fRingColFinale = vec3(0.50, 0.16, 0.65) * 1.32;
      totalEmissiveRadiance += fRing * mix(fRingColForest, fRingColFinale, tF);

      // --- Fine noise for per-pixel detail ---
      float fineN = gNoise(wp * 1.5) * 0.18;
      vec3 fineForest = vec3(0.088, 0.22, 0.12);
      vec3 fineFinale = vec3(0.198, 0.066, 0.242);
      totalEmissiveRadiance += fineN * mix(fineForest, fineFinale, tF);

      // --- Player proximity ground glow (15m radius) ---
      if (vPlayerDist2 < 225.0) {
        float pDist = sqrt(vPlayerDist2);
        float pGlow = (1.0 - pDist / 15.0);
        pGlow = pGlow * pGlow * pGlow;
        // Forest: brighter green glow | Finale: bright pink-white glow
        vec3 pGlowForest = vec3(0.22, 0.55, 0.32) * 1.1;
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
      `)};let s=new H(t,o);return s.rotation.x=-Math.PI/2,s.receiveShadow=!0,X.add(s),s}var zf=new U,Bf=null,Vf=120,Hf=null,Uf=null,Wf=null,Gf=null,Kf=null,qf=[],Jf=3,Yf=0;function Xf(e,t){return`rgba(${e>>16&255},${e>>8&255},${e&255},${t})`}function Zf(e,t,n,r,i,a,o){e.save(),e.translate(t,n),Math.abs(i/r-1)>.01&&e.scale(1,i/r);let s=e.createRadialGradient(0,0,0,0,0,r);s.addColorStop(0,Xf(a,o)),s.addColorStop(.25,Xf(a,o*.55)),s.addColorStop(.55,Xf(a,o*.15)),s.addColorStop(.85,Xf(a,o*.03)),s.addColorStop(1,Xf(a,0)),e.fillStyle=s,e.beginPath(),e.arc(0,0,r,0,6.2832),e.fill(),e.restore()}function Qf(e,t,n,r,i,a,o,s){Zf(e,t,n,r,i,a,o),t-r<0&&Zf(e,t+s,n,r,i,a,o),t+r>s&&Zf(e,t-s,n,r,i,a,o)}function $f(){let e=2048,t=1024,n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`),i=Z,a=r.createLinearGradient(0,0,0,t);a.addColorStop(0,`#030610`),a.addColorStop(.2,`#050a18`),a.addColorStop(.4,`#0a1222`),a.addColorStop(.55,`#0c1828`),a.addColorStop(.75,`#081018`),a.addColorStop(1,`#040810`),r.fillStyle=a,r.fillRect(0,0,e,t);let o=[{x:.12,y:.22,rx:.18,ry:.14,col:Y.skyCloud1,a:.14},{x:.42,y:.28,rx:.22,ry:.1,col:Y.skyCloud2,a:.12},{x:.72,y:.18,rx:.16,ry:.12,col:Y.skyCloud3,a:.13},{x:.88,y:.32,rx:.2,ry:.09,col:Y.skyCloud4,a:.1},{x:.28,y:.12,rx:.14,ry:.18,col:Y.skyCloud5,a:.1},{x:.58,y:.38,rx:.18,ry:.07,col:Y.skyCloud6,a:.08},{x:.05,y:.4,rx:.15,ry:.1,col:Y.skyCloud7,a:.09},{x:.52,y:.15,rx:.12,ry:.16,col:Y.skyCloud8,a:.07}];for(let n of o){Qf(r,n.x*e,n.y*t,n.rx*e,n.ry*t,n.col,n.a,e);for(let a=0;a<4;a++)Qf(r,(n.x+(i()-.5)*n.rx)*e,(n.y+(i()-.5)*n.ry)*t,n.rx*e*(.2+i()*.35),n.ry*t*(.2+i()*.4),n.col,n.a*(.4+i()*.5),e)}let s=[Y.skyWisp1,Y.skyWisp2,Y.skyWisp3,Y.skyWisp4,Y.skyWisp5,Y.skyWisp6,Y.skyWisp7];for(let n=0;n<30;n++)Qf(r,i()*e,i()*t*.55,40+i()*180,25+i()*100,s[Math.floor(i()*s.length)],.025+i()*.035,e);r.save(),r.globalCompositeOperation=`screen`;let c=.26;for(let n=0;n<50;n++){let a=n/50;Zf(r,a*e,(c+Math.sin(a*Math.PI)*.06+(i()-.5)*.02)*t,e*.05+i()*e*.035,t*.04*(.4+i()*.6),Y.skyMoonGlow,.025+i()*.015)}for(let n=0;n<25;n++){let n=.2+i()*.6;Zf(r,n*e,(c+Math.sin(n*Math.PI)*.04)*t,e*.03+i()*e*.02,t*.02+i()*t*.01,Y.skyMoonCore,.015+i()*.012)}for(let n=0;n<10;n++){let n=.35+i()*.3;Zf(r,n*e,(c+Math.sin(n*Math.PI)*.02)*t,e*.02,t*.012,Y.skyMoonWarm,.01+i()*.008)}r.globalCompositeOperation=`source-over`,r.restore();for(let n=0;n<12;n++){let n=.1+i()*.8;Zf(r,n*e,(c+Math.sin(n*Math.PI)*.04+(i()-.5)*.02)*t,20+i()*60,8+i()*20,Y.skyMoonShadow,.15+i()*.1)}let l=[`255,255,255`,`220,230,255`,`255,240,220`,`200,215,255`,`255,225,200`,`240,240,255`,`255,245,235`];for(let n=0;n<5e3;n++){let n=i()*e,a=i()*t*.65,o=.3+i()*.7,s=.1+i()*.5;r.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${s})`,r.beginPath(),r.arc(n,a,o,0,6.28),r.fill()}for(let n=0;n<3e3;n++){let n=i(),a=n*e,o=(c+Math.sin(n*Math.PI)*.06)*t+(i()-.5)*t*.1;if(o<0||o>t*.6)continue;let s=.2+i()*.6,u=.2+i()*.7;r.fillStyle=`rgba(${l[Math.floor(i()*l.length)]},${u})`,r.beginPath(),r.arc(a,o,s,0,6.28),r.fill()}for(let n=0;n<60;n++){let n=i()*e,a=i()*t*.58,o=1.2+i()*1.8,s=6+i()*14,c=i(),l;l=c<.45?`255,255,255`:c<.65?`210,225,255`:c<.8?`255,230,200`:c<.92?`190,210,255`:`255,200,180`;let u=r.createRadialGradient(n,a,0,n,a,s);u.addColorStop(0,`rgba(${l},0.5)`),u.addColorStop(.1,`rgba(${l},0.18)`),u.addColorStop(.35,`rgba(${l},0.04)`),u.addColorStop(1,`rgba(${l},0)`),r.fillStyle=u,r.beginPath(),r.arc(n,a,s,0,6.28),r.fill(),r.strokeStyle=`rgba(${l},0.12)`,r.lineWidth=.5;let d=s*.8;r.beginPath(),r.moveTo(n-d,a),r.lineTo(n+d,a),r.moveTo(n,a-d),r.lineTo(n,a+d),r.stroke(),r.fillStyle=`rgba(${l},1)`,r.beginPath(),r.arc(n,a,o,0,6.28),r.fill()}for(let n=0;n<8;n++){let n=i()*e,a=t*.08+i()*t*.42,o=50+i()*90;Zf(r,n,a,o,o*.7,Y.skyClusterGlow,.03);for(let s=0;s<100;s++){let s=i()*6.28,c=i()*i()*o,l=n+Math.cos(s)*c,u=a+Math.sin(s)*c*.65;if(l<0||l>e||u<0||u>t)continue;let d=.2+i()*.6;r.fillStyle=`rgba(255,255,255,${.25+i()*.6})`,r.beginPath(),r.arc(l,u,d,0,6.28),r.fill()}}for(let n=0;n<15;n++){let n=o[Math.floor(i()*o.length)],a=(n.x+(i()-.5)*n.rx*.5)*e,s=(n.y+(i()-.5)*n.ry*.5)*t,c=3+i()*8,l=r.createRadialGradient(a,s,0,a,s,c*3);l.addColorStop(0,Xf(n.col,.2)),l.addColorStop(.3,Xf(n.col,.06)),l.addColorStop(1,Xf(n.col,0)),r.fillStyle=l,r.beginPath(),r.arc(a,s,c*3,0,6.28),r.fill()}let u=new Yi(n);return u.colorSpace=Re,u}function ep(){let e=Af(),t=$f(),n=.03,r=new G(280,64,32,0,Math.PI*2,n,Math.PI*.55);Bf=new B({map:t,side:1,fog:!1,transparent:!1});let i=new H(r,Bf);zf.add(i);let a=new H(new Ea(280*Math.sin(n)*1.05,32),new B({color:Y.skyZenithCap,side:1,fog:!1}));a.position.y=280*Math.cos(n),a.rotation.x=Math.PI/2,zf.add(a),tp(),np(),X.add(zf),jf(e)}function tp(){let e=new Float32Array(Vf*3),t=new Float32Array(Vf*3);Uf=new Float32Array(Vf),Wf=new Float32Array(Vf),Gf=new Float32Array(Vf);let n=[[1,1,1],[.85,.9,1],[1,.94,.86],[.78,.84,1],[1,.88,.78],[.9,.95,1]],r=Z,i=280*.97;for(let a=0;a<Vf;a++){let o=r()*Math.PI*2,s=r()*Math.PI*.48,c=i*Math.cos(o)*Math.sin(s),l=i*Math.cos(s),u=i*Math.sin(o)*Math.sin(s);e[a*3]=c,e[a*3+1]=l,e[a*3+2]=u;let d=n[Math.floor(r()*n.length)];t[a*3]=d[0],t[a*3+1]=d[1],t[a*3+2]=d[2],Uf[a]=2+r()*4,Wf[a]=r()*Math.PI*2,Gf[a]=.5+r()*2.5}let a=new fr;a.setAttribute(`position`,new V(e,3)),a.setAttribute(`color`,new V(t,3)),Kf=new V(Uf.slice(),1),Kf.setUsage(We),a.setAttribute(`size`,Kf),Hf=new qi(a,new Hi({vertexColors:!0,transparent:!0,opacity:.9,sizeAttenuation:!0,fog:!1,blending:2,depthWrite:!1})),zf.add(Hf)}function np(){let e=new B({color:Y.white,transparent:!0,opacity:0,fog:!1,blending:2,depthWrite:!1});for(let t=0;t<Jf;t++){let t=new H(new W(.15,0,12,4),e.clone());t.visible=!1,zf.add(t),qf.push({mesh:t,mat:t.material,active:!1,life:0,maxLife:0,sx:0,sy:0,sz:0,dx:0,dy:0,dz:0})}}function rp(){let e=null;for(let t=0;t<qf.length;t++)if(!qf[t].active){e=qf[t];break}if(!e)return;let t=Math.random,n=t()*Math.PI*2,r=.1+t()*.35;e.sx=238*Math.cos(n)*Math.sin(r),e.sy=238*Math.cos(r),e.sz=238*Math.sin(n)*Math.sin(r);let i=n+(t()-.5)*1,a=80+t()*120;e.dx=Math.cos(i)*a,e.dy=-a*(.5+t()*.5),e.dz=Math.sin(i)*a,e.life=.5+t()*.8,e.maxLife=e.life,e.active=!0,e.mesh.visible=!0}function ip(e,t){if(zf.rotation.y=t*.003,Kf){let e=Kf.array;for(let n=0;n<Vf;n++)e[n]=Uf[n]*(.65+Math.sin(t*Gf[n]+Wf[n])*.35);Kf.needsUpdate=!0}hp(e),Yf-=e,Yf<=0&&(Yf=4+Math.random()*12,rp());for(let t=0;t<qf.length;t++){let n=qf[t];if(!n.active)continue;if(n.life-=e,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}let r=n.life/n.maxLife;n.sx+=n.dx*e,n.sy+=n.dy*e,n.sz+=n.dz*e,n.mesh.position.set(n.sx,n.sy,n.sz),n.mesh.lookAt(n.sx+n.dx,n.sy+n.dy,n.sz+n.dz),n.mesh.rotateX(Math.PI/2),n.mat.opacity=r*.7,n.mesh.scale.setScalar(.6+r*.4)}}var ap=[!1,!1,!1,!1,!1],op={child:[`Make a wish!`,`The stars are listening…`,`Someone drew pictures in the sky.`,`I wonder who lived here before.`,`The stars feel closer tonight.`],adult:[`…system boot sequence, cycle 1.`,`…I built this place for her…`,`…oscillations matched her heartbeat…`,`…I hope she remembers the fireflies.`,`…time cannot take what has been loved…`]};function sp(e,t,n){if(e>-.5)return null;let r=Math.min(t,4);if(ap[r])return null;let i=!1;for(let e=0;e<qf.length;e++)if(qf[e].active&&qf[e].life>.2){i=!0;break}return i?(ap[r]=!0,(op[n]||op.child)[r]||null):null}function cp(e){if(Bf){let t=Math.max(.15,e);Bf.color.setRGB(t,t,t)}}var lp=[],up=!1,dp=[{stars:[{theta:1.2,phi:.25},{theta:1.35,phi:.2},{theta:1.5,phi:.25},{theta:1.15,phi:.38},{theta:1.35,phi:.35},{theta:1.55,phi:.38},{theta:1.25,phi:.5},{theta:1.45,phi:.5}],edges:[[0,1],[1,2],[0,3],[1,4],[2,5],[3,6],[4,6],[4,7],[5,7]],color:Y.skyConstJelly},{stars:[{theta:3,phi:.2},{theta:3.15,phi:.15},{theta:2.85,phi:.15},{theta:2.9,phi:.3},{theta:3.1,phi:.3},{theta:2.85,phi:.42},{theta:3.15,phi:.42}],edges:[[0,1],[0,2],[0,3],[0,4],[3,5],[4,6],[3,4]],color:Y.skyConstPuff},{stars:[{theta:4.8,phi:.22},{theta:4.55,phi:.15},{theta:4.55,phi:.32},{theta:5.05,phi:.15},{theta:5.05,phi:.32},{theta:4.8,phi:.38}],edges:[[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,4]],color:Y.skyConstMoth},{stars:[{theta:.3,phi:.18},{theta:.25,phi:.1},{theta:.35,phi:.1},{theta:.3,phi:.28},{theta:.2,phi:.4},{theta:.4,phi:.4},{theta:.15,phi:.33},{theta:.45,phi:.33}],edges:[[0,1],[0,2],[0,3],[3,6],[3,7],[6,4],[7,5]],color:Y.skyConstDeer},{stars:[{theta:5.8,phi:.12},{theta:6.05,phi:.2},{theta:5.95,phi:.38},{theta:5.65,phi:.38},{theta:5.55,phi:.2}],edges:[[0,1],[1,2],[2,3],[3,4],[4,0]],color:Y.skyConstConverge}];function fp(){if(up)return;up=!0;let e=280*.84;for(let t=0;t<dp.length;t++){let n=dp[t],r=n.stars.map(t=>({x:e*Math.cos(t.theta)*Math.sin(t.phi),y:e*Math.cos(t.phi),z:e*Math.sin(t.theta)*Math.sin(t.phi)})),i=[];for(let e=0;e<n.edges.length;e++){let t=r[n.edges[e][0]],a=r[n.edges[e][1]];i.push(t.x,t.y,t.z,a.x,a.y,a.z)}let a=new fr;a.setAttribute(`position`,new V(i,3));let o=new ki({color:n.color,transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1}),s=new Vi(a,o);s.visible=!1,zf.add(s);let c=[];for(let e=0;e<r.length;e++)c.push(r[e].x,r[e].y,r[e].z);let l=new fr;l.setAttribute(`position`,new V(c,3));let u=new Float32Array(r.length).fill(4);l.setAttribute(`size`,new nr(u,1));let d=new Hi({color:n.color,size:4,transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1,sizeAttenuation:!1}),f=new qi(l,d);f.visible=!1,zf.add(f);let p=0,m=0;for(let e=0;e<n.stars.length;e++)p+=n.stars[e].theta,m+=n.stars[e].phi;let h=p/n.stars.length,g=m/n.stars.length;lp.push({lines:s,lineMat:o,starPoints:f,starMat:d,revealed:!1,revealTimer:0,targetOpacity:.2,centerTheta:h,centerPhi:g})}}function pp(e){if(up||fp(),e<0||e>=lp.length)return;let t=lp[e];t.revealed||(t.revealed=!0,t.revealTimer=0,t.lines.visible=!0,t.starPoints.visible=!0)}function mp(e){if(up||fp(),e<0||e>=lp.length)return null;let t=lp[e];return{theta:t.centerTheta,phi:t.centerPhi}}function hp(e){for(let t=0;t<lp.length;t++){let n=lp[t];if(!n.revealed)continue;n.revealTimer+=e;let r=Math.min(n.revealTimer/3,1);n.lineMat.opacity=r*.15,n.starMat.opacity=r*.25}}var gp=6,_p=64,vp=[],yp=null,bp=[new z(Y.auroraMutedGreen),new z(Y.auroraMutedTeal),new z(Y.auroraPaleSage),new z(Y.auroraMutedPurple),new z(Y.auroraMutedRose),new z(Y.auroraDarkTeal)];function xp(){yp=new U,yp.visible=!1;for(let e=0;e<gp;e++){let t=new ho(280*(1.2+e*.2+Math.sin(e*1.7)*.15),280*(.1+e*.012+Math.sin(e*2.3)*.02),_p,3),n=t.attributes.position.array,r=(_p+1)*4,i=Math.PI*(.45+e*.08+Math.sin(e*.9)*.05),a=-i/2,o=(.25+e*.04+Math.sin(e*1.3)*.02)*Math.PI,s=e*.18-.45;for(let e=0;e<r;e++){let t=Math.floor(e/4),r=e%4,c=a+t/_p*i+s,l=o+(r/3-.5)*.05,u=280*.92;n[e*3]=Math.sin(c)*Math.sin(l)*u,n[e*3+1]=Math.cos(l)*u,n[e*3+2]=Math.cos(c)*Math.sin(l)*u}t.attributes.position.needsUpdate=!0,t.attributes.position.setUsage(We),t.computeVertexNormals();let c=new Float32Array(r*3);t.setAttribute(`color`,new nr(c,3)),t.attributes.color.setUsage(We);let l=new B({vertexColors:!0,transparent:!0,opacity:0,side:2,blending:2,depthWrite:!1,fog:!1}),u=new H(t,l);yp.add(u),vp.push({mesh:u,mat:l,geo:t,colorArr:c,posArr:n,vertCount:r,rows:4,segments:_p,phase:e*1.7+Math.sin(e*.8)*.5,speed:.15+e*.05+Math.sin(e*2.1)*.03,colorShift:e*1.1,elevation:o,arcStart:a,arcSpan:i,azimuthOffset:s})}X.add(yp)}var Sp=0;function Cp(e,t,n,r,i){if(!yp)return;let a=i===`HEAVY_RAIN`||i===`LUMINOUS_STORM`||i===`FOG_BANK`,o=0;a||(n===`DEEP_NIGHT`?o=.25:n===`NIGHT`&&(o=.08));let s=o>Sp?.2:.4;if(Sp+=(o-Sp)*s*e,Sp<.005){yp.visible=!1;return}yp.visible=!0;let c=280*.92;for(let e=0;e<vp.length;e++){let n=vp[e],r=n.colorArr,i=n.posArr,a=n.segments,o=n.rows;n.mat.opacity=Sp*(.5+e*.05);for(let e=0;e<=a;e++){let s=e/a,l=Math.sin(s*6+t*n.speed+n.phase)*.5+.5,u=Math.sin(s*3-t*n.speed*.4+n.phase*1.3)*.5+.5,d=Math.sin(s*1.5+t*.07)*.5+.5,f=Math.sin(s*1.2+t*.05+n.phase*.7)*.5+.5,p=(l*.3+u*.25+d*.2+f*.25)*Sp,m=(s*3+t*.08+n.colorShift)%bp.length,h=Math.floor(m),g=m-h,_=bp[h%bp.length],v=bp[(h+1)%bp.length],y=(_.r+(v.r-_.r)*g)*p,b=(_.g+(v.g-_.g)*g)*p,x=(_.b+(v.b-_.b)*g)*p,S=c*.025,C=Math.sin(s*5+t*.3+n.phase)*S+Math.sin(s*2.5-t*.15+n.phase*.6)*S*.5;for(let t=0;t<o;t++){let a=e*o+t,l=t/(o-1),u;u=l<.33?l*1.2:l>.67?(1-l)*1.5:.7+Math.sin(l*Math.PI)*.3,r[a*3]=y*u,r[a*3+1]=b*u,r[a*3+2]=x*u,n.arcStart+s*n.arcSpan+n.azimuthOffset;let d=(l-.5)*.05,f=n.elevation+d,p=C*(.3+l*.7);i[a*3+1]=Math.cos(f)*c+p}}n.geo.attributes.color.needsUpdate=!0,n.geo.attributes.position.needsUpdate=!0}}var wp={ORB_COLLECTED:`orb:collected`,ORB_REJECTED:`orb:rejected`,QUEST_PHASE:`quest:phase`,CREATURE_ATTUNED:`creature:attuned`,ATTUNEMENT_FLASH:`attunement:flash`,PITCH_LOCKED:`hum:locked`,ENTITY_MOOD_CHANGE:`entity:mood`,SYMBIOSIS_COUPLED:`symbiosis:coupled`,FOOTSTEP:`player:footstep`,JUMP:`player:jump`,LAND:`player:land`,FAIRY_BOUNCE:`fairy:bounce`,BUBBLE_POP:`bubble:pop`,CRYSTAL_CHAIN:`crystal:chain`,CREATURE_SOUND:`creature:sound`,WEATHER_CHANGE:`weather:change`,DAY_PHASE_CHANGE:`dayPhase:change`,DISCOVERY:`discovery:trigger`,NARRATIVE_TEXT:`narrative:text`,PERSPECTIVE_CHANGED:`narrative:perspectiveChanged`},Tp={};for(let e in wp)Tp[wp[e]]=[];var Ep=(e,t)=>{let n=Tp[e];return n?(n.push(t),()=>Dp(e,t)):()=>{}},Dp=(e,t)=>{let n=Tp[e];if(!n)return;let r=n.indexOf(t);r!==-1&&n.splice(r,1)},Op=(e,t)=>{let n=Tp[e];if(n)for(let e=n.length-1;e>=0;e--)n[e](t)},Q={pos:new R(0,Cu,0),vel:new R,onGround:!0},kp=0,Ap=0,jp=0,Mp=65,Np=65,Pp=0,Fp=!0,Ip=0,Lp=0,Rp=1,zp=1,Bp=0,Vp=1;function Hp(e){Vp=e}var Up=null,Wp=null,Gp=null,Kp=1;function qp(e,t,n){Up=e,Wp=t,Gp=n}var Jp=[],Yp=[],Xp=null;function Zp(e,t){Jp=e,Yp=t}function Qp(e){Xp=e}function $p(e){let t=Yd(),n=dd.ShiftLeft||dd.ShiftRight||bd,r=6*Rp,i=8*zp;Q.vel.x=t.x*(r/6),Q.vel.z=t.z*(r/6),Q.vel.y-=15*Vp*e,(dd.Space||yd)&&Q.onGround&&(Q.vel.y=i,Q.onGround=!1,Fd(!1),Wp&&Wp(),Op(wp.JUMP)),Bp>0&&(Bp-=e,Bp<=0&&(Rp=1,zp=1)),Q.onGround||(Ip=Q.vel.y),Q.pos.x+=Q.vel.x*e,Q.pos.y+=Q.vel.y*e,Q.pos.z+=Q.vel.z*e;let a=Tf(Q.pos.x,Q.pos.z)+Cu;if(Q.pos.y<=a){if(Q.pos.y=a,Q.vel.y=0,!Fp&&Ip<-3){let e=Math.min(Math.abs(Ip)/8,1);Pp=e*.15,Xp&&Xp(Q.pos.x,Q.pos.z,Math.floor(3+e*5)),Gp&&Gp(e),Op(wp.LAND,{impactStrength:e})}Q.onGround=!0}Fp=Q.onGround,Q.onGround?(Q.vel.x*=bu,Q.vel.z*=bu):(Q.vel.x*=xu,Q.vel.z*=xu);let o=.4;for(let e=0;e<Jp.length;e++){let t=Jp[e],n=Q.pos.x-t.x,r=Q.pos.z-t.z,i=n*n+r*r;if(!(i>4)&&(.6+o,i<1&&i>.001)){let e=1/Math.sqrt(i);Q.pos.x=t.x+n*e*1,Q.pos.z=t.z+r*e*1}}let s=Q.pos.y-Cu;for(let e=0;e<Yp.length;e++){let t=Yp[e];if(t.scale!==void 0&&t.scale<.55)continue;let n=Q.pos.x-t.x,r=Q.pos.z-t.z,i=n*n+r*r;if(i>9||t.topY!==void 0&&s>t.topY-.1)continue;let a=t.colR+o;if(i<a*a&&i>.001){let e=1/Math.sqrt(i);Q.pos.x=t.x+n*e*a,Q.pos.z=t.z+r*e*a}}if(Q.pos.x*Q.pos.x+Q.pos.z*Q.pos.z>8100){let e=Math.atan2(Q.pos.z,Q.pos.x);Q.pos.x=Math.cos(e)*90,Q.pos.z=Math.sin(e)*90}od.position.copy(Q.pos);let c=t.x*t.x+t.z*t.z>.25&&Q.onGround;c?Lp=0:Lp+=e,Ap+=((c?n?.06:.035:0)-Ap)*e*6,c&&(kp+=e*(n?12:8));let l=Math.sin(kp)*Ap;if(c&&Up){let e=Math.sin(kp)>=0?1:-1;Kp>0&&e<0&&(Up(n),Op(wp.FOOTSTEP,{sprinting:n,nearWater:!1})),Kp=e}Np=n&&c?78:65,Mp+=(Np-Mp)*e*4,Math.abs(Lu.fov-Mp)>.01&&(Lu.fov=Mp,Lu.updateProjectionMatrix()),Pp*=.04**e,Pp<.001&&(Pp=0),jp=l-Pp}function em(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new fr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=tm(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=tm(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}return c}function tm(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new nr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var nm=null;function rm(){if(nm)return nm;let t=document.createElement(`canvas`);t.width=256,t.height=512;let n=t.getContext(`2d`),r=n.createLinearGradient(0,0,0,512);r.addColorStop(0,`#7a5840`),r.addColorStop(.3,`#6d4d38`),r.addColorStop(.7,`#5a3f2e`),r.addColorStop(1,`#4e3525`),n.fillStyle=r,n.fillRect(0,0,256,512);for(let e=0;e<28;e++){let t=e/28*256+Math.sin(e*3.7)*6,r=2+Math.sin(e*2.1)*1.5,i=Math.sin(e*1.3+.5)*.5+.5;n.strokeStyle=`rgba(${Math.floor(75+i*45)},${Math.floor(50+i*30)},${Math.floor(25+i*18)},0.5)`,n.lineWidth=r,n.beginPath();let a=0;for(n.moveTo(t,a);a<512;){a+=8+Math.random()*12;let r=Math.sin(a*.03+e)*3;n.lineTo(t+r,a)}n.stroke()}for(let e=0;e<18;e++){let t=e/18*256+Math.sin(e*5.3)*8;n.strokeStyle=`rgba(20,12,6,0.35)`,n.lineWidth=.8+Math.random()*1.2,n.beginPath();let r=Math.random()*40;for(n.moveTo(t,r);r<512;)r+=5+Math.random()*10,n.lineTo(t+Math.sin(r*.05+e*2)*4,r);n.stroke()}for(let e=0;e<30;e++){let t=e/30*512+Math.random()*10;n.strokeStyle=`rgba(${55+Math.random()*30},${38+Math.random()*20},${18+Math.random()*12},0.2)`,n.lineWidth=.5+Math.random()*1.5,n.beginPath(),n.moveTo(0,t);for(let r=0;r<256;r+=10)n.lineTo(r,t+Math.sin(r*.04+e)*2);n.stroke()}for(let e=0;e<5;e++){let e=Math.random()*256,t=50+Math.random()*412,r=4+Math.random()*6,i=3+Math.random()*5,a=n.createRadialGradient(e,t,0,e,t,r);a.addColorStop(0,`rgba(15,8,4,0.5)`),a.addColorStop(.5,`rgba(30,18,10,0.3)`),a.addColorStop(1,`rgba(40,25,14,0)`),n.fillStyle=a,n.beginPath(),n.ellipse(e,t,r,i,0,0,Math.PI*2),n.fill()}for(let e=0;e<8;e++){let t=Math.random()*256;n.strokeStyle=`rgba(34,136,85,0.15)`,n.lineWidth=.5+Math.random()*.8,n.beginPath();let r=Math.random()*512*.3;n.moveTo(t,r);let i=30+Math.random()*80;for(;r<r+i&&r<512;)r+=4+Math.random()*6,n.lineTo(t+Math.sin(r*.08+e*2)*2,r);n.stroke()}return nm=new Yi(t),nm.wrapS=e,nm.wrapT=e,nm}var im=[{leaf:1332520,glow:2280567,core:4521898},{leaf:931880,glow:3390378,core:5636044},{leaf:1721376,glow:4508757,core:7864200},{leaf:1060912,glow:2267562,core:4513262},{leaf:1583172,glow:3377356,core:5618687}],am=null;function om(){if(am)return am;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,`rgba(68, 255, 136, 0.55)`),n.addColorStop(.25,`rgba(34, 204, 100, 0.35)`),n.addColorStop(.6,`rgba(20, 120, 60, 0.12)`),n.addColorStop(1,`rgba(0, 0, 0, 0)`),t.fillStyle=n,t.fillRect(0,0,64,64),am=new Yi(e),am}var sm=null;function cm(){if(sm)return sm;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createImageData(128,128),r=n.data;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let n=t-64,i=e-64,a=Math.sqrt(n*n+i*i),o=Math.atan2(i,n),s=a/(64*(.82+.09*Math.sin(o*3+.5)+.06*Math.sin(o*5+1.7)+.03*Math.sin(o*7+3.1))),c;c=s<.5?1:Math.max(0,1-((s-.5)/.5)**1.5);let l=Math.floor(c*255),u=(e*128+t)*4;r[u]=l,r[u+1]=l,r[u+2]=l,r[u+3]=255}return t.putImageData(n,0,0),sm=new Yi(e),sm}function lm(e,t){let n=new ui(new Xr({map:om(),color:3394696,transparent:!0,opacity:.65,depthWrite:!1,blending:2})),r=e*.55;return n.scale.set(r*2.2,r*1.6,1),n.position.y=t+e*.6,n.visible=!1,X.add(n),n}function um(e){let t=new U,n=6+Z()*10,r=.2+Z()*.3,i=r*1.8,a=new H(new W(r*.4,i,n,8));a.material=new K({color:8017984}),a.position.y=n/2,a.userData._cat=`trunk`,t.add(a);let o=2+Math.floor(Z()*3);for(let e=0;e<o;e++){let i=e/o*6.28+Z()*.5,a=n*.4+Z()*n*.4,s=new H(new W(.008,.015,a,3));s.material=new K({color:2263125}),s.position.set(Math.cos(i)*r*.74,n*.15+a/2,Math.sin(i)*r*.74),s.userData._cat=`detail`,t.add(s)}let s=new R(0,1,0),c=4+Math.floor(Z()*4);for(let e=0;e<c;e++){let n=e/c*6.28+Z()*.4,r=.8+Z()*1.8,a=i*(.3+Z()*.2),o=.03+Z()*.03,l=-.25-Z()*.25,u=Math.cos(n)*Math.cos(l),d=Math.sin(l),f=Math.sin(n)*Math.cos(l),p=new R(u,d,f).normalize(),m=new W(o,a,r,5);m.translate(0,r/2,0);let h=new H(m,new K({color:6967352}));h.position.set(Math.cos(n)*i*.6,.05,Math.sin(n)*i*.6);let g=new Ot().setFromUnitVectors(s,p);if(h.quaternion.copy(g),h.userData._cat=`trunk`,t.add(h),Z()<.6){let e=.4+Z()*.3,o=n+(Z()-.5)*1.2,c=.5+Z()*1,l=new R(Math.cos(o)*Math.cos(-.1),Math.sin(-.1),Math.sin(o)*Math.cos(-.1)).normalize(),p=new W(.02,a*.3,c,4);p.translate(0,c/2,0);let m=new H(p,new K({color:6967352})),h=new R(Math.cos(n)*i*.6+u*r*e,.05+d*r*e,Math.sin(n)*i*.6+f*r*e);m.position.copy(h);let g=new Ot().setFromUnitVectors(s,l);m.quaternion.copy(g),m.userData._cat=`trunk`,t.add(m)}else Z(),Z()}let l=im[e%im.length],u=new K({color:8017984}),d=new K({color:6965301}),f=new R(0,1,0);function p(e,n,r,i,a,o){let s=new W(a,i,r,5);s.translate(0,r/2,0);let c=new H(s,o);c.position.copy(e);let l=n.clone().normalize(),u=new Ot().setFromUnitVectors(f,l);c.quaternion.copy(u),c.userData._cat=`trunk`,t.add(c)}function m(e,n,r,i){let a=6+Math.floor(Z()*3),o=i*.45;for(let s=0;s<a;s++){let a=i*(.3+Z()*.4),s=Z()<.3,c=new ho(.01,.01),u=c.attributes.position.count,d=new Float32Array(u);for(let e=0;e<u;e++)d[e]=a;c.setAttribute(`quadSize`,new nr(d,1));let f=new H(c,new K({color:s?l.core:l.leaf}));f.position.set(e+(Z()-.5)*o*2,n+(Z()-.3)*o*1.4,r+(Z()-.5)*o*2),f.userData._cat=`canopy`,t.add(f)}let s=new H(new po(i*.5,1));s.material=new K({color:l.glow}),s.position.set(e,n,r),s.scale.set(1+Z()*.3,.7+Z()*.4,1+Z()*.3),s.userData._cat=`glow`,t.add(s)}let h=2+Math.floor(Z()*2);for(let e=0;e<h;e++){let i=n*(.3+Z()*.25),a=e/h*Math.PI*2+Z()*1,o=.35+Z()*.45,s=1+Z()*1.8,c=r*.4,l=r*.08,d=Math.cos(a)*Math.cos(o),f=Math.sin(o),m=Math.sin(a)*Math.cos(o),g=new R(d,f,m),_=new R(Math.cos(a)*r*.95,i,Math.sin(a)*r*.95);if(p(_,g,s,c,l,u),Z()<.4){let e=.4+Z()*.8,n=new H(new W(.008,.003,e,3));n.material=new K({color:2773040});let r=.4+Z()*.4;n.position.set(_.x+d*s*r,_.y+f*s*r-e/2,_.z+m*s*r),n.userData._cat=`detail`,t.add(n)}else Z(),Z()}let g=5+Math.floor(Z()*4);for(let e=0;e<g;e++){let i=n*(.55+Z()*.37),a=e/g*Math.PI*2+Z()*.5,o=.6+Z()*.55,s=1.5+Z()*3,c=r*.35,l=.03+Z()*.02,f=Math.cos(a)*Math.cos(o),h=Math.sin(o),_=Math.sin(a)*Math.cos(o),v=new R(f,h,_),y=new R(Math.cos(a)*r*.95,i,Math.sin(a)*r*.95);p(y,v,s,c,l,u),m(y.x+f*s,y.y+h*s,y.z+_*s,.8+Z()*1.5);let b=1+Math.floor(Z()*3);for(let e=0;e<b;e++){let e=.35+Z()*.35,t=new R(y.x+f*s*e,y.y+h*s*e,y.z+_*s*e),n=a+(Z()-.5)*1.8,r=.45+Z()*.55,i=.6+Z()*1.4,o=new R(Math.cos(n)*Math.cos(r),Math.sin(r),Math.sin(n)*Math.cos(r));p(t,o,i,.04,.012,d),m(t.x+o.x*i,t.y+o.y*i,t.z+o.z*i,.5+Z()*.8)}if(Z()<.3){let e=.3+Z()*.7,n=new H(new W(.008,.003,e,3));n.material=new K({color:2773040});let r=.5+Z()*.3;n.position.set(y.x+f*s*r,y.y+h*s*r-e/2,y.z+_*s*r),n.userData._cat=`detail`,t.add(n)}else Z(),Z()}let _=Math.floor(Z()*3);for(let e=0;e<_;e++){let e=1+Z()*n*.4,i=Z()*6.28,a=new H(new G(.08+Z()*.08,5,3));a.material=new K({color:5911840}),a.scale.set(1.5,.3,1),a.position.set(Math.cos(i)*r*.8,e,Math.sin(i)*r*.8),a.rotation.y=-i,a.userData._cat=`detail`,t.add(a)}let v=new H(new G(2.5+Z()*1.5,8,6));return v.material=new K({color:new z(Y.leaf)}),v.position.y=n*.85,v.userData._cat=`glow`,t.add(v),t.userData.treeH=n,t}function dm(e,t){let n=Af();jf(7919+t*1013+e*3571);let r=um(e),i=r.userData.treeH;jf(n),r.updateMatrixWorld(!0);let a=[],o=[],s=[],c=[],l=new z;for(let e=0;e<r.children.length;e++){let t=r.children[e];if(!t.isMesh)continue;let n=t.geometry.clone();if(t.updateMatrix(),n.applyMatrix4(t.matrix),n.index){let e=n.toNonIndexed();n.dispose(),n=e}let i=t.userData._cat||`trunk`;i===`trunk`?l.set(16777215):l.copy(t.material.color);let u=n.attributes.position.count,d=new Float32Array(u*3);for(let e=0;e<u;e++)d[e*3]=l.r,d[e*3+1]=l.g,d[e*3+2]=l.b;if(n.setAttribute(`color`,new nr(d,3)),i===`trunk`){if(!n.attributes.uv){let e=new Float32Array(u*2);n.setAttribute(`uv`,new nr(e,2))}}else i===`canopy`||n.attributes.uv&&n.deleteAttribute(`uv`);i===`trunk`?a.push(n):i===`canopy`?o.push(n):i===`glow`?s.push(n):i===`detail`&&c.push(n),t.material.dispose()}let u=a.length>0?em(a):null,d=o.length>0?em(o):null,f=s.length>0?em(s):null,p=c.length>0?em(c):null;for(let e of a)e.dispose();for(let e of o)e.dispose();for(let e of s)e.dispose();for(let e of c)e.dispose();return{trunkGeo:u,canopyGeo:d,glowGeo:f,detailGeo:p,treeH:i,palIdx:e}}var fm=new Mn,pm=new R(0,1,0),mm=new R,hm=new Ot,gm=new Ot;new Ot;var _m=new Ot;new Oi,new an,new R;var vm=.15;function ym(e){e.vertexShader=e.vertexShader.replace(`void main() {`,`attribute float quadSize;
void main() {`),e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
    vec2 billboardOffset = (uv - 0.5) * 2.0 * quadSize;`),e.vertexShader=e.vertexShader.replace(`#include <project_vertex>`,`#include <project_vertex>
    mvPosition.xy += billboardOffset;
    gl_Position = projectionMatrix * mvPosition;`)}function bm(e,t,n,r){mm.set(e,t,n),hm.setFromUnitVectors(pm,mm),hm.slerp(gm,1-vm),_m.setFromAxisAngle(pm,r),fm.quaternion.copy(hm).multiply(_m)}function xm(e){let t=[];for(let n=0;n<e;n++){let e=n%im.length,r=Math.floor(n/im.length);t.push(dm(e,r))}return t}function Sm(e,t,n){let r=[];for(let t=0;t<e.length;t++){let i=e[t],a=im[i.palIdx],o=new K({vertexColors:!0,map:rm(),roughness:.75,emissive:5583640,emissiveIntensity:.6}),s=i.trunkGeo?new xi(i.trunkGeo,o,n):null;s&&(s.instanceMatrix.setUsage(We),s.count=0,s.frustumCulled=!1,X.add(s));let c=new K({vertexColors:!0,roughness:.5,emissive:a.glow,emissiveIntensity:1.2,transparent:!0,opacity:.55,depthWrite:!1,side:2,alphaMap:cm(),alphaTest:.12});c.onBeforeCompile=ym;let l=i.canopyGeo?new xi(i.canopyGeo,c,n):null;l&&(l.instanceMatrix.setUsage(We),l.count=0,l.frustumCulled=!1,X.add(l));let u=new K({vertexColors:!0,emissive:a.glow,emissiveIntensity:.4,transparent:!0,opacity:.15,depthWrite:!1}),d=i.glowGeo?new xi(i.glowGeo,u,n):null;d&&(d.instanceMatrix.setUsage(We),d.count=0,d.frustumCulled=!1,X.add(d));let f=new K({vertexColors:!0,emissive:a.glow,emissiveIntensity:.4}),p=i.detailGeo?new xi(i.detailGeo,f,n):null;p&&(p.instanceMatrix.setUsage(We),p.count=0,p.frustumCulled=!1,X.add(p)),r.push({trunk:s,canopy:l,glow:d,detail:p,trunkMat:o,canopyMat:c,glowMat:u,detailMat:f,instances:[],treeH:i.treeH})}for(let n=0;n<t.length;n++){let i=n%e.length,a=t[n],o=a.yRot,s=a.scale,c=Ef(a.x,a.z);fm.position.set(a.x,a.y,a.z),bm(c.x,c.y,c.z,o),fm.scale.setScalar(s),fm.updateMatrix();let l=r[i].instances.length;r[i].trunk&&r[i].trunk.setMatrixAt(l,fm.matrix),r[i].canopy&&r[i].canopy.setMatrixAt(l,fm.matrix),r[i].glow&&r[i].glow.setMatrixAt(l,fm.matrix),r[i].detail&&r[i].detail.setMatrixAt(l,fm.matrix),r[i].instances.push({x:a.x,z:a.z,y:a.y,yRot:o,scale:s,treeH:a.treeH||r[i].treeH,posIdx:n,nx:c.x,ny:c.y,nz:c.z})}for(let e=0;e<r.length;e++){let t=r[e].instances.length;r[e].trunk&&(r[e].trunk.count=t),r[e].canopy&&(r[e].canopy.count=t),r[e].glow&&(r[e].glow.count=t),r[e].detail&&(r[e].detail.count=0)}return r}var Cm={mushCap:new G(.5,8,5),mushStem:new W(.06,.1,.6,5),mushDot:new G(.06,4,3),crystal:new W(0,.35,1.8,6),crystalSm:new W(0,.18,.9,5),fly:new G(.06,4,3),spore:new G(.04,3,3),dandSeed:new G(.025,3,3),bubble:new G(.15,8,6),starMote:new G(.03,3,3),dustMote:new G(.035,3,3)},wm=new K({color:Y.mushStem,roughness:.7,emissive:Y.mushGlow,emissiveIntensity:.1}),Tm=new K({color:Y.mushStem,emissive:Y.mushGlow,emissiveIntensity:.15,roughness:.6}),Em=new K({color:6693546,emissive:Y.mushGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,side:2}),Dm=new B({color:16777215,transparent:!0,opacity:.9}),Om=new K({color:15663103,emissive:11197951,emissiveIntensity:.2,transparent:!0,opacity:.6,roughness:0,metalness:.5}),km=new K({color:4465322,emissive:Y.mushGlow,emissiveIntensity:.15,transparent:!0,opacity:.35}),Am=new K({color:Y.mushStem,emissive:Y.mushGlow,emissiveIntensity:.08,roughness:.7}),jm=new K({color:1708040,roughness:.95}),Mm=new B({color:Y.mushGlow,transparent:!0,opacity:.2}),Nm=new K({color:657416,transparent:!0,opacity:.2,roughness:.95,side:2});function Pm(e,t){let n=new U,r=.4+Z()*1.2,i=Z()*6.28,a=.8+Z()*1.5,o=.5+Z()*.8,s=new H(Cm.mushStem,wm);s.position.y=.3,n.add(s);let c=new H(new yo(.09,.012,4,8),Tm);c.position.y=.42,c.rotation.x=Math.PI/2,n.add(c);let l=new K({color:Y.mushCap,emissive:Y.mushGlow,emissiveIntensity:o,roughness:.3,transparent:!0,opacity:.9}),u=new H(Cm.mushCap,l);u.scale.set(1,.5,1),u.position.y=.55,u.castShadow=!0,u.receiveShadow=!0,n.add(u);for(let e=0;e<8;e++){let t=e/8*6.28,r=new H(new ho(.35,.08),Em);r.position.set(Math.cos(t)*.15,.48,Math.sin(t)*.15),r.rotation.y=-t,r.rotation.x=.1,n.add(r)}for(let e=0;e<4;e++){let e=new H(Cm.mushDot,Dm),t=Z()*6.28,r=.15+Z()*.25;e.position.set(Math.cos(t)*r,.6+Z()*.1,Math.sin(t)*r),n.add(e)}let d=2+Math.floor(Z()*2);for(let e=0;e<d;e++){let e=new H(new G(.015+Z()*.015,4,3),Om),t=Z()*6.28,r=.1+Z()*.2;e.position.set(Math.cos(t)*r,.63+Z()*.08,Math.sin(t)*r),n.add(e)}for(let e=0;e<4;e++){let e=Z()*6.28,t=new H(new W(.004,.002,.15+Z()*.25,3),km);t.position.set(Math.cos(e)*.12,.01,Math.sin(e)*.12),t.rotation.z=1.3*(e<3.14?1:-1),t.rotation.y=e,n.add(t)}let f=new K({color:Y.mushCap,emissive:Y.mushGlow,emissiveIntensity:o*.6,transparent:!0,opacity:.4}),p=new H(new yo(.38,.01,4,12),f);p.position.y=.49,p.rotation.x=Math.PI/2,n.add(p);let m=new H(new G(.08,5,3),Am);m.scale.set(1,.5,1),m.position.y=.04,n.add(m);for(let e=0;e<3;e++){let e=Z()*6.28,t=.1+Z()*.12,r=new H(new G(.008+Z()*.008,3,3),jm);r.position.set(Math.cos(e)*t,.005,Math.sin(e)*t),n.add(r)}for(let e=0;e<4;e++){let e=new H(new G(.006,3,3),Mm);e.position.set((Z()-.5)*.2,.35+Z()*.1,(Z()-.5)*.2),n.add(e)}let h=new K({color:11167453,emissive:Y.mushGlow,emissiveIntensity:o*.3,roughness:.5}),g=3+Math.floor(Z()*3);for(let e=0;e<g;e++){let e=Z()*6.28,t=Z()*.25,r=new H(new G(.015+Z()*.015,3,3),h);r.position.set(Math.cos(e)*t,.58+Z()*.06,Math.sin(e)*t),n.add(r)}let _=new H(new Ea(.18,8),Nm);return _.rotation.x=-Math.PI/2,_.position.y=.005,n.add(_),n.scale.setScalar(r),n.position.set(e,0,t),X.add(n),{group:n,capMat:l,phase:i,speed:a,base:o,x:e,z:t}}var Fm=new K({color:1710626,roughness:.9,metalness:.1}),Im=new B({color:Y.crystalCore,transparent:!0,opacity:.5}),Lm=new B({color:11206638,transparent:!0,opacity:.6}),Rm=new K({color:Y.crystal,emissive:Y.crystalCore,emissiveIntensity:.8,transparent:!0,opacity:.5}),zm=new K({color:3364198,emissive:1122867,emissiveIntensity:.05,roughness:.9,side:2}),Bm=new B({color:Y.crystalCore,transparent:!0,opacity:.2}),Vm=new K({color:1135940,emissive:1127202,emissiveIntensity:.3,transparent:!0,opacity:.25}),Hm=new B({color:11206638,transparent:!0,opacity:.06}),Um=new B({color:Y.crystal,transparent:!0,opacity:.06,side:2});function Wm(e,t){let n=new U,r=Z()*6.28,i=new K({color:Y.crystal,emissive:Y.crystalCore,emissiveIntensity:1.5,transparent:!0,opacity:.7,roughness:.1,metalness:.5}),a=new H(Cm.crystal,i);a.position.y=.9,a.castShadow=!0,n.add(a);for(let e=0;e<3;e++){let t=new H(Cm.crystalSm,i),r=e/3*6.28+Z()*.5;t.position.set(Math.cos(r)*.4,.45,Math.sin(r)*.4),t.rotation.z=(Z()-.5)*.8,t.castShadow=!0,n.add(t)}let o=3+Math.floor(Z()*3);for(let e=0;e<o;e++){let e=Z()*6.28,t=.2+Z()*.5,r=.08+Z()*.12,i=new H(new G(r,4,3),Fm);i.scale.set(1+Z()*.5,.5+Z()*.4,1+Z()*.5),i.position.set(Math.cos(e)*t,r*.3,Math.sin(e)*t),i.rotation.set(Z(),Z(),Z()),n.add(i)}for(let e=0;e<3;e++){let e=new H(new W(.008,.008,.4+Z()*.8,3),Im);e.position.set((Z()-.5)*.15,.5+Z()*.7,(Z()-.5)*.15),e.rotation.set((Z()-.5)*.8,(Z()-.5)*.5,(Z()-.5)*.8),n.add(e)}for(let e=0;e<5;e++){let e=new H(new G(.012,3,3),Lm);e.position.set((Z()-.5)*1,.3+Z()*1.5,(Z()-.5)*1),n.add(e)}for(let e=0;e<4;e++){let e=Z()*6.28,t=.3+Z()*.3,r=new H(new W(0,.015,.12+Z()*.1,3),Rm);r.position.set(Math.cos(e)*t,.06+Z()*.1,Math.sin(e)*t),r.rotation.z=(Z()-.5)*.6,n.add(r)}for(let e=0;e<2;e++){let e=Z()*6.28,t=.2+Z()*.3,r=new H(new Ea(.04+Z()*.03,5),zm);r.rotation.x=-Math.PI/2+Z()*.4,r.position.set(Math.cos(e)*t,.05,Math.sin(e)*t),n.add(r)}for(let e=0;e<2;e++){let e=new H(new W(.003,.003,.6+Z()*.4,3),Bm);e.position.set((Z()-.5)*.3,.7+Z()*.5,(Z()-.5)*.3),e.rotation.set((Z()-.5)*1,Z(),(Z()-.5)*1),n.add(e)}for(let e=0;e<4;e++){let e=new H(new G(.02+Z()*.02,3,3),Vm);e.position.set((Z()-.5)*.15,.4+Z()*.6,(Z()-.5)*.15),n.add(e)}let s=new H(new yo(.35,.02,4,10),Hm);s.position.y=.6,s.rotation.x=Math.PI/2+Z()*.3,n.add(s);let c=new H(new Ea(.8,8),Um);return c.rotation.x=-Math.PI/2,c.position.y=.01,n.add(c),n.position.set(e,0,t),X.add(n),{group:n,mat:i,phase:r,x:e,z:t}}var Gm={uTime:{value:0},uWindAmp:{value:1},uWindLeanX:{value:0},uWindLeanZ:{value:0},uPlayerX:{value:0},uPlayerZ:{value:0},uGlowMult:{value:1}};function Km(e,t,n,r,i){let a=new fr,o=[],s=[],c=[],l=r||20,u=new z(i?i[0]:663568),d=new z(i?i[1]:1388056),f=new z(i?i[2]:2777141),p=new z(i?i[3]:4517461),m=new z(i?i[4]:7864268),h=new z(i?i[5]:14548838),g=new z,_=Tf(e,t);for(let r=0;r<l;r++){let r=Z()*6.28,i=Z()*n,a=Math.cos(r)*i,l=Math.sin(r)*i,v=Tf(e+a,t+l)-_,y=.25+Z()*.65,b=.03+Z()*.05,x=(Z()-.5)*.2,S=(Z()-.5)*.2,C=(Z()-.5)*.12,w=Z()<.5?u:d,T=Z(),E=T<.4?p:T<.7?m:h,D=y*.35,O=y*.7,k=x*.3,A=x*.7,j=S*.3,ee=S*.7;o.push(a-b,v+.01,l),o.push(a+b,v+.01,l),o.push(a+k-b*.9,v+D,l+j),c.push(0,0,.35),s.push(w.r,w.g,w.b,w.r,w.g,w.b),g.copy(w).lerp(f,.4),s.push(g.r,g.g,g.b),o.push(a+b,v+.01,l),o.push(a+k+b*.9,v+D,l+j),o.push(a+k-b*.9,v+D,l+j),c.push(0,.35,.35),s.push(w.r,w.g,w.b),g.copy(w).lerp(f,.4),s.push(g.r,g.g,g.b,g.r,g.g,g.b);let te=b*.65;o.push(a+k-b*.9,v+D,l+j),o.push(a+k+b*.9,v+D,l+j),o.push(a+A-te,v+O,l+ee+C),c.push(.35,.35,.7),g.copy(w).lerp(f,.4),s.push(g.r,g.g,g.b,g.r,g.g,g.b),g.copy(f).lerp(E,.3),s.push(g.r,g.g,g.b),o.push(a+k+b*.9,v+D,l+j),o.push(a+A+te,v+O,l+ee+C),o.push(a+A-te,v+O,l+ee+C),c.push(.35,.7,.7),g.copy(w).lerp(f,.4),s.push(g.r,g.g,g.b),g.copy(f).lerp(E,.3),s.push(g.r,g.g,g.b,g.r,g.g,g.b),o.push(a+A-te,v+O,l+ee+C),o.push(a+A+te,v+O,l+ee+C),o.push(a+x+C*2,v+y,l+S+C*1.5),c.push(.7,.7,1),g.copy(f).lerp(E,.3),s.push(g.r,g.g,g.b,g.r,g.g,g.b),s.push(E.r,E.g,E.b)}let v=new z(i?i[6]:1725736),y=new z(i?i[7]:3385941),b=Math.floor(l*.3);for(let r=0;r<b;r++){let r=Z()*6.28,i=Z()*n*.9,a=Math.cos(r)*i,l=Math.sin(r)*i,u=Tf(e+a,t+l)-_,d=.02+Z()*.03;o.push(a-d,u+.01,l),o.push(a+d,u+.01,l),o.push(a,u+.03+Z()*.02,l+d),c.push(0,0,.05),s.push(v.r,v.g,v.b),s.push(v.r,v.g,v.b),s.push(y.r,y.g,y.b)}a.setAttribute(`position`,new V(o,3)),a.setAttribute(`color`,new V(s,3)),a.setAttribute(`bladeHeight`,new V(c,1)),a.computeVertexNormals();let x=new K({vertexColors:!0,roughness:.7,side:2,emissive:i?i[8]:4521830,emissiveIntensity:.35}),S=e,C=t;x.onBeforeCompile=e=>{e.uniforms.uTime=Gm.uTime,e.uniforms.uWindAmp=Gm.uWindAmp,e.uniforms.uWindLeanX=Gm.uWindLeanX,e.uniforms.uWindLeanZ=Gm.uWindLeanZ,e.uniforms.uPlayerX=Gm.uPlayerX,e.uniforms.uPlayerZ=Gm.uPlayerZ,e.uniforms.uGlowMult=Gm.uGlowMult,e.uniforms.uPatchX={value:S},e.uniforms.uPatchZ={value:C},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
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
      `),e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
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
      `),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
      varying float vGlow;
      uniform float uGlowMult;
      `),e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
      totalEmissiveRadiance *= (1.0 + vGlow * 10.0) * uGlowMult;
      `)};let w=new H(a,x);return w.position.set(e,0,t),X.add(w),{mesh:w,geo:a,cx:e,cz:t}}function qm(e,t){let n=new U,r=new K({color:Y.fern,emissive:Y.fernGlow,emissiveIntensity:.2,roughness:.7,side:2}),i=3+Math.floor(Z()*2),a=.5+Z()*.7,o=new K({color:1708552,roughness:.95}),s=new H(new G(.06,5,3),o);s.scale.set(1.5,.5,1.5),s.position.y=.02,n.add(s);for(let e=0;e<3;e++){let e=Z()*6.28,t=new H(new W(.003,.002,.08,3),o);t.position.set(Math.cos(e)*.06,.01,Math.sin(e)*.06),t.rotation.z=(e<3.14?1:-1)*1.2,t.rotation.y=e,n.add(t)}for(let e=0;e<i;e++){let t=e/i*6.28+Z()*.3,a=new H(new W(.004,.006,.55,3),new K({color:1721632,roughness:.8}));a.position.set(Math.cos(t)*.15,.25,Math.sin(t)*.15),a.rotation.y=-t,a.rotation.x=-.6-Z()*.4,n.add(a);let o=new H(new ho(.12,.6,1,3),r);o.position.set(Math.cos(t)*.15,.25,Math.sin(t)*.15),o.rotation.y=-t,o.rotation.x=-.6-Z()*.4,n.add(o);for(let e=0;e<6;e++){let i=new H(new ho(.07,.06,1,1),r),a=.06+e*.08,o=e%2==0?1:-1;i.position.set(Math.cos(t)*.21,a,Math.sin(t)*(.15+.06*o)),i.rotation.y=-t,i.rotation.x=-.8,i.rotation.z=o*.5,n.add(i)}let s=new K({color:8939042,emissive:4469521,emissiveIntensity:.1});for(let e=0;e<3;e++){let r=new H(new G(.008,3,3),s),i=.12+e*.12;r.position.set(Math.cos(t)*.16999999999999998,i-.01,Math.sin(t)*.16999999999999998),n.add(r)}}let c=new K({color:Y.fernGlow,emissive:Y.fernGlow,emissiveIntensity:.3}),l=new H(new G(.04,4,3),c);l.position.y=.35,n.add(l);let u=new H(new W(.006,.003,.06,3),c);u.position.set(.02,.37,0),u.rotation.z=-.8,n.add(u);let d=new K({color:15663103,emissive:8960989,emissiveIntensity:.1,transparent:!0,opacity:.5,roughness:0,metalness:.5});for(let e=0;e<3;e++){let e=Z()*6.28,t=Z()*.2,r=new H(new G(.006+Z()*.005,3,3),d);r.position.set(Math.cos(e)*t,.12+Z()*.2,Math.sin(e)*t),n.add(r)}let f=new K({color:3811856,roughness:.9,side:2,transparent:!0,opacity:.6}),p=new H(new ho(.1,.4,1,2),f),m=Z()*6.28;p.position.set(Math.cos(m)*.12,.05,Math.sin(m)*.12),p.rotation.x=-1.3,p.rotation.y=m,n.add(p);let h=new B({color:2768928,transparent:!0,opacity:.3});for(let e=0;e<4;e++){let e=new H(new W(.001,.001,.015,3),h);e.position.set((Z()-.5)*.08,.08+Z()*.15,(Z()-.5)*.08),e.rotation.z=(Z()-.5)*1.5,n.add(e)}let g=new K({color:1708552,roughness:.95});for(let e=0;e<3;e++){let e=new H(new G(.006,3,3),g);e.position.set((Z()-.5)*.1,.005,(Z()-.5)*.1),n.add(e)}return n.scale.setScalar(a),n.position.set(e,0,t),X.add(n),{group:n,phase:Z()*6.28}}function Jm(e,t){let n=new U,r=.25+Z()*.4,i=new K({color:Y.flowerStem,roughness:.8}),a=new H(new W(.01,.015,r,4),i);a.position.y=r/2,n.add(a);for(let e=0;e<2;e++){let t=new H(new Da(.004,.012,3),i);t.position.set(.012,r*.25+e*r*.25,0),t.rotation.z=-1.2,n.add(t)}let o=new K({color:Y.fern,roughness:.7,side:2}),s=new H(new ho(.06,.04),o);s.position.set(.03,r*.3,0),s.rotation.z=-.5,n.add(s);let c=new H(new ho(.05,.035),o);c.position.set(-.025,r*.5,.01),c.rotation.z=.6,n.add(c);let l=new K({color:1728560,roughness:.7,side:2});for(let e=0;e<5;e++){let t=e/5*6.28+.3,i=new H(new ho(.025,.02),l);i.position.set(Math.cos(t)*.025,r-.005,Math.sin(t)*.025),i.rotation.x=-1.2,i.rotation.y=-t,n.add(i)}let u=new K({color:Y.flower,emissive:Y.flowerGlow,emissiveIntensity:.4+Z()*.4,transparent:!0,opacity:.85,side:2}),d=new B({color:Y.flowerGlow,transparent:!0,opacity:.15});for(let e=0;e<6;e++){let t=e/6*6.28,i=new H(new ho(.05,.04),u);i.position.set(Math.cos(t)*.03,r+.01,Math.sin(t)*.03),i.rotation.x=-.8,i.rotation.y=-t,n.add(i);for(let e=0;e<2;e++){let i=new H(new W(.001,.001,.03,3),d);i.position.set(Math.cos(t)*(.025+e*.008),r+.012,Math.sin(t)*(.025+e*.008)),i.rotation.x=-.8,i.rotation.y=-t,i.rotation.z=(e-.5)*.3,n.add(i)}}let f=new K({color:16777215,emissive:Y.flowerGlow,emissiveIntensity:1.2}),p=new H(new G(.02,4,3),f);p.position.y=r+.02,n.add(p);let m=new B({color:16777130,transparent:!0,opacity:.7}),h=new B({color:16772676}),g=[];for(let e=0;e<3;e++){let t=e/3*6.28+.5,i=new U;i.position.set(Math.cos(t)*.012,r+.03,Math.sin(t)*.012);let a=new H(new W(.002,.002,.025,3),m);i.add(a);let o=new H(new G(.005,3,3),h);o.position.y=.015,i.add(o),n.add(i),g.push(i)}let _=new B({color:16777164,transparent:!0,opacity:.3});for(let e=0;e<2;e++){let e=new H(new G(.006,3,3),_);e.position.set((Z()-.5)*.04,r+.06+Z()*.04,(Z()-.5)*.04),n.add(e)}let v=new K({color:16772778,emissive:16768324,emissiveIntensity:.2,transparent:!0,opacity:.5,roughness:0,metalness:.4}),y=new H(new G(.006,3,3),v);y.position.set(.005,r+.005,.005),n.add(y);let b=new B({color:15662984}),x=new H(new W(.002,.002,.03,3),b);x.position.y=r+.035,n.add(x);let S=new H(new G(.005,3,3),b);S.position.y=r+.055,n.add(S);let C=new K({color:1725728,roughness:.7}),w=new H(new W(.015,.02,.02,5),C);w.position.y=r-.01,n.add(w);let T=new B({color:16777215,transparent:!0,opacity:.35});for(let e=0;e<4;e++){let t=e/4*6.28+.3,i=new H(new G(.004,3,3),T);i.position.set(Math.cos(t)*.045,r+.005,Math.sin(t)*.045),n.add(i)}return n.position.set(e,0,t),X.add(n),{group:n,petalMat:u,stamens:g,phase:Z()*6.28,baseH:r}}var Ym=new K({color:Y.reed,emissive:Y.reedTip,emissiveIntensity:.15,roughness:.7}),Xm=new K({color:Y.reedTip,emissive:Y.reedTip,emissiveIntensity:.35}),Zm=new K({color:1709328,roughness:.95}),Qm=new K({color:Y.reed,roughness:.7,side:2}),$m=new K({color:2771488,roughness:.7}),eh=new B({color:Y.reedTip,transparent:!0,opacity:.4}),th=new K({color:4864536,roughness:.9,side:2,transparent:!0,opacity:.5}),nh=new B({color:15654348,transparent:!0,opacity:.25}),rh=new K({color:2241312,roughness:.9,transparent:!0,opacity:.2});function ih(e,t){let n=new U,r=new H(new G(.08,5,3),Zm);r.scale.set(1.5,.4,1.5),r.position.y=.02,n.add(r);let i=3+Math.floor(Z()*4);for(let e=0;e<i;e++){let e=.6+Z()*1,t=(Z()-.5)*.2,r=(Z()-.5)*.2,i=Z()*6.28,a=.08+Z()*.12,o=[];for(let n=0;n<=6;n++){let s=n/6,c=a*s*s;o.push(new R(t+Math.cos(i)*c,s*e,r+Math.sin(i)*c))}let s=new aa(o),c=new H(new bo(s,8,.012,4,!1),Ym);n.add(c);let l=2+Math.floor(Z()*2);for(let e=0;e<l;e++){let t=.2+e*.25,r=s.getPoint(t),i=new H(new yo(.012,.004,4,6),$m);i.position.copy(r),i.rotation.x=Math.PI/2;let a=s.getTangent(t);i.lookAt(r.x+a.x,r.y+a.y,r.z+a.z),n.add(i)}if(Z()<.7){let e=.1+Z()*.15,t=Z()*6.28,r=s.getPoint(.4),i=new H(new ho(.02,e),Qm);i.position.set(r.x+Math.cos(t)*.02,r.y,r.z+Math.sin(t)*.02),i.rotation.y=-t,i.rotation.x=-.5-Z()*.4,n.add(i)}let u=s.getPoint(1);s.getTangent(1);let d=new H(new G(.025,4,3),Xm);d.scale.set(.8,1.5,.8),d.position.copy(u),d.position.y+=.02,n.add(d);for(let e=0;e<3;e++){let t=e/3*6.28+Z()*.5,r=new H(new G(.003,3,2),eh);r.scale.set(.7,5,.7),r.position.set(u.x+Math.cos(t)*.015,u.y+.03,u.z+Math.sin(t)*.015),r.rotation.z=(Z()-.5)*.4,n.add(r)}}n.position.set(e,0,t),X.add(n);for(let e=0;e<2;e++){let t=(Z()-.5)*.15,r=new H(new ho(.025,.02),th);r.position.set(t,.2+e*.25,(Z()-.5)*.1),r.rotation.set(Z()*.5,Z(),Z()*.5),n.add(r)}for(let e=0;e<3;e++){let e=new H(new G(.005,3,3),nh);e.position.set((Z()-.5)*.15,.8+Z()*.6,(Z()-.5)*.15),n.add(e)}let a=new H(new yo(.1,.008,4,8),rh);return a.rotation.x=Math.PI/2,a.position.y=.03,n.add(a),{group:n,phase:Z()*6.28,swayAmp:.03+Z()*.04}}var ah=10,oh=1/ah,sh=null;function ch(e,t=10){ah=t,oh=1/ah,sh=new Map;for(let t=0;t<e.length;t++){let n=e[t],r=Math.floor(n.x*oh),i=Math.floor(n.z*oh),a=r+`,`+i,o=sh.get(a);o||(o=[],sh.set(a,o)),o.push(n)}}var lh=[],uh=[],dh=[],fh=[],ph=[],mh=[],hh=[],gh=[],_h=[],vh=[],yh=[],bh=[],xh=[],Sh=[],Ch=[],wh=[],Th=[],Eh=[],Dh=[],Oh=[],kh=[],Ah=[],jh=[],Mh=[],Nh=[],Ph=[],Fh=[],Ih=[],Lh=[],Rh=[],zh=[],Bh=[],Vh=0,Hh=0;function Uh(e){uh=e}function Wh(e,t){Vh=e,Hh=t}function Gh(e=10){ch(lh,e)}var Kh=[{center:Mu.center,tol:Mu.tol,type:`deer`},{center:Nu.center,tol:Nu.tol,type:`moth`},{center:Pu.center,tol:Pu.tol,type:`jelly`},{center:Fu.center,tol:Fu.tol,type:`puff`}],qh=400,Jh=!1,Yh=300,Xh=300,Zh=!1,Qh=null,$h=0,eg=0,tg=0,ng=null,rg=!1;function ig(){Zh||(Jh=!0)}function ag(){Jh=!1}function og(e,t,n){if(rg=!1,Zh&&!Jh&&(eg-=e,eg<=0&&(Zh=!1,Qh=null,eg=0,$h=0)),!Jh){tg>0&&(tg=Math.max(0,tg-e*2));return}Xh=700-t*620;for(let e=0;e<Kh.length;e++){let t=Kh[e],r=Math.abs(Xh-t.center);if(r>=t.tol*1.5)continue;let i=1/0;switch(t.type){case`deer`:i=n.deerDist2;break;case`moth`:i=n.mothDist2;break;case`jelly`:i=n.jellyDist2;break;case`puff`:i=n.puffDist2;break}if(i>qh)continue;let a=1-r/(t.tol*1.5);Xh+=(t.center-Xh)*.25*a;break}Yh+=(Xh-Yh)*Math.min(12*e,1),tg=0,ng=null;let r=0;for(let e=0;e<Kh.length;e++){let t=Kh[e],i=Math.abs(Yh-t.center);if(i>=t.tol)continue;let a=1/0;switch(t.type){case`deer`:a=n.deerDist2;break;case`moth`:a=n.mothDist2;break;case`jelly`:a=n.jellyDist2;break;case`puff`:a=n.puffDist2;break}if(a>qh)continue;let o=1-i/t.tol;o>r&&(r=o,ng=t.type)}if(tg=r,tg>.15&&!Zh){if($h+=e*(.5+tg*.5),$h>=1.2){Zh=!0,Qh=ng,eg=3,rg=!0,Op(wp.PITCH_LOCKED,{type:ng});for(let e=0;e<Kh.length;e++)if(Kh[e].type===Qh){Yh=Kh[e].center,Xh=Kh[e].center;break}Jh=!1}}else tg<=.1&&($h=Math.max(0,$h-e*.5))}function sg(){return Jh}function cg(){return Zh}function lg(){return Qh}function ug(){return Yh}function dg(){return tg}function fg(){return ng}function pg(){return Math.min($h/ju,1)}function mg(){return rg}function hg(){Zh=!1,Qh=null,$h=0,eg=0,tg=0,ng=null,Jh=!1,rg=!1}function gg(){Zh&&(eg=3)}var _g=36,vg=64,yg=144,bg=64,xg=2,Sg=.3,Cg=.785,wg=null,Tg=0,Eg=null,Dg=!1,Og=null,kg=[],Ag=!1,jg=!1;function Mg(e,t,n,r,i){if(!r)return Ng(e,t,n);let{nearestJellyDist2:a,nearestJellyPos:o,nearestDeerDist2:s,nearestDeerPos:c,nearestDeerWanderAng:l,nearestMothDist2:u,nearestMothPos:d,playerYaw:f,playerSpeed:p,spacePressed:m,sprinting:h,playerX:g,playerZ:_,time:v}=r,y=null,b=cg(),x=lg(),S=0,C=b&&x===`puff`&&n<225&&n<1/0;if(C&&t&&(y=`puff`,jg||(S=.18)),jg=t,!y&&b&&x===`jelly`&&a<_g&&a<1/0&&p<.5){if(m&&!Ag&&(kg.push(v),kg.length>5&&kg.shift()),Ag=m,kg.length>=2){let e=kg[kg.length-1]-kg[kg.length-2];Math.abs(e-xg)<Sg&&(y=`jelly`)}}else Ag=m;if(!y&&b&&x===`deer`&&!h&&s>=vg&&s<yg&&s<1/0&&p>1){let e=f-l;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;Math.abs(e)<Cg&&(y=`deer`)}if(!y&&b&&x===`moth`&&u<bg&&u<1/0&&p>.5){let e=d.x-g,t=d.z-_,n=f-Math.atan2(e,t);for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;Math.abs(n)<1.047&&(y=`moth`)}if(y){Eg!==y&&(Eg=y,Tg=0);let t=i?.weather?.state||`CLEAR`,n=i?.env?.bioGlow===void 0?1:i.env.bioGlow,a=Au[t]?.[y]||1,s=Ou*e*n*a;if(Tg+=s+S,gg(),Tg>=1&&wg!==y){switch(Tg=1,wg=y,Dg=!0,y){case`puff`:Og=r.nearestPuffPos;break;case`jelly`:Og=o;break;case`deer`:Og=c;break;case`moth`:Og=d;break}Op(wp.CREATURE_ATTUNED,{type:y,pos:Og,playerPos:{x:r.playerX,z:r.playerZ}})}}else Eg&&Tg>0&&!wg&&(Eg===`puff`&&C||(Tg=Math.max(0,Tg-ku*e),Tg===0&&(Eg=null)));return Tg}function Ng(e,t,n){return t&&n<225&&n<1/0?(Eg!==`puff`&&(Eg=`puff`,Tg=0),Tg+=Ou*e,Tg>=1&&wg!==`puff`&&(Tg=1,wg=`puff`,Dg=!0)):Eg===`puff`&&Tg>0&&wg!==`puff`&&(Tg=Math.max(0,Tg-ku*e),Tg===0&&(Eg=null)),Tg}function Pg(){return Eg}function Fg(){return wg}function Ig(){return Og}function Lg(){wg=null,Tg=0,Eg=null,Dg=!1,Og=null,kg=[],jg=!1,hg()}function Rg(){return Dg?(Op(wp.ATTUNEMENT_FLASH,{type:wg,pos:Og}),Dg=!1,!0):!1}var zg={SEEK:`SEEK`,RISING:`RISING`,COMPLETE:`COMPLETE`,FINALE:`FINALE`,TRANSFORM:`TRANSFORM`},Bg={ORBS_REQUIRED:5,OBELISK_RISE_SPEED:.8,FINALE_DURATION:15,TRANSFORM_DURATION:10},Vg={deer:{child:`A Glowing Deer!`,adult:`Biological Metronome Detected`},puffling:{child:`A Little Puffling!`,adult:`Micro-Fauna Cluster Identified`},jelly:{child:`A Floating Jelly!`,adult:`Bioluminescent Drifter Catalogued`},moth:{child:`A Moon Moth!`,adult:`Orbital Pollinator Registered`},fairyRing:{child:`A Circle of Mushrooms!`,adult:`Mycelial Relay Node Mapped`},crystalChain:{child:`The Crystals Are Singing!`,adult:`Resonance Cascade Initiated`},pond:{child:`A Hidden Pond!`,adult:`Aquatic Biosensor Basin Located`},glyph:{child:`A Secret Message!`,adult:`Encoded Surface Signal Deciphered`}},Hg={child:[`The First Little Sun-Seed!`,`The Forest Remembers You`,`Roots of Radiance`,`The Light Grows Stronger`,`All the Sun-Seeds Are Home!`],adult:[`Zone 1 Recalibrated`,`Chronophage Regression: 40%`,`Deep Root Network Restored`,`Temporal Coherence: 80%`,`SYNCHRONIZATION INDEX: 5/5`]},Ug=0,Wg=zg.SEEK,Gg=-25,Kg=-25,qg=0,Jg=0,Yg=0,Xg=0,Zg=!1,Qg=[];function $g(e){Qg=e.map(e=>({...e,found:!1,flashing:!1,flashTimer:0,flyUp:!1,flyY:0,laserActive:!1})),Ug=0,Wg=zg.SEEK,Gg=-25,Kg=-25}function e_(){return{orbsFound:Ug,questPhase:Wg,obeliskY:Gg,transformDone:Zg,orbs:Qg}}function t_(e){Wg===zg.RISING&&(Gg<Kg&&(Gg+=Bg.OBELISK_RISE_SPEED*e,Gg>Kg&&(Gg=Kg),Op(`quest:obeliskMoved`,{y:Gg})),Ug>=Bg.ORBS_REQUIRED&&Gg>=-.01&&(Wg=zg.COMPLETE,qg=0,Op(wp.QUEST_PHASE,{phase:zg.COMPLETE,orbsFound:Ug}))),Wg===zg.COMPLETE&&(qg+=e,qg>12&&(Wg=zg.FINALE,Jg=0,Op(wp.QUEST_PHASE,{phase:zg.FINALE,orbsFound:Ug}))),Wg===zg.FINALE&&(Jg+=e,Jg>30&&(Wg=zg.TRANSFORM,Yg=0,Op(wp.QUEST_PHASE,{phase:zg.TRANSFORM,orbsFound:Ug}))),Wg===zg.TRANSFORM&&(Yg+=e,Yg>=6&&!Zg&&(Zg=!0,Op(`quest:worldTransformed`)),Yg>=20&&(Wg=`FREE_ROAM`,Xg=0,Op(wp.QUEST_PHASE,{phase:`FREE_ROAM`,orbsFound:Ug}))),Wg===`FREE_ROAM`&&(Xg+=e);for(let t=0;t<Qg.length;t++){let n=Qg[t];n.found&&(n.flashing&&(n.flashTimer+=e,n.flashTimer>1.5&&(n.flashing=!1,n.flyUp=!0,Op(`quest:orbFlyStart`,{index:t}))),n.flyUp)&&(n.flyY+=(30-n.flyY)*e*.8,n.flyY>29&&(n.flyUp=!1,n.laserActive=!0,Op(`quest:orbLaserStart`,{index:t})))}}function n_(e,t){let n=Qg[e];if(n.found)return;let r=n.x-t.x,i=n.z-t.z;if(r*r+i*i<4){let t=Fg();if(t){n.found=!0,n.flashing=!0,n.flashTimer=0,n.flyY=1.5,Ug++;let r=25/Bg.ORBS_REQUIRED;return Kg=-25+Ug*r,Wg===zg.SEEK&&(Wg=zg.RISING,Op(wp.QUEST_PHASE,{phase:zg.RISING,orbsFound:Ug})),Op(wp.ORB_COLLECTED,{orbIndex:e,orbsFound:Ug,x:n.x,z:n.z,creatureType:t}),Lg(),!0}else return Op(wp.ORB_REJECTED,{orbIndex:e}),!1}return null}function r_(){return{finale:qg,finalePhase:Jg,transform:Yg,freeRoam:Xg}}var i_=null,a_=[],o_=new Mn,s_=new z,c_=new z(Y.dandSeed);function l_(e){let t=new B({color:16777215,transparent:!0,opacity:1,depthWrite:!1});i_=new xi(Cm.dandSeed,t,e),i_.instanceMatrix.setUsage(We),i_.instanceColor=new pi(new Float32Array(e*3),3),i_.instanceColor.setUsage(We),o_.scale.setScalar(0),o_.updateMatrix();for(let t=0;t<e;t++)i_.setMatrixAt(t,o_.matrix),s_.copy(c_),i_.setColorAt(t,s_),a_.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,drift:0});i_.count=e,i_.frustumCulled=!1,X.add(i_)}function u_(e,t,n){let r=null;for(let e=0;e<a_.length;e++)if(!a_[e].active){r=a_[e];break}if(!r)return;r.x=e+(Math.random()-.5)*.1,r.y=t,r.z=n+(Math.random()-.5)*.1;let i=Math.random()*6.28;r.vx=Math.cos(i)*.5+Math.random()*.3,r.vy=.6+Math.random()*.8,r.vz=Math.sin(i)*.5,r.life=4+Math.random()*5,r.max=r.life,r.active=!0,r.drift=Math.random()*6.28}var d_=0,f_=0,p_=0;function m_(e,t,n){d_=e,f_=t,p_=n}function h_(e,t,n){let r=!1,i=n?.player?.idleTime===void 0?Lp:n.player.idleTime;for(let n=0;n<a_.length;n++){let a=a_[n];if(!a.active){o_.position.set(0,-100,0),o_.scale.setScalar(0),o_.updateMatrix(),i_.setMatrixAt(n,o_.matrix);continue}if(a.life-=e,a.life<=0){a.active=!1,o_.position.set(0,-100,0),o_.scale.setScalar(0),o_.updateMatrix(),i_.setMatrixAt(n,o_.matrix);continue}if(a.drift+=(Math.random()-.5)*1.5*e,a.vx+=Math.sin(a.drift)*.3*e,a.vz+=Math.cos(a.drift)*.2*e,a.vx+=d_*.5*e,a.vz+=f_*.5*e,i>2||Fg()!==null){let e=e_().orbs,t=null,n=1/0;for(let r=0;r<e.length;r++){let i=e[r];if(i.found)continue;let o=i.x-a.x,s=i.z-a.z,c=o*o+s*s;c<n&&(n=c,t=i)}if(t){let e=t.x-a.x,n=t.z-a.z,r=e*e+n*n;if(r>.01){let t=.02/r;a.vx+=e*t,a.vz+=n*t}}}a.vy+=(.15+p_*.1-a.vy)*e*.5,a.vx*=.998,a.vy*=.998,a.vz*=.998,a.x+=a.vx*e,a.y+=a.vy*e,a.z+=a.vz*e;let o=a.life/a.max*.7*(.6+Math.sin(t*2+n)*.4),s=.8+Math.sin(t*3+n*.5)*.3;o_.position.set(a.x,a.y,a.z),o_.scale.setScalar(s),o_.updateMatrix(),i_.setMatrixAt(n,o_.matrix),s_.copy(c_).multiplyScalar(o),i_.setColorAt(n,s_),r=!0}i_.instanceMatrix.needsUpdate=!0,r&&(i_.instanceColor.needsUpdate=!0)}function g_(e,t){let n=new U,r=.35+Z()*.45,i=new K({color:2777128,roughness:.7,side:2}),a=3+Math.floor(Z()*2);for(let e=0;e<a;e++){let t=e/a*6.28+Z()*.3,r=new H(new ho(.08,.035),i);r.position.set(Math.cos(t)*.05,.02,Math.sin(t)*.05),r.rotation.x=-1.4,r.rotation.y=-t,n.add(r)}let o=new K({color:Y.dandStem,roughness:.8}),s=new H(new W(.008,.012,r,4),o);s.position.y=r/2,n.add(s);let c=new B({color:14540236,transparent:!0,opacity:.3});for(let e=0;e<4;e++){let t=r*.2+e*r*.18,i=new H(new W(.002,.001,.02,3),c);i.position.set(.01,t,0),i.rotation.z=-.8,n.add(i)}let l=new K({color:Y.fern,roughness:.7,side:2}),u=new H(new ho(.07,.03),l);u.position.set(.03,r*.15,0),u.rotation.z=-.4,n.add(u);let d=new K({color:Y.dandHead,emissive:Y.dandSeedGlow,emissiveIntensity:.2,transparent:!0,opacity:.85}),f=new H(new G(.07,6,5),d);f.position.y=r+.05,n.add(f);let p=new K({color:15663103,emissive:11197951,emissiveIntensity:.15,transparent:!0,opacity:.5,roughness:0,metalness:.5}),m=new H(new G(.012,4,3),p);m.position.set(.04,r+.07,.03),n.add(m);let h=new B({color:Y.dandSeed,transparent:!0,opacity:.7});for(let e=0;e<8;e++){let t=e/8*6.28+Z()*.2,i=new H(new Da(.015,.05,3),h);i.position.set(Math.cos(t)*.06,r+.05+Z()*.04,Math.sin(t)*.06),i.rotation.x=(Z()-.5)*.6,i.rotation.z=(Z()-.5)*.6,n.add(i);let a=new B({color:16777215,transparent:!0,opacity:.3}),o=new H(new W(.001,.001,.03,3),a);o.position.set(Math.cos(t)*.08,r+.08,Math.sin(t)*.08),o.rotation.set((Z()-.5)*.5,0,(Z()-.5)*.5),n.add(o);let s=new B({color:15658717,transparent:!0,opacity:.15});for(let e=0;e<2;e++){let i=t+(e-.5)*.5,a=new H(new W(8e-4,8e-4,.025,3),s);a.position.set(Math.cos(i)*.075,r+.09,Math.sin(i)*.075),a.rotation.set((Z()-.5)*.8,0,(Z()-.5)*.8),n.add(a)}}let g=new K({color:3811856,roughness:.9});for(let e=0;e<4;e++){let t=e/4*6.28+Z()*.5,i=new H(new G(.005,3,3),g);i.scale.set(.6,1.5,.6),i.position.set(Math.cos(t)*.04,r+.04,Math.sin(t)*.04),n.add(i)}let _=new B({color:1716240,transparent:!0,opacity:.15});for(let e=0;e<3;e++){let t=e/3*6.28,i=new H(new W(.001,.001,r*.7,3),_);i.position.set(Math.cos(t)*.01,r*.35,Math.sin(t)*.01),n.add(i)}let v=new B({color:13426107,transparent:!0,opacity:.2});for(let e=0;e<5;e++){let e=r*.1+Z()*r*.7,t=Z()*6.28,i=new H(new W(8e-4,8e-4,.012,3),v);i.position.set(Math.cos(t)*.012,e,Math.sin(t)*.012),i.rotation.z=t<3.14?-.8:.8,i.rotation.y=t,n.add(i)}return n.position.set(e,0,t),X.add(n),{group:n,headMat:d,x:e,z:t,h:r,dispersed:!1,phase:Z()*6.28,seedCount:8,regrowTimer:0}}function __(e,t,n,r){for(let i=0;i<e.length;i++){let a=e[i];if(a.dispersed){if(a.regrowTimer-=t,a.regrowTimer<=0){a.dispersed=!1;for(let e=2;e<a.group.children.length;e++)a.group.children[e].visible=!0}a.group.rotation.z=Math.sin(n*.9+a.phase)*.02}else{let e=a.x-r.x,t=a.z-r.z;if(e*e+t*t<1.2){a.dispersed=!0;for(let e=0;e<8;e++)u_(a.x,a.h+.05,a.z);for(let e=2;e<a.group.children.length;e++)a.group.children[e].visible=!1;a.regrowTimer=15+Math.random()*10}else a.group.rotation.z=Math.sin(n*.9+a.phase)*.04,a.headMat.emissiveIntensity=.15+Math.sin(n*1.2+a.phase)*.1}}}var v_=new K({color:Y.thornStem,roughness:.8,emissive:662032,emissiveIntensity:.1}),y_=new K({color:Y.thornSpike,roughness:.6}),b_=new K({color:Y.thornPetal,emissive:3344920,emissiveIntensity:.15,transparent:!0,opacity:.7,roughness:.6,side:2}),x_=new K({color:1718296,emissive:662026,emissiveIntensity:.05,side:2}),S_=new K({color:Y.thornStem,emissive:Y.thornOrbGlow,emissiveIntensity:.12,roughness:.65}),C_=new K({color:3344920,roughness:.7,emissive:3344920,emissiveIntensity:.05});function w_(e,t){let n=new U,r=1+Z()*.8,i=.25+Z()*.15,a=Z()*6.28,o=.04+Z()*.06,s=[];for(let e=0;e<=4;e++){let t=e/4,n=Math.sin(t*Math.PI)*o;s.push(new R(Math.cos(a)*n,t*r,Math.sin(a)*n))}let c=new aa(s),l=new H(new bo(c,10,.045,5,!1),v_);n.add(l);let u=4+Math.floor(Z()*3);for(let e=0;e<u;e++){let t=.15+e/u*.6,r=c.getPoint(t),i=e/u*6.28+Z()*1,a=.06+Z()*.04,o=new H(new bo(new aa([new R(r.x,r.y,r.z),new R(r.x+Math.cos(i)*a*.6,r.y+a*.2,r.z+Math.sin(i)*a*.6),new R(r.x+Math.cos(i)*a,r.y+a*.1,r.z+Math.sin(i)*a)]),3,.006,3,!1),y_);n.add(o)}let d=c.getPoint(1),f=d.y+i*.5,p=new K({color:Y.thornOrb,emissive:Y.thornOrbGlow,emissiveIntensity:.8,transparent:!0,opacity:.35,roughness:.1,metalness:.3}),m=new H(new G(i,12,10),p);m.position.set(d.x,f,d.z),n.add(m);let h=new K({color:16777164,emissive:Y.thornOrbGlow,emissiveIntensity:1.2,transparent:!0,opacity:.6,roughness:0,metalness:.1}),g=new H(new G(i*.35,8,6),h);g.position.set(d.x,f,d.z),n.add(g);let _=new B({color:Y.thornOrbGlow,transparent:!0,opacity:.06,blending:2,depthWrite:!1}),v=new H(new G(i*2,8,6),_);v.position.set(d.x,f,d.z),n.add(v);let y=5+Math.floor(Z()*2);for(let e=0;e<y;e++){let t=e/y*6.28+Z()*.3,r=.12+Z()*.06,a=new H(new bo(new aa([new R(d.x,f-i*.3,d.z),new R(d.x+Math.cos(t)*r*.6,f-i*.5,d.z+Math.sin(t)*r*.6),new R(d.x+Math.cos(t)*r,f-i*.8-Z()*.05,d.z+Math.sin(t)*r)]),4,.008,3,!1),S_);n.add(a)}let b=5+Math.floor(Z()*2);for(let e=0;e<b;e++){let t=e/b*6.28+Z()*.3,r=.18+Z()*.1,a=r*.6,o=new ho(a,r*1.3,4,6),s=o.attributes.position;for(let e=0;e<s.count;e++){let t=s.getX(e);s.getY(e);let n=t/(a*.5),r=.03+Z()*.01;s.setZ(e,-n*n*r)}s.needsUpdate=!0,o.computeVertexNormals();let c=new H(o,b_);c.position.set(d.x+Math.cos(t)*(i+.04),f+i*.1-Z()*.08,d.z+Math.sin(t)*(i+.04)),c.rotation.y=-t,c.rotation.x=-.4-Z()*.3,n.add(c);let l=1+Math.floor(Z()*2);for(let e=0;e<l;e++){let o=r*.8,s=new H(new W(.002,.001,o,3),C_),c=(e-(l-1)*.5)*a*.25;s.position.set(d.x+Math.cos(t)*(i+.06+o*.3),f+i*.05-Z()*.05,d.z+Math.sin(t)*(i+.06+o*.3)),s.rotation.y=-t,s.rotation.x=-.4-Z()*.3,s.rotation.z=c*2,n.add(s)}}for(let e=0;e<2;e++){let e=Z()*6.28,t=c.getPoint(.3),r=new H(new ho(.15,.25),x_);r.position.set(t.x+Math.cos(e)*.12,t.y,t.z+Math.sin(e)*.12),r.rotation.y=-e,r.rotation.x=-.8,n.add(r)}return n.position.set(e,0,t),X.add(n),{group:n,orbMat:p,hazeMat:_,phase:Z()*6.28,x:e,z:t}}function T_(e,t){let n=new U,r=2+Math.floor(Z()*2),i=new K({color:1710128,roughness:.85,emissive:Y.helixStem,emissiveIntensity:.1}),a=new H(new G(.18,8,6),i);a.scale.set(1.2,.5,1.2),a.position.y=.05,n.add(a);let o=[];for(let e=0;e<r;e++){let e=1.5+Z()*1,t=.15+Z()*.15,r=1.5+Z()*1.5,i=Z()*6.28,a=[];for(let n=0;n<=16;n++){let o=n/16,s=i+o*r*6.28,c=t*(.3+o*.7);a.push(new R(Math.cos(s)*c,o*e,Math.sin(s)*c))}let s=new aa(a),c=new K({color:Y.helixStem,emissive:Y.helixNode,emissiveIntensity:.12,roughness:.7}),l=new H(new bo(s,20,.025+Z()*.01,5,!1),c);n.add(l);let u=.1+Z()*.08,d=Z()<.5?new mo(u,0):new ka(u,0),f=new K({color:Y.helixPod,emissive:Y.helixPodGlow,emissiveIntensity:.5+Z()*.3,transparent:!0,opacity:.65,roughness:.2,metalness:.2}),p=new H(d,f),m=s.getPoint(1);p.position.copy(m),p.rotation.set(Z()*3,Z()*3,Z()*3),n.add(p),o.push(f);let h=new H(new G(u*2.5,6,4),new B({color:Y.helixPodGlow,transparent:!0,opacity:.05,blending:2,depthWrite:!1}));h.position.copy(m),n.add(h);let g=1+Math.floor(Z()*2);for(let e=0;e<g;e++){let e=.3+Z()*.5,t=s.getPoint(e),r=new K({color:Y.helixRing,emissive:Y.helixPodGlow,emissiveIntensity:.2,transparent:!0,opacity:.45,roughness:.3}),i=new H(new yo(.1+Z()*.08,.008,6,12),r);i.position.copy(t),i.rotation.set(Z()*3,Z()*3,Z()*3),n.add(i)}let _=2+Math.floor(Z()*2);for(let e=0;e<_;e++){let t=.2+e/_*.6,r=s.getPoint(t),i=new K({color:Y.helixNode,emissive:Y.helixPodGlow,emissiveIntensity:.35,transparent:!0,opacity:.5}),a=new H(new G(.025+Z()*.015,5,4),i);a.position.copy(r),n.add(a)}}let s=new K({color:Y.helixStem,emissive:Y.helixNode,emissiveIntensity:.06,roughness:.8}),c=2+Math.floor(Z()*2);for(let e=0;e<c;e++){let t=e/c*6.28+Z()*.5,r=.3+Z()*.4,i=new H(new W(.006,.015,r,3),s);i.position.set(Math.cos(t)*.12,r*.3,Math.sin(t)*.12),i.rotation.z=(t<3.14?.8:-.8)+Z()*.3,i.rotation.y=t,n.add(i)}return n.position.set(e,0,t),X.add(n),{group:n,podMats:o,phase:Z()*6.28}}var E_=new K({color:1718309,roughness:.85,emissive:662032,emissiveIntensity:.06}),D_=new K({color:1730116,emissive:Y.snapBodyGlow,emissiveIntensity:.25,transparent:!0,opacity:.6});function O_(e,t){let n=new U,r=.25+Z()*.1;for(let e=0;e<3;e++){let t=e/3*6.28+Z()*.5;.25+Z()*.15;let i=new H(new bo(new aa([new R(0,.06,0),new R(Math.cos(t)*r*.35,.04,Math.sin(t)*r*.35),new R(Math.cos(t)*r*.7,-.02,Math.sin(t)*r*.7)]),4,.018,4,!1),E_);n.add(i)}let i=new K({color:Y.snapBody,emissive:Y.snapBodyGlow,emissiveIntensity:.4,transparent:!0,opacity:.7,roughness:.4,metalness:.1}),a=new H(new G(r,10,8),i);a.position.y=r+.05,a.scale.set(1,.85,1),n.add(a);let o=new H(new yo(r*.45,.02,6,12),D_);o.position.y=r*1.7,o.rotation.x=Math.PI/2,n.add(o);let s=5+Math.floor(Z()*3),c=[],l=[];for(let e=0;e<s;e++){let t=e/s*6.28+Z()*.3,i=Z()*6.28,a=3+Math.floor(Z()*2),o=.2+Z()*.1,u=[],d=new Mn;d.position.set(Math.cos(t)*r*.6,r*1.4,Math.sin(t)*r*.6),d.rotation.y=t,n.add(d);let f=d;for(let e=0;e<a;e++){let t=e/a,n=.02*(1-t*.6),r=.015+Z()*.01,i=new K({color:Y.snapFrond,emissive:Y.snapBodyGlow,emissiveIntensity:.08+t*.15,roughness:.6}),s=new H(new bo(new aa([new R(0,0,0),new R(r,o*.5,0),new R(0,o,0)]),4,n*.85,4,!1),i);s.position.y=e===0?0:o,f.add(s),u.push(s),f=s}let p=new K({color:Y.snapTip,emissive:Y.snapTipGlow,emissiveIntensity:.6,transparent:!0,opacity:.7,roughness:.2}),m=new H(new G(.025+Z()*.015,5,4),p);m.position.y=o,f.add(m),l.push(p);let h=new H(new G(.06,4,3),new B({color:Y.snapTipGlow,transparent:!0,opacity:.04,blending:2,depthWrite:!1}));m.add(h),c.push({segments:u,baseAngle:t,phaseOffset:i,segLen:o})}return n.position.set(e,0,t),X.add(n),{group:n,body:a,bodyMat:i,tipMats:l,fronds:c,phase:Z()*6.28,x:e,z:t}}function k_(e,t){let n=new U,r=1.2+Z()*.8,i=3+Math.floor(Z()*3),a=new K({color:Y.spiralStem,roughness:.7,emissive:Y.spiralFrond,emissiveIntensity:.06}),o=new H(new W(.02,.05,r,5),a);o.position.y=r/2,n.add(o);let s=new K({color:1721392,emissive:662032,emissiveIntensity:.05,side:2});for(let e=0;e<3;e++){let e=Z()*6.28,t=new H(new ho(.12,.2),s);t.position.set(Math.cos(e)*.1,r*.12,Math.sin(e)*.1),t.rotation.y=-e,t.rotation.x=-.7,n.add(t)}let c=[],l=[];for(let e=0;e<i;e++){let t=e/i*6.28+Z()*.4,a=r*(.5+Z()*.35),o=.15+Z()*.15,s=1+Z()*1.5,u=[];for(let e=0;e<=14;e++){let n=e/14,i=t+n*s*6.28,c=o*(.2+n*.8);u.push(new R(Math.cos(i)*c,r*.25+n*a,Math.sin(i)*c))}let d=new aa(u),f=new K({color:Y.spiralFrond,emissive:Y.spiralGlow,emissiveIntensity:.12,roughness:.5}),p=new H(new bo(d,16,.012+Z()*.006,4,!1),f);n.add(p);let m=3+Math.floor(Z()*2);for(let e=0;e<m;e++){let t=.2+e/m*.6,r=d.getPoint(t),i=new H(new ho(.04,.06),new K({color:Y.spiralFrond,emissive:Y.spiralGlow,emissiveIntensity:.08,side:2}));i.position.copy(r),i.rotation.set(Z()*1.5,Z()*3,Z()*1.5),n.add(i)}let h=d.getPoint(1),g=new K({color:Y.spiralTip,emissive:Y.spiralGlow,emissiveIntensity:.6,transparent:!0,opacity:.7}),_=new H(new G(.025+Z()*.015,5,4),g);_.position.copy(h),n.add(_),c.push(g),l.push({mesh:_,baseY:h.y});let v=new H(new G(.07,4,3),new B({color:Y.spiralGlow,transparent:!0,opacity:.04,blending:2,depthWrite:!1}));v.position.copy(h),n.add(v)}let u=new K({color:1714224,roughness:.85,emissive:660752,emissiveIntensity:.04});for(let e=0;e<3;e++){let t=e/3*6.28+Z()*.5,r=new H(new W(.006,.018,.15+Z()*.1,3),u);r.position.set(Math.cos(t)*.06,.04,Math.sin(t)*.06),r.rotation.z=t<3.14?.8:-.8,r.rotation.y=t,n.add(r)}return n.position.set(e,0,t),X.add(n),{group:n,tipMats:c,tipMeshes:l,phase:Z()*6.28,x:e,z:t}}function A_(e,t){let n=new U,r=1.5+Z()*1,i=r*.7,a=.4+Z()*.2,o=new K({color:Y.corpseLeaf,roughness:.75,emissive:662026,emissiveIntensity:.05}),s=new H(new W(.06,.1,r*.5,6),o);s.position.y=r*.25,n.add(s);let c=new K({color:Y.corpseSpathe,emissive:2230800,emissiveIntensity:.08,transparent:!0,opacity:.85,roughness:.5,side:2}),l=new H(new Da(a,r*.5,8,1,!0),c);l.position.y=r*.55,l.scale.set(1,1,1),n.add(l);let u=new K({color:Y.corpseSpathe,emissive:Y.corpseGlow,emissiveIntensity:.1,roughness:.4}),d=new H(new yo(a*.95,.02,6,12),u);d.position.y=r*.8,d.rotation.x=Math.PI/2,n.add(d);let f=new K({color:Y.corpseColumn,emissive:Y.corpseGlow,emissiveIntensity:.5,transparent:!0,opacity:.8,roughness:.3}),p=new H(new W(.03,.06,i,6),f);p.position.y=r*.4+i*.5,n.add(p);let m=new B({color:Y.corpseGlow,transparent:!0,opacity:.04,blending:2,depthWrite:!1}),h=new H(new G(a*1.2,6,4),m);h.position.y=r*.65,n.add(h);for(let e=0;e<5;e++){let e=Z()*6.28,t=r*.45+Z()*i*.6,a=new H(new G(.01,3,3),new K({color:Y.corpseGlow,emissive:Y.corpseGlow,emissiveIntensity:.3}));a.position.set(Math.cos(e)*.05,t,Math.sin(e)*.05),n.add(a)}let g=new B({color:1118481,transparent:!0,opacity:.7}),_=[],v=3+Math.floor(Z()*3),y=r*.7;for(let e=0;e<v;e++){let e=new H(new G(.008,3,3),g);e.position.set(0,y,0),n.add(e),_.push(e)}let b=new K({color:Y.corpseLeaf,emissive:662024,emissiveIntensity:.04,side:2}),x=2+Math.floor(Z()*2);for(let e=0;e<x;e++){let t=e/x*6.28+Z()*.5,i=new H(new ho(.25+Z()*.1,.35+Z()*.1),b);i.position.set(Math.cos(t)*.18,r*.15,Math.sin(t)*.18),i.rotation.y=-t,i.rotation.x=-.6-Z()*.3,n.add(i)}let S=new K({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),C=new H(new G(.15,6,4),S);return C.scale.set(1.5,.4,1.5),C.position.y=.03,n.add(C),n.position.set(e,0,t),X.add(n),{group:n,columnMat:f,hazeMat:m,flies:_,spadixY:y,phase:Z()*6.28,x:e,z:t}}var j_=new K({color:2760212,roughness:.85,emissive:657924,emissiveIntensity:.04}),M_=new K({color:Y.orbBushLeaf,roughness:.8,emissive:662026,emissiveIntensity:.06,side:2}),N_=new K({color:Y.orbBushStem,roughness:.7,emissive:Y.orbBushGlow,emissiveIntensity:.05}),P_=new K({color:1712152,roughness:.9});function F_(e,t){let n=new U,r=.3+Z()*.15,i=.3+Z()*.2,a=3+Math.floor(Z()*2);for(let e=0;e<a;e++){let t=e/a*6.28+Z()*.8,o=r*(.7+Z()*.5),s=i*(.6+Z()*.4),c=[];for(let e=0;e<=4;e++){let n=e/4,r=o*Math.sin(n*Math.PI*.6),i=n*s*.8+Math.sin(n*Math.PI)*s*.3;c.push(new R(Math.cos(t)*r,i,Math.sin(t)*r))}let l=new aa(c),u=new H(new bo(l,8,.012,4,!1),j_);n.add(u);let d=[.4,.7,.95];for(let e=0;e<d.length;e++){if(e===2&&Z()<.3)continue;let t=l.getPoint(d[e]),r=l.getTangent(d[e]),i=.05+Z()*.04,a=new H(new ho(i,i*1.4),M_);a.position.copy(t),a.rotation.set(-.3-Z()*.5,Math.atan2(r.x,r.z)+(Z()-.5)*.6,(Z()-.5)*.3),n.add(a)}}for(let e=0;e<3+Math.floor(Z()*2);e++){let e=Z()*6.28,t=r*.4+Z()*r*.3,a=new H(new ho(.07,.1),M_);a.position.set(Math.cos(e)*t,i*.15+Z()*.08,Math.sin(e)*t),a.rotation.set(-.8-Z()*.4,-e,Z()*.3),n.add(a)}let o=[],s=6+Math.floor(Z()*5);for(let e=0;e<s;e++){let e=Z()*6.28,t=Z()*r*.7,a=i+.15+Z()*.3,s=.02+Z()*.015,c=a-i*.3,l=new H(new W(.003,.005,c,3),N_);l.position.set(Math.cos(e)*t,i*.3+c/2,Math.sin(e)*t),l.rotation.z=(Z()-.5)*.3,l.rotation.x=(Z()-.5)*.3,n.add(l);let u=new K({color:Y.orbBushOrb,emissive:Y.orbBushGlow,emissiveIntensity:.5+Z()*.3,transparent:!0,opacity:.7,roughness:.2}),d=new H(new G(s,5,4),u);d.position.set(Math.cos(e)*t+(Z()-.5)*.03,a,Math.sin(e)*t+(Z()-.5)*.03),n.add(d),o.push(u);let f=new H(new G(s*2.5,4,3),new B({color:Y.orbBushGlow,transparent:!0,opacity:.03,blending:2,depthWrite:!1}));f.position.copy(d.position),n.add(f)}for(let e=0;e<3;e++){let e=Z()*6.28,t=r+Z()*.1,i=new H(new G(.015,3,3),P_);i.position.set(Math.cos(e)*t,.01,Math.sin(e)*t),i.scale.set(1,.4,1),n.add(i)}return n.position.set(e,0,t),X.add(n),{group:n,orbMats:o,phase:Z()*6.28,x:e,z:t}}function I_(e,t){let n=new U,r=2+Math.floor(Z()*3),i=[],a=[],o=new K({color:1714200,roughness:.9,emissive:330245,emissiveIntensity:.03}),s=new H(new G(.1,5,4),o);s.scale.set(1.5,.4,1.5),s.position.y=.02,n.add(s);let c=new K({color:Y.lanternStem,emissive:662024,emissiveIntensity:.04,side:2});for(let e=0;e<2;e++){let e=Z()*6.28,t=new H(new ho(.1,.18),c);t.position.set(Math.cos(e)*.08,.08,Math.sin(e)*.08),t.rotation.y=-e,t.rotation.x=-.6,n.add(t)}for(let e=0;e<r;e++){let t=e/r*6.28+Z()*.5,o=.8+Z()*.8,s=.3+Z()*.4,c=[];for(let e=0;e<=10;e++){let n=e/10,r=s*Math.sin(n*Math.PI*.7),i=n<.7?n/.7*o:o-(n-.7)/.3*o*.25;c.push(new R(Math.cos(t)*r,i,Math.sin(t)*r))}let l=new aa(c),u=new K({color:Y.lanternStem,roughness:.7,emissive:Y.lanternHaze,emissiveIntensity:.06}),d=new H(new bo(l,12,.008+Z()*.004,4,!1),u);n.add(d);let f=l.getPoint(1),p=.06+Z()*.04,m=new K({color:Y.lanternPod,emissive:Y.lanternGlow,emissiveIntensity:.5+Z()*.3,transparent:!0,opacity:.5,roughness:.2,metalness:.1}),h=new H(new G(p,8,6),m);h.position.copy(f),h.position.y-=p*.3,n.add(h),i.push(m);let g=new K({color:16777164,emissive:Y.lanternGlow,emissiveIntensity:1,transparent:!0,opacity:.5,roughness:0}),_=new H(new G(p*.4,5,4),g);_.position.copy(h.position),n.add(_);let v=new H(new G(p*2.5,5,4),new B({color:Y.lanternHaze,transparent:!0,opacity:.04,blending:2,depthWrite:!1}));v.position.copy(h.position),n.add(v);let y=new K({color:Y.lanternStem,roughness:.6}),b=new H(new Da(p*.5,p*.4,5),y);b.position.copy(f),b.rotation.x=Math.PI,n.add(b);let x=new B({color:Y.lanternGlow,transparent:!0,opacity:.15});for(let e=0;e<2;e++){let e=.04+Z()*.04,t=new H(new W(.001,.001,e,3),x);t.position.set(h.position.x+(Z()-.5)*p*.5,h.position.y-p-e*.5,h.position.z+(Z()-.5)*p*.5),n.add(t)}a.push(h)}return n.position.set(e,0,t),X.add(n),{group:n,podMats:i,podMeshes:a,phase:Z()*6.28,x:e,z:t}}var L_=new K({color:Y.veilSupport,roughness:.85,emissive:657928,emissiveIntensity:.03}),R_=new K({color:Y.veilMoss,emissive:Y.veilGlow,emissiveIntensity:.08,transparent:!0,opacity:.3,depthWrite:!1}),z_=new K({color:Y.veilEdge,emissive:Y.veilGlow,emissiveIntensity:.15,transparent:!0,opacity:.4,roughness:0,metalness:.3,depthWrite:!1}),B_=new K({color:2767400,roughness:.9,emissive:Y.veilGlow,emissiveIntensity:.03}),V_=new B({color:Y.veilEdge,transparent:!0,opacity:.4,depthWrite:!1});function H_(e,t){let n=new U,r=1+Math.floor(Z()*2),i=[],a=[];for(let e=0;e<r;e++){let t=(e-(r-1)*.5)*.3,o=1+Z()*.8,s=Z()*6.28,c=.05+Z()*.08,l=[];for(let e=0;e<=5;e++){let n=e/5,r=Math.sin(n*Math.PI)*c*(n<.5?1:-.4);l.push(new R(t+Math.cos(s)*r,n*o,Math.sin(s)*r))}let u=new aa(l),d=new H(new bo(u,10,.02,4,!1),L_);n.add(d);let f=2+Math.floor(Z()*2),p=[];for(let e=0;e<f;e++){let t=.6+Z()*.2,r=u.getPoint(t),i=e/f*6.28+Z()*1,a=.15+Z()*.12,o=[];for(let e=0;e<=3;e++){let t=e/3,n=a*t,s=-t*t*.05;o.push(new R(r.x+Math.cos(i)*n,r.y+s+t*.02,r.z+Math.sin(i)*n))}let s=new aa(o),c=new H(new bo(s,6,.01,3,!1),L_);n.add(c),p.push(s.getPoint(1))}let m=Math.min(p.length+Math.floor(Z()*2),p.length+2);for(let e=0;e<m;e++){let t=p[e%p.length],r=.08+Z()*.06,s=o*(.3+Z()*.4),c=e>=p.length?(Z()-.5)*.06:0,l=new K({color:Y.veilMoss,emissive:Y.veilGlow,emissiveIntensity:.12+Z()*.08,transparent:!0,opacity:.25+Z()*.15,roughness:.6,side:2,depthWrite:!1}),u=new H(new ho(r,s),l);u.position.set(t.x+c,t.y-s*.5,t.z+(Z()-.5)*.05),u.rotation.y=(Z()-.5)*.4,n.add(u),i.push(u),a.push({mesh:u,depth:.5+e*.3});let d=2+Math.floor(Z()*2);for(let e=0;e<d;e++){let e=new H(new G(.006,3,3),V_);e.position.set(u.position.x+(Z()-.5)*r*.8,u.position.y-s*.5+Z()*s*.15,u.position.z+(Z()-.5)*.04),n.add(e)}}for(let e=0;e<3;e++){let e=.2+Z()*.5,t=u.getPoint(e),r=Z()*6.28,i=new H(new G(.015+Z()*.01,4,3),R_);i.scale.set(1.5,.5,1),i.position.set(t.x+Math.cos(r)*.025,t.y,t.z+Math.sin(r)*.025),n.add(i)}}for(let e=0;e<3;e++){let e=new H(new G(.005,3,3),z_);e.position.set((Z()-.5)*.3,.15+Z()*.3,(Z()-.5)*.06),n.add(e)}let o=new H(new G(.12,5,4),B_);return o.scale.set(1.5,.3,1.5),o.position.y=.02,n.add(o),n.position.set(e,0,t),X.add(n),{group:n,veilMats:i,veilRefs:a,phase:Z()*6.28,x:e,z:t}}function U_(e,t,n){let r=new U,i=new U;r.add(i);let a=new K({color:Y.jellyBell,emissive:Y.jellyGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,depthWrite:!1,roughness:.2,metalness:.1,side:2}),o=new H(new G(.5,8,6,0,6.28,0,Math.PI/2),a);o.scale.set(1,.6,1),o.position.y=0,i.add(o);let s=new K({color:Y.jellyBell,emissive:Y.jellyGlow,emissiveIntensity:1,transparent:!0,opacity:.6,depthWrite:!1}),c=new H(new yo(.48,.025,5,12),s);c.rotation.x=Math.PI/2,c.position.y=-.02,i.add(c);let l=new H(new G(.2,6,4),new B({color:Y.jellyGlow,transparent:!0,opacity:.7,depthWrite:!1}));l.position.y=-.05,i.add(l);let u=new B({color:Y.jellyOrgan,transparent:!0,opacity:.3,depthWrite:!1});for(let e=-1;e<=1;e+=2){let t=new H(new G(.06,4,3),u);t.scale.set(.6,1.5,.6),t.position.set(e*.08,-.03,0),i.add(t)}let d=new B({color:Y.jellySpot,transparent:!0,opacity:.7,depthWrite:!1});for(let e=0;e<5;e++){let e=Z()*6.28,t=Z()*.8,n=new H(new G(.02,3,3),d);n.position.set(Math.cos(e)*t*.35,.1-t*.15,Math.sin(e)*t*.35),i.add(n)}let f=new B({color:Y.jellyGlow,transparent:!0,opacity:.12,depthWrite:!1});for(let e=0;e<8;e++){let t=e/8*6.28,n=new H(new W(.002,.002,.4,3),f);n.position.set(Math.cos(t)*.2,.05,Math.sin(t)*.2),n.rotation.z=Math.PI/2-.3,n.rotation.y=-t,i.add(n)}let p=new K({color:Y.jellyBell,emissive:Y.jellyGlow,emissiveIntensity:.6,transparent:!0,opacity:.4,depthWrite:!1});for(let e=0;e<10;e++){let t=e/10*6.28,n=new H(new G(.02,3,3),p);n.scale.set(1,.5,.8),n.position.set(Math.cos(t)*.46,-.04,Math.sin(t)*.46),i.add(n)}let m=new U;r.add(m);let h=new K({color:Y.jellyTent,emissive:Y.jellyGlow,emissiveIntensity:.4,transparent:!0,opacity:.4,depthWrite:!1}),g=new B({color:Y.jellyTip,transparent:!0,opacity:.9,depthWrite:!1});for(let e=0;e<6;e++){let t=e/6*6.28,n=.4+Z()*.6,r=new H(new W(.015,.008,n,3),h);r.position.set(Math.cos(t)*.25,-n/2-.05,Math.sin(t)*.25),m.add(r);let i=new H(new G(.018,4,4),g);i.position.set(Math.cos(t)*.25,-n-.06,Math.sin(t)*.25),m.add(i)}let _=new K({color:Y.jellyTent,emissive:Y.jellyGlow,emissiveIntensity:.5,transparent:!0,opacity:.35,depthWrite:!1}),v=new H(new W(.02,.01,.35,4),_);v.position.y=-.2,m.add(v);let y=new B({color:Y.jellyMucus,transparent:!0,opacity:.4,depthWrite:!1});for(let e=0;e<3;e++){let t=e/3*6.28,n=new H(new G(.008,3,3),y);n.position.set(Math.cos(t)*.25,-.55-Z()*.3,Math.sin(t)*.25),m.add(n)}return r.position.set(e,t,n),X.add(r),{group:r,bell:i,tentGroup:m,bellMat:a,tipMat:g,phase:Z()*6.28,driftAng:Z()*6.28,homeX:e,homeZ:n,floatY:t,wobble:.5+Z()*.5,_init:!0,_state:`drift`,_stT:20+Math.random()*30,_migrateAng:0,_pulseSync:0}}function W_(e,t){let n=new U,r=new U;n.add(r);let i=new K({color:Y.puffBody,emissive:Y.puffGlow,emissiveIntensity:.5,roughness:.8}),a=new H(new G(.3,8,6),i);a.position.y=.35,r.add(a);let o=new B({color:Y.puffGlow,transparent:!0,opacity:.8,depthWrite:!1}),s=new H(new G(.12,6,4),o);s.position.y=.35,r.add(s);let c=new K({color:Y.puffBelly,emissive:Y.puffGlow,emissiveIntensity:.15,roughness:.9}),l=new H(new G(.18,6,4),c);l.scale.set(.7,.9,.3),l.position.set(0,.32,.2),r.add(l);let u=new H(new G(.22,7,5),i);u.position.y=.65,r.add(u);let d=new K({color:Y.puffBody,transparent:!0,opacity:.4,side:2});for(let e=0;e<12;e++){let e=new H(new ho(.06,.08),d),t=Z()*6.28,n=(Z()-.5)*2;e.position.set(Math.cos(t)*.28,.4+n*.2,Math.sin(t)*.28),e.lookAt(0,.4,0),r.add(e)}let f=[];for(let e=-1;e<=1;e+=2){let t=new H(new Da(.06,.15,4),i);t.position.set(e*.13,.85,0),t.rotation.z=e*.3,r.add(t),f.push({mesh:t,side:e,baseRotZ:e*.3})}let p=new B({color:Y.puffEye}),m=[],h=[];for(let e=-1;e<=1;e+=2){let t=new H(new G(.035,4,4),p);t.position.set(e*.09,.68,.18),r.add(t),m.push(t);let n=new H(new ho(.06,.02),new B({color:Y.puffBrow}));n.position.set(e*.09,.74,.19),n.rotation.z=e*.2,r.add(n),h.push(n)}let g=Z();if(g<.3){let e=new H(new G(.06,5,4),new K({color:Y.puffMushroom}));e.scale.set(1,.5,1),e.position.set(.15,.85,-.1),r.add(e)}else if(g<.6){let e=new H(new G(.1,4,3),new K({color:Y.puffMoss}));e.scale.set(1,.3,1.2),e.position.set(-.12,.55,-.2),r.add(e)}for(let e=-1;e<=1;e+=2){let t=new H(new G(.07,4,3),i);t.position.set(e*.12,.07,.05),t.scale.set(1,.5,1.3),r.add(t)}let _=new H(new G(.06,5,4),new K({color:Y.puffTail,roughness:.9}));_.position.set(0,.38,-.28),r.add(_);let v=new B({color:Y.puffGlow,transparent:!0,opacity:.6,depthWrite:!1}),y=[];for(let e=0;e<4;e++){let t=new H(new G(.01,3,3),v);t.position.set(0,.3,-.3-e*.1),n.add(t),y.push(t)}let b=new B({color:Y.puffGlow,transparent:!0,opacity:.1,depthWrite:!1,side:2}),x=new H(new Ea(.5,8),b);return x.rotation.x=-Math.PI/2,x.position.y=.02,n.add(x),n.position.set(e,0,t),X.add(n),{group:n,shell:r,body:a,head:u,ears:f,eyes:m,brows:h,tail:_,spores:y,core:s,bodyMat:i,glowMat:b,phase:Z()*6.28,wanderAng:Z()*6.28,speed:.6+Z()*.8,hopTimer:0,hopPhase:Z()*6.28,homeX:e,homeZ:t,state:`idle`,idleTimer:Z()*3,_init:!0,_baseY:0,_lastTX:e,_lastTZ:t,_blinkTimer:2+Math.random()*4,_blinkState:0}}function G_(e,t){let n=new U,r=new K({color:Y.deerBody,emissive:Y.deerGlow,emissiveIntensity:.7,transparent:!0,opacity:.7,depthWrite:!1,roughness:.3}),i=new H(new G(.4,7,5),r);i.scale.set(1,.8,1.5),i.position.y=.9,n.add(i);let a=new K({color:Y.deerChest,emissive:Y.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.5,depthWrite:!1}),o=new H(new G(.15,5,4),a);o.scale.set(.8,.6,.5),o.position.set(0,.78,.25),n.add(o);let s=new U;s.position.set(0,1.15,.3),n.add(s);let c=new U;c.position.set(0,.15,.08),s.add(c);let l=new U;l.position.set(0,.07,.12),c.add(l);let u=new H(new W(.08,.12,.4,5),r);u.position.set(0,.1,.08),u.rotation.x=-.4,s.add(u);let d=new H(new G(.14,6,5),r);d.position.set(0,0,0),l.add(d);let f=new H(new G(.07,4,3),r);f.scale.set(1,.7,1.4),f.position.set(0,-.05,.15),l.add(f);let p=new B({color:Y.deerNose}),m=new H(new G(.02,3,3),p);m.position.set(0,-.05,.23),l.add(m);let h=new B({color:Y.deerEye});for(let e=-1;e<=1;e+=2){let t=new H(new G(.025,4,3),h);t.position.set(e*.09,.03,.08),l.add(t);let n=new H(new G(.008,3,3),new B({color:Y.deerEyeHighlight}));n.position.set(e*.085,.04,.09),l.add(n);let r=new B({color:Y.deerBody,transparent:!0,opacity:.5,depthWrite:!1}),i=new H(new W(.002,.002,.03,3),r);i.position.set(e*.1,.05,.08),i.rotation.z=e*.6,l.add(i)}let g=[];for(let e=-1;e<=1;e+=2){let t=new U;t.position.set(e*.1,.15,-.05);let n=new H(new Da(.04,.14,4),r);n.rotation.z=e*.4,t.add(n);let i=new B({color:Y.deerInnerEar,transparent:!0,opacity:.25,depthWrite:!1}),a=new H(new Da(.025,.1,3),i);a.rotation.z=e*.4,a.position.set(e*.01,.01,.005),t.add(a),l.add(t),g.push(t)}let _=new K({color:Y.deerAntler,emissive:Y.deerGlow,emissiveIntensity:.8,transparent:!0,opacity:.8,depthWrite:!1}),v=new B({color:Y.deerGlow,transparent:!0,opacity:.8,depthWrite:!1}),y=new K({color:Y.deerBody,emissive:Y.deerGlow,emissiveIntensity:.15,transparent:!0,opacity:.3,depthWrite:!1,roughness:1});for(let e=-1;e<=1;e+=2){let t=new H(new W(.015,.02,.25,3),_);t.position.set(e*.08,.2,-.08),t.rotation.z=e*.5,l.add(t);let n=new H(new W(.01,.015,.15,3),_);n.position.set(e*.15,.33,-.1),n.rotation.z=e*.8,l.add(n);let r=new H(new W(.008,.012,.1,3),_);r.position.set(e*.11,.28,-.04),r.rotation.z=e*.3,r.rotation.x=-.5,l.add(r);let i=new H(new W(.006,.01,.12,3),_);i.position.set(e*.17,.38,-.06),i.rotation.z=e*.6,i.rotation.x=-.3,l.add(i);let a=new H(new W(.005,.008,.08,3),_);a.position.set(e*.13,.36,-.14),a.rotation.z=e*.2,a.rotation.x=.4,l.add(a);let o=new H(new G(.012,3,3),v);o.position.set(e*.18,.39,-.11),l.add(o);let s=new H(new G(.008,3,3),v);s.position.set(e*.2,.43,-.07),l.add(s);let c=new H(new G(.007,3,3),v);c.position.set(e*.15,.4,-.15),l.add(c);for(let t=0;t<3;t++){let n=new H(new G(.006,3,3),y);n.scale.set(1.3,.6,1),n.position.set(e*(.09+t*.025),.22+t*.06,-.08),l.add(n)}}let b=new K({color:Y.deerBody,emissive:Y.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,depthWrite:!1}),x=new H(new W(.01,.02,.1,3),b);x.position.set(0,-.11,.08),x.rotation.x=.3,l.add(x);let S=new B({color:Y.deerNostril});for(let e=-1;e<=1;e+=2){let t=new H(new G(.006,3,3),S);t.position.set(e*.02,-.06,.22),l.add(t)}let C=[{x:-.15,z:.3,label:`FL`},{x:.15,z:.3,label:`FR`},{x:-.15,z:-.3,label:`BL`},{x:.15,z:-.3,label:`BR`}],w=new K({color:Y.deerHoof,emissive:Y.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.7,depthWrite:!1}),T=[];for(let e=0;e<4;e++){let t=C[e],i=new U;i.position.set(t.x,.65,t.z);let a=new H(new W(.025,.035,.35,4),r);a.position.y=-.175,i.add(a);let o=new U;o.position.set(0,-.35,0);let s=new H(new W(.02,.03,.3,4),r);s.position.y=-.15,o.add(s);let c=new H(new W(.04,.032,.04,4),w);c.position.y=-.3,o.add(c);let l=new K({color:Y.deerFetlock,emissive:Y.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.5,depthWrite:!1}),u=new H(new G(.025,3,3),l);u.scale.set(1.3,.5,1.3),u.position.y=-.25,o.add(u),i.add(o),n.add(i),T.push({upper:i,lower:o,isFront:e<2,side:t.x<0?-1:1})}let E=new U;E.position.set(0,1.1,-.55);let D=new H(new Da(.05,.15,4),new K({color:Y.deerTailTip,emissive:Y.deerGlow,emissiveIntensity:1,transparent:!0,opacity:.8,depthWrite:!1}));E.add(D),n.add(E);let O=new K({color:Y.deerBody,emissive:Y.deerGlow,emissiveIntensity:.5,transparent:!0,opacity:.45,depthWrite:!1,roughness:.4});for(let e=-1;e<=1;e+=2){let t=new H(new G(.08,4,3),O);t.scale.set(.6,.9,.8),t.position.set(e*.2,.82,.22),n.add(t)}for(let e=-1;e<=1;e+=2){let t=new H(new G(.1,4,3),O);t.scale.set(.6,.9,1),t.position.set(e*.22,.85,-.25),n.add(t)}let k=new K({color:Y.deerThroat,emissive:Y.deerGlow,emissiveIntensity:.3,transparent:!0,opacity:.35,depthWrite:!1}),A=new H(new G(.04,4,3),k);A.scale.set(.8,1.2,.6),A.position.set(0,.06,.22),s.add(A);let j=new K({color:Y.deerBody,emissive:Y.deerGlow,emissiveIntensity:.2,transparent:!0,opacity:.2,depthWrite:!1,side:2}),ee=new H(new ho(.04,.06),j);ee.position.set(0,.01,.24),s.add(ee);let te=new K({color:Y.deerBelly,emissive:Y.deerGlow,emissiveIntensity:.25,transparent:!0,opacity:.25,depthWrite:!1,side:2}),ne=new H(new ho(.18,.6),te);ne.position.set(0,.65,0),ne.rotation.x=Math.PI/2,n.add(ne);let re=new B({color:Y.deerSpot,transparent:!0,opacity:.3,depthWrite:!1});for(let e=0;e<4;e++){let e=new H(new G(.02,3,3),re);e.position.set((Z()-.5)*.25,.8+Z()*.3,(Z()-.5)*.4),n.add(e)}let ie=new B({color:Y.deerBody,transparent:!0,opacity:.15,depthWrite:!1});for(let e=0;e<3;e++){let t=new H(new W(.002,.002,.2,3),ie);t.position.set(.3,.85-e*.06,0),t.rotation.z=Math.PI/2+.3,n.add(t)}let ae=new K({color:Y.deerDew,emissive:Y.deerDewEmissive,emissiveIntensity:.15,transparent:!0,opacity:.4,depthWrite:!1,roughness:0,metalness:.5});for(let e=0;e<3;e++){let e=new H(new G(.008,3,3),ae);e.position.set((Z()-.5)*.3,.9+Z()*.3,(Z()-.5)*.35),n.add(e)}let oe=new K({color:Y.deerMane,emissive:Y.deerGlow,emissiveIntensity:.4,transparent:!0,opacity:.3,depthWrite:!1,side:2}),se=[];for(let e=0;e<5;e++){let t=new H(new ho(.05,.08+Z()*.04),oe);t.position.set(0,.1+e*.055,.04-e*.015),t.rotation.x=-.2+Z()*.15,t.rotation.z=(Z()-.5)*.25,s.add(t),se.push(t)}let ce=new B({color:Y.deerGlow,transparent:!0,opacity:.5,depthWrite:!1}),le=[];for(let e=-1;e<=1;e+=2){let t=new H(new G(.012,3,3),ce.clone());t.position.set(e*.1,.25,-.09),l.add(t),le.push(t);let n=new H(new G(.01,3,3),ce.clone());n.position.set(e*.14,.31,-.08),l.add(n),le.push(n)}let ue=new B({color:Y.deerGlow,transparent:!0,opacity:.08,blending:2,depthWrite:!1}),de=[];for(let r=0;r<3;r++){let i=new H(new G(.06-r*.012,4,3),ue.clone());i.position.set(0,.8,-.6-r*.35),n.add(i),de.push({mesh:i,mat:i.material,prevX:e,prevY:0,prevZ:t})}let fe=new B({color:Y.deerGlow,transparent:!0,opacity:.2,depthWrite:!1,side:2});for(let e=0;e<3;e++){Z()*6.28;let t=new H(new Ea(.03+Z()*.015,5),fe);t.position.set((e===1?-1:1)*.32,.8+Z()*.25,(Z()-.5)*.3),t.rotation.y=(e===1?-1:1)*Math.PI/2,n.add(t)}return n.position.set(e,0,t),X.add(n),{group:n,mat:r,manePlanes:se,branchOrbs:le,trailSpheres:de,ears:g,phase:Z()*6.28,wanderAng:Z()*6.28,speed:.6+Z()*.4,walkTimer:0,legCycle:0,homeX:e,homeZ:t,state:`walk`,pauseTimer:0,neckBasePivot:s,neckMidPivot:c,headPivot:l,legPivots:T,tailPivot:E,fleeTimer:0,headLook:0,headBob:0,earTwitchTimer:0,earTwitchVal:0,_init:!0,_stT:0,_drinkTgt:null,_zigTimer:0,_zigDir:1,_baseY:0,_lastTX:e,_lastTZ:t}}function K_(e){let t=new Aa,n=e;return t.moveTo(0,0),t.quadraticCurveTo(n*.08,.12,n*.22,.14),t.quadraticCurveTo(n*.3,.12,n*.32,.06),t.quadraticCurveTo(n*.3,0,n*.26,-.04),t.quadraticCurveTo(n*.15,-.06,0,-.02),t.lineTo(0,0),t}function q_(e){let t=new Aa,n=e;return t.moveTo(0,0),t.quadraticCurveTo(n*.06,.04,n*.2,.04),t.quadraticCurveTo(n*.28,0,n*.24,-.08),t.quadraticCurveTo(n*.2,-.12,n*.14,-.1),t.quadraticCurveTo(n*.1,-.08,0,-.02),t.lineTo(0,0),t}function J_(e,t,n){let r=new U,i=new K({color:Y.mothFur,emissive:Y.mothGlow,emissiveIntensity:.25,roughness:1}),a=new H(new G(.05,6,5),i);a.scale.set(1,.9,1.4),a.position.z=.05,r.add(a);let o=new K({color:Y.mothAbdomen,emissive:Y.mothGlow,emissiveIntensity:.2,roughness:.8}),s=new H(new Da(.04,.18,5),o);s.rotation.x=Math.PI/2+.1,s.position.z=-.1,r.add(s);let c=new K({color:Y.mothSegment,emissive:Y.mothGlow,emissiveIntensity:.35,roughness:.6});for(let e=0;e<3;e++){let t=new H(new yo(.035,.005,4,8),c);t.position.z=-.03-e*.04,r.add(t)}let l=new K({color:Y.mothFur,emissive:Y.mothGlow,emissiveIntensity:.3,roughness:.9}),u=new H(new G(.04,5,4),l);u.position.z=.16,r.add(u);let d=new K({color:Y.mothEye,emissive:Y.mothEyeEmissive,emissiveIntensity:.3,roughness:.1,metalness:.5});for(let e=-1;e<=1;e+=2){let t=new H(new G(.02,5,4),d);t.position.set(e*.028,.012,.19),r.add(t)}let f=[],p=new K({color:Y.mothAntenna,emissive:Y.mothGlow,emissiveIntensity:.3,roughness:.6}),m=new B({color:Y.mothGlow,transparent:!0,opacity:.7,depthWrite:!1});for(let e=-1;e<=1;e+=2){let t=new U;t.position.set(e*.025,.025,.19);let n=new H(new W(.004,.003,.14,3),p);n.rotation.x=-.5,n.rotation.z=e*.3,n.position.set(e*.01,.05,.03),t.add(n);for(let n=0;n<5;n++){let r=.015+(n<3?n*.008:(4-n)*.008),i=new H(new W(.001,.001,r,3),m),a=.02+n*.018;i.position.set(e*(.012+n*.002),a,.01+n*.008),i.rotation.z=e*.7,t.add(i);let o=new H(new W(.001,.001,r,3),m);o.position.set(e*(.008-n*.001),a,.01+n*.008),o.rotation.z=e*.3,t.add(o)}let i=new H(new G(.008,3,3),m);i.position.set(e*.025,.1,.06),t.add(i),r.add(t),f.push(t)}let h=new K({color:Y.mothWing,emissive:Y.mothGlow,emissiveIntensity:.7,transparent:!0,opacity:.55,depthWrite:!1,side:2,roughness:.4}),g=new K({color:Y.mothEdge,emissive:Y.mothGlow,emissiveIntensity:.15,transparent:!0,opacity:.6,depthWrite:!1,side:2,roughness:.5}),_=new B({color:Y.mothSpotRing,transparent:!0,opacity:.85,depthWrite:!1}),v=new B({color:Y.mothSpot,transparent:!0,opacity:.7,depthWrite:!1}),y=new B({color:Y.mothSpotDark,transparent:!0,opacity:.5,depthWrite:!1}),b=new K({color:Y.mothWing,emissive:Y.mothGlow,emissiveIntensity:.5,transparent:!0,opacity:.4,depthWrite:!1,side:2}),x=new B({color:Y.mothGlow,transparent:!0,opacity:.2,depthWrite:!1});r._wingPivots=[];let S=[];for(let e=-1;e<=1;e+=2){let t=new U;t.position.set(e*.04,0,.04);let n=new H(new _o(K_(e),6),h);n.rotation.x=Math.PI/2,n.position.y=.005,t.add(n);let i=new H(new ho(.03,.28),g);i.rotation.x=Math.PI/2,i.position.set(e*.02,.008,.06),i.rotation.z=e*-.15,t.add(i);let a=e*.2,o=.04,s=new H(new Ea(.032,8),y);s.rotation.x=-Math.PI/2,s.position.set(a,.01,o),t.add(s);let c=new H(new Ea(.025,8),_);c.rotation.x=-Math.PI/2,c.position.set(a,.012,o),t.add(c);let l=new H(new Ea(.015,6),v);l.rotation.x=-Math.PI/2,l.position.set(a,.014,o),t.add(l);let u=new H(new _o(q_(e),6),h);u.rotation.x=Math.PI/2,u.position.set(0,.003,-.04),t.add(u);let d=e*.16,f=-.05,p=new H(new Ea(.025,7),y);p.rotation.x=-Math.PI/2,p.position.set(d,.008,f),t.add(p);let m=new H(new Ea(.019,7),_);m.rotation.x=-Math.PI/2,m.position.set(d,.01,f),t.add(m);let C=new H(new Ea(.012,5),v);C.rotation.x=-Math.PI/2,C.position.set(d,.012,f),t.add(C);for(let n=0;n<3;n++){let r=.08-n*.015,i=new H(new ho(.018-n*.003,r),b);i.position.set(e*(.13-n*.01),-.005,-.12-n*.07),i.rotation.y=e*(.15+n*.12),i.rotation.x=.1+n*.05,t.add(i),S.push(i)}for(let n=0;n<3;n++){-.3+n*.25;let r=new H(new W(.0015,.001,.18-n*.02,3),x);r.rotation.x=Math.PI/2,r.rotation.z=e*(.3+n*.2),r.position.set(e*(.1+n*.04),.006,.02-n*.03),t.add(r)}let w=new B({color:Y.mothGlow,transparent:!0,opacity:.3,depthWrite:!1});for(let n=0;n<6;n++){let r=n/6*Math.PI*.8-.2,i=.25+Math.sin(r*3)*.02,a=new H(new G(.004,3,3),w);a.position.set(e*(i*Math.cos(r)+.05),.008,i*Math.sin(r)-.03),t.add(a)}r.add(t),r._wingPivots.push({pivot:t,side:e})}let C=new B({color:Y.mothLeg,transparent:!0,opacity:.35,depthWrite:!1});for(let e=-1;e<=1;e+=2)for(let t=0;t<3;t++){let n=new H(new W(.002,.002,.05,3),C);n.position.set(e*.035,-.025,.02+t*.04),n.rotation.z=e*.7,n.rotation.x=-.2,r.add(n)}for(let e=0;e<7;e++){let e=Z()*6.28,t=new H(new G(.01,3,3),i);t.position.set(Math.cos(e)*.045,Math.sin(e)*.04,.05+Z()*.08),r.add(t)}let w=new B({color:Y.mothGlow,transparent:!0,opacity:.2,depthWrite:!1}),T=[];for(let e=0;e<4;e++){let t=new H(new G(.006,3,3),w);t.position.set((Z()-.5)*.04,0,-.18-e*.04),r.add(t),T.push({mesh:t,baseZ:-.18-e*.04})}return r.position.set(e,t,n),X.add(r),{group:r,wingMat:h,tails:S,phase:Z()*6.28,orbitAng:Z()*6.28,orbitR:2+Z()*4,centerX:e,centerZ:n,floatY:t,flapSpeed:6+Z()*4,antennae:f,dustMotes:T,_init:!0,_state:`patrol`,_stT:0,_attractTarget:null,_restTree:null,_prevMx:e,_prevMz:n,_prevY:t,_bank:0,_transitionT:0,_prevPx:e,_prevPz:n}}function Y_(e,t){let n=new U,r=new U;r.position.y=5,n.add(r);let i=new K({color:Y.luminidShell,emissive:Y.luminidShellEmissive,emissiveIntensity:.5,transparent:!0,opacity:.4,roughness:.1,metalness:.8}),a=new H(new G(.8,6,8),i);a.scale.set(1,1.8,1),r.add(a);let o=new B({color:Y.luminidCore,transparent:!0,opacity:.9,blending:2}),s=new H(new G(.25,8,8),o);r.add(s);let c=new B({color:Y.luminidHalo,transparent:!0,opacity:.2,side:2,blending:2}),l=new H(new Ea(1.2,16),c);l.rotation.x=Math.PI/2,r.add(l);for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=new H(new Da(.02,.8,3),i);n.position.set(Math.cos(t)*.2,1.4,Math.sin(t)*.2),n.rotation.z=Math.cos(t)*.8,n.rotation.x=Math.sin(t)*.8,r.add(n)}let u=[],d=new K({color:Y.luminidLeg,emissive:Y.luminidLegEmissive,roughness:.9}),f=[.2,1,2.1,3.3400000000000003,4.140000000000001,5.24];for(let r=0;r<6;r++){let i=f[r],a=new U;a.position.set(Math.cos(i)*.5,5.2,Math.sin(i)*.5),n.add(a);let s=new H(new W(.04,.03,3.2,4),d);s.position.y=-1.6;let c=new U;c.add(s),a.add(c);let l=new H(new W(.03,.015,3.5,4),d);l.position.y=-1.75;let p=new U;p.position.y=-3.2,p.add(l),c.add(p);let m=new H(new G(.05,4,4),o);m.position.y=-3.5,p.add(m),u.push({shoulder:a,upperPivot:c,lowerPivot:p,targetPos:new R(e+Math.cos(i)*3,0,t+Math.sin(i)*3),currentPos:new R(e+Math.cos(i)*3,0,t+Math.sin(i)*3),isStepping:!1,stepT:0,angle:i})}let p=new U;p.position.y=-1.2,r.add(p);let m=new H(new W(.02,.04,.8,4),d);m.position.y=-.4,p.add(m);let h=new H(new G(.1,5,4),o);return h.position.y=-.8,p.add(h),n.position.set(e,0,t),X.add(n),{group:n,bodyGroup:r,core:s,halo:l,legs:u,stalkGroup:p,sensor:h,phase:Z()*6.28,wanderAng:Z()*6.28,speed:.3+Z()*.2,inspectT:0,isInspecting:!1,_lastTX:e,_lastTZ:t,_heightOffset:5,_init:!0}}function X_(e,t,n){let r=new U,i=new B({color:Y.wispCore}),a=new H(new G(.08,6,4),i);r.add(a);let o=new B({color:Y.white,transparent:!0,opacity:.7,wireframe:!0,depthWrite:!1}),s=new H(new po(.06,0),o);r.add(s);let c=new B({color:Y.wispGlow,transparent:!0,opacity:.5,depthWrite:!1}),l=new H(new G(.18,6,4),c);r.add(l);let u=new B({color:Y.wispGlow,transparent:!0,opacity:.25,depthWrite:!1}),d=new H(new yo(.22,.008,4,12),u);d.rotation.x=Math.PI/2,r.add(d);let f=new B({color:Y.wispTrail,transparent:!0,opacity:.15,depthWrite:!1}),p=new H(new G(.35,5,4),f);r.add(p);let m=new B({color:Y.white,transparent:!0,opacity:.8,depthWrite:!1}),h=new H(new G(.02,3,3),m);h.position.set(.15,0,0),r.add(h);let g=[];for(let e=0;e<3;e++){let t=new B({color:Y.wispCore,transparent:!0,opacity:.35,depthWrite:!1}),n=new H(new G(.01,3,3),t);n.position.set((Z()-.5)*.1,-.1-e*.08,(Z()-.5)*.1),r.add(n),g.push(n)}let _=new B({color:Y.wispGlow,transparent:!0,opacity:.18,depthWrite:!1}),v=[];for(let e=0;e<3;e++){let t=e/3*6.28+Z()*.5,n=new H(new W(.003,.001,.15+Z()*.1,3),_);n.position.set(Math.cos(t)*.1,Z()*.08,Math.sin(t)*.1),n.rotation.z=Math.PI/3*(t<3.14?1:-1),n.rotation.y=t,r.add(n),v.push({mesh:n,baseAng:t})}let y=new B({color:Y.wispGlow,transparent:!0,opacity:.12,depthWrite:!1}),b=new H(new yo(.26,.005,4,10),y);b.rotation.x=1.2,b.rotation.z=.8,r.add(b);let x=new B({color:Y.white,transparent:!0,opacity:.5,depthWrite:!1});for(let e=0;e<4;e++){let e=Z()*6.28,t=Z()*.8,n=new H(new G(.006,3,3),x);n.position.set(Math.cos(e)*.06,Math.sin(t)*.06,Math.sin(e)*.06),r.add(n)}let S=new B({color:Y.wispCore,transparent:!0,opacity:.2,depthWrite:!1});for(let e=0;e<4;e++){let t=new H(new G(.004,3,3),S);t.position.set(.03+Z()*.04,-.05-e*.04,Z()*.04),r.add(t)}return r.scale.setScalar(.5),r.position.set(e,t,n),X.add(r),{group:r,glowMat:c,hazeMat:f,embers:g,tendrils:v,plasmaMat:_,facet:s,halo:d,halo2:b,phase:Z()*6.28,targetX:e,targetY:t,targetZ:n,velX:0,velY:0,velZ:0,scatter:0}}function Z_(e,t){let n=new U,r=Du,i=8+Math.floor(Z()*5),a=new K({color:Y.fairyMush,emissive:Y.fairyGlow,emissiveIntensity:.2,roughness:.5}),o=new K({color:Y.mushStem,roughness:.7,emissive:Y.fairyGlow,emissiveIntensity:.05});for(let e=0;e<i;e++){let t=e/i*6.28+Z()*.15,s=r+Z()*.3-.15,c=.15+Z()*.2,l=.06,u=new H(Cm.mushStem,o);u.scale.setScalar(c),u.position.set(Math.cos(t)*s,c*.3+l,Math.sin(t)*s),n.add(u);let d=new H(Cm.mushCap,a);d.scale.set(c,c*.4,c),d.position.set(Math.cos(t)*s,c*.55+l,Math.sin(t)*s),n.add(d);let f=new B({color:Y.white,transparent:!0,opacity:.7,depthWrite:!1}),p=new H(new G(c*.08,3,3),f);p.position.set(Math.cos(t)*s,c*.6+l,Math.sin(t)*s),n.add(p)}let s=new K({color:8934792,emissive:Y.fairyGlow,emissiveIntensity:.1,roughness:.6});for(let e=0;e<5;e++){let e=Z()*6.28,t=r+Z()*.6-.3,i=.06+Z()*.06,a=new H(Cm.mushCap,s);a.scale.set(i,i*.5,i),a.position.set(Math.cos(e)*t,i*.35+.04,Math.sin(e)*t),n.add(a)}let c=new K({color:1725733,emissive:664080,emissiveIntensity:.05,roughness:.9});for(let e=0;e<4;e++){let e=Z()*6.28,t=Z()*r*.8,i=new H(new G(.08+Z()*.08,4,3),c);i.scale.set(1.5,.2,1.5),i.position.set(Math.cos(e)*t,.01,Math.sin(e)*t),n.add(i)}let l=new K({color:4478310,emissive:Y.fairyGlow,emissiveIntensity:.05,roughness:.85}),u=new H(new G(.12,5,3),l);u.scale.set(1.2,.3,1),u.position.y=.03,n.add(u);let d=new B({color:Y.fairyGlow,transparent:!0,opacity:.2,depthWrite:!1}),f=[];for(let e=0;e<8;e++){let e=new H(new G(.012,3,3),d),t=(Z()-.5)*r*.8,i=(Z()-.5)*r*.8;e.position.set(t,.05+Z()*.3,i),n.add(e),f.push({mesh:e,baseX:t,baseZ:i,drift:Z()*6.28,speed:.2+Z()*.3})}let p=new B({color:Y.fairyRing,transparent:!0,opacity:0,side:2,depthWrite:!1}),m=new H(new go(.3,r-.3,16),p);m.rotation.x=-Math.PI/2,m.position.y=.12,n.add(m);let h=new B({color:Y.fairyGlow,transparent:!0,opacity:.08,depthWrite:!1});for(let e=0;e<6;e++){let e=Z()*6.28,t=e+.5+Z()*1.5,i=new H(new W(.002,.002,r*.6+Z()*r*.4,3),h);i.position.set(Math.cos((e+t)/2)*r*.4,.005,Math.sin((e+t)/2)*r*.4),i.rotation.x=Math.PI/2,i.rotation.z=e,n.add(i)}let g=new K({color:4864560,roughness:.9,transparent:!0,opacity:.5,depthWrite:!1});for(let e=0;e<3;e++){let e=Z()*6.28,t=Z()*r*.7,i=new H(new G(.03,4,3),g);i.scale.set(1.3,.3,1.3),i.position.set(Math.cos(e)*t,.008,Math.sin(e)*t),n.add(i)}let _=new K({color:7833702,roughness:.9,transparent:!0,opacity:.5,depthWrite:!1});for(let e=0;e<2;e++){let e=new H(new Ea(.02+Z()*.02,4),_);e.position.set((Z()-.5)*.08,.06,(Z()-.5)*.06),e.rotation.x=-Math.PI/2+Z()*.4,n.add(e)}let v=[];for(let e=0;e<5;e++){let e=Z()*6.28,t=Z()*r*.9,i=new B({color:8978346,transparent:!0,opacity:.25,depthWrite:!1}),a=new H(new G(.005,3,3),i);a.position.set(Math.cos(e)*t,.01,Math.sin(e)*t),n.add(a),v.push(a)}let y=new B({color:657926,transparent:!0,opacity:.15,side:2,depthWrite:!1}),b=new H(new go(r*.5,r*.85,12),y);return b.rotation.x=-Math.PI/2,b.position.y=.008,n.add(b),n.position.set(e,0,t),X.add(n),{group:n,mushMat:a,discMat:p,sporeMat:d,spores:f,glowWorms:v,x:e,z:t,ringR:r,phase:Z()*6.28,glowIntensity:0,active:!1}}function Q_(e,t,n){let r=new U,i=new K({color:Y.bubbleIris,emissive:Y.bubbleIris,emissiveIntensity:.15,transparent:!0,opacity:.25,depthWrite:!1,roughness:0,metalness:.6}),a=new H(Cm.bubble,i);r.add(a);let o=new B({color:15650047,transparent:!0,opacity:.1,depthWrite:!1}),s=new H(new yo(.13,.003,4,10),o);s.rotation.x=.5,s.rotation.y=Z()*3,r.add(s);let c=new H(new yo(.11,.003,4,10),o);c.rotation.x=-.8,c.rotation.z=1.2,r.add(c);let l=new B({color:Y.bubbleShine,transparent:!0,opacity:.5,depthWrite:!1}),u=new H(new G(.04,4,3),l);u.position.set(.05,.07,.08),r.add(u);let d=new B({color:15658751,transparent:!0,opacity:.2,depthWrite:!1}),f=new H(new G(.025,3,3),d);f.position.set(-.06,-.04,-.06),r.add(f);let p=new B({color:16755438,transparent:!0,opacity:.12,depthWrite:!1}),m=new H(new G(.06,4,3),p);m.position.set(.02,-.02,.01),r.add(m);let h=new B({color:16772863,transparent:!0,opacity:.08,depthWrite:!1}),g=new H(new G(.12,5,4),h);r.add(g);let _=[16764125,13426175,14548940];for(let e=0;e<3;e++){let t=new B({color:_[e],transparent:!0,opacity:.06,depthWrite:!1}),n=new H(new yo(.14-e*.02,.002,4,8),t);n.position.y=-.04+e*.04,n.rotation.x=Math.PI/2,r.add(n)}let v=new B({color:Y.white,transparent:!0,opacity:.6,depthWrite:!1});for(let e=0;e<3;e++){let e=Z()*6.28,t=Z()*Math.PI-Math.PI/2,n=new H(new G(.003,3,3),v);n.position.set(Math.cos(e)*Math.cos(t)*.14,Math.sin(t)*.14,Math.sin(e)*Math.cos(t)*.14),r.add(n)}let y=new B({color:11189196,transparent:!0,opacity:.1,depthWrite:!1}),b=new H(new G(.015,3,3),y);b.position.set((Z()-.5)*.04,(Z()-.5)*.04,(Z()-.5)*.04),r.add(b);let x=new B({color:Y.bubbleIris,transparent:!0,opacity:.15,depthWrite:!1}),S=new H(new G(.04,4,3),x);S.scale.set(1.3,.6,1.3),S.position.y=-.12,r.add(S);let C=.6+Z()*.8;return r.scale.setScalar(C),r.position.set(e,t,n),X.add(r),{group:r,shellMat:i,phase:Z()*6.28,driftAng:Z()*6.28,driftSpeed:.3+Z()*.5,floatY:t,homeX:e,homeZ:n,bobAmp:.3+Z()*.4,popped:!1,popTimer:0,sc:C}}function $_(e,t,n){let r=[],i=[];r.push(0,0,0);let a=2+Math.floor(n*3),o=n*6.28;for(let s=0;s<=t;s++){let c=s/t*Math.PI*2,l=e*(1+.25*Math.sin(c*a+o)+.12*Math.sin(c*(a+2)+o*1.7)+.06*Math.sin(c*7+n*3.14));r.push(Math.cos(c)*l,Math.sin(c)*l,0),s>0&&i.push(0,s,s+1)}let s=new fr;return s.setAttribute(`position`,new nr(new Float32Array(r),3)),s.setIndex(i),s.computeVertexNormals(),s}function ev(e,t){let n=new U,r=2.5+Z()*1.5,i=Z(),a=1+Z()*.35,o=1+Z()*.35,s=Z()*Math.PI,c=new K({color:329746,roughness:.9}),l=new H($_(r*.85,24,i),c);l.rotation.x=-Math.PI/2,l.position.y=.04,l.scale.set(a,1,o),l.rotation.z=s,n.add(l);let u=new K({color:Y.pondWater,emissive:Y.pondGlow,emissiveIntensity:.2,transparent:!0,opacity:.55,roughness:.05,metalness:.4,depthWrite:!1}),d=new H($_(r,24,i),u);d.rotation.x=-Math.PI/2,d.position.y=.06,d.scale.set(a,1,o),d.rotation.z=s,n.add(d);let f=new K({color:3816002,roughness:.85}),p=5+Math.floor(Z()*4);for(let e=0;e<p;e++){let t=e/p*6.28+Z()*.3,i=r+Z()*.2-.1,a=.06+Z()*.08,o=new H(new G(a,4,3),f);o.scale.set(1+Z()*.5,.4+Z()*.3,1+Z()*.5),o.position.set(Math.cos(t)*i,a*.2,Math.sin(t)*i),o.rotation.set(Z(),Z(),Z()),n.add(o)}let m=new K({color:1725728,roughness:.7,side:2});for(let e=0;e<3;e++){let e=Z()*6.28,t=r*.85+Z()*.2;for(let r=0;r<3;r++){let r=new H(new ho(.015,.15+Z()*.1),m);r.position.set(Math.cos(e)*t+(Z()-.5)*.05,.08,Math.sin(e)*t+(Z()-.5)*.05),r.rotation.y=Z()*3,r.rotation.x=-.2,n.add(r)}}let h=new B({color:11197934,transparent:!0,opacity:.08,depthWrite:!1}),g=[];for(let e=0;e<3;e++){let t=new H(new yo(r*.4,.004,4,20),h.clone());t.rotation.x=Math.PI/2,t.position.y=.07,n.add(t),g.push({mesh:t,phase:e/3})}let _=new K({color:Y.lilyPad,roughness:.6,side:2}),v=4+Math.floor(Z()*2),y=[];for(let e=0;e<v;e++){let e=Z()*6.28,t=Z()*r*.6,i=.15+Z()*.15,a=new H(new Ea(i,8),_);a.rotation.x=-Math.PI/2,a.position.set(Math.cos(e)*t,.05,Math.sin(e)*t),n.add(a);let o=new B({color:1724448,transparent:!0,opacity:.3,depthWrite:!1}),s=new H(new W(.002,.002,i*1.5,3),o);s.position.set(Math.cos(e)*t,.052,Math.sin(e)*t),s.rotation.x=Math.PI/2,s.rotation.z=Z()*3,n.add(s),y.push({mesh:a,phase:Z()*6.28})}let b=new K({color:Y.lilyFlower,emissive:Y.lilyGlow,emissiveIntensity:.4,transparent:!0,opacity:.85,side:2,depthWrite:!1}),x=.08;for(let e=0;e<6;e++){let t=e/6*6.28,r=new H(new ho(.06,.05),b);r.position.set(y[0].mesh.position.x+Math.cos(t)*.05,x,y[0].mesh.position.z+Math.sin(t)*.05),r.rotation.x=-1,r.rotation.y=-t,n.add(r)}let S=new K({color:16777130,emissive:Y.lilyGlow,emissiveIntensity:.8}),C=new H(new G(.025,4,3),S);if(C.position.set(y[0].mesh.position.x,x+.02,y[0].mesh.position.z),n.add(C),y.length>2){let e=new K({color:Y.lilyFlower,emissive:Y.lilyGlow,emissiveIntensity:.2,transparent:!0,opacity:.7,depthWrite:!1}),t=new H(new G(.03,5,4),e);t.scale.set(.8,1.2,.8),t.position.set(y[2].mesh.position.x,.09,y[2].mesh.position.z),n.add(t)}let w=new K({color:3815477,roughness:.8,transparent:!0,opacity:.5,depthWrite:!1});for(let e=0;e<5;e++){let e=Z()*6.28,t=Z()*r*.7,i=new H(new G(.02+Z()*.025,4,3),w);i.scale.set(1+Z()*.5,.4,1+Z()*.5),i.position.set(Math.cos(e)*t,.015,Math.sin(e)*t),n.add(i)}let T=new B({color:2761752,transparent:!0,opacity:.12,side:2,depthWrite:!1});for(let e=0;e<3;e++){let e=Z()*6.28,t=Z()*r*.5,i=new H(new Ea(.08+Z()*.06,5),T);i.rotation.x=-Math.PI/2,i.position.set(Math.cos(e)*t,.012,Math.sin(e)*t),n.add(i)}let E=new K({color:1122837,roughness:.7,transparent:!0,opacity:.4,depthWrite:!1}),D=[];for(let e=0;e<2;e++){let e=Z()*6.28,t=Z()*r*.4,i=new H(new G(.012,4,3),E);i.scale.set(.8,.5,1.3),i.position.set(Math.cos(e)*t,.04,Math.sin(e)*t),n.add(i);let a=new H(new W(.002,.001,.025,3),E);a.position.set(Math.cos(e)*t-Math.cos(e)*.02,.04,Math.sin(e)*t-Math.sin(e)*.02),a.rotation.z=Math.PI/2,a.rotation.y=e,n.add(a),D.push({body:i,tail:a,ang:e,orbR:.15+Z()*r*.35,speed:.3+Z()*.4})}let O=new B({color:2250016,transparent:!0,opacity:.1,side:2,depthWrite:!1});for(let e=0;e<3;e++){let e=Z()*6.28,t=r*.7+Z()*r*.25,i=new H(new Ea(.06+Z()*.04,5),O);i.rotation.x=-Math.PI/2,i.position.set(Math.cos(e)*t,.032,Math.sin(e)*t),n.add(i)}let k=new B({color:Y.white,transparent:!0,opacity:.06,depthWrite:!1}),A=new H($_(r-.05,24,i),k);A.rotation.x=-Math.PI/2,A.position.y=.065,A.scale.set(a,1,o),A.rotation.z=s,n.add(A);let j=new K({color:4861976,roughness:.8,side:2,transparent:!0,opacity:.6,depthWrite:!1}),ee=new H(new G(.03,5,3),j);ee.scale.set(1.3,.2,1),ee.position.set((Z()-.5)*r*.5,.07,(Z()-.5)*r*.5),n.add(ee);let te=new K({color:2760728,roughness:.9});for(let e=0;e<16;e++){let t=e/16*Math.PI*2,c=r*(1+.25*Math.sin(t*(2+Math.floor(i*3))+i*6.28)+.12*Math.sin(t*(4+Math.floor(i*3))+i*1.7*6.28)),l=Math.cos(t+s)*c*a,u=Math.sin(t+s)*c*o,d=.04+Z()*.03,f=new H(new G(.15+Z()*.1,4,3),te);f.scale.set(1.5+Z()*.5,d/.1,1.5+Z()*.5),f.position.set(l,d*.5,u),n.add(f)}return n.position.set(e,0,t),X.add(n),{group:n,waterMat:u,flMat:b,pads:y,ripples:g,tadpoles:D,x:e,z:t,phase:Z()*6.28,pondR:r}}function tv(e,t){let n=new U,r=new B({color:Y.orbGold}),i=new H(new G(.2,10,8),r);n.add(i);let a=new B({color:16777215}),o=new H(new G(.06,6,4),a);n.add(o);let s=new B({color:Y.skyStarWarm,transparent:!0,opacity:.4,wireframe:!0,depthWrite:!1}),c=new H(new po(.15,0),s);n.add(c);let l=new B({color:Y.orbGlow,transparent:!0,opacity:.5,depthWrite:!1}),u=new H(new G(.35,8,6),l);n.add(u);let d=new B({color:Y.orbGlow,transparent:!0,opacity:.3,depthWrite:!1});for(let e=0;e<8;e++){let t=e/8*6.28,r=new H(new Da(.02,.25,3),d);r.position.set(Math.cos(t)*.3,Math.sin(t*2)*.05,Math.sin(t)*.3),r.rotation.z=-t+Math.PI/2,r.rotation.y=t,n.add(r)}let f=new B({color:Y.orbInner,transparent:!0,opacity:.15,depthWrite:!1}),p=new H(new G(.6,8,5),f);n.add(p);for(let e=0;e<6;e++){let t=new H(new G(.03,4,3),new B({color:Y.white})),r=e/6*6.28;t.position.set(Math.cos(r)*.4,Math.sin(r*2)*.1,Math.sin(r)*.4),n.add(t)}let m=new B({color:Y.orbGold,transparent:!0,opacity:.7,depthWrite:!1});for(let e=0;e<4;e++){let t=e/4*6.28+.4,r=new H(new G(.015,3,3),m);r.position.set(Math.cos(t)*.5,0,Math.sin(t)*.5),n.add(r)}let h=new B({color:Y.skyStarWarm,transparent:!0,opacity:.12,depthWrite:!1});for(let e=0;e<3;e++){let t=new H(new yo(.28,.003,4,12),h);t.rotation.set(e*1.05,e*.7,0),n.add(t)}let g=new B({color:Y.orbGlow,transparent:!0,opacity:.08,depthWrite:!1}),_=new H(new yo(.4,.004,4,16),g);_.rotation.x=Math.PI/2,n.add(_);let v=new B({color:Y.orbInner,transparent:!0,opacity:.15,depthWrite:!1}),y=new H(new yo(.25,.012,4,10),v);y.rotation.x=Math.PI/2,n.add(y);let b=new B({color:Y.white,transparent:!0,opacity:.5,depthWrite:!1});for(let e=0;e<6;e++){let e=Z()*6.28,t=Z()*Math.PI-Math.PI/2,r=new H(new G(.008,3,3),b);r.position.set(Math.cos(e)*Math.cos(t)*.2,Math.sin(t)*.2,Math.sin(e)*Math.cos(t)*.2),n.add(r)}let x=new B({color:Y.orbGlow,transparent:!0,opacity:.1,side:2,depthWrite:!1}),S=new H(new Ea(.5,8),x);return S.rotation.x=-Math.PI/2,S.position.y=-.95,n.add(S),n.position.set(e,1,t),X.add(n),{group:n,coreMat:r,glowMat:l,hazeMat:f,x:e,z:t,found:!1,flyUp:!1,flyY:1,phase:Z()*6.28,laserLine:null,laserMat:null}}var nv=[{palette:`rockGranite`,roughness:.88,metalness:.04},{palette:`rockSandstone`,roughness:.92,metalness:.02},{palette:`rockLimestone`,roughness:.85,metalness:.03},{palette:`rockSlate`,roughness:.9,metalness:.06},{palette:`rockBasalt`,roughness:.94,metalness:.04}],rv=new z,iv=new z,av=new z,ov=new z;function sv(e,t){let n=e.attributes.position,r=n.count,i=new Float32Array(r*3);iv.set(t[0]),av.set(t[1]),ov.set(t[2]);for(let e=0;e<r;e++){let t=n.getX(e),r=n.getY(e),a=n.getZ(e),o=Math.sqrt(t*t+r*r+a*a)||1,s=Math.max(0,Math.min(1,r/o*.5+.5)),c=Math.sin(t*11.3+a*7.7)*.5+.5;rv.copy(iv),rv.lerp(av,s*.45+c*.25),rv.lerp(ov,(1-s)*.15),i[e*3]=rv.r,i[e*3+1]=rv.g,i[e*3+2]=rv.b}e.setAttribute(`color`,new nr(i,3))}function cv(e){let t=e,n=()=>(t=t*16807%2147483647,(t&2147483647)/2147483647),r=10+Math.floor(n()*8),i=[];for(let e=0;e<r;e++){let e=n()*Math.PI*2,t=Math.acos(2*n()-1),r=Math.sin(t)*Math.cos(e),a=Math.sin(t)*Math.sin(e),o=Math.cos(t);i.push({dx:r,dy:a,dz:o,radius:1.4+n()*1.1,ratio:.6+n()*.25,k:.02+n()*.06})}let a=.75+n()*.5,o=.6+n()*.4,s=.75+n()*.5;return{sdf:(e,t,n)=>{let r=e/a,c=t/o,l=n/s,u=Math.sqrt(r*r+c*c+l*l)-1.05;for(let e=0;e<i.length;e++){let t=i[e],n=r+t.dx*t.radius,a=c+t.dy*t.radius,o=l+t.dz*t.radius,s=Math.sqrt(n*n+a*a+o*o)-t.radius*t.ratio,d=Math.max(0,Math.min(1,.5+.5*(-s-u)/t.k));u=u*(1-d)+-s*d+t.k*d*(1-d)}return u>.3&&(u=.3),u},scaleX:a,scaleY:o,scaleZ:s}}var lv=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),uv=[[-1],[0,8,3,-1],[0,1,9,-1],[1,8,3,9,8,1,-1],[1,2,10,-1],[0,8,3,1,2,10,-1],[9,2,10,0,2,9,-1],[2,8,3,2,10,8,10,9,8,-1],[3,11,2,-1],[0,11,2,8,11,0,-1],[1,9,0,2,3,11,-1],[1,11,2,1,9,11,9,8,11,-1],[3,10,1,11,10,3,-1],[0,10,1,0,8,10,8,11,10,-1],[3,9,0,3,11,9,11,10,9,-1],[9,8,10,10,8,11,-1],[4,7,8,-1],[4,3,0,7,3,4,-1],[0,1,9,8,4,7,-1],[4,1,9,4,7,1,7,3,1,-1],[1,2,10,8,4,7,-1],[3,4,7,3,0,4,1,2,10,-1],[9,2,10,9,0,2,8,4,7,-1],[2,10,9,2,9,7,2,7,3,7,9,4,-1],[8,4,7,3,11,2,-1],[11,4,7,11,2,4,2,0,4,-1],[9,0,1,8,4,7,2,3,11,-1],[4,7,11,9,4,11,9,11,2,9,2,1,-1],[3,10,1,3,11,10,7,8,4,-1],[1,11,10,1,4,11,1,0,4,7,11,4,-1],[4,7,8,9,0,11,9,11,10,11,0,3,-1],[4,7,11,4,11,9,9,11,10,-1],[9,5,4,-1],[9,5,4,0,8,3,-1],[0,5,4,1,5,0,-1],[8,5,4,8,3,5,3,1,5,-1],[1,2,10,9,5,4,-1],[3,0,8,1,2,10,4,9,5,-1],[5,2,10,5,4,2,4,0,2,-1],[2,10,5,3,2,5,3,5,4,3,4,8,-1],[9,5,4,2,3,11,-1],[0,11,2,0,8,11,4,9,5,-1],[0,5,4,0,1,5,2,3,11,-1],[2,1,5,2,5,8,2,8,11,4,8,5,-1],[10,3,11,10,1,3,9,5,4,-1],[4,9,5,0,8,1,8,10,1,8,11,10,-1],[5,4,0,5,0,11,5,11,10,11,0,3,-1],[5,4,8,5,8,10,10,8,11,-1],[9,7,8,5,7,9,-1],[9,3,0,9,5,3,5,7,3,-1],[0,7,8,0,1,7,1,5,7,-1],[1,5,3,3,5,7,-1],[9,7,8,9,5,7,10,1,2,-1],[10,1,2,9,5,0,5,3,0,5,7,3,-1],[8,0,2,8,2,5,8,5,7,10,5,2,-1],[2,10,5,2,5,3,3,5,7,-1],[7,9,5,7,8,9,3,11,2,-1],[9,5,7,9,7,2,9,2,0,2,7,11,-1],[2,3,11,0,1,8,1,7,8,1,5,7,-1],[11,2,1,11,1,7,7,1,5,-1],[9,5,8,8,5,7,10,1,3,10,3,11,-1],[5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1],[11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1],[11,10,5,7,11,5,-1],[10,6,5,-1],[0,8,3,5,10,6,-1],[9,0,1,5,10,6,-1],[1,8,3,1,9,8,5,10,6,-1],[1,6,5,2,6,1,-1],[1,6,5,1,2,6,3,0,8,-1],[9,6,5,9,0,6,0,2,6,-1],[5,9,8,5,8,2,5,2,6,3,2,8,-1],[2,3,11,10,6,5,-1],[11,0,8,11,2,0,10,6,5,-1],[0,1,9,2,3,11,5,10,6,-1],[5,10,6,1,9,2,9,11,2,9,8,11,-1],[6,3,11,6,5,3,5,1,3,-1],[0,8,11,0,11,5,0,5,1,5,11,6,-1],[3,11,6,0,3,6,0,6,5,0,5,9,-1],[6,5,9,6,9,11,11,9,8,-1],[5,10,6,4,7,8,-1],[4,3,0,4,7,3,6,5,10,-1],[1,9,0,5,10,6,8,4,7,-1],[10,6,5,1,9,7,1,7,3,7,9,4,-1],[6,1,2,6,5,1,4,7,8,-1],[1,2,5,5,2,6,3,0,4,3,4,7,-1],[8,4,7,9,0,5,0,6,5,0,2,6,-1],[7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1],[3,11,2,7,8,4,10,6,5,-1],[5,10,6,4,7,2,4,2,0,2,7,11,-1],[0,1,9,4,7,8,2,3,11,5,10,6,-1],[9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1],[8,4,7,3,11,5,3,5,1,5,11,6,-1],[5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1],[0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1],[6,5,9,6,9,11,4,7,9,7,11,9,-1],[10,4,9,6,4,10,-1],[4,10,6,4,9,10,0,8,3,-1],[10,0,1,10,6,0,6,4,0,-1],[8,3,1,8,1,6,8,6,4,6,1,10,-1],[1,4,9,1,2,4,2,6,4,-1],[3,0,8,1,2,9,2,4,9,2,6,4,-1],[0,2,4,4,2,6,-1],[8,3,2,8,2,4,4,2,6,-1],[10,4,9,10,6,4,11,2,3,-1],[0,8,2,2,8,11,4,9,10,4,10,6,-1],[3,11,2,0,1,6,0,6,4,6,1,10,-1],[6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1],[9,6,4,9,3,6,9,1,3,11,6,3,-1],[8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1],[3,11,6,3,6,0,0,6,4,-1],[6,4,8,11,6,8,-1],[7,10,6,7,8,10,8,9,10,-1],[0,7,3,0,10,7,0,9,10,6,7,10,-1],[10,6,7,1,10,7,1,7,8,1,8,0,-1],[10,6,7,10,7,1,1,7,3,-1],[1,2,6,1,6,8,1,8,9,8,6,7,-1],[2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1],[7,8,0,7,0,6,6,0,2,-1],[7,3,2,6,7,2,-1],[2,3,11,10,6,8,10,8,9,8,6,7,-1],[2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1],[1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1],[11,2,1,11,1,7,10,6,1,6,7,1,-1],[8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1],[0,9,1,11,6,7,-1],[7,8,0,7,0,6,3,11,0,11,6,0,-1],[7,11,6,-1],[7,6,11,-1],[3,0,8,11,7,6,-1],[0,1,9,11,7,6,-1],[8,1,9,8,3,1,11,7,6,-1],[10,1,2,6,11,7,-1],[1,2,10,3,0,8,6,11,7,-1],[2,9,0,2,10,9,6,11,7,-1],[6,11,7,2,10,3,10,8,3,10,9,8,-1],[7,2,3,6,2,7,-1],[7,0,8,7,6,0,6,2,0,-1],[2,7,6,2,3,7,0,1,9,-1],[1,6,2,1,8,6,1,9,8,8,7,6,-1],[10,7,6,10,1,7,1,3,7,-1],[10,7,6,1,7,10,1,8,7,1,0,8,-1],[0,3,7,0,7,10,0,10,9,6,10,7,-1],[7,6,10,7,10,8,8,10,9,-1],[6,8,4,11,8,6,-1],[3,6,11,3,0,6,0,4,6,-1],[8,6,11,8,4,6,9,0,1,-1],[9,4,6,9,6,3,9,3,1,11,3,6,-1],[6,8,4,6,11,8,2,10,1,-1],[1,2,10,3,0,11,0,6,11,0,4,6,-1],[4,11,8,4,6,11,0,2,9,2,10,9,-1],[10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1],[8,2,3,8,4,2,4,6,2,-1],[0,4,2,4,6,2,-1],[1,9,0,2,3,4,2,4,6,4,3,8,-1],[1,9,4,1,4,2,2,4,6,-1],[8,1,3,8,6,1,8,4,6,6,10,1,-1],[10,1,0,10,0,6,6,0,4,-1],[4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1],[10,9,4,6,10,4,-1],[4,9,5,7,6,11,-1],[0,8,3,4,9,5,11,7,6,-1],[5,0,1,5,4,0,7,6,11,-1],[11,7,6,8,3,4,3,5,4,3,1,5,-1],[9,5,4,10,1,2,7,6,11,-1],[6,11,7,1,2,10,0,8,3,4,9,5,-1],[7,6,11,5,4,10,4,2,10,4,0,2,-1],[3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1],[7,2,3,7,6,2,5,4,9,-1],[9,5,4,0,8,6,0,6,2,6,8,7,-1],[3,6,2,3,7,6,1,5,0,5,4,0,-1],[6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1],[9,5,4,10,1,6,1,7,6,1,3,7,-1],[1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1],[4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1],[7,6,10,7,10,8,5,4,10,4,8,10,-1],[6,9,5,6,11,9,11,8,9,-1],[3,6,11,0,6,3,0,5,6,0,9,5,-1],[0,11,8,0,5,11,0,1,5,5,6,11,-1],[6,11,3,6,3,5,5,3,1,-1],[1,2,10,9,5,11,9,11,8,11,5,6,-1],[0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1],[11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1],[6,11,3,6,3,5,2,10,3,10,5,3,-1],[5,8,9,5,2,8,5,6,2,3,8,2,-1],[9,5,6,9,6,0,0,6,2,-1],[1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1],[1,5,6,2,1,6,-1],[1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1],[10,1,0,10,0,6,9,5,0,5,6,0,-1],[0,3,8,5,6,10,-1],[10,5,6,-1],[11,5,10,7,5,11,-1],[11,5,10,11,7,5,8,3,0,-1],[5,11,7,5,10,11,1,9,0,-1],[10,7,5,10,11,7,9,8,1,8,3,1,-1],[11,1,2,11,7,1,7,5,1,-1],[0,8,3,1,2,7,1,7,5,7,2,11,-1],[9,7,5,9,2,7,9,0,2,2,11,7,-1],[7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1],[2,5,10,2,3,5,3,7,5,-1],[8,2,0,8,5,2,8,7,5,10,2,5,-1],[9,0,1,5,10,3,5,3,7,3,10,2,-1],[9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1],[1,3,5,3,7,5,-1],[0,8,7,0,7,1,1,7,5,-1],[9,0,3,9,3,5,5,3,7,-1],[9,8,7,5,9,7,-1],[5,8,4,5,10,8,10,11,8,-1],[5,0,4,5,11,0,5,10,11,11,3,0,-1],[0,1,9,8,4,10,8,10,11,10,4,5,-1],[10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1],[2,5,1,2,8,5,2,11,8,4,5,8,-1],[0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1],[0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1],[9,4,5,2,11,3,-1],[2,5,10,3,5,2,3,4,5,3,8,4,-1],[5,10,2,5,2,4,4,2,0,-1],[3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1],[5,10,2,5,2,4,1,9,2,9,4,2,-1],[8,4,5,8,5,3,3,5,1,-1],[0,4,5,1,0,5,-1],[8,4,5,8,5,3,9,0,5,0,3,5,-1],[9,4,5,-1],[4,11,7,4,9,11,9,10,11,-1],[0,8,3,4,9,7,9,11,7,9,10,11,-1],[1,10,11,1,11,4,1,4,0,7,4,11,-1],[3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1],[4,11,7,9,11,4,9,2,11,9,1,2,-1],[9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1],[11,7,4,11,4,2,2,4,0,-1],[11,7,4,11,4,2,8,3,4,3,2,4,-1],[2,9,10,2,7,9,2,3,7,7,4,9,-1],[9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1],[3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1],[1,10,2,8,7,4,-1],[4,9,1,4,1,7,7,1,3,-1],[4,9,1,4,1,7,0,8,1,8,7,1,-1],[4,0,3,7,4,3,-1],[4,8,7,-1],[9,10,8,10,11,8,-1],[3,0,9,3,9,11,11,9,10,-1],[0,1,10,0,10,8,8,10,11,-1],[3,1,10,11,3,10,-1],[1,2,11,1,11,9,9,11,8,-1],[3,0,9,3,9,11,1,2,9,2,11,9,-1],[0,2,11,8,0,11,-1],[3,2,11,-1],[2,3,8,2,8,10,10,8,9,-1],[9,10,2,0,9,2,-1],[2,3,8,2,8,10,0,1,8,1,10,8,-1],[1,10,2,-1],[1,3,8,9,1,8,-1],[0,9,1,-1],[0,3,8,-1],[-1]],dv=new Map;function fv(e,t,n){let[r,i,a,o,s,c]=n,l=(i-r)/(e-1),u=(o-a)/(e-1),d=(c-s)/(e-1),f=new Float32Array(e*e*e);for(let n=0,i=0;n<e;n++)for(let o=0;o<e;o++)for(let c=0;c<e;c++,i++)f[i]=t(r+c*l,a+o*u,s+n*d);let p=e*e*e*5,m=new Float32Array(p*3),h=new Uint32Array(p*3),g=0,_=0;dv.clear();let v=(e,t,n)=>{let r=e*100|0,i=t*100|0,a=n*100|0,o=r+512<<20|i+512<<10|a+512;if(dv.has(o))return dv.get(o);let s=g;return m[s*3]=e,m[s*3+1]=t,m[s*3+2]=n,g++,dv.set(o,s),s},y=new Float32Array(8),b=new Float32Array(8),x=new Float32Array(8),S=new Float32Array(8),C=new Float32Array(12),w=new Float32Array(12),T=new Float32Array(12);for(let t=0;t<e-1;t++)for(let n=0;n<e-1;n++)for(let i=0;i<e-1;i++){let o=r+i*l,c=a+n*u,p=s+t*d;y[0]=o,b[0]=c,x[0]=p,y[1]=o+l,b[1]=c,x[1]=p,y[2]=o+l,b[2]=c+u,x[2]=p,y[3]=o,b[3]=c+u,x[3]=p,y[4]=o,b[4]=c,x[4]=p+d,y[5]=o+l,b[5]=c,x[5]=p+d,y[6]=o+l,b[6]=c+u,x[6]=p+d,y[7]=o,b[7]=c+u,x[7]=p+d;let m=t*e*e+n*e+i;S[0]=f[m],S[1]=f[m+1],S[2]=f[m+1+e],S[3]=f[m+e],S[4]=f[m+e*e],S[5]=f[m+1+e*e],S[6]=f[m+1+e+e*e],S[7]=f[m+e+e*e];let g=0;for(let e=0;e<8;e++)S[e]<0&&(g|=1<<e);let E=lv[g];if(!E)continue;let D=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];for(let e=0;e<12;e++){if(!(E&1<<e))continue;let t=D[e][0],n=D[e][1],r=S[t],i=S[n],a=Math.abs(r-i)<1e-10?0:-r/(i-r);C[e]=y[t]+a*(y[n]-y[t]),w[e]=b[t]+a*(b[n]-b[t]),T[e]=x[t]+a*(x[n]-x[t])}let O=uv[g];for(let e=0;O[e]!==-1;e+=3){let t=v(C[O[e]],w[O[e]],T[O[e]]),n=v(C[O[e+1]],w[O[e+1]],T[O[e+1]]),r=v(C[O[e+2]],w[O[e+2]],T[O[e+2]]);t!==n&&n!==r&&r!==t&&(h[_++]=t,h[_++]=r,h[_++]=n)}}let E=new fr;return E.setAttribute(`position`,new V(m.subarray(0,g*3),3)),E.setIndex(new ir(h.subarray(0,_),1)),E.computeVertexNormals(),E}function pv(e,t){let n=new po(1,0);return n.scale(e*1.2,e*t*1.2,e*1.2),n}function mv(e){let t=e.attributes.position.array,n=t.length/3,r=0,i=0,a=0,o=1/0,s=-1/0;for(let e=0;e<n;e++)r+=t[e*3],i+=t[e*3+1],a+=t[e*3+2],t[e*3+1]<o&&(o=t[e*3+1]),t[e*3+1]>s&&(s=t[e*3+1]);r/=n,i/=n,a/=n;let c=0;for(let e=0;e<n;e++){let n=t[e*3]-r,o=t[e*3+1]-i,s=t[e*3+2]-a;c+=Math.sqrt(n*n+o*o+s*s)}return{avgRadius:c/n,squash:(s-o)/2/(c/n),bottomY:o,height:s-o}}var hv=500,gv=8,_v=[],vv=null,yv=null,bv=0,xv=[],Sv=0,Cv=new Oi,wv=new an,Tv=new Yt(new R,0),Ev=new Mn,Dv=new K({vertexColors:!0,roughness:.65,metalness:.05,emissive:Y.rockEmissive,emissiveIntensity:.45,fog:!1});function Ov(){Sv=Tu.length,vv=new Float32Array(hv*gv),bv=0;let e=[];xv=[];for(let t=0;t<6;t++){let{sdf:n}=cv(t*7919+1337),r=[-1.5,1.5,-1.5,1.5,-1.5,1.5],i=fv(Tu[0],n,r),a=mv(i);xv[t]=a;let o=Y[nv[t%nv.length].palette],s=[];for(let e=0;e<Sv;e++){let t=Tu[e],c;c=t<=0?pv(a.avgRadius,a.squash):e===0?i:fv(t,n,r),sv(c,o),s.push(c)}e.push(s)}_v=[];for(let t=0;t<6;t++)for(let n=0;n<Sv;n++){let r=e[t][n],i=new xi(r,Dv,hv);i.count=0,i.frustumCulled=!1,i.castShadow=n<=1,i.receiveShadow=n<=1,i.instanceMatrix.setUsage(We),X.add(i),_v.push(i)}}function kv(e,t,n,r){if(bv>=hv)return{colR:.5};let i=bv*gv,a=r?1.2+Z()*1.8:.3+Z()*.5,o=.4+Z()*.5;return vv[i+0]=e,vv[i+1]=t,vv[i+2]=n,vv[i+3]=a,vv[i+4]=Z()*Math.PI*2,vv[i+5]=Math.floor(Z()*6),vv[i+6]=o,vv[i+7]=a*(r?.55:.4),bv++,{colR:a*(r?.55:.4),groundY:n,scale:a,squash:o,isBoulder:r}}function Av(){yv=new Float32Array(bv*16);for(let e=0;e<bv;e++){let t=e*gv,n=vv[t+0],r=vv[t+1],i=vv[t+2],a=vv[t+3],o=vv[t+4],s=vv[t+5],c=vv[t+6],l=xv[s],u=-l.bottomY*a*c-l.height*a*c*Eu;Ev.position.set(n,i+u,r),Ev.rotation.set(0,o,0),Ev.scale.set(a,a*c,a),Ev.updateMatrix(),Ev.matrix.toArray(yv,e*16)}}var jv=null;function Mv(e,t,n,r){if(_v.length){wv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Cv.setFromProjectionMatrix(wv),jv||(jv=new Uint32Array(6*Sv)),jv.fill(0);for(let t=0;t<bv;t++){let r=t*gv,i=vv[r+0],a=vv[r+1],o=vv[r+3],s=i-e,c=a-n,l=s*s+c*c;if(l>3600||(Tv.center.x=i,Tv.center.y=vv[r+2]+o*.4,Tv.center.z=a,Tv.radius=o*1.7,!Cv.intersectsSphere(Tv)))continue;let u=Sv-1;for(let e=0;e<Sv-1;e++)if(l<wu[e+1]){u=e;break}let d=(vv[r+5]|0)*Sv+u,f=jv[d];if(f>=hv)continue;let p=_v[d],m=t*16;p.instanceMatrix.array.set(yv.subarray(m,m+16),f*16),jv[d]++}for(let e=0;e<_v.length;e++){let t=_v[e],n=jv[e];n===t.count||(t.count=n),n>0&&(t.instanceMatrix.clearUpdateRanges(),t.instanceMatrix.addUpdateRange(0,n*16),t.instanceMatrix.needsUpdate=!0)}}}var Nv=null,Pv=new Mn;function Fv(e,t,n){let r=e.attributes.position;for(let e=0;e<r.count;e++){let i=r.getX(e),a=r.getY(e),o=r.getZ(e),s=Math.sqrt(i*i+a*a+o*o)||1,c=i/s,l=a/s,u=o/s,d=Math.sin(i*4.3+n)*Math.sin(a*3.7+o*2.1+n*.7),f=Math.sin(o*5.1+n*1.3)*Math.sin(i*2.9+a*4.7)*.5,p=Math.sin((i+a)*3.1+n*2.1)*Math.sin((o-i)*2.7)*.3,m=(d+f+p)*t;r.setX(e,i+c*m),r.setY(e,a+l*m),r.setZ(e,o+u*m)}r.needsUpdate=!0,e.computeVertexNormals()}function Iv(){let e=new G(1,6,5);return Fv(e,.08,42.7),Nv=new xi(e,new K({color:Y.rockBase,roughness:.65,metalness:.05,emissive:Y.rockEmissive,emissiveIntensity:.35}),250),Nv.instanceMatrix.setUsage(Ue),Nv.count=0,X.add(Nv),Nv}var Lv=new z,Rv=[9079440,10127984,10526872,6320256,8026754,7366752,9472128];function zv(e,t,n){if(!Nv)return;let r=Nv.count;if(r>=250)return;let i=.04+Z()*.1;Pv.position.set(e,n+i*.08,t),Pv.rotation.set(Z()*.5,Z()*6.28,Z()*.5),Pv.scale.set(i*(.9+Z()*.5),i*(.2+Z()*.3),i*(.9+Z()*.5)),Pv.updateMatrix(),Nv.setMatrixAt(r,Pv.matrix),Lv.set(Rv[Math.floor(Z()*Rv.length)]),Nv.setColorAt(r,Lv),Nv.count=r+1}function Bv(){Nv&&(Nv.instanceMatrix.needsUpdate=!0,Nv.instanceColor&&(Nv.instanceColor.needsUpdate=!0))}var Vv=null,Hv=null,Uv=null,Wv=null,Gv=[],Kv=[];function qv(){return Vv}function Jv(){return Hv}function Yv(){return Uv}function Xv(){return Wv}function Zv(){return Gv}function Qv(){return Kv}function $v(){let e=new U,t=new K({color:Y.obeliskBlack,roughness:.2,metalness:.8,emissive:Y.obeliskPink,emissiveIntensity:0});Hv=t;let n=new H(new W(1.2,1.8,30,5),t);n.position.y=30/2,n.rotation.y=Math.PI/5,n.castShadow=!0,e.add(n);let r=new B({color:Y.obeliskChamber,transparent:!0,opacity:.2,depthWrite:!1});for(let t=0;t<5;t++){let n=t/5*6.28+Math.PI/5,i=new H(new W(.03,.04,30*.9,3),r);i.position.set(Math.cos(n)*1.55,30*.45,Math.sin(n)*1.55),e.add(i)}Kv.length=0;for(let t=0;t<5;t++){let n=new B({color:Y.obeliskPink,transparent:!0,opacity:0,blending:2,depthWrite:!1}),r=[],i=t/5*6.28+Math.PI/5;for(let t=0;t<3;t++){let a=6+t*4,o=new H(new W(.04,.04,1,4),n);o.position.set(Math.cos(i)*1.62,a,Math.sin(i)*1.62),o.rotation.z=Math.PI/2,o.rotation.y=-i,o.visible=!1,e.add(o),r.push(o)}let a=new H(new W(.035,.035,3,4),n);a.position.set(Math.cos(i)*1.62,12,Math.sin(i)*1.62),a.visible=!1,e.add(a),r.push(a),Kv.push({mat:n,meshes:r,revealed:!1,revealTimer:0})}let i=new K({color:Y.obeliskBlack,roughness:.1,metalness:.9,emissive:Y.obeliskPink,emissiveIntensity:0});Uv=i;let a=new H(new Da(1.3,3,5),i);a.position.y=31.5,a.rotation.y=Math.PI/5,e.add(a);let o=new B({color:Y.obeliskPink,transparent:!0,opacity:0,depthWrite:!1});for(let t=0;t<5;t++){let n=t/5*6.28+Math.PI/5,r=new H(new W(.02,.02,3.2,3),o);r.position.set(Math.cos(n)*.8,31.5,Math.sin(n)*.8),r.rotation.z=.35*(n<3.14?1:-1),r.rotation.y=-n,r.visible=!1,e.add(r)}for(let t=0;t<5;t++){let n=new H(new yo(1.85-t*.02,.04,6,5),new B({color:Y.obeliskInterior}));n.position.y=4+t*5,n.rotation.x=Math.PI/2,e.add(n)}let s=new K({color:Y.obeliskBase,roughness:.3,metalness:.7}),c=new H(new W(2.2,2.5,.6,5),s);c.position.y=.3,c.rotation.y=Math.PI/5,e.add(c);let l=new H(new W(2.8,3,.4,5),s);l.position.y=.05,l.rotation.y=Math.PI/5,e.add(l);let u=new B({color:Y.obeliskPink,transparent:!0,opacity:0,depthWrite:!1});for(let t=0;t<8;t++){let n=t/8*6.28,r=new H(new G(.06,4,3),u);r.position.set(Math.cos(n)*2.5,30*.7+t*.5,Math.sin(n)*2.5),r.visible=!1,e.add(r)}let d=new B({color:Y.obeliskScratch,transparent:!0,opacity:.08,depthWrite:!1});for(let t=0;t<6;t++){let t=Z()*6.28,n=2+Z()*30*.7,r=new H(new W(.008,.008,.5+Z()*.5,3),d);r.position.set(Math.cos(t)*1.6,n,Math.sin(t)*1.6),r.rotation.z=(Z()-.5)*.8,r.rotation.y=-t,e.add(r)}let f=new K({color:Y.obeliskRubble,roughness:.5,metalness:.4});for(let t=0;t<12;t++){let t=Z()*6.28,n=3+Z()*2,r=.15+Z()*.25,i=new H(new G(r,4,3),f);i.scale.set(1+Z()*.5,.3+Z()*.3,1+Z()*.5),i.position.set(Math.cos(t)*n,r*.15,Math.sin(t)*n),i.rotation.set(Z(),Z(),Z()),e.add(i)}let p=new B({color:Y.obeliskPink,transparent:!0,opacity:0,depthWrite:!1});for(let t=0;t<5;t++){let n=t/5*6.28+Math.PI/5;for(let t=0;t<5;t++){let r=5+t*3.5+Z()*.5,i=(Z()-.5)*.4,a=new H(new G(.04,4,3),p);a.position.set(Math.cos(n)*1.58+Math.cos(n+1.57)*i,r,Math.sin(n)*1.58+Math.sin(n+1.57)*i),a.visible=!1,e.add(a)}}let m=new B({color:Y.obeliskPink,transparent:!0,opacity:.8,blending:2,depthWrite:!1}),h=new H(new G(.5,12,8),m);h.position.y=33,e.add(h);let g=new B({color:Y.obeliskPink,transparent:!0,opacity:.2,blending:2,depthWrite:!1}),_=new H(new G(.9,8,6),g);_.position.y=33,e.add(_),Wv={mesh:h,haze:_,mat:m,hazeMat:g},Gv=[];let v=[.8,1.1,1.4,1.8],y=[11158783,10040302,12277247,8921821];for(let t=0;t<4;t++){let n=new B({color:y[t],transparent:!0,opacity:.4,blending:2,depthWrite:!1,side:2}),r=new H(new yo(v[t],.02,6,24),n);r.position.y=33,r.rotation.set(Z()*6.28,Z()*6.28,Z()*6.28),e.add(r),Gv.push({mesh:r,mat:n,rx:(Z()-.5)*2,ry:(Z()-.5)*2,rz:(Z()-.5)*1.5})}let b=new B({color:Y.black,transparent:!0,opacity:.15,side:2,depthWrite:!1}),x=new H(new Ea(4,8),b);x.rotation.x=-Math.PI/2,x.position.y=.005,e.add(x),e.position.set(0,-30,0),X.add(e),Vv=e;let S=new Yo(Y.obeliskLight,0,30);e.add(S),S.position.set(0,31,0)}var ey=null,ty=null;function ny(){return ey}function ry(){return ty}function iy(){let e=new K({color:Y.moatBlue,emissive:Y.moatGlow,emissiveIntensity:.3,transparent:!0,opacity:0,roughness:.1,metalness:.3,depthWrite:!1});ty=e;let t=new Aa;t.absarc(0,0,6,0,6.28,!1);let n=new Ta;n.absarc(0,0,3,0,6.28,!0),t.holes.push(n);let r=new H(new _o(t,24),e);r.rotation.x=-Math.PI/2,r.position.y=.05,r.visible=!1,X.add(r),ey=r;let i=new B({color:Y.moatStone,transparent:!0,opacity:0,depthWrite:!1});for(let e=0;e<12;e++){let t=e/12*6.28+Z()*.3,n=3.5+Z()*2,r=new H(new G(.04+Z()*.04,4,3),i);r.scale.set(1.2,.4,1.2),r.position.set(Math.cos(t)*n,.02,Math.sin(t)*n),r.visible=!1,X.add(r)}let a=new B({color:Y.white,transparent:!0,opacity:0,side:2,depthWrite:!1});for(let e=0;e<6;e++){let t=e/6*6.28+Z()*.5,n=new H(new Ea(.12+Z()*.1,5),a);n.rotation.x=-Math.PI/2,n.position.set(Math.cos(t)*3.3,.06,Math.sin(t)*3.3),n.visible=!1,X.add(n)}let o=new B({color:Y.skyStarDim,transparent:!0,opacity:0,depthWrite:!1});for(let e=0;e<8;e++){let t=e/8*6.28,n=4+Z()*1.5,r=new H(new W(.003,.003,.4,3),o);r.position.set(Math.cos(t)*n,.055,Math.sin(t)*n),r.rotation.x=Math.PI/2,r.rotation.z=t+Math.PI/2,r.visible=!1,X.add(r)}let s=new B({color:Y.skyDeep,transparent:!0,opacity:0,side:2,depthWrite:!1}),c=new Aa;c.absarc(0,0,5.2,0,6.28,!1);let l=new Ta;l.absarc(0,0,3.8,0,6.28,!0),c.holes.push(l);let u=new H(new _o(c,16),s);u.rotation.x=-Math.PI/2,u.position.y=.04,u.visible=!1,X.add(u)}var ay=[];function oy(e,t,n,r,i){let a=[],o=r?[]:null,s=[];for(let c=0;c<n;c++){let l=e[c],u=e[c+1],d=u.x-l.x;u.y-l.y;let f=u.z-l.z,p=Math.sqrt(d*d+f*f)||1,m=-f/p,h=d/p,g=(c+.5)/n,_=t*(.7+Math.sin(g*Math.PI)*.5)/2,v=[l.x+m*_,l.y,l.z+h*_],y=[l.x-m*_,l.y,l.z-h*_],b=[u.x+m*_,u.y,u.z+h*_],x=[u.x-m*_,u.y,u.z-h*_];a.push(...v,...b,...y,...y,...b,...x);let S=c/n,C=(c+1)/n;if(s.push(S,0,C,0,S,1,S,1,C,0,C,1),r&&i){let e=.85+Math.sin(g*Math.PI*3)*.15,t=1.2*e,n=.6*e;o.push(i.r*t,i.g*t,i.b*t),o.push(i.r*t,i.g*t,i.b*t),o.push(i.r*n,i.g*n,i.b*n),o.push(i.r*n,i.g*n,i.b*n),o.push(i.r*t,i.g*t,i.b*t),o.push(i.r*n,i.g*n,i.b*n)}}let c=new fr;return c.setAttribute(`position`,new V(a,3)),c.setAttribute(`uv`,new V(s,2)),o&&c.setAttribute(`color`,new V(o,3)),c.computeVertexNormals(),c}function sy(){for(let e=0;e<6;e++){let t=Y.rainbow[e],n=e/6*6.28,r=6+e*.8,i=36+e*2.5,a=1-e*.05,o=[];for(let e=0;e<=32;e++){let t=e/32,a=n+t*Math.PI,s=Math.cos(a)*r,c=Math.sin(a)*r,l=Math.sin(t*Math.PI)*i;o.push(new R(s,l,c))}let s=oy(o,a,32,!0,new z(t)),c=new B({vertexColors:!0,transparent:!0,opacity:0,side:2,depthWrite:!1,blending:2}),l=new H(s,c);l.visible=!1,X.add(l);let u=new aa(o),d=new B({color:16777215,transparent:!0,opacity:0,blending:2,depthWrite:!1}),f=new H(new bo(u,32,.03,4,!1),d);f.visible=!1,X.add(f);let p=[],m=new B({color:16777215,transparent:!0,opacity:0,blending:2,depthWrite:!1});for(let e=0;e<8;e++){let t=new H(new G(.06,4,3),m.clone());t.visible=!1,X.add(t),p.push({mesh:t,mat:t.material,phase:e/8,speed:.15+Math.random()*.1})}let h=new B({color:t,transparent:!0,opacity:0,side:2,blending:2,depthWrite:!1}),g=o[0],_=o[o.length-1],v=new H(new Ea(1.2,8),h);v.rotation.x=-Math.PI/2,v.position.set(g.x,.03,g.z),v.visible=!1,X.add(v);let y=new H(new Ea(1.2,8),h.clone());y.rotation.x=-Math.PI/2,y.position.set(_.x,.03,_.z),y.visible=!1,X.add(y),ay.push({mesh:l,mat:c,coreLine:f,coreMat:d,curve:u,sparkles:p,pools:[v,y],poolMat:h,targetOpacity:0})}let e=[];for(let t=0;t<=32;t++){let n=t/32,r=n*Math.PI;e.push(new R(Math.cos(r)*10,Math.sin(n*Math.PI)*44,Math.sin(r)*10))}let t=oy(e,1.5,32,!0,new z(Y.skyMoonWarm)),n=new B({vertexColors:!0,transparent:!0,opacity:0,side:2,depthWrite:!1,blending:2}),r=new H(t,n);r.visible=!1,X.add(r),ay.push({mesh:r,mat:n,targetOpacity:0})}function cy(e){for(let t=0;t<ay.length;t++){let n=ay[t];if(!(!n.sparkles||!n.curve)&&n.mesh.visible){n.coreLine&&(n.coreLine.visible=n.mesh.visible,n.coreMat.opacity=n.mat.opacity*.4);for(let t=0;t<n.sparkles.length;t++){let r=n.sparkles[t];r.phase+=r.speed*.016,r.phase>1&&--r.phase;let i=n.curve.getPoint(r.phase);r.mesh.position.copy(i),r.mesh.visible=n.mesh.visible;let a=Math.sin(e*8+t*2.1)*.5+.5;r.mat.opacity=n.mat.opacity*a*.7}if(n.pools)for(let e=0;e<n.pools.length;e++)n.pools[e].visible=n.mesh.visible,n.poolMat&&(n.poolMat.opacity=n.mat.opacity*.3)}}}var ly=null,uy=[],dy=new Mn,fy=new z;function py(e){let t=new B({color:16777215,transparent:!0,opacity:1,depthWrite:!1});ly=new xi(Cm.fly,t,e),ly.instanceMatrix.setUsage(We),ly.instanceColor=new pi(new Float32Array(e*3),3),ly.instanceColor.setUsage(We),dy.scale.setScalar(0),dy.updateMatrix();for(let t=0;t<e;t++){ly.setMatrixAt(t,dy.matrix);let e=t%3==0?Y.fireflyB:Y.firefly;fy.setHex(e),ly.setColorAt(t,fy),uy.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Math.random()*6.28,wander:Math.random()*6.28,colorHex:e})}ly.count=e,ly.frustumCulled=!1,X.add(ly)}function my(e,t,n,r){let i=null;for(let e=0;e<uy.length;e++)if(!uy[e].active){i=uy[e];break}if(!i){let e=1/0;for(let t=0;t<uy.length;t++)uy[t].life<e&&(e=uy[t].life,i=uy[t])}i.x=e,i.y=t+.5+Math.random()*3,i.z=n,i.vx=(Math.random()-.5)*2,i.vy=Math.random()-.5,i.vz=(Math.random()-.5)*2,i.life=r,i.max=r,i.active=!0,i.wander=Math.random()*6.28}function hy(e,t){let n=0,r=!1;for(let i=0;i<uy.length;i++){let a=uy[i];if(!a.active){dy.position.set(0,-100,0),dy.scale.setScalar(0),dy.updateMatrix(),ly.setMatrixAt(i,dy.matrix);continue}if(a.life-=e,a.life<=0){a.active=!1,dy.position.set(0,-100,0),dy.scale.setScalar(0),dy.updateMatrix(),ly.setMatrixAt(i,dy.matrix);continue}n++,a.wander+=(Math.random()-.5)*3*e,a.vx+=Math.cos(a.wander)*1.5*e,a.vz+=Math.sin(a.wander)*1.5*e,a.vy+=Math.sin(t*2+a.phase)*e,a.vx*=.995,a.vy*=.995,a.vz*=.995,a.x+=a.vx*e,a.y+=a.vy*e,a.z+=a.vz*e;let o=Tf(a.x,a.z)+.3;a.y<o&&(a.y=o,a.vy=Math.abs(a.vy)*.5),a.y>12&&(a.vy-=2*e);let s=Math.sin(t*3+a.phase)*.5+.5,c=a.life/a.max*(.4+s*.6),l=.6+s*.6;dy.position.set(a.x,a.y,a.z),dy.scale.setScalar(l),dy.updateMatrix(),ly.setMatrixAt(i,dy.matrix),fy.setHex(a.colorHex),fy.multiplyScalar(c),ly.setColorAt(i,fy),r=!0}return ly.instanceMatrix.needsUpdate=!0,r&&(ly.instanceColor.needsUpdate=!0),n}var gy=null,_y=[],vy=new Mn,yy=new z,by=new z(Y.spore);function xy(e){let t=new B({color:16777215,transparent:!0,opacity:1,depthWrite:!1});gy=new xi(Cm.spore,t,e),gy.instanceMatrix.setUsage(We),gy.instanceColor=new pi(new Float32Array(e*3),3),gy.instanceColor.setUsage(We),vy.scale.setScalar(0),vy.updateMatrix();for(let t=0;t<e;t++)gy.setMatrixAt(t,vy.matrix),yy.setHex(Y.spore),gy.setColorAt(t,yy),_y.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});gy.count=e,gy.frustumCulled=!1,X.add(gy)}function Sy(e,t,n){let r=null;for(let e=0;e<_y.length;e++)if(!_y[e].active){r=_y[e];break}if(!r){let e=1/0;for(let t=0;t<_y.length;t++)_y[t].life<e&&(e=_y[t].life,r=_y[t])}r.x=e,r.y=t,r.z=n,r.vx=(Math.random()-.5)*.3,r.vy=.4+Math.random()*.4,r.vz=(Math.random()-.5)*.3,r.life=3+Math.random()*3,r.max=r.life,r.active=!0}var Cy=0,wy=0;function Ty(e,t){Cy=e,wy=t}function Ey(e){let t=0,n=!1;for(let r=0;r<_y.length;r++){let i=_y[r];if(!i.active){vy.position.set(0,-100,0),vy.scale.setScalar(0),vy.updateMatrix(),gy.setMatrixAt(r,vy.matrix);continue}if(i.life-=e,i.life<=0){i.active=!1,vy.position.set(0,-100,0),vy.scale.setScalar(0),vy.updateMatrix(),gy.setMatrixAt(r,vy.matrix);continue}t++,i.vy+=.3*e,i.vx+=Cy*.3*e,i.vz+=wy*.3*e,i.vx*=.997,i.vy*=.997,i.vz*=.997,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e;let a=i.life/i.max*.7;vy.position.set(i.x,i.y,i.z),vy.scale.setScalar(1),vy.updateMatrix(),gy.setMatrixAt(r,vy.matrix),yy.copy(by).multiplyScalar(a),gy.setColorAt(r,yy),n=!0}return gy.instanceMatrix.needsUpdate=!0,n&&(gy.instanceColor.needsUpdate=!0),t}var Dy=null,Oy=[],ky=0,Ay=new Mn,jy=new z,My=new z(Y.starMote);function Ny(e){let t=new B({color:16777215,transparent:!0,opacity:1,depthWrite:!1});Dy=new xi(Cm.starMote,t,e),Dy.instanceMatrix.setUsage(We),Dy.instanceColor=new pi(new Float32Array(e*3),3),Dy.instanceColor.setUsage(We),Ay.scale.setScalar(0),Ay.updateMatrix();for(let t=0;t<e;t++)Dy.setMatrixAt(t,Ay.matrix),jy.copy(My),Dy.setColorAt(t,jy),Oy.push({x:0,y:0,z:0,life:0,max:0,active:!1,vy:0,drift:0});Dy.count=e,Dy.frustumCulled=!1,X.add(Dy)}function Py(e){let t=null;for(let e=0;e<Oy.length;e++)if(!Oy[e].active){t=Oy[e];break}t&&(t.x=e.x+(Math.random()-.5)*60,t.z=e.z+(Math.random()-.5)*60,t.y=15+Math.random()*20,t.life=6+Math.random()*6,t.max=t.life,t.active=!0,t.vy=-.15-Math.random()*.3,t.drift=Math.random()*6.28)}function Fy(e,t,n){ky+=e,ky>.15&&(ky=0,Py(n));let r=!1;for(let n=0;n<Oy.length;n++){let i=Oy[n];if(!i.active){Ay.position.set(0,-100,0),Ay.scale.setScalar(0),Ay.updateMatrix(),Dy.setMatrixAt(n,Ay.matrix);continue}if(i.life-=e,i.life<=0||i.y<.5){i.active=!1,Ay.position.set(0,-100,0),Ay.scale.setScalar(0),Ay.updateMatrix(),Dy.setMatrixAt(n,Ay.matrix);continue}i.y+=i.vy*e,i.drift+=(Math.random()-.5)*.5*e,i.x+=Math.sin(i.drift)*.1*e,i.z+=Math.cos(i.drift)*.08*e;let a=i.life/i.max,o=Math.sin(t*4+n)*.3+.7,s=a*o*.7,c=.5+o*.5;Ay.position.set(i.x,i.y,i.z),Ay.scale.setScalar(c),Ay.updateMatrix(),Dy.setMatrixAt(n,Ay.matrix),jy.copy(My).multiplyScalar(s),Dy.setColorAt(n,jy),r=!0}Dy.instanceMatrix.needsUpdate=!0,r&&(Dy.instanceColor.needsUpdate=!0)}var Iy=null,Ly=[],Ry=new Mn,zy=new z,By=new z(Y.dustBase);function Vy(e){let t=new B({color:Y.white,transparent:!0,opacity:1,depthWrite:!1});Iy=new xi(Cm.dustMote,t,e),Iy.instanceMatrix.setUsage(We),Iy.instanceColor=new pi(new Float32Array(e*3),3),Iy.instanceColor.setUsage(We),Ry.scale.setScalar(0),Ry.updateMatrix();for(let t=0;t<e;t++)Iy.setMatrixAt(t,Ry.matrix),zy.copy(By),Iy.setColorAt(t,zy),Ly.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Iy.count=e,Iy.frustumCulled=!1,X.add(Iy)}function Hy(e,t,n){for(let r=0;r<n;r++){let n=null;for(let e=0;e<Ly.length;e++)if(!Ly[e].active){n=Ly[e];break}if(!n)continue;let r=Math.random()*6.28,i=1+Math.random()*2;n.x=e+Math.cos(r)*.2,n.y=Tf(e,t)+.1,n.z=t+Math.sin(r)*.2,n.vx=Math.cos(r)*i,n.vy=.5+Math.random()*1.5,n.vz=Math.sin(r)*i,n.life=.6+Math.random()*.6,n.max=n.life,n.active=!0}}function Uy(e){let t=!1;for(let n=0;n<Ly.length;n++){let r=Ly[n];if(!r.active){Ry.position.set(0,-100,0),Ry.scale.setScalar(0),Ry.updateMatrix(),Iy.setMatrixAt(n,Ry.matrix);continue}if(r.life-=e,r.life<=0){r.active=!1,Ry.position.set(0,-100,0),Ry.scale.setScalar(0),Ry.updateMatrix(),Iy.setMatrixAt(n,Ry.matrix);continue}r.vy-=3*e,r.vx*=.96,r.vy*=.96,r.vz*=.96,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e;let i=Tf(r.x,r.z)+.05;r.y<i&&(r.y=i,r.vy=0,r.vx*=.8,r.vz*=.8);let a=r.life/r.max*.4;Ry.position.set(r.x,r.y,r.z),Ry.scale.setScalar(1),Ry.updateMatrix(),Iy.setMatrixAt(n,Ry.matrix),zy.copy(By).multiplyScalar(a),Iy.setColorAt(n,zy),t=!0}Iy.instanceMatrix.needsUpdate=!0,t&&(Iy.instanceColor.needsUpdate=!0)}var Wy=null,Gy=[],Ky=new Mn,qy=new z,Jy=new z(Y.bubblePop),Yy=new G(.02,3,3);function Xy(e){Wy=new xi(Yy,new B({color:16777215,transparent:!0,opacity:1,depthWrite:!1}),e),Wy.instanceMatrix.setUsage(We),Wy.instanceColor=new pi(new Float32Array(e*3),3),Wy.instanceColor.setUsage(We),Ky.scale.setScalar(0),Ky.updateMatrix();for(let t=0;t<e;t++)Wy.setMatrixAt(t,Ky.matrix),qy.copy(Jy),Wy.setColorAt(t,qy),Gy.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1});Wy.count=e,Wy.frustumCulled=!1,X.add(Wy)}function Zy(e){let t=!1;for(let n=0;n<Gy.length;n++){let r=Gy[n];if(!r.active){Ky.position.set(0,-100,0),Ky.scale.setScalar(0),Ky.updateMatrix(),Wy.setMatrixAt(n,Ky.matrix);continue}if(r.life-=e,r.life<=0){r.active=!1,Ky.position.set(0,-100,0),Ky.scale.setScalar(0),Ky.updateMatrix(),Wy.setMatrixAt(n,Ky.matrix);continue}r.vy-=2*e,r.vx*=.97,r.vy*=.97,r.vz*=.97,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e;let i=r.life/r.max*.8;Ky.position.set(r.x,r.y,r.z),Ky.scale.setScalar(1),Ky.updateMatrix(),Wy.setMatrixAt(n,Ky.matrix),qy.copy(Jy).multiplyScalar(i),Wy.setColorAt(n,qy),t=!0}Wy.instanceMatrix.needsUpdate=!0,t&&(Wy.instanceColor.needsUpdate=!0)}var Qy=null,$y=[],eb=new Mn,tb=new z,nb=[new z(Y.leafGlow),new z(Y.fernGlow),new z(Y.spiralFrond),new z(Y.echoBloom),new z(Y.jellyGlow)],rb=0,ib=0;function ab(e,t,n){rb=e,ib=t}function ob(e){Qy=new xi(new ho(.12,.08),new B({color:Y.white,transparent:!0,opacity:1,side:2,depthWrite:!1,blending:2}),e),Qy.instanceMatrix.setUsage(We),Qy.instanceColor=new pi(new Float32Array(e*3),3),Qy.instanceColor.setUsage(We),eb.scale.setScalar(0),eb.updateMatrix();for(let t=0;t<e;t++)Qy.setMatrixAt(t,eb.matrix),tb.setHex(Y.black),Qy.setColorAt(t,tb),$y.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,rvx:0,rvy:0,rvz:0,life:0,max:0,active:!1,colorIdx:0});Qy.count=e,Qy.frustumCulled=!1,X.add(Qy)}function sb(e,t,n){let r=null;for(let e=0;e<$y.length;e++)if(!$y[e].active){r=$y[e];break}if(!r)return;r.x=e+(Z()-.5)*2,r.y=t+Z()*2,r.z=n+(Z()-.5)*2;let i=Z()*6.28;r.vx=Math.cos(i)*.3,r.vy=-.2-Z()*.3,r.vz=Math.sin(i)*.3,r.rvx=(Z()-.5)*4,r.rvy=(Z()-.5)*3,r.rvz=(Z()-.5)*2,r.rx=Z()*6.28,r.ry=Z()*6.28,r.rz=Z()*6.28,r.life=4+Z()*4,r.max=r.life,r.active=!0,r.colorIdx=Math.floor(Z()*nb.length)}function cb(e,t){let n=!1;for(let r=0;r<$y.length;r++){let i=$y[r];if(!i.active){eb.position.set(0,-100,0),eb.scale.setScalar(0),eb.updateMatrix(),Qy.setMatrixAt(r,eb.matrix);continue}if(i.life-=e,i.life<=0||i.y<-.5){i.active=!1,eb.position.set(0,-100,0),eb.scale.setScalar(0),eb.updateMatrix(),Qy.setMatrixAt(r,eb.matrix);continue}i.vx+=rb*.4*e,i.vz+=ib*.4*e,i.vx+=Math.sin(t*3+r*1.7)*.5*e,i.vz+=Math.cos(t*2.5+r*2.1)*.3*e,i.vy-=.3*e,i.vx*=.995,i.vy=Math.max(i.vy,-.8),i.vz*=.995,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e,i.rx+=i.rvx*e,i.ry+=i.rvy*e,i.rz+=i.rvz*e;let a=i.life/i.max,o=a*(.6+Math.sin(t*2+r*.8)*.4),s=.8+a*.4;eb.position.set(i.x,i.y,i.z),eb.rotation.set(i.rx,i.ry,i.rz),eb.scale.setScalar(s),eb.updateMatrix(),Qy.setMatrixAt(r,eb.matrix),tb.copy(nb[i.colorIdx]).multiplyScalar(o),Qy.setColorAt(r,tb),n=!0}Qy.instanceMatrix.needsUpdate=!0,n&&(Qy.instanceColor.needsUpdate=!0)}var lb=40,ub=8,db=null,fb=[],pb=new Mn,mb=new z,hb=new z(Y.echoBloom),gb=0,_b=0,vb=!1;function yb(){let e=new Aa;return e.moveTo(0,-.18),e.quadraticCurveTo(.1,-.17,.11,-.06),e.lineTo(.1,-.02),e.lineTo(.13,.12),e.quadraticCurveTo(.125,.14,.11,.12),e.lineTo(.08,0),e.quadraticCurveTo(.05,-.02,.03,0),e.lineTo(.03,.05),e.lineTo(.02,.22),e.quadraticCurveTo(0,.245,-.02,.22),e.lineTo(-.03,.05),e.lineTo(-.03,0),e.quadraticCurveTo(-.05,-.02,-.08,0),e.lineTo(-.11,.12),e.quadraticCurveTo(-.125,.14,-.13,.12),e.lineTo(-.1,-.02),e.lineTo(-.11,-.06),e.quadraticCurveTo(-.1,-.17,0,-.18),new _o(e)}function bb(){db=new xi(yb(),new B({color:16777215,transparent:!0,opacity:1,blending:2,depthWrite:!1,side:2}),lb),db.instanceMatrix.setUsage(We),db.instanceColor=new pi(new Float32Array(lb*3),3),db.instanceColor.setUsage(We),pb.position.set(0,-100,0),pb.scale.setScalar(0),pb.updateMatrix();for(let e=0;e<lb;e++)db.setMatrixAt(e,pb.matrix),mb.setScalar(0),db.setColorAt(e,mb),fb.push({active:!1,life:0,maxLife:ub,x:0,z:0});db.count=lb,db.frustumCulled=!1,X.add(db),vb=!0}function xb(e,t,n,r){if(!vb)return;let i=e-gb,a=t-_b;if(i*i+a*a<(r?.25:.64))return;gb=e,_b=t;let o=null,s=-1;for(let e=0;e<fb.length;e++)if(!fb[e].active){o=fb[e],s=e;break}if(!o){let e=1/0;for(let t=0;t<fb.length;t++)fb[t].life<e&&(e=fb[t].life,o=fb[t],s=t)}let c=Tf(e,t);o.active=!0,o.life=ub,o.maxLife=ub,o.x=e,o.z=t;let l=s%2==0?1:-1,u=Math.sin(n+Math.PI/2)*.12*l,d=Math.cos(n+Math.PI/2)*.12*l,f=r?1.15:1;pb.position.set(e+u,c+.04,t+d),pb.rotation.set(-Math.PI/2,0,-n+(Z()-.5)*.15),pb.scale.set(f,f,f),pb.updateMatrix(),db.setMatrixAt(s,pb.matrix);let p=r?1.2:.85;mb.copy(hb).multiplyScalar(p),db.setColorAt(s,mb)}function Sb(e,t){if(!vb)return;let n=1+(t||0)*1.5,r=!1;for(let t=0;t<fb.length;t++){let i=fb[t];if(!i.active)continue;if(i.life-=e*n,i.life<=0){i.active=!1,pb.position.set(0,-100,0),pb.scale.setScalar(0),pb.updateMatrix(),db.setMatrixAt(t,pb.matrix),mb.setScalar(0),db.setColorAt(t,mb),r=!0;continue}let a=i.life/i.maxLife,o=a*a;mb.copy(hb).multiplyScalar(o*.85),db.setColorAt(t,mb),r=!0}db.instanceMatrix.needsUpdate=!0,r&&(db.instanceColor.needsUpdate=!0)}var Cb=150,wb=null,Tb=[],Eb=new Mn,Db=new z,Ob=new z(Y.orbGold),kb=new z(Y.orbGlow);function Ab(){let e=new B({color:16777215,transparent:!0,opacity:1,blending:2,depthWrite:!1});wb=new xi(new G(.05,4,3),e,Cb),wb.instanceMatrix.setUsage(We),wb.instanceColor=new pi(new Float32Array(Cb*3),3),wb.instanceColor.setUsage(We),Eb.scale.setScalar(0),Eb.updateMatrix();for(let e=0;e<Cb;e++)wb.setMatrixAt(e,Eb.matrix),Db.copy(Ob),wb.setColorAt(e,Db),Tb.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:0,active:!1,phase:Z()*6.28});wb.count=Cb,wb.frustumCulled=!1,wb.visible=!1,X.add(wb)}function jb(e,t,n){if(!wb)return;wb.visible=!0;let r=wb.instanceColor.array;for(let i=0;i<Cb;i++){let a=Tb[i];a.x=e,a.y=t,a.z=n;let o=Z()*6.28,s=Z()*Math.PI*.8,c=1.5+Z()*4;a.vx=Math.sin(s)*Math.cos(o)*c,a.vy=Math.cos(s)*c*.6+1+Z()*1.5,a.vz=Math.sin(s)*Math.sin(o)*c,a.life=3+Z()*4,a.max=a.life,a.active=!0;let l=Z()<.7?Ob:kb;r[i*3]=l.r*(.8+Z()*.4),r[i*3+1]=l.g*(.8+Z()*.4),r[i*3+2]=l.b*(.6+Z()*.4)}wb.instanceColor.needsUpdate=!0}function Mb(e,t){if(!wb||!wb.visible)return;let n=!1,r=!1;for(let i=0;i<Cb;i++){let a=Tb[i];if(!a.active){Eb.position.set(0,-100,0),Eb.scale.setScalar(0),Eb.updateMatrix(),wb.setMatrixAt(i,Eb.matrix);continue}if(n=!0,a.life-=e,a.life<=0||a.y<-1){a.active=!1,Eb.position.set(0,-100,0),Eb.scale.setScalar(0),Eb.updateMatrix(),wb.setMatrixAt(i,Eb.matrix);continue}a.vy-=1.2*e,a.vx*=.992,a.vz*=.992,a.vx+=Math.sin(t*2.5+a.phase)*.15*e,a.vz+=Math.cos(t*2+a.phase*1.3)*.12*e,a.x+=a.vx*e,a.y+=a.vy*e,a.z+=a.vz*e;let o=a.life/a.max,s=Math.sin(t*5+a.phase)*.3+.7,c=(.4+s*.6)*Math.min(o*2,1);Eb.position.set(a.x,a.y,a.z),Eb.scale.setScalar(c),Eb.updateMatrix(),wb.setMatrixAt(i,Eb.matrix),Db.copy(Ob).multiplyScalar(o*s),wb.setColorAt(i,Db),r=!0}wb.instanceMatrix.needsUpdate=!0,r&&(wb.instanceColor.needsUpdate=!0),n||(wb.visible=!1)}var Nb=12,Pb=1,Fb=.3,Ib=2.5,Lb=[],Rb=new go(1,1.15,24,1),zb={deer:Y.deerGlow,moth:Y.mothGlow,jelly:Y.jellyGlow,puff:Y.puffGlow};function Bb(e){for(let t=0;t<Nb;t++){let t=new B({color:Y.white,transparent:!0,opacity:0,side:2,blending:2,depthWrite:!1}),n=new H(Rb,t);n.rotation.x=-Math.PI/2,n.visible=!1,e.add(n),Lb.push({mesh:n,mat:t,life:0,maxLife:Pb,active:!1})}}function Vb(e,t,n,r,i){for(let a=0;a<Nb;a++){let o=Lb[a];if(!o.active){o.active=!0,o.life=0,o.maxLife=Pb,o.mesh.position.set(e,t+.5,n),o.mesh.visible=!0,o.mat.color.setHex(zb[r]||Y.white),o.startOpacity=i*.6,o.mat.opacity=o.startOpacity,o.mesh.scale.set(Fb,Fb,Fb);return}}}function Hb(e){for(let t=0;t<Nb;t++){let n=Lb[t];if(!n.active)continue;n.life+=e;let r=n.life/n.maxLife;if(r>=1){n.active=!1,n.mesh.visible=!1;continue}let i=Fb+(Ib-Fb)*r;n.mesh.scale.set(i,i,i),n.mat.opacity=(n.startOpacity||.6)*(1-r),n.mesh.position.y+=e*.3}}var Ub=[],Wb=[],Gb=32,Kb=1;function qb(e){Kb=e}function Jb(){for(let e=0;e<Ub.length;e++){let t=Ub[e];X.remove(t.upTube),t.upTube.geometry.dispose(),t.mat.dispose(),X.remove(t.upGlow),t.upGlow.geometry.dispose(),t.glowMat.dispose(),X.remove(t.bendTube),t.bendTube.geometry.dispose(),t.bendMat.dispose(),X.remove(t.bendGlow),t.bendGlow.geometry.dispose(),t.bendGlowMat.dispose()}Ub.length=0;for(let e=0;e<Wb.length;e++){let t=Wb[e];X.remove(t.tube),t.tube.geometry.dispose(),t.mat.dispose(),X.remove(t.glow),t.glow.geometry.dispose(),t.glowMat.dispose()}Wb.length=0}function Yb(e,t,n,r){let i=[];for(let a=0;a<=12;a++){let o=a/12,s=e*(1-o*o),c=t*(1-o*o),l=n+(r-n)*o;i.push(new R(s,l,c))}return{curve:new aa(i),pts:i}}function Xb(e,t,n,r){let i=r||32,a=n+15,o=new ya(new R(e,n,t),new R(e,a,t)),s=new B({color:Y.laserPink,transparent:!0,opacity:0,blending:2,depthWrite:!1}),c=new H(new bo(o,1,.06,6,!1),s);X.add(c);let l=new B({color:Y.laserGlow,transparent:!0,opacity:0,blending:2,depthWrite:!1}),u=new H(new bo(o,1,.2,6,!1),l);X.add(u);let{curve:d}=Yb(e,t,a,i),f=new B({color:Y.laserPink,transparent:!0,opacity:0,blending:2,depthWrite:!1}),p=new H(new bo(d,16,.05,6,!1),f);X.add(p);let m=new B({color:Y.laserGlow,transparent:!0,opacity:0,blending:2,depthWrite:!1}),h=new H(new bo(d,16,.18,6,!1),m);X.add(h);let g={upTube:c,upGlow:u,bendTube:p,bendGlow:h,mat:s,glowMat:l,bendMat:f,bendGlowMat:m,fromX:e,fromZ:t,floatY:n,skyY:a,tipY:i,animPhase:0,animTimer:0};Ub.push(g);for(let e=0;e<Ub.length-1;e++){let t=Ub[e],n=(g.skyY+t.skyY)/2,r=[];for(let e=0;e<=8;e++){let i=e/8,a=g.fromX*(1-i)+t.fromX*i,o=g.fromZ*(1-i)+t.fromZ*i,s=n+Math.sin(i*Math.PI)*3;r.push(new R(a,s,o))}let i=new aa(r),a=new B({color:Y.laserGlow,transparent:!0,opacity:0,blending:2,depthWrite:!1}),o=new H(new bo(i,10,.03,4,!1),a);X.add(o);let s=new B({color:Y.laserPink,transparent:!0,opacity:0,blending:2,depthWrite:!1}),c=new H(new bo(i,10,.1,4,!1),s);X.add(c),Wb.push({tube:o,glow:c,mat:a,glowMat:s,opacity:0})}return g}function Zb(e){for(let t=0;t<Ub.length;t++){let n=Ub[t];n.tipY=e;let{curve:r}=Yb(n.fromX,n.fromZ,n.skyY,e);X.remove(n.bendTube),n.bendTube.geometry.dispose(),n.bendTube.geometry=new bo(r,16,.05,6,!1),X.add(n.bendTube),X.remove(n.bendGlow),n.bendGlow.geometry.dispose(),n.bendGlow.geometry=new bo(r,16,.18,6,!1),X.add(n.bendGlow)}}function Qb(e,t,n){let r=n||32;Math.abs(r-Gb)>.1&&Ub.length>0&&(Zb(r),Gb=r);for(let n=0;n<Ub.length;n++){let r=Ub[n];if(r.animTimer+=e,r.animPhase===0){let e=Math.min(r.animTimer/.5,1);r.mat.opacity=e*.8,r.glowMat.opacity=e*.3,r.animTimer>.5&&(r.animPhase=1,r.animTimer=0)}else if(r.animPhase===1){let e=Math.min(r.animTimer/.8,1);r.bendMat.opacity=e*.7,r.bendGlowMat.opacity=e*.2,r.mat.opacity=.8,r.glowMat.opacity=.3,r.animTimer>.8&&(r.animPhase=2)}else{let e=Math.sin(t*3+n*1.2)*.5+.5;r.mat.opacity=.5+e*.4,r.glowMat.opacity=.15+e*.15,r.bendMat.opacity=.4+e*.3,r.bendGlowMat.opacity=.1+e*.12}}for(let n=0;n<Wb.length;n++){let r=Wb[n];r.opacity=Math.min(r.opacity+e*.5,.3);let i=Math.sin(t*2+n*.8)*.5+.5;r.mat.opacity=r.opacity*(.6+i*.4),r.glowMat.opacity=r.opacity*(.2+i*.15)}if(Kb<1){for(let e=0;e<Ub.length;e++){let t=Ub[e];t.mat.opacity*=Kb,t.glowMat.opacity*=Kb,t.bendMat.opacity*=Kb,t.bendGlowMat.opacity*=Kb}for(let e=0;e<Wb.length;e++)Wb[e].mat.opacity*=Kb,Wb[e].glowMat.opacity*=Kb}}var $b=600,ex=.25,tx=1,nx=.85,rx=`NIGHT`,ix=`NIGHT`,ax=null,ox=null,sx=null,cx=null,lx=null,ux=[{label:`DUSK`,sky:new z(Y.duskSky),fog:new z(Y.duskFog),fogDensity:.009,moonInt:.6,moonCol:new z(Y.duskMoon),moonElev:15,ambSky:new z(Y.duskAmbSky),ambGnd:new z(Y.duskAmbGnd),ambInt:.6,stars:.4,bio:.7,plRange:16,plInt:.5},{label:`NIGHT`,sky:new z(Y.nightSky),fog:new z(Y.nightFog),fogDensity:.01,moonInt:1,moonCol:new z(Y.nightMoon),moonElev:55,ambSky:new z(Y.nightAmbSky),ambGnd:new z(Y.nightAmbGnd),ambInt:.7,stars:.85,bio:1,plRange:18,plInt:.55},{label:`DEEP_NIGHT`,sky:new z(Y.deepSky),fog:new z(Y.deepFog),fogDensity:.012,moonInt:.55,moonCol:new z(Y.deepMoon),moonElev:75,ambSky:new z(Y.deepAmbSky),ambGnd:new z(Y.deepAmbGnd),ambInt:.5,stars:1,bio:1.5,plRange:22,plInt:.7},{label:`DAWN`,sky:new z(Y.dawnSky),fog:new z(Y.dawnFog),fogDensity:.011,moonInt:.5,moonCol:new z(Y.dawnMoon),moonElev:20,ambSky:new z(Y.dawnAmbSky),ambGnd:new z(Y.dawnAmbGnd),ambInt:.55,stars:.35,bio:.65,plRange:17,plInt:.5}],dx=new z,fx=new z,px=0,mx=1;function hx(e){ax=e.scene,ox=e.moon,sx=e.moon2,cx=e.hemiLight,lx=e.playerLight}function gx(e){if(!ax)return;ex=(ex+e/$b)%1;let t=ex*4,n=Math.floor(t)%4,r=(n+1)%4,i=t-Math.floor(t),a=.5-.5*Math.cos(i*Math.PI),o=ux[n],s=ux[r];if(rx=a<.5?o.label:s.label,rx!==ix&&(Op(wp.DAY_PHASE_CHANGE,{from:ix,to:rx}),ix=rx),dx.copy(o.sky).lerp(s.sky,a),ax.background.copy(dx),dx.copy(o.fog).lerp(s.fog,a),ax.fog.color.copy(dx),ax.fog.density=Df(o.fogDensity,s.fogDensity,a),ox){dx.copy(o.moonCol).lerp(s.moonCol,a),ox.color.copy(dx),ox.intensity=Df(o.moonInt,s.moonInt,a);let t=ex*Math.PI*2,n=Df(o.moonElev,s.moonElev,a)*Math.PI/180;ox.position.set(Math.cos(t)*Math.cos(n)*60,Math.sin(n)*60,Math.sin(t)*Math.cos(n)*60),px+=e,px>=mx&&(px=0,ox.shadow.needsUpdate=!0)}if(sx){let e=Df(o.moonInt,s.moonInt,a)/.85;sx.intensity=.3*e}cx&&(dx.copy(o.ambSky).lerp(s.ambSky,a),fx.copy(o.ambGnd).lerp(s.ambGnd,a),cx.color.copy(dx),cx.groundColor.copy(fx),cx.intensity=Df(o.ambInt,s.ambInt,a)),lx&&(lx.distance=Df(o.plRange,s.plRange,a),lx.intensity=Df(o.plInt,s.plInt,a)),nx=Df(o.stars,s.stars,a),cp(nx),tx=Df(o.bio,s.bio,a)}var _x=new z(Y.orbGold),vx=new z(Y.white),yx=[],bx=null,xx=null,Sx=null,Cx=null,wx=[],Tx=null,Ex=null,Dx=[],Ox=null,kx=null,Ax=null,jx=null,Mx=null,Nx=null,Px=null,Fx=null,Ix=null,Lx=null,Rx=null,zx=null,Bx=null,Vx=[],Hx=[],Ux=[],Wx=[],Gx=[],Kx=[],qx=[],Jx=null,Yx=[],Xx=null,Zx=!1,Qx=200,$x=null,eS=[],tS=!1;function nS(){if($x)return;let e=new fr,t=new Float32Array(Qx*3),n=new Float32Array(Qx*3),r=new Float32Array(Qx);e.setAttribute(`position`,new nr(t,3)),e.setAttribute(`color`,new nr(n,3)),e.setAttribute(`size`,new nr(r,1)),e.attributes.position.setUsage(We),e.attributes.color.setUsage(We),e.attributes.size.setUsage(We),$x=new qi(e,new Hi({size:.3,vertexColors:!0,transparent:!0,opacity:.9,blending:2,depthWrite:!1,sizeAttenuation:!0})),$x.visible=!1,X.add($x);let i=new z(Y.obeliskPink),a=new z(Y.glitterPurple);for(let e=0;e<Qx;e++){let t=Z()<.7?i:a;n[e*3]=t.r*(.8+Z()*.4),n[e*3+1]=t.g*(.8+Z()*.4),n[e*3+2]=t.b*(.8+Z()*.4),r[e]=.15+Z()*.25,eS.push({x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,active:!1,sparklePhase:Z()*6.28})}e.attributes.color.needsUpdate=!0,e.attributes.size.needsUpdate=!0}function rS(e,t,n){tS=!0,$x.visible=!0;for(let r=0;r<Qx;r++){let i=eS[r];i.x=e,i.y=t,i.z=n;let a=Z()*6.28,o=Z()*Math.PI,s=2+Z()*5;i.vx=Math.sin(o)*Math.cos(a)*s,i.vy=Math.cos(o)*s*.5+Z()*2,i.vz=Math.sin(o)*Math.sin(a)*s,i.life=5+Z()*6,i.active=!0}}function iS(e,t){if(!$x||!$x.visible)return;let n=$x.geometry.attributes.position.array,r=$x.geometry.attributes.size.array,i=!1;for(let a=0;a<Qx;a++){let o=eS[a];if(!o.active){n[a*3+1]=-100,r[a]=0;continue}if(i=!0,o.life-=e,o.life<=0||o.y<-1){o.active=!1;continue}o.vy-=1.5*e,o.vx*=.995,o.vz*=.995,o.vx+=Math.sin(t*3+a*.7)*.3*e,o.vz+=Math.cos(t*2.5+a*1.1)*.2*e,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e,n[a*3]=o.x,n[a*3+1]=o.y,n[a*3+2]=o.z;let s=Math.sin(t*6+o.sparklePhase)*.5+.5,c=Math.min(o.life/2,1);r[a]=(.15+s*.2)*c}$x.geometry.attributes.position.needsUpdate=!0,$x.geometry.attributes.size.needsUpdate=!0,i||($x.visible=!1)}function aS(e){yx=e.orbs,bx=e.obeliskGroup,xx=e.obeliskMat,Sx=e.obeliskGlowMat,Cx=e.pinnacleOrb,wx=e.pinnacleRings||[],Tx=e.moatMesh,Ex=e.moatMat,Dx=e.rainbowArcs,Ox=e.player,kx=e.makeLaser,Ax=e.orbHudEl,Hx=e.deers||[],Ux=e.puffs||[],Wx=e.jellies||[],Gx=e.moths||[],Kx=e.trees||[],qx=e.treeMeshes||[],Jx=e.groundMesh||null,jx=e.playOrbCollect||null,Mx=e.playOrbWarble||null,Nx=e.playLaserZap||null,Px=e.playLaserHum||null,Fx=e.stopLaserHums||null,Ix=e.playOrbReject||null,Lx=e.showOrbRejectHint||null,Rx=e.showOrbListening||null,zx=e.spawnOrbBurst||null,Bx=e.startResonanceDrone||null,Vx=e.runeFaces||[],nS(),Ep(wp.ORB_COLLECTED,oS),Ep(wp.ORB_REJECTED,sS),Ep(`quest:orbFlyStart`,e=>{Mx&&Mx()}),Ep(`quest:orbLaserStart`,cS),Ep(`quest:worldTransformed`,hS)}function oS(e){jx&&jx(),zx&&zx(e.x,yx[e.orbIndex].group.position.y,e.z),Bx&&Bx(e.orbsFound),pp(e.orbsFound-1);let t=Ax||document.getElementById(`orb-hud`);t&&(t.innerHTML=`✦ `+e.orbsFound+` / 5`);let n=e.orbsFound-1;if(n<Vx.length){let t=Vx[n],r=Y.obeliskPink;e.creatureType===`jelly`&&(r=Y.jellyGlow),e.creatureType===`puff`&&(r=Y.puffGlow),e.creatureType===`deer`&&(r=Y.deerGlow),e.creatureType===`moth`&&(r=Y.mothGlow),t.mat.color.set(r),t.revealed=!0,t.revealTimer=0;for(let e=0;e<t.meshes.length;e++)t.meshes[e].visible=!0}e.orbsFound>=5&&fS()}function sS(e){Ix&&Ix(),Lx&&Lx()}function cS(e){let t=yx[e.index],n=pS();t.laserLine=kx(t.x,t.z,0,n),Nx&&Nx(),Px&&Px(t.x,t.z)}function lS(e,t,n){let r=e_(),i=r_(),a=n?.env?.bioGlow===void 0?tx:n.env.bioGlow,o=pS(),s=null,c=1/0;for(let e=0;e<yx.length;e++){let t=yx[e];if(r.orbs[e].found)continue;let n=t.x-Ox.pos.x,i=t.z-Ox.pos.z,a=n*n+i*i;a<c&&(c=a,s=t)}if(s&&c<144){let e=Math.sin(t*2+s.phase)*.5+.5;null.position.set(s.x,1,s.z),null.intensity=(1+e*2)*a,null.distance=12}else null.intensity=0;for(let e=0;e<yx.length;e++){let n=yx[e],i=r.orbs[e];if(!(i.found&&!i.flyUp&&!i.flashing)){if(!i.found){let r=Math.sin(t*1.5+n.phase)*.5+.5;n.group.position.y=n.flyY+Math.sin(t*.8+n.phase)*.3,n.glowMat.opacity=(.3+r*.4)*a,n.hazeMat.opacity=(.08+r*.12)*a;let i=n.x-Ox.pos.x,o=n.z-Ox.pos.z,s=i*i+o*o;if(s<144){let t=1-s/144;n.glowMat.opacity=Math.min((.3+r*.4+t*.5)*a,1),n.hazeMat.opacity=Math.min((.08+r*.12+t*.25)*a,.6),n.coreMat.color.copy(vx).lerp(_x,1-t),n.group.scale.setScalar(1+t*.3),t>.15&&Rx&&Rx(),n_(e,Ox.pos)}else n.group.scale.setScalar(1);for(let e=3;e<n.group.children.length;e++){let r=n.group.children[e],i=(e-3)/6*6.28+t*1.5;r.position.x=Math.cos(i)*.4,r.position.z=Math.sin(i)*.4,r.position.y=Math.sin(i*2+t)*.1}}if(i.flashing){let e=Math.min(i.flashTimer/1.5,1),r=e<.3?e/.3:1-(e-.3)/.7;n.glowMat.opacity=.5+r*.5,n.hazeMat.opacity=.3+r*.5,n.group.scale.setScalar(1+r*.6),n.group.position.x=n.x+Math.sin(t*30)*r*.05,n.group.position.z=n.z+Math.cos(t*25)*r*.05}if(i.flyUp){n.group.position.y=i.flyY,n.group.position.x=n.x,n.group.position.z=n.z;let e=Math.min((i.flyY-1)/29,1);n.group.scale.setScalar(1-e*.6),n.glowMat.opacity=.8-e*.5,i.flyY>29&&(n.group.visible=!1)}}}if(bx&&(bx.position.y=r.obeliskY),bx){bx.rotation.y+=e*.03;let n=bx.children[bx.children.length-1];n&&n.isLight&&(n.intensity=Math.max(0,Math.min(1,(r.obeliskY+30)/30))*1.5*(.8+Math.sin(t*1.5)*.2))}for(let n=0;n<Vx.length;n++){let r=Vx[n];if(!r.revealed)continue;r.revealTimer+=e;let i=Math.min(r.revealTimer/2,1),a=Math.sin(t*1.5+n*1.57)*.1+.9;r.mat.opacity=i*.85*a}if(Cx&&Cx.mesh.visible){let e=Math.sin(t*2)*.5+.5,n=r.orbsFound/5;Cx.mat.opacity=(.6+e*.3)*(.3+n*.7),Cx.hazeMat.opacity=(.15+e*.12)*(.2+n*.8)}for(let n=0;n<wx.length;n++){let i=wx[n];if(!i.mesh.visible)continue;i.mesh.rotation.x+=i.rx*e,i.mesh.rotation.y+=i.ry*e,i.mesh.rotation.z+=i.rz*e;let a=r.orbsFound/5;i.mat.opacity=(.15+a*.35)*(.8+Math.sin(t*1.5+n)*.2)}if(Qb(e,t,o),r.questPhase===zg.COMPLETE&&i.finale>3?qb(Math.max(0,1-(i.finale-3)/4)):(r.questPhase===zg.FINALE||r.questPhase===zg.TRANSFORM)&&(qb(0),Fx&&(Fx(),Fx=null)),iS(e,t),r.questPhase===zg.COMPLETE){let n=i.finale,r=Math.min(n/3,1);if(xx&&(xx.emissiveIntensity=r*1.5),Sx&&(Sx.emissiveIntensity=r*2.5),Cx&&Cx.mesh.visible&&n>1&&n<3){let e=Math.min((n-1)/1.5,1);Cx.mat.opacity=.9+e*.1,Cx.hazeMat.opacity=.5+e*.5,Cx.mesh.scale.setScalar(1+e*.5),Cx.haze.scale.setScalar(1+e*1)}if(Cx&&Cx.mesh.visible&&n>=3&&!tS){let e=new R;Cx.mesh.getWorldPosition(e),rS(e.x,e.y,e.z),Cx.mesh.visible=!1,Cx.haze.visible=!1;for(let e=0;e<wx.length;e++)wx[e].mesh.visible=!1}if(n>3&&Ex){let e=Math.min((n-3)/4,1);Ex.opacity=e*.6,Tx&&(Tx.visible||(Tx.visible=!0),Tx.position.y=.05+Math.sin(t*3)*.02*e)}if(n>4)for(let t=0;t<Dx.length;t++){let r=t*.3,i=Math.min(Math.max((n-4-r)/2,0),1);i>0&&!Dx[t].mesh.visible&&(Dx[t].mesh.visible=!0),Dx[t].mat.opacity=i*.55,Dx[t].mesh.rotation.y+=e*.1*(t+1)*.3}n>3&&uS(e,Math.min((n-3)/6,1)*2)}if(r.questPhase===zg.FINALE){xx&&(xx.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Sx&&(Sx.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Tx&&(Tx.position.y=.05+Math.sin(t*3)*.02);for(let n=0;n<Dx.length;n++)Dx[n].mesh.rotation.y+=e*.1*(n+1)*.3,Dx[n].mat.opacity=.45+Math.sin(t+n)*.1;i.finalePhase>30&&mS()}if(r.questPhase===zg.TRANSFORM&&dS(e,t,i.transform),r.questPhase===`FREE_ROAM`){xx&&(xx.emissiveIntensity=1.5+Math.sin(t*.5)*.3),Sx&&(Sx.emissiveIntensity=2.5+Math.sin(t*.7)*.5),Tx&&(Tx.position.y=.05+Math.sin(t*3)*.02);for(let n=0;n<Dx.length;n++)Dx[n].mesh.rotation.y+=e*.1*(n+1)*.3,Dx[n].mat.opacity=.45+Math.sin(t+n)*.1;if(Cx&&Cx.mesh.visible){let e=Math.sin(t*1.5)*.5+.5;Cx.mat.opacity=.85+e*.15,Cx.hazeMat.opacity=.3+e*.2}let n=Ax||document.getElementById(`orb-hud`);n&&n.textContent!==`✦ Luminaries`&&(n.innerHTML=`✦ Luminaries`)}}function uS(e,t){for(let n=0;n<Hx.length;n++){let r=Hx[n],i=r.group,a=-i.position.x,o=-i.position.z,s=Math.sqrt(a*a+o*o);s>8?(r.wanderAng=Math.atan2(-i.position.x,-i.position.z),r.state=`walk`,r.speed=1.5*t,i.position.x+=a/s*r.speed*e,i.position.z+=o/s*r.speed*e,i.rotation.y=r.wanderAng):r.state=`pause`}for(let n=0;n<Ux.length;n++){let r=Ux[n],i=r.group,a=-i.position.x,o=-i.position.z,s=Math.sqrt(a*a+o*o);s>8&&(r.wanderAng=Math.atan2(-i.position.x,-i.position.z),r.state=`hop`,r.hopTimer%=1.2,i.position.x+=a/s*1.5*t*e,i.position.z+=o/s*1.5*t*e)}for(let n=0;n<Wx.length;n++){let r=Wx[n].group;r.position.x+=(0-r.position.x)*e*.15*t,r.position.z+=(0-r.position.z)*e*.15*t}for(let n=0;n<Gx.length;n++){let r=Gx[n];r.centerX+=(0-r.centerX)*e*.2*t,r.centerZ+=(0-r.centerZ)*e*.2*t,r.orbitR=Math.max(r.orbitR-e*.3*t,2)}}function dS(e,t,n){if(n<3&&Yx.length<Kx.length){let e=Math.min(Math.floor(n/3*Kx.length),Kx.length);for(;Yx.length<e;){let e=Kx[Yx.length],t=new ya(new R(0,pS(),0),new R(e.x,0,e.z)),n=new B({color:Y.laserPink,transparent:!0,opacity:0,blending:2,depthWrite:!1}),r=new H(new bo(t,8,.06,4,!1),n);X.add(r);let i=new B({color:Y.laserGlow,transparent:!0,opacity:0,blending:2,depthWrite:!1}),a=new H(new bo(t,8,.18,4,!1),i);X.add(a),Yx.push({tube:r,glow:a,mat:n,glowMat:i,timer:0})}}let r=n>=13?Math.min((n-13)/30,1):0,i=r*r*(3-2*r);for(let n=0;n<Yx.length;n++){let r=Yx[n];r.timer+=e;let a=Math.min(r.timer/.5,1)*(1-i),o=Math.sin(t*3+n*.5)*.5*(1-i)+.5;r.mat.opacity=a*(.6+o*.4),r.glowMat.opacity=a*(.2+o*.15)}if(r>=1&&Yx.length>0){for(let e of Yx)X.remove(e.tube),e.tube.geometry.dispose(),e.mat.dispose(),X.remove(e.glow),e.glow.geometry.dispose(),e.glowMat.dispose();Yx.length=0}n>=13&&!Zx&&(Jb(),Zx=!0);let a=0;if(n>=3&&n<6?a=(n-3)/3:n>=6&&n<10?a=1:n>=10&&n<13&&(a=1-(n-10)/3),Xx&&(Xx.style.opacity=a),n>=13&&Cx&&!Cx.mesh.visible&&(Cx.mesh.visible=!0,Cx.haze.visible=!0,Cx.mesh.scale.setScalar(1.2),Cx.haze.scale.setScalar(1.8)),n>=13&&Cx&&Cx.mesh.visible){let e=Math.sin(t*1.5)*.5+.5;Cx.mat.opacity=.85+e*.15,Cx.hazeMat.opacity=.3+e*.2}}function fS(){bx&&bx.traverse(e=>{if(e.isMesh&&!e.visible){let t=!1;for(let n of Vx)if(n.meshes.includes(e)){t=!0;break}t||(e.visible=!0)}})}function pS(){return e_().obeliskY+30+3}function mS(){Xx||(Xx=document.createElement(`div`),Xx.style.cssText=`position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;opacity:0;pointer-events:none;z-index:9999;`,document.body.appendChild(Xx))}function hS(){let e=[{color:Y.questPink1,glow:Y.questPink1Glow,core:Y.questPink1Core},{color:Y.questPink2,glow:Y.questPink2Glow,core:Y.questPink2Core},{color:Y.questPink3,glow:Y.questPink3Glow,core:Y.questPink3Core},{color:Y.questPink4,glow:Y.questPink4Glow,core:Y.questPink4Core},{color:Y.questPink5,glow:Y.questPink5Glow,core:Y.questPink5Core}];for(let t=0;t<qx.length;t++){let n=qx[t],r=e[t%e.length];n.trunkMat&&(n.trunkMat.color.set(Y.transformTrunk),n.trunkMat.emissive.set(Y.transformTrunkGlow),n.trunkMat.emissiveIntensity=1.2),n.canopyMat&&(n.canopyMat.color.set(r.core),n.canopyMat.emissive.set(r.glow),n.canopyMat.emissiveIntensity=3.5),n.glowMat&&(n.glowMat.color.set(r.glow),n.glowMat.emissive.set(r.glow),n.glowMat.emissiveIntensity=1.2),n.detailMat&&(n.detailMat.color.set(r.color),n.detailMat.emissive.set(r.glow),n.detailMat.emissiveIntensity=1.5)}if(Nf(1),Jx?.material){Jx.material.emissive.set(Y.transformGroundGlow),Jx.material.emissiveIntensity=1;let e=Jx.geometry.attributes.color;if(e){let t=e.array;for(let e=0;e<t.length;e+=3){let n=t[e],r=t[e+1],i=t[e+2];t[e]=n*.45+i*.25+r*.1,t[e+1]=r*.1,t[e+2]=i*.6+r*.45+n*.1}e.needsUpdate=!0}}}var gS=`child`,_S=()=>gS,vS=e=>{e!==gS&&(gS=e,Op(wp.PERSPECTIVE_CHANGED,{perspective:gS}))},yS=()=>{vS(gS===`child`?`adult`:`child`)},bS={deer:!1,puffling:!1,jelly:!1,moth:!1,fairyRing:!1,crystalChain:!1,pond:!1},xS=e=>!!bS[e],SS=e=>{bS[e]=!0},CS=null,wS=0,TS=``;function ES(){CS=document.createElement(`div`),CS.id=`discovery-text`,CS.style.cssText=`position:fixed;top:28%;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:22px;color:#ccffee;text-shadow:0 0 12px #44ffaa,0 0 30px #228866;pointer-events:none;opacity:0;transition:opacity 0.6s;z-index:100;letter-spacing:3px;text-transform:uppercase;`,document.body.appendChild(CS),Ep(wp.ORB_COLLECTED,e=>{kS(e.orbsFound-1)})}function DS(e,t){wS>0&&(wS-=e,wS<=0&&CS&&(CS.style.opacity=`0`));let n=Q.pos.x,r=Q.pos.z;for(let i=0;i<zh.length;i++){let a=zh[i];if(a.revealed){a.mat.opacity=.4+Math.sin(t*2+i)*.1;continue}let o=a.x-n,s=a.z-r;o*o+s*s<9&&Lp>2?(a.timer+=e,a.timer>1.5&&(a.revealed=!0,OS(`glyph`),Op(wp.DISCOVERY,{type:`glyph`,id:i})),a.mat.opacity=Math.min(a.timer/1.5,.4)):(a.timer=Math.max(a.timer-e*2,0),a.mat.opacity=Math.min(a.timer/1.5,.4))}}function OS(e){if(xS(e))return;SS(e);let t=_S(),n=Vg[e];n&&(TS=n[t]||n.child,wS=5,CS&&(CS.textContent=TS,CS.style.opacity=`1`),Op(wp.DISCOVERY,{key:e,text:TS,perspective:t}))}function kS(e){let t=(Hg[_S()]||Hg.child)[e];t&&(TS=t,wS=6,CS&&(CS.textContent=TS,CS.style.opacity=`1`))}function AS(e,t){TS=e,wS=t||5,CS&&(CS.textContent=TS,CS.style.opacity=`1`)}var jS=64;function MS(e,t,n,r,i,a,o){let s=e.x,c=e.z;NS(s,c,t,`deer`),NS(s,c,n,`puffling`),NS(s,c,r,`jelly`),NS(s,c,i,`moth`),NS(s,c,a,`fairyRing`),NS(s,c,o,`pond`)}function NS(e,t,n,r){if(!(xS(r)||!n||n.length===0))for(let i=0;i<n.length;i++){let a=n[i],o=a.position||a,s=(o.x||0)-e,c=(o.z||0)-t;if(s*s+c*c<jS){OS(r);return}}}var PS=[`Try walking toward the glowing things...`,`Hold RIGHT-CLICK to hum and wake the creatures`,`Find 5 orbs hidden in the forest`,`Some mushroom circles let you super-jump!`],FS=[`Navigate toward bioluminescent signatures...`,`Engage resonance tuning (RIGHT-CLICK) for fauna interface`,`Locate 5 frequency nodes distributed across the biome`,`Mycelial relay nodes amplify vertical displacement`],IS=-1,LS=0;function RS(e){if(LS>0){LS-=.016;return}if(e<15)return;let t=_S()===`child`?PS:FS;IS=(IS+1)%t.length,AS(t[IS],4),LS=30}function zS(){AS(_S()===`child`?`The orb doesn't like that sound...`:`Frequency mismatch — recalibrate resonance`,3)}function BS(){AS(_S()===`child`?`The orb is listening...`:`Node entering receptive state...`,2.5)}var VS=0,HS=0,US=0,WS=`CLEAR`,GS=!1,KS=0,qS={CLEAR:{fogMult:1,windBase:.3,rainRate:0,skyDarken:0,mistCount:0,duration:[90,180]},MISTY:{fogMult:1.8,windBase:.2,rainRate:0,skyDarken:.05,mistCount:6,duration:[60,150]},LIGHT_RAIN:{fogMult:1.3,windBase:.6,rainRate:.3,skyDarken:.1,mistCount:2,duration:[60,120]},HEAVY_RAIN:{fogMult:1.6,windBase:1,rainRate:.8,skyDarken:.2,mistCount:3,duration:[45,100]},FOG_BANK:{fogMult:2.5,windBase:.15,rainRate:0,skyDarken:.1,mistCount:8,duration:[60,120]},LUMINOUS_STORM:{fogMult:1.4,windBase:1.5,rainRate:.6,skyDarken:.15,mistCount:2,duration:[40,90]}},JS={CLEAR:{MISTY:.4,LIGHT_RAIN:.3,FOG_BANK:.2,LUMINOUS_STORM:.1},MISTY:{CLEAR:.3,LIGHT_RAIN:.3,FOG_BANK:.3,HEAVY_RAIN:.1},LIGHT_RAIN:{CLEAR:.2,MISTY:.2,HEAVY_RAIN:.4,LUMINOUS_STORM:.2},HEAVY_RAIN:{LIGHT_RAIN:.4,LUMINOUS_STORM:.3,MISTY:.2,CLEAR:.1},FOG_BANK:{MISTY:.4,CLEAR:.3,LIGHT_RAIN:.2,LUMINOUS_STORM:.1},LUMINOUS_STORM:{HEAVY_RAIN:.3,MISTY:.3,CLEAR:.2,LIGHT_RAIN:.2}},YS=`CLEAR`,XS=null,ZS=0,QS=0,$S=0,eC=!1,tC=0,nC=Z()*Math.PI*2,rC=0,iC=0,aC=[],oC=8,sC=!1,cC=0,lC=1,uC=0,dC=0,fC=0;function pC(){let e=JS[YS],t=Object.entries(e),n=0;for(let[,e]of t)n+=e;let r=Z()*n;for(let[e,n]of t)if(r-=n,r<=0)return e;return t[0][0]}function mC(){if(sC)return;let e=document.createElement(`canvas`);e.width=128,e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64,32,0,64,32,64);n.addColorStop(0,`rgba(255,255,255,0.5)`),n.addColorStop(.3,`rgba(255,255,255,0.25)`),n.addColorStop(.7,`rgba(255,255,255,0.06)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,64);let r=new Yi(e),i=new ho(40,14);for(let e=0;e<oC;e++){let e=new B({map:r,color:Y.mistColor,transparent:!0,opacity:0,side:2,depthWrite:!1}),t=new H(i,e);t.visible=!1,X.add(t),aC.push({mesh:t,mat:e,active:!1,drift:Z()*Math.PI*2,speed:.3+Z()*.4,baseY:.8+Z()*2,wobble:Z()*Math.PI*2})}sC=!0}function hC(){mC();let e=qS.CLEAR.duration;ZS=e[0]+Z()*(e[1]-e[0])}function gC(e,t,n){if(eC)if(QS-=e,QS<=0){let e=YS;YS=XS,XS=null,Op(wp.WEATHER_CHANGE,{from:e,to:YS}),eC=!1;let t=qS[YS].duration;ZS=t[0]+Z()*(t[1]-t[0]),tC=0}else tC=1-QS/$S;else ZS-=e,ZS<=0&&(XS=pC(),eC=!0,$S=30+Z()*60,QS=$S,tC=0);let r=qS[YS];if(eC&&XS){let e=qS[XS],t=.5-.5*Math.cos(tC*Math.PI);lC=Df(r.fogMult,e.fogMult,t),uC=Df(r.rainRate,e.rainRate,t),dC=Df(r.skyDarken,e.skyDarken,t),fC=Df(r.mistCount,e.mistCount,t),US=Df(r.windBase,e.windBase,t),WS=t<.5?YS:XS}else lC=r.fogMult,uC=r.rainRate,dC=r.skyDarken,fC=r.mistCount,US=r.windBase,WS=YS;GS=WS===`LUMINOUS_STORM`,nC+=(Math.sin(t*.05)*.2+Math.sin(t*.13)*.1)*e,rC-=e,rC<=0&&(rC=2+Z()*6,iC=Z()*.8),iC*=.3**e;let i=US+iC;if(VS=Math.cos(nC)*i,HS=Math.sin(nC)*i,X.fog.density*=lC,dC>.001){let e=X.background,t=1-dC;e.r*=t,e.g*=t,e.b*=t}if(n){let r=Math.round(fC);for(let i=0;i<aC.length;i++){let a=aC[i];if(i<r){a.active||(a.active=!0,a.mesh.visible=!0,a.drift=Z()*Math.PI*2);let r=10+Math.sin(t*.3+a.wobble)*8,i=a.drift+t*a.speed*.05;a.mesh.position.set(n.x+Math.cos(i)*r,a.baseY+Math.sin(t*.4+a.wobble)*.5,n.z+Math.sin(i)*r),a.mesh.rotation.y=i+Math.PI/2,a.drift+=VS*e*.02;let o=.03+lC*.012;a.mat.opacity+=(o-a.mat.opacity)*e*2}else a.active&&(a.mat.opacity-=e*.5,a.mat.opacity<=.005&&(a.active=!1,a.mesh.visible=!1,a.mat.opacity=0))}}return GS&&(cC-=e,cC<=0&&(cC=1+Z()*4,KS=1)),KS*=.02**e,KS<.01&&(KS=0),uC}function _C(){return uC}var vC=300,yC=new Float32Array(vC),bC=new Float32Array(vC),xC=new Float32Array(vC),SC=new Float32Array(vC),CC=new Float32Array(vC),wC=new Float32Array(vC),TC=new Float32Array(vC),EC=new Float32Array(vC*6),DC=null,OC=null;function kC(){let e=new fr;e.setAttribute(`position`,new nr(EC,3)),OC=new ki({color:Y.rainDrop,transparent:!0,opacity:.3,depthWrite:!1}),DC=new Vi(e,OC),DC.frustumCulled=!1,DC.visible=!1,X.add(DC);for(let e=0;e<vC;e++)TC[e]=0,AC(e)}function AC(e){let t=e*6;EC[t]=0,EC[t+1]=-100,EC[t+2]=0,EC[t+3]=0,EC[t+4]=-100,EC[t+5]=0}function jC(e,t,n,r,i){if(!DC)return;let a=n>.01;if(DC.visible=a,!a)return;OC.opacity=Math.min(.15+n*.35,.5);let o=Math.floor(n*12*e*60);for(let e=0;e<o;e++){let e=-1;for(let t=0;t<vC;t++)if(TC[t]<=0){e=t;break}if(e===-1)break;let n=Math.random()*Math.PI*2,a=Math.random()*30;yC[e]=t.x+Math.cos(n)*a,bC[e]=12+Math.random()*10,xC[e]=t.z+Math.sin(n)*a,SC[e]=r*2+(Math.random()-.5)*.3,CC[e]=-12-Math.random()*8,wC[e]=i*2+(Math.random()-.5)*.3,TC[e]=2+Math.random()*1.5}let s=.06;for(let t=0;t<vC;t++){if(TC[t]<=0)continue;if(TC[t]-=e,TC[t]<=0||bC[t]<Tf(yC[t],xC[t])+.1){TC[t]=0,AC(t);continue}yC[t]+=SC[t]*e,bC[t]+=CC[t]*e,xC[t]+=wC[t]*e;let n=t*6;EC[n]=yC[t],EC[n+1]=bC[t],EC[n+2]=xC[t],EC[n+3]=yC[t]+SC[t]*s,EC[n+4]=bC[t]+CC[t]*s,EC[n+5]=xC[t]+wC[t]*s}DC.geometry.attributes.position.needsUpdate=!0}var $=null,MC=null,NC=null,PC=!1,FC=!1,IC=null,LC=null,RC=null,zC=null,BC=0;function VC(e){BC=e}function HC(){return BC>=2?.5:1}function UC(e,t){let n=$.sampleRate*t,r=$.createBuffer(1,n,$.sampleRate),i=r.getChannelData(0);if(e===`white`)for(let e=0;e<n;e++)i[e]=Math.random()*2-1;else if(e===`brown`){let e=0;for(let t=0;t<n;t++){let n=Math.random()*2-1;i[t]=(e+.02*n)/1.02,e=i[t],i[t]*=1.8}}let a=Math.min(Math.floor($.sampleRate*.5),n>>2);for(let e=0;e<a;e++){let t=e/a,r=n-a+e;i[r]=i[r]*(1-t)+i[e]*t}return r}function WC(e,t,n,r){let i=$.createBufferSource();i.buffer=e,i.loop=!0;let a=$.createGain();a.gain.value=t;let o=$.createBiquadFilter();o.type=`lowpass`,o.frequency.value=n,o.Q.value=.5;let s=$.createBiquadFilter();return s.type=`highpass`,s.frequency.value=r||40,s.Q.value=.5,i.connect(s).connect(o).connect(a).connect(MC),i.start(),{node:i,gain:a,filter:o}}function GC(){let e=$.createDelay(1);e.delayTime.value=.55;let t=$.createDelay(1);t.delayTime.value=.79;let n=$.createGain();n.gain.value=.35;let r=$.createGain();r.gain.value=.28;let i=$.createBiquadFilter();i.type=`lowpass`,i.frequency.value=2200;let a=$.createBiquadFilter();a.type=`lowpass`,a.frequency.value=1800;let o=$.createBiquadFilter();o.type=`highpass`,o.frequency.value=120,o.Q.value=.5;let s=$.createBiquadFilter();s.type=`highpass`,s.frequency.value=120,s.Q.value=.5;let c=$.createGain();c.gain.value=.5,e.connect(i).connect(o).connect(n).connect(e),t.connect(a).connect(s).connect(r).connect(t),e.connect(c),t.connect(c),c.connect(MC);let l=$.createGain();l.gain.value=1,l.connect(e),l.connect(t),NC=l}function KC(e,t,n){if(e.connect(t),NC&&n>0){let t=$.createGain();t.gain.value=n,e.connect(t).connect(NC)}}var qC=null;function JC(e){qC=e}function YC(){let e=()=>{if(!PC){try{$=new(window.AudioContext||window.webkitAudioContext),MC=$.createGain(),MC.gain.value=.42,MC.connect($.destination),IC=$.createBiquadFilter(),IC.type=`lowpass`,IC.frequency.value=2e4,IC.connect(MC),LC=UC(`brown`,16),RC=UC(`brown`,11),zC=UC(`white`,9),GC();let e=WC(LC,.05,200,50);XC=e.node,ZC=e.gain,QC=e.filter;let t=WC(RC,.03,350,80);$C=t.node,ew=t.gain;let n=WC(zC,0,400,60);tw=n.node,nw=n.gain,rw=n.filter;let r=WC(zC,0,2e3,80);iw=r.node,aw=r.gain,ow=r.filter;let i=WC(RC,0,600,60);sw=i.node,cw=i.gain,lw=i.filter,PC=!0,qC&&qC()}catch(e){console.warn(`Audio init failed:`,e)}document.removeEventListener(`click`,e),document.removeEventListener(`keydown`,e),document.removeEventListener(`touchstart`,e)}};document.addEventListener(`click`,e),document.addEventListener(`keydown`,e),document.addEventListener(`touchstart`,e)}var XC=null,ZC=null,QC=null,$C=null,ew=null,tw=null,nw=null,rw=null,iw=null,aw=null,ow=null,sw=null,cw=null,lw=null,uw={jelly:0,puff:0,deer:0,moth:0,puffSing:0},dw=0;function fw(e){dw=e}var pw=[],mw=null;function hw(e){if(!PC||FC)return;gw();let t=$.currentTime;mw=$.createGain(),mw.gain.setValueAtTime(0,t);let n=.015+e*.006;mw.gain.linearRampToValueAtTime(n,t+3),KC(mw,MC,.7);let r=[1,2];e>=2&&r.push(1.5),e>=3&&r.push(3),e>=4&&r.push(2.5),e>=5&&r.push(4);for(let e=0;e<r.length;e++){let n=$.createOscillator();n.type=`sine`,n.frequency.value=60*r[e];let i=$.createGain();i.gain.value=e<2?1:.4,n.connect(i).connect(mw),n.start(t),pw.push({osc:n,gain:i})}let i=$.createOscillator();i.type=`sine`,i.frequency.value=.15;let a=$.createGain();a.gain.value=n*.3,i.connect(a).connect(mw.gain),i.start(t),pw.push({osc:i,gain:a})}function gw(){if(!$)return;let e=$.currentTime;for(let t=0;t<pw.length;t++){try{pw[t].osc.stop(e+.5)}catch{}try{pw[t].osc.disconnect()}catch{}try{pw[t].gain.disconnect()}catch{}}if(pw=[],mw){mw.gain.linearRampToValueAtTime(0,e+.4);try{mw.disconnect()}catch{}mw=null}}var _w=null,vw=null,yw=null,bw=null,xw=null,Sw=null,Cw=null,ww=null,Tw=!1;function Ew(){if(!PC||FC||Tw)return;Tw=!0;let e=$.currentTime;Sw=$.createGain(),Sw.gain.setValueAtTime(0,e),Sw.gain.linearRampToValueAtTime(.04,e+.3),KC(Sw,MC,.5),_w=$.createOscillator(),_w.type=`sine`,_w.frequency.value=300,_w.connect(Sw),_w.start(e),vw=$.createOscillator(),vw.type=`sine`,vw.frequency.value=300,vw.detune.value=7;let t=$.createGain();t.gain.value=.6,vw.connect(t).connect(Sw),vw.start(e),yw=$.createOscillator(),yw.type=`triangle`,yw.frequency.value=600;let n=$.createGain();n.gain.value=.15,yw.connect(n).connect(Sw),yw.start(e),bw=$.createOscillator(),bw.type=`sine`,bw.frequency.value=3.5,xw=$.createGain(),xw.gain.value=4,bw.connect(xw),xw.connect(_w.frequency),xw.connect(vw.frequency),bw.start(e),Cw=$.createOscillator(),Cw.type=`sine`,Cw.frequency.value=300,ww=$.createGain(),ww.gain.value=0,Cw.connect(ww).connect(Sw),Cw.start(e)}function Dw(e,t,n){if(!Tw||!_w)return;let r=$.currentTime,i=.08;if(_w.frequency.setTargetAtTime(e,r,i),vw.frequency.setTargetAtTime(e,r,i),yw.frequency.setTargetAtTime(e*2,r,i),t>.05&&n){let e=300;switch(n){case`deer`:e=120,Cw.type=`triangle`;break;case`moth`:e=240,Cw.type=`sine`;break;case`jelly`:e=390,Cw.type=`sine`;break;case`puff`:e=550,Cw.type=`sine`;break}Cw.frequency.setTargetAtTime(e,r,i),ww.gain.setTargetAtTime(t*.025,r,.1)}else ww.gain.setTargetAtTime(0,r,.15)}function Ow(){if(!Tw)return;Tw=!1;let e=$.currentTime;Sw&&Sw.gain.setTargetAtTime(0,e,.12);let t=e+.6;try{_w&&_w.stop(t)}catch{}try{vw&&vw.stop(t)}catch{}try{yw&&yw.stop(t)}catch{}try{bw&&bw.stop(t)}catch{}try{Cw&&Cw.stop(t)}catch{}if(_w=vw=yw=bw=xw=null,Sw)try{Sw.disconnect()}catch{}if(Sw=null,ww)try{ww.disconnect()}catch{}Cw=ww=null}function kw(e){if(!PC||FC)return;let t=$.currentTime,n=300;switch(e){case`deer`:n=120;break;case`moth`:n=240;break;case`jelly`:n=390;break;case`puff`:n=550;break}let r=[n,n*1.5];for(let e=0;e<r.length;e++){let n=$.createOscillator();n.type=`sine`,n.frequency.value=r[e];let i=$.createOscillator();i.type=`sine`,i.frequency.value=r[e]*1.003;let a=$.createGain(),o=t+e*.15;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.06,o+.03),a.gain.exponentialRampToValueAtTime(.001,o+.5),n.connect(a),i.connect(a),KC(a,MC,.6),n.start(o),i.start(o),n.stop(o+.55),i.stop(o+.55)}}function Aw(e,t){if(!PC||FC)return;let n=e.x-t.x,r=e.z-t.z,i=n*n+r*r;if(i>400)return;let a=Math.max(0,1-Math.sqrt(i)/20)*.06,o=$.currentTime,s=$.createOscillator();s.type=`sine`,s.frequency.setValueAtTime(600+Math.random()*300,o),s.frequency.exponentialRampToValueAtTime(200,o+.1);let c=$.createGain();c.gain.setValueAtTime(a,o),c.gain.exponentialRampToValueAtTime(.001,o+.12),s.connect(c).connect(MC),s.start(),s.stop(o+.15)}function jw(){if(!PC||FC)return;let e=$.currentTime,t=[440,554,659,880];for(let n=0;n<t.length;n++){let r=$.createOscillator();r.type=`sine`,r.frequency.setValueAtTime(t[n],e+n*.12);let i=$.createGain();i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.05,e+n*.12+.05),i.gain.exponentialRampToValueAtTime(.001,e+n*.12+.7),r.connect(i),KC(i,MC,.5),r.start(e+n*.12),r.stop(e+n*.12+.8)}}function Mw(){if(!PC||FC)return;let e=$.currentTime,t=$.createOscillator();t.type=`sine`,t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(1200,e+3);let n=$.createOscillator(),r=$.createGain();n.frequency.setValueAtTime(6,e),n.frequency.linearRampToValueAtTime(12,e+3),r.gain.value=20,n.connect(r).connect(t.frequency);let i=$.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(600,e),i.frequency.exponentialRampToValueAtTime(2400,e+3);let a=$.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(.04,e+.2),a.gain.setValueAtTime(.04,e+2),a.gain.exponentialRampToValueAtTime(.001,e+3.5),t.connect(a),i.connect(a),KC(a,MC,.6),n.start(e),t.start(e),i.start(e),n.stop(e+4),t.stop(e+4),i.stop(e+4)}function Nw(){if(!PC||FC)return;let e=$.currentTime,t=$.createOscillator();t.type=`sine`,t.frequency.setValueAtTime(330,e),t.frequency.exponentialRampToValueAtTime(180,e+.4);let n=$.createOscillator(),r=$.createGain();n.frequency.value=6,r.gain.value=10,n.connect(r).connect(t.frequency);let i=$.createGain();i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.03,e+.05),i.gain.exponentialRampToValueAtTime(.001,e+.5),t.connect(i),KC(i,MC,.3),n.start(e),t.start(e),n.stop(e+.6),t.stop(e+.6)}function Pw(){if(!PC||FC)return;let e=$.currentTime,t=$.createOscillator();t.type=`sine`,t.frequency.setValueAtTime(400,e),t.frequency.exponentialRampToValueAtTime(900,e+.15);let n=$.createGain();n.gain.setValueAtTime(.06,e),n.gain.exponentialRampToValueAtTime(.001,e+.5),t.connect(n),KC(n,MC,.4),t.start(),t.stop(e+.6)}var Fw=0;function Iw(e,t){if(!PC||FC||Fw>0)return;let n=$.currentTime;if(t){let e=$.createBufferSource();e.buffer=zC;let t=$.createGain(),r=$.createBiquadFilter();r.type=`bandpass`,r.frequency.value=2e3,r.Q.value=.5,t.gain.setValueAtTime(.05,n),t.gain.exponentialRampToValueAtTime(.001,n+.12),e.connect(r).connect(t).connect(MC),e.start(),e.stop(n+.15)}else{let e=$.createOscillator();e.type=`sine`,e.frequency.value=80+Math.random()*40;let t=$.createGain();t.gain.setValueAtTime(.03,n),t.gain.exponentialRampToValueAtTime(.001,n+.08),e.connect(t).connect(MC),e.start(),e.stop(n+.1)}Fw=e?.22:.35}function Lw(){if(!PC||FC)return;let e=$.currentTime,t=$.createOscillator();t.type=`sine`,t.frequency.setValueAtTime(150,e),t.frequency.exponentialRampToValueAtTime(300,e+.1);let n=$.createGain();n.gain.setValueAtTime(.03,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n).connect(MC),t.start(),t.stop(e+.2)}function Rw(e){if(!PC||FC)return;let t=$.currentTime,n=$.createBufferSource();n.buffer=LC;let r=$.createGain(),i=$.createBiquadFilter();i.type=`lowpass`,i.frequency.value=200;let a=$.createBiquadFilter();a.type=`highpass`,a.frequency.value=50,a.Q.value=.5,r.gain.setValueAtTime(e*.05,t),r.gain.exponentialRampToValueAtTime(.001,t+.2),n.connect(a).connect(i).connect(r).connect(MC),n.start(),n.stop(t+.25)}function zw(e){Fw>0&&(Fw-=e)}var Bw=[0,2,4,7,9],Vw=261.63;function Hw(e,t){let n=Bw.length;return Vw*2**(Math.floor(e/n)+(t||0)+Bw[(e%n+n)%n]/12)}function Uw(e,t,n){if(!PC||FC||uw[e]>0)return;let r=t.x-n.x,i=t.z-n.z,a=r*r+i*i;if(a>900)return;let o=Math.sqrt(a),s=Math.max(0,1-o/30)*.1,c=Math.max(-1,Math.min(1,r/Math.max(o,1))),l=$.createStereoPanner();l.pan.value=c;let u=$.currentTime;switch(e){case`jelly`:{let e=360+Math.random()*60,t=$.createOscillator(),n=$.createOscillator();t.type=`sine`,n.type=`sine`,t.frequency.setValueAtTime(e,u),n.frequency.setValueAtTime(e+3,u),t.frequency.linearRampToValueAtTime(e-40,u+1.2),n.frequency.linearRampToValueAtTime(e-37,u+1.2);let r=$.createOscillator(),i=$.createGain();r.frequency.value=4,i.gain.value=5,r.connect(i),i.connect(t.frequency),i.connect(n.frequency);let a=$.createGain();a.gain.setValueAtTime(0,u),a.gain.linearRampToValueAtTime(s,u+.15),a.gain.setValueAtTime(s,u+.6),a.gain.exponentialRampToValueAtTime(.001,u+1.4),t.connect(a),n.connect(a),a.connect(l),KC(l,MC,.4),r.start(u),t.start(u),n.start(u),r.stop(u+1.5),t.stop(u+1.5),n.stop(u+1.5),uw.jelly=(4+Math.random()*5)*HC();break}case`puff`:{let e=500+Math.random()*100,t=[e,e*1.2,e*1.5];for(let e=0;e<t.length;e++){let n=$.createOscillator();n.type=`sine`,n.frequency.value=t[e];let r=$.createGain(),i=u+e*.07;r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(s*.5,i+.02),r.gain.exponentialRampToValueAtTime(.001,i+.15),n.connect(r).connect(l),n.start(i),n.stop(i+.18)}KC(l,MC,.3),uw.puff=(8+Math.random()*10)*HC();break}case`deer`:{let e=100+Math.random()*30,t=$.createOscillator(),n=$.createOscillator();t.type=`triangle`,n.type=`triangle`,t.frequency.setValueAtTime(e,u),n.frequency.setValueAtTime(e+2,u),t.frequency.linearRampToValueAtTime(e-15,u+.5),n.frequency.linearRampToValueAtTime(e-13,u+.5);let r=$.createBiquadFilter();r.type=`lowpass`,r.frequency.value=250,r.Q.value=.5;let i=$.createGain();i.gain.setValueAtTime(0,u),i.gain.linearRampToValueAtTime(s*.7,u+.12),i.gain.setValueAtTime(s*.7,u+.3),i.gain.exponentialRampToValueAtTime(.001,u+.6),t.connect(r),n.connect(r),r.connect(i).connect(l),KC(l,MC,.3),t.start(u),n.start(u),t.stop(u+.7),n.stop(u+.7),uw.deer=(5+Math.random()*6)*HC();break}case`moth`:{let e=$.createOscillator();e.type=`sine`,e.frequency.setValueAtTime(200+Math.random()*80,u);let t=$.createOscillator(),n=$.createGain();t.frequency.value=8+Math.random()*4,n.gain.value=12,t.connect(n).connect(e.frequency);let r=$.createGain();r.gain.setValueAtTime(0,u),r.gain.linearRampToValueAtTime(s*.2,u+.05),r.gain.exponentialRampToValueAtTime(.001,u+.25),e.connect(r).connect(l),KC(l,MC,.2),t.start(u),e.start(u),t.stop(u+.3),e.stop(u+.3),uw.moth=(4+Math.random()*5)*HC();break}}}function Ww(e,t,n){if(!PC||FC)return;let r=e.x-t.x,i=e.z-t.z,a=r*r+i*i;if(a>900)return;let o=Math.max(-1,Math.min(1,r/Math.max(Math.sqrt(a),1))),s=$.createStereoPanner();s.pan.value=o;let c=$.currentTime,l=[0,1,2,3,4],u=.18,d=$.createOscillator(),f=$.createGain();d.type=`sine`,d.frequency.value=8,f.gain.setValueAtTime(20,c),f.gain.linearRampToValueAtTime(50,c+l.length*u),d.connect(f);for(let e=0;e<l.length;e++){let t=Hw(l[e],2),n=$.createOscillator();n.type=`sine`,n.frequency.value=t,f.connect(n.frequency);let r=$.createGain(),i=c+e*u,a=e===l.length-1,o=.07;r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(o,i+.02),a?(r.gain.setValueAtTime(o,i+.5),r.gain.exponentialRampToValueAtTime(.001,i+1.2),n.stop(i+1.3)):(r.gain.exponentialRampToValueAtTime(.001,i+u+.04),n.stop(i+u+.06)),n.connect(r).connect(s),n.start(i);let d=$.createOscillator();d.type=`sine`,d.frequency.value=t*2,f.connect(d.frequency);let p=$.createGain();p.gain.setValueAtTime(0,i),p.gain.linearRampToValueAtTime(o*.3,i+.03),p.gain.exponentialRampToValueAtTime(.001,i+(a?1:u)+.04),d.connect(p).connect(s),d.start(i),d.stop(i+(a?1.1:u+.06))}KC(s,MC,.6),d.start(c),d.stop(c+l.length*u+1.5);let p=300;switch(n){case`deer`:p=120;break;case`moth`:p=240;break;case`jelly`:p=390;break;case`puff`:p=550;break}let m=[p,p*1.5,p*2],h=$.createStereoPanner();h.pan.value=o*.3,KC(h,MC,.7);for(let e=0;e<m.length;e++){let t=$.createOscillator();t.type=`triangle`,t.frequency.value=m[e];let n=$.createGain();n.gain.setValueAtTime(0,c),n.gain.linearRampToValueAtTime(.02,c+3),n.gain.setValueAtTime(.02,c+3.2),n.gain.exponentialRampToValueAtTime(.001,c+7),t.connect(n).connect(h),t.start(c),t.stop(c+7.2)}}function Gw(e,t,n,r,i,a,o,s){if(!PC||FC)return;let c=$.currentTime,l=a===`DEEP_NIGHT`?.07:a===`DAWN`?.03:.05;ZC.gain.linearRampToValueAtTime(l,c+.1),ew.gain.linearRampToValueAtTime(l*.6,c+.1);let u=Math.min(t*.12,.18),d=200+t*600;nw.gain.linearRampToValueAtTime(u,c+.1),rw.frequency.linearRampToValueAtTime(d,c+.1);let f=n*.15,p=1200+n*2e3;aw.gain.linearRampToValueAtTime(f,c+.1),ow.frequency.linearRampToValueAtTime(p,c+.1),i>.5&&dw<=0&&(Kw(),fw(2+Math.random()*3)),dw>0&&fw(dw-e);let m=1/0;if(o&&s)for(let e=0;e<s.length;e++){let t=s[e].x-o.x,n=s[e].z-o.z,r=t*t+n*n;r<m&&(m=r)}let h=(m<225?1-Math.sqrt(m)/15:0)*.08;cw.gain.linearRampToValueAtTime(h,c+.1),uw.jelly-=e,uw.puff-=e,uw.deer-=e,uw.moth-=e,uw.puffSing-=e}function Kw(){if(!$)return;let e=$.currentTime,t=$.createOscillator(),n=$.createGain(),r=$.createBiquadFilter();t.type=`sawtooth`,t.frequency.value=50+Math.random()*25,r.type=`lowpass`,r.frequency.value=120,r.Q.value=1,n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.001,e+.8+Math.random()*.5),t.connect(r).connect(n).connect(MC),t.start(),t.stop(e+1.5);let i=$.createBufferSource();i.buffer=LC;let a=$.createGain(),o=$.createBiquadFilter();o.type=`lowpass`,o.frequency.value=120;let s=$.createBiquadFilter();s.type=`highpass`,s.frequency.value=45,s.Q.value=.5,a.gain.setValueAtTime(.15,e),a.gain.exponentialRampToValueAtTime(.001,e+1.2),i.connect(s).connect(o).connect(a).connect(MC),i.start(),i.stop(e+1.5)}var qw=[0,2,4,7,9],Jw=261.63;function Yw(e,t){let n=qw.length;return Jw*2**(Math.floor(e/n)+(t||0)+qw[(e%n+n)%n]/12)}var Xw=[],Zw=[],Qw=-1,$w=0,eT=[];function tT(e){let t=new Set;eT=[];for(let n=0;n<e.length;n++){if(t.has(n))continue;let r=[n];t.add(n);let i=[n];for(;i.length>0;){let n=e[i.shift()];for(let a=0;a<e.length;a++){if(t.has(a))continue;let o=e[a],s=n.x-o.x,c=n.z-o.z;s*s+c*c<144&&(t.add(a),r.push(a),i.push(a))}}if(r.length>=2){let t=0,n=0;for(let i of r)t+=e[i].x,n+=e[i].z;eT.push({indices:r,x:t/r.length,z:n/r.length,radius:10+r.length*2})}}}function nT(e,t){if(!PC||FC||!t)return;let n=-1,r=1/0;for(let e=0;e<eT.length;e++){let i=eT[e],a=i.x-t.x,o=i.z-t.z,s=a*a+o*o;s<i.radius*i.radius&&s<r&&(r=s,n=e)}if(n!==Qw&&(n===-1?aT():rT(n),Qw=n),Qw!==-1){let e=eT[Qw],t=1-Math.min(Math.sqrt(r)/e.radius,1);for(let e=0;e<Zw.length;e++){let n=t*(e===0?.04:.02);Zw[e].gain.setTargetAtTime(n,$.currentTime,.1)}Op(wp.CRYSTAL_CHAIN,{indices:e.indices,intensity:t,chainSize:$w})}}function rT(e){aT(),$w=eT[e].indices.length;let t=$.currentTime;iT(Yw(0,-2),.04,`sine`),$w>=3&&iT(Yw(2,-2),.02,`sine`),$w>=5&&iT(Yw(4,-1),.015,`triangle`),$w>=8&&iT(Yw(7,-1),.01,`sine`);let n=$.createOscillator();n.type=`sine`,n.frequency.value=Yw(0,1);let r=$.createGain();r.gain.value=0;let i=$.createOscillator();i.frequency.value=.2;let a=$.createGain();a.gain.value=.005,i.connect(a).connect(r.gain),n.connect(r),KC(r,MC,.8),n.start(t),i.start(t),Xw.push(n,i),Zw.push(r)}function iT(e,t,n){let r=$.createOscillator();r.type=n,r.frequency.value=e;let i=$.createGain();i.gain.value=0,r.connect(i),KC(i,MC,.6),r.start(),Xw.push(r),Zw.push(i)}function aT(){let e=$.currentTime;for(let t of Zw)t.gain.linearRampToValueAtTime(0,e+1);let t=Xw,n=Zw;setTimeout(()=>{for(let e of t)try{e.stop(),e.disconnect()}catch{}for(let e of n)try{e.disconnect()}catch{}},1100),Xw=[],Zw=[],$w=0}var oT=[];function sT(){if(!PC||FC)return;let e=$.currentTime,t=$.createBufferSource();t.buffer=zC;let n=$.createBiquadFilter();n.type=`bandpass`,n.frequency.setValueAtTime(3e3,e),n.frequency.exponentialRampToValueAtTime(500,e+.3),n.Q.value=2;let r=$.createGain();r.gain.setValueAtTime(.08,e),r.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(n).connect(r).connect(MC);let i=$.createOscillator();i.type=`sawtooth`,i.frequency.setValueAtTime(2e3,e),i.frequency.exponentialRampToValueAtTime(100,e+.15);let a=$.createBiquadFilter();a.type=`lowpass`,a.frequency.value=4e3;let o=$.createGain();o.gain.setValueAtTime(.06,e),o.gain.exponentialRampToValueAtTime(.001,e+.2),i.connect(a).connect(o),KC(o,MC,.3);let s=$.createOscillator();s.type=`sawtooth`,s.frequency.setValueAtTime(80,e+.15),s.frequency.linearRampToValueAtTime(55,e+2);let c=$.createBiquadFilter();c.type=`bandpass`,c.frequency.value=180,c.Q.value=3;let l=$.createGain();l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.03,e+.2),l.gain.exponentialRampToValueAtTime(.001,e+2),s.connect(c).connect(l).connect(MC),t.start(e),t.stop(e+.4),i.start(e),i.stop(e+.25),s.start(e+.1),s.stop(e+2.2)}function cT(e,t){if(!PC||FC)return;let n=$.currentTime,r=$.createOscillator();r.type=`sawtooth`,r.frequency.value=55+Math.random()*10;let i=$.createOscillator(),a=$.createGain();i.type=`square`,i.frequency.value=120+Math.random()*60,a.gain.value=15,i.connect(a).connect(r.frequency);let o=$.createBiquadFilter();o.type=`bandpass`,o.frequency.value=200,o.Q.value=3;let s=$.createGain();s.gain.value=0;let c=$.createStereoPanner();r.connect(o).connect(s).connect(c).connect(MC),i.start(n),r.start(n),oT.push({osc:r,mod:i,gain:s,panner:c,filter:o,x:e,z:t})}function lT(e){if(!PC||!$)return;let t=$.currentTime;for(let n=0;n<oT.length;n++){let r=oT[n],i=r.x-e.x,a=r.z-e.z,o=i*i+a*a,s=Math.sqrt(o),c=o<625?Math.max(0,1-s/25)*.04:0;r.gain.gain.linearRampToValueAtTime(c,t+.1);let l=Math.max(-1,Math.min(1,i/Math.max(s,1)));r.panner.pan.linearRampToValueAtTime(l,t+.1),r.filter.frequency.value=180+Math.sin(t*.5+n)*40}}function uT(){if(!$)return;let e=$.currentTime;for(let t=0;t<oT.length;t++){let n=oT[t];n.gain.gain.linearRampToValueAtTime(0,e+.5),n.osc.stop(e+.6),n.mod.stop(e+.6)}oT.length=0}var dT=null,fT=null,pT=null,mT=0,hT=0,gT=0,_T=0,vT=1,yT=!1;function bT(){if(yT||!$)return;yT=!0;let e=$.createGain();e.gain.value=0;let t=$.createOscillator();t.type=`sine`,t.frequency.value=160;let n=$.createOscillator();n.type=`sine`,n.frequency.value=190;let r=$.createBiquadFilter();r.type=`lowpass`,r.frequency.value=350,r.Q.value=.5,t.connect(r).connect(e),n.connect(r),e.connect(MC),t.start(),n.start(),dT=t,fT=n,pT=e}function xT(e){if(!$||e<.001)return;let t=$.currentTime,n=1800+Math.random()*800,r=$.createOscillator();r.type=`sine`,r.frequency.value=n,r.frequency.exponentialRampToValueAtTime(n*.88,t+.1);let i=$.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(e*.5,t+.01),i.gain.exponentialRampToValueAtTime(.001,t+.1),r.connect(i).connect(MC),r.start(t),r.stop(t+.12)}function ST(e,t,n,r,i,a){if(!PC||FC||(bT(),!yT))return;let o=$.currentTime,s=i===`DEEP_NIGHT`||i===`NIGHT`?1:i===`DUSK`?.5:.3;vT=i===`DUSK`||i===`NIGHT`?1:i===`DEEP_NIGHT`?.6:.3;let c=Math.max(.15,1-a*.7),l=1/0;if(t&&n)for(let e=0;e<n.length;e++){let r=n[e].x-t.x,i=n[e].z-t.z,a=r*r+i*i;a<l&&(l=a)}let u=l<400?1-Math.sqrt(l)/20:0;hT+=e*2;let d=.7+.3*Math.sin(hT*Math.PI*2),f=u*.025*s*c*d;if(pT.gain.linearRampToValueAtTime(f,o+.15),mT+=e,mT>3+Math.random()*4){mT=0;let e=150+Math.random()*40;dT.frequency.linearRampToValueAtTime(e,o+.5),fT.frequency.linearRampToValueAtTime(e+20+Math.random()*15,o+.5)}let p=1/0;if(t&&r)for(let e=0;e<r.length;e++){let n=r[e].cx-t.x,i=r[e].cz-t.z,a=n*n+i*i;a<p&&(p=a)}let m=p<144?1-Math.sqrt(p)/12:0;if(_T=m*.02*vT*c,_T>.001){if(gT-=e,gT<=0){xT(_T);let e=1.5+(1-m)*1.5;gT=e+Math.random()*e}}else gT=0}var CT=null,wT=null,TT=null,ET=[0,2,4,7,9],DT=261.63,OT=[0,-3,5,4],kT=16,AT=0,jT=0,MT=0,NT=2,PT=10,FT=5,IT=0,LT=[],RT=[],zT=!1;function BT(e,t,n){CT=e,TT=n,wT=CT.createGain(),wT.gain.value=.6,wT.connect(t),AT=0,jT=OT[0],MT=0,IT=0,NT=2,PT=8,FT=5,LT=[],RT=[],zT=!0}function VT(e,t){let n=ET.length;return DT*2**(Math.floor(e/n)+(t||0)+ET[(e%n+n)%n]/12)}function HT(e){if(!CT||!wT)return;let t=CT.currentTime;for(let e=0;e<RT.length;e++)RT[e].gain.linearRampToValueAtTime(.001,t+4);for(let e=0;e<LT.length;e++)LT[e].stop(t+4.5);LT=[],RT=[];let n=[VT(e,-2),VT(e+2,-2),VT(e,-1)],r=CT.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.06,t+4);let i=CT.createBiquadFilter();i.type=`lowpass`,i.frequency.value=200;let a=CT.createOscillator();a.type=`sine`,a.frequency.value=.05;let o=CT.createGain();o.gain.value=50,a.connect(o).connect(i.frequency),a.start(t),a.stop(t+35);for(let e=0;e<n.length;e++){let r=CT.createOscillator();r.type=e===0?`triangle`:`sine`,r.frequency.value=n[e]*(1+(Math.random()*.004-.002)),r.connect(i),r.start(t),r.stop(t+35),LT.push(r)}i.connect(r),TT(r,wT,.8),RT.push(r)}function UT(e,t,n){if(!CT||!wT)return;let r=n===void 0?.15:n,i=CT.currentTime+(t||0),a=VT(e,0),o=CT.createOscillator();o.type=`sine`;let s=CT.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(r,i+.02),s.gain.exponentialRampToValueAtTime(r*.3,i+.5),s.gain.exponentialRampToValueAtTime(.001,i+3);let c=CT.createOscillator();c.type=`triangle`,c.frequency.value=a*.5;let l=CT.createGain();l.gain.value=.15,c.connect(l).connect(s),o.connect(s),TT(s,wT,.6),o.start(i),c.start(i),o.stop(i+3.5),c.stop(i+3.5)}function WT(e,t,n){if(!CT||!wT)return;let r=CT.currentTime+(n||0),i=t||6,a=VT(e,1),o=CT.createOscillator();o.type=`triangle`;let s=CT.createGain();s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(.08,r+1.5),s.gain.setValueAtTime(.08,r+i-1.5),s.gain.linearRampToValueAtTime(.001,r+i);let c=CT.createBiquadFilter();c.type=`lowpass`,c.frequency.value=a*1.5;let l=CT.createOscillator();l.frequency.value=4;let u=CT.createGain();if(u.gain.value=a*.01,l.connect(u).connect(o.frequency),o.connect(c).connect(s),zC){let e=CT.createBufferSource();e.buffer=zC,e.loop=!0;let t=CT.createBiquadFilter();t.type=`bandpass`,t.frequency.value=a,t.Q.value=5;let n=CT.createGain();n.gain.value=.004,e.connect(t).connect(n).connect(s),e.start(r),e.stop(r+i+.1)}TT(s,wT,.9),l.start(r),o.start(r),l.stop(r+i+.1),o.stop(r+i+.1)}function GT(e,t){if(!CT||!wT)return;let n=CT.currentTime+(t||0),r=VT(e,2),i=CT.createOscillator(),a=CT.createOscillator();i.type=`sine`,a.type=`sine`,i.frequency.value=r,a.frequency.value=r*1.005;let o=CT.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(.04,n+.01),o.gain.exponentialRampToValueAtTime(.001,n+4),i.connect(o),a.connect(o),TT(o,wT,.8),i.start(n),a.start(n),i.stop(n+4.5),a.stop(n+4.5)}function KT(e){if(!CT||!wT)return;let t=CT.currentTime,n=VT(e,-3),r=CT.createOscillator();r.type=`sine`,r.frequency.value=n;let i=CT.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.15,t+.5),i.gain.exponentialRampToValueAtTime(.001,t+3),r.connect(i),TT(i,wT,.3),r.start(t),r.stop(t+3.5)}function qT(){let e=3+Math.floor(Math.random()*3),t=jT+(Math.random()<.5?0:2);for(let n=0;n<e;n++)UT(t,n*.3),t+=Math.random()<.7?1:2;return 4+Math.random()*6}function JT(){let e=6+Math.random()*4,t=[0,1,2,4];return WT(jT+t[Math.floor(Math.random()*t.length)],e,0),e+8+Math.random()*10}function YT(){let e=1+Math.floor(Math.random()*3);for(let t=0;t<e;t++)GT(jT+Math.floor(Math.random()*5),t*.5+Math.random()*.2);return 8+Math.random()*12}function XT(e,t,n,r){!zT||!CT||(MT-=e,MT<=0&&(jT=OT[AT],HT(jT),AT=(AT+1)%OT.length,MT=kT),IT-=e,IT<=0&&(KT(jT),IT=8),NT-=e,NT<=0&&(NT=qT()),PT-=e,PT<=0&&(PT=JT()),FT-=e,FT<=0&&(FT=YT()))}var ZT=!1;function QT(){ZT||!$||(ZT=!0,BT($,MC,KC))}function $T(e,t,n,r){!PC||FC||(ZT||QT(),ZT&&XT(e,t,n,r))}JC(()=>{Ep(wp.ORB_COLLECTED,()=>{jw()}),Ep(wp.ORB_REJECTED,()=>{Nw()}),Ep(wp.FOOTSTEP,e=>{Iw(e.sprinting,e.nearWater)}),Ep(wp.JUMP,()=>{Lw()}),Ep(wp.LAND,e=>{Rw(e.impactStrength)}),Ep(wp.FAIRY_BOUNCE,()=>{Pw()}),Ep(wp.BUBBLE_POP,e=>{Aw(e.position,e.playerPos)}),Ep(wp.CREATURE_SOUND,e=>{Uw(e.type,e.position,e.playerPos)}),Ep(wp.CREATURE_ATTUNED,e=>{Ww(e.pos,e.playerPos,e.type)}),Ep(wp.PITCH_LOCKED,e=>{kw(e.type)})});function eE(){let e=document.createElement(`div`);e.style.cssText=`position:absolute;top:-5%;left:50%;transform:translateX(-50%);pointer-events:none;width:clamp(340px,55vw,700px);height:110%;opacity:0;`;let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t.setAttribute(`viewBox`,`0 0 500 1000`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.style.cssText=`width:100%;height:100%;overflow:visible;`;let n=document.createElementNS(`http://www.w3.org/2000/svg`,`defs`),r=document.createElementNS(`http://www.w3.org/2000/svg`,`linearGradient`);r.setAttribute(`id`,`trunkGrad`),r.setAttribute(`x1`,`0`),r.setAttribute(`y1`,`0`),r.setAttribute(`x2`,`1`),r.setAttribute(`y2`,`0`),r.innerHTML=`<stop offset="0%" stop-color="#1a0e08"/><stop offset="15%" stop-color="#2d1a10"/><stop offset="30%" stop-color="#3a2218"/><stop offset="45%" stop-color="#2d1a10"/><stop offset="55%" stop-color="#3a2218"/><stop offset="70%" stop-color="#2d1a10"/><stop offset="85%" stop-color="#3a2218"/><stop offset="100%" stop-color="#1a0e08"/>`,n.appendChild(r);let i=document.createElementNS(`http://www.w3.org/2000/svg`,`radialGradient`);i.setAttribute(`id`,`canopyGrad`),i.innerHTML=`<stop offset="0%" stop-color="rgba(80,255,180,.18)"/><stop offset="30%" stop-color="rgba(50,220,140,.10)"/><stop offset="60%" stop-color="rgba(30,150,100,.05)"/><stop offset="100%" stop-color="transparent"/>`,n.appendChild(i);let a=document.createElementNS(`http://www.w3.org/2000/svg`,`radialGradient`);a.setAttribute(`id`,`rootGlowGrad`),a.innerHTML=`<stop offset="0%" stop-color="rgba(60,200,140,.12)"/><stop offset="60%" stop-color="rgba(40,160,100,.05)"/><stop offset="100%" stop-color="transparent"/>`,n.appendChild(a);let o=document.createElementNS(`http://www.w3.org/2000/svg`,`filter`);o.setAttribute(`id`,`treeGlow`),o.setAttribute(`x`,`-50%`),o.setAttribute(`y`,`-50%`),o.setAttribute(`width`,`200%`),o.setAttribute(`height`,`200%`),o.innerHTML=`<feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>`,n.appendChild(o);let s=document.createElementNS(`http://www.w3.org/2000/svg`,`filter`);s.setAttribute(`id`,`leafGlow`),s.setAttribute(`x`,`-80%`),s.setAttribute(`y`,`-80%`),s.setAttribute(`width`,`260%`),s.setAttribute(`height`,`260%`),s.innerHTML=`<feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b1"/><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="b2"/><feMerge><feMergeNode in="b2"/><feMergeNode in="b1"/><feMergeNode in="SourceGraphic"/></feMerge>`,n.appendChild(s),t.appendChild(n);let c=document.createElementNS(`http://www.w3.org/2000/svg`,`ellipse`);c.setAttribute(`cx`,`250`),c.setAttribute(`cy`,`180`),c.setAttribute(`rx`,`230`),c.setAttribute(`ry`,`170`),c.setAttribute(`fill`,`url(#canopyGrad)`),c.setAttribute(`class`,`canopy-glow`),t.appendChild(c);let l=[`M80,190 C70,160 55,140 40,120 C30,100 45,70 80,55 C100,45 130,50 150,70 C140,90 100,110 95,140 Z`,`M420,190 C430,160 445,140 460,120 C470,100 455,70 420,55 C400,45 370,50 350,70 C360,90 400,110 405,140 Z`,`M130,120 C110,90 100,60 120,35 C140,15 175,10 200,30 C185,55 155,75 140,100 Z`,`M370,120 C390,90 400,60 380,35 C360,15 325,10 300,30 C315,55 345,75 360,100 Z`,`M200,80 C190,50 200,20 230,8 C260,0 285,10 290,40 C270,55 240,60 220,70 Z`,`M300,80 C310,50 300,20 270,8 C240,0 215,10 210,40 C230,55 260,60 280,70 Z`],u=document.createElementNS(`http://www.w3.org/2000/svg`,`g`);u.setAttribute(`class`,`back-foliage`),u.setAttribute(`opacity`,`0.5`);for(let e=0;e<l.length;e++){let t=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);t.setAttribute(`d`,l[e]),t.setAttribute(`fill`,`rgba(12,45,25,.7)`),t.setAttribute(`filter`,`url(#leafGlow)`),u.appendChild(t)}t.appendChild(u);let d=document.createElementNS(`http://www.w3.org/2000/svg`,`g`);d.setAttribute(`class`,`branches`);let f=[{d:`M250,400 C240,350 180,300 120,240 Q80,200 50,160`,w:6},{d:`M250,400 C260,350 320,300 380,240 Q420,200 450,160`,w:6},{d:`M250,395 C245,355 200,320 155,270 Q115,235 85,190`,w:5},{d:`M250,395 C255,355 300,320 345,270 Q385,235 415,190`,w:5},{d:`M250,410 C235,370 175,340 130,300 Q95,275 70,240`,w:4},{d:`M250,410 C265,370 325,340 370,300 Q405,275 430,240`,w:4},{d:`M250,390 C248,340 225,280 195,200 Q175,150 160,90`,w:3},{d:`M250,390 C252,340 275,280 305,200 Q325,150 340,90`,w:3},{d:`M250,385 C247,320 235,250 220,160 Q210,100 215,40`,w:2.5},{d:`M250,385 C253,320 265,250 280,160 Q290,100 285,40`,w:2.5},{d:`M120,240 C105,220 80,195 55,175`,w:1.5},{d:`M380,240 C395,220 420,195 445,175`,w:1.5},{d:`M155,270 C135,250 110,230 90,210`,w:1.5},{d:`M345,270 C365,250 390,230 410,210`,w:1.5},{d:`M195,200 C175,175 155,145 140,115`,w:1.2},{d:`M305,200 C325,175 345,145 360,115`,w:1.2}];for(let e=0;e<f.length;e++){let t=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);t.setAttribute(`d`,f[e].d),t.setAttribute(`stroke`,`#2d1a10`),t.setAttribute(`stroke-width`,String(f[e].w)),t.setAttribute(`fill`,`none`),t.setAttribute(`stroke-linecap`,`round`),t.setAttribute(`opacity`,`0.75`),d.appendChild(t)}t.appendChild(d);let p=document.createElementNS(`http://www.w3.org/2000/svg`,`g`);p.setAttribute(`class`,`front-foliage`);let m=[{d:`M35,165 C25,140 30,110 55,85 C65,75 80,65 100,60 C110,70 95,95 90,120 C85,145 65,160 50,170 Z`,gx:65,gy:110},{d:`M60,230 C45,205 40,175 55,150 C70,130 95,120 110,135 C105,155 90,180 80,210 C75,225 68,235 60,240 Z`,gx:75,gy:180},{d:`M100,95 C85,70 90,40 115,22 C135,10 160,15 170,35 C160,55 140,70 120,85 Z`,gx:130,gy:55},{d:`M125,200 C105,175 100,145 120,120 C135,100 158,95 170,115 C165,140 150,170 140,190 Z`,gx:135,gy:150},{d:`M465,165 C475,140 470,110 445,85 C435,75 420,65 400,60 C390,70 405,95 410,120 C415,145 435,160 450,170 Z`,gx:435,gy:110},{d:`M440,230 C455,205 460,175 445,150 C430,130 405,120 390,135 C395,155 410,180 420,210 C425,225 432,235 440,240 Z`,gx:425,gy:180},{d:`M400,95 C415,70 410,40 385,22 C365,10 340,15 330,35 C340,55 360,70 380,85 Z`,gx:370,gy:55},{d:`M375,200 C395,175 400,145 380,120 C365,100 342,95 330,115 C335,140 350,170 360,190 Z`,gx:365,gy:150},{d:`M200,55 C185,30 195,5 220,0 C245,-5 265,8 268,30 C255,45 235,55 215,55 Z`,gx:230,gy:25},{d:`M300,55 C315,30 305,5 280,0 C255,-5 235,8 232,30 C245,45 265,55 285,55 Z`,gx:270,gy:25},{d:`M230,85 C220,55 230,25 255,15 C275,8 295,18 300,40 C290,60 270,75 250,80 Z`,gx:260,gy:50},{d:`M145,145 C130,120 138,95 160,80 C180,68 200,75 205,95 C195,115 175,135 160,145 Z`,gx:170,gy:108},{d:`M355,145 C370,120 362,95 340,80 C320,68 300,75 295,95 C305,115 325,135 340,145 Z`,gx:330,gy:108},{d:`M200,130 C190,100 205,70 235,60 C255,53 275,62 278,85 C270,105 245,125 220,130 Z`,gx:240,gy:90},{d:`M300,130 C310,100 295,70 265,60 C245,53 225,62 222,85 C230,105 255,125 280,130 Z`,gx:260,gy:90}];for(let e=0;e<m.length;e++){let t=m[e],n=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);n.setAttribute(`d`,t.d),n.setAttribute(`fill`,`rgba(15,50,30,.65)`),n.setAttribute(`filter`,`url(#leafGlow)`),n.setAttribute(`class`,`leaf-cluster`),p.appendChild(n);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`ellipse`);r.setAttribute(`cx`,String(t.gx)),r.setAttribute(`cy`,String(t.gy)),r.setAttribute(`rx`,`14`),r.setAttribute(`ry`,`10`),r.setAttribute(`fill`,`rgba(60,220,130,.12)`),r.setAttribute(`class`,`leaf-inner`),p.appendChild(r)}t.appendChild(p);let h=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);h.setAttribute(`d`,`M225,400 C222,440 218,490 215,540 C212,580 208,610 205,640 L210,640 C214,610 218,580 220,540 C223,490 226,440 228,410 L272,410 C274,440 277,490 280,540 C282,580 286,610 290,640 L295,640 C292,610 288,580 285,540 C282,490 278,440 275,400 Z`),h.setAttribute(`fill`,`url(#trunkGrad)`),h.setAttribute(`opacity`,`0.85`),t.appendChild(h);let g=[`M235,420 C234,470 232,530 230,590`,`M242,410 C241,460 239,520 237,600`,`M258,410 C259,460 261,520 263,600`,`M265,420 C266,470 268,530 270,590`,`M250,405 C250,460 250,520 250,600`];for(let e=0;e<g.length;e++){let n=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);n.setAttribute(`d`,g[e]),n.setAttribute(`stroke`,`#1a0e06`),n.setAttribute(`stroke-width`,`0.8`),n.setAttribute(`fill`,`none`),n.setAttribute(`opacity`,`0.4`),t.appendChild(n)}let _=[{cx:240,cy:470,rx:6,ry:4},{cx:260,cy:520,rx:5,ry:3},{cx:245,cy:570,rx:4,ry:3}];for(let e=0;e<_.length;e++){let n=_[e],r=document.createElementNS(`http://www.w3.org/2000/svg`,`ellipse`);r.setAttribute(`cx`,String(n.cx)),r.setAttribute(`cy`,String(n.cy)),r.setAttribute(`rx`,String(n.rx)),r.setAttribute(`ry`,String(n.ry)),r.setAttribute(`fill`,`#1a0e06`),r.setAttribute(`opacity`,`0.5`),t.appendChild(r)}let v=document.createElementNS(`http://www.w3.org/2000/svg`,`g`);v.setAttribute(`class`,`roots`);let y=[{d:`M210,640 C195,660 155,690 100,720 Q55,745 10,760`,w:7,o:.75},{d:`M290,640 C305,660 345,690 400,720 Q445,745 490,760`,w:7,o:.75},{d:`M208,645 C190,670 145,705 90,740 Q50,760 15,780`,w:5,o:.65},{d:`M292,645 C310,670 355,705 410,740 Q450,760 485,780`,w:5,o:.65},{d:`M215,648 C200,675 165,710 125,745 Q100,765 75,785`,w:4,o:.55},{d:`M285,648 C300,675 335,710 375,745 Q400,765 425,785`,w:4,o:.55},{d:`M220,650 C210,680 185,720 160,760 Q145,780 130,800`,w:2.5,o:.45},{d:`M280,650 C290,680 315,720 340,760 Q355,780 370,800`,w:2.5,o:.45},{d:`M205,642 C185,665 130,700 75,730 Q40,748 5,760`,w:2,o:.4},{d:`M295,642 C315,665 370,700 425,730 Q460,748 495,760`,w:2,o:.4},{d:`M240,640 C242,680 245,730 248,800 Q249,850 250,900`,w:3.5,o:.5},{d:`M260,640 C258,680 255,730 252,800 Q251,850 250,900`,w:3.5,o:.5},{d:`M100,720 C85,735 60,750 35,770`,w:1.2,o:.35},{d:`M400,720 C415,735 440,750 465,770`,w:1.2,o:.35},{d:`M125,745 C110,760 90,780 70,800`,w:1,o:.3},{d:`M375,745 C390,760 410,780 430,800`,w:1,o:.3}];for(let e=0;e<y.length;e++){let t=y[e],n=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);n.setAttribute(`d`,t.d),n.setAttribute(`stroke`,e<4?`#2d1a10`:`#1f110c`),n.setAttribute(`stroke-width`,String(t.w)),n.setAttribute(`fill`,`none`),n.setAttribute(`stroke-linecap`,`round`),n.setAttribute(`opacity`,String(t.o)),v.appendChild(n)}t.appendChild(v);let b=document.createElementNS(`http://www.w3.org/2000/svg`,`ellipse`);b.setAttribute(`cx`,`250`),b.setAttribute(`cy`,`700`),b.setAttribute(`rx`,`200`),b.setAttribute(`ry`,`100`),b.setAttribute(`fill`,`url(#rootGlowGrad)`),b.setAttribute(`class`,`root-glow-bg`),t.appendChild(b);let x=[`M210,640 C192,665 148,698 95,725`,`M290,640 C308,665 352,698 405,725`,`M240,640 C242,685 246,740 249,820`,`M260,640 C258,685 254,740 251,820`,`M215,648 C198,678 162,715 120,750`,`M285,648 C302,678 338,715 380,750`];for(let e=0;e<x.length;e++){let n=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);n.setAttribute(`d`,x[e]),n.setAttribute(`stroke`,`rgba(80,220,140,.25)`),n.setAttribute(`stroke-width`,`2`),n.setAttribute(`fill`,`none`),n.setAttribute(`filter`,`url(#treeGlow)`),n.setAttribute(`class`,`root-vein`),t.appendChild(n)}let S=[{cx:245,cy:450,rx:7,ry:14},{cx:255,cy:510,rx:6,ry:12},{cx:242,cy:570,rx:5,ry:10},{cx:258,cy:610,rx:6,ry:11},{cx:250,cy:480,rx:4,ry:8},{cx:248,cy:550,rx:5,ry:9}];for(let e=0;e<S.length;e++){let n=S[e],r=document.createElementNS(`http://www.w3.org/2000/svg`,`ellipse`);r.setAttribute(`cx`,String(n.cx)),r.setAttribute(`cy`,String(n.cy)),r.setAttribute(`rx`,String(n.rx)),r.setAttribute(`ry`,String(n.ry)),r.setAttribute(`fill`,`rgba(60,200,120,.1)`),r.setAttribute(`filter`,`url(#treeGlow)`),r.setAttribute(`class`,`trunk-glow`),t.appendChild(r)}return e.appendChild(t),e}function tE(e){let t=[],n=[{x:`7%`,y:`62%`,scale:1.1,delay:0,lean:-4},{x:`15%`,y:`70%`,scale:.55,delay:.5,lean:6},{x:`22%`,y:`64%`,scale:.8,delay:.2,lean:-2},{x:`78%`,y:`63%`,scale:.9,delay:.15,lean:3},{x:`85%`,y:`71%`,scale:.5,delay:.6,lean:-5},{x:`93%`,y:`65%`,scale:.75,delay:.3,lean:2}];for(let r=0;r<n.length;r++){let i=n[r],a=i.scale,o=document.createElement(`div`);o.style.cssText=`position:absolute;pointer-events:none;left:`+i.x+`;top:`+i.y+`;transform:translate(-50%,-100%) rotate(`+i.lean+`deg);opacity:0;filter:drop-shadow(0 0 `+Math.round(12*a)+`px rgba(136,51,238,.5)) drop-shadow(0 0 `+Math.round(25*a)+`px rgba(204,119,255,.25));`;let s=Math.round(48*a),c=Math.round(28*a),l=document.createElement(`div`);l.style.cssText=`position:relative;width:`+s+`px;height:`+c+`px;background:radial-gradient(ellipse at 45% 85%,#aa55ff 0%,#8833ee 25%,#6622bb 50%,#441188 75%,#220055 100%);border-radius:50% 50% 12% 12%;margin:0 auto;overflow:hidden;`,o.appendChild(l);let u=document.createElement(`div`);u.style.cssText=`position:absolute;top:8%;left:28%;width:44%;height:50%;background:radial-gradient(ellipse at 50% 30%,rgba(220,180,255,.45) 0%,rgba(170,100,255,.15) 40%,transparent 70%);border-radius:50%;`,l.appendChild(u);let d=Math.round(s*.8),f=Math.round(c*.3),p=document.createElement(`div`);p.style.cssText=`position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:`+d+`px;height:`+f+`px;background:repeating-conic-gradient(from 0deg at 50% 0%,rgba(102,34,170,.5) 0deg,transparent 4deg,transparent 8deg);border-radius:0 0 50% 50%;opacity:0.6;mask-image:radial-gradient(ellipse at 50% 0%,black 40%,transparent 100%);-webkit-mask-image:radial-gradient(ellipse at 50% 0%,black 40%,transparent 100%);`,l.appendChild(p);let m=2+Math.round(a*3);for(let e=0;e<m;e++){let t=document.createElement(`div`),n=Math.round(2.5*a+1.5),i=18+e*55/m+Math.sin(e*3.7+r)*12,o=10+Math.cos(e*2.3+r)*22;t.style.cssText=`position:absolute;width:`+n+`px;height:`+Math.round(n*.7)+`px;border-radius:50%;background:rgba(255,255,255,.85);box-shadow:0 0 `+Math.round(n)+`px rgba(255,255,255,.4);top:`+o+`%;left:`+i+`%;`,l.appendChild(t)}let h=Math.round(16*a),g=document.createElement(`div`);g.style.cssText=`width:`+h+`px;height:`+Math.round(3*a+1)+`px;margin:-1px auto 0;background:linear-gradient(to bottom,#7744cc,#5522aa);border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.3);`,o.appendChild(g);let _=Math.round(10*a),v=Math.round(22*a),y=document.createElement(`div`);y.style.cssText=`position:relative;width:`+_+`px;height:`+v+`px;margin:0 auto;background:linear-gradient(to right,#1a0a30 0%,#2a1140 25%,#3a1855 50%,#2a1140 75%,#1a0a30 100%);border-radius:2px 2px 4px 4px;box-shadow:inset -2px 0 3px rgba(0,0,0,.3),inset 1px 0 2px rgba(100,50,180,.2);`,o.appendChild(y);let b=Math.round(14*a),x=Math.round(8*a),S=document.createElement(`div`);S.style.cssText=`width:`+b+`px;height:`+x+`px;margin:-2px auto 0;background:radial-gradient(ellipse at 50% 30%,#3a1855,#2a1140,#1a0a30);border-radius:50%;`,o.appendChild(S);for(let e=0;e<3;e++){let t=document.createElement(`div`),n=Math.round(18*a+e*6*a),r=-30+e*30;t.style.cssText=`position:absolute;bottom:`+Math.round(-2*a)+`px;left:50%;transform:translateX(-50%) rotate(`+r+`deg);width:`+n+`px;height:1px;background:linear-gradient(to right,transparent,rgba(68,34,170,.35) 30%,rgba(68,34,170,.35) 70%,transparent);`,o.appendChild(t)}let C=document.createElement(`div`),w=Math.round(s*1.6);C.style.cssText=`width:`+w+`px;height:`+Math.round(w*.3)+`px;background:radial-gradient(ellipse,rgba(136,51,238,.2) 0%,rgba(204,119,255,.08) 40%,transparent 70%);margin:`+Math.round(-4*a)+`px auto 0;`,o.appendChild(C),e.appendChild(o),t.push({el:o,cap:l,delay:i.delay,phase:Math.random()*6.28,s:a,capW:s})}return t}function nE(e){let t=[];for(let n=0;n<2;n++){let r=document.createElement(`div`);r.style.cssText=`position:absolute;pointer-events:none;opacity:0;transition:opacity 1.5s ease;filter:drop-shadow(0 0 6px rgba(255,170,136,.6)) drop-shadow(0 0 14px rgba(255,170,136,.3));`;let i=`<div style="position:relative;width:22px;height:28px;">`;i+=`<div style="position:absolute;left:1px;top:10px;width:20px;height:18px;border-radius:50%;background:radial-gradient(ellipse at 40% 35%,#fff5e8 0%,#ffddcc 30%,#eebb99 65%,#cc9966 100%);box-shadow:0 0 8px rgba(255,170,136,.4);"></div>`,i+=`<div style="position:absolute;left:5px;top:13px;width:12px;height:12px;border-radius:50%;background:radial-gradient(ellipse,#fff5e8 0%,rgba(255,240,224,.5) 60%,transparent 100%);"></div>`,i+=`<div style="position:absolute;left:3px;top:2px;width:16px;height:14px;border-radius:50%;background:radial-gradient(ellipse at 42% 38%,#fff8f0 0%,#ffddcc 35%,#eebb99 70%,#cc9966 100%);box-shadow:0 0 6px rgba(255,170,136,.3);"></div>`,i+=`<div style="position:absolute;left:2px;top:-1px;width:5px;height:8px;background:linear-gradient(to bottom,#eebb99,#ddaa88);border-radius:50% 50% 30% 30%;transform:rotate(-12deg);"></div>`,i+=`<div style="position:absolute;left:3px;top:0px;width:3px;height:5px;background:linear-gradient(to bottom,#ff8899,#ee7788);border-radius:50% 50% 30% 30%;transform:rotate(-12deg);"></div>`,i+=`<div style="position:absolute;left:15px;top:-1px;width:5px;height:8px;background:linear-gradient(to bottom,#eebb99,#ddaa88);border-radius:50% 50% 30% 30%;transform:rotate(12deg);"></div>`,i+=`<div style="position:absolute;left:16px;top:0px;width:3px;height:5px;background:linear-gradient(to bottom,#ff8899,#ee7788);border-radius:50% 50% 30% 30%;transform:rotate(12deg);"></div>`,i+=`<div style="position:absolute;left:6px;top:6px;width:3.5px;height:4px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#444,#222,#111);"></div>`,i+=`<div style="position:absolute;left:12px;top:6px;width:3.5px;height:4px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#444,#222,#111);"></div>`,i+=`<div style="position:absolute;left:6.5px;top:6px;width:1.5px;height:1.5px;border-radius:50%;background:white;"></div>`,i+=`<div style="position:absolute;left:12.5px;top:6px;width:1.5px;height:1.5px;border-radius:50%;background:white;"></div>`,i+=`<div style="position:absolute;left:3px;top:9px;width:4px;height:3px;border-radius:50%;background:radial-gradient(ellipse,rgba(255,136,153,.6),transparent);"></div>`,i+=`<div style="position:absolute;left:15px;top:9px;width:4px;height:3px;border-radius:50%;background:radial-gradient(ellipse,rgba(255,136,153,.6),transparent);"></div>`,i+=`<div style="position:absolute;left:10px;top:9.5px;width:2px;height:1.5px;border-radius:50%;background:#553333;"></div>`,i+=`<div style="position:absolute;left:4px;top:25px;width:5px;height:3px;background:radial-gradient(ellipse at 50% 30%,#eebb99,#cc9966);border-radius:50% 50% 40% 40%;"></div>`,i+=`<div style="position:absolute;left:13px;top:25px;width:5px;height:3px;background:radial-gradient(ellipse at 50% 30%,#eebb99,#cc9966);border-radius:50% 50% 40% 40%;"></div>`,i+=`<div style="position:absolute;left:5px;top:26px;width:1.5px;height:1px;border-radius:50%;background:rgba(255,170,170,.6);"></div>`,i+=`<div style="position:absolute;left:7px;top:26px;width:1.5px;height:1px;border-radius:50%;background:rgba(255,170,170,.6);"></div>`,i+=`<div style="position:absolute;left:14px;top:26px;width:1.5px;height:1px;border-radius:50%;background:rgba(255,170,170,.6);"></div>`,i+=`<div style="position:absolute;left:16px;top:26px;width:1.5px;height:1px;border-radius:50%;background:rgba(255,170,170,.6);"></div>`,i+=`<div style="position:absolute;left:0px;top:16px;width:5px;height:5px;border-radius:50%;background:radial-gradient(circle at 45% 40%,white,#eeddcc);box-shadow:0 0 4px rgba(255,170,136,.5);"></div>`,i+=`</div>`,r.innerHTML=i,e.appendChild(r),t.push({el:r,hopOffset:n*.45,w:22,h:28})}return t}var rE=null,iE=null,aE=null,oE=null,sE=null,cE=null,lE=[],uE=[],dE=null,fE=null,pE=null,mE=24,hE=[],gE=[],_E=18,vE=8,yE=6,bE=[];function xE(e){rE=e.pixieEl,iE=e.pixieTrailEl,aE=e.ambientGlowEl,oE=e.titleEl,sE=e.titleGlowEl,cE=e.treeEl,lE=e.mushDecor,uE=e.pufflingEls,dE=e.matrixCanvas,fE=e.matrixCtx,pE=e.container,hE=e.dustEls,gE=e.dustParticles}function SE(e,t){kE(e),wE(e),DE(e),EE(e),TE(e),ME(e,t),jE(t)}function CE(){for(let e=0;e<hE.length;e++)hE[e].style.opacity=`0`}function wE(e){if(!uE.length||!oE)return;let t=oE.querySelectorAll(`[data-i-col]`);if(!(t.length<2))for(let n=0;n<2;n++){let r=uE[n],i=t[n];if(!i)continue;let a=i.getBoundingClientRect();if(!a.width)continue;let o=a.left+a.width*.5,s=a.top-r.h*.5-4,c=(e*1.3+r.hopOffset*Math.PI*2)%1,l=0;if(c<.18){let e=c/.18;l=-Math.sin(e*Math.PI*.5)*7}else if(c<.32){let e=(c-.18)/.14;l=-Math.cos(e*Math.PI*.5)*7}let u=1,d=1;if(c<.05)u=1+c/.05*.08,d=1-c/.05*.06;else if(c>=.3&&c<.4){let e=(c-.3)/.1;u=1+Math.sin(e*Math.PI)*.1,d=1-Math.sin(e*Math.PI)*.07}let f=c<.32?Math.sin(c*Math.PI*3)*3.5:0;r.el.style.left=o-r.w*.5+`px`,r.el.style.top=s+l+`px`,r.el.style.transform=`rotate(`+f+`deg) scale(`+u+`,`+d+`)`}}function TE(e){if(!cE)return;let t=cE.querySelector(`svg`);if(!t)return;let n=Math.sin(e*.4)*1.2+Math.sin(e*.7)*.6,r=t.querySelector(`.branches`);r&&r.setAttribute(`transform`,`rotate(`+n+`,250,400)`);let i=t.querySelector(`.front-foliage`);i&&i.setAttribute(`transform`,`rotate(`+n*1.3+`,250,350)`);let a=t.querySelector(`.back-foliage`);a&&a.setAttribute(`transform`,`rotate(`+n*.8+`,250,350)`);let o=t.querySelector(`.canopy-glow`);if(o){let t=Math.sin(e*.6)*.5+.5;o.setAttribute(`opacity`,String(.6+t*.4)),o.setAttribute(`ry`,String(170+t*12))}let s=t.querySelectorAll(`.leaf-inner`);for(let t=0;t<s.length;t++){let n=t*.7,r=Math.sin(e*.9+n)*.5+.5;s[t].setAttribute(`fill`,`rgba(60,220,130,`+(.08+r*.15)+`)`)}let c=t.querySelectorAll(`.root-vein`);for(let t=0;t<c.length;t++){let n=t*1.2,r=Math.sin(e*.7+n)*.5+.5;c[t].setAttribute(`stroke`,`rgba(80,220,140,`+(.15+r*.2)+`)`)}let l=t.querySelectorAll(`.trunk-glow`);for(let t=0;t<l.length;t++){let n=t*1.5+2,r=Math.sin(e*.8+n)*.5+.5;l[t].setAttribute(`fill`,`rgba(60,200,120,`+(.06+r*.12)+`)`)}let u=t.querySelector(`.root-glow-bg`);if(u){let t=Math.sin(e*.5+1)*.5+.5;u.setAttribute(`opacity`,String(.5+t*.5))}}function EE(e){if(!sE)return;let t=Math.sin(e*.8)*.5+.5,n=1+t*.3,r=.5+t*.5;if(sE.style.transform=`translate(-50%,-50%) scale(`+n+`)`,sE.style.opacity=String(r),oE){let e=12+t*12,n=30+t*25;oE.style.filter=`drop-shadow(0 0 `+e+`px rgba(100,255,200,`+(.35+t*.25)+`)) drop-shadow(0 0 `+n+`px rgba(50,200,150,`+(.1+t*.15)+`))`}}function DE(e){for(let t=0;t<lE.length;t++){let n=lE[t],r=Math.sin(e*1+n.phase)*.5+.5,i=.9+r*.3,a=Math.round(n.capW*.4+r*n.capW*.4),o=.3+r*.25;n.cap&&(n.cap.style.filter=`brightness(`+i+`)`,n.cap.style.boxShadow=`0 0 `+a+`px rgba(136,51,238,`+o+`),0 0 `+a*2+`px rgba(204,119,255,`+o*.35+`)`);let s=Math.round(12*n.s+r*10*n.s);n.el.style.filter=`drop-shadow(0 0 `+s+`px rgba(136,51,238,`+(.4+r*.2)+`)) drop-shadow(0 0 `+s*2+`px rgba(204,119,255,`+(.15+r*.1)+`))`}}function OE(e){let t=Math.PI*.37,n=Math.sin(.55*e+t),r=Math.sin(.71*e),i=Math.sin(e*.17)*.15,a=Math.cos(e*.13)*.12;return{nx:n*.42+i,ny:r*.38+a}}function kE(e){if(!rE||!pE)return;let t=pE.clientWidth,n=pE.clientHeight,r=t*.5,i=n*.48,a=OE(e),o=r+a.nx*t,s=i+a.ny*n,c=Math.max(20,Math.min(t-30,o)),l=Math.max(20,Math.min(n-30,s));rE.style.left=c-9+`px`,rE.style.top=l-9+`px`;let u=.75+Math.sin(e*1.3)*.15+Math.sin(e*2.7)*.06;rE.style.opacity=String(Math.max(.6,Math.min(1,u)));let d=15+Math.sin(e*1.1)*4;rE.style.boxShadow=`0 0 `+d+`px #aaffdd,0 0 `+d*2+`px #66eebb,0 0 `+d*4+`px rgba(80,240,170,.35),0 0 `+d*8+`px rgba(50,220,150,.15),0 0 `+d*14+`px rgba(50,200,130,.06)`;let f=OE(e-.6),p=Math.max(20,Math.min(t-25,r+f.nx*t)),m=Math.max(20,Math.min(n-25,i+f.ny*n));iE.style.left=p-5+`px`,iE.style.top=m-5+`px`,iE.style.opacity=String(.3+Math.sin(e*1.3-.5)*.1),aE&&(aE.style.left=c-200+`px`,aE.style.top=l-200+`px`,aE.style.opacity=String(.5+Math.sin(e*.9)*.3)),AE(c,l)}function AE(e,t){for(let n=0;n<2;n++){let n=-1;for(let e=0;e<mE;e++)if(!gE[e].active){n=e;break}if(n<0){let e=1/0;for(let t=0;t<mE;t++)gE[t].life<e&&(e=gE[t].life,n=t)}if(n<0)return;let r=gE[n];r.active=!0,r.x=e+(Math.random()-.5)*8,r.y=t+(Math.random()-.5)*4,r.vx=(Math.random()-.5)*15,r.vy=20+Math.random()*30,r.life=1.5+Math.random()*1,r.maxLife=r.life,r.size=2+Math.random()*3}}function jE(e){for(let t=0;t<mE;t++){let n=gE[t];if(!n.active)continue;if(n.life-=e,n.life<=0){n.active=!1,hE[t].style.opacity=`0`;continue}n.x+=n.vx*e,n.y+=n.vy*e,n.vy*=.98,n.vx*=.96;let r=n.life/n.maxLife,i=r*r*.7,a=hE[t];a.style.left=n.x-n.size*.5+`px`,a.style.top=n.y-n.size*.5+`px`,a.style.width=n.size*r+`px`,a.style.height=n.size*r+`px`,a.style.opacity=String(i),a.style.boxShadow=`0 0 `+Math.round(n.size*r*2)+`px rgba(100,255,200,`+i*.5+`)`}}function ME(e,t){if(!dE||!fE)return;let n=dE.clientWidth,r=dE.clientHeight;if(n===0||r===0)return;(dE.width!==n||dE.height!==r)&&(dE.width=n,dE.height=r);let i=e%8,a=0;if(i<2?a=i/2*.18:i<5?a=.18:i<7&&(a=(7-i)/2*.18),dE.style.opacity=String(a),a<.001)return;let o=fE;o.fillStyle=`rgba(0,0,0,0.3)`,o.fillRect(0,0,n,r);let s=n*.5,c=r*.5,l=s+Math.sin(e*.15)*n*.05,u=c+Math.cos(e*.11)*r*.04,d=e*.4%1;for(let t=_E-1;t>=0;t--){let i=(t+d)/_E,a=i*i,f=.08+(1-a)*1.5,p=n*f*.5,m=r*f*.45,h=l+(s-l)*(1-a),g=u+(c-u)*(1-a),_=Math.min(1,i*4)*Math.min(1,(1-i)*3)*.6;if(!(_<.01)){o.strokeStyle=`rgba(0,`+Math.floor(140+(1-a)*80)+`,60,`+_+`)`,o.lineWidth=.5+(1-a)*1,o.beginPath();for(let t=0;t<=vE;t++){let n=t/vE*Math.PI*2+e*.05,r=h+Math.cos(n)*p,i=g+Math.sin(n)*m;t===0?o.moveTo(r,i):o.lineTo(r,i)}if(o.stroke(),t<_E-1&&t%2==0){let i=(t+1+d)/_E,f=i*i,v=.08+(1-f)*1.5,y=n*v*.5,b=r*v*.45,x=l+(s-l)*(1-f),S=u+(c-u)*(1-f);o.strokeStyle=`rgba(0,`+Math.floor(100+(1-a)*60)+`,50,`+_*.4+`)`,o.lineWidth=.4;for(let t=0;t<vE;t+=2){let n=t/vE*Math.PI*2+e*.05,r=h+Math.cos(n)*p,i=g+Math.sin(n)*m,a=x+Math.cos(n)*y,s=S+Math.sin(n)*b;o.beginPath(),o.moveTo(r,i),o.lineTo(a,s),o.stroke()}}}}bE.length<yE&&Math.random()<.02&&bE.push({z:1,speed:.15+Math.random()*.2,hue:Math.random()<.5?140:180,width:1.5+Math.random()*1.5});for(let i=bE.length-1;i>=0;i--){let a=bE[i];if(a.z-=a.speed*t,a.z<-.1){bE.splice(i,1);continue}let d=a.z*a.z,f=.08+(1-d)*1.5,p=n*f*.5,m=r*f*.45,h=l+(s-l)*(1-d),g=u+(c-u)*(1-d),_=Math.min(1,a.z*3)*Math.min(1,(1-a.z)*3)*.8;o.strokeStyle=`hsla(`+a.hue+`,80%,60%,`+_+`)`,o.lineWidth=a.width+(1-d)*2,o.shadowColor=`hsla(`+a.hue+`,80%,50%,`+_*.5+`)`,o.shadowBlur=8+(1-d)*12,o.beginPath();for(let t=0;t<=vE;t++){let n=t/vE*Math.PI*2+e*.05,r=h+Math.cos(n)*p,i=g+Math.sin(n)*m;t===0?o.moveTo(r,i):o.lineTo(r,i)}o.stroke(),o.shadowBlur=0}let f=.04+Math.sin(e*.7)*.02,p=o.createRadialGradient(l,u,0,l,u,60);p.addColorStop(0,`rgba(0,200,80,`+f+`)`),p.addColorStop(.5,`rgba(0,150,60,`+f*.3+`)`),p.addColorStop(1,`transparent`),o.fillStyle=p,o.fillRect(l-60,u-60,120,120)}var NE=[{fantasy:`Once, this forest sang.`,terminal:`// BIOSENSOR ARRAY v4.2 — Historical luminance baseline detected`},{fantasy:`Every root hummed with light. Every canopy blazed.`,terminal:`// Bioluminescent network coverage: 100% — Symbiotic frequency: NOMINAL`},{fantasy:`Then the glow began to dim. The songs grew quiet.`,terminal:`// WARNING: Sector luminance decay — 73% loss over 2,400 cycles`},{fantasy:`Five anchors of light remain, buried beneath the dark.`,terminal:`// 5 restoration nodes offline — Awaiting frequency carrier activation`},{fantasy:`The creatures still remember the old harmony.`,terminal:`// Native fauna vocalizations contain encoded frequency patterns`},{fantasy:`Listen to them. Move with them. Carry their voice to the light.`,terminal:`// PROTOCOL: Attune to carrier organisms → Transport frequency → Restore nodes`}],PE=`TITLE`,FE=0,IE=0,LE=0,RE=0,zE=0,BE=null,VE=null,HE=null,UE=null,WE=null,GE=null,KE=null,qE=null,JE=null,YE=null,XE=null,ZE=null,QE=null,$E=null,eD=null,tD=[],nD=[],rD=24,iD=[],aD=[],oD=120,sD=8,cD=14,lD=2;function uD(e){BE=e,VE=document.createElement(`div`),VE.id=`intro-cinematic`,VE.style.cssText=`position:fixed;top:0;left:0;width:100%;height:100%;z-index:300;pointer-events:auto;overflow:hidden;`,WE=document.createElement(`div`),WE.style.cssText=`position:absolute;top:0;left:0;width:100%;height:100%;background:#111;opacity:1;transition:opacity 1.2s ease;`,VE.appendChild(WE),GE=document.createElement(`canvas`),GE.style.cssText=`position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;pointer-events:none;mix-blend-mode:screen;`,VE.appendChild(GE),KE=GE.getContext(`2d`),qE=document.createElement(`div`),qE.style.cssText=`position:absolute;width:400px;height:400px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(80,255,180,.06) 0%,rgba(50,220,150,.03) 30%,transparent 65%);opacity:0;transition:opacity 2s ease;`,VE.appendChild(qE),YE=eE(),VE.appendChild(YE),tD=tE(VE),JE=document.createElement(`div`),JE.style.cssText=`position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);width:clamp(400px,70vw,800px);height:clamp(80px,12vh,160px);border-radius:50%;pointer-events:none;opacity:0;background:radial-gradient(ellipse,rgba(100,255,200,.12) 0%,rgba(60,220,160,.06) 30%,rgba(40,180,130,.03) 55%,transparent 80%);`,VE.appendChild(JE),HE=document.createElement(`div`),HE.style.cssText=`position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);font-family:Georgia,"Times New Roman",serif;font-size:clamp(28px,4.8vw,52px);color:#aaffdd;letter-spacing:0.35em;font-weight:bold;text-shadow:0 0 15px rgba(100,255,200,.5),0 0 35px rgba(50,200,150,.25),0 2px 4px rgba(0,0,0,.6);text-align:center;opacity:0;white-space:nowrap;background:linear-gradient(180deg,#ddfff0 0%,#99eebb 35%,#66bb99 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;filter:drop-shadow(0 0 12px rgba(100,255,200,.4)) drop-shadow(0 0 30px rgba(50,200,150,.15));`;let t=[`L`,`U`,`M`,`I`,`N`,`A`,`R`,`I`,`E`,`S`],n=``;for(let e=0;e<t.length;e++)t[e]===`I`?n+=`<span data-i-col="`+e+`" style="display:inline-block;position:relative;width:0.45em;text-align:center;vertical-align:baseline;"><span style="display:inline-block;width:0.14em;height:0.68em;background:linear-gradient(180deg,#ddfff0 0%,#99eebb 35%,#66bb99 100%);border-radius:1px;vertical-align:baseline;margin-bottom:-0.05em;"></span></span>`:n+=t[e];HE.innerHTML=n,VE.appendChild(HE),nD=nE(VE),UE=document.createElement(`div`),UE.style.cssText=`position:absolute;top:51%;left:50%;transform:translate(-50%,-50%);font-family:'Courier New',monospace;font-size:12px;color:#66ccaa;letter-spacing:2px;text-align:center;opacity:0;transition:opacity 1s ease;`,UE.textContent=`click to begin`,VE.appendChild(UE),$E=document.createElement(`div`),$E.style.cssText=`position:absolute;width:18px;height:18px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,#eeffff 0%,#ccffee 15%,#66ddaa 35%,#33aa77 55%,transparent 75%);box-shadow:0 0 15px #aaffdd,0 0 30px #66eebb,0 0 60px rgba(80,240,170,.4),0 0 120px rgba(50,220,150,.2),0 0 200px rgba(50,200,130,.08);opacity:0.9;transition:opacity 1s ease;`,VE.appendChild($E),eD=document.createElement(`div`),eD.style.cssText=`position:absolute;width:10px;height:10px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,#aaeedd 0%,#44bb88 40%,transparent 70%);box-shadow:0 0 10px #55cc99,0 0 25px rgba(60,210,140,.3),0 0 50px rgba(50,200,130,.12);opacity:0.5;transition:opacity 1s ease;`,VE.appendChild(eD),iD=[],aD=[];for(let e=0;e<rD;e++){let e=document.createElement(`div`);e.style.cssText=`position:absolute;border-radius:50%;pointer-events:none;opacity:0;background:radial-gradient(circle,#aaffdd 0%,#55cc88 60%,transparent 100%);`,VE.appendChild(e),iD.push(e),aD.push({active:!1,x:0,y:0,vx:0,vy:0,life:0,maxLife:0,size:0})}XE=document.createElement(`div`),XE.style.cssText=`position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);font-family:Georgia,serif;font-size:clamp(20px,3vw,28px);color:#ccffee;letter-spacing:3px;text-shadow:0 0 14px rgba(100,255,200,.6),0 0 30px rgba(50,200,150,.3);text-align:center;max-width:650px;line-height:1.6;opacity:0;transition:opacity 1.2s ease;pointer-events:none;`,VE.appendChild(XE),ZE=document.createElement(`div`),ZE.style.cssText=`position:absolute;top:62%;left:50%;transform:translate(-50%,-50%);font-family:'Courier New',monospace;font-size:13px;color:#88aa66;letter-spacing:1px;text-shadow:0 0 6px rgba(100,180,60,.4),0 0 15px rgba(60,120,30,.2);text-align:center;max-width:650px;line-height:1.4;opacity:0;transition:opacity 1.2s ease;pointer-events:none;`,VE.appendChild(ZE),QE=document.createElement(`div`),QE.style.cssText=`position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Georgia,serif;font-size:28px;color:#ffddaa;letter-spacing:5px;text-shadow:0 0 12px rgba(255,200,100,.5),0 0 30px rgba(200,150,50,.3);text-align:center;opacity:0;transition:opacity 1s ease;pointer-events:none;`,QE.textContent=`Attune…`,VE.appendChild(QE),document.body.appendChild(VE);let r=document.getElementById(`overlay`);r&&(r.style.display=`none`),xE({pixieEl:$E,pixieTrailEl:eD,ambientGlowEl:qE,titleEl:HE,titleGlowEl:JE,treeEl:YE,mushDecor:tD,pufflingEls:nD,matrixCanvas:GE,matrixCtx:KE,container:VE,dustEls:iD,dustParticles:aD}),requestAnimationFrame(()=>{requestAnimationFrame(()=>{HE.style.transition=`opacity 2.5s ease`,HE.style.opacity=`1`,JE&&(JE.style.transition=`opacity 3s ease`,JE.style.opacity=`1`),UE.style.transition=`opacity 2s ease 1s`,UE.style.opacity=`0.6`;for(let e=0;e<nD.length;e++)nD[e].el.style.opacity=`1`;qE&&(qE.style.opacity=`1`),YE&&(YE.style.transition=`opacity 3.5s ease 0.3s`,YE.style.opacity=`0.8`);for(let e=0;e<tD.length;e++){let t=tD[e];t.el.style.transition=`opacity `+(1.5+t.delay)+`s ease `+t.delay+`s`,t.el.style.opacity=`0.85`}})})}var dD=!1;function fD(){if(!(dD||PE!==`TITLE`)){dD=!0,PE=`FADE_OUT`,FE=0,HE.style.opacity=`0`,JE&&(JE.style.opacity=`0`),UE.style.opacity=`0`,$E.style.opacity=`0`,eD.style.opacity=`0`;for(let e=0;e<nD.length;e++)nD[e].el.style.opacity=`0`;for(let e=0;e<tD.length;e++)tD[e].el.style.opacity=`0`;YE&&(YE.style.opacity=`0`),qE&&(qE.style.opacity=`0`),GE&&(GE.style.opacity=`0`),CE(),WE.style.background=`#000`,VE.style.pointerEvents=`none`,VE.removeEventListener(`click`,pD),VE.removeEventListener(`touchstart`,pD)}}function pD(e){e.preventDefault(),fD()}function mD(){VE&&(VE.addEventListener(`click`,pD),VE.addEventListener(`touchstart`,pD))}function hD(e,t){if(PE!==`DONE`){if(PE===`TITLE`){IE+=e,SE(IE,e);return}switch(FE+=e,PE){case`FADE_OUT`:FE>1.8&&(PE=`NARRATION`,FE=0,LE=0,RE=0);break;case`NARRATION`:{let e=1.5,t=FE%cD,n=Math.floor(FE/cD);if(n>=NE.length){PE=`SWEEP`,FE=0,zE=0,XE.style.opacity=`0`,ZE.style.opacity=`0`;break}n!==LE&&(LE=n,RE=0);let r=NE[LE],i=t-e,a=cD-e;if(i<0)XE.style.opacity=`0`,ZE.style.opacity=`0`;else{i<lD?XE.style.opacity=String(i/lD):i>a-lD?XE.style.opacity=String((a-i)/lD):XE.style.opacity=`1`,XE.textContent=r.fantasy;let e=.8;if(i>e){let t=i-e,n=0,a=0,o=r.terminal;for(let e=0;e<o.length;e++){let r=1/10,i=e>0?o[e-1]:``;if(i===`.`||i===`:`||i===`—`?r+=.18:i===`,`||i===`;`?r+=.1:i===` `&&(r+=.04),a+=r,a>t)break;n=e+1}RE=Math.min(n,o.length)}ZE.textContent=r.terminal.substring(0,RE);let t=.8;i<lD+t?ZE.style.opacity=String(Math.min(1,(i-t*.5)/lD)):i>a-lD?ZE.style.opacity=String((a-i)/lD):ZE.style.opacity=`0.8`}break}case`SWEEP`:{zE=Math.min(FE/sD,1);let e=1-(1-zE)**3,n=oD+(Cu-oD)*e;t.position.set(0,n,0),t.rotation.order=`YXZ`,t.rotation.x=-Math.PI*.5*(1-e),t.rotation.y=FE*.12,zE<.15?WE.style.opacity=String(1-zE/.15):WE.style.opacity=`0`,zE>=1&&(PE=`HANDOFF`,FE=0,QE.style.opacity=`1`);break}case`HANDOFF`:t.position.set(0,Cu,0),t.rotation.order=`YXZ`,t.rotation.x=0,t.rotation.y+=e*.06,FE>5&&(QE.style.opacity=`0`),FE>6.2&&(PE=`DONE`,VE.style.opacity=`0`,VE.style.transition=`opacity 0.5s`,setTimeout(()=>{try{VE.remove()}catch{}},600),BE&&BE());break}}}function gD(){return PE!==`DONE`&&PE!==`TITLE`}new z(Y.orbGold),new z(Y.white);var _D=`SEEK`,vD=null,yD=60,bD=null,xD=null,SD=null,CD=``,wD=``,TD=``,ED={DUSK:`Dusk`,NIGHT:`Night`,DEEP_NIGHT:`Deep Night`,DAWN:`Dawn`},DD={CLEAR:`Clear`,MISTY:`Misty`,LIGHT_RAIN:`Light Rain`,HEAVY_RAIN:`Heavy Rain`,FOG_BANK:`Fog`,LUMINOUS_STORM:`Storm`};function OD(){vD=document.getElementById(`hud`),vD&&(vD.innerHTML=``,bD=document.createElement(`b`),xD=document.createElement(`span`),SD=document.createElement(`span`),vD.appendChild(bD),vD.appendChild(document.createTextNode(` · `)),vD.appendChild(xD),vD.appendChild(document.createTextNode(` · `)),vD.appendChild(SD))}function kD(e,t){if(!vD)return;yD=yD*.95+1/Math.max(e,.001)*.05;let n=_D===`SEEK`?`Seek the orbs...`:_D===`RISING`?`The obelisk stirs...`:_D===`COMPLETE`?`Convergence!`:`Luminaries`,r=ED[rx]||`Night`,i=DD[WS]||`Clear`;n!==CD&&(bD.textContent=n,CD=n),r!==wD&&(xD.textContent=r,wD=r),i!==TD&&(SD.textContent=i,TD=i)}var AD=null;function jD(){AD=document.getElementById(`orb-hud`)}function MD(){return AD}function ND(){let e=document.getElementById(`overlay`);e&&(e.style.opacity=`0`,setTimeout(()=>{try{e.remove()}catch{}},2500)),AD&&(AD.style.display=`block`)}var PD=1.15;function FD(e){PD=e}var ID=0,LD=null,RD=0;function zD(e,t){ID=e,LD=t}function BD(e){ID>0&&(ID-=e)}function VD(e){RD=e}function HD(e){RD>0&&(RD-=e)}var UD=null,WD=0;function GD(e,t){UD=e,WD=t}var KD=0;function qD(e){KD=e}function JD(e){KD>0&&(KD-=e)}var YD={puffDist2:1/0,puffPos:{x:0,z:0},jellyDist2:1/0,jellyPos:{x:0,z:0},deerDist2:1/0,deerPos:{x:0,z:0},deerWanderAng:0,mothDist2:1/0,mothPos:{x:0,z:0},luminidDist2:1/0,luminidPos:{x:0,z:0}},XD=!1,ZD=0,QD=document.getElementById(`hum-thumb`),$D={deer:`rgba(136,221,255,`,moth:`rgba(204,255,170,`,jelly:`rgba(170,204,255,`,puff:`rgba(255,170,136,`},eO=!1,tO={puff:{child:`The pufflings hear you!`,adult:`Frequency matched — biosignature synchronized`},deer:{child:`The deer turn to listen...`,adult:`Cervine frequency locked — maintain stride`},jelly:{child:`The jellies glow brighter!`,adult:`Cnidarian resonance established — pulse in rhythm`},moth:{child:`The moths circle closer!`,adult:`Lepidoptera wavelength acquired — orbit and observe`}};function nO(e){let t=xd||wd;if(t&&!XD?(ig(),Ew()):!t&&XD&&(ag(),Ow()),XD=t,og(e,wd?Td:Cd>0?Sd/Cd:.5,{deerDist2:YD.deerDist2,jellyDist2:YD.jellyDist2,mothDist2:YD.mothDist2,puffDist2:YD.puffDist2}),sg()&&Dw(ug(),dg(),fg()),mg()){kw(lg()),zD(.3,null),QD&&(QD.style.background=`rgba(255,255,255,0.95)`,QD.style.boxShadow=`0 0 20px 10px rgba(255,255,255,0.8)`,QD.style.transform=`scale(1.5)`,eO=!0);let e=lg();if(e&&tO[e]&&AS(tO[e][_S()]||tO[e].child,4),e===`puff`)for(let e=0;e<5;e++)Vb(YD.puffPos.x,Tf(YD.puffPos.x,YD.puffPos.z),YD.puffPos.z,`puff`,1)}let n=dg(),r=fg();if(n>.1&&r&&sg()){if(ZD+=e,ZD>.33){ZD=0;let e=0,t=0;switch(r){case`deer`:e=YD.deerPos.x,t=YD.deerPos.z;break;case`moth`:e=YD.mothPos.x,t=YD.mothPos.z;break;case`jelly`:e=YD.jellyPos.x,t=YD.jellyPos.z;break;case`puff`:e=YD.puffPos.x,t=YD.puffPos.z;break}let i=Tf(e,t);Vb(e,i,t,r,n)}}else ZD=0;if(GD(r,n),QD)if(sg()&&n>.1&&r){let e=$D[r],t=.4+n*.6,i=pg(),a=i*8,o=.3+i*.7,s=1+i*.3;QD.style.background=e+t+`)`,QD.style.borderColor=e+`1)`,QD.style.boxShadow=`0 0 `+(a+4)+`px `+a+`px `+e+o+`)`,QD.style.transform=`scale(`+s+`)`,eO=!0}else eO&&(QD.style.background=`rgba(100,255,180,.35)`,QD.style.borderColor=`rgba(100,255,180,.5)`,QD.style.boxShadow=`none`,QD.style.transform=`scale(1)`,eO=!1)}var rO=0,iO={puff:{child:`They know you now!`,adult:`Full attunement — the boundary between observer and observed dissolves`},deer:{child:`You walk as one.`,adult:`Stride-locked — biosignatures indistinguishable`},jelly:{child:`Your hearts beat together!`,adult:`Pulse synchronization complete — resonance achieved`},moth:{child:`You are part of the dance!`,adult:`Orbital lock confirmed — mutual observation state`}};function aO(e,t,n){let r=n?.player?.body?!n.player.body.onGround:!Q.onGround,i=n?.player?.body?Math.sqrt(n.player.body.vel.x*n.player.body.vel.x+n.player.body.vel.z*n.player.body.vel.z):Math.sqrt(Q.vel.x*Q.vel.x+Q.vel.z*Q.vel.z),a=n?.player?.sprinting===void 0?dd.ShiftLeft||dd.ShiftRight||bd:n.player.sprinting,o=n?.player?.pos?.x===void 0?Q.pos.x:n.player.pos.x,s=n?.player?.pos?.z===void 0?Q.pos.z:n.player.pos.z;if(Mg(e,r,YD.puffDist2,{nearestPuffPos:YD.puffPos,nearestJellyDist2:YD.jellyDist2,nearestJellyPos:YD.jellyPos,nearestDeerDist2:YD.deerDist2,nearestDeerPos:YD.deerPos,nearestDeerWanderAng:YD.deerWanderAng,nearestMothDist2:YD.mothDist2,nearestMothPos:YD.mothPos,playerYaw:fd,playerSpeed:i,spacePressed:!!dd.Space,sprinting:a,playerX:o,playerZ:s,time:t},n),Rg()){zD(2.5,Pg()),VD(1.5);let e=Pg(),t=Ig()||YD.puffPos;if(Ww(t,n?.player?.pos||Q.pos,e),e&&iO[e]&&AS(iO[e][_S()]||iO[e].child,5),e===`puff`){for(let e=0;e<hh.length;e++){let t=hh[e];t.state===`syncing`&&(t._syncTimer=.27,t.bodyMat&&(t.bodyMat.emissiveIntensity=4),t.crownMat&&(t.crownMat.emissiveIntensity=3))}for(let e=0;e<hh.length;e++){let t=hh[e];if(t.state!==`syncing`)continue;let n=t.group.position.x,r=t.group.position.z;Vb(n,Tf(n,r),r,`puff`,1)}}let r=Tf(t.x,t.z);for(let n=0;n<3;n++)Vb(t.x,r+n*1,t.z,e||`puff`,1)}if(ID>1&&LD&&(rO+=e,rO>.1)){rO=0;let e=0,t=0;switch(LD){case`deer`:e=YD.deerPos.x,t=YD.deerPos.z;break;case`moth`:e=YD.mothPos.x,t=YD.mothPos.z;break;case`jelly`:e=YD.jellyPos.x,t=YD.jellyPos.z;break;case`puff`:e=YD.puffPos.x,t=YD.puffPos.z;break}let n=Tf(e,t),r=Math.random()*2.5;Vb(e,n+r,t,LD,.7+Math.random()*.3)}}function oO(e,t){let n=_updateJellies(e,t);nearest.jellyDist2=n.nearestDist2,nearest.jellyPos.x=n.nearestPos.x,nearest.jellyPos.z=n.nearestPos.z}function sO(e,t){let n=_updatePuffs(e,t);nearest.puffDist2=n.nearestDist2,nearest.puffPos.x=n.nearestPos.x,nearest.puffPos.z=n.nearestPos.z}function cO(e,t){let n=_updateDeers(e,t);nearest.deerDist2=n.nearestDist2,nearest.deerPos.x=n.nearestPos.x,nearest.deerPos.z=n.nearestPos.z,nearest.deerWanderAng=n.nearestWanderAng}function lO(e,t){let n=_updateMoths(e,t);nearest.mothDist2=n.nearestDist2,nearest.mothPos.x=n.nearestPos.x,nearest.mothPos.z=n.nearestPos.z}function uO(e,t){let n=_updateLuminids(e,t);nearest.luminidDist2=n.nearestDist2,nearest.luminidPos.x=n.nearestPos.x,nearest.luminidPos.z=n.nearestPos.z}function dO(e,t){_updateFairyRings(e,t).featherFallTriggered&&qD(4)}function fO(e,t){let n=e_();updateContext({dt:e,t,player:Q,camera:Lu,sprinting:dd.ShiftLeft||dd.ShiftRight||bd,playerIdleTime:Lp,bioGlow:tx,orbBoost:PD,orbsFound:n.orbsFound,windX:VS,windZ:HS,windStrength:US,weatherState:WS,lightningFlash:KS,isStorming:GS,rainRate:_C(),dayPhase:rx,attuneFlashTimer:ID,attuneFlashType:LD,echoTimer:RD,humResonanceType:UD,humResonanceStr:WD,questPhase:n.questPhase})}var pO=`EXPLORE`;function mO(e,t){if(fO(e,t),ID>1.5){let t=ID-1.5,n=t>.6?.3:.3+(1-t/.6)*.7;e*=n}runScheduler(e,t),BD(e),HD(e),reportTimings(Iu)}function hO(e,t,n){timeStart(`crystalProximity`);let r=!1,i=n.player.pos;for(let e=0;e<ph.length;e++){let t=ph[e].x-i.x,n=ph[e].z-i.z;if(t*t+n*n<64){r=!0;break}}pO=r?`NEAR_CRYSTAL`:`EXPLORE`,timeEnd(`crystalProximity`)}function gO(e,t,n){timeStart(`fireflySpawn`);let r=n.weather,i=n.player;spawnFireflies(e,t,{dirState:pO,player:i.body,crys_data:ph,flowers:xh,curRain:r.rainRate,spawnFly:my,updateFlies:hy}),timeEnd(`fireflySpawn`),timeStart(`spores`),spawnSpores(e,{player:i.body,mush_data:fh,spawnSpore:Sy}),timeEnd(`spores`)}function _O(e,t,n){let r=n.env,i=n.attune,a=n.player.pos;timeStart(`mushrooms`);for(let e=0;e<fh.length;e++){let n=fh[e],o=n.x-a.x,s=(n.group.position.y||0)-a.y,c=n.z-a.z,l=o*o+s*s+c*c;if(l>2500){n.group.visible&&(n.group.visible=!1);continue}n.group.visible||(n.group.visible=!0);let u=Math.sin(t*n.speed+n.phase)*.5+.5;n.capMat.emissiveIntensity=n.base*(.7+u*1)*getLocalGlow(n.x,n.z,r.bioGlow*r.orbBoost),i.flashTimer>0&&l<625&&(n.capMat.emissiveIntensity+=i.flashTimer*.6)}timeEnd(`mushrooms`),timeStart(`crystals`);for(let n=0;n<ph.length;n++){let o=ph[n],s=Math.sin(t*.6+o.phase)*.5+.5,c=getLocalGlow(o.x,o.z,r.bioGlow*r.orbBoost);if(o.mat.emissiveIntensity=(1+s*1.5)*c,i.flashTimer>0){let e=o.x-a.x,t=o.z-a.z;e*e+t*t<225&&(o.mat.emissiveIntensity+=i.flashTimer*.35)}o.group.children[0].rotation.y+=e*.15}if(!Bh.length)for(let e=0;e<ph.length;e++)Bh.push({idx:e,dist:0});let o=a.x-Vh,s=a.z-Hh;if(o*o+s*s>1){Wh(a.x,a.z);for(let e=0;e<ph.length;e++){let t=ph[e],n=t.x-a.x,r=t.z-a.z;Bh[e].idx=e,Bh[e].dist=n*n+r*r}Bh.sort((e,t)=>e.dist-t.dist)}for(let e=0;e<ld.length;e++)if(e<Bh.length&&Bh[e].dist<2500){let n=ph[Bh[e].idx],i=Math.sin(t*.6+n.phase)*.5+.5;ld[e].position.set(n.x,1.5,n.z),ld[e].intensity=(1.5+i*2)*getLocalGlow(n.x,n.z,r.bioGlow*r.orbBoost),ld[e].distance=16,ld[e].color.setHex(Y.crystal)}else ld[e].intensity=0;timeEnd(`crystals`),timeStart(`vegetation`);let c=n.weather;spawnWindParticles(e,t,{player:n.player.body,dandelions:Th,trees_data:lh,windStrength:c.windStrength,isStorming:c.isStorming,spawnDandSeed:u_,spawnLeaf:sb}),timeEnd(`vegetation`)}function vO(e,t,n){timeStart(`fauna`);try{oO(e,t)}catch(e){console.warn(`jelly update error:`,e)}try{sO(e,t)}catch(e){console.warn(`puff update error:`,e)}try{cO(e,t)}catch(e){console.warn(`deer update error:`,e)}try{lO(e,t)}catch(e){console.warn(`moth update error:`,e)}try{uO(e,t)}catch(e){console.warn(`luminid update error:`,e)}timeEnd(`fauna`)}function yO(e,t,n){nO(e)}function bO(e,t,n){aO(e,t,n)}function xO(e,t,n){let r=sp(pd,n.env.orbsFound,_S());r&&AS(r,5)}function SO(e,t,n){timeStart(`rocks`);let r=n.player;Mv(r.pos.x,r.pos.y,r.pos.z,r.camera),timeEnd(`rocks`)}function CO(e,t,n){timeStart(`particles`);let r=n.player;updateWisps(e,t),__(Th,e,t,r.pos),dO(e,t),updateBubbles(e,t),updatePonds(e,t),updateEchoVisions(e,t,r.sprinting),timeEnd(`particles`)}function wO(e,t,n){let r=n.player.pos;Fy(e,t,r),h_(e,t,n),cb(e,t),Uy(e),Zy(e),Mb(e,t),updateEchoBloom(e,t),Hb(e)}function TO(e,t,n){timeStart(`quest`),updateFloraReactions(e,t),t_(e),lS(e,t),cy(t),timeEnd(`quest`)}function EO(e,t,n){timeStart(`footprints`);let r=n.player;if(r.body&&r.body.onGround&&r.body.vel.x*r.body.vel.x+r.body.vel.z*r.body.vel.z>.5){let e=Math.atan2(r.body.vel.x,r.body.vel.z);xb(r.pos.x,r.pos.z,e,r.sprinting)}Sb(e,n.weather.rainRate),timeEnd(`footprints`)}function DO(e,t,n){timeStart(`audio`),ST(e,n.player.pos,Oh,yh,n.env.dayPhase,n.weather.rainRate),zw(e),timeEnd(`audio`)}function OO(e,t,n){timeStart(`discoveries`);let r=n.player;MS(r.pos,gh,hh,mh,_h,Eh,Oh,0),RS(r.idleTime),DS(e,t),updatePufflingChat(e,Iu.domElement),timeEnd(`discoveries`)}var kO=0,AO=!1;function jO(){fD()}function MO(){requestAnimationFrame(MO);let e=Math.min(Ru.getDelta(),.1);kO+=e;let{orbsFound:t}=e_();gx(e);let n=gC(e,kO,Q.pos);jC(e,Q.pos,n,VS,HS),Cp(e,kO,rx,tx,WS),updateDimming(e),FD(1.15+t*.05),triggerCameraPan(t,fd,pd,mp),updatePlayerVisuals(e,kO),VC(t),Gw(e,US,n,GS,KS,rx,Q.pos,Oh),nT(e,Q.pos),lT(Q.pos);let r=Math.sqrt(Q.vel.x*Q.vel.x+Q.vel.z*Q.vel.z),i=!1;for(let e=0;e<Oh.length;e++){let t=Oh[e].x-Q.pos.x,n=Oh[e].z-Q.pos.z;if(t*t+n*n<225){i=!0;break}}if(!i)for(let e=0;e<Eh.length;e++){let t=Eh[e].x-Q.pos.x,n=Eh[e].z-Q.pos.z;if(t*t+n*n<144){i=!0;break}}if($T(e,rx,r,i),Ty(VS,HS),m_(VS,HS,US),ab(VS,HS,US),!AO){hD(e,Lu),gD()||(Lu.position.set(0,Cu,0),Lu.rotation.order=`YXZ`,Lu.rotation.y+=e*.08,Lu.rotation.x=0);for(let e=0;e<fh.length;e++){let t=fh[e],n=Math.sin(kO*t.speed+t.phase)*.5+.5;t.capMat.emissiveIntensity=t.base*(.5+n*.8)*tx}for(let e=0;e<ph.length;e++){let t=ph[e];t.mat.emissiveIntensity=(1+Math.sin(kO*.6+t.phase)*.5*1.5+.75)*tx}oO(e,kO),sO(e,kO),cO(e,kO),lO(e,kO),ip(e,kO),updateVegetation(e,kO),Fy(e,kO,Q.pos);for(let e=0;e<Dh.length;e++)Dh[e].popped||(Dh[e].group.position.y=Dh[e].floatY+Math.sin(kO*.6+Dh[e].phase)*Dh[e].bobAmp);for(let e=0;e<Oh.length;e++)for(let t=0;t<Oh[e].pads.length;t++)Oh[e].pads[t].mesh.position.y=.05+Math.sin(kO*.8+Oh[e].pads[t].phase)*.015;for(let e=0;e<kh.length;e++){let t=kh[e],n=Math.sin(kO*1.5+t.phase)*.5+.5;t.group.position.y=t.flyY+Math.sin(kO*.8+t.phase)*.3,t.glowMat.opacity=.3+n*.4}nd();return}KD>0?(JD(e),Hp(.3)):Hp(1),$p(e),mO(e,kO),hy(e,kO),Ey(e),Lu.position.copy(Q.pos),Lu.position.y+=jp,Lu.rotation.order=`YXZ`;let a=updateCameraPan(e,fd,pd,Nd,Pd);Lu.rotation.y=a.yaw,Lu.rotation.x=a.pitch,kD(e,Q.pos),nd()}try{ff(0,0,5),ep(),hx({scene:X,moon:id,moon2:ad,hemiLight:rd,playerLight:od}),Uh(_populate({trees_data:lh,treeImpostors:dh,mush_data:fh,crys_data:ph,jellies:mh,puffs:hh,deers:gh,moths:_h,luminids:vh,grassPatches:yh,ferns:bh,flowers:xh,reeds:Sh,rocks_data:Ch,wisps:wh,dandelions:Th,fairyRings:Eh,bubbles:Dh,ponds:Oh,orbs:kh,thornblooms:Ah,helixvines:jh,snapthorns:Mh,spiralfronds:Nh,corpseblooms:Ph,orbbushes:Fh,lanternpods:Ih,veilmosses:Lh,groundGlows:Rh,glyphs_data:zh},{makeTreeImpostor:lm,createTreeTemplates:xm,createTreeInstances:Sm,makeMush:Pm,makeCrystal:Wm,makeJelly:U_,makePuff:W_,makeDeer:G_,makeMoth:J_,makeLuminid:Y_,makeGrassPatch:Km,makeFern:qm,makeFlower:Jm,makeReed:ih,initProceduralRocks:Ov,placeProceduralRock:kv,finalizeProceduralRocks:Av,initPebbles:Iv,addPebble:zv,finalizePebbles:Bv,makeWisp:X_,makeDandelion:g_,makeFairyRing:Z_,makeBubble:Q_,makePond:ev,makeOrb:tv,makeThornbloom:w_,makeHelixvine:T_,makeSnapthorn:O_,makeSpiralFrond:k_,makeCorpseBloom:A_,makeOrbBush:F_,makeLanternPod:I_,makeVeilMoss:H_},X)),Gh(10),id.shadow.needsUpdate=!0;let e=Rf();_f(),Zp(lh,Ch),Qp(Hy),qp(e=>{let t=!1;for(let e=0;e<Oh.length;e++){let n=Oh[e].x-Q.pos.x,r=Oh[e].z-Q.pos.z;if(n*n+r*r<16){t=!0;break}}Iw(e,t),Math.random()<.4&&Hy(Q.pos.x,Q.pos.z,1)},()=>Lw(),e=>Rw(e)),hC(),kC(),py(150),xy(60),ud(),Ny(50),Vy(20),l_(40),Xy(30),ob(50),bb(),Ab(),Bb(X),initEchoVisions(),xp(),$v(),iy(),sy(),YC(),tT(ph),ES(),initPufflingChat(),OD(),jD(),uD(()=>{AO=!0,Md(!0),ND()}),mD(),initDimming(kh),$g(kh),aS({orbs:kh,obeliskGroup:qv(),obeliskMat:Jv(),obeliskGlowMat:Yv(),pinnacleOrb:Xv(),pinnacleRings:Zv(),moatMesh:ny(),moatMat:ry(),rainbowArcs:ay,player:Q,makeLaser:Xb,orbHudEl:MD(),deers:gh,puffs:hh,jellies:mh,moths:_h,trees:lh,treeMeshes:uh,groundMesh:e,playOrbCollect:jw,playOrbWarble:Mw,playLaserZap:sT,playLaserHum:cT,stopLaserHums:uT,playOrbReject:Nw,showOrbRejectHint:()=>zS(),showOrbListening:()=>BS(),spawnOrbBurst:jb,startResonanceDrone:hw,runeFaces:Qv()}),jd(jO),window.addEventListener(`keydown`,e=>{e.code===`Tab`&&(e.preventDefault(),yS())}),registerAllSystems({crystalProximity:(e,t,n)=>hO(e,t,n),particleSpawn:(e,t,n)=>gO(e,t,n),floraGlow:(e,t,n)=>_O(e,t,n),faunaUpdate:(e,t,n)=>vO(e,t,n),spiritHumUpdate:(e,t,n)=>yO(e,t,n),attunementUpdate:(e,t,n)=>bO(e,t,n),skyUpdate:(e,t,n)=>{ip(e,t),xO(e,t,n)},vegetationUpdate:(e,t,n)=>updateVegetation(e,t),rocksUpdate:(e,t,n)=>SO(e,t,n),magicalUpdate:(e,t,n)=>CO(e,t,n),particleUpdate:(e,t,n)=>wO(e,t,n),questUpdate:(e,t,n)=>TO(e,t,n),footprintUpdate:(e,t,n)=>EO(e,t,n),audioUpdate:(e,t,n)=>DO(e,t,n),discoveriesUpdate:(e,t,n)=>OO(e,t,n),hudUpdate:(e,t,n)=>reportTimings(Iu)});for(let e=0;e<50;e++){let e=Math.random()*6.28,t=3+Math.random()*90*.7,n=Math.cos(e)*t,r=Math.sin(e)*t;my(n,Tf(n,r),r,8+Math.random()*12)}console.log(`✓ Init: trees=`+lh.length+` mush=`+fh.length+` crystals=`+ph.length+` orbs=`+kh.length+` creatures=`+(mh.length+hh.length+gh.length+_h.length+vh.length)+` wisps=`+wh.length+` dandelions=`+Th.length+` fairyRings=`+Eh.length+` bubbles=`+Dh.length+` ponds=`+Oh.length+` scene=`+X.children.length),MO()}catch(e){console.error(`INIT FAILED:`,e),document.body.innerHTML=`<div style="color:red;padding:30px;font-family:monospace"><h2>Init Failed</h2><pre>`+(e.stack||e.message)+`</pre></div>`}