import { Item } from './Item'
import * as S from './styles'

export const List = () => {
  const tarefas = [
    {
      tarefa: 'React',
      tempo: '00:30:00'
    },
    {
      tarefa: 'JS',
      tempo: '00:45:00'
    },
    {
      tarefa: 'TS',
      tempo: '00:55:00'
    }
  ]
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
