import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { 
  // 라우터 라이브러리
  // 패키지 설치
  // npm install react-router-dom localforage match-sorter sort-by
  createBrowserRouter,
  RouterProvider
 } from 'react-router-dom'
import './index.css'

//personal component
import PageError from './Components/Globals/PageError.tsx'
import ArtDetailView from './Components/Contents/Arts/ArtDetailView.tsx'


//페이지 라우터 설정
const router = createBrowserRouter([
  {
    path:"/",
    element : <App />,
    errorElement : <PageError />,
    children : [
      {
        path : "arts/:id",
        element : <ArtDetailView />
      },
    ],
  },
  // {
  //   path: "arts/:artId",
  //   element: <ArtDetailView />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
