import { Button } from '../Button'
import { Clock } from './Clock'
import * as S from './styles'

export const Timer = () => {
  return (
    <S.Timer>
      <p className="titulo">Escolha um card e inicie o cronômetro</p>
      <div className="relogioWrapper">
        <Clock />
      </div>
      <Button text="Começar" />
    </S.Timer>
  )
}
