
var button = document.getElementById("btn")

function calculateBMI(){
    var weight = parseFloat(document.getElementById("weight").value)
    var height = parseFloat(document.getElementById("height").value)
    
    var bmi = weight / (height * height)
    document.getElementById("bmi").innerHTML = "Your BMI is: " + bmi.toFixed(2)
    
}
