var browser_name = navigator.appName;
$(document).ready(function(){
    

    /*      */
    $('.navigation > ul > li span').on('click', function(){
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
        }else{
            $('.navigation > ul > li.open').removeClass('open');
            $(this).parent().addClass('open');
        }
    });
    /*   END   */

    /*   DROPDOWN WITH IMAGES   */
    $(".dropdown-img").msDropdown();
    /*   END DROPDOWN   */
    
    /* seacrh placeHolder */
    var placeHolder = 'Поиск...';
    $('#query').val(placeHolder).addClass('placeHolder');
    $('#query').focus(function(){
        if ( $(this).val()==placeHolder ) {
            $(this).val('').removeClass('placeHolder');
        }
    }).blur(function(){
        if ( $(this).val()=='' ) {
            $('#query').val(placeHolder).addClass('placeHolder');
        }
    });
    /*      Filter label active         */
    $('.filters-blocks li label').on('click', function(){
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
        }
    });
    $('.time-free li label').on('click', function(){
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
        }
    });
    
    var posTop = $('#with_info').offset().top;
    var height = $('#with_info').height();
    var width = $('#with_info').width();
    var posLeft = $('#with_info').offset().left;
     /*      price-slider        */
    var maxValue = 1000000, minValue = 0, step = (maxValue - minValue) / $('.price-filter li').length;
    var j=minValue;
    var ji=Math.round(Math.pow(maxValue,1.0/6.0));
    //alert(ji);
    for(var i = 1; i <= $('.price-filter li').length; i++){
        if (i==1){
            $('.price-filter li.step-' + i ).text(j);
            j+=ji;
        }
        else{
            $('.price-filter li.step-' + i ).text(j);
            j*=ji;
        }
    };
    $.each($('.price-filter .steps li'),function(i,val){
        width+=$('.price-filter li.step-'+i+1).width();

    });
    //$('.price-filter li').css({ 'width' : $('.price-filter ul').width() / $('.price-filter li').length });

    $('#price-range').slider({
        range: true,
        min: minValue,
        max: maxValue,
        values: [ 1000, 100000 ],
        slide: function( event, ui ) {
            $( "#price-from" ).val( ui.values[ 0 ] );
            $( "#price-to" ).val( ui.values[ 1 ] );
        }
    });
    $( "#price-from" ).val( $( "#price-range" ).slider( "values", 0 ));
    $( "#price-to" ).val( $( "#price-range" ).slider( "values", 1 ));

    /*      living space slider     */
    var maxValue = 100, minValue = 25, step = 15;
    for(var i = 1; i <= $('.living_space li').length; i++){
        $('.living_space li.step-' + i ).text(minValue + step * (i - 1));
    };
    $('.living_space li').css({ 'width' : $('.living_space ul').width() / $('.living_space li').length - 4 });

    $('#living_space_range').slider({
        range: true,
        min: minValue,
        max: maxValue,
        step: step,
        values: [ minValue, maxValue ],
        slide: function( event, ui ) {
            $("#living_space-fro    m").val( ui.values[ 0 ] );
            $("#living_space-to").val( ui.values[ 1 ] );
        }
    });
    $( "#living_space-from" ).val( $( "#living_space_range" ).slider( "values", 0 ));
    $( "#living_space-to" ).val( $( "#living_space_range" ).slider( "values", 1 ));

    /*          kitchen size slider         */
    var maxValue = 40, minValue = 5, step = 5;
    for(var i = 1; i <= $('.kitchen_size li').length; i++){
        $('.kitchen_size li.step-' + i ).text(minValue + step * (i - 1));
    };
    $('.kitchen_size li').css({ 'width' : $('.kitchen_size ul').width() / $('.kitchen_size li').length - 6 });

    $('#kitchen_size_range').slider({
        range: true,
        step: step,
        min: minValue,
        max: maxValue,
        values: [ minValue, maxValue ],
        slide: function( event, ui ) {
            $( "#kitchen_size-from" ).val( ui.values[ 0 ] );
            $( "#kitchen_size-to" ).val( ui.values[ 1 ] );
        }
    });
    $( "#kitchen_size-from" ).val( $( "#kitchen_size_range" ).slider( "values", 0 ));
    $( "#kitchen_size-to" ).val( $( "#kitchen_size_range" ).slider( "values", 1 ));


    
    /* header slider */
    if ( $('#slider').length ) {
        $('#slider').slidesjs({
            width: 1020,
            height: 380,
            play: {
                auto: true,
                interval: 8000
            },
            effect: {
                slide: {
                    speed: 500
                }
            },
            callback: {
                loaded: function() {
                    $('#slider .slidesjs-navigation, #slider .slidesjs-pagination-item a').text('');
                    var count = $('#slider .slidesjs-pagination-item').length;
                    $('#slider .slidesjs-pagination').css('width', count*16+6);
                    $('#slider').append('<div id="slider_shadow"></div>');
                }
            }
        });
    }
    
    /* blocks */
    $('#blocks .block:first').addClass('first');
    $('#blocks .block').hover(function(){
        if ( $(this).find('.block_inner').hasClass('bg_03b21b') )
            $(this).css('background', '#03b21b');
        if ( $(this).find('.block_inner').hasClass('bg_f26522') )
            $(this).css('background', '#f26522');
        if ( $(this).find('.block_inner').hasClass('bg_00bff3') )
            $(this).css('background', '#00bff3');
        if ( $(this).find('.block_inner').hasClass('bg_ede100') )
            $(this).css('background', '#ede100');
    }, function(){
        $(this).css('background', 'none');
    });
    
    /* benefits slider */
    if ( $('#benefits_inner').length ) {
        $('#benefits_inner').slidesjs({
            width: 760,
            height: 200,
            play: {
                auto: true,
                interval: 4000
            },
            effect: {
                slide: {
                    speed: 500
                }
            },
            callback: {
                loaded: function() {
                    $('#benefits_inner .slidesjs-navigation, #benefits_inner .slidesjs-pagination-item a').text('');
                }
            }
        });
    }
    
    /* up button */
    $("#button_up").hide().removeAttr("href");
    if ($(window).scrollTop() >= 250)
        $("#button_up").fadeIn("slow");
    var scrollDiv = $("#button_up");
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 250)
            $(scrollDiv).fadeOut("slow");
        else
            $(scrollDiv).fadeIn("slow");
    });

    $("#button_up").mousedown(function() {
        $(this).css({
            'bottom': '140px'
        });
    });
    $("#button_up").mouseup(function() {
        $(this).css({
            'bottom': '141px'
        });
        $("html, body").animate({scrollTop: 0}, "normal");
    });
    
    /* info_usefull */
    $('#info_usefull a:first').addClass('first');
    $('#with_info').hover(function(){
        $('#info_usefull').show();
    });
    $('#info_usefull').hover(function(){
        
    }, function(){
        $(this).hide();
    });
    
    /* offers */
    var offer_interval = 200;  
    $('._offer').hover(function(){
        if ( !$(this).hasClass('big') && !$(this).hasClass('anim') ) {
            $(this).addClass('anim')
            if ( !$(this).hasClass('first') ) {
                $(this).addClass('first').attr({
                    'top': $(this).css('top').substr(0, $(this).css('top').length-2),
                    'left': $(this).css('left').substr(0, $(this).css('left').length-2)
                });
            }
            $(this).addClass('big').animate({
                width: 280,
                height: 349,
                top: $(this).attr('top')-9,
                left: $(this).attr('left')-10
            }, offer_interval, 'swing', function(){
                $(this).find('._offer_img div').show();
                $(this).find('._offer_info').show();
                $(this).removeClass('anim');
            });
            $(this).find('._offer_img').animate({
                width: 280,
                height: 119
            }, offer_interval);
        }
    }, function(){
        if ( $(this).hasClass('big') && !$(this).hasClass('anim') ) {
            $(this).removeClass('big').animate({
                width: 260,
                height: 330,
                top: $(this).attr('top'),
                left: $(this).attr('left')
            }, offer_interval, 'swing', function(){
                $(this).find('._offer_info').hide();
            });
            $(this).find('._offer_img').animate({
                width: 260,
                height: 210
            }, offer_interval);
            $(this).find('._offer_img div').hide();
        } else if ( $(this).hasClass('big') ) {
            $(this).removeClass('big').animate({
                width: 260,
                height: 330,
                top: $(this).attr('top'),
                left: $(this).attr('left')
            }, offer_interval, 'swing', function(){
                $(this).find('._offer_info').hide();
                $(this).find('._offer_img div').hide();
            });
            $(this).find('._offer_img').animate({
                width: 260,
                height: 210
            }, offer_interval);
        }
    });
    
    /* offers slider */
    if ( !$('#similar_offers_inner').length > 0 ) {
        if ( $('#offers_inner').length ) {
            $('#offers_inner').easySlider({
                auto: false,
                vertical: true,
                numeric: true
            });
        }
    } else {
        if ( $('#similar_offers_inner').length ) {
            $('#similar_offers_inner').easySlider({
                auto: false,
                vertical: true,
                numeric: true,
                prevText: '',
                nextText: '',
                numericId: 'controlsA'
            });
        }
        if ( $('#offers_inner').length ) {
            $('#offers_inner').easySlider({
                auto: false,
                vertical: true,
                numeric: true,
                numericId: 'controlsB'
            });
        }
    }
	
	/* Tony web4pro */

    /* jQery slider */
    /* price */
    $( ".slider-range_price" ).slider({
      range: true,
      min: 0,
      max: 100000000,
      values: [ 0, 100000000 ],
	  step: 10,
      slide: function( event, ui ) {
		/* when slide */
		$(".price_from").val($( ".slider-range_price" ).slider( "values", 0 ));
		$(".price_to").val($( ".slider-range_price" ).slider( "values", 1 ));
          /* listerner for change color of slider, when change defaul values */
          if ( $("#price_from").val() == $( ".slider-range_price" ).slider( "values", 0 ) ) {
              $('.slider-range_price a').css({
                  background: ' url(/images/byu_menu.png) 0 0 no-repeat'
              });
              $('.slider-range_price .ui-widget-header').css({
                  background: '#7dd51e'
              });
          } else {
              $('.slider-range_price a').css({
                  background: ' url(/images/square.png) 0 0 no-repeat'
              });
              $('.slider-range_price .ui-widget-header').css({
                  background: '#878787'
              });
          }
          /* end listerner */
      }
    });
	/* first view */
	$(".price_from").val($( ".slider-range_price" ).slider( "values", 0 ));
	$(".price_to").val($( ".slider-range_price" ).slider( "values", 1 ));
    /* end price */

    $( ".slider-range_square-all" ).slider({
        range: true,
        min: 10,
        max: 300,
        values: [ 10, 300 ],
        step: 10,
        slide: function( event, ui ) {
            /* when slide */
            $(".input-square-all_from").val($( ".slider-range_square-all" ).slider( "values", 0 ));
            $(".input-square-all_to").val($( ".slider-range_square-all" ).slider( "values", 1 ));

        }
    })
        .after("<div class='square_all_values'><span class='square_all_from'>" +
            $(".slider-range_square-all").slider("values", 0) +
            "</span><span class='square_all_to'>" +
            $(".slider-range_square-all").slider("values", 1) +
            "</span></div>");

    $(".input-square-all_from").val($( ".slider-range_square-all" ).slider( "values", 0 ));
    $(".input-square-all_to").val($( ".slider-range_square-all" ).slider( "values", 1 ));


    $( ".slider-range_square-kitchen" ).slider({
        range: true,
        min: 10,
        max: 50,
        values: [ 10, 50 ],
        step: 5,
        slide: function( event, ui ) {
            /* when slide */
            $(".input-square-kitchen_from").val($( ".slider-range_square-kitchen" ).slider( "values", 0 ));
            $(".input-square-kitchen_to").val($( ".slider-range_square-kitchen" ).slider( "values", 1 ));

        }
    })
        .after("<div class='square_kitchen_values'><span class='square_kitchen_from'>" +
            $(".slider-range_square-kitchen").slider("values", 0) +
            "</span><span class='square_kitchen_to'>" +
            $(".slider-range_square-kitchen").slider("values", 1) +
            "</span></div>");

    $(".input-square-kitchen_from").val($( ".slider-range_square-kitchen" ).slider( "values", 0 ));
    $(".input-square-kitchen_to").val($( ".slider-range_square-kitchen" ).slider( "values", 1 ));

    $( ".slider-range_house" ).slider({
        range: true,
        min: 10,
        max: 100,
        values: [ 10, 100 ],
        step: 10,
        slide: function( event, ui ) {
            /* when slide */
            $(".input-house_from").val($( ".slider-range_house" ).slider( "values", 0 ));
            $(".input-house_to").val($( ".slider-range_house" ).slider( "values", 1 ));
        }
    })
        .after("<div class='square_all_values'><span class='house_from'>" +
            $(".slider-range_house").slider("values", 0) +
            "</span><span class='house_to'>" +
            $(".slider-range_house").slider("values", 1) +
            "</span></div>");

    $(".input-house_from").val($( ".slider-range_house" ).slider( "values", 0 ));
    $(".input-house_to").val($( ".slider-range_house" ).slider( "values", 1 ));

    $( ".slider-range_plot" ).slider({
        range: true,
        min: 2,
        max: 100,
        values: [ 2, 100 ],
        step: 2,
        slide: function( event, ui ) {
            /* when slide */
            $(".input-plot_from").val($( ".slider-range_plot" ).slider( "values", 0 ));
            $(".input-plot_to").val($( ".slider-range_plot" ).slider( "values", 1 ));
        }
    })
        .after("<div class='square_all_values'><span class='plot_from'>" +
            $(".slider-range_plot").slider("values", 0) +
            "</span><span class='plot_to'>" +
            $(".slider-range_plot").slider("values", 1) +
            "</span></div>");

    $(".input-plot_from").val($( ".slider-range_plot" ).slider( "values", 0 ));
    $(".input-plot_to").val($( ".slider-range_plot" ).slider( "values", 1 ));

    $( ".slider-range_from_mkad" ).slider({
        range: true,
        min: 5,
        max: 150,
        values: [ 5, 150 ],
        step: 5,
        slide: function( event, ui ) {
            /* when slide */
            $(".input-mkad_from").val($( ".slider-range_from_mkad" ).slider( "values", 0 ));
            $(".input-mkad_to").val($( ".slider-range_from_mkad" ).slider( "values", 1 ));
        }
    })
        .after("<div class='square_all_values'><span class='from_mkad_from'>" +
            $(".slider-range_from_mkad").slider("values", 0) +
            "</span><span class='from_mkad_to'>" +
            $(".slider-range_from_mkad").slider("values", 1) +
            "</span></div>");

    $(".input-mkad_from").val($( ".slider-range_from_mkad" ).slider( "values", 0 ));
    $(".input-mkad_to").val($( ".slider-range_from_mkad" ).slider( "values", 1 ));
    /* end square */
	/* end jQuery slider */

	/* select alex plugin*/
	$('select:not(.location select), .radio_type [type="radio"], .square-checkbox').customElements({
        selectAutoWidth: true
    });

    /* for IE8 rectangle checkbox */
    $('.b-custom-checkbox-type-2 label').click(function() {
        if ( browser_name == 'Microsoft Internet Explorer' ) {
            if ($(this).prev().prop('checked') == true) {
                $(this).css({
                        'background-image': 'none',
                        'background-color': '#cbcbcb',
                        'color': '#737373'
                });
                $(this).prev().prop( "checked", false);
            } else {
                $(this).css({
                    'background': '#58a602 url(images/checkbox7.png) 7px 10px no-repeat',
                    'color': '#fff'
                });
                $(this).prev().prop( "checked", true );
            }
        }
    });

    $('.b-custom-checkbox-type-2 label').mouseenter(function() {
        if ( browser_name == 'Microsoft Internet Explorer' ) {
            /*$(this).prev().prop( "checked", false);*/
            if ($(this).prev().prop('checked') == false) {
                $(this).css({
                    'background': '#58a602 url(images/checkbox7.png) 7px 10px no-repeat',
                    'color': '#fff'
                });
            }
        }
    });

    $('.b-custom-checkbox-type-2 label').mouseleave(function() {
        if ( browser_name == 'Microsoft Internet Explorer' ) {
            /*$(this).prev().prop( "checked", false);*/
            if ($(this).prev().prop('checked') == false) {
                $(this).css({
                    'background-image': 'none',
                    'background-color': '#cbcbcb',
                    'color': '#737373'
                });
            }
        }
    });
    
    /* end buy flat page */

    /* add to select icons */
    $('.distance_underground .ceSelect-item').each(function() {
        var selectedEl = $(this).closest('.ceSelect').find('.ceSelect-selected');
        switch ($(this).data().value) {
            case 'walk':
                $(this).css({
                    'background-image': 'url(images/walk.png)',
                    'background-position': '0px -2px',
                    'background-repeat': 'no-repeat'
                });
                selectedEl.html(
                    $(this).clone().append(
                        $('<span />', {
                            'class': 'ceSelect-arr'
                        })
                    )
                );
                break;
            case 'rotated':
                $(this).css({
                    'background-image': 'url(images/rotated.png)',
                    'background-position': '0px -2px',
                    'background-repeat': 'no-repeat'
                });
                break;
            case 'inverse':
                $(this).css({
                    'background-image': 'url(images/inverse.png)',
                    'background-position': '0px -2px',
                    'background-repeat': 'no-repeat'
                });
                break;
            case 'other':
                $(this).css({
                    'background-image': 'url(images/other.png)',
                    'background-position': '0px -2px',
                    'background-repeat': 'no-repeat'
                });
                break;
        }
    });

    /* end add to select icons */

    /* search result count elements on page */
    $("input[type='number']").stepper();
    $('.divider').remove();
    /* end search result count elements on page */

    /* open block with vacancies */
    $(".open_close").click(function(){
        $(this).nextAll().slideToggle('open');
        return false;
    });
    /* end open block with vacancies */

    /* popup form_db */
    $('.open-popup-link').magnificPopup({
        // Delay in milliseconds before popup is removed
        removalDelay: 250,
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });
    /* end popup form_db */

    /* services change class */
        $(".service:odd").addClass("placing_right");
    /* end services change class */
    if($('.i_form').length){
        $('.i_form fieldset label').on('click',function(){
            $(this).toggleClass('active');
        });
    }
    if($('#open_iform').length){
        $('#open_iform').on('click',function(){
            $("#submit_a_request_wrap").slideToggle(500);
        });
    }

});