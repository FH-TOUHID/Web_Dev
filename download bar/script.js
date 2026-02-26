const button = document.getElementById("download-btn");
const progressBar = document.getElementById("progress-bar");
const percentage = document.getElementById("percentage");
const status = document.getElementById("status-label");

let isDownloading = false;

button.addEventListener("click", () => {
    if (isDownloading) return;

    isDownloading = true;
    let progress = 0;

    status.textContent = "Downloading...";
    button.textContent = "Downloading...";

    const interval = setInterval(() => {
        progress += Math.random() * 10; // soft, realistic speed
        button.
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            status.textContent = "Download complete!";
            button.textContent = "Done";
            isDownloading = false;
        }

        progressBar.style.width = progress + "%";
        percentage.textContent = Math.floor(progress) + "%";
    }, 200);
});