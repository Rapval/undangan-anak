// Nama tamu dari URL
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('untuk');
if (namaTamu) {
  document.getElementById('nama-tamu').innerText = decodeURIComponent(namaTamu);
}

// Musik
function playMusic() {
  const music = document.getElementById('bg-music');
  music.play();
}

// Lottie animasi
lottie.loadAnimation({
  container: document.getElementById('lottie-anim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://lottie.host/48e23d4d-b33f-4c2e-918b-4e5f7900b6e3/8ZSGDDEQl6.json'
});

// Toggle galeri
function toggleGallery() {
  const galeri = document.getElementById('gallery');
  galeri.style.display = galeri.style.display === 'block' ? 'none' : 'block';
}

function getUTCTimeOffset(hoursOffset) {
  const now = new Date();
  return Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours() + hoursOffset,
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
}

// Target waktu: 10 Juni 2025 jam 14:00 WITA (GMT+8)
const targetDate = Date.UTC(2025, 5, 10, 6, 0, 0); // 14:00 WITA == 06:00 UTC
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime(); // Ini dalam lokal timezone
  const utcNow = new Date(
    new Date().toLocaleString("en-US", { timeZone: "UTC" })
  ).getTime();

  const distance = targetDate - utcNow;

  if (distance < 0) {
    countdown.innerHTML = "Acara Sedang Berlangsung!";
    return;
  }

  const Day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const Second = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `Countdown: ${Day}D ${Hours}H ${Minutes}M ${Second}S`;
}, 1000);
