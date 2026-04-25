(function () {
  'use strict';

  const GATE_SECONDS = 395;
  const $postGate = document.getElementById('postGate');
  const $sticky   = document.getElementById('stickyBar');
  const $plans    = document.getElementById('planos');
  const devSkip   = new URLSearchParams(window.location.search).get('skip') === '1';

  function openGate() {
    if (!$postGate) return;
    $postGate.classList.add('open');
    document.body.classList.add('gate-open');
    setTimeout(function () {
      var res = document.getElementById('resonance');
      if (res) res.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
    if ($sticky) {
      $sticky.classList.add('mounted');
      setTimeout(function () { $sticky.classList.add('active'); }, 120);
    }
    initReveal();
    initStickyScroll();
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('revealed'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  }

  function initStickyScroll() {
    if (!$sticky || !$plans) return;
    window.addEventListener('scroll', function () {
      var rect = $plans.getBoundingClientRect();
      var inView = rect.top < window.innerHeight && rect.bottom > 0;
      $sticky.classList.toggle('active', !inView);
    }, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (devSkip) { openGate(); return; }
    setTimeout(openGate, GATE_SECONDS * 1000);
  });
})();
