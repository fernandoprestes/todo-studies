import { ITarefas } from '../../types/tarefa'
import { Item } from './Item'
import * as S from './styles'

export const List = ({ tarefas }: { tarefas: ITarefas[] }) => {
  return (
    <S.List>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </S.List>
  )
}
