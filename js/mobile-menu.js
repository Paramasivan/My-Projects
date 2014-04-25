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