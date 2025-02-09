function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jXn66DtcK/model.json', modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
       console.log(results);
       random_number_r = Math.floor(Math.random () * 255) + 1;
       random_number_g = Math.floor(Math.random () * 255) + 1;
       random_number_b = Math.floor(Math.random () * 255) + 1;

       document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
       document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
       document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
       document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
       
       img = document.getElementById('Bird')
       img1 = document.getElementById('Cat')
       img2 = document.getElementById('Dog')
       img3 = document.getElementById('Cow')

       if(results[0].label =="Chirp") {
        img.src = 'Bird.png';
        img1.src = '';
        img2.src = '';
        img3.src = '';
       } else if (results[0].label =="Meow") {
        img.src = '';
        img1.src = 'Cat.png';
        img2.src = '';
        img3.src = '';
       } else if (results[0].label =="Bark") {
        img.src = '';
        img1.src = '';
        img2.src = 'Dog.png';
        img3.src = '';
    } else if (results[0].label =="Moo") {
        img.src = '';
        img1.src = '';
        img2.src = '';
        img3.src = 'Cow.png';
    }else{
        img.src = '';
        img1.src = '';
        img2.src = '';
        img3.src = '';
    }                                          
} }