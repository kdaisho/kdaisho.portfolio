var trigger = document.getElementById("modal_trigger");
var eraser = document.getElementById("modal_close");

trigger.onclick = function() {
  document.getElementById("modal-overlay").classList.add("modal-on");
}
eraser.onclick = function() {
  document.getElementById("modal-overlay").classList.remove("modal-on"); 
}

window.onscroll = function() { // Trigger for 
  var mobile = false;
  var scroll = window.scrollY; // detect amount of scroll for proper browsers
  var scroll_ie = pageYOffset; // detect amount of scroll for IE 9+

  if (window.innerWidth <= 767) {
    mobile = true;
  }
  if (mobile && ((scroll || scroll_ie) >= 1490)) {
    document.getElementById("wrap_skill").classList.add("grow-bar");
  }
  else if (!mobile && ((scroll || scroll_ie) >= 910)) {
    document.getElementById("wrap_skill").classList.add("grow-bar");
  }
};

if (!("ontouchstart" in document.documentElement)) { // limit hover interactions to desktops
    document.documentElement.className += "no-touch";
}

var iOS = /iPad|iPhone|iPod/.test(navigator.platform);  // display alternative logo image for iOS and IE as svg animation doesn't work right on them
if(!iOS && (!(navigator.userAgent.indexOf('MSIE')!== -1 || navigator.appVersion.indexOf('Trident/') > 0))) {
  // if NOT iOS or IE
  document.getElementById('site_logo').classList.add("logo-display");
  document.getElementById('alt_logo').classList.add("logo-hide");
}