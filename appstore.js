/* 
    Document   : appstore.js
    Created on : 29 Sep, 2013, 12:20:32 AM
    Author     : RAM SWAROOP
*/
(function($){
    $.extend({
        appstore : function(options) {
            // fetches options
            var opts = $.extend({},this.defaults,options);
            $.getJSON(opts.json,function createAppStore(data){
                $.each(data.items,function(i){                    
                    var item = '<div id="item-'+i+'" class="item" '+((opts.theme!="light")?"style=\'background-color:"+opts.backgroundColor+";box-shadow:none\'":"")+'><div class="item-thumbnail" style="background-image:url(\''+data.items[i].thumbnail+'\')"><a href="'+data.items[i].link+'"><img src="'+data.items[i].logo+'" class="item-logo" '+((opts.theme!="light")?"style=\'background-color:"+opts.backgroundColor+"\'":"")+'/></a></div><div class="item-desc"><span class="icon icon-small"><span class="icon-tag"></span></span><span class="tag">'+data.items[i].tag+'</span>&nbsp;&nbsp;<span class="icon icon-small"><span class="icon-calendar"></span></span><span class="date">'+data.items[i].date+'</span><h3 '+((opts.theme!="light")?"style=\'color:"+opts.titleColor+"\'":"")+'>'+data.items[i].title+'</h3><p '+((opts.theme!="light")?"style=\'color:"+opts.descColor+"\'":"")+'>'+data.items[i].description+'</p><a href="'+data.items[i].link+'" class="btn" style="background-color:'+opts.buttonColor+((opts.theme!="light")?";box-shadow:none":"")+'">'+opts.buttonValue+'</a></div></div>';
                    $("#appstore-container").append(item);
                });
            });
        },

        defaults : {
            json            : "",
            theme           : "light",
            buttonValue     : "View Demo",
            buttonColor     : "#e74c3c",
            backgroundColor : "#0e0e0e",
            titleColor      : "#d4d4d4",
            descColor       : "#d4d4d4"
        }
    });
}(jQuery));