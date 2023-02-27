import { Children, MouseEventHandler } from "react"
import { useNavigate } from "react-router-dom"
import { ProgressBar } from "../progressbar/ProgressBar"

// Application
interface IButton {
    next: string,
    start: string
}
export const IButton = {
    next: 'duration-150 bg-supergray hover:bg-black px-6 py-3 text-white font-medium text-base rounded-lg',
    start: 'transition-all duration-1000 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 bg-size-200 bg-pos-0 hover:bg-pos-100 px-6 py-3 text-white font-medium text-base rounded-lg',
}

type Type = {
    title: string,
    background: string,
    children: JSX.Element
    nextBtn: IButton | string
}
export const Begin = ({
    title,
    background,
    nextBtn,
    children
}: Type) => {
    return (
        <div className="h-screen w-screen grid grid-cols-2">
            <div className={`relative ${background}`}>
                <div className="absolute top-1/2 -translate-y-1/2 mx-20 font-semibold text-5xl text-white">
                    {title}
                </div>
            </div>
            <div className={`relative`}>
                <div className="absolute w-full bottom-0 h-fit">
                    <ProgressBar progressPercentage={20} />
                    <div className="h-5rem flex flex-row justify-between items-center p-6">
                        <div>

                        </div>
                        <div>
                            <button className={`${nextBtn}`}>
                                Suivant
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Begin.defaultProps = {
    background: "bg-gradient-to-t from-indigo-700 to-pink-600",
    nextBtn: IButton.next
}
