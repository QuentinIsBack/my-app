import { useNavigate } from "react-router-dom";
import Icon from "../components/icon/icons"
import { Modal } from "../components/modal/Modal"

import ProfessionalSituation from '../utils/folder/ProfessionalSituation.utils.json'
import { ChooseButtonNew } from "../components/button/ChooseButtonNew";
import { useState } from "react";

type CompType = {
    show: boolean,
    close: any,
}
export const ProfessionalSituationModal = ({ show, close }: CompType) => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<string | undefined>()
    return (
        <>
            <Modal show={show} close={close}>
                <>
                    <div className='p-4 flex items-center justify-center w-full'>
                        <div className="font-semibold text-base">Ma situation</div>
                    </div>
                    <div className='p-4 space-y-5 duration-150'>
                        <div className='grid grid-cols-2 gap-4 w-full'>
                            <ChooseButtonNew list={ProfessionalSituation} selected={selected} setSelected={setSelected} />
                        </div>
                    </div>
                    <div className='p-4 border-t flex items-center justify-between w-full'>
                        <button onClick={close} className="duration-150 px-6 py-3 bg-white hover:bg-gray-100 rounded-lg font-medium text-supergray text-base underline">Annuler</button>
                        <button className="duration-150 px-6 py-3 bg-supergray hover:bg-black rounded-lg font-medium text-white text-base">Enregistrer</button>
                    </div>
                </>
            </Modal>
        </>
    )
}