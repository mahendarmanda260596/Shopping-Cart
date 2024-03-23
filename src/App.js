import './App.css';
import Cart from './components/Cart';
import DashBoard from './components/DashBoard';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashBoard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>

    </Route>

  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
