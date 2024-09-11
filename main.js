// Get the "Skills" heading (h2) and the list of skills (div)
var skillsTitle = document.getElementById("skills-title");
var skillsList = document.getElementById("skills");
// Add an event listener to the "Skills" heading
skillsTitle === null || skillsTitle === void 0 ? void 0 : skillsTitle.addEventListener("click", function () {
    if (skillsList) {
        // Toggle the display of the skills list between block and none
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block"; // Show the skills
        }
        else {
            skillsList.style.display = "none"; // Hide the skills
        }
    }
});
