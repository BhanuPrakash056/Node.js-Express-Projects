const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

const friendsRouter = express.Router();

//replacing app with friendsROUTER
friendsRouter.post('', friendsController.postFriend);
friendsRouter.get('', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

//mounting the friends object in the express app 
app.use('/friends',friendsRouter);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});