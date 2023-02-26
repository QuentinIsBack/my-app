import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import LOGOWHITE from '../../assets/logo.svg';
import { NavBar } from "../../components/navbar/navbar-begin";
import { Icon } from "../../components/icon/icons";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Begin, IButton } from "../../components/pagebuilder/begin";

function App() {
   const { UserData } = useContext(UserContext)
   const navigate = useNavigate();

    return (  
       <PageBuilder title="Annonces" show={true}>
            <>
               <Begin title="Lequel de ces énoncés décrit le mieux votre bien ?" nextBtn={IButton.start}>
                  <>
                  fdsgh
                  </>
               </Begin>
            </>
        </PageBuilder>
    );
}

export default App;
