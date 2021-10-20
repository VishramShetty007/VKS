import React, { useState, useRef, useEffect } from 'react';
import { Form, Modal, Input, Button, message } from 'antd';
import { Desc, Heading } from 'components/Global/Typography';
import WFTask from './WFTask';
import Delete from 'assets/images/Svg/Delete.svg';
import edit from 'assets/images/Svg/edit.svg';
import add from 'assets/images/Svg/AddPri.svg';
import close from 'assets/images/Svg/Close.svg';

const CreateWForm = ({ visible, onCancel, title, classList }) => {
  let taskData_List = useRef();
  const [form] = Form.useForm();
  const [taskData, settaskData] = useState([]);
  const [FormTaskData, setFormTaskData] = useState({});
  const [visibleTask, setVisibleTask] = useState(false);

  useEffect(() => {
    taskData_List.current = [];
  }, []);

  const cancel = () => {
    form.resetFields();
    onCancel();
  };

  const onFinish = (values) => {
    message.success('Command Added Successfully.');
    form.resetFields();
    taskData_List.current = [];
    settaskData([]);
    setFormTaskData({});
    cancel();
  };

  const editTaskData = (val, index) => {
    taskData_List.current[index].index = index;
    setFormTaskData(JSON.parse(JSON.stringify(taskData_List.current[index])));
    setVisibleTask(true);
  };
  const removeTaskData = (val, index) => {
    taskData_List.current.splice(index, 1);
    settaskData(taskData_List.current.slice());
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
      onCancel={cancel}
    >
      <Heading variant="modalTitle" text={title} classList={classList} />
      <Form
        name="createSubmitForm"
        className="submitForm"
        form={form}
        autoComplete="off"
        onFinish={onFinish}
      >
        <div className="col-12 w-100 p-0 d-flex mb-2 justify-content-between h-20 align-items-center">
          <Desc text="Name" classList="fnt-lato fnt-500 fnt-xs" />
          <Form.Item
            className="mt-3 ml-4"
            name="name"
            hasFeedback
            rules={[{ required: true, message: `Please enter name` }]}
          >
            <Input className="customInput" style={{ borderRadius: '8px' }} />
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
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex mb-4 justify-content-between h-20 align-items-center">
          <Desc text="Notify" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="userName"
            hasFeedback
            rules={[
              { required: true, message: `Please enter Username to notify` }
            ]}
          >
            <Input className="customInput" style={{ borderRadius: '8px' }} />
          </Form.Item>
        </div>
        <Heading variant="modalTitle" text={'Tasks'} classList={'mb-1'} />
        {taskData && taskData.length > 0 && (
          <ul className="m-2 p-0">
            {taskData.map((item, index) => {
              return (
                <li
                  className="col-12 mb-2 p-2 d-flex align-items-center"
                  style={{ border: '1px solid #1e2e3b', borderRadius: '8px' }}
                >
                  <div className="col-9 p-0">
                    <p className="phead">{`${item.Tname} - ${item.condition1} ${item.condition1}`}</p>
                    <p className="pbody">network_send_command-05-continue</p>
                  </div>
                  <div className="col-3 p-0 d-flex align-items-center justify-content-around">
                    <img
                      src={edit}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer'
                      }}
                      onClick={(e) => editTaskData(e, index)}
                      alt="edit"
                    />
                    <img
                      src={Delete}
                      style={{
                        width: '18px',
                        height: '18px',
                        cursor: 'pointer'
                      }}
                      onClick={(e) => removeTaskData(e, index)}
                      alt="del"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        <Button
          className="antd-ghost-btn-primary d-flex align-items-center mt-2"
          onClick={() => {
            setFormTaskData({});
            setVisibleTask(true);
          }}
          style={{ width: 110 }}
        >
          <img
            src={add}
            className="mr-1"
            style={{ width: '18px', height: '18px' }}
            alt="add"
          />
          Add Task
        </Button>
        <div className="col-12 mt-3 text-left mt-5 p-0">
          <Form.Item>
            <Button
              style={{ width: 110 }}
              type="primary"
              className="antd-Vbtn mr-3"
              htmlType="submit"
              disabled={!(taskData && taskData.length > 0)}
            >
              Save
            </Button>
            <Button
              htmlType="button"
              style={{ width: 110 }}
              className="antd-ghost-btn"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Form.Item>
        </div>
      </Form>
      <WFTask
        classList={`mb-3 mb-md-4`}
        title="Add Task"
        formData={FormTaskData}
        visible={visibleTask}
        onCancel={(boolVal, value, orgData) => {
          if (boolVal) {
            setFormTaskData({});
            setVisibleTask(false);
          } else {
            if (orgData.index == null) {
              taskData_List.current.push(value);
              settaskData(taskData_List.current.slice());
              setFormTaskData({});
              setVisibleTask(false);
            } else {
              taskData_List.current[orgData.index] = value;
              settaskData(taskData_List.current.slice());
              setFormTaskData({});
              setVisibleTask(false);
            }
          }
        }}
      />
    </Modal>
  );
};

export default CreateWForm;
