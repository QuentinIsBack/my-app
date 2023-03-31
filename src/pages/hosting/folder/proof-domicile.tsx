import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import { useContext, useState } from "react";
import { ChooseButtonNew } from "../../../components/button/ChooseButtonNew";
import SituationFolder from '../../../utils/folder/Situation.folder.json'
import UserDataServices from "../../../services/UserData.services";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/icon/icons";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase.config";

function App() {
    const [title, setTitle] = useState("Justificatif de domicile")
    const { UserData } = useContext(UserContext)
    const navigate = useNavigate();

    const [file, setFile] = useState<File>()
    const [URLs, setURLs] = useState<string>(UserData.folder.essentials.proof_domicile)

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            setURLs(URL.createObjectURL(event.target.files[0]));
        }
    }

    const clickBack = () => {
        navigate(`/hosting/folder/proof-identity/`)
    }

    const clickNext = () => {

        if (!file) {
            alert("Please upload an image first!");
            return
        }

        const storageRef = ref(storage, `/${UserData.uuid}/proof_domicile`);

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
                    UserDataServices.update(UserData.uuid as string, { "folder.essentials.proof_domicile": url })
                    navigate(`/hosting/folder/professional-situation/`)
                });
            }
        );
    }

    return (
        <PageBuilder title="Mon Espace Agence" show={true} footer={undefined} >
            <>
                <FolderBuilder back={clickBack} next={clickNext} title={title}>
                <>
                        <div className="flex flex-col items-center justify-start h-full w-full animate-showin">
                            <div className="w-[30rem] py-[1rem] space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <div className="font-semibold text-4xl text-supergray">Justificatif de domicile</div>
                                </div>

                                <div>
                                    <img className="rounded-2xl" src="https://a0.muscache.com/pictures/09497d61-3b0a-4905-b2f1-d1a67f7ac8c0.jpg" />
                                </div>

                                <div className="space-y-4">
                                    <div className="text-supergray font-normal text-base">
                                    Le locataire peut fournir une copie du document original. Toutefois, le propriétaire a le droit d'exiger la présentation de l'original. Le document doit être rédigé ou traduit en français, les montants inscrits doivent être convertis en euros.</div>
                                    <div>
                                        <div className="text-supergray font-medium text-base">
                                        Le propriétaire peut exiger 1 seul justificatif parmi les documents suivants :</div>
                                        <ul className="list-disc list-inside text-supergray font-normal text-base">
                                            <li>3 dernières quittances de loyer</li>
                                            <li>Attestation sur l'honneur de l'hébergeant indiquant que le candidat à la location réside à son domicile</li>
                                            <li>Attestation d'élection de domicile</li>
                                            <li>Dernier avis de taxe foncière ou, si nécessaire, titre de propriété de la résidence principale</li>
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
                                                {URLs !== ''&&<img className="pb-2" src={URLs} />}
                                                <Icon name="IoAdd" className="duration-150 stroke-supergray/50 group-hover:stroke-supergray" size={30} />
                                                <div className="duration-150 font-medium text-supergray/50 group-hover:text-supergray text-base">{URLs === '' ? 'Ajouter un document': 'Modifier le document'}</div>
                                            </div>    
                                        </label>
                                    </button>
                                    <input id="file" onChange={onImageChange} accept={'image/png'} className="hidden" type="file"/>
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
