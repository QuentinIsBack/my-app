import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import React, { ChangeEvent, useContext, useState } from "react";
import { ChooseButtonNew } from "../../../components/button/ChooseButtonNew";
import SituationFolder from '../../../utils/folder/Situation.folder.json'
import Icon from "../../../components/icon/icons";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import UserDataServices from "../../../services/UserData.services";
import { storage } from "../../../firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function App() {
    const [title, setTitle] = useState("Justificatif d'identité")
    const navigate = useNavigate();
    const { UserData } = useContext(UserContext)

    const [file, setFile] = useState<File>()
    const [URLs, setURLs] = useState<string>(UserData.folder.essentials.proof_identity)

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            setURLs(URL.createObjectURL(event.target.files[0]));
        }
    }

    const clickNext = () => {

        if (!file) {
            alert("Please upload an image first!");
            return
        }

        const storageRef = ref(storage, `/${UserData.uuid}/proof_identity`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                //setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    UserDataServices.update(UserData.uuid as string, { "folder.essentials.proof_identity": url })
                    navigate(`/hosting/folder/proof-domicile/`)
                });
            }
        );
    }

    return (
        <PageBuilder title="Mon Espace Agence" show={true} footer={undefined} >
            <>
                <FolderBuilder next={clickNext} title={title}>
                    <>
                        <div className="flex flex-col items-center justify-start h-full w-full animate-showin">
                            <div className="w-[30rem] py-[1rem] space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <div className="font-semibold text-4xl text-supergray">Justificatif d'identité</div>
                                </div>

                                <div>
                                    <img className="rounded-2xl" src="https://a0.muscache.com/pictures/aca23391-4bab-4ddb-91e3-3934147bbcac.jpg" />
                                </div>

                                <div className="space-y-4">
                                    <div className="text-supergray font-normal text-base">
                                        Le propriétaire est autorisé à vérifier certaines informations sur l'identité du futur locataire. Seuls certains justificatifs sont autorisés
                                    </div>
                                    <div>
                                        <div className="text-supergray font-medium text-base">
                                            Les documents autorisé:
                                        </div>
                                        <ul className="list-disc list-inside text-supergray font-normal text-base">
                                            <li>Carte d'identité française ou étrangère (avec photo)</li>
                                            <li>Passeport français ou étranger (avec photo)</li>
                                            <li>Permis de conduire français ou étranger (avec photo)</li>
                                            <li>Carte de séjour temporaire</li>
                                            <li>Carte de résident</li>
                                            <li>Carte de ressortissant d'un État membre de l'UE: UE : Union européenne ou de l'EEE</li>
                                        </ul>
                                    </div>
                                    <div className="border-b" />
                                    <div className="text-supergray font-semibold text-base">
                                        {URLs === '' ? 'Importez votre document' : 'Modifier votre document'}
                                    </div>
                                </div>
                                
                                <div>
                                    <button className="w-full group newborder">
                                        <label htmlFor="file" className="h-full w-full">
                                            <div className="flex flex-col space-y-3 justify-center items-center">
                                                {URLs !== ''&&<img src={URLs} />}
                                                <Icon name="IoAdd" className="duration-150 stroke-supergray/50 group-hover:stroke-supergray" size={30} />
                                                <div className="duration-150 font-medium text-supergray/50 group-hover:text-supergray text-base">{URLs === '' ? 'Ajouter un document': 'Modifier le document'}</div>
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
