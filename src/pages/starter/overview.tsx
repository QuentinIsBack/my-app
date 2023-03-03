import { PageBuilder } from "../../components/pagebuilder/pagebuilder";

import { useNavigate } from "react-router-dom";
import { StarterBuilder } from "../../components/pagebuilder/starterbuilder";

function App() {

    const navigate = useNavigate();

    return (
        <PageBuilder title="Starter" show={true}>
            <>
                <StarterBuilder>
                    <>
                        fds
                    </>
                </StarterBuilder>
            </>
        </PageBuilder>
    );
}

export default App;