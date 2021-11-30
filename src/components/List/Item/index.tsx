import { ITarefas } from '../../../types/tarefa'

export const Item = ({ tarefa, tempo, selecionado, completado }: ITarefas) => {
  return (
    <li className="item">
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
