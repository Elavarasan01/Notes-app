import "./App.css";
import { useEffect, useState } from "react";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import NotesList from "./components/NotesList";
import CreateNotes from "./components/CreateNotes";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      _id: new Date().toString(),
      title: "Meetings",
      text: "Schedule meeting with UI/UX team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  const getApi = ()=>{
    axios.get("http://localhost:1234/api/notes/")
    .then((res)=>{
      setNotes(res.data)
    })
  }

useEffect(()=>{
  getApi();
},[])

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes}  getApi={getApi}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes getApi={getApi}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
