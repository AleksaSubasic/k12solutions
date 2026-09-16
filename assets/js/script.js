document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.querySelectorAll(".nav-toggle-bar").forEach(function (bar, i) {
        if (i === 0) bar.style.transform = open ? "translateY(3.5px) rotate(45deg)" : "none";
        if (i === 1) bar.style.opacity = open ? "0" : "1";
        if (i === 2) bar.style.transform = open ? "translateY(-3.5px) rotate(-45deg)" : "none";
      });
    });
  }
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var sign = btn.querySelector(".faq-sign");
      var open = item.classList.toggle("is-open");
      sign.textContent = open ? "\u2013" : "+";
    });
  });
  document.querySelectorAll(".kind-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".kind-btn").forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
    });
  });
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var submit = form.querySelector(".form-submit");
      submit.textContent = "Sent \u2014 we'll reply within a day";
      submit.disabled = true;
    });
  }
});
