function getMessages(req, res) {
  res.send("<ul><li>Helloo Albert!</li></ul>");
}

function postMessage(req, res) {
  res.send("updated messages");
}

module.exports = {
  getMessages,
  postMessage,
};
