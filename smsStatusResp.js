const dadosTeste = require('./dadosTeste');

const totalvoice = require("totalvoice-node");
var request = require("request");

var sms_id
// sms_id = dadosTeste.teste1.sms_id //resposta_usuario=true via doc page
// sms_id = dadosTeste.teste2.sms_id //resposta_usuario=false
sms_id = dadosTeste.teste3.sms_id //resposta_usuario=true

var api_get_method = '/sms/'
var sms_api_url_req = process.env.SMS_API_URL + api_get_method + sms_id

const req_options = {
  method: "GET",
  url: sms_api_url_req,
  headers: {
    'Accept': "application/json",
    'Access-Token': process.env.SMS_ACCESS_TOKEN
  },
};

request.get(req_options, function (err, res, body) {
  if (err) {
    console.log("err:[", err, "]");
  }
//   res.end();
  console.log("body:[", body, "]");
});
