import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import ActiveRent from './pages/Rent'
import PageError from './pages/PageError'


const router = createBrowserRouter([
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
        path: 'rent/:id',
        element: <ActiveRent />,
      },
      {
        path: '/404',
        element: <PageError />,
      },
    ],
  },
])

export default router