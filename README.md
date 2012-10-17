Team Timeline
========

__An open source tool for creating achievement timelines for key employees of your company.__ For more details, visit http://multunus.com/opensource#timeline

## Demo

[http://multunus.github.com/timeline](http://multunus.github.com/timeline). If you like the idea and the User Inteface, you'll LOVE the Google Docs Spreadsheet based "CMS" system.

## How do I use this

* Clone the repository.
* Create a Google Spreadsheet [similar to this one](https://docs.google.com/a/multunus.com/spreadsheet/ccc?key=0AurK0h8yI6n6dGM1MWgxRW5aX3dqM3ZNTEU2by1jZUE) - with the timeline data of your key employees.
* Edit the settings.js to customize the following things: 
  * The URL to your GDoc Spreadsheet (your "CMS")
  * Your Logo
  * FB/Twitter/LinkedIn Share button details

## Tell me more - What are the key components?

* Uses [Google Spreadsheet API](https://developers.google.com/gdata/samples/spreadsheet_sample) to fetch timeline data
* Uses [Underscore.js](http://underscorejs.org/) for templating
* Uses [timeliner](https://github.com/technotarek/timeliner) for rendering the timeline
* Uses [jsPlumb](https://github.com/sporritt/jsplumb/) for connecting the images of the team members to their respective timelines.

## Idea Backlog 

* Set all links to open up in a new tab automatically (right now, there's a target tag fo every link)
* Improve the "like" button - use this version: http://screencast.com/t/oSNwxnstWXZ 
* Add Meta Tags for better SEO
* Add "achievement" type filters - such as Speaking Assignments, Open Source Contributions, Blog Posts etc.
