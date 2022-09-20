import React from "react";
import styles from "../styles/Game.module.scss";

interface Prop {
  step: number;
  questions: any[];
  question: {
    title: string;
    variants: string[];
  };
  onClickStep: (i: number) => void;
}

const Game = ({ step, question, onClickStep, questions }: Prop) => {
  const percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);
  return (
    <>
      <div className={styles.progress}>
        <div
          style={{ width: `${percentage}%` }}
          className={styles.progress__inner}
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant: string, i: number) => (
          <li onClick={() => onClickStep(i)} key={i}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
