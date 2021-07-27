import { useState } from 'react';
import {toast} from 'react-toastify'
import './index.css';

export function NotesForm({createNote}){
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function createNewNote(event){
    event.preventDefault();
    if(!title || !body){
      toast.error("É necessário preencher todos os campos");
      return;
    }
    
    const note = {
      title,
      body
    };

    await createNote(note);

    setTitle("");
    setBody("");
  }

  return(
    <div id="notes">
      <div className="notes-container">
        <div className="notes-form-title">
          <h1>Bloco de notas</h1>
        </div>

        <div className="form-notes">
          <form onSubmit={createNewNote}>
            <div className="input-single">
              <input 
                type="text" 
                placeholder="Assunto"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="input-single">
              <textarea 
                placeholder="Texto"
                value={body}
                onChange={(event) => setBody(event.target.value)}
              />
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