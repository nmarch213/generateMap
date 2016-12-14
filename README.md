#Automatic Map Generation   
   
File location: Y:\generateMap where 'Y:\' is the footbridge server.

There are currently two files in that folder:

**generateMap.js:**

The javascript file you will need to insert into the FTP. You will need to locate where the other js files are, such as the custom.js, and footbridge.js

**generateMap.html:**

Just an example of how the script works.

##What does this do?

You can mass add this to all city pages, even if there are maps that were previously added the script will look for a map, and hide the html you are going to insert.

This will generate a google map with accompanying Wikipedia link. The script relies on the breadcrumbs being in the format as such:

HOME →ABOUT US → SERVICE AREAS → ST. JOSEPH, IL.

It will take the last of the breadcrumb, if formatted at '[city], [state]', '[St. Joseph], [IL]' if it is not formatted this way, you will have to manually set the state within the JS file.

##How do I use it

**This is the script you will be using:**
```html
<script type="text/javascript" src="[Absolute Link to the generateMap.js you inserted into the FTP]">
    generateMap()
</script>
```
**The Html you will need to insert:**
```html
  <br class="clearfix"/>
  <p class="aligncenter"><a id="map-site"></a></p>
  <p class="aligncenter"><iframe id="google-map"></iframe></p>
  <br class="clearfix"/>
```

**HTML Site:**

Site the script through each of the city pages.

Add the HTML to each of the city pages (What I did was download all of the city pages, and do a find a replace where I would just add the HTML before the h3)

**PHP Site:**

Insert the Script into the Footer.php.

Add the HTML to each of the city pages (What I did was download all of the city pages, and do a find a replace where I would just add the HTML before the h3)

**Wordpress (difficult):**

Wordpress is pretty tricky but can work. The best and easiest way to implement this, is hope there is a 'City-page template' that each of the city pages should be using, and you would go into the php file directly, and add the HTML to the template.

I have had to create a new city page template in the past as well and just applied the template to the city page directly using the edit page.

####Questions or need help?

Email me at nicholas@footbridgemedia.com
