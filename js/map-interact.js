$(function(){
	//lakes's color and border color
	if($('#lakes').find('path').eq(0).attr('fill') != 'undefined'){
		$('#lakes').find('path').attr({'fill':map_config['default']['lakescolor']}).css({'stroke':map_config['default']['bordercolor']});
	}

	//configuration for title text's shadow
	$('.tip').css({
		'box-shadow':'1px 2px 4px '+map_config['default']['namesShadowColor'],
		'-moz-box-shadow':'2px 3px 6px '+map_config['default']['namesShadowColor'],
		'-webkit-box-shadow':'2px 3px 6px '+map_config['default']['namesShadowColor'],
	});

	//configuration for map shadow
	if($('#shadow').find('path').eq(0).attr('fill') != 'undefined'){
		var shadowOpacity = map_config['default']['shadowOpacity'];
		var shadowOpacity = parseInt(shadowOpacity);
		if (shadowOpacity >=100){shadowOpacity = 1;}else if(shadowOpacity <=0){shadowOpacity =0;}else{shadowOpacity = shadowOpacity/100;}
		
		$('#shadow').find('path').attr({'fill':map_config['default']['shadowcolor']}).css({'fill-opacity':shadowOpacity})
	}
	//write default title and content.
	$('#msg_title').html(map_config['default']['msg_title']);
	$('#msg_data').html(map_config['default']['msg_data']);

	//make msg_title unselectable.
	$('#msg_title').attr({'unselectable':'on','onselectstart':'return false;'}).css({'-moz-user-select':'none;','cursor':'default'});
});

function addEvent(id,relationId){
	var _obj = $('#'+id);
	var _Textobj = $('#'+id+','+'#'+map_config[id]['namesId']);
	var _h = $('#map').height();

	$('#'+map_config[id]['namesId']).find('tspan').attr({'fill':map_config['default']['namescolor']});

		_obj.attr({'fill':map_config[id]['upcolor'],'stroke':map_config['default']['bordercolor']});
		_Textobj.attr({'cursor':'default'});
		if(map_config[id]['enable'] == true){
			_Textobj.attr({'cursor':'pointer'});
			_Textobj.hover(function(){
				//moving in/out effect
				$('#tip').show().html(map_config[id]['name']);
				_obj.css({'fill':map_config[id]['overcolor']})

			},function(){
				$('#tip').hide();
				$('#'+id).css({'fill':map_config[id]['upcolor']});
			})
			//clicking effect
			_Textobj.mousedown(function(){
				$('#'+id).css({'fill':map_config[id]['downcolor']});
			})
			_Textobj.mouseup(function(){
				$('#'+id).css({'fill':map_config[id]['overcolor']});
				$('#msg_title').html(map_config[id]['name']);
				$('#msg_data').html(map_config[id]['data']);;
			})
			_Textobj.mousemove(function(e){
				var x=e.pageX-20, y=e.pageY+(-38);
				var tipw=$('#tip').outerWidth(), tiph=$('#tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#tip').css({left:x, top:y})
			})
		}	
}