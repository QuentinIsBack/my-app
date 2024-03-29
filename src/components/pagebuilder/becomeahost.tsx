import { MouseEventHandler } from 'react'
import Icon from '../icon/icons'
import './style.css'

type PageType = {
    show: boolean,
    information: string,

    clickBack: MouseEventHandler<HTMLButtonElement> | undefined
    clickNext: MouseEventHandler<HTMLButtonElement> | undefined
    lockedNext: boolean

    children: JSX.Element
}
export const BecomeBuilder = ({ 
    show,
    information,

    clickBack,
    clickNext,
    lockedNext,

    children 
}: PageType) => {

    return (
        <>
            <div className="grid grid-cols-2 h-full w-full">
                <div className={`relative ${SBthemes.home}`}>
                    <div className="absolute px-24 top-1/2 -translate-y-1/2 font-semibold text-4xl text-white">
                        {information}
                    </div>
                </div>
                <div className="relative h-full">
                    <div className="absolute top-0 h-[var(--top--become)] w-full border-b">
                      
                    </div>
                    <div className='absolute top-[var(--top--become)] bottom-[var(--bottom--become)] w-full'>
                        {show && children}
                    </div>
                    <div className="absolute bottom-0 h-[var(--bottom--become)] w-full border-t">
                        <div className='flex flex-row justify-between items-center h-full px-6'>
                            <div>
                                <button onClick={clickBack} className='duration-150 hover:bg-gray-100 rounded-xl px-6 py-3 font-medium text-base text-supergray underline underline-offset-2'>
                                    Retour
                                </button>
                            </div>
                            <div>
                                <button 
                                    data-tip="Veuillez compléter les champs requis." 
                                    onClick={clickNext} 
                                    className={`${ (show && lockedNext) ? 'cursor-not-allowed tooltip tooltip-warning tooltip-left' : 'hover:bg-black'} duration-150 bg-supergray rounded-xl px-6 py-3 font-medium text-base text-white`}>
                                    Suivant
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

BecomeBuilder.defaultProps = {
    show: false,
    lockedNext: true
}

export const SBthemes = {
    home: "bg-color-gradient-bnb",
};