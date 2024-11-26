document.addEventListener("DOMContentLoaded", () => {
  const vid = document.getElementById("doremy_video");
  const clickImage = document.getElementById("click_to_enter_image");

  vid.style.display = "none";

  function enterFullscreen() {
    vid.play(); // Start the video
    clickImage.style.display = "none"; // Hide the image
    vid.style.display = "inline"; // Show the video

    if (vid.requestFullscreen) {
      vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) { // For Firefox
      vid.mozRequestFullScreen();
    } else if (vid.webkitRequestFullscreen) { // For Chrome, Safari, Opera
      vid.webkitRequestFullscreen();
    } else if (vid.msRequestFullscreen) { // For Internet Explorer/Edge
      vid.msRequestFullscreen();
    }
  }
  clickImage.addEventListener("click", enterFullscreen);
});
