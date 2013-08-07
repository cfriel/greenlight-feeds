Template.create_feed.rendered = function()
{
    $(document).on('click', '.add-transform', function(){
	$('#transforms').append('<div class="row"><div class="input-prepend input-append"><span class="remove-transform add-on">-</span><input disabled class="span2" type="text" placeholder="transform"><span class="add-transform add-on">+</span></div></div>');
	console.log("add transform");
    });

    $(document).on('click', '.remove-transform', function(){
	$(this).parent().parent().remove();
    });
} 