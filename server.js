const express = require("express");
const app = express();

const PORT = process.env.PORT || 2222;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
