// JavaScript Document
$(window).resize(function() {
	var windowWidth = $(window).width();
	if (windowWidth < 366) {
		$('#nav').hide();
		$('#mobibtn').show();
		
	} else {
		$('#nav').show();
		$('#mobibtn').hide();
		$('#mobimenu').hide();
	}
});

$(window).load(function() {
	var windowWidth = $(window).width();
	if (windowWidth < 366) {
		$('#nav').hide();
		$('#mobibtn').show();
        
	} else {
		$('#nav').show();
		$('#mobibtn').hide();
		$('#mobimenu').hide();
	}
});

$(document).ready(function() {
	$('#mobibtn').click(function() {
		 $('#mobimenu').toggle();
	});
});
	


jQuery(document).ready(function($) {
  $('#full-width-slider').royalSlider({
    arrowsNav: true,
    loop: false,
    keyboardNavEnabled: true,
    controlsInside: false,
    imageScaleMode: 'fill',
    arrowsNavAutoHide: false,
    autoScaleSlider: true, 
    autoScaleSliderWidth: 960,     
    autoScaleSliderHeight: 350,
    controlNavigation: 'bullets',
    thumbsFitInViewport: false,
    navigateByClick: true,
    startSlideId: 0,
    autoPlay: false,
    transitionType:'move',
    globalCaption: false,
    fullscreen: {
    	// fullscreen options go here
    	enabled: true,
    	nativeFS: true
    },
	autoPlay: {
    	// autoplay options go here
    	enabled: true,
		delay:3500,
    	pauseOnHover: true
    },
	deeplinking: {
      enabled: true,
      change: false
    },
    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
    imgWidth: 1920,
    imgHeight: 716
  });
  
  $('#content-slider-1').royalSlider({
    autoHeight: true,
    arrowsNav: true,
    fadeinLoadedSlide: false,
	arrowsNavAutoHide: false,
	controlsInside: false,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
    imageAlignCenter:false,
    loop: true,
    loopRewind: true,
    numImagesToPreload: 6,
    keyboardNavEnabled: true,
    usePreloader: false,
	autoPlay: {
    	// autoplay options go here
    	enabled: true,
		delay:3500,
    	pauseOnHover: true
    }
  });
});

$(document).ready(function() {
	$("#button1").click( function () {
		$(".video-buttons2").removeClass("active");
		$(".video-buttons3").removeClass("active");
		$(".video-buttons1").addClass("active");
		$("#arrow2").hide();
		$("#arrow3").hide();
		$("#arrow1").show();
		$("#content2").hide();
		$("#content3").hide();
		$("#content1").show();
	});
	$("#button2").click( function () {
		$(".video-buttons1").removeClass("active");
		$(".video-buttons3").removeClass("active");
		$(".video-buttons2").addClass("active");
		$("#arrow1").hide();
		$("#arrow3").hide();
		$("#arrow2").show();
		$("#content1").hide();
		$("#content3").hide();
		$("#content2").show();
	});
	$("#button3").click( function () {
		$(".video-buttons1").removeClass("active");
		$(".video-buttons2").removeClass("active");
		$(".video-buttons3").addClass("active");
		$("#arrow1").hide();
		$("#arrow2").hide();
		$("#arrow3").show();
		$("#content1").hide();
		$("#content2").hide();
		$("#content3").show();
	});
});

$(document).ready(function() {
		$("#eventCalendarHumanDate").eventCalendar({
				eventsjson: 'json/pnp.json',
				jsonDateFormat: 'human'  // 'YYYY-MM-DD HH:MM:SS'
		});
});

function ValidateForm2(Form)

{
if (Form.strname.value == "" || Form.strname.value == "Name")
    {
	alert("Please enter \"Name\" ");
	Form.strname.focus();
	return(false);
	}

if (Form.stremail.value == "" || Form.stremail.value == "Email")
    {
	alert("Please enter \"Email\" ");
	Form.stremail.focus();
	return(false);
	}
if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Form.stremail.value)) == false)
    {
    alert("Invalid E-mail Address! Please re-enter.");
	Form.stremail.focus();
    return(false);
    }
if (Form.strcomments.value == "" || Form.strcomments.value == "Message...")
    {
	alert("Please enter \"Message...\" ");
	Form.strcomments.focus();
	return(false);
	}
return(true);
}