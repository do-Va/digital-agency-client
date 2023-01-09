import styled from 'styled-components/macro';
import { Title } from '../_custom';
import TeamList from './TeamList';

const OurTeam = () => {
  return (
    <OurTeamWrapper>
      <div className="max-container">
        <Title text="<span>Meet The Team</span>" align="center" />

        <TeamList />
      </div>
    </OurTeamWrapper>
  );
};

const OurTeamWrapper = styled.section`
  padding: 100px 0px;
  min-height: 100vh;
  display: flex;

  .max-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default OurTeam;
