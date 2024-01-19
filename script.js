// Temperature conversion programe
const button = document.getElementById("button");
const textbox = document.getElementById("textbox");
const toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result");

button.onclick = () => {
  let flag = Boolean(textbox.value);
  if (flag) {
    if (toFah.checked) {
      temp = Number(textbox.value);
      const res = temp * (9 / 5) + 32;
      result.textContent = temp + "°C is equal to " + res.toFixed(4) + "°F";
      result.style.color = "green";
    } else if (toCel.checked) {
      temp = Number(textbox.value);
      const res = (5 / 9) * (temp - 32);
      result.textContent = temp + "°F is equal to " + res.toFixed(4) + "°C";
      result.style.color = "green";
    } else {
      result.textContent = "Select a unit.";
      result.style.color = "red";
    }
  } else {
    window.alert("Please enter a number");
  }
};
