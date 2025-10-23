import { Outlet } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';

function App() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}

export default App;
