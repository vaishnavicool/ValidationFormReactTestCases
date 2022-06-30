import FilterPanel from "../FilterPanel"
import {Button, Modal} from "react-bootstrap"
import AddWorkOrder from "../AddWorkOrder"
const ModalForm = (props) => {
    let {show,setShow,modalType,pageConfig} = props

  return (
    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton closeVariant='white'>
          <Modal.Title id="example-custom-modal-styling-title">
            {pageConfig[modalType]?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FilterPanel {...props} />
        </Modal.Body>
      </Modal>
  )
}

export default ModalForm