!function(t){var i=t;i._N2=i._N2||{_r:[],_d:[],r:function(){this._r.push(arguments)},d:function(){this._d.push(arguments)}};var n,s,h=t.document,a=(h.documentElement,t.setTimeout,t.clearTimeout,i._N2),r=h.createElement.bind(h),o=function(){return r("div")},c=(Object.assign,function(t,i,n){t.setAttribute(i,n)}),u=function(t,i){for(var n in i)c(t,n,i[n])},l=function(t,i){t.removeAttribute(i)},f=function(t,i,n){t.style.setProperty(i,n)},p=function(t,i){for(var n in i)f(t,n,i[n])},b=function(t,i){t.classList.add(i)},d=function(t,i){t.classList.remove(i)},v=function(t,i,n,s){s=s||{},t.addEventListener(i,n,s)};s=function(){h.body},"complete"===h.readyState||"interactive"===h.readyState?s():h.addEventListener("DOMContentLoaded",s),a.d("SmartSliderWidgetBulletTransition","SmartSliderWidget",(function(){function t(t,i){this.parameters=i,a.SmartSliderWidget.prototype.constructor.call(this,t,"bullet",".n2-ss-control-bullet")}return t.prototype=Object.create(a.SmartSliderWidget.prototype),t.prototype.constructor=t,t.prototype.onStart=function(){switch(this.hasDots=!0,this.axis="horizontal",this.bar=this.widget.querySelector(".nextend-bullet-bar"),this.parameters.area){case 5:case 8:this.axis="vertical"}this.slider.stages.done("BeforeShow",this.onBeforeShow.bind(this))},t.prototype.onBeforeShow=function(){if(this.onVisibleSlidesChanged(),this.hasDots){var t=this.slider.currentSlide.ssdot;b(t,"n2-active"),l(t,"tabindex"),c(t,"aria-current","true")}v(this.slider.sliderElement,"SlideWillChange",this.onSlideSwitch.bind(this)),v(this.slider.sliderElement,"visibleSlidesChanged",this.onVisibleSlidesChanged.bind(this))},t.prototype.onSlideSwitch=function(e){if(this.hasDots){for(var t,i=0;i<this._dots.length;i++)t=this._dots[i],d(t,"n2-active"),c(t,"tabindex",0),l(t,"aria-current");t=e.detail.targetSlide.ssdot||e.detail.targetSlide.group.ssdot,b(t,"n2-active"),l(t,"tabindex"),c(t,"aria-current","true")}},t.prototype.showThumbnail=function(t,e){var i,n,s,h=this.getThumbnail(t);a.J.to(a.MW.R(h),.3,{opacity:1}),i=t.ssdot,n="universalleave",s=this.hideThumbnail.bind(this,h),i.addEventListener(n,s,{once:!0})},t.prototype.hideThumbnail=function(t,e){e.stopPropagation(),a.J.to(a.MW.R(t),.3,{opacity:0,onComplete:function(){t.remove()}})},t.prototype.getThumbnail=function(t){var n=t.ssdot,s=this.slider.sliderElement.getBoundingClientRect(),h=n.getBoundingClientRect(),r=o(),c=o();c.className="n2-ss-bullet-thumbnail",p(c,{width:this.parameters.thumbnailWidth+"px",height:this.parameters.thumbnailHeight+"px","background-image":'url("'+t.getThumbnail()+'")'}),r.appendChild(c),a.MW.R(r).opacity=0,r.className=this.parameters.thumbnailStyle+" n2-ss-bullet-thumbnail-container",this.slider.sliderElement.appendChild(r);var u=i.getComputedStyle(r),l=r.getBoundingClientRect();switch(this.parameters.thumbnailPosition){case"right":p(r,{left:h.left-s.left+h.width-parseInt(u.getPropertyValue("margin-left"))-parseInt(u.getPropertyValue("margin-right"))+"px",top:h.top-s.top+h.height/2-l.height/2+"px"});break;case"left":p(r,{left:h.left-s.left-l.width-parseInt(u.getPropertyValue("margin-left"))-parseInt(u.getPropertyValue("margin-right"))+"px",top:h.top-s.top+h.height/2-l.height/2+"px"});break;case"top":p(r,{left:h.left-s.left+h.width/2-l.width/2+"px",top:h.top-s.top-l.height-parseInt(u.getPropertyValue("margin-top"))-parseInt(u.getPropertyValue("margin-bottom"))+"px"});break;case"bottom":p(r,{left:h.left-s.left+h.width/2-l.width/2+"px",top:h.top-s.top+h.height-parseInt(u.getPropertyValue("margin-top"))-parseInt(u.getPropertyValue("margin-bottom"))+"px"})}return r},t.prototype.onVisibleSlidesChanged=function(){if(this._dotsOuter!==n&&this._dotsOuter.forEach((function(t){!function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}(t)})),this.bar.innerText="",this.slider.visibleSlides.length<=1)this.hasDots=!1;else{this.hasDots=!0,this._dots=[],this._dotsOuter=[];for(var t=0;t<this.slider.visibleSlides.length;t++){var i=this.slider.visibleSlides[t],s=o(),h=o();switch(h.className="n2-bullet "+this.parameters.dotClasses,u(h,{tabindex:0,role:"button","aria-label":i.getTitle()}),s.appendChild(h),this.bar.appendChild(s),"mouseenter"===this.parameters.action?new a.UniversalEnter(h,this.onDotClick.bind(this,i)):new a.UniversalClick(h,this.onDotClick.bind(this,i)),v(s,"n2Activate",this.onDotClick.bind(this,i)),this._dotsOuter.push(s),i.ssdot=h,this._dots.push(h),this.parameters.mode){case"numeric":h.innerText=t+1;break;case"title":h.innerText=i.getTitle()}if(1===this.parameters.thumbnail)i.getThumbnail()&&new a.UniversalEnter(h,this.showThumbnail.bind(this,i),{leaveOnSecond:!0})}this.onSlideSwitch({detail:{targetSlide:this.slider.currentRealSlide}})}this.slider.widgets.onAdvancedVariableWidgetChanged(this.key)},t.prototype.onDotClick=function(t,e){this.slider.directionalChangeTo(t.index)},t}))}(window);