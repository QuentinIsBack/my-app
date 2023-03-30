import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Icon from "../icon/icons";
import { NavLink } from "react-router-dom";

type PageType = {
    children: JSX.Element
    to: string
    locked: boolean
}
export const CDisclosureItem = ({ 
    children,
    to,
    locked
}: PageType) => {
    return (
        <>
            <div className="w-full pl-[1.25rem]">
                <Disclosure.Panel>
                    <NavLink to={to} className={({ isActive }) => isActive ? `w-full justify-between px-3 py-2 text-sm font-normal text-supergray flex ring-2 ring-black items-center rounded-full bg-transparent text-left hover:bg-gray-200/75 focus:outline-none` : `w-full px-3 py-2 text-sm font-normal text-supergray flex justify-between items-center rounded-full bg-transparent text-left hover:bg-gray-200/75 focus:outline-none`}>
                        <div>
                        {children}
                        </div>
                        <Icon className={locked ? 'fill-blue-600' : 'fill-orange-600'} name={locked ? 'AiFillCheckCircle' : 'RiErrorWarningFill'} size={18} />
                    </NavLink>
                </Disclosure.Panel>
            </div>
        </>
    )
}

CDisclosureItem.defaultProps = {
    locked: false
}