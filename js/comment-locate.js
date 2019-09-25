<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>if(window.location.hash){
  var checkExist = setInterval(function() {
    if ($(window.location.hash).length) {
      $('html, body').animate({scrollTop: $(window.location.hash).offset().top-90}, 1000);
      clearInterval(checkExist);
    }
  }, 100);
}