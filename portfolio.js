
const button1Button = document.getElementById("button1");
const button2Button = document.getElementById("button2");
button1Button.onclick = () => {
  const id = document.getElementById("arm");
  const value = id.getAttribute('value');
  if(value < 90) {
    let plus = parseInt(value) + 10;
    id.style.left = plus + "%";
    id.setAttribute('value',plus);
  }
}

button2Button.onclick = () => {
  const id = document.getElementById("arm");
  const value = id.getAttribute('value');
  if(value > 0) {
    let minus = parseInt(value) - 10;
    id.style.left = minus + "%";
    id.setAttribute('value',minus);
  }
}
