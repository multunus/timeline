# Team Timeline

An open source tool for creating achievement timelines for key employees of your
company.

## Demo

[http://multunus.github.io/timeline](http://multunus.github.io/timeline). If you
like the idea and the user interface, you'll LOVE the Google Docs Spreadsheet based
"CMS" system.

## How do I use this

* Clone the repository.
* Create a Google Spreadsheet [similar to this one](https://docs.google.com/a/multunus.com/spreadsheet/ccc?key=0AurK0h8yI6n6dGM1MWgxRW5aX3dqM3ZNTEU2by1jZUE) -
with the timeline data of your employees.
* Edit the settings.js to customize the following things:
  * The URL to your GDoc Spreadsheet (your "CMS")
  * Your Logo
  * FB/Twitter/LinkedIn Share button details

## Tell me more - What are the key components?

* Uses [Google Spreadsheet API](https://developers.google.com/gdata/samples/spreadsheet_sample)
to fetch timeline data
* Uses [Underscore.js](http://underscorejs.org/) for templating
* Uses [timeliner](https://github.com/technotarek/timeliner) for rendering the timeline
* Uses [jsPlumb](https://github.com/sporritt/jsplumb/) for connecting the images
of the team members to their respective timelines.

## Idea Backlog

* Set all links to open up in a new tab automatically (right now, there's a
target tag for every link)
* Improve the "like" button - use this version: http://screencast.com/t/oSNwxnstWXZ
* Add Meta Tags for better SEO
* Add "achievement" type filters - such as Speaking Assignments, Open Source
Contributions, Blog Posts etc.

## Contributing

See the [CONTRIBUTING] document.
Thank you, [contributors]!

  [CONTRIBUTING]: CONTRIBUTING.md
  [contributors]: https://github.com/multunus/timeline/graphs/contributors

## License

Timeline is Copyright (c) 2016 Multunus Software Pvt. Ltd.
It is free software, and may be redistributed
under the terms specified in the [LICENSE] file.

  [LICENSE]: /LICENSE

## About

![multunus](https://s3.amazonaws.com/multunus-images/Multunus_Logo_Vector_resized.png)

Timeline is maintained and funded by Multunus Software Pvt. Ltd.
The names and logos for Multunus are trademarks of Multunus Software Pvt. Ltd.

We love open source software!
See [our other projects][community]
or [hire us][hire] to help build your product.

  [community]: http://www.multunus.com/community?utm_source=github
  [hire]: http://www.multunus.com/contact?utm_source=github
