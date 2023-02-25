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
                <div className='navright flex flex-row space-x-6'>
                    <button className="h-full">
                        <div className='duration-150 border inline-flex items-center text-supergray outline outline-1 outline-transparent rounded-2xl py-2 px-4 text-sm font-medium hover:bg-gray-100'>
                            Question?
                        </div>
                    </button>
                    <button className="h-full">
                        <div className='duration-150 border inline-flex items-center text-superred outline outline-1 outline-transparent rounded-2xl py-2 px-4 text-sm font-medium hover:bg-gray-100'>
                            Sortie
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}