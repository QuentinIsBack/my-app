import { useState } from "react";
import { BecomeBuilder } from "../components/pagebuilder/becomeahost";
import { PageBuilder } from "../components/pagebuilder/pagebuilder";

function App() {
    const [show, setShow] = useState(false);

    return (
        <PageBuilder
            show={true}
            title={""}
        >
            <>
                <BecomeBuilder>
                    <>
                        d
                    </>
                </BecomeBuilder>
            </>
        </PageBuilder>
    );
}

export default App;
