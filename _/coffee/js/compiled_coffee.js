var pixGrid;

pixGrid = (function() {
  var centerImage, myNode;
  myNode = document.querySelector("#artistlist .pixgrid");
  centerImage = function(theImage) {
    var myDifX, myDiffY;
    myDifX = (window.innerWidth - theImage.width) / 2;
    myDiffY = (window.innerHeight - theImage.height) / 2;
    theImage.style.top = myDiffY + 'px';
    theImage.style.left = myDifX + 'px';
    return theImage;
  };
  return myNode.addEventListener("click", (function(e) {
    var imageSrc, largeImage, myOverlay;
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      myOverlay = document.createElement("div");
      myOverlay.id = 'overlay';
      document.body.appendChild(myOverlay);
      myOverlay.style.position = "absolute";
      myOverlay.style.top = 0;
      myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
      myOverlay.style.cursor = 'pointer';
      myOverlay.style.width = window.innerWidth + 'px';
      myOverlay.style.height = window.innerHeight + 'px';
      myOverlay.style.top = window.pageYOffset + 'px';
      myOverlay.style.left = window.pageXOffset + 'px';
      imageSrc = e.target.src;
      largeImage = document.createElement('img');
      largeImage.id = 'largeImage';
      largeImage.src = imageSrc.substring(0, imageSrc.length - 7) + '.jpg';
      largeImage.style.display = 'block';
      largeImage.style.position = 'absolute';
      return largeImage.addEventListener('load', (function(e) {
        if (this.height > window.innerHeight) {
          this.ratio = window.innerHeight / this.height;
          this.height = this.height * this.ratio;
          this.width = this.width * this.ratio;
        }
        if (this.height > window.innerWidth) {
          this.ratio = window.innerWidth / this.width;
          this.height = this.height * this.ratio;
          this.width = this.width * this.ratio;
        }
        centerImage(this);
        myOverlay.appendChild(this);
        largeImage.addEventListener('click', (function(e) {
          if (myOverlay) {
            window.removeEventListener('resize', window, false);
            window.removeEventListener('scroll', window, false);
            return myOverlay.parentNode.removeChild(myOverlay);
          }
        }), false);
        window.addEventListener('scroll', (function(e) {
          if (myOverlay) {
            myOverlay.style.top = window.pageYOffset + 'px';
            return myOverlay.style.left = window.pageXOffset + 'px';
          }
        }), false);
        return window.addEventListener('scroll', (function(e) {
          if (myOverlay) {
            myOverlay.style.width = window.innerWidth + 'px';
            myOverlay.style.height = window.innerHeight + 'px';
            myOverlay.style.top = window.pageYOffset + 'px';
            return myOverlay.style.left = window.pageXOffset + 'px';
          }
        }), false);
      }), false);
    }
  }), false);
})();
