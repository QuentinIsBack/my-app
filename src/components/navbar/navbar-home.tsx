import LOGOWHITE from '../../assets/logo.svg';
import './navbar.css'
import { IoChevronDown } from 'react-icons/io5'
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { ModalSignIn } from '../modal/ModalSignIn';
import { logout } from '../../firebase.config';
import { IThemeNavButton, NavButton } from '../button/navbutton';

type CompType = {
    padding: string | undefined
}

export const NavBar = ({ padding }: CompType) => {
    const { currentUser, UserData } = useContext(UserContext)
    const [modalSignIn, setModalSignIn] = useState(false);
    const submitlogout = () => {
        logout()
        navigate("/")
        console.log("logout")
    }

    const navigate = useNavigate();
    return (
        <div className={`navbar`}>
            <div className={`navbody ${padding}`}>
                <div className='navleft'>
                    <button className='flex flex-row items-center text-lg font-semibold text-superred tracking-wider space-x-5'>
                        <img width={25} alt={'logo'} src={LOGOWHITE} />
                        <div>HubNest</div>
                    </button>
                </div>
                <div className='navcenter hidden xs:hidden sm:hidden md:block lg:block xl:block 2xl:block 3xl:block 4xl:block'>
                    <div className='flex flex-row space-x-2'>

                        <NavButton title={"Mon logement"} to={"/hosting/"} theme={IThemeNavButton.hosting} />
                        <NavButton title={"Messages"} to={"/hosting/messages"} theme={IThemeNavButton.hosting} />
                        <NavButton title={"Calendrier"} to={"/hosting/calendar"} theme={IThemeNavButton.hosting} />
                        <NavButton title={"Candidature"} to={"/hosting/folder/administratif"} theme={IThemeNavButton.hosting} />
                        <NavButton title={"Informations"} to={"/hosting/info"} theme={IThemeNavButton.hosting} />

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
                <div className='navright flex flex-row space-x-2'>
                    {UserData.agency &&
                        <button onClick={()=>navigate("/agency/")} className="h-full">
                            <div className='duration-150 inline-flex items-center text-superblue outline outline-1 outline-transparent rounded-2xl py-2 px-4 text-sm font-medium hover:bg-gray-100'>
                                Mode Agence
                            </div>
                        </button>
                    }
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
                                        <li><div className='font-normal text-sm'>Parrainer un hôte</div></li>
                                        <li><div onClick={()=>submitlogout()} className='font-normal text-sm'>Déconnexion</div></li>
                                    </>
                                    :
                                    <>
                                        <ModalSignIn show={modalSignIn} close={() => setModalSignIn(false)} />
                                        <li><div className='font-medium text-sm'>Inscription</div></li>
                                        <li><div onClick={() => setModalSignIn(true)} className='font-medium text-sm'>Connexion</div></li>
                                        <div className='py-2'><div className='border-t'></div></div>
                                        <li><div className='font-normal text-sm'>Français (FR)</div></li>
                                        <li><div className='font-normal text-sm'>€ EUR</div></li>
                                        <div className='py-2'><div className='border-t'></div></div>
                                        <li><div className='font-normal text-sm'>Parrainer un hôte</div></li>
                                        <li><div onClick={()=>submitlogout()} className='font-normal text-sm'>Déconnexion</div></li>
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