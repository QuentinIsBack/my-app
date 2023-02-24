import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AgencyRoute from './routes/AgencyRoute';

import Index from './pages/index'

import AgencyIndex from './pages/agency/index'
import AgencyTeam from './pages/agency/team'
import AgencySettings from './pages/agency/settings'
import AgencyCalendar from './pages/agency/calendar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
            <Route element={<AuthenticatedRoute />}>

            <Route element={<AgencyRoute />}>
              <Route path="/agency" element={<AgencyIndex />} />
            <Route path="/agency/team" element={<AgencyTeam />} />
            <Route path="/agency/settings" element={<AgencySettings />} />
            <Route path="/agency/calendar" element={<AgencyCalendar />} />
            </Route>

            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
