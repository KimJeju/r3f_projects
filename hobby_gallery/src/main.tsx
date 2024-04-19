import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { 
  // 라우터 라이브러리
  // 패키지 설치
  // npm install react-router-dom localforage match-sorter sort-by
  createBrowserRouter,
  RouteObject,
  RouterProvider
 } from 'react-router-dom'
import './index.css'

//personal component
import PageError from './Components/PageError.tsx'
import { ViewList } from './Models/IViewModel.ts'
import ArtDetailView from './Components/Contents/Arts/ArtDetailView.tsx'
import ContentContainer from './Components/Share/ContentContainer.tsx'



// const routeElements : RouteObject[] = []
// ViewList.forEach(el => 
//   routeElements.push({
//     path : `arts/:${el.title}`,
//     element : <ArtDetailView />
//   })  
// );

// console.log(routeElements);

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
