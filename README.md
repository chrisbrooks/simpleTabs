simpleTabs
=========

<h2>About</h2>

jquery script to make fluid responsive tabs.   

simpleTabs is a jquery script which allows you to create fluid responsive jquery tabs. The tabs also have window.hash being used so on refresh you will still be kept on the current tab you are viewing.

<h3>Getting Started</h3>

Include jQuery and the plugin, then include the html for the tabs.

```html
<div class="container">
	<div class="tabs">
		<ul>
            <li class="selected"><a href="#one">One</a></li>
            <li><a href="#two">Two</a></li>
            <li class="last"><a href="#three">Three</a></li>
        </ul>
        <div class="tab one">
        	<p>Content One</p>
        </div>
        <div class="tab two">
        	<p>Content Two</p>
        </div>
        <div class="tab three">
        	<p>Content Three</p>
        </div>
	</div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="jquery.script.js"></script>
```

<h3>Css</h3>

There is a few basic lines of css for this inside of style.css. However these styles arent needed for the script to run properly.