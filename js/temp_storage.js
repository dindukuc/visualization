svg.selectAll("foreignObject")
.data(data)
.enter().append("foreignObject")
.attr('x' , 1545)
.attr('y',  394)
.attr('width', 200)
.attr('height', 50)
.append("xhtml:div")
.html('<label><input type="checkbox" id="nintendo_checkbox" checked="checked"> Nintendo<label/>');
// .on("click", );
