import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AgencyRoute from './routes/AgencyRoute';
import EmployeeRoute from "./routes/EmployeeRoute";

import Index from './pages/index'
 
import AgencyIndex from './pages/agency/index'
import AgencyTeam from './pages/agency/team'
import AgencySettings from './pages/agency/settings'
import AgencyCalendar from './pages/agency/calendar'

import HostNew from './pages/new'
import HostOverview from './pages/begin/overview'
import HostAbout from './pages/begin/about-your-place'

import HostingIndex from './pages/hosting/index'
import HostingDomicile from './pages/hosting/folder/proof-domicile'
import HostingIdentity from './pages/hosting/folder/proof-identity'
import HostingProfessionalSituation from './pages/hosting/folder/professional-situation'
import HostingRessources from './pages/hosting/folder/ressources'

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

import EmployeeIndex from './pages/employee/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route element={<AuthenticatedRoute />}>

          <Route path="/:id" element={<Host />} />

          <Route path="/hosting" element={<HostingIndex />} />
          <Route path="/hosting/folder/proof-domicile" element={<HostingDomicile />} />
          <Route path="/hosting/folder/proof-identity" element={<HostingIdentity />} />
          <Route path="/hosting/folder/professional-situation" element={<HostingProfessionalSituation />} />
          <Route path="/hosting/folder/ressources" element={<HostingRessources />} />

          <Route element={<AgencyRoute />}>
            <Route path="/agency" element={<AgencyIndex />} />
            <Route path="/agency/team" element={<AgencyTeam />} />
            <Route path="/agency/settings" element={<AgencySettings />} />
            <Route path="/agency/calendar" element={<AgencyCalendar />} />

            <Route path="/new" element={<HostNew />} />
            <Route path="/:id/overview" element={<HostOverview />} />
            <Route path="/:id/about-your-place" element={<HostAbout />} />
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

          <Route element={<EmployeeRoute />}>
            <Route path="/employee" element={<EmployeeIndex />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
