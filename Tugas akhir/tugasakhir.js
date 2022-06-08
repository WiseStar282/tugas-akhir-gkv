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
        context.drawImage(img, 0, 0, width, height);
        context.translate(0, height);
        context.scale(1, -1);
        
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
            context.font = "40px poppins";
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
            context.moveTo(80+369, 48);
            context.lineTo(580+369, 48);
            context.stroke();
            context.closePath();
            //buat bikin grafik Y
            context.beginPath();
            context.moveTo(449, 48);
            context.lineTo(449, 380);
            context.stroke();
            context.closePath();
        }
        graph();
        
/////////////////////////////////////////////////////////////////////
        //PIE CHART
        //title pie
            context.save();
            context.translate(0, height);
            context.scale(1,-1);
            context.font = "30px Arial";
            context.fillStyle = "black";
            context.fillText("Sales by Genre", 580, 270);
            context.restore();
        var data = [
            ["Action", 10,"#75ecfa"], //biru
            ["Sports", 20,"#3a80f8"], //birutua
            ["Shooter", 14,"#f7299f"], //pink
            ["Role-Playing", 19,"#f8bd3a"], //oren
            ["Platform", 13,"#f7e919"],  //kuning
            ["Misc", 8,"#4af85f"],      //hijau
            ["Racing", 15,"#e509ee"],   //ungu
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
                context.moveTo(200, 250); //nentuin centre piechart
                context.arc(200, 250, 150, beginAngle, endAngle);
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
                context.fillText(data[i][0], (width / 3)+115, (height / 4) - 53 + (i * 30));
                context.restore();
            //circle legend
                context.save();
                context.translate(0, height);
                context.scale(1,-1);
                context.beginPath();
                context.arc((width / 3)+100, (height / 4)-60  + (i * 30), 10, 0, 360);
                context.fillStyle = data[i][2];
                context.closePath();
                context.fill();
                context.restore();
            // Persentase
                context.save();
                context.translate(0, width);
                context.scale(1,-1);
                var pointX = width + (115) * Math.cos(start_angle + angles[i]/2)-810;
                var pointY = height + (115) * Math.sin(start_angle + angles[i]/2)-340;
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
            context.fillText("Top 5 Game", 210, 580);
            context.fillText("in North America", 180, 610);
                //label x
                context.font = "20px Arial";
                context.fillStyle = "black";
                context.fillText("Sales (in millions)", 800, height-50);
            //context.fillText("JP_Sales", width/4+10, height/2+35);
            //skala label x
            context.font = "20px Arial";
            context.fillStyle = "black";
            for(i=0; i<=5; i++){
                context.fillText(0+i*10,(95*i)+450,780);
            }
            context.restore();
           
        //membuat bar chart
        var data = [[23.46, 20,'GTA V'],[26.17, 20,'Tetris'],[26.93, 20,'Duck Hunt'],[32.48, 20, 'Super Mario Bros'],[41.49,20,'Wii Sports']];
        for(let i=0; i <= 9; i++){
                var x = data[i][0];
                //var centerX = (data[i][0])/width*-580; 
                var centerY = 20;
                
        //membuat bar chart
            context.save(); 
            context.beginPath();
            context.rect(450, (i*60)+65, x*10, 50);
            context.fillStyle = "#ffb043";       
            context.fill();
            context.closePath();
            context.restore();
        //memberi nama game pada bar chart
            context.save(); 
            context.translate(0, height);
            context.scale(1,-1);
            context.font = '20px Arial';
            context.fillStyle = "#000000";
            context.fillText(data[i][2] + " (" + data[i][0] + ")", centerY*23, 720-61*i);
            context.font = '15px Arial';
            context.fillStyle = "gray";
            context.fillText("By:Kelompok 5", width/20-35, height-15);
            context.restore();
        
        }

        
    };
};
canvasSketch(sketch, settings);
