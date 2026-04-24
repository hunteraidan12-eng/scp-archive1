const speechBtn = document.getElementById("speechToggle");
const description = document.getElementById("scp-description");

let utterance;
let hasStarted = false;
let isPaused = false;

speechBtn.addEventListener("click", () => {
  if (!hasStarted) {
    const text = description.innerText;

    speechSynthesis.cancel();

    utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;

    utterance.onend = () => {
      hasStarted = false;
      isPaused = false;
      speechBtn.textContent = "▶ Read Description";
    };

    speechSynthesis.speak(utterance);

    hasStarted = true;
    isPaused = false;
    speechBtn.textContent = "⏸ Pause";
  } 
  else if (!isPaused) {
    speechSynthesis.pause();
    isPaused = true;
    speechBtn.textContent = "▶ Resume";
  } 
  else {
    speechSynthesis.resume();
    isPaused = false;
    speechBtn.textContent = "⏸ Pause";
  }
});

// Stop audio when leaving/changing page
window.addEventListener("beforeunload", () => {
  speechSynthesis.cancel();
});