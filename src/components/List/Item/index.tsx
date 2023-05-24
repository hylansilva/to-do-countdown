import { ITarefa } from "../../../types/types";
import item from "./item.module.scss";

interface IProps extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  index,
  selecionaTarefa,
}: IProps) {
  return (
    <li
      className={`${item.item} ${selecionado ? item.itemSelecionado : ""} ${
        completado ? item.itemCompletado : ""
      }`}
      onClick={() => !completado &&
        selecionaTarefa({
          tarefa,
          tempo,
          completado,
          selecionado,
          index,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={item.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}

export default Item;
