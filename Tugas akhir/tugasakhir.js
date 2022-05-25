const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1000, 800 ] //ukuran canvas
};
const sketch = () => {
    return ({ context, width, height }) => {
       //ngasih foto sebagai bg
        img = new Image();
        img.src = 'bekron.png';
        context.fillStyle = 'white';
        //context.fillRect(0, 0, width, height);
        context.drawImage(img, 0, 0, width, height);
        context.translate(0, height);
        context.scale(1, -1);
        
        
        //context.save();
        //context.translate(0, height);
        //context.scale(1, -1); 
            //img.onload = () => context.drawImage(img, 0,0,width,height);
        //context.restore(); 
    
            //garis bingkai
            context.beginPath();
            context.strokeStyle = "#c2c2c2";
            context.lineWidth = 3;
            context.strokeRect(10,10, width-20, height-20);
            context.closePath();
            //memberi judul dataset
            context.save();
            context.translate(0, height);
            context.scale(1, -1); 
            context.font = "40px Courier New";
            context.textAlign = "center";
            context.fillStyle = "black";
            context.fillText("Video Game Sales",width/2, height/15);
            context.restore(); 
        //Membuat Grid bar chart
        function graph(){
            context.strokeStyle = 'Black';
            context.lineWidth = 2;
            //Buat bikin grafik X
            context.beginPath();
            context.moveTo(48, 48);
            context.lineTo(650, 48);
            context.stroke();
            context.closePath();
            //buat bikin grafik Y
            context.beginPath();
            context.moveTo(48, 48);
            context.lineTo(48, 400);
            context.stroke();
            context.closePath();
        }
        function graphLine(){
            //vertical
            for(var i = 1; i < 6; i++){
                context.strokeStyle = 'gray';
                context.lineWidth = 1;
                context.beginPath();
                context.moveTo(50, 50+(i*65));
                context.lineTo(650, 50+(i*65));
                context.stroke();
                context.closePath();
            }
            //horizontal
            for(var i = 1; i < 7; i++){
                context.strokeStyle = 'gray';
                context.lineWidth = 1;
                context.beginPath();
                context.moveTo(50+(i*99), 49);
                context.lineTo(50+(i*99), 400);
                context.stroke();
                context.closePath();
            }
        }   
        //graphLine();
        //graph();
/////////////////////////////////////////////////////////////////////
        //PIE CHART
        //title pie
            context.save();
            context.translate(0, height);
            context.scale(1,-1);
            context.font = "30px Arial";
            context.fillStyle = "black";
            context.fillText("Sales by Genre", width-400, height-600);
            context.restore();
        var data = [
            ["Action", 10,"#75ecfa"], //biru
            ["Sports", 45,"#3a80f8"], //birutua
            ["Shooter", 8,"#f7299f"], //pink
            ["Role-Playing", 19,"#f8bd3a"], //oren
            ["Platform", 12,"#f7e919"],  //kuning
            ["Misc", 8,"#4af85f"],      //hijau
            ["Racing", 11,"#e509ee"],   //ungu
            ["Fighting", 10,"#fa9e72"], //peach
            ["Simulation", 20,"#f74524"],//red
          ];
          //variabel yang dibutuhkan
          var start_angle = 0;
          var beginAngle = 0;
          var endAngle = 0;
          var angles = [];
          var values = [];
          var sum = 0;
          // Menghitung total semua data
          for (var i = 0; i < data.length; i++) {
            sum +=  data[i][1];
          }
          for (var i = 0; i < data.length; i++) {
            values[i] = data[i][1] / sum;
          }
          // Menghitung angle tiap genre
          for(var i = 0; i < data.length; i++) {
            angles[i] = Math.PI * 2 * values[i];
          }
          //membuat pie chart
          for(var i = 0; i < data.length; i++){
                context.save();
                beginAngle = endAngle;
                endAngle += angles[i];
                context.translate(0, height);
                context.scale(1,-1);
                context.beginPath();
                // context.strokeStyle = 'black';
                // context.lineWidth = 0;
                context.moveTo(width / 6, height -590);
                context.arc(width / 6, height-600 , 125, beginAngle, endAngle);
                context.fillStyle = data[i][2];
                context.closePath();
                //context.stroke();
                context.fill();
                context.restore();
          }
          for(var i = 0; i < data.length; i++) {
            // Legend
            //text legend
                context.save();
                context.translate(0, height);
                context.scale(1,-1);
                context.font = "15px Arial";
                context.fillStyle = "black";
                context.fillText(data[i][0], (width / 3)+20, (height / 4) - 100 + (i * 31));
                context.restore();
            //circle legend
                context.save();
                context.translate(0, height);
                context.scale(1,-1);
                context.beginPath();
                context.arc((width / 3), (height / 8)  + (i * 30), 10, 0, 360);
                context.fillStyle = data[i][2];
                context.closePath();
                context.fill();
                context.restore();
            // Persentase
                context.save();
                context.translate(0, width);
                context.scale(1,-1);
                var pointX = width + (100-5) * Math.cos(start_angle + angles[i]/2)-840;
                var pointY = height + (100-10) * Math.sin(start_angle + angles[i]/2)-400;
                var Ttext = Math.round(100 * values[i]);
                context.fillStyle = "black";
                context.font = "15px Arial";
                context.fillText(Ttext+"%", pointX,pointY);
                context.restore();
                start_angle += angles[i];
          }
/////////////////////////////////////////////////////////////////////////////
        //BAR CHART
        //Judul chart, label x
            context.save();
            context.translate(0, height);
            context.scale(1, -1); 
            //judul chart
            context.font = "30px Arial";
            context.fillStyle = "black";
            context.fillText("Top 5 Game in Japan", width-400, height-320);
                //label x
                context.font = "25px Arial";
                context.fillStyle = "black";
                context.fillText("Sales(in Millions)", width/4+20, height-55);
            //context.fillText("JP_Sales", width/4+10, height/2+35);
            //skala label x
            context.font = "20px Arial";
            context.fillStyle = "black";
            for(i=0; i<=5; i++){
                context.fillText(0+i,(95*i)+60,780);
            }
            context.restore();
           
        //membuat bar chart
        var data = [[100,20,'Pokemon'],[200,20,'Pokemon Diamond'],[300,20,'Super Mario'],[400,20, 'Pepsimen'],[500,20,'Basara']];
        for(let i=0; i <= 9; i++){
                var x = data[i][0];
                var centerX = (data[i][0])/width*-580; 
                var centerY = 20;
                
        //membuat bar chart
            context.save(); 
            context.beginPath();
            context.rect(48, (i*60)+65, x, 50);
            context.fillStyle = "#ffb043";       
            context.fill();
            context.closePath();
            context.restore();
        //memberi nama bar chart
            context.save(); 
            context.translate(0, height);
            context.scale(1,-1);
            context.font = '20px Arial';
            context.fillStyle = "#000000";
            context.fillText(data[i][2], centerY+40,centerX+770);
            context.font = '15px Arial';
            context.fillStyle = "gray";
            context.fillText("By:Kelompok 5", width/2+380, height-15);
            context.restore();
        
        }
        
        
    };
};
canvasSketch(sketch, settings);
