---
title: Geocoding My Lastfm Data
date: 2014-12-17 01:15 UTC
tags: D3, JavaScript, DataViz
summmary: "One question that often comes to my mind is how does geographical location (and the culture that comes with it) influence the band’s music and therefore my taste as well. So that’s why I decided to use this data to create a cartogram of my listening data."
---

## Geocoding My Last Data

[If you don't want to read this run down check the code out here on Github.](https://github.com/dropofwill/d3-lastfm-geo-viz)

One question that often comes to my mind is how does geographical location (and the culture that comes with it) influence the band’s music and therefore my taste as well. So that’s why I decided to use this data to create a cartogram of my listening data.

[Last.fm](http://www.last.fm) is a social music service that as one of it’s branches tracks user’s listening history and makes it publicly available through an API. I personally have had Last.fm setup on my Spotify account since March 17th, 2012 with other devices added at different points between now and then (so this is actually a small subset of my total listening history). This results in a dataset of 1,017 artists and 22,285 songs played.

Unfortunately, Last.fm doesn’t include location information directly, even though it is usually contained somewhere in the artists bio page. Luckily, [Echonest](http://the.echonest.com) provides location data (along with a lot’s of other interesting features) and it includes a foreign key identification system that uses the same identifier as Last.fm. Running this on my listening data returned results in about an 80% success rate, with most of the misses being local bands or bands with only a couple of plays. There were a few big exceptions though that may skew the results, the top 4 for instance had playcounts of over a hundred, including my most played artist (a composer that would have increased Iceland’s counts significantly).

I then fed that data into Google’s geocoding API to get precise latitude and longitude numbers to project on to the map. This had a 100% “success rate” because the API will always do the best it can (even if that means a point in the center of the earth), in general in mainly passed the eye test, with only one definitely wrong geocoding that I uncovered (Giraffes? Giraffes! are not really from the middle of Russia, but rather a suburb of Boston).

### Visualization Approach

I knew I wanted to use a cartogram to combine playcounts and geolocation, but one problem I didn’t consider prior to getting the data was just how sparse my listening data really is. Less than 10% of countries had a single play and about 68% of plays were concentrated in just two countries, the United States and Great Britain. Under most cartogram approaches this would lead to almost certainly unrecognizable geographies, because the scale differences would just be too great.

So I decided to take a hybrid approach: a cartogram aspect for the playcount encoding placed on top of a normal world map to provide context. From there I made the countries that didn’t have any artist data transparent, so that they preserved the context, but didn’t overpower the cartogram aspect of the visualization. This also had the side effect of making it clear which countries have playcount data. However, this made the cartogram blend in with the map, so I gave each hexagon a dark border so that they remained the focal point.

This was an improvement, but there were still issues with the force layout, hexagons strayed far away from their origins losing a lot of the original geographical meaning. I improved this by tweaking the attributes of the layout (more friction, less response to collisions, etc.), but I still wasn’t satisfied. So I decided to have two different layouts that the user could swap. The initial layout preserves the geographic data at the expense of overlap, to keep the stacks readable in dense areas I decided to make the hexagons slightly transparent and then sorted the DOM by size. This made it so every hexagon was still visible and more opaque areas visually implied the density of their artist data.

## Interactivity

Zoom In/Out: either scroll wheel/touch pad or on screen buttons.

Pan: Click and drag to move the map around.

Reset: click the on screen button to go back to the default zoom and pan.

Zoom to a country: Click a given country to zoom to the countries bounding box and bring up country details in the text box. Click on it again or the Reset button to go back.

Lock Gestures: Lock gestures if they make scrolling a pain (e.g. on a touch device).

Spread Artists: toggle between the two cartogram views.

Hover Artist Hexagon: Brings up the data about the given artist and their country.

## Data Encoding

*Spatial Distribution:* Location of the bands relative to each other and the world as a whole.
Encoding: One view has them placed as accurately as the data allowed (at the expense of overlapping data points) and the other view places them as close to their location without any overlap (using collision detection and a force layout).

*Quantitative:* Play count per artist.
Encoding: Relative size of the hexagons and text that displays the absolute number on hover.

*Quantitative:* Play count per country and Echonest artist familiarity and “hotttnesss”
Encoding: Text that displays on hover.

*Categorical:* Which geographical regions the artists are from.
Encoding: Color of the hexagons match the countries they are from.

*Categorical:* Echonest genre data
Encoding: Text that displays on hover.

## Resources

Blog Posts/Examples:

One of Mike Bostock’s many insightful walkthroughs, this time on [map creation from raw shape files](http://bost.ocks.org/mike/map/).

[This whole blog is fairly insightful](http://www.ralphstraumann.ch/blog/2013/08/reworked-versions-of-my-hexagonal-population-cartogram/), but this post on the creation of a hexagonal cartogram was particularly useful.

Jason Davies is a major contributor to D3 and [his articles on maps and projections were useful.](http://www.jasondavies.com/maps/bounds/)

[This was a good overview of cartogram techniques.](http://www.gislounge.com/area-cartograms-explored/)

And another [good overview of cartogram techniques.](http://kelsocartography.com/blog/?tag=cartogram)

A [pseudo Demers cartogram example](http://bl.ocks.org/mbostock/4055889), helped me grok collision detection with quadtrees and force layouts mixed with geographic projections.

## Libraries:

[D3.js](http://d3js.org)

[D3.geo.projection.js](https://github.com/d3/d3-geo-projection), this plugin includes the Kavrayskiy projection I used for a nice world map isn’t provided with the D3 library (to keep it light).

[Topojson](https://github.com/mbostock/topojson), handles the GeoJson files to get them in a format D3 can use.

[Queue.js](https://github.com/mbostock/queue), make sure asynchronous requests are handled in a controlled, predictable manner.

[Colorbrewer](http://colorbrewer2.org), for the map’s color scheme.


## Future Work

Dynamic Data: Last.fm has a large user base, which seems to be fond of data visualizations and may be interested in this sort of map. The major hold up with that is the data gathering step, for my data set of ~1,000 artists and ~22,000 songs it took about one and a half hours to collect, which obviously wouldn’t be a successful in a dynamic environment (“Come back in two hours to see your results.”) and this would just be compounded if multiple users hit the system at once.

One potential fix for this would be to use a data store to keep track of the Echonest and Google Maps API calls, since the data in these responses is unlikely to change. This cut down data gathering time exponentially since Last.fm’s rate limiting is significantly smaller than Google and Echonest. It could be prepopulated with 2,500 artists per day (Google daily cap) that could be gathered off of a breadth first search of Last.fm’s artist tree.

Different Cartogram Representation: forces and collision detection make a decent cartogram, but as it is a non-deterministic approach occasionally it’s resulting state or how it got there are little annoying. One example I stumbled upon fairly late in the project was this [force snap to grid approach](http://vallandingham.me/force_talk/#64 and http://fathom.info/topovsgeo), which demonstrates mapping x/y or lat/lng coordinates to different grid spaces (including hexagonal). I can envision representing each artist as a graph of connected nodes (all of equal area) outlined and roughly aligning to the their country of origin. This would still allow for charge forces to separate clusters while alleviating the jitter problem that comes with using collision detection (since all node would be the same size).
