//  <reference types="../@types/jquery" />

// ======== AOS ===========
 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });


// --------------loading-page
$(function() {
  $('.loading' ).fadeToggle(700,function(){
    $('body').css('overflow','auto')
  });
  });

// --------------loading-page


// ----------change-navbar-color
$(window).on('scroll',function(){

  let windowScroll = $(window).scrollTop();
  let aboutOffset = $('#home').offset().top; 

  if (windowScroll > aboutOffset ){
    $('#mainNav').css({'background-color':'white'})
  }else{
    $('#mainNav').css({'background-color':'transparent'})
  }

})
// ----------change-navbar-color



//  ============ header- animation! 

var typed = new Typed(" #element  " , {
    strings: [  "  Front-end Developer. "  ],
    typeSpeed:50,
    loop: true,
    backDelay: 120,
    backSpeed:60,
  }
  );
//  ============ header- animation! 


// ========button up======================

$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
   
    let section = $('#home').offset().top;
    if (windowScroll > section){
       $('#btn-up').show(800);
    }
    else{
       $('#btn-up').hide(800);
    }
   
   })
   
   
   $('#btn-up').on('click',function(){
       $('body,html').animate({ scrollTop:0},100)
})
   




