import React from "react";
import { NavLink } from "react-router-dom";

type ComponentType = {
    title: string,
    to: any,
    theme: string
}

export const IThemeNavButton = {
    hosting: "text-[#8963BA]",
    agency: "text-superblue"
}

export const NavButton = ({
    title,
    to,
    theme,
}: ComponentType) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? `duration-150 rounded-2xl py-2 px-4 text-sm font-medium ${theme} hover:bg-stone-100` : `duration-150 rounded-2xl py-2 px-4 text-sm font-medium text-supergray hover:bg-stone-100`}>
            {title}
        </NavLink>
    )
}
