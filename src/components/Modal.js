import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components';
import {
  CloseButton,
  FooterButton,
  HeaderIcon,
  HeaderTitle,
  ModalBody,
  ModalFooter,
  ModalHeader
} from './styledComponents';

const renderModalAppearance = appearance => {
  let appear = undefined;

  if (appearance === 'fadIn') {
    appear = keyframes`
      from {transform: scale(.25); opacity: 0};
      to { transform: scale(1); opacity: 1};
    `;
  } else if (appearance === 'fadOut') {
    appear = keyframes`
      from {transform: scale(1); opacity: 0};
      to { transform: scale(0.25); opacity: 1};
    `;
  } else if (appearance === 'slideLeft') {
    appear = keyframes`
      from {transform: translateX(50%); opacity: 0;};
      to { opacity: 1};
    `;
  } else if (appearance === 'slideRight') {
    appear = keyframes`
      from {transform: translateX(-50%); opacity: 0;};
      to { opacity: 1};
    `;
  } else if (appearance === 'slideUp') {
    appear = keyframes`
      from {transform: translateY(50%); opacity: 0;};
      to { opacity: 1};
    `;
  } else {
    appear = keyframes`
    from {transform: translateY(-50%); opacity: 0;};
    to { opacity: 1};
  `;
  }

  return appear;
}


const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(0,0,0,0.6);
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

const ModalContainer = styled.div`
  display: ${props => props.isVisible ? 'block' : 'none'};
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #fff;
  width: 70%;
  margin: auto;
  min-height: 300x;
  max-height: 100%;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.11);
  animation-name: ${props => props.appearance && renderModalAppearance(props.appearance)};
  animation-duration: .6s;
  
  @media(max-width: 760px){
    width: 90%;
  }
  `;

const Modal = ({
  maskStyle,
  modalContainerStyle,
  footerStyle,
  hasFooter,
  modalBodyStyle,
  children,
  onClose,
  isVisible,
  cancelText,
  title,
  okayText,
  appearance,
  onOkay,
  onCancel,
  closeButtonStyle
}) => {
  return (
    <Fragment>
      <Mask onClick={onClose} style={maskStyle} isVisible={isVisible} />
      <ModalContainer style={modalContainerStyle} isVisible={isVisible} appearance={appearance}>
        <ModalHeader>
          <HeaderTitle>
            {title}
          </HeaderTitle>

          <HeaderIcon>
            <CloseButton children="X" onClick={onClose} style={closeButtonStyle} />
          </HeaderIcon>

        </ModalHeader>

        <ModalBody style={modalBodyStyle}>
          {children}
        </ModalBody>

        {hasFooter ? (
          <ModalFooter style={footerStyle}>
            <FooterButton onClick={onCancel || onClose} children={cancelText} />
            <FooterButton onClick={onOkay} children={okayText} />
          </ModalFooter>
        ) : null}
      </ModalContainer>
    </Fragment>
  );
}

Modal.defaultProps = {
  hasFooter: true,
  cancelText: 'Cancel',
  title: 'modal title',
  okayText: 'okay',
  appearance: 'FadIn'
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
  onOkay: PropTypes.func,
  onCancel: PropTypes.func,
  maskStyle: PropTypes.object,
  modalBodyStyle: PropTypes.object,
  modalContainerStyle: PropTypes.object,
  footerStyle: PropTypes.object,
  closeButtonStyle: PropTypes.object,
  children: PropTypes.any,
  hasFooter: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cancelText: PropTypes.string,
  okayText: PropTypes.string,
  appearance: PropTypes.string
}

export default Modal;