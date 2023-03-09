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

  const running = new Audio('./production/assets/audio/running.wav');
  const jumping = new Audio('./production/assets/audio/jump.wav');
  const backHit = new Audio('./production/assets/audio/backwords-hit.wav');
  const launch = new Audio('./production/assets/audio/launched.wav');
  const sideB = new Audio('./production/assets/audio/side-b.wav');
  const roll = new Audio('./production/assets/audio/roll.wav');
  const rollHit = new Audio('./production/assets/audio/roll-hit.wav');
  const initRollLoop = new Audio('./production/assets/audio/init-roll.wav');
  const endRoll = new Audio('./production/assets/audio/end-roll.wav');
  const initRoll = new Audio('./production/assets/audio/init-b.wav');

  //push the index to the onclick then use the index to make it play
  audios.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  audios.forEach((audio) => {
    initCards(audio);
  });
}
initSoundEffects();

function initCards(audio) {
  const cardMarkdown = createCardMarkdown(audio);
  cardContainer.insertAdjacentHTML('beforeend', cardMarkdown);
}

function createCardMarkdown(audio) {
  return ` 
  <div class="card">
  <img
    src="./production/assets/svg/logo.svg"
    alt="Add an Image..."
  />
  <div class="card-desc">
    <p>Sound ${audio}</p>
    <i
      onclick="playSound(0)" 
      class="fa-solid fa-play play-sound"></i>
  </div>
</div>
  `;
}
function playSound(i) {}
