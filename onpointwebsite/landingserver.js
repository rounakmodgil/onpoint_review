const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, "frontend", "build")));
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
