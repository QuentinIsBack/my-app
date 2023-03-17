import React, { ChangeEvent, useState } from "react";

interface IVthemes {
    normal: string | undefined,
    error: string,
    valid: string,
}
interface themes {
    default: IVthemes,
}
export const themes = {
    default: {
        normal: "text-black w-full ring-1 hover:ring-2 focus:ring-2 ring-stone-400 focus:ring-black hover:ring-black ring-none",
        error: "text-black w-full ring-1 hover:ring-2 focus:ring-2 ring-red-400 ring-none",
        valid: "text-black w-full ring-1 hover:ring-2 focus:ring-2 ring-green-600 ring-none"
    },
    double: {
        normal: "text-black w-full ring ring-transparent hover:ring-2 focus:ring-2 ring-stone-400 focus:ring-black hover:ring-black",
        error: "text-black w-full hover:ring-2 focus:ring-2 ring-red-400 ring-none",
        valid: "text-black w-full hover:ring-2 focus:ring-2 ring-green-600 ring-none"
    }
}

type CompType = {
    id: string,
    type: string,
    defaultValue: string,
    value: string | number,
    onChange: any,
    placeholder: string,

    theme: IVthemes,
    size: string,
    statut: string,
}
export const DEPSelector = ({  
    id,
    type,
    defaultValue,
    value,
    onChange,
    placeholder,

    theme,
    size,
    statut,
}: CompType) => {

    const [values, setValues] = useState(defaultValue ? defaultValue : '')
    const handleChange = (e: any) => {
        setValues(e.target.value)
        onChange(e)
    }

    return (
        <div className="relative w-full">
            <div className="grid grid-cols-7 text-base font-semibold text-supergray rounded-md w-full ring-1 ring-stone-400 ring-none">
                <button className="rounded-l-md text-center bg-green-600 px-3 py-3 hover:ring-2 hover:z-50 hover:rounded-md ring-black">A</button>
                <button className="text-center bg-green-400 px-3 py-3 hover:ring-2 hover:z-50 hover:rounded-md ring-black">B</button>
                <button className="text-center bg-lime-400 px-3 py-3 hover:ring-2 hover:z-50 hover:rounded-md ring-black">C</button>
                <button className="text-center bg-yellow-300 px-3 py-3 hover:ring-2 hover:z-50 hover:rounded-md ring-black">D</button>
                <button className="text-center bg-orange-300 px-3 py-3 hover:ring-2 hover:z-50 hover:rounded-md ring-black">E</button>
                <button className="text-center bg-orange-400 px-3 py-3 hover:ring-2 hover:z-50 hover:rounded-md ring-black">F</button>
                <button className="rounded-r-md text-center bg-red-500 px-3 py-3 hover:ring-2 hover:z-50 hover:rounded-md ring-black">G</button>
            </div>
        </div>                    
    )
}

DEPSelector.defaultProps = {
    size: "text-xl font-semibold text-supergray px-3 py-3 rounded-md",
    statut: "normal",
    defaultValue: "",
    value: "",
    onChange: undefined,
    placeholder: ""
}