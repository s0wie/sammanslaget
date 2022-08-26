window.onscroll = () => {
  const nav = document.querySelector("nav");
  if (this.scrollY <= 40) nav.className = "";
  else nav.className = "show";
};

const game = document.querySelector(".game");

setTimeout(() => {
  game.src = "Build/index.html";
}, 5000);
