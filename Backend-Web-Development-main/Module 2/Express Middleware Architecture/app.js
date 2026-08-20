const express = require("express");

// The two routers are already written and mounted for you.
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");

// Import your middleware
const requestId = require("./middleware/requestId");
const logger = require("./middleware/logger");
const timing = require("./middleware/timing");

const app = express();

// Built-in body parser
app.use(express.json());

// GLOBAL middleware
// Order matters!
app.use(requestId); // 1. Create req.id first
app.use(logger);    // 2. Logger can now access req.id
app.use(timing);    // 3. Timer can now access req.id

// Routers
app.use("/posts", postsRouter);
app.use("/users", usersRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

module.exports = app;