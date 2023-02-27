import { useContext } from "react";
import { IButton } from "../../../components/footer/footer-begin";
import { NavBar } from "../../../components/navbar/navbar-begin";
import { Begin } from "../../../components/pagebuilder/begin";
import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { UserContext } from "../../../contexts/UserContext";

function App() {
    const { UserData } = useContext(UserContext)

    return (
        <PageBuilder title="Annonces" show={true}>
            <>
                <Begin nextBtn={IButton.next} backBtn={true} progressPercentage={10}>
                    <>
                        structure
                    </>
                </Begin>
            </>
        </PageBuilder>
    );
}

export default App;
