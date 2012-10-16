describe("Google Spreadsheet data to JSON converter", function(){
             it("Should split the events based on the regular expression 3 or more '-' character",function(){
                    var gdata = new GDataToJSONConverter("Google Spreadsheet Key", "Worksheet ID");
                    var month = 2;
                    var year = 2012;
                    gdata.entry = {};
                    
                    gdata.entry['gsx$feb2012'] = {$t: "asd--------qwe----dgf"};
                    var events = gdata.getEvents(month, year);
                    expect(events.length).toEqual(3);
                    expect(events[0]).toEqual('asd');
                });

             it("Should send request to fetch the details from each worksheet",function(){
                    var ajaxSpy = sinon.spy(jQuery, 'ajax');
                    var gdata = new GDataToJSONConverter("Google Spreadsheet Key", ["1", "2"]);
                    gdata.getdata();
                    expect(ajaxSpy).toHaveBeenCalledTwice();
                });
         });
