import React from 'react'
import { Modal } from 'antd'
const ModalContent = ({ visible, setVisible }) => {
  return (
    <>
      {/* Modal */}
      <Modal
        title='Add a post!'
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export default ModalContent
