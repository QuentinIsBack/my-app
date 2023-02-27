import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGOWHITE from '../../assets/logo.svg';
import { ProgressBar } from '../progressbar/ProgressBar';
import './footer.css'


export interface IButtonA {
    title: string,
    class: string,
}
interface IButton {
    next: IButtonA,
    start: IButtonA,
}
export const IButton = {
    next: {
        title: "Suivant",
        class: 'duration-150 bg-supergray hover:bg-black px-6 py-3 text-white font-medium text-base rounded-lg'
    },
    start: {
        title: "Commencer",
        class: 'transition-all duration-1000 bg-gradient-to-r to-pink-600 via-indigo-700 from-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100 px-6 py-3 text-white font-medium text-base rounded-lg'
    }
}
type Type = {
    nextBtn: IButtonA,
    backBtn: boolean,
    progressPercentage: number,
    progressShow: boolean,
    nextClic: MouseEventHandler<HTMLButtonElement>
}
export const Footer = ({ nextBtn, progressPercentage, nextClic, backBtn, progressShow }: Type) => {
    const navigate = useNavigate();
    return (
        <div className="footerbig">
            
                {progressShow ?
                    <>
                        <div className='grid grid-cols-3 gap-2'>
                            <ProgressBar progressPercentage={progressPercentage} />
                            <ProgressBar progressPercentage={0} />
                            <ProgressBar progressPercentage={0} />
                        </div>
                    </>
                    :
                    <ProgressBar progressPercentage={progressPercentage} />
                }
        
            <div className='flex justify-between items-center h-5rem px-10'>
                <div>
                    {backBtn && <button className='duration-150 font-medium text-base text-supergray px-3 py-2 hover:bg-gray-100 hover:underline rounded-lg' onClick={() => navigate(-1)}>Retour</button> }
                </div>
                <div>
                    <button onClick={nextClic} className={`${nextBtn.class}`}>
                        {nextBtn.title}
                    </button>
                </div>
            </div>
        </div>
    )
}