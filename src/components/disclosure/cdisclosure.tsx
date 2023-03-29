import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import Icon from "../icon/icons";

type PageType = {
    title: string
    locked: boolean
    children: JSX.Element
}
export const CDisclosure = ({ 
    title,
    locked,
    children
}: PageType) => {
    return (
        <>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className={`flex justify-between w-full items-center rounded-full bg-transparent px-3 py-2 text-left text-sm font-medium ${(open && locked) && 'ring-2 ring-black'} text-supergray/60 ${locked ? 'hover:bg-gray-200/75' : 'cursor-not-allowed'} focus:outline-none`}>
                            <div className="flex flex-row items-center space-x-2">
                                <Icon 
                                    name="AiFillCaretDown"
                                    size={9}
                                    className={`${
                                    (open && locked) ? 'rotate-180 transform' : ''
                                    } h-3 w-3 text-supergray/60`}
                                />
                                <span>{title}</span>
                            </div>
                            
                            {!(open && locked)&&<Icon className={locked ? 'fill-orange-600' : 'fill-black'} name={locked ? 'RiErrorWarningFill' : 'RiDoorLockLine'} size={18} />}
                        </Disclosure.Button>
                        {locked && children }
                    </>
                )}
            </Disclosure>
        </>
    )
}
