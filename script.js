// Toggle the hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Disable Right-Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable basic developer shortcuts (optional)
document.addEventListener("keydown", (event) => {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) ||
    (event.ctrlKey && event.key === "U")
  ) {
    event.preventDefault();
  }
});


// ⚠️ Optional: DevTools detection — comment out to avoid breaking normal use

const detectDevTools = () => {
  const threshold = 160;
  if (
    window.outerHeight - window.innerHeight > threshold ||
    window.outerWidth - window.innerWidth > threshold
  ) {
    alert("Developer tools are open.");
    // window.location.href = "about:blank"; // 🚫 Avoid this — it breaks usability
  }
};

setInterval(detectDevTools, 1000);

// Prevent console access using bait element (optional)
setInterval(() => {
  const bait = new Image();
  bait.__defineGetter__("id", () => {
    alert("Developer tools are not allowed.");
    // window.location.href = "about:blank";
  });
  console.log("%c", bait);
}, 1000);
