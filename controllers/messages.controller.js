const path = require('path')
function getMessages(req,res) {
  // res.send("<ul><li>Helloo Albert!</li></ul>");
  
  res.sendFile(path.join(__dirname,'..','public','skimountain.jpg'))
}

function postMessage(req,res) {
  res.send("updated messages");
}

module.exports = {
  getMessages,
  postMessage,
};
