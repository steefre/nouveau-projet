$(document).ready(function () {
    $('#slider').vide({
        'mp4': 'videos/Timelapse_of_Morocco',
        'poster': 'images/1',
    }, {
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%', // Similar to the CSS `background-position` property.
        posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
        resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
        bgColor: 'transparent', // Allow custom background-color for Vide div,
        className: '' // Add custom CSS class to Vide div
    });
    $('.btnstart .btn').click(function (e) {
        e.preventDefault();
        $('#slider').animate({
            'top': '-100vh'
        }, 'slow');

        $('.portfolio').animate({
            'top': 0,
        }, 'slow', function () {
            $('.portfolio').show();
            $('header').addClass('fondheader');
            //.
        });
    });
    //home page
    $(".dropdown-menu .home").click(function (e) {
        e.preventDefault();
        $(".portfolio").animate({
            top: '100vh'
        }, 'slow', function () {
            $('#portfolio').hide();
            $('#search').hide();
            $('header').removeClass('fondheader');
        });

        $(" #slider").animate({
            top: 0
        }, 'slow', function () {
            //$('.portfolio').hide();
        });
    });
    //drop down page
    $(".dropdown-menu .prod").click(function (e) {
        e.preventDefault();
        $(".btnstart .btn").click();
        $('#search').hide();


    });

    //search btn
    $('.btnsearch .btn').click(function (e) {
        e.preventDefault();
        $('#portfolio').animate({
            'top': '-150vh'
        }, 'slow');

        $('#search').animate({
            'top': 0
        }, 'slow', function () {
            $('#search').show();
            $('header').addClass('fondheader');

        });
    });
    //dropdown search
    /* $(".dropdown-menu .srch").click(function (e) {
         e.preventDefault();
         $(".btnsearch .btn").click();
         $('#slider').hide();
         $('#portfolio').hide();


     });
     */
    $("input[name='quoi']").click('focus', function (e) {
        e.preventDefault();
        console.log('focus');
        if (!$('.choix').hasClass('showToggle')) {
            $('.choix').addClass('showToggle');
            $('aside').show('slow');
            $('.where').hide();
            $('.choix>h2').css({
                'visibility': 'visible'
            });

        } else if ($('.choix').hasClass('showToggle')) {
            $('aside').show('slow');
            $('.where').hide();
        }


    });
    $("input[name='ou']").click('focus', function (e) {
        e.preventDefault();
        console.log('focus');
        if (!$('.choix').hasClass('showToggle')) {
            $('.choix').addClass('showToggle');
            $('aside').hide('slow');
            $('.where').show('slow');

            $('.choix>h2').css({
                'visibility': 'visible'
            });

        } else if ($('.choix').hasClass('showToggle')) {
            $('aside').hide('slow');
            $('.where').show('slow');
        }


    });

    // Qoui
    $("a[data-operation='quoi']").on('click', function (e) {
        e.preventDefault();
        $("input[name='quoi']").val($(this).text());
        $(".form-search input[name='type-activite']").val($(this).text());

    });


    // Ou
    $("a[data-operation='ou']").on('click', function (e) {
          e.preventDefault();
        $("input[name='ou']").val($(this).text());
        $(".form-search input[name='type-ou']").val($(this).attr('data-operation-type'));
        $(".form-search input[name='ou-title']").val($(this).text());



    });


})
