import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css';
import { NextUIProvider } from '@nextui-org/react';

const Layout = lazy(() => import('./Layout.tsx'));
const Home = lazy(() => import('./components/home/Home.tsx'));
const Jobs = lazy(() => import('./JobSection/Jobs.tsx'));
const Messeges = lazy(() => import('./components/Messeges/Messeges.tsx'));
const LoginForm = lazy(() => import('./components/Loginform/LoginForm.tsx'));
const Register = lazy(() => import('./components/SignUp/Register.tsx'));
const JobRegistration = lazy(() => import('./components/JobPost/JobRegistration.tsx'));
// const router = createBrowserRouter([
//   { 
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "home",
//         element: <Home />
//       },
//       {
//         path: 'jobs',
//         element: <Jobs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='jobs' element={<Jobs />} />
      <Route path='chats' element={<Messeges />} />
      <Route path='login' element={<LoginForm />} />
      <Route path='signup' element={<Register />} />
      <Route path='postJob' element={<JobRegistration/>}/>
      <Route path='*' element={<div className='flex justify-center items-center'><h1>Not Found</h1></div>} />
    </Route>
    

  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
    <NextUIProvider>
      
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router}/>
    </Suspense>
    
    </NextUIProvider>
  </React.StrictMode>,
)
