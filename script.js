var screen = {width:1000,height:700}
var margins = {top:10,right:100,left:25,bottom:50}

var data = [{ Year: "2015", Handheld: "3", Webgames: "6", TabletGames: "9", "Smartphone": "24", Console: "30", PC: "28"}, { Year: "2016", Handheld: "2", Webgames: "5", TabletGames: "10", Smartphone: "27", Console: "29", PC: "27"}, { Year: "2017", Handheld: "1", Webgames: "5", TabletGames: "10", Smartphone: "30", Console: "28", PC: "26"}, { Year: "2018", Handheld: "0", Webgames: "4", TabletGames: "11", Smartphone: "32", Console: "27", PC: "26" }, { Year: "2019", Handheld: "0", Webgames: "4", TabletGames: "11", Smartphone: "34", Console: "26", PC: "25"}]

console.log(data)

var setup = function(data)
{
    d3.select("svg")
      .attr("width",screen.width)
      .attr("height",screen.height)
      .append("g")
      .attr("id","graph")
      .attr("transform","translate("+margins.left+","+margins.top+")");
    var width = screen.width - margins.left - margins.right;
    var height = screen.height - margins.top - margins.bottom;

    var xScale = d3.scaleLinear()
                   .domain([2015, 2019])
                   .range([0 ,width])
    var yScale = d3.scaleLinear()
                    .domain([0,35])
                    .range([height,0])
    var cScale = d3.scaleOrdinal(d3.schemeCategory10)

    var xAxis = d3.axisBottom(xScale).ticks(4)
    var yAxis = d3.axisLeft(yScale)
    
ButtonAll(data)
ButtonHand(data, xScale, yScale, cScale)
ButtonConsole(data, xScale, yScale, cScale)
ButtonPc(data, xScale, yScale, cScale)
ButtonPhone(data, xScale, yScale, cScale)
ButtonWeb(data, xScale, yScale, cScale)
ButtonTablet(data, xScale, yScale, cScale)
    
    d3.select("svg")
      .append("g")
      .classed("axis",true)
    
    d3.select(".axis")
      .append("g")
      .attr("id","xAxis")
      .attr("transform","translate("+margins.left+","+(margins.top+height)+")")
      .call(xAxis)
    
    d3.select(".axis")
      .append("g")
      .attr("id","yAxis")
      .attr("transform","translate(25, "+margins.top+")")
      .call(yAxis)

var title = [{Title: "Handheld", Color: "#1f77b4"}, {Title: "Webgames", Color: "#ff7f0e"}, {Title: "TabletGames", Color: "#2ca02c"}, {Title: "Smartphone", Color: "#d62728"}, {Title: "Console", Color: "#9467bd"}, {Title: "PC", Color: "#8c564b"}]
    
drawLegend(title, cScale)
drawArray1(data, xScale, yScale, cScale)
drawArray2(data, xScale, yScale, cScale)
drawArray3(data, xScale, yScale, cScale)
drawArray4(data, xScale, yScale, cScale)
drawArray5(data, xScale, yScale, cScale)
drawArray6(data, xScale, yScale, cScale)
}

var drawLegend = function(data, cScale)
{
    d3.select("svg")
      .append("g").attr("id", "legend")
      .attr("transform", "translate(" + (screen.width-margins.right) + "," + (margins.top) + ")")
    
    var gs = d3.select("#legend")
               .selectAll("g")
               .data(data)
               .enter()
               .append("g")
               .attr("fill", function(d) {return d.Color;})
               .attr("transform", function(d, i) {return "translate(0,"+(i*14)+")"})
    gs.append("rect").attr("width",10).attr("height",10);
    
    gs.append("text")
      .text(function(d) {return d.Title})
      .attr("x",15)
      .attr("y",10)
      .attr("fill", "black")
}
var ButtonAll = function(data)
{
    d3.select("#All")
      .on("click", function(){d3.selectAll("svg *").remove()
                              setup(data)})
}
var ButtonHand = function(data, xScale, yScale, cScale)
{  
    d3.select("#Handheld")
      .on("click", function(){d3.selectAll("#graph *").remove()
                              drawArray1(data, xScale, yScale, cScale)}) 
}
var ButtonConsole = function(data, xScale, yScale, cScale)
{
    d3.select("#Console")
      .on("click", function(){d3.selectAll("#graph *").remove()
                              drawArray5(data, xScale, yScale, cScale)})
}
var ButtonPc = function(data, xScale, yScale, cScale)
{
    d3.select("#PC")
      .on("click", function(){d3.selectAll("#graph *").remove()
                              drawArray6(data, xScale, yScale, cScale)})
}
var ButtonPhone = function(data, xScale, yScale, cScale)
{
    d3.select("#Smartphone")
      .on("click", function(){d3.selectAll("#graph *").remove()
                              drawArray4(data, xScale, yScale, cScale)})
}
var ButtonTablet = function(data, xScale, yScale, cScale)
{
    d3.select("#Tablet")
      .on("click", function(){d3.selectAll("#graph *").remove()
                              drawArray3(data, xScale, yScale, cScale)})
}
var ButtonWeb = function(data, xScale, yScale, cScale)
{
    d3.select("#Webgames")
      .on("click", function(){d3.selectAll("#graph *").remove();
                              drawArray2(data, xScale, yScale, cScale)})
}
var drawArray1 = function(data, xScale, yScale, cScale)
{
    d3.select("#graph")
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#1f77b4")
      .attr("stroke-width", 3)
      .attr("d", d3.line()
                   .x(function(d){return xScale(d.Year)})
                   .y(function(d){return yScale(d.Handheld)}))
}

var drawArray2 = function(data, xScale, yScale, cScale)
{
    d3.select("#graph")
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#ff7f0e")
      .attr("stroke-width", 3)
      .attr("d", d3.line()
                   .x(function(d){return xScale(d.Year)})
                   .y(function(d){return yScale(d.Webgames)}))
}

var drawArray3 = function(data, xScale, yScale, cScale)
{
    d3.select("#graph")
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#2ca02c")
      .attr("stroke-width", 3)
      .attr("d", d3.line()
                   .x(function(d){return xScale(d.Year)})
                   .y(function(d){return yScale(d.TabletGames)}))
}

var drawArray4 = function(data, xScale, yScale, cScale)
{
    d3.select("#graph")
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#d62728")
      .attr("stroke-width", 3)
      .attr("d", d3.line()
                   .x(function(d){return xScale(d.Year)})
                   .y(function(d){return yScale(d.Smartphone)}))
}

var drawArray5 = function(data, xScale, yScale, cScale)
{
    d3.select("#graph")
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#9467bd")
      .attr("stroke-width", 3)
      .attr("d", d3.line()
                   .x(function(d){return xScale(d.Year)})
                   .y(function(d){return yScale(d.Console)}))
}

var drawArray6 = function(data, xScale, yScale, cScale)
{
    d3.select("#graph")
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#8c564b")
      .attr("stroke-width", 3)
      .attr("d", d3.line()
                   .x(function(d){return xScale(d.Year)})
                   .y(function(d){return yScale(d.PC)}))
}
setup(data)