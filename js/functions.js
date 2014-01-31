$(document).ready(function(){
    $('.button_functional').click(function(){
        $('.distance_subway_text #city').text($('#filter_city').val());
        $('.distance_subway_text #region').text($('#filter_region').val());
        $('.distance_subway_text #street').text($('#filter_street').val());
        $('.distance_subway_text #metro').text($('#filter_metro').val());
        $('.distance_subway_text #highway').text($('#filter_highway').val());
        $.magnificPopup.close();
    });


    /* login modal, signup modal */
    $('#modal_login, #modal_signup').dialog({
        modal: true,
        autoOpen: false,
        width: 560
    });
    $('#login').click(function(){
        $('#modal_login').dialog('open');
        $('.ui-widget-overlay').on('click', function(){
            $('#modal_login, #modal_signup').dialog('close');
        });
        return false;
    });
    if ( $('#rememberMe').prop('checked') ) {
        $('#_rememberMe').addClass('checked');
    }
    $('#_rememberMe, label[for="_rememberMe"]').click(function(){
        if ( !$('#rememberMe').prop('checked') ) {
            $('#_rememberMe').addClass('checked');
            $('#rememberMe').val('1').prop('checked', true);
        } else {
            $('#_rememberMe').removeClass('checked');
            $('#rememberMe').val('1').prop('checked', false);
        }
    });
    $('#signup').click(function(){
        $('#modal_login').dialog('close');
        $('#modal_signup').dialog('open');
        $('.ui-widget-overlay').on('click', function(){
            $('#modal_login, #modal_signup').dialog('close');
        });
        return false;
    });
});