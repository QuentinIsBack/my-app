import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/icon/icons";
import { BecomeBuilder } from "../components/pagebuilder/becomeahost";
import { PageBuilder } from "../components/pagebuilder/pagebuilder";
import { AgencyContext } from "../contexts/AgencyContext";
import { UserContext } from "../contexts/UserContext";
import AgencyDatas from "../data/Agency.data";

function App() {
    const [show, setShow] = useState(true);

    const { UserData } = useContext(UserContext)

    return (
        <PageBuilder show={show} title={"ok"} >
            <>
                <BecomeBuilder
                    information={`Bon retour ${UserData.getFirstname()},`}
                >
                    <>
                        <div className="flex flex-col items-center justify-center space-y-12 w-full h-full animate-showin ">
                            {EndingAnnouce()}
                            {CreateAnnouce()}
                        </div>
                    </>
                </BecomeBuilder>
            </>
        </PageBuilder>
    );
}
export default App; 

const EndingAnnouce = () => {
    const { AgencyData } = useContext(AgencyContext)
    const navigate = useNavigate();
    return (
        <>
            {AgencyData.getHosts()?.length > 0 && 
                <div className="flex flex-col space-y-6 w-[36rem]">
                    <div className="text-xl font-semibold text-supergray">Terminer une annonce</div>
                    {AgencyData.getHosts()?.map((h, index)=>(
                        <button key={index} onClick={() => navigate("/" + h.getId() + "/structure")} className="h-6rem newborder flex flex-row items-center space-x-6">
                            <div className="aspect-square bg-gray-200/75 rounded-md h-full flex items-center justify-center">
                                <Icon size={20} name="IoHomeSharp" />
                            </div>
                            <div className="text-left font-semibold text-base text-supergray truncate">
                                {"Votre annonce " + (h.getStructure() !== undefined ? "(Appartement)" : "") + " a été créée le " + h.getDate()?.toDate().getDate() + " " + h.getDate()?.toDate().toLocaleString('fr', { month: 'long' }) + " " + h.getDate()?.toDate().getFullYear()}
                            </div>
                        </button>
                    ))}
                </div>
            }
        </>
    )
}

const CreateAnnouce = () => {
    return (
        <>
            <div className="flex flex-col space-y-6 w-[36rem]">
                <div className="text-xl font-semibold text-supergray">Commencer une nouvelle annonce</div>
                <button className="h-6rem superborder-b overflow-hidden flex flex-row justify-between items-center p-6 space-x-6">
                    <div className="flex flex-row items-center space-x-6">
                        <div>
                            <Icon size={35} name="IoHomeOutline" />
                        </div>
                        <div className="font-semibold text-base text-supergray">
                            Créer une nouvelle annonce
                        </div>
                    </div>
                    <Icon size={20} name="IoChevronForward"  />
                </button>
            </div>
        </>
    )
}