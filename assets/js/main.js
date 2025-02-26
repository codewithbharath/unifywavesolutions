/**
* Template Name: Techie - v4.10.0
* Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  if (document.getElementById("scroll-toggle")) {

  $("#scroll-toggle").hide();

  $("#scroll-toggle").hide();

    // Show the button when user scrolls more than 100px down
    $(window).scroll(function () {
      // Check if the user has scrolled more than 100px from the top
      if ($(this).scrollTop() > 100) {
        $("#scroll-toggle").fadeIn().addClass('show');

        // Check if the user has scrolled to the bottom of the page
        if ($(this).scrollTop() + $(window).height() >= $(document).height()-10) {
          $("#scroll-icon").addClass('down');  // Switch to down arrow (scroll to top)
        } else {
          $("#scroll-icon").removeClass('down');  // Switch to up arrow (scroll to bottom)
        }
      } else {
        $("#scroll-toggle").fadeOut().removeClass('show');
      }
    });

    // Toggle scroll behavior on button click
    $("#scroll-toggle").click(function () {
      if ($("#scroll-icon").hasClass('down')) {
        // Scroll to top
        $("html, body").animate({ scrollTop: 0 }, 600);
      } else {
        // Scroll to bottom
        $("html, body").animate({ scrollTop: $(document).height() }, 600);
      }
    });
    // Initially hide the button
    
}
if (document.getElementById("modernContactForm")) {
    $("#modernContactForm").submit(function (event) {
        event.preventDefault(); // Prevent the form from reloading the page
    
        // Collect form data
        const formData = {
          name: $("#name").val(),
          name: $("#phoneNumber").val(),
          email: $("#email").val(),
          message: $("#message").val(),
        };
    
        // Send the form data to send-email.php using AJAX
        $.ajax({
          type: "POST",
          url: "send-email.php",
          data: formData,
          success: function (response) {
            $("#response-message")
            .removeClass("error")
            .addClass("success")
            .text(response)
            .fadeIn();
            $("#modernContactForm")[0].reset(); // Optionally reset the form
            $("#response-message").delay(1000).fadeOut();

          },
          error: function (err) {
            console.log(err)
            $("#response-message")
            .removeClass("success")
            .addClass("error")
            .text("An error occurred. Please try again.")
            .fadeIn();
                        $("#response-message").delay(1000).fadeOut();

          },
        });
      });
  
    }
  const mobileMenuBtn = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            const navItems = document.querySelectorAll('.nav-item');

            // Toggle mobile menu
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });
            let prev = null;
            if(document.querySelector('.nav-link.active')){
              prev = document.querySelector('.nav-link.active')
            }else{
              prev = document.querySelector('.dropdown-link.active')
            
            
            }
            const activeLinks = document.getElementsByClassName("dropdown-link active");


            if(activeLinks.length >0 ){
              document.getElementById("serviceLinkId").classList.toggle("active");
              document.getElementsByClassName("dropdown")[0].classList.toggle("active");
            }
            // Handle dropdowns on mobile
            navItems.forEach(item => {
                console.log(item)
                // if (item.querySelector('.dropdown')) {
                    const link = item.querySelector('.nav-link');
                    if(link){
                    link.addEventListener('click', (e) => {
                        // if (window.innerWidth <= 768) {
                          if(e.currentTarget.getAttribute('href') =="#services"){
                            document.getElementsByClassName("dropdown")[0].classList.toggle("active");
                            e.currentTarget.classList.toggle('active');
                            prev.classList.remove('active')
                          }else{
                            if(prev.getAttribute('href')  != e.currentTarget.getAttribute('href') ){
                            document.getElementsByClassName("dropdown")[0].classList.remove("active")
                            e.currentTarget.classList.toggle('active');
                            prev.classList.remove('active')
                            }
                          } 
                        // }
                            // e.preventDefault();
                            // navItems.forEach(item => item.querySelector('.nav-link').classList.remove('active'));
                          
                            
                            
                            if(document.querySelector('.nav-link.active')){
                              prev = document.querySelector('.nav-link.active')
                            }else{
                              prev = document.querySelector('.dropdown-link.active')
                            }
                        // }
                    });
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.nav-container') && window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    navItems.forEach(item => item.classList.remove('active'));
                    document.body.classList.remove('no-scroll');
                }
            });

            // Close menu on resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    navMenu.classList.remove('active');
                    navItems.forEach(item => item.classList.remove('active'));
                    document.body.classList.remove('no-scroll');
                }
            });

            // Add smooth scroll
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    if(document.querySelector(this.getAttribute('href'))){
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });

            
                  }
                  if(this.getAttribute('href') !="#services"){
                    if ($(".nav-menu").hasClass("active")) {
                        $(".nav-menu.active").removeClass("active");


                    }
                }
                });
              

            });


            
            if (typeof Lenis !== 'undefined') {

            const lenis = new Lenis({
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        
          
          function raf(time) {
              lenis.raf(time);
              ScrollTrigger.update();
              requestAnimationFrame(raf);
          }
          
          requestAnimationFrame(raf);
          
          const section_1 = document.getElementById("vertical");
          const col_left = document.querySelector(".col_left");
          const timeln = gsap.timeline({ paused: true });
          
          timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);
          
          const scroll_1 = ScrollTrigger.create({
              animation: timeln,
              trigger: section_1,
              start: 'top top',
              end: 'bottom center',
              scrub: true
          });

        }
        //   const section_2 = document.getElementById("horizontal");
        //   let box_items = gsap.utils.toArray(".horizontal__item");
        //   console.log(box_items)
        //   gsap.to(box_items, {
        //     xPercent: -100 * (box_items.length - 1),
        //     ease: "sine.out",
        //     scrollTrigger: {
        //       trigger: section_2,
        //       pin: true,
        //       scrub: 3,
        //       snap: 1 / (box_items.length - 1),
        //       end: "+=" + section_2.offsetWidth
        //     }
        //   });
})()


