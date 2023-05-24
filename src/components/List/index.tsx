import { ITarefa } from '../../types/types';
import Item from './Item';
import style from './styles.module.scss'

interface IProps{
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada:ITarefa) => void
}

function List({tarefas, selecionaTarefa}:IProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa)=>{
            return(
              <Item
                selecionaTarefa={selecionaTarefa}
                key={tarefa.index}
                {...tarefa}
              />
            )
        })}
      </ul>
    </aside>
  );
}

export default List;
