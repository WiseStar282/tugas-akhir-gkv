LINE = document.getElementById('lineplot1');
var trace1 = {
    x: ['2011','2012','2013','2014','2015','2016',],
    y: [303.31,239.67,154,95,154.77,131.97, 102.82, 22.66],
    type: 'scatter', name:'NA_sales',Position:'top'
};

var trace2 = {
    x: ['2011','2012','2013','2014','2015','2016',],
    y: [176.25, 166.49,118.78,125.8,125.65,97.7,26.76],
    type: 'scatter', name:'EU_sales'
};
var trace3 = {
    x: ['2011','2012','2013','2014','2015','2016',],
    y: [59.41, 53,51.74,47.57,39.45,32.85,13.68],
    type: 'scatter',name:'JP_sales'
};
var trace4 = {
    x: ['2011','2012','2013','2014','2015','2016',],
    y: [59.72, 54.08,37.82,39.82,40.02,30.01,7.75],
    type: 'scatter',name:'Other_sales'
};
var trace5 = {
    x: ['2011','2012','2013','2014','2015','2016',],
    y: [598.77,513.33,363.53,368.09,337.04,263.56,70.91],
    type: 'scatter',name:'Global_sales'
  };
  var layout = {
    title:'Sales on 5 Year',
    font : {family:'Montserrat',size: 12}
  };
  var data = [trace1, trace2, trace3,trace4, trace5];
  
  Plotly.newPlot(LINE, data, layout);
   