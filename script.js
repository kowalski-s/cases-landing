// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Role Tabs Switching
const roleTabs = document.querySelectorAll('.role-tab');
const roleContents = document.querySelectorAll('.role-content');

roleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const role = tab.getAttribute('data-role');
        
        // Remove active class from all tabs
        roleTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Hide all role contents
        roleContents.forEach(content => content.classList.remove('active'));
        
        // Show selected role content
        const selectedContent = document.querySelector(`[data-role-content="${role}"]`);
        if (selectedContent) {
            selectedContent.classList.add('active');
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
    '.feature-card, .tech-card, .scenario-card, .role-feature-item'
);

animatedElements.forEach(el => {
    observer.observe(el);
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Dynamic Gradient Orbs Movement
const orbs = document.querySelectorAll('.gradient-orb');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
});

function animateOrbs() {
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.02;
        const xOffset = (mouseX - 0.5) * 50 * speed;
        const yOffset = (mouseY - 0.5) * 50 * speed;
        
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
    
    requestAnimationFrame(animateOrbs);
}

animateOrbs();

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats are visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('.stat-value');
            const targetValue = parseInt(statValue.textContent);
            
            if (!isNaN(targetValue)) {
                animateCounter(statValue, targetValue);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// Typing Effect for Hero Title (Optional Enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add hover effect to feature cards
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Tilt Effect for Cards
function tiltCard(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
}

// Apply tilt effect to scenario cards
const scenarioCards = document.querySelectorAll('.scenario-card');

scenarioCards.forEach(card => {
    card.addEventListener('mousemove', tiltCard);
    card.addEventListener('mouseleave', resetTilt);
});

// Loading Animation Complete
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Cursor Trail Effect (Optional - can be disabled for performance)
const createCursorTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animate);
    }
    
    // Uncomment to enable cursor trail
    // animate();
};

// Progress bar animation on scroll
function updateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            bar.style.animation = 'fillProgress 2s ease-out forwards';
        }
    });
}

window.addEventListener('scroll', updateProgressBars);
updateProgressBars(); // Initial check

// Add sparkle effect on hover for buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.offsetX + 'px';
        sparkle.style.top = e.offsetY + 'px';
        this.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });
});

// Console Easter Egg
console.log('%c🚀 EduPlatform MVP', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cИнтересуетесь технической стороной?', 'font-size: 14px; color: #8b5cf6;');
console.log('%cStack: React + Vite + Supabase + PostgreSQL + Realtime', 'font-size: 12px; color: #a3a3a3;');
console.log('%cСвяжитесь со мной: ingakovalski@gmail.com', 'font-size: 12px; color: #10b981;');

// Performance Monitoring
if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page Load Time: ${pageLoadTime}ms`);
        }, 0);
    });
}

// Add theme toggle functionality (optional for future)
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
        }
    }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    
    // Add smooth reveal for sections
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Preload images for better performance
function preloadImages() {
    const images = [
        // Add any image URLs here if you have them
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');
    
    const existingRipple = button.getElementsByClassName('ripple')[0];
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
}

buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

