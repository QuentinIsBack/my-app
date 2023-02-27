import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IButton } from "../../../components/footer/footer-begin";
import { NavBar } from "../../../components/navbar/navbar-begin";
import { Begin } from "../../../components/pagebuilder/begin";
import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { UserContext } from "../../../contexts/UserContext";

function App() {
    const { UserData } = useContext(UserContext)
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <PageBuilder title="Annonces" show={true}>
            <>
                <Begin nextClic={() => navigate(`/agency/become-a-host/${id}/structure`)} backBtn={true} nextBtn={IButton.next}>
                    <>
                        <div className='flex flex-row w-full h-full px-36'>
                            <div className="flex flex-col items-start justify-center space-y-4 w-36rem max-w-36rem min-w-36rem">
                                <div className="font-semibold text-base text-supergray">Étape 1</div>
                                <div className="font-semibold text-5xl text-supergray">Parlez-nous de votre logement</div>
                                <div className="font-normal text-lg text-supergray">Dans cette étape, nous vous demanderons quel type de propriété vous avez et si les invités réserveront l'endroit entier ou juste une pièce. Ensuite, faites-nous savoir l'emplacement et le nombre d'invités.</div>
                            </div>
                            <div className="flex flex-col justify-center divide-y px-10">
                                <video muted autoPlay className="scale-115">
                                    <source src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </>
                </Begin>
            </>
        </PageBuilder>
    );
}

export default App;
