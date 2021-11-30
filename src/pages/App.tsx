import { useState } from 'react'
import { Timer } from '../components/Timer'
import { ITarefas } from '../types/tarefa'
import { Form } from './../components/Form'
import { List } from './../components/List'
import * as S from './styles'

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([])

  return (
    <S.Container>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Timer />
    </S.Container>
  )
}

export default App
