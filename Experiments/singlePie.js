/**
 * Created by Gia on 15/11/14.
 */


function buildPie(){

    var data = [20,40,60,180,80];
    var radius = 100;
    var canvasWidth = 200;
    var color = d3.scale.ordinal()
        .range(["red","blue","orange","yellow","green"]);

    var canvasHeight = canvasWidth;
    var canvas = d3.select("body").append("svg")
        .attr("width", canvasWidth)
        .attr("height", canvasHeight)

    var background = canvas.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "pink");

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

    var arc2= d3.svg.arc()
        .innerRadius(10)
        .outerRadius(50);

    var pie2 = d3.layout.pie()
        .value(function(d){return d;});

    var arcs2 = group.selectAll(".arc2")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc2");

    arcs2.append("path")
        .attr("d", arc2)
        .attr("fill",function(d) {return color(d.data);});

}

function buildPie2(){

    var data = [5,10,60];
    var radius = 100;
    var canvasWidth = radius*4;
    var color = d3.scale.ordinal()
        .range(["red","blue","yellow"]);

    var canvasHeight = canvasWidth;
    var canvas = d3.select("body").append("svg")
        .attr("width", canvasWidth)
        .attr("height", canvasHeight);

    var group = canvas.append("g")
        .attr("transform", "translate(0,0)");

    var arc= d3.svg.arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius);

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

function buildTwo() {

    var svgContainer = d3.select("#area1")
        .append("svg")


    var circle = svgContainer.append("circle")
        .attr("cx", 30)
        .attr("cy", 30)
        .attr("r", 20);

    var svgContainer2 = d3.select("#area2")
        .append("svg")


    var circle = svgContainer2.append("circle")
        .attr("cx", 30)
        .attr("cy", 30)
        .attr("r", 20);
}


function buildInDiv(){

    var svgContainer = d3.select("#area1")
        .append("svg")

    var circle = svgContainer.append("circle")
        .attr("cx", 30)
        .attr("cy", 30)
        .attr("r", 20);
}


