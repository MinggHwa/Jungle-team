import styled from 'styled-components';

interface enterButtonProps {
  onClick?: () => void;
}

function EnterButton({ onClick }: enterButtonProps) {
  return (
    <ButtonDiv type="button">
      <ButtonText>Join</ButtonText>
    </ButtonDiv>
  );
}

export default EnterButton;

const ButtonDiv = styled.button`
  width: 105px;
  height: 43px;
  border-radius: 15px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    box-shadow:
      rgba(255, 255, 255, 0.317) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.595) 0px 2px 16px 0px;
  }
`;

const ButtonText = styled.span`
  font-size: 24px;
  color: white;
`;
