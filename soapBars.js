/**
 * Created by Gia on 16/11/14.
 */

function makeBarChart(divId, dataset, maxY){

    //Width and height


   var w = 600; // is actually height
    var h = 300;

    //Set up stack method and pass the dataset on to it, -- stack expects a dataset matrix
    var stack = d3.layout.stack();
    stack(dataset);



    //Create SVG element
    var canvas = d3.select(divId)
        .append("svg")
        .attr("width", w )
        .attr("height", h);


    //Easy colors accessible via a 10-step ordinal scale
    //var colors = d3.scale.category10();
    var colors = d3.scale.ordinal().range(["#facb6c", "#b1c6c9", "#bfc8a9", "#d79b9b", "#d7b8ca", "#f0a481", "#97c3a1"]);



    // Add a group for each row of data, and set the fill colour on the group
    var groups = canvas.selectAll("g")
        .data(dataset)
        .enter()
        .append("g")
        .attr("transform", "translate(0,-10)") // GLOBAL translate
        .style("fill", function(d, i) {
            return colors(i);
        });


    //Set up scales
    var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset[0].length))
        .rangeRoundBands([0, h-100], 0.1);  // interval, padding, outer padding

    var yScale = d3.scale.linear()
        .domain([0,
            d3.max(dataset, function(d) {
                return d3.max(d, function(d) {
                    return d.y0 + d.y;
                });
            })
        ])
        .range([0, h]); ///*************************8


    // Add a rect for each data value
    var rects = groups.selectAll("rect")
        .data(function(d) { return d; })
        .enter()
        .append("rect")
        .attr("y", function(d, i) {
            return i * 40;  // shuffle up and down
        })
        .attr("width", function(d) {
            return yScale(d.y); // the top of the bars ///**************************8
        })
        .attr("x", function(d) {
            return yScale(d.y0); // the bottom of the bars (x, but rotated)
        })
        .attr("height", xScale.rangeBand()) // this is the width of the bars
        .attr("transform", "translate(80,50)");

    console.log(rects);

    var yScaleLabels = d3.scale.ordinal()
        .domain(["A", "B", "C", "D", "E"])
        .rangeRoundBands([100, h], .1);

    //Define Y axis
    var yAxis = d3.svg.axis()
        .scale(yScaleLabels)
        .orient("left")
        .ticks(5);


    //Create Y axis
        canvas.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(80,-60)")
            .call(yAxis);



    // X axis setup
    var xScale = d3.scale.linear()
        //.domain([0, d3.max(dataset, function(d) { return d.y0 + d.y; })])
        //.range([0, h]);
        //.domain([0,100])
        .domain([0, maxY])
        .range([0,h]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(10);

    canvas.append("g")
        .attr("transform", "translate(80,250)")
        .call(xAxis);
}


function buildGraph(divId) {

    var svgContainer = d3.select(divId)
        .append("svg");

    var circle = svgContainer.append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 50)
        .attr("fill", "blue");
}

