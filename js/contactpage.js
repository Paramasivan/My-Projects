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

function ValidateForm3(Form)

{
if (Form.strname3.value == "" || Form.strname3.value == "Donald")
    {
	alert("Please enter \"Name\" ");
	Form.strname3.focus();
	return(false);
	}

if (Form.stremail3.value == "" || Form.stremail3.value == "myemail@gmail.com")
    {
	alert("Please enter \"E-mail\" ");
	Form.stremail3.focus();
	return(false);
	}
if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Form.stremail3.value)) == false)
    {
    alert("Invalid E-mail Address! Please re-enter.");
	Form.stremail3.focus();
    return(false);
    }
if (Form.straddr1.value == "" || Form.straddr1.value == "1416 METAIRIE RD")
    {
	alert("Please enter \"Street address #1\" ");
	Form.straddr1.focus();
	return(false);
	}
if (Form.strcity.value == "" || Form.strcity.value == "Jefferson")
    {
	alert("Please enter \"City\" ");
	Form.strcity.focus();
	return(false);
	}
if (Form.strzip.value == "" || Form.strzip.value == "LA 70005")
    {
	alert("Please enter \"Postal code\" ");
	Form.strzip.focus();
	return(false);
	}
if (Form.strstate.value == "" || Form.strstate.value == "Louisiana")
    {
	alert("Please enter \"State  Province  Region\" ");
	Form.strstate.focus();
	return(false);
	}
if (Form.strphone.value == "" || Form.strphone.value == "(504) 837-8300")
    {
	alert("Please enter \"Phone\" ");
	Form.strphone.focus();
	return(false);
	}
if (Form.strcompany.value == "" || Form.strcompany.value == "Haynes Academy School")
    {
	alert("Please enter \"Organisation\" ");
	Form.strcompany.focus();
	return(false);
	}
if (Form.strrole.value == "" )
    {
	alert("Please select \"Your Role\" ");
	Form.strrole.focus();
	return(false);
	}
if (Form.strcomments.value == "" )
    {
	alert("Please enter \"Message\" ");
	Form.strcomments.focus();
	return(false);
	}
return(true);
}