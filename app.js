const dayOfWeekElement = document.getElementById("dayOfWeek");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const currentDate = new Date();
console.log(currentDate);

const currentDayIndex = currentDate.getDay();

dayOfWeekElement.textContent = daysOfWeek[currentDayIndex];

function updateUTCTimeShortMilliseconds() {
  const currentUTCDate = new Date();

  const currentTimeUTCInMilliseconds = currentUTCDate.getTime();

  const millisecondsRounded = Math.floor(currentTimeUTCInMilliseconds / 10); // This rounds to the nearest 10 milliseconds

  // Display the shortened UTC time in milliseconds
  let utcTime = document.querySelector("#utcTimeShortMilliseconds");

  utcTime.textContent = millisecondsRounded;
}

// Call the updateUTCTimeShortMilliseconds function to initially display the time
updateUTCTimeShortMilliseconds();

// Update the UTC time in shortened milliseconds every second
setInterval(updateUTCTimeShortMilliseconds, 1000);
