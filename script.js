let turno = false;
let finish = false;
let paso1 = false;
let paso2 = false;
let paso3 = false;
let paso4 = false;
let paso5 = false;
let paso6 = false;
let paso7 = false;
let paso8 = false;
let paso9 = false;
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
uno.value = " ";
dos.value = " ";
tres.value = " ";
cuatro.value = " ";
cinco.value = " ";
seis.value = " ";
siete.value = " ";
ocho.value = " ";
nueve.value = " ";
function recargar() {
  uno.style.backgroundColor = "white";
  dos.style.backgroundColor = "white";
  tres.style.backgroundColor = "white";
  cuatro.style.backgroundColor = "white";
  cinco.style.backgroundColor = "white";
  seis.style.backgroundColor = "white";
  siete.style.backgroundColor = "white";
  ocho.style.backgroundColor = "white";
  nueve.style.backgroundColor = "white";
  finish = false;
  paso1 = false;
  paso2 = false;
  paso3 = false;
  paso4 = false;
  paso5 = false;
  paso6 = false;
  paso7 = false;
  paso8 = false;
  paso9 = false;
  uno.value = " ";
  dos.value = " ";
  tres.value = " ";
  cuatro.value = " ";
  cinco.value = " ";
  seis.value = " ";
  siete.value = " ";
  ocho.value = " ";
  nueve.value = " ";
  document.getElementById("winner").value = "";
}

function resolver() {
  //Horizontales
  if (
    uno.value == dos.value &&
    dos.value == tres.value &&
    (uno.value == "X" || uno.value == "O")
  ) {
    uno.style.backgroundColor = "yellow";
    dos.style.backgroundColor = "yellow";
    tres.style.backgroundColor = "yellow";
    finish = true;
    if (uno.value == "X") {
      document.getElementById("winner").value = "X WINS";
    } else {
      document.getElementById("winner").value = "O WINS";
    }
  }
  if (
    cuatro.value == cinco.value &&
    cinco.value == seis.value &&
    (cuatro.value == "X" || cuatro.value == "O")
  ) {
    cuatro.style.backgroundColor = "yellow";
    cinco.style.backgroundColor = "yellow";
    seis.style.backgroundColor = "yellow";
    finish = true;
    if (cuatro.value == "X") {
      document.getElementById("winner").value = "X WINS";
    } else {
      document.getElementById("winner").value = "O WINS";
    }
  }
  if (
    siete.value == ocho.value &&
    ocho.value == nueve.value &&
    (siete.value == "X" || siete.value == "O")
  ) {
    siete.style.backgroundColor = "yellow";
    ocho.style.backgroundColor = "yellow";
    nueve.style.backgroundColor = "yellow";
    finish = true;
    if (siete.value == "X") {
      document.getElementById("winner").value = "X WINS";
    } else {
      document.getElementById("winner").value = "O WINS";
    }
  }
  //verticales
  if (
    uno.value == cuatro.value &&
    cuatro.value == siete.value &&
    (uno.value == "X" || uno.value == "O")
  ) {
    uno.style.backgroundColor = "yellow";
    cuatro.style.backgroundColor = "yellow";
    siete.style.backgroundColor = "yellow";
    finish = true;
    if (uno.value == "X") {
      document.getElementById("winner").value = "X WINS";
    } else {
      document.getElementById("winner").value = "O WINS";
    }
  }
  if (
    dos.value == cinco.value &&
    cinco.value == ocho.value &&
    (dos.value == "X" || dos.value == "O")
  ) {
    dos.style.backgroundColor = "yellow";
    cinco.style.backgroundColor = "yellow";
    ocho.style.backgroundColor = "yellow";
    finish = true;
    if (dos.value == "X") {
      document.getElementById("winner").value = "X WINS";
    } else {
      document.getElementById("winner").value = "O WINS";
    }
  }
  if (
    tres.value == seis.value &&
    seis.value == nueve.value &&
    (tres.value == "X" || tres.value == "O")
  ) {
    tres.style.backgroundColor = "yellow";
    seis.style.backgroundColor = "yellow";
    nueve.style.backgroundColor = "yellow";
    finish = true;
    if (tres.value == "X") {
      document.getElementById("winner").value = "X WINS";
    } else {
      document.getElementById("winner").value = "O WINS";
    }
  }
  //diagonales
  if (
    siete.value == cinco.value &&
    cinco.value == tres.value &&
    (siete.value == "X" || siete.value == "O")
  ) {
    siete.style.backgroundColor = "yellow";
    cinco.style.backgroundColor = "yellow";
    tres.style.backgroundColor = "yellow";
    finish = true;
    if (siete.value == "X") {
      document.getElementById("winner").value = "X WINS";
    } else {
      document.getElementById("winner").value = "O WINS";
    }
  }
  if (
    uno.value == cinco.value &&
    cinco.value == nueve.value &&
    (uno.value == "X" || uno.value == "O")
  ) {
    uno.style.backgroundColor = "yellow";
    cinco.style.backgroundColor = "yellow";
    nueve.style.backgroundColor = "yellow";
    finish = true;
    if (uno.value == "X") {
      document.getElementById("winner").value = "X WINS";
    } else {
      document.getElementById("winner").value = "O WINS";
    }
  }
}
function funo() {
  if (turno && !paso1 && !finish) {
    uno.value = "X";
    turno = !turno;
    paso1 = true;
  }
  if (!turno && !paso1 && !finish) {
    uno.value = "O";
    turno = !turno;
    paso1 = true;
  }
}

function fdos() {
  if (turno && !paso2 && !finish) {
    dos.value = "X";
    turno = !turno;
    paso2 = true;
  }
  if (!turno && !paso2 && !finish) {
    dos.value = "O";
    turno = !turno;
    paso2 = true;
  }
}

function ftres() {
  if (turno && !paso3 && !finish) {
    tres.value = "X";
    turno = !turno;
    paso3 = true;
  }
  if (!turno && !paso3 && !finish) {
    tres.value = "O";
    turno = !turno;
    paso3 = true;
  }
}
function fcuatro() {
  if (turno && !paso4 && !finish) {
    cuatro.value = "X";
    turno = !turno;
    paso4 = true;
  }
  if (!turno && !paso4 && !finish) {
    cuatro.value = "O";
    turno = !turno;
    paso4 = true;
  }
}
function fcinco() {
  if (turno && !paso5 && !finish) {
    cinco.value = "X";
    turno = !turno;
    paso5 = true;
  }
  if (!turno && !paso5 && !finish) {
    cinco.value = "O";
    turno = !turno;
    paso5 = true;
  }
}
function fseis() {
  if (turno && !paso6 && !finish) {
    seis.value = "X";
    turno = !turno;
    paso6 = true;
  }
  if (!turno && !paso6 && !finish) {
    seis.value = "O";
    turno = !turno;
    paso6 = true;
  }
}
function fsiete() {
  if (turno && !paso7 && !finish) {
    siete.value = "X";
    turno = !turno;
    paso7 = true;
  }
  if (!turno && !paso7 && !finish) {
    siete.value = "O";
    turno = !turno;
    paso7 = true;
  }
}
function focho() {
  if (turno && !paso8 && !finish) {
    ocho.value = "X";
    turno = !turno;
    paso8 = true;
  }
  if (!turno && !paso8 && !finish) {
    ocho.value = "O";
    turno = !turno;
    paso8 = true;
  }
}
function fnueve() {
  if (turno && !paso9 && !finish) {
    nueve.value = "X";
    turno = !turno;
    paso9 = true;
  }
  if (!turno && !paso9 && !finish) {
    nueve.value = "O";
    turno = !turno;
    paso9 = true;
  }
}
