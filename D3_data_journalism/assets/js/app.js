/* ----- Core Assignment: D3 Dabbler (Required Assignment) ----- */

// Note: Use python -m http.server to run the visualization. This will host the page at localhost:8000 in the web browser.

// Create a scatterplot between two of the data variables: 
//such as Healthcare vs. Poverty or Smokers vs. Age
//i.e., Correlations Discovered Between Health Risks and Age, Income

// Set svg vars
// Define SVG area dimensions
var svgWidth = 800;
var svgHeight = 500;
// Define the chart's margins as an object
var margin = {
    top: 40,
    right: 100,
    bottom: 100,
    left: 100
};
// Define dimensions of the chart area
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Select scatter, append SVG area to it, and set its dimensions
var svg = d3
    .select("#scatter")
    .append("svg")
    .classed("chart", true)
    .attr("width", svgWidth+50)
    .attr("height", svgHeight);

// Group charts; shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Healthcare vs. Poverty
// Pull in the data from data.csv by using the d3.csv function
d3.csv("/assets/data/data.csv").then(function(myData) {

    // number conversion
    myData.forEach(function(xdata) {
        xdata.poverty = +xdata.poverty;
        xdata.healthcare = +xdata.healthcare;

    });

    // x function
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(myData, d=>d.poverty)*0.9,
            d3.max(myData, d => d.poverty)*1.1])
        .range([0, width]);

    // y function
    var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(myData, d => d.healthcare)*1.1])
        .range([height, 0]);

    // Create and situate axes and labels to the left and bottom of the chart
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // x axis
    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .style("font-size", "16px")
        .call(bottomAxis);

    // y axis
    chartGroup.append("g")
        .style("font-size", "16px")
        .call(leftAxis);

    // Represent each state with circle elements
    chartGroup.selectAll("circle")
        .data(myData)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.poverty))
        .attr("cy", d => yLinearScale(d.healthcare))
        .attr("r", 12)
        // bubble colour & opacity level
        .attr("fill", "#89bdd3")
        .attr("opacity", ".9");

    // Include state abbreviations in the circles.
    chartGroup.selectAll("text.text-circles")
        .data(myData)
        .enter()
        .append("text")
        .classed("text-circles",true)
        .text(d => d.abbr)
        .attr("x", d => xLinearScale(d.poverty))
        .attr("y", d => yLinearScale(d.healthcare))
        .attr("dy",5)
        .attr("text-anchor","middle")
        .attr("font-size","12px")
        // text colour
        .attr("fill", "white");

    // y axis label
    chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 30 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .classed("aText", true)
        .text("Lacks Healthcare (%)");

    // x axis label
    chartGroup.append("text")
        .attr("y", height + margin.bottom/2 - 10)
        .attr("x", width / 2)
        .attr("dy", "1em")
        .classed("aText", true)
        .text("Poverty Rate (%)");

});

