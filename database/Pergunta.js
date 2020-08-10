const Sequelize = require("sequelize")
const connection = require("./database")

const Pergunta = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//usando o force caso a tabela ainda não exista ele fará criar
Pergunta.sync({force: false}).then(() => {})

module.exports = Pergunta