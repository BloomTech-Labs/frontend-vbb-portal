import React from 'react';
import { Modal as AntdModal } from 'antd';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/actions';

const Modal = ({ content, isOpen, closeModal, config }) => {
  return (
    <AntdModal
      visible={isOpen}
      destroyOnClose={true}
      onCancel={closeModal}
      footer={null}
      {...config}
    >
      {content}
    </AntdModal>
  );
};

export default connect(({ modal }) => ({ ...modal }), { closeModal })(Modal);
