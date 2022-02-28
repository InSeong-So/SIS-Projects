import styled from '@emotion/styled';

const StyledMainSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  padding: 1em;
  background: #f6f6f6;
  gap: 2em;
`;

const MainSection: React.FC = ({ children }) => {
  return <StyledMainSectionWrapper>{children}</StyledMainSectionWrapper>;
};

export default MainSection;
