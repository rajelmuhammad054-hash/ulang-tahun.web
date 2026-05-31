// =========================
// 🎵 FADE IN MUSIC
// =========================
function fadeInMusic(audio, duration = 4000) {

  audio.volume = 0;

  audio.play().catch(() => {
    console.log("Autoplay diblokir");
  });

  let volume = 0;

  const step = 50;
  const increment = step / duration;

  const fade = setInterval(() => {

    volume += increment;

    if(volume >= 1){
      volume = 1;
      clearInterval(fade);
    }

    audio.volume = volume;

  }, step);
}


// =========================
// ⏳ ELEMENT
// =========================
let count = 3;

const countdownText = document.getElementById("countdown");
const countdownPage = document.getElementById("countdownPage");
const birthdayPage = document.getElementById("birthday");
const memoryPage = document.getElementById("memoryPage");
const wishBox = document.getElementById("wishBox");
const music = document.getElementById("bgMusic");


// =========================
// ⏳ COUNTDOWN
// =========================
const timer = setInterval(() => {

  count--;

  if(count > 0){

    countdownText.innerHTML = count;

  }else{

    countdownText.innerHTML = "🎉";

    clearInterval(timer);

    setTimeout(() => {

      // tampil birthday page
      countdownPage.style.display = "none";
      birthdayPage.classList.add("show");

      // tampil ucapan
      setTimeout(() => {
        wishBox.classList.add("show");
      }, 800);

      // mulai musik
      fadeInMusic(music, 4000);

      // mulai slide ucapan
      startTextSlide();

      // =========================
      // ⏳ PINDAH MEMORY PAGE
      // =========================
      setTimeout(() => {

        birthdayPage.style.display = "none";

        memoryPage.style.display = "flex";
        memoryPage.classList.add("show");

        music.volume = 1;

        // mulai slide foto
        startPhotoSlide();

        // mulai slide quotes
        startMemoryTextSlide();

      }, 15000);

    }, 1000);

  }

}, 1000);


// =========================
// 🎊 CONFETTI
// =========================
for(let i = 0; i < 150; i++){

  const confetti = document.createElement("div");

  confetti.classList.add("confetti");

  confetti.style.left = Math.random() * 100 + "vw";

  confetti.style.animationDuration =
    (Math.random() * 3 + 2) + "s";

  confetti.style.opacity = Math.random();

  const colors = [
    "#ff4081",
    "#7c4dff",
    "#00e676",
    "#ffea00",
    "#00b0ff",
    "#ff9100"
  ];

  confetti.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(confetti);
}


// =========================
// 🖼️ SLIDE FOTO
// =========================
function startPhotoSlide(){

  const images =
    document.querySelectorAll(".photo-grid img");

  if(!images.length) return;

  let index = 0;

  images.forEach((img, i) => {

    img.style.position = "absolute";
    img.style.left = "50%";
    img.style.transform = "translateX(-50%)";

    img.style.opacity =
      i === 0 ? "1" : "0";

    img.style.transition =
      "opacity 1s ease";

  });

  setInterval(() => {

    images[index].style.opacity = "0";

    index++;

    if(index >= images.length){
      index = 0;
    }

    images[index].style.opacity = "1";

  }, 3000);

}


// =========================
// 💌 SLIDE UCAPAN
// =========================
function startTextSlide(){

  const textSlides =
    document.querySelectorAll(".text-slide");

  if(!textSlides.length) return;

  let textIndex = 0;

  setInterval(() => {

    textSlides[textIndex]
      .classList.remove("active");

    textIndex++;

    if(textIndex >= textSlides.length){
      textIndex = 0;
    }

    textSlides[textIndex]
      .classList.add("active");

  }, 4000);

}


// =========================
// 💖 SLIDE MEMORY TEXT
// =========================
function startMemoryTextSlide(){

  const memoryTexts =
    document.querySelectorAll(".memory-text");

  if(!memoryTexts.length) return;

  let memoryIndex = 0;

  setInterval(() => {

    memoryTexts[memoryIndex]
      .classList.remove("active");

    memoryIndex++;

    if(memoryIndex >= memoryTexts.length){
      memoryIndex = 0;
    }

    memoryTexts[memoryIndex]
      .classList.add("active");

  }, 3000);

}