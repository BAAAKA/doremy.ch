// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  const vid = document.getElementById("doremy_video");
  const clickImage = document.getElementById("click_to_enter_image");

  // Hide the video element initially
  vid.style.display = "none";

  // Function to enter fullscreen and start video playback
  function enterFullscreen() {
    vid.play(); // Start the video
    clickImage.style.display = "none"; // Hide the image
    vid.style.display = "inline"; // Show the video

    // Request fullscreen
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

  // Add click event listener to the image
  clickImage.addEventListener("click", enterFullscreen);
});
