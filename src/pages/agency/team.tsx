import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { NavBar } from '../../components/navbar/navbar-agency'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TipsButton } from "../../components/button/tipsbutton";
import { Icon } from "../../components/icon/icons";
import { AgencyContext } from "../../contexts/AgencyContext";

function App() {
    const { UserData } = useContext(UserContext)
    const { AgencyData } = useContext(AgencyContext)

    return (  
        <PageBuilder title="Mon Espace Agence" show={true} navbar={<NavBar />} footer={undefined} >
            <>
            <div>{AgencyData.getTitle()}</div>
            <div>{AgencyData.getDescription()}</div>
            </>
        </PageBuilder>
    );
}

export default App;
