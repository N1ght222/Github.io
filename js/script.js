// Минимальная логика: показать скрытый блок и добавить простую анимацию
document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealBtn');
  const surprise = document.getElementById('surprise');
  const bgm = document.getElementById('bgm');
  document.getElementById('bgm').play() {
    bgm.play().catch(()=>{}); // начнёт играть при первом клике по странице
    document.body.removeEventListener('click', once);
  });

  revealBtn.addEventListener('click', () => {
    if (surprise.classList.contains('hidden')) {
      surprise.classList.remove('hidden');
      surprise.animate([{opacity:0, transform:'translateY(8px)'},{opacity:1, transform:'translateY(0)'}], {duration:400, easing:'ease-out'});
      revealBtn.textContent = 'Скрыть';
    } else {
      surprise.classList.add('hidden');
      revealBtn.textContent = 'Открыть сюрприз';
    }
  });
});
