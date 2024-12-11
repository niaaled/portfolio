function showPopup(day) {
    const popup = document.getElementById('popup');
    const content = document.getElementById('popup-content');

 if (day === 12) {
        content.innerHTML = 'Day 12: Yayy only 12 days til Christmas!';
    } 
     

    if (day === 13) {
        content.innerHTML = 'Day 13:';
    } 
     

    if (day === 14) {
        content.innerHTML = 'Day 14:';
    } 
     

    if (day === 15) {
        content.innerHTML = 'Day 15:';
    } 
     

    if (day === 16) {
        content.innerHTML = 'Day 16:';
    } 
     

    if (day === 17) {
        content.innerHTML = 'Day 17:';
    } 
     

    if (day === 18) {
        content.innerHTML = 'Day 18:';
    } 
     

    if (day === 19) {
        content.innerHTML = 'Day 19:';
    } 
     

    if (day === 20) {
        content.innerHTML = 'Day 20: ';
    } 
     

    if (day === 21) {
        content.innerHTML = 'Day 21:';
    } 
     

    if (day === 22) {
        content.innerHTML = 'Day 22:';
    } 
     

    if (day === 23) {
        content.innerHTML = 'Day 23:';
    } 
     
    
    if (day === 24) {
        content.innerHTML = 'Day 24: Merry Christmas Eve! 🎄✨';
    } 
     



    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}



document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});
