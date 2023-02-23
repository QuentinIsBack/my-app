import { FloatingInput, themes, sizes } from '../input/FloatingInput';
import { themesD } from '../input/DoubleFloating';
import { Modal } from './Modal';
import './modal.css'
import Lottie from "lottie-react"
import groovyWalkAnimation from "../../assets/lottie/bienvenue.json";
import { useContext, useState } from 'react';

import { signInWithGoogle } from "../../firebase.config";
import { DoubleFloating } from '../input/DoubleFloating';
import { useNavigate } from 'react-router-dom';
import { IoLogoGoogle } from 'react-icons/io5'
import { UserContext } from '../../contexts/UserContext';


type CompType = {
    show: boolean,
    close: any,
}

export const ModalSignIn = ({ show, close }: CompType) => {

    const { signIn } = useContext(UserContext)
    const navigate = useNavigate();

    const [errorPassword, setErrorPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const updateData = (e: any) => {
        setData({...data, [e.target.id]: e.target.value});
        console.log([e.target.id]+" : "+e.target.value)
    };

    const submit = async () => {
      const email = data.email
      const password = data.password

        setErrorEmail("")
        setErrorPassword("")

        try {
            await signIn (
                email,
                password,
            )
            close()
            navigate("./house")
        } catch (err: any) { 
            if (err.code === "auth/user-not-found"){
                setErrorEmail("Aucuns compte utilisant se mail existe.")
            }
            if(err.code === "auth/invalid-email"){
                setErrorEmail("L'adresse email entré est invalide.")
            }
            if (err.code === "auth/weak-password") {
                setErrorPassword("Le mot de passe dois contenir au moins 6 charactères.")
            }
            if (err.code === "auth/wrong-password") {
                setErrorPassword("L'utilisateur ou le mot de passe est incorrect.")
            }

            console.log(err)
        }
        
    }

    return (
        <>
            <Modal show={show} close={close} size={undefined}>
                <>
                <div className='p-4 flex items-center justify-center w-full'>
                    <div className="font-semibold text-base">Connexion sur HubNest</div>
                </div>
                <div className="border-b w-full" />
                <div className="p-5">
                    <div className='mb-6 flex flex-row'>
                        <div className='space-y-1'>
                            <div className="font-semibold text-lg leading-snug">Bonjour !</div>
                            <div className="font-normal text-sm text-gray-500 leading-snug">En vous créant un compte, vous accéderez à l'intégralité de la plateforme. Ainsi vous aurez la possibilité de candidater à des logements.</div>
                        </div>
                        <div className='w-80 flex items-center'>
                            <Lottie className='scale-200' loop={false} animationData={groovyWalkAnimation} />
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div className='flex flex-col space-y-2'>
                            <DoubleFloating>
                                <>
                                    <FloatingInput id={"email"} type={'email'} theme={themes.double} placeholder={"Adresse e-mail"} onChange={(e: any) => updateData(e)} />
                                    <FloatingInput id={"password"} type={'password'} theme={themes.double} placeholder={"Mot de passe"} statut={errorPassword ? "error" : "normal"} onChange={(e: any) => updateData(e)} />
                                </>
                            </DoubleFloating>
                            <div className={`font-normal text-xs text-red-400 ${errorEmail ? 'visible' : 'hidden'}`}>{errorEmail}</div>       
                            <div className={`font-normal text-xs text-red-400 ${errorPassword ? 'visible' : 'hidden'}`}>{errorPassword}</div>       
                         </div>

                        <div className='flex flex-col space-y-5'>
                            <div className='font-normal text-xs text-gray-600'>
                                En cliquant sur <span className='font-medium text-black'>Continuer</span>, j'accepte les <span className='text-blue-500 underline'>Conditions générales</span>, les <span className='text-blue-500 underline'>Conditions de service relatives aux paiements</span>, la <span className=''>Politique de non-discrimination</span> et je reconnais avoir pris connaissance de la <span className='text-blue-500 underline'>Politique de confidentialité</span> d'Hubnest.
                            </div>
                            <div className='flex flex-row'>
                                <button onClick={()=>submit()} className='w-full transition-all duration-1000 bg-gradient-to-r to-pink-600 via-indigo-700 from-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-xl py-3 text-white font-medium'>Continuer</button>
                            </div>
                            <div className='border-b' />
                            <button onClick={signInWithGoogle} className='relative w-full h-3rem outline outline-1 outline-stone-400 hover:outline-black hover:outline-2 rounded-xl'>
                                <div className='centertext'>Connexion avec Google</div>
                                <div className='centerleft mx-5'><IoLogoGoogle size={20} /></div>
                            </button>
                        </div>
                    </div>

                </div>
                </>
            </Modal >
        </>
    );
};

