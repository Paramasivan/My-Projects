// JavaScript Document
$(function() {
$( 'input[name="strsetdate"]' ).datepicker({
showOn: "button",
buttonImage: "images/calendar.png",
buttonImageOnly: true,
 changeMonth: true,
changeYear: true,
showButtonPanel: true
});
});

function ValidateForm(Form)

{
if (Form.strcusip.value == "" )
    {
	alert("Please enter \"Cusip\" ");
	Form.strcusip.focus();
	return(false);
	}
if (Form.strbondprice.value == "" )
    {
	alert("Please enter \"Bond Price\" ");
	Form.strbondprice.focus();
	return(false);
	}
if (isNaN(Form.strbondprice.value) )
    {
	alert("Please enter \"Number only\" for Bond Price ");
	Form.strbondprice.focus();
	return(false);
	}
if (Form.strqty.value == "" )
    {
	alert("Please enter \"Quantity\" ");
	Form.strqty.focus();
	return(false);
	}
if (isNaN(Form.strqty.value) )
    {
	alert("Please enter \"Number only\" for Quantity ");
	Form.strqty.focus();
	return(false);
	}
if (Form.strsetdate.value == "" )
    {
	alert("Please enter or select \"Settlement Date\" ");
	Form.strsetdate.focus();
	return(false);
	}
if (Form.strvendor.value == "" )
    {
	alert("Please select \"Vender\" ");
	Form.strvendor.focus();
	return(false);
	}
if (Form.straccount.value == "" )
    {
	alert("Please select \"Account\" ");
	Form.straccount.focus();
	return(false);
	}
return(true);
}

$(function() {
$( "#tabs" ).tabs();
});

window.onload = function() {
	var nav = document.getElementById('nav'); 
	var navItem = nav.getElementsByTagName('li');
	//is it floated?
	var floated = navItem[0].currentStyle ? el.currentStyle['float'] : document.defaultView.getComputedStyle(navItem[0],null).getPropertyValue('float');
	
	if (floated != 'left') {
		var collapse = document.getElementById('nav-collapse');
		
		//toggle class utility function
		var classToggle = function( element, tclass ) {
			var classes = element.className,
			pattern = new RegExp( tclass );
			hasClass = pattern.test( classes );
			//toggle the class
			classes = hasClass ? classes.replace( pattern, '' ) : classes + ' ' + tclass;
		 	element.className = classes.trim();
		};
		
		classToggle(nav, 'hide');
		classToggle(collapse, 'active');
		collapse.onclick = function() {
			classToggle(nav, 'hide');
			return false;
		}
	}
}

$.noConflict();
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
    	// fullscreen options go gere
    	enabled: true,
    	nativeFS: true
    },
	autoPlay: {
    	// autoplay options go gere
    	enabled: true,
    	pauseOnHover: true
    },
	deeplinking: {
      enabled: true,
      change: false
    },
    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
    imgWidth: 1400,
    imgHeight: 680
  });
});