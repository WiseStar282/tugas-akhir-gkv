JSC.Chart('chartDiv', {
	type: 'line',
	legend_visible: true,
	xAxis: { 
		crosshair_enabled: true, 
		scale: { type: 'year' } 
	  }, 
	  yAxis: { 
		crosshair_enabled: true
	  }, 
	  defaultSeries: { 
		firstPoint_label_text: '<b>%seriesName</b>', 
		defaultPoint_marker: { 
		  type: 'circle', 
		  size: 10, 
		  fill: 'currentColor', 
		  outline: { width: 2, color: 'currentColor' } 
		} 
	  }, 
	  title_label_text: 'Data Penjualan', 
	series: [
		{
			name: 'NA_Sales',
			points: [
				['1981', 33.4],
				['1983', 7.76],
				['1985', 33.73],
				['1987', 8.46],
				['1989', 45.15],
				['1991', 12.76],
				['1993', 15.12],
				['1995', 24.82],
				['1997', 94.75],
			]
		}, {
			name: 'JP_Sales',
			points: [
				['1981', 10],
				['1983', 20],
				['1985', 30],
				['1987', 33],
				['1989', 35],
				['1991', 30],
				['1993', 10],
				['1995', 8],
				['1997', 45],
			]
		}, {
			name: 'EU_Sales',
			points: [
				['1981', 20],
				['1983', 66],
				['1985',56],
				['1987', 40],
				['1989', 10],
				['1991', 12],
				['1993', 15],
				['1995', 24],
				['1997', 94],
			]
		}
	]
});


