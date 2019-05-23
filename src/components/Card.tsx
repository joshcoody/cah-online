import * as React from "react";

type CardTypes = "WHITE" | "BLACK";

export interface CardProps {
  type: CardTypes;
  text: string;
  choices: number;
}

const Card = ({ type, text, choices }: CardProps) => (
  <div className={`card ${type}`}>
    <div className="content">{text}</div>
    <div className="footer">
      <div className="logo" />
      {choices && <div className="choices">{choices}</div>}
    </div>
  </div>
);

export default Card;
