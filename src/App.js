import './App.css';
import './components/StyleNull.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
