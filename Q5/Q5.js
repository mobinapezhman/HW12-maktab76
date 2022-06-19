const clickBtn = document.getElementById("buttons");
clickBtn.addEventListener("click", (e) => {
  if (e.target.className === "buttonClass") {
    alert(e.target.className);
  } else {
    alert("Click!");
  }
});