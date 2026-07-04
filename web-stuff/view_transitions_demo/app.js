const toggleButton = document.querySelector("button.corner-toggle");
const playerContainer = document.querySelector("main.player");

let lyricsOpen = true;

function toggleLyrics() {
  if (lyricsOpen) {
    playerContainer.className = "player";
  } else {
    playerContainer.className = "player player-tabopen player-lyricsopen";
  }
  lyricsOpen = !lyricsOpen;
}

function openTab() {
  if (document.startViewTransition) {
    document.startViewTransition(toggleLyrics);
  } else {
    toggleLyrics();
  }
}

toggleButton.onclick = openTab;
document.onkeydown = (e) => {
  if (e.key === " ") {
    e.preventDefault();
    openTab();
  }
};
