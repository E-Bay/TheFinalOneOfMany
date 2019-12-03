var dataPromise = d3.csv("Teens_Gaming_2008_csv.csv")

dataPromise.then(function(data)
{
    var New = data.map(newData)
    console.log(New)
    CreateChart(New)
},
function(err)
{console.log(err)})

var newData = function(data)
{
        var object = [{Question: "Gender", Answer: data.psex}, {Question: "4", Answer: data.q4}, {Question: "7a", Answer: data.q7a}, {Question: "7b", Answer: data.q7b}]
        return object
}
var CreateChart = function(data)
{
var svg = d3.select("svg")
var margin = { top: 20, right: 20, bottom: 30, left: 40 }
var width = +svg.attr("width") - margin.left - margin.right
var height = +svg.attr("height") - margin.top - margin.bottom

var x = d3.scaleBand()
		.range([margin.left, width - margin.right])
		.padding(0.1)

var y = d3.scaleLinear()
		.rangeRound([height - margin.bottom, margin.top])

var xAxis = svg.append("g")
		//.attr("transform", "translate(0,{"(height - margin.bottom)"})")
		.attr("class", "x-axis")

var yAxis = svg.append("g")
		//.attr("transform", "translate("(margin.left)",0)")
		.attr("class", "y-axis")

var z = d3.scaleOrdinal()
          .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"])

y.domain([0, 100])
    
svg.select(".y-axis")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .on("click", function(d) {return Yes})
    
    
}


