jQuery(document).ready(function($){
    // document start
     // Navbar
     $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
     $('.navbar-nav li .clickD').click(function(e) {
         e.preventDefault();
         var $this = $(this);
         if ($this.next().hasClass('show'))
            {
                $this.next().removeClass('show');
                $this.removeClass('toggled');
            } 
            else 
            {
                $this.parent().parent().find('.sub-menu').removeClass('show');
                $this.parent().parent().find('.toggled').removeClass('toggled');
                $this.next().toggleClass('show');
                $this.toggleClass('toggled');
            }
     });
    
     $(window).on('resize', function(){
         if ($(this).width() < 1025) {
             $('html').click(function(){
                 $('.navbar-nav li .clickD').removeClass('toggled');
                 $('.toggled').removeClass('toggled');
                 $('.sub-menu').removeClass('show');
             });
             $(document).click(function(){
                 $('.navbar-nav li .clickD').removeClass('toggled');
                 $('.toggled').removeClass('toggled');
                 $('.sub-menu').removeClass('show');
             });
             $('.navbar-nav').click(function(e){
                e.stopPropagation();
             });
         }
     });

    $(".navbar-toggler").click(function(){
        $(".navbar-toggler").toggleClass("open");
        $(".navbar-toggler .stick").toggleClass("open");
        $('body,html' ).toggleClass("open-nav");
    });
    
    // Navbar end
    
    
    // Sticky Nav
        $(window).scroll(function() {     
            var scroll = $(window).scrollTop();     
            if (scroll > 0) { 
                $(".main-head").addClass("fixed"); 
            } 
            else {
            $(".main-head").removeClass("fixed"); 
            }
        })

        $('.js-banner').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false
                  }
                }
              ]
          });

        //   counter

        var counted = 0;
        $(window).on("scroll", function () {
            var $counter = $("#counter");
        
            if ($counter.length) { // Ensure #counter exists before proceeding
                var oTop = $counter.offset().top - window.innerHeight;
        
                if (counted == 0 && $(window).scrollTop() > oTop) {
                    $(".count").each(function () {
                        var $this = $(this),
                            countTo = $this.attr("data-count");
                        $({ countNum: $this.text() }).animate(
                            { countNum: countTo },
                            {
                                duration: 5000,
                                easing: "swing",
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum); // Ensure final value is exact
                                },
                            }
                        );
                    });
                    counted = 1;
                }
            }
        });

        $('.js-service-card').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });

          $(".accordion-item:first .accordion-content").show();
          $(".accordion-item:first .accordion-header").addClass("active");
      
          $(".accordion-header").click(function () {
              var content = $(this).next(".accordion-content");
      
              // Toggle the clicked section without closing others
              content.slideToggle();
              $(this).toggleClass("active");
          });
      



          $(document).ready(function () {
            const $minSlider = $("#minRange");
            const $maxSlider = $("#maxRange");
            const $minLabel = $("#minLabel");
            const $maxLabel = $("#maxLabel");
            const $highlight = $(".range-highlight");

            function updateSliders() {
                let minValue = parseInt($minSlider.val());
                let maxValue = parseInt($maxSlider.val());

                // Prevent overlapping
                if (minValue >= maxValue - 100) {
                    minValue = maxValue - 100;
                    $minSlider.val(minValue);
                }

                if (maxValue <= minValue + 100) {
                    maxValue = minValue + 100;
                    $maxSlider.val(maxValue);
                }

                // Update price labels
                $minLabel.text(`₹ ${minValue.toLocaleString()}`);
                $maxLabel.text(`₹ ${maxValue.toLocaleString()}`);

                // Calculate percentages
                const minPercent = (minValue / $minSlider.attr("max")) * 100;
                const maxPercent = (maxValue / $maxSlider.attr("max")) * 100;

                // Position the labels
                $minLabel.css("left", `${minPercent}%`);
                $maxLabel.css("left", `${maxPercent}%`);

                // Update highlight track
                $highlight.css({
                    left: `${minPercent}%`,
                    width: `${maxPercent - minPercent}%`
                });
            }

            // Event Listeners
            $minSlider.on("input", updateSliders);
            $maxSlider.on("input", updateSliders);

            // Initialize
            updateSliders();
        });

        // $(document).ready(function () {
        //     $(window).on("scroll", function () {
        //         var totalHeight = $(".main-head").outerHeight() + $(".inner-banner").outerHeight();
        //         var productEnd = $(".product-listing").offset().top + $(".product-listing").outerHeight();
        //         var scrollPos = $(window).scrollTop();

        //         if (scrollPos >= totalHeight && scrollPos < productEnd) {
        //             $(".btn-filter-list").addClass("active");
        //         } else {
        //             $(".btn-filter-list").removeClass("active");
        //         }
        //     });

        //     $('.btn-filter-list').click(function() {
        //         $(this).toggleClass('open');
        //         $('.prdc-col-left').toggleClass('active');
        //     })
        // });

        $(document).ready(function () {
            $(window).on("scroll", function () {
                var totalHeight = ($(".main-head").outerHeight() || 0) + ($(".inner-banner").outerHeight() || 0);
                
                var productListing = $(".product-listing");
                var productEnd = 0;
        
                if (productListing.length) {
                    productEnd = productListing.offset().top + productListing.outerHeight();
                }
        
                var scrollPos = $(window).scrollTop();
        
                if (scrollPos >= totalHeight && scrollPos < productEnd) {
                    $(".btn-filter-list").addClass("active");
                } else {
                    $(".btn-filter-list").removeClass("active");
                }
            });
        
            $('.btn-filter-list').click(function () {
                $(this).toggleClass('open');
                $('.prdc-col-left').toggleClass('active');
            });
        });

        if($("[data-fancybox]").length){ 
            Fancybox.bind("[data-fancybox]", {
            });
        }


        $('.main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            dots: true,
            asNavFor: '.thumbnail-slider'
        });
    
        $('.thumbnail-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.main-slider',
            vertical: true,
            verticalSwiping: true,
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                  }
                },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      vertical: false,
                    verticalSwiping: false,
                    }
                  }
              ]
        });

        // coumter

        $(".increase").click(function(){
            let counterElement = $(this).siblings(".counter");
            let count = parseInt(counterElement.text());
            counterElement.text(count + 1);
        });
    
        $(".decrease").click(function(){
            let counterElement = $(this).siblings(".counter");
            let count = parseInt(counterElement.text());
            if(count > 1) {
                counterElement.text(count - 1);
            }
        });

        // tab menu
        $(".tab-btn").click(function () {
            $(".tab-content").removeClass("active");
            $(".tab-btn").removeClass("active");

            let tabId = $(this).data("tab");
            $("#" + tabId).addClass("active");
            $(this).addClass("active");
        });

        // related-products

        $('.js-rel-pdc-cd').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });

        // logo slider
        $('.js-logo-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1,
            speed: 5000,
            dots: false,
            arrows: false,
            cssEase: 'linear',
            waitForAnimate: false,
            pauseOnFocus: false, 
            pauseOnHover: false,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 5,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                }
              ]
          });

          // step form

            $(".two-step-button-prg").each(function () {
                let stepContainer = $(this);
                let steps = stepContainer.closest("form").find(".step");
                let progressBar = stepContainer.find(".progress-bar");
                let stepIndicators = stepContainer.find(".two-step-button ul li");
                let personalDetailsSec = $(".personal-details-sec"); // Target the section
                let currentStep = 0;
        
                function showStep(index) {
                    steps.hide();
                    steps.eq(index).show();
        
                    // Progress Bar Logic (Step 1: 0%, Step 2: 100%)
                    let progress = index === 0 ? 0 : 100;
                    progressBar.css("width", progress + "%").attr("aria-valuenow", progress);
        
                    // Update active step indicators
                    stepIndicators.removeClass("active");
                    stepIndicators.each(function (i) {
                        if (i <= index) {
                            $(this).addClass("active");
                        }
                    });
        
                    // Add class when the last step is shown
                    if (index === steps.length - 1) {
                        personalDetailsSec.addClass("active");
                    } else {
                        personalDetailsSec.removeClass("active");
                    }
                }
        
                stepContainer.closest("form").find(".next-step").click(function () {
                    if (currentStep < steps.length - 1) {
                        currentStep++;
                        showStep(currentStep);
                    }
                });
        
                stepContainer.closest("form").find(".prev-step").click(function () {
                    if (currentStep > 0) {
                        currentStep--;
                        showStep(currentStep);
                    }
                });
        
                stepContainer.closest("form").find(".submit-step").click(function () {
                    currentStep++;
                    showStep(currentStep);
                });
        
                showStep(currentStep);
            });

            // inpu type number
            $(document).ready(function () {
              const input = document.querySelector("#phone");
              if (input) {
                  window.intlTelInput(input, {
                      initialCountry: "in",
                      preferredCountries: ["us", "gb", "ca"],
                      separateDialCode: true,
                  });
              }
          });
    })