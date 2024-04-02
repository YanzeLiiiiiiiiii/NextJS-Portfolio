import React from "react";
import NavLink from "./Navlink";

const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink path={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;