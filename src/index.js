import express from 'express';
import { Portfolio, Auth, Uploads } from './app/controllers/';

const app = express();
const port = 3000;

app.use(express.json()); // padronização de troca de dados
app.use(express.urlencoded({ extended: false })); //  segurança

app.use('/portfolio', Portfolio);
app.use('/auth', Auth);
app.use('/uploads', Uploads);

console.log(`Servidor rodando no link http://localhost:${port}`);
app.listen(port); // abrir o servidor
