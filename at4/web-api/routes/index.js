var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const alunoRouter = require('./routes/aluno.route');
app.use('/aluno', alunoRouter);


module.exports = router;