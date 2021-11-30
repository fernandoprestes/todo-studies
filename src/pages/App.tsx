import { Timer } from '../components/Timer'
import { Form } from './../components/Form'
import { List } from './../components/List'
import * as S from './styles'

function App() {
  return (
    <S.Container>
      <Form />
      <List />
      <Timer />
    </S.Container>
  )
}

export default App
