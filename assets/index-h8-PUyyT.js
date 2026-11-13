(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="170",Xs={ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jf=0,Eh=1,Qf=2,yd=1,tp=2,oi=3,Bi=0,un=1,zn=2,Ni=0,$s=1,ls=2,wh=3,Th=4,ep=5,ts=100,np=101,ip=102,sp=103,rp=104,op=200,ap=201,lp=202,cp=203,Sl=204,bl=205,hp=206,up=207,dp=208,fp=209,pp=210,mp=211,gp=212,_p=213,vp=214,El=0,wl=1,Tl=2,Qs=3,Al=4,Cl=5,Rl=6,Pl=7,Md=0,xp=1,yp=2,Fi=0,Mp=1,Sp=2,bp=3,Ep=4,wp=5,Tp=6,Ap=7,Sd=300,tr=301,er=302,Ll=303,Dl=304,_a=306,Il=1e3,is=1001,Ul=1002,sn=1003,Cp=1004,ao=1005,Gn=1006,Da=1007,ss=1008,mi=1009,bd=1010,Ed=1011,zr=1012,Tc=1013,cs=1014,Wn=1015,Jr=1016,Ac=1017,Cc=1018,nr=1020,wd=35902,Td=1021,Ad=1022,In=1023,Cd=1024,Rd=1025,Ys=1026,ir=1027,va=1028,Rc=1029,Pd=1030,Pc=1031,Lc=1033,$o=33776,Yo=33777,jo=33778,qo=33779,Nl=35840,Fl=35841,Ol=35842,Bl=35843,kl=36196,zl=37492,Vl=37496,Hl=37808,Gl=37809,Wl=37810,Xl=37811,$l=37812,Yl=37813,jl=37814,ql=37815,Kl=37816,Zl=37817,Jl=37818,Ql=37819,tc=37820,ec=37821,Ko=36492,nc=36494,ic=36495,Ld=36283,sc=36284,rc=36285,oc=36286,Rp=3200,Pp=3201,Dd=0,Lp=1,Ii="",gn="srgb",ur="srgb-linear",xa="linear",fe="srgb",xs=7680,Ah=519,Dp=512,Ip=513,Up=514,Id=515,Np=516,Fp=517,Op=518,Bp=519,ac=35044,Ch="300 es",ci=2e3,ia=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rh=1234567;const Fr=Math.PI/180,Vr=180/Math.PI;function ui(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function Ve(n,t,e){return Math.max(t,Math.min(e,n))}function Dc(n,t){return(n%t+t)%t}function kp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function zp(n,t,e){return n!==t?(e-n)/(t-n):0}function Or(n,t,e){return(1-e)*n+e*t}function Vp(n,t,e,i){return Or(n,t,1-Math.exp(-e*i))}function Hp(n,t=1){return t-Math.abs(Dc(n,t*2)-t)}function Gp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Wp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Xp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $p(n,t){return n+Math.random()*(t-n)}function Yp(n){return n*(.5-Math.random())}function jp(n){n!==void 0&&(Rh=n);let t=Rh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qp(n){return n*Fr}function Kp(n){return n*Vr}function Zp(n){return(n&n-1)===0&&n!==0}function Jp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tm(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bn={DEG2RAD:Fr,RAD2DEG:Vr,generateUUID:ui,clamp:Ve,euclideanModulo:Dc,mapLinear:kp,inverseLerp:zp,lerp:Or,damp:Vp,pingpong:Hp,smoothstep:Gp,smootherstep:Wp,randInt:Xp,randFloat:$p,randFloatSpread:Yp,seededRandom:jp,degToRad:qp,radToDeg:Kp,isPowerOfTwo:Zp,ceilPowerOfTwo:Jp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:tm,normalize:ue,denormalize:Dn};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,i,s,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],E=s[4],y=s[7],N=s[2],A=s[5],C=s[8];return r[0]=o*_+a*S+l*N,r[3]=o*m+a*E+l*A,r[6]=o*p+a*y+l*C,r[1]=c*_+h*S+u*N,r[4]=c*m+h*E+u*A,r[7]=c*p+h*y+u*C,r[2]=d*_+f*S+g*N,r[5]=d*m+f*E+g*A,r[8]=d*p+f*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Bt;function Ud(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function em(){const n=sa("canvas");return n.style.display="block",n}const Ph={};function Ur(n){n in Ph||(Ph[n]=!0,console.warn(n))}function nm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function im(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:ur,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(n.r=di(n.r),n.g=di(n.g),n.b=di(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(n.r=js(n.r),n.g=js(n.g),n.b=js(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ii?xa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Lh=[.64,.33,.3,.6,.15,.06],Dh=[.2126,.7152,.0722],Ih=[.3127,.329],Uh=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[ur]:{primaries:Lh,whitePoint:Ih,transfer:xa,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:Dh,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:Lh,whitePoint:Ih,transfer:fe,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:Dh,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let ys;class rm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ys===void 0&&(ys=sa("canvas")),ys.width=t.width,ys.height=t.height;const i=ys.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(di(e[i]/255)*255):e[i]=di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let om=0;class Nd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ua(s[o].image)):r.push(Ua(s[o]))}else r=Ua(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;class tn extends ps{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=is,s=is,r=Gn,o=ss,a=In,l=mi,c=tn.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ui(),this.name="",this.source=new Nd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Il:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case Ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Il:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case Ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Sd;tn.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,i=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(f+1)/2,N=(p+1)/2,A=(h+d)/4,C=(u+_)/4,P=(g+m)/4;return E>y&&E>N?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=C/i):y>N?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=P/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=C/r,s=P/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lm extends ps{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends lm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Fd extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cm extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const N=Math.sqrt(E),A=Math.atan2(N,p*S);m=Math.sin(m*A)/N,a=Math.sin(a*A)/N}const y=a*S;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const N=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=N,c*=N,h*=N,u*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,i=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new w,Fh=new gi;class ms{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),co.subVectors(this.max,yr),Ms.subVectors(t.a,yr),Ss.subVectors(t.b,yr),bs.subVectors(t.c,yr),Si.subVectors(Ss,Ms),bi.subVectors(bs,Ss),Xi.subVectors(Ms,bs);let e=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-Xi.z,Xi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,Xi.z,0,-Xi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-Xi.y,Xi.x,0];return!Fa(e,Ms,Ss,bs,co)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,Ms,Ss,bs,co))?!1:(ho.crossVectors(Si,bi),e=[ho.x,ho.y,ho.z],Fa(e,Ms,Ss,bs,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new w,new w,new w,new w,new w,new w,new w,new w],Cn=new w,lo=new ms,Ms=new w,Ss=new w,bs=new w,Si=new w,bi=new w,Xi=new w,yr=new w,co=new w,ho=new w,$i=new w;function Fa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){$i.fromArray(n,r);const a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=i.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const hm=new ms,Mr=new w,Oa=new w;class gs{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):hm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);const e=Mr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Mr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(Oa)),this.expandByPoint(Mr.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new w,Ba=new w,uo=new w,Ei=new w,ka=new w,fo=new w,za=new w;class Qr{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ba.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Ba);const r=t.distanceTo(e)*.5,o=-this.direction.dot(uo),a=Ei.dot(this.direction),l=-Ei.dot(uo),c=Ei.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ba).addScaledVector(uo,d),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,s,r){ka.subVectors(e,t),fo.subVectors(i,t),za.crossVectors(ka,fo);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const l=a*this.direction.dot(fo.crossVectors(Ei,fo));if(l<0)return null;const c=a*this.direction.dot(ka.cross(Ei));if(c<0||l+c>o)return null;const h=-a*Ei.dot(za);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(um,t,dm)}lookAt(t,e,i){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),wi.crossVectors(i,fn),wi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),wi.crossVectors(i,fn)),wi.normalize(),po.crossVectors(fn,wi),s[0]=wi.x,s[4]=po.x,s[8]=fn.x,s[1]=wi.y,s[5]=po.y,s[9]=fn.y,s[2]=wi.z,s[6]=po.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],E=i[7],y=i[11],N=i[15],A=s[0],C=s[4],P=s[8],b=s[12],x=s[1],R=s[5],V=s[9],B=s[13],Y=s[2],q=s[6],X=s[10],Q=s[14],L=s[3],G=s[7],J=s[11],pt=s[15];return r[0]=o*A+a*x+l*Y+c*L,r[4]=o*C+a*R+l*q+c*G,r[8]=o*P+a*V+l*X+c*J,r[12]=o*b+a*B+l*Q+c*pt,r[1]=h*A+u*x+d*Y+f*L,r[5]=h*C+u*R+d*q+f*G,r[9]=h*P+u*V+d*X+f*J,r[13]=h*b+u*B+d*Q+f*pt,r[2]=g*A+_*x+m*Y+p*L,r[6]=g*C+_*R+m*q+p*G,r[10]=g*P+_*V+m*X+p*J,r[14]=g*b+_*B+m*Q+p*pt,r[3]=S*A+E*x+y*Y+N*L,r[7]=S*C+E*R+y*q+N*G,r[11]=S*P+E*V+y*X+N*J,r[15]=S*b+E*B+y*Q+N*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,E=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,N=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*S+i*E+s*y+r*N;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*C,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*C,t[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*f-i*l*f)*C,t[4]=E*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=y*C,t[9]=(g*u*r-h*_*r-g*i*f+e*_*f+h*i*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*C,t[12]=N*C,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*m+e*u*m)*C,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*d+e*a*d)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=l*c,E=l*h,y=l*u,N=i.x,A=i.y,C=i.z;return s[0]=(1-(_+p))*N,s[1]=(f+y)*N,s[2]=(g-E)*N,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(d+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+E)*C,s[9]=(m-S)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Es.set(s[0],s[1],s[2]).length();const o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Rn.copy(this);const c=1/r,h=1/o,u=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,e.setFromRotationMatrix(Rn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ci){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let f,g;if(a===ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ia)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ci){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),d=(e+t)*c,f=(i+s)*h;let g,_;if(a===ci)g=(o+r)*u,_=-2*u;else if(a===ia)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Es=new w,Rn=new Zt,um=new w(0,0,0),dm=new w(1,1,1),wi=new w,po=new w,fn=new w,Oh=new Zt,Bh=new gi;class _i{constructor(t=0,e=0,i=0,s=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fm=0;const kh=new w,ws=new gi,ii=new Zt,mo=new w,Sr=new w,pm=new w,mm=new gi,zh=new w(1,0,0),Vh=new w(0,1,0),Hh=new w(0,0,1),Gh={type:"added"},gm={type:"removed"},Ts={type:"childadded",child:null},Va={type:"childremoved",child:null};class Le extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new w,e=new _i,i=new gi,s=new w(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Bt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(zh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return kh.copy(t).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?mo.copy(t):mo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Sr,mo,this.up):ii.lookAt(mo,Sr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ii),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gm),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Le.DEFAULT_UP=new w(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new w,si=new w,Ha=new w,ri=new w,As=new w,Cs=new w,Wh=new w,Ga=new w,Wa=new w,Xa=new w,$a=new Re,Ya=new Re,ja=new Re;class Sn{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Pn.subVectors(t,e),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Pn.subVectors(s,e),si.subVectors(i,e),Ha.subVectors(t,e);const o=Pn.dot(Pn),a=Pn.dot(si),l=Pn.dot(Ha),c=si.dot(si),h=si.dot(Ha),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return $a.setScalar(0),Ya.setScalar(0),ja.setScalar(0),$a.fromBufferAttribute(t,e),Ya.fromBufferAttribute(t,i),ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Ya,r.y),o.addScaledVector(ja,r.z),o}static isFrontFacing(t,e,i,s){return Pn.subVectors(i,e),si.subVectors(t,e),Pn.cross(si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,i),Cs.subVectors(r,i),Ga.subVectors(t,i);const l=As.dot(Ga),c=Cs.dot(Ga);if(l<=0&&c<=0)return e.copy(i);Wa.subVectors(t,s);const h=As.dot(Wa),u=Cs.dot(Wa);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(As,o);Xa.subVectors(t,r);const f=As.dot(Xa),g=Cs.dot(Xa);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Cs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Wh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Wh,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(As,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},go={h:0,s:0,l:0};function qa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Dc(t,1),e=Ve(e,0,1),i=Ve(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=qa(o,r,t+1/3),this.g=qa(o,r,t),this.b=qa(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const i=Od[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return te.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ve(qe.r*255,0,255))*65536+Math.round(Ve(qe.g*255,0,255))*256+Math.round(Ve(qe.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(qe.copy(this),e);const i=qe.r,s=qe.g,r=qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=gn){te.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,s=qe.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(go);const i=Or(Ti.h,go.h,e),s=Or(Ti.s,go.s,e),r=Or(Ti.l,go.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new vt;vt.NAMES=Od;let _m=0;class Hi extends ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ui(),this.name="",this.blending=$s,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=bl,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ee extends Hi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new w,_o=new st;class Ie{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ac,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}}class Bd extends Ie{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class kd extends Ie{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends Ie{constructor(t,e,i){super(new Float32Array(t),e,i)}}let vm=0;const yn=new Zt,Ka=new Le,Rs=new w,pn=new ms,br=new ms,We=new w;class Ae extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ud(t)?kd:Bd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(pn.min,br.min),pn.expandByPoint(We),We.addVectors(pn.max,br.max),pn.expandByPoint(We)):(pn.expandByPoint(br.min),pn.expandByPoint(br.max))}pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(t,c),We.add(Rs)),s=Math.max(s,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new w,l[P]=new w;const c=new w,h=new w,u=new w,d=new st,f=new st,g=new st,_=new w,m=new w;function p(P,b,x){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[P].add(_),a[b].add(_),a[x].add(_),l[P].add(m),l[b].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,b=S.length;P<b;++P){const x=S[P],R=x.start,V=x.count;for(let B=R,Y=R+V;B<Y;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new w,y=new w,N=new w,A=new w;function C(P){N.fromBufferAttribute(s,P),A.copy(N);const b=a[P];E.copy(b),E.sub(N.multiplyScalar(N.dot(b))).normalize(),y.crossVectors(A,b);const R=y.dot(l[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,b=S.length;P<b;++P){const x=S[P],R=x.start,V=x.count;for(let B=R,Y=R+V;B<Y;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new w,r=new w,o=new w,a=new w,l=new w,c=new w,h=new w,u=new w;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ie(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new Zt,Yi=new Qr,vo=new gs,$h=new w,xo=new w,yo=new w,Mo=new w,Za=new w,So=new w,Yh=new w,bo=new w;class ft extends Le{constructor(t=new Ae,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Za.fromBufferAttribute(u,t),o?So.addScaledVector(Za,h):So.addScaledVector(Za.sub(e),h))}e.add(So)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(vo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(vo,$h)===null||Yi.origin.distanceToSquared($h)>(t.far-t.near)**2))&&(Xh.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(Xh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,N=E;y<N;y+=3){const A=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);s=Eo(this,p,t,i,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=Eo(this,o,t,i,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,N=E;y<N;y+=3){const A=y,C=y+1,P=y+2;s=Eo(this,p,t,i,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,E=m+1,y=m+2;s=Eo(this,o,t,i,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function xm(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Bi,a),l===null)return null;bo.copy(a),bo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(bo);return c<e.near||c>e.far?null:{distance:c,point:bo.clone(),object:n}}function Eo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,xo),n.getVertexPosition(l,yo),n.getVertexPosition(c,Mo);const h=xm(n,t,e,i,xo,yo,Mo,Yh);if(h){const u=new w;Sn.getBarycoord(Yh,xo,yo,Mo,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,u,new st)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,u,new st)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new w,materialIndex:0};Sn.getNormal(xo,yo,Mo,d.normal),h.face=d,h.barycoord=u}return h}class _s extends Ae{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(_,m,p,S,E,y,N,A,C,P,b){const x=y/C,R=N/P,V=y/2,B=N/2,Y=A/2,q=C+1,X=P+1;let Q=0,L=0;const G=new w;for(let J=0;J<X;J++){const pt=J*R-B;for(let Ct=0;Ct<q;Ct++){const Gt=Ct*x-V;G[_]=Gt*S,G[m]=pt*E,G[p]=Y,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[p]=A>0?1:-1,h.push(G.x,G.y,G.z),u.push(Ct/C),u.push(1-J/P),Q+=1}}for(let J=0;J<P;J++)for(let pt=0;pt<C;pt++){const Ct=d+pt+q*J,Gt=d+pt+q*(J+1),W=d+(pt+1)+q*(J+1),et=d+(pt+1)+q*J;l.push(Ct,Gt,et),l.push(Gt,W,et),L+=6}a.addGroup(f,L,b),f+=L,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function nn(n){const t={};for(let e=0;e<n.length;e++){const i=sr(n[e]);for(const s in i)t[s]=i[s]}return t}function ym(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Mm={clone:sr,merge:nn};var Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Hi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=ym(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vd extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new w,jh=new st,qh=new st;class Mn extends Vd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,jh,qh),e.subVectors(qh,jh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ps=-90,Ls=1;class Em extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);const l=new Mn(Ps,Ls,t,e);l.layers=this.layers,this.add(l);const c=new Mn(Ps,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hd extends tn{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wm extends hs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Hd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _s(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ni});r.uniforms.tEquirect.value=e;const o=new ft(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=Gn),new Em(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Ja=new w,Tm=new w,Am=new Bt;class Di{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ja.subVectors(i,e).cross(Tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Am.getNormalMatrix(t),s=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new gs,wo=new w;class Uc{constructor(t=new Di,e=new Di,i=new Di,s=new Di,r=new Di,o=new Di){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ci){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],S=s[13],E=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,m-f,y-p).normalize(),i[1].setComponents(l+r,d+c,m+f,y+p).normalize(),i[2].setComponents(l+o,d+h,m+g,y+S).normalize(),i[3].setComponents(l-o,d-h,m-g,y-S).normalize(),i[4].setComponents(l-a,d-u,m-_,y-E).normalize(),e===ci)i[5].setComponents(l+a,d+u,m+_,y+E).normalize();else if(e===ia)i[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(wo.x=s.normal.x>0?t.max.x:t.min.x,wo.y=s.normal.y>0?t.max.y:t.min.y,wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Cm(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ya extends Ae{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let E=0;E<c;E++){const y=E*u-r;g.push(y,-S,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const E=S+c*p,y=S+c*(p+1),N=S+1+c*(p+1),A=S+1+c*p;f.push(E,y,A),f.push(y,N,A)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pm=`#ifdef USE_ALPHAHASH
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
#endif`,Lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
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
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Om=`#ifdef USE_BATCHING
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
#endif`,Bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hm=`#ifdef USE_IRIDESCENCE
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
#endif`,Gm=`#ifdef USE_BUMPMAP
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
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jm=`#define PI 3.141592653589793
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
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t0=`vec3 transformedNormal = objectNormal;
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
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",o0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
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
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T0=`PhysicalMaterial material;
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
#endif`,A0=`struct PhysicalMaterial {
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
}`,C0=`
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B0=`#if defined( USE_POINTS_UV )
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
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z0=`#ifdef USE_NORMALMAP
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
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fg=`float getShadowMask() {
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
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
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
}`,Ng=`#if DEPTH_PACKING == 3200
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
}`,Fg=`#define DISTANCE
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
}`,Og=`#define DISTANCE
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
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,jg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Kg=`#define PHONG
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
}`,Zg=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,Qg=`#define STANDARD
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
}`,r_=`uniform vec3 color;
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
}`,o_=`uniform float rotation;
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
}`,Vt={alphahash_fragment:Rm,alphahash_pars_fragment:Pm,alphamap_fragment:Lm,alphamap_pars_fragment:Dm,alphatest_fragment:Im,alphatest_pars_fragment:Um,aomap_fragment:Nm,aomap_pars_fragment:Fm,batching_pars_vertex:Om,batching_vertex:Bm,begin_vertex:km,beginnormal_vertex:zm,bsdfs:Vm,iridescence_fragment:Hm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:$m,clipping_planes_vertex:Ym,color_fragment:jm,color_pars_fragment:qm,color_pars_vertex:Km,color_vertex:Zm,common:Jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:t0,displacementmap_pars_vertex:e0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:o0,envmap_fragment:a0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:h0,envmap_physical_pars_fragment:M0,envmap_vertex:u0,fog_vertex:d0,fog_pars_vertex:f0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:g0,lightmap_pars_fragment:_0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:x0,lights_pars_begin:y0,lights_toon_fragment:S0,lights_toon_pars_fragment:b0,lights_phong_fragment:E0,lights_phong_pars_fragment:w0,lights_physical_fragment:T0,lights_physical_pars_fragment:A0,lights_fragment_begin:C0,lights_fragment_maps:R0,lights_fragment_end:P0,logdepthbuf_fragment:L0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:I0,logdepthbuf_vertex:U0,map_fragment:N0,map_pars_fragment:F0,map_particle_fragment:O0,map_particle_pars_fragment:B0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:z0,morphinstance_vertex:V0,morphcolor_vertex:H0,morphnormal_vertex:G0,morphtarget_pars_vertex:W0,morphtarget_vertex:X0,normal_fragment_begin:$0,normal_fragment_maps:Y0,normal_pars_fragment:j0,normal_pars_vertex:q0,normal_vertex:K0,normalmap_pars_fragment:Z0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:tg,iridescence_pars_fragment:eg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:sg,project_vertex:rg,dithering_fragment:og,dithering_pars_fragment:ag,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:hg,shadowmap_pars_vertex:ug,shadowmap_vertex:dg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:_g,specularmap_fragment:vg,specularmap_pars_fragment:xg,tonemapping_fragment:yg,tonemapping_pars_fragment:Mg,transmission_fragment:Sg,transmission_pars_fragment:bg,uv_pars_fragment:Eg,uv_pars_vertex:wg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Cg,background_frag:Rg,backgroundCube_vert:Pg,backgroundCube_frag:Lg,cube_vert:Dg,cube_frag:Ig,depth_vert:Ug,depth_frag:Ng,distanceRGBA_vert:Fg,distanceRGBA_frag:Og,equirect_vert:Bg,equirect_frag:kg,linedashed_vert:zg,linedashed_frag:Vg,meshbasic_vert:Hg,meshbasic_frag:Gg,meshlambert_vert:Wg,meshlambert_frag:Xg,meshmatcap_vert:$g,meshmatcap_frag:Yg,meshnormal_vert:jg,meshnormal_frag:qg,meshphong_vert:Kg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:t_,meshtoon_frag:e_,points_vert:n_,points_frag:i_,shadow_vert:s_,shadow_frag:r_,sprite_vert:o_,sprite_frag:a_},ot={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},kn={basic:{uniforms:nn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:nn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new vt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:nn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:nn([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:nn([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new vt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:nn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:nn([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:nn([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:nn([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:nn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:nn([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:nn([ot.common,ot.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:nn([ot.lights,ot.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};kn.physical={uniforms:nn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const To={r:0,b:0,g:0},qi=new _i,l_=new Zt;function c_(n,t,e,i,s,r,o){const a=new vt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function _(S){let E=!1;const y=g(S);y===null?p(a,l):y&&y.isColor&&(p(y,1),E=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===_a)?(h===void 0&&(h=new ft(new _s(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:sr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qi.copy(E.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l_.makeRotationFromEuler(qi)),h.material.toneMapped=te.getTransfer(y.colorSpace)!==fe,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ft(new ya(2,2),new ki({name:"BackgroundMaterial",uniforms:sr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=te.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,E){S.getRGB(To,zd(n)),i.buffers.color.setClear(To.r,To.g,To.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m}}function h_(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(x,R,V,B,Y){let q=!1;const X=u(B,V,R);r!==X&&(r=X,c(r.object)),q=f(x,B,V,Y),q&&g(x,B,V,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(x,R,V,B),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,R,V){const B=V.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let q=Y[R.id];q===void 0&&(q={},Y[R.id]=q);let X=q[B];return X===void 0&&(X=d(l()),q[B]=X),X}function d(x){const R=[],V=[],B=[];for(let Y=0;Y<e;Y++)R[Y]=0,V[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,R,V,B){const Y=r.attributes,q=R.attributes;let X=0;const Q=V.getAttributes();for(const L in Q)if(Q[L].location>=0){const J=Y[L];let pt=q[L];if(pt===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),J===void 0||J.attribute!==pt||pt&&J.data!==pt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(x,R,V,B){const Y={},q=R.attributes;let X=0;const Q=V.getAttributes();for(const L in Q)if(Q[L].location>=0){let J=q[L];J===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const pt={};pt.attribute=J,J&&J.data&&(pt.data=J.data),Y[L]=pt,X++}r.attributes=Y,r.attributesNum=X,r.index=B}function _(){const x=r.newAttributes;for(let R=0,V=x.length;R<V;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const V=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;V[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),Y[x]!==R&&(n.vertexAttribDivisor(x,R),Y[x]=R)}function S(){const x=r.newAttributes,R=r.enabledAttributes;for(let V=0,B=R.length;V<B;V++)R[V]!==x[V]&&(n.disableVertexAttribArray(V),R[V]=0)}function E(x,R,V,B,Y,q,X){X===!0?n.vertexAttribIPointer(x,R,V,Y,q):n.vertexAttribPointer(x,R,V,B,Y,q)}function y(x,R,V,B){_();const Y=B.attributes,q=V.getAttributes(),X=R.defaultAttributeValues;for(const Q in q){const L=q[Q];if(L.location>=0){let G=Y[Q];if(G===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(G=x.instanceColor)),G!==void 0){const J=G.normalized,pt=G.itemSize,Ct=t.get(G);if(Ct===void 0)continue;const Gt=Ct.buffer,W=Ct.type,et=Ct.bytesPerElement,St=W===n.INT||W===n.UNSIGNED_INT||G.gpuType===Tc;if(G.isInterleavedBufferAttribute){const lt=G.data,Rt=lt.stride,It=G.offset;if(lt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<L.locationSize;Xt++)p(L.location+Xt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Xt=0;Xt<L.locationSize;Xt++)m(L.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let Xt=0;Xt<L.locationSize;Xt++)E(L.location+Xt,pt/L.locationSize,W,J,Rt*et,(It+pt/L.locationSize*Xt)*et,St)}else{if(G.isInstancedBufferAttribute){for(let lt=0;lt<L.locationSize;lt++)p(L.location+lt,G.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let lt=0;lt<L.locationSize;lt++)m(L.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let lt=0;lt<L.locationSize;lt++)E(L.location+lt,pt/L.locationSize,W,J,pt*et,pt/L.locationSize*lt*et,St)}}else if(X!==void 0){const J=X[Q];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(L.location,J);break;case 3:n.vertexAttrib3fv(L.location,J);break;case 4:n.vertexAttrib4fv(L.location,J);break;default:n.vertexAttrib1fv(L.location,J)}}}}S()}function N(){P();for(const x in i){const R=i[x];for(const V in R){const B=R[V];for(const Y in B)h(B[Y].object),delete B[Y];delete R[V]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const V in R){const B=R[V];for(const Y in B)h(B[Y].object),delete B[Y];delete R[V]}delete i[x.id]}function C(x){for(const R in i){const V=i[R];if(V[x.id]===void 0)continue;const B=V[x.id];for(const Y in B)h(B[Y].object),delete B[Y];delete V[x.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function u_(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function d_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==In&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==mi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Wn&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:N,maxSamples:A}}function f_(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Di,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,E=S*4;let y=p.clippingState||null;l.value=y,y=h(g,d,E,f);for(let N=0;N!==E;++N)y[N]=e[N];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(u[E]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function p_(n){let t=new WeakMap;function e(o,a){return a===Ll?o.mapping=tr:a===Dl&&(o.mapping=er),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ll||a===Dl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wm(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Wd extends Vd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gs=4,Kh=[.125,.215,.35,.446,.526,.582],es=20,Qa=new Wd,Zh=new vt;let tl=null,el=0,nl=0,il=!1;const Qi=(1+Math.sqrt(5))/2,Ds=1/Qi,Jh=[new w(-Qi,Ds,0),new w(Qi,Ds,0),new w(-Ds,0,Qi),new w(Ds,0,Qi),new w(0,Qi,-Ds),new w(0,Qi,Ds),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class Qh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tl,el,nl),this._renderer.xr.enabled=il,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Jr,format:In,colorSpace:ur,depthBuffer:!1},s=tu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(r)),this._blurMaterial=g_(r,t,e)}return s}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,i,s){const a=new Mn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zh),h.toneMapping=Fi,h.autoClear=!1;const f=new Ee({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new ft(new _s,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Zh),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Ao(s,S*E,p>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===tr||t.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ao(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Qa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jh[(s-r-1)%Jh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ft(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const p=[];let S=0;for(let C=0;C<es;++C){const P=C/_,b=Math.exp(-P*P/2);p.push(b),C===0?S+=b:C<m&&(S+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const y=this._sizeLods[s],N=3*y*(s>E-Gs?s-E+Gs:0),A=4*(this._cubeSize-y);Ao(e,N,A,3*y,2*y),l.setRenderTarget(e),l.render(u,Qa)}}function m_(n){const t=[],e=[],i=[];let s=n;const r=n-Gs+1+Kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Gs?l=Kh[o-n+Gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),E=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(b,_*g*A),E.set(d,m*g*A);const x=[A,A,A,A,A,A];y.set(x,p*g*A)}const N=new Ae;N.setAttribute("position",new Ie(S,_)),N.setAttribute("uv",new Ie(E,m)),N.setAttribute("faceIndex",new Ie(y,p)),t.push(N),s>Gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function tu(n,t,e){const i=new hs(n,t,e);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function g_(n,t,e){const i=new Float32Array(es),s=new w(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function eu(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function nu(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function __(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ll||l===Dl,h=l===tr||l===er;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Qh(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Qh(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function v_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ur("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function x_(n,t,e,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let E=0,y=S.length;E<y;E+=3){const N=S[E+0],A=S[E+1],C=S[E+2];d.push(N,A,A,C,C,N)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,y=S.length/3-1;E<y;E+=3){const N=E+0,A=E+1,C=E+2;d.push(N,A,A,C,C,N)}}else return;const m=new(Ud(d)?kd:Bd)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function y_(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function M_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function S_(n,t,e){const i=new WeakMap,s=new Re;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let N=a.attributes.position.count*y,A=1;N>t.maxTextureSize&&(A=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const C=new Float32Array(N*A*4*u),P=new Fd(C,N,A,u);P.type=Wn,P.needsUpdate=!0;const b=y*4;for(let R=0;R<u;R++){const V=p[R],B=S[R],Y=E[R],q=N*A*4*R;for(let X=0;X<V.count;X++){const Q=X*b;g===!0&&(s.fromBufferAttribute(V,X),C[q+Q+0]=s.x,C[q+Q+1]=s.y,C[q+Q+2]=s.z,C[q+Q+3]=0),_===!0&&(s.fromBufferAttribute(B,X),C[q+Q+4]=s.x,C[q+Q+5]=s.y,C[q+Q+6]=s.z,C[q+Q+7]=0),m===!0&&(s.fromBufferAttribute(Y,X),C[q+Q+8]=s.x,C[q+Q+9]=s.y,C[q+Q+10]=s.z,C[q+Q+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new st(N,A)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function b_(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Xd extends tn{constructor(t,e,i,s,r,o,a,l,c,h=Ys){if(h!==Ys&&h!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ys&&(i=cs),i===void 0&&h===ir&&(i=nr),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $d=new tn,iu=new Xd(1,1),Yd=new Fd,jd=new cm,qd=new Hd,su=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function dr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=su[s];if(r===void 0&&(r=new Float32Array(s),su[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ma(n,t){let e=ru[t];e===void 0&&(e=new Int32Array(t),ru[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function E_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function w_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function T_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function A_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function C_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;lu.set(i),n.uniformMatrix2fv(this.addr,!1,lu),Ge(e,i)}}function R_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;au.set(i),n.uniformMatrix3fv(this.addr,!1,au),Ge(e,i)}}function P_(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,i))return;ou.set(i),n.uniformMatrix4fv(this.addr,!1,ou),Ge(e,i)}}function L_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function D_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function I_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function U_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function N_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function F_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function O_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function B_(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function k_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(iu.compareFunction=Id,r=iu):r=$d,e.setTexture2D(t||r,s)}function z_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jd,s)}function V_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||qd,s)}function H_(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yd,s)}function G_(n){switch(n){case 5126:return E_;case 35664:return w_;case 35665:return T_;case 35666:return A_;case 35674:return C_;case 35675:return R_;case 35676:return P_;case 5124:case 35670:return L_;case 35667:case 35671:return D_;case 35668:case 35672:return I_;case 35669:case 35673:return U_;case 5125:return N_;case 36294:return F_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return H_}}function W_(n,t){n.uniform1fv(this.addr,t)}function X_(n,t){const e=dr(t,this.size,2);n.uniform2fv(this.addr,e)}function $_(n,t){const e=dr(t,this.size,3);n.uniform3fv(this.addr,e)}function Y_(n,t){const e=dr(t,this.size,4);n.uniform4fv(this.addr,e)}function j_(n,t){const e=dr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function q_(n,t){const e=dr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function K_(n,t){const e=dr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Z_(n,t){n.uniform1iv(this.addr,t)}function J_(n,t){n.uniform2iv(this.addr,t)}function Q_(n,t){n.uniform3iv(this.addr,t)}function tv(n,t){n.uniform4iv(this.addr,t)}function ev(n,t){n.uniform1uiv(this.addr,t)}function nv(n,t){n.uniform2uiv(this.addr,t)}function iv(n,t){n.uniform3uiv(this.addr,t)}function sv(n,t){n.uniform4uiv(this.addr,t)}function rv(n,t,e){const i=this.cache,s=t.length,r=Ma(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$d,r[o])}function ov(n,t,e){const i=this.cache,s=t.length,r=Ma(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||jd,r[o])}function av(n,t,e){const i=this.cache,s=t.length,r=Ma(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||qd,r[o])}function lv(n,t,e){const i=this.cache,s=t.length,r=Ma(e,s);He(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yd,r[o])}function cv(n){switch(n){case 5126:return W_;case 35664:return X_;case 35665:return $_;case 35666:return Y_;case 35674:return j_;case 35675:return q_;case 35676:return K_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return Q_;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}class hv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=G_(e.type)}}class uv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cv(e.type)}}class dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function cu(n,t){n.seq.push(t),n.map[t.id]=t}function fv(n,t,e){const i=n.name,s=i.length;for(sl.lastIndex=0;;){const r=sl.exec(i),o=sl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cu(e,c===void 0?new hv(a,n,t):new uv(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new dv(a),cu(e,u)),e=u}}}class Zo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fv(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function hu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const pv=37297;let mv=0;function gv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const uu=new Bt;function _v(n){te._getMatrix(uu,te.workingColorSpace,n);const t=`mat3( ${uu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case xa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function du(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gv(n.getShaderSource(t),o)}else return s}function vv(n,t){const e=_v(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xv(n,t){let e;switch(t){case Mp:e="Linear";break;case Sp:e="Reinhard";break;case bp:e="Cineon";break;case Ep:e="ACESFilmic";break;case Tp:e="AgX";break;case Ap:e="Neutral";break;case wp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Co=new w;function yv(){te.getLuminanceCoefficients(Co);const n=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Sv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function bv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Nr(n){return n!==""}function fu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(n){return n.replace(Ev,Tv)}const wv=new Map;function Tv(n,t){let e=Vt[t];if(e===void 0){const i=wv.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return lc(e)}const Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(n){return n.replace(Av,Cv)}function Cv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===tp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function Pv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function Dv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Md:t="ENVMAP_BLENDING_MULTIPLY";break;case xp:t="ENVMAP_BLENDING_MIX";break;case yp:t="ENVMAP_BLENDING_ADD";break}return t}function Iv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Uv(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rv(e),c=Pv(e),h=Lv(e),u=Dv(e),d=Iv(e),f=Mv(e),g=Sv(r),_=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Fi?xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),yv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=lc(o),o=fu(o,e),o=pu(o,e),a=lc(a),a=fu(a,e),a=pu(a,e),o=mu(o),a=mu(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+o,y=S+p+a,N=hu(s,s.VERTEX_SHADER,E),A=hu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,N),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(N).trim(),Y=s.getShaderInfoLog(A).trim();let q=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,N,A);else{const Q=du(s,N,"vertex"),L=du(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+Q+`
`+L)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||Y==="")&&(X=!1);X&&(R.diagnostics={runnable:q,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(N),s.deleteShader(A),P=new Zo(s,_),b=bv(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,pv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=A,this}let Nv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ov(t),e.set(t,i)),i}}class Ov{constructor(t){this.id=Nv++,this.code=t,this.usedTimes=0}}function Bv(n,t,e,i,s,r,o){const a=new Ic,l=new Fv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,R,V,B){const Y=V.fog,q=B.geometry,X=b.isMeshStandardMaterial?V.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),L=Q&&Q.mapping===_a?Q.image.height:null,G=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const J=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pt=J!==void 0?J.length:0;let Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let Gt,W,et,St;if(G){const ce=kn[G];Gt=ce.vertexShader,W=ce.fragmentShader}else Gt=b.vertexShader,W=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),St=l.getFragmentShaderID(b);const lt=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),It=B.isInstancedMesh===!0,Xt=B.isBatchedMesh===!0,we=!!b.map,Jt=!!b.matcap,De=!!Q,F=!!b.aoMap,vn=!!b.lightMap,Yt=!!b.bumpMap,jt=!!b.normalMap,Tt=!!b.displacementMap,ye=!!b.emissiveMap,wt=!!b.metalnessMap,T=!!b.roughnessMap,v=b.anisotropy>0,O=b.clearcoat>0,K=b.dispersion>0,tt=b.iridescence>0,j=b.sheen>0,bt=b.transmission>0,ct=v&&!!b.anisotropyMap,mt=O&&!!b.clearcoatMap,Qt=O&&!!b.clearcoatNormalMap,nt=O&&!!b.clearcoatRoughnessMap,gt=tt&&!!b.iridescenceMap,At=tt&&!!b.iridescenceThicknessMap,Pt=j&&!!b.sheenColorMap,_t=j&&!!b.sheenRoughnessMap,qt=!!b.specularMap,zt=!!b.specularColorMap,ve=!!b.specularIntensityMap,D=bt&&!!b.transmissionMap,at=bt&&!!b.thicknessMap,H=!!b.gradientMap,Z=!!b.alphaMap,dt=b.alphaTest>0,ht=!!b.alphaHash,Ft=!!b.extensions;let Ce=Fi;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ce=n.toneMapping);const Ye={shaderID:G,shaderType:b.type,shaderName:b.name,vertexShader:Gt,fragmentShader:W,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&B._colorsTexture!==null,instancing:It,instancingColor:It&&B.instanceColor!==null,instancingMorph:It&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ur,alphaToCoverage:!!b.alphaToCoverage,map:we,matcap:Jt,envMap:De,envMapMode:De&&Q.mapping,envMapCubeUVHeight:L,aoMap:F,lightMap:vn,bumpMap:Yt,normalMap:jt,displacementMap:d&&Tt,emissiveMap:ye,normalMapObjectSpace:jt&&b.normalMapType===Lp,normalMapTangentSpace:jt&&b.normalMapType===Dd,metalnessMap:wt,roughnessMap:T,anisotropy:v,anisotropyMap:ct,clearcoat:O,clearcoatMap:mt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:nt,dispersion:K,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:At,sheen:j,sheenColorMap:Pt,sheenRoughnessMap:_t,specularMap:qt,specularColorMap:zt,specularIntensityMap:ve,transmission:bt,transmissionMap:D,thicknessMap:at,gradientMap:H,opaque:b.transparent===!1&&b.blending===$s&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:dt,alphaHash:ht,combine:b.combine,mapUv:we&&_(b.map.channel),aoMapUv:F&&_(b.aoMap.channel),lightMapUv:vn&&_(b.lightMap.channel),bumpMapUv:Yt&&_(b.bumpMap.channel),normalMapUv:jt&&_(b.normalMap.channel),displacementMapUv:Tt&&_(b.displacementMap.channel),emissiveMapUv:ye&&_(b.emissiveMap.channel),metalnessMapUv:wt&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:ct&&_(b.anisotropyMap.channel),clearcoatMapUv:mt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(b.sheenRoughnessMap.channel),specularMapUv:qt&&_(b.specularMap.channel),specularColorMapUv:zt&&_(b.specularColorMap.channel),specularIntensityMapUv:ve&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:at&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(jt||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(we||Z),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Ct,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ce,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&te.getTransfer(b.map.colorSpace)===fe,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&te.getTransfer(b.emissiveMap.colorSpace)===fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ft&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&b.extensions.multiDraw===!0||Xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)x.push(R),x.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(S(x,b),E(x,b),x.push(n.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function S(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function E(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const x=g[b.type];let R;if(x){const V=kn[x];R=Mm.clone(V.uniforms)}else R=b.uniforms;return R}function N(b,x){let R;for(let V=0,B=h.length;V<B;V++){const Y=h[V];if(Y.cacheKey===x){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new Uv(n,x,b,r),h.push(R)),R}function A(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:N,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function kv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function zv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _u(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function vu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,_,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||zv),i.length>1&&i.sort(d||_u),s.length>1&&s.sort(d||_u)}function h(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Vv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new vu,n.set(i,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Hv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new vt};break;case"SpotLight":e={position:new w,direction:new w,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new w,halfWidth:new w,halfHeight:new w};break}return n[t.id]=e,e}}}function Gv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Wv=0;function Xv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $v(n){const t=new Hv,e=Gv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);const s=new w,r=new Zt,o=new Zt;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,E=0,y=0,N=0,A=0,C=0;c.sort(Xv);for(let b=0,x=c.length;b<x;b++){const R=c[b],V=R.color,B=R.intensity,Y=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*B,u+=V.g*B,d+=V.b*B;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],B);C++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,L=e.get(R);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[f]=L,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=R.shadow.matrix,S++}i.directional[f]=X,f++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(V).multiplyScalar(B),X.distance=Y,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[_]=X;const Q=R.shadow;if(R.map&&(i.spotLightMap[N]=R.map,N++,Q.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=Q.matrix,R.castShadow){const L=e.get(R);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=q,y++}_++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(V).multiplyScalar(B),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=X,m++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const Q=R.shadow,L=e.get(R);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=R.shadow.matrix,E++}i.point[g]=X,g++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(B),X.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==y||P.numSpotMaps!==N||P.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+N-A,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=y,P.numSpotMaps=N,P.numLightProbes=C,i.version=Wv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function xu(n){const t=new $v(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yv(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new xu(n),t.set(s,[a])):r>=o.length?(a=new xu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class jv extends Hi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qv extends Hi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
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
}`;function Jv(n,t,e){let i=new Uc;const s=new st,r=new st,o=new Re,a=new jv({depthPacking:Pp}),l=new qv,c={},h=e.maxTextureSize,u={[Bi]:un,[un]:Bi,[zn]:zn},d=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Kv,fragmentShader:Zv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ni),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==oi&&this.type===oi,Y=p===oi&&this.type!==oi;for(let q=0,X=A.length;q<X;q++){const Q=A[q],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const G=L.getFrameExtents();if(s.multiply(G),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,L.mapSize.y=r.y)),L.map===null||B===!0||Y===!0){const pt=this.type!==oi?{minFilter:sn,magFilter:sn}:{};L.map!==null&&L.map.dispose(),L.map=new hs(s.x,s.y,pt),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const J=L.getViewportCount();for(let pt=0;pt<J;pt++){const Ct=L.getViewport(pt);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),V.viewport(o),L.updateMatrices(Q,pt),i=L.getFrustum(),y(C,P,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===oi&&S(L,P),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,x,R)};function S(A,C){const P=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hs(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,P,f,_,null)}function E(A,C,P,b){let x=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=x.uuid,B=C.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let q=Y[B];q===void 0&&(q=x.clone(),Y[B]=q,C.addEventListener("dispose",N)),x=q}if(x.visible=C.visible,x.wireframe=C.wireframe,b===oi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=n.properties.get(x);V.light=P}return x}function y(A,C,P,b,x){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===oi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=t.update(A),Y=A.material;if(Array.isArray(Y)){const q=B.groups;for(let X=0,Q=q.length;X<Q;X++){const L=q[X],G=Y[L.materialIndex];if(G&&G.visible){const J=E(A,G,b,x);A.onBeforeShadow(n,A,C,P,B,J,L),n.renderBufferDirect(P,null,B,J,A,L),A.onAfterShadow(n,A,C,P,B,J,L)}}}else if(Y.visible){const q=E(A,Y,b,x);A.onBeforeShadow(n,A,C,P,B,q,null),n.renderBufferDirect(P,null,B,q,A,null),A.onAfterShadow(n,A,C,P,B,q,null)}}const V=A.children;for(let B=0,Y=V.length;B<Y;B++)y(V[B],C,P,b,x)}function N(A){A.target.removeEventListener("dispose",N);for(const P in c){const b=c[P],x=A.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const Qv={[El]:wl,[Tl]:Rl,[Al]:Pl,[Qs]:Cl,[wl]:El,[Rl]:Tl,[Pl]:Al,[Cl]:Qs};function tx(n,t){function e(){let D=!1;const at=new Re;let H=null;const Z=new Re(0,0,0,0);return{setMask:function(dt){H!==dt&&!D&&(n.colorMask(dt,dt,dt,dt),H=dt)},setLocked:function(dt){D=dt},setClear:function(dt,ht,Ft,Ce,Ye){Ye===!0&&(dt*=Ce,ht*=Ce,Ft*=Ce),at.set(dt,ht,Ft,Ce),Z.equals(at)===!1&&(n.clearColor(dt,ht,Ft,Ce),Z.copy(at))},reset:function(){D=!1,H=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,at=!1,H=null,Z=null,dt=null;return{setReversed:function(ht){if(at!==ht){const Ft=t.get("EXT_clip_control");at?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const Ce=dt;dt=null,this.setClear(Ce)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?lt(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(ht){H!==ht&&!D&&(n.depthMask(ht),H=ht)},setFunc:function(ht){if(at&&(ht=Qv[ht]),Z!==ht){switch(ht){case El:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Cl:n.depthFunc(n.GEQUAL);break;case Rl:n.depthFunc(n.GREATER);break;case Pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ht}},setLocked:function(ht){D=ht},setClear:function(ht){dt!==ht&&(at&&(ht=1-ht),n.clearDepth(ht),dt=ht)},reset:function(){D=!1,H=null,Z=null,dt=null,at=!1}}}function s(){let D=!1,at=null,H=null,Z=null,dt=null,ht=null,Ft=null,Ce=null,Ye=null;return{setTest:function(ce){D||(ce?lt(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(ce){at!==ce&&!D&&(n.stencilMask(ce),at=ce)},setFunc:function(ce,Tn,Qn){(H!==ce||Z!==Tn||dt!==Qn)&&(n.stencilFunc(ce,Tn,Qn),H=ce,Z=Tn,dt=Qn)},setOp:function(ce,Tn,Qn){(ht!==ce||Ft!==Tn||Ce!==Qn)&&(n.stencilOp(ce,Tn,Qn),ht=ce,Ft=Tn,Ce=Qn)},setLocked:function(ce){D=ce},setClear:function(ce){Ye!==ce&&(n.clearStencil(ce),Ye=ce)},reset:function(){D=!1,at=null,H=null,Z=null,dt=null,ht=null,Ft=null,Ce=null,Ye=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,E=null,y=null,N=null,A=null,C=new vt(0,0,0),P=0,b=!1,x=null,R=null,V=null,B=null,Y=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(L)[1]),X=Q>=1):L.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),X=Q>=2);let G=null,J={};const pt=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),Gt=new Re().fromArray(pt),W=new Re().fromArray(Ct);function et(D,at,H,Z){const dt=new Uint8Array(4),ht=n.createTexture();n.bindTexture(D,ht),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<H;Ft++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(at+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return ht}const St={};St[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),o.setFunc(Qs),Yt(!1),jt(Eh),lt(n.CULL_FACE),F(Ni);function lt(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function It(D,at){return u[D]!==at?(n.bindFramebuffer(D,at),u[D]=at,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=at),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=at),!0):!1}function Xt(D,at){let H=f,Z=!1;if(D){H=d.get(at),H===void 0&&(H=[],d.set(at,H));const dt=D.textures;if(H.length!==dt.length||H[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Ft=dt.length;ht<Ft;ht++)H[ht]=n.COLOR_ATTACHMENT0+ht;H.length=dt.length,Z=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,Z=!0);Z&&n.drawBuffers(H)}function we(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const Jt={[ts]:n.FUNC_ADD,[np]:n.FUNC_SUBTRACT,[ip]:n.FUNC_REVERSE_SUBTRACT};Jt[sp]=n.MIN,Jt[rp]=n.MAX;const De={[op]:n.ZERO,[ap]:n.ONE,[lp]:n.SRC_COLOR,[Sl]:n.SRC_ALPHA,[pp]:n.SRC_ALPHA_SATURATE,[dp]:n.DST_COLOR,[hp]:n.DST_ALPHA,[cp]:n.ONE_MINUS_SRC_COLOR,[bl]:n.ONE_MINUS_SRC_ALPHA,[fp]:n.ONE_MINUS_DST_COLOR,[up]:n.ONE_MINUS_DST_ALPHA,[mp]:n.CONSTANT_COLOR,[gp]:n.ONE_MINUS_CONSTANT_COLOR,[_p]:n.CONSTANT_ALPHA,[vp]:n.ONE_MINUS_CONSTANT_ALPHA};function F(D,at,H,Z,dt,ht,Ft,Ce,Ye,ce){if(D===Ni){_===!0&&(Rt(n.BLEND),_=!1);return}if(_===!1&&(lt(n.BLEND),_=!0),D!==ep){if(D!==m||ce!==b){if((p!==ts||y!==ts)&&(n.blendEquation(n.FUNC_ADD),p=ts,y=ts),ce)switch(D){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ls:n.blendFunc(n.ONE,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ls:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Th:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,E=null,N=null,A=null,C.set(0,0,0),P=0,m=D,b=ce}return}dt=dt||at,ht=ht||H,Ft=Ft||Z,(at!==p||dt!==y)&&(n.blendEquationSeparate(Jt[at],Jt[dt]),p=at,y=dt),(H!==S||Z!==E||ht!==N||Ft!==A)&&(n.blendFuncSeparate(De[H],De[Z],De[ht],De[Ft]),S=H,E=Z,N=ht,A=Ft),(Ce.equals(C)===!1||Ye!==P)&&(n.blendColor(Ce.r,Ce.g,Ce.b,Ye),C.copy(Ce),P=Ye),m=D,b=!1}function vn(D,at){D.side===zn?Rt(n.CULL_FACE):lt(n.CULL_FACE);let H=D.side===un;at&&(H=!H),Yt(H),D.blending===$s&&D.transparent===!1?F(Ni):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(D){x!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),x=D)}function jt(D){D!==Jf?(lt(n.CULL_FACE),D!==R&&(D===Eh?n.cullFace(n.BACK):D===Qf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),R=D}function Tt(D){D!==V&&(X&&n.lineWidth(D),V=D)}function ye(D,at,H){D?(lt(n.POLYGON_OFFSET_FILL),(B!==at||Y!==H)&&(n.polygonOffset(at,H),B=at,Y=H)):Rt(n.POLYGON_OFFSET_FILL)}function wt(D){D?lt(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function T(D){D===void 0&&(D=n.TEXTURE0+q-1),G!==D&&(n.activeTexture(D),G=D)}function v(D,at,H){H===void 0&&(G===null?H=n.TEXTURE0+q-1:H=G);let Z=J[H];Z===void 0&&(Z={type:void 0,texture:void 0},J[H]=Z),(Z.type!==D||Z.texture!==at)&&(G!==H&&(n.activeTexture(H),G=H),n.bindTexture(D,at||St[D]),Z.type=D,Z.texture=at)}function O(){const D=J[G];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qt(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){Gt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Gt.copy(D))}function _t(D){W.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function qt(D,at){let H=c.get(at);H===void 0&&(H=new WeakMap,c.set(at,H));let Z=H.get(D);Z===void 0&&(Z=n.getUniformBlockIndex(at,D.name),H.set(D,Z))}function zt(D,at){const Z=c.get(at).get(D);l.get(at)!==Z&&(n.uniformBlockBinding(at,Z,D.__bindingPointIndex),l.set(at,Z))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},G=null,J={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,E=null,y=null,N=null,A=null,C=new vt(0,0,0),P=0,b=!1,x=null,R=null,V=null,B=null,Y=null,Gt.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Rt,bindFramebuffer:It,drawBuffers:Xt,useProgram:we,setBlending:F,setMaterial:vn,setFlipSided:Yt,setCullFace:jt,setLineWidth:Tt,setPolygonOffset:ye,setScissorTest:wt,activeTexture:T,bindTexture:v,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:gt,texImage3D:At,updateUBOMapping:qt,uniformBlockBinding:zt,texStorage2D:Qt,texStorage3D:nt,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Pt,viewport:_t,reset:ve}}function yu(n,t,e,i){const s=ex(i);switch(e){case Td:return n*t;case Cd:return n*t;case Rd:return n*t*2;case va:return n*t/s.components*s.byteLength;case Rc:return n*t/s.components*s.byteLength;case Pd:return n*t*2/s.components*s.byteLength;case Pc:return n*t*2/s.components*s.byteLength;case Ad:return n*t*3/s.components*s.byteLength;case In:return n*t*4/s.components*s.byteLength;case Lc:return n*t*4/s.components*s.byteLength;case $o:case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jo:case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fl:case Bl:return Math.max(n,16)*Math.max(t,8)/4;case Nl:case Ol:return Math.max(n,8)*Math.max(t,8)/2;case kl:case zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ko:case nc:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ld:case sc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case rc:case oc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ex(n){switch(n){case mi:case bd:return{byteLength:1,components:1};case zr:case Ed:case Jr:return{byteLength:2,components:1};case Ac:case Cc:return{byteLength:2,components:4};case cs:case Tc:case Wn:return{byteLength:4,components:1};case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function nx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):sa("canvas")}function _(T,v,O){let K=1;const tt=wt(T);if((tt.width>O||tt.height>O)&&(K=O/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(K*tt.width),bt=Math.floor(K*tt.height);u===void 0&&(u=g(j,bt));const ct=v?g(j,bt):u;return ct.width=j,ct.height=bt,ct.getContext("2d").drawImage(T,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+bt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,v,O,K,tt=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=v;if(v===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),v===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),v===n.RGBA){const bt=tt?xa:te.getTransfer(K);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=bt===fe?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(T,v){let O;return T?v===null||v===cs||v===nr?O=n.DEPTH24_STENCIL8:v===Wn?O=n.DEPTH32F_STENCIL8:v===zr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===cs||v===nr?O=n.DEPTH_COMPONENT24:v===Wn?O=n.DEPTH_COMPONENT32F:v===zr&&(O=n.DEPTH_COMPONENT16),O}function N(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==sn&&T.minFilter!==Gn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&h.delete(v)}function C(T){const v=T.target;v.removeEventListener("dispose",C),x(v)}function P(T){const v=i.get(T);if(v.__webglInit===void 0)return;const O=T.source,K=d.get(O);if(K){const tt=K[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(T),Object.keys(K).length===0&&d.delete(O)}i.remove(T)}function b(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const O=T.source,K=d.get(O);delete K[v.__cacheKey],o.memory.textures--}function x(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let tt=0;tt<v.__webglFramebuffer[K].length;tt++)n.deleteFramebuffer(v.__webglFramebuffer[K][tt]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let K=0,tt=O.length;K<tt;K++){const j=i.get(O[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(O[K])}i.remove(T)}let R=0;function V(){R=0}function B(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function Y(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function q(T,v){const O=i.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(O,T,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function X(T,v){const O=i.get(T);if(T.version>0&&O.__version!==T.version){W(O,T,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function Q(T,v){const O=i.get(T);if(T.version>0&&O.__version!==T.version){W(O,T,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function L(T,v){const O=i.get(T);if(T.version>0&&O.__version!==T.version){et(O,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const G={[Il]:n.REPEAT,[is]:n.CLAMP_TO_EDGE,[Ul]:n.MIRRORED_REPEAT},J={[sn]:n.NEAREST,[Cp]:n.NEAREST_MIPMAP_NEAREST,[ao]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},pt={[Dp]:n.NEVER,[Bp]:n.ALWAYS,[Ip]:n.LESS,[Id]:n.LEQUAL,[Up]:n.EQUAL,[Op]:n.GEQUAL,[Np]:n.GREATER,[Fp]:n.NOTEQUAL};function Ct(T,v){if(v.type===Wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Gn||v.magFilter===Da||v.magFilter===ao||v.magFilter===ss||v.minFilter===Gn||v.minFilter===Da||v.minFilter===ao||v.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,G[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,G[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,G[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,J[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,J[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==ao&&v.minFilter!==ss||v.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Gt(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const K=v.source;let tt=d.get(K);tt===void 0&&(tt={},d.set(K,tt));const j=Y(v);if(j!==T.__cacheKey){tt[j]===void 0&&(tt[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[j].usedTimes++;const bt=tt[T.__cacheKey];bt!==void 0&&(tt[T.__cacheKey].usedTimes--,bt.usedTimes===0&&b(v)),T.__cacheKey=j,T.__webglTexture=tt[j].texture}return O}function W(T,v,O){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const tt=Gt(T,v),j=v.source;e.bindTexture(K,T.__webglTexture,n.TEXTURE0+O);const bt=i.get(j);if(j.version!==bt.__version||tt===!0){e.activeTexture(n.TEXTURE0+O);const ct=te.getPrimaries(te.workingColorSpace),mt=v.colorSpace===Ii?null:te.getPrimaries(v.colorSpace),Qt=v.colorSpace===Ii||ct===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let nt=_(v.image,!1,s.maxTextureSize);nt=ye(v,nt);const gt=r.convert(v.format,v.colorSpace),At=r.convert(v.type);let Pt=E(v.internalFormat,gt,At,v.colorSpace,v.isVideoTexture);Ct(K,v);let _t;const qt=v.mipmaps,zt=v.isVideoTexture!==!0,ve=bt.__version===void 0||tt===!0,D=j.dataReady,at=N(v,nt);if(v.isDepthTexture)Pt=y(v.format===ir,v.type),ve&&(zt?e.texStorage2D(n.TEXTURE_2D,1,Pt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Pt,nt.width,nt.height,0,gt,At,null));else if(v.isDataTexture)if(qt.length>0){zt&&ve&&e.texStorage2D(n.TEXTURE_2D,at,Pt,qt[0].width,qt[0].height);for(let H=0,Z=qt.length;H<Z;H++)_t=qt[H],zt?D&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,_t.width,_t.height,gt,At,_t.data):e.texImage2D(n.TEXTURE_2D,H,Pt,_t.width,_t.height,0,gt,At,_t.data);v.generateMipmaps=!1}else zt?(ve&&e.texStorage2D(n.TEXTURE_2D,at,Pt,nt.width,nt.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,At,nt.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,nt.width,nt.height,0,gt,At,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Pt,qt[0].width,qt[0].height,nt.depth);for(let H=0,Z=qt.length;H<Z;H++)if(_t=qt[H],v.format!==In)if(gt!==null)if(zt){if(D)if(v.layerUpdates.size>0){const dt=yu(_t.width,_t.height,v.format,v.type);for(const ht of v.layerUpdates){const Ft=_t.data.subarray(ht*dt/_t.data.BYTES_PER_ELEMENT,(ht+1)*dt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,ht,_t.width,_t.height,1,gt,Ft)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,_t.width,_t.height,nt.depth,gt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Pt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,_t.width,_t.height,nt.depth,gt,At,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,H,Pt,_t.width,_t.height,nt.depth,0,gt,At,_t.data)}else{zt&&ve&&e.texStorage2D(n.TEXTURE_2D,at,Pt,qt[0].width,qt[0].height);for(let H=0,Z=qt.length;H<Z;H++)_t=qt[H],v.format!==In?gt!==null?zt?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,H,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?D&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,_t.width,_t.height,gt,At,_t.data):e.texImage2D(n.TEXTURE_2D,H,Pt,_t.width,_t.height,0,gt,At,_t.data)}else if(v.isDataArrayTexture)if(zt){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Pt,nt.width,nt.height,nt.depth),D)if(v.layerUpdates.size>0){const H=yu(nt.width,nt.height,v.format,v.type);for(const Z of v.layerUpdates){const dt=nt.data.subarray(Z*H/nt.data.BYTES_PER_ELEMENT,(Z+1)*H/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,gt,At,dt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,At,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,nt.width,nt.height,nt.depth,0,gt,At,nt.data);else if(v.isData3DTexture)zt?(ve&&e.texStorage3D(n.TEXTURE_3D,at,Pt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,At,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,nt.width,nt.height,nt.depth,0,gt,At,nt.data);else if(v.isFramebufferTexture){if(ve)if(zt)e.texStorage2D(n.TEXTURE_2D,at,Pt,nt.width,nt.height);else{let H=nt.width,Z=nt.height;for(let dt=0;dt<at;dt++)e.texImage2D(n.TEXTURE_2D,dt,Pt,H,Z,0,gt,At,null),H>>=1,Z>>=1}}else if(qt.length>0){if(zt&&ve){const H=wt(qt[0]);e.texStorage2D(n.TEXTURE_2D,at,Pt,H.width,H.height)}for(let H=0,Z=qt.length;H<Z;H++)_t=qt[H],zt?D&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,gt,At,_t):e.texImage2D(n.TEXTURE_2D,H,Pt,gt,At,_t);v.generateMipmaps=!1}else if(zt){if(ve){const H=wt(nt);e.texStorage2D(n.TEXTURE_2D,at,Pt,H.width,H.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,At,nt)}else e.texImage2D(n.TEXTURE_2D,0,Pt,gt,At,nt);m(v)&&p(K),bt.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function et(T,v,O){if(v.image.length!==6)return;const K=Gt(T,v),tt=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const j=i.get(tt);if(tt.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+O);const bt=te.getPrimaries(te.workingColorSpace),ct=v.colorSpace===Ii?null:te.getPrimaries(v.colorSpace),mt=v.colorSpace===Ii||bt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Qt=v.isCompressedTexture||v.image[0].isCompressedTexture,nt=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!Qt&&!nt?gt[Z]=_(v.image[Z],!0,s.maxCubemapSize):gt[Z]=nt?v.image[Z].image:v.image[Z],gt[Z]=ye(v,gt[Z]);const At=gt[0],Pt=r.convert(v.format,v.colorSpace),_t=r.convert(v.type),qt=E(v.internalFormat,Pt,_t,v.colorSpace),zt=v.isVideoTexture!==!0,ve=j.__version===void 0||K===!0,D=tt.dataReady;let at=N(v,At);Ct(n.TEXTURE_CUBE_MAP,v);let H;if(Qt){zt&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,qt,At.width,At.height);for(let Z=0;Z<6;Z++){H=gt[Z].mipmaps;for(let dt=0;dt<H.length;dt++){const ht=H[dt];v.format!==In?Pt!==null?zt?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,0,0,ht.width,ht.height,Pt,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,qt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,0,0,ht.width,ht.height,Pt,_t,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,qt,ht.width,ht.height,0,Pt,_t,ht.data)}}}else{if(H=v.mipmaps,zt&&ve){H.length>0&&at++;const Z=wt(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,qt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){zt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,Pt,_t,gt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,gt[Z].width,gt[Z].height,0,Pt,_t,gt[Z].data);for(let dt=0;dt<H.length;dt++){const Ft=H[dt].image[Z].image;zt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,0,0,Ft.width,Ft.height,Pt,_t,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,qt,Ft.width,Ft.height,0,Pt,_t,Ft.data)}}else{zt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pt,_t,gt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qt,Pt,_t,gt[Z]);for(let dt=0;dt<H.length;dt++){const ht=H[dt];zt?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,0,0,Pt,_t,ht.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,qt,Pt,_t,ht.image[Z])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),j.__version=tt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function St(T,v,O,K,tt,j){const bt=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),mt=E(O.internalFormat,bt,ct,O.colorSpace),Qt=i.get(v),nt=i.get(O);if(nt.__renderTarget=v,!Qt.__hasExternalTextures){const gt=Math.max(1,v.width>>j),At=Math.max(1,v.height>>j);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,mt,gt,At,v.depth,0,bt,ct,null):e.texImage2D(tt,j,mt,gt,At,0,bt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),jt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,tt,nt.__webglTexture,0,Yt(v)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,tt,nt.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(T,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const K=v.depthTexture,tt=K&&K.isDepthTexture?K.type:null,j=y(v.stencilBuffer,tt),bt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=Yt(v);jt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,j,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,T)}else{const K=v.textures;for(let tt=0;tt<K.length;tt++){const j=K[tt],bt=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),mt=E(j.internalFormat,bt,ct,j.colorSpace),Qt=Yt(v);O&&jt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt,mt,v.width,v.height):jt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt,mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,mt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const tt=K.__webglTexture,j=Yt(v);if(v.depthTexture.format===Ys)jt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(v.depthTexture.format===ir)jt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function It(T){const v=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=K}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),lt(v.__webglDepthbuffer[K],T,!1);else{const tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),lt(v.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(T,v,O){const K=i.get(T);v!==void 0&&St(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&It(T)}function we(T){const v=T.texture,O=i.get(T),K=i.get(v);T.addEventListener("dispose",C);const tt=T.textures,j=T.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let mt=0;mt<v.mipmaps.length;mt++)O.__webglFramebuffer[ct][mt]=n.createFramebuffer()}else O.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)O.__webglFramebuffer[ct]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(bt)for(let ct=0,mt=tt.length;ct<mt;ct++){const Qt=i.get(tt[ct]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&jt(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const mt=tt[ct];O.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Qt=r.convert(mt.format,mt.colorSpace),nt=r.convert(mt.type),gt=E(mt.internalFormat,Qt,nt,mt.colorSpace,T.isXRRenderTarget===!0),At=Yt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,gt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ct(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)St(O.__webglFramebuffer[ct][mt],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else St(O.__webglFramebuffer[ct],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,mt=tt.length;ct<mt;ct++){const Qt=tt[ct],nt=i.get(Qt);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),Ct(n.TEXTURE_2D,Qt),St(O.__webglFramebuffer,T,Qt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Qt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Ct(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)St(O.__webglFramebuffer[mt],T,v,n.COLOR_ATTACHMENT0,ct,mt);else St(O.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,ct,0);m(v)&&p(ct),e.unbindTexture()}T.depthBuffer&&It(T)}function Jt(T){const v=T.textures;for(let O=0,K=v.length;O<K;O++){const tt=v[O];if(m(tt)){const j=S(T),bt=i.get(tt).__webglTexture;e.bindTexture(j,bt),p(j),e.unbindTexture()}}}const De=[],F=[];function vn(T){if(T.samples>0){if(jt(T)===!1){const v=T.textures,O=T.width,K=T.height;let tt=n.COLOR_BUFFER_BIT;const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(T),ct=v.length>1;if(ct)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Qt=i.get(v[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qt,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,tt,n.NEAREST),l===!0&&(De.length=0,F.length=0,De.push(n.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(De.push(j),F.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Qt=i.get(v[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Qt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Yt(T){return Math.min(s.maxSamples,T.samples)}function jt(T){const v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Tt(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ye(T,v){const O=T.colorSpace,K=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==ur&&O!==Ii&&(te.getTransfer(O)===fe?(K!==In||tt!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function wt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=L,this.rebindTextures=Xt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=St,this.useMultisampledRTT=jt}function ix(n,t){function e(i,s=Ii){let r;const o=te.getTransfer(s);if(i===mi)return n.UNSIGNED_BYTE;if(i===Ac)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bd)return n.BYTE;if(i===Ed)return n.SHORT;if(i===zr)return n.UNSIGNED_SHORT;if(i===Tc)return n.INT;if(i===cs)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Jr)return n.HALF_FLOAT;if(i===Td)return n.ALPHA;if(i===Ad)return n.RGB;if(i===In)return n.RGBA;if(i===Cd)return n.LUMINANCE;if(i===Rd)return n.LUMINANCE_ALPHA;if(i===Ys)return n.DEPTH_COMPONENT;if(i===ir)return n.DEPTH_STENCIL;if(i===va)return n.RED;if(i===Rc)return n.RED_INTEGER;if(i===Pd)return n.RG;if(i===Pc)return n.RG_INTEGER;if(i===Lc)return n.RGBA_INTEGER;if(i===$o||i===Yo||i===jo||i===qo)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Fl||i===Ol||i===Bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===zl||i===Vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kl||i===zl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===Gl||i===Wl||i===Xl||i===$l||i===Yl||i===jl||i===ql||i===Kl||i===Zl||i===Jl||i===Ql||i===tc||i===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===nc||i===ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ko)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ld||i===sc||i===rc||i===oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class sx extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class kt extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rx={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ax=`
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

}`;class lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ki({vertexShader:ox,fragmentShader:ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cx extends ps{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new lx,m=e.getContextAttributes();let p=null,S=null;const E=[],y=[],N=new st;let A=null;const C=new Mn;C.viewport=new Re;const P=new Mn;P.viewport=new Re;const b=[C,P],x=new sx;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=E[W];return et===void 0&&(et=new rl,E[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=E[W];return et===void 0&&(et=new rl,E[W]=et),et.getGripSpace()},this.getHand=function(W){let et=E[W];return et===void 0&&(et=new rl,E[W]=et),et.getHandSpace()};function B(W){const et=y.indexOf(W.inputSource);if(et===-1)return;const St=E[et];St!==void 0&&(St.update(W.inputSource,W.frame,c||o),St.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",q);for(let W=0;W<E.length;W++){const et=y[W];et!==null&&(y[W]=null,E[W].disconnect(et))}R=null,V=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new hs(f.framebufferWidth,f.framebufferHeight,{format:In,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,St=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?ir:Ys,St=m.stencil?nr:cs);const Rt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new hs(d.textureWidth,d.textureHeight,{format:In,type:mi,depthTexture:new Xd(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(W){for(let et=0;et<W.removed.length;et++){const St=W.removed[et],lt=y.indexOf(St);lt>=0&&(y[lt]=null,E[lt].disconnect(St))}for(let et=0;et<W.added.length;et++){const St=W.added[et];let lt=y.indexOf(St);if(lt===-1){for(let It=0;It<E.length;It++)if(It>=y.length){y.push(St),lt=It;break}else if(y[It]===null){y[It]=St,lt=It;break}if(lt===-1)break}const Rt=E[lt];Rt&&Rt.connect(St)}}const X=new w,Q=new w;function L(W,et,St){X.setFromMatrixPosition(et.matrixWorld),Q.setFromMatrixPosition(St.matrixWorld);const lt=X.distanceTo(Q),Rt=et.projectionMatrix.elements,It=St.projectionMatrix.elements,Xt=Rt[14]/(Rt[10]-1),we=Rt[14]/(Rt[10]+1),Jt=(Rt[9]+1)/Rt[5],De=(Rt[9]-1)/Rt[5],F=(Rt[8]-1)/Rt[0],vn=(It[8]+1)/It[0],Yt=Xt*F,jt=Xt*vn,Tt=lt/(-F+vn),ye=Tt*-F;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ye),W.translateZ(Tt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Rt[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const wt=Xt+Tt,T=we+Tt,v=Yt-ye,O=jt+(lt-ye),K=Jt*we/T*wt,tt=De*we/T*wt;W.projectionMatrix.makePerspective(v,O,K,tt,wt,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function G(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let et=W.near,St=W.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(St=_.depthFar)),x.near=P.near=C.near=et,x.far=P.far=C.far=St,(R!==x.near||V!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,V=x.far),C.layers.mask=W.layers.mask|2,P.layers.mask=W.layers.mask|4,x.layers.mask=C.layers.mask|P.layers.mask;const lt=W.parent,Rt=x.cameras;G(x,lt);for(let It=0;It<Rt.length;It++)G(Rt[It],lt);Rt.length===2?L(x,C,P):x.projectionMatrix.copy(C.projectionMatrix),J(W,x,lt)};function J(W,et,St){St===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(St.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Vr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let pt=null;function Ct(W,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let lt=!1;St.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let It=0;It<St.length;It++){const Xt=St[It];let we=null;if(f!==null)we=f.getViewport(Xt);else{const De=u.getViewSubImage(d,Xt);we=De.viewport,It===0&&(t.setRenderTargetTextures(S,De.colorTexture,d.ignoreDepthValues?void 0:De.depthStencilTexture),t.setRenderTarget(S))}let Jt=b[It];Jt===void 0&&(Jt=new Mn,Jt.layers.enable(It),Jt.viewport=new Re,b[It]=Jt),Jt.matrix.fromArray(Xt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Xt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(we.x,we.y,we.width,we.height),It===0&&(x.matrix.copy(Jt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(Jt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const It=u.getDepthInformation(St[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let St=0;St<E.length;St++){const lt=y[St],Rt=E[St];lt!==null&&Rt!==void 0&&Rt.update(lt,et,c||o)}pt&&pt(W,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const Gt=new Gd;Gt.setAnimationLoop(Ct),this.setAnimationLoop=function(W){pt=W},this.dispose=function(){}}}const Ki=new _i,hx=new Zt;function ux(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),E=S.envMap,y=S.envMapRotation;E&&(m.envMap.value=E,Ki.copy(y),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Ki)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const y=E.program;i.uniformBlockBinding(S,y)}function c(S,E){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));const N=E.program;i.updateUBOMapping(S,N);const A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){const E=u();S.__bindingPointIndex=E;const y=n.createBuffer(),N=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,N,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],y=S.uniforms,N=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,C=y.length;A<C;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,x=P.length;b<x;b++){const R=P[b];if(f(R,A,b,N)===!0){const V=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let q=0;q<B.length;q++){const X=B[q],Q=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,V+Y,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,E,y,N){const A=S.value,C=E+"_"+y;if(N[C]===void 0)return typeof A=="number"||typeof A=="boolean"?N[C]=A:N[C]=A.clone(),!0;{const P=N[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return N[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(S){const E=S.uniforms;let y=0;const N=16;for(let C=0,P=E.length;C<P;C++){const b=Array.isArray(E[C])?E[C]:[E[C]];for(let x=0,R=b.length;x<R;x++){const V=b[x],B=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,q=B.length;Y<q;Y++){const X=B[Y],Q=_(X),L=y%N,G=L%Q.boundary,J=L+G;y+=G,J!==0&&N-J<Q.storage&&(y+=N-J),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=Q.storage}}}const A=y%N;return A>0&&(y+=N-A),S.__size=y,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class fx{constructor(t={}){const{canvas:e=em(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=Fi,this.toneMappingExposure=1;const y=this;let N=!1,A=0,C=0,P=null,b=-1,x=null;const R=new Re,V=new Re;let B=null;const Y=new vt(0);let q=0,X=e.width,Q=e.height,L=1,G=null,J=null;const pt=new Re(0,0,X,Q),Ct=new Re(0,0,X,Q);let Gt=!1;const W=new Uc;let et=!1,St=!1;const lt=new Zt,Rt=new Zt,It=new w,Xt=new Re,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function De(){return P===null?L:1}let F=i;function vn(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),F===null){const I="webgl2";if(F=vn(I,M),F===null)throw vn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Yt,jt,Tt,ye,wt,T,v,O,K,tt,j,bt,ct,mt,Qt,nt,gt,At,Pt,_t,qt,zt,ve,D;function at(){Yt=new v_(F),Yt.init(),zt=new ix(F,Yt),jt=new d_(F,Yt,t,zt),Tt=new tx(F,Yt),jt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ye=new M_(F),wt=new kv,T=new nx(F,Yt,Tt,wt,jt,zt,ye),v=new p_(y),O=new __(y),K=new Cm(F),ve=new h_(F,K),tt=new x_(F,K,ye,ve),j=new b_(F,tt,K,ye),Pt=new S_(F,jt,T),nt=new f_(wt),bt=new Bv(y,v,O,Yt,jt,ve,nt),ct=new ux(y,wt),mt=new Vv,Qt=new Yv(Yt),At=new c_(y,v,O,Tt,j,f,l),gt=new Jv(y,j,jt),D=new dx(F,ye,jt,Tt),_t=new u_(F,Yt,ye),qt=new y_(F,Yt,ye),ye.programs=bt.programs,y.capabilities=jt,y.extensions=Yt,y.properties=wt,y.renderLists=mt,y.shadowMap=gt,y.state=Tt,y.info=ye}at();const H=new cx(y,F);this.xr=H,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Yt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Yt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(M){M!==void 0&&(L=M,this.setSize(X,Q,!1))},this.getSize=function(M){return M.set(X,Q)},this.setSize=function(M,I,k=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,Q=I,e.width=Math.floor(M*L),e.height=Math.floor(I*L),k===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(X*L,Q*L).floor()},this.setDrawingBufferSize=function(M,I,k){X=M,Q=I,L=k,e.width=Math.floor(M*k),e.height=Math.floor(I*k),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(pt)},this.setViewport=function(M,I,k,z){M.isVector4?pt.set(M.x,M.y,M.z,M.w):pt.set(M,I,k,z),Tt.viewport(R.copy(pt).multiplyScalar(L).round())},this.getScissor=function(M){return M.copy(Ct)},this.setScissor=function(M,I,k,z){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,I,k,z),Tt.scissor(V.copy(Ct).multiplyScalar(L).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(M){Tt.setScissorTest(Gt=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){J=M},this.getClearColor=function(M){return M.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(M=!0,I=!0,k=!0){let z=0;if(M){let U=!1;if(P!==null){const it=P.texture.format;U=it===Lc||it===Pc||it===Rc}if(U){const it=P.texture.type,ut=it===mi||it===cs||it===zr||it===nr||it===Ac||it===Cc,xt=At.getClearColor(),yt=At.getClearAlpha(),Lt=xt.r,Ot=xt.g,Mt=xt.b;ut?(g[0]=Lt,g[1]=Ot,g[2]=Mt,g[3]=yt,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Lt,_[1]=Ot,_[2]=Mt,_[3]=yt,F.clearBufferiv(F.COLOR,0,_))}else z|=F.COLOR_BUFFER_BIT}I&&(z|=F.DEPTH_BUFFER_BIT),k&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),mt.dispose(),Qt.dispose(),wt.dispose(),v.dispose(),O.dispose(),j.dispose(),ve.dispose(),D.dispose(),bt.dispose(),H.dispose(),H.removeEventListener("sessionstart",gh),H.removeEventListener("sessionend",_h),Wi.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=ye.autoReset,I=gt.enabled,k=gt.autoUpdate,z=gt.needsUpdate,U=gt.type;at(),ye.autoReset=M,gt.enabled=I,gt.autoUpdate=k,gt.needsUpdate=z,gt.type=U}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ft(M){const I=M.target;I.removeEventListener("dispose",Ft),Ce(I)}function Ce(M){Ye(M),wt.remove(M)}function Ye(M){const I=wt.get(M).programs;I!==void 0&&(I.forEach(function(k){bt.releaseProgram(k)}),M.isShaderMaterial&&bt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,k,z,U,it){I===null&&(I=we);const ut=U.isMesh&&U.matrixWorld.determinant()<0,xt=qf(M,I,k,z,U);Tt.setMaterial(z,ut);let yt=k.index,Lt=1;if(z.wireframe===!0){if(yt=tt.getWireframeAttribute(k),yt===void 0)return;Lt=2}const Ot=k.drawRange,Mt=k.attributes.position;let ee=Ot.start*Lt,xe=(Ot.start+Ot.count)*Lt;it!==null&&(ee=Math.max(ee,it.start*Lt),xe=Math.min(xe,(it.start+it.count)*Lt)),yt!==null?(ee=Math.max(ee,0),xe=Math.min(xe,yt.count)):Mt!=null&&(ee=Math.max(ee,0),xe=Math.min(xe,Mt.count));const Me=xe-ee;if(Me<0||Me===1/0)return;ve.setup(U,z,xt,k,yt);let rn,ie=_t;if(yt!==null&&(rn=K.get(yt),ie=qt,ie.setIndex(rn)),U.isMesh)z.wireframe===!0?(Tt.setLineWidth(z.wireframeLinewidth*De()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(U.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),Tt.setLineWidth(Et*De()),U.isLineSegments?ie.setMode(F.LINES):U.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else U.isPoints?ie.setMode(F.POINTS):U.isSprite&&ie.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ie.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ie.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Et=U._multiDrawStarts,ti=U._multiDrawCounts,se=U._multiDrawCount,An=yt?K.get(yt).bytesPerElement:1,vs=wt.get(z).currentProgram.getUniforms();for(let dn=0;dn<se;dn++)vs.setValue(F,"_gl_DrawID",dn),ie.render(Et[dn]/An,ti[dn])}else if(U.isInstancedMesh)ie.renderInstances(ee,Me,U.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ti=Math.min(k.instanceCount,Et);ie.renderInstances(ee,Me,ti)}else ie.render(ee,Me)};function ce(M,I,k){M.transparent===!0&&M.side===zn&&M.forceSinglePass===!1?(M.side=un,M.needsUpdate=!0,oo(M,I,k),M.side=Bi,M.needsUpdate=!0,oo(M,I,k),M.side=zn):oo(M,I,k)}this.compile=function(M,I,k=null){k===null&&(k=M),p=Qt.get(k),p.init(I),E.push(p),k.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),M!==k&&M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const it=U.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){const xt=it[ut];ce(xt,k,U),z.add(xt)}else ce(it,k,U),z.add(it)}),E.pop(),p=null,z},this.compileAsync=function(M,I,k=null){const z=this.compile(M,I,k);return new Promise(U=>{function it(){if(z.forEach(function(ut){wt.get(ut).currentProgram.isReady()&&z.delete(ut)}),z.size===0){U(M);return}setTimeout(it,10)}Yt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Tn=null;function Qn(M){Tn&&Tn(M)}function gh(){Wi.stop()}function _h(){Wi.start()}const Wi=new Gd;Wi.setAnimationLoop(Qn),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(M){Tn=M,H.setAnimationLoop(M),M===null?Wi.stop():Wi.start()},H.addEventListener("sessionstart",gh),H.addEventListener("sessionend",_h),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,I,P),p=Qt.get(M,E.length),p.init(I),E.push(p),Rt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,et=nt.init(this.clippingPlanes,St),m=mt.get(M,S.length),m.init(),S.push(m),H.enabled===!0&&H.isPresenting===!0){const it=y.xr.getDepthSensingMesh();it!==null&&La(it,I,-1/0,y.sortObjects)}La(M,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(G,J),Jt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Jt&&At.addToRenderList(m,M),this.info.render.frame++,et===!0&&nt.beginShadows();const k=p.state.shadowsArray;gt.render(k,M,I),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),I.isArrayCamera){const it=I.cameras;if(U.length>0)for(let ut=0,xt=it.length;ut<xt;ut++){const yt=it[ut];xh(z,U,M,yt)}Jt&&At.render(M);for(let ut=0,xt=it.length;ut<xt;ut++){const yt=it[ut];vh(m,M,yt,yt.viewport)}}else U.length>0&&xh(z,U,M,I),Jt&&At.render(M),vh(m,M,I);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,I),ve.resetDefaultState(),b=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&nt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function La(M,I,k,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||W.intersectsSprite(M)){z&&Xt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Rt);const ut=j.update(M),xt=M.material;xt.visible&&m.push(M,ut,xt,k,Xt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||W.intersectsObject(M))){const ut=j.update(M),xt=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xt.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Xt.copy(ut.boundingSphere.center)),Xt.applyMatrix4(M.matrixWorld).applyMatrix4(Rt)),Array.isArray(xt)){const yt=ut.groups;for(let Lt=0,Ot=yt.length;Lt<Ot;Lt++){const Mt=yt[Lt],ee=xt[Mt.materialIndex];ee&&ee.visible&&m.push(M,ut,ee,k,Xt.z,Mt)}}else xt.visible&&m.push(M,ut,xt,k,Xt.z,null)}}const it=M.children;for(let ut=0,xt=it.length;ut<xt;ut++)La(it[ut],I,k,z)}function vh(M,I,k,z){const U=M.opaque,it=M.transmissive,ut=M.transparent;p.setupLightsView(k),et===!0&&nt.setGlobalState(y.clippingPlanes,k),z&&Tt.viewport(R.copy(z)),U.length>0&&ro(U,I,k),it.length>0&&ro(it,I,k),ut.length>0&&ro(ut,I,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function xh(M,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new hs(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Jr:mi,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const it=p.state.transmissionRenderTarget[z.id],ut=z.viewport||R;it.setSize(ut.z,ut.w);const xt=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(Y),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Jt&&At.render(k);const yt=y.toneMapping;y.toneMapping=Fi;const Lt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),et===!0&&nt.setGlobalState(y.clippingPlanes,z),ro(M,k,z),T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Mt=0,ee=I.length;Mt<ee;Mt++){const xe=I[Mt],Me=xe.object,rn=xe.geometry,ie=xe.material,Et=xe.group;if(ie.side===zn&&Me.layers.test(z.layers)){const ti=ie.side;ie.side=un,ie.needsUpdate=!0,yh(Me,k,z,rn,ie,Et),ie.side=ti,ie.needsUpdate=!0,Ot=!0}}Ot===!0&&(T.updateMultisampleRenderTarget(it),T.updateRenderTargetMipmap(it))}y.setRenderTarget(xt),y.setClearColor(Y,q),Lt!==void 0&&(z.viewport=Lt),y.toneMapping=yt}function ro(M,I,k){const z=I.isScene===!0?I.overrideMaterial:null;for(let U=0,it=M.length;U<it;U++){const ut=M[U],xt=ut.object,yt=ut.geometry,Lt=z===null?ut.material:z,Ot=ut.group;xt.layers.test(k.layers)&&yh(xt,I,k,yt,Lt,Ot)}}function yh(M,I,k,z,U,it){M.onBeforeRender(y,I,k,z,U,it),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(y,I,k,z,M,it),U.transparent===!0&&U.side===zn&&U.forceSinglePass===!1?(U.side=un,U.needsUpdate=!0,y.renderBufferDirect(k,I,z,U,M,it),U.side=Bi,U.needsUpdate=!0,y.renderBufferDirect(k,I,z,U,M,it),U.side=zn):y.renderBufferDirect(k,I,z,U,M,it),M.onAfterRender(y,I,k,z,U,it)}function oo(M,I,k){I.isScene!==!0&&(I=we);const z=wt.get(M),U=p.state.lights,it=p.state.shadowsArray,ut=U.state.version,xt=bt.getParameters(M,U.state,it,I,k),yt=bt.getProgramCacheKey(xt);let Lt=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?O:v).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Lt===void 0&&(M.addEventListener("dispose",Ft),Lt=new Map,z.programs=Lt);let Ot=Lt.get(yt);if(Ot!==void 0){if(z.currentProgram===Ot&&z.lightsStateVersion===ut)return Sh(M,xt),Ot}else xt.uniforms=bt.getUniforms(M),M.onBeforeCompile(xt,y),Ot=bt.acquireProgram(xt,yt),Lt.set(yt,Ot),z.uniforms=xt.uniforms;const Mt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),Sh(M,xt),z.needsLights=Zf(M),z.lightsStateVersion=ut,z.needsLights&&(Mt.ambientLightColor.value=U.state.ambient,Mt.lightProbe.value=U.state.probe,Mt.directionalLights.value=U.state.directional,Mt.directionalLightShadows.value=U.state.directionalShadow,Mt.spotLights.value=U.state.spot,Mt.spotLightShadows.value=U.state.spotShadow,Mt.rectAreaLights.value=U.state.rectArea,Mt.ltc_1.value=U.state.rectAreaLTC1,Mt.ltc_2.value=U.state.rectAreaLTC2,Mt.pointLights.value=U.state.point,Mt.pointLightShadows.value=U.state.pointShadow,Mt.hemisphereLights.value=U.state.hemi,Mt.directionalShadowMap.value=U.state.directionalShadowMap,Mt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Mt.spotShadowMap.value=U.state.spotShadowMap,Mt.spotLightMatrix.value=U.state.spotLightMatrix,Mt.spotLightMap.value=U.state.spotLightMap,Mt.pointShadowMap.value=U.state.pointShadowMap,Mt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ot,z.uniformsList=null,Ot}function Mh(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Zo.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Sh(M,I){const k=wt.get(M);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function qf(M,I,k,z,U){I.isScene!==!0&&(I=we),T.resetTextureUnits();const it=I.fog,ut=z.isMeshStandardMaterial?I.environment:null,xt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ur,yt=(z.isMeshStandardMaterial?O:v).get(z.envMap||ut),Lt=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ot=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Mt=!!k.morphAttributes.position,ee=!!k.morphAttributes.normal,xe=!!k.morphAttributes.color;let Me=Fi;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Me=y.toneMapping);const rn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ie=rn!==void 0?rn.length:0,Et=wt.get(z),ti=p.state.lights;if(et===!0&&(St===!0||M!==x)){const xn=M===x&&z.id===b;nt.setState(z,M,xn)}let se=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ti.state.version||Et.outputColorSpace!==xt||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==yt||z.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==Ot||Et.morphTargets!==Mt||Et.morphNormals!==ee||Et.morphColors!==xe||Et.toneMapping!==Me||Et.morphTargetsCount!==ie)&&(se=!0):(se=!0,Et.__version=z.version);let An=Et.currentProgram;se===!0&&(An=oo(z,I,U));let vs=!1,dn=!1,vr=!1;const Se=An.getUniforms(),On=Et.uniforms;if(Tt.useProgram(An.program)&&(vs=!0,dn=!0,vr=!0),z.id!==b&&(b=z.id,dn=!0),vs||x!==M){Tt.buffers.depth.getReversed()?(lt.copy(M.projectionMatrix),im(lt),sm(lt),Se.setValue(F,"projectionMatrix",lt)):Se.setValue(F,"projectionMatrix",M.projectionMatrix),Se.setValue(F,"viewMatrix",M.matrixWorldInverse);const yi=Se.map.cameraPosition;yi!==void 0&&yi.setValue(F,It.setFromMatrixPosition(M.matrixWorld)),jt.logarithmicDepthBuffer&&Se.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Se.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,dn=!0,vr=!0)}if(U.isSkinnedMesh){Se.setOptional(F,U,"bindMatrix"),Se.setOptional(F,U,"bindMatrixInverse");const xn=U.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Se.setValue(F,"boneTexture",xn.boneTexture,T))}U.isBatchedMesh&&(Se.setOptional(F,U,"batchingTexture"),Se.setValue(F,"batchingTexture",U._matricesTexture,T),Se.setOptional(F,U,"batchingIdTexture"),Se.setValue(F,"batchingIdTexture",U._indirectTexture,T),Se.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&Se.setValue(F,"batchingColorTexture",U._colorsTexture,T));const xr=k.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Pt.update(U,k,An),(dn||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,Se.setValue(F,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(On.envMap.value=yt,On.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(On.envMapIntensity.value=I.environmentIntensity),dn&&(Se.setValue(F,"toneMappingExposure",y.toneMappingExposure),Et.needsLights&&Kf(On,vr),it&&z.fog===!0&&ct.refreshFogUniforms(On,it),ct.refreshMaterialUniforms(On,z,L,Q,p.state.transmissionRenderTarget[M.id]),Zo.upload(F,Mh(Et),On,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zo.upload(F,Mh(Et),On,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Se.setValue(F,"center",U.center),Se.setValue(F,"modelViewMatrix",U.modelViewMatrix),Se.setValue(F,"normalMatrix",U.normalMatrix),Se.setValue(F,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xn=z.uniformsGroups;for(let yi=0,Mi=xn.length;yi<Mi;yi++){const bh=xn[yi];D.update(bh,An),D.bind(bh,An)}}return An}function Kf(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Zf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,I,k){wt.get(M.texture).__webglTexture=I,wt.get(M.depthTexture).__webglTexture=k;const z=wt.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const k=wt.get(M);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,k=0){P=M,A=I,C=k;let z=!0,U=null,it=!1,ut=!1;if(M){const yt=wt.get(M);if(yt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),z=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(yt.__hasExternalTextures)T.rebindTextures(M,wt.get(M.texture).__webglTexture,wt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Mt=M.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&wt.has(Mt)&&(M.width!==Mt.image.width||M.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ut=!0);const Ot=wt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[I])?U=Ot[I][k]:U=Ot[I],it=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?U=wt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?U=Ot[k]:U=Ot,R.copy(M.viewport),V.copy(M.scissor),B=M.scissorTest}else R.copy(pt).multiplyScalar(L).floor(),V.copy(Ct).multiplyScalar(L).floor(),B=Gt;if(Tt.bindFramebuffer(F.FRAMEBUFFER,U)&&z&&Tt.drawBuffers(M,U),Tt.viewport(R),Tt.scissor(V),Tt.setScissorTest(B),it){const yt=wt.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,k)}else if(ut){const yt=wt.get(M.texture),Lt=I||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,yt.__webglTexture,k||0,Lt)}b=-1},this.readRenderTargetPixels=function(M,I,k,z,U,it,ut){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Tt.bindFramebuffer(F.FRAMEBUFFER,xt);try{const yt=M.texture,Lt=yt.format,Ot=yt.type;if(!jt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&k>=0&&k<=M.height-U&&F.readPixels(I,k,z,U,zt.convert(Lt),zt.convert(Ot),it)}finally{const yt=P!==null?wt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(M,I,k,z,U,it,ut){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const yt=M.texture,Lt=yt.format,Ot=yt.type;if(!jt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-z&&k>=0&&k<=M.height-U){Tt.bindFramebuffer(F.FRAMEBUFFER,xt);const Mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.bufferData(F.PIXEL_PACK_BUFFER,it.byteLength,F.STREAM_READ),F.readPixels(I,k,z,U,zt.convert(Lt),zt.convert(Ot),0);const ee=P!==null?wt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,ee);const xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await nm(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,it),F.deleteBuffer(Mt),F.deleteSync(xe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,k=0){M.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(M.image.width*z),it=Math.floor(M.image.height*z),ut=I!==null?I.x:0,xt=I!==null?I.y:0;T.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,ut,xt,U,it),Tt.unbindTexture()},this.copyTextureToTexture=function(M,I,k=null,z=null,U=0){M.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],I=arguments[2],U=arguments[3]||0,k=null);let it,ut,xt,yt,Lt,Ot,Mt,ee,xe;const Me=M.isCompressedTexture?M.mipmaps[U]:M.image;k!==null?(it=k.max.x-k.min.x,ut=k.max.y-k.min.y,xt=k.isBox3?k.max.z-k.min.z:1,yt=k.min.x,Lt=k.min.y,Ot=k.isBox3?k.min.z:0):(it=Me.width,ut=Me.height,xt=Me.depth||1,yt=0,Lt=0,Ot=0),z!==null?(Mt=z.x,ee=z.y,xe=z.z):(Mt=0,ee=0,xe=0);const rn=zt.convert(I.format),ie=zt.convert(I.type);let Et;I.isData3DTexture?(T.setTexture3D(I,0),Et=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),Et=F.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),Et=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const ti=F.getParameter(F.UNPACK_ROW_LENGTH),se=F.getParameter(F.UNPACK_IMAGE_HEIGHT),An=F.getParameter(F.UNPACK_SKIP_PIXELS),vs=F.getParameter(F.UNPACK_SKIP_ROWS),dn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Me.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ot);const vr=M.isDataArrayTexture||M.isData3DTexture,Se=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const On=wt.get(M),xr=wt.get(I),xn=wt.get(On.__renderTarget),yi=wt.get(xr.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,xn.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Mi=0;Mi<xt;Mi++)vr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(M).__webglTexture,U,Ot+Mi),M.isDepthTexture?(Se&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(I).__webglTexture,U,xe+Mi),F.blitFramebuffer(yt,Lt,it,ut,Mt,ee,it,ut,F.DEPTH_BUFFER_BIT,F.NEAREST)):Se?F.copyTexSubImage3D(Et,U,Mt,ee,xe+Mi,yt,Lt,it,ut):F.copyTexSubImage2D(Et,U,Mt,ee,xe+Mi,yt,Lt,it,ut);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Se?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Et,U,Mt,ee,xe,it,ut,xt,rn,ie,Me.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(Et,U,Mt,ee,xe,it,ut,xt,rn,Me.data):F.texSubImage3D(Et,U,Mt,ee,xe,it,ut,xt,rn,ie,Me):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,Mt,ee,it,ut,rn,ie,Me.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,Mt,ee,Me.width,Me.height,rn,Me.data):F.texSubImage2D(F.TEXTURE_2D,U,Mt,ee,it,ut,rn,ie,Me);F.pixelStorei(F.UNPACK_ROW_LENGTH,ti),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,se),F.pixelStorei(F.UNPACK_SKIP_PIXELS,An),F.pixelStorei(F.UNPACK_SKIP_ROWS,vs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,dn),U===0&&I.generateMipmaps&&F.generateMipmap(Et),Tt.unbindTexture()},this.copyTextureToTexture3D=function(M,I,k=null,z=null,U=0){return M.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,M=arguments[2],I=arguments[3],U=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,k,z,U)},this.initRenderTarget=function(M){wt.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Tt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class px extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new w;class ra{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ra(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class us extends Hi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Is;const Er=new w,Us=new w,Ns=new w,Fs=new st,wr=new st,Kd=new Zt,Ro=new w,Tr=new w,Po=new w,Mu=new st,ol=new st,Su=new st;class rr extends Le{constructor(t=new us){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mx(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new ra(i,3,0,!1)),Is.setAttribute("uv",new ra(i,2,3,!1))}this.geometry=Is,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Kd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ns.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Lo(Ro.set(-.5,-.5,0),Ns,o,Us,s,r),Lo(Tr.set(.5,-.5,0),Ns,o,Us,s,r),Lo(Po.set(.5,.5,0),Ns,o,Us,s,r),Mu.set(0,0),ol.set(1,0),Su.set(1,1);let a=t.ray.intersectTriangle(Ro,Tr,Po,!1,Er);if(a===null&&(Lo(Tr.set(-.5,.5,0),Ns,o,Us,s,r),ol.set(0,1),a=t.ray.intersectTriangle(Ro,Po,Tr,!1,Er),a===null))return;const l=t.ray.origin.distanceTo(Er);l<t.near||l>t.far||e.push({distance:l,point:Er.clone(),uv:Sn.getInterpolation(Er,Ro,Tr,Po,Mu,ol,Su,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lo(n,t,e,i,s,r){Fs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(wr.x=r*Fs.x-s*Fs.y,wr.y=s*Fs.x+r*Fs.y):wr.copy(Fs),n.copy(t),n.x+=wr.x,n.y+=wr.y,n.applyMatrix4(Kd)}class Zd extends tn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=sn,h=sn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bu extends Ie{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Os=new Zt,Eu=new Zt,Do=[],wu=new ms,gx=new Zt,Ar=new ft,Cr=new gs;class rs extends ft{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ms),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),wu.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(wu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),Cr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),Eu.multiplyMatrices(i,Os),Ar.matrixWorld=Eu,Ar.raycast(t,Do);for(let o=0,a=Do.length;o<a;o++){const l=Do[o];l.instanceId=r,l.object=this,e.push(l)}Do.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zd(new Float32Array(s*this.count),s,this.count,va,Wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Jd extends Hi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oa=new w,aa=new w,Tu=new Zt,Rr=new Qr,Io=new gs,al=new w,Au=new w;class _x extends Le{constructor(t=new Ae,e=new Jd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)oa.fromBufferAttribute(e,s-1),aa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=oa.distanceTo(aa);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,t.ray.intersectsSphere(Io)===!1)return;Tu.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(Tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),S=h.getX(_+1),E=Uo(this,t,Rr,l,p,S);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Uo(this,t,Rr,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Uo(this,t,Rr,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Uo(this,t,Rr,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(oa.fromBufferAttribute(o,s),aa.fromBufferAttribute(o,r),e.distanceSqToSegment(oa,aa,al,Au)>i)return;al.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(al);if(!(l<t.near||l>t.far))return{distance:l,point:Au.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Cu=new w,Ru=new w;class vx extends _x{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Cu.fromBufferAttribute(e,s),Ru.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Cu.distanceTo(Ru);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class or extends Hi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pu=new Zt,cc=new Qr,No=new gs,Fo=new w;class Hr extends Le{constructor(t=new Ae,e=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Pu.copy(s).invert(),cc.copy(t.ray).applyMatrix4(Pu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Fo.fromBufferAttribute(u,m),Lu(Fo,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Fo.fromBufferAttribute(u,g),Lu(Fo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lu(n,t,e,i,s,r,o){const a=cc.distanceSqToPoint(n);if(a<e){const l=new w;cc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class xx extends tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new w,s=[],r=[],o=[],a=new w,l=new Zt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ve(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ve(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends Kn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yx extends Fc{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Oc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Oo=new w,ll=new Oc,cl=new Oc,hl=new Oc;class Mx extends Kn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new w){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Oo.subVectors(s[0],s[1]).add(s[0]),c=Oo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Oo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Oo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ll.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),cl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),hl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ll.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),cl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),hl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(ll.calc(l),cl.calc(l),hl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Du(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Sx(n,t){const e=1-n;return e*e*t}function bx(n,t){return 2*(1-n)*n*t}function Ex(n,t){return n*n*t}function Br(n,t,e,i){return Sx(n,t)+bx(n,e)+Ex(n,i)}function wx(n,t){const e=1-n;return e*e*e*t}function Tx(n,t){const e=1-n;return 3*e*e*n*t}function Ax(n,t){return 3*(1-n)*n*n*t}function Cx(n,t){return n*n*n*t}function kr(n,t,e,i,s){return wx(n,t)+Tx(n,e)+Ax(n,i)+Cx(n,s)}class Qd extends Kn{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rx extends Kn{constructor(t=new w,e=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new w){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y),kr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tf extends Kn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Px extends Kn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ef extends Kn{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lx extends Kn{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y),Br(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nf extends Kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Du(a,l.x,c.x,h.x,u.x),Du(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Iu=Object.freeze({__proto__:null,ArcCurve:yx,CatmullRomCurve3:Mx,CubicBezierCurve:Qd,CubicBezierCurve3:Rx,EllipseCurve:Fc,LineCurve:tf,LineCurve3:Px,QuadraticBezierCurve:ef,QuadraticBezierCurve3:Lx,SplineCurve:nf});class Dx extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Iu[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Iu[s.type]().fromJSON(s))}return this}}class Ix extends Dx{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new tf(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new ef(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Qd(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new nf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Fc(t,e,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bc extends Ae{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ve(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new w,d=new st,f=new w,g=new w,_=new w;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=e;S++){const E=i+S*h*s,y=Math.sin(E),N=Math.cos(E);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*y,u.y=t[A].y,u.z=t[A].x*N,o.push(u.x,u.y,u.z),d.x=S/e,d.y=A/(t.length-1),a.push(d.x,d.y);const C=l[3*A+0]*y,P=l[3*A+1],b=l[3*A+0]*N;c.push(C,P,b)}}for(let S=0;S<e;S++)for(let E=0;E<t.length-1;E++){const y=E+S*t.length,N=y,A=y+t.length,C=y+t.length+1,P=y+1;r.push(N,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("uv",new de(a,2)),this.setAttribute("normal",new de(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.points,t.segments,t.phiStart,t.phiLength)}}class kc extends Bc{constructor(t=1,e=1,i=4,s=8){const r=new Ix;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new kc(t.radius,t.length,t.capSegments,t.radialSegments)}}class zc extends Ae{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new w,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vi extends Ae{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;S(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function S(){const y=new w,N=new w;let A=0;const C=(e-t)/i;for(let P=0;P<=r;P++){const b=[],x=P/r,R=x*(e-t)+t;for(let V=0;V<=s;V++){const B=V/s,Y=B*l+a,q=Math.sin(Y),X=Math.cos(Y);N.x=R*q,N.y=-x*i+m,N.z=R*X,u.push(N.x,N.y,N.z),y.set(q,C,X).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-x),b.push(g++)}_.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const x=_[b][P],R=_[b+1][P],V=_[b+1][P+1],B=_[b][P+1];(t>0||b!==0)&&(h.push(x,R,B),A+=3),(e>0||b!==r-1)&&(h.push(R,V,B),A+=3)}c.addGroup(p,A,0),p+=A}function E(y){const N=g,A=new st,C=new w;let P=0;const b=y===!0?t:e,x=y===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const R=g;for(let V=0;V<=s;V++){const Y=V/s*l+a,q=Math.cos(Y),X=Math.sin(Y);C.x=b*X,C.y=m*x,C.z=b*q,u.push(C.x,C.y,C.z),d.push(0,x,0),A.x=q*.5+.5,A.y=X*.5*x+.5,f.push(A.x,A.y),g++}for(let V=0;V<s;V++){const B=N+V,Y=R+V;y===!0?h.push(Y,Y+1,B):h.push(Y+1,Y,B),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nn extends vi{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Nn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vc extends Ae{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const E=new w,y=new w,N=new w;for(let A=0;A<e.length;A+=3)f(e[A+0],E),f(e[A+1],y),f(e[A+2],N),l(E,y,N,S)}function l(S,E,y,N){const A=N+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const b=S.clone().lerp(y,P/A),x=E.clone().lerp(y,P/A),R=A-P;for(let V=0;V<=R;V++)V===0&&P===A?C[P][V]=b:C[P][V]=b.clone().lerp(x,V/R)}for(let P=0;P<A;P++)for(let b=0;b<2*(A-P)-1;b++){const x=Math.floor(b/2);b%2===0?(d(C[P][x+1]),d(C[P+1][x]),d(C[P][x])):(d(C[P][x+1]),d(C[P+1][x+1]),d(C[P+1][x]))}}function c(S){const E=new w;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(S),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){const S=new w;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const y=m(S)/2/Math.PI+.5,N=p(S)/Math.PI+.5;o.push(y,1-N)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const E=o[S+0],y=o[S+2],N=o[S+4],A=Math.max(E,y,N),C=Math.min(E,y,N);A>.9&&C<.1&&(E<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),N<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,E){const y=S*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function g(){const S=new w,E=new w,y=new w,N=new w,A=new st,C=new st,P=new st;for(let b=0,x=0;b<r.length;b+=9,x+=6){S.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),A.set(o[x+0],o[x+1]),C.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),N.copy(S).add(E).add(y).divideScalar(3);const R=m(N);_(A,x+0,S,R),_(C,x+2,E,R),_(P,x+4,y,R)}}function _(S,E,y,N){N<0&&S.x===1&&(o[E]=S.x-1),y.x===0&&y.z===0&&(o[E]=N/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.vertices,t.indices,t.radius,t.details)}}class Hc extends Vc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hc(t.radius,t.detail)}}class oe extends Ae{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new w,d=new w,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const S=[],E=p/i;let y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let N=0;N<=e;N++){const A=N/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+y,1-E),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const E=h[p][S+1],y=h[p][S],N=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&f.push(E,y,A),(p!==i-1||l<Math.PI)&&f.push(y,N,A)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fe extends Ae{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new w,u=new w,d=new w;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class sf extends Hi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new vt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dd,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class rf extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ux extends rf{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ul=new Zt,Uu=new w,Nu=new w;class Nx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uc,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fx extends Nx{constructor(){super(new Wd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ox extends rf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Fx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fu(){return performance.now()}const Ou=new Zt;class kx{constructor(t,e,i=0,s=1/0){this.ray=new Qr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ou),this}intersectObject(t,e=!0,i=[]){return hc(t,this,i,e),i.sort(Bu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)hc(t[s],this,i,e);return i.sort(Bu),i}}function Bu(n,t){return n.distance-t.distance}function hc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)hc(r[o],t,e,!0)}}class ku{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class zx extends ps{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);const zu={type:"change"},Gc={type:"start"},of={type:"end"},Bo=new Qr,Vu=new Di,Vx=Math.cos(70*bn.DEG2RAD),ke=new w,on=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dl=1e-6;class Hx extends zx{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new gi,this._lastTargetPosition=new w,this._quat=new gi().setFromUnitVectors(t.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ku,this._sphericalDelta=new ku,this._scale=1,this._panOffset=new w,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new w,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Wx.bind(this),this._onPointerDown=Gx.bind(this),this._onPointerUp=Xx.bind(this),this._onContextMenu=Jx.bind(this),this._onMouseWheel=jx.bind(this),this._onKeyDown=qx.bind(this),this._onTouchStart=Kx.bind(this),this._onTouchMove=Zx.bind(this),this._onMouseDown=$x.bind(this),this._onMouseMove=Yx.bind(this),this._interceptControlDown=Qx.bind(this),this._interceptControlUp=ty.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zu),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ke.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new w(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new w(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bo.origin.copy(this.object.position),Bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bo.direction))<Vx?this.object.lookAt(this.target):(Vu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bo.intersectPlane(Vu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>dl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dl||this._lastTargetPosition.distanceToSquared(this.target)>dl?(this.dispatchEvent(zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ke.copy(s).sub(this.target);let r=ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new st,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Gx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Wx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Xx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(of),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $x(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case Xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case Xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Gc)}function Yx(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function jx(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(Gc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(of))}function qx(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Kx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ui.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case Ui.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(Gc)}function Zx(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function Jx(n){this.enabled!==!1&&n.preventDefault()}function Qx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ty(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ey(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ae;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Hu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Hu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Hu(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ie(o,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}let Zi=null;function ny(){return Zi||(Zi=new Zd(new Uint8Array([110,185,255]),3,1,va),Zi.minFilter=sn,Zi.magFilter=sn,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}const Gu=new Map;function Ht(n){let t=Gu.get(n);return t||(t=new sf({color:n,gradientMap:ny()}),Gu.set(n,t)),t}function Gr(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const iy=new w(0,1,0);function Wr(n,t,e,i=0){n.position.copy(t).multiplyScalar(e),n.quaternion.setFromUnitVectors(iy,t),n.rotateY(i)}function Zn(n,t=128){const e=document.createElement("canvas");e.width=e.height=t;const i=e.getContext("2d");n(i,t);const s=new xx(e);return s.colorSpace=gn,s}function fr(n){n.updateMatrixWorld(!0);const t=n.matrixWorld.clone().invert(),e=new Map,i=new Zt,s=(o,a)=>{for(const l of o.children)if(!(a&&l.userData.keep)){if(l instanceof ft&&!Array.isArray(l.material)&&l.visible){const c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();for(const u of Object.keys(c.attributes))["position","normal","uv"].includes(u)||c.deleteAttribute(u);c.applyMatrix4(i.multiplyMatrices(t,l.matrixWorld));const h=e.get(l.material)??[];h.push(c),e.set(l.material,h)}s(l,!1)}};s(n,!0);const r=n.children.filter(o=>o.userData.keep);n.clear();for(const o of r)n.add(o);for(const[o,a]of e){const l=ey(a,!1);if(a.forEach(h=>h.dispose()),!l)continue;const c=new ft(l,o);c.userData.merged=!0,n.add(c)}}function sy(n){n.traverse(t=>{t.userData.merged&&t instanceof ft&&t.geometry.dispose()})}const ry=()=>Zn((n,t)=>{n.translate(t/2,t/2+6),n.beginPath();const e=t/128;n.moveTo(0,34*e),n.bezierCurveTo(-60*e,-6*e,-36*e,-56*e,0,-24*e),n.bezierCurveTo(36*e,-56*e,60*e,-6*e,0,34*e),n.fillStyle="#ff86b8",n.strokeStyle="#ffffff",n.lineWidth=8*e,n.fill(),n.stroke()}),oy=()=>Zn((n,t)=>{const e=t/2,i=n.createRadialGradient(e,e,0,e,e,e);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.25,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.beginPath();for(let s=0;s<8;s++){const r=s/8*Math.PI*2,o=s%2===0?e:e*.22;n.lineTo(e+Math.cos(r)*o,e+Math.sin(r)*o)}n.closePath(),n.fill()}),ko=["#fff6a8","#ffd6f0","#c8f7ff","#ffffff","#e2d4ff"];class ay{constructor(t){this.scene=t,this.parts=[],this.drops=[],this.heart=ry(),this.star=oy(),this.zTex=Zn((e,i)=>{e.font=`bold ${i*.8}px ui-rounded, system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.lineWidth=i*.08,e.strokeStyle="#8f7fd0",e.strokeText("z",i/2,i/2),e.fillStyle="#ffffff",e.fillText("z",i/2,i/2)})}spawn(t,e,i,s,r,o,a,l=0){const c=new rr(new us({map:t,color:e,transparent:!0,depthWrite:!1}));c.position.copy(i),c.scale.setScalar(a),c.renderOrder=5,this.scene.add(c),this.parts.push({sprite:c,vel:s,grav:r,life:o,max:o,size:a,spin:l})}hearts(t,e,i=5){for(let s=0;s<i;s++){const r=new w().randomDirection().multiplyScalar(.18),o=e.clone().multiplyScalar(.35+Math.random()*.25).add(r);this.spawn(this.heart,"#ffffff",t.clone().add(r.clone().multiplyScalar(.3)),o,e.clone().multiplyScalar(.05),1.2+Math.random()*.4,.11+Math.random()*.05)}}sparkles(t,e,i=30,s=.9){for(let r=0;r<i;r++){const a=new w().randomDirection().multiplyScalar(s*(.4+Math.random()*.8)).addScaledVector(e,.3),l=ko[Math.floor(Math.random()*ko.length)];this.spawn(this.star,l,t.clone(),a,e.clone().multiplyScalar(-.6),.9+Math.random()*.8,.08+Math.random()*.1,(Math.random()-.5)*8)}}twinkle(t,e){const i=t.clone().add(new w().randomDirection().multiplyScalar(.18));this.spawn(this.star,ko[Math.floor(Math.random()*ko.length)],i,e.clone().multiplyScalar(.12),new w,.9,.07,3)}zzz(t,e){const i=new w().randomDirection().multiplyScalar(.04);this.spawn(this.zTex,"#ffffff",t.clone().add(i),e.clone().multiplyScalar(.16).add(i),new w,2.2,.1+Math.random()*.05,.4)}berry(t,e,i){const s=new kt,r=new ft(new oe(.055,16,12),Ht("#ff6f91"));r.scale.set(1,.9,1);const o=new ft(new Nn(.03,.03,6),Ht("#7fcf9a"));o.position.y=.055,o.rotation.x=Math.PI,s.add(r,o),this.scene.add(s),this.drops.push({obj:s,t:0,target:t,up:e,onLand:i})}update(t){for(let e=this.parts.length-1;e>=0;e--){const i=this.parts[e];if(i.life-=t,i.life<=0){this.scene.remove(i.sprite),i.sprite.material.dispose(),this.parts.splice(e,1);continue}i.vel.addScaledVector(i.grav,t),i.vel.multiplyScalar(1-t*1.2),i.sprite.position.addScaledVector(i.vel,t);const s=i.life/i.max;i.sprite.material.opacity=Math.min(1,s*2.5),i.sprite.material.rotation+=i.spin*t;const r=s>.85?(1-s)/.15:1;i.sprite.scale.setScalar(i.size*r)}for(let e=this.drops.length-1;e>=0;e--){const i=this.drops[e];i.t+=t;const s=Math.min(1,i.t/.45),r=s*s,o=i.target();i.obj.position.copy(o).addScaledVector(i.up(),.6*(1-r)),i.obj.quaternion.setFromUnitVectors(new w(0,1,0),i.up()),i.obj.rotateY(i.t*6),s>=1&&(this.scene.remove(i.obj),this.drops.splice(e,1),i.onLand())}}}const ge=2,Xr=.17,ly={spring:["#c2ecc4","#d9f7d2","#f3f6cb"],summer:["#b3e4b6","#caf0c0","#eef6cf"],autumn:["#d4e6b8","#e6ecbd","#f6dfb4"],winter:["#d5e9df","#e7f2ee","#ece7f6"]},cy={spring:["#a8e6a3","#b9efb0","#c8f3c2"],summer:["#86d3a0","#95d5b2","#a7e8bd"],autumn:["#ffb37a","#ffd27a","#f7a09a"],winter:["#e9e4f5","#dfe8f5","#f2eef8"]},hy={spring:["#ffc8dd","#ffd6e8","#f8c4f0"],summer:["#b5ead7","#c4f0d6","#a9e6c3"],autumn:["#ff9f80","#ffbc8a","#ec98ad"],winter:["#ffffff","#f6f1ff","#fbf4fa"]};function uy(n){const t=new oe(ge,96,64),e=t.attributes.position,i=new Float32Array(e.count*3),[s,r,o]=ly[n].map(h=>new vt(h)),a=new vt;for(let h=0;h<e.count;h++){const u=e.getX(h),d=e.getY(h),f=e.getZ(h),g=Math.sin(u*2.1+1.3)*Math.sin(d*2.7+.4)*Math.sin(f*1.9+2.2),_=Math.sin(u*4.3-d*1.7)*Math.cos(f*3.9+d*2.1);a.copy(s).lerp(r,bn.smoothstep(g,.05,.25)),a.lerp(o,bn.smoothstep(_,.55,.8)*.6),i.set([a.r,a.g,a.b],h*3)}t.setAttribute("color",new Ie(i,3));const l=Ht("#ffffff").clone();l.vertexColors=!0;const c=new ft(t,l);return c.name="planet",c}const Ln=new oe(1,18,12),fi=new oe(1,12,8),Vs=new Nn(1,1,16),Vn=new vi(1,1,1,10),uc=new oe(1,16,10,0,Math.PI*2,0,Math.PI/2);function Wt(n,t,e,i,s=[0,0,0]){const r=new ft(n,typeof t=="string"?Ht(t):t);return r.position.set(...e),r.scale.set(...i),r.rotation.set(...s),r}function Wu(n){return n.map(t=>{const e=Ht(t).clone();return e.color.set(t),e})}function dy(n){const t=new kt,e=["#ffafcc","#cdb4db","#ffd6a5","#a0c4ff","#fdffb6","#ffffff"][Math.floor(n()*6)],i=new kt;i.add(Wt(Vn,"#88c9a1",[0,.04,0],[.006,.08,.006])),i.add(Wt(Ln,"#95d5b2",[.012,.035,0],[.012,.004,.007])),t.add(i);const s=new kt;s.position.y=.085;const r=[];for(let o=0;o<5;o++){const a=o/5*Math.PI*2,l=new kt;l.rotation.y=-a;const c=Wt(Ln,"#ffffff",[.022,0,0],[.018,.01,.018]);c.userData.petalColor=e,l.add(c),s.add(l),r.push(l)}return s.add(Wt(Ln,"#ffe066",[0,.005,0],[.014,.012,.014])),t.add(s),t.userData.flower={stem:i,head:s,petals:r},t}function fy(){const n=new oe(ge+.006,32,6,0,Math.PI*2,0,Xr);return new ft(n,Ht("#b9dcff"))}const af=Ht("#ffffff").clone();function py(n){const t=new kt,e=3+Math.floor(n()*2);for(let i=0;i<e;i++){const s=.13+n()*.08,r=new ft(Ln,af);r.position.set((i-e/2)*.16,(n()-.5)*.06,(n()-.5)*.08),r.scale.set(s,s*.8,s),t.add(r)}return fr(t),t}function my(n,t,e=.04){for(const i of t){if(i.angleTo(n)>=Xr+e)continue;const r=n.clone().addScaledVector(i,-i.dot(n));r.lengthSq()<1e-8&&r.set(1,0,0).cross(i);const o=Xr+e;n.copy(i).multiplyScalar(Math.cos(o)).addScaledVector(r.normalize(),Math.sin(o))}return n}function fl(n){const t=n()*2-1,e=n()*Math.PI*2,i=Math.sqrt(1-t*t);return new w(i*Math.cos(e),t,i*Math.sin(e))}function lf(n=1){const t=new kt,e=.05*n;for(let i=0;i<5;i++){const s=i/5*Math.PI*2;t.add(Wt(fi,i%2?"#ffb26b":"#ffa45c",[Math.cos(s)*e*.45,e*.75,Math.sin(s)*e*.45],[e*.7,e*.75,e*.7]))}return t.add(Wt(Vn,"#8a6b4f",[0,e*1.5,0],[e*.12,e*.4,e*.12],[0,0,.2])),t.add(Wt(fi,"#7fcf9a",[e*.25,e*1.45,0],[e*.3,e*.08,e*.18],[0,0,-.4])),t}function gy(n){const t=new kt,e=["#ffb37a","#f7a09a","#ffd27a","#e8957c"];for(let i=0;i<7;i++){const s=n()*Math.PI*2,r=n()*.05;t.add(Wt(fi,e[i%4],[Math.cos(s)*r,.008+n()*.012,Math.sin(s)*r],[.03,.008,.02],[0,n()*3,0]))}return t}function _y(){const n=new kt;n.add(Wt(fi,"#ffffff",[0,.06,0],[.07,.065,.07])),n.add(Wt(fi,"#ffffff",[0,.155,0],[.048,.046,.048])),n.add(Wt(Vs,"#ffad7a",[0,.155,.055],[.008,.03,.008],[Math.PI/2,0,0]));for(const e of[-1,1])n.add(Wt(fi,"#3d3047",[.016*e,.17,.042],[.006,.006,.006]));const t=new ft(new Fe(.042,.011,6,18),Ht("#ff9aa2"));return t.position.y=.118,t.rotation.x=Math.PI/2,n.add(t),n.add(Wt(Vn,"#3d3047",[0,.205,0],[.03,.03,.03])),n}function vy(n){const t=new kt,e=["#ff9ec7","#ffe066","#cdb4db","#ffb3a7"];for(let i=0;i<3;i++){const s=(i-1)*.03,r=(n()-.5)*.03,o=.07+n()*.03;t.add(Wt(Vn,"#7fc79a",[s,o/2,r],[.004,o,.004])),t.add(Wt(uc,e[Math.floor(n()*4)],[s,o+.014,r],[.016,-.026,.016]))}return t}function xy(){const n=new kt;n.add(Wt(Vn,"#7fc79a",[0,.1,0],[.007,.2,.007])),n.add(Wt(fi,"#9fd8a8",[.02,.08,0],[.02,.005,.012],[0,0,.4]));const t=new kt;t.position.set(0,.2,.01),t.rotation.x=.5;for(let e=0;e<10;e++){const i=e/10*Math.PI*2;t.add(Wt(fi,"#ffd75e",[Math.cos(i)*.03,Math.sin(i)*.03,0],[.016,.009,.004],[0,0,i]))}return t.add(Wt(fi,"#a8775a",[0,0,.004],[.022,.022,.008])),n.add(t),n}function yy(n,t="spring"){const e=Gr(20261113),i=uy(t);n.add(i);const s=new rr(new us({map:Zn((L,G)=>{const J=L.createRadialGradient(G/2,G/2,G*.2,G/2,G/2,G/2);J.addColorStop(0,"rgba(255,255,255,0.75)"),J.addColorStop(.45,"rgba(255,240,250,0.35)"),J.addColorStop(1,"rgba(255,240,250,0)"),L.fillStyle=J,L.fillRect(0,0,G,G)},256),depthWrite:!1,transparent:!0}));s.scale.setScalar(ge*3.4),s.renderOrder=-1,n.add(s);const r=[],o=(L,G=e)=>{for(let pt=0;pt<60;pt++){const Ct=fl(G);if(r.every(Gt=>Gt.angleTo(Ct)>L))return r.push(Ct),Ct}const J=fl(G);return r.push(J),J},a=[];for(let L=0;L<4;L++){const G=fy(),J=o(.5);a.push(J.clone()),G.quaternion.setFromUnitVectors(new w(0,1,0),J),n.add(G)}const l=Wu(cy[t]),c=Wu(hy[t]),h=t==="winter",u=()=>{const L=new kt,G=l[Math.floor(e()*3)];return L.add(Wt(Vn,"#d9b38c",[0,.12,0],[.035,.24,.035])),L.add(Wt(Ln,G,[0,.33,0],[.16,.15,.16])),L.add(Wt(Ln,G,[.09,.27,.03],[.1,.09,.1])),L.add(Wt(Ln,G,[-.08,.28,-.04],[.1,.09,.1])),L},d=()=>{const L=new kt,G=c[Math.floor(e()*3)];return L.add(Wt(Vn,"#c9a58a",[0,.14,0],[.032,.28,.032])),L.add(Wt(Ln,G,[0,.36,0],[.15,.13,.15])),L.add(Wt(Ln,G,[.1,.31,.05],[.09,.08,.09])),L.add(Wt(Ln,G,[-.07,.32,.07],[.09,.08,.09])),L},f=()=>{const L=new kt;return L.add(Wt(Vn,"#d9b38c",[0,.06,0],[.03,.12,.03])),L.add(Wt(Vs,"#8fd3b0",[0,.18,0],[.14,.18,.14])),L.add(Wt(Vs,"#a0dcbc",[0,.29,0],[.11,.15,.11])),L.add(Wt(Vs,"#b2e6c8",[0,.38,0],[.075,.12,.075])),h&&(L.add(Wt(Vs,"#ffffff",[0,.415,0],[.045,.06,.045])),L.add(Wt(Vs,"#ffffff",[0,.32,0],[.075,.05,.075]))),L},g=new Hc(1,0),_=()=>{const L=new kt,G=["#e6dff0","#ddd5ea","#efe6f5"][Math.floor(e()*3)],J=.06+e()*.05;return L.add(Wt(g,G,[0,J*.35,0],[J,J*.7,J*.9])),e()<.5&&L.add(Wt(g,G,[J*1.1,J*.2,J*.3],[J*.5,J*.4,J*.5])),h&&L.add(Wt(uc,"#ffffff",[0,J*.55,0],[J*.8,J*.25,J*.7])),L},m=()=>{const L=new kt;L.add(Wt(Vn,"#fff4e6",[0,.04,0],[.022,.08,.022])),L.add(Wt(uc,"#ff9aa2",[0,.075,0],[.055,.045,.055]));for(let G=0;G<4;G++){const J=G/4*Math.PI*2+.4;L.add(Wt(Ln,"#ffffff",[Math.cos(J)*.03,.105,Math.sin(J)*.03],[.009,.006,.009]))}return L},p=new kt,S=[],E=[],y=[["tree",u,9,.3],["blossom",d,7,.3],["pine",f,6,.28],["rock",_,10,.2],["mushroom",m,8,.14],["flower",()=>dy(e),40,.07]];for(const[L,G,J,pt]of y)for(let Ct=0;Ct<J;Ct++){const Gt=G(),W=.85+e()*.35;Gt.scale.setScalar(W);const et=my(o(pt),a);Wr(Gt,et,ge-.01,e()*Math.PI*2),Gt.userData.flower?E.push({obj:Gt,...Gt.userData.flower,normal:et.clone(),baseScale:W}):(p.add(Gt),S.push({normal:et.clone(),scale:W,kind:L}))}const N=Gr({spring:11,summer:22,autumn:33,winter:44}[t]),A=t==="autumn"?[["pumpkin",()=>lf(.9+N()*.5),12,.12],["leaves",()=>gy(N),10,.1]]:t==="winter"?[["snowman",_y,4,.2]]:t==="spring"?[["tulips",()=>vy(N),12,.1]]:[["sunflower",xy,8,.14]];for(const[L,G,J,pt]of A)for(let Ct=0;Ct<J;Ct++){const Gt=G(),W=o(pt,N);a.some(et=>et.angleTo(W)<Xr+.05)||(Wr(Gt,W,ge-.01,N()*Math.PI*2),p.add(Gt),S.push({normal:W.clone(),scale:1,kind:L}))}fr(p),n.add(p);const C=E.length,P=new rs(Vn,Ht("#88c9a1"),C),b=new oe(1,10,6),x=new rs(b,Ht("#95d5b2"),C),R=new rs(b,Ht("#ffe066"),C),V=Ht("#ffffff").clone(),B=new rs(b,V,C*5),Y=new vt;E.forEach((L,G)=>{L.petals.forEach((J,pt)=>B.setColorAt(G*5+pt,Y.set(J.children[0].userData.petalColor)))});for(const L of[P,x,R,B])L.frustumCulled=!1,n.add(L);const q=()=>{E.forEach((L,G)=>{L.obj.updateMatrixWorld(!0),P.setMatrixAt(G,L.stem.children[0].matrixWorld),x.setMatrixAt(G,L.stem.children[1].matrixWorld),R.setMatrixAt(G,L.head.children[5].matrixWorld),L.petals.forEach((J,pt)=>B.setMatrixAt(G*5+pt,J.children[0].matrixWorld))});for(const L of[P,x,R,B])L.instanceMatrix.needsUpdate=!0};q();const X=[],Q=()=>{const L=new Le;L.quaternion.setFromUnitVectors(new w(0,1,0),fl(e));const G=py(e);return G.position.set(ge+.75+e()*.35,0,0),G.rotation.z=Math.PI/2,L.add(G),L.rotation.y=e()*Math.PI*2,n.add(L),{pivot:L,cloud:G,speed:.04+e()*.05}};for(let L=0;L<6;L++)X.push(Q());return{planet:i,halo:s,flowers:E,clouds:X,cloudMat:af,ponds:a,props:S,season:t,makeCloud:Q,update(L){for(const G of X)G.pivot.rotateY(G.speed*L);q()}}}const dc=new Map;function mn(n){let t=dc.get(n);return t||(t=Ht(n).clone(),t.emissive=new vt(n),t.emissiveIntensity=0,dc.set(n,t)),t}function My(n){for(const t of dc.values())t.emissiveIntensity=n}const os=[{id:"bow",name:"Bow",emoji:"🎀",slot:"head",unlock:2},{id:"scarf",name:"Scarf",emoji:"🧣",slot:"neck",unlock:4},{id:"party",name:"Party hat",emoji:"🥳",slot:"head",unlock:6},{id:"bowtie",name:"Bow tie",emoji:"🎩",slot:"neck",unlock:9},{id:"beanie",name:"Beanie",emoji:"🧶",slot:"head",unlock:12},{id:"bell",name:"Bell",emoji:"🔔",slot:"neck",unlock:16},{id:"flowers",name:"Flower crown",emoji:"🌸",slot:"head",unlock:20},{id:"crown",name:"Crown",emoji:"👑",slot:"head",unlock:28},{id:"wizard",name:"Star hat",emoji:"🔮",slot:"head",unlock:36},{id:"sakura",name:"Blossom pin",emoji:"🌸",slot:"head",unlock:0,season:"spring"},{id:"sunhat",name:"Sun hat",emoji:"👒",slot:"head",unlock:0,season:"summer"},{id:"acorn",name:"Acorn cap",emoji:"🌰",slot:"head",unlock:0,season:"autumn"},{id:"leafscarf",name:"Maple scarf",emoji:"🍁",slot:"neck",unlock:0,season:"autumn"},{id:"earmuffs",name:"Earmuffs",emoji:"🎧",slot:"head",unlock:0,season:"winter"},{id:"daisychain",name:"Daisy chain",emoji:"🌼",slot:"neck",unlock:0,festival:"midsummer"},{id:"pumpkinhat",name:"Pumpkin hat",emoji:"🎃",slot:"head",unlock:0,festival:"pumpkin"},{id:"lanternhat",name:"Lantern hat",emoji:"🏮",slot:"head",unlock:0,festival:"lantern"},{id:"fairylights",name:"Fairy lights",emoji:"✨",slot:"neck",unlock:0,festival:"winterlights"},{id:"cometcap",name:"Comet cap",emoji:"☄️",slot:"head",unlock:0,visitor:!0},{id:"stardust",name:"Stardust scarf",emoji:"🌌",slot:"neck",unlock:0,visitor:!0},{id:"moonhalo",name:"Moon halo",emoji:"🌙",slot:"head",unlock:0,visitor:!0}],Sy=n=>!!(n.season||n.festival),Ws=n=>Sy(n)||!!n.visitor,cf=(n,t,e)=>Ws(n)?e.includes(n.id):t>=n.unlock,by=(n,t)=>os.filter(e=>e.season===n||t&&e.festival===t),Wc=n=>os.find(t=>t.id===n),fc=n=>os.filter(t=>!Ws(t)&&n>=t.unlock),be=new oe(1,20,14),Xu=new Map,Pr=n=>Xu.get(n)??Xu.set(n,new Ee({color:n})).get(n),Ci=new Nn(1,1,24),an=new vi(1,1,1,24);function Dt(n,t,e,i,s=[0,0,0]){const r=new ft(n,mn(t));return r.position.set(...e),r.scale.set(...i),r.rotation.set(...s),r}function Ey(n,t){const e=new kt;switch(n){case"bow":{e.position.set(.5,1.68,.42),e.rotation.set(0,.5,-.5),e.add(Dt(Ci,"#ff8fb8",[-.17,0,0],[.16,.26,.1],[0,0,Math.PI/2])),e.add(Dt(Ci,"#ff8fb8",[.17,0,0],[.16,.26,.1],[0,0,-Math.PI/2])),e.add(Dt(be,"#ff6fa3",[0,0,.02],[.08,.08,.07]));break}case"party":{e.position.set(.22,1.82,.05),e.rotation.z=-.32,e.add(Dt(Ci,"#a0c4ff",[0,.27,0],[.24,.55,.24]));for(let i=0;i<3;i++)e.add(Dt(be,["#ffe066","#ff8fb8","#ffffff"][i],[Math.cos(i*2.1)*.13,.12+i*.12,Math.sin(i*2.1)*.13+.05],[.04,.04,.04]));e.add(Dt(be,"#ffe066",[0,.57,0],[.08,.08,.08]));break}case"beanie":{e.position.set(0,1.7,0),e.rotation.x=-.12;const i=new ft(new oe(1,24,12,0,Math.PI*2,0,Math.PI/2),mn("#c8b6ff"));i.scale.set(.72,.5,.72),e.add(i),e.add(Dt(an,"#b39cf5",[0,.02,0],[.74,.1,.74])),e.add(Dt(be,"#ffffff",[0,.52,0],[.13,.13,.13]));break}case"flowers":{e.position.set(0,1.72,0),e.rotation.x=-.15;const i=new ft(new Fe(.64,.045,8,36),mn("#95d5b2"));i.rotation.x=Math.PI/2,e.add(i);const s=["#ffafcc","#fdffb6","#cdb4db","#ffffff","#ffc8a2"];for(let r=0;r<9;r++){const o=r/9*Math.PI*2;e.add(Dt(be,s[r%s.length],[Math.cos(o)*.64,.04,Math.sin(o)*.64],[.1,.07,.1])),e.add(Dt(be,"#ffe066",[Math.cos(o)*.64,.09,Math.sin(o)*.64],[.04,.03,.04]))}break}case"crown":{e.position.set(-.15,1.86,.05),e.rotation.z=.25,e.add(Dt(an,"#ffd166",[0,.06,0],[.3,.13,.3]));for(let i=0;i<5;i++){const s=i/5*Math.PI*2;e.add(Dt(Ci,"#ffd166",[Math.cos(s)*.25,.2,Math.sin(s)*.25],[.07,.17,.07])),e.add(Dt(be,["#ff8fb8","#a0c4ff","#b9fbc0"][i%3],[Math.cos(s)*.3,.07,Math.sin(s)*.3],[.04,.04,.03]))}break}case"wizard":{e.position.set(.18,1.8,0),e.rotation.z=-.25,e.add(Dt(an,"#7b6fd6",[0,0,0],[.55,.04,.55]));const i=Dt(Ci,"#8f83e6",[0,.38,0],[.32,.75,.32]);e.add(i),e.add(Dt(an,"#ffd166",[0,.07,0],[.33,.07,.33]));for(const[s,r,o]of[[.15,.3,.22],[-.12,.5,.16],[.05,.62,.12]])e.add(Dt(be,"#fff6a8",[s,r,o],[.04,.04,.04]));break}case"scarf":{e.position.set(0,.6,0);const i=new ft(new Fe(.93,.13,10,40),mn("#ff9aa2"));i.rotation.x=Math.PI/2,e.add(i),e.add(Dt(be,"#ff9aa2",[.45,-.2,.8],[.13,.32,.08],[.2,0,.25])),e.add(Dt(an,"#ffffff",[.45,-.38,.84],[.1,.05,.06],[.2,0,.25]));for(let s=0;s<6;s++){const r=s/6*Math.PI*2;e.add(Dt(be,"#ffffff",[Math.cos(r)*.98,0,Math.sin(r)*.98],[.05,.05,.05]))}break}case"bowtie":{e.position.set(0,.62,.93),e.rotation.x=-.35,e.add(Dt(Ci,"#5e60ce",[-.13,0,0],[.12,.2,.08],[0,0,Math.PI/2])),e.add(Dt(Ci,"#5e60ce",[.13,0,0],[.12,.2,.08],[0,0,-Math.PI/2])),e.add(Dt(be,"#7a7ce0",[0,0,.02],[.06,.06,.06]));break}case"bell":{e.position.set(0,.62,0);const i=new ft(new Fe(.92,.05,8,40),mn(t));i.rotation.x=Math.PI/2,e.add(i),e.add(Dt(be,"#ffd166",[0,-.1,.96],[.13,.13,.13])),e.add(Dt(an,"#c99a2e",[0,-.16,1.07],[.02,.07,.02],[Math.PI/2,0,0]));break}case"sakura":{e.position.set(.48,1.72,.42),e.rotation.set(.3,.4,-.5);for(const[i,s,r]of[[0,0,1],[.2,.08,.8],[-.16,.1,.75]]){for(let o=0;o<5;o++){const a=o/5*Math.PI*2;e.add(Dt(be,"#ffc8dd",[i+Math.cos(a)*.08*r,s,Math.sin(a)*.08*r],[.07*r,.03*r,.07*r]))}e.add(Dt(be,"#ffe066",[i,s+.02,0],[.035*r,.03*r,.035*r]))}break}case"sunhat":{e.position.set(0,1.74,0),e.rotation.set(-.12,0,.12),e.add(Dt(an,"#fff1c9",[0,0,0],[1.05,.04,1.05]));const i=new ft(new oe(1,20,10,0,Math.PI*2,0,Math.PI/2),mn("#fff1c9"));i.scale.set(.58,.42,.58),e.add(i),e.add(Dt(an,"#ff9ec7",[0,.07,0],[.6,.1,.6])),e.add(Dt(be,"#ff9ec7",[.5,.08,.3],[.12,.08,.06]));break}case"acorn":{e.position.set(.12,1.78,0),e.rotation.z=-.25;const i=new ft(new oe(1,20,10,0,Math.PI*2,0,Math.PI/2),mn("#c9925f"));i.scale.set(.5,.36,.5),e.add(i),e.add(Dt(an,"#a8754a",[0,.02,0],[.52,.06,.52])),e.add(Dt(an,"#8a5f3c",[0,.42,0],[.04,.16,.04],[0,0,.3]));break}case"leafscarf":{e.position.set(0,.6,0);const i=new ft(new Fe(.93,.13,10,40),mn("#ffad7a"));i.rotation.x=Math.PI/2,e.add(i),e.add(Dt(be,"#ffad7a",[-.42,-.2,.8],[.13,.3,.08],[.2,0,-.25]));for(const[s,r,o,a]of[[.35,.05,.88,"#f7a09a"],[-.6,.06,.72,"#ffd27a"]])for(let l=0;l<3;l++)e.add(Dt(be,a,[s,r,o],[.15,.05,.08],[1.2,0,(l-1)*.9]));break}case"earmuffs":{e.position.set(0,1,0);const i=new ft(new Fe(1,.06,8,32,Math.PI),mn("#b8a4f0"));e.add(i);for(const s of[-1,1])e.add(Dt(be,"#ffffff",[1*s,.05,0],[.22,.28,.24]));break}case"daisychain":{e.position.set(0,.62,0);const i=new ft(new Fe(.93,.035,6,40),mn("#95d5b2"));i.rotation.x=Math.PI/2,e.add(i);for(let s=0;s<8;s++){const r=s/8*Math.PI*2;e.add(Dt(be,"#ffffff",[Math.cos(r)*.95,0,Math.sin(r)*.95],[.13,.13,.05],[0,-r+Math.PI/2,0])),e.add(Dt(be,"#ffe066",[Math.cos(r)*1,0,Math.sin(r)*1],[.05,.05,.03],[0,-r+Math.PI/2,0]))}break}case"pumpkinhat":{const i=lf(1);i.scale.setScalar(9),i.position.set(.1,1.68,0),i.rotation.z=-.2,e.add(i);break}case"lanternhat":{e.position.set(.15,1.85,0),e.rotation.z=-.2;const i=Pr("#ffb46b"),s=new ft(be,i);s.scale.set(.28,.32,.28),s.position.y=.32,e.add(s),e.add(Dt(an,"#ffd166",[0,.04,0],[.16,.05,.16])),e.add(Dt(an,"#ffd166",[0,.62,0],[.12,.05,.12])),e.add(Dt(an,"#ff8f8f",[0,-.08,0],[.02,.18,.02]));break}case"fairylights":{e.position.set(0,.62,0);const i=new ft(new Fe(.93,.02,6,40),mn("#6b5a7a"));i.rotation.x=Math.PI/2,e.add(i);const s=["#ff8fab","#ffe066","#9bf6ff","#caffbf","#cdb4db"];for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=new ft(be,Pr(s[r%5]));a.position.set(Math.cos(o)*.96,-.06,Math.sin(o)*.96),a.scale.setScalar(.08),e.add(a)}break}case"cometcap":{e.position.set(.1,1.74,0),e.rotation.set(-.2,0,-.2);const i=new ft(new oe(1,20,10,0,Math.PI*2,0,Math.PI/2),mn("#5e60ce"));i.scale.set(.6,.42,.6),e.add(i),e.add(Dt(an,"#ffd166",[0,.02,0],[.62,.06,.62]));for(let s=0;s<4;s++)e.add(Dt(be,["#fff1a8","#ffe066","#ffd1e8","#c3c8ff"][s],[0,.38-s*.05,-.25-s*.2],[.12-s*.022,.1-s*.018,.14-s*.02]));e.add(Dt(Ci,"#fff1a8",[0,.46,.04],[.09,.16,.09]));break}case"stardust":{e.position.set(0,.6,0);const i=new ft(new Fe(.93,.13,10,40),mn("#6a5acd"));i.rotation.x=Math.PI/2,e.add(i),e.add(Dt(be,"#6a5acd",[.45,-.2,.8],[.13,.32,.08],[.2,0,.25]));for(let s=0;s<10;s++){const r=s/10*Math.PI*2,o=new ft(be,Pr(s%3?"#fff6a8":"#ffffff"));o.position.set(Math.cos(r)*1.02,.04*Math.sin(s*2.3),Math.sin(r)*1.02),o.scale.setScalar(.04),e.add(o)}break}case"moonhalo":{e.position.set(0,2,-.05),e.rotation.x=-.2;const i=new ft(new Fe(.42,.04,8,36),Pr("#fff6c2"));i.rotation.x=Math.PI/2,e.add(i);const s=new ft(new Fe(.15,.055,8,20,Math.PI*1.25),Pr("#fff1a8"));s.position.set(0,.24,0),s.rotation.z=Math.PI*.6,e.add(s);break}default:return null}return e}const pc=80,hf=100,Xc=[{min:50,name:"Best friends",hearts:3},{min:25,name:"Friends",hearts:2},{min:8,name:"Pals",hearts:1}],$c=(n,t)=>n<t?`${n}|${t}`:`${t}|${n}`;function ds(n){return Xc.find(t=>n>=t.min)??null}const mc=n=>{const t=ds(n)?.hearts??0;return"♥".repeat(t)+"♡".repeat(3-t)};function Sa(n,t,e,i){if(t===e)return null;const s=$c(t,e),r=n[s]??0,o=Math.min(hf,r+i);n[s]=Math.round(o*1e3)/1e3;const a=ds(r),l=ds(o);return l&&l!==a?l:null}function Yc(n,t){const e=[];for(const[i,s]of Object.entries(n)){const[r,o]=i.split("|");r===t?e.push({id:o,points:s}):o===t&&e.push({id:r,points:s})}return e.sort((i,s)=>s.points-i.points)}function wy(n,t){const e={};if(!n||typeof n!="object")return e;for(const[i,s]of Object.entries(n)){const[r,o]=i.split("|");typeof s!="number"||!Number.isFinite(s)||!t.includes(r)||!t.includes(o)||r===o||(e[$c(r,o)]=Math.min(hf,Math.max(0,s)))}return e}function Ty(n){return Array.isArray(n)?n.filter(t=>t&&typeof t.at=="number"&&Number.isFinite(t.at)&&typeof t.text=="string"&&typeof t.icon=="string").map(t=>({at:t.at,icon:t.icon,text:t.text.slice(0,140),...typeof t.key=="string"?{key:t.key}:{}})).slice(-pc):[]}function Ay(n,t){return t.key&&n.some(e=>e.key===t.key)?!1:(n.push(t),n.length>pc&&n.splice(0,n.length-pc),!0)}const Jo=n=>n.length<=1?n.join(""):`${n.slice(0,-1).join(", ")} and ${n[n.length-1]}`;function Cy(n,t=Date.now()){const e=new Date(n),i=new Date(t),s=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()).getTime(),r=Math.round((s(i)-s(e))/864e5);return r===0?"Today":r===1?"Yesterday":e.toLocaleDateString(void 0,{weekday:"short",day:"numeric",month:"short",year:e.getFullYear()===i.getFullYear()?void 0:"numeric"})}const Xe={strawberry:{name:"Strawberry",plural:"strawberries",emoji:"🍓",hours:30,yield:3,fruit:"#ff6f91",leaf:"#7fc98f"},blueberry:{name:"Blueberry",plural:"blueberries",emoji:"🫐",hours:24,yield:2,fruit:"#7d8cf0",leaf:"#8fcfa8"},sunpeach:{name:"Sunpeach",plural:"sunpeaches",emoji:"🍑",hours:44,yield:5,fruit:"#ffb36b",leaf:"#9bd38a"}},$r=Object.keys(Xe),$u=n=>typeof n=="string"&&n in Xe,Ry=1.5,gc=8*36e5,_c={strawberry:3,blueberry:2},uf=n=>({grown:0,at:n,wetUntil:0});function jc(n,t,e=!1){const i=n.at;if(n.at=t,!n.seed||t<=i)return;const s=(t-i)/36e5,r=e?t:Math.min(t,n.wetUntil),o=Math.max(0,(r-i)/36e5);n.grown=Math.min(Xe[n.seed].hours,n.grown+s+o*(Ry-1))}function qc(n){return n.seed?Math.min(1,n.grown/Xe[n.seed].hours):0}function pr(n){if(!n.seed)return 0;const t=qc(n);return t>=1?4:t>=.6?3:t>=.25?2:1}const Py=["Empty plot","Sprouting","Leafy","Flowering","Ripe!"],Ly=n=>n.seed?Math.max(0,Xe[n.seed].hours-n.grown):0;function Dy(n,t){if(!n||typeof n!="object")return;const e=n,i={};if(e.plots&&typeof e.plots=="object")for(const[r,o]of Object.entries(e.plots)){if(!o||typeof o!="object")continue;const a=(c,h)=>typeof c=="number"&&Number.isFinite(c)?c:h,l=$u(o.seed)?o.seed:void 0;i[r]={...l?{seed:l}:{},grown:Math.max(0,a(o.grown,0)),at:Math.min(t,a(o.at,t)),wetUntil:a(o.wetUntil,0),...l&&o.plantedAt?{plantedAt:a(o.plantedAt,t)}:{}}}const s={};if(e.seeds&&typeof e.seeds=="object")for(const[r,o]of Object.entries(e.seeds))$u(r)&&typeof o=="number"&&o>0&&(s[r]=Math.floor(Math.min(99,o)));return{plots:i,seeds:s}}const Lr=new oe(1,10,8),Iy=new Nn(1,1,6),Yu=new vi(1,1,1,8);function Uy(n){const t=new kt,e=pr(n);if(!n.seed||e===0)return t;const i=Xe[n.seed],s=[[-.06,-.035],[.06,-.035],[0,.045]];for(const[r,o]of s){if(e===1){const c=new ft(Yu,Ht("#6cc070"));c.position.set(r,.05,o),c.scale.set(.004,.035,.004),t.add(c);for(const h of[-1,1]){const u=new ft(Lr,Ht("#7ed957"));u.position.set(r+h*.018,.07,o),u.rotation.z=h*.5,u.scale.set(.026,.011,.017),t.add(u)}continue}const a=e===2?.075:.1,l=new ft(Lr,Ht(i.leaf));if(l.position.set(r,.03+a*.4,o),l.scale.set(e===2?.032:.04,a*.5,e===2?.032:.04),t.add(l),e===3)for(let c=0;c<2;c++){const h=new ft(Lr,Ht("#ffffff"));h.position.set(r+(c?.02:-.018),.03+a*.75,o+(c?-.016:.018)),h.scale.setScalar(.014),t.add(h)}if(e===4)for(let c=0;c<3;c++){const h=c/3*Math.PI*2,u=new ft(n.seed==="strawberry"?Iy:Lr,Ht(i.fruit));u.position.set(r+Math.cos(h)*.036,.03+a*.55,o+Math.sin(h)*.036),n.seed==="strawberry"?(u.scale.set(.017,.028,.017),u.rotation.x=Math.PI):u.scale.setScalar(n.seed==="sunpeach"?.024:.017),t.add(u)}}if(e===4){const r=new ft(Yu,Ht("#c99a7a"));r.position.set(.08,.05,.07),r.scale.set(.004,.08,.004),t.add(r);const o=new ft(Lr,Ht(i.fruit));o.position.set(.08,.095,.07),o.scale.set(.018,.018,.006),t.add(o)}return fr(t),t}const ba="pocket-pet-planet:v1",Ny=ba,df=36e5,Dr={foodPerHour:5,joyPerHour:3,hungryJoyPerHour:3,hungryBelow:30},Yr=[5,15],Kc=Yr.length,Fy=72*df,Je={mochi:{forms:["Mochi","Mochibun","Lunabun"],colors:["#ffc8dd","#ffb3d1","#f7a8e0"],accent:"#ff8fab"},puff:{forms:["Puff","Puffpaw","Sunpuff"],colors:["#ffe5b4","#ffd6a5","#ffc68a"],accent:"#ffad7a"},bloop:{forms:["Bloop","Blooplet","Starbloop"],colors:["#d9c8f0","#c3c8ff","#a9c8ff"],accent:"#ffe066"},sprout:{forms:["Sprout","Sproutling","Bloomkin"],colors:["#fdffb6","#eef7a6","#dff0a0"],accent:"#95d5b2"}},Oy=["Mochi","Pip","Bean","Tofu","Nori","Biscuit","Pudding","Dumpling","Pebble","Wobble","Taffy","Clover"],ju=(n,t=0,e=100)=>Math.min(e,Math.max(t,n));function la(n,t){if(t<=0)return;const e=t/df,i=n.food,s=Math.max(0,(i-Dr.hungryBelow)/Dr.foodPerHour),r=Math.max(0,e-s);n.food=ju(i-Dr.foodPerHour*e),n.joy=ju(n.joy-Dr.joyPerHour*e-Dr.hungryJoyPerHour*r)}function ff(n){return n.food<20?{label:"Starving",emoji:"😣",face:"frown"}:n.food<40?{label:"Peckish",emoji:"🥺",face:"frown"}:n.joy>=80?{label:"Overjoyed",emoji:"🥰",face:"smile"}:n.joy>=55?{label:"Happy",emoji:"😊",face:"smile"}:n.joy>=30?{label:"Calm",emoji:"🙂",face:"flat"}:{label:"Lonely",emoji:"😢",face:"frown"}}function vc(n){return`${["Baby","Young","Starry"][n.stage]??""} ${Je[n.species].forms[n.stage]}`}function By(n){const t=n()*2-1,e=n()*Math.PI*2,i=Math.sqrt(1-t*t);return[i*Math.cos(e),t,i*Math.sin(e)]}function ky(n,t,e=Math.random){const i=Oy.filter(r=>!t.includes(r)),s=i[Math.floor(e()*i.length)]??"Blob";return{id:Math.floor(e()*1e9).toString(36)+Date.now().toString(36).slice(-4),name:s,species:n,stage:0,food:60+e()*20,joy:60+e()*15,care:0,pos:By(e)}}function zy(){const n=[];for(const t of["mochi","puff","bloop","sprout"])n.push(ky(t,n.map(e=>e.name)));return n.forEach((t,e)=>{const i=e/n.length*Math.PI*2,s=[Math.cos(i)*.55,.3+Math.sin(i)*.45,.75],r=Math.hypot(...s);t.pos=[s[0]/r,s[1]/r,s[2]/r]}),{pets:n,eggs:[],snacks:0,totalCare:0,lastEggAt:0}}function Vy(n){n.wear&&typeof n.wear!="object"&&delete n.wear}function Hy(n){const t=n;return!!t&&typeof t.id=="string"&&typeof t.name=="string"&&t.species in Je&&[t.stage,t.food,t.joy,t.care].every(e=>typeof e=="number"&&Number.isFinite(e))&&Array.isArray(t.pos)&&t.pos.length===3}const Ri=(n,t)=>typeof n=="number"&&Number.isFinite(n)?n:t;function Gy(n){if(!n||!Array.isArray(n.pets)||!n.pets.every(Hy)||n.pets.length===0)return null;if(n.version===1)return{savedAt:Ri(n.savedAt,Date.now()),pets:n.pets,eggs:[],snacks:0,totalCare:n.pets.reduce((t,e)=>t+e.care,0),lastEggAt:0};if(n.version===2||n.version===3||n.version===4){n.pets.forEach(Vy);const t=n.pets.map(s=>s.id),e=n.version===4,i=n.version>=3&&n.dex&&typeof n.dex=="object"?n.dex:void 0;return{savedAt:Ri(n.savedAt,Date.now()),pets:n.pets,eggs:Array.isArray(n.eggs)?n.eggs.filter(s=>s&&Array.isArray(s.pos)&&typeof s.hatchAt=="number"&&s.baby):[],snacks:Ri(n.snacks,0),totalCare:Ri(n.totalCare,0),lastEggAt:Ri(n.lastEggAt,0),flowers:Array.isArray(n.flowers)?n.flowers.map(s=>Ri(s,.35)):void 0,dex:i,decor:Array.isArray(n.decor)?n.decor.filter(s=>s&&typeof s.id=="string"&&typeof s.kind=="string"&&Array.isArray(s.pos)&&s.pos.length===3):void 0,outfits:Array.isArray(n.outfits)?n.outfits.filter(s=>typeof s=="string"):void 0,friends:e?wy(n.friends,t):void 0,diary:e?Ty(n.diary):void 0,garden:e?Dy(n.garden,Date.now()):void 0,harvests:e?Ri(n.harvests,0):void 0,visits:e&&n.visits&&typeof n.visits=="object"?Object.fromEntries(Object.entries(n.visits).filter(([,s])=>s&&typeof s.at=="number")):void 0,visitorMet:e?Ri(n.visitorMet,0):void 0}}return null}function Wy(n=Date.now()){try{const t=localStorage.getItem(ba);if(t){const e=Gy(JSON.parse(t));if(e){const i=Math.min(Fy,Math.max(0,n-e.savedAt));e.pets.forEach(a=>la(a,i));const{savedAt:s,claim:r,...o}=e;return{data:o,offlineMs:i,fresh:!1}}}}catch{}return{data:zy(),offlineMs:0,fresh:!0}}function Xy(n,t,e=Date.now()){const i={version:4,savedAt:e,claim:t,...n};try{localStorage.setItem(ba,JSON.stringify(i))}catch{}}function $y(){localStorage.removeItem(ba)}const Yy=.21,jy=[1,1.25,1.5],qy=.13,Pi=new oe(1,24,16),Ji=new oe(1,16,12),qu=new Nn(1,1,20),zo=new vi(1,1,1,10),Ku=new Fe(.1,.03,8,20,Math.PI),Ky=new kc(.028,.1,4,8),Zy=new Fe(1.35,.08,8,48),Jy=new zc(1.05,28),Qy=new oe(1.6,12,8),tM=new oe(1,20,14),Ir=new Ee({color:"#3d3047"}),eM=new Ee({color:"#ffffff"}),nM=new Ee({color:"#ff9fc0",transparent:!0,opacity:.85}),iM=new Ee({color:"#7a5a8c",transparent:!0,opacity:.2,depthWrite:!1}),sM=new Ee({color:"#ffffff",transparent:!0,opacity:.95}),rM=new Ee({visible:!1}),oM=new sf({color:"#fdf6ff",transparent:!0,opacity:.9});function he(n,t,e,i,s=[0,0,0]){const r=new ft(n,t);return r.position.set(...e),r.scale.set(...i),r.rotation.set(...s),r}const Zu=new Zt,pl=new w;class pf{constructor(t){this.data=t,this.group=new kt,this.bob=new kt,this.body=new kt,this.eyes=[],this.mouth=null,this.wings=[],this.face=null,this.up=new w,this.forward=new w,this.target=null,this.idle=Math.random()*2,this.phase=Math.random()*10,this.blink=2+Math.random()*3,this.jumpT=0,this.shakeT=0,this.evolveT=-1,this.evolveSwapped=!1,this.onEvolveSwap=null,this.selected=!1,this.facing=null,this.goal=null,this.moving=!1,this.sleeping=!1,this.lean=0,this.sleepK=0,this.shownStage=0,this.up.set(...t.pos).normalize(),this.forward.set(0,1,0).cross(this.up),this.forward.lengthSq()<1e-4&&this.forward.set(1,0,0),this.forward.normalize(),this.shadow=he(Jy,iM,[0,.12,0],[1,1,1],[-Math.PI/2,0,0]),this.ring=he(Zy,sM,[0,.14,0],[1,1,1],[Math.PI/2,0,0]),this.ring.visible=!1,this.hit=he(Qy,rM,[0,1,0],[1,1,1]),this.hit.userData.pet=this,this.group.add(this.shadow,this.ring,this.hit,this.bob),this.bob.add(this.body),this.build(),this.place()}get size(){return Yy*(jy[this.shownStage]??1)}build(){const{species:t,stage:e}=this.data;this.shownStage=e;const i=Je[t],s=this.data.look,r=s?.feature??t,o=s?"#"+new vt(s.color).offsetHSL(0,.04*e,-.035*e).getHexString():i.colors[e]??i.colors[0],a=Ht(o),l="#"+new vt(o).offsetHSL(0,.05,-.08).getHexString(),c=Ht(l),h=Ht(Je[r].accent);sy(this.body),this.body.clear(),this.eyes=[],this.wings=[],this.face=null;const u=this.body;u.add(he(Pi,a,[0,1,0],[1,.92,1])),u.add(he(Pi,Ht("#fff7fb"),[0,.82,.62],[.62,.55,.42]));for(const f of[-1,1]){const g=new kt;g.position.set(.36*f,1.14,.84),g.userData.keep=!0,g.add(he(Ji,Ir,[0,0,0],[.13,.15,.1])),g.add(he(Ji,eM,[.04,.05,.07],[.045,.045,.03])),u.add(g),this.eyes.push(g),u.add(he(Ji,nM,[.62*f,.9,.7],[.14,.08,.06],[0,.6*f,0])),u.add(he(Ji,c,[.42*f,.14,.28],[.24,.14,.3]))}let d=1.95;if(s?.spots){const f=Ht(s.spots);for(const[g,_,m,p]of[[.45,1.55,-.5,.16],[-.3,1.7,-.45,.12],[-.6,1.1,-.65,.14],[.2,1.2,-.9,.11]]){const S=new w(g,(_-1)/.92,m).normalize(),E=he(Ji,f,[S.x*.98,1+S.y*.9,S.z*.98],[p,p,p*.4]);E.quaternion.setFromUnitVectors(new w(0,0,1),S),u.add(E)}}if(r==="mochi"){for(const f of[-1,1]){const g=new kt;g.position.set(.36*f,1.75,-.05),g.rotation.z=-.22*f,g.add(he(Pi,a,[0,.4,0],[.22,.55,.14])),g.add(he(Pi,Ht("#ffd9e8"),[0,.4,.07],[.12,.4,.08])),e>=1&&(g.rotation.x=-.25),u.add(g)}d=2.75}else if(r==="puff"){for(const f of[-1,1])u.add(he(qu,a,[.52*f,1.78,0],[.26,.42,.2],[0,0,-.42*f])),u.add(he(qu,Ht("#ffe9ef"),[.5*f,1.74,.07],[.14,.26,.08],[0,0,-.42*f]));for(const f of[-1,1])u.add(he(zo,Ir,[.42*f,.96,.92],[.008,.28,.008],[0,0,Math.PI/2+.15*f]));d=2.1}else if(r==="bloop"){if(u.add(he(zo,c,[0,2.05,0],[.04,.35,.04])),u.add(he(Pi,h,[0,2.3,0],[.17,.17,.17])),e>=1){for(const f of[-1,1])u.add(he(zo,c,[.25*f,2,0],[.03,.3,.03],[0,0,-.5*f]));for(const f of[-1,1])u.add(he(Pi,h,[.38*f,2.15,0],[.11,.11,.11]))}d=2.5}else{u.add(he(zo,Ht("#88c9a1"),[0,1.98,0],[.035,.22,.035]));for(const f of[-1,1])u.add(he(Pi,h,[.2*f,2.12,0],[.24,.07,.13],[0,0,.45*f]));if(e>=1){const f=e>=2?6:0;for(let g=0;g<f;g++){const _=g/f*Math.PI*2;u.add(he(Ji,Ht("#ffafcc"),[Math.cos(_)*.14,2.28,Math.sin(_)*.14],[.1,.05,.1]))}u.add(he(Ji,Ht(e>=2?"#ffe066":"#ffafcc"),[0,2.3,0],[.1,.08,.1]))}d=2.4}if(e>=1&&u.add(he(Pi,Ht("#fffafd"),[0,.55,-.95],[.27,.27,.27])),e>=2){for(const f of[-1,1]){const g=new kt;g.position.set(.55*f,1.25,-.55),g.userData.keep=!0,g.add(he(tM,oM,[.4*f,.15,0],[.5,.32,.08],[0,.5*f,.35*f])),u.add(g),this.wings.push(g)}this.data.wear?.head||u.add(he(new Fe(.36,.06,10,36),Ht("#ffe08a"),[0,d+.2,0],[1,1,1],[Math.PI/2,0,0]))}for(const f of[this.data.wear?.head,this.data.wear?.neck]){const g=f?Ey(f,Je[r].accent):null;g&&u.add(g)}this.group.userData.top=d,fr(u),this.updateFace(),this.place()}updateFace(){const t=this.sleeping?"flat":ff(this.data).face;t!==this.face&&(this.face=t,this.mouth&&this.body.remove(this.mouth),t==="flat"?this.mouth=he(Ky,Ir,[0,.88,.97],[1,1,1],[0,0,Math.PI/2]):t==="smile"?this.mouth=he(Ku,Ir,[0,.93,.95],[1,1,1],[0,0,Math.PI]):this.mouth=he(Ku,Ir,[0,.82,.96],[.8,.7,1],[0,0,0]),this.body.add(this.mouth))}setSelected(t){this.selected=t,this.ring.visible=t}react(t){t==="full"?this.shakeT=.6:this.jumpT=t==="feed"?.7:.5}evolve(t){this.evolveT=0,this.evolveSwapped=!1,this.onEvolveSwap=t}get evolving(){return this.evolveT>=0}headWorld(t=new w){return t.copy(this.up).multiplyScalar(ge+this.size*(this.group.userData.top+.35))}centerWorld(t=new w){return t.copy(this.up).multiplyScalar(ge+this.size)}stepAway(t){const e=this.up.clone().sub(t);e.lengthSq()<1e-8&&e.randomDirection(),this.target=this.up.clone().addScaledVector(e.normalize(),.3).normalize(),this.idle=0}pickTarget(){const t=new w().randomDirection();t.sub(this.up).multiplyScalar(.25+Math.random()*.45).add(this.up).normalize(),this.target=t}update(t,e){const i=this.data.food<25;if(this.moving=!1,this.goal&&!this.evolving&&!this.sleeping&&(this.target=this.goal),this.evolving||(this.selected||this.sleeping)&&!this.goal)this.target=null;else if(this.target){const u=pl.copy(this.target).addScaledVector(this.up,-this.up.dot(this.target));this.up.angleTo(this.target)<.04||u.lengthSq()<1e-8?(this.target=null,this.idle=1+Math.random()*3.5):(u.normalize(),this.forward.lerp(u,Math.min(1,t*5)).normalize(),this.up.addScaledVector(this.forward,qy*(i?.45:1)*t).normalize(),this.moving=!0)}else this.idle-=t,this.idle<=0&&this.pickTarget();if(this.facing){const u=pl.copy(this.facing).addScaledVector(this.up,-this.up.dot(this.facing));u.lengthSq()>1e-6&&this.forward.lerp(u.normalize(),Math.min(1,t*6)).normalize()}this.data.pos=[this.up.x,this.up.y,this.up.z];let s=0;this.sleepK+=((this.sleeping?1:0)-this.sleepK)*Math.min(1,t*3);let r=this.sleeping?Math.sin(e*1.3+this.phase)*.05-.06:Math.sin(e*2.4+this.phase)*.03;if(this.moving){this.phase+=t*9;const u=Math.abs(Math.sin(this.phase));s=u*.35,r=(u<.25?(.25-u)*-.5:0)+u*.06}if(this.jumpT>0){this.jumpT=Math.max(0,this.jumpT-t);const u=this.jumpT/.7;s=Math.max(s,Math.sin(u*Math.PI)*.9),r=Math.sin(u*Math.PI*2)*.12}let o=0;this.shakeT>0&&(this.shakeT=Math.max(0,this.shakeT-t),o=Math.sin(this.shakeT*40)*.25*(this.shakeT/.6));let a=0,l=1;if(this.evolveT>=0){this.evolveT+=t;const u=this.evolveT;a=u*u*9,s=Math.sin(Math.min(1,u/1.6)*Math.PI)*1.2,l=u<.8?1-u*.5:.6+Math.min(1,(u-.8)/.4)*.4+Math.sin((u-.8)*12)*.08*Math.max(0,1-(u-.8)),u>=.8&&!this.evolveSwapped&&(this.evolveSwapped=!0,this.build(),this.onEvolveSwap?.()),u>=1.8&&(this.evolveT=-1,this.jumpT=.7)}this.bob.position.y=s,this.bob.scale.set((1-r*.5)*l,(1+r)*l,(1-r*.5)*l);let c=0;if(this.facing){const u=this.up.angleTo(pl.copy(this.facing).normalize());c=bn.clamp((Math.PI/2-u)*.55,0,.6)}this.lean+=(c-this.lean)*Math.min(1,t*6),this.bob.rotation.set(-this.lean+this.sleepK*.18,a+o,this.sleepK*Math.sin(e*.9+this.phase)*.06),this.shadow.scale.setScalar(1-Math.min(.5,s*.35)),this.blink-=t;const h=this.blink<.12||this.sleepK>.5?.15:1;this.blink<0&&(this.blink=2.5+Math.random()*4);for(const u of this.eyes)u.scale.y=h;for(const[u,d]of this.wings.entries())d.rotation.y=Math.sin(e*7+this.phase)*.35*(u===0?1:-1);this.selected&&this.ring.scale.setScalar(1+Math.sin(e*4)*.06),this.updateFace(),this.place()}place(){const t=this.up,e=this.forward.addScaledVector(t,-t.dot(this.forward));e.lengthSq()<1e-6&&e.set(0,1,0).cross(t),e.normalize();const i=new w().crossVectors(t,e);Zu.makeBasis(i,t,e),this.group.quaternion.setFromRotationMatrix(Zu),this.group.position.copy(t).multiplyScalar(ge),this.group.scale.setScalar(this.size)}}const Ju="pocket-pet-planet:muted",Ne=[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99,880,1046.5],Qu=[[130.81,196,246.94,329.63],[110,164.81,196,261.63],[87.31,130.81,164.81,220],[98,146.83,196,246.94]];class aM{constructor(){this.ctx=null,this.master=null,this.sfxBus=null,this.ambBus=null,this.chord=0,this.padVoices=[],this.noise=null,this.nightK=0,this.ambienceLevel=1,this.rainGain=null,this.muted=localStorage.getItem(Ju)==="1";const t=()=>{if(this.ensure(),this.ctx)for(const e of["pointerdown","keydown","touchend"])window.removeEventListener(e,t,!0)};for(const e of["pointerdown","keydown","touchend"])window.addEventListener(e,t,!0);document.addEventListener("visibilitychange",()=>{this.ctx&&(document.visibilityState==="hidden"?this.ctx.suspend():this.muted||this.ctx.resume())})}get state(){return this.ctx?this.ctx.state:"none"}ensure(){if(this.ctx)return;const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=0;const i=e.createDynamicsCompressor();i.threshold.value=-20,i.ratio.value=4,this.master.connect(i).connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.5,this.sfxBus.connect(this.master),this.ambBus=e.createGain(),this.ambBus.gain.value=0,this.ambBus.connect(this.master);const s=e.sampleRate*2;this.noise=e.createBuffer(1,s,e.sampleRate);const r=this.noise.getChannelData(0);let o=0;for(let a=0;a<s;a++)o=.97*o+.03*(Math.random()*2-1),r[a]=o*3;e.resume(),this.applyMute(!0),this.startAmbience()}tap(t){this.master?.connect(t)}setMuted(t){this.muted=t,localStorage.setItem(Ju,t?"1":"0"),this.applyMute(!1)}applyMute(t){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(this.muted?0:.9,e+(t?2.5:.4)),!this.muted&&this.ctx.state==="suspended"&&this.ctx.resume()}setRain(t){const e=this.ctx;if(!(!e||!this.ambBus||!this.noise)){if(!this.rainGain){if(t<.02)return;const i=e.createBufferSource();i.buffer=this.noise,i.loop=!0;const s=e.createBiquadFilter();s.type="highpass",s.frequency.value=500;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=2600,this.rainGain=e.createGain(),this.rainGain.gain.value=0,i.connect(s).connect(r).connect(this.rainGain).connect(this.ambBus),i.start()}this.rainGain.gain.setTargetAtTime(t*.22,e.currentTime,.8)}}setNight(t){this.nightK=t,this.updateAmbienceLevel()}setFocus(t){this.ambienceLevel=t?.45:1,this.updateAmbienceLevel()}updateAmbienceLevel(){if(!this.ctx||!this.ambBus)return;const t=(.75-this.nightK*.3)*this.ambienceLevel;this.ambBus.gain.setTargetAtTime(t,this.ctx.currentTime,1.2)}startAmbience(){this.updateAmbienceLevel(),this.nextChord();const t=()=>{this.ctx&&(this.ctx.state==="running"&&!this.muted&&Math.random()<.55-this.nightK*.3&&this.musicBox(),window.setTimeout(t,1400+Math.random()*2200))};t(),window.setInterval(()=>this.nextChord(),9e3)}nextChord(){const t=this.ctx;if(!t||!this.ambBus)return;const e=t.currentTime;for(const r of this.padVoices)r.gain.gain.cancelScheduledValues(e),r.gain.gain.setValueAtTime(r.gain.gain.value,e),r.gain.gain.linearRampToValueAtTime(0,e+4),r.osc.forEach(o=>o.stop(e+4.2));this.padVoices=[];const i=Qu[this.chord++%Qu.length],s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=900,s.connect(this.ambBus);for(const r of i){const o=t.createGain();o.gain.value=0,o.gain.linearRampToValueAtTime(.035,e+4),o.connect(s);const a=[-4,4].map(l=>{const c=t.createOscillator();return c.type="triangle",c.frequency.value=r,c.detune.value=l,c.connect(o),c.start(e),c});this.padVoices.push({osc:a,gain:o})}}musicBox(){const t=this.ctx,e=Ne[3+Math.floor(Math.random()*8)];this.tone(e,t.currentTime,1.6,.05,"sine",this.ambBus),Math.random()<.35&&this.tone(e*1.5,t.currentTime+.22,1.3,.03,"sine",this.ambBus)}tone(t,e,i,s,r="sine",o,a){const l=this.ctx,c=l.createOscillator(),h=l.createGain();c.type=r,c.frequency.setValueAtTime(t,e),a&&c.frequency.exponentialRampToValueAtTime(a,e+i*.6),h.gain.setValueAtTime(0,e),h.gain.linearRampToValueAtTime(s,e+.012),h.gain.exponentialRampToValueAtTime(1e-4,e+i),c.connect(h).connect(o??this.sfxBus),c.start(e),c.stop(e+i+.05)}bell(t,e,i=.18,s=1.1){this.tone(t,e,s,i,"sine"),this.tone(t*2.76,e,s*.4,i*.18,"sine")}ready(){return!!this.ctx&&this.ctx.state==="running"&&!this.muted}play(t,e=0){if(!this.ready())return;const i=this.ctx.currentTime+.01;switch(t){case"bloom":this.bell(Ne[8+Math.floor(Math.random()*3)],i,.05,.6);break;case"select":this.bell(Ne[5],i,.12,.6),this.bell(Ne[7],i+.07,.1,.7);break;case"feed":this.tone(330,i,.25,.16,"sine",void 0,520),this.bell(Ne[6],i+.42,.12),this.bell(Ne[8],i+.52,.1);break;case"treat":this.tone(392,i,.22,.15,"sine",void 0,660),[5,7,9,10].forEach((s,r)=>this.bell(Ne[s],i+.4+r*.07,.1));break;case"full":this.tone(220,i,.18,.1,"triangle",void 0,180),this.tone(196,i+.14,.22,.09,"triangle",void 0,160);break;case"evolve":[0,2,4,5,7,9,10].forEach((s,r)=>this.bell(Ne[s],i+r*.09,.12,1.4)),this.shimmer(i+.7,1.4);break;case"egg":this.bell(Ne[4],i,.12),this.bell(Ne[6],i+.15,.12),this.bell(Ne[9],i+.3,.1,1.4);break;case"hatch":this.tone(600,i,.08,.1,"triangle",void 0,900),this.tone(700,i+.1,.08,.1,"triangle",void 0,1e3),[5,7,8,10].forEach((s,r)=>this.bell(Ne[s],i+.3+r*.1,.11));break;case"unlock":[4,6,8].forEach((s,r)=>this.bell(Ne[s],i+r*.11,.11,1.2)),this.shimmer(i+.3,.9);break;case"wear":this.shimmer(i,.5),this.bell(Ne[8],i+.05,.08,.6);break;case"rename":this.bell(Ne[7],i,.1,.7),this.bell(Ne[9],i+.1,.09,.8);break;case"catch":this.bell(Ne[Math.min(Ne.length-1,4+e%7)],i,.09,.5);break;case"gameEnd":[0,4,7,9].forEach((s,r)=>this.bell(Ne[s]*1,i+r*.13,.12,1.3));break}}shimmer(t,e){const i=this.ctx,s=i.createBufferSource();s.buffer=this.noise;const r=i.createBiquadFilter();r.type="bandpass",r.frequency.value=6e3,r.Q.value=2;const o=i.createGain();o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.05,t+.1),o.gain.exponentialRampToValueAtTime(1e-4,t+e),s.connect(r).connect(o).connect(this.sfxBus),s.start(t),s.stop(t+e)}purr(t=1.6){if(!this.ready())return;const e=this.ctx,i=e.currentTime+.01,s=e.createBufferSource();s.buffer=this.noise,s.loop=!0;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=380;const o=e.createGain();o.gain.value=.5;const a=e.createOscillator();a.frequency.value=24;const l=e.createGain();l.gain.value=.5,a.connect(l).connect(o.gain);const c=e.createGain();c.gain.setValueAtTime(0,i);const h=t/2;c.gain.linearRampToValueAtTime(.32,i+h*.35),c.gain.linearRampToValueAtTime(.12,i+h),c.gain.linearRampToValueAtTime(.26,i+h*1.35),c.gain.linearRampToValueAtTime(0,i+t),s.connect(r).connect(o).connect(c).connect(this.sfxBus),s.start(i),a.start(i),s.stop(i+t+.05),a.stop(i+t+.05),this.bell(Ne[6],i+.1,.05,.6)}}const Li={name:"Twinkle",title:"the star peddler",emoji:"🌠"},mf=[{id:"cometcap",item:"cometcap",kind:"outfit",price:6},{id:"stardust",item:"stardust",kind:"outfit",price:8},{id:"moonhalo",item:"moonhalo",kind:"outfit",price:12},{id:"seed:sunpeach",item:"sunpeach",kind:"seed",price:2}];function ca(n){const t=new Date(n.getTime()-432e5);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function lM(n,t){if(t)return!0;let e=2166136261;for(const i of n)e=Math.imul(e^i.charCodeAt(0),16777619);return(e>>>0)%4===0}function cM(n=location.search){const t=new URLSearchParams(n).get("visitor");return t==="1"?!0:t==="0"?!1:null}const Vo=new oe(1,16,12),td=new Map,Bs=n=>td.get(n)??td.set(n,new Ee({color:n})).get(n),hM=new Nn(1,1,10),ed=new _s(1,1,1),uM=Zn((n,t)=>{const e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,245,200,1)"),e.addColorStop(.35,"rgba(255,230,170,0.5)"),e.addColorStop(1,"rgba(255,230,170,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},64);class dM{constructor(t,e,i=!1){this.up=t,this.group=new kt,this.state="arriving",this.body=new kt,this.t=0,this.from=new w,this.spot=new w;const s=this.body,r=new kt,o=new ft(Vo,Bs("#fff1a8"));o.scale.set(.16,.16,.13),r.add(o);for(let f=0;f<5;f++){const g=f/5*Math.PI*2,_=new ft(hM,Bs("#fff1a8"));_.position.set(Math.sin(g)*.17,Math.cos(g)*.17,0),_.rotation.z=-g,_.scale.set(.075,.16,.06),r.add(_)}for(const f of[-1,1]){const g=new ft(Vo,Bs("#4a3b5c"));g.position.set(.05*f,.02,.12),g.scale.set(.022,.03,.01),r.add(g);const _=new ft(Vo,Bs("#ffb3c7"));_.position.set(.09*f,-.03,.105),_.scale.set(.025,.016,.008),r.add(_)}const a=new ft(ed,Bs("#c4a8e0"));a.position.set(0,-.02,-.13),a.scale.set(.16,.14,.09),r.add(a);const l=new ft(ed,Bs("#9b7cc0"));l.position.set(0,0,-.08),l.scale.set(.17,.025,.02),r.add(l);const c=new ft(Vo,new Ee({color:"#ffd38a"}));c.position.set(.24,-.1,.02),c.scale.setScalar(.04),r.add(c),fr(r);const h=new rr(new us({map:uM,transparent:!0,depthWrite:!1,blending:ls,opacity:.85}));h.scale.setScalar(.9),s.add(h,r),s.position.y=.32,this.group.add(s),this.hit=new ft(new oe(.3,8,6),new Ee({visible:!1})),this.hit.position.y=.32,this.group.add(this.hit),this.hit.userData.visitor=this,this.trailPos=new Float32Array(72);const u=new Ae;u.setAttribute("position",new Ie(this.trailPos,3)),this.trail=new Hr(u,new or({color:"#fff3b0",size:.07,transparent:!0,opacity:.9,depthWrite:!1})),this.trail.frustumCulled=!1,Wr(this.group,t,ge),this.spot.copy(this.group.position);const d=new w().crossVectors(e,t).normalize();this.from.copy(t).multiplyScalar(ge+4).addScaledVector(d,3).addScaledVector(e,1.5),i&&(this.state="here",this.t=1),this.update(0,0)}get trailObject(){return this.trail}leave(){this.state==="gone"||this.state==="leaving"||(this.state="leaving",this.t=0)}update(t,e,i){const s=a=>a*a*(3-2*a);(this.state==="arriving"||this.state==="leaving")&&(this.t=Math.min(1,this.t+t/3));let r=1;this.state==="arriving"?(r=s(this.t),this.t>=1&&(this.state="here")):this.state==="leaving"&&(r=1-s(this.t),this.t>=1&&(this.state="gone")),this.group.position.lerpVectors(this.from,this.spot,r),this.group.visible=this.state!=="gone";const o=this.state==="arriving"||this.state==="leaving";if(this.body.position.y=.32+Math.sin(e*2)*.04,i&&this.body.lookAt(i),this.body.rotateY(Math.sin(e*.7)*.3),this.body.rotateZ(Math.sin(e*1.3)*.12+(o?.5:0)),this.trail.visible=o,o)for(let a=0;a<24;a+=3){const l=a/3,c=Math.max(0,r-(this.state==="arriving"?1:-1)*l*.02),h=new w().lerpVectors(this.from,this.spot,c).addScaledVector(this.up,.3);this.trailPos[a]=h.x+Math.sin(l*3+e*9)*.05,this.trailPos[a+1]=h.y+Math.cos(l*2+e*7)*.05,this.trailPos[a+2]=h.z}this.trail.geometry.attributes.position.needsUpdate=o}headWorld(){return this.body.getWorldPosition(new w).addScaledVector(this.up,.15)}}function fM(n,t=112){const e=document.createElement("canvas");e.width=e.height=t;const i=e.getContext("2d"),s=t/112;i.translate(t/2,t/2+4*s);const r=(o,a)=>{i.beginPath();for(let l=0;l<10;l++){const c=l/10*Math.PI*2-Math.PI/2,h=l%2?a:o;i.lineTo(Math.cos(c)*h,Math.sin(c)*h)}i.closePath()};if(i.lineJoin="round",r(46*s,24*s),i.fillStyle="#fff",i.lineWidth=12*s,i.strokeStyle=n?"#fff":"#e7def0",i.stroke(),i.fillStyle=n?"#fff1a8":"#cfc3dc",i.fill(),n){i.fillStyle="#4a3b5c";for(const o of[-9,9])i.beginPath(),i.ellipse(o*s,-2*s,3*s,4.5*s,0,0,Math.PI*2),i.fill();i.fillStyle="#ffb3c7";for(const o of[-16,16])i.beginPath(),i.ellipse(o*s,7*s,4.5*s,2.5*s,0,0,Math.PI*2),i.fill();i.strokeStyle="#4a3b5c",i.lineWidth=2*s,i.beginPath(),i.arc(0,5*s,4*s,.2,Math.PI-.2),i.stroke(),i.fillStyle="#ffd38a",i.beginPath(),i.arc(34*s,18*s,7*s,0,Math.PI*2),i.fill()}else i.fillStyle="#fff",i.font=`800 ${30*s}px sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText("?",0,2*s);return e.toDataURL("image/png")}const nd=Zn((n,t)=>{const e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.7)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},64),pM=Zn((n,t)=>{n.translate(t/2,t/2),n.rotate(.6),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(0,0,t*.42,t*.22,0,0,Math.PI*2),n.fill()},32);class mM{constructor(t,e,i,s){this.season=i,this.festival=s,this.fallers=[],this.fallPoints=null,this.glows=[],this.lanterns=null,this.bunting=null,this.decor=[];const r=Gr(99),a={spring:["#ffc8dd","#ffd6e8","#fff0f6"],autumn:["#ffb37a","#f7a09a","#ffd27a","#e8957c"],summer:["#ffffff","#fffbe6"]}[i];if(a){const c=s?.id==="blossom"?160:i==="summer"?40:80,h=new Float32Array(c*3),u=new Float32Array(c*3),d=new vt;for(let g=0;g<c;g++){const _=new w().randomDirection();this.fallers.push({dir:_,t1:new w().randomDirection().cross(_).normalize(),h:r(),v:.05+r()*.05,ph:r()*10}),d.set(a[g%a.length]).toArray(u,g*3)}const f=new Ae;f.setAttribute("position",new Ie(h,3)),f.setAttribute("color",new Ie(u,3)),this.fallPoints=new Hr(f,new or({size:i==="summer"?.05:.075,map:i==="summer"?nd:pM,vertexColors:!0,transparent:!0,depthWrite:!1,alphaTest:.05})),this.fallPoints.frustumCulled=!1,t.add(this.fallPoints),this.decor.push(i==="autumn"?"falling-leaves":i==="spring"?"falling-petals":"dandelion-fluff")}const l=e.props.filter(c=>c.kind==="pumpkin");l.length&&(this.addGlow(t,l.map(c=>c.normal.clone().multiplyScalar(ge+.06)),["#ffb35c"],.32,s?.id==="pumpkin"?.55:0),s?.id==="pumpkin"&&this.decor.push("glowing-pumpkins")),s?.id==="lantern"&&this.makeLanterns(t,r),s?.id==="winterlights"&&this.makeFairyLights(t,e,r),(s?.id==="blossom"||s?.id==="midsummer")&&this.makeBunting(t,s.id)}addGlow(t,e,i,s,r){const o=new Float32Array(e.length*3),a=new Float32Array(e.length*3),l=new vt;e.forEach((u,d)=>{u.toArray(o,d*3),l.set(i[d%i.length]).toArray(a,d*3)});const c=new Ae;c.setAttribute("position",new Ie(o,3)),c.setAttribute("color",new Ie(a,3));const h=new Hr(c,new or({size:s,map:nd,vertexColors:!0,transparent:!0,depthWrite:!1,blending:ls,opacity:r}));return t.add(h),this.glows.push({points:h,base:r,nightOnly:1-r}),h}makeLanterns(t,e){const s=new rs(new oe(.065,12,8),new Ee({color:"#ffffff"}),22),r=["#ffb46b","#ff9a8f","#ffd27a","#ffc2a8"],o=new vt,a=[];for(let c=0;c<22;c++)s.setColorAt(c,o.set(r[c%r.length])),a.push({dir:new w().randomDirection(),h:e(),v:.035+e()*.03,ph:e()*10});s.frustumCulled=!1,t.add(s);const l=this.addGlow(t,a.map(()=>new w),r,.34,.45);l.frustumCulled=!1,this.lanterns={mesh:s,glow:l,items:a},this.decor.push("floating-lanterns")}makeFairyLights(t,e,i){const s=e.props.filter(f=>f.kind==="tree"||f.kind==="blossom"||f.kind==="pine"),r=7,o=s.length*r,a=new rs(new oe(.011,8,6),new Ee({color:"#ffffff"}),o),l=["#ff8fab","#ffe066","#9bf6ff","#caffbf","#cdb4db"],c=[],h=new Zt,u=new gi,d=new vt;s.forEach((f,g)=>{u.setFromUnitVectors(new w(0,1,0),f.normal);for(let _=0;_<r;_++){const m=_/r*Math.PI*2+i(),p=.22+_/r*.14,S=.13-_/r*.05,y=new w(Math.cos(m)*S,p,Math.sin(m)*S).multiplyScalar(f.scale).applyQuaternion(u).add(f.normal.clone().multiplyScalar(ge-.01));h.makeTranslation(y.x,y.y,y.z),a.setMatrixAt(g*r+_,h),a.setColorAt(g*r+_,d.set(l[(g+_)%l.length])),c.push(y.clone())}}),t.add(a),this.addGlow(t,c,l,.12,.25),this.decor.push("fairy-lights")}makeBunting(t,e){const i=new kt,s=ge+.62,r=new ft(new Fe(s,.006,4,120),new Ee({color:"#ffffff"}));r.rotation.x=Math.PI/2,i.add(r);const o=44,a=new rs(new Nn(.05,.11,3),new Ee({color:"#ffffff",side:zn}),o),l=e==="blossom"?["#ffc8dd","#ffffff","#ffafcc","#fdffb6"]:["#ffd75e","#a0c4ff","#caffbf","#ffadad"],c=new vt,h=new Le;for(let u=0;u<o;u++){const d=u/o*Math.PI*2;h.position.set(Math.cos(d)*s,-.06,Math.sin(d)*s),h.rotation.set(Math.PI,-d,0),h.scale.set(1,1,.15),h.updateMatrix(),a.setMatrixAt(u,h.matrix),a.setColorAt(u,c.set(l[u%l.length]))}i.add(a),i.rotation.set(.45,0,.25),t.add(i),this.bunting=i,this.decor.push("bunting")}tick(t,e,i){if(this.fallPoints){const s=this.fallPoints.geometry.getAttribute("position"),r=s.array;this.fallers.forEach((o,a)=>{o.h-=o.v*t,o.h<0&&(o.h+=1,o.dir.randomDirection(),o.t1.randomDirection().cross(o.dir).normalize());const l=ge+.01+o.h*1.1,c=Math.sin(e*1.1+o.ph)*.09;r[a*3]=o.dir.x*l+o.t1.x*c,r[a*3+1]=o.dir.y*l+o.t1.y*c,r[a*3+2]=o.dir.z*l+o.t1.z*c}),s.needsUpdate=!0}for(const s of this.glows){const r=s.points.material;r.opacity=(s.base+s.nightOnly*i)*(.85+.15*Math.sin(e*3)),s.points.visible=r.opacity>.01}if(this.lanterns){const{mesh:s,glow:r,items:o}=this.lanterns,a=r.geometry.getAttribute("position"),l=new Zt,c=new w;o.forEach((h,u)=>{h.h+=h.v*t,h.h>1&&(h.h=0,h.dir.randomDirection()),c.copy(h.dir).multiplyScalar(ge+.15+h.h*1.6),c.x+=Math.sin(e*.7+h.ph)*.05;const d=Math.min(1,h.h*8,(1-h.h)*5);l.makeScale(d,d*1.25,d).setPosition(c),s.setMatrixAt(u,l),a.setXYZ(u,c.x,c.y,c.z)}),s.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0}this.bunting&&(this.bunting.rotation.y+=t*.05)}}const gM=[{id:"cozy",name:"Cozy"},{id:"scallop",name:"Scallop"},{id:"polaroid",name:"Polaroid"},{id:"starry",name:"Starry"},{id:"none",name:"No frame"}],_M=["💖","⭐","🌸","🍓","🎀","🌈","✨","🐾","🍂","🏮","🎃","❄️","☁️","🌙","🍄","💌"],id='ui-rounded, "SF Pro Rounded", "Nunito", "Varela Round", system-ui, sans-serif';function Zc(n){return n.width>=n.height?[1600,1200]:[1200,1600]}function vM(n,t,e){const i=Math.min(t,e);switch(n){case"none":return[0,0,t,e];case"polaroid":return[i*.06,i*.06,t-i*.12,e-i*.06-i*.2];default:return[i*.07,i*.07,t-i*.14,e-i*.14-i*.05]}}function sd(n,t,e,i,s,r){n.beginPath(),n.roundRect(t,e,i,s,r)}function gf(n,t,e,i,s={}){const{photo:r,frame:o}=i,a=Math.min(t,e);n.save(),n.clearRect(0,0,t,e);const l={cozy:"#fff7fb",scallop:"#ffd9ea",polaroid:"#fffdf8",starry:"#2f2a5e",none:"#000"};if(n.fillStyle=l[o],n.fillRect(0,0,t,e),o==="scallop"){n.fillStyle="#ffffff";const m=a*.022;for(let p=m;p<t;p+=m*2.2)for(const S of[m,e-m])n.beginPath(),n.arc(p,S,m,0,Math.PI*2),n.fill();for(let p=m;p<e;p+=m*2.2)for(const S of[m,t-m])n.beginPath(),n.arc(S,p,m,0,Math.PI*2),n.fill()}if(o==="starry"){let m=7;const p=()=>(m=m*16807%2147483647)/2147483647;for(let S=0;S<90;S++)n.fillStyle=["#fff6a8","#ffd6f0","#c8f7ff","#ffffff"][S%4],n.globalAlpha=.5+p()*.5,n.beginPath(),n.arc(p()*t,p()*e,a*(.002+p()*.004),0,Math.PI*2),n.fill();n.globalAlpha=1}const[c,h,u,d]=vM(o,t,e);n.save(),sd(n,c,h,u,d,o==="none"?0:a*.035),n.clip();const f=Math.max(u/r.width,d/r.height),g=r.width*f,_=r.height*f;if(n.drawImage(r,c+(u-g)/2,h+(d-_)/2,g,_),n.restore(),o!=="none"&&(n.strokeStyle=o==="starry"?"#ffe08a":"#ffffff",n.lineWidth=a*.008,sd(n,c,h,u,d,a*.035),n.stroke()),o!=="none"){const m=h+d+(e-h-d)/2;n.fillStyle=o==="starry"?"#fff3c4":"#7a5a8c",n.textAlign="center",n.textBaseline="middle";let p=a*(o==="polaroid"?.055:.04);n.font=`800 ${p}px ${id}`;const S=t*.88,E=n.measureText(i.caption).width;E>S&&(p*=S/E,n.font=`800 ${p}px ${id}`),n.fillText(i.caption,t/2,m)}s.stickers!==!1&&xM(n,t,e,i.stickers),n.restore()}function xM(n,t,e,i){for(const s of i){const r=s.size*t;n.save(),n.translate(s.x*t,s.y*e),n.rotate(s.rot),n.font=`${r}px "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", sans-serif`,n.textAlign="center",n.textBaseline="middle",n.shadowColor="rgba(255,255,255,0.95)",n.shadowBlur=r*.12,n.fillText(s.emoji,0,r*.04),n.shadowColor="rgba(90,50,110,0.25)",n.shadowBlur=r*.06,n.shadowOffsetY=r*.03,n.fillText(s.emoji,0,r*.04),n.restore()}}function yM(n){const[t,e]=Zc(n.photo),i=document.createElement("canvas");return i.width=t,i.height=e,gf(i.getContext("2d"),t,e,n),new Promise((s,r)=>i.toBlob(o=>o?s(o):r(new Error("PNG encoding failed")),"image/png"))}function MM(n){const t=e=>String(e).padStart(2,"0");return`pocket-pet-planet-${n.getFullYear()}${t(n.getMonth()+1)}${t(n.getDate())}-${t(n.getHours())}${t(n.getMinutes())}.png`}async function SM(n,t){const e=new File([n],t,{type:"image/png"});if(window.matchMedia("(pointer: coarse)").matches&&navigator.canShare?.({files:[e]}))try{return await navigator.share({files:[e],title:"Pocket Pet Planet"}),"shared"}catch(o){if(o.name==="AbortError")return"cancelled"}const s=URL.createObjectURL(n),r=document.createElement("a");return r.href=s,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(s),6e4),"downloaded"}const fs=[{kind:"cottage",name:"Cottage",emoji:"🏡",nap:!0},{kind:"shroomhouse",name:"Mushroom house",emoji:"🍄",nap:!0},{kind:"bench",name:"Bench",emoji:"🪑",hangout:!0},{kind:"lantern",name:"Lantern",emoji:"🏮"},{kind:"flowerbed",name:"Flower bed",emoji:"🌷"},{kind:"well",name:"Wishing well",emoji:"🪣",hangout:!0},{kind:"plot",name:"Garden plot",emoji:"🌱"}],Qo=24,bM=.2,EM=1.7,ks=new oe(1,16,12),ln=new _s(1,1,1),Ho=new Nn(1,1,4),Bn=new vi(1,1,1,12),wM=new oe(1,16,10,0,Math.PI*2,0,Math.PI/2),rd=new Ee({color:"#fff3c4"}),TM=Zn((n,t)=>{const e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,240,190,1)"),e.addColorStop(.3,"rgba(255,220,150,0.6)"),e.addColorStop(1,"rgba(255,220,150,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},64);function Kt(n,t,e,i,s=[0,0,0]){const r=new ft(n,typeof t=="string"?Ht(t):t);return r.position.set(...e),r.scale.set(...i),r.rotation.set(...s),r}function AM(n){const t=new kt;switch(n){case"cottage":{t.add(Kt(ln,"#fff4e6",[0,.07,0],[.16,.14,.13])),t.add(Kt(Ho,"#ff9aa2",[0,.19,0],[.135,.12,.115],[0,Math.PI/4,0])),t.add(Kt(ln,"#c99a7a",[0,.045,.066],[.04,.07,.006]));for(const e of[-1,1])t.add(Kt(ln,rd,[.05*e,.085,.066],[.03,.03,.006]));t.add(Kt(Ho,"#d9707f",[0,.145,0],[.16,.035,.14],[0,Math.PI/4,0])),t.add(Kt(Ho,"#d9707f",[0,.235,0],[.045,.04,.04],[0,Math.PI/4,0])),t.add(Kt(ln,"#c99a7a",[.05,.22,-.025],[.03,.1,.03])),t.add(Kt(ln,"#8e6a5a",[.05,.273,-.025],[.04,.012,.04])),t.add(Kt(ks,"#ffffff",[.055,.31,-.03],[.022,.018,.022])),t.add(Kt(ks,"#ffffff",[.07,.34,-.035],[.016,.013,.016]));for(const e of[.1,.145,.19])t.add(Kt(Bn,"#d8c3a5",[0,.003,e],[.026,.006,.026]));return{g:t,glowAt:[[0,.085,.09]],top:.3}}case"shroomhouse":{t.add(Kt(Bn,"#fff4e6",[0,.07,0],[.065,.14,.065])),t.add(Kt(wM,"#cdb4db",[0,.13,0],[.13,.1,.13]));for(let e=0;e<5;e++){const i=e/5*Math.PI*2;t.add(Kt(ks,"#ffffff",[Math.cos(i)*.08,.2,Math.sin(i)*.08],[.018,.01,.018]))}return t.add(Kt(ln,"#c99a7a",[0,.04,.064],[.035,.06,.006])),t.add(Kt(ks,rd,[0,.1,.062],[.016,.016,.006])),{g:t,glowAt:[[0,.1,.085]],top:.24}}case"lantern":return t.add(Kt(Bn,"#b9a3c9",[0,.11,0],[.01,.22,.01])),t.add(Kt(ln,"#b9a3c9",[.03,.215,0],[.07,.008,.008])),t.add(Kt(ks,new Ee({color:"#ffcf8a"}),[.06,.18,0],[.028,.034,.028])),t.add(Kt(Bn,"#b9a3c9",[.06,.212,0],[.012,.008,.012])),{g:t,glowAt:[[.06,.18,0]],top:.24};case"flowerbed":{t.add(Kt(Bn,"#d9b38c",[0,.012,0],[.11,.024,.07])),t.add(Kt(Bn,"#9ad3a8",[0,.026,0],[.1,.008,.062]));const e=["#ff9ec7","#ffe066","#cdb4db","#ffb3a7","#a0c4ff"];for(let i=0;i<9;i++){const s=(i%3-1)*.06,r=(Math.floor(i/3)-1)*.035;t.add(Kt(Bn,"#7fc79a",[s,.045,r],[.003,.04,.003])),t.add(Kt(ks,e[i%5],[s,.07,r],[.016,.013,.016]))}return{g:t,top:.1}}case"bench":{t.add(Kt(ln,"#e3b98f",[0,.04,0],[.14,.012,.045])),t.add(Kt(ln,"#e3b98f",[0,.075,-.02],[.14,.04,.008]));for(const e of[-1,1])t.add(Kt(ln,"#b9906c",[.06*e,.02,0],[.01,.04,.04]));return{g:t,top:.1}}case"plot":return t.add(Kt(ln,"#f0d3a8",[0,.016,0],[.26,.032,.2])),t.add(Kt(ln,"#c99a7a",[.1,.06,-.085],[.008,.09,.008])),t.add(Kt(ln,"#ff9ec7",[.1,.1,-.08],[.04,.04,.006])),{g:t,top:.14};case"well":{t.add(Kt(Bn,"#e6dff0",[0,.035,0],[.06,.07,.06])),t.add(Kt(Bn,"#a9d4ff",[0,.071,0],[.048,.004,.048]));for(const e of[-1,1])t.add(Kt(Bn,"#c99a7a",[.05*e,.1,0],[.006,.12,.006]));return t.add(Kt(Ho,"#ff9aa2",[0,.18,0],[.085,.06,.06],[0,Math.PI/4,0])),{g:t,top:.22}}}}const _f=Ht("#b58b6a"),CM=Ht("#8a6248"),RM=new Fe(.13,.008,6,36),vf=new Ee({color:"#ffffff",transparent:!0,opacity:.95}),PM=new Ee({color:"#ff6f91",transparent:!0,opacity:.95});function xf(n){const{g:t,glowAt:e,top:i}=AM(n.kind);fr(t);const s=new kt;s.add(t);const r=new ft(new oe(.12,8,6),new Ee({visible:!1}));r.position.y=.08,s.add(r);const o=[];for(const c of e??[]){const h=new rr(new us({map:TM,transparent:!0,depthWrite:!1,blending:ls,opacity:0}));h.position.set(...c),h.scale.setScalar(n.kind==="lantern"?.32:.22),s.add(h),o.push(h)}const a=new ft(RM,vf);a.rotation.x=Math.PI/2,a.position.y=.01,a.visible=!1,s.add(a),s.scale.setScalar(EM);const l={data:n,group:s,hit:r,glow:o,ring:a,top:i};return n.kind==="plot"&&(l.soil=new ft(ln,_f),l.soil.position.y=.0325,l.soil.scale.set(.22,.004,.16),l.plant=new kt,s.add(l.soil,l.plant)),r.userData.decor=l,Ea(l),l}function Ea(n){Wr(n.group,new w(...n.data.pos).normalize(),ge-.005,n.data.rot)}function ha(n,t,e=!0){n.ring.visible=t,n.ring.material=e?vf:PM}function wa(n,t,e,i){if(t.some(s=>s.angleTo(n)<Xr+.05))return"pond";for(const s of e)if(s!==i&&new w(...s.data.pos).angleTo(n)<bM)return"crowded";return null}function LM(n){return fs.some(t=>t.kind===n)}const yf=3*6e4,DM=20*6e4,IM=12,UM=75,NM=50,od=["Mo","Pi","Bu","Lu","Ko","Mi","Nu","Ta","Pu","Fi","Yu","Bo","Chi","Su"],ad=["chi","po","bu","mi","ki","ri","nu","lo","mo","pi","ffy","ko","bean","dle"],ua=n=>n.look?.color??Je[n.species].colors[0],jr=n=>n.look?.feature??n.species;function FM(n,t=Math.random){for(let e=0;e<40;e++){const i=od[Math.floor(t()*od.length)]+ad[Math.floor(t()*ad.length)];if(!n.includes(i))return i}return"Bubbles"}function OM(n,t,e,i=Math.random){const[s,r]=i()<.5?[n,t]:[t,n],o=s.species,a=i()<.75?jr(r):jr(s),l=new vt(ua(n)).lerp(new vt(ua(t)),.35+i()*.3);l.offsetHSL((i()-.5)*.06,.04,.01);const c={color:"#"+l.getHexString(),feature:a};return i()<.45&&(c.spots=Je[r.species].accent),{name:FM(e,i),species:o,look:c,parents:[n.name,t.name],parentIds:[n.id,t.id]}}const BM=new oe(1,24,18),kM=new oe(1,10,8);class Mf{constructor(t){this.data=t,this.group=new kt,this.shell=new kt,this.nudge=0,this.up=new w(...t.pos).normalize();const e=new vt(ua(t.baby)).lerp(new vt("#ffffff"),.35),i=new ft(BM,Ht("#"+e.getHexString()));i.scale.set(.1,.13,.1),i.position.y=.12,this.shell.add(i);const s=Ht(t.baby.look?.spots??Je[jr(t.baby)].accent);for(let o=0;o<7;o++){const a=new w().randomDirection();a.y=Math.abs(a.y)*.8+.1,a.normalize();const l=new ft(kM,s);l.position.set(a.x*.098,.12+a.y*.125,a.z*.098),l.scale.setScalar(.018+Math.random()*.01),this.shell.add(l)}const r=new ft(new Fe(.1,.03,8,20),Ht("#e8cfa6"));r.rotation.x=Math.PI/2,r.position.y=.02,this.hit=new ft(new oe(.2,10,8),new Ee({visible:!1})),this.hit.position.y=.12,this.hit.userData.egg=this,this.group.add(r,this.shell,this.hit),this.group.position.copy(this.up).multiplyScalar(ge),this.group.quaternion.setFromUnitVectors(new w(0,1,0),this.up)}poke(){this.nudge=.8}update(t,e,i){const s=this.data.hatchAt-i,r=bn.clamp(1-s/yf,0,1);this.nudge=Math.max(0,this.nudge-t);const o=.04+r*r*.22+this.nudge*.3,a=Math.sin(e*1.7)>.6?1:.25;this.shell.rotation.z=Math.sin(e*14)*o*a,this.shell.rotation.x=Math.cos(e*11)*o*.4*a}}function zM(n=location.search){const t=new URLSearchParams(n).get("time");if(!t)return null;const e=/^(\d{1,2})(?::(\d{2}))?$/.exec(t.trim());if(!e)return null;const i=Number(e[1]),s=Number(e[2]??0);return i>23||s>59?null:i+s/60}function VM(n=new Date){return n.getHours()+n.getMinutes()/60+n.getSeconds()/3600}function HM(n){const t=(e,i,s)=>bn.smoothstep(s,e,i);return n>=7&&n<=17.5?0:n>17.5&&n<20.5?t(17.5,20.5,n):n>=5&&n<7?1-t(5,7,n):1}const Go={day:["#c9b8f0","#f2c6e3","#ffe1c7"],dusk:["#8e7fd0","#e59bc3","#ffc3a0"],night:["#1c1d4a","#33306e","#5d4a8a"]};function GM(n){const[t,e,i]=n<.5?[Go.day,Go.dusk,n*2]:[Go.dusk,Go.night,(n-.5)*2];return t.map((s,r)=>"#"+new vt(s).lerp(new vt(e[r]),i).getHexString())}const WM=()=>Zn((n,t)=>{const e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.2,"rgba(255,255,255,0.85)"),e.addColorStop(.5,"rgba(255,255,255,0.25)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},64);class XM{constructor(t,e,i,s,r){this.hemi=e,this.sun=i,this.override=s,this.halo=r,this.night=0,this.hour=12,this.cloudy=0,this.fireflies=[],this.lanternGlows=[],this.sinceSky=99,this.lastSky="";const o=Gr(7),a=WM(),l=[],c=[],h=["#ffffff","#ffe9f6","#e6e0ff","#fff6cf"].map(d=>new vt(d));for(let d=0;d<260;d++){const f=new w().randomDirection().multiplyScalar(35+o()*10);l.push(f.x,f.y,f.z);const g=h[Math.floor(o()*h.length)];c.push(g.r,g.g,g.b)}const u=new Ae;u.setAttribute("position",new de(l,3)),u.setAttribute("color",new de(c,3)),this.stars=new Hr(u,new or({size:.35,map:a,vertexColors:!0,transparent:!0,depthWrite:!1,opacity:0})),this.stars.renderOrder=-2,t.add(this.stars),this.bulbs=new Ee({color:"#fff3c4"});for(let d=0;d<7;d++){const f=new w().randomDirection(),g=new kt,_=new ft(new vi(.012,.016,.26,8),Ht("#b9a3c9"));_.position.y=.13;const m=new ft(new Nn(.05,.04,12),Ht("#b9a3c9"));m.position.y=.3;const p=new ft(new oe(.035,12,10),this.bulbs);p.position.y=.265;const S=new rr(new us({map:a,color:"#ffd98a",transparent:!0,depthWrite:!1,blending:ls,opacity:0}));S.position.y=.265,S.scale.setScalar(.4),g.add(_,m,p,S),Wr(g,f,ge-.01,o()*6),t.add(g),this.lanternGlows.push(S)}for(let d=0;d<42;d++){const f=new w().randomDirection(),g=new w().randomDirection().cross(f).normalize(),_=new w().crossVectors(f,g),m=new rr(new us({map:a,color:d%3?"#fff7a8":"#d8ffb0",transparent:!0,depthWrite:!1,blending:ls,opacity:0}));m.scale.setScalar(.07+o()*.05),m.renderOrder=4,t.add(m),this.fireflies.push({sprite:m,base:f,t1:g,t2:_,phase:o()*100,speed:.4+o()*.6})}this.tick(0,0,!0)}get fireflyOpacity(){return this.fireflies[0]?.sprite.material.opacity??0}tick(t,e,i=!1){if(this.sinceSky+=t,i||this.sinceSky>1){this.sinceSky=0,this.hour=this.override??VM(),this.night=HM(this.hour);const r=GM(this.night),o=`linear-gradient(180deg, ${r[0]} 0%, ${r[1]} 50%, ${r[2]} 100%)`;o!==this.lastSky&&(this.lastSky=o,document.body.style.background=o,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",r[0]),document.body.classList.toggle("is-night",this.night>.5));const a=this.night;this.hemi.intensity=bn.lerp(1.6,.75,a)*(1-this.cloudy*.2),this.hemi.color.set("#fff6fb").lerp(new vt("#aab2ff"),a),this.hemi.groundColor.set("#c9b3e6").lerp(new vt("#5b4f9a"),a),this.sun.intensity=bn.lerp(1.5,.55,a)*(1-this.cloudy*.35),this.sun.color.set("#ffffff").lerp(new vt("#c9c4ff"),a),this.stars.material.opacity=a*(1-this.cloudy*.8),this.halo.material.color.set("#ffffff").lerp(new vt("#9d8cff"),a),this.halo.material.opacity=1-a*.35,this.stars.visible=a>.01}const s=this.night;for(const r of this.lanternGlows)r.material.opacity=s*(.85+Math.sin(e*3+r.id)*.1),r.visible=s>.01;this.bulbs.color.set("#efe4f4").lerp(new vt("#fff1b8"),s);for(const r of this.fireflies){if(r.sprite.visible=s>.01,!r.sprite.visible)continue;const o=e*r.speed+r.phase,a=.22;r.sprite.position.copy(r.base).addScaledVector(r.t1,Math.sin(o)*a).addScaledVector(r.t2,Math.cos(o*.7)*a).normalize().multiplyScalar(ge+.18+Math.sin(o*1.3)*.08),r.sprite.material.opacity=s*(1-this.cloudy)*(.55+.45*Math.sin(o*3.1))}}}function Sf(n,t,e,i,s){const r=s.silhouette,o=r??s.color,a=r??Je[s.feature].accent,l=r||"#3d3047",c=s.stage??0,h=i/34;n.save(),n.translate(t,e),n.scale(h,h);const u=34;if(c>=2){n.fillStyle=r??"rgba(253,246,255,0.95)";for(const d of[-1,1])n.beginPath(),n.ellipse(34*d,-8,20,11,-.5*d,0,Math.PI*2),n.fill()}if(c>=1&&(n.fillStyle=r??"#fffafd",n.beginPath(),n.arc(30,18,11,0,Math.PI*2),n.fill()),n.fillStyle=o,s.feature==="mochi")for(const d of[-1,1])n.save(),n.rotate((c>=1?.35:.22)*d),n.beginPath(),n.ellipse(13*d,-u-14,8,22,0,0,Math.PI*2),n.fill(),r||(n.fillStyle="#ffd9e8",n.beginPath(),n.ellipse(13*d,-u-14,4,15,0,0,Math.PI*2),n.fill(),n.fillStyle=o),n.restore();else if(s.feature==="puff")for(const d of[-1,1])n.beginPath(),n.moveTo(10*d,-u+4),n.lineTo(24*d,-u-16),n.lineTo(30*d,-u+12),n.fill();else if(s.feature==="bloop"){n.strokeStyle=o,n.lineWidth=3;const d=c>=1?[[0,-u-18],[-14,-u-10],[14,-u-10]]:[[0,-u-18]];for(const[f,g]of d)n.beginPath(),n.moveTo(0,-u+2),n.lineTo(f,g+4),n.stroke();n.fillStyle=a;for(const[f,g]of d)n.beginPath(),n.arc(f,g,f===0?6:4.5,0,Math.PI*2),n.fill()}else{n.fillStyle=a;for(const d of[-1,1])n.beginPath(),n.ellipse(8*d,-u-6,9,4,.5*d,0,Math.PI*2),n.fill();c>=1&&(n.fillStyle=r??(c>=2?"#ffe066":"#ffafcc"),n.beginPath(),n.arc(0,-u-9,5,0,Math.PI*2),n.fill())}if(n.fillStyle=o,n.beginPath(),n.ellipse(0,0,u,u*.92,0,0,Math.PI*2),n.fill(),r){n.restore();return}if(s.spots){n.fillStyle=s.spots;for(const[d,f,g]of[[-20,-16,5],[22,-12,4],[-25,8,3.5]])n.beginPath(),n.arc(d,f,g,0,Math.PI*2),n.fill()}n.fillStyle="#fff7fb",n.beginPath(),n.ellipse(0,9,u*.6,u*.48,0,0,Math.PI*2),n.fill(),n.fillStyle=l,n.strokeStyle=l;for(const d of[-1,1])n.beginPath(),s.happy?(n.lineWidth=3,n.arc(12*d,-6,5,Math.PI*1.1,Math.PI*1.9),n.stroke()):(n.ellipse(12*d,-6,4.5,5.5,0,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(12*d+1.5,-8,1.6,0,Math.PI*2),n.fill(),n.fillStyle=l);n.fillStyle="rgba(255,143,184,0.75)";for(const d of[-1,1])n.beginPath(),n.ellipse(22*d,3,6,3.5,0,0,Math.PI*2),n.fill();n.fillStyle=l,n.beginPath(),s.happy?(n.ellipse(0,4,6,6,0,0,Math.PI),n.fill()):(n.lineWidth=2.5,n.arc(0,2,4,.15*Math.PI,.85*Math.PI),n.stroke()),c>=2&&(n.strokeStyle="#ffd166",n.lineWidth=4,n.beginPath(),n.ellipse(0,-u-(s.feature==="mochi"?40:26),15,5,0,0,Math.PI*2),n.stroke()),n.restore()}const $M=10,YM=n=>Math.min($M,Math.ceil(n/3)),jM={berry:1,peach:1,blue:1,star:3},ld={berry:"#ff6f91",peach:"#ffb38a",blue:"#8fa8ff",star:"#ffd166"};class qM{constructor(t,e,i,s=30){this.player=t,this.onEnd=e,this.onClose=i,this.duration=s,this.fruits=[],this.pops=[],this.phase="intro",this.reward=0,this.onCatch=null,this.score=0,this.caught=0,this.missed=0,this.combo=0,this.petX=0,this.targetX=0,this.spawnT=0,this.happyT=0,this.last=0,this.raf=0,this.keys=new Set,this.w=0,this.h=0,this.dpr=1,this.cleanup=[],this.loop=()=>{const a=performance.now(),l=Math.min(.12,(a-this.last)/1e3);this.last=a,this.phase==="play"&&this.step(l),this.draw(a/1e3),this.raf=requestAnimationFrame(this.loop)},this.timeLeft=s,this.root=document.getElementById("game"),this.canvas=document.getElementById("gameCanvas"),this.ctx=this.canvas.getContext("2d"),document.getElementById("gameTitle").textContent=`Fruit Catch with ${t.name}`,this.showCard("intro"),this.root.classList.remove("hidden"),this.resize(),this.petX=this.targetX=this.w/2;const r=(a,l,c,h)=>{a.addEventListener(l,c,h),this.cleanup.push(()=>a.removeEventListener(l,c,h))},o=a=>{if(this.phase!=="play")return;const l=this.canvas.getBoundingClientRect();this.targetX=Math.min(this.w-30,Math.max(30,a.clientX-l.left))};r(this.canvas,"pointerdown",a=>{this.canvas.setPointerCapture(a.pointerId),o(a)}),r(this.canvas,"pointermove",o),r(window,"keydown",a=>{this.keys.add(a.key),a.key==="Escape"&&this.close()}),r(window,"keyup",a=>this.keys.delete(a.key)),r(window,"resize",()=>this.resize()),r(document.getElementById("gameStart"),"click",()=>this.start()),r(document.getElementById("gameAgain"),"click",()=>this.restart());for(const a of["gameClose","gameDone"])r(document.getElementById(a),"click",()=>this.close());this.last=performance.now(),this.loop()}showCard(t){document.getElementById("gameIntro").classList.toggle("hidden",t!=="intro"),document.getElementById("gameEnd").classList.toggle("hidden",t!=="done")}resize(){this.dpr=Math.min(window.devicePixelRatio,2),this.w=window.innerWidth,this.h=window.innerHeight,this.canvas.width=this.w*this.dpr,this.canvas.height=this.h*this.dpr}get catchY(){return this.h-Math.max(110,this.h*.16)}start(){this.phase="play",this.showCard(null)}restart(){Object.assign(this,{fruits:[],pops:[],score:0,reward:0,caught:0,missed:0,combo:0,timeLeft:this.duration,spawnT:0}),this.start()}close(){cancelAnimationFrame(this.raf),this.cleanup.forEach(t=>t()),this.root.classList.add("hidden"),this.onClose()}state(){return{phase:this.phase,reward:this.reward,timeLeft:this.timeLeft,score:this.score,caught:this.caught,missed:this.missed,combo:this.combo,petX:this.petX,catchY:this.catchY,fruits:this.fruits.map(t=>({x:t.x,y:t.y,kind:t.kind}))}}step(t){this.timeLeft=Math.max(0,this.timeLeft-t);const e=1-this.timeLeft/this.duration;if((this.keys.has("ArrowLeft")||this.keys.has("a"))&&(this.targetX-=520*t),(this.keys.has("ArrowRight")||this.keys.has("d"))&&(this.targetX+=520*t),this.targetX=Math.min(this.w-30,Math.max(30,this.targetX)),this.petX+=(this.targetX-this.petX)*Math.min(1,t*14),this.spawnT-=t,this.spawnT<=0&&this.timeLeft>.6){this.spawnT=.75-e*.35;const r=Math.random(),o=r<.08?"star":r<.4?"berry":r<.7?"peach":"blue";this.fruits.push({x:30+Math.random()*(this.w-60),y:-20,vy:(150+e*120+Math.random()*40)*(o==="star"?1.25:1),kind:o,spin:Math.random()*6})}const i=this.catchY,s=46;for(let r=this.fruits.length-1;r>=0;r--){const o=this.fruits[r],a=o.y;if(o.y+=o.vy*t,o.spin+=t*2,a<i&&o.y>=i-4&&Math.abs(o.x-this.petX)<s){this.fruits.splice(r,1),this.combo++;const l=this.combo>0&&this.combo%5===0?1:0,c=jM[o.kind]+l;this.score+=c,this.caught++,this.happyT=.35,this.onCatch?.(this.combo),this.pops.push({x:o.x,y:i-50,text:l?`+${c} combo!`:`+${c}`,t:.9})}else o.y>this.h+30&&(this.fruits.splice(r,1),this.missed++,this.combo=0)}for(let r=this.pops.length-1;r>=0;r--)this.pops[r].t-=t,this.pops[r].y-=40*t,this.pops[r].t<=0&&this.pops.splice(r,1);if(this.happyT=Math.max(0,this.happyT-t),this.timeLeft<=0&&this.fruits.length===0)this.finish();else if(this.timeLeft<=0)for(const r of this.fruits)r.vy=Math.max(r.vy,600)}finish(){this.phase="done",this.reward=YM(this.score),document.getElementById("gameResult").textContent=`${this.player.name} caught ${this.caught} fruit!`,document.getElementById("gameReward").textContent=`+${this.reward} snack${this.reward===1?"":"s"} 🍓`,document.getElementById("gameScore").textContent=`${this.score} points`,this.showCard("done"),this.onEnd(this.reward)}draw(t){const{ctx:e,w:i,h:s,dpr:r}=this;e.setTransform(r,0,0,r,0,0);const o=e.createLinearGradient(0,0,0,s);o.addColorStop(0,"#d7c6f5"),o.addColorStop(.6,"#f7d3ea"),o.addColorStop(1,"#ffe6cf"),e.fillStyle=o,e.fillRect(0,0,i,s),e.fillStyle="#c4ecce",e.beginPath(),e.moveTo(0,s),e.lineTo(0,this.catchY+34),e.quadraticCurveTo(i/2,this.catchY+10,i,this.catchY+34),e.lineTo(i,s),e.fill(),e.fillStyle="rgba(255,255,255,0.8)";for(let c=0;c<4;c++){const h=(t*(12+c*5)+c*280)%(i+200)-100,u=90+c*70;for(const[d,f]of[[0,26],[28,32],[58,24]])e.beginPath(),e.arc(h+d,u,f,0,Math.PI*2),e.fill()}for(const c of this.fruits)this.drawFruit(c);this.drawPet(t),e.textAlign="center",e.font="800 18px ui-rounded, system-ui, sans-serif";for(const c of this.pops)e.globalAlpha=Math.min(1,c.t*2),e.fillStyle="#ffffff",e.strokeStyle="#e37fb1",e.lineWidth=4,e.strokeText(c.text,c.x,c.y),e.fillText(c.text,c.x,c.y);e.globalAlpha=1;const a=document.getElementById("gameHud"),l=`⏱ ${Math.ceil(this.timeLeft)}s   🍓 ${this.score}${this.combo>=3?`   🔥 ${this.combo}`:""}`;a.textContent!==l&&(a.textContent=l)}drawFruit(t){const{ctx:e}=this;if(e.save(),e.translate(t.x,t.y),e.rotate(Math.sin(t.spin)*.3),t.kind==="star"){e.fillStyle=ld.star,e.strokeStyle="#fff6c8",e.lineWidth=3,e.beginPath();for(let i=0;i<10;i++){const s=i/10*Math.PI*2-Math.PI/2,r=i%2?9:20;e.lineTo(Math.cos(s)*r,Math.sin(s)*r)}e.closePath(),e.fill(),e.stroke()}else{const i=t.kind==="blue"?12:16;e.fillStyle=ld[t.kind],e.beginPath(),t.kind==="berry"?(e.moveTo(0,i),e.bezierCurveTo(-i*1.3,0,-i,-i,0,-i*.8),e.bezierCurveTo(i,-i,i*1.3,0,0,i)):e.arc(0,0,i,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,255,0.65)",e.beginPath(),e.arc(-i*.35,-i*.3,i*.25,0,Math.PI*2),e.fill(),e.fillStyle="#7fcf9a",e.beginPath(),e.ellipse(3,-i-2,7,3.5,-.4,0,Math.PI*2),e.fill()}e.restore()}drawPet(t){const{ctx:e}=this,i=this.petX,s=this.happyT>0,r=s?Math.sin(this.happyT/.35*Math.PI)*10:Math.abs(Math.sin(t*6))*(Math.abs(this.targetX-this.petX)>4?5:1.5);e.fillStyle="rgba(122,90,140,0.18)",e.beginPath(),e.ellipse(i,this.catchY+38,30,7,0,0,Math.PI*2),e.fill(),Sf(e,i,this.catchY+4-r,34,{...this.player,happy:s})}}const ml=["mochi","puff","bloop","sprout"],KM={mochi:"bunny ears",puff:"kitty ears",bloop:"antenna",sprout:"leaf sprout"},ZM=["Starts on the planet","Evolve with care","Evolve again with lots of care"],ns=[...ml.flatMap(n=>Je[n].forms.map((t,e)=>({id:`form:${n}:${e}`,kind:"form",name:`${["Baby","Young","Starry"][e]} ${t}`,species:n,feature:n,stage:e,hint:ZM[e]}))),...ml.flatMap(n=>ml.filter(t=>t!==n).map(t=>({id:`mix:${n}+${t}`,kind:"mix",name:`${Je[n].forms[0]} with ${KM[t]}`,species:n,feature:t,stage:0,hint:`Hatch a ${Je[n].forms[0]} baby from a ${Je[t].forms[0]} parent`})))],bf=n=>ns.find(t=>t.id===n);function JM(n){const t=[];for(let i=0;i<=Math.min(2,n.stage);i++)t.push(`form:${n.species}:${i}`);const e=jr(n);return e!==n.species&&t.push(`mix:${n.species}+${e}`),t}function Ef([n,t,e]){if(t>.62)return"Frosty North";if(t<-.62)return"Southern Burrows";const i=Math.atan2(e,n);return["Blossom Meadow","Mushroom Glade","Pebble Shore","Lantern Hollow"][Math.floor((i+Math.PI)/(Math.PI*2)*4)%4]}const cd=new Map;function QM(n,t,e=112){const i=`${n.id}:${t}:${e}`,s=cd.get(i);if(s)return s;const r=document.createElement("canvas");r.width=r.height=e;const o=r.getContext("2d"),a=e/112;t&&(o.shadowColor="rgba(140,90,160,0.25)",o.shadowBlur=6*a,o.fillStyle="#ffffff",o.beginPath(),o.arc(e/2,e/2+4*a,44*a,0,Math.PI*2),o.fill(),o.shadowBlur=0);const l=n.kind==="mix"?tS(n.species,n.feature):Je[n.species].colors[n.stage];Sf(o,e/2,e/2+14*a,26*a,{color:l,feature:n.feature,stage:n.stage,happy:!0,silhouette:t?void 0:"#cbbfdc"}),t||(o.fillStyle="#ffffff",o.font=`800 ${26*a}px ui-rounded, system-ui, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText("?",e/2,e/2+14*a));const c=r.toDataURL("image/png");return cd.set(i,c),c}function tS(n,t){const e=hd(Je[n].colors[0]),i=hd(Je[t].colors[0]);return"#"+e.map((r,o)=>Math.round(r*.6+i[o]*.4)).map(r=>r.toString(16).padStart(2,"0")).join("")}const hd=n=>[1,3,5].map(t=>parseInt(n.slice(t,t+2),16));function ud(n){return new Date(n).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}const eS=["clear","rain","snow","rainbow"];function nS(n=location.search){const t=new URLSearchParams(n).get("weather");return eS.includes(t)?t:null}const iS=8*6e4,dd=9e4,sS=.35;function rS(n,t,e="autumn"){const i=Gr(n*7919+13)(),[s,r]={spring:[.3,0],summer:[.15,0],autumn:[.3,.03],winter:[.06,.4+t*.1]}[e];return i<s?"rain":i<s+r?"snow":"clear"}const oS=()=>Zn((n,t)=>{const e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)},32),aS=["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#bdb2ff"],fd=26,pd=520;class lS{constructor(t,e,i,s,r){this.world=i,this.override=s,this.kind="clear",this.rain=0,this.snow=0,this.dust=0,this.rainbow=0,this.onBloom=null,this.segment=-1,this.rainbowUntil=0,this.extra=[],this.dropState=[],this.flakeState=[],this.bowMats=[],this.lastDust=-1,this.cloudColor=new vt,this.cloudWorld=[],this.blooms=i.flowers.map((g,_)=>typeof r?.[_]=="number"?bn.clamp(r[_],0,1):sS);for(let g=0;g<6;g++){const _=i.makeCloud();_.extra=!0,_.cloud.scale.setScalar(.001),i.clouds.push(_),this.extra.push(_)}const o=i.clouds.length;this.cloudWorld=i.clouds.map(()=>new w);const a=new Float32Array(o*fd*6);for(let g=0;g<o;g++)for(let _=0;_<fd;_++)this.dropState.push({cloud:g,off:new st((Math.random()-.5)*.36,(Math.random()-.5)*.16),h:Math.random(),v:1.6+Math.random()*.6});const l=new Ae;l.setAttribute("position",new Ie(a,3)),this.drops=new vx(l,new Jd({color:"#a9c8ff",transparent:!0,opacity:0,depthWrite:!1})),this.drops.frustumCulled=!1,this.drops.visible=!1,t.add(this.drops);const c=new Float32Array(pd*3);for(let g=0;g<pd;g++){const _=new w().randomDirection(),m=new w().randomDirection().cross(_).normalize();this.flakeState.push({dir:_,t1:m,h:Math.random(),v:.18+Math.random()*.12,ph:Math.random()*10})}const h=new Ae;h.setAttribute("position",new Ie(c,3)),this.flakes=new Hr(h,new or({map:oS(),size:.07,transparent:!0,depthWrite:!1,opacity:0})),this.flakes.frustumCulled=!1,this.flakes.visible=!1,t.add(this.flakes),this.bow=new kt,aS.forEach((g,_)=>{const m=new Ee({color:g,transparent:!0,opacity:0,depthWrite:!1});this.bowMats.push(m);const p=new ft(new Fe(5.6-_*.16,.085,8,96,Math.PI),m);this.bow.add(p)}),this.bow.position.set(0,-1.6,-15),this.bow.visible=!1,this.bow.renderOrder=-1,e.add(this.bow);const u=i.planet.geometry.getAttribute("color");this.planetBase=Float32Array.from(u.array);const d=i.planet.geometry.getAttribute("position");this.planetNoise=new Float32Array(d.count);for(let g=0;g<d.count;g++){const _=d.getX(g),m=d.getY(g),p=d.getZ(g),S=.5+.25*Math.sin(_*5.1+m*2.3)*Math.cos(p*4.7-_*1.1)+.25*Math.sin(m*7.3+p*3.1);this.planetNoise[g]=bn.clamp(S*.7+Math.abs(m/ge)*.3,0,1)}this.tint=document.createElement("div"),this.tint.className="weather-tint",document.body.prepend(this.tint),this.kind=s??"clear";const f=this.kind;this.rain=f==="rain"?1:0,this.snow=f==="snow"?1:0,this.rainbow=f==="rainbow"?1:0,this.dust=f==="snow"?1:0}set(t,e=0){t!==this.kind&&(this.kind==="rain"&&t==="clear"&&e<.4&&(t="rainbow",this.rainbowUntil=Date.now()+dd),t==="rainbow"&&!this.rainbowUntil&&(this.rainbowUntil=Date.now()+dd),this.kind=t)}get emoji(){return{clear:"",rain:"🌧️",snow:"❄️",rainbow:"🌈"}[this.kind]}view(){const t=this.blooms;return{kind:this.kind,rain:this.rain,snow:this.snow,dust:this.dust,rainbow:this.rainbow,bloomAvg:t.reduce((e,i)=>e+i,0)/t.length,bloomMin:Math.min(...t),bloomMax:Math.max(...t),blooms:[...t]}}dryOut(t){const e=t/36e5;this.blooms=this.blooms.map(i=>Math.max(.2,i-.03*e))}tick(t,e,i){if(!this.override){const o=Math.floor(Date.now()/iS);if(o!==this.segment){const a=this.segment<0;this.segment=o;const l=rS(o,i,this.world.season);a?(this.kind=l,this.rain=l==="rain"?1:0,this.snow=this.dust=l==="snow"?1:0):this.set(l,i)}}this.kind==="rainbow"&&(i>.5||!this.override&&Date.now()>this.rainbowUntil)&&(this.kind="clear",this.rainbowUntil=0);const s=(o,a,l)=>o+(a-o)*Math.min(1,t*l);this.rain=s(this.rain,this.kind==="rain"?1:0,.6),this.snow=s(this.snow,this.kind==="snow"?1:0,.6),this.rainbow=s(this.rainbow,this.kind==="rainbow"&&i<.5?1:0,.5),this.dust=bn.clamp(this.dust+(this.kind==="snow"?t/25:-t/40),0,1);const r=Math.max(this.rain,this.snow*.6);this.cloudColor.set("#ffffff").lerp(new vt("#bcb4d6"),this.rain*.85).lerp(new vt("#eef0ff"),this.snow*.5),this.world.cloudMat.color.copy(this.cloudColor);for(const o of this.extra)o.cloud.scale.setScalar(Math.max(.001,r));this.tint.style.opacity=String(r*(.35-i*.2)),this.updateRain(t),this.updateSnow(t,e),this.updateBow(),this.updateDust(),this.updateFlowers(t)}updateRain(t){const e=this.rain>.02;if(this.drops.visible=e,!e)return;this.drops.material.opacity=this.rain*.7,this.world.clouds.forEach((c,h)=>c.cloud.getWorldPosition(this.cloudWorld[h]));const i=this.drops.geometry.getAttribute("position"),s=i.array,r=new w,o=new w,a=new w,l=new w;this.dropState.forEach((c,h)=>{const u=this.cloudWorld[c.cloud],d=u.length();r.copy(u).normalize(),o.set(0,1,0).cross(r).normalize(),a.crossVectors(r,o),c.h+=c.v*t/(d-ge),c.h>1&&(c.h-=1);const f=d-.08-(d-.08-ge)*c.h,g=this.world.clouds[c.cloud].cloud.scale.x,_=g>.2?.07:0;l.copy(r).multiplyScalar(f).addScaledVector(o,c.off.x*g).addScaledVector(a,c.off.y*g),s.set([l.x,l.y,l.z],h*6),l.addScaledVector(r,-_),s.set([l.x,l.y,l.z],h*6+3)}),i.needsUpdate=!0}updateSnow(t,e){const i=this.snow>.02;if(this.flakes.visible=i,!i)return;this.flakes.material.opacity=this.snow;const s=this.flakes.geometry.getAttribute("position"),r=s.array;this.flakeState.forEach((o,a)=>{o.h-=o.v*t,o.h<0&&(o.h+=1,o.dir.randomDirection(),o.t1.randomDirection().cross(o.dir).normalize());const l=ge+.02+o.h*1.3,c=Math.sin(e*1.3+o.ph)*.05;r[a*3]=o.dir.x*l+o.t1.x*c,r[a*3+1]=o.dir.y*l+o.t1.y*c,r[a*3+2]=o.dir.z*l+o.t1.z*c}),s.needsUpdate=!0}updateBow(){this.bow.visible=this.rainbow>.01,this.bowMats.forEach(t=>t.opacity=this.rainbow*.7)}updateDust(){if(Math.abs(this.dust-this.lastDust)<.01&&!(this.dust===0&&this.lastDust>0))return;this.lastDust=this.dust;const t=this.world.planet.geometry.getAttribute("color"),e=t.array,i=1-this.dust;for(let s=0;s<this.planetNoise.length;s++){const r=bn.smoothstep(this.planetNoise[s]-i,-.02,.12)*.88;for(let o=0;o<3;o++)e[s*3+o]=this.planetBase[s*3+o]+(1-this.planetBase[s*3+o])*r}t.needsUpdate=!0}updateFlowers(t){const e=this.rain>.3,i=.42,s=new w;this.world.flowers.forEach((r,o)=>{let a=this.blooms[o];if(e){let h=!1;for(let d=0;d<this.world.clouds.length;d++)if(!(this.world.clouds[d].cloud.scale.x<.3)&&s.copy(this.cloudWorld[d]).normalize().angleTo(r.normal)<i){h=!0;break}const u=a;a=Math.min(1,a+t*(h?.14:.012)*this.rain),u<.9&&a>=.9&&this.onBloom?.(r.obj.position.clone().addScaledVector(r.normal,.12),r.normal)}this.blooms[o]=a;const l=r.baseScale*(.75+.5*a);r.obj.scale.setScalar(l),r.stem.scale.y=.8+.35*a,r.head.position.y=.085*(.8+.35*a),r.head.rotation.z=(1-a)*.55;const c=(1-a)*1.15;for(const h of r.petals)h.rotation.z=c;r.head.scale.setScalar(.8+.6*a)})}}const Hn={spring:{name:"Spring",emoji:"🌸"},summer:{name:"Summer",emoji:"🌻"},autumn:{name:"Autumn",emoji:"🍂"},winter:{name:"Winter",emoji:"❄️"}},wf=[{id:"blossom",name:"Blossom Festival",emoji:"🌸",from:[4,1],to:[4,14],blurb:"Petals everywhere and bunting in the sky"},{id:"midsummer",name:"Midsummer",emoji:"🌞",from:[6,19],to:[6,25],blurb:"Flower garlands and the longest days"},{id:"pumpkin",name:"Pumpkin Night",emoji:"🎃",from:[10,24],to:[11,1],blurb:"Glowing pumpkins all over the planet"},{id:"lantern",name:"Lantern Festival",emoji:"🏮",from:[11,8],to:[11,16],blurb:"Paper lanterns float up into the sky"},{id:"winterlights",name:"Winter Lights",emoji:"✨",from:[12,18],to:[1,2],blurb:"Twinkly fairy lights on every tree"}];function cS(n=location.search){const t=new URLSearchParams(n).get("date"),e=t&&/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!e)return null;const i=new Date(Number(e[1]),Number(e[2])-1,Number(e[3]),12);return i.getMonth()===Number(e[2])-1?i:null}function hS(n){const t=n.getMonth()+1;return t>=3&&t<=5?"spring":t>=6&&t<=8?"summer":t>=9&&t<=11?"autumn":"winter"}function uS(n){const t=(n.getMonth()+1)*100+n.getDate();for(const e of wf){const i=e.from[0]*100+e.from[1],s=e.to[0]*100+e.to[1];if(i<=s?t>=i&&t<=s:t>=i||t<=s)return e}return null}const md=n=>{const t=e=>new Date(2e3,e-1,1).toLocaleString(void 0,{month:"short"});return`${t(n.from[0])} ${n.from[1]} – ${t(n.to[0])} ${n.to[1]}`},pi=36e5,Tf=new URLSearchParams(location.search).has("debug"),$=n=>document.getElementById(n),Nt=new aM,ta=document.getElementById("muteBtn"),Af=()=>{ta.textContent=Nt.muted?"🔇":"🔊",ta.setAttribute("aria-pressed",String(Nt.muted)),ta.setAttribute("aria-label",Nt.muted?"Sound off":"Sound on")};Af();ta.addEventListener("click",()=>{Nt.setMuted(!Nt.muted),Af()});const Cf=$("app"),Pe=new fx({antialias:!0,alpha:!0});Pe.setPixelRatio(Math.min(window.devicePixelRatio,2));Pe.setSize(window.innerWidth,window.innerHeight);Cf.appendChild(Pe.domElement);const Be=new px,re=new Mn(40,window.innerWidth/window.innerHeight,.1,100);Be.add(re);const dS=()=>re.aspect<.8?10:7.4;re.position.set(0,.55,1).normalize().multiplyScalar(dS());const Rf=new Ux("#fff6fb","#c9b3e6",1.6);Be.add(Rf);const Jc=new Ox("#ffffff",1.5);Jc.position.set(3,4,5);re.add(Jc);const Fn=new Hx(re,Pe.domElement);Fn.enablePan=!1;Fn.enableDamping=!0;Fn.dampingFactor=.08;Fn.rotateSpeed=.6;Fn.zoomSpeed=.8;Fn.minDistance=3.4;Fn.maxDistance=13;Fn.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_ROTATE};const fS=cS(),qs=()=>fS??new Date,hn=hS(qs()),_e=uS(qs()),Qe=yy(Be,hn),ae=new ay(Be),Pf=new mM(Be,Qe,hn,_e),pS=zM(),ze=new XM(Be,Rf,Jc,pS,Qe.halo),Qc=new WeakMap,Ta=n=>{Qc.set(n,performance.now()+45e3),Oe.get(n)?.arrived&&Ra(n)},zi=Wy(),rt=zi.data,ne=rt.pets.map(n=>new pf(n));for(const n of ne)Be.add(n.group);const En=rt.eggs.map(n=>new Mf(n));for(const n of En)Be.add(n.group);let Ut=null,qr=!1;const _n=new lS(Be,re,Qe,nS(),rt.flowers);zi.offlineMs>0&&_n.dryOut(zi.offlineMs);_n.onBloom=(n,t)=>{ae.sparkles(n,t,6,.25),Nt.play("bloom")};const Lf=performance.timeOrigin+Math.random(),Te=[];let Df=!1;const le=()=>{qr||(rt.pets=ne.map(n=>n.data),rt.eggs=En.map(n=>n.data),rt.flowers=_n.blooms.map(n=>Math.round(n*1e3)/1e3),Df&&(rt.decor=Te.map(n=>n.data)),Xy(rt,Lf))},th=(n,t)=>{const e=fc(rt.totalCare).length;n.care+=t,rt.totalCare+=t;const i=fc(rt.totalCare);if(i.length>e){const s=i[i.length-1];Yn(`New outfit unlocked: ${s.emoji} ${s.name}!`),Nt.play("unlock"),eh()}},gl=[];let _l=0;function Yn(n){const t=performance.now();if(t<_l){gl.includes(n)||gl.push(n);return}_l=t+2600,setTimeout(()=>{const e=gl.shift();e&&(_l=0,Yn(e))},2650),mS(n)}function mS(n){const t=document.getElementById("toast");t.textContent=n,t.classList.remove("hidden"),t.style.animation="none",t.offsetWidth,t.style.animation="",clearTimeout(gd),gd=window.setTimeout(()=>t.classList.add("hidden"),3300)}let gd=0;function eh(){const n=document.getElementById("wardrobeItems");if(!Ut||document.getElementById("wardrobe").classList.contains("hidden"))return;const t=Ut.data.wear??{},e=rt.outfits??[],i=[...os.filter(r=>Ws(r)&&e.includes(r.id)),...os.filter(r=>!Ws(r)),...os.filter(r=>Ws(r)&&!e.includes(r.id))];n.replaceChildren(...i.map(r=>{const o=document.createElement("button"),a=cf(r,rt.totalCare,e),l=r.season?Hn[r.season].name:r.festival?wf.find(h=>h.id===r.festival).name:r.visitor?"Night visitor":"",c=t[r.slot]===r.id;return o.className="chip"+(c?" on":""),o.dataset.id=r.id,o.disabled=!a,Ws(r)&&o.classList.add("seasonal"),o.title=a?r.name:r.visitor?"Sold by a visitor on special nights":l?`A gift during ${l}`:`Unlocks at ${r.unlock} care`,o.innerHTML=`<span class="e">${a?r.emoji:"🔒"}</span><span>${a?r.name:l||`${r.unlock} care`}</span>`,o.addEventListener("click",()=>gS(r.id)),o}));const s=os.find(r=>rt.totalCare<r.unlock);document.getElementById("wardrobeNote").textContent=`Planet care: ${Math.floor(rt.totalCare)} ✨ ${s?`· next unlock at ${s.unlock}`:"· everything unlocked!"}`}function gS(n){const t=Wc(n);if(!Ut||!t||!cf(t,rt.totalCare,rt.outfits??[]))return;const e=Ut.data;e.wear={...e.wear},e.wear[t.slot]===n?delete e.wear[t.slot]:(e.wear[t.slot]=n,ae.sparkles(Ut.headWorld(),Ut.up,10,.4),Nt.play("wear"),Ut.react("pet")),Ut.build(),le(),eh()}le();setInterval(le,3e3);window.addEventListener("storage",n=>{if(n.key!==Ny||qr)return;let t=1/0;try{t=(n.newValue&&JSON.parse(n.newValue).claim)??1/0}catch{}t<=Lf||(qr=!0,$("staleBanner").classList.remove("hidden"))});$("staleReload").addEventListener("click",()=>location.reload());rt.dex??(rt.dex={});const $n=rt.dex,Kr=new Set;function nh(n="loud"){const t=n!=="loud",e=[];for(const s of ne)for(const r of JM(s.data))$n[r]||($n[r]={at:Date.now(),by:s.data.name,where:Ef(s.data.pos),...n==="backfill"?{backfilled:!0}:{}},e.push(r));if(!e.length||(If(),le(),t))return;for(const s of e)Kr.add(s);const i=e.map(s=>bf(s).name);Yn(`New sticker${i.length>1?"s":""}! 📖 ${i.join(", ")}`),Nt.play("unlock"),$("dex").classList.contains("hidden")||Uf()}function If(){$("dexCount").textContent=`${Object.keys($n).filter(n=>bf(n)).length}/${ns.length}`}function Uf(){const n=ns.filter(s=>$n[s.id]).length;$("dexProgress").textContent=`${n} / ${ns.length} stickers`,$("dexBar").style.width=`${n/ns.length*100}%`;const t=s=>{const r=$n[s.id],o=document.createElement("div");o.className="sticker "+(r?"found":"locked")+(Kr.has(s.id)?" new":""),o.dataset.id=s.id;const a=document.createElement("img");a.alt=r?s.name:"Undiscovered",a.src=QM(s,!!r);const l=document.createElement("div");l.className="n",l.textContent=r?s.name:"???";const c=document.createElement("div");return c.className="m",c.textContent=r?`${r.backfilled?"Recorded":"Found"} ${ud(r.at)} · ${r.where} · by ${r.by}`:s.hint,o.append(a,l,c),o};$("dexForms").replaceChildren(...ns.filter(s=>s.kind==="form").map(t)),$("dexMixes").replaceChildren(...ns.filter(s=>s.kind==="mix").map(t));const e=$n["guest:twinkle"],i=document.createElement("div");i.className="sticker "+(e?"found":"locked")+(Kr.has("guest:twinkle")?" new":""),i.dataset.id="guest:twinkle",i.innerHTML='<img alt=""><div class="n"></div><div class="m"></div>',i.children[0].src=fM(!!e),i.children[1].textContent=e?"Twinkle the star peddler":"???",i.children[2].textContent=e?`Met ${ud(e.at)} · ${e.where}`:"Visits on some clear nights",$("dexGuests").replaceChildren(i)}$("dexBtn").addEventListener("click",()=>{wn(null),Uf(),$("dex").classList.remove("hidden")});const ih=()=>{$("dex").classList.add("hidden"),Kr.clear()};$("dexClose").addEventListener("click",ih);$("dex").addEventListener("click",n=>{n.target===$("dex")&&ih()});window.addEventListener("keydown",n=>{n.key==="Escape"&&!$("dex").classList.contains("hidden")&&ih()});nh(zi.fresh?"quiet":Object.keys($n).length===0?"backfill":"loud");If();let xc=[];{rt.outfits??(rt.outfits=[]);const n=by(hn,_e?.id).filter(i=>!rt.outfits.includes(i.id));rt.outfits.push(...n.map(i=>i.id)),xc=n.map(i=>`${i.emoji} ${i.name}`);const t=$("seasonBadge");t.textContent=_e?`${_e.emoji} ${_e.name}`:`${Hn[hn].emoji} ${Hn[hn].name}`,t.title=_e?`${_e.blurb} (${md(_e)})`:Hn[hn].name,t.addEventListener("click",()=>Yn(_e?`${_e.emoji} ${_e.name}: ${_e.blurb}! (${md(_e)})`:`${Hn[hn].emoji} It's ${Hn[hn].name.toLowerCase()} on the planet`));const e=[];_e&&e.push(`${_e.emoji} ${_e.name} is on!`),n.length&&e.push(`Gift${n.length>1?"s":""}: ${n.map(i=>`${i.emoji} ${i.name}`).join(", ")}`),e.length&&setTimeout(()=>Yn(e.join(" · ")),900),n.length&&le()}const _S=!zi.fresh&&rt.diary===void 0;rt.friends??(rt.friends={});rt.diary??(rt.diary=[]);const xi=rt.friends,as=rt.diary,Ks=n=>ne.find(t=>t.data.id===n);let da=Number(localStorage.getItem("pocket-pet-planet:diarySeen"))||0;function $e(n,t,e){return Ay(as,{at:Date.now(),icon:n,text:t,key:e})?(le(),sh(),$("diary").classList.contains("hidden")||Ff(),!0):!1}function fa(n,t,e){const i=Date.now()-e;return as.some(s=>s.text===t&&s.at>i)?!1:$e(n,t)}function sh(){$("diaryDot").classList.toggle("hidden",!as.some(n=>n.at>da))}const rh=(n,t)=>!!(n.parentIds?.includes(t.id)||t.parentIds?.includes(n.id)||n.parents?.includes(t.name)||t.parents?.includes(n.name)),vS={Pals:["🤝","became pals"],Friends:["🌼","are friends now"],"Best friends":["💞","became best friends"]};function Nf(n,t,e){const i=Sa(xi,n.data.id,t.data.id,e);if(!i)return;const[s,r]=vS[i.name];$e(s,`${n.data.name} and ${t.data.name} ${r}`,`lvl:${$c(n.data.id,t.data.id)}:${i.name}`),ae.hearts(n.headWorld(),n.up,4),ae.hearts(t.headWorld(),t.up,4),i.hearts>=2&&(Yn(`${s} ${n.data.name} and ${t.data.name} ${r}!`),Nt.play("unlock")),(Ut===n||Ut===t)&&jn()}{const n=qs().getFullYear(),t=ne.map(i=>i.data.name);if(zi.fresh)$e("🏡",`${Jo(t)} moved onto the planet`,"start");else if(_S){$e("📔",`Started a diary for ${Jo(t)}`,"start");for(const i of ne)for(const s of ne)i!==s&&rh(i.data,s.data)&&(i.data.parentIds?.includes(s.data.id)||i.data.parents?.includes(s.data.name))&&Sa(xi,i.data.id,s.data.id,30)}const e=qs().getMonth()<2?n-1:n;$e(Hn[hn].emoji,`${Hn[hn].name} came to the planet`,`season:${hn}:${e}`),_e&&$e(_e.emoji,`The ${_e.name} began: ${_e.blurb.toLowerCase()}`,`fest:${_e.id}:${qs().getMonth()===0?n-1:n}`),xc.length&&$e("🎁",`Got ${Jo(xc)} as a ${_e?_e.name:Hn[hn].name.toLowerCase()} gift`),le()}const Zs=new Map;function pa(n){Zs.delete(n)&&(n.goal=null)}function xS(n){for(let t=0;t<ne.length;t++)for(let e=t+1;e<ne.length;e++){const i=ne[t],s=ne[e];if(i.evolving||s.evolving)continue;const r=Oe.get(i),o=Oe.get(s);let a=0;if(r&&o&&r.decor===o.decor&&r.arrived&&o.arrived){a=r.kind==="nap"?.6:.8;const l=fs.find(h=>h.kind===r.decor.data.kind),c=l.name.toLowerCase();r.kind==="nap"?fa("😴",`${i.data.name} and ${s.data.name} napped together in the ${c}`,3*pi):fa(l.emoji,`${i.data.name} and ${s.data.name} hung out by the ${c}`,3*pi)}else i.up.angleTo(s.up)<.35&&(a=i.sleeping&&s.sleeping?.04:i.sleeping||s.sleeping?0:.08);a&&(rh(i.data,s.data)&&(a*=1.5),Nf(i,s,a))}for(const t of ne){if(Zs.has(t)||t===Ut||t.goal||t.sleeping||t.evolving||Oe.has(t)||Ze?.a===t||Ze?.b===t)continue;const e=Yc(xi,t.data.id)[0],i=e&&e.points>=Xc[0].min?Ks(e.id):void 0;!i||i.sleeping||i.evolving||Zs.get(i)?.friend===t||t.up.angleTo(i.up)<.6||Math.random()>.12||Zs.set(t,{friend:i,until:n+6e4})}}function yS(n){for(const[t,e]of Zs){const i=e.friend;if(!ne.includes(i)||t===Ut||t.sleeping||n>e.until||Oe.has(t)){pa(t);continue}if(t.up.angleTo(i.up)<.22){pa(t),t.facing=i.group.position,ae.hearts(t.headWorld(),t.up,4),ae.hearts(i.headWorld(),i.up,3),Vi(t,`💞 ${i.data.name}!`),Nf(t,i,1),fa("💞",`${t.data.name} went looking for best friend ${i.data.name}`,3*pi);continue}const s=t.up.clone().addScaledVector(i.up,-i.up.dot(t.up));s.lengthSq()<1e-6&&s.copy(i.forward),t.goal=i.up.clone().addScaledVector(s.normalize(),.15).normalize()}}function MS(n){const t=Yc(xi,n.id).filter(s=>ds(s.points)&&Ks(s.id)).slice(0,3),e=t.map(s=>`${s.id}:${mc(s.points)}:${Ks(s.id).data.name}`).join(",")+"|"+n.id,i=$("petFriends");if(i.dataset.sig!==e){if(i.dataset.sig=e,!t.length){i.innerHTML='<span class="soft">No friends yet. Pets who play near each other become friends.</span>';return}i.replaceChildren(...t.map(s=>{const r=Ks(s.id),o=document.createElement("button");return o.className="friend",o.dataset.id=s.id,o.title=ds(s.points).name,o.innerHTML=`<span class="fn"></span> <span class="h">${mc(s.points)}</span>`,o.querySelector(".fn").textContent=r.data.name,o.addEventListener("click",()=>wn(r)),o}))}}function Ff(){const n=Object.entries(xi).filter(([s,r])=>ds(r)&&s.split("|").every(o=>Ks(o))).sort((s,r)=>r[1]-s[1]).slice(0,6),t=$("diaryPairs");t.replaceChildren(...n.map(([s,r])=>{const o=document.createElement("div");return o.className="pair",o.dataset.pair=s,o.innerHTML='<span></span><b class="h"></b><i></i>',o.children[0].textContent=s.split("|").map(a=>Ks(a).data.name).join(" & "),o.children[1].textContent=mc(r),o.children[2].textContent=ds(r).name,o})),n.length||(t.innerHTML='<p class="soft">No friendships yet. Pets who play near each other become friends.</p>');const e=$("diaryEntries");e.replaceChildren();let i="";for(const s of[...as].reverse()){const r=Cy(s.at);if(r!==i){i=r;const l=document.createElement("h3");l.textContent=r,e.append(l)}const o=document.createElement("div");o.className="entry"+(s.at>da?" new":"");const a=new Date(s.at);o.innerHTML='<span class="t"></span><span class="i"></span><span class="x"></span>',o.children[0].textContent=`${String(a.getHours()).padStart(2,"0")}:${String(a.getMinutes()).padStart(2,"0")}`,o.children[1].textContent=s.icon,o.children[2].textContent=s.text,e.append(o)}$("diaryCount").textContent=`${as.length} ${as.length===1?"page":"pages"} · newest first`}$("diaryBtn").addEventListener("click",()=>{wn(null),Ff(),$("diary").classList.remove("hidden"),$("diaryEntries").scrollTop=0,da=Date.now(),localStorage.setItem("pocket-pet-planet:diarySeen",String(da)),sh()});const oh=()=>$("diary").classList.add("hidden");$("diaryClose").addEventListener("click",oh);$("diary").addEventListener("click",n=>{n.target===$("diary")&&oh()});window.addEventListener("keydown",n=>{n.key==="Escape"&&oh()});sh();window.addEventListener("pagehide",le);document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&le()});const yc=$("panel"),Zr=$("tag"),SS=$("floaters"),ar=$("renameForm"),ea=$("renameInput"),Ke=n=>{const t=n.clone().project(re);return{x:(t.x*.5+.5)*window.innerWidth,y:(-t.y*.5+.5)*window.innerHeight,behind:t.z>1}},Of=n=>n.up.dot(re.position)>2.1;function Vi(n,t){const e=Ke(n.headWorld());mr(e.x,e.y,t)}function mr(n,t,e){const i=document.createElement("div");i.className="floater",i.textContent=e,i.style.left=`${n}px`,i.style.top=`${t}px`,SS.appendChild(i),setTimeout(()=>i.remove(),1500)}function jn(){if(!Ut)return;const n=Ut.data,t=Ut.sleeping?{label:"Sleeping",emoji:"😴"}:ff(n);$("petName").textContent=n.name,$("petForm").textContent=vc(n);const e=$("petFamily");e.classList.toggle("hidden",!n.parents),n.parents&&(e.textContent=`Child of ${n.parents[0]} & ${n.parents[1]}`),MS(n),$("moodEmoji").textContent=t.emoji,$("moodLabel").textContent=t.label,$("foodBar").style.width=`${n.food.toFixed(1)}%`,$("joyBar").style.width=`${n.joy.toFixed(1)}%`;const i=$("careBar"),s=$("careNote");if(n.stage>=Kc)i.style.width="100%",s.textContent="Fully grown ✨ What a star!";else{const r=n.stage===0?0:Yr[n.stage-1],o=Yr[n.stage];i.style.width=`${Math.min(100,(n.care-r)/(o-r)*100).toFixed(1)}%`;const a=Math.max(0,o-n.care);s.textContent=a>0?`${Math.ceil(a)} more care to evolve ✨ (feed when peckish)`:"Ready to evolve!"}Zr.textContent=n.name}function wn(n){Ut!==n&&(Ut?.setSelected(!1),Ut&&(Ut.facing=null),Ut=n,ar.classList.add("hidden"),$("wardrobe").classList.add("hidden"),document.body.classList.toggle("panel-open",!!n),n?(Jn&&io(),hr&&fh(),Nt.play("select"),n.setSelected(!0),yc.classList.remove("hidden"),Zr.classList.remove("hidden"),jn()):(yc.classList.add("hidden"),Zr.classList.add("hidden")))}function Aa(n){const t=n.data;t.stage>=Kc||t.care<Yr[t.stage]||n.evolving||(t.stage+=1,le(),ae.sparkles(n.centerWorld(),n.up,18,.5),n.evolve(()=>{ae.sparkles(n.centerWorld(),n.up,45,1.1),Nt.play("evolve"),Vi(n,`✨ ${vc(t)}! ✨`),$e("✨",`${t.name} evolved into ${vc(t)}`),jn(),nh()}))}function bS(n){const t=n.data;if(!n.evolving){if(t.food>=90){n.react("full"),Nt.play("full"),Vi(n,"Too full!");return}Ta(n),t.food=Math.min(100,t.food+30),t.joy=Math.min(100,t.joy+8),th(t,1),le(),Nt.play("feed"),ae.berry(()=>n.headWorld().addScaledVector(n.up,-n.size*.4),()=>n.up,()=>{n.react("feed"),ae.hearts(n.headWorld(),n.up,6),Vi(n,"Yum!"),jn(),Aa(n)}),jn()}}function ES(n){const t=n.data;n.evolving||rt.snacks<=0||(rt.snacks-=1,Ta(n),t.food=Math.min(100,t.food+35),t.joy=Math.min(100,t.joy+18),th(t,1.5),le(),to(),Nt.play("treat"),ae.berry(()=>n.headWorld().addScaledVector(n.up,-n.size*.4),()=>n.up,()=>{n.react("feed"),ae.hearts(n.headWorld(),n.up,8),ae.sparkles(n.headWorld(),n.up,8,.3),Vi(n,"Sweet treat! ✨"),jn(),Aa(n)}))}function to(){$("snackCount").textContent=String(rt.snacks),$("treatCount").textContent=rt.snacks>0?`(${rt.snacks})`:"",$("treatBtn").disabled=rt.snacks<=0}to();let Oi=null;function wS(){if(Oi)return;const n=Ut??[...ne].sort((e,i)=>i.data.joy-e.data.joy)[0],t=n.data;wn(null),Nt.setFocus(!0),Oi=new qM({name:t.name,color:ua(t),feature:jr(t)},e=>{if(Nt.play("gameEnd"),rt.snacks+=e,e>=4){const i=$r[Math.floor(Math.random()*$r.length)];Pa(i),$("gameReward").textContent+=` + ${Xe[i].emoji} seed`,$e("🎮",`${t.name} played Fruit Catch and found a ${Xe[i].name.toLowerCase()} seed`)}t.joy=Math.min(100,t.joy+15),Ta(n),le(),to()},()=>{Oi=null,Nt.setFocus(!1),ga.getDelta(),n.react("feed"),ae.hearts(n.headWorld(),n.up,5)})}$("playBtn").addEventListener("click",()=>{wS(),Oi&&(Oi.onCatch=n=>Nt.play("catch",n))});const _d=new WeakMap;function Bf(n){const t=n.data;if(n.evolving)return;Ta(n),t.joy=Math.min(100,t.joy+12);const e=performance.now();e-(_d.get(n)??0)>3e3&&th(t,.25),_d.set(n,e),n.react("pet"),Nt.purr(),ae.hearts(n.headWorld(),n.up,4),Vi(n,"♥"),le(),jn(),Aa(n)}$("feedBtn").addEventListener("click",()=>Ut&&bS(Ut));$("treatBtn").addEventListener("click",()=>Ut&&ES(Ut));$("petBtn").addEventListener("click",()=>Ut&&Bf(Ut));$("close").addEventListener("click",()=>wn(null));$("wearBtn").addEventListener("click",()=>{$("wardrobe").classList.toggle("hidden"),ar.classList.add("hidden"),eh()});$("renameBtn").addEventListener("click",()=>{Ut&&(ar.classList.toggle("hidden"),ea.value=Ut.data.name,ar.classList.contains("hidden")||(ea.focus(),ea.select()))});ar.addEventListener("submit",n=>{n.preventDefault();const t=ea.value.trim().slice(0,16);Ut&&t&&(Ut.data.name=t,Vi(Ut,`Hi, I'm ${t}!`),Nt.play("rename"),le(),jn()),ar.classList.add("hidden")});if(zi.offlineMs>10*6e4){const n=$("hint"),t=zi.offlineMs/pi;n.textContent=`Welcome back! You were away ${t<1?`${Math.round(t*60)} min`:`${t.toFixed(1)} h`}. Your critters missed you.`,setTimeout(()=>n.textContent="Drag to spin · Scroll or pinch to zoom · Tap a critter",7e3)}let Ze=null;const TS=n=>!n.sleeping&&!n.evolving&&!Oe.has(n)&&n.data.joy>=UM&&n.data.food>=NM,kf=()=>ne.length+En.length;function ah(){Ze&&(Ze.a.goal=Ze.b.goal=null,Ze.a.facing=Ze.b.facing=null,Ze=null)}function AS(n,t){pa(n),pa(t),Ze={a:n,b:t,started:performance.now()},ae.hearts(n.headWorld(),n.up,3),ae.hearts(t.headWorld(),t.up,3);const e=n.up.clone().add(t.up).normalize();for(const[i,s]of[[n,t],[t,n]]){const r=i.up.clone().addScaledVector(e,-i.up.dot(e));r.lengthSq()<1e-6&&r.copy(s.forward).negate(),i.goal=e.clone().addScaledVector(r.normalize(),.13).normalize()}}function zf(){if(Ze){const{a:i,b:s,started:r}=Ze;if(!ne.includes(i)||!ne.includes(s)||i.sleeping||s.sleeping||performance.now()-r>6e4){ah();return}i.up.angleTo(i.goal)<.05&&s.up.angleTo(s.goal)<.05&&CS(i,s);return}if(kf()>=IM||Date.now()-rt.lastEggAt<DM)return;const n=ne.filter(TS);let t=null,e=1/0;for(let i=0;i<n.length;i++)for(let s=i+1;s<n.length;s++){const r=n[i].up.angleTo(n[s].up);r<e&&([e,t]=[r,[n[i],n[s]]])}t&&AS(...t)}function CS(n,t){const e=n.up.clone().add(t.up).normalize(),i=[...ne.map(o=>o.data.name),...En.map(o=>o.data.baby.name)],s=new Mf({id:Math.floor(Math.random()*1e9).toString(36)+Date.now().toString(36).slice(-4),pos:[e.x,e.y,e.z],hatchAt:Date.now()+yf,baby:OM(n.data,t.data,i)});En.push(s),Be.add(s.group),rt.lastEggAt=Date.now(),n.react("pet"),t.react("pet"),ah(),n.stepAway(e),t.stepAway(e),ae.hearts(s.group.position.clone().addScaledVector(e,.25),e,8);const r=Ke(s.group.position.clone().addScaledVector(e,.4));mr(r.x,r.y,"💞 An egg!"),Nt.play("egg"),Sa(xi,n.data.id,t.data.id,15),$e("🥚",`${n.data.name} and ${t.data.name} found an egg`),le()}function RS(n){En.splice(En.indexOf(n),1),Be.remove(n.group);const t={id:n.data.id,...n.data.baby,stage:0,food:70,joy:80,care:0,pos:n.data.pos},e=new pf(t);ne.push(e),Be.add(e.group),e.react("feed"),ae.sparkles(e.centerWorld(),e.up,30,.7),ae.hearts(e.headWorld(),e.up,5),Vi(e,`🐣 Meet ${t.name}!`),Nt.play("hatch");for(const i of ne)i!==e&&rh(t,i.data)&&Sa(xi,t.id,i.data.id,30);$e("🐣",t.parents?`${t.name} hatched! Welcome, child of ${t.parents[0]} & ${t.parents[1]}`:`${t.name} hatched!`),le(),nh()}function PS(n){n.poke();const t=Math.max(0,n.data.hatchAt-Date.now()),e=Math.floor(t/6e4),i=Math.floor(t%6e4/1e3),s=Ke(n.group.position.clone().addScaledVector(n.up,.35));mr(s.x,s.y,t>0?`🥚 Hatching in ${e}:${String(i).padStart(2,"0")}`:"🥚 Any moment!")}const lr=new kx,cr=new st;let Hs=null;Pe.domElement.addEventListener("pointerdown",n=>{n.isPrimary&&(Hs={x:n.clientX,y:n.clientY})});Pe.domElement.addEventListener("pointerup",n=>{if(!n.isPrimary)return;if(Gf()){Hs=null;return}if(!Hs)return;const t=Math.hypot(n.clientX-Hs.x,n.clientY-Hs.y);if(Hs=null,t>8)return;if(eo){if(hi){const u=hh(n.clientX,n.clientY);u&&DS(hi,u)}else Hf(n.clientX,n.clientY)||(no(null),Un(Ca));return}cr.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),lr.setFromCamera(cr,re);const e=Te.filter(u=>u.data.kind==="plot").map(u=>u.hit),i=lr.intersectObjects([Qe.planet,...ne.map(u=>u.hit),...En.map(u=>u.hit),...e,...pe?[pe.hit]:[]],!1),s=i[0];if(s?.object.userData.visitor){HS();return}const r=i.findIndex(u=>u.object===Qe.planet);let o=i.slice(0,r<0?void 0:r).find(u=>u.object.userData.decor)?.object.userData.decor;const a=s?.object.userData.pet;if(o&&a){const u=Ke(a.centerWorld()),d=Ke(o.group.position);Math.hypot(u.x-n.clientX,u.y-n.clientY)<Math.hypot(d.x-n.clientX,d.y-n.clientY)&&(o=void 0)}if(o){OS(o);return}const l=s?.object.userData.pet,c=i.findIndex(u=>u.object===Qe.planet),h=i.slice(0,c<0?void 0:c).find(u=>u.object.userData.egg)?.object.userData.egg;h?PS(h):l?(wn(l),LS(l)):s&&wn(null)});let Wo=null;function LS(n){const t=performance.now();Wo&&Wo.pet===n&&t-Wo.at<350&&Bf(n),Wo={pet:n,at:t}}Te.push(...(rt.decor??[]).filter(n=>LM(n.kind)).map(n=>xf({id:n.id,kind:n.kind,pos:n.pos,rot:typeof n.rot=="number"?n.rot:0})));for(const n of Te)Be.add(n.group);Df=!0;let eo=!1,hi=null,Xn=null,cn=null;const vd=$("decoHint"),Ca="Pick something, then tap the planet to place it. Drag a decoration to move it.";function Un(n,t=!1){vd.textContent=n,vd.classList.toggle("bad",t)}const Vf={pond:"Splash! You can't build on the pond 💧",crowded:"A little too close to something else"};function lh(){$("decoItems").replaceChildren(...fs.map(n=>{const t=document.createElement("button");return t.className="chip"+(hi===n.kind?" on":""),t.dataset.kind=n.kind,t.innerHTML=`<span class="e">${n.emoji}</span><span>${n.name}</span>`,t.addEventListener("click",()=>{hi=hi===n.kind?null:n.kind,no(null),Un(hi?`Tap the planet to place a ${n.name.toLowerCase()} (${Te.length}/${Qo})`:Ca),lh()}),t}))}function no(n){Xn&&ha(Xn,!1),Xn=n,n&&ha(n,!0),$("decoSel").classList.toggle("hidden",!n)}function ch(n){eo=n,document.body.classList.toggle("decorating",n),$("decoBtn").setAttribute("aria-pressed",String(n)),$("decoTray").classList.toggle("hidden",!n),n?(wn(null),Jn&&io(),hi=null,Un(Ca),lh()):(no(null),hi=null)}$("decoBtn").addEventListener("click",()=>ch(!eo));$("decoDone").addEventListener("click",()=>ch(!1));$("decoRotate").addEventListener("click",()=>{Xn&&(Xn.data.rot=(Xn.data.rot+Math.PI/4)%(Math.PI*2),Ea(Xn),le())});$("decoRemove").addEventListener("click",()=>{if(!Xn)return;const n=Xn;if(no(null),Te.splice(Te.indexOf(n),1),Be.remove(n.group),n.data.kind==="plot"){const t=qn.plots[n.data.id];t?.seed&&pr(t)<4&&Pa(t.seed),delete qn.plots[n.data.id]}for(const[t,e]of Oe)e.decor===n&&Ra(t);ae.sparkles(n.group.position.clone(),n.group.position.clone().normalize(),10,.3),Nt.play("full"),Un(Ca),le()});function hh(n,t){cr.set(n/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),lr.setFromCamera(cr,re);const e=lr.intersectObject(Qe.planet,!1)[0];return e?e.point.clone().normalize():null}function Hf(n,t){cr.set(n/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),lr.setFromCamera(cr,re);const i=lr.intersectObjects([Qe.planet,...Te.map(o=>o.hit)],!1)[0]?.object.userData.decor;if(i)return i;let s=null,r=30;for(const o of Te){const a=new w(...o.data.pos).normalize();if(a.dot(re.position.clone().normalize())<.05)continue;const l=Ke(a.clone().multiplyScalar(ge+.12)),c=Math.hypot(l.x-n,l.y-t);c<r&&(r=c,s=o)}return s}function DS(n,t){if(Te.length>=Qo)return Un(`The planet is full of decorations (${Qo}). Remove one first.`,!0);const e=wa(t,Qe.ponds,Te);if(e){const a=Ke(t.clone().multiplyScalar(ge));return mr(a.x,a.y,e==="pond"?"💧 Not on the pond!":"🙈 Too close"),Nt.play("full"),Un(Vf[e],!0)}const i=re.position.clone().addScaledVector(t,-re.position.dot(t)),s=new w(0,0,1).applyQuaternion(new gi().setFromUnitVectors(new w(0,1,0),t)),r=Math.atan2(new w().crossVectors(s,i).dot(t),s.dot(i)),o=xf({id:Math.floor(Math.random()*1e9).toString(36),kind:n,pos:[t.x,t.y,t.z],rot:r});Te.push(o),Be.add(o.group),n==="plot"&&gr(o),ae.sparkles(t.clone().multiplyScalar(ge+.05),t,12,.35),Nt.play("wear"),Un(`Placed! Tap again for another, or drag it around (${Te.length}/${Qo})`),le()}Cf.addEventListener("pointerdown",n=>{if(!eo||!n.isPrimary)return;const t=Hf(n.clientX,n.clientY);t&&(Fn.enabled=!1,Pe.domElement.setPointerCapture(n.pointerId),cn={d:t,start:[...t.data.pos],moved:!1,ok:!0,id:n.pointerId},no(t),hi=null,lh())},{capture:!0});Pe.domElement.addEventListener("pointermove",n=>{if(!cn||n.pointerId!==cn.id)return;const t=hh(n.clientX,n.clientY);if(!t||!cn.moved&&new w(...cn.start).angleTo(t)<.02)return;cn.moved=!0;const e=wa(t,Qe.ponds,Te,cn.d);cn.ok=!e,cn.d.data.pos=[t.x,t.y,t.z],Ea(cn.d),ha(cn.d,!0,!e),Un(e?Vf[e]:"Let go to drop it here",!!e)});const Gf=()=>{if(!cn)return!1;const{d:n,start:t,moved:e,ok:i}=cn;if(cn=null,Fn.enabled=!0,e){if(!i)n.data.pos=t,Ea(n),Un("That spot didn’t work, so it hopped back.",!0);else{Un("Moved!"),Nt.play("select");for(const[s,r]of Oe)r.decor===n&&Ra(s);le()}ha(n,!0,!0)}else Un("Selected. Drag to move, or turn/remove it below.");return!0};Pe.domElement.addEventListener("pointercancel",Gf);const Oe=new Map;function Ra(n){Oe.delete(n),n.goal=null}const Mc=n=>{const t=Oe.get(n);return!!t&&t.kind==="nap"&&t.arrived>0};function IS(n,t){const e=fs.find(r=>r.kind===t.data.kind),i=new w(...t.data.pos),s=n.up.clone().addScaledVector(i,-i.dot(n.up));s.lengthSq()<1e-6&&s.randomDirection().addScaledVector(i,-i.dot(s)),n.goal=i.clone().addScaledVector(s.normalize(),.14).normalize(),Oe.set(n,{decor:t,kind:e.nap?"nap":"hang",arrived:0,until:0})}function Wf(n=!1){const t=performance.now(),e=Te.filter(i=>fs.find(s=>s.kind===i.data.kind).nap||fs.find(s=>s.kind===i.data.kind).hangout);for(const i of ne){const s=Oe.get(i);if(s){(!Te.includes(s.decor)||i===Ut||s.arrived&&t>s.until)&&Ra(i);continue}const r=[...Oe.values()].some(c=>c.arrived&&i.up.angleTo(new w(...c.decor.data.pos))<1.1);if(!e.length||i===Ut||i.goal||i.evolving||i.sleeping||!n&&Math.random()>(r?.4:.12))continue;const o=new Set(Yc(xi,i.data.id).filter(c=>c.points>=Xc[1].min).map(c=>c.id)),a=c=>[...Oe].some(([h,u])=>u.decor===c&&o.has(h.data.id)),l=e.map(c=>({d:c,a:i.up.angleTo(new w(...c.data.pos))-(a(c)?.8:0)})).filter(c=>c.a<1.1).sort((c,h)=>c.a-h.a)[0];if(l&&[...Oe.values()].filter(c=>c.decor===l.d).length<2&&(IS(i,l.d),n))return}}function US(n){for(const[t,e]of Oe)if(!e.arrived&&t.goal&&t.up.angleTo(t.goal)<.05){e.arrived=n,e.until=n+(e.kind==="nap"?2e4+Math.random()*15e3:12e3+Math.random()*8e3);for(const[i,s]of Oe)i!==t&&s.decor===e.decor&&s.arrived&&(s.until=Math.max(s.until,n+1e4));e.kind==="hang"?ae.hearts(t.headWorld(),t.up,3):[...Oe].some(([i,s])=>i!==t&&s.decor===e.decor)||fa("😴",`${t.data.name} took a nap in the ${fs.find(i=>i.kind===e.decor.data.kind).name.toLowerCase()}`,6*pi)}}const Sc=new URLSearchParams(location.search),NS=!rt.garden;rt.garden??(rt.garden={plots:{},seeds:{..._c}});const qn=rt.garden;NS&&$e("🌱",`Got a starter pack of seeds: ${Jo($r.filter(n=>_c[n]).map(n=>`${_c[n]} ${Xe[n].name.toLowerCase()}`))}`,"seeds:starter");const bc=Math.max(0,Math.min(720,Number(Sc.get("gardenSkip"))||0)),Gi=n=>{var t,e;return(t=qn.plots)[e=n.data.id]??(t[e]=uf(Date.now()))},xd=new WeakMap;function gr(n){const t=Gi(n),e=pr(t);xd.get(n)!==e&&(xd.set(n,e),n.plant.clear(),n.plant.add(Uy(t))),n.soil.material=t.wetUntil>Date.now()?CM:_f}const uh=()=>Te.filter(n=>n.data.kind==="plot");for(const n of uh()){const t=Gi(n);bc&&(t.at-=bc*pi,t.wetUntil=Math.min(t.wetUntil,t.at)),jc(t,Date.now()),gr(n)}if(bc){Sc.delete("gardenSkip");const n=Sc.toString();history.replaceState(history.state,"",location.pathname+(n?`?${n}`:"")+location.hash),le()}for(const n of Object.keys(qn.plots))Te.some(t=>t.data.id===n)||delete qn.plots[n];le();const Js=n=>qn.seeds[n]??0;function Pa(n,t=1){qn.seeds[n]=Math.min(99,Js(n)+t)}function FS(){const n=Date.now(),t=_n.rain>.5;for(const e of uh()){const i=Gi(e);jc(i,n),t&&i.wetUntil<n+gc-6e4&&(i.wetUntil=n+gc),gr(e)}Jn&&so()}let Jn=null;function OS(n){wn(null),Jn=n,so(),$("plotCard").classList.remove("hidden"),Nt.play("select")}const io=()=>{Jn=null,$("plotCard").classList.add("hidden")};function so(){const n=Jn;if(!n||!Te.includes(n))return io();const t=Gi(n),e=pr(t),i=t.wetUntil>Date.now(),s=t.seed?Xe[t.seed]:null;$("plotTitle").textContent=s?`${s.emoji} ${s.name} plot`:"🌱 Garden plot",$("plotStage").textContent=Py[e],$("plotBar").style.width=`${(qc(t)*100).toFixed(1)}%`;const r=Ly(t);$("plotNote").textContent=t.seed?e===4?"Ready to pick!":`Ripe in about ${r<1?"an hour":`${Math.ceil(i?r/1.5:r)} h`}${i?" · soil is wet 💧 (growing faster)":" · water it to grow 1.5× faster"}`:"Pick a seed to plant.";const o=$("plotSeeds");o.classList.toggle("hidden",!!t.seed),t.seed||o.replaceChildren(...$r.map(c=>{const h=document.createElement("button");return h.className="chip",h.dataset.seed=c,h.disabled=Js(c)<=0,h.innerHTML=`<span class="e">${Xe[c].emoji}</span><span>${Xe[c].name} ×${Js(c)}</span>`,h.addEventListener("click",()=>BS(c)),h}));const a=$("plotWater");a.classList.toggle("hidden",!t.seed||e===4),a.disabled=i,a.textContent=i?"💧 Watered":"💧 Water";const l=$("plotHarvest");l.classList.toggle("hidden",e!==4),s&&(l.textContent=`🧺 Harvest (+${s.yield} ${s.emoji})`),$("plotBag").textContent=`Seed bag: ${$r.map(c=>`${Xe[c].emoji}${Js(c)}`).join(" ")}`}function dh(n,t){const e=n.group.position.clone().normalize(),i=n.group.position.clone().addScaledVector(e,.12);t==="water"?ae.sparkles(i,e,14,.3):t==="harvest"?ae.hearts(i,e,6):ae.sparkles(i,e,8,.25);const s=Ke(i);mr(s.x,s.y,t==="plant"?"🌱 Planted!":t==="water"?"💧":"🧺 Yum!")}function BS(n){const t=Jn;if(!t||Js(n)<=0)return;const e=Gi(t);e.seed||(qn.seeds[n]=Js(n)-1,Object.assign(e,{seed:n,grown:0,at:Date.now(),plantedAt:Date.now()}),gr(t),dh(t,"plant"),Nt.play("wear"),$e("🌱",`Planted ${Xe[n].name.toLowerCase()} seeds`),le(),so())}$("plotWater").addEventListener("click",()=>{const n=Jn;if(!n)return;const t=Gi(n);jc(t,Date.now()),t.wetUntil=Date.now()+gc,gr(n),dh(n,"water"),Nt.play("bloom"),le(),so()});$("plotHarvest").addEventListener("click",()=>{const n=Jn;if(!n)return;const t=Gi(n);if(!t.seed||pr(t)!==4)return;const e=t.seed,i=Xe[e];rt.snacks+=i.yield;const s=Math.random()<.35?2:1;Pa(e,s),qn.plots[n.data.id]={...uf(Date.now()),wetUntil:t.wetUntil},rt.harvests=(rt.harvests??0)+1,gr(n),dh(n,"harvest"),Nt.play("unlock"),to(),Yn(`🧺 Picked ${i.yield} ${i.plural}! +${i.yield} treats 🍓 · ${s} seed${s>1?"s":""} back`),$e("🧺",`Harvested ${i.yield} ${i.plural} from the garden`),le(),so()});$("plotClose").addEventListener("click",io);const kS=cM();let pe=null,hr=!1;rt.visits??(rt.visits={});const li=rt.visits;function zS(){const n=ca(new Date);return li[n]?.left||ze.night<(pe?.4:.75)||!pe&&_n.kind!=="clear"?!1:kS??lM(n,!!_e)}function VS(){const n=zS(),t=ca(new Date);if(n&&!pe){const e=re.position.clone().normalize();let i=e.clone();for(let r=0;r<30;r++){const o=e.clone().add(new w().randomDirection().multiplyScalar(.55)).normalize();if(!(o.dot(e)<.7)&&!wa(o,Qe.ponds,Te)){i=o;break}}const s=!!li[t];if(pe=new dM(i,e,s),Be.add(pe.group,pe.trailObject),!s){li[t]={at:Date.now()},rt.visitorMet=(rt.visitorMet??0)+1,Nt.play("unlock"),Yn(`${Li.emoji} A shooting star! ${Li.name} ${Li.title} has landed. Tap to trade!`),$e("🌠",`A shooting star brought ${Li.name} ${Li.title} to the planet`),$n[vl]||($n[vl]={at:Date.now(),by:Li.name,where:Ef([i.x,i.y,i.z])},Kr.add(vl));for(const r of Object.keys(li).sort().slice(0,-30))delete li[r];le()}}else!n&&pe&&pe.state!=="leaving"&&pe.state!=="gone"&&(pe.leave(),hr&&fh(),li[t]&&ze.night<.4&&(li[t].left=!0,$e("👋",`${Li.name} waved goodbye and flew home at dawn`),le()));pe?.state==="gone"&&(Be.remove(pe.group,pe.trailObject),pe=null)}const vl="guest:twinkle";function HS(){!pe||pe.state!=="here"||(wn(null),Jn&&io(),hr=!0,Xf(),$("shop").classList.remove("hidden"),Nt.play("select"),mr(...Object.values(Ke(pe.headWorld())).slice(0,2),"✨ Hello!"))}const fh=()=>{hr=!1,$("shop").classList.add("hidden")};function Xf(){$("shopSnacks").textContent=String(rt.snacks);const n=rt.outfits??[];$("shopWares").replaceChildren(...mf.map(t=>{const e=document.createElement("div");e.className="ware",e.dataset.ware=t.id;const i=t.kind==="outfit"?Wc(t.item):null,s=t.kind==="seed"?Xe[t.item]:null,r=i?n.includes(i.id):!1;e.innerHTML='<span class="e"></span><span class="n"></span><button class="btn small"></button>',e.children[0].textContent=i?i.emoji:s.emoji,e.children[1].textContent=i?`${i.name}`:`${s.name} seed (rare)`;const o=e.children[2];return o.textContent=r?"Owned ✓":`${t.price} 🍓`,o.disabled=r||rt.snacks<t.price,o.addEventListener("click",()=>GS(t.id)),e}))}function GS(n){const t=mf.find(i=>i.id===n);if(!t||!pe||rt.snacks<t.price||(rt.outfits??(rt.outfits=[]),t.kind==="outfit"&&rt.outfits.includes(t.item)))return;rt.snacks-=t.price;let e;if(t.kind==="outfit"){rt.outfits.push(t.item);const i=Wc(t.item);e=`a ${i.name}`,Yn(`${i.emoji} Got the ${i.name}! Find it under 👒 Wear`)}else Pa(t.item),e=`a ${Xe[t.item].name.toLowerCase()} seed`,Yn(`${Xe[t.item].emoji} A rare seed! Plant it in a garden plot`);$e("🛍️",`Traded ${t.price} snacks with ${Li.name} for ${e}`),ae.sparkles(pe.headWorld(),pe.up,16,.4),Nt.play("wear"),to(),le(),Xf()}$("shopClose").addEventListener("click",fh);let $t=null;const ma=$("boothStage"),na=$("boothCanvas");function ph(){if(!$t)return;const[n,t]=Zc($t.card.photo),e=$("boothWrap").getBoundingClientRect(),i=Math.min(e.width/n,e.height/t),s=Math.floor(n*i),r=Math.floor(t*i);ma.style.width=`${s}px`,ma.style.height=`${r}px`;const o=Math.min(window.devicePixelRatio,2);na.width=s*o,na.height=r*o;const a=na.getContext("2d");a.setTransform(o,0,0,o,0,0),gf(a,s,r,$t.card,{stickers:!1}),_r()}function _r(){if(!$t)return;const n=ma.clientWidth;$("boothStickers").replaceChildren(...$t.card.stickers.map(e=>{const i=document.createElement("span");return i.className="st"+($t.sel===e?" sel":""),i.dataset.id=String(e.id),i.textContent=e.emoji,i.style.left=`${e.x*100}%`,i.style.top=`${e.y*100}%`,i.style.fontSize=`${e.size*n}px`,i.style.transform=`translate(-50%, -50%) rotate(${e.rot}rad)`,i.addEventListener("pointerdown",s=>WS(s,e,i)),i})),$("boothSel").classList.toggle("hidden",!$t.sel)}function WS(n,t,e){n.preventDefault(),n.stopPropagation(),$t.sel=t,e.setPointerCapture(n.pointerId);const i=ma.getBoundingClientRect(),s=n.clientX-t.x*i.width,r=n.clientY-t.y*i.height,o=l=>{t.x=Math.min(1,Math.max(0,(l.clientX-s)/i.width)),t.y=Math.min(1,Math.max(0,(l.clientY-r)/i.height)),e.style.left=`${t.x*100}%`,e.style.top=`${t.y*100}%`},a=()=>{e.removeEventListener("pointermove",o),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a),_r()};e.addEventListener("pointermove",o),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a);for(const l of $("boothStickers").children)l.classList.toggle("sel",l===e);$("boothSel").classList.remove("hidden")}function XS(){if($t||Oi)return;wn(null),eo&&ch(!1),Pe.render(Be,re);const n=document.createElement("canvas");n.width=Pe.domElement.width,n.height=Pe.domElement.height;const t=n.getContext("2d"),e=getComputedStyle(document.body).backgroundImage.match(/rgb[a]?\([^)]+\)/g)??["#c9b8f0","#f2c6e3","#ffe1c7"],i=t.createLinearGradient(0,0,0,n.height);e.forEach((o,a)=>i.addColorStop(a/Math.max(1,e.length-1),o)),t.fillStyle=i,t.fillRect(0,0,n.width,n.height),t.drawImage(Pe.domElement,0,0);const s=qs(),r=`${_e?_e.emoji:Hn[hn].emoji} Pocket Pet Planet · ${s.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}`;$t={card:{photo:n,frame:"cozy",stickers:[],caption:r},nextId:1,sel:null},$("boothResult").classList.add("hidden"),$("booth").classList.remove("hidden"),Nt.play("select"),$f(),requestAnimationFrame(ph)}function $f(){$t&&($("boothFrames").replaceChildren(...gM.map(n=>{const t=document.createElement("button");return t.className="chip"+($t.card.frame===n.id?" on":""),t.dataset.frame=n.id,t.textContent=n.name,t.addEventListener("click",()=>{$t.card.frame=n.id,$f(),ph()}),t})),$("boothPalette").replaceChildren(..._M.map(n=>{const t=document.createElement("button");return t.className="chip emoji",t.dataset.sticker=n,t.textContent=n,t.setAttribute("aria-label",`Add ${n} sticker`),t.addEventListener("click",()=>{const e=$t.card.stickers.length,i={id:$t.nextId++,emoji:n,x:.3+e*.17%.4,y:.3+e*.23%.4,size:.1,rot:(Math.random()-.5)*.5};$t.card.stickers.push(i),$t.sel=i,Nt.play("wear"),_r()}),t})))}const $S=()=>{$t=null,$("booth").classList.add("hidden"),ga.getDelta()};$("photoBtn").addEventListener("click",XS);$("boothClose").addEventListener("click",$S);$("boothResultClose").addEventListener("click",()=>$("boothResult").classList.add("hidden"));const mh=n=>()=>{$t?.sel&&(n($t.sel),_r())};$("stBigger").addEventListener("click",mh(n=>n.size=Math.min(.4,n.size*1.25)));$("stSmaller").addEventListener("click",mh(n=>n.size=Math.max(.04,n.size/1.25)));$("stTurn").addEventListener("click",mh(n=>n.rot+=Math.PI/8));$("stRemove").addEventListener("click",()=>{$t?.sel&&($t.card.stickers=$t.card.stickers.filter(n=>n!==$t.sel),$t.sel=null,_r())});$("boothStage").addEventListener("pointerdown",n=>{$t&&n.target===na&&($t.sel=null,_r())});$("boothSave").addEventListener("click",async()=>{if(!$t)return;const n=$("boothSave");n.disabled=!0;try{const t=await yM($t.card),e=await SM(t,MM(new Date));Ec={bytes:t.size,how:e};const i=$("boothImg");i.src.startsWith("blob:")&&URL.revokeObjectURL(i.src),i.src=URL.createObjectURL(t),$("boothMsg").textContent=e==="shared"?"Shared! 💌":e==="cancelled"?"Not shared. You can long-press the picture to save it.":"Postcard saved! 💌 If nothing downloaded, long-press (or right-click) the picture to save it.",$("boothResult").classList.remove("hidden"),Nt.play("unlock")}finally{n.disabled=!1}});window.addEventListener("resize",()=>$t&&ph());let Ec=null;function Yf(n){for(const t of ne)la(t.data,n*pi);for(const t of En)t.data.hatchAt-=n*pi;rt.lastEggAt-=n*pi,le(),jn()}function jf(){const n=Ut??ne[0];n.data.stage>=Kc||(n.data.care=Math.max(n.data.care,Yr[n.data.stage]),Aa(n))}function YS(){const n=Ut??ne[0],t=ne.filter(e=>e!==n).sort((e,i)=>e.up.angleTo(n.up)-i.up.angleTo(n.up))[0];if(t){for(const e of[n,t])e.data.joy=95,e.data.food=85,Qc.set(e,performance.now()+12e4);t.up.copy(n.up).addScaledVector(n.forward,.25).normalize(),rt.lastEggAt=0,ah(),wn(null),zf()}}Tf&&($("debug").classList.remove("hidden"),$("dbgFF").addEventListener("click",()=>Yf(4)),$("dbgEvolve").addEventListener("click",jf),$("dbgBreed").addEventListener("click",YS),$("dbgReset").addEventListener("click",()=>{qr=!0,$y(),location.reload()}));window.__ppp={ready:!1,pets:()=>ne.map(n=>({...n.data,pos:[...n.data.pos],moving:n.moving,sleeping:n.sleeping,napping:Mc(n),look:n.data.look,parents:n.data.parents,wear:n.data.wear??{},evolving:n.evolving,visible:Of(n),screen:Ke(n.centerWorld())})),camera:()=>re.position.toArray(),sky:()=>({hour:ze.hour,night:ze.night,fireflies:ze.fireflyOpacity}),selected:()=>Ut?.data.id??null,focus:(n,t=6.2)=>{if(Array.isArray(n)){re.position.fromArray(n).normalize().multiplyScalar(t);return}const e=ne.find(s=>s.data.id===n)?.up??En.find(s=>s.data.id===n)?.up;if(!e)return;const i=new w(0,-1,0).addScaledVector(e,e.y);i.lengthSq()<1e-6&&i.set(0,0,1),re.position.copy(e).addScaledVector(i.normalize(),-.22).normalize().multiplyScalar(t)},eggs:()=>En.map(n=>({...n.data,screen:Ke(n.group.position)})),unlocked:()=>fc(rt.totalCare).map(n=>n.id),minigame:()=>Oi?.state()??null,audio:()=>({state:Nt.state,muted:Nt.muted}),weather:()=>_n.view(),flowerNormals:()=>Qe.flowers.map(n=>n.normal.toArray()),__sound:Nt,saving:()=>!qr,dex:()=>({...$n}),friends:()=>({...xi}),visitor:()=>pe?{state:pe.state,screen:Ke(pe.group.position.clone().addScaledVector(pe.up,.32)),visible:pe.group.position.dot(re.position)>2.2,shop:hr,night:ca(new Date),log:{...li}}:{state:"none",shop:hr,night:ca(new Date),log:{...li}},garden:()=>({seeds:{...qn.seeds},plots:uh().map(n=>{const t=Gi(n);return{id:n.data.id,pos:n.data.pos,...t,stage:pr(t),progress:qc(t),wet:t.wetUntil>Date.now(),screen:Ke(n.group.position.clone().addScaledVector(n.group.position.clone().normalize(),.1)),visible:n.group.position.dot(re.position)>2.2}})}),diary:()=>as.map(n=>({...n})),seeks:()=>[...Zs].map(([n,t])=>({pet:n.data.id,friend:t.friend.data.id})),booth:()=>$t?{frame:$t.card.frame,stickers:$t.card.stickers.map(n=>({...n})),size:Zc($t.card.photo),last:Ec}:{last:Ec},decor:()=>Te.map(n=>({...n.data,screen:Ke(n.group.position.clone().addScaledVector(n.group.position.clone().normalize(),.06)),visible:n.group.position.dot(re.position)>2.2,selected:n===Xn})),probe:(n,t)=>{const e=hh(n,t);return e?{hit:!0,problem:wa(e,Qe.ponds,Te)}:{hit:!1,problem:null}},ponds:()=>Qe.ponds.map(n=>({normal:n.toArray(),screen:Ke(n.clone().multiplyScalar(ge)),visible:n.dot(re.position)>2.2})),visits:()=>[...Oe].map(([n,t])=>({pet:n.data.id,decor:t.decor.data.id,kind:t.kind,arrived:t.arrived>0,napping:Mc(n)})),season:()=>({season:hn,festival:_e?.id??null,decor:Pf.decor,props:Qe.props.map(n=>n.kind),outfits:[...rt.outfits??[]]}),perf:()=>({calls:Pe.info.render.calls,triangles:Pe.info.render.triangles,geometries:Pe.info.memory.geometries,objects:jS()}),game:()=>({snacks:rt.snacks,totalCare:rt.totalCare,lastEggAt:rt.lastEggAt,population:kf(),courting:!!Ze}),...Tf?{visitNow:()=>Wf(!0),fastForward:Yf,evolve:jf,setWeather:n=>_n.set(n,ze.night)}:{}};function jS(){let n=0;return Be.traverseVisible(()=>n++),n}window.addEventListener("resize",()=>{re.aspect=window.innerWidth/window.innerHeight,ai=-1,re.updateProjectionMatrix(),Pe.setSize(window.innerWidth,window.innerHeight)});const qS=window.matchMedia("(max-height: 520px) and (min-aspect-ratio: 4/3)");let ai=0;function KS(n){const t=Ut&&qS.matches?(yc.getBoundingClientRect().width+16)/2:0;if(Math.abs(t-ai)<.5&&(t!==0||ai===0))return;ai+=(t-ai)*Math.min(1,n*8),Math.abs(t-ai)<.5&&(ai=t);const e=window.innerWidth,i=window.innerHeight;ai===0?re.clearViewOffset():re.setViewOffset(e,i,ai,0,e,i)}const ga=new Bx;let xl=0,yl=0,Ml=2;const ZS=new w,JS=$("clock");let zs=0,Xo=0;function QS(n){if(zs<0||(zs++,Xo+=n,Xo<2))return;const t=Xo/zs,e=Pe.getPixelRatio();t>.045&&e>1?Pe.setPixelRatio(Math.max(1,e/2)):t>.045&&e>.75?Pe.setPixelRatio(.75):zs=-1,zs>=0&&(zs=Xo=0)}Pe.setAnimationLoop(()=>{const n=ga.getDelta();if(Oi||$t){for(const r of ne)la(r.data,n*1e3);return}QS(n);const t=Math.min(.1,n),e=ga.elapsedTime;_n.tick(t,e,ze.night),ze.cloudy=Math.max(_n.rain,_n.snow*.6),ze.tick(t,e);const i=performance.now();for(const r of ne){la(r.data,t*1e3),r.sleeping=(ze.night>.6||Mc(r))&&!r.evolving&&i>(Qc.get(r)??0);const o=Ze?.a===r?Ze.b:Ze?.b===r?Ze.a:null,a=Oe.get(r);r.facing=r===Ut?re.position:o?o.group.position:a?.arrived?a.decor.group.position:null,r.update(t,e)}const s=Date.now();for(const r of[...En])r.update(t,e,s),s>=r.data.hatchAt&&RS(r);Ml-=t,Ml<=0&&(Ml=1.5,zf(),Wf(),xS(i),FS(),VS()),pe?.update(Math.min(1,n),e,re.position),My(ze.night*.7),US(i),yS(i);for(const r of Te)for(const o of r.glow)o.material.opacity=ze.night*.9,o.visible=ze.night>.02;if(yl-=t,yl<=0){yl=.25,Nt.setNight(ze.night),Nt.setRain(_n.rain);for(const a of ne)a.data.stage>=2&&Math.random()<.4&&ae.twinkle(a.headWorld(),a.up),a.sleeping&&Math.random()<.18&&ae.zzz(a.headWorld(),a.up);const r=Math.floor(ze.hour),o=Math.floor(ze.hour%1*60);JS.textContent=`${_n.emoji?_n.emoji+" ":""}${ze.night>.5?"🌙":ze.night>.05?"🌇":"☀️"} ${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`}if(ae.update(t),Pf.tick(t,e,ze.night),Qe.update(t),Fn.update(),KS(t),Ut){const r=Ke(Ut.headWorld(ZS));Zr.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -100%)`,Zr.style.opacity=Of(Ut)?"1":"0.25",xl-=t,xl<=0&&(xl=.5,jn())}Pe.render(Be,re),window.__ppp.ready=!0});
