import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import CategorySection from '@components/MainPage/CategorySection';
import ArrowScrollDown from '@/components/ArrowScrollDown';
import gitLogo from '@assets/common/gitlogo.svg';
import figmaLogo from '@assets/common/figmalogo.svg';

function MainPage() {
  return (
    <>
      <Helmet>
        <title>Main - JUNGLE</title>
      </Helmet>
      <h1 className="sr-only">JUNGLE</h1>
      <CategorySection />
      <StyledIntroductionSection>
        <StyledIntroduction>
          취업을 헤쳐나가는 용감한 사자들, JUNGLER
          <div>
            <Link to={'/introduction'}>
              <ArrowScrollDown color="var(--bs-black-400)" />
            </Link>
          </div>
        </StyledIntroduction>
        <StyledTeamBox>
          <StyledTeamTitle>JUNGLE</StyledTeamTitle>
          <StyledTeamContent>
            <StyledButton
              type="button"
              onClick={() =>
                window.open('https://github.com/twelive/JUNGLE', '_blank')
              }
            >
              <img src={gitLogo} alt="git" />
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() =>
                window.open(
                  'https://www.figma.com/file/lrcTq4IIk5FnHrfkC7AUej/Jungle_%EB%94%94%EC%9E%90%EC%9D%B8?type=design&node-id=40%3A731&mode=design&t=qZmauJzdsjNoGeH8-1',
                  '_blank'
                )
              }
            >
              <img src={figmaLogo} alt="figma" />
            </StyledButton>
          </StyledTeamContent>
        </StyledTeamBox>
      </StyledIntroductionSection>
    </>
  );
}

export default MainPage;

const StyledIntroductionSection = styled.div`
  display: flex;
  height: 22.5rem;
  padding: 3.125rem 0;

  @media ${(props) => props.theme.device.tablet} {
    height: 18.75rem;
    padding: 2.5rem 0;
  }
  @media ${(props) => props.theme.device.mobile} {
    height: fit-content;
    display: block;
    padding: 1.875rem 0;
  }
`;

const StyledIntroduction = styled.div`
  position: relative;
  width: 100%;
  align-self: center;
  padding-right: 3.125rem;
  font-size: 3.75rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  word-spacing: 1rem;

  @media ${(props) => props.theme.device.tablet} {
    padding-right: 2.5rem;
    font-size: 3.25rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    padding: 0 0 1.875rem 0;
    border-bottom: 0.15rem solid var(--bs-black-400);
    font-size: 3rem;
  }

  div {
    position: absolute;
    right: 2rem;
    bottom: -8rem;
    z-index: 1;

    @media ${(props) => props.theme.device.tablet} {
      right: 2rem;
      bottom: -5rem;
    }
    @media ${(props) => props.theme.device.mobile} {
      right: 0;
      bottom: 0;
    }
  }
`;

const StyledTeamBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.875rem;
  width: 60%;
  padding-left: 3.125rem;
  border-left: 0.15rem solid var(--bs-black-400);

  @media ${(props) => props.theme.device.tablet} {
    padding-left: 2.5rem;
  }
  @media ${(props) => props.theme.device.mobile} {
    width: 100%;
    border-left: none;
    padding: 1.875rem 0 0;
  }
`;

const StyledTeamTitle = styled.span`
  font-size: 3rem;
  font-weight: 600;
`;

const StyledTeamContent = styled.p`
  margin-left: auto;
  font-size: 2rem;
`;

const StyledButton = styled.button`
  margin: 0.125rem 0.25rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 3rem;
    height: 3rem;

    @media ${(props) => props.theme.device.tablet} {
      width: 2.5rem;
      height: 2.5rem;
    }
    @media ${(props) => props.theme.device.mobile} {
      width: 2rem;
      height: 2rem;
    }
  }
`;
