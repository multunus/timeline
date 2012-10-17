GDataToJSONConverter = function(key, wids){
    this.key = key;
    this.wids = wids;
    this.getdata = function(callback){
        this.callback = callback;
        this.Timeline = [];
        for(var index in this.wids){
            this.getDataFromGoogleSpreadsheet(this.wids[index]);
        }
    };

    this.getDataFromGoogleSpreadsheet = function(wid){
        var self = this;
        $.getJSON(
            'http://spreadsheets.google.com/feeds/list/' +
                self.key + '/' + wid + '/public/values?alt=json-in-script&callback=?',
            function( data ){
                for( var l in data.feed.entry )
                {
                    var jsonData = {};
                    var entry = data.feed.entry[ l ];
                    self.entry = entry;
                    jsonData.name = entry.title.$t;
                    jsonData.display_name = entry.gsx$displayname.$t;
                    jsonData.roles = entry.gsx$roles.$t;
                    var from = new Date(Date.parse(entry.gsx$from.$t));
                    var to = new Date(Date.parse(entry.gsx$to.$t));
                    if((from=="Invalid Date") || (to=="Invalid Date")){
                        throw "The given date format is not supported by this browser";
                    }
                    var yearTo = to.getFullYear();
                    var yearFrom = from.getFullYear();
                    var major = self.getTimeline(yearFrom, yearTo);
                    jsonData.major = major;
                    self.Timeline[parseInt(wid)-1] = jsonData;
                }
                if(self.Timeline.filter(function(value) { return value !== undefined; }).length == self.wids.length){
                    self.callback(self.Timeline);
                }
            });
    };

    this.getTimeline = function(yearFrom, yearTo){
        var major = [];
        for(var year=yearTo; year>=yearFrom; year--){
            var minor = this.getTimelineOfYear(year);
            if(minor.length>0){
                var majorJson = {};
                majorJson.year = year;
                majorJson.minor = minor;
                major.push(majorJson);
            }
        }
        return major;
    };

    this.getTimelineOfYear = function(year){
        var minor = [];
        for(var month=12; month>=1;month--){
            var events = this.getEvents(month, year);
            if(events.length>0){
                var minorJson = {};
                minorJson.month = monthNames[month-1];
                minorJson.events = events;
                minor.push(minorJson);
            }
        }
        return minor;
    };

    this.getEvents = function(month, year){
        var events = [];
        var key = "gsx$"+monthNames[month-1]+year;
        if(this.entry[key] != undefined){
            var event = this.entry[key].$t;
            if(event.length>0){
                var eventsArray = event.split(/-{3,}/);
                for(var index in eventsArray){
                    events.push(eventsArray[index]);
                }
            }
        }
        return events;
    };
};

var monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
