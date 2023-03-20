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
    defaultValue: string | number,
    value: string | number,
    onChange: (e:string | number)=>void,
    //onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,

    theme: IVthemes,
    size: string,
    statut: string,
}
export const HolderInput = ({  
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
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(e.target.value)
        onChange(e.target.value)
    }

    return (
        <div className="relative w-full">
            <input
                id={id}
                type={type}
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                onChange={e=>handleChange(e)}
                value={values}
                required={true}
                pattern="[A-Za-z0-9]{1,20}"
                className={`appearance-none focus:outline-none text-center text-xl font-semibold text-supergray px-3 py-3 rounded-md peer inherit transition-all placeholder-transparent decoration-none truncate ${statut=="normal" && theme.normal} ${statut==="error" && theme.error} ${statut==="valid" && theme.valid}`}
                placeholder={placeholder} />
            <label htmlFor={id} className={`appearance-none focus:outline-none py-3 pointer-events-none truncate absolute z-10 right-0 unselectable text-right text-xl font-semibold text-supergray/50 mr-3`}>{placeholder}</label>

        </div>                    
    )
}

HolderInput.defaultProps = {
    size: "text-xl font-semibold text-supergray px-3 py-3 rounded-md",
    statut: "normal",
    defaultValue: "",
    value: "",
    onChange: undefined,
    placeholder: ""
}