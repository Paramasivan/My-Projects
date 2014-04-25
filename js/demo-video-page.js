// JavaScript Document
stepcarousel.setup({
	galleryid: 'mygallery', //id of carousel DIV
	beltclass: 'belt', //class of inner "belt" DIV containing all the panel DIVs
	panelclass: 'panel', //class of panel DIVs each holding content
	autostep: {enable:false, moveby:1, pause:3000},
	panelbehavior: {speed:500, wraparound:false, wrapbehavior:'slide', persist:false},
	defaultbuttons: {enable: true, moveby: 1, leftnav: ['images/nav_left.png', -5, 65], rightnav: ['images/nav_right.png', -20, 65]},
	statusvars: ['statusA', 'statusB', 'statusC'], //register 3 variables that contain current panel (start), current panel (last), and total panels
	contenttype: ['inline'] //content setting ['inline'] or ['ajax', 'path_to_external_file']
});

jQuery(function($){
	$(window).resize(function(){
		$.each(stepcarousel.configholder, function(i, c){
			stepcarousel.alignpanels($, c, true);
		});
	});
});

$(document).ready(function() {
      $('ul.rounding').roundabout({minScale:0.62, responsive: true});
   });
