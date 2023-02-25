import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import LOGOWHITE from '../../assets/logo.svg';
import { NavBar } from "../../components/navbar/navbar-begin";

function App() {

    return (  
       <PageBuilder title="Annonces" show={true} navbar={<NavBar />}>
            <>
               <div className="h-full w-full flex flex-col justify-center items-center">

                  <div className="w-40rem space-y-10">
                     <div className="text-3xl font-semibold text-supergray">Welcome back, Quentin</div>
                     <div className="flex flex-col">
                      <div className="text-xl font-semibold text-supergray">Finish your listing</div>
                     </div>
                     <div className="flex flex-col">
                      <div className="text-xl font-semibold text-supergray">Start a new listing</div>
                     </div>
                  </div>

               </div>
            </>
        </PageBuilder>
    );
}

export default App;
