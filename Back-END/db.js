async function connect() {  
    const { Pool } = require("pg");

    if (global.connection) return global.connection.connect();

    const pool = new Pool({
        user: process.env.USER_NAME,
        host: process.env.HOST_NAME,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
        port: process.env.PORT_NUMBER
    });
    
    const client = await pool.connect();
    console.log("O Pool de conexão foi criado com sucesso!");
    client.release();

    global.connection = pool;
    return pool.connect();
}

connect();



async function insertDepoimento(depoimento) {
    const client = await connect();
    const sql = "INSERT INTO depoimentos(nome_usuario, mensagem) VALUES($1, $2);";
    const values = [depoimento.nome_usuario, depoimento.mensagem];
    await client.query(sql, values);
}

async function selectDepoimento(id) {
    const client = await connect();
    const res = await client.query("SELECT * FROM depoimentos WHERE id=$1", [id]);
    return res.rows;
}

async function selectDepoimentos() {
    const client = await connect();
    const res = await client.query("SELECT * FROM depoimentos");
    return res.rows;
}

async function updateDepoimento(id, depoimento) {
    const client = await connect();
    const sql = "UPDATE depoimentos SET nome_usuario=$1, mensagem=$2 WHERE id=$3";
    const values = [depoimento.nome_usuario, depoimento.mensagem, id];
    await client.query(sql, values);
}

async function deleteDepoimento(id) {
    const client = await connect();
    const sql = "DELETE FROM depoimentos WHERE id=$1";
    const values = [id];
    await client.query(sql, values);
}

module.exports = {
    insertDepoimento,
    selectDepoimentos,
    selectDepoimento,
    deleteDepoimento,
    updateDepoimento
};