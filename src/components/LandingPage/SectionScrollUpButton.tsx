import { Link } from 'react-scroll';
import styled from 'styled-components';
import TopButton from '@assets/landing/landing-scroll-up.svg';

interface Button {
  sectionId: string;
  handleButtonClick?: () => void;
}

const SectionScrollUpButton = ({ sectionId, handleButtonClick }: Button) => {
  return (
    <ScrollDownButton>
      <Link
        to={sectionId}
        smooth={true}
        duration={700}
        onClick={handleButtonClick}
      >
        <ButtonImg src={TopButton} alt="스크롤 버튼" />
      </Link>
    </ScrollDownButton>
  );
};

export default SectionScrollUpButton;

const ScrollDownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 30px;
  right: 50px;
`;

const ButtonImg = styled.img`
  @media ${(props) => props.theme.device.tablet} {
    width: 64px;
    height: 50px;
  }

  @media ${(props) => props.theme.device.mobile} {
    width: 54px;
    height: 40px;
  }
`;
