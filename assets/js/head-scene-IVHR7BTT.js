var sh=0,$a=1,oh=2;var pc=1,ah=2,Ri=3,bs=0,et=1,Ms=2,mc=1;var Ci=0,Ii=1,ja=2,Qa=3,Ka=4,lh=5,Kn=100,ch=101,hh=102,el=103,tl=104,uh=200,dh=201,fh=202,ph=203,gc=204,xc=205,mh=206,gh=207,xh=208,yh=209,vh=210,_h=0,wh=1,bh=2,ho=3,Mh=4,Sh=5,Eh=6,Th=7,Ss=0,Ah=1,Lh=2,Di=0,Rh=1,Ph=2,Ch=3,Ih=4,Dh=5,yc=300,Ta=301,Aa=302,nl=303,il=304,La=306,Ra=307,uo=1e3,Bt=1001,fo=1002,xt=1003,rl=1004;var sl=1005;var Et=1006,Nh=1007;var Pa=1008;var Ca=1009,Fh=1010,Bh=1011,Ur=1012,zh=1013,Gr=1014,fn=1015,Hr=1016,Gh=1017,Oh=1018,Uh=1019,Ni=1020,Hh=1021,Rn=1022,zt=1023,kh=1024,Vh=1025;var ii=1026,Hi=1027,Wh=1028,qh=1029,Xh=1030,Yh=1031,Zh=1032,Jh=1033,ol=33776,al=33777,ll=33778,cl=33779,hl=35840,ul=35841,dl=35842,fl=35843,$h=36196,pl=37492,ml=37496,jh=37808,Qh=37809,Kh=37810,eu=37811,tu=37812,nu=37813,iu=37814,ru=37815,su=37816,ou=37817,au=37818,lu=37819,cu=37820,hu=37821,uu=36492,du=37840,fu=37841,pu=37842,mu=37843,gu=37844,xu=37845,yu=37846,vu=37847,_u=37848,wu=37849,bu=37850,Mu=37851,Su=37852,Eu=37853,Tu=2200,Au=2201,Lu=2202,kr=2300,Vr=2301,Cs=2302,ei=2400,ti=2401,Wr=2402,Ia=2500,vc=2501,Ru=0;var gi=3e3,Da=3001,_c=3007,wc=3002,Pu=3003,bc=3004,Mc=3005,Sc=3006,Cu=3200,Iu=3201,xi=0,Du=1;var Is=7680;var Nu=519,ki=35044,qr=35048;var gl="300 es",en=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},st=[];for(let r=0;r<256;r++)st[r]=(r<16?"0":"")+r.toString(16);var ar=1234567,Fi=Math.PI/180,Vi=180/Math.PI;function Tt(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[t&63|128]+st[t>>8&255]+"-"+st[t>>16&255]+st[t>>24&255]+st[n&255]+st[n>>8&255]+st[n>>16&255]+st[n>>24&255]).toUpperCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function Na(r,e){return(r%e+e)%e}function Fu(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Bu(r,e,t){return r!==e?(t-r)/(e-r):0}function Bi(r,e,t){return(1-t)*r+t*e}function zu(r,e,t,n){return Bi(r,e,1-Math.exp(-t*n))}function Gu(r,e=1){return e-Math.abs(Na(r,e*2)-e)}function Ou(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Uu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Hu(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ku(r,e){return r+Math.random()*(e-r)}function Vu(r){return r*(.5-Math.random())}function Wu(r){return r!==void 0&&(ar=r%2147483647),ar=ar*16807%2147483647,(ar-1)/2147483646}function qu(r){return r*Fi}function Xu(r){return r*Vi}function po(r){return(r&r-1)===0&&r!==0}function Ec(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Tc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yu(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var Ac=Object.freeze({__proto__:null,DEG2RAD:Fi,RAD2DEG:Vi,generateUUID:Tt,clamp:mt,euclideanModulo:Na,mapLinear:Fu,inverseLerp:Bu,lerp:Bi,damp:zu,pingpong:Gu,smoothstep:Ou,smootherstep:Uu,randInt:Hu,randFloat:ku,randFloatSpread:Vu,seededRandom:Wu,degToRad:qu,radToDeg:Xu,isPowerOfTwo:po,ceilPowerOfTwo:Ec,floorPowerOfTwo:Tc,setQuaternionFromProperEuler:Yu}),$=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};$.prototype.isVector2=!0;var je=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],y=i[3],g=i[6],p=i[1],M=i[4],E=i[7],A=i[2],_=i[5],I=i[8];return s[0]=o*x+a*p+l*A,s[3]=o*y+a*M+l*_,s[6]=o*g+a*E+l*I,s[1]=c*x+h*p+u*A,s[4]=c*y+h*M+u*_,s[7]=c*g+h*E+u*I,s[2]=d*x+f*p+m*A,s[5]=d*y+f*M+m*_,s[8]=d*g+f*E+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*h,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*h,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};je.prototype.isMatrix3=!0;var Fn,gn=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Fn.width=e.width,Fn.height=e.height;let n=Fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}},Zu=0,ht=class r extends en{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Bt,i=Bt,s=Et,o=Pa,a=zt,l=Ca,c=1,h=gi){super(),Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Tt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let i=this.image;if(i.uuid===void 0&&(i.uuid=Tt()),!t&&e.images[i.uuid]===void 0){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ds(i[o].image)):s.push(Ds(i[o]))}else s=Ds(i);e.images[i.uuid]={uuid:i.uuid,url:s}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};ht.DEFAULT_IMAGE=void 0;ht.DEFAULT_MAPPING=yc;ht.prototype.isTexture=!0;function Ds(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Le=class{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],y=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+y)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,E=(f+1)/2,A=(g+1)/2,_=(h+d)/4,I=(u+x)/4,D=(m+y)/4;return M>E&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=_/n,s=I/n):E>A?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=_/i,s=D/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=I/s,i=D/s),this.set(n,i,s,t),this}let p=Math.sqrt((y-m)*(y-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(p)<.001&&(p=1),this.x=(y-m)/p,this.y=(u-x)/p,this.z=(d-h)/p,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Le.prototype.isVector4=!0;var Qt=class extends en{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Le(0,0,e,t),this.scissorTest=!1,this.viewport=new Le(0,0,e,t),n=n||{},this.texture=new ht(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Et,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};Qt.prototype.isWebGLRenderTarget=!0;var mo=class extends Qt{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};mo.prototype.isWebGLMultisampleRenderTarget=!0;var at=class{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==m){let y=1-a,g=l*d+c*f+h*m+u*x,p=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){let A=Math.sqrt(M),_=Math.atan2(A,g*p);y=Math.sin(y*_)/A,a=Math.sin(a*_)/A}let E=a*p;if(l=l*y+d*E,c=c*y+f*E,h=h*y+m*E,u=u*y+x*E,y===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};at.prototype.isQuaternion=!0;var v=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};v.prototype.isVector3=!0;var Ns=new v,xl=new at,Qe=class{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new v),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new v),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox),Fs.applyMatrix4(e.matrixWorld),this.union(Fs));let n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new v),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),lr.subVectors(this.max,_i),Bn.subVectors(e.a,_i),zn.subVectors(e.b,_i),Gn.subVectors(e.c,_i),sn.subVectors(zn,Bn),on.subVectors(Gn,zn),Tn.subVectors(Bn,Gn);let t=[0,-sn.z,sn.y,0,-on.z,on.y,0,-Tn.z,Tn.y,sn.z,0,-sn.x,on.z,0,-on.x,Tn.z,0,-Tn.x,-sn.y,sn.x,0,-on.y,on.x,0,-Tn.y,Tn.x,0];return!Bs(t,Bn,zn,Gn,lr)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,Bn,zn,Gn,lr))?!1:(cr.crossVectors(sn,on),t=[cr.x,cr.y,cr.z],Bs(t,Bn,zn,Gn,lr))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new v),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Qe.prototype.isBox3=!0;var Yt=[new v,new v,new v,new v,new v,new v,new v,new v],vi=new v,Fs=new Qe,Bn=new v,zn=new v,Gn=new v,sn=new v,on=new v,Tn=new v,_i=new v,lr=new v,cr=new v,An=new v;function Bs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){An.fromArray(r,s);let a=i.x*Math.abs(An.x)+i.y*Math.abs(An.y)+i.z*Math.abs(An.z),l=e.dot(An),c=t.dot(An),h=n.dot(An);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ju=new Qe,yl=new v,zs=new v,Gs=new v,At=class{constructor(e=new v,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ju.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new v),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Qe),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Gs.subVectors(e,this.center);let t=Gs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Gs.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return zs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(yl.copy(e.center).add(zs)),this.expandByPoint(yl.copy(e.center).sub(zs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zt=new v,Os=new v,hr=new v,an=new v,Us=new v,ur=new v,Hs=new v,tn=class{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new v),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new v),t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.direction).multiplyScalar(t).add(this.origin),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Os.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),an.copy(this.origin).sub(Os);let s=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=an.dot(this.direction),l=-an.dot(hr),c=an.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(hr).multiplyScalar(d).add(Os),f}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);let n=Zt.dot(this.direction),i=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,i,s){Us.subVectors(t,e),ur.subVectors(n,e),Hs.crossVectors(Us,ur);let o=this.direction.dot(Hs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;an.subVectors(this.origin,e);let l=a*this.direction.dot(ur.crossVectors(an,ur));if(l<0)return null;let c=a*this.direction.dot(Us.cross(an));if(c<0||l+c>o)return null;let h=-a*an.dot(Hs);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class r{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,h,u,d,f,m,x,y){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/On.setFromMatrixColumn(e,0).length(),s=1/On.setFromMatrixColumn(e,1).length(),o=1/On.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($u,e,ju)}lookAt(e,t,n){let i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),ln.crossVectors(n,wt),ln.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),ln.crossVectors(n,wt)),ln.normalize(),dr.crossVectors(wt,ln),i[0]=ln.x,i[4]=dr.x,i[8]=wt.x,i[1]=ln.y,i[5]=dr.y,i[9]=wt.y,i[2]=ln.z,i[6]=dr.z,i[10]=wt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],y=n[10],g=n[14],p=n[3],M=n[7],E=n[11],A=n[15],_=i[0],I=i[4],D=i[8],F=i[12],G=i[1],k=i[5],O=i[9],C=i[13],T=i[2],R=i[6],L=i[10],B=i[14],W=i[3],H=i[7],J=i[11],j=i[15];return s[0]=o*_+a*G+l*T+c*W,s[4]=o*I+a*k+l*R+c*H,s[8]=o*D+a*O+l*L+c*J,s[12]=o*F+a*C+l*B+c*j,s[1]=h*_+u*G+d*T+f*W,s[5]=h*I+u*k+d*R+f*H,s[9]=h*D+u*O+d*L+f*J,s[13]=h*F+u*C+d*B+f*j,s[2]=m*_+x*G+y*T+g*W,s[6]=m*I+x*k+y*R+g*H,s[10]=m*D+x*O+y*L+g*J,s[14]=m*F+x*C+y*B+g*j,s[3]=p*_+M*G+E*T+A*W,s[7]=p*I+M*k+E*R+A*H,s[11]=p*D+M*O+E*L+A*J,s[15]=p*F+M*C+E*B+A*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],y=e[11],g=e[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+y*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+g*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],y=e[14],g=e[15],p=u*y*c-x*d*c+x*l*f-a*y*f-u*l*g+a*d*g,M=m*d*c-h*y*c-m*l*f+o*y*f+h*l*g-o*d*g,E=h*x*c-m*u*c+m*a*f-o*x*f-h*a*g+o*u*g,A=m*u*l-h*x*l-m*a*d+o*x*d+h*a*y-o*u*y,_=t*p+n*M+i*E+s*A;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/_;return e[0]=p*I,e[1]=(x*d*s-u*y*s-x*i*f+n*y*f+u*i*g-n*d*g)*I,e[2]=(a*y*s-x*l*s+x*i*c-n*y*c-a*i*g+n*l*g)*I,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*I,e[4]=M*I,e[5]=(h*y*s-m*d*s+m*i*f-t*y*f-h*i*g+t*d*g)*I,e[6]=(m*l*s-o*y*s-m*i*c+t*y*c+o*i*g-t*l*g)*I,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*I,e[8]=E*I,e[9]=(m*u*s-h*x*s-m*n*f+t*x*f+h*n*g-t*u*g)*I,e[10]=(o*x*s-m*a*s+m*n*c-t*x*c-o*n*g+t*a*g)*I,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*I,e[12]=A*I,e[13]=(h*x*i-m*u*i+m*n*d-t*x*d-h*n*y+t*u*y)*I,e[14]=(m*a*i-o*x*i-m*n*l+t*x*l+o*n*y-t*a*y)*I,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,x=o*h,y=o*u,g=a*u,p=l*c,M=l*h,E=l*u,A=n.x,_=n.y,I=n.z;return i[0]=(1-(x+g))*A,i[1]=(f+E)*A,i[2]=(m-M)*A,i[3]=0,i[4]=(f-E)*_,i[5]=(1-(d+g))*_,i[6]=(y+p)*_,i[7]=0,i[8]=(m+M)*I,i[9]=(y-p)*I,i[10]=(1-(d+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=On.set(i[0],i[1],i[2]).length(),o=On.set(i[4],i[5],i[6]).length(),a=On.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],It.copy(this);let c=1/s,h=1/o,u=1/a;return It.elements[0]*=c,It.elements[1]*=c,It.elements[2]*=c,It.elements[4]*=h,It.elements[5]*=h,It.elements[6]*=h,It.elements[8]*=u,It.elements[9]*=u,It.elements[10]*=u,t.setFromRotationMatrix(It),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){let a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),u=(t+e)*l,d=(n+i)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ge.prototype.isMatrix4=!0;var On=new v,It=new ge,$u=new v(0,0,0),ju=new v(1,1,1),ln=new v,dr=new v,wt=new v,vl=new ge,_l=new at,ri=class r{constructor(e=0,t=0,n=0,i=r.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new v(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};ri.prototype.isEuler=!0;ri.DefaultOrder="XYZ";ri.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Xr=class{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}},Qu=0,wl=new v,Un=new at,Jt=new ge,fr=new v,wi=new v,Ku=new v,ed=new at,bl=new v(1,0,0),Ml=new v(0,1,0),Sl=new v(0,0,1),td={type:"added"},El={type:"removed"},Fe=class r extends en{constructor(){super(),Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Tt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DefaultUp.clone();let e=new v,t=new ri,n=new at,i=new v(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new je}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=r.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(Ml,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(Ml,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(wi,fr,this.up):Jt.lookAt(fr,wi,this.up),this.quaternion.setFromRotationMatrix(Jt),i&&(Jt.extractRotation(i.matrixWorld),Un.setFromRotationMatrix(Jt),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(td)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(El)),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(El)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new v),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new at),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Ku),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new v),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,ed,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new v),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Fe.DefaultUp=new v(0,1,0);Fe.DefaultMatrixAutoUpdate=!0;Fe.prototype.isObject3D=!0;var ks=new v,nd=new v,id=new je,St=class{constructor(e=new v(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ks.subVectors(n,t).cross(nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new v),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new v);let n=e.delta(ks),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new v),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||id.getNormalMatrix(e),i=this.coplanarPoint(ks).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};St.prototype.isPlane=!0;var Dt=new v,$t=new v,Vs=new v,jt=new v,Hn=new v,kn=new v,Tl=new v,Ws=new v,qs=new v,Xs=new v,ct=class r{constructor(e=new v,t=new v,n=new v){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new v),i.subVectors(n,t),Dt.subVectors(e,t),i.cross(Dt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Dt.subVectors(i,t),$t.subVectors(n,t),Vs.subVectors(e,t);let o=Dt.dot(Dt),a=Dt.dot($t),l=Dt.dot(Vs),c=$t.dot($t),h=$t.dot(Vs),u=o*c-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new v),u===0)return s.set(-2,-1,-1);let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jt),jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,jt),l.set(0,0),l.addScaledVector(s,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(a,jt.z),l}static isFrontFacing(e,t,n,i){return Dt.subVectors(n,t),$t.subVectors(e,t),Dt.cross($t).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dt.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),Dt.cross($t).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new v),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new St),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return r.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new v);let n=this.a,i=this.b,s=this.c,o,a;Hn.subVectors(i,n),kn.subVectors(s,n),Ws.subVectors(e,n);let l=Hn.dot(Ws),c=kn.dot(Ws);if(l<=0&&c<=0)return t.copy(n);qs.subVectors(e,i);let h=Hn.dot(qs),u=kn.dot(qs);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Hn,o);Xs.subVectors(e,s);let f=Hn.dot(Xs),m=kn.dot(Xs);if(m>=0&&f<=m)return t.copy(s);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(kn,a);let y=h*m-f*u;if(y<=0&&u-h>=0&&f-m>=0)return Tl.subVectors(s,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Tl,a);let g=1/(y+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(Hn,o).addScaledVector(kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rd=0;function nt(){Object.defineProperty(this,"id",{value:rd++}),this.uuid=Tt(),this.name="",this.type="Material",this.fog=!0,this.blending=Ii,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gc,this.blendDst=xc,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}nt.prototype=Object.assign(Object.create(en.prototype),{constructor:nt,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(r){if(r!==void 0)for(let e in r){let t=r[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===mc;continue}let n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(r){let e=r===void 0||typeof r=="string";e&&(r={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(r).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(r).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(r).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(r).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(r).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(r).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(r).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(r).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(r).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(r).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(r).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(r).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(r).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(r).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(r).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(r).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(r).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(t.blending=this.blending),this.side!==bs&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){let s=[];for(let o in i){let a=i[o];delete a.metadata,s.push(a)}return s}if(e){let i=n(r.textures),s=n(r.images);i.length>0&&(t.textures=i),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(r){this.name=r.name,this.fog=r.fog,this.blending=r.blending,this.side=r.side,this.vertexColors=r.vertexColors,this.opacity=r.opacity,this.transparent=r.transparent,this.blendSrc=r.blendSrc,this.blendDst=r.blendDst,this.blendEquation=r.blendEquation,this.blendSrcAlpha=r.blendSrcAlpha,this.blendDstAlpha=r.blendDstAlpha,this.blendEquationAlpha=r.blendEquationAlpha,this.depthFunc=r.depthFunc,this.depthTest=r.depthTest,this.depthWrite=r.depthWrite,this.stencilWriteMask=r.stencilWriteMask,this.stencilFunc=r.stencilFunc,this.stencilRef=r.stencilRef,this.stencilFuncMask=r.stencilFuncMask,this.stencilFail=r.stencilFail,this.stencilZFail=r.stencilZFail,this.stencilZPass=r.stencilZPass,this.stencilWrite=r.stencilWrite;let e=r.clippingPlanes,t=null;if(e!==null){let n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=r.clipIntersection,this.clipShadows=r.clipShadows,this.shadowSide=r.shadowSide,this.colorWrite=r.colorWrite,this.precision=r.precision,this.polygonOffset=r.polygonOffset,this.polygonOffsetFactor=r.polygonOffsetFactor,this.polygonOffsetUnits=r.polygonOffsetUnits,this.dithering=r.dithering,this.alphaTest=r.alphaTest,this.alphaToCoverage=r.alphaToCoverage,this.premultipliedAlpha=r.premultipliedAlpha,this.visible=r.visible,this.toneMapped=r.toneMapped,this.userData=JSON.parse(JSON.stringify(r.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(nt.prototype,"needsUpdate",{set:function(r){r===!0&&this.version++}});var Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nt={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ys(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Zs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var de=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Na(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=Ys(s,i,e+1/3),this.g=Ys(s,i,e),this.b=Ys(s,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],s=i.length;if(s===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Lc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,n=this.g,i=this.b,s=Math.max(t,n,i),o=Math.min(t,n,i),a,l,c=(o+s)/2;if(o===s)a=0,l=0;else{let h=s-o;switch(l=c<=.5?h/(s+o):h/(2-s-o),s){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Nt),Nt.h+=e,Nt.s+=t,Nt.l+=n,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nt),e.getHSL(pr);let n=Bi(Nt.h,pr.h,t),i=Bi(Nt.s,pr.s,t),s=Bi(Nt.l,pr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};de.NAMES=Lc;de.prototype.isColor=!0;de.prototype.r=1;de.prototype.g=1;de.prototype.b=1;var xn=class extends nt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};xn.prototype.isMeshBasicMaterial=!0;var He=new v,mr=new $,We=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ki,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new de),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new $),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new v),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Le),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)He.x=this.getX(t),He.y=this.getY(t),He.z=this.getZ(t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ki&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}};We.prototype.isBufferAttribute=!0;var Yr=class extends We{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zr=class extends We{constructor(e,t,n){super(new Uint32Array(e),t,n)}},go=class extends We{constructor(e,t,n){super(new Uint16Array(e),t,n)}};go.prototype.isFloat16BufferAttribute=!0;var Ue=class extends We{constructor(e,t,n){super(new Float32Array(e),t,n)}};function Rc(r){if(r.length===0)return-1/0;let e=r[0];for(let t=1,n=r.length;t<n;++t)r[t]>e&&(e=r[t]);return e}var sd=0,Ut=new ge,$s=new Fe,Vn=new v,bt=new Qe,bi=new Qe,Ke=new v,Ge=class r extends en{constructor(){super(),Object.defineProperty(this,"id",{value:sd++}),this.uuid=Tt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)>65535?Zr:Yr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ue(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];bt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new At);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new v,1/0);return}if(e){let n=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(bt.min,bi.min),bt.expandByPoint(Ke),Ke.addVectors(bt.max,bi.max),bt.expandByPoint(Ke)):(bt.expandByPoint(bi.min),bt.expandByPoint(bi.max))}bt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ke.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ke));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ke.fromBufferAttribute(a,c),l&&(Vn.fromBufferAttribute(e,c),Ke.add(Vn)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new We(new Float32Array(4*a),4));let l=t.tangent.array,c=[],h=[];for(let G=0;G<a;G++)c[G]=new v,h[G]=new v;let u=new v,d=new v,f=new v,m=new $,x=new $,y=new $,g=new v,p=new v;function M(G,k,O){u.fromArray(i,G*3),d.fromArray(i,k*3),f.fromArray(i,O*3),m.fromArray(o,G*2),x.fromArray(o,k*2),y.fromArray(o,O*2),d.sub(u),f.sub(u),x.sub(m),y.sub(m);let C=1/(x.x*y.y-y.x*x.y);isFinite(C)&&(g.copy(d).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(C),p.copy(f).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(C),c[G].add(g),c[k].add(g),c[O].add(g),h[G].add(p),h[k].add(p),h[O].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let G=0,k=E.length;G<k;++G){let O=E[G],C=O.start,T=O.count;for(let R=C,L=C+T;R<L;R+=3)M(n[R+0],n[R+1],n[R+2])}let A=new v,_=new v,I=new v,D=new v;function F(G){I.fromArray(s,G*3),D.copy(I);let k=c[G];A.copy(k),A.sub(I.multiplyScalar(I.dot(k))).normalize(),_.crossVectors(D,k);let C=_.dot(h[G])<0?-1:1;l[G*4]=A.x,l[G*4+1]=A.y,l[G*4+2]=A.z,l[G*4+3]=C}for(let G=0,k=E.length;G<k;++G){let O=E[G],C=O.start,T=O.count;for(let R=C,L=C+T;R<L;R+=3)F(n[R+0]),F(n[R+1]),F(n[R+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new v,s=new v,o=new v,a=new v,l=new v,c=new v,h=new v,u=new v;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),y=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,y),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,y),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(e.attributes[i]===void 0)continue;let o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,o.length-c);for(let u=0,d=c;u<h;u++,d++)o[d]=l[u]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ke.fromBufferAttribute(e,t),Ke.normalize(),e.setXYZ(t,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,y=l.length;x<y;x++){f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new r().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.prototype.isBufferGeometry=!0;var Al=new ge,Wn=new tn,js=new At,cn=new v,hn=new v,un=new v,Qs=new v,Ks=new v,eo=new v,gr=new v,xr=new v,yr=new v,vr=new $,_r=new $,wr=new $,to=new v,br=new v,it=class extends Fe{constructor(e=new Ge,t=new xn){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),e.ray.intersectsSphere(js)===!1)||(Al.copy(s).invert(),Wn.copy(e.ray).applyMatrix4(Al),n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){let a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){let g=f[x],p=i[g.materialIndex],M=Math.max(g.start,m.start),E=Math.min(g.start+g.count,m.start+m.count);for(let A=M,_=E;A<_;A+=3){let I=a.getX(A),D=a.getX(A+1),F=a.getX(A+2);o=Mr(this,p,e,Wn,l,c,h,u,d,I,D,F),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{let x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){let M=a.getX(g),E=a.getX(g+1),A=a.getX(g+2);o=Mr(this,i,e,Wn,l,c,h,u,d,M,E,A),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){let g=f[x],p=i[g.materialIndex],M=Math.max(g.start,m.start),E=Math.min(g.start+g.count,m.start+m.count);for(let A=M,_=E;A<_;A+=3){let I=A,D=A+1,F=A+2;o=Mr(this,p,e,Wn,l,c,h,u,d,I,D,F),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{let x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=x,p=y;g<p;g+=3){let M=g,E=g+1,A=g+2;o=Mr(this,i,e,Wn,l,c,h,u,d,M,E,A),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}};it.prototype.isMesh=!0;function od(r,e,t,n,i,s,o,a){let l;if(e.side===et?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Ms,a),l===null)return null;br.copy(a),br.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(br);return c<t.near||c>t.far?null:{distance:c,point:br.clone(),object:r}}function Mr(r,e,t,n,i,s,o,a,l,c,h,u){cn.fromBufferAttribute(i,c),hn.fromBufferAttribute(i,h),un.fromBufferAttribute(i,u);let d=r.morphTargetInfluences;if(e.morphTargets&&s&&d){gr.set(0,0,0),xr.set(0,0,0),yr.set(0,0,0);for(let m=0,x=s.length;m<x;m++){let y=d[m],g=s[m];y!==0&&(Qs.fromBufferAttribute(g,c),Ks.fromBufferAttribute(g,h),eo.fromBufferAttribute(g,u),o?(gr.addScaledVector(Qs,y),xr.addScaledVector(Ks,y),yr.addScaledVector(eo,y)):(gr.addScaledVector(Qs.sub(cn),y),xr.addScaledVector(Ks.sub(hn),y),yr.addScaledVector(eo.sub(un),y)))}cn.add(gr),hn.add(xr),un.add(yr)}r.isSkinnedMesh&&e.skinning&&(r.boneTransform(c,cn),r.boneTransform(h,hn),r.boneTransform(u,un));let f=od(r,e,t,n,cn,hn,un,to);if(f){a&&(vr.fromBufferAttribute(a,c),_r.fromBufferAttribute(a,h),wr.fromBufferAttribute(a,u),f.uv=ct.getUV(to,cn,hn,un,vr,_r,wr,new $)),l&&(vr.fromBufferAttribute(l,c),_r.fromBufferAttribute(l,h),wr.fromBufferAttribute(l,u),f.uv2=ct.getUV(to,cn,hn,un,vr,_r,wr,new $));let m={a:c,b:h,c:u,normal:new v,materialIndex:0};ct.getNormal(cn,hn,un,m.normal),f.face=m}return f}var Wi=class extends Ge{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function m(x,y,g,p,M,E,A,_,I,D,F){let G=E/I,k=A/D,O=E/2,C=A/2,T=_/2,R=I+1,L=D+1,B=0,W=0,H=new v;for(let J=0;J<L;J++){let j=J*k-C;for(let oe=0;oe<R;oe++){let ne=oe*G-O;H[x]=ne*p,H[y]=j*M,H[g]=T,c.push(H.x,H.y,H.z),H[x]=0,H[y]=0,H[g]=_>0?1:-1,h.push(H.x,H.y,H.z),u.push(oe/I),u.push(1-J/D),B+=1}}for(let J=0;J<D;J++)for(let j=0;j<I;j++){let oe=d+j+R*J,ne=d+j+R*(J+1),U=d+(j+1)+R*(J+1),ve=d+(j+1)+R*J;l.push(oe,ne,ve),l.push(ne,U,ve),W+=6}a.addGroup(f,W,F),f+=W,d+=B}}};function si(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(r){let e={};for(let t=0;t<r.length;t++){let n=si(r[t]);for(let i in n)e[i]=n[i]}return e}var Es={clone:si,merge:lt},ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends nt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=ad,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=si(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}};Gt.prototype.isShaderMaterial=!0;var qi=class extends Fe{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new v),this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};qi.prototype.isCamera=!0;var ot=class extends qi{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};ot.prototype.isPerspectiveCamera=!0;var qn=90,Xn=1,Xi=class extends Fe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new ot(qn,Xn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new v(1,0,0)),this.add(i);let s=new ot(qn,Xn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new v(-1,0,0)),this.add(s);let o=new ot(qn,Xn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new v(0,1,0)),this.add(o);let a=new ot(qn,Xn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new v(0,-1,0)),this.add(a);let l=new ot(qn,Xn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new v(0,0,1)),this.add(l);let c=new ot(qn,Xn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new v(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}},oi=class extends ht{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ta,a=a!==void 0?a:Rn,super(e,t,n,i,s,o,a,l,c,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};oi.prototype.isCubeTexture=!0;var Jr=class extends Qt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new oi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=zt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:et,blending:Ci});s.uniforms.tEquirect.value=t;let o=new it(i,s),a=t.minFilter;return t.minFilter===Pa&&(t.minFilter=Et),new Xi(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}};Jr.prototype.isWebGLCubeRenderTarget=!0;var $r=class extends ht{constructor(e,t,n,i,s,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,s,u,d),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=c!==void 0?c:xt,this.minFilter=h!==void 0?h:xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};$r.prototype.isDataTexture=!0;var Yn=new At,Sr=new v,ai=class{constructor(e=new St,t=new St,n=new St,i=new St,s=new St,o=new St){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],m=n[10],x=n[11],y=n[12],g=n[13],p=n[14],M=n[15];return t[0].setComponents(a-i,u-l,x-d,M-y).normalize(),t[1].setComponents(a+i,u+l,x+d,M+y).normalize(),t[2].setComponents(a+s,u+c,x+f,M+g).normalize(),t[3].setComponents(a-s,u-c,x-f,M-g).normalize(),t[4].setComponents(a-o,u-h,x-m,M-p).normalize(),t[5].setComponents(a+o,u+h,x+m,M+p).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function cd(r,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:u instanceof Uint8Array&&(m=5121),{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){let d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}var Yi=class extends Ge{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],x=[],y=[];for(let g=0;g<h;g++){let p=g*d-o;for(let M=0;M<c;M++){let E=M*u-s;m.push(E,-p,0),x.push(0,0,1),y.push(M/a),y.push(1-g/l)}}for(let g=0;g<l;g++)for(let p=0;p<a;p++){let M=p+c*g,E=p+c*(g+1),A=p+1+c*(g+1),_=p+1+c*g;f.push(M,E,_),f.push(E,A,_)}this.setIndex(f),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(y,2))}},hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md="vec3 transformed = vec3( position );",gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Bd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Xd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,$d=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,tf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,nf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,af=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uf=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,yf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Mf=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ff=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uf=`#ifdef USE_SKINNING
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
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Xf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Yf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Zf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Jf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$f=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,jf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Qf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ep=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,op=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,_p=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,bp=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,Sp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Rp=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ae={alphamap_fragment:hd,alphamap_pars_fragment:ud,alphatest_fragment:dd,aomap_fragment:fd,aomap_pars_fragment:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:xd,bumpmap_pars_fragment:yd,clipping_planes_fragment:vd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:wd,clipping_planes_vertex:bd,color_fragment:Md,color_pars_fragment:Sd,color_pars_vertex:Ed,color_vertex:Td,common:Ad,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Pd,displacementmap_vertex:Cd,emissivemap_fragment:Id,emissivemap_pars_fragment:Dd,encodings_fragment:Nd,encodings_pars_fragment:Fd,envmap_fragment:Bd,envmap_common_pars_fragment:zd,envmap_pars_fragment:Gd,envmap_pars_vertex:Od,envmap_physical_pars_fragment:$d,envmap_vertex:Ud,fog_vertex:Hd,fog_pars_vertex:kd,fog_fragment:Vd,fog_pars_fragment:Wd,gradientmap_pars_fragment:qd,lightmap_fragment:Xd,lightmap_pars_fragment:Yd,lights_lambert_vertex:Zd,lights_pars_begin:Jd,lights_toon_fragment:jd,lights_toon_pars_fragment:Qd,lights_phong_fragment:Kd,lights_phong_pars_fragment:ef,lights_physical_fragment:tf,lights_physical_pars_fragment:nf,lights_fragment_begin:rf,lights_fragment_maps:sf,lights_fragment_end:of,logdepthbuf_fragment:af,logdepthbuf_pars_fragment:lf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:hf,map_fragment:uf,map_pars_fragment:df,map_particle_fragment:ff,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphnormal_vertex:xf,morphtarget_pars_vertex:yf,morphtarget_vertex:vf,normal_fragment_begin:_f,normal_fragment_maps:wf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:Ef,packing:Tf,premultiplied_alpha_fragment:Af,project_vertex:Lf,dithering_fragment:Rf,dithering_pars_fragment:Pf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Nf,shadowmap_vertex:Ff,shadowmask_pars_fragment:Bf,skinbase_vertex:zf,skinning_pars_vertex:Gf,skinning_vertex:Of,skinnormal_vertex:Uf,specularmap_fragment:Hf,specularmap_pars_fragment:kf,tonemapping_fragment:Vf,tonemapping_pars_fragment:Wf,transmissionmap_fragment:qf,transmissionmap_pars_fragment:Xf,uv_pars_fragment:Yf,uv_pars_vertex:Zf,uv_vertex:Jf,uv2_pars_fragment:$f,uv2_pars_vertex:jf,uv2_vertex:Qf,worldpos_vertex:Kf,background_frag:ep,background_vert:tp,cube_frag:np,cube_vert:ip,depth_frag:rp,depth_vert:sp,distanceRGBA_frag:op,distanceRGBA_vert:ap,equirect_frag:lp,equirect_vert:cp,linedashed_frag:hp,linedashed_vert:up,meshbasic_frag:dp,meshbasic_vert:fp,meshlambert_frag:pp,meshlambert_vert:mp,meshmatcap_frag:gp,meshmatcap_vert:xp,meshtoon_frag:yp,meshtoon_vert:vp,meshphong_frag:_p,meshphong_vert:wp,meshphysical_frag:bp,meshphysical_vert:Mp,normal_frag:Sp,normal_vert:Ep,points_frag:Tp,points_vert:Ap,shadow_frag:Lp,shadow_vert:Rp,sprite_frag:Pp,sprite_vert:Cp},te={common:{diffuse:{value:new de(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new je},uv2Transform:{value:new je},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new je}},sprite:{diffuse:{value:new de(15658734)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new je}}},gt={basic:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new de(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:lt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:lt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new de(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:lt([te.points,te.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:lt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:lt([te.common,te.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.normal_vert,fragmentShader:Ae.normal_frag},sprite:{uniforms:lt([te.sprite,te.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:lt([te.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:lt([te.common,te.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:lt([te.lights,te.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};gt.physical={uniforms:lt([gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new de(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function Ip(r,e,t,n,i){let s=new de(0),o=0,a,l,c=null,h=0,u=null;function d(m,x,y,g){let p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=e.get(p));let M=r.xr,E=M.getSession&&M.getSession();E&&E.environmentBlendMode==="additive"&&(p=null),p===null?f(s,o):p&&p.isColor&&(f(p,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),p&&(p.isCubeTexture||p.mapping===La)?(l===void 0&&(l=new it(new Wi(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:si(gt.cube.uniforms),vertexShader:gt.cube.vertexShader,fragmentShader:gt.cube.fragmentShader,side:et,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,_,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(c!==p||h!==p.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,c=p,h=p.version,u=r.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new it(new Yi(2,2),new Gt({name:"BackgroundMaterial",uniforms:si(gt.background.uniforms),vertexShader:gt.background.vertexShader,fragmentShader:gt.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||h!==p.version||u!==r.toneMapping)&&(a.material.needsUpdate=!0,c=p,h=p.version,u=r.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function f(m,x){t.buffers.color.setClear(m.r,m.g,m.b,x,i)}return{getClearColor:function(){return s},setClearColor:function(m,x=1){s.set(m),o=x,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,f(s,o)},render:d}}function Dp(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=x(null),c=l;function h(C,T,R,L,B){let W=!1;if(o){let H=m(L,R,T);c!==H&&(c=H,d(c.object)),W=y(L,B),W&&g(L,B)}else{let H=T.wireframe===!0;(c.geometry!==L.id||c.program!==R.id||c.wireframe!==H)&&(c.geometry=L.id,c.program=R.id,c.wireframe=H,W=!0)}C.isInstancedMesh===!0&&(W=!0),B!==null&&t.update(B,34963),W&&(I(C,T,R,L),B!==null&&r.bindBuffer(34963,t.get(B).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(C){return n.isWebGL2?r.bindVertexArray(C):s.bindVertexArrayOES(C)}function f(C){return n.isWebGL2?r.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function m(C,T,R){let L=R.wireframe===!0,B=a[C.id];B===void 0&&(B={},a[C.id]=B);let W=B[T.id];W===void 0&&(W={},B[T.id]=W);let H=W[L];return H===void 0&&(H=x(u()),W[L]=H),H}function x(C){let T=[],R=[],L=[];for(let B=0;B<i;B++)T[B]=0,R[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:R,attributeDivisors:L,object:C,attributes:{},index:null}}function y(C,T){let R=c.attributes,L=C.attributes,B=0;for(let W in L){let H=R[W],J=L[W];if(H===void 0||H.attribute!==J||H.data!==J.data)return!0;B++}return c.attributesNum!==B||c.index!==T}function g(C,T){let R={},L=C.attributes,B=0;for(let W in L){let H=L[W],J={};J.attribute=H,H.data&&(J.data=H.data),R[W]=J,B++}c.attributes=R,c.attributesNum=B,c.index=T}function p(){let C=c.newAttributes;for(let T=0,R=C.length;T<R;T++)C[T]=0}function M(C){E(C,0)}function E(C,T){let R=c.newAttributes,L=c.enabledAttributes,B=c.attributeDivisors;R[C]=1,L[C]===0&&(r.enableVertexAttribArray(C),L[C]=1),B[C]!==T&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,T),B[C]=T)}function A(){let C=c.newAttributes,T=c.enabledAttributes;for(let R=0,L=T.length;R<L;R++)T[R]!==C[R]&&(r.disableVertexAttribArray(R),T[R]=0)}function _(C,T,R,L,B,W){n.isWebGL2===!0&&(R===5124||R===5125)?r.vertexAttribIPointer(C,T,R,B,W):r.vertexAttribPointer(C,T,R,L,B,W)}function I(C,T,R,L){if(n.isWebGL2===!1&&(C.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();let B=L.attributes,W=R.getAttributes(),H=T.defaultAttributeValues;for(let J in W){let j=W[J];if(j>=0){let oe=B[J];if(oe!==void 0){let ne=oe.normalized,U=oe.itemSize,ve=t.get(oe);if(ve===void 0)continue;let Se=ve.buffer,me=ve.type,ce=ve.bytesPerElement;if(oe.isInterleavedBufferAttribute){let Q=oe.data,he=Q.stride,pe=oe.offset;Q&&Q.isInstancedInterleavedBuffer?(E(j,Q.meshPerAttribute),L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)):M(j),r.bindBuffer(34962,Se),_(j,U,me,ne,he*ce,pe*ce)}else oe.isInstancedBufferAttribute?(E(j,oe.meshPerAttribute),L._maxInstanceCount===void 0&&(L._maxInstanceCount=oe.meshPerAttribute*oe.count)):M(j),r.bindBuffer(34962,Se),_(j,U,me,ne,0,0)}else if(J==="instanceMatrix"){let ne=t.get(C.instanceMatrix);if(ne===void 0)continue;let U=ne.buffer,ve=ne.type;E(j+0,1),E(j+1,1),E(j+2,1),E(j+3,1),r.bindBuffer(34962,U),r.vertexAttribPointer(j+0,4,ve,!1,64,0),r.vertexAttribPointer(j+1,4,ve,!1,64,16),r.vertexAttribPointer(j+2,4,ve,!1,64,32),r.vertexAttribPointer(j+3,4,ve,!1,64,48)}else if(J==="instanceColor"){let ne=t.get(C.instanceColor);if(ne===void 0)continue;let U=ne.buffer,ve=ne.type;E(j,1),r.bindBuffer(34962,U),r.vertexAttribPointer(j,3,ve,!1,12,0)}else if(H!==void 0){let ne=H[J];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(j,ne);break;case 3:r.vertexAttrib3fv(j,ne);break;case 4:r.vertexAttrib4fv(j,ne);break;default:r.vertexAttrib1fv(j,ne)}}}}A()}function D(){k();for(let C in a){let T=a[C];for(let R in T){let L=T[R];for(let B in L)f(L[B].object),delete L[B];delete T[R]}delete a[C]}}function F(C){if(a[C.id]===void 0)return;let T=a[C.id];for(let R in T){let L=T[R];for(let B in L)f(L[B].object),delete L[B];delete T[R]}delete a[C.id]}function G(C){for(let T in a){let R=a[T];if(R[C.id]===void 0)continue;let L=R[C.id];for(let B in L)f(L[B].object),delete L[B];delete R[C.id]}}function k(){O(),c!==l&&(c=l,d(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:O,dispose:D,releaseStatesOfGeometry:F,releaseStatesOfProgram:G,initAttributes:p,enableAttribute:M,disableUnusedAttributes:A}}function Np(r,e,t,n){let i=n.isWebGL2,s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Fp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(_){if(_==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),u=r.getParameter(35660),d=r.getParameter(3379),f=r.getParameter(34076),m=r.getParameter(34921),x=r.getParameter(36347),y=r.getParameter(36348),g=r.getParameter(36349),p=u>0,M=o||e.has("OES_texture_float"),E=p&&M,A=o?r.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:A}}function Bp(r){let e=this,t=null,n=0,i=!1,s=!1,o=new St,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){let m=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,y=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!y)s?h(null):c();else{let p=s?0:n,M=p*4,E=g.clippingState||null;l.value=E,E=h(m,d,M,f);for(let A=0;A!==M;++A)E[A]=t[A];g.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,y=null;if(x!==0){if(y=l.value,m!==!0||y===null){let g=f+x*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(y===null||y.length<g)&&(y=new Float32Array(g));for(let M=0,E=f;M!==x;++M,E+=4)o.copy(u[M]).applyMatrix4(p,a),o.normal.toArray(y,E),y[E+3]=o.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function zp(r){let e=new WeakMap;function t(o,a){return a===nl?o.mapping=Ta:a===il&&(o.mapping=Aa),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===nl||a===il)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=r.getRenderTarget(),h=new Jr(l.height/2);return h.fromEquirectangularTexture(r,o),e.set(o,h),r.setRenderTarget(c),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}function Gp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Op(r,e,t,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)e.update(d[m],34962);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let y=0,g=x.length;y<g;y++)e.update(x[y],34962)}}function c(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let p=f.array;x=f.version;for(let M=0,E=p.length;M<E;M+=3){let A=p[M+0],_=p[M+1],I=p[M+2];d.push(A,_,_,I,I,A)}}else{let p=m.array;x=m.version;for(let M=0,E=p.length/3-1;M<E;M+=3){let A=M+0,_=M+1,I=M+2;d.push(A,_,_,I,I,A)}}let y=new(Rc(d)>65535?Zr:Yr)(d,1);y.version=x;let g=s.get(u);g&&e.remove(g),s.set(u,y)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Up(r,e,t,n){let i=n.isWebGL2,s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,m){if(m===0)return;let x,y;if(i)x=r,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](s,f,a,d*l,m),t.update(f,s,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Hp(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kp(r,e){return r[0]-e[0]}function Vp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Wp(r){let e={},t=new Float32Array(8),n=[];for(let s=0;s<8;s++)n[s]=[s,0];function i(s,o,a,l){let c=s.morphTargetInfluences,h=c===void 0?0:c.length,u=e[o.id];if(u===void 0){u=[];for(let y=0;y<h;y++)u[y]=[y,0];e[o.id]=u}for(let y=0;y<h;y++){let g=u[y];g[0]=y,g[1]=c[y]}u.sort(Vp);for(let y=0;y<8;y++)y<h&&u[y][1]?(n[y][0]=u[y][0],n[y][1]=u[y][1]):(n[y][0]=Number.MAX_SAFE_INTEGER,n[y][1]=0);n.sort(kp);let d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal,m=0;for(let y=0;y<8;y++){let g=n[y],p=g[0],M=g[1];p!==Number.MAX_SAFE_INTEGER&&M?(d&&o.getAttribute("morphTarget"+y)!==d[p]&&o.setAttribute("morphTarget"+y,d[p]),f&&o.getAttribute("morphNormal"+y)!==f[p]&&o.setAttribute("morphNormal"+y,f[p]),t[y]=M,m+=M):(d&&o.hasAttribute("morphTarget"+y)===!0&&o.deleteAttribute("morphTarget"+y),f&&o.hasAttribute("morphNormal"+y)===!0&&o.deleteAttribute("morphNormal"+y),t[y]=0)}let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",t)}return{update:i}}function qp(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var jr=class extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};jr.prototype.isDataTexture2DArray=!0;var Qr=class extends ht{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Qr.prototype.isDataTexture3D=!0;var Cc=new ht,Xp=new jr,Yp=new Qr,Ic=new oi,Ll=[],Rl=[],Pl=new Float32Array(16),Cl=new Float32Array(9),Il=new Float32Array(4);function yi(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Ll[i];if(s===void 0&&(s=new Float32Array(i),Ll[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function yt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Dc(r,e){let t=Rl[e];t===void 0&&(t=new Int32Array(e),Rl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Zp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Jp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;r.uniform2fv(this.addr,e),ut(t,e)}}function $p(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;r.uniform3fv(this.addr,e),ut(t,e)}}function jp(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;r.uniform4fv(this.addr,e),ut(t,e)}}function Qp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(yt(t,n))return;Il.set(n),r.uniformMatrix2fv(this.addr,!1,Il),ut(t,n)}}function Kp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(yt(t,n))return;Cl.set(n),r.uniformMatrix3fv(this.addr,!1,Cl),ut(t,n)}}function em(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(yt(t,n))return;Pl.set(n),r.uniformMatrix4fv(this.addr,!1,Pl),ut(t,n)}}function tm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function nm(r,e){let t=this.cache;yt(t,e)||(r.uniform2iv(this.addr,e),ut(t,e))}function im(r,e){let t=this.cache;yt(t,e)||(r.uniform3iv(this.addr,e),ut(t,e))}function rm(r,e){let t=this.cache;yt(t,e)||(r.uniform4iv(this.addr,e),ut(t,e))}function sm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function om(r,e){let t=this.cache;yt(t,e)||(r.uniform2uiv(this.addr,e),ut(t,e))}function am(r,e){let t=this.cache;yt(t,e)||(r.uniform3uiv(this.addr,e),ut(t,e))}function lm(r,e){let t=this.cache;yt(t,e)||(r.uniform4uiv(this.addr,e),ut(t,e))}function cm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Cc,i)}function hm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yp,i)}function um(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Ic,i)}function dm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xp,i)}function fm(r){switch(r){case 5126:return Zp;case 35664:return Jp;case 35665:return $p;case 35666:return jp;case 35674:return Qp;case 35675:return Kp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return rm;case 5125:return sm;case 36294:return om;case 36295:return am;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}function pm(r,e){r.uniform1fv(this.addr,e)}function mm(r,e){let t=yi(e,this.size,2);r.uniform2fv(this.addr,t)}function gm(r,e){let t=yi(e,this.size,3);r.uniform3fv(this.addr,t)}function xm(r,e){let t=yi(e,this.size,4);r.uniform4fv(this.addr,t)}function ym(r,e){let t=yi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function vm(r,e){let t=yi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function _m(r,e){let t=yi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wm(r,e){r.uniform1iv(this.addr,e)}function bm(r,e){r.uniform2iv(this.addr,e)}function Mm(r,e){r.uniform3iv(this.addr,e)}function Sm(r,e){r.uniform4iv(this.addr,e)}function Em(r,e){r.uniform1uiv(this.addr,e)}function Tm(r,e){r.uniform2uiv(this.addr,e)}function Am(r,e){r.uniform3uiv(this.addr,e)}function Lm(r,e){r.uniform4uiv(this.addr,e)}function Rm(r,e,t){let n=e.length,i=Dc(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Cc,i[s])}function Pm(r,e,t){let n=e.length,i=Dc(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Ic,i[s])}function Cm(r){switch(r){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return xm;case 35674:return ym;case 35675:return vm;case 35676:return _m;case 5124:case 35670:return wm;case 35667:case 35671:return bm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return Tm;case 36295:return Am;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35680:case 36300:case 36308:case 36293:return Pm}}function Im(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=fm(e.type)}function Nc(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Cm(e.type)}Nc.prototype.updateCache=function(r){let e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),ut(e,r)};function Fc(r){this.id=r,this.seq=[],this.map={}}Fc.prototype.setValue=function(r,e,t){let n=this.seq;for(let i=0,s=n.length;i!==s;++i){let o=n[i];o.setValue(r,e[o.id],t)}};var no=/(\w+)(\])?(\[|\.)?/g;function Dl(r,e){r.seq.push(e),r.map[e.id]=e}function Dm(r,e,t){let n=r.name,i=n.length;for(no.lastIndex=0;;){let s=no.exec(n),o=no.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Dl(t,c===void 0?new Im(a,r,e):new Nc(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Fc(a),Dl(t,u)),t=u}}}function pn(r,e){this.seq=[],this.map={};let t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){let i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);Dm(i,s,this)}}pn.prototype.setValue=function(r,e,t,n){let i=this.map[e];i!==void 0&&i.setValue(r,t,n)};pn.prototype.setOptional=function(r,e,t){let n=e[t];n!==void 0&&this.setValue(r,t,n)};pn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){let o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};pn.seqWithValue=function(r,e){let t=[];for(let n=0,i=r.length;n!==i;++n){let s=r[n];s.id in e&&t.push(s)}return t};function Nl(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Nm=0;function Fm(r){let e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Bc(r){switch(r){case gi:return["Linear","( value )"];case Da:return["sRGB","( value )"];case wc:return["RGBE","( value )"];case bc:return["RGBM","( value, 7.0 )"];case Mc:return["RGBM","( value, 16.0 )"];case Sc:return["RGBD","( value, 256.0 )"];case _c:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Pu:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Fl(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=r.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+Fm(s)}function Mi(r,e){let t=Bc(e);return"vec4 "+r+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Bm(r,e){let t=Bc(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zm(r,e){let t;switch(e){case Rh:t="Linear";break;case Ph:t="Reinhard";break;case Ch:t="OptimizedCineon";break;case Ih:t="ACESFilmic";break;case Dh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gm(r){return[r.extensionDerivatives||r.envMapCubeUV||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function Om(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Um(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let o=r.getActiveAttrib(e,i).name;t[o]=r.getAttribLocation(e,o)}return t}function Pi(r){return r!==""}function Bl(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(r){return r.replace(Hm,km)}function km(r,e){let t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xo(t)}var Vm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(r){return r.replace(Wm,zc).replace(Vm,qm)}function qm(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),zc(r,e,t,n)}function zc(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ol(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Ym(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ta:case Aa:e="ENVMAP_TYPE_CUBE";break;case La:case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Aa:case Ra:e="ENVMAP_MODE_REFRACTION";break}return e}function Jm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ss:e="ENVMAP_BLENDING_MULTIPLY";break;case Ah:e="ENVMAP_BLENDING_MIX";break;case Lh:e="ENVMAP_BLENDING_ADD";break}return e}function $m(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Xm(t),c=Ym(t),h=Zm(t),u=Jm(t),d=r.gammaFactor>0?r.gammaFactor:1,f=t.isWebGL2?"":Gm(t),m=Om(s),x=i.createProgram(),y,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[m].filter(Pi).join(`
`),y.length>0&&(y+=`
`),g=[f,m].filter(Pi).join(`
`),g.length>0&&(g+=`
`)):(y=[Ol(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),g=[f,Ol(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?Ae.tonemapping_pars_fragment:"",t.toneMapping!==Di?zm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ae.encodings_pars_fragment,t.map?Mi("mapTexelToLinear",t.mapEncoding):"",t.matcap?Mi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Mi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Mi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Mi("lightMapTexelToLinear",t.lightMapEncoding):"",Bm("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=xo(o),o=Bl(o,t),o=zl(o,t),a=xo(a),a=Bl(a,t),a=zl(a,t),o=Gl(o),a=Gl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===gl?"":"out highp vec4 pc_fragColor;",t.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=p+y+o,E=p+g+a,A=Nl(i,35633,M),_=Nl(i,35632,E);if(i.attachShader(x,A),i.attachShader(x,_),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),r.debug.checkShaderErrors){let F=i.getProgramInfoLog(x).trim(),G=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(_).trim(),O=!0,C=!0;if(i.getProgramParameter(x,35714)===!1){O=!1;let T=Fl(i,A,"vertex"),R=Fl(i,_,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(x,35715),"gl.getProgramInfoLog",F,T,R)}else F!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",F):(G===""||k==="")&&(C=!1);C&&(this.diagnostics={runnable:O,programLog:F,vertexShader:{log:G,prefix:y},fragmentShader:{log:k,prefix:g}})}i.deleteShader(A),i.deleteShader(_);let I;this.getUniforms=function(){return I===void 0&&(I=new pn(i,x)),I};let D;return this.getAttributes=function(){return D===void 0&&(D=Um(i,x)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=Nm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=_,this}function jm(r,e,t,n,i,s){let o=[],a=n.isWebGL2,l=n.logarithmicDepthBuffer,c=n.floatVertexTextures,h=n.maxVertexUniforms,u=n.vertexTextures,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function x(_){let D=_.skeleton.bones;if(c)return 1024;{let G=Math.floor((h-20)/4),k=Math.min(G,D.length);return k<D.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+D.length+" bones. This GPU supports "+k+"."),0):k}}function y(_){let I;return _&&_.isTexture?I=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),I=_.texture.encoding):I=gi,I}function g(_,I,D,F,G){let k=F.fog,O=_.isMeshStandardMaterial?F.environment:null,C=e.get(_.envMap||O),T=f[_.type],R=G.isSkinnedMesh?x(G):0;_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let L,B;if(T){let J=gt[T];L=J.vertexShader,B=J.fragmentShader}else L=_.vertexShader,B=_.fragmentShader;let W=r.getRenderTarget();return{isWebGL2:a,shaderID:T,shaderName:_.type,vertexShader:L,fragmentShader:B,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:u,outputEncoding:W!==null?y(W.texture):r.outputEncoding,map:!!_.map,mapEncoding:y(_.map),matcap:!!_.matcap,matcapEncoding:y(_.matcap),envMap:!!C,envMapMode:C&&C.mapping,envMapEncoding:y(C),envMapCubeUV:!!C&&(C.mapping===La||C.mapping===Ra),lightMap:!!_.lightMap,lightMapEncoding:y(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:y(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Du,tangentSpaceNormalMap:_.normalMapType===xi,clearcoatMap:!!_.clearcoatMap,clearcoatRoughnessMap:!!_.clearcoatRoughnessMap,clearcoatNormalMap:!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,alphaMap:!!_.alphaMap,gradientMap:!!_.gradientMap,sheen:!!_.sheen,transmissionMap:!!_.transmissionMap,combine:_.combine,vertexTangents:_.normalMap&&_.vertexTangents,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&G.geometry&&G.geometry.attributes.color&&G.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.transmissionMap)&&!!_.displacementMap,fog:!!k,useFog:_.fog,fogExp2:k&&k.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:l,skinning:_.skinning&&R>0,maxBones:R,useVertexTexture:c,morphTargets:_.morphTargets,morphNormals:_.morphNormals,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:Di,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,alphaTest:_.alphaTest,doubleSided:_.side===Ms,flipSided:_.side===et,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){let I=[];if(_.shaderID?I.push(_.shaderID):(I.push(_.fragmentShader),I.push(_.vertexShader)),_.defines!==void 0)for(let D in _.defines)I.push(D),I.push(_.defines[D]);if(_.isRawShaderMaterial===!1){for(let D=0;D<m.length;D++)I.push(_[m[D]]);I.push(r.outputEncoding),I.push(r.gammaFactor)}return I.push(_.customProgramCacheKey),I.join()}function M(_){let I=f[_.type],D;if(I){let F=gt[I];D=Es.clone(F.uniforms)}else D=_.uniforms;return D}function E(_,I){let D;for(let F=0,G=o.length;F<G;F++){let k=o[F];if(k.cacheKey===I){D=k,++D.usedTimes;break}}return D===void 0&&(D=new $m(r,I,_,i),o.push(D)),D}function A(_){if(--_.usedTimes===0){let I=o.indexOf(_);o[I]=o[o.length-1],o.pop(),_.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:A,programs:o}}function Qm(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Km(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.program!==e.program?r.program.id-e.program.id:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function eg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ul(r){let e=[],t=0,n=[],i=[],s={id:-1};function o(){t=0,n.length=0,i.length=0}function a(d,f,m,x,y,g){let p=e[t],M=r.get(m);return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,program:M.program||s,groupOrder:x,renderOrder:d.renderOrder,z:y,group:g},e[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.program=M.program||s,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=y,p.group=g),t++,p}function l(d,f,m,x,y,g){let p=a(d,f,m,x,y,g);(m.transparent===!0?i:n).push(p)}function c(d,f,m,x,y,g){let p=a(d,f,m,x,y,g);(m.transparent===!0?i:n).unshift(p)}function h(d,f){n.length>1&&n.sort(d||Km),i.length>1&&i.sort(f||eg)}function u(){for(let d=t,f=e.length;d<f;d++){let m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:n,transparent:i,init:o,push:l,unshift:c,finish:u,sort:h}}function tg(r){let e=new WeakMap;function t(i,s){let o;return e.has(i)===!1?(o=new Ul(r),e.set(i,[o])):s>=e.get(i).length?(o=new Ul(r),e.get(i).push(o)):o=e.get(i)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function ng(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new v,color:new de};break;case"SpotLight":t={position:new v,direction:new v,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new v,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new v,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new v,halfWidth:new v,halfHeight:new v};break}return r[e.id]=t,t}}}function ig(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var rg=0;function sg(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function og(r,e){let t=new ng,n=ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new v);let s=new v,o=new ge,a=new ge;function l(h){let u=0,d=0,f=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,x=0,y=0,g=0,p=0,M=0,E=0,A=0;h.sort(sg);for(let I=0,D=h.length;I<D;I++){let F=h[I],G=F.color,k=F.intensity,O=F.distance,C=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=G.r*k,d+=G.g*k,f+=G.b*k;else if(F.isLightProbe)for(let T=0;T<9;T++)i.probe[T].addScaledVector(F.sh.coefficients[T],k);else if(F.isDirectionalLight){let T=t.get(F);if(T.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let R=F.shadow,L=n.get(F);L.shadowBias=R.bias,L.shadowNormalBias=R.normalBias,L.shadowRadius=R.radius,L.shadowMapSize=R.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=C,i.directionalShadowMatrix[m]=F.shadow.matrix,M++}i.directional[m]=T,m++}else if(F.isSpotLight){let T=t.get(F);if(T.position.setFromMatrixPosition(F.matrixWorld),T.color.copy(G).multiplyScalar(k),T.distance=O,T.coneCos=Math.cos(F.angle),T.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),T.decay=F.decay,F.castShadow){let R=F.shadow,L=n.get(F);L.shadowBias=R.bias,L.shadowNormalBias=R.normalBias,L.shadowRadius=R.radius,L.shadowMapSize=R.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=C,i.spotShadowMatrix[y]=F.shadow.matrix,A++}i.spot[y]=T,y++}else if(F.isRectAreaLight){let T=t.get(F);T.color.copy(G).multiplyScalar(k),T.halfWidth.set(F.width*.5,0,0),T.halfHeight.set(0,F.height*.5,0),i.rectArea[g]=T,g++}else if(F.isPointLight){let T=t.get(F);if(T.color.copy(F.color).multiplyScalar(F.intensity),T.distance=F.distance,T.decay=F.decay,F.castShadow){let R=F.shadow,L=n.get(F);L.shadowBias=R.bias,L.shadowNormalBias=R.normalBias,L.shadowRadius=R.radius,L.shadowMapSize=R.mapSize,L.shadowCameraNear=R.camera.near,L.shadowCameraFar=R.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=C,i.pointShadowMatrix[x]=F.shadow.matrix,E++}i.point[x]=T,x++}else if(F.isHemisphereLight){let T=t.get(F);T.skyColor.copy(F.color).multiplyScalar(k),T.groundColor.copy(F.groundColor).multiplyScalar(k),i.hemi[p]=T,p++}}g>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let _=i.hash;(_.directionalLength!==m||_.pointLength!==x||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==M||_.numPointShadows!==E||_.numSpotShadows!==A)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotShadowMatrix.length=A,_.directionalLength=m,_.pointLength=x,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=M,_.numPointShadows=E,_.numSpotShadows=A,i.version=rg++)}function c(h,u){let d=0,f=0,m=0,x=0,y=0,g=u.matrixWorldInverse;for(let p=0,M=h.length;p<M;p++){let E=h[p];if(E.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(E.isSpotLight){let A=i.spot[m];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),m++}else if(E.isRectAreaLight){let A=i.rectArea[x];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),a.identity(),o.copy(E.matrixWorld),o.premultiply(g),a.extractRotation(o),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){let A=i.hemi[y];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(g),A.direction.normalize(),y++}}}return{setup:l,setupView:c,state:i}}function Hl(r,e){let t=new og(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(){t.setup(n)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ag(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Hl(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new Hl(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}var Kr=class extends nt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Cu,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};Kr.prototype.isMeshDepthMaterial=!0;var es=class extends nt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new v,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};es.prototype.isMeshDistanceMaterial=!0;var lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Gc(r,e,t){let n=new ai,i=new $,s=new $,o=new Le,a=[],l=[],c={},h=t.maxTextureSize,u={0:et,1:bs,2:Ms},d=new Gt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:cg,fragmentShader:lg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new it(m,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc,this.render=function(_,I,D){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||_.length===0)return;let F=r.getRenderTarget(),G=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Ci),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let C=0,T=_.length;C<T;C++){let R=_[C],L=R.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let B=L.getFrameExtents();if(i.multiply(B),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/B.x),i.x=s.x*B.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/B.y),i.y=s.y*B.y,L.mapSize.y=s.y)),L.map===null&&!L.isPointLightShadow&&this.type===Ri){let H={minFilter:Et,magFilter:Et,format:zt};L.map=new Qt(i.x,i.y,H),L.map.texture.name=R.name+".shadowMap",L.mapPass=new Qt(i.x,i.y,H),L.camera.updateProjectionMatrix()}if(L.map===null){let H={minFilter:xt,magFilter:xt,format:zt};L.map=new Qt(i.x,i.y,H),L.map.texture.name=R.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();let W=L.getViewportCount();for(let H=0;H<W;H++){let J=L.getViewport(H);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),O.viewport(o),L.updateMatrices(R,H),n=L.getFrustum(),A(I,D,L.camera,R,this.type)}!L.isPointLightShadow&&this.type===Ri&&g(L,D),L.needsUpdate=!1}y.needsUpdate=!1,r.setRenderTarget(F,G,k)};function g(_,I){let D=e.update(x);d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(I,null,D,d,x,null),f.uniforms.shadow_pass.value=_.mapPass.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(I,null,D,f,x,null)}function p(_,I,D){let F=_<<0|I<<1|D<<2,G=a[F];return G===void 0&&(G=new Kr({depthPacking:Iu,morphTargets:_,skinning:I}),a[F]=G),G}function M(_,I,D){let F=_<<0|I<<1|D<<2,G=l[F];return G===void 0&&(G=new es({morphTargets:_,skinning:I}),l[F]=G),G}function E(_,I,D,F,G,k,O){let C=null,T=p,R=_.customDepthMaterial;if(F.isPointLight===!0&&(T=M,R=_.customDistanceMaterial),R===void 0){let L=!1;D.morphTargets===!0&&(L=I.morphAttributes&&I.morphAttributes.position&&I.morphAttributes.position.length>0);let B=!1;_.isSkinnedMesh===!0&&(D.skinning===!0?B=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",_));let W=_.isInstancedMesh===!0;C=T(L,B,W)}else C=R;if(r.localClippingEnabled&&D.clipShadows===!0&&D.clippingPlanes.length!==0){let L=C.uuid,B=D.uuid,W=c[L];W===void 0&&(W={},c[L]=W);let H=W[B];H===void 0&&(H=C.clone(),W[B]=H),C=H}return C.visible=D.visible,C.wireframe=D.wireframe,O===Ri?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:u[D.side],C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(F.matrixWorld),C.nearDistance=G,C.farDistance=k),C}function A(_,I,D,F,G){if(_.visible===!1)return;if(_.layers.test(I.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&G===Ri)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld);let C=e.update(_),T=_.material;if(Array.isArray(T)){let R=C.groups;for(let L=0,B=R.length;L<B;L++){let W=R[L],H=T[W.materialIndex];if(H&&H.visible){let J=E(_,C,H,F,D.near,D.far,G);r.renderBufferDirect(D,null,C,J,_,W)}}}else if(T.visible){let R=E(_,C,T,F,D.near,D.far,G);r.renderBufferDirect(D,null,C,R,_,null)}}let O=_.children;for(let C=0,T=O.length;C<T;C++)A(O[C],I,D,F,G)}}function hg(r,e,t){let n=t.isWebGL2;function i(){let P=!1,ee=new Le,ie=null,xe=new Le(0,0,0,0);return{setMask:function(Z){ie!==Z&&!P&&(r.colorMask(Z,Z,Z,Z),ie=Z)},setLocked:function(Z){P=Z},setClear:function(Z,_e,De,Ye,bn){bn===!0&&(Z*=Ye,_e*=Ye,De*=Ye),ee.set(Z,_e,De,Ye),xe.equals(ee)===!1&&(r.clearColor(Z,_e,De,Ye),xe.copy(ee))},reset:function(){P=!1,ie=null,xe.set(-1,0,0,0)}}}function s(){let P=!1,ee=null,ie=null,xe=null;return{setTest:function(Z){Z?oe(2929):ne(2929)},setMask:function(Z){ee!==Z&&!P&&(r.depthMask(Z),ee=Z)},setFunc:function(Z){if(ie!==Z){if(Z)switch(Z){case _h:r.depthFunc(512);break;case wh:r.depthFunc(519);break;case bh:r.depthFunc(513);break;case ho:r.depthFunc(515);break;case Mh:r.depthFunc(514);break;case Sh:r.depthFunc(518);break;case Eh:r.depthFunc(516);break;case Th:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);ie=Z}},setLocked:function(Z){P=Z},setClear:function(Z){xe!==Z&&(r.clearDepth(Z),xe=Z)},reset:function(){P=!1,ee=null,ie=null,xe=null}}}function o(){let P=!1,ee=null,ie=null,xe=null,Z=null,_e=null,De=null,Ye=null,bn=null;return{setTest:function(qe){P||(qe?oe(2960):ne(2960))},setMask:function(qe){ee!==qe&&!P&&(r.stencilMask(qe),ee=qe)},setFunc:function(qe,qt,Ct){(ie!==qe||xe!==qt||Z!==Ct)&&(r.stencilFunc(qe,qt,Ct),ie=qe,xe=qt,Z=Ct)},setOp:function(qe,qt,Ct){(_e!==qe||De!==qt||Ye!==Ct)&&(r.stencilOp(qe,qt,Ct),_e=qe,De=qt,Ye=Ct)},setLocked:function(qe){P=qe},setClear:function(qe){bn!==qe&&(r.clearStencil(qe),bn=qe)},reset:function(){P=!1,ee=null,ie=null,xe=null,Z=null,_e=null,De=null,Ye=null,bn=null}}}let a=new i,l=new s,c=new o,h={},u=null,d={},f=null,m=!1,x=null,y=null,g=null,p=null,M=null,E=null,A=null,_=!1,I=null,D=null,F=null,G=null,k=null,O=r.getParameter(35661),C=!1,T=0,R=r.getParameter(7938);R.indexOf("WebGL")!==-1?(T=parseFloat(/^WebGL (\d)/.exec(R)[1]),C=T>=1):R.indexOf("OpenGL ES")!==-1&&(T=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),C=T>=2);let L=null,B={},W=new Le(0,0,r.canvas.width,r.canvas.height),H=new Le(0,0,r.canvas.width,r.canvas.height);function J(P,ee,ie){let xe=new Uint8Array(4),Z=r.createTexture();r.bindTexture(P,Z),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let _e=0;_e<ie;_e++)r.texImage2D(ee+_e,0,6408,1,1,0,6408,5121,xe);return Z}let j={};j[3553]=J(3553,3553,1),j[34067]=J(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),oe(2929),l.setFunc(ho),pe(!1),Y($a),oe(2884),Q(Ci);function oe(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function ne(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function U(P){P!==u&&(r.bindFramebuffer(36160,P),u=P)}function ve(P,ee){ee===null&&u!==null&&(ee=u),d[P]!==ee&&(r.bindFramebuffer(P,ee),d[P]=ee,n&&(P===36009&&(d[36160]=ee),P===36160&&(d[36009]=ee)))}function Se(P){return f!==P?(r.useProgram(P),f=P,!0):!1}let me={[Kn]:32774,[ch]:32778,[hh]:32779};if(n)me[el]=32775,me[tl]=32776;else{let P=e.get("EXT_blend_minmax");P!==null&&(me[el]=P.MIN_EXT,me[tl]=P.MAX_EXT)}let ce={[uh]:0,[dh]:1,[fh]:768,[gc]:770,[vh]:776,[xh]:774,[mh]:772,[ph]:769,[xc]:771,[yh]:775,[gh]:773};function Q(P,ee,ie,xe,Z,_e,De,Ye){if(P===Ci){m===!0&&(ne(3042),m=!1);return}if(m===!1&&(oe(3042),m=!0),P!==lh){if(P!==x||Ye!==_){if((y!==Kn||M!==Kn)&&(r.blendEquation(32774),y=Kn,M=Kn),Ye)switch(P){case Ii:r.blendFuncSeparate(1,771,1,771);break;case ja:r.blendFunc(1,1);break;case Qa:r.blendFuncSeparate(0,0,769,771);break;case Ka:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ii:r.blendFuncSeparate(770,771,1,771);break;case ja:r.blendFunc(770,1);break;case Qa:r.blendFunc(0,769);break;case Ka:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}g=null,p=null,E=null,A=null,x=P,_=Ye}return}Z=Z||ee,_e=_e||ie,De=De||xe,(ee!==y||Z!==M)&&(r.blendEquationSeparate(me[ee],me[Z]),y=ee,M=Z),(ie!==g||xe!==p||_e!==E||De!==A)&&(r.blendFuncSeparate(ce[ie],ce[xe],ce[_e],ce[De]),g=ie,p=xe,E=_e,A=De),x=P,_=null}function he(P,ee){P.side===Ms?ne(2884):oe(2884);let ie=P.side===et;ee&&(ie=!ie),pe(ie),P.blending===Ii&&P.transparent===!1?Q(Ci):Q(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let xe=P.stencilWrite;c.setTest(xe),xe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?oe(32926):ne(32926)}function pe(P){I!==P&&(P?r.frontFace(2304):r.frontFace(2305),I=P)}function Y(P){P!==sh?(oe(2884),P!==D&&(P===$a?r.cullFace(1029):P===oh?r.cullFace(1028):r.cullFace(1032))):ne(2884),D=P}function K(P){P!==F&&(C&&r.lineWidth(P),F=P)}function re(P,ee,ie){P?(oe(32823),(G!==ee||k!==ie)&&(r.polygonOffset(ee,ie),G=ee,k=ie)):ne(32823)}function fe(P){P?oe(3089):ne(3089)}function ae(P){P===void 0&&(P=33984+O-1),L!==P&&(r.activeTexture(P),L=P)}function S(P,ee){L===null&&ae();let ie=B[L];ie===void 0&&(ie={type:void 0,texture:void 0},B[L]=ie),(ie.type!==P||ie.texture!==ee)&&(r.bindTexture(P,ee||j[P]),ie.type=P,ie.texture=ee)}function b(){let P=B[L];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(P){W.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),W.copy(P))}function Pe(P){H.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),H.copy(P))}function we(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},L=null,B={},u=null,d={},f=null,m=!1,x=null,y=null,g=null,p=null,M=null,E=null,A=null,_=!1,I=null,D=null,F=null,G=null,k=null,W.set(0,0,r.canvas.width,r.canvas.height),H.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:oe,disable:ne,bindFramebuffer:ve,bindXRFramebuffer:U,useProgram:Se,setBlending:Q,setMaterial:he,setFlipSided:pe,setCullFace:Y,setLineWidth:K,setPolygonOffset:re,setScissorTest:fe,activeTexture:ae,bindTexture:S,unbindTexture:b,compressedTexImage2D:q,texImage2D:X,texImage3D:le,scissor:ue,viewport:Pe,reset:we}}function ug(r,e,t,n,i,s,o){let a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap,f,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,b){return m?new OffscreenCanvas(S,b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(S,b,q,X){let le=1;if((S.width>X||S.height>X)&&(le=X/Math.max(S.width,S.height)),le<1||b===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let ue=b?Tc:Math.floor,Pe=ue(le*S.width),we=ue(le*S.height);f===void 0&&(f=x(Pe,we));let P=q?x(Pe,we):f;return P.width=Pe,P.height=we,P.getContext("2d").drawImage(S,0,0,Pe,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Pe+"x"+we+")."),P}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function g(S){return po(S.width)&&po(S.height)}function p(S){return a?!1:S.wrapS!==Bt||S.wrapT!==Bt||S.minFilter!==xt&&S.minFilter!==Et}function M(S,b){return S.generateMipmaps&&b&&S.minFilter!==xt&&S.minFilter!==Et}function E(S,b,q,X){r.generateMipmap(S);let le=n.get(b);le.__maxMipLevel=Math.log2(Math.max(q,X))}function A(S,b,q){if(a===!1)return b;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let X=b;return b===6403&&(q===5126&&(X=33326),q===5131&&(X=33325),q===5121&&(X=33321)),b===6407&&(q===5126&&(X=34837),q===5131&&(X=34843),q===5121&&(X=32849)),b===6408&&(q===5126&&(X=34836),q===5131&&(X=34842),q===5121&&(X=32856)),(X===33325||X===33326||X===34842||X===34836)&&e.get("EXT_color_buffer_float"),X}function _(S){return S===xt||S===rl||S===sl?9728:9729}function I(S){let b=S.target;b.removeEventListener("dispose",I),F(b),b.isVideoTexture&&d.delete(b),o.memory.textures--}function D(S){let b=S.target;b.removeEventListener("dispose",D),G(b),o.memory.textures--}function F(S){let b=n.get(S);b.__webglInit!==void 0&&(r.deleteTexture(b.__webglTexture),n.remove(S))}function G(S){let b=S.texture,q=n.get(S),X=n.get(b);if(S){if(X.__webglTexture!==void 0&&r.deleteTexture(X.__webglTexture),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)r.deleteFramebuffer(q.__webglFramebuffer[le]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[le]);else r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer&&r.deleteRenderbuffer(q.__webglColorRenderbuffer),q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer);n.remove(b),n.remove(S)}}let k=0;function O(){k=0}function C(){let S=k;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),k+=1,S}function T(S,b){let q=n.get(S);if(S.isVideoTexture&&Y(S),S.version>0&&q.__version!==S.version){let X=S.image;if(X===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(q,S,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,q.__webglTexture)}function R(S,b){let q=n.get(S);if(S.version>0&&q.__version!==S.version){oe(q,S,b);return}t.activeTexture(33984+b),t.bindTexture(35866,q.__webglTexture)}function L(S,b){let q=n.get(S);if(S.version>0&&q.__version!==S.version){oe(q,S,b);return}t.activeTexture(33984+b),t.bindTexture(32879,q.__webglTexture)}function B(S,b){let q=n.get(S);if(S.version>0&&q.__version!==S.version){ne(q,S,b);return}t.activeTexture(33984+b),t.bindTexture(34067,q.__webglTexture)}let W={[uo]:10497,[Bt]:33071,[fo]:33648},H={[xt]:9728,[rl]:9984,[sl]:9986,[Et]:9729,[Nh]:9985,[Pa]:9987};function J(S,b,q){if(q?(r.texParameteri(S,10242,W[b.wrapS]),r.texParameteri(S,10243,W[b.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,W[b.wrapR]),r.texParameteri(S,10240,H[b.magFilter]),r.texParameteri(S,10241,H[b.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(b.wrapS!==Bt||b.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,_(b.magFilter)),r.texParameteri(S,10241,_(b.minFilter)),b.minFilter!==xt&&b.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let X=e.get("EXT_texture_filter_anisotropic");if(b.type===fn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Hr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(S,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function j(S,b){S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",I),S.__webglTexture=r.createTexture(),o.memory.textures++)}function oe(S,b,q){let X=3553;b.isDataTexture2DArray&&(X=35866),b.isDataTexture3D&&(X=32879),j(S,b),t.activeTexture(33984+q),t.bindTexture(X,S.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let le=p(b)&&g(b.image)===!1,ue=y(b.image,le,!1,h),Pe=g(ue)||a,we=s.convert(b.format),P=s.convert(b.type),ee=A(b.internalFormat,we,P);J(X,b,Pe);let ie,xe=b.mipmaps;if(b.isDepthTexture)ee=6402,a?b.type===fn?ee=36012:b.type===Gr?ee=33190:b.type===Ni?ee=35056:ee=33189:b.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ii&&ee===6402&&b.type!==Ur&&b.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ur,P=s.convert(b.type)),b.format===Hi&&ee===6402&&(ee=34041,b.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ni,P=s.convert(b.type))),t.texImage2D(3553,0,ee,ue.width,ue.height,0,we,P,null);else if(b.isDataTexture)if(xe.length>0&&Pe){for(let Z=0,_e=xe.length;Z<_e;Z++)ie=xe[Z],t.texImage2D(3553,Z,ee,ie.width,ie.height,0,we,P,ie.data);b.generateMipmaps=!1,S.__maxMipLevel=xe.length-1}else t.texImage2D(3553,0,ee,ue.width,ue.height,0,we,P,ue.data),S.__maxMipLevel=0;else if(b.isCompressedTexture){for(let Z=0,_e=xe.length;Z<_e;Z++)ie=xe[Z],b.format!==zt&&b.format!==Rn?we!==null?t.compressedTexImage2D(3553,Z,ee,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,Z,ee,ie.width,ie.height,0,we,P,ie.data);S.__maxMipLevel=xe.length-1}else if(b.isDataTexture2DArray)t.texImage3D(35866,0,ee,ue.width,ue.height,ue.depth,0,we,P,ue.data),S.__maxMipLevel=0;else if(b.isDataTexture3D)t.texImage3D(32879,0,ee,ue.width,ue.height,ue.depth,0,we,P,ue.data),S.__maxMipLevel=0;else if(xe.length>0&&Pe){for(let Z=0,_e=xe.length;Z<_e;Z++)ie=xe[Z],t.texImage2D(3553,Z,ee,we,P,ie);b.generateMipmaps=!1,S.__maxMipLevel=xe.length-1}else t.texImage2D(3553,0,ee,we,P,ue),S.__maxMipLevel=0;M(b,Pe)&&E(X,b,ue.width,ue.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function ne(S,b,q){if(b.image.length!==6)return;j(S,b),t.activeTexture(33984+q),t.bindTexture(34067,S.__webglTexture),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let X=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture),le=b.image[0]&&b.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!X&&!le?ue[Z]=y(b.image[Z],!1,!0,c):ue[Z]=le?b.image[Z].image:b.image[Z];let Pe=ue[0],we=g(Pe)||a,P=s.convert(b.format),ee=s.convert(b.type),ie=A(b.internalFormat,P,ee);J(34067,b,we);let xe;if(X){for(let Z=0;Z<6;Z++){xe=ue[Z].mipmaps;for(let _e=0;_e<xe.length;_e++){let De=xe[_e];b.format!==zt&&b.format!==Rn?P!==null?t.compressedTexImage2D(34069+Z,_e,ie,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+Z,_e,ie,De.width,De.height,0,P,ee,De.data)}}S.__maxMipLevel=xe.length-1}else{xe=b.mipmaps;for(let Z=0;Z<6;Z++)if(le){t.texImage2D(34069+Z,0,ie,ue[Z].width,ue[Z].height,0,P,ee,ue[Z].data);for(let _e=0;_e<xe.length;_e++){let Ye=xe[_e].image[Z].image;t.texImage2D(34069+Z,_e+1,ie,Ye.width,Ye.height,0,P,ee,Ye.data)}}else{t.texImage2D(34069+Z,0,ie,P,ee,ue[Z]);for(let _e=0;_e<xe.length;_e++){let De=xe[_e];t.texImage2D(34069+Z,_e+1,ie,P,ee,De.image[Z])}}S.__maxMipLevel=xe.length}M(b,we)&&E(34067,b,Pe.width,Pe.height),S.__version=b.version,b.onUpdate&&b.onUpdate(b)}function U(S,b,q,X){let le=b.texture,ue=s.convert(le.format),Pe=s.convert(le.type),we=A(le.internalFormat,ue,Pe);X===32879||X===35866?t.texImage3D(X,0,we,b.width,b.height,b.depth,0,ue,Pe,null):t.texImage2D(X,0,we,b.width,b.height,0,ue,Pe,null),t.bindFramebuffer(36160,S),r.framebufferTexture2D(36160,q,X,n.get(le).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(S,b,q){if(r.bindRenderbuffer(36161,S),b.depthBuffer&&!b.stencilBuffer){let X=33189;if(q){let le=b.depthTexture;le&&le.isDepthTexture&&(le.type===fn?X=36012:le.type===Gr&&(X=33190));let ue=pe(b);r.renderbufferStorageMultisample(36161,ue,X,b.width,b.height)}else r.renderbufferStorage(36161,X,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(b.depthBuffer&&b.stencilBuffer){if(q){let X=pe(b);r.renderbufferStorageMultisample(36161,X,35056,b.width,b.height)}else r.renderbufferStorage(36161,34041,b.width,b.height);r.framebufferRenderbuffer(36160,33306,36161,S)}else{let X=b.texture,le=s.convert(X.format),ue=s.convert(X.type),Pe=A(X.internalFormat,le,ue);if(q){let we=pe(b);r.renderbufferStorageMultisample(36161,we,Pe,b.width,b.height)}else r.renderbufferStorage(36161,Pe,b.width,b.height)}r.bindRenderbuffer(36161,null)}function Se(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),T(b.depthTexture,0);let X=n.get(b.depthTexture).__webglTexture;if(b.depthTexture.format===ii)r.framebufferTexture2D(36160,36096,3553,X,0);else if(b.depthTexture.format===Hi)r.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function me(S){let b=n.get(S),q=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,S)}else if(q){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]=r.createRenderbuffer(),ve(b.__webglDepthbuffer[X],S,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),ve(b.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function ce(S){let b=S.texture,q=n.get(S),X=n.get(b);S.addEventListener("dispose",D),X.__webglTexture=r.createTexture(),X.__version=b.version,o.memory.textures++;let le=S.isWebGLCubeRenderTarget===!0,ue=S.isWebGLMultisampleRenderTarget===!0,Pe=b.isDataTexture3D||b.isDataTexture2DArray,we=g(S)||a;if(a&&b.format===Rn&&(b.type===fn||b.type===Hr)&&(b.format=zt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),le){q.__webglFramebuffer=[];for(let P=0;P<6;P++)q.__webglFramebuffer[P]=r.createFramebuffer()}else if(q.__webglFramebuffer=r.createFramebuffer(),ue)if(a){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,q.__webglColorRenderbuffer);let P=s.convert(b.format),ee=s.convert(b.type),ie=A(b.internalFormat,P,ee),xe=pe(S);r.renderbufferStorageMultisample(36161,xe,ie,S.width,S.height),t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,q.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),S.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(q.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(le){t.bindTexture(34067,X.__webglTexture),J(34067,b,we);for(let P=0;P<6;P++)U(q.__webglFramebuffer[P],S,36064,34069+P);M(b,we)&&E(34067,b,S.width,S.height),t.bindTexture(34067,null)}else{let P=3553;Pe&&(a?P=b.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(P,X.__webglTexture),J(P,b,we),U(q.__webglFramebuffer,S,36064,P),M(b,we)&&E(3553,b,S.width,S.height),t.bindTexture(3553,null)}S.depthBuffer&&me(S)}function Q(S){let b=S.texture,q=g(S)||a;if(M(b,q)){let X=S.isWebGLCubeRenderTarget?34067:3553,le=n.get(b).__webglTexture;t.bindTexture(X,le),E(X,b,S.width,S.height),t.bindTexture(X,null)}}function he(S){if(S.isWebGLMultisampleRenderTarget)if(a){let b=S.width,q=S.height,X=16384;S.depthBuffer&&(X|=256),S.stencilBuffer&&(X|=1024);let le=n.get(S);t.bindFramebuffer(36008,le.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,le.__webglFramebuffer),r.blitFramebuffer(0,0,b,q,0,0,b,q,X,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,le.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function pe(S){return a&&S.isWebGLMultisampleRenderTarget?Math.min(u,S.samples):0}function Y(S){let b=o.render.frame;d.get(S)!==b&&(d.set(S,b),S.update())}let K=!1,re=!1;function fe(S,b){S&&S.isWebGLRenderTarget&&(K===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),K=!0),S=S.texture),T(S,b)}function ae(S,b){S&&S.isWebGLCubeRenderTarget&&(re===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),re=!0),S=S.texture),B(S,b)}this.allocateTextureUnit=C,this.resetTextureUnits=O,this.setTexture2D=T,this.setTexture2DArray=R,this.setTexture3D=L,this.setTextureCube=B,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=he,this.safeSetTexture2D=fe,this.safeSetTextureCube=ae}function dg(r,e,t){let n=t.isWebGL2;function i(s){let o;if(s===Ca)return 5121;if(s===Gh)return 32819;if(s===Oh)return 32820;if(s===Uh)return 33635;if(s===Fh)return 5120;if(s===Bh)return 5122;if(s===Ur)return 5123;if(s===zh)return 5124;if(s===Gr)return 5125;if(s===fn)return 5126;if(s===Hr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Hh)return 6406;if(s===Rn)return 6407;if(s===zt)return 6408;if(s===kh)return 6409;if(s===Vh)return 6410;if(s===ii)return 6402;if(s===Hi)return 34041;if(s===Wh)return 6403;if(s===qh)return 36244;if(s===Xh)return 33319;if(s===Yh)return 33320;if(s===Zh)return 36248;if(s===Jh)return 36249;if(s===ol||s===al||s===ll||s===cl)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ol)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===al)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ll)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hl||s===ul||s===dl||s===fl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===hl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$h)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===pl||s===ml)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===pl)return o.COMPRESSED_RGB8_ETC2;if(s===ml)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===jh||s===Qh||s===Kh||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===ou||s===au||s===lu||s===cu||s===hu||s===du||s===fu||s===pu||s===mu||s===gu||s===xu||s===yu||s===vu||s===_u||s===wu||s===bu||s===Mu||s===Su||s===Eu)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===uu)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Ni)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}var ts=class extends ot{constructor(e=[]){super(),this.cameras=e}};ts.prototype.isArrayCamera=!0;var tt=class extends Fe{constructor(){super(),this.type="Group"}};tt.prototype.isGroup=!0;var fg={type:"move"},zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fg))),c&&e.hand){o=!0;for(let x of e.hand.values()){let y=t.getJointPose(x,n);if(c.joints[x.jointName]===void 0){let p=new tt;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[x.jointName]=p,c.add(p)}let g=c.joints[x.jointName];y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=y.radius),g.visible=y!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}},yo=class extends en{constructor(e,t){super();let n=this,i=e.state,s=null,o=1,a=null,l="local-floor",c=null,h=[],u=new Map,d=new ot;d.layers.enable(1),d.viewport=new Le;let f=new ot;f.layers.enable(2),f.viewport=new Le;let m=[d,f],x=new ts;x.layers.enable(1),x.layers.enable(2);let y=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let C=h[O];return C===void 0&&(C=new zi,h[O]=C),C.getTargetRaySpace()},this.getControllerGrip=function(O){let C=h[O];return C===void 0&&(C=new zi,h[O]=C),C.getGripSpace()},this.getHand=function(O){let C=h[O];return C===void 0&&(C=new zi,h[O]=C),C.getHandSpace()};function p(O){let C=u.get(O.inputSource);C&&C.dispatchEvent({type:O.type,data:O.inputSource})}function M(){u.forEach(function(O,C){O.disconnect(C)}),u.clear(),y=null,g=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){l=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){s.addEventListener("select",p),s.addEventListener("selectstart",p),s.addEventListener("selectend",p),s.addEventListener("squeeze",p),s.addEventListener("squeezestart",p),s.addEventListener("squeezeend",p),s.addEventListener("end",M),s.addEventListener("inputsourceschange",E);let C=t.getContextAttributes();C.xrCompatible!==!0&&await t.makeXRCompatible();let T={antialias:C.antialias,alpha:C.alpha,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:o},R=new XRWebGLLayer(s,t,T);s.updateRenderState({baseLayer:R}),a=await s.requestReferenceSpace(l),k.setContext(s),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function E(O){let C=s.inputSources;for(let T=0;T<h.length;T++)u.set(C[T],h[T]);for(let T=0;T<O.removed.length;T++){let R=O.removed[T],L=u.get(R);L&&(L.dispatchEvent({type:"disconnected",data:R}),u.delete(R))}for(let T=0;T<O.added.length;T++){let R=O.added[T],L=u.get(R);L&&L.dispatchEvent({type:"connected",data:R})}}let A=new v,_=new v;function I(O,C,T){A.setFromMatrixPosition(C.matrixWorld),_.setFromMatrixPosition(T.matrixWorld);let R=A.distanceTo(_),L=C.projectionMatrix.elements,B=T.projectionMatrix.elements,W=L[14]/(L[10]-1),H=L[14]/(L[10]+1),J=(L[9]+1)/L[5],j=(L[9]-1)/L[5],oe=(L[8]-1)/L[0],ne=(B[8]+1)/B[0],U=W*oe,ve=W*ne,Se=R/(-oe+ne),me=Se*-oe;C.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(me),O.translateZ(Se),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();let ce=W+Se,Q=H+Se,he=U-me,pe=ve+(R-me),Y=J*H/Q*ce,K=j*H/Q*ce;O.projectionMatrix.makePerspective(he,pe,Y,K,ce,Q)}function D(O,C){C===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(C.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.getCamera=function(O){x.near=f.near=d.near=O.near,x.far=f.far=d.far=O.far,(y!==x.near||g!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,g=x.far);let C=O.parent,T=x.cameras;D(x,C);for(let L=0;L<T.length;L++)D(T[L],C);O.matrixWorld.copy(x.matrixWorld),O.matrix.copy(x.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);let R=O.children;for(let L=0,B=R.length;L<B;L++)R[L].updateMatrixWorld(!0);return T.length===2?I(x,d,f):x.projectionMatrix.copy(d.projectionMatrix),x};let F=null;function G(O,C){if(c=C.getViewerPose(a),c!==null){let R=c.views,L=s.renderState.baseLayer;i.bindXRFramebuffer(L.framebuffer);let B=!1;R.length!==x.cameras.length&&(x.cameras.length=0,B=!0);for(let W=0;W<R.length;W++){let H=R[W],J=L.getViewport(H),j=m[W];j.matrix.fromArray(H.transform.matrix),j.projectionMatrix.fromArray(H.projectionMatrix),j.viewport.set(J.x,J.y,J.width,J.height),W===0&&x.matrix.copy(j.matrix),B===!0&&x.cameras.push(j)}}let T=s.inputSources;for(let R=0;R<h.length;R++){let L=h[R],B=T[R];L.update(B,C,a)}F&&F(O,C)}let k=new Pc;k.setAnimationLoop(G),this.setAnimationLoop=function(O){F=O},this.dispose=function(){}}};function pg(r){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function t(g,p,M,E){p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),l(g,p)):p.isMeshToonMaterial?(n(g,p),h(g,p)):p.isMeshPhongMaterial?(n(g,p),c(g,p)):p.isMeshStandardMaterial?(n(g,p),p.isMeshPhysicalMaterial?d(g,p):u(g,p)):p.isMeshMatcapMaterial?(n(g,p),f(g,p)):p.isMeshDepthMaterial?(n(g,p),m(g,p)):p.isMeshDistanceMaterial?(n(g,p),x(g,p)):p.isMeshNormalMaterial?(n(g,p),y(g,p)):p.isLineBasicMaterial?(i(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?o(g,p,M,E):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);let M=r.get(p).envMap;if(M){g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;let _=r.get(M).__maxMipLevel;_!==void 0&&(g.maxMipLevel.value=_)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let E;p.map?E=p.map:p.specularMap?E=p.specularMap:p.displacementMap?E=p.displacementMap:p.normalMap?E=p.normalMap:p.bumpMap?E=p.bumpMap:p.roughnessMap?E=p.roughnessMap:p.metalnessMap?E=p.metalnessMap:p.alphaMap?E=p.alphaMap:p.emissiveMap?E=p.emissiveMap:p.clearcoatMap?E=p.clearcoatMap:p.clearcoatNormalMap?E=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(E=p.clearcoatRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix));let A;p.aoMap?A=p.aoMap:p.lightMap&&(A=p.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uv2Transform.value.copy(A.matrix))}function i(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let A;p.map?A=p.map:p.alphaMap&&(A=p.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function l(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===et&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===et&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===et&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===et&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===et&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===et&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),r.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p){u(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===et&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===et&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===et&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function x(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function y(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===et&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===et&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function mg(){let r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return r.style.display="block",r}function Be(r){r=r||{};let e=r.canvas!==void 0?r.canvas:mg(),t=r.context!==void 0?r.context:null,n=r.alpha!==void 0?r.alpha:!1,i=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,o=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,u=null,d=null,f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=gi,this.physicallyCorrectLights=!1,this.toneMapping=Di,this.toneMappingExposure=1;let x=this,y=!1,g=0,p=0,M=null,E=-1,A=null,_=new Le,I=new Le,D=null,F=e.width,G=e.height,k=1,O=null,C=null,T=new Le(0,0,F,G),R=new Le(0,0,F,G),L=!1,B=new ai,W=!1,H=!1,J=new ge,j=new v,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return M===null?k:1}let U=t;function ve(w,z){for(let N=0;N<w.length;N++){let V=w[N],se=e.getContext(V,z);if(se!==null)return se}return null}try{let w={alpha:n,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",De,!1),U===null){let z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),U=ve(z,w),U===null)throw ve(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Se,me,ce,Q,he,pe,Y,K,re,fe,ae,S,b,q,X,le,ue,Pe,we,P,ee,ie;function xe(){Se=new Gp(U),me=new Fp(U,Se,r),Se.init(me),ee=new dg(U,Se,me),ce=new hg(U,Se,me),Q=new Hp(U),he=new Qm,pe=new ug(U,Se,ce,he,me,ee,Q),Y=new zp(x),K=new cd(U,me),ie=new Dp(U,Se,K,me),re=new Op(U,K,Q,ie),fe=new qp(U,re,K,Q),Pe=new Wp(U),X=new Bp(he),ae=new jm(x,Y,Se,me,ie,X),S=new pg(he),b=new tg(he),q=new ag(Se,me),ue=new Ip(x,Y,ce,fe,a),le=new Gc(x,fe,me),we=new Np(U,Se,Q,me),P=new Up(U,Se,Q,me),Q.programs=ae.programs,x.capabilities=me,x.extensions=Se,x.properties=he,x.renderLists=b,x.shadowMap=le,x.state=ce,x.info=Q}xe();let Z=new yo(x,U);this.xr=Z,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(F,G,!1))},this.getSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),w=new $),w.set(F,G)},this.setSize=function(w,z,N){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,G=z,e.width=Math.floor(w*k),e.height=Math.floor(z*k),N!==!1&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),w=new $),w.set(F*k,G*k).floor()},this.setDrawingBufferSize=function(w,z,N){F=w,G=z,k=N,e.width=Math.floor(w*N),e.height=Math.floor(z*N),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),w=new Le),w.copy(_)},this.getViewport=function(w){return w.copy(T)},this.setViewport=function(w,z,N,V){w.isVector4?T.set(w.x,w.y,w.z,w.w):T.set(w,z,N,V),ce.viewport(_.copy(T).multiplyScalar(k).floor())},this.getScissor=function(w){return w.copy(R)},this.setScissor=function(w,z,N,V){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,z,N,V),ce.scissor(I.copy(R).multiplyScalar(k).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(w){ce.setScissorTest(L=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){C=w},this.getClearColor=function(w){return w===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),w=new de),w.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(w,z,N){let V=0;(w===void 0||w)&&(V|=16384),(z===void 0||z)&&(V|=256),(N===void 0||N)&&(V|=1024),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",De,!1),b.dispose(),q.dispose(),he.dispose(),Y.dispose(),fe.dispose(),ie.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Va),Z.removeEventListener("sessionend",Wa),Mn.stop()};function _e(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let w=Q.autoReset,z=le.enabled,N=le.autoUpdate,V=le.needsUpdate,se=le.type;xe(),Q.autoReset=w,le.enabled=z,le.autoUpdate=N,le.needsUpdate=V,le.type=se}function Ye(w){let z=w.target;z.removeEventListener("dispose",Ye),bn(z)}function bn(w){qe(w),he.remove(w)}function qe(w){let z=he.get(w).programs;z!==void 0&&z.forEach(function(N){ae.releaseProgram(N)})}function qt(w,z){w.render(function(N){x.renderBufferImmediate(N,z)})}this.renderBufferImmediate=function(w,z){ie.initAttributes();let N=he.get(w);w.hasPositions&&!N.position&&(N.position=U.createBuffer()),w.hasNormals&&!N.normal&&(N.normal=U.createBuffer()),w.hasUvs&&!N.uv&&(N.uv=U.createBuffer()),w.hasColors&&!N.color&&(N.color=U.createBuffer());let V=z.getAttributes();w.hasPositions&&(U.bindBuffer(34962,N.position),U.bufferData(34962,w.positionArray,35048),ie.enableAttribute(V.position),U.vertexAttribPointer(V.position,3,5126,!1,0,0)),w.hasNormals&&(U.bindBuffer(34962,N.normal),U.bufferData(34962,w.normalArray,35048),ie.enableAttribute(V.normal),U.vertexAttribPointer(V.normal,3,5126,!1,0,0)),w.hasUvs&&(U.bindBuffer(34962,N.uv),U.bufferData(34962,w.uvArray,35048),ie.enableAttribute(V.uv),U.vertexAttribPointer(V.uv,2,5126,!1,0,0)),w.hasColors&&(U.bindBuffer(34962,N.color),U.bufferData(34962,w.colorArray,35048),ie.enableAttribute(V.color),U.vertexAttribPointer(V.color,3,5126,!1,0,0)),ie.disableUnusedAttributes(),U.drawArrays(4,0,w.count),w.count=0},this.renderBufferDirect=function(w,z,N,V,se,Re){z===null&&(z=oe);let be=se.isMesh&&se.matrixWorld.determinant()<0,Te=Ja(w,z,V,se);ce.setMaterial(V,be);let Oe=N.index,Ee=N.attributes.position;if(Oe===null){if(Ee===void 0||Ee.count===0)return}else if(Oe.count===0)return;let Ce=1;V.wireframe===!0&&(Oe=re.getWireframeAttribute(N),Ce=2),(V.morphTargets||V.morphNormals)&&Pe.update(se,N,V,Te),ie.setup(se,V,Te,N,Oe);let Me,Ne=we;Oe!==null&&(Me=K.get(Oe),Ne=P,Ne.setIndex(Me));let Ot=Oe!==null?Oe.count:Ee.count,pt=N.drawRange.start*Ce,Sn=N.drawRange.count*Ce,$e=Re!==null?Re.start*Ce:0,En=Re!==null?Re.count*Ce:1/0,Ze=Math.max(pt,$e),Ps=Math.min(Ot,pt+Sn,$e+En)-1,vt=Math.max(0,Ps-Ze+1);if(vt!==0){if(se.isMesh)V.wireframe===!0?(ce.setLineWidth(V.wireframeLinewidth*ne()),Ne.setMode(1)):Ne.setMode(4);else if(se.isLine){let Xt=V.linewidth;Xt===void 0&&(Xt=1),ce.setLineWidth(Xt*ne()),se.isLineSegments?Ne.setMode(1):se.isLineLoop?Ne.setMode(2):Ne.setMode(3)}else se.isPoints?Ne.setMode(0):se.isSprite&&Ne.setMode(4);if(se.isInstancedMesh)Ne.renderInstances(Ze,vt,se.count);else if(N.isInstancedBufferGeometry){let Xt=Math.min(N.instanceCount,N._maxInstanceCount);Ne.renderInstances(Ze,vt,Xt)}else Ne.render(Ze,vt)}},this.compile=function(w,z){d=q.get(w),d.init(),w.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(),w.traverse(function(N){let V=N.material;if(V)if(Array.isArray(V))for(let se=0;se<V.length;se++){let Re=V[se];Rs(Re,w,N)}else Rs(V,w,N)})};let Ct=null;function th(w){Ct&&Ct(w)}function Va(){Mn.stop()}function Wa(){Mn.start()}let Mn=new Pc;Mn.setAnimationLoop(th),typeof window<"u"&&Mn.setContext(window),this.setAnimationLoop=function(w){Ct=w,Z.setAnimationLoop(w),w===null?Mn.stop():Mn.start()},Z.addEventListener("sessionstart",Va),Z.addEventListener("sessionend",Wa),this.render=function(w,z){let N,V;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),N=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),V=arguments[3]),z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(z=Z.getCamera(z)),w.isScene===!0&&w.onBeforeRender(x,w,z,N||M),d=q.get(w,m.length),d.init(),m.push(d),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),B.setFromProjectionMatrix(J),H=this.localClippingEnabled,W=X.init(this.clippingPlanes,H,z),u=b.get(w,f.length),u.init(),f.push(u),qa(w,z,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(O,C),W===!0&&X.beginShadows();let se=d.state.shadowsArray;le.render(se,w,z),d.setupLights(),d.setupLightsView(z),W===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),N!==void 0&&this.setRenderTarget(N),ue.render(u,w,z,V);let Re=u.opaque,be=u.transparent;Re.length>0&&Xa(Re,w,z),be.length>0&&Xa(be,w,z),M!==null&&(pe.updateRenderTargetMipmap(M),pe.updateMultisampleRenderTarget(M)),w.isScene===!0&&w.onAfterRender(x,w,z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1),ie.resetDefaultState(),E=-1,A=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function qa(w,z,N,V){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)N=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||B.intersectsSprite(w)){V&&j.setFromMatrixPosition(w.matrixWorld).applyMatrix4(J);let be=fe.update(w),Te=w.material;Te.visible&&u.push(w,be,Te,N,j.z,null)}}else if(w.isImmediateRenderObject)V&&j.setFromMatrixPosition(w.matrixWorld).applyMatrix4(J),u.push(w,null,w.material,N,j.z,null);else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Q.render.frame&&(w.skeleton.update(),w.skeleton.frame=Q.render.frame),!w.frustumCulled||B.intersectsObject(w))){V&&j.setFromMatrixPosition(w.matrixWorld).applyMatrix4(J);let be=fe.update(w),Te=w.material;if(Array.isArray(Te)){let Oe=be.groups;for(let Ee=0,Ce=Oe.length;Ee<Ce;Ee++){let Me=Oe[Ee],Ne=Te[Me.materialIndex];Ne&&Ne.visible&&u.push(w,be,Ne,N,j.z,Me)}}else Te.visible&&u.push(w,be,Te,N,j.z,null)}}let Re=w.children;for(let be=0,Te=Re.length;be<Te;be++)qa(Re[be],z,N,V)}function Xa(w,z,N){let V=z.isScene===!0?z.overrideMaterial:null;for(let se=0,Re=w.length;se<Re;se++){let be=w[se],Te=be.object,Oe=be.geometry,Ee=V===null?be.material:V,Ce=be.group;if(N.isArrayCamera){let Me=N.cameras;for(let Ne=0,Ot=Me.length;Ne<Ot;Ne++){let pt=Me[Ne];Te.layers.test(pt.layers)&&(ce.viewport(_.copy(pt.viewport)),d.setupLightsView(pt),Ya(Te,z,pt,Oe,Ee,Ce))}}else Ya(Te,z,N,Oe,Ee,Ce)}}function Ya(w,z,N,V,se,Re){if(w.onBeforeRender(x,z,N,V,se,Re),w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),w.isImmediateRenderObject){let be=Ja(N,z,se,w);ce.setMaterial(se),ie.reset(),qt(w,be)}else x.renderBufferDirect(N,z,V,se,w,Re);w.onAfterRender(x,z,N,V,se,Re)}function Rs(w,z,N){z.isScene!==!0&&(z=oe);let V=he.get(w),se=d.state.lights,Re=d.state.shadowsArray,be=se.state.version,Te=ae.getParameters(w,se.state,Re,z,N),Oe=ae.getProgramCacheKey(Te),Ee=V.programs;V.environment=w.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=Y.get(w.envMap||V.environment),Ee===void 0&&(w.addEventListener("dispose",Ye),Ee=new Map,V.programs=Ee);let Ce=Ee.get(Oe);if(Ce!==void 0){if(V.currentProgram===Ce&&V.lightsStateVersion===be)return Za(w,Te),Ce}else Te.uniforms=ae.getUniforms(w),w.onBuild(Te,x),w.onBeforeCompile(Te,x),Ce=ae.acquireProgram(Te,Oe),Ee.set(Oe,Ce),V.uniforms=Te.uniforms;let Me=V.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=X.uniform),Za(w,Te),V.needsLights=ih(w),V.lightsStateVersion=be,V.needsLights&&(Me.ambientLightColor.value=se.state.ambient,Me.lightProbe.value=se.state.probe,Me.directionalLights.value=se.state.directional,Me.directionalLightShadows.value=se.state.directionalShadow,Me.spotLights.value=se.state.spot,Me.spotLightShadows.value=se.state.spotShadow,Me.rectAreaLights.value=se.state.rectArea,Me.ltc_1.value=se.state.rectAreaLTC1,Me.ltc_2.value=se.state.rectAreaLTC2,Me.pointLights.value=se.state.point,Me.pointLightShadows.value=se.state.pointShadow,Me.hemisphereLights.value=se.state.hemi,Me.directionalShadowMap.value=se.state.directionalShadowMap,Me.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Me.spotShadowMap.value=se.state.spotShadowMap,Me.spotShadowMatrix.value=se.state.spotShadowMatrix,Me.pointShadowMap.value=se.state.pointShadowMap,Me.pointShadowMatrix.value=se.state.pointShadowMatrix);let Ne=Ce.getUniforms(),Ot=pn.seqWithValue(Ne.seq,Me);return V.currentProgram=Ce,V.uniformsList=Ot,Ce}function Za(w,z){let N=he.get(w);N.outputEncoding=z.outputEncoding,N.instancing=z.instancing,N.numClippingPlanes=z.numClippingPlanes,N.numIntersection=z.numClipIntersection,N.vertexAlphas=z.vertexAlphas}function Ja(w,z,N,V){z.isScene!==!0&&(z=oe),pe.resetTextureUnits();let se=z.fog,Re=N.isMeshStandardMaterial?z.environment:null,be=M===null?x.outputEncoding:M.texture.encoding,Te=Y.get(N.envMap||Re),Oe=N.vertexColors===!0&&V.geometry&&V.geometry.attributes.color&&V.geometry.attributes.color.itemSize===4,Ee=he.get(N),Ce=d.state.lights;if(W===!0&&(H===!0||w!==A)){let Ze=w===A&&N.id===E;X.setState(N,w,Ze)}let Me=!1;N.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ce.state.version||Ee.outputEncoding!==be||V.isInstancedMesh&&Ee.instancing===!1||!V.isInstancedMesh&&Ee.instancing===!0||Ee.envMap!==Te||N.fog&&Ee.fog!==se||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==X.numPlanes||Ee.numIntersection!==X.numIntersection)||Ee.vertexAlphas!==Oe)&&(Me=!0):(Me=!0,Ee.__version=N.version);let Ne=Ee.currentProgram;Me===!0&&(Ne=Rs(N,z,V));let Ot=!1,pt=!1,Sn=!1,$e=Ne.getUniforms(),En=Ee.uniforms;if(ce.useProgram(Ne.program)&&(Ot=!0,pt=!0,Sn=!0),N.id!==E&&(E=N.id,pt=!0),Ot||A!==w){if($e.setValue(U,"projectionMatrix",w.projectionMatrix),me.logarithmicDepthBuffer&&$e.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),A!==w&&(A=w,pt=!0,Sn=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){let Ze=$e.map.cameraPosition;Ze!==void 0&&Ze.setValue(U,j.setFromMatrixPosition(w.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&$e.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||N.skinning)&&$e.setValue(U,"viewMatrix",w.matrixWorldInverse)}if(N.skinning){$e.setOptional(U,V,"bindMatrix"),$e.setOptional(U,V,"bindMatrixInverse");let Ze=V.skeleton;if(Ze){let Ps=Ze.bones;if(me.floatVertexTextures){if(Ze.boneTexture===null){let vt=Math.sqrt(Ps.length*4);vt=Ec(vt),vt=Math.max(vt,4);let Xt=new Float32Array(vt*vt*4);Xt.set(Ze.boneMatrices);let rh=new $r(Xt,vt,vt,zt,fn);Ze.boneMatrices=Xt,Ze.boneTexture=rh,Ze.boneTextureSize=vt}$e.setValue(U,"boneTexture",Ze.boneTexture,pe),$e.setValue(U,"boneTextureSize",Ze.boneTextureSize)}else $e.setOptional(U,Ze,"boneMatrices")}}return(pt||Ee.receiveShadow!==V.receiveShadow)&&(Ee.receiveShadow=V.receiveShadow,$e.setValue(U,"receiveShadow",V.receiveShadow)),pt&&($e.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&nh(En,Sn),se&&N.fog&&S.refreshFogUniforms(En,se),S.refreshMaterialUniforms(En,N,k,G),pn.upload(U,Ee.uniformsList,En,pe)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(pn.upload(U,Ee.uniformsList,En,pe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&$e.setValue(U,"center",V.center),$e.setValue(U,"modelViewMatrix",V.modelViewMatrix),$e.setValue(U,"normalMatrix",V.normalMatrix),$e.setValue(U,"modelMatrix",V.matrixWorld),Ne}function nh(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function ih(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return M},this.setRenderTarget=function(w,z=0,N=0){M=w,g=z,p=N,w&&he.get(w).__webglFramebuffer===void 0&&pe.setupRenderTarget(w);let V=null,se=!1,Re=!1;if(w){let be=w.texture;(be.isDataTexture3D||be.isDataTexture2DArray)&&(Re=!0);let Te=he.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(V=Te[z],se=!0):w.isWebGLMultisampleRenderTarget?V=he.get(w).__webglMultisampledFramebuffer:V=Te,_.copy(w.viewport),I.copy(w.scissor),D=w.scissorTest}else _.copy(T).multiplyScalar(k).floor(),I.copy(R).multiplyScalar(k).floor(),D=L;if(ce.bindFramebuffer(36160,V),ce.viewport(_),ce.scissor(I),ce.setScissorTest(D),se){let be=he.get(w.texture);U.framebufferTexture2D(36160,36064,34069+z,be.__webglTexture,N)}else if(Re){let be=he.get(w.texture),Te=z||0;U.framebufferTextureLayer(36160,36064,be.__webglTexture,N||0,Te)}},this.readRenderTargetPixels=function(w,z,N,V,se,Re,be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=he.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){ce.bindFramebuffer(36160,Te);try{let Oe=w.texture,Ee=Oe.format,Ce=Oe.type;if(Ee!==zt&&ee.convert(Ee)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Me=Ce===Hr&&(Se.has("EXT_color_buffer_half_float")||me.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ce!==Ca&&ee.convert(Ce)!==U.getParameter(35738)&&!(Ce===fn&&(me.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Me){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U.checkFramebufferStatus(36160)===36053?z>=0&&z<=w.width-V&&N>=0&&N<=w.height-se&&U.readPixels(z,N,V,se,ee.convert(Ee),ee.convert(Ce),Re):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Oe=M!==null?he.get(M).__webglFramebuffer:null;ce.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(w,z,N=0){let V=Math.pow(2,-N),se=Math.floor(z.image.width*V),Re=Math.floor(z.image.height*V),be=ee.convert(z.format);pe.setTexture2D(z,0),U.copyTexImage2D(3553,N,be,w.x,w.y,se,Re,0),ce.unbindTexture()},this.copyTextureToTexture=function(w,z,N,V=0){let se=z.image.width,Re=z.image.height,be=ee.convert(N.format),Te=ee.convert(N.type);pe.setTexture2D(N,0),U.pixelStorei(37440,N.flipY),U.pixelStorei(37441,N.premultiplyAlpha),U.pixelStorei(3317,N.unpackAlignment),z.isDataTexture?U.texSubImage2D(3553,V,w.x,w.y,se,Re,be,Te,z.image.data):z.isCompressedTexture?U.compressedTexSubImage2D(3553,V,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,be,z.mipmaps[0].data):U.texSubImage2D(3553,V,w.x,w.y,be,Te,z.image),V===0&&N.generateMipmaps&&U.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(w,z,N,V,se=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Re,height:be,data:Te}=N.image,Oe=ee.convert(V.format),Ee=ee.convert(V.type),Ce;if(V.isDataTexture3D)pe.setTexture3D(V,0),Ce=32879;else if(V.isDataTexture2DArray)pe.setTexture2DArray(V,0),Ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,V.flipY),U.pixelStorei(37441,V.premultiplyAlpha),U.pixelStorei(3317,V.unpackAlignment);let Me=U.getParameter(3314),Ne=U.getParameter(32878),Ot=U.getParameter(3316),pt=U.getParameter(3315),Sn=U.getParameter(32877);U.pixelStorei(3314,Re),U.pixelStorei(32878,be),U.pixelStorei(3316,w.min.x),U.pixelStorei(3315,w.min.y),U.pixelStorei(32877,w.min.z),U.texSubImage3D(Ce,se,z.x,z.y,z.z,w.max.x-w.min.x+1,w.max.y-w.min.y+1,w.max.z-w.min.z+1,Oe,Ee,Te),U.pixelStorei(3314,Me),U.pixelStorei(32878,Ne),U.pixelStorei(3316,Ot),U.pixelStorei(3315,pt),U.pixelStorei(32877,Sn),se===0&&V.generateMipmaps&&U.generateMipmap(Ce),ce.unbindTexture()},this.initTexture=function(w){pe.setTexture2D(w,0),ce.unbindTexture()},this.resetState=function(){g=0,p=0,M=null,ce.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var vo=class extends Be{};vo.prototype.isWebGL1Renderer=!0;var _o=class r{constructor(e,t=25e-5){this.name="",this.color=new de(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};_o.prototype.isFogExp2=!0;var wo=class r{constructor(e,t=1,n=1e3){this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};wo.prototype.isFog=!0;var li=class extends Fe{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};li.prototype.isScene=!0;var Pn=class r{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ki,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Tt(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new r(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}};Pn.prototype.isInterleavedBuffer=!0;var Xe=new v,Mt=class r{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.x=this.getX(t),Xe.y=this.getY(t),Xe.z=this.getZ(t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new We(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};Mt.prototype.isInterleavedBufferAttribute=!0;var ns=class extends nt{constructor(e){super(),this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};ns.prototype.isSpriteMaterial=!0;var Zn,Si=new v,Jn=new v,$n=new v,jn=new $,Ei=new $,Oc=new ge,Er=new v,Ti=new v,Tr=new v,kl=new $,io=new $,Vl=new $,bo=class extends Fe{constructor(e){if(super(),this.type="Sprite",Zn===void 0){Zn=new Ge;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pn(t,5);Zn.setIndex([0,1,2,0,2,3]),Zn.setAttribute("position",new Mt(n,3,0,!1)),Zn.setAttribute("uv",new Mt(n,2,3,!1))}this.geometry=Zn,this.material=e!==void 0?e:new ns,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jn.setFromMatrixScale(this.matrixWorld),Oc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$n.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jn.multiplyScalar(-$n.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Ar(Er.set(-.5,-.5,0),$n,o,Jn,i,s),Ar(Ti.set(.5,-.5,0),$n,o,Jn,i,s),Ar(Tr.set(.5,.5,0),$n,o,Jn,i,s),kl.set(0,0),io.set(1,0),Vl.set(1,1);let a=e.ray.intersectTriangle(Er,Ti,Tr,!1,Si);if(a===null&&(Ar(Ti.set(-.5,.5,0),$n,o,Jn,i,s),io.set(0,1),a=e.ray.intersectTriangle(Er,Tr,Ti,!1,Si),a===null))return;let l=e.ray.origin.distanceTo(Si);l<e.near||l>e.far||t.push({distance:l,point:Si.clone(),uv:ct.getUV(Si,Er,Ti,Tr,kl,io,Vl,new $),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};bo.prototype.isSprite=!0;function Ar(r,e,t,n,i,s){jn.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ei.x=s*jn.x-i*jn.y,Ei.y=i*jn.x+s*jn.y):Ei.copy(jn),r.copy(e),r.x+=Ei.x,r.y+=Ei.y,r.applyMatrix4(Oc)}var Wl=new v,ql=new Le,Xl=new Le,gg=new v,Yl=new ge,is=class extends it{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ge,this.bindMatrixInverse=new ge}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Le,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;ql.fromBufferAttribute(i.attributes.skinIndex,e),Xl.fromBufferAttribute(i.attributes.skinWeight,e),Wl.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Xl.getComponent(s);if(o!==0){let a=ql.getComponent(s);Yl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gg.copy(Wl).applyMatrix4(Yl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}};is.prototype.isSkinnedMesh=!0;var Mo=class extends Fe{constructor(){super(),this.type="Bone"}};Mo.prototype.isBone=!0;var Zl=new ge,Jl=new ge,Lr=[],Ai=new it,So=class extends it{constructor(e,t,n){super(e,t),this.instanceMatrix=new We(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ai.geometry=this.geometry,Ai.material=this.material,Ai.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Zl),Jl.multiplyMatrices(n,Zl),Ai.matrixWorld=Jl,Ai.raycast(e,Lr);for(let o=0,a=Lr.length;o<a;o++){let l=Lr[o];l.instanceId=s,l.object=this,t.push(l)}Lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new We(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};So.prototype.isInstancedMesh=!0;var Cn=class extends nt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new de(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};Cn.prototype.isLineBasicMaterial=!0;var $l=new v,jl=new v,Ql=new ge,ro=new tn,Rr=new At,Zi=class extends Fe{constructor(e=new Ge,t=new Cn){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)$l.fromBufferAttribute(t,i-1),jl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$l.distanceTo(jl);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=s,e.ray.intersectsSphere(Rr)===!1)return;Ql.copy(i).invert(),ro.copy(e.ray).applyMatrix4(Ql);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new v,h=new v,u=new v,d=new v,f=this.isLineSegments?2:1;if(n.isBufferGeometry){let m=n.index,y=n.attributes.position;if(m!==null){let g=Math.max(0,o.start),p=Math.min(m.count,o.start+o.count);for(let M=g,E=p-1;M<E;M+=f){let A=m.getX(M),_=m.getX(M+1);if(c.fromBufferAttribute(y,A),h.fromBufferAttribute(y,_),ro.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,o.start),p=Math.min(y.count,o.start+o.count);for(let M=g,E=p-1;M<E;M+=f){if(c.fromBufferAttribute(y,M),h.fromBufferAttribute(y,M+1),ro.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Zi.prototype.isLine=!0;var Kl=new v,ec=new v,Ji=class extends Zi{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Kl.fromBufferAttribute(t,i),ec.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kl.distanceTo(ec);e.setAttribute("lineDistance",new Ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}};Ji.prototype.isLineSegments=!0;var Eo=class extends Zi{constructor(e,t){super(e,t),this.type="LineLoop"}};Eo.prototype.isLineLoop=!0;var rs=class extends nt{constructor(e){super(),this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};rs.prototype.isPointsMaterial=!0;var tc=new ge,To=new tn,Pr=new At,Cr=new v,Ao=class extends Fe{constructor(e=new Ge,t=new rs){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=s,e.ray.intersectsSphere(Pr)===!1)return;tc.copy(i).invert(),To.copy(e.ray).applyMatrix4(tc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){let c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let y=c.getX(m);Cr.fromBufferAttribute(u,y),nc(Cr,y,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Cr.fromBufferAttribute(u,m),nc(Cr,m,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}};Ao.prototype.isPoints=!0;function nc(r,e,t,n,i,s,o){let a=To.distanceSqToPoint(r);if(a<t){let l=new v;To.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var Lo=class extends ht{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.format=a!==void 0?a:Rn,this.minFilter=o!==void 0?o:Et,this.magFilter=s!==void 0?s:Et,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};Lo.prototype.isVideoTexture=!0;var Ro=class extends ht{constructor(e,t,n,i,s,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,s,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};Ro.prototype.isCompressedTexture=!0;var Po=class extends ht{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.needsUpdate=!0}};Po.prototype.isCanvasTexture=!0;var Co=class extends ht{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:ii,h!==ii&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ii&&(n=Ur),n===void 0&&h===Hi&&(n=Ni),super(null,i,s,o,a,l,h,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}};Co.prototype.isDepthTexture=!0;var ux=new v,dx=new v,fx=new v,px=new ct;var xg={triangulate:function(r,e,t){t=t||2;let n=e&&e.length,i=n?e[0]*t:r.length,s=Uc(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=bg(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let m=t;m<i;m+=t)u=r[m],d=r[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return $i(s,o,t,a,l,f),o}};function Uc(r,e,t,n,i){let s,o;if(i===Dg(r,e,t,n)>0)for(s=e;s<t;s+=n)o=ic(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=ic(s,r[s],r[s+1],o);return o&&Ts(o,o.next)&&(Qi(o),o=o.next),o}function yn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ts(t,t.next)||Ve(t.prev,t,t.next)===0)){if(Qi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $i(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Ag(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?vg(r,n,i,s):yg(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Qi(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=_g(yn(r),e,t),$i(r,e,t,n,i,s,2)):o===2&&wg(r,e,t,n,i,s):$i(yn(r),e,t,n,i,s,1);break}}}function yg(r){let e=r.prev,t=r,n=r.next;if(Ve(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(ni(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&Ve(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function vg(r,e,t,n){let i=r.prev,s=r,o=r.next;if(Ve(i,s,o)>=0)return!1;let a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=Io(a,l,e,t,n),d=Io(c,h,e,t,n),f=r.prevZ,m=r.nextZ;for(;f&&f.z>=u&&m&&m.z<=d;){if(f!==r.prev&&f!==r.next&&ni(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0||(f=f.prevZ,m!==r.prev&&m!==r.next&&ni(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Ve(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=u;){if(f!==r.prev&&f!==r.next&&ni(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Ve(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==r.prev&&m!==r.next&&ni(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Ve(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function _g(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!Ts(i,s)&&Hc(i,n,n.next,s)&&ji(i,s)&&ji(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Qi(n),Qi(n.next),n=r=s),n=n.next}while(n!==r);return yn(n)}function wg(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pg(o,a)){let l=kc(o,a);o=yn(o,o.next),l=yn(l,l.next),$i(o,e,t,n,i,s),$i(l,e,t,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function bg(r,e,t,n){let i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Uc(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Rg(c));for(i.sort(Mg),s=0;s<i.length;s++)Sg(i[s],t),t=yn(t,t.next);return t}function Mg(r,e){return r.x-e.x}function Sg(r,e){if(e=Eg(r,e),e){let t=kc(e,r);yn(e,e.next),yn(t,t.next)}}function Eg(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s){if(s=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;let a=o,l=o.x,c=o.y,h=1/0,u;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&ni(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),ji(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Tg(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function Tg(r,e){return Ve(r.prev,r,e.prev)<0&&Ve(e.next,r,r.next)<0}function Ag(r,e,t,n){let i=r;do i.z===null&&(i.z=Io(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Lg(i)}function Lg(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Io(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Rg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ni(r,e,t,n,i,s,o,a){return(i-o)*(e-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(i-o)*(n-a)>=0}function Pg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Cg(r,e)&&(ji(r,e)&&ji(e,r)&&Ig(r,e)&&(Ve(r.prev,r,e.prev)||Ve(r,e.prev,e))||Ts(r,e)&&Ve(r.prev,r,r.next)>0&&Ve(e.prev,e,e.next)>0)}function Ve(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ts(r,e){return r.x===e.x&&r.y===e.y}function Hc(r,e,t,n){let i=Dr(Ve(r,e,t)),s=Dr(Ve(r,e,n)),o=Dr(Ve(t,n,r)),a=Dr(Ve(t,n,e));return!!(i!==s&&o!==a||i===0&&Ir(r,t,e)||s===0&&Ir(r,n,e)||o===0&&Ir(t,r,n)||a===0&&Ir(t,e,n))}function Ir(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Dr(r){return r>0?1:r<0?-1:0}function Cg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Hc(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ji(r,e){return Ve(r.prev,r,r.next)<0?Ve(r,e,r.next)>=0&&Ve(r,r.prev,e)>=0:Ve(r,e,r.prev)<0||Ve(r,r.next,e)<0}function Ig(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function kc(r,e){let t=new Do(r.i,r.x,r.y),n=new Do(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ic(r,e,t,n){let i=new Do(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Do(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dg(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Kt=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];rc(e),sc(n,e);let o=e.length;t.forEach(rc);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,sc(n,t[l]);let a=xg.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function rc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function sc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var ci=class extends Ge{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ue(i,3)),this.setAttribute("uv",new Ue(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:f-2,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:Ng;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let M,E=!1,A,_,I,D;g&&(M=g.getSpacedPoints(h),E=!0,d=!1,A=g.computeFrenetFrames(h,!1),_=new v,I=new v,D=new v),d||(y=0,f=0,m=0,x=0);let F=a.extractPoints(c),G=F.shape,k=F.holes;if(!Kt.isClockWise(G)){G=G.reverse();for(let Y=0,K=k.length;Y<K;Y++){let re=k[Y];Kt.isClockWise(re)&&(k[Y]=re.reverse())}}let C=Kt.triangulateShape(G,k),T=G;for(let Y=0,K=k.length;Y<K;Y++){let re=k[Y];G=G.concat(re)}function R(Y,K,re){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(re).add(Y)}let L=G.length,B=C.length;function W(Y,K,re){let fe,ae,S,b=Y.x-K.x,q=Y.y-K.y,X=re.x-Y.x,le=re.y-Y.y,ue=b*b+q*q,Pe=b*le-q*X;if(Math.abs(Pe)>Number.EPSILON){let we=Math.sqrt(ue),P=Math.sqrt(X*X+le*le),ee=K.x-q/we,ie=K.y+b/we,xe=re.x-le/P,Z=re.y+X/P,_e=((xe-ee)*le-(Z-ie)*X)/(b*le-q*X);fe=ee+b*_e-Y.x,ae=ie+q*_e-Y.y;let De=fe*fe+ae*ae;if(De<=2)return new $(fe,ae);S=Math.sqrt(De/2)}else{let we=!1;b>Number.EPSILON?X>Number.EPSILON&&(we=!0):b<-Number.EPSILON?X<-Number.EPSILON&&(we=!0):Math.sign(q)===Math.sign(le)&&(we=!0),we?(fe=-q,ae=b,S=Math.sqrt(ue)):(fe=b,ae=q,S=Math.sqrt(ue/2))}return new $(fe/S,ae/S)}let H=[];for(let Y=0,K=T.length,re=K-1,fe=Y+1;Y<K;Y++,re++,fe++)re===K&&(re=0),fe===K&&(fe=0),H[Y]=W(T[Y],T[re],T[fe]);let J=[],j,oe=H.concat();for(let Y=0,K=k.length;Y<K;Y++){let re=k[Y];j=[];for(let fe=0,ae=re.length,S=ae-1,b=fe+1;fe<ae;fe++,S++,b++)S===ae&&(S=0),b===ae&&(b=0),j[fe]=W(re[fe],re[S],re[b]);J.push(j),oe=oe.concat(j)}for(let Y=0;Y<y;Y++){let K=Y/y,re=f*Math.cos(K*Math.PI/2),fe=m*Math.sin(K*Math.PI/2)+x;for(let ae=0,S=T.length;ae<S;ae++){let b=R(T[ae],H[ae],fe);me(b.x,b.y,-re)}for(let ae=0,S=k.length;ae<S;ae++){let b=k[ae];j=J[ae];for(let q=0,X=b.length;q<X;q++){let le=R(b[q],j[q],fe);me(le.x,le.y,-re)}}}let ne=m+x;for(let Y=0;Y<L;Y++){let K=d?R(G[Y],oe[Y],ne):G[Y];E?(I.copy(A.normals[0]).multiplyScalar(K.x),_.copy(A.binormals[0]).multiplyScalar(K.y),D.copy(M[0]).add(I).add(_),me(D.x,D.y,D.z)):me(K.x,K.y,0)}for(let Y=1;Y<=h;Y++)for(let K=0;K<L;K++){let re=d?R(G[K],oe[K],ne):G[K];E?(I.copy(A.normals[Y]).multiplyScalar(re.x),_.copy(A.binormals[Y]).multiplyScalar(re.y),D.copy(M[Y]).add(I).add(_),me(D.x,D.y,D.z)):me(re.x,re.y,u/h*Y)}for(let Y=y-1;Y>=0;Y--){let K=Y/y,re=f*Math.cos(K*Math.PI/2),fe=m*Math.sin(K*Math.PI/2)+x;for(let ae=0,S=T.length;ae<S;ae++){let b=R(T[ae],H[ae],fe);me(b.x,b.y,u+re)}for(let ae=0,S=k.length;ae<S;ae++){let b=k[ae];j=J[ae];for(let q=0,X=b.length;q<X;q++){let le=R(b[q],j[q],fe);E?me(le.x,le.y+M[h-1].y,M[h-1].x+re):me(le.x,le.y,u+re)}}}U(),ve();function U(){let Y=i.length/3;if(d){let K=0,re=L*K;for(let fe=0;fe<B;fe++){let ae=C[fe];ce(ae[2]+re,ae[1]+re,ae[0]+re)}K=h+y*2,re=L*K;for(let fe=0;fe<B;fe++){let ae=C[fe];ce(ae[0]+re,ae[1]+re,ae[2]+re)}}else{for(let K=0;K<B;K++){let re=C[K];ce(re[2],re[1],re[0])}for(let K=0;K<B;K++){let re=C[K];ce(re[0]+L*h,re[1]+L*h,re[2]+L*h)}}n.addGroup(Y,i.length/3-Y,0)}function ve(){let Y=i.length/3,K=0;Se(T,K),K+=T.length;for(let re=0,fe=k.length;re<fe;re++){let ae=k[re];Se(ae,K),K+=ae.length}n.addGroup(Y,i.length/3-Y,1)}function Se(Y,K){let re=Y.length;for(;--re>=0;){let fe=re,ae=re-1;ae<0&&(ae=Y.length-1);for(let S=0,b=h+y*2;S<b;S++){let q=L*S,X=L*(S+1),le=K+fe+q,ue=K+ae+q,Pe=K+ae+X,we=K+fe+X;Q(le,ue,Pe,we)}}}function me(Y,K,re){l.push(Y),l.push(K),l.push(re)}function ce(Y,K,re){he(Y),he(K),he(re);let fe=i.length/3,ae=p.generateTopUV(n,i,fe-3,fe-2,fe-1);pe(ae[0]),pe(ae[1]),pe(ae[2])}function Q(Y,K,re,fe){he(Y),he(K),he(fe),he(K),he(re),he(fe);let ae=i.length/3,S=p.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);pe(S[0]),pe(S[1]),pe(S[3]),pe(S[1]),pe(S[2]),pe(S[3])}function he(Y){i.push(l[Y*3+0]),i.push(l[Y*3+1]),i.push(l[Y*3+2])}function pe(Y){s.push(Y.x),s.push(Y.y)}}}toJSON(){let e=Ge.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return Fg(t,n,e)}},Ng={generateTopUV:function(r,e,t,n,i){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new $(s,o),new $(a,l),new $(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],x=e[s*3],y=e[s*3+1],g=e[s*3+2];return Math.abs(a-h)<.01?[new $(o,1-l),new $(c,1-u),new $(d,1-m),new $(x,1-g)]:[new $(a,1-l),new $(h,1-u),new $(f,1-m),new $(y,1-g)]}};function Fg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var No=class extends Ge{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ue(i,3)),this.setAttribute("normal",new Ue(s,3)),this.setAttribute("uv",new Ue(o,2));function c(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;Kt.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=m.length;y<g;y++){let p=m[y];Kt.isClockWise(p)===!0&&(m[y]=p.reverse())}let x=Kt.triangulateShape(f,m);for(let y=0,g=m.length;y<g;y++){let p=m[y];f=f.concat(p)}for(let y=0,g=f.length;y<g;y++){let p=f[y];i.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let y=0,g=x.length;y<g;y++){let p=x[y],M=p[0]+u,E=p[1]+u,A=p[2]+u;n.push(M,E,A),l+=3}}}toJSON(){let e=Ge.prototype.toJSON.call(this),t=this.parameters.shapes;return Bg(t,e)}};function Bg(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var ss=class extends Ge{constructor(e=1,t=8,n=6,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new v,d=new v,f=[],m=[],x=[],y=[];for(let g=0;g<=n;g++){let p=[],M=g/n,E=0;g==0&&o==0?E=.5/t:g==n&&l==Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){let _=A/t;u.x=-e*Math.cos(i+_*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+_*s)*Math.sin(o+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),y.push(_+E,1-M),p.push(c++)}h.push(p)}for(let g=0;g<n;g++)for(let p=0;p<t;p++){let M=h[g][p+1],E=h[g][p],A=h[g+1][p],_=h[g+1][p+1];(g!==0||o>0)&&f.push(M,E,_),(g!==n-1||l<Math.PI)&&f.push(E,A,_)}this.setIndex(f),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(y,2))}};var os=class extends Ge{constructor(e){if(super(),this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}let t=[],n=[0,0],i={},s=new v;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let m=d,x=d+f;m<x;m+=3)for(let y=0;y<3;y++){let g=a.getX(m+y),p=a.getX(m+(y+1)%3);n[0]=Math.min(g,p),n[1]=Math.max(g,p);let M=n[0]+","+n[1];i[M]===void 0&&(i[M]={index1:n[0],index2:n[1]})}}for(let c in i){let h=i[c];s.fromBufferAttribute(o,h.index1),t.push(s.x,s.y,s.z),s.fromBufferAttribute(o,h.index2),t.push(s.x,s.y,s.z)}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c;s.fromBufferAttribute(o,h),t.push(s.x,s.y,s.z);let u=3*a+(c+1)%3;s.fromBufferAttribute(o,u),t.push(s.x,s.y,s.z)}}this.setAttribute("position",new Ue(t,3))}};var Fo=class extends nt{constructor(e){super(),this.type="ShadowMaterial",this.color=new de(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};Fo.prototype.isShadowMaterial=!0;var Bo=class extends Gt{constructor(e){super(e),this.type="RawShaderMaterial"}};Bo.prototype.isRawShaderMaterial=!0;var as=class extends nt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}};as.prototype.isMeshStandardMaterial=!0;var zo=class extends as{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=mt(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new de).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}};zo.prototype.isMeshPhysicalMaterial=!0;var Go=class extends nt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new de(16777215),this.specular=new de(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Go.prototype.isMeshPhongMaterial=!0;var Oo=class extends nt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new de(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};Oo.prototype.isMeshToonMaterial=!0;var Uo=class extends nt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Uo.prototype.isMeshNormalMaterial=!0;var Ho=class extends nt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};Ho.prototype.isMeshLambertMaterial=!0;var ko=class extends nt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new de(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};ko.prototype.isMeshMatcapMaterial=!0;var Vo=class extends Cn{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};Vo.prototype.isLineDashedMaterial=!0;var ke={arraySlice:function(r,e,t){return ke.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){let s=r.clone();s.name=e;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*i;if(!(m<t||m>=n)){u.push(c.times[f]);for(let x=0;x<h;++x)d.push(c.values[f*h+x])}}u.length!==0&&(c.times=ke.convertArray(u,c.times.constructor),c.values=ke.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);let i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=a.times.length-1,x;if(s<=a.times[0]){let g=h,p=u-h;x=ke.arraySlice(a.values,g,p)}else if(s>=a.times[m]){let g=m*u+h,p=g+u-h;x=ke.arraySlice(a.values,g,p)}else{let g=a.createInterpolant(),p=h,M=u-h;g.evaluate(s),x=ke.arraySlice(g.resultBuffer,p,M)}l==="quaternion"&&new at().fromArray(x).normalize().conjugate().toArray(x);let y=c.times.length;for(let g=0;g<y;++g){let p=g*f+d;if(l==="quaternion")at.multiplyQuaternionsFlat(c.values,p,x,0,c.values,p);else{let M=f-d*2;for(let E=0;E<M;++E)c.values[p+E]-=x[E]}}}return r.blendMode=vc,r}},Ht=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}};Ht.prototype.beforeStart_=Ht.prototype.copySampleValue_;Ht.prototype.afterEnd_=Ht.prototype.copySampleValue_;var Wo=class extends Ht{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ei,endingEnd:ei}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ti:s=e,a=2*t-n;break;case Wr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ti:o=e,l=2*n-t;break;case Wr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,y=x*m,g=-d*y+2*d*x-d*m,p=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*m+1,M=(-1-f)*y+(1.5+f)*x+.5*m,E=f*y-f*x;for(let A=0;A!==a;++A)s[A]=g*o[h+A]+p*o[c+A]+M*o[l+A]+E*o[u+A];return s}},ls=class extends Ht{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},qo=class extends Ht{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Lt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ke.convertArray(t,this.TimeBufferType),this.values=ke.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ke.convertArray(e.times,Array),values:ke.convertArray(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ls(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Vr:t=this.InterpolantFactoryMethodLinear;break;case Cs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Cs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=ke.arraySlice(n,s,o),this.values=ke.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ke.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=ke.arraySlice(this.times),t=ke.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Cs,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ke.arraySlice(e,0,o),this.values=ke.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=ke.arraySlice(this.times,0),t=ke.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Lt.prototype.TimeBufferType=Float32Array;Lt.prototype.ValueBufferType=Float32Array;Lt.prototype.DefaultInterpolation=Vr;var vn=class extends Lt{};vn.prototype.ValueTypeName="bool";vn.prototype.ValueBufferType=Array;vn.prototype.DefaultInterpolation=kr;vn.prototype.InterpolantFactoryMethodLinear=void 0;vn.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Lt{};cs.prototype.ValueTypeName="color";var hi=class extends Lt{};hi.prototype.ValueTypeName="number";var Xo=class extends Ht{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)at.slerpFlat(s,0,o,c-a,o,c,l);return s}},In=class extends Lt{InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};In.prototype.ValueTypeName="quaternion";In.prototype.DefaultInterpolation=Vr;In.prototype.InterpolantFactoryMethodSmooth=void 0;var _n=class extends Lt{};_n.prototype.ValueTypeName="string";_n.prototype.ValueBufferType=Array;_n.prototype.DefaultInterpolation=kr;_n.prototype.InterpolantFactoryMethodLinear=void 0;_n.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends Lt{};ui.prototype.ValueTypeName="vector";var hs=class{constructor(e,t=-1,n,i=Ia){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Tt(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Gg(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Lt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=ke.getKeyframeOrder(l);l=ke.sortedArray(l,1,h),c=ke.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new hi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,x){if(f.length!==0){let y=[],g=[];ke.flattenJSON(f,y,g,m),y.length!==0&&x.push(new u(d,y,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let y=[],g=[];for(let p=0;p!==d[m].morphTargets.length;++p){let M=d[m];y.push(M.time),g.push(M.morphTarget===x?1:0)}i.push(new hi(".morphTargetInfluence["+x+"]",y,g))}l=f.length*(o||1)}else{let f=".bones["+t[u].name+"]";n(ui,f+".position",d,"pos",i),n(In,f+".quaternion",d,"rot",i),n(ui,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function zg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hi;case"vector":case"vector2":case"vector3":case"vector4":return ui;case"color":return cs;case"quaternion":return In;case"bool":case"boolean":return vn;case"string":return _n}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Gg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zg(r.type);if(r.times===void 0){let t=[],n=[];ke.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var di={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Yo=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Og=new Yo,kt=class{constructor(e){this.manager=e!==void 0?e:Og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Ft={},Zo=class extends kt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=di.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;if(Ft[e]!==void 0){Ft[e].push({onLoad:t,onProgress:n,onError:i});return}let a=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(a),c;if(l){let h=l[1],u=!!l[2],d=l[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let f,m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":let x=new Uint8Array(d.length);for(let g=0;g<d.length;g++)x[g]=d.charCodeAt(g);m==="blob"?f=new Blob([x.buffer],{type:h}):f=x.buffer;break;case"document":f=new DOMParser().parseFromString(d,h);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){t&&t(f),s.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)},0)}}else{Ft[e]=[],Ft[e].push({onLoad:t,onProgress:n,onError:i}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(h){let u=this.response,d=Ft[e];if(delete Ft[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),di.add(e,u);for(let f=0,m=d.length;f<m;f++){let x=d[f];x.onLoad&&x.onLoad(u)}s.manager.itemEnd(e)}else{for(let f=0,m=d.length;f<m;f++){let x=d[f];x.onError&&x.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(h){let u=Ft[e];for(let d=0,f=u.length;d<f;d++){let m=u[d];m.onProgress&&m.onProgress(h)}},!1),c.addEventListener("error",function(h){let u=Ft[e];delete Ft[e];for(let d=0,f=u.length;d<f;d++){let m=u[d];m.onError&&m.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),c.addEventListener("abort",function(h){let u=Ft[e];delete Ft[e];for(let d=0,f=u.length;d<f;d++){let m=u[d];m.onError&&m.onError(h)}s.manager.itemError(e),s.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let h in this.requestHeader)c.setRequestHeader(h,this.requestHeader[h]);c.send(null)}return s.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var us=class extends kt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=di.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function l(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),di.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},Jo=class extends kt{constructor(e){super(e)}load(e,t,n,i){let s=new oi,o=new us(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}};var $o=class extends kt{constructor(e){super(e)}load(e,t,n,i){let s=new ht,o=new us(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a;let l=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;s.format=l?Rn:zt,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},_t=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new $:new v);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new v,i=[],s=[],o=[],a=new v,l=new ge;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new v),i[f].normalize()}s[0]=new v,o[0]=new v;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(mt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(mt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fi=class extends _t{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new $,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};fi.prototype.isEllipseCurve=!0;var ds=class extends fi{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.type="ArcCurve"}};ds.prototype.isArcCurve=!0;function Fa(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Nr=new v,so=new Fa,oo=new Fa,ao=new Fa,fs=class extends _t{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new v){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Nr.subVectors(i[0],i[1]).add(i[0]),c=Nr);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Nr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),y<1e-4&&(y=x),so.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,y),oo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,y),ao.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,y)}else this.curveType==="catmullrom"&&(so.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),oo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ao.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(so.calc(l),oo.calc(l),ao.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new v().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};fs.prototype.isCatmullRomCurve3=!0;function oc(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Ug(r,e){let t=1-r;return t*t*e}function Hg(r,e){return 2*(1-r)*r*e}function kg(r,e){return r*r*e}function Gi(r,e,t,n){return Ug(r,e)+Hg(r,t)+kg(r,n)}function Vg(r,e){let t=1-r;return t*t*t*e}function Wg(r,e){let t=1-r;return 3*t*t*r*e}function qg(r,e){return 3*(1-r)*r*r*e}function Xg(r,e){return r*r*r*e}function Oi(r,e,t,n,i){return Vg(r,e)+Wg(r,t)+qg(r,n)+Xg(r,i)}var Ki=class extends _t{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oi(e,i.x,s.x,o.x,a.x),Oi(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Ki.prototype.isCubicBezierCurve=!0;var ps=class extends _t{constructor(e=new v,t=new v,n=new v,i=new v){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new v){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oi(e,i.x,s.x,o.x,a.x),Oi(e,i.y,s.y,o.y,a.y),Oi(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};ps.prototype.isCubicBezierCurve3=!0;var pi=class extends _t{constructor(e=new $,t=new $){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};pi.prototype.isLineCurve=!0;var jo=class extends _t{constructor(e=new v,t=new v){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new v){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},er=class extends _t{constructor(e=new $,t=new $,n=new $){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Gi(e,i.x,s.x,o.x),Gi(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};er.prototype.isQuadraticBezierCurve=!0;var ms=class extends _t{constructor(e=new v,t=new v,n=new v){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new v){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Gi(e,i.x,s.x,o.x),Gi(e,i.y,s.y,o.y),Gi(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};ms.prototype.isQuadraticBezierCurve3=!0;var tr=class extends _t{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(oc(a,l.x,c.x,h.x,u.x),oc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new $().fromArray(i))}return this}};tr.prototype.isSplineCurve=!0;var Yg=Object.freeze({__proto__:null,ArcCurve:ds,CatmullRomCurve3:fs,CubicBezierCurve:Ki,CubicBezierCurve3:ps,EllipseCurve:fi,LineCurve:pi,LineCurve3:jo,QuadraticBezierCurve:er,QuadraticBezierCurve3:ms,SplineCurve:tr}),Qo=class extends _t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new pi(t,e))}getPoint(e){let t=e*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=t){let s=n[i]-t,o=this.curves[i],a=o.getLength(),l=a===0?0:1-s/a;return o.getPointAt(l)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Yg[i.type]().fromJSON(i))}return this}},mi=class extends Qo{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new pi(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new er(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new Ki(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new tr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new fi(e,t,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mn=class extends mi{constructor(e){super(e),this.uuid=Tt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new mi().fromJSON(i))}return this}},Rt=class extends Fe{constructor(e,t=1){super(),this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Rt.prototype.isLight=!0;var Ko=class extends Rt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.groundColor=new de(t)}copy(e){return Rt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};Ko.prototype.isHemisphereLight=!0;var ac=new ge,lc=new v,cc=new v,nr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ai,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gs=class extends nr{constructor(){super(new ot(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,n=Vi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};gs.prototype.isSpotLightShadow=!0;var ea=class extends Rt{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new gs}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ea.prototype.isSpotLight=!0;var hc=new ge,Li=new v,lo=new v,xs=class extends nr{constructor(){super(new ot(90,1,.5,500)),this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Le(2,1,1,1),new Le(0,1,1,1),new Le(3,1,1,1),new Le(1,1,1,1),new Le(3,0,1,1),new Le(1,0,1,1)],this._cubeDirections=[new v(1,0,0),new v(-1,0,0),new v(0,0,1),new v(0,0,-1),new v(0,1,0),new v(0,-1,0)],this._cubeUps=[new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,0,1),new v(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Li.setFromMatrixPosition(e.matrixWorld),n.position.copy(Li),lo.copy(n.position),lo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lo),n.updateMatrixWorld(),i.makeTranslation(-Li.x,-Li.y,-Li.z),hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc)}};xs.prototype.isPointLightShadow=!0;var ta=class extends Rt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};ta.prototype.isPointLight=!0;var ys=class extends qi{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};ys.prototype.isOrthographicCamera=!0;var vs=class extends nr{constructor(){super(new ys(-5,5,5,-5,.5,500))}};vs.prototype.isDirectionalLightShadow=!0;var na=class extends Rt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.shadow=new vs}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};na.prototype.isDirectionalLight=!0;var ia=class extends Rt{constructor(e,t){super(e,t),this.type="AmbientLight"}};ia.prototype.isAmbientLight=!0;var ra=class extends Rt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};ra.prototype.isRectAreaLight=!0;var _s=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new v)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}};_s.prototype.isSphericalHarmonics3=!0;var ir=class extends Rt{constructor(e=new _s,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};ir.prototype.isLightProbe=!0;var sa=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}},rr=class extends Ge{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};rr.prototype.isInstancedBufferGeometry=!0;var oa=class extends We{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};oa.prototype.isInstancedBufferAttribute=!0;var aa=class extends kt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=di.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){di.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};aa.prototype.isImageBitmapLoader=!0;var la=class{constructor(){this.type="ShapePath",this.color=new de,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new mi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(p){let M=[];for(let E=0,A=p.length;E<A;E++){let _=p[E],I=new mn;I.curves=_.curves,M.push(I)}return M}function i(p,M){let E=M.length,A=!1;for(let _=E-1,I=0;I<E;_=I++){let D=M[_],F=M[I],G=F.x-D.x,k=F.y-D.y;if(Math.abs(k)>Number.EPSILON){if(k<0&&(D=M[I],G=-G,F=M[_],k=-k),p.y<D.y||p.y>F.y)continue;if(p.y===D.y){if(p.x===D.x)return!0}else{let O=k*(p.x-D.x)-G*(p.y-D.y);if(O===0)return!0;if(O<0)continue;A=!A}}else{if(p.y!==D.y)continue;if(F.x<=p.x&&p.x<=D.x||D.x<=p.x&&p.x<=F.x)return!0}}return A}let s=Kt.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let a,l,c,h=[];if(o.length===1)return l=o[0],c=new mn,c.curves=l.curves,h.push(c),h;let u=!s(o[0].getPoints());u=e?!u:u;let d=[],f=[],m=[],x=0,y;f[x]=void 0,m[x]=[];for(let p=0,M=o.length;p<M;p++)l=o[p],y=l.getPoints(),a=s(y),a=e?!a:a,a?(!u&&f[x]&&x++,f[x]={s:new mn,p:y},f[x].s.curves=l.curves,u&&x++,m[x]=[]):m[x].push({h:l,p:y[0]});if(!f[0])return n(o);if(f.length>1){let p=!1,M=[];for(let E=0,A=f.length;E<A;E++)d[E]=[];for(let E=0,A=f.length;E<A;E++){let _=m[E];for(let I=0;I<_.length;I++){let D=_[I],F=!0;for(let G=0;G<f.length;G++)i(D.p,f[G].p)&&(E!==G&&M.push({froms:E,tos:G,hole:I}),F?(F=!1,d[G].push(D)):p=!0);F&&d[E].push(D)}}M.length>0&&(p||(m=d))}let g;for(let p=0,M=f.length;p<M;p++){c=f[p].s,h.push(c),g=m[p];for(let E=0,A=g.length;E<A;E++)c.holes.push(g[E].h)}return h}},ca=class{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){let n=[],i=Zg(e,t,this.data);for(let s=0,o=i.length;s<o;s++)Array.prototype.push.apply(n,i[s].toShapes());return n}};function Zg(r,e,t){let n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[],a=0,l=0;for(let c=0;c<n.length;c++){let h=n[c];if(h===`
`)a=0,l-=s;else{let u=Jg(h,i,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function Jg(r,e,t,n,i){let s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}let o=new la,a,l,c,h,u,d,f,m;if(s.o){let x=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let y=0,g=x.length;y<g;)switch(x[y++]){case"m":a=x[y++]*e+t,l=x[y++]*e+n,o.moveTo(a,l);break;case"l":a=x[y++]*e+t,l=x[y++]*e+n,o.lineTo(a,l);break;case"q":c=x[y++]*e+t,h=x[y++]*e+n,u=x[y++]*e+t,d=x[y++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=x[y++]*e+t,h=x[y++]*e+n,u=x[y++]*e+t,d=x[y++]*e+n,f=x[y++]*e+t,m=x[y++]*e+n,o.bezierCurveTo(u,d,f,m,c,h);break}}return{offsetX:s.ha*e,path:o}}ca.prototype.isFont=!0;var Fr,$g={getContext:function(){return Fr===void 0&&(Fr=new(window.AudioContext||window.webkitAudioContext)),Fr},setContext:function(r){Fr=r}},ha=class extends kt{constructor(e){super(e)}load(e,t,n,i){let s=this,o=new Zo(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let l=a.slice(0);$g.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}},ua=class extends ir{constructor(e,t,n=1){super(void 0,n);let i=new de().set(e),s=new de().set(t),o=new v(i.r,i.g,i.b),a=new v(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}};ua.prototype.isHemisphereLightProbe=!0;var da=class extends ir{constructor(e,t=1){super(void 0,t);let n=new de().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}};da.prototype.isAmbientLightProbe=!0;var fa=class extends Fe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var pa=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},ma=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){at.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let o=this._workIndex*s;at.multiplyQuaternionsFlat(e,o,e,t,e,n),at.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Ba="\\[\\]\\.:\\/",jg=new RegExp("["+Ba+"]","g"),za="[^"+Ba+"]",Qg="[^"+Ba.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",za),ex=/(WCOD+)?/.source.replace("WCOD",Qg),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",za),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",za),ix=new RegExp("^"+Kg+ex+tx+nx+"$"),rx=["material","materials","bones"],ga=class{constructor(e,t,n){let i=n||ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ze=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jg,"")}static parseTrackName(e){let t=ix.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);rx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=ga;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xa=class{constructor(){this.uuid=Tt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length,a,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(d);for(let x=0,y=o;x!==y;++x)s[x].push(new ze(d,n[x],i[x]))}else if(m<c){a=e[m];let x=--c,y=e[x];t[y.uuid]=m,e[m]=y,t[f]=x,e[x]=d;for(let g=0,p=o;g!==p;++g){let M=s[g],E=M[x],A=M[m];M[m]=E,A===void 0&&(A=new ze(d,n[g],i[g])),M[x]=A}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0&&h>=s){let u=s++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,m=i;f!==m;++f){let x=n[f],y=x[u],g=x[h];x[h]=y,x[u]=g}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<s){let d=--s,f=e[d],m=--o,x=e[m];t[f.uuid]=u,e[u]=f,t[x.uuid]=d,e[d]=x,e.pop();for(let y=0,g=i;y!==g;++y){let p=n[y],M=p[d],E=p[m];p[u]=M,p[d]=E,p.pop()}}else{let d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let m=0,x=i;m!==x;++m){let y=n[m];y[u]=y[d],y.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],s=this._bindings;if(i!==void 0)return s[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=s.length,n[e]=i,o.push(e),a.push(t),s.push(u);for(let d=h,f=l.length;d!==f;++d){let m=l[d];u[d]=new ze(m,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}};xa.prototype.isAnimationObjectGroup=!0;var ya=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,o=s.length,a=new Array(o),l={endingStart:ei,endingEnd:ei};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Au,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case vc:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Ia:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,o=n===Lu;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Tu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ti,i.endingEnd=ti):(e?i.endingStart=this.zeroSlopeAtStart?ti:ei:i.endingStart=Wr,t?i.endingEnd=this.zeroSlopeAtEnd?ti:ei:i.endingEnd=Wr)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}},va=class extends en{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;m=new ma(ze.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ls(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,o=typeof e=="string"?hs.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ia),l!==void 0){let u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new ya(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?hs.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};va.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var _a=class r{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new r(this.value.clone===void 0?this.value:this.value.clone())}},wn=class extends Pn{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};wn.prototype.isInstancedInterleavedBuffer=!0;var wa=class{constructor(e,t,n,i,s){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}};wa.prototype.isGLBufferAttribute=!0;var ws=class{constructor(e,t,n=0,i=1/0){this.ray=new tn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return ba(e,this,n,t),n.sort(uc),n}intersectObjects(e,t=!1,n=[]){for(let i=0,s=e.length;i<s;i++)ba(e[i],this,n,t);return n.sort(uc),n}};function uc(r,e){return r.distance-e.distance}function ba(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,o=i.length;s<o;s++)ba(i[s],e,t,!0)}}var dc=new $,Dn=class{constructor(e=new $(1/0,1/0),t=new $(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new $),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new $),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new $),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new $),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return dc.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Dn.prototype.isBox2=!0;var fc=new v,Br=new v,sr=class{constructor(e=new v,t=new v){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new v),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new v),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new v),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){fc.subVectors(e,this.start),Br.subVectors(this.end,this.start);let n=Br.dot(Br),s=Br.dot(fc)/n;return t&&(s=mt(s,0,1)),s}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new v),this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Ma=class extends Fe{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}};Ma.prototype.isImmediateRenderObject=!0;var dn=new v,zr=new ge,co=new ge,Sa=class extends Ji{constructor(e){let t=Vc(e),n=new Ge,i=[],s=[],o=new de(0,0,1),a=new de(0,1,0);for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Ue(i,3)),n.setAttribute("color",new Ue(s,3));let l=new Cn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");co.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(zr.multiplyMatrices(co,a.matrixWorld),dn.setFromMatrixPosition(zr),i.setXYZ(o,dn.x,dn.y,dn.z),zr.multiplyMatrices(co,a.parent.matrixWorld),dn.setFromMatrixPosition(zr),i.setXYZ(o+1,dn.x,dn.y,dn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Vc(r){let e=[];r&&r.isBone&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Vc(r.children[t]));return e}var Ea=class extends Ji{constructor(e=10,t=10,n=4473924,i=8947848){n=new de(n),i=new de(i);let s=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=d===s?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new Ge;h.setAttribute("position",new Ue(l,3)),h.setAttribute("color",new Ue(c,3));let u=new Cn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}};var sx=new Float32Array(1),mx=new Int32Array(sx.buffer);var Or=4,Ui=8,gx=Math.pow(2,Ui),Wc=[.125,.215,.35,.446,.526,.582],ox=Ui-Or+1+Wc.length;var xx={[gi]:0,[Da]:1,[wc]:2,[bc]:3,[Mc]:4,[Sc]:5,[_c]:6},ax=new xn({side:et,depthWrite:!1,depthTest:!1}),yx=new it(new Wi,ax);var{_lodPlanes:vx,_sizeLods:_x,_sigmas:wx}=lx();var Ln=(1+Math.sqrt(5))/2,Qn=1/Ln,bx=[new v(1,1,1),new v(-1,1,1),new v(1,1,-1),new v(-1,1,-1),new v(0,Ln,Qn),new v(0,Ln,-Qn),new v(Qn,0,Ln),new v(-Qn,0,Ln),new v(Ln,Qn,0),new v(-Ln,Qn,0)];function lx(){let r=[],e=[],t=[],n=Ui;for(let i=0;i<ox;i++){let s=Math.pow(2,n);e.push(s);let o=1/s;i>Ui-Or?o=Wc[i-Ui+Or-1]:i==0&&(o=0),t.push(o);let a=1/(s-1),l=-a/2,c=1+a/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=2,x=1,y=new Float32Array(f*d*u),g=new Float32Array(m*d*u),p=new Float32Array(x*d*u);for(let E=0;E<u;E++){let A=E%3*2/3-1,_=E>2?0:-1,I=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];y.set(I,f*d*E),g.set(h,m*d*E);let D=[E,E,E,E,E,E];p.set(D,x*d*E)}let M=new Ge;M.setAttribute("position",new We(y,f)),M.setAttribute("uv",new We(g,m)),M.setAttribute("faceIndex",new We(p,x)),r.push(M),n>Or&&n--}return{_lodPlanes:r,_sizeLods:e,_sigmas:t}}_t.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(_t.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};mi.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};Ea.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Sa.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};kt.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),sa.extractUrlBase(r)};kt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Dn.prototype.center=function(r){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(r)};Dn.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Dn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Dn.prototype.size=function(r){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(r)};Qe.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Qe.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Qe.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Qe.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Qe.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};At.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ai.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};sr.prototype.center=function(r){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(r)};je.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};je.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};je.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};je.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};je.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};je.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};ge.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};ge.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};ge.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new v().setFromMatrixColumn(this,3)};ge.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};ge.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ge.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ge.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ge.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ge.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};ge.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ge.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ge.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ge.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ge.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ge.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ge.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};ge.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ge.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};ge.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};St.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};at.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};at.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};tn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};tn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};tn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};ct.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ct.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};ct.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};ct.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};ct.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};ct.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ct.getBarycoord(r,e,t,n,i)};ct.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ct.getNormal(r,e,t,n)};mn.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};mn.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ci(this,r)};mn.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new No(this,r)};$.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};$.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};$.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};v.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};v.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};v.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};v.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};v.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};v.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};v.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};v.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};v.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Le.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};Le.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Fe.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Fe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Fe.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};Fe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Fe.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Fe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});it.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(it.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Ru},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});is.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ot.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(Rt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(We.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===qr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(qr)}}});We.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?qr:ki),this};We.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},We.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ge.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Ge.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new We(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};Ge.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};Ge.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ge.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ge.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Ge.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Ge.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Pn.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?qr:ki),this};Pn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ci.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ci.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ci.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};li.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};_a.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(nt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new de}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===mc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}}});Object.defineProperties(Gt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Be.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};Be.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Be.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Be.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Be.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Be.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Be.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Be.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Be.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Be.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Be.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Be.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Be.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Be.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Be.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Be.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Be.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Be.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Be.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Be.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Be.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Be.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Be.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Be.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Be.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Be.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Da:gi}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Gc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Qt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});fa.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new ha().load(r,function(n){e.setBuffer(n)}),this};pa.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Xi.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Xi.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};gn.crossOrigin=void 0;gn.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let i=new $o;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};gn.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let i=new Jo;i.setCrossOrigin(this.crossOrigin);let s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};gn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};gn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"128"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="128");te.line={linewidth:{value:1},resolution:{value:new $(1,1)},dashScale:{value:1},dashSize:{value:1},dashOffset:{value:0},gapSize:{value:1},opacity:{value:1}};gt.line={uniforms:Es.merge([te.common,te.fog,te.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float dashOffset;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef ALPHA_TO_COVERAGE

			// artifacts appear on some hardware if a derivative is taken within a conditional
			float a = vUv.x;
			float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
			float len2 = a * a + b * b;
			float dlen = fwidth( len2 );

			if ( abs( vUv.y ) > 1.0 ) {

				alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

			}

			#else

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var nn=class extends Gt{constructor(e){super({type:"LineMaterial",uniforms:Es.clone(gt.line.uniforms),vertexShader:gt.line.vertexShader,fragmentShader:gt.line.fragmentShader,clipping:!0}),this.dashed=!1,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t?(this.defines.ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}};nn.prototype.isLineMaterial=!0;var qc=new Qe,As=new v,Nn=class extends rr{constructor(){super(),this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ue(e,3)),this.setAttribute("uv",new Ue(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new wn(t,6,1);return this.setAttribute("instanceStart",new Mt(n,3,0)),this.setAttribute("instanceEnd",new Mt(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new wn(t,6,1);return this.setAttribute("instanceColorStart",new Mt(n,3,0)),this.setAttribute("instanceColorEnd",new Mt(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new os(e.geometry)),this}romLineSegments(e){let t=e.geometry;if(t.isGeometry){console.error("THREE.LineSegmentsGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.");return}else t.isBufferGeometry&&this.setPositions(t.attributes.position.array);return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),qc.setFromBufferAttribute(t),this.boundingBox.union(qc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new At),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)As.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(As)),As.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(As));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}};Nn.prototype.isLineSegmentsGeometry=!0;var Ga=new v,Oa=new v,dt=new Le,ft=new Le,Vt=new Le,Ua=new v,Ha=new ge,Pt=new sr,Xc=new v,rn=new Qe,Ls=new At,Wt=new Le,or=class extends it{constructor(e=new Nn,t=new nn({color:Math.random()*16777215})){super(e,t),this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Ga.fromBufferAttribute(t,o),Oa.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Ga.distanceTo(Oa);let s=new wn(i,2,1);return e.setAttribute("instanceDistanceStart",new Mt(s,1,0)),e.setAttribute("instanceDistanceEnd",new Mt(s,1,1)),this}raycast(e,t){e.camera===null&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2.');let n=e.params.Line2!==void 0&&e.params.Line2.threshold||0,i=e.ray,s=e.camera,o=s.projectionMatrix,a=this.matrixWorld,l=this.geometry,c=this.material,h=c.resolution,u=c.linewidth+n,d=l.attributes.instanceStart,f=l.attributes.instanceEnd,m=-s.near,x=2*Math.max(u/h.width,u/h.height);l.boundingSphere===null&&l.computeBoundingSphere(),Ls.copy(l.boundingSphere).applyMatrix4(a);let y=Math.max(s.near,Ls.distanceToPoint(i.origin));Wt.set(0,0,-y,1).applyMatrix4(s.projectionMatrix),Wt.multiplyScalar(1/Wt.w),Wt.applyMatrix4(s.projectionMatrixInverse);let g=Math.abs(x/Wt.w)*.5;if(Ls.radius+=g,e.ray.intersectsSphere(Ls)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),rn.copy(l.boundingBox).applyMatrix4(a);let p=Math.max(s.near,rn.distanceToPoint(i.origin));Wt.set(0,0,-p,1).applyMatrix4(s.projectionMatrix),Wt.multiplyScalar(1/Wt.w),Wt.applyMatrix4(s.projectionMatrixInverse);let M=Math.abs(x/Wt.w)*.5;if(rn.max.x+=M,rn.max.y+=M,rn.max.z+=M,rn.min.x-=M,rn.min.y-=M,rn.min.z-=M,e.ray.intersectsBox(rn)!==!1){i.at(1,Vt),Vt.w=1,Vt.applyMatrix4(s.matrixWorldInverse),Vt.applyMatrix4(o),Vt.multiplyScalar(1/Vt.w),Vt.x*=h.x/2,Vt.y*=h.y/2,Vt.z=0,Ua.copy(Vt),Ha.multiplyMatrices(s.matrixWorldInverse,a);for(let A=0,_=d.count;A<_;A++){dt.fromBufferAttribute(d,A),ft.fromBufferAttribute(f,A),Ga.w=1,Oa.w=1,dt.applyMatrix4(Ha),ft.applyMatrix4(Ha);var E=dt.z>m&&ft.z>m;if(E)continue;if(dt.z>m){let k=dt.z-ft.z,O=(dt.z-m)/k;dt.lerp(ft,O)}else if(ft.z>m){let k=ft.z-dt.z,O=(ft.z-m)/k;ft.lerp(dt,O)}dt.applyMatrix4(o),ft.applyMatrix4(o),dt.multiplyScalar(1/dt.w),ft.multiplyScalar(1/ft.w),dt.x*=h.x/2,dt.y*=h.y/2,ft.x*=h.x/2,ft.y*=h.y/2,Pt.start.copy(dt),Pt.start.z=0,Pt.end.copy(ft),Pt.end.z=0;let I=Pt.closestPointToPointParameter(Ua,!0);Pt.at(I,Xc);let D=Ac.lerp(dt.z,ft.z,I),F=D>=-1&&D<=1,G=Ua.distanceTo(Xc)<u*.5;if(F&&G){Pt.start.fromBufferAttribute(d,A),Pt.end.fromBufferAttribute(f,A),Pt.start.applyMatrix4(a),Pt.end.applyMatrix4(a);let k=new v,O=new v;i.distanceSqToSegment(Pt.start,Pt.end,O,k),t.push({point:O,pointOnLine:k,distance:i.origin.distanceTo(O),object:this,face:null,faceIndex:A,uv:null,uv2:null})}}}}};or.prototype.LineSegments2=!0;var Je=class extends Nn{constructor(){super(),this.type="LineGeometry"}setPositions(e){for(var t=e.length-3,n=new Float32Array(2*t),i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){for(var t=e.length-3,n=new Float32Array(2*t),i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){var t=e.geometry;if(t.isGeometry){console.error("THREE.LineGeometry no longer supports Geometry. Use THREE.BufferGeometry instead.");return}else t.isBufferGeometry&&this.setPositions(t.attributes.position.array);return this}copy(){return this}};Je.prototype.isLineGeometry=!0;var rt=class extends or{constructor(e=new Je,t=new nn({color:Math.random()*16777215})){super(e,t),this.type="Line2"}};rt.prototype.isLine2=!0;function Yc(r){let e=new tt,t=1.2,n=new ss(t,16,16),i=new xn({visible:!1}),s=new it(n,i);s.name="headRaycastTarget",e.add(s);let o=new tt;e.add(o);let a=p(-.45,"open"),l=p(.45,"open");o.add(a),o.add(l);let c=p(-.45,"closed"),h=p(.45,"closed");c.visible=!1,h.visible=!1,o.add(c),o.add(h);let u=M("normal"),d=M("whistling"),f=M("giggling"),m=M("awed");e.add(u),e.add(d),e.add(f),e.add(m),d.visible=!1,f.visible=!1,m.visible=!1;let x=D();x.visible=!1;let y=G();y.visible=!1,e.add(E()),e.add(A());let g=_();return e.add(g),{head:e,headRaycastTarget:s,eyesGroup:o,leftEyeOpen:a,rightEyeOpen:l,leftEyeClosed:c,rightEyeClosed:h,normalMouth:u,whistlingMouth:d,gigglingMouth:f,awedMouth:m,zzzGroup:x,musicNotesGroup:y,eyebrows:g,archEyebrows:I};function p(T,R){let L=new tt;if(L.position.z=1,R==="open"){let B=[new v(T-.2,.3,0),new v(T,.4,0),new v(T+.2,.3,0),new v(T,.2,0),new v(T-.2,.3,0)],W=[];B.forEach(U=>W.push(U.x,U.y,U.z));let H=new Je;H.setPositions(W);let J=new rt(H,r);J.computeLineDistances(),L.add(J);let j=new Yi(.05,.05),oe=new xn({color:65280}),ne=new it(j,oe);ne.position.set(T,.3,.1),L.add(ne)}else if(R==="closed"){let B=[new v(T-.2,.3,0),new v(T+.2,.3,0)],W=[];B.forEach(j=>W.push(j.x,j.y,j.z));let H=new Je;H.setPositions(W);let J=new rt(H,r);J.computeLineDistances(),L.add(J)}return L}function M(T){let R=new tt;R.position.z=1;let L=[];if(T==="normal")L=[new v(-.35,-.45,0),new v(-.2,-.53,0),new v(0,-.55,0),new v(.2,-.53,0),new v(.35,-.45,0)];else if(T==="whistling")for(let oe=0;oe<=16;oe++){let ne=oe/16*Math.PI*2;L.push(new v(Math.cos(ne)*.07,Math.sin(ne)*.07-.5,0))}else if(T==="awed")for(let oe=0;oe<=18;oe++){let ne=oe/18*Math.PI*2;L.push(new v(Math.cos(ne)*.12,Math.sin(ne)*.12-.52,0))}else T==="giggling"&&(L=[new v(-.4,-.4,0),new v(-.25,-.48,0),new v(0,-.62,0),new v(.25,-.48,0),new v(.4,-.4,0)]);let B=[];L.forEach(J=>B.push(J.x,J.y,J.z));let W=new Je;W.setPositions(B);let H=new rt(W,r);return H.computeLineDistances(),R.add(H),R}function E(){let T=[new v(0,1.4,0),new v(.4,1.35,0),new v(.7,1.2,0),new v(.9,1,0),new v(1,.8,0),new v(1.1,.5,0),new v(1.15,.2,0),new v(1.15,-.1,0),new v(1.1,-.3,0),new v(1,-.5,0),new v(.8,-.65,0),new v(.5,-.75,0),new v(.25,-.8,0),new v(0,-.82,0),new v(-.25,-.8,0),new v(-.5,-.75,0),new v(-.8,-.65,0),new v(-1,-.5,0),new v(-1.1,-.3,0),new v(-1.15,-.1,0),new v(-1.15,.2,0),new v(-1.1,.5,0),new v(-1,.8,0),new v(-.9,1,0),new v(-.7,1.2,0),new v(-.4,1.35,0),new v(0,1.4,0)],R=[];T.forEach(W=>R.push(W.x,W.y,W.z));let L=new Je;L.setPositions(R);let B=new rt(L,r);return B.computeLineDistances(),B.position.z=.6,B}function A(){let T=new tt,R=[new v(0,.1,0),new v(0,-.15,0)],L=[];R.forEach(ne=>L.push(ne.x,ne.y,ne.z));let B=new Je;B.setPositions(L);let W=new rt(B,r);W.computeLineDistances(),T.add(W);let H=[new v(-.1,-.15,0),new v(.1,-.15,0)],J=[];H.forEach(ne=>J.push(ne.x,ne.y,ne.z));let j=new Je;j.setPositions(J);let oe=new rt(j,r);return oe.computeLineDistances(),T.add(oe),T.position.z=1.2,T}function _(){let T=new tt,R=[new v(-.6,.5,0),new v(-.3,.5,0)],L=[];R.forEach(ne=>L.push(ne.x,ne.y,ne.z));let B=new Je;B.setPositions(L);let W=new rt(B,r);W.computeLineDistances(),T.add(W);let H=[new v(.3,.5,0),new v(.6,.5,0)],J=[];H.forEach(ne=>J.push(ne.x,ne.y,ne.z));let j=new Je;j.setPositions(J);let oe=new rt(j,r);return oe.computeLineDistances(),T.add(oe),T.position.z=1.1,T}function I(T){T?(g.children[0].position.y=.15,g.children[1].position.y=.15):(g.children[0].position.y=0,g.children[1].position.y=0)}function D(){let T=new tt,R=F(.2);R.position.set(.1,1.6,0),R.userData.originalY=1.6,T.add(R);let L=F(.3);L.position.set(.3,1.8,0),L.userData.originalY=1.8,T.add(L);let B=F(.4);return B.position.set(.5,2,0),B.userData.originalY=2,T.add(B),T}function F(T){let R=new tt,L=[new v(-T/2,T/2,0),new v(T/2,T/2,0)],B=[];L.forEach(ce=>B.push(ce.x,ce.y,ce.z));let W=new Je;W.setPositions(B);let H=new rt(W,r);H.computeLineDistances(),R.add(H);let J=[new v(T/2,T/2,0),new v(-T/2,-T/2,0)],j=[];J.forEach(ce=>j.push(ce.x,ce.y,ce.z));let oe=new Je;oe.setPositions(j);let ne=new rt(oe,r);ne.computeLineDistances(),R.add(ne);let U=[new v(-T/2,-T/2,0),new v(T/2,-T/2,0)],ve=[];U.forEach(ce=>ve.push(ce.x,ce.y,ce.z));let Se=new Je;Se.setPositions(ve);let me=new rt(Se,r);return me.computeLineDistances(),R.add(me),R}function G(){let T=new tt,R=O(.15);R.position.set(.1,1.5,0),R.userData.originalY=1.5,R.userData.originalX=.1,T.add(R);let L=C(.2);L.position.set(.25,1.7,0),L.userData.originalY=1.7,L.userData.originalX=.25,T.add(L);let B=O(.25);return B.position.set(.4,1.9,0),B.userData.originalY=1.9,B.userData.originalX=.4,T.add(B),T}function k(T){let R=new tt,L=8,B=[];for(let ve=0;ve<=L;ve++){let Se=ve/L*Math.PI*2;B.push(new v(Math.cos(Se)*T*.4,Math.sin(Se)*T*.6,0))}let W=[];B.forEach(ve=>W.push(ve.x,ve.y,ve.z));let H=new Je;H.setPositions(W);let J=new rt(H,r);J.computeLineDistances(),J.rotation.z=Math.PI/4,R.add(J);let j=[new v(T*.25,T*.25,0),new v(T*.25,T*1.5,0)],oe=[];j.forEach(ve=>oe.push(ve.x,ve.y,ve.z));let ne=new Je;ne.setPositions(oe);let U=new rt(ne,r);return U.computeLineDistances(),R.add(U),R}function O(T){let R=k(T),L=[new v(T*.25,T*1.5,0),new v(T*.8,T*1.2,0)],B=[];L.forEach(J=>B.push(J.x,J.y,J.z));let W=new Je;W.setPositions(B);let H=new rt(W,r);return H.computeLineDistances(),R.add(H),R}function C(T){return k(T)}}var Ie={MOUSE_SENSITIVITY_X:.05,MOUSE_SENSITIVITY_Y:.02,ROTATION_SPEED_NORMAL:.1,ROTATION_SPEED_WHISTLING:.03,ROTATION_SPEED_GIGGLING:.05,GIGGLE_DURATION_MS:2e3,GIGGLE_FREQUENCY:.02,GIGGLE_AMPLITUDE:.03,INACTIVITY_THRESHOLD_MS:1e4,ZZZ_FLOAT_SPEED:.18,ZZZ_RESET_Y:2.5,NOTE_FLOAT_SPEED_Y:.24,NOTE_FLOAT_SPEED_X:.06,NOTE_RESET_Y:2.5,WHISTLE_SWAY_SPEED:.5,WHISTLE_SWAY_AMOUNT:.02,PULSE_BASE_OPACITY:.7,PULSE_AMPLITUDE:.1,SLEEP_OPACITY:.8,LINE_WIDTH_BASE:1.5,SLEEP_HOURS_START:22,SLEEP_HOURS_END:6},ye={SLEEPING:"sleeping",WHISTLING:"whistling",NORMAL:"normal",GIGGLING:"giggling",AWED:"awed"},ka=.25,Zc=2;function cx(r,e){return 1-Math.pow(1-r,e*60)}function Jc(r,e,t){let{head:n,zzzGroup:i,musicNotesGroup:s,lineMaterial:o,state:a,baseY:l}=r,c=Math.min(Math.max(e,0),.1),h=Ie.ROTATION_SPEED_NORMAL;if(a===ye.WHISTLING||a===ye.AWED?h=Ie.ROTATION_SPEED_WHISTLING:a===ye.GIGGLING&&(h=Ie.ROTATION_SPEED_GIGGLING),a!==ye.SLEEPING){let u=r.mouseX*Ie.MOUSE_SENSITIVITY_X,d=r.mouseY*Ie.MOUSE_SENSITIVITY_Y,f=cx(h,c),m=a===ye.WHISTLING?Math.sin(t*Ie.WHISTLE_SWAY_SPEED)*Ie.WHISTLE_SWAY_AMOUNT/h:0;n.rotation.y+=(u+m-n.rotation.y)*f,n.rotation.x+=(d-n.rotation.x)*f}if(n.position.y=l,a===ye.SLEEPING){for(let u of i.children){let d=u.userData.originalY,f=Ie.ZZZ_RESET_Y-d;u.position.y=d+(u.position.y-d+Ie.ZZZ_FLOAT_SPEED*c)%f}n.rotation.set(0,0,0)}else if(a===ye.WHISTLING)for(let u of s.children){let d=Ie.NOTE_RESET_Y-u.userData.originalY,f=u.position.y;if(u.position.y+=Ie.NOTE_FLOAT_SPEED_Y*c,u.position.x+=Ie.NOTE_FLOAT_SPEED_X*c,u.position.y>=Ie.NOTE_RESET_Y){let m=(f-u.userData.originalY+Ie.NOTE_FLOAT_SPEED_Y*c)%d;u.position.y=u.userData.originalY+m,u.position.x=u.userData.originalX+m*Ie.NOTE_FLOAT_SPEED_X/Ie.NOTE_FLOAT_SPEED_Y}}else if(a===ye.GIGGLING){let u=(t-r.giggleStart)*1e3,d=Math.min(u/Ie.GIGGLE_DURATION_MS,1);if(n.position.y+=Math.sin(u*Ie.GIGGLE_FREQUENCY)*Ie.GIGGLE_AMPLITUDE*(1-d*d),d>=1)return!0}return o.opacity=a===ye.SLEEPING?Ie.SLEEP_OPACITY:Ie.PULSE_BASE_OPACITY+Math.sin(t)*Ie.PULSE_AMPLITUDE,!1}function $c({requestFrame:r,cancelFrame:e,update:t,render:n}){let i=null,s=null,o=0,a=!1;function l(c){if(i=null,!a)return;let h=s===null?0:Math.min((c-s)/1e3,.1);s=c,o+=h,t(h,o),n(),a&&(i=r(l))}return{get elapsed(){return o},start(){a||(a=!0,s=null,i=r(l))},stop(){a=!1,i!==null&&e(i),i=null,s=null}}}var jc=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","KeyB","KeyA"];function Qc({documentObject:r,container:e,canvas:t,socialLinks:n,onActivity:i,onPointerMove:s,onActivate:o,onSocialEnter:a,onSocialLeave:l,onKonami:c}){let h=[],u=0;function d(m,x,y,g){m&&(m.addEventListener(x,y,g),h.push(()=>m.removeEventListener(x,y,g)))}d(r,"pointermove",m=>{m.pointerType!=="touch"&&(i(),s(m,!1))},{passive:!0}),d(r,"pointerdown",m=>{m.pointerType!=="touch"&&i(m)},{passive:!0});function f(m){i(m),m.touches.length===1&&s(m.touches[0],!0)}return d(r,"touchstart",f,{passive:!0}),d(r,"touchmove",f,{passive:!0}),d(t,"click",m=>o(m)),d(e,"keydown",m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),o())}),d(r,"keydown",m=>{i(m),m.code===jc[u]?(u++,u===jc.length&&(c(),u=0)):u=0}),d(n,"pointerenter",m=>{m.pointerType!=="touch"&&a()}),d(n,"pointerleave",m=>{m.pointerType!=="touch"&&l()}),()=>h.forEach(m=>m())}function hx(r){let{innerWidth:e,innerHeight:t}=r,n=r.devicePixelRatio||1;return{width:e,height:t,pixelRatio:n,cappedPixelRatio:Math.min(n,Zc),scaleMultiplier:n>=2?1.06:1,baseY:e>t&&t<=500?-.1:-.15}}function Kc({container:r,renderer:e,camera:t,lineMaterial:n,head:i,nameElement:s,windowObject:o}){let a=hx(o),l=Math.max(1,r.clientWidth),c=Math.max(1,Math.round(r.clientHeight*(1+ka)));e.getPixelRatio()!==a.cappedPixelRatio&&e.setPixelRatio(a.cappedPixelRatio),e.setSize(l,c),t.aspect=l/c,t.position.set(0,ka*.5,5.5),t.updateProjectionMatrix(),t.updateMatrixWorld(!0),n.resolution.set(l,c),n.linewidth=Ie.LINE_WIDTH_BASE*(a.pixelRatio>=2?1.12:1)*c/Math.max(1,r.clientHeight)/a.cappedPixelRatio;let h=parseFloat(o.getComputedStyle(s).fontSize),u=Math.max(.5,Math.min(1.8,1.35*(h/83.2)*a.scaleMultiplier));return i.scale.setScalar(u),a}function eh(r,e){let t;function n(){t?.removeEventListener("change",i),t=r.matchMedia(`(resolution: ${r.devicePixelRatio||1}dppx)`),t.addEventListener("change",i)}function i(){n(),e()}return n(),()=>t.removeEventListener("change",i)}function ty({windowObject:r=window,documentObject:e=document,createRenderer:t=n=>new Be(n)}={}){let n=e.getElementById("head-container"),i=e.querySelector(".name");if(!n||!i)throw new Error("Avatar elements are missing.");let s=new li,o=new ot(45,1,.1,1e3);s.add(o);let a=t({antialias:!0,alpha:!0,preserveDrawingBuffer:!1});a.setClearColor(0,1),n.appendChild(a.domElement);let l=new nn({color:65280,transparent:!0,opacity:.8});l.color.setRGB(0,1,.1);let c=Yc(l),{head:h,headRaycastTarget:u,zzzGroup:d,musicNotesGroup:f,archEyebrows:m}=c;s.add(h,d,f);let x={head:h,zzzGroup:d,musicNotesGroup:f,lineMaterial:l,state:null,baseY:-.15,mouseX:0,mouseY:0,giggleStart:0},y=r.matchMedia("(prefers-reduced-motion: reduce)"),g=new Intl.DateTimeFormat("en-US",{timeZone:"America/Los_Angeles",hour:"numeric",hourCycle:"h23"}),p=new ws,M=new $,E=[],A,_=!0,I=r.performance.now(),D=null,F="auto-btn",G=null,k=null,O=!0,C=!1,T=$c({requestFrame:Q=>r.requestAnimationFrame(Q),cancelFrame:Q=>r.cancelAnimationFrame(Q),update(Q,he){Jc(x,Q,he)&&H(ye.NORMAL)},render:R});function R(){a.render(s,o)}function L(){return!C&&O&&!e.hidden&&!y.matches}function B(){let Q=Number(g.format(new Date));return Q>=Ie.SLEEP_HOURS_START||Q<Ie.SLEEP_HOURS_END}function W(Q){F=Q,D&&(D.querySelector("button.active")?.classList.remove("active"),D.querySelector(`#${Q}`)?.classList.add("active"))}function H(Q){x.state!==Q&&(x.state=Q,h.position.y=x.baseY,c.leftEyeOpen.visible=c.rightEyeOpen.visible=Q!==ye.SLEEPING,c.leftEyeClosed.visible=c.rightEyeClosed.visible=Q===ye.SLEEPING,c.normalMouth.visible=Q===ye.NORMAL||Q===ye.SLEEPING,c.whistlingMouth.visible=Q===ye.WHISTLING,c.gigglingMouth.visible=Q===ye.GIGGLING,c.awedMouth.visible=Q===ye.AWED,c.eyebrows.visible=Q!==ye.SLEEPING,d.visible=Q===ye.SLEEPING,f.visible=Q===ye.WHISTLING,m(Q===ye.GIGGLING||Q===ye.AWED),Q===ye.WHISTLING&&f.children.forEach((he,pe)=>{he.position.y=1.5+pe*.2,he.position.x=.1+pe*.15}),Q===ye.GIGGLING&&(x.giggleStart=T.elapsed))}function J(){if(!_)return;let Q=B();x.state===ye.AWED||x.state===ye.GIGGLING||(Q?H(ye.SLEEPING):x.state===null||x.state===ye.SLEEPING?H(ye.NORMAL):x.state===ye.NORMAL&&r.performance.now()-I>=Ie.INACTIVITY_THRESHOLD_MS&&H(ye.WHISTLING))}function j(Q){I=r.performance.now();let he=x.state===ye.WHISTLING||["keydown","touchstart"].includes(Q?.type)&&x.state===ye.AWED;L()&&_&&he&&!B()&&H(ye.NORMAL)}function oe(Q){if(!(!L()||B()||[ye.SLEEPING,ye.GIGGLING,ye.AWED].includes(x.state))){if(Q){let he=a.domElement.getBoundingClientRect();if(M.set((Q.clientX-he.left)/he.width*2-1,-((Q.clientY-he.top)/he.height)*2+1),s.updateMatrixWorld(!0),p.setFromCamera(M,o),!p.intersectObject(u,!1).length)return}I=r.performance.now(),H(ye.GIGGLING)}}function ne(){if(D){D.hidden=!D.hidden;return}D=e.createElement("div"),D.id="state-toggle",D.setAttribute("data-nosnippet","");let Q=e.createElement("h3");Q.textContent="Head States",D.appendChild(Q);for(let[he,pe,Y]of[["normal-btn","Normal",ye.NORMAL],["whistling-btn","Whistling",ye.WHISTLING],["sleeping-btn","Sleeping",ye.SLEEPING],["auto-btn","Auto",null]]){let K=e.createElement("button");K.id=he,K.type="button",K.textContent=pe,K.addEventListener("click",()=>{_=Y===null,Y?H(Y):J(),W(he),y.matches&&Se()}),D.appendChild(K)}e.body.appendChild(D),W(F)}function U(){k=null,A=Kc({container:n,renderer:a,camera:o,lineMaterial:l,head:h,nameElement:i,windowObject:r}),x.baseY=A.baseY,h.position.y=x.baseY,y.matches?Se():R()}function ve(){k===null&&!C&&(k=r.requestAnimationFrame(U))}function Se(){h.rotation.set(0,0,0),h.position.y=x.baseY,x.mouseX=x.mouseY=0,d.visible=f.visible=!1,l.opacity=Ie.SLEEP_OPACITY,R()}function me(){if(T.stop(),G!==null&&r.clearInterval(G),G=null,!L()){x.state===ye.AWED&&H(ye.NORMAL),y.matches&&O&&!e.hidden&&Se();return}let Q=x.state;x.state=null,H(Q||ye.NORMAL),I=r.performance.now(),J(),G=r.setInterval(J,1e3),T.start()}function ce(Q,he,pe){Q.addEventListener(he,pe),E.push(()=>Q.removeEventListener(he,pe))}if(E.push(Qc({documentObject:e,container:n,canvas:a.domElement,socialLinks:e.querySelector(".social-links"),onActivity:j,onPointerMove(Q,he){if(!L())return;let pe=he?a.domElement.getBoundingClientRect():null;x.mouseX=(Q.clientX-(pe?pe.left+pe.width/2:A.width/2))/50,x.mouseY=(Q.clientY-(pe?pe.top+pe.height/2:A.height/2))/50},onActivate:oe,onSocialEnter(){L()&&!B()&&[ye.NORMAL,ye.WHISTLING].includes(x.state)&&(I=r.performance.now(),H(ye.AWED))},onSocialLeave(){x.state===ye.AWED&&(H(ye.NORMAL),L()&&J())},onKonami:ne})),ce(r,"resize",ve),ce(y,"change",me),ce(e,"visibilitychange",me),ce(r,"pagehide",()=>{O=!1,me()}),ce(r,"pageshow",()=>{O=!0,ve(),me()}),E.push(eh(r,ve)),r.ResizeObserver){let Q=new r.ResizeObserver(ve);Q.observe(n),Q.observe(i),E.push(()=>Q.disconnect())}return J(),U(),me(),function(){C=!0,T.stop(),G!==null&&r.clearInterval(G),k!==null&&r.cancelAnimationFrame(k),E.forEach(Y=>Y());let he=new Set,pe=new Set([l]);s.traverse(Y=>{Y.geometry&&he.add(Y.geometry),Y.material&&pe.add(Y.material)}),he.forEach(Y=>Y.dispose()),pe.forEach(Y=>Y.dispose()),a.dispose(),a.domElement.remove(),D?.remove()}}export{ty as initHead};
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
