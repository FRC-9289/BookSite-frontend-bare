document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("form");
      const status = document.getElementById("status");

      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        status.textContent = "Submitting...";

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log("Form submitted:", data);

        fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((result) => {
            console.log("Server response:", result);
            status.textContent = "Submitted successfully!";
            form.reset();
          })
          .catch((error) => {
            console.error("Error sending data:", error);
            status.textContent = "Error submitting form. Try again.";
        });
    });
});
