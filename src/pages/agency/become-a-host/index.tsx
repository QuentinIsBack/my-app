import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";

import Icon from "../../../components/icon/icons";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Begin } from "../../../components/pagebuilder/begin";
import { AgencyContext } from "../../../contexts/AgencyContext";
import { IStructure } from "../../../services/CustomData.services";

function App() {
   const { UserData } = useContext(UserContext)
   const { AgencyData } = useContext(AgencyContext)
   const navigate = useNavigate();

    return (  
       <PageBuilder title="Annonces" show={true}>
            <>
               <Begin nextClic={()=>navigate('/agency/become-a-host/overview')}>
                  <>
                   <div className="h-full w-full flex flex-col justify-center items-center m-auto">

                      <div className="w-38rem max-w-38rem">
                         <div className="text-4xl font-semibold text-supergray">Bon retour, {UserData.getFirstname()}</div>
                         <div className="pt-8 space-y-20">
                            {AgencyData.getHosts()?.length > 0 && <div className="flex flex-col">
                               <div className="text-xl font-semibold text-supergray">Terminer une annonce</div>
                               <div className="pt-4 flex flex-col space-y-4">
                                 {AgencyData.getHosts()?.map((h)=>(
                                    <button onClick={()=>h.getForgetInformations(navigate)} className="h-6rem superborder rounded-xl overflow-hidden flex flex-row items-center p-6 space-x-6">
                                       <div className="aspect-square bg-gray-200/75 rounded-md h-full flex items-center justify-center">
                                          <Icon size={20} name="IoHomeSharp" />
                                       </div>
                                       <div className="flex items-center justify-center font-semibold text-supergray text-base truncate">
                                          {"Votre annonce "+ (h.getStructure() !== undefined ? "(Appartement)":"") +" a été créée le " + h.getDate()?.toDate().getDate() + " " + h.getDate()?.toDate().toLocaleString('fr', { month: 'long' }) + " " + h.getDate()?.toDate().getFullYear() }
                                       </div>
                                    </button>
                                 ))}
                               </div>
                            </div>}
                            <div className="flex flex-col">
                               <div className="text-xl font-semibold text-supergray">Commencer une nouvelle annonce</div>
                               <div className="pt-4 flex flex-col">
                                  <button onClick={() => navigate('/agency/become-a-host/overview')} className="h-6rem flex flex-row justify-between items-center border-b">
                                     <div className="flex flew-row items-center space-x-4">
                                        <div><Icon size={35} name="IoHomeOutline" /></div>
                                        <div className="font-normal text-base text-supergray">Créer une nouvelle annonce</div>
                                     </div>
                                     <div>
                                        <Icon size={20} name="IoChevronForward" />
                                     </div>
                                  </button>
                               </div>

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