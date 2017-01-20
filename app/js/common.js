$(function() {

	//Illustration by http://psdblast.com/flat-color-abstract-city-background-psd
	$(window).on('mousemove', function(e) {
		var w = $(window).width();
		var h = $(window).height();
		var offsetX = 0.5 - e.pageX / w;
		var offsetY = 0.5 - e.pageY / h;

	$(".parallax").each(function(i, el) {
		var offset = parseInt($(el).data('offset'));
		var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

		$(el).css({
			'-webkit-transform': translate,
			'transform': translate,
			'moz-transform': translate
		});
	});
	});

	$(".about-us__item").animated("zoomIn");
	$(".projects__gazprom__img img, .projects__adidas__img img").animated("fadeInLeft");
	$(".projects__tinkoff_img img").animated("fadeInRight");
	$(".all-projects span").animated("rotateIn");
	$(".footer__content .icon").animated("flip");

	$(".clients").waypoint(function() {
		$(".clients__item img").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 300*index);
		});
	}, {
		offset : "30%"
	});

	$(".btn-more").click(function() {
		$("html, body").animate({ scrollTop: $("header").height()+140 }, "slow");
		return false;
	});


	$(document).ready(function(){
		$('a[href^="#"]').click(function () { 
			elementClick = $(this).attr("href");
			destination = $(elementClick).offset().top;
			$('body, html').animate( { scrollTop: destination}, 1000 );
			return false;
		});
	});

	




	$(document).ready(function(){
		$(".recall__slider").owlCarousel({
			nav:true,
			items: 1,
			navText: "",
		});	
	});

	var toggler = document.getElementById('toggler');
			toggler.onclick = function(e){
			e.preventDefault();
			toggler.classList.toggle('toggler--close');
		document.getElementById('nav').classList.toggle('nav--visible');
	};

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
