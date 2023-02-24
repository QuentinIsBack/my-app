// Import
import React, { useState } from "react"


interface IVthemes {
    name: string,
    option: string,
    button: string
}
interface themesSettings {
    default: IVthemes,
}
export const themesSettings = {
    black: {
        name: "text-md text-supergray font-normal",
        option: "text-sm text-supergray font-medium underline",
        button: "rounded-md bg-stone-900 hover:bg-black text-white text-md w-fit h-fit font-medium py-3 px-6"
    },
    cyan: {
        name: "text-md text-supergray font-semibold",
        option: "text-sm text-superblue hover:text-cyan-600 font-bold hover:underline",
        button: "rounded-md bg-superblue hover:bg-cyan-600 text-white text-md w-fit h-fit font-medium py-3 px-6"
    },

};

// Application
type Prop = {
    name: string,
    message: string | undefined,
    description: string,
    onClick: any,
    children: JSX.Element,
    theme: IVthemes
}
export const EditSettings = ({
    name,
    message,
    description,
    onClick,
    children,
    theme
}: Prop) => {

    const [use, setUse] = useState(false);

    const clickUpdate = () => {
        setUse((use) => !use)
        onClick(onClick)
    }

    return (
        <div>
            <div className="flex justify-between">
                <div className={theme.name}>{name}</div>
                <button onClick={() => setUse((use) => !use)} className={theme.option}>{use ? 'Annuler' : 'Modifier'}</button>
            </div>
            <div>
                <div className='text-sm text-gray-500 font-normal'>{use ? description ? description : message : message}</div>
                <div className={`${use ? (children ? 'mt-4 w-full' : "") : 'hidden'}`}>
                    {children}
                </div>
            </div>
            <div className={`mt-6 ${use ? '' : 'hidden'}`}>
                <button className={`duration-150 ease-in-out ${theme.button}`} onClick={clickUpdate}>Enregister</button>
            </div>
        </div>
    )
}

EditSettings.defaultProps = {
    onClick: undefined,
    theme: themesSettings.black
}