/**
 * Created by Gia on 27/11/14.
 */


function buildSoapPieChart(divId, data){

   /*var data = [20,40,60,180,80];*/
    var radius = 100;
    var canvasWidth = 600;
    var color = d3.scale.ordinal()
        .range(["#facb6c", "#b1c6c9", "#bfc8a9", "#d79b9b", "#d7b8ca", "#f0a481", "#97c3a1"]);

    var canvasHeight = 270;
    var canvas = d3.select(divId).append("svg")
        .attr("width", canvasWidth)
        .attr("height", canvasHeight);

    var background = canvas.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "white");

    var group = canvas.append("g")
        .attr("transform", "translate(100,140)");

    var arc= d3.svg.arc()
        .innerRadius(60)
        .outerRadius(100);

    var pie = d3.layout.pie()
        .value(function(d){return d;});

    var arcs = group.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

    arcs.append("path")
        .attr("d", arc)
        .attr("fill",function(d) {return color(d.data);});



    var fillColoursData = ["#facb6c", "#b1c6c9", "#bfc8a9", "#d79b9b", "#d7b8ca", "#f0a481", "#97c3a1"];

    var legendGroup = canvas.append("g");
    var legendSquares = legendGroup.selectAll("squares")
        .data(fillColoursData)
        .enter()
        .append("rect")
        .attr("x", 500)
        .attr("y", function(d , i){ return (i * 20) + 80})
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", function(d){return (d)});

    var labelData = ["", "Lauric",  "Linoleic", "Myristic", "Ricinoleic", "Oleic", "Palmitic", "Stearic"];
    var textLegendGroup = legendGroup.selectAll("textLabelsLegend")
        .data(labelData)
        .enter()
        .append("text")
        .attr("class", "legendLabel")
        .attr("text-anchor", "center")
        .attr("x", 525)
        .attr("y", function(d , i){ return ((i * 20) + 70)})
        .text (function(d){return (d) });

    var legendTitleLabel = canvas.append("text")
        .attr("class", "legendLabel")
        .attr("text-anchor", "center")
        .attr("x", 400)
        .attr("y", 60)
        .text ("Colour Indicates Fatty Acid Type");

    var legendXLabel = canvas.append("text")
        .attr("class", "legendLabel")
        .attr("text-anchor", "center")
        .attr("x", 230)
        .attr("y", 280)
        .text ("Fatty Acid Content as %");


}