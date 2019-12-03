var dataPromise = d3.csv("Teens_Gaming_2008_csv.csv")

dataPromise.then(function(data)
{
    var New = data.map(newData)
    console.log(New)
    Create(New)
},
function(err)
{console.log(err)})

var svg = d3.select("svg"),
            margin = { top: 20, right: 20, bottom: 30, left: 40 },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x0 = d3.scaleBand()
            .rangeRound([0, width])
            .paddingInner(.1);

        var x1 = d3.scaleBand()
            .padding(0.05);

        var y = d3.scaleLinear()
            .rangeRound([height, 0]);

        var z = d3.scaleOrdinal()
                  .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"])
        
var newData = function(data)
{
        var object = {Plays: data.q4, Yes: data.q7a, No: data.q7b, GenderP: data.psex, Stops: data.q5d}
        return object
}
var Create = function(question)
{
Usedata = JSON.parse(question);
        var keys = Object.keys(Usedata[0]).slice(1);
       x0.domain(data.map(function (d) { return d.Question; }));
        x1.domain(keys).rangeRound([0, x0.bandwidth()]);
        y.domain([0, 14])

        g.append("g")
            .selectAll("g")
            .data(data)
            .enter().append("g")
            .attr("transform", function (d) { return "translate(" +x0(d.Question)+",0)"; })
            .selectAll("rect")
            .data(function (d) { return keys.map(function(key) { return { key: key, value: d[key] }; }); })
            .enter().append("rect")
            .attr("class", "Question")
            .attr("x", function (d) { return x1(d.key); })
            .attr("y", function (d) { return y(d.value); })
            .attr("width", x1.bandwidth())
            .attr("height", function (d) { return height - y(d.value); })
            .attr("fill", function (d) { return z(d.key); });

// Creates X Axis
        g.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x0))
// Creates Y Axis
        g.append("g")
            .attr("class", "axis")
            .call(d3.axisLeft(y).ticks(null))
            .append("text")
            .attr("x", 2)
            .attr("y", y(y.ticks().pop()) + 0.5)
            .attr("dy", "0.32em")
            .attr("fill", "#000")
            .attr("font-weight", "bold")
            .attr("text-anchor", "start")
            .text("Answers");

        var legend = g.append("g")
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .attr("text-anchor", "end")
            .selectAll("g")
            .data(keys.slice().reverse())
            .enter().append("g")
            .attr("transform", function (d, i) { return "translate(0," + i * 25 + ")"; });

        legend.append("rect")
            .attr("x", width - 19)
            .attr("width", 19)
            .attr("height", 19)
            .attr("fill", z);

        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9.5)
            .attr("dy", "0.32em")
            .text(function (d) { return d; });
}