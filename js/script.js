document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const surprise = document.getElementById('surprise');
  const bgm = document.getElementById('bgm');

  revealBtn.addEventListener('click', () => {
    if (bgm.paused) {
      bgm.play().catch(() => {});
    }

    if (surprise.classList.contains('hidden')) {
      surprise.classList.remove('hidden');
      revealBtn.textContent = 'Скрыть';
    } else {
      surprise.classList.add('hidden');
      revealBtn.textContent = 'Открыть сюрприз';
    }
  });

  const heartsContainer = document.getElementById('hearts-container');
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => {
      heartsContainer.removeChild(heart);
    }, 5000);
  }

  setInterval(createHeart, 300);
});
