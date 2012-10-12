GDataToJSONConverter = function(key, wid){
    this.key = key;
    this.wid = wid;
    this.getdata = function(callback){
        var self = this;
        return $.getJSON(
            'http://spreadsheets.google.com/feeds/list/' +
                self.key + '/' + self.wid + '/public/values?alt=json-in-script&callback=?',
            function( data ){
                var Timeline = [];
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
                    var yearTo = to.getFullYear();
                    var yearFrom = from.getFullYear();
                    var major = self.getTimeline(yearFrom, yearTo);
                    jsonData.major = major;
                    Timeline.push(jsonData);
                }
                callback(Timeline);
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
        var baseKey = "gsx$"+monthNames[month-1]+year;
        var count = 2;
        var key = baseKey;
        while(this.entry[key] != undefined){
            var event = this.entry[key].$t;
            if(event.length>0){
                events.push(event);
            }
            key = baseKey+"_"+count;
            count+=1;
        }
        return events;
    };
};

var monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
