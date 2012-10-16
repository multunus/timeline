selectATurk = function() {
	var selectedTurk = $(this);

	unselectAllTurks();

	$(this).children().find('img').addClass('color selected');

	//resetTwitterShareButton(selectedTurk.attr('name'));
	//resetFBLikeButton(selectedTurk.attr('name'));
};

resetFBLikeButton = function(turkName) {
	FB.XFBML.parse();
};

resetTwitterShareButton = function(turkName) {
	var dataUrl = window.location.origin + window.location.pathname + '#' + turkName;
	var tweetLink = "<a href='http://twitter.com/share' class='twitter-share-button' data-count='none'></a>";
	$('.sharing .twitter-share-button').remove();
	$('.sharing').append(tweetLink);
	$('.sharing .twitter-share-button').attr('data-url',dataUrl);
	twttr.widgets.load();
};

unselectAllTurks = function() {
	$(".turk img").removeClass('color selected');
};

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

renderTurkTemplate = function(Timelines){
    var turkTemplate = _.template($('#turk-template').html());
    var timelineMinorTemplate = _.template($('#timelineMinor-template').html());
    var timelineMajorTemplate = _.template($('#timelineMajor-template').html());
    var timelineContainerTemplate = _.template($('#timelineContainer-template').html());
    var turksElement = $('.the-turks');
    turksElement.attr('style',"margin-left: "+(DEFAULT_NUMBER_OF_TURKS-Timelines.length)*5.5+"%;");
    _.each(Timelines, function(turk){
               $('.the-turks').append(turkTemplate({name: turk.name, display_name: turk.display_name, popover_for_turk: 'manoj'}));
               turk.majorTemplate = timelineMajorTemplate;
               turk.minorTemplate = timelineMinorTemplate;
               $('.timelines').append(timelineContainerTemplate(turk));
           });

    bindTimeLine();
};

function bindTimeLine(){
    $.timeliner({
                    startState: 'open'
                });

    $(".the-turks .turk").click(showTimeline);
    $(".the-turks .turk").click(selectATurk);

    setUpPopOverCloseOnClick();

    var turkNameFromUrl = window.location.hash.slice(1);

    $(".turk img, .title-line, #" + turkNameFromUrl + "-timeline").load(function(){
                                                                            $(".turk[name='" + turkNameFromUrl + "']").click();
                                                                        });

    setTimeout(function() {
                   $('[rel="popover"]').popover('show');
               },1250);

}

function renderTimeline(){
    var gdata = new GDataToJSONConverter(SPREADSHEET_KEY, WORKSHEET_IDS);
    gdata.getdata(renderTurkTemplate);
}

function renderHeaderAndTitle(){
    var headerTemplate = _.template($('#header-template').html());
    $('.header').append(headerTemplate());
    var shareTemplate = _.template($('#share-template').html());
    $('.sharing').prepend(shareTemplate());
    var titleTemplate = _.template($('#title-template').html());
    $('.title-line').append(titleTemplate());
}

