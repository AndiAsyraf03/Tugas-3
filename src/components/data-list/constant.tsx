import { TableProps } from "antd";
import EditUser from "../edit-user";
import DeleteUser from "../delete-user";
import { User } from "../../services/api/get-users";

export interface UserDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const columns: TableProps<UserDataType>['columns'] = [
  { title: 'User Id', dataIndex: 'userId', key: 'userId' },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Body', dataIndex: 'body', key: 'body' },
  {
    title: 'Action',
    key: 'action',
    // JSX syntax for rendering content within the cell
    render: (value: User) => {
      return(
        <div>
          <EditUser {...value} />
          <DeleteUser id={value.id}/>
        </div>
      )
    },
  },
];
