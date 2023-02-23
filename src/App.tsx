import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AgencyRoute from './routes/AgencyRoute';

import Index from './pages/index'

import AgencyIndex from './pages/agency'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
            <Route element={<AuthenticatedRoute />}>

            <Route element={<AgencyRoute />}>
                <Route path="/agency" element={<AgencyIndex />} />
            </Route>

            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
