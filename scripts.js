//Smooth scroll to sections

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

//Typewriter effect

const phrases = ["a passionate tinkerer", "a developer", "a builder"];
const typedText = document.getElementById("typed-text");
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[currentPhraseIndex];

  if (isDeleting) {
    currentCharIndex--;
    if (currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  } else {
    currentCharIndex++;
    if (currentCharIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1000);
      typedText.textContent = currentPhrase;
      return;
    }
  }

  typedText.textContent = currentPhrase.substring(0, currentCharIndex);

  setTimeout(typeLoop, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeLoop);

//Matrix Overlay
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Set canvas to full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = "アァイィウヴエエカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモラリルレロワヲン0123456789ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяअआइईउऊऋॠऌॡएऐओऔअंअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ𓀀𓀁𓀂𓀃𓀄𓀅𓀆𓀇𓀈𓀉𓁀𓁁𓁂𓁃𓁄𓁅𓁆𓁇𓂀𓂁𓂂𓂃𓂄𓂅𓃀𓃁𓃂𓃃𓃄𓃅𓆓𓆔𓆕𓆖𓆗𓆘";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrixRain() {
  // Fade out with translucent black
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF00"; // neon green
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrixRain, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
