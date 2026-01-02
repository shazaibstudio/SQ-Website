// SQ Interactive - Optimized JavaScript
(function() {
  'use strict';

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  document.addEventListener('DOMContentLoaded', function() {
    
    if (typeof AOS !== 'undefined') {
      AOS.init({ 
        duration: 700, 
        once: true,
        offset: 100,
        easing: 'ease-in-out'
      });
    }
    
    if (typeof feather !== 'undefined') {
      feather.replace();
    }

    const yearEl = document.getElementById('yr');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    const mobileServicesToggle = document.getElementById('mobile-services-toggle');
    const mobileServices = document.getElementById('mobile-services');
    
    if (mobileServicesToggle && mobileServices) {
      mobileServicesToggle.addEventListener('click', () => {
        mobileServices.classList.toggle('hidden');
      });
    }

    const servicesBtn = document.getElementById('services-btn');
    const servicesPopup = document.getElementById('services-popup');
    
    if (servicesBtn && servicesPopup) {
      servicesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        servicesPopup.classList.toggle('hidden');
      });
      
      document.addEventListener('click', (e) => {
        if (!servicesPopup.contains(e.target) && !servicesBtn.contains(e.target)) {
          servicesPopup.classList.add('hidden');
        }
      });
    }

    initBeforeAfterSlider();
    initPortfolioFilter();
    optimizeImages();
    enhanceForms();
    initSmoothScrolling();
    optimizeVideos();
  });

  function initBeforeAfterSlider() {
    const container = document.querySelector('.before-after');
    if (!container) return;

    const afterWrapper = container.querySelector('.after-wrapper');
    const slider = container.querySelector('.slider-handle');
    
    if (!afterWrapper || !slider) return;

    let isDown = false;

    function moveSlider(x) {
      const rect = container.getBoundingClientRect();
      let offsetX = x - rect.left;
      offsetX = Math.max(0, Math.min(offsetX, rect.width));
      const percent = (offsetX / rect.width) * 100;
      afterWrapper.style.width = percent + '%';
      slider.style.left = percent + '%';
    }

    slider.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDown = true;
    });

    document.addEventListener('mouseup', () => {
      isDown = false;
    });

    document.addEventListener('mousemove', (e) => {
      if (isDown) {
        moveSlider(e.clientX);
      }
    });

    slider.addEventListener('touchstart', (e) => {
      e.preventDefault();
      isDown = true;
    });

    document.addEventListener('touchend', () => {
      isDown = false;
    });

    document.addEventListener('touchmove', (e) => {
      if (isDown && e.touches && e.touches[0]) {
        moveSlider(e.touches[0].clientX);
      }
    });

    moveSlider(container.getBoundingClientRect().left + container.getBoundingClientRect().width / 2);
  }

  function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('#portfolio-grid .portfolio-card');
    
    if (!filterBtns.length || !portfolioItems.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
            item.style.opacity = '1';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  function optimizeImages() {
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      img.addEventListener('error', function() {
        this.src = 'images/no-background.png';
      });
    });
  }

  function enhanceForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
        }
      });
    });
  }

  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  function optimizeVideos() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
      const resizeVideo = debounce(() => {
        if (window.innerWidth < 768) {
          video.style.objectFit = 'cover';
          video.style.objectPosition = 'center';
        }
      }, 250);

      window.addEventListener('resize', resizeVideo);
      resizeVideo();
    });
  }

  window.openImageModal = function(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
      modalImg.src = imageSrc;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  window.closeImageModal = function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
      modalImg.src = '';
    }
  };

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      window.closeImageModal();
    }
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.href = 'mailto:admin@sqinteractive.com';
    if (link.textContent.includes('@')) {
      link.textContent = 'admin@sqinteractive.com';
    }
  });

})();