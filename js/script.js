async function init() {
    
    const width = 1440
    const height = 800
    const margin = ({top: 20, right: 30, bottom: 30, left: 40})
    
    
    const data = await d3.csv("js/data/videogames_total_sales_per_year.csv");   
    console.log(data);  

    d3.select('#chart').style("border", "2px solid black");

    console.log(d3.max(data, d => d3.max([d.Nintendo, d.Other, d.PC, d.Sega, d.Sony, d.Xbox])));

    
    //create and place x and y axes
    const parse_year = d3.timeParse("%Y");
    var x_axis = d3.scaleTime()
        .domain(
            d3.extent(data, d => parse_year(d.Year))
        )
        .range([0, width]);
    


    var y_axis = d3.scaleLinear()
        .domain([
            0, d3.max(data, d => d3.max([d.Nintendo, d.Other, d.PC, d.Sega, d.Sony, d.Xbox]))
        ])
        .range([height, 0]);


    d3.select('#chart')
        .append("g")
        .attr("transform", "translate(40, 825)")
        .call(
            d3.axisBottom(x_axis) 
        );


    d3.select('#chart')
      .append("g")
      .attr("transform", "translate(40,25)")
      .call(d3.axisLeft(y_axis).tickFormat(d3.format("~s")) );

   
    
    
}


