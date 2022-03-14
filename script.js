const time = document.querySelector("#time"),
  text = document.querySelector("#text"),
  name = document.querySelector("#name"),
  weekday = document.querySelector("#weekday");
const showAmPm = true;

const showTime = () => {
  let today = new Date();
  (hour = today.getHours()),
    (min = today.getMinutes()),
    (sec = today.getSeconds());

  const amPm = hour >= 12 ? "PM" : "AM"; // тернарный оператор тк переменная
  hour = hour % 12 || 12;

  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} ${amPm}`;

  setTimeout(showTime, 1000);
};

const addZero = (number) => (number < 10 ? "0" + number : number); //если функция без фигурных скобок, в одно дейсвие,  то return  писать не нужно

const setBg = () => {
  let today = new Date();
  hour = today.getHours();

  if (hour < 12) {
    text.textContent = "Good morning!";
    document.body.style.backgroundImage = 'url("assets/1.jpg")';
  } else if (hour < 18) {
    text.textContent = "Good afternoon!";
    document.body.style.backgroundImage = 'url("assets/2.jpg")';
  } else {
    text.textContent = "Good evening!";
    document.body.style.backgroundImage = 'url("assets/0.jpg")';
  }
};

const showWeekday = () => {
  let today = new Date();
  (day = today.getUTCDate()),
    (month = today.toLocaleString("default", { month: "long" })),
    (year = today.getUTCFullYear());

  weekday.innerHTML = `${day}<span> </span>${month}<span> </span>${year}<span>  ||  </span>`;
};

const setName = (e) => {
  if (e.type === "keypress") {
    if (e.key === "Enter") {
      localStorage.setItem("name", e.target.innerHTML);
      name.blur();
    }
    localStorage.setItem("name", e.target.innerHTML);
  }
};

const getName = () => {
  if (
    localStorage.getItem("name") === null ||
    localStorage.getItem("name").lenght === 0
  ) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};

showTime();
setBg();
showWeekday();
name.addEventListener("keypress", setName);
getName();
