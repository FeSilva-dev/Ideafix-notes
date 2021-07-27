import { useEffect, useState } from 'react';
import { ApiNotes } from '../../services/ApiNotes';
import { NotesCards } from "../../components/Notes";
import { NotesForm } from "../../components/NotesForm";
import {toast} from 'react-toastify'

import './index.css';

export function HomePage(){
  const [notes, setNotes] = useState([]);

  async function fetchNotes(){
    try{
      const response = await ApiNotes.showNotes();
      setNotes(response);
    }catch(error){
      console.log(error);
    }
  }

  async function createNote(note){
    try{
      await ApiNotes.createNote(note);
      toast.success("Nota criada com sucesso!");
      await fetchNotes();
    }catch(error){
      toast.error("Houve um erro ao criar a nota");
    }
  }

  async function deleteNote(id){
    try{
      await ApiNotes.deleteNote(id);
      toast.success("Nota excluída com sucesso!");
      await fetchNotes();
    }catch(error){
      toast.error("Houve um erro ao excluir a nota");
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return(
    <div id="notes-content">
      <NotesForm createNote={createNote}/>
      <NotesCards deleteNote={deleteNote} notes={notes}/>
    </div>
  )
};