(function ($) {
    "use strict";

    // AOS Animation
    if ($("[data-aos]").length) {
        AOS.init({
            duration: '1200',
            disable: 'false',
            easing: 'ease',
            mirror: true
        });
    }

    // ===Round Progress Script===
    if ($('.dial').length) {
        $('.dial').appear(function () {
            var elm = $(this);
            var color = elm.attr('data-fgColor');
            var perc = elm.attr('value');
            elm.knob({
                'value': 0,
                'min': 0,
                'max': 100,
                'skin': 'tron',
                'readOnly': true,
                'thickness': 0.15,
                'dynamicDraw': true,
                'displayInput': false
            });
            $({
                value: 0
            }).animate({
                value: perc
            }, {
                duration: 2000,
                easing: 'swing',
                progress: function () {
                    elm.val(Math.ceil(this.value)).trigger('change');
                }
            });
            $(this).append(function () {});
        }, {
            accY: 20
        });
    }

    // ===SplitText Script===
    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
    });

    // ===Datepicker Script===
    if ($("#datepicker").length) {
        $("#datepicker").datepicker();
    }

    // ===FullHeight Script===
    function fullHeight() {
        $(".full-height").css("height", $(window).height());
    }

    // ===Price Filter Script===
    function priceFilter() {
        if ($(".price-ranger").length) {
            $(".price-ranger #slider-range").slider({
                range: true,
                min: 0,
                max: 500,
                values: [0, 300],
                slide: function (event, ui) {
                    $(".price-ranger .ranger-min-max-block .min").val("$" + ui.values[0]);
                    $(".price-ranger .ranger-min-max-block .max").val("$" + ui.values[1]);
                },
            });
            $(".price-ranger .ranger-min-max-block .min").val(
                "$" + $(".price-ranger #slider-range").slider("values", 0)
            );
            $(".price-ranger .ranger-min-max-block .max").val(
                "$" + $(".price-ranger #slider-range").slider("values", 1)
            );
        }
    }

    $(".add").on("click", function () {
        if ($(this).prev().val() < 999) {
            $(this)
                .prev()
                .val(+$(this).prev().val() + 1);
        }
    });
    $(".sub").on("click", function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1)
                $(this)
                .next()
                .val(+$(this).next().val() - 1);
        }
    });

    // ===Checkout Payment Script===
    if ($(".checkout__payment__title").length) {
        $(".checkout__payment__item").find(".checkout__payment__content").hide();
        $(".checkout__payment__item--active").find(".checkout__payment__content").show();

        $(".checkout__payment__title").on("click", function (e) {
            e.preventDefault();

            $(this)
                .parents(".checkout__payment")
                .find(".checkout__payment__item")
                .removeClass("checkout__payment__item--active");
            $(this).parents(".checkout__payment").find(".checkout__payment__content").slideUp();

            $(this).parent().addClass("checkout__payment__item--active");
            $(this).parent().find(".checkout__payment__content").slideDown();
        });
    }

    // ===Main Slider One Carousel===
    if ($(".main-slider-one__carousel").length > 0) {
        var bannerSlider = new Swiper(".main-slider-one__carousel", {
            spaceBetween: 0,
            slidesPerView: 1,
            effect: "fade",
            mousewheel: false,
            height: 500,
            grabCursor: true,
            loop: true,
            speed: 1400,
            autoplay: {
                delay: 10000,
            },
            pagination: {
                el: "#main-slider-pagination",
                type: "bullets",
                clickable: true,
            },
            navigation: {
                prevEl: "#main-slider-two__swiper-button-prev",
                nextEl: "#main-slider-two__swiper-button-next",
            },
        });
    }

    // ===Services One Carousel===
    if ($(".services-one__carousel").length) {
        $(".services-one__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: false,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-arrow-left"></span>',
                '<span class="icon-arrow-right"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
                1320: {
                    items: 4,
                },
            },
        });
    }

    // ===Testimonials One Carousel===
    if ($(".testimonials-one__carousel").length) {
        $(".testimonials-one__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: false,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-arrow-left"></span>',
                '<span class="icon-arrow-right"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
                1320: {
                    items: 1,
                },
            },
        });
    }

    // ===Testimonial Two Carousel===
    if ($(".testimonial-two__carousel").length) {
        $(".testimonial-two__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-arrow-left"></span>',
                '<span class="icon-arrow-right"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
                1320: {
                    items: 2,
                },
            },
        });
    }

    // ===Project One Carousel===
    if ($(".project-one__carousel").length > 0) {
        var projectoneslider = new Swiper(
            ".project-one__carousel", {
                spaceBetween: 2,
                slidesPerView: 5,
                mousewheel: false,
                height: 500,
                grabCursor: true,
                loop: true,
                speed: 1400,
                autoplay: {
                    delay: 10000,
                },
                pagination: {
                    el: "#project-one__pagination",
                    type: "bullets",
                    clickable: true,
                },
                navigation: {
                    prevEl: ".project-one__nav-prev",
                    nextEl: ".project-one__nav-next",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 2,
                    },
                    1320: {
                        slidesPerView: 5,
                        spaceBetween: 2,
                    },
                },
            }
        );
    }

    // ===Projects Details Carousel===
    if ($(".projects-details__img1-carousel").length) {
        $(".projects-details__img1-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: false,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-arrow-left"></span>',
                '<span class="icon-arrow-right"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1200: {
                    items: 1,
                },
                1320: {
                    items: 1,
                },
            },
        });
    }

    // ===Team One Carousel===
    if ($(".team-one__carousel").length > 0) {
        var projectoneslider = new Swiper(
            ".team-one__carousel", {
                spaceBetween: 30,
                slidesPerView: 4,
                mousewheel: false,
                height: 500,
                grabCursor: true,
                loop: true,
                speed: 1400,
                autoplay: {
                    delay: 10000,
                },
                pagination: {
                    el: "#team-one__pagination",
                    type: "bullets",
                    clickable: true,
                },
                navigation: {
                    prevEl: ".team-one__nav-prev",
                    nextEl: ".team-one__nav-next",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1320: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
            }
        );
    }

    // ===Marquee Mode===
    if ($(".marquee_mode").length) {
        $('.marquee_mode').marquee({
            speed: 30,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }

    // ===Marquee Mode===
    if ($(".marquee_mode-2").length) {
        $('.marquee_mode-2').marquee({
            speed: 30,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }

    // Quote One Tab
    if ($(".quote-tab").length) {
        $(".quote-tab .tabs-button-box .tab-btn-item").on("click", function (e) {
            e.preventDefault();
            var target = $($(this).attr("data-tab"));

            if ($(target).hasClass("actve-tab")) {
                return false;
            } else {
                $(".quote-tab .tabs-button-box .tab-btn-item").removeClass("active-btn-item");
                $(this).addClass("active-btn-item");
                $(".quote-tab .tabs-content-box .tab-content-box-item").removeClass(
                    "tab-content-box-item-active"
                );
                $(target).addClass("tab-content-box-item-active");
            }
        });
    }

    // Water Effect
    $('.main-slider-one__single.style2').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
    });

    /* Service js */
    let device_width = window.innerWidth;
    const serviceStack = gsap.utils.toArray(".service-stack");
    if (serviceStack.length > 0) {
        if (device_width > 991) {
            serviceStack.forEach(item => {
                gsap.to(item, {
                    opacity: 0,
                    scale: 0.9,
                    y: 50,
                    scrollTrigger: {
                        trigger: item,
                        scrub: true,
                        start: "top top",
                        pin: true,
                        pinSpacing: false,
                        markers: false,
                    },
                });
            });
        }
    }

    // ===Brand One Carousel===
    if ($(".brand-one__carousel").length) {
        $(".brand-one__carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: [
                '<span class="icon-right-arrow-1"></span>',
                '<span class="icon-right-arrow-1"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                500: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },
                1320: {
                    items: 5,
                },
            },
        });
    }

    // ===Related Products Carousel===
    if ($(".related-products__carousel").length) {
        $(".related-products__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 5000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>',
            ],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 3,
                },
                1320: {
                    items: 4,
                },
            },
        });
    }

    // ===Product All Tab===
    if ($(".product__all-tab").length) {
        $(".product__all-tab .tabs-button-box .tab-btn-item").on("click", function (e) {
            e.preventDefault();
            var target = $($(this).attr("data-tab"));

            if ($(target).hasClass("actve-tab")) {
                return false;
            } else {
                $(".product__all-tab .tabs-button-box .tab-btn-item").removeClass("active-btn-item");
                $(this).addClass("active-btn-item");
                $(".product__all-tab .tabs-content-box .tab-content-box-item").removeClass(
                    "tab-content-box-item-active"
                );
                $(target).addClass("tab-content-box-item-active");
            }
        });
    }

    // ===Product Details Carousel===
    if ($("#shop-details-one__thumb").length) {
        let testimonialsThumb = new Swiper("#shop-details-one__thumb", {
            slidesPerView: 3,
            spaceBetween: 0,
            speed: 1400,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            loop: true,
            autoplay: {
                delay: 5000
            }
        });

        let testimonialsCarousel = new Swiper("#shop-details-one__carousel", {
            observer: true,
            observeParents: true,
            loop: true,
            speed: 1400,
            mousewheel: false,
            slidesPerView: 1,
            autoplay: {
                delay: 5000
            },
            thumbs: {
                swiper: testimonialsThumb
            },
            pagination: {
                el: '#testimonials-one__carousel-pagination',
                type: 'bullets',
                clickable: true
            },

            "navigation": {
                "nextEl": "#product-details__swiper-button-next",
                "prevEl": "#product-details__swiper-button-prev"
            },
        });
    }

    // ===Type Effect===
    if ($('.typed-effect').length) {
        $('.typed-effect').each(function () {
            var typedStrings = $(this).data('strings');
            var typedTag = $(this).attr('id');
            var typed = new Typed('#' + typedTag, {
                typeSpeed: 100,
                backSpeed: 100,
                fadeOut: true,
                loop: true,
                strings: typedStrings.split(',')
            });
        });

    }

    // ===Tab One===
    if ($(".tab-box").length) {
        $(".tab-box .tabs-button-box .tab-btn-item").on("click", function (e) {
            e.preventDefault();
            var target = $($(this).attr("data-tab"));

            if ($(target).hasClass("tab-active")) {
                return false;
            } else {
                $(".tab-box .tabs-button-box .tab-btn-item").removeClass("active-btn");
                $(this).addClass("active-btn");
                $(".tab-box .tabs-content-box .tab").removeClass("tab-active");
                $(target).addClass("tab-active");
            }
        });
    }

    // ===Pricing One Tab===
    if ($(".pricing-one__tab").length) {
        $(".pricing-one__tab .tabs-button-box .tab-btn-item").on("click", function (e) {
            e.preventDefault();
            var target = $($(this).attr("data-tab"));

            if ($(target).hasClass("actve-tab")) {
                return false;
            } else {
                $(".pricing-one__tab .tabs-button-box .tab-btn-item").removeClass(
                    "active-btn-item"
                );
                $(this).addClass("active-btn-item");
                $(".pricing-one__tab .tabs-content-box .tab-content-box-item").removeClass(
                    "tab-content-box-item-active"
                );
                $(target).addClass("tab-content-box-item-active");
            }
        });
    }

    // ===Custom Coursor===
    if ($(".custom-cursor").length) {
        var cursor = document.querySelector(".custom-cursor__cursor");
        var cursorinner = document.querySelector(".custom-cursor__cursor-two");
        var a = document.querySelectorAll("a");

        document.addEventListener("mousemove", function (e) {
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        });

        document.addEventListener("mousemove", function (e) {
            var x = e.clientX;
            var y = e.clientY;
            cursorinner.style.left = x + "px";
            cursorinner.style.top = y + "px";
        });

        document.addEventListener("mousedown", function () {
            cursor.classList.add("click");
            cursorinner.classList.add("custom-cursor__innerhover");
        });

        document.addEventListener("mouseup", function () {
            cursor.classList.remove("click");
            cursorinner.classList.remove("custom-cursor__innerhover");
        });

        a.forEach((item) => {
            item.addEventListener("mouseover", () => {
                cursor.classList.add("custom-cursor__hover");
            });
            item.addEventListener("mouseleave", () => {
                cursor.classList.remove("custom-cursor__hover");
            });
        });
    }

    // ===Add Payment ===
    $(document).on("click", ".amount-btn", function () {
        $(".amount-btn").removeClass("active");

        $(this).addClass("active");

        let buttonValue = $(this).text();

        $(".addAmount-value").val(buttonValue);
    });

    // ===Progress Count Bar===
    if ($(".count-bar").length) {
        $(".count-bar").appear(
            function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
            }, {
                accY: -50,
            }
        );
    }

    // ===Fact Counter===
    if ($(".count-box").length) {
        $(".count-box").appear(
            function () {
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text(),
                    }).animate({
                        countNum: n,
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        },
                    });
                }
            }, {
                accY: 0,
            }
        );
    }

    // ===Accrodion===
    if ($(".accrodion-grp").length) {
        var accrodionGrp = $(".accrodion-grp");
        accrodionGrp.each(function () {
            var accrodionName = $(this).data("grp-name");
            var Self = $(this);
            var accordion = Self.find(".accrodion");
            Self.addClass(accrodionName);
            Self.find(".accrodion .accrodion-content").hide();
            Self.find(".accrodion.active").find(".accrodion-content").show();
            accordion.each(function () {
                $(this)
                    .find(".accrodion-title")
                    .on("click", function () {
                        if ($(this).parent().hasClass("active") === false) {
                            $(".accrodion-grp." + accrodionName)
                                .find(".accrodion")
                                .removeClass("active");
                            $(".accrodion-grp." + accrodionName)
                                .find(".accrodion")
                                .find(".accrodion-content")
                                .slideUp();
                            $(this).parent().addClass("active");
                            $(this).parent().find(".accrodion-content").slideDown();
                        }
                    });
            });
        });
    }

    // ===Chat Popup===
    if ($('#chat-popup').length) {

        //Show Popup
        $('.chat-toggler').on('click', function () {
            $('#chat-popup').addClass('popup-visible');
        });
        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                $('#chat-popup').removeClass('popup-visible');
            }
        });
        //Hide Popup
        $('.close-chat,.chat-popup .overlay-layer').on('click', function () {
            $('#chat-popup').removeClass('popup-visible');
        });
    }

    // ===WhatsApp form submissions===
    var WHATSAPP_NUMBER = "66814785100";

    function buildWhatsAppMessage($form) {
        var lines = [];
        $form.find("input, textarea, select").each(function () {
            var $el = $(this);
            var type = ($el.attr("type") || "").toLowerCase();
            if (type === "submit" || type === "button" || type === "hidden" || type === "file" || type === "search") {
                return;
            }
            if ((type === "checkbox" || type === "radio") && !$el.is(":checked")) {
                return;
            }

            var label = $el.attr("name") || $el.attr("placeholder") || $el.attr("aria-label") || "";
            var value = "";

            if ($el.is("select")) {
                value = $.trim($el.find("option:selected").text());
                var selectedVal = $.trim($el.val() || "");
                // Skip placeholder options
                if (!selectedVal || /^(subject|freight type|load|how can we help)/i.test(value)) {
                    return;
                }
                if (!label) {
                    label = "Option";
                }
            } else {
                value = $.trim($el.val() || "");
            }

            if (!label || !value) {
                return;
            }

            label = label.replace(/[_-]+/g, " ").replace(/\s+/g, " ").replace(/\b\w/g, function (c) {
                return c.toUpperCase();
            });
            lines.push(label + ": " + value);
        });

        if (!lines.length) {
            return "Hello Swift Resources, I would like to get in touch.";
        }
        return "Hello Swift Resources,\n\n" + lines.join("\n");
    }

    function openWhatsAppWithForm($form) {
        var message = buildWhatsAppMessage($form);
        var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
        window.open(url, "_blank");
    }

    function isSearchForm($form) {
        return (
            $form.hasClass("sidebar__search-form") ||
            $form.hasClass("error-page__form") ||
            $form.closest(".search-popup").length > 0 ||
            $form.find('[aria-label="search products"]').length > 0 ||
            $form.find(".icon-search-interface-symbol").length > 0
        );
    }

    if ($(".contact-form-validated").length) {
        $(".contact-form-validated").each(function () {
            let self = $(this);
            var isQuoteForm = self.hasClass("why-choose-one__form");
            var isContactPage = self.hasClass("contact-page__form");

            var rules = {
                name: { required: true },
                email: { required: true, email: true },
                Phone: { required: true },
            };

            if (isContactPage || self.find('[name="message"]').length) {
                rules.message = { required: true };
            }
            if (self.find('[name="subject"]').length) {
                rules.subject = { required: true };
            }
            if (isQuoteForm || isContactPage) {
                if (self.find('[name="origin"]').length) {
                    rules.origin = { required: true };
                }
                if (self.find('[name="destination"]').length) {
                    rules.destination = { required: true };
                }
            }

            self.validate({
                ignore: ":hidden:not(select)",
                rules: rules,
                submitHandler: function (form) {
                    openWhatsAppWithForm($(form));
                    form.reset();
                    // refresh nice-select display after reset
                    $(form).find("select").each(function () {
                        if ($(this).next(".nice-select").length) {
                            $(this).niceSelect("update");
                        }
                    });
                    return false;
                },
            });
        });
    }

    // Route other form submits (newsletter, login, signup, etc.) to WhatsApp
    $(document).on("submit", "form", function (e) {
        var $form = $(this);
        if (isSearchForm($form) || $form.hasClass("contact-form-validated")) {
            return;
        }
        e.preventDefault();
        openWhatsAppWithForm($form);
    });

    // ===Mailchimp Form===
    if ($(".mc-form").length) {
        $(".mc-form").each(function () {
            var Self = $(this);
            var mcURL = Self.data("url");
            var mcResp = Self.parent().find(".mc-form__response");

            Self.ajaxChimp({
                url: mcURL,
                callback: function (resp) {
                    // appending response
                    mcResp.append(function () {
                        return '<p class="mc-message">' + resp.msg + "</p>";
                    });
                    // making things based on response
                    if (resp.result === "success") {
                        // Do stuff
                        Self.removeClass("errored").addClass("successed");
                        mcResp.removeClass("errored").addClass("successed");
                        Self.find("input").val("");

                        mcResp.find("p").fadeOut(10000);
                    }
                    if (resp.result === "error") {
                        Self.removeClass("successed").addClass("errored");
                        mcResp.removeClass("successed").addClass("errored");
                        Self.find("input").val("");

                        mcResp.find("p").fadeOut(10000);
                    }
                },
            });
        });
    }

    // ===Video Popup===
    if ($(".video-popup").length) {
        $(".video-popup").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false,
        });
    }

    // ===Img Popup===
    if ($(".img-popup").length) {
        var groups = {};
        $(".img-popup").each(function () {
            var id = parseInt($(this).attr("data-group"), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });

        $.each(groups, function () {
            $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                },
            });
        });
    }

    //=== CountDownTimer===
    if ($(".coming-soon-countdown").length) {
        $(".coming-soon-countdown").each(function () {
            var Self = $(this);
            var countDate = Self.data("countdown-time"); // getting date

            Self.countdown(countDate, function (event) {
                $(this).html(
                    '<li> <div class="box"> <span class="days">' +
                    event.strftime("%D") +
                    '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' +
                    event.strftime("%H") +
                    '</span> <span class="timeRef clr-1">hrs</span> </div> </li> <li> <div class="box"> <span class="minutes">' +
                    event.strftime("%M") +
                    '</span> <span class="timeRef clr-2">mins</span> </div> </li> <li> <div class="box"> <span class="seconds">' +
                    event.strftime("%S") +
                    '</span> <span class="timeRef clr-3">secs</span> </div> </li>'
                );
            });
        });
    }

    function dynamicCurrentMenuClass(selector) {
        let fileName = window.location.pathname.split("/").pop() || "index.html"; // Default to index.html if no file name
        console.log("Current file:", fileName);

        // Remove existing 'current' classes to avoid duplicates
        selector.find("li").removeClass("current");

        // Iterate through all <li> elements, including nested ones
        selector.find("li").each(function () {
            let anchor = $(this).find("a").first(); // Get the first <a> in the <li>
            if (anchor.length && anchor.attr("href") === fileName) {
                $(this).addClass("current"); // Add 'current' to the matching <li>
                // Add 'current' to parent <li> if it exists (for dropdowns)
                let parentLi = $(this).closest("li.dropdown");
                if (parentLi.length) {
                    parentLi.addClass("current");
                }
            }
        });

        // If no match is found, add 'current' to the first top-level <li> (Home)
        if (!selector.find("li.current").length) {
            selector.children("li").first().addClass("current");
        }
    }

    if ($(".main-menu__list").length) {
        // dynamic current class
        let mainNavUL = $(".main-menu__list");
        dynamicCurrentMenuClass(mainNavUL);
    }

    if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
        let navContent = document.querySelector(".main-menu__list").outerHTML;
        let mobileNavContainer = document.querySelector(".mobile-nav__container");
        mobileNavContainer.innerHTML = navContent;
    }
    if ($(".sticky-header__content").length) {
        let navContent = document.querySelector(".main-menu").innerHTML;
        let mobileNavContainer = document.querySelector(".sticky-header__content");
        mobileNavContainer.innerHTML = navContent;
    }

    if ($(".mobile-nav__container .main-menu__list").length) {
        let dropdownAnchor = $(".mobile-nav__container .main-menu__list .dropdown > a");
        dropdownAnchor.each(function () {
            let self = $(this);
            let toggleBtn = document.createElement("BUTTON");
            toggleBtn.setAttribute("aria-label", "dropdown toggler");
            toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
            self.append(function () {
                return toggleBtn;
            });
            self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("expanded");
                self.parent().toggleClass("expanded");
                self.parent().parent().children("ul").slideToggle();
            });
        });
    }

    if ($(".mobile-nav__toggler").length) {
        $(".mobile-nav__toggler").on("click", function (e) {
            e.preventDefault();
            $(".mobile-nav__wrapper").toggleClass("expanded");
            $("body").toggleClass("locked");
        });
    }

    // ===Search Popup===
    if ($(".search-popup").length > 0) {
        $(".open-search").on("click", function () {
            $("body").addClass("search-active");
        });

        $(".close-search").on("click", function () {
            $("body").removeClass("search-active");
        });
    }

    // ===Odometer===
    if ($(".odometer").length) {
        var odo = $(".odometer");
        odo.each(function () {
            $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }

    // ===Dynamic Year===
    if ($(".dynamic-year").length) {
        let date = new Date();
        $(".dynamic-year").html(date.getFullYear());
    }

    // ===Wow===
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow", // animated element css class (default is wow)
            animateClass: "animated", // animation css class (default is animated)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    // ===Tab Two===
    if ($(".tabs-box").length) {
        $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
            e.preventDefault();
            var target = $($(this).attr("data-tab"));

            if ($(target).is(":visible")) {
                return false;
            } else {
                target
                    .parents(".tabs-box")
                    .find(".tab-buttons")
                    .find(".tab-btn")
                    .removeClass("active-btn");
                $(this).addClass("active-btn");
                target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
                target
                    .parents(".tabs-box")
                    .find(".tabs-content")
                    .find(".tab")
                    .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
            }
        });
    }


    // ===Project Masonary Layout===
    function projectMasonaryLayout() {
        if ($(".masonary-layout").length) {
            $(".masonary-layout").isotope({
                layoutMode: "masonry",
            });
        }
        if ($(".post-filter").length) {
            $(".post-filter li")
                .children(".filter-text")
                .on("click", function () {
                    var Self = $(this);
                    var selector = Self.parent().attr("data-filter");
                    $(".post-filter li").removeClass("active");
                    Self.parent().addClass("active");
                    $(".filter-layout").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: "linear",
                            queue: false,
                        },
                    });
                    return false;
                });
        }

        if ($(".post-filter.has-dynamic-filters-counter").length) {
            // var allItem = $('.single-filter-item').length;
            var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find("li");
            activeFilterItem.each(function () {
                var filterElement = $(this).data("filter");
                var count = $(".filter-layout").find(filterElement).length;
                $(this)
                    .children(".filter-text")
                    .append('<span class="count">' + count + "</span>");
            });
        }
    }

    // ===Scroll To Link===
    function SmoothMenuScroll() {
        var anchor = $(".scrollToLink");
        if (anchor.length) {
            anchor.children("a").bind("click", function (event) {
                if ($(window).scrollTop() > 10) {
                    var headerH = "90";
                } else {
                    var headerH = "90";
                }
                var target = $(this);
                $("html, body")
                    .stop()
                    .animate({
                            scrollTop: $(target.attr("href")).offset().top - headerH + "px",
                        },
                        200,
                        "easeInOutExpo"
                    );
                anchor.removeClass("current");
                anchor.removeClass("current-menu-ancestor");
                anchor.removeClass("current_page_item");
                anchor.removeClass("current-menu-parent");
                target.parent().addClass("current");
                event.preventDefault();
            });
        }
    }
    SmoothMenuScroll();

    // ===One Page Scroll Menu===
    function OnePageMenuScroll() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 117) {
            var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
            menuAnchor.each(function () {
                var sections = $(this).attr("href");
                $(sections).each(function () {
                    if ($(this).offset().top <= windscroll + 100) {
                        var Sectionid = $(sections).attr("id");
                        $(".one-page-scroll-menu").find("li").removeClass("current");
                        $(".one-page-scroll-menu").find("li").removeClass("current-menu-ancestor");
                        $(".one-page-scroll-menu").find("li").removeClass("current_page_item");
                        $(".one-page-scroll-menu").find("li").removeClass("current-menu-parent");
                        $(".one-page-scroll-menu")
                            .find("a[href*=\\#" + Sectionid + "]")
                            .parent()
                            .addClass("current");
                    }
                });
            });
        } else {
            $(".one-page-scroll-menu li.current").removeClass("current");
            $(".one-page-scroll-menu li:first").addClass("current");
        }
    }

    // ===Handle Scrollbar ===
    function handleScrollbar() {
        const bodyHeight = $("body").height();
        const scrollPos = $(window).innerHeight() + $(window).scrollTop();
        let percentage = (scrollPos / bodyHeight) * 100;
        if (percentage > 100) {
            percentage = 100;
        }
        $(".scroll-to-top .scroll-to-top__inner").css("width", percentage + "%");
    }

    // ===Animation Gsap===
    function title_animation() {
        var tg_var = jQuery(".sec-title-animation");
        if (!tg_var.length) {
            return;
        }
        const quotes = document.querySelectorAll(".sec-title-animation .title-animation");

        quotes.forEach((quote) => {
            //Reset if needed
            if (quote.animation) {
                quote.animation.progress(1).kill();
                quote.split.revert();
            }

            var getclass = quote.closest(".sec-title-animation").className;
            var animation = getclass.split("animation-");
            if (animation[1] == "style4") return;

            quote.split = new SplitText(quote, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });
            gsap.set(quote, {
                perspective: 400,
            });

            if (animation[1] == "style1") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    y: "90%",
                    rotateX: "-40deg",
                });
            }
            if (animation[1] == "style2") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    x: "50",
                });
            }
            if (animation[1] == "style3") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                });
            }
            quote.animation = gsap.to(quote.split.chars, {
                scrollTrigger: {
                    trigger: quote,
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: 0.02,
            });
        });
    }
    ScrollTrigger.addEventListener("refresh", title_animation);

    // ===Window Load Event===
    $(window).on("load", function () {
        projectMasonaryLayout();
        fullHeight();
        title_animation();
        priceFilter();

        // Preloader
        $(".js-preloader").delay(700).fadeOut(500);

        if ($(".post-filter").length) {
            var postFilterList = $(".post-filter li");
            // for first init
            $(".filter-layout").isotope({
                filter: ".filter-item",
                animationOptions: {
                    duration: 500,
                    easing: "linear",
                    queue: false,
                },
            });
            // on click filter links
            postFilterList.on("click", function () {
                var Self = $(this);
                var selector = Self.attr("data-filter");
                postFilterList.removeClass("active");
                Self.addClass("active");

                $(".filter-layout").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: "linear",
                        queue: false,
                    },
                });
                return false;
            });
        }

        if ($(".post-filter.has-dynamic-filter-counter").length) {
            // var allItem = $('.single-filter-item').length;

            var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find("li");

            activeFilterItem.each(function () {
                var filterElement = $(this).data("filter");
                var count = $(".filter-layout").find(filterElement).length;
                $(this).append("<sup>[" + count + "]</sup>");
            });
        }

        // About Two Curved Circle
        if ($(".about-two__curved-circle").length) {
            $(".about-two__curved-circle").circleType({
                position: "absolute",
                dir: 1,
                radius: 75,
                forceHeight: true,
                forceWidth: true,
            });
        }

        if ($('.curved-circle').length) {
            $('.curved-circle').circleType({
                position: 'absolute',
                dir: 1,
                radius: 80,
                forceHeight: true,
                forceWidth: true
            });
        }

        //Image Reveal Animation
        if ($(".reveal").length) {
            gsap.registerPlugin(ScrollTrigger);
            let revealContainers = document.querySelectorAll(".reveal");
            revealContainers.forEach((container) => {
                let image = container.querySelector("img");
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        toggleActions: "play none none none",
                    },
                });
                tl.set(container, {
                    autoAlpha: 1,
                });
                tl.from(container, 1.5, {
                    xPercent: -100,
                    ease: Power2.out,
                });
                tl.from(image, 1.5, {
                    xPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.out,
                });
            });
        }



    });

    // ===Window Scroll Event===
    $(window).on("scroll", function () {
        if ($(".stricked-menu").length) {
            var headerScrollPos = 130;
            var stricky = $(".stricked-menu");
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass("stricky-fixed");
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass("stricky-fixed");
            }
        }

        OnePageMenuScroll();
    });

    $(window).on("scroll", function () {
        handleScrollbar();
        if ($(".sticky-header--one-page").length) {
            var headerScrollPos = 130;
            var stricky = $(".sticky-header--one-page");
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass("active");
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass("active");
            }
        }

        var scrollToTopBtn = ".scroll-to-top";
        if (scrollToTopBtn.length) {
            if ($(window).scrollTop() > 500) {
                $(scrollToTopBtn).addClass("show");
            } else {
                $(scrollToTopBtn).removeClass("show");
            }
        }
    });

    //===Tg Title Animation===
    gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
    });

    function tg_title_animation() {
        var tg_var = jQuery(".tg-heading-subheading");
        if (!tg_var.length) {
            return;
        }
        const quotes = document.querySelectorAll(".tg-heading-subheading .tg-element-title");

        quotes.forEach((quote) => {
            //Reset if needed
            if (quote.animation) {
                quote.animation.progress(1).kill();
                quote.split.revert();
            }

            var getclass = quote.closest(".tg-heading-subheading").className;
            var animation = getclass.split("animation-");
            if (animation[1] == "style4") return;

            quote.split = new SplitText(quote, {
                type: "lines,words,chars",
                linesClass: "split-line",
            });
            gsap.set(quote, {
                perspective: 400,
            });

            if (animation[1] == "style1") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    y: "90%",
                    rotateX: "-40deg",
                });
            }
            if (animation[1] == "style2") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                    x: "50",
                });
            }
            if (animation[1] == "style3") {
                gsap.set(quote.split.chars, {
                    opacity: 0,
                });
            }
            quote.animation = gsap.to(quote.split.chars, {
                scrollTrigger: {
                    trigger: quote,
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                opacity: 1,
                duration: 1,
                ease: Back.easeOut,
                stagger: 0.02,
            });
        });
    }
    ScrollTrigger.addEventListener("refresh", tg_title_animation);


    //===Nice Select===
    $("select:not(.ignore)").niceSelect();


})(jQuery);