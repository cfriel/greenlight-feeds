 Meteor.Router.add({
    '/feeds': function(path)
    {
	return 'feeds_page';
    }
});


Template.feeds_page.rendered = function(){
    $('#left-navbar').affix();
}