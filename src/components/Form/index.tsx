/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import Bottao from "../Button";
import style from "./styles.module.scss";
import { v4 as uuidv4 } from 'uuid';
import { ITarefa } from "../../types/types";

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTarefas(tarefasAtigas => 
      [
        ...tarefasAtigas,
        {
          index: uuidv4(),
          ...this.state,
          selecionado: false,
          completado: false,
        }
      ]
    );
    this.setState({
      tarefa: "",
      tempo: "00:00",
    });
  }
  render(): React.ReactNode {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            value={this.state.tarefa}
            onChange={(e) =>
              this.setState({ ...this.state, tarefa: e.target.value })
            }
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step={"1"}
            name="tempo"
            value={this.state.tempo}
            onChange={(e) =>
              this.setState({ ...this.state, tempo: e.target.value })
            }
            id="tempo"
            min={"00:00:00"}
            max={"01:30:00"}
            required
          />
        </div>
        <Bottao type="submit">Adicionar</Bottao>
      </form>
    );
  }
}

export default Form;
