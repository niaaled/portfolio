function showPopup(day) {
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    
    const messages = {
        12: `<h2>✨ Day 12 ✨</h2>
             <p>Yayy only 12 days til Christmas! 🎄</p>
             <div class="snowfall"></div>`,
        13: `<h2>☃️ Day 13 ☃️</h2>
             <p>Time for hot chocolate! ☕</p>
             <div class="steam"></div>`,
        14: `<h2>❄️ Day 14 ❄️</h2>
             <p>Make a snowman! ⛄</p>
             <div class="snowfall"></div>`,
        15: `<h2>🎁 Day 15 🎁</h2>
             <p>Write your wishlist! 📝</p>
             <div class="sparkles"></div>`,
        16: `<h2>🎀 Day 16 🎀</h2>
             <p>Wrap some presents! 🎁</p>
             <div class="ribbon"></div>`,
        17: `<h2>🎵 Day 17 🎵</h2>
             <p>Sing carols!</p>
             <div class="music-notes"></div>`,
        18: `<h2>🍪 Day 18 🍪</h2>
             <p>Decorate cookies!</p>
             <div class="cookie-sparkle"></div>`,
        19: `<h2>🎬 Day 19 🎬</h2>
             <p>Watch a Christmas movie!</p>
             <div class="starlight"></div>`,
        20: `<h2>✉️ Day 20 ✉️</h2>
             <p>Send Christmas cards!</p>
             <div class="envelope"></div>`,
        21: `<h2>❄️ Day 21 ❄️</h2>
             <p>Winter solstice!</p>
             <div class="frost"></div>`,
        22: `<h2>🏠 Day 22 🏠</h2>
             <p>Make gingerbread!</p>
             <div class="gingerbread"></div>`,
        23: `<h2>🎄 Day 23 🎄</h2>
             <p>Put presents under the tree!</p>
             <div class="tree-lights"></div>`,
        24: `<h2>🌟 Christmas Eve 🌟</h2>
             <p>Merry Christmas Eve! 🎅✨</p>
             <div class="christmas-magic"></div>`
    };

    popupContent.innerHTML = messages[day];
    popup.classList.add('show');
    popupContent.classList.add('animate');
}

function closePopup() {
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    
    popupContent.classList.remove('animate');
    popup.classList.remove('show');
}

// Close popup when clicking outside
window.onclick = function(event) {
    const popup = document.querySelector('.popup');
    if (event.target === popup) {
        closePopup();
    }
}

// Menu toggle
document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});
