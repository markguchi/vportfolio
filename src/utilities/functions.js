import { useNavigate } from 'react-router-dom'

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
        threshold: 0.25
     });
      const items = document.querySelectorAll('.with-animation');
      for (const item of items) {
        observer.observe(item);
      }
}