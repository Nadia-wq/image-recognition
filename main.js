Webcam.set({
    width:350, height:300, image_format:'png', png_quality: 90
})
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById('results').innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7G5Ifj5SZ/model.json',modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){console.error(error)}
else{
    console.log(results);
    document.getElementById("result_object").innerHTML=results[0].label;
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    

}
}