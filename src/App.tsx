 
import { RouterProvider } from 'react-router';
import './App.css'
import AppRouter from './components/Router/Router';

function App() { 
  return <div className="App">
    <RouterProvider router={AppRouter} />
  </div>;
}

export default App
