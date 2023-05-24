import React from "react";
import style from "./styles.module.scss";

class Bottao extends React.Component<{
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void
}> {
  render(): React.ReactNode {
    const { type = "button", onClick} = this.props;
    return (
      <button onClick={onClick} className={style.botao} type={type}>
        {this.props.children}
      </button>
    );
  }
}

export default Bottao;
