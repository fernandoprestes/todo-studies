import { ITarefas } from '../../../types/tarefa'

interface TarefasProps extends ITarefas {
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

export const Item = ({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa
}: TarefasProps) => {
  return (
    <li
      className={`item ${selecionado ? 'itemSelecionado' : ''}`}
      onClick={() =>
        selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}
