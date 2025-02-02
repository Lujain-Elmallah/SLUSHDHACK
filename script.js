function startChatbot() {
    let language = document.getElementById("language").value;
    let subject = document.getElementById("subject").value;

    if (!language) {
        alert("Please select a language.");
        return;
    }

    let url = language;
    if (subject) {
        url += "&subject=" + subject;
    }

    window.location.href = url;
}
