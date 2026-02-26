// Get all post content areas and like icons
const posts = document.querySelectorAll(".post");

posts.forEach((post) => {
    const postContent = post.querySelector(".post-content");
    const popHeart = post.querySelector(".pop-heart");
    const likeIcon = post.querySelector(".like-icon");

    // 1) Double Tap Heart Reaction
    postContent.addEventListener("dblclick", () => {
        // Trigger large heart animation
        popHeart.classList.add("animate");
        
        // Change bottom heart icon to "Solid Red"
        likeIcon.classList.remove("fa-regular");
        likeIcon.classList.add("fa-solid");

        // Remove animation class after it finishes
        setTimeout(() => {
            popHeart.classList.remove("animate");
        }, 800);
    });

    // 2) Manual Like Icon Toggle
    likeIcon.addEventListener("click", () => {
        if (likeIcon.classList.contains("fa-regular")) {
            likeIcon.classList.remove("fa-regular");
            likeIcon.classList.add("fa-solid");
        } else {
            likeIcon.classList.remove("fa-solid");
            likeIcon.classList.add("fa-regular");
        }
    });
});