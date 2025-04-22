document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);
    const messageBox = document.getElementById("formMessage");

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            messageBox.className = "alert alert-success";
            messageBox.innerHTML = "✅ Your message has been sent successfully!";
            form.reset();
        } else {
            messageBox.className = "alert alert-danger";
            messageBox.innerHTML = "❌ Error sending message. Try again!";
        }
    } catch (error) {
        messageBox.className = "alert alert-danger";
        messageBox.innerHTML = "❌ Network error. Please check your connection.";
    }

    messageBox.classList.remove("d-none"); // Show message
});
