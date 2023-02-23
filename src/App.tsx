import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AgencyRoute from './routes/AgencyRoute';

import Index from './pages/index'

import AgencyIndex from './pages/agency/index'
import AgencyTeam from './pages/agency/team'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
            <Route element={<AuthenticatedRoute />}>

            <Route element={<AgencyRoute />}>
              <Route path="/agency" element={<AgencyIndex />} />
              <Route path="/agency/team" element={<AgencyTeam />} />
            </Route>

            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
