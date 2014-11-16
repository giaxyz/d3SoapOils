/**
 * Created by Gia on 16/11/14.
 */


function buildTwo() {

    var svgContainer = d3.select("#oil1")
        .append("svg")


    var circle = svgContainer.append("circle")
        .attr("cx", 30)
        .attr("cy", 30)
        .attr("r", 20);

    var svgContainer2 = d3.select("#oil2")
        .append("svg")


    var circle = svgContainer2.append("circle")
        .attr("cx", 30)
        .attr("cy", 30)
        .attr("r", 20);


    var svgContainer2 = d3.select("#oil3")
        .append("svg")


    var circle = svgContainer2.append("circle")
        .attr("cx", 30)
        .attr("cy", 30)
        .attr("r", 20);
}



function buildGraph(divId) {

    var svgContainer = d3.select(divId)
        .append("svg")


    var circle = svgContainer.append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 50)
        .attr("fill", "red");




}

