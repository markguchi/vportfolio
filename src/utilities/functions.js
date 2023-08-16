import { useEffect, useState } from "react"

export const ListenToScreenResize = () => {
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return dimensions
}

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
        threshold: window.innerWidth < 768? 0 : 0.25
     });
      const items = document.querySelectorAll('.with-animation');
      for (const item of items) {
        observer.observe(item);
      }
}

export const sectionHeight = () => {
  return window.screen.height * .75 + "px"
}