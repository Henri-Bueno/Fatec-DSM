import { app } from "./app";

const port = Number(process.env.PORT);
app.listen(port, () => {
  console.log(`API disponível na porta ${port}`);
});
