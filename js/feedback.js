var feedbackOpen = document.querySelector(".btn-form");
var feedbackPopup = document.querySelector(".modal-content");
var feedbackClose = feedbackPopup.querySelector(".modal-content-close");

feedbackOpen.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.toggle("modal-content-show");
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && feedbackPopup.classList.contains("modal-content-show")) {
    feedbackPopup.classList.remove("modal-content-show");
  }
});