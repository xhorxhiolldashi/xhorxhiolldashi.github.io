document.getElementById("checkForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function

});

const currDate = new Date();





function validateDate(input) {
    let date = new Date(input);

    if(isNaN(date)){
        return "Invalid date format.";
    }

    if(date <= currDate){
        return "Date should be in the future.";
    }

    return ""; 
}


function validateForm() {
    
    const dateInput = document.getElementById("date");
    
    //const frequencyInput = document.getElementById("frequency");

    const dateError = document.getElementById("dateError");
    
   
    // Clear previous error messages
    
    dateError.textContent = "";
    

    // Run validation checks
    const dateValidationMessage = validateDate(dateInput.value.trim()); 

    // Display errors if any
    let isValid = true;
    if(dateValidationMessage){
        dateError.textContent = dateValidationMessage;
        isValid = false;
    }



    

    
    
   

 

   



    // If all are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
        submitRequest();
    } else {
        console.log("There may be an issue.");
    }
}