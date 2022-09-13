// <!-- tab area start here -->
// $('.tab_botton').on('click', function(){

//     let id = $(this).attr('data-target')
//         //$(`#${id}`).show().siblings('.contant').hide(){# ta data-target a dily nicer ta lekly hoby }
//         $(id).show().siblings('.contant').hide()
//         $(this).addClass('btn-info').removeClass('btn-outline-info').siblings('.btn').addClass('btn-outline-info').removeClass('btn-info')
//     })

$(document).ready(function(){
    $('.feacbook-slider').slick({ 
           autoplay: true,
           autoplaySpeed: 2000,
       
    });
  });

$('.to-top a').click(function(){
			
       $('html,body').animate({'scrollTop':0},2000);

return false;

});
$(window).scroll(function(){
			

       if($(window).scrollTop()>500){
       
       //  $('.to-top a').show(); 
       $('.to-top a').fadeIn(3000);
       
       
       }else{
       
       //  $('.to-top a').hide(); 
       $('.to-top a').fadeOut(3000);
       }

});