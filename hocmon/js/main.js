// MAIN
function openMain() {
  document.getElementById("main").style.display = "block";
}

function closeMain() {
  document.getElementById("main").style.display = "none";
}

// NAVIGATION
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// POPUP BOX
var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// HƯỚNG DẪN BOX
function openHowto() {
  document.getElementById("").style.display = "block";
  closeNav();
  closeMain()
}

function closeHowto() {
  document.getElementById("").style.display = "none";
  openMain()
}

function openIntro() {
  document.getElementById("").style.display = "block";
  closeNav();
  closeMain()
}

function closeIntro() {
  document.getElementById("").style.display = "none";
  openMain()
}