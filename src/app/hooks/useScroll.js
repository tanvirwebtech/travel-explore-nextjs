import { useEffect, useState } from "react";

const useScroll = () => {
    const [height, setHeight] = useState(0);

    const handleScroll = () => {
        setHeight(window.scrollY);
    };

    useEffect(() => {
        // component is mounted and window is available
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { height };
};

export default useScroll;
