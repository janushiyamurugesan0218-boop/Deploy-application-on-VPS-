// JavaScript functionality
document.getElementById('actionBtn').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = "Hello! The JavaScript file is working perfectly.";
    messageElement.style.color = "#28a745";
    messageElement.style.fontWeight = "bold";
    messageElement.style.marginTop = "15px";
});