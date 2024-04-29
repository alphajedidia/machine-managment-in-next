const twilio = require('twilio');

const accountSid = 'VOTRE_ACCOUNT_SID';
const authToken = 'VOTRE_AUTH_TOKEN';

const client = twilio(accountSid, authToken);
client.messages
  .create({
     body: 'Votre message ici',
     from: 'VOTRE_NUMÉRO_TWILIO',
     to: 'NUMÉRO_DESTINATAIRE'
   })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
