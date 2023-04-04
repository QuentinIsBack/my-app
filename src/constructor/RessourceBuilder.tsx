import { useContext, useState } from "react"
import Icon from "../components/icon/icons"
import { UserContext } from "../contexts/UserContext"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { storage } from "../firebase.config"
import UserDataServices from "../services/UserData.services"

type PageType = {
    complet: boolean
    optional: boolean 
    parameter: any
}
export const RessourceBuilder = ({ 
    complet,
    optional,
    parameter
}: PageType) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => !open && setOpen(!open)} className={`flex flex-col duration-150 w-full ${!open&&"active:scale-98"} p-6 bg-white rounded-xl ring-1 ring-gray-200 hover:ring-1 hover:ring-supergray overflow-hidden focus:outline-none`}>
                <div className="flex flex-col justify-between space-y-1 w-full">
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-left font-medium text-base text-supergray">{parameter.title}</div>
                        <div className="flex flex-row items-center justify-start space-x-2">
                            {!open&&<div className="text-sm text-supergray font-medium">
                                {!optional ? complet ? "Terminé" : "Informations manquant" : "Facultatif" }
                            </div>}
                            {optional ? <Icon className={'fill-blue-500'} name={'TiWarningOutline'} size={24} /> : complet ?  <Icon className={'fill-blue-600'} name={'AiFillCheckCircle'} size={24} /> : <Icon className={'fill-red-600'} name={'RiErrorWarningFill'} size={24} />}
                        </div>
                    </div>
                    <div className="w-full text-left font-normal text-sm text-supergray/70">
                        {open ? parameter?.edit : parameter?.missing}
                    </div>
                </div>
                {open && <div className="w-full">
                    <div className="py-4 border-y my-4">
                        {VarGetter(parameter.id)}
                    </div>
                    <div className="flex justify-between w-full">
                        <button onClick={() => setOpen(!open)} className="duration-150 px-5 py-2.5 underline hover:bg-gray-100 rounded-lg font-medium text-supergray text-sm">Annuler</button>
                        <button onClick={() => setOpen(!open)} className="duration-150 px-5 py-2.5 bg-supergray hover:bg-black rounded-lg font-medium text-white text-sm">Enregistrer</button>
                    </div>
                </div>}
            </button>
        </>
    )
}

RessourceBuilder.defaultProps = {
    complet: false,
    optional: false
}

export const ConditionRessource = (parameter:any) => {
    const { UserData } = useContext(UserContext)
    switch(parameter.id){
        case "payslip": {
            return (UserData.folder.ressources.ressources.payslip.payslip1 !== ''&&UserData.folder.ressources.ressources.payslip.payslip2 !== ''&&UserData.folder.ressources.ressources.payslip.payslip3 !== '')
        }
    }
}

const VarGetter = (id: string) => {

    switch(id) {
        // Bulletins
        case "payslip": {
            return (<Bulletins />)
        }

        // Contrat
        case "vfMqDUfRyNHpYR7WdFPr": {
            return (<Contrat />)
        }

        // Simulation
        case "tKsn3p8Lro9FyE0ogrJ4": {
            return (
                <>
                    <div className="w-full flex flex-col space-y-2">
                        <div>
                            <div className="text-left text-supergray font-semibold text-base">Ajouter votre attestation</div>
                            <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
                        </div>
                        <div className="group h-fit w-full">
                            <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Ajouter un document</div>
                            </div>
                        </div>
                    </div>
                </>
            )
            break;
        }

        // Scolarité
        case "tKsn3p8kfTRE5gfdgrJ4": {
            return (
                <>
                    <div className="w-full flex flex-col space-y-2">
                        <div>
                            <div className="text-left text-supergray font-semibold text-base">Ajouter votre attestation</div>
                            <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
                        </div>
                        <div className="group h-fit w-full">
                            <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Ajouter un document</div>
                            </div>
                        </div>
                    </div>
                </>
            )
            break;
        }

        // Versement
        case "tKsn3p8Lro90oefdgrJ4": {
            return (
                <>
                    <div className="w-full flex flex-col space-y-2">
                        <div>
                            <div className="text-left text-supergray font-semibold text-base">Ajouter votre justificatif</div>
                            <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
                        </div>
                        <div className="group h-fit w-full">
                            <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Ajouter un document</div>
                            </div>
                        </div>
                    </div>
                </>
            )
            break;
        }
        
    }
}

const Bulletins = () => {
    const { UserData } = useContext(UserContext)

    const [file1, setFile1] = useState<File>()
    const [URLs1, setURLs1] = useState<string>(UserData.folder.ressources.ressources.payslip.payslip1)
    const [file2, setFile2] = useState<File>()
    const [URLs2, setURLs2] = useState<string>(UserData.folder.ressources.ressources.payslip.payslip2)
    const [file3, setFile3] = useState<File>()
    const [URLs3, setURLs3] = useState<string>(UserData.folder.ressources.ressources.payslip.payslip3)


    const onImageChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile1(event.target.files[0]);
            setURLs1(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onImageChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile2(event.target.files[0]);
            setURLs2(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onImageChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile3(event.target.files[0]);
            setURLs3(URL.createObjectURL(event.target.files[0]));
        }
    }

    const submit = () => {
        uploadfile1()
        uploadfile2()
        uploadfile3()
    }

    const uploadfile1 = () => {
        if (!file1) {
            alert("Please upload an image first!");
            return
        }
        const storageRef = ref(storage, `/${UserData.uuid}/payslip/payslip1`);
        const uploadTask = uploadBytesResumable(storageRef, file1);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    UserDataServices.update(UserData.uuid as string, { "folder.ressources.ressources.payslip.payslip1": url })
                });
            }
        );
    }

    const uploadfile2 = () => {
        if (!file2) {
            alert("Please upload an image first!");
            return
        }
        const storageRef = ref(storage, `/${UserData.uuid}/payslip/payslip2`);
        const uploadTask = uploadBytesResumable(storageRef, file2);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    UserDataServices.update(UserData.uuid as string, { "folder.ressources.ressources.payslip.payslip2": url })
                });
            }
        );
    }

    const uploadfile3 = () => {
        if (!file3) {
            alert("Please upload an image first!");
            return
        }
        const storageRef = ref(storage, `/${UserData.uuid}/payslip/payslip3`);
        const uploadTask = uploadBytesResumable(storageRef, file3);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    UserDataServices.update(UserData.uuid as string, { "folder.ressources.ressources.payslip.payslip3": url })
                });
            }
        );
    }


    return (
        <div className="w-full flex flex-col space-y-2">
            <div>
                <div className="text-left text-supergray font-semibold text-base">Ajouter vos bulletins de salaires</div>
                <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
            </div>
            <div className="w-full grid grid-cols-3 justify-start divide-x">
                <div className="pr-2 h-full">
                    <button className="group h-full w-full">
                        <label htmlFor="file1" className="h-full w-full">
                            <div className="h-full rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                {URLs1 !== ''&&<img className="pb-2" src={URLs1} />}
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Fiche de paie : Janvier</div>
                            </div>
                        </label>
                    </button>
                    <input id="file1" onChange={onImageChange1} accept={'image/png'} className="hidden" type="file"/>
                </div>
                <div className="px-2 h-full">
                    <button className="group h-full w-full">
                        <label htmlFor="file2" className="h-full w-full">
                            <div className="h-full rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                {URLs2 !== ''&&<img className="pb-2" src={URLs2} />}
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Fiche de paie : Février</div>
                            </div>
                        </label>
                    </button>
                    <input id="file2" onChange={onImageChange2} accept={'image/png'} className="hidden" type="file"/>
                </div>
                <div className="pl-2 h-full">
                    <button className="group h-full w-full">
                        <label htmlFor="file3" className="h-full w-full">
                            <div className="h-full rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                {URLs3 !== ''&&<img className="pb-2" src={URLs3} />}
                                <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Fiche de paie : Mars</div>
                            </div>
                        </label>
                    </button>
                    <input id="file3" onChange={onImageChange3} accept={'image/png'} className="hidden" type="file"/>
                </div>
            </div>
            <button onClick={submit}>sumbmit</button>
        </div>
    )
}

const Contrat = () => {
    return (
        <div className="w-full flex flex-col space-y-2">
            <div>
                <div className="text-left text-supergray font-semibold text-base">Ajouter votre contrat</div>
                <div className="text-left text-supergray/70 font-normal text-sm">En ajoutant votre contrat vous donnez plus de chance à l'annonceur de vous choisir.</div>
            </div>
            <div className="group h-fit w-full">
                <div className="rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                    <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                    <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Ajouter un document</div>
                </div>
            </div>
        </div>
    )
}