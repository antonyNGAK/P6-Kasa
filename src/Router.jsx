import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import ActiveLocation from './pages/Location'
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
        path: 'location/:id',
        element: <ActiveLocation />,
      },
      {
        path: '/*',
        element: <PageError />,
      },
    ],
  },
])

export default router