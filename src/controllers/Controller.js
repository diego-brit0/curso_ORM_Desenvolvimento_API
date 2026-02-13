const Service = require('../services/Services.js');

class Controller {

    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async criarRegistro(req, res) {
        
        const dadosParaCriacao = req.body;
        try {
            const NovoRegistro = await this.entidadeService.criarRegistro(dadosParaCriacao);
            return res.status(200).json(NovoRegistro);

        } catch(erro) {
            return res.status(500).json({mensagem: `Erro de servidor`})
        }    
    }

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch ( erro ) {
        //erro
        }
    }

    async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizado = req.body;

        try{
            // isUpdated
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizado, Number(id));
            if(!foiAtualizado) {
                return res.status(400).json({
                    mensagem: `registro não foi atualizado` 
                });
            }
            return res.status(200).json({
                    mensagem: `Atualizado com sucesso` 
                });
        } catch (erro) {
            return res.status(400).json({
                    mensagem: `registro não foi atualizado` 
            });
        }
    }

    async deleta(req, res) {

        const { id } = req.params;
        
        try {

            const foiDeletado = await this.entidadeService.deletaRegistro(Number(id));
            if(! foiDeletado) {
                return res.status(400).json({
                    mensagem: `registro não foi deletado` 
                });
            }
            return res.status(200).json({
                    mensagem: `registro foi deletado com sucesso` 
            });

        } catch (erro) {
            return res.status(400).json({
                    mensagem: `registro não foi deletado` 
            });
        }
    }

}

module.exports = Controller;