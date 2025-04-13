import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main/Main';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import Favorites from './pages/Favorites/Favorites';
import SinglePage from './pages/SinglePage/SinglePage';
import MainPage from './pages/Main/MainPage';
import { UserProvider } from './components/Context/UserContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <UserProvider>
        <Main />
      </UserProvider>
    ),
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/single/:id',
        element: <SinglePage />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
