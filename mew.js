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

document.querySelectorAll(".clickimg").forEach((img) => {
  img.addEventListener("click", () => {
    bgimg.style.display = "flex";
    fullimg.src = img.src;
  });
});

close.addEventListener("click", () => {
  bgimg.style.display = "none";
});

bgimg.addEventListener("click", (e) => {
  if (e.target !== fullimg) {
    bgimg.style.display = "none";
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

// const newShow = document.querySelectorAll(".in2")

// const content = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add(".show2");
//         content.unobserve(entry.target);
//       }
//     });
//   }, {threshold: 0.5}
// );

// newShow.forEach((el) => content.observer(el));
