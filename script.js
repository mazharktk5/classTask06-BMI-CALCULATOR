
var button = document.getElementById("btn")

function calculateBMI(){
    
    var weight = parseFloat(document.getElementById("weight").value)
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

   

   
     if(bmi < 18.5){
        document.getElementById("bmi-result").innerHTML = " Catogary : Underweight"

       
    } else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("bmi-result").innerHTML = " Catogary :  Normal weight"

        
    } else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById("bmi-result").innerHTML = "Catogary : Overweight"

        
    } else if( bmi >= 30){
        document.getElementById("bmi-result").innerHTML = "Catogary : Obese"
        
    }
   
    else{
        document.getElementById("bmi-result").innerHTML = "Invalid BMI"
        
    }

    // empty the input field after click calculate button
    document.getElementById("weight").value = ""
    document.getElementById("height").value = ""

    
    }
