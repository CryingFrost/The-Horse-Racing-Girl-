let characters = [
  { id: 0, name: "Symboli Rudolf",  baseSpeed: 1.1, skillName: "The Emperor's", faceSprite: "/assets/Character image/symboli_rudolf_icon.png", halfBodySprite: "/assets/Character image/symboli_rudolf_half.png", previewMarginTop: 170, raceSprite: "/assets/Character image/symboli_rudolf_race.png", voice: "/assets/Character voice/symboli_rudolf_voice.mp3", finished: false},
  { id: 1, name: "Special Week", baseSpeed: 1.1, skillName: "Ruler of Japan", faceSprite: "/assets/Character image/special_week_icon.png", halfBodySprite: "/assets/Character image/special_week_half.png", previewMarginTop: 140, raceSprite: "/assets/Character image/special_week_race.png", voice: "/assets/Character voice/special_week_voice.mp3", finished: false },
  { id: 2, name: "Seiun Sky", baseSpeed: 1.1, skillName: "The Trickster", faceSprite: "/assets/Character image/seiun_sky_icon.png", halfBodySprite: "/assets/Character image/seiun_sky_half.png", previewMarginTop: 170, raceSprite: "/assets/Character image/seiun_sky_race.png", voice: "/assets/Character voice/seiun_sky_voice.mp3", finished: false},
  { id: 3, name: "Satono Diamond", baseSpeed: 1.2, skillName: "A Dream-Chasing Gem", faceSprite: "/assets/Character image/satono_diamond_icon.png", halfBodySprite: "/assets/Character image/satono_diamond_half.png", previewMarginTop: 160, raceSprite: "/assets/Character image/satono_diamond_race.png", voice: "/assets/Character voice/satono_diamond_voice.mp3", finished: false},
  { id: 4, name: "Matikanetannhauser", baseSpeed: 0.9, skillName: "The Late Bloomer", faceSprite: "/assets/Character image/matikanetannhauser_icon.png", halfBodySprite: "/assets/Character image/matikanetannhauser_half.png", previewMarginTop: 170, raceSprite: "/assets/Character image/matikanetannhauser_race.png", voice: "/assets/Character voice/matikanetannhauser_voice.mp3", finished: false},
  { id: 5, name: "Kitasan Black", baseSpeed: 1.3, skillName: "The Festival Girl", faceSprite: "/assets/Character image/kitasan_black_icon.png", halfBodySprite: "/assets/Character image/kitasan_black_half.png", previewMarginTop: 190, raceSprite: "/assets/Character image/kitasan_black_race.png", voice: "/assets/Character voice/kitasan_black_voice.mp3", finished: false},
  { id: 6, name: "Gold Ship", baseSpeed: 1.1, skillName: "Unpredictable", faceSprite: "/assets/Character image/gold_ship_icon.png", halfBodySprite: "/assets/Character image/gold_ship_half.png", previewMarginTop: 200, raceSprite: "/assets/Character image/gold_ship_race.png", voice: "/assets/Character voice/gold_ship_voice.mp3", finished: false},
  { id: 7, name: "Cheval Grand", baseSpeed: 1.2, skillName: "A Magnificent Umamusume", faceSprite: "/assets/Character image/cheval_grand_icon.png", halfBodySprite: "/assets/Character image/cheval_grand_half.png", previewMarginTop: 170, raceSprite: "/assets/Character image/cheval_grand_race.png", voice: "/assets/Character voice/cheval_grand_voice.mp3", finished: false},
  { id: 8, name: "Oguri Cap", baseSpeed: 1.1, skillName: "The Grey Phantom", faceSprite: "/assets/Character image/oguri_cap_icon.png", halfBodySprite: "/assets/Character image/oguri_cap_half.png", previewMarginTop: 190, raceSprite: "/assets/Character image/oguri_cap_race.png", voice: "/assets/Character voice/oguri_cap_voice.mp3", finished: false},
  { id: 9, name: "Tamamo Cross", baseSpeed: 1.1, skillName: "The White Lighting", faceSprite: "/assets/Character image/tamamo_cross_icon.png", halfBodySprite: "/assets/Character image/tamamo_cross_half.png", previewMarginTop: 130, raceSprite: "/assets/Character image/tamamo_cross_race.png", voice: "/assets/Character voice/tamamo_cross_voice.mp3", finished: false},
  { id: 10, name: "Tokai Teio", baseSpeed: 1.1, skillName: "The Monarch's", faceSprite: "/assets/Character image/tokai_teio_icon.png", halfBodySprite: "/assets/Character image/tokai-teio_half.png", previewMarginTop: 100, raceSprite: "/assets/Character image/tokai_teio_race.png", voice: "/assets/Character voice/tokai_teio_voice.mp3", finished: false},
  { id: 11, name: "Nice Nature", baseSpeed: 1.0, skillName: "The Supporting Star", faceSprite: "/assets/Character image/nice_nature_icon.png", halfBodySprite: "/assets/Character image/nice_nature_half.png", previewMarginTop: 170, raceSprite: "/assets/Character image/nice_nature_race.png", voice: "/assets/Character voice/nice_nature_voice.mp3", finished: false},
  { id: 12, name: "Matikanefukukitaru", baseSpeed: 1.1, skillName: "Shiraoki's Luck", faceSprite: "/assets/Character image/matikanefukukitaru_icon.png", halfBodySprite: "/assets/Character image/matikanefukukitaru_half.png", previewMarginTop: 170, raceSprite: "/assets/Character image/matikanefukukitaru_race.png", voice: "/assets/Character voice/matikanefukukitaru_voice.mp3", finished: false},
  { id: 13, name: "Meisho Doto", baseSpeed: 1.1, skillName: "Silver Collector", faceSprite: "/assets/Character image/meisho_doto_icon.png", halfBodySprite: "/assets/Character image/meisho_doto_half.png",previewMarginTop: 190, raceSprite: "/assets/Character image/meisho_doto_race.png", voice: "/assets/Character voice/meisho_doto_voice.mp3", finished: false},
  { id: 14, name: "Rice Shower", baseSpeed: 1.2, skillName: "Assassin's", faceSprite: "/assets/Character image/rice_shower_icon.png", halfBodySprite: "/assets/Character image/rice_shower_half.png", previewMarginTop: 150, raceSprite: "/assets/Character image/rice_shower_race.png", voice: "/assets/Character voice/rice_shower_voice.mp3", finished: false},
  { id: 15, name: "Jungle Pocket", baseSpeed: 1.1, skillName: "Roar of Victory", faceSprite: "/assets/Character image/jungle_pocket_icon.png", halfBodySprite: "/assets/Character image/jungle_pocket_half.png", previewMarginTop: 170, raceSprite: "/assets/Character image/jungle_pocket_race.png", voice: "/assets/Character voice/jungle_pocket_voice.mp3", finished: false},
  { id: 16, name: "Super Creek", baseSpeed: 1.1, skillName: "Speedy Stayer", faceSprite: "/assets/Character image/super_creek_icon.png", halfBodySprite: "/assets/Character image/super_creek_half.png", previewMarginTop: 170, raceSprite: "/assets/Character image/super_creek_race.png", voice: "/assets/Character voice/super_creek_voice.mp3", finished: false}
];

characters.forEach(char => {
  char.loadedImages = {};

  const faceImg = new Image();
  faceImg.src = char.faceSprite;
  faceImg.onload = () => console.log(`${char.name} face loaded`);
  char.loadedImages.face = faceImg;

  const halfImg = new Image();
  halfImg.src = char.halfBodySprite;
  halfImg.onload = () => console.log(`${char.name} half-body loaded`);
  char.loadedImages.half = halfImg;

  const raceImg = new Image();
  raceImg.src = char.raceSprite;
  raceImg.onload = () => console.log(`${char.name} race loaded`);
  char.loadedImages.race = raceImg;
});


let selectedCharacter = null;
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let raceStarted = false;
let countdown = 3;
let cameraX = 0;
let cameraY = 0;
let finishOrder = [];
let menuMusic = new Audio("/assets/Music/main_menu_soundtrack.mp3");
menuMusic.loop = true;
menuMusic.volume = 0.3;
let raceMusic = new Audio("/assets/Music/race_soundtrack.mp3");
raceMusic.loop = true;
raceMusic.volume = 0.3;
let raceParticipants = [];
let FPS = 60;
let currentVoice = null;

function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    alert("Switch to landscape mode to start playing");
  }
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);

function getRaceParticipants(allCharacters, selectedCharacter) {
  
  let others = allCharacters.filter(c => c !== selectedCharacter);

  let shuffled = others.sort(() => 0.5 - Math.random());

  let randomOpponents = shuffled.slice(0, 6);

  let participants = [...randomOpponents];
  
  let randomIndex = Math.floor(Math.random() * (participants.length + 1));
  
  participants.splice(randomIndex, 0, selectedCharacter);

  return participants;
}

const infoButton = document.getElementById('infoButton');
const infoPanel  = document.getElementById('infoPanel');
const closeInfo  = document.getElementById('closeInfo');

function toggleInfoPanel() {
  infoPanel.classList.toggle('show');
}

infoButton.addEventListener('click', () => {
  infoPanel.classList.add('show');
});

closeInfo.addEventListener('click', () => {
  infoPanel.classList.remove('show');
});

function toggleCharacterPanel() {
  let panel = document.getElementById("characterPanel");
  panel.classList.toggle("show");

  let listDiv = document.getElementById("characterList");
  listDiv.innerHTML = "";
  characters.forEach(c => {
    let container = document.createElement("div");
    container.style.textAlign = "center";
    let img = document.createElement("img");
    img.src = c.faceSprite;
    img.title = c.name + " (Speed: " + c.speed + ")";
    img.onclick = () => selectCharacter(c);
    let name = document.createElement("div");
    container.appendChild(img);
    listDiv.appendChild(container);
  });
}

function toggleStatPanel() {
  let panel = document.getElementById("statPanel");
  let button = document.getElementById("statButton");
  
  panel.classList.toggle("active");
  
  if (panel.classList.contains("active")) {
    button.innerHTML = "&lt;-";
  } else {
    button.innerHTML = "-&gt";
  }
}

function selectCharacter(c) {
  selectedCharacter = c;
  let preview = document.getElementById("characterPreview");
  preview.innerHTML = `
    <div style="margin-top:${c.previewMarginTop}px;">
      <img src="${c.halfBodySprite}"><br>
    </div>
  `;
  
  let statPanel = document.getElementById("statPanel");
  statPanel.style.display = "block";
  document.getElementById("statName").innerText = "Name: " + c.name;
  document.getElementById("statSpeed").innerText = "Base Speed: " + c.baseSpeed.toFixed(2);
  const maxSpeed = 5.0; 
  const percentage = (c.baseSpeed / maxSpeed) * 100;
  document.getElementById("statBar").style.width = percentage + "%";
  
  if (c.voice) {
    if (currentVoice) {
      currentVoice.pause();
      currentVoice.currentTime = 0;
    }
    currentVoice = new Audio(c.voice);
    currentVoice.play();
  }
}

function showSkillNotification(character, skillName) {
  let notif = document.createElement("div");
  notif.className = "skill-notification";
  notif.innerText = `${character.name} using skill ${skillName}!`;

  document.getElementById("skillNotificationArea").appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function showFinishTable() {
  let panel = document.getElementById("finishTablePanel");
  let table = document.getElementById("finishTable");
  table.innerHTML = "";

  finishOrder.forEach((c, i) => {
    let row = document.createElement("tr");
    if (c === selectedCharacter) {
      row.innerHTML = `<td>${i+1}</td><td class="player-finish">${c.name}</td>`;
    } else {
      row.innerHTML = `<td>${i+1}</td><td>${c.name}</td>`;
    }
    table.appendChild(row);
  });

  panel.style.display = "block";
}

function closeFinishTable() {
  document.getElementById("finishTablePanel").style.display = "none";
}

function showFinishNotification(character, position) {
  let container = document.getElementById("finishNotifications");
  let msg = document.createElement("div");
  
  if (character === selectedCharacter) {
    msg.innerHTML = `<span style="color: gold; font-weight: bold;">${character.name} finished in position ${position}</span>`;
  } else {
      msg.textContent = `${character.name} finished in position ${position}`;
  }
  
  container.appendChild(msg);

  setTimeout(() => {
    container.removeChild(msg);
  }, 1000);
}

function triggerBurstSpeed() {
  let playerChar = selectedCharacter;
  let numOpponents = Math.floor(Math.random() * 6) + 1;
  let opponents = raceParticipants.filter(c => c !== playerChar);
  let shuffled = opponents.sort(() => 0.5 - Math.random());
  let selectedOpponents = shuffled.slice(0, numOpponents);
  
  const playerBurstDelaySec = Math.floor(Math.random() * (100 - 70 + 1)) + 70;
  const burstDurationSec = 10;

  function startBurst(char, delaySec) {
    setTimeout(() => {
      showSkillNotification(char, char.skillName);
    

      let step = 0.1;
      let interval = 100;
      let burstTimer = 0;

      let accel = setInterval(() => {
      char.speedBonus += step;
      burstTimer += interval / 1000;

        if (burstTimer >= burstDurationSec) {
          clearInterval(accel);
          let cooldown = setInterval(() => {
            char.speedBonus -= step;
            if (char.speedBonus <= 0) {
              char.speedBonus = 0;
              clearInterval(cooldown);
              }
            }, interval);
          }
        }, interval);
      }, delaySec * 1000);
    }
    startBurst(playerChar, playerBurstDelaySec);
    
    selectedOpponents.forEach(opponent => {
      const randomBurstDelaySec = Math.floor(Math.random() * (100 - 70 + 1)) + 70;
      startBurst(opponent, randomBurstDelaySec);
    });
  }

function initRace() {
  raceParticipants.forEach((c, i) => {
    c.x = 7000;
    c.y = 50 + i * 40;
    c.baseSpeed = c.baseSpeed;
    c.speedBonus = Math.random() * 0.9;
    c.finalSpeed = null;
    c.finished = false;
  });
  finishOrder = [];
}

function startRace() {
  if (!selectedCharacter) {
    document.getElementById("noCharacterNotification").classList.add("show");
    document.getElementById("closeNotification").addEventListener("click", () => {
    document.getElementById("noCharacterNotification").classList.remove("show");
  });
    return;
  }
  document.getElementById("menu").style.display = "none";
  document.getElementById("characterPanel").style.display = "none";
  document.getElementById("statPanel").style.display = "none";
  canvas.style.display = "block";
  
  
  menuMusic.pause();
  menuMusic.currentTime = 0;
  raceMusic.play();
  
  if (currentVoice) {
    currentVoice.pause();
    currentVoice.currentTime = 0;
    currentVoice = null;
  }
  
  raceParticipants = getRaceParticipants(characters, selectedCharacter);
  
  initRace();
  countdown = 3;
  raceStarted = false;
  cameraX = 6500;
  cameraOffset = cameraX - selectedCharacter.x;
  runCountdown();
}

function showGo() {
  drawScene();
  ctx.fillStyle = "black";
  ctx.font = "48px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Go!", canvas.width/2, canvas.height/2);
    raceStarted = true;
    cameraLocked = false;
}

function runCountdown() {
  let interval = setInterval(() => {
    drawScene();
    ctx.fillStyle = "black";
    ctx.font = "48px Arial";
    if (countdown > 1) {
      ctx.fillText(countdown - 1, canvas.width/2, canvas.height/2);
      countdown--;
    } else {
      clearInterval(interval);
      showGo();
    }
  }, 1000);
      
      
      speedInterval = setInterval(() => {
  raceParticipants.forEach(c => {
    c.speedBonus = Math.random() * 0.9;
  });
}, 5000);

      triggerBurstSpeed();
    }


function gameLoop() {
  if (canvas.style.display === "block") {
    update();
    drawScene();
  }
  requestAnimationFrame(gameLoop);
}

function update() {
  if (!raceStarted) return;
  raceParticipants.forEach( c => {
    if (c.x > 70) {
      c.x -= (c.baseSpeed + c.speedBonus);
    } else {
        if (!c.finalSpeed) {
          c.finalSpeed = c.baseSpeed + c.speedBonus;
        }
        c.x -= c.finalSpeed;
    }
    if (c.x <= 50 && !c.finished) {
        c.finished = true;
        finishOrder.push(c);
        let position = finishOrder.length;
        showFinishNotification(c, position);
          
    if (position === raceParticipants.length) {
            clearInterval(speedInterval);
            setTimeout(() => {
              backToMenu();
            }, 3000);
         }
        }
      
    });
          
    cameraX = selectedCharacter.x + cameraOffset;
      if (cameraX < 0) cameraX = 0;
      
    cameraY = selectedCharacter.y - canvas.height / 2 + 100;
    if (cameraY < 0) cameraY = 0;
}


function backToMenu() {
  canvas.style.display = "none";
  showFinishTable();
  document.getElementById("menu").style.display = "flex";
  document.getElementById("characterPanel").style.display = "block";
  document.getElementById("statPanel").style.display = "block";
  finishOrder = []; // reset urutan finish
  characters.forEach(c => c.finished = false);
  raceStarted = false;

raceMusic.pause();
raceMusic.currentTime = 0;
menuMusic.play();
}


function drawScene() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  ctx.save();
  ctx.scale(1.0, 0.8);

  let brightWidth = 70;
  let darkWidth   = 30;

  for (let x = -cameraX; x < 8000 - cameraX; ) {
  let worldX = x + cameraX;

  ctx.fillStyle = "#77aa77";
  ctx.fillRect(x, 0, brightWidth, canvas.height);
  x += brightWidth;

  ctx.fillStyle = "#558855";
  ctx.fillRect(x, 0, darkWidth, canvas.height);
  x += darkWidth;
}

  ctx.fillStyle = "red";
  ctx.fillRect(50 - cameraX, 0, 10, canvas.height);

  raceParticipants.forEach((c, index) => {
    c.img = new Image();
    c.img.src = c.raceSprite;
    ctx.drawImage(c.img, c.x - cameraX, c.y, 48, 48);

  if (c === selectedCharacter) {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.moveTo(c.x - cameraX + 24, c.y - 10);
    ctx.lineTo(c.x - cameraX + 14, c.y - 25);
    ctx.lineTo(c.x - cameraX + 34, c.y - 25);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.fillText(c.name, c.x - cameraX + 24, c.y - 35);
  } else {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(c.x - cameraX + 24, c.y - 10);
    ctx.lineTo(c.x - cameraX + 14, c.y - 25);
    ctx.lineTo(c.x - cameraX + 34, c.y - 25);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.fillText(c.name, c.x - cameraX + 24, c.y - 35);
  }
  
  
  let spriteWidth = 48;
  let leftBound = cameraX;
  let rightBound = cameraX + canvas.width;
  let visible = (c.x + spriteWidth) > leftBound && c.x < rightBound;
  let offsetY = index * 20;
  
  if (!visible) {
  ctx.font = "14px Arial";
  let markerY = c.y + 18;

    if (c.x < cameraX) {
      ctx.fillStyle = "black";
      ctx.textAlign = "left";
      ctx.fillText(c.name, 25, markerY + 4);
      
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(10, markerY);
      ctx.lineTo(20, markerY + 6);
      ctx.lineTo(20, markerY - 6);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.fillStyle = "black";
      ctx.textAlign = "right";
      ctx.fillText(c.name, canvas.width - 25, markerY + 4);
      
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(canvas.width - 10, markerY);
      ctx.lineTo(canvas.width - 20, markerY + 6);
      ctx.lineTo(canvas.width - 20, markerY - 6);
      ctx.closePath();
      ctx.fill();
    }
  }
});

if (!raceStarted && countdown > 0) {
  ctx.fillStyle = "white";
  ctx.font = "bold 72px Arial";
  ctx.textAlign = "center";
  ctx.fillText(countdown, canvas.width / 2, canvas.height / 2);
}

ctx.restore();

}

gameLoop();


function playMenuMusic() {
  if (menuMusic.paused) {
    menuMusic.play();
  }
}

document.getElementById("characterPanelList").addEventListener("click", playMenuMusic);
document.getElementById("infoButton").addEventListener("click", playMenuMusic);