document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Validation
    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validate Name
        const name = document.getElementById("name");
        if (name.value.trim() === "") {
            name.classList.add("is-invalid");
            valid = false;
        } else {
            name.classList.remove("is-invalid");
        }

        // Validate Email
        const email = document.getElementById("email");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add("is-invalid");
            valid = false;
        } else {
            email.classList.remove("is-invalid");
        }

        // Validate Team Name
        const team = document.getElementById("team");
        if (team.value.trim() === "") {
            team.classList.add("is-invalid");
            valid = false;
        } else {
            team.classList.remove("is-invalid");
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    // Dynamic Announcements
    const announcements = [
        "🚀 Registration closes on March 25, 2025!",
        "🎉 Hackathon starts on April 1, 2025!",
        "🏆 Final results announced on April 20, 2025!"
    ];

    const announcementList = document.getElementById("announcement-list");
    let index = 0;

    function updateAnnouncement() {
        announcementList.textContent = announcements[index];
        index = (index + 1) % announcements.length;
    }

    setInterval(updateAnnouncement, 5000);
});

