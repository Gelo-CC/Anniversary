const noButton = document.querySelector(".no");
let yesButton = document.querySelector(".yes");
let poster = document.querySelector(".poster");
let buttons = document.querySelector(".buttons");

// Move "No" Button only when clicked, with a margin and 3D effect
function moveNoButton() {
    const margin = 278; // Set a margin of 278px (approximately 1 inch)
    const viewportWidth = window.innerWidth - noButton.offsetWidth - margin; // Subtract button width + margin from the viewport width
    const viewportHeight = window.innerHeight - noButton.offsetHeight - margin; // Subtract button height + margin from the viewport height

    // Random position but limited to viewport size
    const randomX = Math.random() * viewportWidth;
    const randomY = Math.random() * viewportHeight;

    // Apply the random position with a margin limit
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Apply 3D effect and small scaling on movement
    noButton.style.transition = 'transform 0.3s ease-in-out';  // Ensure smooth transformation
    noButton.style.transform = `scale(1.1) rotate3d(1, 1, 0, 15deg)`;
    
    // Reset transformation after animation
    setTimeout(() => {
        noButton.style.transform = `scale(1)`; // Reset scaling after animation
    }, 300);  // Slightly adjusted duration for reset after transformation

    // Make the "Yes" button grow bigger
    yesButton.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition for scaling
    yesButton.style.transform = 'scale(2)';  // Make the "Yes" button bigger when "No" is clicked
    setTimeout(() => {
        yesButton.style.transform = 'scale(1)'; // Reset size after animation
    }, 300);
}

// Function to show the contact information when 'Show Contact' is clicked
function showContact() {
    // Show the contact info section
    document.querySelector('.contact-info').style.display = 'block';
}

// Function to go back to the poster from the contact info section
function backToPoster() {
    // Hide the contact info section
    document.querySelector('.contact-info').style.display = 'none';
    // Show the poster content
    document.querySelector('.poster-content').style.display = 'block';
}

// Show Poster on "Yes" Button Click
function showPoster() {
    buttons.style.display = "none"; // Hide the buttons
    poster.style.display = "flex";  // Display the poster with flex to center content properly
    document.querySelector('.poster').style.display = 'flex';
}
