//react
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location && location.hash !== '') {
      const element = document.querySelector(location.hash);
      element.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
}
