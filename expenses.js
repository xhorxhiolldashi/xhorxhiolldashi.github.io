document.getElementById("expenseForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function

});

const currDate = new Date();



function validatePlace(place) {

    if (!place) {
        return "Please enter place name.";
    }


    if (place.length < 5) {
        return "Too few characters.";
    }

    return ""; // No errors => Return empty string.
}

function validateDate(input) {
    let date = new Date(input);

    if(isNaN(date)){
        return "Invalid date format.";
    }

    if(date > currDate){
        return "Date can't be in the future.";
    }

    return ""; 
}



function validateAmount(amount) {

    if(isNaN(amount)){
        return "Amount must be a number.";
    }

    // Ensure it's greater than zero
    if(amount <= 0){
        return "Amount must be greater than zero.";
    }

    if(amount >= 50000){
        return "Amount can't exceed 50,000."
    }
    
    return ""; // no errors
    
}



function validateDropdown() {
    let e = document.getElementById("choice");
    let value = e.value;

    if(value == "temp"){
        return "Please select an option from the dropdown.";
    }


    return ""; // No errors => Return empty string.
    
}

function validateForm() {
    const placeInput = document.getElementById("place");
    const dateInput = document.getElementById("date");
    const amountInput = document.getElementById("amt");
    
    const dropdownInput = document.getElementById("mode");
    //const frequencyInput = document.getElementById("frequency");

    const placeError = document.getElementById("placeError");
    const dateError = document.getElementById("dateError");
    const amountError = document.getElementById("amountError");
    
    const dropdownError = document.getElementById("dropdownError");
    // Clear previous error messages
    placeError.textContent = "";
    dateError.textContent = "";
    
    amountError.textContent = "";
    
    dropdownError.textContent = "";

    // Run validation checks
    const placeValidationMessage = validatePlace(placeInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (placeValidationMessage) {
        placeError.textContent = placeValidationMessage;
        isValid = false;
    }



    const amountValidationMessage = validateAmount(amountInput.value);

    if (amountValidationMessage) {
        amountError.textContent = amountValidationMessage;
        isValid = false;
    }

  

    const dropdownValidationMessage = validateDropdown();
    
    if(dropdownValidationMessage){
        dropdownError.textContent = dropdownValidationMessage;
        isValid = false;
    }

    
    const dateValidationMessage = validateDate(dateInput.value.trim()); 

    if(dateValidationMessage){
        dateError.textContent = dateValidationMessage;
        isValid = false;
    }

    // If all are valid, submit the form
    if (isValid) {
        console.log("Form is valid! Submitting...");
        //submitRequest();
    } else {
        console.log("There may be an issue.");
    }
}