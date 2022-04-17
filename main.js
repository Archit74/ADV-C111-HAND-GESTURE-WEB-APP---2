prediction=""; 
Webcam.set({
width:300,
height:300,
image_format:'png',
png_quality:95
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='js_img' src='"+data_uri+"'/>";
    });
    }
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OlDZetsak/model.json',modelloaded)
    function modelloaded(){
        console.log("modelloaded");
    }