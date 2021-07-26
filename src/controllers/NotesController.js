const Note = require('../models/NoteModel');
class NotesController {
  async createNote(request, response){
    const {title, body} = request.body;

    try{
      const note = new Note({title, body});
      await note.save();

      return response
      .status(201)
      .json(note);

    }catch(error){
      return response
      .status(400)
      .json({
        error: `Failed to create a new note: ${error}`
      });
    }
  }

  async listNotes(request, response){
    try{
      const notes = await Note.find();
      return response
      .status(200)
      .json(notes);
    }catch(error){
      return response
      .status(400)
      .json({
        error: `Failed to list notes: ${error}`
      })
    }
  }

  async deleteNote(request, response){
    const {id} = request.params;

    try{
      await Note.findByIdAndDelete(id);
      return response
      .status(200)
      .json({
        message: "Note successfully deleted"
      });
    }catch(error){
      return response
      .status(400)
      .json({
        error: `Failed to delete this note: ${error}`
      })
    }
  }
};

module.exports = NotesController;