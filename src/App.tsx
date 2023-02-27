import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AgencyRoute from './routes/AgencyRoute';

import Index from './pages/index'

import AgencyIndex from './pages/agency/index'
import AgencyTeam from './pages/agency/team'
import AgencySettings from './pages/agency/settings'
import AgencyCalendar from './pages/agency/calendar'
import AgencyBecomeAHost from './pages/agency/become-a-host'
import AgencyBecomeAHostOverView from './pages/agency/become-a-host/overview'
import AgencyBecomeAHostAbout from './pages/agency/become-a-host/about-your-place'
import AgencyBecomeAHostStructure from './pages/agency/become-a-host/structure'

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
              <Route path="/agency/become-a-host" element={<AgencyBecomeAHost />} />
              <Route path="/agency/become-a-host/overview" element={<AgencyBecomeAHostOverView />} />
              <Route path="/agency/become-a-host/about-your-place" element={<AgencyBecomeAHostAbout />} />
            <Route path="/agency/become-a-host/structure" element={<AgencyBecomeAHostStructure />} />
            </Route>

            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
