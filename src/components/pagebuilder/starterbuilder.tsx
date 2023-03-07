import { useTitle } from "../../hooks/useTitle"


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
    footer: boolean
}

export const StarterBuilder = ({
    children,
    theme,
    footer,
    show,
}: PageType) => {
    return (
        <>
            <div className="grid grid-cols-2 h-full w-full">
                <div className={`${theme}`}>

                </div>
                <div className="relative flex flex-col">
                    <div className="h-[var(--nav--starter)] border-b">
                        
                    </div>
                    <div className="grow overflow-scroll h-0">
                        {children}
                    </div>
                    {footer && <div className="h-[var(--footer--starter)] border-t">
                        
                    </div>}
                </div>
            </div>
        </>
    )
}

StarterBuilder.defaultProps = {
    show: true,
    footer: false,
    theme: SBthemes.pages
}