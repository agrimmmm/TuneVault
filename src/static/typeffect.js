const text = "About Us"; 
const delay = 100; 

let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, delay);
  }
}

type();
