function draw_lines(svg, data, x_scale, y_scale, parse_year, curve_type, marker_size){


    //defining nintendo line generator

    const line_nintendo = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Nintendo))
        .curve(curve_type); 
         
        
    // console.log(line_nintendo(data))

    //drawing nintendo line
    svg.append("path")
        .data(data)
        .attr("fill", "none")
        .attr("stroke", "#e4000f")
        .attr("stroke-width", 1.5)
        .attr("class", "line")
        .attr("id", "nintendo_line")
        .attr("d", line_nintendo(data));


    //defining points for nintendo line
    svg.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Nintendo); })    
        .attr("r", marker_size)
        .attr("class","nintendo_markers")
        .style("opacity", 1);

   


    


    
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

    svg.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Other); })    
        .attr("r", marker_size)
        .attr("class","other_markers")
        .style("opacity", 1);




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

    
    svg.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Sega); })    
        .attr("r", marker_size)
        .attr("class","sega_markers")
        .style("opacity", 1);



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


    svg.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Sony); })    
        .attr("r", marker_size)
        .attr("class","sony_markers")
        .style("opacity", 1);






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

    svg.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Xbox); })    
        .attr("r", marker_size)
        .attr("class","xbox_markers")
        .style("opacity", 1);



}

function redraw_nintendo_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_nintendo = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Nintendo))
        .curve(curve_type);


    line.select('#nintendo_line')
            .transition()
            .duration(duration)
            .attr("d", line_nintendo(data));
    
    line.selectAll(".nintendo_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Nintendo); });
    
    line.selectAll(".nintendo_tooltip_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Nintendo); });


    
}

function redraw_other_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_other = d3.line()
    .x(d => x_scale(parse_year(d.Year)))
    .y(d => y_scale(+d.Other))
    .curve(curve_type);


    line.select('#other_line')
            .transition()
            .duration(duration)
            .attr("d", line_other(data));
    
    line.selectAll(".other_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Other); });
    
    line.selectAll(".other_tooltip_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Other); });
    
}

function redraw_sega_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_sega = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Sega))
        .curve(curve_type); 


    line.select('#sega_line')
            .transition()
            .duration(duration)
            .attr("d", line_sega(data));
    
    line.selectAll(".sega_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Sega); });

    line.selectAll(".sega_tooltip_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Sega); });

    
}

function redraw_sony_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_sony = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Sony))
        .curve(curve_type); 


    line.select('#sony_line')
            .transition()
            .duration(duration)
            .attr("d", line_sony(data));
    
    line.selectAll(".sony_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Sony); });

    line.selectAll(".sony_tooltip_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Sony); });

    
}

function redraw_xbox_line(line, data, x_scale, y_scale, parse_year, curve_type, duration){
    
    const line_xbox = d3.line()
        .x(d => x_scale(parse_year(d.Year)))
        .y(d => y_scale(+d.Xbox))
        .curve(curve_type); 


    line.select('#xbox_line')
            .transition()
            .duration(duration)
            .attr("d", line_xbox(data));

    line.selectAll(".xbox_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Xbox); });

    line.selectAll(".xbox_tooltip_markers")
        .transition()
        .duration(duration)
        .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
        .attr("cy", function(d) { return y_scale(+d.Xbox); });

}

async function create_viz(data_file_name) {
    
    //define width, height and margin variables
    const width = 1440
    const height = 800
    const margin = ({top: 20, right: 30, bottom: 30, left: 40})
    const curve_type = d3.curveMonotoneX; //change curve types
    const marker_size = 2; //change marker size on points

    //add border for debugging; might change it later if needed
    d3.select('#chart').style("border", "2px solid black");

    const data = await d3.csv(data_file_name +'?' + Math.floor(Math.random() * 1000));  //random stuff added so the browser doesn't cache csv files
    console.log(data);  //checking to see if the data is being read in properly

    //defining the svg element that will be added into the overall svg element
    const svg = d3.select("#chart")
    .append("svg")
      .attr("id", "canvas")
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
            //changed domain -- maybe make it a variable later
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
    
    

   
    draw_lines(line, data, x_scale, y_scale, parse_year, curve_type, marker_size);

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
          y_scale.domain([ 0, d3.max(data, d => d3.max([+d.Nintendo, +d.Other, +d.PC, +d.Sega, +d.Sony, +d.Xbox])) ]) //changed domain -- maybe make it a variable later
        }else{
          x_scale.domain([ x_scale.invert(extent[0][0]), x_scale.invert(extent[1][0]) ])
          y_scale.domain([ y_scale.invert(extent[1][1]), y_scale.invert(extent[0][1]) ])
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
        x_axis.transition().duration(1000).call(d3.axisBottom(x_scale))
        
        y_scale.domain([ 0, d3.max(data, d => d3.max([+d.Nintendo, +d.Other, +d.PC, +d.Sega, +d.Sony, +d.Xbox])) ])  
        y_axis.transition().duration(1000).call(d3.axisLeft(y_scale))

        redraw_nintendo_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
        redraw_other_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
        redraw_sega_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
        redraw_sony_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
        redraw_xbox_line(line, data, x_scale, y_scale, parse_year, curve_type, 1000)
      });


    

   
    
    //defining tooltips
    const tooltip = d3.select("#chart")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "5px")
        .style("padding", "10px")
        .style("position","absolute");



    
    
    const mouseover = function(event, d){
        tooltip.style("opacity", 1);
    
    }

    const mouseleave = function(event, d){
        tooltip.transition()
            .duration(150)
            .style("opacity", 0);
    }

   


    function draw_tooltip_markers(){

        const mousemove_nintendo = function(event, d) {
            tooltip.html(
                `Sales: ${+d.Nintendo}`
            )
            .style("left", (d3.pointer(event)[0] + 90) + "px")
            .style("top", (d3.pointer(event)[1] + "px")  );
            
            // console.log("x:" + (d3.pointer(event)[0] ));
            // console.log("y:" + (d3.pointer(event)[1] ));
    
        }

        line.selectAll("points")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
            .attr("cy", function(d) { return y_scale(+d.Nintendo); })    
            .attr("r", marker_size*3)
            .attr("class","nintendo_tooltip_markers")
            .style("opacity", 0.3)
            .on("mouseover", mouseover )
            .on("mousemove", mousemove_nintendo)
            .on("mouseleave", mouseleave );



        const mousemove_other = function(event, d) {
            tooltip.html(
                `Sales: ${+d.Other}`
            )
            .style("left", (d3.pointer(event)[0] + 90) + "px")
            .style("top", (d3.pointer(event)[1] + "px")  );
            
            // console.log("x:" + (d3.pointer(event)[0] ));
            // console.log("y:" + (d3.pointer(event)[1] ));

        }    
        line.selectAll("points")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
            .attr("cy", function(d) { return y_scale(+d.Other); })    
            .attr("r", marker_size*3)
            .attr("class","other_tooltip_markers")
            .style("opacity", 0.3)
            .on("mouseover", mouseover )
            .on("mousemove", mousemove_other)
            .on("mouseleave", mouseleave );




        const mousemove_sega = function(event, d) {
            tooltip.html(
                `Sales: ${+d.Sega}`
            )
            .style("left", (d3.pointer(event)[0] + 90) + "px")
            .style("top", (d3.pointer(event)[1] + "px")  );
            
            // console.log("x:" + (d3.pointer(event)[0] ));
            // console.log("y:" + (d3.pointer(event)[1] ));
    
        }

        line.selectAll("points")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
            .attr("cy", function(d) { return y_scale(+d.Sega); })    
            .attr("r", marker_size*3)
            .attr("class","sega_tooltip_markers")
            .style("opacity", 0.3)
            .on("mouseover", mouseover )
            .on("mousemove", mousemove_sega)
            .on("mouseleave", mouseleave );



            const mousemove_sony = function(event, d) {
                tooltip.html(
                    `Sales: ${+d.Sony}`
                )
                .style("left", (d3.pointer(event)[0] + 90) + "px")
                .style("top", (d3.pointer(event)[1] + "px")  );
                
                // console.log("x:" + (d3.pointer(event)[0] ));
                // console.log("y:" + (d3.pointer(event)[1] ));
        
            }
    
            line.selectAll("points")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
                .attr("cy", function(d) { return y_scale(+d.Sony); })    
                .attr("r", marker_size*3)
                .attr("class","sony_tooltip_markers")
                .style("opacity", 0.3)
                .on("mouseover", mouseover )
                .on("mousemove", mousemove_sony)
                .on("mouseleave", mouseleave );


            const mousemove_xbox = function(event, d) {
                tooltip.html(
                    `Sales: ${+d.Xbox}`
                )
                .style("left", (d3.pointer(event)[0] + 90) + "px")
                .style("top", (d3.pointer(event)[1] + "px")  );
                
                // console.log("x:" + (d3.pointer(event)[0] ));
                // console.log("y:" + (d3.pointer(event)[1] ));
        
            }
    
            line.selectAll("points")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", function(d) { return x_scale(parse_year(d.Year)); })      
                .attr("cy", function(d) { return y_scale(+d.Xbox); })    
                .attr("r", marker_size*3)
                .attr("class","xbox_tooltip_markers")
                .style("opacity", 0.3)
                .on("mouseover", mouseover )
                .on("mousemove", mousemove_xbox)
                .on("mouseleave", mouseleave );



    }    
    
    draw_tooltip_markers();
    

    function hide_nintendo_line(){
        if(d3.select(this).property("checked")){
            
            d3.select('#nintendo_line')
                .style("opacity", 1);
            
            d3.selectAll(".nintendo_markers")
              .attr("r", marker_size);
            
            d3.selectAll(".nintendo_tooltip_markers")
              .attr("r", 3*marker_size);
        }
        else{
            d3.select('#nintendo_line')
                .style("opacity", 0);
            
            d3.selectAll(".nintendo_markers")
              .attr("r", 0);
            
            d3.selectAll(".nintendo_tooltip_markers")
              .attr("r", 0);
        }
    }

    function hide_sega_line(){
        if(d3.select(this).property("checked")){
            
            d3.select('#sega_line')
                .style("opacity", 1);
            
            d3.selectAll(".sega_markers")
              .attr("r", marker_size);
            
            d3.selectAll(".sega_tooltip_markers")
              .attr("r", 3*marker_size);
        }
        else{
            d3.select('#sega_line')
                .style("opacity", 0);
            
            d3.selectAll(".sega_markers")
              .attr("r", 0);
            
            d3.selectAll(".sega_tooltip_markers")
              .attr("r", 0);
        }
    }

    const nintendo_checkbox = d3.select("#nintendo_checkbox").on("click", hide_nintendo_line);
    const sega_checkbox = d3.select("#sega_checkbox").on("click", hide_sega_line);
    const sony_checkbox = d3.select("#nintendo_checkbox").on("click", hide_sony_line);
    const xbox_checkbox = d3.select("#sega_checkbox").on("click", hide_xbox_line);
    const other_checkbox = d3.select("#sega_checkbox").on("click", hide_other_line);
    


}

async function update_viz(data_file_name){
    d3.select("#chart").html('');
    create_viz(data_file_name);
}


const  total_data_file_name = "js/data/videogames_total_sales_per_year.csv"
const  avg_data_file_name = "js/data/videogames_average_sales_per_year.csv"
const  max_data_file_name = "js/data/videogames_max_sales_per_year.csv"