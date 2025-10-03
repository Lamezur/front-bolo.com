import { useEffect, useState } from "react";

function ScrollTopButton() {
    const [show, setShow] = useState(false); 
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setShow(true);
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setShow(window.scrollY > 100);
        });
        return () => {
            window.removeEventListener('scroll', () => { });
        };
    }, []);
    return (
        <button className={show ? "scroltop fa fa-arrow-up d-inline-block" : "scroltop fa fa-arrow-up d-none"} onClick={handleScrollTop}></button>
    );
}
export default ScrollTopButton;