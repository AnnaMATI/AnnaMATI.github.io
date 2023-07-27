// const targetDate = new Date("2023-08-11T00:00:00").getTime();

// // Update the countdown every second
// const countdown = setInterval(() => {
//   const now = new Date().getTime();
//   const timeRemaining = targetDate - now;

//   // Calculate days, hours, minutes, and seconds
//   const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//   // Display the countdown
//   const timerElement = document.getElementById("timer");
//   timerElement.innerHTML = `${days}օր:${hours}ժամ:${minutes}րոպե:${seconds}վայրկյան `;
// ;

//   // If the target date has passed, display a message and stop the countdown
//   if (timeRemaining < 0) {
//     clearInterval(countdown);
//     timerElement.innerHTML = "The wait is over!";
  


//   }
// }, 1000); // Update every second

// Your existing JavaScript code remains the same

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


  // timerElement.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

  // Display the countdown
  const daysElement = document.getElementById("days" );
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  
  daysElement.innerHTML = days ;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;

  // If the target date has passed, display a message and stop the countdown
  if (timeRemaining < 0) {
    clearInterval(countdown);
    daysElement.innerHTML = "0";
    hoursElement.innerHTML = "0";
    minutesElement.innerHTML = "0";
    secondsElement.innerHTML = "0";
    document.getElementById("timer").innerHTML = "The wait is over!";
  }
}, 1000); // Update every second 
