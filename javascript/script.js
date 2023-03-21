window.onload = function () {
  const sectionHeroEl = document.querySelector(".hero-header");

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);

      if (ent.isIntersecting === false) {
        document.querySelector(".navigation").classList.add("sticky");
      }

      if (ent.isIntersecting === true) {
        document.querySelector(".navigation").classList.remove("sticky");
      }
    },
    {
      // In the viewport
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );

  document
    .querySelector(".card-two")
    .addEventListener("mouseover", function () {
      document.querySelector(".card-two").classList.add("center-card");
      document.querySelector(".card-one").classList.remove("center-card");
      document.querySelector(".card-three").classList.remove("center-card");
    });
  document
    .querySelector(".card-one")
    .addEventListener("mouseover", function () {
      document.querySelector(".card-two").classList.remove("center-card");
      document.querySelector(".card-one").classList.add("center-card");
      document.querySelector(".card-three").classList.remove("center-card");
    });
  document
    .querySelector(".card-three")
    .addEventListener("mouseover", function () {
      document.querySelector(".card-two").classList.remove("center-card");
      document.querySelector(".card-one").classList.remove("center-card");
      document.querySelector(".card-three").classList.add("center-card");
    });
  /*
  document.getElementById("testimonial-3").onmouseenter = function () {
    mouseEnter();
    reduce();
  };
  document.getElementById("testimonial-3").onmouseleave = function () {
    mouseLeave();
  };
*/
  obs.observe(sectionHeroEl);
};
function reduce() {
  document.querySelector(".testimonials").clientHeight -= "1100px";
}
function mouseEnter() {
  document.querySelector(".testimonial-face-3").classList.add("mousehovering");
}
function mouseLeave() {
  document
    .querySelector(".testimonial-face-3")
    .classList.remove("mousehovering");
}
