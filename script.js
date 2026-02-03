const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  document.querySelector(".message").scrollIntoView({
    behavior: "smooth"
  });
});
