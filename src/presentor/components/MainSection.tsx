import styled from '@emotion/styled';

const StyledMainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  padding: 1em;
  background: #eeeeee;
`;

const MainSection: React.FC = ({ children }) => {
  return <StyledMainSectionWrapper>{children}</StyledMainSectionWrapper>;
};

export default MainSection;
