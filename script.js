
var button = document.getElementById("btn")

function calculateBMI(){
    
    var weight = parseFloat(document.getElementById("weight").value + "kg")
    var height = parseFloat(document.getElementById("height").value)

    

    // calculate bmi using the formula weight / (height * height)
    var bmi = weight / (height * height)

//    check if the inputs are empty
    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers.")
        return;
    }

// check if the inputs are negative    

if (weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height.")
    return;
    } else {
        document.getElementById("bmi").innerHTML = "Your BMI is: " + bmi.toFixed(2)
    }

    // if not then check for bmi

    // agr bmi 18.5 se km ho then "bmi-result ka innerhtml 'underweight set karo"
     if(bmi < 18.5){
        document.getElementById("bmi-result").innerHTML = "Underweight"

        // agr bmi 18.5 se zyada ho ya 24.9 se km ho then "bmi-result ka innerhtml 'Normal' set karo"
    } else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("bmi-result").innerHTML = "Normal weight"

        // agr bmi 25 se zyada ho ya 29.9 se km ho then "bmi-result ka innerhtml 'overwieght' set karo"
    } else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById("bmi-result").innerHTML = "Overweight"

         // agr bmi 30 se zyada ho then "bmi-result ka innerhtml 'obese' set karo"
    } else if( bmi >= 30){
        document.getElementById("bmi-result").innerHTML = "Obese"
        
    }
    // else if bmi is not in range then "bmi-result ka innerhtml 'Invalid BMI' set karo"
    else{
        document.getElementById("bmi-result").innerHTML = "Invalid BMI"
        
    }

    // empty the input field after click calculate button
    document.getElementById("weight").value = ""
    document.getElementById("height").value = ""

    
    }
