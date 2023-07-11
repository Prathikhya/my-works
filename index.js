/**
 * udflisligsligjsligsljgl
 */
let menuIcons = document.querySelector("#menuicon");
let navbar = document.querySelector(".nav_sec");

menuIcons.onClick = () => {
  menuIcons.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*--------------------navbar show active  menu ------------------------------*/
let sections = document.querySelectorAll("section");
let navsec = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navsec.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*-------removing menu mobile sticky navbar -------------------------*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcons.classList.remove("bx-x");
  navbar.classList.remove("active");
};
/**--------------scorilling srgrection activity ljjjinks */
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal(".home1, .he2", { origin: "top" });
ScrollReveal().reveal(".photobox, .home-img, .abutme-img, form", {
  origin: "bottom"
});
/**change background header */
