// Garden Gnome Software - Skin
// Pano2VR pro 4.5.0/10633
// Filename: simplex2.ggsk
// Generated 周日 5月 29 23:29:29 2022

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggType='container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-65 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -142px;';
		hs+='top:  -65px;';
		hs+='width: 286px;';
		hs+='height: 50px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._controller.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg';
		this._up.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  -5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'images/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.svg';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.svg';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg';
		this._down.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'images/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.svg';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.svg';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg';
		this._left.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'images/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.svg';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.svg';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg';
		this._right.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'images/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.svg';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.svg';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='inherit';
			me._tt_zoomin.ggVisible=true;
			me._zoomin__img.src=basePath + 'images/zoomin__o.svg';
		}
		this._zoomin.onmouseout=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me._zoomin__img.src=basePath + 'images/zoomin.svg';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin__text=document.createElement('div');
		this._tt_zoomin.className='ggskin ggskin_textdiv';
		this._tt_zoomin.ggTextDiv=this._tt_zoomin__text;
		this._tt_zoomin.ggId="tt_zoomin";
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text';
		this._tt_zoomin.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin__text.setAttribute('style',hs);
		this._tt_zoomin__text.innerHTML="Zoom In";
		this._tt_zoomin.appendChild(this._tt_zoomin__text);
		this._tt_zoomin_white=document.createElement('div');
		this._tt_zoomin_white__text=document.createElement('div');
		this._tt_zoomin_white.className='ggskin ggskin_textdiv';
		this._tt_zoomin_white.ggTextDiv=this._tt_zoomin_white__text;
		this._tt_zoomin_white.ggId="tt_zoomin_white";
		this._tt_zoomin_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin_white.ggVisible=true;
		this._tt_zoomin_white.className='ggskin ggskin_text';
		this._tt_zoomin_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_zoomin_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin_white__text.setAttribute('style',hs);
		this._tt_zoomin_white__text.innerHTML="Zoom In";
		this._tt_zoomin_white.appendChild(this._tt_zoomin_white__text);
		this._tt_zoomin.appendChild(this._tt_zoomin_white);
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 120px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='inherit';
			me._tt_zoomout.ggVisible=true;
			me._zoomout__img.src=basePath + 'images/zoomout__o.svg';
		}
		this._zoomout.onmouseout=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me._zoomout__img.src=basePath + 'images/zoomout.svg';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout__text=document.createElement('div');
		this._tt_zoomout.className='ggskin ggskin_textdiv';
		this._tt_zoomout.ggTextDiv=this._tt_zoomout__text;
		this._tt_zoomout.ggId="tt_zoomout";
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text';
		this._tt_zoomout.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout__text.setAttribute('style',hs);
		this._tt_zoomout__text.innerHTML="Zoom Out";
		this._tt_zoomout.appendChild(this._tt_zoomout__text);
		this._tt_zoomout_white=document.createElement('div');
		this._tt_zoomout_white__text=document.createElement('div');
		this._tt_zoomout_white.className='ggskin ggskin_textdiv';
		this._tt_zoomout_white.ggTextDiv=this._tt_zoomout_white__text;
		this._tt_zoomout_white.ggId="tt_zoomout_white";
		this._tt_zoomout_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout_white.ggVisible=true;
		this._tt_zoomout_white.className='ggskin ggskin_text';
		this._tt_zoomout_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_zoomout_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout_white__text.setAttribute('style',hs);
		this._tt_zoomout_white__text.innerHTML="Zoom Out";
		this._tt_zoomout_white.appendChild(this._tt_zoomout_white__text);
		this._tt_zoomout.appendChild(this._tt_zoomout_white);
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg';
		this._autorotate.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.svg');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='inherit';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.src=basePath + 'images/autorotate__o.svg';
		}
		this._autorotate.onmouseout=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.src=basePath + 'images/autorotate.svg';
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate__text=document.createElement('div');
		this._tt_autorotate.className='ggskin ggskin_textdiv';
		this._tt_autorotate.ggTextDiv=this._tt_autorotate__text;
		this._tt_autorotate.ggId="tt_autorotate";
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		this._tt_autorotate.className='ggskin ggskin_text';
		this._tt_autorotate.ggType='text';
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  36px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_autorotate.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate__text.setAttribute('style',hs);
		this._tt_autorotate__text.innerHTML="Start\/Stop Autorotation";
		this._tt_autorotate.appendChild(this._tt_autorotate__text);
		this._tt_autorotate_white=document.createElement('div');
		this._tt_autorotate_white__text=document.createElement('div');
		this._tt_autorotate_white.className='ggskin ggskin_textdiv';
		this._tt_autorotate_white.ggTextDiv=this._tt_autorotate_white__text;
		this._tt_autorotate_white.ggId="tt_autorotate_white";
		this._tt_autorotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate_white.ggVisible=true;
		this._tt_autorotate_white.className='ggskin ggskin_text';
		this._tt_autorotate_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_autorotate_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate_white__text.setAttribute('style',hs);
		this._tt_autorotate_white__text.innerHTML="Start\/Stop Autorotation";
		this._tt_autorotate_white.appendChild(this._tt_autorotate_white__text);
		this._tt_autorotate.appendChild(this._tt_autorotate_white);
		this._autorotate.appendChild(this._tt_autorotate);
		this._controller.appendChild(this._autorotate);
		this._info=document.createElement('div');
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg';
		this._info.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 190px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._info.setAttribute('style',hs);
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info.onmouseover=function () {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility='inherit';
			me._tt_info.ggVisible=true;
			me._info__img.src=basePath + 'images/info__o.svg';
		}
		this._info.onmouseout=function () {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility='hidden';
			me._tt_info.ggVisible=false;
			me._info__img.src=basePath + 'images/info.svg';
		}
		this._tt_info=document.createElement('div');
		this._tt_info__text=document.createElement('div');
		this._tt_info.className='ggskin ggskin_textdiv';
		this._tt_info.ggTextDiv=this._tt_info__text;
		this._tt_info.ggId="tt_info";
		this._tt_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info.ggVisible=false;
		this._tt_info.className='ggskin ggskin_text';
		this._tt_info.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_info.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info__text.setAttribute('style',hs);
		this._tt_info__text.innerHTML="Show Information";
		this._tt_info.appendChild(this._tt_info__text);
		this._tt_info_white=document.createElement('div');
		this._tt_info_white__text=document.createElement('div');
		this._tt_info_white.className='ggskin ggskin_textdiv';
		this._tt_info_white.ggTextDiv=this._tt_info_white__text;
		this._tt_info_white.ggId="tt_info_white";
		this._tt_info_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info_white.ggVisible=true;
		this._tt_info_white.className='ggskin ggskin_text';
		this._tt_info_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_info_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info_white__text.setAttribute('style',hs);
		this._tt_info_white__text.innerHTML="Show Information";
		this._tt_info_white.appendChild(this._tt_info_white__text);
		this._tt_info.appendChild(this._tt_info_white);
		this._info.appendChild(this._tt_info);
		this._controller.appendChild(this._info);
		this._movemode=document.createElement('div');
		this._movemode.ggId="movemode";
		this._movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode.ggVisible=true;
		this._movemode.className='ggskin ggskin_svg';
		this._movemode.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 220px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._movemode.setAttribute('style',hs);
		this._movemode__img=document.createElement('img');
		this._movemode__img.className='ggskin ggskin_svg';
		this._movemode__img.setAttribute('src',basePath + 'images/movemode.svg');
		this._movemode__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._movemode__img['ondragstart']=function() { return false; };
		this._movemode.appendChild(this._movemode__img);
		this._movemode.onclick=function () {
			me.player.changeViewMode(2);
		}
		this._movemode.onmouseover=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='inherit';
			me._tt_movemode.ggVisible=true;
			me._movemode__img.src=basePath + 'images/movemode__o.svg';
		}
		this._movemode.onmouseout=function () {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='hidden';
			me._tt_movemode.ggVisible=false;
			me._movemode__img.src=basePath + 'images/movemode.svg';
		}
		this._tt_movemode=document.createElement('div');
		this._tt_movemode__text=document.createElement('div');
		this._tt_movemode.className='ggskin ggskin_textdiv';
		this._tt_movemode.ggTextDiv=this._tt_movemode__text;
		this._tt_movemode.ggId="tt_movemode";
		this._tt_movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode.ggVisible=false;
		this._tt_movemode.className='ggskin ggskin_text';
		this._tt_movemode.ggType='text';
		hs ='position:absolute;';
		hs+='left: -65px;';
		hs+='top:  36px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_movemode.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode__text.setAttribute('style',hs);
		this._tt_movemode__text.innerHTML="Change Control Mode";
		this._tt_movemode.appendChild(this._tt_movemode__text);
		this._tt_movemode_white=document.createElement('div');
		this._tt_movemode_white__text=document.createElement('div');
		this._tt_movemode_white.className='ggskin ggskin_textdiv';
		this._tt_movemode_white.ggTextDiv=this._tt_movemode_white__text;
		this._tt_movemode_white.ggId="tt_movemode_white";
		this._tt_movemode_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode_white.ggVisible=true;
		this._tt_movemode_white.className='ggskin ggskin_text';
		this._tt_movemode_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_movemode_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode_white__text.setAttribute('style',hs);
		this._tt_movemode_white__text.innerHTML="Change Control Mode";
		this._tt_movemode_white.appendChild(this._tt_movemode_white__text);
		this._tt_movemode.appendChild(this._tt_movemode_white);
		this._movemode.appendChild(this._tt_movemode);
		this._controller.appendChild(this._movemode);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 250px;';
		hs+='top:  10px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='inherit';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.svg';
		}
		this._fullscreen.onmouseout=function () {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.src=basePath + 'images/fullscreen.svg';
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text';
		this._tt_fullscreen.ggType='text';
		hs ='position:absolute;';
		hs+='left: -55px;';
		hs+='top:  36px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen__text.innerHTML="Fullscreen";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		this._tt_fullscreen_white=document.createElement('div');
		this._tt_fullscreen_white__text=document.createElement('div');
		this._tt_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white.ggTextDiv=this._tt_fullscreen_white__text;
		this._tt_fullscreen_white.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white.ggVisible=true;
		this._tt_fullscreen_white.className='ggskin ggskin_text';
		this._tt_fullscreen_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white__text.setAttribute('style',hs);
		this._tt_fullscreen_white__text.innerHTML="Fullscreen";
		this._tt_fullscreen_white.appendChild(this._tt_fullscreen_white__text);
		this._tt_fullscreen.appendChild(this._tt_fullscreen_white);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container';
		this._hide_template.ggType='container';
		hs ='position:absolute;';
		hs+='left: 127px;';
		hs+='top:  312px;';
		hs+='width: 187px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._hide_template.setAttribute('style',hs);
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark';
		this._markertemplate.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 60px;';
		hs+='top:  0px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='inherit';
			me._marker_title.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text';
		this._marker_title.ggType='text';
		this._marker_title.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.style.width=this.ggTextDiv.offsetWidth + 'px';
			this.style.height=this.ggTextDiv.offsetHeight + 'px';
			this.ggTextDiv.style.left=(0 + (149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  35px;';
		hs+='width: 145px;';
		hs+='height: 17px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._marker_title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title.ggUpdateText=function() {
			var hs=me.player.userdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._marker_title.ggUpdateText();
		this._marker_title.appendChild(this._marker_title__text);
		this._markertemplate.appendChild(this._marker_title);
		this._hide_template.appendChild(this._markertemplate);
		this._marker_active=document.createElement('div');
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_svg';
		this._marker_active.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 105px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_svg';
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.svg');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 31px;-webkit-user-drag:none;');
		this._marker_active__img['ondragstart']=function() { return false; };
		this._marker_active.appendChild(this._marker_active__img);
		this._hide_template.appendChild(this._marker_active);
		this._marker_normal=document.createElement('div');
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_svg';
		this._marker_normal.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 140px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_svg';
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.svg');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 32px;-webkit-user-drag:none;');
		this._marker_normal__img['ondragstart']=function() { return false; };
		this._marker_normal.appendChild(this._marker_normal__img);
		this._hide_template.appendChild(this._marker_normal);
		this.divSkin.appendChild(this._hide_template);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=true;
		this._container_1.className='ggskin ggskin_container';
		this._container_1.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -59px;';
		hs+='width: 810px;';
		hs+='height: 220px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._container_1.setAttribute('style',hs);
		this.__7=document.createElement('div');
		this.__7.ggId="7";
		this.__7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__7.ggVisible=true;
		this.__7.className='ggskin ggskin_mark';
		this.__7.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 711px;';
		hs+='top:  106px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__7.setAttribute('style',hs);
		this.__7.ggMarkerNodeId='{node5}';
		nodeMarker.push(this.__7);
		this.__7.onclick=function () {
			me.player.openNext('{node5}');
		}
		this.__7.ggActivate=function () {
			me.__7.style[domTransition]='none';
			me.__7.style.opacity='1';
			me.__7.style.visibility=me.__7.ggVisible?'inherit':'hidden';
		}
		this.__7.ggDeactivate=function () {
			me.__7.style[domTransition]='none';
			me.__7.style.opacity='0.6';
			me.__7.style.visibility=me.__7.ggVisible?'inherit':'hidden';
		}
		this._rectangle_7=document.createElement('div');
		this._rectangle_7.ggId="Rectangle 7";
		this._rectangle_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_7.ggVisible=true;
		this._rectangle_7.className='ggskin ggskin_rectangle';
		this._rectangle_7.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  -47px;';
		hs+='width: 109px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_7.setAttribute('style',hs);
		this._image_9=document.createElement('div');
		this._image_9.ggId="Image 9";
		this._image_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_9.ggVisible=true;
		this._image_9.className='ggskin ggskin_image';
		this._image_9.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_9.setAttribute('style',hs);
		this._image_9__img=document.createElement('img');
		this._image_9__img.className='ggskin ggskin_image';
		this._image_9__img.setAttribute('src',basePath + 'images/image_9.png');
		this._image_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_9__img.className='ggskin ggskin_image';
		this._image_9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_9__img);
		this._image_9.appendChild(this._image_9__img);
		this._rectangle_7.appendChild(this._image_9);
		this.__7.appendChild(this._rectangle_7);
		this._container_1.appendChild(this.__7);
		this.__6=document.createElement('div');
		this.__6.ggId="6";
		this.__6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__6.ggVisible=true;
		this.__6.className='ggskin ggskin_mark';
		this.__6.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 602px;';
		hs+='top:  102px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__6.setAttribute('style',hs);
		this.__6.ggMarkerNodeId='{node4}';
		nodeMarker.push(this.__6);
		this.__6.onclick=function () {
			me.player.openNext('{node4}');
		}
		this.__6.ggActivate=function () {
			me.__6.style[domTransition]='none';
			me.__6.style.opacity='1';
			me.__6.style.visibility=me.__6.ggVisible?'inherit':'hidden';
		}
		this.__6.ggDeactivate=function () {
			me.__6.style[domTransition]='none';
			me.__6.style.opacity='0.6';
			me.__6.style.visibility=me.__6.ggVisible?'inherit':'hidden';
		}
		this._rectangle_6=document.createElement('div');
		this._rectangle_6.ggId="Rectangle 6";
		this._rectangle_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_6.ggVisible=true;
		this._rectangle_6.className='ggskin ggskin_rectangle';
		this._rectangle_6.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -51px;';
		hs+='top:  -43px;';
		hs+='width: 109px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_6.setAttribute('style',hs);
		this._image_8=document.createElement('div');
		this._image_8.ggId="Image 8";
		this._image_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_8.ggVisible=true;
		this._image_8.className='ggskin ggskin_image';
		this._image_8.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_8.setAttribute('style',hs);
		this._image_8__img=document.createElement('img');
		this._image_8__img.className='ggskin ggskin_image';
		this._image_8__img.setAttribute('src',basePath + 'images/image_8.png');
		this._image_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_8__img.className='ggskin ggskin_image';
		this._image_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_8__img);
		this._image_8.appendChild(this._image_8__img);
		this._rectangle_6.appendChild(this._image_8);
		this.__6.appendChild(this._rectangle_6);
		this._container_1.appendChild(this.__6);
		this.__5=document.createElement('div');
		this.__5.ggId="5";
		this.__5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__5.ggVisible=true;
		this.__5.className='ggskin ggskin_mark';
		this.__5.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 483px;';
		hs+='top:  103px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__5.setAttribute('style',hs);
		this.__5.ggMarkerNodeId='{node3}';
		nodeMarker.push(this.__5);
		this.__5.onclick=function () {
			me.player.openNext('{node3}');
		}
		this.__5.ggActivate=function () {
			me.__5.style[domTransition]='none';
			me.__5.style.opacity='1';
			me.__5.style.visibility=me.__5.ggVisible?'inherit':'hidden';
		}
		this.__5.ggDeactivate=function () {
			me.__5.style[domTransition]='none';
			me.__5.style.opacity='0.6';
			me.__5.style.visibility=me.__5.ggVisible?'inherit':'hidden';
		}
		this._rectangle_5=document.createElement('div');
		this._rectangle_5.ggId="Rectangle 5";
		this._rectangle_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_5.ggVisible=true;
		this._rectangle_5.className='ggskin ggskin_rectangle';
		this._rectangle_5.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -43px;';
		hs+='top:  -44px;';
		hs+='width: 109px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_5.setAttribute('style',hs);
		this._image_7=document.createElement('div');
		this._image_7.ggId="Image 7";
		this._image_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_7.ggVisible=true;
		this._image_7.className='ggskin ggskin_image';
		this._image_7.ggType='image';
		hs ='position:absolute;';
		hs+='left: 6px;';
		hs+='top:  4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_7.setAttribute('style',hs);
		this._image_7__img=document.createElement('img');
		this._image_7__img.className='ggskin ggskin_image';
		this._image_7__img.setAttribute('src',basePath + 'images/image_7.png');
		this._image_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_7__img.className='ggskin ggskin_image';
		this._image_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_7__img);
		this._image_7.appendChild(this._image_7__img);
		this._rectangle_5.appendChild(this._image_7);
		this.__5.appendChild(this._rectangle_5);
		this._container_1.appendChild(this.__5);
		this.__4=document.createElement('div');
		this.__4.ggId="4";
		this.__4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__4.ggVisible=true;
		this.__4.className='ggskin ggskin_mark';
		this.__4.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 388px;';
		hs+='top:  104px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__4.setAttribute('style',hs);
		this.__4.ggMarkerNodeId='{node2}';
		nodeMarker.push(this.__4);
		this.__4.onclick=function () {
			me.player.openNext('{node2}');
		}
		this.__4.ggActivate=function () {
			me.__4.style[domTransition]='none';
			me.__4.style.opacity='1';
			me.__4.style.visibility=me.__4.ggVisible?'inherit':'hidden';
		}
		this.__4.ggDeactivate=function () {
			me.__4.style[domTransition]='none';
			me.__4.style.opacity='0.6';
			me.__4.style.visibility=me.__4.ggVisible?'inherit':'hidden';
		}
		this._rectangle_4=document.createElement('div');
		this._rectangle_4.ggId="Rectangle 4";
		this._rectangle_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_4.ggVisible=true;
		this._rectangle_4.className='ggskin ggskin_rectangle';
		this._rectangle_4.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -58px;';
		hs+='top:  -45px;';
		hs+='width: 109px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_4.setAttribute('style',hs);
		this._image_6=document.createElement('div');
		this._image_6.ggId="Image 6";
		this._image_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_6.ggVisible=true;
		this._image_6.className='ggskin ggskin_image';
		this._image_6.ggType='image';
		hs ='position:absolute;';
		hs+='left: 6px;';
		hs+='top:  4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_6.setAttribute('style',hs);
		this._image_6__img=document.createElement('img');
		this._image_6__img.className='ggskin ggskin_image';
		this._image_6__img.setAttribute('src',basePath + 'images/image_6.png');
		this._image_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_6__img.className='ggskin ggskin_image';
		this._image_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_6__img);
		this._image_6.appendChild(this._image_6__img);
		this._rectangle_4.appendChild(this._image_6);
		this.__4.appendChild(this._rectangle_4);
		this._container_1.appendChild(this.__4);
		this.__3=document.createElement('div');
		this.__3.ggId="3";
		this.__3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__3.ggVisible=true;
		this.__3.className='ggskin ggskin_mark';
		this.__3.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 272px;';
		hs+='top:  99px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__3.setAttribute('style',hs);
		this.__3.ggMarkerNodeId='{node1}';
		nodeMarker.push(this.__3);
		this.__3.onclick=function () {
			me.player.openNext('{node1}');
		}
		this.__3.ggActivate=function () {
			me.__3.style[domTransition]='none';
			me.__3.style.opacity='1';
			me.__3.style.visibility=me.__3.ggVisible?'inherit':'hidden';
		}
		this.__3.ggDeactivate=function () {
			me.__3.style[domTransition]='none';
			me.__3.style.opacity='0.6';
			me.__3.style.visibility=me.__3.ggVisible?'inherit':'hidden';
		}
		this._rectangle_3=document.createElement('div');
		this._rectangle_3.ggId="Rectangle 3";
		this._rectangle_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_3.ggVisible=true;
		this._rectangle_3.className='ggskin ggskin_rectangle';
		this._rectangle_3.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -52px;';
		hs+='top:  -40px;';
		hs+='width: 109px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_3.setAttribute('style',hs);
		this._image_12=document.createElement('div');
		this._image_12.ggId="Image 12";
		this._image_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_12.ggVisible=true;
		this._image_12.className='ggskin ggskin_image';
		this._image_12.ggType='image';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_12.setAttribute('style',hs);
		this._image_12__img=document.createElement('img');
		this._image_12__img.className='ggskin ggskin_image';
		this._image_12__img.setAttribute('src',basePath + 'images/image_12.png');
		this._image_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_12__img.className='ggskin ggskin_image';
		this._image_12__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_12__img);
		this._image_12.appendChild(this._image_12__img);
		this._rectangle_3.appendChild(this._image_12);
		this.__3.appendChild(this._rectangle_3);
		this._container_1.appendChild(this.__3);
		this.__2=document.createElement('div');
		this.__2.ggId="2";
		this.__2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__2.ggVisible=true;
		this.__2.className='ggskin ggskin_mark';
		this.__2.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 159px;';
		hs+='top:  107px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__2.setAttribute('style',hs);
		this.__2.ggMarkerNodeId='{node7}';
		nodeMarker.push(this.__2);
		this.__2.onclick=function () {
			me.player.openNext('{node7}');
		}
		this.__2.ggActivate=function () {
			me.__2.style[domTransition]='none';
			me.__2.style.opacity='1';
			me.__2.style.visibility=me.__2.ggVisible?'inherit':'hidden';
		}
		this.__2.ggDeactivate=function () {
			me.__2.style[domTransition]='none';
			me.__2.style.opacity='0.6';
			me.__2.style.visibility=me.__2.ggVisible?'inherit':'hidden';
		}
		this._rectangle_2=document.createElement('div');
		this._rectangle_2.ggId="Rectangle 2";
		this._rectangle_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_2.ggVisible=true;
		this._rectangle_2.className='ggskin ggskin_rectangle';
		this._rectangle_2.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -49px;';
		hs+='top:  -48px;';
		hs+='width: 109px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_2.setAttribute('style',hs);
		this._image_11=document.createElement('div');
		this._image_11.ggId="Image 11";
		this._image_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_11.ggVisible=true;
		this._image_11.className='ggskin ggskin_image';
		this._image_11.ggType='image';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_11.setAttribute('style',hs);
		this._image_11__img=document.createElement('img');
		this._image_11__img.className='ggskin ggskin_image';
		this._image_11__img.setAttribute('src',basePath + 'images/image_11.png');
		this._image_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_11__img.className='ggskin ggskin_image';
		this._image_11__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_11__img);
		this._image_11.appendChild(this._image_11__img);
		this._rectangle_2.appendChild(this._image_11);
		this.__2.appendChild(this._rectangle_2);
		this._container_1.appendChild(this.__2);
		this.__1=document.createElement('div');
		this.__1.ggId="1";
		this.__1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__1.ggVisible=true;
		this.__1.className='ggskin ggskin_mark';
		this.__1.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 51px;';
		hs+='top:  106px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__1.setAttribute('style',hs);
		this.__1.ggMarkerNodeId='{node6}';
		nodeMarker.push(this.__1);
		this.__1.onclick=function () {
			me.player.openNext('{node6}');
		}
		this.__1.ggActivate=function () {
			me.__1.style[domTransition]='none';
			me.__1.style.opacity='1';
			me.__1.style.visibility=me.__1.ggVisible?'inherit':'hidden';
		}
		this.__1.ggDeactivate=function () {
			me.__1.style[domTransition]='none';
			me.__1.style.opacity='0.6';
			me.__1.style.visibility=me.__1.ggVisible?'inherit':'hidden';
		}
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle';
		this._rectangle_1.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -51px;';
		hs+='top:  -47px;';
		hs+='width: 109px;';
		hs+='height: 109px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_1.setAttribute('style',hs);
		this._image_10=document.createElement('div');
		this._image_10.ggId="Image 10";
		this._image_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_10.ggVisible=true;
		this._image_10.className='ggskin ggskin_image';
		this._image_10.ggType='image';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  4px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_10.setAttribute('style',hs);
		this._image_10__img=document.createElement('img');
		this._image_10__img.className='ggskin ggskin_image';
		this._image_10__img.setAttribute('src',basePath + 'images/image_10.png');
		this._image_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_10__img.className='ggskin ggskin_image';
		this._image_10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_10__img);
		this._image_10.appendChild(this._image_10__img);
		this._rectangle_1.appendChild(this._image_10);
		this.__1.appendChild(this._rectangle_1);
		this._container_1.appendChild(this.__1);
		this.divSkin.appendChild(this._container_1);
		this._markertemplate__normal=this._marker_normal.cloneNode(true);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left=0;
		this._markertemplate__normal.style.top=0;
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=this._marker_active.cloneNode(true);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left=0;
		this._markertemplate__active.style.top=0;
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this.__7.ggMarkerNormal=null;
		this.__7.ggMarkerActive=null;
		me.__7.style[domTransition]='none';
		me.__7.style.opacity='0.6';
		me.__7.style.visibility=me.__7.ggVisible?'inherit':'hidden';
		this.__6.ggMarkerNormal=null;
		this.__6.ggMarkerActive=null;
		me.__6.style[domTransition]='none';
		me.__6.style.opacity='0.6';
		me.__6.style.visibility=me.__6.ggVisible?'inherit':'hidden';
		this.__5.ggMarkerNormal=null;
		this.__5.ggMarkerActive=null;
		me.__5.style[domTransition]='none';
		me.__5.style.opacity='0.6';
		me.__5.style.visibility=me.__5.ggVisible?'inherit':'hidden';
		this.__4.ggMarkerNormal=null;
		this.__4.ggMarkerActive=null;
		me.__4.style[domTransition]='none';
		me.__4.style.opacity='0.6';
		me.__4.style.visibility=me.__4.ggVisible?'inherit':'hidden';
		this.__3.ggMarkerNormal=null;
		this.__3.ggMarkerActive=null;
		me.__3.style[domTransition]='none';
		me.__3.style.opacity='0.6';
		me.__3.style.visibility=me.__3.ggVisible?'inherit':'hidden';
		this.__2.ggMarkerNormal=null;
		this.__2.ggMarkerActive=null;
		me.__2.style[domTransition]='none';
		me.__2.style.opacity='0.6';
		me.__2.style.visibility=me.__2.ggVisible?'inherit':'hidden';
		this.__1.ggMarkerNormal=null;
		this.__1.ggMarkerActive=null;
		me.__1.style[domTransition]='none';
		me.__1.style.opacity='1';
		me.__1.style.visibility=me.__1.ggVisible?'inherit':'hidden';
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		this._marker_title.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="hotspot";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 467px;';
			hs+='top:  322px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_svg';
			this._hsimage.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -16px;';
			hs+='top:  -16px;';
			hs+='width: 42px;';
			hs+='height: 42px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_svg';
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.svg');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 42px;height: 42px;-webkit-user-drag:none;');
			this._hsimage__img['ondragstart']=function() { return false; };
			this._hsimage.appendChild(this._hsimage__img);
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggType='text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.width=this.ggTextDiv.offsetWidth + 'px';
				this.style.height=this.ggTextDiv.offsetHeight + 'px';
				this.ggTextDiv.style.left=(0 + (99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  20px;';
			hs+='width: 95px;';
			hs+='height: 17px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext__text.innerHTML=me.hotspot.title;
			this._hstext.appendChild(this._hstext__text);
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};