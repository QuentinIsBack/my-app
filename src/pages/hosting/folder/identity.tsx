import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import { useState } from "react";
import { ChooseButtonNew } from "../../../components/button/ChooseButtonNew";
import SituationFolder from '../../../utils/folder/Situation.folder.json'

function App() {
    const [title, setTitle] = useState("Administratif")

    const [selected, setSelected] = useState<string | undefined>()

    return (
        <PageBuilder title="Mon Espace Agence" show={true} footer={undefined} >
            <>
                <FolderBuilder title={title}>
                    <>
                        <div className="flex flex-col items-center justify-start h-full w-full animate-showin">
                            <div className="w-[30rem] py-[1rem] space-y-10">
                                <div className="font-semibold text-3xl text-supergray">Confirmons votre identité enssemble</div>
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
