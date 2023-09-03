const express = require('express');
const friendsRouter = require('./routers/friends.router.js')
const messagesRouter = require('./routers/messages.router.js');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

//mounting the friends object in the express app 
app.use('/friends',friendsRouter);

app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});