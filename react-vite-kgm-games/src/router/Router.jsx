import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../ui/layouts/MainLayout'
import LottoPage from '../ui/pages/LottoPage'
import RspPage from '../ui/pages/RspPage'
import BoardPage from '../ui/pages/BoardPage'
import BoardPagingPage from '../ui/pages/BoardPagingPage'

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
      {
        path: 'rsp',
        element: <RspPage />,
        loader: () => '가위바위보',
      },
      {
        path: 'boards',
        element: <BoardPagingPage />,
        loader: () => '게시판',
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export { router, routes }
