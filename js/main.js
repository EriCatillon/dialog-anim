	
	$( document ).ready(function(event) {

		var $draggable = $('.color_drag li').draggabilly({
		  // options...
		});

		$('#background_drag li').addClass('background');
		$('#color_drag li').addClass('color');
		$('#border_drag li').addClass('border');

		/* dragable function */
		$draggable.on( 'dragEnd', function( e, pointer ) {

			elementValue = e.target.getAttribute("value");
			e.target.removeAttribute("style");
			var x = e.originalEvent.clientX, y = e.originalEvent.clientY,
    		elementMouseIsOver = document.elementFromPoint(x, y);


        	if (elementMouseIsOver.parentNode.getAttribute("id") == 'element' || elementMouseIsOver.getAttribute("id") == 'element') {
        		if (e.target.getAttribute("class") == "color") {

        		elementMouseIsOver.style.color = elementValue;

	        	}else if(e.target.getAttribute("class") == "background"){
	        		elementMouseIsOver.style.backgroundColor = elementValue;
	        	}
	        	else if(e.target.getAttribute("class") == "border"){
	        		elementMouseIsOver.style.borderColor = elementValue;
	        	};
        	};
        	
        	
		});
		$('#border_radius_param').slideToggle();
		$('#border_shadow_param').slideToggle();
		$('#border_radius p').on('click',function(){
			$('#border_shadow_param').slideUp();
			$('#border_radius_param').slideToggle();
			
		});
		$('#border_shadow p').on('click',function(){
			$('#border_radius_param').slideUp();
			$('#border_shadow_param').slideToggle();
			
		})
		function elementSet(){

	    	var typeAnim = anim_value;

	    	$('#overlay').addClass('active');
	    	
	    	if (typeAnim == 'scaleMin') {
	    		$('#element').addClass('scaleMin');
	    	};
	    	if (typeAnim == 'scaleMax') {
	    		$('#element').addClass('scaleMax');
	    	};
	    	if (typeAnim == 'slideTop') {
	    		$('#element').addClass('slideTop');
	    	};
	    	if (typeAnim == 'slideLeft') {
	    		$('#element').addClass('slideLeft');
	    	};
	    	if (typeAnim == 'slideRight') {
	    		$('#element').addClass('slideRight');
	    	};
	    	if (typeAnim == 'slideBottom') {
	    		$('#element').addClass('slideBottom');
	    	};
	    	if (typeAnim == 'rotate') {
	    		$('#element').addClass('scale_rotate');
	    	};
	    	if (typeAnim == 'flip') {
	    		$('#element').addClass('flip');
	    	};
	    	if (typeAnim == 'flip_y') {
	    		$('#element').addClass('flip_y');
	    	};
	    	if (typeAnim == 'flip_x') {
	    		$('#element').addClass('flip_x');
	    	};
	    	if (typeAnim == 'flip_y2') {
	    		$('#element').addClass('flip_y2');
	    	};
	    	if (typeAnim == 'flip_x2') {
	    		$('#element').addClass('flip_x2');
	    	};
			



	    }

		function elementUpdate( Timing, TimeVal, Delay){

			$('#overlay').fadeIn();

	    	bg_color = $('#bg_color').val();

	    	bd_color = $('#bd_color').val();

	    	var typeAnim = anim_value;

	    	$('#overlay').addClass('active');

	    	$('#element').addClass('origin');

	    	if(!Timing){
				var Timing = $('#timingAnim li.active').attr('value');
			}
			if(!TimeVal){
				var TimeVal = value_time_val;
			}
			if(!Delay){
				var Delay = value_delay_time_val;
			}

	    	console.log(TimeVal);
	    	console.log(Timing);
	    	console.log(Delay);

	    	$('#element').css({
	    		display: 'block',
		        opacity: 1 ,
		        WebkitTransition : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',
		        MozTransition    : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',
		        MsTransition     : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',
		        OTransition      : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',
		        transition       : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',



		    });


		}
		function elementReset( Timing, TimeVal, Delay) {

			if(!Timing){
				var Timing = $('#timingAnim li.active').attr('value');
			}
			if(!TimeVal){
				var TimeVal = value_time_val;
			}
			if(!Delay){
				var Delay = value_delay_time_val;
			}

			$('#element').removeClass('origin');
			$('#element').css({
		        opacity:0,
		        WebkitTransition : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',
		        MozTransition    : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',
		        MsTransition     : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',
		        OTransition      : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',
		        transition       : 'all '+TimeVal+'s '+Timing+' '+Delay+'s',
		    });

		    setTimeout(function(){$('#element').removeClass()}, value_delay_time_val*1000+value_time_val*1000);
		    //$('#element').removeClass();

		}
		function generateCss (){



			var style = $("#element").getStyleObject();

			console.log(style);

    		var multiStr =  "<p>" + 
							"#element{<br>" + 
							"	-ms-transform: "+style.transform+"; <br>" + 
							"	-webkit-transform: "+style.transform+";<br>" + 
							"	transform: "+style.transform+";<br>" + 
							"	-webkit-transition-delay: "+style.transitionDelay+";<br> "+
    						"	transition-delay: "+style.transitionDelay+";<br>" + 
    						"	-webkit-transition-duration: "+style.transitionDuration+";<br> "+
    						"	transition-duration: "+style.transitionDuration+";<br>" + 
    						"	-webkit-transition-duration: "+style.transitionDuration+";<br> "+
    						"	transition-duration: "+style.transitionDuration+";<br>" + 
    						"	-webkit-transition-property: "+style.transitionProperty+";<br> "+
    						"	transition-property: "+style.transitionProperty+";<br>" + 
    						"	-webkit-transition-timing-function: "+style.transitionTimingFunction+";<br> "+
    						"	transition-timing-function: "+style.transitionTimingFunction+";<br>" + 
    						"   borderRadius : "+ valueBorderTopLeft+'px '+valueBorderTopRight+'px '+valueBorderBottomLeft+'px '+valueBorderBottomRight+'px;<br>'+
    						"   -moz-border-radius : "+ valueBorderTopLeft+'px '+valueBorderTopRight+'px '+valueBorderBottomLeft+'px '+valueBorderBottomRight+'px '+style.borderBottomRightRadius+'px;<br>'+
    						"   -webkit-border-radius : "+ valueBorderTopLeft+'px '+valueBorderTopRight+'px '+valueBorderBottomLeft+'px '+valueBorderBottomRight+'px;<br>'+
    						"   border : "+ valueBorderWidth+'px solid '+style.borderBottomColor+'<br>'+
    						"   box-shadow : "+valueshadowX+'px '+valueshadowY+'px '+valueshadowBlur+'px 0px rgba(0,0,0,'+valueshadowOpacity+')<br>'+
    						"   -moz-box-shadow : "+valueshadowX+'px '+valueshadowY+'px '+valueshadowBlur+'px 0px rgba(0,0,0,'+valueshadowOpacity+')<br>'+
    						"   -webkit-box-shadow : "+valueshadowX+'px '+valueshadowY+'px '+valueshadowBlur+'px 0px rgba(0,0,0,'+valueshadowOpacity+')<br>'+
							"}<br>" +
							"</p>";
				

    		
    		$( "#output_css" ).html(multiStr);

		}
		
		function borderRadius(valueBorderTopLeft , valueBorderTopRight , valueBorderBottomLeft , valueBorderBottomRight , valueBorderWidth){

			var style = $("#element").getStyleObject();
			
			$('#element').css({
		        borderRadius : valueBorderTopLeft+'px '+valueBorderTopRight+'px '+valueBorderBottomLeft+'px '+valueBorderBottomRight+'px',
		        MozBorderRadius    : valueBorderTopLeft+'px '+valueBorderTopRight+'px '+valueBorderBottomLeft+'px '+valueBorderBottomRight+'px',
		        WebkitBorderRadius     : valueBorderTopLeft+'px '+valueBorderTopRight+'px '+valueBorderBottomLeft+'px '+valueBorderBottomRight+'px',
		        border : valueBorderWidth+'px solid '+style.borderBottomColor+''
		    });
		}
		function borderShadow( valueshadowX , valueshadowY , valueshadowBlur , valueshadowOpacity){

			var style = $("#element").getStyleObject();

			$('#element').css({
		        boxShadow : valueshadowX+'px '+valueshadowY+'px '+valueshadowBlur+'px 0px rgba(0,0,0,'+valueshadowOpacity+')',
		        MozBoxShadow    : valueshadowX+'px '+valueshadowY+'px '+valueshadowBlur+'px 0px rgba(0,0,0,'+valueshadowOpacity+')',
		        WebkitBoxShadow     : valueshadowX+'px '+valueshadowY+'px '+valueshadowBlur+'px 0px rgba(0,0,0,'+valueshadowOpacity+')',

		    });
		}

		// input border radius

		var valueBorderAll = $('#borderAll').val();
		$('#valueBorderAll').html(valueBorderAll+'px');

		$('#borderAll').on('change',function(){

			valueBorderAll = $(this).val();

			$('#valueBorderAll').html(valueBorderAll+'px');

			$('#borderTopLeft , #borderTopRight , #borderBottomLeft , #borderBottomRight').val(valueBorderAll);
			$('#borderTopLeft , #borderTopRight , #borderBottomLeft , #borderBottomRight').trigger("change");

			borderRadius();

		});
		var valueBorderWidth = $('#borderWidth').val();
		$('#valueBorderWidth').html(valueBorderWidth+'px');

		$('#borderWidth').on('change',function(){

			valueBorderWidth = $(this).val();

			$('#valueBorderWidth').html(valueBorderWidth+'px');

			borderRadius();

		});

		var valueBorderTopLeft = $('#borderTopLeft').val();
		$('#valueBorderTopLeft').html(valueBorderTopLeft+'px');

		$('#borderTopLeft').on('change',function(){

			valueBorderTopLeft = $(this).val();

			$('#valueBorderTopLeft').html(valueBorderTopLeft+'px');

			borderRadius();

		});
		
		var valueBorderTopRight = $('#borderTopRight').val();
		$('#valueBorderTopRight').html(valueBorderTopRight+'px');

		$('#borderTopRight').on('change',function(){

			valueBorderTopRight = $(this).val();

			$('#valueBorderTopRight').html(valueBorderTopRight+'px');

			borderRadius();

		});

		var valueBorderBottomLeft = $('#borderBottomLeft').val();
		$('#valueBorderBottomLeft').html(valueBorderBottomLeft+'px');

		$('#borderBottomLeft').on('change',function(){

			valueBorderBottomLeft = $(this).val();

			$('#valueBorderBottomLeft').html(valueBorderBottomLeft+'px');

			borderRadius();

		});

		var valueBorderBottomRight = $('#borderBottomRight').val();
		$('#valueBorderBottomRight').html(valueBorderBottomRight+'px');

		$('#borderBottomRight').on('change',function(){

			valueBorderBottomRight = $(this).val();

			$('#valueBorderBottomRight').html(valueBorderBottomRight+'px');

			borderRadius();

		});
		
		// input border shadow
		var valueshadowX = $('#shadowX').val();
		$('#valueshadowX').html(valueshadowX+'px');

		$('#shadowX').on('change',function(){

			valueshadowX = $(this).val();

			$('#valueshadowX').html(valueshadowX+'px');

			borderShadow();

		});
		var valueshadowY = $('#shadowY').val();
		$('#valueshadowY').html(valueshadowY+'px');

		$('#shadowY').on('change',function(){

			valueshadowY = $(this).val();

			$('#valueshadowY').html(valueshadowY+'px');

			borderShadow();

		});

		var valueshadowBlur = $('#shadowBlur').val();
		$('#valueshadowBlur').html(valueshadowBlur+'px');

		$('#shadowBlur').on('change',function(){

			valueshadowBlur = $(this).val();

			$('#valueshadowBlur').html(valueshadowBlur+'px');

			borderShadow();

		});
		
		var valueshadowSpread = $('#shadowSpread').val();
		$('#valueshadowSpread').html(valueshadowSpread+'px');

		$('#shadowSpread').on('change',function(){

			valueshadowSpread = $(this).val();

			$('#valueshadowSpread').html(valueshadowSpread+'px');

			borderShadow();

		});

		var valueshadowOpacity = $('#shadowOpacity').val();
		$('#valueshadowOpacity').html(valueshadowOpacity+'');

		$('#shadowOpacity').on('change',function(){

			valueshadowOpacity = $(this).val();

			$('#valueshadowOpacity').html(valueshadowOpacity+'');

			borderShadow();


		});


		$('#dialog').css({
			height: $(window).height()
		});

		$('#form_dialog').css({
			height: $(window).height()
		});

		$('#overlay').css({
			width: $(window).width(),
			height: $(window).height()
		});
		//
		
		
		$('#reset').on('click',function(){

			elementSet();
			elementUpdate();
			elementReset();
			

		});
		//
		$('#css_click').on('click',function(){



			$('#button_css').toggleClass( "active" );

			if ($('#output_css').hasClass('active')) {

				$('#output_css').removeClass('active');
				$( "#output_css" ).html('');

			}else{

				$('#output_css').addClass('active');
				generateCss();
			}

		});

		var value_time_val = $('#time_val').val();
		$('#value_time_val').html(value_time_val+'s');

		$('#time_val').on('change',function(){

			value_time_val = $(this).val();

			$('#value_time_val').html(value_time_val+'s');

			elementSet();
			elementUpdate();
			elementReset();
	    	setTimeout(function(){elementUpdate()}, value_delay_time_val*1000+value_time_val*1000);
	    	

		});

		var value_delay_time_val = $('#delay_time_val').val();
		$('#value_delay_time_val').html(value_delay_time_val+'s');

		$('#delay_time_val').on('change',function(){

			value_delay_time_val = $(this).val();

			$('#value_delay_time_val').html(value_delay_time_val+'s');


			elementSet();
			elementUpdate();
			elementReset();
	    	setTimeout(function(){elementUpdate()}, value_delay_time_val*1000+value_time_val*1000);

		});

		var anim_value

		$('#typeAnim li').on('click',function(){



			anim_value = $(this).attr('value');
			$('#typeAnim li').removeClass('active');
			$(this).addClass('active');
			//$(this).toggleClass('active');

			elementSet();
			elementUpdate();
			elementReset();
	    	setTimeout(function(){elementUpdate()}, value_delay_time_val*1000+value_time_val*1000);

		});

		var timing_anim_value

		$('#timingAnim li').on('click',function(){

			timing_anim_value = $(this).attr('value');
			$('#timingAnim li').removeClass('active');
			$(this).addClass('active');

			elementSet();
			elementUpdate();
			elementReset();
	    	setTimeout(function(){elementUpdate()}, value_delay_time_val*1000+value_time_val*1000);

		});


		$('#overlay_dialog').fadeIn();
		




	    


	    
	    
	});