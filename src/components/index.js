import React, { Fragment, Component } from 'react';
import Modal from './Modal';
import Button from './Button';

class TestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }

  showModal = () => this.setState({ modal: true })
  hideModal = () => this.setState({ modal: false })

  render() {
    return (
      <Fragment>
        <Modal isVisible={this.state.modal}
          onClose={this.hideModal}
        >
          <p>modal body data</p>
        </Modal>

        <Button onClick={this.showModal}>
          open modal
        </Button>
      </Fragment>
    )
  }
}

export default TestModal;