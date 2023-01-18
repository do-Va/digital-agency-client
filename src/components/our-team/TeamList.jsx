import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';
import TeamMember from './TeamMember';

const TeamList = () => {
  const { ourTeams, ourTeamLoader } = useSelector(store => store.ourTeam);

  return (
    <TeamListWrapper>
      {ourTeams.map(item => (
        <TeamMember key={item._id} {...item} />
      ))}
    </TeamListWrapper>
  );
};

const TeamListWrapper = styled.div`
  width: 100%;
  margin-top: 104px;

  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));

  @media ${mediaQuery.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default TeamList;
