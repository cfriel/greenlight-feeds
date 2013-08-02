var name = "feeds";
var version = "1.0";

Meteor.startup(function(){
    
    console.log("loading feeds package");
    
    Greenlight.register_template(name, version);
    
});