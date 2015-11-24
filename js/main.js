/*---- block -----*/
$(window).scroll(function () {
    $(".content-tree").css("background-position","50%" + -($(this).scrollTop() / 2) + "px");
});

/*---- block-1 -----*/
$(window).scroll(function () {
    $('.horizontal div.inline-block').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/1.5) /*-500 or -($(window).height()/3)*/ ){
            $(this).css('opacity', '1');
        }
        else{
            $(this).css('opacity', '0');
        }
    });
});

/*---- block-2 -----*/

$(window).scroll(function () {
    $('.problem-blocks div.inner-block').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top') - ($(window).height()/1.5) /*-500 or -($(window).height()/3)*/ ){
            $(this).css('opacity', '1');
        }else{
            $(this).css('opacity', '0');
        }
    });

    $('.inner-block:nth-child(odd) .image').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top') - ($(window).height()/1.5)){
            $(this).css('right','0'); /*.css('transform','translate (0 0)');*/
        }else{
            $(this).css('right','-1000'); /*.css('transform','translate (500px 0)');*/
        }
    });
    $('.inner-block:nth-child(even) .image').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top') - ($(window).height()/1.5)){
            $(this).css('left','0'); /*.css('transform','translate (0 0)');*/
        }else{
            $(this).css('left','-1000'); /*.css('transform','translate (500px 0)');*/
        }
    });

});

/*---- block-3 -----*/
$(window).scroll(function () {
    /*$('.flagTop, .flagBottom').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/1.5) *//*-500 or -($(window).height()/3)*//* ){
            $(this).css('opacity', '1');
        }else{
            $(this).css('opacity', '0');
        }
    });*/

    $('.flagTop .innerTop img:first-of-type, .flagTop .innerTop img:last-of-type').each(function() {
        $('.flagTop .innerTop img:first-of-type').attr('data-offset-top', $(this).offset().top);
        $('.flagTop .innerTop img:last-of-type').attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/1.1 ) /*-500 or -($(window).height()/3)*/ ){
            $('.flagTop .innerTop img:first-of-type').css('margin-right', '-1000px');
            $('.flagTop .innerTop img:last-of-type').css('margin-left', '-1000px');
        }
        else{
            $('.flagTop .innerTop img:first-of-type').css('margin-right', '1000px');
            $('.flagTop .innerTop img:last-of-type').css('margin-left', '1000px');
        }
    });
});


/*---- block-4 -----*/
$(window).scroll(function () {
    $('.innerBottom div').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/1.3) /*-500 or -($(window).height()/3)*/ ){
            $(this).css('opacity', '1');
        }
        else{
            $(this).css('opacity', '0');
        }
    });
});

/*---- block-6 -----*/
$(window).scroll(function () {
    $('.channels ul li').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/1.5) /*-500 or -($(window).height()/3)*/ ){
            $(this).css('opacity', '1');
        }
        else{
            $(this).css('opacity', '0');
        }
    });
});


/*---- block-7 -----*/
$(window).scroll(function () {

   /* $('.flaggray').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/1.7) *//*-500 or -($(window).height()/3)*//* ){
            $(this).css('opacity', '1');
        }
        else{
            $(this).css('opacity', '0');
        }
    });*/

    /*$('.flaggreen').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/1.7) *//*-500 or -($(window).height()/3)*//* ){
            $(this).css('opacity', '1');
        }
        else{
            $(this).css('opacity', '0');
        }
    });*/

    $('.flaggray .textleft, .flaggray img').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/1.7) /*-500 or -($(window).height()/3)*/ ){
            $('.flaggray .textleft').css('opacity', '1').css('right','0');
            $('.flaggray img').css('opacity', '1').css('left','0');
        }
        else{
            $('.flaggray .textleft').css('right','2000px');
            $('.flaggray img').css('left','2000px');
        }
    });

    $('.flaggreen .textleft, .flaggreen img').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/1.7) /*-500 or -($(window).height()/3)*/ ){
             $('.flaggreen .textleft').css('opacity', '1').css('right','0');
             $('.flaggreen img').css('opacity', '1').css('left','0');
        }
        else{
              $('.flaggreen .textleft').css('opacity', '0').css('right','2000px');
              $('.flaggreen img').css('opacity', '0').css('left','2000px');
        }
    });

});


/*---- block-8 -----*/
$(window).scroll(function () {
    $('.elements').each(function() {
        $(this).attr('data-offset-top', $(this).offset().top);

        if($(document).scrollTop() > $(this).attr('data-offset-top' ) - ($(window).height()/0.8) /*-500 or -($(window).height()/3)*/ ){
            $(this).css('bottom', '0');
        }
        else{
            $(this).css('bottom', '-500px');
        }
    });
});















