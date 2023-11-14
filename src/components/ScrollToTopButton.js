import { useEffect, useState } from "react";
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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hidden lg:fixed lg:bottom-2 lg:right-5 lg:z-50 lg:block lg:cursor-pointer lg:text-[2.5rem] lg:text-pink-global lg:transition-all lg:duration-[400ms] lg:ease-in ${
        isVisible
          ? " lg:translate-y-0 lg:opacity-100"
          : " lg:translate-y-6 lg:opacity-0"
      }`}
      onClick={scrollToTop}
      title="Go to top"
    >
      <FontAwesomeIcon icon={faCircleChevronUp} />
    </div>
  );
};

export default ScrollToTopButton;
