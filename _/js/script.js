var pixGrid;pixGrid=function(){var a,b;b=document.querySelector("#artist .pixGrid ul"),a=function(a){var b,c;return b=(window.innerWidth-a.width)/2,c=(window.innerHeight-a.width)/2,a.style.top=c+"px",a.style.left=b+"px",a},b.addEventListener("click",function(b){var c,d,e;return e=document.createElement("div"),document.body.appendChild(e),e.style.position="absolute",e.style.top=0,e.style.backgroundColor="rgba(0,0,0,0.7)",e.style.cursor="pointer",e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px",e.style.top=window.pageYOffset+"px",e.style.left=window.pageXOffset+"px",c=b.target.src,d=document.createElement("img"),d.id="largeImage",d.style.display="block",d.style.position="absolute",d.addEventListener("load",function(){this.height>window.innerHeight&&(this.ratio=window.innerHeight/this.height,this.height=this.height*this.ratio,this.width=this.width*this.ratio),this.width>window.innerWidth&&(this.ratio=window.innerWidth/this.height,this.height=this.height*this.ratio,this.width=this.width*this.ratio),center(image(this)),e.appendChild(this),d.addEventListener("click",function(){e&&(window.removeEventListener("resize",window,!1),window.removeEventListener("scroll",window,!1),e.parentNode.removeChild(e))},!1),window.addEventListener("scroll",function(){e&&(e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px",e.style.top=window.pageYOffset+"px",e.style.left=window.pageXOffset+"px"),a(d)},!1)})},!1)}();