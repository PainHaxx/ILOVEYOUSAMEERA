let noCount = parseInt(localStorage.getItem("noCount")) || 0;

function handleNo() {
    const message = generateMessage();
    alert(message);
    noCount++;
    localStorage.setItem("noCount", noCount);

    // Increase the size of the Yes button
    const yesButton = document.getElementById("yesButton");
    const currentSize = parseFloat(getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 2) + "px";

    // If noCount exceeds the number of predefined messages, loop back to the beginning
    if (noCount >= messages.length) {
        noCount = 0;
        localStorage.setItem("noCount", noCount);
    }
}

function generateMessage() {
    const messages = [
        "No",
        "Are you sure?",
        "Pookie please",
        "Don't do this to me :(",
        "You're breaking my heart",
        "I'm gonna cry...",
        "sure knba talaga?",
        "please baby ko",
        "sorry napo babyy",
        "pleaseeeeeeeee",
        "baby sorry na poo",
        "samii sorry napo",
        "iiyak akoooo",
        "pwease",
    ];

    return messages[noCount % messages.length];
}

function redirectToAnotherPage() {
    window.location.href = "anotherPage.html"; // Replace "anotherPage.html" with the actual HTML file you want to redirect to
}
