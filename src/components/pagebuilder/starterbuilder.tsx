import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle"
import Icon from "../icon/icons";
import { ProgressBar } from "../progressbar/ProgressBar";


interface SBbuttons {
    default: string,
    pages: string,
}
export const SBbuttons = {
    blocked: "flex flex-row items-center space-x-2 cursor-not-allowed bg-supergray/70 py-3 pl-4 pr-6 rounded-xl text-white font-semibold text-base",
    allow: "flex flex-row items-center space-x-2 bg-supergray hover:bg-black py-3 pl-6 pr-6 rounded-xl text-white font-semibold text-base",
};

interface SBthemes {
    default: string,
    pages: string,
}
export const SBthemes = {
    home: "bg-gradient-to-b from-indigo-600 to-pink-500",
    pages: "bg-gradient-to-b from-indigo-600 to-pink-500"
};

type PageType = {
    show: boolean | false,
    theme: string,
    children: JSX.Element
    title: string,
    footer: boolean,
    progress: number
    buttonNext: string,
    btnClick: ()=>void;
}

export const StarterBuilder = ({
    children,
    theme,
    footer,
    title,
    progress,
    buttonNext,
    show,
    btnClick
}: PageType) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="grid grid-cols-2 h-full w-full">
                <div className={`relative ${theme}`}>
                    <div className="absolute px-24 top-1/2 -translate-y-1/2 font-semibold text-4xl text-white">
                        {title}
                    </div>
                </div>
                <div className="relative flex flex-col h-full">
                    <div className="absolute top-0 h-[var(--nav--starter)] border-b  w-full">
                        <div className="flex flex-row justify-between items-center h-full">
                            <div>
v
                            </div>
                            <div>
                                <button>Quitter</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-20 bottom-20 w-full overflow-hidden">
                        <div className="relative h-full">
                             {children}
                        </div>
                       
                    </div>
                    {footer && <div className="absolute bottom-0 w-full h-[var(--footer--starter)]">
                        <ProgressBar progressPercentage={progress} />
                        <div className="flex flex-row justify-between items-center h-[4.5rem] px-[1rem]">
                            <div><button onClick={()=>navigate(-1)} className={'underline hover:bg-gray-100 py-3 pl-4 pr-6 rounded-xl text-supergray font-semibold text-base'}>Retour</button></div>
                            <div><button onClick={buttonNext != SBbuttons.blocked ? btnClick : undefined} className={`${buttonNext}`}>{buttonNext === SBbuttons.blocked&&<Icon name="HiLockClosed" size={20} />}<div>Suivant</div></button></div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

StarterBuilder.defaultProps = {
    show: true,
    footer: false,
    theme: SBthemes.pages,
    title: "",
    progress: 0,
    buttonNext: SBbuttons.blocked,
    btnClick: undefined
}