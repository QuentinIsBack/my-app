import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseButtonNew } from "../../components/button/ChooseButtonNew";
import Icon from "../../components/icon/icons";
import { Incrementor } from "../../components/incrementor/incrementor";
import { HolderInput, themes } from "../../components/input/HolderInput";
import { BecomeBuilder } from "../../components/pagebuilder/becomeahost";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import { DEPSelector } from "../../components/selector/DEPSelector";
import { GESSelector } from "../../components/selector/GESSelector";
import { HostBuilder } from "../../constructor/Host.constructor";
import HostDatas from "../../data/Host.data";
import HostDataServices from "../../services/HostData.services";
import PropertyUtils from '../../utils/Property.utils.json'

function App() {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
 
    const [title, setTitle] = useState("")

    const handleChange = ({ currentTarget }: any) => {
        if (currentTarget.value.length <= 50) {
            setTitle(currentTarget.value);
        }
    };

    const clickBack = () => { 
        navigate(`/${id}/floor`)
    }
    const clickNext = () => {
        HostDataServices.update(id as string, { title: title })
        navigate(`/${id}/description`)
    } 

    return (
        <PageBuilder show={true} title={"Communiquez nous quelques détails essentiel sur votre logement"} >
            <>
                <BecomeBuilder information={`Les petits plus`}
                    clickBack={clickBack}
                    clickNext={clickNext}
                    lockedNext={false}
                    show={show}
                >
                    <>
                        <div className="flex flex-col items-center justify-center space-y-12 w-full h-full animate-showin">
                            <div className="flex flex-col space-y-6 w-[30rem]">
                                <div className="flex flex-col space-y-3">
                                    <div className="font-semibold text-2xl text-supergray">Donnez un nom à votre location</div>
                                    <div className="font-light text-sm text-gray-600">Le titre de votre location doit mettre en valeur ce qui fait la particularité de votre location. <span className='font-medium text-black underline'>Consulter les consignes relatives au titre de l'annonce.</span></div>
                                </div>
                                <div className="flex flex-col">
                                    <textarea onChange={handleChange} className={`animation duration-200 p-4 border-none rounded-xl focus:outline-none ring-gray-400 ring-1 focus:ring-2  "focus:ring-black focus:outline-transparent w-full font-medium text-3xl text-gray-800 h-40`} value={title}></textarea>
                                    <div className={`font-bold text-sm ${title.length >= 50 ? "text-red-500" : "text-gray-500"} pt-2`}>{title.length}/50</div>
                                </div>
                            </div>
                        </div>
                    </>
                </BecomeBuilder>
            </>
        </PageBuilder>
    );
}
export default App; 