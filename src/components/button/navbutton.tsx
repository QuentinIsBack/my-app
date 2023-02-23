import React from "react";
import { NavLink } from "react-router-dom";

type ComponentType = {
    title: string,
    to: any
}

export const NavButton = ({
    title,
    to,
}: ComponentType) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "duration-150 rounded-2xl py-2 px-4 text-sm font-medium text-[#2292a4] hover:bg-gray-100" : "duration-150 rounded-2xl py-2 px-4 text-sm font-medium text-supergray hover:bg-gray-100"}>
            {title}
        </NavLink>
    )
}
