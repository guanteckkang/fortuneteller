const windowH = document.getElementById("window-height");
const windowW = document.getElementById("window-width");
windowW.innerHTML = "Width: " + screen.width + "px";
windowH.innerHTML = "Height: " + screen.height + "px";

const newTab = document.getElementById("new-tab");
newTab.addEventListener("click", () => {
  window.open();
});
const window_href = document.getElementById("window-href");
const window_hostname = document.getElementById("window-hostname");
const window_pathname = document.getElementById("window-pathname");
const window_protocol = document.getElementById("window-protocol");

window_href.innerHTML = "herf: " + window.location.href;
window_hostname.innerHTML = "hostname: " + window.location.hostname;
window_pathname.innerHTML = "pathname: " + window.location.pathname;
window_protocol.innerHTML = "protocol: " + window.location.protocol;
function assign() {
  window.location.assign("https://www.w3schools.com");
}
