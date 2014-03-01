;
(function( $ ) {
  $.fn.nubify = function() {

    var nub = this.html('<img src="nubby.png">');
    var initX, initY;
    var stop = false; // time to stop scrolling?
    var curX, curY;
    var output = document.getElementById("nubby-debug");
    var scrollSpeed = 50;

    // capture mouse events
    function init() {
      this.addEventListener("mousedown", mouseDown, false);
      this.addEventListener("mouseup", mouseUp, false);
    }

    function mouseDown(e) {
      // save initial xy
      initX = e.clientX;
      initY = e.clientY;
      curX = e.clientX;
      curY = e.clientY;
      stop = false; 
      e.target.setCapture();
      e.target.addEventListener("mousemove", mouseMoved, false);

      function scroller(){
        // dx dy
        window.scrollBy( curX - initX, curY - initY);
        stop ? null : window.setTimeout(scroller, scrollSpeed);
      }
      window.setTimeout(scroller, scrollSpeed);
    }

    function mouseUp(e) {
      e.target.removeEventListener("mousemove", mouseMoved, false);
      stop = true;
    }

    function mouseMoved(e) {
      curX = e.clientX;
      curY = e.clientY;

      if (output !== null)
        output.innerHTML = "Position: " + e.clientX + ", " + e.clientY;
    }

    init(); // set listeners

    return nub;

  };
}( jQuery ));
