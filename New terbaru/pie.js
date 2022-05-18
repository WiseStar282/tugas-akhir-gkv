//data pada plot untuk absis-x dan ordinat-y
PIE1 =  document.getElementById('pieplot1');
PIE2 =  document.getElementById('pieplot2');
PIE = [PIE1,PIE2]
var datapie1 = [{
    labels: ['action','sports','shooter','role-playing','platform','misc','racing','fighting','simulation','other'],
    values: [20, 14.1, 7.9, 9, 5.3, 10.5, 7.5, 5.1, 5.2, 15.4], //ubah jadi valuenya, jgn persentase
    textposition: 'outside',
    type:'pie',
    hole: .5
}];
var datapie2 = [{
    labels: ['PS2', 'X360', 'PS3', 'Wii', 'DS', 'PS', 'GBA', 'PSP', 'PS4', 'others'],
    values: [13, 7.6, 8, 8, 13, 7.2, 5, 7.3, 2, 28.8], //ubah jadi valuenya, jgn persentase
    textposition: 'outside',
    type:'pie',
    hole: .5
}];

/////////////////////////////////////
var layoutpie1 = {
    title: 'Global Sales by ',
    font : {family:'Montserrat',size: 10}, 
    font : {size: 10},  
    annotations: [{font: {family: 'Montserrat',size: 15},showarrow:false,
        text: 'Genre',x: 0.5,y: 0.5,showlegend: true,} 
    ]
};
var layoutpie2 = {
    title: 'Global Sales by',
    font : {family:'Montserrat',size: 10}, 
    font : {size: 10},  
    annotations: [{font: {family: 'Montserrat',size: 15},showarrow:false,
        text: 'Platform',x: 0.5,y: 0.5,showlegend: true,} 
    ]
  

};

///////////////////////////////////////
var config = { responsive: true };
Plotly.newPlot(PIE1, datapie1, layoutpie1);
Plotly.newPlot(PIE2, datapie2, layoutpie2);

