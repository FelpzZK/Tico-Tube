// JavaScript para buscar vídeos (funcionalidade de pesquisa simples)
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {
    let query = searchInput.value.toLowerCase();
    let videos = document.querySelectorAll(".video-item");

    videos.forEach(function(video) {
        let title = video.querySelector(".video-title").textContent.toLowerCase();
        if (title.includes(query)) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }
    });
});