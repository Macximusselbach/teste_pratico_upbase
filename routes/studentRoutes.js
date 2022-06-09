const express = require('express');
const studentRouter = express.Router();
const studentService = require('../infra/database/services/studentService.js');



studentRouter.get('/', async (req, res) => {

  try {
    const result = await studentService.getMultiple(req.query.page);
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ Error: error });

  }
});

studentRouter.post('/', async (req, res) => {

  try {
    const result = await studentService.create(req.body);
    res.status(201).json(result);

  } catch (error) {
    res.status(500).json({ Error: error });

  }
});

studentRouter.put('/:id', async (req, res) => {

  try {
    const result = await studentService.update(req.params.id, req.body);
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ Error: error });

  }
});

studentRouter.delete('/:id', async (req, res) => {

  try {
    const result = await studentService.remove(req.params.id);
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ Error: error });

  }
});

module.exports = studentRouter;