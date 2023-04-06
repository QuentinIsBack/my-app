import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { useContext, useState } from "react"
import Icon from "../../components/icon/icons"
import { UserContext } from "../../contexts/UserContext"
import { storage } from "../../firebase.config"
import UserDataServices from "../../services/UserData.services"
import { GetCondition, RessourceBuilder } from "../RessourceBuilder"
import SituationsList from "../../utils/folder/ProfessionalSituation.utils.json";
import RessourcesList from "../../utils/folder/Ressources.folder.json";

type Page = {
    complet: boolean
    optional: boolean
    parameter: any
}
export const Payslip = ({ complet, optional, parameter }: Page) => {
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
        <RessourceBuilder onSubmit={submit} complet={complet} optional={optional} parameter={parameter}>
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
                                    {URLs1 !== '' && <img className="pb-2" src={URLs1} />}
                                    <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                    <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Fiche de paie Janvier</div>
                                </div>
                            </label>
                        </button>
                        <input id="file1" onChange={onImageChange1} accept={'image/png'} className="hidden" type="file" />
                    </div>
                    <div className="px-2 h-full">
                        <button className="group h-full w-full">
                            <label htmlFor="file2" className="h-full w-full">
                                <div className="h-full rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                    {URLs2 !== '' && <img className="pb-2" src={URLs2} />}
                                    <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                    <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Fiche de paie Février</div>
                                </div>
                            </label>
                        </button>
                        <input id="file2" onChange={onImageChange2} accept={'image/png'} className="hidden" type="file" />
                    </div>
                    <div className="pl-2 h-full">
                        <button className="group h-full w-full">
                            <label htmlFor="file3" className="h-full w-full">
                                <div className="h-full rounded-lg border group-hover:border-black border-gray-200 flex flex-col space-y-3 justify-center items-center p-4">
                                    {URLs3 !== '' && <img className="pb-2" src={URLs3} />}
                                    <Icon name="IoAdd" className="duration-150 stroke-supergray/70 group-hover:stroke-supergray" size={20} />
                                    <div className="duration-150 font-medium text-supergray/70 group-hover:text-supergray text-sm">Fiche de paie Mars</div>
                                </div>
                            </label>
                        </button>
                        <input id="file3" onChange={onImageChange3} accept={'image/png'} className="hidden" type="file" />
                    </div>
                </div>
            </div>
        </RessourceBuilder>
    )
}