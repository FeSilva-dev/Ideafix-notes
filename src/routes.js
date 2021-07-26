const { Router } = require('express');
const NotesController = require('./controllers/NotesController');

const router = Router();
const notesController = new NotesController();

router.get('/notes/show', notesController.listNotes);
router.post('/notes/create', notesController.createNote);
router.delete('/notes/delete/:id', notesController.deleteNote);

module.exports = router