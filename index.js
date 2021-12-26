//NavBar functionality
function changeColor(obj) {
	$('.nav').css({color:"white"});
	obj.style.color="blue";
}

$(document).ready(function(){
    $(".nav a").mouseleave(function(){
  		$('.nav a').css({color:"white"});
    });
});

$(document).ready(function(){
    $("li").click(function(){
    	console.log('hello');
        $(this).animate({top: '+=2px'});
        $(this).animate({top: '-=2px'});
    });
});


//Smooth Scrolling
$(document).ready(function(){
	$('.nav a').click(function(){

		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1100, function(){
			window.location.hash=hash;
		});
	});
})


//Skils Stars
$(document).ready(function(){
	$(".col-md-4").mouseenter(function() {
	    $(this).children(".img-top").fadeOut("fast");
	    $(this).children(".img-bottom").fadeIn("fast");
	});
})

$(document).ready(function(){
	$(".col-md-4").mouseleave(function() {
	    $(this).children(".img-bottom").fadeOut("fast");
	    $(this).children(".img-top").fadeIn("fast");
	});
})
