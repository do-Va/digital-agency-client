import styled from 'styled-components/macro';
import { mediaQuery } from '../../utils/styles-values';

const TeamMember = ({ name, title, url }) => {
  return (
    <TeamMemberWrapper>
      <div className="img-container">
        <img src={url} alt={name} />
      </div>
      <h4 className="name">{name}</h4>
      <h5 className="title">{title}</h5>
      <h5 className="hover-title">See Details</h5>
    </TeamMemberWrapper>
  );
};

const TeamMemberWrapper = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gray-light);
  border-radius: 50px;
  transition: all 0.3s linear;

  .img-container {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 60px;

    display: flex;

    img {
      flex: 1;
    }
  }

  .name {
    margin-bottom: 24px;
  }

  .title {
    font-weight: var(--fw-regular);
    margin-bottom: 24px;
  }

  .hover-title {
    font-weight: var(--fw-regular);
    cursor: pointer;
    transition: all 0.3s linear 0.3s;
    color: var(--red);
  }

  @media ${mediaQuery.lg} {
    .hover-title {
      opacity: 0;
      transition: all 0.3s linear 0.3s;
    }

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 20px 40px 5px rgba(0, 0, 0, 0.15);

      .hover-title {
        transition: all 0.3s linear 0.3s;
        opacity: 1;
      }
    }
  }
`;

export default TeamMember;
