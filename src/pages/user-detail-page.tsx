import { Button, Form, Input } from 'antd';
import { FC } from 'react'

type OnSubmit = {
  userId: number; 
  title: string; 
  body: string;
}

const UserDetailPage: FC  <{onSubmit?: (value: OnSubmit) => void; 
  initialValues?: object;
}> = ({
  onSubmit, initialValues}) => {
  const onFinish = (values: OnSubmit) => {
      if(onSubmit) onSubmit(values);
    };

  return (
    <Form onFinish={onFinish} initialValues={initialValues}>
      <Form.Item label="User Id" name= "userId">
        <Input />
      </Form.Item>
      <Form.Item label="Title" name= "title">
        <Input />
      </Form.Item>
      <Form.Item label="Body" name= "body">
        <Input />
      </Form.Item>

      <Button htmlType='submit'>Submit</Button>
    </Form>
  )
}

export default UserDetailPage;