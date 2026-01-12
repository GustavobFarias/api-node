import { app } from "./server/app";

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server rodando na porta ${process.env.PORT || 3000}`);
});
