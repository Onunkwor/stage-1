const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
elements.forEach((element) => observer.observe(element));

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

function updateUTCTime() {
  // Create a new Date object for the current UTC time
  const currentUTCDate = new Date();

  // Get the UTC components: hours, minutes, and seconds
  const hours = currentUTCDate.getUTCHours();
  const minutes = currentUTCDate.getUTCMinutes();
  const seconds = currentUTCDate.getUTCSeconds();

  // Format the time as a string (HH:MM:SS)
  const currentTimeUTC = `${hours
    .toString()
    .padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Display the UTC time in the "utcTime" paragraph
  document.getElementById("utcTime").textContent = currentTimeUTC;
}

// Call the updateUTCTime function to initially display the time
updateUTCTime();

// Update the UTC time every second
setInterval(updateUTCTime, 1000);
