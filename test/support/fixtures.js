    function loadFixture(){
      $('body').html('');
      /*:DOC += <!DOCTYPE html>
<html>

  <head>
    <title>Young Turks @ Multunus</title>
    <link rel="icon" type="image/png" href="images/favicon.ico">
    <meta property="og:image" content="http://multunus.herokuapp.com/youngturks/images/young_turks_collage.jpg"/>
    <meta property="og:description" content="See the timelines of our young turks: Manoj, Tamil, Akshay, Sreenath, Anup, Ernest, Abhilash and KP" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/timeliner.css">
    <link rel="stylesheet" type="text/css" href="css/application.css">
    <link href='http://fonts.googleapis.com/css?family=Orbitron:900,700' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src = "javascript/jquery.min.js" ></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js"></script>
    <script type="text/javascript" src="javascript/jquery.jsPlumb-1.3.14-all-min.js"></script>
    <script type="text/javascript" src = "javascript/underscore-min.js" ></script>
    <script type="text/javascript" src = "javascript/bootstrap.js" ></script>
    <script type="text/javascript" src = "javascript/timeliner.min.js" ></script>
    <script type="text/javascript" src = "javascript/constants.js" ></script>
    <script type="text/javascript" src = "javascript/settings.js" ></script>
    <script type="text/javascript" src = "javascript/gdata_to_json_converter.js" ></script>
    <script type="text/javascript" src = "javascript/application.js" ></script>
    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-5073218-4']);
      _gaq.push(['_trackPageview']);

      (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>
  </head>

  <body>
    <div class="row-fluid header">
      <div class="share-buttons">
        <div class="sharing">
          <script src="http://platform.linkedin.com/in.js" type="text/javascript"></script>
          <script type="IN/Share" data-counter="right"></script>
        </div>
      </div>
    </div>

    <div class="row-fluid title-line">
    </div>

    <div class="container-fluid">
      <div class="row-fluid the-turks">
      </div>

      <div class="sub-title span6 offset5" rel="clickover" data-content="Click on a person to see his timeline" data-original-title="The Young Turks" data-placement="bottom">
	<div>
	  <p><span class='rock'>rock</span><span class="whitespace">      /&#8217;r&#228;k/</span></p>

	  <table class="ts">
	    <tbody>
	      <tr>
		<td valign="top" width="80px">Verb:</td>
		<td valign="top" style="padding-bottom:5px;padding-top:12px">
		  <table class="ts">
		    <tbody>
		      <tr>
			<td>
			  <ol>
			    <li>Speak at a public event.</li>
			    <li>Blog on technical subjects.</li>
			    <li>Contribute to open source.</li>
			    <li>Build awesome products. </li>
			    <li>Steer and Grow the organization.</li>
			    <li>Go home satisfied. Everyday.</li>
			  </ol>
			</td>
		      </tr>
		    </tbody>
		  </table>
		</td>
	      </tr>
	    </tbody>
	  </table>
	</div>
      </div>

      <div class="row-fluid timelines">
      </div>

      <div id="fb-root"></div>
      <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/all.js#appId=212934732101925&xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>

      <script type="text/javascript">
        (function() {
        var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true;
        script.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
        })();
      </script>

      <script type="text/javascript">
        (function(){
        var twitterWidgets = document.createElement('script');
        twitterWidgets.type = 'text/javascript';
        twitterWidgets.async = true;
        twitterWidgets.src = 'http://platform.twitter.com/widgets.js';
        document.getElementsByTagName('head')[0].appendChild(twitterWidgets);
        })();
      </script>
    </div>

    <script>
      $(function() {
        renderHeaderAndTitle();
        renderTimeline();
      });
    </script>

    <!-- Templates -->

    <script type="text/template" id="turk-template">
      <% if(name == popover_for_turk){ %>
        <div class="span1 turk" name="<%= name %>" rel="popover" data-content="Click here to see how they've been rockin'" data-original-title="Our Young Turks" data-placement="bottom">
      <% }else {%>
        <div class="span1 turk" name="<%= name %>">
      <% } %>
      <a href="#<%= name %>">
       <img src="images/<%= name %>.jpg" alt="<%= display_name %>">
      </a>
     </div>
    </script>

<script type="text/template" id="timelineMinor-template">
  <dl class="timelineMinor">
    <dt id="19540517"><a><%= month.charAt(0).toUpperCase() +
                               month.substring(1).toLowerCase()+" "+year%></a></dt>
    <dd class="timelineEvent" id="19540517EX" style="display: none; ">
      <% events.forEach(function(event){ %>
        <h3><%= event %></h3>
      <% }); %>
      <br class="clear">
    </dd><!-- /.timelineEvent -->
  </dl><!-- /.timelineMinor -->
</script>

<script type="text/template" id="timelineMajor-template">
  <div class="timelineMajor">
    <h2 class="timelineMajorMarker"><span><%= year %></span></h2>
    <% minor.forEach(function(month){ %>
      <% month.year = year; %>
      <%= minorTemplate(month) %>
    <% }); %>
  </div>
  <br class="clear">
</script>

<script type="text/template" id="timelineContainer-template">
  <div class="timelineContainer" id="<%= name %>-timeline">
    <div class="timelineToggle"><p><a class="expandAll">+ expand all</a></p></div>
    <br class="clear">
    <div class="turk-name"><%= display_name %></div>
    <% if(name == 'you'){%>
    <div class="call-to-action">
      <%= roles %>
    </div>
    <% }else{ %>
    <div class="turk-roles"><%= roles %></div>
    <% major.forEach(function(year){ %>
      <% year.minorTemplate = minorTemplate; %>
      <%= majorTemplate(year) %>
    <% }); %>
    <% } %>
  </div>
</script>

<script type="text/template" id="header-template">
  <a target="_blank" href="<%= LOGO.HREF %>">
    <img src="<%= LOGO.SRC %>" alt="<%= LOGO.ALT %>" />
  </a>
</script>

<script type="text/template" id="share-template">
  <div class="fb-like" data-width="74" data-layout="button_count"
       data-href="<%= SHARE.HREF %>" data-show-faces="false">
  </div>
  <div class="g-plusone" data-size="medium" data-href="<%= SHARE.HREF %>">
  </div>
  <a href="http://twitter.com/share" class="twitter-share-button"
     data-url="<%= SHARE.HREF %>" data-counturl="<%= SHARE.HREF %>" data-count="none" data-text="SHARE.TEXT">
  </a>
</script>

<script type="text/template" id="title-template">
<%= TITLE %>
</script>

</body>

</html>
*/
    }
