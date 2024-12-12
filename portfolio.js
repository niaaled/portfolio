// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image modal
const modal = document.createElement('div');
modal.id = 'modal';
document.body.appendChild(modal);

document.querySelectorAll('.portfolio-item img').forEach(img => {
    img.addEventListener('click', function() {
        modal.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', function() {
    this.style.display = 'none';
});
// Menu toggle
document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});




