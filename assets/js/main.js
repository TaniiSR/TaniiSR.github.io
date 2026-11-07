document.addEventListener('DOMContentLoaded', () => {

  const PROJECT_DATA = {
  "motive-driver": {
    "kind": "Enterprise SaaS / Fleet Compliance",
    "title": "Motive Driver App",
    "summary": "A core part of Motive's AI-powered operations platform. Commercial drivers across North America use it for electronic logging (ELD), Hours of Service, inspections and daily compliance workflows.",
    "architecture": [
      "Clean Architecture with MVVM, the Repository pattern and SOLID principles in a large multi-team codebase",
      "Bluetooth Low Energy connectivity between the app and ELD hardware, handling pairing, reliable sync and real-world connectivity problems",
      "Modular structure so several teams can ship features independently"
    ],
    "contributions": [
      "Delivered production features for compliance and operational workflows",
      "Modernised legacy components while keeping production stable",
      "Wrote Technical Solution Design (TSD) documents for new features",
      "Resolved around 90% of production issues reported by drivers",
      "Raised unit test coverage on compliance features from ~5% to 75% and added end-to-end/UI testing"
    ],
    "stack": [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "BLE",
      "Room",
      "Firebase"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=com.keeptruckin.android&hl=en"
    }
  },
  "mindvalley": {
    "kind": "EdTech / Personal Growth",
    "title": "Mindvalley",
    "summary": "Mindvalley's flagship learning and personal-growth app. My work centred on the community, chat and social features.",
    "architecture": [
      "Clean Architecture and MVVM with a clear split between presentation and data layers",
      "Apollo GraphQL integration behind clean abstractions",
      "Loosely coupled, modular features that are easy to extend",
      "Kotlin Coroutines and Flow for async work"
    ],
    "contributions": [
      "Designed and led the revamp of the community Connect experience (posts, reactions, comments, connections); the feature's user base grew by about 40%",
      "Built reusable UI components to speed up development and keep the UI consistent",
      "Raised unit test coverage from roughly 5% to 40% and introduced Appium UI testing across Android and iOS for about half the features"
    ],
    "stack": [
      "Kotlin",
      "Jetpack Compose",
      "Apollo GraphQL",
      "Coroutines & Flow",
      "MVVM",
      "Clean Architecture"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=com.mindvalley.mva&hl=en"
    }
  },
  "mindvalley-states": {
    "kind": "Wellness / Flutter",
    "title": "Mindvalley States",
    "summary": "A wellness app that helps people reach a chosen emotional state through meditation, hypnosis, soundscapes and guided content (Choose, Activate, Supplement, Enhance).",
    "architecture": [
      "Feature-oriented Clean Architecture separating presentation, business logic and data",
      "BLoC / Cubit managing loading, success, error and content states",
      "Backend-driven content retrieved and shown dynamically per selected state"
    ],
    "contributions": [
      "Built features in Flutter and Dart with reusable widgets and components",
      "Implemented state management with BLoC / Cubit",
      "Integrated backend APIs and dynamic content",
      "Debugged and optimised features for production"
    ],
    "stack": [
      "Flutter",
      "Dart",
      "BLoC / Cubit",
      "Clean Architecture",
      "REST APIs"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=com.mindvalley.mvstates&hl=en"
    }
  },
  "yap": {
    "kind": "FinTech / Digital Banking",
    "title": "YAP",
    "summary": "A multi-region digital banking and personal finance platform serving the UAE and Pakistan, covering wallets, debit cards, transfers and payments.",
    "architecture": [
      "Clean Architecture and MVVM shared across regional deployments",
      "Reusable UI components and shared business logic to keep regions consistent while meeting local requirements"
    ],
    "contributions": [
      "Led the Android build of YAP Pakistan end to end, from architecture to the first MVP release",
      "Built digital wallet features and virtual/physical debit card management (activation, freeze/unfreeze, PIN, card controls)",
      "Built local and international transfers, QR payments, bill payments and mobile recharge"
    ],
    "stack": [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Clean Architecture",
      "REST APIs"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=com.yap.banking",
      "pk": "https://play.google.com/store/apps/details?id=com.yappakistan.app"
    }
  },
  "vowpay": {
    "kind": "FinTech / Payments & Remittance",
    "title": "VowPay",
    "summary": "A digital payments and remittance app for international money transfer, wallets, QR payments and bank account linking.",
    "architecture": [
      "Clean Architecture, MVVM and the Repository pattern",
      "Multiple backend financial services behind consistent API handling"
    ],
    "contributions": [
      "Led a revamp of the core transfer and wallet flows that grew and retained the user base",
      "Built secure international transfers, beneficiary management, QR payments and transaction history",
      "Integrated bank account linking and kept the app stable across devices and OS versions"
    ],
    "stack": [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "MVVM",
      "Clean Architecture",
      "REST APIs"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=com.vowpay.vowpay"
    }
  },
  "edb360": {
    "kind": "FinTech / Business Banking",
    "title": "EDB 360",
    "summary": "A business-banking app built for Emirates Development Bank, giving UAE SMEs digital access to accounts, payments and other banking services.",
    "architecture": [
      "MVVM and Clean Architecture separating UI, business logic and data",
      "Careful handling of authentication, sensitive financial data and API failure states"
    ],
    "contributions": [
      "Developed Android features in Kotlin and Java for business-banking workflows",
      "Integrated backend services and handled loading, error and edge-case states",
      "Debugged production issues, improved reliability and took part in code reviews"
    ],
    "stack": [
      "Kotlin",
      "Java",
      "XML",
      "MVVM",
      "Clean Architecture"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=com.edb360.app&hl=en_US"
    }
  },
  "barq": {
    "kind": "Logistics / Last-Mile Delivery",
    "title": "BARQ",
    "summary": "A logistics and last-mile delivery platform with customer and driver apps: delivery requests, live tracking and optimised routes.",
    "architecture": [
      "Clean Architecture, MVVM and the Repository pattern",
      "Background location with WorkManager for continuous delivery tracking"
    ],
    "contributions": [
      "Built customer and driver features for end-to-end delivery operations",
      "Implemented real-time tracking with Google Maps SDK and live location, plus route optimisation",
      "Added push notifications for delivery status",
      "The codebase was rated 75% maintainable and testable in an external audit"
    ],
    "stack": [
      "Kotlin",
      "Java",
      "Google Maps SDK",
      "WorkManager",
      "FCM",
      "MVVM"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=com.kaakati.barqcaptain"
    }
  },
  "scrapbays": {
    "kind": "Marketplace / Circular Economy",
    "title": "ScrapBays",
    "summary": "A digital marketplace connecting individuals, businesses and recyclers to buy, sell and manage recyclable materials.",
    "architecture": [
      "Clean Architecture, MVVM and the Repository pattern",
      "Compose UI with Google Maps and location services"
    ],
    "contributions": [
      "Built listing, browsing, search, category and order-tracking features",
      "Implemented authentication, profiles and image capture/upload",
      "Added end-to-end testing, resolving around 90% of reported bugs"
    ],
    "stack": [
      "Kotlin",
      "Jetpack Compose",
      "Google Maps",
      "MVVM",
      "Clean Architecture"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=com.scrapbays.scrapbaysapp&hl=en_GB"
    }
  },
  "mgasha": {
    "kind": "E-Commerce / B2C Marketplace",
    "title": "MGASHA",
    "summary": "A B2C e-commerce app covering browsing, search, wishlist, cart, checkout and order tracking.",
    "architecture": [
      "MVVM, Repository pattern, SOLID principles and dependency injection",
      "REST integration for product and order synchronisation"
    ],
    "contributions": [
      "Built OTP authentication, catalogue, categories and search",
      "Implemented wishlist, cart, checkout and order tracking",
      "Optimised the UI across screen densities and device tiers"
    ],
    "stack": [
      "Java",
      "XML",
      "Retrofit",
      "MVVM",
      "Dependency Injection"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=com.mgasha"
    }
  },
  "lad": {
    "kind": "EdTech / Government Field Assessment",
    "title": "Literacy Assessment Drive",
    "summary": "An offline-capable assessment app for field assessors working for the Government of Punjab, digitising literacy assessments in public schools.",
    "architecture": [
      "MVVM, Repository pattern and layered architecture",
      "Offline-first data collection with background sync via WorkManager"
    ],
    "contributions": [
      "Built the assessor dashboard, authentication and profile management",
      "Implemented offline data collection and automatic background synchronisation",
      "Integrated camera capture and image upload for assessment evidence"
    ],
    "stack": [
      "Java",
      "Android SDK",
      "WorkManager",
      "Camera",
      "MVVM"
    ],
    "links": {
      "play": "https://play.google.com/store/apps/details?id=qodit.com.lad"
    }
  }
};
  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll-triggered reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('.js-counter');
  const animateCounter = (elx) => {
    const target = parseFloat(elx.dataset.target);
    const decimals = parseInt(elx.dataset.decimal || '0', 10);
    const suffix = elx.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      elx.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else elx.textContent = target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(step);
  };
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      const counterIo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { animateCounter(entry.target); counterIo.unobserve(entry.target); }
        });
      }, { threshold: 0.6 });
      counters.forEach(c => counterIo.observe(c));
    } else {
      counters.forEach(animateCounter);
    }
  }

  /* ---------- Skill meters ---------- */
  const skillBars = document.querySelectorAll('.js-skill');
  if (skillBars.length) {
    if ('IntersectionObserver' in window) {
      const skillIo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elx = entry.target;
            requestAnimationFrame(() => { elx.style.width = (elx.dataset.pct || 0) + '%'; });
            skillIo.unobserve(elx);
          }
        });
      }, { threshold: 0.4 });
      skillBars.forEach(b => skillIo.observe(b));
    } else {
      skillBars.forEach(b => { b.style.width = (b.dataset.pct || 0) + '%'; });
    }
  }

  /* ---------- Testimonial carousel ---------- */
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');
  if (track && prevBtn && nextBtn) {
    const scrollByCard = (dir) => {
      const card = track.querySelector('.t-card');
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const distance = card.getBoundingClientRect().width + gap;
      track.scrollBy({ left: dir * distance, behavior: 'smooth' });
    };
    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));
  }

  /* ---------- Project modal ---------- */
  const overlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const storeIcons = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3 2.6v18.8c0 .5.3.9.7 1.1l10.6-10.5L3.7 1.5c-.4.2-.7.6-.7 1.1zM17.6 9.4l-2.9-1.7-2.5 2.5 2.5 2.5 2.9-1.7c.7-.4.7-1.2 0-1.6zM4.4 22.5l9.1-5.2-2.4-2.4-6.7 7.6zM13.5 6.7l-9.1-5.2 6.7 7.6 2.4-2.4z"/></svg>',
    app: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.11 1.84-.79 3.02-.87 1.42-.09 2.94.52 3.77 1.74-.09.06-2.25 1.31-2.22 3.9.03 3.09 2.7 4.11 2.73 4.13-.02.06-.42 1.44-1.38 2.27zM12.03 7.25c-.15-2.23 1.66-4.09 3.74-4.25.28 2.28-2.03 4.4-3.74 4.25z"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.05a15.7 15.7 0 00-1.13-5.28A8.02 8.02 0 0119.93 11zM12 4.06c.85 1.14 1.86 3.13 2.13 6.94H9.87c.27-3.81 1.28-5.8 2.13-6.94zM9.87 13h4.26c-.27 3.81-1.28 5.8-2.13 6.94-.85-1.14-1.86-3.13-2.13-6.94zM8.25 5.72A15.7 15.7 0 007.12 11H4.07a8.02 8.02 0 014.18-5.28zM4.07 13h3.05a15.7 15.7 0 001.13 5.28A8.02 8.02 0 014.07 13zm11.68 5.28A15.7 15.7 0 0016.88 13h3.05a8.02 8.02 0 01-4.18 5.28z"/></svg>'
  };
  const storeLabels = { play: 'Play Store', app: 'App Store', web: 'Web Demo', pk: 'YAP Pakistan' };

  const closeModal = () => {
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  const openModal = (key) => {
    const project = PROJECT_DATA[key];
    if (!overlay || !modalContent || !project) return;
    const linkButtons = project.links ? Object.keys(project.links).map(k =>
      `<a class="store-btn" href="${project.links[k]}" target="_blank" rel="noopener">${storeIcons[k] || ''}${storeLabels[k] || k}</a>`
    ).join('') : '';
    modalContent.innerHTML = `
      <button class="modal-close" aria-label="Close">&times;</button>
      <span class="kind">${project.kind}</span>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      ${project.architecture ? `<span class="modal-section-label">Architecture</span><ul class="modal-detail-list">${project.architecture.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
      ${project.contributions ? `<span class="modal-section-label">Key Technical Contributions</span><ul class="modal-detail-list">${project.contributions.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
      <span class="modal-section-label">Stack</span>
      <div class="pill-row">${project.stack.map(s => `<span class="pill">${s}</span>`).join('')}</div>
      ${linkButtons ? `<div class="modal-store-row">${linkButtons}</div>` : ''}
    `;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalContent.querySelector('.modal-close').addEventListener('click', closeModal);
  };

  document.querySelectorAll('[data-modal]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
  });
  if (overlay) {
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }

  /* ---------- Showcase category filter ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const showcaseGrid = document.getElementById('showcaseGrid');
  const emptyState = document.getElementById('emptyState');
  if (filterBtns.length && showcaseGrid) {
    const applyFilter = (filter) => {
      const cards = Array.from(showcaseGrid.querySelectorAll('.showcase-card'));
      let visibleCount = 0;
      cards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.cat === filter;
        if (matches) {
          card.classList.remove('filtered-out');
          card.style.transitionDelay = (visibleCount * 60) + 'ms';
          visibleCount++;
        } else {
          card.style.transitionDelay = '0ms';
          card.classList.add('filtered-out');
        }
      });
      if (emptyState) emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    };
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        applyFilter(btn.dataset.filter);
      });
    });
  }

  /* ---------- Contact form validation ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const successMsg = document.getElementById('successMsg');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validators = {
      fullName: (v) => v.trim().length > 1,
      emailAddress: (v) => emailPattern.test(v.trim()),
      roleType: (v) => v.trim().length > 0,
      budget: (v) => v.trim().length > 1,
      message: (v) => v.trim().length > 4
    };
    const validateField = (input) => {
      const fieldWrap = input.closest('.field');
      if (!fieldWrap) return true;
      const rule = validators[input.name];
      const valid = rule ? rule(input.value) : true;
      fieldWrap.classList.toggle('has-error', !valid);
      return valid;
    };
    contactForm.querySelectorAll('input, select, textarea').forEach((input) => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        const fieldWrap = input.closest('.field');
        if (fieldWrap && fieldWrap.classList.contains('has-error')) validateField(input);
      });
    });
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let allValid = true;
      contactForm.querySelectorAll('input, select, textarea').forEach((input) => {
        if (!validateField(input)) allValid = false;
      });
      if (!allValid) {
        if (successMsg) successMsg.classList.remove('show');
        const firstError = contactForm.querySelector('.field.has-error input, .field.has-error select, .field.has-error textarea');
        if (firstError) firstError.focus();
        return;
      }
      if (successMsg) successMsg.classList.add('show');
      contactForm.reset();
      contactForm.querySelectorAll('.field').forEach(f => f.classList.remove('has-error'));
      if (successMsg) setTimeout(() => successMsg.classList.remove('show'), 6000);
    });
  }

});
