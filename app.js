const hamburger = document.querySelector("#hamburger");
const clonse_modal = document.querySelector("#clonse_modal");

const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon");
const contain_contact = document.querySelector(".contain_contact");
const body = document.querySelector("body");
const hLinks = document.querySelectorAll("#hLink");

clonse_modal.addEventListener("click", () => {
  menu.classList.remove("showToggle");
});

hamburger.addEventListener("click", () => {
  menu.classList.add("showToggle");
});

hLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("showToggle");
  });
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
  contain_contact.classList.toggle("dark");
});

// Animation au clic sur la navbar

$(document).ready(function() {
  //Off Canvas Menu Slide
  // $(".menu-toggle").click(function () {
  //   $('nav').toggleClass('nav-hide')
  // });

  //Page Scroll To
  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top
      },
      900,
      "swing",
      function() {
        window.location.hash = target;
      }
    );
  });
  // Extra Portfolio Gallery
  $(".show-more-btn").click(function() {
    $(".hidden-gallery").toggle("slow");
  });
});
