// Get the "Skills" heading (h2) and the list of skills (div)
const skillsTitle = document.getElementById("skills-title");
const skillsList = document.getElementById("skills");

// Add an event listener to the "Skills" heading
skillsTitle?.addEventListener("click", () => {
  if (skillsList) {
    // Toggle the display of the skills list between block and none
    if (skillsList.style.display === "none") {
      skillsList.style.display = "block"; // Show the skills
    } else {
      skillsList.style.display = "none";  // Hide the skills
    }
  }
});
