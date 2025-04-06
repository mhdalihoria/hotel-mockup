    import React, { useState, useEffect } from "react";
    import { RxHamburgerMenu } from "react-icons/rx";
    import "./navbar.css";
    import { FaArrowRightLong } from "react-icons/fa6";

    export default function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setShow(false); // scrolling down
        } else {
            setShow(true); // scrolling up
        }

        setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`navbar ${show ? "visible" : "hidden"}`}>
        <div className="nav-hamburger">
            <RxHamburgerMenu />
        </div>

        {/* <div>Logo</div> */}
        <button className="nav-cta">
            Book a Room
            {/* <FaArrowRightLong style={{ marginLeft: "10px", fill: "#ffc814" }} /> */}
        </button>
        </nav>
    );
    }
