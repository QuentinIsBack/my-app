import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AgencyRoute from './routes/AgencyRoute';

import Index from './pages/index'
 
import AgencyIndex from './pages/agency/index'
import AgencyTeam from './pages/agency/team'
import AgencySettings from './pages/agency/settings'
import AgencyCalendar from './pages/agency/calendar'

import HostNew from './pages/new'
import HostOverview from './pages/host/begin/overview'
import HostAbout from './pages/host/begin/about-your-place'
import HostStructure from './pages/host/begin/structure'
import HostPrivacy from './pages/host/begin/privacy'
import HostProperty from './pages/host/begin/property'
import HostFloor from './pages/host/begin/floor'
import HostTitle from './pages/host/begin/title'
import HostDescription from './pages/host/begin/description'

import BecomeAHost from './pages/become-a-host'

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

                <Route path="/new" element={<HostNew />} />
                <Route path="/:id/overview" element={<HostOverview />} />
                <Route path="/:id/about-your-place" element={<HostAbout />} />
                <Route path="/:id/structure" element={<HostStructure />} />
                <Route path="/:id/privacy" element={<HostPrivacy />} />
                <Route path="/:id/property" element={<HostProperty />} />
                <Route path="/:id/floor" element={<HostFloor />} />
                <Route path="/:id/title" element={<HostTitle />} />
                <Route path="/:id/description" element={<HostDescription />} />
              </Route>

              <Route path="/become-a-host" element={<BecomeAHost />} />

              
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
