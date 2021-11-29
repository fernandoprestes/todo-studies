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
        {tarefas.map((item, index) => {
          return (
            <li key={index} className="item">
              <h3>{item.tarefa}</h3>
              <span>{item.tempo}</span>
            </li>
          )
        })}
      </ul>
    </S.List>
  )
}
