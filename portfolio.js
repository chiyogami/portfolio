
const button1Button = document.getElementById("button1");
const button2Button = document.getElementById("button2");

var timer1;
var timer2;

button1Button.addEventListener('pointerdown', () => {
  clearInterval(timer1);
  clearInterval(timer2);
  timer1 = setInterval(button1, 20);

  document.querySelector('#button1').addEventListener('contextmenu', contextmenu);

  function contextmenu(e) {
    e.preventDefault();
  }
});

function button1() {
  const id = document.getElementById("arm");
  const value = id.getAttribute('value');
  if(value < 90) {
    let plus = parseInt(value) + 1;
    id.style.left = plus + "%";
    id.setAttribute('value',plus);
  }
}

button1Button.addEventListener('pointerup', () => {
  clearInterval(timer1);
});

button2Button.addEventListener('pointerdown', () => {
  clearInterval(timer1);
  clearInterval(timer2);
  timer2 = setInterval(button2, 20);

  document.querySelector('#button2').addEventListener('contextmenu', contextmenu);
  
  function contextmenu(e) {
    e.preventDefault();
  }
});

function button2() {
  const id = document.getElementById("arm");
  const value = id.getAttribute('value');
  if(value > 0) {
    let minus = parseInt(value) - 1;
    id.style.left = minus + "%";
    id.setAttribute('value',minus);
  }
}

button2Button.addEventListener('pointerup', () => {
  clearInterval(timer2);
});
