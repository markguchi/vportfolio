export const addIntersectionObserver = () => {
    const intersectionCallback = (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('start')
          }
          else
          {
            entry.target.classList.remove('start');
          }
        }
      }
      const observer = new IntersectionObserver(intersectionCallback,{
        root: null,
        threshold: window.innerWidth < 768? 0 : 0.125
     });
      const items = document.querySelectorAll('.with-animation');
      for (const item of items) {
        observer.observe(item);
      }
}

export const sectionHeight = () => {
  return window.screen.height * .75 + "px"
}

export const toTitleCase = (str) => {
  return str.replace(
    /\p{L}+/gu,
    function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  )
}