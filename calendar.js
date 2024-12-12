function showPopup(day) {
    const popup = document.querySelector('.popup');
    const popupText = document.querySelector('.popup-text');
    
    const messages = {
        12: "Yayy only 12 days til Christmas! 🎄",
        13: "Day 13: Time for hot chocolate! ☕",
        14: "Day 14: Make a snowman! ⛄",
        15: "Day 15: Write your wishlist! 📝",
        16: "Day 16: Wrap some presents! 🎁",
        17: "Day 17: Sing carols! 🎵",
        18: "Day 18: Decorate cookies! 🍪",
        19: "Day 19: Watch a Christmas movie! 🎬",
        20: "Day 20: Send Christmas cards! ✉️",
        21: "Day 21: Winter solstice! ❄️",
        22: "Day 22: Make gingerbread! 🏠",
        23: "Day 23: Put presents under the tree! 🎄",
        24: "Merry Christmas Eve! 🎅✨"
    };

    popupText.innerHTML = messages[day] || `Day ${day}`;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
}

// Close popup when clicking outside
window.onclick = function(event) {
    const popup = document.querySelector('.popup');
    if (event.target === popup) {
        closePopup();
    }
}
document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});
