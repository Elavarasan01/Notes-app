import * as React from "react";
import { Note } from "../models/note.model";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

interface INotesProps {
  note: Note;
  handleDelete: (_id: string) => void;
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => handleDelete(note._id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
