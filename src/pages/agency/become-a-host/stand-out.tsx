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
                <Begin nextClic={() => navigate(`/agency/become-a-host/${id}/amenities`)} backBtn={true} nextBtn={IButton.next} progressPercentage={100}>
                    <>
                        <div className='animate-showin flex flex-row w-full h-full px-36'>
                            <div className="flex flex-col items-start justify-center space-y-4 w-36rem max-w-36rem min-w-36rem">
                                <div className="font-semibold text-base text-supergray">Étape 2</div>
                                <div className="font-semibold text-5xl text-supergray">Faites sortir votre annonce du lot</div>
                                <div className="font-normal text-lg text-supergray">Au cours de cette étape, vous pourrez ajouter certains des équipements proposés dans votre logement et au moins 5 photos. Vous pourrez ensuite ajouter un titre et une description.</div>
                            </div>
                            <div className="flex flex-col justify-center divide-y px-10">
                                <video muted autoPlay className="scale-115">
                                    <source src="https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high" type="video/mp4" />
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
