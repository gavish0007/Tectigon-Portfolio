// Navbar Scroll Effect
const header = document.querySelector("header");
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Mobile Nav Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll Reveal Animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-up, .fade-left, .fade-right").forEach(el => observer.observe(el));

// Progress Bar
const progressBar = document.querySelector(".progress-bar");
if (progressBar) {
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = (document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    progressBar.style.width = scrolled + "%";
  });
}

// Scroll Reveals
const reveals = document.querySelectorAll(".reveal");
if (reveals.length > 0) {
  window.addEventListener("scroll", () => {
    reveals.forEach((box) => {
      const top = box.getBoundingClientRect().top;
      if (top < window.innerHeight - 120) {
        box.classList.add("active");
      }
    });
  });
}

// Animated Counters
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target || 0;
    const current = +counter.innerText || 0;
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

// Back to Top Button
const topBtn = document.getElementById("topBtn");
if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 500 ? "block" : "none";
  });

  topBtn.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
}
