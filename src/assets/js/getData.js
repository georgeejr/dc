/*
Author: georgee
Description: http request for getting data
Dependencies: jQuery
*/

var dc = dc || {};

(function($){
      var root;
      dc.getData = {
        init: () =>{ 
            dc.getData.displayData();
        },
        displayData: () => {
            $(() => {
                 var api = "https://api.myjson.com/bins/d63dl";
                //  var raw_template = $('#simple-template').html();   
                //  var template = Handlebars.compile(raw_template);
                //  var placeHolder = $("#main");
                 console.log("it ajax time!");
                 
                 $.ajax(api)    
                .done(function(data){ 
                    console.log(data);
                    $.each(data,function(index,element){
                        // var html = template(element);
                        // placeHolder.append(html);
                    });
                })    
                .fail(function(){ 
                });    
                 
            });
        }
    };

})(jQuery);
