var pixGrid;

pixGrid = (function() {
  var centerImage, myNode;
  myNode = document.querySelector("#artist .pixGrid ul");
  centerImage = function(theImage) {
    var myDifX, myDiffY;
    myDifX = (window.innerWidth - theImage.width) / 2;
    myDiffY = (window.innerHeight - theImage.width) / 2;
    theImage.style.top = myDiffY + 'px';
    theImage.style.left = myDifX + 'px';
    return theImage;
  };
  myNode.addEventListener("click", (function(e) {
    var imageSrc, largeImage, myOverlay;
    myOverlay = document.createElement("div");
    document.body.appendChild(myOverlay);
    myOverlay.style.position = "absolute";
    myOverlay.style.top = 0;
    myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)";
    myOverlay.style.cursor = "pointer";
    myOverlay.style.width = window.innerWidth + 'px';
    myOverlay.style.height = window.innerHeight + 'px';
    myOverlay.style.top = window.pageYOffset + 'px';
    myOverlay.style.left = window.pageXOffset + 'px';
    imageSrc = e.target.src;
    largeImage = document.createElement('img');
    largeImage.id = 'largeImage';
    largeImage.style.display = 'block';
    largeImage.style.position = 'absolute';
    return largeImage.addEventListener("load", function() {
      if (this.height > window.innerHeight) {
        this.ratio = window.innerHeight / this.height;
        this.height = this.height * this.ratio;
        this.width = this.width * this.ratio;
      }
      if (this.width > window.innerWidth) {
        this.ratio = window.innerWidth / this.height;
        this.height = this.height * this.ratio;
        this.width = this.width * this.ratio;
      }
      center(image(this));
      myOverlay.appendChild(this);
      largeImage.addEventListener('click', (function() {
        if (myOverlay) {
          window.removeEventListener('resize', window, false);
          window.removeEventListener('scroll', window, false);
          myOverlay.parentNode.removeChild(myOverlay);
        }
      }), false);
      window.addEventListener('scroll', (function() {
        if (myOverlay) {
          myOverlay.style.width = window.innerWidth + 'px';
          myOverlay.style.height = window.innerHeight + 'px';
          myOverlay.style.top = window.pageYOffset + 'px';
          myOverlay.style.left = window.pageXOffset + 'px';
        }
        centerImage(largeImage);
      }), false);
    });
  }), false);
})();

(function() {
  return "hi there";
});
