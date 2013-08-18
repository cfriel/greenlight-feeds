var editor;

Template.create_feed.created = function()
{
    $(document).on('click', '.add-transform', function(){
	$('#transforms').append(
    '<div class="transform input-group input-append"><span class="remove-transform input-group-addon">-</span><input class="input-transform form-control" type="text" placeholder="transform"><span class="add-transform input-group-addon">+</span></div>'
	);
	Greenlight.log("add transform");
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
	
	Greenlight.log("from: " + from);
	Greenlight.log("to: " + to);

	for(var i = 0; i < transforms.length; i++)
	{
	    console.log("> transform: " + transforms[i]);
	}

	var feed = {};

	feed['owner'] = Meteor.userId();
	feed['xml'] = editor.getValue();
	feed['state'] = 'start';

	Feeds.insert(feed);
	
    });
};

Template.create_feed.rendered = function()
{
    
      var dummy = {
        attrs: {
          color: ["red", "green", "blue", "purple", "white", "black", "yellow"],
          size: ["large", "medium", "small"],
          description: null
        },
        children: []
      };

      var tags = {
        "!top": ["routes"],
        routes: {
          attrs: {
            xmlns: ['http://camel.apache.org/schema/spring']
          },
          children: ["route"]
        },
	  route : {
	      attrs : {
		  id : null
	      },
	      children: ["from", "to"]
	  },
	  from : 
	  {
	      attrs: {
		  uri: null
	      }
	  },
	  to :
	  {
	      attrs : {
		  uri : null
	      }
	  }
      };

      function completeAfter(cm, pred) {
        var cur = cm.getCursor();
        if (!pred || pred()) setTimeout(function() {
          if (!cm.state.completionActive)
            CodeMirror.showHint(cm, CodeMirror.hint.xml, {schemaInfo: tags, completeSingle: false});
        }, 100);
        return CodeMirror.Pass;
      }

      function completeIfAfterLt(cm) {
        return completeAfter(cm, function() {
          var cur = cm.getCursor();
          return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
        });
      }

      function completeIfInTag(cm) {
        return completeAfter(cm, function() {
          var tok = cm.getTokenAt(cm.getCursor());
          if (tok.type == "string" && (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1)) return false;
          var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
          return inner.tagName;
        });
      }

      editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "xml",
        lineNumbers: true,
        extraKeys: {
          "'<'": completeAfter,
          "'/'": completeIfAfterLt,
          "' '": completeIfInTag,
          "'='": completeIfInTag,
          "Ctrl-Space": function(cm) {
            CodeMirror.showHint(cm, CodeMirror.hint.xml, {schemaInfo: tags});
          }
        }
      });
    
};