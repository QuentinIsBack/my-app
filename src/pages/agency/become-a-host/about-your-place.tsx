import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IButton } from "../../../components/footer/footer-begin";
import { Begin } from "../../../components/pagebuilder/begin";
import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { UserContext } from "../../../contexts/UserContext";

function App() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <PageBuilder title="Annonces" show={true}>
            <>
                <Begin nextClic={() => navigate(`/agency/become-a-host/${id}/structure`)} backBtn={true} nextBtn={IButton.next}>
                    <>
                        <div className="grid grid-cols-2 h-full w-full px-36">
                            <div className="flex flex-col items-start justify-center space-y-4  w-full h-full p-40">
                                <div className="font-semibold text-base text-supergray">Étape 1</div>
                                <div className="font-semibold text-5xl text-supergray">Parlez-nous de votre logement</div>
                                <div className="font-normal text-lg text-supergray">Dans cette étape, nous vous demanderons quel type de propriété vous avez et si les invités réserveront l'endroit entier ou juste une pièce. Ensuite, faites-nous savoir l'emplacement et le nombre d'invités.</div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <video muted autoPlay>
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
