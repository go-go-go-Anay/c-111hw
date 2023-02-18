prediction_1 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="captured_image">';
    });
}

console.log("ml5 version is ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XopITeScQ/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model is loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is "+prediction_1;

    var utterthis = new SpeechSynthesisUtterance(speak_data_1);

    synth.speak(utterthis);
}