const { where } = require('sequelize');
const database = require('../models');
const pessoa = require('../models/pessoa');

class Services {

    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return database[this.model].findAll();
    };

    async criarRegistro(dadosCriacao) {
        return database[this.model].create(dadosCriacao);
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistroAtualizados = database[this.model].update(dadosAtualizados, {
            where: {id: id}
        });
        if (listaDeRegistroAtualizados[0] === 0) {
            return false;
        }
        return true;
    }

    // exclusão logica
    async deletaRegistro(id) {

        const registroDeletado = database[this.model].update({ativo: false}, {
            where: {id: id}
        });
        if (registroDeletado[0] === 0) {
            return false;
        }
        return true;
    }

}

module.exports = Services;