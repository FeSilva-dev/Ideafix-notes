class NotesController {
  async createNote(request, response){
    const {title, body} = request.body;

    try{
      const note = new Note( {title, body} );
      await note.save();

      return response
      .status(201)
      .json(note);

    }catch(error){
      return response
      .status(400)
      .json({
        error: "Failed to create a new note"
      });
    }
  }
};

module.exports = NotesController;