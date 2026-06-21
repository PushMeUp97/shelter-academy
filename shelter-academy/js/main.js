/* ===================================================================
   Shelter Academy — main.js
   Handles: mobile nav toggle, Academy dropdown (click + keyboard),
   active-link highlighting, and a subtle scroll reveal.
   =================================================================== */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  /* ---------- Academy dropdown ---------- */
  var dropdownToggle = document.querySelector(".dropdown-toggle");
  var dropdownMenu = document.getElementById("academyMenu");

  function closeDropdown() {
    if (!dropdownMenu || !dropdownToggle) return;
    dropdownMenu.classList.remove("is-open");
    dropdownToggle.setAttribute("aria-expanded", "false");
  }

  function openDropdown() {
    if (!dropdownMenu || !dropdownToggle) return;
    dropdownMenu.classList.add("is-open");
    dropdownToggle.setAttribute("aria-expanded", "true");
  }

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      var isOpen = dropdownMenu.classList.contains("is-open");
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    // Close when clicking outside, but not on small screens where the
    // dropdown behaves like an inline accordion inside the open nav.
    document.addEventListener("click", function (event) {
      if (window.innerWidth > 860 && !dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        closeDropdown();
      }
    });

    // Escape closes the dropdown and returns focus to the toggle.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && dropdownMenu.classList.contains("is-open")) {
        closeDropdown();
        dropdownToggle.focus();
      }
    });
  }

  /* ---------- Active link highlighting ---------- */
  var currentFile = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a, .dropdown-menu a").forEach(function (link) {
    var linkFile = link.getAttribute("href").split("/").pop();
    if (linkFile === currentFile) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
      var parentDropdown = link.closest(".has-dropdown");
      if (parentDropdown) {
        var toggle = parentDropdown.querySelector(".dropdown-toggle");
        if (toggle) toggle.classList.add("is-active");
      }
    }
  });

  /* ---------- Subtle scroll reveal (respects reduced motion) ---------- */
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (revealEls.length && !prefersReducedMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
