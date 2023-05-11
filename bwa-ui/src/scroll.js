/*function smoothScroll(sections, currentSectionIndex) {
    window.addEventListener('wheel', function(event) {
      if (event.deltaY > 0) {
        // encontra a próxima seção
        var nextSectionIndex = currentSectionIndex + 1;
        var nextSection = sections[nextSectionIndex];
  
        // se houver uma próxima seção, rola até ela
        if (nextSection !== undefined) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
          currentSectionIndex = nextSectionIndex;
        }
      } else if (event.deltaY < 0) {
        // encontra a seção anterior
        var prevSectionIndex = currentSectionIndex - 1;
        var prevSection = sections[prevSectionIndex];
  
        // se houver uma seção anterior, rola até ela
        if (prevSection !== undefined) {
          prevSection.scrollIntoView();
          currentSectionIndex = prevSectionIndex;
        }
      }
    });
  }
  
  export { smoothScroll };
*/

function smoothScroll() {
  window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
      // rola suavemente para baixo
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    } else if (event.deltaY < 0) {
      // rola suavemente para cima
      window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
      });
    }
  });
}

export { smoothScroll };
