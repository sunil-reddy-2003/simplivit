document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taxiForm');
    const detailsSection = document.getElementById('detailsSection');
    const dragToDisplay = document.getElementById('dragToDisplay');
    const detailsContent = document.getElementById('detailsContent');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const date = form.elements['date'].value;
        const time = form.elements['time'].value;
        const fromPlace = form.elements['fromPlace'].value;
        const toPlace = form.elements['toPlace'].value;
        const numMembers = parseInt(form.elements['numMembers'].value); // Convert to integer

        // Check if number of members exceeds 4
        if (numMembers > 4) {
            alert('Number of members cannot exceed 4.');
            return; // Stop further execution
        }

        // Fetch cab details and calculate price
        const { driverName, driverContact, price } = getCabDetails(fromPlace, toPlace, numMembers);

        // Construct details message
        const detailsMessage = `
            <h2>Booking Details:</h2>
            <p>Date: ${date}</p>
            <p>Time: ${time}</p>
            <p>From: ${fromPlace}</p>
            <p>To: ${toPlace}</p>
            <p>Number of Members: ${numMembers}</p>
            <h2>Cab Details:</h2>
            <p>Driver Name: ${driverName}</p>
            <p>Driver Contact: ${driverContact}</p>
            <p>Price: $${price.toFixed(2)}</p>
        `;

        // Display details
        detailsContent.innerHTML = detailsMessage;
        detailsSection.style.display = 'block';
    });

    // Drag event handler
    let isDragging = false;
    dragToDisplay.addEventListener('mousedown', function(event) {
        isDragging = true;
    });

    document.addEventListener('mouseup', function(event) {
        isDragging = false;
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            const y = event.clientY;
            const detailsRect = detailsSection.getBoundingClientRect();
            const maxHeight = window.innerHeight - detailsRect.height;
            detailsSection.style.top = Math.min(maxHeight, Math.max(0, y - detailsRect.height / 2)) + 'px';
        }
    });
});

// Function to fetch cab details and calculate price (replace with your actual implementation)
function getCabDetails(fromPlace, toPlace, numMembers) {
    // Example hardcoded data, replace with your actual implementation
    const driverName = "John Doe";
    const driverContact = "123-456-7890";
    const basePricePerMile = 2; // Example base price per mile
    const distance = calculateDistance(fromPlace, toPlace); // Example function to calculate distance
    const price = basePricePerMile * distance * numMembers;
    
    return { driverName, driverContact, price };
}

// Example function to calculate distance (replace with your actual implementation)
function calculateDistance(fromPlace, toPlace) {
    // Example hardcoded distance, replace with your actual implementation
    return 10; // Example distance in miles
}


function closeBookingDetails() {
    const detailsSection = document.getElementById('detailsSection');
    detailsSection.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    // Existing code...

    // Add event listener to the Close button
    const closeDetailsBtn = document.getElementById('closeDetailsBtn');
    closeDetailsBtn.addEventListener('click', closeBookingDetails);
});
