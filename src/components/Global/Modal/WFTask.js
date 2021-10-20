import React, { useState, useEffect, useRef } from 'react';
import { Form, Modal, Input, Button, message, Select } from 'antd';
import { Desc, Heading } from 'components/Global/Typography';
import { antdNumCheck } from '../Util/Constants';
import back from 'assets/images/Svg/Back.svg';

const WFTask = ({ visible, onCancel, title, classList, formData }) => {
  const { Option } = Select;
  const form = useRef();

  const [FMdata] = useState({});

  useEffect(() => {
    if (form?.current?.setFieldsValue) form.current.setFieldsValue(formData);
  }, [formData]);

  const cancel = (boolVal, value, formData) => {
    form.current.resetFields();
    onCancel(boolVal, value, formData);
  };

  const onFinish = (values) => {
    message.success(
      formData && Object.keys(formData).length
        ? 'Task Updated Successfully.'
        : 'Task Added Successfully.'
    );
    form.current.resetFields();
    cancel(false, values, formData);
  };

  // const task = [
  //   {
  //     key: 'task1',
  //     value: 'Task 1'
  //   },
  //   {
  //     key: 'task2',
  //     value: 'Task 2'
  //   },
  //   {
  //     key: 'task3',
  //     value: 'Task 3'
  //   },
  //   {
  //     key: 'task4',
  //     value: 'Task 4'
  //   }
  // ];

  return (
    <Modal
      title=""
      closable={false}
      maskClosable={false}
      bodyStyle={{
        padding: 0
      }}
      visible={visible}
      transitionName="slidedown"
      className="modalCenter"
      footer={false}
      onCancel={() => cancel(true, null, null)}
    >
      <div className="d-flex align-items-center">
        {/* <LeftOutlined className="mr-3" style={{ fontSize: 16 }} /> */}
        <img
          src={back}
          className="mr-3"
          style={{
            width: '18px',
            height: '18px',
            marginBottom: '20px',
            cursor: 'pointer'
          }}
          alt="back"
          onClick={() => cancel(true, null, null)}
        />
        <Heading variant="modalTitle" text={title} classList={classList} />
      </div>
      <Form
        name="TaskSubmitForm"
        className="submitForm"
        ref={form}
        onFinish={onFinish}
      >
        <div className="col-12 w-100 mb-1 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Task Name" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="Tname"
            hasFeedback
            rules={[{ required: true, message: `Please enter task name` }]}
          >
            <Input className="customInput" style={{ borderRadius: '8px' }} />
          </Form.Item>
        </div>
        <div className="col-12 w-100 mb-1 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Select Task" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="tasksel"
            hasFeedback
            rules={[{ required: true, message: `Please select task` }]}
          >
            <Input className="customInput" style={{ borderRadius: '8px' }} />
          </Form.Item>
        </div>
        <div className="col-12 p-0 d-flex h-20 align-items-center">
          <p
            className="p-0 fnt-lato fnt-500 fnt-xs mb-2"
            style={{ marginLeft: '63px' }}
          >
            Retry
          </p>
          <Form.Item
            className="mt-3"
            style={{ marginLeft: '32px' }}
            name="retry1"
            hasFeedback
          >
            <Input
              className="customInput1"
              onKeyDown={(e) => antdNumCheck(e)}
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>
          <Form.Item
            initialValue={FMdata.Tname}
            className="mt-3 ml-4"
            name="retry2"
            hasFeedback
          >
            <Input
              className="customInput1"
              onKeyDown={(e) => antdNumCheck(e)}
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>
        </div>
        <div className="col-12 p-0 d-flex h-20 align-items-center">
          <p
            className="p-0 fnt-lato fnt-500 fnt-xs mb-2"
            style={{ marginLeft: '63px' }}
          >
            Sleep
          </p>
          <Form.Item
            className="mt-3"
            name="sleep"
            style={{ marginLeft: '32px' }}
            hasFeedback
          >
            <Input
              className="customInput1"
              onKeyDown={(e) => antdNumCheck(e)}
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc
            text="Failure Action"
            classList="fnt-lato fnt-500 fnt-xs mb-2"
          />
          <Form.Item
            className="mt-3 ml-4"
            name="ip"
            hasFeedback
            rules={[{ required: true, message: `Please enter failure action` }]}
          >
            <Input className="customInput" style={{ borderRadius: '8px' }} />
          </Form.Item>
        </div>
        <div className="col-12 p-0 d-flex h-20 align-items-center">
          <Desc text="On Condition" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item className="mt-3 ml-4" name="condition1" hasFeedback>
            <Select placeholder="Select" className="customSel">
              <Option value="Task 1" key="Task 1">
                Task 1
              </Option>
              <Option value="Task 2" key="Task 2">
                Task 2
              </Option>
              <Option value="Task 3" key="Task 3">
                Task 3
              </Option>
              <Option value="Task 4" key="Task 4">
                Task 4
              </Option>
            </Select>
          </Form.Item>
          <Form.Item className="mt-3 ml-4" name="condition2" hasFeedback>
            <Select allowClear placeholder="Select" className="customSel">
              <Option value="Task 1" key="Task 1">
                Task 1
              </Option>
              <Option value="Task 2" key="Task 2">
                Task 2
              </Option>
              <Option value="Task 3" key="Task 3">
                Task 3
              </Option>
              <Option value="Task 4" key="Task 4">
                Task 4
              </Option>
            </Select>
          </Form.Item>
        </div>
        <Heading
          variant="modalTitle"
          text={'Select Parameters'}
          classList={classList}
        />
        <div className="col-12 p-0 d-flex h-20 align-items-center">
          <Desc text="Match Type" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item className="mt-3 ml-4" name="match_type" hasFeedback>
            <Select
              placeholder="Select"
              className="customSel1"
              style={{ width: '100%' }}
            >
              <Option value="Task 1" key="Task 1">
                Task 1
              </Option>
              <Option value="Task 2" key="Task 2">
                Task 2
              </Option>
              <Option value="Task 3" key="Task 3">
                Task 3
              </Option>
              <Option value="Task 4" key="Task 4">
                Task 4
              </Option>
            </Select>
          </Form.Item>
        </div>
        <div className="col-12 w-100 p-0 d-flex h-20 align-items-center">
          <Desc
            text="Expected String"
            classList="fnt-lato fnt-500 fnt-xs mb-2"
          />
          <Form.Item className="mt-3 ml-4" name="expected" hasFeedback>
            <Select
              placeholder="Select"
              className="customSel1"
              style={{ width: '100%' }}
            >
              <Option value="Task 1" key="Task 1">
                Task 1
              </Option>
              <Option value="Task 2" key="Task 2">
                Task 2
              </Option>
              <Option value="Task 3" key="Task 3">
                Task 3
              </Option>
              <Option value="Task 4" key="Task 4">
                Task 4
              </Option>
            </Select>
          </Form.Item>
        </div>
        <Heading
          variant="modalTitle"
          text={'Substitue Variables for Parameters'}
          classList={'fnt-sm'}
        />
        <div className="col-12 w-100 mb-1 p-0 d-flex justify-content-between h-20 align-items-center">
          <Desc text="Arp" classList="fnt-lato fnt-500 fnt-xs mb-2" />
          <Form.Item
            className="mt-3 ml-4"
            name="arp"
            hasFeedback
            rules={[{ required: true, message: `Please enter` }]}
          >
            <Input className="customInput" style={{ borderRadius: '8px' }} />
          </Form.Item>
        </div>
        <div className="col-12 mt-3 d-flex text-left pl-2">
          <div className="col-3 p-0" />
          <Form.Item className="col-9 p-0" style={{ marginLeft: '18px' }}>
            <Button
              type="primary"
              style={{ width: 100 }}
              className="antd-Vbtn mr-3"
              htmlType="submit"
            >
              {formData && Object.keys(formData).length ? 'Update' : 'Add'}
            </Button>
            <Button
              htmlType="button"
              style={{ width: 100 }}
              className="antd-ghost-btn"
              onClick={() => cancel(true, null, null)}
            >
              Cancel
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default WFTask;
