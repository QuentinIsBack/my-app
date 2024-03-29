import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IButton } from "../../components/footer/footer-begin";
import { Begin } from "../../components/pagebuilder/begin";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import { UserContext } from "../../contexts/UserContext";
import CustomDataServices, { IStructure } from "../../services/CustomData.services";
import { orderBy } from "firebase/firestore";
import { ChooseButton } from "../../components/button/ChooseButton";
import HostDataServices from "../../services/HostData.services";
import { HostBuilder } from "../../constructor/Host.constructor";
import HostDatas from "../../data/Host.data";

type TypeSelected = {
    title: string,
    id: string,
    description: string
}
function App() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState("")
    const [host, setHost] = useState(new HostDatas())

    useEffect(()=>{
        const fetchData = async () => {
            await HostDataServices.get(id as string).then((e)=> {
                const newHost = HostBuilder(e.data())
                setHost(newHost);
                setTitle(newHost.getTitle() !== undefined ? newHost.getTitle() + "" : "Sans Titre")
            })
            setShow(true)
        }
        fetchData()
    }, [])

    const handleChange = ({currentTarget}: any) => {
        if(currentTarget.value.length <= 50){
            setTitle(currentTarget.value);
        }
    };

    const submit = () => { 
        HostDataServices.update(id as string, { title: title })
        navigate(`/${id}/description`)
    }

    return (
        <PageBuilder title="Annonces" show={show}>
            <>
                <Begin nextClic={submit} backBtn={true} nextBtn={IButton.next}>
                    <>
                        <div className="flex flex-col justify-center items-center h-full w-full py-20 overflow-scroll">
                            <div className="w-30rem flex flex-col space-y-1">
                                <div className="font-semibold text-2xl text-supergray">Donnez-lui un titre</div>
                                <div className="font-light text-sm text-gray-600 pb-6">Le titre de votre annonce doit mettre en valeur ce qui fait la particularité de votre logement. <span className='font-medium text-black underline'>Consulter les consignes relatives au titre de l'annonce.</span></div>
                                <div className="flex flex-col">
                                    <textarea onChange={handleChange} className="animation duration-200 p-4 border-none rounded-xl focus:outline-none ring-gray-400 ring-1 focus:ring-2 focus:ring-black focus:outline-transparent w-full font-medium text-3xl text-gray-800 h-40" value={title}></textarea>
                                    <div className={`font-bold text-sm ${title.length >= 50 ? "text-red-500" : "text-gray-500"} pt-2`}>{title.length}/50</div>
                                </div>
                            </div>
                        </div>
                    </>
                </Begin>
            </>
        </PageBuilder>
    );
}

export default App;
