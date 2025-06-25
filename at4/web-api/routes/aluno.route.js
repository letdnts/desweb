const express = require('express');
const router = express.Router();
const AlunoService = require('../services/aluno.service');

router.get("/listar", (req, res) => {
  res.json(AlunoService.listar());
});

router.get("/buscar/:id", (req, res) => {
  const aluno = AlunoService.buscarPorId(req.params.id);
  if (aluno) res.json(aluno);
  else res.status(404).send("Aluno não encontrado.");
});

router.post("/cadastrar", (req, res) => {
  const novo = AlunoService.cadastrar(req.body);
  res.status(201).json(novo);
});

router.put("/atualizar/:id", (req, res) => {
  const atualizado = AlunoService.atualizar(req.params.id, req.body);
  if (atualizado) res.json(atualizado);
  else res.status(404).send("Aluno não encontrado para atualizar.");
});

router.delete("/deletar/:id", (req, res) => {
  const deletado = AlunoService.deletar(req.params.id);
  if (deletado) res.json(deletado);
  else res.status(404).send("Aluno não encontrado para deletar.");
});

module.exports = router;
