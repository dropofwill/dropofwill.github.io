---
title: Review of 4 Data Visualizations, 2 Good & 2 Bad
date: 2014-12-17 01:45 UTC
tags: Data Viz, Review
summary: ""
---

## Review of 4 Data Visualizations, 2 Good & 2 Bad

[Good: Periscopic's Gun Deaths Visualization](http://guns.periscopic.com)

This interactive visualization takes gun related deaths and combines that with the age at death distribution to estimate how much longer each individual could have lived if their life hadn't been cut short. What sets this visualization apart is how it represents each life as a ballistic trajectory that drops off as they die. This serves to relate the visualization to the topic and really drives home the point that lives are being cut short.

Something I really like about this is that it establishes the narrative, but doesn't draw it out to long. Three or four people are shown dropping with their name and age, but then it speeds up the presentation so the visualization reaches a point that the user can interact with it, filtering through the data on their own and drawing their own conclusions.

[Good: New York Times' 512 Paths to the White House](http://www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html?_r=0)

This decision tree shows all the possible outcomes possible from 9 states that were a toss up in the 2012 presidential election. Not only does it look great, it uncovered a number of interesting facts about the election, like the fact that their were 5 possible outcomes that would result in a tie and that if Romney lost Florida he would all but lose the whole thing.

But my favorite part about this visualization is the interactivity, again it invites the user to explore the data for themselves, and it takes full advantage of D3 transitions to make this a genuinely enjoyable experience. And for those users who aren't quite as inquisitive it explains what the New York Times thought was most interesting from the data too.

[Bad: Dataveyes' Actualites](http://dataveyes.com/?em_x=22#!/en/case-studies/actualites
)

Actualites visualizes the volume of French video game news in real time. In the case study linked above, they talk about how their original idea was a simple treemap, but inevitably the client wanted something a bit more sexy.

The dataset is the number of articles about a particular game published that week and the amount of times that has been shared or discussed on social media over that same time frame.

How they chose to visualize this was through a bunch of low poly "planets" that really look like balloons. The planets have 2 parts: a core that represents the number of articles and an outer layer that represents the amount of social media activity happening around those articles. Then around that they have little spaceship like things that orbit the planets representing "recent" social media shares.

While the result looks nice and with some instruction you can figure out some interesting features of the dataset, they ended up having to supplement the 3D planets with a bar graph and time series. So in the end the planets obviously weren't actually adding anything or at least weren't sufficient on their own.

[Bad: North American English Dialects Map](http://big.assets.huffingtonpost.com/AmericanEnglishDialects.gif)

This map shows dialect variations in English speaking areas of North America. While the data used here is probably the best in any visualization on the subject, it suffers from trying to show too many dimensions of data on a single map. These include things like vowel mergers, number of vowels, general trends (Lowland Southern, Inland North, etc.), fronting, dropping, among other linguistic features that aren't necessarily mutually exclusive and often intersect between regions in nonstandard ways.

The way it represents all these features is through an inconsistent use of background colors, hatch patterns, border color, border style, dots, and occasionally just labels. Adding to this confusion it uses color in ways that make it hard for a color blind viewer (like me) to tell where one boundary ends and another begins.

