document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const surprise = document.getElementById('surprise');
  const bgm = document.getElementById('bgm');

  revealBtn.addEventListener('click', () => {
    // Запуск музыки при первом нажатии
    if (bgm.paused) {
      bgm.play().catch(() => {});
    }

    // Логика открытия/скрытия сюрприза
    if (surprise.classList.contains('hidden')) {
      surprise.classList.remove('hidden');
      surprise.animate(
        [
          { opacity: 0, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 400, easing: 'ease-out' }
      );
      revealBtn.textContent = 'Скрыть';
    } else {
      surprise.classList.add('hidden');
      revealBtn.textContent = 'Открыть сюрприз';
    }
  });
});
