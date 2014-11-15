function SankeyHasMany() {
  "use strict";

  // Internal data that is allowed to be accessed externally through a getter/setter method created below
  var my = {
    margin: {top: 20, right: 1, bottom: 6, left: 1},
    formatFloat: d3.format(",.0f"),
    color: d3.scale.ordinal().range(colorbrewer.Dark2[8]),
    nodeWidth: 15,
    nodePadding: 10,
    forceIterations: 10,
    width: 960,
    height: 700,

    // Set later in the process
    sankey: null,
    path: null,
    svg: null,
    links: null,
    nodes: null
  };

  function init(selection) {
    my.width = my.width - my.margin.left - my.margin.right;
    my.height = my.height - my.margin.top - my.margin.bottom;

    selection.each(function(d, i) {
      var data = d;

      my.sankey = d3.sankey()
        .nodeWidth(my.nodeWidth)
        .nodePadding(my.nodePadding)
        .size([my.width, my.height])
        .nodes(data.nodes)
        .links(data.links)
        .layout(my.forceIterations)
        ;

      my.path = my.sankey.link();

      // Select the SVG from the `this` context if it exists
      my.svg = d3.select(this);
      my.svg.attr({
        width: my.width + my.margin.left + my.margin.right,
        height: my.height + my.margin.top + my.margin.bottom
      });

      my.links = my.svg
          .append("g")
          .attr("transform", "translate(" + my.margin.left + "," +
                                            my.margin.top + ")")
          .selectAll(".link")
        .data(data.links)
          .enter()
          .append("path")
          .attr("class", "link")
          .attr("d", my.path)
          .style("stroke-width", function(d) { return Math.max(1, d.dy); })
          .attr("stroke", function(d) { return my.color(d.source.name); })
          .sort(function(a, b) { return b.dy - a.dy; });

      my.nodes = my.svg
          .append("g")
          .attr("transform", "translate(" + my.margin.left + "," +
                                            my.margin.top + ")")
          .selectAll(".node")
        .data(data.nodes)
          .enter()
          .append("g")
          .attr("class", "node")
          .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
          })
          .call(d3.behavior.drag()
              .origin(function(d) { return d; })
              .on("dragstart", function() {
                this.parentNode.appendChild(this);
              })
              .on("drag", dragMove));

      my.links.append("title").text(function(d) {
        return d.source.name +
          " → " + d.target.name +
          "\nNo.: " + my.formatFloat(d.value);
      });

      my.nodes.append("rect")
        .attr("height", function(d) { return d.dy; })
        .attr("width", my.sankey.nodeWidth())
        .style("fill", function(d) { return my.color(d.name.replace(/ .*/, "")); })
        .style("stroke", function(d) { return d3.rgb(d.color).darker(2); })
        .append("title")
        .text(function(d) { return d.name + "\n" + my.formatFloat(d.value); });

      my.nodes.append("text")
        .attr("x", -6)
        .attr("y", function(d) { return d.dy / 2; })
        .attr("dy", ".35em")
        .attr("text-anchor", "end")
        .attr("transform", null)
        .text(function(d) { return d.name; })
        .filter(function(d) { return d.x < my.width / 2; })
        .attr("x", 6 + my.sankey.nodeWidth())
        .attr("text-anchor", "start");

    });
  }

  function dragMove(d) {
    d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(my.height - d.dy, d3.event.y))) + ")");
    my.sankey.relayout();
    my.links.attr("d", my.path);
  }

  // attr_accessor for JS
  // Get attr with .attr();
  // Set attr with .attr(val).attr2(val2);
  function attr_accessor(attr) {
    function build_accessor(val) {
      if (!arguments.length) return my[attr];
      my[attr] = val;
      return init;
    }
    return build_accessor;
  }

  // Create all the getters/setters for vars in `my`
  for (var key in my) {
    init[key] = attr_accessor(key);
  }

  return init;
}
