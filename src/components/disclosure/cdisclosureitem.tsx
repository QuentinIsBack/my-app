import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Icon from "../icon/icons";

type PageType = {
    children: JSX.Element
}
export const CDisclosureItem = ({ 
    children
}: PageType) => {
    return (
        <>
            <div className="w-full pl-[1.25rem]">
                <Disclosure.Panel as="button" className="w-full px-3 py-2 text-sm font-normal text-supergray flex justify-start items-center space-x-2 rounded-full bg-transparent text-left hover:bg-gray-200/75 focus:outline-none">
                    {children}
                </Disclosure.Panel>
            </div>
        </>
    )
}
