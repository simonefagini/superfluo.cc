/* shake after delay */
function triggerShake() {
  const div = document.getElementById("test");
  div.classList.add("shake");

  
  setTimeout(() => {
    div.classList.remove("shake");
  }, 500);
}


setTimeout(() => {
  triggerShake();
  setInterval(triggerShake, 7000); // 7 seconds
}, 7000); // 7 seconds

