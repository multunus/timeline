selectATurk = function() {
	var selectedTurk = $(this);

	unselectAllTurks();

	$(this).children().find('img').addClass('color selected');

	//resetTwitterShareButton(selectedTurk.attr('name'));
	//resetFBLikeButton(selectedTurk.attr('name'));
};

resetFBLikeButton = function(turkName) {
	FB.XFBML.parse();
}

resetTwitterShareButton = function(turkName) {
	var dataUrl = window.location.origin + window.location.pathname + '#' + turkName;
	var tweetLink = "<a href='http://twitter.com/share' class='twitter-share-button' data-count='none'></a>"
	$('.sharing .twitter-share-button').remove();
	$('.sharing').append(tweetLink);
	$('.sharing .twitter-share-button').attr('data-url',dataUrl);
	twttr.widgets.load();
}

unselectAllTurks = function() {
	$(".turk img").removeClass('color selected');
}

showTimeline = function() {
	var self = $(this);
	var name = self.attr("name");
	var timeline = $("#" + name + "-timeline");

	$(".sub-title").hide();
	
	$(".timelineContainer").hide();

	jsPlumb.detachEveryConnection();

	timeline.slideDown(2000);

	connectTimeline(self, $('.timelines'));			
};


connectTimeline = function(source, target) {

	var docWidth = document.width;

	var turk = jsPlumb.addEndpoint(source,{
		anchor: "BottomCenter",
		endpoint: "Blank"
	}),
		
	timeline = jsPlumb.addEndpoint(target,{
		anchor: [0.11785,0,0,-1],
		endpoint: "Blank"
	});

	jsPlumb.connect({ 
		source: turk, 
		target: timeline,
		connector: "Flowchart",
		paintStyle: { strokeStyle:"#CCC", lineWidth:2 },
		detachable: false
	});
};


setUpPopOverCloseOnClick = function() {
	$('html').click(function(){
		if($('.popover').is(':visible')) {
			$('[rel="popover"]').popover('hide');
		}
	});
};