window.onscroll = function() {changeNavClass()};

var navbar = document.getElementById("navbar");

function changeNavClass() {
  if (window.scrollY >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
