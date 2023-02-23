import React from "react";

interface IVthemes {
    normal: string,
    error: string,
    valid: string,
}
interface themesD {
    default: IVthemes,
}
export const themesD = {
    default: {
        normal: "text-black w-full outline outline-offset-0 outline-1 rounded-md outline-stone-400 divide-y focus-within:divide-transparent hover:divide-transparent divide-stone-400",
        error: "text-black w-full outline-1 hover:outline-2 focus:outline-2 outline-red-400 outline-none",
        valid: "text-black w-full outline-1 hover:outline-2 focus:outline-2 outline-green-600 outline-none"
    }
}

type Types = {
    children: JSX.Element,
    theme: IVthemes,
    statut: string,
};
export const DoubleFloating = ({  
    children,
    theme,
    statut,
}: Types) => {

    type ObjectKeyTheme = keyof typeof theme;
    const myTheme = 'name' as ObjectKeyTheme;

    return (
        <>
            <div className={`relative w-full ${statut === "normal" && theme.normal} ${statut === "error" && theme.error} ${statut === "valid" && theme.valid} `}>
                {children}
            </div>  
        </>                  
    )
}

DoubleFloating.defaultProps = {
    theme: themesD.default,
    statut: "normal",
}