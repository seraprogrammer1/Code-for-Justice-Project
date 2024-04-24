const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})

function changeSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    // Remove current active class
    images[currentIndex].classList.remove('active');
    
    // Calculate new index
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    // Set new active class
    images[newIndex].classList.add('active');
}


