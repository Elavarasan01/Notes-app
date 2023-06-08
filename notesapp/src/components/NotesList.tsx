import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";
import axios from "axios";

interface INotesListProps {
  notes: Note[];
  getApi:()=>void;
}

const NotesList: React.FC<INotesListProps> = ({ notes,getApi }) => {
  const handleDelete = (_id: string) => {
    axios.delete("http://localhost:1234/api/notes/"+_id)
    .then(()=>{
      console.log("deleted the note")
      getApi();
    })
  };
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note._id} note={note} handleDelete={handleDelete} />;
    });
  };
  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
