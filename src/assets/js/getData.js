/*
Author: georgee
Description: restApi request using json2html 
Dependencies: json2html.js, jQuery
Docs: http://www.json2html.com/
*/

var dc = dc || {};

(function($){
      var root;
      dc.getData = {
        init: () =>{ 
            dc.getData.loadData();
        },
        displayData: function(data) { 
            var jsonData = data.se; 
            // $.each(data,function(i,el){
            //     var transform = {'<>':'li','html':'${id} (${designType}) ${list}'};
            //     $('#something-else-list').html(json2html.transform(el,transform));
            // });  
            var transforms = {
                "catName" : [
                    {'<>':'li','class':'column large-4','html': [
                        {'<>': 'h5', 'html': '${designType}'},
                        {'<>':'ul','html':function(){return(json2html.transform(this.list, transforms.catList));}}
                    ]}
                ],
                "catList":{'<>':'li', html:[
                    {'<>': 'a', 'html':'${name}'}
                ]}
            };
            $('#something-else-list').html(json2html.transform(jsonData,transforms.catName));
        }, 
            
        loadData:  function(){
            var api = "https://api.myjson.com/bins/1frvxt";  
            $.ajax({
                url:api,
                method:'get',
                success:this.displayData
            })
        }
    };

})(jQuery);
