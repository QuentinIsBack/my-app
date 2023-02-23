import LOGOWHITE from '../../assets/logo.svg';
import './navbar.css'
import { IoChevronDown } from 'react-icons/io5'

type CompType = {
    padding: string | undefined
}

export const NavBar = ({padding}: CompType) => {
    return (
        <div className={`navbar`}>
            <div className={`navbody ${padding}`}>
                <div className='navleft'>
                    <button className='flex flex-row items-center text-lg font-semibold text-[#FB4B4E] tracking-wider space-x-5 uppercase'>
                        <img width={25} alt={'logo'} src={LOGOWHITE} />
                        <div>HubNest</div> 
                    </button>
                </div>
                <div className='navcenter hidden xs:hidden sm:hidden md:block lg:block xl:block 2xl:block 3xl:block 4xl:block'>
                    <div className='flex flex-row space-x-2'>
                        <button className="h-full">
                            <div className={`rounded-2xl py-2 px-4 text-sm font-medium text-supergray hover:bg-gray-100`}>
                                Aujourd'hui
                            </div>
                        </button>
                        <button className="h-full">
                            <div className={`rounded-2xl py-2 px-4 text-sm font-medium text-supergray hover:bg-gray-100`}>
                                Messages
                            </div>
                        </button>
                        <button className="h-full">
                            <div className={`rounded-2xl py-2 px-4 text-sm font-medium text-supergray hover:bg-gray-100`}>
                                Calendrier
                            </div>
                        </button>
                        <button className="h-full">
                            <div className={`rounded-2xl py-2 px-4 text-sm font-medium text-supergray hover:bg-gray-100`}>
                                Informations
                            </div>
                        </button>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0}>
                                <button className="h-full">
                                    <div className='inline-flex items-center rounded-2xl py-2 px-4 text-sm font-medium text-supergray hover:bg-gray-100'>
                                        Menu <IoChevronDown className='ml-1 mt-0.5' />
                                    </div>
                                </button>
                            </div>
                            <ul tabIndex={0} className="p-2 mt-4 shadow-dropdown menu dropdown-content bg-base-100 rounded-box w-52 text-black">
                                        <li><div className='font-medium text-sm'>Annonces</div></li>
                                        <li><div className='font-medium text-sm'>Réservations</div></li>
                                        <li><div className='font-medium text-sm'>Créer une annonces</div></li>
                                        <div className='py-2'><div className='border-t'></div></div>
                                        <li><div className='font-normal text-sm'>Guides</div></li>
                                        <li><div className='font-normal text-sm'>Historique des transactions</div></li>
                                        <li><div className='font-normal text-sm'>Forum de la communauté</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

NavBar.defaultProps = {
    padding: "xs:mx-4 sm:mx-4 md:mx-8 lg:mx-8 xl:mx-8 2xl:mx-8 3xl:mx-16 4xl:mx-16"
}