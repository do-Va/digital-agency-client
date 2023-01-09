import styled from 'styled-components/macro';

const InputGroup = ({ name, title, textarea }) => {
  return (
    <InputGroupWrapper>
      <label htmlFor={name}>{title}</label>

      {textarea ? (
        <textarea name={name} id={name}></textarea>
      ) : (
        <input type="text" name={name} id={name} />
      )}
    </InputGroupWrapper>
  );
};

const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  label {
    font-size: var(--fs-md);
  }

  input,
  textarea {
    min-width: 100%;
    height: 70px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid var(--dark-blue);
    background-color: #ffeef6;
  }

  input {
    height: 70px;
  }

  textarea {
    min-height: 156px;
    resize: vertical;
  }
`;

export default InputGroup;
