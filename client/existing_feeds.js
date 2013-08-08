Template.existing_feeds.my_feeds = function()
{
    return Feeds.find();
} 

Template.existing_feeds.progress = function()
{
    var self = this;

    var progress = self.progress;
    
    var percent = 100.0 * progress;

    return percent + "%";
}