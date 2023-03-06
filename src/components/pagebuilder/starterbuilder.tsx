import { useTitle } from "../../hooks/useTitle"

type PageType = {
    show: boolean | false,

    children: JSX.Element
}

export const StarterBuilder = ({
    children,
    show,
}: PageType) => {
    return (
        <>
            <div className="grid grid-cols-2 h-full w-full">
                <div className="bg-gradient-to-b from-indigo-600 to-pink-500">

                </div>
                <div className="relative flex flex-col">
                    <div className="h-[var(--nav--starter)] border-b">
                        
                    </div>
                    <div className="grow">
                    {children}
                    </div>
                    <div className="h-[var(--footer--starter)] border-t">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

StarterBuilder.defaultProps = {
    show: true
}