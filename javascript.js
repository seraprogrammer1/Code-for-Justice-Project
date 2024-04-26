<<<<<<< HEAD
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})

// function changeSlide(direction) {
//     const images = document.querySelectorAll('.carousel-images img');
//     let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
//     // Remove current active class
//     images[currentIndex].classList.remove('active');
    
//     // Calculate new index
//     let newIndex = currentIndex + direction;
//     if (newIndex < 0) newIndex = images.length - 1;
//     if (newIndex >= images.length) newIndex = 0;
    
//     // Set new active class
//     images[newIndex].classList.add('active');
//   }

const list = document.querySelector(".list");

  // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".item");
  const itemWidth = item.offsetWidth;

  function handleClick(direction) {
    // Based on the direction we call `scrollBy` with the item width we got earlier
    if(direction === "previous") {
      list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }}
=======
>>>>>>> Sera-Branch
