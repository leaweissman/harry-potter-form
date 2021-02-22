import './GlobalStyles';
import Form from './Form';
import formForProducts from './Form';
import styled from 'styled-components';
import Button from './Button';


function App() {
  return (
    <Wrapper>
      <h1>Hello!</h1>
      <Form />
      <Button text='Add' />
      <CancelButton>Cancel</CancelButton>
    </Wrapper>
  );
}
const Wrapper = styled.div`
color: var(--hufflepuff);
background-color: var(--gryffindor);
padding: 1rem;
margin: 2rem;
border-radius: 1rem;
border: solid 3px var(--hufflepuff);
border-radius: 4px;`

const CancelButton = styled.button`
border: solid 1px var(--hufflepuff);
background: var(--gryffindor);
padding: 0.3rem 0.6rem;
color: var(--hufflepuff);
border-radius: 4px;
margin: 2rem;
`;
export default App;
