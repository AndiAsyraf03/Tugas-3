import { Button } from 'antd'
import  { FC } from 'react'
import { useDeleteUser } from '../../services/api/delete-user';
import { useUserStore } from '../../services/stores/user';

const DeleteUser: FC<{ id: number}> = ({id}) => {
  const {setUsers, users} = useUserStore ();
  const {mutate} = useDeleteUser ();
    return ( 
    <Button 
      onClick={() => {
      mutate(id, {
        onSuccess: () => {
          setUsers(users.filter((user) => user.id !== id)); 
        },
      });
    }}
    >
      Delete
    </Button>
  );
};

export default DeleteUser 