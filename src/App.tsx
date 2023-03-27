import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AgencyRoute from './routes/AgencyRoute';

import Index from './pages/index'
 
import AgencyIndex from './pages/agency/index'
import AgencyTeam from './pages/agency/team'
import AgencySettings from './pages/agency/settings'
import AgencyCalendar from './pages/agency/calendar'

import HostNew from './pages/new'
import HostOverview from './pages/begin/overview'
import HostAbout from './pages/begin/about-your-place'
import HostStructure from './pages/begin/structure'
import HostPrivacy from './pages/begin/privacy'
import HostProperty from './pages/begin/property'
import HostFloor from './pages/begin/floor'
import HostTitle from './pages/begin/title'
import HostDescription from './pages/begin/description'

import BecomeAHost from './pages/become-a-host'
import Host from './pages/host/host'
import BecomeAHostStructure from './pages/become-a-host/structure'
import BecomeAHostPrivacy from './pages/become-a-host/privacy'
import BecomeAHostProperty from './pages/become-a-host/property'
import BecomeAHostFloor from './pages/become-a-host/floor'
import BecomeAHostTitle from './pages/become-a-host/title'
import BecomeAHostDescription from './pages/become-a-host/description'
import BecomeAHostPrice from './pages/become-a-host/price'
import BecomeAHostLocation from './pages/become-a-host/location'

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
                {/*<Route path="/:id/structure" element={<HostStructure />} />*/}
                {/*<Route path="/:id/privacy" element={<HostPrivacy />} />*/}
                {/*<Route path="/:id/property" element={<HostProperty />} />*/}
                {/*<Route path="/:id/floor" element={<HostFloor />} />*/}
                {/*<Route path="/:id/title" element={<HostTitle />} />*/}
                {/*<Route path="/:id/description" element={<HostDescription />} />*/}

                <Route path="/become-a-host" element={<BecomeAHost />} />
                <Route path="/:id/structure" element={<BecomeAHostStructure />} />
                <Route path="/:id/privacy" element={<BecomeAHostPrivacy />} />
                <Route path="/:id/property" element={<BecomeAHostProperty />} />
                <Route path="/:id/floor" element={<BecomeAHostFloor />} />
                <Route path="/:id/title" element={<BecomeAHostTitle />} />
                <Route path="/:id/description" element={<BecomeAHostDescription />} />
                <Route path="/:id/price" element={<BecomeAHostPrice />} />
                <Route path="/:id/location" element={<BecomeAHostLocation />} />

              </Route>

              <Route path="/:id" element={<Host />} />

              
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
