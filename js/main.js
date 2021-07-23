$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$(document).ready(function(){
    $('#navOut li').click(function(){
         $(this).addClass('active').siblings().removeClass('active');
  });      // #change li =this
});



 $(document).ready(function() {
  $("#navOut .shown").click(function(){
      $('.dropdown-menu2').slideToggle("fast");
});});
 $(document).ready(function() {
  $(".container").click(function(){
      $('.dropdown-menu2').slideUp("fast");
});});
$(document).ready(function() {
  $(".bg-light").click(function(){
      $('.dropdown-menu2').slideUp("fast");
});});


$(document).ready(function(){
  $("#navOut .hidden").click(function(){
     $(".dropdown-menu2").css("display","none");
});});

$(document).ready(function(){
  $("#header .navbar-toggler").click(function(){
     $("#search-icon").css("display","block");
     $("#header .search-btn").css("display","none");
     $("#wid").css("display","none");
     $("#header p.nav-link").css("color","black");
      
});});
$(document).ready(function(){
  $("#search-icon").click(function(){
      $("#header .search-btn"). fadeToggle("slow");
      $("#wid"). fadeToggle("slow");
      
});
});
$(document).ready(function(){
  $("#search-icon").click(function(){
      $("#header p.nav-link").css("color","rgba(150, 110, 85, 1)");
      
}); 
});

$(document).ready(function(){
  $(".container").click(function(){
      $("#navbarNavDropdown"). slideUp("slow");
     
});
});