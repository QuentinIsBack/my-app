import { PageBuilder } from "../../../components/pagebuilder/pagebuilder";
import { FolderBuilder } from "../../../components/pagebuilder/folderbuilder";

function App() {
    return (  
        <PageBuilder title="Mon Espace Agence" show={true} footer={undefined} >
            <>
                <FolderBuilder title="Type d'activité">
                    <>
                        c≠
                    </>
                </FolderBuilder>
            </>
        </PageBuilder>
    );
}

export default App;
 