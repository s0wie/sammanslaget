window.onscroll = () => {
  const nav = document.querySelector("nav");
  if (this.scrollY <= 40) nav.className = "";
  else nav.className = "show";
};
