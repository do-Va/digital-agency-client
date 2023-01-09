import styled from 'styled-components/macro';
import TeamMember from './TeamMember';

import team1 from '../../assets/teams/team1.jpg';
import team2 from '../../assets/teams/team2.jpg';
import team3 from '../../assets/teams/team3.jpg';
import team4 from '../../assets/teams/team4.jpg';
import team5 from '../../assets/teams/team5.jpg';
import team6 from '../../assets/teams/team6.jpg';
import { mediaQuery } from '../../utils/styles-values';

const teams = [
  { id: 1, name: 'Samantha Jones', title: 'Illustrator', url: team1 },
  {
    id: 2,
    name: 'Nicole Green',
    title: 'Owner Creative Director',
    url: team2,
  },
  { id: 3, name: 'Steve Smith', title: 'Head of Marketing', url: team3 },
  { id: 4, name: 'Kevin Pietersen', title: 'Graphic Designer', url: team4 },
  {
    id: 5,
    name: 'Marie Broadbet',
    title: 'Social Media Manager',
    url: team5,
  },
  {
    id: 6,
    name: 'Margaret Adelman',
    title: 'Web Designer & Developer',
    url: team6,
  },
];

const TeamList = () => {
  return (
    <TeamListWrapper>
      {teams.map(item => (
        <TeamMember key={item.id} {...item} />
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
