import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import { useContext, useState } from "react";
import { ChooseButtonNew } from "../../../components/button/ChooseButtonNew";
import SituationFolder from '../../../utils/folder/Situation.folder.json'
import UserDataServices from "../../../services/UserData.services";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function App() {
    const [title, setTitle] = useState("Administratif")
    const { UserData } = useContext(UserContext)
    const navigate = useNavigate();

    const [selected, setSelected] = useState<string | undefined>(UserData.folder.essentials.administratif)

    const clickNext = () => {
        UserDataServices.update(UserData.uuid as string, { "folder.essentials.administratif": selected })
        navigate(`/hosting/folder/identity/`)
    }

    return (
        <PageBuilder title="Mon Espace Agence" show={true} footer={undefined} >
            <>
                <FolderBuilder next={clickNext} title={title}>
                    <>
                        <div className="flex flex-col items-center justify-start h-full w-full animate-showin">
                            <div className="w-[30rem] py-[1rem] space-y-10">
                                <div className="font-semibold text-3xl text-supergray">Comment souhaitez-vous constituer ce dossier ?</div>
                                <div className="grid grid-cols-2 gap-4 text-supergray font-medium text-base">
                                    <ChooseButtonNew list={SituationFolder} selected={selected} setSelected={setSelected} />
                                </div>
                            </div>
                        </div>
                    </>
                </FolderBuilder>
            </>
        </PageBuilder>
    );
}

export default App;
