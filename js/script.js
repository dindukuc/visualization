async function init() {
    
    //define width, height and margin variables
    const width = 1440
    const height = 800
    const margin = ({top: 20, right: 30, bottom: 30, left: 40})
    
    //add border for debugging; might change it later if needed
    d3.select('#chart').style("border", "2px solid black");

    const data = await d3.csv("js/data/videogames_total_sales_per_year.csv");   
    // console.log(data);  //checking to see if the data is being read in properly

    //defining the svg element that will be added into the overall svg element
    const svg = d3.select("#chart")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
        
    //testing out if the max function works
    // console.log(d3.max(data, d => d3.max([d.Nintendo, d.Other, d.PC, d.Sega, d.Sony, d.Xbox])));

    

    //create x_scale
    const parse_year = d3.timeParse("%Y");
    var x_scale = d3.scaleTime()
        .domain(
            d3.extent(data, d => parse_year(d.Year))
        )
        .range([0, width]);
    

    //create y_scale
    var y_scale = d3.scaleLinear()
        .domain([
            0, d3.max(data, d => d3.max([+d.Nintendo, +d.Other, +d.PC, +d.Sega, +d.Sony, +d.Xbox]))
        ])
        .range([height, 0]);

    //place x-axis
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(
            d3.axisBottom(x_scale) 
        );

    //place y-axis
    svg.append("g")
        .call(d3.axisLeft(y_scale).tickFormat(d3.format("~s")) );

   
    
    // console.log("here")

    //adding nintendo line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x_scale(d.Year) })
        .y(function(d) { return y_scale(d.Nintendo) })
        );
    
    
}


