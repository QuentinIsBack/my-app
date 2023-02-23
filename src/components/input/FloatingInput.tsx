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
        normal: "text-black w-full outline-1 hover:outline-2 focus:outline-2 outline-stone-400 focus:outline-black hover:outline-black outline-none",
        error: "text-black w-full outline-1 hover:outline-2 focus:outline-2 outline-red-400 outline-none",
        valid: "text-black w-full outline-1 hover:outline-2 focus:outline-2 outline-green-600 outline-none"
    },
    double: {
        normal: "text-black w-full outline outline-transparent hover:outline-2 focus:outline-2 outline-stone-400 focus:outline-black hover:outline-black",
        error: "text-black w-full hover:outline-2 focus:outline-2 outline-red-400 outline-none",
        valid: "text-black w-full hover:outline-2 focus:outline-2 outline-green-600 outline-none"
    }
}

interface IVsizes {
    normal: string | undefined,
    floater: string | undefined,
}
interface sizes {
    default: IVsizes,
}
export const sizes = {
    default: {
        normal: 'text-base font-normal px-3 pt-5 pb-1 rounded-md',
        floater: 'px-3 pt-3',
    }
}

type CompType = {
    id: string,
    type: string,
    defaultValue: string,
    onChange: any,
    placeholder: string,

    theme: IVthemes,
    size: IVsizes,
    statut: string,
}
export const FloatingInput = ({  
    id,
    type,
    defaultValue,
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
                onChange={e=>handleChange(e)}
                className={`peer inherit transition duration-600 placeholder-transparent decoration-none truncate ${statut=="normal" && theme.normal} ${statut==="error" && theme.error} ${statut==="valid" && theme.valid} ${size.normal}`}
                placeholder={placeholder} />
            <label htmlFor={id} className={`h-3rem pointer-events-none truncate absolute z-10 top-0 left-0 ${size.floater} ${values.length > 0  && '-translate-y-1.5 text-sm'} peer-focus:-translate-y-1.5 peer-focus:text-sm unselectable duration-300 `}>{placeholder}</label>
        </div>                    
    )
}

FloatingInput.defaultProps = {
    size: sizes.default,
    statut: "normal",
    defaultValue: "",
}