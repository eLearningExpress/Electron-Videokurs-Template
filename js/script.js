const videoLinks = document.querySelectorAll('.sidebar-link[data-video]');
videoLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const videoSource = this.getAttribute('data-video');
        const videoPlayer = document.getElementById('videoPlayer');
        const videoSourceElement = videoPlayer.querySelector('source');

        videoSourceElement.src = videoSource;
        videoPlayer.load();
        videoPlayer.play();
    });
});