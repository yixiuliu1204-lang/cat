
function stickyHeader () {
    var sticky = $('.nav2'),
        scroll = $(window).scrollTop();
  
    if (sticky.length) {
      if (scroll >= 480) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
      
    };
  }


jQuery(window).on('scroll', function(){
	(function($){
		stickyHeader ();
	})(jQuery);
});

//轮播 
$(function () {
						  // Slideshow 4
						  $("#slider4").responsiveSlides({
							auto: true,
							pager:true,
							nav:true,
							speed: 500,
							namespace: "callbacks",
							before: function () {
							  $('.events').append("<li>before event fired.</li>");
							},
							after: function () {
							  $('.events').append("<li>after event fired.</li>");
							}
						  });
					
						});


//筋斗云
        
window.addEventListener('load', function() {
    var cloud = document.querySelector('.cloud');
    var nav = document.querySelector('.nav2');
    var lis = nav.querySelectorAll('li');
    var current = -80;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            animate(cloud, this.offsetLeft + 15);
        })
        lis[i].addEventListener('mouseleave', function() {
            animate(cloud, current);
        })
        lis[i].addEventListener('click', function() {
            current = this.offsetLeft + 15;
        })
    }
})
        
function animate(obj, target, callback) {
    clearInterval(obj.timer); 
    obj.timer = setInterval(fn, 4);
    function fn() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }
}

$(document).ready(function() {
			/*
				var defaults = {
				containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
				};
			*/
								
			$().UItoTop({ easingType: 'easeOutQuart' });
								
			});