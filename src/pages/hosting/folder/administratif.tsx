import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";
import { useState } from "react";

function App() {
    const [title, setTitle] = useState("Type d'activité")
    return (  
        <PageBuilder title="Mon Espace Agence" show={true} footer={undefined} >
            <>
                <FolderBuilder title={title}>
                    <>
                        <div className="bg-blue-100">
                            <div className="h-full">
e
                            </div>
                        </div>
                    </>
                </FolderBuilder>
            </>
        </PageBuilder>
    );
}

export default App;
 