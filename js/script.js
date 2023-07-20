

async function init() {
    const data = await d3.csv("js/data/videogames_total_sales_per_year.csv");

    //create and place x and y axes
    var y = d3.scaleLog().domain([10, 150]).range([200, 0]);
    var x = d3.scaleLog().domain([10, 150]).range([0, 200]);

    d3.select('svg')
      .append("g")
      .attr("transform", "translate(50,50)")
      .call(d3.axisLeft(y).tickValues([10,20,50,100]).tickFormat(d3.format("~s")) );

    d3.select('svg')
      .append("g")
      .attr("transform", "translate(50,250)")
      .call(d3.axisBottom(x).tickValues([10,20,50,100]).tickValues([10,20,50,100]).tickFormat(d3.format("~s")));
    
       

}


