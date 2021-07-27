import { NotesCards } from "../../components/Notes";
import { NotesForm } from "../../components/NotesForm";

import './index.css'

export function HomePage(){
  return(
    <div id="notes-content">
      <NotesForm />
      <NotesCards />
    </div>
  )
};