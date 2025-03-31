document.getElementById("financeForm").addEventListener("submit", function (e) {
    let num = document.getElementById("amt").value;
    num = round(num);
    e.preventDefault(); // Stop the form from submitting automatically
    validateForm(); // Call the validation function

});

function round(num){
    num = Number(num);
    num = num.toFixed(2);

}

function validateName(name) {

    if (!name) {
        return "Please enter name.";
    }


    if (name.length < 3) {
        return "Too few characters.";
    }

    return ""; // No errors => Return empty string.
}

function validateAmount(amount) {

    if(isNaN(amount)){
        return "Amount must be a number.";
    }

    // Ensure it's greater than zero
    if(amount <= 0){
        return "Amount must be greater than zero.";
    }
    
    return ""; // no errors
    
}

function validateDropdown() {
    let e = document.getElementById("freqDropdown");
    let value = e.value;

    if(value == "temp"){
        return "Please select an option from the dropdown.";
    }


    return ""; // No errors => Return empty string.
    
}

function validateForm() {
    const nameInput = document.getElementById("name");
    const amountInput = document.getElementById("amt");
    //const frequencyInput = document.getElementById("frequency");

    const nameError = document.getElementById("nameError");
    const amountError = document.getElementById("amountError");
    const frequencyError = document.getElementById("frequencyError");

    // Clear previous error messages
    nameError.textContent = "";
    amountError.textContent = "";
    frequencyError.textContent = "";

    // Run validation checks
    const nameValidationMessage = validateName(nameInput.value.trim());

    // Display errors if any
    let isValid = true;
    if (nameValidationMessage) {
        nameError.textContent = nameValidationMessage;
        isValid = false;
    }

    const amountValidationMessage = validateAmount(amountInput.value);
    let isValid2 = true;
    if (amountValidationMessage) {
        amountError.textContent = amountValidationMessage;
        isValid2 = false;
    }

    // error handling for frequency will go here

    const dropdownValidationMessage = validateDropdown();
    let isValid3 = true;
    if(dropdownValidationMessage){
        frequencyError.textContent = dropdownValidationMessage;
        isValid3 = false;
    }


    // If all are valid, submit the form
    if (isValid == true && isValid2 == true && isValid3 == true) {
        console.log("Form is valid! Submitting...");
        //submitRequest();
    } else {
        console.log("There may be an issue.");
    }
}