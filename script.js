    function updateCountdown() {
    const targetDate = new Date("August 12, 2025");
    const today = new Date();

    // Normalize time to avoid partial day issues
    targetDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = targetDate - today;
    const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);

    document.querySelector(".days-count p").textContent = diffDays;
  }

  updateCountdown();

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});