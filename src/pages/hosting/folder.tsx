import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { NavBar } from '../../components/navbar/navbar-home'
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TipsButton } from "../../components/button/tipsbutton";
import { AgencyContext } from "../../contexts/AgencyContext";
import Icon from "../../components/icon/icons";
import { MultiChooseButton } from "../../components/button/MultiChooseButton";

function App() {
    const { UserData } = useContext(UserContext)
    const [selected, setSelected] = useState<string | undefined>()

    const situation = [
        {
            id: "a",
            title: "Étudiant",
            icon: "FiBook",
        },
        {
            id: "e",
            title: "Salarié",
            icon: "IoBriefcaseOutline"
        },
        {
            id: "d",
            title: "Fonctionnaire",
            icon: "IoBusinessOutline"
        },
        {
            id: "f",
            title: "Indépendant",
            icon: "IoPersonOutline"
        },
        {
            id: "g",
            title: "Retraité",
            icon: "IoFootstepsOutline"
        },
        {
            id: "h",
            title: "Sans emploi",
            icon: "IoEyeOffOutline"
        }
    ]

    return (  
        <PageBuilder title="Mon Espace Agence" show={true} navbar={<NavBar />} footer={undefined} >
            <>
                
                    <div className={`px-80 py-20 space-y-2`}>
                        <div className='text-3xl font-semibold text-night text-left'>Ma situation</div>
                        <div className='text-md font-normal text-gray-500 text-left'>Vous êtes sur le point de devenir un locataire formidable. Voici comment commencer.</div>
                        <div className='pt-1 grid grid-cols-4 gap-5'>
                            <MultiChooseButton list={situation} selected={selected} setSelected={setSelected} />
                        </div>
                </div>
            </>
        </PageBuilder>
    );
}

export default App;
