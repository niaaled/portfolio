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


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('h1, p').forEach(el => {
    observer.observe(el);
  });


  const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

