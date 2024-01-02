import { useEffect } from "react";
import { useLocation } from "react-router";

type scrollprops = {
    children: React.ReactNode
}


const ScrollToTop = (props: scrollprops) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;