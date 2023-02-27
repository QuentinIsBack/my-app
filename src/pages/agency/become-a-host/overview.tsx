import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IButton } from "../../../components/footer/footer-begin";
import { NavBar } from "../../../components/navbar/navbar-begin";
import { Begin } from "../../../components/pagebuilder/begin";
import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { UserContext } from "../../../contexts/UserContext";

function App() {
    const { UserData } = useContext(UserContext)
    const navigate = useNavigate();

    return (
        <PageBuilder title="Annonces" show={true}>
            <>
                <Begin nextClic={() => navigate('/agency/become-a-host/about-your-place')} progressShow={false} backBtn={true} nextBtn={IButton.start}>
                    <>
                        <div className='grid grid-cols-2 w-full h-full px-36'>
                            <div className="flex items-center justify-center">
                                <div className="font-semibold text-6xl text-supergray">C'est facile de commencer sur HubNest</div>
                            </div>
                            <div className="flex flex-col justify-center divide-y px-10">
                                <div className="flex flex-row space-x-4 py-8">
                                    <div className="font-semibold text-2xl text-supergray">1</div>
                                    <div className="grow">
                                        <div className="font-semibold text-2xl text-supergray">Parlez-nous de votre logement</div>
                                        <div className="font-normal text-lg text-supergray/50">Partagez quelques informations de base, comme où il se trouve et combien de pièces sont disponible.</div>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-4 py-8">
                                    <div className="font-semibold text-2xl text-supergray">2</div>
                                    <div className="grow">
                                        <div className="font-semibold text-2xl text-supergray">Faire ressortir</div>
                                        <div className="font-normal text-lg text-supergray/50">Ajoutez 5 photos ou plus, plus un titre et une description - nous vous aiderons.</div>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-4 py-8">
                                    <div className="font-semibold text-2xl text-supergray">3</div>
                                    <div className="grow">
                                        <div className="font-semibold text-2xl text-supergray">Terminer et publier</div>
                                        <div className="font-normal text-lg text-supergray/50">Choisissez si vous souhaitez commencer par un salarié fixez un loyer et publiez votre annonce.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </Begin>
            </>
        </PageBuilder>
    );
}

export default App;
