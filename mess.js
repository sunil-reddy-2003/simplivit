document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for complaint submission
    const complaintForm = document.querySelector(".complaint-box form");
    complaintForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const complaintTextarea = document.getElementById("complaint");
        const complaintText = complaintTextarea.value.trim();
        
        if (validateComplaint(complaintText)) {
            // Save complaint to local storage
            saveComplaint(complaintText);

            alert("Complaint submitted: " + complaintText);
            complaintTextarea.value = ""; // Clear the textarea after submission
        } else {
            alert("Please enter a valid complaint before submitting.");
        }
    });

    // Function to validate the complaint
    function validateComplaint(complaint) {
        // Add your validation criteria here
        if (complaint.length < 10) {
            return false; // Complaint should be at least 10 characters long
        }
        return true;
    }

    // Function to save complaint to local storage
    function saveComplaint(complaint) {
        let complaints = localStorage.getItem("complaints");
        if (!complaints) {
            complaints = [];
        } else {
            complaints = JSON.parse(complaints);
        }
        complaints.push(complaint);
        localStorage.setItem("complaints", JSON.stringify(complaints));
    }

    // Function to display remaining characters in the complaint textarea
    const maxChars = 200; // Maximum characters allowed
    const charCounter = document.querySelector(".char-counter");
    const complaintTextarea = document.getElementById("complaint");
    complaintTextarea.addEventListener("input", function() {
        const remainingChars = maxChars - this.value.length;
        charCounter.textContent = remainingChars + " characters remaining";
    });

    // Function to scroll to top of the page
    const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Show/hide complaint form
    const toggleFormBtn = document.querySelector(".toggle-form-btn");
    const complaintBox = document.querySelector(".complaint-box");
    toggleFormBtn.addEventListener("click", function() {
        complaintBox.classList.toggle("hidden");
    });

});



