---
title: Maps, Visual Perceptual Scales, & Thematic Data Attributes, 3 cool things I learned from Chapter 4 of Design for Information by Isabel Meireles
date: 2014-12-17 03:10 UTC
tags: Data Viz
summary: "Chapter 4 of Design for Information is all about geo map data, and innovative ways to encode it visually. Here I write about my biggest takeaways from this chapter."
---

## Maps, Visual Perceptual Scales, & Thematic Data Attributes, 3 cool things I learned from Chapter 4 of Design for Information by Isabel Meireles

1. That geographic maps are really just another example of mathematical maps, something that never really dawned on me for whatever reason. Just think how many times I've found myself searching for D3 maps only to get opposite of what I want, turns out that wasn't necessarily the semantic mistake on Google's part that I assumed it to be.

2. On page 29 it talks about some issues with human visual perception, especially as it comes to size, length, orientation, and position (also one about color). Now obviously the first step in remedying this problem is awareness, but now that we're aware how do we fix it?

In speech processing one of the default units to measure pitch is Hertz, but differences in Hertz don't line up with human perception, especially as frequency approaches the upper limits of our perception. One solution is to recast Hertz on to a perceptual scale, the most common being the Mel scale, which is effectively a logarithmic regression fitting actual hertz values to human perception (through experimental data). Something similar has been done with color with CIE labs and the like.

The question is can something like this be applied to spatial problems as well? I have feeling based on Weber and/pr Steven's law there may be some logarithmic nature to the problem, but it would take quite a bit of experimental effort to isolate the variables and come up with a solution as good as the Mel scale (a univariate problem, where as spatial/visual problems are effected by a lot of other dimensions: x, y, color, shape, etc...).

3. I think the most useful visualization in the chapter (perhaps even of the book so far), are the two diagrams on page 124, which show the two basic dimensions of a thematic data point's attributes: discrete vs. continuous and abrupt vs. smooth. First it shows these as a 3x3 matrix of little mini examples along the two dimensions and then it shows another 3x3 matrix of example data to go along with it. If I had one critique it would be that it would make more sense to me if the two diagrams were flipped, so that it goes example problem data set -> solution, but that's a minor complaint.

