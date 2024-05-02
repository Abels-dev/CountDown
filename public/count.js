const showDay = document.getElementById("day");
const showHour = document.getElementById("hour");
const showMinute = document.getElementById("minute");
const showSeconds = document.getElementById("second");
const inputValues = document.querySelectorAll(".input");
const startBtn = document.getElementById("start");
const eventTitle = document.getElementById("title");
const showTitle = document.getElementById("showTitle");
const acceptBoard = document.querySelector(".accept");
const showBoard = document.querySelector(".show");
const timeAnimation = document.querySelectorAll(".inner");
const restartBtn = document.getElementById("restart");
let day = 0;
let hour = 0;
let minute = 0;
let second = 0;
let total = 0;
let eventName = "Your event";
let interval;

startBtn.onclick = () => {
   showBoard.classList.remove("hidden");
   acceptBoard.classList.add("hidden");
   if (eventTitle.value != "") {
      showTitle.textContent = ` ${eventTitle.value} Loading...`;
      eventName = eventTitle.value;
   }
   day = Number(inputValues[0].value);
   hour = Number(inputValues[1].value);
   minute = Number(inputValues[2].value);
   second = Number(inputValues[3].value);
   if (day > 0) total += day * 86400;
   if (hour > 0) total += hour * 3600;
   if (minute > 0) total += minute * 60;
   if (second > 0) total += second;
   interval = setInterval(countDown, 1000);
   inputValues.forEach((input) => (input.value = ""));
   eventTitle.value = "";
};
restartBtn.onclick = () => {
   showBoard.classList.add("hidden");
   acceptBoard.classList.remove("hidden");
   showTitle.textContent = "Your event loading...";
   eventName="Your event"
   total = 0;
};
function countDown() {
   if (total == 0) {
      showTitle.textContent = `countDown ended it is time for ${eventName}`;
      clearInterval(interval);
   }
   if (second > 0) {
      second--;
   } else if (second == 0) {
      if (minute > 0) {
         timeAnimation[2].classList.toggle("slide-up");
         minute--;
         second = 59;
      } else if (minute == 0) {
         if (hour > 0) {
            timeAnimation[1].classList.toggle("slide-up");
            hour--;
            minute = 59;
            second = 59;
         } else if (hour == 0) {
            if (day > 0) {
               timeAnimation[0].classList.toggle("slide-up");
               day--;
               hour = 23;
               minute = 59;
               second = 59;
            }
         }
      }
   }
   showDay.textContent = `${day} Day`;
   showHour.textContent = `${hour} Hour`;
   showMinute.textContent = `${minute} Minute`;
   showSeconds.textContent = `${second} Second`;
   total--;
}
