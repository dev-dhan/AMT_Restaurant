hamburger = document.querySelector(".hamburger" );
hamburger.onclick = function() { 
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


  
    /**Go Up Button */
    $(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
        } else{
        $('#topBtn').fadeOut();
        }
    });
    
    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
    });
        