const audio = document.getElementById('announcement-audio');
const backgroundMusic = document.getElementById('background-music');
const speechBubble = document.getElementById('speech-bubble');
const commandBtn = document.getElementById('command-btn');
const letter = document.getElementById('letter');
const curtainLeft = document.querySelector('.curtain-left');
const curtainRight = document.querySelector('.curtain-right');
const curtainText = document.querySelector('.curtain-text');

// Click anywhere on curtains or text to open
function openCurtains() {
    curtainLeft.classList.add('open');
    curtainRight.classList.add('open');
    curtainText.classList.add('hidden');
    audio.play();
}

curtainLeft.addEventListener('click', openCurtains);
curtainRight.addEventListener('click', openCurtains);
curtainText.addEventListener('click', openCurtains);

// When announcement finishes, show speech bubble/button and start background music
audio.addEventListener('ended', function() {
    speechBubble.classList.add('visible');
    commandBtn.classList.add('visible');
    backgroundMusic.play();
});

// When command button is clicked, change background, hide bubble/button, and show letter
commandBtn.addEventListener('click', function() {
    document.body.style.backgroundImage = "url('chestopen.jpg')";
    speechBubble.style.display = 'none';
    commandBtn.style.display = 'none';
    letter.classList.add('unfurled');
});