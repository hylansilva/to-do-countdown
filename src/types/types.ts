export interface ITarefa{
  index:string,
  tarefa:string,
  tempo: string,
  selecionado: boolean,
  completado: boolean
}

export interface IProps extends ITarefa{
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSeleciona: ITarefa) => void
}