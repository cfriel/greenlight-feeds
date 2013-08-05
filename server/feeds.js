var name = "feeds";
var version = "1.0";

feeds = function(){};

feeds.prototype = new feeds();

Feeds = feeds.prototype;

Meteor.startup(function(){
    
    console.log("loading feeds package");
    
    Greenlight.register_template(name, version, Feeds);
    
});