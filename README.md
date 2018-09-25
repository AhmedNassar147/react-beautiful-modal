# react-beautiful-modal
a very customizable modal based on react and styled-components


# import React, { Component } from 'react';
# import Modal from 'react-beautiful-modal';

# class TestModal extends Component {
 # constructor(props) {
  #  super(props);
   # this.state = {
    #  modal: false
   # }
 # }

 # showModal = () => this.setState({ modal: true })
  # hideModal = () => this.setState({ modal: false })

 # render() {
  #  return (
   #     <Modal isVisible={this.state.modal}
    #      isVisible={boolean value for modal visibility}
     #     onClose={a function to close the modal visibility},
      #    maskStyle={a style object for the background overlay component}
       #   modalContainerStyle={a style object for the container that hold all the modal}
        #  footerStyle={a style object for the footer container}
         # modalBodyStyle={a style object for the you modal content}
          # hasFooter={boolean value for footer visibility}
          children={your content}
          cancelText={a text for cancel button}
          title={modal title text || react node element}
          okayText={a text for okay button}
          appearance={a string to control how the modal should apear and it should be one of these ('fadIn', 'fadOut', 'slideLeft', 'slideRight', 'slideUp', 'slideDown' by default it slideDown )}
          onOkay={fucntion to submit what ever you want}
          closeButtonStyle={}
        >
          your content here
        </Modal>
    )
  }
}

export default TestModal;`