const Note = require('../models/note.model');

exports.createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
        data: null
      });
    }

    const newNote = new Note({ title, content, category, isPinned });
    const savedNote = await newNote.save();

    return res.status(201).json({
      success: true,
      message: "Note created successfully",
      data: savedNote
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null
    });
  }
};
