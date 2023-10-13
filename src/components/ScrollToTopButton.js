import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden lg:block lg:fixed lg:bottom-2 lg:right-5 lg:text-[2.5rem] lg:z-50 lg:text-pink-global lg:cursor-pointer lg:transition-all lg:duration-[400ms] lg:ease-in ${isVisible ? ' lg:opacity-100 lg:translate-y-0' : ' lg:opacity-0 lg:translate-y-6'}`}
      onClick={scrollToTop}
      title='Go to top'
    >
      <FontAwesomeIcon icon={faCircleChevronUp} />
    </div>
  );
};

export default ScrollToTopButton;
