var name = "feeds";
var version = "1.0";

feeds = function(){};

feeds.prototype = new feeds();

feeds.prototype.routes =   {
    
    '/feeds': function()
    {
	console.log("calling /feeds route");

	return 'feeds_page';
    }
    
};

feeds.prototype.default_route = {

    '/' : function()
    {
	console.log("calling default route");

	return 'feeds_page';
    }

};

Greenlight.Feeds = feeds.prototype;

console.log("loading feeds package");

Greenlight.register_template(name, version, Greenlight.Feeds);

Feeds = new Meteor.Collection("feeds");

Deps.autorun(function(){
    Meteor.subscribe("feeds");
});

