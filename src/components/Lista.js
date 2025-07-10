import React from "react";
import Coment from "./Comentarios"

const mensagens = [1, 2, 3, 4];

function Lista() {
  return (
    <div className="Lista-container">
        <div className="mensagens-header">
            <h2 className="title">Mensagens:</h2>
        </div>
    <div className="messages-container">
        <div className="messages-list">
            <Coment/>
            <Coment/>
            <Coment/>
            <Coment/>
        </div>
    </div>
</div>
  );
}

export default Lista;
