import React from 'react';
import { Form, Modal, Input, Button, message } from 'antd';
import { Desc, Heading } from 'components/Global/Typography';
import { LockOutlined } from '@ant-design/icons';
import { antdNumCheck } from '../Util/Constants';
import close from 'assets/images/Svg/Close.svg';

const EditForm = ({ visible, data, onCancel, title, classList }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    message.success('Device Updated Successfully.');
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title=""
      closable={true}
      closeIcon={
        <img
          src={close}
          style={{
            width: '18px',
            height: '18px',
            cursor: 'pointer'
          }}
          className="closeCustomModal"
          alt="close"
        />
      }
      maskClosable={false}
      bodyStyle={{
        padding: 0
      }}
      visible={visible}
      className="modalCenter"
      transitionName="slidedown"
      footer={false}
      onCancel={onCancel}
    >
      <Heading variant="modalTitle" text={title} classList={classList} />
      <Form
        name="createSubmitForm"
        className="submitForm"
        form={form}
        autoComplete="off"
        onFinish={onFinish}
        initialValues={{
          name: data.name,
          ip: data.ip,
          vendor: data.vendor,
          group: data.group,
          type: data.type,
          protocol: data.protocol,
          port: data.port,
          userName: data.userName
        }}
      >
        <div className="col-12 w-100 mb-1 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Device Name" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="name"
            hasFeedback
            rules={[{ required: true, message: `Please enter device name` }]}
          >
            <Input className="customInput" style={{ borderRadius: '8px' }} />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Hostname" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="ip"
            hasFeedback
            rules={[{ required: true, message: `Please enter Host Address` }]}
          >
            <Input
              className="customInput"
              onKeyDown={(e) => antdNumCheck(e)}
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Vendor" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="vendor"
            hasFeedback
            rules={[{ required: true, message: `Please enter Vendor name` }]}
          >
            <Input className="customInput" style={{ borderRadius: '8px' }} />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Model" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item className="mt-3 ml-4" name="group">
            <Input
              className="customInput"
              style={{ borderRadius: '8px' }}
              placeholder="Optional"
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Type" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item className="mt-3 ml-4" name="type">
            <Input
              className="customInput"
              style={{ borderRadius: '8px' }}
              placeholder="Optional"
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Protocol" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item className="mt-3 ml-4" name="protocol">
            <Input
              className="customInput"
              style={{ borderRadius: '8px' }}
              placeholder="Optional"
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Username" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="username"
            hasFeedback
            rules={[{ required: true, message: `Please enter Username` }]}
          >
            <Input
              className="customInput"
              autoComplete="new-password"
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Password" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="pwd"
            hasFeedback
            rules={[{ required: true, message: `Please enter password` }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              autoComplete="new-password"
              className="customInput"
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>
        </div>
        <div className="col-12 mt-3 d-flex text-left pl-2">
          <div className="col-3 p-0" />
          <Form.Item className="col-9 p-0" style={{ marginLeft: '18px' }}>
            <Button type="primary" className="antd-Vbtn mr-3" htmlType="submit">
              Edit Device
            </Button>
            <Button
              htmlType="button"
              className="antd-ghost-btn"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default EditForm;
