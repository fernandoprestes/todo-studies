import { useEffect, useState } from 'react'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefas } from '../../types/tarefa'
import { Button } from '../Button'
import { Clock } from './Clock'
import * as S from './styles'

interface TimerProps {
  selecionado: ITarefas | undefined
}

export const Timer = ({ selecionado }: TimerProps) => {
  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  return (
    <S.Timer>
      <p className="titulo">Escolha um card e inicie o cronômetro</p>
      <div className="relogioWrapper">
        <Clock tempo={tempo} />
      </div>
      <Button text="Começar" />
    </S.Timer>
  )
}
