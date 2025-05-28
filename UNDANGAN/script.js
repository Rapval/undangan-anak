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

// Countdown
const targetDate = new Date("2025-06-10T00:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "Acara Sedang Berlangsung!";
    return;
  }

  const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
  const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `Countdown: ${hari}h ${jam}j ${menit}m ${detik}d`;
}, 1000);