import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import Welcome from './components/Welcome';
import Info from './components/Info';
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={'/'} element={<Root />}>
        <Route index element={<Welcome />}></Route>
        <Route path='/info' element={<Info />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default App;
