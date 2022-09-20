import Image from "next/image";
import styles from "../styles/Result.module.sass";
import React from "react";
import src from "./2278992.png";

type Prop = {
  correct: number;
  questions: any[];
};

const Result = ({ correct, questions }: Prop) => {
  return (
    <div className={styles.result}>
      <Image src={src} alt="img" width={150} height={150} />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <button onClick={() => window.location.reload()}>
        Попробовать снова
      </button>
    </div>
  );
};

export default Result;
