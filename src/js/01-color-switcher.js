function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  const body = document.body;

  let intervalId;
  let isColorChanging = false;

  startBtn.addEventListener('click', () => {
    if (isColorChanging) return;

    isColorChanging = true;
    startBtn.disabled = true;

    intervalId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });

  stopBtn.addEventListener('click', () => {
    if (!isColorChanging) return;

    clearInterval(intervalId);

    isColorChanging = false;

    startBtn.disabled = false;
  });
  // dodaje komentarz zeby zaaktualizowac page