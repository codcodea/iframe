

// Här endast kod för att visa meddelanden, ingår inte i frågan  //

const message1 = "Problem formulation: <br /> We have a resposive iframe with content loaded. Try to resize to browser window."
const message2 = "We may scroll and interact with the content of the iframe. <br /> Mouse click will enter image view. ESC will exit. Back/forward with array keys. <br />"
const message3 = "Now, if we want to add a device on top of the iframe we can see, the content is longer responsive. <br />"



const elem = document.getElementById('message');
const ok = document.getElementById('info-button');
const toggle = document.getElementById('toggle-button');
const info = document.getElementById('info');
const macbook = document.getElementById('macbook');




// Toggle device on/off
toggle.addEventListener('click', () => macbook.classList.toggle("active"));

let message = 1;
elem.innerHTML = message1;

ok.addEventListener('click', () => {
  if(message === 1) {
    elem.innerHTML = message2;
    message++;
  } else if(message === 2) {
    elem.innerHTML = message3;
    toggle.style.display = 'block';
    macbook.classList.toggle("active");
    message++;
  } else {
    info.style.display = 'none';
  }
})