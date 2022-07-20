import { Modal } from "react-bootstrap"
const ModalForm = (props) => {
  let { show, setShow, modalType, pageConfig,children,largeModal=false,pageTitle="" } = props
  console.log("Value of show",show)
  return (
    <>
    {show && <Modal
      show={true}
      onHide={() => setShow(false)}
      dialogClassName={`${largeModal ? 'modal-xl':'modal-90w'} modal-dialog-centered`}
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title id="example-custom-modal-styling-title">
          {pageConfig ? pageConfig[modalType]?.title : pageTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>}
    </>
  )
}

export default ModalForm
