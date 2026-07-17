// Navbar Scroll Effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: .15
});

document.querySelectorAll(".fade-up,.fade-left,.fade-right")
  .forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {

  const winScroll = document.documentElement.scrollTop;

  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrolled = (winScroll / height) * 100;

  document.querySelector(".progress-bar").style.width = scrolled + "%";

});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((box) => {

    const top = box.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

      box.classList.add("active");

    }

  });

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const update = () => {

    const target = +counter.dataset.target;

    const current = +counter.innerText;

    const increment = target / 120;

    if (current < target) {

      counter.innerText = Math.ceil(current + increment);

      setTimeout(update, 20);

    } else {

      counter.innerText = target + "+";

    }

  };

  update();

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  topBtn.style.display = window.scrollY > 500 ? "block" : "none";

});

topBtn.onclick = () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

};
lucide.createIcons();