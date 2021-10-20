import React from 'react';
import { Modal, Button } from 'antd';
import { Heading } from 'components/Global/Typography';
import { Link } from 'react-router-dom';
import close from 'assets/images/Svg/Close.svg';
// import Delete from 'assets/images/Svg/Delete.svg';
// import edit from 'assets/images/Svg/edit.svg';

const ExeCommand = ({ visible, onCancel, title, classList, View }) => {
  const cancel = () => {
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
      transitionName="slidedown"
      className="modalCenter col-12"
      footer={false}
      onCancel={cancel}
    >
      <Heading variant="modalTitle" text={title} classList={classList} />
      <div
        className="col-12 p-0 mb-3 d-flex align-items-center"
        style={{ width: '100%' }}
      >
        <p className="col-5 p-0 commonP">Name</p>
        <p className="col-7 commonP">Workflow 4</p>
      </div>
      <div className="col-12 p-0 mb-3 d-flex align-items-center">
        <p className="commonP col-5 p-0">Description</p>
        <p className="commonP col-7">Arista</p>
      </div>
      <div className="d-flex col-12 mb-5 p-0 align-items-center">
        <p className="commonP col-5 p-0">Notify</p>
        <p className="commonP col-7">123@gmail.com</p>
      </div>
      <Heading variant="modalTitle" text={'Tasks'} classList={classList} />
      <ul className="m-0 p-0">
        <li
          className="col-12 m-0 mb-2 p-3 d-flex align-items-center"
          style={{ border: '1px solid #1e2e3b', borderRadius: '8px' }}
        >
          <div className="col-9 p-0">
            <p className="phead">Send Command Task 1</p>
            <p className="pbody">network_send_command-05-continue</p>
          </div>
          {/* {!View && (
            <div className="col-3 p-0 d-flex align-items-center justify-content-around">
              <img
                src={edit}
                style={{ width: '18px', height: '18px' }}
                alt="edit"
              />
              <img
                src={Delete}
                style={{ width: '18px', height: '18px' }}
                alt="del"
              />
            </div>
          )} */}
        </li>
        <li
          className="col-12 mb-2 p-3 d-flex align-items-center"
          style={{ border: '1px solid #1e2e3b', borderRadius: '8px' }}
        >
          <div className="col-9 p-0">
            <p className="phead">Send Command Task 2</p>
            <p className="pbody">network_send_command-05-continue</p>
          </div>
          {/* {!View && (
            <div className="col-3 p-0 d-flex align-items-center justify-content-around">
              <img
                src={edit}
                style={{ width: '18px', height: '18px' }}
                alt="edit"
              />
              <img
                src={Delete}
                style={{ width: '18px', height: '18px' }}
                alt="del"
              />
            </div>
          )} */}
        </li>
      </ul>
      {!View && (
        <>
          <Link to="/exeRes" className="ml-md-auto mb-md-auto">
            <Button className="antd-Vbtn mr-2">Execute</Button>
          </Link>
          <Button className="antd-ghost-btn mt-2 ml-2">Cancel</Button>
        </>
      )}
    </Modal>
  );
};

export default ExeCommand;
