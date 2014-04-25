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

