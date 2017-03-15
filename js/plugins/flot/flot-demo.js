var d1 = [];  
for (var i = 0; i < 14; i += 0.5)  
    d1.push([i, Math.sin(i)]);  
var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];  
// a null signifies separate line segments  
var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]]; 

//参数说明：lins 表示直线，参数 steps:true 表示梯形图，bars 表示直方图，points 表示点状图

//折线图
$(function () {
    $.plot($("#flot-line-chart"), [ d1, d2, d3 ]);  
});

//柱状图
$(function(){
	$.plot($("#flot-bar-chart"), [
	    {
        	data: d1,
	        lines: { show: true, fill: true }
	    },{
	        data: d2,
	        bars: { show: true }
	    },{
	        data: d3,
	        points: { show: true }
	    }
	]);  
});

//刻度制定
$(function(){
	var vData = [[1, 103], [2, 28], [3, 135], [4, 130], [5, 145], [6, 155], [7, 155], [8, 155], [9, 155], [10, 155], [11, 155], [12, 155]];
	$.plot($("#flot-line-chart-multi"), [{ label: "", data: vData}],
		{
		    series: { lines: { show: true }, points: { show: true} },
		    xaxis: { ticks: [[1, "1月"], [3, "3月"], [5, "5月"], [7, "7月"], [9, "9月"], [11, "11月"]], min: 1, max: 12 },  //指定固定的显示内容
		    yaxis: { ticks: 5, min: 0 }  //在y轴方向显示5个刻度，此时显示内容由 flot 根据所给的数据自动判断
		}
    );  
});

//
$(function(){
      
});
