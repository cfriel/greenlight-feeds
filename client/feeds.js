var name = "feeds";
var version = "1.0";

feeds = function(){};

feeds.prototype = new Greenlight.Package();

feeds.prototype.routes =   {
    
    '/feeds': function()
    {
	Greenlight.log("calling /feeds route");

	return 'feeds_page';
    }
    
};

feeds.prototype.default_route = {

    '/' : function()
    {
	Greenlight.log("calling default route");

	return 'feeds_page';
    }

};

Greenlight.Packages.Feeds = feeds.prototype;

Meteor.startup(function(){

    Greenlight.log("loading feeds package");
    
    Greenlight.register_package(name, version, Greenlight.Packages.Feeds);

});

Feeds = new Meteor.Collection("feeds");

Deps.autorun(function(){
    Meteor.subscribe("feeds");
});

