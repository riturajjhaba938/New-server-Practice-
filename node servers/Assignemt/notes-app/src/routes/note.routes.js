const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');

router.post('/bulk', noteController.createBulkNotes);
router.post('/', noteController.createNote);
router.get('/', noteController.getAllNotes);
router.get('/:id', noteController.getNoteById);
router.put('/:id', noteController.replaceNote);
router.patch('/:id', noteController.updateNoteFields);

module.exports = router;
