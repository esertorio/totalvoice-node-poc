const dadosTeste = require('./dadosTeste');
const totalvoice = require("totalvoice-node");
const client = new totalvoice(process.env.SMS_ACCESS_TOKEN); //202004131752

var numero_destino = dadosTeste.teste3.numero_destino;
var mensagem = dadosTeste.teste3.mensagem;
var resposta_usuario_bool = dadosTeste.teste3.resposta_usuario_bool;

//  /**
//    * Envia um sms para um número destino
//    * @param {string} numero_destino
//    * @param {string} mensagem
//    * @param {bool} resposta_usuario
//    * @param {bool} multi_sms
//    * @param {string} data_criacao
//    * @return {Promise}
//    */
//   this.enviar = function (numero_destino, mensagem, resposta_usuario, multi_sms, data_criacao)

console.log('numero_destino:[', numero_destino ,']');
console.log('mensagem:[', mensagem, ']');
console.log('resposta_usuario_bool:[', resposta_usuario_bool, ']');
client.sms
  .enviar( numero_destino, mensagem, resposta_usuario_bool)
  .then(function (data) {
    console.log(JSON.stringify(data));
  })
  .catch(function (error) {
    console.error("Erro: ", JSON.stringify(error));
  });
