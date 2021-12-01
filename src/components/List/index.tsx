import { ITarefas } from '../../types/tarefa'
import { Item } from './Item'
import * as S from './styles'

interface TarefasProps{
  tarefas: ITarefas[]
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

export const List = ({ tarefas, selecionaTarefa }: TarefasProps) => {
  return (
    <S.List>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(item => (
          <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </S.List>
  )
}
