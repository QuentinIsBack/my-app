import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { useNavigate } from "react-router-dom";
import { SBthemes, StarterBuilder } from "../../components/pagebuilder/starterbuilder";
import { useContext } from "react";
import { AgencyContext } from "../../contexts/AgencyContext";
import Icon from "../../components/icon/icons";
import { UserContext } from "../../contexts/UserContext";

function App() {

    const { AgencyData } = useContext(AgencyContext)
    const { UserData } = useContext(UserContext)

    const navigate = useNavigate();

    return (
        <PageBuilder title="Starter" show={true}>
            <>
                <StarterBuilder theme={SBthemes.home} footer={false}>
                    <>
                            <div className="flex flex-col justify-start items-center w-full  h-full py-20">
                                <div className="w-35rem max-w-35rem flex flex-col h-full justify-between">

                                    <div className="flex flex-col space-y-8">
                                        <div>
                                            <div className="text-3xl font-semibold text-supergray">Bon retour, {UserData.getFirstname()}</div>
                                        </div>

                                        <div>
                                            {AgencyData.getHosts()?.length > 0 && 
                                                <>
                                                    <div className="text-xl font-semibold text-supergray">Terminer une annonce</div>
                                                    <div className="flex flex-col space-y-4 pt-4">
                                                        {AgencyData.getHosts()?.map((h)=>(
                                                            <>
                                                                <button onClick={()=>h.getForgetInformations(navigate)} className="h-6rem superborder rounded-xl overflow-hidden flex flex-row items-center p-6 space-x-6">
                                                                    <div className="aspect-square bg-gray-200/75 rounded-md h-full flex items-center justify-center">
                                                                        <Icon size={20} name="IoHomeSharp" />
                                                                    </div>
                                                                    <div className="flex items-center justify-center font-semibold text-supergray text-base truncate">
                                                                        {"Votre annonce "+ (h.getStructure() !== undefined ? "(Appartement)":"") +" a été créée le " + h.getDate()?.toDate().getDate() + " " + h.getDate()?.toDate().toLocaleString('fr', { month: 'long' }) + " " + h.getDate()?.toDate().getFullYear() }
                                                                    </div>
                                                                </button>
                                                            </>
                                                        ))}
                                                    </div>
                                                </>
                                            }
                                        </div>

                                        <div>
                                            <div className="text-xl font-semibold text-supergray">Commencer une nouvelle annonce</div>
                                        <button onClick={() => navigate('/agency/become-a-host/overview')} className="h-6rem flex flex-row justify-between items-center border-b w-full mt-4">
                                                <div className="flex flew-row items-center space-x-4">
                                                    <div><Icon size={35} name="IoHomeOutline" /></div>
                                                    <div className="text-base font-medium text-supergray">Créer une nouvelle annonce</div>
                                                </div>
                                                <div>
                                                    <Icon size={20} name="IoChevronForward" />
                                                </div>
                                            </button>
                                        </div>

                                    </div>



                                    
                                </div>
    
                            </div>
                    </>
                </StarterBuilder>
            </>
        </PageBuilder>
    );
}

export default App;