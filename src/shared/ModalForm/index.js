import { Modal } from "react-bootstrap"
const ModalForm = (props) => {
  let {
    show,
    modalType,
    pageConfig,
    children,
    largeModal = false,
    pageTitle = "",
    onHide,
  } = props
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName={`${
        largeModal ? "modal-xl" : "modal-90w"
      } modal-dialog-centered`}
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title id="example-custom-modal-styling-title">
          {pageConfig ? pageConfig[modalType]?.title : pageTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}

export default ModalForm
