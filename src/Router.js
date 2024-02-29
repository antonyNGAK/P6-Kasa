import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import ActiveLocation from './pages/Location';
import PageError from './pages/PageError';


const route = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: 'Location/:id',
        element: <ActiveLocation />,
      },
      {
        path: '/404',
        element: <PageError />,
      },
    ],
  },
])

export default route