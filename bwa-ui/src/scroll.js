function smoothScroll() {
  window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    } else if (event.deltaY < 0) {
      window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
      });
    }
  });
}

export { smoothScroll };
