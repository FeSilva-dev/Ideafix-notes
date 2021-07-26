import './index.css'

export function NotesForm(){
  return(
    <div id="notes">
      <div className="notes-container">
        <div className="notes-form-title">
          <h1>Bloco de notas</h1>
        </div>

        <div className="form-notes">
          <form>
            <div className="input-single">
              <input type="text" placeholder="Assunto"/>
            </div>
            <div className="input-single">
              <textarea placeholder="Texto"></textarea>
            </div>
            <div className="button-submit">
              <button>Criar nota</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};