import { useTitle } from "../../hooks/useTitle"
import { ProgressBar } from "../progressbar/ProgressBar";


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
    footer: boolean
}

export const StarterBuilder = ({
    children,
    theme,
    footer,
    title,
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
                        
                    </div>
                    <div className="grow overflow-scroll h-0">
                        {children}
                    </div>
                    {footer && <div className="h-[var(--footer--starter)]">
                        <ProgressBar progressPercentage={20} />
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
    title: ""
}