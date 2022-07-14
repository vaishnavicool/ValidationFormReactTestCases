import { Modal } from "react-bootstrap"
const ModalForm = (props) => {
  let { show, setShow, modalType, pageConfig,children } = props

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-90w modal-dialog-centered"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title id="example-custom-modal-styling-title">
          {pageConfig ? pageConfig[modalType]?.title : "Add New Manifest"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}

export default ModalForm
