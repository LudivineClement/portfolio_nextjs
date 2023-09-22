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
    <>
      {isVisible && (
        <div className='fixed bottom-2 right-5 text-[2.5rem] z-50 text-pink-global cursor-pointer hover:brightness-90 transition-all duration-150 ease-in' onClick={scrollToTop} title='Go to top'>
          <FontAwesomeIcon icon={faCircleChevronUp} />
        </div>
      )}

    </>
  );
};

export default ScrollToTopButton;
