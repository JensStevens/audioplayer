// TODO:
// 1. When clicking menu item it goes to the correct song but the playlist doesnt change correctly

const audioPlayer = {
  cover: document.querySelector("#audio-player"),
  artist: document.querySelector("#artist"),
  title: document.querySelector("#title"),
  artistTitleContainer: document.querySelector("#artist-title-container"),
  progressContainer: document.querySelector("#progress-container"),
  progressBar: document.querySelector("#progress-bar"),
  currentTimeDisplay: document.querySelector("#current-time"),
  totalTimeDisplay: document.querySelector("#total-time"),
  rewind: document.querySelector("#rwd"),
  play: document.querySelector("#play"),
  forward: document.querySelector("#fwd"),
  audio: document.getElementsByTagName("audio")[0],
  shuffleButton: document.querySelector("#shuffle"),
  menu: document.querySelector("#menu"),
  menuContainer: document.querySelector(".menu-container"),
  inactiveHeight: "70px",
  activeHeight: "90px",
  menuHeight: "330px",
  menuItem: document.querySelectorAll(".menu-item"),
  menuImg: document.querySelectorAll(".menu-item-img"),
  menuArtist: document.querySelectorAll(".menu-item-artist"),
  menuTitle: document.querySelectorAll(".menu-item-title"),
  menuTotalTime: document.querySelectorAll(".menu-item-total-time"),
};

audioPlayer.cover.style.height = audioPlayer.inactiveHeight;
audioPlayer.artistTitleContainer.style.opacity = "0";
audioPlayer.progressContainer.style.opacity = "0";

const song = [
  {
    title: "Nothing From Me",
    artist: "Norman Perry",
    url: "../assets/audio/NothingfromMe.m4a",
    cover: "../assets/img/covers/norman.jpg",
  },
  {
    title: "Days Before Rodeo/The Prayer",
    artist: "Travis Scott",
    url: "../assets/audio/ThePrayer.mp3",
    cover: "../assets/img/covers/dbr.jpg",
  },
  {
    title: "Grammy Week (feat. Don Toliver)",
    artist: "Kaash Paige",
    url: "../assets/audio/GrammyWeek.mp3",
    cover: "../assets/img/covers/kaash.jpg",
  },
  {
    title: "Die Wit Em",
    artist: "ScHoolboy Q",
    url: "../assets/audio/DieWitEm.m4a",
    cover: "../assets/img/covers/crash-talk.jpg",
  },
  {
    title: "CAN'T SAY",
    artist: "Travis Scott",
    url: "../assets/audio/CANTSAY.m4a",
    cover: "../assets/img/covers/astroworld.jpg",
  },
  {
    title: "High (feat. Elton John)",
    artist: "Young Thug",
    url: "../assets/audio/High.m4a",
    cover: "../assets/img/covers/high.jpg",
  },
  {
    title: "Backyard",
    artist: "Travis Scott",
    url: "../assets/audio/Backyard.mp3",
    cover: "../assets/img/covers/dbr.jpg",
  },
  {
    title: "6 God",
    artist: "Drake",
    url: "../assets/audio/6God.mp3",
    cover: "../assets/img/covers/ifyou.png",
  },
  {
    title: "FML (feat. The Weeknd, Bon Iver & Travis Scott)",
    artist: "Kanye West",
    url: "../assets/audio/FML-OG.mp3",
    cover: "../assets/img/covers/kanye.jpg",
  },
  {
    title: "R.I.P. SCREW",
    artist: "Travis Scott",
    url: "../assets/audio/ripSCREW.m4a",
    cover: "../assets/img/covers/astroworld.jpg",
  },
  {
    title: "Salvation",
    artist: "K Forest",
    url: "../assets/audio/Salvation.m4a",
    cover: "../assets/img/covers/forest.jpg",
  },
  {
    title: "VIP",
    artist: "Amir Obè",
    url: "../assets/audio/vip.mp3",
    cover: "../assets/img/covers/amir.jpg",
  },
  {
    title: "Days In The East",
    artist: "Drake",
    url: "../assets/audio/DaysInTheEast.mp3",
    cover: "../assets/img/covers/daysITE.jpeg",
  },
  {
    title: "Position",
    artist: "Cassow",
    url: "../assets/audio/position.mp3",
    cover: "../assets/img/covers/cassow.jpg",
  },
  {
    title: "Drugs You Should Try",
    artist: "Travis Scott",
    url: "../assets/audio/DrugsYouShouldTry.mp3",
    cover: "../assets/img/covers/dbr.jpg",
  },
  {
    title: "Novacane",
    artist: "Frank Ocean",
    url: "../assets/audio/Novacane.mp3",
    cover: "../assets/img/covers/novacane.jpg",
  },
  {
    title: "Persian Rugs",
    artist: "PARTYNEXTDOOR",
    url: "../assets/audio/PersianRugs.mp3",
    cover: "../assets/img/covers/persianrugs.jpg",
  },
  {
    title: "Highest In The Room",
    artist: "Travis Scott",
    url: "../assets/audio/hitr.m4a",
    cover: "../assets/img/covers/hitr.png",
  },
  {
    title: "Nikes",
    artist: "Frank Ocean",
    url: "../assets/audio/nikes.m4a",
    cover: "../assets/img/covers/blond.jpg",
  },
  {
    title: "Flex",
    artist: "Tory Lanez",
    url: "../assets/audio/flex.m4a",
    cover: "../assets/img/covers/itoldu.jpeg",
  },
  {
    title: "Heaven Or Hell",
    artist: "Don Toliver",
    url: "../assets/audio/HeavenOrHell.m4a",
    cover: "../assets/img/covers/hoh.png",
  },
  {
    title: "I-95",
    artist: "Tory Lanez",
    url: "../assets/audio/I-95.mp3",
    cover: "../assets/img/covers/lostcause.jpg",
  },
  {
    title: "Rudolph",
    artist: "Don Toliver",
    url: "../assets/audio/rudolph.mp3",
    cover: "../assets/img/covers/rudolph.jpg",
  },
  {
    title: "CrasH",
    artist: "ScHoolboy Q",
    url: "../assets/audio/CrasH.m4a",
    cover: "../assets/img/covers/crash-talk.jpg",
  },
  {
    title: "ASTROTHUNDER",
    artist: "Travis Scott",
    url: "../assets/audio/ASTROTHUNDER.m4a",
    cover: "../assets/img/covers/astroworld.jpg",
  },
  {
    title: "Fuk Sumn (feat. Playboi Carti & Travis Scott)",
    artist: "Kanye West & Ty$",
    url: "../assets/audio/FukSumn.m4a",
    cover: "../assets/img/covers/vultures.jpg",
  },
  {
    title: "Keys To My Life",
    artist: "Kanye West & Ty$",
    url: "../assets/audio/KeysToMyLife.m4a",
    cover: "../assets/img/covers/vultures.jpg",
  },
  {
    title: "Bought The Earth",
    artist: "Yeat",
    url: "../assets/audio/BoughtTheEarth.m4a",
    cover: "../assets/img/covers/2093.jpg",
  },
  {
    title: "As We Speak (feat. Drake)",
    artist: "Yeat",
    url: "../assets/audio/AsWeSpeak.m4a",
    cover: "../assets/img/covers/2093.jpg",
  },
  {
    title: "Lyfestylë (feat. Lil Wayne)",
    artist: "Yeat",
    url: "../assets/audio/Lyfestylë.m4a",
    cover: "../assets/img/covers/2093.jpg",
  },
  {
    title: "Blue Green Red",
    artist: "Drake",
    url: "../assets/audio/BlueGreenRed.mp3",
    cover: "../assets/img/covers/100gigs.png",
  },
  {
    title: "Circadian Rhythm",
    artist: "Drake",
    url: "../assets/audio/CircadianRhythm.mp3",
    cover: "../assets/img/covers/100gigs.png",
  },
  {
    title: "Housekeeping Knows (feat. Latto)",
    artist: "Drake",
    url: "../assets/audio/HousekeepingKnows.mp3",
    cover: "../assets/img/covers/100gigs.png",
  },
  {
    title: "It's Up (feat. Young Thug & 21 Savage)",
    artist: "Drake",
    url: "../assets/audio/ItsUp.mp3",
    cover: "../assets/img/covers/100gigs.png",
  },
  {
    title: "No Face (feat. Playboi Carti)",
    artist: "Drake",
    url: "../assets/audio/NoFace.mp3",
    cover: "../assets/img/covers/100gigs.png",
  },
  {
    title: "Beso (Fruta Fresca)",
    artist: "Wakyin & Carlos Vives",
    url: "../assets/audio/Beso(Fruta Fresca).mp3",
    cover: "../assets/img/covers/beso.jpg",
  },
];

const playIcon = "url(../assets/img/play.png)";
const pauseIcon = "url(../assets/img/pause.png)";

let currentSong = 0;

shuffleSong(song);
createMenuItem();

function changeSong() {
  const currentSongData = song[currentSong];
  audioPlayer.audio.src = currentSongData.url;
  audioPlayer.cover.style.backgroundImage = `url(${currentSongData.cover})`;
  audioPlayer.audio.play();
  audioPlayer.play.style.backgroundImage = pauseIcon;
  audioPlayer.play.style.scale = "1.1";
  audioPlayer.play.classList.add("playing");
  audioPlayer.artist.textContent = currentSongData.artist;
  audioPlayer.title.textContent = currentSongData.title;
  audioPlayer.progressContainer.style.opacity = "1";
  audioPlayer.artistTitleContainer.style.opacity = "1";
  audioPlayer.cover.style.height === audioPlayer.inactiveHeight
    ? (audioPlayer.cover.style.height = audioPlayer.activeHeight)
    : null;
  menuItems();
  updateMenu();
  artistTitleContHeight();
  startTextScrolling();
}

function updateProgressBar() {
  const currentTime = audioPlayer.audio.currentTime;
  const duration = audioPlayer.audio.duration;

  if (isFinite(duration)) {
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);

    audioPlayer.currentTimeDisplay.textContent = `${currentMinutes}:${
      currentSeconds < 10 ? "0" : ""
    }${currentSeconds}`;
    audioPlayer.totalTimeDisplay.style.opacity = "1";
    audioPlayer.totalTimeDisplay.textContent = `${totalMinutes}:${
      totalSeconds < 10 ? "0" : ""
    }${totalSeconds}`;
  } else {
    audioPlayer.totalTimeDisplay.style.transition = "opacity 0.1s ease-in";
    audioPlayer.totalTimeDisplay.style.opacity = "0";
  }

  const progress = (currentTime / duration) * 100;
  audioPlayer.progressBar.style.width = `${progress}%`;

  // when clicking the progress bar to go to a certain point in the song
  document
    .querySelector(".progress")
    .addEventListener("click", function (event) {
      const progressBarWidth = this.offsetWidth;
      const clickX = event.offsetX;
      const percentClicked = clickX / progressBarWidth;
      const seekTime = duration * percentClicked;
      if (isFinite(seekTime)) {
        audioPlayer.audio.currentTime = seekTime;
      }
    });

  if (currentTime === duration) {
    currentSong++;
    if (currentSong >= song.length) {
      currentSong = 0;
    }
    changeSong();
  }
}

audioPlayer.rewind.addEventListener("click", function () {
  currentSong = currentSong > 0 ? currentSong - 1 : song.length - 1;
  changeSong();
});

audioPlayer.forward.addEventListener("click", function () {
  currentSong = currentSong < song.length - 1 ? currentSong + 1 : 0;
  changeSong();
});

audioPlayer.play.addEventListener("click", function () {
  if (audioPlayer.audio.paused) {
    audioPlayer.audio.play();
    audioPlayer.play.style.backgroundImage = pauseIcon;
    audioPlayer.play.style.scale = "1.1";
    audioPlayer.play.classList.add("playing");
    audioPlayer.progressContainer.style.opacity = "1";
    audioPlayer.artistTitleContainer.style.opacity = "1";
    audioPlayer.cover.style.height === audioPlayer.inactiveHeight
      ? (audioPlayer.cover.style.height = audioPlayer.activeHeight)
      : null;
  } else {
    audioPlayer.audio.pause();
    audioPlayer.play.style.backgroundImage = playIcon;
    audioPlayer.play.style.scale = "1";
    audioPlayer.play.classList.remove("playing");
    audioPlayer.progressContainer.style.opacity = "0";
    audioPlayer.artistTitleContainer.style.opacity = "0";
    audioPlayer.cover.style.height === audioPlayer.activeHeight
      ? (audioPlayer.cover.style.height = audioPlayer.inactiveHeight)
      : null;
  }
  artistTitleContHeight();
  startTextScrolling();
  updateMenu();
});

audioPlayer.audio.src = song[currentSong].url;
audioPlayer.cover.style.backgroundImage = `url(${song[currentSong].cover})`;
audioPlayer.artist.textContent = song[currentSong].artist;
audioPlayer.title.textContent = song[currentSong].title;

audioPlayer.shuffleButton.addEventListener("click", function () {
  audioPlayer.shuffleButton.classList.toggle("playing");
  audioPlayer.shuffleButton.classList.contains("playing")
    ? (shuffleSong(song), (currentSong = 0), changeSong())
    : song.sort((a, b) =>
        a.artist > b.artist ? 1 : b.artist > a.artist ? -1 : 0
      );
  menuItems();
});

audioPlayer.menu.addEventListener("click", openMenu);

audioPlayer.audio.addEventListener("timeupdate", updateProgressBar);

dragElement(document.getElementById("audio-player"));

function dragElement(player) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    player.style.top = player.offsetTop - pos2 + "px";
    player.style.left = player.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  if (document.getElementById(player.id + "controls")) {
    document.getElementById(player.id + "controls").onmousedown = dragMouseDown;
  } else {
    player.onmousedown = dragMouseDown;
  }
}

function shuffleSong(songArray) {
  for (let i = songArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songArray[i], songArray[j]] = [songArray[j], songArray[i]];
  }
}

function openMenu() {
  const coverHeight = audioPlayer.cover.style.height;
  audioPlayer.menu.classList.toggle("playing");

  audioPlayer.cover.style.height =
    coverHeight === audioPlayer.inactiveHeight ||
    coverHeight === audioPlayer.activeHeight
      ? audioPlayer.menuHeight
      : audioPlayer.audio.paused
      ? audioPlayer.inactiveHeight
      : audioPlayer.activeHeight;

  coverHeight === audioPlayer.menuHeight
    ? ((audioPlayer.menuContainer.style.height = "0"),
      (audioPlayer.menuContainer.style.opacity = "0"))
    : ((audioPlayer.menuContainer.style.height = "100%"),
      (audioPlayer.menuContainer.style.opacity = "1"));
  artistTitleContHeight();
  menuItems();
}

function createMenuItem() {
  timer = setInterval(function () {
    const menuContainer = document.querySelector(".menu-container");

    const menuItemDiv = document.createElement("div");
    menuItemDiv.className = "menu-item";

    const menuItemImgDiv = document.createElement("div");
    menuItemImgDiv.className = "menu-item-img";
    menuItemDiv.appendChild(menuItemImgDiv);

    const infoDiv = document.createElement("div");

    const artistParagraph = document.createElement("p");
    artistParagraph.className = "menu-item-artist";
    infoDiv.appendChild(artistParagraph);

    const titleParagraph = document.createElement("p");
    titleParagraph.className = "menu-item-title";
    infoDiv.appendChild(titleParagraph);

    menuItemDiv.appendChild(infoDiv);

    const totalTimeParagraph = document.createElement("p");
    totalTimeParagraph.className = "menu-item-total-time";
    totalTimeParagraph.textContent = "0:00";
    menuItemDiv.appendChild(totalTimeParagraph);

    menuContainer.appendChild(menuItemDiv);

    menuItemDiv.addEventListener("click", function (event) {
      const menuItemIndex = this.getAttribute("data-song-index");
      currentSong = parseInt(menuItemIndex);
      changeSong();
    });

    getMenuItem();
    createMenuItem_Stop();
  }, 0);
}

function getMenuItem() {
  audioPlayer.menuItem = document.querySelectorAll(".menu-item");
  audioPlayer.menuImg = document.querySelectorAll(".menu-item-img");
  audioPlayer.menuArtist = document.querySelectorAll(".menu-item-artist");
  audioPlayer.menuTitle = document.querySelectorAll(".menu-item-title");
  audioPlayer.menuTotalTime = document.querySelectorAll(
    ".menu-item-total-time"
  );
}

function createMenuItem_Stop() {
  audioPlayer.menuItem.length === song.length ? clearInterval(timer) : null;
}

function menuItems() {
  for (let i = 0; i < audioPlayer.menuItem.length; i++) {
    const songIndex = i % song.length;
    audioPlayer.menuItem[i].setAttribute("data-song-index", songIndex);

    audioPlayer.menuImg[
      i
    ].style.backgroundImage = `url(${song[songIndex].cover})`;
    audioPlayer.menuArtist[i].textContent = song[songIndex].artist;
    audioPlayer.menuTitle[i].textContent = song[songIndex].title;

    const dummyAudio = new Audio(song[songIndex].url);
    dummyAudio.addEventListener("loadedmetadata", function () {
      const totalMinutes = Math.floor(dummyAudio.duration / 60);
      const totalSeconds = Math.floor(dummyAudio.duration % 60);

      audioPlayer.menuTotalTime[i].textContent = `${totalMinutes}:${
        totalSeconds < 10 ? "0" : ""
      }${totalSeconds}`;
    });
  }
}

function updateMenu() {
  for (let i = 0; i < song.length; i++) {
    audioPlayer.menuItem[i].style.display = "flex";
  }
  audioPlayer.menuItem[currentSong].style.display = "none";

  const menuContainer = document.querySelector(".menu-container");
  const menuItems = Array.from(document.querySelectorAll(".menu-item"));

  menuItems.sort((a, b) => {
    const indexA = parseInt(a.getAttribute("data-song-index"));
    const indexB = parseInt(b.getAttribute("data-song-index"));
    const offsetA = (indexA - currentSong + song.length) % song.length;
    const offsetB = (indexB - currentSong + song.length) % song.length;
    return offsetA - offsetB;
  });

  menuContainer.innerHTML = "";
  menuItems.forEach((item) => menuContainer.appendChild(item));
  menuContainer.scrollTop = 0;
}

function artistTitleContHeight() {
  const coverHeight = audioPlayer.cover.style.height;

  audioPlayer.artistTitleContainer.style.height =
    coverHeight === audioPlayer.inactiveHeight ||
    (coverHeight === audioPlayer.menuHeight && audioPlayer.audio.paused)
      ? "2%"
      : coverHeight === audioPlayer.activeHeight
      ? "50%"
      : coverHeight === audioPlayer.menuHeight && !audioPlayer.audio.paused
      ? "10%"
      : audioPlayer.artistTitleContainer.style.height;
}

// function startTextScrolling() {
//   const autoScrollDiv = document.querySelector(".title-container");
//   const textWidth = audioPlayer.title.offsetWidth;
//   const animationDuration = textWidth / 10;
//   const scrollTitle = document.querySelector("#titleCopy");

//   if (textWidth > autoScrollDiv.offsetWidth) {
//     autoScrollDiv.id = "autoScroll";
//     scrollTitle.textContent = song[currentSong].title;
//     scrollTitle.style.width = textWidth + "px";
//     scrollTitle.style.marginLeft = "10px";
//     if (audioPlayer.audio.paused) {
//       autoScrollDiv.id = "";
//     }
//   } else {
//     autoScrollDiv.id = "";
//     scrollTitle.textContent = "";
//     scrollTitle.style.width = "0";
//     scrollTitle.style.marginLeft = "0";
//   }

//   audioPlayer.title.style.animationDuration = animationDuration + "s";
//   scrollTitle.style.animationDuration = animationDuration + "s";
// }

function startTextScrolling() {
  const titleContainer = document.querySelector(".title-container");
  const titleCopyElement = document.querySelector("#titleCopy");

  if (audioPlayer.title.offsetWidth > titleContainer.offsetWidth) {
    titleCopyElement.textContent = song[currentSong].title;
    titleCopyElement.style.marginLeft = "10px";
    audioPlayer.title.style.animation = "scroll linear infinite";
    audioPlayer.title.style.animationDelay = "2s";
    audioPlayer.title.style.animationDuration = `${
      audioPlayer.title.offsetWidth / 10
    }s`;
    titleCopyElement.style.animation = "scroll linear infinite";
    titleCopyElement.style.animationDelay = "2s";
    titleCopyElement.style.animationDuration = `${
      titleCopyElement.offsetWidth / 10
    }s`;
  } else {
    audioPlayer.title.style.animation = "none";
    titleCopyElement.style.animation = "none";
    titleCopyElement.textContent = "";
    titleCopyElement.style.marginLeft = "0";
  }
}
