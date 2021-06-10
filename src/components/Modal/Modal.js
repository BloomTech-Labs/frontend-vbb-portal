import React from 'react';
import { Modal as AntdModal } from 'antd';
import { connect } from 'react-redux';
import { closeModal } from '../../redux/actions';

const Modal = ({ content, isOpen, closeModal, config }) => {
  return (
    <div
      onClick={(e) => {
        // by default, prevent the modal from triggering event listeners elsewhere in the application
        if (!config.allowEventPropagation) {
          e.stopPropagation();
        }
      }}
    >
      <AntdModal
        visible={isOpen}
        destroyOnClose={true}
        onCancel={closeModal}
        footer={null}
        {...config}
      >
        {content}
      </AntdModal>
    </div>
  );
};

export default connect(({ modal }) => ({ ...modal }), { closeModal })(Modal);
