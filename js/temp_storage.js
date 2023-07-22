




line.selectAll("points")
.data(data)
.enter()
.append("circle")
.attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
.attr("cy", function(d) { return y_scale(+d.Sony); })    
.attr("r", 1)
.attr("class","point")
.style("opacity", 1);


//hover on tooptip points
line.selectAll("points")
.data(data)
.enter()
.append("circle")
.attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
.attr("cy", function(d) { return y_scale(+d.Nintendo); })    
.attr("r", 10)
.attr("class","point")
.style("opacity", 0)

.on('mouseover', function(event, d) {
    tooltip.transition()
        .delay(30)
        .duration(200)
        .style("opacity", 1);
    
    // console.log(x_coor + "   " + y_coor)

    tooltip.html(parseFloat(d.Nintendo))
    .style("left", (d3.pointer(event)[0] + 25) + "px")
    .style("top", (d3.pointer(event)[1] + "px")  )


const selection = d3.select(this).raise();

selection
    .transition()
    .delay("20")
    .duration("200")
    .attr("r", 6)
    .style("opacity", 1)
    .style("fill","#ed3700");

})

.on("mouseout", function(d) {      
    tooltip.transition()        
    .duration(100)      
    .style("opacity", 0);
    
    

     //add this        
const selection = d3.select(this);

selection
    .transition()
    .delay("20")
    .duration("200")
    .attr("r", 10)
    .style("opacity", 0);
});



//hover on tooptip points
line.selectAll("points")
.data(data)
.enter()
.append("circle")
.attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
.attr("cy", function(d) { return y_scale(+d.Sony); })    
.attr("r", 10)
.attr("class","point")
.style("opacity", 0)

.on('mouseover', function(event, d) {
    tooltip.transition()
        .delay(30)
        .duration(200)
        .style("opacity", 1);
    
    // console.log(x_coor + "   " + y_coor)

    tooltip.html(parseFloat(d.Sony))
    .style("left", (d3.pointer(event)[0] + 25) + "px")
    .style("top", (d3.pointer(event)[1] + "px")  )


const selection = d3.select(this).raise();

selection
    .transition()
    .delay("20")
    .duration("200")
    .attr("r", 6)
    .style("opacity", 1)
    .style("fill","#ed3700");

})

.on("mouseout", function(d) {      
    tooltip.transition()        
    .duration(100)      
    .style("opacity", 0);
    
    

     //add this        
const selection = d3.select(this);

selection
    .transition()
    .delay("20")
    .duration("200")
    .attr("r", 10)
    .style("opacity", 0);
});