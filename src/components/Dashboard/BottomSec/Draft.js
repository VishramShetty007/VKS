import React from 'react';
import { Card, Form, Input, Button } from 'antd';

const Draft = () => {
  const postblog = (data) => {
    console.log('=======================>>>>>>', data);
  };
  return (
    <Card className="cardSHA h-100">
      <div className="headerC mb-3 pb-2 border-bottom">
        <h6 className="m-0">New Draft</h6>
      </div>
      <div className="d-flex flex-column">
        <Form
          className="form"
          size="large"
          name="control-ref"
          onFinish={postblog}
        >
          <div className="col-12 p-0" id="main">
            <Form.Item
              name="postName"
              rules={[
                {
                  required: true,
                  message: 'Please Enter'
                }
              ]}
            >
              <Input style={{ borderRadius: '1px' }} placeholder="Blog Title" />
            </Form.Item>
          </div>
          <div className="col-12 p-0" id="main1">
            <Form.Item
              name="post"
              rules={[
                {
                  required: true,
                  message: 'Please Enter'
                }
              ]}
            >
              <Input.TextArea
                rows="10"
                style={{ borderRadius: '1px', resize: 'none' }}
                placeholder="Enter Desc."
              />
            </Form.Item>
          </div>
          <div className="col-12 text-left p-0">
            <Form.Item>
              <Button
                type="primary"
                className="antd-Vbtn mr-3"
                htmlType="submit"
              >
                Create Draft
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Card>
  );
};

export default Draft;
