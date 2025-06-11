// JavaScript Document
$(document).ready(function(){
			//button ein-/ ausblenden
			$(window).scroll(function(){
				if($(window).scrollTop() > 200) {
					$('#back-top').fadeIn('1000'); // 1000 = 1000 milisec = 1sec, man kann auch 'fast' oder 'slow' schreiben
				}
				else {
					$('#back-top').fadeOut('slow');
				}
			});
			//bei click sanft nach oben scrollen 
			$('#back-top a').click(function(){
				$('html,body').animate({scrollTop:0},1000);
				return false;
			});
		});
		
		
		
		//sticky-menu ------------------------------------------------------------------------------------------
	$(window).scroll(function(){
		//var y = $('img[src*="top1."]').height();
							//console.log('img-height: ' + y);
		if($(window).scrollTop() > 5){
		   $('div#top').addClass('sticky');
		} else {
		   $('div#top').removeClass('sticky');
		}
	});
		
		$(document).ready(function(){
			$('#topnav a').click(function(){
				var linkziel = $(this).attr('href');
				$('html,body').animate({scrollTop:$(linkziel).offset().top - 40},1000);
			});
		});
		
	//slipry-slider starten --------------------
	$("#demo1").slippry({
		transition: 'horizontal',
		pager:false
	});
	