// Hamburger menu toggle for sidebar
function toggleSideNav(force) {
  const nav = document.querySelector('.side-nav');
  const btn = document.getElementById('menu-toggle');
  if (typeof force === 'boolean') {
    nav.classList.toggle('open', force);
  } else {
    nav.classList.toggle('open');
  }
  // Show/hide backdrop
  const backdrop = document.querySelector('.side-nav-backdrop');
  if (nav.classList.contains('open')) {
    backdrop.style.display = 'block';
    if (btn) btn.classList.add('hide');
  } else {
    backdrop.style.display = 'none';
    if (btn) btn.classList.remove('hide');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('menu-toggle');
  const nav = document.querySelector('.side-nav');
  const backdrop = document.querySelector('.side-nav-backdrop');
  // Header scroll effect
  const topNav = document.querySelector('.top-nav');
  function handleScroll() {
    if (window.scrollY > 30) {
      topNav.classList.add('scrolled');
    } else {
      topNav.classList.remove('scrolled');
    }
  }
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".top-nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
  }
  if (backdrop) {
    backdrop.addEventListener('click', function() {
      toggleSideNav(false);
    });
  }
  if (nav) {
    nav.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        toggleSideNav(false);
      }
    });
  }
  // Hide sidebar on load
  toggleSideNav(false);
});
