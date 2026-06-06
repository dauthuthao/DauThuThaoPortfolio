/**
 * Portfolio - Đậu Thu Thảo
 * main.js - Interactions & Animations
 */

'use strict';

// ============================================
// NAVBAR - Scroll & Hamburger
// ============================================
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect
  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  // Hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

// ============================================
// SCROLL REVEAL - Fade-in animations
// ============================================
(function initScrollReveal() {
  const fadeElements = document.querySelectorAll('.fade-in');

  if (!fadeElements.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });
})();

// ============================================
// SMOOTH SCROLL for anchor links
// ============================================
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar')
          ? document.getElementById('navbar').offsetHeight
          : 68;
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });
})();

// ============================================
// SKILL CARDS - Fix duplicate icon bug in HTML
// ============================================
(function fixSkillCards() {
  // Remove duplicate skill-icon inside skill-header
  document.querySelectorAll('.skill-header').forEach(function (header) {
    const icons = header.querySelectorAll('.skill-icon');
    // If there are more than 1, remove extras (they were accidentally placed twice in markup)
    if (icons.length > 1) {
      for (let i = 1; i < icons.length; i++) {
        icons[i].remove();
      }
    }
  });
})();

// ============================================
// BACK TO TOP (optional enhancement)
// ============================================
(function initBackToTop() {
  // Create button
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Về đầu trang');
  btn.innerHTML = '↑';
  btn.style.cssText = [
    'position:fixed',
    'bottom:2rem',
    'right:2rem',
    'width:44px',
    'height:44px',
    'border-radius:50%',
    'background:linear-gradient(135deg,#2d6a4f,#52b788)',
    'color:white',
    'border:none',
    'font-size:1.2rem',
    'font-weight:700',
    'cursor:pointer',
    'box-shadow:0 4px 20px rgba(29,67,50,0.25)',
    'opacity:0',
    'transform:translateY(10px)',
    'transition:all 0.3s cubic-bezier(0.4,0,0.2,1)',
    'z-index:999',
    'font-family:inherit',
    'display:flex',
    'align-items:center',
    'justify-content:center'
  ].join(';');

  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    } else {
      btn.style.opacity = '0';
      btn.style.transform = 'translateY(10px)';
    }
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Hover effect
  btn.addEventListener('mouseenter', function () {
    btn.style.transform = 'translateY(-3px)';
    btn.style.boxShadow = '0 8px 28px rgba(29,67,50,0.35)';
  });
  btn.addEventListener('mouseleave', function () {
    btn.style.transform = window.scrollY > 400 ? 'translateY(0)' : 'translateY(10px)';
    btn.style.boxShadow = '0 4px 20px rgba(29,67,50,0.25)';
  });
})();

// ============================================
// ACTIVE LINK HIGHLIGHT based on current page
// ============================================
(function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// ============================================
// DETAILS PANEL TOGGLE (project cards)
// ============================================
(function initDetailsPanels() {
  document.querySelectorAll('.details-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (!panel) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', (!isExpanded).toString());
      panel.classList.toggle('open', !isExpanded);
    });
  });
})();

// ============================================
// CONSOLE EASTER EGG
// ============================================
console.log(
  '%c🌿 Đậu Thu Thảo Portfolio\n%cKhoa học Máy tính · K70I - CS2\nBuilt with HTML, CSS & JavaScript',
  'font-size:18px; font-weight:bold; color:#2d6a4f;',
  'font-size:12px; color:#52b788;'
);

// ============================================
// HERO — Particle generator + Mouse parallax
// ============================================
(function initHeroEffects() {
  var hero = document.querySelector('.hero');
  if (!hero) return;

  // 1. Generate particles via JS
  var container = hero.querySelector('.hero-particles');
  if (container) {
    container.innerHTML = '';
    var count = 20;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'hero-particle';
      var size  = Math.random() * 11 + 3;
      var left  = Math.random() * 100;
      var dur   = Math.random() * 12 + 9;
      var delay = -(Math.random() * dur);
      var alpha = (Math.random() * 0.14 + 0.08).toFixed(2);
      var hue   = Math.random() > 0.5 ? '255,255,255' : '183,228,199';
      p.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + left + '%;animation-duration:' + dur + 's;animation-delay:' + delay + 's;background:rgba(' + hue + ',' + alpha + ')';
      container.appendChild(p);
    }
  }

  // 2. Mouse parallax on orb
  var orb = hero.querySelector('.hero-orb');
  var targetX = 0, targetY = 0, curX = 0, curY = 0;

  hero.addEventListener('mousemove', function(e) {
    var rect = hero.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width  - 0.5) * 50;
    targetY = ((e.clientY - rect.top)  / rect.height - 0.5) * 35;
  });
  hero.addEventListener('mouseleave', function() { targetX = 0; targetY = 0; });

  function lerp(a, b, t) { return a + (b - a) * t; }
  (function tick() {
    curX = lerp(curX, targetX, 0.06);
    curY = lerp(curY, targetY, 0.06);
    if (orb) orb.style.transform = 'translate(' + (curX * 0.7).toFixed(1) + 'px,' + (curY * 0.5).toFixed(1) + 'px)';
    requestAnimationFrame(tick);
  })();
})();
