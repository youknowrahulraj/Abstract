const input = document.getElementById("link");
const fetchButton = document.getElementById("fetch-btn");
const message = document.getElementById("message");


function getYouTubeVideoId(url) {

    const urlObject = new URL(url);

    if (
        urlObject.hostname === "www.youtube.com" ||
        urlObject.hostname === "youtube.com"
    ) {
        return urlObject.searchParams.get("v");
    }

    if (urlObject.hostname === "youtu.be") {
        return urlObject.pathname.substring(1);
    }

    return null;
}


fetchButton.addEventListener("click", function () {

    const youtubeLink = input.value.trim();

    // Check if input is empty
    if (youtubeLink === "") {
        message.textContent = "Please enter a YouTube link.";
        return;
    }

    // Check if URL belongs to YouTube
    const youtubePattern =
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;

    if (!youtubePattern.test(youtubeLink)) {
        message.textContent = "Please enter a valid YouTube link.";
        return;
    }

    // Extract YouTube Video ID
    const videoId = getYouTubeVideoId(youtubeLink);

    if (!videoId) {
        message.textContent = "Could not find the video ID.";
        return;
    }

    // Temporary output
    message.textContent = "Video ID: " + videoId;

});