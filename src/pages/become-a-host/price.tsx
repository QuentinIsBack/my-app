import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChooseButtonNew } from "../../components/button/ChooseButtonNew";
import Icon from "../../components/icon/icons";
import { Incrementor } from "../../components/incrementor/incrementor";
import { HolderInput, sizes, themes } from "../../components/input/HolderInput";
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
 
    const [price, setPrice] = useState(250)

    const handleChange = ({ currentTarget }: any) => {
        if (currentTarget.value.length <= 50) {
            setPrice(currentTarget.value);
        }
    };

    const clickBack = () => { 
        navigate(`/${id}/description`)
    }
    const clickNext = () => {
        HostDataServices.update(id as string, { price: price })
        navigate(`/${id}/location`)
    } 

    return (
        <PageBuilder show={true} title={"À présent, fixez votre prix"} >
            <>
                <BecomeBuilder information={`À présent, fixez votre prix`}
                    clickBack={clickBack}
                    clickNext={clickNext}
                    lockedNext={false}
                    show={show}
                >
                    <>
                        <div className="flex flex-col items-center justify-center space-y-12 w-full h-full animate-showin">
                            <div className="flex flex-col items-center space-y-6 w-[30rem]">
                                <div className="font-semibold text-2xl text-supergray">À présent, fixez votre prix</div>

                                    <div className="flex flex-col space-y-3 w-fit">
                                        <HolderInput id={""} type={"number"} size={sizes.big} defaultValue={price} placeholder="€" theme={themes.default} />
                                        <div className="font-base text-center text-md">par mois</div>
                                    </div>

                                    <div className="w-10/12 p-4 text-center rounded-lg border border-gray-300 ">
                                        Offrez une réduction de 20 % à vos 3 premiers voyageurs pour obtenir des réservations plus rapidement. En savoir plus.
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