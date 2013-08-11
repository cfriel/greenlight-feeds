Template.feeds_page.created = function()
{
    var title = "Feeds page loaded";
    var description = "The created event of the feeds page was called";
    var source = "Template.feeds_page";
    var audience = "";
    var activity = new Greenlight.Activity({title:title, description:description, source:source, audience:audience});

    activity.save();

}