// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Button click handlers
document.addEventListener('DOMContentLoaded', () => {
    // Login button
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', () => {
        alert('Login functionality would be implemented here');
    });

    // Get Started button
    const getStartedBtn = document.querySelector('.btn-primary');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            document.querySelector('#marketplace').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Save spot buttons for events
    document.querySelectorAll('.btn-save').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!btn.classList.contains('sold-out')) {
                btn.textContent = 'Spot Saved!';
                btn.style.background = '#28a745';
                setTimeout(() => {
                    btn.textContent = 'Save my spot';
                    btn.style.background = '#007bff';
                }, 2000);
            }
        });
    });

    // Product card interactions
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Feature card hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 10px 25px rgba(0,123,255,0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});

// Search functionality (placeholder)
function handleSearch(query) {
    console.log('Searching for:', query);
    // Implement search logic here
}

// Form validation for email signup
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Newsletter signup (if you add the form)
function handleNewsletterSignup(email) {
    if (validateEmail(email)) {
        alert('Thank you for signing up!');
        return true;
    } else {
        alert('Please enter a valid email address');
        return false;
    }
}

// Dynamic content loading simulation
function loadMoreProducts() {
    // Simulate loading more products
    console.log('Loading more products...');
}

// Local storage for user preferences
function saveUserPreference(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getUserPreference(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// Initialize any saved preferences
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getUserPreference('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});
