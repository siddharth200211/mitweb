

function validateEmail(emailInput) {
    const email = emailInput.value;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const submitButton = document.getElementById('submitButton');

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email. Please enter a valid email address.';
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'red';
    } else {
        document.getElementById('emailError').textContent = '';
        submitButton.disabled = false;
        submitButton.style.backgroundColor = 'blue'; // Reset to the original color
    }
}

function validatePhoneNumber(phoneInput) {
    const phoneNumber = phoneInput.value;
    const phoneRegex = /^\d{10}$/;
    const submitButton = document.getElementById('submitButton');

    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number. Please enter a 10-digit number.';
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'red';
    } else {
        document.getElementById('phoneError').textContent = '';
        submitButton.disabled = false;
        submitButton.style.backgroundColor = 'blue';
    }
}

function validateAge(ageInput) {
    const age = parseInt(ageInput.value);
    const submitButton = document.getElementById('submitButton');

    if (isNaN(age) || age < 10 || age > 100) {
        document.getElementById('ageError').textContent = 'Age must be between 10 and 100.';
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'red';
    } else {
        document.getElementById('ageError').textContent = '';
        submitButton.disabled = false;
        submitButton.style.backgroundColor = 'blue';
    }
}


// Function to handle form submission
document.getElementById('form').addEventListener('submit', function (event) {
    // If there are validation errors, prevent the form submission
    if (document.getElementById('submitButton').disabled) {
        event.preventDefault();
        alert('Please fix the form errors before submitting.');
    }
});