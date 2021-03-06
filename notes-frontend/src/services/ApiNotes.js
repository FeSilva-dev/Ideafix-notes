import { Api } from "./Api"

export const ApiNotes = {
  createNote: async (note) => {
    const response = await Api.post('/notes/create', note);

    return response.data;
  },

  showNotes: async () => {
    const response = await Api.get('/notes/show');

    return response.data;
  },

  deleteNote: async (id) => {
    const response = await Api.delete(`/notes/delete/${id}`);

    return response.data;
  }
}