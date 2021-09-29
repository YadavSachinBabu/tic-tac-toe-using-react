import React, { useEffect, useState } from "react";
import Container from "./Container";

export default function Game() {
  const [text, setText] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [isTurnOfX, setIsTurnOfX] = useState(false);
  const mover = isTurnOfX ? "X" : "O";
  const textChanger = (index) => {
    const data = [...text];
    if (data[index] === "") {
      data[index] = isTurnOfX ? "X" : "O";
      setText(data);
      setIsTurnOfX(!isTurnOfX);
    } else {
      return;
    }
  };

  useEffect(() => {
    const winner = isWinner();
    if (winner) {
      alert(`WINNER WINNER PLAYER "${winner}" IS WINNER.`);
      setText(["", "", "", "", "", "", "", "", "", ""]);
    }
  }, [text]);
  const isWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (text[a] && text[a] === text[b] && text[a] === text[c]) {
        return text[a];
      }
    }
    return null;
  };

  return (
    <div>
      <h1>Tic Tac Toe Game Using React</h1>
      <h4> {`Next Move Of : ${mover}`} </h4>
      <div>
        <div
          className="row jc-center"
        >
          <Container onClick={() => textChanger(0)} text={text[0]} />
          <Container onClick={() => textChanger(1)} text={text[1]} />
          <Container onClick={() => textChanger(2)} text={text[2]} />
        </div>
        <div
          className="row jc-center"
        >
          <Container onClick={() => textChanger(3)} text={text[3]} />
          <Container onClick={() => textChanger(4)} text={text[4]} />
          <Container onClick={() => textChanger(5)} text={text[5]} />
        </div>
        <div
          className="row jc-center"
        >
          <Container onClick={() => textChanger(6)} text={text[6]} />
          <Container onClick={() => textChanger(7)} text={text[7]} />
          <Container onClick={() => textChanger(8)} text={text[8]} />
        </div>
      </div>
      <br />
      <button
        onClick={() => {
          setText(["", "", "", "", "", "", "", "", "", ""]);
        }}
      >
        CLEAR GAME
      </button>
    </div>
  );
}
