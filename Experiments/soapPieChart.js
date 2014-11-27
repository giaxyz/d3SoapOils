/**
 * Created by Gia on 27/11/14.
 */


function buildPie(divid){

    var data = [20,40,60,180,80];
    var radius = 100;
    var canvasWidth = 200;
    var color = d3.scale.ordinal()
        .range(["red","blue","orange","yellow","green"]);

    var canvasHeight = canvasWidth;
    var canvas = d3.select(divid).append("svg")
        .attr("width", canvasWidth)
        .attr("height", canvasHeight)

    var background = canvas.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "white");

    var group = canvas.append("g")
        .attr("transform", "translate(100,100)");

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


}