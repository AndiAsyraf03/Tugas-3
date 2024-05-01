import { Table } from 'antd';
import { FC } from 'react';
import { columns } from './constant';
import { useGetUser } from '../../services/api/get-users';
import { Link } from 'react-router-dom';

const DataList: FC = () => {
  const { userList } = useGetUser();


  return (
    <>
    <Link to={"/add"}>Add User</Link>
      <Table
        columns={columns}
        dataSource={userList?.map(({ id, userId, title, body }) => ({
          key: id,
          id,
          userId,
          title,
          body,
        }))}
      />
    </>
  );
};

export default DataList;
