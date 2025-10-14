const bg = document.getElementById("bg");
const jumlahCircle = 30;

for (let i = 0; i < jumlahCircle; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const size = Math.random() * 80 + 7;

  circle.style.width = size + "px";
  circle.style.height = size + "px";

  const position = Math.random() * 100;

  circle.style.left = position + "%";
  circle.style.top = "100%";

  const duration = Math.random() * 7 + 5;

  circle.style.animationDuration = duration + "s";

  bg.appendChild(circle);
}

// animasi background2

document.querySelectorAll(".bg2").forEach((bg) => {
  const jumlahPartikel = 30;
  for (let i = 0; i < jumlahPartikel; i++) {
    const partikel = document.createElement("div");
    partikel.classList.add("bg-partikel");

    const ukuran = Math.random() * 6 + 3;
    partikel.style.width = ukuran + "px";
    partikel.style.height = ukuran + "px";

    partikel.style.left = Math.random() * 100 + "%";
    partikel.style.top = Math.random() * 100 + "%";

    const durasi = Math.random() * 12 + 6;
    partikel.style.animationDuration = durasi + "s";

    bg.appendChild(partikel);
  }
});

// link

document.querySelectorAll(".github").forEach((el) => {
  el.addEventListener("click", () => {
    setTimeout(() => {
      window.location.href =
        "https://github.com/alldfind?tab=overview&from=2025-09-01&to=2025-09-27";
    }, 1000);
  });
});

document.querySelectorAll(".instagram").forEach((el) => {
  el.addEventListener("click", () => {
    setTimeout(() => {
      window.location.href = "https://www.instagram.com/alldfind/?next=%2F";
    }, 1000);
  });
});

document.querySelectorAll(".email").forEach((el) => {
  el.addEventListener("click", () => {
    setTimeout(() => {
      window.location.href = "mailto:thefallofaldy@gmail.com";
    }, 1000);
  });
});

const bgimg = document.getElementById("bgimg");
const close = document.querySelector(".close");
const fullimg = document.getElementById("fullimg");
const nav = document.getElementById("navbar");

document.querySelectorAll(".clickimg").forEach((img) => {
  img.addEventListener("click", () => {
    bgimg.style.display = "flex";
    fullimg.src = img.src;

    nav.style.animation = "none";
    nav.style.transform = "translateY(-100%)";
  });
});

close.addEventListener("click", () => {
  bgimg.style.display = "none";
  nav.style.transform = "translateY(0)";
});

bgimg.addEventListener("click", (e) => {
  if (e.target !== fullimg) {
    bgimg.style.display = "none";
    nav.style.transform = "translateY(0)";
  }
});

const showIn = document.querySelectorAll(".in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

showIn.forEach((el) => observer.observe(el));

// fix bug sticky gajelas

const navbar = document.getElementById("navbar");
const nextSection = navbar.nextElementSibling;
const navTop = navbar.offsetTop;
const navHeight = navbar.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY >= navTop) {
    navbar.classList.add("fixed");
    nextSection.style.marginTop = navHeight + "px";
  } else {
    navbar.classList.remove("fixed");
    nextSection.style.marginTop = "0";
  }
});
