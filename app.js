document.addEventListener("DOMContentLoaded", function () {
  const letter = document.querySelector(".letter");
  const target = document.querySelector(".container");
  const dotall = document.querySelector(".dotall");
  const hero = document.querySelector(".sec-hero");
  const Music = document.querySelector(".Music");
  const button64 = document.querySelector(".button-64");

  const Music1 =
    "./img/sound/20230821_Lauv - Love U Like That [Official Video].webm";

  const Music2 =
    "./img/sound/20230327_Infinitely Falling - Fly By Midnight (lyrics).webm";

  letter.addEventListener("click", function () {
    target.classList.add("container-show");
    letter.classList.add("fade-away");
    dotall.classList.add("show");
    hero.classList.add("bg-black");
    Music.classList.add("show");
    playAudio(Music1, 42.5);
  });

  target.addEventListener("mouseenter", function () {
    // Change the background on hover
    target.classList.add("beat");
  });

  // Add event listener for mouseleave
  target.addEventListener("mouseleave", function () {
    //Reset the background on mouse leave
    target.classList.remove("beat");
  });

  button64.addEventListener("click", function () {
    Valentime();
    removeAudio();
    setTimeout(function() {
        playAudio(Music2, 0);
    }, 2000);
  });

  Music.addEventListener("click", function() {
    toggleMute();
  });

  function playAudio(audioFile, time) {
    // Create audio element
    if (!document.getElementById("myAudio")) {
      const audio = document.createElement("audio");

      // Set attributes for the audio element
      audio.id = "myAudio";
      audio.loop = true;
      audio.classList.add("Music");
      audio.autoplay = true;

      // Create a source element and set its attributes
      const source = document.createElement("source");
      source.src = audioFile; // Replace with the path to your audio file
      source.type = "audio/webm";
      // Append the source element to the audio element
      audio.appendChild(source);

      // Set the volume (optional)
      audio.volume = 0.1;
      audio.currentTime = time;

      // Append the audio element to the body or any other desired container
      document.body.appendChild(audio);
    }
  }

  function toggleMute() {
    // Get the audio element by its ID
    var audioElement = document.getElementById("myAudio");

    // Check if the audio element exists
    if (audioElement) {
      // Toggle the mute state
      audioElement.muted = !audioElement.muted;
    }
  }

  function removeAudio() {
    // Get the audio element by its ID
    var audioElement = document.getElementById("myAudio");

    // Check if the audio element exists
    if (audioElement) {
      // Remove the audio element from its parent node
      audioElement.parentNode.removeChild(audioElement);
    } else {
      console.error("Audio element not found.");
    }
  }

  function Valentime() {
    target.classList.remove("container-show");
    dotall.classList.remove("show");
  }

  function breathe() {
    // Increase padding
    target.style.padding = "85px";

    // Wait for a moment
    setTimeout(() => {
      // Decrease padding after waiting
      target.style.padding = "75px";
    }, 500); // Adjust the duration based on your preference
  }

  function startBreathing() {
    let intervalId;

    target.addEventListener("mouseenter", () => {
      intervalId = setInterval(breathe, 1000);
    });
    target.addEventListener("mouseleave", () => {
      clearInterval(intervalId);
    });
  }
  window.onload = startBreathing;
});
