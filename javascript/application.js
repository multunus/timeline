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

var Timelines = [
    {
        name: 'manoj', 
        display_name: 'Manoj',
        roles: '<a rel="tooltip" title="AKA Multunus Senior :)">Multunus Se&ntilde;or</a>, Programmer, Designer, Speaker',
        major: [
            {
                year: '2012',
                minor: [
                    {
                        month: 'September 2012',
                        events: [
                            'Chosen as speaker for the upcoming JSFoo Bangalore conference. <a target="_blank" href="http://youtu.be/EAEfEByoJeA">Watch Preview Video</a>',
                            'Lead programmer on Narrable.com - a different kind of story telling site'
                        ]
                    },
                    {
                        month: 'June 2012',
                        events: [
                            'Active involvement in the Bangalore Ruby User Group through Multunus',
                            'Inducted into the Multunus Señors group (also called the "Seniors" group :)'
                        ]
                    },
                    {
                        month: 'April 2012',
                        events: [
                            'Promoted as Senior UI Programmer'
                        ]
                    },
                    {
                        month: 'March 2012',
                        events: [
                            'Introduced to Internet marketing and did some work on FB and hiring related marketing',
                            'Finished 3 years at Multunus'
                        ]
                    },
                    {
                        month: 'Feb 2012',
                        events: [
                            'Was the main designer for a highly interactive web app - in the education space'
                        ]
                    }
                ]
            },
            {
                year: '2011',
                minor: [
                    {
                        month: 'August 2011',
                        events: [
                            'UI developer on Android app - FusionFace'
                        ]
                    },
                    {
                        month: 'April 2011',
                        events: [
                            'Worked on proof-of-concept Android app as part of Multunus labs'
                        ]
                    },
                    {
                        month: 'March 2011',
                        events: [
                            'Completed 2 successful years'
                        ]
                    },
                    {
                        month: 'Jan 2011',
                        events: [
                            'Worked on fourth product - ElixirHealth.com - web app in the Consumer Health Space, with e-commerce, content management and search as key pieces'
                        ]
                    }
                ]
            },
            {
                year: '2010',
                minor: [
                    {
                        month: 'September 2010',
                        events: [
                            'Worked on third product - Publink.com - web app with Location Based Search service'
                        ]
                    },
                    {
                        month: 'March 2010',
                        events: [
                            'Finished 1 year at Multunus'
                        ]
                    },
                    {
                        month: 'Feb 2010',
                        events: [
                            'Joined Multunus hiring team. Started interviewing candidates.'
                        ]
                    },
                    {
                        month: 'Jan 2010',
                        events: [
                            'Awarded "Star of Multunus" for the year 2009'
                        ]
                    }
                ]
            },
            {
                year: '2009',
                minor: [
                    {
                        month: 'September 2009',
                        events: [
                            'Worked on second product - PurpleLetter.org - an online letter sending service'
                        ]
                    },
                    {
                        month: 'May 2009',
                        events: [
                            'Worked on first product - a web app with Face Recognition technology'
                        ]
                    },
                    {
                        month: 'March 2009',
                        events: [
                            'Joined Multunus'
                        ]
                    }
                ]
            }

        ]
    }, 
    {
        name: 'tamil', 
        display_name: 'Tamil',
        roles: '',
        major: [
            {
                year: '',
                minor: [
                    {
                        month: '',
                        event: ''
                    }
                ]
            }
        ]
    }, 
    {
        name: 'akshay', 
        display_name: 'Akshay'
    }, 
    {
        name: 'sreenath', 
        display_name: 'Sreenath'
    }, 
    {
        name: 'anup', 
        display_name: 'Anup'
    }, 
    {
        name: 'ernest', 
        display_name: 'Ernest'
    }, 
    {
        name: 'abhilash', 
        display_name: 'Abhilash'
    }, 
    {
        name: 'kp', 
        display_name: 'KP'
    }, 
    {
        name: 'you', 
        display_name: 'You?'
    }
];

function renderTurkTemplate(){
    var turkTemplate = _.template($('#turk-template').html());
    var timelineMinorTemplate = _.template($('#timelineMinor-template').html());
    var timelineMajorTemplate = _.template($('#timelineMajor-template').html());
    var timelineContainerTemplate = _.template($('#timelineContainer-template').html());
    _.each(Timelines, function(turk){
        $('.the-turks').append(turkTemplate({name: turk.name, display_name: turk.display_name, popover_for_turk: 'manoj'}));
        turk.majorTemplate = timelineMajorTemplate;
        turk.minorTemplate = timelineMinorTemplate;
        $('.timelines').append(timelineContainerTemplate(turk));
    });
}
