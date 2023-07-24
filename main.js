const targetDate = new Date("2023-08-11T00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  const timerElement = document.getElementById("timer");
  timerElement.innerHTML = `${days} Օր: ${hours} Ժամ: ${minutes} Րոպե: ${seconds}  Վայրկյան`;

  // If the target date has passed, display a message and stop the countdown
  if (timeRemaining < 0) {
    clearInterval(countdown);
    timerElement.innerHTML = "The wait is over!";
  }
}, 1000); // Update every second

