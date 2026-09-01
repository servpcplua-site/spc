// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuBtn.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        });
    });
});

// Contact form handler
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('[name="name"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const email = form.querySelector('[name="email"]').value;
    const message = form.querySelector('[name="message"]').value;
    
    const subject = encodeURIComponent('Заявка з сайту від ' + name);
    const body = encodeURIComponent(
        "Ім'я: " + name + "\n" +
        "Телефон: " + phone + "\n" +
        "Email: " + email + "\n\n" +
        "Повідомлення:\n" + message
    );
    
    window.location.href = 'mailto:service@servicepc.pl.ua?subject=' + subject + '&body=' + body;
    
    alert('Дякуємо! Відкрийте поштовий клієнт та відправте лист.');
    form.reset();
    
    return false;
}
