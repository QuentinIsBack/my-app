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

}

export const StarterBuilder = ({
    children,
    theme,
    footer,
    title,
    progress,
    buttonNext,
    show,
}: PageType) => {
    return (
        <>
            <div className="grid grid-cols-2 h-full w-full">
                <div className={`relative ${theme}`}>
                    <div className="absolute px-24 top-1/2 -translate-y-1/2 font-semibold text-4xl text-white">
                        {title}
                    </div>
                </div>
                <div className="relative flex flex-col">
                    <div className="h-[var(--nav--starter)] border-b">
                        <div className="flex flex-row justify-between items-center h-full">
                            <div>
v
                            </div>
                            <div>
                                <button>Quitter</button>
                            </div>
                        </div>
                    </div>
                    <div className="grow overflow-scroll h-0">
                        {children}
                    </div>
                    {footer && <div className="h-[var(--footer--starter)]">
                        <ProgressBar progressPercentage={progress} />
                        <div className="flex flex-row justify-between items-center h-[4.5rem] px-[1rem]">
                            <div></div>
                            <div><button className={`${buttonNext}`}>{buttonNext === SBbuttons.blocked&&<Icon name="HiLockClosed" size={20} />}<div>Suivant</div></button></div>
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
}