/**
 * Created by Gia on 16/11/14.
 */

function makeBarChart(divId, dataset){

    //Width and height
    var w = 300;
    var h = 300;
    //console.log(w)

    //Set up stack method and pass the dataset on to it, -- stack expects a dataset matrix
    var stack = d3.layout.stack();
    stack(dataset);



    //Create SVG element
    var canvas = d3.select(divId)
        .append("svg")
        .attr("width", w)
        .attr("height", h);


    //Easy colors accessible via a 10-step ordinal scale
    var colors = d3.scale.category10();



    // Add a group for each row of data, and set the fill colour on the group
    var groups = canvas.selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
        .style("fill", function(d, i) {
            return colors(i);
        });


    //Set up scales
    var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset[0].length))
        .rangeRoundBands([0, w-100], 0.1);  // interval, padding, outer padding

    var yScale = d3.scale.linear()
        .domain([0,
            d3.max(dataset, function(d) {
                return d3.max(d, function(d) {
                    return d.y0 + d.y;
                });
            })
        ])
        .range([0, h]);


    // Add a rect for each data value
    var rects = groups.selectAll("rect")
        .data(function(d) { return d; })
        .enter()
        .append("rect")
        .attr("y", function(d, i) {
            return xScale(i);
        })
        .attr("x", function(d) {
            return yScale(d.y0);
        })
        .attr("width", function(d) {
            return yScale(d.y);
        })
        .attr("height", xScale.rangeBand());

}


function buildGraph(divId) {

    var svgContainer = d3.select(divId)
        .append("svg");


    var circle = svgContainer.append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 50)
        .attr("fill", "red");
}

