// Минимальная логика: показать скрытый блок и добавить простую анимацию
document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const surprise = document.getElementById('surprise');
  const bgm = document.getElementById('bgm');

  // Запускаем музыку при первом клике по странице
  function startMusic() {
    bgm.play().catch(() => {});
    document.body.removeEventListener('click', startMusic);
  }
  document.body.addEventListener('click', startMusic);

  // Логика кнопки сюрприза
  revealBtn.addEventListener('click', () => {
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
