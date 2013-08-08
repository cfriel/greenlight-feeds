var name = "feeds";
var version = "1.0";

feeds = function(){};

feeds.prototype = new feeds();

Meteor.Feeds = feeds.prototype;

Meteor.startup(function(){
    
    console.log("loading feeds package");
    
    Greenlight.register_template(name, version, Meteor.Feeds);
    
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
