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
  var searchscreen = document.getElementById('id01');
  
  window.onclick = function(event) {
    if (event.target == searchscreen) {
      searchscreen.style.display = "none";
    }
  }