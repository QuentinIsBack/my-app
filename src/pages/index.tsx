import { PageBuilder } from "../components/pagebuilder/pagebuilder";

import {NavBar} from '../components/navbar/navbar-home'

function App() {
  return (
    <PageBuilder title="er" show={true} navbar={<NavBar />} footer={undefined} >
      <>Non</>
    </PageBuilder>
  );
}

export default App;
