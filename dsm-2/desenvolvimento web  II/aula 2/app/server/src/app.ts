import express, { type Request, type Response } from 'express';
import { pool } from './database';

export const app = express();
app.use(express.json());

// curl -X GET http://localhost:3002/health
app.get("/health", (_req: Request, res:Response) => {
  res.json({ status: "ok" });
});

/*
curl -X POST http://localhost:3002/users \
    -H "Content-Type: application/json" \
    -d '{"nome":"Ana","idade":21}'
*/
app.post('/users', async (req: Request, res:Response) => {
  const { nome, idade } = req.body ?? {};

  if (typeof nome !== 'string' || !nome.trim() ) {
    res.status(400).json({ erro: 'Nome deve ter entre 1 e 120 caracteres.' });
    return;
  }

  if (typeof idade !== 'number' || !Number.isInteger(idade) || idade < 0 ) {
    res.status(400).json({ erro: 'Idade deve ser um número inteiro positivo.' });
    return;
  }

  const result = await pool.query(
    'INSERT INTO usuarios (nome, idade) VALUES ($1, $2) RETURNING id, nome, idade',
    [nome.trim(), idade],
  );
  res.status(201).json(result.rows[0]);
});

// curl -X GET http://localhost:3002/users
app.get('/users', async (_req: Request, res:Response) => {
  const result = await pool.query('SELECT id, nome, idade FROM usuarios ORDER BY id');
  res.json(result.rows);
});

// curl -X DELETE http://localhost:3002/users/1 
app.delete('/users/:id', async (req: Request, res:Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({ erro: 'ID deve ser um inteiro positivo válido.' });
    return;
  }

  const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
  if (result.rowCount === 0) {
    res.status(404).json({ erro: 'Usuário não encontrado.' });
    return;
  }
  res.status(200).json(result.rows[0]);
});

app.use((_req: Request, res:Response) => {
  res.status(404).json({ erro: 'Rota não encontrada.' });
});
