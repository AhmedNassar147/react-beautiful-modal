import styled from 'styled-components';
import Button from './Button'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const ModalHeader = styled(Flex)`
  background-color: #fff;
  padding: 6px;
  height: 40px;
  border-radius: 4px;
  border-bottom: 0.5px solid #c3c3c3;
`;

export const HeaderTitle = styled.div`
  flex: 1;
  font-size: 18px;
  text-align: left;
  line-height: 40px; 
`;

export const HeaderIcon = styled.div`
  flex: 0;
  line-height: 43px;
  width: 30px;
`;

export const CloseButton = styled(Button)`
  width: 100%;
  border: 0;
  box-shadow: none; 
  font-size: 16px;
  color: #000;
  &:hover {
  color: #CE93D8;
  border: 1px solid #CE93D8;
  box-shadow: none;
  };
`;

export const ModalBody = styled.div`
  min-height: 100px;
  padding: 0px 8px;
`;

export const ModalFooter = styled(Flex)`
  background-color: #fff;
  height: 47px;
  padding-right: 6px;
  border-top: 0.5px solid #c3c3c3;
  border-radius: 4px;
  justify-content: flex-end;
  align-items: center;

  @media(max-width: 760px){
    flex-direction: column;
    height: 60px;
    padding: 5px 6px 5px 0px;
  }
`;

export const FooterButton = styled(Button)`
  margin-left: 4px;
  @media(max-width: 760px){
    flex: 1;
    margin: 0px 0px 3px 0px;
  }
`;