import { Button } from '../Button'
import * as S from './styles'

export const Form = () => {
  return (
    <S.Form>
      <div className="inputContainer">
        <label htmlFor="tarefa">Adicione uma tarefa</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
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
          max="01:30:00"
        />
      </div>
      <Button />
    </S.Form>
  )
}
