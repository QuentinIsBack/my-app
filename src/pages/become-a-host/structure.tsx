import { useContext, useState } from "react";
import { ChooseButtonNew } from "../../components/button/ChooseButtonNew";
import { BecomeBuilder } from "../../components/pagebuilder/becomeahost";
import { PageBuilder } from "../../components/pagebuilder/pagebuilder";
import StructureUtils from '../../utils/Structure.utils.json'

function App() {
    const [show, setShow] = useState(true);

    return (
        <PageBuilder show={show} title={"ok"} >
            <>
                <BecomeBuilder information={`Parlez-nous de votre logement`} >
                    <>
                        <div className="flex flex-col items-center justify-center space-y-12 w-full h-full animate-showin">
                            {EndingAnnouce()}
                        </div>
                    </>
                </BecomeBuilder>
            </>
        </PageBuilder>
    );
}
export default App; 

const EndingAnnouce = () => {
    const [selected, setSelected] = useState<string | undefined>()
    return (
        <>
            <div className="flex flex-col space-y-6 w-[30rem]">
                <div className="font-semibold text-2xl text-supergray">Quel type de logement allez-vous proposer ?</div>
                <ChooseButtonNew list={StructureUtils} selected={selected} setSelected={setSelected} />
            </div>
        </>
    )
}
