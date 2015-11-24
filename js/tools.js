jQuery(function($){
    function parallax() {
        $.parallaxify({
            positionProperty: 'transform'
        });
    }

    function morefy() {
        $('.clients .more').on('click', function(e) {
            e.preventDefault();

            var $prev = $('.clients .block:visible'),
                $next = $prev.next('.block');

            if(!$next.length) {
                $next = $('.clients .block:first');
            }

            $next.fadeIn();
            $prev.fadeOut();
        })

        $('.partners .more').on('click', function(e) {
            e.preventDefault();

            var $prev = $('.partners .block:visible'),
                $next = $prev.next('.block');

            if(!$next.length) {
                $next = $('.partners .block:first');
            }

            $next.fadeIn();
            $prev.fadeOut();
        })
    }

    function maps() {
        var $mapBlock = $('.map');
        if($mapBlock.length) {
            var sch = new Scheduler(function() {
                var map = new Map();
                map.show($mapBlock);

                map.setPin({
                    image: 'images/placemark.png',
                    size: {
                        w: 116, h: 159
                    },
                    point: {
                        x: 55, y: 137
                    }
                })

                this.add($mapBlock.data('address'));

                this.onFinish = function() {
                    for(var i = 0; i < this.results.length; i++) {
                        var coords = this.results[i];

                        map.addPoint(coords, $mapBlock.data('address'));
                    }
                }

                this.run();
            });
        }

    }

    function slider() {
        var $slides = $('.principes .slider .item');
        var $item = $slides.first();
        $slides.not($item).hide();

        setTimeout(function() {
            $item.addClass('animate');
        }, 1000);

        function showNav(idx) {
            $nav.children('div').removeClass('active');
            $nav.children('div').eq(idx).addClass('active');
        }

        function nextSlide() {
            var $next = $item.next('.item');
            if(!$next.length) {
                $next = $slides.first();
            }
            $item
                .fadeOut(500)
                //.removeClass('animate')
                .addClass('leave');

            $next
                .show()
                .removeClass('leave')
                .addClass('animate');

            $item = $next;

            showNav($next.index());
        }

        function prevSlide() {
            var $next = $item.prev('.item');
            if(!$next.length) {
                $next = $slides.last();
            }
            $item
                .fadeOut(500)
                .removeClass('animate')
                .addClass('leave');

            $next
                .show()
                //.removeClass('leave')
                .addClass('animate');

            $item = $next;

            showNav($next.index());
        }

        function slideByIdx(idx) {
            var $next = $slides.eq(idx);
            if(!$next.length) {
                $next = $slides.last();
            }
            $item
                .removeClass('animate');

            $item.detach();
            $next.before($item);

            $item
                .fadeOut(700)
                .addClass('leave');

            setTimeout(function() {
                $next
                    .show()
                    .removeClass('leave')
                    .addClass('animate');
            }, 400);


            $item = $next;

            showNav($next.index());
        }

        $('.principes .slider .navigation div').remove();
        var $nav = $('.principes .slider .navigation');

        $slides.each(function(){
            $nav.append('<div></div>');
        });

        showNav(0);

        setInterval(nextSlide, 30000);

        $('.principes .slider .next').on('click', function(e) {
            e.preventDefault();
            nextSlide();
        });

        $('.principes .slider .prev').on('click', function(e) {
            e.preventDefault();
            prevSlide();
        });

        $('.principes .slider .navigation div').on('click', function() {
            slideByIdx($(this).index());
        })
    }

    function portfolio() {
        function scrollHandler(e) {
            var $btn = e.data.find('button');

            if($(window).scrollTop() > e.data.offset().top && $(window).scrollTop() + $(window).height() < e.data.offset().top + e.data.height()) {
                $btn.addClass('floating');
            } else {
                $btn.removeClass('floating');
            }
        }

        $('.portfolio .mainImage, .portfolio button')
            .on('click', function(e) {
                e.preventDefault();

                var $desc = $(this).closest('.portfolio').find('.portfolioDescription'),
                    $pf = $(this).closest('.portfolio'),
                    $btn = $pf.find('button');

                var vis = $desc.is(':visible');

                $desc.slideToggle();

                if(!vis) {
                    $('html,body').animate({
                        scrollTop: $desc.offset().top
                    })

                    $pf.data('uniqid', Math.round(Math.random() * 10000));

                    $(window)
                        .on('scroll.' + $pf.data('uniqid'), null, $pf, scrollHandler);
                } else {
                    $('html,body').animate({
                        scrollTop: $pf.offset().top
                    })

                    $(window)
                        .off('scroll.' + $pf.data('uniqid'), scrollHandler);
                }

            });


    }

    function popups() {
        $('header .send')
            .on('click', function(e) {
                e.preventDefault();

                $.fancybox.open($('.popup'));
            })

    }

    function forms() {
        function setMailHandler(formSelector, formLink) {
            var $form = $(formSelector);

            $form.on('submit', function (e) {
                e.preventDefault();

                $form.find('input, textarea').removeClass('error');

                var $btn = $('button', $form);
                $btn.prop('disabled', true);

                $.post(formLink,
                    $form.serialize(),
                    function (res) {
                        switch (res.status) {
                            case 'wrong':
                                $.each(res.fields, function (id, val) {
                                    $form.find('[name=' + val + ']').addClass('error');
                                });
                                break;

                            case 'error':
                                alert('Ошибка при отправке: ' + res.message);
                                break;

                            default:
                                $.fancybox.open($('.thanks'), {
                                    wrapCSS: 'bigClose'
                                });
                        }

                        $btn.prop('disabled', false);
                    },
                    'json'
                );

                return false;
            });
        }

        $('form').each(function(){
            setMailHandler(this, './mail/');
        })
    }

    function fixspeaker() {
        var $spk = $('.speaker');
        $(window).scrollTop(0);

        if($spk.length) {
            var spkPos = $spk.offset(),
                $col2 = $('.col2').last();


            $(window).on('scroll', function(e) {
                if($(window).scrollTop() > spkPos.top && $(window).scrollTop() + $spk.height() < $col2.height() + $col2.offset().top) {
                    $spk
                        .css({
                            position: 'relative',
                            top: $(window).scrollTop() - spkPos.top + 70
                        })
                }
            })
        }
    }

    function smooth() {
        var target = null;

        if(/webkit/i.test(navigator.userAgent.toLowerCase())) {
            target = 'html,body';
        } else {
            target = 'html';
        }

        $(target)
            .smoothWheel();
    }


    var handlers = [
        parallax,
        morefy,
        maps,
        slider,
        portfolio,
        popups,
        forms,
        fixspeaker,
        smooth
    ];

    $.each(handlers, function(i, handler){
        try {
            handler.call();
        } catch (e) {
            console.log('Error! ' + e.stack);
        }
    });
});