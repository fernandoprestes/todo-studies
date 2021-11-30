import { FormEvent, useState } from 'react'
import { ITarefas } from '../../types/tarefa'
import { Button } from '../Button'
import * as S from './styles'
import { v4 as uuaidv4 } from 'uuid'

interface ISetTarefas {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

export const Form = ({ setTarefas }: ISetTarefas) => {
  const [time, setTime] = useState('00:00:00')
  const [tarefa, setTarefa] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const novaTarefa = {
      tarefa: tarefa,
      tempo: time
    }

    setTarefas(tarefas => [
      ...tarefas,
      { ...novaTarefa, selecionado: false, completado: false, id: uuaidv4() }
    ])
    setTarefa('')
    setTime('')
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <label htmlFor="tarefa">Adicione uma tarefa</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          value={tarefa}
          onChange={event => setTarefa(event.target.value)}
          required
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="23:59:59"
          value={time}
          onChange={event => setTime(event.target.value)}
          required
        />
      </div>
      <Button text={'Adicionar'} type="submit" />
    </S.Form>
  )
}
