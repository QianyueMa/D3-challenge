# D3-challenge - Data Journalism and D3

To analyze the current trends shaping people's lives as well as to create charts, graphs, and interactive elements to help readers of a major metro paper to better understand the findings.

![Newsroom](https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif)

## Background

The editor wants to run a series of feature stories about the health risks facing particular demographics. Help her figure out her first story idea by sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.
The data set included with the assignment is based on [2014 ACS 1-year estimates](https://data.census.gov/cedsci/table?q=United%20States&tid=ACSDP1Y2014.DP05&hidePreview=false) (or [here](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml)), or a different data set is fine, too. This current dataset includes data on rates of income, obesity, poverty, etc. by state (MOE stands for "margin of error").

- - -

## Tasks

### Part 1 - Core Assignment: D3 Dabbler (Required Assignment)

To create a scatterplot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.

Using the D3 techniques, create a scatterplot that represents each state with circle elements. Code this graphic in the `app.js` file. Pull in the data from data.csv by using the `d3.csv` function.

![4-scatter](Images/4-scatter.jpg)

* Include state abbreviations in the circles.

* Create and situate your axes and labels to the left and bottom of the chart.

* Note: Use `python -m http.server` to run the visualization! This will host the page at `localhost:8000` in the web browser.


### Part 2 - Bonus

Impress the Boss -- Why make a static graphic when D3 lets you interact with your data?

#### 1. More Data, More Dynamics

Include more demographics and more risk factors. Place additional labels in the scatterplot and give them click events so that the potential users can decide which data to display. Animate the transitions for the circles' locations as well as the range of your axes. Do this for two risk factors for each axis. Or, for an extreme challenge, create three for each axis.

* Hint: Try binding all of the CSV data to the circles. This will easily determine their x or y values when clicking the labels.

![7-animated-scatter](Images/7-animated-scatter.gif)

#### 2. Incorporate d3-tip

While the ticks on the axes allow us to infer approximate values for each circle, it's impossible to determine the true value without adding another layer of data. Enter tooltips: developers can implement these in their D3 graphics to reveal a specific element's data when the user hovers their cursor over the element. Add tooltips to the circles and display each tooltip with the data that the user has selected. Use the `d3-tip.js` plugin developed by [Justin Palmer](https://github.com/Caged) — this plugin is already included in the assignment directory.

* Check out [David Gotz's example](https://bl.ocks.org/davegotz/bd54b56723c154d25eedde6504d30ad7) to see to implement tooltips with d3-tip.

![8-tooltip](Images/8-tooltip.gif)

