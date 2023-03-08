import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AgencyRoute from './routes/AgencyRoute';

import Index from './pages/index'

import AgencyIndex from './pages/agency/index'
import AgencyTeam from './pages/agency/team'
import AgencySettings from './pages/agency/settings'
import AgencyCalendar from './pages/agency/calendar'
import AgencyBecomeAHost from './pages/agency/become-a-host/index'
import AgencyBecomeAHostOverView from './pages/agency/become-a-host/overview'
import AgencyBecomeAHostAbout from './pages/agency/become-a-host/about-your-place'
import AgencyBecomeAHostStructure from './pages/agency/become-a-host/structure'
import AgencyBecomeAHostPropertyType from './pages/agency/become-a-host/property-type'
import AgencyBecomeAHostPrivacyType from './pages/agency/become-a-host/privacy-type'
import AgencyBecomeAHostStandOut from './pages/agency/become-a-host/stand-out'
import AgencyBecomeAHostAmenities from './pages/agency/become-a-host/amenities'


import Starter from './pages/starter/overview'
import StarterStructure from './pages/starter/structure'


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
                <Route path="/agency/become-a-host/:id/about-your-place" element={<AgencyBecomeAHostAbout />} />
                <Route path="/agency/become-a-host/:id/structure" element={<AgencyBecomeAHostStructure />} />
                <Route path="/agency/become-a-host/:id/property-type" element={<AgencyBecomeAHostPropertyType />} />
                <Route path="/agency/become-a-host/:id/privacy-type" element={<AgencyBecomeAHostPrivacyType />} />
                <Route path="/agency/become-a-host/:id/stand-out" element={<AgencyBecomeAHostStandOut />} />
                <Route path="/agency/become-a-host/:id/amenities" element={<AgencyBecomeAHostAmenities />} />
              </Route>

              <Route path="/:id" element={<StarterStructure />} />

              <Route path="/starter" element={<Starter />} />
              <Route path="/:id/structure" element={<StarterStructure />} />
              <Route path="/:id/property-type" element={<StarterStructure />} />


            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
