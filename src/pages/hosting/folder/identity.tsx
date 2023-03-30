import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import { useState } from "react";
import { ChooseButtonNew } from "../../../components/button/ChooseButtonNew";
import SituationFolder from '../../../utils/folder/Situation.folder.json'
import Icon from "../../../components/icon/icons";
import { useNavigate } from "react-router-dom";

function App() {
    const [title, setTitle] = useState("Administratif")
    const navigate = useNavigate();

    const [selected, setSelected] = useState<string | undefined>()
    const [image, setImage] = useState<string>()

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }


    const clickBack = () => {
        navigate(`/hosting/folder/administratif/`)
    }

    return (
        <PageBuilder title="Mon Espace Agence" show={true} footer={undefined} >
            <>
                <FolderBuilder back={clickBack} title={title}>
                    <>
                        <div className="flex flex-col items-center justify-start h-full w-full animate-showin">
                            <div className="w-[30rem] py-[1rem] space-y-10">
                                <div className="flex flex-col">
                                    <div className="font-semibold text-3xl text-supergray">Confirmons votre identité enssemble</div>
                                    <div className="font-normal text-base text-supergray/60">Cette confirmation permet à l'annonceur de s'assurer de la confirmité de voter dossier.</div>
                                </div>
                                
                                <div>
                                    <button className="w-full group newborder">
                                        <label htmlFor="file" className="h-full w-full">
                                            <div className="flex flex-col space-y-3 justify-center items-center">
                                                {image !== undefined && <img src={image} />}
                                                <Icon name="IoAdd" className="duration-150 stroke-supergray/50 group-hover:stroke-supergray" size={30} />
                                                <div className="duration-150 font-medium text-supergray/50 group-hover:text-supergray text-base">Ajouter un document</div>
                                            </div>    
                                        </label>
                                    </button>
                                    <input id="file" onChange={onImageChange} className="hidden" type="file"/>
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
