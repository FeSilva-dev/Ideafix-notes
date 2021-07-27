import './index.css';

export function NotesCards({notes, deleteNote}){
  return(
    <div id="notes-cards">
      <div className="notes-cards-title">
        <h1>Suas notas</h1>
      </div>
      <div className="container">
        {notes.map((note) => (
          <div className="note-single" key={note._id}>
            <div className="remove-icon">
              <button
                type="button"
                onClick={() => deleteNote(note._id)}
              >
                X
              </button>
            </div>
            <div className="title-note">
              <h3>{note.title}</h3>
            </div>
            <div className="body-note">
              <p>{note.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};