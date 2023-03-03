import LOGOWHITE from '../../assets/logo.svg';
import './navbar.css'

export const NavBar = () => {
    return (
        <div className={`navbarbig`}>
            <div className={`navbody mx-10`}>
                <div className='navleft'>
                    <button className='flex flex-row items-center'>
                        <img width={25} alt={'logo'} src={LOGOWHITE} />
                    </button>
                </div>
                <div className='navright flex flex-row space-x-4'>
                    <button className="h-full">
                        <div className='duration-150 inline-flex items-center text-supergray rounded-2xl py-2 px-4 text-sm font-medium superborder'>
                            Question?
                        </div>
                    </button>
                    <button className="h-full">
                        <div className='duration-150 inline-flex items-center text-superred rounded-2xl py-2 px-4 text-sm font-medium superborder'>
                            Sortie
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}