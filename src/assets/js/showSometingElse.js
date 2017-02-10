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
        },
        clickSomethingElse: () => {
            $('.something-else').click(function(e){
                e.preventDefault();
                  $(this).toggleClass('active');
                 
            });
        }
    };

})(jQuery);
