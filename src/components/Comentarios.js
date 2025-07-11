import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Comentarios() {
    const [depoimentos, setDepoimentos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchDepoimentos = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5432/depoimentos'); // Ajuste a URL conforme necessário
    //             setDepoimentos(response.data);
    //         } catch (error) {
    //             console.error("Erro ao buscar depoimentos:", error);
    //             setError('Erro ao carregar depoimentos.');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchDepoimentos();
    // }, []);

    useEffect(() => {
        const fetchDepoimentos = async () => {
            try {
                const response = await axios.get('http://localhost:9000/depoimentos');
                if (Array.isArray(response.data)) {
                    setDepoimentos(response.data);
                } else {
                    setError('Formato de dados inválido.');
                }
            } catch (err) {
                console.error("Erro ao buscar depoimentos:", err);
                setError('Erro ao carregar depoimentos.');
            } finally {
                setLoading(false);
            }
        };
    
        fetchDepoimentos();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', options); // Formato brasileiro
    };

    if (loading) {
        return <p>Carregando depoimentos...</p>;
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <div className='grid-metodo'>
                {depoimentos.length === 0 ? (
                    <p>Nenhum depoimento encontrado.</p>
                ) : (
                    depoimentos.map(depoimento => (
                        <div key={depoimento.id} className="message-card">
                            <div className="delete-icon" />
                            <div className="message-body">
                                <div className="message-info">
                                    <h3 className="user-name">{depoimento.nome_usuario}</h3>
                                    <div className="message-meta-line">
                                        <span className="message-id">
                                            <strong>ID:</strong> {depoimento.id}
                                        </span>
                                        <span className="message-date">{formatDate(depoimento.data)}</span>
                                    </div>
                                </div>
                                <p className="message-text">
                                    {depoimento.mensagem}
                                </p>
                            </div>
                            <div className="options-dot" />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Comentarios;