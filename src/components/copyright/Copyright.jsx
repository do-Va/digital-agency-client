import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';

const Copyright = () => {
  return (
    <CopyrightWrapper className="text_small">
      <p>Copyright &copy; 2020 Zebb Agency. All Right Reserved</p>

      <div className="security">
        <p>Cookie Policy</p>
        <p>Privacy Policy</p>
      </div>
    </CopyrightWrapper>
  );
};

const CopyrightWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  text-align: center;
  gap: 24px;
  background-color: var(--dark-blue);
  color: var(--white);

  .security {
    width: 100%;
    max-width: 250px;
    display: flex;
    justify-content: space-between;
  }

  @media ${mediaQuery.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export default Copyright;
