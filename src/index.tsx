import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './contexts/UserContext';
import { AgencyContextProvider } from './contexts/AgencyContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserContextProvider>
      <AgencyContextProvider>
        <App />
    </AgencyContextProvider>
  </UserContextProvider>
);