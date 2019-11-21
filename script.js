var screen = {width:1000,height:700}
var margins = {top:10,right:50,left:25,bottom:50}

var dataPromise = d3.csv("Teens_Gaming_2008_csv.csv")

dataPromise.then(function(data)
{
    console.log(data)
    
},
function(err)
{console.log("error", err)})

// Setup SVG
var svg = d3.select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Create Layers
var dataset = d3.layout.stack()(["Yes", "No", "Always", "Always", "Sometimes", "Rarely", "Never", "Positive Influence", "Negative Influence", "No Influence"])