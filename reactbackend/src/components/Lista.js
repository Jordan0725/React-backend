import React from "react";
import Coment from "./Comentarios"

function Lista() {
  return (
    <div className="Lista-container">
        <div className="mensagens-header">
            <h2 className="title">Mensagens:</h2>
        </div>
    <div className="messages-container">
        <div className="messages-list">
            <Coment/>
        </div>
    </div>
</div>
  );
}

export default Lista;
