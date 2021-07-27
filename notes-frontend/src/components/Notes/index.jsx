import './index.css'

export function NotesCards(){
  return(
    <div id="notes-cards">
      <div className="notes-cards-title">
        <h1>Suas notas</h1>
      </div>
      <div className="container">
        <div className="note-single">
          <div className="remove-icon">
            <button
              type="button"
            >
              X
            </button>
          </div>
          <div className="title-note">
            <h3>Ideafix</h3>
          </div>
          <div className="body-note">
            <p>Empresa de pesquisa e inteligencia</p>
          </div>
        </div>
        <div className="note-single">
          <div className="remove-icon">
            <button
              type="button"
            >
              X
            </button>
          </div>
          <div className="title-note">
            <h3>Ideafix</h3>
          </div>
          <div className="body-note">
            <p>Empresa de pesquisa e inteligencia</p>
          </div>
        </div>
        <div className="note-single">
          <div className="remove-icon">
            <button
              type="button"
            >
              X
            </button>
          </div>
          <div className="title-note">
            <h3>Ideafix</h3>
          </div>
          <div className="body-note">
            <p>Empresa de pesquisa e inteligencia</p>
          </div>
        </div>
      </div>
    </div>
  );
};