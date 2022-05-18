
//elemen div dengan id test, container elemen html
BAR1 = document.getElementById('barplot1');
BAR2 = document.getElementById('barplot2');
BAR3 = document.getElementById('barplot3');
//data pada plot untuk absis-x dan ordinat-y
var databar1 = [{
    x: [10, 7, 6, 5,5],
    y: ['Pokemon', 'Pokemon2', 'Super Mario', 'New SM','Pokemon diamon'],
    marker:{
        color: '#fa72c3'
    },
    orientation: 'h',type: 'bar',name:'JP_sales', showlegend:true
}];
var databar2 = [{
    x: [23, 27, 28, 33,42],
    y: ['GTA', 'Tetris', 'Duck Hunt', 'SM','Wii sport'],
    marker:{
        color: '#feb104'
    },
    orientation: 'h',type: 'bar',name:'NA_sales', showlegend:true
}];
var databar3 = [{
    x: [11, 14, 15, 24, 30],
    y: ['COD', 'FIFA 15', 'Mario kart', 'GTA V', 'Wi sports'],
    marker:{
        color: '#1cdbe0'
    },
    type: 'bar', orientation: 'h', name:'Europe_sales',showlegend:true
}];
/////////////////////////////////////
var layoutbar1 = {
    title: 'Top 5 game on japan',
    font : {family:'Montserrat',size: 10}, 
   
};
var layoutbar2 = {
    title: 'Top 5 game on North America',x:1,y:9,
    font : {family:'Montserrat',size: 10}, 

};
var layoutbar3 = {
    title: 'Top 5 game on Europe',
    font : {family:'Montserrat',size: 10}, 
   
};
///////////////////////////////////////////
var config = { responsive: true };

Plotly.newPlot(BAR1, databar1, layoutbar1, config);
Plotly.newPlot(BAR2, databar2, layoutbar2, config);
Plotly.newPlot(BAR3, databar3, layoutbar3, config);
