// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('open');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName')?.value || '';
        const email = document.getElementById('contactEmail')?.value || '';
        const phone = document.getElementById('contactPhone')?.value || '';
        const business = document.getElementById('contactBusiness')?.value || '';
        const service = document.getElementById('contactService')?.value || '';
        const message = document.getElementById('contactMessage')?.value || '';
        
        const whatsappMsg = `*New Website Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Business:* ${business}%0A*Service:* ${service}%0A%0A*Message:* ${message}`;
        
        window.open(`https://wa.me/2348032958122?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
        
        // Reset form
        contactForm.reset();
    });
}

// FAQ Accordion (optional - for expand/collapse)
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.remove('open');
    }
});
