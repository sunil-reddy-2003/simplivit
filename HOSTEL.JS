document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve the values of the form fields
        const blockName = document.querySelector("#blockName").value.trim();
        const roomNumber = document.querySelector("#roomNumber").value.trim();
        const regNumber = document.querySelector("#regNumber").value.trim();

        // Construct the message to display
        const message = `Block Name: ${blockName}\nRoom Number: ${roomNumber}\nRegistration Number: ${regNumber}`;

        // Display the entered message
        alert("Entered Information:\n" + message);

        // Optional: You can reset the form after displaying the message
        form.reset();
    });

    // Additional features can be added here
    // For example, you can add event listeners to elements to handle clicks, show/hide elements, etc.
});


// JavaScript for handling complaint submission
document.addEventListener('DOMContentLoaded', function () {
    const complaintForm = document.querySelector('#complaint-form');

    complaintForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const complaintTextArea = document.querySelector('#complaint');
        const complaintText = complaintTextArea.value.trim();

        if (complaintText !== '') {
            // Here you can add further processing, such as sending the complaint to a server, displaying a confirmation message, etc.
            console.log('Complaint submitted:', complaintText);
            alert('Your complaint has been submitted. Thank you!');
            complaintTextArea.value = ''; // Clear the text area after submission
        } else {
            alert('Please enter your complaint before submitting.');
        }
    });
});

