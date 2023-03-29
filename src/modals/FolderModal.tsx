import Icon from "../components/icon/icons"
import { Modal } from "../components/modal/Modal"

type CompType = {
    show: boolean,
    close: any,
}
export const FolderModal = ({ show, close }: CompType) => {
    return (
        <>
            <Modal show={show} close={close}>
                <>
                    <div className='h-10rem bg-cover' style={{ backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/35098564507519.5ad4edb4b9537.jpg")` }} />
                    <div className='p-5 space-y-3'>
                        <div className='text-3xl font-semibold text-supergray text-left'>Mon dossier locataire</div>
                        <div className='text-base font-normal text-supergray/75 text-left'>Pour commencer a candidater à des logements, vous devez créer votre dossier locataire. </div>
                        <div className='text-base font-normal text-supergray/75 text-left'>Créez votre dossier une fois et utilisez le autant de fois souhaitez.</div>
                        {/*<div className='flex flex-col'>
                            <div className='text-lg font-semibold text-supergray text-left'>Vos dossiers :</div>
                            <div className='text-base font-medium text-superred text-left'>Aucuns dossiers</div>
                        </div>*/}

                        <div className='pt-4 w-full'>
                            <button className="w-full group newborder">
                                <div className="flex flex-col space-y-3 justify-center items-center">
                                    <Icon name="IoAdd" className="duration-150 stroke-supergray/50 group-hover:stroke-supergray" size={30} />
                                    <div className="duration-150 font-medium text-supergray/50 group-hover:text-supergray text-base">Créer un dossier</div>
                                </div>
                            </button>
                        </div>

                        {/*<div className='pt-4 w-full'>
                            <button className="duration-150 w-full rounded-md py-3 bg-supergray hover:bg-black text-white font-medium text-base">Créer mon dossier</button>
                        </div>*/}
                    </div>
                </>
            </Modal>
        </>
    )
}