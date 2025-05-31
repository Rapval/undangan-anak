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

const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-06-10T06:00:00Z").getTime(); // 14:00 WITA == 06:00 UTC

setInterval(() => {
  const now = new Date().getTime(); // Waktu lokal pengguna
  const nowUTC = now + (new Date().getTimezoneOffset() * 60000); // Konversi ke UTC

  const distance = targetDate - nowUTC;

  if (distance < 0) {
    countdown.innerHTML = "Acara Sedang Berlangsung!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `⏳ ${days}D ${hours}H ${minutes}M ${seconds}S`;
}, 1000);
