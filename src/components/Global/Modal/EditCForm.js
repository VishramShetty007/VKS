import React from 'react';
import { Form, Modal, Input, Button, message } from 'antd';
import { Desc, Heading } from 'components/Global/Typography';
import close from 'assets/images/Svg/Close.svg';

const EditCForm = ({
  visible,
  data,
  onCancel,
  title,
  classList,
  disableEdit
}) => {
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
        initialValues={data}
      >
        <div className="col-12 w-100 mb-1 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Name" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="name"
            hasFeedback
            rules={[{ required: true, message: `Please enter name` }]}
          >
            <Input
              className="customInput"
              style={{ borderRadius: '8px' }}
              disabled={disableEdit}
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
            <Input
              className="customInput"
              style={{ borderRadius: '8px' }}
              disabled={disableEdit}
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between align-items-center">
          <Desc
            text="Description"
            classList="fnt-lato fnt-500 fnt-xs mb-2 align-UP"
          />
          <Form.Item className="ml-4 mb-2" name="Description">
            <Input.TextArea
              rows={3}
              className="customInput textInput"
              style={{ borderRadius: '8px', resize: 'none' }}
              disabled={disableEdit}
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Command" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="Command"
            hasFeedback
            rules={[{ required: true, message: `Please enter command` }]}
          >
            <Input
              className="customInput"
              style={{ borderRadius: '8px' }}
              disabled={disableEdit}
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Match String" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="Match_String"
            hasFeedback
            rules={[{ required: true, message: `Please enter match string` }]}
          >
            <Input
              className="customInput"
              style={{ borderRadius: '8px' }}
              disabled={disableEdit}
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Match Type" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="Match_Type"
            hasFeedback
            rules={[{ required: true, message: `Please enter match type` }]}
          >
            <Input
              className="customInput"
              style={{ borderRadius: '8px' }}
              disabled={disableEdit}
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc
            text="Expected String"
            classList="fnt-lato fnt-500 fnt-xs mb-2"
          />
          <Form.Item
            className="mt-3 ml-4"
            name="Expected_String"
            hasFeedback
            rules={[
              { required: true, message: `Please enter expected result` }
            ]}
          >
            <Input
              className="customInput"
              style={{ borderRadius: '8px' }}
              disabled={disableEdit}
            />
          </Form.Item>
        </div>
        {!disableEdit && (
          <div className="col-12 mt-3 d-flex text-left pl-2">
            <div className="col-3 p-0" />
            <Form.Item className="col-9 p-0" style={{ marginLeft: '18px' }}>
              <Button
                type="primary"
                className="antd-Vbtn mr-3"
                htmlType="submit"
              >
                Edit Command
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
        )}
      </Form>
    </Modal>
  );
};

export default EditCForm;
