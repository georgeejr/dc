/*
Author: georgee
Description: show other product selection
Dependencies: jQuery
*/

var dc = dc || {};

(function($){
      var root;
      dc.showMore = {
        init: () =>{  
            dc.showMore.clickSomethingElse();
            dc.showMore.closeSometingElse();
        },
        clickSomethingElse: () => {
            $('.something-else').click(function(e){
                e.preventDefault();
                $(this).toggleClass('active');
                $(".something-else-wrap").toggleClass('active');
                if($(this).hasClass('active')){
                    dc.showMore.scrollTo();
                } 
            });
        },
        scrollTo: () => {
            $('html, body').animate({
                scrollTop: $("#se-cont").offset().top
            }, 500);
        },
        closeSometingElse: () => {
            $('.close-this').click(function(){ 
                $(".something-else-wrap,.something-else").removeClass('active');
            });

        }
    };

})(jQuery);
