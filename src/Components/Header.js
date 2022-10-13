import React from "react";
import Logo from "../images/logo.png";

function Header() {
    return (
        <header className="center">
            <img src={Logo} alt="Logo" />
        </header>
    );
}
export default Header;
