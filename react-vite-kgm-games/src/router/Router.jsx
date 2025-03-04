import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../ui/layouts/MainLayout'
import LottoPage from '../ui/pages/LottoPage'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    loader: () => '로또',
    children: [
      {
        path: '',
        element: <LottoPage />,
        loader: () => '로또',
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export { router, routes }
