const express = require('express');
const bodyParser = require('body-parser');
const pessoaRoutes = require('./routes/pessoaRoutes');
const sequelize = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/pessoas', pessoaRoutes);

sequelize.sync().then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}.`);
    });
}).catch(error => {
    console.error('Erro ao conectar com o banco de dados:', error);
});
