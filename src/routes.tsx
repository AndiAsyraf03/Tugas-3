import { createBrowserRouter} from "react-router-dom";
import App from "./App";
import UserDetailPage from "./pages/user-detail-page"; 
import withEditUser from "./components/hocs/withEditUser";
import withAddUser from "./components/hocs/withAddUser";

const EditUserPage = withEditUser(UserDetailPage);
const AddUserPage = withAddUser(UserDetailPage);

export const router = createBrowserRouter([
    {path: "/",element: <App />,},
    {path: "/:id",element: <EditUserPage />, },
    {path: "/:add",element: <AddUserPage />, },
]);
