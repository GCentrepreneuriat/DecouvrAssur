/* ==========================================================================
   DÉCOUVRASSUR - SCRIPTS PARTAGÉS
   ========================================================================== */

// Menu mobile avec overlay, animation hamburger et slide-in droite
(function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');

  if (!hamburger || !navLinks) return;

  function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    if (hamburger.classList.contains('open')) closeMenu();
    else openMenu();
  });

  if (overlay) overlay.addEventListener('click', closeMenu);

  // Ferme le menu quand on clique un lien
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Ferme au resize (passage desktop)
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth > 900) closeMenu();
    }, 100);
  });

  // ESC pour fermer
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
})();

// Logo avec fallback : Wix → logo.png → texte stylé
(function() {
  const logos = document.querySelectorAll('.nav-logo img, .footer-logo img');
  logos.forEach(function(img) {
    img.addEventListener('error', function handler() {
      if (!img.dataset.fallbackTried) {
        img.dataset.fallbackTried = '1';
        img.src = 'logo.png';
      } else {
        // Les deux ont échoué : afficher le fallback texte
        img.style.display = 'none';
        const parent = img.parentElement;
        // Chercher ou créer un fallback texte dans le parent immédiat
        let textFb = parent.querySelector('.nav-logo-text, .footer-logo-text');
        if (!textFb && parent.classList.contains('nav-logo')) {
          textFb = document.createElement('span');
          textFb.className = 'nav-logo-text';
          textFb.innerHTML = 'Découvr<em>Assur</em>';
          parent.appendChild(textFb);
        }
        if (textFb) textFb.style.display = 'inline-block';
      }
    });
  });
})();

// Animation fade-in au scroll
(function() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
  });
})();

// Effet nav au scroll (ombre)
(function() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    const y = window.scrollY;
    if (y > 10) nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    else nav.style.boxShadow = 'none';
  }, { passive: true });
})();
