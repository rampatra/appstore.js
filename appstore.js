/* 
    Document   : appstore.js
    Created on : 29 Sep, 2013, 12:20:32 AM
    Author     : RAM SWAROOP
*/
(function($){
    $.extend({
        appstore : function(options) {
            // fetches options
            var opts = $.extend({},$.appstore.defaults,options);
            $.getJSON(opts.json,function createAppStore(data){
                $.each(data.items,function(i){                    
                    var item = '<div id="as-item-'+i+'" class="as-item" '+((opts.theme!="light")?"style=\'background-color:"+opts.backgroundColor+";box-shadow:none\'":"")+'><div class="as-item-thumbnail" style="background-image:url(\''+data.items[i].thumbnail+'\')"><a href="'+data.items[i].link+'"><img src="'+data.items[i].logo+'" class="as-item-logo" '+((opts.theme!="light")?"style=\'background-color:"+opts.backgroundColor+"\'":"")+'/></a></div><div class="as-item-desc"><span class="as-icon as-icon-small"><span class="as-icon-tag"></span></span><span class="as-tag">'+data.items[i].tag+'</span>&nbsp;&nbsp;<span class="as-icon as-icon-small"><span class="as-icon-calendar"></span></span><span class="as-date">'+data.items[i].date+'</span><h3 '+((opts.theme!="light")?"style=\'color:"+opts.titleColor+"\'":"")+'>'+data.items[i].title+'</h3><p '+((opts.theme!="light")?"style=\'color:"+opts.descColor+"\'":"")+'>'+data.items[i].description+'</p><a href="'+data.items[i].link+'" class="as-btn" style="background-color:'+opts.buttonColor+((opts.theme!="light")?";box-shadow:none":"")+'">'+opts.buttonValue+'</a></div></div>';
                    $("#appstore-container").append(item);
                });
            });
        }
    });
        
    $.extend($.appstore,{
        defaults : {
            json            : "",
            theme           : "light",
            buttonValue     : "View Demo",
            buttonColor     : "#e74c3c",
            backgroundColor : "#0e0e0e",
            titleColor      : "#d4d4d4",
            descColor       : "#7e7e7e"
        }
    });
}(jQuery));