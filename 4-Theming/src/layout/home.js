import {Container} from '../style'

export default function Home({press}) {
  return (
   <Container>
      <h1>Ooooopa!</h1>
      <button onClick={press}>Theme</button>
   </Container>
  );
}