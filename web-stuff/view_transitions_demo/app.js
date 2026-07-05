const toggleButton = document.querySelector("button.corner-toggle");
const upNextButton = document.querySelector(".tab-name.tab-up-next");
const lyricsButton = document.querySelector(".tab-name.tab-lyrics");
const creditsButton = document.querySelector(".tab-name.tab-credits");
const playerContainer = document.querySelector("main.player");
const tabContentContainer = document.querySelector(".tab-content");

const tabs = ["up-next", "lyrics", "credits"];
let tabOpen = "";

function switchTab(newTab = "") {
    tabOpen = newTab;
    switch (tabOpen) {
        case "up-next":
            playerContainer.className =
                "player player-tabopen player-upnextopen";
            break;
        case "lyrics":
            playerContainer.className =
                "player player-tabopen player-lyricsopen";
            break;
        case "credits":
            playerContainer.className =
                "player player-tabopen player-creditsopen";
            break;

        default:
            playerContainer.className = "player";
            break;
    }
}

function viewTransitionsWrapper(tabName = "") {
    if (tabs.includes(tabOpen) && tabs.includes(tabName)) {
        if (tabs.indexOf(tabName) > tabs.indexOf(tabOpen)) {
            tabContentContainer.className = "tab-content scroll-right";
        } else {
            tabContentContainer.className = "tab-content scroll-left";
        }
    }
    if (document.startViewTransition) {
        document.startViewTransition(() => switchTab(tabName));
    } else {
        switchTab(tabName);
    }
}

function toggleTab(tabToToggle = "") {
    if (tabOpen === tabToToggle) {
        viewTransitionsWrapper("");
    } else {
        viewTransitionsWrapper(tabToToggle);
    }
}

toggleButton.onclick = () => toggleTab(tabOpen || "lyrics");
upNextButton.onclick = () => toggleTab("up-next");
lyricsButton.onclick = () => toggleTab("lyrics");
creditsButton.onclick = () => toggleTab("credits");
document.onkeydown = (e) => {
    if (e.key === " ") {
        e.preventDefault();
        toggleTab(tabOpen || "lyrics");
    }
};
