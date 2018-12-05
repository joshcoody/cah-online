import * as React from "react";

type CardTypes = "WHITE" | "BLACK";

interface CardInterface {
  type: CardTypes;
  text: string;
  choices: number;
}

const styles = {};

const Card = ({ type, text, choices }: CardInterface) => (
  <div className={`card ${type}`}>
    {type}
    <div className="content">{text}</div>
    <div className="footer">
      <div className="logo" />
      {choices && <div className="choices">{choices}</div>}
    </div>
  </div>
);

export default Card;
