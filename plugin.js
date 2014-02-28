(function( $ ) {
  $.fn.nubify = function() {
    // return this.html(function() {
      // make circle target
      var nub = this.html('<img src="nubby.png">');
      var initX, initY, timeoutId;
      var stop = false; // time to stop scrolling?
      var curX, curY;

      // capture mouse events
      function init() {
        var btn = document.getElementById("nubby");
        btn.addEventListener("mousedown", mouseDown, false);
        btn.addEventListener("mouseup", mouseUp, false);
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
        // var timeoutID = window.setTimeout(func, delay, [param1, param2, ...]);

        function scroller(){
          // dx dy
          window.scrollBy( curX - initX, curY - initY);
          stop ? null : window.setTimeout(scroller, 50);
        }
        window.setTimeout(scroller, 20);
      }

      function mouseUp(e) {
        e.target.removeEventListener("mousemove", mouseMoved, false);
        stop = true;
      }

      function mouseMoved(e) {
        curX = e.clientX;
        curY = e.clientY;

        var output = document.getElementById("nubby-debug"); /// if element "nubby-debug"
        output.innerHTML = "Position: " + e.clientX + ", " + e.clientY;
      }

      init(); // set listeners

      return nub;
 
//   }); // end append( ...
  }; // end $.fn.nubbify = ...
}( jQuery ));
