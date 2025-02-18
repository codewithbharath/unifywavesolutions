/**
* Template Name: Techie - v4.10.0
* Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";
 
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
        $("#contact-form")[0].reset(); // Optionally reset the form
      },
      error: function (err) {
        console.log(err)
        $("#response-message")
        .removeClass("success")
        .addClass("error")
        .text("An error occurred. Please try again.")
        .fadeIn();
      },
    });
  });
  const mobileMenuBtn = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            const navItems = document.querySelectorAll('.nav-item');

            // Toggle mobile menu
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                document.body.classList.toggle('no-scroll');
            });

            // Handle dropdowns on mobile
            navItems.forEach(item => {
                if (item.querySelector('.dropdown')) {
                    const link = item.querySelector('.nav-link');
                    link.addEventListener('click', (e) => {
                        if (window.innerWidth <= 768) {
                            e.preventDefault();
                            item.classList.toggle('active');
                        }
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
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
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


