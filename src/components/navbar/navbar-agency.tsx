import LOGO from '../../assets/logoagencie.svg';
import './navbar.css'
import { IoChevronDown } from 'react-icons/io5'
import { IThemeNavButton, NavButton } from '../button/navbutton';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { NavLink, useNavigate } from 'react-router-dom';

type CompType = {
    padding: string | undefined
}

export const NavBar = ({ padding }: CompType) => {
    const { currentUser } = useContext(UserContext)
    const navigate = useNavigate();

    return (
        <div className={`navbar`}>
            <div className={`navbody ${padding}`}>
                <div className='navleft'>
                    <button onClick={() => navigate("/agency")} className='duration-150 ease-in-out flex flex-row items-center text-lg font-semibold text-superblue hover:text-cyan-600 tracking-wider space-x-5'>
                        <img width={25} alt={'logo'} src={LOGO} />
                        <div>Espace Agence</div>
                    </button>
                </div> 
                <div className='navcenter hidden xs:hidden sm:hidden md:block lg:block xl:block 2xl:block 3xl:block 4xl:block'>
                    <div className='flex flex-row space-x-2'>

                        <NavButton title={"Aujourd'hui"} to={"/agency/"} theme={IThemeNavButton.agency} />
                        <NavButton title={"Messages"} to={"/agency/messages/"} theme={IThemeNavButton.agency} />
                        <NavButton title={"Informations"} to={"/agency/reservations/"} theme={IThemeNavButton.agency} />
                        <NavButton title={"Calendrier"} to={"/agency/calendar/"} theme={IThemeNavButton.agency} />

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0}>
                                <button className="h-full">
                                    <div className='duration-150  inline-flex items-center rounded-2xl py-2 px-4 text-sm font-medium text-supergray hover:bg-gray-100'>
                                        Menu <IoChevronDown className='ml-1 mt-0.5' />
                                    </div>
                                </button>
                            </div>
                            <ul tabIndex={0} className="p-2 mt-4 shadow-dropdown menu dropdown-content bg-base-100 rounded-box w-52 text-black">
                                <li><div className='font-medium text-sm'>Annonces</div></li>
                                <li><div className='font-medium text-sm'>Réservations</div></li>
                                <li>
                                    <NavLink to={'/become-a-host/'} className={({ isActive }) => isActive ? "font-medium text-sm bg-superblue" : "font-medium text-sm"}>
                                        Créer une annonces
                                    </NavLink>
                                </li>
                                <div className='py-2'><div className='border-t'></div></div>
                                <li>
                                    <NavLink to={'/agency/team/'} className={({ isActive }) => isActive ? "font-medium text-sm bg-superblue" : "font-medium text-sm"}>
                                        Équipe
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/agency/settings/'} className={({ isActive }) => isActive ? "font-medium text-sm bg-superblue" : "font-medium text-sm"}>
                                        Paramètres
                                    </NavLink>
                                </li>
                                <div className='py-2'><div className='border-t'></div></div>
                                <li><div className='font-normal text-sm'>Historique des transactions</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='navright flex flex-row space-x-2'>
                    <button onClick={()=>navigate("/")} className="h-full">
                        <div className='duration-150 inline-flex items-center text-red-500 outline outline-1 outline-transparent rounded-2xl py-2 px-4 text-sm font-medium hover:bg-gray-100'>
                            Sortir du mode agence
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0}>
                            <button className="h-full">
                                <div className='duration-150 inline-flex items-center text-supergray outline outline-1 outline-gray-200 rounded-2xl py-2 px-4 text-sm font-medium hover:bg-gray-100'>
                                    Mon compte <IoChevronDown className='ml-1 mt-0.5' />
                                </div>
                            </button>
                            <ul tabIndex={0} className="p-2 mt-4 shadow-dropdown menu dropdown-content bg-base-100 rounded-box w-52 text-black">
                                {currentUser ?
                                    <>
                                        <li><div className='font-medium text-sm'>Profil</div></li>
                                        <li><div className='font-medium text-sm'>Compte</div></li>
                                        <li><div className='font-medium text-sm'>Obtenir de l'aide</div></li>
                                        <div className='py-2'><div className='border-t'></div></div>
                                        <li><div className='font-normal text-sm'>Français (FR)</div></li>
                                        <li><div className='font-normal text-sm'>€ EUR</div></li>
                                        <div className='py-2'><div className='border-t'></div></div>
                                        <li><div className='font-normal text-sm'>Sortir du mode agence</div></li>
                                        <li><div className='font-normal text-sm'>Parrainer un hôte</div></li>
                                        <li><div className='font-normal text-sm'>Déconnexion</div></li>
                                    </>
                                    :
                                    <>
                                        <li><div className='font-medium text-sm'>Inscription</div></li>
                                        <li><div className='font-medium text-sm'>Connexion</div></li>
                                        <div className='py-2'><div className='border-t'></div></div>
                                        <li><div className='font-normal text-sm'>Français (FR)</div></li>
                                        <li><div className='font-normal text-sm'>€ EUR</div></li>
                                        <div className='py-2'><div className='border-t'></div></div>
                                        <li><div className='font-normal text-sm'>Parrainer un hôte</div></li>
                                        <li><div className='font-normal text-sm'>Déconnexion</div></li>
                                    </>
                                }
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