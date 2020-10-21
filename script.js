window.onscroll = function() {changeNavClass()};

var navbar = document.getElementById("navbar");

function changeNavClass() {
  if (window.scrollY >= 100) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// window.onclick = function() {toggleNav()};
// var menu = document.getElementById("menu");

// function toggleNav(){
//   if (menu.classList.contains('active'))
// };


// document.getElementById('menu-btn').addEventListener('click', function(e) {
//   e.preventDefault();
//   toggleNav();
// });
