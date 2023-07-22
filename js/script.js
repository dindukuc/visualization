function draw_lines(svg, data, x_scale, y_scale, parse_year, curve_type){


    
    
    //adding nintendo line

    const line_nintendo = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Nintendo))
        .curve(curve_type); 
         
        
    // console.log(line_nintendo(data))

    
    svg.append("path")
        .data(data)
        .attr("fill", "none")
        .attr("stroke", "#e4000f")
        .attr("stroke-width", 1.5)
        .attr("class", "line")
        .attr("id", "nintendo_line")
        .attr("d", line_nintendo(data));

    
    //adding Other line
    const line_other = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Other))
        .curve(curve_type); 
        
   
    svg.append("path")
        .data(data)
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("stroke-width", 1.5)
        .attr("class", "line")
        .attr("id", "other_line")
        .attr("d", line_other(data));



    //adding Sega line
    const line_sega = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Sega))
        .curve(curve_type); 

        
        
   
    svg.append("path")
        .data(data)
        .attr("fill", "none")
        .attr("stroke", "orange")
        .attr("stroke-width", 1.5)
        .attr("class", "line")
        .attr("id", "sega_line")
        .attr("d", line_sega(data));


    //adding Sony line
    const line_sony = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Sony))
        .curve(curve_type); 
        
        
   
    svg.append("path")
        .data(data)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 1.5)
        .attr("class", "line")
        .attr("id", "sony_line")
        .attr("d", line_sony(data));


    //adding Xbox line
    const line_xbox = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Xbox))
        .curve(curve_type); 
        
        
   
    svg.append("path")
        .data(data)
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 1.5)
        .attr("class", "line")
        .attr("id", "xbox_line")
        .attr("d", line_xbox(data));



}

function redraw_nintendo_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_nintendo = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Nintendo))
        .curve(curve_type);


    line.select('#nintendo_line')
            .transition()
            .duration(duration)
            .attr("d", line_nintendo(data))

    
}

function redraw_other_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_other = d3.line()
    .x(d => x_scale(parse_year(d.Year)))
    .y(d => y_scale(+d.Other))
    .curve(curve_type);


    line.select('#other_line')
            .transition()
            .duration(duration)
            .attr("d", line_other(data))

    
}

function redraw_sega_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_sega = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Sega))
        .curve(curve_type); 


    line.select('#sega_line')
            .transition()
            .duration(duration)
            .attr("d", line_sega(data))

    
}

function redraw_sony_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_sony = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Sony))
        .curve(curve_type); 


    line.select('#sony_line')
            .transition()
            .duration(duration)
            .attr("d", line_sony(data))

    
}

function redraw_xbox_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_xbox = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Xbox))
        .curve(curve_type); 


    line.select('#xbox_line')
            .transition()
            .duration(duration)
            .attr("d", line_xbox(data))

    
}


async function init() {
    
    //define width, height and margin variables
    const width = 1440
    const height = 800
    const margin = ({top: 20, right: 30, bottom: 30, left: 40})
    const curve_type = d3.curveMonotoneX; //change curve types

    //add border for debugging; might change it later if needed
    d3.select('#chart').style("border", "2px solid black");

    const data = await d3.csv("js/data/videogames_total_sales_per_year.csv");   
    console.log(data);  //checking to see if the data is being read in properly

    //defining the svg element that will be added into the overall svg element
    const svg = d3.select("#chart")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
        
    //testing out if the max function works
    // console.log(d3.max(data, d => d3.max([+d.Nintendo, +d.Other, +d.PC, +d.Sega, +d.Sony, +d.Xbox])));
   
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
    const x_axis = svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(
            d3.axisBottom(x_scale) 
        );

    //place y-axis
    const y_axis = svg.append("g")
        .call(d3.axisLeft(y_scale).tickFormat(d3.format("~s")) );

   
    
    // Add a clipPath everything out of this area won't be drawn
    const clip = svg.append("defs").append("svg:clipPath")
        .attr("id", "clip")
        .append("svg:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("y", 0);

    // Add brushing to line chart
    const brush = d3.brush()                   
        .extent( [ [0,0], [width,height] ] )  
        .on("end", updateChart)               

    // line variable; wiill containall of the lines that are created in the draw_lines function
    const line = svg.append('g')
      .attr("clip-path", "url(#clip)")

    
    draw_lines(line, data, x_scale, y_scale, parse_year, curve_type);

    line.append("g")
        .attr("class", "brush") 
        .call(brush); //calling brush function on line
    

    // sets idleTimeOut to null
    let idleTimeout
    function idled() { idleTimeout = null; }

    function updateChart(event,d) {

        // get selected boundaries
        extent = event.selection
    
        // If no selection, back to initial coordinate; Otherwise, updates the X axis domain
        if(!extent){
          if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
          x_scale.domain(d3.extent(data, d => parse_year(d.Year)))
          y_scale.domain([ 0, d3.max(data, d => d3.max([+d.Nintendo, +d.Other, +d.PC, +d.Sega, +d.Sony, +d.Xbox])) ])
        }else{
          x_scale.domain([ x_scale.invert(extent[0][0]), x_scale.invert(extent[1][0]) ])
          y_scale.domain([ y_scale.invert(extent[1][0]), y_scale.invert(extent[1][1]) ])
          line.select(".brush").call(brush.move, null) // This remove the grey brush area as soon as the selection has been done
        }
        
        // Update axis and line position
        x_axis.transition().duration(1000).call(d3.axisBottom(x_scale))
        y_axis.transition().duration(1000).call(d3.axisLeft(y_scale))
        redraw_nintendo_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
        redraw_other_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
        redraw_sega_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
        redraw_sony_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
        redraw_xbox_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
    }



    svg.on("dblclick",function(){
        x_scale.domain(d3.extent(data, d => parse_year(d.Year)))
        x_axis.transition().call(d3.axisBottom(x_scale))
        
        y_scale.domain([ 0, d3.max(data, d => d3.max([+d.Nintendo, +d.Other, +d.PC, +d.Sega, +d.Sony, +d.Xbox])) ])
        y_axis.transition().call(d3.axisLeft(y_scale))

        redraw_nintendo_line(line, data, x_scale, y_scale, parse_year, curve_type, 0)
        redraw_other_line(line, data, x_scale, y_scale, parse_year, curve_type, 0)
        redraw_sega_line(line, data, x_scale, y_scale, parse_year, curve_type, 0)
        redraw_sony_line(line, data, x_scale, y_scale, parse_year, curve_type, 0)
        redraw_xbox_line(line, data, x_scale, y_scale, parse_year, curve_type, 0)
      });


    var zoom = d3.zoom
    
}