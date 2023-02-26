import { useContext } from "react";
import { NavBar } from "../../../components/navbar/navbar-begin";
import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { UserContext } from "../../../contexts/UserContext";

function App() {
    const { UserData } = useContext(UserContext)

    return (
        <PageBuilder title="Annonces" show={true} navbar={<NavBar />}>
            <>
                <div className="pt-[var(--navbar--big)] relative flex flex-col h-full">
                    <div className="grow">

                    </div>
                    <div className="h-6rem max-h-6rem border-t-6 flex items-center justify-end px-14">
                        <button className='w-fit px-10 text-lg transition-all duration-1000 bg-gradient-to-r to-indigo-600 via-pink-700 from-indigo-600 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg py-4 text-white font-semibold'>Continuer</button>
                    </div>
                </div>
            </>
        </PageBuilder>
    );
}

export default App;
