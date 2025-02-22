document.addEventListener("DOMContentLoaded", function () {
    function showSection(sectionId) {
        const sections = ["feeling-good", "heavy-mind", "advice-section"];

        // Hide all sections
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) section.style.display = "none";
        });

        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }

        // Clear advice section when switching main sections
        if (sectionId !== "advice-section") {
            document.getElementById("advice-section").innerHTML = "";
            document.getElementById("advice-section").style.display = "none";
        }
    }

    function showAdvice(emotion) {
        const adviceSection = document.getElementById("advice-section");

        if (!adviceSection) {
            console.error("Error: advice-section div not found in HTML.");
            return;
        }

        const adviceData = {
            anxiety: ["➡ Take deep breaths", "➡ Meditate for 2-3 minutes", "➡ Go for a walk", "➡ Try doodling or coloring"],
            stress: ["➡ Listen to calming music", "➡ Take a warm bath", "➡ Drink a glass of water", "➡ Try a creative activity (writing, crafts, art)"],
            overthinking: ["➡ Pause and breathe deeply", "➡ Engage in a hobby", "➡ Limit social media", "➡ Do easy mental math"],
            sadness: ["➡ Talk to a friend", "➡ Watch a funny movie", "➡ Step outside for fresh air"],
            frustration: ["➡ Try journaling", "➡ Take a 5-minute break", "➡ Stretch your body", "➡ Get enough sleep"],
            anger: ["➡ Count to 10", "➡ Practice slow breathing", "➡ Step away from the situation"]
        };

        // Get advice based on the selected emotion
        const advices = adviceData[emotion] || ["➡ No advice available"];

        // Update the Advice Section content
        adviceSection.innerHTML = `
            <h2>Advice for ${emotion.charAt(0).toUpperCase() + emotion.slice(1)}</h2>
            <ul class="advice-list">
                ${advices.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;

        // Show the advice section
        showSection("advice-section");
    }

    // Make functions globally accessible
    window.showSection = showSection;
    window.showAdvice = showAdvice;
});
