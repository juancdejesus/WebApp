import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate 
} from "react-router-dom";

import Client from '../pages/Client';
import About from '../pages/About';
import UserList, { userListLoader } from '../pages/users/UserList';
import PageNotFound from '../pages/PageNotFound';
import AppLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import UserEdit from "../pages/users/UserEdit";
import Error from "../pages/Error";
import EditableTable from "../pages/EditableTable";


export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="Clients" element={<Client/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Table" element={<EditableTable/>}/>
        <Route path='Users'
          element={<UserList/>}
          loader={userListLoader}
          errorElement={<Error/>}>
          <Route path=":id" element={<UserEdit/>}/>
        </Route>
        <Route path='home' element={<Home/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Route>
    ), { basename: '/ReactApp' }
  )
