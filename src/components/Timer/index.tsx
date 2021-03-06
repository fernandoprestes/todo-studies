import { useEffect, useState } from 'react'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefa'
import { Button } from '../Button'
import { Clock } from './Clock'
import * as S from './styles'

interface TimerProps {
  selecionado: ITarefa | undefined
  finalizarTarefa: () => void
}

export const Timer = ({ selecionado, finalizarTarefa }: TimerProps) => {
  const [tempo, setTempo] = useState<number>()

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  function handleClick(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1)
        return handleClick(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }

  return (
    <S.Timer>
      <p className="titulo">Escolha um card e inicie o cronômetro</p>
      <div className="relogioWrapper">
        <Clock tempo={tempo} />
      </div>
      <Button text="Começar" onClick={() => handleClick(tempo)} />
    </S.Timer>
  )
}
