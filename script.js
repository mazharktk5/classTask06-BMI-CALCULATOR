
var button = document.getElementById("btn")

function calculateBMI(){
    var weight = parseFloat(document.getElementById("weight").value)
    var height = parseFloat(document.getElementById("height").value)
    
    var bmi = weight / (height * height)
    // document.getElementById("bmi").innerHTML = "Your BMI is: " + bmi.toFixed(2)
    
    if(bmi < 18.5){
        document.getElementById("bmi-result").innerHTML = "Underweight"
    } else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("bmi-result").innerHTML = "Normal weight"
    } else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById("bmi-result").innerHTML = "Overweight"
    } else {
        document.getElementById("bmi-result").innerHTML = "Obese"
    }
    
    }
