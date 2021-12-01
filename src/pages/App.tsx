import { useState } from 'react'
import { Timer } from '../components/Timer'
import { ITarefas } from '../types/tarefa'
import { Form } from './../components/Form'
import { List } from './../components/List'
import * as S from './styles'

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([])

  const [selecionado, setSelecionado] = useState<ITarefas>()

  function selecionaTarefa(tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefas =>
      tarefas.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }))
    )
  }

  return (
    <S.Container>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Timer />
    </S.Container>
  )
}

export default App
