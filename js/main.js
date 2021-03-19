(function(){
  // Initialise AOS
  AOS.init();

  // Open menu w/ hamburger icon
  var nav = document.querySelector(".header__nav"),
      navTrigger = document.querySelector(".menu-trigger"),
      menuBtn = document.getElementById("menuBtn");

  if (navTrigger) {
    navTrigger.addEventListener("click",
    function(e) {
      nav.classList.toggle("header__nav--open");
      menuBtn.classList.toggle("menu-trigger--open");
      e.preventDefault();
    }, false);
  }

  window.onscroll = function() {
    // On scroll, Add class to logo + menu btn, display back-to-top btn
    var menuBtn = document.getElementById("menuBtn"),
        headerLogo = document.getElementById("headerLogo"),
        topBtn = document.getElementById("topBtn");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      menuBtn.classList.add("menu-trigger--scrolled");
      headerLogo.classList.add("header__logo--scrolled");
      topBtn.style.display = "flex";
    } else {
      menuBtn.classList.remove("menu-trigger--scrolled");
      headerLogo.classList.remove("header__logo--scrolled");
      topBtn.style.display = "none";
    }
  };
})();
