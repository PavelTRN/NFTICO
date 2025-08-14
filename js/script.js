let likeIcon = document.querySelectorAll(".like-icon--heart");
let likeBtn = document.querySelectorAll(".like-btn--heart");
likeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let isLike = likeIcon.classList.contains("bi-heart-fill");
        likeIcon.classList.toggle("bi-heart");
        likeIcon.classList.toggle("bi-heart-fill");
        likeIcon.classList.toggle("active", !isLike);
    });
});
let year = new Date().getFullYear();
let copyrightYear = document.querySelector(".copyright__data").innerHTML = year;