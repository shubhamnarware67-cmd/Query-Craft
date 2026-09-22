/* ==========================================================================
   QueryCraft — Navigation behavior
   Handles: mobile menu toggle, active link highlighting, header on scroll.
   ========================================================================== */

(function () {
  'use strict';

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  function setActiveLink() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    setActiveLink();
  });
})();
