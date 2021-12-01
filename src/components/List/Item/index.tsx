import { ITarefas } from '../../../types/tarefa'
import iconCheckd from './../../../assets/img/check-mark.svg'

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
      className={`item ${selecionado ? 'itemSelecionado' : ''} ${
        completado ? 'itemCompletado' : ''
      }`}
      onClick={() =>
        !completado &&
        selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className="concluido" aria-label="tarefa completado">
          <img src={iconCheckd} alt="" />
        </span>
      )}
    </li>
  )
}
