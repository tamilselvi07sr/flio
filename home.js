let items = document.querySelectorAll('.slider .item'); // Fixed querySelectorALL to querySelectorAll
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let active = 0;

// Function to update the slider
const setSlider = () => {
    // Ensure active index is within bounds
    if (active < 0) {
        active = lastPosition; // Wrap around to last item
    } else if (active > lastPosition) {
        active = 0; // Wrap around to first item
    }

    let oldActive = document.querySelector('.slider .item.active');
    if (oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
}

// Event listeners for buttons
nextBtn.onclick = () => {
    active++;
    setSlider();
}

prevBtn.onclick = () => {
    active--;
    setSlider();
}

// Function to set the diameter based on slider dimensions
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}

// Initial setup
setSlider(); // Set the initial active item
setDiameter(); // Set the diameter initially
window.addEventListener('resize', setDiameter); // Update diameter on resize


document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.items');
    items.forEach((items, index) => {
        setTimeout(() => {
            items.classList.add('visible');
        }, index * 300); // Delay each item's animation
    });
});

const sliders = document.querySelector('.sliders');

sliders.addEventListener('mouseenter', () => {
    sliders.style.animationPlayState = 'paused'; // Pause animation on hover
});

sliders.addEventListener('mouseleave', () => {
    sliders.style.animationPlayState = 'running'; // Resume animation on mouse leave
});
