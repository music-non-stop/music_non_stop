// Function to play sound
function playSound(audioId) {
  const sound = document.getElementById(audioId);
  if (sound) {
    sound.volume = 0.2; // Set volume to 50%
    sound.currentTime = 0; // Reset the audio to the start
    sound.play();
  }
}

// Event listeners for hover on the cards
document.querySelectorAll(".card").forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    // Play corresponding sound based on the card number
    if (index === 0) {
      playSound("sound-4"); // Play sound for the first card (4)
    } else if (index === 1) {
      playSound("sound-0"); // Play sound for the second card (0)
    } else if (index === 2) {
      playSound("sound-4b"); // Play sound for the third card (4)
    }
  });
});
