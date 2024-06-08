function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class to elements in viewport
function animateOnScroll() {
    const items = document.querySelectorAll('.portfo-items .item');
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('animate');
        }
    });
}

// Add event listener for scroll event
window.addEventListener('scroll', animateOnScroll);

// Initial animation check
animateOnScroll();
