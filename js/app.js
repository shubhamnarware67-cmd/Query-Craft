/* ==========================================================================
   QueryCraft — App bootstrap
   Handles: intersection-observer reveals, hero entrance, footer year.
   ========================================================================== */

(function () {
  'use strict';

  function initRevealOnLoad() {
    document.querySelectorAll('.reveal').forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add('is-in');
      }, i * 90);
    });
  }

  function initScrollReveal() {
    var targets = document.querySelectorAll('.observe-fade');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(function (el) { observer.observe(el); });
  }

  function initFooterYear() {
    var el = document.querySelector('[data-year]');
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initRevealOnLoad();
    initScrollReveal();
    initFooterYear();
  });
})();
