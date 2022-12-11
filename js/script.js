function validateForm() {
    // Get the values of all form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate that all fields have been filled out
    if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields before submitting the form.');
    return false;
    }

    // If all fields are valid, return true to allow the form to be submitted
    return true;
}


function showHideInput(type) {
if (type === 'hiring') {
    // Show the hourly rate input field
    document.getElementById('hourly-rate-input').style.display = 'block';
} else {
    // Hide the hourly rate input field
    document.getElementById('hourly-rate-input').style.display = 'none';
}
}

