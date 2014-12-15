---
title: "C-Graph: A new tool to grok C-source code"
date: 2014-12-15 01:43 UTC
tags: C, JavaScript, Data Viz
summary: "Source code is often the most up to date documentation available, but while code is written in a linear fashion, the execution is a network of calls that often jump across files. Known as a function call graph, this data can help programmers quickly grasp the structure of a program. How can  we use visualization to make the process of grokking source code easier?  "
---

## C-Graph: A new tool to grok C-source code

A joint post by Brendan Whitfield & Will Paul

Source Code: [https://github.com/brendanwhitfield/cgraph](https://github.com/brendanwhitfield/cgraph)

Live Example: [http://cgraph.herokuapp.com/](http://cgraph.herokuapp.com/)

Source code is often the most up to date documentation available, but while code is written in a linear fashion, the execution is a network of calls that often jump across files. Known as a function call graph, this data can help programmers quickly grasp the structure of a program. How can  we use visualization to make the process of grokking source code easier?

The concept of a call graph is not new, and there are several open source tools that perform such a task. Yet, after only a short time with some of these applications, many design limitations hamper their use, or clarity in visualization. The flaws range from bad workflow to information overload, all of which C-Graph attempts to address. However, before any visualizations can be made, the data for them must be generated.

To construct a call graph, there are two predominant solutions. The first is to dynamically build the graph through careful monitoring of the program during execution. This will show how the program truly behaves, however it is often difficult to implement. For this reason, most software resorts to statically constructed graphs. Static graphing is a simple operation of parsing the source code, and matching functions calls to definitions. While this solution has drawbacks (namely, the inability to resolve function pointers), it is straight-forward to implement, since it leverages the abilities of existing parsers. For sake of project scope, C-Graph operates statically.

C-Graph was originally slated to use a pre-existing graphing utility as a back-end. However, after some experimentation, each utility was rejected because it failed to deliver some piece data or functionality. In particular, the ability to parse a segment of source code without its dependant libraries was a feature that did not exist in any tool. In order to easily integrate with external code repositories (such as GitHub), a custom parser was designed to suit this need. Instead of doing a full syntax parse of the user’s code (and dependant headers), the system only searches for calls and definitions. Once located, they can be linked by name and location. The C language was chosen specifically for its ease and simplicity in linking. Unlike other languages, where functions of the same name are rampant, extern C functions must carry globally unique names, thus allowing it to be linked quickly.

Once the data is generated from the user’s code, a visualization can be custom built. Since the data structure is fundamentally a graph, the obvious choice for visualization was a force layout. However, with the graph alone, there is no obvious connection between the graph and the code. A typical workflow would have to entail switching back and forth between a text editor and the call graph, searching for function definitions as they appear. To remedy this problem, the graph is accompanied by a pane that displays files. The user can simply click any node in the graph, and instantly be presented with the connected code. This solution allows side-by-side code and graph viewing, which dramatically helps the user traverse the source code as well as the graph.

One of the frequent problems with traditional call graphs is that they are simply static images. All of the complexity is thrown at the user immediately, which makes it hard for a viewer to get a high level overview of how the program works. Rather than viewing the entirety of the code at such a microscopic level, C-Graph implements a binning system, where the user can expand and collapse whole files into their composite functions. This interactivity is key to creating an understandable visualization of a potentially messy dataset. This approach was inspired by Ben Shneiderman’s classic visualization mantra “overview first, zoom and filter, then details on demand.”

The design of the graph itself was kept extremely simple, in order to better accommodate the deluge of information it must display. Small circles represent individual functions, and accumulate into larger circles when grouped into files. The linkages between nodes vary in weight to display the number of times a call to the same function or file has been made, while arrows encode the direction of the call. Since sometimes the functions spread out and have similar colors we used convex hulls of the same color to keep them visually grouped together even after expansion.

Other alternatives were considered, but most were ultimately rejected due to over complication. For instance, color and sloping link weights were considered as possible methods for encoding direction, but arrows were ultimately chosen because of the small footprint. Even at the file level, it is exceptionally easy for nodes to become obscured, so great care was taken to minimize all unnecessary graphics. As another way to combat the noise of all the function calls we implemented hover highlighting, such that when the mouse is over a node the rest of the links fade out so that the focal point is just on the calls from that particular function.
