import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticatedRoute from './routes/AuthenticatedRoute';

import Index from './pages/index'

import AgencyIndex from './pages/agency'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
            <Route element={<AuthenticatedRoute />}>
              <Route path="/agency" element={<AgencyIndex />} />
            </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
