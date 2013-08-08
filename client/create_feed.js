Template.create_feed.created = function()
{
    $(document).on('click', '.add-transform', function(){
	$('#transforms').append('<div class="transform input-prepend input-append"><span class="remove-transform add-on">-</span><input type="text" placeholder="transform"><span class="add-transform add-on">+</span></div>');
	console.log("add transform");
    });

    $(document).on('click', '.remove-transform', function(){
	$(this).parent().parent().remove();
    });

    $(document).on('click', '#create', function(){
	
	var from = $('#input-from').val();
	var to = $('#input-to').val();
	var transforms = [];

	$('.input-transform').each(function(){
	    transforms.push($(this).val());
	});
	
	console.log("from: " + from);
	console.log("to: " + to);

	for(var i = 0; i < transforms.length; i++)
	{
	    console.log("> transform: " + transforms[i]);
	}

	var feed = {};

	feed['source'] = from;
	feed['destination'] = to;
	feed['transforms'] = transforms;
	feed['owner'] = Meteor.userId();

	Feeds.insert(feed);
	
    });
} 

