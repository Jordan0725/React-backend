import React from 'react'

function Comentarios() {
  return (

        <div className="message-card">
                <div className="delete-icon" />
                <div className="message-body">
                <div className="message-info">
                    <h3 className="user-name">Usuário de teste</h3>
                    <div className="message-meta-line">
                    <span className="message-id">
                        <strong>ID:</strong> 123456
                    </span>
                    <span className="message-date">04/07/2025</span>
                    </div>
                </div>

                <p className="message-text">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
                    tortor lacus sem phasellus ante suspendisse odio odio ultricies
                    venenatis adipiscing. Nullam erat quam volutpat adipiscing vel
                    vitae pulvinar neque vitae. Eget eget laoreet vivamus tempus
                    donec rhoncus pulvinar varius ante ipsum malesuada.”
                </p>
                </div>

                <div className="options-dot" />
        </div>
  )
}

export default Comentarios
