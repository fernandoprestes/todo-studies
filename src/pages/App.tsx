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

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefas =>
        tarefas.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa
        })
      )
    }
  }

  return (
    <S.Container>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Timer selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </S.Container>
  )
}

export default App
