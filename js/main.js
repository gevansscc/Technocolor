// JavaScript Document
$(function() {
	
	



	
	
	

	$('#main-menu').click(function(){

	$('.off-screen-menu').toggleClass('animate');
	$('.svg').toggleClass('filter-green');
	


		if($('header').attr('class') == null ){
			$('header').addClass('header-animate-fade-in');
		} else if($('header').attr('class') == 'header-animate-fade-in'){
			$('header').removeClass('header-animate-fade-in').addClass('header-animate-fade-out');
		} else if(($('header').attr('class') == 'header-animate-fade-out')){
			$('header').removeClass('header-animate-fade-out').addClass('header-animate-fade-in');
		}
		
	});


  $( "#group" ).click(function() {

    $('.off-screen-menu').toggleClass('animate');
    $('.svg').toggleClass('filter-green');
		if($('header').attr('class') == null ){
			$('header').addClass('header-animate-fade-in');
		} else if($('header').attr('class') == 'header-animate-fade-in'){
			$('header').removeClass('header-animate-fade-in').addClass('header-animate-fade-out');
		} else if(($('header').attr('class') == 'header-animate-fade-out')){
			$('header').removeClass('header-animate-fade-out').addClass('header-animate-fade-in');
		}
  });

  $( "#external" ).click(function() {

    $('.off-screen-menu').toggleClass('animate');
    $('.svg').toggleClass('filter-green');
		if($('header').attr('class') == null ){
			$('header').addClass('header-animate-fade-in');
		} else if($('header').attr('class') == 'header-animate-fade-in'){
			$('header').removeClass('header-animate-fade-in').addClass('header-animate-fade-out');
		} else if(($('header').attr('class') == 'header-animate-fade-out')){
			$('header').removeClass('header-animate-fade-out').addClass('header-animate-fade-in');
		}
  });
	
	
});

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});