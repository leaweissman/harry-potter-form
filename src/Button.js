import styled from 'styled-components'

export default function Button({ text }) {
    return <SubmitButton>{text}</SubmitButton>;
}
const SubmitButton = styled.button`
  border: none;
  background: var(--hufflepuff);
  padding: 0.3rem 0.6rem;
  color: var(--gryffindor);
  border-radius: 4px;
margin: 2rem;
`;