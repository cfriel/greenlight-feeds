var name = "feeds";
var version = "1.0";

feeds = function(){};

feeds.prototype = new Greenlight.Package();

feeds.prototype.metadata = function()
{
    
    return {
	description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a purus quis ligula varius aliquam id sit amet lacus. Ut quam tellus, aliquet vitae tortor blandit, rhoncus semper arcu. Suspendisse pretium dolor arcu, et semper ante aliquam non. In nec quam cursus, congue felis vitae, consectetur ipsum. Nullam nisl turpis, tempor vitae felis eleifend, fringilla pretium turpis. Aliquam egestas nibh tortor, eu iaculis nibh tincidunt sit amet. Aliquam auctor erat non tellus adipiscing fringilla. In porttitor mattis eros, et dictum nulla blandit non. Cras viverra velit vel turpis imperdiet commodo. Maecenas non leo at leo feugiat aliquam. Fusce semper molestie ligula, et cursus sapien volutpat non. Vivamus leo felis, cursus ut nunc et, porttitor facilisis orci. Donec vehicula vehicula ligula, vel rhoncus velit lobortis non."
    };
}();


Greenlight.Packages.Feeds = feeds.prototype;

Meteor.startup(function(){
    
    Greenlight.log("loading feeds package");
    
    Greenlight.register_package(name, version, Greenlight.Packages.Feeds);
    
});

Feeds = new Meteor.Collection('feeds');

Meteor.publish("feeds", function(){
    return Feeds.find();
});

Feeds.allow({
    insert: function (userId, doc) {
	// the user must be logged in, and the document must be owned by the user
	return (userId && doc.owner === userId);
    },
    update: function (userId, doc, fields, modifier) {
	// can only change your own documents
	return doc.owner === userId;
    },
    remove: function (userId, doc) {
	// can only remove your own documents
	return doc.owner === userId;
    },
    fetch: ['owner']    
});
