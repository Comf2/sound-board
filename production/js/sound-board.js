//TODO: Find audio to upload
//Make cards auto generate based on audio files in folder
//push new files to array && db when posted

//TODO: MAke stage music (oh no)
//make auto generating cards
let audios = [];
const cardContainer = document.querySelector('.cards-container');

function initSoundEffects() {
  //MAKE READ AUDIO INTO ARRAY
  //add audios manually, then push it to an array

  const running = {
    sound: new Audio('./production/assets/audio/running.wav'),
    name: 'running',
  };
  const jumping = {
    sound: new Audio('./production/assets/audio/jump.wav'),
    name: 'jumping',
  };
  const backHit = {
    sound: new Audio('./production/assets/audio/backwords-hit.wav'),
    name: 'Back Hit',
  };
  const launch = {
    sound: new Audio('./production/assets/audio/launched.wav'),
    name: 'Launch',
  };
  const sideB = {
    sound: new Audio('./production/assets/audio/side-b.wav'),
    name: 'Jiggly Puff Side B',
  };
  const roll = {
    sound: new Audio('./production/assets/audio/roll.wav'),
    name: 'Roll',
  };
  const rollHit = {
    sound: new Audio('./production/assets/audio/roll-hit.wav'),
    name: 'Roll Hit',
  };
  const initRollLoop = {
    sound: new Audio('./production/assets/audio/init-roll.wav'),
    name: 'Start of Roll',
  };
  const endRoll = {
    sound: new Audio('./production/assets/audio/end-roll.wav'),
    name: 'End of Roll',
  };
  const initRoll = {
    sound: new Audio('./production/assets/audio/init-b.wav'),
    name: 'Init Roll',
  };
  const mainTheme = {
    sound: new Audio('./production/assets/audio/title-screen.wav'),
    name: 'Title Screen',
  };
  const caveTheme = {
    sound: new Audio('./production/assets/audio/cave-theme.wav'),
    name: 'Underground Theme',
  };

  //push the index to the onclick then use the index to make it play
  audios.push(
    running,
    jumping,
    backHit,
    launch,
    sideB,
    roll,
    rollHit,
    initRollLoop,
    endRoll,
    initRoll,
    mainTheme,
    caveTheme
  );
  for (let i = 0; i < audios.length; i++) {
    initCards(audios[i], i);
  }
}
initSoundEffects();

function initCards(audio, i) {
  const cardMarkdown = createCardMarkdown(audio, i);
  cardContainer.insertAdjacentHTML('beforeend', cardMarkdown);
}

function createCardMarkdown(audio, i) {
  return ` 
  <div class="card">
  <img
    src="./production/assets/svg/logo.svg"
    alt="Add an Image..."
  />
  <div class="card-desc">
    <p>${audio.name}</p>
    <i
      id="audio-${i}"
      onclick="playSound(${i})" 
      class="fa-solid fa-play play-sound"></i>
  </div>
</div>
  `;
}
function playSound(i) {
  const audio = audios[i].sound;
  const audioEle = document.getElementById(`audio-${i}`);
  audio.onended = (e) => {
    soundEnded(e, audioEle);
  };
  if (audio.paused) {
    audio.play();
    audioEle.classList.add('fa-pause');
    audioEle.classList.remove('fa-play');
  } else {
    audioEle.classList.add('fa-play');
    audioEle.classList.remove('fa-pause');
    audio.pause();
  }
}
function soundEnded(e, audioEle) {
  e.target.currentTime = 0;
  audioEle.classList.add('fa-play');
  audioEle.classList.remove('fa-pause');
}
// --- search for audios --- //

const searchInput = document.getElementById('search-sound');
const searchInputDesktop = document.getElementById('search-sound-desktop');
searchInput.addEventListener('input', (e) => {
  const search = e.target.value;
  searchSound(search);
});
searchInputDesktop.addEventListener('input', (e) => {
  const search = e.target.value;
  searchSound(search);
});
function searchSound(search) {
  if (search && search.trim().length > 0) {
    value = search.toLowerCase();

    generateResultsCards(
      audios.filter((audio) => {
        return audio.name.toLowerCase().includes(value);
      })
    );
  } else {
    while (cardContainer.firstChild) {
      cardContainer.removeChild(cardContainer.lastChild);
    }
    audios = [];
    initSoundEffects();
  }
}
//creates cards from search results
function generateResultsCards(results) {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.lastChild);
  }
  for (let i = 0; i < results.length; i++) {
    const cardMd = createCardMarkdown(results[i], i);

    cardContainer.insertAdjacentHTML('beforeend', cardMd);
  }
}
