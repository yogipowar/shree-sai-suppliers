import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter basename="/shree-sai-suppliers">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
