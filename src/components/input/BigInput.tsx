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
export const BigInput = ({  
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
        <div className="relative w-full focus-within:z-50 hover:z-50">
            <input
                id={id}
                type={type}
                defaultValue={defaultValue}
                value={value}
                onChange={e=>handleChange(e)}
                className={`text-center peer inherit transition duration-600 decoration-none truncate ${statut=="normal" && theme.normal} ${statut==="error" && theme.error} ${statut==="valid" && theme.valid} ${size}`}
                placeholder={placeholder} />
        </div>                    
    )
}

BigInput.defaultProps = {
    size: "text-xl font-semibold text-supergray px-3 py-3 rounded-md",
    statut: "normal",
    defaultValue: "",
    value: "",
    onChange: undefined,
    placeholder: ""
}