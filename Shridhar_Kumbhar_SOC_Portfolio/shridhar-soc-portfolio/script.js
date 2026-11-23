const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

const copyButton = document.getElementById("copyEmail");
const toast = document.getElementById("toast");
copyButton.addEventListener("click", async () => {
  const email = "shridhargk2004@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    toast.textContent = "Email copied to clipboard";
  } catch {
    toast.textContent = email;
  }
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
});
