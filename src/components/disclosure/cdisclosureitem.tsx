import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Icon from "../icon/icons";
import { NavLink } from "react-router-dom";

type PageType = {
    children: JSX.Element
    to: string
}
export const CDisclosureItem = ({ 
    children,
    to
}: PageType) => {
    return (
        <>
            <div className="w-full pl-[1.25rem]">
                <Disclosure.Panel>
                    <NavLink to={to} className={({ isActive }) => isActive ? `w-full px-3 py-2 text-sm font-normal text-supergray flex ring-2 ring-black justify-start items-center space-x-2 rounded-full bg-transparent text-left hover:bg-gray-200/75 focus:outline-none` : `w-full px-3 py-2 text-sm font-normal text-supergray flex justify-start items-center space-x-2 rounded-full bg-transparent text-left hover:bg-gray-200/75 focus:outline-none`}>
                        {children}
                    </NavLink>
                </Disclosure.Panel>
                {/*<Disclosure.Panel as="button" className="w-full px-3 py-2 text-sm font-normal text-supergray flex justify-start items-center space-x-2 rounded-full bg-transparent text-left hover:bg-gray-200/75 focus:outline-none">
                    
                    <NavLink to={to} className={({ isActive }) => isActive ? `ring-1 ring-black h-full w-full px-3 py-2 rounded-full` : ``}>
                    {children}
                    </NavLink>
                </Disclosure.Panel>*/}
            </div>
        </>
    )
}