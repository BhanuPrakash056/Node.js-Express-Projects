const express = require("express");
const app = express();
port = 3000;

const friends = [
  {
    id: 0,
    name: "bhanu",
  },
  {
    id: 1,
    name: "prakash",
  },
];
//middleware
app.use((req, res, next) => {
  console.log(`method : ${req.method} 
    url: ${req.url}`);
  next();
});
app.get("/", (req, res) => {
  res.send("hello world!");
});
app.get("/messages", (req, res) => {
  res.send("This is the message route!");
});
app.get("/friend", (req, res) => {
  res.send("This is the friend route!");
});
//adding dynamic route
app.get("/friend/:friendID", (req, res) => {
  const friendID = Number(req.params.friendID);
  const friend = friends[friendID];
  if (friend) {
    res.send(friend);
  } else {
    res.status(404).send("There is no friend ");
  }
});


app.listen(port, console.log(`listening on port ${port}`));
