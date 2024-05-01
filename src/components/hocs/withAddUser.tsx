import { ComponentProps, ComponentType } from 'react'
import UserDetailPage from '../../pages/user-detail-page'
import { useAddUser } from '../../services/api/add-user';
import { useUserStore } from '../../services/stores/user';


// type UserDetailPageProps = ComponentProps<typeof UserDetailPage>;

// const withAddUser = (WrappedComponent: ComponentType<UserDetailPageProps> ) => {
//     const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
//       const { mutate } = useAddUser();
//       const {setUsers, users} = useUserStore();

//       const onSubmit = (values: any) => {
//         mutate(values, {
//           onSuccess: (response) => {
//             setUsers([...users, ...response]);
//           },
//         });
//       };
//       return <WrappedComponent {...props } onSubmit={onSubmit} />;
//     };

//     return NewComponent;
// };

// export default withAddUser 

type UserDetailPageProps = ComponentProps<typeof UserDetailPage>;

const withAddUser = (WrappedComponent: ComponentType<UserDetailPageProps>) => {
  const NewComponent = (props: ComponentProps<typeof WrappedComponent>) => {
    const { mutate } = useAddUser();
    const { setUsers, users } = useUserStore();

    const onSubmit = (values: any) => {
      mutate(values, {
        onSuccess: (response) => {
          setUsers([...users, ...response]);
        },
      });
    };

    return <WrappedComponent {...props} onSubmit={onSubmit} />;
  };

  return NewComponent;
};

export default withAddUser;
